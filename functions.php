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
