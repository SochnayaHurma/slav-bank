<?php
// This file is generated. Do not modify it manually.
return array(
	'card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yourtheme/card',
		'title' => 'Карточка',
		'category' => 'design',
		'icon' => 'index-card',
		'description' => 'Карточка с редактируемым контентом.',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок карточки'
			),
			'text' => array(
				'type' => 'string',
				'default' => 'Текст карточки можно менять прямо внутри макета.'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Подробнее'
			),
			'url' => array(
				'type' => 'string',
				'default' => '#'
			)
		),
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'color' => array(
				'background' => true,
				'text' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true
			)
		)
	),
	'content-shell' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'yourtheme/content-shell',
		'title' => 'Секция-шаблон',
		'category' => 'design',
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
	'hero' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'acme-blocks/card',
		'version' => '1.0.0',
		'title' => 'Карточка',
		'category' => 'design',
		'icon' => 'index-card',
		'description' => 'Карточка с заголовком, текстом, кнопкой и badge-ссылками в углу.',
		'textdomain' => 'acme-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок карточки'
			),
			'text' => array(
				'type' => 'string',
				'default' => 'Текст карточки. Его можно редактировать прямо в макете.'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Подробнее'
			),
			'url' => array(
				'type' => 'string',
				'default' => ''
			),
			'badges' => array(
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
			'color' => array(
				'background' => true,
				'text' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true
			)
		)
	),
	'hero_hover_editor' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'acme-blocks/card-5',
		'version' => '1.0.0',
		'title' => 'Карточка 5',
		'category' => 'design',
		'icon' => 'index-card',
		'description' => 'Чистая карточка: inline-редактирование в UI, ссылки и управление в Gutenberg sidebar.',
		'textdomain' => 'acme-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок карточки'
			),
			'text' => array(
				'type' => 'string',
				'default' => 'Чистый вариант карточки: в UI редактируется текст, а ссылки и удаление вынесены в правую панель.'
			),
			'badges' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'actions' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'action-default',
						'text' => 'Подробнее',
						'url' => '',
						'opensInNewTab' => false,
						'variant' => 'primary'
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
			'color' => array(
				'background' => true,
				'text' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true
			)
		)
	),
	'hero_with_side' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'acme-blocks/card-4',
		'version' => '1.0.0',
		'title' => 'Карточка 4',
		'category' => 'design',
		'icon' => 'index-card',
		'description' => 'Карточка с badge-ссылками в углу и набором action buttons.',
		'textdomain' => 'acme-blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Заголовок карточки'
			),
			'text' => array(
				'type' => 'string',
				'default' => 'Текст карточки. Badge и action buttons добавляются из боковой панели, а редактируются прямо в UI.'
			),
			'badges' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'actions' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 'action-default',
						'text' => 'Подробнее',
						'url' => '',
						'opensInNewTab' => false,
						'variant' => 'primary'
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
			'color' => array(
				'background' => true,
				'text' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true
			)
		)
	)
);
