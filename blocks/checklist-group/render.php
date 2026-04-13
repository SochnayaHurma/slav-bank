<?php
if (!defined('ABSPATH')) {
    exit;
}

$title = (string) ($attributes['title'] ?? '');
$items = isset($attributes['items']) && is_array($attributes['items']) ? $attributes['items'] : [];
$items = array_values(array_filter(array_map('trim', $items), static function ($item) {
    return $item !== '';
}));
?>

<section <?php echo get_block_wrapper_attributes(['class' => 'sb-check-group']); ?>>
    <?php if ($title !== '') : ?>
        <h3 class="sb-check-group__title"><?php echo esc_html($title); ?></h3>
    <?php endif; ?>

    <?php if (!empty($items)) : ?>
        <ul class="sb-check-points">
            <?php foreach ($items as $item) : ?>
                <li class="sb-check-point">
                    <span class="sb-check-point__icon" aria-hidden="true"></span>
                    <span class="sb-check-point__text"><?php echo esc_html($item); ?></span>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</section>