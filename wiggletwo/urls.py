from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    # Examples:
    # url(r'^$', 'wiggletwo.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^', include('portfolio.urls')),
    url(r'^admin/', admin.site.urls),
]
