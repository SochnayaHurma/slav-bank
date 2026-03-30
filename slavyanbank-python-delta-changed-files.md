## style.css

```css
/*
Theme Name: Slavyanbank Custom Theme
Theme URI: https://github.com/SochnayaHurma/slav-bank
Author: Alexey Fedorov
Description: Frontend integration of the Slavyanbank website.
Version: 0.4.0
Requires at least: 6.4
Tested up to: 6.8
Requires PHP: 7.4
Text Domain: Slavyanbank Custom Theme
*/

```

## functions.php

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

function sb_alpha_local_page_url(string $slug, ?string $fallback = null): string
{
    $slug = trim($slug, '/');
    $page = get_page_by_path($slug);

    if ($page instanceof WP_Post && $page->post_status === 'publish') {
        $permalink = get_permalink($page);
        if (is_string($permalink) && $permalink !== '') {
            return $permalink;
        }
    }

    if (is_string($fallback) && $fallback !== '') {
        return $fallback;
    }

    return home_url('/' . $slug . '/');
}

function sb_alpha_news_page_url(): string
{
    return sb_alpha_local_page_url('novosti', home_url('/novosti/'));
}

function sb_alpha_search_page_url(): string
{
    return home_url('/search/');
}

function sb_alpha_is_runtime_search_page(): bool
{
    $flag = get_query_var('sb_alpha_search_page');

    return is_search() || $flag === '1' || $flag === 1;
}

function sb_alpha_is_runtime_news_page(): bool
{
    $flag = get_query_var('sb_alpha_news_page');

    return is_page('novosti') || $flag === '1' || $flag === 1;
}

function sb_alpha_document_title_parts(array $parts): array
{
    if (is_front_page()) {
        $parts['title'] = 'О БАНКЕ - СЛАВЯНБАНК - Новгородский коммерческий банк';

        return $parts;
    }

    if (sb_alpha_is_runtime_search_page()) {
        $parts['title'] = 'Поиск по сайту - АО НКБ "СЛАВЯНБАНК"';

        return $parts;
    }

    if (sb_alpha_is_runtime_news_page()) {
        $parts['title'] = 'Новости - АО НКБ "СЛАВЯНБАНК"';

        return $parts;
    }

    $page_titles = [
        'informaciya-banka' => 'Информация банка - АО НКБ "СЛАВЯНБАНК" в Великом Новгороде',
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
    $version = wp_get_theme()->get('Version') ?: '0.4.0';
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

function sb_alpha_routes(): array
{
    return [
        'home' => home_url('/'),
        'search' => sb_alpha_search_page_url(),
        'info-bank-page' => sb_alpha_local_page_url('informaciya-banka'),
        'requisites_bank' => sb_alpha_local_page_url('rekvizity-banka'),
        'governance' => 'https://slavbank.ru/o-banke-slavyanbank-html/organy_upravlenya.html/',
        'reporting' => sb_alpha_local_page_url('otchetnost'),
        'disclosur-regulatory' => 'https://slavbank.ru/o-banke-html/info_bank-html/raskritie-informacii.html/',
        'notaries' => 'https://slavbank.ru/informacziya-dlya-notariusov.html/',
        'novosti' => sb_alpha_news_page_url(),
        'tariffs' => sb_alpha_local_page_url('tarify-banka'),
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
        'support' => sb_alpha_local_page_url('podderzhka'),
        'security' => 'https://slavbank.ru/podderzhka-html/recom_bezopasnost.html/',
        'appeal-123-fz' => 'https://slavbank.ru/obrashhenie-po-123-fz.html/',
        'covid19' => 'https://slavbank.ru/covid19.html/',
        'contacts' => sb_alpha_local_page_url('kontakty'),
        'write-to-bank' => sb_alpha_local_page_url('napisat-v-bank'),
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
            'route' => 'info-bank-page',
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
        'novosti' => [
            'pattern' => '^novosti\.html/?$',
            'route' => 'novosti',
        ],
    ];
}

function sb_alpha_register_legacy_rewrites(): void
{
    foreach (sb_alpha_legacy_routes() as $token => $config) {
        add_rewrite_rule($config['pattern'], 'index.php?sb_alpha_legacy_route=' . $token, 'top');
    }

    add_rewrite_rule('^search/?$', 'index.php?sb_alpha_search_page=1', 'top');
    add_rewrite_rule('^novosti/?$', 'index.php?sb_alpha_news_page=1', 'top');
}
add_action('init', 'sb_alpha_register_legacy_rewrites');

function sb_alpha_add_query_vars(array $vars): array
{
    $vars[] = 'sb_alpha_legacy_route';
    $vars[] = 'sb_alpha_search_page';
    $vars[] = 'sb_alpha_news_page';

    return $vars;
}
add_filter('query_vars', 'sb_alpha_add_query_vars');

function sb_alpha_store_rewrite_version(): void
{
    update_option(SB_ALPHA_REWRITE_VERSION_OPTION, (string) (wp_get_theme()->get('Version') ?: '0.4.0'), false);
}

function sb_alpha_maybe_flush_legacy_rewrites(): void
{
    $version = (string) (wp_get_theme()->get('Version') ?: '0.4.0');
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

    wp_safe_redirect($target, 301, 'Slavyanbank Delta Legacy');
    exit;
}
add_action('template_redirect', 'sb_alpha_handle_legacy_redirect');

function sb_alpha_template_include(string $template): string
{
    $search_flag = get_query_var('sb_alpha_search_page');
    if ($search_flag === '1' || $search_flag === 1) {
        $candidate = get_theme_file_path('search.php');
        if (is_string($candidate) && is_file($candidate)) {
            return $candidate;
        }
    }

    $news_flag = get_query_var('sb_alpha_news_page');
    if ($news_flag === '1' || $news_flag === 1) {
        $candidate = get_theme_file_path('page-novosti.php');
        if (is_string($candidate) && is_file($candidate)) {
            return $candidate;
        }
    }

    return $template;
}
add_filter('template_include', 'sb_alpha_template_include');

function sb_alpha_apply_shortcode_markup(string $shortcode): string
{
    $shortcode = trim($shortcode);
    if ($shortcode === '') {
        return '';
    }

    if (function_exists('apply_shortcodes')) {
        $markup = (string) apply_shortcodes($shortcode);
    } else {
        $markup = (string) do_shortcode($shortcode);
    }

    if (strpos($markup, '[contact-form-7') !== false) {
        return '';
    }

    return trim($markup);
}

function sb_alpha_feedback_form_shortcode_fallback(): string
{
    $shortcode = apply_filters('sb_alpha_feedback_form_shortcode', '');

    return is_string($shortcode) ? trim($shortcode) : '';
}

function sb_alpha_feedback_form_markup(): string
{
    $page = get_post();

    if ($page instanceof WP_Post) {
        $content = trim((string) $page->post_content);
        if ($content !== '') {
            $markup = (string) apply_filters('the_content', $page->post_content);
            if (strpos($markup, '[contact-form-7') === false) {
                return trim($markup);
            }
        }
    }

    return sb_alpha_apply_shortcode_markup(sb_alpha_feedback_form_shortcode_fallback());
}

function sb_alpha_get_category_by_candidate_slugs(array $slugs): ?WP_Term
{
    foreach ($slugs as $slug) {
        $slug = trim((string) $slug);
        if ($slug === '') {
            continue;
        }

        $term = get_term_by('slug', $slug, 'category');
        if ($term instanceof WP_Term) {
            return $term;
        }
    }

    return null;
}

function sb_alpha_get_news_category_groups(): array
{
    return [
        [
            'label' => 'Новости',
            'slugs' => ['news', 'novosti'],
        ],
        [
            'label' => 'Полезная информация',
            'slugs' => [
                'poleznaya_informacia',
                'poleznaya-informacia',
                'poleznaya_informaciya',
                'poleznaya-informaciya',
            ],
        ],
    ];
}

function sb_alpha_get_news_category_ids(): array
{
    $ids = [];

    foreach (sb_alpha_get_news_category_groups() as $group) {
        $term = sb_alpha_get_category_by_candidate_slugs((array) $group['slugs']);
        if ($term instanceof WP_Term) {
            $ids[] = (int) $term->term_id;
        }
    }

    return array_values(array_unique(array_filter($ids)));
}

function sb_alpha_get_news_category_links(): array
{
    $items = [];

    foreach (sb_alpha_get_news_category_groups() as $group) {
        $term = sb_alpha_get_category_by_candidate_slugs((array) $group['slugs']);
        if ($term instanceof WP_Term) {
            $url = get_category_link($term);
            if (!is_wp_error($url) && is_string($url) && $url !== '') {
                $items[] = [
                    'label' => (string) $group['label'],
                    'url' => $url,
                    'external' => false,
                ];
                continue;
            }
        }

        $items[] = [
            'label' => (string) $group['label'],
            'url' => sb_alpha_url('novosti'),
            'external' => false,
        ];
    }

    return $items;
}

function sb_alpha_get_news_query_args(array $overrides = []): array
{
    $args = [
        'post_type' => 'post',
        'post_status' => 'publish',
        'ignore_sticky_posts' => true,
    ];

    $category_ids = sb_alpha_get_news_category_ids();
    if (!empty($category_ids)) {
        $args['category__in'] = $category_ids;
    }

    return wp_parse_args($overrides, $args);
}

function sb_alpha_get_recent_publications(int $limit = 4): array
{
    $query = new WP_Query(
        sb_alpha_get_news_query_args([
            'posts_per_page' => max(1, $limit),
        ])
    );

    $items = [];

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();

            $items[] = [
                'date' => get_the_date('d.m.Y'),
                'title' => get_the_title(),
                'url' => get_permalink(),
            ];
        }
    }

    wp_reset_postdata();

    return $items;
}

function sb_alpha_get_post_teaser(WP_Post $post, int $words = 28): string
{
    $excerpt = trim((string) get_the_excerpt($post));
    if ($excerpt !== '') {
        return $excerpt;
    }

    $content = trim(wp_strip_all_tags((string) $post->post_content));
    if ($content === '') {
        return '';
    }

    return wp_trim_words($content, $words);
}

function sb_alpha_get_post_type_label(WP_Post $post): string
{
    if ($post->post_type === 'post') {
        return 'Новость';
    }

    if ($post->post_type === 'page') {
        return 'Страница';
    }

    $object = get_post_type_object($post->post_type);
    if ($object && !empty($object->labels->singular_name)) {
        return (string) $object->labels->singular_name;
    }

    return 'Материал';
}

function sb_alpha_get_post_category_links(int $post_id): array
{
    $terms = get_the_category($post_id);
    if (empty($terms) || !is_array($terms)) {
        return [];
    }

    $links = [];

    foreach ($terms as $term) {
        if (!$term instanceof WP_Term) {
            continue;
        }

        $url = get_category_link($term);
        if (is_wp_error($url) || !is_string($url) || $url === '') {
            continue;
        }

        $links[] = [
            'label' => $term->name,
            'url' => $url,
        ];
    }

    return $links;
}

function sb_alpha_get_search_term(): string
{
    if (isset($_GET['s'])) {
        return sanitize_text_field(wp_unslash((string) $_GET['s']));
    }

    return sanitize_text_field(get_search_query(false));
}

function sb_alpha_get_search_results_query(int $paged = 1): ?WP_Query
{
    $term = sb_alpha_get_search_term();
    if ($term === '') {
        return null;
    }

    return new WP_Query([
        'post_type' => ['page', 'post'],
        'post_status' => 'publish',
        's' => $term,
        'paged' => max(1, $paged),
        'posts_per_page' => 10,
        'ignore_sticky_posts' => true,
    ]);
}

```

## header.php

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
      <button class="btn" id="searchClose" type="button">Закрыть</button>
    </div>

    <form class="searchbox" style="margin-top: 12px" role="search" method="get" action="<?php echo esc_url(sb_alpha_url('search')); ?>">
      <span aria-hidden="true">🔎</span>
      <input
        id="searchInput"
        name="s"
        type="search"
        placeholder="Например: валютный контроль, SWIFT, тарифы, реквизиты…"
        autocomplete="off"
        value="<?php echo esc_attr(sb_alpha_get_search_term()); ?>"
      />
      <button class="btn primary" type="submit">Найти</button>
    </form>

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

## search.php

```php
<?php
$paged = max(1, (int) get_query_var('paged'), isset($_GET['paged']) ? (int) $_GET['paged'] : 1);
$search_term = sb_alpha_get_search_term();
$search_query = sb_alpha_get_search_results_query($paged);

$suggestions = [
    ['title' => 'Информация банка', 'url' => sb_alpha_url('info-bank-page'), 'text' => 'Документы, раскрытие сведений и официальная информация.'],
    ['title' => 'Тарифы банка', 'url' => sb_alpha_url('tariffs'), 'text' => 'Актуальные тарифы и специальные предложения для клиентов.'],
    ['title' => 'Поддержка', 'url' => sb_alpha_url('support'), 'text' => 'FAQ, инструкции, безопасность и удаленная помощь.'],
    ['title' => 'Контакты', 'url' => sb_alpha_url('contacts'), 'text' => 'Телефоны, e-mail, адрес и режим работы банка.'],
];
get_header();
?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Поиск</div>
            <h1 style="margin:8px 0 10px;">Результаты поиска</h1>
            <p class="muted" style="max-width:78ch;">
              Поиск по локально перенесенным страницам и новостям WordPress.
              Введите запрос — покажем совпадения по заголовкам и содержимому.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('support')); ?>">Поддержка</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Маршрут</span>
            <span class="muted mono"><?php echo esc_html(parse_url(sb_alpha_url('search'), PHP_URL_PATH) ?: '/search/'); ?></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <div class="search-shell">
            <form class="news-search" role="search" method="get" action="<?php echo esc_url(sb_alpha_url('search')); ?>">
              <span class="mega-ic" aria-hidden="true">⌕</span>
              <input
                id="q"
                name="s"
                type="search"
                placeholder="Например: валютный контроль, тарифы, реквизиты…"
                autocomplete="off"
                value="<?php echo esc_attr($search_term); ?>"
              />
              <button class="btn primary pill" type="submit">Найти</button>
            </form>

            <?php if ($search_term !== '') : ?>
              <div class="results-head">
                <div class="kicker">Результаты</div>
                <div class="pill"><span class="badge"><?php echo esc_html((string) ($search_query ? (int) $search_query->found_posts : 0)); ?></span><span class="muted">совпадений</span></div>
              </div>

              <?php if ($search_query && $search_query->have_posts()) : ?>
                <div class="search-results">
                  <?php while ($search_query->have_posts()) : $search_query->the_post(); ?>
                    <?php $post_object = get_post(); ?>
                    <?php if (!$post_object instanceof WP_Post) { continue; } ?>
                    <article class="search-card">
                      <div class="search-meta">
                        <span class="route-chip"><?php echo esc_html(sb_alpha_get_post_type_label($post_object)); ?></span>
                        <?php if ($post_object->post_type === 'post') : ?>
                          <span class="muted"><?php echo esc_html(get_the_date('d.m.Y')); ?></span>
                        <?php endif; ?>
                      </div>
                      <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                      <?php $teaser = sb_alpha_get_post_teaser($post_object); ?>
                      <?php if ($teaser !== '') : ?>
                        <p class="muted"><?php echo esc_html($teaser); ?></p>
                      <?php endif; ?>
                      <div class="search-card-url"><?php echo esc_html((string) wp_parse_url(get_permalink(), PHP_URL_PATH)); ?></div>
                    </article>
                  <?php endwhile; ?>
                </div>

                <?php
                $pagination = paginate_links([
                    'base' => add_query_arg('paged', '%#%', sb_alpha_url('search')),
                    'format' => '',
                    'current' => $paged,
                    'total' => max(1, (int) $search_query->max_num_pages),
                    'type' => 'array',
                    'add_args' => ['s' => $search_term],
                    'prev_text' => '←',
                    'next_text' => '→',
                ]);
                ?>
                <?php if (is_array($pagination) && !empty($pagination)) : ?>
                  <nav class="pagination-wrap" aria-label="Навигация по результатам поиска">
                    <?php foreach ($pagination as $item) : ?>
                      <?php echo wp_kses_post($item); ?>
                    <?php endforeach; ?>
                  </nav>
                <?php endif; ?>

                <?php wp_reset_postdata(); ?>
              <?php else : ?>
                <div class="section-empty">
                  <div class="empty-ic">✦</div>
                  <div>
                    <div style="font-weight:600;">Ничего не нашли</div>
                    <div class="muted" style="margin-top:4px;">Попробуйте другой запрос или откройте нужный раздел через меню сайта.</div>
                  </div>
                </div>
              <?php endif; ?>
            <?php else : ?>
              <div class="results-head">
                <div class="kicker">Поиск</div>
                <div class="pill"><span class="badge">0</span><span class="muted">совпадений</span></div>
              </div>

              <div class="section-empty">
                <div class="empty-ic">⌕</div>
                <div>
                  <div style="font-weight:600;">Введите запрос</div>
                  <div class="muted" style="margin-top:4px;">Например: тарифы, реквизиты, валютный контроль, новости.</div>
                </div>
              </div>

              <div class="search-suggest-grid">
                <?php foreach ($suggestions as $item) : ?>
                  <a class="search-suggest-card" href="<?php echo esc_url((string) $item['url']); ?>">
                    <strong><?php echo esc_html((string) $item['title']); ?></strong>
                    <span><?php echo esc_html((string) $item['text']); ?></span>
                  </a>
                <?php endforeach; ?>
              </div>
            <?php endif; ?>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>

```

## page-novosti.php

```php
<?php
$paged = max(1, (int) get_query_var('paged'), isset($_GET['paged']) ? (int) $_GET['paged'] : 1);
$news_query = new WP_Query(
    sb_alpha_get_news_query_args([
        'posts_per_page' => 10,
        'paged' => $paged,
    ])
);
$category_links = sb_alpha_get_news_category_links();
get_header();
?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Новости</h1>
            <p class="muted" style="max-width:78ch;">
              Официальные новости банка: режим работы, изменения тарифов и важные объявления.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К новостям</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать нам</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <a href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>" class="mono badge">Тарифы</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('legal-entities')); ?>" class="mono badge">Юр. лицам</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('support')); ?>" class="mono badge">Поддержка</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('contacts')); ?>" class="mono badge">Контакты</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <div class="news-shell">
            <div class="news-controls">
              <div class="news-search">
                <span class="mega-ic" aria-hidden="true">⌕</span>
                <input id="newsQ" type="search" placeholder="Поиск по заголовкам и тексту…" autocomplete="off" />
                <button class="btn outline pill" id="newsReset" type="button">Сброс</button>
              </div>

              <div class="tag-row">
                <?php foreach ($category_links as $category) : ?>
                  <a class="tag-chip" href="<?php echo esc_url((string) $category['url']); ?>"><?php echo esc_html((string) $category['label']); ?></a>
                <?php endforeach; ?>
              </div>
            </div>

            <div class="results-head">
              <div class="kicker">Архив публикаций</div>
              <div class="pill"><span class="badge" data-news-count><?php echo esc_html((string) (int) $news_query->post_count); ?></span><span class="muted">публикаций на странице</span></div>
            </div>

            <?php if ($news_query->have_posts()) : ?>
              <div class="news-results">
                <?php while ($news_query->have_posts()) : $news_query->the_post(); ?>
                  <?php $post_object = get_post(); ?>
                  <?php if (!$post_object instanceof WP_Post) { continue; } ?>
                  <?php $teaser = sb_alpha_get_post_teaser($post_object); ?>
                  <article class="news-card" data-news-item data-news-text="<?php echo esc_attr(trim(get_the_title() . ' ' . $teaser)); ?>">
                    <div class="news-meta">
                      <time datetime="<?php echo esc_attr(get_the_date('c')); ?>"><?php echo esc_html(get_the_date('d.m.Y')); ?></time>
                      <?php foreach (sb_alpha_get_post_category_links(get_the_ID()) as $term) : ?>
                        <a class="tag-chip" href="<?php echo esc_url((string) $term['url']); ?>"><?php echo esc_html((string) $term['label']); ?></a>
                      <?php endforeach; ?>
                    </div>
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <?php if ($teaser !== '') : ?>
                      <div class="news-body">
                        <p><?php echo esc_html($teaser); ?></p>
                      </div>
                    <?php endif; ?>
                    <div class="news-actions">
                      <a class="btn outline" href="<?php the_permalink(); ?>">Читать подробнее</a>
                    </div>
                  </article>
                <?php endwhile; ?>
              </div>

              <div class="section-empty" data-news-empty hidden>
                <div class="empty-ic">✦</div>
                <div>
                  <div style="font-weight:600;">На этой странице ничего не найдено</div>
                  <div class="muted" style="margin-top:4px;">Сбросьте локальный фильтр и просмотрите все публикации на странице.</div>
                </div>
              </div>

              <?php
              $pagination = paginate_links([
                  'base' => add_query_arg('paged', '%#%', sb_alpha_url('novosti')),
                  'format' => '',
                  'current' => $paged,
                  'total' => max(1, (int) $news_query->max_num_pages),
                  'type' => 'array',
                  'prev_text' => '←',
                  'next_text' => '→',
              ]);
              ?>
              <?php if (is_array($pagination) && !empty($pagination)) : ?>
                <nav class="pagination-wrap" aria-label="Навигация по архиву новостей">
                  <?php foreach ($pagination as $item) : ?>
                    <?php echo wp_kses_post($item); ?>
                  <?php endforeach; ?>
                </nav>
              <?php endif; ?>

              <?php wp_reset_postdata(); ?>
            <?php else : ?>
              <div class="section-empty">
                <div class="empty-ic">✦</div>
                <div>
                  <div style="font-weight:600;">Публикации пока не добавлены</div>
                  <div class="muted" style="margin-top:4px;">После публикации записей WordPress этот архив начнет наполняться автоматически.</div>
                </div>
              </div>
            <?php endif; ?>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>

```

## single.php

```php
<?php get_header(); ?>

<main id="main">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <?php $post_object = get_post(); ?>
    <?php if (!$post_object instanceof WP_Post) { continue; } ?>
    <section class="block">
      <div class="container">
        <div class="hero-wrap" style="padding: var(--s-5);">
          <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
            <div style="min-width: 280px; flex: 1 1 620px;">
              <div class="kicker">Публикация</div>
              <h1 style="margin:8px 0 10px;"><?php the_title(); ?></h1>
              <div class="news-meta">
                <time datetime="<?php echo esc_attr(get_the_date('c')); ?>"><?php echo esc_html(get_the_date('d.m.Y')); ?></time>
                <?php foreach (sb_alpha_get_post_category_links(get_the_ID()) as $term) : ?>
                  <a class="tag-chip" href="<?php echo esc_url((string) $term['url']); ?>"><?php echo esc_html((string) $term['label']); ?></a>
                <?php endforeach; ?>
              </div>

              <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
                <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">К новостям</a>
                <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
                <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
              </div>
            </div>

            <div class="pill" style="align-self:flex-start;">
              <span class="badge">Тип</span>
              <span class="muted"><?php echo esc_html(sb_alpha_get_post_type_label($post_object)); ?></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="block dashv2" id="content">
      <div class="container">
        <div class="bento">
          <div class="bento-card" style="padding: var(--s-4); position:relative;">
            <article class="section-card">
              <div class="prose post-content">
                <?php the_content(); ?>
              </div>
            </article>
          </div>

          <?php get_template_part('template-parts/home', 'stack'); ?>
        </div>
      </div>
    </section>
  <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>

```

## archive.php

```php
<?php
$paged = max(1, (int) get_query_var('paged'));
$category_links = sb_alpha_get_news_category_links();
get_header();
?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Архив</div>
            <h1 style="margin:8px 0 10px;"><?php echo esc_html(wp_strip_all_tags(get_the_archive_title())); ?></h1>
            <?php $desc = trim(strip_tags((string) get_the_archive_description())); ?>
            <?php if ($desc !== '') : ?>
              <p class="muted" style="max-width:78ch;"><?php echo esc_html($desc); ?></p>
            <?php else : ?>
              <p class="muted" style="max-width:78ch;">Архив публикаций WordPress по выбранной рубрике.</p>
            <?php endif; ?>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К публикациям</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">Все новости</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <?php foreach ($category_links as $category) : ?>
              <a href="<?php echo esc_url((string) $category['url']); ?>" class="mono badge"><?php echo esc_html((string) $category['label']); ?></a>
              <span class="muted">·</span>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <?php if (have_posts()) : ?>
            <div class="news-results">
              <?php while (have_posts()) : the_post(); ?>
                <?php $post_object = get_post(); ?>
                <?php if (!$post_object instanceof WP_Post) { continue; } ?>
                <?php $teaser = sb_alpha_get_post_teaser($post_object); ?>
                <article class="news-card">
                  <div class="news-meta">
                    <time datetime="<?php echo esc_attr(get_the_date('c')); ?>"><?php echo esc_html(get_the_date('d.m.Y')); ?></time>
                    <?php foreach (sb_alpha_get_post_category_links(get_the_ID()) as $term) : ?>
                      <a class="tag-chip" href="<?php echo esc_url((string) $term['url']); ?>"><?php echo esc_html((string) $term['label']); ?></a>
                    <?php endforeach; ?>
                  </div>
                  <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                  <?php if ($teaser !== '') : ?>
                    <div class="news-body">
                      <p><?php echo esc_html($teaser); ?></p>
                    </div>
                  <?php endif; ?>
                </article>
              <?php endwhile; ?>
            </div>

            <?php
            $pagination = paginate_links([
                'current' => $paged,
                'total' => max(1, (int) $GLOBALS['wp_query']->max_num_pages),
                'type' => 'array',
                'prev_text' => '←',
                'next_text' => '→',
            ]);
            ?>
            <?php if (is_array($pagination) && !empty($pagination)) : ?>
              <nav class="pagination-wrap" aria-label="Навигация по архиву">
                <?php foreach ($pagination as $item) : ?>
                  <?php echo wp_kses_post($item); ?>
                <?php endforeach; ?>
              </nav>
            <?php endif; ?>
          <?php else : ?>
            <div class="section-empty">
              <div class="empty-ic">✦</div>
              <div>
                <div style="font-weight:600;">Публикации в этой рубрике пока отсутствуют</div>
                <div class="muted" style="margin-top:4px;">Откройте общий архив новостей или выберите другую рубрику.</div>
              </div>
            </div>
          <?php endif; ?>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>

```

## assets/css/beta-pages.css

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
.tariff-panel,
.contact-way-card {
  padding: var(--s-4);
  border: 1px solid var(--c-border);
  border-radius: var(--r-lg);
  background: #fff;
  box-shadow: var(--shadow-sm);
}

.info-card h3,
.tariff-panel h3,
.contact-way-card h3 {
  margin: 8px 0 10px;
}

.info-card p,
.info-card li,
.tariff-panel p,
.contact-way-card p {
  color: var(--c-muted);
}

.info-card ul,
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

.cf7-theme {
  display: grid;
  gap: var(--s-3);
}

.cf7-theme .wpcf7,
.cf7-theme .wpcf7 form,
.cf7-theme .wpcf7-form {
  display: grid;
  gap: var(--s-3);
}

.cf7-theme p {
  margin: 0;
}

.cf7-theme label {
  display: grid;
  gap: 8px;
  font-weight: 600;
}

.cf7-theme .wpcf7-form-control-wrap {
  display: block;
}

.cf7-theme input[type="text"],
.cf7-theme input[type="email"],
.cf7-theme input[type="tel"],
.cf7-theme textarea,
.cf7-theme select,
.cf7-theme .wpcf7-form-control:not(.wpcf7-submit):not(.wpcf7-acceptance) {
  width: 100%;
  border: 1px solid var(--c-border);
  border-radius: var(--r-md);
  background: #fff;
  color: var(--c-text);
  padding: 14px 16px;
  box-shadow: var(--shadow-sm);
}

.cf7-theme textarea {
  min-height: 170px;
  resize: vertical;
}

.cf7-theme input[type="text"]:focus,
.cf7-theme input[type="email"]:focus,
.cf7-theme input[type="tel"]:focus,
.cf7-theme textarea:focus,
.cf7-theme select:focus {
  outline: 2px solid rgba(0, 103, 128, 0.18);
  border-color: rgba(0, 103, 128, 0.45);
}

.cf7-theme .wpcf7-acceptance {
  display: block;
  padding: var(--s-3);
  border: 1px solid rgba(2, 6, 23, 0.08);
  border-radius: var(--r-lg);
  background: rgba(245, 250, 252, 0.8);
}

.cf7-theme .wpcf7-acceptance .wpcf7-list-item {
  margin: 0;
}

.cf7-theme .wpcf7-acceptance label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  color: var(--c-muted);
}

.cf7-theme .wpcf7-acceptance input[type="checkbox"] {
  margin-top: 2px;
}

.cf7-theme input[type="submit"],
.cf7-theme button[type="submit"],
.cf7-theme .wpcf7-submit {
  appearance: none;
  border: 0;
  border-radius: 999px;
  padding: 14px 24px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(180deg, var(--c-primary), color-mix(in srgb, var(--c-primary) 82%, #000));
  box-shadow: var(--shadow-sm);
}

.cf7-theme input[type="submit"]:hover,
.cf7-theme button[type="submit"]:hover,
.cf7-theme .wpcf7-submit:hover {
  transform: translateY(-1px);
}

.cf7-theme .wpcf7-spinner {
  margin: 10px 0 0;
}

.cf7-theme .wpcf7-not-valid-tip {
  margin-top: 8px;
  color: #b3261e;
  font-size: 14px;
}

.cf7-theme .wpcf7-response-output {
  margin: 0 !important;
  padding: 14px 16px !important;
  border-radius: var(--r-lg);
  border: 1px solid rgba(2, 6, 23, 0.12) !important;
  font-size: 14px;
}

.cf7-theme .wpcf7 form.sent .wpcf7-response-output {
  border-color: rgba(11, 117, 83, 0.22) !important;
  background: rgba(11, 117, 83, 0.08);
  color: #0b7553;
}

.cf7-theme .wpcf7 form.invalid .wpcf7-response-output,
.cf7-theme .wpcf7 form.failed .wpcf7-response-output,
.cf7-theme .wpcf7 form.aborted .wpcf7-response-output,
.cf7-theme .wpcf7 form.unaccepted .wpcf7-response-output,
.cf7-theme .wpcf7 form.spam .wpcf7-response-output {
  border-color: rgba(167, 29, 42, 0.18) !important;
  background: rgba(167, 29, 42, 0.08);
  color: #8d1d2a;
}

.cf7-empty-state {
  display: grid;
  gap: 10px;
  padding: var(--s-4);
  border-radius: var(--r-lg);
  border: 1px solid rgba(2, 6, 23, 0.08);
  background: rgba(245, 250, 252, 0.85);
}

@media (max-width: 980px) {
  .info-grid,
  .support-topic-grid,
  .tariff-grid,
  .contact-way-grid {
    grid-template-columns: 1fr;
  }

  .kv-row {
    grid-template-columns: 1fr;
  }

  .kv-label {
    border-bottom: 1px solid rgba(2, 6, 23, 0.08);
  }
}


.search-shell,
.news-shell {
  display: grid;
  gap: var(--s-4);
}

.results-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.search-results,
.news-results {
  display: grid;
  gap: var(--s-4);
}

.search-card,
.news-card,
.search-suggest-card {
  padding: var(--s-4);
  border: 1px solid rgba(2, 6, 23, 0.08);
  border-radius: var(--r-lg);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-sm);
}

.search-card:hover,
.news-card:hover,
.search-suggest-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 34px rgba(0, 103, 128, 0.08);
}

.search-card h2,
.news-card h2 {
  margin: 8px 0 10px;
  font-size: clamp(20px, 2vw, 28px);
}

.search-card-url {
  margin-top: 12px;
  font-size: 12px;
  color: var(--c-muted);
  word-break: break-all;
}

.search-meta,
.news-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.news-body p {
  margin: 0;
  color: var(--c-muted);
}

.news-actions {
  margin-top: 18px;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag-chip {
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  border: 1px solid rgba(2, 6, 23, 0.08);
  background: rgba(245, 250, 252, 0.95);
  color: var(--c-muted);
  text-decoration: none;
  font-size: 14px;
}

.tag-chip:hover {
  text-decoration: none;
  border-color: rgba(0, 103, 128, 0.24);
  background: rgba(0, 103, 128, 0.06);
  color: var(--c-primary-700);
}

.section-empty {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  align-items: flex-start;
  padding: var(--s-4);
  border-radius: var(--r-lg);
  border: 1px dashed rgba(2, 6, 23, 0.16);
  background: rgba(245, 250, 252, 0.88);
}

.empty-ic {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: rgba(0, 103, 128, 0.10);
  color: var(--c-primary-700);
  font-size: 18px;
}

.search-suggest-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--s-4);
}

.search-suggest-card {
  display: grid;
  gap: 8px;
  text-decoration: none;
  color: inherit;
}

.search-suggest-card span {
  color: var(--c-muted);
}

.pagination-wrap {
  margin-top: var(--s-4);
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pagination-wrap .page-numbers {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(2, 6, 23, 0.08);
  background: #fff;
  color: var(--c-text);
  text-decoration: none;
}

.pagination-wrap .page-numbers.current {
  border-color: rgba(0, 103, 128, 0.28);
  background: rgba(0, 103, 128, 0.08);
  color: var(--c-primary-700);
}

.post-content {
  display: grid;
  gap: 14px;
}

@media (max-width: 980px) {
  .search-suggest-grid {
    grid-template-columns: 1fr;
  }
}

```

## assets/css/motion.css

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
  font-size: 14px;
  font-weight: 600;
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
  font-size: 14px;
  font-weight: 600;
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
  font-size: 14px;
  font-weight: 600;
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
  font-size: 14px;
  font-weight: 600;
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
  font-weight: 500;
  color: rgba(2, 6, 23, .78);
}

.prose ul,
.prose ol {
  margin: 10px 0 10px 18px;
  line-height: 1.7;
  font-weight: 400;
  font-style: italic;
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
  font-size: 14px;
  font-weight: 600;
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

## assets/js/motion.js

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
  const searchInput = $('#searchInput');
  const openSearch = () => {
    if (!overlay) return;
    overlay.classList.add('open');
    searchInput && searchInput.focus();
  };
  const closeSearch = () => {
    if (!overlay) return;
    overlay.classList.remove('open');
  };

  const openBtn = $('#searchOpen');
  const closeBtn = $('#searchClose');
  openBtn && openBtn.addEventListener('click', openSearch);
  closeBtn && closeBtn.addEventListener('click', closeSearch);
  overlay && overlay.addEventListener('click', (e) => { if (e.target === overlay) closeSearch(); });

  const hints = $('#searchHints');
  hints && hints.addEventListener('click', (e) => {
    const b = e.target.closest('[data-hint]');
    if (!b || !searchInput) return;
    searchInput.value = b.dataset.hint;
    searchInput.focus();
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
}

  const newsFilterInput = $('#newsQ');
  const newsResetBtn = $('#newsReset');
  const newsItems = $$('[data-news-item]');
  const newsEmpty = $('[data-news-empty]');
  const newsCount = $('[data-news-count]');

  const applyNewsFilter = () => {
    if (!newsItems.length) return;
    const query = ((newsFilterInput && newsFilterInput.value) || '').trim().toLowerCase();
    let visible = 0;

    newsItems.forEach((item) => {
      const text = (item.dataset.newsText || item.textContent || '').toLowerCase();
      const matched = !query || text.includes(query);
      item.hidden = !matched;
      if (matched) visible += 1;
    });

    if (newsCount) {
      newsCount.textContent = String(visible);
    }

    if (newsEmpty) {
      newsEmpty.hidden = visible !== 0;
    }
  };

  if (newsFilterInput) {
    newsFilterInput.addEventListener('input', applyNewsFilter);
    applyNewsFilter();
  }

  newsResetBtn && newsResetBtn.addEventListener('click', () => {
    if (newsFilterInput) {
      newsFilterInput.value = '';
      newsFilterInput.focus();
    }
    applyNewsFilter();
  });

})();

```

## template-parts/site-menu.php

```php
<div class="topbar reveal" data-reveal="scale">
  <div class="container row" style="flex-wrap: wrap">
    <div class="pill pill--topbar">
      <span class="badge">Контакты</span>
      <a href="tel:+78162665247" class="mono">(8162) 66‑52‑47</a>
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
        type="button"
      >
        Aa · Доступность
      </button>
      <button class="btn glass" id="searchOpen" type="button" aria-haspopup="dialog" aria-controls="searchOverlay">
        Поиск
      </button>
    </div>
  </div>
</div>

<header class="header reveal" data-reveal="scale" data-mega-root data-menu-variant="prod">
  <div class="container row" style="gap:0px;">
    <div class="brand" style="margin-right: 10px;">
      <a href="<?php echo esc_url(sb_alpha_url('home')); ?>">
        <img src="<?php echo esc_url(sb_alpha_asset('img/logo2.png')); ?>" alt="СЛАВЯНБАНК" width="100%" />
      </a>
    </div>

    <nav aria-label="Основное меню">
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('legal-entities')); ?>">Юридическим лицам</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">Валютный контроль</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>">Клиент‑Банк</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>">Тарифы</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
    </nav>

    <div class="spacer"></div>

    <button class="btn menu-btn" type="button" data-mega-btn aria-label="Открыть меню" aria-expanded="false">
      ☰ Меню
    </button>

    <a
      style="width: 210px; margin-left: 10px;"
      class="btn primary clientbank-cta"
      href="<?php echo esc_url(sb_alpha_url('write-to-bank') . '#form'); ?>"
      title="Оставить обращение"
    >
      Оставить обращение
    </a>
  </div>

  <div class="mega-backdrop" data-mega-backdrop aria-hidden="true"></div>

  <div class="mega card" data-mega-panel role="dialog" aria-label="Разделы сайта">
    <div class="header-grid">
      <div class="mega-mhead">
        <div class="mega-mobile-title">Разделы сайта</div>
        <button class="btn ghost mega-close" type="button" data-mega-close aria-label="Закрыть меню">✕</button>
      </div>

      <div data-mega-links style="display: grid; gap: 6px">
        <div class="mega-group" data-mega-group="about">
          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Информация банка</strong><small>Документы и официальные сведения</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Реквизиты банка</strong><small>Платежные данные и контактные сведения</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('reporting')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Отчетность</strong><small>Годовые и промежуточные документы</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Новости</strong><small>Объявления, режим работы и обновления тарифов</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('support')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Поддержка</strong><small>FAQ, безопасность и удаленная помощь</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Написать в банк</strong><small>Обращение через форму или по e-mail</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('client-bank-login')); ?>" target="_blank" rel="noopener">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Вход в ВЭД</strong><small>Переход в систему дистанционного обслуживания</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('vacancies')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Вакансии</strong><small>Открытые позиции и контакты для соискателей</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>

```

## template-parts/home-stack.php

```php
<?php
$publications = sb_alpha_get_recent_publications(4);

$sections = [
    ['label' => 'ИНФОРМАЦИЯ БАНКА', 'url' => sb_alpha_url('info-bank-page')],
    ['label' => 'НОВОСТИ', 'url' => sb_alpha_url('novosti')],
    ['label' => 'ТАРИФЫ БАНКА', 'url' => sb_alpha_url('tariffs')],
    ['label' => 'ЮРИДИЧЕСКИМ ЛИЦАМ', 'url' => sb_alpha_url('legal-entities')],
    ['label' => 'ПОДДЕРЖКА', 'url' => sb_alpha_url('support')],
    ['label' => 'НАПИСАТЬ В БАНК', 'url' => sb_alpha_url('write-to-bank')],
    ['label' => 'КОНТАКТЫ', 'url' => sb_alpha_url('contacts')],
];

$categories = array_merge(
    sb_alpha_get_news_category_links(),
    [
        ['label' => 'АРХИВ', 'url' => 'https://slavbank.ru/category/arhiv', 'external' => true],
        ['label' => 'ДОКУМЕНТЫ ДЛЯ КЛИЕНТОВ', 'url' => 'https://slavbank.ru/category/dokumenty-dlya-klientov', 'external' => true],
    ]
);
?>
<div class="stack">
  <div class="bento-card reveal" data-reveal="right">
    <div class="kicker">Контакты ВЭД</div>
    <h3 style="margin:6px 0 10px;">Быстрая связь</h3>
    <div class="row" style="gap:10px; flex-wrap:wrap;">
      <a class="btn glass" href="tel:+74951989951" style="border-color:rgba(0,0,0,.08);">
        📞 <span class="mono">+7 (495) 198‑99‑51</span>
      </a>
      <a class="btn glass" href="mailto:ved@slavbank.ru" style="border-color:rgba(0,0,0,.08);">✉️ ved@slavbank.ru</a>
    </div>
  </div>

  <div class="bento-card reveal is-in" data-reveal="right">
    <div class="kicker">Курсы обмена валют</div>
    <h3 style="margin:6px 0 10px;">Актуальная информация по кассе банка</h3>
    <div class="fine" style="margin-top:8px;">
      Для уточнения курсов обмена валют в кассе банка используйте телефон
      <a href="tel:+78162665247" class="mono">(8162) 66‑52‑47</a> или электронную почту
      <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>.
    </div>
    <div class="fine" style="margin-top:8px;">АО НКБ «СЛАВЯНБАНК»</div>
  </div>

  <div class="bento-card reveal is-in" data-reveal="right">
    <div class="kicker">Полезная информация</div>
    <h3 style="margin:6px 0 10px;">Последние публикации</h3>

    <?php if (!empty($publications)) : ?>
      <div class="posts">
        <?php foreach ($publications as $publication) : ?>
          <a class="post" href="<?php echo esc_url((string) $publication['url']); ?>">
            <span class="muted"><?php echo esc_html((string) $publication['date']); ?></span>
            <strong><?php echo esc_html((string) $publication['title']); ?></strong>
          </a>
        <?php endforeach; ?>
      </div>
    <?php else : ?>
      <div class="muted-card">
        Локальные новости ещё не опубликованы. Откройте раздел
        <a href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">«Новости»</a>,
        чтобы проверить архив публикаций.
      </div>
    <?php endif; ?>
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
        <a
          class="drawer-sub"
          href="<?php echo esc_url((string) $category['url']); ?>"
          <?php echo !empty($category['external']) ? 'target="_blank" rel="noopener"' : ''; ?>
        >
          <?php echo esc_html((string) $category['label']); ?>
        </a>
      <?php endforeach; ?>
    </div>
  </details>
</div>

```
