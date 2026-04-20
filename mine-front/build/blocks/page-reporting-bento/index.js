/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/page-reporting-bento/edit.js"
/*!*************************************************!*\
  !*** ./src/blocks/page-reporting-bento/edit.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const TEMPLATE = [['slav-bank/body-reporting-body', {}], ['slav-bank/bento-shell-sidebar', {}]];
function Edit() {
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps)({
    className: 'bento'
  }, {
    template: TEMPLATE
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
    className: "block dashv2",
    id: "content",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        ...innerBlocksProps
      })
    })
  });
}

/***/ },

/***/ "./src/blocks/page-reporting-bento/index.js"
/*!**************************************************!*\
  !*** ./src/blocks/page-reporting-bento/index.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/page-reporting-bento/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/page-reporting-bento/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/page-reporting-bento/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/page-reporting-bento/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/page-reporting-bento/style.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/page-reporting-bento/save.js"
/*!*************************************************!*\
  !*** ./src/blocks/page-reporting-bento/save.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save() {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: 'block dashv2',
    id: "content"
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "bento",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
      })
    })
  });
}

/***/ },

/***/ "./src/blocks/page-reporting-bento/editor.scss"
/*!*****************************************************!*\
  !*** ./src/blocks/page-reporting-bento/editor.scss ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/page-reporting-bento/style.scss"
/*!****************************************************!*\
  !*** ./src/blocks/page-reporting-bento/style.scss ***!
  \****************************************************/
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

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/blocks/page-reporting-bento/block.json"
/*!****************************************************!*\
  !*** ./src/blocks/page-reporting-bento/block.json ***!
  \****************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"slav-bank/body-reporting-bento","title":"Отчетность — bento","category":"Компоненты темы","icon":"screenoptions","parent":["slav-bank/page-reporting"],"description":"Редактируемая bento-секция страницы отчетности.","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","supports":{"html":false,"inserting":false,"anchor":true,"spacing":{"padding":true,"margin":true},"layout":true},"attributes":{"contentAnchor":{"type":"string","default":"content"},"annualCardTitle":{"type":"string","default":"ОТЧЕТНОСТЬ АО НКБ «СЛАВЯНБАНК»"},"annualHeading":{"type":"string","default":"ГОДОВАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ"},"annualReports":{"type":"array","default":[{"id":"annual-1","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2025 год.","meta":"(Опубликовано 02.04.2026г. Планируется к утверждению на годовом ОСА 21.04.2026г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-2025-website.pdf","opensInNewTab":true},{"id":"annual-2","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2024 год.","meta":"(Опубликовано 11.04.2025г. Утверждена на годовом ОСА 10.04.2025г.)","url":"https://slavbank.ru/wp-content/uploads/azo_-2024_nmm_slavyanbank.pdf","opensInNewTab":true},{"id":"annual-3","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2023 год.","meta":"(Опубликовано 12.03.2024г. Утверждена на годовом ОСА 02.04.2024г.)","url":"https://slavbank.ru/wp-content/uploads/otchet_2023_publ.pdf","opensInNewTab":true},{"id":"annual-4","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2022 год.","meta":"(Опубликовано 29.03.2023г. Утверждена на годовом ОСА 20.04.2023г.)","url":"https://slavbank.ru/wp-content/uploads/otchet2022.pdf","opensInNewTab":true},{"id":"annual-5","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2020 год.","meta":"(Опубликовано 29.03.2021г. Утверждена на годовом ОСА 22.04.2021г.)","url":"https://slavbank.ru/wp-content/uploads/otchet2020.pdf","opensInNewTab":true},{"id":"annual-6","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2019 год.","meta":"(Опубликовано 26.03.2020г. Утверждена на годовом ОСА 16.04.2020г.)","url":"https://slavbank.ru/wp-content/uploads/2021/03/report2019.pdf","opensInNewTab":true},{"id":"annual-7","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2018 год.","meta":"(Утверждена на годовом ОСА 18.04.2019г) (Опубликовано 28.03.2019г.)","url":"https://slavbank.ru/wp-content/uploads/2021/03/report2018.pdf","opensInNewTab":true},{"id":"annual-8","ext":"PDF","title":"Годовая бухгалтерская (финансовая) отчетность за 2017 год.","meta":"(Опубликовано 12.04.2018г.)","url":"https://slavbank.ru/wp-content/uploads/2021/03/report2017.pdf","opensInNewTab":true}]},"interimKickerTitle":{"type":"string","default":"ПРОМЕЖУТОЧНАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ,"},"interimSubTitle":{"type":"string","default":"ПОКАЗАТЕЛИ ДЕЯТЕЛЬНОСТИ БАНКА"},"interimGroups":{"type":"array","default":[{"id":"interim-group-1","title":"Промежуточная бухгалтерская (финансовая) отчетность за 2025 год","open":true,"documents":[{"id":"interim-1-doc-1","title":"Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2025 г.","meta":"(опубликовано 16.05.2025г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-publ-i-2025.pdf","opensInNewTab":true},{"id":"interim-1-doc-2","title":"Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2025 г.","meta":"(опубликовано 07.08.2025г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-publ-ii-2025.pdf","opensInNewTab":true},{"id":"interim-1-doc-3","title":"Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2025 г.","meta":"(опубликовано 12.11.2025г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-publ-9-2025.pdf","opensInNewTab":true}]},{"id":"interim-group-2","title":"Промежуточная бухгалтерская (финансовая) отчетность за 2024 год","open":false,"documents":[{"id":"interim-2-doc-1","title":"Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2024 г.","meta":"(опубликовано 16.05.2024г.)","url":"https://slavbank.ru/wp-content/uploads/otchet_publ-1-24-1.pdf","opensInNewTab":true},{"id":"interim-2-doc-2","title":"Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2024 г.","meta":"(опубликовано 09.08.2024г.)","url":"https://slavbank.ru/wp-content/uploads/na-sajt-otchet-2-2024-publ.pdf","opensInNewTab":true},{"id":"interim-2-doc-3","title":"Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2024 г.","meta":"(опубликовано 08.11.2024г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-publ-9-2024.pdf","opensInNewTab":true}]},{"id":"interim-group-3","title":"Промежуточная бухгалтерская (финансовая) отчетность за 2023 год","open":false,"documents":[{"id":"interim-3-doc-1","title":"Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2023 г.","meta":"(опубликовано 15.05.2023г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-i-2023-for-publ.pdf","opensInNewTab":true},{"id":"interim-3-doc-2","title":"Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2023 г.","meta":"(опубликовано 02.08.2023г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-6-2023-publ.pdf","opensInNewTab":true},{"id":"interim-3-doc-3","title":"Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2023 г.","meta":"(опубликовано 07.11.2023г.)","url":"https://slavbank.ru/wp-content/uploads/publ-otchet-9-2023.pdf","opensInNewTab":true}]},{"id":"interim-group-4","title":"Промежуточная бухгалтерская (финансовая) отчетность за 2022 год","open":false,"documents":[{"id":"interim-4-doc-1","title":"Показатели на 01.01.2022 г.","meta":"(дата размещения 18.01.2022г.)","url":"https://slavbank.ru/wp-content/uploads/pocaz_01012022.pdf","opensInNewTab":true},{"id":"interim-4-doc-2","title":"Показатели на 01.02.2022 г.","meta":"(дата размещения 09.02.2022г.)","url":"https://slavbank.ru/wp-content/uploads/pocaz_01022022.pdf","opensInNewTab":true}]},{"id":"interim-group-5","title":"Промежуточная бухгалтерская (финансовая) отчетность за 2021 год","open":false,"documents":[{"id":"interim-5-doc-1","title":"Предварительные показатели на 01.01.2021 г.","meta":"(дата размещения 18.01.2021)","url":"https://slavbank.ru/wp-content/uploads/pr_pokaz_01012021.xls","opensInNewTab":true},{"id":"interim-5-doc-2","title":"Показатели на 01.02.2021 г.","meta":"(дата размещения 17.02.2021)","url":"https://slavbank.ru/wp-content/uploads/pokaz_01022021.xls","opensInNewTab":true},{"id":"interim-5-doc-3","title":"Показатели на 01.03.2021 г.","meta":"(дата размещения 10.03.2021)","url":"https://slavbank.ru/wp-content/uploads/pokaz_01032021.xls","opensInNewTab":true},{"id":"interim-5-doc-4","title":"Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2021 г.","meta":"(опубликовано 12.05.2021г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-1-2021.pdf","opensInNewTab":true},{"id":"interim-5-doc-5","title":"Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2021 г.","meta":"(опубликовано 30.07.2021г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-2-2021.pdf","opensInNewTab":true},{"id":"interim-5-doc-6","title":"Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2021 г.","meta":"(опубликовано 10.11.2021г.)","url":"https://slavbank.ru/wp-content/uploads/otchet-3-2021.pdf","opensInNewTab":true}]},{"id":"interim-group-6","title":"Промежуточная бухгалтерская (финансовая) отчетность за 2020 год","open":false,"documents":[{"id":"interim-6-doc-1","title":"Предварительные показатели на 01.01.2020г.","meta":"(дата размещения 15.01.2020г.)","url":"https://slavbank.ru/wp-content/uploads/pr_pokaz_01012020.xls","opensInNewTab":true},{"id":"interim-6-doc-2","title":"Промежуточная бухгалтерская (финансовая) отчетность за I квартал 2020 года","meta":"(опубликовано 18.05.2020г.)","url":"https://slavbank.ru/wp-content/uploads/2021/03/otchet04-2020.pdf","opensInNewTab":true},{"id":"interim-6-doc-3","title":"Промежуточная бухгалтерская (финансовая) отчетность за I полугодие 2020 года","meta":"(опубликовано 29.07.2020г.)","url":"https://slavbank.ru/wp-content/uploads/2021/03/1h-2020.pdf","opensInNewTab":true},{"id":"interim-6-doc-4","title":"Промежуточная бухгалтерская (финансовая) отчетность за 9 месяцев 2020 г.","meta":"(опубликовано 28.10.2020г.)","url":"https://slavbank.ru/wp-content/uploads/2021/03/pbo9m2020.pdf","opensInNewTab":true}]}]},"ratesCardTitle":{"type":"string","default":"Курсы валют"},"ratesKicker":{"type":"string","default":"Данные на текущую дату"},"ratesLegend":{"type":"string","default":"Наличные"},"ratesMetaLegend":{"type":"string","default":"Покупка / Продажа"},"ratesBuyLabel":{"type":"string","default":"Покупка"},"ratesSellLabel":{"type":"string","default":"Продажа"},"currencyRates":{"type":"array","default":[{"id":"rate-1","code":"USD","buy":"89.40","sell":"92.30"},{"id":"rate-2","code":"EUR","buy":"96.80","sell":"99.90"}]},"ratesDisclaimer":{"type":"string","default":"Информация носит справочный характер."},"postsKicker":{"type":"string","default":"Полезная информация"},"postsTitle":{"type":"string","default":"Последние публикации"},"posts":{"type":"array","default":[{"id":"post-1","date":"05.04.2026","title":"Изменения в тарифах банка","url":"https://slavbank.ru/novosti/","opensInNewTab":false},{"id":"post-2","date":"01.04.2026","title":"Обновление раздела отчетности","url":"https://slavbank.ru/otchetnost/","opensInNewTab":false}]},"sectionsDrawerTitle":{"type":"string","default":"Разделы сайта"},"sectionsDrawerOpen":{"type":"boolean","default":true},"sectionsLinks":{"type":"array","default":[{"id":"drawer-1-link-1","label":"ИНФОРМАЦИЯ БАНКА","url":"https://slavbank.ru/informaciya-banka/","opensInNewTab":false},{"id":"drawer-1-link-2","label":"НОВОСТИ","url":"https://slavbank.ru/novosti/","opensInNewTab":false},{"id":"drawer-1-link-3","label":"ТАРИФЫ БАНКА","url":"https://slavbank.ru/tarify-banka/","opensInNewTab":false},{"id":"drawer-1-link-4","label":"ЮРИДИЧЕСКИМ ЛИЦАМ","url":"https://slavbank.ru/yuridicheskim-licam/","opensInNewTab":false},{"id":"drawer-1-link-5","label":"ПОДДЕРЖКА","url":"https://slavbank.ru/podderzhka/","opensInNewTab":false},{"id":"drawer-1-link-6","label":"КОНТАКТЫ","url":"https://slavbank.ru/kontakty/","opensInNewTab":false}]},"categoriesDrawerTitle":{"type":"string","default":"Рубрики"},"categoriesDrawerOpen":{"type":"boolean","default":true},"categoriesLinks":{"type":"array","default":[{"id":"drawer-2-link-1","label":"Новости","url":"https://slavbank.ru/novosti/","opensInNewTab":false},{"id":"drawer-2-link-2","label":"Полезная информация","url":"https://slavbank.ru/novosti/","opensInNewTab":false},{"id":"drawer-2-link-3","label":"АРХИВ","url":"https://slavbank.ru/category/arhiv","opensInNewTab":true}]}}}');

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
/******/ 			"blocks/page-reporting-bento/index": 0,
/******/ 			"blocks/page-reporting-bento/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/page-reporting-bento/style-index"], () => (__webpack_require__("./src/blocks/page-reporting-bento/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map