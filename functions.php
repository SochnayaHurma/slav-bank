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

function sb_alpha_news_page_url(): string
{
    return sb_alpha_local_page_url('novosti', home_url('/novosti/'));
}

function sb_alpha_search_page_url(): string
{
    return home_url('/search/');
}

function sb_alpha_is_runtime_search_page(): bool
{
    $flag = get_query_var('sb_alpha_search_page');

    return is_search() || $flag === '1' || $flag === 1;
}

function sb_alpha_is_runtime_news_page(): bool
{
    $flag = get_query_var('sb_alpha_news_page');

    return is_page('novosti') || $flag === '1' || $flag === 1;
}

function sb_alpha_document_title_parts(array $parts): array
{
    if (is_front_page()) {
        $parts['title'] = 'О БАНКЕ - СЛАВЯНБАНК - Новгородский коммерческий банк';

        return $parts;
    }

    if (sb_alpha_is_runtime_search_page()) {
        $parts['title'] = 'Поиск по сайту - АО НКБ "СЛАВЯНБАНК"';

        return $parts;
    }

    if (sb_alpha_is_runtime_news_page()) {
        $parts['title'] = 'Новости - АО НКБ "СЛАВЯНБАНК"';

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
    $version = wp_get_theme()->get('Version') ?: '0.4.0';
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

function sb_alpha_routes(): array
{
    return [
        'home' => home_url('/'),
        'search' => sb_alpha_search_page_url(),
        'info-bank-page' => sb_alpha_local_page_url('informaciya-banka'),
        'requisites_bank' => sb_alpha_local_page_url('rekvizity-banka'),
        'governance' => 'https://slavbank.ru/o-banke-slavyanbank-html/organy_upravlenya.html/',
        'reporting' => sb_alpha_local_page_url('otchetnost'),
        'disclosur-regulatory' => 'https://slavbank.ru/o-banke-html/info_bank-html/raskritie-informacii.html/',
        'notaries' => 'https://slavbank.ru/informacziya-dlya-notariusov.html/',
        'novosti' => sb_alpha_news_page_url(),
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
        'novosti' => [
            'pattern' => '^novosti\.html/?$',
            'route' => 'novosti',
        ],
    ];
}

function sb_alpha_register_legacy_rewrites(): void
{
    foreach (sb_alpha_legacy_routes() as $token => $config) {
        add_rewrite_rule($config['pattern'], 'index.php?sb_alpha_legacy_route=' . $token, 'top');
    }

    add_rewrite_rule('^search/?$', 'index.php?sb_alpha_search_page=1', 'top');
    add_rewrite_rule('^novosti/?$', 'index.php?sb_alpha_news_page=1', 'top');
}
add_action('init', 'sb_alpha_register_legacy_rewrites');

function sb_alpha_add_query_vars(array $vars): array
{
    $vars[] = 'sb_alpha_legacy_route';
    $vars[] = 'sb_alpha_search_page';
    $vars[] = 'sb_alpha_news_page';

    return $vars;
}
add_filter('query_vars', 'sb_alpha_add_query_vars');

function sb_alpha_store_rewrite_version(): void
{
    update_option(SB_ALPHA_REWRITE_VERSION_OPTION, (string) (wp_get_theme()->get('Version') ?: '0.4.0'), false);
}

function sb_alpha_maybe_flush_legacy_rewrites(): void
{
    $version = (string) (wp_get_theme()->get('Version') ?: '0.4.0');
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

    wp_safe_redirect($target, 301, 'Slavyanbank Delta Legacy');
    exit;
}
add_action('template_redirect', 'sb_alpha_handle_legacy_redirect');

function sb_alpha_template_include(string $template): string
{
    $search_flag = get_query_var('sb_alpha_search_page');
    if ($search_flag === '1' || $search_flag === 1) {
        $candidate = get_theme_file_path('search.php');
        if (is_string($candidate) && is_file($candidate)) {
            return $candidate;
        }
    }

    $news_flag = get_query_var('sb_alpha_news_page');
    if ($news_flag === '1' || $news_flag === 1) {
        $candidate = get_theme_file_path('page-novosti.php');
        if (is_string($candidate) && is_file($candidate)) {
            return $candidate;
        }
    }

    return $template;
}
add_filter('template_include', 'sb_alpha_template_include');

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

function sb_alpha_get_category_by_candidate_slugs(array $slugs): ?WP_Term
{
    foreach ($slugs as $slug) {
        $slug = trim((string) $slug);
        if ($slug === '') {
            continue;
        }

        $term = get_term_by('slug', $slug, 'category');
        if ($term instanceof WP_Term) {
            return $term;
        }
    }

    return null;
}

function sb_alpha_get_news_category_groups(): array
{
    return [
        [
            'label' => 'Новости',
            'slugs' => ['news', 'novosti'],
        ],
        [
            'label' => 'Полезная информация',
            'slugs' => [
                'poleznaya_informacia',
                'poleznaya-informacia',
                'poleznaya_informaciya',
                'poleznaya-informaciya',
            ],
        ],
    ];
}

function sb_alpha_get_news_category_ids(): array
{
    $ids = [];

    foreach (sb_alpha_get_news_category_groups() as $group) {
        $term = sb_alpha_get_category_by_candidate_slugs((array) $group['slugs']);
        if ($term instanceof WP_Term) {
            $ids[] = (int) $term->term_id;
        }
    }

    return array_values(array_unique(array_filter($ids)));
}

function sb_alpha_get_news_category_links(): array
{
    $items = [];

    foreach (sb_alpha_get_news_category_groups() as $group) {
        $term = sb_alpha_get_category_by_candidate_slugs((array) $group['slugs']);
        if ($term instanceof WP_Term) {
            $url = get_category_link($term);
            if (!is_wp_error($url) && is_string($url) && $url !== '') {
                $items[] = [
                    'label' => (string) $group['label'],
                    'url' => $url,
                    'external' => false,
                ];
                continue;
            }
        }

        $items[] = [
            'label' => (string) $group['label'],
            'url' => sb_alpha_url('novosti'),
            'external' => false,
        ];
    }

    return $items;
}

function sb_alpha_get_news_query_args(array $overrides = []): array
{
    $args = [
        'post_type' => 'post',
        'post_status' => 'publish',
        'ignore_sticky_posts' => true,
    ];

    $category_ids = sb_alpha_get_news_category_ids();
    if (!empty($category_ids)) {
        $args['category__in'] = $category_ids;
    }

    return wp_parse_args($overrides, $args);
}

function sb_alpha_get_recent_publications(int $limit = 4): array
{
    $query = new WP_Query(
        sb_alpha_get_news_query_args([
            'posts_per_page' => max(1, $limit),
        ])
    );

    $items = [];

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();

            $items[] = [
                'date' => get_the_date('d.m.Y'),
                'title' => get_the_title(),
                'url' => get_permalink(),
            ];
        }
    }

    wp_reset_postdata();

    return $items;
}

function sb_alpha_get_post_teaser(WP_Post $post, int $words = 28): string
{
    $excerpt = trim((string) get_the_excerpt($post));
    if ($excerpt !== '') {
        return $excerpt;
    }

    $content = trim(wp_strip_all_tags((string) $post->post_content));
    if ($content === '') {
        return '';
    }

    return wp_trim_words($content, $words);
}

function sb_alpha_get_post_type_label(WP_Post $post): string
{
    if ($post->post_type === 'post') {
        return 'Новость';
    }

    if ($post->post_type === 'page') {
        return 'Страница';
    }

    $object = get_post_type_object($post->post_type);
    if ($object && !empty($object->labels->singular_name)) {
        return (string) $object->labels->singular_name;
    }

    return 'Материал';
}

function sb_alpha_get_post_category_links(int $post_id): array
{
    $terms = get_the_category($post_id);
    if (empty($terms) || !is_array($terms)) {
        return [];
    }

    $links = [];

    foreach ($terms as $term) {
        if (!$term instanceof WP_Term) {
            continue;
        }

        $url = get_category_link($term);
        if (is_wp_error($url) || !is_string($url) || $url === '') {
            continue;
        }

        $links[] = [
            'label' => $term->name,
            'url' => $url,
        ];
    }

    return $links;
}

function sb_alpha_get_search_term(): string
{
    if (isset($_GET['s'])) {
        return sanitize_text_field(wp_unslash((string) $_GET['s']));
    }

    return sanitize_text_field(get_search_query(false));
}

function sb_alpha_get_search_results_query(int $paged = 1): ?WP_Query
{
    $term = sb_alpha_get_search_term();
    if ($term === '') {
        return null;
    }

    return new WP_Query([
        'post_type' => ['page', 'post'],
        'post_status' => 'publish',
        's' => $term,
        'paged' => max(1, $paged),
        'posts_per_page' => 10,
        'ignore_sticky_posts' => true,
    ]);
}
