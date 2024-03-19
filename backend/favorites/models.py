from django.db import models
from django.conf import settings

# Create your models here.
class Favorite(models.Model):
    """
    Represents a book marked as favorite by a user.
    
    Attributes:
        user (ForeignKey): Reference to the User model, the owner of the favorite.
        book_id (CharField): The Google Books API book ID, identifying the favorited book.
        title (CharField): The title of the book, for quick reference without needing to query an enternal API.
        thumbnail_url (TextField): URL to the thumbnail image of the book, used for display purposes in user interface.
    """
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete = models.CASCADE,
        related_name = "favorites",
        help_text="The user who marked the book as a favorite."
    )
    book_id = models.CharField(max_length=255, help_text="The Google Books API ID for the favorited book.")
    title = models.CharField(max_length=255, help_text="The title of the favorited book.")
    thumbnail_url = models.TextField(help_text="The URL to the thumbnail image of the favorited book.")

    def __str__(self):
        return f"{self.title} (Favorite of {self.user.username})"