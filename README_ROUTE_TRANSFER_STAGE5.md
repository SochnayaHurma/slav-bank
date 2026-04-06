# Route transfer stage5 — corrected Tariffs root migration

This package supersedes stage4 for the tariffs family.

## What was fixed
- The previous tariffs migration package was incomplete: wrapper files existed, but the route template parts were missing.
- The root page `ТАРИФЫ БАНКА` now uses the **special V4 hero with image**, matching the current theme template instead of a generic hero shell.
- Child tariffs pages keep the migration-ready route wrappers and reusable tariff page partial.

## Apply order
1. Copy `inc/route-migration-tariffs.php`
2. Copy `template-parts/routes/tariff-root-page.php`
3. Copy `template-parts/routes/tariff-page.php`
4. Copy the page wrappers:
   - `page-tarify-banka-html.php`
   - `page-tarify_rf.php`
   - `page-tarify_valuta.php`
   - `page-tarif_slavny.php`
   - `page-tarif_privetstvenny.php`
   - `page-tarif_depositny.php`
5. Apply `patches/functions.route-transfer-snippet.php` into `functions.php`

## Notes
- `page-tarify-banka-html.php` is editor-first: if the page content is migrated into the editor, it renders `the_content()`; otherwise it falls back to the corrected special-hero template.
- This package does not modify editor plugins. It only corrects the theme migration layer.
