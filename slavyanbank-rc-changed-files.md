## `style.css`
```css
/*
Theme Name: Slavyanbank Alpha
Theme URI: https://example.invalid/slavyanbank-alpha
Author: OpenAI
Description: Release-candidate classic theme for safe frontend integration of the Slavyanbank website.
Version: 0.3.0
Requires at least: 6.4
Tested up to: 6.8
Requires PHP: 7.4
Text Domain: slavyanbank-alpha
*/
```

## `functions.php`
```php
<?php
if (!defined('ABSPATH')) {
    exit;
}

require_once get_template_directory() . '/inc/page-data.php';

const SB_ALPHA_REWRITE_VERSION_OPTION = 'sb_alpha_rewrite_version';

function sb_alpha_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support(
        'html5',
        ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'script', 'style']
    );
}
add_action('after_setup_theme', 'sb_alpha_setup');

function sb_alpha_asset(string $relative = ''): string
{
    $relative = ltrim($relative, '/');

    return trailingslashit(get_template_directory_uri()) . 'assets/' . $relative;
}

function sb_alpha_document_title_parts(array $parts): array
{
    if (is_front_page()) {
        $parts['title'] = 'О БАНКЕ - СЛАВЯНБАНК - Новгородский коммерческий банк';

        return $parts;
    }

    $page_titles = [
        'informaciya-banka' => 'Информация банка - АО НКБ "СЛАВЯНБАНК" в Великом Новгороде',
        'kontakty' => 'КОНТАКТЫ - АО НКБ "СЛАВЯНБАНК" в Великом Новгороде',
        'otchetnost' => 'Отчетность - АО НКБ "СЛАВЯНБАНК"',
        'rekvizity-banka' => 'Реквизиты банка - АО НКБ "СЛАВЯНБАНК" в Великом Новгороде',
        'napisat-v-bank' => 'Написать в банк - АО НКБ "СЛАВЯНБАНК"',
        'podderzhka' => 'ПОДДЕРЖКА в Великом Новгороде - АО НКБ "СЛАВЯНБАНК"',
        'tarify-banka' => 'ТАРИФЫ БАНКА - АО НКБ "СЛАВЯНБАНК"',
    ];

    foreach ($page_titles as $slug => $title) {
        if (is_page($slug)) {
            $parts['title'] = $title;
            break;
        }
    }

    return $parts;
}
add_filter('document_title_parts', 'sb_alpha_document_title_parts');

function sb_alpha_enqueue_assets(): void
{
    $version = wp_get_theme()->get('Version') ?: '0.3.0';
    $base = get_template_directory_uri();

    wp_enqueue_style('sb-alpha-theme', get_stylesheet_uri(), [], $version);

    $styles = [
        'sb-alpha-tokens' => 'assets/css/tokens.css',
        'sb-alpha-motion' => 'assets/css/motion.css',
        'sb-alpha-figure' => 'assets/css/figure.css',
        'sb-alpha-footer' => 'assets/css/footer.css',
        'sb-alpha-form' => 'assets/css/form.css',
        'sb-alpha-header' => 'assets/css/header.css',
        'sb-alpha-menu-prod' => 'assets/css/menu-prod.css',
        'sb-alpha-layout' => 'assets/css/layout.css',
        'sb-alpha-beta-pages' => 'assets/css/beta-pages.css',
    ];

    foreach ($styles as $handle => $path) {
        wp_enqueue_style($handle, $base . '/' . $path, ['sb-alpha-theme'], $version);
    }

    wp_enqueue_script('sb-alpha-motion', $base . '/assets/js/motion.js', [], $version, true);
}
add_action('wp_enqueue_scripts', 'sb_alpha_enqueue_assets');

function sb_alpha_local_page_url(string $slug, ?string $fallback = null): string
{
    $slug = trim($slug, '/');
    $page = get_page_by_path($slug);

    if ($page instanceof WP_Post && $page->post_status === 'publish') {
        $permalink = get_permalink($page);
        if (is_string($permalink) && $permalink !== '') {
            return $permalink;
        }
    }

    if (is_string($fallback) && $fallback !== '') {
        return $fallback;
    }

    return home_url('/' . $slug . '/');
}

function sb_alpha_routes(): array
{
    return [
        'home' => home_url('/'),
        'info-bank-page' => sb_alpha_local_page_url('informaciya-banka'),
        'requisites_bank' => sb_alpha_local_page_url('rekvizity-banka'),
        'governance' => 'https://slavbank.ru/o-banke-slavyanbank-html/organy_upravlenya.html/',
        'reporting' => sb_alpha_local_page_url('otchetnost'),
        'disclosur-regulatory' => 'https://slavbank.ru/o-banke-html/info_bank-html/raskritie-informacii.html/',
        'notaries' => 'https://slavbank.ru/informacziya-dlya-notariusov.html/',
        'novosti' => 'https://slavbank.ru/novosti.html/',
        'tariffs' => sb_alpha_local_page_url('tarify-banka'),
        'tariffs_rub' => 'https://slavbank.ru/tarify-banka-html/tarify_rf.html/',
        'tariffs_slavny' => 'https://slavbank.ru/tarify-banka-html/tarif_slavny.html/',
        'tariff_privetstvenny' => 'https://slavbank.ru/tarify-banka-html/tarif_privetstvenny.html/',
        'tariff-depositny' => 'https://slavbank.ru/tarify-banka-html/tarif_depositny.html/',
        'tariffs-foreign-currency' => 'https://slavbank.ru/tarify-banka-html/tarify_valuta.html/',
        'legal-entities' => 'https://slavbank.ru/yuridicheskim-liczam.html/',
        'business-deposits' => 'https://slavbank.ru/yuridicheskim-liczam-html/deposity-dlya-yur-lic.html/',
        'business-lending' => 'https://slavbank.ru/yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz.html/',
        'account-service' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html/',
        'fx-account-service' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-valut-schetov.html/',
        'currency-control' => 'https://slavbank.ru/yuridicheskim-liczam-html/valutny-kontrol.html/',
        'aml-fatca' => 'https://slavbank.ru/pod-ft-fromu.html/',
        'crs' => 'https://slavbank.ru/crs-obmen-s-fns.html/',
        'cashless-payments' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety.html/',
        'cash-payments' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety.html/',
        'payment-demands' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom.html/',
        'private-persons' => 'https://slavbank.ru/chastnym-liczam.html/',
        'client-bank-online' => 'https://slavbank.ru/klient-bank-online.html/',
        'client-bank-primary-login' => 'https://dbo.slavbank.ru:20101/',
        'client-bank-backup-login' => 'https://dbo1.slavbank.ru:20101/',
        'instruction' => 'https://slavbank.ru/podderzhka-html/instrukcziya-po-rabote-v-sisteme-klient-bank.html/',
        'faq' => 'https://slavbank.ru/podderzhka-html/chasto-zadavaemye-voprosy.html/',
        'ecp-regeneration' => 'https://slavbank.ru/podderzhka-html/regen.html/',
        'support' => sb_alpha_local_page_url('podderzhka'),
        'security' => 'https://slavbank.ru/podderzhka-html/recom_bezopasnost.html/',
        'appeal-123-fz' => 'https://slavbank.ru/obrashhenie-po-123-fz.html/',
        'covid19' => 'https://slavbank.ru/covid19.html/',
        'contacts' => sb_alpha_local_page_url('kontakty'),
        'write-to-bank' => sb_alpha_local_page_url('napisat-v-bank'),
        'vacancies' => 'https://slavbank.ru/vakansii.html/',
        'client-bank-login' => 'https://ved.slavbank.ru/',
        'remote-support' => 'https://www.ammyy.com/ru/',
    ];
}

function sb_alpha_url(string $key): string
{
    $routes = sb_alpha_routes();

    return $routes[$key] ?? home_url('/');
}

function sb_alpha_legacy_routes(): array
{
    return [
        'info-bank-page' => [
            'pattern' => '^o-banke-slavyanbank-html/info_bank-html\.html/?$',
            'route' => 'info-bank-page',
        ],
        'contacts' => [
            'pattern' => '^kontakty\.html/?$',
            'route' => 'contacts',
        ],
        'reporting' => [
            'pattern' => '^otchetnost\.html/?$',
            'route' => 'reporting',
        ],
        'requisites_bank' => [
            'pattern' => '^rekvizity-banka\.html/?$',
            'route' => 'requisites_bank',
        ],
        'write-to-bank' => [
            'pattern' => '^forma-obratnoj-svyazi\.html/?$',
            'route' => 'write-to-bank',
        ],
        'support' => [
            'pattern' => '^podderzhka\.html/?$',
            'route' => 'support',
        ],
        'tariffs' => [
            'pattern' => '^tarify-banka\.html/?$',
            'route' => 'tariffs',
        ],
    ];
}

function sb_alpha_register_legacy_rewrites(): void
{
    foreach (sb_alpha_legacy_routes() as $token => $config) {
        add_rewrite_rule($config['pattern'], 'index.php?sb_alpha_legacy_route=' . $token, 'top');
    }
}
add_action('init', 'sb_alpha_register_legacy_rewrites');

function sb_alpha_add_query_vars(array $vars): array
{
    $vars[] = 'sb_alpha_legacy_route';

    return $vars;
}
add_filter('query_vars', 'sb_alpha_add_query_vars');

function sb_alpha_store_rewrite_version(): void
{
    update_option(SB_ALPHA_REWRITE_VERSION_OPTION, (string) (wp_get_theme()->get('Version') ?: '0.3.0'), false);
}

function sb_alpha_maybe_flush_legacy_rewrites(): void
{
    $version = (string) (wp_get_theme()->get('Version') ?: '0.3.0');
    $stored_version = (string) get_option(SB_ALPHA_REWRITE_VERSION_OPTION, '');

    if ($stored_version === $version) {
        return;
    }

    sb_alpha_register_legacy_rewrites();
    flush_rewrite_rules(false);
    sb_alpha_store_rewrite_version();
}
add_action('admin_init', 'sb_alpha_maybe_flush_legacy_rewrites');

function sb_alpha_flush_legacy_rewrites_on_switch(): void
{
    sb_alpha_register_legacy_rewrites();
    flush_rewrite_rules(false);
    sb_alpha_store_rewrite_version();
}
add_action('after_switch_theme', 'sb_alpha_flush_legacy_rewrites_on_switch');

function sb_alpha_handle_legacy_redirect(): void
{
    if (is_admin() || wp_doing_ajax() || wp_doing_cron()) {
        return;
    }

    $token = get_query_var('sb_alpha_legacy_route');
    if (!is_string($token) || $token === '') {
        return;
    }

    $routes = sb_alpha_legacy_routes();
    if (!isset($routes[$token])) {
        return;
    }

    $target = '';
    if (!empty($routes[$token]['route'])) {
        $target = sb_alpha_url((string) $routes[$token]['route']);
    } elseif (!empty($routes[$token]['url'])) {
        $target = (string) $routes[$token]['url'];
    }

    if ($target === '') {
        $target = home_url('/');
    }

    wp_safe_redirect($target, 301, 'Slavyanbank RC Legacy');
    exit;
}
add_action('template_redirect', 'sb_alpha_handle_legacy_redirect');

function sb_alpha_apply_shortcode_markup(string $shortcode): string
{
    $shortcode = trim($shortcode);
    if ($shortcode === '') {
        return '';
    }

    if (function_exists('apply_shortcodes')) {
        $markup = (string) apply_shortcodes($shortcode);
    } else {
        $markup = (string) do_shortcode($shortcode);
    }

    if (strpos($markup, '[contact-form-7') !== false) {
        return '';
    }

    return trim($markup);
}

function sb_alpha_feedback_form_shortcode_fallback(): string
{
    $shortcode = apply_filters('sb_alpha_feedback_form_shortcode', '');

    return is_string($shortcode) ? trim($shortcode) : '';
}

function sb_alpha_feedback_form_markup(): string
{
    $page = get_post();

    if ($page instanceof WP_Post) {
        $content = trim((string) $page->post_content);
        if ($content !== '') {
            $markup = (string) apply_filters('the_content', $page->post_content);
            if (strpos($markup, '[contact-form-7') === false) {
                return trim($markup);
            }
        }
    }

    return sb_alpha_apply_shortcode_markup(sb_alpha_feedback_form_shortcode_fallback());
}
```

## `inc/page-data.php`
```php
<?php
if (!defined('ABSPATH')) {
    exit;
}

function sb_alpha_get_reporting_annual_reports(): array
{
    return [
        [
            'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2024 год.',
            'footer' => '(Опубликовано 11.04.2025г. Утверждена на годовом ОСА 10.04.2025г.)',
            'url' => 'https://slavbank.ru/wp-content/uploads/azo_-2024_nmm_slavyanbank.pdf',
        ],
        [
            'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2023 год.',
            'footer' => '(Опубликовано 12.03.2024г. Утверждена на годовом ОСА 02.04.2024г.)',
            'url' => 'https://slavbank.ru/wp-content/uploads/otchet_2023_publ.pdf',
        ],
        [
            'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2022 год.',
            'footer' => '(Опубликовано 29.03.2023г. Утверждена на годовом ОСА 20.04.2023г.)',
            'url' => 'https://slavbank.ru/wp-content/uploads/otchet2022.pdf',
        ],
        [
            'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2020 год.',
            'footer' => '(Опубликовано 29.03.2021г. Утверждена на годовом ОСА 22.04.2021г.)',
            'url' => 'https://slavbank.ru/wp-content/uploads/otchet2020.pdf',
        ],
        [
            'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2019 год.',
            'footer' => '(Опубликовано 26.03.2020г. Утверждена на годовом ОСА 16.04.2020г.)',
            'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/report2019.pdf',
        ],
        [
            'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2018 год.',
            'footer' => '(Утверждена на годовом ОСА 18.04.2019г) (Опубликовано 28.03.2019г.)',
            'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/report2018.pdf',
        ],
        [
            'title' => 'Финансовая отчетность по МСФО за 2017 год.',
            'footer' => '(Опубликовано 12.04.2018г.)',
            'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/msfo2017.pdf',
        ],
        [
            'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2017 год.',
            'footer' => '(Опубликовано 12.04.2018г.)',
            'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/report2017.pdf',
        ],
    ];
}

function sb_alpha_get_tariffs_download(): array
{
    return [
        [
            'date' => 'с 01.01.2026г',
            'title' => 'Тарифы банка в валюте РФ.',
            'url' => 'https://slavbank.ru/wp-content/uploads/standard-osobiy-s-01012026.pdf',
            'kind' => 'PDF',
        ],
        [
            'date' => 'с 01.12.2025г',
            'title' => 'Тарифы банка в валюте РФ и иностранной валюте «Славный» для новых клиентов.',
            'url' => 'https://slavbank.ru/wp-content/uploads/tp-slavny.pdf',
            'kind' => 'PDF',
        ],
        [
            'date' => 'с 01.12.2025г',
            'title' => 'Тарифы банка в иностранной валюте.',
            'url' => 'https://slavbank.ru/wp-content/uploads/tarify-v-in-valyute-s-01122025.pdf',
            'kind' => 'PDF',
        ],
        [
            'date' => 'с 01.11.2025г',
            'title' => 'Тарифы банка в валюте РФ и иностранной валюте «Приветственный» для новых клиентов.',
            'url' => 'https://slavbank.ru/wp-content/uploads/tarif-privetstvenny.pdf',
            'kind' => 'PDF',
        ],
        [
            'date' => 'с 01.11.2025г',
            'title' => 'Тарифы банка в валюте РФ и иностранной валюте «Депозитный» для новых клиентов.',
            'url' => 'https://slavbank.ru/wp-content/uploads/tarif-depositny.pdf',
            'kind' => 'PDF',
        ],
    ];
}

function sb_alpha_get_tariffs_view(): array
{
    return [
        [
            'date' => 'действуют с 01.01.2026г.',
            'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в валюте РФ',
            'url' => 'https://slavbank.ru/tarify-banka-html/tarify_rf.html/',
            'kind' => 'HTML',
        ],
        [
            'date' => 'действуют с 13.10.2025г. по 28.02.2026г.',
            'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Славный»',
            'url' => 'https://slavbank.ru/tarify-banka-html/tarif_slavny.html/',
            'kind' => 'HTML',
        ],
        [
            'date' => 'действуют с 01.12.2025г.',
            'title' => 'Тарифы банковских услуг по обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте',
            'url' => 'https://slavbank.ru/tarify-banka-html/tarify_valuta.html/',
            'kind' => 'HTML',
        ],
        [
            'date' => 'действуют с 01.11.2025г. по 28.02.2026г.',
            'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Приветственный»',
            'url' => 'https://slavbank.ru/tarify-banka-html/tarif_privetstvenny.html/',
            'kind' => 'HTML',
        ],
        [
            'date' => 'действуют с 01.11.2025г. по 28.02.2026г.',
            'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Депозитный»',
            'url' => 'https://slavbank.ru/tarify-banka-html/tarif_depositny.html/',
            'kind' => 'HTML',
        ],
    ];
}

function sb_alpha_get_bank_requisites_rows(): array
{
    return [
        [
            'label' => 'Полное официальное наименование банка, регистрационный номер и дата государственной регистрации в Банке России, номер и дата лицензии',
            'value' => 'Коммерческий банк «Славянбанк» образован 15 ноября 1989 года. В результате преобразования 25 декабря 1998 года перерегистрирован Центральным банком Российской Федерации (Банком России) в ЗАКРЫТОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО «НОВГОРОДСКИЙ КОММЕРЧЕСКИЙ БАНК «СЛАВЯНБАНК» за № 804. В соответствии с решением общего собрания акционеров Банка от 18 января 2018 года полное фирменное и сокращенное фирменное наименования Банка приведены в соответствие с законодательством Российской Федерации и изменены на АКЦИОНЕРНОЕ ОБЩЕСТВО НОВГОРОДСКИЙ КОММЕРЧЕСКИЙ БАНК «СЛАВЯНБАНК», АО НКБ «СЛАВЯНБАНК» (перерегистрирован Центральным банком Российской Федерации (Банком России) 21 февраля 2018г). Центральным Банком Российской Федерации 6 сентября 2018 года выдана Базовая лицензия на осуществление банковских операций со средствами в рублях и иностранной валюте (без права привлечения во вклады денежных средств физических лиц) и на привлечение во вклады и размещение драгоценных металлов за № 804, действующая в настоящее время.',
        ],
        [
            'label' => 'Сокращенное наименование',
            'value' => 'АО НКБ «СЛАВЯНБАНК»',
        ],
        [
            'label' => 'Полное и сокращенное наименования на английском языке',
            'value' => 'SB CBN «SLAVYANBANK»',
        ],
        [
            'label' => 'Регистрационный номер и дата внесения записи в ЕГРЮЛ',
            'value' => '№ 1025300000175, 03.09.2002',
        ],
        [
            'label' => 'Идентификационный номер налогоплательщика (ИНН)',
            'value' => '5321068480',
        ],
        [
            'label' => 'Наименование и банковский идентификационный код территориального учреждения Банка России, осуществляющего надзор за деятельностью',
            'value' => 'Северо-Западное главное управление Центрального банка Российской Федерации, БИК 044030001',
        ],
        [
            'label' => 'Платежные реквизиты',
            'value' => 'кор. счет 30101810445374030948, БИК 044030948',
        ],
        [
            'label' => 'Код LEI',
            'value' => '253400S76FWMXGUJC185',
        ],
        [
            'label' => 'Юридический и фактический адреса',
            'value' => '173004, Российская Федерация, г. Великий Новгород, ул. Черемнова-Конюхова, дом 12',
        ],
        [
            'label' => 'Номера телефонов',
            'value' => '(8162) 66-52-47',
            'url' => 'tel:+78162665247',
        ],
        [
            'label' => 'Адрес в Интернете',
            'value' => 'https://slavbank.ru',
            'url' => 'https://slavbank.ru',
            'external' => true,
        ],
        [
            'label' => 'Адрес электронной почты',
            'value' => 'nkb@slavbank.ru',
            'url' => 'mailto:nkb@slavbank.ru',
        ],
        [
            'label' => 'Режим работы (с клиентами)',
            'value' => 'пн-чт с 9.00 — 17.00 (касса до 16.30), пт с 9.00 до 16.00 (касса до 15.30), без обеда, выходные — суббота, воскресенье',
        ],
        [
            'label' => 'Адрес представительства в Москве',
            'value' => '109044, Российская Федерация, г. Москва, вн. тер. г. муниципальный округ Таганский, ул. Динамовская, дом 1А',
        ],
        [
            'label' => 'Дата открытия представительства в Москве',
            'value' => '09.12.2025',
        ],
    ];
}

function sb_alpha_get_info_bank_affiliate_documents(): array
{
    return [
        [
            'date' => '29.09.2021',
            'title' => 'Список аффилированных лиц',
            'url' => 'https://slavbank.ru/wp-content/uploads/afl29092021.xls',
            'kind' => 'XLS',
        ],
        [
            'date' => '30.06.2021',
            'title' => 'Список аффилированных лиц',
            'url' => 'https://slavbank.ru/wp-content/uploads/afl30062021.xls',
            'kind' => 'XLS',
        ],
        [
            'date' => '28.04.2021',
            'title' => 'Список аффилированных лиц',
            'url' => 'https://slavbank.ru/wp-content/uploads/afl28042021.xls',
            'kind' => 'XLS',
        ],
        [
            'date' => '25.02.2020',
            'title' => 'Список аффилированных лиц',
            'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/afl25022020.xls',
            'kind' => 'XLS',
        ],
        [
            'date' => '20.11.2018',
            'title' => 'Список аффилированных лиц',
            'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/afl20112018.xls',
            'kind' => 'XLS',
        ],
        [
            'date' => '13.09.2018',
            'title' => 'Список аффилированных лиц',
            'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/afl_130918.xls',
            'kind' => 'XLS',
        ],
        [
            'date' => '18.07.2018',
            'title' => 'Список аффилированных лиц',
            'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/afl18072018.xls',
            'kind' => 'XLS',
        ],
        [
            'date' => '13.04.2018',
            'title' => 'Список аффилированных лиц',
            'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/afl13042018.xls',
            'kind' => 'XLS',
        ],
        [
            'date' => '20.03.2018',
            'title' => 'Список аффилированных лиц',
            'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/afl20032018.xls',
            'kind' => 'XLS',
        ],
    ];
}

function sb_alpha_get_info_bank_control_document(): array
{
    return [
        'published' => '20.07.2018',
        'updated' => '25.03.2020',
        'title' => 'Список лиц, под контролем или значительным влиянием которых находится банк',
        'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/spisok250320.pdf',
        'kind' => 'PDF',
    ];
}

function sb_alpha_get_info_bank_message_documents(): array
{
    return [
        [
            'date' => '2017',
            'title' => 'Сообщение об утверждении годовой бухгалтерской (финансовой) отчетности за 2017 год',
            'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/message_rep2017.pdf',
            'kind' => 'PDF',
        ],
        [
            'date' => '2018',
            'title' => 'Сообщение об утверждении годовой бухгалтерской (финансовой) отчетности за 2018 год',
            'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/message_rep2018.pdf',
            'kind' => 'PDF',
        ],
        [
            'date' => '2019',
            'title' => 'Сообщение об утверждении годовой бухгалтерской (финансовой) отчетности за 2019 год · 17 апреля 2020',
            'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/message_rep2019.pdf',
            'kind' => 'PDF',
        ],
        [
            'date' => '2020',
            'title' => 'Сообщение об утверждении годовой бухгалтерской (финансовой) отчетности за 2020 год · 23 апреля 2021',
            'url' => 'https://slavbank.ru/wp-content/uploads/message_rep2020.pdf',
            'kind' => 'PDF',
        ],
    ];
}
```

## `assets/css/beta-pages.css`
```css
.section-flow {
  display: grid;
  gap: var(--s-4);
}

.section-card {
  padding: var(--s-4);
  border: 1px solid var(--c-border);
  border-radius: var(--r-lg);
  background: #fff;
  box-shadow: var(--shadow-sm);
}

.section-card--accent {
  background:
    radial-gradient(900px 320px at 100% 0, rgba(0, 103, 128, 0.12), transparent 60%),
    linear-gradient(180deg, rgba(159, 213, 213, 0.16), #fff);
}

.section-head-inline {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--s-3);
  flex-wrap: wrap;
}

.info-grid,
.support-topic-grid,
.tariff-grid,
.contact-way-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--s-4);
}

.info-card,
.tariff-panel,
.contact-way-card {
  padding: var(--s-4);
  border: 1px solid var(--c-border);
  border-radius: var(--r-lg);
  background: #fff;
  box-shadow: var(--shadow-sm);
}

.info-card h3,
.tariff-panel h3,
.contact-way-card h3 {
  margin: 8px 0 10px;
}

.info-card p,
.info-card li,
.tariff-panel p,
.contact-way-card p {
  color: var(--c-muted);
}

.info-card ul,
.tariff-panel ul,
.contact-way-card ul,
.legal-copy ul {
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 8px;
}

.kv-table {
  border: 1px solid var(--c-border);
  border-radius: var(--r-lg);
  overflow: hidden;
  background: #fff;
  box-shadow: var(--shadow-sm);
}

.kv-row {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  border-top: 1px solid rgba(2, 6, 23, 0.10);
}

.kv-row:first-child {
  border-top: 0;
}

.kv-label {
  padding: var(--s-4);
  background: rgba(245, 250, 252, 0.9);
  font-weight: 600;
}

.kv-value {
  padding: var(--s-4);
  display: grid;
  gap: 12px;
}

.kv-copy {
  display: flex;
  justify-content: flex-end;
}

.tariff-grid .doc-card,
.support-topic-grid .doc-card,
.contact-way-grid .doc-card {
  height: 100%;
}

.note-list,
.support-bullets,
.contact-way-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding-left: 18px;
}

.legal-copy {
  display: grid;
  gap: 12px;
}

.legal-copy details {
  padding: var(--s-3);
  border-radius: var(--r-lg);
  border: 1px solid rgba(2, 6, 23, 0.08);
  background: rgba(245, 250, 252, 0.9);
}

.legal-copy summary {
  cursor: pointer;
  font-weight: 600;
}

.legal-copy .prose {
  margin-top: 12px;
}

.service-links {
  display: grid;
  gap: 12px;
}

.service-link {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  border-radius: var(--r-lg);
  border: 1px solid rgba(2, 6, 23, 0.08);
  background: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  color: inherit;
}

.service-link:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.service-link strong {
  display: block;
  margin-bottom: 4px;
}

.service-link span:last-child {
  white-space: nowrap;
}

.route-meta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.route-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(245, 250, 252, 0.95);
  border: 1px solid rgba(2, 6, 23, 0.08);
  color: var(--c-muted);
  font-size: 14px;
}

.muted-card {
  padding: var(--s-3);
  border-radius: var(--r-lg);
  background: rgba(245, 250, 252, 0.85);
  border: 1px solid rgba(2, 6, 23, 0.08);
}

.cf7-theme {
  display: grid;
  gap: var(--s-3);
}

.cf7-theme .wpcf7,
.cf7-theme .wpcf7 form,
.cf7-theme .wpcf7-form {
  display: grid;
  gap: var(--s-3);
}

.cf7-theme p {
  margin: 0;
}

.cf7-theme label {
  display: grid;
  gap: 8px;
  font-weight: 600;
}

.cf7-theme .wpcf7-form-control-wrap {
  display: block;
}

.cf7-theme input[type="text"],
.cf7-theme input[type="email"],
.cf7-theme input[type="tel"],
.cf7-theme textarea,
.cf7-theme select,
.cf7-theme .wpcf7-form-control:not(.wpcf7-submit):not(.wpcf7-acceptance) {
  width: 100%;
  border: 1px solid var(--c-border);
  border-radius: var(--r-md);
  background: #fff;
  color: var(--c-text);
  padding: 14px 16px;
  box-shadow: var(--shadow-sm);
}

.cf7-theme textarea {
  min-height: 170px;
  resize: vertical;
}

.cf7-theme input[type="text"]:focus,
.cf7-theme input[type="email"]:focus,
.cf7-theme input[type="tel"]:focus,
.cf7-theme textarea:focus,
.cf7-theme select:focus {
  outline: 2px solid rgba(0, 103, 128, 0.18);
  border-color: rgba(0, 103, 128, 0.45);
}

.cf7-theme .wpcf7-acceptance {
  display: block;
  padding: var(--s-3);
  border: 1px solid rgba(2, 6, 23, 0.08);
  border-radius: var(--r-lg);
  background: rgba(245, 250, 252, 0.8);
}

.cf7-theme .wpcf7-acceptance .wpcf7-list-item {
  margin: 0;
}

.cf7-theme .wpcf7-acceptance label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  color: var(--c-muted);
}

.cf7-theme .wpcf7-acceptance input[type="checkbox"] {
  margin-top: 2px;
}

.cf7-theme input[type="submit"],
.cf7-theme button[type="submit"],
.cf7-theme .wpcf7-submit {
  appearance: none;
  border: 0;
  border-radius: 999px;
  padding: 14px 24px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(180deg, var(--c-primary), color-mix(in srgb, var(--c-primary) 82%, #000));
  box-shadow: var(--shadow-sm);
}

.cf7-theme input[type="submit"]:hover,
.cf7-theme button[type="submit"]:hover,
.cf7-theme .wpcf7-submit:hover {
  transform: translateY(-1px);
}

.cf7-theme .wpcf7-spinner {
  margin: 10px 0 0;
}

.cf7-theme .wpcf7-not-valid-tip {
  margin-top: 8px;
  color: #b3261e;
  font-size: 14px;
}

.cf7-theme .wpcf7-response-output {
  margin: 0 !important;
  padding: 14px 16px !important;
  border-radius: var(--r-lg);
  border: 1px solid rgba(2, 6, 23, 0.12) !important;
  font-size: 14px;
}

.cf7-theme .wpcf7 form.sent .wpcf7-response-output {
  border-color: rgba(11, 117, 83, 0.22) !important;
  background: rgba(11, 117, 83, 0.08);
  color: #0b7553;
}

.cf7-theme .wpcf7 form.invalid .wpcf7-response-output,
.cf7-theme .wpcf7 form.failed .wpcf7-response-output,
.cf7-theme .wpcf7 form.aborted .wpcf7-response-output,
.cf7-theme .wpcf7 form.unaccepted .wpcf7-response-output,
.cf7-theme .wpcf7 form.spam .wpcf7-response-output {
  border-color: rgba(167, 29, 42, 0.18) !important;
  background: rgba(167, 29, 42, 0.08);
  color: #8d1d2a;
}

.cf7-empty-state {
  display: grid;
  gap: 10px;
  padding: var(--s-4);
  border-radius: var(--r-lg);
  border: 1px solid rgba(2, 6, 23, 0.08);
  background: rgba(245, 250, 252, 0.85);
}

@media (max-width: 980px) {
  .info-grid,
  .support-topic-grid,
  .tariff-grid,
  .contact-way-grid {
    grid-template-columns: 1fr;
  }

  .kv-row {
    grid-template-columns: 1fr;
  }

  .kv-label {
    border-bottom: 1px solid rgba(2, 6, 23, 0.08);
  }
}
```

## `assets/js/motion.js`
```js
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.header.reveal');
  if (header) {
    let lastY = window.scrollY || 0;
    const threshold = 10;
    let ticking = false;

    const apply = () => {
      const y = window.scrollY || 0;

      header.classList.toggle('scrolled', y > 8);

      if (y <= threshold || y < lastY) {
        header.classList.add('is-in');
      } else {
        header.classList.remove('is-in');
        try { closeMega(); } catch (e) { }
      }

      lastY = y;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    }, { passive: true });

    header.classList.add('is-in');
    apply();
  }

  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-in'));
  }

  const slider = $('[data-slider]');
  if (slider) {
    const track = $('[data-slider-track]', slider);
    const slides = $$('[data-slide]', slider);
    const dots = $$('[data-dot]', slider);
    const btnPrev = $('[data-prev]', slider);
    const btnNext = $('[data-next]', slider);
    const btnPlay = $('[data-play]', slider);
    const progress = $('[data-progress] i', slider);

    let idx = 0;
    let timer = null;
    let playing = !prefersReduced;

    const setIdx = (n, user = false) => {
      idx = (n + slides.length) % slides.length;
      track.style.transform = `translate3d(${-idx * 100}%,0,0)`;
      dots.forEach((d, i) => d.setAttribute('aria-current', String(i === idx)));
      slides.forEach((s, i) => {
        s.setAttribute('aria-hidden', String(i !== idx));
        s.toggleAttribute('data-active', i === idx);
        if (i === idx) {
          const ill = s.querySelector('[data-ill]');
          if (ill) {
            const clone = ill.cloneNode(true);
            ill.replaceWith(clone);
          }
        }
      });

      if (progress) {
        progress.style.width = '0%';
        if (playing && !prefersReduced) {
          const start = performance.now();
          const dur = 5200;
          const tick = (t) => {
            if (!playing) return;
            const p = Math.min(1, (t - start) / dur);
            progress.style.width = `${(p * 100).toFixed(1)}%`;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      }
      if (user) restart();
    };

    const restart = () => {
      if (timer) clearInterval(timer);
      if (playing && !prefersReduced) {
        timer = setInterval(() => setIdx(idx + 1), 5400);
      }
    };

    btnNext && btnNext.addEventListener('click', () => setIdx(idx + 1, true));
    btnPrev && btnPrev.addEventListener('click', () => setIdx(idx - 1, true));
    dots.forEach((d, i) => d.addEventListener('click', () => setIdx(i, true)));

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (timer) clearInterval(timer);
      } else {
        restart();
      }
    });

    slider.addEventListener('mouseenter', () => { if (timer) clearInterval(timer); });
    slider.addEventListener('mouseleave', () => { restart(); });
    slider.addEventListener('focusin', () => { if (timer) clearInterval(timer); });
    slider.addEventListener('focusout', () => { restart(); });

    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); setIdx(idx - 1, true); }
      if (e.key === 'ArrowRight') { e.preventDefault(); setIdx(idx + 1, true); }
    });

    if (btnPlay) {
      const sync = () => {
        btnPlay.setAttribute('aria-pressed', String(playing));
        btnPlay.textContent = playing ? 'Пауза' : 'Плей';
        restart();
      };
      btnPlay.addEventListener('click', () => { playing = !playing; sync(); });
      sync();
    }

    setIdx(0);
    restart();
  }

  const a11yBtn = $('#a11yBtn');
  if (a11yBtn) {
    a11yBtn.addEventListener('click', () => {
      const html = document.documentElement;
      const on = html.getAttribute('data-a11y') === '1';
      html.setAttribute('data-a11y', on ? '0' : '1');
      a11yBtn.setAttribute('aria-pressed', String(!on));
    });
  }

  const overlay = $('#searchOverlay');
  const openSearch = () => { overlay.classList.add('open'); $('#searchInput').focus(); };
  const closeSearch = () => overlay.classList.remove('open');

  const openBtn = $('#searchOpen');
  const closeBtn = $('#searchClose');
  openBtn && openBtn.addEventListener('click', openSearch);
  closeBtn && closeBtn.addEventListener('click', closeSearch);
  overlay && overlay.addEventListener('click', (e) => { if (e.target === overlay) closeSearch(); });

  const hints = $('#searchHints');
  hints && hints.addEventListener('click', (e) => {
    const b = e.target.closest('[data-hint]');
    if (!b) return;
    $('#searchInput').value = b.dataset.hint;
    $('#searchInput').focus();
  });

  document.addEventListener('keydown', (e) => {
    const isMac = navigator.platform.toUpperCase().includes('MAC');
    const ctrlK = (isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'k';
    if (ctrlK) { e.preventDefault(); openSearch(); }
    if (e.key === 'Escape') {
      closeSearch();
      closeMega();
    }
  });

  const mega = $('#megaPanel');
  const megaLinks = $('#megaLinks');
  const navLinks = $$('nav .navlink[data-mega]');
  const menuBtn = $('#menuBtn');
  const megaGroups = mega && megaLinks
    ? Array.from(megaLinks.querySelectorAll('[data-mega-group]'))
    : [];

  const MOBILE_BREAKPOINT = 980;
  const isMobileView = () => {
    if (window.matchMedia) {
      try {
        return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
      } catch (e) { }
    }
    return window.innerWidth <= MOBILE_BREAKPOINT;
  };

  const menuRoots = $$('[data-mega-root]');
  const megaMenus = menuRoots.map((root, i) => {
    const mega = root.querySelector('[data-mega-panel]');
    const megaLinks = root.querySelector('[data-mega-links]');
    const navLinks = $$('nav .navlink[data-mega]', root);
    const menuBtn = root.querySelector('[data-mega-btn]');
    const backdrop = root.querySelector('[data-mega-backdrop]');
    const closeBtn = root.querySelector('[data-mega-close]');

    // Optional: mobile drilldown (used in v4)
    const mobileRoot = root.querySelector('[data-mega-mobile-root]');
    const mobileHead = root.querySelector('[data-mega-mobile-head]');
    const mobileTitle = root.querySelector('[data-mega-mobile-title]');
    const mobileBack = root.querySelector('[data-mega-mobile-back]');

    const megaGroups = megaLinks
      ? Array.from(megaLinks.querySelectorAll('[data-mega-group]'))
      : [];

    return {
      root, mega, megaLinks, navLinks, menuBtn, backdrop, closeBtn, megaGroups,
      mobileRoot, mobileHead, mobileTitle, mobileBack,
      _id: i
    };
  }).filter(m => m.mega && m.megaLinks);

  const hoverTimers = new Map();
  function clearHoverTimer(m) {
    const t = hoverTimers.get(m._id);
    if (t) clearTimeout(t);
    hoverTimers.delete(m._id);
  }

  function setBackdrop(m, on) {
    if (!m.backdrop) return;
    m.backdrop.classList.toggle('open', !!on);
    m.backdrop.setAttribute('aria-hidden', on ? 'false' : 'true');
  }

  function closeMega() {
    megaMenus.forEach(m => {
      if (!m.mega) return;
      m.mega.classList.remove('open');
      setBackdrop(m, false);
      m.navLinks.forEach(a => a.setAttribute('aria-expanded', 'false'));
      m.menuBtn && m.menuBtn.setAttribute('aria-expanded', 'false');

      // reset v4 mobile drilldown state
      m.root && m.root.removeAttribute('data-mobile-view');

      // reset positioning tweaks
      m.mega.style.left = '';
      m.mega.style.right = '';
      m.mega.style.transform = '';

      clearHoverTimer(m);
    });
  }

  function hasDrilldown(m) {
    return !!(m && m.root && m.mobileRoot && m.root.getAttribute('data-mega-mobile') === 'drilldown');
  }

  function setMobileView(m, view, title) {
    if (!m || !m.root) return;
    if (!isMobileView() || !hasDrilldown(m)) return;
    m.root.setAttribute('data-mobile-view', view);
    if (m.mobileTitle && typeof title === 'string') {
      m.mobileTitle.textContent = title;
    }
  }

  function buildMobileRoot(m) {
    if (!m || !m.mobileRoot || !m.root) return;
    if (!hasDrilldown(m)) return;
    if (m.mobileRoot.dataset.built === '1') return;

    const links = $$('nav .navlink', m.root);
    const frag = document.createDocumentFragment();

    links.forEach((a) => {
      const txt = (a.textContent || '').trim().replace(/\s+/g, ' ');
      const key = a.dataset.mega;
      if (key) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'mega-rootlink';
        btn.setAttribute('data-mega-mobile-open', key);
        btn.setAttribute('aria-label', `${txt}: открыть`);
        btn.innerHTML = `
          <span class="mega-rootic" aria-hidden="true">◈</span>
          <span class="mega-roottext">${txt}</span>
          <span class="mega-rootchev" aria-hidden="true">›</span>
        `;
        frag.appendChild(btn);
      } else {
        const link = document.createElement('a');
        link.className = 'mega-rootlink';
        link.href = a.getAttribute('href') || '#';
        link.innerHTML = `
          <span class="mega-rootic" aria-hidden="true">◈</span>
          <span class="mega-roottext">${txt}</span>
          <span class="mega-rootchev" aria-hidden="true">→</span>
        `;
        frag.appendChild(link);
      }
    });

    m.mobileRoot.appendChild(frag);
    m.mobileRoot.dataset.built = '1';

    // bind drilldown open handlers
    const openBtns = $$('[data-mega-mobile-open]', m.mobileRoot);
    openBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!isMobileView() || !hasDrilldown(m)) return;
        const key = btn.getAttribute('data-mega-mobile-open');
        const tNode = btn.querySelector && btn.querySelector('.mega-roottext');
        const title = ((tNode && tNode.textContent) || (btn.textContent || '')).trim().replace(/\s+/g, ' ');
        openMega(key, btn, m, { title });
      });
    });
  }

  function openMega(key, trigger, m, opts = {}) {
    if (!m || !m.mega) return;

    const activeKey = key || 'about';
    m.mega.classList.add('open');

    // Mobile drilldown:
    // - when key is null/undefined (burger open): show root categories
    // - when key is present: show that group's subcategories + back button
    const rootMode = isMobileView() && hasDrilldown(m) && !key;
    if (isMobileView() && hasDrilldown(m)) {
      if (rootMode) {
        setMobileView(m, 'root', 'Разделы');
      } else {
        setMobileView(m, 'group', opts.title || 'Разделы');
      }
    }

    if (m.megaGroups && m.megaGroups.length) {
      if (rootMode) {
        m.megaGroups.forEach(g => { g.hidden = true; });
      } else {
        m.megaGroups.forEach(group => {
          group.hidden = group.dataset.megaGroup !== activeKey;
        });
      }
    }

    // Backdrop only matters in mobile view
    setBackdrop(m, isMobileView());

    // Desktop: position mega relative to the hovered/focused nav item
    if (!isMobileView()) {
      if (trigger && trigger.getBoundingClientRect) {
        const headerRect = m.root.getBoundingClientRect();
        const triggerRect = trigger.getBoundingClientRect();

        m.mega.style.left = '0px';
        m.mega.style.right = 'auto';
        m.mega.style.transform = 'none';

        const megaWidth = m.mega.offsetWidth || 0;
        const triggerCenter = triggerRect.left + triggerRect.width / 2;
        let left = triggerCenter - headerRect.left - megaWidth / 2;

        const padding = 8;
        const maxLeft = headerRect.width - megaWidth - padding;
        if (left < padding) left = padding;
        if (left > maxLeft) left = maxLeft;

        m.mega.style.left = `${left}px`;
      } else {
        m.mega.style.left = '';
        m.mega.style.right = '';
        m.mega.style.transform = '';
      }
    } else {
      // Mobile: let CSS drive drawers/sheets; ensure we don't keep desktop positioning
      m.mega.style.left = '';
      m.mega.style.right = '';
      m.mega.style.transform = '';
    }
  }

  function scheduleCloseMega(m) {
    if (isMobileView()) return;
    clearHoverTimer(m);
    const t = setTimeout(() => {
      hoverTimers.delete(m._id);
      closeMega();
    }, 120);
    hoverTimers.set(m._id, t);
  }

  megaMenus.forEach(m => {
    // If drilldown is enabled, build mobile root list once (from <nav>)
    buildMobileRoot(m);
    // Toggle per-top-item
    m.navLinks.forEach(a => {
      a.addEventListener('click', (e) => {
        if (!isMobileView()) return;
        e.preventDefault();
        const key = a.dataset.mega;
        const isOpen = a.getAttribute('aria-expanded') === 'true';
        closeMega();
        if (!isOpen) {
          a.setAttribute('aria-expanded', 'true');
          openMega(key, a, m);
        }
      });

      a.addEventListener('mouseenter', () => {
        if (isMobileView()) return;
        const key = a.dataset.mega;
        if (!key) return;
        clearHoverTimer(m);
        m.navLinks.forEach(link => link.setAttribute('aria-expanded', 'false'));
        a.setAttribute('aria-expanded', 'true');
        openMega(key, a, m);
      });

      a.addEventListener('mouseleave', () => {
        if (isMobileView()) return;
        scheduleCloseMega(m);
      });

      a.addEventListener('focus', () => {
        if (isMobileView()) return;
        const key = a.dataset.mega;
        if (!key) return;
        clearHoverTimer(m);
        m.navLinks.forEach(link => link.setAttribute('aria-expanded', 'false'));
        a.setAttribute('aria-expanded', 'true');
        openMega(key, a, m);
      });

      a.addEventListener('blur', () => {
        if (isMobileView()) return;
        scheduleCloseMega(m);
      });
    });

    // Hover safety
    if (m.mega) {
      m.mega.addEventListener('mouseenter', () => clearHoverTimer(m));
      m.mega.addEventListener('mouseleave', () => {
        if (isMobileView()) return;
        scheduleCloseMega(m);
      });

      // Mobile convenience: tap any link closes the sheet
      m.mega.addEventListener('click', (e) => {
        const a = e.target && e.target.closest ? e.target.closest('a') : null;
        if (!a) return;
        if (isMobileView()) closeMega();
      });
    }

    // Burger button opens first group (about)
    if (m.menuBtn) {
      m.menuBtn.addEventListener('click', () => {
        const isOpen = m.menuBtn.getAttribute('aria-expanded') === 'true';
        closeMega();
        if (!isOpen) {
          m.menuBtn.setAttribute('aria-expanded', 'true');
          // Mobile drilldown: open as root list (all top-level)
          if (isMobileView() && hasDrilldown(m)) {
            buildMobileRoot(m);
            openMega(null, null, m);
          } else {
            openMega('about', null, m);
          }
        }
      });
    }

    // Mobile: back -> root list
    m.mobileBack && m.mobileBack.addEventListener('click', () => {
      if (!isMobileView() || !hasDrilldown(m)) return;
      setMobileView(m, 'root', 'Разделы');
      if (m.megaGroups && m.megaGroups.length) {
        m.megaGroups.forEach(g => { g.hidden = true; });
      }
    });

    // Close controls
    m.closeBtn && m.closeBtn.addEventListener('click', closeMega);
    m.backdrop && m.backdrop.addEventListener('click', closeMega);
  });

  // Click-away close (supports multiple menus)
  document.addEventListener('click', (e) => {
    if (!megaMenus.length) return;
    const insideSomeMenu = megaMenus.some(m => {
      const inside = (m.mega && m.mega.contains(e.target))
        || m.navLinks.some(a => a.contains(e.target))
        || (m.menuBtn && m.menuBtn.contains(e.target));
      return inside;
    });
    if (!insideSomeMenu) closeMega();
  });


  const sc = $('#newsScroller');
  const prev = $('#newsPrev');
  const next = $('#newsNext');
  prev && prev.addEventListener('click', () => sc && sc.scrollBy({ left: -380, behavior: 'smooth' }));
  next && next.addEventListener('click', () => sc && sc.scrollBy({ left: 380, behavior: 'smooth' }));

  const pauseBtn = $('#tickerPause');
  const lane = document.querySelector('.ticker .lane');
  pauseBtn && pauseBtn.addEventListener('click', () => {
    const paused = pauseBtn.getAttribute('aria-pressed') === 'true';
    pauseBtn.setAttribute('aria-pressed', String(!paused));
    pauseBtn.textContent = paused ? 'Пауза' : 'Плей';
    if (lane) lane.style.animationPlayState = paused ? 'running' : 'paused';
  });

  const illBtns = $$('[data-ill-style]');
  const illNodes = $$('[data-ill][data-ill-key]');
  const getIllStyle = () => (localStorage.getItem('slavbank_ill_style') || 'a');

  function renderIll(node, style) {
    const key = node.getAttribute('data-ill-key');
    const tpl = document.getElementById(`ill-${key}-${style}`);
    if (!tpl) return;
    const frag = tpl.content.cloneNode(true);
    node.innerHTML = '';
    node.appendChild(frag);
  }

  function renderAllIll(style) {
    illNodes.forEach(n => renderIll(n, style));
    const active = $('[data-active]') || $('.slide[aria-hidden="false"]');
    if (active) {
      const ill = active.querySelector('[data-ill]');
      if (ill) {
        const clone = ill.cloneNode(true);
        ill.replaceWith(clone);
      }
    }
  }

  function setIllStyle(style) {
    localStorage.setItem('slavbank_ill_style', style);
    illBtns.forEach(b => b.setAttribute('aria-pressed', String(b.getAttribute('data-ill-style') === style)));
    renderAllIll(style);
  }

  if (illNodes.length) {
    setIllStyle(getIllStyle());
    illBtns.forEach(b => b.addEventListener('click', () => setIllStyle(b.getAttribute('data-ill-style'))));
  }

  const accs = $$('[data-acc]');
  accs.forEach(acc => {
    const btn = acc.querySelector('button');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const open = acc.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  const drawerOpen = $('#drawerOpen');
  const drawer = $('#drawer');
  const drawerBackdrop = $('#drawerBackdrop');
  const drawerClose = $('#drawerClose');
  const drawerSearch = $('#drawerSearch');
  const drawerA11y = $('#drawerA11y');

  function openDrawer() {
    if (!drawer || !drawerBackdrop) return;
    drawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    drawerBackdrop.setAttribute('aria-hidden', 'false');
    drawerOpen && drawerOpen.setAttribute('aria-expanded', 'true');
    const first = drawer.querySelector('a,button');
    first && first.focus();
  }
  function closeDrawer() {
    if (!drawer || !drawerBackdrop) return;
    drawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    drawerBackdrop.setAttribute('aria-hidden', 'true');
    drawerOpen && drawerOpen.setAttribute('aria-expanded', 'false');
  }

  drawerOpen && drawerOpen.addEventListener('click', openDrawer);
  drawerClose && drawerClose.addEventListener('click', closeDrawer);
  drawerBackdrop && drawerBackdrop.addEventListener('click', closeDrawer);

  drawer && drawer.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a) closeDrawer();
  });

  drawerSearch && drawerSearch.addEventListener('click', () => { closeDrawer(); openSearch(); });
  drawerA11y && drawerA11y.addEventListener('click', () => { closeDrawer(); a11yBtn && a11yBtn.click(); });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

})();


(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const tabs = $$('[data-dash-tab]');
  const panels = $$('[data-dash-panel]');
  if (!tabs.length || !panels.length) return;

  const withVT = (fn) => {
    const d = document;
    if (d.startViewTransition && !prefersReduced) {
      try { d.startViewTransition(() => fn()); }
      catch { fn(); }
    } else fn();
  };

  function setTab(key) {
    localStorage.setItem('slavbank_dash_tab', key);
    tabs.forEach(t => t.setAttribute('aria-selected', String(t.dataset.dashTab === key)));
    panels.forEach(p => {
      const on = p.dataset.dashPanel === key;
      if (on) {
        p.hidden = false;
        p.classList.add('is-active');
        if (key === 'about') {
          const ill = document.querySelector('.media-card[data-ill] svg');
          if (ill) {
            const clone = ill.cloneNode(true);
            ill.replaceWith(clone);
          }
        }
      } else {
        p.hidden = true;
        p.classList.remove('is-active');
      }
    });
  }

  tabs.forEach(t => t.addEventListener('click', () => withVT(() => setTab(t.dataset.dashTab))));
  const saved = localStorage.getItem('slavbank_dash_tab') || 'about';
  setTab(saved);
})();

(() => {
  const tabs = Array.from(document.querySelectorAll('[data-doc-tab]'));
  const panels = Array.from(document.querySelectorAll('[data-doc-panel]'));
  if (!tabs.length || !panels.length) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const withVT = (fn) => {
    const d = document;
    if (d.startViewTransition && !prefersReduced) {
      try { d.startViewTransition(() => fn()); }
      catch { fn(); }
    } else fn();
  };

  function setTab(key) {
    localStorage.setItem('slavbank_docs_tab', key);
    tabs.forEach(t => t.setAttribute('aria-selected', String(t.dataset.docTab === key)));
    panels.forEach(p => {
      const on = p.dataset.docPanel === key;
      p.hidden = !on;
      if (on) p.classList.add('is-active'); else p.classList.remove('is-active');
    });
  }

  tabs.forEach(t => t.addEventListener('click', () => withVT(() => setTab(t.dataset.docTab))));
  setTab(localStorage.getItem('slavbank_docs_tab') || 'aff');
})();


(() => {
  const toast = document.querySelector('.toast');
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg || 'Скопировано';
    toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { toast.hidden = true; }, 1200);
  }

  async function copyText(txt) {
    try {
      await navigator.clipboard.writeText(txt);
      showToast('Скопировано');
    } catch (e) {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = txt;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); showToast('Скопировано'); }
      finally { ta.remove(); }
    }
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest && e.target.closest('button.copy[data-copy]');
    if (!btn) return;
    const txt = btn.getAttribute('data-copy') || '';
    if (!txt) return;
    copyText(txt);
  });
})();
```

## `page-informaciya-banka.php`
```php
<?php
$affiliate_documents = sb_alpha_get_info_bank_affiliate_documents();
$control_document = sb_alpha_get_info_bank_control_document();
$message_documents = sb_alpha_get_info_bank_message_documents();
get_header();
?>

<main id="main">
  <section class="block dashv2" id="info-bank">
    <div class="container">
      <div class="bento">
        <div class="bento-card bento-hero" data-reveal="scale" style="padding: var(--s-4);">
          <div class="section-flow">
            <div>
              <div class="kicker">О банке</div>
              <h1 style="margin:8px 0 10px;">Информация банка</h1>
              <p class="muted" style="max-width:78ch;">
                Сведения об аффилированных лицах, документы о контроле и сообщения об утверждении
                годовой бухгалтерской (финансовой) отчетности.
              </p>

              <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
                <a class="btn primary" href="#documents">К документам</a>
                <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('reporting')); ?>">Отчетность</a>
                <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>">Реквизиты банка</a>
              </div>
            </div>

            <div class="dash-tabs" id="documents" role="tablist" aria-label="Документы банка">
              <button class="seg" role="tab" data-doc-tab="aff" aria-selected="true">
                Аффилированные лица
              </button>
              <button class="seg" role="tab" data-doc-tab="control" aria-selected="false">
                Список лиц, под контролем или значительным влиянием
              </button>
              <button class="seg" role="tab" data-doc-tab="msg" aria-selected="false">
                Сообщения
              </button>
            </div>

            <div class="dash-panels">
              <div class="dash-panel is-active" data-doc-panel="aff">
                <div class="muted" style="line-height: 1.6;">
                  Списки аффилированных лиц в формате XLS. В подборке собраны опубликованные документы,
                  размещенные в корпоративном разделе банка.
                </div>

                <div class="doc-list" style="margin-top: 12px;">
                  <?php foreach ($affiliate_documents as $item) : ?>
                    <a class="doc-row" href="<?php echo esc_url((string) $item['url']); ?>" target="_blank" rel="noopener">
                      <span class="doc-date"><?php echo esc_html((string) $item['date']); ?></span>
                      <span class="doc-title"><?php echo esc_html((string) $item['title']); ?></span>
                      <span class="doc-ext"><?php echo esc_html((string) $item['kind']); ?></span>
                      <span class="doc-arrow" aria-hidden="true">→</span>
                    </a>
                  <?php endforeach; ?>
                </div>
              </div>

              <div class="dash-panel" data-doc-panel="control" hidden>
                <div class="muted" style="line-height: 1.6;">
                  Опубликовано: <?php echo esc_html((string) $control_document['published']); ?> ·
                  Актуализировано: <?php echo esc_html((string) $control_document['updated']); ?>.
                  Документ доступен в формате <?php echo esc_html((string) $control_document['kind']); ?>.
                </div>

                <a class="doc-hero" href="<?php echo esc_url((string) $control_document['url']); ?>" target="_blank" rel="noopener" style="margin-top: 12px;">
                  <span class="ico" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="2" opacity=".8" />
                      <path d="M14 3v4a2 2 0 0 0 2 2h4" stroke="currentColor" stroke-width="2" opacity=".5" />
                    </svg>
                  </span>
                  <span>
                    <strong><?php echo esc_html((string) $control_document['title']); ?></strong>
                    <small class="muted">Скачать <?php echo esc_html((string) $control_document['kind']); ?></small>
                  </span>
                  <span class="arrow" aria-hidden="true">→</span>
                </a>
              </div>

              <div class="dash-panel" data-doc-panel="msg" hidden>
                <div class="muted" style="line-height: 1.6;">
                  Сообщения об утверждении годовой бухгалтерской (финансовой) отчетности.
                </div>

                <div class="doc-list" style="margin-top: 12px;">
                  <?php foreach ($message_documents as $item) : ?>
                    <a class="doc-row" href="<?php echo esc_url((string) $item['url']); ?>" target="_blank" rel="noopener">
                      <span class="doc-date"><?php echo esc_html((string) $item['date']); ?></span>
                      <span class="doc-title"><?php echo esc_html((string) $item['title']); ?></span>
                      <span class="doc-ext"><?php echo esc_html((string) $item['kind']); ?></span>
                      <span class="doc-arrow" aria-hidden="true">→</span>
                    </a>
                  <?php endforeach; ?>
                </div>
              </div>
            </div>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
```

## `page-napisat-v-bank.php`
```php
<?php
$form_markup = sb_alpha_feedback_form_markup();
get_header();
?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Написать в банк</h1>
            <p class="muted" style="max-width:78ch;">
              АО НКБ «СЛАВЯНБАНК» принимает обращения заявителей почтой, нарочно, по электронной почте,
              в местах обслуживания клиентов и через форму обратной связи на сайте.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#form">К форме</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('vacancies')); ?>" class="mono">Вакансии</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>" class="mono">Написать</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('covid19')); ?>" class="mono">COVID‑19</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <div class="section-flow">
            <div class="alert">
              <div class="alert-dot" aria-hidden="true"></div>
              <div>
                <div style="font-weight:600;">Как можно направить обращение</div>
                <div class="muted" style="margin-top:4px;">
                  Выберите удобный канал связи: почтовое отправление, личная подача обращения,
                  электронная почта или онлайн-форма на сайте.
                </div>
              </div>
            </div>

            <div class="contact-way-grid">
              <article class="contact-way-card">
                <div class="kicker">Почтовая связь</div>
                <h3>Адрес банка</h3>
                <p>173004, Новгородская обл., г. Великий Новгород, ул. Черемнова-Конюхова, дом 12.</p>
                <div class="kv-copy" style="margin-top:12px;">
                  <button class="copy mini" type="button" data-copy="173004, Новгородская обл., г. Великий Новгород, ул. Черемнова-Конюхова, дом 12">Копировать адрес</button>
                </div>
              </article>

              <article class="contact-way-card">
                <div class="kicker">Лично в офисе</div>
                <h3>Приём обращений</h3>
                <p>В местах обслуживания клиентов по адресу Великий Новгород, ул. Черемнова-Конюхова, 12.</p>
                <div class="row" style="margin-top:12px; flex-wrap:wrap;">
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты и режим работы</a>
                </div>
              </article>

              <article class="contact-way-card section-card--accent">
                <div class="kicker">Электронные каналы</div>
                <h3>E-mail и сайт</h3>
                <ul class="contact-way-list">
                  <li><a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a></li>
                  <li><a href="<?php echo esc_url(home_url('/')); ?>"><?php echo esc_html(home_url('/')); ?></a></li>
                </ul>
              </article>
            </div>

            <div class="section-card" id="form">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Форма обратной связи</div>
                  <h2 style="margin:8px 0 0;">Отправьте нам обращение прямо сейчас</h2>
                  <p class="muted" style="margin-top:10px; max-width:72ch;">
                    Укажите телефон или e-mail для обратной связи, опишите вопрос в свободной форме
                    и подтвердите согласие на обработку персональных данных.
                  </p>
                </div>
                <a class="btn glass" href="mailto:nkb@slavbank.ru">Написать по e-mail</a>
              </div>

              <div class="cf7-theme" style="margin-top: var(--s-4);">
                <?php if ($form_markup !== '') : ?>
                  <?php echo $form_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                <?php else : ?>
                  <div class="cf7-empty-state">
                    <strong>Онлайн-форма временно недоступна.</strong>
                    <p>
                      Направьте обращение по адресу <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>
                      или свяжитесь с банком по телефону <a href="tel:+78162665247">(8162) 66‑52‑47</a>.
                    </p>
                  </div>
                <?php endif; ?>
              </div>
            </div>

            <div class="legal-copy">
              <details open>
                <summary>Согласие на обработку персональных данных</summary>
                <div class="prose">
                  <p>
                    Я, действуя свободно, своей волей и в своем интересе, выражаю согласие оператору персональных
                    данных АО НКБ «СЛАВЯНБАНК» (ИНН 5321068480, адрес: 173004, Новгородская обл., г. Великий Новгород,
                    ул. Черемнова-Конюхова, дом 12) на обработку моих персональных данных: ФИО, контактный телефон,
                    адрес электронной почты.
                  </p>
                  <p>
                    Обработка осуществляется в целях рассмотрения обращения, направленного в банк с использованием
                    формы обратной связи на официальном сайте банка, а также получения ответа на обращение.
                  </p>
                  <ul>
                    <li>сбор, запись, систематизация и накопление данных;</li>
                    <li>хранение, уточнение, использование и передача сведений для ответа по обращению;</li>
                    <li>блокирование и удаление персональных данных по истечении установленного срока хранения.</li>
                  </ul>
                </div>
              </details>

              <details>
                <summary>Права заявителя и отзыв согласия</summary>
                <div class="prose">
                  <p>
                    Банк гарантирует право на получение сведений о персональных данных, право на их удаление,
                    уточнение или исправление, а также иные права, предусмотренные законодательством Российской
                    Федерации в области персональных данных.
                  </p>
                  <p>
                    Согласие может быть отозвано в любое время путем подачи заявления на e-mail
                    <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a> или в письменной форме на адрес банка.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

  <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>Готово</div>
</main>

<?php get_footer(); ?>
```

## `page-podderzhka.php`
```php
<?php get_header(); ?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Поддержка</h1>
            <p class="muted" style="max-width:78ch;">
              Раздел создан для поддержки клиентов АО НКБ «СЛАВЯНБАНК»: инструкции, ссылки для входа в системы
              банка, контакты технической поддержки и ссылки на связанные сервисы.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержимому</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('security')); ?>" class="mono">Безопасность</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>" class="mono">Клиент‑Банк</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('appeal-123-fz')); ?>" class="mono">123‑ФЗ</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <div class="section-flow">
            <div class="alert">
              <div class="alert-dot" aria-hidden="true"></div>
              <div>
                <div style="font-weight:600;">Частые темы поддержки</div>
                <div class="muted" style="margin-top:4px;">
                  Здесь собраны основные материалы для работы с системой Клиент-Банк: ответы на частые вопросы,
                  инструкции, рекомендации по безопасности и ссылки на сервисы банка.
                </div>
              </div>
            </div>

            <div class="support-topic-grid">
              <a class="doc-card" href="<?php echo esc_url(sb_alpha_url('faq')); ?>">
                <span class="doc-ext">FAQ</span>
                <div class="doc-body">
                  <div class="doc-title">Часто задаваемые вопросы</div>
                  <div class="muted">Ответы на типовые вопросы при работе в системе Клиент‑Банк.</div>
                </div>
                <span class="doc-arrow">→</span>
              </a>

              <a class="doc-card" href="<?php echo esc_url(sb_alpha_url('ecp-regeneration')); ?>">
                <span class="doc-ext">ЭЦП</span>
                <div class="doc-body">
                  <div class="doc-title">Перегенерация ЭЦП</div>
                  <div class="muted">Продление прав доступа и пошаговая инструкция для работы с ключами.</div>
                </div>
                <span class="doc-arrow">→</span>
              </a>

              <a class="doc-card" href="<?php echo esc_url(sb_alpha_url('security')); ?>">
                <span class="doc-ext">SAFE</span>
                <div class="doc-body">
                  <div class="doc-title">Рекомендации по безопасности</div>
                  <div class="muted">Проверка доменного имени, правила безопасного доступа и контроль среды.</div>
                </div>
                <span class="doc-arrow">→</span>
              </a>
            </div>

            <div class="section-card section-card--accent">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Техническая поддержка</div>
                  <h2 style="margin:8px 0 0;">Контакты и режим работы</h2>
                </div>
                <a class="btn outline" href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>
              </div>

              <div class="info-grid" style="margin-top: var(--s-4);">
                <article class="info-card">
                  <div class="kicker">Телефоны</div>
                  <h3>(8162) 66-51-95, 66-52-47, +7-921-690-17-00</h3>
                  <p>Основные номера технической поддержки для Клиент‑Банка и смежных сервисов.</p>
                </article>

                <article class="info-card">
                  <div class="kicker">Режим работы</div>
                  <h3>с 08:30 до 17:30</h3>
                  <p>Пятница — до 16:30, обед с 13:00 до 14:00, выходные — суббота и воскресенье.</p>
                </article>

                <article class="info-card">
                  <div class="kicker">Почта</div>
                  <h3><a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a></h3>
                  <p>Для запросов, связанных с доступом, инструкциями и техническими вопросами.</p>
                </article>
              </div>
            </div>

            <div class="section-card">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Сервисы</div>
                  <h2 style="margin:8px 0 0;">Ссылки для работы с системами банка</h2>
                </div>
              </div>

              <div class="service-links" style="margin-top: var(--s-4);">
                <a class="service-link" href="<?php echo esc_url(sb_alpha_url('instruction')); ?>">
                  <span>
                    <strong>Руководство пользователя «Интернет-Клиент»</strong>
                    <small class="muted">Полная инструкция по работе в системе «Клиент‑Банк».</small>
                  </span>
                  <span aria-hidden="true">→</span>
                </a>

                <a class="service-link" href="<?php echo esc_url(sb_alpha_url('client-bank-primary-login')); ?>" target="_blank" rel="noopener">
                  <span>
                    <strong>Основной вход в Клиент‑Банк</strong>
                    <small class="muted">dbo.slavbank.ru:20101 — для доступа может потребоваться установка плагина.</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>

                <a class="service-link" href="<?php echo esc_url(sb_alpha_url('client-bank-backup-login')); ?>" target="_blank" rel="noopener">
                  <span>
                    <strong>Резервный вход в Клиент‑Банк</strong>
                    <small class="muted">dbo1.slavbank.ru:20101 — использовать после подтверждения банка.</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>

                <a class="service-link" href="<?php echo esc_url(sb_alpha_url('remote-support')); ?>" target="_blank" rel="noopener">
                  <span>
                    <strong>Удаленное управление</strong>
                    <small class="muted">Внешний сервис Ammyy Admin для дистанционной технической помощи.</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div class="section-card">
              <div class="prose">
                <h3>О разделе поддержки</h3>
                <p>
                  Система «ДБО BS-Client x64» позволяет клиентам банка осуществлять информационное и
                  платежно-расчетное обслуживание без личного присутствия в банке с использованием персонального
                  компьютера и сети Интернет.
                </p>
                <p>
                  При переходе по ссылкам обращайте внимание на доменные имена сервисов и сопоставляйте их с
                  адресами, указанными на официальном сайте банка и в рекомендациях по безопасности.
                </p>
              </div>
            </div>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
```

## `page-rekvizity-banka.php`
```php
<?php get_header(); ?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">О банке</div>
            <h1 style="margin:8px 0 10px;">Реквизиты банка</h1>
            <p class="muted" style="max-width:78ch;">
              Основные регистрационные данные, лицензия, контакты банка и сведения о ключевых контрагентах,
              размещенные в корпоративном разделе сайта.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержимому</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>" class="mono">Информация банка</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('reporting')); ?>" class="mono">Отчетность</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('contacts')); ?>" class="mono">Контакты</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <div class="section-flow">
            <div class="alert">
              <div class="alert-dot" aria-hidden="true"></div>
              <div>
                <div style="font-weight:600;">Ключевые сведения о банке</div>
                <div class="muted" style="margin-top:4px;">
                  Здесь собраны регистрационные реквизиты, контакты и публичные сведения о надзоре, регистраторе
                  и аудиторской организации. Для копирования значений используйте кнопки в таблице.
                </div>
              </div>
            </div>

            <div class="info-grid">
              <article class="info-card">
                <div class="kicker">Аудиторская организация</div>
                <h3>ООО «Балтийский аудит»</h3>
                <ul>
                  <li>Адрес: 196084, г. Санкт-Петербург, Московский пр., д. 127, кв. 30</li>
                  <li>E-mail: <a href="mailto:mail@baudit.spb.ru">mail@baudit.spb.ru</a></li>
                  <li>ОГРН: 1147847390250</li>
                  <li>Член СРО аудиторов Ассоциация «Содружество» (ОРНЗ 11406045396)</li>
                </ul>
              </article>

              <article class="info-card">
                <div class="kicker">Регистратор</div>
                <h3>АО «Независимая регистраторская компания Р.О.С.Т.»</h3>
                <ul>
                  <li>ИНН 7726030449, лицензия № 045-13976-000001 от 03.12.2002</li>
                  <li>Адрес: 173003, Новгородская обл., г. Великий Новгород, наб. реки Гзень, дом 11, оф. 403</li>
                  <li>Телефон: <a href="tel:+78162731720">(8162) 73-17-20</a>, 730-723</li>
                  <li>E-mail: <a href="mailto:vnovgorod@rrost.ru">vnovgorod@rrost.ru</a></li>
                </ul>
              </article>

              <article class="info-card section-card--accent">
                <div class="kicker">Банковский надзор</div>
                <h3>Служба текущего банковского надзора Банка России</h3>
                <ul>
                  <li>300 — бесплатно для звонков с мобильных телефонов</li>
                  <li><a href="tel:88003003000">8 (800) 300-30-00</a> — бесплатно на территории РФ</li>
                  <li><a href="tel:+74993003000">+7 (499) 300-30-00</a> — по тарифу оператора</li>
                  <li>
                    Обращение о нарушении прав можно направить через
                    <a href="http://www.cbr.ru/Интернет-приемная" target="_blank" rel="noopener">интернет-приемную Банка России</a>.
                  </li>
                </ul>
              </article>
            </div>

            <div class="section-card">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Реквизиты</div>
                  <h2 style="margin:8px 0 0;">Сведения о банке</h2>
                </div>
                <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Уточнить данные</a>
              </div>

              <div class="kv-table" style="margin-top: var(--s-4);">
                <?php foreach (sb_alpha_get_bank_requisites_rows() as $row) : ?>
                  <?php
                  $value = (string) $row['value'];
                  $copy_value = isset($row['copy']) ? (string) $row['copy'] : $value;
                  $has_link = !empty($row['url']);
                  $is_external = !empty($row['external']);
                  ?>
                  <div class="kv-row">
                    <div class="kv-label"><?php echo esc_html((string) $row['label']); ?></div>
                    <div class="kv-value">
                      <div>
                        <?php if ($has_link) : ?>
                          <a href="<?php echo esc_url((string) $row['url']); ?>"<?php echo $is_external ? ' target="_blank" rel="noopener"' : ''; ?>>
                            <?php echo esc_html($value); ?>
                          </a>
                        <?php else : ?>
                          <?php echo esc_html($value); ?>
                        <?php endif; ?>
                      </div>
                      <div class="kv-copy">
                        <button class="copy mini" type="button" data-copy="<?php echo esc_attr($copy_value); ?>">Копировать</button>
                      </div>
                    </div>
                  </div>
                <?php endforeach; ?>
              </div>
            </div>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

  <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>Скопировано</div>
</main>

<?php get_footer(); ?>
```

## `page-tarify-banka.php`
```php
<?php
$tariffs_download = sb_alpha_get_tariffs_download();
$tariffs_view = sb_alpha_get_tariffs_view();
$primary_download_url = !empty($tariffs_download[0]['url']) ? (string) $tariffs_download[0]['url'] : sb_alpha_url('tariffs');
get_header();
?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Тарифы</div>
            <h1 style="margin:8px 0 10px;">Тарифы банка</h1>
            <p class="muted" style="max-width:78ch;">
              АО НКБ «СЛАВЯНБАНК» предлагает тарифы по операциям в валюте РФ и иностранной валюте,
              а также специальные предложения для новых клиентов.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">Перейти к содержимому</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Консультация</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('tariff_privetstvenny')); ?>" class="mono">«Приветственный»</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('tariff-depositny')); ?>" class="mono">«Депозитный»</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('tariffs_slavny')); ?>" class="mono">«Славный»</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <div class="section-flow">
            <div class="alert">
              <div class="alert-dot" aria-hidden="true"></div>
              <div>
                <div style="font-weight:600;">Актуальные тарифы и специальные предложения</div>
                <div class="muted" style="margin-top:4px;">
                  На странице собраны документы для скачивания и действующие тарифные разделы,
                  где опубликованы подробные условия обслуживания.
                </div>
              </div>
            </div>

            <div class="tariff-grid">
              <div class="tariff-panel">
                <div class="section-head-inline">
                  <div>
                    <div class="kicker">Скачать</div>
                    <h2 style="margin:8px 0 0;">Тарифы в виде документов</h2>
                  </div>
                </div>

                <div class="doc-shelf" style="margin-top: var(--s-4);">
                  <?php foreach ($tariffs_download as $item) : ?>
                    <a class="doc-card" href="<?php echo esc_url((string) $item['url']); ?>" target="_blank" rel="noopener">
                      <span class="doc-ext"><?php echo esc_html((string) $item['kind']); ?></span>
                      <div class="doc-body">
                        <div class="doc-title"><?php echo esc_html((string) $item['title']); ?></div>
                        <div class="muted"><?php echo esc_html((string) $item['date']); ?></div>
                      </div>
                      <span class="doc-arrow">→</span>
                    </a>
                  <?php endforeach; ?>
                </div>
              </div>

              <div class="tariff-panel">
                <div class="section-head-inline">
                  <div>
                    <div class="kicker">Открыть на сайте</div>
                    <h2 style="margin:8px 0 0;">Подробные тарифные страницы</h2>
                  </div>
                </div>

                <div class="doc-shelf" style="margin-top: var(--s-4);">
                  <?php foreach ($tariffs_view as $item) : ?>
                    <a class="doc-card" href="<?php echo esc_url((string) $item['url']); ?>">
                      <span class="doc-ext"><?php echo esc_html((string) $item['kind']); ?></span>
                      <div class="doc-body">
                        <div class="doc-title"><?php echo esc_html((string) $item['title']); ?></div>
                        <div class="muted"><?php echo esc_html((string) $item['date']); ?></div>
                      </div>
                      <span class="doc-arrow">→</span>
                    </a>
                  <?php endforeach; ?>
                </div>
              </div>
            </div>

            <div class="section-card section-card--accent">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Быстрый переход</div>
                  <h2 style="margin:8px 0 0;">Скачать тарифы банка</h2>
                </div>
                <a class="btn primary" href="<?php echo esc_url($primary_download_url); ?>" target="_blank" rel="noopener">Скачать тарифы банка</a>
              </div>
              <div class="route-meta" style="margin-top: var(--s-4);">
                <span class="route-chip">Валютные операции</span>
                <span class="route-chip">Тарифы для новых клиентов</span>
                <span class="route-chip">PDF и HTML версии</span>
              </div>
            </div>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
```

## `template-parts/home-stack.php`
```php
<?php
$publications = [
    [
        'date' => '19.12.2025',
        'title' => 'Изменение тарифов банка по операциям в валюте РФ!',
        'url' => 'https://slavbank.ru/news/izmenenie-tarifov-banka-po-operacziyam-v-valyute-rf.html',
    ],
    [
        'date' => '12.12.2025',
        'title' => 'О режиме работы банка в праздничные дни',
        'url' => 'https://slavbank.ru/news/o-rezhime-raboty-banka-v-prazdnichnie-dni.html',
    ],
    [
        'date' => '19.11.2025',
        'title' => 'Изменение тарифов банка по операциям в иностранной валюте!',
        'url' => 'https://slavbank.ru/news/izmenenie-tarifov-banka-po-operacziyam-v-inostrannoj-valyute-s-011225.html',
    ],
    [
        'date' => '01.11.2025',
        'title' => 'С 01.11.2025 обновлены тарифные сетки по депозитам юридических лиц + специальное предложение по обслуживанию счетов!',
        'url' => 'https://slavbank.ru/poleznaya_informacia/tarif_depositny_s_01112025.html',
    ],
];

$sections = [
    ['label' => 'ИНФОРМАЦИЯ БАНКА', 'url' => sb_alpha_url('info-bank-page')],
    ['label' => 'ТАРИФЫ БАНКА', 'url' => sb_alpha_url('tariffs')],
    ['label' => 'ЮРИДИЧЕСКИМ ЛИЦАМ', 'url' => sb_alpha_url('legal-entities')],
    ['label' => 'ЧАСТНЫМ ЛИЦАМ', 'url' => sb_alpha_url('private-persons')],
    ['label' => 'ПОДДЕРЖКА', 'url' => sb_alpha_url('support')],
    ['label' => 'НАПИСАТЬ В БАНК', 'url' => sb_alpha_url('write-to-bank')],
    ['label' => 'ВАКАНСИИ', 'url' => sb_alpha_url('vacancies')],
];

$categories = [
    ['label' => 'АРХИВ', 'url' => 'https://slavbank.ru/category/arhiv'],
    ['label' => 'ДОКУМЕНТЫ ДЛЯ КЛИЕНТОВ', 'url' => 'https://slavbank.ru/category/dokumenty-dlya-klientov'],
    ['label' => 'НОВОСТИ', 'url' => 'https://slavbank.ru/category/news'],
    ['label' => 'ПОЛЕЗНАЯ ИНФОРМАЦИЯ', 'url' => 'https://slavbank.ru/category/poleznaya_informacia'],
];
?>
<div class="stack">
  <div class="bento-card reveal" data-reveal="right">
    <div class="kicker">Контакты ВЭД</div>
    <h3 style="margin:6px 0 10px;">Быстрая связь</h3>
    <div class="row" style="gap:10px; flex-wrap:wrap;">
      <a class="btn glass" href="tel:+7(495)198-99-51" style="border-color:rgba(0,0,0,.08);">
        📞 <span class="mono">+7(495)198-99-51</span>
      </a>
      <a class="btn glass" href="mailto:ved@slavbank.ru" style="border-color:rgba(0,0,0,.08);">✉️ ved@slavbank.ru</a>
    </div>
  </div>

  <div class="bento-card reveal is-in" data-reveal="right">
    <div class="kicker">Курсы обмена валют</div>
    <h3 style="margin:6px 0 10px;">Актуальная информация по кассе банка</h3>
    <div class="fine" style="margin-top:8px;">
      Для уточнения актуальных курсов обмена валют в кассе банка используйте телефон
      <a href="tel:78162665247" class="mono">(8162) 66‑52‑47</a> или электронную почту
      <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>.
    </div>
    <div class="fine" style="margin-top:8px;">АО НКБ «СЛАВЯНБАНК»</div>
  </div>

  <div class="bento-card reveal is-in" data-reveal="right">
    <div class="kicker">Полезная информация</div>
    <h3 style="margin:6px 0 10px;">Последние публикации</h3>
    <div class="posts">
      <?php foreach ($publications as $publication) : ?>
        <a class="post" href="<?php echo esc_url($publication['url']); ?>" target="_blank" rel="noopener">
          <span class="muted"><?php echo esc_html($publication['date']); ?></span>
          <strong><?php echo esc_html($publication['title']); ?></strong>
        </a>
      <?php endforeach; ?>
    </div>
  </div>

  <details class="reveal" data-reveal="right" open>
    <summary style="cursor:pointer; font-weight:600;">Разделы сайта</summary>
    <div class="drawer-links" style="margin-top:10px;">
      <?php foreach ($sections as $section) : ?>
        <a class="drawer-sub" href="<?php echo esc_url($section['url']); ?>"><?php echo esc_html($section['label']); ?></a>
      <?php endforeach; ?>
    </div>
  </details>

  <details class="reveal" data-reveal="right" open>
    <summary style="cursor:pointer; font-weight:600;">Рубрики</summary>
    <div class="drawer-links" style="margin-top:10px;">
      <?php foreach ($categories as $category) : ?>
        <a class="drawer-sub" href="<?php echo esc_url($category['url']); ?>" target="_blank" rel="noopener">
          <?php echo esc_html($category['label']); ?>
        </a>
      <?php endforeach; ?>
    </div>
  </details>
</div>
```

