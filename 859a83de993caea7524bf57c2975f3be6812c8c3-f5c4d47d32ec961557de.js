"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5910],{

/***/ 50144:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34621);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38582);






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      minWidth: 56,
      color: theme.palette.action.active,
      flexShrink: 0,
      display: 'inline-flex'
    },

    /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      marginTop: 8
    }
  };
};
/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */

var ListItemIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListItemIcon(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["classes", "className"]);

  var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.root, className, context.alignItems === 'flex-start' && classes.alignItemsFlexStart),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(styles, {
  name: 'MuiListItemIcon'
})(ListItemIcon));

/***/ }),

/***/ 38030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34621);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80453);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38582);







var styles = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },

  /* Styles applied to the `Typography` components if primary and secondary are set. */
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },

  /* Styles applied to the `Typography` components if dense. */
  dense: {},

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 56
  },

  /* Styles applied to the primary `Typography` component. */
  primary: {},

  /* Styles applied to the secondary `Typography` component. */
  secondary: {}
};
var ListItemText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListItemText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      primaryProp = props.primary,
      primaryTypographyProps = props.primaryTypographyProps,
      secondaryProp = props.secondary,
      secondaryTypographyProps = props.secondaryTypographyProps,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      dense = _React$useContext.dense;

  var primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== _Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z && !disableTypography) {
    primary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }

  var secondary = secondaryProp;

  if (secondary != null && secondary.type !== _Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z && !disableTypography) {
    secondary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(styles, {
  name: 'MuiListItemText'
})(ListItemText));

/***/ }),

/***/ 35966:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34621);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81664);






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      boxSizing: 'border-box',
      lineHeight: '48px',
      listStyle: 'none',
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the root element if `inset={true}`. */
    inset: {
      paddingLeft: 72
    },

    /* Styles applied to the root element if `disableSticky={false}`. */
    sticky: {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor: 'inherit'
    }
  };
};
var ListSubheader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListSubheader(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$disableSticky = props.disableSticky,
      disableSticky = _props$disableSticky === void 0 ? false : _props$disableSticky,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["classes", "className", "color", "component", "disableGutters", "disableSticky", "inset"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(classes.root, className, color !== 'default' && classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(color))], inset && classes.inset, !disableSticky && classes.sticky, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(styles, {
  name: 'MuiListSubheader'
})(ListSubheader));

/***/ }),

/***/ 15029:
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
  d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
}), 'HourglassEmpty');

exports.Z = _default;

/***/ }),

/***/ 35650:
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
}), 'PlayCircleFilled');

exports.Z = _default;

/***/ }),

/***/ 92671:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ getTestCommandFunctions; },
/* harmony export */   "V": function() { return /* binding */ getTestExpressionFunctions; }
/* harmony export */ });
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="jdtest.d.ts" />
function getTestCommandFunctions() {
  return testFunctions.filter(function (f) {
    return f.context === "command" || f.context === "either";
  });
}
function getTestExpressionFunctions() {
  return testFunctions.filter(function (f) {
    return f.context === "expression" || f.context === "either";
  });
}
var testFunctions = [{
  id: "changes",
  args: ["register"],
  prompt: "check that {1} changes",
  context: "command"
}, {
  id: "ask",
  args: [],
  prompt: undefined,
  context: "command"
}, {
  id: "events",
  args: ["events"],
  prompt: "check that events {1} are observed",
  context: "command"
}, {
  id: "awaitEvent",
  args: ["event", ["boolean", true]],
  prompt: "wait for event {1} and then check {2} (other events ignored)",
  context: "command"
}, {
  id: "nextEvent",
  args: ["event", ["boolean", true]],
  prompt: "next event must be {1}, then check {2}",
  context: "command"
}, {
  id: "assign",
  args: ["register", "number"],
  prompt: "write value {2:val} to {1}",
  context: "command"
}, {
  id: "check",
  args: ["boolean"],
  prompt: "check that {1}",
  context: "command"
}, {
  id: "increases",
  args: ["register"],
  prompt: "check that {1} increases",
  context: "command"
}, {
  id: "decreases",
  args: ["register"],
  prompt: "check that {1} decreases",
  context: "command"
}, {
  id: "increasesBy",
  args: ["register", "number"],
  prompt: "check that  {1} (initially {1:val}) increases by {2:val}",
  context: "command"
}, {
  id: "decreasesBy",
  args: ["register", "number"],
  prompt: "check that {1} (initially {1:val}) decreases by {2:val}",
  context: "command"
}, {
  id: "stepsUpTo",
  args: ["register", "number"],
  prompt: "{1} should step up (by ones) from {1:val} to {2:val}",
  context: "command"
}, {
  id: "stepsDownTo",
  args: ["register", "number"],
  prompt: "{1} should step down (by ones) from {1:val} to {2:val}",
  context: "command"
}, {
  id: "start",
  args: ["any"],
  prompt: undefined,
  context: "expression"
}, {
  id: "closeTo",
  args: ["number", "number", "number"],
  prompt: "evaluate {1} until it is close to {2:val}, as given by error {3:val}",
  context: "either"
}];

/***/ }),

/***/ 1797:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": function() { return /* binding */ VMServiceClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85413);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);
/* harmony import */ var _jdom_serviceclient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56763);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71815);
/* harmony import */ var _jdom_pack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91635);







var VMServiceClient = /*#__PURE__*/function (_JDServiceClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(VMServiceClient, _JDServiceClient);

  function VMServiceClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    _this._registers = {};
    _this._reportUpdate = {};
    _this._events = {};
    return _this;
  }

  var _proto = VMServiceClient.prototype;

  _proto.registerRegister = function registerRegister(regName, handler) {
    if (!this._registers[regName]) {
      var pkt = this.service.specification.packets.find(function (pkt) {
        return (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isRegister */ .x5)(pkt) && pkt.name === regName;
      });

      if (pkt) {
        var register = this.service.register(pkt.identifier);
        this._registers[regName] = register;
        this.mount(register.subscribe(_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHANGE */ .Ver, handler));
      }
    }
  };

  _proto.registerEvent = function registerEvent(eventName, handler) {
    if (!this._events[eventName]) {
      var pkt = this.service.specification.packets.find(function (pkt) {
        return (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isEvent */ .cO)(pkt) && pkt.name === eventName;
      });

      if (pkt) {
        var event = this.service.event(pkt.identifier);
        this._events[eventName] = event;
        this.mount(event.subscribe(_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT */ .Ks0, handler));
      }
    }
  };

  _proto.sendCommandAsync = /*#__PURE__*/function () {
    var _sendCommandAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(commandName, values) {
      var pkt;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pkt = this.service.specification.packets.find(function (p) {
                return (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isCommand */ .ao)(p) && p.name === commandName;
              });

              if (!pkt) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return this.service.sendCmdAsync(pkt.identifier, (0,_jdom_pack__WEBPACK_IMPORTED_MODULE_4__/* .jdpack */ .AV)(pkt.packFormat, values), true);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function sendCommandAsync(_x, _x2) {
      return _sendCommandAsync.apply(this, arguments);
    }

    return sendCommandAsync;
  }();

  _proto.writeRegisterAsync = /*#__PURE__*/function () {
    var _writeRegisterAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(regName, values) {
      var register;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              register = this._registers[regName];

              if (!(register.code === _jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SystemReg.Value */ .ZJq.Value)) {
                _context2.next = 4;
                break;
              }

              _context2.next = 4;
              return this.setEnabled();

            case 4:
              _context2.next = 6;
              return this.writeRegAsync(this._registers[regName], values);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function writeRegisterAsync(_x3, _x4) {
      return _writeRegisterAsync.apply(this, arguments);
    }

    return writeRegisterAsync;
  }();

  _proto.writeRegAsync = /*#__PURE__*/function () {
    var _writeRegAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(jdreg, values) {
      var _jdreg$specification;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return jdreg === null || jdreg === void 0 ? void 0 : jdreg.sendSetPackedAsync((_jdreg$specification = jdreg.specification) === null || _jdreg$specification === void 0 ? void 0 : _jdreg$specification.packFormat, values, true);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function writeRegAsync(_x5, _x6) {
      return _writeRegAsync.apply(this, arguments);
    }

    return writeRegAsync;
  }();

  _proto.setEnabled = /*#__PURE__*/function () {
    var _setEnabled = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
      var pkt, jdreg;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              pkt = this.service.specification.packets.find(_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isIntensity */ .tC);

              if (!(pkt && pkt.fields[0].type === "bool")) {
                _context4.next = 5;
                break;
              }

              jdreg = this.service.register(_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SystemReg.Intensity */ .ZJq.Intensity);
              _context4.next = 5;
              return this.writeRegAsync(jdreg, [true]);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function setEnabled() {
      return _setEnabled.apply(this, arguments);
    }

    return setEnabled;
  }();

  _proto.lookupRegisterAsync = /*#__PURE__*/function () {
    var _lookupRegisterAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(root, fld, reportUpdate) {
      var _register$unpackedVal, register, field, _this$_events$root$fi, _field;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (reportUpdate === void 0) {
                reportUpdate = false;
              }

              if (!(root in this._registers)) {
                _context5.next = 14;
                break;
              }

              register = this._registers[root];

              if (reportUpdate && !this._reportUpdate[root]) {
                this._reportUpdate[root] = true;
                this.mount(register.subscribe(_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .REPORT_UPDATE */ .rGZ, function () {}));
              }

              _context5.next = 6;
              return register.refresh();

            case 6:
              if (fld) {
                _context5.next = 10;
                break;
              }

              return _context5.abrupt("return", (_register$unpackedVal = register.unpackedValue) === null || _register$unpackedVal === void 0 ? void 0 : _register$unpackedVal[0]);

            case 10:
              field = register.fields.find(function (f) {
                return f.name === fld;
              });
              return _context5.abrupt("return", field === null || field === void 0 ? void 0 : field.value);

            case 12:
              _context5.next = 17;
              break;

            case 14:
              if (!(root in this._events)) {
                _context5.next = 17;
                break;
              }

              _field = (_this$_events$root$fi = this._events[root].fields) === null || _this$_events$root$fi === void 0 ? void 0 : _this$_events$root$fi.find(function (f) {
                return f.name === fld;
              });
              return _context5.abrupt("return", _field === null || _field === void 0 ? void 0 : _field.value);

            case 17:
              return _context5.abrupt("return", undefined);

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function lookupRegisterAsync(_x7, _x8, _x9) {
      return _lookupRegisterAsync.apply(this, arguments);
    }

    return lookupRegisterAsync;
  }();

  return VMServiceClient;
}(_jdom_serviceclient__WEBPACK_IMPORTED_MODULE_2__/* .JDServiceClient */ .P);

/***/ }),

/***/ 18108:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ unparse; },
/* harmony export */   "W": function() { return /* binding */ VMExprEvaluator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function unparse(e) {
  switch (e.type) {
    case "ArrayExpression":
      {
        var ae = e;
        return "[" + ae.elements.map(unparse).join(", ") + "]";
      }

    case "CallExpression":
      {
        var caller = e;
        return unparse(caller.callee) + "(" + caller.arguments.map(unparse).join(", ") + ")";
      }

    case "MemberExpression":
      {
        var root = e;
        return root.computed ? unparse(root.object) + "[" + unparse(root.property) + "]" : unparse(root.object) + "." + unparse(root.property);
      }

    case "BinaryExpression":
    case "LogicalExpression":
      {
        var be = e;
        return "(" + unparse(be.left) + " " + be.operator + " " + unparse(be.right) + ")";
      }

    case "UnaryExpression":
      {
        var ue = e;
        return "" + ue.operator + unparse(ue.argument);
      }

    case "Identifier":
      {
        return e.name;
      }

    case "Literal":
      {
        return e.raw;
      }

    default:
      return "TODO";
  }
}
var VMExprEvaluator = /*#__PURE__*/function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function VMExprEvaluator(env, callEval) {
    this.exprStack = [];
    this.reportUpdate = false;
    this.env = env;
    this.callEval = callEval;
  }

  var _proto = VMExprEvaluator.prototype;

  _proto.tos = function tos() {
    return this.exprStack[this.exprStack.length - 1];
  };

  _proto.pop = function pop() {
    return this.exprStack.pop();
  };

  _proto.evalAsync = /*#__PURE__*/function () {
    var _evalAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e, reportUpdate) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (reportUpdate === void 0) {
                reportUpdate = false;
              }

              this.exprStack = [];
              this.reportUpdate = reportUpdate;
              _context.next = 5;
              return this.visitExpressionAsync(e);

            case 5:
              return _context.abrupt("return", this.exprStack.pop());

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function evalAsync(_x, _x2) {
      return _evalAsync.apply(this, arguments);
    }

    return evalAsync;
  }();

  _proto.visitExpressionAsync = /*#__PURE__*/function () {
    var _visitExpressionAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(e) {
      var ret, be, right, left, ue, top, le, val, id, _val, lit;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = e.type;
              _context2.next = _context2.t0 === "ArrayExpression" ? 3 : _context2.t0 === "CallExpression" ? 4 : _context2.t0 === "BinaryExpression" ? 6 : _context2.t0 === "UnaryExpression" ? 55 : _context2.t0 === "LogicalExpression" ? 73 : _context2.t0 === "MemberExpression" ? 94 : _context2.t0 === "Identifier" ? 99 : _context2.t0 === "Literal" ? 105 : 108;
              break;

            case 3:
              return _context2.abrupt("break", 108);

            case 4:
              if (this.callEval) {
                ret = this.callEval(e, this);
                this.exprStack.push(ret);
              } else this.exprStack.push(undefined);

              return _context2.abrupt("break", 108);

            case 6:
              be = e;
              _context2.next = 9;
              return this.visitExpressionAsync(be.left);

            case 9:
              _context2.next = 11;
              return this.visitExpressionAsync(be.right);

            case 11:
              right = this.exprStack.pop();
              left = this.exprStack.pop();
              _context2.t1 = be.operator;
              _context2.next = _context2.t1 === "+" ? 16 : _context2.t1 === "-" ? 18 : _context2.t1 === "/" ? 20 : _context2.t1 === "*" ? 22 : _context2.t1 === "%" ? 24 : _context2.t1 === ">>" ? 26 : _context2.t1 === ">>>" ? 28 : _context2.t1 === "<<" ? 30 : _context2.t1 === "|" ? 32 : _context2.t1 === "&" ? 34 : _context2.t1 === "^" ? 36 : _context2.t1 === "==" ? 38 : _context2.t1 === "!=" ? 40 : _context2.t1 === "===" ? 42 : _context2.t1 === "!==" ? 44 : _context2.t1 === "<" ? 46 : _context2.t1 === ">" ? 48 : _context2.t1 === "<=" ? 50 : _context2.t1 === ">=" ? 52 : 54;
              break;

            case 16:
              this.exprStack.push(left + right);
              return _context2.abrupt("return");

            case 18:
              this.exprStack.push(left - right);
              return _context2.abrupt("return");

            case 20:
              this.exprStack.push(left / right);
              return _context2.abrupt("return");

            case 22:
              this.exprStack.push(left * right);
              return _context2.abrupt("return");

            case 24:
              this.exprStack.push(left % right);
              return _context2.abrupt("return");

            case 26:
              this.exprStack.push(left >> right);
              return _context2.abrupt("return");

            case 28:
              this.exprStack.push(left >>> right);
              return _context2.abrupt("return");

            case 30:
              this.exprStack.push(left << right);
              return _context2.abrupt("return");

            case 32:
              this.exprStack.push(left | right);
              return _context2.abrupt("return");

            case 34:
              this.exprStack.push(left & right);
              return _context2.abrupt("return");

            case 36:
              this.exprStack.push(left ^ right);
              return _context2.abrupt("return");

            case 38:
              this.exprStack.push(left == right);
              return _context2.abrupt("return");

            case 40:
              this.exprStack.push(left != right);
              return _context2.abrupt("return");

            case 42:
              this.exprStack.push(left === right);
              return _context2.abrupt("return");

            case 44:
              this.exprStack.push(left !== right);
              return _context2.abrupt("return");

            case 46:
              this.exprStack.push(left < right);
              return _context2.abrupt("return");

            case 48:
              this.exprStack.push(left > right);
              return _context2.abrupt("return");

            case 50:
              this.exprStack.push(left <= right);
              return _context2.abrupt("return");

            case 52:
              this.exprStack.push(left >= right);
              return _context2.abrupt("return");

            case 54:
              return _context2.abrupt("break", 108);

            case 55:
              ue = e;
              _context2.next = 58;
              return this.visitExpressionAsync(ue.argument);

            case 58:
              top = this.exprStack.pop();
              _context2.t2 = ue.operator;
              _context2.next = _context2.t2 === "ABS" ? 62 : _context2.t2 === "!" ? 64 : _context2.t2 === "~" ? 66 : _context2.t2 === "-" ? 68 : _context2.t2 === "+" ? 70 : 72;
              break;

            case 62:
              this.exprStack.push(Math.abs(top));
              return _context2.abrupt("return");

            case 64:
              this.exprStack.push(!top);
              return _context2.abrupt("return");

            case 66:
              this.exprStack.push(~top);
              return _context2.abrupt("return");

            case 68:
              this.exprStack.push(-top);
              return _context2.abrupt("return");

            case 70:
              this.exprStack.push(+top);
              return _context2.abrupt("return");

            case 72:
              return _context2.abrupt("break", 108);

            case 73:
              le = e;
              _context2.next = 76;
              return this.visitExpressionAsync(le.left);

            case 76:
              _context2.t3 = le.operator;
              _context2.next = _context2.t3 === "||" ? 79 : _context2.t3 === "&&" ? 86 : 93;
              break;

            case 79:
              if (!this.tos()) {
                _context2.next = 83;
                break;
              }

              return _context2.abrupt("return");

            case 83:
              _context2.next = 85;
              return this.visitExpressionAsync(le.right);

            case 85:
              return _context2.abrupt("return");

            case 86:
              if (this.tos()) {
                _context2.next = 90;
                break;
              }

              return _context2.abrupt("return");

            case 90:
              _context2.next = 92;
              return this.visitExpressionAsync(le.right);

            case 92:
              return _context2.abrupt("return");

            case 93:
              return _context2.abrupt("break", 108);

            case 94:
              _context2.next = 96;
              return this.env(e, this.reportUpdate);

            case 96:
              val = _context2.sent;
              //if (val === undefined) {
              //    throw new VMError(VMCode.InternalError, `lookup of ${unparse(e)} failed`)
              //}
              this.exprStack.push(val);
              return _context2.abrupt("return");

            case 99:
              id = e;
              _context2.next = 102;
              return this.env(id.name, this.reportUpdate);

            case 102:
              _val = _context2.sent;
              // if (val === undefined)
              //    throw new VMError(VMCode.InternalError, `lookup of ${id.name} failed`)
              this.exprStack.push(_val);
              return _context2.abrupt("return");

            case 105:
              lit = e;
              this.exprStack.push(lit.value);
              return _context2.abrupt("return");

            case 108:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function visitExpressionAsync(_x3) {
      return _visitExpressionAsync.apply(this, arguments);
    }

    return visitExpressionAsync;
  }();

  return VMExprEvaluator;
}();

/***/ }),

/***/ 43676:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ServiceTestRunner; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/useServiceClient.ts
var useServiceClient = __webpack_require__(79465);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(27490);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(47895);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js





var styles = {
  /* Styles applied to the root element. */
  root: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: 'translateY(-50%)'
  }
};
/**
 * Must be used as the last child of ListItem to function properly.
 */

var ListItemSecondaryAction = /*#__PURE__*/react.forwardRef(function ListItemSecondaryAction(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["classes", "className"]);

  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';
/* harmony default export */ var ListItemSecondaryAction_ListItemSecondaryAction = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiListItemSecondaryAction'
})(ListItemSecondaryAction));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(4381);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(50144);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(38030);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(80791);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js
var ListSubheader = __webpack_require__(35966);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(33287);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(25342);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(85413);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(53719);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(42656);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdtestfuns.ts
var jdtestfuns = __webpack_require__(92671);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdutils.ts
var jdutils = __webpack_require__(30055);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__(45484);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceclient.ts
var serviceclient = __webpack_require__(56763);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/expr.ts
var vm_expr = __webpack_require__(18108);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/client.ts
var client = __webpack_require__(1797);
;// CONCATENATED MODULE: ./jacdac-ts/src/test/testrunner.ts





function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










var JDTestStatus;

(function (JDTestStatus) {
  JDTestStatus[JDTestStatus["NotReady"] = 0] = "NotReady";
  JDTestStatus[JDTestStatus["Active"] = 1] = "Active";
  JDTestStatus[JDTestStatus["Passed"] = 2] = "Passed";
  JDTestStatus[JDTestStatus["Failed"] = 3] = "Failed";
})(JDTestStatus || (JDTestStatus = {}));

var JDTestCommandStatus;

(function (JDTestCommandStatus) {
  JDTestCommandStatus[JDTestCommandStatus["NotReady"] = 0] = "NotReady";
  JDTestCommandStatus[JDTestCommandStatus["Active"] = 1] = "Active";
  JDTestCommandStatus[JDTestCommandStatus["RequiresUserInput"] = 2] = "RequiresUserInput";
  JDTestCommandStatus[JDTestCommandStatus["Passed"] = 3] = "Passed";
  JDTestCommandStatus[JDTestCommandStatus["Failed"] = 4] = "Failed";
})(JDTestCommandStatus || (JDTestCommandStatus = {}));

function commandStatusToTestStatus(status) {
  switch (status) {
    case JDTestCommandStatus.Active:
      return JDTestStatus.Active;

    case JDTestCommandStatus.Passed:
      return JDTestStatus.Passed;

    case JDTestCommandStatus.Failed:
      return JDTestStatus.Failed;

    case JDTestCommandStatus.NotReady:
      return JDTestStatus.NotReady;

    case JDTestCommandStatus.RequiresUserInput:
      return JDTestStatus.Active;
  }
}

function cmdToTestFunction(cmd) {
  var id = cmd.call.callee.name;
  return (0,jdtestfuns/* getTestCommandFunctions */.f)().find(function (t) {
    return t.id == id;
  });
}

var JDCommandEvaluator = /*#__PURE__*/function () {
  function JDCommandEvaluator(testRunner, command) {
    this._prompt = "";
    this._progress = "";
    this._status = JDTestCommandStatus.Active;
    this._startExpressions = [];
    this._rangeComplete = undefined;
    this._eventsComplete = undefined;
    this.testRunner = testRunner;
    this.command = command;
  }

  var _proto = JDCommandEvaluator.prototype;

  _proto.callEval = function callEval(start) {
    return function (caller, ee) {
      function getStartVal(e) {
        return start.find(function (r) {
          return r.e === e;
        }).v;
      }

      var callee = caller.callee;

      switch (callee.name) {
        case "start":
          return getStartVal(caller.arguments[0]);

        case "closeTo":
          {
            var args = caller.arguments;
            var goal = getStartVal(args[1]);
            var error = getStartVal(args[2]);
            ee.visitExpressionAsync(args[0]);
            var ev = ee.pop();
            return ev >= goal - error && ev <= goal + error;
          }

        default: // ERROR

      }

      return null;
    };
  } // TODO: define an interface between test runner and command evaluator
  // TODO: so this all can be done modularly
  ;

  _proto.start = function start() {
    var _this = this;

    this._startExpressions = [];
    var testFun = cmdToTestFunction(this.command);
    var args = this.command.call.arguments;
    var startExprs = [];

    switch (testFun.id) {
      case "check":
      case "awaitEvent":
      case "nextEvent":
        {
          (0,jdutils/* exprVisitor */.ao)(null, args, function (p, ce) {
            if (ce.type !== "CallExpression") return;
            if (ce.callee.name === "start") startExprs.push(ce.arguments[0]);else if (ce.callee.name === "closeTo") {
              startExprs.push(ce.arguments[1]);
              startExprs.push(ce.arguments[2]);
            }
          });
          break;
        }

      case "changes":
      case "increases":
      case "decreases":
        {
          startExprs.push(args[0]);
          break;
        }

      case "increasesBy":
      case "decreasesBy":
      case "stepsUpTo":
      case "stepsDownTo":
        {
          startExprs.push(args[0]);
          startExprs.push(args[1]);
          break;
        }

      case "closeTo":
        {
          startExprs.push(args[1]);
          startExprs.push(args[2]);
          break;
        }

      case "assign":
        {
          startExprs.push(args[1]);
          break;
        }

      case "events":
        {
          var eventList = this.command.call.arguments[0];
          this._eventsComplete = eventList.elements.map(function (id) {
            return id.name;
          });
          break;
        }
    } // evaluate the start expressions and store the results


    startExprs.forEach(function (child) {
      if (_this._startExpressions.findIndex(function (r) {
        return r.e === child;
      }) < 0) {
        var exprEval = new vm_expr/* VMExprEvaluator */.W(_this.env, _this.callEval([]));

        _this._startExpressions.push({
          e: child,
          v: exprEval.evalAsync(child)
        });
      }
    });
    this.createPrompt();
  };

  _proto.createPrompt = function createPrompt() {
    var _this2 = this;

    var testFun = cmdToTestFunction(this.command);
    var replaceId = this.command.call.arguments.map(function (a, i) {
      return ["{" + (i + 1) + "}", (0,vm_expr/* unparse */.Z)(a)];
    });
    var replaceVal = this.command.call.arguments.map(function (a, i) {
      var aStart = _this2._startExpressions.find(function (r) {
        return r.e === a;
      });

      return ["{" + (i + 1) + ":val}", aStart && aStart.v ? (0,utils/* roundWithPrecision */.JI)(aStart.v, 3).toString() : (0,vm_expr/* unparse */.Z)(a)];
    });
    this._prompt = testFun.id === "ask" || testFun.id === "say" ? this.command.prompt.slice(0) : testFun.prompt.slice(0);
    replaceId.forEach(function (p) {
      return _this2._prompt = _this2._prompt.replace(p[0], p[1]);
    });
    replaceVal.forEach(function (p) {
      return _this2._prompt = _this2._prompt.replace(p[0], p[1]);
    });
  };

  _proto.setEvent = function setEvent(ev) {};

  _proto.checkExpression = function checkExpression(e) {
    var expr = new vm_expr/* VMExprEvaluator */.W(this.env, this.callEval(this._startExpressions));
    return expr.evalAsync(e) ? JDTestCommandStatus.Passed : JDTestCommandStatus.Active;
  };

  _proto.getStart = function getStart(e) {
    return this._startExpressions.find(function (r) {
      return r.e === e;
    });
  };

  _proto.evaluateAsync = /*#__PURE__*/function () {
    var _evaluateAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var testFun, args, goal, error, expr, ev, regSaved, regValue, status, _regSaved, amtSaved, _regValue, _regValue2, beginSaved, endSaved, _ev, event, _ev2, _expr, _ev3, reg, pretify;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pretify = function _pretify(v) {
                return (0,utils/* roundWithPrecision */.JI)(v, 3);
              };

              testFun = cmdToTestFunction(this.command);
              args = this.command.call.arguments;
              this._status = JDTestCommandStatus.Active;
              this._progress = "";
              _context.t0 = testFun.id;
              _context.next = _context.t0 === "ask" ? 8 : _context.t0 === "check" ? 10 : _context.t0 === "closeTo" ? 12 : _context.t0 === "changes" ? 21 : _context.t0 === "increases" ? 21 : _context.t0 === "decreases" ? 21 : _context.t0 === "increasesBy" ? 27 : _context.t0 === "decreasesBy" ? 27 : _context.t0 === "stepsUpTo" ? 32 : _context.t0 === "stepsDownTo" ? 32 : _context.t0 === "events" ? 39 : _context.t0 === "awaitEvent" ? 41 : _context.t0 === "nextEvent" ? 41 : _context.t0 === "assign" ? 45 : 52;
              break;

            case 8:
              this._status = JDTestCommandStatus.RequiresUserInput;
              return _context.abrupt("break", 52);

            case 10:
              this._status = this.checkExpression(args[0]);
              return _context.abrupt("break", 52);

            case 12:
              goal = this.getStart(args[1]);
              error = this.getStart(args[2]);
              expr = new vm_expr/* VMExprEvaluator */.W(this.env, this.callEval(this._startExpressions));
              _context.next = 17;
              return expr.evalAsync(args[0]);

            case 17:
              ev = _context.sent;
              if (Math.abs(ev - goal.v) <= error.v) this._status = JDTestCommandStatus.Passed;
              this._progress = "current: " + pretify(ev) + "; goal: " + pretify(goal.v) + "; error: " + pretify(error.v);
              return _context.abrupt("break", 52);

            case 21:
              regSaved = this._startExpressions.find(function (r) {
                return r.e === args[0];
              });
              regValue = this.env((0,vm_expr/* unparse */.Z)(args[0]));
              status = regValue && regSaved.v && (testFun.id === "changes" && regValue !== regSaved.v || testFun.id === "increases" && regValue > regSaved.v || testFun.id === "decreases" && regValue < regSaved.v) ? JDTestCommandStatus.Passed : JDTestCommandStatus.Active;
              this._status = status;
              regSaved.v = regValue;
              return _context.abrupt("break", 52);

            case 27:
              _regSaved = this.getStart(args[0]);
              amtSaved = this.getStart(args[1]);
              _regValue = this.env((0,vm_expr/* unparse */.Z)(args[0]));

              if (testFun.id === "increasesBy") {
                if (_regValue >= _regSaved.v + amtSaved.v) {
                  this._status = JDTestCommandStatus.Passed;
                } else if (_regValue >= _regSaved.v && _regValue < _regSaved.v + amtSaved.v) {
                  this._status = JDTestCommandStatus.Active;
                  this._progress = "current: " + pretify(_regValue) + ", goal: " + pretify(_regSaved.v + amtSaved.v);
                } else {
                  this._status = JDTestCommandStatus.Active;
                }
              } else {
                if (_regValue <= _regSaved.v - amtSaved.v) {
                  this._status = JDTestCommandStatus.Passed;
                  this._progress = "completed";
                } else if (_regValue <= _regSaved.v && _regValue > _regSaved.v - amtSaved.v) {
                  this._status = JDTestCommandStatus.Active;
                  this._progress = "current: " + pretify(_regValue) + " goal: " + pretify(_regSaved.v - amtSaved.v);
                } else {
                  this._status = JDTestCommandStatus.Active;
                }
              }

              return _context.abrupt("break", 52);

            case 32:
              this._status = JDTestCommandStatus.Active;
              _regValue2 = this.env((0,vm_expr/* unparse */.Z)(args[0]));
              beginSaved = this.getStart(args[0]);
              endSaved = this.getStart(args[1]);

              if (this._rangeComplete === undefined) {
                this._rangeComplete = _regValue2;
              } else {
                if (_regValue2 === this._rangeComplete + (testFun.id == "stepsUpTo" ? 1 : -1)) this._rangeComplete = _regValue2;

                if (this._rangeComplete === endSaved.v) {
                  this._status = JDTestCommandStatus.Passed;
                }
              }

              if (this._rangeComplete != undefined) {
                this._progress = testFun.id == "stepsUpTo" ? "from " + pretify(beginSaved.v) + " up to " + pretify(this._rangeComplete) : "from " + pretify(beginSaved.v) + " down to " + pretify(this._rangeComplete);
              }

              return _context.abrupt("break", 52);

            case 39:
              if (this.testRunner.hasEvent) {
                _ev = this.testRunner.consumeEvent();

                if (_ev === this._eventsComplete[0]) {
                  this._eventsComplete.shift();

                  if (this._eventsComplete.length === 0) this._status = JDTestCommandStatus.Passed;
                } else {
                  this._status = JDTestCommandStatus.Failed;
                }

                this._progress = "got event " + _ev + "; remaining = [" + this._eventsComplete + "]";
              } else {
                this._progress = "no events received; remaining = [" + this._eventsComplete + "]";
              }

              return _context.abrupt("break", 52);

            case 41:
              event = args[0];
              this._progress = "waiting for event " + event.name;

              if (this.testRunner.hasEvent) {
                _ev2 = this.testRunner.consumeEvent();

                if (_ev2 !== event.name) {
                  if (testFun.id === "nextEvent") this._status = JDTestCommandStatus.Failed;
                } else {
                  // this._status = JDTestCommandStatus.Passed
                  this._status = this.checkExpression(this.command.call.arguments[1]);
                }
              } else {
                this._progress = "no events received; " + this._progress;
              }

              return _context.abrupt("break", 52);

            case 45:
              _expr = new vm_expr/* VMExprEvaluator */.W(this.env, this.callEval(this._startExpressions));
              _ev3 = _expr.evalAsync(args[1]);
              reg = args[0];
              _context.next = 50;
              return this.testRunner.serviceTestRunner.writeRegisterAsync(reg.name, _ev3);

            case 50:
              this._status = JDTestCommandStatus.Passed;
              this._progress = "wrote " + _ev3 + " to register " + reg.name;

            case 52:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function evaluateAsync() {
      return _evaluateAsync.apply(this, arguments);
    }

    return evaluateAsync;
  }();

  (0,createClass/* default */.Z)(JDCommandEvaluator, [{
    key: "prompt",
    get: function get() {
      return this._prompt;
    }
  }, {
    key: "status",
    get: function get() {
      return this._status;
    }
  }, {
    key: "progress",
    get: function get() {
      return this._progress;
    }
  }, {
    key: "env",
    get: function get() {
      var _this3 = this;

      return function (e) {
        return _this3.testRunner.serviceTestRunner.lookup(e);
      };
    }
  }]);

  return JDCommandEvaluator;
}();

var JDTestCommandRunner = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(JDTestCommandRunner, _JDEventSource);

  function JDTestCommandRunner(testRunner, command) {
    var _this4;

    _this4 = _JDEventSource.call(this) || this;
    _this4._status = JDTestCommandStatus.NotReady;
    _this4._output = {
      message: "",
      progress: ""
    };
    _this4._commandEvaluator = null;
    _this4.testRunner = testRunner;
    _this4.command = command;
    return _this4;
  }

  var _proto2 = JDTestCommandRunner.prototype;

  _proto2.reset = function reset() {
    this.status = JDTestCommandStatus.NotReady;
    this.output = {
      message: "",
      progress: ""
    };
    this._commandEvaluator = null;
  };

  _proto2.startAsync = /*#__PURE__*/function () {
    var _startAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.status = JDTestCommandStatus.Active;
              this._commandEvaluator = undefined;
              _context2.next = 4;
              return this.envChangeAsync();

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function startAsync() {
      return _startAsync.apply(this, arguments);
    }

    return startAsync;
  }();

  _proto2.envChangeAsync = /*#__PURE__*/function () {
    var _envChangeAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      var newOutput;
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!this.isActive) {
                _context3.next = 18;
                break;
              }

              if (!this._commandEvaluator) {
                this._commandEvaluator = new JDCommandEvaluator(this.testRunner, this.command);

                try {
                  this._commandEvaluator.start();
                } catch (e) {
                  // we will try again on next environment change
                  this._commandEvaluator = undefined;
                }
              }

              if (!this._commandEvaluator) {
                _context3.next = 18;
                break;
              }

              _context3.prev = 3;
              _context3.next = 6;
              return this._commandEvaluator.evaluateAsync();

            case 6:
              newOutput = {
                message: this._commandEvaluator.prompt,
                progress: this._commandEvaluator.progress
              };
              this.output = newOutput;

              if (!(this._commandEvaluator.status === JDTestCommandStatus.RequiresUserInput)) {
                _context3.next = 12;
                break;
              }

              this.status = JDTestCommandStatus.RequiresUserInput;
              _context3.next = 14;
              break;

            case 12:
              _context3.next = 14;
              return this.finishAsync(this._commandEvaluator.status);

            case 14:
              _context3.next = 18;
              break;

            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](3);

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[3, 16]]);
    }));

    function envChangeAsync() {
      return _envChangeAsync.apply(this, arguments);
    }

    return envChangeAsync;
  }();

  _proto2.cancelAsync = /*#__PURE__*/function () {
    var _cancelAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee4() {
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.finishAsync(JDTestCommandStatus.Failed);

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function cancelAsync() {
      return _cancelAsync.apply(this, arguments);
    }

    return cancelAsync;
  }();

  _proto2.finishAsync = /*#__PURE__*/function () {
    var _finishAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee5(s) {
      return regenerator_default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(this.isActive && (s === JDTestCommandStatus.Failed || s === JDTestCommandStatus.Passed))) {
                _context5.next = 4;
                break;
              }

              this.status = s;
              _context5.next = 4;
              return this.testRunner.finishCommandAsync();

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function finishAsync(_x) {
      return _finishAsync.apply(this, arguments);
    }

    return finishAsync;
  }();

  (0,createClass/* default */.Z)(JDTestCommandRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(s) {
      if (s != this._status) {
        this._status = s;
        this.emit(constants/* CHANGE */.Ver);
      }
    }
  }, {
    key: "indeterminate",
    get: function get() {
      return this.status !== JDTestCommandStatus.Failed && this.status !== JDTestCommandStatus.Passed;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.status === JDTestCommandStatus.Active || this.status === JDTestCommandStatus.RequiresUserInput;
    }
  }, {
    key: "output",
    get: function get() {
      return this._output;
    },
    set: function set(value) {
      if (!this._output || this._output.message !== value.message || this._output.progress !== value.progress) {
        this._output = value;
        this.emit(constants/* CHANGE */.Ver);
      }
    }
  }]);

  return JDTestCommandRunner;
}(eventsource/* JDEventSource */.aE);
var JDTestRunner = /*#__PURE__*/function (_JDEventSource2) {
  (0,inheritsLoose/* default */.Z)(JDTestRunner, _JDEventSource2);

  function JDTestRunner(serviceTestRunner, testSpec) {
    var _this5;

    _this5 = _JDEventSource2.call(this) || this;
    _this5._status = JDTestStatus.NotReady;
    _this5.serviceTestRunner = serviceTestRunner;
    _this5.testSpec = testSpec;
    _this5.commands = testSpec.testCommands.map(function (c) {
      return new JDTestCommandRunner((0,assertThisInitialized/* default */.Z)(_this5), c);
    });
    return _this5;
  }

  var _proto3 = JDTestRunner.prototype;

  _proto3.reset = function reset() {
    if (this.status !== JDTestStatus.NotReady) {
      this._status = JDTestStatus.NotReady;
      this._commandIndex = undefined;
      this._currentEvent = undefined;
      this.commands.forEach(function (t) {
        return t.reset();
      });
      this.emit(constants/* CHANGE */.Ver);
    }
  };

  _proto3.startAsync = /*#__PURE__*/function () {
    var _startAsync2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee6() {
      return regenerator_default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              this.reset();
              this.status = JDTestStatus.Active;
              this._commandIndex = 0;

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function startAsync() {
      return _startAsync2.apply(this, arguments);
    }

    return startAsync;
  }();

  _proto3.next = function next() {
    this.serviceTestRunner.next();
  };

  _proto3.cancel = function cancel() {
    this.finish(JDTestStatus.Failed);
  };

  _proto3.finish = function finish(newStatus) {
    if (this.status === JDTestStatus.Active) {
      this.status = newStatus;
    }
  };

  _proto3.getCommandIndex = function getCommandIndex() {
    return this._commandIndex;
  };

  _proto3.setCommandIndex = /*#__PURE__*/function () {
    var _setCommandIndex = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee7(index) {
      var _this$currentCommand;

      return regenerator_default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!(this._commandIndex !== index)) {
                _context7.next = 5;
                break;
              }

              this._commandIndex = index;
              _context7.next = 4;
              return (_this$currentCommand = this.currentCommand) === null || _this$currentCommand === void 0 ? void 0 : _this$currentCommand.startAsync();

            case 4:
              this.emit(constants/* CHANGE */.Ver);

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function setCommandIndex(_x2) {
      return _setCommandIndex.apply(this, arguments);
    }

    return setCommandIndex;
  }();

  _proto3.envChangeAsync = /*#__PURE__*/function () {
    var _envChangeAsync2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee8() {
      var _this$currentCommand2;

      return regenerator_default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (!(this.status === JDTestStatus.Active)) {
                _context8.next = 3;
                break;
              }

              _context8.next = 3;
              return (_this$currentCommand2 = this.currentCommand) === null || _this$currentCommand2 === void 0 ? void 0 : _this$currentCommand2.envChangeAsync();

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function envChangeAsync() {
      return _envChangeAsync2.apply(this, arguments);
    }

    return envChangeAsync;
  }();

  _proto3.eventChangeAsync = /*#__PURE__*/function () {
    var _eventChangeAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee9(event) {
      return regenerator_default().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!(this.status === JDTestStatus.Active)) {
                _context9.next = 4;
                break;
              }

              this._currentEvent = event;
              _context9.next = 4;
              return this.envChangeAsync();

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    function eventChangeAsync(_x3) {
      return _eventChangeAsync.apply(this, arguments);
    }

    return eventChangeAsync;
  }();

  _proto3.consumeEvent = function consumeEvent() {
    var ret = this._currentEvent;
    this._currentEvent = undefined;
    return ret;
  };

  _proto3.finishCommandAsync = /*#__PURE__*/function () {
    var _finishCommandAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee10() {
      return regenerator_default().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (!(this.getCommandIndex() === this.commands.length - 1)) {
                _context10.next = 4;
                break;
              }

              this.finish(commandStatusToTestStatus(this.currentCommand.status));
              _context10.next = 6;
              break;

            case 4:
              _context10.next = 6;
              return this.setCommandIndex(this.getCommandIndex() + 1);

            case 6:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    function finishCommandAsync() {
      return _finishCommandAsync.apply(this, arguments);
    }

    return finishCommandAsync;
  }();

  (0,createClass/* default */.Z)(JDTestRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(s) {
      if (s != this._status) {
        this._status = s;
        this.emit(constants/* CHANGE */.Ver);
      }
    }
  }, {
    key: "indeterminate",
    get: function get() {
      return this.status !== JDTestStatus.Failed && this.status !== JDTestStatus.Passed;
    }
  }, {
    key: "description",
    get: function get() {
      return this.testSpec.description;
    }
  }, {
    key: "prompt",
    get: function get() {
      return this.testSpec.prompt;
    }
  }, {
    key: "hasEvent",
    get: function get() {
      return this._currentEvent != undefined;
    }
  }, {
    key: "currentCommand",
    get: function get() {
      return this.commands[this._commandIndex];
    }
  }]);

  return JDTestRunner;
}(eventsource/* JDEventSource */.aE);
var JDServiceTestRunner = /*#__PURE__*/function (_JDServiceClient) {
  (0,inheritsLoose/* default */.Z)(JDServiceTestRunner, _JDServiceClient);

  function JDServiceTestRunner(testSpec, service) {
    var _this6;

    _this6 = _JDServiceClient.call(this, service) || this;
    _this6._testIndex = -1;
    _this6.testSpec = testSpec;
    _this6._env = new client/* VMServiceClient */.z(service);
    _this6.tests = _this6.testSpec.tests.map(function (t) {
      return new JDTestRunner((0,assertThisInitialized/* default */.Z)(_this6), t);
    });

    _this6.testSpec.tests.forEach(function (t) {
      t.events.forEach(function (s) {
        var eventName = s.substr(s.indexOf(".") + 1);

        _this6._env.registerEvent(eventName, /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee11() {
          var _this6$currentTest;

          return regenerator_default().wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.prev = 0;
                  _context11.next = 3;
                  return (_this6$currentTest = _this6.currentTest) === null || _this6$currentTest === void 0 ? void 0 : _this6$currentTest.eventChangeAsync(eventName);

                case 3:
                  _context11.next = 7;
                  break;

                case 5:
                  _context11.prev = 5;
                  _context11.t0 = _context11["catch"](0);

                case 7:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, null, [[0, 5]]);
        })));
      });
      t.registers.forEach(function (s) {
        var regName = s.substr(s.indexOf(".") + 1);

        _this6._env.registerRegister(regName, /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee12() {
          var _this6$currentTest2;

          return regenerator_default().wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.prev = 0;
                  _context12.next = 3;
                  return (_this6$currentTest2 = _this6.currentTest) === null || _this6$currentTest2 === void 0 ? void 0 : _this6$currentTest2.envChangeAsync();

                case 3:
                  _context12.next = 7;
                  break;

                case 5:
                  _context12.prev = 5;
                  _context12.t0 = _context12["catch"](0);

                case 7:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, null, [[0, 5]]);
        })));
      });
    });

    _this6.start();

    return _this6;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _proto4 = JDServiceTestRunner.prototype;

  _proto4.lookup = function lookup(e) {
    // TODO: fix up test runner
    return undefined; // this._env.lookupRegisterAsync(e)
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  _proto4.writeRegisterAsync =
  /*#__PURE__*/
  function () {
    var _writeRegisterAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee13(regName, val) {
      return regenerator_default().wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return this._env.writeRegisterAsync(regName, val);

            case 2:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));

    function writeRegisterAsync(_x4, _x5) {
      return _writeRegisterAsync.apply(this, arguments);
    }

    return writeRegisterAsync;
  }();

  _proto4.stats = function stats() {
    var r = {
      total: this.tests.length,
      success: 0,
      failed: 0,
      indeterminate: 0
    };

    for (var _iterator = _createForOfIteratorHelperLoose(this.tests), _step; !(_step = _iterator()).done;) {
      var test = _step.value;

      switch (test.status) {
        case JDTestStatus.Failed:
          r.failed++;
          break;

        case JDTestStatus.Passed:
          r.success++;
          break;

        default:
          r.indeterminate++;
      }
    }

    return r;
  };

  _proto4.start = function start() {
    this.tests.forEach(function (t) {
      return t.reset();
    });
    this.testIndex = 0;
  };

  _proto4.next = function next() {
    this.testIndex++;
  };

  (0,createClass/* default */.Z)(JDServiceTestRunner, [{
    key: "testIndex",
    get: function get() {
      return this._testIndex;
    },
    set: function set(index) {
      if (this._testIndex !== index) {
        // stop previous test if needed
        var ct = this.currentTest;

        if (ct) {
          if (ct.status === JDTestStatus.Active) {
            ct.cancel();
          }
        } // update test


        this._testIndex = index;
        this.emit(constants/* CHANGE */.Ver);
      }
    }
  }, {
    key: "currentTest",
    get: function get() {
      return this.tests[this._testIndex];
    },
    set: function set(test) {
      var index = this.tests.indexOf(test);
      if (index > -1) this.testIndex = index;
    }
  }]);

  return JDServiceTestRunner;
}(serviceclient/* JDServiceClient */.P);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__(13840);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircle.js
var CheckCircle = __webpack_require__(39545);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/HourglassEmpty.js
var HourglassEmpty = __webpack_require__(15029);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayCircleFilled.js
var PlayCircleFilled = __webpack_require__(35650);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardDevice.tsx + 5 modules
var DashboardDevice = __webpack_require__(54886);
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2285);
// EXTERNAL MODULE: ./jacdac-ts/src/test/testspec.ts + 1 modules
var testspec = __webpack_require__(45831);
;// CONCATENATED MODULE: ./src/components/test/ServiceTestRunner.tsx


 // tslint:disable-next-line: match-default-export-name no-submodule-imports












function TestStatusIcon(props) {
  var test = props.test;
  var status = (0,useChange/* default */.Z)(test, function (t) {
    return t.status;
  });

  switch (status) {
    case JDTestStatus.Active:
      return /*#__PURE__*/react.createElement(PlayCircleFilled/* default */.Z, {
        color: "action"
      });

    case JDTestStatus.Failed:
      return /*#__PURE__*/react.createElement(Error/* default */.Z, {
        color: "error"
      });

    case JDTestStatus.Passed:
      return /*#__PURE__*/react.createElement(CheckCircle/* default */.Z, {
        color: "primary"
      });

    default:
      return /*#__PURE__*/react.createElement(HourglassEmpty/* default */.Z, {
        color: "disabled"
      });
  }
}

function TestListItem(props) {
  var test = props.test,
      currentTest = props.currentTest,
      onSelectTest = props.onSelectTest;
  var description = (0,useChange/* default */.Z)(test, function (t) {
    return t.description;
  });
  var selected = test === currentTest;

  var handleSelectTest = function handleSelectTest() {
    return onSelectTest(test);
  };

  return /*#__PURE__*/react.createElement(ListItem/* default */.Z, {
    selected: selected,
    button: true,
    onClick: handleSelectTest
  }, /*#__PURE__*/react.createElement(ListItemIcon/* default */.Z, null, /*#__PURE__*/react.createElement(TestStatusIcon, {
    test: test
  })), /*#__PURE__*/react.createElement(ListItemText/* default */.Z, {
    primary: description
  }));
}

function TestList(props) {
  var testRunner = props.testRunner,
      currentTest = props.currentTest,
      onSelectTest = props.onSelectTest;
  var tests = testRunner.tests;
  var stats = (0,useChange/* default */.Z)(testRunner, function (r) {
    return r.stats();
  });
  return /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, /*#__PURE__*/react.createElement(List/* default */.Z, {
    dense: true,
    subheader: /*#__PURE__*/react.createElement(ListSubheader/* default */.Z, null, stats.total + " tests, " + stats.success + " success, " + stats.failed + " failed")
  }, tests === null || tests === void 0 ? void 0 : tests.map(function (test, i) {
    return /*#__PURE__*/react.createElement(TestListItem, {
      key: i,
      test: test,
      currentTest: currentTest,
      onSelectTest: onSelectTest
    });
  }))));
}

function CommandStatusIcon(props) {
  var command = props.command;
  var status = (0,useChange/* default */.Z)(command, function (c) {
    return c.status;
  });

  switch (status) {
    case JDTestCommandStatus.Active:
    case JDTestCommandStatus.RequiresUserInput:
      return /*#__PURE__*/react.createElement(PlayCircleFilled/* default */.Z, {
        color: "action"
      });

    case JDTestCommandStatus.Failed:
      return /*#__PURE__*/react.createElement(Error/* default */.Z, {
        color: "error"
      });

    case JDTestCommandStatus.Passed:
      return /*#__PURE__*/react.createElement(CheckCircle/* default */.Z, {
        color: "primary"
      });

    default:
      return /*#__PURE__*/react.createElement(HourglassEmpty/* default */.Z, {
        color: "disabled"
      });
  }
}

function CommandListItem(props) {
  var command = props.command;

  var _useChange = (0,useChange/* default */.Z)(command, function (c) {
    return c.output;
  }),
      message = _useChange.message,
      progress = _useChange.progress;

  var status = (0,useChange/* default */.Z)(command, function (c) {
    return c.status;
  });

  var handleAnswer = function handleAnswer(status) {
    return function () {
      return command.finish(status);
    };
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ListItem/* default */.Z, {
    selected: status === JDTestCommandStatus.Active
  }, /*#__PURE__*/react.createElement(ListItemIcon/* default */.Z, null, /*#__PURE__*/react.createElement(CommandStatusIcon, {
    command: command
  })), /*#__PURE__*/react.createElement(ListItemText/* default */.Z, {
    primary: message,
    secondary: progress
  })), status === JDTestCommandStatus.RequiresUserInput && /*#__PURE__*/react.createElement(ListItem/* default */.Z, null, /*#__PURE__*/react.createElement(ListItemSecondaryAction_ListItemSecondaryAction, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    onClick: handleAnswer(JDTestCommandStatus.Passed)
  }, "Yes")), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    onClick: handleAnswer(JDTestCommandStatus.Failed)
  }, "No"))))));
}

function ActiveTest(props) {
  var test = props.test;
  var commands = test.commands;
  var status = (0,useChange/* default */.Z)(test, function (t) {
    return t.status;
  });

  var handleRestart = function handleRestart() {
    return test.start();
  };

  var handleNext = function handleNext() {
    return test.next();
  }; // auto start


  (0,react.useEffect)(function () {
    return test.start();
  }, [test]);
  return /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h5"
  }, "DO"), /*#__PURE__*/react.createElement(Box/* default */.Z, {
    m: 2
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body1"
  }, test.prompt)), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h5"
  }, "TEST"), /*#__PURE__*/react.createElement(List/* default */.Z, {
    dense: false
  }, commands.map(function (cmd, i) {
    return /*#__PURE__*/react.createElement(CommandListItem, {
      key: i,
      command: cmd
    });
  })), status === JDTestStatus.Passed && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "success"
  }, "Test passed"), status === JDTestStatus.Failed && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, "Test failed")), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: status === JDTestStatus.Active ? "outlined" : "contained",
    color: status === JDTestStatus.Passed ? "primary" : undefined,
    onClick: handleNext
  }, "Next"), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "outlined",
    onClick: handleRestart
  }, "Restart")));
}

function ServiceTestRunner(props) {
  var service = props.service,
      _props$serviceTest = props.serviceTest,
      serviceTest = _props$serviceTest === void 0 ? (0,testspec/* serviceTestFromServiceClass */.H)(service.serviceClass) : _props$serviceTest;
  var factory = (0,react.useCallback)(function (service) {
    return serviceTest && new JDServiceTestRunner(serviceTest, service);
  }, [service, serviceTest]);
  var testRunner = (0,useServiceClient/* default */.Z)(service, factory);
  var currentTest = (0,useChange/* default */.Z)(testRunner, function (t) {
    return t === null || t === void 0 ? void 0 : t.currentTest;
  });

  var handleSelectTest = function handleSelectTest(test) {
    testRunner.currentTest = test;
  };

  if (!serviceTest) return /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "warning"
  }, "Sorry, there are no tests available for service", " ", service.specification.name, ".");
  if (!testRunner) return /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react.createElement(TestList, {
    testRunner: testRunner,
    currentTest: currentTest,
    onSelectTest: handleSelectTest
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 6
  }, currentTest ? /*#__PURE__*/react.createElement(ActiveTest, {
    test: currentTest
  }) : /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, "Select a test to get started.")), service && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react.createElement(DashboardDevice/* default */.Z, {
    showAvatar: true,
    showHeader: true,
    device: service.device
  })));
}

/***/ }),

/***/ 7746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useGridBreakpoints; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84377);


function useGridBreakpoints(itemCount) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      drawerType = _useContext.drawerType;

  if (itemCount !== undefined) {
    switch (itemCount) {
      case 1:
      case 2:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6
        };

      case 3:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 4,
          xl: 4
        };
    }
  }

  if (drawerType != _AppContext__WEBPACK_IMPORTED_MODULE_1__/* .DrawerType.None */ .jw.None) return {
    xs: 12,
    md: 6,
    sm: 6,
    lg: 6,
    xl: 4
  };else return {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 3
  };
}

/***/ }),

/***/ 79465:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServiceClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90293);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function useServiceClient(service, factory, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
      client = _useState[0],
      setClient = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var c = service && factory(service);
    setClient(c);
    return function () {
      return c === null || c === void 0 ? void 0 : c.unmount();
    };
  }, [service].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(deps))); // don't use factory in cache!

  return client;
}

/***/ })

}]);