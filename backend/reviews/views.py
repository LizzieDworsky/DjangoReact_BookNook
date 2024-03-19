from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import Review
from .serializer import ReviewSerializer

def get_reviews_for_book(book_id):
    """
    Retrieve and serialize all reviews for a specific book identified by book_id.

    Parameters:
    - book_id (str): The unique identifier for the book from the Google Books API.

    Returns:
    - list: A serialized list of reviews for the specified book, each review as a dictionary in JSON format.
    """
    reviews = Review.objects.filter(book_id=book_id)
    serializer = ReviewSerializer(reviews, many=True)
    return serializer.data

@api_view(["GET"])
@permission_classes([AllowAny])
def all_book_reviews(request, book_id):
    """
    Retrieve and return all reviews for a specific book identified by book_id. This view is accessible to any user.

    Parameters:
    - request (HttpRequest): The request object.
    - book_id (str): The unique identifier for the book from the Google Books API.

    Returns:
    - Response: HTTP 200 OK with a list of reviews for the specified book in JSON format.
    """
    if request.method == "GET":
        reviews = Review.objects.filter(book_id=book_id)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def user_reviews(request, book_id):
    """
    Allow authenticated users to post a review for a book identified by book_id. This view requires user authentication.

    Parameters:
    - request (HttpRequest): The request object containing the review payload.
    - book_id (str): The unique identifier for the book from the Google Books API.

    Expected Payload:
    - text (str): The content of the review.
    - rating (int): The rating given to the book, expected to be between 1 and 5.

    Returns:
    - Response: HTTP 201 Created on success with the review data.
                HTTP 400 Bad Request if the payload is invalid.

    Side Effects:
    - Creates a new review record in the database associated with the authenticated user and specified book_id.
    """
    if request.method == "POST":
        serializer = ReviewSerializer(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user, book_id=book_id)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(["PUT", "DELETE"])
@permission_classes([IsAuthenticated])
def review_details(request, pk):
    """
    Allows users to update or delete their own reviews based on the review's primary key (pk). This view requires user authentication.

    Parameters:
    - request (HttpRequest): The request object, containing the updated review data for PUT requests.
    - pk (int): The primary key of the review to update or delete.

    Returns:
    - Response: HTTP 200 OK with updated review data on successful PUT.
                HTTP 204 No Content on successful DELETE.
                HTTP 401 Unauthorized if the review does not belong to the authenticated user.
    """
    review = get_object_or_404(Review, pk=pk)
    if (review.user.id == request.user.id):
        if request.method == "PUT":
            serializer = ReviewSerializer(review, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        if request.method == "DELETE":
            review.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)