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
/* harmony export */   createFRef: () => (/* binding */ createFRef),
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const TEMPLATE = [['slav-bank/bento-shell-sidebar', {}]];
const normalizeFaqRefs = (faqRef, index) => ({
  id: faqRef?.id || `fRef-${index}`,
  title: faqRef?.text || '',
  urlTitle: faqRef?.text || '',
  url: faqRef?.url || '',
  linkMode: !!faqRef?.linkMode,
  pageId: Number(faqRef?.pageId) || 0
});
const createFRef = () => ({
  id: `fRef-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Заголовок...', 'acme-blocks'),
  url: '',
  opensInNewTab: false,
  linkMode: false,
  pageId: 0
});
function Edit({
  attributes,
  setAttributes
}) {
  const [addMenuAnchor, setAddMenuAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    title,
    titleFaqRefs,
    faqRefs
  } = attributes;
  const safeFRefs = Array.isArray(faqRefs) ? faqRefs.map(normalizeFaqRefs) : [];
  const updateFRefs = nextBadges => {
    setAttributes({
      pillItems: nextBadges
    });
  };
  const updateFRef = (fRefId, patch) => {
    updateFRefs(safeFRefs.map(fRef => fRef.id === fRefId ? {
      ...fRef,
      ...patch
    } : fRef));
  };
  const addFRef = () => {
    updateFRefs([...safeFRefs, createFRef()]);
    setAddMenuAnchor(null);
  };
  const removeFRefs = fRefId => {
    updateFRefs(safeFRefs.filter(fRef => fRef.id !== fRefId));
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: 'theme-shell'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section", {
      ...blockProps,
      className: "block dashv2",
      id: "content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "bento",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "bento-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                style: {
                  padding: 'var(--s-4)',
                  position: 'relative'
                },
                tagName: "strong",
                value: title,
                onChange: value => setAttributes({
                  title: value
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
              className: "kicker",
              tagName: "div",
              value: titleFaqRefs,
              onChange: value => setAttributes({
                titleFaqRefs: value
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "tiles",
              children: [faqRefs.length > 0 && faqRefs.map(fRef => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                className: "tile",
                href: fRef.url,
                target: "_blank",
                rel: "noopener",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                  tagName: "div",
                  className: "tile-title",
                  value: fRef.title,
                  onChange: value => updateFRef(fRef.id, {
                    title: value
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                  tagName: "div",
                  className: "muted",
                  style: {
                    marginTop: '6px'
                  },
                  value: fRef.urlTitle,
                  onChange: value => updateFRef(fRef.id, {
                    urlTitle: value
                  })
                })]
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                className: "tile",
                href: " esc_url(sb_alpha_url('faq'))",
                target: "_blank",
                rel: "noopener",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "tile-title",
                  children: "\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "muted",
                  style: {
                    marginTop: '6px'
                  },
                  children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B \u2192"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                className: "tile",
                href: "ecp-regeneration.html",
                target: "_blank",
                rel: "noopener",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "tile-title",
                  children: "\u041F\u0435\u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u042D\u0426\u041F"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "muted",
                  style: {
                    marginTop: '6px'
                  },
                  children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B \u2192"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                className: "tile",
                href: "esc_url(sb_alpha_url('security'))",
                target: "_blank",
                rel: "noopener",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "tile-title",
                  children: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "muted",
                  style: {
                    marginTop: '6px'
                  },
                  children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B \u2192"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "kicker",
              style: {
                marginTop: '12px'
              },
              children: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "doc-shelf",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                className: "doc-card",
                href: "https://slavbank.ru/wp-content/uploads/internet-klient.-rukovodstvo-polzovatelya.pdf",
                target: "_blank",
                rel: "noopener",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "doc-ext",
                  children: "PDF"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "doc-title",
                  children: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0437\u0434\u0435\u0441\u044C >>"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "doc-arrow",
                  children: "\u2192"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "prose",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "entry-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h3", {
                  children: ["\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u043C, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C \u043D\u0438\u0436\u0435:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {})]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h4", {
                  className: "kicker doc-card",
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start'
                  },
                  children: ["\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                    style: {
                      fontStyle: 'italic'
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                      className: "fine",
                      style: {
                        fontSize: '14px'
                      },
                      children: ["(8162) 66-51-95,", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "66-52-47,", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "+7921-690-17-00"]
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                  className: "kicker doc-card ",
                  "data-title": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                    children: ["\u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "fine",
                      style: {
                        fontSize: '14px'
                      },
                      children: "\u0441 8.30 \u0434\u043E 17.30 (\u043F\u0442. \u2013 \u0434\u043E 16.30), \u043E\u0431\u0435\u0434 \u0441 13.00 \u0434\u043E 14.00, (\u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439 \u0441\u0443\u0431., \u0432\u0441\u043A.)"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h3", {
                  children: ["\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430:\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                    href: "mailto:nkb@slavbank.ru",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("em", {
                      "data-rich-text-format-boundary": "true",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                        children: "nkb@slavbank.ru"
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                    children: "\xA0 \xA0 \xA0 \xA0 \xA0\u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u043F\u043E\u043B\u0435\u0437\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438, \u0441\u0441\u044B\u043B\u043A\u0438 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438 \u0431\u0430\u043D\u043A\u0430."
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                    children: ["\xA0 \xA0 \xA0 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                      children: [">> ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                        href: "esc_url(sb_alpha_url('faq'))",
                        children: "\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"
                      }), "\xA0"]
                    }), "\u2014 \u043E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0449\u0438\u0435 \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A (\u0434\u0430\u043D\u043D\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0441\u0430\u0439\u0442\u0430 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044F).\xA0"]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "\xA0 \xA0 \xA0 >> \u0412\u0445\u043E\u0434 \u0432 \u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A \xA0"
                    }), "\u2014 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      href: "https://dbo.slavbank.ru:20101/",
                      children: "https://dbo.slavbank.ru:20101 "
                    }), " (\u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043F\u043B\u0430\u0433\u0438\u043D\u0430).", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "\xA0 \xA0 \xA0 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                      children: ["\u0421\u0438\u0441\u0442\u0435\u043C\u0430\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "emphasis",
                        children: "\xAB\u0414\u0411\u041E BS-Client x64\xBB"
                      })]
                    }), " \u2013 \u044D\u0442\u043E \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u0438 \u0443\u0434\u043E\u0431\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0431\u0430\u043D\u043A\u0438\u043D\u0433\u0430, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0430\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u0411\u0430\u043D\u043A\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0435 \u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E-\u0440\u0430\u0441\u0447\u0435\u0442\u043D\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0432 \u0411\u0430\u043D\u043A\u0435 \u0431\u0435\u0437 \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430 \u0438 \u0441\u0435\u0442\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442.\xA0"]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "\xA0 \xA0 \xA0 \xA0 >> \u0420\u0435\u0437\u0435\u0440\u0432\u043D\u044B\u0439 \u0432\u0445\u043E\u0434 \u0432 \u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A \u2014"
                    }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      href: "https://dbo1.slavbank.ru:20101/",
                      children: "https://dbo1.slavbank.ru:20101"
                    }), "\xA0\u2014 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u0432 \u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A \u0432 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438\xA0 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "\u0432\u0445\u043E\u0434 \u0432 \u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A"
                    }), " \u043F\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0435 \xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "\u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D"
                    }), ".\xA0 \u0414\u0430\u043D\u043D\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "\u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0431\u0430\u043D\u043A\u0430"
                    }), " \u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0435 \u043D\u0430 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u044B\u0439 \u0432\u0445\u043E\u0434"
                    }), ", \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0432 \u0432 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u0411\u0430\u043D\u043A\u0430."]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: " \xA0 \xA0 \xA0 \xA0 >> \u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \xAB\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u041A\u043B\u0438\u0435\u043D\u0442\xBB"
                    }), "\u2014\xA0 \u043F\u043E\u043B\u043D\u0430\u044F \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \xAB\u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A\xBB. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      href: "https://slavbank.ru/wp-content/uploads/internet-klient.-rukovodstvo-polzovatelya.pdf",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        children: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0437\u0434\u0435\u0441\u044C >>"
                      })
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                    children: ["\xA0 \xA0 \xA0 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: ">> "
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                      href: "ecp-regeneration.html",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        children: "\u041F\u0435\u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u042D\u0426\u041F"
                      }), " "]
                    }), "\u2013 \u043F\u0440\u043E\u0434\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0432 \u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A. \u0417\u0434\u0435\u0441\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u043F\u043E\u0448\u0430\u0433\u043E\u0432\u0430\u044F \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u043E \u043F\u0435\u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u042D\u0426\u041F.\xA0"]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                    children: ["\xA0 \xA0 \xA0 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                      children: [">> ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                        href: "https://www.ammyy.com/ru/",
                        children: "\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"
                      })]
                    }), " \u2013 \u0437\u0434\u0435\u0441\u044C \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "Ammyy Admin"
                    }), " \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 (\u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "https://www.ammyy.com/ru"
                    }), "/, \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435\xA0 \u0444\u0430\u0439\u043B\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      children: "AA_v3.exe"
                    }), ")"]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("strong", {
                    children: ["\xA0 \xA0 \xA0 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                      children: [">> ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                        href: "esc_url(sb_alpha_url('security'))",
                        children: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438\xA0"
                      })]
                    }), "\u2014 \u043E\u0431\u0440\u0430\u0449\u0430\u0435\u043C \u0412\u0430\u0448\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0434\u043E\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0438\u043C\u0435\u043D\u0438 \u0441\u0430\u0439\u0442\u0430\xA0\u2014", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      href: "esc_url(sb_alpha_url('home'))",
                      children: "href=\"echo esc_url(sb_alpha_url('home'))\""
                    }), "\xA0\u0438\u043B\u0438 \xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      href: "https://dbo.slavbank.ru:20101/",
                      children: "dbo.slavbank.ru"
                    }), "."]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {})]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
            template: TEMPLATE
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "toast",
      role: "status",
      "aria-live": "polite",
      "aria-atomic": "true",
      hidden: true,
      children: "\u0413\u043E\u0442\u043E\u0432\u043E"
    })]
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


function save({
  attributes
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: 'theme-shell'
  });
  const {
    title,
    titleFaqRefs
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
      ...blockProps,
      className: "block dashv2",
      id: "content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "bento",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "bento-card",
            style: {
              padding: 'var(--s-4)',
              position: 'relative'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                style: {
                  padding: 'var(--s-4)',
                  position: 'relative'
                },
                tagName: "strong",
                value: title
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              className: "kicker",
              tagName: "div",
              value: titleFaqRefs
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "tiles",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                className: "tile",
                href: "esc_url(sb_alpha_url('faq'))",
                target: "_blank",
                rel: "noopener",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "tile-title",
                  children: "\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "muted",
                  style: {
                    marginTop: '6px'
                  },
                  children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B \u2192"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                className: "tile",
                href: "ecp-regeneration.html",
                target: "_blank",
                rel: "noopener",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "tile-title",
                  children: "\u041F\u0435\u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u042D\u0426\u041F"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "muted",
                  style: {
                    marginTop: '6px'
                  },
                  children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B \u2192"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                className: "tile",
                href: "esc_url(sb_alpha_url('security'))",
                target: "_blank",
                rel: "noopener",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "tile-title",
                  children: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "muted",
                  style: {
                    marginTop: '6px'
                  },
                  children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B \u2192"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "kicker",
              style: {
                marginTop: '12px'
              },
              children: "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "doc-shelf",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                className: "doc-card",
                href: "https://slavbank.ru/wp-content/uploads/internet-klient.-rukovodstvo-polzovatelya.pdf",
                target: "_blank",
                rel: "noopener",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "doc-ext",
                  children: "PDF"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "doc-title",
                  children: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0437\u0434\u0435\u0441\u044C >>"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "doc-arrow",
                  children: "\u2192"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "prose",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "entry-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h3", {
                  children: ["\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u043C, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C \u043D\u0438\u0436\u0435:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {})]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h4", {
                  className: "kicker doc-card",
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start'
                  },
                  children: ["\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
                    style: {
                      fontStyle: 'italic'
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                      className: "fine",
                      style: {
                        fontSize: '14px'
                      },
                      children: ["(8162) 66-51-95,", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "66-52-47,", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "+7921-690-17-00"]
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
                  className: "kicker doc-card",
                  "data-title": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("strong", {
                    children: ["\u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "fine",
                      style: {
                        fontSize: '14px'
                      },
                      children: "\u0441 8.30 \u0434\u043E 17.30 (\u043F\u0442. \u2013 \u0434\u043E 16.30), \u043E\u0431\u0435\u0434 \u0441 13.00 \u0434\u043E 14.00, (\u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439 \u0441\u0443\u0431., \u0432\u0441\u043A.)"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h3", {
                  children: ["\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430:\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                    href: "mailto:nkb@slavbank.ru",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em", {
                      "data-rich-text-format-boundary": "true",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
                        children: "nkb@slavbank.ru"
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("strong", {
                    children: "\xA0 \xA0 \xA0 \xA0 \xA0\u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u043F\u043E\u043B\u0435\u0437\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438, \u0441\u0441\u044B\u043B\u043A\u0438 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438 \u0431\u0430\u043D\u043A\u0430."
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("strong", {
                    children: ["\xA0 \xA0 \xA0 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: ">> "
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                      href: "esc_url(sb_alpha_url('faq'))",
                      children: "\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"
                    }), "\xA0 \u2014 \u043E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0449\u0438\u0435 \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A (\u0434\u0430\u043D\u043D\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B \u0441\u0430\u0439\u0442\u0430 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044F).\xA0"]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("strong", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: "\xA0 \xA0 \xA0 >> \u0412\u0445\u043E\u0434 \u0432 \u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A \xA0"
                    }), "\u2014", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                      href: "https://dbo.slavbank.ru:20101/",
                      children: "https://dbo.slavbank.ru:20101"
                    }), ' ', "(\u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043F\u043B\u0430\u0433\u0438\u043D\u0430).", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\xA0 \xA0 \xA0 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430\xA0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "emphasis",
                      children: "\xAB\u0414\u0411\u041E BS-Client x64\xBB"
                    }), ' ', "\u2013 \u044D\u0442\u043E \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u0438 \u0443\u0434\u043E\u0431\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0431\u0430\u043D\u043A\u0438\u043D\u0433\u0430, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0430\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u0411\u0430\u043D\u043A\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0435 \u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E-\u0440\u0430\u0441\u0447\u0435\u0442\u043D\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0432 \u0411\u0430\u043D\u043A\u0435 \u0431\u0435\u0437 \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430 \u0438 \u0441\u0435\u0442\u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442.\xA0"]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("strong", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: "\xA0 \xA0 \xA0 \xA0 >> \u0420\u0435\u0437\u0435\u0440\u0432\u043D\u044B\u0439 \u0432\u0445\u043E\u0434 \u0432 \u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A \u2014"
                    }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                      href: "https://dbo1.slavbank.ru:20101/",
                      children: "https://dbo1.slavbank.ru:20101"
                    }), "\xA0\u2014 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u0432 \u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A \u0432 \u0441\u043B\u0443\u0447\u0430\u0435, \u0435\u0441\u043B\u0438\xA0 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: "\u0432\u0445\u043E\u0434 \u0432 \u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A"
                    }), ' ', "\u043F\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0435 \xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: "\u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D"
                    }), ". \xA0 \u0414\u0430\u043D\u043D\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u043E\u0439 \u043C\u043E\u0436\u043D\u043E \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: "\u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0431\u0430\u043D\u043A\u0430"
                    }), " \u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0435 \u043D\u0430 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: "\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u044B\u0439 \u0432\u0445\u043E\u0434"
                    }), ", \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0432 \u0432 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443 \u0411\u0430\u043D\u043A\u0430."]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("strong", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: "\xA0 \xA0 \xA0 \xA0 >> \u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \xAB\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u041A\u043B\u0438\u0435\u043D\u0442\xBB"
                    }), "\u2014\xA0 \u043F\u043E\u043B\u043D\u0430\u044F \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \xAB\u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A\xBB.", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                      href: "https://slavbank.ru/wp-content/uploads/internet-klient.-rukovodstvo-polzovatelya.pdf",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                        children: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0437\u0434\u0435\u0441\u044C >>"
                      })
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("strong", {
                    children: ["\xA0 \xA0 \xA0 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: ">> "
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                      href: "ecp-regeneration.html",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                        children: "\u041F\u0435\u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u042D\u0426\u041F"
                      })
                    }), ' ', "\u2013 \u043F\u0440\u043E\u0434\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0432 \u041A\u043B\u0438\u0435\u043D\u0442-\u0411\u0430\u043D\u043A. \u0417\u0434\u0435\u0441\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u043F\u043E\u0448\u0430\u0433\u043E\u0432\u0430\u044F \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u043E \u043F\u0435\u0440\u0435\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u042D\u0426\u041F.\xA0"]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("strong", {
                    children: ["\xA0 \xA0 \xA0 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: ">> "
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                      href: "https://www.ammyy.com/ru/",
                      children: "\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"
                    }), ' ', "\u2013 \u0437\u0434\u0435\u0441\u044C \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: "Ammyy Admin"
                    }), " \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 (\u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: "https://www.ammyy.com/ru"
                    }), "/, \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435\xA0 \u0444\u0430\u0439\u043B\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: "AA_v3.exe"
                    }), ")"]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("strong", {
                    children: ["\xA0 \xA0 \xA0 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      children: ">> "
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                      href: "esc_url(sb_alpha_url('security'))",
                      children: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438\xA0"
                    }), "\u2014 \u043E\u0431\u0440\u0430\u0449\u0430\u0435\u043C \u0412\u0430\u0448\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0434\u043E\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0438\u043C\u0435\u043D\u0438 \u0441\u0430\u0439\u0442\u0430\xA0\u2014", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                      href: "esc_url(sb_alpha_url('home'))",
                      children: "href=\"echo esc_url(sb_alpha_url('home'))\""
                    }), "\xA0\u0438\u043B\u0438 \xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                      href: "https://dbo.slavbank.ru:20101/",
                      children: "dbo.slavbank.ru"
                    }), "."]
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "toast",
      role: "status",
      "aria-live": "polite",
      "aria-atomic": "true",
      hidden: true,
      children: "\u0413\u043E\u0442\u043E\u0432\u043E"
    })]
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

/***/ "@wordpress/core-data"
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["coreData"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

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