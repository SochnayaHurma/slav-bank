<?php
if (!defined('ABSPATH')) {
    exit;
}

function sb_alpha_normalize_slot_name(string $slot): string
{
    $slot = strtolower(trim($slot));
    $slot = preg_replace('/[^a-z0-9\-_]+/', '-', $slot) ?: '';

    return trim($slot, '-');
}

/**
 * @param WP_Post|int|string|null $context
 */
function sb_alpha_resolve_page_context($context = null): ?WP_Post
{
    if ($context instanceof WP_Post) {
        return $context;
    }

    if (is_numeric($context)) {
        $post = get_post((int) $context);
        return $post instanceof WP_Post ? $post : null;
    }

    if (is_string($context) && trim($context) !== '') {
        $post = get_page_by_path(trim($context, '/'));
        return $post instanceof WP_Post ? $post : null;
    }

    $post = get_post();
    return $post instanceof WP_Post ? $post : null;
}

function sb_alpha_block_has_class(array $block, string $class_name): bool
{
    $block_class = trim((string) ($block['attrs']['className'] ?? ''));
    if ($block_class === '' || $class_name === '') {
        return false;
    }

    $classes = preg_split('/\s+/', $block_class) ?: [];
    return in_array($class_name, $classes, true);
}

function sb_alpha_collect_slot_blocks(array $blocks, string $slot, array &$matches): void
{
    $slot_class = 'sb-slot--' . $slot;

    foreach ($blocks as $block) {
        if (!is_array($block)) {
            continue;
        }

        if (sb_alpha_block_has_class($block, $slot_class)) {
            $matches[] = $block;
        }

        if (!empty($block['innerBlocks']) && is_array($block['innerBlocks'])) {
            sb_alpha_collect_slot_blocks($block['innerBlocks'], $slot, $matches);
        }
    }
}

function sb_alpha_render_slot_block(array $block): string
{
    if (!empty($block['innerBlocks']) && is_array($block['innerBlocks'])) {
        $html = '';

        foreach ($block['innerBlocks'] as $inner_block) {
            if (is_array($inner_block)) {
                $html .= render_block($inner_block);
            }
        }

        return $html;
    }

    return render_block($block);
}

/**
 * @param WP_Post|int|string|null $context
 */
function sb_alpha_get_page_slot_markup(string $slot, $context = null): string
{
    $slot = sb_alpha_normalize_slot_name($slot);
    if ($slot === '') {
        return '';
    }

    $page = sb_alpha_resolve_page_context($context);
    if (!$page instanceof WP_Post) {
        return '';
    }

    $content = trim((string) $page->post_content);
    if ($content === '') {
        return '';
    }

    $blocks = parse_blocks($content);
    if (empty($blocks) || !is_array($blocks)) {
        return '';
    }

    $matches = [];
    sb_alpha_collect_slot_blocks($blocks, $slot, $matches);

    if (empty($matches)) {
        return '';
    }

    $markup = '';

    foreach ($matches as $block) {
        $markup .= sb_alpha_render_slot_block($block);
    }

    return trim($markup);
}

/**
 * @param WP_Post|int|string|null $context
 */
function sb_alpha_has_page_slot(string $slot, $context = null): bool
{
    return sb_alpha_get_page_slot_markup($slot, $context) !== '';
}

/**
 * @param callable|string $fallback
 * @param WP_Post|int|string|null $context
 */
function sb_alpha_render_page_slot(string $slot, $fallback = '', $context = null): void
{
    $markup = sb_alpha_get_page_slot_markup($slot, $context);

    if ($markup !== '') {
        echo $markup;
        return;
    }

    if (is_callable($fallback)) {
        $fallback = (string) call_user_func($fallback, sb_alpha_resolve_page_context($context));
    }

    echo (string) $fallback;
}