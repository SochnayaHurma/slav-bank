<?php
/**
 * Template Name: Отчетность — pilot slots shell
 * Template Post Type: page
 */

if (!defined('ABSPATH')) {
    exit;
}

$page = get_post();
$page_mode = function_exists('sb_alpha_get_page_mode') ? sb_alpha_get_page_mode($page) : 'legacy_delegate';
$managed_markup = '';
$content_source = 'hardcoded_fallback';

if ($page instanceof WP_Post) {
    $slot_markup = function_exists('sb_alpha_get_page_slot_markup')
        ? trim((string) sb_alpha_get_page_slot_markup('reporting-content', $page))
        : '';

    $content_markup = trim((string) apply_filters('the_content', $page->post_content));

    if ($page_mode === 'slots' && $slot_markup !== '') {
        $managed_markup = $slot_markup;
        $content_source = 'slot:reporting-content';
    } elseif ($content_markup !== '') {
        $managed_markup = $content_markup;
        $content_source = $page_mode === 'slots' ? 'page-content-fallback' : 'page-content';
    }
}

$annual_reports = function_exists('sb_alpha_get_reporting_annual_reports')
    ? sb_alpha_get_reporting_annual_reports()
    : [];

$has_2025_report = false;
foreach ($annual_reports as $report_item) {
    $title = isset($report_item['title']) ? (string) $report_item['title'] : '';
    if (strpos($title, '2025') !== false) {
        $has_2025_report = true;
        break;
    }
}

if (!$has_2025_report) {
    array_unshift($annual_reports, [
        'title' => 'Годовая бухгалтерская (финансовая) отчетность за 2025 год.',
        'footer' => '(Опубликовано 02.04.2026г. Планируется к утверждению на годовом ОСА 21.04.2026г.)',
        'url' => 'https://slavbank.ru/wp-content/uploads/otchet-2025-website.pdf',
    ]);
}

$mode_labels = [
    'slots' => 'slots',
    'template_only' => 'template_only',
    'legacy_delegate' => 'legacy_delegate',
];

get_header();
?>

<style>
  .reporting-pilot-note {
    margin: 0 0 16px;
    padding: 12px 14px;
    border: 1px dashed rgba(0, 103, 128, .25);
    border-radius: 16px;
    background: rgba(0, 103, 128, .06);
  }

  .reporting-pilot-note__row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 0 8px;
  }

  .reporting-pilot-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, .85);
    border: 1px solid rgba(15, 23, 42, .08);
    font-size: 13px;
    line-height: 1.2;
  }

  .reporting-slot-shell {
    min-width: 0;
  }

  .reporting-slot-shell > *:first-child {
    margin-top: 0 !important;
  }

  .reporting-slot-shell > *:last-child {
    margin-bottom: 0 !important;
  }

  .reporting-slot-shell .wp-block-table,
  .reporting-slot-shell table {
    width: 100%;
    max-width: 100%;
    border-collapse: collapse;
    margin: 1rem 0 1.25rem;
    overflow-x: auto;
    display: block;
  }

  .reporting-slot-shell table tbody {
    width: 100%;
  }

  .reporting-slot-shell td,
  .reporting-slot-shell th {
    padding: 12px 14px;
    border: 1px solid rgba(15, 23, 42, .08);
    vertical-align: top;
    background: rgba(255, 255, 255, .72);
  }

  .reporting-slot-shell details {
    margin: 0 0 14px;
    border: 1px solid rgba(15, 23, 42, .08);
    border-radius: 18px;
    background: rgba(255, 255, 255, .74);
    overflow: hidden;
  }

  .reporting-slot-shell summary {
    cursor: pointer;
    padding: 14px 18px;
    font-weight: 700;
    list-style: none;
    background: rgba(0, 103, 128, .06);
  }

  .reporting-slot-shell details > :not(summary) {
    padding-left: 18px;
    padding-right: 18px;
  }

  .reporting-slot-shell .wp-block-file,
  .reporting-slot-shell .wp-block-buttons,
  .reporting-slot-shell .wp-block-image,
  .reporting-slot-shell .wp-block-group,
  .reporting-slot-shell .wp-block-columns {
    max-width: 100%;
  }

  .reporting-slot-shell img,
  .reporting-slot-shell iframe,
  .reporting-slot-shell object {
    max-width: 100%;
    height: auto;
  }

  .reporting-slot-shell .wp-block-file__button,
  .reporting-slot-shell .wp-block-button__link {
    border-radius: 999px;
  }

  .reporting-slot-shell--fallback .doc-shelf {
    margin-top: 18px;
  }
</style>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5)">
        <div class="row" style="align-items: flex-start; gap: var(--s-4); flex-wrap: wrap">
          <div style="min-width: 280px; flex: 1 1 520px">
            <div class="kicker">Информация банка</div>
            <h1 style="margin: 8px 0 10px">Отчетность · pilot</h1>
            <p style="max-width: 78ch">
              Пилотная страница: внешний каркас и стили остаются в теме,
              а содержимое может поступать из управляемого slot-блока или из редактора WordPress.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap: wrap">
              <a class="btn primary" href="#content">Содержание</a>
              <a class="btn outline" href="<?php echo esc_url(home_url('/')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self: flex-start">
            <a href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>" class="mono badge">Реквизиты</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>" class="mono badge">Информация банка</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position: relative">
          <?php if (current_user_can('manage_options')) : ?>
            <div class="reporting-pilot-note">
              <div class="reporting-pilot-note__row">
                <span class="reporting-pilot-pill"><strong>page mode:</strong> <?php echo esc_html($mode_labels[$page_mode] ?? $page_mode); ?></span>
                <span class="reporting-pilot-pill"><strong>content source:</strong> <?php echo esc_html($content_source); ?></span>
              </div>
              <div style="font-size:13px; color:#475569;">
                Для теста откройте страницу «Отчетность», выставьте <strong>Режим страницы = slots</strong>.
                Если в редакторе уже есть блок с классом <code>sb-slot sb-slot--reporting-content</code>, шаблон возьмёт именно его.
                Если slot ещё не размечен, пилот временно возьмёт обычный page content.
              </div>
            </div>
          <?php endif; ?>

          <?php if ($managed_markup !== '') : ?>
            <div class="reporting-slot-shell prose">
              <?php echo $managed_markup; ?>
            </div>
          <?php else : ?>
            <div class="reporting-slot-shell reporting-slot-shell--fallback prose">
              <h2 class="kicker"><strong>ОТЧЕТНОСТЬ АО НКБ «СЛАВЯНБАНК»</strong></h2>
              <p>
                Контент из редактора пока не найден, поэтому ниже показан безопасный fallback.
                Это нужно только для первого теста шаблона — после перевода страницы в slot-режим тело страницы будет браться из WordPress.
              </p>

              <div class="doc-shelf">
                <?php foreach ($annual_reports as $item) : ?>
                  <?php
                    $item_title = isset($item['title']) ? (string) $item['title'] : '';
                    $item_footer = isset($item['footer']) ? (string) $item['footer'] : '';
                    $item_url = isset($item['url']) ? (string) $item['url'] : '#';
                  ?>
                  <a class="doc-card" href="<?php echo esc_url($item_url); ?>" target="_blank" rel="noopener">
                    <span class="doc-ext">PDF</span>
                    <div class="doc-body">
                      <div class="doc-title"><?php echo esc_html($item_title); ?></div>
                      <?php if ($item_footer !== '') : ?>
                        <div style="font-size: 10px" class="muted"><?php echo esc_html($item_footer); ?></div>
                      <?php endif; ?>
                    </div>
                    <span class="doc-arrow">→</span>
                  </a>
                <?php endforeach; ?>
              </div>
            </div>
          <?php endif; ?>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
