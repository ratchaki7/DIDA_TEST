from django.shortcuts import redirect, render, reverse
from datetime import datetime, timezone, timedelta
from django.contrib.auth import authenticate, logout
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.db import models
# Create your views here.
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect

from .forms import UploadFileForm


def home(request):
    return render(request, 'home.html')

def upload(request):
    if request.method == "POST":
        tz = timezone(timedelta(hours = 7))
        data = request.POST
        print(datetime.now(tz=tz))
        print(data)
    return render(request, 'upload.html')


def handle_uploaded_file(f):
    with open('./static/media/images/name.txt', 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)
            
def upload_file(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            handle_uploaded_file(request.FILES['file'])
            return HttpResponseRedirect('/success/url/')
    else:
        form = UploadFileForm()
    return render(request, 'upload.html', {'form': form})

    
def login(request):
    context = {}
    context['login_status'] = True
    # logout(request)
    if request.method == 'POST':
        data = request.POST.copy()
        username = data['username']
        password = data['password']

        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            return HttpResponseRedirect(reverse('search', args=[]))
            
        else:
            context['login_status'] = False
            pass

        
    
    
    return render(request, 'login.html', context)



@login_required 
def search(request):
    # print("USER: ", request.user)
    print('login complete =============================')
    return render(request, 'search.html')

def logout(request):
    auth_logout(request)
    return HttpResponseRedirect(reverse('login', args=[]))



