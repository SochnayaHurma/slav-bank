<?php
if (!defined('ABSPATH')) {
    exit;
}

add_action('template_redirect', function () {
    if (is_admin()) {
        return;
    }

    if (defined('REST_REQUEST') && REST_REQUEST) {
        return;
    }

    if (wp_doing_ajax()) {
        return;
    }

    $request_uri = $_SERVER['REQUEST_URI'] ?? '/';
    $path = (string) wp_parse_url($request_uri, PHP_URL_PATH);
    $path = '/' . trim($path, '/') . '/';

    $redirects = [
        '/o-banke-slavyanbank-html/info_bank-html.html/' => sb_alpha_wp_page_url(
            'o-banke-slavyanbank-html-info_bank-html',
            home_url('/o-banke-slavyanbank-html-info_bank-html/')
        ),
        '/rekvizity-banka.html/' => sb_alpha_wp_page_url(
            'rekvizity-banka-html',
            home_url('/rekvizity-banka-html/')
        ),
        '/o-banke-slavyanbank-html/organy_upravlenya.html/' => sb_alpha_wp_page_url(
            'organy_upravlenya',
            home_url('/organy_upravlenya/')
        ),
        '/otchetnost.html/' => sb_alpha_wp_page_url(
            'otchetnost-html',
            home_url('/otchetnost-html/')
        ),
        '/o-banke-html/info_bank-html/raskritie-informacii.html/' => sb_alpha_wp_page_url(
            'raskritie-informacii',
            home_url('/raskritie-informacii/')
        ),
        '/informacziya-dlya-notariusov.html/' => sb_alpha_wp_page_url(
            'informacziya-dlya-notariusov',
            home_url('/informacziya-dlya-notariusov/')
        ),
        '/tarify-banka.html/' => sb_alpha_wp_page_url(
            'tarify-banka-html',
            home_url('/tarify-banka-html/')
        ),
        '/tarify-banka-html/tarify_rf.html/' => sb_alpha_wp_page_url(
            'tarify_rf-html',
            home_url('/tarify_rf-html/')
        ),
        '/tarify-banka-html/tarif_slavny.html/' => sb_alpha_wp_page_url(
            'tarif_slavny',
            home_url('/tarif_slavny/')
        ),
        '/tarify-banka-html/tarif_privetstvenny.html/' => sb_alpha_wp_page_url(
            'tarif_privetstvenny',
            home_url('/tarif_privetstvenny/')
        ),
    ];

    if (!isset($redirects[$path])) {
        return;
    }

    $target = $redirects[$path];
    if (!is_string($target) || $target === '') {
        return;
    }

    wp_safe_redirect($target, 301);
    exit;
}, 1);