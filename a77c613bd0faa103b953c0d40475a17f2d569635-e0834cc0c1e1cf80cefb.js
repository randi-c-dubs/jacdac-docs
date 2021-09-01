"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5637,7746],{

/***/ 38030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34621);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80453);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38582);







var styles = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },

  /* Styles applied to the `Typography` components if primary and secondary are set. */
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },

  /* Styles applied to the `Typography` components if dense. */
  dense: {},

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 56
  },

  /* Styles applied to the primary `Typography` component. */
  primary: {},

  /* Styles applied to the secondary `Typography` component. */
  secondary: {}
};
var ListItemText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListItemText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      primaryProp = props.primary,
      primaryTypographyProps = props.primaryTypographyProps,
      secondaryProp = props.secondary,
      secondaryTypographyProps = props.secondaryTypographyProps,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      dense = _React$useContext.dense;

  var primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== _Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z && !disableTypography) {
    primary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }

  var secondary = secondaryProp;

  if (secondary != null && secondary.type !== _Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z && !disableTypography) {
    secondary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(styles, {
  name: 'MuiListItemText'
})(ListItemText));

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
    (0,_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .assert */ .hu)(service.serviceClass === _jacdac_spec_dist_specconstants__WEBPACK_IMPORTED_MODULE_0__/* .SRV_SENSOR_AGGREGATOR */ .x12);
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

/***/ 15548:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ServiceList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6210);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80838);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54774);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20392);
/* harmony import */ var _useGridBreakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7746);
/* harmony import */ var _DeviceCardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31477);
/* harmony import */ var _alert_DeviceLostAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60145);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95453);









function ServiceListItem(props) {
  var {
    service,
    content,
    checked,
    checkedDisabled,
    toggleChecked,
    actions
  } = props;
  var {
    device
  } = service;

  var handleCheck = () => toggleChecked();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    device: device,
    showMedia: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_alert_DeviceLostAlert__WEBPACK_IMPORTED_MODULE_5__/* .DeviceLostAlert */ .M, {
    device: device
  }), content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, checked !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    disabled: checkedDisabled,
    onChange: handleCheck,
    checked: checked
  }), actions));
}

function ServiceList(props) {
  var {
    serviceClass,
    selected,
    toggleSelected,
    content,
    actions,
    alertMissing
  } = props;
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);
  var services = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(bus, n => n.services({
    serviceClass
  }));
  var gridBreakpoints = (0,_useGridBreakpoints__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(services === null || services === void 0 ? void 0 : services.length);

  var handleSelected = service => selected && selected(service);

  var handleChecked = service => () => toggleSelected && toggleSelected(service);

  var serviceContent = service => content && content(service);

  var serviceActions = service => actions && actions(service);

  if (alertMissing && !(services !== null && services !== void 0 && services.length)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    severity: "info"
  }, alertMissing);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    mb: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, services === null || services === void 0 ? void 0 : services.map(service => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, Object.assign({
    key: service.id,
    item: true
  }, gridBreakpoints), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ServiceListItem, {
    service: service,
    checked: handleSelected(service),
    toggleChecked: handleChecked(service),
    content: serviceContent(service),
    actions: serviceActions(service)
  })))));
}

/***/ }),

/***/ 94431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ConnectAlert; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33287);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13173);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20392);
/* harmony import */ var _buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84125);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42862);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54774);
// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
  button: {
    marginLeft: theme.spacing(2)
  }
}));

function NoSsrConnectAlert(props) {
  var classes = useStyles();
  var {
    serviceClass,
    closeable
  } = props;
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z);
  var {
    transports
  } = bus;
  var devices = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(bus, b => b.devices({
    serviceClass,
    ignoreSelf: true
  }));
  var spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass); // don't show if no transport, some devices

  if (!transports.length || devices !== null && devices !== void 0 && devices.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    severity: "info",
    closeable: closeable
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect a ", spec.name, " device?"), transports.map(transport => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    key: transport.type,
    transport: transport,
    className: classes.button,
    full: true,
    transparent: true
  }))));
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NoSsrConnectAlert, props));
}

/***/ }),

/***/ 29177:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ CircularProgressWithLabel; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27136);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80453);


function CircularProgressWithLabel(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    position: "relative",
    display: "inline-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, Object.assign({
    variant: "determinate"
  }, props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    variant: "caption",
    component: "div",
    color: "textSecondary"
  }, Math.round(props.value) + "%")));
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

/***/ 83625:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ModelActions": function() { return /* binding */ ModelActions; },
  "ModelContent": function() { return /* binding */ ModelContent; },
  "default": function() { return /* binding */ ModelUploader; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(80791);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(4381);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(38030);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/components/ServiceList.tsx
var ServiceList = __webpack_require__(15548);
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(94431);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/DbContext.tsx
var DbContext = __webpack_require__(94904);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
;// CONCATENATED MODULE: ./src/components/useDb.ts





function useDbBlob(id) {
  var {
    db
  } = (0,react.useContext)(DbContext/* default */.ZP);
  var {
    0: _value,
    1: _setValue
  } = (0,react.useState)(undefined);
  var values = db === null || db === void 0 ? void 0 : db.blobs; // listen to change

  (0,react.useEffect)(() => {
    var _mounted = true;
    return values === null || values === void 0 ? void 0 : values.subscribe(DbContext/* DB_VALUE_CHANGE */.TB, /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.Z)(function* (changed) {
        if (changed === id) {
          try {
            var v = yield values.get(id);

            if (_mounted) {
              _setValue(v);
            }
          } catch (e) {
            console.log(e);
            yield values === null || values === void 0 ? void 0 : values.set(id, undefined);
          }
        }

        return () => {
          _mounted = false;
        };
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }, [values]); // load intial value

  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (mounted) {
      try {
        var v = yield values === null || values === void 0 ? void 0 : values.get(id);
        if (mounted()) _setValue(v);
      } catch (e) {
        console.log(e); // trash data

        yield values === null || values === void 0 ? void 0 : values.set(id, undefined);
      }
    });

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }(), [values]);
  return {
    blob: _value,
    setBlob: function () {
      var _setBlob = (0,asyncToGenerator/* default */.Z)(function* (blob) {
        yield values === null || values === void 0 ? void 0 : values.set(id, blob);
      });

      function setBlob(_x3) {
        return _setBlob.apply(this, arguments);
      }

      return setBlob;
    }()
  };
}
function useDbUint8Array(blobName) {
  var {
    blob,
    setBlob
  } = useDbBlob(blobName);
  var {
    0: model,
    1: setModel
  } = (0,react.useState)(undefined);
  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.Z)(function* (mounted) {
      if (!blob) {
        setModel(undefined);
      } else {
        var buf = yield (0,utils/* readBlobToUint8Array */.Lg)(blob);
        if (mounted()) setModel(buf);
      }
    });

    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }(), [blob]);
  return {
    data: model,
    setBlob
  };
}
function useDbString(blobName) {
  var {
    blob,
    setBlob
  } = useDbBlob(blobName);
  var {
    0: model,
    1: setModel
  } = (0,react.useState)(undefined);
  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
    if (!blob) {
      setModel(undefined);
    } else {
      var t = yield (0,utils/* readBlobToText */.i1)(blob);
      setModel(t);
    }
  }), [blob]);
  return {
    data: model,
    setBlob
  };
}
function useDbJSON(blobName) {
  var {
    data,
    setBlob: _setBlob2
  } = useDbString(blobName);
  var value = (0,utils/* JSONTryParse */.ZZ)(data);
  return {
    value,
    setBlob: function () {
      var _setBlob3 = (0,asyncToGenerator/* default */.Z)(function* (blob) {
        yield _setBlob2(blob);
      });

      function setBlob(_x5) {
        return _setBlob3.apply(this, arguments);
      }

      return setBlob;
    }()
  };
}
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(85413);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__(57683);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/buffer.ts
var buffer = __webpack_require__(3482);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pipes.ts
var pipes = __webpack_require__(93642);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceclient.ts
var serviceclient = __webpack_require__(56763);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__(91635);
;// CONCATENATED MODULE: ./jacdac-ts/src/clients/modelrunnerclient.ts











/*
    enum SampleType : u8 {
        U8 = 0x08
        I8 = 0x88
        U16 = 0x10
        I16 = 0x90
        U32 = 0x20
        I32 = 0xA0
    }
    rw inputs @ 0x80 {
        sampling_interval: u16 ms
        samples_in_window: u16
        reserved: u32
    repeats:
        device_id: devid
        service_class: u32
        service_num: u8
        sample_size: u8 B
        sample_type: SampleType
        sample_shift: i8
    }
*/

function isMLModelSupported(model, formatRegValue) {
  return (0,utils/* read32 */.Zy)(model, 0) == formatRegValue || (0,utils/* read32 */.Zy)(model, 4) == formatRegValue;
}
function getMLModelFormatName(model) {
  var map = serviceSpecificationFromClassIdentifier(SRV_MODEL_RUNNER).enums["ModelFormat"].members;
  var m0 = read32(model, 0);
  var m1 = read32(model, 4);

  for (var _v of Object.keys(map)) {
    if (map[_v] == m0 || map[_v] == m1) return _v;
  }

  return "0x" + toHex(model.slice(0, 8));
}
/**
 * A client for the model runner service
 * @category Clients
 */

var ModelRunnerClient = /*#__PURE__*/function (_JDServiceClient) {
  (0,inheritsLoose/* default */.Z)(ModelRunnerClient, _JDServiceClient);

  function ModelRunnerClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    (0,utils/* assert */.hu)(service.serviceClass == constants/* SRV_MODEL_RUNNER */.kVm);
    _this.service.registersUseAcks = true;
    return _this;
  } // TODO this should use some caching?


  var _proto = ModelRunnerClient.prototype;

  _proto.isModelSupported =
  /*#__PURE__*/
  function () {
    var _isModelSupported = (0,asyncToGenerator/* default */.Z)(function* (model) {
      var reg = this.service.register(constants/* ModelRunnerReg.Format */.FEd.Format);
      yield reg.refresh();
      return reg.data == null || isMLModelSupported(model, reg.intValue >>> 0);
    });

    function isModelSupported(_x) {
      return _isModelSupported.apply(this, arguments);
    }

    return isModelSupported;
  }();

  _proto.subscribeResults = function subscribeResults(handler) {
    var reg = this.service.register(constants/* ModelRunnerReg.Outputs */.FEd.Outputs);
    return reg.subscribe(constants/* REPORT_RECEIVE */.Gb8, () => {
      handler((0,buffer/* bufferToArray */._W)(reg.data, buffer/* NumberFormat.Float32LE */.y4.Float32LE));
    });
  };

  _proto.deployModel = /*#__PURE__*/function () {
    var _deployModel = (0,asyncToGenerator/* default */.Z)(function* (model, onProgress) {
      onProgress === null || onProgress === void 0 ? void 0 : onProgress(0);
      var resp = yield this.service.sendCmdAwaitResponseAsync(packet/* default.jdpacked */.Z.jdpacked(constants/* ModelRunnerCmd.SetModel */.cdg.SetModel, "u32", [model.length]), 3000);
      onProgress === null || onProgress === void 0 ? void 0 : onProgress(0.05);
      var [pipePort] = (0,pack/* jdunpack */.TE)(resp.data, "u16");
      if (!pipePort) throw new Error("wrong port " + pipePort);
      var pipe = new pipes/* OutPipe */.Ah(this.service.device, pipePort);
      var chunkSize = 224; // has to be divisible by 8

      for (var i = 0; i < model.length; i += chunkSize) {
        yield pipe.send(model.slice(i, i + chunkSize));
        onProgress === null || onProgress === void 0 ? void 0 : onProgress(0.05 + i / model.length * 0.9);
      }

      try {
        yield pipe.close();
      } catch (_unused) {// the device may restart before we manage to close
      }

      onProgress === null || onProgress === void 0 ? void 0 : onProgress(1);
    });

    function deployModel(_x2, _x3) {
      return _deployModel.apply(this, arguments);
    }

    return deployModel;
  }();

  _proto.autoInvoke = /*#__PURE__*/function () {
    var _autoInvoke = (0,asyncToGenerator/* default */.Z)(function* (everySamples) {
      if (everySamples === void 0) {
        everySamples = 1;
      }

      yield this.service.register(constants/* ModelRunnerReg.AutoInvokeEvery */.FEd.AutoInvokeEvery).sendSetPackedAsync("u16", [everySamples]);
    });

    function autoInvoke(_x4) {
      return _autoInvoke.apply(this, arguments);
    }

    return autoInvoke;
  }();

  _proto.getReg = /*#__PURE__*/function () {
    var _getReg = (0,asyncToGenerator/* default */.Z)(function* (id, f) {
      var reg = this.service.register(id);
      yield reg.refresh();
      return f(reg);
    });

    function getReg(_x5, _x6) {
      return _getReg.apply(this, arguments);
    }

    return getReg;
  }();

  _proto.modelStats = /*#__PURE__*/function () {
    var _modelStats = (0,asyncToGenerator/* default */.Z)(function* () {
      var info = {
        modelSize: this.getReg(constants/* ModelRunnerReg.ModelSize */.FEd.ModelSize, r => r.intValue),
        arenaSize: this.getReg(constants/* ModelRunnerReg.AllocatedArenaSize */.FEd.AllocatedArenaSize, r => r.intValue),
        inputShape: this.getReg(constants/* ModelRunnerReg.InputShape */.FEd.InputShape, r => (0,buffer/* bufferToArray */._W)(r.data, buffer/* NumberFormat.UInt16LE */.y4.UInt16LE)),
        outputShape: this.getReg(constants/* ModelRunnerReg.OutputShape */.FEd.OutputShape, r => (0,buffer/* bufferToArray */._W)(r.data, buffer/* NumberFormat.UInt16LE */.y4.UInt16LE)),
        lastError: this.getReg(constants/* ModelRunnerReg.LastError */.FEd.LastError, r => (0,utils/* uint8ArrayToString */.DA)(r.data))
      };

      for (var id of Object.keys(info)) {
        info[id] = yield info[id];
      }

      return info;
    });

    function modelStats() {
      return _modelStats.apply(this, arguments);
    }

    return modelStats;
  }();

  return ModelRunnerClient;
}(serviceclient/* JDServiceClient */.P);
/* harmony default export */ var modelrunnerclient = (ModelRunnerClient);
/*
export async function testAGG(bus: JDBus) {
    const aggService = bus.services({ serviceClass: SRV_SENSOR_AGGREGATOR })[0]
    if (!aggService) {
        console.log("no agg service")
        return
    }
    const agg = new SensorAggregatorClient(aggService)

    let acc = bus.services({ serviceClass: SRV_ACCELEROMETER })
    if (acc.length == 0) {
        console.log("no acc service")
        return
    }

    await agg.setInputs({
        samplesInWindow: 50,
        samplingInterval: 20,
        inputs: acc
    })

    agg.subscribeSample(sample => {
        console.log("SAMPLE", sample)
    })

}

export async function testTF(bus: JDBus, model: Uint8Array) {
    const tfService = bus.services({ serviceClass: SRV_MODEL_RUNNER })[0]
    if (!tfService) {
        console.log("no tflite service")
        return
    }
    const tf = new TFLiteClient(tfService)

    if (model)
        await tf.deployModel(model, p => console.log("deploy", p.toFixed(3)))

    const st = await tf.modelStats()
    console.log(st)

    const classNames = ['noise', 'punch', 'left', 'right'];
    tf.subscribeResults(outp => {
        for (let i = 0; i < outp.length; ++i) {
            if (outp[i] > 0.7) {
                console.log(outp[i].toFixed(3) + " " + classNames[i])
            }
        }
         console.log("OUT", outp)
    })

    await tf.autoInvoke(8)

    console.log("autoinvoked")

}
*/
// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 2 modules
var RegisterInput = __webpack_require__(24162);
// EXTERNAL MODULE: ./src/components/ui/CircularProgressWithLabel.tsx
var CircularProgressWithLabel = __webpack_require__(29177);
// EXTERNAL MODULE: ./jacdac-ts/src/clients/sensoraggregatorclient.ts
var sensoraggregatorclient = __webpack_require__(59381);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(58063);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(10913);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(26390);
;// CONCATENATED MODULE: ./src/components/SensorAggregatorConfigView.tsx






function SensorAggregatorInputConfigView(props) {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    input
  } = props;
  var {
    serviceClass,
    deviceId,
    serviceIndex
  } = input;
  var device = deviceId && bus.device(deviceId);
  return /*#__PURE__*/react.createElement(react.Fragment, null, (0,pretty/* serviceName */.HV)(serviceClass), device && /*#__PURE__*/react.createElement(DeviceName/* default */.Z, {
    device: device,
    serviceIndex: serviceIndex
  }), !device && deviceId && /*#__PURE__*/react.createElement("span", null, deviceId, "[", serviceIndex, "]"), !deviceId && /*#__PURE__*/react.createElement("span", null, "/ any device"));
}

function SensorAggregatorConfigView(props) {
  var {
    config
  } = props;
  if (!(config !== null && config !== void 0 && config.inputs)) return /*#__PURE__*/react.createElement(react.Fragment, null);
  return /*#__PURE__*/react.createElement(Paper/* default */.Z, null, /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, "samples interval (ms):", " ", /*#__PURE__*/react.createElement("code", null, config.samplingInterval)), /*#__PURE__*/react.createElement("li", null, "samples window (# samples):", " ", /*#__PURE__*/react.createElement("code", null, config.samplesInWindow)), /*#__PURE__*/react.createElement("li", null, "inputs (", config.inputs.length, ")", /*#__PURE__*/react.createElement("ul", null, config.inputs.map((input, i) => /*#__PURE__*/react.createElement("li", {
    key: "input" + i
  }, /*#__PURE__*/react.createElement(SensorAggregatorInputConfigView, {
    input: input
  })))))));
}
// EXTERNAL MODULE: ./src/components/ServiceManagerContext.tsx + 3 modules
var ServiceManagerContext = __webpack_require__(99808);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/RegisterTrend.tsx
var RegisterTrend = __webpack_require__(88251);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
;// CONCATENATED MODULE: ./src/components/useCall.tsx




function useCall() {
  var {
    setError: setAppError
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var {
    0: error,
    1: setError
  } = (0,react.useState)();
  var {
    0: running,
    1: setRunning
  } = (0,react.useState)(false);
  var {
    0: progress,
    1: setProgress
  } = (0,react.useState)(0);

  var handleProgress = p => setProgress(p);

  var call = handler => {
    try {
      setRunning(true);
      setError(undefined);
      handler(handleProgress);
    } catch (e) {
      setError(e);
      setAppError(e);
    } finally {
      setRunning(false);
    }
  };

  var callAsync = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* (handler) {
      try {
        setRunning(true);
        setError(undefined);
        yield handler(handleProgress);
      } catch (e) {
        setError(e);
        setAppError(e);
      } finally {
        setRunning(false);
      }
    });

    return function callAsync(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var alert = error && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, error);
  return {
    running,
    error,
    progress,
    alert,
    call,
    callAsync
  };
}
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(6018);
;// CONCATENATED MODULE: ./node_modules/@material-ui/icons/esm/Link.js


/* harmony default export */ var Link = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/react.createElement("path", {
  d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
}), 'Link'));
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(82677);
;// CONCATENATED MODULE: ./src/pages/tools/model-uploader.tsx























var ImportButton = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 119).then(__webpack_require__.bind(__webpack_require__, 20119)));
function ModelContent(props) {
  var {
    service
  } = props;
  var modelSizeRegister = (0,useRegister/* default */.Z)(service, constants/* ModelRunnerReg.ModelSize */.FEd.ModelSize);
  var lastErrorRegister = (0,useRegister/* default */.Z)(service, constants/* ModelRunnerReg.LastError */.FEd.LastError);
  var autoInvokeEveryRegister = (0,useRegister/* default */.Z)(service, constants/* ModelRunnerReg.AutoInvokeEvery */.FEd.AutoInvokeEvery);
  var outputsRegister = (0,useRegister/* default */.Z)(service, constants/* ModelRunnerReg.Outputs */.FEd.Outputs);
  var [modelSize] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(modelSizeRegister);
  var [lastError] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(lastErrorRegister);
  return /*#__PURE__*/react.createElement(react.Fragment, null, lastError && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "warning"
  }, lastError), /*#__PURE__*/react.createElement(Typography/* default */.Z, null, "model size:", " ", modelSize === undefined ? "..." : (0,pretty/* prettySize */.or)(modelSize)), /*#__PURE__*/react.createElement(RegisterInput/* default */.Z, {
    register: autoInvokeEveryRegister,
    visible: true
  }), /*#__PURE__*/react.createElement(RegisterTrend/* default */.Z, {
    showName: true,
    register: outputsRegister,
    mini: true
  }));
}
function ModelActions(props) {
  var {
    service,
    model,
    sensorAggregatorService,
    sensorInput
  } = props;
  var {
    running,
    progress,
    alert,
    callAsync
  } = useCall();
  var modelDisabled = !service || !model || running;

  var handleDeployModel = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      return yield callAsync( /*#__PURE__*/function () {
        var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (setProgress) {
          if (sensorAggregatorService && sensorInput) {
            var aggregator = new sensoraggregatorclient/* default */.Z(sensorAggregatorService);
            yield aggregator.setInputs(sensorInput);
          }

          if (service && model) {
            var runner = new modelrunnerclient(service);
            yield runner.deployModel(model, setProgress);
          }
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    });

    return function handleDeployModel() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(react.Fragment, null, !running && /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    disabled: modelDisabled,
    variant: "contained",
    color: "primary",
    onClick: handleDeployModel
  }, sensorInput ? "Deploy model and configuration" : "Deploy model"), running && /*#__PURE__*/react.createElement(CircularProgressWithLabel/* default */.Z, {
    value: progress * 100
  }), alert);
}
function ModelUploader() {
  var {
    0: importing,
    1: setImporting
  } = (0,react.useState)(false);
  var {
    data: model,
    setBlob: setModel
  } = useDbUint8Array("model.tflite");
  var {
    value: sensorConfig,
    setBlob: setSensorConfig
  } = useDbJSON("sensor-input.json");
  var {
    modelStore
  } = (0,react.useContext)(ServiceManagerContext/* default */.ZP);

  var handleTfmodelFiles = /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.Z)(function* (files) {
      var file = files[0];

      if (file) {
        try {
          setImporting(true);
          yield setModel(file);
        } finally {
          setImporting(false);
        }
      }
    });

    return function handleTfmodelFiles(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleClearModel = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.Z)(function* () {
      try {
        setImporting(true);
        yield setModel(undefined);
      } finally {
        setImporting(false);
      }
    });

    return function handleClearModel() {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleSensorConfigFiles = /*#__PURE__*/function () {
    var _ref5 = (0,asyncToGenerator/* default */.Z)(function* (files) {
      var file = files[0];

      if (file) {
        try {
          setImporting(true);
          yield setSensorConfig(file);
        } finally {
          setImporting(false);
        }
      }
    });

    return function handleSensorConfigFiles(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleClearConfiguration = /*#__PURE__*/function () {
    var _ref6 = (0,asyncToGenerator/* default */.Z)(function* () {
      try {
        setImporting(true);
        yield setSensorConfig(undefined);
      } finally {
        setImporting(false);
      }
    });

    return function handleClearConfiguration() {
      return _ref6.apply(this, arguments);
    };
  }();

  var handleLoadModel = model => /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
    try {
      setImporting(true);
      console.log("loading model", model);
      var blob = yield modelStore.loadFile(model);
      console.log("loaded content", blob);

      if (blob) {
        setModel(blob);
      }
    } finally {
      setImporting(false);
    }
  });

  var handleLoadInputConfiguration = model => /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
    try {
      setImporting(true);
      console.log("loading model", model);
      var blob = yield modelStore.loadFile(model);
      console.log("loaded content", blob);

      if (blob) {
        setSensorConfig(blob);
      }
    } finally {
      setImporting(false);
    }
  });

  var models = (0,useChange/* default */.Z)(modelStore, _ => _ === null || _ === void 0 ? void 0 : _.models());
  var inputConfigurations = (0,useChange/* default */.Z)(modelStore, _ => _ === null || _ === void 0 ? void 0 : _.inputConfigurations());
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Model uploader"), /*#__PURE__*/react.createElement("p", null, "Upload Machine Learning Models (like TensorFlow Lite) into your", " ", /*#__PURE__*/react.createElement(Link, {
    to: "/services/model-runner/"
  }, "ML module runners"), "."), /*#__PURE__*/react.createElement("h3", null, "Load a machine learning model"), /*#__PURE__*/react.createElement("p", null, "Machine learning models are typically stored in a", " ", /*#__PURE__*/react.createElement("code", null, ".tflite"), " file."), model && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "success"
  }, "Model loaded (", (0,pretty/* prettySize */.or)(model.byteLength), ")"), model && /*#__PURE__*/react.createElement("p", null), /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ImportButton, {
    disabled: importing,
    text: "Import model",
    onFilesUploaded: handleTfmodelFiles
  })), /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    "aria-label": "clear model",
    disabled: importing,
    onClick: handleClearModel
  }, "clear model"), (models === null || models === void 0 ? void 0 : models.length) && /*#__PURE__*/react.createElement(List/* default */.Z, null, models.map(model => /*#__PURE__*/react.createElement(ListItem/* default */.Z, {
    key: model.path,
    button: true,
    onClick: handleLoadModel(model)
  }, /*#__PURE__*/react.createElement(ListItemText/* default */.Z, {
    primary: model.name,
    secondary: model.path + " " + (0,pretty/* prettySize */.or)(model.size)
  })))), /*#__PURE__*/react.createElement("h3", null, "Configure sensors"), /*#__PURE__*/react.createElement("p", null, "Sensor configuration files are stored in a ", /*#__PURE__*/react.createElement("code", null, ".jd.json"), " ", "file."), sensorConfig && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "success"
  }, "Sensor configuration loaded"), sensorConfig && /*#__PURE__*/react.createElement(SensorAggregatorConfigView, {
    config: sensorConfig
  }), sensorConfig && /*#__PURE__*/react.createElement("p", null), /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ImportButton, {
    disabled: importing,
    text: "Import configuration",
    onFilesUploaded: handleSensorConfigFiles
  })), /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    "aria-label": "clear configuration",
    disabled: importing,
    onClick: handleClearConfiguration
  }, "clear configuration"), (inputConfigurations === null || inputConfigurations === void 0 ? void 0 : inputConfigurations.length) && /*#__PURE__*/react.createElement(List/* default */.Z, null, inputConfigurations.map(iconfig => /*#__PURE__*/react.createElement(ListItem/* default */.Z, {
    key: iconfig.path,
    button: true,
    onClick: handleLoadInputConfiguration(iconfig)
  }, /*#__PURE__*/react.createElement(ListItemText/* default */.Z, {
    primary: iconfig.name,
    secondary: iconfig.path + " " + (0,pretty/* prettySize */.or)(iconfig.size)
  })))), /*#__PURE__*/react.createElement("h3", null, "Deploy model to machine learning services"), /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, {
    serviceClass: constants/* SRV_MODEL_RUNNER */.kVm
  }), /*#__PURE__*/react.createElement(ServiceList/* default */.Z, {
    serviceClass: constants/* SRV_MODEL_RUNNER */.kVm,
    content: service => /*#__PURE__*/react.createElement(ModelContent, {
      service: service
    }),
    actions: service => {
      var _service$device$servi;

      return /*#__PURE__*/react.createElement(ModelActions, {
        service: service,
        model: model,
        sensorAggregatorService: service === null || service === void 0 ? void 0 : (_service$device$servi = service.device.services({
          serviceClass: constants/* SRV_SENSOR_AGGREGATOR */.x12
        })) === null || _service$device$servi === void 0 ? void 0 : _service$device$servi[0],
        sensorInput: sensorConfig
      });
    }
  }));
}

/***/ })

}]);
//# sourceMappingURL=a77c613bd0faa103b953c0d40475a17f2d569635-e0834cc0c1e1cf80cefb.js.map