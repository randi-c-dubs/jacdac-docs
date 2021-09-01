"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5201],{

/***/ 31186:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34621);





var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var CardActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function CardActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(styles, {
  name: 'MuiCardActions'
})(CardActions));

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

/***/ 17890:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ClassDataSetGrid; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95823);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29114);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36176);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94500);
/* harmony import */ var _Trend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25090);



 // tslint:disable-next-line: no-submodule-imports match-default-export-name


function ClassDataSetGrid(props) {
  var {
    label,
    tables,
    handleDeleteTable
  } = props;

  var handleDelete = table => () => handleDeleteTable(table);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    subheader: label + (", " + tables.length + " sample(s)")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, tables.map(table => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    key: "result" + table.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Trend__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    dataSet: table,
    height: 8,
    mini: true
  }), handleDeleteTable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
    onClick: handleDelete(table),
    title: "Delete this sample"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null))))))));
}

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

/***/ 85201:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlocklyDataRecordingDialog; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90293);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52468);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(65733);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1059);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(26954);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(89952);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(83332);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79885);
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(42404);
/* harmony import */ var _material_ui_icons_Stop__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(34257);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(52377);
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(94343);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(60002);
/* harmony import */ var _ReadingFieldGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29065);
/* harmony import */ var _FieldDataSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64616);
/* harmony import */ var _ClassDataSetGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17890);
/* harmony import */ var _Trend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25090);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54774);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20392);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81794);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13173);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71815);
/* harmony import */ var _model_editor_modelblockdsl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95149);
/* harmony import */ var _ServiceManagerContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99808);




 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name















var LIVE_HORIZON = 24;

function createDataSet(bus, registers, name, live, palette) {
  var fields = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .arrayConcatMany */ .ue)(registers.map(reg => reg.fields));
  var colors = fields.map((f, i) => palette[i % palette.length]);
  var set = new _FieldDataSet__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP(bus, name, fields, colors);
  if (live) set.maxRows = LIVE_HORIZON + 4;
  return set;
}

function BlocklyDataRecordingDialog(props) {
  var {
    classes,
    chartPalette,
    open,
    onDone,
    recordingCount,
    workspace
  } = props;
  var {
    0: dialogType,
    1: setDialogType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("chooseSensors");
  var {
    fileStorage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ServiceManagerContext__WEBPACK_IMPORTED_MODULE_12__/* .default */ .ZP);
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z);
  var readingRegisters = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(bus, bus => (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .arrayConcatMany */ .ue)(bus.devices().map(device => device.services().filter(srv => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_9__/* .isSensor */ .rq)(srv.specification)).map(srv => srv.readingRegister))));

  var getWorkspaceClasses = () => {
    // get updated list of class variables
    var classes = workspace.getVariablesOfType(_model_editor_modelblockdsl__WEBPACK_IMPORTED_MODULE_11__/* .MB_CLASS_VAR_TYPE */ .nc).map(function (classVar) {
      return classVar.name;
    });
    if (classes.length == 0) return ["class1"];
    return classes;
  };
  /* For choosing sensors */


  var {
    0: registerIdsChecked,
    1: setRegisterIdsChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var {
    0: totalSamples,
    1: setTotalSamples
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  var {
    0: recordingName,
    1: setRecordingName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("recording" + recordingCount);
  var {
    0: className,
    1: setClassName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("class1");
  var {
    1: setRecordingLength
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  var handleRegisterCheck = reg => {
    var i = registerIdsChecked.indexOf(reg.id);
    if (i > -1) registerIdsChecked.splice(i, 1);else registerIdsChecked.push(reg.id);
    registerIdsChecked.sort();
    setRegisterIdsChecked((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z)(registerIdsChecked));
  };

  var handleRecordingNameChange = event => {
    setRecordingName(event.target.value.trim());
  };

  var handleClassNameChange = newClassName => {
    setClassName(newClassName);
  };
  /* For recording data*/


  var recordingRegisters = readingRegisters.filter(reg => registerIdsChecked.indexOf(reg.id) > -1);
  var {
    0: isRecording,
    1: setIsRecording
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var {
    0: liveRecording,
    1: setLiveRecording
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  var {
    1: setLiveDataTimestamp
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  var {
    0: currentRecording
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    recording: [],
    blockId: ""
  });
  var {
    0: samplingIntervalDelay,
    1: setSamplingIntervalDelay
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("50");
  var {
    0: samplingDuration,
    1: setSamplingDuration
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("1");
  var samplingIntervalDelayi = parseInt(samplingIntervalDelay);
  var samplingCount = Math.ceil(parseFloat(samplingDuration) * 1000 / samplingIntervalDelayi);
  var errorSamplingIntervalDelay = isNaN(samplingIntervalDelayi) || !/\d+/.test(samplingIntervalDelay);
  var errorSamplingDuration = isNaN(samplingCount);
  var error = errorSamplingDuration || errorSamplingIntervalDelay;
  var startEnabled = !!(recordingRegisters !== null && recordingRegisters !== void 0 && recordingRegisters.length);

  var handleSamplingIntervalChange = event => {
    setSamplingIntervalDelay(event.target.value.trim());
  };

  var handleSamplingDurationChange = event => {
    setSamplingDuration(event.target.value.trim());
  };

  var newRecording = (registerIds, live) => registerIds.length ? createDataSet(bus, readingRegisters.filter(reg => registerIds.indexOf(reg.id) > -1), recordingName + "." + totalSamples, live, chartPalette) : undefined;

  var stopRecording = () => {
    if (isRecording) {
      // add new samples to recording
      currentRecording.recording.push(liveRecording);
      setTotalSamples(totalSamples + 1); // refresh live recording

      setLiveRecording(newRecording(registerIdsChecked, true)); // stop recording

      setIsRecording(false);
    }
  };

  var startRecording = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z)(function* () {
      if (!isRecording && recordingRegisters.length) {
        setLiveRecording(newRecording(registerIdsChecked, false));
        setIsRecording(true);
      }
    });

    return function startRecording() {
      return _ref.apply(this, arguments);
    };
  }();

  var startStreamingRegisters = () => {
    console.log("start streaming");
    var streamers = recordingRegisters === null || recordingRegisters === void 0 ? void 0 : recordingRegisters.map(reg => reg.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_10__/* .REPORT_UPDATE */ .rGZ, () => {}));
    return () => {
      console.log("stop streaming");
      streamers.map(streamer => streamer());
    };
  };

  var toggleRecording = () => {
    if (isRecording) stopRecording();else startRecording();
  };

  var handleDeleteSample = sample => {
    var i = currentRecording.recording.indexOf(sample);
    if (i > -1) currentRecording.recording.splice(i, 1);
  };

  var updateLiveData = () => {
    setLiveRecording(liveRecording);
    setRecordingLength(liveRecording.rows.length);
    setLiveDataTimestamp(bus.timestamp);
  };

  var throttleUpdate = (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .throttle */ .P2)(() => updateLiveData(), 30); // data collection
  // interval add data entry

  var addRow = values => {
    if (!liveRecording) return; //console.log(values)

    liveRecording.addRow(values);

    if (isRecording && liveRecording.length >= samplingCount) {
      // stop recording
      updateLiveData();
      stopRecording();
    } else {
      throttleUpdate();
    }
  }; // setting interval


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (error) return;
    console.log("set interval to " + samplingIntervalDelayi);
    recordingRegisters.forEach(reg => reg.sendSetPackedAsync("i32", [samplingIntervalDelayi]));
  }, [samplingIntervalDelayi, registerIdsChecked, errorSamplingIntervalDelay]); // collecting

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (error) return undefined;
    var interval = setInterval(() => addRow(), samplingIntervalDelayi);
    var stopStreaming = startStreamingRegisters();
    return () => {
      clearInterval(interval);
      stopStreaming();
    };
  }, [isRecording, dialogType, samplingIntervalDelayi, samplingCount]);
  /* For placing a block on the workspace */

  var addNewRecording = () => {
    // Create new block for this recording
    if (className != null && className != undefined) {
      // Get or create new class typed variable
      // (createVariable will return an existing variable if one with a particular name already exists)
      var classVar = workspace.createVariable(className, _model_editor_modelblockdsl__WEBPACK_IMPORTED_MODULE_11__/* .MB_CLASS_VAR_TYPE */ .nc); // Create new recording block on the workspace

      var newRecordingBlock = workspace.newBlock(_model_editor_modelblockdsl__WEBPACK_IMPORTED_MODULE_11__/* .MODEL_BLOCKS */ .GJ + "recording");
      currentRecording.blockId = newRecordingBlock.id; // Automatically insert the recording name into the new block

      var recordingNameField = newRecordingBlock.getField("RECORDING_NAME");
      recordingNameField.setValue(recordingName); // Automatically insert the class name into the new block

      var classNameField = newRecordingBlock.getField("CLASS_NAME");
      classNameField.setValue(classVar.getId()); // Save recording data to block

      var recordingBlockField = newRecordingBlock.getField("EXPAND_BUTTON");
      var recordingBlockParams = {
        parametersVisible: null,
        numSamples: currentRecording.recording.length,
        timestamp: currentRecording.recording[0].startTimestamp,
        inputTypes: currentRecording.recording[0].headers
      };
      recordingBlockField.updateFieldValue(recordingBlockParams);
      newRecordingBlock.initSvg();
      newRecordingBlock.render(false);
      workspace.centerOnBlock(newRecordingBlock.id);
    }
  };
  /* For interface controls */


  var resetInputs = () => {
    setClassName("class1");
    setRecordingName("recording" + recordingCount);
  };

  var handleDownloadDataSet = () => {
    var recordingCountHeader = "Number of recordings," + currentRecording.recording.length;
    var recordingData = [];
    currentRecording.recording.forEach(sample => {
      recordingData.push("Recording metadata," + sample.name + "," + sample.rows.length + "," + className);
      recordingData.push(sample.toCSV());
    });
    var recordData = recordingData.join("\n");
    var csv = [recordingCountHeader, recordData];
    fileStorage.saveText(recordingName + ".csv", csv.join("\n"));
  };

  var handleCancel = () => {
    // reset the user inputs
    resetInputs(); // close the modal

    onDone(null, null);
  };

  var handleNext = () => {
    // begin recording live data
    setLiveRecording(newRecording(registerIdsChecked, true)); // go to the next page

    setDialogType("recordData");
  };

  var handleDone = () => {
    // create new recording block
    addNewRecording(); // reset the user inputs

    resetInputs(); // call the done function and close modal

    var {
      recording,
      blockId
    } = currentRecording;
    onDone(recording, blockId);
  };

  if (dialogType == "chooseSensors") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
    open: open,
    onClose: handleCancel,
    fullWidth: true,
    maxWidth: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Collect new recording"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: "sensors"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.row
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
    className: classes.field,
    label: "Recording name",
    value: recordingName,
    variant: "outlined",
    onChange: handleRecordingNameChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_19__/* .default */ .ZP, {
    className: classes.field,
    disabled: isRecording,
    options: getWorkspaceClasses(),
    style: {
      width: 250,
      display: "inline-flex"
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, Object.assign({}, params, {
      label: "Class label",
      variant: "outlined"
    })),
    value: className,
    onInputChange: (event, newValue) => handleClassNameChange(newValue)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.row
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
    className: classes.field,
    error: errorSamplingDuration,
    disabled: isRecording,
    label: "Sampling duration",
    value: samplingDuration,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
        position: "start"
      }, "s")
    },
    onChange: handleSamplingDurationChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
    className: classes.field,
    error: errorSamplingIntervalDelay,
    disabled: isRecording,
    label: "Sampling interval",
    value: samplingIntervalDelay,
    variant: "outlined",
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
        position: "start"
      }, "ms")
    },
    onChange: handleSamplingIntervalChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Collect data from"), !readingRegisters.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Waiting for sensors..."), !!readingRegisters.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReadingFieldGrid__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    readingRegisters: readingRegisters,
    registerIdsChecked: registerIdsChecked,
    recording: isRecording,
    liveDataSet: liveRecording,
    handleRegisterCheck: handleRegisterCheck
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, {
    variant: "contained",
    onClick: handleCancel
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, {
    variant: "contained",
    color: "primary",
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, null),
    disabled: !registerIdsChecked.length,
    onClick: handleNext
  }, "Next")));else return (
    /*#__PURE__*/
    // recordData
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
      open: open,
      onClose: handleCancel,
      fullWidth: true,
      maxWidth: "md"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
      container: true,
      direction: "column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Edit recording: ", recordingName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: "recordedData"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: "recordings"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Recorded samples", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      onClick: handleDownloadDataSet,
      title: "Download all recording data",
      disabled: currentRecording.recording.length == 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_24__/* .default */ .Z, null))), currentRecording.recording.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ClassDataSetGrid__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      key: "samples-" + recordingName,
      label: className,
      tables: currentRecording.recording,
      handleDeleteTable: handleDeleteSample
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "None")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
      item: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: "record"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classes.row
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Add more samples"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, {
      size: "large",
      variant: "contained",
      color: isRecording ? "secondary" : "primary",
      "aria-label": "start/stop recording",
      title: "start/stop recording",
      onClick: toggleRecording,
      startIcon: isRecording ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Stop__WEBPACK_IMPORTED_MODULE_25__/* .default */ .Z, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z, null),
      disabled: !startEnabled
    }, isRecording ? "Stop" : "Start"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: "liveData"
    }, liveRecording && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Trend__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      key: "trends",
      height: 12,
      dataSet: liveRecording,
      horizon: LIVE_HORIZON,
      dot: true,
      gradient: true
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, {
      variant: "contained",
      onClick: handleCancel
    }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, {
      variant: "contained",
      color: "primary",
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, null),
      disabled: !currentRecording.recording.length,
      onClick: handleDone
    }, "Done")))
  );
}

/***/ })

}]);
//# sourceMappingURL=5201-9223b3983294ae9f6738.js.map