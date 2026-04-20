# Stage 4/5 migration status (sb_alpha_routes → mine-front)

Total sb_alpha_routes keys linked to legacy python routes: **38**.
Implemented in mine-front page blocks: **38**.
Missing in mine-front page blocks: **0**.
Implemented but still placeholder-first (needs legacy originals): **2**.

> Duplicates are ignored by design (keys are deduplicated via Set).

## Coverage table

| Route key | Has python template | Mine-front page | Placeholder-only body | Legacy source candidate |
| --- | :---: | :---: | :---: | --- |
| account-service | ✅ | ✅ | ✅ | template-parts/python/account-service.php |
| aml-fatca | ✅ | ✅ | ✅ | template-parts/python/aml-fatca.php |
| appeal-123-fz | ✅ | ✅ | ✅ | template-parts/python/appeal-123-fz.php |
| business-deposits | ✅ | ✅ | ✅ | template-parts/python/business-deposits.php |
| business-lending | ✅ | ✅ | ✅ | template-parts/python/business-lending.php |
| cash-payments | ✅ | ✅ | ✅ | template-parts/python/cash-payments.php |
| cashless-payments | ✅ | ✅ | ✅ | template-parts/python/cashless-payments.php |
| client-bank-online | — | ✅ | ⚠️ | front/src/client-bank-blocks |
| contacts | — | ✅ | ⚠️ | front/src/contacts-blocks |
| covid19 | ✅ | ✅ | ✅ | template-parts/python/covid19.php |
| crs | ✅ | ✅ | ✅ | template-parts/python/crs.php |
| currency-control | — | ✅ | ✅ | front/src/currency-control-blocks |
| disclosur-regulatory | — | ✅ | ✅ | source not auto-detected |
| ecp-regeneration | ✅ | ✅ | ✅ | template-parts/python/ecp-regeneration.php |
| faq | ✅ | ✅ | ✅ | template-parts/python/faq.php |
| fx-account-service | ✅ | ✅ | ✅ | template-parts/python/fx-account-service.php |
| governance | ✅ | ✅ | ✅ | template-parts/python/governance.php |
| info-bank-page | — | ✅ | ✅ | front/src/info-bank-blocks |
| instruction | ✅ | ✅ | ✅ | template-parts/python/instruction.php |
| legal-entities | ✅ | ✅ | ✅ | template-parts/python/legal-entities.php |
| notaries | ✅ | ✅ | ✅ | template-parts/python/notaries.php |
| novosti | — | ✅ | ✅ | page-novosti.php |
| payment-demands | ✅ | ✅ | ✅ | template-parts/python/payment-demands.php |
| private-persons | ✅ | ✅ | ✅ | template-parts/python/private-persons.php |
| reporting | — | ✅ | ✅ | source not auto-detected |
| requisites_bank | — | ✅ | ✅ | front/src/requisites-bank-blocks |
| security | ✅ | ✅ | ✅ | template-parts/python/security.php |
| support | — | ✅ | ✅ | source not auto-detected |
| tariff_privetstvenny | — | ✅ | ✅ | source not auto-detected |
| tariff-depositny | ✅ | ✅ | ✅ | template-parts/python/tariff-depositny.php |
| tariffs | — | ✅ | ✅ | front/src/tariffs-blocks |
| tariffs_rub | — | ✅ | ✅ | source not auto-detected |
| tariffs_slavny | — | ✅ | ✅ | source not auto-detected |
| tariffs-foreign-currency | ✅ | ✅ | ✅ | template-parts/python/tariffs-foreign-currency.php |
| vacancies | ✅ | ✅ | ✅ | template-parts/python/vacancies.php |
| write-to-bank | — | ✅ | ✅ | source not auto-detected |
| zapros-na-kreditovanie-msp | — | ✅ | ✅ | page-zapros-na-kreditovanie-msp.php |
| zapros-na-otkrytie-raschetnogo-scheta | — | ✅ | ✅ | page-zapros-na-otkrytie-raschetnogo-scheta.php |

## Missing mine-front pages

- Нет пропущенных ключей.

## Needs legacy originals (replace placeholder-only body templates)

- 'client-bank-online' (mine-front/src/blocks/page-client-bank-online-body/edit.js) ← использовать оригинал из front/src/client-bank-blocks
- 'contacts' (mine-front/src/blocks/page-contacts-body/edit.js) ← использовать оригинал из front/src/contacts-blocks
