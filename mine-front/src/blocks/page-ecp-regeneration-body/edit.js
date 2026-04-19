import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const STEPS = [
	{
		id: 'deadline',
		num: '01',
		title: 'За 30 дней до окончания срока действия электронной цифровой подписи (ЭЦП), система выдает предупреждение',
		text: 'о том, что «требуется плановая перегенерация сертификата».',
	},
	{
		id: 'operations',
		num: '02',
		title: 'Для выполнения этой процедуры нужно произвести следующие операции:',
		text: '',
	},
	{
		id: 'profiles',
		num: '03',
		title: '1. Выбрать пункт меню: Сервис > Безопасность > Профили.',
		text: '',
	},
	{
		id: 'owner',
		num: '04',
		title: '2. Выбрать владельца ЭЦП, для перегенерации:',
		text: '',
	},
	{
		id: 'request',
		num: '05',
		title: '3. Нажать слева вверху экрана на кнопку “Создать запрос на генерацию/перегенерацию”:',
		text: '',
	},
	{
		id: 'send',
		num: '06',
		title: 'после чего подписать и отправить запрос кнопкой “Отправить документ в банк”:',
		text: '',
	},
];

const DOCS = [
	{
		id: 'ecp-regeneration-instruction',
		title: 'Скачать инструкцию по перегенерации ›››',
		url: 'https://slavbank.ru/wp-content/uploads/instrukcziya-po-peregeneraczii-klyuchej.pdf',
		format: 'PDF',
		symbol: '→',
		opensInNewTab: true,
	},
];

const TEMPLATE = [
	[ 'slav-bank/kicker', { text: 'Краткая инструкция' } ],
	[
		'slav-bank/ecp-regeneration-alert',
		{
			title: 'Важно',
			text: 'Выпуск и перегенерация ЭЦП/ключей требует аккуратности. Используйте только официальные инструкции и защищённый канал связи.',
		},
	],
	[ 'slav-bank/ecp-regeneration-steps', { items: STEPS } ],
	[ 'slav-bank/kicker', { text: 'Документы' } ],
	[ 'slav-bank/ecp-regeneration-documents', { items: DOCS } ],
	[ 'slav-bank/ecp-regeneration-text', {} ],
];

export default function Edit() {
	const blockProps = useBlockProps( {
		className: 'bento-card',
		style: { padding: 'var(--s-4)', position: 'relative' },
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks template={ TEMPLATE } />
		</div>
	);
}
