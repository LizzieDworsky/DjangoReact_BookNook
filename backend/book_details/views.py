from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from reviews.views import get_reviews_for_book
from favorites.models import Favorite

# Create your views here.

@api_view(["GET"])
@permission_classes([AllowAny])
def get_book_details(request, book_id):
    """
    Fetch and return book details including reviews and favorite status for a given book_id. This view is accessible to any user.

    Parameters:
    - request (HttpRequest): The request object.
    - book_id (str): The unique identifier for the book from the Google Books API.

    Returns:
    - Response: HTTP 200 OK with book details including reviews, average rating, and favorite status in JSON format.
    """
    reviews_data = get_reviews_for_book(book_id)

    average_rating = None
    if reviews_data:
        ratings = [review["rating"] for review in reviews_data]
        average_rating = sum(ratings) / len(ratings) if ratings else 0

    is_favorite = False
    if not request.user.is_anonymous:
        is_favorite = Favorite.objects.filter(
            book_id = book_id,
            user = request.user
        ).exists()

    book_details_data = {
        "book_id": book_id,
        "reviews": reviews_data,
        "average_rating": average_rating,
        "is_favorite": is_favorite
    }
    return Response(book_details_data, status=status.HTTP_200_OK)