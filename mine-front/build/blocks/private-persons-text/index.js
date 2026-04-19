/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/private-persons-text/edit.js"
/*!*************************************************!*\
  !*** ./src/blocks/private-persons-text/edit.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const p = (content, attributes = {}) => ['core/paragraph', {
  content,
  ...attributes
}];
const heading = (content, attributes = {}) => ['core/heading', {
  content,
  level: 2,
  ...attributes
}];
const table = body => ['core/table', {
  body
}];
const TEXT_TEMPLATE = [p('&emsp;&emsp;<strong>Кредитование физических лиц осуществляется в индивидуальном порядке</strong>.', {
  className: 'has-text-align-justify has-dark-blue-color has-text-color'
}), p('&emsp;&emsp;<strong><em>Более подробную информацию Вы можете получить в</em></strong><br><strong><em>Управлении по кредитованию и инвестициям Банка по телефону:&nbsp; (8162) 66-52-56 или 66-52-63</em></strong>', {
  className: 'has-dark-blue-color has-text-color'
}), p('&emsp;&emsp;Банк имеет Базовую лицензию на осуществление банковских операций со средствами в рублях и иностранной валюте (без права привлечения во вклады денежных средств физических лиц) и на привлечение во вклады и размещение драгоценных металлов Банка России N 804 от 06.09.2018 г.<br>Банк не является участником системы страхования вкладов.<br><br>&emsp;&emsp;Протоколом расширенного заседания Правления АО НКБ «СЛАВЯНБАНК» от&nbsp;21 декабря 2021г. банк установил следующие процентные ставки:', {
  fontSize: 'normal'
}), heading('&emsp;<strong><span>по имеющимся вкладам:</span></strong>'), table([{
  cells: [{
    content: '&emsp;&emsp;Срочный вклад на 1 год'
  }, {
    content: '0,1&nbsp;% годовых'
  }]
}, {
  cells: [{
    content: '&emsp;&emsp;Льготный пенсионный вклад'
  }, {
    content: '0,1&nbsp;% годовых'
  }]
}, {
  cells: [{
    content: '&emsp;&emsp;Служебный вклад'
  }, {
    content: '0,1&nbsp;% годовых'
  }]
}, {
  cells: [{
    content: '&emsp;&emsp;Вклад до востребования'
  }, {
    content: '0,1 % годовых'
  }]
}]), p('&emsp;&emsp;<strong>Перечисленные процентные ставки действуют с 01&nbsp;января 2022 года.</strong>', {
  className: 'has-dark-blue-color has-text-color'
}), p('&emsp;&emsp;<strong>В АО НКБ «СЛАВЯНБАНК» Вы можете произвести:</strong>', {
  className: 'has-text-align-justify'
}), p('&emsp;&emsp;🗹 <strong>Перевод денежных средств: </strong>', {
  className: 'has-text-align-justify has-dark-blue-color has-text-color'
}), p('» без открытия счета, в валюте РФ на счет физического или юридического лица в любом банке России;<br>»<strong> </strong>в иностранной валюте в страны ближнего и дальнего зарубежья.', {
  className: 'has-text-align-justify'
}), p('» <strong><a href="https://slavbank.ru/wp-content/uploads/informacziya-po-perevodam-10-mr-2025-rubli.doc">Информация о переводах денежных средств по поручению клиентов-физических без открытия банковских счетов в валюте РФ &gt;&gt;&gt;</a></strong>'), p('» <strong><a href="https://slavbank.ru/wp-content/uploads/informacziya-po-perevodam-10-mr-2025-valyuta.doc">Информация о трансграничных переводах денежных средств по поручению клиентов-физических лиц без открытия банковских счетов в иностанной валюте &gt;&gt;&gt;</a></strong>'), p('» <strong><a href="https://slavbank.ru/wp-content/uploads/informacziya-o-transgranichnyh-perevodah_ang-prav.docx">Information on cross-border monetary funds transfers on behalf of individual clients&nbsp;without opening bank accounts</a></strong>'), p('&emsp;&emsp;🗹 <strong>Операции с наличной иностранной валютой</strong>:', {
  className: 'has-dark-blue-color has-text-color'
}), p('» покупка наличной иностранной валюты за наличную валюту РФ;<br>» продажа наличной иностранной валюты за наличную валюту РФ;<br>» экспертиза денежных знаков иностранных государств'), p('&emsp;&emsp;<strong>Прием коммунальных платежей с 01.06.2020 не производится</strong>!', {
  className: 'has-text-color'
}), p('&emsp;&emsp;Более подробную информацию по денежным переводам Вы можете получить:<br>» <em>по переводам в валюте РФ в Отделе по работе с вкладчиками и по тел.&nbsp; (8162) 66-52-74</em><br>» <em>по переводам в иностранной валюте — в Управлении валютных операций и контроля и по тел. (8162) 66-52-54</em>.', {
  className: 'has-dark-blue-color has-text-color',
  fontSize: 'normal'
})];
function Edit() {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: 'prose private-persons-text'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "entry-content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
        template: TEXT_TEMPLATE
      })
    })
  });
}

/***/ },

/***/ "./src/blocks/private-persons-text/index.js"
/*!**************************************************!*\
  !*** ./src/blocks/private-persons-text/index.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/private-persons-text/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/private-persons-text/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/private-persons-text/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/private-persons-text/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/private-persons-text/style.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/private-persons-text/save.js"
/*!*************************************************!*\
  !*** ./src/blocks/private-persons-text/save.js ***!
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
    className: 'prose'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "entry-content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
    })
  });
}

/***/ },

/***/ "./src/blocks/private-persons-text/editor.scss"
/*!*****************************************************!*\
  !*** ./src/blocks/private-persons-text/editor.scss ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/private-persons-text/style.scss"
/*!****************************************************!*\
  !*** ./src/blocks/private-persons-text/style.scss ***!
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

/***/ "./src/blocks/private-persons-text/block.json"
/*!****************************************************!*\
  !*** ./src/blocks/private-persons-text/block.json ***!
  \****************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"slav-bank/private-persons-text","title":"Частным лицам: текст","category":"Компоненты темы","icon":"editor-paragraph","description":"Текстовая часть страницы для частных лиц.","parent":["slav-bank/body-private-persons"],"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","supports":{"html":false,"anchor":true,"spacing":{"padding":true,"margin":true},"layout":true}}');

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
/******/ 			"blocks/private-persons-text/index": 0,
/******/ 			"blocks/private-persons-text/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/private-persons-text/style-index"], () => (__webpack_require__("./src/blocks/private-persons-text/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map