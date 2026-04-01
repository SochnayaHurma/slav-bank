<?php
if (!defined('ABSPATH')) {
    exit;
}

function sb_alpha_get_home_currency_widget_defaults(): array
{
    return [
        'kicker'        => 'Курсы валют',
        'title'         => 'Актуальные курсы',
        'note'          => 'Информация носит справочный характер.',
        'updated_label' => 'Обновлено',
        'updated_value' => 'сегодня в 10:00',
        'button_text'   => 'Все курсы',
        'button_url'    => '/kursy-valyut/',
        'rates'         => [
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
        'kicker'        => sanitize_text_field($input['kicker'] ?? $defaults['kicker']),
        'title'         => sanitize_text_field($input['title'] ?? $defaults['title']),
        'note'          => sanitize_text_field($input['note'] ?? $defaults['note']),
        'updated_label' => sanitize_text_field($input['updated_label'] ?? $defaults['updated_label']),
        'updated_value' => sanitize_text_field($input['updated_value'] ?? $defaults['updated_value']),
        'button_text'   => sanitize_text_field($input['button_text'] ?? $defaults['button_text']),
        'button_url'    => esc_url_raw($input['button_url'] ?? $defaults['button_url']),
        'rates'         => [],
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

    return $data;
}

function sb_alpha_maybe_seed_home_currency_widget(): void
{
    if (get_option('sb_home_currency_widget', null) === null) {
        add_option('sb_home_currency_widget', sb_alpha_get_home_currency_widget_defaults());
    }
}