"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6902],{

/***/ 26902:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardWindDirection; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48059);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49013);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19640);
/* harmony import */ var _hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72901);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50514);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2285);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82677);












function DashboardWindDirection(props) {
  var {
    service
  } = props;
  var directionRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .WindDirectionReg.WindDirection */ .wrj.WindDirection);
  var [direction] = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(directionRegister, props);
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";
  var {
    background,
    controlBackground,
    active
  } = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(color);
  var arrowHeadId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .Me)();
  var a = (0,_hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(direction, 360);
  if (direction === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null);
  var w = 64;
  var h = 64;
  var mw = 5;
  var mh = 4.5;
  var r = (w >> 1) - 4;
  var sw = 3;
  var cx = w >> 1;
  var cy = h * 4 / 5;
  var cy2 = h * 2 / 5;

  var handleChange = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(function* (ev, newValue) {
      yield server === null || server === void 0 ? void 0 : server.reading.setValues([newValue]);
      directionRegister.refresh();
    });

    return function handleChange(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("marker", {
    id: arrowHeadId,
    markerWidth: mw,
    markerHeight: mh,
    refX: 0,
    refY: mh / 2,
    orient: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("polygon", {
    fill: active,
    points: "0 0, " + mw + " " + mh / 2 + ", 0 " + mh
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    transform: "rotate(" + a + ", " + (w >> 1) + ", " + (h >> 1) + ")"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: w >> 1,
    cy: h >> 1,
    r: r,
    fill: controlBackground,
    stroke: background,
    strokeWidth: sw
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {
    x1: cx,
    y1: cy,
    x2: cx,
    y2: cy2,
    stroke: active,
    strokeWidth: sw,
    markerEnd: "url(#" + arrowHeadId + ")",
    "aria-label": "arrow point at " + direction + "\xB0"
  })))), server && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    color: color,
    valueLabelDisplay: "auto",
    min: 0,
    max: 360,
    step: 5,
    value: direction,
    onChange: handleChange
  })));
}

/***/ })

}]);