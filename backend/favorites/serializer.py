from rest_framework import serializers
from users.serializer import UserSerializer
from .models import Favorite

class FavoriteSerializer(serializers.ModelSerializer):
    """
    Serializer for the Favorite model.
    
    Includes a nested UserSerializer for the related user object. The `book_id` and `user` fields are read-only to ensure data integrity.
    """
    user = UserSerializer(read_only=True)
    class Meta:
        model = Favorite
        fields = ['id', 'user', 'book_id', 'title', 'thumbnail_url']
        read_only_fields = ['book_id', 'user']
        depth = 1