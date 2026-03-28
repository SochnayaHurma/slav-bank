# Slavyanbank Alpha/Beta checkpoint notes

## Run notes

1. Use a staging or clone WordPress instance, not the production active theme.
2. Unpack `slavyanbank-alpha-beta.zip` into `wp-content/themes/`.
3. Ensure these pages exist with these slugs:
   - `kontakty`
   - `otchetnost`
   - `rekvizity-banka`
   - `napisat-v-bank`
   - `podderzhka`
   - `tarify-banka`
4. Activate the theme.
5. Visit **Settings → Permalinks** and click **Save Changes** once, or just activate the theme and open the site admin once. The theme flushes rewrite rules only on activation / version bump, not on every request.
6. Optional: set `admin_email` to the address that should receive the “Написать в банк” form, or attach a filter to `sb_alpha_feedback_recipient`.

## Deploy notes

- Deploy only the theme folder; do not deploy the removed `wave1-full-code.md` into theme root.
- The theme is still independent from the old production theme and does not require a child theme.
- External PDFs/XLS and service links stay external by design in Beta.

## Rollback notes

1. Switch back to the previous theme in Appearance → Themes.
2. Remove `slavyanbank-alpha` from `wp-content/themes/` if needed.
3. Leave the created Beta pages as drafts or trash them if they were only for testing.
4. No database migrations are introduced by this Beta theme checkpoint.

## Manual test focus

- Confirm local rendering for `/`, `/kontakty/`, `/otchetnost/`, `/rekvizity-banka/`, `/napisat-v-bank/`, `/podderzhka/`, `/tarify-banka/`.
- Confirm 301 redirects from legacy URLs such as `/kontakty.html/` to their local canonical slugs.
- Confirm the home phone uses `tel:` and not `mailto:`.
- Confirm the support and write-to-bank menu links are local, not production fallbacks.
- Confirm the reporting page no longer has broken heading markup.
- Confirm the feedback form shows success/error notices and sends mail via WordPress.

## Acceptance checklist

- Theme still activates cleanly after Beta changes.
- Alpha smoke pages still render.
- Newly added Beta pages render locally.
- Legacy URL redirects work without flushing rewrites per request.
- Menu/footer/header use local links for all ported pages.
- No `href="#"` remains on ported pages.
- No runtime doc file remains in theme root.
- New assets load without 404.

## Open issues

- Many non-Beta pages still remain external fallbacks.
- Reporting and tariffs documents still point to external production uploads.
- `header.css` and `layout.css` still overlap substantially; Beta avoided risky refactor and isolated new styles into `beta-pages.css`.
- The feedback form depends on WordPress mail transport being configured correctly on the target environment.
