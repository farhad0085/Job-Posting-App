from django.http.response import HttpResponse
from django.shortcuts import render


def index(request):
    html = """
    <html>
        <title>Hello world</title>
        <h1>Hello world</h1>
        <a href="/admin">Login now</a>
    </html>
    """
    return HttpResponse(html)

def privacy_policy(request):
    return render(request, "others/privacy-policy.html")
