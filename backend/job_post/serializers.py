from rest_framework import serializers
from .models import Post


SEARCH_PATTERN = 'src=\"/media/uploads'
SITE_DOMAIN = "http://localhost:8000"
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
