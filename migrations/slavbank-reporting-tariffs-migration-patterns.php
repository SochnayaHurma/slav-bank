<?php
/**
 * Plugin Name: Миграция страниц: тарифов, отчетности
 * Description: 
 * Version: 0.1.2
 * Author: 
 */

if (!defined('ABSPATH')) {
    exit;
}

final class Slavyanbank_Reporting_Tariffs_Migration_Patterns {
    private const CATEGORY = 'slavyanbank-migration-patterns';

    public static function init(): void {
        add_action('init', [self::class, 'register_category'], 20);
        add_action('init', [self::class, 'register_patterns'], 20);
    }

    public static function register_category(): void {
        if (!function_exists('register_block_pattern_category')) {
            return;
        }

        register_block_pattern_category(self::CATEGORY, [
            'label' => 'Миграция страницы отчетность',
        ]);
    }

    public static function register_patterns(): void {
        if (!function_exists('register_block_pattern')) {
            return;
        }

        $registry = WP_Block_Type_Registry::get_instance();
        if (!$registry->is_registered('slavyanbank-stage1/hero-shell')) {
            return;
        }

        $patterns = [
            'reporting-migration' => [
                'title'       => 'SB Migration · Reporting (prefilled)',
                'description' => 'Готовый паттерн миграции страницы «Отчетность» с уже заполненными блоками в новом стиле.',
                'content'     => self::reporting_pattern(),
            ],
            'tariffs-root-migration' => [
                'title'       => 'SB Migration · Tariffs Root (prefilled)',
                'description' => 'Готовый паттерн миграции корневой страницы «Тарифы банка».',
                'content'     => self::tariffs_root_pattern(),
            ],
            'tariffs-rf-migration' => [
                'title'       => 'SB Migration · Tariffs RF (prefilled)',
                'description' => 'Готовый паттерн миграции страницы «Тарифы по операциям в валюте РФ».',
                'content'     => self::tariff_child_pattern('rf'),
            ],
            'tariffs-valuta-migration' => [
                'title'       => 'SB Migration · Tariffs Foreign Currency (prefilled)',
                'description' => 'Готовый паттерн миграции страницы «Тарифы по операциям в иностранной валюте».',
                'content'     => self::tariff_child_pattern('valuta'),
            ],
            'tariffs-slavny-migration' => [
                'title'       => 'SB Migration · Tariff Slavny (prefilled)',
                'description' => 'Готовый паттерн миграции страницы тарифа «Славный».',
                'content'     => self::tariff_child_pattern('slavny'),
            ],
            'tariffs-privetstvenny-migration' => [
                'title'       => 'SB Migration · Tariff Privetstvenny (prefilled)',
                'description' => 'Готовый паттерн миграции страницы тарифа «Приветственный».',
                'content'     => self::tariff_child_pattern('privetstvenny'),
            ],
            'tariffs-depositny-migration' => [
                'title'       => 'SB Migration · Tariff Depositny (prefilled)',
                'description' => 'Готовый паттерн миграции страницы тарифа «Депозитный».',
                'content'     => self::tariff_child_pattern('depositny'),
            ],
        ];

        foreach ($patterns as $slug => $pattern) {
            register_block_pattern('slavyanbank-migration/' . $slug, [
                'title'       => $pattern['title'],
                'description' => $pattern['description'],
                'categories'  => [self::CATEGORY],
                'content'     => $pattern['content'],
            ]);
        }
    }

    private static function attrs(array $attrs): string {
        if (empty($attrs)) {
            return '';
        }

        return ' ' . wp_json_encode($attrs, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    private static function self_closing(string $block, array $attrs = []): string {
        return '<!-- wp:' . $block . self::attrs($attrs) . ' /-->';
    }

    private static function reporting_shelf_items(): array {
        return [
            ['title' => 'Годовая бухгалтерская (финансовая) отчетность за 2024 год.', 'footer' => '(Опубликовано 11.04.2025г. Утверждена на годовом ОСА 10.04.2025г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/azo_-2024_nmm_slavyanbank.pdf', 'kind' => 'PDF', 'newTab' => true],
            ['title' => 'Годовая бухгалтерская (финансовая) отчетность за 2023 год.', 'footer' => '(Опубликовано 12.03.2024г. Утверждена на годовом ОСА 02.04.2024г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/otchet_2023_publ.pdf', 'kind' => 'PDF', 'newTab' => true],
            ['title' => 'Годовая бухгалтерская (финансовая) отчетность за 2022 год.', 'footer' => '(Опубликовано 29.03.2023г. Утверждена на годовом ОСА 20.04.2023г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/otchet2022.pdf', 'kind' => 'PDF', 'newTab' => true],
            ['title' => 'Годовая бухгалтерская (финансовая) отчетность за 2020 год.', 'footer' => '(Опубликовано 29.03.2021г. Утверждена на годовом ОСА 22.04.2021г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/otchet2020.pdf', 'kind' => 'PDF', 'newTab' => true],
            ['title' => 'Годовая бухгалтерская (финансовая) отчетность за 2019 год.', 'footer' => '(Опубликовано 26.03.2020г. Утверждена на годовом ОСА 16.04.2020г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/report2019.pdf', 'kind' => 'PDF', 'newTab' => true],
            ['title' => 'Годовая бухгалтерская (финансовая) отчетность за 2018 год.', 'footer' => '(Утверждена на годовом ОСА 18.04.2019г) (Опубликовано 28.03.2019г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/report2018.pdf', 'kind' => 'PDF', 'newTab' => true],
            ['title' => 'Финансовая отчетность по МСФО за 2017 год.', 'footer' => '(Опубликовано 12.04.2018г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/msfo2017.pdf', 'kind' => 'PDF', 'newTab' => true],
            ['title' => 'Годовая бухгалтерская (финансовая) отчетность за 2017 год.', 'footer' => '(Опубликовано 12.04.2018г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/report2017.pdf', 'kind' => 'PDF', 'newTab' => true],
        ];
    }

    private static function reporting_sections(): array {
        return [
            [
                'summary' => 'Промежуточная бухгалтерская (финансовая) отчетность за 2025 год',
                'open' => true,
                'entries' => [
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2025 г.', 'note' => '(опубликовано 16.05.2025г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/otchet-publ-i-2025.pdf', 'newTab' => true],
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2025 г.', 'note' => '(опубликовано 07.08.2025г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/otchet-publ-ii-2025.pdf', 'newTab' => true],
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2025 г.', 'note' => '(опубликовано 12.11.2025г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/otchet-publ-9-2025.pdf', 'newTab' => true],
                ],
            ],
            [
                'summary' => 'Промежуточная бухгалтерская (финансовая) отчетность за 2024 год',
                'open' => false,
                'entries' => [
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2024 г.', 'note' => '(опубликовано 16.05.2024г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/otchet_publ-1-24-1.pdf', 'newTab' => true],
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2024 г.', 'note' => '(опубликовано 09.08.2024г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/na-sajt-otchet-2-2024-publ.pdf', 'newTab' => true],
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2024 г.', 'note' => '(опубликовано 08.11.2024г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/otchet-publ-9-2024.pdf', 'newTab' => true],
                ],
            ],
            [
                'summary' => 'Промежуточная бухгалтерская (финансовая) отчетность за 2023 год',
                'open' => false,
                'entries' => [
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2023 г.', 'note' => '(опубликовано 15.05.2023г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/otchet-i-2023-for-publ.pdf', 'newTab' => true],
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2023 г.', 'note' => '(опубликовано 02.08.2023г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/otchet-6-2023-publ.pdf', 'newTab' => true],
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2023 г.', 'note' => '(опубликовано 07.11.2023г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/publ-otchet-9-2023.pdf', 'newTab' => true],
                ],
            ],
            [
                'summary' => 'Промежуточная бухгалтерская (финансовая) отчетность за 2022 год',
                'open' => false,
                'entries' => [
                    ['title' => 'Показатели на 01.01.2022 г.', 'note' => '(дата размещения 18.01.2022г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/pocaz_01012022.pdf', 'newTab' => true],
                    ['title' => 'Показатели на 01.02.2022 г.', 'note' => '(дата размещения 09.02.2022г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/pocaz_01022022.pdf', 'newTab' => true],
                ],
            ],
            [
                'summary' => 'Промежуточная бухгалтерская (финансовая) отчетность за 2021 год',
                'open' => false,
                'entries' => [
                    ['title' => 'Предварительные показатели на 01.01.2021 г.', 'note' => '(дата размещения 18.01.2021)', 'url' => 'https://slavbank.ru/wp-content/uploads/pr_pokaz_01012021.xls', 'newTab' => true],
                    ['title' => 'Показатели на 01.02.2021 г.', 'note' => '(дата размещения 17.02.2021)', 'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01022021.xls', 'newTab' => true],
                    ['title' => 'Показатели на 01.03.2021 г.', 'note' => '(дата размещения 10.03.2021)', 'url' => 'https://slavbank.ru/wp-content/uploads/pokaz_01032021.xls', 'newTab' => true],
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2021 г.', 'note' => '(опубликовано 12.05.2021г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/otchet-1-2021.pdf', 'newTab' => true],
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2021 г.', 'note' => '(опубликовано 30.07.2021г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/otchet-2-2021.pdf', 'newTab' => true],
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2021 г.', 'note' => '(опубликовано 10.11.2021г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/otchet-3-2021.pdf', 'newTab' => true],
                ],
            ],
            [
                'summary' => 'Промежуточная бухгалтерская (финансовая) отчетность за 2020 год',
                'open' => false,
                'entries' => [
                    ['title' => 'Предварительные показатели на 01.01.2020г.', 'note' => '(дата размещения 15.01.2020г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/pr_pokaz_01012020.xls', 'newTab' => true],
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2020 года', 'note' => '(опубликовано 18.05.2020г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/otchet04-2020.pdf', 'newTab' => true],
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2020 года', 'note' => '(опубликовано 29.07.2020г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/1h-2020.pdf', 'newTab' => true],
                    ['title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2020 г.', 'note' => '(опубликовано 28.10.2020г.)', 'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/pbo9m2020.pdf', 'newTab' => true],
                ],
            ],
        ];
    }

    private static function tariffs_download_items(): array {
        return [
            ['label' => 'с 01.01.2026г', 'title' => 'Тарифы банка в валюте РФ.', 'url' => 'https://slavbank.ru/wp-content/uploads/standard-osobiy-s-01012026.pdf', 'newTab' => true],
            ['label' => 'с 01.12.2025г', 'title' => 'Тарифы банка в валюте РФ и иностранной валюте «Славный» для новых клиентов.', 'url' => 'https://slavbank.ru/wp-content/uploads/tp-slavny.pdf', 'newTab' => true],
            ['label' => 'с 01.12.2025г', 'title' => 'Тарифы банка в иностранной валюте.', 'url' => 'https://slavbank.ru/wp-content/uploads/tarify-v-in-valyute-s-01122025.pdf', 'newTab' => true],
            ['label' => 'с 01.11.2025г', 'title' => 'Тарифы банка в валюте РФ и иностранной валюте «Приветственный» для новых клиентов.', 'url' => 'https://slavbank.ru/wp-content/uploads/tarif-privetstvenny.pdf', 'newTab' => true],
            ['label' => 'с 01.11.2025г', 'title' => 'Тарифы банка в валюте РФ и иностранной валюте «Депозитный» для новых клиентов.', 'url' => 'https://slavbank.ru/wp-content/uploads/tarif-depositny.pdf', 'newTab' => true],
        ];
    }

    private static function tariffs_view_items(): array {
        return [
            ['label' => 'действуют с 01.01.2026г.', 'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в валюте РФ', 'url' => 'https://slavbank.ru/tarify-banka-html/tarify_rf.html/', 'newTab' => true],
            ['label' => 'действуют с 13.10.2025г. по 28.02.2026г.', 'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Славный»', 'url' => 'https://slavbank.ru/tarify-banka-html/tarif_slavny.html/', 'newTab' => true],
            ['label' => 'действуют с 01.12.2025г.', 'title' => 'Тарифы банковских услуг по обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте', 'url' => 'https://slavbank.ru/tarify-banka-html/tarify_valuta.html/', 'newTab' => true],
            ['label' => 'действуют с 01.11.2025г. по 28.02.2026г.', 'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Приветственный»', 'url' => 'https://slavbank.ru/tarify-banka-html/tarif_privetstvenny.html/', 'newTab' => true],
            ['label' => 'действуют с 01.11.2025г. по 28.02.2026г.', 'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Депозитный»', 'url' => 'https://slavbank.ru/tarify-banka-html/tarif_depositny.html/', 'newTab' => true],
        ];
    }

    private static function tariff_child_map(): array {
        return [
            'rf' => [
                'slug' => 'tarify_rf',
                'title' => 'Тарифы по операциям в валюте РФ',
                'heroText' => 'Legacy-наполнение маршрута перенесено в новый style-layer. Здесь можно вручную дочистить формулировки без пересборки layout.',
                'download' => self::tariffs_download_items()[0],
                'view' => self::tariffs_view_items()[0],
            ],
            'valuta' => [
                'slug' => 'tarify_valuta',
                'title' => 'Тарифы по операциям в иностранной валюте',
                'heroText' => 'Legacy-наполнение маршрута по операциям в иностранной валюте уложено в новый визуальный каркас.',
                'download' => self::tariffs_download_items()[2],
                'view' => self::tariffs_view_items()[2],
            ],
            'slavny' => [
                'slug' => 'tarif_slavny',
                'title' => 'Тарифы по операциям в рублях и иностранной валюте «Славный»',
                'heroText' => 'Legacy-наполнение маршрута «Славный» перенесено в новый style-layer.',
                'download' => self::tariffs_download_items()[1],
                'view' => self::tariffs_view_items()[1],
            ],
            'privetstvenny' => [
                'slug' => 'tarif_privetstvenny',
                'title' => 'Тарифы банка в валюте РФ и иностранной валюте «Приветственный»',
                'heroText' => 'Legacy-наполнение маршрута «Приветственный» перенесено в новый style-layer.',
                'download' => self::tariffs_download_items()[3],
                'view' => self::tariffs_view_items()[3],
            ],
            'depositny' => [
                'slug' => 'tarif_depositny',
                'title' => 'Тарифы по операциям в рублях и иностранной валюте «Депозитный»',
                'heroText' => 'Legacy-наполнение маршрута «Депозитный» перенесено в новый style-layer.',
                'download' => self::tariffs_download_items()[4],
                'view' => self::tariffs_view_items()[4],
            ],
        ];
    }

    private static function reporting_pattern(): string {
        $hero = self::self_closing('slavyanbank-stage1/hero-shell', [
            'kicker' => 'Информация банка',
            'title' => 'Отчетность',
            'text' => 'Бухгалтерская (финансовая) отчетность раскрывается в ограниченном объёме в соответствии с Решением Совета директоров Банка России от 24 декабря 2024 года.',
            'actions' => [
                ['text' => 'Содержание', 'url' => '#content', 'variant' => 'primary', 'newTab' => false],
                ['text' => 'На главную', 'url' => '/', 'variant' => 'outline', 'newTab' => false],
            ],
            'metaItems' => [
                ['text' => 'Реквизиты', 'url' => '/rekvizity-banka/', 'kind' => 'badge', 'newTab' => false],
                ['text' => '·', 'url' => '', 'kind' => 'muted', 'newTab' => false],
                ['text' => 'Информация банка', 'url' => '/informaciya-banka/', 'kind' => 'badge', 'newTab' => false],
            ],
        ]);

        $shelf = self::self_closing('slavyanbank-stage1/document-shelf', [
            'items' => self::reporting_shelf_items(),
        ]);

        $accordion = self::self_closing('slavyanbank-stage1/reporting-accordion', [
            'title' => 'ПРОМЕЖУТОЧНАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ,',
            'subtitle' => 'ПОКАЗАТЕЛИ ДЕЯТЕЛЬНОСТИ БАНКА',
            'sections' => self::reporting_sections(),
        ]);

        return <<<HTML
<!-- wp:slavyanbank-stage1/section-shell -->
<section class="block"><div class="container">
{$hero}
</div></section>
<!-- /wp:slavyanbank-stage1/section-shell -->

<!-- wp:slavyanbank-stage1/section-shell {"variant":"dashv2","anchor":"content"} -->
<section class="block dashv2" id="content"><div class="container">
<!-- wp:slavyanbank-stage1/bento-layout -->
<div class="bento">
<!-- wp:slavyanbank-stage1/bento-card-shell -->
<div class="bento-card" style="padding:var(--s-4);position:relative">
<!-- wp:core/heading {"level":3,"className":"kicker"} -->
<h3 class="wp-block-heading kicker">ОТЧЕТНОСТЬ АО НКБ «СЛАВЯНБАНК»</h3>
<!-- /wp:core/heading -->

<!-- wp:core/paragraph {"align":"center"} -->
<p class="has-text-align-center"><strong>ГОДОВАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ</strong></p>
<!-- /wp:core/paragraph -->

{$shelf}

<!-- wp:slavyanbank-stage1/prose-shell -->
<div class="prose"><div class="entry-content">
{$accordion}
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

    private static function tariffs_root_pattern(): string {
        $hero = self::self_closing('slavyanbank-stage1/hero-shell', [
            'kicker' => 'Раздел',
            'title' => 'ТАРИФЫ БАНКА',
            'text' => 'Уважаемые клиенты! АО НКБ «СЛАВЯНБАНК» запускает специальные предложения для новых клиентов и обновляет тарифные сетки по ключевым направлениям обслуживания.',
            'actions' => [
                ['text' => 'Перейти к содержимому', 'url' => '#pdf', 'variant' => 'primary', 'newTab' => false],
                ['text' => 'На главную', 'url' => '/', 'variant' => 'outline', 'newTab' => false],
            ],
            'metaItems' => [],
        ]);

        $download = self::self_closing('slavyanbank-stage1/tariff-card-list', [
            'items' => self::tariffs_download_items(),
        ]);
        $view = self::self_closing('slavyanbank-stage1/tariff-card-list', [
            'items' => self::tariffs_view_items(),
        ]);

        return <<<HTML
<!-- wp:slavyanbank-stage1/section-shell -->
<section class="block"><div class="container">
{$hero}
</div></section>
<!-- /wp:slavyanbank-stage1/section-shell -->

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

    private static function tariff_child_pattern(string $key): string {
        $map = self::tariff_child_map();
        if (!isset($map[$key])) {
            return '';
        }
        $item = $map[$key];
        $hero = self::self_closing('slavyanbank-stage1/hero-shell', [
            'kicker' => 'Тарифы банка',
            'title' => $item['title'],
            'text' => $item['heroText'],
            'actions' => [
                ['text' => 'К содержимому', 'url' => '#content', 'variant' => 'primary', 'newTab' => false],
                ['text' => 'Все тарифы', 'url' => '/tarify-banka-html/', 'variant' => 'outline', 'newTab' => false],
            ],
            'metaItems' => [],
        ]);

        $cards = [
            ['label' => $item['download']['label'], 'title' => $item['download']['title'], 'url' => $item['download']['url'], 'newTab' => true],
            ['label' => $item['view']['label'], 'title' => 'Открыть HTML-версию тарифа', 'url' => $item['view']['url'], 'newTab' => true],
        ];
        $cardList = self::self_closing('slavyanbank-stage1/tariff-card-list', ['items' => $cards]);

        return <<<HTML
<!-- wp:slavyanbank-stage1/section-shell -->
<section class="block"><div class="container">
{$hero}
</div></section>
<!-- /wp:slavyanbank-stage1/section-shell -->

<!-- wp:slavyanbank-stage1/section-shell {"variant":"dashv2","anchor":"content"} -->
<section class="block dashv2" id="content"><div class="container">
<!-- wp:slavyanbank-stage1/bento-layout -->
<div class="bento">
<!-- wp:slavyanbank-stage1/bento-card-shell -->
<div class="bento-card" style="padding:var(--s-4);position:relative">
<!-- wp:slavyanbank-stage1/prose-shell -->
<div class="prose"><div class="entry-content">
<!-- wp:core/heading {"level":3,"className":"kicker"} -->
<h3 class="wp-block-heading kicker">{$item['title']}</h3>
<!-- /wp:core/heading -->
<!-- wp:core/paragraph --><p>Паттерн миграции для маршрута <strong>{$item['slug']}</strong>. Legacy-наполнение уже уложено в новый визуальный слой и может быть дочищено вручную без пересборки layout.</p><!-- /wp:core/paragraph -->
{$cardList}
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
}

Slavyanbank_Reporting_Tariffs_Migration_Patterns::init();
