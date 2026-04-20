/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/page-reporting-body/defaults.js"
/*!****************************************************!*\
  !*** ./src/blocks/page-reporting-body/defaults.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ANNUAL_REPORTS: () => (/* binding */ DEFAULT_ANNUAL_REPORTS),
/* harmony export */   DEFAULT_CATEGORY_LINKS: () => (/* binding */ DEFAULT_CATEGORY_LINKS),
/* harmony export */   DEFAULT_INTERIM_GROUPS: () => (/* binding */ DEFAULT_INTERIM_GROUPS),
/* harmony export */   DEFAULT_POSTS: () => (/* binding */ DEFAULT_POSTS),
/* harmony export */   DEFAULT_RATES: () => (/* binding */ DEFAULT_RATES),
/* harmony export */   DEFAULT_SECTION_LINKS: () => (/* binding */ DEFAULT_SECTION_LINKS),
/* harmony export */   createAnnualReport: () => (/* binding */ createAnnualReport),
/* harmony export */   createInterimDocument: () => (/* binding */ createInterimDocument),
/* harmony export */   createInterimGroup: () => (/* binding */ createInterimGroup),
/* harmony export */   createLinkItem: () => (/* binding */ createLinkItem),
/* harmony export */   createPostItem: () => (/* binding */ createPostItem),
/* harmony export */   createRateRow: () => (/* binding */ createRateRow),
/* harmony export */   normalizeAnnualReport: () => (/* binding */ normalizeAnnualReport),
/* harmony export */   normalizeAnnualReports: () => (/* binding */ normalizeAnnualReports),
/* harmony export */   normalizeInterimDocument: () => (/* binding */ normalizeInterimDocument),
/* harmony export */   normalizeInterimGroup: () => (/* binding */ normalizeInterimGroup),
/* harmony export */   normalizeInterimGroups: () => (/* binding */ normalizeInterimGroups),
/* harmony export */   normalizeLinkItem: () => (/* binding */ normalizeLinkItem),
/* harmony export */   normalizeLinkItems: () => (/* binding */ normalizeLinkItems),
/* harmony export */   normalizePostItem: () => (/* binding */ normalizePostItem),
/* harmony export */   normalizePosts: () => (/* binding */ normalizePosts),
/* harmony export */   normalizeRateRow: () => (/* binding */ normalizeRateRow),
/* harmony export */   normalizeRates: () => (/* binding */ normalizeRates)
/* harmony export */ });
const DEFAULT_ANNUAL_REPORTS = [{
  "id": "annual-1",
  "ext": "PDF",
  "title": "Годовая бухгалтерская (финансовая) отчетность за 2025 год.",
  "meta": "(Опубликовано 02.04.2026г. Планируется к утверждению на годовом ОСА 21.04.2026г.)",
  "url": "https://slavbank.ru/wp-content/uploads/otchet-2025-website.pdf",
  "opensInNewTab": true
}, {
  "id": "annual-2",
  "ext": "PDF",
  "title": "Годовая бухгалтерская (финансовая) отчетность за 2024 год.",
  "meta": "(Опубликовано 11.04.2025г. Утверждена на годовом ОСА 10.04.2025г.)",
  "url": "https://slavbank.ru/wp-content/uploads/azo_-2024_nmm_slavyanbank.pdf",
  "opensInNewTab": true
}, {
  "id": "annual-3",
  "ext": "PDF",
  "title": "Годовая бухгалтерская (финансовая) отчетность за 2023 год.",
  "meta": "(Опубликовано 12.03.2024г. Утверждена на годовом ОСА 02.04.2024г.)",
  "url": "https://slavbank.ru/wp-content/uploads/otchet_2023_publ.pdf",
  "opensInNewTab": true
}, {
  "id": "annual-4",
  "ext": "PDF",
  "title": "Годовая бухгалтерская (финансовая) отчетность за 2022 год.",
  "meta": "(Опубликовано 29.03.2023г. Утверждена на годовом ОСА 20.04.2023г.)",
  "url": "https://slavbank.ru/wp-content/uploads/otchet2022.pdf",
  "opensInNewTab": true
}, {
  "id": "annual-5",
  "ext": "PDF",
  "title": "Годовая бухгалтерская (финансовая) отчетность за 2020 год.",
  "meta": "(Опубликовано 29.03.2021г. Утверждена на годовом ОСА 22.04.2021г.)",
  "url": "https://slavbank.ru/wp-content/uploads/otchet2020.pdf",
  "opensInNewTab": true
}, {
  "id": "annual-6",
  "ext": "PDF",
  "title": "Годовая бухгалтерская (финансовая) отчетность за 2019 год.",
  "meta": "(Опубликовано 26.03.2020г. Утверждена на годовом ОСА 16.04.2020г.)",
  "url": "https://slavbank.ru/wp-content/uploads/2021/03/report2019.pdf",
  "opensInNewTab": true
}, {
  "id": "annual-7",
  "ext": "PDF",
  "title": "Годовая бухгалтерская (финансовая) отчетность за 2018 год.",
  "meta": "(Утверждена на годовом ОСА 18.04.2019г) (Опубликовано 28.03.2019г.)",
  "url": "https://slavbank.ru/wp-content/uploads/2021/03/report2018.pdf",
  "opensInNewTab": true
}, {
  "id": "annual-8",
  "ext": "PDF",
  "title": "Годовая бухгалтерская (финансовая) отчетность за 2017 год.",
  "meta": "(Опубликовано 12.04.2018г.)",
  "url": "https://slavbank.ru/wp-content/uploads/2021/03/report2017.pdf",
  "opensInNewTab": true
}];
const DEFAULT_INTERIM_GROUPS = [{
  "id": "interim-group-1",
  "title": "Промежуточная бухгалтерская (финансовая) отчетность за 2025 год",
  "open": true,
  "documents": [{
    "id": "interim-1-doc-1",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2025 г.",
    "meta": "(опубликовано 16.05.2025г.)",
    "url": "https://slavbank.ru/wp-content/uploads/otchet-publ-i-2025.pdf",
    "opensInNewTab": true
  }, {
    "id": "interim-1-doc-2",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2025 г.",
    "meta": "(опубликовано 07.08.2025г.)",
    "url": "https://slavbank.ru/wp-content/uploads/otchet-publ-ii-2025.pdf",
    "opensInNewTab": true
  }, {
    "id": "interim-1-doc-3",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2025 г.",
    "meta": "(опубликовано 12.11.2025г.)",
    "url": "https://slavbank.ru/wp-content/uploads/otchet-publ-9-2025.pdf",
    "opensInNewTab": true
  }]
}, {
  "id": "interim-group-2",
  "title": "Промежуточная бухгалтерская (финансовая) отчетность за 2024 год",
  "open": false,
  "documents": [{
    "id": "interim-2-doc-1",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2024 г.",
    "meta": "(опубликовано 16.05.2024г.)",
    "url": "https://slavbank.ru/wp-content/uploads/otchet_publ-1-24-1.pdf",
    "opensInNewTab": true
  }, {
    "id": "interim-2-doc-2",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2024 г.",
    "meta": "(опубликовано 09.08.2024г.)",
    "url": "https://slavbank.ru/wp-content/uploads/na-sajt-otchet-2-2024-publ.pdf",
    "opensInNewTab": true
  }, {
    "id": "interim-2-doc-3",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2024 г.",
    "meta": "(опубликовано 08.11.2024г.)",
    "url": "https://slavbank.ru/wp-content/uploads/otchet-publ-9-2024.pdf",
    "opensInNewTab": true
  }]
}, {
  "id": "interim-group-3",
  "title": "Промежуточная бухгалтерская (финансовая) отчетность за 2023 год",
  "open": false,
  "documents": [{
    "id": "interim-3-doc-1",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2023 г.",
    "meta": "(опубликовано 15.05.2023г.)",
    "url": "https://slavbank.ru/wp-content/uploads/otchet-i-2023-for-publ.pdf",
    "opensInNewTab": true
  }, {
    "id": "interim-3-doc-2",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2023 г.",
    "meta": "(опубликовано 02.08.2023г.)",
    "url": "https://slavbank.ru/wp-content/uploads/otchet-6-2023-publ.pdf",
    "opensInNewTab": true
  }, {
    "id": "interim-3-doc-3",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2023 г.",
    "meta": "(опубликовано 07.11.2023г.)",
    "url": "https://slavbank.ru/wp-content/uploads/publ-otchet-9-2023.pdf",
    "opensInNewTab": true
  }]
}, {
  "id": "interim-group-4",
  "title": "Промежуточная бухгалтерская (финансовая) отчетность за 2022 год",
  "open": false,
  "documents": [{
    "id": "interim-4-doc-1",
    "title": "Показатели на 01.01.2022 г.",
    "meta": "(дата размещения 18.01.2022г.)",
    "url": "https://slavbank.ru/wp-content/uploads/pocaz_01012022.pdf",
    "opensInNewTab": true
  }, {
    "id": "interim-4-doc-2",
    "title": "Показатели на 01.02.2022 г.",
    "meta": "(дата размещения 09.02.2022г.)",
    "url": "https://slavbank.ru/wp-content/uploads/pocaz_01022022.pdf",
    "opensInNewTab": true
  }]
}, {
  "id": "interim-group-5",
  "title": "Промежуточная бухгалтерская (финансовая) отчетность за 2021 год",
  "open": false,
  "documents": [{
    "id": "interim-5-doc-1",
    "title": "Предварительные показатели на 01.01.2021 г.",
    "meta": "(дата размещения 18.01.2021)",
    "url": "https://slavbank.ru/wp-content/uploads/pr_pokaz_01012021.xls",
    "opensInNewTab": true
  }, {
    "id": "interim-5-doc-2",
    "title": "Показатели на 01.02.2021 г.",
    "meta": "(дата размещения 17.02.2021)",
    "url": "https://slavbank.ru/wp-content/uploads/pokaz_01022021.xls",
    "opensInNewTab": true
  }, {
    "id": "interim-5-doc-3",
    "title": "Показатели на 01.03.2021 г.",
    "meta": "(дата размещения 10.03.2021)",
    "url": "https://slavbank.ru/wp-content/uploads/pokaz_01032021.xls",
    "opensInNewTab": true
  }, {
    "id": "interim-5-doc-4",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2021 г.",
    "meta": "(опубликовано 12.05.2021г.)",
    "url": "https://slavbank.ru/wp-content/uploads/otchet-1-2021.pdf",
    "opensInNewTab": true
  }, {
    "id": "interim-5-doc-5",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2021 г.",
    "meta": "(опубликовано 30.07.2021г.)",
    "url": "https://slavbank.ru/wp-content/uploads/otchet-2-2021.pdf",
    "opensInNewTab": true
  }, {
    "id": "interim-5-doc-6",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2021 г.",
    "meta": "(опубликовано 10.11.2021г.)",
    "url": "https://slavbank.ru/wp-content/uploads/otchet-3-2021.pdf",
    "opensInNewTab": true
  }]
}, {
  "id": "interim-group-6",
  "title": "Промежуточная бухгалтерская (финансовая) отчетность за 2020 год",
  "open": false,
  "documents": [{
    "id": "interim-6-doc-1",
    "title": "Предварительные показатели на 01.01.2020г.",
    "meta": "(дата размещения 15.01.2020г.)",
    "url": "https://slavbank.ru/wp-content/uploads/pr_pokaz_01012020.xls",
    "opensInNewTab": true
  }, {
    "id": "interim-6-doc-2",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2020 года",
    "meta": "(опубликовано 18.05.2020г.)",
    "url": "https://slavbank.ru/wp-content/uploads/2021/03/otchet04-2020.pdf",
    "opensInNewTab": true
  }, {
    "id": "interim-6-doc-3",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2020 года",
    "meta": "(опубликовано 29.07.2020г.)",
    "url": "https://slavbank.ru/wp-content/uploads/2021/03/1h-2020.pdf",
    "opensInNewTab": true
  }, {
    "id": "interim-6-doc-4",
    "title": "Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2020 г.",
    "meta": "(опубликовано 28.10.2020г.)",
    "url": "https://slavbank.ru/wp-content/uploads/2021/03/pbo9m2020.pdf",
    "opensInNewTab": true
  }]
}];
const DEFAULT_RATES = [{
  "id": "rate-1",
  "code": "USD",
  "buy": "89.40",
  "sell": "92.30"
}, {
  "id": "rate-2",
  "code": "EUR",
  "buy": "96.80",
  "sell": "99.90"
}];
const DEFAULT_POSTS = [{
  "id": "post-1",
  "date": "05.04.2026",
  "title": "Изменения в тарифах банка",
  "url": "https://slavbank.ru/novosti/",
  "opensInNewTab": false
}, {
  "id": "post-2",
  "date": "01.04.2026",
  "title": "Обновление раздела отчетности",
  "url": "https://slavbank.ru/otchetnost/",
  "opensInNewTab": false
}];
const DEFAULT_SECTION_LINKS = [{
  "id": "drawer-1-link-1",
  "label": "ИНФОРМАЦИЯ БАНКА",
  "url": "https://slavbank.ru/informaciya-banka/",
  "opensInNewTab": false
}, {
  "id": "drawer-1-link-2",
  "label": "НОВОСТИ",
  "url": "https://slavbank.ru/novosti/",
  "opensInNewTab": false
}, {
  "id": "drawer-1-link-3",
  "label": "ТАРИФЫ БАНКА",
  "url": "https://slavbank.ru/tarify-banka/",
  "opensInNewTab": false
}, {
  "id": "drawer-1-link-4",
  "label": "ЮРИДИЧЕСКИМ ЛИЦАМ",
  "url": "https://slavbank.ru/yuridicheskim-licam/",
  "opensInNewTab": false
}, {
  "id": "drawer-1-link-5",
  "label": "ПОДДЕРЖКА",
  "url": "https://slavbank.ru/podderzhka/",
  "opensInNewTab": false
}, {
  "id": "drawer-1-link-6",
  "label": "КОНТАКТЫ",
  "url": "https://slavbank.ru/kontakty/",
  "opensInNewTab": false
}];
const DEFAULT_CATEGORY_LINKS = [{
  "id": "drawer-2-link-1",
  "label": "Новости",
  "url": "https://slavbank.ru/novosti/",
  "opensInNewTab": false
}, {
  "id": "drawer-2-link-2",
  "label": "Полезная информация",
  "url": "https://slavbank.ru/novosti/",
  "opensInNewTab": false
}, {
  "id": "drawer-2-link-3",
  "label": "АРХИВ",
  "url": "https://slavbank.ru/category/arhiv",
  "opensInNewTab": true
}];
const createId = (prefix = 'item') => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
const createAnnualReport = (overrides = {}) => ({
  id: createId('annual'),
  ext: 'PDF',
  title: 'Новый годовой документ',
  meta: '',
  url: '',
  opensInNewTab: true,
  ...overrides
});
const normalizeAnnualReport = (item = {}, index = 0) => ({
  id: item.id || `annual-${index}`,
  ext: item.ext || 'PDF',
  title: item.title || '',
  meta: item.meta || '',
  url: item.url || '',
  opensInNewTab: !!item.opensInNewTab
});
const normalizeAnnualReports = (items, fallback = DEFAULT_ANNUAL_REPORTS) => {
  const source = Array.isArray(items) && items.length ? items : fallback;
  return source.map(normalizeAnnualReport);
};
const createInterimDocument = (overrides = {}) => ({
  id: createId('interim-doc'),
  title: 'Новый документ',
  meta: '',
  url: '',
  opensInNewTab: true,
  ...overrides
});
const normalizeInterimDocument = (item = {}, index = 0) => ({
  id: item.id || `interim-doc-${index}`,
  title: item.title || '',
  meta: item.meta || '',
  url: item.url || '',
  opensInNewTab: !!item.opensInNewTab
});
const createInterimGroup = (overrides = {}) => ({
  id: createId('interim-group'),
  title: 'Новая группа промежуточной отчетности',
  open: false,
  documents: [createInterimDocument()],
  ...overrides
});
const normalizeInterimGroup = (group = {}, index = 0) => ({
  id: group.id || `interim-group-${index}`,
  title: group.title || '',
  open: !!group.open,
  documents: Array.isArray(group.documents) ? group.documents.map(normalizeInterimDocument) : []
});
const normalizeInterimGroups = (groups, fallback = DEFAULT_INTERIM_GROUPS) => {
  const source = Array.isArray(groups) && groups.length ? groups : fallback;
  return source.map(normalizeInterimGroup);
};
const createRateRow = (overrides = {}) => ({
  id: createId('rate'),
  code: 'USD',
  buy: '0.00',
  sell: '0.00',
  ...overrides
});
const normalizeRateRow = (item = {}, index = 0) => ({
  id: item.id || `rate-${index}`,
  code: item.code || '',
  buy: item.buy || '',
  sell: item.sell || ''
});
const normalizeRates = (items, fallback = DEFAULT_RATES) => {
  const source = Array.isArray(items) && items.length ? items : fallback;
  return source.map(normalizeRateRow);
};
const createPostItem = (overrides = {}) => ({
  id: createId('post'),
  date: '01.01.2026',
  title: 'Новая публикация',
  url: '',
  opensInNewTab: false,
  ...overrides
});
const normalizePostItem = (item = {}, index = 0) => ({
  id: item.id || `post-${index}`,
  date: item.date || '',
  title: item.title || '',
  url: item.url || '',
  opensInNewTab: !!item.opensInNewTab
});
const normalizePosts = (items, fallback = DEFAULT_POSTS) => {
  const source = Array.isArray(items) && items.length ? items : fallback;
  return source.map(normalizePostItem);
};
const createLinkItem = (overrides = {}) => ({
  id: createId('link'),
  label: 'Новая ссылка',
  url: '',
  opensInNewTab: false,
  ...overrides
});
const normalizeLinkItem = (item = {}, index = 0) => ({
  id: item.id || `link-${index}`,
  label: item.label || '',
  url: item.url || '',
  opensInNewTab: !!item.opensInNewTab
});
const normalizeLinkItems = (items, fallback = []) => {
  const source = Array.isArray(items) && items.length ? items : fallback;
  return source.map(normalizeLinkItem);
};

/***/ },

/***/ "./src/blocks/page-reporting-body/edit.js"
/*!************************************************!*\
  !*** ./src/blocks/page-reporting-body/edit.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaults */ "./src/blocks/page-reporting-body/defaults.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const insertAfter = (items, afterId, nextItem) => {
  const list = Array.isArray(items) ? [...items] : [];
  if (!afterId) {
    list.push(nextItem);
    return list;
  }
  const index = list.findIndex(item => item.id === afterId);
  if (index === -1) {
    list.push(nextItem);
    return list;
  }
  list.splice(index + 1, 0, nextItem);
  return list;
};
function ItemToolbar({
  onAdd,
  onRemove,
  addLabel = 'Добавить ниже',
  removeLabel = 'Удалить',
  canRemove = true
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "sb-reporting-item-toolbar",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      onClick: onAdd,
      isSmall: true,
      children: addLabel
    }), canRemove && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      isDestructive: true,
      onClick: onRemove,
      isSmall: true,
      children: removeLabel
    })]
  });
}
function Edit({
  attributes,
  setAttributes,
  isSelected
}) {
  const {
    contentAnchor = 'content',
    annualCardTitle = 'ОТЧЕТНОСТЬ АО НКБ «СЛАВЯНБАНК»',
    annualHeading = 'ГОДОВАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ',
    annualReports: rawAnnualReports = _defaults__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ANNUAL_REPORTS,
    interimKickerTitle = 'ПРОМЕЖУТОЧНАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ,',
    interimSubTitle = 'ПОКАЗАТЕЛИ ДЕЯТЕЛЬНОСТИ БАНКА',
    interimGroups: rawInterimGroups = _defaults__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_INTERIM_GROUPS
  } = attributes;
  const annualReports = (0,_defaults__WEBPACK_IMPORTED_MODULE_3__.normalizeAnnualReports)(rawAnnualReports, _defaults__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ANNUAL_REPORTS);
  const interimGroups = (0,_defaults__WEBPACK_IMPORTED_MODULE_3__.normalizeInterimGroups)(rawInterimGroups, _defaults__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_INTERIM_GROUPS);
  const setField = (field, value) => setAttributes({
    [field]: value
  });
  const updateAnnualReport = (reportId, patch) => {
    setAttributes({
      annualReports: annualReports.map(report => report.id === reportId ? {
        ...report,
        ...patch
      } : report)
    });
  };
  const addAnnualReport = (afterId = null) => {
    setAttributes({
      annualReports: insertAfter(annualReports, afterId, (0,_defaults__WEBPACK_IMPORTED_MODULE_3__.createAnnualReport)())
    });
  };
  const removeAnnualReport = reportId => {
    setAttributes({
      annualReports: annualReports.filter(report => report.id !== reportId)
    });
  };
  const updateInterimGroup = (groupId, patch) => {
    setAttributes({
      interimGroups: interimGroups.map(group => group.id === groupId ? {
        ...group,
        ...patch
      } : group)
    });
  };
  const addInterimGroup = (afterId = null) => {
    setAttributes({
      interimGroups: insertAfter(interimGroups, afterId, (0,_defaults__WEBPACK_IMPORTED_MODULE_3__.createInterimGroup)())
    });
  };
  const removeInterimGroup = groupId => {
    setAttributes({
      interimGroups: interimGroups.filter(group => group.id !== groupId)
    });
  };
  const updateInterimDocument = (groupId, docId, patch) => {
    setAttributes({
      interimGroups: interimGroups.map(group => {
        if (group.id !== groupId) {
          return group;
        }
        return {
          ...group,
          documents: group.documents.map(document => document.id === docId ? {
            ...document,
            ...patch
          } : document)
        };
      })
    });
  };
  const addInterimDocument = (groupId, afterDocId = null) => {
    setAttributes({
      interimGroups: interimGroups.map(group => {
        if (group.id !== groupId) {
          return group;
        }
        return {
          ...group,
          documents: insertAfter(group.documents, afterDocId, (0,_defaults__WEBPACK_IMPORTED_MODULE_3__.createInterimDocument)())
        };
      })
    });
  };
  const removeInterimDocument = (groupId, docId) => {
    setAttributes({
      interimGroups: interimGroups.map(group => {
        if (group.id !== groupId) {
          return group;
        }
        return {
          ...group,
          documents: group.documents.filter(document => document.id !== docId)
        };
      })
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "\u041E\u0431\u0449\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: "\u042F\u043A\u043E\u0440\u044C \u0441\u0435\u043A\u0446\u0438\u0438",
          value: contentAnchor,
          onChange: value => setField('contentAnchor', value),
          help: "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E hero-\u043A\u043D\u043E\u043F\u043A\u0430 \u0432\u0435\u0434\u0435\u0442 \u043D\u0430 #content."
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "\u0413\u043E\u0434\u043E\u0432\u0430\u044F \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "sb-reporting-inspector-stack",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "\u041C\u0430\u043B\u044B\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
            value: annualCardTitle,
            onChange: value => setField('annualCardTitle', value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
            value: annualHeading,
            onChange: value => setField('annualHeading', value)
          }), annualReports.map((report, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "sb-reporting-inspector-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
              children: `Документ #${index + 1}`
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "\u0424\u043E\u0440\u043C\u0430\u0442",
              value: report.ext,
              onChange: value => updateAnnualReport(report.id, {
                ext: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
              label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
              value: report.title,
              onChange: value => updateAnnualReport(report.id, {
                title: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
              label: "\u041F\u043E\u0434\u043F\u0438\u0441\u044C",
              value: report.meta,
              onChange: value => updateAnnualReport(report.id, {
                meta: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "URL",
              value: report.url,
              onChange: value => updateAnnualReport(report.id, {
                url: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",
              checked: report.opensInNewTab,
              onChange: value => updateAnnualReport(report.id, {
                opensInNewTab: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              variant: "secondary",
              isDestructive: true,
              onClick: () => removeAnnualReport(report.id),
              children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"
            })]
          }, report.id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "primary",
            onClick: () => addAnnualReport(),
            children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0433\u043E\u0434\u043E\u0432\u043E\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "\u041F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u0430\u044F \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "sb-reporting-inspector-stack",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
            value: interimKickerTitle,
            onChange: value => setField('interimKickerTitle', value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
            value: interimSubTitle,
            onChange: value => setField('interimSubTitle', value)
          }), interimGroups.map((group, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "sb-reporting-inspector-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
              children: `Группа #${index + 1}`
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A summary",
              value: group.title,
              onChange: value => updateInterimGroup(group.id, {
                title: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
              label: "\u0420\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
              checked: group.open,
              onChange: value => updateInterimGroup(group.id, {
                open: value
              })
            }), group.documents.map((document, docIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "sb-reporting-inspector-subcard",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
                children: `Документ #${docIndex + 1}`
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
                label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",
                value: document.title,
                onChange: value => updateInterimDocument(group.id, document.id, {
                  title: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
                label: "\u041F\u043E\u0434\u043F\u0438\u0441\u044C",
                value: document.meta,
                onChange: value => updateInterimDocument(group.id, document.id, {
                  meta: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                label: "URL",
                value: document.url,
                onChange: value => updateInterimDocument(group.id, document.id, {
                  url: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
                label: "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",
                checked: document.opensInNewTab,
                onChange: value => updateInterimDocument(group.id, document.id, {
                  opensInNewTab: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "secondary",
                isDestructive: true,
                onClick: () => removeInterimDocument(group.id, document.id),
                children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"
              })]
            }, document.id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "sb-reporting-inspector-actions",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "secondary",
                onClick: () => addInterimDocument(group.id),
                children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "secondary",
                isDestructive: true,
                onClick: () => removeInterimGroup(group.id),
                children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443"
              })]
            })]
          }, group.id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "primary",
            onClick: () => addInterimGroup(),
            children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443"
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "bento-card sb-reporting-main-card",
      style: {
        padding: 'var(--s-4)'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "h3",
        className: "wp-block-heading kicker",
        value: annualCardTitle,
        onChange: value => setField('annualCardTitle', value)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "has-text-align-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "span",
            value: annualHeading,
            onChange: value => setField('annualHeading', value)
          })
        })
      }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "sb-reporting-section-toolbar",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: () => addAnnualReport(),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Добавить годовой документ', 'slav-bank')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "doc-shelf",
        children: annualReports.map(report => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "doc-card sb-reporting-editor-card",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "doc-ext",
            children: report.ext || 'PDF'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "doc-body",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "div",
              className: "doc-title",
              value: report.title,
              onChange: value => updateAnnualReport(report.id, {
                title: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "div",
              className: "muted",
              style: {
                fontSize: '10px'
              },
              value: report.meta,
              onChange: value => updateAnnualReport(report.id, {
                meta: value
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "doc-arrow",
            children: "\u2192"
          }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ItemToolbar, {
            onAdd: () => addAnnualReport(report.id),
            onRemove: () => removeAnnualReport(report.id),
            canRemove: annualReports.length > 1
          })]
        }, report.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "prose",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "entry-content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "dashv2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "bento-card sb-reporting-inner-card",
              style: {
                padding: 'var(--s-4)',
                position: 'relative'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "prose",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "entry-content",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                    className: "kicker",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                        tagName: "span",
                        value: interimKickerTitle,
                        onChange: value => setField('interimKickerTitle', value)
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                    className: "kicker",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                        tagName: "span",
                        value: interimSubTitle,
                        onChange: value => setField('interimSubTitle', value)
                      })
                    })
                  }), interimGroups.map(group => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("details", {
                    className: "wp-block-details has-gray-color has-text-color has-link-color is-layout-flow wp-block-details-is-layout-flow",
                    open: group.open,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("summary", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                          tagName: "span",
                          value: group.title,
                          onChange: value => updateInterimGroup(group.id, {
                            title: value
                          })
                        })
                      })
                    }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "sb-reporting-section-toolbar",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "secondary",
                        onClick: () => updateInterimGroup(group.id, {
                          open: !group.open
                        }),
                        children: group.open ? 'Свернуть' : 'Раскрыть'
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "secondary",
                        onClick: () => addInterimDocument(group.id),
                        children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "secondary",
                        onClick: () => addInterimGroup(group.id),
                        children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443 \u043D\u0438\u0436\u0435"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "secondary",
                        isDestructive: true,
                        onClick: () => removeInterimGroup(group.id),
                        disabled: interimGroups.length === 1,
                        children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("figure", {
                      className: "wp-block-table is-style-stripes",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("table", {
                        className: "has-fixed-layout",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
                          children: group.documents.map(document => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tr", {
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
                              className: "has-text-align-center",
                              "data-align": "center",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
                                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                                  tagName: "span",
                                  value: document.title,
                                  onChange: value => updateInterimDocument(group.id, document.id, {
                                    title: value
                                  })
                                })
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                                tagName: "sub",
                                value: document.meta,
                                onChange: value => updateInterimDocument(group.id, document.id, {
                                  meta: value
                                })
                              }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ItemToolbar, {
                                onAdd: () => addInterimDocument(group.id, document.id),
                                onRemove: () => removeInterimDocument(group.id, document.id),
                                canRemove: group.documents.length > 1
                              })]
                            })
                          }, document.id))
                        })
                      })
                    })]
                  }, group.id)), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "sb-reporting-section-toolbar",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                      variant: "primary",
                      onClick: () => addInterimGroup(),
                      children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0435 \u043E\u0434\u043D\u0443 \u0433\u0440\u0443\u043F\u043F\u0443"
                    })
                  })]
                })
              })
            })
          })
        })
      })]
    })]
  });
}

/***/ },

/***/ "./src/blocks/page-reporting-body/index.js"
/*!*************************************************!*\
  !*** ./src/blocks/page-reporting-body/index.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/page-reporting-body/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/page-reporting-body/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/page-reporting-body/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/page-reporting-body/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/page-reporting-body/style.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/page-reporting-body/save.js"
/*!************************************************!*\
  !*** ./src/blocks/page-reporting-body/save.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults */ "./src/blocks/page-reporting-body/defaults.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function Edit({
  attributes
}) {
  const {
    annualCardTitle = 'ОТЧЕТНОСТЬ АО НКБ «СЛАВЯНБАНК»',
    annualHeading = 'ГОДОВАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ',
    annualReports: rawAnnualReports = _defaults__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ANNUAL_REPORTS,
    interimKickerTitle = 'ПРОМЕЖУТОЧНАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ,',
    interimSubTitle = 'ПОКАЗАТЕЛИ ДЕЯТЕЛЬНОСТИ БАНКА',
    interimGroups: rawInterimGroups = _defaults__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_INTERIM_GROUPS
  } = attributes;
  const annualReports = (0,_defaults__WEBPACK_IMPORTED_MODULE_2__.normalizeAnnualReports)(rawAnnualReports, _defaults__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ANNUAL_REPORTS);
  const interimGroups = (0,_defaults__WEBPACK_IMPORTED_MODULE_2__.normalizeInterimGroups)(rawInterimGroups, _defaults__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_INTERIM_GROUPS);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "bento-card sb-reporting-main-card",
    style: {
      padding: 'var(--s-4)'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: "h3",
      className: "wp-block-heading kicker",
      value: annualCardTitle
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: "has-text-align-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "span",
          value: annualHeading
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "doc-shelf",
      children: annualReports.map(report => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
        rel: report?.openInNewTab ? 'noopener noreferrer' : undefined,
        blank: report?.openInNewTab ? '_blank' : undefined,
        href: report.url,
        className: "doc-card sb-reporting-editor-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "doc-ext",
          children: report.ext || 'PDF'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "doc-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            tagName: "div",
            className: "doc-title",
            value: report.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            tagName: "div",
            className: "muted",
            style: {
              fontSize: '10px'
            },
            value: report.meta
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "doc-arrow",
          children: "\u2192"
        })]
      }, report.id))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "prose",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "entry-content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "dashv2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "bento-card sb-reporting-inner-card",
            style: {
              padding: 'var(--s-4)',
              position: 'relative'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "prose",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "entry-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "kicker",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                      tagName: "span",
                      value: interimKickerTitle
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
                  className: "kicker",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                      tagName: "span",
                      value: interimSubTitle
                    })
                  })
                }), interimGroups.map(group => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("details", {
                  className: "wp-block-details has-gray-color has-text-color has-link-color is-layout-flow wp-block-details-is-layout-flow",
                  open: group.open,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("summary", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                        tagName: "span",
                        value: group.title
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("figure", {
                    className: "wp-block-table is-style-stripes",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("table", {
                      className: "has-fixed-layout",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
                        children: group.documents.map(document => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tr", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                            className: "has-text-align-center",
                            "data-align": "center",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                                rel: document?.openInNewTab ? 'noopener noreferrer' : undefined,
                                blank: document?.openInNewTab ? '_blank' : undefined,
                                href: document?.url,
                                tagName: "a",
                                value: document.title
                              })
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                              tagName: "sub",
                              value: document.meta
                            })]
                          })
                        }, document.id))
                      })
                    })
                  })]
                }, group.id))]
              })
            })
          })
        })
      })
    })]
  });
}

/***/ },

/***/ "./src/blocks/page-reporting-body/editor.scss"
/*!****************************************************!*\
  !*** ./src/blocks/page-reporting-body/editor.scss ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/page-reporting-body/style.scss"
/*!***************************************************!*\
  !*** ./src/blocks/page-reporting-body/style.scss ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/blocks/page-reporting-body/block.json"
/*!***************************************************!*\
  !*** ./src/blocks/page-reporting-body/block.json ***!
  \***************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"slav-bank/body-reporting-body","title":"Отчетность — body","category":"Компоненты темы","icon":"screenoptions","parent":["slav-bank/page-reporting"],"description":"","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","supports":{"html":false,"inserting":false,"anchor":true,"spacing":{"padding":true,"margin":true},"layout":true},"attributes":{"contentAnchor":{"type":"string","default":"content"},"annualCardTitle":{"type":"string","default":"ОТЧЕТНОСТЬ АО НКБ «СЛАВЯНБАНК»"},"annualHeading":{"type":"string","default":"ГОДОВАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ"},"annualReports":{"type":"array","default":[{"id":"annual-1","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2025 год.","meta":"(Опубликовано 02.04.2026г. Планируется к утверждению на годовом ОСА 21.04.2026г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-2025-website.pdf","opensInNewTab":true},{"id":"annual-2","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2024 год.","meta":"(Опубликовано 11.04.2025г. Утверждена на годовом ОСА 10.04.2025г.)","url":"https://slavbank.ru/wp-content/uploads/azo_-2024_nmm_slavyanbank.pdf","opensInNewTab":true},{"id":"annual-3","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2023 год.","meta":"(Опубликовано 12.03.2024г. Утверждена на годовом ОСА 02.04.2024г.)","url":"https://slavbank.ru/wp-content/uploads/otchet_2023_publ.pdf","opensInNewTab":true},{"id":"annual-4","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2022 год.","meta":"(Опубликовано 29.03.2023г. Утверждена на годовом ОСА 20.04.2023г.)","url":"https://slavbank.ru/wp-content/uploads/otchet2022.pdf","opensInNewTab":true},{"id":"annual-5","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2020 год.","meta":"(Опубликовано 29.03.2021г. Утверждена на годовом ОСА 22.04.2021г.)","url":"https://slavbank.ru/wp-content/uploads/otchet2020.pdf","opensInNewTab":true},{"id":"annual-6","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2019 год.","meta":"(Опубликовано 26.03.2020г. Утверждена на годовом ОСА 16.04.2020г.)","url":"https://slavbank.ru/wp-content/uploads/2021/03/report2019.pdf","opensInNewTab":true},{"id":"annual-7","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2018 год.","meta":"(Утверждена на годовом ОСА 18.04.2019г) (Опубликовано 28.03.2019г.)","url":"https://slavbank.ru/wp-content/uploads/2021/03/report2018.pdf","opensInNewTab":true},{"id":"annual-8","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2017 год.","meta":"(Опубликовано 12.04.2018г.)","url":"https://slavbank.ru/wp-content/uploads/2021/03/report2017.pdf","opensInNewTab":true}]},"interimKickerTitle":{"type":"string","default":"ПРОМЕЖУТОЧНАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ,"},"interimSubTitle":{"type":"string","default":"ПОКАЗАТЕЛИ ДЕЯТЕЛЬНОСТИ БАНКА"},"interimGroups":{"type":"array","default":[{"id":"interim-group-1","title":"Промежуточная бухгалтерская (финансовая) отчетность за 2025 год","open":true,"documents":[{"id":"interim-1-doc-1","title":"Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2025 г.","meta":"(опубликовано 16.05.2025г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-publ-i-2025.pdf","opensInNewTab":true},{"id":"interim-1-doc-2","title":"Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2025 г.","meta":"(опубликовано 07.08.2025г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-publ-ii-2025.pdf","opensInNewTab":true},{"id":"interim-1-doc-3","title":"Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2025 г.","meta":"(опубликовано 12.11.2025г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-publ-9-2025.pdf","opensInNewTab":true}]},{"id":"interim-group-2","title":"Промежуточная бухгалтерская (финансовая) отчетность за 2024 год","open":false,"documents":[{"id":"interim-2-doc-1","title":"Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2024 г.","meta":"(опубликовано 16.05.2024г.)","url":"https://slavbank.ru/wp-content/uploads/otchet_publ-1-24-1.pdf","opensInNewTab":true},{"id":"interim-2-doc-2","title":"Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2024 г.","meta":"(опубликовано 09.08.2024г.)","url":"https://slavbank.ru/wp-content/uploads/na-sajt-otchet-2-2024-publ.pdf","opensInNewTab":true},{"id":"interim-2-doc-3","title":"Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2024 г.","meta":"(опубликовано 08.11.2024г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-publ-9-2024.pdf","opensInNewTab":true}]},{"id":"interim-group-3","title":"Промежуточная бухгалтерская (финансовая) отчетность за 2023 год","open":false,"documents":[{"id":"interim-3-doc-1","title":"Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2023 г.","meta":"(опубликовано 15.05.2023г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-i-2023-for-publ.pdf","opensInNewTab":true},{"id":"interim-3-doc-2","title":"Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2023 г.","meta":"(опубликовано 02.08.2023г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-6-2023-publ.pdf","opensInNewTab":true},{"id":"interim-3-doc-3","title":"Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2023 г.","meta":"(опубликовано 07.11.2023г.)","url":"https://slavbank.ru/wp-content/uploads/publ-otchet-9-2023.pdf","opensInNewTab":true}]},{"id":"interim-group-4","title":"Промежуточная бухгалтерская (финансовая) отчетность за 2022 год","open":false,"documents":[{"id":"interim-4-doc-1","title":"Показатели на 01.01.2022 г.","meta":"(дата размещения 18.01.2022г.)","url":"https://slavbank.ru/wp-content/uploads/pocaz_01012022.pdf","opensInNewTab":true},{"id":"interim-4-doc-2","title":"Показатели на 01.02.2022 г.","meta":"(дата размещения 09.02.2022г.)","url":"https://slavbank.ru/wp-content/uploads/pocaz_01022022.pdf","opensInNewTab":true}]},{"id":"interim-group-5","title":"Промежуточная бухгалтерская (финансовая) отчетность за 2021 год","open":false,"documents":[{"id":"interim-5-doc-1","title":"Предварительные показатели на 01.01.2021 г.","meta":"(дата размещения 18.01.2021)","url":"https://slavbank.ru/wp-content/uploads/pr_pokaz_01012021.xls","opensInNewTab":true},{"id":"interim-5-doc-2","title":"Показатели на 01.02.2021 г.","meta":"(дата размещения 17.02.2021)","url":"https://slavbank.ru/wp-content/uploads/pokaz_01022021.xls","opensInNewTab":true},{"id":"interim-5-doc-3","title":"Показатели на 01.03.2021 г.","meta":"(дата размещения 10.03.2021)","url":"https://slavbank.ru/wp-content/uploads/pokaz_01032021.xls","opensInNewTab":true},{"id":"interim-5-doc-4","title":"Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2021 г.","meta":"(опубликовано 12.05.2021г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-1-2021.pdf","opensInNewTab":true},{"id":"interim-5-doc-5","title":"Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2021 г.","meta":"(опубликовано 30.07.2021г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-2-2021.pdf","opensInNewTab":true},{"id":"interim-5-doc-6","title":"Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2021 г.","meta":"(опубликовано 10.11.2021г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-3-2021.pdf","opensInNewTab":true}]},{"id":"interim-group-6","title":"Промежуточная бухгалтерская (финансовая) отчетность за 2020 год","open":false,"documents":[{"id":"interim-6-doc-1","title":"Предварительные показатели на 01.01.2020г.","meta":"(дата размещения 15.01.2020г.)","url":"https://slavbank.ru/wp-content/uploads/pr_pokaz_01012020.xls","opensInNewTab":true},{"id":"interim-6-doc-2","title":"Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2020 года","meta":"(опубликовано 18.05.2020г.)","url":"https://slavbank.ru/wp-content/uploads/2021/03/otchet04-2020.pdf","opensInNewTab":true},{"id":"interim-6-doc-3","title":"Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2020 года","meta":"(опубликовано 29.07.2020г.)","url":"https://slavbank.ru/wp-content/uploads/2021/03/1h-2020.pdf","opensInNewTab":true},{"id":"interim-6-doc-4","title":"Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2020 г.","meta":"(опубликовано 28.10.2020г.)","url":"https://slavbank.ru/wp-content/uploads/2021/03/pbo9m2020.pdf","opensInNewTab":true}]}]},"ratesCardTitle":{"type":"string","default":"Курсы валют"},"ratesKicker":{"type":"string","default":"Данные на текущую дату"},"ratesLegend":{"type":"string","default":"Наличные"},"ratesMetaLegend":{"type":"string","default":"Покупка / Продажа"},"ratesBuyLabel":{"type":"string","default":"Покупка"},"ratesSellLabel":{"type":"string","default":"Продажа"},"currencyRates":{"type":"array","default":[{"id":"rate-1","code":"USD","buy":"89.40","sell":"92.30"},{"id":"rate-2","code":"EUR","buy":"96.80","sell":"99.90"}]},"ratesDisclaimer":{"type":"string","default":"Информация носит справочный характер."},"postsKicker":{"type":"string","default":"Полезная информация"},"postsTitle":{"type":"string","default":"Последние публикации"},"posts":{"type":"array","default":[{"id":"post-1","date":"05.04.2026","title":"Изменения в тарифах банка","url":"https://slavbank.ru/novosti/","opensInNewTab":false},{"id":"post-2","date":"01.04.2026","title":"Обновление раздела отчетности","url":"https://slavbank.ru/otchetnost/","opensInNewTab":false}]},"sectionsDrawerTitle":{"type":"string","default":"Разделы сайта"},"sectionsDrawerOpen":{"type":"boolean","default":true},"sectionsLinks":{"type":"array","default":[{"id":"drawer-1-link-1","label":"ИНФОРМАЦИЯ БАНКА","url":"https://slavbank.ru/informaciya-banka/","opensInNewTab":false},{"id":"drawer-1-link-2","label":"НОВОСТИ","url":"https://slavbank.ru/novosti/","opensInNewTab":false},{"id":"drawer-1-link-3","label":"ТАРИФЫ БАНКА","url":"https://slavbank.ru/tarify-banka/","opensInNewTab":false},{"id":"drawer-1-link-4","label":"ЮРИДИЧЕСКИМ ЛИЦАМ","url":"https://slavbank.ru/yuridicheskim-licam/","opensInNewTab":false},{"id":"drawer-1-link-5","label":"ПОДДЕРЖКА","url":"https://slavbank.ru/podderzhka/","opensInNewTab":false},{"id":"drawer-1-link-6","label":"КОНТАКТЫ","url":"https://slavbank.ru/kontakty/","opensInNewTab":false}]},"categoriesDrawerTitle":{"type":"string","default":"Рубрики"},"categoriesDrawerOpen":{"type":"boolean","default":true},"categoriesLinks":{"type":"array","default":[{"id":"drawer-2-link-1","label":"Новости","url":"https://slavbank.ru/novosti/","opensInNewTab":false},{"id":"drawer-2-link-2","label":"Полезная информация","url":"https://slavbank.ru/novosti/","opensInNewTab":false},{"id":"drawer-2-link-3","label":"АРХИВ","url":"https://slavbank.ru/category/arhiv","opensInNewTab":true}]}}}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/page-reporting-body/index": 0,
/******/ 			"blocks/page-reporting-body/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkyour_theme_blocks"] = globalThis["webpackChunkyour_theme_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/page-reporting-body/style-index"], () => (__webpack_require__("./src/blocks/page-reporting-body/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map