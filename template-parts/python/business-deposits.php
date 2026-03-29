<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Депозиты для юридических лиц</h1>
            <p class="muted" style="max-width:78ch;">Раздел по размещению средств юридических лиц с ориентиром на ставку и условия сопровождения счета.</p>
            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержанию</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Связаться</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('legal-entities')); ?>">Юридическим лицам</a>
            </div>
          </div>
          <div class="route-meta" style="align-self:flex-start;">
            <span class="route-chip">Депозиты</span>
            <span class="route-chip">Ставка</span>
            <span class="route-chip">Счет</span>
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
            <div class="alert"><div class="alert-dot" aria-hidden="true"></div><div><div style="font-weight:600;">Депозиты для бизнеса</div><div class="muted" style="margin-top:4px;">По python-версии страницы акцент делается на ставке, ежемесячной выплате процентов и специальных предложениях для новых клиентов.</div></div></div>
            <div class="info-grid">
              <article class="info-card"><div class="kicker">Основные акценты</div><ul><li>ставка до 14,5%;</li><li>ежемесячная выплата процентов;</li><li>плавающая или фиксированная ставка;</li><li>бонус — начисление процентов на остаток.</li></ul></article>
              <article class="info-card"><div class="kicker">Специальное предложение</div><p>Новым клиентам доступно отдельное предложение по обслуживанию счета.</p><div class="row" style="margin-top:12px; flex-wrap:wrap;"><a class="btn outline" href="https://slavbank.ru/wp-content/uploads/tarif-depositny-1.pdf" target="_blank" rel="noopener">Открыть PDF</a></div></article>
              <article class="info-card section-card--accent"><div class="kicker">Контакт</div><h3>Уточнить условия</h3><ul><li>(8162) 66‑52‑47</li><li>+7‑921‑730‑07‑01</li></ul></article>
            </div>
          </div>
        </div>
        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>
