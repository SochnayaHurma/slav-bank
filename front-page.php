<?php
$hero_image = esc_url(sb_alpha_asset('img/background/05e00c50-ede1-47ee-aaab-75ad056b498a.png'));
$hero_side_image = esc_url(sb_alpha_asset('png/8_.png'));
$route_rko_image = esc_url(sb_alpha_asset('img/home/route-rko.svg'));
$route_ved_image = esc_url(sb_alpha_asset('img/home/route-ved.svg'));
$route_control_image = esc_url(sb_alpha_asset('img/home/route-control.svg'));
get_header();
?>
<style>
  
</style>

<main id="main" class="v3home">
  <section class="block">
    <div class="container">
      <div class="v3-hero reveal" data-reveal="scale">
        <div class="v3-hero-grid">
          <div class="v3-copy glass">
            <div class="v3-kicker">АО НКБ «СЛАВЯНБАНК»</div>
            <h1 class="v3-title">Расчёты, ВЭД и рабочие сервисы банка.</h1>
            <p class="v3-lead">Обслуживание счетов, валютный контроль, Клиент‑Банк и тарифы.</p>
            <div class="v3-actions">
              <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('account-service')); ?>">Обслуживание счетов</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">Валютный контроль</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>">Клиент‑Банк</a>
            </div>
            <div class="v3-chip-row">
              <a class="v3-chip" href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>">Тарифы</a>
              <a class="v3-chip" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
              <a class="v3-chip" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">Новости</a>
              <a class="v3-chip" href="<?php echo esc_url(sb_alpha_url('client-bank-login')); ?>" target="_blank" rel="noopener">ВЭД</a>
            </div>
          </div>
          <div class="v3-side">
            <div class="v3-hero-ill glass reveal" data-reveal="right">
              <img src="<?php echo $hero_side_image; ?>" alt="Иллюстрация: ВЭД и международные расчёты" />
            </div>
            <div class="v3-side-grid">
              <div class="v3-mini glass reveal" data-reveal="scale"><strong>РКО</strong><span>Открытие и обслуживание счетов для бизнеса.</span></div>
              <div class="v3-mini glass reveal" data-reveal="scale"><strong>ВЭД</strong><span>Экспертиза контрактов и международные расчёты.</span></div>
              <div class="v3-mini glass reveal" data-reveal="scale"><strong>ДБО</strong><span>Переход в Клиент‑Банк и рабочие инструкции.</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block">
    <div class="container">
      <div class="v3-routes">
        <a class="v3-route reveal" data-reveal="scale" href="<?php echo esc_url(sb_alpha_url('account-service')); ?>">
          <div class="v3-route-media"><img src="<?php echo $route_rko_image; ?>" alt="Иллюстрация: РКО" /></div>
          <div class="v3-route-copy">
            <span class="v3-badge">РКО</span>
            <h3>Обслуживание счетов в валюте РФ</h3>
            <p>Более прикладной сценарий: счёт, расчёты, базовые операции и вход в рабочие разделы бизнеса.</p>
            <span class="v3-more">Открыть раздел →</span>
          </div>
        </a>
        <a class="v3-route reveal" data-reveal="scale" href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">
          <div class="v3-route-media"><img src="<?php echo $route_ved_image; ?>" alt="Иллюстрация: ВЭД" /></div>
          <div class="v3-route-copy">
            <span class="v3-badge">ВЭД</span>
            <h3>Экспертиза контрактов и международные расчёты</h3>
            <p>Сильное направление банка выводится в отдельный большой маршрут, а не теряется внутри общей главной.</p>
            <span class="v3-more">Открыть раздел →</span>
          </div>
        </a>
        <a class="v3-route reveal" data-reveal="scale" href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">
          <div class="v3-route-media"><img src="<?php echo $route_control_image; ?>" alt="Иллюстрация: валютный контроль" /></div>
          <div class="v3-route-copy">
            <span class="v3-badge">Контроль</span>
            <h3>Валютный контроль и документы</h3>
            <p>Подчёркиваем понятный рабочий сценарий с документами и сопровождением операций.</p>
            <span class="v3-more">Открыть раздел →</span>
          </div>
        </a>
      </div>
    </div>
  </section>

  <section class="block">
    <div class="container">
      <div class="v3-profile">
        <div class="v3-photo-card reveal" data-reveal="left">
          <div class="v3-photo-caption glass">
            <div class="v3-kicker">Основная специализация</div>
            <div style="font-weight:600; font-size:20px; line-height:1.2; margin-top:10px; color:#fff;">
              Комплексное банковское обслуживание индивидуальных предпринимателей и юридических лиц,
              в том числе внешнеэкономическая деятельность.
            </div>
          </div>
        </div>
        <div class="v3-text-card reveal" data-reveal="right">
          <span class="v3-badge">О банке</span>
          <ul class="v3-facts">
            <li>Образован в 1989 году как первый самостоятельный региональный банк.</li>
            <li>Основная задача банка — развитие экономики Новгородской области.</li>
            <li>За годы деятельности у банка сложились устойчивые корреспондентские отношения со многими банками.</li>
            <li>Перевод платежей в любой регион страны осуществляется в течение одного дня.</li>
          </ul>
          <div class="v3-pill-row">
            <span class="v3-pill">Надежность, проверенная временем</span>
            <span class="v3-pill">Выгодные условия сотрудничества</span>
            <span class="v3-pill">Качественное обслуживание</span>
            <span class="v3-pill">Индивидуальный подход</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block">
    <div class="container">
      <div class="v3-section-head reveal" data-reveal="right">
        <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">Все новости</a>
      </div>
      <div class="v3-news">
        <a class="v3-news-card reveal" data-reveal="scale" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">
          <div class="badge">Новости</div>
          <h3>Официальные новости и объявления банка</h3>
        </a>
        <a class="v3-news-card reveal" data-reveal="scale" href="<?php echo esc_url(sb_alpha_url('support')); ?>">
          <div class="badge">Поддержка</div>
          <h3>FAQ, инструкции и помощь по Клиент‑Банку</h3>
        </a>
        <a class="v3-news-card reveal" data-reveal="scale" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">
          <div class="badge">Контакты</div>
          <h3>Контакты и каналы связи</h3>
        </a>
      </div>
    </div>
  </section>
</main>

<script>
(() => {
  const root = document.querySelector('[data-v3-mobile-nav]');
  if (!root) return;
  const btn = root.querySelector('.v3-menu-btn');
  const panel = root.querySelector('.v3-mobile-menu');
  const backdrop = root.querySelector('.v3-mobile-backdrop');
  const closeBtn = root.querySelector('.v3-mobile-close');
  if (!btn || !panel || !backdrop || !closeBtn) return;
  const isMobile = () => window.matchMedia('(max-width: 760px)').matches;
  const closeMenu = () => {
    root.classList.remove('v3-menu-open');
    document.body.classList.remove('v3-lock');
    btn.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
  };
  const openMenu = () => {
    if (!isMobile()) return;
    root.classList.add('v3-menu-open');
    document.body.classList.add('v3-lock');
    btn.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');
    window.requestAnimationFrame(() => closeBtn.focus());
  };
  btn.addEventListener('click', () => root.classList.contains('v3-menu-open') ? closeMenu() : openMenu());
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);
  panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (!isMobile()) closeMenu(); });
})();
</script>

<?php get_footer(); ?>
