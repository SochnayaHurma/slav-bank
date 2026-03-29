<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Юридическим лицам</h1>
            <p class="muted" style="max-width:78ch;">
              Для юридических лиц и предпринимателей банк предлагает расчетно‑кассовое обслуживание,
              кредитование, обслуживание валютных счетов и сопровождение валютного контроля.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержанию</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Связаться</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="route-meta" style="align-self:flex-start;">
            <span class="route-chip">РКО</span>
            <span class="route-chip">Валютные счета</span>
            <span class="route-chip">Кредитование</span>
            <span class="route-chip">Валютный контроль</span>
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
                <div style="font-weight:600;">Основные услуги для бизнеса</div>
                <div class="muted" style="margin-top:4px;">
                  Ниже собраны ключевые направления, которые сейчас наиболее востребованы у юридических лиц и ИП.
                </div>
              </div>
            </div>

            <div class="service-links">
              <a class="service-link" href="<?php echo esc_url(sb_alpha_url('business-lending')); ?>">
                <span>
                  <strong>Кредитование юридических лиц и предпринимателей</strong>
                  <span>Финансирование текущей деятельности, оборотных задач и отдельных проектов.</span>
                </span>
                <span aria-hidden="true">→</span>
              </a>

              <a class="service-link" href="<?php echo esc_url(sb_alpha_url('account-service')); ?>">
                <span>
                  <strong>Обслуживание счетов в валюте РФ</strong>
                  <span>Открытие и ведение счета, безналичные и наличные расчеты, выписки и расчетные документы.</span>
                </span>
                <span aria-hidden="true">→</span>
              </a>

              <a class="service-link" href="<?php echo esc_url(sb_alpha_url('fx-account-service')); ?>">
                <span>
                  <strong>Обслуживание счетов в иностранной валюте</strong>
                  <span>Открытие и ведение валютных счетов, сопровождение международных расчетов.</span>
                </span>
                <span aria-hidden="true">→</span>
              </a>

              <a class="service-link" href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">
                <span>
                  <strong>Валютный контроль</strong>
                  <span>Консультации, проверка документов и сопровождение валютных операций клиента.</span>
                </span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div class="info-grid">
              <article class="info-card">
                <div class="kicker">Кредитование</div>
                <h3>Как получить консультацию</h3>
                <p>Более подробную информацию можно получить в Управлении по кредитованию и инвестициям банка.</p>
                <ul>
                  <li>тел. (8162) 66‑52‑56</li>
                  <li>тел. (8162) 66‑52‑63</li>
                </ul>
              </article>

              <article class="info-card">
                <div class="kicker">Обслуживание счетов</div>
                <h3>Контакты по РКО</h3>
                <p>По обслуживанию счетов в валюте РФ можно обратиться по телефону или через форму обратной связи.</p>
                <ul>
                  <li>(8162) 66‑52‑05</li>
                  <li>+7‑921‑201‑47‑00</li>
                </ul>
              </article>

              <article class="info-card section-card--accent">
                <div class="kicker">Валютные операции</div>
                <h3>Контакты профильного подразделения</h3>
                <p>По вопросам обслуживания счетов в иностранной валюте и валютного контроля можно обратиться в Управление валютных операций и контроля.</p>
                <ul>
                  <li>(8162) 66‑52‑54</li>
                  <li><a href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты банка</a></li>
                </ul>
              </article>
            </div>

            <div class="section-card section-card--accent">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Следующий шаг</div>
                  <h2 style="margin:8px 0 0;">Открытие счета и первичная консультация</h2>
                  <p class="muted" style="margin-top:10px; max-width:72ch;">
                    Для старта работы с банком используйте форму обращения или запросите консультацию по расчетному счету.
                  </p>
                </div>
                <div class="row" style="flex-wrap:wrap;">
                  <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
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
