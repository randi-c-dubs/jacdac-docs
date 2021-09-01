"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5444,2860,7746],{

/***/ 94500:
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.Z = _default;

/***/ }),

/***/ 14308:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export SettingsClient */
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85413);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71815);
/* harmony import */ var _pack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91635);
/* harmony import */ var _packet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57683);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93642);
/* harmony import */ var _serviceclient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56763);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81794);








/**
 * A settings service client implementation.
 * @category Clients
 */

var SettingsClient = /*#__PURE__*/function (_JDServiceClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(SettingsClient, _JDServiceClient);

  function SettingsClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    service.registersUseAcks = true;
    return _this;
  }

  var _proto = SettingsClient.prototype;

  _proto.clear = /*#__PURE__*/function () {
    var _clear = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(function* () {
      yield this.service.sendCmdAsync(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SettingsCmd.Clear */ .vnb.Clear);
    });

    function clear() {
      return _clear.apply(this, arguments);
    }

    return clear;
  }();

  _proto.listKeys = /*#__PURE__*/function () {
    var _listKeys = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(function* () {
      var inp = new _pipes__WEBPACK_IMPORTED_MODULE_3__/* .InPipeReader */ .oI(this.bus);
      yield this.service.sendPacketAsync(inp.openCommand(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SettingsCmd.ListKeys */ .vnb.ListKeys), true);
      var {
        output
      } = yield inp.readAll();
      var keys = output.map(pkt => pkt.stringData);
      return keys.filter(k => !!k);
    });

    function listKeys() {
      return _listKeys.apply(this, arguments);
    }

    return listKeys;
  }();

  _proto.list = /*#__PURE__*/function () {
    var _list = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(function* () {
      var inp = new _pipes__WEBPACK_IMPORTED_MODULE_3__/* .InPipeReader */ .oI(this.bus);
      yield this.service.sendPacketAsync(inp.openCommand(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SettingsCmd.List */ .vnb.List), true);
      var {
        output
      } = yield inp.readAll();
      return output.map(pkt => {
        var [key, value] = pkt.jdunpack("z b");
        return key && {
          key,
          value
        };
      }).filter(kv => !!kv);
    });

    function list() {
      return _list.apply(this, arguments);
    }

    return list;
  }();

  _proto.setValue = /*#__PURE__*/function () {
    var _setValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(function* (key, value) {
      key = key.trim();

      if (value === undefined) {
        yield this.deleteValue(key);
      } else {
        var pkt = _packet__WEBPACK_IMPORTED_MODULE_2__/* .default.from */ .Z.from(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SettingsCmd.Set */ .vnb.Set, (0,_pack__WEBPACK_IMPORTED_MODULE_1__/* .jdpack */ .AV)("z b", [key, value]));
        yield this.service.sendPacketAsync(pkt);
        this.emit(_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHANGE */ .Ver);
      }
    });

    function setValue(_x, _x2) {
      return _setValue.apply(this, arguments);
    }

    return setValue;
  }();

  _proto.setStringValue = /*#__PURE__*/function () {
    var _setStringValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(function* (key, value) {
      yield this.setValue(key, value ? (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .stringToBuffer */ .k8)(value) : undefined);
    });

    function setStringValue(_x3, _x4) {
      return _setStringValue.apply(this, arguments);
    }

    return setStringValue;
  }();

  _proto.getValue = /*#__PURE__*/function () {
    var _getValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(function* (key) {
      if (!key) return undefined;
      key = key.trim();
      var pkt = _packet__WEBPACK_IMPORTED_MODULE_2__/* .default.from */ .Z.from(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SettingsCmd.Get */ .vnb.Get, (0,_pack__WEBPACK_IMPORTED_MODULE_1__/* .jdpack */ .AV)("s", [key]));
      var resp = yield this.service.sendCmdAwaitResponseAsync(pkt);
      var [rkey, value] = (0,_pack__WEBPACK_IMPORTED_MODULE_1__/* .jdunpack */ .TE)(resp.data, "z b");

      if (key !== rkey) {
        console.error("device returned different key, got \"" + rkey + "\", expected \"" + key + "\"");
        return undefined;
      }

      return value;
    });

    function getValue(_x5) {
      return _getValue.apply(this, arguments);
    }

    return getValue;
  }();

  _proto.getStringValue = /*#__PURE__*/function () {
    var _getStringValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(function* (key) {
      var value = yield this.getValue(key);
      return value && (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .bufferToString */ .zT)(value);
    });

    function getStringValue(_x6) {
      return _getStringValue.apply(this, arguments);
    }

    return getStringValue;
  }();

  _proto.deleteValue = /*#__PURE__*/function () {
    var _deleteValue = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(function* (key) {
      if (!key) return;
      key = key.trim();
      var pkt = _packet__WEBPACK_IMPORTED_MODULE_2__/* .default.from */ .Z.from(_constants__WEBPACK_IMPORTED_MODULE_0__/* .SettingsCmd.Delete */ .vnb.Delete, (0,_pack__WEBPACK_IMPORTED_MODULE_1__/* .jdpack */ .AV)("s", [key]));
      yield this.service.sendPacketAsync(pkt);
      this.emit(_constants__WEBPACK_IMPORTED_MODULE_0__/* .CHANGE */ .Ver);
    });

    function deleteValue(_x7) {
      return _deleteValue.apply(this, arguments);
    }

    return deleteValue;
  }();

  return SettingsClient;
}(_serviceclient__WEBPACK_IMPORTED_MODULE_4__/* .JDServiceClient */ .P);
/* harmony default export */ __webpack_exports__["Z"] = (SettingsClient);

/***/ }),

/***/ 94431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ConnectAlert; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33287);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13173);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20392);
/* harmony import */ var _buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84125);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42862);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54774);
// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
  button: {
    marginLeft: theme.spacing(2)
  }
}));

function NoSsrConnectAlert(props) {
  var classes = useStyles();
  var {
    serviceClass,
    closeable
  } = props;
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z);
  var {
    transports
  } = bus;
  var devices = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(bus, b => b.devices({
    serviceClass,
    ignoreSelf: true
  }));
  var spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass); // don't show if no transport, some devices

  if (!transports.length || devices !== null && devices !== void 0 && devices.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    severity: "info",
    closeable: closeable
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect a ", spec.name, " device?"), transports.map(transport => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    key: transport.type,
    transport: transport,
    className: classes.button,
    full: true,
    transparent: true
  }))));
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NoSsrConnectAlert, props));
}

/***/ }),

/***/ 2928:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServices; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);



function useServices(options) {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z);
  var services = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(bus, _ => (_ === null || _ === void 0 ? void 0 : _.services(options)) || [], [JSON.stringify(options)]);
  return services;
}

/***/ }),

/***/ 95393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GridHeader; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4998);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
  hr: {
    background: theme.palette.text.disabled,
    marginBottom: "unset"
  },
  start: {
    width: theme.spacing(2)
  }
}));
function GridHeader(props) {
  var {
    title,
    count,
    variant,
    action
  } = props;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    container: true,
    direction: "row",
    spacing: 1,
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.hr, classes.start)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true
  }, action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    mr: 1
  }, action), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    component: "span",
    variant: variant || "subtitle1"
  }, title), count !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    ml: 0.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    label: count
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: classes.hr
  }))));
}

/***/ }),

/***/ 82860:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KeyboardKeyInput; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70274);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81751);
/* harmony import */ var react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DarkModeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91350);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19640);
/* harmony import */ var _jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41577);








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
  capture: {
    cursor: "pointer",
    "&:hover": {
      borderColor: theme.palette.primary.main
    },
    "&:focus": {
      borderColor: theme.palette.action.active
    }
  },
  darkKeyboard: {
    backgroundColor: "#333 !important",
    borderColor: "#777 !important",
    color: "white !important",
    "& .hg-button": {
      background: "rgba(0, 0, 0, 0.5) !important",
      color: "white"
    },
    "& .hg-button.buttonSelected": {
      background: theme.palette.primary.dark + " !important",
      color: "white !important"
    }
  },
  keyboard: {
    "& .buttonSelected": {
      background: theme.palette.primary.dark + " !important",
      color: "white !important"
    }
  }
}));
function KeyboardKeyInput(props) {
  var {
    initialSelector,
    initialModifiers,
    selector,
    modifiers,
    onChange
  } = props;
  var uncontrolled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => selector === undefined || modifiers === undefined, []);
  var {
    0: selector_,
    1: setSelector_
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSelector || 0);
  var {
    0: modifiers_,
    1: setModifiters_
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialModifiers || _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.None */ .Q2Q.None);
  var {
    darkMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DarkModeContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var _keyboardRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var classes = useStyles();
  var theme = "hg-theme-default hg-layout-default " + (darkMode === "dark" ? classes.darkKeyboard : classes.keyboard);
  var keyboardId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__/* .useId */ .Me)();
  var layout = {
    default: ["{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}", "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}", "{tab} q w e r t y u i o p [ ] \\", "{capslock} a s d f g h j k l ; ' {enter}", "{shiftleft} z x c v b n m , . / {shiftright}", "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"]
  };
  var display = {
    "{escape}": "esc ⎋",
    "{tab}": "tab ⇥",
    "{backspace}": "backspace ⌫",
    "{enter}": "enter ↵",
    "{capslock}": "caps lock ⇪",
    "{shiftleft}": "shift ⇧",
    "{shiftright}": "shift ⇧",
    "{controlleft}": "ctrl ⌃",
    "{controlright}": "ctrl ⌃",
    "{altleft}": "alt ⌥",
    "{altright}": "alt ⌥",
    "{metaleft}": "cmd ⌘",
    "{metaright}": "cmd ⌘"
  };

  var handleKeyboardKeyPress = code => {
    code = code.toLowerCase().replace(/[{}]/g, "");
    var newSelector = selector_;
    var newModifiers = modifiers_;
    var msel = _jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_5__/* .selectors */ .wl[code];
    var mcode = _jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_5__/* .modifierCodes */ .db[code];

    if (msel) {
      if (msel === selector) newSelector = undefined;else newSelector = msel;
    } else {
      if (mcode) {
        if (newModifiers & mcode) newModifiers &= ~mcode;else newModifiers |= mcode;
      }
    }

    setSelector_(newSelector);
    setModifiters_(newModifiers);
    onChange(newSelector, newModifiers);
  }; // update external values


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selector !== undefined) {
      if (uncontrolled) console.warn("trying to set an uncontrolled selector");
      setSelector_(selector);
    }
  }, [selector]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (modifiers !== undefined) {
      if (uncontrolled) console.warn("trying to set an uncontrolled modifier");
      setModifiters_(modifiers);
    }
  }, [modifiers]);
  var value = (0,_jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_5__/* .renderKeyboardKey */ .OJ)(selector_, modifiers_, false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _keyboardRef$current;

    (_keyboardRef$current = _keyboardRef.current) === null || _keyboardRef$current === void 0 ? void 0 : _keyboardRef$current.addButtonTheme(value, "buttonSelected");
    return () => {
      var _keyboardRef$current2;

      return (_keyboardRef$current2 = _keyboardRef.current) === null || _keyboardRef$current2 === void 0 ? void 0 : _keyboardRef$current2.removeButtonTheme(value, "buttonSelected");
    };
  }, [value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default()), {
    baseClass: keyboardId,
    keyboardRef: r => _keyboardRef.current = r,
    onKeyPress: handleKeyboardKeyPress,
    layout: layout,
    theme: theme,
    display: display,
    mergeDisplay: true
  });
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
  var {
    drawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP);

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

  var {
    0: client,
    1: setClient
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var c = service && factory(service);
    setClient(c);
    return () => c === null || c === void 0 ? void 0 : c.unmount();
  }, [service].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(deps))); // don't use factory in cache!

  return client;
}

/***/ }),

/***/ 24180:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HIDEvents; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(73108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(52468);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(96422);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(65733);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71815);
/* harmony import */ var _components_ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82860);
/* harmony import */ var _components_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79885);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(94500);
/* harmony import */ var _jacdac_ts_src_jdom_clients_settingsclient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14308);
/* harmony import */ var _components_useServiceClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79465);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81794);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91635);
/* harmony import */ var _jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80303);
/* harmony import */ var _components_hooks_useServices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2928);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36176);
/* harmony import */ var _components_ui_Alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95453);
/* harmony import */ var _components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95393);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(13996);
/* harmony import */ var _components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(94431);
/* harmony import */ var _components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31477);
/* harmony import */ var _components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7746);
/* harmony import */ var _components_ui_Suspense__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(69672);
/* harmony import */ var _components_hooks_useServiceProviderFromServiceClass__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(36134);
/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(84377);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(99330);
/* harmony import */ var _jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(41577);



























var ImportButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/* import() */ 119).then(__webpack_require__.bind(__webpack_require__, 20119))); // all settings keys are prefixed with this string

var PREFIX = "@ke_"; // data layout format (18bytes)

var FORMAT = "b[8] u32 u8 u8 u16 u16"; // data layout types

function HIDEventToBuffer(event, ev) {
  var deviceId = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .fromHex */ .H_)(event.service.device.deviceId);
  var {
    service,
    code
  } = event;
  var {
    serviceClass,
    serviceIndex
  } = service;
  var {
    selector,
    modifiers
  } = ev;
  var payload = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_9__/* .jdpack */ .AV)(FORMAT, [deviceId, serviceClass, serviceIndex, code, selector, modifiers]);
  return payload;
}

function bufferToHIDEvent(key, data, bus) {
  var _device$service;

  if ((data === null || data === void 0 ? void 0 : data.length) !== 18) return undefined;
  var [deviceId, serviceClass, serviceIndex, eventCode, selector, modifiers] = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_9__/* .jdunpack */ .TE)(data, FORMAT);
  var deviceIds = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .toHex */ .NC)(deviceId);
  var device = bus.device(deviceIds, true);
  var event = device === null || device === void 0 ? void 0 : (_device$service = device.service(serviceIndex)) === null || _device$service === void 0 ? void 0 : _device$service.event(eventCode);
  if (!event || event.service.serviceClass !== serviceClass) return undefined;
  return {
    key,
    eventId: event.id,
    selector,
    modifiers
  };
}

function SelectHIDEvent(props) {
  var {
    onAdd
  } = props;
  var {
    0: event,
    1: setEvent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  var {
    0: selector,
    1: setSelector
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  var {
    0: modifiers,
    1: setModifiers
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .HidKeyboardModifiers.None */ .Q2Q.None);
  var excludedServices = [_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_CONTROL */ .gm9, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_PROTO_TEST */ .$Bn, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_ROLE_MANAGER */ .igi, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_SETTINGS */ .B9b, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_LOGGER */ .w9j];

  var eventFilter = ev => ev.code !== _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SystemEvent.StatusCodeChanged */ .nSK.StatusCodeChanged;

  var services = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)({
    ignoreSelf: true,
    specification: true
  }).filter(srv => excludedServices.indexOf(srv.serviceClass) < 0).filter(srv => srv.events.some(eventFilter));
  var events = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .arrayConcatMany */ .ue)(services.map(service => service.events.filter(eventFilter)));

  var handleClickEvent = newEvent => () => setEvent(event === newEvent ? undefined : newEvent);

  var handleKeyChange = (newSelector, newModifiers) => {
    setSelector(newSelector);
    setModifiers(newModifiers);
  };

  var disabled = !event || !selector;

  var handleAdd = () => onAdd({
    eventId: event.id,
    selector,
    modifiers
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, !(events !== null && events !== void 0 && events.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    severity: "info"
  }, "Connect your devices to bind keyboard commands.")), events.filter(ev => !event || ev === event).map(ev => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    item: true,
    xs: 12,
    sm: 6,
    lg: 4,
    xl: 3,
    key: ev.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
    device: ev.service.device,
    showAvatar: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z, {
    variant: "h5"
  }, ev.service.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z, {
    variant: "h4"
  }, (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_15__/* .humanify */ .lW)(ev.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_12__.Button, {
    onClick: handleClickEvent(ev),
    variant: "outlined"
  }, ev === event ? "unselect" : "select"))))), event && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    title: "Enter your keyboard/mouse command"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_4__.default, {
    selector: selector,
    modifiers: modifiers,
    onChange: handleKeyChange
  }))), !disabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    title: "Save your binding"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_12__.Button, {
    variant: "contained",
    color: "primary",
    disabled: disabled,
    onClick: handleAdd
  }, "Save binding"))));
}

function HIDEvents() {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z);
  var {
    setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_AppContext__WEBPACK_IMPORTED_MODULE_21__/* .default */ .ZP);
  var settingsServices = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)({
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_SETTINGS */ .B9b
  });
  var {
    0: settingsService,
    1: setSettingsService
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  var {
    0: hidEvents,
    1: setHIDEvents
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var gridBreakpoints = (0,_components_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z)();
  var exportRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var handleOpenAdd = () => setOpen(true);

  var handleCloseAdd = () => setOpen(false);

  var factory = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(srv => new _jacdac_ts_src_jdom_clients_settingsclient__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z(srv), []);
  var settings = (0,_components_useServiceClient__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(settingsService, factory);
  (0,_components_hooks_useServiceProviderFromServiceClass__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z)(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_SETTINGS */ .B9b);
  (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(settings, /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)(function* () {
    var hes = [];

    if (settings) {
      var all = yield settings.list();

      for (var kv of all.filter(entry => {
        var _entry$key;

        return (_entry$key = entry.key) === null || _entry$key === void 0 ? void 0 : _entry$key.startsWith(PREFIX);
      })) {
        var {
          key,
          value
        } = kv;
        var he = bufferToHIDEvent(key, value, bus);
        if (he) hes.push(he);
      }
    }

    if (JSON.stringify(hes) !== JSON.stringify(hidEvents)) setHIDEvents(hes);
  }));

  var handleAdd = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)(function* (hidEvent) {
      setOpen(false);
      var event = bus.node(hidEvent.eventId);
      if (!event) return;
      var payload = HIDEventToBuffer(event, hidEvent);
      settings.setValue(PREFIX + (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_10__/* .randomDeviceId */ .b_)(), payload);
    });

    return function handleAdd(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleRemoveBinding = index => () => {
    var {
      key
    } = hidEvents[index];
    if (key) settings.deleteValue(key);
  };

  var handleSelectSettingsService = service => () => setSettingsService(settingsService === service ? undefined : service);

  var exportUri = hidEvents && "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify((0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .clone */ .d9)(hidEvents).map(h => {
    delete h.key;
    return h;
  })));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (exportRef.current) exportRef.current.download = "bindings.json";
  }, [exportRef.current]);

  var handleFilesUploaded = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z)(function* (files) {
      for (var file of files) {
        try {
          var text = yield file.text();
          var json = JSON.parse(text);

          if (Array.isArray(json)) {
            for (var _hidEvent of json) {
              var event = bus.node(_hidEvent.eventId);

              if (event) {
                var payload = HIDEventToBuffer(event, _hidEvent);
                settings.setValue(PREFIX + (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_10__/* .randomDeviceId */ .b_)(), payload);
              }
            }
          }
        } catch (e) {
          console.warn(e);
          setError("invalid file " + file.name);
        }
      }
    });

    return function handleFilesUploaded(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Accessibility Adapter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    title: "Select an adapter"
  }), !(settingsServices !== null && settingsServices !== void 0 && settingsServices.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_SETTINGS */ .B9b
  })), settingsServices.filter(srv => !settingsService || srv === settingsService).map(srv => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, Object.assign({
    item: true,
    key: srv.id
  }, gridBreakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
    device: srv.device,
    showAvatar: true,
    showMedia: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_12__.Button, {
    variant: "outlined",
    onClick: handleSelectSettingsService(srv)
  }, settingsService === srv ? "unselect" : "select"))))), settings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    title: "Command Bindings"
  }), !(hidEvents !== null && hidEvents !== void 0 && hidEvents.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    severity: "info"
  }, "No bindings yet! Click", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Add binding"), " to start building your adapter.")), hidEvents === null || hidEvents === void 0 ? void 0 : hidEvents.map(_ref4 => {
    var {
      eventId,
      selector,
      modifiers
    } = _ref4;
    return {
      eventId,
      event: bus.node(eventId),
      selector,
      modifiers
    };
  }).map((_ref5, index) => {
    var {
      eventId,
      event,
      selector,
      modifiers
    } = _ref5;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, Object.assign({
      item: true
    }, gridBreakpoints, {
      key: eventId
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
      device: event === null || event === void 0 ? void 0 : event.service.device,
      showAvatar: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* .default */ .Z, null, event ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z, {
      variant: "h6"
    }, event.service.name + " " + (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_15__/* .humanify */ .lW)(event.name)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Alert__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
      severity: "warning"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z, null, "Device not found")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z, {
      variant: "h5"
    }, (0,_jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_22__/* .renderKeyboardKey */ .OJ)(selector, modifiers, true))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      title: "Remove binding",
      onClick: handleRemoveBinding(index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_30__/* .default */ .Z, null)))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_12__.Button, {
    variant: "contained",
    color: "primary",
    onClick: handleOpenAdd
  }, "Add binding")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_12__.Button, {
    ref: exportRef,
    variant: "outlined",
    href: exportUri
  }, "Export")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_Suspense__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImportButton, {
    icon: false,
    text: "Import",
    onFilesUploaded: handleFilesUploaded,
    acceptedFiles: ["application/json"]
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__/* .default */ .Z, {
    open: open,
    onClose: handleCloseAdd,
    maxWidth: "lg",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_32__/* .default */ .Z, null, "Add binding"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_33__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SelectHIDEvent, {
    onAdd: handleAdd
  }))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-hid-events-tsx-c94021c0caec1c1abd8f.js.map