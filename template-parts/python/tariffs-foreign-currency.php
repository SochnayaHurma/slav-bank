
<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Тарифы</div>
            <h1 style="margin:8px 0 10px;">Тарифы по операциям в иностранной валюте</h1>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#pdf">Перейти к содержимому</a>
              <a class="btn outline" href="/">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>" class="mono badge">Тарифы банка</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('tariffs_slavny')); ?>" class="mono badge">«Славный»</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('tariff_privetstvenny')); ?>" class="mono badge">«Приветственный»</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('tariff-depositny')); ?>" class="mono badge">«Депозитный»</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="pdf">
    <div class="container">


      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">

          <div class="pdf-shell">
            <div class="pdf-head">
              <div>
                <div class="kicker">PDF-документ</div>
                <div class="pdf-title">Тарифы по операциям в иностранной валюте</div>
                <div class="muted" style="margin-top:6px;">Откройте внутри страницы или скачайте файл.</div>
              </div>
              <div class="pdf-actions">
                <a class="btn outline pill"
                  href="{% static 'assets/tariffs/Тарифы по операциям в иностранной валюте - СЛАВЯНБАНК_files/tarify-v-in-valyute-s-01122025.pdf' %}"
                  target="_blank" rel="noopener">Открыть</a>
                <a class="btn glass pill"
                  href="{% static 'assets/tariffs/Тарифы по операциям в иностранной валюте - СЛАВЯНБАНК_files/tarify-v-in-valyute-s-01122025.pdf' %}"
                  download>Скачать</a>
              </div>
            </div>
            <div class="pdf-frame">
              <iframe title="Тарифы по операциям в иностранной валюте"
                src="{% static 'assets/tariffs/Тарифы по операциям в иностранной валюте - СЛАВЯНБАНК_files/tarify-v-in-valyute-s-01122025.pdf' %}#view=FitH"
                loading="lazy"></iframe>
            </div>
            <div class="muted" style="margin-top:10px; font-weight:300;">
              Если PDF не отображается, используйте кнопку «Открыть».
            </div>
          </div>

          <div class="prose">
            <div class="entry-content">


              <div data-wp-interactive="core/file" class="wp-block-file"><object
                  data-wp-bind--hidden="!state.hasPdfPreview" class="wp-block-file__embed"
                  data="./Тарифы по операциям в иностранной валюте - СЛАВЯНБАНК_files/tarify-v-in-valyute-s-011220251.pdf"
                  type="application/pdf" aria-label="Вставка tarify-v-in-valyute-s-01122025"></object><span>tarify-v-in-valyute-s-01122025   </span><a
                  href="https://slavbank.ru/wp-content/uploads/tarify-v-in-valyute-s-01122025.pdf"
                  class="wp-block-file__button wp-element-button" download=""
                  aria-describedby="wp-block-file--media-90a8b55d-5732-4ea7-93f1-adcceb6ed6d4">Скачать</a></div>
            </div>
          </div>
        </div>
<?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

</main>

