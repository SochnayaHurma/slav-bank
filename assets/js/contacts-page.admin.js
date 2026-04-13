(() => {
  const cfg = window.SB_CONTACTS_ADMIN;
  if (!cfg) return;

  const root = document.getElementById(cfg.rootId);
  const field = document.getElementById(cfg.fieldId);

  if (!root || !field) return;

  let state = cfg.data || {};

  const uid = () => Math.random().toString(36).slice(2, 10);

  const escapeHtml = (value = "") =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const readPath = (obj, path) =>
    path.split(".").reduce((acc, key) => {
      const realKey = /^\d+$/.test(key) ? Number(key) : key;
      if (acc == null) return "";
      return acc[realKey] ?? "";
    }, obj);

  function ensureState() {
    state.hero = state.hero || {};
    state.middle = state.middle || {};
    state.middle.items = Array.isArray(state.middle.items) ? state.middle.items : [];
    state.middle.map_block = state.middle.map_block || {};
  }

  function sync() {
    field.value = JSON.stringify(state);
  }

  function setByPath(obj, path, value) {
    const parts = path.split(".");
    let cursor = obj;

    for (let i = 0; i < parts.length - 1; i++) {
      const key = /^\d+$/.test(parts[i]) ? Number(parts[i]) : parts[i];
      const next = parts[i + 1];
      if (cursor[key] == null) {
        cursor[key] = /^\d+$/.test(next) ? [] : {};
      }
      cursor = cursor[key];
    }

    const last = /^\d+$/.test(parts[parts.length - 1])
      ? Number(parts[parts.length - 1])
      : parts[parts.length - 1];

    cursor[last] = value;
  }

  function createContact() {
    return {
      id: `contact-${uid()}`,
      type: "contact",
      label: "Новый контакт",
      value: "",
      href: "",
      note: "",
      copy_value: "",
      action_label: "Открыть",
    };
  }

  function createAddress() {
    return {
      id: `address-${uid()}`,
      type: "address",
      label: "Адрес",
      value: "",
      note: "",
      copy_value: "",
    };
  }

  function createHours() {
    return {
      id: `hours-${uid()}`,
      type: "hours",
      label: "Режим работы",
      alerts: [{ title: "", text: "" }],
    };
  }

  function createAlert() {
    return { title: "", text: "" };
  }

  function moveItem(index, direction) {
    const target = index + direction;
    if (target < 0 || target >= state.middle.items.length) return;
    [state.middle.items[index], state.middle.items[target]] = [
      state.middle.items[target],
      state.middle.items[index],
    ];
  }

  function renderInput(label, path, placeholder = "") {
    const value = readPath(state, path);
    return `
      <label class="sbca-field">
        <span>${escapeHtml(label)}</span>
        <input type="text" data-path="${escapeHtml(path)}" value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}" />
      </label>
    `;
  }

  function renderTextarea(label, path, rows = 3, placeholder = "") {
    const value = readPath(state, path);
    return `
      <label class="sbca-field">
        <span>${escapeHtml(label)}</span>
        <textarea data-path="${escapeHtml(path)}" rows="${rows}" placeholder="${escapeHtml(placeholder)}">${escapeHtml(value)}</textarea>
      </label>
    `;
  }

  function renderHoursAlerts(item, itemIndex) {
    const alerts = Array.isArray(item.alerts) ? item.alerts : [];

    return `
      <div class="sbca-alerts">
        ${alerts
          .map(
            (_, alertIndex) => `
            <div class="sbca-subcard">
              <div class="sbca-subcard__head">
                <strong>Подпункт ${alertIndex + 1}</strong>
                <button type="button" class="button button-link-delete" data-action="remove-alert" data-index="${itemIndex}" data-alert-index="${alertIndex}">
                  Удалить подпункт
                </button>
              </div>
              <div class="sbca-two">
                ${renderInput("Заголовок", `middle.items.${itemIndex}.alerts.${alertIndex}.title`, "С клиентами")}
                ${renderTextarea("Текст", `middle.items.${itemIndex}.alerts.${alertIndex}.text`, 3)}
              </div>
            </div>
          `
          )
          .join("")}
        <div class="sbca-toolbar">
          <button type="button" class="button button-secondary" data-action="add-alert" data-index="${itemIndex}">
            + Добавить подпункт
          </button>
        </div>
      </div>
    `;
  }

  function renderItem(item, index) {
    const title =
      item.type === "contact"
        ? "Контакт"
        : item.type === "address"
        ? "Адрес"
        : "Режим работы";

    let fields = "";

    if (item.type === "contact") {
      fields = `
        <div class="sbca-two">
          ${renderInput("Заголовок", `middle.items.${index}.label`, "Телефон")}
          ${renderInput("Значение", `middle.items.${index}.value`, "8162665247")}
          ${renderInput("Ссылка", `middle.items.${index}.href`, "tel:78162665247 или mailto:...")}
          ${renderInput("Подпись кнопки", `middle.items.${index}.action_label`, "Позвонить")}
          ${renderTextarea("Примечание", `middle.items.${index}.note`, 2)}
          ${renderInput("Значение для копирования", `middle.items.${index}.copy_value`, "8162665247")}
        </div>
      `;
    }

    if (item.type === "address") {
      fields = `
        <div class="sbca-two">
          ${renderInput("Заголовок", `middle.items.${index}.label`, "Адрес")}
          ${renderInput("Адрес", `middle.items.${index}.value`, "г. Великий Новгород, ...")}
          ${renderTextarea("Примечание", `middle.items.${index}.note`, 2)}
          ${renderInput("Значение для копирования", `middle.items.${index}.copy_value`, "г. Великий Новгород, ...")}
        </div>
      `;
    }

    if (item.type === "hours") {
      fields = `
        <div class="sbca-one">
          ${renderInput("Заголовок", `middle.items.${index}.label`, "Режим работы")}
        </div>
        ${renderHoursAlerts(item, index)}
      `;
    }

    return `
      <div class="sbca-item">
        <div class="sbca-item__head">
          <div>
            <strong>${escapeHtml(title)}</strong>
            <div class="sbca-item__meta">ID: ${escapeHtml(item.id || "")}</div>
          </div>
          <div class="sbca-toolbar">
            <button type="button" class="button button-secondary" data-action="move-up" data-index="${index}">↑</button>
            <button type="button" class="button button-secondary" data-action="move-down" data-index="${index}">↓</button>
            <button type="button" class="button button-link-delete" data-action="remove-item" data-index="${index}">
              Удалить
            </button>
          </div>
        </div>
        ${fields}
      </div>
    `;
  }

  function render() {
    ensureState();

    const items = state.middle.items || [];

    root.innerHTML = `
      <div class="sbca-grid">
        <section class="sbca-card">
          <h3>Hero</h3>
          <div class="sbca-two">
            ${renderInput("Заголовок", "hero.title", "Контакты")}
            ${renderInput("Картинка", "hero.image", "/assets/png/11.png")}
            ${renderTextarea("Описание", "hero.description", 3)}
          </div>
        </section>

        <section class="sbca-card">
          <h3>Вводный блок</h3>
          <div class="sbca-two">
            ${renderInput("Заголовок", "middle.intro_title", "Контакты банка")}
            ${renderTextarea("Текст", "middle.intro_text", 3)}
          </div>
        </section>

        <section class="sbca-card">
          <div class="sbca-card__head">
            <h3>Повторяемые блоки средней части</h3>
            <div class="sbca-toolbar">
              <button type="button" class="button button-primary" data-action="add-contact">+ Контакт</button>
              <button type="button" class="button button-secondary" data-action="add-address">+ Адрес</button>
              <button type="button" class="button button-secondary" data-action="add-hours">+ Режим работы</button>
            </div>
          </div>

          ${
            items.length
              ? items.map((item, index) => renderItem(item, index)).join("")
              : `<p>Блоков пока нет. Добавь хотя бы один контакт.</p>`
          }
        </section>

        <section class="sbca-card">
          <h3>Блок «Как нас найти»</h3>
          <div class="sbca-two">
            ${renderInput("Заголовок", "middle.map_block.title", "Как нас найти")}
            ${renderInput("Адрес", "middle.map_block.address", "г. Великий Новгород, ...")}
          </div>
        </section>

        <section class="sbca-note">
          Правая колонка на фронте остаётся динамической. Здесь редактируется только hero и средняя часть.
        </section>
      </div>
    `;

    sync();
  }

  root.addEventListener("input", (event) => {
    const target = event.target.closest("[data-path]");
    if (!target) return;

    setByPath(state, target.dataset.path, target.value);
    sync();
  });

  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;

    event.preventDefault();

    const index = Number(button.dataset.index);
    const alertIndex = Number(button.dataset.alertIndex);

    switch (button.dataset.action) {
      case "add-contact":
        state.middle.items.push(createContact());
        break;

      case "add-address":
        state.middle.items.push(createAddress());
        break;

      case "add-hours":
        state.middle.items.push(createHours());
        break;

      case "remove-item":
        state.middle.items.splice(index, 1);
        break;

      case "move-up":
        moveItem(index, -1);
        break;

      case "move-down":
        moveItem(index, 1);
        break;

      case "add-alert":
        if (!Array.isArray(state.middle.items[index].alerts)) {
          state.middle.items[index].alerts = [];
        }
        state.middle.items[index].alerts.push(createAlert());
        break;

      case "remove-alert":
        state.middle.items[index].alerts.splice(alertIndex, 1);
        if (state.middle.items[index].alerts.length === 0) {
          state.middle.items[index].alerts.push(createAlert());
        }
        break;
    }

    render();
  });

  render();
})();