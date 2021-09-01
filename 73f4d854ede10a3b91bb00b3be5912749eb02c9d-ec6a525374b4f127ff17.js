"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8044],{

/***/ 4998:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Chip_Chip; }
});

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(27490);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(47895);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(6018);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/Cancel.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var Cancel = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/react.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(37595);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(11291);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(81664);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(67055);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js











var styles = function styles(theme) {
  var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, 0.26);
  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: 32 / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      textDecoration: 'none',
      border: 'none',
      // Remove `button` border
      padding: 0,
      // Remove `button` padding
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      '&$disabled': {
        opacity: 0.5,
        pointerEvents: 'none'
      },
      '& $avatar': {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(12)
      },
      '& $avatarColorPrimary': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark
      },
      '& $avatarColorSecondary': {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.dark
      },
      '& $avatarSmall': {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: theme.typography.pxToRem(10)
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      height: 24
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
    clickable: {
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1]
      }
    },

    /* Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
    clickableColorPrimary: {
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.primary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
    clickableColorSecondary: {
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.secondary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(backgroundColor, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
    deletableColorPrimary: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.primary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
    deletableColorSecondary: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.secondary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      backgroundColor: 'transparent',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, theme.palette.action.hoverOpacity)
      },
      '& $avatar': {
        marginLeft: 4
      },
      '& $avatarSmall': {
        marginLeft: 2
      },
      '& $icon': {
        marginLeft: 4
      },
      '& $iconSmall': {
        marginLeft: 2
      },
      '& $deleteIcon': {
        marginRight: 5
      },
      '& $deleteIconSmall': {
        marginRight: 3
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(theme.palette.primary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
      }
    },
    // TODO v5: remove

    /* Styles applied to the `avatar` element. */
    avatar: {},

    /* Styles applied to the `avatar` element if `size="small"`. */
    avatarSmall: {},

    /* Styles applied to the `avatar` element if `color="primary"`. */
    avatarColorPrimary: {},

    /* Styles applied to the `avatar` element if `color="secondary"`. */
    avatarColorSecondary: {},

    /* Styles applied to the `icon` element. */
    icon: {
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      marginLeft: 5,
      marginRight: -6
    },

    /* Styles applied to the `icon` element if `size="small"`. */
    iconSmall: {
      width: 18,
      height: 18,
      marginLeft: 4,
      marginRight: -4
    },

    /* Styles applied to the `icon` element if `color="primary"`. */
    iconColorPrimary: {
      color: 'inherit'
    },

    /* Styles applied to the `icon` element if `color="secondary"`. */
    iconColorSecondary: {
      color: 'inherit'
    },

    /* Styles applied to the label `span` element. */
    label: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingLeft: 12,
      paddingRight: 12,
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the label `span` element if `size="small"`. */
    labelSmall: {
      paddingLeft: 8,
      paddingRight: 8
    },

    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      height: 22,
      width: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: (0,colorManipulator/* alpha */.Fq)(deleteIconColor, 0.4)
      }
    },

    /* Styles applied to the `deleteIcon` element if `size="small"`. */
    deleteIconSmall: {
      height: 16,
      width: 16,
      marginRight: 4,
      marginLeft: -4
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="default"`. */
    deleteIconColorPrimary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="default"`. */
    deleteIconColorSecondary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.secondary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
    deleteIconOutlinedColorPrimary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.main
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
    deleteIconOutlinedColorSecondary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.secondary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.main
      }
    }
  };
};

function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */


var Chip = /*#__PURE__*/react.forwardRef(function Chip(props, ref) {
  var avatarProp = props.avatar,
      classes = props.classes,
      className = props.className,
      clickableProp = props.clickable,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      ComponentProp = props.component,
      deleteIconProp = props.deleteIcon,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      iconProp = props.icon,
      label = props.label,
      onClick = props.onClick,
      onDelete = props.onDelete,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'default' : _props$variant,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"]);

  var chipRef = react.useRef(null);
  var handleRef = (0,useForkRef/* default */.Z)(chipRef, ref);

  var handleDeleteIconClick = function handleDeleteIconClick(event) {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();

    if (onDelete) {
      onDelete(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleKeyUp = function handleKeyUp(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === 'Escape' && chipRef.current) {
        chipRef.current.blur();
      }
    }

    if (onKeyUp) {
      onKeyUp(event);
    }
  };

  var clickable = clickableProp !== false && onClick ? true : clickableProp;
  var small = size === 'small';
  var Component = ComponentProp || (clickable ? ButtonBase/* default */.Z : 'div');
  var moreProps = Component === ButtonBase/* default */.Z ? {
    component: 'div'
  } : {};
  var deleteIcon = null;

  if (onDelete) {
    var customClasses = (0,clsx_m/* default */.Z)(color !== 'default' && (variant === "default" ? classes["deleteIconColor".concat((0,capitalize/* default */.Z)(color))] : classes["deleteIconOutlinedColor".concat((0,capitalize/* default */.Z)(color))]), small && classes.deleteIconSmall);
    deleteIcon = deleteIconProp && /*#__PURE__*/react.isValidElement(deleteIconProp) ? /*#__PURE__*/react.cloneElement(deleteIconProp, {
      className: (0,clsx_m/* default */.Z)(deleteIconProp.props.className, classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    }) : /*#__PURE__*/react.createElement(Cancel, {
      className: (0,clsx_m/* default */.Z)(classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    });
  }

  var avatar = null;

  if (avatarProp && /*#__PURE__*/react.isValidElement(avatarProp)) {
    avatar = /*#__PURE__*/react.cloneElement(avatarProp, {
      className: (0,clsx_m/* default */.Z)(classes.avatar, avatarProp.props.className, small && classes.avatarSmall, color !== 'default' && classes["avatarColor".concat((0,capitalize/* default */.Z)(color))])
    });
  }

  var icon = null;

  if (iconProp && /*#__PURE__*/react.isValidElement(iconProp)) {
    icon = /*#__PURE__*/react.cloneElement(iconProp, {
      className: (0,clsx_m/* default */.Z)(classes.icon, iconProp.props.className, small && classes.iconSmall, color !== 'default' && classes["iconColor".concat((0,capitalize/* default */.Z)(color))])
    });
  }

  if (false) {}

  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    role: clickable || onDelete ? 'button' : undefined,
    className: (0,clsx_m/* default */.Z)(classes.root, className, color !== 'default' && [classes["color".concat((0,capitalize/* default */.Z)(color))], clickable && classes["clickableColor".concat((0,capitalize/* default */.Z)(color))], onDelete && classes["deletableColor".concat((0,capitalize/* default */.Z)(color))]], variant !== "default" && [classes.outlined, {
      'primary': classes.outlinedPrimary,
      'secondary': classes.outlinedSecondary
    }[color]], disabled && classes.disabled, small && classes.sizeSmall, clickable && classes.clickable, onDelete && classes.deletable),
    "aria-disabled": disabled ? true : undefined,
    tabIndex: clickable || onDelete ? 0 : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef
  }, moreProps, other), avatar || icon, /*#__PURE__*/react.createElement("span", {
    className: (0,clsx_m/* default */.Z)(classes.label, small && classes.labelSmall)
  }, label), deleteIcon);
});
 false ? 0 : void 0;
/* harmony default export */ var Chip_Chip = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiChip'
})(Chip));

/***/ }),

/***/ 88880:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

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
  return typeof Window !== "undefined" && new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(8213), __webpack_require__.b // syntax not supported in typescript
  ));
}
;// CONCATENATED MODULE: ./src/workers/data/workerloader.js
function createDataWorker() {
  return typeof Window !== "undefined" && new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(2066), __webpack_require__.b // syntax not supported in typescript
  ));
}
;// CONCATENATED MODULE: ./src/workers/tf/workerloader.js
function createTFWorker() {
  return typeof Window !== "undefined" && new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(7885), __webpack_require__.b // syntax not supported in typescript
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

/***/ 83808:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yA": function() { return /* binding */ compileRequest; },
/* harmony export */   "_S": function() { return /* binding */ trainRequest; },
/* harmony export */   "iE": function() { return /* binding */ predictRequest; }
/* harmony export */ });
/* unused harmony export postModelRequest */
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73108);
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66037);


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

function compileRequest(_x2) {
  return _compileRequest.apply(this, arguments);
}

function _compileRequest() {
  _compileRequest = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(function* (message) {
    if (!message.data.model || !message.data.modelBlockJSON) {
      console.error("Missing piece of message data for compiling ", message.data);
      return undefined;
    }

    var worker = (0,_proxy__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)("tf");
    var res = yield worker.postMessage(message);
    return res;
  });
  return _compileRequest.apply(this, arguments);
}

function trainRequest(_x3) {
  return _trainRequest.apply(this, arguments);
}

function _trainRequest() {
  _trainRequest = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(function* (message) {
    if (!message.data.model || !message.data.trainingParams || !message.data.xData || !message.data.yData) {
      console.error("Missing piece of message data for training ", message.data);
      return undefined;
    }

    var worker = (0,_proxy__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)("tf");
    var res = yield worker.postMessage(message);
    return res;
  });
  return _trainRequest.apply(this, arguments);
}

function predictRequest(_x4) {
  return _predictRequest.apply(this, arguments);
}

function _predictRequest() {
  _predictRequest = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(function* (message) {
    if (!message.data.model || !message.data.zData) {
      console.error("Missing piece of message data for predicting ", message.data);
      return undefined;
    }

    var worker = (0,_proxy__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)("tf");
    var res = yield worker.postMessage(message);
    return res;
  });
  return _predictRequest.apply(this, arguments);
}

/***/ }),

/***/ 99941:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cO": function() { return /* binding */ arraysEqual; },
/* harmony export */   "dP": function() { return /* binding */ validDataSetJSON; },
/* harmony export */   "ZP": function() { return /* binding */ MBDataSet; }
/* harmony export */ });
/* unused harmony export DataSet */
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53719);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85413);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45484);
/* harmony import */ var _FieldDataSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64616);





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
function validDataSetJSON(blockJSON) {
  var _firstLayer$children;

  var warnings = {};
  var classNames = []; // don't check empty block JSON

  if (!blockJSON) return undefined; // 1. make sure there is at least one recording

  var firstLayer = blockJSON.inputs.filter(input => input.name == "LAYER_INPUTS")[0].child;

  if (!firstLayer) {
    warnings[blockJSON.id] = "Valid datasets should contain recording blocks";
    return warnings;
  } // the first recording block determines the input type


  var inputTypes = firstLayer.inputs[0].fields.expand_button.value.inputTypes;
  classNames.push(firstLayer.inputs[0].fields.class_name.value);
  (_firstLayer$children = firstLayer.children) === null || _firstLayer$children === void 0 ? void 0 : _firstLayer$children.forEach(childBlock => {
    // 2. make sure subsequent recordings have the same input type as the first recording
    var recordingInputTypes = childBlock.inputs[0].fields.expand_button.value.inputTypes;

    if (!arraysEqual(recordingInputTypes, inputTypes)) {
      warnings[childBlock.id] = "Recording does not match dataset input type";
    }

    var className = childBlock.inputs[0].fields.class_name.value;
    if (classNames.indexOf(className) < 0) classNames.push(className);
  }); // 3. make sure there are at least two classes in the dataset

  if (classNames.length < 2) warnings[blockJSON.id] = "Valid datasets should contain at least two different class labels";
  return warnings;
}

var MBDataSet = /*#__PURE__*/function (_JDEventSource) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(MBDataSet, _JDEventSource);

  MBDataSet.createFromFile = function createFromFile(name, datasetJSONObj) {
    var set = new MBDataSet(name);
    var {
      recordings,
      registerIds
    } = datasetJSONObj;
    set.addRecordingsFromFile(recordings, registerIds); // add recordings and update total recordings

    return set;
  } // maintain computed number of recordings and input data types to avoid recomputation
  ;

  function MBDataSet(name, labels, recordings, inputTypes) {
    var _this;

    _this = _JDEventSource.call(this) || this;
    _this.name = name;
    _this.labels = labels;
    _this.recordings = recordings;
    _this.inputTypes = inputTypes;
    _this.name = name;
    _this.labels = labels || [];
    _this.recordings = recordings || {};
    _this.totalRecordings = _this.countTotalRecordings();
    _this.inputTypes = inputTypes || [];
    return _this;
  }

  var _proto = MBDataSet.prototype;

  _proto.getRecordingsWithLabel = function getRecordingsWithLabel(label) {
    return this.recordings[label];
  };

  _proto.addRecording = function addRecording(recording, label, registerIds) {
    if (this.totalRecordings == 0) {
      // the first recording added to the dataset determines its parameters
      this.labels.push(label);
      this.recordings[label] = [recording];
      this.inputTypes = recording.headers;
      this.interval = recording.interval;
      this.registerIds = registerIds;
      this.totalRecordings += 1;
      this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHANGE */ .Ver);
    } else if (arraysEqual(recording.headers, this.inputTypes)) {
      // Check if label is already in dataset
      if (this.labels.indexOf(label) < 0) {
        // If not, add the new label to the dataset
        this.labels.push(label);
        this.recordings[label] = [recording];
      } else {
        this.recordings[label].push(recording);
      }

      this.totalRecordings += 1;
      this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHANGE */ .Ver);
    } else {
      console.error("Cannot add data of type " + recording.headers + " to dataset with types " + this.inputTypes);
    }
  };

  _proto.addRecordingsFromFile = function addRecordingsFromFile(recordings, registerIds) {
    //totalRecordings
    Object.keys(recordings).forEach(label => {
      recordings[label].forEach(recording => {
        var set = _FieldDataSet__WEBPACK_IMPORTED_MODULE_2__/* .default.createFromFile */ .ZP.createFromFile(recording);
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
    var recordingIntervalHeader = "Interval," + this.interval;
    var recordingData = [];
    this.labels.forEach(label => {
      this.recordings[label].forEach(recording => {
        recordingData.push("Recording metadata," + recording.name + "," + recording.rows.length + "," + label);
        recordingData.push(recording.toCSV());
      });
    });
    var recordData = recordingData.join("\n");
    var csv = [recordingCountHeader, recordingIntervalHeader, recordData];
    return csv.join("\n");
  };

  _proto.toJSON = function toJSON() {
    var datasetObj = {
      recordings: this.recordings,
      reigsterIds: this.registerIds,
      name: this.name
    };
    return datasetObj;
  };

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(MBDataSet, [{
    key: "labelOptions",
    get: function get() {
      if (this.labels.length == 0) return ["class1"];
      return this.labels;
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

  return MBDataSet;
}(_jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP);



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

/***/ })

}]);
//# sourceMappingURL=73f4d854ede10a3b91bb00b3be5912749eb02c9d-ec6a525374b4f127ff17.js.map