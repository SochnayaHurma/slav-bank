<footer class="footI">
  <div class="container">
    <div class="sitemap">
      <div class="sitemapCol">
        <div class="kicker"><?php echo esc_html(sb_alpha_menu_title('sb-alpha-footer-about', 'О банке')); ?></div>
        <?php
        sb_alpha_render_menu_links('sb-alpha-footer-about', [
          ['label' => 'Информация банка', 'url' => sb_alpha_url('info-bank-page')],
          ['label' => 'Реквизиты', 'url' => sb_alpha_url('requisites_bank')],
          ['label' => 'Органы управления', 'url' => sb_alpha_url('governance')],
          ['label' => 'Новости', 'url' => sb_alpha_url('novosti')],
        ]);
        ?>
      </div>
      <div class="sitemapCol">
        <div class="kicker"><?php echo esc_html(sb_alpha_menu_title('sb-alpha-footer-business', 'Бизнес')); ?></div>
        <?php
        sb_alpha_render_menu_links('sb-alpha-footer-business', [
          ['label' => 'Юридическим лицам', 'url' => sb_alpha_url('legal-entities')],
          ['label' => 'Валютный контроль', 'url' => sb_alpha_url('currency-control')],
          ['label' => 'Депозиты', 'url' => sb_alpha_url('business-deposits')],
          ['label' => 'Кредитование', 'url' => sb_alpha_url('business-lending')],
        ]);
        ?>
      </div>
      <div class="sitemapCol">
        <div class="kicker"><?php echo esc_html(sb_alpha_menu_title('sb-alpha-footer-tariffs', 'Тарифы')); ?></div>
        <?php
        sb_alpha_render_menu_links('sb-alpha-footer-tariffs', [
          ['label' => 'Тарифы банка', 'url' => sb_alpha_url('tariffs')],
          ['label' => 'Операции в валюте РФ', 'url' => sb_alpha_url('tariffs_rub')],
          ['label' => 'Иностранная валюта', 'url' => sb_alpha_url('tariffs-foreign-currency')],
          ['label' => 'Тариф «Депозитный»', 'url' => sb_alpha_url('tariff-depositny')],
        ]);
        ?>
      </div>
      <div class="sitemapCol">
        <div class="kicker"><?php echo esc_html(sb_alpha_menu_title('sb-alpha-footer-support', 'Поддержка')); ?></div>
        <?php
        sb_alpha_render_menu_links('sb-alpha-footer-support', [
          ['label' => 'Поддержка', 'url' => sb_alpha_url('support')],
          ['label' => 'Безопасность', 'url' => sb_alpha_url('security')],
          ['label' => 'FAQ', 'url' => sb_alpha_url('faq')],
          ['label' => 'Контакты', 'url' => sb_alpha_url('contacts')],
        ]);
        ?>
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
