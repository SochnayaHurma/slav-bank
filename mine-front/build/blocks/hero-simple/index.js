/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/hero-simple/edit.js"
/*!****************************************!*\
  !*** ./src/blocks/hero-simple/edit.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAction: () => (/* binding */ createAction),
/* harmony export */   createBadge: () => (/* binding */ createBadge),
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const createBadge = () => ({
  id: `badge-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Новый badge', 'acme-blocks'),
  url: '',
  opensInNewTab: false,
  linkMode: false,
  pageId: 0
});
const createAction = (variant = 'primary') => ({
  id: `action-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Новая кнопка', 'acme-blocks'),
  url: '',
  opensInNewTab: false,
  linkMode: true,
  pageId: 0,
  variant
});
const normalizeBadge = (badge, index) => ({
  id: badge?.id || `badge-${index}`,
  text: badge?.text || '',
  url: badge?.url || '',
  linkMode: !!badge?.linkMode,
  pageId: Number(badge?.pageId) || 0,
  opensInNewTab: !!badge?.opensInNewTab
});
const normalizeAction = (action, index) => ({
  id: action?.id || `action-${index}`,
  text: action?.text || '',
  url: action?.url || '',
  linkMode: !!action?.linkMode,
  opensInNewTab: !!action?.opensInNewTab,
  variant: action?.variant || (index === 0 ? 'primary' : 'secondary'),
  pageId: Number(action?.pageId) || 0
});
function Edit({
  attributes,
  setAttributes,
  isSelected
}) {
  const {
    title,
    description,
    kicker,
    pillItems = [],
    actions = []
  } = attributes;
  const [addMenuAnchor, setAddMenuAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const safeBadges = Array.isArray(pillItems) ? pillItems.map(normalizeBadge) : [];
  const safeActions = Array.isArray(actions) ? actions.map(normalizeAction) : [];
  const pages = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getEntityRecords('postType', 'page', {
    per_page: 100,
    orderby: 'title',
    order: 'asc',
    _fields: 'id,title,link'
  }), []);
  const pagesById = Object.fromEntries((pages || []).map(page => [page.id, page]));
  const updateBadges = nextBadges => {
    setAttributes({
      pillItems: nextBadges
    });
  };
  const updateBadge = (badgeId, patch) => {
    updateBadges(safeBadges.map(badge => badge.id === badgeId ? {
      ...badge,
      ...patch
    } : badge));
  };
  const addBadge = () => {
    updateBadges([...safeBadges, createBadge()]);
    setAddMenuAnchor(null);
  };
  const removeBadge = badgeId => {
    updateBadges(safeBadges.filter(badge => badge.id !== badgeId));
  };
  const updateActions = nextActions => {
    setAttributes({
      actions: nextActions
    });
  };
  const updateAction = (actionId, patch) => {
    updateActions(safeActions.map(action => action.id === actionId ? {
      ...action,
      ...patch
    } : action));
  };
  const addAction = () => {
    const variant = safeActions.length === 0 ? 'primary' : 'secondary';
    updateActions([...safeActions, createAction(variant)]);
    setAddMenuAnchor(null);
  };
  const removeAction = actionId => {
    updateActions(safeActions.filter(action => action.id !== actionId));
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: 'theme-shell block'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToolbarButton, {
          icon: "plus-alt2",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Добавить элемент', 'acme-blocks'),
          onClick: event => setAddMenuAnchor(event.currentTarget)
        })
      })
    }), isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, {
      group: "settings",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Добавление элементов', 'acme-blocks'),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "acme-card5-sidebar-actions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            variant: "primary",
            onClick: addBadge,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Добавить бадж', 'acme-blocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            variant: "secondary",
            onClick: addAction,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Добавить кнопку', 'acme-blocks')
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Badge-ссылки', 'acme-blocks'),
        initialOpen: false,
        children: [safeBadges.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "acme-card5-sidebar-empty",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Badge пока нет.', 'acme-blocks')
        }), safeBadges.map((badge, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "acme-card5-sidebar-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "acme-card5-sidebar-item__meta",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Badge %d', 'acme-blocks'), index + 1)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: badge.text || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Без текста', 'acme-blocks')
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
            label: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430",
            checked: badge.linkMode,
            onChange: value => updateBadge(badge.id, {
              linkMode: value
            })
          }), !badge.linkMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.LinkControl, {
            value: {
              url: badge.url,
              opensInNewTab: badge.opensInNewTab
            },
            onChange: value => updateBadge(badge.id, {
              url: value?.url || '',
              opensInNewTab: !!value?.opensInNewTab
            })
          }), badge.linkMode && (!pages ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Spinner, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
            label: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
            value: String(badge.pageId || 0),
            options: [{
              label: 'Выберите страницу',
              value: '0'
            }, ...(pages || []).map(page => ({
              label: page?.title?.rendered || `(ID: ${page.id})`,
              value: String(page.id)
            }))],
            onChange: value => {
              const nextPageId = Number(value);
              const selectedPage = pagesById[nextPageId];
              updateBadge(badge.id, {
                pageId: nextPageId,
                url: selectedPage?.link || ''
              });
            }
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            variant: "secondary",
            isDestructive: true,
            onClick: () => removeBadge(badge.id),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Удалить badge', 'acme-blocks')
          })]
        }, badge.id))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Action buttons', 'acme-blocks'),
        initialOpen: false,
        children: [safeActions.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "acme-card5-sidebar-empty",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Кнопок пока нет.', 'acme-blocks')
        }), safeActions.map((action, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "acme-card5-sidebar-item acme-card5-sidebar-item--stack",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "acme-card5-sidebar-item__meta",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Кнопка %d', 'acme-blocks'), index + 1)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: action.text || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Без текста', 'acme-blocks')
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Стиль', 'acme-blocks'),
            value: action.variant,
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Primary', 'acme-blocks'),
              value: 'primary'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Outline', 'acme-blocks'),
              value: 'outline'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Soft', 'acme-blocks'),
              value: 'soft'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Glass', 'acme-blocks'),
              value: 'glass'
            }],
            onChange: value => updateAction(action.id, {
              variant: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.LinkControl, {
            value: {
              url: action.url,
              opensInNewTab: action.opensInNewTab
            },
            onChange: value => updateAction(action.id, {
              url: value?.url || '',
              opensInNewTab: !!value?.opensInNewTab
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
            variant: "secondary",
            isDestructive: true,
            onClick: () => removeAction(action.id),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Удалить кнопку', 'acme-blocks')
          })]
        }, action.id))]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
      className: "block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "hero-wrap",
          style: {
            padding: 'var(--s-5)'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "row",
            style: {
              alignItems: 'flex-start',
              gap: 'var(--s-4)',
              flexWrap: 'wrap'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
              className: "acme-card5__quick-add",
              icon: "plus-alt2",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Добавить элемент', 'acme-blocks'),
              showTooltip: true,
              onClick: event => setAddMenuAnchor(event.currentTarget)
            }), addMenuAnchor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Popover, {
              anchor: addMenuAnchor,
              onClose: () => setAddMenuAnchor(null),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "acme-card5__add-menu",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
                  variant: "primary",
                  onClick: addBadge,
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Добавить бадж', 'acme-blocks')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
                  variant: "secondary",
                  onClick: addAction,
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Добавить кнопку', 'acme-blocks')
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              style: {
                minWidth: '280px',
                flex: '1 1 520px'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
                className: "kicker",
                value: kicker,
                tagName: "div",
                onChange: value => setAttributes({
                  kicker: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
                value: title,
                style: {
                  margin: '8px 0 10px'
                },
                tagName: "h1",
                onChange: value => setAttributes({
                  title: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
                className: "muted",
                style: {
                  maxWidth: '78ch'
                },
                value: description,
                tagName: "p",
                onChange: value => setAttributes({
                  description: value
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "row",
                style: {
                  marginTop: 'var(--s-4)',
                  flexWrap: 'wrap'
                },
                children: safeActions.length > 0 && safeActions.map(action => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
                  tagName: "a",
                  className: `btn ${action.variant || 'primary'}`,
                  href: action.url || '',
                  value: action.text,
                  onChange: value => updateAction(action.id, {
                    text: value
                  })
                }, action.id))
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "pill",
              style: {
                alignSelf: 'flex-start'
              },
              children: safeBadges.length > 0 && safeBadges.map(badge => {
                const badgeHref = badge.linkMode ? pagesById[badge.pageId]?.link || '' : badge.url;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
                  tagName: "a",
                  className: "mono badge",
                  href: badgeHref,
                  value: badge.text,
                  onChange: value => updateBadge(badge.id, {
                    text: value
                  })
                }, badge.id);
              })
            })]
          })
        })
      })
    })]
  });
}

/***/ },

/***/ "./src/blocks/hero-simple/index.js"
/*!*****************************************!*\
  !*** ./src/blocks/hero-simple/index.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/hero-simple/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/hero-simple/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/hero-simple/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/hero-simple/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/hero-simple/style.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/hero-simple/save.js"
/*!****************************************!*\
  !*** ./src/blocks/hero-simple/save.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const normalizeBadge = (badge, index) => ({
  id: badge?.id || `badge-${index}`,
  text: badge?.text || '',
  url: badge?.url || '',
  linkMode: !!badge?.linkMode,
  pageId: Number(badge?.pageId) || 0,
  opensInNewTab: !!badge?.opensInNewTab
});
const normalizeAction = (action, index) => ({
  id: action?.id || `action-${index}`,
  text: action?.text || '',
  url: action?.url || '',
  linkMode: !!action?.linkMode,
  opensInNewTab: !!action?.opensInNewTab,
  variant: action?.variant || (index === 0 ? 'primary' : 'secondary'),
  pageId: Number(action?.pageId) || 0
});
function save({
  attributes
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: 'theme-shell block'
  });
  const {
    title,
    description,
    kicker,
    pillItems = [],
    actions = []
  } = attributes;
  const safeBadges = Array.isArray(pillItems) ? pillItems.map(normalizeBadge) : [];
  const safeActions = Array.isArray(actions) ? actions.map(normalizeAction) : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "hero-wrap",
        style: {
          padding: 'var(--s-5)'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "row",
          style: {
            alignItems: 'flex-start',
            gap: 'var(--s-4)',
            flexWrap: 'wrap'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: {
              minWidth: '280px',
              flex: '1 1 520px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              className: "kicker",
              tagName: "div",
              value: kicker
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              tagName: "h1",
              value: title,
              style: {
                margin: '8px 0 10px'
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              className: "muted",
              tagName: "p",
              value: description,
              style: {
                maxWidth: '78ch'
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "row",
              style: {
                marginTop: 'var(--s-4)',
                flexWrap: 'wrap'
              },
              children: safeActions.map(action => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "a",
                className: `btn ${action.variant || 'primary'}`,
                href: action.url || undefined,
                value: action.text,
                target: action.opensInNewTab ? '_blank' : undefined,
                rel: action.opensInNewTab ? 'noopener noreferrer' : undefined
              }, action.id))
            })]
          }), safeBadges.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "pill",
            style: {
              alignSelf: 'flex-start'
            },
            children: safeBadges.map((badge, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [index > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "muted",
                children: "\xB7"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "a",
                className: "mono badge",
                href: badge.url || undefined,
                value: badge.text,
                target: badge.opensInNewTab ? '_blank' : undefined,
                rel: badge.opensInNewTab ? 'noopener noreferrer' : undefined
              })]
            }, badge.id))
          })]
        })
      })
    })
  });
}

/***/ },

/***/ "./src/blocks/hero-simple/editor.scss"
/*!********************************************!*\
  !*** ./src/blocks/hero-simple/editor.scss ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/hero-simple/style.scss"
/*!*******************************************!*\
  !*** ./src/blocks/hero-simple/style.scss ***!
  \*******************************************/
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

/***/ "./src/blocks/hero-simple/block.json"
/*!*******************************************!*\
  !*** ./src/blocks/hero-simple/block.json ***!
  \*******************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"slav-bank/hero-simple","title":"Hero simple","category":"Компоненты темы","icon":"screenoptions","description":"Секция с заранее заданными контейнерами и наполнением.","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","attributes":{"kicker":{"type":"string","default":"О банке"},"title":{"type":"string","default":"Заголовок страницы"},"description":{"type":"string","default":""},"actions":{"type":"array","default":[]},"pillItems":{"type":"array","default":[]},"primaryText":{"type":"string","default":""},"primaryUrl":{"type":"string","default":""},"secondaryText":{"type":"string","default":""},"secondaryUrl":{"type":"string","default":""},"tertiaryText":{"type":"string","default":""},"tertiaryUrl":{"type":"string","default":""},"badge":{"type":"string","default":"Контакты"},"phoneText":{"type":"string","default":""},"phoneHref":{"type":"string","default":""},"emailText":{"type":"string","default":""},"emailHref":{"type":"string","default":""}},"supports":{"html":false,"anchor":true,"spacing":{"padding":true,"margin":true},"layout":true},"example":{"attributes":{"kicker":"Поддержка","title":"Помощь клиентам","description":"Часто задаваемые вопросы и полезные материалы.","pillItems":[{"id":"badge-demo-1","text":"Безопасность","url":"/security","linkMode":false,"pageId":0,"opensInNewTab":false},{"id":"badge-demo-2","text":"Клиент-Банк","url":"/client-bank-online","linkMode":false,"pageId":0,"opensInNewTab":false}],"actions":[{"id":"action-demo-1","text":"Содержание","url":"#content","variant":"primary","linkMode":false,"pageId":0,"opensInNewTab":false}]},"viewportWidth":1200}}');

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
/******/ 			"blocks/hero-simple/index": 0,
/******/ 			"blocks/hero-simple/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/hero-simple/style-index"], () => (__webpack_require__("./src/blocks/hero-simple/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map