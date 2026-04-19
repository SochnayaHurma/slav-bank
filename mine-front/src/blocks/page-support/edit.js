import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import {createAction, createBadge} from '../hero-simple/edit';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'ПОДДЕРЖКА',
      kicker: '',
			description: 'Часто задаваемые вопросы — ответы на вопросы, возникающие при работе в системе Клиент-Банк (данный раздел сайта постоянно обновляется и редактируется).',
      pillItems: [
      {
        ...createBadge(),
        text: 'Безопасность',
        url: 'https://slavbank.ru/podderzhka-html/recom_bezopasnost.html',
        linkMode: false,
      },
      {
        ...createBadge(),
        text: 'Клиент-Банк',
        url: 'https://slavbank.ru/klient-bank-online.html',
        linkMode: false,
      },
      {
        ...createBadge(),
        text: '123-ФЗ',
        url: 'https://slavbank.ru/obrashhenie-po-123-fz.html',
        linkMode: false,
      },
      ],
      actions: [
        {
          ...createAction(),
          text: 'Содержание',
          url: '#content',
          linkMode: false,
        },
        {
          ...createAction(),
          text: 'На главную',
          url: '/',
          linkMode: false,
        },
      ],
    }
	],
	[
		'slav-bank/body-support-bento',
		{
		}
	],

];

export default function Edit() {
	const blockProps = useBlockProps({
	});

	return (
// ПОДДЕРЖКА
<main  id="main">
<InnerBlocks template={TEMPLATE}/>
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