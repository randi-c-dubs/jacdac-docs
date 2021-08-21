"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5969,2860],{

/***/ 86481:
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
  d: "M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"
}), 'Keyboard');

exports.Z = _default;

/***/ }),

/***/ 25969:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardHIDKeyboard; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80838);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91635);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82613);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58590);
/* harmony import */ var _ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82860);
/* harmony import */ var _material_ui_icons_Keyboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86481);










function DashboardHIDKeyboard(props) {
  var service = props.service;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      selector = _useState[0],
      setSelector = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.None */ .Q2Q.None),
      modifiers = _useState2[0],
      setModifiers = _useState2[1];

  var handleKeyChange = function handleKeyChange(newSelector, newModifiers) {
    setSelector(newSelector);
    setModifiers(newModifiers);
  };

  var handleClear = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSelector(0);
              setModifiers(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardModifiers.None */ .Q2Q.None);
              _context.next = 4;
              return service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardCmd.Clear */ .Fnq.Clear);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClear() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var unpacked, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              unpacked = [[[selector, modifiers, _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardAction.Press */ .gBd.Press]]];
              data = (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("r: u16 u8 u8", unpacked);
              _context2.next = 4;
              return service.sendCmdAsync(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_2__/* .HidKeyboardCmd.Key */ .Fnq.Key, data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClick() {
      return _ref2.apply(this, arguments);
    };
  }();

  var disabled = !selector && !modifiers;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_KeyboardKeyInput__WEBPACK_IMPORTED_MODULE_5__.default, {
    selector: selector,
    modifiers: modifiers,
    onChange: handleKeyChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "send keys",
    disabled: disabled,
    onClick: handleClick,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Keyboard__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "clear keys",
    disabled: disabled,
    onClick: handleClear,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null)
  })));
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








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
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
  });
});
function KeyboardKeyInput(props) {
  var initialSelector = props.initialSelector,
      initialModifiers = props.initialModifiers,
      selector = props.selector,
      modifiers = props.modifiers,
      onChange = props.onChange;
  var uncontrolled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return selector === undefined || modifiers === undefined;
  }, []);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSelector || 0),
      selector_ = _useState[0],
      setSelector_ = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialModifiers || _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .HidKeyboardModifiers.None */ .Q2Q.None),
      modifiers_ = _useState2[0],
      setModifiters_ = _useState2[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DarkModeContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z),
      darkMode = _useContext.darkMode; // eslint-disable-next-line @typescript-eslint/no-explicit-any


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

  var handleKeyboardKeyPress = function handleKeyboardKeyPress(code) {
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


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (selector !== undefined) {
      if (uncontrolled) console.warn("trying to set an uncontrolled selector");
      setSelector_(selector);
    }
  }, [selector]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (modifiers !== undefined) {
      if (uncontrolled) console.warn("trying to set an uncontrolled modifier");
      setModifiters_(modifiers);
    }
  }, [modifiers]);
  var value = (0,_jacdac_ts_src_servers_hidkeyboardserver__WEBPACK_IMPORTED_MODULE_5__/* .renderKeyboardKey */ .OJ)(selector_, modifiers_, false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _keyboardRef$current;

    (_keyboardRef$current = _keyboardRef.current) === null || _keyboardRef$current === void 0 ? void 0 : _keyboardRef$current.addButtonTheme(value, "buttonSelected");
    return function () {
      var _keyboardRef$current2;

      return (_keyboardRef$current2 = _keyboardRef.current) === null || _keyboardRef$current2 === void 0 ? void 0 : _keyboardRef$current2.removeButtonTheme(value, "buttonSelected");
    };
  }, [value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_simple_keyboard__WEBPACK_IMPORTED_MODULE_2___default()), {
    baseClass: keyboardId,
    keyboardRef: function keyboardRef(r) {
      return _keyboardRef.current = r;
    },
    onKeyPress: handleKeyboardKeyPress,
    layout: layout,
    theme: theme,
    display: display,
    mergeDisplay: true
  });
}

/***/ })

}]);