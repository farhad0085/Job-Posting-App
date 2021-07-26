from django.contrib import admin
from job_post.models import Post, PostCategory, Report


class PostAdmin(admin.ModelAdmin):
    list_display = ["title", "_body", "category", "created_at", "updated_at"]
    list_filter = ["category"]

    def _body(self, obj):
        try:
            return obj.body[:30]
        except:
            return "N/A"


class ReportAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "_description", "replied", "created_at", "updated_at"]
    list_filter = ["replied"]

    def _description(self, obj):
        try:
            return obj.description[:30]
        except:
            return "N/A"


class PostCategoryAdmin(admin.ModelAdmin):
    list_display = ["name", "created_at", "updated_at"]


admin.site.register(Post, PostAdmin)
admin.site.register(Report, ReportAdmin)
admin.site.register(PostCategory, PostCategoryAdmin)
