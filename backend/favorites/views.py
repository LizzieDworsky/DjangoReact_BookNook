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
    if request.method == "GET":
        favorites = request.user.favorites.all()
        serializer = FavoriteSerializer(favorites, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_user_favorite(request, book_id):
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
    favorite = get_object_or_404(Favorite, pk=pk)
    if (favorite.user.id == request.user.id):
        if request.method == "DELETE":
            favorite.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)