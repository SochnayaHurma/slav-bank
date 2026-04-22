<!doctype html>
<html <?php language_attributes(); ?> data-a11y="0">
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <link rel="icon" href="<?php echo esc_url(sb_alpha_asset('img/icon192.png')); ?>" sizes="32x32" />
  <link rel="icon" href="<?php echo esc_url(sb_alpha_asset('img/icon192.png')); ?>" sizes="192x192" />
  <meta name="msapplication-TileImage" content="<?php echo esc_url(sb_alpha_asset('img/icon192.png')); ?>">
  <?php wp_head(); 
  get_template_part('dynamic-styles', 'styles');
  ?>
  
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip" href="#main">Перейти к содержимому</a>

<?php
$route_key = function_exists('sb_alpha_route_current_key') ? sb_alpha_route_current_key() : '';
$v3_route_keys = ['legal-entities', 'currency-control', 'client-bank-online', 'tariffs', 'contacts', 'write-to-bank'];
$v3_page_slugs = ['tarify-banka', 'kontakty', 'napisat-v-bank'];
$is_real_front = is_front_page()
    && $route_key === ''
    && !sb_alpha_is_runtime_search_page()
    && !sb_alpha_is_runtime_news_page();
$use_home_menu = $is_real_front
    || in_array($route_key, $v3_route_keys, true)
    || is_page($v3_page_slugs);

$home_menu_candidate = get_theme_file_path('template-parts/site-menu-home.php');
    get_template_part('template-parts/site', 'menu-home');

?>

<div class="overlay" id="searchOverlay" role="dialog" aria-modal="true" aria-label="Поиск по сайту">
  <div class="modal card pad">
    <div class="row" style="align-items: center">
      <div style="font-weight: bold">Поиск</div>
      <div class="spacer"></div>
      <button class="btn outline" style="
    width: 30px;
    height: 30px;
    border-radius: 6px;
    text-align: center;
    font-weight: 300;
" id="searchClose" type="button">х</button>
    </div>

    <form class="searchbox" style="margin-top: 12px" role="search" method="get" action="<?php echo esc_url(sb_alpha_url('search')); ?>">
      <span aria-hidden="true" style="display: flex;justify-content: center;align-items: center;"><img  class="search-icon" width="20px" src="<?php echo esc_url(sb_alpha_asset('png/search.png')); ?>" alt=""></span>
      <input
        id="searchInput"
        name="s"
        type="search"
        placeholder="Например: валютный контроль, тарифы, реквизиты…"
        autocomplete="off"
        value="<?php echo esc_attr(sb_alpha_get_search_term()); ?>"
      />
      <button class="btn outline" type="submit">Найти</button>
    </form>

    <div id="searchHints" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px">
      <button class="btn soft" type="button" data-hint="Экспертиза контрактов">Экспертиза контрактов</button>
      <button class="btn soft" type="button" data-hint="Поддержка">Поддержка</button>
      <button class="btn soft" type="button" data-hint="ВЭД">ВЭД</button>
      <button class="btn soft" type="button" data-hint="Тарифы банка">Тарифы</button>
      <button class="btn soft" type="button" data-hint="Реквизиты">Реквизиты</button>
    </div>
  </div>
</div>
