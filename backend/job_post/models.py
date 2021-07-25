from django.db import models
from common.models import TrackingModel
from ckeditor_uploader.fields import RichTextUploadingField


class PostCategory(TrackingModel):
    name = models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return self.name


class Post(TrackingModel):
    title = models.CharField(max_length=300)
    body = RichTextUploadingField()
    category = models.ForeignKey(PostCategory, on_delete=models.SET_NULL, null=True)

    def __str__(self) -> str:
        return self.title