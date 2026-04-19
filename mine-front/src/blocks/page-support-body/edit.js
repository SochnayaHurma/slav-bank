import { InnerBlocks } from '@wordpress/block-editor';

const SUPPORT_PROSE_ITEMS = [
	{
		id: 'faq',
		content:
			'&nbsp; &nbsp; &nbsp; &gt;&gt; <a href="/podderzhka-html/chasto-zadavaemye-voprosy.html/">Часто задаваемые вопросы</a>&nbsp; — ответы на вопросы, возникающие при работе в системе Клиент-Банк (данный раздел сайта постоянно обновляется и редактируется).&nbsp;',
	},
	{
		id: 'client-bank-login',
		content:
			'&nbsp; &nbsp; &nbsp; &gt;&gt; Вход в Клиент-Банк &nbsp;— <a href="https://dbo.slavbank.ru:20101/">https://dbo.slavbank.ru:20101</a> (для доступа возможно потребуется установка плагина).<br>&nbsp; &nbsp; &nbsp; Система&nbsp;«ДБО BS-Client x64» – это современная и удобная система интернет-банкинга, позволяющая клиентам Банка осуществлять полноценное информационное и платежно-расчетное обслуживание в Банке без личного присутствия с использованием персонального компьютера и сети Интернет.&nbsp;',
	},
	{
		id: 'client-bank-backup-login',
		content:
			'&nbsp; &nbsp; &nbsp; &nbsp; &gt;&gt; Резервный вход в Клиент-Банк — <a href="https://dbo1.slavbank.ru:20101/">https://dbo1.slavbank.ru:20101</a>&nbsp;— необходим для входа в Клиент-Банк в случае, если&nbsp; вход в Клиент-Банк по обычной ссылке &nbsp;недоступен.&nbsp; Данной ссылкой можно воспользоваться только после подтверждения банка о переходе на Резервный вход, позвонив в техническую поддержку Банка.',
	},
	{
		id: 'user-guide',
		content:
			'&nbsp; &nbsp; &nbsp; &nbsp; &gt;&gt; Руководство пользователя «Интернет-Клиент» —&nbsp; полная подробная инструкция по работе в системе «Клиент-Банк». <a href="https://slavbank.ru/wp-content/uploads/internet-klient.-rukovodstvo-polzovatelya.pdf">Скачать здесь &gt;&gt;</a>',
	},
	{
		id: 'ecp-regeneration',
		content:
			'&nbsp; &nbsp; &nbsp; &gt;&gt; <a href="/podderzhka-html/regen.html/">Перегенерация ЭЦП</a> – продление прав доступа в Клиент-Банк. Здесь представлена подробная пошаговая инструкция по перегенерации ЭЦП.&nbsp;',
	},
	{
		id: 'remote-support',
		content:
			'&nbsp; &nbsp; &nbsp; &gt;&gt; <a href="https://www.ammyy.com/ru/">Удаленное управление</a> – здесь вы сможете скачать последнюю версию программы Ammyy Admin удаленного доступа (адрес сайта https://www.ammyy.com/ru/, наименование&nbsp; файла программы AA_v3.exe)',
	},
	{
		id: 'security',
		content:
			'&nbsp; &nbsp; &nbsp; &gt;&gt; <a href="/podderzhka-html/recom_bezopasnost.html/">Рекомендации по безопасности&nbsp;</a>— обращаем Ваше внимание на соответствие доменного имени сайта&nbsp;— <a href="/">slavbank.ru</a>&nbsp;или &nbsp;<a href="https://dbo.slavbank.ru:20101/">dbo.slavbank.ru</a>.',
	},
];

const TEMPLATE = [
	[
		'slav-bank/title',
		{
			title: 'Данный раздел создан для поддержки клиентов АО НКБ «СЛАВЯНБАНК».',
			level: '2',
		},
	],
	[ 'slav-bank/kicker', { text: 'Популярные темы' } ],
	[
		'slav-bank/tile-container',
		{
			tiles: [
				{
					title: 'Часто задаваемые вопросы',
					urlTitle: 'Открыть раздел →',
					url: '',
				},
				{
					title: 'Перегенерация ЭЦП',
					urlTitle: 'Открыть раздел →',
					url: '',
				},
				{
					title: 'Рекомендации по безопасности',
					urlTitle: 'Открыть раздел →',
					url: '',
				},
			],
		},
	],
	[ 'slav-bank/kicker', { text: 'Документы' } ],
	[ 'slav-bank/tile-file-container', {} ],
	[
		'slav-bank/title',
		{
			title: 'В случае возникновения вопросов вы можете связаться с\nнами по телефонам, указанным ниже:',
			level: '3',
		},
	],
	[
		'slav-bank/simple-card',
		{
			title: 'Телефоны технической поддержки:',
			description: '(8162) 66-51-95,\n66-52-47,\n+7921-690-17-00',
		},
	],
	[
		'slav-bank/one-row-card',
		{
			title: 'Режим работы:',
			description:
				'с 8.30 до 17.30 (пт. – до 16.30), обед с 13.00 до 14.00, (выходной суб., вск.)',
		},
	],
	[
		'slav-bank/title-ref',
		{
			title: 'Электронная почта:&nbsp;',
			description: 'nkb@slavbank.ru',
			url: 'mailto:nkb@slavbank.ru',
		},
	],
	[
		'slav-bank/support-prose',
		{
			heading:
				'&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Здесь вы найдете полезную информацию, инструкции, ссылки для работы с системами банка.',
			items: SUPPORT_PROSE_ITEMS,
		},
	],
];

export default function Edit() {
	return (
		<div className="bento-card">
			<InnerBlocks template={ TEMPLATE } templateLock="all" />
		</div>
	);
}
