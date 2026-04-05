<?php
if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('sb_alpha_reporting_builder_template_slug')) {
    function sb_alpha_reporting_builder_template_slug(): string
    {
        return 'page-template-otchetnost-builder.php';
    }
}

if (!function_exists('sb_alpha_get_current_admin_post_id')) {
    function sb_alpha_get_current_admin_post_id(): int
    {
        if (isset($_GET['post'])) {
            return absint($_GET['post']);
        }

        if (isset($_POST['post_ID'])) {
            return absint($_POST['post_ID']);
        }

        return 0;
    }
}

if (!function_exists('sb_alpha_is_reporting_builder_post')) {
    function sb_alpha_is_reporting_builder_post($post): bool
    {
        if (!$post instanceof WP_Post || $post->post_type !== 'page') {
            return false;
        }

        return get_page_template_slug($post) === sb_alpha_reporting_builder_template_slug();
    }
}

if (!function_exists('sb_alpha_is_reporting_builder_post_id')) {
    function sb_alpha_is_reporting_builder_post_id(int $post_id): bool
    {
        if ($post_id <= 0) {
            return false;
        }

        $post = get_post($post_id);

        return sb_alpha_is_reporting_builder_post($post);
    }
}

add_action('wp_enqueue_scripts', 'sb_alpha_enqueue_reporting_builder_assets');
function sb_alpha_enqueue_reporting_builder_assets(): void
{
    if (!is_page_template(sb_alpha_reporting_builder_template_slug())) {
        return;
    }

    $version = wp_get_theme()->get('Version') ?: '0.5.0';

    wp_enqueue_style(
        'sb-alpha-reporting-builder',
        get_template_directory_uri() . '/assets/css/reporting-builder.css',
        ['sb-alpha-theme', 'sb-alpha-beta-pages'],
        $version
    );
}

add_action('enqueue_block_editor_assets', 'sb_alpha_enqueue_reporting_builder_editor_assets');
function sb_alpha_enqueue_reporting_builder_editor_assets(): void
{
    if (!function_exists('get_current_screen')) {
        return;
    }

    $screen = get_current_screen();
    if (!$screen || $screen->base !== 'post' || $screen->post_type !== 'page') {
        return;
    }

    $post_id = sb_alpha_get_current_admin_post_id();
    if (!sb_alpha_is_reporting_builder_post_id($post_id)) {
        return;
    }

    $version = wp_get_theme()->get('Version') ?: '0.5.0';
    $base = get_template_directory_uri();

    wp_enqueue_style('sb-alpha-editor-theme', get_stylesheet_uri(), [], $version);
    wp_enqueue_style('sb-alpha-editor-tokens', $base . '/assets/css/tokens.css', ['sb-alpha-editor-theme'], $version);
    wp_enqueue_style('sb-alpha-editor-layout', $base . '/assets/css/layout.css', ['sb-alpha-editor-tokens'], $version);
    wp_enqueue_style('sb-alpha-editor-beta-pages', $base . '/assets/css/beta-pages.css', ['sb-alpha-editor-layout'], $version);
    wp_enqueue_style('sb-alpha-editor-reporting-builder', $base . '/assets/css/editor-reporting-builder.css', ['sb-alpha-editor-beta-pages'], $version);
}

add_filter('allowed_block_types_all', 'sb_alpha_reporting_builder_allowed_blocks', 20, 2);
function sb_alpha_reporting_builder_allowed_blocks($allowed_block_types, $editor_context)
{
    $post = $editor_context->post ?? null;

    if (!sb_alpha_is_reporting_builder_post($post)) {
        return $allowed_block_types;
    }

    return [
        'core/group',
        'core/paragraph',
        'core/heading',
        'core/buttons',
        'core/button',
        'core/details',
        'core/list',
        'core/separator',
        'core/spacer',
        'core/table',
        'core/file',
    ];
}
