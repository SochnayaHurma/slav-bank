<?php


if (!defined('ABSPATH')) {
    exit;
}

require_once get_template_directory() . '/inc/page-data.php';
require_once get_template_directory() . '/inc/python-routes.php';
require_once get_template_directory() . '/inc/python-routes-wave2.php';
require_once get_template_directory() . '/inc/python-routes-wave4.php';
require_once get_template_directory() . '/inc/content-slots.php';
require_once get_template_directory() . '/inc/page-mode.php';
require_once get_template_directory() . '/inc/home-stack-data.php';
require_once get_template_directory() . '/inc/admin-home-stack.php';
const SB_ALPHA_REWRITE_VERSION_OPTION = 'sb_alpha_rewrite_version';


if (!function_exists('sb_alpha_force_404')) {
    function sb_alpha_force_404(): void
    {
        status_header(404);
        nocache_headers();

        global $wp_query;
        if ($wp_query instanceof WP_Query) {
            $wp_query->set_404();
        }

        $template = get_404_template();

        if (is_string($template) && $template !== '' && file_exists($template)) {
            require $template;
        } else {
            echo '<h1>404</h1><p>Страница не найдена.</p><p><a href="' . esc_url(home_url('/')) . '">Вернуться на главную</a></p>';
        }

        exit;
    }
}
// actions 
add_action('after_setup_theme', 'sb_alpha_maybe_seed_home_currency_widget');


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
        $parts['title'] = 'СЛАВЯНБАНК';

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
        'informaciya-banka' => 'Информация банка - АО НКБ "СЛАВЯНБАНК"',
        'kontakty' => 'Контакты - АО НКБ "СЛАВЯНБАНК"',
        'otchetnost' => 'Отчетность - АО НКБ "СЛАВЯНБАНК"',
        'rekvizity-banka' => 'Реквизиты банка - АО НКБ "СЛАВЯНБАНК"',
        'napisat-v-bank' => 'Написать в банк - АО НКБ "СЛАВЯНБАНК"',
        'podderzhka' => 'Поддержка - АО НКБ "СЛАВЯНБАНК"',
        'tarify-banka' => 'Тарифы банка - АО НКБ "СЛАВЯНБАНК"',
    ];

    foreach ($page_titles as $slug => $title) {
        if (is_page($slug)) {
            $parts['title'] = $title;
            break;
        }
    }

    return $parts;
}
add_filter('document_title_parts', 'sb_alpha_document_title_parts', 20);

function sb_alpha_enqueue_assets(): void
{
    $version = wp_get_theme()->get('Version') ?: '0.5.0';
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
function sb_alpha_wp_page_url(string $slug, string $fallback = ''): string
{
    $page = get_page_by_path($slug, OBJECT, ['page']);

    if (!$page instanceof WP_Post || $page->post_status !== 'publish') {
        return $fallback;
    }

    $url = get_permalink($page);

    return is_string($url) && $url !== '' ? $url : $fallback;
}
function sb_alpha_routes(): array
{
    return [
        'home' => home_url('/'),
        'search' => sb_alpha_search_page_url(),
        'info-bank-page' => sb_python_route_url('info-bank-page'),
        'requisites_bank' => sb_python_route_url('requisites_bank'),
        'governance' => sb_python_route_url('governance'),
        'reporting' => sb_python_route_url('reporting'),
        'disclosur-regulatory' => sb_python_route_url('disclosur-regulatory'),
        'notaries' => sb_python_route_url('notaries'),
        'novosti' => sb_python_route_url('novosti'),
        'tariffs' => sb_python_route_url('tariffs'),
        'tariffs_rub' => sb_python_route_url('tariffs_rub'),
        'tariffs_slavny' => sb_python_route_url('tariffs_slavny'),
        'tariff_privetstvenny' => sb_python_route_url('tariff_privetstvenny'),
        'tariff-depositny' => sb_python_route_url('tariff-depositny'),
        'tariffs-foreign-currency' => sb_python_route_url('tariffs-foreign-currency'),
        'legal-entities' => sb_python_route_url('legal-entities'),
        'business-deposits' => sb_python_route_url('business-deposits'),
        'business-lending' => sb_python_route_url('business-lending'),
        'account-service' => sb_python_route_url('account-service'),
        'fx-account-service' => sb_python_route_url('fx-account-service'),
        'currency-control' => sb_python_route_url('currency-control'),
        'aml-fatca' => sb_python_route_url('aml-fatca'),
        'crs' => sb_python_route_url('crs'),
        'cashless-payments' => sb_python_route_url('cashless-payments'),
        'cash-payments' => sb_python_route_url('cash-payments'),
        'payment-demands' => sb_python_route_url('payment-demands'),
        'private-persons' => sb_python_route_url('private-persons'),
        'client-bank-online' => sb_python_route_url('client-bank-online'),
        'instruction' => sb_python_route_url('instruction'),
        'faq' => sb_python_route_url('faq'),
        'ecp-regeneration' => sb_python_route_url('ecp-regeneration'),
        'support' => sb_python_route_url('support'),
        'security' => sb_python_route_url('security'),
        'appeal-123-fz' => sb_python_route_url('appeal-123-fz'),
        'covid19' => sb_python_route_url('covid19'),
        'contacts' => sb_python_route_url('contacts'),
        'write-to-bank' => sb_python_route_url('write-to-bank'),
        'vacancies' => sb_python_route_url('vacancies'),
        // 'zapros-na-otkrytie-raschetnogo-scheta' => sb_python_route_url('zapros-na-otkrytie-raschetnogo-scheta'),
        // 'zapros-na-kreditovanie-msp' => sb_python_route_url('zapros-na-kreditovanie-msp'),
        'zapros-na-otkrytie-raschetnogo-scheta' =>
    sb_alpha_wp_page_url(
        'zapros-na-otkrytie-raschetnogo-scheta',
        sb_python_route_url('zapros-na-otkrytie-raschetnogo-scheta')
    ),

'zapros-na-kreditovanie-msp' =>
    sb_alpha_wp_page_url(
        'zapros-na-kreditovanie-msp',
        sb_python_route_url('zapros-na-kreditovanie-msp')
    ),
        'client-bank-primary-login' => 'https://dbo.slavbank.ru:20101/',
        'client-bank-backup-login' => 'https://dbo1.slavbank.ru:20101/',
        'client-bank-login' => 'https://ved.slavbank.ru/',
        'remote-support' => 'https://www.ammyy.com/ru/',
    ];
}

function sb_alpha_url(string $key): string
{
    $routes = sb_alpha_routes();

    return $routes[$key] ?? home_url('/');
}

function sb_alpha_register_legacy_rewrites(): void
{
    add_rewrite_rule('^search/?$', 'index.php?sb_alpha_search_page=1', 'top');
    add_rewrite_rule('^novosti/?$', 'index.php?sb_alpha_news_page=1', 'top');
    add_rewrite_rule('^novosti/page/([0-9]+)/?$', 'index.php?sb_alpha_news_page=1&paged=$matches[1]', 'top');
}
add_action('init', 'sb_alpha_register_legacy_rewrites');
add_action('init', 'sb_alpha_register_page_mode_meta'); // todo
add_action('add_meta_boxes_page', 'sb_alpha_add_page_mode_meta_box'); // todo
add_action('save_post_page', 'sb_alpha_save_page_mode_meta', 10, 3); // todo
function sb_alpha_add_query_vars(array $vars): array
{
    $vars[] = 'sb_alpha_search_page';
    $vars[] = 'sb_alpha_news_page';

    return $vars;
}
add_filter('query_vars', 'sb_alpha_add_query_vars');

function sb_alpha_store_rewrite_version(): void
{
    update_option(SB_ALPHA_REWRITE_VERSION_OPTION, (string) (wp_get_theme()->get('Version') ?: '0.5.0'), false);
}

function sb_alpha_maybe_flush_legacy_rewrites(): void
{
    $version = (string) (wp_get_theme()->get('Version') ?: '0.5.0');
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
/**
 * Полное отключение генерации Global Styles (theme.json)
 */
function sb_alpha_kill_global_styles(): void
{
    // Удаляем отрисовку стилей в head и footer
    remove_action('wp_enqueue_scripts', 'wp_enqueue_global_styles');
    remove_action('wp_footer', 'wp_enqueue_global_styles', 1);

    // Удаляем поддержку дуотонов (тоже генерируют много лишнего CSS)
    remove_action('wp_head', 'wp_render_duotone_support', 10);
    remove_action('wp_footer', 'wp_render_duotone_support', 10);

    // Если используется классическая тема, WP иногда вешает их сюда
    remove_action('wp_enqueue_scripts', 'wp_enqueue_classic_theme_styles');
}
add_action('init', 'sb_alpha_kill_global_styles');

/**
 * Дополнительная очистка через фильтры (на случай, если плагины пытаются их вернуть)
 */
add_filter('styles_inline_size_limit', '__return_zero'); // Запрещает инлайнить стили
add_filter('print_late_styles', '__return_false');       // Запрещает позднюю печать стилей
/**
 * Агрессивная очистка заголовка и дефолтных стилей
 */
function sb_alpha_nuclear_cleanup(): void
{
    // 1. Убираем те самые inline-стили из вашего скриншота
    wp_dequeue_style('global-styles');                // Переменные theme.json
    wp_dequeue_style('classic-theme-styles');         // Стили старых тем
    wp_dequeue_style('wp-block-library');             // Базовые блоки
    wp_dequeue_style('wp-block-library-theme');       // Тема блоков
    wp_dequeue_style('wp-img-auto-sizes-contain');    // Стили картинок (WP 6.7+)
    
    // 2. Убираем мусорные мета-теги
    remove_action('wp_head', 'rsd_link');                // Ссылка для внешних редакторов
    remove_action('wp_head', 'wlwmanifest_link');        // Ссылка для Windows Live Writer
    remove_action('wp_head', 'wp_generator');            // Версия WordPress
    remove_action('wp_head', 'wp_shortlink_wp_head');    // Короткая ссылка страницы
    remove_action('wp_head', 'rest_output_link_wp_head');// Ссылка на WP REST API
    remove_action('wp_head', 'wp_resource_hints', 2);    // dns-prefetch (localhost и прочее)
}

// Запускаем на очень позднем этапе (приоритет 1000)
add_action('wp_enqueue_scripts', 'sb_alpha_nuclear_cleanup', 1000);

/**
 * Отключаем эмодзи и SVG-фильтры (тоже часть "зоопарка")
 */
add_action('init', function() {
    // Эмодзи
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
    
    // SVG фильтры, которые WP вставляет в начало <body>
    remove_action('wp_body_open', 'wp_global_styles_render_svg_filters');
});