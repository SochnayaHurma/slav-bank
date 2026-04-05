<?php
if (!defined('ABSPATH')) {
    exit;
}

add_action('wp_enqueue_scripts', 'sb_alpha_enqueue_reporting_builder_assets');
function sb_alpha_enqueue_reporting_builder_assets(): void
{
    if (!is_page_template('page-template-otchetnost-builder.php')) {
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

    $version = wp_get_theme()->get('Version') ?: '0.5.0';
    $base = get_template_directory_uri();

    wp_enqueue_style('sb-alpha-editor-theme', get_stylesheet_uri(), [], $version);
    wp_enqueue_style('sb-alpha-editor-tokens', $base . '/assets/css/tokens.css', ['sb-alpha-editor-theme'], $version);
    wp_enqueue_style('sb-alpha-editor-layout', $base . '/assets/css/layout.css', ['sb-alpha-editor-tokens'], $version);
    wp_enqueue_style('sb-alpha-editor-beta-pages', $base . '/assets/css/beta-pages.css', ['sb-alpha-editor-layout'], $version);
    wp_enqueue_style('sb-alpha-editor-reporting-builder', $base . '/assets/css/editor-reporting-builder.css', ['sb-alpha-editor-beta-pages'], $version);
}
