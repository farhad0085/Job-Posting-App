from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from job_post.filters import PostFilter
from job_post.models import Post, Report
from job_post.serializers import PostSerializer, ReportSerializer
from django_filters import rest_framework as filters
from django.db.models import Q
import re

class PostListAPIView(ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-id').all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = PostFilter


class PostRetrieveAPIView(RetrieveAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-id').all()
    related_post_amount = 5

    def get(self, request, *args, **kwargs):
        post = self.get_object()
        serializer = self.get_serializer(post)
        related_posts = self.get_related_posts(post)
        related_posts_serializer = self.get_serializer(related_posts, many=True)
        return Response({
            "post": serializer.data,
            "related_posts": related_posts_serializer.data
        })

    def get_tags_from_title(self, title):
        post_title = re.sub(r"[^a-zA-Z0-9\s]", "", title)
        post_title = ' '.join(post_title.split())
        return post_title.split(" ")

    def get_related_posts_by_tags(self, post_obj):
        tags = self.get_tags_from_title(post_obj.title)
        posts = Post.objects.filter(Q(title__in=tags) | Q(title__in=tags))\
            .exclude(id=post_obj.id)[:self.related_post_amount]
        return posts
    
    def get_related_posts_by_category(self, post_obj):
        posts = Post.objects.filter(category=post_obj.category)\
            .exclude(id=post_obj.id).order_by('-id')[:self.related_post_amount]
        return posts

    def get_related_posts(self, post):
        by_tag = self.get_related_posts_by_tags(post)
        by_category = self.get_related_posts_by_category(post)
        posts = []
        for post in by_tag:
            posts.append(post)
        for post in by_category:
            posts.append(post)
        return posts[:self.related_post_amount]

class ReportCreateAPIVIew(CreateAPIView):
    serializer_class = ReportSerializer
    queryset = Report.objects.all()