<?php
if (function_exists('sb_alpha_route_page_has_migrated_content') && sb_alpha_route_page_has_migrated_content()) {
get_template_part('template-parts/python/top-level-v4', 'styles');
 $hero_img = esc_url(sb_alpha_asset('png/12.png'));
    get_header();
    ?>
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">

        <div class="v4-strips">
          <div class="v4-strip reveal" data-reveal="scale">
            <img style="left:700px;top:77px;overflow: visible;;" src="<?php echo $hero_img ?>" alt="Иллюстрация: РКО — банк, платежи и документы" />
            <div class="v4-strip-copy v4-glass">
              <h3>ТАРИФЫ БАНКА</h3>
              <p>Уважаемые клиенты! АО НКБ «СЛАВЯНБАНК« запускает с 03.11.2025 года
              специальные предложения для новых клиентов! Также, банк обновил тарифные сетки по денежным средствам,
              привлекаемым в депозиты от юридических лиц и индивидуальных предпринимателей.</p>
              <div class="v4-strip-actions">
              <a class="btn primary" href="#pdf">Перейти к содержимому</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="block dashv2" id="pdf">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">

          <div class="prose">
            <div class="entry-content">
                <?php 
    sb_alpha_route_render_editor_content_main();
?>
            </div>
          </div>
        </div>
<?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

    <?php
    return;
} else {
get_template_part('template-parts/routes/tariff-root', 'page');


}

