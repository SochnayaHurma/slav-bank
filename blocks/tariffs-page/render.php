<?php
if (!defined('ABSPATH')) {
    exit;
}

$hero_title       = isset($attributes['heroTitle']) ? (string) $attributes['heroTitle'] : 'ТАРИФЫ БАНКА';
$hero_description = isset($attributes['heroDescription']) ? (string) $attributes['heroDescription'] : '';
$hero_image_url   = isset($attributes['heroImageUrl']) ? (string) $attributes['heroImageUrl'] : '';
$hero_image_left  = isset($attributes['heroImageLeft']) ? (int) $attributes['heroImageLeft'] : 700;
$hero_image_top   = isset($attributes['heroImageTop']) ? (int) $attributes['heroImageTop'] : 77;
$anchor_id        = isset($attributes['anchorId']) ? (string) $attributes['anchorId'] : 'pdf';

$intro_title      = isset($attributes['introTitle']) ? (string) $attributes['introTitle'] : '';
$intro_link_text  = isset($attributes['introLinkText']) ? (string) $attributes['introLinkText'] : '';
$intro_link_url   = isset($attributes['introLinkUrl']) ? (string) $attributes['introLinkUrl'] : '';
$final_cta_text   = isset($attributes['finalCtaText']) ? (string) $attributes['finalCtaText'] : '';
$final_cta_url    = isset($attributes['finalCtaUrl']) ? (string) $attributes['finalCtaUrl'] : '';

if ($hero_image_url === '' && function_exists('sb_alpha_asset')) {
    $hero_image_url = sb_alpha_asset('png/12.png');
}

if (function_exists('get_template_part')) {
    // Если v4-стили у тебя до сих пор живут отдельным template-part, можно временно переиспользовать их так.
    get_template_part('template-parts/python/top-level-v4', 'styles');
}

ob_start();
get_template_part('template-parts/home', 'stack');
$stack_html = ob_get_clean();
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
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

    <section class="block dashv2" id="<?php echo esc_attr($anchor_id); ?>">
        <div class="container">
            <div class="bento">
                <div class="bento-card" style="padding: var(--s-4); position:relative;">
                    <div class="prose">
                        <div class="entry-content">
                            <h2 class="kicker">
                                <br>
                                <?php echo esc_html($intro_title); ?>
                                <?php if ($intro_link_url !== '' && $intro_link_text !== '') : ?>
                                    <strong>
                                        <a href="<?php echo esc_url($intro_link_url); ?>" target="_blank" rel="noreferrer noopener">
                                            <?php echo esc_html($intro_link_text); ?>
                                        </a>
                                    </strong>
                                <?php endif; ?>
                            </h2>

                            <?php echo $content; ?>

                            <?php if ($final_cta_url !== '' && $final_cta_text !== '') : ?>
                                <p class="has-text-align-center has-dark-blue-color has-text-color">
                                    <strong>
                                        <span>
                                            <a href="<?php echo esc_url($final_cta_url); ?>" target="_blank" rel="noreferrer noopener">
                                                <?php echo esc_html($final_cta_text); ?>
                                            </a>
                                        </span>
                                    </strong>
                                </p>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>

                <?php echo $stack_html; ?>
            </div>
        </div>
    </section>
</div>