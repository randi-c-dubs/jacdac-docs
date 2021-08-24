"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[9979],{

/***/ 79979:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardLEDMatrixDisplay; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49013);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54774);
/* harmony import */ var _widgets_LEDMatrixWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71598);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82677);







function DashboardLEDMatrixDisplay(props) {
  var {
    service
  } = props;
  var ledsRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .LedMatrixReg.Leds */ .o$T.Leds);
  var brightnessRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .LedMatrixReg.Brightness */ .o$T.Brightness);
  var rowsRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .LedMatrixReg.Rows */ .o$T.Rows);
  var columnsRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .LedMatrixReg.Columns */ .o$T.Columns);
  var [leds] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(ledsRegister, props);
  var [brightness = 0] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(brightnessRegister, props);
  var [rows] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(rowsRegister, props);
  var [columns] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(columnsRegister, props);
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";
  (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(server);

  var handleChange = newLeds => {
    ledsRegister.sendSetAsync(newLeds, true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_LEDMatrixWidget__WEBPACK_IMPORTED_MODULE_5__.default, {
    leds: leds,
    brightness: brightness,
    rows: rows,
    columns: columns,
    color: color,
    onChange: handleChange
  });
}

/***/ })

}]);