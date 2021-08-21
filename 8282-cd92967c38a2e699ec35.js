"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8282],{

/***/ 68282:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardLED; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49013);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89196);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71815);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2285);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91635);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84377);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54774);
/* harmony import */ var _widgets_LEDWidget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56931);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82677);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20392);













function DashboardLED(props) {
  var service = props.service;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z),
      bus = _useContext.bus;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP),
      setError = _useContext2.setError;

  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(32),
      speed = _useState[0],
      setSpeed = _useState[1];

  var waveLengthRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .LedReg.WaveLength */ .Abo.WaveLength);

  var _useRegisterUnpackedV = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(waveLengthRegister, props),
      waveLength = _useRegisterUnpackedV[0];

  var busColorRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .LedReg.Color */ .Abo.Color);
  var busColor = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(busColorRegister, props);
  var serverColor = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(server === null || server === void 0 ? void 0 : server.color, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.values();
  });
  var ledCountRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .LedReg.LedCount */ .Abo.LedCount);

  var _useRegisterUnpackedV2 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(ledCountRegister, props),
      ledCount = _useRegisterUnpackedV2[0];

  var _ref = serverColor || busColor,
      r = _ref[0],
      g = _ref[1],
      b = _ref[2];

  var rgb = r << 16 | g << 8 | b; // nothing to see

  if (r === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, null); // send animate command

  var handleSetColor = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(col) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_4__/* .LedCmd.Animate */ .tVE.Animate, (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_6__/* .jdpack */ .AV)("u8 u8 u8 u8", [col >> 16 & 0xff, col >> 8 & 0xff, col & 0xff, speed]));

            case 3:
              _context.next = 5;
              return bus.delay(500);

            case 5:
              _context.next = 7;
              return busColorRegister.sendGetAsync();

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              setError(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function handleSetColor(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_widgets_LEDWidget__WEBPACK_IMPORTED_MODULE_9__.default, {
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