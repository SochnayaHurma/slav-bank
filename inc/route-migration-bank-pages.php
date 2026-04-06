<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('sb_alpha_route_page_has_migrated_content')) {
    function sb_alpha_route_page_has_migrated_content(?WP_Post $post = null): bool
    {
        $post = $post instanceof WP_Post ? $post : get_post();
        if (!$post instanceof WP_Post) {
            return false;
        }

        return trim((string) $post->post_content) !== '';
    }
}

if (!function_exists('sb_alpha_route_render_editor_content_main')) {
    function sb_alpha_route_render_editor_content_main(): void
    {
        get_header();
        echo '<main id="main">';
        while (have_posts()) {
            the_post();
            the_content();
        }
        echo '</main>';
        get_footer();
    }
}

if (!function_exists('sb_alpha_get_governance_notice_text')) {
    function sb_alpha_get_governance_notice_text(): string
    {
        return 'На основании решения Совета директоров Банка России от 22.12.2023г. и решения Совета директоров АО НКБ «СЛАВЯНБАНК» от 08.02.2024г. информация о членах органов управления и иных должностных лицах банка не раскрывается.';
    }
}

if (!function_exists('sb_alpha_render_requisites_table_rows')) {
    function sb_alpha_render_requisites_table_rows(array $rows): void
    {
        ?>
        <div class="table-wrap">
          <table class="req-table">
            <thead>
              <tr>
                <th>Параметр</th>
                <th>Значение</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($rows as $row) :
                  $label = (string) ($row['label'] ?? '');
                  $value = (string) ($row['value'] ?? '');
                  $url   = (string) ($row['url'] ?? '');
                  $external = !empty($row['external']);
                  if ($label === '' || $value === '') {
                      continue;
                  }
                  ?>
                  <tr>
                    <td><?php echo esc_html($label); ?></td>
                    <td>
                      <?php if ($url !== '') : ?>
                        <a href="<?php echo esc_url($url); ?>"<?php echo $external ? ' target="_blank" rel="noopener"' : ''; ?>>
                          <?php echo esc_html($value); ?>
                        </a>
                      <?php else : ?>
                        <?php echo esc_html($value); ?>
                      <?php endif; ?>
                    </td>
                    <td>
                      <button class="copy mini" type="button" data-copy="<?php echo esc_attr($value); ?>">
                        Копировать
                      </button>
                    </td>
                  </tr>
              <?php endforeach; ?>
            </tbody>
          </table>
        </div>
        <?php
    }
}
