from rest_framework.generics import ListAPIView, RetrieveAPIView
from job_post.filters import PostFilter
from job_post.models import Post
from job_post.serializers import PostSerializer
from django_filters import rest_framework as filters


class PostListAPIView(ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-id').all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = PostFilter


class PostRetrieveAPIView(RetrieveAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-id').all()
