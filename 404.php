<?php
get_header();
?>

<main id="main">
  <section id="primary" class="content-area">
    <section class="error-404 not-found block">
      <div class="container">
        <div style="max-width: 760px; margin: 0 auto; padding: 48px 0;">
          <h1 style="margin: 0 0 12px;">Страница не найдена</h1>

          <p style="max-width: 640px; margin: 0 10px 18px; line-height: 1.7;">
            Возможно, ссылка устарела, была перемещена или адрес введён с ошибкой.
            Вернитесь на главную страницу и продолжите навигацию оттуда.
          </p>

          <p style="margin: 0 0 24px;">
            <a
              href="<?php echo esc_url(home_url('/')); ?>"
              class="btn primary"
            >
              Вернуться на главную
            </a>
          </p>

        </div>
      </div>
    </section>
  </section>
</main>

<?php
get_footer();