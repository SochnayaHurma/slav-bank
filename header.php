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
