<?php
if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('sb_alpha_reporting_migration_sections')) {
    function sb_alpha_reporting_migration_sections(): array
    {
        return [
            [
                'year' => '2024',
                'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 2024 год',
                'items' => [
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2024 г.',
                        'meta' => '(опубликовано 16.05.2024г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/otchet_publ-1-24-1.pdf',
                    ],
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2024 г.',
                        'meta' => '(опубликовано 09.08.2024г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/na-sajt-otchet-2-2024-publ.pdf',
                    ],
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2024 г.',
                        'meta' => '(опубликовано 08.11.2024г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/otchet-publ-9-2024.pdf',
                    ],
                ],
            ],
            [
                'year' => '2023',
                'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 2023 год',
                'items' => [
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2023 г.',
                        'meta' => '(опубликовано 15.05.2023г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/otchet-i-2023-for-publ.pdf',
                    ],
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2023 г.',
                        'meta' => '(опубликовано 02.08.2023г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/otchet-6-2023-publ.pdf',
                    ],
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2023 г.',
                        'meta' => '(опубликовано 07.11.2023г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/publ-otchet-9-2023.pdf',
                    ],
                ],
            ],
            [
                'year' => '2022',
                'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 2022 год',
                'items' => [
                    [
                        'title' => 'Показатели на 01.01.2022 г.',
                        'meta' => 'дата размещения 18.01.2022г.',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pocaz_01012022.pdf',
                    ],
                    [
                        'title' => 'Показатели на 01.02.2022 г.',
                        'meta' => 'дата размещения 09.02.2022г.',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pocaz_01022022.pdf',
                    ],
                ],
            ],
            [
                'year' => '2021',
                'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 2021 год',
                'items' => [
                    [
                        'title' => 'Предварительные показатели на 01.01.2021 г.',
                        'meta' => 'дата размещения 18.01.2021',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pr_pokaz_01012021.xls',
                    ],
                    [
                        'title' => 'Показатели на 01.02.2021 г.',
                        'meta' => 'дата размещения 17.02.2021',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01022021.xls',
                    ],
                    [
                        'title' => 'Показатели на 01.03.2021 г.',
                        'meta' => 'дата размещения 10.03.2021',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01032021.xls',
                    ],
                    [
                        'title' => 'Показатели на 01.04.2021 г.',
                        'meta' => 'дата размещения 08.04.2021г.',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pocaz_01042021.xls',
                    ],
                    [
                        'title' => 'Показатели на 01.05.2021 г.',
                        'meta' => 'дата размещения 12.05.2021г.',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pocaz_01052021.xls',
                    ],
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2021 г.',
                        'meta' => '(опубликовано 12.05.2021г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/otchet-1-2021.pdf',
                    ],
                    [
                        'title' => 'Показатели на 01.06.2021 г.',
                        'meta' => 'дата размещения 07.06.2021г.',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pocaz_01062021.xls',
                    ],
                    [
                        'title' => 'Показатели на 01.07.2021 г.',
                        'meta' => 'дата размещения 08.07.2021г.',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokazateli-na-1.07.2021-1.pdf',
                    ],
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2021 г.',
                        'meta' => '(опубликовано 30.07.2021г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/otchet-2-2021.pdf',
                    ],
                    [
                        'title' => 'Показатели на 01.08.2021 г.',
                        'meta' => 'дата размещения 10.08.2021г.',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pocaz_01082021.pdf',
                    ],
                    [
                        'title' => 'Показатели на 01.09.2021 г.',
                        'meta' => 'дата размещения 08.09.2021г.',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01092021.pdf',
                    ],
                    [
                        'title' => 'Показатели на 01.10.2021 г.',
                        'meta' => 'дата размещения 12.10.2021г.',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01102021.pdf',
                    ],
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2021 г.',
                        'meta' => '(опубликовано 10.11.2021г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/otchet-3-2021.pdf',
                    ],
                    [
                        'title' => 'Показатели на 01.11.2021 г.',
                        'meta' => 'дата размещения 15.11.2021г.',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01112021.pdf',
                    ],
                    [
                        'title' => 'Показатели на 01.12.2021 г.',
                        'meta' => 'дата размещения 09.12.2021г.',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01122021.pdf',
                    ],
                ],
            ],
            [
                'year' => '2020',
                'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 2020 год',
                'items' => [
                    [
                        'title' => 'Предварительные показатели на 01.01.2020г.',
                        'meta' => 'дата размещения 15.01.2020г.',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pr_pokaz_01012020.xls',
                    ],
                    [
                        'title' => 'Показатели на 01.02.2020 г.',
                        'meta' => 'дата размещения 14.02.2020',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01022020.xls',
                    ],
                    [
                        'title' => 'Показатели на 01.03.2020 г.',
                        'meta' => 'дата размещения 10.03.2020',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01032020.xls',
                    ],
                    [
                        'title' => 'Показатели на 01.04.2020 г.',
                        'meta' => 'дата размещения 13.04.2020',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01042020.xls',
                    ],
                    [
                        'title' => 'Показатели на 01.05.2020 г.',
                        'meta' => 'дата размещения 13.05.2020',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01052020.xls',
                    ],
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2020 года',
                        'meta' => '(опубликовано 18.05.2020г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/otchet04-2020.pdf',
                    ],
                    [
                        'title' => 'Показатели на 01.07.2020 г.',
                        'meta' => 'дата размещения 15.07.2020',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01072020.xls',
                    ],
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2020 года',
                        'meta' => '(опубликовано 29.07.2020г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/1h-2020.pdf',
                    ],
                    [
                        'title' => 'Показатели на 01.08.2020 г.',
                        'meta' => 'дата размещения 26.08.2020',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01082020.xls',
                    ],
                    [
                        'title' => 'Показатели на 01.09.2020 г.',
                        'meta' => 'дата размещения 08.09.2020',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01092020.xlss',
                    ],
                    [
                        'title' => 'Показатели на 01.10.2020 г.',
                        'meta' => 'дата размещения 15.10.2020',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01102020.xls',
                    ],
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2020 г.',
                        'meta' => '(опубликовано 28.10.2020г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/pbo9m2020.pdf',
                    ],
                    [
                        'title' => 'Показатели на 01.11.2020 г.',
                        'meta' => 'дата размещения 13.11.2020',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01112020.xls',
                    ],
                    [
                        'title' => 'Показатели на 01.12.2020 г.',
                        'meta' => 'дата размещения 14.12.2020',
                        'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01122020.xls',
                    ],
                ],
            ],
        ];
    }
}

if (!function_exists('sb_alpha_reporting_migration_kind')) {
    function sb_alpha_reporting_migration_kind(string $url): string
    {
        if (function_exists('sb_alpha_reporting_kind_from_url')) {
            return sb_alpha_reporting_kind_from_url($url);
        }

        $path = (string) parse_url($url, PHP_URL_PATH);
        $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));

        return match ($ext) {
            'pdf' => 'PDF',
            'xls', 'xlsx', 'xlss' => 'XLS',
            'doc', 'docx' => 'DOC',
            'zip' => 'ZIP',
            default => 'FILE',
        };
    }
}

if (!function_exists('sb_alpha_reporting_migration_render_annual_shelf')) {
    function sb_alpha_reporting_migration_render_annual_shelf(): string
    {
        $items = function_exists('sb_alpha_get_reporting_annual_reports')
            ? sb_alpha_get_reporting_annual_reports()
            : [];

        $cards = [];

        foreach ($items as $item) {
            $cards[] = function_exists('sb_alpha_reporting_doc_card_markup')
                ? sb_alpha_reporting_doc_card_markup(
                    (string) ($item['title'] ?? ''),
                    (string) ($item['footer'] ?? ''),
                    (string) ($item['url'] ?? '#'),
                    'Открыть документ',
                    sb_alpha_reporting_migration_kind((string) ($item['url'] ?? '#'))
                )
                : '';
        }

        $cards_markup = implode("\n\n", array_filter($cards));

        return <<<HTML
<!-- wp:group {"className":"sbp-block sbp-block--annual section-card sbp-section-card","lock":{"move":true,"remove":true}} -->
<div class="wp-block-group sbp-block sbp-block--annual section-card sbp-section-card"><!-- wp:paragraph {"className":"kicker"} -->
<p class="kicker">Годовая отчетность</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2>Документы</h2>
<!-- /wp:heading -->

<!-- wp:group {"className":"sbp-doc-shelf"} -->
<div class="wp-block-group sbp-doc-shelf">{$cards_markup}</div>
<!-- /wp:group --></div>
<!-- /wp:group -->
HTML;
    }
}

if (!function_exists('sb_alpha_reporting_migration_render_year_pattern')) {
    function sb_alpha_reporting_migration_render_year_pattern(array $section): string
    {
        $title = esc_html((string) ($section['title'] ?? ''));
        $rows = [];

        foreach ((array) ($section['items'] ?? []) as $item) {
            if (!function_exists('sb_alpha_reporting_link_row_markup')) {
                continue;
            }

            $rows[] = sb_alpha_reporting_link_row_markup(
                (string) ($item['title'] ?? ''),
                (string) ($item['meta'] ?? ''),
                (string) ($item['url'] ?? '#'),
                sb_alpha_reporting_migration_kind((string) ($item['url'] ?? '#'))
            );
        }

        $rows_markup = implode("\n\n", $rows);

        return <<<HTML
<!-- wp:group {"className":"sbp-block sbp-block--year section-card sbp-section-card","lock":{"move":true,"remove":true}} -->
<div class="wp-block-group sbp-block sbp-block--year section-card sbp-section-card"><!-- wp:paragraph {"className":"kicker"} -->
<p class="kicker">Промежуточная отчетность</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2>Показатели деятельности банка</h2>
<!-- /wp:heading -->

<!-- wp:details {"summary":"{$title}","className":"sbp-accordion"} -->
<details class="wp-block-details sbp-accordion"><summary>{$title}</summary><!-- wp:group {"className":"sbp-link-list"} -->
<div class="wp-block-group sbp-link-list">{$rows_markup}</div>
<!-- /wp:group --></details>
<!-- /wp:details --></div>
<!-- /wp:group -->
HTML;
    }
}

if (!function_exists('sb_alpha_reporting_migration_full_page_pattern')) {
    function sb_alpha_reporting_migration_full_page_pattern(): string
    {
        $parts = [];

        if (function_exists('sb_alpha_reporting_pattern_hero')) {
            $parts[] = sb_alpha_reporting_pattern_hero();
        }

        if (function_exists('sb_alpha_reporting_pattern_summary')) {
            $parts[] = sb_alpha_reporting_pattern_summary();
        }

        $parts[] = sb_alpha_reporting_migration_render_annual_shelf();

        if (function_exists('sb_alpha_reporting_pattern_year_section')) {
            $parts[] = sb_alpha_reporting_pattern_year_section();
        }

        foreach (sb_alpha_reporting_migration_sections() as $section) {
            $parts[] = sb_alpha_reporting_migration_render_year_pattern($section);
        }

        return implode("\n\n", array_filter($parts));
    }
}

add_action('init', 'sb_alpha_register_reporting_migration_patterns');
function sb_alpha_register_reporting_migration_patterns(): void
{
    if (!function_exists('register_block_pattern')) {
        return;
    }

    if (function_exists('register_block_pattern_category') && class_exists('WP_Block_Pattern_Categories_Registry')) {
        $registry = WP_Block_Pattern_Categories_Registry::get_instance();

        if (!$registry->is_registered('sb-alpha')) {
            register_block_pattern_category('sb-alpha', [
                'label' => 'SB Alpha',
            ]);
        }
    }

    $patterns = [
        'sb-alpha/reporting-page-migrated' => [
            'title' => 'SB Alpha / Отчетность — миграция 2025–2020',
            'description' => 'Полный мигрированный вариант страницы отчетности на основе старого содержимого.',
            'content' => sb_alpha_reporting_migration_full_page_pattern(),
        ],
    ];

    foreach (sb_alpha_reporting_migration_sections() as $section) {
        $year = (string) ($section['year'] ?? '');
        if ($year === '') {
            continue;
        }

        $patterns['sb-alpha/reporting-year-' . $year] = [
            'title' => 'SB Alpha / Секция года — Отчетность ' . $year,
            'description' => 'Мигрированная секция промежуточной отчетности за ' . $year . ' год.',
            'content' => sb_alpha_reporting_migration_render_year_pattern($section),
        ];
    }

    if (class_exists('WP_Block_Patterns_Registry')) {
        $registry = WP_Block_Patterns_Registry::get_instance();

        foreach ($patterns as $name => $data) {
            if ($registry->is_registered($name)) {
                continue;
            }

            register_block_pattern($name, [
                'title' => $data['title'],
                'description' => $data['description'],
                'categories' => ['sb-alpha'],
                'inserter' => true,
                'content' => $data['content'],
            ]);
        }

        return;
    }

    foreach ($patterns as $name => $data) {
        register_block_pattern($name, [
            'title' => $data['title'],
            'description' => $data['description'],
            'categories' => ['sb-alpha'],
            'inserter' => true,
            'content' => $data['content'],
        ]);
    }
}
