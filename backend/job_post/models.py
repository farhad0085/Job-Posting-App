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
    deadline = models.DateField(blank=True, null=True)
    category = models.ForeignKey(PostCategory, on_delete=models.SET_NULL, null=True)

    def __str__(self) -> str:
        return self.title


class Report(TrackingModel):
    """Reports from the user will store in this table."""

    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    description = models.TextField()
    replied = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name or str(self.id)


class PostViewMeta(TrackingModel):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    ip = models.GenericIPAddressField(default="")
    views = models.IntegerField(default=0)