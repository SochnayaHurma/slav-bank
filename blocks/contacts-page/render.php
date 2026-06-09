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
    get_template_part('template-parts/top-level-v4', 'styles');
}

ob_start();
get_template_part('template-parts/home', 'stack');
$stack_html = ob_get_clean();

$default_hero_buttons = [
    ['text' => 'Перейти к содержимому', 'url' => '#content', 'style' => 'primary'],
    ['text' => 'На главную', 'url' => home_url('/'), 'style' => 'outline'],
];
$hero_buttons = array_key_exists('heroButtons', $attributes) && is_array($attributes['heroButtons'])
    ? $attributes['heroButtons']
    : $default_hero_buttons;

$render_hero_buttons = static function (array $buttons): void {
    foreach ($buttons as $button) {
        if (!is_array($button)) {
            continue;
        }

        $text = isset($button['text']) ? (string) $button['text'] : '';
        $url = isset($button['url']) ? (string) $button['url'] : '';
        $style = isset($button['style']) && $button['style'] === 'primary' ? 'primary' : 'outline';

        if ($text === '' || $url === '') {
            continue;
        }
        ?>
        <a class="btn <?php echo esc_attr($style); ?>" href="<?php echo esc_url($url); ?>"><?php echo esc_html($text); ?></a>
        <?php
    }
};
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
                                <?php $render_hero_buttons($hero_buttons); ?>
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
