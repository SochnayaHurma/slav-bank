# Slavyanbank RC notes

## Run notes

1. Разверните тему `slavyanbank-alpha` в `wp-content/themes/` на staging или clone-стенде.
2. Убедитесь, что в WordPress созданы и опубликованы страницы со slug:
   - `informaciya-banka`
   - `kontakty`
   - `otchetnost`
   - `rekvizity-banka`
   - `napisat-v-bank`
   - `podderzhka`
   - `tarify-banka`
3. Активируйте тему.
4. После активации один раз проверьте постоянные ссылки в `Настройки → Постоянные ссылки`; rewrite rules у темы сбрасываются только при активации темы или смене версии, а не на каждом запросе.
5. Для страницы `Написать в банк` убедитесь, что плагин Contact Form 7 активен.

## Contact Form 7 integration

### Как тема рендерит форму

1. **Источник истины №1** — контент WordPress-страницы со slug `napisat-v-bank`.
   - Вставьте туда блок Contact Form 7 или shortcode формы `Обратная связь`.
   - Тема рендерит этот контент внутри формы через `sb_alpha_feedback_form_markup()`.
2. **Источник истины №2** — filterable fallback, который используется только если контент страницы пустой:

```php
add_filter('sb_alpha_feedback_form_shortcode', static function ($shortcode) {
    return '[contact-form-7 id="416ace1" title="Обратная связь"]';
});
```

Этот fallback документирован как резервный. Он не должен быть единственным способом привязки формы к странице.

### Какой shortcode считать актуальным

Актуальным считается **тот shortcode, который реально вставлен в контент страницы `Написать в банк`** в текущей среде. Это позволяет staging и production использовать разные form id без правки PHP.

### Где это проверить в WordPress admin

1. Откройте `Contact → Contact Forms`.
2. Найдите форму **«Обратная связь»**.
3. Скопируйте shortcode из списка или из экрана редактирования формы.
4. Откройте страницу `Написать в банк` и проверьте, что этот shortcode вставлен в контент страницы.
5. Если на фронте выводится строка вида `[contact-form-7 404 "Not Found"]`, значит shortcode указывает на несуществующую форму и его нужно заменить на актуальный.

### Как согласовать форму и mail template

Тема исходит из бизнес-смысла формы: пользователь оставляет канал обратной связи, текст сообщения и подтверждает согласие на обработку персональных данных.

Если вы используете текущую компактную форму, настройте её **последовательно** так, чтобы mail template ссылался только на реально существующие поля:

**Form**

```text
<label>Данные для обратной связи (телефон, email)
[text* your-subject autocomplete:off]
</label>

<label>Напишите нам сообщение в произвольной форме
[textarea your-message]
</label>

[acceptance acceptance-286] Нажимая кнопку «Отправить», Вы даете свое согласие на обработку персональных данных. [/acceptance]

[submit "Отправить"]
```

**Mail**

- To: `nkb@slavbank.ru`
- Subject: `[_site_title] Обращение с сайта АО НКБ "СЛАВЯНБАНК"`
- Message body:

```text
Контакт для обратной связи: [your-subject]

Сообщение:
[your-message]

Страница: [_url]
Форма: [_contact_form_title]
```

**Additional Settings**

```text
acceptance_as_validation: on
```

Если вы решите расширить форму до отдельных полей `your-name` и `your-email`, mail template должен быть обновлён синхронно.

### Flamingo

Если на стенде активен Flamingo, его можно использовать как дополнительный канал проверки отправленных заявок. Для темы это не обязательная зависимость.

## Deploy notes

1. Разместите тему на staging/clone и активируйте её.
2. Проверьте наличие перечисленных выше страниц со slug.
3. Убедитесь, что Contact Form 7 активен и форма `Обратная связь` существует.
4. Вставьте актуальный shortcode этой формы в контент страницы `Написать в банк`.
5. Проверьте local canonical URL и legacy redirect URL из route map.
6. После smoke-pass можно переносить ту же тему на production без изменения PHP-кода для form id, если shortcode живёт в контенте страницы.

## Rollback notes

1. Переключите активную тему обратно на предыдущую.
2. При необходимости удалите `slavyanbank-alpha` из `wp-content/themes/`.
3. Тестовые страницы можно перевести в draft/trash; миграций или новых таблиц тема не создаёт.
4. Если был настроен fallback filter `sb_alpha_feedback_form_shortcode`, удалите этот filter из MU-plugin / custom plugin / snippets.

## Manual test instructions

1. Активируйте тему на staging.
   - **Pass:** тема активируется без fatal error.
   - **Fail:** white screen, PHP fatal, отсутствующие ассеты.

2. Проверьте canonical local URL:
   - `/`
   - `/informaciya-banka/`
   - `/kontakty/`
   - `/otchetnost/`
   - `/rekvizity-banka/`
   - `/napisat-v-bank/`
   - `/podderzhka/`
   - `/tarify-banka/`
   - **Pass:** страницы рендерятся локально.
   - **Fail:** 404, явный развал layout, уход на прод для перенесённых страниц.

3. Проверьте legacy URL:
   - `/o-banke-slavyanbank-html/info_bank-html.html/`
   - `/kontakty.html/`
   - `/otchetnost.html/`
   - `/rekvizity-banka.html/`
   - `/forma-obratnoj-svyazi.html/`
   - `/podderzhka.html/`
   - `/tarify-banka.html/`
   - **Pass:** 301 redirect на local canonical URL.
   - **Fail:** 404, loop, 200 на legacy URL вместо redirect, уход на главную в случае info_bank.

4. Проверьте меню, футер, CTA и боковые блоки.
   - **Pass:** для локально перенесённых страниц ссылки ведут локально.
   - **Fail:** `Информация банка`, `Контакты`, `Отчётность`, `Реквизиты`, `Написать в банк`, `Поддержка`, `Тарифы банка` ведут на `slavbank.ru` как основной маршрут.

5. Проверьте страницу `Написать в банк`.
   - **Pass:** в форме видна стандартная разметка Contact Form 7, acceptance обязателен, отправка работает, success/error notices стилизованы темой.
   - **Fail:** выводится старый custom admin-post form, выводится `[contact-form-7 404 "Not Found"]`, acceptance пропал.

6. В `Contact → Contact Forms` проверьте форму `Обратная связь`.
   - **Pass:** shortcode из формы совпадает с shortcode в контенте страницы `Написать в банк`, а mail template использует только реально существующие поля.
   - **Fail:** shortcode отличается и не обновлён в page content, или mail template содержит теги вроде `[your-name]` / `[your-email]`, которых нет в форме.

7. Если установлен Flamingo, отправьте тестовую форму и проверьте входящую запись.
   - **Pass:** запись появилась.
   - **Fail:** записи нет при успешной отправке формы.

## Acceptance checklist

- [ ] Есть отдельная локальная страница `Информация банка`.
- [ ] Legacy URL `info_bank` больше не ведёт на главную.
- [ ] На пользовательских страницах нет dev/internal текста.
- [ ] `Написать в банк` использует Contact Form 7 как основной сценарий.
- [ ] Form id не захардкожен как единственный источник истины в PHP.
- [ ] Контент страницы `Написать в банк` содержит актуальный shortcode или блок CF7.
- [ ] Fallback shortcode (если используется) задокументирован через filter `sb_alpha_feedback_form_shortcode`.
- [ ] Mail template CF7 использует только существующие поля формы.
- [ ] Acceptance обязателен и виден пользователю.
- [ ] Меню, футер, CTA и внутренние переходы для локально перенесённых страниц ведут локально.
- [ ] Legacy URL для уже перенесённых страниц корректно отрабатывают.
- [ ] Кастомный admin-post flow больше не используется как основной сценарий.
- [ ] Все изменённые PHP-файлы проходят `php -l`.

## Done / pending / blockers summary

### Done

- Добавлена отдельная локальная страница `Информация банка`.
- Legacy `info_bank` направляется на локальную страницу `Информация банка`, а не на главную.
- Из пользовательских страниц убран внутренний технический copy.
- `Написать в банк` переведена на content-driven Contact Form 7 как основной сценарий.
- Кастомный admin-post flow удалён из основного runtime-пути.
- Меню/футер/CTA для уже перенесённых страниц ведут локально.
- Обновлены route map, asset map и changed file tree.

### Pending

- Неперенесённые разделы сайта по-прежнему ведут на осознанный внешний fallback.
- PDF/XLS отчётности, тарифов и документов `Информация банка` остаются внешними контент-зависимостями.
- Тарифные HTML-подстраницы и support-subpages (`FAQ`, `regen`, `instruction`, `security`) остаются внешними.

### Blockers / caveats

- Для финальной проверки нужен реальный WordPress runtime со включённым Contact Form 7.
- Фактический form id не фиксируется темой; его нужно проверить в admin и в контенте страницы конкретной среды.
- Успешная отправка формы зависит от рабочего mail transport WordPress.
