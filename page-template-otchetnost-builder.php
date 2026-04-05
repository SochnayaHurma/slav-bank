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
  <section class="block dashv2">
    <div class="container">
      <div class="sb-builder-layout">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
          <div class="sb-builder-page__content">
            <?php the_content(); ?>
          </div>
        <?php endwhile; endif; ?>

        <aside class="sb-builder-page__sidebar">
          <?php get_template_part('template-parts/home', 'stack'); ?>
        </aside>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
