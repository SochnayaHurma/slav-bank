<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Часто задаваемые вопросы</h1>
            <p class="muted" style="max-width:78ch;">Ответы на типовые ситуации при работе в системе Клиент-Банк, включая вход, подпись документов и платежные вопросы.</p>
            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержанию</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('instruction')); ?>">Инструкция</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>">Клиент‑Банк</a>
            </div>
          </div>
          <div class="route-meta" style="align-self:flex-start;">
            <span class="route-chip">Вход</span>
            <span class="route-chip">Подпись</span>
            <span class="route-chip">Платежи</span>
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
                <div style="font-weight:600;">Контакты технической поддержки</div>
                <div class="muted" style="margin-top:4px;">(8162) 66‑51‑95, 66‑52‑47, +7‑921‑690‑17‑00 · e-mail: <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a></div>
              </div>
            </div>
            <div class="service-links">
              <div class="service-link"><span><strong>Ключи не прошли проверку</strong><span>Проверьте носитель, букву устройства и обновите страницу входа.</span></span></div>
              <div class="service-link"><span><strong>Неактивны кнопки подписи</strong><span>Проверьте статус платежки и перезайдите в систему, если сессия была неактивна.</span></span></div>
              <div class="service-link"><span><strong>Не удаётся войти после установки плагина</strong><span>Перезапустите браузер, проверьте настройку носителя и корректность адреса входа.</span></span></div>
              <div class="service-link"><span><strong>Неверный логин или пароль</strong><span>Убедитесь, что используете официальный адрес клиент-банка банка.</span></span></div>
              <div class="service-link"><span><strong>Операция отменена пользователем</strong><span>Как правило требуется переустановка плагина BSS или обращение в поддержку.</span></span></div>
            </div>
            <div class="section-card section-card--accent">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Связанные разделы</div>
                  <h2 style="margin:8px 0 0;">Полезные страницы</h2>
                </div>
                <div class="row" style="flex-wrap:wrap;">
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('instruction')); ?>">Инструкция</a>
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('ecp-regeneration')); ?>">Перегенерация ЭЦП</a>
                  <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('support')); ?>">Поддержка</a>
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
