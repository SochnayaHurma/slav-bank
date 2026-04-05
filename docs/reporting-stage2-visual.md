# Reporting stage 2 — visual parity

На этом этапе `Отчетность` доводится не по содержанию, а по визуальной и редакторской модели.

## Цель

- не менять смысл контента;
- собирать страницу из `SB Alpha`-паттернов;
- дать редактору визуал, максимально близкий к текущей странице;
- ограничить builder-template управляемым набором блоков.

## Что добавлено

### 1. Управляемый набор блоков для builder-template
В `inc/editor-assets.php` добавлен фильтр `allowed_block_types_all`, который срабатывает только для страниц с шаблоном:

`page-template-otchetnost-builder.php`

Разрешены только блоки, которые поддерживают текущую модель `Отчетности`:
- group
- paragraph
- heading
- buttons / button
- details
- list
- separator
- spacer
- table
- file

### 2. Более мелкие `SB Alpha`-паттерны
В `inc/reporting-patterns.php` добавлены не только крупные стартовые паттерны, но и более мелкие строительные элементы:
- `SB Alpha / Оболочка раздела`
- `SB Alpha / Карточка документа`
- `SB Alpha / Строка ссылки документа`

Это позволяет собирать страницу как из собственных визуальных групп, а не только вставлять один большой паттерн.

### 3. Усилен editor preview
В `assets/css/editor-reporting-builder.css` улучшено соответствие редактора и фронта:
- root container в редакторе ограничен по ширине ближе к живой колонке контента;
- hero, section-card, doc-card и link-row получили более близкий к фронту preview;
- добавлены внутренние отступы и сетка для более точного восприятия макета.

### 4. Усилен frontend visual layer
В `assets/css/reporting-builder.css` добавлены улучшения для:
- `sbp-section-body`
- `sbp-doc-card`
- `sbp-link-row`
- `sbp-reporting-hero`

## Практический эффект

Теперь `Отчетность` собирается через:
- page template с текущим layout;
- editor/front CSS, которые тянут визуал к текущему макету;
- паттерны `SB Alpha`, состоящие из таких же styled groups, а не из свободного Gutenberg-набора.
