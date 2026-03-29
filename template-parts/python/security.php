<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Рекомендации по безопасности</h1>
            <p class="muted" style="max-width:78ch;">Проверяйте официальный адрес сайта банка и используйте только корректные точки входа для дистанционного обслуживания.</p>
            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержанию</a>
              <a class="btn outline" href="https://slavbank.ru/" target="_blank" rel="noopener">Официальный сайт</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>">Клиент‑Банк</a>
            </div>
          </div>
          <div class="route-meta" style="align-self:flex-start;">
            <span class="route-chip">Домен</span>
            <span class="route-chip">ДБО</span>
            <span class="route-chip">Безопасность</span>
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
                <div style="font-weight:600;">Будьте осторожны</div>
                <div class="muted" style="margin-top:4px;">Любые сторонние сайты, маскирующиеся под банк, могут использоваться для сбора конфиденциальных данных пользователя.</div>
              </div>
            </div>
            <div class="service-links">
              <div class="service-link"><span><strong>Проверяйте доменное имя</strong><span>Официальный сайт банка — www.slavbank.ru.</span></span></div>
              <div class="service-link"><span><strong>Проверяйте адрес системы ДБО</strong><span>Для дистанционного обслуживания используйте только адрес dbo.slavbank.ru.</span></span></div>
              <div class="service-link"><span><strong>Не вводите логины и пароли на посторонних сайтах</strong><span>Если адрес страницы вызывает сомнения, завершите работу и свяжитесь с банком.</span></span></div>
            </div>
            <div class="section-card section-card--accent">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Связанные разделы</div>
                  <h2 style="margin:8px 0 0;">Что открыть дальше</h2>
                </div>
                <div class="row" style="flex-wrap:wrap;">
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('support')); ?>">Поддержка</a>
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('faq')); ?>">FAQ</a>
                  <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('appeal-123-fz')); ?>">123‑ФЗ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>
