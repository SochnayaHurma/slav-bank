
<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Раздел</div>
            <h1 style="margin:8px 0 10px;">CRS — обмен с ФНС</h1>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">Содержание</a>
              <a class="btn outline" href="/">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <a href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>" class="mono badge">Валютный контроль</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('account-service')); ?>" class="mono badge">Счета в валюте</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('aml-fatca')); ?>" class="mono badge">ПОД/ФТ/FATCA</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">


      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">


          <div class="alert">
            <div class="alert-dot" aria-hidden="true"></div>
            <div>
              <div style="font-weight:600;">CRS</div>
              <div class="muted" style="margin-top:4px;">CRS — международный обмен информацией о финансовых счетах.
                Раздел содержит материалы и пояснения.</div>
            </div>
          </div>


          <div class="prose">
            <div class="entry-content">

              <p><strong>C</strong><strong>RS (Common Reporting Standard, далее CRS)</strong>&nbsp;— Стандарт
                по&nbsp;автоматическому обмену информацией о&nbsp;финансовых счетах, разработанный <strong>ОЭСР</strong>
                (Организацией экономического сотрудничества и&nbsp;развития). <strong>CRS</strong>&nbsp;направлен на
                предотвращение глобального уклонения от уплаты налогов с использованием офшорных юрисдикций и
                обеспечения прозрачности налоговой информации. Российская Федерация в мае 2016 года подтвердила свое
                участие в выполнении требований CRS.</p>



              <p>CRS в России реализован посредством принятия Федерального закона № 340-ФЗ от 27.11.2017г., дополнившего
                Главой 20.1 Налоговый кодекс РФ, и утверждения Постановления Правительства от 16.06.2018г. № 693 «О
                реализации международного автоматического обмена финансовой информацией с компетентными органами
                иностранных государств (территорий)».</p>



              <p>В целях международного обмена информацией с иностранными налоговыми органами указанные документы
                обязывают Банк устанавливать налоговое резидентство клиентов, выгодоприобретателей и лиц, прямо или
                косвенно их контролирующих, и направлять сведения об иностранных налогоплательщиках в ФНС РФ. Банк
                определяет статус «налогового резидента» на основании полученной от Клиентов&nbsp;информации.</p>



              <p><strong>Клиенты, обязаны в соответствии с Главой 20.1 Налогового кодекса РФ предоставлять в Банк
                  запрашиваемую информацию, позволяющую установить налоговое резидентство, в отношении самих себя,
                  выгодоприобретателей и (или) лиц, прямо или косвенно их контролирующих.</strong></p>



              <p>В целях подтверждения Вашего налогового резидентства работник АО НКБ «СЛАВЯНБАНК» может запросить
                заполнить форму самосертификации, а также задать уточняющие вопросы.</p>



              <p>С информацией по CRS для клиентов, размещенной на сайте Федеральной налоговой службы России можно
                ознакомиться&nbsp;<a
                  href="https://data.nalog.ru/html/sites/www.340fzreport.nalog.ru/doc/a_obmen_info_v092020.pdf">по
                  ссылке</a>.</p>
            </div>
          </div>
          <div class="kicker" style="margin-top:12px;">Ресурсы</div>
          <div class="doc-shelf">
            <a class="doc-card"
              href="https://data.nalog.ru/html/sites/www.340fzreport.nalog.ru/doc/a_obmen_info_v092020.pdf"
              target="_blank" rel="noopener">
              <span class="doc-ext">PDF</span>
              <span class="doc-title">по ссылке</span>
              <span class="doc-arrow">→</span>
            </a>
          </div>

        </div>

<?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

  <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>Готово</div>
</main>
