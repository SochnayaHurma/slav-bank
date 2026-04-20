<?php
// This file is generated. Do not modify it manually.
return array(
	'aml-fatca-text' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/aml-fatca-text',
		'title' => 'ПОД/ФТ/ФРОМУ/FATCA: текст',
		'category' => 'Компоненты темы',
		'icon' => 'text-page',
		'description' => 'Текст страницы ПОД/ФТ/ФРОМУ/FATCA.',
		'parent' => array(
			'slav-bank/body-aml-fatca'
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
	'appeal-123-fz-text' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/appeal-123-fz-text',
		'title' => 'Обращение по 123-ФЗ: текст',
		'category' => 'Компоненты темы',
		'icon' => 'text-page',
		'description' => 'Текст страницы обращения по 123-ФЗ.',
		'parent' => array(
			'slav-bank/body-appeal-123-fz'
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
	'crs-text' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/crs-text',
		'title' => 'CRS: текст',
		'category' => 'Компоненты темы',
		'icon' => 'text-page',
		'description' => 'Текстовая часть страницы CRS.',
		'parent' => array(
			'slav-bank/body-crs'
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
	'page-account-service' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/account-service',
		'title' => 'Страница Обслуживание счетов в валюте РФ',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Обслуживание счетов в валюте РФ.',
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
	'page-account-service-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-account-service-bento',
		'title' => 'Обслуживание счетов в валюте РФ bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Обслуживание счетов в валюте РФ.',
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
	'page-account-service-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-account-service',
		'title' => 'Обслуживание счетов в валюте РФ: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Обслуживание счетов в валюте РФ.',
		'parent' => array(
			'slav-bank/body-account-service-bento'
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
	'page-aml-fatca' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/aml-fatca',
		'title' => 'Страница ПОД/ФТ/ФРОМУ/FATCA',
		'category' => 'Страницы',
		'icon' => 'shield',
		'description' => 'Страница ПОД/ФТ/ФРОМУ/FATCA.',
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
	'page-aml-fatca-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-aml-fatca-bento',
		'title' => 'ПОД/ФТ/ФРОМУ/FATCA bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы ПОД/ФТ/ФРОМУ/FATCA.',
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
	'page-aml-fatca-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-aml-fatca',
		'title' => 'ПОД/ФТ/ФРОМУ/FATCA: содержимое',
		'category' => 'Наполнение',
		'icon' => 'shield',
		'description' => 'Карточка содержимого страницы ПОД/ФТ/ФРОМУ/FATCA.',
		'parent' => array(
			'slav-bank/body-aml-fatca-bento'
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
	'page-appeal-123-fz' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/appeal-123-fz',
		'title' => 'Страница Обращение по 123-ФЗ',
		'category' => 'Страницы',
		'icon' => 'megaphone',
		'description' => 'Страница обращения по 123-ФЗ.',
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
	'page-appeal-123-fz-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-appeal-123-fz-bento',
		'title' => 'Обращение по 123-ФЗ bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы обращения по 123-ФЗ.',
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
	'page-appeal-123-fz-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-appeal-123-fz',
		'title' => 'Обращение по 123-ФЗ: содержимое',
		'category' => 'Наполнение',
		'icon' => 'megaphone',
		'description' => 'Карточка содержимого страницы обращения по 123-ФЗ.',
		'parent' => array(
			'slav-bank/body-appeal-123-fz-bento'
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
	'page-business-deposits' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/business-deposits',
		'title' => 'Страница Депозиты для юридических лиц',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Депозиты для юридических лиц.',
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
	'page-business-deposits-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-business-deposits-bento',
		'title' => 'Депозиты для юридических лиц bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Депозиты для юридических лиц.',
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
	'page-business-deposits-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-business-deposits',
		'title' => 'Депозиты для юридических лиц: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Депозиты для юридических лиц.',
		'parent' => array(
			'slav-bank/body-business-deposits-bento'
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
	'page-business-lending' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/business-lending',
		'title' => 'Страница Кредитование юридических лиц',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Кредитование юридических лиц.',
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
	'page-business-lending-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-business-lending-bento',
		'title' => 'Кредитование юридических лиц bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Кредитование юридических лиц.',
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
	'page-business-lending-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-business-lending',
		'title' => 'Кредитование юридических лиц: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Кредитование юридических лиц.',
		'parent' => array(
			'slav-bank/body-business-lending-bento'
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
	'page-cash-payments' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/cash-payments',
		'title' => 'Страница Наличные расчеты',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Наличные расчеты.',
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
	'page-cash-payments-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-cash-payments-bento',
		'title' => 'Наличные расчеты bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Наличные расчеты.',
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
	'page-cash-payments-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-cash-payments',
		'title' => 'Наличные расчеты: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Наличные расчеты.',
		'parent' => array(
			'slav-bank/body-cash-payments-bento'
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
	'page-cashless-payments' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/cashless-payments',
		'title' => 'Страница Безналичные расчеты',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Безналичные расчеты.',
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
	'page-cashless-payments-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-cashless-payments-bento',
		'title' => 'Безналичные расчеты bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Безналичные расчеты.',
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
	'page-cashless-payments-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-cashless-payments',
		'title' => 'Безналичные расчеты: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Безналичные расчеты.',
		'parent' => array(
			'slav-bank/body-cashless-payments-bento'
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
	'page-client-bank-online' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/client-bank-online',
		'title' => 'Страница Клиент-Банк Online',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Клиент-Банк Online.',
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
	'page-client-bank-online-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-client-bank-online-bento',
		'title' => 'Клиент-Банк Online bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Клиент-Банк Online.',
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
	'page-client-bank-online-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-client-bank-online',
		'title' => 'Клиент-Банк Online: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Клиент-Банк Online.',
		'parent' => array(
			'slav-bank/body-client-bank-online-bento'
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
	'page-contacts' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/contacts',
		'title' => 'Страница Контакты',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Контакты.',
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
	'page-contacts-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-contacts-bento',
		'title' => 'Контакты bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Контакты.',
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
	'page-contacts-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-contacts',
		'title' => 'Контакты: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Контакты.',
		'parent' => array(
			'slav-bank/body-contacts-bento'
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
	'page-covid19' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/covid19',
		'title' => 'Страница COVID19',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница COVID19.',
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
	'page-covid19-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-covid19-bento',
		'title' => 'COVID19 bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы COVID19.',
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
	'page-covid19-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-covid19',
		'title' => 'COVID19: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы COVID19.',
		'parent' => array(
			'slav-bank/body-covid19-bento'
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
	'page-crs' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/crs',
		'title' => 'Страница CRS',
		'category' => 'Страницы',
		'icon' => 'database-export',
		'description' => 'Страница CRS — обмен с ФНС.',
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
	'page-crs-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-crs-bento',
		'title' => 'CRS bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы CRS.',
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
	'page-crs-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-crs',
		'title' => 'CRS: содержимое',
		'category' => 'Наполнение',
		'icon' => 'database-export',
		'description' => 'Карточка содержимого страницы CRS.',
		'parent' => array(
			'slav-bank/body-crs-bento'
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
	'page-currency-control' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/currency-control',
		'title' => 'Страница Валютный контроль',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Валютный контроль.',
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
	'page-currency-control-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-currency-control-bento',
		'title' => 'Валютный контроль bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Валютный контроль.',
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
	'page-currency-control-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-currency-control',
		'title' => 'Валютный контроль: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Валютный контроль.',
		'parent' => array(
			'slav-bank/body-currency-control-bento'
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
	'page-disclosur-regulatory' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/disclosur-regulatory',
		'title' => 'Страница Раскрытие регуляторной информации',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Раскрытие регуляторной информации.',
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
	'page-disclosur-regulatory-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-disclosur-regulatory-bento',
		'title' => 'Раскрытие регуляторной информации bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Раскрытие регуляторной информации.',
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
	'page-disclosur-regulatory-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-disclosur-regulatory',
		'title' => 'Раскрытие регуляторной информации: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Раскрытие регуляторной информации.',
		'parent' => array(
			'slav-bank/body-disclosur-regulatory-bento'
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
	'page-fx-account-service' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/fx-account-service',
		'title' => 'Страница Обслуживание счетов в иностранной валюте',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Обслуживание счетов в иностранной валюте.',
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
	'page-fx-account-service-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-fx-account-service-bento',
		'title' => 'Обслуживание счетов в иностранной валюте bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Обслуживание счетов в иностранной валюте.',
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
	'page-fx-account-service-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-fx-account-service',
		'title' => 'Обслуживание счетов в иностранной валюте: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Обслуживание счетов в иностранной валюте.',
		'parent' => array(
			'slav-bank/body-fx-account-service-bento'
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
	'page-governance' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/governance',
		'title' => 'Страница Органы управления',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Органы управления.',
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
	'page-governance-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-governance-bento',
		'title' => 'Органы управления bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Органы управления.',
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
	'page-governance-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-governance',
		'title' => 'Органы управления: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Органы управления.',
		'parent' => array(
			'slav-bank/body-governance-bento'
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
	'page-info-bank-page' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/info-bank-page',
		'title' => 'Страница Информация о банке',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Информация о банке.',
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
	'page-info-bank-page-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-info-bank-page-bento',
		'title' => 'Информация о банке bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Информация о банке.',
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
	'page-info-bank-page-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-info-bank-page',
		'title' => 'Информация о банке: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Информация о банке.',
		'parent' => array(
			'slav-bank/body-info-bank-page-bento'
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
	'page-instruction' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/instruction',
		'title' => 'Страница Инструкция по работе в системе Клиент-Банк',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Инструкция по работе в системе Клиент-Банк.',
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
	'page-instruction-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-instruction-bento',
		'title' => 'Инструкция по работе в системе Клиент-Банк bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Инструкция по работе в системе Клиент-Банк.',
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
	'page-instruction-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-instruction',
		'title' => 'Инструкция по работе в системе Клиент-Банк: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Инструкция по работе в системе Клиент-Банк.',
		'parent' => array(
			'slav-bank/body-instruction-bento'
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
	'page-legal-entities' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/legal-entities',
		'title' => 'Страница Юридическим лицам',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Юридическим лицам.',
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
	'page-legal-entities-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-legal-entities-bento',
		'title' => 'Юридическим лицам bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Юридическим лицам.',
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
	'page-legal-entities-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-legal-entities',
		'title' => 'Юридическим лицам: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Юридическим лицам.',
		'parent' => array(
			'slav-bank/body-legal-entities-bento'
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
	'page-notaries' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/notaries',
		'title' => 'Страница Информация для нотариусов',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Информация для нотариусов.',
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
	'page-notaries-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-notaries-bento',
		'title' => 'Информация для нотариусов bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Информация для нотариусов.',
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
	'page-notaries-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-notaries',
		'title' => 'Информация для нотариусов: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Информация для нотариусов.',
		'parent' => array(
			'slav-bank/body-notaries-bento'
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
	'page-novosti' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/novosti',
		'title' => 'Страница Новости',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Новости.',
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
	'page-novosti-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-novosti-bento',
		'title' => 'Новости bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Новости.',
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
	'page-novosti-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-novosti',
		'title' => 'Новости: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Новости.',
		'parent' => array(
			'slav-bank/body-novosti-bento'
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
	'page-pattern-alert' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/page-pattern-alert',
		'title' => 'Страница: предупреждение',
		'category' => 'Компоненты темы',
		'icon' => 'warning',
		'description' => 'Универсальный alert-блок для страниц.',
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
	'page-pattern-checks' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/page-pattern-checks',
		'title' => 'Страница: чек-лист',
		'category' => 'Компоненты темы',
		'icon' => 'yes-alt',
		'description' => 'Повторяемый чек-лист для страниц.',
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
	'page-pattern-chips' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/page-pattern-chips',
		'title' => 'Страница: чипы',
		'category' => 'Компоненты темы',
		'icon' => 'tag',
		'description' => 'Повторяемые ссылочные чипы для страниц.',
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
	'page-pattern-consent' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/page-pattern-consent',
		'title' => 'Страница: согласие',
		'category' => 'Компоненты темы',
		'icon' => 'privacy',
		'description' => 'Редактируемый блок согласия на обработку персональных данных.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => ''
			),
			'leadText' => array(
				'type' => 'string',
				'default' => 'Согласие для представителей организаций, индивидуальных предпринимателей и физических лиц, занимающихся частной практикой:<br><br>Я, действуя свободно, своей волей и в своем интересе, выражаю согласие оператору персональных данных АО НКБ «СЛАВЯНБАНК» (далее – Банк) ИНН 5321068480, адрес: 173004, Новгородская обл., г. Великий Новгород, ул. Черемнова-Конюхова, дом 12 на обработку моих персональных данных: ФИО, контактный телефон, адрес электронной почты,'
			),
			'intro' => array(
				'type' => 'string',
				'default' => ''
			),
			'text' => array(
				'type' => 'string',
				'default' => ''
			),
			'processingText' => array(
				'type' => 'string',
				'default' => 'в том числе совершение с использованием средств автоматизации действий с персональными данными, определенных Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных», а именно: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (предоставление, доступ), блокирование, удаление персональных данных,'
			),
			'purposeText' => array(
				'type' => 'string',
				'default' => 'в целях рассмотрения обращения, направленного в Банк с использованием формы обратной связи на официальном сайте Банка в информационно-коммуникационной сети «Интернет» по адресу: <a href="https://www.slavbank.ru/">https://www.slavbank.ru/</a>, а также получения ответа на обращение.'
			),
			'channelsText' => array(
				'type' => 'string',
				'default' => 'Я согласен(а) с получением информации по моему обращению по открытым каналам связи и понимаю, что при направлении информации по открытым каналам связи Банк не гарантирует конфиденциальности в отношении переданной таким образом информации.'
			),
			'durationText' => array(
				'type' => 'string',
				'default' => 'Настоящее согласие дается мною Банку до полного исполнения Банком обязательств по рассмотрению обращения / направлению ответа на обращение и истечения срока хранения персональных данных, установленного законодательством РФ.'
			),
			'rightsIntro' => array(
				'type' => 'string',
				'default' => 'Мне понятно, что Банк гарантирует соблюдение прав субъекта персональных данных:'
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'consent-item-1',
						'text' => 'право на получение сведений о том, какие персональные данные субъекта персональных данных обрабатываются и хранятся в Банке;'
					),
					array(
						'id' => 'consent-item-2',
						'text' => 'право на удаление, уточнение или исправление обрабатываемых и хранящихся в Банке персональных данных;'
					),
					array(
						'id' => 'consent-item-3',
						'text' => 'иные права, установленные действующим законодательством Российской Федерации в области персональных данных.'
					)
				)
			),
			'legalText' => array(
				'type' => 'string',
				'default' => ''
			),
			'closingText' => array(
				'type' => 'string',
				'default' => 'Мне понятно, что данное согласие может быть отозвано мной в любое время путем подачи заявления на e-mail <a href="mailto:nkb@slavbnak.ru">nkb@slavbnak.ru</a> или в письменной форме на адрес АО НКБ «СЛАВЯНБАНК». При этом мне разъяснено, что в случае отзыва мной согласия на обработку персональных данных Банк вправе продолжить обработку моих персональных данных при наличии оснований, указанных в пунктах 2 — 11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».'
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
	'page-pattern-contact-form' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/page-pattern-contact-form',
		'title' => 'Страница: форма Contact Form 7',
		'category' => 'Компоненты темы',
		'icon' => 'email-alt',
		'description' => 'Редактируемая обертка формы Contact Form 7 для страниц обращений.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Форма обращения'
			),
			'description' => array(
				'type' => 'string',
				'default' => ''
			),
			'shortcode' => array(
				'type' => 'string',
				'default' => '[contact-form-7 title="Написать в банк"]'
			),
			'fallbackText' => array(
				'type' => 'string',
				'default' => 'Форма будет отображена после подключения Contact Form 7 и выбора нужного шорткода.'
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
	'page-pattern-documents' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/page-pattern-documents',
		'title' => 'Страница: документы',
		'category' => 'Компоненты темы',
		'icon' => 'media-document',
		'description' => 'Повторяемые карточки документов для страниц.',
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
	'page-pattern-lead' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/page-pattern-lead',
		'title' => 'Страница: lead-карточка',
		'category' => 'Компоненты темы',
		'icon' => 'cover-image',
		'description' => 'Редактируемая lead-карточка с повторяемыми строками.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'kicker' => array(
				'type' => 'string',
				'default' => 'Информация'
			),
			'title' => array(
				'type' => 'string',
				'default' => ''
			),
			'text' => array(
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
	),
	'page-pattern-list' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/page-pattern-list',
		'title' => 'Страница: список',
		'category' => 'Компоненты темы',
		'icon' => 'editor-ul',
		'description' => 'Повторяемый текстовый список для страниц.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'extraClass' => array(
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
	'page-pattern-pdf' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/page-pattern-pdf',
		'title' => 'Страница: PDF',
		'category' => 'Компоненты темы',
		'icon' => 'pdf',
		'description' => 'Редактируемый PDF-блок для тарифных страниц.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'kicker' => array(
				'type' => 'string',
				'default' => 'PDF-документ'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'PDF-документ'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Откройте внутри страницы или скачайте файл.'
			),
			'url' => array(
				'type' => 'string',
				'default' => ''
			),
			'openText' => array(
				'type' => 'string',
				'default' => 'Открыть'
			),
			'downloadText' => array(
				'type' => 'string',
				'default' => 'Скачать'
			),
			'fallbackText' => array(
				'type' => 'string',
				'default' => 'Если PDF не отображается, используйте кнопку «Открыть».'
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
	'page-pattern-tips' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/page-pattern-tips',
		'title' => 'Страница: подсказки',
		'category' => 'Компоненты темы',
		'icon' => 'info',
		'description' => 'Повторяемые карточки-подсказки для страниц.',
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
	'page-payment-demands' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/payment-demands',
		'title' => 'Страница Платежные требования с акцептом',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Платежные требования с акцептом.',
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
	'page-payment-demands-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-payment-demands-bento',
		'title' => 'Платежные требования с акцептом bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Платежные требования с акцептом.',
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
	'page-payment-demands-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-payment-demands',
		'title' => 'Платежные требования с акцептом: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Платежные требования с акцептом.',
		'parent' => array(
			'slav-bank/body-payment-demands-bento'
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
	'page-reporting' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/reporting',
		'title' => 'Страница Отчетность',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Отчетность.',
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
	'page-reporting-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-reporting-bento',
		'title' => 'Отчетность bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Отчетность.',
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
	'page-reporting-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-reporting',
		'title' => 'Отчетность: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Отчетность.',
		'parent' => array(
			'slav-bank/body-reporting-bento'
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
	'page-requisites-bank' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/requisites-bank',
		'title' => 'Страница Реквизиты банка',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Реквизиты банка.',
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
	'page-requisites-bank-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-requisites-bank-bento',
		'title' => 'Реквизиты банка bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Реквизиты банка.',
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
	'page-requisites-bank-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-requisites-bank',
		'title' => 'Реквизиты банка: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Реквизиты банка.',
		'parent' => array(
			'slav-bank/body-requisites-bank-bento'
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
	'page-security' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/security',
		'title' => 'Страница Рекомендации по безопасности',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Рекомендации по безопасности.',
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
	'page-security-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-security-bento',
		'title' => 'Рекомендации по безопасности bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Рекомендации по безопасности.',
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
	'page-security-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-security',
		'title' => 'Рекомендации по безопасности: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Рекомендации по безопасности.',
		'parent' => array(
			'slav-bank/body-security-bento'
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
	'page-tariff-depositny' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/tariff-depositny',
		'title' => 'Страница Тарифы «Депозитный»',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Тарифы «Депозитный».',
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
	'page-tariff-depositny-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-tariff-depositny-bento',
		'title' => 'Тарифы «Депозитный» bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Тарифы «Депозитный».',
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
	'page-tariff-depositny-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-tariff-depositny',
		'title' => 'Тарифы «Депозитный»: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Тарифы «Депозитный».',
		'parent' => array(
			'slav-bank/body-tariff-depositny-bento'
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
	'page-tariff-privetstvenny' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/tariff-privetstvenny',
		'title' => 'Страница Тариф Приветственный',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Тариф Приветственный.',
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
	'page-tariff-privetstvenny-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-tariff-privetstvenny-bento',
		'title' => 'Тариф Приветственный bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Тариф Приветственный.',
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
	'page-tariff-privetstvenny-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-tariff-privetstvenny',
		'title' => 'Тариф Приветственный: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Тариф Приветственный.',
		'parent' => array(
			'slav-bank/body-tariff-privetstvenny-bento'
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
	'page-tariffs' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/tariffs',
		'title' => 'Страница Тарифы банка',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Тарифы банка.',
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
	'page-tariffs-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-tariffs-bento',
		'title' => 'Тарифы банка bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Тарифы банка.',
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
	'page-tariffs-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-tariffs',
		'title' => 'Тарифы банка: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Тарифы банка.',
		'parent' => array(
			'slav-bank/body-tariffs-bento'
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
	'page-tariffs-foreign-currency' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/tariffs-foreign-currency',
		'title' => 'Страница Тарифы в иностранной валюте',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Тарифы в иностранной валюте.',
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
	'page-tariffs-foreign-currency-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-tariffs-foreign-currency-bento',
		'title' => 'Тарифы в иностранной валюте bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Тарифы в иностранной валюте.',
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
	'page-tariffs-foreign-currency-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-tariffs-foreign-currency',
		'title' => 'Тарифы в иностранной валюте: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Тарифы в иностранной валюте.',
		'parent' => array(
			'slav-bank/body-tariffs-foreign-currency-bento'
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
	'page-tariffs-rub' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/tariffs-rub',
		'title' => 'Страница Тарифы в рублях',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Тарифы в рублях.',
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
	'page-tariffs-rub-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-tariffs-rub-bento',
		'title' => 'Тарифы в рублях bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Тарифы в рублях.',
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
	'page-tariffs-rub-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-tariffs-rub',
		'title' => 'Тарифы в рублях: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Тарифы в рублях.',
		'parent' => array(
			'slav-bank/body-tariffs-rub-bento'
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
	'page-tariffs-slavny' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/tariffs-slavny',
		'title' => 'Страница Тариф Славный',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Тариф Славный.',
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
	'page-tariffs-slavny-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-tariffs-slavny-bento',
		'title' => 'Тариф Славный bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Тариф Славный.',
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
	'page-tariffs-slavny-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-tariffs-slavny',
		'title' => 'Тариф Славный: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Тариф Славный.',
		'parent' => array(
			'slav-bank/body-tariffs-slavny-bento'
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
	'page-vacancies' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/vacancies',
		'title' => 'Страница Вакансии',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Вакансии.',
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
	'page-vacancies-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-vacancies-bento',
		'title' => 'Вакансии bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Вакансии.',
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
	'page-vacancies-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-vacancies',
		'title' => 'Вакансии: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Вакансии.',
		'parent' => array(
			'slav-bank/body-vacancies-bento'
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
	'page-write-to-bank' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/write-to-bank',
		'title' => 'Страница Написать в банк',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Написать в банк.',
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
	'page-write-to-bank-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-write-to-bank-bento',
		'title' => 'Написать в банк bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Написать в банк.',
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
	'page-write-to-bank-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-write-to-bank',
		'title' => 'Написать в банк: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Написать в банк.',
		'parent' => array(
			'slav-bank/body-write-to-bank-bento'
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
	'page-zapros-na-kreditovanie-msp' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/zapros-na-kreditovanie-msp',
		'title' => 'Страница Запрос на кредитование МСП',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Запрос на кредитование МСП.',
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
	'page-zapros-na-kreditovanie-msp-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-zapros-na-kreditovanie-msp-bento',
		'title' => 'Запрос на кредитование МСП bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Запрос на кредитование МСП.',
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
	'page-zapros-na-kreditovanie-msp-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-zapros-na-kreditovanie-msp',
		'title' => 'Запрос на кредитование МСП: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Запрос на кредитование МСП.',
		'parent' => array(
			'slav-bank/body-zapros-na-kreditovanie-msp-bento'
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
	'page-zapros-na-otkrytie-raschetnogo-scheta' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/zapros-na-otkrytie-raschetnogo-scheta',
		'title' => 'Страница Запрос на открытие расчетного счета',
		'category' => 'Страницы',
		'icon' => 'screenoptions',
		'description' => 'Страница Запрос на открытие расчетного счета.',
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
	'page-zapros-na-otkrytie-raschetnogo-scheta-bento' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-zapros-na-otkrytie-raschetnogo-scheta-bento',
		'title' => 'Запрос на открытие расчетного счета bento',
		'category' => 'Наполнение',
		'icon' => 'screenoptions',
		'description' => 'Bento-секция страницы Запрос на открытие расчетного счета.',
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
	'page-zapros-na-otkrytie-raschetnogo-scheta-body' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'slav-bank/body-zapros-na-otkrytie-raschetnogo-scheta',
		'title' => 'Запрос на открытие расчетного счета: содержимое',
		'category' => 'Наполнение',
		'icon' => 'media-document',
		'description' => 'Карточка содержимого страницы Запрос на открытие расчетного счета.',
		'parent' => array(
			'slav-bank/body-zapros-na-otkrytie-raschetnogo-scheta-bento'
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
