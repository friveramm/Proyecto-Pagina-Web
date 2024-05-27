from django.shortcuts import render

# Create your views here.
def index(request):
    context = {}
    return render(request,"pages/index.html", context)

def ofertas(request):
    context = {}
    return render(request,"pages/ofertas.html", context)

def sigin(request):
    context = {}
    return render(request,"pages/sigin.html", context)

def login(request):
    context = {}
    return render(request,"pages/login.html", context)