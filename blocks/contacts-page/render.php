<?php
if (!defined('ABSPATH')) {
    exit;
}

$hero_title       = isset($attributes['heroTitle']) ? (string) $attributes['heroTitle'] : 'ТАРИФЫ БАНКА';
$hero_description = isset($attributes['heroDescription']) ? (string) $attributes['heroDescription'] : '';
$hero_image_url   = isset($attributes['heroImageUrl']) ? (string) $attributes['heroImageUrl'] : '';
$hero_image_left  = isset($attributes['heroImageLeft']) ? (int) $attributes['heroImageLeft'] : 440;
$hero_image_top   = isset($attributes['heroImageTop']) ? (int) $attributes['heroImageTop'] : 0;
$anchor_id        = isset($attributes['anchorId']) ? (string) $attributes['anchorId'] : 'pdf';

$intro_title      = isset($attributes['introTitle']) ? (string) $attributes['introTitle'] : '';
$intro_link_text  = isset($attributes['introLinkText']) ? (string) $attributes['introLinkText'] : '';
$intro_link_url   = isset($attributes['introLinkUrl']) ? (string) $attributes['introLinkUrl'] : '';
$final_cta_text   = isset($attributes['finalCtaText']) ? (string) $attributes['finalCtaText'] : '';
$final_cta_url    = isset($attributes['finalCtaUrl']) ? (string) $attributes['finalCtaUrl'] : '';

if ($hero_image_url === '' && function_exists('sb_alpha_asset')) {
    $hero_image_url = sb_alpha_asset('png/11.png');
}

if (function_exists('get_template_part')) {
    // Если v4-стили у тебя до сих пор живут отдельным template-part, можно временно переиспользовать их так.
    get_template_part('template-parts/route-partials/top-level-v4', 'styles');
}

ob_start();
get_template_part('template-parts/home', 'stack');
$stack_html = ob_get_clean();
?>



<div <?php echo get_block_wrapper_attributes(['class' => 'sbc-page']); ?>>
    <section class="block">
        <div class="container">
            <div class="hero-wrap" style="padding: var(--s-5);">
                <div class="v4-strips">
                    <div class="v4-strip reveal" data-reveal="scale">
                        <?php if ($hero_image_url !== '') : ?>
                            <img
                                style="left:<?php echo (int) $hero_image_left; ?>px; top:<?php echo (int) $hero_image_top; ?>px; overflow: visible;"
                                src="<?php echo esc_url($hero_image_url); ?>"
                                alt="Иллюстрация: РКО — банк, платежи и документы"
                            />
                        <?php endif; ?>

                        <div class="v4-strip-copy v4-glass">
                            <h3><?php echo esc_html($hero_title); ?></h3>
                            <p><?php echo esc_html($hero_description); ?></p>

                            <div class="v4-strip-actions">
                                <a class="btn primary" href="#<?php echo esc_attr($anchor_id); ?>">Перейти к содержимому</a>
                                <a class="btn outline" href="<?php echo esc_url(home_url('/')); ?>">На главную</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="block dashv2">
        <div class="container">
            <div class="bento">
                <div class="bento-card">
                    <?php echo $content; ?>
                </div>
                <?php echo $stack_html; ?>
            </div>
        </div>
    </section>
</div>
