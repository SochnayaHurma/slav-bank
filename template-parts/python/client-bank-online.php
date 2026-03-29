<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Клиент‑Банк</h1>
            <p class="muted" style="max-width:78ch;">
              Раздел с точками входа, рабочими инструкциями и базовой поддержкой по дистанционному обслуживанию.
            </p>
            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержанию</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('support')); ?>">Поддержка</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>
          <div class="route-meta" style="align-self:flex-start;">
            <span class="route-chip">Вход</span>
            <span class="route-chip">Инструкции</span>
            <span class="route-chip">Поддержка</span>
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
                <div style="font-weight:600;">Основные действия</div>
                <div class="muted" style="margin-top:4px;">Используйте рабочие адреса входа и справочные материалы для повседневной работы.</div>
              </div>
            </div>
            <div class="service-links">
              <a class="service-link" href="<?php echo esc_url(sb_alpha_url('client-bank-login')); ?>" target="_blank" rel="noopener"><span><strong>Вход в систему</strong><span>Основная точка входа в дистанционное обслуживание.</span></span><span aria-hidden="true">→</span></a>
              <a class="service-link" href="<?php echo esc_url(sb_alpha_url('instruction')); ?>"><span><strong>Инструкция</strong><span>Рабочие материалы по использованию системы.</span></span><span aria-hidden="true">→</span></a>
              <a class="service-link" href="<?php echo esc_url(sb_alpha_url('faq')); ?>"><span><strong>Частые вопросы</strong><span>Короткие ответы по типовым ситуациям.</span></span><span aria-hidden="true">→</span></a>
            </div>
            <div class="info-grid">
              <article class="info-card">
                <div class="kicker">Смежные материалы</div>
                <ul>
                  <li><a href="<?php echo esc_url(sb_alpha_url('ecp-regeneration')); ?>">Перегенерация ЭЦП</a></li>
                  <li><a href="<?php echo esc_url(sb_alpha_url('security')); ?>">Рекомендации по безопасности</a></li>
                  <li><a href="<?php echo esc_url(sb_alpha_url('support')); ?>">Раздел поддержки</a></li>
                </ul>
              </article>
              <article class="info-card section-card--accent">
                <div class="kicker">Обратная связь</div>
                <h3>Если нужен ответ банка</h3>
                <p>Когда вопрос не решается справочными материалами, используйте форму обращения на сайте или раздел поддержки.</p>
                <div class="row" style="margin-top:12px; flex-wrap:wrap;">
                  <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('support')); ?>">Поддержка</a>
                </div>
              </article>
            </div>
          </div>
        </div>
        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>
