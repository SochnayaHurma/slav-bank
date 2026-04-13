<?php
if (!defined('ABSPATH')) {
    exit;
}

if (function_exists('sb_alpha_route_page_has_migrated_content') && sb_alpha_route_page_has_migrated_content()) {
    sb_alpha_route_render_editor_content_main();
    return;
}

$rows = function_exists('sb_alpha_get_bank_requisites_rows')
    ? sb_alpha_get_bank_requisites_rows()
    : [];

get_header();
?>
<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5)">
        <div class="row" style="align-items: flex-start; gap: var(--s-4); flex-wrap: wrap">
          <div style="min-width: 280px; flex: 1 1 520px">
            <div class="kicker">О банке</div>
            <h1 style="margin: 8px 0 10px">Реквизиты банка</h1>
            <p class="muted" style="max-width:78ch;">
              Основные реквизиты, контакты и справочная информация для клиентов и контрагентов.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap: wrap">
              <a class="btn primary" href="#full">Перейти к реквизитам</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>">Информация банка</a>
            </div>
          </div>

          <div class="pill" style="align-self: flex-start">
            <span class="badge">Контакты</span>
            <a href="tel:+78162665247" class="mono">(8162) 66‑52‑47</a>
            <span class="muted">·</span>
            <a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="key">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position: relative">
          <div class="alert">
            <div class="alert-dot" aria-hidden="true"></div>
            <div>
              <div style="font-weight:600;">Справочная информация</div>
              <div class="muted" style="margin-top:4px;">
                Legacy-наполнение этой страницы должно переноситься в редактор через migration pattern.
                Таблица реквизитов ниже уже выведена в новом shell и может служить источником для editor-first миграции.
              </div>
            </div>
          </div>

          <div class="prose">
            <div class="entry-content">
              <p>До завершения миграции эта страница использует новый route-shell и актуальные реквизитные данные из data-layer темы.</p>
            </div>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

  <section class="block" id="full">
    <div class="container">
      <?php if (function_exists('sb_alpha_render_requisites_table_rows')) {
          sb_alpha_render_requisites_table_rows($rows);
      } ?>
    </div>
  </section>

  <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>Скопировано</div>
</main>
<?php get_footer(); ?>
