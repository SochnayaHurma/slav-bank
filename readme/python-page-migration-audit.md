# Python routes → mine-front migration audit

Total routes in 'inc/python-routes.php': **38**.
Routes with template in 'template-parts/python/*': **22**.
Routes already migrated to 'mine-front/src/blocks/page-*': **6**.
Routes still missing in 'mine-front': **16**.

## Complexity (hard → easy, by template size)

| Route key | Lines | Chars | Mine-front page | Mode |
| --- | ---: | ---: | :---: | --- |
| aml-fatca | 484 | 20199 | ✅ | external_redirect |
| ecp-regeneration | 356 | 15932 | ✅ | external_redirect |
| faq | 343 | 13691 | ✅ | external_redirect |
| cash-payments | 253 | 10221 | ❌ | external_redirect |
| legal-entities | 226 | 9999 | ❌ | — |
| private-persons | 228 | 9690 | ✅ | external_redirect |
| fx-account-service | 263 | 8999 | ❌ | external_redirect |
| account-service | 226 | 8873 | ❌ | external_redirect |
| business-lending | 204 | 7275 | ❌ | external_redirect |
| appeal-123-fz | 160 | 6376 | ✅ | external_redirect |
| payment-demands | 151 | 5832 | ❌ | external_redirect |
| cashless-payments | 142 | 5612 | ❌ | external_redirect |
| crs | 110 | 4902 | ✅ | external_redirect |
| vacancies | 88 | 4147 | ❌ | external_redirect |
| covid19 | 92 | 3915 | ❌ | external_redirect |
| tariff-depositny | 88 | 3847 | ❌ | external_redirect |
| tariffs-foreign-currency | 86 | 3839 | ❌ | external_redirect |
| security | 77 | 3108 | ❌ | external_redirect |
| business-deposits | 87 | 2989 | ❌ | external_redirect |
| instruction | 81 | 2713 | ❌ | external_redirect |
| notaries | 33 | 1308 | ❌ | external_redirect |
| governance | 24 | 981 | ❌ | external_redirect |

## Missing pages to implement in mine-front

- 'cash-payments' → 'template-parts/python/cash-payments.php'
- 'legal-entities' → 'template-parts/python/legal-entities.php'
- 'fx-account-service' → 'template-parts/python/fx-account-service.php'
- 'account-service' → 'template-parts/python/account-service.php'
- 'business-lending' → 'template-parts/python/business-lending.php'
- 'payment-demands' → 'template-parts/python/payment-demands.php'
- 'cashless-payments' → 'template-parts/python/cashless-payments.php'
- 'vacancies' → 'template-parts/python/vacancies.php'
- 'covid19' → 'template-parts/python/covid19.php'
- 'tariff-depositny' → 'template-parts/python/tariff-depositny.php'
- 'tariffs-foreign-currency' → 'template-parts/python/tariffs-foreign-currency.php'
- 'security' → 'template-parts/python/security.php'
- 'business-deposits' → 'template-parts/python/business-deposits.php'
- 'instruction' → 'template-parts/python/instruction.php'
- 'notaries' → 'template-parts/python/notaries.php'
- 'governance' → 'template-parts/python/governance.php'

## Suggested rollout waves

1. **Wave A (very hard)**: aml-fatca/crs-style compliance-heavy pages and long prose pages (200+ lines).
2. **Wave B (medium)**: pages with mixed hero + list/doc cards (80-200 lines).
3. **Wave C (easy)**: short informational pages (<80 lines).

## Effort estimate (implementation + content QA)

- **Wave A (7 pages, very hard)**: ~4-5 итераций, ~28-36 часов.
- **Wave B (6 pages, medium)**: ~3-4 итерации, ~18-24 часа.
- **Wave C (3 pages, easy)**: ~1-2 итерации, ~6-8 часов.
- **Итого для полного переноса 16 отсутствующих страниц**: ~8-11 итераций, ~52-68 часов + финальный регресс/визуальный QA.

## Stage 3 kickoff checklist

1. Создать отдельную ветку миграции и переносить по волнам (A → B → C).
2. Для каждой страницы создавать 3 блока: `page-*`, `page-*-bento`, `page-*-body`.
3. Hero строить через `slav-bank/hero-simple` (обе опоры ссылок: `url` + `pageId/linkMode`).
4. Правая часть bento всегда `slav-bank/bento-shell-sidebar` без редактирования визуала.
5. Контент body собирать из типовых паттернов (`page-pattern-*`, `base-*`) и лишь затем добавлять page-specific блоки.
6. После каждой волны запускать визуальную сверку с `template-parts/python/*` (цель ≥ 90% сходства).
