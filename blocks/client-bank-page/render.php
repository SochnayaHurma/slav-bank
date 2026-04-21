<?php
if (!defined('ABSPATH')) {
    exit;
}

$hero_title         = isset($attributes['heroTitle']) ? (string) $attributes['heroTitle'] : 'КЛИЕНТ-БАНК ВХОД ОНЛАЙН';
$hero_description   = isset($attributes['heroDescription']) ? (string) $attributes['heroDescription'] : '';
$hero_image_url     = isset($attributes['heroImageUrl']) ? (string) $attributes['heroImageUrl'] : '';
$hero_image_left    = isset($attributes['heroImageLeft']) ? (int) $attributes['heroImageLeft'] : 407;
$anchor_id          = isset($attributes['anchorId']) ? (string) $attributes['anchorId'] : 'content';

$access_kicker      = isset($attributes['accessKicker']) ? (string) $attributes['accessKicker'] : 'Вход';
$access_title       = isset($attributes['accessTitle']) ? (string) $attributes['accessTitle'] : 'КЛИЕНТ-БАНК ВХОД';
$access_text        = isset($attributes['accessText']) ? (string) $attributes['accessText'] : '';
$access_primary_txt = isset($attributes['accessPrimaryText']) ? (string) $attributes['accessPrimaryText'] : 'Войти →';
$access_primary_url = isset($attributes['accessPrimaryUrl']) ? (string) $attributes['accessPrimaryUrl'] : 'https://dbo.slavbank.ru:20101/';
$access_second_txt  = isset($attributes['accessSecondaryText']) ? (string) $attributes['accessSecondaryText'] : 'Правила безопасности';
$access_second_url  = isset($attributes['accessSecondaryUrl']) ? (string) $attributes['accessSecondaryUrl'] : '';

$lead_text          = isset($attributes['leadText']) ? (string) $attributes['leadText'] : '';
$entry_link_text    = isset($attributes['entryLinkText']) ? (string) $attributes['entryLinkText'] : 'КЛИЕНТ-БАНК ВХОД';
$entry_link_url     = isset($attributes['entryLinkUrl']) ? (string) $attributes['entryLinkUrl'] : 'https://dbo.slavbank.ru:20101/';

if ($access_second_url === '' && function_exists('sb_alpha_url')) {
    $access_second_url = sb_alpha_url('security');
}

if ($hero_image_url === '') {
    $candidates = [
        '/assets/b/3.jpg',
        '/assets/jpg/3.jpg',
        '/assets/png/3.jpg',
    ];

    foreach ($candidates as $candidate) {
        if (file_exists(get_template_directory() . $candidate)) {
            $hero_image_url = get_template_directory_uri() . $candidate;
            break;
        }
    }
}

if (function_exists('get_template_part')) {
    get_template_part('template-parts/route-partials/top-level-v4', 'styles');
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
                                style="left:<?php echo (int) $hero_image_left; ?>px;"
                                src="<?php echo esc_url($hero_image_url); ?>"
                                alt="Иллюстрация: РКО — банк, платежи и документы"
                            />
                        <?php endif; ?>

                        <div class="v4-strip-copy v4-glass">
                            <h3><?php echo esc_html($hero_title); ?></h3>
                            <p><?php echo esc_html($hero_description); ?></p>

                            <div class="v4-strip-actions">
                                <a class="btn primary" href="#<?php echo esc_attr($anchor_id); ?>">Содержание</a>
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
                    <div class="access-card" style="margin-top: 10px;">
                        <div class="kicker"><?php echo esc_html($access_kicker); ?></div>
                        <div class="access-title"><?php echo esc_html($access_title); ?></div>
                        <div class="muted" style="margin-top:6px;"><?php echo esc_html($access_text); ?></div>

                        <div class="row" style="margin-top:12px; flex-wrap:wrap;">
                            <a class="btn primary" href="<?php echo esc_url($access_primary_url); ?>" target="_blank" rel="noopener">
                                <?php echo esc_html($access_primary_txt); ?>
                            </a>

                            <?php if ($access_second_url !== '') : ?>
                                <a class="btn outline" href="<?php echo esc_url($access_second_url); ?>">
                                    <?php echo esc_html($access_second_txt); ?>
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>

                    <div class="sb-cb-body">
                        <?php if ($lead_text !== '') : ?>
                            <p class="sb-cb-lead"><?php echo esc_html($lead_text); ?></p>
                        <?php endif; ?>

                        <?php if ($entry_link_url !== '' && $entry_link_text !== '') : ?>
                            <div class="sb-cb-entry-link">
                                <a href="<?php echo esc_url($entry_link_url); ?>" target="_blank" rel="noreferrer noopener">
                                    <strong><?php echo esc_html($entry_link_text); ?></strong>
                                </a>
                            </div>
                        <?php endif; ?>

                        <?php echo $content; ?>
                    </div>
                </div>

                <?php echo $stack_html; ?>
            </div>
        </div>
    </section>
</div>
