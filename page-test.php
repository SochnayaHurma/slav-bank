<?php 
function sb_seed_legal_entities_default_content(string $content, WP_Post $post): string
{
    if ($post->post_type !== 'page') {
        return $content;
    }

    $slug = (string) ($post->post_name ?? '');

    // Подстрой под фактический slug страницы.
    if (!in_array($slug, ['legal-entities', 'yuridicheskim-liczam'], true)) {
        return $content;
    }

    if (trim($content) !== '') {
        return $content;
    }

    $attrs = wp_json_encode(
        [
            'heroTitle' => 'ЮРИДИЧЕСКИМ ЛИЦАМ',
            'heroDescription' => 'Для юридических лиц АО НКБ «СЛАВЯНБАНК» предлагает следующие банковские услуги',
            'anchorId' => 'content',
            'alertTitle' => 'ЮРИДИЧЕСКИМ ЛИЦАМ',
            'alertText' => 'Для юридических лиц АО НКБ «СЛАВЯНБАНК» предлагает следующие банковские услуги:',
        ],
        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
    );

    return sprintf(
        '<!-- wp:slavbank/legal-entities-page %1$s -->
<!-- /wp:slavbank/legal-entities-page -->',
        $attrs
    );
}
add_filter('default_content', 'sb_seed_legal_entities_default_content', 10, 2);

get_header(); ?>

<main id="main">
    <?php
    while (have_posts()) :
        the_post();
        the_content();
    endwhile;
    ?>
</main>

<?php get_footer(); ?>