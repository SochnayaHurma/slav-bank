# Example repeater card block

Это пример пары Gutenberg-блоков без slot-механики и без сборщика:

- `SB Alpha / Card Container`
- `SB Alpha / Card Item`

## Что умеет пример

1. Контейнер добавляет и удаляет карточки внутри себя стандартным способом Gutenberg:
   - добавление через встроенный плюс `InnerBlocks.ButtonBlockAppender`;
   - удаление через обычную корзинку / remove block у дочернего блока.
2. Карточка комбинированная:
   - внешний `div`
   - внутри `a`
   - внутри `span` + `h4`
3. У карточки есть:
   - редактируемый текст прямо в блоке;
   - стандартный ссылочный объект Gutenberg через `LinkControl` (или fallback на `URLInputButton`);
   - фон-картинка, которая по умолчанию берется из asset темы: `assets/img/example-card-bg.svg`;
   - пользователь может заменить фон через media picker и вернуть обратно к theme asset.
4. Стили лежат в `assets/css/example-card-blocks.css` и могут переиспользоваться и в шаблонах темы.

## Bootstrap

В `functions.php` нужно подключить:

```php
require_once get_template_directory() . '/inc/example-card-blocks.php';
```

## Где смотреть

- PHP registration: `inc/example-card-blocks.php`
- JS block logic: `assets/js/example-card-blocks.js`
- shared styles: `assets/css/example-card-blocks.css`
- default asset image: `assets/img/example-card-bg.svg`
