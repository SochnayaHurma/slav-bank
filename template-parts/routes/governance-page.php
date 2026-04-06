<?php
if (!defined('ABSPATH')) {
    exit;
}

if (function_exists('sb_alpha_route_page_has_migrated_content') && sb_alpha_route_page_has_migrated_content()) {
    sb_alpha_route_render_editor_content_main();
    return;
}

$notice = function_exists('sb_alpha_get_governance_notice_text')
    ? sb_alpha_get_governance_notice_text()
    : '';

get_header();
?>
<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5)">
        <div class="row" style="align-items: flex-start; gap: var(--s-4); flex-wrap: wrap">
          <div style="min-width: 280px; flex: 1 1 520px">
            <div class="kicker">Информация банка</div>
            <h1 style="margin: 8px 0 10px">Органы управления</h1>
            <p class="muted" style="max-width: 78ch">
              <?php echo esc_html($notice); ?>
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap: wrap">
              <a class="btn primary" href="#content">Содержание</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>">Информация банка</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self: flex-start">
            <a href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>" class="mono badge">Реквизиты</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>" class="mono badge">Информация банка</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position: relative">
          <div class="prose">
            <div class="entry-content">
              <p><?php echo esc_html($notice); ?></p>
            </div>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
