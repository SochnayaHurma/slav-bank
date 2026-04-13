<?php
if (!defined('ABSPATH')) {
    exit;
}

$title = (string) ($attributes['title'] ?? 'Информация банка');
$tabs  = isset($attributes['tabs']) && is_array($attributes['tabs']) ? $attributes['tabs'] : [];

$tabs = array_values(array_filter($tabs, static function ($tab) {
    return is_array($tab) && !empty($tab['id']) && !empty($tab['label']);
}));

if (empty($tabs)) {
    return '';
}

$first_id = (string) ($tabs[0]['id'] ?? 'tab-0');
?>

<div <?php echo get_block_wrapper_attributes(['class' => 'sb-doctabs-board']); ?>>
    <div class="kicker muted">
        <h3><?php echo esc_html($title); ?></h3>
    </div>

    <div class="dash-tabs" role="tablist" aria-label="Документы">
        <?php foreach ($tabs as $index => $tab) : ?>
            <?php
            $tab_id = (string) $tab['id'];
            $is_active = $index === 0;
            ?>
            <button
                class="seg"
                role="tab"
                data-doc-tab="<?php echo esc_attr($tab_id); ?>"
                aria-selected="<?php echo $is_active ? 'true' : 'false'; ?>"
                type="button"
            >
                <?php echo esc_html((string) $tab['label']); ?>
            </button>
        <?php endforeach; ?>
    </div>

    <div class="dash-panels" style="margin-top: 8px">
        <?php foreach ($tabs as $index => $tab) : ?>
            <?php
            $tab_id    = (string) $tab['id'];
            $tab_type  = (string) ($tab['type'] ?? 'list');
            $intro     = (string) ($tab['intro'] ?? '');
            $rows      = isset($tab['rows']) && is_array($tab['rows']) ? $tab['rows'] : [];
            $is_active = $index === 0;
            ?>
            <div
                class="dash-panel<?php echo $is_active ? ' is-active' : ''; ?>"
                data-doc-panel="<?php echo esc_attr($tab_id); ?>"
                <?php echo $is_active ? '' : 'hidden'; ?>
            >
                <?php if ($intro !== '') : ?>
                    <div class="muted" style="line-height: 1.6">
                        <?php echo esc_html($intro); ?>
                    </div>
                <?php endif; ?>

                <?php if ($tab_type === 'hero') : ?>
                    <?php
                    $hero_title    = (string) ($tab['heroTitle'] ?? '');
                    $hero_subtitle = (string) ($tab['heroSubtitle'] ?? '');
                    $hero_url      = (string) ($tab['heroUrl'] ?? '');
                    ?>
                    <?php if ($hero_url !== '' && $hero_title !== '') : ?>
                        <a class="doc-hero" href="<?php echo esc_url($hero_url); ?>" target="_blank" rel="noopener" style="margin-top: 12px">
                            <span class="ico" aria-hidden="true">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="2" opacity=".8" />
                                    <path d="M14 3v4a2 2 0 0 0 2 2h4" stroke="currentColor" stroke-width="2" opacity=".5" />
                                </svg>
                            </span>
                            <span>
                                <strong><?php echo esc_html($hero_title); ?></strong>
                                <?php if ($hero_subtitle !== '') : ?>
                                    <small class="muted"><?php echo esc_html($hero_subtitle); ?></small>
                                <?php endif; ?>
                            </span>
                            <span class="arrow" aria-hidden="true">→</span>
                        </a>
                    <?php endif; ?>
                <?php else : ?>
                    <?php if (!empty($rows)) : ?>
                        <div class="doc-list" style="margin-top: 12px">
                            <?php foreach ($rows as $row) : ?>
                                <?php
                                $date  = (string) ($row['date'] ?? '');
                                $rtitle = (string) ($row['title'] ?? '');
                                $ext   = (string) ($row['ext'] ?? '');
                                $url   = (string) ($row['url'] ?? '');
                                ?>
                                <?php if ($url !== '' && $rtitle !== '') : ?>
                                    <a class="doc-row" href="<?php echo esc_url($url); ?>" target="_blank" rel="noopener">
                                        <span class="doc-date"><?php echo esc_html($date); ?></span>
                                        <span class="doc-title"><?php echo esc_html($rtitle); ?></span>
                                        <span class="doc-ext"><?php echo esc_html($ext); ?></span>
                                        <span class="doc-arrow" aria-hidden="true">→</span>
                                    </a>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>
</div>