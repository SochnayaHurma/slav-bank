from django.shortcuts import render

def main_page(request):
  return render(request, "index.html", {})

def info_bank(request):
  return render(request, "info_bank.html", {})

def requisites_bank(request):
  return render(request, "requisites-bank.html", {})

def governance(request):
  return render(request, "governance.html", {})

def reporting(request):
  data = [
    {'title': 'Годовая бухгалтерская (финансовая) отчетность за 2024 год.', 'footer': '(Опубликовано 11.04.2025г. Утверждена на годовом ОСА 10.04.2025г.)'},
    {'title': 'Годовая бухгалтерская (финансовая) отчетность за 2023 год.', 'footer': '(Опубликовано 12.03.2024г. Утверждена на годовом ОСА 02.04.2024г.)'},
    {'title': 'Годовая бухгалтерская (финансовая) отчетность за 2022 год. ', 'footer': '(Опубликовано 29.03.2023г. Утверждена на годовом ОСА 20.04.2023г.)'},
    {'title': 'Годовая бухгалтерская (финансовая) отчетность за 2020 год. ', 'footer': '(Опубликовано 29.03.2021г. Утверждена на годовом ОСА 22.04.2021г.)'},
    {'title': 'Годовая бухгалтерская (финансовая) отчетность за 2019 год. ', 'footer': '(Опубликовано 26.03.2020г. Утверждена на годовом ОСА 16.04.2020г.)  '},
    {'title': 'Годовая бухгалтерская (финансовая) отчетность за 2018 год. ', 'footer': '(Утверждена на годовом ОСА 18.04.2019г) (Опубликовано 28.03.2019г.)'},
    {'title': 'Финансовая отчетность по МСФО за 2017 год', 'footer': '(Опубликовано 12.04.2018г.)'},
    {'title': 'Годовая бухгалтерская (финансовая) отчетность за 2017 год', 'footer': '(Опубликовано 12.04.2018г.)'},
  ]
  return render(request, "reporting.html", {'data': data})

def disclosur_regulatory(request):
  return render(request, "disclosure-regulatory.html", {})

def notaries(request):
  return render(request, "notaries.html", {})