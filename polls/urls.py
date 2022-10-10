from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('information/1234567890123', views.home, name='index'),
    path('search/', views.search, name='search'),
    path('upload/', views.upload, name='upload'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
]