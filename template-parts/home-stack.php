<?php
$currency_widget = sb_alpha_get_home_currency_widget_data();
$visible_rates = array_values(array_filter(
    (array) ($currency_widget['rates'] ?? []),
    static function ($rate): bool {
        return is_array($rate) && (!array_key_exists('visible', $rate) || !empty($rate['visible']));
    }
));
$publications = sb_alpha_get_recent_publications(4);

$sections = [
    ['label' => 'ИНФОРМАЦИЯ БАНКА', 'url' => sb_alpha_url('info-bank-page')],
    ['label' => 'НОВОСТИ', 'url' => sb_alpha_url('novosti')],
    ['label' => 'ТАРИФЫ БАНКА', 'url' => sb_alpha_url('tariffs')],
    ['label' => 'ЮРИДИЧЕСКИМ ЛИЦАМ', 'url' => sb_alpha_url('legal-entities')],
    ['label' => 'ПОДДЕРЖКА', 'url' => sb_alpha_url('support')],
    ['label' => 'НАПИСАТЬ В БАНК', 'url' => sb_alpha_url('write-to-bank')],
    ['label' => 'КОНТАКТЫ', 'url' => sb_alpha_url('contacts')],
];

$categories = array_merge(
    sb_alpha_get_news_category_links(),
    [
        ['label' => 'АРХИВ', 'url' => 'https://slavbank.ru/category/arhiv', 'external' => true],
        ['label' => 'ДОКУМЕНТЫ ДЛЯ КЛИЕНТОВ', 'url' => 'https://slavbank.ru/category/dokumenty-dlya-klientov', 'external' => true],
    ]
);
?>
<div class="stack">


<div class="bento-card reveal is-in">
  <h3 style="margin:6px 0 10px;">
    <?php echo esc_html($currency_widget['title']); ?>
  </h3>

  <div class="kicker">
    <?php echo esc_html($currency_widget['date_line']); ?>
  </div>

  <div class="fine" style="margin-top:8px;">
    <b><?php echo esc_html($currency_widget['legend_title']); ?></b>
    <?php echo esc_html($currency_widget['buy_label']); ?> /
    <?php echo esc_html($currency_widget['sell_label']); ?>
  </div>

  <div class="rates">
    <?php if (!empty($visible_rates)) : ?>
      <?php foreach ($visible_rates as $rate) : ?>
        <div class="rate-row">
          <span class="mono"><?php echo esc_html((string) ($rate['code'] ?? '')); ?></span>
          <span class="muted"><?php echo esc_html($currency_widget['buy_label']); ?></span>
          <span class="mono"><?php echo esc_html((string) ($rate['buy'] ?? '')); ?></span>
          <span class="muted"><?php echo esc_html($currency_widget['sell_label']); ?></span>
          <span class="mono"><?php echo esc_html((string) ($rate['sell'] ?? '')); ?></span>
        </div>
      <?php endforeach; ?>
    <?php else : ?>
      <div class="fine muted"><?php echo esc_html($currency_widget['empty_text']); ?></div>
    <?php endif; ?>
  </div>

  <div class="fine" style="margin-top:8px;">
    <?php echo esc_html($currency_widget['footer_text']); ?>
  </div>
</div>

  <div class="bento-card reveal is-in" >
    <div class="kicker">Полезная информация</div>
    <h3 style="margin:6px 0 10px;">Последние публикации</h3>

    <?php if (!empty($publications)) : ?>
      <div class="posts">
        <?php foreach ($publications as $publication) : ?>
          <a class="post" href="<?php echo esc_url((string) $publication['url']); ?>">
            <span class="muted"><?php echo esc_html((string) $publication['date']); ?></span>
            <strong><?php echo esc_html((string) $publication['title']); ?></strong>
          </a>
        <?php endforeach; ?>
      </div>
    <?php else : ?>
      <div class="muted-card">
        Локальные новости ещё не опубликованы. Откройте раздел
        <a href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">«Новости»</a>,
        чтобы проверить архив публикаций.
      </div>
    <?php endif; ?>
  </div>

  <details id="detCategories" class="reveal"  open>
    <summary style="cursor:pointer; font-weight:600;">Разделы сайта</summary>
    <div class="drawer-links" style="margin-top:10px;">
      <?php foreach ($sections as $section) : ?>
        <a class="drawer-sub" href="<?php echo esc_url($section['url']); ?>"><?php echo esc_html($section['label']); ?></a>
      <?php endforeach; ?>
    </div>
  </details>

  <details id="detNews" class="reveal"  open>
    <summary style="cursor:pointer; font-weight:600;">Рубрики</summary>
    <div class="drawer-links" style="margin-top:10px;">
      <?php foreach ($categories as $category) : ?>
        <a
          class="drawer-sub"
          href="<?php echo esc_url((string) $category['url']); ?>"
          <?php echo !empty($category['external']) ? 'target="_blank" rel="noopener"' : ''; ?>
        >
          <?php echo esc_html((string) $category['label']); ?>
        </a>
      <?php endforeach; ?>
    </div>
  </details>
</div>
<script>
    function setDetails() {
      ["detNews", "detCategories"].forEach(element => {
        const details = document.getElementById(element);
        if (window.innerWidth >= 769) {
            details.setAttribute('open', 'open'); 
        } else {
            details.removeAttribute('open'); 
        }
      });

    }

    window.onload = setDetails; 
    window.onresize = setDetails; 
</script>