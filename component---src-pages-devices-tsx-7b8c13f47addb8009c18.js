"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8524],{

/***/ 14247:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ServiceSpecificationSelect; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1059);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65541);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(function () {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    root: {
      minWidth: "18rem"
    }
  });
});
function ServiceSpecificationSelect(props) {
  var label = props.label,
      serviceClass = props.serviceClass,
      setServiceClass = props.setServiceClass,
      variant = props.variant,
      fullWidth = props.fullWidth,
      error = props.error;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('select-' + Math.random()),
      labelId = _useState[0];

  var classes = useStyles();
  var specs = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecifications */ .Le)().filter(function (spec) {
    return !/^_/.test(spec.shortId);
  });

  var handleChange = function handleChange(event) {
    return setServiceClass(parseInt(event.target.value));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    id: labelId,
    className: classes.root,
    label: label,
    error: !!error,
    helperText: error,
    value: serviceClass,
    select: true,
    variant: variant,
    fullWidth: fullWidth,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    key: "none",
    value: "NaN"
  }, "No service selected"), specs.map(function (spec) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      key: spec.classIdentifier,
      value: spec.classIdentifier
    }, spec.name);
  }));
}

/***/ }),

/***/ 17673:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(6809);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/AlertTitle/AlertTitle.js
var AlertTitle = __webpack_require__(99330);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(33287);
// EXTERNAL MODULE: ./src/components/DeviceSpecificationList.tsx + 3 modules
var DeviceSpecificationList = __webpack_require__(73482);
// EXTERNAL MODULE: ./src/components/ServiceSpecificationSelect.tsx
var ServiceSpecificationSelect = __webpack_require__(14247);
;// CONCATENATED MODULE: ./src/components/FilteredDeviceSpecificationList.tsx




function FilteredDeviceSpecificationList(props) {
  var others = Object.assign({}, props);

  var _useState = (0,react.useState)(NaN),
      serviceClass = _useState[0],
      setServiceClass = _useState[1];

  var handleServiceChanged = function handleServiceChanged(value) {
    return setServiceClass(value);
  };

  var requiredServiceClasses = !isNaN(serviceClass) && [serviceClass];
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Box/* default */.Z, {
    mb: 1
  }, /*#__PURE__*/react.createElement(ServiceSpecificationSelect/* default */.Z, {
    label: "Filter by Service",
    serviceClass: serviceClass,
    setServiceClass: handleServiceChanged
  })), /*#__PURE__*/react.createElement(DeviceSpecificationList/* default */.Z, Object.assign({}, others, {
    requiredServiceClasses: requiredServiceClasses
  })));
}
;// CONCATENATED MODULE: ./src/pages/devices.tsx




function Page() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(FilteredDeviceSpecificationList, {
    count: 20,
    shuffle: true
  }), /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, /*#__PURE__*/react.createElement(AlertTitle/* default */.Z, null, "Register your device"), "Known devices are specified in the", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/reference/device-definition/"
  }, "device catalog repository"), ". New devices can be submitted with the", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/tools/device-registration/"
  }, "device registration"), "."));
}

/***/ })

}]);