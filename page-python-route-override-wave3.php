<?php
$route_key = sb_python_current_route_key();
$partial = sb_python_combined_partial_for_route($route_key);
$partial_file = $partial !== '' ? sb_python_partial_file($partial) : '';

get_header();
?>

<?php if ($partial !== '' && is_file($partial_file)) : ?>
    <?php include $partial_file; ?>
<?php else : ?>
<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="kicker">Маршрут</div>
        <h1 style="margin:8px 0 10px;">Локальный partial не найден</h1>
        <p class="muted" style="max-width:78ch;">Для выбранного python-маршрута override уже включён, но сам partial отсутствует в теме.</p>
        <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
          <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
          <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Связаться</a>
        </div>
      </div>
    </div>
  </section>
</main>
<?php endif; ?>

<?php get_footer(); ?>
