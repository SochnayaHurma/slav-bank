/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/page-support-body/edit.js"
/*!**********************************************!*\
  !*** ./src/blocks/page-support-body/edit.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const SUPPORT_PROSE_ITEMS = [{
  id: 'faq',
  content: '&nbsp; &nbsp; &nbsp; &gt;&gt; <a href="/podderzhka-html/chasto-zadavaemye-voprosy.html/">Часто задаваемые вопросы</a>&nbsp; — ответы на вопросы, возникающие при работе в системе Клиент-Банк (данный раздел сайта постоянно обновляется и редактируется).&nbsp;'
}, {
  id: 'client-bank-login',
  content: '&nbsp; &nbsp; &nbsp; &gt;&gt; Вход в Клиент-Банк &nbsp;— <a href="https://dbo.slavbank.ru:20101/">https://dbo.slavbank.ru:20101</a> (для доступа возможно потребуется установка плагина).<br>&nbsp; &nbsp; &nbsp; Система&nbsp;«ДБО BS-Client x64» – это современная и удобная система интернет-банкинга, позволяющая клиентам Банка осуществлять полноценное информационное и платежно-расчетное обслуживание в Банке без личного присутствия с использованием персонального компьютера и сети Интернет.&nbsp;'
}, {
  id: 'client-bank-backup-login',
  content: '&nbsp; &nbsp; &nbsp; &nbsp; &gt;&gt; Резервный вход в Клиент-Банк — <a href="https://dbo1.slavbank.ru:20101/">https://dbo1.slavbank.ru:20101</a>&nbsp;— необходим для входа в Клиент-Банк в случае, если&nbsp; вход в Клиент-Банк по обычной ссылке &nbsp;недоступен.&nbsp; Данной ссылкой можно воспользоваться только после подтверждения банка о переходе на Резервный вход, позвонив в техническую поддержку Банка.'
}, {
  id: 'user-guide',
  content: '&nbsp; &nbsp; &nbsp; &nbsp; &gt;&gt; Руководство пользователя «Интернет-Клиент» —&nbsp; полная подробная инструкция по работе в системе «Клиент-Банк». <a href="https://slavbank.ru/wp-content/uploads/internet-klient.-rukovodstvo-polzovatelya.pdf">Скачать здесь &gt;&gt;</a>'
}, {
  id: 'ecp-regeneration',
  content: '&nbsp; &nbsp; &nbsp; &gt;&gt; <a href="/podderzhka-html/regen.html/">Перегенерация ЭЦП</a> – продление прав доступа в Клиент-Банк. Здесь представлена подробная пошаговая инструкция по перегенерации ЭЦП.&nbsp;'
}, {
  id: 'remote-support',
  content: '&nbsp; &nbsp; &nbsp; &gt;&gt; <a href="https://www.ammyy.com/ru/">Удаленное управление</a> – здесь вы сможете скачать последнюю версию программы Ammyy Admin удаленного доступа (адрес сайта https://www.ammyy.com/ru/, наименование&nbsp; файла программы AA_v3.exe)'
}, {
  id: 'security',
  content: '&nbsp; &nbsp; &nbsp; &gt;&gt; <a href="/podderzhka-html/recom_bezopasnost.html/">Рекомендации по безопасности&nbsp;</a>— обращаем Ваше внимание на соответствие доменного имени сайта&nbsp;— <a href="/">slavbank.ru</a>&nbsp;или &nbsp;<a href="https://dbo.slavbank.ru:20101/">dbo.slavbank.ru</a>.'
}];
const TEMPLATE = [['slav-bank/title', {
  title: 'Данный раздел создан для поддержки клиентов АО НКБ «СЛАВЯНБАНК».',
  level: '2'
}], ['slav-bank/kicker', {
  text: 'Популярные темы'
}], ['slav-bank/tile-container', {
  tiles: [{
    title: 'Часто задаваемые вопросы',
    urlTitle: 'Открыть раздел →',
    url: ''
  }, {
    title: 'Перегенерация ЭЦП',
    urlTitle: 'Открыть раздел →',
    url: ''
  }, {
    title: 'Рекомендации по безопасности',
    urlTitle: 'Открыть раздел →',
    url: ''
  }]
}], ['slav-bank/kicker', {
  text: 'Документы'
}], ['slav-bank/tile-file-container', {}], ['slav-bank/title', {
  title: 'В случае возникновения вопросов вы можете связаться с\nнами по телефонам, указанным ниже:',
  level: '3'
}], ['slav-bank/simple-card', {
  title: 'Телефоны технической поддержки:',
  description: '(8162) 66-51-95,\n66-52-47,\n+7921-690-17-00'
}], ['slav-bank/one-row-card', {
  title: 'Режим работы:',
  description: 'с 8.30 до 17.30 (пт. – до 16.30), обед с 13.00 до 14.00, (выходной суб., вск.)'
}], ['slav-bank/title-ref', {
  title: 'Электронная почта:&nbsp;',
  description: 'nkb@slavbank.ru',
  url: 'mailto:nkb@slavbank.ru'
}], ['slav-bank/support-prose', {
  heading: '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Здесь вы найдете полезную информацию, инструкции, ссылки для работы с системами банка.',
  items: SUPPORT_PROSE_ITEMS
}]];
function Edit() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "bento-card",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
      template: TEMPLATE,
      templateLock: "all"
    })
  });
}

/***/ },

/***/ "./src/blocks/page-support-body/index.js"
/*!***********************************************!*\
  !*** ./src/blocks/page-support-body/index.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/page-support-body/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/page-support-body/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/page-support-body/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/page-support-body/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/page-support-body/style.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/page-support-body/save.js"
/*!**********************************************!*\
  !*** ./src/blocks/page-support-body/save.js ***!
  \**********************************************/
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "bento-card",
    style: {
      padding: 'var(--s-4)',
      position: 'relative'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
}

/***/ },

/***/ "./src/blocks/page-support-body/editor.scss"
/*!**************************************************!*\
  !*** ./src/blocks/page-support-body/editor.scss ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/page-support-body/style.scss"
/*!*************************************************!*\
  !*** ./src/blocks/page-support-body/style.scss ***!
  \*************************************************/
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

/***/ "./src/blocks/page-support-body/block.json"
/*!*************************************************!*\
  !*** ./src/blocks/page-support-body/block.json ***!
  \*************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"slav-bank/body-support","title":"Поддержка","category":"Наполнение","icon":"screenoptions","description":"Секция с заранее заданными контейнерами и наполнением.","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","attributes":{"title":{"type":"string","default":"Данный раздел создан для поддержки клиентов АО НКБ «СЛАВЯНБАНК»."},"titleFaqRefs":{"type":"string","default":"Популяярные темы"},"faqRefs":{"type":"array","default":[{"title":"Часто задаваемые вопросы","urlTitle":"Открыть раздел →","url":""},{"title":"Перегенерация ЭЦП","urlTitle":"Открыть раздел →","url":""},{"title":"Рекомендации по безопасности","urlTitle":"Открыть раздел →","url":""}]},"titleDocRefs":{"type":"string","default":"Документы"},"docRefs":{"type":"array","default":[{"title":"Скачать здесь >>","format":"PDF","symbol":"→"}]},"titleContacts":{"type":"string","default":"В случае возникновения вопросов вы можете связаться с нами по телефонам, указанным ниже:"},"numberBlock":{"type":"array","default":[{"title":"Телефоны технической поддержки:","description":"(8162) 66-51-95,\\n66-52-47,\\n+7921-690-17-00"}]},"workingHours":{"type":"array","default":[{"title":"Режим работы:","description":"с 8.30 до 17.30 (пт. – до 16.30), обед с 13.00 до 14.00, (выходной суб., вск.)"}]},"infoTitle":{"type":"string","default":""},"infoBlock":{"type":"string","default":""}},"supports":{"html":false,"anchor":true,"spacing":{"padding":true,"margin":true},"layout":true}}');

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
/******/ 			"blocks/page-support-body/index": 0,
/******/ 			"blocks/page-support-body/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/page-support-body/style-index"], () => (__webpack_require__("./src/blocks/page-support-body/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map