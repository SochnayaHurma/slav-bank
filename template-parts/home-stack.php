<?php
$publications = [
    [
        'date' => '19.12.2025',
        'title' => 'Изменение тарифов банка по операциям в валюте РФ!',
        'url' => 'https://slavbank.ru/news/izmenenie-tarifov-banka-po-operacziyam-v-valyute-rf.html',
    ],
    [
        'date' => '12.12.2025',
        'title' => 'О режиме работы банка в праздничные дни',
        'url' => 'https://slavbank.ru/news/o-rezhime-raboty-banka-v-prazdnichnie-dni.html',
    ],
    [
        'date' => '19.11.2025',
        'title' => 'Изменение тарифов банка по операциям в иностранной валюте!',
        'url' => 'https://slavbank.ru/news/izmenenie-tarifov-banka-po-operacziyam-v-inostrannoj-valyute-s-011225.html',
    ],
    [
        'date' => '01.11.2025',
        'title' => 'С 01.11.2025 обновлены тарифные сетки по депозитам юридических лиц + специальное предложение по обслуживанию счетов!',
        'url' => 'https://slavbank.ru/poleznaya_informacia/tarif_depositny_s_01112025.html',
    ],
];

$sections = [
    ['label' => 'ИНФОРМАЦИЯ БАНКА', 'url' => sb_alpha_url('info-bank-page')],
    ['label' => 'ТАРИФЫ БАНКА', 'url' => sb_alpha_url('tariffs')],
    ['label' => 'ЮРИДИЧЕСКИМ ЛИЦАМ', 'url' => sb_alpha_url('legal-entities')],
    ['label' => 'ЧАСТНЫМ ЛИЦАМ', 'url' => sb_alpha_url('private-persons')],
    ['label' => 'ПОДДЕРЖКА', 'url' => sb_alpha_url('support')],
    ['label' => 'НАПИСАТЬ В БАНК', 'url' => sb_alpha_url('write-to-bank')],
    ['label' => 'ВАКАНСИИ', 'url' => sb_alpha_url('vacancies')],
];

$categories = [
    ['label' => 'АРХИВ', 'url' => 'https://slavbank.ru/category/arhiv'],
    ['label' => 'ДОКУМЕНТЫ ДЛЯ КЛИЕНТОВ', 'url' => 'https://slavbank.ru/category/dokumenty-dlya-klientov'],
    ['label' => 'НОВОСТИ', 'url' => 'https://slavbank.ru/category/news'],
    ['label' => 'ПОЛЕЗНАЯ ИНФОРМАЦИЯ', 'url' => 'https://slavbank.ru/category/poleznaya_informacia'],
];
?>
<div class="stack">
  <div class="bento-card reveal" data-reveal="right">
    <div class="kicker">Контакты ВЭД</div>
    <h3 style="margin:6px 0 10px;">Быстрая связь</h3>
    <div class="row" style="gap:10px; flex-wrap:wrap;">
      <a class="btn glass" href="tel:+7(495)198-99-51" style="border-color:rgba(0,0,0,.08);">
        📞 <span class="mono">+7(495)198-99-51</span>
      </a>
      <a class="btn glass" href="mailto:ved@slavbank.ru" style="border-color:rgba(0,0,0,.08);">✉️ ved@slavbank.ru</a>
    </div>
  </div>

  <div class="bento-card reveal is-in" data-reveal="right">
    <div class="kicker">Курсы обмена валют</div>
    <h3 style="margin:6px 0 10px;">Актуальная информация по кассе банка</h3>
    <div class="fine" style="margin-top:8px;">
      Для уточнения актуальных курсов обмена валют в кассе банка используйте телефон
      <a href="tel:78162665247" class="mono">(8162) 66‑52‑47</a> или электронную почту
      <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>.
    </div>
    <div class="fine" style="margin-top:8px;">АО НКБ «СЛАВЯНБАНК»</div>
  </div>

  <div class="bento-card reveal is-in" data-reveal="right">
    <div class="kicker">Полезная информация</div>
    <h3 style="margin:6px 0 10px;">Последние публикации</h3>
    <div class="posts">
      <?php foreach ($publications as $publication) : ?>
        <a class="post" href="<?php echo esc_url($publication['url']); ?>" target="_blank" rel="noopener">
          <span class="muted"><?php echo esc_html($publication['date']); ?></span>
          <strong><?php echo esc_html($publication['title']); ?></strong>
        </a>
      <?php endforeach; ?>
    </div>
  </div>

  <details class="reveal" data-reveal="right" open>
    <summary style="cursor:pointer; font-weight:600;">Разделы сайта</summary>
    <div class="drawer-links" style="margin-top:10px;">
      <?php foreach ($sections as $section) : ?>
        <a class="drawer-sub" href="<?php echo esc_url($section['url']); ?>"><?php echo esc_html($section['label']); ?></a>
      <?php endforeach; ?>
    </div>
  </details>

  <details class="reveal" data-reveal="right" open>
    <summary style="cursor:pointer; font-weight:600;">Рубрики</summary>
    <div class="drawer-links" style="margin-top:10px;">
      <?php foreach ($categories as $category) : ?>
        <a class="drawer-sub" href="<?php echo esc_url($category['url']); ?>" target="_blank" rel="noopener">
          <?php echo esc_html($category['label']); ?>
        </a>
      <?php endforeach; ?>
    </div>
  </details>
</div>
