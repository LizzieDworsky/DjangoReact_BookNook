from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Favorite
from .serializer import FavoriteSerializer

# Create your views here.

@api_view(["GET", "POST"])
def all_favorites(request):
    if request.method == "GET":
        return Response("GET")
    if request.method == "POST":
        return Response("POST")
    
@api_view(["DELETE"])
def favorite_details(request, pk):
    if request.method == "DELETE":
        return Response("DELETE")