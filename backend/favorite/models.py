from django.db import models

# Create your models here.
class Favorite(models.Model):
    book_id = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    thumbnail_url = models.TextField()