<?php
/**
 * Plugin Name: Slavyanbank Requisites & Tariffs No-Hero Migration Patterns
 * Description: Prefilled migration patterns for Requisites and Tariffs pages without hero sections, so the hero can stay in the PHP template layer.
 * Version: 0.1.0
 * Author: OpenAI
 */

if (!defined('ABSPATH')) {
    exit;
}

final class Slavyanbank_Requisites_Tariffs_No_Hero_Migration_Patterns {
    private const CATEGORY = 'slavyanbank-migration-nohero';

    public static function init(): void {
        add_action('init', [self::class, 'register_category'], 20);
        add_action('init', [self::class, 'register_patterns'], 20);
    }

    public static function register_category(): void {
        if (!function_exists('register_block_pattern_category')) {
            return;
        }

        register_block_pattern_category(self::CATEGORY, [
            'label' => 'Slavyanbank Migration · No Hero',
        ]);
    }

    public static function register_patterns(): void {
        if (!function_exists('register_block_pattern')) {
            return;
        }

        $registry = WP_Block_Type_Registry::get_instance();
        if (!$registry->is_registered('slavyanbank-stage1/section-shell')) {
            return;
        }

        $patterns = [
            'requisites-nohero' => [
                'title' => 'SB Migration · Requisites (no hero)',
                'description' => 'Предзаполненная migration-pattern для страницы «Реквизиты банка» без hero-секции. Hero подцепляется из PHP шаблона.',
                'content' => self::requisites_pattern_no_hero(),
            ],
            'tariffs-root-nohero' => [
                'title' => 'SB Migration · Tariffs Root (no hero)',
                'description' => 'Предзаполненная migration-pattern для страницы «ТАРИФЫ БАНКА» без hero-секции. Hero подцепляется из PHP шаблона.',
                'content' => self::tariffs_root_pattern_no_hero(),
            ],
        ];

        if ($registry->is_registered('slavbank/pdf-viewer')) {
            $patterns += [
                'tariffs-rf-nohero' => [
                    'title' => 'SB Migration · Tariffs RF (no hero)',
                    'description' => 'Предзаполненная migration-pattern дочерней тарифной страницы без hero.',
                    'content' => self::tariff_child_pdf_pattern_no_hero('rf'),
                ],
                'tariffs-valuta-nohero' => [
                    'title' => 'SB Migration · Tariffs Foreign Currency (no hero)',
                    'description' => 'Предзаполненная migration-pattern дочерней тарифной страницы без hero.',
                    'content' => self::tariff_child_pdf_pattern_no_hero('valuta'),
                ],
                'tariff-slavny-nohero' => [
                    'title' => 'SB Migration · Tariff Slavny (no hero)',
                    'description' => 'Предзаполненная migration-pattern дочерней тарифной страницы без hero.',
                    'content' => self::tariff_child_pdf_pattern_no_hero('slavny'),
                ],
                'tariff-privetstvenny-nohero' => [
                    'title' => 'SB Migration · Tariff Privetstvenny (no hero)',
                    'description' => 'Предзаполненная migration-pattern дочерней тарифной страницы без hero.',
                    'content' => self::tariff_child_pdf_pattern_no_hero('privetstvenny'),
                ],
                'tariff-depositny-nohero' => [
                    'title' => 'SB Migration · Tariff Depositny (no hero)',
                    'description' => 'Предзаполненная migration-pattern дочерней тарифной страницы без hero.',
                    'content' => self::tariff_child_pdf_pattern_no_hero('depositny'),
                ],
            ];
        }

        foreach ($patterns as $slug => $pattern) {
            register_block_pattern('slavyanbank-migration/' . $slug, [
                'title'       => $pattern['title'],
                'description' => $pattern['description'],
                'categories'  => [self::CATEGORY],
                'content'     => $pattern['content'],
            ]);
        }
    }

    private static function encode(array $attrs): string {
        return esc_attr(wp_json_encode($attrs, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
    }

    private static function self_closing(string $block, array $attrs = []): string {
        return '<!-- wp:' . $block . (empty($attrs) ? '' : ' ' . wp_json_encode($attrs, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)) . ' /-->';
    }

    private static function tariffs_download_items(): array {
        if (function_exists('sb_alpha_get_tariffs_download')) {
            return array_map(static function(array $item): array {
                return [
                    'label' => (string) ($item['date'] ?? ''),
                    'title' => (string) ($item['title'] ?? ''),
                    'url' => (string) ($item['url'] ?? ''),
                    'newTab' => true,
                ];
            }, sb_alpha_get_tariffs_download());
        }

        return [
            ['label' => 'с 01.01.2026г', 'title' => 'Тарифы банка в валюте РФ.', 'url' => 'https://slavbank.ru/wp-content/uploads/standard-osobiy-s-01012026.pdf', 'newTab' => true],
            ['label' => 'с 01.12.2025г', 'title' => 'Тарифы банка в валюте РФ и иностранной валюте «Славный» для новых клиентов.', 'url' => 'https://slavbank.ru/wp-content/uploads/tp-slavny.pdf', 'newTab' => true],
            ['label' => 'с 01.12.2025г', 'title' => 'Тарифы банка в иностранной валюте.', 'url' => 'https://slavbank.ru/wp-content/uploads/tarify-v-in-valyute-s-01122025.pdf', 'newTab' => true],
            ['label' => 'с 01.11.2025г', 'title' => 'Тарифы банка в валюте РФ и иностранной валюте «Приветственный» для новых клиентов.', 'url' => 'https://slavbank.ru/wp-content/uploads/tarif-privetstvenny.pdf', 'newTab' => true],
            ['label' => 'с 01.11.2025г', 'title' => 'Тарифы банка в валюте РФ и иностранной валюте «Депозитный» для новых клиентов.', 'url' => 'https://slavbank.ru/wp-content/uploads/tarif-depositny.pdf', 'newTab' => true],
        ];
    }

    private static function tariffs_view_items(): array {
        if (function_exists('sb_alpha_get_tariffs_view')) {
            return array_map(static function(array $item): array {
                return [
                    'label' => (string) ($item['date'] ?? ''),
                    'title' => (string) ($item['title'] ?? ''),
                    'url' => (string) ($item['url'] ?? ''),
                    'newTab' => true,
                ];
            }, sb_alpha_get_tariffs_view());
        }

        return [
            ['label' => 'действуют с 01.01.2026г.', 'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в валюте РФ', 'url' => 'https://slavbank.ru/tarify-banka-html/tarify_rf.html/', 'newTab' => true],
            ['label' => 'действуют с 13.10.2025г. по 28.02.2026г.', 'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Славный»', 'url' => 'https://slavbank.ru/tarify-banka-html/tarif_slavny.html/', 'newTab' => true],
            ['label' => 'действуют с 01.12.2025г.', 'title' => 'Тарифы банковских услуг по обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте', 'url' => 'https://slavbank.ru/tarify-banka-html/tarify_valuta.html/', 'newTab' => true],
            ['label' => 'действуют с 01.11.2025г. по 28.02.2026г.', 'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Приветственный»', 'url' => 'https://slavbank.ru/tarify-banka-html/tarif_privetstvenny.html/', 'newTab' => true],
            ['label' => 'действуют с 01.11.2025г. по 28.02.2026г.', 'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Депозитный»', 'url' => 'https://slavbank.ru/tarify-banka-html/tarif_depositny.html/', 'newTab' => true],
        ];
    }

    private static function requisites_items(): array {
        if (function_exists('sb_alpha_get_bank_requisites_rows')) {
            return array_map(static function(array $row): array {
                return [
                    'label' => (string) ($row['label'] ?? ''),
                    'value' => (string) ($row['value'] ?? ''),
                    'copy'  => (string) ($row['value'] ?? ''),
                    'url'   => (string) ($row['url'] ?? ''),
                ];
            }, sb_alpha_get_bank_requisites_rows());
        }

        return [
            ['label' => 'Сокращенное наименование', 'value' => 'АО НКБ «СЛАВЯНБАНК»', 'copy' => 'АО НКБ «СЛАВЯНБАНК»', 'url' => ''],
            ['label' => 'Адрес электронной почты', 'value' => 'nkb@slavbank.ru', 'copy' => 'nkb@slavbank.ru', 'url' => 'mailto:nkb@slavbank.ru'],
        ];
    }

    private static function tariff_child_map(): array {
        return [
            'rf' => [
                'slug' => 'tarify_rf',
                'title' => 'Тарифы по операциям в валюте РФ',
                'pdf_title' => 'Тарифы по операциям в валюте РФ',
                'pdf_url' => 'https://slavbank.ru/wp-content/uploads/standard-osobiy-s-01012026.pdf',
            ],
            'valuta' => [
                'slug' => 'tarify_valuta',
                'title' => 'Тарифы по операциям в иностранной валюте',
                'pdf_title' => 'Тарифы по операциям в иностранной валюте',
                'pdf_url' => 'https://slavbank.ru/wp-content/uploads/tarify-v-in-valyute-s-01122025.pdf',
            ],
            'slavny' => [
                'slug' => 'tarif_slavny',
                'title' => 'Тарифы «Славный»',
                'pdf_title' => 'Тарифы «Славный»',
                'pdf_url' => 'https://slavbank.ru/wp-content/uploads/tp-slavny.pdf',
            ],
            'privetstvenny' => [
                'slug' => 'tarif_privetstvenny',
                'title' => 'Тарифы «Приветственный»',
                'pdf_title' => 'Тарифы «Приветственный»',
                'pdf_url' => 'https://slavbank.ru/wp-content/uploads/tarif-privetstvenny.pdf',
            ],
            'depositny' => [
                'slug' => 'tarif_depositny',
                'title' => 'Тарифы «Депозитный»',
                'pdf_title' => 'Тарифы «Депозитный»',
                'pdf_url' => 'https://slavbank.ru/wp-content/uploads/tarif-depositny.pdf',
            ],
        ];
    }

    private static function requisites_pattern_no_hero(): string {
        $table = self::encode([
            'items' => self::requisites_items(),
        ]);

        return <<<HTML
<!-- wp:slavyanbank-stage1/section-shell {"variant":"dashv2","anchor":"key"} -->
<section class="block dashv2" id="key"><div class="container">
<!-- wp:slavyanbank-stage1/bento-layout -->
<div class="bento">
<!-- wp:slavyanbank-stage1/bento-card-shell -->
<div class="bento-card" style="padding:var(--s-4);position:relative">
<!-- wp:slavyanbank-stage1/alert {"title":"Справочная информация","text":"Hero вынесен в PHP-шаблон. Этот migration-pattern содержит только контентную часть страницы «Реквизиты банка»."} /-->
<!-- wp:slavyanbank-stage1/prose-shell -->
<div class="prose"><div class="entry-content">
<!-- wp:core/paragraph -->
<p>После вставки паттерна скорректируйте сопровождающий текст вручную, а таблица реквизитов уже предзаполнена актуальными данными data-layer.</p>
<!-- /wp:core/paragraph -->
</div></div>
<!-- /wp:slavyanbank-stage1/prose-shell -->
</div>
<!-- /wp:slavyanbank-stage1/bento-card-shell -->

<!-- wp:slavyanbank-stage1/stack-shell -->
<div class="stack">
<!-- wp:slavyanbank-stage1/home-stack /-->
</div>
<!-- /wp:slavyanbank-stage1/stack-shell -->
</div>
<!-- /wp:slavyanbank-stage1/bento-layout -->
</div></section>
<!-- /wp:slavyanbank-stage1/section-shell -->

<!-- wp:slavyanbank-stage1/section-shell {"anchor":"full"} -->
<section class="block" id="full"><div class="container">
<!-- wp:slavyanbank-stage1/requisites-table {$table} /-->
</div></section>
<!-- /wp:slavyanbank-stage1/section-shell -->
HTML;
    }

    private static function tariffs_root_pattern_no_hero(): string {
        $download = self::self_closing('slavyanbank-stage1/tariff-card-list', [
            'items' => self::tariffs_download_items(),
        ]);
        $view = self::self_closing('slavyanbank-stage1/tariff-card-list', [
            'items' => self::tariffs_view_items(),
        ]);

        return <<<HTML
<!-- wp:slavyanbank-stage1/section-shell {"variant":"dashv2","anchor":"pdf"} -->
<section class="block dashv2" id="pdf"><div class="container">
<!-- wp:slavyanbank-stage1/bento-layout -->
<div class="bento">
<!-- wp:slavyanbank-stage1/bento-card-shell -->
<div class="bento-card" style="padding:var(--s-4);position:relative">
<!-- wp:slavyanbank-stage1/prose-shell -->
<div class="prose"><div class="entry-content">
<!-- wp:core/heading {"level":3,"className":"kicker"} -->
<h3 class="wp-block-heading kicker">АО НКБ «СЛАВЯНБАНК» предлагает к рассмотрению следующие виды ТАРИФОВ банковских услуг</h3>
<!-- /wp:core/heading -->

<!-- wp:core/paragraph --><p><strong>— скачать:</strong></p><!-- /wp:core/paragraph -->
{$download}
<!-- wp:core/paragraph --><p><strong>— открыть на сайте:</strong></p><!-- /wp:core/paragraph -->
{$view}
<!-- wp:core/paragraph {"align":"center"} --><p class="has-text-align-center"><strong><a href="https://slavbank.ru/wp-content/uploads/tarify-banka-v-valyute-rf-s-01072024-i-in-valyute-s-131025.pdf" target="_blank" rel="noopener">СКАЧАТЬ ТАРИФЫ БАНКА</a></strong></p><!-- /wp:core/paragraph -->
</div></div>
<!-- /wp:slavyanbank-stage1/prose-shell -->
</div>
<!-- /wp:slavyanbank-stage1/bento-card-shell -->

<!-- wp:slavyanbank-stage1/stack-shell -->
<div class="stack">
<!-- wp:slavyanbank-stage1/home-stack /-->
</div>
<!-- /wp:slavyanbank-stage1/stack-shell -->
</div>
<!-- /wp:slavyanbank-stage1/bento-layout -->
</div></section>
<!-- /wp:slavyanbank-stage1/section-shell -->
HTML;
    }

    private static function tariff_child_pdf_pattern_no_hero(string $key): string {
        $map = self::tariff_child_map();
        if (!isset($map[$key])) {
            return '';
        }
        $item = $map[$key];
        $json = wp_json_encode([
            'kicker' => 'PDF-документ',
            'title' => $item['pdf_title'],
            'description' => 'Откройте внутри страницы или скачайте файл.',
            'pdfUrl' => $item['pdf_url'],
            'openLabel' => 'Открыть',
            'downloadLabel' => 'Скачать',
            'note' => 'Если PDF не отображается, используйте кнопку «Открыть».',
            'showOpen' => true,
            'showDownload' => true,
        ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

        return implode("\n", [
            '<!-- wp:slavyanbank-stage1/section-shell {"variant":"dashv2","anchor":"content"} -->',
            '<section class="block dashv2" id="content"><div class="container">',
            '<!-- wp:slavyanbank-stage1/bento-layout -->',
            '<div class="bento">',
            '<!-- wp:slavyanbank-stage1/bento-card-shell -->',
            '<div class="bento-card" style="padding:var(--s-4);position:relative">',
            '<!-- wp:slavyanbank-stage1/prose-shell -->',
            '<div class="prose"><div class="entry-content">',
            '<!-- wp:core/heading {"level":3,"className":"kicker"} --><h3 class="wp-block-heading kicker">' . esc_html($item['title']) . '</h3><!-- /wp:core/heading -->',
            '<!-- wp:core/paragraph --><p>Hero вынесен в PHP-шаблон. Этот migration-pattern содержит контентную часть маршрута <strong>' . esc_html($item['slug']) . '</strong>.</p><!-- /wp:core/paragraph -->',
            '<!-- wp:slavbank/pdf-viewer ' . $json . ' /-->',
            '</div></div>',
            '<!-- /wp:slavyanbank-stage1/prose-shell -->',
            '</div>',
            '<!-- /wp:slavyanbank-stage1/bento-card-shell -->',
            '<!-- wp:slavyanbank-stage1/stack-shell -->',
            '<div class="stack">',
            '<!-- wp:slavyanbank-stage1/home-stack /-->',
            '</div>',
            '<!-- /wp:slavyanbank-stage1/stack-shell -->',
            '</div>',
            '<!-- /wp:slavyanbank-stage1/bento-layout -->',
            '</div></section>',
            '<!-- /wp:slavyanbank-stage1/section-shell -->',
        ]);
    }
}

Slavyanbank_Requisites_Tariffs_No_Hero_Migration_Patterns::init();
