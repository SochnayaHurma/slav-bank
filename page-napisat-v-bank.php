<?php
$form_markup = sb_alpha_feedback_form_markup();
get_header();
?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Написать в банк</h1>
            <p class="muted" style="max-width:78ch;">
              АО НКБ «СЛАВЯНБАНК» принимает обращения заявителей почтой, нарочно, по электронной почте,
              в местах обслуживания клиентов и через форму обратной связи на сайте.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#form">К форме</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('vacancies')); ?>" class="mono">Вакансии</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>" class="mono">Написать</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('covid19')); ?>" class="mono">COVID‑19</a>
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
                <div style="font-weight:600;">Как можно направить обращение</div>
                <div class="muted" style="margin-top:4px;">
                  Выберите удобный канал связи: почтовое отправление, личная подача обращения,
                  электронная почта или онлайн-форма на сайте.
                </div>
              </div>
            </div>

            <div class="contact-way-grid">
              <article class="contact-way-card">
                <div class="kicker">Почтовая связь</div>
                <h3>Адрес банка</h3>
                <p>173004, Новгородская обл., г. Великий Новгород, ул. Черемнова-Конюхова, дом 12.</p>
                <div class="kv-copy" style="margin-top:12px;">
                  <button class="copy mini" type="button" data-copy="173004, Новгородская обл., г. Великий Новгород, ул. Черемнова-Конюхова, дом 12">Копировать адрес</button>
                </div>
              </article>

              <article class="contact-way-card">
                <div class="kicker">Лично в офисе</div>
                <h3>Приём обращений</h3>
                <p>В местах обслуживания клиентов по адресу Великий Новгород, ул. Черемнова-Конюхова, 12.</p>
                <div class="row" style="margin-top:12px; flex-wrap:wrap;">
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты и режим работы</a>
                </div>
              </article>

              <article class="contact-way-card section-card--accent">
                <div class="kicker">Электронные каналы</div>
                <h3>E-mail и сайт</h3>
                <ul class="contact-way-list">
                  <li><a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a></li>
                  <li><a href="<?php echo esc_url(home_url('/')); ?>"><?php echo esc_html(home_url('/')); ?></a></li>
                </ul>
              </article>
            </div>

            <div class="section-card" id="form">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Форма обратной связи</div>
                  <h2 style="margin:8px 0 0;">Отправьте нам обращение прямо сейчас</h2>
                  <p class="muted" style="margin-top:10px; max-width:72ch;">
                    Укажите телефон или e-mail для обратной связи, опишите вопрос в свободной форме
                    и подтвердите согласие на обработку персональных данных.
                  </p>
                </div>
                <a class="btn glass" href="mailto:nkb@slavbank.ru">Написать по e-mail</a>
              </div>

              <div class="cf7-theme" style="margin-top: var(--s-4);">
                <?php if ($form_markup !== '') : ?>
                  <?php echo $form_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                <?php else : ?>
                  <div class="cf7-empty-state">
                    <strong>Онлайн-форма временно недоступна.</strong>
                    <p>
                      Направьте обращение по адресу <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>
                      или свяжитесь с банком по телефону <a href="tel:+78162665247">(8162) 66‑52‑47</a>.
                    </p>
                  </div>
                <?php endif; ?>
              </div>
            </div>

            <div class="legal-copy">
              <details open>
                <summary>Согласие на обработку персональных данных</summary>
                <div class="prose">
                  <p>
                    Я, действуя свободно, своей волей и в своем интересе, выражаю согласие оператору персональных
                    данных АО НКБ «СЛАВЯНБАНК» (ИНН 5321068480, адрес: 173004, Новгородская обл., г. Великий Новгород,
                    ул. Черемнова-Конюхова, дом 12) на обработку моих персональных данных: ФИО, контактный телефон,
                    адрес электронной почты.
                  </p>
                  <p>
                    Обработка осуществляется в целях рассмотрения обращения, направленного в банк с использованием
                    формы обратной связи на официальном сайте банка, а также получения ответа на обращение.
                  </p>
                  <ul>
                    <li>сбор, запись, систематизация и накопление данных;</li>
                    <li>хранение, уточнение, использование и передача сведений для ответа по обращению;</li>
                    <li>блокирование и удаление персональных данных по истечении установленного срока хранения.</li>
                  </ul>
                </div>
              </details>

              <details>
                <summary>Права заявителя и отзыв согласия</summary>
                <div class="prose">
                  <p>
                    Банк гарантирует право на получение сведений о персональных данных, право на их удаление,
                    уточнение или исправление, а также иные права, предусмотренные законодательством Российской
                    Федерации в области персональных данных.
                  </p>
                  <p>
                    Согласие может быть отозвано в любое время путем подачи заявления на e-mail
                    <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a> или в письменной форме на адрес банка.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

  <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>Готово</div>
</main>

<?php get_footer(); ?>
