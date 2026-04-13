<?php
if (function_exists('sb_alpha_route_page_has_migrated_content') && sb_alpha_route_page_has_migrated_content()) {
    sb_alpha_route_render_editor_content_main();
    return;
}

$annual_reports = function_exists('sb_alpha_get_reporting_annual_reports')
    ? sb_alpha_get_reporting_annual_reports()
    : [];
get_header();
?>
<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5)">
        <div class="row" style="align-items: flex-start; gap: var(--s-4); flex-wrap: wrap">
          <div style="min-width: 280px; flex: 1 1 520px">
            <div class="kicker">Информация банка</div>
            <h1 style="margin: 8px 0 10px">Отчетность</h1>
            <p style="max-width: 78ch" class="muted">

            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap: wrap">
              <a class="btn primary" href="#content">Содержание</a>
              <a class="btn outline" href="/">На главную</a>
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
          <h1 class="kicker"><strong>ОТЧЕТНОСТЬ АО НКБ «СЛАВЯНБАНК»</strong></h1>
          <p class="has-text-align-center has-gray-color has-text-color"><strong>ГОДОВАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ</strong></p>

          <?php if (!empty($annual_reports)) : ?>
            <div class="doc-shelf">
              <?php foreach ($annual_reports as $item) : ?>
                <a class="doc-card" href="<?php echo esc_url((string) ($item['url'] ?? '')); ?>" target="_blank" rel="noopener">
                  <span class="doc-ext">PDF</span>
                  <div class="doc-body">
                    <div class="doc-title"><?php echo esc_html((string) ($item['title'] ?? '')); ?></div>
                    <?php if (!empty($item['footer'])) : ?>
                      <div style="font-size: 10px" class="muted"><?php echo esc_html((string) $item['footer']); ?></div>
                    <?php endif; ?>
                  </div>
                  <span class="doc-arrow">→</span>
                </a>
              <?php endforeach; ?>
            </div>
          <?php endif; ?>

        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
