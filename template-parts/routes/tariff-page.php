<?php
if (!defined('ABSPATH')) {
    exit;
}

if (!isset($tariff_key) || !is_string($tariff_key)) {
    return;
}

$tariff = sb_alpha_get_tariff_route_page($tariff_key);
if (!is_array($tariff)) {
    return;
}

$pill_links = sb_alpha_get_tariff_route_pill_links($tariff_key);

get_header();
?>
<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker"><?php echo esc_html((string) $tariff['kicker']); ?></div>
            <h1 style="margin:8px 0 10px;"><?php echo esc_html((string) $tariff['title']); ?></h1>
            <p class="muted" style="max-width:78ch;"><?php echo esc_html((string) $tariff['lead']); ?></p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">Перейти к содержимому</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>">Все тарифы</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <?php foreach ($pill_links as $index => $item) : ?>
              <?php if ($index > 0) : ?><span class="muted">·</span><?php endif; ?>
              <a href="<?php echo esc_url((string) $item['url']); ?>" class="mono badge"><?php echo esc_html((string) $item['label']); ?></a>
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
          <div class="pdf-shell">
            <div class="pdf-head">
              <div>
                <div class="kicker">PDF-документ</div>
                <div class="pdf-title"><?php echo esc_html((string) $tariff['pdf_title']); ?></div>
                <div class="muted" style="margin-top:6px;">Откройте внутри страницы или скачайте файл.</div>
              </div>
              <div class="pdf-actions">
                <a class="btn outline pill" href="<?php echo esc_url((string) $tariff['pdf_url']); ?>" target="_blank" rel="noopener">Открыть</a>
                <a class="btn glass pill" href="<?php echo esc_url((string) $tariff['pdf_url']); ?>" download>Скачать</a>
              </div>
            </div>

            <div class="pdf-frame">
              <iframe title="<?php echo esc_attr((string) $tariff['pdf_title']); ?>" src="<?php echo esc_url((string) $tariff['pdf_url']); ?>#view=FitH" loading="lazy"></iframe>
            </div>

            <div class="muted" style="margin-top:10px; font-weight:300;"><?php echo esc_html((string) $tariff['pdf_note']); ?></div>
          </div>

          <?php if (!empty($tariff['documents']) && is_array($tariff['documents'])) : ?>
            <div class="kicker" style="margin-top:12px;">Документы</div>
            <div class="doc-shelf">
              <?php foreach ($tariff['documents'] as $doc) : ?>
                <a class="doc-card" href="<?php echo esc_url((string) $doc['url']); ?>" target="_blank" rel="noopener">
                  <span class="doc-ext"><?php echo esc_html((string) ($doc['kind'] ?? 'PDF')); ?></span>
                  <span class="doc-title"><?php echo esc_html((string) $doc['title']); ?></span>
                  <span class="doc-arrow">→</span>
                </a>
              <?php endforeach; ?>
            </div>
          <?php endif; ?>

          <div class="kicker" style="margin-top:12px;">Содержимое страницы</div>
          <div class="prose">
            <div class="entry-content">
              <p class="muted">После применения migration pattern legacy-наполнение дочерней тарифной страницы должно размещаться в редакторе и рендериться здесь внутри нового style-shell.</p>
            </div>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
