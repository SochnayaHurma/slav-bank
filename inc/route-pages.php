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
    return [];
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
