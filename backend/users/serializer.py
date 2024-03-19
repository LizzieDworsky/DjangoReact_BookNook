from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for user detail views.
    
    Provides serialization for basic user fields like username, first name, last name, and email.
    """
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']

class RegisterSerializer(serializers.ModelSerializer):
    """
    Serializer for user registration.
    
    Includes additional validation for password matching and leverages Django's built-in password validators. The `password2` field is used for confirmatory password input and is excluded upon user creation.
    """
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')

    def validate(self, attrs):
        """
        Validates that the two password entries match.
        
        Raises a ValidationError if the passwords do not match, ensuring data integrity and user confirmation of password.
        """
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password2": "Password fields didn't match."})
        return attrs
    
    def create(self, validate_data):
        """
        Creates a new user instance with the validated data, after removing the confirmatory password field.
        """
        validate_data.pop('password2')
        user = User.objects.create_user(**validate_data)
        return user