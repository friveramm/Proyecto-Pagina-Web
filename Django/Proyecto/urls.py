from django.urls import path
from Proyecto import views

""" path('nombreURL',funcionVista,nombreDePagina) """
# urlpatterns = [
#     path("", views.index, name="index"),
#     path("page2", views.page2, name="page2"),
# ]

urlpatterns = [
     path("", views.index, name="index"),
     path("ofertas", views.ofertas, name="ofertas"),
     path("sigin", views.sigin, name="sigin"),
     path("login", views.login, name="login"),
]