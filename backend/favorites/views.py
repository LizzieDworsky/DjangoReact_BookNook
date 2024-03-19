from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Favorite
from .serializer import FavoriteSerializer

# Create your views here.

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def all_user_favorites(request):
    """
    Fetch and return all favorite books for the authenticated user. This view requires user authentication.

    Returns:
    - Response: HTTP 200 OK with a list of favorite books in JSON format.
    """
    if request.method == "GET":
        favorites = request.user.favorites.all()
        serializer = FavoriteSerializer(favorites, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_user_favorite(request, book_id):
    """
    Create a new favorite entry for the user for a given book_id. This endpoint requires user authentication.

    Parameters:
    - request (HttpRequest): The request object containing the user and payload.
    - book_id (str): The unique identifier for the book from the Google Books API.

    Expected Payload:
    - title (str): The title of the book.
    - thumbnail_url (str): The URL to the thumbnail image of the book.

    Returns:
    - Response: HTTP 201 Created on success with the favorite data.
                HTTP 400 Bad Request if the book is already favorited or if the payload is invalid.

    Side Effects:
    - Creates a new favorite record in the database associated with the authenticated user and specified book_id.
    """
    if request.method == "POST":
        existing_favorite = Favorite.objects.filter(user=request.user, book_id=book_id)
        if existing_favorite:
            return Response({"detail": "You have already favorited this book."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = FavoriteSerializer(data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save(user=request.user, book_id=book_id)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    
@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def favorite_details(request, pk):
    """
    Delete a favorite item by its primary key (pk) if it belongs to the authenticated user. This view requires user authentication.

    Parameters:
    - request (HttpRequest): The request object.
    - pk (int): The primary key of the favorite item to be deleted.

    Returns:
    - Response: HTTP 204 No Content on successful deletion.
                HTTP 401 Unauthorized if the favorite item does not belong to the authenticated user.
    """
    favorite = get_object_or_404(Favorite, pk=pk)
    if (favorite.user.id == request.user.id):
        if request.method == "DELETE":
            favorite.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)