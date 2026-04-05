<?php
require_once get_theme_file_path('inc/navigation-wp-variant.php');
?>
<link rel="stylesheet" href="<?php echo esc_url(sb_alpha_asset('css/v3-menu.css')); ?>" />
<link rel="stylesheet" href="<?php echo esc_url(sb_alpha_asset('css/v3-menu-wp.css')); ?>" />
<div class="v3-mobile-nav" data-v3-mobile-nav>
  <header class="header reveal v3-header" data-reveal="scale">
    <div class="container v3-nav">
      <a class="v3-brand" href="<?php echo esc_url(sb_alpha_url('home')); ?>" aria-label="СЛАВЯНБАНК">
        <img src="<?php echo esc_url(sb_alpha_asset('img/logo2.png')); ?>" alt="СЛАВЯНБАНК" />
      </a>

      <nav class="v3-links v3-links--wp" aria-label="Главная навигация">
        <?php echo sb_alpha_render_header_menu('desktop'); ?>
      </nav>

      <a class="btn primary v3-head-cta" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Оставить обращение</a>
      <button class="v3-menu-btn" type="button" aria-expanded="false" aria-controls="v3MobileMenu" aria-label="Открыть меню">
        <span class="v3-menu-ic" aria-hidden="true"><span></span><span></span><span></span></span>
        <span>Меню</span>
      </button>
    </div>
  </header>

  <?php if (current_user_can('edit_theme_options')) : ?>
    <div class="v3-variant-switch">
      <a class="route-chip" href="<?php echo esc_url(sb_alpha_header_variant_url('')); ?>">Текущая шапка</a>
      <a class="route-chip" href="<?php echo esc_url(sb_alpha_header_variant_url('wp')); ?>">WP menu шапка</a>
    </div>
  <?php endif; ?>

  <div class="v3-mobile-backdrop" aria-hidden="true"></div>
  <aside class="v3-mobile-menu glass" id="v3MobileMenu" aria-hidden="true" aria-label="Мобильное меню" role="dialog" aria-modal="true">
    <div class="v3-mobile-head">
      <a class="v3-brand v3-mobile-brand" href="<?php echo esc_url(sb_alpha_url('home')); ?>" aria-label="СЛАВЯНБАНК"><img src="<?php echo esc_url(sb_alpha_asset('img/cleaned_logo2.png')); ?>" alt="СЛАВЯНБАНК" /></a>
      <button class="btn v3-mobile-close" type="button" aria-label="Закрыть меню">✕</button>
    </div>
    <nav class="v3-mobile-links v3-mobile-links--wp" aria-label="Мобильная навигация">
      <?php echo sb_alpha_render_header_menu('mobile'); ?>
    </nav>
    <a class="btn primary v3-mobile-cta" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Оставить обращение</a>
  </aside>
</div>
<?php if (!is_front_page()) : ?>
<script src="<?php echo esc_url(sb_alpha_asset('js/v3-menu.js')); ?>"></script>
<?php endif; ?>
