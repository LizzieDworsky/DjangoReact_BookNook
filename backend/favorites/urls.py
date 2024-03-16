from django.urls import path
from . import views

urlpatterns = [
    path("", views.all_user_favorites),
    path("<int:pk>/", views.favorite_details),
    path("<str:book_id>/", views.create_user_favorite)
]