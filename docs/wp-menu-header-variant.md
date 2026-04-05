# WP menu header variant

Этот шаг добавляет альтернативную шапку на `wp_nav_menu` без удаления текущего v3-header.

## Что сделано

- `template-parts/site-menu-home-wp.php` — новая реализация шапки на основе `wp_nav_menu`;
- `assets/css/v3-menu-wp.css` — тонкий слой стилей для семантической структуры `ul/li/a`;
- `inc/navigation-wp-variant.php` — регистрация menu location, fallback-пункты и helper-рендеринг;
- `header.php` — переключение между текущей и wp-menu шапкой через query-параметр.

## Как сравнивать налету

- текущая шапка: обычный URL;
- wp-menu шапка: добавить `?menu_variant=wp`.

Пример:

```text
https://ваш-домен/otchetnost/?menu_variant=wp
```

## Что нужно для полной интеграции с админкой

Чтобы menu location появилась в WordPress Admin (`Внешний вид → Меню`), добавьте в `functions.php`:

```php
require_once get_template_directory() . '/inc/navigation-wp-variant.php';
```

Это единственный обязательный bootstrap-шаг.

## Что будет, если меню еще не назначено

Шапка все равно заработает: используется fallback с текущими hardcoded маршрутами (`Юридическим лицам`, `Валютный контроль`, `Клиент-Банк`, `Тарифы`, `Контакты`).

## Ограничения текущего stage

- stage 1 поддерживает только верхний уровень меню (`depth = 1`);
- CTA `Оставить обращение` остается отдельным theme element, не частью WP menu.

Такой вариант позволяет сравнить два header-подхода без риска сломать текущий mobile shell и js-логику.
