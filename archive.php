<?php
$paged = max(1, (int) get_query_var('paged'));
$category_links = sb_alpha_get_news_category_links();
get_header();
?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 620px;">
            <div class="kicker">Архив</div>
            <h1 style="margin:8px 0 10px;"><?php echo esc_html(wp_strip_all_tags(get_the_archive_title())); ?></h1>
            <?php $desc = trim(strip_tags((string) get_the_archive_description())); ?>
            <?php if ($desc !== '') : ?>
              <p class="muted" style="max-width:78ch;"><?php echo esc_html($desc); ?></p>
            <?php else : ?>
              <p class="muted" style="max-width:78ch;">Архив публикаций WordPress по выбранной рубрике.</p>
            <?php endif; ?>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К публикациям</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">Все новости</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <?php foreach ($category_links as $category) : ?>
              <a href="<?php echo esc_url((string) $category['url']); ?>" class="mono badge"><?php echo esc_html((string) $category['label']); ?></a>
              <span class="muted">·</span>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <?php if (have_posts()) : ?>
            <div class="news-results">
              <?php while (have_posts()) : the_post(); ?>
                <?php $post_object = get_post(); ?>
                <?php if (!$post_object instanceof WP_Post) { continue; } ?>
                <?php $teaser = sb_alpha_get_post_teaser($post_object); ?>
                <article class="news-card">
                  <div class="news-meta">
                    <time datetime="<?php echo esc_attr(get_the_date('c')); ?>"><?php echo esc_html(get_the_date('d.m.Y')); ?></time>
                    <?php foreach (sb_alpha_get_post_category_links(get_the_ID()) as $term) : ?>
                      <a class="tag-chip" href="<?php echo esc_url((string) $term['url']); ?>"><?php echo esc_html((string) $term['label']); ?></a>
                    <?php endforeach; ?>
                  </div>
                  <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                  <?php if ($teaser !== '') : ?>
                    <div class="news-body">
                      <p><?php echo esc_html($teaser); ?></p>
                    </div>
                  <?php endif; ?>
                </article>
              <?php endwhile; ?>
            </div>

            <?php
            $pagination = paginate_links([
                'current' => $paged,
                'total' => max(1, (int) $GLOBALS['wp_query']->max_num_pages),
                'type' => 'array',
                'prev_text' => '←',
                'next_text' => '→',
            ]);
            ?>
            <?php if (is_array($pagination) && !empty($pagination)) : ?>
              <nav class="pagination-wrap" aria-label="Навигация по архиву">
                <?php foreach ($pagination as $item) : ?>
                  <?php echo wp_kses_post($item); ?>
                <?php endforeach; ?>
              </nav>
            <?php endif; ?>
          <?php else : ?>
            <div class="section-empty">
              <div class="empty-ic">✦</div>
              <div>
                <div style="font-weight:600;">Публикации в этой рубрике пока отсутствуют</div>
                <div class="muted" style="margin-top:4px;">Откройте общий архив новостей или выберите другую рубрику.</div>
              </div>
            </div>
          <?php endif; ?>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
