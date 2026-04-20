# Stage 4/5 migration status (sb_alpha_routes → mine-front)

Total sb_alpha_routes keys linked to legacy python routes: **38**.
Implemented in mine-front page blocks: **38**.
Missing in mine-front page blocks: **0**.
Implemented but still placeholder-first (needs legacy originals): **0**.
Implemented with draft links (#) to update before release: **2**.

> Duplicates are ignored by design (keys are deduplicated via Set).

## Coverage table

| Route key | Has python template | Mine-front page | Placeholder-only body | Draft links | Legacy source candidate | Note |
| --- | :---: | :---: | :---: | :---: | --- | --- |
| account-service | ✅ | ✅ | ✅ | ✅ | template-parts/python/account-service.php | — |
| aml-fatca | ✅ | ✅ | ✅ | ✅ | template-parts/python/aml-fatca.php | — |
| appeal-123-fz | ✅ | ✅ | ✅ | ✅ | template-parts/python/appeal-123-fz.php | — |
| business-deposits | ✅ | ✅ | ✅ | ✅ | template-parts/python/business-deposits.php | — |
| business-lending | ✅ | ✅ | ✅ | ✅ | template-parts/python/business-lending.php | — |
| cash-payments | ✅ | ✅ | ✅ | ✅ | template-parts/python/cash-payments.php | — |
| cashless-payments | ✅ | ✅ | ✅ | ✅ | template-parts/python/cashless-payments.php | — |
| client-bank-online | — | ✅ | ✅ | ⚠️ | https://github.com/SochnayaHurma/slav-bank/blob/master/templates/client-bank-online.html | — |
| contacts | — | ✅ | ✅ | ✅ | https://github.com/SochnayaHurma/slav-bank/blob/master/templates/contacts.html | — |
| covid19 | ✅ | ✅ | ✅ | ✅ | template-parts/python/covid19.php | — |
| crs | ✅ | ✅ | ✅ | ✅ | template-parts/python/crs.php | — |
| currency-control | — | ✅ | ✅ | ✅ | https://github.com/SochnayaHurma/slav-bank/blob/master/templates/currency-control.html | — |
| disclosur-regulatory | — | ✅ | ✅ | ✅ | source not auto-detected | — |
| ecp-regeneration | ✅ | ✅ | ✅ | ✅ | template-parts/python/ecp-regeneration.php | — |
| faq | ✅ | ✅ | ✅ | ✅ | template-parts/python/faq.php | — |
| fx-account-service | ✅ | ✅ | ✅ | ✅ | template-parts/python/fx-account-service.php | — |
| governance | ✅ | ✅ | ✅ | ✅ | template-parts/python/governance.php | — |
| info-bank-page | — | ✅ | ✅ | ✅ | https://github.com/SochnayaHurma/slav-bank/blob/master/templates/info_bank.html | — |
| instruction | ✅ | ✅ | ✅ | ✅ | template-parts/python/instruction.php | — |
| legal-entities | ✅ | ✅ | ✅ | ✅ | template-parts/python/legal-entities.php | — |
| notaries | ✅ | ✅ | ✅ | ✅ | template-parts/python/notaries.php | — |
| novosti | — | ✅ | ✅ | ✅ | page-novosti.php | — |
| payment-demands | ✅ | ✅ | ✅ | ✅ | template-parts/python/payment-demands.php | — |
| private-persons | ✅ | ✅ | ✅ | ✅ | template-parts/python/private-persons.php | — |
| reporting | — | ✅ | ✅ | ⚠️ | https://github.com/SochnayaHurma/slav-bank/blob/master/templates/reporting.html | — |
| requisites_bank | — | ✅ | ✅ | ✅ | https://github.com/SochnayaHurma/slav-bank/blob/master/templates/requisites-bank.html | Внимание: legacy PHP и jinja различаются по дизайну и SQL-данным; переносить без удаления старого шаблона. |
| security | ✅ | ✅ | ✅ | ✅ | template-parts/python/security.php | — |
| support | — | ✅ | ✅ | ✅ | source not auto-detected | — |
| tariff_privetstvenny | — | ✅ | ✅ | ✅ | https://github.com/SochnayaHurma/slav-bank/blob/master/templates/tariff-privetstvenny.html | — |
| tariff-depositny | ✅ | ✅ | ✅ | ✅ | https://github.com/SochnayaHurma/slav-bank/blob/master/templates/tariff-depositny.html | — |
| tariffs | — | ✅ | ✅ | ✅ | https://github.com/SochnayaHurma/slav-bank/blob/master/templates/tariffs.html | — |
| tariffs_rub | — | ✅ | ✅ | ✅ | https://github.com/SochnayaHurma/slav-bank/blob/master/templates/tariffs-rub.html | — |
| tariffs_slavny | — | ✅ | ✅ | ✅ | https://github.com/SochnayaHurma/slav-bank/blob/master/templates/tariffs-slavny.html | — |
| tariffs-foreign-currency | ✅ | ✅ | ✅ | ✅ | https://github.com/SochnayaHurma/slav-bank/blob/master/templates/tariffs-foreign-currency.html | — |
| vacancies | ✅ | ✅ | ✅ | ✅ | template-parts/python/vacancies.php | — |
| write-to-bank | — | ✅ | ✅ | ✅ | source not auto-detected | — |
| zapros-na-kreditovanie-msp | — | ✅ | ✅ | ✅ | page-zapros-na-kreditovanie-msp.php | — |
| zapros-na-otkrytie-raschetnogo-scheta | — | ✅ | ✅ | ✅ | page-zapros-na-otkrytie-raschetnogo-scheta.php | — |

## Missing mine-front pages

- Нет пропущенных ключей.

## Needs legacy originals (replace placeholder-only body templates)

- Нет блоков с placeholder-only body.

## Draft links to replace before release

- 'client-bank-online' содержит '#' ссылки в mine-front/src/blocks/page-client-bank-online-body/edit.js
- 'reporting' содержит '#' ссылки в mine-front/src/blocks/page-reporting-body/edit.js
