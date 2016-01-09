from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.home, name = "home"),
    url(r'^lookbook', views.lookbook, name = "lookbook"),
]