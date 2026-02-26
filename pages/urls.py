from django.urls import path
from . import views

urlpatterns = [
  path("", views.main_page, name="info_bank"),
  path("o-banke-slavyanbank-html/info_bank-html.html/", views.info_bank, name="info_bank"),
  path("rekvizity-banka.html/", views.requisites_bank, name="requisites_bank"),
  path("o-banke-slavyanbank-html/organy_upravlenya.html/", views.governance, name="governance"),
  path("otchetnost.html/", views.reporting, name="reporting"),
  path("o-banke-html/info_bank-html/raskritie-informacii.html/", views.disclosur_regulatory, name="disclosur-regulatory"),
  path("informacziya-dlya-notariusov.html/", views.notaries, name="notaries"),
]

