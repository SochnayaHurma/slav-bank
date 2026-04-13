<?php
if (!defined('ABSPATH')) {
    exit;
}

$sections = isset($attributes['sections']) && is_array($attributes['sections'])
    ? $attributes['sections']
    : [];

$sections = array_values(array_filter($sections, static function ($section) {
    return is_array($section) && !empty($section['html']);
}));

if (empty($sections)) {
    return '';
}

$class_map = [
    'kicker' => 'kicker',
    'accent' => 'has-dark-blue-color has-text-color',
    'body'   => '',
    'figure' => 'figure-body',
];

$allowed_tags = [
    'a' => ['href' => [], 'target' => [], 'rel' => []],
    'br' => [],
    'strong' => [],
    'em' => [],
    'b' => [],
    'i' => [],
    'span' => ['class' => []],
    'div' => ['class' => []],
];

?>

<div <?php echo get_block_wrapper_attributes(['class' => 'sb-html-sections']); ?>>
    <?php foreach ($sections as $section) : ?>
        <?php
        $tag = in_array(($section['tag'] ?? 'p'), ['h3', 'p', 'div'], true)
            ? (string) $section['tag']
            : 'p';

        $tone = (string) ($section['tone'] ?? 'body');
        $class = $class_map[$tone] ?? '';

        $html = wp_kses((string) $section['html'], $allowed_tags);
        ?>
        <<?php echo esc_html($tag); ?> class="<?php echo esc_attr(trim('sb-html-section ' . $class)); ?>">
            <?php echo $html; ?>
        </<?php echo esc_html($tag); ?>>
    <?php endforeach; ?>
</div>