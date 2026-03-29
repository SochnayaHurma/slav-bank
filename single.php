<?php get_header(); ?>

<main id="main">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <?php $post_object = get_post(); ?>
    <?php if (!$post_object instanceof WP_Post) { continue; } ?>
    <section class="block">
      <div class="container">
        <div class="hero-wrap" style="padding: var(--s-5);">
          <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
            <div style="min-width: 280px; flex: 1 1 620px;">
              <div class="kicker">Публикация</div>
              <h1 style="margin:8px 0 10px;"><?php the_title(); ?></h1>
              <div class="news-meta">
                <time datetime="<?php echo esc_attr(get_the_date('c')); ?>"><?php echo esc_html(get_the_date('d.m.Y')); ?></time>
                <?php foreach (sb_alpha_get_post_category_links(get_the_ID()) as $term) : ?>
                  <a class="tag-chip" href="<?php echo esc_url((string) $term['url']); ?>"><?php echo esc_html((string) $term['label']); ?></a>
                <?php endforeach; ?>
              </div>

              <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
                <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">К новостям</a>
                <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать в банк</a>
                <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
              </div>
            </div>

            <div class="pill" style="align-self:flex-start;">
              <span class="badge">Тип</span>
              <span class="muted"><?php echo esc_html(sb_alpha_get_post_type_label($post_object)); ?></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="block dashv2" id="content">
      <div class="container">
        <div class="bento">
          <div class="bento-card" style="padding: var(--s-4); position:relative;">
            <article class="section-card">
              <div class="prose post-content">
                <?php the_content(); ?>
              </div>
            </article>
          </div>

          <?php get_template_part('template-parts/home', 'stack'); ?>
        </div>
      </div>
    </section>
  <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>
