"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6456],{

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

/***/ 2864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LM": function() { return /* binding */ DTDL_CONTEXT; },
/* harmony export */   "d_": function() { return /* binding */ objectSchema; },
/* harmony export */   "yP": function() { return /* binding */ arraySchema; },
/* harmony export */   "Jg": function() { return /* binding */ escapeName; },
/* harmony export */   "n": function() { return /* binding */ escapeDisplayName; }
/* harmony export */ });
/* unused harmony exports DTDL_REFERENCE_URL, DTDL_NAME, DTDLUnits */
/***
 *  DTDL specification: https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md.
 */

/**
 * @internal
 */
var DTDL_REFERENCE_URL = "https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md";
/**
 * @internal
 */

var DTDL_NAME = "Digital Twins Definition Language";
/**
 * @internal
 */

var DTDL_CONTEXT = ["dtmi:dtdl:context;2"]; // warps fields into an object

function objectSchema(schemas) {
  return {
    "@type": "Object",
    fields: schemas
  };
} // wraps a schema into an array

function arraySchema(schema) {
  return {
    "@type": "Array",
    elementSchema: schema
  };
}
function escapeName(name) {
  name = name.trim().replace(/[^a-zA-Z0-9_]/g, "_");
  if (!/^[a-zA-Z]/.test(name)) name = "a" + name;
  name = name[0].toLowerCase() + name.slice(1);
  return name.slice(0, 64);
}
function escapeDisplayName(name) {
  return name.slice(0, 64);
}
function DTDLUnits() {
  return ["metrePerSecondSquared", "centimetrePerSecondSquared", "gForce", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "radianPerSecondSquared", "radianPerSecond", "degreePerSecond", "revolutionPerSecond", "revolutionPerMinute", "squareMetre", "squareCentimetre", "squareMillimetre", "squareKilometre", "hectare", "squareFoot", "squareInch", "acre", "farad", "millifarad", "microfarad", "nanofarad", "picofarad", "ampere", "microampere", "milliampere", "bitPerSecond", "kibibitPerSecond", "mebibitPerSecond", "gibibitPerSecond", "tebibitPerSecond", "exbibitPerSecond", "zebibitPerSecond", "yobibitPerSecond", "bytePerSecond", "kibibytePerSecond", "mebibytePerSecond", "gibibytePerSecond", "tebibytePerSecond", "exbibytePerSecond", "zebibytePerSecond", "yobibytePerSecond", "bit", "kibibit", "mebibit", "gibibit", "tebibit", "exbibit", "zebibit", "yobibit", "byte", "kibibyte", "mebibyte", "gibibyte", "tebibyte", "exbibyte", "zebibyte", "yobibyte", "kilogramPerCubicMetre", "gramPerCubicMetre", "metre", "centimetre", "millimetre", "micrometre", "nanometre", "kilometre", "foot", "inch", "mile", "nauticalMile", "astronomicalUnit", "coulomb", "joule", "kilojoule", "megajoule", "gigajoule", "electronvolt", "megaelectronvolt", "kilowattHour", "newton", "pound", "ounce", "ton", "hertz", "kilohertz", "megahertz", "gigahertz", "kilogramPerCubicMetre", "gramPerCubicMetre", "lux", "footcandle", "henry", "millihenry", "microhenry", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "radian", "degreeOfArc", "minuteOfArc", "secondOfArc", "turn", "metre", "centimetre", "millimetre", "micrometre", "nanometre", "kilometre", "foot", "inch", "mile", "nauticalMile", "astronomicalUnit", "candelaPerSquareMetre", "watt", "microwatt", "milliwatt", "kilowatt", "megawatt", "gigawatt", "horsepower", "kilowattHourPerYear", "lumen", "candela", "weber", "maxwell", "tesla", "kilogram", "gram", "milligram", "microgram", "tonne", "slug", "gramPerSecond", "kilogramPerSecond", "gramPerHour", "kilogramPerHour", "watt", "microwatt", "milliwatt", "kilowatt", "megawatt", "gigawatt", "horsepower", "kilowattHourPerYear", "pascal", "kilopascal", "bar", "millibar", "millimetresOfMercury", "poundPerSquareInch", "inchesOfMercury", "inchesOfWater", "unity percent", "ohm", "milliohm", "kiloohm", "megaohm", "decibel", "bel", "kelvin", "degreeCelsius", "degreeFahrenheit", "newton", "pound", "ounce", "ton", "second", "millisecond", "microsecond", "nanosecond", "minute", "hour", "day", "year", "newtonMetre", "metrePerSecond", "centimetrePerSecond", "kilometrePerSecond", "metrePerHour", "kilometrePerHour", "milePerHour", "milePerSecond", "knot", "volt", "millivolt", "microvolt", "kilovolt", "megavolt", "cubicMetre", "cubicCentimetre", "litre", "millilitre", "cubicFoot", "cubicInch", "fluidOunce", "gallon", "litrePerSecond", "millilitrePerSecond", "litrePerHour", "millilitrePerHour"].sort();
}

/***/ }),

/***/ 27498:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AddServiceIconButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45650);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65541);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80453);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88880);
/* harmony import */ var _ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79885);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19640);


 // tslint:disable-next-line: match-default-export-name no-submodule-imports

 // tslint:disable-next-line: match-default-export-name no-submodule-imports



function AddServiceIconButton(props) {
  var {
    error,
    onAdd,
    children,
    serviceFilter
  } = props;
  var [servicesAnchorEl, setServicesAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  var servicesMenuId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_3__/* .useId */ .Me)();
  var services = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecifications */ .Le)().filter(srv => !(0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isInfrastructure */ .lz)(srv)).filter(srv => !serviceFilter || serviceFilter(srv)), [serviceFilter]);

  var handleServiceAddClick = event => {
    setServicesAnchorEl(event.currentTarget);
  };

  var handleServiceAddClose = id => () => {
    setServicesAnchorEl(null);

    if (id !== undefined) {
      var srv = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(id);
      onAdd(srv);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    title: "Add a service",
    "aria-controls": servicesMenuId,
    "aria-haspopup": "true",
    onClick: handleServiceAddClick
  }, children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    id: servicesMenuId,
    anchorEl: servicesAnchorEl,
    keepMounted: true,
    open: Boolean(servicesAnchorEl),
    onClose: handleServiceAddClose(undefined)
  }, services.map(srv => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    key: srv.classIdentifier,
    value: srv.classIdentifier.toString(16),
    onClick: handleServiceAddClose(srv.classIdentifier)
  }, srv.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    variant: "caption",
    color: error ? "error" : "inherit",
    component: "div"
  }, error || "Select one or more services."));
}

/***/ }),

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



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(() => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
  root: {
    minWidth: "18rem"
  }
}));
function ServiceSpecificationSelect(props) {
  var {
    label,
    serviceClass,
    setServiceClass,
    variant,
    fullWidth,
    error
  } = props;
  var {
    0: labelId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('select-' + Math.random());
  var classes = useStyles();
  var specs = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecifications */ .Le)().filter(spec => !/^_/.test(spec.shortId));

  var handleChange = event => setServiceClass(parseInt(event.target.value));

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
  }, "No service selected"), specs.map(spec => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    key: spec.classIdentifier,
    value: spec.classIdentifier
  }, spec.name)));
}

/***/ }),

/***/ 79739:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PaperBox; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59355);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58063);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["children", "padding", "elevation", "bgcolor"];


function PaperBox(props) {
  var {
    children,
    padding,
    elevation,
    bgcolor
  } = props,
      others = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, _excluded);

  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, Object.assign({}, others, {
    bgcolor: bgcolor,
    mb: theme.spacing(0.25)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    square: true,
    elevation: elevation
  }, padding !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    p: theme.spacing(padding || 0.25)
  }, children), padding === 0 && children));
}

/***/ }),

/***/ 25900:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MakeCodeEditorExtensionPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createTheme.js + 14 modules
var createTheme = __webpack_require__(70079);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js + 1 modules
var responsiveFontSizes = __webpack_require__(23581);
// EXTERNAL MODULE: ./src/components/ui/ThemedLayout.tsx
var ThemedLayout = __webpack_require__(56251);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Delete.js
var Delete = __webpack_require__(94500);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/components/AddServiceIconButton.tsx
var AddServiceIconButton = __webpack_require__(27498);
// EXTERNAL MODULE: ./src/components/ServiceSpecificationSelect.tsx
var ServiceSpecificationSelect = __webpack_require__(14247);
// EXTERNAL MODULE: ./jacdac-ts/src/azure-iot/dtdl.ts
var dtdl = __webpack_require__(2864);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(53719);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(25342);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(85413);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/client.ts
var client = __webpack_require__(47235);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/iframeclient.ts
var iframeclient = __webpack_require__(9809);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__(57683);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeEditorExtensionClient.ts










var READ = "read";
var MESSAGE_PACKET = "messagepacket";
var HIDDEN = "hidden";
var SHOWN = "shown";
var SENDER = "jacdac-editor-extension";
var MakeCodeEditorExtensionClient = /*#__PURE__*/function (_JDClient) {
  (0,inheritsLoose/* default */.Z)(MakeCodeEditorExtensionClient, _JDClient);

  // full apptarget
  function MakeCodeEditorExtensionClient() {
    var _this;

    _this = _JDClient.call(this) || this;
    _this.pendingCommands = {};
    _this.extensionId = (0,iframeclient/* inIFrame */.H)() ? window.location.hash.substr(1) : undefined;
    _this._connected = false;
    _this._visible = false;
    _this.nextRequestId = 1;
    _this.handleMessage = _this.handleMessage.bind((0,assertThisInitialized/* default */.Z)(_this));

    if (typeof window !== "undefined") {
      window.addEventListener("message", _this.handleMessage, false);

      _this.mount(() => window.removeEventListener("message", _this.handleMessage));
    } // always refresh on load


    _this.on(SHOWN, () => _this.refresh()); // notify parent that we're ready


    _this.init();

    return _this;
  }

  var _proto = MakeCodeEditorExtensionClient.prototype;

  _proto.setVisible = function setVisible(vis) {
    if (this._visible !== vis) {
      this._visible = vis;
      this.emit(constants/* CHANGE */.Ver);
    }
  };

  _proto.mkRequest = function mkRequest(resolve, reject, action, body) {
    var id = "jd_" + this.nextRequestId++;
    this.pendingCommands[id] = {
      action,
      resolve,
      reject
    };
    return {
      type: "pxtpkgext",
      action,
      extId: this.extensionId,
      response: true,
      id,
      body
    };
  };

  _proto.sendRequest = function sendRequest(action, body) {
    this.log("send " + action);
    if (!this.extensionId) return Promise.resolve(undefined);
    return new Promise((resolve, reject) => {
      var msg = this.mkRequest(resolve, reject, action, body);
      window.parent.postMessage(msg, "*");
    });
  };

  _proto.handleMessage = function handleMessage(ev) {
    var msg = ev.data;
    if ((msg === null || msg === void 0 ? void 0 : msg.type) !== "pxtpkgext") return;

    if (!msg.id) {
      switch (msg.event) {
        case "extinit":
          this.log("init");
          this._target = msg.target;
          this._connected = true;
          this.emit(constants/* CONNECT */.JD8);
          this.emit(constants/* CHANGE */.Ver);
          break;

        case "extloaded":
          this.log("loaded");
          break;

        case "extshown":
          this.setVisible(true);
          this.emit(SHOWN);
          this.emit(constants/* CHANGE */.Ver);
          break;

        case "exthidden":
          this.setVisible(false);
          this.emit(HIDDEN);
          this.emit(constants/* CHANGE */.Ver);
          break;

        case "extdatastream":
          this.emit("datastream", true);
          break;

        case "extconsole":
          this.emit("console", msg.body);
          break;

        case "extmessagepacket":
          this.emit(MESSAGE_PACKET, msg.body);
          break;

        default:
          console.debug("Unhandled event", msg);
      }
    } else {
      var {
        action,
        resolve,
        reject
      } = this.pendingCommands[msg.id] || {};
      delete this.pendingCommands[msg.id];
      if (msg.success && resolve) resolve(msg.resp);else if (!msg.success && reject) reject(msg.resp); // raise event as well

      switch (action) {
        case "extinit":
          this._connected = true;
          this.emit(constants/* CONNECT */.JD8);
          this.emit(constants/* CHANGE */.Ver);
          break;

        case "extusercode":
          // Loaded, set the target
          this.emit("readuser", msg.resp);
          this.emit(constants/* CHANGE */.Ver);
          break;

        case "extreadcode":
          // Loaded, set the target
          this.emit(READ, msg.resp);
          this.emit(constants/* CHANGE */.Ver);
          break;

        case "extwritecode":
          this.emit("written", undefined);
          break;
      }
    }
  };

  _proto.init = /*#__PURE__*/function () {
    var _init = (0,asyncToGenerator/* default */.Z)(function* () {
      this.log("initializing");
      yield this.sendRequest("extinit");
      this.log("connected");
      yield this.refresh();
    });

    function init() {
      return _init.apply(this, arguments);
    }

    return init;
  }();

  _proto.refresh = /*#__PURE__*/function () {
    var _refresh = (0,asyncToGenerator/* default */.Z)(function* () {
      this.log("refresh");
      var r = yield this.read();
    });

    function refresh() {
      return _refresh.apply(this, arguments);
    }

    return refresh;
  }();

  _proto.read = /*#__PURE__*/function () {
    var _read = (0,asyncToGenerator/* default */.Z)(function* () {
      if (!this.extensionId) {
        var r = {};
        this.emit(READ, r);
        return r;
      } else {
        var _resp = yield this.sendRequest("extreadcode");

        return _resp;
      }
    });

    function read() {
      return _read.apply(this, arguments);
    }

    return read;
  }();

  _proto.readUser = /*#__PURE__*/function () {
    var _readUser = (0,asyncToGenerator/* default */.Z)(function* () {
      yield this.sendRequest("extusercode");
    });

    function readUser() {
      return _readUser.apply(this, arguments);
    }

    return readUser;
  }();

  _proto.write = /*#__PURE__*/function () {
    var _write = (0,asyncToGenerator/* default */.Z)(function* (code, json, jres, dependencies) {
      if (!this.extensionId) {
        // Write to local storage instead
        this.emit("written", undefined);
      } else {
        yield this.sendRequest("extwritecode", {
          code: code || undefined,
          json: json || undefined,
          jres: jres || undefined,
          dependencies
        });
      }
    });

    function write(_x, _x2, _x3, _x4) {
      return _write.apply(this, arguments);
    }

    return write;
  }();

  _proto.queryPermission = /*#__PURE__*/function () {
    var _queryPermission = (0,asyncToGenerator/* default */.Z)(function* () {
      yield this.sendRequest("extquerypermission");
    });

    function queryPermission() {
      return _queryPermission.apply(this, arguments);
    }

    return queryPermission;
  }();

  _proto.requestPermission = /*#__PURE__*/function () {
    var _requestPermission = (0,asyncToGenerator/* default */.Z)(function* (console) {
      yield this.sendRequest("extrequestpermission", {
        console
      });
    });

    function requestPermission(_x5) {
      return _requestPermission.apply(this, arguments);
    }

    return requestPermission;
  }();

  _proto.dataStreamConsole = /*#__PURE__*/function () {
    var _dataStreamConsole = (0,asyncToGenerator/* default */.Z)(function* (console) {
      yield this.sendRequest("extdatastream", {
        console
      });
    });

    function dataStreamConsole(_x6) {
      return _dataStreamConsole.apply(this, arguments);
    }

    return dataStreamConsole;
  }();

  _proto.dataStreamMessages = /*#__PURE__*/function () {
    var _dataStreamMessages = (0,asyncToGenerator/* default */.Z)(function* (messages) {
      yield this.sendRequest("extdatastream", {
        messages
      });
    });

    function dataStreamMessages(_x7) {
      return _dataStreamMessages.apply(this, arguments);
    }

    return dataStreamMessages;
  }();

  (0,createClass/* default */.Z)(MakeCodeEditorExtensionClient, [{
    key: "target",
    get: function get() {
      return this._target;
    }
  }, {
    key: "connected",
    get: function get() {
      return this._connected;
    }
  }, {
    key: "visible",
    get: function get() {
      return this._visible;
    }
  }]);

  return MakeCodeEditorExtensionClient;
}(client/* JDClient */.z);
function useMakeCodeEditorExtensionClient() {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    0: client,
    1: setClient
  } = (0,react.useState)(undefined);
  (0,react.useEffect)(() => {
    console.log("mkcd: new editor client");
    var c = new MakeCodeEditorExtensionClient();
    c.on(constants/* CONNECT */.JD8, () => {
      console.log("mkcd: stream messages");
      c.dataStreamMessages(true);
    });
    c.on([HIDDEN, SHOWN], () => bus.clear());
    c.on(MESSAGE_PACKET, msg => {
      if (msg.channel === "jacdac" && msg.source !== SENDER) {
        var pkts = packet/* default.fromFrame */.Z.fromFrame(msg.data, bus.timestamp);

        for (var pkt of pkts) {
          pkt.sender = msg.source || "makecode";
          bus.processPacket(pkt);
        }
      }
    });
    setClient(c);
    return () => c === null || c === void 0 ? void 0 : c.unmount();
  }, []);
  return client;
}
// EXTERNAL MODULE: ./src/components/CmdButton.tsx + 1 modules
var CmdButton = __webpack_require__(82613);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Save.js
var Save = __webpack_require__(8567);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./src/components/makecode/services.ts + 1 modules
var services = __webpack_require__(21389);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeEditorExtension.tsx




 // tslint:disable-next-line: no-submodule-imports match-default-export-name








 // tslint:disable-next-line: no-submodule-imports match-default-export-name






function toTypescript(config) {
  var ns = "myModules";
  return "// auto-generated, do not edit.\nnamespace " + ns + " {\n" + config.roles.map(role => "\n    //% fixedInstance block=\"" + role.name + "\"\n    export const " + (0,jdspec/* camelize */._A)(role.name) + " = new " + (0,services/* resolveMakecodeServiceFromClassIdentifier */.WB)(role.service).client.qName + "(\"" + (0,jdspec/* camelize */._A)(role.name) + "\");\n").join("") + "\n\n    // start after main\n    control.runInParallel(function() {\n        " + config.roles.map(role => "    " + ns + "." + (0,jdspec/* camelize */._A)(role.name) + ".start();\n        ").join("") + "\n    })\n}\n    ";
}

function toDependencies(config) {
  var r = {};
  config === null || config === void 0 ? void 0 : config.roles.forEach(role => {
    var mk = (0,services/* resolveMakecodeServiceFromClassIdentifier */.WB)(role.service);
    r[mk.client.name] = "github:" + mk.client.repo;
  });
  return r;
}

function toJSON(config) {
  return config && JSON.stringify(config, null, 4);
}

function ClientRoleRow(props) {
  var {
    component,
    onUpdate,
    config
  } = props;
  var {
    name,
    service
  } = component;
  var {
    nameError,
    serviceError
  } = (0,react.useMemo)(() => validateClientRole(config, component), [config, component]);
  var textId = (0,react_use_id_hook_esm/* useId */.Me)();

  var handleComponentNameChange = ev => {
    component.name = (0,dtdl/* escapeName */.Jg)(ev.target.value);
    onUpdate();
  };

  var handleSetService = serviceClass => {
    component.service = serviceClass;
    onUpdate();
  };

  var handleComponentDelete = () => {
    config.roles.splice(config.roles.indexOf(component), 1);
    onUpdate();
  };

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 4,
    md: 6
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: textId,
    fullWidth: true,
    error: !!nameError,
    variant: "outlined",
    label: "name",
    helperText: nameError,
    value: name,
    onChange: handleComponentNameChange
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 4,
    md: 4
  }, /*#__PURE__*/react.createElement(ServiceSpecificationSelect/* default */.Z, {
    variant: "outlined",
    label: "service",
    serviceClass: service,
    setServiceClass: handleSetService,
    error: serviceError
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "Remove service",
    onClick: handleComponentDelete
  }, /*#__PURE__*/react.createElement(Delete/* default */.Z, null)))));
} // eslint-disable-next-line @typescript-eslint/no-unused-vars


function validateClientRole(config, role) {
  var serviceError = undefined;
  var nameError = undefined; // TODO: properly validate client role

  return {
    serviceError,
    nameError
  };
}

function MakeCodeEditorExtension() {
  var _configuration$roles;

  var client = useMakeCodeEditorExtensionClient();
  var connected = (0,useChange/* default */.Z)(client, c => c === null || c === void 0 ? void 0 : c.connected);
  var {
    0: configuration,
    1: setConfiguration
  } = (0,react.useState)({
    roles: []
  });
  (0,react.useEffect)(() => client === null || client === void 0 ? void 0 : client.subscribe(READ, resp => {
    console.log("mkcd: read received");
    var cfg = (0,utils/* JSONTryParse */.ZZ)(resp.json);
    console.log({
      resp,
      cfg
    });
    if (cfg) setConfiguration(cfg);
  }), [client]);

  var hasMakeCodeService = srv => !!(0,services/* resolveMakecodeService */.K9)(srv);

  var update = () => {
    setConfiguration((0,utils/* clone */.d9)(configuration));
  };

  var handleAddService = service => {
    if (!configuration.roles) configuration.roles = [];
    var names = configuration.roles.map(c => c.name).concat((0,spec/* serviceSpecifications */.Le)().map(spec => spec.camelName)).filter(n => !!n);
    configuration.roles.push({
      name: (0,utils/* uniqueName */.yZ)(names, service.camelName || service.shortId),
      service: service.classIdentifier
    });
    update();
  };

  var handleSave = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      var ts = toTypescript(configuration);
      var json = toJSON(configuration);
      var deps = toDependencies(configuration);
      console.log("mkcd: saving...");
      yield client.write(ts, json, undefined, deps);
    });

    return function handleSave() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "row",
    spacing: 2
  }, (_configuration$roles = configuration.roles) === null || _configuration$roles === void 0 ? void 0 : _configuration$roles.map((c, i) => /*#__PURE__*/react.createElement(ClientRoleRow, {
    key: "config" + i,
    config: configuration,
    component: c,
    onUpdate: update
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(AddServiceIconButton/* default */.Z, {
    serviceFilter: hasMakeCodeService,
    onAdd: handleAddService
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    trackName: "makecode.save",
    variant: "contained",
    disabled: !connected,
    icon: /*#__PURE__*/react.createElement(Save/* default */.Z, null),
    onClick: handleSave
  }, "save")));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__(79739);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(91350);
;// CONCATENATED MODULE: ./src/pages/tools/makecode-editor-extension.tsx







var useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  content: {
    display: "flex",
    minHeight: "100vh",
    minWidth: "10rem",
    flexDirection: "column",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexGrow: 1
  }
}));
function MakeCodeEditorExtensionPage() {
  var {
    toggleDarkMode,
    darkModeMounted
  } = (0,react.useContext)(DarkModeContext/* default */.Z);
  var rawTheme = (0,createTheme/* default */.Z)({
    palette: {
      primary: {
        main: "#2e7d32"
      },
      secondary: {
        main: "#ffc400"
      },
      contrastThreshold: 5.1,
      type: "dark"
    }
  });
  var classes = useStyles();
  var theme = (0,responsiveFontSizes/* default */.Z)(rawTheme);
  (0,react.useEffect)(() => {
    if (darkModeMounted) toggleDarkMode("light");
  }, [darkModeMounted]);
  return /*#__PURE__*/react.createElement(ThemedLayout/* default */.Z, {
    theme: theme
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.content
  }, /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement(MakeCodeEditorExtension, null))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-makecode-editor-extension-tsx-63891f84301e05920103.js.map