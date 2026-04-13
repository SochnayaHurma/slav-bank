<?php

if (!defined('ABSPATH')) {
    exit;
}

function sb_contacts_map_url(string $address, string $provider = 'yandex'): string
{
    $address = trim($address);
    if ($address === '') {
        return '';
    }

    $query = rawurlencode($address);

    if ($provider === 'google') {
        return 'https://www.google.com/maps/search/?api=1&query=' . $query;
    }

    return 'https://yandex.ru/maps/?text=' . $query;
}

function sb_contacts_routes(): array
{
    return [
        'home' => home_url('/'),
        'write_to_bank' => function_exists('sb_alpha_url')
            ? sb_alpha_url('write-to-bank') . '#form'
            : home_url('/napisat-v-bank/#form'),
        'support' => function_exists('sb_alpha_url')
            ? sb_alpha_url('support')
            : home_url('/podderzhka/'),
        'contacts' => function_exists('sb_alpha_url')
            ? sb_alpha_url('contacts')
            : home_url('/kontakty/'),
        'news' => function_exists('sb_alpha_url')
            ? sb_alpha_url('novosti')
            : home_url('/novosti/'),
        'info_bank' => function_exists('sb_alpha_url')
            ? sb_alpha_url('info-bank-page')
            : home_url('/informaciya-banka/'),
        'tariffs' => function_exists('sb_alpha_url')
            ? sb_alpha_url('tariffs')
            : home_url('/tarify-banka/'),
        'legal_entities' => function_exists('sb_alpha_url')
            ? sb_alpha_url('legal-entities')
            : home_url('/legal-entities/'),
    ];
}

function sb_contacts_sidebar_defaults(): array
{
    $routes = sb_contacts_routes();

    $currency_widget = function_exists('sb_alpha_get_home_currency_widget_data')
        ? sb_alpha_get_home_currency_widget_data()
        : [
            'title' => 'Курсы обмена валют в кассе банка',
            'date_line' => 'на ' . wp_date('d.m.Y') . ' г.',
            'legend_title' => 'Валюта:',
            'buy_label' => 'покупка',
            'sell_label' => 'продажа',
            'empty_text' => 'Нет валют, отмеченных для показа.',
            'footer_text' => 'АО НКБ "СЛАВЯНБАНК"',
            'rates' => [],
        ];

    $publications = function_exists('sb_alpha_get_recent_publications')
        ? sb_alpha_get_recent_publications(4)
        : [];

    $sections = [
        ['label' => 'ИНФОРМАЦИЯ БАНКА', 'url' => $routes['info_bank']],
        ['label' => 'НОВОСТИ', 'url' => $routes['news']],
        ['label' => 'ТАРИФЫ БАНКА', 'url' => $routes['tariffs']],
        ['label' => 'ЮРИДИЧЕСКИМ ЛИЦАМ', 'url' => $routes['legal_entities']],
        ['label' => 'ПОДДЕРЖКА', 'url' => $routes['support']],
        ['label' => 'НАПИСАТЬ В БАНК', 'url' => $routes['write_to_bank']],
        ['label' => 'КОНТАКТЫ', 'url' => $routes['contacts']],
    ];

    $categories = function_exists('sb_alpha_get_news_category_links')
        ? sb_alpha_get_news_category_links()
        : [];

    if (!is_array($categories)) {
        $categories = [];
    }

    $categories[] = [
        'label' => 'АРХИВ',
        'url' => 'https://slavbank.ru/category/arhiv',
        'external' => true,
    ];

    $categories[] = [
        'label' => 'ДОКУМЕНТЫ ДЛЯ КЛИЕНТОВ',
        'url' => 'https://slavbank.ru/category/dokumenty-dlya-klientov',
        'external' => true,
    ];

    return [
        'currency_widget' => $currency_widget,
        'publications' => $publications,
        'sections' => $sections,
        'categories' => $categories,
    ];
}