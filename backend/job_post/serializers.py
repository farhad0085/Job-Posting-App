from rest_framework import serializers

from job_post.utils import get_client_ip
from .models import Post, PostViewMeta, Report
from django.conf import settings
from django.db.models import Sum


SEARCH_PATTERN = 'src=\"/media/uploads'
SITE_DOMAIN = settings.WEBSITE_BACKEND_URL
REPLACE_WITH = f'src=\"{SITE_DOMAIN}/media/uploads/'

class FixAbsolutePathSerializer(serializers.Field):

    def to_representation(self, value):
        text = value.replace(SEARCH_PATTERN, REPLACE_WITH)
        return text


class PostSerializer(serializers.ModelSerializer):
    body = FixAbsolutePathSerializer()
    post_view = serializers.SerializerMethodField('get_post_view')

    class Meta:
        model = Post
        fields = '__all__'


    def get_post_view(self, obj):
        request = self.context.get("request")
        if request:
            client_ip = get_client_ip(request)
        else:
            client_ip = "127.0.0.1"
        
        post_views = PostViewMeta.objects.filter(post=obj)

        views_by_me_obj = post_views.filter(post=obj, ip=client_ip).first()
        if views_by_me_obj:
            views_by_me = views_by_me_obj.views
        else:
            views_by_me = 0
        return {
            "total_views": post_views.aggregate(total=Sum('views')).get("total") or 0,
            "unique_views": post_views.count(),
            "views_by_me": views_by_me
        }


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'
