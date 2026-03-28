<?php get_header(); ?>

<main id="main" class="container">
  <section class="block">
    <div class="hero-wrap" style="padding: var(--s-5);">
      <h1 style="margin:0 0 12px;"><?php the_title(); ?></h1>
      <div class="card pad">
        <?php
        while (have_posts()) :
            the_post();
            the_content();
        endwhile;
        ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
