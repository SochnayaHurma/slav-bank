<?php get_header(); ?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">Поддержка</h1>
            <p class="muted" style="max-width:78ch;">
              Раздел создан для поддержки клиентов АО НКБ «СЛАВЯНБАНК»: инструкции, ссылки для входа в системы
              банка, контакты технической поддержки и ссылки на связанные сервисы.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержимому</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('security')); ?>" class="mono">Безопасность</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>" class="mono">Клиент‑Банк</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('appeal-123-fz')); ?>" class="mono">123‑ФЗ</a>
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
                <div style="font-weight:600;">Частые темы поддержки</div>
                <div class="muted" style="margin-top:4px;">
                  Здесь собраны основные материалы для работы с системой Клиент-Банк: ответы на частые вопросы,
                  инструкции, рекомендации по безопасности и ссылки на сервисы банка.
                </div>
              </div>
            </div>

            <div class="support-topic-grid">
              <a class="doc-card" href="<?php echo esc_url(sb_alpha_url('faq')); ?>">
                <span class="doc-ext">FAQ</span>
                <div class="doc-body">
                  <div class="doc-title">Часто задаваемые вопросы</div>
                  <div class="muted">Ответы на типовые вопросы при работе в системе Клиент‑Банк.</div>
                </div>
                <span class="doc-arrow">→</span>
              </a>

              <a class="doc-card" href="<?php echo esc_url(sb_alpha_url('ecp-regeneration')); ?>">
                <span class="doc-ext">ЭЦП</span>
                <div class="doc-body">
                  <div class="doc-title">Перегенерация ЭЦП</div>
                  <div class="muted">Продление прав доступа и пошаговая инструкция для работы с ключами.</div>
                </div>
                <span class="doc-arrow">→</span>
              </a>

              <a class="doc-card" href="<?php echo esc_url(sb_alpha_url('security')); ?>">
                <span class="doc-ext">SAFE</span>
                <div class="doc-body">
                  <div class="doc-title">Рекомендации по безопасности</div>
                  <div class="muted">Проверка доменного имени, правила безопасного доступа и контроль среды.</div>
                </div>
                <span class="doc-arrow">→</span>
              </a>
            </div>

            <div class="section-card section-card--accent">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Техническая поддержка</div>
                  <h2 style="margin:8px 0 0;">Контакты и режим работы</h2>
                </div>
                <a class="btn outline" href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>
              </div>

              <div class="info-grid" style="margin-top: var(--s-4);">
                <article class="info-card">
                  <div class="kicker">Телефоны</div>
                  <h3>(8162) 66-51-95, 66-52-47, +7-921-690-17-00</h3>
                  <p>Основные номера технической поддержки для Клиент‑Банка и смежных сервисов.</p>
                </article>

                <article class="info-card">
                  <div class="kicker">Режим работы</div>
                  <h3>с 08:30 до 17:30</h3>
                  <p>Пятница — до 16:30, обед с 13:00 до 14:00, выходные — суббота и воскресенье.</p>
                </article>

                <article class="info-card">
                  <div class="kicker">Почта</div>
                  <h3><a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a></h3>
                  <p>Для запросов, связанных с доступом, инструкциями и техническими вопросами.</p>
                </article>
              </div>
            </div>

            <div class="section-card">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Сервисы</div>
                  <h2 style="margin:8px 0 0;">Ссылки для работы с системами банка</h2>
                </div>
              </div>

              <div class="service-links" style="margin-top: var(--s-4);">
                <a class="service-link" href="<?php echo esc_url(sb_alpha_url('instruction')); ?>">
                  <span>
                    <strong>Руководство пользователя «Интернет-Клиент»</strong>
                    <small class="muted">Полная инструкция по работе в системе «Клиент‑Банк».</small>
                  </span>
                  <span aria-hidden="true">→</span>
                </a>

                <a class="service-link" href="<?php echo esc_url(sb_alpha_url('client-bank-primary-login')); ?>" target="_blank" rel="noopener">
                  <span>
                    <strong>Основной вход в Клиент‑Банк</strong>
                    <small class="muted">dbo.slavbank.ru:20101 — для доступа может потребоваться установка плагина.</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>

                <a class="service-link" href="<?php echo esc_url(sb_alpha_url('client-bank-backup-login')); ?>" target="_blank" rel="noopener">
                  <span>
                    <strong>Резервный вход в Клиент‑Банк</strong>
                    <small class="muted">dbo1.slavbank.ru:20101 — использовать после подтверждения банка.</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>

                <a class="service-link" href="<?php echo esc_url(sb_alpha_url('remote-support')); ?>" target="_blank" rel="noopener">
                  <span>
                    <strong>Удаленное управление</strong>
                    <small class="muted">Внешний сервис Ammyy Admin для дистанционной технической помощи.</small>
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div class="section-card">
              <div class="prose">
                <h3>О разделе поддержки</h3>
                <p>
                  Система «ДБО BS-Client x64» позволяет клиентам банка осуществлять информационное и
                  платежно-расчетное обслуживание без личного присутствия в банке с использованием персонального
                  компьютера и сети Интернет.
                </p>
                <p>
                  При переходе по ссылкам обращайте внимание на доменные имена сервисов и сопоставляйте их с
                  адресами, указанными на официальном сайте банка и в рекомендациях по безопасности.
                </p>
              </div>
            </div>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
