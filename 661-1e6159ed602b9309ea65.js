"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[661],{

/***/ 10661:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TwinWidget; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75167);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90293);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80838);
/* harmony import */ var _dashboard_DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73205);
/* harmony import */ var _WorkspaceContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89801);
/* harmony import */ var _NoServiceAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42825);
/* harmony import */ var _PointerBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77298);
/* harmony import */ var _hooks_useBestRegister__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39687);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71815);
/* harmony import */ var _useBlockData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53851);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81794);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var HORIZON = 10;
function TwinWidget() {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z);
  var {
    roleService,
    flyout,
    sourceId,
    sourceBlock
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_WorkspaceContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP);
  var {
    data,
    setData
  } = (0,_useBlockData__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(sourceBlock, []); // data collection

  var register = (0,_hooks_useBestRegister__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(roleService);

  var setRegisterData = () => {
    var newValue = register === null || register === void 0 ? void 0 : register.unpackedValue;

    if (newValue !== undefined) {
      var newRow = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_10__/* .toMap */ .qL)(register.fields, f => f.name, (f, i) => newValue[i]);
      var newData = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(data || []), [_objectSpread(_objectSpread({}, {
        time: bus.timestamp / 1000
      }), newRow)]).slice(-HORIZON);
      setData(newData);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setRegisterData();
    return register === null || register === void 0 ? void 0 : register.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_7__/* .REPORT_UPDATE */ .rGZ, setRegisterData);
  }, [register, sourceId, data]);
  if (flyout) return null;
  if (!roleService) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_NoServiceAlert__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    container: true,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_PointerBoundary__WEBPACK_IMPORTED_MODULE_5__/* .PointerBoundary */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_dashboard_DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP, {
    service: roleService,
    visible: true,
    variant: "icon"
  }))));
}

/***/ }),

/***/ 39687:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useBestRegister; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73512);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13173);



function useBestRegister(service) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var specification = service === null || service === void 0 ? void 0 : service.specification;
    var hasReading = specification === null || specification === void 0 ? void 0 : specification.packets.some(reg => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isReading */ .vz)(reg));
    if (hasReading) return service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SystemReg.Reading */ .ZJq.Reading);
    var hasValue = specification === null || specification === void 0 ? void 0 : specification.packets.some(reg => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isValue */ .wh)(reg));
    if (hasValue) return service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SystemReg.Value */ .ZJq.Value);
    var hasIntensity = specification === null || specification === void 0 ? void 0 : specification.packets.some(reg => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .isValueOrIntensity */ .sX)(reg));
    if (hasIntensity) return service.register(_jacdac_ts_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_1__/* .SystemReg.Intensity */ .ZJq.Intensity);
    return undefined;
  }, [service]);
}

/***/ })

}]);
//# sourceMappingURL=661-1e6159ed602b9309ea65.js.map