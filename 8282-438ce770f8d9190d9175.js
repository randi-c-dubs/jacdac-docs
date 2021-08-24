"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8282],{

/***/ 68282:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardLED; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49013);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71815);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2285);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91635);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84377);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54774);
/* harmony import */ var _widgets_LEDWidget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56931);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82677);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20392);












function DashboardLED(props) {
  var {
    service
  } = props;
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z);
  var {
    setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP);
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";
  var {
    0: speed,
    1: setSpeed
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(32);
  var waveLengthRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .LedReg.WaveLength */ .Abo.WaveLength);
  var [waveLength] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(waveLengthRegister, props);
  var busColorRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .LedReg.Color */ .Abo.Color);
  var busColor = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(busColorRegister, props);
  var serverColor = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(server === null || server === void 0 ? void 0 : server.color, _ => _ === null || _ === void 0 ? void 0 : _.values());
  var ledCountRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .LedReg.LedCount */ .Abo.LedCount);
  var [ledCount] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(ledCountRegister, props);
  var [r, g, b] = serverColor || busColor;
  var rgb = r << 16 | g << 8 | b; // nothing to see

  if (r === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null); // send animate command

  var handleSetColor = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(function* (col) {
      try {
        yield service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .LedCmd.Animate */ .tVE.Animate, (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_5__/* .jdpack */ .AV)("u8 u8 u8 u8", [col >> 16 & 0xff, col >> 8 & 0xff, col & 0xff, speed]));
        yield bus.delay(500);
        yield busColorRegister.sendGetAsync();
      } catch (e) {
        setError(e);
      }
    });

    return function handleSetColor(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_LEDWidget__WEBPACK_IMPORTED_MODULE_8__.default, {
    color: color,
    ledColor: rgb,
    waveLength: waveLength,
    ledCount: ledCount,
    onLedColorChange: handleSetColor,
    speed: speed,
    onSpeedChange: setSpeed
  });
}

/***/ })

}]);