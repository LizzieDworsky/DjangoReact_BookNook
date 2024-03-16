from rest_framework import serializers
from users.serializer import UserSerializer
from .models import Favorite

class FavoriteSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Favorite
        fields = ['id', 'user', 'book_id', 'title', 'thumbnail_url']
        read_only_fields = ['book_id', 'user']
        depth = 1