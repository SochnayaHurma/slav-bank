<?php
$feedback_notice = sb_alpha_feedback_notice();
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
              в офисе банка и через форму обратной связи на сайте.
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
            <a href="<?php echo esc_url(sb_alpha_url('covid19')); ?>" class="mono">COVID19</a>
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
                  Источник на master-ветке перечисляет пять каналов: почтовая связь, личная подача на бумаге,
                  прием в офисе, электронная почта и официальный сайт банка.
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
                <h3>Прием обращений</h3>
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
                  <li><a href="<?php echo esc_url(home_url('/')); ?>" target="_blank" rel="noopener"><?php echo esc_html(home_url('/')); ?></a></li>
                </ul>
              </article>
            </div>

            <div class="section-card" id="form">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Форма обратной связи</div>
                  <h2 style="margin:8px 0 0;">Отправьте нам обращение прямо сейчас</h2>
                </div>
                <a class="btn glass" href="mailto:nkb@slavbank.ru">Написать по e-mail</a>
              </div>

              <?php if (!empty($feedback_notice)) : ?>
                <div class="status-note status-note--<?php echo esc_attr((string) $feedback_notice['tone']); ?>" style="margin-top: var(--s-4);">
                  <strong><?php echo esc_html((string) $feedback_notice['title']); ?></strong>
                  <span><?php echo esc_html((string) $feedback_notice['text']); ?></span>
                </div>
              <?php endif; ?>

              <form class="form-shell" style="margin-top: var(--s-4);" action="<?php echo esc_url(sb_alpha_feedback_form_action_url()); ?>" method="post">
                <input type="hidden" name="action" value="sb_alpha_feedback" />
                <?php wp_nonce_field('sb_alpha_feedback_submit', 'sb_alpha_feedback_nonce'); ?>

                <div class="honeypot" aria-hidden="true">
                  <label for="sb-alpha-website">Website</label>
                  <input id="sb-alpha-website" type="text" name="website" tabindex="-1" autocomplete="off" />
                </div>

                <div class="field-grid">
                  <div class="field">
                    <label for="sb-alpha-name">ФИО</label>
                    <input id="sb-alpha-name" type="text" name="name" autocomplete="name" />
                  </div>
                  <div class="field">
                    <label for="sb-alpha-phone">Телефон</label>
                    <input id="sb-alpha-phone" type="text" name="phone" autocomplete="tel" placeholder="Например, +7 (8162) 66-52-47" />
                  </div>
                  <div class="field">
                    <label for="sb-alpha-email">E-mail</label>
                    <input id="sb-alpha-email" type="email" name="email" autocomplete="email" placeholder="you@example.com" />
                  </div>
                  <div class="field">
                    <label>Канал ответа</label>
                    <div class="muted-card">Ответ будет направлен по указанному телефону или e-mail — обязательный выбор темы на этом этапе не требуется.</div>
                  </div>
                  <div class="field field--full">
                    <label for="sb-alpha-message">Сообщение</label>
                    <textarea id="sb-alpha-message" name="message" required placeholder="Опишите вопрос или обращение в свободной форме"></textarea>
                  </div>
                </div>

                <div class="consent-box">
                  <label for="sb-alpha-consent">
                    <input id="sb-alpha-consent" type="checkbox" name="consent" value="1" required />
                    <span>
                      Нажимая кнопку «Отправить», вы даёте согласие на обработку персональных данных в объеме,
                      необходимом для рассмотрения обращения и направления ответа.
                    </span>
                  </label>
                  <div class="muted" style="font-size:14px;">
                    Для ответа укажите хотя бы один контакт: телефон или e-mail.
                  </div>
                </div>

                <div class="row" style="gap:12px; flex-wrap:wrap;">
                  <button class="btn primary" type="submit">Отправить</button>
                  <a class="btn outline" href="mailto:nkb@slavbank.ru">Альтернатива: e-mail</a>
                </div>
              </form>
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
