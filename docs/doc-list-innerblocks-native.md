# Native doc-list/doc-row inner blocks

Этот шаг добавляет в builder-слой страницы `Отчетность` два реальных Gutenberg-блока:

- `SB Alpha / Doc list` — родительский контейнер;
- `SB Alpha / Doc row` — дочерняя строка документа.

## Почему это ближе к стандартному Gutenberg

- добавление новой строки идет через стандартный `+` внутри `InnerBlocks`;
- удаление строки — штатное удаление дочернего блока;
- больше нет массива строк и отдельной формы, имитирующей `foreach`.

## Визуальный слой

Специальный CSS под этот блок не добавляется.

Вместо этого используется уже существующий UI-слой темы:

- контейнер получает классы `doc-list service-links`;
- строка получает классы `doc-row service-link`;
- `kind` получает `route-chip`.

То есть блок опирается на уже существующие стили `service-links`, `service-link`, `route-chip` из `beta-pages.css`.

## Что подключить

В `functions.php` после builder include-файлов добавьте:

```php
require_once get_template_directory() . '/inc/doc-list-innerblocks-native.php';
```

Если вы подключаете весь builder-слой целиком, итоговый bootstrap выглядит так:

```php
require_once get_template_directory() . '/inc/editor-assets.php';
require_once get_template_directory() . '/inc/reporting-patterns.php';
require_once get_template_directory() . '/inc/doc-list-innerblocks-native.php';
```

## Как проверить

1. Перевести страницу `Отчетность` на шаблон `Отчетность — builder patterns`.
2. В редакторе вставить блок `SB Alpha / Doc list`.
3. Внутри контейнера нажимать `+` и добавлять `SB Alpha / Doc row`.
4. Заполнить дату, название, тип и ссылку.
5. Убедиться, что строка визуально наследует стиль существующих `service-link`/`route-chip` без отдельного CSS.

## Ограничение текущего шага

Это не точная реплика старого `foreach` по CSS-классам `doc-list/doc-row`, потому что в теме нет отдельного общего CSS-слоя под них. Поэтому для восстановления визуала используется ближайший живой UI-слой темы через `service-link`/`service-links`.
