<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('sb_alpha_route_page_has_migrated_content')) {
    function sb_alpha_route_page_has_migrated_content(?WP_Post $post = null): bool
    {
        $post = $post instanceof WP_Post ? $post : get_post();
        if (!$post instanceof WP_Post) {
            return false;
        }

        return trim((string) $post->post_content) !== '';
    }
}

if (!function_exists('sb_alpha_route_render_editor_content_main')) {
    function sb_alpha_route_render_editor_content_main(): void
    {
        get_header();
        echo '<main id="main">';
        while (have_posts()) {
            the_post();
            the_content();
        }
        echo '</main>';
        get_footer();
    }
}

if (!function_exists('sb_alpha_get_tariff_route_pages')) {
    function sb_alpha_get_tariff_route_pages(): array
    {
        return [
//             'tariffs' => [
//                 'page_slug' => 'tarify-banka-html',
//                 'title' => 'Тарифы банка',
//                 'kicker' => 'Тарифы',
//                 'lead' => 'Страница объединяет основные тарифные направления банка и дочерние тарифные маршруты.',
//                 'documents' => sb_alpha_get_tariffs_download(),
//                 'view_links' => sb_alpha_get_tariffs_view(),
//             ],
            'tariffs_rub' => [
                'page_slug' => 'tarify_rf',
                'title' => 'Тарифы по операциям в валюте РФ',
                'kicker' => 'Тарифы',
                'lead' => 'Тарифы банковских услуг по операциям в валюте РФ.',
                'pdf_title' => 'Тарифы по операциям в валюте РФ',
                'pdf_url' => 'https://slavbank.ru/wp-content/uploads/standard-osobiy-s-01012026.pdf',
                'pdf_note' => 'Если PDF не отображается, используйте кнопку «Открыть».',
                'documents' => [
                    [
                        'kind' => 'PDF',
                        'title' => 'Тарифы по операциям в валюте РФ',
                        'url' => 'https://slavbank.ru/wp-content/uploads/standard-osobiy-s-01012026.pdf',
                    ],
                ],
            ],
            'tariffs-foreign-currency' => [
                'page_slug' => 'tarify_valuta',
                'title' => 'Тарифы по операциям в иностранной валюте',
                'kicker' => 'Тарифы',
                'lead' => 'Тарифы банковских услуг по обслуживанию операций в иностранной валюте.',
                'pdf_title' => 'Тарифы по операциям в иностранной валюте',
                'pdf_url' => 'https://slavbank.ru/wp-content/uploads/tarify-v-in-valyute-s-01122025.pdf',
                'pdf_note' => 'Если PDF не отображается, используйте кнопку «Открыть».',
                'documents' => [
                    [
                        'kind' => 'PDF',
                        'title' => 'Тарифы по операциям в иностранной валюте',
                        'url' => 'https://slavbank.ru/wp-content/uploads/tarify-v-in-valyute-s-01122025.pdf',
                    ],
                ],
            ],
            'tariffs_slavny' => [
                'page_slug' => 'tarif_slavny',
                'title' => 'Тарифы «Славный»',
                'kicker' => 'Тарифы',
                'lead' => 'Тарифы по операциям в рублях и иностранной валюте «Славный».',
                'pdf_title' => 'Тарифы «Славный»',
                'pdf_url' => 'https://slavbank.ru/wp-content/uploads/tp-slavny.pdf',
                'pdf_note' => 'Если PDF не отображается, используйте кнопку «Открыть».',
                'documents' => [
                    [
                        'kind' => 'PDF',
                        'title' => 'Тарифы по операциям в рублях и иностранной валюте «Славный»',
                        'url' => 'https://slavbank.ru/wp-content/uploads/tp-slavny.pdf',
                    ],
                ],
            ],
            'tariff_privetstvenny' => [
                'page_slug' => 'tarif_privetstvenny',
                'title' => 'Тарифы «Приветственный»',
                'kicker' => 'Тарифы',
                'lead' => 'Тарифы по операциям в рублях и иностранной валюте «Приветственный».',
                'pdf_title' => 'Тарифы «Приветственный»',
                'pdf_url' => 'https://slavbank.ru/wp-content/uploads/tarif-privetstvenny.pdf',
                'pdf_note' => 'Если PDF не отображается, используйте кнопку «Открыть».',
                'documents' => [
                    [
                        'kind' => 'PDF',
                        'title' => 'Тарифы по операциям в рублях и иностранной валюте «Приветственный»',
                        'url' => 'https://slavbank.ru/wp-content/uploads/tarif-privetstvenny.pdf',
                    ],
                ],
            ],
            'tariff-depositny' => [
                'page_slug' => 'tarif_depositny',
                'title' => 'Тарифы «Депозитный»',
                'kicker' => 'Тарифы',
                'lead' => 'Тарифы по операциям в рублях и иностранной валюте «Депозитный».',
                'pdf_title' => 'Тарифы «Депозитный»',
                'pdf_url' => 'https://slavbank.ru/wp-content/uploads/tarif-depositny.pdf',
                'pdf_note' => 'Если PDF не отображается, используйте кнопку «Открыть».',
                'documents' => [
                    [
                        'kind' => 'PDF',
                        'title' => 'Тарифы по операциям в рублях и иностранной валюте «Депозитный»',
                        'url' => 'https://slavbank.ru/wp-content/uploads/tarif-depositny.pdf',
                    ],
                ],
            ],
        ];
    }
}

if (!function_exists('sb_alpha_get_tariff_route_page')) {
    function sb_alpha_get_tariff_route_page(string $key): ?array
    {
        $pages = sb_alpha_get_tariff_route_pages();
        return $pages[$key] ?? null;
    }
}

if (!function_exists('sb_alpha_get_tariff_route_pill_links')) {
    function sb_alpha_get_tariff_route_pill_links(string $current_key = ''): array
    {
        return [
//             ['label' => 'Тарифы банка', 'url' => sb_alpha_url('tariffs'), 'active' => $current_key === 'tariffs'],
            ['label' => 'Валюта РФ', 'url' => sb_alpha_url('tariffs_rub'), 'active' => $current_key === 'tariffs_rub'],
            ['label' => 'Иностранная валюта', 'url' => sb_alpha_url('tariffs-foreign-currency'), 'active' => $current_key === 'tariffs-foreign-currency'],
            ['label' => '«Славный»', 'url' => sb_alpha_url('tariffs_slavny'), 'active' => $current_key === 'tariffs_slavny'],
            ['label' => '«Приветственный»', 'url' => sb_alpha_url('tariff_privetstvenny'), 'active' => $current_key === 'tariff_privetstvenny'],
            ['label' => '«Депозитный»', 'url' => sb_alpha_url('tariff-depositny'), 'active' => $current_key === 'tariff-depositny'],
        ];
    }
}
