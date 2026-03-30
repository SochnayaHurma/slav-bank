<?php get_header(); 
get_template_part('template-parts/python/top-level-v4', 'styles');
 $hero_img = esc_url(sb_alpha_asset('png/11.png'));
?>
<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">

                <div class="v4-strips">
          <div class="v4-strip reveal" data-reveal="scale" href="<?php echo esc_url(sb_alpha_url('account-service')); ?>">
            <img style="left: 440px;" src="<?php echo $hero_img ?>" alt="Иллюстрация: РКО — банк, платежи и документы" />
            <div class="v4-strip-copy v4-glass">
              <h3>Контакты</h3>
              <p>Как связаться с банком: телефон, электронная почта, адрес и режим
              работы.</p>
              <div class="v4-strip-actions">
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
                <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('support')); ?>">Поддержка</a>
              <a class="btn glass" href="/">На главную</a>
              </div>
          </div>
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
              <div style="font-weight:600;">Контакты банка</div>
              <div class="muted" style="margin-top:4px;">Ниже — основные каналы связи, адрес и режим работы. Для
                обращений используйте форму «Написать в банк».</div>
            </div>
          </div>


          <div  style="margin-top: var(--s-4);">
            <div >
              <div class="kicker"><b>Телефон</b></div>
              <div ><a href="tel:78162665247">8162665247</a></div>
              <div class="muted">Единый номер банка</div>
              <div class="kv-actions" style="margin-top:10px;">
                <button class="copy mini" type="button" data-copy="8162665247">Копировать</button>
                <a class="btn outline" href="tel:78162665247">Позвонить</a>
              </div>
            </div>
<hr>
            <div >
              <div class="kicker"><b>Электронная почта</b></div>
              <div ><a href="mailto:nkb@slavbank.ru">nkb@slavbank.ru</a></div>
              <div class="muted">Для общих вопросов и документов</div>
              <div class="kv-actions" style="margin-top:10px;">
                <button class="copy mini" type="button" data-copy="nkb@slavbank.ru">Копировать</button>
                <a class="btn outline" href="mailto:nkb@slavbank.ru">Написать</a>
              </div>
            </div>
<hr>
            <div >
              <div class="kicker"><b>Адрес</b></div>
              <div >г. Великий Новгород, ул. Черемнова-Конюхова, дом 12</div>
              <div class="muted">Головной офис</div>
              <div class="kv-actions" style="margin-top:10px;">
                <button class="copy mini" type="button"
                  data-copy="г. Великий Новгород, ул. Черемнова-Конюхова, дом 12">Копировать</button>
                <a class="btn outline"
                  href="https://yandex.ru/maps/?text=г. Великий Новгород, ул. Черемнова-Конюхова, дом 12"
                  target="_blank" rel="noopener">Открыть в Яндекс Картах</a>
                <a class="btn outline"
                  href="https://www.google.com/maps/search/?api=1&query=г. Великий Новгород, ул. Черемнова-Конюхова, дом 12"
                  target="_blank" rel="noopener">Открыть в Google Maps</a>
              </div>
            </div>
<hr>
            <div >
              <div class="kicker"><b>Режим работы</b></div>

              <div class="alert">
                <div class="alert-dot" aria-hidden="true"></div>
                <div>
                  <div style="font-weight:600;">С клиентами</div>
                  <div class="muted" style="margin-top:4px;">пн-чт с 9.00 — 17.00 (касса до 16.30), пт с 9.00 до 16.00 (касса до 15.30), без
                    обеда, выходные — суббота, воскресенье</div>
                </div>
              </div>
              <br>
              <div class="alert">
                <div class="alert-dot" aria-hidden="true"></div>
                <div>
                  <div style="font-weight:600;">Поддержка</div>
                  <div class="muted" style="margin-top:4px;">с 08:30 до 17:30 (пт до 16:30), обед 13:00–14:00; выходные — сб, вс</div>
                </div>
              </div>
              <div >
              </div>

            </div>
          </div>

          <div  style="margin-top: var(--s-4);">
            <div >
              <h3 class="kicker" style="text-align:center;">Как нас найти</h3>
              <h4 style="margin: 8px 0 10px;">г. Великий Новгород, ул. Черемнова-Конюхова, дом 12</h4>

              <div class="row" style="margin-top:12px; flex-wrap:wrap;">
                <a class="btn primary"
                  href="https://yandex.ru/maps/?text=г. Великий Новгород, ул. Черемнова-Конюхова, дом 12"
                  target="_blank" rel="noopener">Маршрут в Яндекс Картах →</a>
                <a class="btn outline"
                  href="https://www.google.com/maps/search/?api=1&query=г. Великий Новгород, ул. Черемнова-Конюхова, дом 12"
                  target="_blank" rel="noopener">Маршрут в Google Maps →</a>
              </div>
            </div>
            <div  aria-hidden="true"></div>
          </div>

        </div>


<?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

  <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>Готово</div>
</main>


<?php get_footer(); ?>
