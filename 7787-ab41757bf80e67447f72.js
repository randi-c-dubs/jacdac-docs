"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7787],{

/***/ 7787:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardCharacterScreen; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89196);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48059);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1059);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60650);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2285);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82677);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82613);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(58590);












var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(function () {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)({
    text: {
      fontFamily: "monospace",
      fontWeight: 100
    },
    box: {}
  });
});
function DashboardCharacterScreen(props) {
  var service = props.service;
  var classes = useStyles();
  var messageRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CharacterScreenReg.Message */ .OEJ.Message);
  var rowsRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CharacterScreenReg.Rows */ .OEJ.Rows);
  var columnsRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CharacterScreenReg.Columns */ .OEJ.Columns);
  var textDirectionRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CharacterScreenReg.TextDirection */ .OEJ.TextDirection);

  var _useRegisterUnpackedV = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(messageRegister, props),
      message = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(rowsRegister, props),
      rows = _useRegisterUnpackedV2[0];

  var _useRegisterUnpackedV3 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(columnsRegister, props),
      columns = _useRegisterUnpackedV3[0];

  var _useRegisterUnpackedV4 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(textDirectionRegister, props),
      textDirection = _useRegisterUnpackedV4[0];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(message),
      fieldMessage = _useState[0],
      setFieldMessage = _useState[1];

  var _useWidgetTheme = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)("primary"),
      textPrimary = _useWidgetTheme.textPrimary,
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground;

  var handleClear = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setFieldMessage("");
              _context.next = 3;
              return service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CharacterScreenCmd.Clear */ .nWR.Clear);

            case 3:
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

  var handleFieldMessageChange = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(ev) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setFieldMessage(ev.target.value);
              _context2.next = 3;
              return messageRegister.sendSetStringAsync(ev.target.value, true);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleFieldMessageChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // set first value of message


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!fieldMessage && message) setFieldMessage(message);
  }, [message]);
  if (rows === undefined || columns === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, null); // size unknown

  var cw = 8;
  var ch = 10;
  var m = 1;
  var mo = 2;
  var fs = 8;
  var rtl = textDirection === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CharacterScreenTextDirection.RightToLeft */ .mbk.RightToLeft;
  var w = columns * (cw + m) - m + 2 * mo;
  var h = rows * (ch + m) - m + 2 * mo;
  var lines = (message || "").split(/\n/g);
  var els = [];
  var y = mo;

  for (var row = 0; row < rows; ++row) {
    var x = mo;
    var line = lines[row];

    for (var column = 0; column < columns; ++column) {
      var char = line === null || line === void 0 ? void 0 : line[rtl ? columns - 1 - column : column];
      els.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("g", {
        key: row + "-" + column
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("rect", {
        x: x,
        y: y,
        width: cw,
        height: ch,
        className: classes.box,
        fill: controlBackground
      }), char && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("text", {
        x: x + cw / 2,
        y: y + ch - fs / 3,
        textAnchor: "middle",
        fontSize: fs,
        className: classes.text,
        fill: textPrimary,
        "aria-label": char
      }, char)));
      x += cw + m;
    }

    y += ch + m;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    value: fieldMessage,
    onChange: handleFieldMessageChange,
    multiline: true,
    rows: rows || 2,
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    title: "clear the entire display",
    onClick: handleClear,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, null)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    tabIndex: 0,
    title: "character screen displaying \"" + message + "\"",
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("rect", {
    x: 0,
    y: 0,
    width: w,
    height: h,
    r: m / 2,
    fill: background
  }), els))));
}

/***/ })

}]);