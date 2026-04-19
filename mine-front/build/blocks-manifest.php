<?php
// This file is generated. Do not modify it manually.
return array(
	'base-card-ref' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/card-ref',
		'title' => 'Карточка ссылки',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Секция с заранее заданными контейнерами и наполнением.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'base-info-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/info-block',
		'title' => 'Заголовок + большой текст',
		'category' => 'Компоненты темы',
		'icon' => 'screenoptions',
		'description' => 'Для объемного текста',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'base-kicker' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/kicker',
		'title' => 'Подзаголовок (Кикер)',
		'category' => 'Компоненты темы',
		'icon' => 'screenoptions',
		'description' => 'Заголовок с выбором уровня h1,h2,h3...',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'default' => 'Мини описание...'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'base-linked-text' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/one-row-card',
		'title' => 'Строчная карточка',
		'category' => 'Компоненты темы',
		'icon' => 'screenoptions',
		'description' => 'Заголовок и описание в одну строку',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок...'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Мини описание...'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'base-one-row-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/one-row-card',
		'title' => 'Строчная карточка',
		'category' => 'Компоненты темы',
		'icon' => 'screenoptions',
		'description' => 'Заголовок и описание в одну строку',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок...'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Мини описание...'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'base-simple-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/simple-card',
		'title' => 'Простая карточка',
		'category' => 'Компоненты темы',
		'icon' => 'screenoptions',
		'description' => 'Простая карточка (Заголовок + текст)',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок...'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Мини описание...'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'base-tile-container' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/tile-container',
		'title' => 'Контейнер ссылок-плиток',
		'category' => 'Компоненты темы',
		'icon' => 'screenoptions',
		'description' => '',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'tiles' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'base-tile-file-container' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/tile-file-container',
		'title' => 'Контейнер файлов-плиток',
		'category' => 'Компоненты темы',
		'icon' => 'screenoptions',
		'description' => '',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'tiles' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Скачать здесь >>',
						'format' => 'PDF',
						'symbol' => '→',
						'url' => 'https://slavbank.ru/wp-content/uploads/internet-klient.-rukovodstvo-polzovatelya.pdf'
					)
				)
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'base-title' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/title',
		'title' => 'Заголовок',
		'category' => 'Компоненты темы',
		'icon' => 'screenoptions',
		'description' => 'Заголовок с выбором уровня h1,h2,h3...',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок...'
			),
			'level' => array(
				'type' => 'string',
				'default' => '2'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'base-title-ref' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/title-ref',
		'title' => 'Заголовок с ссылкой',
		'category' => 'Компоненты темы',
		'icon' => 'screenoptions',
		'description' => 'Заголовок с ссылкой',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок...'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Ссылка...'
			),
			'url' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkMode' => array(
				'type' => 'boolean',
				'default' => false
			),
			'pageId' => array(
				'type' => 'number',
				'default' => 0
			),
			'opensInNewTab' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'bent-shell' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'mytheme/bento-shell-sidebar-page',
		'title' => 'Страница с сайдбаром',
		'category' => 'Компоненты',
		'icon' => 'columns',
		'description' => 'Заготовка страницы с сайдбаром справа',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'attributes' => array(
			'showSidebar' => array(
				'type' => 'boolean',
				'default' => true
			),
			'sidebarKind' => array(
				'type' => 'string',
				'default' => 'rates'
			)
		),
		'supports' => array(
			'html' => false,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'ecp-regeneration-alert' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/ecp-regeneration-alert',
		'title' => 'Перегенерация ЭЦП: предупреждение',
		'category' => 'Компоненты темы',
		'icon' => 'warning',
		'description' => 'Предупреждение для страницы перегенерации ЭЦП.',
		'parent' => array(
			'slav-bank/body-ecp-regeneration'
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Важно'
			),
			'text' => array(
				'type' => 'string',
				'default' => 'Выпуск и перегенерация ЭЦП/ключей требует аккуратности. Используйте только официальные инструкции и защищённый канал связи.'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'ecp-regeneration-documents' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/ecp-regeneration-documents',
		'title' => 'Перегенерация ЭЦП: документы',
		'category' => 'Компоненты темы',
		'icon' => 'media-document',
		'description' => 'Повторяемые карточки документов для страницы перегенерации ЭЦП.',
		'parent' => array(
			'slav-bank/body-ecp-regeneration'
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'ecp-regeneration-steps' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/ecp-regeneration-steps',
		'title' => 'Перегенерация ЭЦП: шаги',
		'category' => 'Компоненты темы',
		'icon' => 'editor-ol',
		'description' => 'Повторяемые шаги краткой инструкции.',
		'parent' => array(
			'slav-bank/body-ecp-regeneration'
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'ecp-regeneration-text' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/ecp-regeneration-text',
		'title' => 'Перегенерация ЭЦП: текст',
		'category' => 'Компоненты темы',
		'icon' => 'text-page',
		'description' => 'Текстовая инструкция с редактируемыми абзацами и изображениями.',
		'parent' => array(
			'slav-bank/body-ecp-regeneration'
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'hero-simple' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/hero-simple',
		'title' => 'Hero simple',
		'category' => 'Компоненты темы',
		'icon' => 'screenoptions',
		'description' => 'Секция с заранее заданными контейнерами и наполнением.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'kicker' => array(
				'type' => 'string',
				'default' => 'О банке'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок страницы'
			),
			'description' => array(
				'type' => 'string',
				'default' => ''
			),
			'actions' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'pillItems' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'primaryText' => array(
				'type' => 'string',
				'default' => ''
			),
			'primaryUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'secondaryText' => array(
				'type' => 'string',
				'default' => ''
			),
			'secondaryUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'tertiaryText' => array(
				'type' => 'string',
				'default' => ''
			),
			'tertiaryUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'badge' => array(
				'type' => 'string',
				'default' => 'Контакты'
			),
			'phoneText' => array(
				'type' => 'string',
				'default' => ''
			),
			'phoneHref' => array(
				'type' => 'string',
				'default' => ''
			),
			'emailText' => array(
				'type' => 'string',
				'default' => ''
			),
			'emailHref' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		),
		'example' => array(
			'attributes' => array(
				'kicker' => 'Поддержка',
				'title' => 'Помощь клиентам',
				'description' => 'Часто задаваемые вопросы и полезные материалы.',
				'pillItems' => array(
					array(
						'id' => 'badge-demo-1',
						'text' => 'Безопасность',
						'url' => '/security',
						'linkMode' => false,
						'pageId' => 0,
						'opensInNewTab' => false
					),
					array(
						'id' => 'badge-demo-2',
						'text' => 'Клиент-Банк',
						'url' => '/client-bank-online',
						'linkMode' => false,
						'pageId' => 0,
						'opensInNewTab' => false
					)
				),
				'actions' => array(
					array(
						'id' => 'action-demo-1',
						'text' => 'Содержание',
						'url' => '#content',
						'variant' => 'primary',
						'linkMode' => false,
						'pageId' => 0,
						'opensInNewTab' => false
					)
				)
			),
			'viewportWidth' => 1200
		)
	),
	'home-stack' => array(
		'apiVersion' => 3,
		'name' => 'slav-bank/home-stack',
		'title' => 'Home Stack',
		'category' => 'slav-bank',
		'editorScript' => 'file:./index.js',
		'render' => 'file:./render.php'
	),
	'page-ecp-regeneration' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/ecp-regeneration',
		'title' => 'Страница Перегенерация ЭЦП',
		'category' => 'Страницы',
		'icon' => 'admin-network',
		'description' => 'Страница перегенерации электронной подписи.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'page-ecp-regeneration-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-ecp-regeneration-bento',
		'title' => 'Перегенерация ЭЦП bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Секция с заранее заданными контейнерами и наполнением.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Данный раздел создан для поддержки клиентов АО НКБ «СЛАВЯНБАНК».'
			),
			'titleFaqRefs' => array(
				'type' => 'string',
				'default' => 'Популяярные темы'
			),
			'faqRefs' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Часто задаваемые вопросы',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					),
					array(
						'title' => 'Перегенерация ЭЦП',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					),
					array(
						'title' => 'Рекомендации по безопасности',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					)
				)
			),
			'titleDocRefs' => array(
				'type' => 'string',
				'default' => 'Документы'
			),
			'docRefs' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Скачать здесь >>',
						'format' => 'PDF',
						'symbol' => '→'
					)
				)
			),
			'titleContacts' => array(
				'type' => 'string',
				'default' => 'В случае возникновения вопросов вы можете связаться с нами по телефонам, указанным ниже:'
			),
			'numberBlock' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Телефоны технической поддержки:',
						'description' => '(8162) 66-51-95,
66-52-47,
+7921-690-17-00'
					)
				)
			),
			'workingHours' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Режим работы:',
						'description' => 'с 8.30 до 17.30 (пт. – до 16.30), обед с 13.00 до 14.00, (выходной суб., вск.)'
					)
				)
			),
			'infoTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'infoBlock' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'page-ecp-regeneration-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-ecp-regeneration',
		'title' => 'Перегенерация ЭЦП: содержимое',
		'category' => 'Наполнение',
		'icon' => 'admin-network',
		'description' => 'Карточка содержимого страницы перегенерации ЭЦП.',
		'parent' => array(
			'slav-bank/body-ecp-regeneration-bento'
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'page-faq' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/faq',
		'title' => 'Страница FAQ',
		'category' => 'Страницы',
		'icon' => 'editor-help',
		'description' => 'Страница часто задаваемых вопросов.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'page-faq-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-faq-bento',
		'title' => 'faq bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Секция с заранее заданными контейнерами и наполнением.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Данный раздел создан для поддержки клиентов АО НКБ «СЛАВЯНБАНК».'
			),
			'titleFaqRefs' => array(
				'type' => 'string',
				'default' => 'Популяярные темы'
			),
			'faqRefs' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Часто задаваемые вопросы',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					),
					array(
						'title' => 'Перегенерация ЭЦП',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					),
					array(
						'title' => 'Рекомендации по безопасности',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					)
				)
			),
			'titleDocRefs' => array(
				'type' => 'string',
				'default' => 'Документы'
			),
			'docRefs' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Скачать здесь >>',
						'format' => 'PDF',
						'symbol' => '→'
					)
				)
			),
			'titleContacts' => array(
				'type' => 'string',
				'default' => 'В случае возникновения вопросов вы можете связаться с нами по телефонам, указанным ниже:'
			),
			'numberBlock' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Телефоны технической поддержки:',
						'description' => '(8162) 66-51-95,
66-52-47,
+7921-690-17-00'
					)
				)
			),
			'workingHours' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Режим работы:',
						'description' => 'с 8.30 до 17.30 (пт. – до 16.30), обед с 13.00 до 14.00, (выходной суб., вск.)'
					)
				)
			),
			'infoTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'infoBlock' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'page-faq-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-faq',
		'title' => 'FAQ: содержимое',
		'category' => 'Наполнение',
		'icon' => 'editor-help',
		'description' => 'Содержимое страницы часто задаваемых вопросов.',
		'parent' => array(
			'slav-bank/body-faq-bento'
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'page-private-persons' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/private-persons',
		'title' => 'Страница Частным лицам',
		'category' => 'Страницы',
		'icon' => 'groups',
		'description' => 'Страница для частных лиц.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'page-private-persons-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/page-private-persons-bento',
		'title' => 'Частным лицам bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Секция с заранее заданными контейнерами и наполнением.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Данный раздел создан для поддержки клиентов АО НКБ «СЛАВЯНБАНК».'
			),
			'titleFaqRefs' => array(
				'type' => 'string',
				'default' => 'Популяярные темы'
			),
			'faqRefs' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Часто задаваемые вопросы',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					),
					array(
						'title' => 'Перегенерация ЭЦП',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					),
					array(
						'title' => 'Рекомендации по безопасности',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					)
				)
			),
			'titleDocRefs' => array(
				'type' => 'string',
				'default' => 'Документы'
			),
			'docRefs' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Скачать здесь >>',
						'format' => 'PDF',
						'symbol' => '→'
					)
				)
			),
			'titleContacts' => array(
				'type' => 'string',
				'default' => 'В случае возникновения вопросов вы можете связаться с нами по телефонам, указанным ниже:'
			),
			'numberBlock' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Телефоны технической поддержки:',
						'description' => '(8162) 66-51-95,
66-52-47,
+7921-690-17-00'
					)
				)
			),
			'workingHours' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Режим работы:',
						'description' => 'с 8.30 до 17.30 (пт. – до 16.30), обед с 13.00 до 14.00, (выходной суб., вск.)'
					)
				)
			),
			'infoTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'infoBlock' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'page-private-persons-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-private-persons',
		'title' => 'Частным лицам: содержимое',
		'category' => 'Наполнение',
		'icon' => 'groups',
		'description' => 'Карточка содержимого страницы для частных лиц.',
		'parent' => array(
			'slav-bank/body-private-persons-bento'
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'page-support' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/support',
		'title' => 'Страница поддержки',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Секция с заранее заданными контейнерами и наполнением.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'page-support-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-support-bento',
		'title' => 'Поддержка',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Секция с заранее заданными контейнерами и наполнением.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Данный раздел создан для поддержки клиентов АО НКБ «СЛАВЯНБАНК».'
			),
			'titleFaqRefs' => array(
				'type' => 'string',
				'default' => 'Популяярные темы'
			),
			'faqRefs' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Часто задаваемые вопросы',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					),
					array(
						'title' => 'Перегенерация ЭЦП',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					),
					array(
						'title' => 'Рекомендации по безопасности',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					)
				)
			),
			'titleDocRefs' => array(
				'type' => 'string',
				'default' => 'Документы'
			),
			'docRefs' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Скачать здесь >>',
						'format' => 'PDF',
						'symbol' => '→'
					)
				)
			),
			'titleContacts' => array(
				'type' => 'string',
				'default' => 'В случае возникновения вопросов вы можете связаться с нами по телефонам, указанным ниже:'
			),
			'numberBlock' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Телефоны технической поддержки:',
						'description' => '(8162) 66-51-95,
66-52-47,
+7921-690-17-00'
					)
				)
			),
			'workingHours' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Режим работы:',
						'description' => 'с 8.30 до 17.30 (пт. – до 16.30), обед с 13.00 до 14.00, (выходной суб., вск.)'
					)
				)
			),
			'infoTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'infoBlock' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'page-support-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-support',
		'title' => 'Поддержка',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Секция с заранее заданными контейнерами и наполнением.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Данный раздел создан для поддержки клиентов АО НКБ «СЛАВЯНБАНК».'
			),
			'titleFaqRefs' => array(
				'type' => 'string',
				'default' => 'Популяярные темы'
			),
			'faqRefs' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Часто задаваемые вопросы',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					),
					array(
						'title' => 'Перегенерация ЭЦП',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					),
					array(
						'title' => 'Рекомендации по безопасности',
						'urlTitle' => 'Открыть раздел →',
						'url' => ''
					)
				)
			),
			'titleDocRefs' => array(
				'type' => 'string',
				'default' => 'Документы'
			),
			'docRefs' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Скачать здесь >>',
						'format' => 'PDF',
						'symbol' => '→'
					)
				)
			),
			'titleContacts' => array(
				'type' => 'string',
				'default' => 'В случае возникновения вопросов вы можете связаться с нами по телефонам, указанным ниже:'
			),
			'numberBlock' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Телефоны технической поддержки:',
						'description' => '(8162) 66-51-95,
66-52-47,
+7921-690-17-00'
					)
				)
			),
			'workingHours' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Режим работы:',
						'description' => 'с 8.30 до 17.30 (пт. – до 16.30), обед с 13.00 до 14.00, (выходной суб., вск.)'
					)
				)
			),
			'infoTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'infoBlock' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'private-persons-documents' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/private-persons-documents',
		'title' => 'Частным лицам: документы',
		'category' => 'Компоненты темы',
		'icon' => 'media-document',
		'description' => 'Повторяемые карточки документов для страницы частных лиц.',
		'parent' => array(
			'slav-bank/body-private-persons'
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'private-persons-services' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/private-persons-services',
		'title' => 'Частным лицам: услуги',
		'category' => 'Компоненты темы',
		'icon' => 'grid-view',
		'description' => 'Повторяемые карточки услуг для страницы частных лиц.',
		'parent' => array(
			'slav-bank/body-private-persons'
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'private-persons-text' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/private-persons-text',
		'title' => 'Частным лицам: текст',
		'category' => 'Компоненты темы',
		'icon' => 'editor-paragraph',
		'description' => 'Текстовая часть страницы для частных лиц.',
		'parent' => array(
			'slav-bank/body-private-persons'
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'sidebar' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/bento-shell-sidebar',
		'title' => 'Sidebar',
		'category' => 'Компоненты',
		'icon' => 'columns',
		'description' => 'Сайдбар с валютным блоком',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'attributes' => array(
			'showSidebar' => array(
				'type' => 'boolean',
				'default' => true
			),
			'sidebarKind' => array(
				'type' => 'string',
				'default' => 'rates'
			)
		),
		'supports' => array(
			'html' => false,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	),
	'support-prose' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/support-prose',
		'title' => 'Текст поддержки',
		'category' => 'Компоненты темы',
		'icon' => 'editor-paragraph',
		'description' => 'Повторяемые абзацы с возможностью добавлять ссылки внутри текста.',
		'parent' => array(
			'slav-bank/body-support'
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => ''
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'layout' => true
		)
	)
);
