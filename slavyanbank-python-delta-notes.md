# Slavyanbank php <- python delta notes

## Branch model
- target branch: `php`
- source/reference branch: `python`
- `master` is archive fallback only and is not used as the primary comparison source in this packet.

## Deploy / regression notes
1. Deploy the updated theme into `wp-content/themes/slavyanbank-alpha/`.
2. Activate it on a clone/staging environment, not on active production theme.
3. Keep Contact Form 7 enabled. The page `Написать в банк` still expects CF7 markup from page content or from the documented `sb_alpha_feedback_form_shortcode` fallback filter.
4. No final UAT is assumed here. This packet is for delta-regression against the existing Beta/RC baseline.

## Search strategy
- Canonical local search URL: `/search/`
- Runtime file: `search.php`
- Data source: real WordPress search over `post` and `page`
- Header overlay now submits to `/search/` with GET parameter `s`
- Empty `/search/` shows a stable landing state instead of a broken results screen

## News strategy
- Canonical local news URL: `/novosti/`
- Runtime archive file: `page-novosti.php`
- Category/archive file: `archive.php`
- Single/detail file: `single.php`
- Data source: standard WordPress posts
- Preferred categories: `news` and `poleznaya_informacia` (with slug fallbacks supported)
- If those categories are absent, the news archive falls back to all published posts

## Legacy redirects covered
- `/o-banke-slavyanbank-html/info_bank-html.html/` -> `/informaciya-banka/`
- `/kontakty.html/` -> `/kontakty/`
- `/otchetnost.html/` -> `/otchetnost/`
- `/rekvizity-banka.html/` -> `/rekvizity-banka/`
- `/forma-obratnoj-svyazi.html/` -> `/napisat-v-bank/`
- `/podderzhka.html/` -> `/podderzhka/`
- `/tarify-banka.html/` -> `/tarify-banka/`
- `/novosti.html/` -> `/novosti/`

## Delta regression check
1. Confirm the existing local pages still open:
   - `/`
   - `/informaciya-banka/`
   - `/kontakty/`
   - `/otchetnost/`
   - `/rekvizity-banka/`
   - `/napisat-v-bank/`
   - `/podderzhka/`
   - `/tarify-banka/`
2. Confirm new local routes:
   - `/search/`
   - `/novosti/`
3. Confirm legacy redirects:
   - `/novosti.html/`
   - `/o-banke-slavyanbank-html/info_bank-html.html/`
   - the existing Beta legacy URLs above
4. In the header, open search overlay, enter a query, and confirm the form submits to `/search/?s=...`.
5. On `/novosti/`, verify:
   - local posts render,
   - local category chips open archive pages if categories exist,
   - client-side filter hides/shows visible cards,
   - empty-state appears when nothing matches the local filter.
6. On a local post single page, verify:
   - title/date/categories render,
   - `Назад к новостям` returns to `/novosti/`.
7. Confirm CF7 path on `/napisat-v-bank/` still works and no custom admin-post flow has returned.
8. Check network panel:
   - no 404 for `assets/css/*`, `assets/js/*`, `assets/img/*`
   - no newly imported unused `python` SVG/PNG pack.

## Rollback
- Switch back to the previous theme ZIP/version.
- Rewrite rules will re-flush once on theme switch/version change; there is no per-request flush.
- No database migrations are introduced by this delta packet.
