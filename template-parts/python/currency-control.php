<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Валютный контроль</h1>
            <p class="muted" style="max-width:78ch;">
              Банк помогает клиентам по вопросам подготовки документов, сопровождения операций и рабочих консультаций.
            </p>
            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержанию</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Связаться</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>
          <div class="route-meta" style="align-self:flex-start;">
            <span class="route-chip">Документы</span>
            <span class="route-chip">Консультации</span>
            <span class="route-chip">Сопровождение</span>
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
                <div style="font-weight:600;">Основные задачи</div>
                <div class="muted" style="margin-top:4px;">Подготовка, проверка и сопровождение рабочего пакета клиента.</div>
              </div>
            </div>
            <div class="service-links">
              <div class="service-link"><span><strong>Проверка документов</strong><span>Первичная проверка комплектности и структуры пакета.</span></span></div>
              <div class="service-link"><span><strong>Сопровождение операций</strong><span>Поддержка по рабочему процессу и оформлению.</span></span></div>
              <div class="service-link"><span><strong>Консультации</strong><span>Ответы на вопросы по взаимодействию с банком и подготовке материалов.</span></span></div>
            </div>
            <div class="info-grid">
              <article class="info-card">
                <div class="kicker">Контакт</div>
                <h3>Профильное подразделение</h3>
                <ul>
                  <li>(8162) 66‑52‑54</li>
                  <li><a href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты банка</a></li>
                </ul>
              </article>
              <article class="info-card section-card--accent">
                <div class="kicker">Обращение</div>
                <h3>Как начать диалог</h3>
                <p>Направьте вопрос через сайт или используйте раздел контактов для прямой связи.</p>
                <div class="row" style="margin-top:12px; flex-wrap:wrap;">
                  <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
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
