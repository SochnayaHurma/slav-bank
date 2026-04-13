<?php
if (!defined('ABSPATH')) {
    exit;
}

$title = isset($attributes['title']) ? (string) $attributes['title'] : 'Система «Клиент-Банк» позволяет:';
$items = isset($attributes['items']) && is_array($attributes['items']) ? $attributes['items'] : [];
$items = array_values(array_filter(array_map('trim', $items), static function ($item) {
    return $item !== '';
}));
?>

<section <?php echo get_block_wrapper_attributes(['class' => 'sb-cb-group']); ?>>
    <h3 class="sb-cb-group__title"><?php echo esc_html($title); ?></h3>

    <?php if (!empty($items)) : ?>
        <ul class="sb-cb-points">
            <?php foreach ($items as $item) : ?>
                <li class="sb-cb-point">
                    <span class="sb-cb-point__icon" aria-hidden="true"></span>
                    <span class="sb-cb-point__text"><?php echo esc_html($item); ?></span>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</section>