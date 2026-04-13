<?php
if (function_exists('sb_alpha_route_page_has_migrated_content') && sb_alpha_route_page_has_migrated_content()) {
    sb_alpha_route_render_editor_content_main();
    return;
}

$tariff_key = 'tariffs_rub';
get_template_part('template-parts/routes/tariff', 'page');
