from django.urls import path
from . import views

urlpatterns = [
    path("<str:book_id>/", views.get_book_details)
]