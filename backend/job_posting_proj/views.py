from django.http.response import HttpResponse




def index(request):
    html = """
    <html>
        <title>Hello world</title>
        <h1>Hello world</h1>
        <a href="/admin">Login now</a>
    </html>
    """
    return HttpResponse(html)