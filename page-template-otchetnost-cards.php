<?php
/**
 * Template Name: Отчетность — cards shell
 * Template Post Type: page
 */

if (!defined('ABSPATH')) {
    exit;
}

require_once get_template_directory() . '/inc/reporting-page-data.php';

$page = get_post();
$hero_slot = function_exists('sb_alpha_get_page_slot_markup') && $page instanceof WP_Post
    ? trim((string) sb_alpha_get_page_slot_markup('reporting-hero', $page))
    : '';
$summary_slot = function_exists('sb_alpha_get_page_slot_markup') && $page instanceof WP_Post
    ? trim((string) sb_alpha_get_page_slot_markup('reporting-summary', $page))
    : '';
$after_slot = function_exists('sb_alpha_get_page_slot_markup') && $page instanceof WP_Post
    ? trim((string) sb_alpha_get_page_slot_markup('reporting-after', $page))
    : '';

$annual_reports = function_exists('sb_alpha_get_reporting_annual_reports')
    ? sb_alpha_get_reporting_annual_reports()
    : [];
$interim_sections = function_exists('sb_alpha_get_reporting_interim_sections')
    ? sb_alpha_get_reporting_interim_sections()
    : [];

get_header();
?>

<style>
  .reporting-slot-note {
    margin: 0 0 16px;
    padding: 12px 14px;
    border: 1px dashed rgba(0, 103, 128, .25);
    border-radius: 16px;
    background: rgba(0, 103, 128, .06);
    font-size: 13px;
    color: #475569;
  }

  .reporting-slot-note code {
    white-space: nowrap;
  }

  .reporting-hero-slot,
  .reporting-summary-slot,
  .reporting-after-slot {
    min-width: 0;
  }

  .reporting-hero-slot > *:first-child,
  .reporting-summary-slot > *:first-child,
  .reporting-after-slot > *:first-child {
    margin-top: 0 !important;
  }

  .reporting-hero-slot > *:last-child,
  .reporting-summary-slot > *:last-child,
  .reporting-after-slot > *:last-child {
    margin-bottom: 0 !important;
  }

  .reporting-doc-meta {
    color: var(--c-muted);
    font-size: 14px;
  }

  .reporting-doc-kind {
    white-space: nowrap;
    color: var(--c-muted);
    font-size: 14px;
  }

  .reporting-annual-shelf {
    display: grid;
    gap: var(--s-4);
  }

  .reporting-annual-shelf .doc-card {
    height: 100%;
  }

  @media (min-width: 900px) {
    .reporting-annual-shelf {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5)">
        <?php if ($hero_slot !== '') : ?>
          <div class="reporting-hero-slot prose">
            <?php echo $hero_slot; ?>
          </div>
        <?php else : ?>
          <div class="row" style="align-items: flex-start; gap: var(--s-4); flex-wrap: wrap">
            <div style="min-width: 280px; flex: 1 1 520px">
              <div class="kicker">Информация банка</div>
              <h1 style="margin: 8px 0 10px">Отчетность</h1>
              <p style="max-width: 78ch">
                Бухгалтерская (финансовая) отчетность раскрывается в ограниченном
                объёме в соответствии с Решением Совета директоров Банка России от
                24 декабря 2024 года.
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
        <?php endif; ?>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position: relative">
          <?php if (current_user_can('manage_options')) : ?>
            <div class="reporting-slot-note">
              Hero можно редактировать через блок с классами <code>sb-slot sb-slot--reporting-hero</code>,
              вводный контент — через <code>sb-slot sb-slot--reporting-summary</code>,
              дополнительный блок внизу — через <code>sb-slot sb-slot--reporting-after</code>.
              Остальная страница уже собирается из карточек и повторяемых секций шаблона.
            </div>
          <?php endif; ?>

          <div class="section-flow">
            <section class="section-card section-card--accent">
              <?php if ($summary_slot !== '') : ?>
                <div class="reporting-summary-slot prose">
                  <?php echo $summary_slot; ?>
                </div>
              <?php else : ?>
                <div class="section-head-inline">
                  <div>
                    <div class="kicker">АО НКБ «СЛАВЯНБАНК»</div>
                    <h2 style="margin: 8px 0 0">Отчетность</h2>
                  </div>
                </div>
                <div class="legal-copy" style="margin-top: var(--s-3)">
                  <p><strong>ГОДОВАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ</strong></p>
                  <p>
                    Ниже приведены документы по годовой и промежуточной бухгалтерской
                    (финансовой) отчетности банка в едином карточном формате.
                  </p>
                </div>
              <?php endif; ?>
            </section>

            <section class="section-card">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Годовая отчетность</div>
                  <h2 style="margin: 8px 0 0">Документы</h2>
                </div>
              </div>

              <div class="reporting-annual-shelf" style="margin-top: var(--s-4)">
                <?php foreach ($annual_reports as $item) : ?>
                  <?php
                    $title = isset($item['title']) ? (string) $item['title'] : '';
                    $footer = isset($item['footer']) ? (string) $item['footer'] : '';
                    $url = isset($item['url']) ? (string) $item['url'] : '#';
                    $kind = sb_alpha_reporting_kind_from_url($url);
                  ?>
                  <a class="doc-card" href="<?php echo esc_url($url); ?>" target="_blank" rel="noopener">
                    <span class="doc-ext"><?php echo esc_html($kind); ?></span>
                    <div class="doc-body">
                      <div class="doc-title"><?php echo esc_html($title); ?></div>
                      <?php if ($footer !== '') : ?>
                        <div class="reporting-doc-meta"><?php echo esc_html($footer); ?></div>
                      <?php endif; ?>
                    </div>
                    <span class="doc-arrow">→</span>
                  </a>
                <?php endforeach; ?>
              </div>
            </section>

            <section class="section-card">
              <div class="section-head-inline">
                <div>
                  <div class="kicker">Промежуточная отчетность</div>
                  <h2 style="margin: 8px 0 0">Показатели деятельности банка</h2>
                </div>
              </div>

              <div class="legal-copy" style="margin-top: var(--s-4)">
                <?php foreach ($interim_sections as $index => $section) : ?>
                  <?php
                    $section_title = isset($section['title']) ? (string) $section['title'] : '';
                    $items = isset($section['items']) && is_array($section['items']) ? $section['items'] : [];
                  ?>
                  <details<?php echo $index === 0 ? ' open' : ''; ?>>
                    <summary><?php echo esc_html($section_title); ?></summary>
                    <div class="service-links" style="margin-top: 12px;">
                      <?php foreach ($items as $item) : ?>
                        <?php
                          $title = isset($item['title']) ? (string) $item['title'] : '';
                          $meta = isset($item['meta']) ? (string) $item['meta'] : '';
                          $url = isset($item['url']) ? (string) $item['url'] : '#';
                          $kind = sb_alpha_reporting_kind_from_url($url);
                        ?>
                        <a class="service-link" href="<?php echo esc_url($url); ?>" target="_blank" rel="noopener">
                          <span>
                            <strong><?php echo esc_html($title); ?></strong>
                            <?php if ($meta !== '') : ?>
                              <span class="reporting-doc-meta"><?php echo esc_html($meta); ?></span>
                            <?php endif; ?>
                          </span>
                          <span class="reporting-doc-kind"><?php echo esc_html($kind); ?> →</span>
                        </a>
                      <?php endforeach; ?>
                    </div>
                  </details>
                <?php endforeach; ?>
              </div>
            </section>

            <?php if ($after_slot !== '') : ?>
              <section class="section-card">
                <div class="reporting-after-slot prose">
                  <?php echo $after_slot; ?>
                </div>
              </section>
            <?php endif; ?>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
