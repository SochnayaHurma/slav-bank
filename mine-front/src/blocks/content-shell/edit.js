import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const TEMPLATE = [
	[
		'core/group',
		{
			className: 'theme-shell__header',
			layout: { type: 'constrained' },
		},
		[
			[
				'core/heading',
				{
					level: 2,
					content: 'Заголовок секции',
				},
			],
			[
				'core/paragraph',
				{
					content: 'Короткий подзаголовок или лид.',
				},
			],
		],
	],
	[
		'core/group',
		{
			className: 'theme-shell__body',
			layout: { type: 'constrained' },
		},
		[
			[
				'core/paragraph',
				{
					content: 'Основной текст секции.',
				},
			],
		],
	],
	[
		'core/group',
		{
			className: 'theme-shell__footer',
			layout: { type: 'constrained' },
		},
		[
			[
				'core/buttons',
				{},
				[
					[
						'core/button',
						{
							text: 'Кнопка действия',
							url: '#'
						}
					]
				]
			]
		],
	],
];

export default function Edit() {
	const blockProps = useBlockProps({
		className: 'theme-shell',
	});

	return (
		<section {...blockProps}>
			<InnerBlocks
				template={TEMPLATE}
				templateLock="all"
			/>
		</section>
	);
}