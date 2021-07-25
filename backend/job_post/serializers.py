from rest_framework import serializers
from .models import Post
from django.conf import settings

SEARCH_PATTERN = 'src=\"/media/uploads'
SITE_DOMAIN = settings.WEBSITE_BACKEND_URL
REPLACE_WITH = f'src=\"{SITE_DOMAIN}/media/uploads/'

class FixAbsolutePathSerializer(serializers.Field):

    def to_representation(self, value):
        text = value.replace(SEARCH_PATTERN, REPLACE_WITH)
        return text


class PostSerializer(serializers.ModelSerializer):
    body = FixAbsolutePathSerializer()
    class Meta:
        model = Post
        fields = '__all__'
