"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7470],{

/***/ 67470:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardAccelerometer; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60650);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49013);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42862);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81794);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2285);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69672);
/* harmony import */ var _ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23461);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82677);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19640);













var CanvasWidget = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(3737), __webpack_require__.e(317)]).then(__webpack_require__.bind(__webpack_require__, 51761)));

var valueDisplay = v => (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_5__/* .roundWithPrecision */ .JI)(v, 1);

function Sliders(props) {
  var {
    server,
    register
  } = props;
  var xId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_10__/* .useId */ .Me)();
  var yId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_10__/* .useId */ .Me)();
  var zId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_10__/* .useId */ .Me)();
  var forces = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(register, props); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var handleChangeX = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(function* (event, newValue) {
      var [, y] = server.reading.values(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      var n = newValue;
      var nz = -Math.sqrt(1 - (n * n + y * y));
      server.reading.setValues([n, y, nz]);
      yield register.sendGetAsync();
    });

    return function handleChangeX(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(); // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var handleChangeY = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(function* (event, newValue) {
      var [x] = server.reading.values(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      var n = newValue;
      var nz = -Math.sqrt(1 - (x * x + n * n));
      server.reading.setValues([x, n, nz]);
      yield register.sendGetAsync();
    });

    return function handleChangeY(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  if (!(forces !== null && forces !== void 0 && forces.length)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, null);
  var [x, y, z] = forces;
  var min = -2;
  var max = 2;
  var step = 0.1;
  var marks = [{
    value: 0
  }, {
    value: -1
  }, {
    value: 1
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    id: xId,
    label: "X",
    valueLabelDisplay: "auto",
    valueLabelFormat: valueDisplay,
    "aria-label": "x",
    min: min,
    max: max,
    step: step,
    value: x,
    onChange: server ? handleChangeX : undefined,
    marks: marks
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    id: yId,
    label: "Y",
    valueLabelDisplay: "auto",
    valueLabelFormat: valueDisplay,
    "aria-label": "y",
    min: min,
    max: max,
    step: step,
    value: y,
    onChange: server ? handleChangeY : undefined,
    marks: marks
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    id: zId,
    label: "Z",
    valueLabelDisplay: "auto",
    valueLabelFormat: valueDisplay,
    "aria-label": "z",
    min: min,
    max: max,
    step: step,
    value: z,
    marks: marks
  })));
}

function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}

function DashboardAccelerometer(props) {
  var {
    service,
    visible
  } = props;
  var register = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .AccelerometerReg.Forces */ .bdf.Forces);
  (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(register, props);
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";
  var {
    active
  } = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(color);
  var rotator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((delta, rotation) => {
    var forces = register.unpackedValue;
    if (!forces) return undefined;
    var [x, y, z] = forces;
    var roll = Math.atan2(-y, z);
    var pitch = Math.atan(x / (y * y + z * z));
    return {
      x: lerp(rotation.x, roll, 0.1),
      y: 0,
      z: lerp(rotation.z, pitch, 0.1)
    };
  }, [register]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    container: true,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CanvasWidget, {
    showAxes: true,
    color: active,
    rotator: rotator
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Sliders, {
    server: server,
    register: register,
    visible: visible
  }));
}

/***/ }),

/***/ 23461:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SliderWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47895);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14685);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50514);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);

var _excluded = ["label"];



var useStyle = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(theme => ({
  arrow: {
    color: theme.palette.primary.main
  },
  tooltip: {
    backgroundColor: theme.palette.primary.main
  }
}));

function ValueLabelComponent(props) {
  var {
    children,
    open,
    value
  } = props;
  var classes = useStyle();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP, {
    classes: classes,
    open: open,
    arrow: true,
    color: "primary",
    enterTouchDelay: 0,
    placement: "top",
    title: value
  }, children);
}

function SliderWithLabel(props) {
  var {
    label
  } = props,
      others = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(props, _excluded);

  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var sliderId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    id: labelId,
    variant: "caption",
    gutterBottom: true
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, Object.assign({
    id: sliderId,
    "aria-labelledby": labelId,
    "aria-label": label,
    ValueLabelComponent: ValueLabelComponent
  }, others)));
}

/***/ })

}]);