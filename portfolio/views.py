import yaml
import os

from django.conf import settings
from django.shortcuts import render

LINEDRAWINGS = yaml.load( open( 'yamlfiles/portfolio/linedrawings.yml' ) )

def home(request):
    return render(request, 'portfolio/home.html', { 'linedrawings' : LINEDRAWINGS } )
