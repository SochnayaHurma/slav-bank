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

if (!function_exists('sb_alpha_reporting_pattern_hero')) {
    function sb_alpha_reporting_pattern_hero(): string
    {
        return sb_alpha_reporting_pattern_render(<<<'HTML'
<!-- wp:group {"className":"block sbp-block sbp-block--hero","layout":{"type":"default"}} -->
<div class="wp-block-group block sbp-block sbp-block--hero"><div class="container"><!-- wp:group {"className":"hero-wrap sbp-reporting-hero","layout":{"type":"default"}} -->
<div class="wp-block-group hero-wrap sbp-reporting-hero"><!-- wp:columns {"verticalAlignment":"top","className":"sbp-hero-columns"} -->
<div class="wp-block-columns are-vertically-aligned-top sbp-hero-columns"><!-- wp:column {"verticalAlignment":"top","width":"72%"} -->
<div class="wp-block-column is-vertically-aligned-top" style="flex-basis:72%"><!-- wp:paragraph {"className":"kicker"} -->
<p class="kicker">Информация банка</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1>Отчетность</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Бухгалтерская (финансовая) отчетность раскрывается в ограниченном объёме в соответствии с Решением Совета директоров Банка России от 24 декабря 2024 года.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"className":"sbp-hero-actions"} -->
<div class="wp-block-buttons sbp-hero-actions"><!-- wp:button {"className":"is-style-fill"} -->
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="__REPORTING_HASH__">Содержание</a></div>
<!-- /wp:button -->

<!-- wp:button {"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="__HOME_URL__">На главную</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"top","width":"28%"} -->
<div class="wp-block-column is-vertically-aligned-top" style="flex-basis:28%"><!-- wp:group {"className":"sbp-hero-links"} -->
<div class="wp-block-group sbp-hero-links"><!-- wp:paragraph {"className":"sbp-hero-link"} -->
<p class="sbp-hero-link"><a href="__REQUISITES_URL__">Реквизиты</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"sbp-hero-link"} -->
<p class="sbp-hero-link"><a href="__INFO_URL__">Информация банка</a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group --></div></div>
<!-- /wp:group -->
HTML);
    }
}

if (!function_exists('sb_alpha_reporting_pattern_summary')) {
    function sb_alpha_reporting_pattern_summary(): string
    {
        return <<<'HTML'
<!-- wp:group {"anchor":"reporting-content","className":"block sbp-block sbp-block--summary","layout":{"type":"default"}} -->
<div class="wp-block-group block sbp-block sbp-block--summary" id="reporting-content"><div class="container"><!-- wp:group {"className":"section-card section-card--accent sbp-section-card","layout":{"type":"default"}} -->
<div class="wp-block-group section-card section-card--accent sbp-section-card"><!-- wp:paragraph {"className":"kicker"} -->
<p class="kicker">АО НКБ «СЛАВЯНБАНК»</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2>Отчетность</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>ГОДОВАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Ниже приведены документы по годовой и промежуточной бухгалтерской (финансовой) отчетности банка в едином карточном формате. При необходимости этот блок можно редактировать как обычный текст без изменения внешней композиции страницы.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div></div>
<!-- /wp:group -->
HTML;
    }
}

if (!function_exists('sb_alpha_reporting_pattern_annual_shelf')) {
    function sb_alpha_reporting_pattern_annual_shelf(): string
    {
        return sb_alpha_reporting_pattern_render(<<<'HTML'
<!-- wp:group {"className":"block sbp-block sbp-block--annual","layout":{"type":"default"}} -->
<div class="wp-block-group block sbp-block sbp-block--annual"><div class="container"><!-- wp:group {"className":"section-card sbp-section-card","layout":{"type":"default"}} -->
<div class="wp-block-group section-card sbp-section-card"><!-- wp:paragraph {"className":"kicker"} -->
<p class="kicker">Годовая отчетность</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2>Документы</h2>
<!-- /wp:heading -->

<!-- wp:group {"className":"sbp-doc-shelf","layout":{"type":"grid","columnCount":2,"minimumColumnWidth":"18rem"}} -->
<div class="wp-block-group sbp-doc-shelf"><!-- wp:group {"className":"sbp-doc-card","layout":{"type":"default"}} -->
<div class="wp-block-group sbp-doc-card"><!-- wp:paragraph {"className":"sbp-doc-kind"} -->
<p class="sbp-doc-kind">PDF</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"className":"sbp-doc-title"} -->
<h3 class="sbp-doc-title">Годовая бухгалтерская (финансовая) отчетность за 2024 год.</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"sbp-doc-meta"} -->
<p class="sbp-doc-meta">(Опубликовано 11.04.2025г. Утверждена на годовом ОСА 10.04.2025г.)</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="__ANNUAL_2024_URL__">Открыть документ</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"sbp-doc-card","layout":{"type":"default"}} -->
<div class="wp-block-group sbp-doc-card"><!-- wp:paragraph {"className":"sbp-doc-kind"} -->
<p class="sbp-doc-kind">PDF</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"className":"sbp-doc-title"} -->
<h3 class="sbp-doc-title">Годовая бухгалтерская (финансовая) отчетность за 2023 год.</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"sbp-doc-meta"} -->
<p class="sbp-doc-meta">(Опубликовано 12.03.2024г. Утверждена на годовом ОСА 02.04.2024г.)</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="__ANNUAL_2023_URL__">Открыть документ</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div></div>
<!-- /wp:group -->
HTML);
    }
}

if (!function_exists('sb_alpha_reporting_pattern_year_section')) {
    function sb_alpha_reporting_pattern_year_section(): string
    {
        return sb_alpha_reporting_pattern_render(<<<'HTML'
<!-- wp:group {"className":"block sbp-block sbp-block--year","layout":{"type":"default"}} -->
<div class="wp-block-group block sbp-block sbp-block--year"><div class="container"><!-- wp:group {"className":"section-card sbp-section-card","layout":{"type":"default"}} -->
<div class="wp-block-group section-card sbp-section-card"><!-- wp:paragraph {"className":"kicker"} -->
<p class="kicker">Промежуточная отчетность</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":2} -->
<h2>Показатели деятельности банка</h2>
<!-- /wp:heading -->

<!-- wp:details {"summary":"Промежуточная бухгалтерская (финансовая) отчетность за 2025 год","className":"sbp-accordion"} -->
<details class="wp-block-details sbp-accordion"><summary>Промежуточная бухгалтерская (финансовая) отчетность за 2025 год</summary><!-- wp:group {"className":"sbp-link-list","layout":{"type":"default"}} -->
<div class="wp-block-group sbp-link-list"><!-- wp:group {"className":"sbp-link-row","layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"top"}} -->
<div class="wp-block-group sbp-link-row"><div class="wp-block-group"><!-- wp:paragraph -->
<p><strong><a href="__INTERIM_2025_Q1_URL__">Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2025 г.</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"sbp-doc-meta"} -->
<p class="sbp-doc-meta">(опубликовано 16.05.2025г.)</p>
<!-- /wp:paragraph --></div>
<div class="wp-block-group"><!-- wp:paragraph {"className":"sbp-link-kind"} -->
<p class="sbp-link-kind">PDF →</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:group -->

<!-- wp:group {"className":"sbp-link-row","layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"top"}} -->
<div class="wp-block-group sbp-link-row"><div class="wp-block-group"><!-- wp:paragraph -->
<p><strong><a href="__INTERIM_2025_H1_URL__">Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2025 г.</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"sbp-doc-meta"} -->
<p class="sbp-doc-meta">(опубликовано 07.08.2025г.)</p>
<!-- /wp:paragraph --></div>
<div class="wp-block-group"><!-- wp:paragraph {"className":"sbp-link-kind"} -->
<p class="sbp-link-kind">PDF →</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:group -->

<!-- wp:group {"className":"sbp-link-row","layout":{"type":"flex","justifyContent":"space-between","verticalAlignment":"top"}} -->
<div class="wp-block-group sbp-link-row"><div class="wp-block-group"><!-- wp:paragraph -->
<p><strong><a href="__INTERIM_2025_9M_URL__">Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2025 г.</a></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"sbp-doc-meta"} -->
<p class="sbp-doc-meta">(опубликовано 12.11.2025г.)</p>
<!-- /wp:paragraph --></div>
<div class="wp-block-group"><!-- wp:paragraph {"className":"sbp-link-kind"} -->
<p class="sbp-link-kind">PDF →</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:group --></div>
<!-- /wp:group --></details>
<!-- /wp:details --></div>
<!-- /wp:group --></div></div>
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

    register_block_pattern_category('sb-alpha', [
        'label' => 'SB Alpha',
    ]);

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
