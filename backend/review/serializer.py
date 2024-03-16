from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Review

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']

class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Review
        fields = ['id', 'user', 'book_id', 'text', 'rating']
        read_only_fields = ['user', 'book_id']
        depth = 1
