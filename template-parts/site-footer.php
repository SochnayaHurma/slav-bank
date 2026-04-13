<footer class="footI">
  <div class="container">
    <div class="sitemap">
      <div class="sitemapCol">
        <div class="kicker">О банке</div>
        <a href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>">Информация банка</a>
        <a href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>">Реквизиты</a>
        <a href="<?php echo esc_url(sb_alpha_url('governance')); ?>">Органы управления</a>
        <a href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">Новости</a>
      </div>
      <div class="sitemapCol">
        <div class="kicker">Бизнес</div>
        <a href="<?php echo esc_url(sb_alpha_url('legal-entities')); ?>">Юридическим лицам</a>
        <a href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>">Валютный контроль</a>
        <a href="<?php echo esc_url(sb_alpha_url('business-deposits')); ?>">Депозиты</a>
        <a href="<?php echo esc_url(sb_alpha_url('business-lending')); ?>">Кредитование</a>
      </div>
      <div class="sitemapCol">
        <div class="kicker">Тарифы</div>
        <a href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>">Тарифы банка</a>
        <a href="<?php echo esc_url(sb_alpha_url('tariffs_rub')); ?>">Операции в валюте РФ</a>
        <a href="<?php echo esc_url(sb_alpha_url('tariffs-foreign-currency')); ?>">Иностранная валюта</a>
        <a href="<?php echo esc_url(sb_alpha_url('tariff-depositny')); ?>">Тариф «Депозитный»</a>
      </div>
      <div class="sitemapCol">
        <div class="kicker">Поддержка</div>
        <a href="<?php echo esc_url(sb_alpha_url('support')); ?>">Поддержка</a>
        <a href="<?php echo esc_url(sb_alpha_url('security')); ?>">Безопасность</a>
        <a href="<?php echo esc_url(sb_alpha_url('faq')); ?>">FAQ</a>
        <a href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
      </div>
    </div>
  </div>
</footer>

<footer class="footC">
  <div class="container">
    <div class="row" style="justify-content:space-between; align-items:center;">
      <div class="row" style="gap:12px;">
        <div aria-hidden="true">
          <span style="color:#fff; font-weight:900;">
            <img width="44px" src="<?php echo esc_url(sb_alpha_asset('img/icon192.png')); ?>" alt="" />
          </span>
        </div>
        <div>
          <div style="font-weight:700; color:#fff;">АО НКБ «СЛАВЯНБАНК»</div>
          <div style="color:rgba(255,255,255,.75); font-weight:300; margin-top:4px;">
            ВЭД <span class="mob-hide">·</span> валютный контроль <span class="mob-hide">·</span> расчёты
          </div>
        </div>
      </div>
      <div class="row mob-v">
        <a
          class="btn outline pill"
          style="border-color: rgba(255,255,255,.22); color:#fff;"
          href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>"
        >
          Клиент‑банк
        </a>
        <a
          class="btn glass pill"
          style="background: rgba(255,255,255,.16); color:#fff;"
          href="<?php echo esc_url(sb_alpha_url('write-to-bank') . '#form'); ?>"
        >
          Связаться
        </a>
      </div>
    </div>
    <div class="sep" style="margin:16px 0; background: rgba(255,255,255,.18);"></div>
    <div class="row mob-font-13 mob-v" style="justify-content:space-between;">
      <div style="color:rgba(255,255,255,.75); font-weight:300;">
        <span>г. Великий Новгород,</span> <span>ул. Черемнова‑Конюхова,</span> <span>дом 12</span>
      </div>
      <div class="row">
        <a style="color:rgba(255,255,255,.78);" href="tel:78162665247">(8162) 66‑52‑47</a>
        <span class="mob-hide" style="color:rgba(255,255,255,.55);">·</span>
        <a style="color:rgba(255,255,255,.78);" href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>
      </div>
    </div>
  </div>
</footer>
