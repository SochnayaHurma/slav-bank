<?php
$show_sidebar = ! empty( $attributes['showSidebar'] );
$sidebar_kind = $attributes['sidebarKind'] ?? 'rates';

$classes = 'bento-shell';
$classes .= $show_sidebar ? ' has-sidebar' : ' no-sidebar';


?>



<?php if ( $show_sidebar ) : ?>
<aside class="bento-shell__sidebar" aria-label="<?php esc_attr_e( 'Sidebar', 'mytheme' ); ?>">
	<?php
	if ( 'rates' === $sidebar_kind ) {
		get_template_part(
			'template-parts/home',
			'stack',
			array(
				'mode'    => 'rates',
				'post_id' => get_the_ID(),
			)
		);
	} else {
		get_template_part(
			'template-parts/home',
			'stack',
			array(
				'mode'    => 'default',
				'post_id' => get_the_ID(),
			)
		);
	}
	?>
</aside>
<?php endif; ?>