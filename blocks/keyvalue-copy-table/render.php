<?php
if (!defined('ABSPATH')) {
    exit;
}

$anchor_id = (string) ($attributes['anchorId'] ?? 'full');
$header_key = (string) ($attributes['headerKey'] ?? 'Параметр');
$header_value = (string) ($attributes['headerValue'] ?? 'Значение');

$rows = isset($attributes['rows']) && is_array($attributes['rows'])
    ? $attributes['rows']
    : [];

$rows = array_values(array_filter($rows, static function ($row) {
    return is_array($row) && (!empty($row['key']) || !empty($row['value']));
}));

if (empty($rows)) {
    return '';
}
?>

<section <?php echo get_block_wrapper_attributes(['class' => 'block']); ?> id="<?php echo esc_attr($anchor_id); ?>">
    <div class="container">
        <div class="table-wrap">
            <table class="req-table">
                <thead>
                    <tr>
                        <th><?php echo esc_html($header_key); ?></th>
                        <th><?php echo esc_html($header_value); ?></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($rows as $row) : ?>
                        <?php
                        $key = (string) ($row['key'] ?? '');
                        $value = (string) ($row['value'] ?? '');
                        $copy_value = (string) ($row['copyValue'] ?? $value);
                        ?>
                        <tr>
                            <td><?php echo nl2br(esc_html($key)); ?></td>
                            <td><?php echo nl2br(esc_html($value)); ?></td>
                            <td>
                                <button
                                    class="copy mini sb-copy-trigger"
                                    type="button"
                                    data-copy="<?php echo esc_attr($copy_value); ?>"
                                >
                                    Копировать
                                </button>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>

        <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>
            Скопировано
        </div>
    </div>
</section>