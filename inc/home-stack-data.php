<?php
if (!defined('ABSPATH')) {
    exit;
}

function sb_alpha_get_home_currency_widget_default_date(): string
{
    return wp_date('d.m.Y');
}

function sb_alpha_get_home_currency_widget_default_date_line(): string
{
    return 'на ' . sb_alpha_get_home_currency_widget_default_date() . ' г.';
}

function sb_alpha_get_home_currency_widget_defaults(): array
{
    return [
        'title'        => 'Курсы обмена валют в кассе банка',
        'date_line'    => sb_alpha_get_home_currency_widget_default_date_line(),
        'legend_title' => 'Валюта:',
        'buy_label'    => 'покупка',
        'sell_label'   => 'продажа',
        'empty_text'   => 'Нет валют, отмеченных для показа.',
        'footer_text'  => 'АО НКБ "СЛАВЯНБАНК"',
        'rates'        => [
            [
                'code'    => 'USD',
                'buy'     => '77.00',
                'sell'    => '80.00',
                'visible' => 1,
            ],
            [
                'code'    => 'EUR',
                'buy'     => '88.00',
                'sell'    => '92.50',
                'visible' => 1,
            ],
            [
                'code'    => 'CNY',
                'buy'     => '11.00',
                'sell'    => '11.90',
                'visible' => 1,
            ],
        ],
    ];
}

function sb_alpha_sanitize_home_currency_widget($input): array
{
    $defaults = sb_alpha_get_home_currency_widget_defaults();

    if (!is_array($input)) {
        return $defaults;
    }

    $output = [
        'title'        => sanitize_text_field($input['title'] ?? $defaults['title']),
        'date_line'    => sanitize_text_field($input['date_line'] ?? ''),
        'legend_title' => sanitize_text_field($input['legend_title'] ?? $defaults['legend_title']),
        'buy_label'    => sanitize_text_field($input['buy_label'] ?? $defaults['buy_label']),
        'sell_label'   => sanitize_text_field($input['sell_label'] ?? $defaults['sell_label']),
        'empty_text'   => sanitize_text_field($input['empty_text'] ?? $defaults['empty_text']),
        'footer_text'  => sanitize_text_field($input['footer_text'] ?? $defaults['footer_text']),
        'rates'        => [],
    ];

    $rates = $input['rates'] ?? [];
    if (!is_array($rates)) {
        $rates = [];
    }

    foreach ($rates as $rate) {
        if (!is_array($rate)) {
            continue;
        }

        $code = sanitize_text_field($rate['code'] ?? '');
        $buy  = sanitize_text_field($rate['buy'] ?? '');
        $sell = sanitize_text_field($rate['sell'] ?? '');

        if ($code === '' && $buy === '' && $sell === '') {
            continue;
        }

        $output['rates'][] = [
            'code'    => $code,
            'buy'     => $buy,
            'sell'    => $sell,
            'visible' => !empty($rate['visible']) ? 1 : 0,
        ];
    }

    if (empty($output['rates'])) {
        $output['rates'] = $defaults['rates'];
    }

    return $output;
}

function sb_alpha_get_home_currency_widget_data(): array
{
    $defaults = sb_alpha_get_home_currency_widget_defaults();
    $saved = get_option('sb_home_currency_widget', []);

    if (!is_array($saved)) {
        $saved = [];
    }

    $data = wp_parse_args($saved, $defaults);

    $normalized_rates = [];
    if (!empty($data['rates']) && is_array($data['rates'])) {
        foreach ($data['rates'] as $rate) {
            if (!is_array($rate)) {
                continue;
            }

            $normalized_rates[] = [
                'code'    => (string) ($rate['code'] ?? ''),
                'buy'     => (string) ($rate['buy'] ?? ''),
                'sell'    => (string) ($rate['sell'] ?? ''),
                'visible' => array_key_exists('visible', $rate) ? (int) !empty($rate['visible']) : 1,
            ];
        }
    }

    if (empty($normalized_rates)) {
        $normalized_rates = $defaults['rates'];
    }

    $data['rates'] = $normalized_rates;

    if (trim((string) ($data['date_line'] ?? '')) === '') {
        $data['date_line'] = sb_alpha_get_home_currency_widget_default_date_line();
    }

    return $data;
}

function sb_alpha_maybe_seed_home_currency_widget(): void
{
    if (get_option('sb_home_currency_widget', null) === null) {
        add_option('sb_home_currency_widget', sb_alpha_get_home_currency_widget_defaults());
    }
}