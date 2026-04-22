<?php
if (!defined('ABSPATH')) {
    exit;
}

const SB_ALPHA_ROUTE_VERSION_OPTION = 'sb_alpha_route_version';
const SB_ALPHA_ROUTE_VERSION = '2026.04.21.route-pages.1';

if (!defined('SB_PYTHON_ROUTE_VERSION_OPTION')) {
    define('SB_PYTHON_ROUTE_VERSION_OPTION', 'sb_python_route_version');
}

if (!defined('SB_PYTHON_ROUTE_VERSION')) {
    define('SB_PYTHON_ROUTE_VERSION', SB_ALPHA_ROUTE_VERSION);
}


function sb_alpha_route_aliases(): array
{
    return [
        'vakansii-html'          => 'vacancies',
        'vakansii.html'          => 'vacancies',
        'vakansii'               => 'vacancies',

        'napisat-v-bank-html'          => 'write-to-bank',
        'napisat-v-bank.html'          => 'write-to-bank',
        'napisat-v-bank'               => 'write-to-bank',

        'kontakty-html'          => 'contacts',
        'kontakty.html'          => 'contacts',
        'kontakty'               => 'contacts',

        'podderzhka-html'          => 'support',
        'podderzhka.html'          => 'support',
        'podderzhka'               => 'support',

        'recom_bezopasnost-html'          => 'security',
        'recom_bezopasnost.html'          => 'security',
        'recom_bezopasnost'               => 'security',
        'podderzhka-html/recom_bezopasnost-html'          => 'security',
        'podderzhka-html/recom_bezopasnost.html'          => 'security',
        'podderzhka-html/recom_bezopasnost'               => 'security',

        'obrashhenie-po-123-fz-html'          => 'appeal-123-fz',
        'obrashhenie-po-123-fz.html'          => 'appeal-123-fz',
        'obrashhenie-po-123-fz'               => 'appeal-123-fz',

        'covid19-html'          => 'covid19',
        'covid19.html'          => 'covid19',
        'covid19'               => 'covid19',

        'klient-bank-online-html'          => 'client-bank-online',
        'klient-bank-online.html'          => 'client-bank-online',
        'klient-bank-online'               => 'client-bank-online',

        'instrukcziya-po-rabote-v-sisteme-klient-bank-html'          => 'instruction',
        'instrukcziya-po-rabote-v-sisteme-klient-bank.html'          => 'instruction',
        'instrukcziya-po-rabote-v-sisteme-klient-bank'               => 'instruction',

        'chasto-zadavaemye-voprosy-html'          => 'faq',
        'chasto-zadavaemye-voprosy.html'          => 'faq',
        'chasto-zadavaemye-voprosy'               => 'faq',

        'regen-html'          => 'ecp-regeneration',
        'regen.html'          => 'ecp-regeneration',
        'regen'               => 'ecp-regeneration',

        'chastnym-liczam-html'          => 'private-persons',
        'chastnym-liczam.html'          => 'private-persons',
        'chastnym-liczam'               => 'private-persons',

        'otchetnost-html'          => 'reporting',
        'otchetnost.html'          => 'reporting',
        'otchetnost'               => 'reporting',

        'o-banke-slavyanbank-html/organy_upravlenya-html'          => 'governance',
        'o-banke-slavyanbank-html/organy_upravlenya.html'          => 'governance',
        'o-banke-slavyanbank-html/organy_upravlenya'               => 'governance',
        'organy_upravlenya-html'          => 'governance',
        'organy_upravlenya.html'          => 'governance',
        'organy_upravlenya'               => 'governance',

        'o-banke-slavyanbank-html/info_bank-html-html'          => 'info-bank-page',
        'o-banke-slavyanbank-html/info_bank-html.html'          => 'info-bank-page',
        'o-banke-slavyanbank-html/info_bank-html'               => 'info-bank-page',
        'info_bank-html-html'          => 'info-bank-page',
        'info_bank-html.html'          => 'info-bank-page',
        'info_bank-html'               => 'info-bank-page',
        'informaciya-banka-html'          => 'info-bank-page',
        'informaciya-banka.html'          => 'info-bank-page',
        'informaciya-banka'               => 'info-bank-page',

        'rekvizity-banka-html'          => 'requisites_bank',
        'rekvizity-banka.html'          => 'requisites_bank',
        'rekvizity-banka'               => 'requisites_bank',
        'o-banke-slavyanbank-html/rekvizity-banka-html'          => 'requisites_bank',
        'o-banke-slavyanbank-html/rekvizity-banka.html'          => 'requisites_bank',
        'o-banke-slavyanbank-html/rekvizity-banka'               => 'requisites_bank',

        'tarify-banka-html'          => 'tariffs',
        'tarify-banka.html'          => 'tariffs',
        'tarify-banka'               => 'tariffs',

        'yuridicheskim-liczam-html'          => 'legal-entities',
        'yuridicheskim-liczam.html'          => 'legal-entities',
        'yuridicheskim-liczam'               => 'legal-entities',

        'zapros-na-kreditovanie-msp-html'          => 'zapros-na-kreditovanie-msp',
        'zapros-na-kreditovanie-msp.html'          => 'zapros-na-kreditovanie-msp',
        'zapros-na-kreditovanie-msp'               => 'zapros-na-kreditovanie-msp',

        'valutny-kontrol-html'          => 'currency-control',
        'valutny-kontrol.html'          => 'currency-control',
        'valutny-kontrol'               => 'currency-control',

        'yuridicheskim-liczam-html/valutny-kontrol-html'          => 'currency-control',
        'yuridicheskim-liczam-html/valutny-kontrol.html'          => 'currency-control',
        'yuridicheskim-liczam-html/valutny-kontrol'               => 'currency-control',

        'obsluzivanie-schetov-rf-html'          => 'account-service',
        'obsluzivanie-schetov-rf.html'          => 'account-service',
        'obsluzivanie-schetov-rf'               => 'account-service',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf-html'          => 'account-service',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html'          => 'account-service',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf'               => 'account-service',


        'beznalichnye-raschety-html'          => 'cashless-payments',
        'beznalichnye-raschety.html'          => 'cashless-payments',
        'beznalichnye-raschety'               => 'cashless-payments',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety-html'          => 'cashless-payments',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety.html'          => 'cashless-payments',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety'               => 'cashless-payments',

        'nalichnye-raschety-html'          => 'cash-payments',
        'nalichnye-raschety.html'          => 'cash-payments',
        'nalichnye-raschety'               => 'cash-payments',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety-html'          => 'cash-payments',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety.html'          => 'cash-payments',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety'               => 'cash-payments',

        'pod-ft-fromu-html'          => 'aml-fatca',
        'pod-ft-fromu.html'          => 'aml-fatca',
        'pod-ft-fromu'               => 'aml-fatca',

        'obsluzivanie-valut-schetov-html'          => 'fx-account-service',
        'obsluzivanie-valut-schetov.html'          => 'fx-account-service',
        'obsluzivanie-valut-schetov'               => 'fx-account-service',
        'yuridicheskim-liczam-html/obsluzivanie-valut-schetov-html'          => 'fx-account-service',
        'yuridicheskim-liczam-html/obsluzivanie-valut-schetov.html'          => 'fx-account-service',
        'yuridicheskim-liczam-html/obsluzivanie-valut-schetov'               => 'fx-account-service',

        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom-html'          => 'payment-demands',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom.html'          => 'payment-demands',
        'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom'               => 'payment-demands',
        'platezhnye-trebovaniya-s-akczeptom-html'          => 'payment-demands',
        'platezhnye-trebovaniya-s-akczeptom.html'          => 'payment-demands',
        'platezhnye-trebovaniya-s-akczeptom'               => 'payment-demands',

        'kreditovanie-yuridicheskih-licz-html'          => 'business-lending',
        'kreditovanie-yuridicheskih-licz.html'          => 'business-lending',
        'kreditovanie-yuridicheskih-licz'               => 'business-lending',
        'yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz-html'          => 'business-lending',
        'yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz.html'          => 'business-lending',
        'yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz'               => 'business-lending',

        'kreditovanie-yuridicheskih-licz-html'          => 'business-deposits',
        'kreditovanie-yuridicheskih-licz.html'          => 'business-deposits',
        'kreditovanie-yuridicheskih-licz'               => 'business-deposits',
        'yuridicheskim-liczam-html/deposity-dlya-yur-lic-html'          => 'business-deposits',
        'yuridicheskim-liczam-html/deposity-dlya-yur-lic.html'          => 'business-deposits',
        'yuridicheskim-liczam-html/deposity-dlya-yur-lic'               => 'business-deposits',

        'tarif_privetstvenny-html'          => 'tariff_privetstvenny',
        'tarif_privetstvenny.html'          => 'tariff_privetstvenny',
        'tarif_privetstvenny'               => 'tariff_privetstvenny',
        'tarify-banka-html/tarif_privetstvenny.html-html'          => 'tariff_privetstvenny',
        'tarify-banka-html/tarif_privetstvenny.html.html'          => 'tariff_privetstvenny',
        'tarify-banka-html/tarif_privetstvenny.html'               => 'tariff_privetstvenny',

        'tarif_slavny-html'          => 'tariffs_slavny',
        'tarif_slavny.html'          => 'tariffs_slavny',
        'tarif_slavny'               => 'tariffs_slavny',
        'tarify-banka-html/tarif_slavny.html-html'          => 'tariffs_slavny',
        'tarify-banka-html/tarif_slavny.html.html'          => 'tariffs_slavny',
        'tarify-banka-html/tarif_slavny.html'               => 'tariffs_slavny',
    ];
}

function sb_alpha_request_path(): string
{
    $uri  = (string) ($_SERVER['REQUEST_URI'] ?? '/');
    $path = (string) parse_url($uri, PHP_URL_PATH);

    return trim($path, '/');
}

function sb_alpha_redirect_route_aliases(): void
{
    if (is_admin() || wp_doing_ajax() || wp_doing_cron()) {
        return;
    }

    $requested = sb_alpha_request_path();
    if ($requested === '') {
        return;
    }

    $aliases = sb_alpha_route_aliases();
    if (!isset($aliases[$requested])) {
        return;
    }

    $target = sb_alpha_url($aliases[$requested]);
    $targetPath = trim((string) parse_url($target, PHP_URL_PATH), '/');

    if ($targetPath === '' || $targetPath === $requested) {
        return;
    }

    wp_safe_redirect($target, 301, 'Slavyanbank Canonical');
    exit;
}
add_action('template_redirect', 'sb_alpha_redirect_route_aliases', 0);

function sb_alpha_route_definitions(): array
{
    static $routes = null;

    if (is_array($routes)) {
        return $routes;
    }

    $routes = [
        'info-bank-page' => [
            'path' => 'o-banke-slavyanbank-html/o-banke-slavyanbank-html-info_bank-html/',
            'title' => 'Информация банка - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-informaciya-banka.php',
            'page_context_slug' => 'informaciya-banka',
        ],
        'requisites_bank' => [
            'path' => 'o-banke-slavyanbank-html/rekvizity-banka-html',
            'title' => 'Реквизиты банка - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-rekvizity-banka.php',
            'page_context_slug' => 'requisites_bank',
        ],
        'governance' => [
            'path' => 'o-banke-slavyanbank-html/organy_upravlenya.html',
            'title' => 'Органы управления - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/o-banke-slavyanbank-html/organy_upravlenya.html/',
        ],
        'reporting' => [
            'path' => 'otchetnost-html',
            'title' => 'Отчетность - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-otchetnost.php',
            'page_context_slug' => 'otchetnost',
        ],
        'disclosur-regulatory' => [
            'path' => 'o-banke-html/info_bank-html/raskritie-informacii.html',
            'title' => 'Раскрытие информации - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/o-banke-html/info_bank-html/raskritie-informacii.html/',
        ],
        'notaries' => [
            'path' => 'informacziya-dlya-notariusov.html',
            'title' => 'Информация для нотариусов - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/informacziya-dlya-notariusov.html/',
        ],
        'novosti' => [
            'path' => 'novosti.html',
            'title' => 'Новости - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-novosti.php',
            'page_context_slug' => 'novosti',
        ],
        'tariffs' => [
            'path' => 'tarify-banka-html',
            'title' => 'Тарифы банка - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-tarify-banka.php',
            'page_context_slug' => 'tarify-banka',
        ],
        'tariffs_rub' => [
            'path' => 'tarify-banka-html/tarify_rf.html',
            'title' => 'Тарифы в валюте РФ - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/tarify-banka-html/tarify_rf.html/',
        ],
        'tariffs_slavny' => [
            'path' => 'tarify-banka-html/tarif_slavny',
            'title' => 'Тарифы «Славный» - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/tarify-banka-html/tarif_slavny.html/',
        ],
        'tariff_privetstvenny' => [
            'path' => 'tarify-banka-html/tarif_privetstvenny',
            'title' => 'Тарифы «Приветственный» - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/tarify-banka-html/tarif_privetstvenny.html/',
        ],
        'tariff-depositny' => [
            'path' => 'tarify-banka-html/tarif_depositny-html',
            'title' => 'Тарифы «Депозитный» - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/tarify-banka-html/tarif_depositny/',
        ],
        'tariffs-foreign-currency' => [
            'path' => 'tarify-banka-html/tarify_valuta-html',
            'title' => 'Тарифы в иностранной валюте - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/tarify-banka-html/tarify_valuta.html/',
        ],
        'legal-entities' => [
            'path' => 'yuridicheskim-liczam-html',
            'title' => 'Юридическим лицам - АО НКБ "СЛАВЯНБАНК"',
                        'template_file' => 'page-tarify-banka.php',
            'page_context_slug' => 'legal-entities',
        ],
        'business-deposits' => [
            'path' => 'yuridicheskim-liczam-html/deposity-dlya-yur-lic',
            'title' => 'Депозиты для юридических лиц - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/yuridicheskim-liczam-html/deposity-dlya-yur-lic.html/',
        ],
        'business-lending' => [
            'path' => 'yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz',
            'title' => 'Кредитование юридических лиц - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz.html/',
        ],
        'account-service' => [
            'path' => 'yuridicheskim-liczam-html/obsluzivanie-schetov-rf-html',
            'title' => 'Обслуживание счетов в валюте РФ - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html/',
        ],
        'fx-account-service' => [
            'path' => 'yuridicheskim-liczam-html/obsluzivanie-valut-schetov',
            'title' => 'Обслуживание счетов в иностранной валюте - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-valut-schetov.html/',
        ],
        'currency-control' => [
            'path' => 'yuridicheskim-liczam-html/valutny-kontrol-html',
            'title' => 'Валютный контроль - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-valutny-kontrol.php',
        ],
        'aml-fatca' => [
            'path' => 'pod-ft-fromu',
            'title' => 'ПОД/ФТ/ФРОМУ/FATCA - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/pod-ft-fromu.html/',
        ],
        'crs' => [
            'path' => 'crs-obmen-s-fns.html',
            'title' => 'CRS — обмен с ФНС - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/crs-obmen-s-fns.html/',
        ],
        'cashless-payments' => [
            'path' => 'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety',
            'title' => 'Безналичные расчеты - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety.html/',
        ],
        'cash-payments' => [
            'path' => 'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety',
            'title' => 'Наличные расчеты - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-nalichnye-raschety.php',
            'page_context_slug' => 'nalichnye-raschety',
        ],
        'payment-demands' => [
            'path' => 'yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom',
            'title' => 'Платежные требования с акцептом - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom.html/',
        ],
        'private-persons' => [
            'path' => 'chastnym-liczam.html',
            'title' => 'Частным лицам - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/chastnym-liczam.html/',
        ],
        'client-bank-online' => [
            'path' => 'klient-bank-online-html',
            'title' => 'Клиент-Банк - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-klient-bank-online.php',
			          'page_context_slug' => 'client-bank-online',
        ],
        'instruction' => [
            'path' => 'podderzhka-html/instrukcziya-po-rabote-v-sisteme-klient-bank.html',
            'title' => 'Инструкция по работе в системе - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/podderzhka-html/instrukcziya-po-rabote-v-sisteme-klient-bank.html/',
        ],
        'faq' => [
            'path' => 'podderzhka-html/chasto-zadavaemye-voprosy.html',
            'title' => 'Часто задаваемые вопросы - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/podderzhka-html/chasto-zadavaemye-voprosy.html/',
        ],
        'ecp-regeneration' => [
            'path' => 'podderzhka-html/regen.html',
            'title' => 'Перегенерация ЭЦП - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/podderzhka-html/regen.html/',
        ],
        'support' => [
            'path' => 'podderzhka.html',
            'title' => 'Поддержка - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-podderzhka.php',
            'page_context_slug' => 'podderzhka',
        ],
        'security' => [
            'path' => 'podderzhka/recom_bezopasnost',
            'title' => 'Рекомендации по безопасности - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/podderzhka/recom_bezopasnost/',

        ],
        'appeal-123-fz' => [
            'path' => 'obrashhenie-po-123-fz',
            'title' => 'Обращение по 123-ФЗ - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/obrashhenie-po-123-fz.html/',
        ],
        'covid19' => [
            'path' => 'covid19.html',
            'title' => 'COVID‑19 - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/covid19.html/',
        ],
        'contacts' => [
            'path' => 'kontakty-html',
            'title' => 'Контакты - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-kontakty.php',
            'page_context_slug' => 'kontakty',
        ],
        'write-to-bank' => [
            'path' => 'forma-obratnoj-svyazi.html',
            'title' => 'Написать в банк - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'template_file',
            'template_file' => 'page-napisat-v-bank.php',
            'page_context_slug' => 'napisat-v-bank',
        ],
        'vacancies' => [ //+
            'path' => 'vakansii-html',
            'title' => 'Вакансии - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/vakansii.html/',
        ],
        'zapros-na-otkrytie-raschetnogo-scheta' => [
            'path' => 'zapros-na-otkrytie-raschetnogo-scheta.html',
            'title' => 'Запрос на открытие расчетного счета - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/zapros-na-otkrytie-raschetnogo-scheta.html/',
        ],
        'zapros-na-kreditovanie-msp' => [
            'path' => 'zapros-na-kreditovanie-msp.html',
            'title' => 'Запрос на кредитование МСП - АО НКБ "СЛАВЯНБАНК"',
            'mode' => 'external_redirect',
            'external_url' => 'https://slavbank.ru/zapros-na-kreditovanie-msp.html/',
        ],
    ];

    return $routes;
}


function sb_wp_page_url(string $slug, string $fallback = '#'): string
{
    $page = get_page_by_path($slug, OBJECT, 'page');
    return $page ? get_permalink($page) : $fallback;
}
function sb_alpha_route_definition(string $route_key): ?array
{
    $routes = sb_alpha_route_definitions();

    return $routes[$route_key] ?? null;
}

function sb_alpha_route_url(string $route_key): string
{
    $route = sb_alpha_route_definition($route_key);
    if (!is_array($route)) {
        return home_url('/');
    }

    $path = trim((string) ($route['path'] ?? ''), '/');
    if ($path === '') {
        return home_url('/');
    }

    return home_url('/' . $path . '/');
}

function sb_alpha_route_current_key(): string
{
    $key = get_query_var('sb_alpha_route');
    if (!is_string($key) || $key === '') {
        $key = get_query_var('sb_python_route');
    }

    return is_string($key) ? $key : '';
}

function sb_alpha_route_current(): ?array
{
    $key = sb_alpha_route_current_key();
    if ($key === '') {
        return null;
    }

    $route = sb_alpha_route_definition($key);
    if (!is_array($route)) {
        return null;
    }

    $route['key'] = $key;

    return $route;
}

function sb_alpha_route_partial_file(string $partial): string
{
    $partial = trim($partial);
    $candidate = get_theme_file_path('template-parts/route-partials/' . $partial . '.php');

    return is_file($candidate)
        ? $candidate
        : get_theme_file_path('template-parts/python/' . $partial . '.php');
}

function sb_alpha_route_current_partial(): string
{
    $route_key = sb_alpha_route_current_key();
    if ($route_key !== '' && function_exists('sb_alpha_route_local_partial_for_route')) {
        $partial = sb_alpha_route_local_partial_for_route($route_key);
        if ($partial !== '') {
            return $partial;
        }
    }

    $route = sb_alpha_route_current();

    return is_array($route) ? (string) ($route['partial'] ?? '') : '';
}

function sb_alpha_route_has_local_partial(string $route_key): bool
{
    return function_exists('sb_alpha_route_local_partial_for_route')
        && sb_alpha_route_local_partial_for_route($route_key) !== '';
}

function sb_alpha_route_register_rewrites(): void
{
    foreach (sb_alpha_route_definitions() as $route_key => $route) {
        $path = trim((string) ($route['path'] ?? ''), '/');
        if ($path === '' || $path === 'search') {
            continue;
        }

        add_rewrite_rule(
            '^' . preg_quote($path, '#') . '/?$',
            'index.php?sb_alpha_route=' . $route_key,
            'top'
        );
    }
}
add_action('init', 'sb_alpha_route_register_rewrites', 20);

function sb_alpha_route_add_query_vars(array $vars): array
{
    $vars[] = 'sb_alpha_route';
    $vars[] = 'sb_python_route';

    return $vars;
}
add_filter('query_vars', 'sb_alpha_route_add_query_vars');

function sb_alpha_route_store_version(): void
{
    update_option(SB_ALPHA_ROUTE_VERSION_OPTION, SB_ALPHA_ROUTE_VERSION, false);
}

function sb_alpha_route_maybe_flush_rewrites(): void
{
    $stored = (string) get_option(SB_ALPHA_ROUTE_VERSION_OPTION, '');

    if ($stored === SB_ALPHA_ROUTE_VERSION) {
        return;
    }

    sb_alpha_route_register_rewrites();
    flush_rewrite_rules(false);
    sb_alpha_route_store_version();
}
add_action('admin_init', 'sb_alpha_route_maybe_flush_rewrites');

function sb_alpha_route_flush_rewrites_on_switch(): void
{
    sb_alpha_route_register_rewrites();
    flush_rewrite_rules(false);
    sb_alpha_route_store_version();
}
add_action('after_switch_theme', 'sb_alpha_route_flush_rewrites_on_switch');

function sb_alpha_route_prime_page_context(string $slug): void
{
    $slug = trim($slug, '/');
    if ($slug === '') {
        return;
    }

    $page = get_page_by_path($slug);
    if (!$page instanceof WP_Post) {
        return;
    }

    global $post, $wp_query;

    $post = $page;
    setup_postdata($post);

    if ($wp_query instanceof WP_Query) {
        $wp_query->post = $page;
        $wp_query->posts = [$page];
        $wp_query->queried_object = $page;
        $wp_query->queried_object_id = (int) $page->ID;
        $wp_query->is_page = true;
        $wp_query->is_singular = true;
    }
}

function sb_alpha_route_template_redirect(): void
{
    if (is_admin() || wp_doing_ajax() || wp_doing_cron()) {
        return;
    }

    $route = sb_alpha_route_current();
    if (!is_array($route)) {
        return;
    }

    $route_key = (string) ($route['key'] ?? '');
    if ($route_key !== '' && sb_alpha_route_has_local_partial($route_key)) {
        return;
    }

    if (($route['mode'] ?? '') === 'external_redirect' && !empty($route['external_url'])) {
        wp_redirect((string) $route['external_url'], 302, 'Slavyanbank Route');
        exit;
    }
}
add_action('template_redirect', 'sb_alpha_route_template_redirect', 1);

function sb_alpha_route_template_include(string $template): string
{
    $route = sb_alpha_route_current();
    if (!is_array($route)) {
        return $template;
    }

    if (!empty($route['page_context_slug'])) {
        sb_alpha_route_prime_page_context((string) $route['page_context_slug']);
    }

    $mode = (string) ($route['mode'] ?? '');
    $route_key = (string) ($route['key'] ?? '');

    if ($route_key !== '' && sb_alpha_route_has_local_partial($route_key)) {
        $candidate = get_theme_file_path('page-route.php');
        if (is_file($candidate)) {
            return $candidate;
        }
    }

    if ($mode === 'template_file' && !empty($route['template_file'])) {
        $candidate = get_theme_file_path((string) $route['template_file']);
        if (is_file($candidate)) {
            return $candidate;
        }
    }

    if ($mode === 'route_partial' || $mode === 'python_partial') {
        $candidate = get_theme_file_path('page-route.php');
        if (is_file($candidate)) {
            return $candidate;
        }
    }

    return $template;
}
add_filter('template_include', 'sb_alpha_route_template_include', 30);

function sb_alpha_route_document_title_parts(array $parts): array
{
    $route = sb_alpha_route_current();
    if (!is_array($route) || empty($route['title'])) {
        return $parts;
    }

    $parts['title'] = (string) $route['title'];

    return $parts;
}
add_filter('document_title_parts', 'sb_alpha_route_document_title_parts', 40);

function sb_alpha_route_form_markup(string $route_key): string
{
    $shortcode = apply_filters('sb_alpha_route_form_shortcode_' . $route_key, '');
    if (!is_string($shortcode) || trim($shortcode) === '') {
        $shortcode = apply_filters('sb_python_form_shortcode_' . $route_key, '');
    }

    if (!is_string($shortcode) || trim($shortcode) === '') {
        return '';
    }

    return sb_alpha_apply_shortcode_markup($shortcode);
}

// Backward compatibility for older templates, filters and cached rewrite rules.
function sb_python_route_definitions(): array
{
    return sb_alpha_route_definitions();
}

function sb_python_route_definition(string $route_key): ?array
{
    return sb_alpha_route_definition($route_key);
}

function sb_python_route_url(string $route_key): string
{
    return sb_alpha_route_url($route_key);
}

function sb_python_current_route_key(): string
{
    return sb_alpha_route_current_key();
}

function sb_python_current_route(): ?array
{
    return sb_alpha_route_current();
}

function sb_python_partial_file(string $partial): string
{
    return sb_alpha_route_partial_file($partial);
}

function sb_python_register_rewrites(): void
{
    sb_alpha_route_register_rewrites();
}

function sb_python_add_query_vars(array $vars): array
{
    return sb_alpha_route_add_query_vars($vars);
}

function sb_python_store_route_version(): void
{
    sb_alpha_route_store_version();
}

function sb_python_maybe_flush_rewrites(): void
{
    sb_alpha_route_maybe_flush_rewrites();
}

function sb_python_flush_rewrites_on_switch(): void
{
    sb_alpha_route_flush_rewrites_on_switch();
}

function sb_python_prime_page_context(string $slug): void
{
    sb_alpha_route_prime_page_context($slug);
}

function sb_python_template_redirect(): void
{
    sb_alpha_route_template_redirect();
}

function sb_python_template_include(string $template): string
{
    return sb_alpha_route_template_include($template);
}

function sb_python_document_title_parts(array $parts): array
{
    return sb_alpha_route_document_title_parts($parts);
}

function sb_python_form_markup(string $route_key): string
{
    return sb_alpha_route_form_markup($route_key);
}
