"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[372],{

/***/ 74601:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Accordion_Accordion; }
});

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(27490);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(26311);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(71955);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(61415);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(79727);
;// CONCATENATED MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toArray.js




function _toArray(arr) {
  return (0,arrayWithHoles/* default */.Z)(arr) || (0,iterableToArray/* default */.Z)(arr) || (0,unsupportedIterableToArray/* default */.Z)(arr) || (0,nonIterableRest/* default */.Z)();
}
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(74540);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(47895);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(8812);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Collapse/Collapse.js
var Collapse = __webpack_require__(39055);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(58063);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(9866);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__(12933);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js













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
var Accordion = /*#__PURE__*/react.forwardRef(function Accordion(props, ref) {
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
      TransitionComponent = _props$TransitionComp === void 0 ? Collapse/* default */.Z : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["children", "classes", "className", "defaultExpanded", "disabled", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"]);

  var _useControlled = (0,useControlled/* default */.Z)({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'Accordion',
    state: 'expanded'
  }),
      _useControlled2 = (0,slicedToArray/* default */.Z)(_useControlled, 2),
      expanded = _useControlled2[0],
      setExpandedState = _useControlled2[1];

  var handleChange = react.useCallback(function (event) {
    setExpandedState(!expanded);

    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);

  var _React$Children$toArr = react.Children.toArray(childrenProp),
      _React$Children$toArr2 = _toArray(_React$Children$toArr),
      summary = _React$Children$toArr2[0],
      children = _React$Children$toArr2.slice(1);

  var contextValue = react.useMemo(function () {
    return {
      expanded: expanded,
      disabled: disabled,
      toggle: handleChange
    };
  }, [expanded, disabled, handleChange]);
  return /*#__PURE__*/react.createElement(Paper/* default */.Z, (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className, expanded && classes.expanded, disabled && classes.disabled, !square && classes.rounded),
    ref: ref,
    square: square
  }, other), /*#__PURE__*/react.createElement(AccordionContext/* default.Provider */.Z.Provider, {
    value: contextValue
  }, summary), /*#__PURE__*/react.createElement(TransitionComponent, (0,esm_extends/* default */.Z)({
    in: expanded,
    timeout: "auto"
  }, TransitionProps), /*#__PURE__*/react.createElement("div", {
    "aria-labelledby": summary.props.id,
    id: summary.props['aria-controls'],
    role: "region"
  }, children)));
});
 false ? 0 : void 0;
/* harmony default export */ var Accordion_Accordion = ((0,withStyles/* default */.Z)(styles, {
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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
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

/***/ 74904:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"
}), 'DeleteSweep');

exports.Z = _default;

/***/ }),

/***/ 52377:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

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

/***/ 66037:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ workerProxy; }
});

// UNUSED EXPORTS: WorkerProxy

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(25342);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(85413);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__(45484);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
;// CONCATENATED MODULE: ./src/workers/csv/workerloader.js
function createCsvWorker() {
  return typeof Window !== "undefined" && new Worker(new URL( // gatsby fast-refresh ignores files with node_modules in path
  /* worker import */ __webpack_require__.p + __webpack_require__.u(8213), __webpack_require__.b // syntax not supported in typescript
  ));
}
;// CONCATENATED MODULE: ./src/workers/data/workerloader.js
function createDataWorker() {
  return typeof Window !== "undefined" && new Worker(new URL( // gatsby fast-refresh ignores files with node_modules in path
  /* worker import */ __webpack_require__.p + __webpack_require__.u(2066), __webpack_require__.b // syntax not supported in typescript
  ));
}
;// CONCATENATED MODULE: ./src/workers/tf/workerloader.js
function createTFWorker() {
  return typeof Window !== "undefined" && new Worker(new URL( // gatsby fast-refresh ignores files with node_modules in path
  /* worker import */ __webpack_require__.p + __webpack_require__.u(955), __webpack_require__.b // syntax not supported in typescript
  ));
}
;// CONCATENATED MODULE: ./src/workers/vm/workerloader.js
function createVMWorker() {
  return typeof Window !== "undefined" && new Worker(new URL( // gatsby fast-refresh ignores files with node_modules in path
  /* worker import */ __webpack_require__.p + __webpack_require__.u(9798), __webpack_require__.b // syntax not supported in typescript
  ));
}
;// CONCATENATED MODULE: ./src/components/blockly/dsl/workers/proxy.ts



/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/ban-types */







var WorkerProxy = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(WorkerProxy, _JDEventSource);

  function WorkerProxy(worker, workerid) {
    var _this;

    _this = _JDEventSource.call(this) || this;
    _this.pendings = {};
    _this.worker = worker;
    _this.workerid = workerid;

    _this.worker.addEventListener("message", _this.handleMessage.bind((0,assertThisInitialized/* default */.Z)(_this)));

    return _this;
  }

  var _proto = WorkerProxy.prototype;

  _proto.handleMessage = function handleMessage(event) {
    var {
      data: message
    } = event;
    var {
      id,
      worker
    } = message;
    var pending = this.pendings[id];

    if (pending) {
      (0,utils/* assert */.hu)(worker === message.worker);
      pending.resolve(message);
    } else {
      this.emit(constants/* MESSAGE */.$Bi, event.data);
    }
  };

  _proto.postMessage = function postMessage(message) {
    message.id = message.id || Math.random() + "";
    message.worker = this.workerid;
    return new Promise((resolve, reject) => {
      this.pendings[message.id] = {
        resolve,
        reject
      };
      this.worker.postMessage(message);
    });
  };

  return WorkerProxy;
}(eventsource/* default */.ZP);
var _workers = {};
var loaders = {
  data: createDataWorker,
  csv: createCsvWorker,
  tf: createTFWorker,
  vm: createVMWorker
};
function workerProxy(workerid) {
  var worker = _workers[workerid] || (_workers[workerid] = new WorkerProxy(loaders[workerid](), workerid));
  return worker;
}

/***/ }),

/***/ 64973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SwitchWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48086);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["label"];


function SwitchWithLabel(props) {
  var {
    label
  } = props,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, rest),
    label: label
  });
}

/***/ }),

/***/ 70438:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(33287);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(44942);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__(342);
// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__(3263);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./src/components/useChartPalette.ts
var useChartPalette = __webpack_require__(74039);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(90293);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js
var InputAdornment = __webpack_require__(26954);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js + 2 modules
var Autocomplete = __webpack_require__(63393);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayArrow.js
var PlayArrow = __webpack_require__(42404);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Stop.js
var Stop = __webpack_require__(34257);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/GetApp.js
var GetApp = __webpack_require__(52377);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/DeleteSweep.js
var DeleteSweep = __webpack_require__(74904);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/NavigateNext.js
var NavigateNext = __webpack_require__(94343);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./src/components/ServiceManagerContext.tsx + 3 modules
var ServiceManagerContext = __webpack_require__(99808);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/components/Trend.tsx
var Trend = __webpack_require__(25090);
// EXTERNAL MODULE: ./src/components/ClassDataSetGrid.tsx
var ClassDataSetGrid = __webpack_require__(17890);
// EXTERNAL MODULE: ./src/components/ReadingFieldGrid.tsx
var ReadingFieldGrid = __webpack_require__(29065);
// EXTERNAL MODULE: ./src/components/FieldDataSet.ts
var FieldDataSet = __webpack_require__(64616);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(53719);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(85413);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__(45484);
;// CONCATENATED MODULE: ./src/components/model-editor/ModelDataSet.ts





var DataSet = function DataSet(inputTypes, recordings, registerIds, totalRecordings) {
  this.inputTypes = inputTypes;
  this.recordings = recordings;
  this.registerIds = registerIds;
  this.totalRecordings = totalRecordings;
};
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

var ModelDataSet = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(ModelDataSet, _JDEventSource);

  ModelDataSet.createFromFile = function createFromFile(datasetJSONObj) {
    var set = new ModelDataSet();
    var {
      recordings,
      registerIds
    } = datasetJSONObj;
    set.addRecordingsFromFile(recordings, registerIds); // add recordings and update total recordings

    return set;
  } // maintain computed number of recordings and input data types to avoid recomputation
  ;

  function ModelDataSet(labels, recordings, inputTypes, registerIds) {
    var _this;

    _this = _JDEventSource.call(this) || this;
    _this.labels = labels;
    _this.recordings = recordings;
    _this.inputTypes = inputTypes;
    _this.registerIds = registerIds;
    _this.labels = [];
    _this.recordings = {};
    _this.totalRecordings = 0;
    return _this;
  }

  var _proto = ModelDataSet.prototype;

  _proto.getRecordingsWithLabel = function getRecordingsWithLabel(label) {
    return this.recordings[label];
  };

  _proto.addRecording = function addRecording(recording, label, registerIds) {
    if (this.totalRecordings == 0) {
      this.labels.push(label);
      this.recordings[label] = [recording];
      this.inputTypes = recording.headerList;
      this.registerIds = registerIds;
      this.totalRecordings += 1;
      this.emit(constants/* CHANGE */.Ver);
    } else if (arraysEqual(recording.headerList, this.inputTypes)) {
      // Check if label is already in dataset
      if (this.labels.indexOf(label) < 0) {
        // If not, add the new label to the dataset
        this.labels.push(label);
        this.recordings[label] = [recording];
      } else {
        this.recordings[label].push(recording);
      }

      this.totalRecordings += 1;
      this.emit(constants/* CHANGE */.Ver);
    } else {
      // Randi TODO decide what error to raise when inputting incorrect data (shouldn't be possible, though)
      console.log("Randi, did not add data to dataset");
    }
  };

  _proto.addRecordingsFromFile = function addRecordingsFromFile(recordings, registerIds) {
    //totalRecordings
    Object.keys(recordings).forEach(label => {
      recordings[label].forEach(recording => {
        var set = FieldDataSet/* default.createFromFile */.ZP.createFromFile(recording);
        this.addRecording(set, label, registerIds);
      });
    });
  };

  _proto.removeRecording = function removeRecording(recording) {
    var recordingLabel = recording.name.slice(0, recording.name.indexOf("$"));
    var i = this.recordings[recordingLabel].indexOf(recording);

    if (i > -1) {
      this.recordings[recordingLabel].splice(i, 1); // If this emptied out a label, then remove that label

      if (this.recordings[recordingLabel].length == 0) {
        var j = this.labels.indexOf(recordingLabel);
        this.labels.splice(j, 1);
      }

      this.totalRecordings -= 1;
    }
  };

  _proto.countTotalRecordings = function countTotalRecordings() {
    var total = 0;
    this.labels.forEach(label => {
      this.recordings[label].forEach(() => {
        total += 1;
      });
    });
    return total;
  };

  _proto.toCSV = function toCSV() {
    var recordingCountHeader = "Number of recordings," + this.totalRecordings;
    var recordingData = [];
    this.labels.forEach(label => {
      this.recordings[label].forEach(recording => {
        recordingData.push("Recording metadata," + recording.name + "," + recording.rows.length + "," + label);
        recordingData.push(recording.toCSV());
      });
    });
    var recordData = recordingData.join("\n");
    var csv = [recordingCountHeader, recordData];
    return csv.join("\n");
  };

  (0,createClass/* default */.Z)(ModelDataSet, [{
    key: "labelOptions",
    get: function get() {
      if (this.labels.length == 0) return ["class1"];
      return this.labels;
    }
  }, {
    key: "numRecordings",
    get: function get() {
      return this.totalRecordings;
    }
  }, {
    key: "summary",
    get: function get() {
      if (this.labels.length <= 0) return ["Classes: none"];
      var modelInfo = [];
      var classes = [];
      this.labels.forEach(label => {
        classes.push(label + " [" + this.recordings[label].length + " sample(s)]");
      });
      modelInfo.push("Classes: " + classes.join(", "));
      return modelInfo;
    }
  }]);

  return ModelDataSet;
}(eventsource/* default */.ZP);


;// CONCATENATED MODULE: ./src/components/model-editor/CollectData.tsx






 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name















var LIVE_HORIZON = 24;

function createDataSet(bus, registers, name, live, palette) {
  var fields = (0,utils/* arrayConcatMany */.ue)(registers.map(reg => reg.fields));
  var colors = fields.map((f, i) => palette[i % palette.length]);
  var set = new FieldDataSet/* default */.ZP(bus, name, fields, colors);
  if (live) set.maxRows = LIVE_HORIZON + 4;
  return set;
}

function CollectData(props) {
  var {
    chartPalette,
    onChange,
    onNext
  } = props;
  var {
    0: dataset,
    1: setDataSet
  } = (0,react.useState)(props.dataset);
  var classes = props.reactStyle;
  var {
    fileStorage
  } = (0,react.useContext)(ServiceManagerContext/* default */.ZP);
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var readingRegisters = (0,useChange/* default */.Z)(bus, bus => (0,utils/* arrayConcatMany */.ue)(bus.devices().map(device => device.services().filter(srv => (0,spec/* isSensor */.rq)(srv.specification)).map(srv => srv.readingRegister))));
  /* For choosing sensors */

  var {
    0: registerIdsChecked,
    1: setRegisterIdsChecked
  } = (0,react.useState)([]);
  var {
    0: totalRecordings,
    1: setTotalRecordings
  } = (0,react.useState)(0);
  var {
    0: recordingName,
    1: setRecordingName
  } = (0,react.useState)("recording" + totalRecordings);
  var {
    0: isRecording,
    1: setIsRecording
  } = (0,react.useState)(false);
  var {
    1: setRecordingLength
  } = (0,react.useState)(0);
  var {
    0: liveRecording,
    1: setLiveRecording
  } = (0,react.useState)(undefined);
  var {
    1: setLiveDataTimestamp
  } = (0,react.useState)(0);

  var newRecording = (registerIds, live) => registerIds.length ? createDataSet(bus, readingRegisters.filter(reg => registerIds.indexOf(reg.id) > -1), currentClassLabel + "$" + dataset.numRecordings, live, chartPalette) : undefined;

  var handleRegisterCheck = reg => {
    var i = registerIdsChecked.indexOf(reg.id);
    if (i > -1) registerIdsChecked.splice(i, 1);else registerIdsChecked.push(reg.id);
    registerIdsChecked.sort();
    setRegisterIdsChecked((0,toConsumableArray/* default */.Z)(registerIdsChecked));
    setLiveRecording(newRecording(registerIdsChecked, true));
  };

  var handleRecordingNameChange = event => {
    setRecordingName(event.target.value.trim());
  };
  /* For recording data*/


  var {
    0: currentClassLabel,
    1: setCurrentClassLabel
  } = (0,react.useState)("class1");
  var {
    0: samplingIntervalDelay,
    1: setSamplingIntervalDelay
  } = (0,react.useState)("100");
  var {
    0: samplingDuration,
    1: setSamplingDuration
  } = (0,react.useState)("2");
  var {
    0: datasetMatch,
    1: setDataSetMatch
  } = (0,react.useState)(false);
  var recordingRegisters = readingRegisters.filter(reg => registerIdsChecked.indexOf(reg.id) > -1);
  var samplingIntervalDelayi = parseInt(samplingIntervalDelay);
  var samplingCount = Math.ceil(parseFloat(samplingDuration) * 1000 / samplingIntervalDelayi);
  var errorSamplingIntervalDelay = isNaN(samplingIntervalDelayi) || !/\d+/.test(samplingIntervalDelay);
  var errorSamplingDuration = isNaN(samplingCount);
  var error = errorSamplingDuration || errorSamplingIntervalDelay;
  var startEnabled = !!(recordingRegisters !== null && recordingRegisters !== void 0 && recordingRegisters.length) && datasetMatch;

  var handleSamplingIntervalChange = event => {
    setSamplingIntervalDelay(event.target.value.trim());
  };

  var handleSamplingDurationChange = event => {
    setSamplingDuration(event.target.value.trim());
  };

  var handleLabelChange = newLabel => {
    setCurrentClassLabel(newLabel);
  };

  var handleDownloadDataSet = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      var csv = dataset.toCSV();
      fileStorage.saveText(dataset.labelOptions.join("") + "dataset.csv", csv);
    });

    return function handleDownloadDataSet() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDeleteDataSet = () => {
    if (confirm("Are you sure you want to delete all recorded samples?")) {
      var newDataSet = new ModelDataSet();
      handleDataSetUpdate(newDataSet);
      setDataSet(newDataSet);
      resetDataCollection();
    }
  };

  var resetDataCollection = () => {
    setCurrentClassLabel("class1");
    setTotalRecordings(0);
    setSamplingIntervalDelay("100");
    setSamplingDuration("2");
  };

  var stopRecording = () => {
    if (isRecording) {
      // add new data to the dataset
      dataset.addRecording(liveRecording, currentClassLabel, registerIdsChecked);
      setTotalRecordings(totalRecordings + 1);
      setDataSet(dataset);
      handleDataSetUpdate(dataset); // create new live recording

      setLiveRecording(newRecording(registerIdsChecked, true)); // stop recording

      setIsRecording(false);
    }
  };

  var startRecording = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* () {
      if (!isRecording && recordingRegisters.length) {
        setLiveRecording(newRecording(registerIdsChecked, false));
        setIsRecording(true);
      }
    });

    return function startRecording() {
      return _ref2.apply(this, arguments);
    };
  }();

  var startStreamingRegisters = () => {
    console.log("start streaming");
    var streamers = recordingRegisters === null || recordingRegisters === void 0 ? void 0 : recordingRegisters.map(reg => reg.subscribe(constants/* REPORT_UPDATE */.rGZ, () => {}));
    return () => {
      console.log("stop streaming");
      streamers.map(streamer => streamer());
    };
  };

  var toggleRecording = () => {
    if (isRecording) stopRecording();else startRecording();
  };

  var handleDeleteRecording = recording => {
    dataset.removeRecording(recording);
    setDataSet(dataset);
    handleDataSetUpdate(dataset);
  };

  var updateLiveData = () => {
    setLiveRecording(liveRecording);
    setRecordingLength(liveRecording.rows.length);
    setLiveDataTimestamp(bus.timestamp);
  };

  var throttleUpdate = (0,utils/* throttle */.P2)(() => updateLiveData(), 30); // data collection
  // interval add data entry

  var addRow = values => {
    if (!liveRecording) return;
    liveRecording.addRow(values);

    if (isRecording && liveRecording.length >= samplingCount) {
      // stop recording
      updateLiveData();
      stopRecording();
    } else {
      throttleUpdate();
    }
  }; // setting interval


  (0,react.useEffect)(() => {
    if (error) return;
    console.log("set interval to " + samplingIntervalDelayi);
    recordingRegisters.forEach(reg => reg.sendSetIntAsync(samplingIntervalDelayi));
  }, [samplingIntervalDelayi, registerIdsChecked, errorSamplingIntervalDelay]); // collecting

  (0,react.useEffect)(() => {
    if (error) return undefined;
    var interval = setInterval(() => addRow(), samplingIntervalDelayi);
    var stopStreaming = startStreamingRegisters();
    return () => {
      clearInterval(interval);
      stopStreaming();
    };
  }, [isRecording, samplingIntervalDelayi, samplingCount, registerIdsChecked]);
  (0,react.useEffect)(() => {
    setRecordingName("recording" + totalRecordings);
  }, [totalRecordings]);
  (0,react.useEffect)(() => {
    var matchingInputs = true;

    if (dataset && liveRecording) {
      if (dataset.inputTypes && dataset.inputTypes.length) {
        if (!arraysEqual(dataset.inputTypes, liveRecording.headers)) matchingInputs = false;
      }
    }

    setDataSetMatch(matchingInputs);
  }, [liveRecording]);

  var handleDataSetUpdate = dataset => {
    onChange(dataset);
  };

  var handleNext = () => {
    onNext(dataset);
  };

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement("h2", null, "Current DataSet", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleDownloadDataSet,
    title: "Download all recording data",
    disabled: dataset.numRecordings == 0
  }, /*#__PURE__*/react.createElement(GetApp/* default */.Z, null)), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleDeleteDataSet,
    title: "Delete all recording data",
    disabled: dataset.numRecordings == 0
  }, /*#__PURE__*/react.createElement(DeleteSweep/* default */.Z, null))), /*#__PURE__*/react.createElement("div", {
    key: "recordedData"
  }, dataset.numRecordings > 0 ? /*#__PURE__*/react.createElement("div", {
    key: "recordings"
  }, /*#__PURE__*/react.createElement("p", null, "Input type(s): ", dataset.inputTypes.join(","), " "), dataset.labels.map(classLabel => /*#__PURE__*/react.createElement(ClassDataSetGrid/* default */.Z, {
    key: "dataset-" + classLabel,
    label: classLabel,
    tables: dataset.getRecordingsWithLabel(classLabel),
    handleDeleteTable: handleDeleteRecording
  }))) : /*#__PURE__*/react.createElement("p", null, "Empty"))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement("h2", null, "Collect More Data"), /*#__PURE__*/react.createElement("div", {
    key: "sensors"
  }, /*#__PURE__*/react.createElement("h3", null, "Select input sensors"), !readingRegisters.length && /*#__PURE__*/react.createElement("span", null, "Waiting for sensors..."), !!readingRegisters.length && /*#__PURE__*/react.createElement(ReadingFieldGrid/* default */.Z, {
    readingRegisters: readingRegisters,
    registerIdsChecked: registerIdsChecked,
    recording: isRecording,
    liveDataSet: liveRecording,
    handleRegisterCheck: handleRegisterCheck
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement("div", {
    key: "record"
  }, /*#__PURE__*/react.createElement("h3", null, "Record data"), /*#__PURE__*/react.createElement("div", {
    className: classes.row
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    className: classes.field,
    label: "Recording name",
    value: recordingName,
    variant: "outlined",
    onChange: handleRecordingNameChange
  }), /*#__PURE__*/react.createElement(Autocomplete/* default */.ZP, {
    disabled: isRecording,
    className: classes.field,
    options: dataset.labelOptions,
    renderInput: params => /*#__PURE__*/react.createElement(TextField/* default */.Z, Object.assign({}, params, {
      label: "Class label",
      variant: "outlined"
    })),
    value: currentClassLabel,
    onInputChange: (event, newValue) => handleLabelChange(newValue),
    getOptionSelected: () => true
  }), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    className: classes.field,
    error: errorSamplingDuration,
    disabled: isRecording,
    label: "Sampling duration",
    value: samplingDuration,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react.createElement(InputAdornment/* default */.Z, {
        position: "start"
      }, "s")
    },
    onChange: handleSamplingDurationChange
  }), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    className: classes.field,
    error: errorSamplingIntervalDelay,
    disabled: isRecording,
    label: "Sampling interval",
    value: samplingIntervalDelay,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react.createElement(InputAdornment/* default */.Z, {
        position: "start"
      }, "ms")
    },
    onChange: handleSamplingIntervalChange
  })), /*#__PURE__*/react.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    size: "large",
    variant: "contained",
    color: isRecording ? "secondary" : "primary",
    "aria-label": "start/stop recording",
    title: "start/stop recording",
    onClick: toggleRecording,
    startIcon: isRecording ? /*#__PURE__*/react.createElement(Stop/* default */.Z, null) : /*#__PURE__*/react.createElement(PlayArrow/* default */.Z, null),
    disabled: !startEnabled
  }, isRecording ? "Stop" : "Start"))), /*#__PURE__*/react.createElement("div", {
    key: "liveData"
  }, liveRecording && /*#__PURE__*/react.createElement(Trend/* default */.Z, {
    key: "trends",
    height: 12,
    dataSet: liveRecording,
    horizon: LIVE_HORIZON,
    dot: true,
    gradient: true
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    variant: "contained",
    color: "secondary",
    endIcon: /*#__PURE__*/react.createElement(NavigateNext/* default */.Z, null),
    disabled: dataset.labels.length < 2,
    onClick: handleNext
  }, "Next"))));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(74601);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js
var AccordionSummary = __webpack_require__(95371);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js
var AccordionDetails = __webpack_require__(37171);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Delete.js
var Delete = __webpack_require__(94500);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/FiberManualRecord.js
var FiberManualRecord = __webpack_require__(95067);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(47739);
// EXTERNAL MODULE: ./src/components/blockly/dsl/workers/proxy.ts + 4 modules
var proxy = __webpack_require__(66037);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/workers/tf.proxy.ts


function postModelRequest(_x) {
  return _postModelRequest.apply(this, arguments);
}

function _postModelRequest() {
  _postModelRequest = _asyncToGenerator(function* (message) {
    var worker = workerProxy("tf");
    var res = yield worker.postMessage(message);
    return res === null || res === void 0 ? void 0 : res.data;
  });
  return _postModelRequest.apply(this, arguments);
}

function trainRequest(_x2) {
  return _trainRequest.apply(this, arguments);
}

function _trainRequest() {
  _trainRequest = (0,asyncToGenerator/* default */.Z)(function* (message) {
    // Randi TODO check for missing data e.g. if (!message.trainingData) return undefined
    var worker = (0,proxy/* default */.Z)("tf");
    var res = yield worker.postMessage(message);
    return res;
  });
  return _trainRequest.apply(this, arguments);
}

function predictRequest(_x3) {
  return _predictRequest.apply(this, arguments);
}

function _predictRequest() {
  _predictRequest = (0,asyncToGenerator/* default */.Z)(function* (message) {
    // Randi TODO check for missing data e.g. if (!message.trainingData) return undefined
    var worker = (0,proxy/* default */.Z)("tf");
    var res = yield worker.postMessage(message);
    return res;
  });
  return _predictRequest.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/components/model-editor/MBModel.ts





var MBModel = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(MBModel, _JDEventSource);

  // maintain info about the dataset this model was created for
  // maintain training info about the model
  MBModel.createFromFile =
  /*#__PURE__*/
  function () {
    var _createFromFile = (0,asyncToGenerator/* default */.Z)(function* (modelObj) {
      var mbModel = new MBModel(modelObj.name, modelObj.labels, modelObj.modelJSON, modelObj.status);
      mbModel.inputShape = modelObj.inputShape;
      mbModel.inputTypes = modelObj.inputTypes;
      mbModel.outputShape = modelObj.outputShape;
      mbModel.trainingAcc = modelObj.trainingAcc || 0;
      mbModel.weightData = new Uint32Array(modelObj.weights).buffer || new ArrayBuffer(0);
      return mbModel;
    });

    function createFromFile(_x) {
      return _createFromFile.apply(this, arguments);
    }

    return createFromFile;
  }();

  function MBModel(name, labels, modelJSON, status) {
    var _this;

    _this = _JDEventSource.call(this) || this;
    _this.name = name;
    _this.labels = labels;
    _this.modelJSON = modelJSON;
    _this.status = status;
    _this.labels = _this.labels || [];
    _this.modelJSON = _this.modelJSON || "";
    _this.status = _this.status || "idle";
    _this.weightData = new ArrayBuffer(0);
    return _this;
  }

  var _proto = MBModel.prototype;

  _proto.toJSON = function toJSON() {
    return {
      name: this.name,
      inputShape: this.inputShape,
      inputTypes: this.inputTypes,
      labels: this.labels,
      modelJSON: this.modelJSON,
      outputShape: this.outputShape,
      status: this.status || "idle",
      trainingAcc: this.trainingAcc || 0,
      weights: Array.from(new Uint32Array(this.weightData))
    };
  };

  (0,createClass/* default */.Z)(MBModel, [{
    key: "summary",
    get: function get() {
      var modelSummary = ["Training Status: " + this.status, "Input Types: " + this.inputTypes, "JSON: " + this.modelJSON // Randi TODO generate summary of layers
      ];
      return modelSummary;
    }
  }]);

  return MBModel;
}(eventsource/* default */.ZP);


;// CONCATENATED MODULE: ./src/components/model-editor/TrainModel.tsx


 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports









var NUM_EPOCHS = 250;
var LOSS_COLOR = "#8b0000";
var ACC_COLOR = "#77dd77";
function TrainModel(props) {
  var classes = props.reactStyle;
  var {
    dataset,
    onChange,
    onNext
  } = props;
  var {
    0: model,
    1: setModel
  } = (0,react.useState)(props.model);
  var {
    0: pageReady,
    1: setPageReady
  } = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (!pageReady) {
      prepareDataSet(dataset);
      prepareModel(model);
      setPageReady(true);
    }
  }, []);
  /* For loading page */

  var prepareDataSet = set => {
    // Assumptions: the sampling rate, sampling duration, and sensors used are constant
    var sampleLength = -1;
    var sampleChannels = -1;
    var xData = [];
    var yData = [];

    var _loop = function _loop(label) {
      set.getRecordingsWithLabel(label).forEach(table => {
        if (sampleLength < table.length) {
          sampleLength = table.length;
          sampleChannels = table.width;
        } else if (table.width != sampleChannels) {
          setTrainEnabled(false);
          alert("All input data must have the same shape: " + table.name + "\n Has " + table.width + " inputs instead of " + sampleChannels);
        }
        /* else if (table.length != sampleLength) {
          // Randi decide what to do about different sized data
        } */
        // For x data, just add each sample as a new row into x_data


        xData.push(table.data());
        yData.push(set.labels.indexOf(label));
      });
    };

    for (var label of set.labels) {
      _loop(label);
    } // save tensors with dataset object


    set.xs = xData;
    set.ys = yData;
    set.length = sampleLength;
    set.width = sampleChannels;
  };

  var prepareModel = mod => {
    // If this is a brand new model, get it setup with a standard CNN architecture
    if (mod.modelJSON == "") {
      mod.modelJSON = "default";
      mod.labels = dataset.labels;
      mod.inputShape = [dataset.length, dataset.width];
      mod.inputTypes = dataset.inputTypes;
      mod.outputShape = dataset.labels.length;
      setModel(mod);
      handleModelUpdate(mod);
    } else if (!arraysEqual(mod.labels, dataset.labels) || !arraysEqual(mod.inputTypes, dataset.inputTypes)) {
      // If there is already a model, make sure it matches the current dataset
      //   if it does not, reset the model
      var newModel = new MBModel(model.name);
      prepareModel(newModel);
    }
  };

  var prepareTrainingLogs = () => {
    // Create space to hold training log data
    var trainingLogDataSet = {
      name: "training-logs",
      rows: [],
      headers: ["loss", "acc"],
      units: ["/", "/"],
      colors: [LOSS_COLOR, ACC_COLOR]
    };
    return FieldDataSet/* default.createFromFile */.ZP.createFromFile(trainingLogDataSet);
  };

  var deleteTFModel = () => {
    if (confirm("Are you sure you want to delete current model?")) {
      var newModel = new MBModel(model.name);
      prepareModel(newModel);
      setModel(newModel);
      handleModelUpdate(newModel);
    }
  };
  /* For training model */


  var {
    0: trainEnabled,
    1: setTrainEnabled
  } = (0,react.useState)(dataset.labels.length >= 2);
  var trainingLogs = (0,react.useMemo)(prepareTrainingLogs, []);
  (0,useChange/* default */.Z)(trainingLogs);

  var trainTFModel = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      model.status = "running";
      model.inputTypes = dataset.inputTypes;
      handleModelUpdate(model);
      setTrainEnabled(false); // setup worker
      // subscriber gets messages about training while training is happening

      var stopWorkerSubscribe = (0,proxy/* default */.Z)("tf").subscribe("message", msg => {
        var newData = [msg.data.loss, msg.data.acc];
        if (trainingLogs) trainingLogs.addData(newData);
      });
      var trainMsg = {
        worker: "tf",
        type: "train",
        data: {
          xData: dataset.xs,
          yData: dataset.ys,
          model: model.toJSON(),
          modelBlockJSON: ""
        }
      };
      var trainResult = yield trainRequest(trainMsg); // stop subscriber after training

      stopWorkerSubscribe();

      if (trainResult) {
        // handle result from training
        var trainingHistory = trainResult.data.trainingInfo;
        model.weightData = trainResult.data.modelWeights;
        model.modelJSON = trainResult.data.modelJSON;
        console.log("Randi training result ", trainResult); // Randi TODO decide when/how to compule arm code
        // Compile code for MCU

        /*const armcompiled = await compileAndTest(model.model, {
            verbose: true,
            includeTest: true,
            float16weights: false,
            optimize: true,
        })
        console.log(armcompiled)*/
        // use armcompiled.machineCode
        // Update model status

        model.status = "completed";
        model.trainingAcc = trainingHistory[trainingHistory.length - 1];
        handleModelUpdate(model);
        setTrainEnabled(true);
      } else {
        model.status = "idle";
        handleModelUpdate(model);
      }
    });

    return function trainTFModel() {
      return _ref.apply(this, arguments);
    };
  }();
  /* For page management */


  var handleNext = () => {
    onNext(model);
  };

  var handleModelUpdate = model => {
    onChange(model);
  };

  var [expanded, setExpanded] = react.useState(false);

  var handleExpandedSummaryChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!pageReady) return null;
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement("h3", null, "Model Summary"), /*#__PURE__*/react.createElement(Accordion/* default */.Z, {
    expanded: expanded === "modelSummary",
    onChange: handleExpandedSummaryChange("modelSummary")
  }, /*#__PURE__*/react.createElement(AccordionSummary/* default */.Z, {
    expandIcon: /*#__PURE__*/react.createElement(ExpandMore/* default */.Z, null)
  }, /*#__PURE__*/react.createElement("div", null, expanded !== "modelSummary" && /*#__PURE__*/react.createElement("span", null, "Classes: ", model.labels.join(", "), " ", /*#__PURE__*/react.createElement("br", null), "Training Status: ", model.status, " ", /*#__PURE__*/react.createElement("br", null)))), /*#__PURE__*/react.createElement(AccordionDetails/* default */.Z, null, /*#__PURE__*/react.createElement("div", null, dataset.summary.map((line, lineIdx) => {
    return /*#__PURE__*/react.createElement("span", {
      key: "dataset-summary-" + lineIdx
    }, " ", line, " ", /*#__PURE__*/react.createElement("br", null));
  }), model.summary.map((line, lineIdx) => {
    return /*#__PURE__*/react.createElement("span", {
      key: "model-summary-" + lineIdx
    }, " ", line, " ", /*#__PURE__*/react.createElement("br", null));
  })))), /*#__PURE__*/react.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    size: "large",
    variant: "contained",
    "aria-label": "delete existing model",
    title: "Press to delete the machine learning model you have now",
    onClick: deleteTFModel,
    startIcon: /*#__PURE__*/react.createElement(Delete/* default */.Z, null),
    style: {
      marginTop: 16
    }
  }, "Delete Model")), /*#__PURE__*/react.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    size: "large",
    variant: "contained",
    color: "primary",
    "aria-label": "start training model",
    title: trainEnabled ? "Press to start training machine learning model" : "You must have at least two classes to train a model. Go back to first tab.",
    onClick: trainTFModel,
    startIcon: /*#__PURE__*/react.createElement(PlayArrow/* default */.Z, null),
    disabled: !trainEnabled,
    style: {
      marginTop: 16
    }
  }, "Train Model")), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement("h3", null, "Training Results"), !!trainingLogs.length && /*#__PURE__*/react.createElement("div", {
    key: "liveData"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(FiberManualRecord/* default */.Z, {
    className: classes.vmiddle,
    fontSize: "small",
    style: {
      color: ACC_COLOR
    }
  }), "Accuracy", /*#__PURE__*/react.createElement(FiberManualRecord/* default */.Z, {
    className: classes.vmiddle,
    fontSize: "small",
    style: {
      color: LOSS_COLOR
    }
  }), "Loss", /*#__PURE__*/react.createElement(Trend/* default */.Z, {
    key: "training-trends",
    height: 12,
    dataSet: trainingLogs,
    horizon: NUM_EPOCHS,
    dot: true,
    gradient: true
  }))), /*#__PURE__*/react.createElement("p", null, "Final Training Accuracy: ", model.trainingAcc), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "contained",
    color: "secondary",
    endIcon: /*#__PURE__*/react.createElement(NavigateNext/* default */.Z, null),
    disabled: model.status !== "completed",
    onClick: handleNext
  }, "Next"))));
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__(91635);
;// CONCATENATED MODULE: ./src/components/model-editor/ModelOutput.tsx




 // tslint:disable-next-line: match-default-export-name no-submodule-imports















var ModelOutput_LIVE_HORIZON = 100;

function ModelOutput_createDataSet(bus, registers, name, palette) {
  var fields = (0,utils/* arrayConcatMany */.ue)(registers.map(reg => reg.fields));
  var colors = fields.map((f, i) => palette[i % palette.length]);
  var set = new FieldDataSet/* default */.ZP(bus, name, fields, colors);
  set.maxRows = ModelOutput_LIVE_HORIZON + 4;
  return set;
}

function ModelOutput(props) {
  var classes = props.reactStyle;
  var {
    chartPalette
  } = props;
  var {
    0: model
  } = (0,react.useState)(props.model);
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var readingRegisters = (0,useChange/* default */.Z)(bus, bus => (0,utils/* arrayConcatMany */.ue)(bus.devices().map(device => device.services().filter(srv => (0,spec/* isSensor */.rq)(srv.specification)).map(srv => srv.readingRegister))));

  var isBuzzer = spec => {
    return spec.shortId == "buzzer"; //ledmatrix soundplayer
  };

  var buzzerServices = (0,useChange/* default */.Z)(bus, bus => (0,utils/* arrayConcatMany */.ue)(bus.devices().map(device => device.services().filter(srv => isBuzzer(srv.specification)))));
  var {
    0: pageReady,
    1: setPageReady
  } = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (!pageReady) {
      prepareTestingLogs();
      setPageReady(true);
    }
  }, []);
  /* For loading page */

  var prepareTestingLogs = () => {
    // Create space to hold prediction data
    var livePredictionDataSet = {
      name: "live-predictions",
      rows: [],
      headers: model.labels,
      units: model.labels.map(() => {
        return "/";
      }),
      colors: model.labels.map((label, idx) => chartPalette[idx % chartPalette.length])
    };
    setLivePredictions({
      predictionData: FieldDataSet/* default.createFromFile */.ZP.createFromFile(livePredictionDataSet),
      topClass: model.labels[0]
    });
  };
  /* For predicting with model */


  var {
    0: liveRecording,
    1: setLiveRecording
  } = (0,react.useState)(undefined);
  var {
    1: setLiveDataTimestamp
  } = (0,react.useState)(0);
  var {
    0: registerIdsChecked,
    1: setRegisterIdsChecked
  } = (0,react.useState)([]);
  var {
    0: livePredictions,
    1: setLivePredictions
  } = (0,react.useState)({
    predictionData: undefined,
    topClass: ""
  });
  var recordingRegisters = readingRegisters.filter(reg => registerIdsChecked.indexOf(reg.id) > -1);

  var liveRecordingMatchesModel = () => {
    if (liveRecording) {
      var matchingInputs = true;

      if (model.inputTypes) {
        if (!arraysEqual(model.inputTypes, liveRecording.headers)) {
          matchingInputs = false;
        }
      }

      return matchingInputs;
    }

    return false;
  };

  var predictionEnabled = !!(recordingRegisters !== null && recordingRegisters !== void 0 && recordingRegisters.length) && liveRecordingMatchesModel() && model.status == "completed";

  var handleRegisterCheck = reg => {
    var i = registerIdsChecked.indexOf(reg.id);
    if (i > -1) registerIdsChecked.splice(i, 1);else registerIdsChecked.push(reg.id);
    registerIdsChecked.sort();
    setRegisterIdsChecked((0,toConsumableArray/* default */.Z)(registerIdsChecked));
    setLiveRecording(newRecording(registerIdsChecked));
  };

  var newRecording = registerIds => registerIds.length ? ModelOutput_createDataSet(bus, readingRegisters.filter(reg => registerIds.indexOf(reg.id) > -1), "liveData", chartPalette) : undefined;

  var updateLiveData = () => {
    setLiveRecording(liveRecording);
    setLiveDataTimestamp(bus.timestamp);
    if (model.status == "completed") updatePrediction();
  };

  var throttleUpdate = (0,utils/* throttle */.P2)(() => updateLiveData(), 30); // interval add data entry

  var addRow = values => {
    if (liveRecording) {
      liveRecording.addRow(values);
      throttleUpdate();
    }
  };

  var startStreamingRegisters = () => {
    console.log("start streaming");
    var streamers = recordingRegisters === null || recordingRegisters === void 0 ? void 0 : recordingRegisters.map(reg => reg.subscribe(constants/* REPORT_UPDATE */.rGZ, () => {}));
    return () => {
      console.log("stop streaming");
      streamers.map(streamer => streamer());
    };
  };

  var updatePrediction = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      // Use the model to do inference on a data point the model hasn't seen before:
      if (!predictionEnabled) return;
      var data = liveRecording.data();
      data = data.slice(data.length - model.inputShape[0]);
      var liveInput = [data];
      var topIdx = 0;

      if (data && data.length >= model.inputShape[0]) {
        var liveOutput = []; // Get probability values from model

        var predictMsg = {
          worker: "tf",
          type: "predict",
          data: {
            zData: liveInput,
            model: model.toJSON()
          }
        };
        var predResult = yield predictRequest(predictMsg); // Save probability for each class in model object

        var prediction = predResult.data.prediction;
        model.labels.forEach((label, idx) => {
          liveOutput.push(prediction[idx]); // update which class has highest confidence

          if (liveOutput[idx] > liveOutput[topIdx]) topIdx = idx;
        });
        livePredictions.predictionData.addData(liveOutput);
        livePredictions.topClass = model.labels[topIdx];
      }
    });

    return function updatePrediction() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react.useEffect)(() => {
    var interval = setInterval(() => addRow(), 100); // Randi TODO decide if sampling interval should be constant in dataset? dataset.samplingInterval)

    var stopStreaming = startStreamingRegisters();
    return () => {
      clearInterval(interval);
      stopStreaming();
    };
  }, [registerIdsChecked]);
  /* For tying prediction to action */

  (0,react.useEffect)(() => {
    var interval;

    if (predictionEnabled) {
      executePrediction();
      interval = setInterval(() => executePrediction(), 1300);
    }

    return () => clearInterval(interval);
  }, [predictionEnabled]);

  var playNote = note => {
    var noteFreqs = {
      C: 261,
      E: 329,
      F: 349,
      G: 391,
      A: 440,
      B: 493,
      C2: 523,
      D2: 587
    };

    if (buzzerServices.length) {
      buzzerServices.forEach(service => {
        var period = 1000000 / noteFreqs[note];
        var duty = period / 2;
        var duration = 400;
        var data = (0,pack/* jdpack */.AV)("u16 u16 u16", [period, duty, duration]);
        service.sendCmdAsync(constants/* BuzzerCmd.PlayTone */.Rv2.PlayTone, data);
      });
    }
  };

  var executePrediction = () => {
    if (predictionEnabled && livePredictions.predictionData.rows) {
      switch (livePredictions.topClass) {
        case "one":
          playNote("C");
          playNote("E");
          playNote("G");
          break;

        case "four":
          playNote("F");
          playNote("A");
          playNote("C2");
          break;

        case "five":
          playNote("G");
          playNote("B");
          playNote("D2");
          break;

        default:
          break;
      }
    }
  };

  var [expanded, setExpanded] = react.useState(false);

  var handleExpandedSummaryChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!pageReady) return null;
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement("h3", null, "Live Testing"), /*#__PURE__*/react.createElement("div", {
    key: "predict"
  }, /*#__PURE__*/react.createElement("span", null, " ", "Top Class:", " ", model.status == "completed" ? livePredictions.topClass : "--", " "), /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("div", {
    key: "liveData"
  }, liveRecording && /*#__PURE__*/react.createElement("div", null, model.labels.map(label => {
    return /*#__PURE__*/react.createElement("span", {
      key: "prediction-key-" + label
    }, /*#__PURE__*/react.createElement(FiberManualRecord/* default */.Z, {
      className: classes.vmiddle,
      fontSize: "small",
      style: {
        color: livePredictions.predictionData.colorOf(undefined, label)
      }
    }), label);
  }), /*#__PURE__*/react.createElement(Trend/* default */.Z, {
    key: "live-data-predictions",
    height: 12,
    dataSet: livePredictions.predictionData,
    horizon: ModelOutput_LIVE_HORIZON,
    dot: true,
    gradient: true
  }), /*#__PURE__*/react.createElement(Trend/* default */.Z, {
    key: "live-data-trends",
    height: 12,
    dataSet: liveRecording,
    horizon: ModelOutput_LIVE_HORIZON,
    dot: true,
    gradient: true
  }))), /*#__PURE__*/react.createElement(Accordion/* default */.Z, {
    expanded: expanded === "chooseSensors",
    onChange: handleExpandedSummaryChange("chooseSensors")
  }, /*#__PURE__*/react.createElement(AccordionSummary/* default */.Z, {
    expandIcon: /*#__PURE__*/react.createElement(ExpandMore/* default */.Z, null)
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h4", null, "Select input sensors"), !predictionEnabled && /*#__PURE__*/react.createElement("p", null, "Sensors should match:", " ", model.inputTypes.join(", "), " "))), /*#__PURE__*/react.createElement(AccordionDetails/* default */.Z, null, /*#__PURE__*/react.createElement("div", {
    key: "sensors"
  }, !readingRegisters.length && /*#__PURE__*/react.createElement("span", null, "Waiting for sensors..."), !!readingRegisters.length && /*#__PURE__*/react.createElement(ReadingFieldGrid/* default */.Z, {
    readingRegisters: readingRegisters,
    registerIdsChecked: registerIdsChecked,
    recording: false,
    liveDataSet: liveRecording,
    handleRegisterCheck: handleRegisterCheck
  }))))));
}
;// CONCATENATED MODULE: ./src/components/model-editor/ModelEditor.tsx










 //Dashboard.tsx

var MODEL_EDITOR = "model_editor"; // create prefix for model editor page

var MODEL_NAME = MODEL_EDITOR + "-model";
var MODEL_EDITOR_STORAGE_KEY = "model-editor-data-json";
var useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  root: {
    marginBottom: theme.spacing(1)
  },
  grow: {
    flexGrow: 1
  },
  field: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
    display: "inline-flex",
    width: theme.spacing(35)
  },
  segment: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  row: {
    marginBottom: theme.spacing(0.5)
  },
  buttons: {
    display: "inline-flex",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  trend: {
    width: theme.spacing(10)
  },
  vmiddle: {
    verticalAlign: "middle"
  }
}));
function ModelPlayground() {
  var classes = useStyles();
  var chartPalette = (0,useChartPalette/* default */.Z)();
  var {
    0: dataset,
    1: setDataSet
  } = (0,react.useState)(new ModelDataSet());
  var {
    0: tfModel,
    1: setTFModel
  } = (0,react.useState)(new MBModel(MODEL_NAME));
  var {
    0: tab,
    1: setTab
  } = (0,react.useState)(0);
  var {
    0: pageReady,
    1: setPageReady
  } = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (!pageReady) {
      var storedDataJSON = localStorage.getItem(MODEL_EDITOR_STORAGE_KEY);

      if (storedDataJSON) {
        var modelEditorData = JSON.parse(storedDataJSON);
        if (modelEditorData["dataset"]) setDataSet(ModelDataSet.createFromFile(modelEditorData["dataset"]));
        if (modelEditorData["tab"]) setTab(modelEditorData["tab"]);

        if (modelEditorData["model"]) {
          MBModel.createFromFile(modelEditorData["model"]).then(storedModel => {
            setTFModel(storedModel);
            setPageReady(true);
          });
        } else {
          setPageReady(true);
        }
      } else setPageReady(true);
    }
  }, []);
  /* Data and interface management */

  var handleTabChange = (event, newTab) => {
    var storedDataJSON = localStorage.getItem(MODEL_EDITOR_STORAGE_KEY);
    var modelEditorData;

    if (storedDataJSON) {
      // keep previous dataset and model data
      modelEditorData = JSON.parse(storedDataJSON);
      modelEditorData["tab"] = newTab;
    } else {
      modelEditorData = {
        dataset: undefined,
        model: undefined,
        tab: newTab
      };
    } // save JSON string in local storage


    localStorage.setItem(MODEL_EDITOR_STORAGE_KEY, JSON.stringify(modelEditorData));
    setTab(newTab);
  };

  var handleDataChange = newDataSet => {
    console.log("Randi updated data from tab 0: ", newDataSet);
    var storedDataJSON = localStorage.getItem(MODEL_EDITOR_STORAGE_KEY);
    var modelEditorData;

    if (storedDataJSON) {
      // keep previous model and tab data
      modelEditorData = JSON.parse(storedDataJSON);
      modelEditorData["dataset"] = newDataSet;
    } else {
      modelEditorData = {
        dataset: newDataSet,
        model: undefined,
        tab: 0
      };
    } // save JSON string in local storage


    localStorage.setItem(MODEL_EDITOR_STORAGE_KEY, JSON.stringify(modelEditorData));
    setDataSet(newDataSet);
  };

  var handleModelChange = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* (newModel) {
      console.log("Randi updated model from tab 1: ", newModel);
      var storedDataJSON = localStorage.getItem(MODEL_EDITOR_STORAGE_KEY);
      var modelEditorData;

      if (storedDataJSON) {
        // keep previous dataset and tab data
        modelEditorData = JSON.parse(storedDataJSON);
        modelEditorData["model"] = newModel;
      } else {
        modelEditorData = {
          dataset: undefined,
          model: newModel,
          tab: 0
        };
      } // save JSON string in local storage


      console.log("Randi storing new model JSON: ", newModel);
      localStorage.setItem(MODEL_EDITOR_STORAGE_KEY, JSON.stringify(modelEditorData));
      setTFModel(newModel);
    });

    return function handleModelChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var nextTab = () => {
    if (tab == 0 && dataset.labels.length >= 2) {
      setTab(1);
    } else if (tab == 1 && tfModel.status == "completed") {
      setTab(2);
    }
  };

  if (!pageReady) return null;
  return /*#__PURE__*/react.createElement(Box/* default */.Z, {
    mb: 2
  }, /*#__PURE__*/react.createElement("h1", null, "ML Model Creator"), /*#__PURE__*/react.createElement("p", null, "This page allows you to collect data from Jacdac sensors and use them to train a neural network model that does classification."), /*#__PURE__*/react.createElement(Tabs/* default */.Z, {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "View specification formats"
  }, /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "1 - Collect Data"
  }), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "2 - Train Model",
    disabled: dataset.labels.length < 2
  }), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "3 - Test Model",
    disabled: dataset.labels.length < 2 || tfModel.status !== "completed"
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 0
  }, /*#__PURE__*/react.createElement(CollectData, {
    reactStyle: classes,
    chartPalette: chartPalette,
    dataset: dataset,
    onChange: handleDataChange,
    onNext: nextTab
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 1
  }, /*#__PURE__*/react.createElement(TrainModel, {
    reactStyle: classes,
    dataset: dataset,
    model: tfModel,
    onChange: handleModelChange,
    onNext: nextTab
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 2
  }, /*#__PURE__*/react.createElement(ModelOutput, {
    reactStyle: classes,
    chartPalette: chartPalette,
    model: tfModel
  })));
}
;// CONCATENATED MODULE: ./src/pages/tools/model-editor.tsx


function Page() {
  return /*#__PURE__*/react.createElement(ModelPlayground, null);
}

/***/ })

}]);