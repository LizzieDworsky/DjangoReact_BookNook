from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Review
from .serializer import ReviewSerializer

# Create your views here.

@api_view(["GET", "POST"])
def all_reviews(request):
    if request.method == "GET":
        return Response("GET")
    if request.method == "POST":
        return Response("POST")
    
@api_view(["PUT", "DELETE"])
def review_details(request, pk):
    if request.method == "PUT":
        return Response("PUT")
    if request.method == "DELETE":
        return Response("DELETE")