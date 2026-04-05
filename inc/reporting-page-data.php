<?php
if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('sb_alpha_reporting_kind_from_url')) {
    function sb_alpha_reporting_kind_from_url(string $url): string
    {
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

if (!function_exists('sb_alpha_get_reporting_interim_sections')) {
    function sb_alpha_get_reporting_interim_sections(): array
    {
        return [
            [
                'year' => '2025',
                'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 2025 год',
                'items' => [
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2025 г.',
                        'meta' => '(опубликовано 16.05.2025г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/otchet-publ-i-2025.pdf',
                    ],
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2025 г.',
                        'meta' => '(опубликовано 07.08.2025г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/otchet-publ-ii-2025.pdf',
                    ],
                    [
                        'title' => 'Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2025 г.',
                        'meta' => '(опубликовано 12.11.2025г.)',
                        'url' => 'https://slavbank.ru/wp-content/uploads/otchet-publ-9-2025.pdf',
                    ],
                ],
            ],
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
