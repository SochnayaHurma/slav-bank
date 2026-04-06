<?php
if (!defined('ABSPATH')) {
    exit;
}

if (function_exists('sb_alpha_route_page_has_migrated_content') && sb_alpha_route_page_has_migrated_content()) {
    sb_alpha_route_render_editor_content_main();
    return;
}

$affiliate_documents = function_exists('sb_alpha_get_info_bank_affiliate_documents')
    ? sb_alpha_get_info_bank_affiliate_documents()
    : [];
$control_document = function_exists('sb_alpha_get_info_bank_control_document')
    ? sb_alpha_get_info_bank_control_document()
    : [];
$message_documents = function_exists('sb_alpha_get_info_bank_message_documents')
    ? sb_alpha_get_info_bank_message_documents()
    : [];

get_header();
?>
<main id="main">
  <section class="block dashv2" id="info-bank">
    <div class="container">
      <div class="bento">
        <div class="bento-card bento-hero" data-reveal="scale" style="padding: var(--s-4);">
          <div class="section-flow">
            <div>
              <div class="kicker">О банке</div>
              <h1 style="margin:8px 0 10px;">Информация банка</h1>
              <p class="muted" style="max-width:78ch;">
                Сведения об аффилированных лицах, документы о контроле и сообщения об утверждении
                годовой бухгалтерской (финансовой) отчетности.
              </p>

              <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
                <a class="btn primary" href="#documents">К документам</a>
                <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('reporting')); ?>">Отчетность</a>
                <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>">Реквизиты банка</a>
              </div>
            </div>

            <div class="dash-tabs" id="documents" role="tablist" aria-label="Документы банка">
              <button class="seg" role="tab" data-doc-tab="aff" aria-selected="true">Аффилированные лица</button>
              <button class="seg" role="tab" data-doc-tab="control" aria-selected="false">Список лиц, под контролем или значительным влиянием</button>
              <button class="seg" role="tab" data-doc-tab="msg" aria-selected="false">Сообщения</button>
            </div>

            <div class="dash-panels">
              <div class="dash-panel is-active" data-doc-panel="aff">
                <div class="muted" style="line-height: 1.6;">
                  Списки аффилированных лиц в формате XLS. В подборке собраны опубликованные документы,
                  размещенные в корпоративном разделе банка.
                </div>

                <div class="doc-list" style="margin-top: 12px;">
                  <?php foreach ($affiliate_documents as $item) : ?>
                    <a class="doc-row" href="<?php echo esc_url((string) ($item['url'] ?? '')); ?>" target="_blank" rel="noopener">
                      <span class="doc-date"><?php echo esc_html((string) ($item['date'] ?? '')); ?></span>
                      <span class="doc-title"><?php echo esc_html((string) ($item['title'] ?? '')); ?></span>
                      <span class="doc-ext"><?php echo esc_html((string) ($item['kind'] ?? 'XLS')); ?></span>
                      <span class="doc-arrow" aria-hidden="true">→</span>
                    </a>
                  <?php endforeach; ?>
                </div>
              </div>

              <div class="dash-panel" data-doc-panel="control" hidden>
                <div class="muted" style="line-height: 1.6;">
                  Опубликовано: <?php echo esc_html((string) ($control_document['published'] ?? '')); ?> ·
                  Актуализировано: <?php echo esc_html((string) ($control_document['updated'] ?? '')); ?>.
                  Документ доступен в формате <?php echo esc_html((string) ($control_document['kind'] ?? 'PDF')); ?>.
                </div>

                <?php if (!empty($control_document['url'])) : ?>
                  <a class="doc-hero" href="<?php echo esc_url((string) $control_document['url']); ?>" target="_blank" rel="noopener" style="margin-top: 12px;">
                    <span class="ico" aria-hidden="true">📄</span>
                    <span>
                      <strong><?php echo esc_html((string) ($control_document['title'] ?? '')); ?></strong>
                      <small class="muted">Скачать <?php echo esc_html((string) ($control_document['kind'] ?? 'PDF')); ?></small>
                    </span>
                    <span class="arrow" aria-hidden="true">→</span>
                  </a>
                <?php endif; ?>
              </div>

              <div class="dash-panel" data-doc-panel="msg" hidden>
                <div class="muted" style="line-height: 1.6;">
                  Сообщения об утверждении годовой бухгалтерской (финансовой) отчетности.
                </div>

                <div class="doc-list" style="margin-top: 12px;">
                  <?php foreach ($message_documents as $item) : ?>
                    <a class="doc-row" href="<?php echo esc_url((string) ($item['url'] ?? '')); ?>" target="_blank" rel="noopener">
                      <span class="doc-date"><?php echo esc_html((string) ($item['date'] ?? '')); ?></span>
                      <span class="doc-title"><?php echo esc_html((string) ($item['title'] ?? '')); ?></span>
                      <span class="doc-ext"><?php echo esc_html((string) ($item['kind'] ?? 'PDF')); ?></span>
                      <span class="doc-arrow" aria-hidden="true">→</span>
                    </a>
                  <?php endforeach; ?>
                </div>
              </div>
            </div>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
