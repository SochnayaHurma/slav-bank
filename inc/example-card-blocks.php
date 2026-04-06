<?php
if (!defined('ABSPATH')) {
    exit;
}

add_action('enqueue_block_editor_assets', 'sb_alpha_enqueue_example_card_block_editor_assets');
function sb_alpha_enqueue_example_card_block_editor_assets(): void
{
    $version = wp_get_theme()->get('Version') ?: '0.5.0';
    $base = get_template_directory_uri();

    wp_enqueue_script(
        'sb-alpha-example-card-blocks',
        $base . '/assets/js/example-card-blocks.js',
        ['wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-i18n'],
        $version,
        true
    );

    wp_localize_script('sb-alpha-example-card-blocks', 'SBAlphaExampleCardBlockData', [
        'defaultImageUrl' => trailingslashit($base) . 'assets/img/example-card-bg.svg',
    ]);
}

add_action('enqueue_block_assets', 'sb_alpha_enqueue_example_card_block_styles');
function sb_alpha_enqueue_example_card_block_styles(): void
{
    $version = wp_get_theme()->get('Version') ?: '0.5.0';
    $base = get_template_directory_uri();

    wp_enqueue_style(
        'sb-alpha-example-card-blocks',
        $base . '/assets/css/example-card-blocks.css',
        ['sb-alpha-theme'],
        $version
    );
}
