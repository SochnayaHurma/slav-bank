<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <h1 style="margin:8px 0 10px;">Депозиты для юридических лиц</h1>
            <p class="muted" style="max-width:78ch;">Ставка до 14,5%</p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">Содержание</a>
              <a class="btn outline" href="/">На главную</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Связаться</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <a href="<?php echo esc_url(sb_alpha_url('legal-entities')); ?>" class="mono badge">Юр. лицам</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('business-lending')); ?>" class="mono badge">Кредитование</a>
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
              <div style="font-weight:600;">Депозиты для юридических лиц</div>
              <div class="muted" style="margin-top:4px;">Ставка до 14,5%</div>
            </div>
          </div>
  <br>
          <div class="summary-grid">
            <div class="summary-card ">
              <div class="kicker">Ежемесячная выплата %</div>

            </div>

            <div class="summary-card">
              <div class="kicker">Плавающая или фиксированная процентная ставка</div>
            </div>

            <div class="summary-card">
              <div class="kicker">Бонус – начисление процентов на остаток.</div>
            </div>
          </div>
          <br>
          <div class="prose">
            <div class="entry-content">



              <p class="has-text-color has-link-color wp-elements-0033e2c2006d0637ec3d5398f0292088"><strong>Новым
                  клиентам:&nbsp;<a
                    href="https://slavbank.ru/wp-content/uploads/tarif-depositny-1.pdf"><span>специальное предложение по
                      обслуживанию счета!</span></a></strong></p>



              <p><em><strong>Более подробную информацию Вы можете получить по телефонам:&nbsp;</strong></em></p>



              <p><em><strong>(8162)&nbsp;66-52-47 или&nbsp;+7&nbsp;921-730-07-01</strong></em>.</p>



              <p></p>
            </div>
          </div>

        </div>
<?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>


  <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>Готово</div>
</main>
