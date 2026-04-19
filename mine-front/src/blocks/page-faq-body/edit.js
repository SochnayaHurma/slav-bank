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
		level: 3,
		...attributes,
	},
];

const list = ( values, attributes = {} ) => [
	'core/list',
	{
		values,
		...attributes,
	},
];

const separator = ( attributes = {} ) => [ 'core/separator', attributes ];

const image = ( url, attributes = {} ) => [
	'core/image',
	{
		url,
		sizeSlug: 'large',
		...attributes,
	},
];

const FAQ_TEMPLATE = [
	p(
		'&emsp;&emsp;<strong>Вы всегда можете позвонить нам в <a href="#teh">техническую поддержку</a>, которая работает для вас <a href="#rezhim"><em>ежедневно в режиме работы банка.</em></a></strong> <strong><em>Тел. (8162) 66-51-95, 66-52-47, +7-921-690-17-00</em></strong>.',
		{ className: 'has-dark-blue-color has-text-color' }
	),
	separator( {
		className:
			'has-text-color has-dark-blue-color has-css-opacity has-dark-blue-background-color has-background is-style-wide',
	} ),
	p(
		'&emsp;&emsp;<strong><span>Содержание страницы</span></strong>:',
		{ className: 'has-dark-blue-color has-text-color' }
	),
	p(
		'&emsp;&emsp;<strong><a href="#1">1. Не зайти в клиент банк, пишет «Ключи не прошли проверку».</a></strong><br><br>&emsp;&emsp;<a href="#2"><strong>2.</strong> <strong>Я выгрузил платежку в Клиент-банк а подписать и отправить не могу, не активные кнопки.</strong></a><br><br>&emsp;&emsp;<strong><a href="#3">3. Я вставил флешку в другой компьютер, загрузил и установил плагин (как просила система) но в клиент-банк все равно не зайти.</a></strong><br><br>&emsp;&emsp;<strong><a href="#4">4. Как заполнить платежное поручение при оплате за третье лицо?</a></strong><br><br>&emsp;&emsp;<a href="#5"><strong>5.</strong> <strong>Не зайти в Клиент-Банк, пишет «Неверно указан логин и пароль».</strong></a><br><br>&emsp;&emsp;<strong><a href="#6">6. При входе в Клиент-Банк, пишет «Операция отменена пользователем»</a></strong><br>'
	),
	p(
		'<strong>1. Не зайти в клиент банк, пишет «Ключи не прошли проверку».</strong>',
		{ anchor: '1', className: 'has-dark-blue-color has-text-color' }
	),
	p( '<strong>Решение :</strong>' ),
	p(
		'&emsp;&emsp;<strong>1.1.</strong> Проверить подключена ли флешка и под какой буквой (см.Проводник);'
	),
	p(
		'&emsp;&emsp;<strong>1.2.</strong> Проверить, соответствует ли буква USB носителя ключа букве в пути к ключу, перейти по ссылке <a href="https://slavbank.ru/podderzhka-html/1.jpg"><strong>здесь</strong></a>'
	),
	image( 'https://slavbank.ru/wp-content/uploads/kb1.jpg', {
		id: 1427,
		alt: '',
		width: 502,
		height: 206,
	} ),
	p(
		'&emsp;&emsp;<strong>1.3.</strong>&nbsp;Откроется окно, в котором можно изменить букву флешки на нужную и нажать <strong>ОК</strong>'
	),
	image( 'https://slavbank.ru/wp-content/uploads/kb2.jpg', {
		id: 1428,
		alt: '',
		width: 704,
		height: 413,
	} ),
	p(
		'&emsp;&emsp;<strong>1.4. </strong>Обновить страницу входа в клиент-банк (Ctrl+F5), повторить ввод логина и пароля.'
	),
	p(
		'<strong>2.</strong> <strong>Я выгрузил платежку в Клиент-банк а подписать и отправить не могу, не активные кнопки.</strong>',
		{ anchor: '2', className: 'has-dark-blue-color has-text-color' }
	),
	p( '<strong>Решение: </strong>' ),
	p( '&emsp;&emsp;<strong>2.1.</strong> Проверьте статус платежки:' ),
	p(
		'если статус <strong>Импортировано</strong>, значит платежное поручение содержит ошибку,'
	),
	p(
		'если статус <strong>Новый</strong>, а кнопки неактивны – возможно сеанс к Клиент-банке был неактивен более 10 минут – необходимо выйти из КБ нажав <strong>«Выйти из системы»</strong> и снова зайти.'
	),
	p(
		'<strong>3. Я вставил флешку в другой компьютер, загрузил и установил плагин (как просила система) но в клиент-банк все равно не зайти.</strong>',
		{ anchor: '3', className: 'has-dark-blue-color has-text-color' }
	),
	p(
		'<strong>Решение:</strong><br><br>&emsp;&emsp;<strong>3.1.</strong> Первое что нужно сделать – перезагрузить браузер — выйти из браузера после установки плагина (крестик к правом верхнем углу);'
	),
	p(
		'&emsp;&emsp;<strong>3.2. </strong>Далее настроить параметры ключевых носителей (после ввода логина и пароля в поле дополнительной авторизации перейти по ссылке <strong>«здесь» </strong>— проверить букву флешки) (см. п.1)'
	),
	p(
		'&emsp;&emsp;Как правило после этого войти в клиент-банк получается (если нет, необходимо проверить установку плагина и работоспособность флешки/порта).'
	),
	p(
		'<strong>4. Как заполнить платежное поручение при оплате за третье лицо?</strong>',
		{ anchor: '4', className: 'has-dark-blue-color has-text-color' }
	),
	p(
		'<strong>Решение:</strong><br><br>&emsp;&emsp;<strong>В заполнении документа на оплату налога за другое юридическое лицо есть несколько особенностей:</strong>',
		{ className: 'has-text-align-justify' }
	),
	p(
		'<strong>Платежку заполните в общем порядке, но с учетом следующих особенностей (п. 4 Приложения N 1, пп. 5 п. 13 Приложения N 2, Приложение N 5 к Приказу Минфина России от 12.11.2013 N 107н):</strong>'
	),
	list(
		'<li>в поле 101 укажите статус лица, за которое платите налог;</li><li>в полях 60 и 102 отразите его ИНН и КПП. Если перечисляете налог за ИП, то в поле 102 поставьте «0» (ноль);</li><li>в поле 8 покажите свои данные (наименование организации, а для предпринимателя — Ф.И.О. и статус «ИП» в скобках);</li><li>в поле 24 «Назначение платежа» укажите сначала свои ИНН и КПП (если он есть) через знак «//», затем наименование организации или Ф.И.О. предпринимателя (с указанием «ИП» в скобках), за кого перечисляете налог. После этого через знак «//» укажите назначение платежа. Например: «7727098760 // 772701001 // ООО «Бета» // 1/3 НДС за III квартал 2022 г.».</li>'
	),
	p( 'Данные о платеже и получателе уточните у того, за кого платите налог.' ),
	p(
		'<strong>Для удобства вы можете воспользоваться интернет-сервисом налоговой службы «Уплата налогов за третьих лиц» по адресу <a href="https://service.nalog.ru/payment/payment-ex.html">https://service.nalog.ru/payment/payment-ex.html</a>, чтобы оформить платежное поручение.</strong>'
	),
	p(
		'<strong>5. Не зайти в Клиент-Банк, пишет «Неверно указан логин и пароль».</strong>',
		{ anchor: '5', className: 'has-dark-blue-color has-text-color' }
	),
	p( '<strong>Решение: </strong>' ),
	list(
		'<li>Одной из причин такой ошибки может быть попытка входа в клиент-банк другого банка.<br>&emsp;&emsp;Проверьте адрес входа в клиент-банк.<br>&emsp;&emsp;Он должен быть <a href="https://dbo.slavbank.ru/"><strong>https://dbo.slavbank.ru</strong></a>.<br>&emsp;&emsp;Правильность адреса можно проверить зайдя к нам на сайт <a href="https://slavbank.ru/"><strong>https://slavbank.ru</strong></a>, вкладка <strong><a href="https://dbo.slavbank.ru/">КЛИЕНТ-БАНК</a>.</strong></li>'
	),
	list( '<li>Проверьте также правильность вводимого логина и пароля.</li>' ),
	list(
		'<li><strong>В случае возникновения подозрений компрометации* доступа в Клиент-Банк, необходимо незамедлительно сообщить об этом в банк.</strong></li>'
	),
	p(
		'<strong>6. При входе в Клиент-Банк, пишет «Операция отменена пользователем»</strong>',
		{ anchor: '6', className: 'has-dark-blue-color has-text-color' }
	),
	p( '<strong>Решение:</strong>' ),
	p(
		'&emsp;Если после ввода логина и пароля, после дополнительной авторизации появляется уведомление о том, что «Операция отменена пользователем» — <strong>требуется переустановка плагина BSS.</strong><br>&emsp;Переустановку плагина можно сделать самостоятельно или обратится в службу технической поддержки банка.',
		{ className: 'has-text-align-justify' }
	),
	separator( { className: 'has-css-opacity is-style-wide' } ),
	p(
		'* <strong>Компрометация ключа</strong> — событие, в результате которого закрытый (секретный) ключ или его часть становятся известны и/или доступны постороннему лицу.'
	),
	heading(
		'<em><strong>В случае возникновения вопросов вы можете связаться с нами по телефонам,<br>указанным ниже:<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Телефоны технической поддержки:<br>(8162) 66-51-95, 66-52-47, +7-921-690-17-00.</strong></em>',
		{
			anchor: 'teh',
			className:
				'wp-block-heading has-text-align-center has-dark-blue-color has-text-color',
			textAlign: 'center',
		}
	),
	heading(
		'<strong><em>&nbsp;Режим работы технической поддержки:</em></strong>&nbsp;<br><strong>с 8.30 до 17.30 (пт. – до 16.30), обед с 13.00 до 14.00</strong>, (<strong>выходной суб., вск.</strong>)',
		{
			anchor: 'rezhim',
			className: 'wp-block-heading has-text-align-center',
			textAlign: 'center',
		}
	),
	heading(
		'<em>Электронная почта</em>:&nbsp;<a href="mailto:nkb@slavbank.ru"><strong>nkb@slavbank.ru</strong></a>',
		{
			className: 'wp-block-heading has-text-align-center',
			textAlign: 'center',
		}
	),
];

export default function Edit() {
	const blockProps = useBlockProps( {
		className: 'bento-card',
		style: { padding: 'var(--s-4)', position: 'relative' },
	} );

	return (
		<div { ...blockProps }>
			<div className="prose">
				<div className="entry-content">
					<InnerBlocks template={ FAQ_TEMPLATE } />
				</div>
			</div>
		</div>
	);
}
