<?php get_header(); ?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">О банке</div>
            <h1 style="margin:8px 0 10px;">Реквизиты банка</h1>
            <p class="muted" style="max-width:78ch;">
              Основные регистрационные данные, лицензия, контакты банка и сведения о внешних контрагентах,
              которые указаны в исходном Django-шаблоне.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К содержимому</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>" class="mono">Информация банка</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('reporting')); ?>" class="mono">Отчетность</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('contacts')); ?>" class="mono">Контакты</a>
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
                <div style="font-weight:600;">Ключевые сведения о банке</div>
                <div class="muted" style="margin-top:4px;">
                  Здесь собраны регистрационные реквизиты, контакты и публичные сведения о надзоре, регистраторе
                  и аудиторской организации. Для копирования значений используйте кнопки в таблице.
                </div>
              </div>
            </div>

            <div class="info-grid">
              <article class="info-card">
                <div class="kicker">Аудиторская организация</div>
                <h3>ООО «Балтийский аудит»</h3>
                <ul>
                  <li>Адрес: 196084, г. Санкт-Петербург, Московский пр., д. 127, кв. 30</li>
                  <li>E-mail: <a href="mailto:mail@baudit.spb.ru">mail@baudit.spb.ru</a></li>
                  <li>ОГРН: 1147847390250</li>
                  <li>Член СРО аудиторов Ассоциация «Содружество» (ОРНЗ 11406045396)</li>
                </ul>
              </article>

              <article class="info-card">
                <div class="kicker">Регистратор</div>
                <h3>АО «Независимая регистраторская компания Р.О.С.Т.»</h3>
                <ul>
                  <li>ИНН 7726030449, лицензия № 045-13976-000001 от 03.12.2002</li>
                  <li>Адрес: 173003, Новгородская обл., г. Великий Новгород, наб. реки Гзень, дом 11, оф. 403</li>
                  <li>Телефон: <a href="tel:+78162731720">(8162) 73-17-20</a>, 730-723</li>
                  <li>E-mail: <a href="mailto:vnovgorod@rrost.ru">vnovgorod@rrost.ru</a></li>
                </ul>
              </article>

              <article class="info-card section-card--accent">
                <div class="kicker">Банковский надзор</div>
                <h3>Служба текущего банковского надзора Банка России</h3>
                <ul>
                  <li>300 — бесплатно для звонков с мобильных телефонов</li>
                  <li><a href="tel:88003003000">8 (800) 300-30-00</a> — бесплатно на территории РФ</li>
                  <li><a href="tel:+74993003000">+7 (499) 300-30-00</a> — по тарифу оператора</li>
                  <li>
                    Обращение о нарушении прав можно направить через
                    <a href="http://www.cbr.ru/Интернет-приемная" target="_blank" rel="noopener">интернет-приемную Банка России</a>.
                  </li>
                </ul>
              </article>
            </div>

            <div class="section-card">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Реквизиты</div>
                  <h2 style="margin:8px 0 0;">Сведения о банке</h2>
                </div>
                <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Уточнить данные</a>
              </div>

              <div class="kv-table" style="margin-top: var(--s-4);">
                <?php foreach (sb_alpha_get_bank_requisites_rows() as $row) : ?>
                  <?php
                  $value = (string) $row['value'];
                  $copy_value = isset($row['copy']) ? (string) $row['copy'] : $value;
                  $has_link = !empty($row['url']);
                  $is_external = !empty($row['external']);
                  ?>
                  <div class="kv-row">
                    <div class="kv-label"><?php echo esc_html((string) $row['label']); ?></div>
                    <div class="kv-value">
                      <div>
                        <?php if ($has_link) : ?>
                          <a href="<?php echo esc_url((string) $row['url']); ?>"<?php echo $is_external ? ' target="_blank" rel="noopener"' : ''; ?>>
                            <?php echo esc_html($value); ?>
                          </a>
                        <?php else : ?>
                          <?php echo esc_html($value); ?>
                        <?php endif; ?>
                      </div>
                      <div class="kv-copy">
                        <button class="copy mini" type="button" data-copy="<?php echo esc_attr($copy_value); ?>">Копировать</button>
                      </div>
                    </div>
                  </div>
                <?php endforeach; ?>
              </div>
            </div>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

  <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>Скопировано</div>
</main>

<?php get_footer(); ?>
