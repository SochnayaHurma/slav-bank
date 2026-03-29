<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Перегенерация ЭЦП</h1>
            <p class="muted" style="max-width:78ch;">Пошаговое обновление сертификата и работа с актом признания до истечения срока действия электронной подписи.</p>
            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержанию</a>
              <a class="btn outline" href="https://slavbank.ru/wp-content/uploads/instrukcziya-po-peregeneraczii-klyuchej.pdf" target="_blank" rel="noopener">Скачать PDF</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('instruction')); ?>">Инструкция</a>
            </div>
          </div>
          <div class="route-meta" style="align-self:flex-start;">
            <span class="route-chip">Сертификат</span>
            <span class="route-chip">Акт</span>
            <span class="route-chip">Подпись</span>
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
                <div style="font-weight:600;">Коротко о процессе</div>
                <div class="muted" style="margin-top:4px;">Система заранее предупреждает о необходимости плановой перегенерации сертификата, после чего клиент формирует запрос, подписывает его и передает акт в банк.</div>
              </div>
            </div>
            <div class="service-links">
              <div class="service-link"><span><strong>1. Открыть раздел профилей</strong><span>Сервис → Безопасность → Профили.</span></span></div>
              <div class="service-link"><span><strong>2. Выбрать владельца ЭЦП</strong><span>Нужный профиль выбирается в списке пользователей.</span></span></div>
              <div class="service-link"><span><strong>3. Создать запрос на перегенерацию</strong><span>Подписать запрос и отправить документ в банк.</span></span></div>
              <div class="service-link"><span><strong>4. Распечатать акт</strong><span>Подготовить два экземпляра акта признания сертификата.</span></span></div>
              <div class="service-link"><span><strong>5. Получить новый сертификат</strong><span>После завершения процедуры специалистом банка получить сертификат на носитель.</span></span></div>
            </div>
            <div class="section-card section-card--accent">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Важно</div>
                  <h2 style="margin:8px 0 0;">Не откладывайте обновление на последний день</h2>
                  <p class="muted" style="margin-top:10px; max-width:72ch;">Акты признания нужно передать в банк до истечения срока действия ЭЦП. Если обновление выполняется в последний день, лучше заранее связаться с банком.</p>
                </div>
                <div class="row" style="flex-wrap:wrap;">
                  <a class="btn primary" href="https://slavbank.ru/wp-content/uploads/instrukcziya-po-peregeneraczii-klyuchej.pdf" target="_blank" rel="noopener">Скачать инструкцию</a>
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('faq')); ?>">FAQ</a>
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
