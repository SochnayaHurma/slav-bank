<?php get_header(); ?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Контакты</h1>
            <p class="muted" style="max-width:78ch;">Как связаться с банком: телефон, электронная почта, адрес и режим
              работы.</p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержимому</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('support')); ?>" class="mono">Поддержка</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>" class="mono">Клиент‑банк</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>" class="mono">Реквизиты</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">

      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">

          <div class="alert">
            <div class="alert-dot" aria-hidden="true"></div>
            <div>
              <div style="font-weight:600;">Контакты банка</div>
              <div class="muted" style="margin-top:4px;">Ниже — основные каналы связи, адрес и режим работы. Для
                обращений используйте форму «Написать в банк».</div>
            </div>
          </div>

          <div class="contact-grid" style="margin-top: var(--s-4);">
            <div class="contact-card">
              <div class="kicker">Телефон</div>
              <div class="contact-main"><a href="tel:78162665247">8162665247</a></div>
              <div class="muted">Единый номер банка</div>
              <div class="kv-actions" style="margin-top:10px;">
                <button class="copy mini" type="button" data-copy="8162665247">Копировать</button>
                <a class="btn outline" href="tel:78162665247">Позвонить</a>
              </div>
            </div>

            <div class="contact-card">
              <div class="kicker">Электронная почта</div>
              <div class="contact-main"><a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a></div>
              <div class="muted">Для общих вопросов и документов</div>
              <div class="kv-actions" style="margin-top:10px;">
                <button class="copy mini" type="button" data-copy="nkb@slavbank.ru">Копировать</button>
                <a class="btn outline" href="mailto:nkb@slavbank.ru">Написать</a>
              </div>
            </div>

            <div class="contact-card">
              <div class="kicker">Адрес</div>
              <div class="contact-main">г. Великий Новгород, ул. Черемнова-Конюхова, дом 12</div>
              <div class="muted">Головной офис</div>
              <div class="kv-actions" style="margin-top:10px;">
                <button class="copy mini" type="button"
                  data-copy="г. Великий Новгород, ул. Черемнова-Конюхова, дом 12">Копировать</button>
                <a class="btn outline"
                  href="https://yandex.ru/maps/?text=г. Великий Новгород, ул. Черемнова-Конюхова, дом 12"
                  target="_blank" rel="noopener">Открыть в Яндекс Картах</a>
                <a class="btn outline"
                  href="https://www.google.com/maps/search/?api=1&query=г. Великий Новгород, ул. Черемнова-Конюхова, дом 12"
                  target="_blank" rel="noopener">Открыть в Google Maps</a>
              </div>
            </div>

            <div class="contact-card contact-accent">
              <div class="kicker">Режим работы</div>
              <div class="contact-sub">
                <div class="row" style="justify-content:space-between; gap:10px; flex-wrap:wrap;">
                  <span class="badge">С клиентами</span>
                  <span class="mono">пн-чт с 9.00 — 17.00 (касса до 16.30), пт с 9.00 до 16.00 (касса до 15.30), без
                    обеда, выходные — суббота, воскресенье</span>
                </div>
                <div class="row" style="justify-content:space-between; gap:10px; flex-wrap:wrap; margin-top:10px;">
                  <span class="badge">Поддержка</span>
                  <span class="mono">с 08:30 до 17:30 (пт до 16:30), обед 13:00–14:00; выходные — сб, вс</span>
                </div>
              </div>
              <div class="kv-actions" style="margin-top:12px;">
                <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
                <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('support')); ?>">Поддержка</a>
              </div>
            </div>
          </div>

          <div class="map-shell" style="margin-top: var(--s-4);">
            <div class="map-card">
              <div class="kicker">Как нас найти</div>
              <h3 style="margin: 8px 0 10px;">г. Великий Новгород, ул. Черемнова-Конюхова, дом 12</h3>

              <div class="row" style="margin-top:12px; flex-wrap:wrap;">
                <a class="btn primary"
                  href="https://yandex.ru/maps/?text=г. Великий Новгород, ул. Черемнова-Конюхова, дом 12"
                  target="_blank" rel="noopener">Маршрут в Яндекс Картах →</a>
                <a class="btn outline"
                  href="https://www.google.com/maps/search/?api=1&query=г. Великий Новгород, ул. Черемнова-Конюхова, дом 12"
                  target="_blank" rel="noopener">Маршрут в Google Maps →</a>
              </div>
            </div>
            <div class="map-visual" aria-hidden="true"></div>
          </div>

        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

  <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>Готово</div>
</main>

<?php get_footer(); ?>
