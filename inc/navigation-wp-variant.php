<?php
if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('sb_alpha_header_menu_location')) {
    function sb_alpha_header_menu_location(): string
    {
        return 'primary_header_menu';
    }
}

add_action('after_setup_theme', 'sb_alpha_register_header_menu_location', 20);
function sb_alpha_register_header_menu_location(): void
{
    register_nav_menus([
        sb_alpha_header_menu_location() => 'Primary Header Menu',
    ]);
}

if (!function_exists('sb_alpha_header_menu_fallback_items')) {
    function sb_alpha_header_menu_fallback_items(): array
    {
        return [
            ['label' => 'Юридическим лицам', 'url' => sb_alpha_url('legal-entities')],
            ['label' => 'Валютный контроль', 'url' => sb_alpha_url('currency-control')],
            ['label' => 'Клиент-Банк', 'url' => sb_alpha_url('client-bank-online')],
            ['label' => 'Тарифы', 'url' => sb_alpha_url('tariffs')],
            ['label' => 'Контакты', 'url' => sb_alpha_url('contacts')],
        ];
    }
}

if (!function_exists('sb_alpha_render_header_menu_fallback_list')) {
    function sb_alpha_render_header_menu_fallback_list(string $context = 'desktop'): string
    {
        $items = sb_alpha_header_menu_fallback_items();
        $classes = 'v3-menu-list v3-menu-list--' . sanitize_html_class($context);
        $markup = '<ul class="' . esc_attr($classes) . '">';

        foreach ($items as $item) {
            $label = esc_html((string) ($item['label'] ?? ''));
            $url = esc_url((string) ($item['url'] ?? home_url('/')));
            $markup .= '<li class="menu-item"><a href="' . $url . '">' . $label . '</a></li>';
        }

        $markup .= '</ul>';

        return $markup;
    }
}

if (!function_exists('sb_alpha_render_header_menu')) {
    function sb_alpha_render_header_menu(string $context = 'desktop'): string
    {
        if (has_nav_menu(sb_alpha_header_menu_location())) {
            $markup = wp_nav_menu([
                'theme_location' => sb_alpha_header_menu_location(),
                'container'      => false,
                'echo'           => false,
                'depth'          => 1,
                'fallback_cb'    => false,
                'menu_class'     => 'v3-menu-list v3-menu-list--' . sanitize_html_class($context),
            ]);

            if (is_string($markup) && trim($markup) !== '') {
                return $markup;
            }
        }

        return sb_alpha_render_header_menu_fallback_list($context);
    }
}

if (!function_exists('sb_alpha_header_variant_url')) {
    function sb_alpha_header_variant_url(string $variant = ''): string
    {
        $request_uri = isset($_SERVER['REQUEST_URI']) ? (string) wp_unslash($_SERVER['REQUEST_URI']) : '/';
        $base_url = home_url($request_uri);

        if ($variant === '') {
            return remove_query_arg('menu_variant', $base_url);
        }

        return add_query_arg('menu_variant', sanitize_key($variant), $base_url);
    }
}
