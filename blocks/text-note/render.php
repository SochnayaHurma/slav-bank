<?php
if (!defined('ABSPATH')) {
    exit;
}

$text = (string) ($attributes['text'] ?? '');
$tone = (string) ($attributes['tone'] ?? 'strong');

if (!in_array($tone, ['strong', 'soft'], true)) {
    $tone = 'strong';
}
?>

<div <?php echo get_block_wrapper_attributes(['class' => 'sb-note sb-note--' . $tone]); ?>>
    <p><?php echo esc_html($text); ?></p>
</div>