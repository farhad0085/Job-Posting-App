from django.urls import path
from .views import PostListAPIView, PostRetrieveAPIView


urlpatterns = [
    path('posts/', PostListAPIView.as_view()),
    path('posts/<str:pk>/', PostRetrieveAPIView.as_view()),
]
