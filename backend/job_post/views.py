from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from job_post.filters import PostFilter
from job_post.models import Post, Report
from job_post.serializers import PostSerializer, ReportSerializer
from django_filters import rest_framework as filters


class PostListAPIView(ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-id').all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = PostFilter


class PostRetrieveAPIView(RetrieveAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-id').all()


class ReportCreateAPIVIew(CreateAPIView):
    serializer_class = ReportSerializer
    queryset = Report.objects.all()