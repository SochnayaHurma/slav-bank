<?php

function sb_alpha_route_aliases(): array
{
    return [
        'vakansii-html'          => 'vacancies',
        'vakansii.html'          => 'vacancies',
        'vakansii'               => 'vacancies',


        'otchetnost'          => 'reporting',
        'otchetnost-html'     => 'reporting',

        'rekvizity-banka'     => 'requisites_bank',
        'rekvizity-banka-html'=> 'requisites_bank',

        'tarify-banka'        => 'tariffs',
        'tarify-banka-html'   => 'tariffs',

        'podderzhka'          => 'support',
        'podderzhka-html'     => 'support',

        'kontakty'            => 'contacts',
        'kontakty-html'       => 'contacts',
    ];
}

function sb_alpha_request_path(): string
{
    $uri  = (string) ($_SERVER['REQUEST_URI'] ?? '/');
    $path = (string) parse_url($uri, PHP_URL_PATH);

    return trim($path, '/');
}

function sb_alpha_redirect_route_aliases(): void
{
    if (is_admin() || wp_doing_ajax() || wp_doing_cron()) {
        return;
    }

    $requested = sb_alpha_request_path();
    if ($requested === '') {
        return;
    }

    $aliases = sb_alpha_route_aliases();
    if (!isset($aliases[$requested])) {
        return;
    }

    $target = sb_alpha_url($aliases[$requested]);
    $targetPath = trim((string) parse_url($target, PHP_URL_PATH), '/');

    if ($targetPath === '' || $targetPath === $requested) {
        return;
    }

    wp_safe_redirect($target, 301, 'Slavyanbank Canonical');
    exit;
}
add_action('template_redirect', 'sb_alpha_redirect_route_aliases', 0);