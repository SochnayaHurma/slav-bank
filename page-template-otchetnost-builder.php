<?php
/**
 * Template Name: Отчетность — builder patterns
 * Template Post Type: page
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<main id="main" class="sb-builder-page sb-builder-page--reporting">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <div class="sb-builder-page__content">
      <?php the_content(); ?>
    </div>
  <?php endwhile; endif; ?>

  <section class="block dashv2">
    <div class="container">
      <div class="bento">
        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
