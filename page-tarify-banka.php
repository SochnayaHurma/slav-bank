<?php
get_template_part('template-parts/python/top-level-v4', 'styles');
$tariffs_download = sb_alpha_get_tariffs_download();
 $hero_img = esc_url(sb_alpha_asset('png/12.png'));
$tariffs_view = sb_alpha_get_tariffs_view();
$primary_download_url = !empty($tariffs_download[0]['url']) ? (string) $tariffs_download[0]['url'] : sb_alpha_url('tariffs');
get_header();
?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">

        <div class="v4-strips">
          <div class="v4-strip reveal" data-reveal="scale">
            <img style="left:700px;top:77px;overflow: visible;;" src="<?php echo $hero_img ?>" alt="Иллюстрация: РКО — банк, платежи и документы" />
            <div class="v4-strip-copy v4-glass">
              <h3>ТАРИФЫ БАНКА</h3>
              <p>Уважаемые клиенты! АО НКБ «СЛАВЯНБАНК« запускает с 01.11.2025 года
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
              <h2
                class="kicker">
                <br>АО НКБ «СЛАВЯНБАНК»&nbsp; предлагает к рассмотрению следующие виды <strong><a
                    href="https://slavbank.ru/wp-content/uploads/tarify-banka-v-valyute-rf-i-in-valyute-s-131025.pdf"
                    target="_blank" rel="noreferrer noopener">ТАРИФОВ</a></strong><a
                  href="https://slavbank.ru/wp-content/uploads/tarify-banka-s-01.10.2022.docx" target="_blank"
                  rel="noreferrer noopener"> </a>банковских услуг:<br></h2>
              <p><strong>— скачать:</strong></p>



              <ul >

                <?php foreach ($tariffs_download as $item) : ?>
                  <li>
                    <a class="doc-card" href="<?php echo esc_url((string) $item['url']); ?>" target="_blank" rel="noopener">
      
                      <span class="doc-title" href="https://slavbank.ru/tarify-banka-html/tarify_rf.html" target="_blank"
                            rel="noreferrer noopener"><strong><?php echo esc_html((string) $item['title']); ?></strong></span>
                                          <span class="doc-arrow doc-ext"  style="text-align: center; min-width: 132px;"><?php echo esc_html((string) $item['date']); ?></span>
                    </a>
                  </li>
                <?php endforeach; ?>

              </ul>



              <p
                class="has-text-align-left has-gray-color has-text-color has-link-color wp-elements-74cabb8f365af0dbcb10079e4af67768">
              </p>



              <p><strong>— открыть на сайте:</strong></p>



              <ul >
                <?php foreach ($tariffs_view as $item) : ?>

                <li>
                  <a class="doc-card" href="<?php echo esc_url((string) $item['url']); ?>" target="_blank" rel="noopener">
    
                    <span class="doc-title" href="https://slavbank.ru/tarify-banka-html/tarify_rf.html" target="_blank"
                          rel="noreferrer noopener"><strong><?php echo esc_html((string) $item['title']); ?></strong></span>
                                        <span class="doc-arrow doc-ext" style="text-align: center; min-width: 132px;"><?php echo esc_html((string) $item['date']); ?></span>

                  </a>
                </li>
                <?php endforeach; ?>
              </ul>



              <p class="has-text-align-center has-dark-blue-color has-text-color"><strong><span><a
                      href="https://slavbank.ru/wp-content/uploads/tarify-banka-v-valyute-rf-s-01072024-i-in-valyute-s-131025.pdf"
                      target="_blank" rel="noreferrer noopener">СКАЧАТЬ ТАРИФЫ БАНКА</a></span></strong></p>



              <div class="wp-block-group">
                <div class="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow"></div>
              </div>



              <p></p>
            </div>
          </div>
        </div>
<?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>
