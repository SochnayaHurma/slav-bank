<?php
if (!defined('ABSPATH')) {
    exit;
}

$hero_title       = isset($attributes['heroTitle']) ? (string) $attributes['heroTitle'] : 'ЮРИДИЧЕСКИМ ЛИЦАМ';
$hero_description = isset($attributes['heroDescription']) ? (string) $attributes['heroDescription'] : '';
$hero_image_url   = isset($attributes['heroImageUrl']) ? (string) $attributes['heroImageUrl'] : '';
$anchor_id        = isset($attributes['anchorId']) ? (string) $attributes['anchorId'] : 'content';
$alert_title      = isset($attributes['alertTitle']) ? (string) $attributes['alertTitle'] : 'ЮРИДИЧЕСКИМ ЛИЦАМ';
$alert_text       = isset($attributes['alertText']) ? (string) $attributes['alertText'] : '';

if ($hero_image_url === '' && function_exists('sb_alpha_asset')) {
    // подкорректируй путь, если картинка лежит у тебя в другом месте
    $hero_image_url = sb_alpha_asset('png/3.jpg');
}

if (function_exists('get_template_part')) {
    get_template_part('template-parts/top-level-v4', 'styles');
}

$routes = function_exists('sb_contacts_routes') ? sb_contacts_routes() : [
    'home' => home_url('/'),
    'write_to_bank' => home_url('/napisat-v-bank/#form'),
];

$default_hero_buttons = [
    ['text' => 'Содержание', 'url' => '#' . $anchor_id, 'style' => 'primary'],
    ['text' => 'На главную', 'url' => $routes['home'] ?? home_url('/'), 'style' => 'outline'],
    ['text' => 'Связаться', 'url' => $routes['write_to_bank'] ?? home_url('/napisat-v-bank/#form'), 'style' => 'outline'],
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

    <section class="block dashv2" id="<?php echo esc_attr($anchor_id); ?>">
        <div class="container">
            <div class="bento">
                <div class="bento-card" style="padding: var(--s-4); position:relative;">
                    <div class="alert">
                        <div class="alert-dot" aria-hidden="true"></div>
                        <div>
                            <div style="font-weight:600;"><?php echo esc_html($alert_title); ?></div>
                            <div class="muted" style="margin-top:4px;"><?php echo esc_html($alert_text); ?></div>
                        </div>
                    </div>

                    <div class="sb-le-body">
                        <?php echo $content; ?>
                    </div>
                </div>

                <?php echo $stack_html; ?>
            </div>
        </div>
    </section>
</div>
