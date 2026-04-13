<?php
$route_key = sb_python_current_route_key();
$partial = sb_python_wave4_or_previous_partial_for_route($route_key);
$partial_file = $partial !== '' ? sb_python_partial_file($partial) : '';

get_header();
?>

<?php if ($partial !== '' && is_file($partial_file)) : ?>
    <?php include $partial_file; ?>

<?php endif; ?>

<?php get_footer(); ?>
