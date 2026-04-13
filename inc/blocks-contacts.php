<?php

if (!defined('ABSPATH')) {
    exit;
}

function sb_register_contacts_blocks(): void
{
    $theme_version = (string) (wp_get_theme()->get('Version') ?: '0.7.1');

    $editor_js_rel  = '/assets/blocks/contacts/index.js';
    $editor_php_rel = '/assets/blocks/contacts/index.asset.php';

    $editor_js_abs  = get_template_directory() . $editor_js_rel;
    $editor_php_abs = get_template_directory() . $editor_php_rel;

    $editor_meta = [
        'dependencies' => ['wp-blocks', 'wp-element', 'wp-editor', 'wp-block-editor', 'wp-components', 'wp-i18n'],
        'version' => $theme_version,
    ];

    if (file_exists($editor_php_abs)) {
        $loaded = require $editor_php_abs;
        if (is_array($loaded)) {
            $editor_meta = array_merge($editor_meta, $loaded);
        }
    }

    if (file_exists($editor_js_abs)) {
        wp_register_script(
            'sb-contacts-blocks-editor',
            get_template_directory_uri() . $editor_js_rel,
            $editor_meta['dependencies'] ?? [],
            $editor_meta['version'] ?? $theme_version,
            true
        );
    }

    wp_register_style(
        'sb-contacts-page',
        get_template_directory_uri() . '/assets/css/contacts-page.css',
        [],
        file_exists(get_template_directory() . '/assets/css/contacts-page.css')
            ? filemtime(get_template_directory() . '/assets/css/contacts-page.css')
            : $theme_version
    );
    wp_register_style(
        'sb-contacts-tokens',
        get_template_directory_uri() . '/assets/css/tokens.css',
        [],
        file_exists(get_template_directory() . '/assets/css/tokens.css')
            ? filemtime(get_template_directory() . '/assets/css/tokens.css')
            : $theme_version
    );
    wp_register_style(
        'sb-bank-pages',
        get_template_directory_uri() . '/assets/css/bank-pages.css',
        [],
        file_exists(get_template_directory() . '/assets/css/bank-pages.css')
            ? filemtime(get_template_directory() . '/assets/css/bank-pages.css')
            : $theme_version
    );

    wp_register_style(
        'sb-bank-pages-editor',
        get_template_directory_uri() . '/assets/css/contacts-page-editor.css',
        ['wp-edit-blocks'],
        file_exists(get_template_directory() . '/assets/css/contacts-page-editor.css')
            ? filemtime(get_template_directory() . '/assets/css/contacts-page-editor.css')
            : $theme_version
    );

    wp_register_style(
        'sb-bank-motion',
        get_template_directory_uri() . '/assets/css/motion.css',
        ['wp-edit-blocks'],
        file_exists(get_template_directory() . '/assets/css/motion.css')
            ? filemtime(get_template_directory() . '/assets/css/motion.css')
            : $theme_version
    );

    wp_register_style(
        'sb-contacts-page-tokens',
        get_template_directory_uri() . '/assets/css/tokens.css',
        ['wp-edit-blocks'],
        file_exists(get_template_directory() . '/assets/css/tokens.css')
            ? filemtime(get_template_directory() . '/assets/css/tokens.css')
            : $theme_version
    );

    wp_register_script(
        'sb-contacts-page-view',
        get_template_directory_uri() . '/blocks/contacts-page/view.js',
        [],
        file_exists(get_template_directory() . '/blocks/contacts-page/view.js')
            ? filemtime(get_template_directory() . '/blocks/contacts-page/view.js')
            : $theme_version,
            true
    );

    register_block_type(get_template_directory() . '/blocks/contacts-page');
    register_block_type(get_template_directory() . '/blocks/contact-item');
    register_block_type(get_template_directory() . '/blocks/address-item');
    register_block_type(get_template_directory() . '/blocks/hours-item');
    register_block_type(get_template_directory() . '/blocks/info-item');

    register_block_type(get_template_directory() . '/blocks/tariffs-page');
register_block_type(get_template_directory() . '/blocks/tariff-group');
register_block_type(get_template_directory() . '/blocks/tariff-link-item');

register_block_type(get_template_directory() . '/blocks/currency-control-page');
register_block_type(get_template_directory() . '/blocks/currency-point-group');
register_block_type(get_template_directory() . '/blocks/currency-note');

register_block_type(get_template_directory() . '/blocks/legal-entities-page');
register_block_type(get_template_directory() . '/blocks/legal-service-card');

register_block_type(get_template_directory() . '/blocks/client-bank-page');
register_block_type(get_template_directory() . '/blocks/client-bank-feature-group');
register_block_type(get_template_directory() . '/blocks/client-bank-note');

// common
register_block_type(get_template_directory() . '/blocks/page-hero-v4');
register_block_type(get_template_directory() . '/blocks/page-shell-stack');
register_block_type(get_template_directory() . '/blocks/access-card');
register_block_type(get_template_directory() . '/blocks/checklist-group');
register_block_type(get_template_directory() . '/blocks/text-note');

register_block_type(get_template_directory() . '/blocks/docs-tabs-board');
register_block_type(get_template_directory() . '/blocks/page-hero-split');

}
add_action('init', 'sb_register_contacts_blocks');