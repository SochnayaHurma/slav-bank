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
        'Home Stack',
        'Home Stack',
        'manage_options',
        'sb-home-stack',
        'sb_alpha_render_home_stack_options_page'
    );
}

function sb_alpha_render_home_stack_options_page(): void
{
    if (!current_user_can('manage_options')) {
        return;
    }

    $data = sb_alpha_get_home_currency_widget_data();
    ?>
    <div class="wrap">
        <h1>Настройки Home Stack</h1>
        <form method="post" action="options.php">
            <?php settings_fields('sb_home_stack_group'); ?>

            <table class="form-table" role="presentation">
                <tbody>
                    <tr>
                        <th scope="row"><label for="sb_kicker">Kicker</label></th>
                        <td>
                            <input name="sb_home_currency_widget[kicker]" id="sb_kicker" type="text" class="regular-text" value="<?php echo esc_attr($data['kicker']); ?>">
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><label for="sb_title">Заголовок</label></th>
                        <td>
                            <input name="sb_home_currency_widget[title]" id="sb_title" type="text" class="regular-text" value="<?php echo esc_attr($data['title']); ?>">
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><label for="sb_note">Примечание</label></th>
                        <td>
                            <textarea name="sb_home_currency_widget[note]" id="sb_note" rows="3" class="large-text"><?php echo esc_textarea($data['note']); ?></textarea>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><label for="sb_updated_label">Подпись обновления</label></th>
                        <td>
                            <input name="sb_home_currency_widget[updated_label]" id="sb_updated_label" type="text" class="regular-text" value="<?php echo esc_attr($data['updated_label']); ?>">
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><label for="sb_updated_value">Значение обновления</label></th>
                        <td>
                            <input name="sb_home_currency_widget[updated_value]" id="sb_updated_value" type="text" class="regular-text" value="<?php echo esc_attr($data['updated_value']); ?>">
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><label for="sb_button_text">Текст кнопки</label></th>
                        <td>
                            <input name="sb_home_currency_widget[button_text]" id="sb_button_text" type="text" class="regular-text" value="<?php echo esc_attr($data['button_text']); ?>">
                        </td>
                    </tr>

                    <tr>
                        <th scope="row"><label for="sb_button_url">URL кнопки</label></th>
                        <td>
                            <input name="sb_home_currency_widget[button_url]" id="sb_button_url" type="url" class="regular-text" value="<?php echo esc_attr($data['button_url']); ?>">
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">Валюта 1</th>
                        <td>
                            <input name="sb_home_currency_widget[rates][0][code]" type="text" placeholder="USD" value="<?php echo esc_attr($data['rates'][0]['code'] ?? ''); ?>">
                            <input name="sb_home_currency_widget[rates][0][buy]" type="text" placeholder="Покупка" value="<?php echo esc_attr($data['rates'][0]['buy'] ?? ''); ?>">
                            <input name="sb_home_currency_widget[rates][0][sell]" type="text" placeholder="Продажа" value="<?php echo esc_attr($data['rates'][0]['sell'] ?? ''); ?>">
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">Валюта 2</th>
                        <td>
                            <input name="sb_home_currency_widget[rates][1][code]" type="text" placeholder="EUR" value="<?php echo esc_attr($data['rates'][1]['code'] ?? ''); ?>">
                            <input name="sb_home_currency_widget[rates][1][buy]" type="text" placeholder="Покупка" value="<?php echo esc_attr($data['rates'][1]['buy'] ?? ''); ?>">
                            <input name="sb_home_currency_widget[rates][1][sell]" type="text" placeholder="Продажа" value="<?php echo esc_attr($data['rates'][1]['sell'] ?? ''); ?>">
                        </td>
                    </tr>
                </tbody>
            </table>

            <?php submit_button('Сохранить валютный блок'); ?>
        </form>
    </div>
    <?php
}