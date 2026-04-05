# Reporting builder patterns bootstrap

Чтобы паттерны `SB Alpha` и editor/front assets начали работать, в `functions.php` нужно добавить два `require_once` рядом с остальными include-файлами темы:

```php
require_once get_template_directory() . '/inc/editor-assets.php';
require_once get_template_directory() . '/inc/reporting-patterns.php';
```

Рекомендуем вставить их сразу после:

```php
require_once get_template_directory() . '/inc/admin-home-stack.php';
```

## Как проверить

1. Применить две строки выше в `functions.php`.
2. Переключить страницу `Отчетность` на шаблон `Отчетность — builder patterns`.
3. В редакторе открыть категорию паттернов `SB Alpha`.
4. Вставить паттерн `SB Alpha / Отчетность — старт страницы`.
5. Сохранить страницу и проверить фронт.

## Что уже есть в ветке

- `inc/reporting-patterns.php` — регистрация категории `SB Alpha` и набора паттернов для `Отчетности`;
- `inc/editor-assets.php` — подключение front/editor CSS;
- `assets/css/reporting-builder.css` — фронтовые стили для builder-страницы;
- `assets/css/editor-reporting-builder.css` — стили превью в block editor;
- `page-template-otchetnost-builder.php` — шаблон страницы, который выводит `the_content()` вместо giant-hardcode.
