<?php
/**
 * Plugin Name: Slavyanbank Requisites Filled Migration
 * Description: Filled migration block and pattern for the Requisites page with hero section.
 * Version: 1.0.0
 * Author: OpenAI
 */

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('slav_reqmig_url')) {
    function slav_reqmig_url(string $key, string $fallback = '/'): string
    {
        if (function_exists('sb_alpha_url')) {
            $url = sb_alpha_url($key);
            if (is_string($url) && $url !== '') {
                return $url;
            }
        }

        return home_url($fallback);
    }
}

if (!function_exists('slav_reqmig_get_rows')) {
    function slav_reqmig_get_rows(): array
    {
        if (function_exists('sb_alpha_get_bank_requisites_rows')) {
            $rows = sb_alpha_get_bank_requisites_rows();
            if (is_array($rows) && !empty($rows)) {
                return $rows;
            }
        }

        return [
            [
                'label' => 'Полное официальное наименование банка, регистрационный номер и дата государственной регистрации в Банке России, номер и дата лицензии',
                'value' => 'Коммерческий банк «Славянбанк» образован 15 ноября 1989 года. В результате преобразования 25 декабря 1998 года перерегистрирован Центральным банком Российской Федерации (Банком России) в ЗАКРЫТОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО «НОВГОРОДСКИЙ КОММЕРЧЕСКИЙ БАНК «СЛАВЯНБАНК» за № 804. В соответствии с решением общего собрания акционеров Банка от 18 января 2018 года полное фирменное и сокращенное фирменное наименования Банка приведены в соответствие с законодательством Российской Федерации и изменены на АКЦИОНЕРНОЕ ОБЩЕСТВО НОВГОРОДСКИЙ КОММЕРЧЕСКИЙ БАНК «СЛАВЯНБАНК», АО НКБ «СЛАВЯНБАНК» (перерегистрирован Центральным банком Российской Федерации (Банком России) 21 февраля 2018г). Центральным Банком Российской Федерации 6 сентября 2018 года выдана Базовая лицензия на осуществление банковских операций со средствами в рублях и иностранной валюте (без права привлечения во вклады денежных средств физических лиц) и на привлечение во вклады и размещение драгоценных металлов за № 804, действующая в настоящее время.',
            ],
            [
                'label' => 'Сокращенное наименование',
                'value' => 'АО НКБ «СЛАВЯНБАНК»',
            ],
            [
                'label' => 'Полное и сокращенное наименования на английском языке',
                'value' => 'SB CBN «SLAVYANBANK»',
            ],
            [
                'label' => 'Регистрационный номер и дата внесения записи в ЕГРЮЛ',
                'value' => '№ 1025300000175, 03.09.2002',
            ],
            [
                'label' => 'Идентификационный номер налогоплательщика (ИНН)',
                'value' => '5321068480',
            ],
            [
                'label' => 'Наименование и банковский идентификационный код территориального учреждения Банка России, осуществляющего надзор за деятельностью',
                'value' => 'Северо-Западное главное управление Центрального банка Российской Федерации, БИК 044030001',
            ],
            [
                'label' => 'Платежные реквизиты',
                'value' => 'кор. счет 30101810445374030948, БИК 044030948',
            ],
            [
                'label' => 'Код LEI',
                'value' => '253400S76FWMXGUJC185',
            ],
            [
                'label' => 'Юридический и фактический адреса',
                'value' => '173004, Российская Федерация, г. Великий Новгород, ул. Черемнова-Конюхова, дом 12',
            ],
            [
                'label' => 'Номера телефонов',
                'value' => '(8162) 66-52-47',
                'url' => 'tel:+78162665247',
            ],
            [
                'label' => 'Адрес в Интернете',
                'value' => 'https://slavbank.ru',
                'url' => 'https://slavbank.ru',
                'external' => true,
            ],
            [
                'label' => 'Адрес электронной почты',
                'value' => 'nkb@slavbank.ru',
                'url' => 'mailto:nkb@slavbank.ru',
            ],
            [
                'label' => 'Режим работы (с клиентами)',
                'value' => 'пн-чт с 9.00 — 17.00 (касса до 16.30), пт с 9.00 до 16.00 (касса до 15.30), без обеда, выходные — суббота, воскресенье',
            ],
            [
                'label' => 'Адрес представительства в Москве',
                'value' => '109044, Российская Федерация, г. Москва, вн. тер. г. муниципальный округ Таганский, ул. Динамовская, дом 1А',
            ],
            [
                'label' => 'Дата открытия представительства в Москве',
                'value' => '09.12.2025',
            ],
        ];
    }
}

if (!function_exists('slav_reqmig_render_copy_button')) {
    function slav_reqmig_render_copy_button(string $value): string
    {
        if (trim($value) === '') {
            return '';
        }

        return sprintf(
            '<button class="copy mini" type="button" data-copy="%s">Копировать</button>',
            esc_attr($value)
        );
    }
}

if (!function_exists('slav_reqmig_render_home_stack')) {
    function slav_reqmig_render_home_stack(): string
    {
        if (!function_exists('get_template_part')) {
            return '';
        }

        $template = locate_template('template-parts/home-stack.php', false, false);
        if (!$template) {
            return '';
        }

        ob_start();
        get_template_part('template-parts/home', 'stack');
        return (string) ob_get_clean();
    }
}

if (!function_exists('slav_reqmig_render_requisites_page')) {
    function slav_reqmig_render_requisites_page(): string
    {
        $rows = slav_reqmig_get_rows();
        $home_stack = slav_reqmig_render_home_stack();

        ob_start();
        ?>
<section class="block">
  <div class="container">
    <div class="hero-wrap" style="padding: var(--s-5)">
      <div class="row" style="align-items: flex-start; gap: var(--s-4); flex-wrap: wrap">
        <div style="min-width: 280px; flex: 1 1 520px">
          <div class="kicker">О банке</div>
          <h1 style="margin: 8px 0 10px">Реквизиты банка</h1>

          <div class="row" style="margin-top: var(--s-4); flex-wrap: wrap">
            <a class="btn primary" href="#key">Информация о представителях</a>
            <a class="btn outline" href="#full">Перейти к реквизитам</a>
          </div>
        </div>

        <div class="pill" style="align-self: flex-start">
          <span class="badge">Контакты</span>
          <a href="tel:8162665247" class="mono">(8162) 66‑52‑47</a>
          <span class="muted">·</span>
          <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="block dashv2" id="key">
  <div class="container">
    <div class="bento">
      <div class="bento-card" style="padding: var(--s-4); position: relative">
        <h3 class="kicker">Аудиторская организация:</h3>

        <figure class="wp-block-table figure-body">
          <table>
            <tbody>
              <tr>
                <td class="has-text-align-left" data-align="left">
                  <strong>Сведения об аудиторской организации:<br></strong>
                  Общество с ограниченной ответственностью «Балтийский аудит» (ООО «Балтийский аудит»).<br><br>
                  Аудитор: ООО «Балтийский аудит»<br>
                  Адрес местонахождения:&nbsp; г. Санкт-Петербург, Московский пр., д. 127, кв. 30<br>
                  Почтовый адрес: 196084, г. Санкт-Петербург, Московский пр., д. 127, кв. 30<br><br>
                  E-mail: <a href="mailto:mail@baudit.spb.ru">mail@baudit.spb.ru</a><br>
                  ОГРН 1147847390250<br>
                  р/с 40702810627060018754 в Филиале «Центральный» Банка ВТБ (ПАО) в г. Москва<br>
                  к/с 30101810145250000411 БИК 044525411<br>
                  <br>
                  <strong>Членство в саморегулируемой организации аудиторов<br></strong>
                  ООО «Балтийский аудит» является членом Саморегулируемой организации аудиторов Ассоциация «Содружество» (ОРНЗ 11406045396).
                </td>
              </tr>
            </tbody>
          </table>
        </figure>

        <h3 class="has-dark-blue-color has-text-color"> <strong><em>Регистратор (держатель реестра акционеров Банка):</em></strong></h3>

        <p class="kicker"><strong>Акционерное общество «Независимая регистраторская компания Р.О.С.Т.»</strong> <strong>ИНН 7726030449</strong><br>
        (лицензия на осуществление деятельности по ведению реестра&nbsp;№&nbsp;045-13976-000001 от 03.12.2002, выданная ФКЦБ России),</p>

        <p class="kicker">Адрес в соответствии с ЕГРЮЛ:&nbsp;173003, Новгородская обл., г. Великий Новгород, реки Гзень наб., дом 11 оф.403<br>
        Почтовый адрес:&nbsp;173003, Новгородская обл., г. Великий Новгород, наб. реки Гзень, дом 11 оф.403</p>

        <p class="kicker">телефон- (8162) 73-17-20, 730-723;<br>
        e-mail:&nbsp;<a href="mailto:vnovgorod@rrost.ru">vnovgorod@rrost.ru</a></p>

        <h3 class="kicker"><strong>Банковский надзор</strong>&nbsp;за деятельностью кредитной организации АО НКБ «СЛАВЯНБАНК», рег. №804 осуществляет Служба текущего банковского надзора Банка России.</h3>

        <p class="kicker"><em>Телефоны <strong>Единого коммуникационного центра</strong> <strong>Центрального банка</strong> Российской Федерации (работает круглосуточно):</em></p>

        <p class="kicker"><strong>300</strong> — бесплатно для звонков с мобильных телефонов<br>
        <strong>8(800)300-3000</strong>&nbsp;— бесплатно на территории Российской Федерации<br>
        <strong>+7(499)300-3000</strong>&nbsp;— тарификация в соответствии с тарифами Вашего оператора.</p>

        <p class="has-dark-blue-color has-text-color"><strong>Надзор за соблюдением требований законодательства Российской Федерации в сфере защиты прав потребителей финансовых услуг</strong> осуществляет Служба по защите прав потребителей и обеспечению доступности финансовых услуг Банка России.</p>

        <p class="kicker">Обращение о нарушении действиями (бездействием) кредитной организации законодательства Российской Федерации, а также охраняемых законом прав и интересов <strong>физических или юридических лиц, может быть направлено для рассмотрения в Банк России через интернет-приемную (<a target="_blank" rel="noreferrer noopener" href="http://www.cbr.ru/Reception/">http://www.cbr.ru/Интернет-приемная</a>).</strong></p>
      </div>

      <?php echo $home_stack; ?>
    </div>
  </div>
</section>

<section class="block" id="full">
  <div class="container">
    <div class="table-wrap">
      <table class="req-table">
        <thead>
          <tr>
            <th>Параметр</th>
            <th>Значение</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($rows as $row) :
            $label = isset($row['label']) ? (string) $row['label'] : '';
            $value = isset($row['value']) ? (string) $row['value'] : '';
            $url = isset($row['url']) ? (string) $row['url'] : '';
            $external = !empty($row['external']);
            if ($label === '' || $value === '') {
                continue;
            }
          ?>
          <tr>
            <td><?php echo nl2br(esc_html($label)); ?></td>
            <td>
              <?php if ($url !== '') : ?>
                <a href="<?php echo esc_url($url); ?>"<?php echo $external ? ' target="_blank" rel="noopener"' : ''; ?>>
                  <?php echo nl2br(esc_html($value)); ?>
                </a>
              <?php else : ?>
                <?php echo nl2br(esc_html($value)); ?>
              <?php endif; ?>
            </td>
            <td><?php echo slav_reqmig_render_copy_button($value); ?></td>
          </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    </div>
  </div>
</section>

<div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>Скопировано</div>
        <?php
        return trim((string) ob_get_clean());
    }
}

if (!function_exists('slav_reqmig_block_render')) {
    function slav_reqmig_block_render(array $attributes = [], string $content = ''): string
    {
        return slav_reqmig_render_requisites_page();
    }
}

if (!function_exists('slav_reqmig_register_assets')) {
    function slav_reqmig_register_assets(): void
    {
        $handle = 'slav-reqmig-editor';
        $src = get_stylesheet_directory_uri() . '/inc/migrations/assets/js/editor.js';
        wp_register_script(
            $handle,
            $src,
            ['wp-blocks', 'wp-element', 'wp-i18n', 'wp-server-side-render'],
            '1.0.0',
            true
        );
    }
}
add_action('init', 'slav_reqmig_register_assets');

if (!function_exists('slav_reqmig_register_block')) {
    function slav_reqmig_register_block(): void
    {
        register_block_type('slavbank/requisites-page-filled', [
            'editor_script'   => 'slav-reqmig-editor',
            'render_callback' => 'slav_reqmig_block_render',
        ]);
    }
}
add_action('init', 'slav_reqmig_register_block');

if (!function_exists('slav_reqmig_register_patterns')) {
    function slav_reqmig_register_patterns(): void
    {
        if (!function_exists('register_block_pattern_category') || !function_exists('register_block_pattern')) {
            return;
        }

        register_block_pattern_category(
            'slavyanbank-migration-single',
            ['label' => __('Slavyanbank Single Migration', 'slav-reqmig')]
        );

        register_block_pattern(
            'slavyanbank-migration-single/requisites-with-hero',
            [
                'title'       => __('SB Migration · Requisites (with hero, filled)', 'slav-reqmig'),
                'description' => __('Filled migration pattern for the Requisites page with hero section and data.', 'slav-reqmig'),
                'categories'  => ['slavyanbank-migration-single'],
                'content'     => '<!-- wp:slavbank/requisites-page-filled /-->',
            ]
        );
    }
}
add_action('init', 'slav_reqmig_register_patterns', 20);
