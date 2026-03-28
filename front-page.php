<?php get_header(); ?>

<main id="main" class="container">
  
  

  <section
    class="block reveal"
    data-reveal="scale"
    style="padding-top: var(--s-4)"
  >
    <div class="hero-wrap card" style="padding: 0">
      <div
        class="slider"
        data-slider
        tabindex="0"
        aria-label="Слайдер сценариев банка ()"
      >
        <div class="slider-track" data-slider-track>
          <article class="slide" data-slide aria-hidden="true">
            <div class="slide-grid">
              <div>
                <div class="kicker">Валютный контроль</div>
                <h2>Сопровождение валютного контроля без лишней бюрократии.</h2>
                <p>
                  Разъяснения по пакету документов, статусам, срокам и
                  требованиям. Поддержка на каждом этапе.
                </p>
                <div
                  class="row"
                  style="margin-top: var(--s-4); flex-wrap: wrap"
                >
                  <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">Как это работает</a>
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('support')); ?>">Поддержка</a>
                  <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">Объявления</a>
                </div>
                
              </div>
              <div data-ill>
                <svg
                  class="hero-ill"
                  width="900"
                  height="560"
                  viewBox="0 0 900 560"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Абстрактная иллюстрация: валютный контроль и безопасность"
                >
                  <defs>
                    <linearGradient id="ctl_g1" x1="0" y1="0" x2="1" y2="1">
                      <stop
                        offset="0"
                        stop-color="#006780"
                        stop-opacity=".95"
                      />
                      <stop
                        offset="1"
                        stop-color="#9fd5d5"
                        stop-opacity=".85"
                      />
                    </linearGradient>
                    <linearGradient id="ctl_g2" x1="1" y1="0" x2="0" y2="1">
                      <stop
                        offset="0"
                        stop-color="#d0b8a3"
                        stop-opacity=".80"
                      />
                      <stop
                        offset="1"
                        stop-color="#918078"
                        stop-opacity=".55"
                      />
                    </linearGradient>
                    <filter
                      id="ctl_blur"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feGaussianBlur stdDeviation="12" />
                    </filter>
                  </defs>

                  <circle
                    cx="220"
                    cy="140"
                    r="120"
                    fill="url(#ctl_g2)"
                    opacity=".16"
                    filter="url(#ctl_blur)"
                  />
                  <circle
                    cx="740"
                    cy="420"
                    r="150"
                    fill="url(#ctl_g1)"
                    opacity=".14"
                    filter="url(#ctl_blur)"
                  />

                  <path
                    class="silk s1"
                    d="M50 420 C160 340, 230 520, 360 430 S 560 240, 690 320 S 820 490, 870 420"
                    fill="none"
                    stroke="#006780"
                    stroke-width="6"
                    stroke-linecap="round"
                    opacity=".52"
                  />
                  <path
                    class="silk s2"
                    d="M70 300 C200 230, 280 390, 420 320 S 620 160, 760 260 S 860 360, 890 300"
                    fill="none"
                    stroke="#9fd5d5"
                    stroke-width="5"
                    stroke-linecap="round"
                    opacity=".76"
                  />
                  <path
                    class="silk s3"
                    d="M100 210 C220 150, 300 260, 420 220 S 610 80, 760 160 S 860 240, 890 210"
                    fill="none"
                    stroke="#d0b8a3"
                    stroke-width="4"
                    stroke-linecap="round"
                    opacity=".66"
                  />

                  <g transform="translate(300 110)">
                    <path
                      d="M150 0 C240 40, 300 50, 300 120 C300 230, 210 320, 150 350 C90 320, 0 230, 0 120 C0 50, 60 40, 150 0 Z"
                      fill="#fff"
                      opacity=".86"
                      stroke="rgba(2,6,23,.12)"
                      stroke-width="2"
                    />
                    <path
                      d="M86 170 L132 216 L216 128"
                      fill="none"
                      stroke="#006780"
                      stroke-width="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      opacity=".72"
                    />
                    <path
                      d="M52 78 C96 100, 204 100, 248 78"
                      fill="none"
                      stroke="rgba(0,103,128,.18)"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                  </g>

                  <g transform="translate(610 90)">
                    <rect
                      x="0"
                      y="0"
                      rx="22"
                      ry="22"
                      width="250"
                      height="320"
                      fill="#fff"
                      opacity=".84"
                      stroke="rgba(2,6,23,.12)"
                      stroke-width="2"
                    />
                    <rect
                      x="30"
                      y="54"
                      rx="10"
                      ry="10"
                      width="190"
                      height="16"
                      fill="#006780"
                      opacity=".18"
                    />
                    <rect
                      x="30"
                      y="90"
                      rx="10"
                      ry="10"
                      width="160"
                      height="14"
                      fill="#006780"
                      opacity=".14"
                    />
                    <rect
                      x="30"
                      y="136"
                      rx="10"
                      ry="10"
                      width="190"
                      height="14"
                      fill="#006780"
                      opacity=".12"
                    />
                    <rect
                      x="30"
                      y="168"
                      rx="10"
                      ry="10"
                      width="168"
                      height="14"
                      fill="#006780"
                      opacity=".10"
                    />
                    <rect
                      x="30"
                      y="214"
                      rx="14"
                      ry="14"
                      width="190"
                      height="54"
                      fill="url(#ctl_g1)"
                      opacity=".18"
                      stroke="rgba(0,103,128,.20)"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </article>
          <article class="slide" data-slide aria-hidden="false">
            <div class="slide-grid">
              <div>
                <div class="kicker">ИП и юридическим лицам</div>
                <h2>
                  РКО и обслуживание бизнеса — быстро, понятно, с поддержкой.
                </h2>
                <p>
                  Счета, платежи, выписки, справки. Сценарная навигация и
                  быстрый доступ в Клиент‑Банк.
                </p>
                <div
                  class="row"
                  style="margin-top: var(--s-4); flex-wrap: wrap"
                >
                  <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('account-service')); ?>">Открыть счёт</a>
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>">Тарифы</a>
                  <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Консультация</a>
                </div>
                
              </div>
              <div data-ill>
                <svg
                  class="hero-ill"
                  width="900"
                  height="560"
                  viewBox="0 0 900 560"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Абстрактная иллюстрация: платежи и документы"
                >
                  <defs>
                    <linearGradient id="rko_g1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stop-color="#006780" stop-opacity=".9" />
                      <stop
                        offset="1"
                        stop-color="#9fd5d5"
                        stop-opacity=".85"
                      />
                    </linearGradient>
                    <linearGradient id="rko_g2" x1="1" y1="0" x2="0" y2="1">
                      <stop
                        offset="0"
                        stop-color="#d0b8a3"
                        stop-opacity=".85"
                      />
                      <stop
                        offset="1"
                        stop-color="#918078"
                        stop-opacity=".55"
                      />
                    </linearGradient>
                    <filter
                      id="rko_blur"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feGaussianBlur stdDeviation="12" />
                    </filter>
                  </defs>

                  <circle
                    cx="180"
                    cy="130"
                    r="110"
                    fill="url(#rko_g1)"
                    opacity=".18"
                    filter="url(#rko_blur)"
                  />
                  <circle
                    cx="740"
                    cy="420"
                    r="140"
                    fill="url(#rko_g2)"
                    opacity=".16"
                    filter="url(#rko_blur)"
                  />

                  <path
                    class="silk s1"
                    d="M40 330 C160 250, 250 420, 360 340 S 560 180, 690 240 S 820 380, 860 320"
                    fill="none"
                    stroke="#006780"
                    stroke-width="6"
                    stroke-linecap="round"
                    opacity=".55"
                  />
                  <path
                    class="silk s2"
                    d="M70 380 C200 300, 260 500, 420 420 S 620 220, 760 310 S 840 420, 880 360"
                    fill="none"
                    stroke="#9fd5d5"
                    stroke-width="5"
                    stroke-linecap="round"
                    opacity=".75"
                  />
                  <path
                    class="silk s3"
                    d="M90 260 C210 200, 300 340, 420 280 S 610 120, 760 200 S 860 310, 880 260"
                    fill="none"
                    stroke="#d0b8a3"
                    stroke-width="4"
                    stroke-linecap="round"
                    opacity=".65"
                  />

                  <g transform="translate(565 120)">
                    <rect
                      x="0"
                      y="0"
                      rx="22"
                      ry="22"
                      width="260"
                      height="320"
                      fill="#fff"
                      opacity=".85"
                      stroke="rgba(2,6,23,.12)"
                      stroke-width="2"
                    />
                    <rect
                      x="36"
                      y="62"
                      rx="10"
                      ry="10"
                      width="188"
                      height="16"
                      fill="#006780"
                      opacity=".22"
                    />
                    <rect
                      x="36"
                      y="98"
                      rx="10"
                      ry="10"
                      width="146"
                      height="14"
                      fill="#006780"
                      opacity=".16"
                    />
                    <rect
                      x="36"
                      y="146"
                      rx="10"
                      ry="10"
                      width="188"
                      height="14"
                      fill="#006780"
                      opacity=".14"
                    />
                    <rect
                      x="36"
                      y="176"
                      rx="10"
                      ry="10"
                      width="166"
                      height="14"
                      fill="#006780"
                      opacity=".12"
                    />
                    <g transform="translate(36 230)" opacity=".92">
                      <rect
                        x="0"
                        y="0"
                        rx="14"
                        ry="14"
                        width="188"
                        height="54"
                        fill="url(#rko_g1)"
                        opacity=".22"
                        stroke="rgba(0,103,128,.25)"
                      />
                      <path
                        d="M24 27 H124"
                        stroke="#006780"
                        stroke-width="4"
                        stroke-linecap="round"
                        opacity=".7"
                      />
                      <path
                        d="M124 18 L144 27 L124 36"
                        fill="none"
                        stroke="#006780"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        opacity=".7"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </article>

          <article class="slide" data-slide aria-hidden="true">
            <div class="slide-grid">
              <div>
                <div class="kicker">Внешнеэкономическая деятельность</div>
                <h2>Экспертиза контрактов и международные расчёты.</h2>
                <p>
                  Помогаем снизить риски сделки: условия, документы, расчёты,
                  сопровождение операций в валюте.
                </p>
                <div
                  class="row"
                  style="margin-top: var(--s-4); flex-wrap: wrap"
                >
                  <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">ВЭД‑сервисы</a>
                  <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('aml-fatca')); ?>">Документы</a>
                  <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Связаться</a>
                </div>
                
              </div>
              <div data-ill>
                <svg
                  class="hero-ill"
                  width="900"
                  height="560"
                  viewBox="0 0 900 560"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Абстрактная иллюстрация: ВЭД и международные расчёты"
                >
                  <defs>
                    <linearGradient id="ved_g1" x1="0" y1="0" x2="1" y2="1">
                      <stop
                        offset="0"
                        stop-color="#006780"
                        stop-opacity=".95"
                      />
                      <stop
                        offset="1"
                        stop-color="#0ea5b7"
                        stop-opacity=".85"
                      />
                    </linearGradient>
                    <linearGradient id="ved_g2" x1="1" y1="0" x2="0" y2="1">
                      <stop
                        offset="0"
                        stop-color="#9fd5d5"
                        stop-opacity=".85"
                      />
                      <stop
                        offset="1"
                        stop-color="#d0b8a3"
                        stop-opacity=".55"
                      />
                    </linearGradient>
                    <filter
                      id="ved_blur"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feGaussianBlur stdDeviation="12" />
                    </filter>
                  </defs>

                  <circle
                    cx="210"
                    cy="420"
                    r="150"
                    fill="url(#ved_g2)"
                    opacity=".16"
                    filter="url(#ved_blur)"
                  />
                  <circle
                    cx="720"
                    cy="160"
                    r="130"
                    fill="url(#ved_g1)"
                    opacity=".16"
                    filter="url(#ved_blur)"
                  />

                  <g transform="translate(150 120)">
                    <circle
                      cx="210"
                      cy="160"
                      r="150"
                      fill="#fff"
                      opacity=".82"
                      stroke="rgba(2,6,23,.10)"
                      stroke-width="2"
                    />
                    <circle
                      cx="210"
                      cy="160"
                      r="110"
                      fill="none"
                      stroke="rgba(0,103,128,.18)"
                      stroke-width="2"
                    />
                    <circle
                      cx="210"
                      cy="160"
                      r="70"
                      fill="none"
                      stroke="rgba(0,103,128,.14)"
                      stroke-width="2"
                    />
                    <path
                      class="silk s1"
                      d="M60 160 C120 80, 300 80, 360 160 C300 240, 120 240, 60 160 Z"
                      fill="none"
                      stroke="#006780"
                      stroke-width="6"
                      stroke-linecap="round"
                      opacity=".55"
                    />
                    <path
                      class="silk s2"
                      d="M90 110 C150 150, 270 150, 330 110"
                      fill="none"
                      stroke="#9fd5d5"
                      stroke-width="5"
                      stroke-linecap="round"
                      opacity=".8"
                    />
                    <path
                      class="silk s3"
                      d="M90 210 C150 170, 270 170, 330 210"
                      fill="none"
                      stroke="#d0b8a3"
                      stroke-width="4"
                      stroke-linecap="round"
                      opacity=".7"
                    />
                  </g>

                  <path
                    class="silk s1"
                    d="M430 160 C520 120, 620 120, 710 160"
                    fill="none"
                    stroke="#006780"
                    stroke-width="6"
                    stroke-linecap="round"
                    opacity=".50"
                  />
                  <path
                    class="silk s2"
                    d="M430 220 C520 180, 640 180, 760 240"
                    fill="none"
                    stroke="#9fd5d5"
                    stroke-width="5"
                    stroke-linecap="round"
                    opacity=".70"
                  />
                  <path
                    class="silk s3"
                    d="M430 290 C540 260, 650 260, 820 320"
                    fill="none"
                    stroke="#d0b8a3"
                    stroke-width="4"
                    stroke-linecap="round"
                    opacity=".62"
                  />

                  <g transform="translate(585 320)">
                    <rect
                      x="0"
                      y="0"
                      rx="22"
                      ry="22"
                      width="280"
                      height="170"
                      fill="#fff"
                      opacity=".86"
                      stroke="rgba(2,6,23,.12)"
                      stroke-width="2"
                    />
                    <path
                      d="M44 88 L76 118 L132 58"
                      fill="none"
                      stroke="#006780"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      opacity=".75"
                    />
                    <path
                      d="M170 60 H236"
                      stroke="rgba(0,103,128,.35)"
                      stroke-width="5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M170 96 H250"
                      stroke="rgba(0,103,128,.28)"
                      stroke-width="5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M170 132 H232"
                      stroke="rgba(0,103,128,.22)"
                      stroke-width="5"
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </article>
        </div>

        <div class="slider-ui">
          <div class="dots" aria-label="Навигация по слайдам">
            <button
              class="dot"
              data-dot
              aria-current="true"
              aria-label="Слайд 1"
            ></button>
            <button
              class="dot"
              data-dot
              aria-current="false"
              aria-label="Слайд 2"
            ></button>
            <button
              class="dot"
              data-dot
              aria-current="false"
              aria-label="Слайд 3"
            ></button>
          </div>

          <div class="progress" data-progress aria-hidden="true"><i></i></div>

          <div class="row" style="gap: 8px">
            <button
              class="btn icon outline"
              type="button"
              data-prev
              aria-label="Предыдущий слайд"
            >
              ←
            </button>
            <button
              class="btn icon outline"
              type="button"
              data-next
              aria-label="Следующий слайд"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="grid3">
    <a class="tile reveal" data-reveal="scale" href="<?php echo esc_url(sb_alpha_url('write-to-bank') . '#form'); ?>">
      <div class="badge">Кредитование</div>
      <h3>
        Отправить заявку (МСП)
        <span class="arrow">→</span>
      </h3>
      <p>Быстрый переход на форму заявки.</p>
    </a>

    <a class="tile reveal" data-reveal="scale" href="<?php echo esc_url(sb_alpha_url('client-bank-login')); ?>" target="_blank" rel="noopener">
      <div class="badge">Клиент‑Банк</div>
      <h3>Вход в систему <span class="arrow">→</span></h3>
      <p>Переход на страницу дистанционного обслуживания.</p>
    </a>
    
    <div class="bento-card" id="support" style="padding: 0; position: relative">
      <div class="support-card">
        <div class="support-ico" aria-hidden="true">☎</div>
        <div>
          <div style="font-weight: 600">Свяжитесь с банком</div>
          <div class="row" style="gap: 10px; flex-wrap: wrap; margin-top: 10px">
            <a
              class="btn glass pill"
              style="color: var(--c-primary-700)"
              href="tel:+74951989951"
              >Позвонить</a
            >
            <a
              class="btn glass pill"
              style="color: var(--c-primary-700)"
              href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form"
              >Написать</a
            >
          </div>
          <div class="muted" style="margin-top: 10px">
            <a href="mailto:ved@slavbank.ru">ved@slavbank.ru</a>
          </div>
          <div class="muted" style="margin-top: 10px">
            <a href="tel:+74951989951">+7(495)198-99-51</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="block dashv2" id="services">
    <div class="bento">
      <div class="bento-card bento-hero reveal" data-reveal="scale">
        <div class="about-grid">
          <div>
            <div class="kicker">Основная специализация</div>
            <h3 style="margin: 6px 0 10px">
              Основная специализация АО НКБ «СЛАВЯНБАНК» – комплексное
              банковское обслуживание индивидуальных предпринимателей и
              юридических лиц, в том числе внешнеэкономическая деятельность:
              экспертиза контрактов, международные расчёты и валютный контроль .
            </h3>

            <details class="reveal" data-reveal="left" style="margin-top: 14px">
              <summary style="cursor: pointer; font-weight: 600">
                АО НКБ «СЛАВЯНБАНК» И РЕЛИГИОЗНЫЕ УЧРЕЖДЕНИЯ
              </summary>
              <div style="margin-top: 6px">
                <p class="muted" style="margin: 10px 0 0; font-weight: 300">
                  Банк вот уже несколько лет реализует проект по приему
                  безналичных пожертвований религиозными учреждениями с помощью
                  специальных банковских терминалов и персонализированных
                  QR-кодов.
                </p>
                <p class="muted" style="margin: 10px 0 0; font-weight: 300">
                  На данный момент Банк сотрудничает с отдельными епархиями и
                  приходами Русской Православной Церкви, предоставляя комплекс
                  банковских услуг по приему пожертвований прихожан в
                  безналичной форме и расчетно-кассовому обслуживанию приходов.
                </p>
                <p class="muted" style="margin: 10px 0 0; font-weight: 300">
                  При этом, целью проекта является не только упрощение
                  взаимодействия с прихожанами в условиях все большей
                  цифровизации финансовых отношений, но и создание финансовых
                  решений, максимально учитывающих конфессиональные особенности.
                </p>
                <p class="muted" style="margin: 10px 0 0; font-weight: 300">
                  АО НКБ «СЛАВЯНБАНК» предлагает бесплатную установку
                  терминалов, стабильно высокие ставки на остаток денежных
                  средств на расчетном счете, а также на срочных депозитах.
                </p>
              </div>
            </details>
          </div>

          <div class="about-media">
            <div class="media-card">
              <img
                src="<?php echo esc_url(sb_alpha_asset('img/main_about.png')); ?>"
                alt="Иллюстрация: международные расчёты и ВЭД"
                loading="lazy"
              />
              <div class="media-overlay">
                
                <div
                  style="
                    font-weight: 600;
                    color: white;
                    font-size: 16px;
                    text-shadow: black 1px 1px 1px;
                  "
                >
                  Экспертиза контрактов · валютный контроль
                </div>
              </div>
            </div>

            
          </div>
        </div>
        <div class="after-grid">
          <div class="" style="line-height: 1.7">
            <strong style="font-weight: 640"
              >АКЦИОНЕРНОЕ ОБЩЕСТВО НОВГОРОДСКИЙ КОММЕРЧЕСКИЙ БАНК
              «СЛАВЯНБАНК»</strong
            >
            <ul class="facts">
              <li>
                Образован в 1989 году как первый самостоятельный региональный
                банк.
              </li>
              <li>
                Основная задача банка —  развитие экономики Новгородской
                области. В настоящее время — это стабильно работающий
                региональный коммерческий банк. Основными акционерами банка
                являются физические лица.
              </li>
              <li>
                За годы деятельности у банка сложились устойчивые
                корреспондентские отношения со многими банками.
              </li>
              <li>
                Перевод платежей в любой регион страны осуществляется в течение
                одного дня.
              </li>
            </ul>
          </div>

          <div
            class="row"
            style="
              gap: 10px;
              flex-wrap: wrap;
              margin-top: 12px;
              flex-direction: column;
              align-items: start;
            "
          >
            <span class="pill mob-nowrap"
              ><span class="badge">✓</span
              ><span class="muted">Надежность, проверенная временем</span></span
            ><span class="pill mob-nowrap"
              ><span class="badge">✓</span
              ><span class="muted">Выгодные условия сотрудничества</span></span
            ><span class="pill mob-nowrap"
              ><span class="badge">✓</span
              ><span class="muted">Качественное обслуживание</span></span
            ><span class="pill mob-nowrap"
              ><span class="badge">✓</span
              ><span class="muted"
                >Индивидуальный подход к каждому клиенту</span
              ></span
            >
          </div>

          <div style="margin-top: 14px">
            <div class="kicker">Банк оказывает услуги</div>
            <div class="svc-grid">
              <a
                class="svc-chip"
                href="<?php echo esc_url(sb_alpha_url('account-service')); ?>"
                target="_blank"
                rel="noopener"
                >Расчётно-кассовое обслуживание клиентов
                <span aria-hidden="true">→</span></a
              >
              <a
                class="svc-chip"
                href="<?php echo esc_url(sb_alpha_url('business-lending')); ?>"
                target="_blank"
                rel="noopener"
                >Предоставление краткосрочных и инвестиционных кредитов
                <span aria-hidden="true">→</span></a
              >
              <a
                class="svc-chip"
                href="<?php echo esc_url(sb_alpha_url('fx-account-service')); ?>"
                target="_blank"
                rel="noopener"
                >Операции на внутреннем и международном валютном рынке,
                международные расчёты <span aria-hidden="true">→</span></a
              >
              <span class="svc-chip ghost"
                >Ведение паспортов сделок, конверсионные безналичные
                операции,</span
              >
              <span class="svc-chip ghost"
                >Финансовые и банковские гарантии,</span
              >
              <span class="svc-chip ghost"
                >Подтверждение о принятии средств в депозит, простые векселя,
                гарантии по контрактам, аккредитивы,</span
              >
              <span class="svc-chip ghost">Открытие кредитных линий,</span>
              <span class="svc-chip ghost"
                >Принятие  активов на ответственное банковское  хранение,
                размещение активов и др.</span
              >
            </div>
          </div>
        </div>
      </div>
      <?php get_template_part('template-parts/home', 'stack'); ?>
    </div>
  </section>

  
  

  
  

  
  

  
  

  
  

  
  
</main>

<?php get_footer(); ?>
