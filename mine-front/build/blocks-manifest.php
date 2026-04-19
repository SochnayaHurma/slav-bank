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
	)
);
