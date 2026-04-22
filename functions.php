<?php


if (!defined('ABSPATH')) {
    exit;
}

require_once get_template_directory() . '/inc/page-data.php';
require_once get_template_directory() . '/inc/route-pages.php';
require_once get_template_directory() . '/inc/route-partial-overrides.php';
require_once get_template_directory() . '/inc/content-slots.php';
require_once get_template_directory() . '/inc/page-mode.php';
require_once get_template_directory() . '/inc/home-stack-data.php';
require_once get_template_directory() . '/inc/admin-home-stack.php';

// Миграции
// require_once get_template_directory() . '/migrations/slavbank-reporting-tariffs-migration-patterns.php';
// require_once get_template_directory() . '/migrations/slavbank-requisites-tariffs-nohero-migration-patterns.php';
// require_once get_template_directory() . '/migrations/slavbank-requisites-filled-migration.php';
require_once get_template_directory() . '/migrations/bootstrap.php';
require_once get_template_directory() . '/inc/contacts-page-shared.php';
require_once get_template_directory() . '/inc/blocks-contacts.php';


const SB_ALPHA_REWRITE_VERSION_OPTION = 'sb_alpha_rewrite_version';

function sb_alpha_get_dynamic_styles_css(): string
{
    ob_start();
    include get_template_directory() . '/dynamic-styles.php'; // <-- подставь реальный путь
    $css = (string) ob_get_clean();

    $css = preg_replace('#^\s*<style[^>]*>#i', '', $css);
    $css = preg_replace('#</style>\s*$#i', '', $css);

    return trim($css);
}

add_filter('block_editor_settings_all', function (array $settings, $context): array {
    $css = sb_alpha_get_dynamic_styles_css();

    if ($css === '') {
        return $settings;
    }

    $settings['styles'][] = [
        'css' => $css,
    ];

    return $settings;
}, 10, 2);

// 
// 
add_action('init', function () {
    $blocks_dir = __DIR__ . '/mine-front/build/blocks';
    $blocks_manifest = __DIR__ . '/mine-front/build/blocks-manifest.php';
    $bundle_dir = __DIR__ . '/mine-front/build/blocks-bundle';

    if (!is_dir($blocks_dir)) {
        return;
    }

    if (function_exists('wp_register_block_metadata_collection') && file_exists($blocks_manifest)) {
        wp_register_block_metadata_collection($blocks_dir, $blocks_manifest);
    }

    $block_args = [];

    $bundle_script = $bundle_dir . '/index.js';
    $bundle_asset = $bundle_dir . '/index.asset.php';

    if (file_exists($bundle_script)) {
        $asset = file_exists($bundle_asset) ? require $bundle_asset : [];
        $handle = 'slavbank-mine-blocks-editor';

        wp_register_script(
            $handle,
            get_theme_file_uri('mine-front/build/blocks-bundle/index.js'),
            isset($asset['dependencies']) && is_array($asset['dependencies']) ? $asset['dependencies'] : [],
            isset($asset['version']) ? $asset['version'] : filemtime($bundle_script)
        );

        $block_args['editorScript'] = $handle;
    }

    $bundle_editor_style = $bundle_dir . '/index.css';

    if (file_exists($bundle_editor_style)) {
        $handle = 'slavbank-mine-blocks-editor-style';

        wp_register_style(
            $handle,
            get_theme_file_uri('mine-front/build/blocks-bundle/index.css'),
            [],
            filemtime($bundle_editor_style)
        );
        wp_style_add_data($handle, 'path', $bundle_editor_style);

        if (file_exists($bundle_dir . '/index-rtl.css')) {
            wp_style_add_data($handle, 'rtl', 'replace');
        }

        $block_args['editorStyle'] = $handle;
    }

    $bundle_style = $bundle_dir . '/style-index.css';

    if (file_exists($bundle_style)) {
        $handle = 'slavbank-mine-blocks-style';

        wp_register_style(
            $handle,
            get_theme_file_uri('mine-front/build/blocks-bundle/style-index.css'),
            [],
            filemtime($bundle_style)
        );
        wp_style_add_data($handle, 'path', $bundle_style);

        if (file_exists($bundle_dir . '/style-index-rtl.css')) {
            wp_style_add_data($handle, 'rtl', 'replace');
        }

        $block_args['style'] = $handle;
    }

    $block_dirs = glob($blocks_dir . '/*', GLOB_ONLYDIR);

    if (!$block_dirs) {
        return;
    }

    sort($block_dirs);

    foreach ($block_dirs as $block_dir) {
        register_block_type($block_dir, $block_args);
    }
});
add_action( 'enqueue_block_editor_assets', function () {
	$dir =  __DIR__  . '/assets/css/';
	$url =  __DIR__  . '/assets/css/';

	$files = glob( $dir . '*.css' );
	sort( $files );

	$deps = array();

	foreach ( $files as $file ) {
		$handle = 'slavbank-' . sanitize_title( basename( $file, '.css' ) );

		wp_enqueue_style(
			$handle,
			$url . basename( $file ),
			$deps,
			filemtime( $file )
		);

		$deps[] = $handle;
	}
} );
add_filter( 'block_categories_all', function( $categories ) {
	return array_merge(
		array(
			array(
				'slug'  => 'Страницы',
				'title' => __( 'Страницы' ),
				'icon'  => 'layout',
			),
            			array(
				'slug'  => 'Компоненты темы',
				'title' => __( 'Компоненты темы'),
				'icon'  => 'layout',
			),
            			array(
				'slug'  => 'Наполнение',
				'title' => __( 'Наполнение'),
				'icon'  => 'layout',
			),
		),
		$categories
	);
}, 10, 2 );

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


function sb_alpha_setup_editor_styles() {
    add_theme_support('editor-styles');
    
    add_editor_style([
        'assets/css/tokens.css',
        'assets/css/motion.css',
        'assets/css/v3-menu.css',

    ]);
}
add_action('after_setup_theme', 'sb_alpha_setup_editor_styles');
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

    register_nav_menus([
        'sb-alpha-header-main' => __('Header Main Menu', 'sb-alpha'),
        'sb-alpha-header-mobile' => __('Header Mobile Menu', 'sb-alpha'),
        'sb-alpha-footer-about' => __('Footer: About', 'sb-alpha'),
        'sb-alpha-footer-business' => __('Footer: Business', 'sb-alpha'),
        'sb-alpha-footer-tariffs' => __('Footer: Tariffs', 'sb-alpha'),
        'sb-alpha-footer-support' => __('Footer: Support', 'sb-alpha'),
    ]);
}
add_action('after_setup_theme', 'sb_alpha_setup');

function sb_alpha_menu_title(string $location, string $default): string
{
    $menu_name = wp_get_nav_menu_name($location);
    if (is_string($menu_name) && $menu_name !== '') {
        return $menu_name;
    }

    return $default;
}

function sb_alpha_render_menu_links(string $location, array $fallback_links): void
{
    if (has_nav_menu($location)) {
        wp_nav_menu([
            'theme_location' => $location,
            'container' => false,
            'fallback_cb' => false,
            'depth' => 1,
            'items_wrap' => '%3$s',
        ]);
        return;
    }

    foreach ($fallback_links as $item) {
        $label = isset($item['label']) ? (string) $item['label'] : '';
        $url = isset($item['url']) ? (string) $item['url'] : '';
        if ($label === '' || $url === '') {
            continue;
        }
        echo '<a href="' . esc_url($url) . '">' . esc_html($label) . '</a>';
    }
}

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

        'otchetnost' => 'Отчетность - АО НКБ "СЛАВЯНБАНК"',
        'tarify-banka-html' => 'Тарифы банка - АО НКБ "СЛАВЯНБАНК"',
        'tarify_rf' => 'Тарифы по операциям в валюте РФ - АО НКБ "СЛАВЯНБАНК"',
        'tarify_valuta' => 'Тарифы по операциям в иностранной валюте - АО НКБ "СЛАВЯНБАНК"',
        'tarif_slavny' => 'Тарифы «Славный» - АО НКБ "СЛАВЯНБАНК"',
        'tarif_privetstvenny' => 'Тарифы «Приветственный» - АО НКБ "СЛАВЯНБАНК"',
        'tarif_depositny' => 'Тарифы «Депозитный» - АО НКБ "СЛАВЯНБАНК"',

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
        'info-bank-page' => sb_alpha_wp_page_url('o-banke-slavyanbank-html-info_bank-html', sb_alpha_route_url('info-bank-page')),
        'requisites_bank' => sb_alpha_route_url('requisites_bank'),
        'governance' => sb_alpha_route_url('governance'),
        'reporting' => sb_alpha_route_url('reporting'),
        'disclosur-regulatory' => sb_alpha_route_url('disclosur-regulatory'),
        'notaries' => sb_alpha_route_url('notaries'),
        'novosti' => sb_alpha_route_url('novosti'),
//         'tariffs' => sb_alpha_wp_page_url('tarify-banka-html', sb_alpha_route_url('tariffs')),
        'tariffs' => sb_alpha_route_url('tariffs'),
//   'requisites_bank' => sb_alpha_wp_page_url('rekvizity-banka', sb_alpha_route_url('requisites_bank')),
  'requisites_bank' => sb_alpha_route_url('requisites_bank'),
//   'reporting' => sb_alpha_wp_page_url('otchetnost', sb_alpha_route_url('reporting')),
  'tariffs_rub' => sb_alpha_wp_page_url('tarify_rf', sb_alpha_route_url('tariffs_rub')),
  'tariffs_slavny' => sb_alpha_wp_page_url('tarif_slavny', sb_alpha_route_url('tariffs_slavny')),
  'tariff_privetstvenny' => sb_alpha_wp_page_url('tarif_privetstvenny', sb_alpha_route_url('tariff_privetstvenny')),
//   'tariff-depositny' => sb_alpha_wp_page_url('tarif_depositny', sb_alpha_route_url('tariff-depositny')),
  'tariffs-foreign-currency' => sb_alpha_wp_page_url('tarify_valuta', sb_alpha_route_url('tariffs-foreign-currency')),
        // 'tariffs_rub' => sb_alpha_route_url('tariffs_rub'),
        // 'tariffs_slavny' => sb_alpha_route_url('tariffs_slavny'),
        // 'tariff_privetstvenny' => sb_alpha_route_url('tariff_privetstvenny'),
        'tariff-depositny' => sb_alpha_route_url('tariff-depositny'),
        // 'tariffs-foreign-currency' => sb_alpha_route_url('tariffs-foreign-currency'),
        'legal-entities' => sb_alpha_route_url('legal-entities'),
        'business-deposits' => sb_alpha_route_url('business-deposits'),
        'business-lending' => sb_alpha_route_url('business-lending'),
        'account-service' => sb_alpha_route_url('account-service'),
        'fx-account-service' => sb_alpha_route_url('fx-account-service'),
        'currency-control' => sb_alpha_route_url('currency-control'),
        'aml-fatca' => sb_alpha_route_url('aml-fatca'),
        'crs' => sb_alpha_route_url('crs'),
        'cashless-payments' => sb_alpha_route_url('cashless-payments'),
        'cash-payments' => sb_alpha_route_url('cash-payments'),
        'payment-demands' => sb_alpha_route_url('payment-demands'),
        'private-persons' => sb_alpha_route_url('private-persons'),
        'client-bank-online' => sb_alpha_route_url('client-bank-online'),
        'instruction' => sb_alpha_route_url('instruction'),
        'faq' => sb_alpha_route_url('faq'),
        'ecp-regeneration' => sb_alpha_route_url('ecp-regeneration'),
        'support' => sb_alpha_route_url('support'),
        'security' => sb_alpha_route_url('security'),
        'appeal-123-fz' => sb_alpha_route_url('appeal-123-fz'),
        'covid19' => sb_alpha_route_url('covid19'),
        'contacts' => sb_alpha_route_url('contacts'),
        'write-to-bank' => sb_alpha_route_url('write-to-bank'),
        'vacancies' => sb_alpha_route_url('vacancies'),
        // 'zapros-na-otkrytie-raschetnogo-scheta' => sb_alpha_route_url('zapros-na-otkrytie-raschetnogo-scheta'),
        // 'zapros-na-kreditovanie-msp' => sb_alpha_route_url('zapros-na-kreditovanie-msp'),
        'zapros-na-otkrytie-raschetnogo-scheta' =>
    sb_alpha_wp_page_url(
        'zapros-na-otkrytie-raschetnogo-scheta',
        sb_alpha_route_url('zapros-na-otkrytie-raschetnogo-scheta')
    ),

'zapros-na-kreditovanie-msp' =>
    sb_alpha_wp_page_url(
        'zapros-na-kreditovanie-msp',
        sb_alpha_route_url('zapros-na-kreditovanie-msp')
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
    if (sb_alpha_should_preserve_wp_post_styles()) {
        return;
    }

    remove_action('wp_enqueue_scripts', 'wp_enqueue_global_styles');
    remove_action('wp_footer', 'wp_enqueue_global_styles', 1);

    remove_action('wp_head', 'wp_render_duotone_support', 10);
    remove_action('wp_footer', 'wp_render_duotone_support', 10);

    remove_action('wp_enqueue_scripts', 'wp_enqueue_classic_theme_styles');
}
add_action('template_redirect', 'sb_alpha_kill_global_styles', 1);


function sb_alpha_styles_inline_size_limit($limit)
{
    if (sb_alpha_should_preserve_wp_post_styles()) {
        return $limit;
    }

    return 0;
}
add_filter('styles_inline_size_limit', 'sb_alpha_styles_inline_size_limit');

function sb_alpha_print_late_styles($print)
{
    if (sb_alpha_should_preserve_wp_post_styles()) {
        return $print;
    }

    return false;
}
add_filter('print_late_styles', 'sb_alpha_print_late_styles');     // Запрещает позднюю печать стилей
/**
 * Агрессивная очистка заголовка и дефолтных стилей
 */
function sb_alpha_nuclear_cleanup(): void
{
    if (sb_alpha_should_preserve_wp_post_styles()) {
        return;
    }

    wp_dequeue_style('global-styles');
    wp_dequeue_style('classic-theme-styles');
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('wp-img-auto-sizes-contain');

    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'rest_output_link_wp_head');
    remove_action('wp_head', 'wp_resource_hints', 2);
}
add_action('wp_enqueue_scripts', 'sb_alpha_nuclear_cleanup', 1000);

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

//helpers
function sb_alpha_should_preserve_wp_post_styles(): bool
{
    return !is_admin() && is_singular('post');
}
add_action('wp_enqueue_scripts', function () {
    $styles = wp_styles();

    foreach (['common', 'forms'] as $handle) {
        if (isset($styles->registered[$handle])) {
            $styles->registered[$handle]->src = false;
        }
    }
}, 100);