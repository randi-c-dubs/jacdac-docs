"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6366],{

/***/ 86426:
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
}), 'DeleteForever');

exports.Z = _default;

/***/ }),

/***/ 27848:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DeviceCard; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(47895);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
;// CONCATENATED MODULE: ./src/components/ServiceButton.tsx

var _excluded = ["service", "onClick"];


function ServiceButton(props) {
  var {
    service,
    onClick
  } = props,
      others = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  return /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, Object.assign({}, others, {
    variant: "contained",
    color: "primary",
    onClick: onClick
  }), service.name);
}
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__(31477);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/components/alert/DeviceLostAlert.tsx
var DeviceLostAlert = __webpack_require__(60145);
;// CONCATENATED MODULE: ./src/components/DeviceCard.tsx
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports










var useStyles = (0,makeStyles/* default */.Z)(() => (0,createStyles/* default */.Z)({
  root: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

function navigateToService(service) {
  var spec = service.specification;
  if (spec) (0,gatsby_browser_entry.navigate)("/services/" + spec.shortId + "/"); // todo spec
}

function DeviceDescription(props) {
  var {
    device
  } = props;
  var register = (0,useChange/* default */.Z)(device, _ => {
    var _$service;

    return _ === null || _ === void 0 ? void 0 : (_$service = _.service(0)) === null || _$service === void 0 ? void 0 : _$service.register(constants/* ControlReg.DeviceDescription */.toU.DeviceDescription);
  });
  var [description] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(register);
  return /*#__PURE__*/react.createElement("span", null, description || "");
}

function DeviceCard(props) {
  var {
    device,
    children,
    action,
    content,
    showDeviceId,
    showDescription,
    showTemperature,
    showFirmware,
    showServices
  } = props;
  var classes = useStyles();
  var services = (0,useChange/* default */.Z)(device, () => device.services().filter(service => service.serviceClass != constants/* SRV_CONTROL */.gm9 && service.serviceClass != constants/* SRV_LOGGER */.w9j));
  return /*#__PURE__*/react.createElement(Card/* default */.Z, {
    className: classes.root
  }, /*#__PURE__*/react.createElement(DeviceCardHeader/* default */.Z, {
    device: device,
    showDeviceId: showDeviceId,
    showTemperature: showTemperature,
    showFirmware: showFirmware,
    showMedia: true
  }), (showDescription || content) && /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, /*#__PURE__*/react.createElement(DeviceLostAlert/* DeviceLostAlert */.M, {
    device: device
  }), showDescription && /*#__PURE__*/react.createElement(DeviceDescription, {
    device: device
  }), content), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, action, showServices && (services === null || services === void 0 ? void 0 : services.map(service => /*#__PURE__*/react.createElement(ServiceButton, {
    key: service.id,
    service: service,
    onClick: () => navigateToService(service)
  })))), children);
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

/***/ 5179:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(33287);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(44942);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__(342);
// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__(3263);
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(94431);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(7746);
// EXTERNAL MODULE: ./src/components/firmware/FirmwareCard.tsx
var FirmwareCard = __webpack_require__(54272);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/jacdac/useEventRaised.ts
var useEventRaised = __webpack_require__(28417);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__(57683);
;// CONCATENATED MODULE: ./src/components/firmware/useFirmwareRepos.ts









function useFirmwareRepos(showAllRepos) {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    0: repos,
    1: setRepos
  } = (0,react.useState)([]);
  var devices = (0,useEventRaised/* default */.Z)(constants/* DEVICE_CHANGE */.RoP, bus, () => bus.devices({
    announced: true,
    ignoreSelf: true
  }));
  var bootloaders = devices.filter(device => device.hasService(constants/* SRV_BOOTLOADER */.PWm));
  var registers = devices.filter(device => !device.hasService(constants/* SRV_BOOTLOADER */.PWm)) // not a bootloader
  .map(device => {
    var _device$service;

    return (_device$service = device.service(0)) === null || _device$service === void 0 ? void 0 : _device$service.register(constants/* ControlReg.ProductIdentifier */.toU.ProductIdentifier);
  }).filter(reg => !!reg);
  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* (mounted) {
      var repos = [];
      if (showAllRepos) repos = (0,spec/* deviceSpecifications */.qx)().map(spec => spec.repo);else {
        var productIdentifiers = []; // ask firmware registers

        for (var register of registers) {
          yield register.refresh(true);
          var productIdentifier = register.intValue;
          if (productIdentifier !== undefined && productIdentifiers.indexOf(productIdentifier) < 0) productIdentifiers.push(productIdentifier);
        } // ask bootloaders


        for (var bootloader of bootloaders) {
          var boot = bootloader.services({
            serviceClass: constants/* SRV_BOOTLOADER */.PWm
          })[0];
          var bl_announce = packet/* default.onlyHeader */.Z.onlyHeader(constants/* BootloaderCmd.Info */.e96.Info);

          try {
            var resp = yield boot.sendCmdAwaitResponseAsync(bl_announce);
            var [,,, _productIdentifier] = resp.jdunpack("u32 u32 u32 u32");
            if (_productIdentifier !== undefined && productIdentifiers.indexOf(_productIdentifier) < 0) productIdentifiers.push(_productIdentifier);
          } catch (e) {
            console.warn("bootloader product identifier failed", e);
          }
        }

        repos = productIdentifiers.map(fw => {
          var _deviceSpecificationF;

          return (_deviceSpecificationF = (0,spec/* deviceSpecificationFromProductIdentifier */.Ht)(fw)) === null || _deviceSpecificationF === void 0 ? void 0 : _deviceSpecificationF.repo;
        }).filter(repo => !!repo);
      }

      if (mounted) {
        var urepos = (0,utils/* unique */.Tw)(repos);
        setRepos(urepos);
      }
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [devices.map(dev => dev.id).join(), registers.map(reg => reg.id).join(), showAllRepos]);
  return repos;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(95823);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(80791);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(4381);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(38030);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./src/components/firmware/useFirmwareBlobs.ts + 1 modules
var useFirmwareBlobs = __webpack_require__(29394);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
;// CONCATENATED MODULE: ./src/components/firmware/LocalFileFirmwareCard.tsx






var ImportButton = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 119).then(__webpack_require__.bind(__webpack_require__, 20119)));
var LOCAL_FILE_SLUG = "local file";
function LocalFileFirmwareCard() {
  var slug = LOCAL_FILE_SLUG;
  var {
    0: downloading,
    1: setDownloading
  } = (0,react.useState)(false);
  var {
    0: error,
    1: setError
  } = (0,react.useState)("");
  var {
    setFirmwareFile,
    firmwareBlobs
  } = (0,useFirmwareBlobs/* useFirmwareBlob */.x)(slug);
  var disabled = downloading;
  var version = firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs[0].version;

  var handleFiles = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* (files) {
      var file = files[0];

      if (file) {
        try {
          setDownloading(true);
          yield setFirmwareFile(undefined, file);
        } finally {
          setDownloading(false);
        }
      }
    });

    return function handleFiles(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClear = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* () {
      try {
        setError("");
        setDownloading(true);
        setFirmwareFile(undefined, undefined);
      } finally {
        setDownloading(false);
      }
    });

    return function handleClear() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(CardHeader/* default */.Z, {
    title: slug
  }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, error && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, error), version && /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body2"
  }, "version ", /*#__PURE__*/react.createElement("code", null, version)), !!(firmwareBlobs !== null && firmwareBlobs !== void 0 && firmwareBlobs.length) && /*#__PURE__*/react.createElement(List/* default */.Z, {
    dense: true
  }, firmwareBlobs.map(blob => /*#__PURE__*/react.createElement(ListItem/* default */.Z, {
    key: blob.productIdentifier
  }, /*#__PURE__*/react.createElement(ListItemText/* default */.Z, {
    primary: blob.name,
    secondary: "0x" + blob.productIdentifier.toString(16)
  }))))), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, !downloading && /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ImportButton, {
    text: "Import UF2 file",
    onFilesUploaded: handleFiles
  })), !downloading && (firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs.length) && /*#__PURE__*/react.createElement(Button/* default */.Z, {
    disabled: disabled,
    variant: "text",
    "arial-label": "Clear",
    onClick: handleClear
  }, "Clear")));
}
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
;// CONCATENATED MODULE: ./src/components/firmware/FirmwareCardGrid.tsx



 // tslint:disable-next-line: no-submodule-imports





function FirmwareCardGrid() {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)();
  var safeBoot = (0,useChange/* default */.Z)(bus, b => b.safeBoot);
  var firmwareRepos = useFirmwareRepos(safeBoot);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({}, gridBreakpoints, {
    item: true,
    key: "localfile"
  }), /*#__PURE__*/react.createElement(LocalFileFirmwareCard, null)), firmwareRepos.map(firmwareRepo => /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({}, gridBreakpoints, {
    item: true,
    key: "firmwarerepo" + firmwareRepo
  }), /*#__PURE__*/react.createElement(FirmwareCard/* default */.Z, {
    slug: firmwareRepo
  }))));
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flashing.ts
var jdom_flashing = __webpack_require__(91758);
// EXTERNAL MODULE: ./src/components/DeviceCard.tsx + 1 modules
var DeviceCard = __webpack_require__(27848);
// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__(53074);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Alert/Alert.js + 4 modules
var Alert_Alert = __webpack_require__(6809);
// EXTERNAL MODULE: ./src/components/ui/CircularProgressWithLabel.tsx
var CircularProgressWithLabel = __webpack_require__(29177);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./src/components/hooks/useMounted.ts
var useMounted = __webpack_require__(72179);
;// CONCATENATED MODULE: ./src/components/firmware/FlashDeviceButton.tsx










function FlashDeviceButton(props) {
  var {
    device,
    blob,
    ignoreFirmwareCheck
  } = props;
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    setError
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var {
    0: progress,
    1: setProgress
  } = (0,react.useState)(0);
  var firmwareInfo = (0,useChange/* default */.Z)(device, d => d === null || d === void 0 ? void 0 : d.firmwareInfo);
  var update = ignoreFirmwareCheck || (blob === null || blob === void 0 ? void 0 : blob.version) && (firmwareInfo === null || firmwareInfo === void 0 ? void 0 : firmwareInfo.version) && (0,jdom_flashing/* updateApplicable */.Kl)(firmwareInfo, blob);
  var flashing = (0,useChange/* default */.Z)(device, d => !!(d !== null && d !== void 0 && d.flashing));
  var missing = !device || !blob;
  var disabled = flashing;
  var mounted = (0,useMounted/* default */.Z)();

  var handleFlashing = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      if (device.flashing) return;

      try {
        setProgress(0);
        device.flashing = true; // don't refresh registers while flashing

        var updateCandidates = [firmwareInfo];
        yield (0,jdom_flashing/* flashFirmwareBlob */.oN)(bus, blob, updateCandidates, ignoreFirmwareCheck, prog => {
          if (mounted()) setProgress(prog);
        }); // trigger info

        device.firmwareInfo = undefined;
      } catch (e) {
        if (mounted()) setError(e);
      } finally {
        device.flashing = false;
      }
    });

    return function handleFlashing() {
      return _ref.apply(this, arguments);
    };
  }(); // tslint:disable-next-line: react-this-binding-issue


  return missing ? null : flashing ? /*#__PURE__*/react.createElement(CircularProgressWithLabel/* default */.Z, {
    value: progress
  }) : firmwareInfo || update ? /*#__PURE__*/react.createElement(react.Fragment, null, firmwareInfo && /*#__PURE__*/react.createElement(Alert_Alert/* default */.Z, {
    severity: "success"
  }, "Up to date!"), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    "aria-label": "flash firmware to device",
    disabled: disabled,
    variant: "contained",
    color: "primary",
    onClick: handleFlashing
  }, "Flash")) : /*#__PURE__*/react.createElement(Alert_Alert/* default */.Z, {
    severity: "info"
  }, "No firmware available");
}
;// CONCATENATED MODULE: ./src/components/UpdateDeviceList.tsx













function UpdateDeviceCard(props) {
  var {
    device
  } = props;
  var blobs = (0,useFirmwareBlobs/* default */.Z)();
  var firmwareInfo = (0,useChange/* default */.Z)(device, d => d.firmwareInfo);
  var blob = firmwareInfo && (blobs === null || blobs === void 0 ? void 0 : blobs.find(b => firmwareInfo.productIdentifier == b.productIdentifier));
  return /*#__PURE__*/react.createElement(DeviceCard/* default */.Z, {
    device: device,
    showFirmware: true // tslint:disable-next-line: react-this-binding-issue
    ,
    action: /*#__PURE__*/react.createElement(FlashDeviceButton, {
      device: device,
      blob: blob
    })
  });
}

function UpdateDeviceList() {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var scanning = (0,react.useRef)(false);
  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)();
  var safeBoot = (0,useChange/* default */.Z)(bus, b => b.safeBoot);
  var devices = (0,useDevices/* default */.Z)({
    announced: true,
    ignoreSelf: true,
    ignoreSimulators: true,
    productIdentifier: true
  }, [safeBoot]).filter(dev => safeBoot || !dev.hasService(constants/* SRV_BOOTLOADER */.PWm)).sort((l, r) => {
    var _l$firmwareInfo, _r$firmwareInfo;

    return (((_l$firmwareInfo = l.firmwareInfo) === null || _l$firmwareInfo === void 0 ? void 0 : _l$firmwareInfo.productIdentifier) || 0) - (((_r$firmwareInfo = r.firmwareInfo) === null || _r$firmwareInfo === void 0 ? void 0 : _r$firmwareInfo.productIdentifier) || 0);
  });
  var isFlashing = (0,useChange/* default */.Z)(bus, () => devices.some(dev => dev.flashing));
  var blobs = (0,useFirmwareBlobs/* default */.Z)();

  function scan() {
    return _scan.apply(this, arguments);
  } // load indexed db file once


  function _scan() {
    _scan = (0,asyncToGenerator/* default */.Z)(function* () {
      if (!(blobs !== null && blobs !== void 0 && blobs.length) || isFlashing || scanning.current) return;
      console.log("start scanning bus");

      try {
        scanning.current = true;
        yield (0,jdom_flashing/* scanFirmwares */.CQ)(bus);
      } finally {
        scanning.current = false;
      }
    });
    return _scan.apply(this, arguments);
  }

  (0,react.useEffect)(() => {
    scan();
  }, [isFlashing, blobs]);
  (0,react.useEffect)(() => bus.subscribe([constants/* DEVICE_CHANGE */.RoP, constants/* FIRMWARE_BLOBS_CHANGE */.Kvv], () => scan()), []);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, devices.map(device => /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({
    key: device.id,
    item: true
  }, gridBreakpoints), /*#__PURE__*/react.createElement(UpdateDeviceCard, {
    device: device
  }))));
}
// EXTERNAL MODULE: ./src/components/DbContext.tsx
var DbContext = __webpack_require__(94904);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/DeleteForever.js
var DeleteForever = __webpack_require__(86426);
// EXTERNAL MODULE: ./src/components/ui/SwitchWithLabel.tsx
var SwitchWithLabel = __webpack_require__(64973);
;// CONCATENATED MODULE: ./src/components/firmware/SafeBootAlert.tsx


 // tslint:disable-next-line: no-submodule-imports



 // tslint:disable-next-line: match-default-export-name tslint:disable-next-line: no-submodule-imports




function SafeBootAlert() {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    db
  } = (0,react.useContext)(DbContext/* default */.ZP);
  var {
    enqueueSnackbar
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var {
    0: safeBoot,
    1: setSafeBoot
  } = (0,react.useState)(bus.safeBoot);
  var firmwares = db === null || db === void 0 ? void 0 : db.firmwares;

  var handleRecovery = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      var v = !safeBoot;
      setSafeBoot(v);
    });

    return function handleRecovery() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClear = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* () {
      yield firmwares.clear();
      enqueueSnackbar("firmwares cleared", "info");
    });

    return function handleClear() {
      return _ref2.apply(this, arguments);
    };
  }(); // turn on and off safeboot mode


  (0,react.useEffect)(() => {
    bus.safeBoot = safeBoot;
    return () => {
      bus.safeBoot = false;
    };
  }, [safeBoot]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, /*#__PURE__*/react.createElement(SwitchWithLabel/* default */.Z, {
    value: safeBoot,
    onChange: handleRecovery,
    label: /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      component: "span",
      variant: "body1"
    }, "recovery mode")
  }), /*#__PURE__*/react.createElement(Box/* default */.Z, {
    mr: 1
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    component: "span",
    variant: "caption"
  }, "If your module is malfunctioning from the start, you can flash it in bootloader mode. Turn on recovery mode and unplug/replug any malfunctioning device to switch it to bootloader mode (glowing status LED). Once your module is flashed, turn off recovery mode and unplug/replug your module again."))), safeBoot && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "warning"
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    size: "small",
    variant: "outlined",
    disabled: !firmwares,
    onClick: handleClear,
    startIcon: /*#__PURE__*/react.createElement(DeleteForever/* default */.Z, null)
  }, "clear cache"), /*#__PURE__*/react.createElement(Box/* default */.Z, {
    mr: 1
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    component: "span",
    variant: "caption"
  }, "Delete all firmware cached in the browser. The firmware will have to be deleted again from this interface."))));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(65541);
// EXTERNAL MODULE: ./src/components/ui/SelectWithLabel.tsx
var SelectWithLabel = __webpack_require__(15789);
;// CONCATENATED MODULE: ./src/components/select/SelectDevice.tsx





function SelectDevice(props) {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    devices,
    deviceId,
    onChange
  } = props;

  var handleDeviceChange = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* (ev) {
      var id = ev.target.value;
      onChange(id);
      var device = bus.node(id);
      yield device === null || device === void 0 ? void 0 : device.identify();
    });

    return function handleDeviceChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z, {
    helperText: "choose a device",
    value: deviceId,
    onChange: handleDeviceChange,
    disabled: !(devices !== null && devices !== void 0 && devices.length)
  }, devices === null || devices === void 0 ? void 0 : devices.map(dev => /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    key: dev.id,
    value: dev.id
  }, dev.describe())));
}
;// CONCATENATED MODULE: ./src/components/firmware/ManualFirmwareAlert.tsx


 // tslint:disable-next-line: no-submodule-imports











var fwid = fw => fw ? fw.store + "," + fw.productIdentifier + "," + fw.version : "";

function ManualFirmware() {
  var _devices$;

  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var devices = (0,useDevices/* default */.Z)({
    announced: true,
    ignoreSelf: true,
    ignoreSimulators: true
  });
  var firmwares = (0,useFirmwareBlobs/* default */.Z)();
  var stores = (0,utils/* unique */.Tw)(firmwares.map(fw => fw.store));
  var {
    0: deviceId,
    1: setDeviceId
  } = (0,react.useState)(devices === null || devices === void 0 ? void 0 : (_devices$ = devices[0]) === null || _devices$ === void 0 ? void 0 : _devices$.id);
  var {
    0: firmwareId,
    1: setFirmwareId
  } = (0,react.useState)(fwid(firmwares === null || firmwares === void 0 ? void 0 : firmwares[0]));
  var {
    0: store,
    1: setStore
  } = (0,react.useState)((stores === null || stores === void 0 ? void 0 : stores[0]) || "");

  var handleDeviceChange = newId => setDeviceId(newId);

  var handleStoreChange = ev => {
    var store = ev.target.value;
    setStore(store);
  };

  var handleFirmwareChange = ev => {
    var id = ev.target.value;
    setFirmwareId(id);
  };

  var device = bus.node(deviceId);
  var blob = firmwares.find(fw => fwid(fw) === firmwareId);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(SelectDevice, {
    devices: devices,
    deviceId: deviceId,
    onChange: handleDeviceChange
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "row",
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z, {
    helperText: "choose a firmware",
    value: store,
    onChange: handleStoreChange
  }, stores === null || stores === void 0 ? void 0 : stores.map(store => /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    key: store,
    value: store
  }, store)))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z, {
    helperText: "choose a module",
    value: firmwareId,
    onChange: handleFirmwareChange
  }, firmwares === null || firmwares === void 0 ? void 0 : firmwares.filter(fw => fw.store === store).map(fw => /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    key: fwid(fw),
    value: fwid(fw)
  }, fw.name, " \xA0", /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "caption"
  }, fw.version, ", \xA0", "0x" + fw.productIdentifier.toString(16)))))))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(FlashDeviceButton, {
    device: device,
    blob: blob,
    ignoreFirmwareCheck: true
  })));
}

function ManualFirmwareAlert() {
  var {
    0: enabled,
    1: setEnabled
  } = (0,react.useState)(false);

  var handleToggle = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      var v = !enabled;
      setEnabled(v);
    });

    return function handleToggle() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, /*#__PURE__*/react.createElement(SwitchWithLabel/* default */.Z, {
    value: enabled,
    onChange: handleToggle,
    label: /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      component: "span",
      variant: "body1"
    }, "manual mode")
  }), /*#__PURE__*/react.createElement(Box/* default */.Z, {
    mr: 1
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    component: "span",
    variant: "caption"
  }, "Manually select which firmware to upload on your device."))), enabled && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "warning"
  }, /*#__PURE__*/react.createElement(ManualFirmware, null)));
}
;// CONCATENATED MODULE: ./src/components/tools/Flash.tsx




 // tslint:disable-next-line: no-submodule-imports




function Flash() {
  var {
    0: tab,
    1: setTab
  } = (0,react.useState)(0);

  var handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return /*#__PURE__*/react.createElement(Box/* default */.Z, {
    mb: 2
  }, /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, null), /*#__PURE__*/react.createElement(Tabs/* default */.Z, {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "View specification formats"
  }, /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "Updates"
  }), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "Firmwares"
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 0
  }, /*#__PURE__*/react.createElement(UpdateDeviceList, null)), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 1
  }, /*#__PURE__*/react.createElement(FirmwareCardGrid, null)), /*#__PURE__*/react.createElement(SafeBootAlert, null), /*#__PURE__*/react.createElement(ManualFirmwareAlert, null));
}
;// CONCATENATED MODULE: ./src/pages/tools/updater.tsx


function Page() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Firmware Updater"), /*#__PURE__*/react.createElement("p", null, "This page allows you to update your Jacdac module with new firmware. Find the latest UF2 firmware file from your manufacturer and import it with the button below."), /*#__PURE__*/react.createElement(Flash, null));
}

/***/ })

}]);