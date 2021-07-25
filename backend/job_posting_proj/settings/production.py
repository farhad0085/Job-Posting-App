from .base import *

WEBSITE_BACKEND_URL = "https://foysal0085.pythonanywhere.com"

DEBUG = False

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}