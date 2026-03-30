<?php
if (!defined('ABSPATH')) {
    exit;
}

function sb_python_wave3_partial_overrides(): array
{
    return [
        'instruction' => 'instruction',
        'faq' => 'faq',
        'ecp-regeneration' => 'ecp-regeneration',
        'security' => 'security',
        'tariffs_rub' => 'tariffs-rub',
        'tariffs_slavny' => 'tariffs-slavny',
        'tariff_privetstvenny' => 'tariff-privetstvenny',
        'tariff-depositny' => 'tariff-depositny',
        'tariffs-foreign-currency' => 'tariffs-foreign-currency',
    ];
}

function sb_python_wave3_partial_for_route(string $route_key): string
{
    $map = sb_python_wave3_partial_overrides();

    return isset($map[$route_key]) ? (string) $map[$route_key] : '';
}

function sb_python_combined_partial_for_route(string $route_key): string
{
    $wave3 = sb_python_wave3_partial_for_route($route_key);
    if ($wave3 !== '') {
        return $wave3;
    }

    return function_exists('sb_python_wave2_partial_for_route')
        ? sb_python_wave2_partial_for_route($route_key)
        : '';
}

function sb_python_combined_is_local_override(string $route_key): bool
{
    return sb_python_combined_partial_for_route($route_key) !== '';
}

remove_action('template_redirect', 'sb_python_wave2_template_redirect', 1);
add_action('template_redirect', 'sb_python_wave3_template_redirect', 1);

function sb_python_wave3_template_redirect(): void
{
    if (is_admin() || wp_doing_ajax() || wp_doing_cron()) {
        return;
    }

    $route = sb_python_current_route();
    if (!is_array($route)) {
        return;
    }

    $route_key = (string) ($route['key'] ?? '');
    if ($route_key !== '' && sb_python_combined_is_local_override($route_key)) {
        return;
    }

    if (($route['mode'] ?? '') === 'external_redirect' && !empty($route['external_url'])) {
        wp_redirect((string) $route['external_url'], 302, 'Slavyanbank Python Truth');
        exit;
    }
}

remove_filter('template_include', 'sb_python_wave2_template_include', 30);
add_filter('template_include', 'sb_python_wave3_template_include', 30);

function sb_python_wave3_template_include(string $template): string
{
    $route_key = sb_python_current_route_key();
    if ($route_key !== '' && sb_python_combined_is_local_override($route_key)) {
        $candidate = get_theme_file_path('page-python-route-override-wave3.php');
        if (is_file($candidate)) {
            return $candidate;
        }
    }

    return sb_python_template_include($template);
}
