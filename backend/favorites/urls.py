from django.urls import path
from . import views

urlpatterns = [
    path("", views.all_favorites),
    path("<int:pk>/", views.favorite_details)
]