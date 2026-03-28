<div class="topbar reveal" data-reveal="scale">
  <div class="container row" style="flex-wrap: wrap">
    <div class="pill pill--topbar">
      <span class="badge">Контакты</span>
      <a href="tel:8162665247" class="mono">(8162) 665‑247</a>
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
      >
        Aa · Доступность
      </button>
      <button class="btn glass" id="searchOpen" aria-haspopup="dialog" aria-controls="searchOverlay">
        Поиск
      </button>
    </div>
  </div>
</div>

<header
  class="header reveal"
  data-reveal="scale"
  data-mega-root
  data-menu-variant="prod"
  data-mega-mobile="drilldown"
>
  <div class="container row" style="gap:0px;">
    <div class="brand" style="margin-right: 10px;">
      <a href="<?php echo esc_url(sb_alpha_url('home')); ?>">
        <img src="<?php echo esc_url(sb_alpha_asset('img/logo2.png')); ?>" alt="СЛАВЯНБАНК" width="100%" />
      </a>
    </div>

    <nav aria-label="Основное меню">
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('home')); ?>" data-mega="about" aria-expanded="false">О банке</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>" aria-expanded="false">Новости</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>" data-mega="tarif" aria-expanded="false">Тарифы банка</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('legal-entities')); ?>" data-mega="buisnes" aria-expanded="false">Юридическим лицам</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('private-persons')); ?>" aria-expanded="false">Частным лицам</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>" data-mega="client-bank" aria-expanded="false">Клиент-банк</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('support')); ?>" data-mega="support" aria-expanded="false">Поддержка</a>
      <a class="navlink" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>" data-mega="contacts" aria-expanded="false">Контакты</a>
    </nav>

    <div class="spacer"></div>

    <button class="btn menu-btn" type="button" data-mega-btn aria-label="Открыть меню" aria-expanded="false">
      ☰ Меню
    </button>

    <a
      style="width: 180px; margin-left: 10px;"
      class="btn primary clientbank-cta"
      href="<?php echo esc_url(sb_alpha_url('client-bank-login')); ?>"
      title="Переход в систему дистанционного обслуживания"
      target="_blank"
      rel="noopener"
    >
      Клиент‑Банк →
    </a>
  </div>

  <div class="mega-backdrop" data-mega-backdrop aria-hidden="true"></div>

  <div class="mega card" data-mega-panel role="dialog" aria-label="Разделы сайта">
    <div class="header-grid">
      <div class="mega-mhead" data-mega-mobile-head>
        <button class="btn ghost mega-back" type="button" data-mega-mobile-back aria-label="Назад">←</button>
        <div class="mega-mobile-title" data-mega-mobile-title></div>
        <button class="btn ghost mega-close" type="button" data-mega-close aria-label="Закрыть меню">✕</button>
      </div>

      <div class="mega-mobile-root" data-mega-mobile-root></div>

      <div data-mega-links style="display: grid; gap: 6px">
        <div class="mega-group" data-mega-group="about">
          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Информация банка</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Реквизиты банка</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('governance')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Органы управления</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('reporting')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Отчетность</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('disclosur-regulatory')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Раскрытие информации для регулятивных целей</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('notaries')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Информация для нотариусов</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div class="mega-group" data-mega-group="tarif" hidden>
          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('tariffs_rub')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Тарифы по операциям в валюте РФ</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('tariffs_slavny')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Тарифы «Славный»</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('tariff_privetstvenny')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Тарифы «Приветственный»</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('tariff-depositny')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Тарифы «Депозитный»</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('tariffs-foreign-currency')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Тарифы по операциям в иностранной валюте</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div class="mega-group" data-mega-group="buisnes" hidden>
          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('business-deposits')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Депозиты для юридических лиц</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('business-lending')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Кредитование юридических лиц</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <details class="mega-item">
            <summary class="mega-link">
              <span class="mega-ic" aria-hidden="true">◈</span>
              <span class="mega-meta"><strong>Обслуживание счетов в валюте РФ</strong><small>↳</small></span>
              <span class="mega-arrow" aria-hidden="true">▾</span>
            </summary>
            <div class="mega-sub">
              <a class="mega-sublink" href="<?php echo esc_url(sb_alpha_url('cashless-payments')); ?>"><span aria-hidden="true">↳</span> Безналичные расчеты</a>
              <a class="mega-sublink" href="<?php echo esc_url(sb_alpha_url('cash-payments')); ?>"><span aria-hidden="true">↳</span> Наличные расчеты</a>
              <a class="mega-sublink" href="<?php echo esc_url(sb_alpha_url('payment-demands')); ?>"><span aria-hidden="true">↳</span> Платежные требования с акцептом</a>
            </div>
          </details>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('fx-account-service')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Обслуживание счетов в иностранной валюте</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Валютный контроль</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('aml-fatca')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>ПОД/ФТ/ФРОМУ/FATCA</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('crs')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>CRS — обмен с ФНС</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('client-bank-login')); ?>" target="_blank" rel="noopener">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>ВЭД</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div class="mega-group" data-mega-group="client-bank" hidden>
          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('instruction')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Инструкция по работе в системе</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('faq')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Часто задаваемые вопросы</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('ecp-regeneration')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Перегенерация ЭЦП</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div class="mega-group" data-mega-group="support" hidden>
          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('remote-support')); ?>" target="_blank" rel="noopener">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Удаленное управление</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('security')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Рекомендации по безопасности</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('appeal-123-fz')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Обращение по 123‑ФЗ</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('covid19')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>COVID‑19</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div class="mega-group" data-mega-group="contacts" hidden>
          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Написать в банк</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>

          <a class="mega-link" href="<?php echo esc_url(sb_alpha_url('vacancies')); ?>">
            <span class="mega-ic" aria-hidden="true">◈</span>
            <span class="mega-meta"><strong>Вакансии</strong></span>
            <span class="mega-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>
