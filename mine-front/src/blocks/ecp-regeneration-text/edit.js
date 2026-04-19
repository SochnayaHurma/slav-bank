import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const instructionUrl =
	'https://slavbank.ru/wp-content/uploads/instrukcziya-po-peregeneraczii-klyuchej.pdf';

const paragraph = ( content, attributes = {} ) => [
	'core/paragraph',
	{
		content,
		...attributes,
	},
];

const image = ( id, url, width, height ) => [
	'core/image',
	{
		id,
		url,
		alt: '',
		width,
		height,
		sizeSlug: 'large',
		className: 'size-large',
	},
];

const TEMPLATE = [
	[
		'core/heading',
		{
			level: 2,
			content:
				'<strong>Инструкция по перегенерации электронной подписи с рабочего места.</strong>',
		},
	],
	paragraph(
		'<strong>За 30 дней до окончания срока действия </strong>электронной цифровой <strong>подписи (ЭЦП)</strong>, система выдает предупреждение о том, что <strong>«требуется плановая перегенерация сертификата»</strong>.'
	),
	paragraph(
		'<strong>Для выполнения этой процедуры нужно произвести следующие операции:</strong>'
	),
	paragraph(
		'<strong>1. </strong>Выбрать пункт меню: <strong>Сервис &gt; Безопасность &gt; Профили</strong>.'
	),
	image(
		482,
		'https://slavbank.ru/wp-content/uploads/2021/03/instr1.jpg',
		449,
		100
	),
	paragraph(
		'<strong>2. Выбрать владельца ЭЦП</strong>, для перегенерации:'
	),
	image(
		483,
		'https://slavbank.ru/wp-content/uploads/2021/03/instr2.jpg',
		607,
		233
	),
	paragraph(
		'<strong>3. Нажать</strong> слева вверху экрана на кнопку <strong>“Создать запрос на генерацию/перегенерацию”</strong>:'
	),
	image(
		484,
		'https://slavbank.ru/wp-content/uploads/2021/03/zapros3.jpg',
		324,
		102
	),
	paragraph(
		'после чего <strong>подписать и отправить</strong> запрос кнопкой <strong>“Отправить документ в банк”</strong>:'
	),
	image(
		485,
		'https://slavbank.ru/wp-content/uploads/2021/03/zapros3.1.jpg',
		333,
		106
	),
	paragraph(
		'статус документа изменится на <strong>«Принят банком»</strong>:'
	),
	image(
		486,
		'https://slavbank.ru/wp-content/uploads/2021/03/gen3.2.jpg',
		623,
		106
	),
	paragraph(
		'А через<strong> 2-3</strong> минуты на <strong>«Ожидает акт»</strong>:'
	),
	image(
		487,
		'https://slavbank.ru/wp-content/uploads/2021/03/gen3.3.jpg',
		623,
		96
	),
	paragraph(
		'<strong>4. </strong>После того, как статус документа установился в «Ожидает акт», <strong>выбираем владельца ЭЦП</strong>'
	),
	image(
		488,
		'https://slavbank.ru/wp-content/uploads/2021/03/instr4.jpg',
		624,
		232
	),
	paragraph(
		'<strong>5.</strong> Нажимаем кнопку слева вверху экрана: <strong>«Просмотреть Акт признания сертификата»</strong>'
	),
	image(
		489,
		'https://slavbank.ru/wp-content/uploads/2021/03/instr5.jpg',
		461,
		87
	),
	paragraph(
		'И клавишей <strong>«Печать»</strong> распечатываем <strong>2 экземпляра</strong> Акта признания:'
	),
	image(
		490,
		'https://slavbank.ru/wp-content/uploads/2021/03/instr_print6.jpg',
		432,
		91
	),
	paragraph(
		'<strong>В Акте признания заполняются следующие реквизиты</strong>:'
	),
	paragraph( '<em>»» ИНН Организации (ИП)</em>' ),
	paragraph( '<em>»» Подпись владельца ЭЦП (с расшифровкой).</em>' ),
	paragraph(
		'<em>»» Подпись руководителя организации (с расшифровкой).</em>'
	),
	paragraph( '<em>»» Дата подписания Акта.</em>' ),
	paragraph(
		'<em>»» И ставится печать. </em><br><br><strong>ВАЖНО: необходимо предоставить подписанные акты до истечения срока действия ЭЦП. </strong><br><strong>Если перегенерация произведена в последний день действия ЭЦП, обязательно сообщите об этом по телефону 66-51-95.</strong>'
	),
	image(
		491,
		'https://slavbank.ru/wp-content/uploads/2021/03/sert6.1.jpg',
		601,
		638
	),
	paragraph(
		'После того, как в банк будут переданы <strong>Акты признания</strong> и <strong>специалист завершит процесс перегенерации</strong>, при входе в Клиент-Банк, вы <strong>увидите следующую информацию</strong>:'
	),
	image(
		492,
		'https://slavbank.ru/wp-content/uploads/2021/03/sert6.2.jpg',
		623,
		146
	),
	paragraph(
		'Для того, чтобы <strong>получить новый сертификат</strong>, нужно нажать кнопку в левом верхнем углу <strong>«Получить сертификат (ключ)»:</strong>'
	),
	image(
		493,
		'https://slavbank.ru/wp-content/uploads/2021/03/sert6.3.jpg',
		301,
		93
	),
	paragraph( 'Появится сообщение:' ),
	image(
		494,
		'https://slavbank.ru/wp-content/uploads/2021/03/sert6.4.jpg',
		624,
		115
	),
	paragraph( 'Нажать кнопку <strong>«Продолжить».</strong>' ),
	paragraph( 'После появления сообщения:' ),
	image(
		495,
		'https://slavbank.ru/wp-content/uploads/2021/03/sert6.5.jpg',
		624,
		96
	),
	paragraph(
		'<strong><em>Процесс перегенерации завершен, сертификат записан на ваш сменный носитель.</em></strong>'
	),
	paragraph(
		`<strong><a href="${ instructionUrl }">Скачать инструкцию по перегенерации ›››</a></strong>`,
		{ align: 'right' }
	),
];

export default function Edit() {
	const blockProps = useBlockProps( {
		className: 'prose',
	} );

	return (
		<div { ...blockProps }>
			<div className="entry-content">
				<InnerBlocks template={ TEMPLATE } />
			</div>
		</div>
	);
}
