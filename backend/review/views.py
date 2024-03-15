from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import Review
from .serializer import ReviewSerializer

# Create your views here.

@api_view(["GET"])
@permission_classes([AllowAny])
def all_book_reviews(request, book_id):
    if request.method == "GET":
        reviews = Review.objects.filter(book_id=book_id)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def user_reviews(request, book_id):
    if request.method == "POST":
        serializer = ReviewSerializer(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user, book_id=book_id)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(["PUT", "DELETE"])
def review_details(request, pk):
    if request.method == "PUT":
        return Response("PUT")
    if request.method == "DELETE":
        return Response("DELETE")