
<?php get_header(); ?>
<style>
  .form-shell {
    background: radial-gradient(520px 300px at 20% 15%, rgba(182, 228, 228, 0.506), transparent 60%),
    radial-gradient(520px 320px at 85% 60%, rgba(208, 184, 163, .40), transparent 60%),
    radial-gradient(720px 420px at 55% 0%, rgba(0, 103, 128, .18), transparent 55%);
  }
</style>
<main id="main">
    <?php
    while (have_posts()) :
        the_post();
        the_content();
    endwhile;
    ?>
</main>

<?php get_footer(); ?>