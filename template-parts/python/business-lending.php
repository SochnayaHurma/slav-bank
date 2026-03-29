<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Кредитование юридических лиц</h1>
            <p class="muted" style="max-width:78ch;">
              Банк предоставляет кредитные продукты для юридических лиц и предпринимателей в рублях и иностранной валюте.
            </p>
            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержанию</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('zapros-na-kreditovanie-msp')); ?>">Подать заявку</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>
          <div class="route-meta" style="align-self:flex-start;">
            <span class="route-chip">Коммерческий кредит</span>
            <span class="route-chip">Овердрафт</span>
            <span class="route-chip">Кредитная линия</span>
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
                <div style="font-weight:600;">Ключевые критерии рассмотрения</div>
                <div class="muted" style="margin-top:4px;">При анализе заявки банк учитывает платежеспособность, качество обеспечения и кредитную историю клиента.</div>
              </div>
            </div>

            <div class="info-grid">
              <article class="info-card">
                <div class="kicker">Подход</div>
                <h3>Что оценивается</h3>
                <ul>
                  <li>платежеспособность заемщика;</li>
                  <li>качество и ликвидность обеспечения;</li>
                  <li>кредитная история.</li>
                </ul>
              </article>

              <article class="info-card">
                <div class="kicker">Условия</div>
                <h3>Общие ориентиры</h3>
                <ul>
                  <li>срок кредита — до 5 лет;</li>
                  <li>график погашения — в удобном для клиента формате;</li>
                  <li>проценты начисляются на остаток задолженности.</li>
                </ul>
              </article>

              <article class="info-card section-card--accent">
                <div class="kicker">Преимущество</div>
                <h3>Постоянные клиенты</h3>
                <p>Постоянные клиенты банка имеют приоритет при рассмотрении вопроса о выдаче кредита.</p>
              </article>
            </div>

            <div class="service-links">
              <div class="service-link">
                <span>
                  <strong>Коммерческий кредит</strong>
                  <span>Долгосрочный, среднесрочный и краткосрочный формат в зависимости от задачи клиента.</span>
                </span>
              </div>
              <div class="service-link">
                <span>
                  <strong>Возобновляемая кредитная линия</strong>
                  <span>Подходит клиентам, у которых в процессе работы регулярно высвобождаются денежные средства.</span>
                </span>
              </div>
              <div class="service-link">
                <span>
                  <strong>Овердрафт</strong>
                  <span>Инструмент для покрытия кратковременной нехватки средств на расчетном счете.</span>
                </span>
              </div>
            </div>

            <div class="section-card section-card--accent">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Заявка</div>
                  <h2 style="margin:8px 0 0;">Запрос на кредитование СМП</h2>
                  <p class="muted" style="margin-top:10px; max-width:72ch;">Для старта используйте форму запроса на кредитование или свяжитесь с банком напрямую.</p>
                </div>
                <div class="row" style="flex-wrap:wrap;">
                  <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('zapros-na-kreditovanie-msp')); ?>">Подать заявку</a>
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
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
