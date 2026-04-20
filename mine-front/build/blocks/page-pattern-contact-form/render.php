<?php
$title = isset($attributes['title']) ? (string) $attributes['title'] : '';
$description = isset($attributes['description']) ? (string) $attributes['description'] : '';
$shortcode = isset($attributes['shortcode']) ? trim((string) $attributes['shortcode']) : '';
$fallback_text = isset($attributes['fallbackText']) ? (string) $attributes['fallbackText'] : '';

$form_markup = '';
if ($shortcode !== '') {
	if (function_exists('sb_alpha_apply_shortcode_markup')) {
		$form_markup = sb_alpha_apply_shortcode_markup($shortcode);
	} elseif (function_exists('do_shortcode')) {
		$form_markup = trim((string) do_shortcode($shortcode));
		if (strpos($form_markup, '[contact-form-7') !== false) {
			$form_markup = '';
		}
	}
}
?>

<div <?php echo get_block_wrapper_attributes(array('class' => 'form-shell')); ?> data-form-shell>
	<?php if ($title !== '') : ?>
		<h3><?php echo wp_kses_post($title); ?></h3>
	<?php endif; ?>

	<?php if ($description !== '') : ?>
		<p class="muted"><?php echo wp_kses_post($description); ?></p>
	<?php endif; ?>

	<div class="form-wrap">
		<?php if ($form_markup !== '') : ?>
			<?php echo $form_markup; ?>
		<?php elseif ($fallback_text !== '') : ?>
			<p class="muted"><?php echo wp_kses_post($fallback_text); ?></p>
		<?php endif; ?>
	</div>
</div>
