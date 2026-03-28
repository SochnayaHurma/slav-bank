# Slavyanbank Alpha/Beta — changed and new files

## `style.css`

```css
/*
Theme Name: Slavyanbank Alpha
Theme URI: https://example.invalid/slavyanbank-alpha
Author: OpenAI
Description: Alpha/Beta classic theme for safe frontend integration of the Slavyanbank Django source.
Version: 0.2.0
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

require_once get_template_directory() . '/inc/page-data.php';

const SB_ALPHA_REWRITE_VERSION_OPTION = 'sb_alpha_rewrite_version';

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

        return $parts;
    }

    $page_titles = [
        'kontakty' => 'КОНТАКТЫ - АО НКБ "СЛАВЯНБАНК" в Великом Новгороде',
        'otchetnost' => 'Отчетность - АО НКБ "СЛАВЯНБАНК"',
        'rekvizity-banka' => 'Реквизиты банка - АО НКБ "СЛАВЯНБАНК" в Великом Новгороде',
        'napisat-v-bank' => 'Написать в банк - АО НКБ "СЛАВЯНБАНК"',
        'podderzhka' => 'ПОДДЕРЖКА в Великом Новгороде - АО НКБ "СЛАВЯНБАНК"',
        'tarify-banka' => 'ТАРИФЫ БАНКА - АО НКБ "СЛАВЯНБАНК"',
    ];

    foreach ($page_titles as $slug => $title) {
        if (is_page($slug)) {
            $parts['title'] = $title;
            break;
        }
    }

    return $parts;
}
add_filter('document_title_parts', 'sb_alpha_document_title_parts');

function sb_alpha_enqueue_assets(): void
{
    $version = wp_get_theme()->get('Version') ?: '0.2.0';
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
        'sb-alpha-beta-pages' => 'assets/css/beta-pages.css',
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
        'info-bank-page' => home_url('/'),
        'requisites_bank' => sb_alpha_local_page_url('rekvizity-banka', 'https://slavbank.ru/rekvizity-banka.html/'),
        'governance' => 'https://slavbank.ru/o-banke-slavyanbank-html/organy_upravlenya.html/',
        'reporting' => sb_alpha_local_page_url('otchetnost', 'https://slavbank.ru/otchetnost.html/'),
        'disclosur-regulatory' => 'https://slavbank.ru/o-banke-html/info_bank-html/raskritie-informacii.html/',
        'notaries' => 'https://slavbank.ru/informacziya-dlya-notariusov.html/',
        'novosti' => 'https://slavbank.ru/novosti.html/',
        'tariffs' => sb_alpha_local_page_url('tarify-banka', 'https://slavbank.ru/tarify-banka.html/'),
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
        'client-bank-primary-login' => 'https://dbo.slavbank.ru:20101/',
        'client-bank-backup-login' => 'https://dbo1.slavbank.ru:20101/',
        'instruction' => 'https://slavbank.ru/podderzhka-html/instrukcziya-po-rabote-v-sisteme-klient-bank.html/',
        'faq' => 'https://slavbank.ru/podderzhka-html/chasto-zadavaemye-voprosy.html/',
        'ecp-regeneration' => 'https://slavbank.ru/podderzhka-html/regen.html/',
        'support' => sb_alpha_local_page_url('podderzhka', 'https://slavbank.ru/podderzhka.html/'),
        'security' => 'https://slavbank.ru/podderzhka-html/recom_bezopasnost.html/',
        'appeal-123-fz' => 'https://slavbank.ru/obrashhenie-po-123-fz.html/',
        'covid19' => 'https://slavbank.ru/covid19.html/',
        'contacts' => sb_alpha_local_page_url('kontakty', 'https://slavbank.ru/kontakty.html/'),
        'write-to-bank' => sb_alpha_local_page_url('napisat-v-bank', 'https://slavbank.ru/forma-obratnoj-svyazi.html/'),
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

function sb_alpha_legacy_routes(): array
{
    return [
        'info-bank-page' => [
            'pattern' => '^o-banke-slavyanbank-html/info_bank-html\.html/?$',
            'url' => home_url('/'),
        ],
        'contacts' => [
            'pattern' => '^kontakty\.html/?$',
            'route' => 'contacts',
        ],
        'reporting' => [
            'pattern' => '^otchetnost\.html/?$',
            'route' => 'reporting',
        ],
        'requisites_bank' => [
            'pattern' => '^rekvizity-banka\.html/?$',
            'route' => 'requisites_bank',
        ],
        'write-to-bank' => [
            'pattern' => '^forma-obratnoj-svyazi\.html/?$',
            'route' => 'write-to-bank',
        ],
        'support' => [
            'pattern' => '^podderzhka\.html/?$',
            'route' => 'support',
        ],
        'tariffs' => [
            'pattern' => '^tarify-banka\.html/?$',
            'route' => 'tariffs',
        ],
    ];
}

function sb_alpha_register_legacy_rewrites(): void
{
    foreach (sb_alpha_legacy_routes() as $token => $config) {
        add_rewrite_rule($config['pattern'], 'index.php?sb_alpha_legacy_route=' . $token, 'top');
    }
}
add_action('init', 'sb_alpha_register_legacy_rewrites');

function sb_alpha_add_query_vars(array $vars): array
{
    $vars[] = 'sb_alpha_legacy_route';

    return $vars;
}
add_filter('query_vars', 'sb_alpha_add_query_vars');

function sb_alpha_store_rewrite_version(): void
{
    update_option(SB_ALPHA_REWRITE_VERSION_OPTION, (string) (wp_get_theme()->get('Version') ?: '0.2.0'), false);
}

function sb_alpha_maybe_flush_legacy_rewrites(): void
{
    $version = (string) (wp_get_theme()->get('Version') ?: '0.2.0');
    $stored_version = (string) get_option(SB_ALPHA_REWRITE_VERSION_OPTION, '');

    if ($stored_version === $version) {
        return;
    }

    sb_alpha_register_legacy_rewrites();
    flush_rewrite_rules(false);
    sb_alpha_store_rewrite_version();
}
add_action('admin_init', 'sb_alpha_maybe_flush_legacy_rewrites');

function sb_alpha_flush_legacy_rewrites_on_switch(): void
{
    sb_alpha_register_legacy_rewrites();
    flush_rewrite_rules(false);
    sb_alpha_store_rewrite_version();
}
add_action('after_switch_theme', 'sb_alpha_flush_legacy_rewrites_on_switch');

function sb_alpha_handle_legacy_redirect(): void
{
    if (is_admin() || wp_doing_ajax() || wp_doing_cron()) {
        return;
    }

    $token = get_query_var('sb_alpha_legacy_route');
    if (!is_string($token) || $token === '') {
        return;
    }

    $routes = sb_alpha_legacy_routes();
    if (!isset($routes[$token])) {
        return;
    }

    $target = '';
    if (!empty($routes[$token]['route'])) {
        $target = sb_alpha_url((string) $routes[$token]['route']);
    } elseif (!empty($routes[$token]['url'])) {
        $target = (string) $routes[$token]['url'];
    }

    if ($target === '') {
        $target = home_url('/');
    }

    wp_safe_redirect($target, 301, 'Slavyanbank Alpha Legacy');
    exit;
}
add_action('template_redirect', 'sb_alpha_handle_legacy_redirect');

function sb_alpha_feedback_form_action_url(): string
{
    return admin_url('admin-post.php');
}

function sb_alpha_feedback_return_url(array $args = []): string
{
    $url = sb_alpha_url('write-to-bank');

    if (!empty($args)) {
        $url = add_query_arg($args, $url);
    }

    return $url . '#form';
}

function sb_alpha_feedback_notice(): array
{
    $status = isset($_GET['feedback']) ? sanitize_key((string) wp_unslash($_GET['feedback'])) : '';

    $messages = [
        'sent' => [
            'tone' => 'success',
            'title' => 'Сообщение отправлено',
            'text' => 'Спасибо. Мы получили обращение и вернемся с ответом по указанным контактам.',
        ],
        'invalid' => [
            'tone' => 'error',
            'title' => 'Проверьте форму',
            'text' => 'Укажите сообщение, минимум один контакт для ответа и подтвердите согласие на обработку персональных данных.',
        ],
        'nonce' => [
            'tone' => 'error',
            'title' => 'Не удалось подтвердить запрос',
            'text' => 'Обновите страницу и отправьте форму повторно.',
        ],
        'mail-failed' => [
            'tone' => 'error',
            'title' => 'Форма не отправлена',
            'text' => 'На текущем стенде WordPress не смог отправить письмо. Проверьте mail transport и системный email WordPress.',
        ],
    ];

    return $messages[$status] ?? [];
}

function sb_alpha_feedback_recipient(): string
{
    $recipient = (string) apply_filters('sb_alpha_feedback_recipient', get_option('admin_email'));

    if (!is_email($recipient)) {
        $recipient = (string) get_option('admin_email');
    }

    return $recipient;
}

function sb_alpha_handle_feedback_submission(): void
{
    $nonce = isset($_POST['sb_alpha_feedback_nonce']) ? (string) wp_unslash($_POST['sb_alpha_feedback_nonce']) : '';
    if ($nonce === '' || !wp_verify_nonce($nonce, 'sb_alpha_feedback_submit')) {
        wp_safe_redirect(sb_alpha_feedback_return_url(['feedback' => 'nonce']));
        exit;
    }

    $honeypot = isset($_POST['website']) ? trim((string) wp_unslash($_POST['website'])) : '';
    if ($honeypot !== '') {
        wp_safe_redirect(sb_alpha_feedback_return_url(['feedback' => 'sent']));
        exit;
    }

    $name = isset($_POST['name']) ? sanitize_text_field((string) wp_unslash($_POST['name'])) : '';
    $email = isset($_POST['email']) ? sanitize_email((string) wp_unslash($_POST['email'])) : '';
    $phone_source = isset($_POST['phone']) ? (string) wp_unslash($_POST['phone']) : '';
    $phone = preg_replace('/[^0-9\+\(\)\-\s]/', '', $phone_source);
    $phone = is_string($phone) ? trim($phone) : '';
    $message = isset($_POST['message']) ? trim(sanitize_textarea_field((string) wp_unslash($_POST['message']))) : '';
    $consent = !empty($_POST['consent']);

    if ($message === '' || (!$consent) || ($email === '' && $phone === '')) {
        wp_safe_redirect(sb_alpha_feedback_return_url(['feedback' => 'invalid']));
        exit;
    }

    if ($email !== '' && !is_email($email)) {
        wp_safe_redirect(sb_alpha_feedback_return_url(['feedback' => 'invalid']));
        exit;
    }

    $body_lines = [
        'Новое обращение с сайта АО НКБ «СЛАВЯНБАНК».',
        '',
        'Имя: ' . ($name !== '' ? $name : 'Не указано'),
        'Email: ' . ($email !== '' ? $email : 'Не указан'),
        'Телефон: ' . ($phone !== '' ? $phone : 'Не указан'),
        '',
        'Сообщение:',
        $message,
        '',
        'Источник: ' . home_url('/'),
    ];

    $headers = ['Content-Type: text/plain; charset=UTF-8'];
    if ($email !== '') {
        $reply_name = $name !== '' ? $name : 'Пользователь сайта';
        $headers[] = sprintf('Reply-To: %s <%s>', $reply_name, $email);
    }

    $subject = 'Обращение с сайта АО НКБ «СЛАВЯНБАНК»';
    if ($name !== '') {
        $subject .= ' — ' . $name;
    }

    $sent = wp_mail(
        sb_alpha_feedback_recipient(),
        $subject,
        implode(PHP_EOL, $body_lines),
        $headers
    );

    wp_safe_redirect(
        sb_alpha_feedback_return_url(['feedback' => $sent ? 'sent' : 'mail-failed'])
    );
    exit;
}
add_action('admin_post_nopriv_sb_alpha_feedback', 'sb_alpha_handle_feedback_submission');
add_action('admin_post_sb_alpha_feedback', 'sb_alpha_handle_feedback_submission');
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
              href="tel:+74951989951"
              >Позвонить</a
            >
            <a
              class="btn glass pill"
              style="color: var(--c-primary-700)"
              href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form"
              >Написать</a
            >
          </div>
          <div class="muted" style="margin-top: 10px">
            <a href="mailto:ved@slavbank.ru">ved@slavbank.ru</a>
          </div>
          <div class="muted" style="margin-top: 10px">
            <a href="tel:+74951989951">+7(495)198-99-51</a>
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
          <div class="section-flow">
            <div>
              <div class="kicker">Отчетность банка</div>
              <h2 style="margin: 8px 0 10px"><strong>ОТЧЕТНОСТЬ АО НКБ «СЛАВЯНБАНК»</strong></h2>
              <p class="has-text-align-center has-gray-color has-text-color">
                <strong>ГОДОВАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ</strong>
              </p>
            </div>

            <div class="doc-shelf">
              <?php foreach (sb_alpha_get_reporting_annual_reports() as $item) : ?>
                <a class="doc-card" href="<?php echo esc_url($item['url']); ?>" target="_blank" rel="noopener">
                  <span class="doc-ext">PDF</span>
                  <div class="doc-body">
                    <div class="doc-title"><?php echo esc_html($item['title']); ?></div>
                    <div class="muted" style="font-size: 10px"><?php echo esc_html($item['footer']); ?></div>
                  </div>
                  <span class="doc-arrow">→</span>
                </a>
              <?php endforeach; ?>
            </div>

            <div class="prose">
              <div class="entry-content">
                <h3 class="kicker"><strong>ПРОМЕЖУТОЧНАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ</strong></h3>
                <h4 class="kicker"><strong>ПОКАЗАТЕЛИ ДЕЯТЕЛЬНОСТИ БАНКА</strong></h4>
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
              </details>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-1c0cbaf2f381b6c793a3227c14c7ed14 is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2023
                    год</strong>
                </summary>
                

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
              </details>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-29cde331b4598194bb67c11ac475a8e9 is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2022
                    год</strong>
                </summary>
                

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
              </details>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-389ec5414216c11d23133fcef6fd05fa is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2021
                    год</strong>
                </summary>
                

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
              </details>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-c72bfe4d7d46303c55a244e13cddbea0 is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2020
                    год</strong>
                </summary>
                

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
              </details>
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

## `assets/css/beta-pages.css`

```css
.section-flow {
  display: grid;
  gap: var(--s-4);
}

.section-card {
  padding: var(--s-4);
  border: 1px solid var(--c-border);
  border-radius: var(--r-lg);
  background: #fff;
  box-shadow: var(--shadow-sm);
}

.section-card--accent {
  background:
    radial-gradient(900px 320px at 100% 0, rgba(0, 103, 128, 0.12), transparent 60%),
    linear-gradient(180deg, rgba(159, 213, 213, 0.16), #fff);
}

.section-head-inline {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--s-3);
  flex-wrap: wrap;
}

.info-grid,
.support-topic-grid,
.tariff-grid,
.contact-way-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--s-4);
}

.info-card,
.support-topic-card,
.tariff-panel,
.contact-way-card {
  padding: var(--s-4);
  border: 1px solid var(--c-border);
  border-radius: var(--r-lg);
  background: #fff;
  box-shadow: var(--shadow-sm);
}

.info-card h3,
.support-topic-card h3,
.tariff-panel h3,
.contact-way-card h3 {
  margin: 8px 0 10px;
}

.info-card p,
.info-card li,
.support-topic-card p,
.support-topic-card li,
.tariff-panel p,
.contact-way-card p {
  color: var(--c-muted);
}

.info-card ul,
.support-topic-card ul,
.tariff-panel ul,
.contact-way-card ul,
.legal-copy ul {
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 8px;
}

.kv-table {
  border: 1px solid var(--c-border);
  border-radius: var(--r-lg);
  overflow: hidden;
  background: #fff;
  box-shadow: var(--shadow-sm);
}

.kv-row {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  border-top: 1px solid rgba(2, 6, 23, 0.10);
}

.kv-row:first-child {
  border-top: 0;
}

.kv-label {
  padding: var(--s-4);
  background: rgba(245, 250, 252, 0.9);
  font-weight: 600;
}

.kv-value {
  padding: var(--s-4);
  display: grid;
  gap: 12px;
}

.kv-copy {
  display: flex;
  justify-content: flex-end;
}

.tariff-grid .doc-card,
.support-topic-grid .doc-card,
.contact-way-grid .doc-card {
  height: 100%;
}

.note-list,
.support-bullets,
.contact-way-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding-left: 18px;
}

.status-note {
  padding: var(--s-3) var(--s-4);
  border-radius: var(--r-lg);
  border: 1px solid transparent;
  display: grid;
  gap: 6px;
}

.status-note--success {
  border-color: rgba(11, 117, 83, 0.22);
  background: rgba(11, 117, 83, 0.08);
}

.status-note--error {
  border-color: rgba(167, 29, 42, 0.18);
  background: rgba(167, 29, 42, 0.08);
}

.status-note strong {
  font-weight: 700;
}

.form-shell {
  display: grid;
  gap: var(--s-4);
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--s-3);
}

.field {
  display: grid;
  gap: 8px;
}

.field--full {
  grid-column: 1 / -1;
}

.field label {
  font-weight: 600;
}

.field input,
.field textarea {
  width: 100%;
  border: 1px solid var(--c-border);
  border-radius: var(--r-md);
  background: #fff;
  color: var(--c-text);
  padding: 14px 16px;
  box-shadow: var(--shadow-sm);
}

.field textarea {
  min-height: 170px;
  resize: vertical;
}

.field input:focus,
.field textarea:focus {
  outline: 2px solid rgba(0, 103, 128, 0.18);
  border-color: rgba(0, 103, 128, 0.45);
}

.honeypot {
  position: absolute !important;
  left: -9999px !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.consent-box {
  display: grid;
  gap: 10px;
  padding: var(--s-3);
  border: 1px solid rgba(2, 6, 23, 0.08);
  border-radius: var(--r-lg);
  background: rgba(245, 250, 252, 0.8);
}

.consent-box label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  color: var(--c-muted);
}

.consent-box input[type="checkbox"] {
  margin-top: 2px;
}

.legal-copy {
  display: grid;
  gap: 12px;
}

.legal-copy details {
  padding: var(--s-3);
  border-radius: var(--r-lg);
  border: 1px solid rgba(2, 6, 23, 0.08);
  background: rgba(245, 250, 252, 0.9);
}

.legal-copy summary {
  cursor: pointer;
  font-weight: 600;
}

.legal-copy .prose {
  margin-top: 12px;
}

.link-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--s-4);
}

.service-links {
  display: grid;
  gap: 12px;
}

.service-link {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 16px;
  border-radius: var(--r-lg);
  border: 1px solid rgba(2, 6, 23, 0.08);
  background: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  color: inherit;
}

.service-link:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.service-link strong {
  display: block;
  margin-bottom: 4px;
}

.service-link span:last-child {
  white-space: nowrap;
}

.route-meta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.route-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(245, 250, 252, 0.95);
  border: 1px solid rgba(2, 6, 23, 0.08);
  color: var(--c-muted);
  font-size: 14px;
}

.muted-card {
  padding: var(--s-3);
  border-radius: var(--r-lg);
  background: rgba(245, 250, 252, 0.85);
  border: 1px solid rgba(2, 6, 23, 0.08);
}

@media (max-width: 980px) {
  .info-grid,
  .support-topic-grid,
  .tariff-grid,
  .contact-way-grid,
  .field-grid,
  .link-columns {
    grid-template-columns: 1fr;
  }

  .kv-row {
    grid-template-columns: 1fr;
  }

  .kv-label {
    border-bottom: 1px solid rgba(2, 6, 23, 0.08);
  }
}
```

## `inc/page-data.php`

```php
<?php
if (!defined('ABSPATH')) {
    exit;
}

function sb_alpha_get_reporting_annual_reports(): array
{
    return [
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
}

function sb_alpha_get_tariffs_download(): array
{
    return [
        [
            'date' => 'с 01.01.2026г',
            'title' => 'Тарифы банка в валюте РФ.',
            'url' => 'https://slavbank.ru/wp-content/uploads/standard-osobiy-s-01012026.pdf',
            'kind' => 'PDF',
        ],
        [
            'date' => 'с 01.12.2025г',
            'title' => 'Тарифы банка в валюте РФ и иностранной валюте «Славный» для новых клиентов.',
            'url' => 'https://slavbank.ru/wp-content/uploads/tp-slavny.pdf',
            'kind' => 'PDF',
        ],
        [
            'date' => 'с 01.12.2025г',
            'title' => 'Тарифы банка в иностранной валюте.',
            'url' => 'https://slavbank.ru/wp-content/uploads/tarify-v-in-valyute-s-01122025.pdf',
            'kind' => 'PDF',
        ],
        [
            'date' => 'с 01.11.2025г',
            'title' => 'Тарифы банка в валюте РФ и иностранной валюте «Приветственный» для новых клиентов.',
            'url' => 'https://slavbank.ru/wp-content/uploads/tarif-privetstvenny.pdf',
            'kind' => 'PDF',
        ],
        [
            'date' => 'с 01.11.2025г',
            'title' => 'Тарифы банка в валюте РФ и иностранной валюте «Депозитный» для новых клиентов.',
            'url' => 'https://slavbank.ru/wp-content/uploads/tarif-depositny.pdf',
            'kind' => 'PDF',
        ],
    ];
}

function sb_alpha_get_tariffs_view(): array
{
    return [
        [
            'date' => 'действуют с 01.01.2026г.',
            'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в валюте РФ',
            'url' => 'https://slavbank.ru/tarify-banka-html/tarify_rf.html/',
            'kind' => 'HTML',
        ],
        [
            'date' => 'действуют с 13.10.2025г. по 28.02.2026г.',
            'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Славный»',
            'url' => 'https://slavbank.ru/tarify-banka-html/tarif_slavny.html/',
            'kind' => 'HTML',
        ],
        [
            'date' => 'действуют с 01.12.2025г.',
            'title' => 'Тарифы банковских услуг по обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте',
            'url' => 'https://slavbank.ru/tarify-banka-html/tarify_valuta.html/',
            'kind' => 'HTML',
        ],
        [
            'date' => 'действуют с 01.11.2025г. по 28.02.2026г.',
            'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Приветственный»',
            'url' => 'https://slavbank.ru/tarify-banka-html/tarif_privetstvenny.html/',
            'kind' => 'HTML',
        ],
        [
            'date' => 'действуют с 01.11.2025г. по 28.02.2026г.',
            'title' => 'Тарифы банковских услуг по расчетно-кассовому обслуживанию юридических лиц, индивидуальных предпринимателей и физических лиц по операциям в иностранной валюте и валюте РФ «Депозитный»',
            'url' => 'https://slavbank.ru/tarify-banka-html/tarif_depositny.html/',
            'kind' => 'HTML',
        ],
    ];
}

function sb_alpha_get_bank_requisites_rows(): array
{
    return [
        [
            'label' => 'Полное официальное наименование банка, регистрационный номер и дата государственной регистрации в Банке России, номер и дата лицензии',
            'value' => 'Коммерческий банк «Славянбанк» образован 15 ноября 1989 года. В результате преобразования 25 декабря 1998 года перерегистрирован Центральным банком Российской Федерации (Банком России) в ЗАКРЫТОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО «НОВГОРОДСКИЙ КОММЕРЧЕСКИЙ БАНК «СЛАВЯНБАНК» за № 804. В соответствии с решением общего собрания акционеров Банка от 18 января 2018 года полное фирменное и сокращенное фирменное наименования Банка приведены в соответствие с законодательством Российской Федерации и изменены на АКЦИОНЕРНОЕ ОБЩЕСТВО НОВГОРОДСКИЙ КОММЕРЧЕСКИЙ БАНК «СЛАВЯНБАНК», АО НКБ «СЛАВЯНБАНК» (перерегистрирован Центральным банком Российской Федерации (Банком России) 21 февраля 2018г). Центральным Банком Российской Федерации 6 сентября 2018 года выдана Базовая лицензия на осуществление банковских операций со средствами в рублях и иностранной валюте (без права привлечения во вклады денежных средств физических лиц) и на привлечение во вклады и размещение драгоценных металлов за № 804, действующая в настоящее время.',
        ],
        [
            'label' => 'Сокращенное наименование',
            'value' => 'АО НКБ «СЛАВЯНБАНК»',
        ],
        [
            'label' => 'Полное и сокращенное наименования на английском языке',
            'value' => 'SB CBN «SLAVYANBANK»',
        ],
        [
            'label' => 'Регистрационный номер и дата внесения записи в ЕГРЮЛ',
            'value' => '№ 1025300000175, 03.09.2002',
        ],
        [
            'label' => 'Идентификационный номер налогоплательщика (ИНН)',
            'value' => '5321068480',
        ],
        [
            'label' => 'Наименование и банковский идентификационный код территориального учреждения Банка России, осуществляющего надзор за деятельностью',
            'value' => 'Северо-Западное главное управление Центрального банка Российской Федерации, БИК 044030001',
        ],
        [
            'label' => 'Платежные реквизиты',
            'value' => 'кор. счет 30101810445374030948, БИК 044030948',
        ],
        [
            'label' => 'Код LEI',
            'value' => '253400S76FWMXGUJC185',
        ],
        [
            'label' => 'Юридический и фактический адреса',
            'value' => '173004, Российская Федерация, г. Великий Новгород, ул. Черемнова-Конюхова, дом 12',
        ],
        [
            'label' => 'Номера телефонов',
            'value' => '(8162) 66-52-47',
            'url' => 'tel:+78162665247',
        ],
        [
            'label' => 'Адрес в Интернете',
            'value' => 'https://slavbank.ru',
            'url' => 'https://slavbank.ru',
            'external' => true,
        ],
        [
            'label' => 'Адрес электронной почты',
            'value' => 'nkb@slavbank.ru',
            'url' => 'mailto:nkb@slavbank.ru',
        ],
        [
            'label' => 'Режим работы (с клиентами)',
            'value' => 'пн-чт с 9.00 — 17.00 (касса до 16.30), пт с 9.00 до 16.00 (касса до 15.30), без обеда, выходные — суббота, воскресенье',
        ],
        [
            'label' => 'Адрес представительства в Москве',
            'value' => '109044, Российская Федерация, г. Москва, вн. тер. г. муниципальный округ Таганский, ул. Динамовская, дом 1А',
        ],
        [
            'label' => 'Дата открытия представительства в Москве',
            'value' => '09.12.2025',
        ],
    ];
}
```

## `page-rekvizity-banka.php`

```php
<?php get_header(); ?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">О банке</div>
            <h1 style="margin:8px 0 10px;">Реквизиты банка</h1>
            <p class="muted" style="max-width:78ch;">
              Основные регистрационные данные, лицензия, контакты банка и сведения о внешних контрагентах,
              которые указаны в исходном Django-шаблоне.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержимому</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>" class="mono">Информация банка</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('reporting')); ?>" class="mono">Отчетность</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('contacts')); ?>" class="mono">Контакты</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <div class="section-flow">
            <div class="alert">
              <div class="alert-dot" aria-hidden="true"></div>
              <div>
                <div style="font-weight:600;">Ключевые сведения о банке</div>
                <div class="muted" style="margin-top:4px;">
                  Здесь собраны регистрационные реквизиты, контакты и публичные сведения о надзоре, регистраторе
                  и аудиторской организации. Для копирования значений используйте кнопки в таблице.
                </div>
              </div>
            </div>

            <div class="info-grid">
              <article class="info-card">
                <div class="kicker">Аудиторская организация</div>
                <h3>ООО «Балтийский аудит»</h3>
                <ul>
                  <li>Адрес: 196084, г. Санкт-Петербург, Московский пр., д. 127, кв. 30</li>
                  <li>E-mail: <a href="mailto:mail@baudit.spb.ru">mail@baudit.spb.ru</a></li>
                  <li>ОГРН: 1147847390250</li>
                  <li>Член СРО аудиторов Ассоциация «Содружество» (ОРНЗ 11406045396)</li>
                </ul>
              </article>

              <article class="info-card">
                <div class="kicker">Регистратор</div>
                <h3>АО «Независимая регистраторская компания Р.О.С.Т.»</h3>
                <ul>
                  <li>ИНН 7726030449, лицензия № 045-13976-000001 от 03.12.2002</li>
                  <li>Адрес: 173003, Новгородская обл., г. Великий Новгород, наб. реки Гзень, дом 11, оф. 403</li>
                  <li>Телефон: <a href="tel:+78162731720">(8162) 73-17-20</a>, 730-723</li>
                  <li>E-mail: <a href="mailto:vnovgorod@rrost.ru">vnovgorod@rrost.ru</a></li>
                </ul>
              </article>

              <article class="info-card section-card--accent">
                <div class="kicker">Банковский надзор</div>
                <h3>Служба текущего банковского надзора Банка России</h3>
                <ul>
                  <li>300 — бесплатно для звонков с мобильных телефонов</li>
                  <li><a href="tel:88003003000">8 (800) 300-30-00</a> — бесплатно на территории РФ</li>
                  <li><a href="tel:+74993003000">+7 (499) 300-30-00</a> — по тарифу оператора</li>
                  <li>
                    Обращение о нарушении прав можно направить через
                    <a href="http://www.cbr.ru/Интернет-приемная" target="_blank" rel="noopener">интернет-приемную Банка России</a>.
                  </li>
                </ul>
              </article>
            </div>

            <div class="section-card">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Реквизиты</div>
                  <h2 style="margin:8px 0 0;">Сведения о банке</h2>
                </div>
                <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Уточнить данные</a>
              </div>

              <div class="kv-table" style="margin-top: var(--s-4);">
                <?php foreach (sb_alpha_get_bank_requisites_rows() as $row) : ?>
                  <?php
                  $value = (string) $row['value'];
                  $copy_value = isset($row['copy']) ? (string) $row['copy'] : $value;
                  $has_link = !empty($row['url']);
                  $is_external = !empty($row['external']);
                  ?>
                  <div class="kv-row">
                    <div class="kv-label"><?php echo esc_html((string) $row['label']); ?></div>
                    <div class="kv-value">
                      <div>
                        <?php if ($has_link) : ?>
                          <a href="<?php echo esc_url((string) $row['url']); ?>"<?php echo $is_external ? ' target="_blank" rel="noopener"' : ''; ?>>
                            <?php echo esc_html($value); ?>
                          </a>
                        <?php else : ?>
                          <?php echo esc_html($value); ?>
                        <?php endif; ?>
                      </div>
                      <div class="kv-copy">
                        <button class="copy mini" type="button" data-copy="<?php echo esc_attr($copy_value); ?>">Копировать</button>
                      </div>
                    </div>
                  </div>
                <?php endforeach; ?>
              </div>
            </div>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

  <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>Скопировано</div>
</main>

<?php get_footer(); ?>
```

## `page-napisat-v-bank.php`

```php
<?php
$feedback_notice = sb_alpha_feedback_notice();
get_header();
?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Написать в банк</h1>
            <p class="muted" style="max-width:78ch;">
              АО НКБ «СЛАВЯНБАНК» принимает обращения заявителей почтой, нарочно, по электронной почте,
              в офисе банка и через форму обратной связи на сайте.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#form">К форме</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('vacancies')); ?>" class="mono">Вакансии</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>" class="mono">Написать</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('covid19')); ?>" class="mono">COVID19</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <div class="section-flow">
            <div class="alert">
              <div class="alert-dot" aria-hidden="true"></div>
              <div>
                <div style="font-weight:600;">Как можно направить обращение</div>
                <div class="muted" style="margin-top:4px;">
                  Источник на master-ветке перечисляет пять каналов: почтовая связь, личная подача на бумаге,
                  прием в офисе, электронная почта и официальный сайт банка.
                </div>
              </div>
            </div>

            <div class="contact-way-grid">
              <article class="contact-way-card">
                <div class="kicker">Почтовая связь</div>
                <h3>Адрес банка</h3>
                <p>173004, Новгородская обл., г. Великий Новгород, ул. Черемнова-Конюхова, дом 12.</p>
                <div class="kv-copy" style="margin-top:12px;">
                  <button class="copy mini" type="button" data-copy="173004, Новгородская обл., г. Великий Новгород, ул. Черемнова-Конюхова, дом 12">Копировать адрес</button>
                </div>
              </article>

              <article class="contact-way-card">
                <div class="kicker">Лично в офисе</div>
                <h3>Прием обращений</h3>
                <p>В местах обслуживания клиентов по адресу Великий Новгород, ул. Черемнова-Конюхова, 12.</p>
                <div class="row" style="margin-top:12px; flex-wrap:wrap;">
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты и режим работы</a>
                </div>
              </article>

              <article class="contact-way-card section-card--accent">
                <div class="kicker">Электронные каналы</div>
                <h3>E-mail и сайт</h3>
                <ul class="contact-way-list">
                  <li><a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a></li>
                  <li><a href="<?php echo esc_url(home_url('/')); ?>" target="_blank" rel="noopener"><?php echo esc_html(home_url('/')); ?></a></li>
                </ul>
              </article>
            </div>

            <div class="section-card" id="form">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Форма обратной связи</div>
                  <h2 style="margin:8px 0 0;">Отправьте нам обращение прямо сейчас</h2>
                </div>
                <a class="btn glass" href="mailto:nkb@slavbank.ru">Написать по e-mail</a>
              </div>

              <?php if (!empty($feedback_notice)) : ?>
                <div class="status-note status-note--<?php echo esc_attr((string) $feedback_notice['tone']); ?>" style="margin-top: var(--s-4);">
                  <strong><?php echo esc_html((string) $feedback_notice['title']); ?></strong>
                  <span><?php echo esc_html((string) $feedback_notice['text']); ?></span>
                </div>
              <?php endif; ?>

              <form class="form-shell" style="margin-top: var(--s-4);" action="<?php echo esc_url(sb_alpha_feedback_form_action_url()); ?>" method="post">
                <input type="hidden" name="action" value="sb_alpha_feedback" />
                <?php wp_nonce_field('sb_alpha_feedback_submit', 'sb_alpha_feedback_nonce'); ?>

                <div class="honeypot" aria-hidden="true">
                  <label for="sb-alpha-website">Website</label>
                  <input id="sb-alpha-website" type="text" name="website" tabindex="-1" autocomplete="off" />
                </div>

                <div class="field-grid">
                  <div class="field">
                    <label for="sb-alpha-name">ФИО</label>
                    <input id="sb-alpha-name" type="text" name="name" autocomplete="name" />
                  </div>
                  <div class="field">
                    <label for="sb-alpha-phone">Телефон</label>
                    <input id="sb-alpha-phone" type="text" name="phone" autocomplete="tel" placeholder="Например, +7 (8162) 66-52-47" />
                  </div>
                  <div class="field">
                    <label for="sb-alpha-email">E-mail</label>
                    <input id="sb-alpha-email" type="email" name="email" autocomplete="email" placeholder="you@example.com" />
                  </div>
                  <div class="field">
                    <label>Канал ответа</label>
                    <div class="muted-card">Ответ будет направлен по указанному телефону или e-mail — обязательный выбор темы на этом этапе не требуется.</div>
                  </div>
                  <div class="field field--full">
                    <label for="sb-alpha-message">Сообщение</label>
                    <textarea id="sb-alpha-message" name="message" required placeholder="Опишите вопрос или обращение в свободной форме"></textarea>
                  </div>
                </div>

                <div class="consent-box">
                  <label for="sb-alpha-consent">
                    <input id="sb-alpha-consent" type="checkbox" name="consent" value="1" required />
                    <span>
                      Нажимая кнопку «Отправить», вы даёте согласие на обработку персональных данных в объеме,
                      необходимом для рассмотрения обращения и направления ответа.
                    </span>
                  </label>
                  <div class="muted" style="font-size:14px;">
                    Для ответа укажите хотя бы один контакт: телефон или e-mail.
                  </div>
                </div>

                <div class="row" style="gap:12px; flex-wrap:wrap;">
                  <button class="btn primary" type="submit">Отправить</button>
                  <a class="btn outline" href="mailto:nkb@slavbank.ru">Альтернатива: e-mail</a>
                </div>
              </form>
            </div>

            <div class="legal-copy">
              <details open>
                <summary>Согласие на обработку персональных данных</summary>
                <div class="prose">
                  <p>
                    Я, действуя свободно, своей волей и в своем интересе, выражаю согласие оператору персональных
                    данных АО НКБ «СЛАВЯНБАНК» (ИНН 5321068480, адрес: 173004, Новгородская обл., г. Великий Новгород,
                    ул. Черемнова-Конюхова, дом 12) на обработку моих персональных данных: ФИО, контактный телефон,
                    адрес электронной почты.
                  </p>
                  <p>
                    Обработка осуществляется в целях рассмотрения обращения, направленного в банк с использованием
                    формы обратной связи на официальном сайте банка, а также получения ответа на обращение.
                  </p>
                  <ul>
                    <li>сбор, запись, систематизация и накопление данных;</li>
                    <li>хранение, уточнение, использование и передача сведений для ответа по обращению;</li>
                    <li>блокирование и удаление персональных данных по истечении установленного срока хранения.</li>
                  </ul>
                </div>
              </details>

              <details>
                <summary>Права заявителя и отзыв согласия</summary>
                <div class="prose">
                  <p>
                    Банк гарантирует право на получение сведений о персональных данных, право на их удаление,
                    уточнение или исправление, а также иные права, предусмотренные законодательством Российской
                    Федерации в области персональных данных.
                  </p>
                  <p>
                    Согласие может быть отозвано в любое время путем подачи заявления на e-mail
                    <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a> или в письменной форме на адрес банка.
                  </p>
                </div>
              </details>
            </div>
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

## `page-podderzhka.php`

```php
<?php get_header(); ?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Поддержка</h1>
            <p class="muted" style="max-width:78ch;">
              Раздел создан для поддержки клиентов АО НКБ «СЛАВЯНБАНК»: инструкции, ссылки для входа в системы
              банка, контакты технической поддержки и ссылки на связанные сервисы.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержимому</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('security')); ?>" class="mono">Безопасность</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>" class="mono">Клиент‑Банк</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('appeal-123-fz')); ?>" class="mono">123‑ФЗ</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <div class="section-flow">
            <div class="alert">
              <div class="alert-dot" aria-hidden="true"></div>
              <div>
                <div style="font-weight:600;">Частые темы поддержки</div>
                <div class="muted" style="margin-top:4px;">
                  В исходном Django-шаблоне эта страница собирает FAQ, перегенерацию ЭЦП, рекомендации по
                  безопасности, ссылки на вход в Клиент-Банк и руководство пользователя.
                </div>
              </div>
            </div>

            <div class="support-topic-grid">
              <a class="doc-card" href="<?php echo esc_url(sb_alpha_url('faq')); ?>">
                <span class="doc-ext">FAQ</span>
                <div class="doc-body">
                  <div class="doc-title">Часто задаваемые вопросы</div>
                  <div class="muted">Ответы на типовые вопросы при работе в системе Клиент‑Банк.</div>
                </div>
                <span class="doc-arrow">→</span>
              </a>

              <a class="doc-card" href="<?php echo esc_url(sb_alpha_url('ecp-regeneration')); ?>">
                <span class="doc-ext">ЭЦП</span>
                <div class="doc-body">
                  <div class="doc-title">Перегенерация ЭЦП</div>
                  <div class="muted">Продление прав доступа и пошаговая инструкция для работы с ключами.</div>
                </div>
                <span class="doc-arrow">→</span>
              </a>

              <a class="doc-card" href="<?php echo esc_url(sb_alpha_url('security')); ?>">
                <span class="doc-ext">SAFE</span>
                <div class="doc-body">
                  <div class="doc-title">Рекомендации по безопасности</div>
                  <div class="muted">Проверка доменного имени, правила безопасного доступа и контроль среды.</div>
                </div>
                <span class="doc-arrow">→</span>
              </a>
            </div>

            <div class="section-card section-card--accent">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Техническая поддержка</div>
                  <h2 style="margin:8px 0 0;">Контакты и режим работы</h2>
                </div>
                <a class="btn outline" href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>
              </div>

              <div class="info-grid" style="margin-top: var(--s-4);">
                <article class="info-card">
                  <div class="kicker">Телефоны</div>
                  <h3>(8162) 66-51-95, 66-52-47, +7-921-690-17-00</h3>
                  <p>Основные номера технической поддержки для Клиент‑Банка и смежных сервисов.</p>
                </article>

                <article class="info-card">
                  <div class="kicker">Режим работы</div>
                  <h3>с 08:30 до 17:30</h3>
                  <p>Пятница — до 16:30, обед с 13:00 до 14:00, выходные — суббота и воскресенье.</p>
                </article>

                <article class="info-card">
                  <div class="kicker">Почта</div>
                  <h3><a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a></h3>
                  <p>Для запросов, связанных с доступом, инструкциями и техническими вопросами.</p>
                </article>
              </div>
            </div>

            <div class="section-card">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Сервисы</div>
                  <h2 style="margin:8px 0 0;">Ссылки для работы с системами банка</h2>
                </div>
              </div>

              <div class="service-links" style="margin-top: var(--s-4);">
                <a class="service-link" href="<?php echo esc_url(sb_alpha_url('instruction')); ?>">
                  <span>
                    <strong>Руководство пользователя «Интернет-Клиент»</strong>
                    <small class="muted">Полная инструкция по работе в системе «Клиент‑Банк».</small>
                  </span>
                  <span aria-hidden="true">→</span>
                </a>

                <a class="service-link" href="<?php echo esc_url(sb_alpha_url('client-bank-primary-login')); ?>" target="_blank" rel="noopener">
                  <span>
                    <strong>Основной вход в Клиент‑Банк</strong>
                    <small class="muted">dbo.slavbank.ru:20101 — для доступа может потребоваться установка плагина.</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>

                <a class="service-link" href="<?php echo esc_url(sb_alpha_url('client-bank-backup-login')); ?>" target="_blank" rel="noopener">
                  <span>
                    <strong>Резервный вход в Клиент‑Банк</strong>
                    <small class="muted">dbo1.slavbank.ru:20101 — использовать после подтверждения банка.</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>

                <a class="service-link" href="<?php echo esc_url(sb_alpha_url('remote-support')); ?>" target="_blank" rel="noopener">
                  <span>
                    <strong>Удаленное управление</strong>
                    <small class="muted">Внешний сервис Ammyy Admin для дистанционной технической помощи.</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div class="section-card">
              <div class="prose">
                <h3>О разделе поддержки</h3>
                <p>
                  Система «ДБО BS-Client x64» позволяет клиентам банка осуществлять информационное и
                  платежно-расчетное обслуживание без личного присутствия в банке с использованием персонального
                  компьютера и сети Интернет.
                </p>
                <p>
                  При переходе по ссылкам обращайте внимание на доменные имена сервисов и сопоставляйте их с
                  адресами, указанными на официальном сайте банка и в рекомендациях по безопасности.
                </p>
              </div>
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

## `page-tarify-banka.php`

```php
<?php
$tariffs_download = sb_alpha_get_tariffs_download();
$tariffs_view = sb_alpha_get_tariffs_view();
$primary_download_url = !empty($tariffs_download[0]['url']) ? (string) $tariffs_download[0]['url'] : sb_alpha_url('tariffs');
get_header();
?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Тарифы</div>
            <h1 style="margin:8px 0 10px;">Тарифы банка</h1>
            <p class="muted" style="max-width:78ch;">
              АО НКБ «СЛАВЯНБАНК» предлагает тарифы по операциям в валюте РФ и иностранной валюте,
              а также специальные предложения для новых клиентов.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">Перейти к содержимому</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Консультация</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('tariff_privetstvenny')); ?>" class="mono">«Приветственный»</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('tariff-depositny')); ?>" class="mono">«Депозитный»</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('tariffs_slavny')); ?>" class="mono">«Славный»</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <div class="section-flow">
            <div class="alert">
              <div class="alert-dot" aria-hidden="true"></div>
              <div>
                <div style="font-weight:600;">Актуальные тарифы и специальные предложения</div>
                <div class="muted" style="margin-top:4px;">
                  На source-ветке master для этой страницы используются два списка: документы для скачивания и
                  страницы для просмотра на сайте. В Beta они перенесены в локальный шаблон через отдельный data-файл.
                </div>
              </div>
            </div>

            <div class="tariff-grid">
              <div class="tariff-panel">
                <div class="section-head-inline">
                  <div>
                    <div class="kicker">Скачать</div>
                    <h2 style="margin:8px 0 0;">Тарифы в виде документов</h2>
                  </div>
                </div>

                <div class="doc-shelf" style="margin-top: var(--s-4);">
                  <?php foreach ($tariffs_download as $item) : ?>
                    <a class="doc-card" href="<?php echo esc_url((string) $item['url']); ?>" target="_blank" rel="noopener">
                      <span class="doc-ext"><?php echo esc_html((string) $item['kind']); ?></span>
                      <div class="doc-body">
                        <div class="doc-title"><?php echo esc_html((string) $item['title']); ?></div>
                        <div class="muted"><?php echo esc_html((string) $item['date']); ?></div>
                      </div>
                      <span class="doc-arrow">→</span>
                    </a>
                  <?php endforeach; ?>
                </div>
              </div>

              <div class="tariff-panel">
                <div class="section-head-inline">
                  <div>
                    <div class="kicker">Открыть на сайте</div>
                    <h2 style="margin:8px 0 0;">Подробные тарифные страницы</h2>
                  </div>
                </div>

                <div class="doc-shelf" style="margin-top: var(--s-4);">
                  <?php foreach ($tariffs_view as $item) : ?>
                    <a class="doc-card" href="<?php echo esc_url((string) $item['url']); ?>">
                      <span class="doc-ext"><?php echo esc_html((string) $item['kind']); ?></span>
                      <div class="doc-body">
                        <div class="doc-title"><?php echo esc_html((string) $item['title']); ?></div>
                        <div class="muted"><?php echo esc_html((string) $item['date']); ?></div>
                      </div>
                      <span class="doc-arrow">→</span>
                    </a>
                  <?php endforeach; ?>
                </div>
              </div>
            </div>

            <div class="section-card section-card--accent">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Быстрый переход</div>
                  <h2 style="margin:8px 0 0;">Скачать тарифы банка</h2>
                </div>
                <a class="btn primary" href="<?php echo esc_url($primary_download_url); ?>" target="_blank" rel="noopener">Скачать тарифы банка</a>
              </div>
              <div class="route-meta" style="margin-top: var(--s-4);">
                <span class="route-chip">Валютные операции</span>
                <span class="route-chip">Тарифы для новых клиентов</span>
                <span class="route-chip">PDF и HTML версии</span>
              </div>
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

## Removed from deploy root

`wave1-full-code.md` removed from theme root so it is no longer deployed as a runtime file.
