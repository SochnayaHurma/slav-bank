<?php
if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('sb_alpha_reporting_pattern_urls')) {
    function sb_alpha_reporting_pattern_urls(): array
    {
        return [
            '__HOME_URL__' => esc_url(home_url('/')),
            '__REPORTING_HASH__' => '#reporting-content',
            '__REQUISITES_URL__' => esc_url(function_exists('sb_alpha_url') ? sb_alpha_url('requisites_bank') : home_url('/rekvizity-banka/')),
            '__INFO_URL__' => esc_url(function_exists('sb_alpha_url') ? sb_alpha_url('info-bank-page') : home_url('/informaciya-banka/')),
            '__ANNUAL_2024_URL__' => 'https://slavbank.ru/wp-content/uploads/azo_-2024_nmm_slavyanbank.pdf',
            '__ANNUAL_2023_URL__' => 'https://slavbank.ru/wp-content/uploads/otchet_2023_publ.pdf',
            '__INTERIM_2025_Q1_URL__' => 'https://slavbank.ru/wp-content/uploads/otchet-publ-i-2025.pdf',
            '__INTERIM_2025_H1_URL__' => 'https://slavbank.ru/wp-content/uploads/otchet-publ-ii-2025.pdf',
            '__INTERIM_2025_9M_URL__' => 'https://slavbank.ru/wp-content/uploads/otchet-publ-9-2025.pdf',
        ];
    }
}

if (!function_exists('sb_alpha_reporting_pattern_render')) {
    function sb_alpha_reporting_pattern_render(string $content): string
    {
        return strtr($content, sb_alpha_reporting_pattern_urls());
    }
}

if (!function_exists('sb_alpha_reporting_doc_card_markup')) {
    function sb_alpha_reporting_doc_card_markup(string $title, string $meta, string $url, string $button_label = 'Открыть документ', string $kind = 'PDF'): string
    {
        $title = esc_html($title);
        $meta = esc_html($meta);
        $url = esc_url($url);
        $button_label = esc_html($button_label);
        $kind = esc_html($kind);

        return <<<HTML
<!-- wp:group {"className":"sbp-doc-card"} -->
<div class="wp-block-group sbp-doc-card"><!-- wp:paragraph {"className":"sbp-doc-kind"} -->
<p class="sbp-doc-kind">{$kind}</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"className":"sbp-doc-title"} -->
<h3 class="sbp-doc-title">{$title}</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"sbp-doc-meta"} -->
<p class="sbp-doc-meta">{$meta}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"sbp-doc-action"} -->
<p class="sbp-doc-action"><a class="btn primary" href="{$url}">{$button_label}</a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
HTML;
    }
}

if (!function_exists('sb_alpha_reporting_link_row_markup')) {
    function sb_alpha_reporting_link_row_markup(string $title, string $meta, string $url, string $kind = 'PDF'): string
    {
        $title = esc_html($title);
        $meta = esc_html($meta);
        $url = esc_url($url);
        $kind = esc_html($kind);

        return <<<HTML
<!-- wp:group {"className":"sbp-link-row"} -->
<div class="wp-block-group sbp-link-row"><!-- wp:group {"className":"sbp-link-text"} -->
<div class="wp-block-group sbp-link-text"><!-- wp:paragraph -->
<p><strong><a href="{$url}">{$title}</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"sbp-doc-meta"} -->
<p class="sbp-doc-meta">{$meta}</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:paragraph {"className":"sbp-link-kind"} -->
<p class="sbp-link-kind">{$kind} →</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
HTML;
    }
}

if (!function_exists('sb_alpha_reporting_pattern_hero')) {
    function sb_alpha_reporting_pattern_hero(): string
    {
        return sb_alpha_reporting_pattern_render(<<<'HTML'
<!-- wp:group {"className":"sbp-block sbp-block--hero hero-wrap sbp-reporting-hero","lock":{"move":true,"remove":true}} -->
<div class="wp-block-group sbp-block sbp-block--hero hero-wrap sbp-reporting-hero"><!-- wp:group {"className":"sbp-hero-main"} -->
<div class="wp-block-group sbp-hero-main"><!-- wp:paragraph {"className":"kicker"} -->
<p class="kicker">Информация банка</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1>Отчетность</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Бухгалтерская (финансовая) отчетность раскрывается в ограниченном объёме в соответствии с Решением Совета директоров Банка России от 24 декабря 2024 года.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"sbp-hero-actions"} -->
<p class="sbp-hero-actions"><a class="btn primary" href="__REPORTING_HASH__">Содержание</a> <a class="btn outline" href="__HOME_URL__">На главную</a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"sbp-hero-side"} -->
<div class="wp-block-group sbp-hero-side"><!-- wp:paragraph {"className":"sbp-hero-link"} -->
<p class="sbp-hero-link"><a href="__REQUISITES_URL__">Реквизиты</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"sbp-hero-link"} -->
<p class="sbp-hero-link"><a href="__INFO_URL__">Информация банка</a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
HTML);
    }
}

if (!function_exists('sb_alpha_reporting_pattern_summary')) {
    function sb_alpha_reporting_pattern_summary(): string
    {
        return <<<'HTML'
<!-- wp:group {"anchor":"reporting-content","className":"sbp-block sbp-block--summary section-card section-card--accent sbp-section-card","lock":{"move":true,"remove":true}} -->
<div class="wp-block-group sbp-block sbp-block--summary section-card section-card--accent sbp-section-card" id="reporting-content"><!-- wp:paragraph {"className":"kicker"} -->
<p class="kicker">АО НКБ «СЛАВЯНБАНК»</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2>Отчетность</h2>
<!-- /wp:heading -->

<!-- wp:group {"className":"sbp-section-body"} -->
<div class="wp-block-group sbp-section-body"><!-- wp:paragraph -->
<p><strong>ГОДОВАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Ниже приведены документы по годовой и промежуточной бухгалтерской (финансовой) отчетности банка в едином карточном формате. При необходимости этот блок можно редактировать как обычный текст без изменения внешней композиции страницы.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
HTML;
    }
}

if (!function_exists('sb_alpha_reporting_pattern_section_shell')) {
    function sb_alpha_reporting_pattern_section_shell(): string
    {
        return <<<'HTML'
<!-- wp:group {"className":"sbp-block sbp-block--section section-card sbp-section-card","lock":{"move":true,"remove":true}} -->
<div class="wp-block-group sbp-block sbp-block--section section-card sbp-section-card"><!-- wp:paragraph {"className":"kicker"} -->
<p class="kicker">Раздел</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2>Заголовок раздела</h2>
<!-- /wp:heading -->

<!-- wp:group {"className":"sbp-section-body"} -->
<div class="wp-block-group sbp-section-body"><!-- wp:paragraph -->
<p>Текст или дополнительные элементы раздела.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
HTML;
    }
}

if (!function_exists('sb_alpha_reporting_pattern_doc_card')) {
    function sb_alpha_reporting_pattern_doc_card(): string
    {
        return sb_alpha_reporting_doc_card_markup(
            'Документ отчетности',
            '(метаданные публикации)',
            '#',
            'Открыть документ',
            'PDF'
        );
    }
}

if (!function_exists('sb_alpha_reporting_pattern_link_row')) {
    function sb_alpha_reporting_pattern_link_row(): string
    {
        return sb_alpha_reporting_link_row_markup(
            'Документ внутри годовой секции',
            '(метаданные публикации)',
            '#',
            'PDF'
        );
    }
}

if (!function_exists('sb_alpha_reporting_pattern_annual_shelf')) {
    function sb_alpha_reporting_pattern_annual_shelf(): string
    {
        $cards = [
            sb_alpha_reporting_doc_card_markup(
                'Годовая бухгалтерская (финансовая) отчетность за 2024 год.',
                '(Опубликовано 11.04.2025г. Утверждена на годовом ОСА 10.04.2025г.)',
                '__ANNUAL_2024_URL__',
                'Открыть документ',
                'PDF'
            ),
            sb_alpha_reporting_doc_card_markup(
                'Годовая бухгалтерская (финансовая) отчетность за 2023 год.',
                '(Опубликовано 12.03.2024г. Утверждена на годовом ОСА 02.04.2024г.)',
                '__ANNUAL_2023_URL__',
                'Открыть документ',
                'PDF'
            ),
        ];

        $cards_markup = implode("\n\n", $cards);

        return sb_alpha_reporting_pattern_render(<<<HTML
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
HTML);
    }
}

if (!function_exists('sb_alpha_reporting_pattern_year_section')) {
    function sb_alpha_reporting_pattern_year_section(): string
    {
        $rows = [
            sb_alpha_reporting_link_row_markup(
                'Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2025 г.',
                '(опубликовано 16.05.2025г.)',
                '__INTERIM_2025_Q1_URL__',
                'PDF'
            ),
            sb_alpha_reporting_link_row_markup(
                'Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2025 г.',
                '(опубликовано 07.08.2025г.)',
                '__INTERIM_2025_H1_URL__',
                'PDF'
            ),
            sb_alpha_reporting_link_row_markup(
                'Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2025 г.',
                '(опубликовано 12.11.2025г.)',
                '__INTERIM_2025_9M_URL__',
                'PDF'
            ),
        ];

        $rows_markup = implode("\n\n", $rows);

        return sb_alpha_reporting_pattern_render(<<<HTML
<!-- wp:group {"className":"sbp-block sbp-block--year section-card sbp-section-card","lock":{"move":true,"remove":true}} -->
<div class="wp-block-group sbp-block sbp-block--year section-card sbp-section-card"><!-- wp:paragraph {"className":"kicker"} -->
<p class="kicker">Промежуточная отчетность</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2>Показатели деятельности банка</h2>
<!-- /wp:heading -->

<!-- wp:details {"summary":"Промежуточная бухгалтерская (финансовая) отчетность за 2025 год","className":"sbp-accordion"} -->
<details class="wp-block-details sbp-accordion"><summary>Промежуточная бухгалтерская (финансовая) отчетность за 2025 год</summary><!-- wp:group {"className":"sbp-link-list"} -->
<div class="wp-block-group sbp-link-list">{$rows_markup}</div>
<!-- /wp:group --></details>
<!-- /wp:details --></div>
<!-- /wp:group -->
HTML);
    }
}

if (!function_exists('sb_alpha_reporting_pattern_page_starter')) {
    function sb_alpha_reporting_pattern_page_starter(): string
    {
        return implode("\n\n", [
            sb_alpha_reporting_pattern_hero(),
            sb_alpha_reporting_pattern_summary(),
            sb_alpha_reporting_pattern_annual_shelf(),
            sb_alpha_reporting_pattern_year_section(),
        ]);
    }
}

add_action('init', 'sb_alpha_register_reporting_patterns');
function sb_alpha_register_reporting_patterns(): void
{
    if (!function_exists('register_block_pattern_category') || !function_exists('register_block_pattern')) {
        return;
    }

    if (class_exists('WP_Block_Pattern_Categories_Registry')) {
        $category_registry = WP_Block_Pattern_Categories_Registry::get_instance();

        if (!$category_registry->is_registered('sb-alpha')) {
            register_block_pattern_category('sb-alpha', [
                'label' => 'SB Alpha',
            ]);
        }
    }

    $patterns = [
        'sb-alpha/reporting-page-starter' => [
            'title' => 'SB Alpha / Отчетность — старт страницы',
            'description' => 'Полный стартовый набор для страницы отчетности: hero, вводный блок, полка годовой отчетности и секция года.',
            'content' => sb_alpha_reporting_pattern_page_starter(),
        ],
        'sb-alpha/reporting-hero' => [
            'title' => 'SB Alpha / Hero — Отчетность',
            'description' => 'Верхний hero-блок страницы отчетности.',
            'content' => sb_alpha_reporting_pattern_hero(),
        ],
        'sb-alpha/reporting-summary' => [
            'title' => 'SB Alpha / Вводный блок — Отчетность',
            'description' => 'Вводный accent-блок для страницы отчетности.',
            'content' => sb_alpha_reporting_pattern_summary(),
        ],
        'sb-alpha/reporting-section-shell' => [
            'title' => 'SB Alpha / Оболочка раздела',
            'description' => 'Базовая section-card оболочка для новых блоков страницы.',
            'content' => sb_alpha_reporting_pattern_section_shell(),
        ],
        'sb-alpha/reporting-doc-card' => [
            'title' => 'SB Alpha / Карточка документа',
            'description' => 'Отдельная карточка документа для полки отчетности.',
            'content' => sb_alpha_reporting_pattern_doc_card(),
        ],
        'sb-alpha/reporting-link-row' => [
            'title' => 'SB Alpha / Строка ссылки документа',
            'description' => 'Отдельная строка документа для годовой accordion-секции.',
            'content' => sb_alpha_reporting_pattern_link_row(),
        ],
        'sb-alpha/reporting-annual-shelf' => [
            'title' => 'SB Alpha / Полка годовой отчетности',
            'description' => 'Секция с карточками документов по годовой отчетности.',
            'content' => sb_alpha_reporting_pattern_annual_shelf(),
        ],
        'sb-alpha/reporting-year-section' => [
            'title' => 'SB Alpha / Секция года — Отчетность',
            'description' => 'Accordion-секция промежуточной отчетности за один год.',
            'content' => sb_alpha_reporting_pattern_year_section(),
        ],
    ];

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
