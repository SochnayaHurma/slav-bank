<?php get_header(); ?>

<main id="main" class="single-post-page">
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
                <time datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                  <?php echo esc_html(get_the_date('d.m.Y')); ?>
                </time>
                <?php foreach (sb_alpha_get_post_category_links(get_the_ID()) as $term) : ?>
                  <a class="tag-chip" href="<?php echo esc_url((string) $term['url']); ?>">
                    <?php echo esc_html((string) $term['label']); ?>
                  </a>
                <?php endforeach; ?>
              </div>


              <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
                <a class="btn primary" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">К новостям</a>
                <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('search')); ?>">Поиск</a>
                <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
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
          </div>

          <?php get_template_part('template-parts/home', 'stack'); ?>
        </div>
      </div>
    </section>

  <?php endwhile; endif; ?>
</main>

<style>
  .single-post-page .bento-card {
    overflow: visible !important;
    min-width: 0;
  }

  .single-post-page .post-article {
    min-width: 0;
    overflow: visible;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .single-post-page .post-hero-media {
    margin: 0 0 18px;
  }

  .single-post-page .post-hero-media img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 20px;
  }

  .single-post-page .post-content {
    min-width: 0;
  }

  .single-post-page .post-content > *:first-child {
    margin-top: 0;
  }

  .single-post-page .post-content > *:last-child {
    margin-bottom: 0;
  }

  .single-post-page .post-content img,
  .single-post-page .post-content svg,
  .single-post-page .post-content video,
  .single-post-page .post-content iframe {
    max-width: 100%;
    height: auto;
  }

  .single-post-page .post-content iframe {
    width: 100%;
    min-height: 320px;
    border: 0;
    border-radius: 16px;
  }

  .single-post-page .post-content figure,
  .single-post-page .post-content .wp-caption,
  .single-post-page .post-content .wp-block-image {
    max-width: 100%;
    margin: 1.2rem 0;
  }

  .single-post-page .post-content .wp-caption-text,
  .single-post-page .post-content figcaption {
    font-size: 14px;
    color: var(--muted, #6b7280);
    margin-top: 8px;
  }

  .single-post-page .post-content table {
    display: block;
    width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
    margin: 1.2rem 0;
  }

  .single-post-page .post-content table td,
  .single-post-page .post-content table th {
    border: 1px solid rgba(15, 23, 42, .12);
    padding: 10px 12px;
    vertical-align: top;
  }

  .single-post-page .post-content ul,
  .single-post-page .post-content ol {
    padding-left: 1.25rem;
  }

  .single-post-page .post-content .alignleft {
    float: left;
    margin: 0 18px 18px 0;
    max-width: min(45%, 320px);
  }

  .single-post-page .post-content .alignright {
    float: right;
    margin: 0 0 18px 18px;
    max-width: min(45%, 320px);
  }

  .single-post-page .post-content .aligncenter {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .single-post-page .post-content::after {
    content: "";
    display: block;
    clear: both;
  }
.single-post-page .section-card,
.single-post-page .post-article,
.single-post-page .post-content{
  width:100%;
  max-width:none !important;
  min-width:0;
  margin:0 !important;
  padding:0 !important;
  box-sizing:border-box;
}

.single-post-page .post-content > *{
  max-width:100% !important;
  margin-left:0 !important;
  margin-right:0 !important;
}

.single-post-page .post-content p,
.single-post-page .post-content ul,
.single-post-page .post-content ol,
.single-post-page .post-content h1,
.single-post-page .post-content h2,
.single-post-page .post-content h3,
.single-post-page .post-content h4,
.single-post-page .post-content h5,
.single-post-page .post-content h6,
.single-post-page .post-content blockquote,
.single-post-page .post-content .wp-block-group,
.single-post-page .post-content .wp-block-columns,
.single-post-page .post-content .wp-block-media-text{
  max-width:100% !important;
  margin-left:0 !important;
  margin-right:0 !important;
}

.single-post-page .post-content .alignleft,
.single-post-page .post-content .alignright,
.single-post-page .post-content [style*="float:left"],
.single-post-page .post-content [style*="float: left"],
.single-post-page .post-content [style*="float:right"],
.single-post-page .post-content [style*="float: right"]{
  float:none !important;
  display:block !important;
  margin:1rem 0 !important;
  max-width:100% !important;
}

.single-post-page .post-content .aligncenter{
  display:block;
  margin:1rem auto !important;
  max-width:100% !important;
}
  @media (max-width: 760px) {
    .single-post-page .post-content .alignleft,
    .single-post-page .post-content .alignright {
      float: none;
      margin: 1rem 0;
      max-width: 100%;
    }
  }
</style>

<?php get_footer(); ?>