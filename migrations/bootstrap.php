<?php
if (!defined('ABSPATH')) {
    exit;
}

function sb_mig_theme_asset_url(string $relative): string
{
    $relative = ltrim($relative, '/');
    return trailingslashit(get_stylesheet_directory_uri()) . $relative;
}

function sb_mig_default_requisites_rows(): array
{
    if (function_exists('sb_alpha_get_bank_requisites_rows')) {
        return array_values((array) sb_alpha_get_bank_requisites_rows());
    }
    return [
        ['label' => 'Сокращенное наименование', 'value' => 'АО НКБ «СЛАВЯНБАНК»'],
        ['label' => 'ИНН', 'value' => '5321068480'],
        ['label' => 'Адрес электронной почты', 'value' => 'nkb@slavbank.ru', 'url' => 'mailto:nkb@slavbank.ru'],
    ];
}

function sb_mig_default_info_bank_tabs(): array
{
    $affiliate = function_exists('sb_alpha_get_info_bank_affiliate_documents')
        ? array_values((array) sb_alpha_get_info_bank_affiliate_documents())
        : [];
    $control = function_exists('sb_alpha_get_info_bank_control_document')
        ? (array) sb_alpha_get_info_bank_control_document()
        : [];
    $messages = function_exists('sb_alpha_get_info_bank_message_documents')
        ? array_values((array) sb_alpha_get_info_bank_message_documents())
        : [];

    return [
        [
            'key' => 'aff',
            'label' => 'Аффилированные лица',
            'intro' => 'Списки аффилированных лиц в формате XLS. В подборке собраны опубликованные документы, размещенные в корпоративном разделе банка.',
            'mode' => 'rows',
            'rows' => array_map(static function ($item) {
                return [
                    'date' => (string) ($item['date'] ?? ''),
                    'title' => (string) ($item['title'] ?? ''),
                    'url' => (string) ($item['url'] ?? ''),
                    'kind' => (string) ($item['kind'] ?? 'XLS'),
                    'newTab' => true,
                ];
            }, $affiliate),
        ],
        [
            'key' => 'control',
            'label' => 'Список лиц, под контролем или значительным влиянием',
            'intro' => $control ? sprintf(
                'Опубликовано: %s · Актуализировано: %s. Документ доступен в формате %s.',
                (string) ($control['published'] ?? ''),
                (string) ($control['updated'] ?? ''),
                (string) ($control['kind'] ?? 'PDF')
            ) : '',
            'mode' => 'hero',
            'heroTitle' => (string) ($control['title'] ?? ''),
            'heroSubtitle' => $control ? 'Скачать ' . (string) ($control['kind'] ?? 'PDF') : '',
            'heroUrl' => (string) ($control['url'] ?? ''),
            'heroNewTab' => true,
            'heroKind' => (string) ($control['kind'] ?? 'PDF'),
            'rows' => [],
        ],
        [
            'key' => 'msg',
            'label' => 'Сообщения',
            'intro' => 'Сообщения об утверждении годовой бухгалтерской (финансовой) отчетности.',
            'mode' => 'rows',
            'rows' => array_map(static function ($item) {
                return [
                    'date' => (string) ($item['date'] ?? ''),
                    'title' => (string) ($item['title'] ?? ''),
                    'url' => (string) ($item['url'] ?? ''),
                    'kind' => (string) ($item['kind'] ?? 'PDF'),
                    'newTab' => true,
                ];
            }, $messages),
        ],
    ];
}

function sb_mig_default_tariffs_data(): array
{
    $download = function_exists('sb_alpha_get_tariffs_download')
        ? array_values((array) sb_alpha_get_tariffs_download())
        : [];
    $view = function_exists('sb_alpha_get_tariffs_view')
        ? array_values((array) sb_alpha_get_tariffs_view())
        : [];

    return [
        'introHtml' => '<h2 class="kicker"><br>АО НКБ «СЛАВЯНБАНК» предлагает к рассмотрению следующие виды <strong>ТАРИФОВ</strong> банковских услуг:<br></h2>',
        'downloadLabel' => '— скачать:',
        'downloadItems' => array_map(static function ($item) {
            return [
                'label' => (string) ($item['title'] ?? ''),
                'tag' => (string) ($item['date'] ?? ''),
                'url' => (string) ($item['url'] ?? ''),
                'newTab' => true,
            ];
        }, $download),
        'viewLabel' => '— открыть на сайте:',
        'viewItems' => array_map(static function ($item) {
            return [
                'label' => (string) ($item['title'] ?? ''),
                'tag' => (string) ($item['date'] ?? ''),
                'url' => (string) ($item['url'] ?? ''),
                'newTab' => true,
            ];
        }, $view),
        'ctaLabel' => 'СКАЧАТЬ ТАРИФЫ БАНКА',
        'ctaUrl' => $download ? (string) ($download[0]['url'] ?? '') : '',
        'ctaNewTab' => true,
    ];
}

function sb_mig_default_requisites_attrs(): array
{
    return [
        'heroKicker' => 'О банке',
        'heroTitle' => 'Реквизиты банка',
        'heroButtons' => [
            ['label' => 'Информация о представителях', 'href' => '#key', 'variant' => 'primary', 'isText' => false],
            ['label' => 'Перейти к реквизитам', 'href' => '#full', 'variant' => 'outline', 'isText' => false],
        ],
        'heroPillItems' => [
            ['label' => 'Контакты', 'href' => '', 'variant' => 'badge', 'isText' => true],
            ['label' => '(8162) 66‑52‑47', 'href' => 'tel:8162665247', 'variant' => 'mono', 'isText' => false],
            ['label' => '·', 'href' => '', 'variant' => 'muted', 'isText' => true],
            ['label' => 'nkb@slavbank.ru', 'href' => 'mailto:nkb@slavbank.ru', 'variant' => 'default', 'isText' => false],
        ],
        'auditorHeading' => 'Аудиторская организация:',
        'auditorHtml' => '  <strong>Сведения об аудиторской организации:<br></strong>Общество с ограниченной ответственностью «Балтийский аудит» (ООО «Балтийский аудит»).<br><br>Аудитор: ООО «Балтийский аудит»<br>Адрес местонахождения: г. Санкт-Петербург, Московский пр., д. 127, кв. 30<br>Почтовый адрес: 196084, г. Санкт-Петербург, Московский пр., д. 127, кв. 30<br><br>E-mail: <a href="mailto:mail@baudit.spb.ru">mail@baudit.spb.ru</a><br>ОГРН 1147847390250<br>р/с 40702810627060018754 в Филиале «Центральный» Банка ВТБ (ПАО) в г. Москва<br>к/с 30101810145250000411 БИК 044525411<br>&nbsp;<br><strong>Членство в саморегулируемой организации аудиторов<br></strong>ООО «Балтийский аудит» является членом Саморегулируемой организации аудиторов Ассоциация «Содружество» (ОРНЗ 11406045396).',
        'registrarHeading' => 'Регистратор (держатель реестра акционеров Банка):',
        'registrarHtml' => '  <strong>Акционерное общество «Независимая регистраторская компания Р.О.С.Т.»</strong> <strong>ИНН 7726030449</strong><br>(лицензия на осуществление деятельности по ведению реестра № 045-13976-000001 от 03.12.2002, выданная ФКЦБ России),<br><br>  Адрес в соответствии с ЕГРЮЛ: 173003, Новгородская обл., г. Великий Новгород, реки Гзень наб., дом 11 оф.403<br>  Почтовый адрес: 173003, Новгородская обл., г. Великий Новгород, наб. реки Гзень, дом 11 оф.403<br><br>  телефон- (8162) 73-17-20, 730-723;<br>  e-mail: <a href="mailto:vnovgorod@rrost.ru">vnovgorod@rrost.ru</a>',
        'supervisionHtml' => '  <strong>Банковский надзор</strong> за деятельностью кредитной организации АО НКБ «СЛАВЯНБАНК», рег. №804 осуществляет Служба текущего банковского надзора Банка России.<br><br>  <em>Телефоны <strong>Единого коммуникационного центра</strong> <strong>Центрального банка</strong> Российской Федерации (работает круглосуточно):</em><br><br>  <strong>300</strong> — бесплатно для звонков с мобильных телефонов<br>  <strong>8(800)300-3000</strong> — бесплатно на территории Российской Федерации<br>  <strong>+7(499)300-3000</strong> — тарификация в соответствии с тарифами Вашего оператора.<br><br>  <strong>Надзор за соблюдением требований законодательства Российской Федерации в сфере защиты прав потребителей финансовых услуг</strong> осуществляет Служба по защите прав потребителей и обеспечению доступности финансовых услуг Банка России.<br><br>  Обращение о нарушении действиями (бездействием) кредитной организации законодательства Российской Федерации, а также охраняемых законом прав и интересов <strong>физических или юридических лиц, может быть направлено для рассмотрения в Банк России через интернет-приемную (<a target="_blank" href="http://www.cbr.ru/Reception/" rel="noreferrer noopener">http://www.cbr.ru/Интернет-приемная</a>).</strong>',
        'rows' => sb_mig_default_requisites_rows(),
    ];
}

function sb_mig_default_info_bank_attrs(): array
{
    return [
        'pageKicker' => 'О банке',
        'pageTitle' => 'Информация банка',
        'pageLead' => 'Сведения об аффилированных лицах, документы о контроле и сообщения об утверждении годовой бухгалтерской (финансовой) отчетности.',
        'buttons' => [
            ['label' => 'К документам', 'href' => '#documents', 'variant' => 'primary', 'isText' => false],
            ['label' => 'Отчетность', 'href' => '/otchetnost/', 'variant' => 'outline', 'isText' => false],
            ['label' => 'Реквизиты банка', 'href' => '/rekvizity-banka/', 'variant' => 'glass', 'isText' => false],
        ],
        'tabs' => sb_mig_default_info_bank_tabs(),
    ];
}

function sb_mig_default_tariffs_root_attrs(): array
{
    return sb_mig_default_tariffs_data();
}

function sb_mig_render_button_list(array $buttons): string
{
    if (empty($buttons)) {
        return '';
    }
    ob_start();
    echo '<div class="row" style="margin-top: var(--s-4); flex-wrap: wrap">';
    foreach ($buttons as $button) {
        $label = (string) ($button['label'] ?? '');
        $href = (string) ($button['href'] ?? '');
        $variant = trim((string) ($button['variant'] ?? 'outline'));
        $isText = !empty($button['isText']);
        if ($label === '') {
            continue;
        }
        if ($isText) {
            printf('<span class="%s">%s</span>', esc_attr($variant), esc_html($label));
            continue;
        }
        $class = 'btn ' . preg_replace('/[^a-z0-9\-_ ]/i', '', $variant);
        printf('<a class="%s" href="%s">%s</a>', esc_attr(trim($class)), esc_url($href !== '' ? $href : '#'), esc_html($label));
    }
    echo '</div>';
    return (string) ob_get_clean();
}

function sb_mig_render_pill_items(array $items): string
{
    if (empty($items)) {
        return '';
    }
    ob_start();
    echo '<div class="pill" style="align-self: flex-start">';
    foreach ($items as $item) {
        $label = (string) ($item['label'] ?? '');
        $href = (string) ($item['href'] ?? '');
        $variant = (string) ($item['variant'] ?? 'default');
        $isText = !empty($item['isText']);
        if ($label === '') continue;
        $class = [];
        if ($variant === 'badge') $class[] = 'badge';
        elseif ($variant === 'mono') $class[] = 'mono';
        elseif ($variant === 'muted') $class[] = 'muted';
        if ($isText || $href === '') {
            printf('<span class="%s">%s</span>', esc_attr(implode(' ', $class)), esc_html($label));
        } else {
            printf('<a class="%s" href="%s">%s</a>', esc_attr(implode(' ', $class)), esc_url($href), esc_html($label));
        }
    }
    echo '</div>';
    return (string) ob_get_clean();
}

function sb_mig_render_requisites_table(array $rows): string
{
    ob_start(); ?>
    <div class="table-wrap">
        <table class="req-table">
            <thead><tr><th>Параметр</th><th>Значение</th><th></th></tr></thead>
            <tbody>
            <?php foreach ($rows as $row) :
                $label = (string) ($row['label'] ?? '');
                $value = (string) ($row['value'] ?? '');
                $url = (string) ($row['url'] ?? '');
                $copy = (string) ($row['copy'] ?? $value);
                if ($label === '' || $value === '') continue; ?>
                <tr>
                    <td><?php echo nl2br(esc_html($label)); ?></td>
                    <td><?php if ($url !== '') : ?><a href="<?php echo esc_url($url); ?>"><?php echo nl2br(esc_html($value)); ?></a><?php else : ?><?php echo nl2br(esc_html($value)); ?><?php endif; ?></td>
                    <td><?php if ($copy !== '') : ?><button class="copy mini" type="button" data-copy="<?php echo esc_attr($copy); ?>">Копировать</button><?php endif; ?></td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <?php return (string) ob_get_clean();
}

function sb_mig_render_doc_row_list(array $rows): string
{
    ob_start();
    echo '<div class="doc-list" style="margin-top: 12px;">';
    foreach ($rows as $row) {
        $date = (string) ($row['date'] ?? '');
        $title = (string) ($row['title'] ?? '');
        $url = (string) ($row['url'] ?? '');
        $kind = (string) ($row['kind'] ?? 'PDF');
        $newTab = !empty($row['newTab']);
        if ($title === '' || $url === '') continue;
        printf('<a class="doc-row" href="%s"%s><span class="doc-date">%s</span><span class="doc-title">%s</span><span class="doc-ext">%s</span><span class="doc-arrow" aria-hidden="true">→</span></a>',
            esc_url($url), $newTab ? ' target="_blank" rel="noopener"' : '', esc_html($date), esc_html($title), esc_html($kind));
    }
    echo '</div>';
    return (string) ob_get_clean();
}

function sb_mig_render_info_bank_tabs(array $tabs): string
{
    if (empty($tabs)) return '';
    $first = reset($tabs);
    $activeKey = (string) ($first['key'] ?? 'tab1');
    ob_start(); ?>
    <div class="dash-tabs" id="documents" role="tablist" aria-label="Документы банка">
        <?php foreach ($tabs as $tab) :
            $key = (string) ($tab['key'] ?? '');
            $label = (string) ($tab['label'] ?? '');
            if ($key === '' || $label === '') continue; ?>
            <button class="seg" role="tab" data-doc-tab="<?php echo esc_attr($key); ?>" aria-selected="<?php echo $key === $activeKey ? 'true' : 'false'; ?>"><?php echo esc_html($label); ?></button>
        <?php endforeach; ?>
    </div>
    <div class="dash-panels">
        <?php foreach ($tabs as $tab) :
            $key = (string) ($tab['key'] ?? '');
            $intro = (string) ($tab['intro'] ?? '');
            $mode = (string) ($tab['mode'] ?? 'rows'); ?>
            <div class="dash-panel<?php echo $key === $activeKey ? ' is-active' : ''; ?>" data-doc-panel="<?php echo esc_attr($key); ?>"<?php echo $key === $activeKey ? '' : ' hidden'; ?>>
                <?php if ($intro !== '') : ?><div class="muted" style="line-height: 1.6;"><?php echo esc_html($intro); ?></div><?php endif; ?>
                <?php if ($mode === 'hero') :
                    $heroTitle = (string) ($tab['heroTitle'] ?? '');
                    $heroSubtitle = (string) ($tab['heroSubtitle'] ?? '');
                    $heroUrl = (string) ($tab['heroUrl'] ?? '');
                    $heroNewTab = !empty($tab['heroNewTab']); ?>
                    <a class="doc-hero" href="<?php echo esc_url($heroUrl !== '' ? $heroUrl : '#'); ?>"<?php echo $heroNewTab ? ' target="_blank" rel="noopener"' : ''; ?> style="margin-top: 12px;">
                        <span class="ico" aria-hidden="true">📄</span>
                        <span><strong><?php echo esc_html($heroTitle); ?></strong><small class="muted"><?php echo esc_html($heroSubtitle); ?></small></span>
                        <span class="arrow" aria-hidden="true">→</span>
                    </a>
                <?php else : ?>
                    <?php echo sb_mig_render_doc_row_list((array) ($tab['rows'] ?? [])); ?>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>
    <?php return (string) ob_get_clean();
}

function sb_mig_render_tariff_card_list(array $items): string
{
    ob_start();
    echo '<ul>';
    foreach ($items as $item) {
        $label = (string) ($item['label'] ?? '');
        $tag = (string) ($item['tag'] ?? '');
        $url = (string) ($item['url'] ?? '');
        $newTab = !empty($item['newTab']);
        if ($label === '' || $url === '') continue;
        printf('<li><a class="doc-card" href="%s"%s><span class="doc-title"><strong>%s</strong></span><span class="doc-arrow doc-ext" style="text-align: center; min-width: 132px;">%s</span></a></li>',
            esc_url($url), $newTab ? ' target="_blank" rel="noopener"' : '', esc_html($label), esc_html($tag));
    }
    echo '</ul>';
    return (string) ob_get_clean();
}

function sb_mig_render_requisites_page(array $attributes): string
{
    $attrs = wp_parse_args($attributes, sb_mig_default_requisites_attrs());
    ob_start(); ?>
    <main id="main">
        <section class="block">
            <div class="container">
                <div class="hero-wrap" style="padding: var(--s-5)">
                    <div class="row" style="align-items: flex-start; gap: var(--s-4); flex-wrap: wrap">
                        <div style="min-width: 280px; flex: 1 1 520px">
                            <div class="kicker"><?php echo esc_html((string) $attrs['heroKicker']); ?></div>
                            <h1 style="margin: 8px 0 10px"><?php echo esc_html((string) $attrs['heroTitle']); ?></h1>
                            <?php echo sb_mig_render_button_list((array) $attrs['heroButtons']); ?>
                        </div>
                        <?php echo sb_mig_render_pill_items((array) $attrs['heroPillItems']); ?>
                    </div>
                </div>
            </div>
        </section>
        <section class="block dashv2" id="key">
            <div class="container"><div class="bento"><div class="bento-card" style="padding: var(--s-4); position: relative">
                <h3 class="kicker"><?php echo esc_html((string) $attrs['auditorHeading']); ?></h3>
                <figure class="wp-block-table figure-body"><table><tbody><tr><td class="has-text-align-left" data-align="left"><?php echo wp_kses_post((string) $attrs['auditorHtml']); ?></td></tr></tbody></table></figure>
                <h3 class="has-dark-blue-color has-text-color"><strong><em><?php echo esc_html((string) $attrs['registrarHeading']); ?></em></strong></h3>
                <p class="kicker"><?php echo wp_kses_post((string) $attrs['registrarHtml']); ?></p>
                <p class="kicker"><?php echo wp_kses_post((string) $attrs['supervisionHtml']); ?></p>
            </div><?php get_template_part('template-parts/home', 'stack'); ?></div></div>
        </section>
        <section class="block" id="full"><div class="container"><?php echo sb_mig_render_requisites_table((array) $attrs['rows']); ?></div></section>
        <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>Скопировано</div>
    </main>
    <?php return (string) ob_get_clean();
}

function sb_mig_render_info_bank_page(array $attributes): string
{
    $attrs = wp_parse_args($attributes, sb_mig_default_info_bank_attrs());
    ob_start(); ?>
    <main id="main">
        <section class="block dashv2" id="info-bank">
            <div class="container"><div class="bento"><div class="bento-card bento-hero" data-reveal="scale" style="padding: var(--s-4);">
                <div class="section-flow">
                    <div>
                        <div class="kicker"><?php echo esc_html((string) $attrs['pageKicker']); ?></div>
                        <h1 style="margin:8px 0 10px;"><?php echo esc_html((string) $attrs['pageTitle']); ?></h1>
                        <p class="muted" style="max-width:78ch;"><?php echo esc_html((string) $attrs['pageLead']); ?></p>
                        <?php echo sb_mig_render_button_list((array) $attrs['buttons']); ?>
                    </div>
                    <?php echo sb_mig_render_info_bank_tabs((array) $attrs['tabs']); ?>
                </div>
            </div><?php get_template_part('template-parts/home', 'stack'); ?></div></div>
        </section>
    </main>
    <?php return (string) ob_get_clean();
}

function sb_mig_render_tariffs_root_page(array $attributes): string
{
    $attrs = wp_parse_args($attributes, sb_mig_default_tariffs_root_attrs());
    ob_start(); ?>
    <div class="prose"><div class="entry-content">
        <?php echo wp_kses_post((string) $attrs['introHtml']); ?>
        <?php if (!empty($attrs['downloadLabel'])) : ?><p><strong><?php echo esc_html((string) $attrs['downloadLabel']); ?></strong></p><?php endif; ?>
        <?php echo sb_mig_render_tariff_card_list((array) $attrs['downloadItems']); ?>
        <?php if (!empty($attrs['viewLabel'])) : ?><p><strong><?php echo esc_html((string) $attrs['viewLabel']); ?></strong></p><?php endif; ?>
        <?php echo sb_mig_render_tariff_card_list((array) $attrs['viewItems']); ?>
        <?php if (!empty($attrs['ctaLabel']) && !empty($attrs['ctaUrl'])) : ?>
            <p class="has-text-align-center has-dark-blue-color has-text-color"><strong><span><a href="<?php echo esc_url((string) $attrs['ctaUrl']); ?>"<?php echo !empty($attrs['ctaNewTab']) ? ' target="_blank" rel="noreferrer noopener"' : ''; ?>><?php echo esc_html((string) $attrs['ctaLabel']); ?></a></span></strong></p>
        <?php endif; ?>
    </div></div>
    <?php return (string) ob_get_clean();
}

function sb_mig_register_embedded_migration_assets(): void
{
    wp_register_script(
        'sb-mig-embedded-editor',
        sb_mig_theme_asset_url('migrations/assets/js/editor.js'),
        ['wp-blocks', 'wp-element', 'wp-components', 'wp-block-editor', 'wp-server-side-render'],
        '0.1.0',
        true
    );
}
add_action('init', 'sb_mig_register_embedded_migration_assets');

add_filter('block_categories_all', function (array $categories): array {
    $categories[] = ['slug' => 'slavyanbank-embedded-migration', 'title' => 'Slavyanbank Embedded Migration', 'icon' => null];
    return $categories;
});

function sb_mig_register_embedded_blocks(): void
{
    register_block_type('slavyanbank-embedded/requisites-page', [
        'api_version' => 2,
        'editor_script' => 'sb-mig-embedded-editor',
        'render_callback' => static fn($attributes) => sb_mig_render_requisites_page((array) $attributes),
        'attributes' => [
            'heroKicker' => ['type' => 'string', 'default' => 'О банке'],
            'heroTitle' => ['type' => 'string', 'default' => 'Реквизиты банка'],
            'heroButtons' => ['type' => 'array', 'default' => sb_mig_default_requisites_attrs()['heroButtons']],
            'heroPillItems' => ['type' => 'array', 'default' => sb_mig_default_requisites_attrs()['heroPillItems']],
            'auditorHeading' => ['type' => 'string', 'default' => sb_mig_default_requisites_attrs()['auditorHeading']],
            'auditorHtml' => ['type' => 'string', 'default' => sb_mig_default_requisites_attrs()['auditorHtml']],
            'registrarHeading' => ['type' => 'string', 'default' => sb_mig_default_requisites_attrs()['registrarHeading']],
            'registrarHtml' => ['type' => 'string', 'default' => sb_mig_default_requisites_attrs()['registrarHtml']],
            'supervisionHtml' => ['type' => 'string', 'default' => sb_mig_default_requisites_attrs()['supervisionHtml']],
            'rows' => ['type' => 'array', 'default' => sb_mig_default_requisites_attrs()['rows']],
        ],
    ]);

    register_block_type('slavyanbank-embedded/info-bank-page', [
        'api_version' => 2,
        'editor_script' => 'sb-mig-embedded-editor',
        'render_callback' => static fn($attributes) => sb_mig_render_info_bank_page((array) $attributes),
        'attributes' => [
            'pageKicker' => ['type' => 'string', 'default' => 'О банке'],
            'pageTitle' => ['type' => 'string', 'default' => 'Информация банка'],
            'pageLead' => ['type' => 'string', 'default' => sb_mig_default_info_bank_attrs()['pageLead']],
            'buttons' => ['type' => 'array', 'default' => sb_mig_default_info_bank_attrs()['buttons']],
            'tabs' => ['type' => 'array', 'default' => sb_mig_default_info_bank_attrs()['tabs']],
        ],
    ]);

    register_block_type('slavyanbank-embedded/tariffs-root-page', [
        'api_version' => 2,
        'editor_script' => 'sb-mig-embedded-editor',
        'render_callback' => static fn($attributes) => sb_mig_render_tariffs_root_page((array) $attributes),
        'attributes' => [
            'introHtml' => ['type' => 'string', 'default' => sb_mig_default_tariffs_root_attrs()['introHtml']],
            'downloadLabel' => ['type' => 'string', 'default' => sb_mig_default_tariffs_root_attrs()['downloadLabel']],
            'downloadItems' => ['type' => 'array', 'default' => sb_mig_default_tariffs_root_attrs()['downloadItems']],
            'viewLabel' => ['type' => 'string', 'default' => sb_mig_default_tariffs_root_attrs()['viewLabel']],
            'viewItems' => ['type' => 'array', 'default' => sb_mig_default_tariffs_root_attrs()['viewItems']],
            'ctaLabel' => ['type' => 'string', 'default' => sb_mig_default_tariffs_root_attrs()['ctaLabel']],
            'ctaUrl' => ['type' => 'string', 'default' => sb_mig_default_tariffs_root_attrs()['ctaUrl']],
            'ctaNewTab' => ['type' => 'boolean', 'default' => true],
        ],
    ]);
}
add_action('init', 'sb_mig_register_embedded_blocks');

add_action('init', function () {
    if (!function_exists('register_block_pattern')) return;
    if (function_exists('register_block_pattern_category')) {
        register_block_pattern_category('slavyanbank-embedded-migration', ['label' => 'Slavyanbank Embedded Migration']);
    }

    register_block_pattern('slavyanbank-embedded/requisites-filled', [
        'title' => 'SB Embedded Migration · Requisites (editable, filled)',
        'categories' => ['slavyanbank-embedded-migration'],
        'content' => sprintf('<!-- wp:slavyanbank-embedded/requisites-page %s /-->', wp_json_encode(sb_mig_default_requisites_attrs(), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)),
    ]);

    register_block_pattern('slavyanbank-embedded/info-bank-filled', [
        'title' => 'SB Embedded Migration · Info Bank (editable, filled)',
        'categories' => ['slavyanbank-embedded-migration'],
        'content' => sprintf('<!-- wp:slavyanbank-embedded/info-bank-page %s /-->', wp_json_encode(sb_mig_default_info_bank_attrs(), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)),
    ]);

    register_block_pattern('slavyanbank-embedded/tariffs-root-filled', [
        'title' => 'SB Embedded Migration · Tariffs Root (editable, filled, no hero)',
        'categories' => ['slavyanbank-embedded-migration'],
        'content' => sprintf('<!-- wp:slavyanbank-embedded/tariffs-root-page %s /-->', wp_json_encode(sb_mig_default_tariffs_root_attrs(), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)),
    ]);
}, 20);
