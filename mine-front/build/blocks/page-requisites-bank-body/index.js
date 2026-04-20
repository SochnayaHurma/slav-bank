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

/***/ "./src/blocks/page-pattern.js"
/*!************************************!*\
  !*** ./src/blocks/page-pattern.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bentoSave: () => (/* binding */ bentoSave),
/* harmony export */   bodySave: () => (/* binding */ bodySave),
/* harmony export */   createBentoEdit: () => (/* binding */ createBentoEdit),
/* harmony export */   createBodyEdit: () => (/* binding */ createBodyEdit),
/* harmony export */   createPageEdit: () => (/* binding */ createPageEdit),
/* harmony export */   createProseEdit: () => (/* binding */ createProseEdit),
/* harmony export */   heroAction: () => (/* binding */ heroAction),
/* harmony export */   heroBadge: () => (/* binding */ heroBadge),
/* harmony export */   pageSave: () => (/* binding */ pageSave),
/* harmony export */   proseSave: () => (/* binding */ proseSave)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hero_simple_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-simple/edit */ "./src/blocks/hero-simple/edit.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const heroBadge = (text, url) => ({
  ...(0,_hero_simple_edit__WEBPACK_IMPORTED_MODULE_1__.createBadge)(),
  text,
  url,
  linkMode: false
});
const heroAction = (text, url) => ({
  ...(0,_hero_simple_edit__WEBPACK_IMPORTED_MODULE_1__.createAction)(),
  text,
  url,
  linkMode: false
});
const createPageEdit = template => function Edit() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("main", {
    id: "main",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
      template: template
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "toast",
      role: "status",
      "aria-live": "polite",
      "aria-atomic": "true",
      hidden: true,
      children: "\u0413\u043E\u0442\u043E\u0432\u043E"
    })]
  });
};
function pageSave() {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: 'theme-shell'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("main", {
    ...blockProps,
    id: "main",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "toast",
      role: "status",
      "aria-live": "polite",
      "aria-atomic": "true",
      hidden: true,
      children: "\u0413\u043E\u0442\u043E\u0432\u043E"
    })]
  });
}
const createBentoEdit = bodyBlockName => function Edit() {
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useInnerBlocksProps)({
    className: 'bento'
  }, {
    template: [[bodyBlockName, {}], ['slav-bank/bento-shell-sidebar', {}]]
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
};
function bentoSave() {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: 'block dashv2',
    id: 'content'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "bento",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
      })
    })
  });
}
const createBodyEdit = template => function Edit() {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: 'bento-card',
    style: {
      padding: 'var(--s-4)',
      position: 'relative'
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "bento-card",
    style: {
      padding: 'var(--s-4)',
      position: 'relative'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
      template: template
    })
  });
};
function bodySave() {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: 'bento-card',
    style: {
      padding: 'var(--s-4)',
      position: 'relative'
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "bento-card",
    style: {
      padding: 'var(--s-4)',
      position: 'relative'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
}
const createProseEdit = template => function Edit() {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: 'prose'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "entry-content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
        template: template
      })
    })
  });
};
function proseSave() {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: 'prose'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "entry-content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
    })
  });
}

/***/ },

/***/ "./src/blocks/page-requisites-bank-body/edit.js"
/*!******************************************************!*\
  !*** ./src/blocks/page-requisites-bank-body/edit.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page_pattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-pattern */ "./src/blocks/page-pattern.js");

const TEMPLATE = [['slav-bank/page-pattern-alert', {
  title: 'Реквизиты банка',
  text: 'Актуальные реквизиты АО НКБ «СЛАВЯНБАНК» для платежей и договоров.'
}], ['slav-bank/page-pattern-list', {
  items: [{
    id: 'req-1',
    text: 'Полное наименование банка и юридический адрес.'
  }, {
    id: 'req-2',
    text: 'БИК, корреспондентский счет, ИНН/КПП.'
  }, {
    id: 'req-3',
    text: 'Контакты для уточнения реквизитов и платежных данных.'
  }]
}]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_page_pattern__WEBPACK_IMPORTED_MODULE_0__.createBodyEdit)(TEMPLATE));

/***/ },

/***/ "./src/blocks/page-requisites-bank-body/index.js"
/*!*******************************************************!*\
  !*** ./src/blocks/page-requisites-bank-body/index.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/page-requisites-bank-body/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/page-requisites-bank-body/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/page-requisites-bank-body/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/page-requisites-bank-body/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/page-requisites-bank-body/style.scss");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/page-requisites-bank-body/save.js"
/*!******************************************************!*\
  !*** ./src/blocks/page-requisites-bank-body/save.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _page_pattern__WEBPACK_IMPORTED_MODULE_0__.pageSave)
/* harmony export */ });
/* harmony import */ var _page_pattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-pattern */ "./src/blocks/page-pattern.js");


/***/ },

/***/ "./src/blocks/page-requisites-bank-body/editor.scss"
/*!**********************************************************!*\
  !*** ./src/blocks/page-requisites-bank-body/editor.scss ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/page-requisites-bank-body/style.scss"
/*!*********************************************************!*\
  !*** ./src/blocks/page-requisites-bank-body/style.scss ***!
  \*********************************************************/
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

/***/ "./src/blocks/page-requisites-bank-body/block.json"
/*!*********************************************************!*\
  !*** ./src/blocks/page-requisites-bank-body/block.json ***!
  \*********************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"slav-bank/body-requisites-bank","title":"Реквизиты банка: содержимое","category":"Наполнение","icon":"media-document","description":"Карточка содержимого страницы Реквизиты банка.","parent":["slav-bank/body-requisites-bank-bento"],"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","supports":{"html":false,"anchor":true,"spacing":{"padding":true,"margin":true},"layout":true}}');

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
/******/ 			"blocks/page-requisites-bank-body/index": 0,
/******/ 			"blocks/page-requisites-bank-body/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/page-requisites-bank-body/style-index"], () => (__webpack_require__("./src/blocks/page-requisites-bank-body/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map