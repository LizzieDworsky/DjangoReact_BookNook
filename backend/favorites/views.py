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
        serializer = FavoriteSerializer(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user, book_id=book_id)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def favorite_details(request, pk):
    if request.method == "DELETE":
        return Response("DELETE")