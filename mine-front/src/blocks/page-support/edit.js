import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import {createAction, createBadge} from '../hero-simple/edit';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'ПОДДЕРЖКА',
      kicker: 'qweq',
			description: 'Часто задаваемые вопросы — ответы на вопросы, возникающие при работе в системе Клиент-Банк (данный раздел сайта постоянно обновляется и редактируется).',
      badge: [
        {...createBadge(),
  text: 'Безопасность1',
  url: 'https://slavbank.ru/podderzhka-html/recom_bezopasnost.html',
  linkMode: false,
        }
      ],
      actions: [],
    }
	],
	[
		'slav-bank/body-support',
		{
		}
	],

];

export default function Edit() {
	const blockProps = useBlockProps({
		className: 'theme-shell',
	});

	return (
// ПОДДЕРЖКА
<main {...blockProps} id="main">
<InnerBlocks template={TEMPLATE}/>

</main>
	);
}