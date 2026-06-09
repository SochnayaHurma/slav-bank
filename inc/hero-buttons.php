<?php
if (!defined('ABSPATH')) {
    exit;
}

function sb_alpha_normalize_hero_buttons($buttons, array $defaults = []): array
{
    $source = is_array($buttons) ? $buttons : $defaults;
    $normalized = [];

    foreach ($source as $button) {
        if (!is_array($button)) {
            continue;
        }

        $text = isset($button['text']) ? (string) $button['text'] : '';
        $url = isset($button['url']) ? (string) $button['url'] : '';
        $style = isset($button['style']) && $button['style'] === 'primary' ? 'primary' : 'outline';

        if ($text === '' || $url === '') {
            continue;
        }

        $normalized[] = [
            'text' => $text,
            'url' => $url,
            'style' => $style,
        ];
    }

    return $normalized;
}

function sb_alpha_render_hero_buttons($buttons, array $defaults = []): void
{
    foreach (sb_alpha_normalize_hero_buttons($buttons, $defaults) as $button) {
        ?>
        <a class="btn <?php echo esc_attr($button['style']); ?>" href="<?php echo esc_url($button['url']); ?>"><?php echo esc_html($button['text']); ?></a>
        <?php
    }
}
