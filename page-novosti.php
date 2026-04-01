<?php
$paged = max(1, (int) get_query_var('paged'), isset($_GET['paged']) ? (int) $_GET['paged'] : 1);
$news_query = new WP_Query(
    sb_alpha_get_news_query_args([
        'posts_per_page' => 10,
        'paged' => $paged,
    ])
);
$category_links = sb_alpha_get_news_category_links();
$initial_count = max(0, (int) $news_query->post_count);
get_header();
?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <h1 style="margin:8px 0 10px;">Новости</h1>
            <p class="muted" style="max-width:78ch;">
              Официальные новости банка: режим работы, изменения тарифов и важные объявления.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn primary" href="#content">К новостям</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form">Написать нам</a>
            </div>
          </div>

          <div style="align-self:flex-start;">
            <a href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>" class="mono badge">Тарифы</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('legal-entities')); ?>" class="mono badge">Юр. лицам</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('contacts')); ?>" class="mono badge">Контакты</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <div class="news-shell">
            <div class="news-controls">
                            <div class="results-head" style="margin-top:14px;">
              <h3 class="kicker" style="text-align:center;">Архив публикаций</h3>
                <div>
                  <span class="badge" data-news-count><?php echo esc_html((string) $initial_count); ?></span>
                  <span class="muted">шт.</span>
                </div>
              </div>

              <form class="news-search" role="search" method="get" action="<?php echo esc_url(sb_alpha_url('search')); ?>">
                <span class="mega-ic search-symbol" aria-hidden="true">⌕</span>
                <input
                  class="grid-search-input"
                  id="newsQ"
                  name="s"
                  type="search"
                  placeholder="Фильтр по текущей странице… Enter — поиск по всему сайту"
                  autocomplete="off"
                />
                <button class="btn primary pill" type="submit">Поиск </button>
                <button class="btn outline pill" id="newsReset" type="button">Сброс</button>
              </form>



              <div class="tag-row">
                <?php foreach ($category_links as $category) : ?>
                  <a class="tag-chip" href="<?php echo esc_url((string) $category['url']); ?>"><?php echo esc_html((string) $category['label']); ?></a>
                <?php endforeach; ?>
              </div>
            </div>

            <?php if ($news_query->have_posts()) : ?>
              <div class="news-results">
                <?php while ($news_query->have_posts()) : $news_query->the_post(); ?>
                  <?php $post_object = get_post(); ?>
                  <?php if (!$post_object instanceof WP_Post) { continue; } ?>
                  <?php $teaser = sb_alpha_get_post_teaser($post_object); ?>
                  <article class="news-card" data-news-item data-news-text="<?php echo esc_attr(trim(get_the_title() . ' ' . $teaser)); ?>">
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
                    <div class="news-actions">
                      <a class="btn outline" href="<?php the_permalink(); ?>">Читать подробнее</a>
                    </div>
                  </article>
                <?php endwhile; ?>
              </div>

 

              <?php
              $pagination = paginate_links([
                  'base' => add_query_arg('paged', '%#%', sb_alpha_url('novosti')),
                  'format' => '',
                  'current' => $paged,
                  'total' => max(1, (int) $news_query->max_num_pages),
                  'type' => 'array',
                  'prev_text' => '←',
                  'next_text' => '→',
              ]);
              ?>
              <?php if (is_array($pagination) && !empty($pagination)) : ?>
                <nav class="pagination-wrap" aria-label="Навигация по архиву новостей">
                  <?php foreach ($pagination as $item) : ?>
                    <?php echo wp_kses_post($item); ?>
                  <?php endforeach; ?>
                </nav>
              <?php endif; ?>

              <?php wp_reset_postdata(); ?>
            <?php else : ?>
             <div class="section-empty" data-news-empty hidden>
                <div class="empty-ic">✦</div>
                <div>
                  <div style="font-weight:600;">На этой странице ничего не найдено</div>
                  <div class="muted" style="margin-top:4px;">Очистите локальный фильтр или выполните общий поиск по сайту.</div>
                </div>
              </div>
            <?php endif; ?>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>

<style>
  .tag-row {
    padding: 10px;
  }

  .search-symbol {
    font-size: 23px;
  }

  @media (max-width: 980px) {
    .search-symbol {
      display: none;
    }
  }
</style>

<script>
(() => {
  const shell = document.querySelector('.news-shell');
  if (!shell) return;

  const input = shell.querySelector('#newsQ');
  const reset = shell.querySelector('#newsReset');
  const items = Array.from(shell.querySelectorAll('[data-news-item]'));
  const empty = shell.querySelector('[data-news-empty]');
  const count = shell.querySelector('[data-news-count]');

  if (!input || !reset || !items.length) {
    return;
  }

  const normalize = (value) => String(value || '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();

  const applyFilter = () => {
    const query = normalize(input.value);
    let visible = 0;

    items.forEach((item) => {
      const haystack = normalize(item.getAttribute('data-news-text') || item.textContent);
      const show = query === '' || haystack.includes(query);

      item.hidden = !show;
      if (show) visible += 1;
    });

    if (empty) {
      empty.hidden = visible !== 0;
    }

    if (count) {
      count.textContent = String(visible);
    }
  };

  input.addEventListener('input', applyFilter);

  reset.addEventListener('click', () => {
    input.value = '';
    applyFilter();
    input.focus();
  });

  applyFilter();
})();
</script>

<?php get_footer(); ?>
