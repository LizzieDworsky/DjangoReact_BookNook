from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .serializer import RegisterSerializer

@api_view(["POST"])
@permission_classes([AllowAny])
def register(request):
    """
    Handle user registration by creating a new user with the provided credentials. This view is accessible to any user.

    Parameters:
    - request (HttpRequest): The request object containing the registration payload.

    Expected Payload:
    - username (str): The desired username for the new user.
    - password (str): The desired password for the new user.
    - password2 (str): A confirmation of the desired password for validation.
    - email (str): The email address for the new user.
    - first_name (str): The first name of the new user.
    - last_name (str): The last name of the new user.

    Returns:
    - Response: HTTP 201 Created on successful registration with user data.
                HTTP 400 Bad Request if the payload is invalid or the passwords do not match.

    Side Effects:
    - Creates a new user record in the database with the provided credentials.
    """
    if request.method == "POST":
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
