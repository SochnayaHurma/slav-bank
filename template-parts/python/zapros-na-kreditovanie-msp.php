<?php $form_markup = sb_python_form_markup('zapros-na-kreditovanie-msp'); ?>
<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Форма</div>
            <h1 style="margin:8px 0 10px;">Запрос на кредитование СМП</h1>
            <p class="muted" style="max-width:78ch;">Оставьте базовые данные для первичного рассмотрения запроса. Специалисты банка свяжутся с вами для уточнения информации.</p>
            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#form">К форме</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('business-lending')); ?>">Кредитование</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>
          <div class="route-meta" style="align-self:flex-start;">
            <span class="route-chip">Организация / ИП</span>
            <span class="route-chip">ИНН</span>
            <span class="route-chip">Контакты</span>
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
                <div style="font-weight:600;">Что указать в запросе</div>
                <div class="muted" style="margin-top:4px;">Оставьте сведения об организации, контактные данные и краткую дополнительную информацию по потребности.</div>
              </div>
            </div>
            <div class="section-card" id="form">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Онлайн-форма</div>
                  <h2 style="margin:8px 0 0;">Подать заявку</h2>
                </div>
                <a class="btn glass" href="mailto:nkb@slavbank.ru">Написать по e-mail</a>
              </div>
              <div class="cf7-theme" style="margin-top: var(--s-4);">
                <?php if ($form_markup !== '') : ?>
                  <?php echo $form_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                <?php else : ?>
                  <div class="cf7-empty-state">
                    <strong>Форма пока не подключена.</strong>
                    <p>Подключите shortcode через фильтр <code>sb_python_form_shortcode_zapros-na-kreditovanie-msp</code> или направьте обращение на <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>.</p>
                  </div>
                <?php endif; ?>
              </div>
            </div>
          </div>
        </div>
        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>
