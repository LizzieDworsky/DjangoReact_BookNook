from rest_framework import serializers
from users.serializer import UserSerializer
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    """
    Serializer for the Review model.
    
    Includes a nested UserSerializer for the related user object. The `user` and `book_id` fields are read-only to maintain data consistency.
    """
    user = UserSerializer(read_only=True)
    class Meta:
        model = Review
        fields = ['id', 'user', 'book_id', 'text', 'rating']
        read_only_fields = ['user', 'book_id']
        depth = 1
