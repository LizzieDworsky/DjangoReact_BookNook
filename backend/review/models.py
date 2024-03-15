from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class Review(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete = models.CASCADE,
        related_name = "reviews"
    )
    book_id = models.CharField(max_length=255)
    text = models.TextField()
    rating = models.PositiveIntegerField(
        validators = [
            MinValueValidator(1),
            MaxValueValidator(5)
        ]
    )

    def __str__(self):
        return f"Review by {self.user.username} for book {self.book_id} - Rating: {self.rating}"
