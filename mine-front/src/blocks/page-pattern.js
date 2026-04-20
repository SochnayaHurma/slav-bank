import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { createAction, createBadge } from './hero-simple/edit';

export const heroBadge = ( text, url ) => ( {
	...createBadge(),
	text,
	url,
	linkMode: false,
} );

export const heroAction = ( text, url ) => ( {
	...createAction(),
	text,
	url,
	linkMode: false,
} );

export const createPageEdit = ( template ) =>
	function Edit() {
		return (
			<main id="main">
				<InnerBlocks template={ template } />
				<div
					className="toast"
					role="status"
					aria-live="polite"
					aria-atomic="true"
					hidden
				>
					Готово
				</div>
			</main>
		);
	};

export function pageSave() {
	const blockProps = useBlockProps.save( {
		className: 'theme-shell',
	} );

	return (
		<main { ...blockProps } id="main">
			<InnerBlocks.Content />
			<div
				className="toast"
				role="status"
				aria-live="polite"
				aria-atomic="true"
				hidden
			>
				Готово
			</div>
		</main>
	);
}

export const createBentoEdit = ( bodyBlockName ) =>
	function Edit() {
		const innerBlocksProps = useInnerBlocksProps(
			{
				className: 'bento',
			},
			{
				template: [
					[ bodyBlockName, {} ],
					[ 'slav-bank/bento-shell-sidebar', {} ],
				],
			}
		);

		return (
			<section className="block dashv2" id="content">
				<div className="container">
					<div { ...innerBlocksProps } />
				</div>
			</section>
		);
	};

export function bentoSave() {
	const blockProps = useBlockProps.save( {
		className: 'block dashv2',
		id: 'content',
	} );

	return (
		<section { ...blockProps }>
			<div className="container">
				<div className="bento">
					<InnerBlocks.Content />
				</div>
			</div>
		</section>
	);
}

export const createBodyEdit = ( template ) =>
	function Edit() {
		const blockProps = useBlockProps( {
			className: 'bento-card',
			style: { padding: 'var(--s-4)', position: 'relative' },
		} );

		return (
			<div className='bento-card' style={{ padding: 'var(--s-4)', position: 'relative' }}>
				<InnerBlocks template={ template } />
			</div>
		);
	};

export function bodySave() {
	const blockProps = useBlockProps.save( {
		className: 'bento-card',
		style: { padding: 'var(--s-4)', position: 'relative' },
	} );

	return (
	<div
		className="bento-card"
		style={ { padding: 'var(--s-4)', position: 'relative' } }>
			<InnerBlocks.Content />
		</div>
	);
}

export const createProseEdit = ( template ) =>
	function Edit() {
		const blockProps = useBlockProps( {
			className: 'prose',
		} );

		return (
			<div { ...blockProps }>
				<div className="entry-content">
					<InnerBlocks template={ template } />
				</div>
			</div>
		);
	};

export function proseSave() {
	const blockProps = useBlockProps.save( {
		className: 'prose',
	} );

	return (
		<div { ...blockProps }>
			<div className="entry-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
