<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5)">
        <div
          class="row"
          style="align-items: flex-start; gap: var(--s-4); flex-wrap: wrap"
        >
          <div style="min-width: 280px; flex: 1 1 520px">
            <h1 style="margin: 8px 0 10px">Безналичные расчеты</h1>
            <p  style="max-width: 78ch">
              АО НКБ «СЛАВЯНБАНК» осуществляет прием и исполнение поручений
              Клиента на перечисление денежных средств на основании платежных
              поручений, оформленных надлежащим образом.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap: wrap">
              <a class="btn primary" href="#content">Содержание</a>
              <a class="btn outline" href="/">На главную</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form"
                >Задать вопрос</a
              >
            </div>
          </div>

          <div class="pill" style="align-self: flex-start">
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('cash-payments')); ?>" class="mono badge">Наличные</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('fx-account-service')); ?>" class="mono badge">Счета</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('payment-demands')); ?>" class="mono badge">Требования</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">

      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position: relative">
          <div class="alert">
            <div class="alert-dot" aria-hidden="true"></div>
            <div>
              <div style="font-weight: 600">Безналичные расчеты</div>
              <div class="muted" style="margin-top: 4px">
                Платежи, переводы и расчёты — удобно и безопасно.
              </div>
            </div>
          </div>
          <div class="summary-grid">
            <div class="summary-card">
              <div class="kicker">Для кого</div>
              <div class="summary-text">
                АО НКБ «СЛАВЯНБАНК» осуществляет прием и исполнение поручений
                Клиента на перечисление денежных средств на основании платежных
                поручений, оформленных надлежащим образом.
              </div>
            </div>

            <div class="summary-card">
              <div class="kicker">Что можно</div>
              <div class="summary-text">
                Зачисление безналичных денежных средств на счет
              </div>
            </div>

            <div class="summary-card">
              <div class="kicker">Как начать</div>
              <div class="summary-text">
                Более подробную информацию по обслуживанию счетов в валюте РФ Вы
                можете получить по тел. (8162) 66-52-05, +7-921-201-47-00.
              </div>
            </div>
          </div>

          <div class="kicker" style="margin-top: 12px">Текст страницы</div>
          <div class="prose">
            <div class="entry-content">
              <p>
                  <strong>АО НКБ «СЛАВЯНБАНК» </strong> осуществляет прием и
                исполнение поручений Клиента на перечисление денежных средств на
                основании платежных поручений, оформленных надлежащим образом.
              </p>

              <p class="has-text-align-left has-dark-blue-color has-text-color">
                  <strong
                  >Зачисление безналичных денежных средств на счет</strong
                >
              </p>

              <p class="has-text-align-justify">
                  Денежные средства, поступившие на корреспондентский счет Банка
                в течении операционного дня, зачисляются на расчетный счет
                клиента текущим днем. <br /><br />  Денежные средства,
                поступившие на корреспондентский счет Банка после операционного
                дня, зачисляются на расчетный счет клиента следующим днем.
              </p>

              <h3 class="wp-block-heading has-text-align-left">
                  <strong
                  >Прием и исполнение поручений на перечисление денежных
                  средств</strong
                >
              </h3>

              <p>
                  <strong>Прием и исполнение поручения Клиента</strong> на
                перечисление денежных средств выполняется Банком на основании
                надлежащим образом оформленного платежного поручения Клиента.
                <br /><br />  Перечисление денежных средств происходит не
                позднее следующего рабочего дня с момента подачи платежного
                поручения и осуществляется «почтой», «электронно».
              </p>

              <p>
                  <strong
                  ><em
                    >Более подробную информацию по обслуживанию счетов в валюте
                    РФ Вы можете получить по тел.&nbsp; (8162) 66-52-05,
                    <strong>+7-921-201-47-00</strong></em
                  ></strong
                >.
              </p>

              <p></p>
            </div>
          </div>
        </div>


<?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

  <div class="toast" role="status" aria-live="polite" aria-atomic="true" hidden>
    Готово
  </div>
</main>