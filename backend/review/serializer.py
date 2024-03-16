from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'user', 'book_id', 'text', 'rating']
        read_only_fields = ['user', 'book_id']
