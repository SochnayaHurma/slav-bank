<?php
if (!defined('ABSPATH')) {
    exit;
}

$variant = (string) ($attributes['variant'] ?? 'v4');
if (!in_array($variant, ['v4', 'simple'], true)) {
    $variant = 'v4';
}

$title = (string) ($attributes['title'] ?? '');
$description = (string) ($attributes['description'] ?? '');
$image_url = (string) ($attributes['imageUrl'] ?? '');
$image_left = (int) ($attributes['imageLeft'] ?? 0);
$image_top = (int) ($attributes['imageTop'] ?? 0);

$primary_text = (string) ($attributes['primaryText'] ?? '');
$primary_url = (string) ($attributes['primaryUrl'] ?? '');

$secondary_text = (string) ($attributes['secondaryText'] ?? '');
$secondary_url = (string) ($attributes['secondaryUrl'] ?? '');

$tertiary_text = (string) ($attributes['tertiaryText'] ?? '');
$tertiary_url = (string) ($attributes['tertiaryUrl'] ?? '');

if ($variant === 'v4' && function_exists('get_template_part')) {
    // Быстрый путь переиспользовать существующие v4-стили.
    // Если позже захочешь, можно вынести их целиком в общий CSS-handle.
    get_template_part('template-parts/python/top-level-v4', 'styles');
}
?>

<?php if ($variant === 'simple') : ?>
<section <?php echo get_block_wrapper_attributes(['class' => 'block']); ?>>
    <div class="container">
        <div class="sb-simple-hero">
            <div class="sb-simple-hero__copy">
                <?php if ($title !== '') : ?>
                    <h1 class="sb-simple-hero__title"><?php echo esc_html($title); ?></h1>
                <?php endif; ?>

                <?php if ($description !== '') : ?>
                    <p class="sb-simple-hero__text"><?php echo esc_html($description); ?></p>
                <?php endif; ?>

                <div class="sb-simple-hero__actions">
                    <?php if ($primary_text !== '' && $primary_url !== '') : ?>
                        <a class="btn primary" href="<?php echo esc_url($primary_url); ?>">
                            <?php echo esc_html($primary_text); ?>
                        </a>
                    <?php endif; ?>

                    <?php if ($secondary_text !== '' && $secondary_url !== '') : ?>
                        <a class="btn outline" href="<?php echo esc_url($secondary_url); ?>">
                            <?php echo esc_html($secondary_text); ?>
                        </a>
                    <?php endif; ?>

                    <?php if ($tertiary_text !== '' && $tertiary_url !== '') : ?>
                        <a class="btn outline" href="<?php echo esc_url($tertiary_url); ?>">
                            <?php echo esc_html($tertiary_text); ?>
                        </a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</section>
<?php else : ?>
<section <?php echo get_block_wrapper_attributes(['class' => 'block']); ?>>
    <div class="container">
        <div class="hero-wrap" style="padding: var(--s-5);">
            <div class="v4-strips">
                <div class="v4-strip reveal" data-reveal="scale">
                    <?php if ($image_url !== '') : ?>
                        <img
                            style="left:<?php echo (int) $image_left; ?>px; top:<?php echo (int) $image_top; ?>px;"
                            src="<?php echo esc_url($image_url); ?>"
                            alt="Иллюстрация страницы"
                        />
                    <?php endif; ?>

                    <div class="v4-strip-copy v4-glass">
                        <?php if ($title !== '') : ?>
                            <h3><?php echo esc_html($title); ?></h3>
                        <?php endif; ?>

                        <?php if ($description !== '') : ?>
                            <p><?php echo esc_html($description); ?></p>
                        <?php endif; ?>

                        <div class="v4-strip-actions">
                            <?php if ($primary_text !== '' && $primary_url !== '') : ?>
                                <a class="btn primary" href="<?php echo esc_url($primary_url); ?>">
                                    <?php echo esc_html($primary_text); ?>
                                </a>
                            <?php endif; ?>

                            <?php if ($secondary_text !== '' && $secondary_url !== '') : ?>
                                <a class="btn outline" href="<?php echo esc_url($secondary_url); ?>">
                                    <?php echo esc_html($secondary_text); ?>
                                </a>
                            <?php endif; ?>

                            <?php if ($tertiary_text !== '' && $tertiary_url !== '') : ?>
                                <a class="btn outline" href="<?php echo esc_url($tertiary_url); ?>">
                                    <?php echo esc_html($tertiary_text); ?>
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>