<?php
if (!defined('ABSPATH')) {
    exit;
}

$kicker = (string) ($attributes['kicker'] ?? 'Вход');
$title  = (string) ($attributes['title'] ?? '');
$text   = (string) ($attributes['text'] ?? '');

$p_text  = (string) ($attributes['primaryText'] ?? '');
$p_url   = (string) ($attributes['primaryUrl'] ?? '');
$p_blank = !empty($attributes['primaryBlank']);

$s_text  = (string) ($attributes['secondaryText'] ?? '');
$s_url   = (string) ($attributes['secondaryUrl'] ?? '');
$s_blank = !empty($attributes['secondaryBlank']);
?>

<div <?php echo get_block_wrapper_attributes(['class' => 'access-card']); ?> style="margin-top: 10px;">
    <div class="kicker"><?php echo esc_html($kicker); ?></div>
    <div class="access-title"><?php echo esc_html($title); ?></div>

    <?php if ($text !== '') : ?>
        <div class="muted" style="margin-top:6px;"><?php echo esc_html($text); ?></div>
    <?php endif; ?>

    <div class="row" style="margin-top:12px; flex-wrap:wrap;">
        <?php if ($p_text !== '' && $p_url !== '') : ?>
            <a
                class="btn primary"
                href="<?php echo esc_url($p_url); ?>"
                <?php echo $p_blank ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>
            >
                <?php echo esc_html($p_text); ?>
            </a>
        <?php endif; ?>

        <?php if ($s_text !== '' && $s_url !== '') : ?>
            <a
                class="btn outline"
                href="<?php echo esc_url($s_url); ?>"
                <?php echo $s_blank ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>
            >
                <?php echo esc_html($s_text); ?>
            </a>
        <?php endif; ?>
    </div>
</div>