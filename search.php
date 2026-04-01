<?php
$paged = max(1, (int) get_query_var('paged'), isset($_GET['paged']) ? (int) $_GET['paged'] : 1);
$search_term = sb_alpha_get_search_term();
$search_query = sb_alpha_get_search_results_query($paged);

$suggestions = [
    ['title' => 'Информация банка', 'url' => sb_alpha_url('info-bank-page'), 'text' => 'Документы, раскрытие сведений и официальная информация.'],
    ['title' => 'Тарифы банка', 'url' => sb_alpha_url('tariffs'), 'text' => 'Актуальные тарифы и специальные предложения для клиентов.'],
    ['title' => 'Поддержка', 'url' => sb_alpha_url('support'), 'text' => 'FAQ, инструкции, безопасность и удаленная помощь.'],
    ['title' => 'Контакты', 'url' => sb_alpha_url('contacts'), 'text' => 'Телефоны, e-mail, адрес и режим работы банка.'],
];
get_header();
?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5);">
        <div class="row" style="align-items:flex-start; gap: var(--s-4); flex-wrap:wrap;">
          <div style="min-width: 280px; flex: 1 1 520px;">
            <div class="kicker">Поиск</div>
            <h1 style="margin:8px 0 10px;">Результаты поиска</h1>


            <div class="row" style="margin-top: var(--s-4); flex-wrap:wrap;">
              <a class="btn glass" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('support')); ?>">Поддержка</a>
            </div>
          </div>

          <div class="pill" style="align-self:flex-start;">
            <span class="badge">Маршрут</span>
            <span class="muted mono"><?php echo esc_html(parse_url(sb_alpha_url('search'), PHP_URL_PATH) ?: '/search/'); ?></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">
      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position:relative;">
          <div class="search-shell">
                          <div class="results-head">
                <div class="kicker">Результаты</div>
                <div class="pill"><span class="badge"><?php echo esc_html((string) ($search_query ? (int) $search_query->found_posts : 0)); ?></span><span class="muted" >совпадений</span></div>
              </div>
            <form class="news-search" role="search" method="get" action="<?php echo esc_url(sb_alpha_url('search')); ?>">
              <span class="mega-ic" aria-hidden="true">⌕</span>
              <input
                id="q"
                name="s"
                type="search"
                placeholder="Например: валютный контроль, тарифы, реквизиты…"
                autocomplete="off"
                value="<?php echo esc_attr($search_term); ?>"
              />
              <button class="btn primary pill" type="submit">Найти</button>
            </form>

            <?php if ($search_term !== '') : ?>


              <?php if ($search_query && $search_query->have_posts()) : ?>
                <div class="search-results">
                  <?php while ($search_query->have_posts()) : $search_query->the_post(); ?>
                    <?php $post_object = get_post(); ?>
                    <?php if (!$post_object instanceof WP_Post) { continue; } ?>
                    <article class="search-card">
                      <div class="search-meta">
                        <span class="route-chip"><?php echo esc_html(sb_alpha_get_post_type_label($post_object)); ?></span>
                        <?php if ($post_object->post_type === 'post') : ?>
                          <span class="muted"><?php echo esc_html(get_the_date('d.m.Y')); ?></span>
                        <?php endif; ?>
                      </div>
                      <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                      <?php $teaser = sb_alpha_get_post_teaser($post_object); ?>
                      <?php if ($teaser !== '') : ?>
                        <p class="muted"><?php echo esc_html($teaser); ?></p>
                      <?php endif; ?>
                      <div class="search-card-url"><?php echo esc_html((string) wp_parse_url(get_permalink(), PHP_URL_PATH)); ?></div>
                    </article>
                  <?php endwhile; ?>
                </div>

                <?php
                $pagination = paginate_links([
                    'base' => add_query_arg('paged', '%#%', sb_alpha_url('search')),
                    'format' => '',
                    'current' => $paged,
                    'total' => max(1, (int) $search_query->max_num_pages),
                    'type' => 'array',
                    'add_args' => ['s' => $search_term],
                    'prev_text' => '←',
                    'next_text' => '→',
                ]);
                ?>
                <?php if (is_array($pagination) && !empty($pagination)) : ?>
                  <nav class="pagination-wrap" aria-label="Навигация по результатам поиска">
                    <?php foreach ($pagination as $item) : ?>
                      <?php echo wp_kses_post($item); ?>
                    <?php endforeach; ?>
                  </nav>
                <?php endif; ?>

                <?php wp_reset_postdata(); ?>
              <?php else : ?>
                <div class="section-empty">
                  <div class="empty-ic">✦</div>
                  <div>
                    <div style="font-weight:600;">Ничего не нашли</div>
                    <div class="muted" style="margin-top:4px;">Попробуйте другой запрос или откройте нужный раздел через меню сайта.</div>
                  </div>
                </div>
              <?php endif; ?>
            <?php else : ?>
              <div class="results-head">
                <div class="kicker">Поиск</div>
                <div class="pill"><span class="muted">найдено</span><span class="badge">0</span> записей</div>
              </div>

              <div class="section-empty">
                <div class="empty-ic">⌕</div>
                <div>
                  <div style="font-weight:600;">Введите запрос</div>
                  <div class="muted" style="margin-top:4px;">Например: тарифы, реквизиты, валютный контроль, новости.</div>
                </div>
              </div>

              <div class="search-suggest-grid">
                <?php foreach ($suggestions as $item) : ?>
                  <a class="search-suggest-card" href="<?php echo esc_url((string) $item['url']); ?>">
                    <strong><?php echo esc_html((string) $item['title']); ?></strong>
                    <span><?php echo esc_html((string) $item['text']); ?></span>
                  </a>
                <?php endforeach; ?>
              </div>
            <?php endif; ?>
          </div>
        </div>

        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
