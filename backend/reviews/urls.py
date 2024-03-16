from django.urls import path
from . import views

urlpatterns = [
    path("<int:pk>/", views.review_details),
    path("<str:book_id>/", views.all_book_reviews),
    path("user/<str:book_id>/", views.user_reviews)
]