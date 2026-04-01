<?php get_header(); ?>

<main id="main">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <?php $post_object = get_post(); ?>
    <?php if (!$post_object instanceof WP_Post) { continue; } ?>
    <?php $teaser = sb_alpha_get_post_teaser($post_object, 40); ?>

    <section class="block">
      <div class="container">
        <div class="hero-wrap" style="padding: var(--s-5);">
          <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
            <div style="min-width: 280px; flex: 1 1 620px;">
              <div class="kicker">Новость</div>
              <h1 style="margin:8px 0 10px;"><?php the_title(); ?></h1>

              <div class="news-meta">
                <time datetime="<?php echo esc_attr(get_the_date('c')); ?>"><?php echo esc_html(get_the_date('d.m.Y')); ?></time>
                <?php foreach (sb_alpha_get_post_category_links(get_the_ID()) as $term) : ?>
                  <a class="tag-chip" href="<?php echo esc_url((string) $term['url']); ?>"><?php echo esc_html((string) $term['label']); ?></a>
                <?php endforeach; ?>
              </div>



            </div>
                        <article class="section-card post-article">
              <?php if (has_post_thumbnail()) : ?>
                <figure class="post-hero-media">
                  <?php the_post_thumbnail('large', ['loading' => 'eager']); ?>
                </figure>
              <?php endif; ?>

              <div class="prose post-content">
                <?php the_content(); ?>
              </div>
            </article>
              <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
                <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">К новостям</a>
                <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('search')); ?>">Поиск</a>
                <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
              </div>

          </div>
        </div>
      </div>
    </section>

  <?php endwhile; endif; ?>
</main>

<style>
  .post-article {
    overflow-wrap: anywhere;
  }

  .post-hero-media {
    margin: 0 0 18px;
  }

  .post-hero-media img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 20px;
  }

  .post-content > *:first-child {
    margin-top: 0;
  }

  .post-content > *:last-child {
    margin-bottom: 0;
  }

  .post-content img,
  .post-content svg,
  .post-content video,
  .post-content iframe {
    max-width: 100%;
    height: auto;
  }

  .post-content iframe {
    width: 100%;
    min-height: 320px;
    border: 0;
    border-radius: 16px;
  }

  .post-content figure,
  .post-content .wp-caption,
  .post-content .wp-block-image {
    max-width: 100%;
    margin: 1.2rem 0;
  }

  .post-content .wp-caption-text,
  .post-content figcaption {
    font-size: 14px;
    color: var(--muted, #6b7280);
    margin-top: 8px;
  }

  .post-content table {
    display: block;
    width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
    margin: 1.2rem 0;
  }

  .post-content table td,
  .post-content table th {
    border: 1px solid rgba(15, 23, 42, .12);
    padding: 10px 12px;
    vertical-align: top;
  }

  .post-content ul,
  .post-content ol {
    padding-left: 1.25rem;
  }

  .post-content .alignleft {
    float: left;
    margin: 0 18px 18px 0;
    max-width: min(45%, 320px);
  }

  .post-content .alignright {
    float: right;
    margin: 0 0 18px 18px;
    max-width: min(45%, 320px);
  }

  .post-content .aligncenter {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .post-content::after {
    content: "";
    display: block;
    clear: both;
  }

  @media (max-width: 760px) {
    .post-content .alignleft,
    .post-content .alignright {
      float: none;
      margin: 1rem 0;
      max-width: 100%;
    }
  }
</style>

<?php get_footer(); ?>
