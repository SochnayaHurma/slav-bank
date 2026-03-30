<?php
if (!defined('ABSPATH')) {
    exit;
}

const SB_PYTHON_ROUTE_VERSION_OPTION = 'sb_python_route_version';
const SB_PYTHON_ROUTE_VERSION = '2026.03.29.foundation.1';

function sb_python_route_definitions(): array
{
    static $routes = null;

    if (is_array($routes)) {
        return $routes;
    }

    $routes = [
        'info-bank-page' => [
            'path' => 'o-banke-slavyanbank-html/info_bank-html.html',
            'title' => 'Информация банка - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-informaciya-banka.php',
            'page_context_slug' => 'informaciya-banka',
        ],
        'requisites_bank' => [
            'path' => 'rekvizity-banka.html',
            'title' => 'Реквизиты банка - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-rekvizity-banka.php',
            'page_context_slug' => 'rekvizity-banka',
        ],
        'governance' => [
            'path' => 'o-banke-slavyanbank-html/organy_upravlenya.html',
            'title' => 'Органы управления - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/o-banke-slavyanbank-html/organy_upravlenya.html/',
        ],
        'reporting' => [
            'path' => 'otchetnost.html',
            'title' => 'Отчетность - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-otchetnost.php',
            'page_context_slug' => 'otchetnost',
        ],
        'disclosur-regulatory' => [
            'path' => 'o-banke-html/info_bank-html/raskritie-informacii.html',
            'title' => 'Раскрытие информации - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/o-banke-html/info_bank-html/raskritie-informacii.html/',
        ],
        'notaries' => [
            'path' => 'informacziya-dlya-notariusov.html',
            'title' => 'Информация для нотариусов - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/informacziya-dlya-notariusov.html/',
        ],
        'novosti' => [
            'path' => 'novosti.html',
            'title' => 'Новости - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-novosti.php',
            'page_context_slug' => 'novosti',
        ],
        'tariffs' => [
            'path' => 'tarify-banka.html',
            'title' => 'Тарифы банка - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-tarify-banka.php',
            'page_context_slug' => 'tarify-banka',
        ],
        'tariffs_rub' => [
            'path' => 'tarify-banka-html/tarify_rf.html',
            'title' => 'Тарифы в валюте РФ - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/tarify-banka-html/tarify_rf.html/',
        ],
        'tariffs_slavny' => [
            'path' => 'tarify-banka-html/tarif_slavny.html',
            'title' => 'Тарифы «Славный» - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/tarify-banka-html/tarif_slavny.html/',
        ],
        'tariff_privetstvenny' => [
            'path' => 'tarify-banka-html/tarif_privetstvenny.html',
            'title' => 'Тарифы «Приветственный» - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/tarify-banka-html/tarif_privetstvenny.html/',
        ],
        'tariff-depositny' => [
            'path' => 'tarify-banka-html/tarif_depositny.html',
            'title' => 'Тарифы «Депозитный» - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/tarify-banka-html/tarif_depositny.html/',
        ],
        'tariffs-foreign-currency' => [
            'path' => 'tarify-banka-html/tarify_valuta.html',
            'title' => 'Тарифы в иностранной валюте - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/tarify-banka-html/tarify_valuta.html/',
        ],
        'legal-entities' => [
            'path' => 'yuridicheskim-liczam.html',
            'title' => 'Юридическим лицам - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'python_partial',
            'partial' => 'legal-entities',
        ],
        'business-deposits' => [
            'path' => 'yuridicheskim-liczam-html/deposity-dlya-yur-lic.html',
            'title' => 'Депозиты для юридических лиц - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/yuridicheskim-liczam-html/deposity-dlya-yur-lic.html/',
        ],
        'business-lending' => [
            'path' => 'yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz.html',
            'title' => 'Кредитование юридических лиц - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz.html/',
        ],
        'account-service' => [
            'path' => 'yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html',
            'title' => 'Обслуживание счетов в валюте РФ - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html/',
        ],
        'fx-account-service' => [
            'path' => 'yuridicheskim-liczam-html/obsluzivanie-valut-schetov.html',
            'title' => 'Обслуживание счетов в иностранной валюте - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-valut-schetov.html/',
        ],
        'currency-control' => [
            'path' => 'yuridicheskim-liczam-html/valutny-kontrol.html',
            'title' => 'Валютный контроль - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'python_partial',
            'partial' => 'currency-control',
        ],
        'aml-fatca' => [
            'path' => 'pod-ft-fromu.html',
            'title' => 'ПОД/ФТ/ФРОМУ/FATCA - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/pod-ft-fromu.html/',
        ],
        'crs' => [
            'path' => 'crs-obmen-s-fns.html',
            'title' => 'CRS — обмен с ФНС - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/crs-obmen-s-fns.html/',
        ],
        'cashless-payments' => [
            'path' => 'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety.html',
            'title' => 'Безналичные расчеты - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety.html/',
        ],
        'cash-payments' => [
            'path' => 'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety.html',
            'title' => 'Наличные расчеты - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety.html/',
        ],
        'payment-demands' => [
            'path' => 'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom.html',
            'title' => 'Платежные требования с акцептом - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom.html/',
        ],
        'private-persons' => [
            'path' => 'chastnym-liczam.html',
            'title' => 'Частным лицам - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/chastnym-liczam.html/',
        ],
        'client-bank-online' => [
            'path' => 'klient-bank-online.html',
            'title' => 'Клиент-Банк - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'python_partial',
            'partial' => 'client-bank-online',
        ],
        'instruction' => [
            'path' => 'podderzhka-html/instrukcziya-po-rabote-v-sisteme-klient-bank.html',
            'title' => 'Инструкция по работе в системе - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/podderzhka-html/instrukcziya-po-rabote-v-sisteme-klient-bank.html/',
        ],
        'faq' => [
            'path' => 'podderzhka-html/chasto-zadavaemye-voprosy.html',
            'title' => 'Часто задаваемые вопросы - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/podderzhka-html/chasto-zadavaemye-voprosy.html/',
        ],
        'ecp-regeneration' => [
            'path' => 'podderzhka-html/regen.html',
            'title' => 'Перегенерация ЭЦП - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/podderzhka-html/regen.html/',
        ],
        'support' => [
            'path' => 'podderzhka.html',
            'title' => 'Поддержка - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-podderzhka.php',
            'page_context_slug' => 'podderzhka',
        ],
        'security' => [
            'path' => 'podderzhka-html/recom_bezopasnost.html',
            'title' => 'Рекомендации по безопасности - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/podderzhka-html/recom_bezopasnost.html/',
        ],
        'appeal-123-fz' => [
            'path' => 'obrashhenie-po-123-fz.html',
            'title' => 'Обращение по 123-ФЗ - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/obrashhenie-po-123-fz.html/',
        ],
        'covid19' => [
            'path' => 'covid19.html',
            'title' => 'COVID‑19 - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/covid19.html/',
        ],
        'contacts' => [
            'path' => 'kontakty.html',
            'title' => 'Контакты - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-kontakty.php',
            'page_context_slug' => 'kontakty',
        ],
        'write-to-bank' => [
            'path' => 'forma-obratnoj-svyazi.html',
            'title' => 'Написать в банк - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-napisat-v-bank.php',
            'page_context_slug' => 'napisat-v-bank',
        ],
        'vacancies' => [
            'path' => 'vakansii.html',
            'title' => 'Вакансии - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/vakansii.html/',
        ],
        'zapros-na-otkrytie-raschetnogo-scheta' => [
            'path' => 'zapros-na-otkrytie-raschetnogo-scheta.html',
            'title' => 'Запрос на открытие расчетного счета - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/zapros-na-otkrytie-raschetnogo-scheta.html/',
        ],
        'zapros-na-kreditovanie-msp' => [
            'path' => 'zapros-na-kreditovanie-msp.html',
            'title' => 'Запрос на кредитование МСП - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/zapros-na-kreditovanie-msp.html/',
        ],
    ];

    return $routes;
}

function sb_python_route_definition(string $route_key): ?array
{
    $routes = sb_python_route_definitions();

    return $routes[$route_key] ?? null;
}

function sb_python_route_url(string $route_key): string
{
    $route = sb_python_route_definition($route_key);
    if (!is_array($route)) {
        return home_url('/');
    }

    $path = trim((string) ($route['path'] ?? ''), '/');
    if ($path === '') {
        return home_url('/');
    }

    return home_url('/' . $path . '/');
}

function sb_python_current_route_key(): string
{
    $key = get_query_var('sb_python_route');

    return is_string($key) ? $key : '';
}

function sb_python_current_route(): ?array
{
    $key = sb_python_current_route_key();
    if ($key === '') {
        return null;
    }

    $route = sb_python_route_definition($key);
    if (!is_array($route)) {
        return null;
    }

    $route['key'] = $key;

    return $route;
}

function sb_python_partial_file(string $partial): string
{
    $partial = trim($partial);

    return get_theme_file_path('template-parts/python/' . $partial . '.php');
}

function sb_python_register_rewrites(): void
{
    foreach (sb_python_route_definitions() as $route_key => $route) {
        $path = trim((string) ($route['path'] ?? ''), '/');
        if ($path === '' || $path === 'search') {
            continue;
        }

        add_rewrite_rule(
            '^' . preg_quote($path, '#') . '/?$',
            'index.php?sb_python_route=' . $route_key,
            'top'
        );
    }
}
add_action('init', 'sb_python_register_rewrites', 20);

function sb_python_add_query_vars(array $vars): array
{
    $vars[] = 'sb_python_route';

    return $vars;
}
add_filter('query_vars', 'sb_python_add_query_vars');

function sb_python_store_route_version(): void
{
    update_option(SB_PYTHON_ROUTE_VERSION_OPTION, SB_PYTHON_ROUTE_VERSION, false);
}

function sb_python_maybe_flush_rewrites(): void
{
    $stored = (string) get_option(SB_PYTHON_ROUTE_VERSION_OPTION, '');

    if ($stored === SB_PYTHON_ROUTE_VERSION) {
        return;
    }

    sb_python_register_rewrites();
    flush_rewrite_rules(false);
    sb_python_store_route_version();
}
add_action('admin_init', 'sb_python_maybe_flush_rewrites');

function sb_python_flush_rewrites_on_switch(): void
{
    sb_python_register_rewrites();
    flush_rewrite_rules(false);
    sb_python_store_route_version();
}
add_action('after_switch_theme', 'sb_python_flush_rewrites_on_switch');

function sb_python_prime_page_context(string $slug): void
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

function sb_python_template_redirect(): void
{
    if (is_admin() || wp_doing_ajax() || wp_doing_cron()) {
        return;
    }

    $route = sb_python_current_route();
    if (!is_array($route)) {
        return;
    }

    if (($route['mode'] ?? '') === 'external_redirect' && !empty($route['external_url'])) {
        wp_redirect((string) $route['external_url'], 302, 'Slavyanbank Python Truth');
        exit;
    }
}
add_action('template_redirect', 'sb_python_template_redirect', 1);

function sb_python_template_include(string $template): string
{
    $route = sb_python_current_route();
    if (!is_array($route)) {
        return $template;
    }

    if (!empty($route['page_context_slug'])) {
        sb_python_prime_page_context((string) $route['page_context_slug']);
    }

    $mode = (string) ($route['mode'] ?? '');

    if ($mode === 'template_file' && !empty($route['template_file'])) {
        $candidate = get_theme_file_path((string) $route['template_file']);
        if (is_file($candidate)) {
            return $candidate;
        }
    }

    if ($mode === 'python_partial') {
        $candidate = get_theme_file_path('page-python-route.php');
        if (is_file($candidate)) {
            return $candidate;
        }
    }

    return $template;
}
add_filter('template_include', 'sb_python_template_include', 30);

function sb_python_document_title_parts(array $parts): array
{
    $route = sb_python_current_route();
    if (!is_array($route) || empty($route['title'])) {
        return $parts;
    }

    $parts['title'] = (string) $route['title'];

    return $parts;
}
add_filter('document_title_parts', 'sb_python_document_title_parts', 40);

function sb_python_form_markup(string $route_key): string
{
    $shortcode = apply_filters('sb_python_form_shortcode_' . $route_key, '');

    if (!is_string($shortcode) || trim($shortcode) === '') {
        return '';
    }

    return sb_alpha_apply_shortcode_markup($shortcode);
}
