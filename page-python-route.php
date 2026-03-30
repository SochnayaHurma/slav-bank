<?php
$route = sb_python_current_route();
$partial = is_array($route) ? (string) ($route['partial'] ?? '') : '';
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
        <h1 style="margin:8px 0 10px;">Страница пока не собрана локально</h1>
        <p class="muted" style="max-width:78ch;">
          Для этого python-маршрута foundation уже подключен, но локальный partial ещё не добавлен в тему.
        </p>
        <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
          <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
          <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Связаться с банком</a>
        </div>
      </div>
    </div>
  </section>
</main>
<?php endif; ?>

<?php get_footer(); ?>
