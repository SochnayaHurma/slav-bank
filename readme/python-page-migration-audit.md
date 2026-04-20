# Python routes → mine-front migration audit

Total routes in 'inc/python-routes.php': **38**.
Routes with template in 'template-parts/python/*': **22**.
Routes already migrated to 'mine-front/src/blocks/page-*': **22**.
Routes still missing in 'mine-front': **0**.

sb_alpha_routes keys that reference legacy python routes: **38**.
sb_alpha_routes keys with mine-front page blocks: **23**.
sb_alpha_routes keys still missing in mine-front: **15**.

## Complexity (hard → easy, by template size)

| Route key | Lines | Chars | Mine-front page | Mode |
| --- | ---: | ---: | :---: | --- |
| aml-fatca | 484 | 20199 | ✅ | external_redirect |
| ecp-regeneration | 356 | 15932 | ✅ | external_redirect |
| faq | 343 | 13691 | ✅ | external_redirect |
| cash-payments | 253 | 10221 | ✅ | external_redirect |
| legal-entities | 226 | 9999 | ✅ | — |
| private-persons | 228 | 9690 | ✅ | external_redirect |
| fx-account-service | 263 | 8999 | ✅ | external_redirect |
| account-service | 226 | 8873 | ✅ | external_redirect |
| business-lending | 204 | 7275 | ✅ | external_redirect |
| appeal-123-fz | 160 | 6376 | ✅ | external_redirect |
| payment-demands | 151 | 5832 | ✅ | external_redirect |
| cashless-payments | 142 | 5612 | ✅ | external_redirect |
| crs | 110 | 4902 | ✅ | external_redirect |
| vacancies | 88 | 4147 | ✅ | external_redirect |
| covid19 | 92 | 3915 | ✅ | external_redirect |
| tariff-depositny | 88 | 3847 | ✅ | external_redirect |
| tariffs-foreign-currency | 86 | 3839 | ✅ | external_redirect |
| security | 77 | 3108 | ✅ | external_redirect |
| business-deposits | 87 | 2989 | ✅ | external_redirect |
| instruction | 81 | 2713 | ✅ | external_redirect |
| notaries | 33 | 1308 | ✅ | external_redirect |
| governance | 24 | 981 | ✅ | external_redirect |

## Missing pages to implement in mine-front


## sb_alpha_routes coverage vs mine-front page blocks

| Route key | Has python template | Mine-front page |
| --- | :---: | :---: |
| account-service | ✅ | ✅ |
| aml-fatca | ✅ | ✅ |
| appeal-123-fz | ✅ | ✅ |
| business-deposits | ✅ | ✅ |
| business-lending | ✅ | ✅ |
| cash-payments | ✅ | ✅ |
| cashless-payments | ✅ | ✅ |
| client-bank-online | — | ❌ |
| contacts | — | ❌ |
| covid19 | ✅ | ✅ |
| crs | ✅ | ✅ |
| currency-control | — | ❌ |
| disclosur-regulatory | — | ❌ |
| ecp-regeneration | ✅ | ✅ |
| faq | ✅ | ✅ |
| fx-account-service | ✅ | ✅ |
| governance | ✅ | ✅ |
| info-bank-page | — | ❌ |
| instruction | ✅ | ✅ |
| legal-entities | ✅ | ✅ |
| notaries | ✅ | ✅ |
| novosti | — | ❌ |
| payment-demands | ✅ | ✅ |
| private-persons | ✅ | ✅ |
| reporting | — | ❌ |
| requisites_bank | — | ❌ |
| security | ✅ | ✅ |
| support | — | ✅ |
| tariff_privetstvenny | — | ❌ |
| tariff-depositny | ✅ | ✅ |
| tariffs | — | ❌ |
| tariffs_rub | — | ❌ |
| tariffs_slavny | — | ❌ |
| tariffs-foreign-currency | ✅ | ✅ |
| vacancies | ✅ | ✅ |
| write-to-bank | — | ❌ |
| zapros-na-kreditovanie-msp | — | ❌ |
| zapros-na-otkrytie-raschetnogo-scheta | — | ❌ |

## Missing from sb_alpha_routes coverage (duplicates ignored)

- 'client-bank-online' → no python template file
- 'contacts' → no python template file
- 'currency-control' → no python template file
- 'disclosur-regulatory' → no python template file
- 'info-bank-page' → no python template file
- 'novosti' → no python template file
- 'reporting' → no python template file
- 'requisites_bank' → no python template file
- 'tariff_privetstvenny' → no python template file
- 'tariffs' → no python template file
- 'tariffs_rub' → no python template file
- 'tariffs_slavny' → no python template file
- 'write-to-bank' → no python template file
- 'zapros-na-kreditovanie-msp' → no python template file
- 'zapros-na-otkrytie-raschetnogo-scheta' → no python template file

## Suggested rollout waves

1. **Wave A (very hard)**: aml-fatca/crs-style compliance-heavy pages and long prose pages (200+ lines).
2. **Wave B (medium)**: pages with mixed hero + list/doc cards (80-200 lines).
3. **Wave C (easy)**: short informational pages (<80 lines).
