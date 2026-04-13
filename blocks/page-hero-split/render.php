<?php
if (!defined('ABSPATH')) {
    exit;
}

$kicker = (string) ($attributes['kicker'] ?? 'О банке');
$title  = (string) ($attributes['title'] ?? '');
$description = (string) ($attributes['description'] ?? '');

$actions = isset($attributes['actions']) && is_array($attributes['actions'])
    ? array_values(array_filter($attributes['actions'], static function ($item) {
        return is_array($item) && !empty($item['text']) && !empty($item['url']);
    }))
    : [];

$pill_items = isset($attributes['pillItems']) && is_array($attributes['pillItems'])
    ? array_values(array_filter($attributes['pillItems'], static function ($item) {
        return is_array($item) && !empty($item['text']);
    }))
    : [];

/*
 * Backward compatibility:
 * если старые поля были сохранены, а новых массивов ещё нет.
 */
if (empty($actions)) {
    $legacy_actions = [];

    if (!empty($attributes['primaryText']) && !empty($attributes['primaryUrl'])) {
        $legacy_actions[] = [
            'text' => (string) $attributes['primaryText'],
            'url' => (string) $attributes['primaryUrl'],
            'variant' => 'primary',
            'newTab' => false,
        ];
    }

    if (!empty($attributes['secondaryText']) && !empty($attributes['secondaryUrl'])) {
        $legacy_actions[] = [
            'text' => (string) $attributes['secondaryText'],
            'url' => (string) $attributes['secondaryUrl'],
            'variant' => 'outline',
            'newTab' => false,
        ];
    }

    if (!empty($attributes['tertiaryText']) && !empty($attributes['tertiaryUrl'])) {
        $legacy_actions[] = [
            'text' => (string) $attributes['tertiaryText'],
            'url' => (string) $attributes['tertiaryUrl'],
            'variant' => 'outline',
            'newTab' => false,
        ];
    }

    $actions = $legacy_actions;
}

if (empty($pill_items)) {
    $legacy_pill_items = [];

    if (!empty($attributes['badge'])) {
        $legacy_pill_items[] = [
            'type' => 'badge',
            'text' => (string) $attributes['badge'],
        ];
    }

    if (!empty($attributes['phoneText']) && !empty($attributes['phoneHref'])) {
        $legacy_pill_items[] = [
            'type' => 'link',
            'text' => (string) $attributes['phoneText'],
            'href' => (string) $attributes['phoneHref'],
            'mono' => true,
        ];
    }

    if (
        !empty($attributes['phoneText']) && !empty($attributes['phoneHref']) &&
        !empty($attributes['emailText']) && !empty($attributes['emailHref'])
    ) {
        $legacy_pill_items[] = [
            'type' => 'text',
            'text' => '·',
            'muted' => true,
        ];
    }

    if (!empty($attributes['emailText']) && !empty($attributes['emailHref'])) {
        $legacy_pill_items[] = [
            'type' => 'link',
            'text' => (string) $attributes['emailText'],
            'href' => (string) $attributes['emailHref'],
            'mono' => false,
        ];
    }

    $pill_items = $legacy_pill_items;
}

$has_pill = !empty($pill_items);
?>

<section <?php echo get_block_wrapper_attributes(['class' => 'block']); ?>>
    <div class="container">
        <div class="hero-wrap bento-hero" style="padding: var(--s-5)">
            <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
                <div style="min-width: 280px; flex: 1 1 520px;">
                    <?php if ($kicker !== '') : ?>
                        <div class="kicker"><?php echo esc_html($kicker); ?></div>
                    <?php endif; ?>
                    <?php if ($title !== '') : ?>
                        <h1 class="sb-hero-split__title"><?php echo esc_html($title); ?></h1>
                    <?php endif; ?>
                    
                    <?php if ($description !== '') : ?>
                        <div style="max-width:78ch; ">
                            <?php echo esc_html($description); ?>
                        </div>
                    <?php endif; ?>

                    <?php if (!empty($actions)) : ?>
                        <div class="row" style="margin-top: var(--s-4); flex-wrap: wrap">
                            <?php foreach ($actions as $action) : ?>
                                <?php
                                $text = (string) ($action['text'] ?? '');
                                $url = (string) ($action['url'] ?? '');
                                $variant = (string) ($action['variant'] ?? 'outline');
                                $new_tab = !empty($action['newTab']);
                                $btn_class = $variant === 'primary' ? 'btn primary' : 'btn outline';
                                ?>
                                <a
                                    class="<?php echo esc_attr($btn_class); ?>"
                                    href="<?php echo esc_url($url); ?>"
                                    <?php echo $new_tab ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>
                                >
                                    <?php echo esc_html($text); ?>
                                </a>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>


                <?php if ($has_pill) : ?>
                    <div class="pill">
                        <?php foreach ($pill_items as $item) : ?>
                            <?php
                            $type = (string) ($item['type'] ?? 'text');
                            $text = (string) ($item['text'] ?? '');
                            $href = (string) ($item['href'] ?? '');
                            $mono = !empty($item['mono']);
                            $muted = !empty($item['muted']);
                            $new_tab = !empty($item['newTab']);
                            ?>

                            <?php if ($type === 'badge') : ?>
                                <span class="badge"><?php echo esc_html($text); ?></span>

                            <?php elseif ($type === 'link' && $href !== '') : ?>
                                <a
                                    href="<?php echo esc_url($href); ?>"
                                    class="mono badge"
                                    <?php echo $new_tab ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>
                                >
                                    <?php echo esc_html($text); ?>
                                </a>

                            <?php else : ?>
                                <span class="<?php echo $muted ? 'muted' : ''; ?>">
                                    <?php echo esc_html($text); ?>
                                </span>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>