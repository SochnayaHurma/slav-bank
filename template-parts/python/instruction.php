<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Инструкция по работе в системе Клиент-Банк</h1>
            <p class="muted" style="max-width:78ch;">Руководство пользователя и выборочные материалы по наиболее частым операциям в системе.</p>
            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержанию</a>
              <a class="btn outline" href="https://slavbank.ru/wp-content/uploads/internet-klient.-rukovodstvo-polzovatelya.pdf" target="_blank" rel="noopener">Скачать руководство</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>">Клиент‑Банк</a>
            </div>
          </div>
          <div class="route-meta" style="align-self:flex-start;">
            <span class="route-chip">Руководство</span>
            <span class="route-chip">FAQ</span>
            <span class="route-chip">ЭЦП</span>
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
                <div style="font-weight:600;">Что доступно в разделе</div>
                <div class="muted" style="margin-top:4px;">Полное руководство пользователя и выборочные инструкции по наиболее частым операциям.</div>
              </div>
            </div>
            <div class="service-links">
              <a class="service-link" href="https://slavbank.ru/wp-content/uploads/internet-klient.-rukovodstvo-polzovatelya.pdf" target="_blank" rel="noopener"><span><strong>Полное руководство пользователя</strong><span>PDF-документ по работе с системой «Интернет‑Клиент».</span></span><span aria-hidden="true">→</span></a>
              <a class="service-link" href="<?php echo esc_url(sb_alpha_url('ecp-regeneration')); ?>"><span><strong>Перегенерация ключей</strong><span>Пошаговая инструкция по обновлению сертификата.</span></span><span aria-hidden="true">→</span></a>
              <a class="service-link" href="https://slavbank.ru/wp-content/uploads/zagruzka-i-ustanovka-kriptoplagina.pdf" target="_blank" rel="noopener"><span><strong>Загрузка и установка криптоплагина</strong><span>Материал по установке необходимого компонента.</span></span><span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>
