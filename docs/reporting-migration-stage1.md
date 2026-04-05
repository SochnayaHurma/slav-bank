# Reporting migration stage 1

На этом шаге в проект добавляется слой миграции старой страницы `Отчетность` в новые паттерны `SB Alpha`.

## Что добавлено

- `inc/reporting-migration-patterns.php`
  - полный паттерн `SB Alpha / Отчетность — миграция 2025–2020`;
  - отдельные мигрированные секции по годам: 2024, 2023, 2022, 2021, 2020;
  - годовая полка строится из существующего массива `sb_alpha_get_reporting_annual_reports()`.

## Что нужно подключить

В `functions.php` после других include-файлов темы добавьте еще одну строку:

```php
require_once get_template_directory() . '/inc/reporting-migration-patterns.php';
```

Если вы еще не подключали builder-слой, вместе с ним итоговый bootstrap выглядит так:

```php
require_once get_template_directory() . '/inc/editor-assets.php';
require_once get_template_directory() . '/inc/reporting-patterns.php';
require_once get_template_directory() . '/inc/reporting-migration-patterns.php';
```

## Как использовать

1. Перевести страницу `Отчетность` на шаблон `Отчетность — builder patterns`.
2. В редакторе открыть категорию паттернов `SB Alpha`.
3. Вставить паттерн `SB Alpha / Отчетность — миграция 2025–2020`.
4. Сохранить страницу.
5. Дальше уже редактировать контент внутри новой компонентной структуры, а не в старом giant HTML.
