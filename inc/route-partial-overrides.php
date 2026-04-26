<?php
if (!defined('ABSPATH')) {
    exit;
}


function sb_alpha_route_local_partial_for_route(string $route_key): string
{
    $map = [];

    return isset($map[$route_key]) ? (string) $map[$route_key] : '';
}

