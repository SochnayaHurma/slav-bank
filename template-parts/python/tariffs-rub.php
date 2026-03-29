<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Тарифы</div>
            <h1 style="margin:8px 0 10px;">Тарифы по операциям в валюте РФ</h1>
            <p class="muted" style="max-width:78ch;">Тарифный документ по операциям в валюте РФ доступен для просмотра и скачивания.</p>
            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#pdf">К документу</a>
              <a class="btn outline" href="https://slavbank.ru/wp-content/uploads/standard-osobiy-s-01012026.pdf" target="_blank" rel="noopener">Открыть PDF</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>">Все тарифы</a>
            </div>
          </div>
          <div class="route-meta" style="align-self:flex-start;">
            <span class="route-chip">РФ</span>
            <span class="route-chip">PDF</span>
            <span class="route-chip">Скачать</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="block dashv2" id="pdf">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <div class="pdf-shell">
            <div class="pdf-head">
              <div>
                <div class="kicker">PDF-документ</div>
                <div class="pdf-title">Тарифы по операциям в валюте РФ</div>
              </div>
              <div class="pdf-actions">
                <a class="btn outline pill" href="https://slavbank.ru/wp-content/uploads/standard-osobiy-s-01012026.pdf" target="_blank" rel="noopener">Открыть</a>
                <a class="btn glass pill" href="https://slavbank.ru/wp-content/uploads/standard-osobiy-s-01012026.pdf" download>Скачать</a>
              </div>
            </div>
            <div class="pdf-frame"><iframe title="Тарифы по операциям в валюте РФ" src="https://slavbank.ru/wp-content/uploads/standard-osobiy-s-01012026.pdf#view=FitH" loading="lazy"></iframe></div>
          </div>
        </div>
        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>
