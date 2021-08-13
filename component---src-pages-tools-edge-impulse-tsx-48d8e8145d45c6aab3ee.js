"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3382],{

/***/ 99809:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _toArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59968);
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96410);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82961);
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28970);




function _toArray(arr) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(arr) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
}

/***/ }),

/***/ 31296:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99809);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28481);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8812);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85505);
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39055);
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58063);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34621);
/* harmony import */ var _AccordionContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9866);
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12933);













var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        '&:before': {
          display: 'none'
        }
      },
      '&$expanded': {
        margin: '16px 0',
        '&:first-child': {
          marginTop: 0
        },
        '&:last-child': {
          marginBottom: 0
        },
        '&:before': {
          opacity: 0
        }
      },
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: 0,
      '&:first-child': {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius
      },
      '&:last-child': {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        // Fix a rendering issue on Edge
        '@supports (-ms-ime-align: auto)': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {}
  };
};
var Accordion = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Accordion(props, ref) {
  var childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$defaultExpande = props.defaultExpanded,
      defaultExpanded = _props$defaultExpande === void 0 ? false : _props$defaultExpande,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      expandedProp = props.expanded,
      onChange = props.onChange,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Collapse__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(props, ["children", "classes", "className", "defaultExpanded", "disabled", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"]);

  var _useControlled = (0,_utils_useControlled__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'Accordion',
    state: 'expanded'
  }),
      _useControlled2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(_useControlled, 2),
      expanded = _useControlled2[0],
      setExpandedState = _useControlled2[1];

  var handleChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event) {
    setExpandedState(!expanded);

    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);

  var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(childrenProp),
      _React$Children$toArr2 = (0,_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(_React$Children$toArr),
      summary = _React$Children$toArr2[0],
      children = _React$Children$toArr2.slice(1);

  var contextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return {
      expanded: expanded,
      disabled: disabled,
      toggle: handleChange
    };
  }, [expanded, disabled, handleChange]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Paper__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(classes.root, className, expanded && classes.expanded, disabled && classes.disabled, !square && classes.rounded),
    ref: ref,
    square: square
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AccordionContext__WEBPACK_IMPORTED_MODULE_10__/* .default.Provider */ .Z.Provider, {
    value: contextValue
  }, summary), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
    in: expanded,
    timeout: "auto"
  }, TransitionProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "aria-labelledby": summary.props.id,
    id: summary.props['aria-controls'],
    role: "region"
  }, children)));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(styles, {
  name: 'MuiAccordion'
})(Accordion));

/***/ }),

/***/ 9866:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */

var AccordionContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

if (false) {}

/* harmony default export */ __webpack_exports__["Z"] = (AccordionContext);

/***/ }),

/***/ 37171:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34621);





var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      padding: theme.spacing(1, 2, 2)
    }
  };
};
var AccordionDetails = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function AccordionDetails(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(classes.root, className),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(styles, {
  name: 'MuiAccordionDetails'
})(AccordionDetails));

/***/ }),

/***/ 95371:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85505);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67055);
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23729);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34621);
/* harmony import */ var _Accordion_AccordionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9866);


/* eslint-disable jsx-a11y/aria-role */








var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      minHeight: 8 * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: theme.spacing(0, 2),
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      },
      '&$expanded': {
        minHeight: 64
      },
      '&$focused, &$focusVisible': {
        backgroundColor: theme.palette.action.focus
      },
      '&$disabled': {
        opacity: theme.palette.action.disabledOpacity
      }
    },

    /* Pseudo-class applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
    expanded: {},

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focused: {},

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the children wrapper element. */
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '&$expanded': {
        margin: '20px 0'
      }
    },

    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&:hover': {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: 'transparent'
      },
      '&$expanded': {
        transform: 'rotate(180deg)'
      }
    }
  };
};
var AccordionSummary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function AccordionSummary(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      expandIcon = props.expandIcon,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$IconButtonProp = props.IconButtonProps,
      IconButtonProps = _props$IconButtonProp === void 0 ? {} : _props$IconButtonProp,
      onClick = props.onClick,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "classes", "className", "expandIcon", "focusVisibleClassName", "IconButtonProps", "onClick"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Accordion_AccordionContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      _React$useContext$dis = _React$useContext.disabled,
      disabled = _React$useContext$dis === void 0 ? false : _React$useContext$dis,
      expanded = _React$useContext.expanded,
      toggle = _React$useContext.toggle;

  var handleChange = function handleChange(event) {
    if (toggle) {
      toggle(event);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    focusRipple: false,
    disableRipple: true,
    disabled: disabled,
    component: "div",
    "aria-expanded": expanded,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.root, className, disabled && classes.disabled, expanded && classes.expanded),
    focusVisibleClassName: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.focusVisible, classes.focused, focusVisibleClassName),
    onClick: handleChange,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.content, expanded && classes.expanded)
  }, children), expandIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.expandIcon, expanded && classes.expanded),
    edge: "end",
    component: "div",
    tabIndex: null,
    role: null,
    "aria-hidden": true
  }, IconButtonProps), expandIcon));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(styles, {
  name: 'MuiAccordionSummary'
})(AccordionSummary));

/***/ }),

/***/ 41212:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'CheckCircleOutline');

exports.Z = _default;

/***/ }),

/***/ 95067:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), 'FiberManualRecord');

exports.Z = _default;

/***/ }),

/***/ 52377:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
}), 'GetApp');

exports.Z = _default;

/***/ }),

/***/ 42495:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ApiKeyAccordion; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(22122);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(81253);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/AccordionActions/AccordionActions.js





var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end'
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var AccordionActions = /*#__PURE__*/react.forwardRef(function AccordionActions(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["classes", "className", "disableSpacing"]);

  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ var AccordionActions_AccordionActions = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiAccordionActions'
})(AccordionActions));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js
var Accordion = __webpack_require__(31296);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js
var AccordionSummary = __webpack_require__(95371);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(33287);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js
var AccordionDetails = __webpack_require__(37171);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(47739);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircleOutline.js
var CheckCircleOutline = __webpack_require__(41212);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./src/components/hooks/useSecret.ts + 1 modules
var useSecret = __webpack_require__(21984);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
;// CONCATENATED MODULE: ./src/components/ApiKeyAccordion.tsx






 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports





function ApiKeyAccordion(props) {
  var apiName = props.apiName,
      validateKey = props.validateKey,
      title = props.title,
      children = props.children,
      defaultExpanded = props.defaultExpanded;

  var _useSecret = (0,useSecret/* useSecret */.$)(apiName),
      apiKey = _useSecret.value,
      setApiKey = _useSecret.setValue;

  var apiKeyId = (0,react_use_id_hook_esm/* useId */.Me)();

  var _useState = (0,react.useState)(""),
      key = _useState[0],
      setKey = _useState[1];

  var _useState2 = (0,react.useState)(!apiKey || defaultExpanded),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      validated = _useState3[0],
      setValidated = _useState3[1];

  var _useContext = (0,react.useContext)(AppContext/* default */.ZP),
      enqueueSnackbar = _useContext.enqueueSnackbar;

  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(mounted) {
      var _ref2, status;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (apiKey) {
                _context.next = 4;
                break;
              }

              setValidated(false);
              _context.next = 16;
              break;

            case 4:
              if (!validateKey) {
                _context.next = 10;
                break;
              }

              _context.next = 7;
              return validateKey(apiKey);

            case 7:
              _context.t0 = _context.sent;
              _context.next = 11;
              break;

            case 10:
              _context.t0 = {
                status: 200
              };

            case 11:
              _ref2 = _context.t0;
              status = _ref2.status;

              if (mounted()) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return");

            case 15:
              if (status === 200) {
                setValidated(true);
                setExpanded(false);
              } else {
                setValidated(false);
                if (status === 403) setApiKey(undefined);
              }

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [apiKey]);

  var handleApiChange = function handleApiChange(event) {
    setKey(event.target.value);
  };

  var handleSave = function handleSave() {
    setApiKey(key);
    setKey("");
    enqueueSnackbar("key saved...");
  };

  var handleReset = function handleReset() {
    setApiKey("");
    enqueueSnackbar("key cleared...");
  };

  var handleExpanded = function handleExpanded() {
    setExpanded(!expanded);
  };

  return /*#__PURE__*/react.createElement(Accordion/* default */.Z, {
    expanded: expanded,
    onChange: handleExpanded
  }, /*#__PURE__*/react.createElement(AccordionSummary/* default */.Z, {
    expandIcon: /*#__PURE__*/react.createElement(ExpandMore/* default */.Z, null)
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body1"
  }, (title || "API key") + " Configuration"), validated && /*#__PURE__*/react.createElement(Box/* default */.Z, {
    ml: 1,
    color: "success.main"
  }, /*#__PURE__*/react.createElement(CheckCircleOutline/* default */.Z, null))), /*#__PURE__*/react.createElement(AccordionDetails/* default */.Z, {
    style: {
      display: "block"
    }
  }, validated && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "success"
  }, "API key ready!"), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    component: "span",
    variant: "caption"
  }, children), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: apiKeyId,
    label: "API key",
    fullWidth: true,
    value: key,
    type: "password",
    onChange: handleApiChange
  })), /*#__PURE__*/react.createElement(AccordionActions_AccordionActions, null, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    "aria-label": "save api key",
    disabled: !key,
    variant: "contained",
    color: "primary",
    onClick: handleSave
  }, "Save"), /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    "aria-label": "clear api key",
    disabled: !apiKey,
    variant: "contained",
    onClick: handleReset
  }, "Clear")));
}

/***/ }),

/***/ 29065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ReadingFieldGrid; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95823);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31186);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useGridBreakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7746);
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95067);
/* harmony import */ var _devices_useDeviceName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5738);
/* harmony import */ var _ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64973);


 // tslint:disable-next-line: no-submodule-imports match-default-export-name




var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(function () {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    vmiddle: {
      verticalAlign: "middle"
    }
  });
});

function ReadingFieldGridItem(props) {
  var register = props.register,
      handleRegisterCheck = props.handleRegisterCheck,
      recording = props.recording,
      registerChecked = props.registerChecked,
      liveDataSet = props.liveDataSet;
  var service = register.service;
  var device = service.device;
  var gridBreakpoints = (0,_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)();
  var classes = useStyles();
  var deviceName = (0,_devices_useDeviceName__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(device);

  var handleCheck = function handleCheck() {
    return handleRegisterCheck(register);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, Object.assign({
    item: true
  }, gridBreakpoints, {
    key: "source" + register.id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    subheader: register.service.name,
    title: deviceName + "/" + register.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, register.fields.map(function (field) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: field.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
      className: classes.vmiddle,
      fontSize: "large",
      style: {
        color: registerChecked && (liveDataSet === null || liveDataSet === void 0 ? void 0 : liveDataSet.colorOf(field)) || "#ccc"
      }
    }), field.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    disabled: recording,
    onChange: handleCheck,
    checked: registerChecked,
    label: "record " + deviceName + "/" + register.name
  }))));
}

function ReadingFieldGrid(props) {
  var readingRegisters = props.readingRegisters,
      registerIdsChecked = props.registerIdsChecked,
      recording = props.recording,
      handleRegisterCheck = props.handleRegisterCheck,
      liveDataSet = props.liveDataSet;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, readingRegisters.map(function (register) {
    var registerChecked = registerIdsChecked.indexOf(register.id) > -1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReadingFieldGridItem, {
      key: register.id,
      register: register,
      registerChecked: registerChecked,
      recording: recording,
      handleRegisterCheck: handleRegisterCheck,
      liveDataSet: liveDataSet
    });
  }));
}

/***/ }),

/***/ 21984:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": function() { return /* binding */ useSecret; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/DbContext.tsx
var DbContext = __webpack_require__(94904);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
;// CONCATENATED MODULE: ./src/components/useDbValue.ts






function useDbValue(id, initialValue) {
  var _useContext = (0,react.useContext)(DbContext/* default */.ZP),
      db = _useContext.db;

  var _useState = (0,react.useState)(undefined),
      _value = _useState[0],
      _setValue = _useState[1];

  var values = (0,useChange/* default */.Z)(db, function (d) {
    return d === null || d === void 0 ? void 0 : d.values;
  });
  var _mounted = true;

  var setValue = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(value) {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return values === null || values === void 0 ? void 0 : values.set(id, value);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function setValue(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // listen to change


  (0,react.useEffect)(function () {
    return values === null || values === void 0 ? void 0 : values.subscribe(DbContext/* DB_VALUE_CHANGE */.TB, /*#__PURE__*/function () {
      var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(changed) {
        var v;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(changed === id)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return values.get(id);

              case 3:
                v = _context2.sent;

                if (_mounted) {
                  _setValue(v);
                }

              case 5:
                return _context2.abrupt("return", function () {
                  _mounted = false;
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }, [db, values]); // load intial value

  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3(mounted) {
      var v;
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return values === null || values === void 0 ? void 0 : values.get(id);

            case 2:
              v = _context3.sent;

              if (mounted()) {
                //      console.log(`load dbvalue ${id}`, values, v)
                _setValue(v || initialValue);
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }(), [db, values]);
  return {
    value: _value,
    setValue: setValue
  };
}
;// CONCATENATED MODULE: ./src/components/hooks/useSecret.ts

function useSecret(id) {
  var _useDbValue = useDbValue("secret:" + id, ""),
      value = _useDbValue.value,
      setValue = _useDbValue.setValue;

  return {
    value: value,
    setValue: setValue
  };
}

/***/ }),

/***/ 64973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SwitchWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19756);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48086);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["label"];


function SwitchWithLabel(props) {
  var label = props.label,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, rest),
    label: label
  });
}

/***/ }),

/***/ 2649:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EdgeImpulse; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(85061);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(5991);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(63349);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(41788);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17727);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(95823);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(95148);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(83332);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(59355);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(27136);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(6210);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(80838);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36176);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54774);
/* harmony import */ var _components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7746);
/* harmony import */ var _jacdac_ts_src_jdom_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47235);
/* harmony import */ var _components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31477);
/* harmony import */ var _components_ui_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95453);
/* harmony import */ var _components_useEffectAsync__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7751);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71815);
/* harmony import */ var _components_FieldDataSet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64616);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(13173);
/* harmony import */ var _components_ui_CircularProgressWithLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29177);
/* harmony import */ var _components_Trend__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(25090);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(52377);
/* harmony import */ var _components_ServiceList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15548);
/* harmony import */ var _model_uploader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(46905);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(81794);
/* harmony import */ var _components_devices_useDeviceName__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(5738);
/* harmony import */ var _components_ReadingFieldGrid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(29065);
/* harmony import */ var _components_useChartPalette__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(74039);
/* harmony import */ var _jacdac_ts_src_jdom_sensoraggregatorclient__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(84264);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(99330);
/* harmony import */ var _jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(10913);
/* harmony import */ var _components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(94431);
/* harmony import */ var _components_ApiKeyAccordion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(42495);
/* harmony import */ var _components_hooks_useSecret__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(21984);





















 // tslint:disable-next-line: match-default-export-name no-submodule-imports














var EDGE_IMPULSE_API_KEY = "edgeimpulseapikey";
var IDLE = "idle";
var STARTING = "starting";
var SAMPLING = "sampling";
var UPLOADING = "uploading";
var SAMPLING_STATE = "samplingState";

/*
A client for the EdgeImpulse remote management
https://docs.edgeimpulse.com/reference#remote-management
*/
var EdgeImpulseClient = /*#__PURE__*/function (_JDClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z)(EdgeImpulseClient, _JDClient);

  function EdgeImpulseClient(apiKey, aggregator, inputRegisters, palette) {
    var _this;

    _this = _JDClient.call(this) || this;
    _this.connectionState = _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .DISCONNECT */ .PYu;
    _this.samplingState = IDLE;
    _this.apiKey = apiKey;
    _this.aggregator = aggregator;
    _this.inputRegisters = inputRegisters;
    _this.palette = palette;
    _this.handleMessage = _this.handleMessage.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(_this));
    _this.handleOpen = _this.handleOpen.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(_this));
    _this.handleError = _this.handleError.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(_this));
    _this.handleReport = _this.handleReport.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(_this));
    _this.handlePing = _this.handlePing.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z)(_this));
    _this.aggregatorClient = new _jacdac_ts_src_jdom_sensoraggregatorclient__WEBPACK_IMPORTED_MODULE_21__/* .SensorAggregatorClient */ .F(_this.aggregator);

    _this.aggregatorClient.subscribeSample(_this.handleReport);

    _this.mount(function () {
      return _this.disconnect();
    });

    _this.mount(function () {
      return _this.aggregatorClient.unmount();
    });

    return _this;
  }

  var _proto = EdgeImpulseClient.prototype;

  _proto.disconnect = function disconnect() {
    this.clearSampling();

    if (this._pingInterval) {
      clearInterval(this._pingInterval);
      this._pingInterval = undefined;
    } // stop socket


    if (this._ws) {
      var w = this._ws;
      this._ws = undefined;

      try {
        w.close();
      } catch (e) {
        console.debug(e);
      } finally {
        this.setConnectionState(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .DISCONNECT */ .PYu);
      }
    }
  };

  _proto.setConnectionState = function setConnectionState(state) {
    if (this.connectionState !== state) {
      this.connectionState = state;
      this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .CONNECTION_STATE */ .pzj, this.connectionState);
      console.log("ei: connection state changed", this.connectionState);
    }
  };

  _proto.setSamplingState = function setSamplingState(state) {
    if (this.samplingState !== state) {
      this.samplingState = state;
      this.emit(SAMPLING_STATE, this.samplingState);
      this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .CHANGE */ .Ver);
      console.log("ei: sampling state changed", this.samplingState);
    }
  };

  _proto.send = function send(msg) {
    var _this$_ws;

    (_this$_ws = this._ws) === null || _this$_ws === void 0 ? void 0 : _this$_ws.send(JSON.stringify(msg));
  };

  _proto.handleOpen = /*#__PURE__*/function () {
    var _handleOpen = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var service, device, productIdentifier, deviceSpec;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("ws: open");
              service = this.aggregator;
              device = service.device; // fetch device spec

              _context.next = 5;
              return service.device.resolveProductIdentifier();

            case 5:
              productIdentifier = _context.sent;
              deviceSpec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_13__/* .deviceSpecificationFromProductIdentifier */ .Ht)(productIdentifier);
              this._hello = {
                version: 2,
                apiKey: this.apiKey,
                deviceId: device.deviceId,
                deviceType: (deviceSpec === null || deviceSpec === void 0 ? void 0 : deviceSpec.name) || (productIdentifier === null || productIdentifier === void 0 ? void 0 : productIdentifier.toString(16)) || "Jacdac device",
                connection: "ip",
                // direct connection
                sensors: [{
                  name: this.inputRegisters.map(function (reg) {
                    return (0,_jacdac_ts_src_jdom_pretty__WEBPACK_IMPORTED_MODULE_22__/* .serviceName */ .HV)(reg.service.serviceClass);
                  }).join(","),
                  maxSampleLengthS: 10000,
                  frequencies: [50, 30, 20, 10]
                }]
              };
              this.send({
                hello: this._hello
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function handleOpen() {
      return _handleOpen.apply(this, arguments);
    }

    return handleOpen;
  }();

  _proto.reconnect = function reconnect() {
    this.disconnect();
    this.connect();
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  _proto.handleMessage = function handleMessage(msg) {
    // response to ping?
    if (msg.data === "pong") {
      this.pong = true;
      return;
    }

    var data = JSON.parse(msg.data);

    if (data.hello !== undefined) {
      var hello = data;

      if (!hello.hello) {
        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .ERROR */ .pnR, hello.err);
        this.disconnect();
      } else {
        this.setConnectionState(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .CONNECT */ .JD8);
      }
    } else if (data.sample) {
      var sample = data.sample;
      this.startSampling(sample);
    }
  };

  _proto.handleReport = function handleReport(row) {
    console.log("ei: aggregator report", this.connected, this.sampling);
    if (!this.connected) return; // ignore
    // partial data? ignore

    if (row.some(function (r) {
      return r === undefined;
    })) return;
    var bus = this.aggregator.device.bus;
    var timestamp = bus.timestamp; // first sample, notify we're started

    if (this.samplingState == STARTING) {
      this._sample.startTimestamp = this._sample.lastProgressTimestamp = timestamp;
      this.send({
        sampleStarted: true
      });
      this.setSamplingState(SAMPLING);
    } // store sample


    if (this.samplingState == SAMPLING) {
      var ds = this.dataSet;
      ds.addRow(row);
      this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .REPORT_RECEIVE */ .Gb8); // debounced progress update

      if (timestamp - this._sample.lastProgressTimestamp > 100) {
        this._sample.lastProgressTimestamp = timestamp;
        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .PROGRESS */ .ad7, this.progress);
      }

      if (timestamp - this._sample.startTimestamp >= this._sample.length) {
        // first stop the sampling
        this.stopSampling(); // we're done!

        this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .PROGRESS */ .ad7, this.progress); // and upload...

        this.uploadData();
      }
    }
  };

  _proto.uploadData = function uploadData() {
    var _this2 = this;

    this.setSamplingState(UPLOADING);
    var ds = this.dataSet;
    var payload = {
      protected: {
        ver: "v1",
        alg: "none",
        iat: Date.now()
      },
      signature: "",
      payload: {
        device_name: this._hello.deviceId,
        device_type: this._hello.deviceType,
        interval_ms: this._sample.interval,
        sensors: ds.headers.map(function (h, i) {
          return {
            name: ds.headers[i],
            units: ds.units[i] || "/"
          };
        }),
        values: ds.data(true)
      }
    };
    console.log("payload", payload); // upload dataset
    // https://docs.edgeimpulse.com/reference#ingestion-api

    return fetch("https://ingestion.edgeimpulse.com" + this._sample.path, {
      method: "POST",
      headers: {
        "x-api-key": this.apiKey,
        "x-label": this._sample.label,
        "x-file-name": ds.name,
        "x-disallow-duplicates": "true",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then( /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(resp) {
        var filename;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return resp.text();

              case 2:
                filename = _context2.sent;
                _this2._sample.generatedFilename = filename;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).finally(function () {
      _this2.send({
        sampleFinished: true
      });

      _this2.setSamplingState(IDLE);
    });
  };

  _proto.handleError = function handleError(ev) {
    this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .ERROR */ .pnR, ev);
    this.reconnect();
  };

  _proto.startSampling = /*#__PURE__*/function () {
    var _startSampling = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(sample) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this._sample = sample;
              this._sample.dataSet = _components_FieldDataSet__WEBPACK_IMPORTED_MODULE_12__/* .default.create */ .ZP.create(this.aggregator.device.bus, this.inputRegisters, "sample", this.palette);
              this._sample.unsubscribers = [];
              this.send({
                sample: true
              });
              this.setSamplingState(STARTING); // prepare configuration

              this._sample.aggregatorConfig = {
                samplingInterval: this._sample.interval,
                samplesInWindow: 10,
                inputs: this.inputRegisters.map(function (reg) {
                  return {
                    serviceClass: reg.service.serviceClass,
                    deviceId: reg.service.device.deviceId,
                    serviceIndex: reg.service.serviceIndex
                  };
                })
              };
              console.log("ei: input", this._sample.aggregatorConfig); // setup aggregator client

              _context3.next = 9;
              return this.aggregatorClient.setInputs(this._sample.aggregatorConfig);

            case 9:
              _context3.next = 11;
              return this.aggregatorClient.collect(this._sample.length * 1.1);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function startSampling(_x2) {
      return _startSampling.apply(this, arguments);
    }

    return startSampling;
  }();

  _proto.stopSampling = function stopSampling() {
    var sample = this._sample;

    if (sample) {
      sample.unsubscribers.forEach(function (unsub) {
        try {
          unsub();
        } catch (e) {
          console.log(e);
        }
      });
      sample.unsubscribers = [];
    }
  };

  _proto.clearSampling = function clearSampling() {
    this.stopSampling();

    if (this._sample) {
      this._sample = undefined;
      this._hello = undefined;
      this.setSamplingState(IDLE);
    }
  };

  _proto.connect = function connect() {
    if (this._ws) return; // already connected

    console.log("ei: connect");
    this.setConnectionState(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .CONNECTING */ .BS3);
    this._ws = new WebSocket("wss://remote-mgmt.edgeimpulse.com");
    this._ws.onmessage = this.handleMessage;
    this._ws.onopen = this.handleOpen;
    this._ws.onerror = this.handleError;
    this.pong = true;
    this._pingInterval = setInterval(this.handlePing, 3000);
  };

  _proto.handlePing = function handlePing() {
    if (!this.connected) return;

    if (!this.pong) {
      // the socket did not response
      console.log("missing pong");
      this.reconnect();
    } else {
      // send a new ping and wait for pong
      this.pong = false;

      this._ws.send("ping");
    }
  };

  EdgeImpulseClient.currentProjectInfo = /*#__PURE__*/function () {
    var _currentProjectInfo = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(apiKey) {
      var _rsj$projects, _rsj$projects$;

      var rsj, projectId, project;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (apiKey) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return", {
                valid: false
              });

            case 2:
              _context4.next = 4;
              return EdgeImpulseClient.apiFetch(apiKey, "projects");

            case 4:
              rsj = _context4.sent;

              if (rsj.success) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt("return", {
                valid: false,
                errorStatus: rsj.errorStatus
              });

            case 7:
              // the API returns the current project when using the API key
              projectId = (_rsj$projects = rsj.projects) === null || _rsj$projects === void 0 ? void 0 : (_rsj$projects$ = _rsj$projects[0]) === null || _rsj$projects$ === void 0 ? void 0 : _rsj$projects$.id;

              if (!(!(rsj !== null && rsj !== void 0 && rsj.success) || projectId === undefined)) {
                _context4.next = 10;
                break;
              }

              return _context4.abrupt("return", {
                valid: true,
                errorStatus: 402
              });

            case 10:
              _context4.next = 12;
              return EdgeImpulseClient.apiFetch(apiKey, projectId);

            case 12:
              project = _context4.sent;
              return _context4.abrupt("return", {
                valid: true,
                errorStatus: project.errorStatus,
                project: project
              });

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function currentProjectInfo(_x3) {
      return _currentProjectInfo.apply(this, arguments);
    }

    return currentProjectInfo;
  }();

  EdgeImpulseClient.apiFetch = /*#__PURE__*/function () {
    var _apiFetch = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(apiKey, path, body) {
      var API_ROOT, url, options, resp, payload;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              API_ROOT = "https://studio.edgeimpulse.com/v1/api/";
              url = "" + API_ROOT + path;
              options = {
                method: body ? "POST" : "GET",
                headers: {
                  "x-api-key": apiKey,
                  Accept: "application/json"
                },
                body: body && JSON.stringify(body)
              };
              if (options.method === "POST") options.headers["Content-Type"] = "application/json";
              _context5.next = 6;
              return fetch(url, options);

            case 6:
              resp = _context5.sent;

              if (!(resp.status !== 200)) {
                _context5.next = 9;
                break;
              }

              return _context5.abrupt("return", {
                success: false,
                errorStatus: resp.status,
                error: resp.statusText
              });

            case 9:
              _context5.prev = 9;
              _context5.next = 12;
              return resp.json();

            case 12:
              payload = _context5.sent;
              return _context5.abrupt("return", payload);

            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](9);
              return _context5.abrupt("return", {
                success: false,
                errorStatus: 500,
                error: _context5.t0.message
              });

            case 19:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[9, 16]]);
    }));

    function apiFetch(_x4, _x5, _x6) {
      return _apiFetch.apply(this, arguments);
    }

    return apiFetch;
  }();

  EdgeImpulseClient.deviceInfo = /*#__PURE__*/function () {
    var _deviceInfo = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6(apiKey, projectId, deviceId) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return EdgeImpulseClient.apiFetch(apiKey, projectId + "/device/" + deviceId);

            case 2:
              return _context6.abrupt("return", _context6.sent);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function deviceInfo(_x7, _x8, _x9) {
      return _deviceInfo.apply(this, arguments);
    }

    return deviceInfo;
  }();

  EdgeImpulseClient.renameDevice = /*#__PURE__*/function () {
    var _renameDevice = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee7(apiKey, projectId, deviceId, name) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return EdgeImpulseClient.apiFetch(apiKey, projectId + "/devices/" + deviceId + "/rename", {
                name: name
              });

            case 2:
              return _context7.abrupt("return", _context7.sent);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function renameDevice(_x10, _x11, _x12, _x13) {
      return _renameDevice.apply(this, arguments);
    }

    return renameDevice;
  }();

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z)(EdgeImpulseClient, [{
    key: "dataSet",
    get: function get() {
      var _this$_sample;

      return (_this$_sample = this._sample) === null || _this$_sample === void 0 ? void 0 : _this$_sample.dataSet;
    }
  }, {
    key: "connected",
    get: function get() {
      return this.connectionState === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .CONNECT */ .JD8;
    }
  }, {
    key: "sampling",
    get: function get() {
      return this.samplingState !== IDLE;
    }
  }, {
    key: "generatedSampleName",
    get: function get() {
      var _this$_sample2;

      return (_this$_sample2 = this._sample) === null || _this$_sample2 === void 0 ? void 0 : _this$_sample2.generatedFilename;
    }
  }, {
    key: "aggregatorConfig",
    get: function get() {
      var _this$_sample3;

      return (_this$_sample3 = this._sample) === null || _this$_sample3 === void 0 ? void 0 : _this$_sample3.aggregatorConfig;
    }
  }, {
    key: "progress",
    get: function get() {
      var timestamp = this.aggregator.device.bus.timestamp;
      return this.samplingState !== IDLE && (timestamp - this._sample.startTimestamp) / this._sample.length;
    }
  }]);

  return EdgeImpulseClient;
}(_jacdac_ts_src_jdom_client__WEBPACK_IMPORTED_MODULE_7__/* .JDClient */ .z);

function ApiKeyManager() {
  var validateKey = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee8(key) {
      var r;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return EdgeImpulseClient.currentProjectInfo(key);

            case 2:
              r = _context8.sent;
              return _context8.abrupt("return", {
                status: (r === null || r === void 0 ? void 0 : r.valid) && 200 || (r === null || r === void 0 ? void 0 : r.errorStatus) || 500
              });

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function validateKey(_x14) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ApiKeyAccordion__WEBPACK_IMPORTED_MODULE_24__/* .default */ .Z, {
    apiName: EDGE_IMPULSE_API_KEY,
    validateKey: validateKey
  }, "To get an ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("b", null, "API key"), ", navigate to \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "https://studio.edgeimpulse.com/studio/8698/keys",
    target: "_blank"
  }, "https://studio.edgeimpulse.com/studio/8698/keys"), "\xA0 and generate a new key.");
}

function useEdgeImpulseProjectInfo(apiKey) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined),
      info = _useState[0],
      setInfo = _useState[1];

  (0,_components_useEffectAsync__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)( /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee9(mounted) {
      var r;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (apiKey) {
                _context9.next = 4;
                break;
              }

              if (mounted()) setInfo(undefined);
              _context9.next = 8;
              break;

            case 4:
              _context9.next = 6;
              return EdgeImpulseClient.currentProjectInfo(apiKey);

            case 6:
              r = _context9.sent;
              if (mounted()) setInfo(r === null || r === void 0 ? void 0 : r.project);

            case 8:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x15) {
      return _ref3.apply(this, arguments);
    };
  }(), [apiKey]);
  return info;
}

function ProjectInfo(props) {
  var _info$project, _info$dataSummary, _info$project2, _info$project3, _info$project4;

  var info = props.info;
  var disabled = !(info !== null && info !== void 0 && info.success);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__/* .default */ .Z, {
    title: (info === null || info === void 0 ? void 0 : (_info$project = info.project) === null || _info$project === void 0 ? void 0 : _info$project.name) || "...",
    subheader: (info === null || info === void 0 ? void 0 : info.dataSummary) && (info === null || info === void 0 ? void 0 : (_info$dataSummary = info.dataSummary) === null || _info$dataSummary === void 0 ? void 0 : _info$dataSummary.dataCount) + " samples"
  }), (info === null || info === void 0 ? void 0 : (_info$project2 = info.project) === null || _info$project2 === void 0 ? void 0 : _info$project2.logo) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_32__/* .default */ .Z, {
    image: info === null || info === void 0 ? void 0 : (_info$project3 = info.project) === null || _info$project3 === void 0 ? void 0 : _info$project3.logo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_33__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_34__/* .default */ .Z, {
    disabled: disabled,
    target: "_blank",
    href: "https://studio.edgeimpulse.com/studio/" + (info === null || info === void 0 ? void 0 : (_info$project4 = info.project) === null || _info$project4 === void 0 ? void 0 : _info$project4.id) + "/",
    variant: "contained",
    color: "primary"
  }, "Open EdgeImpulse")));
}

function ModelDownloadButton(props) {
  var apiKey = props.apiKey,
      info = props.info,
      setModel = props.setModel;
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_35__/* .default */ .Z)();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      downloading = _useState2[0],
      setDownloading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      error = _useState3[0],
      setError = _useState3[1];

  var download = info === null || info === void 0 ? void 0 : info.downloads.find(function (download) {
    return download.type === "TensorFlow Lite (float32)";
  });

  var handleDownload = function handleDownload(url) {
    return /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee10() {
      var resp, res, bytes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              setDownloading(true);
              setError("");
              _context10.next = 5;
              return fetch(url, {
                headers: {
                  "x-api-key": apiKey
                }
              });

            case 5:
              resp = _context10.sent;
              _context10.next = 8;
              return resp.blob();

            case 8:
              res = _context10.sent;
              _context10.next = 11;
              return (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_18__/* .readBlobToUint8Array */ .Lg)(res);

            case 11:
              bytes = _context10.sent;
              setModel(bytes);
              _context10.next = 19;
              break;

            case 15:
              _context10.prev = 15;
              _context10.t0 = _context10["catch"](0);
              console.log(_context10.t0);
              setError("Oops, download failed.");

            case 19:
              _context10.prev = 19;
              setDownloading(false);
              return _context10.finish(19);

            case 22:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[0, 15, 19, 22]]);
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_36__/* .default */ .Z, {
    mb: 1
  }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    severity: "error"
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_34__/* .default */ .Z, {
    variant: "contained",
    disabled: !download || downloading,
    startIcon: downloading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_37__/* .default */ .Z, {
      size: theme.spacing(2)
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_38__/* .default */ .Z, null),
    onClick: handleDownload("https://studio.edgeimpulse.com" + (download === null || download === void 0 ? void 0 : download.link))
  }, "DOWNLOAD MODEL"));
}

function AggregatorCard(props) {
  var aggregator = props.aggregator,
      selected = props.selected,
      onChecked = props.onChecked;
  var device = aggregator.device;

  var handleChecked = function handleChecked() {
    return onChecked();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    device: device,
    showMedia: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_39__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_40__/* .default */ .Z, {
    checked: selected,
    onChange: handleChecked
  })));
}

function Acquisition(props) {
  var aggregator = props.aggregator,
      inputs = props.inputs,
      apiKey = props.apiKey,
      info = props.info;
  var device = aggregator.device;

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined),
      client = _useState4[0],
      setClient = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      error = _useState5[0],
      setError = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .DISCONNECT */ .PYu),
      connectionState = _useState6[0],
      setConnectionState = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(IDLE),
      samplingState = _useState7[0],
      setSamplingState = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      samplingProgress = _useState8[0],
      setSamplingProgress = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined),
      setDeviceInfo = _useState9[1];

  var deviceId = device.deviceId;
  var deviceName = (0,_components_devices_useDeviceName__WEBPACK_IMPORTED_MODULE_41__/* .default */ .Z)(device, false);
  var projectId = info === null || info === void 0 ? void 0 : info.id;
  var palette = (0,_components_useChartPalette__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z)();
  var connected = connectionState === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .CONNECT */ .JD8;
  var sampling = samplingState !== IDLE;
  var dataSet = client === null || client === void 0 ? void 0 : client.dataSet;
  var generatedSampleName = client === null || client === void 0 ? void 0 : client.generatedSampleName;
  var aggregatorConfig = client === null || client === void 0 ? void 0 : client.aggregatorConfig;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!apiKey || !aggregator || !(inputs !== null && inputs !== void 0 && inputs.length)) {
      setClient(undefined);
      setError(undefined);
      return undefined;
    } else {
      console.log("ei: start client");
      var c = new EdgeImpulseClient(apiKey, aggregator, inputs, palette);
      c.connect();
      setClient(c);
      setError(undefined);
      return function () {
        return c.unmount();
      };
    }
  }, [apiKey, aggregator, inputs === null || inputs === void 0 ? void 0 : inputs.map(function (ip) {
    return ip.id;
  }).join(",")]); // subscribe to client changes

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    return client === null || client === void 0 ? void 0 : client.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .CONNECTION_STATE */ .pzj, function (v) {
      return setConnectionState(v);
    });
  }, [client]); // subscribe to client changes

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    return client === null || client === void 0 ? void 0 : client.subscribe(SAMPLING_STATE, function (v) {
      return setSamplingState(v);
    });
  }, [client]); // listen to errors

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    return client === null || client === void 0 ? void 0 : client.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .ERROR */ .pnR, function (e) {
      return setError(e);
    });
  }, [client]); // progress

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    return client === null || client === void 0 ? void 0 : client.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .PROGRESS */ .ad7, function (p) {
      return setSamplingProgress(p * 100);
    });
  }, [client]); // name checking

  (0,_components_useEffectAsync__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee11() {
    var resp, _info, rename;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            if (!(!apiKey || projectId === undefined)) {
              _context11.next = 4;
              break;
            }

            setDeviceInfo(undefined);
            _context11.next = 16;
            break;

          case 4:
            _context11.next = 6;
            return EdgeImpulseClient.deviceInfo(apiKey, projectId, deviceId);

          case 6:
            resp = _context11.sent;
            _info = resp.success && resp.device;

            if (!(_info && _info.name !== deviceName)) {
              _context11.next = 15;
              break;
            }

            if (!(_info.name === deviceId)) {
              _context11.next = 15;
              break;
            }

            console.log("ei: sync name");
            _context11.next = 13;
            return EdgeImpulseClient.renameDevice(apiKey, projectId, deviceId, deviceName);

          case 13:
            rename = _context11.sent;

            if (rename.success) {
              _info.name = deviceName;
            }

          case 15:
            setDeviceInfo(_info);

          case 16:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  })), [apiKey, projectId, deviceName]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_36__/* .default */ .Z, null, connected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    severity: "success"
  }, "Connected to EdgeImpulse"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    severity: "error"
  }, error), sampling && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    severity: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_42__/* .default */ .Z, null, "Sampling..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ui_CircularProgressWithLabel__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    value: samplingProgress
  })), !!dataSet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_Trend__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
    dataSet: dataSet
  }), generatedSampleName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_43__/* .default */ .Z, {
    variant: "body2"
  }, "sample name: ", generatedSampleName), aggregatorConfig && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("pre", null, JSON.stringify(aggregatorConfig, null, 2)));
}

function EdgeImpulse() {
  var _useSecret = (0,_components_hooks_useSecret__WEBPACK_IMPORTED_MODULE_25__/* .useSecret */ .$)(EDGE_IMPULSE_API_KEY),
      apiKey = _useSecret.value;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z),
      bus = _useContext.bus;

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined),
      model = _useState10[0],
      setModel = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      registerIdsChecked = _useState11[0],
      setRegisterIdsChecked = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      aggregatorId = _useState12[0],
      setAggregatorId = _useState12[1];

  var gridBreakPoints = (0,_components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)();
  var info = useEdgeImpulseProjectInfo(apiKey);
  var aggregators = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(bus, function (bus) {
    return bus.services({
      serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .SRV_SENSOR_AGGREGATOR */ .x12
    });
  });
  var currentAggregator = aggregators.find(function (srv) {
    return srv.id == aggregatorId;
  }) || aggregators[0];
  var readingRegisters = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(bus, function (bus) {
    return bus.devices().map(function (device) {
      var _device$services$find;

      return (_device$services$find = device.services().find(function (srv) {
        return (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_13__/* .isSensor */ .rq)(srv.specification);
      })) === null || _device$services$find === void 0 ? void 0 : _device$services$find.readingRegister;
    }).filter(function (reg) {
      return !!reg;
    });
  });
  var inputs = readingRegisters.filter(function (reg) {
    return registerIdsChecked.indexOf(reg.id) > -1;
  });

  var handleAggregatorChecked = function handleAggregatorChecked(srv) {
    return function () {
      var id = (srv === null || srv === void 0 ? void 0 : srv.id) == aggregatorId ? "" : srv === null || srv === void 0 ? void 0 : srv.id;
      setAggregatorId(id);
    };
  };

  var handleRegisterCheck = function handleRegisterCheck(reg) {
    var i = registerIdsChecked.indexOf(reg.id);
    if (i > -1) registerIdsChecked.splice(i, 1);else registerIdsChecked.push(reg.id);
    registerIdsChecked.sort();
    setRegisterIdsChecked((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_44__/* .default */ .Z)(registerIdsChecked));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1", null, "Edge Impulse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, "Use Jacdac to inject data and download models into", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__.Link, {
    href: "https://studio.edgeimpulse.com"
  }, "https://studio.edgeimpulse.com"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ApiKeyManager, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_36__/* .default */ .Z, {
    mb: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ProjectInfo, {
    info: info
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h3", null, "Data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h4", null, "Select Sensors"), !(readingRegisters !== null && readingRegisters !== void 0 && readingRegisters.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    severity: "info"
  }, "No sensor found..."), !!readingRegisters.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ReadingFieldGrid__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z, {
    readingRegisters: readingRegisters,
    registerIdsChecked: registerIdsChecked,
    handleRegisterCheck: handleRegisterCheck
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h4", null, "Select Sensor Aggregator"), !(aggregators !== null && aggregators !== void 0 && aggregators.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    severity: "info"
  }, "No data aggregator found..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_45__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, aggregators.map(function (aggregator) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_45__/* .default */ .Z, Object.assign({
      key: aggregator.id,
      item: true
    }, gridBreakPoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(AggregatorCard, {
      aggregator: aggregator,
      selected: currentAggregator === aggregator,
      onChecked: handleAggregatorChecked(aggregator)
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h4", null, "Acquisition status"), !currentAggregator && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    severity: "info"
  }, "No data aggregator selected..."), !(inputs !== null && inputs !== void 0 && inputs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    severity: "info"
  }, "Select sensors to collect data from..."), currentAggregator && !!(inputs !== null && inputs !== void 0 && inputs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Acquisition, {
    aggregator: currentAggregator,
    inputs: inputs,
    apiKey: apiKey,
    info: info === null || info === void 0 ? void 0 : info.project
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h3", null, "Deployment"), model && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_36__/* .default */ .Z, {
    mb: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    severity: "success"
  }, "Model downloaded!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ModelDownloadButton, {
    apiKey: apiKey,
    info: info,
    setModel: setModel
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ServiceList__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_11__/* .SRV_MODEL_RUNNER */ .kVm,
    content: function content(service) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_model_uploader__WEBPACK_IMPORTED_MODULE_17__.ModelContent, {
        service: service
      });
    },
    actions: function actions(service) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_model_uploader__WEBPACK_IMPORTED_MODULE_17__.ModelActions, {
        service: service,
        model: model
      });
    },
    alertMissing: "No model runner found..."
  }));
}

/***/ })

}]);