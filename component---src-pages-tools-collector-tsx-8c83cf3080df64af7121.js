"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8814],{

/***/ 32253:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34621);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80453);




var styles = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function DialogContentText(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: ref
  }, props));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(styles, {
  name: 'MuiDialogContentText'
})(DialogContentText));

/***/ }),

/***/ 26954:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80453);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34621);
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46438);







var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    height: '0.01em',
    // Fix IE 11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center',
    whiteSpace: 'nowrap'
  },

  /* Styles applied to the root element if `variant="filled"`. */
  filled: {
    '&$positionStart:not($hiddenLabel)': {
      marginTop: 16
    }
  },

  /* Styles applied to the root element if `position="start"`. */
  positionStart: {
    marginRight: 8
  },

  /* Styles applied to the root element if `position="end"`. */
  positionEnd: {
    marginLeft: 8
  },

  /* Styles applied to the root element if `disablePointerEvents=true`. */
  disablePointerEvents: {
    pointerEvents: 'none'
  },

  /* Styles applied if the adornment is used inside <FormControl hiddenLabel />. */
  hiddenLabel: {},

  /* Styles applied if the adornment is used inside <FormControl margin="dense" />. */
  marginDense: {}
};
var InputAdornment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function InputAdornment(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disablePointer = props.disablePointerEvents,
      disablePointerEvents = _props$disablePointer === void 0 ? false : _props$disablePointer,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      position = props.position,
      variantProp = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "classes", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]);

  var muiFormControl = (0,_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_2__/* .useFormControl */ .Y)() || {};
  var variant = variantProp;

  if (variantProp && muiFormControl.variant) {
    if (false) {}
  }

  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_2__/* .default.Provider */ .Z.Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.root, className, position === 'end' ? classes.positionEnd : classes.positionStart, disablePointerEvents && classes.disablePointerEvents, muiFormControl.hiddenLabel && classes.hiddenLabel, variant === 'filled' && classes.filled, muiFormControl.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), typeof children === 'string' && !disableTypography ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    color: "textSecondary"
  }, children) : children));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(styles, {
  name: 'MuiInputAdornment'
})(InputAdornment));

/***/ }),

/***/ 88880:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.Z = _default;

/***/ }),

/***/ 94500:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.Z = _default;

/***/ }),

/***/ 95067:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), 'FiberManualRecord');

exports.Z = _default;

/***/ }),

/***/ 15029:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
}), 'HourglassEmpty');

exports.Z = _default;

/***/ }),

/***/ 95552:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"
}), 'OpenInBrowser');

exports.Z = _default;

/***/ }),

/***/ 8567:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
}), 'Save');

exports.Z = _default;

/***/ }),

/***/ 79312:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(8580);

var _interopRequireWildcard = __webpack_require__(1022);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(58786));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
}), 'SaveAlt');

exports.Z = _default;

/***/ }),

/***/ 59381:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export SensorAggregatorClient */
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85413);
/* harmony import */ var _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73512);
/* harmony import */ var _jdom_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3482);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91635);
/* harmony import */ var _jdom_serviceclient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56763);
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13173);
/* harmony import */ var _jdom_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81794);










/**
 * A client for the sensor aggregator service
 * @category Clients
 */
var SensorAggregatorClient = /*#__PURE__*/function (_JDServiceClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(SensorAggregatorClient, _JDServiceClient);

  function SensorAggregatorClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    _this.service.registersUseAcks = true;
    return _this;
  }

  var _proto = SensorAggregatorClient.prototype;

  _proto.setInputs = /*#__PURE__*/function () {
    var _setInputs = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(function* (cfg) {
      var _cfg$inputs;

      function error(msg) {
        throw new Error("Aggregator inputs: " + msg);
      }

      function mapType(tp) {
        switch (tp) {
          case 1:
            return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.U8 */ .HEd.U8;

          case 2:
            return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.U16 */ .HEd.U16;

          case 4:
            return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.U32 */ .HEd.U32;

          case -1:
            return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.I8 */ .HEd.I8;

          case -2:
            return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.I16 */ .HEd.I16;

          case -4:
            return _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorSampleType.I32 */ .HEd.I32;

          default:
            error("unknown storage type");
        }
      }

      if (!cfg || !cfg.inputs) error("invalid input format");
      var totalSampleSize = 0;
      var inputs = (_cfg$inputs = cfg.inputs) === null || _cfg$inputs === void 0 ? void 0 : _cfg$inputs.map(input => {
        var {
          deviceId,
          serviceIndex,
          serviceClass
        } = input;
        if (!!deviceId !== !!serviceIndex) error("deviceId and serviceIndex must be specified together");
        var specification = (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_5__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass);
        if (!specification) error("missing specification from service 0x" + serviceClass.toString(16));
        var freeze = !!deviceId;
        var readingReg = specification.packets.find(_jdom_spec__WEBPACK_IMPORTED_MODULE_5__/* .isReading */ .vz);
        if (!readingReg) error("service 0x" + serviceClass.toString(16) + " does not have a reading register");
        var sampleType = undefined;
        var sampleSize = 0;
        var sampleShift = 0;

        for (var field of readingReg.fields) {
          sampleSize += Math.abs(field.storage);

          if (sampleType === undefined) {
            sampleType = mapType(field.storage);
            sampleShift = field.shift || 0;
          }

          if (sampleType != mapType(field.storage) || sampleShift != (field.shift || 0)) error("heterogenous field types");
        }

        totalSampleSize += sampleSize;
        return (0,_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .bufferConcat */ .gX)(freeze ? (0,_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .fromHex */ .H_)(deviceId) : new Uint8Array(8), (0,_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("u32 u8 u8 u8 i8", [serviceClass, freeze ? serviceIndex : 0, sampleSize, sampleType, sampleShift]));
      });
      if (totalSampleSize > _jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .JD_SERIAL_MAX_PAYLOAD_SIZE */ .MdP) error("samples won't fit in packet"); // u32 is x[4]

      inputs.unshift((0,_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)("u16 u16 u32", [cfg.samplingInterval, cfg.samplesInWindow, 0]));
      yield this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.Inputs */ .HUt.Inputs).sendSetAsync((0,_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .bufferConcatMany */ .Gb)(inputs));
    });

    function setInputs(_x) {
      return _setInputs.apply(this, arguments);
    }

    return setInputs;
  }();

  _proto.collect = /*#__PURE__*/function () {
    var _collect = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(function* (numSamples) {
      yield this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.StreamingSamples */ .HUt.StreamingSamples).sendSetPackedAsync("u32", [numSamples]);
    });

    function collect(_x2) {
      return _collect.apply(this, arguments);
    }

    return collect;
  }();

  _proto.subscribeSample = function subscribeSample(handler) {
    var reg = this.service.register(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.CurrentSample */ .HUt.CurrentSample);
    return this.mount(reg.subscribe(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .REPORT_RECEIVE */ .Gb8, () => handler((0,_jdom_buffer__WEBPACK_IMPORTED_MODULE_1__/* .bufferToArray */ ._W)(reg.data, _jdom_buffer__WEBPACK_IMPORTED_MODULE_1__/* .NumberFormat.Float32LE */ .y4.Float32LE))));
  };

  _proto.getReg = /*#__PURE__*/function () {
    var _getReg = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(function* (id, f) {
      var reg = this.service.register(id);
      yield reg.refresh();
      return f(reg);
    });

    function getReg(_x3, _x4) {
      return _getReg.apply(this, arguments);
    }

    return getReg;
  }();

  _proto.stats = /*#__PURE__*/function () {
    var _stats = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(function* () {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var info = {
        numSamples: this.getReg(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.NumSamples */ .HUt.NumSamples, r => r.intValue),
        sampleSize: this.getReg(_jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SensorAggregatorReg.SampleSize */ .HUt.SampleSize, r => r.intValue)
      };

      for (var id of Object.keys(info)) {
        info[id] = yield info[id];
      }

      return info;
    });

    function stats() {
      return _stats.apply(this, arguments);
    }

    return stats;
  }();

  return SensorAggregatorClient;
}(_jdom_serviceclient__WEBPACK_IMPORTED_MODULE_4__/* .JDServiceClient */ .P);
/* harmony default export */ __webpack_exports__["Z"] = (SensorAggregatorClient);

/***/ }),

/***/ 29065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ReadingFieldGrid; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95823);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31186);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useGridBreakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7746);
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95067);
/* harmony import */ var _devices_useDeviceName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5738);
/* harmony import */ var _ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64973);


 // tslint:disable-next-line: no-submodule-imports match-default-export-name




var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(() => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
  vmiddle: {
    verticalAlign: "middle"
  }
}));

function ReadingFieldGridItem(props) {
  var {
    register,
    handleRegisterCheck,
    recording,
    registerChecked,
    liveDataSet
  } = props;
  var {
    service
  } = register;
  var {
    device
  } = service;
  var gridBreakpoints = (0,_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)();
  var classes = useStyles();
  var deviceName = (0,_devices_useDeviceName__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(device);

  var handleCheck = () => handleRegisterCheck(register);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, Object.assign({
    item: true
  }, gridBreakpoints, {
    key: "source" + register.id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    subheader: register.service.name,
    title: deviceName + "/" + register.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, register.fields.map(field => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    key: field.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    className: classes.vmiddle,
    fontSize: "large",
    style: {
      color: registerChecked && (liveDataSet === null || liveDataSet === void 0 ? void 0 : liveDataSet.colorOf(field)) || "#ccc"
    }
  }), field.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_SwitchWithLabel__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    disabled: recording,
    onChange: handleCheck,
    checked: registerChecked,
    label: "record " + deviceName + "/" + register.name
  }))));
}

function ReadingFieldGrid(props) {
  var {
    readingRegisters,
    registerIdsChecked,
    recording,
    handleRegisterCheck,
    liveDataSet
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, readingRegisters.map(register => {
    var registerChecked = registerIdsChecked.indexOf(register.id) > -1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReadingFieldGridItem, {
      key: register.id,
      register: register,
      registerChecked: registerChecked,
      recording: recording,
      handleRegisterCheck: handleRegisterCheck,
      liveDataSet: liveDataSet
    });
  }));
}

/***/ }),

/***/ 24301:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DashboardDeviceItem; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47895);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80838);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _DashboardDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54886);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);
/* harmony import */ var _DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73205);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84377);

var _excluded = ["device", "expanded", "toggleExpanded", "variant"];






function DashboardDeviceItem(props) {
  var {
    device,
    expanded,
    toggleExpanded,
    variant
  } = props,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(props, _excluded);

  var {
    drawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_4__/* .default */ .ZP);
  var breakpoints = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(device, () => {
    var breakpointWeight = device.services().map(srv => {
      return (0,_DashboardServiceWidget__WEBPACK_IMPORTED_MODULE_3__/* .dashboardServiceWeight */ .o2)(srv) || (srv.readingRegister || srv.valueRegister || srv.intensityRegister ? 1 : 0);
    }).reduce((c, v) => c + v, 0);
    if (breakpointWeight > 3 || drawerType !== _AppContext__WEBPACK_IMPORTED_MODULE_4__/* .DrawerType.None */ .jw.None) return {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 6,
      xl: 6
    };else if (breakpointWeight == 3) return {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4
    };else if (breakpointWeight == 2) return {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3,
      xl: 4
    };else return {
      xs: expanded ? 12 : 6,
      sm: 4,
      md: 3,
      lg: 2,
      xl: "auto"
    };
  }, [expanded, drawerType]); // based on size, expanded or reduce widget size

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, Object.assign({
    item: true
  }, breakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardDevice__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, Object.assign({
    device: device,
    expanded: expanded,
    toggleExpanded: toggleExpanded,
    variant: variant
  }, other)));
}

/***/ }),

/***/ 45430:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ FileTabs; }
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts + 2 modules
var useKeyboardNavigationProps = __webpack_require__(68786);
// EXTERNAL MODULE: ./src/components/FileSystemContext.tsx + 2 modules
var FileSystemContext = __webpack_require__(3365);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/OpenInBrowser.js
var OpenInBrowser = __webpack_require__(95552);
;// CONCATENATED MODULE: ./src/components/fs/FileSystemChip.tsx





function FileSystemChip() {
  var {
    fileSystem,
    showDirectoryPicker
  } = (0,react.useContext)(FileSystemContext/* default */.Z);
  var root = (0,useChange/* default */.Z)(fileSystem, _ => _ === null || _ === void 0 ? void 0 : _.root);
  var handleOpenDirectory = showDirectoryPicker;

  var handleCloseDirectory = () => fileSystem.root = undefined;

  if (!fileSystem) return null;
  return /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    clickable: true,
    avatar: /*#__PURE__*/react.createElement(OpenInBrowser/* default */.Z, null),
    label: (root === null || root === void 0 ? void 0 : root.name) || "open directory",
    onClick: handleOpenDirectory,
    onDelete: root ? handleCloseDirectory : undefined
  });
}
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(52468);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(65733);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(32253);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(89952);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
;// CONCATENATED MODULE: ./src/components/fs/FileNewFileChip.tsx






function FileNewFileChip(props) {
  var {
    name: newFileName,
    content: newFileContent,
    label,
    extension
  } = props;
  var {
    fileSystem
  } = (0,react.useContext)(FileSystemContext/* default */.Z);
  var {
    0: open,
    1: setOpen
  } = (0,react.useState)(false);
  var {
    0: value,
    1: setValue
  } = (0,react.useState)("");
  var valueId = (0,react_use_id_hook_esm/* useId */.Me)();

  var handleOpen = () => {
    setValue("");
    setOpen(true);
  };

  var handleOk = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      setOpen(false);
      var name = value.toLocaleLowerCase().replace(/\s+/g, "");
      if (newFileName) yield fileSystem.createWorkingDirectory(name, newFileName, newFileContent);else {
        if (extension) name += "." + extension;
        var d = fileSystem.workingDirectory || fileSystem.root;
        var f = yield d.fileAsync(name, {
          create: true
        });
        yield f.write(newFileContent);
        fileSystem.workingFile = f;
      }
    });

    return function handleOk() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleCancel = () => setOpen(false);

  var handleValueChange = event => {
    setValue(event.target.value);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    clickable: true,
    label: label || "new...",
    icon: /*#__PURE__*/react.createElement(Add/* default */.Z, null),
    onClick: handleOpen
  }), /*#__PURE__*/react.createElement(Dialog/* default */.Z, {
    open: open,
    fullWidth: true
  }, /*#__PURE__*/react.createElement(DialogContent/* default */.Z, null, /*#__PURE__*/react.createElement(DialogContentText/* default */.Z, null, "Choose a project name"), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: valueId,
    value: value,
    label: "Value",
    fullWidth: true,
    onChange: handleValueChange
  })), /*#__PURE__*/react.createElement(DialogActions/* default */.Z, null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "contained",
    onClick: handleCancel
  }, "Cancel"), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "contained",
    color: "primary",
    disabled: !value,
    onClick: handleOk
  }, "Ok"))));
}
;// CONCATENATED MODULE: ./src/components/fs/FileSystemNodeChip.tsx


function FileSystemNodeChip(props) {
  var {
    node,
    selected,
    onClick
  } = props;
  var {
    name
  } = node;
  return /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    clickable: true,
    label: name.replace(/\.json$/i, ""),
    color: selected ? "primary" : undefined,
    onClick: onClick
  });
}
;// CONCATENATED MODULE: ./src/components/fs/FileTabs.tsx








function FileTabs(props) {
  var {
    newFileName,
    newFileContent,
    hideDirectories,
    hideFiles,
    directoryFilter,
    fileFilter,
    newFileLabel,
    newFileExtension
  } = props;
  var {
    fileSystem
  } = (0,react.useContext)(FileSystemContext/* default */.Z);
  var root = (0,useChange/* default */.Z)(fileSystem, _ => _ === null || _ === void 0 ? void 0 : _.root);
  var workingDirectory = (0,useChange/* default */.Z)(fileSystem, _ => _ === null || _ === void 0 ? void 0 : _.workingDirectory);
  var workingFile = (0,useChange/* default */.Z)(fileSystem, _ => _ === null || _ === void 0 ? void 0 : _.workingFile);
  var directories = (0,useChange/* default */.Z)(root, _ => {
    var _$directories;

    return _ === null || _ === void 0 ? void 0 : (_$directories = _.directories) === null || _$directories === void 0 ? void 0 : _$directories.filter(d => !directoryFilter || directoryFilter(d.name));
  });
  var files = (0,useChange/* default */.Z)(root, _ => {
    var _$files;

    return _ === null || _ === void 0 ? void 0 : (_$files = _.files) === null || _$files === void 0 ? void 0 : _$files.filter(d => !fileFilter || fileFilter(d.name));
  });
  var gridRef = (0,react.useRef)();
  var keyboardProps = (0,useKeyboardNavigationProps/* default */.Z)(gridRef.current);

  var handleDirectorySelected = handle => () => fileSystem.workingDirectory = handle;

  var handleFileSelected = handle => () => fileSystem.workingFile = handle;

  if (!fileSystem) return null;
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({
    ref: gridRef,
    container: true,
    spacing: 1
  }, keyboardProps), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(FileSystemChip, null)), !hideDirectories && (directories === null || directories === void 0 ? void 0 : directories.map(node => /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    key: node.name
  }, /*#__PURE__*/react.createElement(FileSystemNodeChip, {
    node: node,
    selected: node === workingDirectory,
    onClick: handleDirectorySelected(node)
  })))), !hideFiles && (files === null || files === void 0 ? void 0 : files.map(node => /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    key: node.name
  }, /*#__PURE__*/react.createElement(FileSystemNodeChip, {
    node: node,
    selected: node === workingFile,
    onClick: handleFileSelected(node)
  })))), root && newFileContent && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(FileNewFileChip, {
    name: newFileName,
    content: newFileContent,
    label: newFileLabel,
    extension: newFileExtension
  })));
}

/***/ }),

/***/ 68786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useKeyboardNavigationProps; }
});

// EXTERNAL MODULE: ./src/components/hooks/useFireKey.ts
var useFireKey = __webpack_require__(8966);
;// CONCATENATED MODULE: ./src/components/hooks/useArrowKeys.ts

var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
function useArrowKeys(options) {
  var {
    onLeft,
    onUp,
    onRight,
    onDown,
    symmetric
  } = options;
  if (!onLeft && !onUp && !onRight && !onDown) return undefined;
  var handlers = {
    [LEFT_KEY]: onLeft,
    [RIGHT_KEY]: onRight,
    [UP_KEY]: onUp || symmetric && onRight,
    [DOWN_KEY]: onDown || symmetric && onLeft
  };
  return e => {
    var charCode = (0,useFireKey/* keyCodeFromEvent */.$)(e);
    var handler = handlers[charCode];

    if (handler) {
      e.preventDefault();
      handler();
    }
  };
}
;// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigation.ts
function useKeyboardNavigation(parentRef) {
  var query = '[tabindex="0"]';

  var onMove = offset => () => {
    console.log('keyboard move', {
      offset
    });
    var focusable = Array.from((parentRef === null || parentRef === void 0 ? void 0 : parentRef.querySelectorAll(query)) || []);

    if (focusable.length) {
      var me = focusable.findIndex(f => f === document.activeElement);
      var next = (me + offset + focusable.length) % focusable.length;
      focusable[next].focus();
    }
  };

  return onMove;
}
;// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts


function useKeyboardNavigationProps(parentRef, vertical) {
  var onMove = useKeyboardNavigation(parentRef);
  var onKeyDown = useArrowKeys({
    onLeft: !vertical && onMove(-1),
    onRight: !vertical && onMove(1),
    onDown: vertical && onMove(1),
    onUp: vertical && onMove(-1)
  });
  return {
    onKeyDown: parentRef && onKeyDown
  };
}

/***/ }),

/***/ 2928:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useServices; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54774);



function useServices(options) {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z);
  var services = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(bus, _ => (_ === null || _ === void 0 ? void 0 : _.services(options)) || [], [JSON.stringify(options)]);
  return services;
}

/***/ }),

/***/ 15789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SelectWithLabel; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31690);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89711);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(706);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65541);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78942);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);



function SelectWithLabel(props) {
  var {
    label,
    fullWidth,
    required,
    disabled,
    value,
    error,
    placeholder,
    onChange,
    onClose,
    children,
    helperText,
    type,
    none
  } = props;
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var descrId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var id = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var hasDescr = !!helperText || !!error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    fullWidth: fullWidth,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    id: labelId,
    key: "label"
  }, required ? label + " *" : label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    id: id,
    disabled: disabled,
    label: label,
    value: value,
    error: !!error,
    fullWidth: true,
    placeholder: placeholder,
    type: type,
    labelId: labelId,
    "aria-describedby": hasDescr ? descrId : undefined,
    onChange: onChange,
    onClose: onClose
  }, none !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    key: "none",
    value: ""
  }, none), children), hasDescr && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    id: descrId
  }, error || helperText));
}

/***/ }),

/***/ 64973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SwitchWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48086);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["label"];


function SwitchWithLabel(props) {
  var {
    label
  } = props,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, rest),
    label: label
  });
}

/***/ }),

/***/ 7746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useGridBreakpoints; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84377);


function useGridBreakpoints(itemCount) {
  var {
    drawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP);

  if (itemCount !== undefined) {
    switch (itemCount) {
      case 1:
      case 2:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6
        };

      case 3:
        return {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 4,
          xl: 4
        };
    }
  }

  if (drawerType != _AppContext__WEBPACK_IMPORTED_MODULE_1__/* .DrawerType.None */ .jw.None) return {
    xs: 12,
    md: 6,
    sm: 6,
    lg: 6,
    xl: 4
  };else return {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 3
  };
}

/***/ }),

/***/ 21586:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Collector; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(90293);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js
var Switch = __webpack_require__(6210);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js
var InputAdornment = __webpack_require__(26954);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayArrow.js
var PlayArrow = __webpack_require__(42404);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Stop.js
var Stop = __webpack_require__(34257);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Save.js
var Save = __webpack_require__(8567);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/HourglassEmpty.js
var HourglassEmpty = __webpack_require__(15029);
// EXTERNAL MODULE: ./src/components/FieldDataSet.ts
var FieldDataSet = __webpack_require__(64616);
// EXTERNAL MODULE: ./src/components/Trend.tsx
var Trend = __webpack_require__(25090);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(65541);
// EXTERNAL MODULE: ./src/components/ui/SelectWithLabel.tsx
var SelectWithLabel = __webpack_require__(15789);
;// CONCATENATED MODULE: ./src/components/select/SelectEvent.tsx



function SelectEvent(props) {
  var {
    events,
    eventId,
    onChange,
    friendlyName,
    label
  } = props;

  var handleChange = ev => {
    onChange(ev.target.value);
  };

  return /*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z, {
    helperText: label || "choose an event",
    value: eventId,
    onChange: handleChange,
    disabled: !(events !== null && events !== void 0 && events.length),
    none: "None"
  }, events === null || events === void 0 ? void 0 : events.map(ev => /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    key: ev.id,
    value: ev.id
  }, friendlyName ? ev.friendlyName : ev.name)));
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(95823);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(10913);
// EXTERNAL MODULE: ./src/components/ServiceManagerContext.tsx + 3 modules
var ServiceManagerContext = __webpack_require__(99808);
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(7746);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/SaveAlt.js
var SaveAlt = __webpack_require__(79312);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Delete.js
var Delete = __webpack_require__(94500);
;// CONCATENATED MODULE: ./src/components/DataSetGrid.tsx






 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name


function DataSetGrid(props) {
  var {
    tables,
    handleDeleteTable
  } = props;
  var {
    fileStorage
  } = (0,react.useContext)(ServiceManagerContext/* default */.ZP);
  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)(tables === null || tables === void 0 ? void 0 : tables.length);

  var handleDownload = table => () => {
    var sep = ',';
    var csv = table.toCSV(sep);
    fileStorage.saveText(table.name + ".csv", csv);
  };

  var handelDelete = table => () => handleDeleteTable(table);

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, tables.map(table => /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({
    item: true
  }, gridBreakpoints, {
    key: "result" + table.id
  }), /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(CardHeader/* default */.Z, {
    subheader: table.rows.length + " rows, " + (0,pretty/* prettyDuration */.Xh)(table.duration)
  }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, /*#__PURE__*/react.createElement("div", null, table.headers.join(', ')), /*#__PURE__*/react.createElement(Trend/* default */.Z, {
    dataSet: table,
    height: 8,
    mini: true
  })), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    variant: "contained",
    color: "primary",
    startIcon: /*#__PURE__*/react.createElement(SaveAlt/* default */.Z, null),
    onClick: handleDownload(table)
  }, "Save"), handleDeleteTable && /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, {
    onClick: handelDelete(table)
  }, /*#__PURE__*/react.createElement(Delete/* default */.Z, null)))))));
}
// EXTERNAL MODULE: ./src/components/ReadingFieldGrid.tsx
var ReadingFieldGrid = __webpack_require__(29065);
// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__(31477);
// EXTERNAL MODULE: ./jacdac-ts/src/clients/sensoraggregatorclient.ts
var sensoraggregatorclient = __webpack_require__(59381);
// EXTERNAL MODULE: ./src/components/useChartPalette.ts
var useChartPalette = __webpack_require__(74039);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__(73512);
// EXTERNAL MODULE: ./src/components/hooks/useServices.ts
var useServices = __webpack_require__(2928);
;// CONCATENATED MODULE: ./src/components/hooks/useEvents.ts



function useEvents(options) {
  var {
    ignoreChange
  } = options || {};
  var services = (0,useServices/* default */.Z)(options);
  var events = (0,utils/* arrayConcatMany */.ue)(services.map(srv => srv.events));
  if (ignoreChange) events = events.filter(ev => ev.code !== specconstants/* SystemEvent.StatusCodeChanged */.nSK.StatusCodeChanged && ev.code !== specconstants/* SystemEvent.Change */.nSK.Change);
  return events;
}
// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__(53074);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardDeviceItem.tsx
var DashboardDeviceItem = __webpack_require__(24301);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
// EXTERNAL MODULE: ./src/components/hooks/useLocalStorage.ts
var useLocalStorage = __webpack_require__(34093);
// EXTERNAL MODULE: ./src/components/fs/FileTabs.tsx + 3 modules
var FileTabs = __webpack_require__(45430);
// EXTERNAL MODULE: ./src/components/FileSystemContext.tsx + 2 modules
var FileSystemContext = __webpack_require__(3365);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
;// CONCATENATED MODULE: ./src/pages/tools/collector.tsx


 // tslint:disable-next-line: no-submodule-imports



 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name



 // tslint:disable-next-line: no-submodule-imports


























var useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  root: {
    marginBottom: theme.spacing(1)
  },
  grow: {
    flexGrow: 1
  },
  field: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1.5)
  },
  segment: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  row: {
    marginBottom: theme.spacing(0.5)
  },
  buttons: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  trend: {
    width: theme.spacing(10)
  },
  vmiddle: {
    verticalAlign: "middle"
  }
}));
var LIVE_HORIZON = 24;

function createDataSet(bus, registers, name, live, palette) {
  var fields = (0,utils/* arrayConcatMany */.ue)(registers.map(reg => reg.fields));
  var colors = fields.map((f, i) => palette[i % palette.length]);
  var set = new FieldDataSet/* default */.ZP(bus, name, fields, colors);
  if (live) set.maxRows = LIVE_HORIZON + 4;
  return set;
}

var COLLECTOR_PREFIX = "jacdac:collector:prefix";
var COLLECTOR_SAMPLING_INTERVAL = "jacdac:collector:samplinginterval";
var COLLECTOR_SAMPLING_DURATION = "jacdac:collector:samplingduration";
var COLLECTOR_START_DELAY = "jacdac:collector:startdelay";
function Collector() {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    toggleShowDeviceHostsDialog,
    enqueueSnackbar
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var classes = useStyles();
  var {
    fileSystem
  } = (0,react.useContext)(FileSystemContext/* default */.Z);
  var root = (0,useChange/* default */.Z)(fileSystem, _ => _ === null || _ === void 0 ? void 0 : _.root);
  var {
    fileStorage
  } = (0,react.useContext)(ServiceManagerContext/* default */.ZP);
  var {
    0: registerIdsChecked,
    1: setRegisterIdsChecked
  } = (0,react.useState)([]);
  var {
    0: aggregatorId,
    1: setAggregatorId
  } = (0,react.useState)("");
  var {
    0: recording,
    1: setRecording
  } = (0,react.useState)(false);
  var {
    0: tables,
    1: setTables
  } = (0,react.useState)([]);
  var {
    1: setRecordingLength
  } = (0,react.useState)(0);
  var [prefix, setPrefix] = (0,useLocalStorage/* default */.Z)(COLLECTOR_PREFIX, "data");
  var [samplingIntervalDelay, setSamplingIntervalDelay] = (0,useLocalStorage/* default */.Z)(COLLECTOR_SAMPLING_INTERVAL, 100);
  var [samplingDuration, setSamplingDuration] = (0,useLocalStorage/* default */.Z)(COLLECTOR_SAMPLING_DURATION, 10);
  var [startDelay, setStartDelay] = (0,useLocalStorage/* default */.Z)(COLLECTOR_START_DELAY, 0);
  var {
    0: liveDataSet,
    1: setLiveDataSet
  } = (0,react.useState)(undefined);
  var {
    1: setLiveDataTimestamp
  } = (0,react.useState)(0);
  var {
    0: triggerEventId,
    1: setTriggerEventId
  } = (0,react.useState)("");
  var {
    0: countdown,
    1: setCountdown
  } = (0,react.useState)(-1);
  var starting = countdown > 0;
  var chartPalette = (0,useChartPalette/* default */.Z)();
  var devices = (0,useDevices/* default */.Z)({
    ignoreSelf: true,
    announced: true
  });
  var readingRegisters = (0,utils/* arrayConcatMany */.ue)(devices.map(device => device.services().filter(srv => (0,spec/* isSensor */.rq)(srv.specification)).map(srv => srv.readingRegister)));
  var recordingRegisters = readingRegisters.filter(reg => registerIdsChecked.indexOf(reg.id) > -1);
  var recordingDevices = (0,utils/* uniqueMap */.EM)(recordingRegisters, reg => reg.service.device.deviceId, reg => reg.service.device);
  var aggregators = (0,useServices/* default */.Z)({
    serviceClass: constants/* SRV_SENSOR_AGGREGATOR */.x12
  });
  var aggregator = aggregators.find(srv => srv.id == aggregatorId);
  var samplingCount = Math.ceil(samplingDuration * 1000 / samplingIntervalDelay);
  var triggerEvent = bus.node(triggerEventId);
  var startEnabled = !starting && !!(recordingRegisters !== null && recordingRegisters !== void 0 && recordingRegisters.length);
  var events = useEvents({
    ignoreChange: true
  });
  var aggregatorsId = (0,react_use_id_hook_esm/* useId */.Me)();
  var sensorsId = (0,react_use_id_hook_esm/* useId */.Me)();
  var recordId = (0,react_use_id_hook_esm/* useId */.Me)();
  var recordingsId = (0,react_use_id_hook_esm/* useId */.Me)();
  var dashboardId = (0,react_use_id_hook_esm/* useId */.Me)();
  var samplingIntervalId = (0,react_use_id_hook_esm/* useId */.Me)();
  var samplingDurationId = (0,react_use_id_hook_esm/* useId */.Me)();
  var startDelayId = (0,react_use_id_hook_esm/* useId */.Me)();
  var prefixId = (0,react_use_id_hook_esm/* useId */.Me)();
  (0,react.useEffect)(() => {
    //console.log(`trigger event`, triggerEventId, triggerEvent)
    var un = triggerEvent === null || triggerEvent === void 0 ? void 0 : triggerEvent.subscribe(constants/* EVENT */.Ks0, () => {
      //console.log(`trigger toggle recoring`, recording)
      toggleRecording();
    }); //console.log(`mounted`, triggerEvent)

    return () => {
      //console.log(`unmount trigger`)
      if (un) un();
    };
  }, [triggerEvent, recording, registerIdsChecked, liveDataSet]);

  var createSensorConfig = () => ({
    samplingInterval: samplingIntervalDelay,
    samplesInWindow: 10,
    inputs: recordingRegisters.map(reg => ({
      serviceClass: reg.service.serviceClass
    }))
  });

  var saveConfig = () => {
    var sensorConfig = JSON.stringify(createSensorConfig(), null, 2);
    fileStorage.saveText((prefix || "jacdac") + "-sensor-config.json", sensorConfig);
  };

  var newDataSet = (registerIds, live) => registerIds.length ? createDataSet(bus, readingRegisters.filter(reg => registerIds.indexOf(reg.id) > -1), "" + (prefix || "data") + tables.length, live, chartPalette) : undefined;

  var handleRegisterCheck = reg => {
    var i = registerIdsChecked.indexOf(reg.id);
    if (i > -1) registerIdsChecked.splice(i, 1);else registerIdsChecked.push(reg.id);
    registerIdsChecked.sort();
    setRegisterIdsChecked((0,toConsumableArray/* default */.Z)(registerIdsChecked));
    setLiveDataSet(newDataSet(registerIdsChecked, true));
  };

  var stopRecording = () => {
    if (recording) {
      if (root) {
        var csv = liveDataSet.toCSV(); // write async

        var now = new Date();
        var name = "data-" + now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + "-" + now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds() + ".csv";
        root.fileAsync(name, {
          create: true
        }).then(f => f.write(csv));
      }

      setTables([liveDataSet].concat((0,toConsumableArray/* default */.Z)(tables)));
      setLiveDataSet(newDataSet(registerIdsChecked, true));
      setRecording(false);
      enqueueSnackbar("recording stopped");
    }
  };

  var startRecording = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      if (!starting && !recording && recordingRegisters.length) {
        // do countdown
        if (startDelay > 0) {
          var _countdown = Math.ceil(startDelay);

          while (_countdown > 0) {
            setCountdown(_countdown);
            yield (0,utils/* delay */.gw)(1000);
            _countdown--;
          }
        }

        setCountdown(-1);
        setLiveDataSet(newDataSet(registerIdsChecked, false));
        setRecording(true);

        if (aggregator) {
          var client = new sensoraggregatorclient/* default */.Z(aggregator);
          yield client.setInputs(createSensorConfig());
          client.collect(samplingCount);
        }

        enqueueSnackbar("recording started");
      }
    });

    return function startRecording() {
      return _ref.apply(this, arguments);
    };
  }();

  var startStreamingRegisters = () => {
    console.log("start streaming");
    var streamers = recordingRegisters === null || recordingRegisters === void 0 ? void 0 : recordingRegisters.map(reg => reg.subscribe(constants/* REPORT_UPDATE */.rGZ, () => {}));
    return () => {
      console.log("stop streaming");
      streamers.map(streamer => streamer());
    };
  };

  var toggleRecording = () => {
    if (recording) stopRecording();else startRecording();
  };

  var handleSamplingIntervalChange = event => {
    var v = parseInt(event.target.value);
    if (!isNaN(v)) setSamplingIntervalDelay(v);
  };

  var handleSamplingDurationChange = event => {
    var v = parseInt(event.target.value);
    if (!isNaN(v)) setSamplingDuration(v);
  };

  var handleStartDelayChange = event => {
    var v = parseInt(event.target.value);
    if (!isNaN(v)) setStartDelay(v);
  };

  var handlePrefixChange = event => {
    setPrefix(event.target.value.trim());
  };

  var handleTriggerChange = eventId => setTriggerEventId(eventId);

  var handleDeleteTable = table => {
    var i = tables.indexOf(table);

    if (i > -1) {
      tables.splice(i, 1);
      setTables((0,toConsumableArray/* default */.Z)(tables));
    }
  };

  var handleAggregatorChecked = srv => () => {
    var id = (srv === null || srv === void 0 ? void 0 : srv.id) == aggregatorId ? "" : srv === null || srv === void 0 ? void 0 : srv.id;
    setAggregatorId(id);
  };

  var updateLiveData = () => {
    setLiveDataSet(liveDataSet);
    setRecordingLength(liveDataSet.rows.length);
    setLiveDataTimestamp(bus.timestamp);
  };

  var throttleUpdate = (0,utils/* throttle */.P2)(() => updateLiveData(), 30); // data collection
  // interval add data entry

  var addRow = values => {
    if (!liveDataSet) return; //console.log(values)

    liveDataSet.addRow(values);

    if (recording && liveDataSet.length >= samplingCount) {
      // stop recording
      updateLiveData();
      stopRecording();
    } else {
      throttleUpdate();
    }
  }; // setting interval


  (0,react.useEffect)(() => {
    console.log("set interval to " + samplingIntervalDelay);
    recordingRegisters.forEach(reg => reg.sendSetIntAsync(samplingIntervalDelay));
  }, [samplingIntervalDelay, registerIdsChecked]); // collecting

  (0,react.useEffect)(() => {
    if (aggregator && recording) return undefined;
    var interval = setInterval(() => addRow(), samplingIntervalDelay);
    var stopStreaming = startStreamingRegisters();
    return () => {
      clearInterval(interval);
      stopStreaming();
    };
  }, [recording, samplingIntervalDelay, samplingCount, registerIdsChecked, aggregator]);
  (0,react.useEffect)(() => {
    if (aggregator) {
      var client = new sensoraggregatorclient/* default */.Z(aggregator);
      return client.subscribeSample(values => addRow(values));
    }

    return () => {};
  }, [recording, liveDataSet, registerIdsChecked, aggregator]);
  return /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement("h1", null, "Data Collector"), /*#__PURE__*/react.createElement("p", null, "Use this page to collect streaming data from Jacdac devices into various output formats."), !!aggregators.length && /*#__PURE__*/react.createElement("section", {
    id: aggregatorsId
  }, /*#__PURE__*/react.createElement("h3", null, "(Optional) Choose a data aggregator"), /*#__PURE__*/react.createElement("p", null, "A ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/services/aggregator"
  }, "data aggregator"), " ", "service collects collects sensor data on the bus and returns an aggregated at regular intervals."), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, aggregators.map(aggregator => /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    key: aggregator.id,
    item: true,
    xs: 4
  }, /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(DeviceCardHeader/* default */.Z, {
    device: aggregator.device,
    showAvatar: true
  }), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(Switch/* default */.Z, {
    checked: aggregatorId == aggregator.id,
    disabled: recording,
    onChange: handleAggregatorChecked(aggregator)
  }))))))), /*#__PURE__*/react.createElement("section", {
    id: sensorsId
  }, /*#__PURE__*/react.createElement("h3", null, "Choose sensors \xA0", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "start simulator",
    onClick: toggleShowDeviceHostsDialog
  }, /*#__PURE__*/react.createElement(Add/* default */.Z, null))), !readingRegisters.length && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    className: classes.grow,
    severity: "info"
  }, "Waiting for sensor..."), !!readingRegisters.length && /*#__PURE__*/react.createElement(ReadingFieldGrid/* default */.Z, {
    readingRegisters: readingRegisters,
    registerIdsChecked: registerIdsChecked,
    recording: recording,
    liveDataSet: liveDataSet,
    handleRegisterCheck: handleRegisterCheck
  })), /*#__PURE__*/react.createElement("section", {
    id: recordId
  }, /*#__PURE__*/react.createElement("h3", null, "Record data"), aggregator && /*#__PURE__*/react.createElement("p", null, "Record the sensor input configuration in order to up your ML model later on."), /*#__PURE__*/react.createElement("div", {
    className: classes.buttons
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    size: "large",
    variant: "contained",
    color: recording ? "secondary" : "primary",
    title: starting ? "starting in " + countdown : recording ? "stop recording" : "start recording",
    onClick: toggleRecording,
    startIcon: starting ? /*#__PURE__*/react.createElement(HourglassEmpty/* default */.Z, null) : recording ? /*#__PURE__*/react.createElement(Stop/* default */.Z, null) : /*#__PURE__*/react.createElement(PlayArrow/* default */.Z, null),
    disabled: !startEnabled
  }, starting ? countdown + "" : recording ? "Stop" : "Start"), aggregator && /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "contained",
    title: "save sensor input configuration",
    onClick: saveConfig,
    startIcon: /*#__PURE__*/react.createElement(Save/* default */.Z, null),
    disabled: recording
  }, "Save configuration")), /*#__PURE__*/react.createElement("div", {
    className: classes.row
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: samplingIntervalId,
    className: classes.field,
    disabled: recording,
    type: "number",
    label: "Sampling interval",
    value: samplingIntervalDelay,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react.createElement(InputAdornment/* default */.Z, {
        position: "start"
      }, "ms")
    },
    onChange: handleSamplingIntervalChange
  }), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: samplingDurationId,
    className: classes.field,
    type: "number",
    disabled: recording,
    label: "Sampling duration",
    value: samplingDuration,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react.createElement(InputAdornment/* default */.Z, {
        position: "start"
      }, "s")
    },
    onChange: handleSamplingDurationChange
  }), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: startDelayId,
    className: classes.field,
    type: "number",
    disabled: recording,
    label: "Start delay",
    value: startDelay,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react.createElement(InputAdornment/* default */.Z, {
        position: "start"
      }, "s")
    },
    onChange: handleStartDelayChange
  }), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: prefixId,
    className: classes.field,
    disabled: recording,
    label: "File name prefix",
    value: prefix,
    variant: "outlined",
    onChange: handlePrefixChange
  }), /*#__PURE__*/react.createElement(SelectEvent, {
    events: events,
    eventId: triggerEventId,
    onChange: handleTriggerChange,
    label: "Start Event",
    friendlyName: true
  }))), !!(recordingDevices !== null && recordingDevices !== void 0 && recordingDevices.length) && /*#__PURE__*/react.createElement("section", {
    id: dashboardId
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, recordingDevices === null || recordingDevices === void 0 ? void 0 : recordingDevices.map(device => /*#__PURE__*/react.createElement(DashboardDeviceItem/* default */.Z, {
    key: device.id,
    device: device,
    showAvatar: true,
    showHeader: true
  })))), liveDataSet && /*#__PURE__*/react.createElement(Trend/* default */.Z, {
    key: "trends",
    height: 12,
    dataSet: liveDataSet,
    horizon: LIVE_HORIZON,
    dot: true,
    gradient: true
  }), /*#__PURE__*/react.createElement(FileTabs/* default */.Z, {
    hideFiles: true,
    hideDirectories: true
  }), !!tables.length && /*#__PURE__*/react.createElement("section", {
    id: recordingsId
  }, /*#__PURE__*/react.createElement("h3", null, "Recordings"), /*#__PURE__*/react.createElement(DataSetGrid, {
    tables: tables,
    handleDeleteTable: handleDeleteTable
  }))); //{liveDataSet && <DataSetTable key="datasettable" className={classes.segment} dataSet={liveDataSet} maxRows={3} minRows={3} />}
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-collector-tsx-8c83cf3080df64af7121.js.map