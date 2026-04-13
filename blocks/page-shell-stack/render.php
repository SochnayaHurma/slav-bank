<?php
if (!defined('ABSPATH')) {
    exit;
}

$anchor_id  = (string) ($attributes['anchorId'] ?? 'content');
$show_alert = !empty($attributes['showAlert']);
$alert_title = (string) ($attributes['alertTitle'] ?? '');
$alert_text  = (string) ($attributes['alertText'] ?? '');

ob_start();
get_template_part('template-parts/home', 'stack');
$stack_html = ob_get_clean();
?>

<section <?php echo get_block_wrapper_attributes(['class' => 'block dashv2']); ?> id="<?php echo esc_attr($anchor_id); ?>">
    <div class="container">
        <div class="bento">
            <div class="bento-card" style="padding: var(--s-4); position:relative;">
                <?php if ($show_alert && ($alert_title !== '' || $alert_text !== '')) : ?>
                    <div class="alert">
                        <div class="alert-dot" aria-hidden="true"></div>
                        <div>
                            <?php if ($alert_title !== '') : ?>
                                <div style="font-weight:600;"><?php echo esc_html($alert_title); ?></div>
                            <?php endif; ?>
                            <?php if ($alert_text !== '') : ?>
                                <div class="muted" style="margin-top:4px;"><?php echo esc_html($alert_text); ?></div>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endif; ?>

                <div class="sb-shell-body">
                    <?php echo $content; ?>
                </div>
            </div>

            <?php echo $stack_html; ?>
        </div>
    </div>
</section>