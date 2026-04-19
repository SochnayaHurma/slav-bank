import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const p = ( content, attributes = {} ) => [
	'core/paragraph',
	{
		content,
		...attributes,
	},
];

const heading = ( content, attributes = {} ) => [
	'core/heading',
	{
		content,
		level: 2,
		...attributes,
	},
];

const table = ( body ) => [
	'core/table',
	{
		body,
	},
];

const TEXT_TEMPLATE = [
	p(
		'&emsp;&emsp;<strong>Кредитование физических лиц осуществляется в индивидуальном порядке</strong>.',
		{ className: 'has-text-align-justify has-dark-blue-color has-text-color' }
	),
	p(
		'&emsp;&emsp;<strong><em>Более подробную информацию Вы можете получить в</em></strong><br><strong><em>Управлении по кредитованию и инвестициям Банка по телефону:&nbsp; (8162) 66-52-56 или 66-52-63</em></strong>',
		{ className: 'has-dark-blue-color has-text-color' }
	),
	p(
		'&emsp;&emsp;Банк имеет Базовую лицензию на осуществление банковских операций со средствами в рублях и иностранной валюте (без права привлечения во вклады денежных средств физических лиц) и на привлечение во вклады и размещение драгоценных металлов Банка России N 804 от 06.09.2018 г.<br>Банк не является участником системы страхования вкладов.<br><br>&emsp;&emsp;Протоколом расширенного заседания Правления АО НКБ «СЛАВЯНБАНК» от&nbsp;21 декабря 2021г. банк установил следующие процентные ставки:',
		{ fontSize: 'normal' }
	),
	heading( '&emsp;<strong><span>по имеющимся вкладам:</span></strong>' ),
	table( [
		{
			cells: [
				{ content: '&emsp;&emsp;Срочный вклад на 1 год' },
				{ content: '0,1&nbsp;% годовых' },
			],
		},
		{
			cells: [
				{ content: '&emsp;&emsp;Льготный пенсионный вклад' },
				{ content: '0,1&nbsp;% годовых' },
			],
		},
		{
			cells: [
				{ content: '&emsp;&emsp;Служебный вклад' },
				{ content: '0,1&nbsp;% годовых' },
			],
		},
		{
			cells: [
				{ content: '&emsp;&emsp;Вклад до востребования' },
				{ content: '0,1 % годовых' },
			],
		},
	] ),
	p(
		'&emsp;&emsp;<strong>Перечисленные процентные ставки действуют с 01&nbsp;января 2022 года.</strong>',
		{ className: 'has-dark-blue-color has-text-color' }
	),
	p( '&emsp;&emsp;<strong>В АО НКБ «СЛАВЯНБАНК» Вы можете произвести:</strong>', {
		className: 'has-text-align-justify',
	} ),
	p( '&emsp;&emsp;🗹 <strong>Перевод денежных средств: </strong>', {
		className: 'has-text-align-justify has-dark-blue-color has-text-color',
	} ),
	p(
		'» без открытия счета, в валюте РФ на счет физического или юридического лица в любом банке России;<br>»<strong> </strong>в иностранной валюте в страны ближнего и дальнего зарубежья.',
		{ className: 'has-text-align-justify' }
	),
	p(
		'» <strong><a href="https://slavbank.ru/wp-content/uploads/informacziya-po-perevodam-10-mr-2025-rubli.doc">Информация о переводах денежных средств по поручению клиентов-физических без открытия банковских счетов в валюте РФ &gt;&gt;&gt;</a></strong>'
	),
	p(
		'» <strong><a href="https://slavbank.ru/wp-content/uploads/informacziya-po-perevodam-10-mr-2025-valyuta.doc">Информация о трансграничных переводах денежных средств по поручению клиентов-физических лиц без открытия банковских счетов в иностанной валюте &gt;&gt;&gt;</a></strong>'
	),
	p(
		'» <strong><a href="https://slavbank.ru/wp-content/uploads/informacziya-o-transgranichnyh-perevodah_ang-prav.docx">Information on cross-border monetary funds transfers on behalf of individual clients&nbsp;without opening bank accounts</a></strong>'
	),
	p( '&emsp;&emsp;🗹 <strong>Операции с наличной иностранной валютой</strong>:', {
		className: 'has-dark-blue-color has-text-color',
	} ),
	p(
		'» покупка наличной иностранной валюты за наличную валюту РФ;<br>» продажа наличной иностранной валюты за наличную валюту РФ;<br>» экспертиза денежных знаков иностранных государств'
	),
	p( '&emsp;&emsp;<strong>Прием коммунальных платежей с 01.06.2020 не производится</strong>!', {
		className: 'has-text-color',
	} ),
	p(
		'&emsp;&emsp;Более подробную информацию по денежным переводам Вы можете получить:<br>» <em>по переводам в валюте РФ в Отделе по работе с вкладчиками и по тел.&nbsp; (8162) 66-52-74</em><br>» <em>по переводам в иностранной валюте — в Управлении валютных операций и контроля и по тел. (8162) 66-52-54</em>.',
		{
			className: 'has-dark-blue-color has-text-color',
			fontSize: 'normal',
		}
	),
];

export default function Edit() {
	const blockProps = useBlockProps( {
		className: 'prose private-persons-text',
	} );

	return (
		<div { ...blockProps }>
			<div className="entry-content">
				<InnerBlocks template={ TEXT_TEMPLATE } />
			</div>
		</div>
	);
}
