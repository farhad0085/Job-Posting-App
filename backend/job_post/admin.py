from django.contrib import admin
from job_post.models import Post, PostCategory


class PostAdmin(admin.ModelAdmin):
    list_display = ["title", "_body", "category", "created_at", "updated_at"]
    list_filter = ["category"]

    def _body(self, obj):
        try:
            return obj.body[:30]
        except:
            return "N/A"


class PostCategoryAdmin(admin.ModelAdmin):
    list_display = ["name", "created_at", "updated_at"]


admin.site.register(Post, PostAdmin)
admin.site.register(PostCategory, PostCategoryAdmin)
