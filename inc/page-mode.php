<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Какие режимы разрешены.
 */
function sb_alpha_allowed_page_modes(): array
{
    return [
        'slots'           => 'Slots: страница читает slot-блоки',
        'template_only'   => 'Template only: принять контент, но не использовать',
        'legacy_delegate' => 'Legacy delegate: временно отдать старому слою',
    ];
}

/**
 * Санитизация режима.
 */
function sb_alpha_sanitize_page_mode($value): string
{
    $value = is_string($value) ? trim($value) : '';
    $allowed = array_keys(sb_alpha_allowed_page_modes());

    return in_array($value, $allowed, true) ? $value : 'legacy_delegate';
}

/**
 * Регистрируем meta key для page.
 */
add_action('init', 'sb_alpha_register_page_mode_meta');

function sb_alpha_register_page_mode_meta(): void
{
    register_post_meta('page', '_sb_page_mode', [
        'single' => true,
        'type'   => 'string',
        'default' => 'legacy_delegate',
        'sanitize_callback' => 'sb_alpha_sanitize_page_mode',
        'show_in_rest' => false,
    ]);
}

/**
 * Добавляем meta box только на страницы.
 */
add_action('add_meta_boxes_page', 'sb_alpha_add_page_mode_meta_box');

function sb_alpha_add_page_mode_meta_box(WP_Post $post): void
{
    add_meta_box(
        'sb-alpha-page-mode',
        'Режим страницы',
        'sb_alpha_render_page_mode_meta_box',
        'page',
        'side',
        'high'
    );
}

/**
 * Рисуем select.
 */
function sb_alpha_render_page_mode_meta_box(WP_Post $post): void
{
    wp_nonce_field('sb_alpha_save_page_mode', 'sb_alpha_page_mode_nonce');

    $current = get_post_meta($post->ID, '_sb_page_mode', true);
    $current = $current ?: 'legacy_delegate';
    $options = sb_alpha_allowed_page_modes();

    echo '<p><label for="sb-alpha-page-mode-field"><strong>Кто владеет страницей сейчас</strong></label></p>';
    echo '<select id="sb-alpha-page-mode-field" name="sb_alpha_page_mode" style="width:100%;">';

    foreach ($options as $value => $label) {
        printf(
            '<option value="%s"%s>%s</option>',
            esc_attr($value),
            selected($current, $value, false),
            esc_html($label)
        );
    }

    echo '</select>';
    echo '<p style="margin-top:8px;color:#666;font-size:12px;">';
    echo 'slots = использовать slot-блоки; ';
    echo 'template_only = хранить контент, но на фронте показывать fallback шаблона; ';
    echo 'legacy_delegate = временно отдать legacy-слою.';
    echo '</p>';
}

/**
 * Сохраняем значение при сохранении страницы.
 */
add_action('save_post_page', 'sb_alpha_save_page_mode_meta', 10, 3);

function sb_alpha_save_page_mode_meta(int $post_id, WP_Post $post, bool $update): void
{
    if (!isset($_POST['sb_alpha_page_mode_nonce'])) {
        return;
    }

    if (!wp_verify_nonce($_POST['sb_alpha_page_mode_nonce'], 'sb_alpha_save_page_mode')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $value = $_POST['sb_alpha_page_mode'] ?? 'legacy_delegate';
    $value = sb_alpha_sanitize_page_mode($value);

    update_post_meta($post_id, '_sb_page_mode', $value);
}

/**
 * Чтение режима.
 */
function sb_alpha_get_page_mode($page = null): string
{
    if ($page instanceof WP_Post) {
        $post = $page;
    } elseif (is_numeric($page)) {
        $post = get_post((int) $page);
    } else {
        $post = get_queried_object();
    }

    if (!$post instanceof WP_Post || $post->post_type !== 'page') {
        return 'legacy_delegate';
    }

    $mode = get_post_meta($post->ID, '_sb_page_mode', true);

    return sb_alpha_sanitize_page_mode($mode ?: 'legacy_delegate');
}

function sb_alpha_page_uses_slots($page = null): bool
{
    return sb_alpha_get_page_mode($page) === 'slots';
}

function sb_alpha_page_is_template_only($page = null): bool
{
    return sb_alpha_get_page_mode($page) === 'template_only';
}

function sb_alpha_page_is_legacy_delegate($page = null): bool
{
    return sb_alpha_get_page_mode($page) === 'legacy_delegate';
}