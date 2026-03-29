<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Обслуживание счетов в иностранной валюте</h1>
            <p class="muted" style="max-width:78ch;">Открытие и ведение валютных счетов, сопровождение операций и базовые справочные данные для международной работы клиента.</p>
            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержанию</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">Валютный контроль</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>
          <div class="route-meta" style="align-self:flex-start;">
            <span class="route-chip">Валютные счета</span>
            <span class="route-chip">Операции</span>
            <span class="route-chip">Реквизиты</span>
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
                <div style="font-weight:600;">Что входит в обслуживание</div>
                <div class="muted" style="margin-top:4px;">Банк поддерживает открытие счетов, операции по счету, справки, выписки и оформление платежных документов в иностранной валюте.</div>
              </div>
            </div>
            <div class="info-grid">
              <article class="info-card">
                <div class="kicker">Основные услуги</div>
                <ul>
                  <li>расчетно-кассовое обслуживание валютного счета;</li>
                  <li>выписки и справки по запросу клиента;</li>
                  <li>дубликаты документов и выписок;</li>
                  <li>оформление переводов и закрытие счета.</li>
                </ul>
              </article>
              <article class="info-card">
                <div class="kicker">Операции</div>
                <ul>
                  <li>зачисление средств на счет;</li>
                  <li>переводы и распределение выручки;</li>
                  <li>конвертация одной валюты в другую;</li>
                  <li>документарные операции.</li>
                </ul>
              </article>
              <article class="info-card section-card--accent">
                <div class="kicker">Контакт</div>
                <h3>Управление валютных операций и контроля</h3>
                <ul>
                  <li>(8162) 66‑52‑54</li>
                  <li><a href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты банка</a></li>
                </ul>
              </article>
            </div>
            <div class="section-card">
              <div class="kicker">Валютные реквизиты</div>
              <p class="muted" style="margin-top:10px; max-width:72ch;">При работе с зарубежными контрагентами используется отдельный набор реквизитов по валютам. Для подготовки перевода и проверки данных ориентируйтесь на консультацию банка и раздел валютного контроля.</p>
              <div class="row" style="margin-top:12px; flex-wrap:wrap;">
                <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">Открыть раздел валютного контроля</a>
                <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Задать вопрос</a>
              </div>
            </div>
          </div>
        </div>
        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>
