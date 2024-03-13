from django.urls import path
from . import views

urlpatterns = [
    path("", views.all_reviews),
    path("<int:pk>/", views.review_details)
]