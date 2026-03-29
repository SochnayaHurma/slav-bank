<div class="topbar reveal" data-reveal="scale">
  <div class="container row" style="flex-wrap: wrap">
    <div class="pill pill--topbar">
      <span class="badge">Контакты</span>
      <a href="tel:+78162665247" class="mono">(8162) 66‑52‑47</a>
      <span class="muted">·</span>
      <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>
      <span class="muted">·</span>
      <a href="mailto:ved@slavbank.ru">ved@slavbank.ru</a>
    </div>

    <div class="spacer"></div>

    <div class="row" style="flex-wrap: wrap">
      <button
        class="btn ghost"
        id="a11yBtn"
        aria-pressed="false"
        title="Режим доступности: крупнее шрифт и выше контраст"
        type="button"
      >
        Aa · Доступность
      </button>
      <button class="btn glass" id="searchOpen" type="button" aria-haspopup="dialog" aria-controls="searchOverlay">
        Поиск
      </button>
    </div>
  </div>
</div>

<header class="header reveal" data-reveal="scale" data-mega-root data-menu-variant="prod">
  <div class="container row" style="gap:0px;">
    <div class="brand" style="margin-right: 10px;">
      <a href="<?php echo esc_url(sb_alpha_url('home')); ?>">
        <img src="<?php echo esc_url(sb_alpha_asset('img/logo2.png')); ?>" alt="СЛАВЯНБАНК" width="100%" />
      </a>
    </div>

    <nav aria-label="Основное меню">
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('legal-entities')); ?>">Юридическим лицам</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">Валютный контроль</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>">Клиент‑Банк</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>">Тарифы</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
    </nav>

    <div class="spacer"></div>

    <button class="btn menu-btn" type="button" data-mega-btn aria-label="Открыть меню" aria-expanded="false">
      ☰ Меню
    </button>

    <a
      style="width: 210px; margin-left: 10px;"
      class="btn primary clientbank-cta"
      href="<?php echo esc_url(sb_alpha_url('write-to-bank') . '#form'); ?>"
      title="Оставить обращение"
    >
      Оставить обращение
    </a>
  </div>

  <div class="mega-backdrop" data-mega-backdrop aria-hidden="true"></div>

  <div class="mega card" data-mega-panel role="dialog" aria-label="Разделы сайта">
    <div class="header-grid">
      <div class="mega-mhead">
        <div class="mega-mobile-title">Разделы сайта</div>
        <button class="btn ghost mega-close" type="button" data-mega-close aria-label="Закрыть меню">✕</button>
      </div>

      <div data-mega-links style="display: grid; gap: 6px">
        <div class="mega-group" data-mega-group="about">
          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Информация банка</strong><small>Документы и официальные сведения</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Реквизиты банка</strong><small>Платежные данные и контактные сведения</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('reporting')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Отчетность</strong><small>Годовые и промежуточные документы</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Новости</strong><small>Объявления, режим работы и обновления тарифов</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('support')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Поддержка</strong><small>FAQ, безопасность и удаленная помощь</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Написать в банк</strong><small>Обращение через форму или по e-mail</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('client-bank-login')); ?>" target="_blank" rel="noopener">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Вход в ВЭД</strong><small>Переход в систему дистанционного обслуживания</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('vacancies')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Вакансии</strong><small>Открытые позиции и контакты для соискателей</small></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>
