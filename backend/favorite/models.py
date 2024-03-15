from django.db import models
from django.conf import settings

# Create your models here.
class Favorite(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete = models.CASCADE,
        related_name = "favorites"
    )
    book_id = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    thumbnail_url = models.TextField()

    def __str__(self):
        return f"{self.title} (Favorite of {self.user.username})"