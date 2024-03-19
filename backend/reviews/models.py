from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class Review(models.Model):
    """
    Represents a book review by a user.
    
    Attributes:
        user (ForeignKey): Reference to the User model, the author of the review. Cascade delete is enabled.
        book_id (CharField): Stores the Google Books API book ID to associate the review with a specific book.
        text (TextField): The content of the review.
        rating (PositiveIntegerField): The rating for the book, constrained to be between 1 and 5. Validated by MinValueValidator adn MaxValueValidator.
    """
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete = models.CASCADE,
        related_name = "reviews",
        help_text="The user who authored the review."
    )
    book_id = models.CharField(max_length=255, help_text="The Google Books API ID for the reviewed book.")
    text = models.TextField(help_text="The full text content of the review.")
    rating = models.PositiveIntegerField(
        validators = [
            MinValueValidator(1),
            MaxValueValidator(5)
        ],
        help_text="Rating value must be between 1 and 5, inclusive."
    )

    def __str__(self):
        return f"Review by {self.user.username} for book {self.book_id} - Rating: {self.rating}"
