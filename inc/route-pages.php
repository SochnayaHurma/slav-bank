<?php
if (!defined('ABSPATH')) {
    exit;
}

const SB_ALPHA_ROUTE_VERSION_OPTION = 'sb_alpha_route_version';
const SB_ALPHA_ROUTE_VERSION = '2026.04.21.route-pages.1';

if (!defined('SB_PYTHON_ROUTE_VERSION_OPTION')) {
    define('SB_PYTHON_ROUTE_VERSION_OPTION', 'sb_python_route_version');
}

if (!defined('SB_PYTHON_ROUTE_VERSION')) {
    define('SB_PYTHON_ROUTE_VERSION', SB_ALPHA_ROUTE_VERSION);
}


function sb_alpha_route_aliases(): array
{
    return [
'forma-obratnoj-svyazi.html' => 'write-to-bank',
'forma-obratnoj-svyazi'      => 'write-to-bank',

'podderzhka-html/instrukcziya-po-rabote-v-sisteme-klient-bank.html' => 'instruction',
'podderzhka-html/instrukcziya-po-rabote-v-sisteme-klient-bank'      => 'instruction',

'podderzhka-html/chasto-zadavaemye-voprosy.html' => 'faq',
'podderzhka-html/chasto-zadavaemye-voprosy'      => 'faq',

'podderzhka-html/regen.html' => 'ecp-regeneration',
'podderzhka-html/regen'      => 'ecp-regeneration',

'podderzhka/recom_bezopasnost' => 'security',
'tarify_valuta-html'                  => 'tariffs-foreign-currency',
'tarify_valuta.html'                  => 'tariffs-foreign-currency',
'tarify_valuta'                       => 'tariffs-foreign-currency',
'tarify-banka-html/tarify_valuta.html'=> 'tariffs-foreign-currency',
'tarify-banka-html/tarify_valuta'     => 'tariffs-foreign-currency',

'tarif_depositny-html-html'                  => 'tariff-depositny',
'tarif_depositny-html.html'                  => 'tariff-depositny',
'tarif_depositny-html'                       => 'tariff-depositny',
'tarif_depositny.html'                       => 'tariff-depositny',
'tarif_depositny'                            => 'tariff-depositny',
'tarify-banka-html/tarif_depositny.html'     => 'tariff-depositny',
'tarify-banka-html/tarif_depositny'          => 'tariff-depositny',

'crs-obmen-s-fns-html' => 'crs',
'crs-obmen-s-fns.html' => 'crs',
'crs-obmen-s-fns'      => 'crs',

'chastnym-liczam-html' => 'private-persons',
'chastnym-liczam.html' => 'private-persons',
'chastnym-liczam'      => 'private-persons',

'vakansii-html' => 'vacancies',
'vakansii.html' => 'vacancies',
'vakansii'      => 'vacancies',

'zapros-na-otkrytie-raschetnogo-scheta-html' => 'zapros-na-otkrytie-raschetnogo-scheta',
'zapros-na-otkrytie-raschetnogo-scheta.html' => 'zapros-na-otkrytie-raschetnogo-scheta',
'zapros-na-otkrytie-raschetnogo-scheta'      => 'zapros-na-otkrytie-raschetnogo-scheta',

'zapros-na-kreditovanie-msp-html' => 'zapros-na-kreditovanie-msp',
'zapros-na-kreditovanie-msp.html' => 'zapros-na-kreditovanie-msp',
'zapros-na-kreditovanie-msp'      => 'zapros-na-kreditovanie-msp',


        'napisat-v-bank-html'          => 'write-to-bank',
        'napisat-v-bank.html'          => 'write-to-bank',
        'napisat-v-bank'               => 'write-to-bank',

        'kontakty-html'          => 'contacts',
        'kontakty.html'          => 'contacts',
        'kontakty'               => 'contacts',

        'podderzhka-html'          => 'support',
        'podderzhka.html'          => 'support',
        'podderzhka'               => 'support',

        'recom_bezopasnost-html'          => 'security',
        'recom_bezopasnost.html'          => 'security',
        'recom_bezopasnost'               => 'security',
        'podderzhka-html/recom_bezopasnost-html'          => 'security',
        'podderzhka-html/recom_bezopasnost.html'          => 'security',
        'podderzhka-html/recom_bezopasnost'               => 'security',

        'obrashhenie-po-123-fz-html'          => 'appeal-123-fz',
        'obrashhenie-po-123-fz.html'          => 'appeal-123-fz',
        'obrashhenie-po-123-fz'               => 'appeal-123-fz',

        'covid19-html'          => 'covid19',
        'covid19.html'          => 'covid19',
        'covid19'               => 'covid19',

        'klient-bank-online-html'          => 'client-bank-online',
        'klient-bank-online.html'          => 'client-bank-online',
        'klient-bank-online'               => 'client-bank-online',

        'instrukcziya-po-rabote-v-sisteme-klient-bank-html'          => 'instruction',
        'instrukcziya-po-rabote-v-sisteme-klient-bank.html'          => 'instruction',
        'instrukcziya-po-rabote-v-sisteme-klient-bank'               => 'instruction',

        'chasto-zadavaemye-voprosy-html'          => 'faq',
        'chasto-zadavaemye-voprosy.html'          => 'faq',
        'chasto-zadavaemye-voprosy'               => 'faq',

        'regen-html'          => 'ecp-regeneration',
        'regen.html'          => 'ecp-regeneration',
        'regen'               => 'ecp-regeneration',


        'otchetnost-html'          => 'reporting',
        'otchetnost.html'          => 'reporting',
        'otchetnost'               => 'reporting',

        'o-banke-slavyanbank-html/organy_upravlenya-html'          => 'governance',
        'o-banke-slavyanbank-html/organy_upravlenya.html'          => 'governance',
        'o-banke-slavyanbank-html/organy_upravlenya'               => 'governance',
        'organy_upravlenya-html'          => 'governance',
        'organy_upravlenya.html'          => 'governance',
        'organy_upravlenya'               => 'governance',

        'o-banke-slavyanbank-html/info_bank-html-html'          => 'info-bank-page',
        'o-banke-slavyanbank-html/info_bank-html.html'          => 'info-bank-page',
        'o-banke-slavyanbank-html/info_bank-html'               => 'info-bank-page',
        'info_bank-html-html'          => 'info-bank-page',
        'info_bank-html.html'          => 'info-bank-page',
        'info_bank-html'               => 'info-bank-page',
        'informaciya-banka-html'          => 'info-bank-page',
        'informaciya-banka.html'          => 'info-bank-page',
        'informaciya-banka'               => 'info-bank-page',

        'rekvizity-banka-html'          => 'requisites_bank',
        'rekvizity-banka.html'          => 'requisites_bank',
        'rekvizity-banka'               => 'requisites_bank',
        'o-banke-slavyanbank-html/rekvizity-banka-html'          => 'requisites_bank',
        'o-banke-slavyanbank-html/rekvizity-banka.html'          => 'requisites_bank',
        'o-banke-slavyanbank-html/rekvizity-banka'               => 'requisites_bank',

        'tarify-banka-html'          => 'tariffs',
        'tarify-banka.html'          => 'tariffs',
        'tarify-banka'               => 'tariffs',

        'yuridicheskim-liczam-html'          => 'legal-entities',
        'yuridicheskim-liczam.html'          => 'legal-entities',
        'yuridicheskim-liczam'               => 'legal-entities',


        'valutny-kontrol-html'          => 'currency-control',
        'valutny-kontrol.html'          => 'currency-control',
        'valutny-kontrol'               => 'currency-control',

        'yuridicheskim-liczam-html/valutny-kontrol-html'          => 'currency-control',
        'yuridicheskim-liczam-html/valutny-kontrol.html'          => 'currency-control',
        'yuridicheskim-liczam-html/valutny-kontrol'               => 'currency-control',

        'obsluzivanie-schetov-rf-html'          => 'account-service',
        'obsluzivanie-schetov-rf.html'          => 'account-service',
        'obsluzivanie-schetov-rf'               => 'account-service',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf-html'          => 'account-service',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html'          => 'account-service',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf'               => 'account-service',


        'beznalichnye-raschety-html'          => 'cashless-payments',
        'beznalichnye-raschety.html'          => 'cashless-payments',
        'beznalichnye-raschety'               => 'cashless-payments',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety-html'          => 'cashless-payments',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety.html'          => 'cashless-payments',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety'               => 'cashless-payments',

        'nalichnye-raschety-html'          => 'cash-payments',
        'nalichnye-raschety.html'          => 'cash-payments',
        'nalichnye-raschety'               => 'cash-payments',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety-html'          => 'cash-payments',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety.html'          => 'cash-payments',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety'               => 'cash-payments',

        'pod-ft-fromu-html'          => 'aml-fatca',
        'pod-ft-fromu.html'          => 'aml-fatca',
        'pod-ft-fromu'               => 'aml-fatca',

        'obsluzivanie-valut-schetov-html'          => 'fx-account-service',
        'obsluzivanie-valut-schetov.html'          => 'fx-account-service',
        'obsluzivanie-valut-schetov'               => 'fx-account-service',
        'yuridicheskim-liczam-html/obsluzivanie-valut-schetov-html'          => 'fx-account-service',
        'yuridicheskim-liczam-html/obsluzivanie-valut-schetov.html'          => 'fx-account-service',
        'yuridicheskim-liczam-html/obsluzivanie-valut-schetov'               => 'fx-account-service',

        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom-html'          => 'payment-demands',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom.html'          => 'payment-demands',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom'               => 'payment-demands',
        'platezhnye-trebovaniya-s-akczeptom-html'          => 'payment-demands',
        'platezhnye-trebovaniya-s-akczeptom.html'          => 'payment-demands',
        'platezhnye-trebovaniya-s-akczeptom'               => 'payment-demands',

        'kreditovanie-yuridicheskih-licz-html'          => 'business-lending',
        'kreditovanie-yuridicheskih-licz.html'          => 'business-lending',
        'kreditovanie-yuridicheskih-licz'               => 'business-lending',
        'yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz-html'          => 'business-lending',
        'yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz.html'          => 'business-lending',
        'yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz'               => 'business-lending',

        'deposity-dlya-yur-lic-html' => 'business-deposits',
'deposity-dlya-yur-lic.html' => 'business-deposits',
'deposity-dlya-yur-lic'      => 'business-deposits',

'yuridicheskim-liczam-html/deposity-dlya-yur-lic-html' => 'business-deposits',
'yuridicheskim-liczam-html/deposity-dlya-yur-lic.html' => 'business-deposits',
'yuridicheskim-liczam-html/deposity-dlya-yur-lic'      => 'business-deposits',

        'tarif_privetstvenny-html'          => 'tariff_privetstvenny',
        'tarif_privetstvenny.html'          => 'tariff_privetstvenny',
        'tarif_privetstvenny'               => 'tariff_privetstvenny',
        'tarify-banka-html/tarif_privetstvenny.html-html'          => 'tariff_privetstvenny',
        'tarify-banka-html/tarif_privetstvenny.html.html'          => 'tariff_privetstvenny',
        'tarify-banka-html/tarif_privetstvenny.html'               => 'tariff_privetstvenny',

        'tarif_slavny-html'          => 'tariffs_slavny',
        'tarif_slavny.html'          => 'tariffs_slavny',
        'tarif_slavny'               => 'tariffs_slavny',
        'tarify-banka-html/tarif_slavny.html-html'          => 'tariffs_slavny',
        'tarify-banka-html/tarif_slavny.html.html'          => 'tariffs_slavny',
        'tarify-banka-html/tarif_slavny.html'               => 'tariffs_slavny',
    ];
}

function sb_alpha_request_path(): string
{
    $uri  = (string) ($_SERVER['REQUEST_URI'] ?? '/');
    $path = (string) parse_url($uri, PHP_URL_PATH);

    return trim($path, '/');
}

function sb_alpha_redirect_route_aliases(): void
{
    if (is_admin() || wp_doing_ajax() || wp_doing_cron()) {
        return;
    }

    $requested = sb_alpha_request_path();
    if ($requested === '') {
        return;
    }

    $aliases = sb_alpha_route_aliases();
    if (!isset($aliases[$requested])) {
        return;
    }

    $target = sb_alpha_url($aliases[$requested]);
    $targetPath = trim((string) parse_url($target, PHP_URL_PATH), '/');

    if ($targetPath === '' || $targetPath === $requested) {
        return;
    }

    wp_safe_redirect($target, 301, 'Slavyanbank Canonical');
    exit;
}
add_action('template_redirect', 'sb_alpha_redirect_route_aliases', 0);

function sb_alpha_route_definitions(): array
{
    static $routes = null;

    if (is_array($routes)) {
        return $routes;
    }

    $routes = [
        'novosti' => [
            'path' => 'novosti.html',
            'title' => 'Новости - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-novosti.php',
            'page_context_slug' => 'novosti',
        ],

    ];

    return $routes;
}


function sb_wp_page_url(string $slug, string $fallback = '#'): string
{
    $page = get_page_by_path($slug, OBJECT, 'page');
    return $page ? get_permalink($page) : $fallback;
}
function sb_alpha_route_definition(string $route_key): ?array
{
    $routes = sb_alpha_route_definitions();

    return $routes[$route_key] ?? null;
}

function sb_alpha_route_url(string $route_key): string
{
    $route = sb_alpha_route_definition($route_key);
    if (!is_array($route)) {
        return home_url('/');
    }

    $path = trim((string) ($route['path'] ?? ''), '/');
    if ($path === '') {
        return home_url('/');
    }

    return home_url('/' . $path . '/');
}

function sb_alpha_route_current_key(): string
{
    $key = get_query_var('sb_alpha_route');
    if (!is_string($key) || $key === '') {
        $key = get_query_var('sb_python_route');
    }

    return is_string($key) ? $key : '';
}

function sb_alpha_route_current(): ?array
{
    $key = sb_alpha_route_current_key();
    if ($key === '') {
        return null;
    }

    $route = sb_alpha_route_definition($key);
    if (!is_array($route)) {
        return null;
    }

    $route['key'] = $key;

    return $route;
}



function sb_alpha_route_current_partial(): string
{
    $route = sb_alpha_route_current();

    return is_array($route) ? (string) ($route['partial'] ?? '') : '';
}

function sb_alpha_route_has_local_partial(string $route_key): bool
{
    return false;
}

function sb_alpha_route_register_rewrites(): void
{
    foreach (sb_alpha_route_definitions() as $route_key => $route) {
        $path = trim((string) ($route['path'] ?? ''), '/');
        if ($path === '' || $path === 'search') {
            continue;
        }

        add_rewrite_rule(
            '^' . preg_quote($path, '#') . '/?$',
            'index.php?sb_alpha_route=' . $route_key,
            'top'
        );
    }
}
add_action('init', 'sb_alpha_route_register_rewrites', 20);

function sb_alpha_route_add_query_vars(array $vars): array
{
    $vars[] = 'sb_alpha_route';
    $vars[] = 'sb_python_route';

    return $vars;
}
add_filter('query_vars', 'sb_alpha_route_add_query_vars');

function sb_alpha_route_store_version(): void
{
    update_option(SB_ALPHA_ROUTE_VERSION_OPTION, SB_ALPHA_ROUTE_VERSION, false);
}

function sb_alpha_route_maybe_flush_rewrites(): void
{
    $stored = (string) get_option(SB_ALPHA_ROUTE_VERSION_OPTION, '');

    if ($stored === SB_ALPHA_ROUTE_VERSION) {
        return;
    }

    sb_alpha_route_register_rewrites();
    flush_rewrite_rules(false);
    sb_alpha_route_store_version();
}
add_action('admin_init', 'sb_alpha_route_maybe_flush_rewrites');

function sb_alpha_route_flush_rewrites_on_switch(): void
{
    sb_alpha_route_register_rewrites();
    flush_rewrite_rules(false);
    sb_alpha_route_store_version();
}
add_action('after_switch_theme', 'sb_alpha_route_flush_rewrites_on_switch');

function sb_alpha_route_prime_page_context(string $slug): void
{
    $slug = trim($slug, '/');
    if ($slug === '') {
        return;
    }

    $page = get_page_by_path($slug);
    if (!$page instanceof WP_Post) {
        return;
    }

    global $post, $wp_query;

    $post = $page;
    setup_postdata($post);

    if ($wp_query instanceof WP_Query) {
        $wp_query->post = $page;
        $wp_query->posts = [$page];
        $wp_query->queried_object = $page;
        $wp_query->queried_object_id = (int) $page->ID;
        $wp_query->is_page = true;
        $wp_query->is_singular = true;
    }
}

function sb_alpha_route_template_redirect(): void
{
    if (is_admin() || wp_doing_ajax() || wp_doing_cron()) {
        return;
    }

    $route = sb_alpha_route_current();
    if (!is_array($route)) {
        return;
    }

    $route_key = (string) ($route['key'] ?? '');
    if ($route_key !== '' && sb_alpha_route_has_local_partial($route_key)) {
        return;
    }

    if (($route['mode'] ?? '') === 'external_redirect' && !empty($route['external_url'])) {
        wp_redirect((string) $route['external_url'], 302, 'Slavyanbank Route');
        exit;
    }
}
add_action('template_redirect', 'sb_alpha_route_template_redirect', 1);

function sb_alpha_route_template_include(string $template): string
{
    $route = sb_alpha_route_current();
    if (!is_array($route)) {
        return $template;
    }

    if (!empty($route['page_context_slug'])) {
        sb_alpha_route_prime_page_context((string) $route['page_context_slug']);
    }

    $mode = (string) ($route['mode'] ?? '');

    if ($mode === 'template_file' && !empty($route['template_file'])) {
        $candidate = get_theme_file_path((string) $route['template_file']);
        if (is_file($candidate)) {
            return $candidate;
        }
    }


    return $template;
}
add_filter('template_include', 'sb_alpha_route_template_include', 30);

function sb_alpha_route_document_title_parts(array $parts): array
{
    $route = sb_alpha_route_current();
    if (!is_array($route) || empty($route['title'])) {
        return $parts;
    }

    $parts['title'] = (string) $route['title'];

    return $parts;
}
add_filter('document_title_parts', 'sb_alpha_route_document_title_parts', 40);

function sb_alpha_route_form_markup(string $route_key): string
{
    $shortcode = apply_filters('sb_alpha_route_form_shortcode_' . $route_key, '');
    if (!is_string($shortcode) || trim($shortcode) === '') {
        $shortcode = apply_filters('sb_python_form_shortcode_' . $route_key, '');
    }

    if (!is_string($shortcode) || trim($shortcode) === '') {
        return '';
    }

    return sb_alpha_apply_shortcode_markup($shortcode);
}

// Backward compatibility for older templates, filters and cached rewrite rules.
function sb_python_route_definitions(): array
{
    return sb_alpha_route_definitions();
}

function sb_python_route_definition(string $route_key): ?array
{
    return sb_alpha_route_definition($route_key);
}

function sb_python_route_url(string $route_key): string
{
    return sb_alpha_route_url($route_key);
}

function sb_python_current_route_key(): string
{
    return sb_alpha_route_current_key();
}

function sb_python_current_route(): ?array
{
    return sb_alpha_route_current();
}



function sb_python_register_rewrites(): void
{
    sb_alpha_route_register_rewrites();
}

function sb_python_add_query_vars(array $vars): array
{
    return sb_alpha_route_add_query_vars($vars);
}

function sb_python_store_route_version(): void
{
    sb_alpha_route_store_version();
}

function sb_python_maybe_flush_rewrites(): void
{
    sb_alpha_route_maybe_flush_rewrites();
}

function sb_python_flush_rewrites_on_switch(): void
{
    sb_alpha_route_flush_rewrites_on_switch();
}

function sb_python_prime_page_context(string $slug): void
{
    sb_alpha_route_prime_page_context($slug);
}

function sb_python_template_redirect(): void
{
    sb_alpha_route_template_redirect();
}

function sb_python_template_include(string $template): string
{
    return sb_alpha_route_template_include($template);
}

function sb_python_document_title_parts(array $parts): array
{
    return sb_alpha_route_document_title_parts($parts);
}

function sb_python_form_markup(string $route_key): string
{
    return sb_alpha_route_form_markup($route_key);
}
