"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6214],{

/***/ 46214:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashbaordRainGauge; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48059);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49013);
/* harmony import */ var _hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72901);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54774);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89196);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19640);
/* harmony import */ var _hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(30833);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81794);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2285);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82677);















var TILT = 15;
function DashbaordRainGauge(props) {
  var service = props.service;
  var precipitationRegister = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .RainGaugeReg.Precipitation */ .HUu.Precipitation);

  var _useRegisterUnpackedV = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_8__/* .useRegisterUnpackedValue */ .Pf)(precipitationRegister, props),
      precipitation = _useRegisterUnpackedV[0];

  var clipId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_9__/* .useId */ .Me)();
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(service);
  var tiltCount = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(server, function (h) {
    return h === null || h === void 0 ? void 0 : h.tiltCount;
  });
  var level = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(server, function (h) {
    return h === null || h === void 0 ? void 0 : h.level;
  });
  var tiltAngle = tiltCount !== undefined ? tiltCount % 2 ? -TILT : TILT : 0;
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(color),
      background = _useWidgetTheme.background,
      active = _useWidgetTheme.active,
      textPrimary = _useWidgetTheme.textPrimary;

  var a = (0,_hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(tiltAngle, 45);
  var l = (0,_hooks_useThrottledValue__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(level !== undefined ? level : 0.5, 1);
  var clickeable = !!server;

  var handleClick = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              event.stopPropagation();
              _context.next = 4;
              return server === null || server === void 0 ? void 0 : server.rain(0.25);

            case 4:
              _context.next = 6;
              return precipitationRegister.refresh();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var buttonProps = (0,_hooks_useSvgButtonProps__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z)("rain level " + Math.round(25 + level * 100) + "%", handleClick);
  var w = 128;
  var h = 64;
  var bw = w / 2;
  var bh = h / 3;
  var bx = (w - bw) / 2;
  var by = h - bh - 24;
  var sw = 1;
  var ty = h - 4;
  var fs = 8;
  if (tiltAngle === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    width: w,
    height: h
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("clipPath", {
    id: clipId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("rect", {
    transform: "rotate(" + -a + ", " + w / 2 + ", " + (by + bh) + ")",
    x: 0,
    y: by + bh * (1 - l),
    width: w,
    height: h
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("g", {
    transform: "rotate(" + a + ", " + w / 2 + ", " + (by + bh) + ")"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("rect", Object.assign({
    x: bx,
    y: by,
    tabIndex: 0,
    width: bw,
    height: bh,
    strokeWidth: sw,
    stroke: active,
    fill: background
  }, buttonProps, {
    className: clickeable ? "clickeable" : undefined,
    role: clickeable ? "button" : undefined
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("rect", {
    x: bx,
    y: by,
    width: bw,
    height: bh,
    stroke: active,
    fill: active,
    "aria-label": "water",
    clipPath: "url(#" + clipId + ")",
    pointerEvents: "none",
    style: {
      userSelect: "none"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("text", {
    x: w / 2,
    y: ty,
    fontSize: fs,
    textAnchor: "middle",
    fill: textPrimary,
    "aria-label": "precipitation " + (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_10__/* .roundWithPrecision */ .JI)(precipitation || 0, 1) + " millimeters"
  }, (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_10__/* .roundWithPrecision */ .JI)(precipitation || 0, 1), "mm"));
}

/***/ })

}]);