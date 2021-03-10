(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "kLoJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DashboardDevice; });

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__("tr08");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__("lopY");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__("kKAo");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__("30+C");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__("50B7");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__("oa/T");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__("IzqI");

// EXTERNAL MODULE: ./src/components/DeviceName.tsx
var DeviceName = __webpack_require__("5eZE");

// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__("l6uw");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__("1iKp");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ExpandLess.js
var ExpandLess = __webpack_require__("mYdW");
var ExpandLess_default = /*#__PURE__*/__webpack_require__.n(ExpandLess);

// EXTERNAL MODULE: ./src/jacdac/useDeviceSpecification.ts
var useDeviceSpecification = __webpack_require__("LoFq");

// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 2 modules
var DeviceAvatar = __webpack_require__("puVa");

// EXTERNAL MODULE: ./src/components/dashboard/DashboardServiceWidget.tsx + 4 modules
var DashboardServiceWidget = __webpack_require__("rOp/");

// EXTERNAL MODULE: ./src/components/DeviceActions.tsx
var DeviceActions = __webpack_require__("8zWW");

// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 2 modules
var RegisterInput = __webpack_require__("271P");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceDetails.tsx






// filter out common registers
var ignoreRegisters = [constants["Te" /* SystemReg */].StatusCode, constants["Te" /* SystemReg */].StreamingPreferredInterval, constants["Te" /* SystemReg */].StreamingSamples, constants["Te" /* SystemReg */].StreamingInterval];
var collapsedRegisters = [constants["Te" /* SystemReg */].Reading, constants["Te" /* SystemReg */].Value, constants["Te" /* SystemReg */].Intensity];
function DashboardServiceDetails(props) {
  var service = props.service,
      expanded = props.expanded;
  var specification = Object(useChange["a" /* default */])(service, function (spec) {
    return spec.specification;
  });
  var registers = Object(react["useMemo"])(function () {
    var _packets$filter;

    var packets = specification === null || specification === void 0 ? void 0 : specification.packets;
    var ids = (packets === null || packets === void 0 ? void 0 : (_packets$filter = packets.filter(function (pkt) {
      return Object(spec["s" /* isRegister */])(pkt);
    })) === null || _packets$filter === void 0 ? void 0 : _packets$filter.map(function (pkt) {
      return pkt.identifier;
    })) || [];
    ids = ids.filter(function (id) {
      return ignoreRegisters.indexOf(id) < 0;
    });
    if (!expanded) // grab the first interresting register
      ids = ids.filter(function (id) {
        return collapsedRegisters.indexOf(id) > -1;
      }).slice(0, 1);
    return ids.map(function (id) {
      return service.register(id);
    }).filter(function (reg) {
      return !!reg;
    });
  }, [specification, expanded]);
  if (!(registers !== null && registers !== void 0 && registers.length)) // nothing to see here
    return null;
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, registers.map(function (register) {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      key: register.id,
      item: true,
      xs: true
    }, /*#__PURE__*/react_default.a.createElement(RegisterInput["a" /* default */], {
      register: register,
      showServiceName: true,
      showRegisterName: true,
      hideMissingValues: false,
      showTrend: false
    }));
  }));
}
// EXTERNAL MODULE: ./src/components/layout.tsx + 34 modules
var layout = __webpack_require__("9Dj+");

// EXTERNAL MODULE: ./src/components/useDeviceName.ts
var useDeviceName = __webpack_require__("aJrF");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardDevice.tsx





 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name









var ignoredServices = [constants["Ad" /* SRV_CTRL */], constants["Nd" /* SRV_LOGGER */]];
function DashboardDevice(props) {
  var device = props.device,
      expanded = props.expanded,
      toggleExpanded = props.toggleExpanded,
      variant = props.variant,
      showAvatar = props.showAvatar,
      showHeader = props.showHeader;
  var name = Object(useDeviceName["a" /* default */])(device);
  var services = Object(useChange["a" /* default */])(device, function () {
    return device.services().filter(function (service) {
      return ignoredServices.indexOf(service.serviceClass) < 0 && !!service.specification;
    });
  });
  var specification = Object(useDeviceSpecification["a" /* default */])(device);
  var theme = Object(useTheme["a" /* default */])();
  var mobile = Object(useMediaQuery["a" /* default */])(theme.breakpoints.down(layout["c" /* MOBILE_BREAKPOINT */]));

  var ServiceWidgets = function ServiceWidgets() {
    return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
      container: true,
      spacing: 2,
      justify: "center",
      alignItems: "flex-end",
      alignContent: "space-between"
    }, services === null || services === void 0 ? void 0 : services.map(function (service) {
      return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
        key: "widget" + service.serviceIndex,
        item: true
      }, /*#__PURE__*/react_default.a.createElement(DashboardServiceWidget["b" /* default */], {
        service: service,
        expanded: expanded,
        services: services,
        variant: variant
      }));
    }));
  };

  if (!showHeader) return /*#__PURE__*/react_default.a.createElement(Paper["a" /* default */], {
    style: {
      padding: "0.25em"
    },
    variant: "outlined"
  }, /*#__PURE__*/react_default.a.createElement(ServiceWidgets, null));
  return /*#__PURE__*/react_default.a.createElement(Card["a" /* default */], {
    "aria-live": "polite",
    "aria-label": "device " + name + " started"
  }, /*#__PURE__*/react_default.a.createElement(CardHeader["a" /* default */], {
    avatar: showAvatar && /*#__PURE__*/react_default.a.createElement(DeviceAvatar["a" /* default */], {
      device: device
    }),
    action: /*#__PURE__*/react_default.a.createElement(DeviceActions["a" /* default */], {
      device: device,
      showStopHost: expanded && !mobile,
      hideIdentity: true,
      showReset: expanded && !mobile
    }, toggleExpanded && /*#__PURE__*/react_default.a.createElement(IconButtonWithTooltip["a" /* default */], {
      onClick: toggleExpanded,
      title: expanded ? "Collapse" : "Expand"
    }, expanded ? /*#__PURE__*/react_default.a.createElement(ExpandLess_default.a, null) : /*#__PURE__*/react_default.a.createElement(ExpandMore_default.a, null))),
    title: /*#__PURE__*/react_default.a.createElement(DeviceName["a" /* default */], {
      showShortId: false,
      device: device
    }),
    subheader: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, !mobile && specification && /*#__PURE__*/react_default.a.createElement(Typography["a" /* default */], {
      variant: "caption",
      gutterBottom: true
    }, specification.name))
  }), /*#__PURE__*/react_default.a.createElement(CardContent["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(ServiceWidgets, null), expanded && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    direction: "column",
    spacing: 1,
    alignContent: "stretch"
  }, services === null || services === void 0 ? void 0 : services.map(function (service) {
    return /*#__PURE__*/react_default.a.createElement(DashboardServiceDetails, {
      key: "details" + service.serviceIndex,
      service: service,
      expanded: expanded
    });
  }))));
}

/***/ }),

/***/ "mYdW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), 'ExpandLess');

exports.default = _default;

/***/ }),

/***/ "rOp/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ DashboardServiceWidget; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ dashboardServiceWeight; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts
var spec = __webpack_require__("Z8Ma");

// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 2 modules
var RegisterInput = __webpack_require__("271P");

// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__("dYIP");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var NoSsr = __webpack_require__("Bf0q");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__("iae6");

// EXTERNAL MODULE: ./src/components/hooks/useServiceHost.ts
var useServiceHost = __webpack_require__("asyI");

// EXTERNAL MODULE: ./src/components/widgets/ButtonWidget.tsx
var ButtonWidget = __webpack_require__("R8ow");

// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__("aVfY");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardButton.tsx





function DashboardButton(props) {
  var service = props.service;

  var _useState = Object(react["useState"])(false),
      pressed = _useState[0],
      setPressed = _useState[1];

  var pressedRegister = service.register(constants["p" /* ButtonReg */].Pressed); // track register

  Object(react["useEffect"])(function () {
    return pressedRegister === null || pressedRegister === void 0 ? void 0 : pressedRegister.subscribe(constants["Tc" /* REPORT_UPDATE */], function () {
      var _ref = (pressedRegister === null || pressedRegister === void 0 ? void 0 : pressedRegister.unpackedValue) || [],
          b = _ref[0];

      if (b !== undefined) setPressed(b);
    });
  }, [pressedRegister]); // track event up/down events

  var downEvent = service.event(constants["o" /* ButtonEvent */].Down);
  Object(react["useEffect"])(function () {
    return downEvent.subscribe(constants["kb" /* EVENT */], function () {
      return setPressed(true);
    });
  }, [downEvent]);
  var upEvent = service.event(constants["o" /* ButtonEvent */].Up);
  Object(react["useEffect"])(function () {
    return upEvent.subscribe(constants["kb" /* EVENT */], function () {
      return setPressed(false);
    });
  }, [upEvent]);
  var host = Object(useServiceHost["a" /* default */])(service);
  var color = host ? "secondary" : "primary";
  var label = "button " + (pressed ? "down" : "up");

  var handleDown = function handleDown() {
    return host === null || host === void 0 ? void 0 : host.down();
  };

  var handleUp = function handleUp() {
    return host === null || host === void 0 ? void 0 : host.up();
  };

  var widgetSize = "clamp(5em, 25vw, 100%)";
  if (pressed === undefined) return /*#__PURE__*/react_default.a.createElement(LoadingProgress["a" /* default */], null);
  return /*#__PURE__*/react_default.a.createElement(ButtonWidget["a" /* default */], {
    checked: !!pressed,
    color: color,
    onDown: host && handleDown,
    onUp: host && handleUp,
    label: label,
    size: widgetSize
  });
}
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__("7/Hy");

// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__("Lml+");

// EXTERNAL MODULE: ./src/components/hooks/useThrottledValue.ts
var useThrottledValue = __webpack_require__("cJz4");

// EXTERNAL MODULE: ./jacdac-ts/src/hosts/hosts.ts + 22 modules
var hosts = __webpack_require__("y+c1");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./src/components/widgets/PowerButton.tsx
var PowerButton = __webpack_require__("TaZW");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardServo.tsx














function useActualAngle(service) {
  var _useRegisterUnpackedV = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(service.register(constants["Ce" /* ServoReg */].Angle)),
      angle = _useRegisterUnpackedV[0]; // sec/60deg


  var _useRegisterUnpackedV2 = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(service.register(constants["Ce" /* ServoReg */].ResponseSpeed)),
      responseSpeed = _useRegisterUnpackedV2[0];

  var rotationalSpeed = 60 / (responseSpeed || hosts["a" /* SG90_RESPONSE_SPEED */]);
  var actualAngle = Object(useThrottledValue["a" /* default */])(angle || 0, rotationalSpeed);
  return actualAngle;
}

function DashboardServo(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var enabledRegister = service.register(constants["Ce" /* ServoReg */].Enabled);

  var _useRegisterUnpackedV3 = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(enabledRegister),
      enabled = _useRegisterUnpackedV3[0];

  var off = !enabled;
  var angleRegister = service.register(constants["Ce" /* ServoReg */].Angle);
  var angle = useActualAngle(service);

  var _useRegisterUnpackedV4 = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(service.register(constants["Ce" /* ServoReg */].Offset)),
      offset = _useRegisterUnpackedV4[0];

  var host = Object(useServiceHost["a" /* default */])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(useWidgetTheme["a" /* default */])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active,
      textPrimary = _useWidgetTheme.textPrimary;

  var cx = 78;
  var cy = 55;
  var a = enabled ? angle + (offset || 0) : 0;
  var transform = "rotate(" + -a + ", " + cx + ", " + cy + ")";
  var h = 111.406;
  var w = 158.50195;
  var pr = 14;
  var pri = 6;
  var text = enabled ? Math.round(a) + "\xB0" : 'off';

  var toggleOff = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return enabledRegister.sendSetBoolAsync(!enabled);

            case 2:
              enabledRegister.refresh();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function toggleOff() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    alignContent: "center"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(SvgWidget["a" /* default */], {
    tabIndex: 0,
    title: "servo at angle " + angle,
    width: w,
    height: h
  }, /*#__PURE__*/react_default.a.createElement("path", {
    fill: background,
    d: "M158.502 10.687H0v89.75h158.502z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    fill: controlBackground,
    d: "M125.545 55.641c0-24.994-20.26-45.256-45.254-45.256-17.882.016-34.077 9.446-41.328 25.79-2.655.024-4.192.076-6.35.07-11.158 0-20.204 9.046-20.204 20.204 0 11.158 9.046 20.203 20.203 20.203 2.389-.005 4.354-.332 6.997-.256 7.56 15.59 23.356 24.485 40.682 24.5 24.992 0 45.254-20.264 45.254-45.256z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    fill: enabled ? active : background,
    stroke: active,
    transform: transform,
    d: "M93.782 55.623c-.032-3.809-.19-6.403-.352-7.023h-.002c-.93-3.558-6.621-6.73-14.793-6.73-8.17 0-14.649 3.016-14.795 6.73-.25 6.419-4.049 62.795 13.561 62.806 14.308.008 16.52-39.277 16.38-55.783zm-8.05.08a7.178 7.178 0 010 .012 7.178 7.178 0 01-7.179 7.176 7.178 7.178 0 01-7.177-7.176 7.178 7.178 0 017.177-7.178 7.178 7.178 0 017.178 7.166z"
  }), /*#__PURE__*/react_default.a.createElement("text", {
    x: w / 2,
    y: 30,
    textAnchor: "middle",
    fill: textPrimary
  }, text), /*#__PURE__*/react_default.a.createElement(PowerButton["a" /* default */], {
    r: pr,
    ri: pri,
    cx: w - pr - 4,
    cy: pr + 14,
    color: color,
    strokeWidth: 1.5,
    off: off,
    onClick: toggleOff
  }))), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react_default.a.createElement(RegisterInput["a" /* default */], {
    register: angleRegister
  })));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slider/Slider.js + 1 modules
var Slider = __webpack_require__("6Obz");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardRotaryEncoder.tsx










function DashboardRotaryEncoder(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var positionRegister = service.register(constants["jd" /* RotaryEncoderReg */].Position);

  var _useRegisterUnpackedV = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(positionRegister),
      _useRegisterUnpackedV2 = _useRegisterUnpackedV[0],
      position = _useRegisterUnpackedV2 === void 0 ? 0 : _useRegisterUnpackedV2;

  var clicksPerTurnRegister = service.register(constants["jd" /* RotaryEncoderReg */].ClicksPerTurn);

  var _useRegisterUnpackedV3 = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(clicksPerTurnRegister),
      _useRegisterUnpackedV4 = _useRegisterUnpackedV3[0],
      clicksPerTurn = _useRegisterUnpackedV4 === void 0 ? 12 : _useRegisterUnpackedV4;

  var host = Object(useServiceHost["a" /* default */])(service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(useWidgetTheme["a" /* default */])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active,
      textProps = _useWidgetTheme.textProps;

  var label = "" + position;
  var w = 37.794;
  var r = 0.06;
  var fs = Math.max(0.2, 0.5 - label.length * 0.1);

  var handleChange = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(ev, newValue) {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              host === null || host === void 0 ? void 0 : host.reading.setValues([newValue]);
              positionRegister.refresh();
              clicksPerTurnRegister.refresh();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChange(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var throttled = Object(useThrottledValue["a" /* default */])(position, clicksPerTurn);
  var angle = throttled / clicksPerTurn * 360;
  var min = Math.floor(position / clicksPerTurn - 1) * clicksPerTurn;
  var max = Math.ceil(position / clicksPerTurn + 1) * clicksPerTurn;
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(SvgWidget["a" /* default */], {
    title: "rotary encoder at position " + position,
    width: w,
    height: w,
    viewBox: "0 0 1 1"
  }, /*#__PURE__*/react_default.a.createElement("g", {
    transform: "rotate(" + angle + ", 0.5, 0.5)"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    fill: background,
    d: "M.67.029a.037.037 0 01-.072-.02A.5.5 0 00.538 0a.037.037 0 01-.075 0 .5.5 0 00-.061.008.038.038 0 01-.073.02.5.5 0 00-.056.025.037.037 0 01-.064.04A.5.5 0 00.16.13.037.037 0 01.11.186a.5.5 0 00-.035.05.037.037 0 01-.035.066.5.5 0 00-.02.058.037.037 0 01-.016.074A.5.5 0 000 .495.037.037 0 01.005.57a.5.5 0 00.013.06.038.038 0 01.025.07.5.5 0 00.028.056.037.037 0 01.043.06.5.5 0 00.042.046.037.037 0 01.058.047.5.5 0 00.053.032.037.037 0 01.069.03.5.5 0 00.059.016.037.037 0 01.074.01.5.5 0 00.062 0 .037.037 0 01.074-.01.5.5 0 00.06-.016.037.037 0 01.068-.03.5.5 0 00.053-.032.037.037 0 01.058-.047.5.5 0 00.042-.045.037.037 0 01.043-.061A.5.5 0 00.957.7.037.037 0 01.982.63.5.5 0 00.995.57.037.037 0 011 .495.5.5 0 00.996.434.038.038 0 01.98.36.5.5 0 00.96.302.037.037 0 01.925.236.5.5 0 00.89.186.037.037 0 01.839.13.5.5 0 00.79.092.037.037 0 01.727.053.5.5 0 00.671.03z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    fill: controlBackground,
    d: "M.1.499a.4.4 0 10.8 0 .4.4 0 10-.8 0z"
  }), /*#__PURE__*/react_default.a.createElement("circle", {
    cx: 0.5,
    cy: 0.19,
    r: r,
    fill: active
  })), /*#__PURE__*/react_default.a.createElement("text", Object.assign({
    x: 0.5,
    y: 0.5,
    fontSize: fs
  }, textProps), label))), host && /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(Slider["a" /* default */], {
    color: color,
    min: min,
    max: max,
    step: 1,
    value: position,
    valueLabelDisplay: "off",
    onChange: handleChange
  })));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js + 1 modules
var Switch = __webpack_require__("UhlP");

// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__("W1g9");

// CONCATENATED MODULE: ./src/components/dashboard/DashboardSwitch.tsx








function DashboardSwitch(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var labelId = Object(react_use_id_hook_esm["b" /* useId */])();
  var on = Object(useRegisterValue["a" /* useRegisterBoolValue */])(service.register(constants["Pe" /* SwitchReg */].Active));

  var _useRegisterUnpackedV = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(service.register(constants["Pe" /* SwitchReg */].Variant)),
      switchVariant = _useRegisterUnpackedV[0];

  var host = Object(useServiceHost["a" /* default */])(service);
  var color = host ? "secondary" : "primary";
  var widgetSize = "clamp(5em, 25vw, 100%)";

  var handleToggle = function handleToggle() {
    return host === null || host === void 0 ? void 0 : host.toggle();
  };

  if (on === undefined) return /*#__PURE__*/react_default.a.createElement(LoadingProgress["a" /* default */], null);

  switch (switchVariant) {
    case constants["Qe" /* SwitchVariant */].PushButton:
      return /*#__PURE__*/react_default.a.createElement(ButtonWidget["a" /* default */], {
        checked: on,
        color: color,
        label: on ? "on" : "off",
        onDown: host && handleToggle,
        size: widgetSize
      });

    default:
      return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(Switch["a" /* default */], {
        "aria-labelledby": labelId,
        color: color,
        checked: on,
        onChange: host && handleToggle
      }), /*#__PURE__*/react_default.a.createElement("label", {
        id: labelId
      }, on ? "on" : "off"));
  }
}
// CONCATENATED MODULE: ./src/components/dashboard/DashboardServiceWidget.tsx


var _serviceViews;








 // bundled




 // lazy devices

var DashboardAccelerometer = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 80).then(__webpack_require__.bind(null, "BuIi"));
});
var DashboardBuzzer = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 75).then(__webpack_require__.bind(null, "R+TK"));
});
var DashboardLEDPixel = /*#__PURE__*/Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(5), __webpack_require__.e(68)]).then(__webpack_require__.bind(null, "6t+h"));
});
var DashboardRoleManager = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 95).then(__webpack_require__.bind(null, "W5Co"));
});
var DashboardTrafficLight = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 78).then(__webpack_require__.bind(null, "3zc7"));
});
var DashboardCharacterScreen = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 83).then(__webpack_require__.bind(null, "n8kx"));
});
var DashboardRainGauge = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 91).then(__webpack_require__.bind(null, "Ps5K"));
});
var DashboardLEDMatrix = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 76).then(__webpack_require__.bind(null, "pp1O"));
});
var DashboardArcadeGamepad = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 82).then(__webpack_require__.bind(null, "35Ra"));
});
var DashboardWindDirection = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 102).then(__webpack_require__.bind(null, "ns0S"));
});
var DashboardMatrixKeypad = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 77).then(__webpack_require__.bind(null, "7Zf3"));
});
var DashboardReflectedLight = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 94).then(__webpack_require__.bind(null, "dJYX"));
});
var DashboardPower = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 90).then(__webpack_require__.bind(null, "jSS8"));
});
var DashboardSpeechSynthesis = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 73).then(__webpack_require__.bind(null, "QRI8"));
});
var DashboardSoilMoisture = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 97).then(__webpack_require__.bind(null, "0HhB"));
});
var DashboardRealTimeClock = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 93).then(__webpack_require__.bind(null, "eCSt"));
});
var DashboardLED = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 88).then(__webpack_require__.bind(null, "HqAP"));
});
var DashboardJoystick = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 87).then(__webpack_require__.bind(null, "VuK9"));
});
var DashboardSevenSegmentDisplay = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 96).then(__webpack_require__.bind(null, "hXyX"));
});
var DashboardMotion = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 89).then(__webpack_require__.bind(null, "ummP"));
});
var DashboardWaterLevel = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 101).then(__webpack_require__.bind(null, "zMc1"));
});
var DashboardColor = /*#__PURE__*/Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(5), __webpack_require__.e(84)]).then(__webpack_require__.bind(null, "a9ED"));
});
var DashboardSoundPlayer = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 74).then(__webpack_require__.bind(null, "Lz8i"));
});
var DashboardAnalogButton = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 81).then(__webpack_require__.bind(null, "SmDE"));
});
var DashboardSoundLevel = /*#__PURE__*/Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(7), __webpack_require__.e(99)]).then(__webpack_require__.bind(null, "iPqf"));
});
var DashboardSoundSpectrum = /*#__PURE__*/Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(7), __webpack_require__.e(100)]).then(__webpack_require__.bind(null, "wvcQ"));
});
var DashboardRandomNumberGenerator = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 92).then(__webpack_require__.bind(null, "2rwa"));
});
var DashboardCompass = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 85).then(__webpack_require__.bind(null, "w0oc"));
});
var DashboardGyroscope = /*#__PURE__*/Object(react["lazy"])(function () {
  return Promise.all(/* import() */[__webpack_require__.e(11), __webpack_require__.e(7), __webpack_require__.e(86)]).then(__webpack_require__.bind(null, "R6i2"));
});
var DashboardSolenoid = /*#__PURE__*/Object(react["lazy"])(function () {
  return __webpack_require__.e(/* import() */ 98).then(__webpack_require__.bind(null, "F4wc"));
});
var serviceViews = (_serviceViews = {}, _serviceViews[constants["be" /* SRV_ROLE_MANAGER */]] = {
  component: DashboardRoleManager
}, _serviceViews[constants["vd" /* SRV_BUZZER */]] = {
  component: DashboardBuzzer,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["Ld" /* SRV_LED_PIXEL */]] = {
  component: DashboardLEDPixel,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["od" /* SRV_ACCELEROMETER */]] = {
  component: DashboardAccelerometer,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["ce" /* SRV_ROTARY_ENCODER */]] = {
  component: DashboardRotaryEncoder,
  bundled: true
}, _serviceViews[constants["ud" /* SRV_BUTTON */]] = {
  component: DashboardButton,
  bundled: true
}, _serviceViews[constants["ee" /* SRV_SERVO */]] = {
  component: DashboardServo,
  bundled: true
}, _serviceViews[constants["ne" /* SRV_SWITCH */]] = {
  component: DashboardSwitch,
  bundled: true
}, _serviceViews[constants["qe" /* SRV_TRAFFIC_LIGHT */]] = {
  component: DashboardTrafficLight
}, _serviceViews[constants["wd" /* SRV_CHARACTER_SCREEN */]] = {
  component: DashboardCharacterScreen,
  weight: function weight() {
    return 3;
  }
}, _serviceViews[constants["Wd" /* SRV_RAIN_GAUGE */]] = {
  component: DashboardRainGauge
}, _serviceViews[constants["Kd" /* SRV_LED_MATRIX */]] = {
  component: DashboardLEDMatrix,
  weight: function weight() {
    return 3;
  }
}, _serviceViews[constants["qd" /* SRV_ARCADE_GAMEPAD */]] = {
  component: DashboardArcadeGamepad,
  weight: function weight() {
    return 3;
  }
}, _serviceViews[constants["we" /* SRV_WIND_DIRECTION */]] = {
  component: DashboardWindDirection
}, _serviceViews[constants["Od" /* SRV_MATRIX_KEYPAD */]] = {
  component: DashboardMatrixKeypad
}, _serviceViews[constants["Yd" /* SRV_REFLECTED_LIGHT */]] = {
  component: DashboardReflectedLight
}, _serviceViews[constants["Td" /* SRV_POWER */]] = {
  component: DashboardPower
}, _serviceViews[constants["me" /* SRV_SPEECH_SYNTHESIS */]] = {
  component: DashboardSpeechSynthesis
}, _serviceViews[constants["he" /* SRV_SOIL_MOISTURE */]] = {
  component: DashboardSoilMoisture
}, _serviceViews[constants["Xd" /* SRV_REAL_TIME_CLOCK */]] = {
  component: DashboardRealTimeClock
}, _serviceViews[constants["Jd" /* SRV_LED */]] = {
  component: DashboardLED
}, _serviceViews[constants["Id" /* SRV_JOYSTICK */]] = {
  component: DashboardJoystick
}, _serviceViews[constants["ge" /* SRV_SEVEN_SEGMENT_DISPLAY */]] = {
  component: DashboardSevenSegmentDisplay
}, _serviceViews[constants["Qd" /* SRV_MOTION */]] = {
  component: DashboardMotion
}, _serviceViews[constants["ue" /* SRV_WATER_LEVEL */]] = {
  component: DashboardWaterLevel
}, _serviceViews[constants["xd" /* SRV_COLOR */]] = {
  component: DashboardColor,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["ke" /* SRV_SOUND_PLAYER */]] = {
  component: DashboardSoundPlayer,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["pd" /* SRV_ANALOG_BUTTON */]] = {
  component: DashboardAnalogButton
}, _serviceViews[constants["je" /* SRV_SOUND_LEVEL */]] = {
  component: DashboardSoundLevel,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["ae" /* SRV_RNG */]] = {
  component: DashboardRandomNumberGenerator
}, _serviceViews[constants["yd" /* SRV_COMPASS */]] = {
  component: DashboardCompass
}, _serviceViews[constants["Ed" /* SRV_GYROSCOPE */]] = {
  component: DashboardGyroscope,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["le" /* SRV_SOUND_SPECTRUM */]] = {
  component: DashboardSoundSpectrum,
  weight: function weight() {
    return 2;
  }
}, _serviceViews[constants["ie" /* SRV_SOLENOID */]] = {
  component: DashboardSolenoid
}, _serviceViews);
var collapsedRegisters = [constants["Te" /* SystemReg */].Reading, constants["Te" /* SystemReg */].Value, constants["Te" /* SystemReg */].Intensity];

function ValueWidget(props) {
  var valueRegister = props.valueRegister,
      intensityRegister = props.intensityRegister;

  var _useRegisterUnpackedV = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(intensityRegister),
      intensity = _useRegisterUnpackedV[0];

  var hasIntensity = intensity !== undefined;
  var off = hasIntensity ? !intensity : undefined;

  var toggleOff = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return intensityRegister.sendSetBoolAsync(off, true);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function toggleOff() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react_default.a.createElement(RegisterInput["a" /* default */], {
    register: valueRegister,
    variant: "widget",
    showServiceName: false,
    showRegisterName: false,
    hideMissingValues: true,
    off: off,
    toggleOff: hasIntensity ? toggleOff : undefined
  });
}

function IntensityWidget(props) {
  var intensityRegister = props.intensityRegister;

  var _useRegisterUnpackedV2 = Object(useRegisterValue["e" /* useRegisterUnpackedValue */])(intensityRegister),
      intensity = _useRegisterUnpackedV2[0];

  var off = intensity !== undefined && !intensity;
  return /*#__PURE__*/react_default.a.createElement(RegisterInput["a" /* default */], {
    register: intensityRegister,
    variant: "widget",
    showServiceName: false,
    showRegisterName: false,
    hideMissingValues: true,
    off: off
  });
}

function DefaultWidget(props) {
  var service = props.service;
  var specification = service.specification;
  var register = Object(react["useMemo"])(function () {
    var rspec = specification === null || specification === void 0 ? void 0 : specification.packets.find(function (pkt) {
      return Object(spec["s" /* isRegister */])(pkt) && collapsedRegisters.indexOf(pkt.identifier) > -1;
    });
    return service.register(rspec === null || rspec === void 0 ? void 0 : rspec.identifier);
  }, [service]);
  if (!register) // nothing to see here
    return null; // if register is value, disable if enabled is 0.

  if (register.specification.identifier == constants["Te" /* SystemReg */].Value) {
    var intensityRegister = register.service.register(constants["Te" /* SystemReg */].Intensity);
    return /*#__PURE__*/react_default.a.createElement(ValueWidget, {
      valueRegister: register,
      intensityRegister: intensityRegister
    });
  } // case of no streaming,value just intensity, like a relay


  if (register.specification.identifier === constants["Te" /* SystemReg */].Intensity) return /*#__PURE__*/react_default.a.createElement(IntensityWidget, {
    intensityRegister: register
  });
  return /*#__PURE__*/react_default.a.createElement(RegisterInput["a" /* default */], {
    register: register,
    variant: "widget",
    showServiceName: false,
    showRegisterName: false,
    hideMissingValues: true
  });
}

function DashboardServiceWidget(props) {
  var service = props.service;
  var specification = service.specification;

  var _ref2 = serviceViews[specification.classIdentifier] || {},
      component = _ref2.component,
      bundled = _ref2.bundled;

  var host = Object(useServiceHost["a" /* default */])(service);
  var color = host ? "secondary" : "primary"; // no special support

  if (!component) return /*#__PURE__*/Object(react["createElement"])(DefaultWidget, props); // precompiled

  if (bundled) return /*#__PURE__*/Object(react["createElement"])(component, props); // lazy loading

  return /*#__PURE__*/react_default.a.createElement(NoSsr["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(react["Suspense"], {
    fallback: /*#__PURE__*/react_default.a.createElement(CircularProgress["a" /* default */], {
      color: color,
      disableShrink: true,
      variant: "indeterminate",
      size: "3em"
    })
  }, /*#__PURE__*/Object(react["createElement"])(component, props)));
}
function dashboardServiceWeight(service) {
  var _view$weight;

  var view = serviceViews[service.serviceClass];
  return view === null || view === void 0 ? void 0 : (_view$weight = view.weight) === null || _view$weight === void 0 ? void 0 : _view$weight.call(view, service);
}

/***/ })

}]);
//# sourceMappingURL=7ba4bbf4aefea763e49128eb41f842ebacf43e24-c8870d915fbca3831339.js.map