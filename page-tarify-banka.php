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
