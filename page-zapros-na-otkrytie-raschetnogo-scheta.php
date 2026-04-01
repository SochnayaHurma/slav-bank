<?php
$form_markup = sb_alpha_feedback_form_markup();
get_header();
?>

<style>
  .form-shell {
    background: radial-gradient(520px 300px at 20% 15%, rgba(182, 228, 228, 0.506), transparent 60%),
    radial-gradient(520px 320px at 85% 60%, rgba(208, 184, 163, .40), transparent 60%),
    radial-gradient(720px 420px at 55% 0%, rgba(0, 103, 128, .18), transparent 55%);
  }
</style>
<main id="main">


  <section class="block dashv2" id="content">
    <div class="container">

      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
                    <div class="prose" id="form">
            <div class="entry-content">
                      <div class="v3-photo-card reveal" data-reveal="left">
          <div class="v3-photo-caption glass">
            <div class="v3-kicker">Запрос на открытие расчетного счета</div>
            <div style="font-weight:600; font-size:20px; line-height:1.2; margin-top:10px; color:#fff;">
              Отправьте нам запрос на открытие расчетного счета в нашем банке. Специалисты банка свяжутся с вами в ближайшее время для уточнения информации.
            </div>
          </div>
        </div>

              <h3><strong> Заполните форму и отправьте запрос прямо сейчас!</strong><br></h3>




              <div class="wp-block-contact-form-7-contact-form-selector">
                <div class="wpcf7 js" id="wpcf7-f277-p1237-o1" lang="ru-RU" dir="ltr" data-wpcf7-id="277">
                  <div class="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                    <ul></ul>
                  </div>

                </div>
              </div>
              </div>
              </div>


          <div class="form-shell" data-form-shell>

            <div class="form-wrap">
          <?php echo $form_markup; ?>

<!-- <form action="/zapros-na-otkrytie-raschetnogo-scheta.html#wpcf7-f993-p943-o1" method="post" class="wpcf7-form init" aria-label="Контактная форма" novalidate="novalidate" data-status="init">

<p><label> Наименование организации/ИП<br>
<span class="wpcf7-form-control-wrap" data-name="your-name"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" value="" type="text" name="your-name"></span> </label>
</p>
<p><label> Электронная почта<br>
<span class="wpcf7-form-control-wrap" data-name="your-email"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" value="" type="email" name="your-email"></span> </label>
</p>
<p><label> Контактный телефон<br>
<span class="wpcf7-form-control-wrap" data-name="your-subject"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" value="" type="text" name="your-subject"></span> </label>
</p>
<p><label> Напишите нам в произвольной форме<br>
<span class="wpcf7-form-control-wrap" data-name="your-message"><textarea cols="40" rows="10" maxlength="2000" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" name="your-message"></textarea></span> </label>
</p>
               <p class="rule-apply-checkbox"><span class="wpcf7-form-control-wrap" data-name="acceptance-286"><span
                      class="wpcf7-form-control wpcf7-acceptance"><span class="wpcf7-list-item"><input type="checkbox"
                          name="acceptance-286" value="1" aria-invalid="false"></span></span></span> Нажимая кнопку
                  "Отправить" Вы даёте свое согласие на обработку введенной персональной информации в соответствии с
                  Федеральным Законом №152-ФЗ от 27.07.2006 "О персональных данных"
                </p>
<p><input class="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Отправить" disabled=""><span class="wpcf7-spinner"></span>
</p><p style="display: none !important;" class="akismet-fields-container" data-prefix="_wpcf7_ak_"><label>Δ<textarea name="_wpcf7_ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea></label><input type="hidden" id="ak_js_1" name="_wpcf7_ak_js" value="1774743036410"><script>document.getElementById( "ak_js_1" ).setAttribute( "value", ( new Date() ).getTime() );</script></p><div class="wpcf7-response-output" aria-hidden="true"></div>
</form> -->
            </div>
          </div>

          <div class="prose" id="form">
            <div class="entry-content">

<p class="has-small-font-size">Согласие для представителей организаций, индивидуальных предпринимателей и физических лиц, занимающихся частной практикой: <br><br>Я, действуя свободно, своей волей и в своем интересе, выражаю согласие оператору персональных данных АО НКБ «СЛАВЯНБАНК» (далее – Банк) ИНН 5321068480, адрес: 173004, Новгородская обл., г. Великий Новгород, ул. Черемнова-Конюхова, дом 12 на обработку моих персональных данных: ФИО, контактный телефон, адрес электронной почты,</p>



<p class="has-small-font-size">в том числе совершение с использованием средств автоматизации действий с персональными данными, определенных Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных», а именно: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (предоставление, доступ), блокирование, удаление персональных данных,</p>



<p class="has-small-font-size">в целях рассмотрения обращения, направленного в Банк с использованием формы обратной связи на официальном сайте Банка в информационно-коммуникационной сети «Интернет» по адресу: <a href="https://www.slavbank.ru/">https://www.slavbank.ru/</a>, а также получения ответа на обращение.</p>



<p class="has-small-font-size">Я согласен(а) с получением информации по моему обращению по открытым каналам связи и понимаю, что при направлении информации по открытым каналам связи Банк не гарантирует конфиденциальности в отношении переданной таким образом информации.</p>



<p class="has-small-font-size">Настоящее согласие дается мною Банку до полного исполнения Банком обязательств по рассмотрению обращения / направлению ответа на обращение и истечения срока хранения персональных данных, установленного законодательством РФ.</p>



<p class="has-small-font-size">Мне понятно, что Банк гарантирует соблюдение прав субъекта персональных данных:</p>



<ul class="has-small-font-size wp-block-list"><li>право на получение сведений о том, какие персональные данные субъекта персональных данных обрабатываются и хранятся в Банке;</li><li>право на удаление, уточнение или исправление обрабатываемых и хранящихся в Банке персональных данных;</li><li>иные права, установленные действующим законодательством Российской Федерации в области персональных данных.</li></ul>



<p class="has-small-font-size">Мне понятно, что данное согласие может быть отозвано мной в любое время путем подачи заявления на e-mail <a href="mailto:nkb@slavbnak.ru">nkb@slavbnak.ru</a> или в письменной форме на адрес АО НКБ «СЛАВЯНБАНК». При этом мне разъяснено, что в случае отзыва мной согласия на обработку персональных данных Банк вправе продолжить обработку моих персональных данных при наличии оснований, указанных в пунктах 2 — 11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
            </div>
          </div>
        </div>
<?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>


  <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>Готово</div>
</main>


<?php get_footer(); ?>
