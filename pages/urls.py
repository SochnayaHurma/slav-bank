from django.urls import path
from django.views.generic import TemplateView
from . import views

tariffs_download = [
    {'date': ' с 01.01.2026г', 'title': 'Тарифы банка в валюте РФ.', 'url': 'https://slavbank.ru/wp-content/uploads/standard-osobiy-s-01012026.pdf'},
    {'date': ' с 01.12.2025г', 'title': 'Тарифы банка в валюте РФ и иностранной валюте «Славный» для новых клиентов.', 'url': 'https://slavbank.ru/wp-content/uploads/tp-slavny.pdf'},
    {'date': ' с 01.12.2025г', 'title': 'Тарифы банка в иностранной валюте.', 'url': 'https://slavbank.ru/wp-content/uploads/tarify-v-in-valyute-s-01122025.pdf'},
    {'date': ' с 01.11.2025г', 'title': 'Тарифы банка в валюте РФ и иностранной валюте «Приветственный» для новых клиентов.', 'url': 'https://slavbank.ru/wp-content/uploads/tarif-privetstvenny.pdf'},
    {'date': ' с 01.11.2025г', 'title': 'Тарифы банка в валюте РФ и иностранной валюте «Депозитный» для новых клиентов.', 'url': 'https://slavbank.ru/wp-content/uploads/tarif-depositny.pdf'},
]
tariffs_view = [
    {'date': 'действуют с 01.01.2026г.','title': 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в валюте РФ', 'url': 'https://slavbank.ru/tarify-banka-html/tarify_rf.html'},
    {'date': 'действуют с 13.10.2025г. по 28.02.2026г.','title': 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Славный»', 'url': 'https://slavbank.ru/tarify-banka-html/tarif_slavny.html'},
    {'date': 'действуют с 01.12.2025г.','title': 'Тарифы банковских услуг по обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте', 'url': 'https://slavbank.ru/tarify-banka-html/tarify_valuta.html'},
    {'date': 'действуют с 01.11.2025г. по 28.02.2026г.','title': 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Приветственный»', 'url': 'https://slavbank.ru/tarify-banka-html/tarif_privetstvenny.html'},
    {'date': 'действуют с 01.11.2025г. по 28.02.2026г.','title': 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Депозитный»', 'url': 'https://slavbank.ru/tarify-banka-html/tarif_depositny.html'},
]

urlpatterns = [
  path("", views.main_page, name="info_bank"),
    path("search/", TemplateView.as_view(template_name='search.html'), name="search"),
  path("o-banke-slavyanbank-html/info_bank-html.html/", views.info_bank, name="info_bank"),
  path("rekvizity-banka.html/", views.requisites_bank, name="requisites_bank"),
  path("o-banke-slavyanbank-html/organy_upravlenya.html/", views.governance, name="governance"),
  path("otchetnost.html/", views.reporting, name="reporting"),
  path("o-banke-html/info_bank-html/raskritie-informacii.html/", views.disclosur_regulatory, name="disclosur-regulatory"),
  path("informacziya-dlya-notariusov.html/", views.notaries, name="notaries"),
  path("novosti.html/", views.novosti, name="novosti"),
  # тарифы
  path("tarify-banka.html/", TemplateView.as_view(template_name='tariffs.html', extra_context={'tariffs_download': tariffs_download, 'tariffs_view': tariffs_view}), name="tariffs"),
  path("tarify-banka-html/tarify_rf.html/", views.tariffs_rub, name="tariffs_rub"),
  path("tarify-banka-html/tarif_slavny.html/", views.tariffs_slavny, name="tariffs_slavny"),
  path("tarify-banka-html/tarif_privetstvenny.html/", TemplateView.as_view(template_name='tariff-privetstvenny.html'), name="tariff_privetstvenny"),
  path("tarify-banka-html/tarif_depositny.html/", TemplateView.as_view(template_name='tariff-depositny.html'), name="tariff-depositny"),
  path("tarify-banka-html/tarify_valuta.html/", TemplateView.as_view(template_name='tariffs-foreign-currency.html'), name="tariffs-foreign-currency"),
  # юридическим лицам
  path("yuridicheskim-liczam.html/", TemplateView.as_view(template_name='legal-entities.html'), name="legal-entities"),
  path("yuridicheskim-liczam-html/deposity-dlya-yur-lic.html/", TemplateView.as_view(template_name='business-deposits.html'), name="business-deposits"),
  path("yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz.html/", TemplateView.as_view(template_name='business-lending.html'), name="business-lending"),
  path("yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html/", TemplateView.as_view(template_name='account-service.html'), name="account-service"),
  path("yuridicheskim-liczam-html/obsluzivanie-valut-schetov.html/", TemplateView.as_view(template_name='fx-account-service.html'), name="fx-account-service"),
  path("yuridicheskim-liczam-html/valutny-kontrol.html/", TemplateView.as_view(template_name='currency-control.html'), name="currency-control"),
  path("pod-ft-fromu.html/", TemplateView.as_view(template_name='aml-fatca.html'), name="aml-fatca"),
  path("crs-obmen-s-fns.html/", TemplateView.as_view(template_name='crs.html'), name="crs"),
  path("yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety.html/", TemplateView.as_view(template_name='cashless-payments.html'), name="cashless-payments"),
  path("yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety.html/", TemplateView.as_view(template_name='cash-payments.html'), name="cash-payments"),
  path("yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom.html/", TemplateView.as_view(template_name='payment-demands.html'), name="payment-demands"),
  # частным лицам
  path("chastnym-liczam.html/", TemplateView.as_view(template_name='private-persons.html'), name="private-persons"),
  # клиент-банк
  path("klient-bank-online.html/", TemplateView.as_view(template_name='client-bank-online.html'), name="client-bank-online"),
  path("podderzhka-html/instrukcziya-po-rabote-v-sisteme-klient-bank.html/", TemplateView.as_view(template_name='instruction.html'), name="instruction"),
  path("podderzhka-html/chasto-zadavaemye-voprosy.html/", TemplateView.as_view(template_name='faq.html'), name="faq"),
  path("podderzhka-html/regen.html/", TemplateView.as_view(template_name='ecp-regeneration.html'), name="ecp-regeneration"),
  # поддержка
  path("podderzhka.html/", TemplateView.as_view(template_name='support.html'), name="support"),
  path("podderzhka-html/recom_bezopasnost.html/", TemplateView.as_view(template_name='security.html'), name="security"),
  path("obrashhenie-po-123-fz.html/", TemplateView.as_view(template_name='appeal-123-fz.html'), name="appeal-123-fz"),
  path("covid19.html/", TemplateView.as_view(template_name='covid19.html'), name="covid19"),
  # контакты
  path("kontakty.html/", TemplateView.as_view(template_name='contacts.html'), name="contacts"),
  path("forma-obratnoj-svyazi.html/", TemplateView.as_view(template_name='write-to-bank.html'), name="write-to-bank"),
  path("vakansii.html/", TemplateView.as_view(template_name='vacancies.html'), name="vacancies"),
  # варианты
  path("footers/", TemplateView.as_view(template_name='footer-variants.html'), name="footers"),
]

