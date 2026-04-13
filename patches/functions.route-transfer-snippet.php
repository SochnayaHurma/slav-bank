<?php
/**
 * 1) add include near the other inc/* includes:
 *
 * require_once get_template_directory() . '/inc/route-migration-bank-pages.php';
 *
 * 2) in sb_alpha_routes() switch these route keys to local-page-first:
 *
 * 'info-bank-page' => sb_alpha_wp_page_url('o-banke-slavyanbank-html-info_bank', sb_python_route_url('info-bank-page')),
 * 'requisites_bank' => sb_alpha_wp_page_url('rekvizity-banka', sb_python_route_url('requisites_bank')),
 * 'governance' => sb_alpha_wp_page_url('organy_upravlenya', sb_python_route_url('governance')),
 *
 * 3) add title mappings in sb_alpha_document_title_parts():
 *
 * 'o-banke-slavyanbank-html-info_bank' => 'Информация банка - АО НКБ "СЛАВЯНБАНК"',
 * 'rekvizity-banka' => 'Реквизиты банка - АО НКБ "СЛАВЯНБАНК"',
 * 'organy_upravlenya' => 'Органы управления - АО НКБ "СЛАВЯНБАНК"',
 *
 * 4) note:
 * there is no current WP governance template in the php branch;
 * this package introduces page-organy_upravlenya.php as the local route template
 * derived from the historical governance content and the current new-style theme shell.
 */
