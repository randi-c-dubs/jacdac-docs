"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1576],{

/***/ 21576:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardPower; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48059);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49013);
/* harmony import */ var _widgets_PowerButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2250);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60650);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82677);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2285);
/* harmony import */ var _jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13996);










function DashboardPower(props) {
  var _PowerPowerStatus$pow;

  var {
    service
  } = props;
  var allowedRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerReg.Allowed */ .$xp.Allowed);
  var powerStatusRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerReg.PowerStatus */ .$xp.PowerStatus);
  var batteryChargeRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerReg.BatteryCharge */ .$xp.BatteryCharge);
  var allowed = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterBoolValue */ .I8)(allowedRegister, props);
  var [powerStatus] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(powerStatusRegister, props);
  var [batteryCharge] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(batteryChargeRegister, props);
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";
  var {
    background,
    active,
    textProps
  } = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(color);
  if (powerStatus === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null);
  var w = 64;
  var h = w + 16;
  var r = w - 4 >> 1;
  var ro = r - 4;
  var ri = ro - 8;
  var off = powerStatus === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerPowerStatus.Disallowed */ .p6N.Disallowed;
  var label = off ? "off" : (0,_jacdac_ts_jacdac_spec_spectool_jdspec__WEBPACK_IMPORTED_MODULE_9__/* .humanify */ .lW)((_PowerPowerStatus$pow = _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerPowerStatus */ .p6N[powerStatus]) === null || _PowerPowerStatus$pow === void 0 ? void 0 : _PowerPowerStatus$pow.toLowerCase());
  var mw = 2;
  var bw = 12;
  var hw = 4;
  var rw = mw / 2;

  var toggleEnabled = () => allowedRegister.sendSetBoolAsync(!allowed, true);

  var widgetSize = "clamp(3rem, 10vw, 16vw)";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    width: w,
    height: h,
    size: widgetSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_PowerButton__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    cx: w / 2,
    cy: w / 2,
    r: ro,
    ri: ri,
    off: off,
    color: color,
    label: label,
    borderStroke: (powerStatus === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerPowerStatus.Overload */ .p6N.Overload || powerStatus === _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .PowerPowerStatus.Overprovision */ .p6N.Overprovision) && "red",
    onClick: toggleEnabled
  }), batteryCharge !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "battery charge " + Math.floor(batteryCharge * 100) + "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: w - bw - mw,
    y: mw,
    width: bw * batteryCharge,
    height: hw,
    rx: rw,
    ry: rw,
    fill: active
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: w - bw - mw,
    y: mw,
    width: bw,
    height: hw,
    rx: rw,
    ry: rw,
    fill: "none",
    stroke: background,
    strokeWidth: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", Object.assign({
    x: w - 2 * mw,
    y: mw + hw / 2
  }, textProps, {
    textAnchor: "end",
    fontSize: hw * 0.6
  }), Math.floor(batteryCharge * 100), "%"))));
}

/***/ })

}]);