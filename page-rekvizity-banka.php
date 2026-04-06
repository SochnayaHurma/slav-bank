<?php
$helper = get_theme_file_path('inc/route-migration-bank-pages.php');
if (is_string($helper) && $helper !== '' && file_exists($helper)) {
    require_once $helper;
}
require get_theme_file_path('template-parts/routes/requisites-page.php');
