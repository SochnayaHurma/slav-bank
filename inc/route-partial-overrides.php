<?php
if (!defined('ABSPATH')) {
    exit;
}

function sb_alpha_route_partial_overrides(): array
{
    return [];
}

function sb_alpha_route_local_partial_for_route(string $route_key): string
{
    $map = sb_alpha_route_partial_overrides();

    return isset($map[$route_key]) ? (string) $map[$route_key] : '';
}

// Backward compatibility for older route override helpers.
function sb_python_wave2_partial_overrides(): array
{
    return array_intersect_key(
        sb_alpha_route_partial_overrides(),
        array_flip([
            'business-lending',
            'account-service',
            'fx-account-service',
        ])
    );
}

function sb_python_wave3_partial_overrides(): array
{
    return array_intersect_key(
        sb_alpha_route_partial_overrides(),
        array_flip([
            'instruction',
            'faq',
            'ecp-regeneration',
            'security',
            'tariffs_rub',
            'tariffs_slavny',
            'tariff_privetstvenny',
            'tariff-depositny',
            'tariffs-foreign-currency',
        ])
    );
}

function sb_python_wave4_partial_overrides(): array
{
    return array_intersect_key(
        sb_alpha_route_partial_overrides(),
        array_flip([
            'business-deposits',
            'cashless-payments',
            'cash-payments',
            'payment-demands',
            'private-persons',
            'vacancies',
            'appeal-123-fz',
            'covid19',
        ])
    );
}

function sb_python_wave5_partial_overrides(): array
{
    return array_intersect_key(
        sb_alpha_route_partial_overrides(),
        array_flip([
            'aml-fatca',
            'crs',
            'governance',
            'disclosur-regulatory',
            'notaries',
        ])
    );
}

function sb_python_wave2_partial_for_route(string $route_key): string
{
    $map = sb_python_wave2_partial_overrides();

    return isset($map[$route_key]) ? (string) $map[$route_key] : '';
}

function sb_python_wave3_partial_for_route(string $route_key): string
{
    $map = sb_python_wave3_partial_overrides();

    return isset($map[$route_key]) ? (string) $map[$route_key] : '';
}

function sb_python_wave4_partial_for_route(string $route_key): string
{
    $map = sb_python_wave4_partial_overrides();

    return isset($map[$route_key]) ? (string) $map[$route_key] : '';
}

function sb_python_wave5_partial_for_route(string $route_key): string
{
    $map = sb_python_wave5_partial_overrides();

    return isset($map[$route_key]) ? (string) $map[$route_key] : '';
}

function sb_python_combined_partial_for_route(string $route_key): string
{
    return sb_alpha_route_local_partial_for_route($route_key);
}

function sb_python_wave4_or_previous_partial_for_route(string $route_key): string
{
    return sb_alpha_route_local_partial_for_route($route_key);
}

function sb_python_wave5_or_previous_partial_for_route(string $route_key): string
{
    return sb_alpha_route_local_partial_for_route($route_key);
}

function sb_python_wave2_is_local_override(string $route_key): bool
{
    return sb_python_wave2_partial_for_route($route_key) !== '';
}

function sb_python_combined_is_local_override(string $route_key): bool
{
    return sb_alpha_route_local_partial_for_route($route_key) !== '';
}

function sb_python_wave4_has_local_override(string $route_key): bool
{
    return sb_alpha_route_local_partial_for_route($route_key) !== '';
}

function sb_python_wave5_has_local_override(string $route_key): bool
{
    return sb_alpha_route_local_partial_for_route($route_key) !== '';
}
