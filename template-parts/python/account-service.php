<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Обслуживание счетов в валюте РФ</h1>
            <p class="muted" style="max-width:78ch;">Открытие и сопровождение счетов, расчеты, выписки и базовые документы для работы клиента с банком.</p>
            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержанию</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('zapros-na-otkrytie-raschetnogo-scheta')); ?>">Открыть счет</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>
          <div class="route-meta" style="align-self:flex-start;">
            <span class="route-chip">Счета</span>
            <span class="route-chip">Выписки</span>
            <span class="route-chip">Расчеты</span>
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
                <div class="muted" style="margin-top:4px;">Банк сопровождает открытие счета, ведение операций и выдачу документов по запросу клиента.</div>
              </div>
            </div>
            <div class="info-grid">
              <article class="info-card">
                <div class="kicker">Операции</div>
                <ul>
                  <li>открытие и ведение счета;</li>
                  <li>учет денежных средств и выдача выписок;</li>
                  <li>оформление расчетных документов;</li>
                  <li>закрытие счета.</li>
                </ul>
              </article>
              <article class="info-card">
                <div class="kicker">Документы</div>
                <ul>
                  <li><a href="https://slavbank.ru/wp-content/uploads/zayavlenie-na-otkrytie-scheta_oferta-1.doc" target="_blank" rel="noopener">Заявление на открытие счета</a></li>
                  <li><a href="https://slavbank.ru/wp-content/uploads/zayavlenie-na-zakrytie-scheta_nov-1.doc" target="_blank" rel="noopener">Заявление на закрытие счета</a></li>
                  <li><a href="https://slavbank.ru/wp-content/uploads/zayavlenie-o-podklyuchenii-k-sisteme-dbo.pdf" target="_blank" rel="noopener">Подключение к системе</a></li>
                </ul>
              </article>
              <article class="info-card section-card--accent">
                <div class="kicker">Контакт</div>
                <h3>По вопросам обслуживания</h3>
                <ul>
                  <li>(8162) 66‑52‑05</li>
                  <li>+7‑921‑201‑47‑00</li>
                </ul>
              </article>
            </div>
            <div class="section-card section-card--accent">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Следующий шаг</div>
                  <h2 style="margin:8px 0 0;">Запрос на открытие расчетного счета</h2>
                  <p class="muted" style="margin-top:10px; max-width:72ch;">Для начала работы используйте форму запроса на открытие счета или свяжитесь с банком напрямую.</p>
                </div>
                <div class="row" style="flex-wrap:wrap;">
                  <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('zapros-na-otkrytie-raschetnogo-scheta')); ?>">Открыть счет</a>
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Задать вопрос</a>
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
