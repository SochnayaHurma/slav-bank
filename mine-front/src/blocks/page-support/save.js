import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';

export default function save() {
	const blockProps = useBlockProps.save({
		className: 'theme-shell',
	});

	return (
		<main { ...blockProps } id="main">
			<InnerBlocks.Content />
		</main>
	);
}