"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7470],{

/***/ 67470:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardAccelerometer; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89196);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49013);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(42862);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81794);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2285);
/* harmony import */ var _ui_Suspense__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69672);
/* harmony import */ var _ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23461);
/* harmony import */ var _hooks_useRegister__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82677);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19640);














var CanvasWidget = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(3737), __webpack_require__.e(317)]).then(__webpack_require__.bind(__webpack_require__, 51761));
});

var valueDisplay = function valueDisplay(v) {
  return (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .roundWithPrecision */ .JI)(v, 1);
};

function Sliders(props) {
  var server = props.server,
      register = props.register;
  var xId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_11__/* .useId */ .Me)();
  var yId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_11__/* .useId */ .Me)();
  var zId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_11__/* .useId */ .Me)();
  var forces = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(register, props); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var handleChangeX = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event, newValue) {
      var _server$reading$value, y, n, nz;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _server$reading$value = server.reading.values(), y = _server$reading$value[1]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

              n = newValue;
              nz = -Math.sqrt(1 - (n * n + y * y));
              server.reading.setValues([n, y, nz]);
              _context.next = 6;
              return register.sendGetAsync();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChangeX(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(); // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var handleChangeY = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(event, newValue) {
      var _server$reading$value2, x, n, nz;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _server$reading$value2 = server.reading.values(), x = _server$reading$value2[0]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

              n = newValue;
              nz = -Math.sqrt(1 - (x * x + n * n));
              server.reading.setValues([x, n, nz]);
              _context2.next = 6;
              return register.sendGetAsync();

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleChangeY(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  if (!(forces !== null && forces !== void 0 && forces.length)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null);
  var x = forces[0],
      y = forces[1],
      z = forces[2];
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_SliderWithLabel__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
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
  var service = props.service,
      visible = props.visible;
  var register = (0,_hooks_useRegister__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(service, _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .AccelerometerReg.Forces */ .bdf.Forces);
  (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_3__/* .useRegisterUnpackedValue */ .Pf)(register, props);
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(color),
      active = _useWidgetTheme.active;

  var rotator = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (delta, rotation) {
    var forces = register.unpackedValue;
    if (!forces) return undefined;
    var x = forces[0],
        y = forces[1],
        z = forces[2];
    var roll = Math.atan2(-y, z);
    var pitch = Math.atan(x / (y * y + z * z));
    return {
      x: lerp(rotation.x, roll, 0.1),
      y: 0,
      z: lerp(rotation.z, pitch, 0.1)
    };
  }, [register]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    container: true,
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Suspense__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(CanvasWidget, {
    showAxes: true,
    color: active,
    rotator: rotator
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Sliders, {
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
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12265);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14685);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50514);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);

var _excluded = ["label"];



var useStyle = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(function (theme) {
  return {
    arrow: {
      color: theme.palette.primary.main
    },
    tooltip: {
      backgroundColor: theme.palette.primary.main
    }
  };
});

function ValueLabelComponent(props) {
  var children = props.children,
      open = props.open,
      value = props.value;
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
  var label = props.label,
      others = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(props, _excluded);

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