# Slavyanbank Alpha — full code for wave 1

## `style.css`

```css
/*
Theme Name: Slavyanbank Alpha
Theme URI: https://example.invalid/slavyanbank-alpha
Author: OpenAI
Description: Wave 1 classic theme for safe frontend integration of the Slavyanbank Django source.
Version: 0.1.0
Requires at least: 6.4
Tested up to: 6.8
Requires PHP: 7.4
Text Domain: slavyanbank-alpha
*/

```

## `functions.php`

```php
<?php
if (!defined('ABSPATH')) {
    exit;
}

function sb_alpha_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support(
        'html5',
        ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'script', 'style']
    );
}
add_action('after_setup_theme', 'sb_alpha_setup');

function sb_alpha_asset(string $relative = ''): string
{
    $relative = ltrim($relative, '/');

    return trailingslashit(get_template_directory_uri()) . 'assets/' . $relative;
}

function sb_alpha_document_title_parts(array $parts): array
{
    if (is_front_page()) {
        $parts['title'] = 'О БАНКЕ - СЛАВЯНБАНК - Новгородский коммерческий банк';
    } elseif (is_page('kontakty')) {
        $parts['title'] = 'КОНТАКТЫ - АО НКБ "СЛАВЯНБАНК" в Великом Новгороде';
    } elseif (is_page('otchetnost')) {
        $parts['title'] = 'Отчетность - АО НКБ "СЛАВЯНБАНК"';
    }

    return $parts;
}
add_filter('document_title_parts', 'sb_alpha_document_title_parts');

function sb_alpha_enqueue_assets(): void
{
    $version = wp_get_theme()->get('Version') ?: '0.1.0';
    $base = get_template_directory_uri();

    wp_enqueue_style('sb-alpha-theme', get_stylesheet_uri(), [], $version);

    $styles = [
        'sb-alpha-tokens' => 'assets/css/tokens.css',
        'sb-alpha-motion' => 'assets/css/motion.css',
        'sb-alpha-figure' => 'assets/css/figure.css',
        'sb-alpha-footer' => 'assets/css/footer.css',
        'sb-alpha-form' => 'assets/css/form.css',
        'sb-alpha-header' => 'assets/css/header.css',
        'sb-alpha-menu-prod' => 'assets/css/menu-prod.css',
        'sb-alpha-layout' => 'assets/css/layout.css',
    ];

    foreach ($styles as $handle => $path) {
        wp_enqueue_style($handle, $base . '/' . $path, ['sb-alpha-theme'], $version);
    }

    wp_enqueue_script('sb-alpha-motion', $base . '/assets/js/motion.js', [], $version, true);
}
add_action('wp_enqueue_scripts', 'sb_alpha_enqueue_assets');

function sb_alpha_local_page_url(string $slug, string $fallback): string
{
    $slug = trim($slug, '/');
    $page = get_page_by_path($slug);

    if ($page instanceof WP_Post && $page->post_status === 'publish') {
        $permalink = get_permalink($page);
        if (is_string($permalink) && $permalink !== '') {
            return $permalink;
        }
    }

    return $fallback;
}

function sb_alpha_routes(): array
{
    return [
        'home' => home_url('/'),
        'info-bank-page' => 'https://slavbank.ru/o-banke-slavyanbank-html/info_bank-html.html/',
        'requisites_bank' => 'https://slavbank.ru/rekvizity-banka.html/',
        'governance' => 'https://slavbank.ru/o-banke-slavyanbank-html/organy_upravlenya.html/',
        'reporting' => sb_alpha_local_page_url('otchetnost', 'https://slavbank.ru/otchetnost.html/'),
        'disclosur-regulatory' => 'https://slavbank.ru/o-banke-html/info_bank-html/raskritie-informacii.html/',
        'notaries' => 'https://slavbank.ru/informacziya-dlya-notariusov.html/',
        'novosti' => 'https://slavbank.ru/novosti.html/',
        'tariffs' => 'https://slavbank.ru/tarify-banka.html/',
        'tariffs_rub' => 'https://slavbank.ru/tarify-banka-html/tarify_rf.html/',
        'tariffs_slavny' => 'https://slavbank.ru/tarify-banka-html/tarif_slavny.html/',
        'tariff_privetstvenny' => 'https://slavbank.ru/tarify-banka-html/tarif_privetstvenny.html/',
        'tariff-depositny' => 'https://slavbank.ru/tarify-banka-html/tarif_depositny.html/',
        'tariffs-foreign-currency' => 'https://slavbank.ru/tarify-banka-html/tarify_valuta.html/',
        'legal-entities' => 'https://slavbank.ru/yuridicheskim-liczam.html/',
        'business-deposits' => 'https://slavbank.ru/yuridicheskim-liczam-html/deposity-dlya-yur-lic.html/',
        'business-lending' => 'https://slavbank.ru/yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz.html/',
        'account-service' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf.html/',
        'fx-account-service' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-valut-schetov.html/',
        'currency-control' => 'https://slavbank.ru/yuridicheskim-liczam-html/valutny-kontrol.html/',
        'aml-fatca' => 'https://slavbank.ru/pod-ft-fromu.html/',
        'crs' => 'https://slavbank.ru/crs-obmen-s-fns.html/',
        'cashless-payments' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/beznalichnye-raschety.html/',
        'cash-payments' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/nalichnye-raschety.html/',
        'payment-demands' => 'https://slavbank.ru/yuridicheskim-liczam-html/obsluzivanie-schetov-rf/platezhnye-trebovaniya-s-akczeptom.html/',
        'private-persons' => 'https://slavbank.ru/chastnym-liczam.html/',
        'client-bank-online' => 'https://slavbank.ru/klient-bank-online.html/',
        'instruction' => 'https://slavbank.ru/podderzhka-html/instrukcziya-po-rabote-v-sisteme-klient-bank.html/',
        'faq' => 'https://slavbank.ru/podderzhka-html/chasto-zadavaemye-voprosy.html/',
        'ecp-regeneration' => 'https://slavbank.ru/podderzhka-html/regen.html/',
        'support' => 'https://slavbank.ru/podderzhka.html/',
        'security' => 'https://slavbank.ru/podderzhka-html/recom_bezopasnost.html/',
        'appeal-123-fz' => 'https://slavbank.ru/obrashhenie-po-123-fz.html/',
        'covid19' => 'https://slavbank.ru/covid19.html/',
        'contacts' => sb_alpha_local_page_url('kontakty', 'https://slavbank.ru/kontakty.html/'),
        'write-to-bank' => 'https://slavbank.ru/forma-obratnoj-svyazi.html/',
        'vacancies' => 'https://slavbank.ru/vakansii.html/',
        'client-bank-login' => 'https://ved.slavbank.ru/',
        'remote-support' => 'https://www.ammyy.com/ru/',
    ];
}

function sb_alpha_url(string $key): string
{
    $routes = sb_alpha_routes();

    return $routes[$key] ?? home_url('/');
}

```

## `header.php`

```php
<!doctype html>
<html <?php language_attributes(); ?> data-a11y="0">
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <link rel="icon" href="<?php echo esc_url(sb_alpha_asset('img/icon192.png')); ?>" sizes="32x32" />
  <link rel="icon" href="<?php echo esc_url(sb_alpha_asset('img/icon192.png')); ?>" sizes="192x192" />
  <meta name="msapplication-TileImage" content="<?php echo esc_url(sb_alpha_asset('img/icon192.png')); ?>">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip" href="#main">Перейти к содержимому</a>

<?php get_template_part('template-parts/site', 'menu'); ?>

<div class="overlay" id="searchOverlay" role="dialog" aria-modal="true" aria-label="Поиск по сайту">
  <div class="modal card pad">
    <div class="row" style="align-items: center">
      <div style="font-weight: 600">Поиск</div>
      <div class="spacer"></div>
      <button class="btn" id="searchClose">Закрыть</button>
    </div>

    <div class="searchbox" style="margin-top: 12px">
      <span aria-hidden="true">🔎</span>
      <input
        id="searchInput"
        placeholder="Например: валютный контроль, SWIFT, тарифы, реквизиты…"
        autocomplete="off"
      />
      <span class="kbd">Enter</span>
    </div>

    <div id="searchHints" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px">
      <button class="btn soft" type="button" data-hint="Экспертиза контрактов">Экспертиза контрактов</button>
      <button class="btn soft" type="button" data-hint="Международные расчёты (SWIFT)">SWIFT</button>
      <button class="btn soft" type="button" data-hint="Валютный контроль">Валютный контроль</button>
      <button class="btn soft" type="button" data-hint="Тарифы банка">Тарифы</button>
      <button class="btn soft" type="button" data-hint="Реквизиты">Реквизиты</button>
    </div>
  </div>
</div>

```

## `footer.php`

```php
<?php get_template_part('template-parts/site', 'footer'); ?>
<?php wp_footer(); ?>
</body>
</html>

```

## `front-page.php`

```php
<?php get_header(); ?>

<main id="main" class="container">
  
  

  <section
    class="block reveal"
    data-reveal="scale"
    style="padding-top: var(--s-4)"
  >
    <div class="hero-wrap card" style="padding: 0">
      <div
        class="slider"
        data-slider
        tabindex="0"
        aria-label="Слайдер сценариев банка ()"
      >
        <div class="slider-track" data-slider-track>
          <article class="slide" data-slide aria-hidden="true">
            <div class="slide-grid">
              <div>
                <div class="kicker">Валютный контроль</div>
                <h2>Сопровождение валютного контроля без лишней бюрократии.</h2>
                <p>
                  Разъяснения по пакету документов, статусам, срокам и
                  требованиям. Поддержка на каждом этапе.
                </p>
                <div
                  class="row"
                  style="margin-top: var(--s-4); flex-wrap: wrap"
                >
                  <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">Как это работает</a>
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('support')); ?>">Поддержка</a>
                  <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">Объявления</a>
                </div>
                
              </div>
              <div data-ill>
                <svg
                  class="hero-ill"
                  width="900"
                  height="560"
                  viewBox="0 0 900 560"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Абстрактная иллюстрация: валютный контроль и безопасность"
                >
                  <defs>
                    <linearGradient id="ctl_g1" x1="0" y1="0" x2="1" y2="1">
                      <stop
                        offset="0"
                        stop-color="#006780"
                        stop-opacity=".95"
                      />
                      <stop
                        offset="1"
                        stop-color="#9fd5d5"
                        stop-opacity=".85"
                      />
                    </linearGradient>
                    <linearGradient id="ctl_g2" x1="1" y1="0" x2="0" y2="1">
                      <stop
                        offset="0"
                        stop-color="#d0b8a3"
                        stop-opacity=".80"
                      />
                      <stop
                        offset="1"
                        stop-color="#918078"
                        stop-opacity=".55"
                      />
                    </linearGradient>
                    <filter
                      id="ctl_blur"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feGaussianBlur stdDeviation="12" />
                    </filter>
                  </defs>

                  <circle
                    cx="220"
                    cy="140"
                    r="120"
                    fill="url(#ctl_g2)"
                    opacity=".16"
                    filter="url(#ctl_blur)"
                  />
                  <circle
                    cx="740"
                    cy="420"
                    r="150"
                    fill="url(#ctl_g1)"
                    opacity=".14"
                    filter="url(#ctl_blur)"
                  />

                  <path
                    class="silk s1"
                    d="M50 420 C160 340, 230 520, 360 430 S 560 240, 690 320 S 820 490, 870 420"
                    fill="none"
                    stroke="#006780"
                    stroke-width="6"
                    stroke-linecap="round"
                    opacity=".52"
                  />
                  <path
                    class="silk s2"
                    d="M70 300 C200 230, 280 390, 420 320 S 620 160, 760 260 S 860 360, 890 300"
                    fill="none"
                    stroke="#9fd5d5"
                    stroke-width="5"
                    stroke-linecap="round"
                    opacity=".76"
                  />
                  <path
                    class="silk s3"
                    d="M100 210 C220 150, 300 260, 420 220 S 610 80, 760 160 S 860 240, 890 210"
                    fill="none"
                    stroke="#d0b8a3"
                    stroke-width="4"
                    stroke-linecap="round"
                    opacity=".66"
                  />

                  <g transform="translate(300 110)">
                    <path
                      d="M150 0 C240 40, 300 50, 300 120 C300 230, 210 320, 150 350 C90 320, 0 230, 0 120 C0 50, 60 40, 150 0 Z"
                      fill="#fff"
                      opacity=".86"
                      stroke="rgba(2,6,23,.12)"
                      stroke-width="2"
                    />
                    <path
                      d="M86 170 L132 216 L216 128"
                      fill="none"
                      stroke="#006780"
                      stroke-width="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      opacity=".72"
                    />
                    <path
                      d="M52 78 C96 100, 204 100, 248 78"
                      fill="none"
                      stroke="rgba(0,103,128,.18)"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                  </g>

                  <g transform="translate(610 90)">
                    <rect
                      x="0"
                      y="0"
                      rx="22"
                      ry="22"
                      width="250"
                      height="320"
                      fill="#fff"
                      opacity=".84"
                      stroke="rgba(2,6,23,.12)"
                      stroke-width="2"
                    />
                    <rect
                      x="30"
                      y="54"
                      rx="10"
                      ry="10"
                      width="190"
                      height="16"
                      fill="#006780"
                      opacity=".18"
                    />
                    <rect
                      x="30"
                      y="90"
                      rx="10"
                      ry="10"
                      width="160"
                      height="14"
                      fill="#006780"
                      opacity=".14"
                    />
                    <rect
                      x="30"
                      y="136"
                      rx="10"
                      ry="10"
                      width="190"
                      height="14"
                      fill="#006780"
                      opacity=".12"
                    />
                    <rect
                      x="30"
                      y="168"
                      rx="10"
                      ry="10"
                      width="168"
                      height="14"
                      fill="#006780"
                      opacity=".10"
                    />
                    <rect
                      x="30"
                      y="214"
                      rx="14"
                      ry="14"
                      width="190"
                      height="54"
                      fill="url(#ctl_g1)"
                      opacity=".18"
                      stroke="rgba(0,103,128,.20)"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </article>
          <article class="slide" data-slide aria-hidden="false">
            <div class="slide-grid">
              <div>
                <div class="kicker">ИП и юридическим лицам</div>
                <h2>
                  РКО и обслуживание бизнеса — быстро, понятно, с поддержкой.
                </h2>
                <p>
                  Счета, платежи, выписки, справки. Сценарная навигация и
                  быстрый доступ в Клиент‑Банк.
                </p>
                <div
                  class="row"
                  style="margin-top: var(--s-4); flex-wrap: wrap"
                >
                  <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('account-service')); ?>">Открыть счёт</a>
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>">Тарифы</a>
                  <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Консультация</a>
                </div>
                
              </div>
              <div data-ill>
                <svg
                  class="hero-ill"
                  width="900"
                  height="560"
                  viewBox="0 0 900 560"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Абстрактная иллюстрация: платежи и документы"
                >
                  <defs>
                    <linearGradient id="rko_g1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stop-color="#006780" stop-opacity=".9" />
                      <stop
                        offset="1"
                        stop-color="#9fd5d5"
                        stop-opacity=".85"
                      />
                    </linearGradient>
                    <linearGradient id="rko_g2" x1="1" y1="0" x2="0" y2="1">
                      <stop
                        offset="0"
                        stop-color="#d0b8a3"
                        stop-opacity=".85"
                      />
                      <stop
                        offset="1"
                        stop-color="#918078"
                        stop-opacity=".55"
                      />
                    </linearGradient>
                    <filter
                      id="rko_blur"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feGaussianBlur stdDeviation="12" />
                    </filter>
                  </defs>

                  <circle
                    cx="180"
                    cy="130"
                    r="110"
                    fill="url(#rko_g1)"
                    opacity=".18"
                    filter="url(#rko_blur)"
                  />
                  <circle
                    cx="740"
                    cy="420"
                    r="140"
                    fill="url(#rko_g2)"
                    opacity=".16"
                    filter="url(#rko_blur)"
                  />

                  <path
                    class="silk s1"
                    d="M40 330 C160 250, 250 420, 360 340 S 560 180, 690 240 S 820 380, 860 320"
                    fill="none"
                    stroke="#006780"
                    stroke-width="6"
                    stroke-linecap="round"
                    opacity=".55"
                  />
                  <path
                    class="silk s2"
                    d="M70 380 C200 300, 260 500, 420 420 S 620 220, 760 310 S 840 420, 880 360"
                    fill="none"
                    stroke="#9fd5d5"
                    stroke-width="5"
                    stroke-linecap="round"
                    opacity=".75"
                  />
                  <path
                    class="silk s3"
                    d="M90 260 C210 200, 300 340, 420 280 S 610 120, 760 200 S 860 310, 880 260"
                    fill="none"
                    stroke="#d0b8a3"
                    stroke-width="4"
                    stroke-linecap="round"
                    opacity=".65"
                  />

                  <g transform="translate(565 120)">
                    <rect
                      x="0"
                      y="0"
                      rx="22"
                      ry="22"
                      width="260"
                      height="320"
                      fill="#fff"
                      opacity=".85"
                      stroke="rgba(2,6,23,.12)"
                      stroke-width="2"
                    />
                    <rect
                      x="36"
                      y="62"
                      rx="10"
                      ry="10"
                      width="188"
                      height="16"
                      fill="#006780"
                      opacity=".22"
                    />
                    <rect
                      x="36"
                      y="98"
                      rx="10"
                      ry="10"
                      width="146"
                      height="14"
                      fill="#006780"
                      opacity=".16"
                    />
                    <rect
                      x="36"
                      y="146"
                      rx="10"
                      ry="10"
                      width="188"
                      height="14"
                      fill="#006780"
                      opacity=".14"
                    />
                    <rect
                      x="36"
                      y="176"
                      rx="10"
                      ry="10"
                      width="166"
                      height="14"
                      fill="#006780"
                      opacity=".12"
                    />
                    <g transform="translate(36 230)" opacity=".92">
                      <rect
                        x="0"
                        y="0"
                        rx="14"
                        ry="14"
                        width="188"
                        height="54"
                        fill="url(#rko_g1)"
                        opacity=".22"
                        stroke="rgba(0,103,128,.25)"
                      />
                      <path
                        d="M24 27 H124"
                        stroke="#006780"
                        stroke-width="4"
                        stroke-linecap="round"
                        opacity=".7"
                      />
                      <path
                        d="M124 18 L144 27 L124 36"
                        fill="none"
                        stroke="#006780"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        opacity=".7"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </article>

          <article class="slide" data-slide aria-hidden="true">
            <div class="slide-grid">
              <div>
                <div class="kicker">Внешнеэкономическая деятельность</div>
                <h2>Экспертиза контрактов и международные расчёты.</h2>
                <p>
                  Помогаем снизить риски сделки: условия, документы, расчёты,
                  сопровождение операций в валюте.
                </p>
                <div
                  class="row"
                  style="margin-top: var(--s-4); flex-wrap: wrap"
                >
                  <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">ВЭД‑сервисы</a>
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('aml-fatca')); ?>">Документы</a>
                  <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Связаться</a>
                </div>
                
              </div>
              <div data-ill>
                <svg
                  class="hero-ill"
                  width="900"
                  height="560"
                  viewBox="0 0 900 560"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Абстрактная иллюстрация: ВЭД и международные расчёты"
                >
                  <defs>
                    <linearGradient id="ved_g1" x1="0" y1="0" x2="1" y2="1">
                      <stop
                        offset="0"
                        stop-color="#006780"
                        stop-opacity=".95"
                      />
                      <stop
                        offset="1"
                        stop-color="#0ea5b7"
                        stop-opacity=".85"
                      />
                    </linearGradient>
                    <linearGradient id="ved_g2" x1="1" y1="0" x2="0" y2="1">
                      <stop
                        offset="0"
                        stop-color="#9fd5d5"
                        stop-opacity=".85"
                      />
                      <stop
                        offset="1"
                        stop-color="#d0b8a3"
                        stop-opacity=".55"
                      />
                    </linearGradient>
                    <filter
                      id="ved_blur"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feGaussianBlur stdDeviation="12" />
                    </filter>
                  </defs>

                  <circle
                    cx="210"
                    cy="420"
                    r="150"
                    fill="url(#ved_g2)"
                    opacity=".16"
                    filter="url(#ved_blur)"
                  />
                  <circle
                    cx="720"
                    cy="160"
                    r="130"
                    fill="url(#ved_g1)"
                    opacity=".16"
                    filter="url(#ved_blur)"
                  />

                  <g transform="translate(150 120)">
                    <circle
                      cx="210"
                      cy="160"
                      r="150"
                      fill="#fff"
                      opacity=".82"
                      stroke="rgba(2,6,23,.10)"
                      stroke-width="2"
                    />
                    <circle
                      cx="210"
                      cy="160"
                      r="110"
                      fill="none"
                      stroke="rgba(0,103,128,.18)"
                      stroke-width="2"
                    />
                    <circle
                      cx="210"
                      cy="160"
                      r="70"
                      fill="none"
                      stroke="rgba(0,103,128,.14)"
                      stroke-width="2"
                    />
                    <path
                      class="silk s1"
                      d="M60 160 C120 80, 300 80, 360 160 C300 240, 120 240, 60 160 Z"
                      fill="none"
                      stroke="#006780"
                      stroke-width="6"
                      stroke-linecap="round"
                      opacity=".55"
                    />
                    <path
                      class="silk s2"
                      d="M90 110 C150 150, 270 150, 330 110"
                      fill="none"
                      stroke="#9fd5d5"
                      stroke-width="5"
                      stroke-linecap="round"
                      opacity=".8"
                    />
                    <path
                      class="silk s3"
                      d="M90 210 C150 170, 270 170, 330 210"
                      fill="none"
                      stroke="#d0b8a3"
                      stroke-width="4"
                      stroke-linecap="round"
                      opacity=".7"
                    />
                  </g>

                  <path
                    class="silk s1"
                    d="M430 160 C520 120, 620 120, 710 160"
                    fill="none"
                    stroke="#006780"
                    stroke-width="6"
                    stroke-linecap="round"
                    opacity=".50"
                  />
                  <path
                    class="silk s2"
                    d="M430 220 C520 180, 640 180, 760 240"
                    fill="none"
                    stroke="#9fd5d5"
                    stroke-width="5"
                    stroke-linecap="round"
                    opacity=".70"
                  />
                  <path
                    class="silk s3"
                    d="M430 290 C540 260, 650 260, 820 320"
                    fill="none"
                    stroke="#d0b8a3"
                    stroke-width="4"
                    stroke-linecap="round"
                    opacity=".62"
                  />

                  <g transform="translate(585 320)">
                    <rect
                      x="0"
                      y="0"
                      rx="22"
                      ry="22"
                      width="280"
                      height="170"
                      fill="#fff"
                      opacity=".86"
                      stroke="rgba(2,6,23,.12)"
                      stroke-width="2"
                    />
                    <path
                      d="M44 88 L76 118 L132 58"
                      fill="none"
                      stroke="#006780"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      opacity=".75"
                    />
                    <path
                      d="M170 60 H236"
                      stroke="rgba(0,103,128,.35)"
                      stroke-width="5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M170 96 H250"
                      stroke="rgba(0,103,128,.28)"
                      stroke-width="5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M170 132 H232"
                      stroke="rgba(0,103,128,.22)"
                      stroke-width="5"
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </article>
        </div>

        <div class="slider-ui">
          <div class="dots" aria-label="Навигация по слайдам">
            <button
              class="dot"
              data-dot
              aria-current="true"
              aria-label="Слайд 1"
            ></button>
            <button
              class="dot"
              data-dot
              aria-current="false"
              aria-label="Слайд 2"
            ></button>
            <button
              class="dot"
              data-dot
              aria-current="false"
              aria-label="Слайд 3"
            ></button>
          </div>

          <div class="progress" data-progress aria-hidden="true"><i></i></div>

          <div class="row" style="gap: 8px">
            <button
              class="btn icon outline"
              type="button"
              data-prev
              aria-label="Предыдущий слайд"
            >
              ←
            </button>
            <button
              class="btn icon outline"
              type="button"
              data-next
              aria-label="Следующий слайд"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="grid3">
    <a class="tile reveal" data-reveal="scale" href="<?php echo esc_url(sb_alpha_url('write-to-bank') . '#form'); ?>">
      <div class="badge">Кредитование</div>
      <h3>
        Отправить заявку (МСП)
        <span class="arrow">→</span>
      </h3>
      <p>Быстрый переход на форму заявки.</p>
    </a>

    <a class="tile reveal" data-reveal="scale" href="<?php echo esc_url(sb_alpha_url('client-bank-login')); ?>" target="_blank" rel="noopener">
      <div class="badge">Клиент‑Банк</div>
      <h3>Вход в систему <span class="arrow">→</span></h3>
      <p>Переход на страницу дистанционного обслуживания.</p>
    </a>
    
    <div class="bento-card" id="support" style="padding: 0; position: relative">
      <div class="support-card">
        <div class="support-ico" aria-hidden="true">☎</div>
        <div>
          <div style="font-weight: 600">Свяжитесь с банком</div>
          <div class="row" style="gap: 10px; flex-wrap: wrap; margin-top: 10px">
            <a
              class="btn glass pill"
              style="color: var(--c-primary-700)"
              href="tel:8162665247"
              >Позвонить</a
            >
            <a
              class="btn glass pill"
              style="color: var(--c-primary-700)"
              href="mailto:nkb@slavbank.ru"
              >Написать</a
            >
          </div>
          <div class="muted" style="margin-top: 10px">
            <a href="mailto:ved@slavbank.ru">ved@slavbank.ru</a>
          </div>
          <div class="muted" style="margin-top: 10px">
            <a href="mailto:ved@slavbank.ru">+7(495)198-99-51</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="block dashv2" id="services">
    <div class="bento">
      <div class="bento-card bento-hero reveal" data-reveal="scale">
        <div class="about-grid">
          <div>
            <div class="kicker">Основная специализация</div>
            <h3 style="margin: 6px 0 10px">
              Основная специализация АО НКБ «СЛАВЯНБАНК» – комплексное
              банковское обслуживание индивидуальных предпринимателей и
              юридических лиц, в том числе внешнеэкономическая деятельность:
              экспертиза контрактов, международные расчёты и валютный контроль .
            </h3>

            <details class="reveal" data-reveal="left" style="margin-top: 14px">
              <summary style="cursor: pointer; font-weight: 600">
                АО НКБ «СЛАВЯНБАНК» И РЕЛИГИОЗНЫЕ УЧРЕЖДЕНИЯ
              </summary>
              <div style="margin-top: 6px">
                <p class="muted" style="margin: 10px 0 0; font-weight: 300">
                  Банк вот уже несколько лет реализует проект по приему
                  безналичных пожертвований религиозными учреждениями с помощью
                  специальных банковских терминалов и персонализированных
                  QR-кодов.
                </p>
                <p class="muted" style="margin: 10px 0 0; font-weight: 300">
                  На данный момент Банк сотрудничает с отдельными епархиями и
                  приходами Русской Православной Церкви, предоставляя комплекс
                  банковских услуг по приему пожертвований прихожан в
                  безналичной форме и расчетно-кассовому обслуживанию приходов.
                </p>
                <p class="muted" style="margin: 10px 0 0; font-weight: 300">
                  При этом, целью проекта является не только упрощение
                  взаимодействия с прихожанами в условиях все большей
                  цифровизации финансовых отношений, но и создание финансовых
                  решений, максимально учитывающих конфессиональные особенности.
                </p>
                <p class="muted" style="margin: 10px 0 0; font-weight: 300">
                  АО НКБ «СЛАВЯНБАНК» предлагает бесплатную установку
                  терминалов, стабильно высокие ставки на остаток денежных
                  средств на расчетном счете, а также на срочных депозитах.
                </p>
              </div>
            </details>
          </div>

          <div class="about-media">
            <div class="media-card">
              <img
                src="<?php echo esc_url(sb_alpha_asset('img/main_about.png')); ?>"
                alt="Иллюстрация: международные расчёты и ВЭД"
                loading="lazy"
              />
              <div class="media-overlay">
                
                <div
                  style="
                    font-weight: 600;
                    color: white;
                    font-size: 16px;
                    text-shadow: black 1px 1px 1px;
                  "
                >
                  Экспертиза контрактов · валютный контроль
                </div>
              </div>
            </div>

            
          </div>
        </div>
        <div class="after-grid">
          <div class="" style="line-height: 1.7">
            <strong style="font-weight: 640"
              >АКЦИОНЕРНОЕ ОБЩЕСТВО НОВГОРОДСКИЙ КОММЕРЧЕСКИЙ БАНК
              «СЛАВЯНБАНК»</strong
            >
            <ul class="facts">
              <li>
                Образован в 1989 году как первый самостоятельный региональный
                банк.
              </li>
              <li>
                Основная задача банка —  развитие экономики Новгородской
                области. В настоящее время — это стабильно работающий
                региональный коммерческий банк. Основными акционерами банка
                являются физические лица.
              </li>
              <li>
                За годы деятельности у банка сложились устойчивые
                корреспондентские отношения со многими банками.
              </li>
              <li>
                Перевод платежей в любой регион страны осуществляется в течение
                одного дня.
              </li>
            </ul>
          </div>

          <div
            class="row"
            style="
              gap: 10px;
              flex-wrap: wrap;
              margin-top: 12px;
              flex-direction: column;
              align-items: start;
            "
          >
            <span class="pill mob-nowrap"
              ><span class="badge">✓</span
              ><span class="muted">Надежность, проверенная временем</span></span
            ><span class="pill mob-nowrap"
              ><span class="badge">✓</span
              ><span class="muted">Выгодные условия сотрудничества</span></span
            ><span class="pill mob-nowrap"
              ><span class="badge">✓</span
              ><span class="muted">Качественное обслуживание</span></span
            ><span class="pill mob-nowrap"
              ><span class="badge">✓</span
              ><span class="muted"
                >Индивидуальный подход к каждому клиенту</span
              ></span
            >
          </div>

          <div style="margin-top: 14px">
            <div class="kicker">Банк оказывает услуги</div>
            <div class="svc-grid">
              <a
                class="svc-chip"
                href="<?php echo esc_url(sb_alpha_url('account-service')); ?>"
                target="_blank"
                rel="noopener"
                >Расчётно-кассовое обслуживание клиентов
                <span aria-hidden="true">→</span></a
              >
              <a
                class="svc-chip"
                href="<?php echo esc_url(sb_alpha_url('business-lending')); ?>"
                target="_blank"
                rel="noopener"
                >Предоставление краткосрочных и инвестиционных кредитов
                <span aria-hidden="true">→</span></a
              >
              <a
                class="svc-chip"
                href="<?php echo esc_url(sb_alpha_url('fx-account-service')); ?>"
                target="_blank"
                rel="noopener"
                >Операции на внутреннем и международном валютном рынке,
                международные расчёты <span aria-hidden="true">→</span></a
              >
              <span class="svc-chip ghost"
                >Ведение паспортов сделок, конверсионные безналичные
                операции,</span
              >
              <span class="svc-chip ghost"
                >Финансовые и банковские гарантии,</span
              >
              <span class="svc-chip ghost"
                >Подтверждение о принятии средств в депозит, простые векселя,
                гарантии по контрактам, аккредитивы,</span
              >
              <span class="svc-chip ghost">Открытие кредитных линий,</span>
              <span class="svc-chip ghost"
                >Принятие  активов на ответственное банковское  хранение,
                размещение активов и др.</span
              >
            </div>
          </div>
        </div>
      </div>
      <?php get_template_part('template-parts/home', 'stack'); ?>
    </div>
  </section>

  
  

  
  

  
  

  
  

  
  

  
  
</main>

<?php get_footer(); ?>

```

## `page.php`

```php
<?php get_header(); ?>

<main id="main" class="container">
  <section class="block">
    <div class="hero-wrap" style="padding: var(--s-5);">
      <h1 style="margin:0 0 12px;"><?php the_title(); ?></h1>
      <div class="card pad">
        <?php
        while (have_posts()) :
            the_post();
            the_content();
        endwhile;
        ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>

```

## `page-kontakty.php`

```php
<?php get_header(); ?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Контакты</h1>
            <p class="muted" style="max-width:78ch;">Как связаться с банком: телефон, электронная почта, адрес и режим
              работы.</p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержимому</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('support')); ?>" class="mono">Поддержка</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>" class="mono">Клиент‑банк</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>" class="mono">Реквизиты</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">

      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">

          <div class="alert">
            <div class="alert-dot" aria-hidden="true"></div>
            <div>
              <div style="font-weight:600;">Контакты банка</div>
              <div class="muted" style="margin-top:4px;">Ниже — основные каналы связи, адрес и режим работы. Для
                обращений используйте форму «Написать в банк».</div>
            </div>
          </div>

          <div class="contact-grid" style="margin-top: var(--s-4);">
            <div class="contact-card">
              <div class="kicker">Телефон</div>
              <div class="contact-main"><a href="tel:78162665247">8162665247</a></div>
              <div class="muted">Единый номер банка</div>
              <div class="kv-actions" style="margin-top:10px;">
                <button class="copy mini" type="button" data-copy="8162665247">Копировать</button>
                <a class="btn outline" href="tel:78162665247">Позвонить</a>
              </div>
            </div>

            <div class="contact-card">
              <div class="kicker">Электронная почта</div>
              <div class="contact-main"><a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a></div>
              <div class="muted">Для общих вопросов и документов</div>
              <div class="kv-actions" style="margin-top:10px;">
                <button class="copy mini" type="button" data-copy="nkb@slavbank.ru">Копировать</button>
                <a class="btn outline" href="mailto:nkb@slavbank.ru">Написать</a>
              </div>
            </div>

            <div class="contact-card">
              <div class="kicker">Адрес</div>
              <div class="contact-main">г. Великий Новгород, ул. Черемнова-Конюхова, дом 12</div>
              <div class="muted">Головной офис</div>
              <div class="kv-actions" style="margin-top:10px;">
                <button class="copy mini" type="button"
                  data-copy="г. Великий Новгород, ул. Черемнова-Конюхова, дом 12">Копировать</button>
                <a class="btn outline"
                  href="https://yandex.ru/maps/?text=г. Великий Новгород, ул. Черемнова-Конюхова, дом 12"
                  target="_blank" rel="noopener">Открыть в Яндекс Картах</a>
                <a class="btn outline"
                  href="https://www.google.com/maps/search/?api=1&query=г. Великий Новгород, ул. Черемнова-Конюхова, дом 12"
                  target="_blank" rel="noopener">Открыть в Google Maps</a>
              </div>
            </div>

            <div class="contact-card contact-accent">
              <div class="kicker">Режим работы</div>
              <div class="contact-sub">
                <div class="row" style="justify-content:space-between; gap:10px; flex-wrap:wrap;">
                  <span class="badge">С клиентами</span>
                  <span class="mono">пн-чт с 9.00 — 17.00 (касса до 16.30), пт с 9.00 до 16.00 (касса до 15.30), без
                    обеда, выходные — суббота, воскресенье</span>
                </div>
                <div class="row" style="justify-content:space-between; gap:10px; flex-wrap:wrap; margin-top:10px;">
                  <span class="badge">Поддержка</span>
                  <span class="mono">с 08:30 до 17:30 (пт до 16:30), обед 13:00–14:00; выходные — сб, вс</span>
                </div>
              </div>
              <div class="kv-actions" style="margin-top:12px;">
                <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
                <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('support')); ?>">Поддержка</a>
              </div>
            </div>
          </div>

          <div class="map-shell" style="margin-top: var(--s-4);">
            <div class="map-card">
              <div class="kicker">Как нас найти</div>
              <h3 style="margin: 8px 0 10px;">г. Великий Новгород, ул. Черемнова-Конюхова, дом 12</h3>

              <div class="row" style="margin-top:12px; flex-wrap:wrap;">
                <a class="btn primary"
                  href="https://yandex.ru/maps/?text=г. Великий Новгород, ул. Черемнова-Конюхова, дом 12"
                  target="_blank" rel="noopener">Маршрут в Яндекс Картах →</a>
                <a class="btn outline"
                  href="https://www.google.com/maps/search/?api=1&query=г. Великий Новгород, ул. Черемнова-Конюхова, дом 12"
                  target="_blank" rel="noopener">Маршрут в Google Maps →</a>
              </div>
            </div>
            <div class="map-visual" aria-hidden="true"></div>
          </div>

        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

  <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>Готово</div>
</main>

<?php get_footer(); ?>

```

## `page-otchetnost.php`

```php
<?php get_header(); ?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5)">
        <div class="row" style="align-items: flex-start; gap: var(--s-4); flex-wrap: wrap">
          <div style="min-width: 280px; flex: 1 1 520px">
            <div class="kicker">Информация банка</div>
            <h1 style="margin: 8px 0 10px">Отчетность</h1>
            <p class="muted" style="max-width: 78ch">
              Бухгалтерская (финансовая) отчетность раскрывается в ограниченном
              объёме в соответствии с Решением Совета директоров Банка России от
              24 декабря 2024 года.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap: wrap">
              <a class="btn primary" href="#content">Содержание</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self: flex-start">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>" class="mono">Реквизиты</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>">Информация банка</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">

      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position: relative">
                        <h1
                class="kicker">
                <strong>ОТЧЕТНОСТЬ АО НКБ «СЛАВЯНБАНК»</strong>
              </h1>
                            <p
                class="has-text-align-center has-gray-color has-text-color has-link-color wp-elements-40198fbd7911d996bea1992cd987118b">
                <strong>ГОДОВАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ</strong>
              </p>
          <div class="doc-shelf">
            <?php
            $annual_reports = [
                [
                    'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2024 год.',
                    'footer' => '(Опубликовано 11.04.2025г. Утверждена на годовом ОСА 10.04.2025г.)',
                    'url' => 'https://slavbank.ru/wp-content/uploads/azo_-2024_nmm_slavyanbank.pdf',
                ],
                [
                    'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2023 год.',
                    'footer' => '(Опубликовано 12.03.2024г. Утверждена на годовом ОСА 02.04.2024г.)',
                    'url' => 'https://slavbank.ru/wp-content/uploads/otchet_2023_publ.pdf',
                ],
                [
                    'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2022 год.',
                    'footer' => '(Опубликовано 29.03.2023г. Утверждена на годовом ОСА 20.04.2023г.)',
                    'url' => 'https://slavbank.ru/wp-content/uploads/otchet2022.pdf',
                ],
                [
                    'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2020 год.',
                    'footer' => '(Опубликовано 29.03.2021г. Утверждена на годовом ОСА 22.04.2021г.)',
                    'url' => 'https://slavbank.ru/wp-content/uploads/otchet2020.pdf',
                ],
                [
                    'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2019 год.',
                    'footer' => '(Опубликовано 26.03.2020г. Утверждена на годовом ОСА 16.04.2020г.)',
                    'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/report2019.pdf',
                ],
                [
                    'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2018 год.',
                    'footer' => '(Утверждена на годовом ОСА 18.04.2019г) (Опубликовано 28.03.2019г.)',
                    'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/report2018.pdf',
                ],
                [
                    'title' => 'Финансовая отчетность по МСФО за 2017 год.',
                    'footer' => '(Опубликовано 12.04.2018г.)',
                    'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/msfo2017.pdf',
                ],
                [
                    'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2017 год.',
                    'footer' => '(Опубликовано 12.04.2018г.)',
                    'url' => 'https://slavbank.ru/wp-content/uploads/2021/03/report2017.pdf',
                ],
            ];
            foreach ($annual_reports as $item) :
            ?>
            <a class="doc-card" href="<?php echo esc_url($item['url']); ?>" target="_blank" rel="noopener">
              <span class="doc-ext">PDF</span>
              <div class="doc-body">
                <div class="doc-title"><?php echo esc_html($item['title']); ?></div>
                <div style="font-size: 10px" class="muted">
                  <?php echo esc_html($item['footer']); ?>
                </div>
              </div>

              <span class="doc-arrow">→</span>
            </a>
            <?php endforeach; ?>
          </div>

          <div class="prose">
            <div class="entry-content">
              

              <p class="has-text-align-right"></p>

              <p></p>

              <h3
                class="kicker">
                <strong>ПРОМЕЖУТОЧНАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ,</strong>
                </h3>
                <h4 class="kicker">
                  <strong>ПОКАЗАТЕЛИ
                  ДЕЯТЕЛЬНОСТИ БАНКА</strong>
                </h2>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-6094be1a884f101d248f9383e4fde2d5 is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2025
                    год</strong>
                </summary>
                <figure class="wp-block-table is-style-stripes">
                  <table class="has-fixed-layout">
                    <tbody>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet-publ-i-2025.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Промежуточная бухгалтерская (финансовая)
                              отчетность за I квартал 2025 г.</strong><br /><sub>(опубликовано 16.05.2025г.)</sub></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet-publ-ii-2025.pdf"><strong>Промежуточная
                              бухгалтерская (финансовая)
                              отчетность за I полугодие 2025 г.</strong><br /><sub>(опубликовано-07.08.2025г.)</sub></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet-publ-9-2025.pdf"><strong>Промежуточная
                              бухгалтерская (финансовая)
                              отчетность за 9 месяцев 2025 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/otchet-publ-ii-2025.pdf"><sub>(опубликовано-12.11.2025г.)</sub></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
              </details>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-36bfd15810dc3d28eb02eb981aa728cc is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2024
                    год</strong>
                </summary>
                <p></p>

                <figure class="wp-block-table is-style-stripes">
                  <table class="has-fixed-layout">
                    <tbody>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet_publ-1-24-1.pdf"><strong><u>Промежуточная
                                бухгалтерская (финансовая)
                                отчетность за I квартал 2024 г.</u></strong><br /><sub>(опубликовано
                              16.05.2024г.)</sub></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/na-sajt-otchet-2-2024-publ.pdf"><strong>Промежуточная
                              бухгалтерская (финансовая)
                              отчетность за I полугодие 2024 г.</strong><br /><sub>(опубликовано 09.08.2024г.)</sub></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet-publ-9-2024.pdf"><strong>Промежуточная
                              бухгалтерская (финансовая)
                              отчетность за 9 месяцев 2024 г.</strong><br /><sub>(опубликовано 08.11.2024г.)</sub></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>

                <p></p>

                <p></p>
              </details>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-1c0cbaf2f381b6c793a3227c14c7ed14 is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2023
                    год</strong>
                </summary>
                <p></p>

                <figure class="wp-block-table is-style-stripes">
                  <table class="has-fixed-layout">
                    <tbody>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet-i-2023-for-publ.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Промежуточная бухгалтерская (финансовая)
                              отчетность за I квартал 2023 г.</strong><br /><sub>(опубликовано 15.05.2023г.)</sub></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet-6-2023-publ.pdf" target="_blank"
                            rel="noreferrer noopener"><strong><u>Промежуточная бухгалтерская (финансовая)
                                отчетность за I полугодие 2023 г.</u></strong><br /><sub>(опубликовано
                              02.08.2023г.)</sub></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/publ-otchet-9-2023.pdf"><strong><u>Промежуточная
                                бухгалтерская (финансовая)
                                отчетность за 9 месяцев 2023 г.</u></strong><br /><sub>(опубликовано
                              07.11.2023г.)</sub></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>

                <p></p>

                <p></p>
              </details>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-29cde331b4598194bb67c11ac475a8e9 is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2022
                    год</strong>
                </summary>
                <p></p>

                <figure class="wp-block-table is-style-stripes">
                  <table class="has-fixed-layout">
                    <tbody>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pocaz_01012022.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.01.2022 г.</strong><br /><sub>дата
                              размещения 18.01.2022г.</sub></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pocaz_01022022.pdf"><strong>Показатели на
                              01.02.2022 г.</strong><br /><sub>дата размещения 09.02.2022г.</sub>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center"></td>
                      </tr>
                    </tbody>
                  </table>
                </figure>

                <p></p>

                <p></p>
              </details>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-389ec5414216c11d23133fcef6fd05fa is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2021
                    год</strong>
                </summary>
                <p></p>

                <figure class="wp-block-table is-style-stripes">
                  <table class="has-navy-blue-color has-text-color">
                    <tbody>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pr_pokaz_01012021.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Предварительные показатели на 01.01.2021
                              г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pr_pokaz_01012021.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения</sub> <sub>18.01.2021</sub></a>&nbsp;&nbsp;
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01022021.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.02.2021 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pokaz_01022021.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения 17.02.2021</sub></a>&nbsp;
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokaz_01032021.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.03.2021 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pokaz_01032021.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения 10.03.2021&nbsp;&nbsp;</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pocaz_01042021.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.04.2021 г.</strong><br /><sub>дата
                              размещения 08.04.2021г.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pocaz_01052021.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.05.2021 г.</strong><br /><sub>дата
                              размещения 12.05.2021г.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <strong><a href="https://slavbank.ru/wp-content/uploads/otchet-1-2021.pdf" target="_blank"
                              rel="noreferrer noopener"><strong>Промежуточная бухгалтерская (финансовая)
                                отчетность за I квартал 2021 г.</strong><br /></a></strong><a
                            href="https://slavbank.ru/wp-content/uploads/otchet-1-2021.pdf" target="_blank"
                            rel="noreferrer noopener"><sub>(опубликовано 12.05.2021г.)&nbsp;&nbsp;</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pocaz_01062021.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.06.2021 г.</strong><br /><sub>дата
                              размещения 07.06.2021г</sub></a><a
                            href="https://slavbank.ru/wp-content/uploads/pocaz_01052021.xls"><sub>.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokazateli-na-1.07.2021-1.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.07.2021 г.</strong><br /><sub>дата
                              размещения 08.07.2021г</sub></a><a
                            href="https://slavbank.ru/wp-content/uploads/pocaz_01052021.xls"><sub>.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <strong><a href="https://slavbank.ru/wp-content/uploads/otchet-2-2021.pdf" target="_blank"
                              rel="noreferrer noopener">Промежуточная бухгалтерская (финансовая)
                              отчетность за I полугодие 2021 г.<br /></a></strong><sub><a
                              href="https://slavbank.ru/wp-content/uploads/otchet-2-2021.pdf">(опубликовано
                              30.07.2021г.)</a></sub>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pocaz_01082021.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.08.2021 г.</strong><br /><sub>дата
                              размещения 10.08.2021г.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokaz_01092021.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.09.2021 г.</strong><br /><sub>дата
                              размещения 08.09.2021г.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokaz_01102021.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.10.2021 г.</strong><br /><sub>дата
                              размещения 12.10.2021г.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet-3-2021.pdf" target="_blank"
                            rel="noreferrer noopener"><strong><u>Промежуточная бухгалтерская (финансовая)
                                отчетность за 9 месяцев 2021 г.</u></strong><br /><sub>(опубликовано
                              10.11.2021г.)&nbsp;&nbsp;</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokaz_01112021.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.11.2021 г.</strong><br /><sub>дата
                              размещения 15.11.2021г.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokaz_01122021.pdf" target="_blank"
                            rel="noreferrer noopener">
                            <strong>Показатели на 01.12.2021 г.</strong><br /><sub>дата размещения
                              09.12.2021г.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </figure>

                <p></p>

                <p></p>
              </details>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-c72bfe4d7d46303c55a244e13cddbea0 is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2020
                    год</strong>
                </summary>
                <p></p>

                <figure class="wp-block-table is-style-stripes">
                  <table class="has-navy-blue-color has-text-color">
                    <tbody>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pr_pokaz_01012020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Предварительные показатели на
                              01.01.2020г.</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/pr_pokaz_01012020.xls" target="_blank"
                              rel="noreferrer noopener">дата размещения 15.01.2020г.</a>&nbsp;</sub>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokaz_01022020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.02.2020 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pokaz_01022020.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения 14.02.2020</sub></a>&nbsp;
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01032020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.03.2020 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pokaz_01032020.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения 10.03.2020</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01042020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.04.2020 г.</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/pokaz_01042020.xls" target="_blank"
                              rel="noreferrer noopener">дата размещения 13.04.2020</a>&nbsp;</sub>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokaz_01052020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.05.2020 г.</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/pokaz_01052020.xls" target="_blank"
                              rel="noreferrer noopener">дата&nbsp;размещения 13.05.2020</a>&nbsp;</sub>&nbsp;
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/2021/03/otchet04-2020.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Промежуточная бухгалтерская (финансовая)
                              отчетность за I квартал 2020 года&nbsp;</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/2021/03/otchet04-2020.pdf" target="_blank"
                              rel="noreferrer noopener">(опубликовано 18.05.2020г)</a>&nbsp;</sub>&nbsp;
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01072020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.07.2020 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pokaz_01072020.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения 15.07.2020</sub></a>&nbsp;
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/2021/03/1h-2020.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Промежуточная бухгалтерская (финансовая)
                              отчетность за I полугодие 2020 года</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/2021/03/1-2018.pdf" target="_blank"
                            rel="noreferrer noopener"><sub>(опубликовано 29.07.2020г)&nbsp;&nbsp;</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01082020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.08.2020 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pokaz_01082020.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения&nbsp;26.08.2020</sub></a>&nbsp;
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01092020.xlss" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.09.2020 г.</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/pokaz_01092020.xlss" target="_blank"
                              rel="noreferrer noopener">дата размещения 08.09.2020</a>&nbsp;</sub>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01102020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.10.2020 г.</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/pokaz_01102020.xls" target="_blank"
                              rel="noreferrer noopener">дата размещения 15.10.2020</a>&nbsp;&nbsp;</sub>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/2021/03/pbo9m2020.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Промежуточная бухгалтерская (финансовая)
                              отчетность за 9 месяцев 2020 г.</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/2021/03/pbo9m2020.pdf" target="_blank"
                              rel="noreferrer noopener">(опубликовано 28.10.2020г.)</a>&nbsp;&nbsp;</sub>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01112020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.11.2020 г.</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/pokaz_01112020.xls" target="_blank"
                              rel="noreferrer noopener">дата размещения 13.11.2020</a>&nbsp;&nbsp;</sub>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01122020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.12.2020 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pokaz_01122020.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения 14.12.2020</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </figure>

                <p></p>
              </details>

              <p></p>
            </div>
          </div>
        </div>
        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>

```

## `index.php`

```php
<?php get_header(); ?>

<main id="main" class="container">
  <section class="block">
    <div class="hero-wrap" style="padding: var(--s-5);">
      <h1 style="margin:0 0 12px;"><?php the_title(); ?></h1>
      <div class="card pad">
        <?php
        while (have_posts()) :
            the_post();
            the_content();
        endwhile;
        ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>

```

## `template-parts/site-menu.php`

```php
<div class="topbar reveal" data-reveal="scale">
  <div class="container row" style="flex-wrap: wrap">
    <div class="pill pill--topbar">
      <span class="badge">Контакты</span>
      <a href="tel:8162665247" class="mono">(8162) 665‑247</a>
      <span class="muted">·</span>
      <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>
      <span class="muted">·</span>
      <a href="mailto:ved@slavbank.ru">ved@slavbank.ru</a>
    </div>

    <div class="spacer"></div>

    <div class="row" style="flex-wrap: wrap">
      <button
        class="btn ghost"
        id="a11yBtn"
        aria-pressed="false"
        title="Режим доступности: крупнее шрифт и выше контраст"
      >
        Aa · Доступность
      </button>
      <button class="btn glass" id="searchOpen" aria-haspopup="dialog" aria-controls="searchOverlay">
        Поиск
      </button>
    </div>
  </div>
</div>

<header
  class="header reveal"
  data-reveal="scale"
  data-mega-root
  data-menu-variant="prod"
  data-mega-mobile="drilldown"
>
  <div class="container row" style="gap:0px;">
    <div class="brand" style="margin-right: 10px;">
      <a href="<?php echo esc_url(sb_alpha_url('home')); ?>">
        <img src="<?php echo esc_url(sb_alpha_asset('img/logo2.png')); ?>" alt="СЛАВЯНБАНК" width="100%" />
      </a>
    </div>

    <nav aria-label="Основное меню">
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('home')); ?>" data-mega="about" aria-expanded="false">О банке</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>" aria-expanded="false">Новости</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>" data-mega="tarif" aria-expanded="false">Тарифы банка</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('legal-entities')); ?>" data-mega="buisnes" aria-expanded="false">Юридическим лицам</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('private-persons')); ?>" aria-expanded="false">Частным лицам</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>" data-mega="client-bank" aria-expanded="false">Клиент-банк</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('support')); ?>" data-mega="support" aria-expanded="false">Поддержка</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>" data-mega="contacts" aria-expanded="false">Контакты</a>
    </nav>

    <div class="spacer"></div>

    <button class="btn menu-btn" type="button" data-mega-btn aria-label="Открыть меню" aria-expanded="false">
      ☰ Меню
    </button>

    <a
      style="width: 180px; margin-left: 10px;"
      class="btn primary clientbank-cta"
      href="<?php echo esc_url(sb_alpha_url('client-bank-login')); ?>"
      title="Переход в систему дистанционного обслуживания"
      target="_blank"
      rel="noopener"
    >
      Клиент‑Банк →
    </a>
  </div>

  <div class="mega-backdrop" data-mega-backdrop aria-hidden="true"></div>

  <div class="mega card" data-mega-panel role="dialog" aria-label="Разделы сайта">
    <div class="header-grid">
      <div class="mega-mhead" data-mega-mobile-head>
        <button class="btn ghost mega-back" type="button" data-mega-mobile-back aria-label="Назад">←</button>
        <div class="mega-mobile-title" data-mega-mobile-title></div>
        <button class="btn ghost mega-close" type="button" data-mega-close aria-label="Закрыть меню">✕</button>
      </div>

      <div class="mega-mobile-root" data-mega-mobile-root></div>

      <div data-mega-links style="display: grid; gap: 6px">
        <div class="mega-group" data-mega-group="about">
          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Информация банка</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Реквизиты банка</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('governance')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Органы управления</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('reporting')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Отчетность</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('disclosur-regulatory')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Раскрытие информации для регулятивных целей</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('notaries')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Информация для нотариусов</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div class="mega-group" data-mega-group="tarif" hidden>
          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('tariffs_rub')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Тарифы по операциям в валюте РФ</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('tariffs_slavny')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Тарифы «Славный»</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('tariff_privetstvenny')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Тарифы «Приветственный»</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('tariff-depositny')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Тарифы «Депозитный»</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('tariffs-foreign-currency')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Тарифы по операциям в иностранной валюте</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div class="mega-group" data-mega-group="buisnes" hidden>
          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('business-deposits')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Депозиты для юридических лиц</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('business-lending')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Кредитование юридических лиц</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <details class="mega-item">
            <summary class="mega-link">
              <span class="mega-ic" aria-hidden="true">◈</span>
              <span class="mega-meta"><strong>Обслуживание счетов в валюте РФ</strong><small>↳</small></span>
              <span class="mega-arrow" aria-hidden="true">▾</span>
            </summary>
            <div class="mega-sub">
              <a class="mega-sublink" href="<?php echo esc_url(sb_alpha_url('cashless-payments')); ?>"><span aria-hidden="true">↳</span> Безналичные расчеты</a>
              <a class="mega-sublink" href="<?php echo esc_url(sb_alpha_url('cash-payments')); ?>"><span aria-hidden="true">↳</span> Наличные расчеты</a>
              <a class="mega-sublink" href="<?php echo esc_url(sb_alpha_url('payment-demands')); ?>"><span aria-hidden="true">↳</span> Платежные требования с акцептом</a>
            </div>
          </details>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('fx-account-service')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Обслуживание счетов в иностранной валюте</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Валютный контроль</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('aml-fatca')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>ПОД/ФТ/ФРОМУ/FATCA</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('crs')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>CRS — обмен с ФНС</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('client-bank-login')); ?>" target="_blank" rel="noopener">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>ВЭД</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div class="mega-group" data-mega-group="client-bank" hidden>
          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('instruction')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Инструкция по работе в системе</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('faq')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Часто задаваемые вопросы</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('ecp-regeneration')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Перегенерация ЭЦП</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div class="mega-group" data-mega-group="support" hidden>
          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('remote-support')); ?>" target="_blank" rel="noopener">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Удаленное управление</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('security')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Рекомендации по безопасности</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('appeal-123-fz')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Обращение по 123‑ФЗ</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('covid19')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>COVID‑19</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div class="mega-group" data-mega-group="contacts" hidden>
          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Написать в банк</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('vacancies')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Вакансии</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>

```

## `template-parts/site-footer.php`

```php
<footer class="footI">
  <div class="container">
    <div class="sitemap">
      <div class="sitemapCol">
        <div class="kicker">О банке</div>
        <a href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>">Информация банка</a>
        <a href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>">Реквизиты</a>
        <a href="<?php echo esc_url(sb_alpha_url('governance')); ?>">Органы управления</a>
        <a href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">Новости</a>
      </div>
      <div class="sitemapCol">
        <div class="kicker">Бизнес</div>
        <a href="<?php echo esc_url(sb_alpha_url('legal-entities')); ?>">Юридическим лицам</a>
        <a href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">Валютный контроль</a>
        <a href="<?php echo esc_url(sb_alpha_url('business-deposits')); ?>">Депозиты</a>
        <a href="<?php echo esc_url(sb_alpha_url('business-lending')); ?>">Кредитование</a>
      </div>
      <div class="sitemapCol">
        <div class="kicker">Тарифы</div>
        <a href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>">Тарифы банка</a>
        <a href="<?php echo esc_url(sb_alpha_url('tariffs_rub')); ?>">Операции в валюте РФ</a>
        <a href="<?php echo esc_url(sb_alpha_url('tariffs-foreign-currency')); ?>">Иностранная валюта</a>
        <a href="<?php echo esc_url(sb_alpha_url('tariff-depositny')); ?>">Тариф «Депозитный»</a>
      </div>
      <div class="sitemapCol">
        <div class="kicker">Поддержка</div>
        <a href="<?php echo esc_url(sb_alpha_url('support')); ?>">Поддержка</a>
        <a href="<?php echo esc_url(sb_alpha_url('security')); ?>">Безопасность</a>
        <a href="<?php echo esc_url(sb_alpha_url('faq')); ?>">FAQ</a>
        <a href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
      </div>
    </div>
  </div>
</footer>

<footer class="footC">
  <div class="container">
    <div class="row" style="justify-content:space-between; align-items:center;">
      <div class="row" style="gap:12px;">
        <div aria-hidden="true">
          <span style="color:#fff; font-weight:900;">
            <img width="44px" src="<?php echo esc_url(sb_alpha_asset('img/icon192.png')); ?>" alt="" />
          </span>
        </div>
        <div>
          <div style="font-weight:700; color:#fff;">АО НКБ «СЛАВЯНБАНК»</div>
          <div style="color:rgba(255,255,255,.75); font-weight:300; margin-top:4px;">
            ВЭД <span class="mob-hide">·</span> валютный контроль <span class="mob-hide">·</span> расчёты
          </div>
        </div>
      </div>
      <div class="row mob-v">
        <a
          class="btn outline pill"
          style="border-color: rgba(255,255,255,.22); color:#fff;"
          href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>"
        >
          Клиент‑банк
        </a>
        <a
          class="btn glass pill"
          style="background: rgba(255,255,255,.16); color:#fff;"
          href="<?php echo esc_url(sb_alpha_url('write-to-bank') . '#form'); ?>"
        >
          Связаться
        </a>
      </div>
    </div>
    <div class="sep" style="margin:16px 0; background: rgba(255,255,255,.18);"></div>
    <div class="row mob-font-13 mob-v" style="justify-content:space-between;">
      <div style="color:rgba(255,255,255,.75); font-weight:300;">
        <span>г. Великий Новгород,</span> <span>ул. Черемнова‑Конюхова,</span> <span>дом 12</span>
      </div>
      <div class="row">
        <a style="color:rgba(255,255,255,.78);" href="tel:78162665247">(8162) 66‑52‑47</a>
        <span class="mob-hide" style="color:rgba(255,255,255,.55);">·</span>
        <a style="color:rgba(255,255,255,.78);" href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>
      </div>
    </div>
  </div>
</footer>

```

## `template-parts/home-stack.php`

```php
<?php
$publications = [
    [
        'date' => '19.12.2025',
        'title' => 'Изменение тарифов банка по операциям в валюте РФ!',
        'url' => 'https://slavbank.ru/news/izmenenie-tarifov-banka-po-operacziyam-v-valyute-rf.html',
    ],
    [
        'date' => '12.12.2025',
        'title' => 'О режиме работы банка в праздничные дни',
        'url' => 'https://slavbank.ru/news/o-rezhime-raboty-banka-v-prazdnichnie-dni.html',
    ],
    [
        'date' => '19.11.2025',
        'title' => 'Изменение тарифов банка по операциям в иностранной валюте!',
        'url' => 'https://slavbank.ru/news/izmenenie-tarifov-banka-po-operacziyam-v-inostrannoj-valyute-s-011225.html',
    ],
    [
        'date' => '01.11.2025',
        'title' => 'С 01.11.2025 обновлены тарифные сетки по депозитам юридических лиц + специальное предложение по обслуживанию счетов!',
        'url' => 'https://slavbank.ru/poleznaya_informacia/tarif_depositny_s_01112025.html',
    ],
];

$sections = [
    ['label' => 'О БАНКЕ', 'url' => sb_alpha_url('home')],
    ['label' => 'ТАРИФЫ БАНКА', 'url' => sb_alpha_url('tariffs')],
    ['label' => 'ЮРИДИЧЕСКИМ ЛИЦАМ', 'url' => sb_alpha_url('legal-entities')],
    ['label' => 'ЧАСТНЫМ ЛИЦАМ', 'url' => sb_alpha_url('private-persons')],
    ['label' => 'ПОДДЕРЖКА', 'url' => sb_alpha_url('support')],
    ['label' => 'НАПИСАТЬ В БАНК', 'url' => sb_alpha_url('write-to-bank')],
    ['label' => 'ВАКАНСИИ', 'url' => sb_alpha_url('vacancies')],
];

$categories = [
    ['label' => 'АРХИВ', 'url' => 'https://slavbank.ru/category/arhiv'],
    ['label' => 'ДОКУМЕНТЫ ДЛЯ КЛИЕНТОВ', 'url' => 'https://slavbank.ru/category/dokumenty-dlya-klientov'],
    ['label' => 'НОВОСТИ', 'url' => 'https://slavbank.ru/category/news'],
    ['label' => 'ПОЛЕЗНАЯ ИНФОРМАЦИЯ', 'url' => 'https://slavbank.ru/category/poleznaya_informacia'],
];
?>
<div class="stack">
  <div class="bento-card reveal" data-reveal="right">
    <div class="kicker">Контакты ВЭД</div>
    <h3 style="margin:6px 0 10px;">Быстрая связь</h3>
    <div class="row" style="gap:10px; flex-wrap:wrap;">
      <a class="btn glass" href="tel:+7(495)198-99-51" style="border-color:rgba(0,0,0,.08);">
        📞 <span class="mono">+7(495)198-99-51</span>
      </a>
      <a class="btn glass" href="mailto:ved@slavbank.ru" style="border-color:rgba(0,0,0,.08);">✉️ ved@slavbank.ru</a>
    </div>
  </div>

  <div class="bento-card reveal is-in" data-reveal="right">
    <div class="kicker">Курсы обмена валют</div>
    <h3 style="margin:6px 0 10px;">Актуальная информация по кассе банка</h3>
    <div class="fine" style="margin-top:8px;">
      Для уточнения актуальных курсов обмена валют в кассе банка используйте телефон
      <a href="tel:78162665247" class="mono">(8162) 66‑52‑47</a> или электронную почту
      <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>.
    </div>
    <div class="fine" style="margin-top:8px;">АО НКБ «СЛАВЯНБАНК»</div>
  </div>

  <div class="bento-card reveal is-in" data-reveal="right">
    <div class="kicker">Полезная информация</div>
    <h3 style="margin:6px 0 10px;">Последние публикации</h3>
    <div class="posts">
      <?php foreach ($publications as $publication) : ?>
        <a class="post" href="<?php echo esc_url($publication['url']); ?>" target="_blank" rel="noopener">
          <span class="muted"><?php echo esc_html($publication['date']); ?></span>
          <strong><?php echo esc_html($publication['title']); ?></strong>
        </a>
      <?php endforeach; ?>
    </div>
  </div>

  <details class="reveal" data-reveal="right" open>
    <summary style="cursor:pointer; font-weight:600;">Разделы сайта</summary>
    <div class="drawer-links" style="margin-top:10px;">
      <?php foreach ($sections as $section) : ?>
        <a class="drawer-sub" href="<?php echo esc_url($section['url']); ?>"><?php echo esc_html($section['label']); ?></a>
      <?php endforeach; ?>
    </div>
  </details>

  <details class="reveal" data-reveal="right" open>
    <summary style="cursor:pointer; font-weight:600;">Рубрики</summary>
    <div class="drawer-links" style="margin-top:10px;">
      <?php foreach ($categories as $category) : ?>
        <a class="drawer-sub" href="<?php echo esc_url($category['url']); ?>" target="_blank" rel="noopener">
          <?php echo esc_html($category['label']); ?>
        </a>
      <?php endforeach; ?>
    </div>
  </details>
</div>

```

## `assets/css/tokens.css`

```css
:root {
  /* Brand palette (given) */
  --c-primary: #006780;
  /* Бирюзовый */
  --c-primary-700: #005a72;
  --c-primary-100: #9fd5d5;
  /* Светло-бирюзовый */
  --c-brown-500: #918078;
  /* Светло-коричневый */
  --c-sand-300: #d0b8a3;
  /* Песочный */
  --header-menu: 230px;

  /* Neutrals */
  --c-text: #0f172a;
  --c-muted: #475569;
  --c-bg: #f5fafc;
  --c-surface: #ffffff;
  --c-border: rgba(2, 6, 23, .12);

  /* Elevation */
  --shadow-sm: 0 6px 18px rgba(2, 6, 23, .08);
  --shadow-md: 0 14px 40px rgba(2, 6, 23, .10);

  /* Radii */
  --r-sm: 10px;
  --r-md: 14px;
  --r-lg: 18px;
  --r-pill: 999px;

  /* Spacing (4px base) */
  --s-1: 4px;
  --s-2: 8px;
  --s-3: 12px;
  --s-4: 16px;
  --s-5: 24px;
  --s-6: 32px;
  --s-7: 48px;

  /* Layout */
  --container: 1180px;

  /* Motion */
  --ease: cubic-bezier(.2, .8, .2, 1);
  --t-fast: 120ms;
  --t-med: 200ms;
  --t-slow: 280ms;
}

/* Optional: accessibility mode */
html[data-a11y="1"] {
  --c-bg: #ffffff;
  --c-border: rgba(2, 6, 23, .22);
}


html[data-a11y="1"] body {
  font-size: 16px;
}
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
main {
  flex-grow: 1;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font: 15px/1.60 ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", sans-serif;
  color: var(--c-text);
  background: var(--c-bg);
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

:focus-visible {
  outline: 3px solid rgba(0, 103, 128, .35);
  outline-offset: 2px;
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 20px;
}

.row {
  display: flex;
  gap: 16px;
  align-items: center;
}

.spacer {
  flex: 1;
}

.muted {
  color: var(--c-muted);
}

.mono {
  font-variant-numeric: tabular-nums;
  font-feature-settings: "tnum" 1;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: var(--r-pill);
  background: rgba(0, 103, 128, .10);
  color: var(--c-primary-700);
  font-weight: 700;
  font-size: 12px;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border: 1px solid var(--c-border);
  border-radius: var(--r-pill);
  background: rgba(255, 255, 255, .70);
  backdrop-filter: blur(10px);
}

.card {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-sm);
}

.card.pad {
  padding: var(--s-5);
}

.center-h {
  display: flex;
  justify-content: center;
}
.center-v {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 11px 14px;
  border-radius: var(--r-md);
  border: 1px solid var(--c-border);
  background: #fff;
  font-weight: 800;
  cursor: pointer;
  transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease), border-color var(--t-fast) var(--ease);
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
  border-color: rgba(2, 6, 23, .18);
}

.btn:active {
  transform: translateY(0);
}

.btn.primary {
  background: linear-gradient(135deg, var(--c-primary), #0ea5b7);
  color: #fff;
  border-color: rgba(255, 255, 255, .18);
}

.btn.soft {
  background: rgba(159, 213, 213, .25);
  border-color: rgba(0, 103, 128, .20);
  color: var(--c-primary-700);
}

.btn.ghost {
  background: transparent;
}

.input {
  width: 100%;
  padding: 12px 12px;
  border-radius: var(--r-md);
  border: 1px solid var(--c-border);
  background: #fff;
  font: inherit;
}

.input:focus {
  outline: none;
  border-color: rgba(0, 103, 128, .35);
  box-shadow: 0 0 0 4px rgba(0, 103, 128, .12);
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
    scroll-behavior: auto !important;
  }
}

:root {
  --c-muted: #3f5166;
}

:root {
  --w-body: 400;
  --w-muted: 300;
  --w-nav: 700;
  --w-cta: 850;
}

body {
  font-weight: var(--w-body);
}

.muted {
  font-weight: var(--w-muted);
}
```

## `assets/css/motion.css`

```css
@media (prefers-reduced-motion: no-preference) {
  .floaty {
    animation: floaty 9s var(--ease) infinite;
  }

  .floaty.slow {
    animation-duration: 14s;
  }

  .floaty.fast {
    animation-duration: 7s;
  }

  @keyframes floaty {
    0% {
      transform: translate3d(0, 0, 0);
    }

    35% {
      transform: translate3d(10px, -10px, 0);
    }

    70% {
      transform: translate3d(-8px, 8px, 0);
    }

    100% {
      transform: translate3d(0, 0, 0);
    }
  }
}

/* reveal */
.reveal {
  opacity: 0;
  transform: translate3d(0, 14px, 0);
  transition: opacity var(--t-med) var(--ease), transform var(--t-med) var(--ease);
  will-change: opacity, transform;
}

.reveal.is-in {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.reveal[data-reveal="left"] {
  transform: translate3d(-14px, 0, 0);
}

.reveal[data-reveal="right"] {
  transform: translate3d(14px, 0, 0);
}

.reveal[data-reveal="scale"] {
  transform: scale(.985);
}

.slider {
  position: relative;
  overflow: hidden;
  border-radius: var(--r-lg);
}

.slider-track {
  display: flex;
  transition: transform var(--t-slow) var(--ease);
  will-change: transform;
}

.slide {
  min-width: 100%;
  padding: var(--s-6);
}

.slide .kicker {
  font-weight: 800;
  font-size: 12px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--c-primary-700);
}

.slide h2 {
  font-family: "Cygre", ui-sans-serif, system-ui, sans-serif;
  font-weight: 600;
  margin: 10px 0 10px;
  font-size: clamp(26px, 3.3vw, 44px);
  line-height: 1.06;
  letter-spacing: -.02em;
}

.slide p {
  margin: 0;
  color: var(--c-muted);
  font-weight: 300;
  max-width: 62ch;
}

.slider-ui {
  padding-left: 16px;
  padding-bottom: 16px;
  padding-right: 16px;
  /* position:absolute; */
  inset: auto var(--s-4) var(--s-4) var(--s-4);
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
}

.slider-ui>* {
  pointer-events: auto;
}

.dots {
  display: flex;
  gap: 8px;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: var(--r-pill);
  border: 1px solid var(--c-border);
  background: rgba(255, 255, 255, .85);
  cursor: pointer;
}

.dot[aria-current="true"] {
  width: 26px;
  background: rgba(0, 103, 128, .16);
  border-color: rgba(0, 103, 128, .35);
}

.progress {
  height: 3px;
  background: rgba(255, 255, 255, .60);
  border-radius: var(--r-pill);
  overflow: hidden;
  flex: 1;
  margin: 0 10px;
  border: 1px solid rgba(2, 6, 23, .08);
}

.progress>i {
  display: block;
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, var(--c-primary), #0ea5b7);
}

.ticker {
  display: flex;
  gap: 12px;
  align-items: center;
  border: 1px solid var(--c-border);
  border-radius: var(--r-lg);
  padding: 10px 12px;
  background: rgba(255, 255, 255, .75);
  overflow: hidden;
}

.ticker strong {
  font-size: 12px;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--c-primary-700);
}

.ticker .lane {
  display: flex;
  gap: 24px;
  white-space: nowrap;
  will-change: transform;
}

@media (prefers-reduced-motion: no-preference) {
  .ticker .lane {
    animation: marquee 16s linear infinite;
  }

  .ticker:hover .lane {
    animation-play-state: paused;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }
}


.hero-wrap {
  position: relative;
  overflow: hidden;
  border-radius: var(--r-lg);
  border: 1px solid rgba(255, 255, 255, .22);
  box-shadow: 0 22px 60px rgba(2, 6, 23, .10);
}

.hero-wrap::before {
  content: "";
  position: absolute;
  inset: -2px;
  background:
    radial-gradient(520px 300px at 20% 10%, rgba(159, 213, 213, .55), transparent 60%),
    radial-gradient(520px 320px at 85% 55%, rgba(208, 184, 163, .35), transparent 60%),
    radial-gradient(620px 420px at 65% 0%, rgba(0, 103, 128, .18), transparent 55%);
  pointer-events: none;
  filter: saturate(1.06);
}

.hero-wrap::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, .58), rgba(255, 255, 255, .92));
  pointer-events: none;
}

.hero-wrap>* {
  position: relative;
  z-index: 1;
}

.slide {
  padding: var(--s-6);
}

.slide-grid {
  display: grid;
  grid-template-columns: 1.10fr .90fr;
  gap: var(--s-5);
  align-items: center;
}

.slide h2 {
  font-size: clamp(28px, 3.3vw, 44px);
  line-height: 1.05;
  letter-spacing: -.02em;
}

.slide p {
  font-weight: 400;
}

.slide .kicker {
  font-weight: 600;
  opacity: .9;
}

.hero-ill {
  width: 100%;
  height: auto;
  border-radius: var(--r-lg);
  border: 1px solid rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .55);
  backdrop-filter: blur(10px);
  box-shadow: 0 16px 40px rgba(0, 103, 128, .10);
}

@media (max-width: 980px) {
  .slide-grid {
    grid-template-columns: 1fr;
  }

  .hero-ill {
    max-width: 520px;
    margin: 0 auto;
  }
}

/* "Silk" stroke animation inside SVGs */
@media (prefers-reduced-motion: no-preference) {
  .hero-ill .silk {
    stroke-dasharray: 520;
    stroke-dashoffset: 520;
    animation: silkDraw 2.2s var(--ease) both;
  }

  .hero-ill .silk.s2 {
    animation-delay: .14s;
  }

  .hero-ill .silk.s3 {
    animation-delay: .26s;
  }

  @keyframes silkDraw {
    to {
      stroke-dashoffset: 0;
    }
  }
}

.btn.primary {
  background: linear-gradient(135deg, var(--c-primary), #0ea5b7);
  color: #fff;
  border-color: rgba(255, 255, 255, .18);
}

.btn.outline {
  background: transparent;
  border-color: rgba(0, 103, 128, .25);
  color: var(--c-primary-700);
}

.btn.outline:hover {
  background: rgba(0, 103, 128, .06);
  border-color: rgba(0, 103, 128, .35);
}

.btn.glass {
  background: rgba(255, 255, 255, .55);
  border-color: rgba(255, 255, 255, .28);
  backdrop-filter: blur(14px);
}

.btn.glass:hover {
  background: rgba(255, 255, 255, .74);
  text-decoration: none;
}

.btn.icon {
  padding: 11px 12px;
  width: 44px;
  justify-content: center;
}

.navlink {
  font-weight: 650;
}

.badge {
  font-weight: 800;
}

.hero-ill {
  display: block;
  padding: 0;
}

.hero-ill svg {
  display: block;
  width: 100%;
  height: auto;
}

.btn {
  position: relative;
  overflow: hidden;
  font-weight: var(--w-cta, 850);
}

.btn.primary {
  border-color: rgba(255, 255, 255, .18);
}

.btn.primary::after {
  content: "";
  position: absolute;
  inset: -2px;
  background: radial-gradient(240px 120px at 15% 20%, rgba(255, 255, 255, .35), transparent 60%);
  opacity: .75;
  transform: translate3d(-18px, -12px, 0);
  transition: transform var(--t-med) var(--ease), opacity var(--t-med) var(--ease);
  pointer-events: none;
}

.btn.primary:hover::after {
  transform: translate3d(0, 0, 0);
  opacity: .9;
}

.btn.primary:hover {
  text-decoration: none;
}

.btn.soft {
  background: linear-gradient(180deg, rgba(159, 213, 213, .40), rgba(159, 213, 213, .16));
  border-color: rgba(0, 103, 128, .18);
  color: var(--c-primary-700);
}

.btn.soft:hover {
  background: linear-gradient(180deg, rgba(159, 213, 213, .52), rgba(159, 213, 213, .20));
  border-color: rgba(0, 103, 128, .30);
}

.btn.quiet {
  background: transparent;
  border-color: transparent;
  color: var(--c-primary-700);
}

.btn.quiet:hover {
  background: rgba(0, 103, 128, .06);
  border-color: rgba(0, 103, 128, .14);
  text-decoration: none;
}

.btn.has-arrow span.arrow {
  display: inline-block;
  transition: transform var(--t-fast) var(--ease);
}

.btn.has-arrow:hover span.arrow {
  transform: translateX(2px);
}

.btn.pill {
  border-radius: var(--r-pill);
}

.btn.icon {
  padding: 11px 12px;
  width: 44px;
  justify-content: center;
}

.btn.outline {
  background: transparent;
  border-color: rgba(0, 103, 128, .25);
  color: var(--c-primary-700);
}

.btn.outline:hover {
  background: rgba(0, 103, 128, .06);
  border-color: rgba(0, 103, 128, .35);
  text-decoration: none;
}

.btn.glass {
  background: rgba(255, 255, 255, .55);
  border-color: rgba(255, 255, 255, .28);
  backdrop-filter: blur(14px);
}

.btn.glass:hover {
  background: rgba(255, 255, 255, .74);
}

.bento {
  display: grid;
  grid-template-columns: 1.25fr .75fr;
  gap: var(--s-4);
}

.bento .stack {
  display: grid;
  gap: var(--s-4);
}

.bento-card {
  padding: var(--s-5);
  border-radius: 20px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .86);
  box-shadow: 0 16px 50px rgba(2, 6, 23, .10);
  transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease);
}

.bento-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 20px 60px rgba(2, 6, 23, .12);
}

.bento-hero {
  position: relative;
  overflow: hidden;
}

.bento-hero::before {
  content: "";
  position: absolute;
  inset: -2px;
  background:
    radial-gradient(520px 300px at 20% 15%, rgba(159, 213, 213, .55), transparent 60%),
    radial-gradient(520px 320px at 85% 65%, rgba(208, 184, 163, .35), transparent 60%),
    radial-gradient(620px 420px at 65% 0%, rgba(0, 103, 128, .18), transparent 55%);
  pointer-events: none;
  filter: saturate(1.06);
}

.bento-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, .90), rgba(255, 255, 255, .70));
  pointer-events: none;
}

.bento-hero>* {
  position: relative;
  z-index: 1;
}

.iconbox {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  border: 1px solid rgba(0, 103, 128, .22);
  background: rgba(159, 213, 213, .28);
  display: grid;
  place-items: center;
  font-weight: 950;
  color: var(--c-primary-700);
}

.acc {
  border-radius: 20px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .86);
  overflow: hidden;
}

.acc button {
  width: 100%;
  padding: 14px 16px;
  border: none;
  background: transparent;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  cursor: pointer;
  font: inherit;
}

.acc button strong {
  font-weight: 650;
}

.acc button small {
  display: block;
  margin-top: 2px;
  color: var(--c-muted);
  font-weight: 300;
}

.acc .body {
  display: none;
  padding: 0 16px 16px;
  color: var(--c-muted);
  font-weight: 300;
}

.acc.open .body {
  display: block;
}

.acc .chev {
  transition: transform var(--t-fast) var(--ease);
}

.acc.open .chev {
  transform: rotate(180deg);
}

.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, .55);
  display: none;
  z-index: 120;
}

.drawer {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: min(420px, 92vw);
  background: rgba(255, 255, 255, .92);
  backdrop-filter: blur(18px);
  border-left: 1px solid rgba(2, 6, 23, .10);
  transform: translateX(105%);
  transition: transform var(--t-med) var(--ease);
  z-index: 130;
  display: flex;
  flex-direction: column;
}

.drawer-backdrop.open {
  display: block;
}

.drawer.open {
  transform: translateX(0);
}

.drawer-head {
  padding: 16px;
  border-bottom: 1px solid rgba(2, 6, 23, .08);
  display: flex;
  align-items: center;
  gap: 10px;
}

.drawer-head img {
  width: 34px;
  height: 34px;
  border-radius: 14px;
}

.drawer-body {
  padding: 16px;
  display: grid;
  gap: 12px;
  overflow: auto;
}

.drawer a {
  text-decoration: none;
}

.drawer .navitem {
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .80);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-weight: 800;
}

.drawer .navitem:hover {
  background: rgba(0, 103, 128, .06);
  border-color: rgba(0, 103, 128, .18);
}

.seg {
  border: 1px solid rgba(2, 6, 23, .12);
  border-radius: var(--r-pill);
  background: rgba(255, 255, 255, .70);
  padding: 4px;
  gap: 4px;
  text-align: center;
}

.seg button {
  border: none;
  background: transparent;
  padding: 8px 10px;
  border-radius: var(--r-pill);
  cursor: pointer;
  font-weight: 800;
  font-size: 12px;
  color: var(--c-muted);
}

.seg button[aria-pressed="true"] {
  background: rgba(0, 103, 128, .10);
  color: var(--c-primary-700);
}

@media (max-width: 980px) {
  .bento {
    grid-template-columns: 1fr;
  }
}


@media (prefers-reduced-motion: no-preference) {
  .iconbox .silk {
    stroke-dasharray: 140;
    stroke-dashoffset: 140;
    animation: silkMini .9s var(--ease) both;
  }

  .tile:hover .iconbox .silk {
    animation-duration: .75s;
  }

  @keyframes silkMini {
    to {
      stroke-dashoffset: 0;
    }
  }
}


.dashv2 .section-head .pill {
  background: rgba(255, 255, 255, .65);
  backdrop-filter: blur(10px);
}

.dashv2 .bento {
  display: grid;
  grid-template-columns: 1.25fr .75fr;
  gap: var(--s-4);
  position: relative;
  padding: 14px;
  border-radius: 26px;
  border: 1px solid rgba(255, 255, 255, .26);
  background: rgba(255, 255, 255, .50);
  backdrop-filter: blur(16px);
  box-shadow: 0 18px 50px rgba(2, 6, 23, .08);
  overflow: hidden;
  align-items: start;
}

.dashv2 .bento::before {
  content: "";
  position: absolute;
  inset: -2px;
  background:
    radial-gradient(520px 300px at 20% 15%, rgba(159, 213, 213, .55), transparent 60%),
    radial-gradient(520px 320px at 85% 60%, rgba(208, 184, 163, .40), transparent 60%),
    radial-gradient(720px 420px at 55% 0%, rgba(0, 103, 128, .18), transparent 55%);
  opacity: .95;
  pointer-events: none;
  filter: saturate(1.08);
}

.dashv2 .bento::after {
  content: "";
  position: absolute;
  inset: 0;
  /* subtle mesh grid */
  background-image:
    linear-gradient(to right, rgba(2, 6, 23, .04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(2, 6, 23, .04) 1px, transparent 1px);
  background-size: 42px 42px;
  opacity: .45;
  pointer-events: none;
}

.dashv2 .bento>* {
  position: relative;
  z-index: 1;
}

.dashv2 .bento-card {
  background: rgba(255, 255, 255, .72);
  border: 1px solid rgba(255, 255, 255, .28);
  box-shadow: 0 14px 34px rgba(0, 103, 128, .08);
  border-radius: 22px;
  overflow: hidden;
}

.dashv2 .bento-card::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: 24px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(0, 103, 128, .28), rgba(159, 213, 213, .30), rgba(208, 184, 163, .22));
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: .9;
}

.dashv2 .bento-hero {
  position: relative;
}

.dashv2 .bento-hero .kicker {
  font-weight: 300;
  color: var(--c-muted);
  letter-spacing: .08em;
  text-transform: uppercase;
  font-size: 11px;
}

.dashv2 .bento-hero h3 {
  font-weight: 600;
  letter-spacing: -.01em;
}

.dashv2 .bento-hero .muted {
  font-weight: 300;
  line-height: 1.6;
}

.dashv2 .bento-hero .pill {
  background: rgba(255, 255, 255, .70);
  border-color: rgba(2, 6, 23, .08);
}

.dashv2 .product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 14px;
}

.dashv2 .product {
  position: relative;
  padding: 14px;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .76);
  transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease), border-color var(--t-fast) var(--ease);
}

.dashv2 .product:hover {
  transform: translateY(-2px);
  border-color: rgba(0, 103, 128, .22);
  box-shadow: 0 18px 34px rgba(0, 103, 128, .10);
}

.dashv2 .product .cap {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dashv2 .product .cap .ico {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(159, 213, 213, .35);
  border: 1px solid rgba(0, 103, 128, .14);
  box-shadow: 0 10px 18px rgba(0, 103, 128, .06);
}

.dashv2 .product .cap .t {
  font-weight: 600;
  font-size: 13px;
}

.dashv2 .product .meta {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.dashv2 .meta .tag {
  padding: 6px 10px;
  border-radius: var(--r-pill);
  background: rgba(0, 103, 128, .06);
  border: 1px solid rgba(0, 103, 128, .12);
  font-size: 12px;
  font-weight: 800;
  color: var(--c-primary-700);
}

.dashv2 .meta .tag.soft {
  background: rgba(208, 184, 163, .22);
  border-color: rgba(145, 128, 120, .18);
  color: var(--c-brown-500);
}

.dashv2 .product .sub {
  margin-top: 10px;
  color: var(--c-muted);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.55;
}

.dashv2 .side-stack {
  display: grid;
  gap: 12px;
}

.dashv2 details {
  border-radius: 16px;
  border: 1px solid rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .76);
  padding: 12px 14px;
}

.dashv2 details summary {
  cursor: pointer;
  font-weight: 600;
}

.dashv2 details p {
  margin: 8px 0 0;
  color: var(--c-muted);
  font-weight: 300;
}

.dashv2 .mini-kpi {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 12px;
}

.dashv2 .mini-kpi .k {
  padding: 10px 12px;
  border-radius: 16px;
  border: 1px solid rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .78);
}

.dashv2 .mini-kpi .k .l {
  font-size: 12px;
  color: var(--c-muted);
  font-weight: 300;
}

.dashv2 .mini-kpi .k .v {
  margin-top: 6px;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: -.01em;
}

@media (max-width: 980px) {
  .dashv2 .bento {
    grid-template-columns: 1fr;
  }

  .dashv2 .product-grid {
    grid-template-columns: 1fr;
  }
}

.drawer-links {
  display: grid;
  gap: 8px;
}

.drawer-sub {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .70);
  color: inherit;
  text-decoration: none;
  font-weight: 600;
}

.drawer-sub:hover {
  border-color: rgba(0, 103, 128, .22);
  box-shadow: 0 12px 22px rgba(0, 103, 128, .08);
  transform: translateY(-1px);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.35fr .65fr;
  gap: 14px;
  align-items: start;
}

.after-grid {
  margin-top: 16px;
}

.about-media .media-card {
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .65);
  box-shadow: 0 16px 34px rgba(0, 103, 128, .10);
  min-height: 220px;
}

.about-media .media-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(1.05) contrast(1.02);
  transform: scale(1.02);
}

.about-media .media-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(560px 260px at 20% 20%, rgba(0, 103, 128, .35), transparent 60%),
    linear-gradient(180deg, rgba(2, 6, 23, .08), rgba(2, 6, 23, .36));
  pointer-events: none;
}

.media-overlay {
  position: absolute;
  inset: auto 0 0 0;
  padding: 14px 14px 12px;
}

.facts {
  margin: 10px 0 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
}

.facts li {
  font-weight: 300;
  color: var(--c-muted);
  line-height: 1.6;
}

.svc-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.svc-chip {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 16px;
  border: 1px solid rgba(0, 103, 128, .14);
  background: rgba(0, 103, 128, .06);
  text-decoration: none;
  color: inherit;
  font-weight: 600;
}

.svc-chip.ghost {
  border-color: rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .66);
  font-weight: 300;
}

.svc-chip:hover {
  border-color: rgba(0, 103, 128, .22);
  box-shadow: 0 16px 30px rgba(0, 103, 128, .08);
  transform: translateY(-1px);
}

.rates {
  display: grid;
  gap: 8px;
}

.rate-row {
  display: grid;
  grid-template-columns: 54px 1fr 72px 1fr 72px;
  gap: 8px;
  align-items: center;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .70);
}

.posts {
  display: grid;
  gap: 10px;
}

.post {
  display: grid;
  gap: 6px;
  padding: 10px 12px;
  border-radius: 16px;
  border: 1px solid rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .70);
  text-decoration: none;
  color: inherit;
}

.post strong {
  font-size: 13px;
}

.post:hover {
  border-color: rgba(0, 103, 128, .22);
  box-shadow: 0 14px 28px rgba(0, 103, 128, .08);
  transform: translateY(-1px);
  text-decoration: none;

}

.footer-v2 {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr;
  gap: var(--s-4);
  padding: var(--s-6) 0;
}

.foot-links {
  display: grid;
  gap: 8px;
}

@media (max-width: 980px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .footer-v2 {
    grid-template-columns: 1fr;
  }
}


.dashv2 .dash-tabs {
  display: inline-flex;
  gap: 6px;
  padding: 6px;
  border-radius: var(--r-pill);
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .75);
  backdrop-filter: blur(12px);
  margin-top: 10px;
  width: fit-content;
}

.dashv2 .dash-tabs .seg {
  border: none;
  background: transparent;
  padding: 10px 12px;
  border-radius: var(--r-pill);
  /* font-weight: 900; */
  font-weight: 800;
  cursor: pointer;
  color: var(--c-primary-700);
}

.dashv2 .dash-tabs .seg[aria-selected="true"] {
  background: rgba(0, 103, 128, .10);
  box-shadow: 0 10px 22px rgba(0, 103, 128, .08);
}

.dashv2 .dash-panels {
  margin-top: 10px;
}

.dashv2 .dash-panel {
  padding-top: 6px;
}

@media (prefers-reduced-motion: no-preference) {
  .dashv2 .dash-panel {
    animation: dashFade .22s var(--ease);
  }

  @keyframes dashFade {
    from {
      opacity: 0;
      transform: translateY(4px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.dashv2 .dash-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.dashv2 .svc-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.dashv2 .svc-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 12px;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .78);
  text-decoration: none;
  transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease), border-color var(--t-fast) var(--ease);
}

.dashv2 .svc-card:hover {
  transform: translateY(-1px);
  border-color: rgba(0, 103, 128, .22);
  box-shadow: 0 16px 30px rgba(0, 103, 128, .10);
}

.dashv2 .svc-card .ico {
  width: 42px;
  height: 42px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: rgba(159, 213, 213, .35);
  border: 1px solid rgba(0, 103, 128, .14);
  color: var(--c-primary-700);
  flex: 0 0 auto;
}

.dashv2 .svc-card strong {
  display: block;
  font-weight: 600;
  font-size: 13px;
}

.dashv2 .svc-card small {
  display: block;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 300;
}

.dashv2 .svc-card .arrow {
  margin-left: auto;
  font-weight: 900;
  color: rgba(0, 103, 128, .65);
}

.dashv2 .dash-more {
  margin-top: 12px;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .75);
  padding: 12px 14px;
}

.dashv2 .dash-more summary {
  font-weight: 600;
  cursor: pointer;
}

.dashv2 .ghost-list {
  margin: 10px 0 0 18px;
  color: var(--c-muted);
  font-weight: 300;
  line-height: 1.6;
}

.dashv2 .ghost-list li {
  margin: 6px 0;
}

.dashv2 .about-media .media-card.media-silk {
  background:
    radial-gradient(520px 300px at 20% 10%, rgba(159, 213, 213, .55), transparent 60%),
    radial-gradient(520px 320px at 85% 55%, rgba(208, 184, 163, .35), transparent 60%),
    rgba(255, 255, 255, .55);
}

.dashv2 .about-media .media-card.media-silk svg.hero-ill {
  width: 100%;
  height: 100%;
  display: block;
  opacity: .96;
}

@media (prefers-reduced-motion: no-preference) {
  .dashv2 .about-media .media-card .silk {
    stroke-dasharray: 620;
    stroke-dashoffset: 620;
    animation: silkDraw 2.1s var(--ease) both;
  }

  .dashv2 .about-media .media-card .silk.s2 {
    animation-delay: .15s;
  }

  .dashv2 .about-media .media-card .silk.s3 {
    animation-delay: .28s;
  }

  @keyframes silkDraw {
    to {
      stroke-dashoffset: 0;
    }
  }
}

.dashv2 .about-grid {
  grid-template-columns: 1.20fr .80fr;
  gap: 16px;
}

.dashv2 .dash-left .muted {
  font-weight: 300;
}

.dashv2 .dash-left strong {
  font-weight: 600;
}

@media (max-width: 980px) {
  .dashv2 .dash-tabs {
    width: 100%;
    overflow: auto;
  }

  .dashv2 .svc-card {
    align-items: flex-start;
  }
}


.doc-list {
  display: grid;
  gap: 10px;
}

.doc-row {
  display: grid;
  grid-template-columns: 110px 1fr 64px 22px;
  gap: 10px;
  align-items: center;
  padding: 12px 12px;
  border-radius: 16px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .78);
  text-decoration: none;
  transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease), border-color var(--t-fast) var(--ease);
}

.doc-row:hover {
  transform: translateY(-1px);
  border-color: rgba(0, 103, 128, .22);
  box-shadow: 0 16px 30px rgba(0, 103, 128, .10);
  text-decoration: none;
}

.doc-date {
  font-variant-numeric: tabular-nums;
  font-weight: 900;
  color: var(--c-primary-700);
  background: rgba(0, 103, 128, .06);
  border: 1px solid rgba(0, 103, 128, .12);
  padding: 6px 10px;
  border-radius: var(--r-pill);
  justify-self: start;
  font-size: 12px;
}

.doc-title {
  font-weight: 300;
  line-height: 1.55;
  color: rgba(2, 6, 23, .85);
}

.doc-ext {
  font-weight: 900;
  font-size: 12px;
  color: var(--c-brown-500);
  text-align: center;
}

.doc-arrow {
  text-align: right;
  font-weight: 900;
  color: rgba(0, 103, 128, .6);
  font-size: 18px;
}

.doc-hero {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 14px;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .78);
  text-decoration: none;
  transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease), border-color var(--t-fast) var(--ease);
}

.doc-hero:hover {
  transform: translateY(-1px);
  border-color: rgba(0, 103, 128, .22);
  box-shadow: 0 16px 30px rgba(0, 103, 128, .10);
  text-decoration: none;
}

.doc-hero .ico {
  width: 46px;
  height: 46px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: rgba(159, 213, 213, .35);
  border: 1px solid rgba(0, 103, 128, .14);
  color: var(--c-primary-700);
  flex: 0 0 auto;
}

.doc-hero strong {
  display: block;
  font-weight: 600;
  font-size: 13px;
}

.doc-hero small {
  display: block;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 300;
}

.doc-hero .arrow {
  margin-left: auto;
  font-weight: 900;
  color: rgba(0, 103, 128, .65);
}

.rates-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 8px;
}

.rate {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .78);
}

.rate .k {
  font-weight: 900;
  color: var(--c-primary-700);
  letter-spacing: .06em;
}

.rate .v {
  font-variant-numeric: tabular-nums;
  font-weight: 900;
  color: rgba(2, 6, 23, .80);
  display: flex;
  align-items: center;
  gap: 8px;
}

.rate .sep {
  color: rgba(2, 6, 23, .35);
}

.news-mini-grid {
  display: grid;
  gap: 10px;
}

.news-mini {
  display: block;
  padding: 12px 12px;
  border-radius: 16px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .78);
  text-decoration: none;
  transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease), border-color var(--t-fast) var(--ease);
}

.news-mini:hover {
  transform: translateY(-1px);
  border-color: rgba(0, 103, 128, .22);
  box-shadow: 0 16px 30px rgba(0, 103, 128, .10);
}

.news-mini .meta {
  font-size: 12px;
  font-weight: 300;
  color: var(--c-muted);
}

.news-mini .t {
  margin-top: 6px;
  font-weight: 600;
  font-size: 13px;
  line-height: 1.4;
  color: rgba(2, 6, 23, .90);
}

.support-card {
  display: flex;
  gap: 12px;
  padding: 14px 14px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, .20);
  background: linear-gradient(135deg, rgba(0, 103, 128, .88), rgba(0, 103, 128, .65));
  color: rgba(255, 255, 255, .92);
  box-shadow: 0 18px 40px rgba(0, 103, 128, .18);
}

.support-card a {
  color: rgba(255, 255, 255, .92);
}

.support-card .muted {
  color: rgba(255, 255, 255, .82) !important;
}

.support-ico {
  width: 44px;
  height: 44px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, .18);
  border: 1px solid rgba(255, 255, 255, .22);
  font-weight: 900;
}

@media (max-width: 720px) {
  .doc-row {
    grid-template-columns: 1fr 56px 18px;
  }

  .doc-row .doc-date {
    grid-column: 1 / -1;
  }

  .doc-row .doc-title {
    grid-column: 1 / 2;
  }

  .doc-row .doc-ext {
    text-align: left;
  }
}


.req-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.req-grid .kv {
  position: relative;
  padding: 14px;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .78);
  box-shadow: 0 12px 26px rgba(0, 103, 128, .06);
}

.req-grid .kv .l {
  font-size: 12px;
  color: var(--c-muted);
  font-weight: 300;
}

.req-grid .kv .v {
  margin-top: 6px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.45;
}

.req-grid .kv .kv-actions {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.copy {
  appearance: none;
  border: 1px solid rgba(0, 103, 128, .22);
  background: rgba(0, 103, 128, .06);
  color: var(--c-primary-700);
  font-weight: 900;
  font-size: 12px;
  padding: 8px 10px;
  border-radius: var(--r-pill);
  cursor: pointer;
}

.copy:hover {
  background: rgba(0, 103, 128, .10);
  border-color: rgba(0, 103, 128, .35);
}

.copy.mini {
  padding: 7px 10px;
  font-size: 12px;
}

.req-aux {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.aux-card {
  padding: 14px;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .76);
}

.addr-stack .addr {
  margin-top: 10px;
}

.addr-stack .addr:first-child {
  margin-top: 0;
}

.addr .l {
  font-size: 12px;
  color: var(--c-muted);
  font-weight: 300;
}

.addr .v {
  margin-top: 6px;
  font-weight: 600;
  line-height: 1.45;
}

.table-wrap {
  border: 1px solid rgba(2, 6, 23, .08);
  border-radius: 22px;
  overflow: auto;
  background: rgba(255, 255, 255, .78);
  box-shadow: var(--shadow-sm);
}

.req-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 760px;
}

.req-table th,
.req-table td {
  padding: 12px 14px;
  border-bottom: 1px solid rgba(2, 6, 23, .06);
  vertical-align: top;
}

.req-table th {
  text-align: left;
  font-size: 12px;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--c-muted);
  font-weight: 600;
  background: rgba(255, 255, 255, .55);
}

.req-table td:first-child {
  width: 42%;
  color: rgba(2, 6, 23, .78);
  font-weight: 600;
}

.req-table td:nth-child(2) {
  font-weight: 400;
}

.req-table td:last-child {
  width: 120px;
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  padding: 10px 12px;
  border-radius: var(--r-pill);
  background: rgba(255, 255, 255, .92);
  border: 1px solid rgba(2, 6, 23, .10);
  box-shadow: 0 18px 40px rgba(2, 6, 23, .12);
  z-index: 120;
  font-weight: 900;
}

@media (max-width: 980px) {
  .req-grid {
    grid-template-columns: 1fr;
  }

  .req-aux {
    grid-template-columns: 1fr;
  }

  .req-table {
    min-width: 680px;
  }
    .dash-tabs {
    flex-direction: column;
    border-radius: 0px !important;
    border: none;
  }
}


.prose {
  margin-top: 10px;
}

.prose h2,
.prose h3 {
  margin: 18px 0 10px;
  font-weight: 600;
  letter-spacing: -.01em;
}

.prose p {
  margin: 10px 0;
  line-height: 1.7;
  font-weight: 300;
  color: rgba(2, 6, 23, .78);
}

.prose ul,
.prose ol {
  margin: 10px 0 10px 18px;
  line-height: 1.7;
  font-weight: 300;
  color: rgba(2, 6, 23, .78);
}

.prose a {
  color: var(--c-primary-700);
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 103, 128, .20);
}

.prose a:hover {
  border-bottom-color: rgba(0, 103, 128, .45);
}

.prose table {
  width: 100%;
  border-collapse: collapse;
  margin: 12px 0;
  background: rgba(255, 255, 255, .65);
  border: 1px solid rgba(2, 6, 23, .08);
  border-radius: 16px;
  overflow: hidden;
}

.prose table td,
.prose table th {
  padding: 10px 12px;
  border-bottom: 1px solid rgba(2, 6, 23, .06);
  vertical-align: top;
}

.prose table th {
  text-align: left;
  font-size: 12px;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--c-muted);
  font-weight: 600;
  background: rgba(255, 255, 255, .55);
}

.prose img {
  max-width: 100%;
  height: auto;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .08);
}

.doc-shelf {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
}

.doc-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 12px;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .78);
  text-decoration: none;
  transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease), border-color var(--t-fast) var(--ease);
}

.doc-card:hover {
  transform: translateY(-1px);
  border-color: rgba(0, 103, 128, .22);
  box-shadow: 0 16px 30px rgba(0, 103, 128, .10);
  text-decoration: none;
}

.doc-ext {
  padding: 7px 10px;
  border-radius: var(--r-pill);
  font-weight: 900;
  font-size: 12px;
  color: var(--c-primary-700);
  background: rgba(0, 103, 128, .08);
  border: 1px solid rgba(0, 103, 128, .14);
}

.doc-title {
  font-weight: 600;
  font-size: 13px;
  color: rgba(2, 6, 23, .88);
  line-height: 1.35;
}

.doc-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.doc-arrow {
  margin-left: auto;
  font-weight: 900;
  color: rgba(0, 103, 128, .60);
}

.doc-list {
  margin: 10px 0 0 18px;
  line-height: 1.7;
  font-weight: 300;
}

@media (max-width: 980px) {
  .doc-shelf {
    grid-template-columns: 1fr;
  }
}


.pdf-shell {
  border: 1px solid rgba(2, 6, 23, .08);
  border-radius: 22px;
  background: rgba(255, 255, 255, .70);
  padding: 14px;
}

.pdf-head {
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.pdf-title {
  margin-top: 6px;
  font-weight: 600;
  font-size: 14px;
}

.pdf-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.pdf-frame {
  margin-top: 12px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .85);
  height: 72vh;
  min-height: 520px;
}

.pdf-frame iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

@media (max-width: 980px) {
  .pdf-frame {
    height: 70vh;
    min-height: 420px;
  }
}


.form-shell {
  border: 1px solid rgba(2, 6, 23, .08);
  border-radius: 22px;
  padding: 14px;
  background: rgba(255, 255, 255, .76);
  box-shadow: var(--shadow-sm);
}

.form-wrap form {
  margin-top: 10px;
}

.form-wrap input,
.form-wrap textarea,
.form-wrap select {
  width: 100%;
  padding: 12px 12px;
  border-radius: 16px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .85);
  font-family: inherit;
  font-weight: 300;
  outline: none;
}

.form-wrap textarea {
  min-height: 120px;
  resize: vertical;
}

.form-wrap input:focus,
.form-wrap textarea:focus,
.form-wrap select:focus {
  border-color: rgba(0, 103, 128, .35);
  box-shadow: 0 0 0 4px rgba(159, 213, 213, .30);
}

.form-wrap label {
  display: block;
  margin: 10px 0 6px;
  font-size: 12px;
  font-weight: 300;
  color: var(--c-muted);
}

.form-wrap button,
.form-wrap input[type="submit"] {
  margin-top: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: var(--r-pill);
  border: 1px solid rgba(0, 103, 128, .18);
  background: linear-gradient(135deg, rgba(0, 103, 128, .95), rgba(0, 103, 128, .75));
  color: #fff;
  font-weight: 900;
  cursor: pointer;
}

.form-wrap button:hover,
.form-wrap input[type="submit"]:hover {
  transform: translateY(-1px);
}

.alert {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 12px 12px;
  border-radius: 18px;
  border: 1px solid rgba(0, 103, 128, .16);
  background: rgba(159, 213, 213, .20);
}

.alert-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-top: 5px;
  background: rgba(0, 103, 128, .80);
  box-shadow: 0 0 0 4px rgba(0, 103, 128, .10);
}
.alert-check {
    min-width: 10px;
  height: 10px;
  color: rgba(0, 103, 128, .80);
  text-align: center;
  display: flex;
}

.jobs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
}

.job-card {
  padding: 14px;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .80);
  box-shadow: 0 12px 26px rgba(0, 103, 128, .06);
}

.job-title {
  font-weight: 600;
  line-height: 1.35;
}

@media (max-width: 980px) {
  .jobs-grid {
    grid-template-columns: 1fr;
  }
}


.tiles {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
}

.tile {
  display: block;
  padding: 14px;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .80);
  text-decoration: none;
  transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease), border-color var(--t-fast) var(--ease);
}

.tile:hover {
  transform: translateY(-1px);
  border-color: rgba(0, 103, 128, .18);
  box-shadow: 0 18px 34px rgba(0, 103, 128, .10);
}

.tile-title {
  font-weight: 600;
  line-height: 1.35;
  color: rgba(2, 6, 23, .88);
}

.access-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
}

.access-card {
  padding: 16px;
  border-radius: 20px;
  border: 1px solid rgba(0, 103, 128, .14);
  background: linear-gradient(135deg, rgba(159, 213, 213, .28), rgba(255, 255, 255, .78));
  box-shadow: 0 18px 34px rgba(0, 103, 128, .08);
}

.access-card.soft {
  border-color: rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .80);
  box-shadow: 0 12px 26px rgba(0, 103, 128, .06);
}

.access-title {
  margin-top: 6px;
  font-weight: 600;
  line-height: 1.35;
}

.mini-links {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mini-link {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .85);
  text-decoration: none;
  color: rgba(2, 6, 23, .86);
}

.mini-link:hover {
  border-color: rgba(0, 103, 128, .20);
  box-shadow: 0 12px 22px rgba(0, 103, 128, .08);
}

.tips {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
}

.tip-card {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 12px;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .80);
}

.tip-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-top: 4px;
  background: rgba(0, 103, 128, .80);
  box-shadow: 0 0 0 4px rgba(0, 103, 128, .10);
}

.tip-text {
  font-weight: 300;
  line-height: 1.55;
  color: rgba(2, 6, 23, .82);
}

@media (max-width: 980px) {

  .tiles,
  .access-grid,
  .tips {
    grid-template-columns: 1fr;
  }
}


.faq {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.faq-item {
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .80);
  overflow: hidden;
}

.faq-item summary {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  cursor: pointer;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-q {
  font-weight: 600;
  line-height: 1.35;
}

.faq-plus {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 103, 128, .18);
  background: rgba(0, 103, 128, .06);
  color: rgba(0, 103, 128, .85);
  font-weight: 900;
}

.faq-item[open] .faq-plus {
  transform: rotate(45deg);
}

.faq-a {
  padding: 0 14px 14px;
}

.steps {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
}

.step-card {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .80);
}

.step-num {
  min-width: 44px;
  height: 44px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  color: rgba(0, 103, 128, .92);
  background: rgba(159, 213, 213, .25);
  border: 1px solid rgba(0, 103, 128, .14);
}

.step-title {
  font-weight: 600;
  line-height: 1.35;
}

.services {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
}

.service-card {
  display: block;
  padding: 14px;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .80);
  text-decoration: none;
  transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease), border-color var(--t-fast) var(--ease);
}

.service-card:hover {
  transform: translateY(-1px);
  border-color: rgba(0, 103, 128, .18);
  box-shadow: 0 18px 34px rgba(0, 103, 128, .10);
}

.service-title {
  font-weight: 600;
  line-height: 1.35;
  color: rgba(2, 6, 23, .88);
}

@media (max-width: 980px) {

  .steps,
  .services {
    grid-template-columns: 1fr;
  }
}


.compliance-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 10px;
}

.compliance-card {
  padding: 14px;
  border-radius: 20px;
  border: 1px solid rgba(0, 103, 128, .14);
  background: linear-gradient(135deg, rgba(159, 213, 213, .26), rgba(255, 255, 255, .80));
  box-shadow: 0 18px 34px rgba(0, 103, 128, .08);
}

.compliance-text {
  margin-top: 8px;
  font-weight: 300;
  line-height: 1.6;
  color: rgba(2, 6, 23, .82);
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid rgba(0, 103, 128, .16);
  background: rgba(255, 255, 255, .80);
  text-decoration: none;
  color: rgba(2, 6, 23, .86);
  font-weight: 300;
}

.chip:hover {
  border-color: rgba(0, 103, 128, .24);
  box-shadow: 0 12px 22px rgba(0, 103, 128, .08);
  transform: translateY(-1px);
}

.bullets {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.bullet {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 12px;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .80);
}

.bullet .dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-top: 5px;
  background: rgba(0, 103, 128, .80);
  box-shadow: 0 0 0 4px rgba(0, 103, 128, .10);
}

.checks {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.check {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 12px;
  border-radius: 18px;
  border: 1px solid rgba(2, 6, 23, .10);
  background: rgba(255, 255, 255, .80);
}

.check-ic {
  width: 26px;
  height: 26px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 103, 128, .18);
  background: rgba(159, 213, 213, .18);
  color: rgba(0, 103, 128, .92);
  font-weight: 900;
  flex: 0 0 auto;
}

@media (max-width: 980px) {
  .compliance-grid {
    grid-template-columns: 1fr;
  }
}


.summary-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 10px;
}

.summary-card {
  padding: 14px;
  border-radius: 20px;
  border: 1px solid rgba(0, 103, 128, .14);
  background: linear-gradient(135deg, rgba(159, 213, 213, .22), rgba(255, 255, 255, .82));
  box-shadow: 0 18px 34px rgba(0, 103, 128, .08);
}

.summary-text {
  margin-top: 8px;
  font-weight: 300;
  line-height: 1.6;
  color: rgba(2, 6, 23, .82);
}

@media (max-width: 980px) {
  .summary-grid {
    grid-template-columns: 1fr;
  }
}


.metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.metric {
  display: inline-flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid rgba(0, 103, 128, .16);
  background: rgba(255, 255, 255, .82);
  color: rgba(2, 6, 23, .86);
  font-weight: 600;
  letter-spacing: .01em;
}
```

## `assets/css/figure.css`

```css
.figure-body {
    border: var(--c-primary) 1px solid;
    margin: 0;
    padding: 15px;
}
```

## `assets/css/footer.css`

```css
    .footC {
        background: radial-gradient(1000px 360px at 10% 0%, rgba(159, 213, 213, .25), transparent 55%),
            radial-gradient(820px 320px at 90% 30%, rgba(0, 103, 128, .35), transparent 60%),
            linear-gradient(135deg, rgba(0, 103, 128, .92), rgba(2, 6, 23, .92));
        padding: 22px 0;
        border-top: 1px solid rgba(255, 255, 255, .10);
    }
```

## `assets/css/form.css`

```css
.news-search{
  display:flex;
  gap: 10px;
  align-items:center;
  flex-wrap: wrap;
  padding: 12px;
  border-radius: 22px;
  border: 1px solid rgba(2,6,23,.10);
  background: rgba(255,255,255,.80);
  box-shadow: 0 18px 34px rgba(0,103,128,.08);
}
.news-search input{
  flex: 1 1 320px;
  min-width: 220px;
  border: 1px solid rgba(2,6,23,.10);
  background: rgba(255,255,255,.90);
  border-radius: 999px;
  padding: 12px 12px;
  outline: none;
  font-weight: 300;
}
.news-search input:focus{
  border-color: rgba(0,103,128,.35);
  box-shadow: 0 0 0 4px rgba(159,213,213,.30);
}

.rule-apply-checkbox {
  display: flex;
  gap: 10px;
}
```

## `assets/css/header.css`

```css
  body {
    background:
      radial-gradient(1100px 600px at 85% -20%,
        rgba(0, 103, 128, 0.18),
        transparent 55%),
      radial-gradient(900px 520px at 10% -10%,
        rgba(208, 184, 163, 0.2),
        transparent 55%),
      var(--c-bg);
  }

  .skip {
    position: absolute;
    left: -999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .skip:focus {
    left: 16px;
    top: 16px;
    width: auto;
    height: auto;
    padding: 10px 12px;
    background: #fff;
    border: 1px solid var(--c-border);
    border-radius: var(--r-md);
    z-index: 100;
  }

  .topbar {
    padding: 10px 0;
    font-size: 13px;
  }

  .header {
    position: sticky;
    top: 0;
    z-index: 50;
    padding: 12px 0;
    border-bottom: 1px solid rgba(2, 6, 23, 0.08);
    background: rgba(245, 250, 252, 0.68);
    backdrop-filter: blur(14px);
  }

  html[data-a11y="1"] .header {
    background: #fff;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 172px;
  }

  .logo {
    width: 40px;
    height: 40px;
    border-radius: var(--r-md);
    background: linear-gradient(135deg, var(--c-primary), #0ea5b7);
    overflow: hidden;
    box-shadow: 0 10px 18px rgba(0, 103, 128, 0.18);
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    color: #fff;
    font-weight: 900;
  }

  .brand h1 {
    margin: 0;
    font-size: 14px;
    letter-spacing: 0.02em;
    font-weight: 600;
  }

  .brand .sub {
    font-size: 12px;
    color: var(--c-muted);
    margin-top: 2px;
    font-weight: 300;
  }

  nav {
    display: flex;
    gap: 3px;
    align-items: end;
  }

  .navlink {
    padding: 10px 10px;
    border-radius: var(--r-md);
    border: 1px solid transparent;
    font-size: 13px;
  }

  .navlink:hover {
    text-decoration: none;
    border-color: var(--c-border);
    background: rgba(255, 255, 255, 0.8);
  }

  .navlink[aria-expanded="true"] {
    background: #fff;
    border-color: rgba(2, 6, 23, 0.16);
  }

  .menu-btn {
    display: none;
  }

  .mega {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(100% + 10px);
    width: min(var(--header-menu), calc(100vw - 40px));
    /* padding: var(--s-4); */
    display: none;
  }

  .mega.open {
    display: block;
  }

  .mega .header-grid {

    display: flex;
    flex-direction: column;
    grid-template-columns: 1.15fr 1fr;
    /* gap: var(--s-4); */
  }

  .mega .col {
    padding: var(--s-4);
    border-radius: var(--r-md);
    border: 1px solid var(--c-border);
    background: rgba(255, 255, 255, 0.9);
  }

  .mega h3 {
    margin: 0 0 10px;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--c-muted);
    font-weight: 600;
  }

  .mega a {
    display: flex;
    /* justify-content: space-between; */
    gap: 10px;
    padding: 10px 10px;
    border-radius: var(--r-md);
    text-decoration: none;
  }

  .mega a:hover {
    background: rgba(0, 103, 128, 0.06);
  }

  /* Search modal */
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(2, 6, 23, 0.55);
    display: none;
    z-index: 80;
  }

  .overlay.open {
    display: block;
  }

  .modal {
    width: min(760px, calc(100vw - 40px));
    margin: 80px auto 0;
    padding: var(--s-4);
    border-radius: 20px;
  }

  .searchbox {
    display: flex;
    gap: 10px;
    padding: 12px;
    border-radius: 16px;
    border: 1px solid var(--c-border);
    background: #fff;
  }

  .searchbox input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
  }

  .kbd {
    padding: 2px 7px;
    border: 1px solid var(--c-border);
    border-bottom-width: 2px;
    border-radius: 8px;
    font-size: 12px;
    color: var(--c-muted);
    background: #fff;
  }

  main {
    padding: var(--s-4) 0 var(--s-7);
  }

  section.block {
    padding: var(--s-5) 0;
  }

  .mega-link {
    font-size: 12px;
    display: flex;
  }

  .section-head {
    display: flex;
    gap: 12px;
    align-items: baseline;
    justify-content: space-between;
    margin: 6px 0 12px 28px;
    flex-wrap: wrap;
  }

  .section-head h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }

  .section-head p {
    margin: 0;
    color: var(--c-muted);
    font-size: 13px;
    font-weight: 300;
  }

  .grid3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--s-4);
  }

  .tile {
    padding: var(--s-4);
    border: 1px solid var(--c-border);
    border-radius: var(--r-lg);
    background: #fff;
    box-shadow: var(--shadow-sm);
    text-decoration: none;
    transition:
      transform var(--t-fast) var(--ease),
      box-shadow var(--t-fast) var(--ease);
  }

  .tile:hover {
    text-decoration: none;
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  .tile h3 {
    margin: 8px 0 6px;
    font-size: 14px;
    font-weight: 600;
  }

  .tile p {
    margin: 0;
    font-size: 12px;
    color: var(--c-muted);
  }

  /* News scroller */
  .scroller {
    display: flex;
    gap: var(--s-4);
    overflow: auto;
    scroll-snap-type: x mandatory;
    padding: 4px 2px 10px;
  }

  .news {
    min-width: min(360px, 85vw);
    scroll-snap-align: start;
    padding: var(--s-4);
    border: 1px solid var(--c-border);
    border-radius: var(--r-lg);
    background: #fff;
    text-decoration: none;
    box-shadow: var(--shadow-sm);
  }

  .news .meta {
    font-size: 12px;
    color: var(--c-muted);
    font-weight: 300;
  }

  .news h3 {
    margin: 8px 0 6px;
    font-size: 14px;
    font-weight: 600;
  }

  .news p {
    margin: 0;
    color: var(--c-muted);
    font-size: 12px;
    font-weight: 300;
  }

  /* CTA */
  .cta {
    padding: var(--s-5);
    display: flex;
    gap: var(--s-4);
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: var(--r-lg);
    background: linear-gradient(135deg,
        rgba(0, 103, 128, 0.95),
        rgba(14, 165, 183, 0.9));
    color: #fff;
    box-shadow: var(--shadow-md);
  }

  .cta h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }

  .cta p {
    margin: 4px 0 0;
    opacity: 0.92;
    font-size: 13px;
    max-width: 60ch;
    font-weight: 300;
  }

  /* Footer */
  footer {
    padding: var(--s-6) 0 var(--s-6);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr;
    gap: var(--s-4);
  }

  .foot {
    padding: var(--s-4);
  }

  .foot h3 {
    margin: 0 0 10px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--c-muted);
    font-weight: 600;
  }

  .foot a {
    display: inline-flex;
    padding: 6px 0;
    text-decoration: none;
    font-weight: 300;
  }

  .foot a:hover {
    text-decoration: none;
  }

  .fine {
    margin-top: 12px;
    color: var(--c-muted);
    font-size: 12px;
    font-weight: 300;
  }

  @media (max-width: 980px) {
    nav {
      display: none;
    }

    .menu-btn {
      display: inline-flex;
    }

    .grid3 {
      grid-template-columns: 1fr;
    }

    .footer-grid {
      grid-template-columns: 1fr;
    }

    .mega {
      left: 20px;
      transform: none;
      width: calc(100vw - 40px);
    }

    .mega .grid {
      grid-template-columns: 1fr;
    }

    .brand {
      min-width: auto;
    }
  }
```

## `assets/css/menu-prod.css`

```css


.header[data-menu-variant="prod"] {
  --m-accent: rgba(0, 103, 128, 1);
  --m-accent-soft: rgba(0, 103, 128, .10);
  --m-border: rgba(2, 6, 23, .12);
  --m-border-soft: rgba(2, 6, 23, .08);
  --m-text: rgba(2, 6, 23, .90);
  --m-muted: rgba(2, 6, 23, .62);
  --m-panel: rgba(255, 255, 255);
  --m-panel-strong: rgba(255, 255, 255, .98);
  --m-shadow: 0 18px 55px rgba(2, 6, 23, .16);
}

.header[data-menu-variant="prod"] nav .navlink {
  border-radius: 15px;
  border: 1px solid transparent;
  padding: 8px 12px;
  font-size: 13px;
  color: var(--m-text);
  background: transparent;
  min-width: 100px;
  text-align: center;
  /* border-bottom: 3px solid; */
  /* border-left: 0;
  border-top: 0;
  border-right: 0;
  border-image-slice: 1; */
  /* border-image-source:  linear-gradient(90deg, rgb(255, 255, 255), var(--c-primary), rgba(255, 255, 255, 0.78)); */
  /* border-image-source:  linear-gradient(90deg, rgb(255, 255, 255), #36758595, rgba(255, 255, 255, 0.78)); */
  height: 100%;
}


.header[data-menu-variant="prod"] .navlink:hover {
  /* background: linear-gradient(white, rgba(0, 103, 128, .10) ); */
  /* background: linear-gradient(to top, rgba(0, 103, 128, .10), white 30% ); */
  /* border-color: var(--m-border-soft); */
    /* border-bottom: 0; */
    color: var(--c-primary-700);
    transition: color 0.6s ease;
}

/* .header[data-menu-variant="prod"] nav .navlink[aria-expanded="true"] {
  background: rgba(255, 255, 255, 0.211);
  border-color: var(--m-border);
  box-shadow: 0 8px 24px rgba(2, 6, 23, .10);
} */

.header[data-menu-variant="prod"] .mega {
  background: var(--m-panel);
  border: 1px solid var(--m-border-soft);
  border-radius: 20px;
  box-shadow: var(--m-shadow);
  backdrop-filter: blur(14px);
  z-index: 50;
  min-width:  340px;;
}

.header[data-menu-variant="prod"] .mega .header-grid {
  padding: 10px;
}

/* Never show hidden groups (fix for any custom display rules) */
.header[data-menu-variant="prod"] .mega-group[hidden] { display: none !important; }

/* Mega links (primary items) */
.header[data-menu-variant="prod"] .mega-link,
.header[data-menu-variant="prod"] details.mega-item > summary.mega-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 12px;
  border-radius: 16px;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, .70);
}

.header[data-menu-variant="prod"] .mega-link:hover,
.header[data-menu-variant="prod"] details.mega-item > summary.mega-link:hover {
  background: rgba(0, 103, 128, .06);
  border-color: rgba(0, 103, 128, .18);
}

.header[data-menu-variant="prod"] .mega-meta strong {
  color: var(--m-text);
  font-weight: 650;
}

.header[data-menu-variant="prod"] .mega-meta small {
  display: block;
  margin-top: 2px;
  color: var(--m-muted);
  font-size: 12px;
  font-weight: 500;
}

/* 2) Pale circle around the diamond icon */
.header[data-menu-variant="prod"] .mega-ic {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  border: 1px solid rgba(2, 6, 23, .14);
  background: rgba(255, 255, 255, .90);
  box-shadow: 0 0 0 3px rgba(2, 6, 23, .04);
  color: rgba(0, 103, 128, .92);
  flex: 0 0 auto;
}

.header[data-menu-variant="prod"] .mega-arrow {
  margin-left: auto;
  opacity: .55;
  transform: translateX(0);
  transition: transform .16s ease, opacity .16s ease;
}

.header[data-menu-variant="prod"] .mega-link:hover .mega-arrow,
.header[data-menu-variant="prod"] details.mega-item > summary.mega-link:hover .mega-arrow {
  opacity: .75;
  transform: translateX(2px);
}

/* Details/summary cosmetics */
details.mega-item > summary.mega-link { list-style: none; cursor: pointer; }
details.mega-item > summary.mega-link::-webkit-details-marker { display: none; }

/* 3) Submenu idea: "rail" + node icons, clear nesting */
.header[data-menu-variant="prod"] .mega-sub {
  margin: 6px 0 10px 44px;
  padding-left: 14px;
  border-left: 1px solid rgba(2, 6, 23, .14);
  display: grid;
  gap: 6px;
}

.header[data-menu-variant="prod"] .mega-sub2 {
  margin: 6px 0 10px 18px;
  padding-left: 14px;
  border-left: 1px dashed rgba(2, 6, 23, .14);
  display: grid;
  gap: 6px;
}

.header[data-menu-variant="prod"] .mega-sublink {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(2, 6, 23, .08);
  background: rgba(255, 255, 255, .66);
  color: var(--m-text);
  text-decoration: none;
}

.header[data-menu-variant="prod"] .mega-sublink:hover {
  background: rgba(0, 103, 128, .06);
  border-color: rgba(0, 103, 128, .18);
}

.header[data-menu-variant="prod"] .mega-sublink > span[aria-hidden] {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(2, 6, 23, .14);
  background: rgba(2, 6, 23, .03);
  color: rgba(0, 103, 128, .92);
  flex: 0 0 auto;
}

/* Nested details chevron */
.header[data-menu-variant="prod"] .mega-sub details > summary.mega-sublink { cursor: pointer; }
.header[data-menu-variant="prod"] .mega-sub details > summary.mega-sublink::after {
  content: "›";
  margin-left: auto;
  opacity: .55;
  transition: transform .16s ease, opacity .16s ease;
}
.header[data-menu-variant="prod"] .mega-sub details[open] > summary.mega-sublink::after {
  transform: rotate(90deg);
  opacity: .8;
}

/* Backdrop */
.header[data-menu-variant="prod"] .mega-backdrop {
  position: fixed;
  inset: 0;
  /* background: rgba(2, 6, 23, .45); */
  opacity: 0;
  pointer-events: none;
  transition: opacity .18s ease;
  z-index: 49;
}

.header[data-menu-variant="prod"] .mega-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

/* Mobile: full-screen drawer + drilldown */
@media (max-width: 980px) {
  /* 1) Hide Client‑Bank CTA button in mobile */
  .header[data-menu-variant="prod"] .clientbank-cta {
    display: none !important;
  }

  .header[data-menu-variant="prod"] .mega {
    position: fixed;
    inset: 0;
    /* width: 100vw; */
     width: auto;
    max-width: 100%;
    height: 100vh;
    max-width: none;
    border-radius: 0;
    padding: 0;
    display: block; /* override header.css (display:none) for animation */
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(10px);
    transition: opacity .18s ease, transform .18s ease, visibility .18s ease;
    background: rgba(245, 250, 252, .92);
    backdrop-filter: blur(18px);
    overflow-x: clip;
  }
@supports not (overflow-x: clip) {
  .header[data-menu-variant="prod"] .mega { overflow-x: hidden; }
}
  .header[data-menu-variant="prod"] .mega.open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: none;
  }

  .header[data-menu-variant="prod"] .mega .header-grid {
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .header[data-menu-variant="prod"] .mega-mhead {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 12px;
    position: sticky;
    top: 0;
    z-index: 2;
    border-bottom: 1px solid rgba(2, 6, 23, .10);
    background: rgba(255, 255, 255, .92);
  }

  .header[data-menu-variant="prod"] .mega-back {
    border-radius: 999px;
    opacity: .0; /* hidden in root view, shown in group view */
    pointer-events: none;
  }

  .header[data-menu-variant="prod"] .mega-mobile-title {
    flex: 1;
    font-size: 14px;
    font-weight: 700;
    color: rgba(2, 6, 23, .86);
    letter-spacing: .01em;
  }

  .header[data-menu-variant="prod"] .mega-close {
    border-radius: 999px;
  }

  /* Root list container (built from <nav>) */
  .header[data-menu-variant="prod"] .mega-mobile-root {
    display: none;
    padding: 8px 0 14px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .header[data-menu-variant="prod"] .mega-rootlink {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 14px 14px;
    border: none;
    background: transparent;
    border-bottom: 1px solid rgba(2, 6, 23, .08);
    text-decoration: none;
    color: rgba(2, 6, 23, .90);
    cursor: pointer;
  }

  .header[data-menu-variant="prod"] .mega-rootlink:first-child {
    border-top: 1px solid rgba(2, 6, 23, .08);
  }

  .header[data-menu-variant="prod"] .mega-rootlink:hover {
    background: rgba(0, 103, 128, .05);
  }

  .header[data-menu-variant="prod"] .mega-rootic {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    border: 1px solid rgba(2, 6, 23, .14);
    background: rgba(255, 255, 255, .94);
    box-shadow: 0 0 0 3px rgba(2, 6, 23, .04);
    color: rgba(0, 103, 128, .95);
    flex: 0 0 auto;
  }

  .header[data-menu-variant="prod"] .mega-roottext {
    flex: 1;
    font-weight: 700;
    font-size: 15px;
    text-align: center;
  }

  .header[data-menu-variant="prod"] .mega-rootchev {
    opacity: .7;
    font-size: 18px;
  }

  /* Drilldown view switching via data-mobile-view */
  .header[data-menu-variant="prod"][data-mobile-view="root"] .mega-mobile-root { display: block; }
  .header[data-menu-variant="prod"][data-mobile-view="root"] [data-mega-links] { display: none !important; }
  .header[data-menu-variant="prod"][data-mobile-view="root"] .mega-back {
    opacity: 0;
    pointer-events: none;
  }

  .header[data-menu-variant="prod"][data-mobile-view="group"] .mega-mobile-root { display: none; }
  .header[data-menu-variant="prod"][data-mobile-view="group"] [data-mega-links] {
    display: grid !important;
    gap: 10px !important;
    padding: 10px 10px 18px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .header[data-menu-variant="prod"][data-mobile-view="group"] .mega-back {
    opacity: 1;
    pointer-events: auto;
  }

  /* Make primary items in mobile feel touch-friendly */
  .header[data-menu-variant="prod"][data-mobile-view="group"] .mega-link,
  .header[data-menu-variant="prod"][data-mobile-view="group"] details.mega-item > summary.mega-link {
    background: rgba(255, 255, 255, .92);
    border-color: rgba(2, 6, 23, .10);
  }

  .header[data-menu-variant="prod"][data-mobile-view="group"] .mega-sub,
  .header[data-menu-variant="prod"][data-mobile-view="group"] .mega-sub2 {
    background: rgba(255, 255, 255, .60);
    border-radius: 14px;
    padding: 10px 10px 10px 14px;
  }
  main {
    width: 100vw;
  }
  .rate-row {
    grid-template-columns: 37px 1fr 37px 1fr 37px;
  }
  /* .block.reveal.is-in {
    width: calc(100vw - 50px);
  }
  h3 {
    width: calc(100vw - 76px);
  } */


  .dashv2 .about-grid {
    grid-template-columns: none;
  }
    .grid3{
    display: grid;
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }

  .tile, .bento-card{
    min-width: 0 !important;
  }

  .bento,
  .about-grid{
    grid-template-columns: 1fr !important;
    word-wrap: break-word;
  }
    .slide-grid{
    display: grid;
    grid-template-columns: 1fr !important;
    gap: 14px !important;
  }



  .slide .row{
    flex-direction: column;
    align-items: stretch;
  }
  .slide .row .btn{
    width: 100%;
    justify-content: center;
  }

  .slider{ overflow: hidden; }
}

/* Desktop: hide the mobile header (drawer top bar) */
@media (min-width: 981px) {
  .header[data-menu-variant="prod"] .mega-mhead { display: none; }
  .header[data-menu-variant="prod"] .mega-mobile-root { display: none !important; }
}
@media (max-width: 560px) {
  .topbar .container.row { flex-wrap: wrap; }
  .mega-link {
    font-size: 14px;
  }
  .pill {
    flex: 1 1 100%;
    max-width: 100%;
    min-width: 0;
    flex-wrap: wrap;
    gap: 4px 6px;
    justify-content: center;
    border-radius: 13px;
    font-weight: bold;
  }

  .muted {
    font-weight: 700 !important; 
    font-size: 14px;
  }
  .hero-ill{
    display: none;
  }
  .slide {
    padding-bottom: 0;
  }
  .mob-v {
    display: flex;
    flex-direction: column;
  }
  .mob-hide {
    display: none;
  }
  .mob-font-13 {
    font-size: 13px;
  }
  .mob-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .mob-nowrap {
    display: flex;
    flex-wrap: nowrap;
  }
  .mob-no-round {
    border-radius: 13px;
  }

  

}
```

## `assets/css/layout.css`

```css
body {
      background:
        radial-gradient(1100px 600px at 85% -20%,
          rgba(0, 103, 128, 0.18),
          transparent 55%),
        radial-gradient(900px 520px at 10% -10%,
          rgba(208, 184, 163, 0.2),
          transparent 55%),
        var(--c-bg);
    }

    .skip {
      position: absolute;
      left: -999px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }

    .skip:focus {
      left: 16px;
      top: 16px;
      width: auto;
      height: auto;
      padding: 10px 12px;
      background: #fff;
      border: 1px solid var(--c-border);
      border-radius: var(--r-md);
      z-index: 100;
    }

    .topbar {
      padding: 10px 0;
      font-size: 13px;
    }

    .header {
      position: sticky;
      top: 0;
      z-index: 50;
      padding: 12px 0;
      border-bottom: 1px solid rgba(2, 6, 23, 0.08);
      background: rgba(245, 250, 252, 0.68);
      backdrop-filter: blur(14px);
    }

    html[data-a11y="1"] .header {
      background: #fff;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 172px;
    }

    .logo {
      width: 40px;
      height: 40px;
      border-radius: var(--r-md);
      background: linear-gradient(135deg, var(--c-primary), #0ea5b7);
      overflow: hidden;
      box-shadow: 0 10px 18px rgba(0, 103, 128, 0.18);
      display: grid;
      place-items: center;
      flex: 0 0 auto;
      color: #fff;
      font-weight: 900;
    }

    .brand h1 {
      margin: 0;
      font-size: 14px;
      letter-spacing: 0.02em;
      font-weight: 600;
    }

    .brand .sub {
      font-size: 12px;
      color: var(--c-muted);
      margin-top: 2px;
      font-weight: 300;
    }

    nav {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .navlink {
      padding: 10px 10px;
      border-radius: var(--r-md);
      border: 1px solid transparent;
      font-size: 13px;
    }

    .navlink:hover {
      text-decoration: none;
      border-color: var(--c-border);
      background: rgba(255, 255, 255, 0.8);
    }

    .navlink[aria-expanded="true"] {
      background: #fff;
      border-color: rgba(2, 6, 23, 0.16);
    }

    .menu-btn {
      display: none;
    }

    .mega {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: calc(100% + 10px);
      width: min(var(--container), calc(100vw - 40px));
      display: none;
    }

    .mega.open {
      display: block;
    }

    .mega .grid {
      display: grid;
      grid-template-columns: 1.15fr 1fr;
      gap: var(--s-4);
    }

    .mega .col {
      padding: var(--s-4);
      border-radius: var(--r-md);
      border: 1px solid var(--c-border);
      background: rgba(255, 255, 255, 0.9);
    }

    .mega h3 {
      margin: 0 0 10px;
      font-size: 12px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-muted);
      font-weight: 600;
    }

    /* Search modal */
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(2, 6, 23, 0.55);
      display: none;
      z-index: 80;
    }

    .overlay.open {
      display: block;
    }

    .modal {
      width: min(760px, calc(100vw - 40px));
      margin: 80px auto 0;
      padding: var(--s-4);
      border-radius: 20px;
    }

    .searchbox {
      display: flex;
      gap: 10px;
      padding: 12px;
      border-radius: 16px;
      border: 1px solid var(--c-border);
      background: #fff;
    }

    .searchbox input {
      border: none;
      outline: none;
      width: 100%;
      font-size: 16px;
    }

    .kbd {
      padding: 2px 7px;
      border: 1px solid var(--c-border);
      border-bottom-width: 2px;
      border-radius: 8px;
      font-size: 12px;
      color: var(--c-muted);
      background: #fff;
    }

    main {
      padding: var(--s-4) 0 var(--s-7);
    }

    section.block {
      padding: var(--s-5) 0;
    }

    .section-head {
      display: flex;
      gap: 12px;
      align-items: baseline;
      justify-content: space-between;
      margin: 6px 0 12px 28px;
      flex-wrap: wrap;
    }

    .section-head h2 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
    }

    .section-head p {
      margin: 0;
      color: var(--c-muted);
      font-size: 13px;
      font-weight: 300;
    }

    .grid3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--s-4);
    }

    .tile {
      padding: var(--s-4);
      border: 1px solid var(--c-border);
      border-radius: var(--r-lg);
      background: #fff;
      box-shadow: var(--shadow-sm);
      text-decoration: none;
      transition:
        transform var(--t-fast) var(--ease),
        box-shadow var(--t-fast) var(--ease);
    }

    .tile:hover {
      text-decoration: none;
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .tile h3 {
      margin: 8px 0 6px;
      font-size: 14px;
      font-weight: 600;
    }

    .tile p {
      margin: 0;
      font-size: 12px;
      color: var(--c-muted);
    }

    /* News scroller */
    .scroller {
      display: flex;
      gap: var(--s-4);
      overflow: auto;
      scroll-snap-type: x mandatory;
      padding: 4px 2px 10px;
    }

    .news {
      min-width: min(360px, 85vw);
      scroll-snap-align: start;
      padding: var(--s-4);
      border: 1px solid var(--c-border);
      border-radius: var(--r-lg);
      background: #fff;
      text-decoration: none;
      box-shadow: var(--shadow-sm);
    }

    .news .meta {
      font-size: 12px;
      color: var(--c-muted);
      font-weight: 300;
    }

    .news h3 {
      margin: 8px 0 6px;
      font-size: 14px;
      font-weight: 600;
    }

    .news p {
      margin: 0;
      color: var(--c-muted);
      font-size: 12px;
      font-weight: 300;
    }

    /* CTA */
    .cta {
      padding: var(--s-5);
      display: flex;
      gap: var(--s-4);
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      border: 1px solid rgba(255, 255, 255, 0.22);
      border-radius: var(--r-lg);
      background: linear-gradient(135deg,
          rgba(0, 103, 128, 0.95),
          rgba(14, 165, 183, 0.9));
      color: #fff;
      box-shadow: var(--shadow-md);
    }

    .cta h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
    }

    .cta p {
      margin: 4px 0 0;
      opacity: 0.92;
      font-size: 13px;
      max-width: 60ch;
      font-weight: 300;
    }

    /* Footer */
    footer {
      padding: var(--s-6) 0 var(--s-6);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr 1fr;
      gap: var(--s-4);
    }

    .foot {
      padding: var(--s-4);
    }

    .foot h3 {
      margin: 0 0 10px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--c-muted);
      font-weight: 600;
    }

    .foot a {
      display: inline-flex;
      padding: 6px 0;
      text-decoration: none;
      font-weight: 300;
    }

    .foot a:hover {
      text-decoration: none;
    }

    .fine {
      margin-top: 12px;
      color: var(--c-muted);
      font-size: 12px;
      font-weight: 300;
    }

    @media (max-width: 980px) {
      nav {
        display: none;
      }

      .menu-btn {
        display: inline-flex;
      }

      .grid3 {
        grid-template-columns: 1fr;
      }

      .footer-grid {
        grid-template-columns: 1fr;
      }

      .mega {
        left: 20px;
        transform: none;
        width: calc(100vw - 40px);
      }

      .mega .grid {
        grid-template-columns: 1fr;
      }

      .brand {
        min-width: auto;
      }
    }

.sitemap {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
    }

    .sitemapCol {
        padding: 12px;
        border-radius: 18px;
        border: 1px solid rgba(2, 6, 23, .10);
        background: rgba(255, 255, 255, .80);
    }

    .sitemapCol a {
        display: block;
        margin-top: 8px;
        text-decoration: none;
        color: rgba(2, 6, 23, .84);
        font-weight: 300;
    }

    .sitemapCol a:hover {
        text-decoration: underline;
        text-underline-offset: 3px;
    }

    @media (max-width: 980px) {
        .sitemap {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 560px) {
        .sitemap {
            grid-template-columns: 1fr;
        }
    }

body.admin-bar .header {
  top: 32px;
}

@media (max-width: 782px) {
  body.admin-bar .header {
    top: 46px;
  }
}

.has-text-align-center {
  text-align: center;
}

.has-text-align-right {
  text-align: right;
}

.has-gray-color {
  color: var(--c-muted);
}

.wp-block-table {
  overflow-x: auto;
}

.wp-block-table table {
  width: 100%;
  border-collapse: collapse;
}

.wp-block-table td,
.wp-block-table th {
  padding: 12px;
  border: 1px solid rgba(2, 6, 23, 0.10);
  vertical-align: top;
}

.wp-block-table.is-style-stripes tbody tr:nth-child(odd) {
  background: rgba(2, 6, 23, 0.02);
}

.wp-block-table a {
  word-break: break-word;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--s-4);
}

.contact-card {
  padding: var(--s-4);
  border: 1px solid var(--c-border);
  border-radius: var(--r-lg);
  background: #fff;
  box-shadow: var(--shadow-sm);
}

.contact-card.contact-accent {
  background:
    radial-gradient(900px 320px at 100% 0, rgba(0, 103, 128, 0.12), transparent 60%),
    linear-gradient(180deg, rgba(159, 213, 213, 0.16), #fff);
}

.contact-main {
  margin-top: 8px;
  font-size: clamp(20px, 2.1vw, 28px);
  line-height: 1.25;
  font-weight: 600;
  word-break: break-word;
}

.contact-sub {
  margin-top: 12px;
  display: grid;
  gap: 10px;
}

.map-shell {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: var(--s-4);
  align-items: stretch;
}

.map-card,
.map-visual {
  padding: var(--s-4);
  border: 1px solid var(--c-border);
  border-radius: var(--r-lg);
  background: #fff;
  box-shadow: var(--shadow-sm);
}

.map-visual {
  min-height: 280px;
  background:
    radial-gradient(900px 320px at 0 0, rgba(0, 103, 128, 0.18), transparent 55%),
    radial-gradient(900px 320px at 100% 100%, rgba(208, 184, 163, 0.20), transparent 55%),
    linear-gradient(135deg, rgba(245, 250, 252, 0.95), rgba(255, 255, 255, 1));
  position: relative;
  overflow: hidden;
}

.map-visual::before,
.map-visual::after {
  content: "";
  position: absolute;
  inset: auto;
  border-radius: 999px;
}

.map-visual::before {
  width: 220px;
  height: 220px;
  right: -40px;
  top: -20px;
  background: rgba(0, 103, 128, 0.12);
}

.map-visual::after {
  width: 180px;
  height: 180px;
  left: -20px;
  bottom: -20px;
  background: rgba(208, 184, 163, 0.18);
}

@media (max-width: 980px) {
  .contact-grid,
  .map-shell {
    grid-template-columns: 1fr;
  }
}

```

## `assets/js/motion.js`

```js
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.header.reveal');
  if (header) {
    let lastY = window.scrollY || 0;
    const threshold = 10;
    let ticking = false;

    const apply = () => {
      const y = window.scrollY || 0;

      header.classList.toggle('scrolled', y > 8);

      if (y <= threshold || y < lastY) {
        header.classList.add('is-in');
      } else {
        header.classList.remove('is-in');
        try { closeMega(); } catch (e) { }
      }

      lastY = y;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    }, { passive: true });

    header.classList.add('is-in');
    apply();
  }

  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-in'));
  }

  const slider = $('[data-slider]');
  if (slider) {
    const track = $('[data-slider-track]', slider);
    const slides = $$('[data-slide]', slider);
    const dots = $$('[data-dot]', slider);
    const btnPrev = $('[data-prev]', slider);
    const btnNext = $('[data-next]', slider);
    const btnPlay = $('[data-play]', slider);
    const progress = $('[data-progress] i', slider);

    let idx = 0;
    let timer = null;
    let playing = !prefersReduced;

    const setIdx = (n, user = false) => {
      idx = (n + slides.length) % slides.length;
      track.style.transform = `translate3d(${-idx * 100}%,0,0)`;
      dots.forEach((d, i) => d.setAttribute('aria-current', String(i === idx)));
      slides.forEach((s, i) => {
        s.setAttribute('aria-hidden', String(i !== idx));
        s.toggleAttribute('data-active', i === idx);
        if (i === idx) {
          const ill = s.querySelector('[data-ill]');
          if (ill) {
            const clone = ill.cloneNode(true);
            ill.replaceWith(clone);
          }
        }
      });

      if (progress) {
        progress.style.width = '0%';
        if (playing && !prefersReduced) {
          const start = performance.now();
          const dur = 5200;
          const tick = (t) => {
            if (!playing) return;
            const p = Math.min(1, (t - start) / dur);
            progress.style.width = `${(p * 100).toFixed(1)}%`;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      }
      if (user) restart();
    };

    const restart = () => {
      if (timer) clearInterval(timer);
      if (playing && !prefersReduced) {
        timer = setInterval(() => setIdx(idx + 1), 5400);
      }
    };

    btnNext && btnNext.addEventListener('click', () => setIdx(idx + 1, true));
    btnPrev && btnPrev.addEventListener('click', () => setIdx(idx - 1, true));
    dots.forEach((d, i) => d.addEventListener('click', () => setIdx(i, true)));

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (timer) clearInterval(timer);
      } else {
        restart();
      }
    });

    slider.addEventListener('mouseenter', () => { if (timer) clearInterval(timer); });
    slider.addEventListener('mouseleave', () => { restart(); });
    slider.addEventListener('focusin', () => { if (timer) clearInterval(timer); });
    slider.addEventListener('focusout', () => { restart(); });

    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); setIdx(idx - 1, true); }
      if (e.key === 'ArrowRight') { e.preventDefault(); setIdx(idx + 1, true); }
    });

    if (btnPlay) {
      const sync = () => {
        btnPlay.setAttribute('aria-pressed', String(playing));
        btnPlay.textContent = playing ? 'Пауза' : 'Плей';
        restart();
      };
      btnPlay.addEventListener('click', () => { playing = !playing; sync(); });
      sync();
    }

    setIdx(0);
    restart();
  }

  const a11yBtn = $('#a11yBtn');
  if (a11yBtn) {
    a11yBtn.addEventListener('click', () => {
      const html = document.documentElement;
      const on = html.getAttribute('data-a11y') === '1';
      html.setAttribute('data-a11y', on ? '0' : '1');
      a11yBtn.setAttribute('aria-pressed', String(!on));
    });
  }

  const overlay = $('#searchOverlay');
  const openSearch = () => { overlay.classList.add('open'); $('#searchInput').focus(); };
  const closeSearch = () => overlay.classList.remove('open');

  const openBtn = $('#searchOpen');
  const closeBtn = $('#searchClose');
  openBtn && openBtn.addEventListener('click', openSearch);
  closeBtn && closeBtn.addEventListener('click', closeSearch);
  overlay && overlay.addEventListener('click', (e) => { if (e.target === overlay) closeSearch(); });

  const hints = $('#searchHints');
  hints && hints.addEventListener('click', (e) => {
    const b = e.target.closest('[data-hint]');
    if (!b) return;
    $('#searchInput').value = b.dataset.hint;
    $('#searchInput').focus();
  });

  document.addEventListener('keydown', (e) => {
    const isMac = navigator.platform.toUpperCase().includes('MAC');
    const ctrlK = (isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'k';
    if (ctrlK) { e.preventDefault(); openSearch(); }
    if (e.key === 'Escape') {
      closeSearch();
      closeMega();
    }
  });

  const mega = $('#megaPanel');
  const megaLinks = $('#megaLinks');
  const navLinks = $$('nav .navlink[data-mega]');
  const menuBtn = $('#menuBtn');
  const megaGroups = mega && megaLinks
    ? Array.from(megaLinks.querySelectorAll('[data-mega-group]'))
    : [];

  const MOBILE_BREAKPOINT = 980;
  const isMobileView = () => {
    if (window.matchMedia) {
      try {
        return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
      } catch (e) { }
    }
    return window.innerWidth <= MOBILE_BREAKPOINT;
  };

  const menuRoots = $$('[data-mega-root]');
  const megaMenus = menuRoots.map((root, i) => {
    const mega = root.querySelector('[data-mega-panel]');
    const megaLinks = root.querySelector('[data-mega-links]');
    const navLinks = $$('nav .navlink[data-mega]', root);
    const menuBtn = root.querySelector('[data-mega-btn]');
    const backdrop = root.querySelector('[data-mega-backdrop]');
    const closeBtn = root.querySelector('[data-mega-close]');

    // Optional: mobile drilldown (used in v4)
    const mobileRoot = root.querySelector('[data-mega-mobile-root]');
    const mobileHead = root.querySelector('[data-mega-mobile-head]');
    const mobileTitle = root.querySelector('[data-mega-mobile-title]');
    const mobileBack = root.querySelector('[data-mega-mobile-back]');

    const megaGroups = megaLinks
      ? Array.from(megaLinks.querySelectorAll('[data-mega-group]'))
      : [];

    return {
      root, mega, megaLinks, navLinks, menuBtn, backdrop, closeBtn, megaGroups,
      mobileRoot, mobileHead, mobileTitle, mobileBack,
      _id: i
    };
  }).filter(m => m.mega && m.megaLinks);

  const hoverTimers = new Map();
  function clearHoverTimer(m) {
    const t = hoverTimers.get(m._id);
    if (t) clearTimeout(t);
    hoverTimers.delete(m._id);
  }

  function setBackdrop(m, on) {
    if (!m.backdrop) return;
    m.backdrop.classList.toggle('open', !!on);
    m.backdrop.setAttribute('aria-hidden', on ? 'false' : 'true');
  }

  function closeMega() {
    megaMenus.forEach(m => {
      if (!m.mega) return;
      m.mega.classList.remove('open');
      setBackdrop(m, false);
      m.navLinks.forEach(a => a.setAttribute('aria-expanded', 'false'));
      m.menuBtn && m.menuBtn.setAttribute('aria-expanded', 'false');

      // reset v4 mobile drilldown state
      m.root && m.root.removeAttribute('data-mobile-view');

      // reset positioning tweaks
      m.mega.style.left = '';
      m.mega.style.right = '';
      m.mega.style.transform = '';

      clearHoverTimer(m);
    });
  }

  function hasDrilldown(m) {
    return !!(m && m.root && m.mobileRoot && m.root.getAttribute('data-mega-mobile') === 'drilldown');
  }

  function setMobileView(m, view, title) {
    if (!m || !m.root) return;
    if (!isMobileView() || !hasDrilldown(m)) return;
    m.root.setAttribute('data-mobile-view', view);
    if (m.mobileTitle && typeof title === 'string') {
      m.mobileTitle.textContent = title;
    }
  }

  function buildMobileRoot(m) {
    if (!m || !m.mobileRoot || !m.root) return;
    if (!hasDrilldown(m)) return;
    if (m.mobileRoot.dataset.built === '1') return;

    const links = $$('nav .navlink', m.root);
    const frag = document.createDocumentFragment();

    links.forEach((a) => {
      const txt = (a.textContent || '').trim().replace(/\s+/g, ' ');
      const key = a.dataset.mega;
      if (key) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'mega-rootlink';
        btn.setAttribute('data-mega-mobile-open', key);
        btn.setAttribute('aria-label', `${txt}: открыть`);
        btn.innerHTML = `
          <span class="mega-rootic" aria-hidden="true">◈</span>
          <span class="mega-roottext">${txt}</span>
          <span class="mega-rootchev" aria-hidden="true">›</span>
        `;
        frag.appendChild(btn);
      } else {
        const link = document.createElement('a');
        link.className = 'mega-rootlink';
        link.href = a.getAttribute('href') || '#';
        link.innerHTML = `
          <span class="mega-rootic" aria-hidden="true">◈</span>
          <span class="mega-roottext">${txt}</span>
          <span class="mega-rootchev" aria-hidden="true">→</span>
        `;
        frag.appendChild(link);
      }
    });

    m.mobileRoot.appendChild(frag);
    m.mobileRoot.dataset.built = '1';

    // bind drilldown open handlers
    const openBtns = $$('[data-mega-mobile-open]', m.mobileRoot);
    openBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!isMobileView() || !hasDrilldown(m)) return;
        const key = btn.getAttribute('data-mega-mobile-open');
        const tNode = btn.querySelector && btn.querySelector('.mega-roottext');
        const title = ((tNode && tNode.textContent) || (btn.textContent || '')).trim().replace(/\s+/g, ' ');
        openMega(key, btn, m, { title });
      });
    });
  }

  function openMega(key, trigger, m, opts = {}) {
    if (!m || !m.mega) return;

    const activeKey = key || 'about';
    m.mega.classList.add('open');

    // Mobile drilldown:
    // - when key is null/undefined (burger open): show root categories
    // - when key is present: show that group's subcategories + back button
    const rootMode = isMobileView() && hasDrilldown(m) && !key;
    if (isMobileView() && hasDrilldown(m)) {
      if (rootMode) {
        setMobileView(m, 'root', 'Разделы');
      } else {
        setMobileView(m, 'group', opts.title || 'Разделы');
      }
    }

    if (m.megaGroups && m.megaGroups.length) {
      if (rootMode) {
        m.megaGroups.forEach(g => { g.hidden = true; });
      } else {
        m.megaGroups.forEach(group => {
          group.hidden = group.dataset.megaGroup !== activeKey;
        });
      }
    }

    // Backdrop only matters in mobile view
    setBackdrop(m, isMobileView());

    // Desktop: position mega relative to the hovered/focused nav item
    if (!isMobileView()) {
      if (trigger && trigger.getBoundingClientRect) {
        const headerRect = m.root.getBoundingClientRect();
        const triggerRect = trigger.getBoundingClientRect();

        m.mega.style.left = '0px';
        m.mega.style.right = 'auto';
        m.mega.style.transform = 'none';

        const megaWidth = m.mega.offsetWidth || 0;
        const triggerCenter = triggerRect.left + triggerRect.width / 2;
        let left = triggerCenter - headerRect.left - megaWidth / 2;

        const padding = 8;
        const maxLeft = headerRect.width - megaWidth - padding;
        if (left < padding) left = padding;
        if (left > maxLeft) left = maxLeft;

        m.mega.style.left = `${left}px`;
      } else {
        m.mega.style.left = '';
        m.mega.style.right = '';
        m.mega.style.transform = '';
      }
    } else {
      // Mobile: let CSS drive drawers/sheets; ensure we don't keep desktop positioning
      m.mega.style.left = '';
      m.mega.style.right = '';
      m.mega.style.transform = '';
    }
  }

  function scheduleCloseMega(m) {
    if (isMobileView()) return;
    clearHoverTimer(m);
    const t = setTimeout(() => {
      hoverTimers.delete(m._id);
      closeMega();
    }, 120);
    hoverTimers.set(m._id, t);
  }

  megaMenus.forEach(m => {
    // If drilldown is enabled, build mobile root list once (from <nav>)
    buildMobileRoot(m);
    // Toggle per-top-item
    m.navLinks.forEach(a => {
      a.addEventListener('click', (e) => {
        if (!isMobileView()) return;
        e.preventDefault();
        const key = a.dataset.mega;
        const isOpen = a.getAttribute('aria-expanded') === 'true';
        closeMega();
        if (!isOpen) {
          a.setAttribute('aria-expanded', 'true');
          openMega(key, a, m);
        }
      });

      a.addEventListener('mouseenter', () => {
        if (isMobileView()) return;
        const key = a.dataset.mega;
        if (!key) return;
        clearHoverTimer(m);
        m.navLinks.forEach(link => link.setAttribute('aria-expanded', 'false'));
        a.setAttribute('aria-expanded', 'true');
        openMega(key, a, m);
      });

      a.addEventListener('mouseleave', () => {
        if (isMobileView()) return;
        scheduleCloseMega(m);
      });

      a.addEventListener('focus', () => {
        if (isMobileView()) return;
        const key = a.dataset.mega;
        if (!key) return;
        clearHoverTimer(m);
        m.navLinks.forEach(link => link.setAttribute('aria-expanded', 'false'));
        a.setAttribute('aria-expanded', 'true');
        openMega(key, a, m);
      });

      a.addEventListener('blur', () => {
        if (isMobileView()) return;
        scheduleCloseMega(m);
      });
    });

    // Hover safety
    if (m.mega) {
      m.mega.addEventListener('mouseenter', () => clearHoverTimer(m));
      m.mega.addEventListener('mouseleave', () => {
        if (isMobileView()) return;
        scheduleCloseMega(m);
      });

      // Mobile convenience: tap any link closes the sheet
      m.mega.addEventListener('click', (e) => {
        const a = e.target && e.target.closest ? e.target.closest('a') : null;
        if (!a) return;
        if (isMobileView()) closeMega();
      });
    }

    // Burger button opens first group (about)
    if (m.menuBtn) {
      m.menuBtn.addEventListener('click', () => {
        const isOpen = m.menuBtn.getAttribute('aria-expanded') === 'true';
        closeMega();
        if (!isOpen) {
          m.menuBtn.setAttribute('aria-expanded', 'true');
          // Mobile drilldown: open as root list (all top-level)
          if (isMobileView() && hasDrilldown(m)) {
            buildMobileRoot(m);
            openMega(null, null, m);
          } else {
            openMega('about', null, m);
          }
        }
      });
    }

    // Mobile: back -> root list
    m.mobileBack && m.mobileBack.addEventListener('click', () => {
      if (!isMobileView() || !hasDrilldown(m)) return;
      setMobileView(m, 'root', 'Разделы');
      if (m.megaGroups && m.megaGroups.length) {
        m.megaGroups.forEach(g => { g.hidden = true; });
      }
    });

    // Close controls
    m.closeBtn && m.closeBtn.addEventListener('click', closeMega);
    m.backdrop && m.backdrop.addEventListener('click', closeMega);
  });

  // Click-away close (supports multiple menus)
  document.addEventListener('click', (e) => {
    if (!megaMenus.length) return;
    const insideSomeMenu = megaMenus.some(m => {
      const inside = (m.mega && m.mega.contains(e.target))
        || m.navLinks.some(a => a.contains(e.target))
        || (m.menuBtn && m.menuBtn.contains(e.target));
      return inside;
    });
    if (!insideSomeMenu) closeMega();
  });


  const sc = $('#newsScroller');
  const prev = $('#newsPrev');
  const next = $('#newsNext');
  prev && prev.addEventListener('click', () => sc && sc.scrollBy({ left: -380, behavior: 'smooth' }));
  next && next.addEventListener('click', () => sc && sc.scrollBy({ left: 380, behavior: 'smooth' }));

  const pauseBtn = $('#tickerPause');
  const lane = document.querySelector('.ticker .lane');
  pauseBtn && pauseBtn.addEventListener('click', () => {
    const paused = pauseBtn.getAttribute('aria-pressed') === 'true';
    pauseBtn.setAttribute('aria-pressed', String(!paused));
    pauseBtn.textContent = paused ? 'Пауза' : 'Плей';
    if (lane) lane.style.animationPlayState = paused ? 'running' : 'paused';
  });

  const illBtns = $$('[data-ill-style]');
  const illNodes = $$('[data-ill][data-ill-key]');
  const getIllStyle = () => (localStorage.getItem('slavbank_ill_style') || 'a');

  function renderIll(node, style) {
    const key = node.getAttribute('data-ill-key');
    const tpl = document.getElementById(`ill-${key}-${style}`);
    if (!tpl) return;
    const frag = tpl.content.cloneNode(true);
    node.innerHTML = '';
    node.appendChild(frag);
  }

  function renderAllIll(style) {
    illNodes.forEach(n => renderIll(n, style));
    const active = $('[data-active]') || $('.slide[aria-hidden="false"]');
    if (active) {
      const ill = active.querySelector('[data-ill]');
      if (ill) {
        const clone = ill.cloneNode(true);
        ill.replaceWith(clone);
      }
    }
  }

  function setIllStyle(style) {
    localStorage.setItem('slavbank_ill_style', style);
    illBtns.forEach(b => b.setAttribute('aria-pressed', String(b.getAttribute('data-ill-style') === style)));
    renderAllIll(style);
  }

  if (illNodes.length) {
    setIllStyle(getIllStyle());
    illBtns.forEach(b => b.addEventListener('click', () => setIllStyle(b.getAttribute('data-ill-style'))));
  }

  const accs = $$('[data-acc]');
  accs.forEach(acc => {
    const btn = acc.querySelector('button');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const open = acc.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  const drawerOpen = $('#drawerOpen');
  const drawer = $('#drawer');
  const drawerBackdrop = $('#drawerBackdrop');
  const drawerClose = $('#drawerClose');
  const drawerSearch = $('#drawerSearch');
  const drawerA11y = $('#drawerA11y');

  function openDrawer() {
    if (!drawer || !drawerBackdrop) return;
    drawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    drawerBackdrop.setAttribute('aria-hidden', 'false');
    drawerOpen && drawerOpen.setAttribute('aria-expanded', 'true');
    const first = drawer.querySelector('a,button');
    first && first.focus();
  }
  function closeDrawer() {
    if (!drawer || !drawerBackdrop) return;
    drawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    drawerBackdrop.setAttribute('aria-hidden', 'true');
    drawerOpen && drawerOpen.setAttribute('aria-expanded', 'false');
  }

  drawerOpen && drawerOpen.addEventListener('click', openDrawer);
  drawerClose && drawerClose.addEventListener('click', closeDrawer);
  drawerBackdrop && drawerBackdrop.addEventListener('click', closeDrawer);

  drawer && drawer.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a) closeDrawer();
  });

  drawerSearch && drawerSearch.addEventListener('click', () => { closeDrawer(); openSearch(); });
  drawerA11y && drawerA11y.addEventListener('click', () => { closeDrawer(); a11yBtn && a11yBtn.click(); });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

})();


(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const tabs = $$('[data-dash-tab]');
  const panels = $$('[data-dash-panel]');
  if (!tabs.length || !panels.length) return;

  const withVT = (fn) => {
    const d = document;
    if (d.startViewTransition && !prefersReduced) {
      try { d.startViewTransition(() => fn()); }
      catch { fn(); }
    } else fn();
  };

  function setTab(key) {
    localStorage.setItem('slavbank_dash_tab', key);
    tabs.forEach(t => t.setAttribute('aria-selected', String(t.dataset.dashTab === key)));
    panels.forEach(p => {
      const on = p.dataset.dashPanel === key;
      if (on) {
        p.hidden = false;
        p.classList.add('is-active');
        if (key === 'about') {
          const ill = document.querySelector('.media-card[data-ill] svg');
          if (ill) {
            const clone = ill.cloneNode(true);
            ill.replaceWith(clone);
          }
        }
      } else {
        p.hidden = true;
        p.classList.remove('is-active');
      }
    });
  }

  tabs.forEach(t => t.addEventListener('click', () => withVT(() => setTab(t.dataset.dashTab))));
  const saved = localStorage.getItem('slavbank_dash_tab') || 'about';
  setTab(saved);
})();

(() => {
  const tabs = Array.from(document.querySelectorAll('[data-doc-tab]'));
  const panels = Array.from(document.querySelectorAll('[data-doc-panel]'));
  if (!tabs.length || !panels.length) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const withVT = (fn) => {
    const d = document;
    if (d.startViewTransition && !prefersReduced) {
      try { d.startViewTransition(() => fn()); }
      catch { fn(); }
    } else fn();
  };

  function setTab(key) {
    localStorage.setItem('slavbank_docs_tab', key);
    tabs.forEach(t => t.setAttribute('aria-selected', String(t.dataset.docTab === key)));
    panels.forEach(p => {
      const on = p.dataset.docPanel === key;
      p.hidden = !on;
      if (on) p.classList.add('is-active'); else p.classList.remove('is-active');
    });
  }

  tabs.forEach(t => t.addEventListener('click', () => withVT(() => setTab(t.dataset.docTab))));
  setTab(localStorage.getItem('slavbank_docs_tab') || 'aff');
})();


(() => {
  const toast = document.querySelector('.toast');
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg || 'Скопировано';
    toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { toast.hidden = true; }, 1200);
  }

  async function copyText(txt) {
    try {
      await navigator.clipboard.writeText(txt);
      showToast('Скопировано');
    } catch (e) {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = txt;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); showToast('Скопировано'); }
      finally { ta.remove(); }
    }
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest && e.target.closest('button.copy[data-copy]');
    if (!btn) return;
    const txt = btn.getAttribute('data-copy') || '';
    if (!txt) return;
    copyText(txt);
  });
})();



(() => {
  function showToast(msg) {
    const toast = document.querySelector('.toast');
    if (!toast) return;
    toast.textContent = msg || 'Готово';
    toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { toast.hidden = true; }, 1400);
  }

  document.addEventListener('submit', (e) => {
    const form = e.target;
    if (!form || !form.closest) return;
    if (!form.closest('[data-form-shell]')) return;
    e.preventDefault();
    showToast('Сообщение подготовлено');
    form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea').forEach(el => el.value = '');
  });
})();

```
