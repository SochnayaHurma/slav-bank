<?php
if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('sb_alpha_register_block_categories')) {
    function sb_alpha_register_block_categories(array $categories, $post): array
    {
        foreach ($categories as $category) {
            if (($category['slug'] ?? '') === 'sb-alpha') {
                return $categories;
            }
        }

        $categories[] = [
            'slug'  => 'sb-alpha',
            'title' => 'SB Alpha',
            'icon'  => null,
        ];

        return $categories;
    }
}
add_filter('block_categories_all', 'sb_alpha_register_block_categories', 20, 2);

if (!function_exists('sb_alpha_doc_list_should_load_editor_assets')) {
    function sb_alpha_doc_list_should_load_editor_assets(): bool
    {
        if (!function_exists('get_current_screen')) {
            return false;
        }

        $screen = get_current_screen();
        if (!$screen || $screen->base !== 'post' || $screen->post_type !== 'page') {
            return false;
        }

        if (function_exists('sb_alpha_get_current_admin_post_id') && function_exists('sb_alpha_is_reporting_builder_post_id')) {
            $post_id = sb_alpha_get_current_admin_post_id();
            return sb_alpha_is_reporting_builder_post_id($post_id);
        }

        return true;
    }
}

add_action('enqueue_block_editor_assets', 'sb_alpha_enqueue_doc_list_innerblocks_editor_script');
function sb_alpha_enqueue_doc_list_innerblocks_editor_script(): void
{
    if (!sb_alpha_doc_list_should_load_editor_assets()) {
        return;
    }

    $version = wp_get_theme()->get('Version') ?: '0.5.0';

    wp_enqueue_script(
        'sb-alpha-doc-list-innerblocks-native',
        get_template_directory_uri() . '/assets/js/sb-alpha-doc-list-innerblocks-native.js',
        ['wp-blocks', 'wp-block-editor', 'wp-components', 'wp-element', 'wp-i18n'],
        $version,
        true
    );
}

add_action('init', 'sb_alpha_register_doc_list_innerblocks_blocks');
function sb_alpha_register_doc_list_innerblocks_blocks(): void
{
    register_block_type('sb-alpha/doc-list', [
        'editor_script' => 'sb-alpha-doc-list-innerblocks-native',
    ]);

    register_block_type('sb-alpha/doc-row', [
        'editor_script' => 'sb-alpha-doc-list-innerblocks-native',
        'attributes' => [
            'date' => [
                'type' => 'string',
                'default' => '29.09.2021',
            ],
            'title' => [
                'type' => 'string',
                'default' => 'Список аффилированных лиц',
            ],
            'kind' => [
                'type' => 'string',
                'default' => 'XLS',
            ],
            'url' => [
                'type' => 'string',
                'default' => '#',
            ],
            'opensInNewTab' => [
                'type' => 'boolean',
                'default' => true,
            ],
        ],
    ]);
}

add_filter('allowed_block_types_all', 'sb_alpha_doc_list_allow_custom_blocks', 30, 2);
function sb_alpha_doc_list_allow_custom_blocks($allowed_block_types, $editor_context)
{
    $post = $editor_context->post ?? null;

    if (function_exists('sb_alpha_is_reporting_builder_post') && !sb_alpha_is_reporting_builder_post($post)) {
        return $allowed_block_types;
    }

    $custom = [
        'sb-alpha/doc-list',
        'sb-alpha/doc-row',
    ];

    if ($allowed_block_types === true) {
        return true;
    }

    if (!is_array($allowed_block_types)) {
        return $custom;
    }

    return array_values(array_unique(array_merge($allowed_block_types, $custom)));
}
