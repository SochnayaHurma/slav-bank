import { createBodyEdit } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/title',
		{
			title: 'Будьте осторожны!',
			level: '3',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Любые иные интернет-сайты, содержащие в доменном имени указание на принадлежность к Банку, а также содержащие на своих страницах логотип и наименование Банка, могут использоваться для заражения устройств вредоносным ПО и получения конфиденциальных данных.',
			className: 'has-text-align-justify',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'При совершении действий в сети Интернет обращайте внимание на доменное имя сайта: <a href="https://slavbank.ru/">www.slavbank.ru</a> или <a href="https://dbo.slavbank.ru:20101/">dbo.slavbank.ru</a>.',
			className: 'has-text-align-justify',
		},
	],
];

export default createBodyEdit( TEMPLATE );
