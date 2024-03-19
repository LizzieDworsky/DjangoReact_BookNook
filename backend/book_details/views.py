from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from reviews.views import get_reviews_for_book

# Create your views here.

@api_view(["GET"])
@permission_classes([AllowAny])
def get_book_details(request, book_id):
    reviews_data = get_reviews_for_book(book_id)

    average_rating = None
    if reviews_data:
        ratings = [review["rating"] for review in reviews_data]
        average_rating = sum(ratings) / len(ratings) if ratings else 0

    book_details_data = {
        "book_id": book_id,
        "reviews": reviews_data,
        "average_rating": average_rating,
        "is_favorite": False
    }
    return Response(book_details_data, status=status.HTTP_200_OK)