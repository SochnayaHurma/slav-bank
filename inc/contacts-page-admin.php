<?php

if (!defined('ABSPATH')) {
    exit;
}

function sb_contacts_is_editable_page(int $post_id): bool
{
    if ($post_id <= 0) {
        return false;
    }

    $slug = (string) get_post_field('post_name', $post_id);
    if ($slug === 'kontakty') {
        return true;
    }

    $template = (string) get_page_template_slug($post_id);

    return $template === 'page-kontakty.php';
}

function sb_contacts_add_meta_box(): void
{
    add_meta_box(
        'sb_contacts_page_editor',
        'Контакты — React редактор',
        'sb_contacts_render_meta_box',
        'page',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes_page', 'sb_contacts_add_meta_box');

function sb_contacts_render_meta_box(WP_Post $post): void
{
    if (!sb_contacts_is_editable_page((int) $post->ID)) {
        echo '<p>Этот редактор активен только для страницы контактов.</p>';
        return;
    }

    $payload = sb_contacts_get_editor_payload((int) $post->ID);

    wp_nonce_field('sb_contacts_save_meta', 'sb_contacts_meta_nonce');

    echo '<input type="hidden" id="sb_contacts_page_payload" name="sb_contacts_page_payload" value="' .
        esc_attr(wp_json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)) .
        '">';

    echo '<div id="sb-contacts-admin-root"></div>';

    echo '<p class="description" style="margin-top:12px;">'
        . 'Правая колонка не редактируется здесь: она продолжает брать курсы, публикации, разделы и рубрики из текущей темы.'
        . '</p>';
}

function sb_contacts_save_meta(int $post_id, WP_Post $post, bool $update): void
{
    unset($update);

    if (!isset($_POST['sb_contacts_meta_nonce'])) {
        return;
    }

    if (!wp_verify_nonce((string) $_POST['sb_contacts_meta_nonce'], 'sb_contacts_save_meta')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if ($post->post_type !== 'page') {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (!sb_contacts_is_editable_page($post_id)) {
        return;
    }

    if (!isset($_POST['sb_contacts_page_payload'])) {
        return;
    }

    $raw = wp_unslash((string) $_POST['sb_contacts_page_payload']);
    $decoded = json_decode($raw, true);

    if (!is_array($decoded)) {
        return;
    }

    update_post_meta(
        $post_id,
        SB_CONTACTS_PAGE_META_KEY,
        sb_contacts_normalize_payload($decoded)
    );
}
add_action('save_post_page', 'sb_contacts_save_meta', 10, 3);

function sb_contacts_admin_enqueue_assets(string $hook): void
{
    if ($hook !== 'post.php' && $hook !== 'post-new.php') {
        return;
    }

    $screen = get_current_screen();
    if (!$screen || $screen->post_type !== 'page') {
        return;
    }

    $post_id = isset($_GET['post']) ? absint($_GET['post']) : 0;
    if ($post_id > 0 && !sb_contacts_is_editable_page($post_id)) {
        return;
    }

    $version = (string) (wp_get_theme()->get('Version') ?: '0.5.0');
    $data = $post_id > 0 ? sb_contacts_get_editor_payload($post_id) : sb_contacts_page_defaults();

    wp_enqueue_style(
        'sb-contacts-page-admin',
        get_template_directory_uri() . '/assets/css/contacts-page-admin.css',
        [],
        $version
    );

    wp_enqueue_script(
        'sb-contacts-page-admin',
        get_template_directory_uri() . '/assets/js/contacts-page.admin.js',
        [],
        $version,
        true
    );

    wp_add_inline_script(
        'sb-contacts-page-admin',
        'window.SB_CONTACTS_ADMIN = ' . wp_json_encode(
            [
                'rootId' => 'sb-contacts-admin-root',
                'fieldId' => 'sb_contacts_page_payload',
                'data' => $data,
            ],
            JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
        ) . ';',
        'before'
    );
}
add_action('admin_enqueue_scripts', 'sb_contacts_admin_enqueue_assets');