<?php
if (!defined('ABSPATH')) {
    exit;
}

add_action('admin_init', 'sb_alpha_register_home_stack_settings');
function sb_alpha_register_home_stack_settings(): void
{
    register_setting(
        'sb_home_stack_group',
        'sb_home_currency_widget',
        [
            'type'              => 'array',
            'sanitize_callback' => 'sb_alpha_sanitize_home_currency_widget',
            'default'           => sb_alpha_get_home_currency_widget_defaults(),
        ]
    );
}

add_action('admin_menu', 'sb_alpha_register_home_stack_options_page');
function sb_alpha_register_home_stack_options_page(): void
{
    add_options_page(
        'Настройка валютного блока',
        'Настройка валютного блока',
        'manage_options',
        'sb-home-stack',
        'sb_alpha_render_home_stack_options_page'
    );
}

function sb_alpha_render_home_stack_rate_row(int $index, array $rate): void
{
    $code    = (string) ($rate['code'] ?? '');
    $buy     = (string) ($rate['buy'] ?? '');
    $sell    = (string) ($rate['sell'] ?? '');
    $visible = !empty($rate['visible']);
    ?>
    <div class="sb-rate-row" data-rate-row style="display:grid; grid-template-columns: 120px 160px 160px 140px auto; gap:10px; align-items:center; margin-bottom:10px; padding:12px; border:1px solid #dcdcde; border-radius:8px; background:#fff;">
        <input name="sb_home_currency_widget[rates][<?php echo esc_attr((string) $index); ?>][code]" type="text" placeholder="Код" value="<?php echo esc_attr($code); ?>">
        <input name="sb_home_currency_widget[rates][<?php echo esc_attr((string) $index); ?>][buy]" type="text" placeholder="Покупка" value="<?php echo esc_attr($buy); ?>">
        <input name="sb_home_currency_widget[rates][<?php echo esc_attr((string) $index); ?>][sell]" type="text" placeholder="Продажа" value="<?php echo esc_attr($sell); ?>">

        <label style="display:flex; align-items:center; gap:8px;">
            <input type="hidden" name="sb_home_currency_widget[rates][<?php echo esc_attr((string) $index); ?>][visible]" value="0">
            <input name="sb_home_currency_widget[rates][<?php echo esc_attr((string) $index); ?>][visible]" type="checkbox" value="1" <?php checked($visible); ?>>
            Показывать
        </label>

        <button type="button" class="button-link-delete" data-remove-rate>Удалить</button>
    </div>
    <?php
}

function sb_alpha_render_home_stack_options_page(): void
{
    if (!current_user_can('manage_options')) {
        return;
    }

    $data = sb_alpha_get_home_currency_widget_data();
    $rates = $data['rates'] ?? [];
    if (!is_array($rates)) {
        $rates = [];
    }

    $current_date_hint = sb_alpha_get_home_currency_widget_default_date_line();
    ?>
    <div class="wrap">
        <h1>Настройки валютного блока</h1>

        <form method="post" action="options.php">
            <?php settings_fields('sb_home_stack_group'); ?>

            <table class="form-table" role="presentation">
                <tbody>
                    <tr>
                        <th scope="row"><label for="sb_title">Заголовок карточки</label></th>
                        <td>
                            <input name="sb_home_currency_widget[title]" id="sb_title" type="text" class="regular-text" value="<?php echo esc_attr($data['title']); ?>">
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><label for="sb_date_line">Строка с датой</label></th>
                        <td>
                            <input
                                name="sb_home_currency_widget[date_line]"
                                id="sb_date_line"
                                type="text"
                                class="regular-text"
                                placeholder="<?php echo esc_attr($current_date_hint); ?>"
                                value="<?php echo esc_attr($data['date_line']); ?>"
                            >
                            <p class="description">
                                Можно оставить пустым — тогда на фронте автоматически подставится текущая дата:
                                <strong><?php echo esc_html($current_date_hint); ?></strong>
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><label for="sb_legend_title">Подпись секции 1</label></th>
                        <td>
                            <input name="sb_home_currency_widget[legend_title]" id="sb_legend_title" type="text" class="regular-text" value="<?php echo esc_attr($data['legend_title']); ?>">
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><label for="sb_buy_label">Подпись секции 2</label></th>
                        <td>
                            <input name="sb_home_currency_widget[buy_label]" id="sb_buy_label" type="text" class="regular-text" value="<?php echo esc_attr($data['buy_label']); ?>">
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><label for="sb_sell_label">Подпись секции 3</label></th>
                        <td>
                            <input name="sb_home_currency_widget[sell_label]" id="sb_sell_label" type="text" class="regular-text" value="<?php echo esc_attr($data['sell_label']); ?>">
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><label for="sb_empty_text">Сообщение (если все блоки валют скрыты)</label></th>
                        <td>
                            <input name="sb_home_currency_widget[empty_text]" id="sb_empty_text" type="text" class="regular-text" value="<?php echo esc_attr($data['empty_text']); ?>">
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><label for="sb_footer_text">Нижняя подпись</label></th>
                        <td>
                            <input name="sb_home_currency_widget[footer_text]" id="sb_footer_text" type="text" class="regular-text" value="<?php echo esc_attr($data['footer_text']); ?>">
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">Курсы валют</th>
                        <td>
                            <div id="sb-rates-container">
                                <?php foreach ($rates as $index => $rate) : ?>
                                    <?php sb_alpha_render_home_stack_rate_row((int) $index, (array) $rate); ?>
                                <?php endforeach; ?>
                            </div>

                            <p style="margin-top:12px;">
                                <button type="button" class="button" id="sb-add-rate">Добавить валюту</button>
                            </p>

                            <template id="sb-rate-template">
                                <div class="sb-rate-row" data-rate-row style="display:grid; grid-template-columns: 120px 160px 160px 140px auto; gap:10px; align-items:center; margin-bottom:10px; padding:12px; border:1px solid #dcdcde; border-radius:8px; background:#fff;">
                                    <input name="sb_home_currency_widget[rates][__INDEX__][code]" type="text" placeholder="Код">
                                    <input name="sb_home_currency_widget[rates][__INDEX__][buy]" type="text" placeholder="Покупка">
                                    <input name="sb_home_currency_widget[rates][__INDEX__][sell]" type="text" placeholder="Продажа">

                                    <label style="display:flex; align-items:center; gap:8px;">
                                        <input type="hidden" name="sb_home_currency_widget[rates][__INDEX__][visible]" value="0">
                                        <input name="sb_home_currency_widget[rates][__INDEX__][visible]" type="checkbox" value="1" checked>
                                        Показывать
                                    </label>

                                    <button type="button" class="button-link-delete" data-remove-rate>Удалить</button>
                                </div>
                            </template>

                            <script>
                                (() => {
                                    const container = document.getElementById('sb-rates-container');
                                    const addBtn = document.getElementById('sb-add-rate');
                                    const template = document.getElementById('sb-rate-template');

                                    if (!container || !addBtn || !template) {
                                        return;
                                    }

                                    let nextIndex = container.querySelectorAll('[data-rate-row]').length;

                                    const bindRemove = (scope) => {
                                        scope.querySelectorAll('[data-remove-rate]').forEach((button) => {
                                            button.addEventListener('click', () => {
                                                const row = button.closest('[data-rate-row]');
                                                if (row) {
                                                    row.remove();
                                                }
                                            });
                                        });
                                    };

                                    bindRemove(container);

                                    addBtn.addEventListener('click', () => {
                                        const html = template.innerHTML.replace(/__INDEX__/g, String(nextIndex++));
                                        const wrapper = document.createElement('div');
                                        wrapper.innerHTML = html.trim();

                                        const row = wrapper.firstElementChild;
                                        if (!row) {
                                            return;
                                        }

                                        container.appendChild(row);
                                        bindRemove(row);
                                    });
                                })();
                            </script>
                        </td>
                    </tr>
                </tbody>
            </table>

            <?php submit_button('Сохранить валютный блок'); ?>
        </form>
    </div>
    <?php
}