"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7787],{

/***/ 7787:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardCharacterScreen; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48059);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1059);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2285);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82677);
/* harmony import */ var _CmdButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82613);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(58590);











var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(() => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)({
  text: {
    fontFamily: "monospace",
    fontWeight: 100
  },
  box: {}
}));
function DashboardCharacterScreen(props) {
  var {
    service
  } = props;
  var classes = useStyles();
  var messageRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Message */ .OEJ.Message);
  var rowsRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Rows */ .OEJ.Rows);
  var columnsRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.Columns */ .OEJ.Columns);
  var textDirectionRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenReg.TextDirection */ .OEJ.TextDirection);
  var [message] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(messageRegister, props);
  var [rows] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(rowsRegister, props);
  var [columns] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(columnsRegister, props);
  var [textDirection] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(textDirectionRegister, props);
  var {
    0: fieldMessage,
    1: setFieldMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(message);
  var {
    textPrimary,
    background,
    controlBackground
  } = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)("primary");

  var handleClear = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(function* () {
      setFieldMessage("");
      yield service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenCmd.Clear */ .nWR.Clear);
    });

    return function handleClear() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleFieldMessageChange = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(function* (ev) {
      setFieldMessage(ev.target.value);
      yield messageRegister.sendSetStringAsync(ev.target.value, true);
    });

    return function handleFieldMessageChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // set first value of message


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!fieldMessage && message) setFieldMessage(message);
  }, [message]);
  if (rows === undefined || columns === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, null); // size unknown

  var cw = 8;
  var ch = 10;
  var m = 1;
  var mo = 2;
  var fs = 8;
  var rtl = textDirection === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CharacterScreenTextDirection.RightToLeft */ .mbk.RightToLeft;
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
      els.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
        key: row + "-" + column
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
        x: x,
        y: y,
        width: cw,
        height: ch,
        className: classes.box,
        fill: controlBackground
      }), char && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    value: fieldMessage,
    onChange: handleFieldMessageChange,
    multiline: true,
    rows: rows || 2,
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CmdButton__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    title: "clear the entire display",
    onClick: handleClear,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, null)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    tabIndex: 0,
    title: "character screen displaying \"" + message + "\"",
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
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
//# sourceMappingURL=7787-09e1a539ef9c51756f46.js.map