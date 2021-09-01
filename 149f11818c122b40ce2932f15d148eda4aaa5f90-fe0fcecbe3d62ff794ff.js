"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5577,7746],{

/***/ 89135:
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

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l-5.5 9h11z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17.5",
  cy: "17.5",
  r: "4.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 13.5h8v8H3z"
})), 'Category');

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

/***/ 92681:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ IDChip; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52995);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4998);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23729);
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43226);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84377);
/* harmony import */ var _ui_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60102);
 // tslint:disable-next-line: no-submodule-imports match-default-export-name






function IDChip(props) {
  var {
    id,
    className,
    filter
  } = props;
  var {
    filter: packetFilter,
    setFilter: setPacketFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_PacketsContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z);
  var {
    setDrawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP);
  var ids = typeof id === "string" ? id : "0x" + (id !== undefined ? id.toString(16) : "???");
  var filtered = packetFilter && packetFilter.indexOf(filter) > -1;

  var handleFilterClick = () => {
    var _packetFilter$replace;

    if (filtered) setPacketFilter(packetFilter === null || packetFilter === void 0 ? void 0 : (_packetFilter$replace = packetFilter.replace(filter, '')) === null || _packetFilter$replace === void 0 ? void 0 : _packetFilter$replace.trim());else setPacketFilter((packetFilter === null || packetFilter === void 0 ? void 0 : packetFilter.trim()) + ' ' + filter);
    setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .DrawerType.Packets */ .jw.Packets);
  };

  var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null);
  var title = filtered ? "remove filter " + filter : "add filter " + filter;
  if (filter) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Tooltip__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: filtered ? "remove filter " + filter : "add filter " + filter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    className: className,
    size: "small",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
      "aria-label": title,
      onClick: handleFilterClick
    }, icon),
    label: ids
  })));else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    "aria-label": title,
    className: className,
    size: "small",
    icon: icon,
    title: "identifier " + ids,
    label: ids
  });
}

/***/ }),

/***/ 37958:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ KindChip; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4998);
/* harmony import */ var _KindIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50048);
/* harmony import */ var _PacketsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43226);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84377);
/* harmony import */ var _ui_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60102);






function KindChip(props) {
  var {
    kind,
    className
  } = props;
  var {
    filter,
    setFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_PacketsContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);
  var {
    setDrawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP);
  var icon = (0,_KindIcon__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP)({
    kind
  });
  var chipFilter = "kind:" + kind;
  var filtered = filter && filter.indexOf(chipFilter) > -1;

  var handleClick = () => {
    var _filter$replace;

    if (filtered) setFilter(filter === null || filter === void 0 ? void 0 : (_filter$replace = filter.replace(chipFilter, '')) === null || _filter$replace === void 0 ? void 0 : _filter$replace.trim());else setFilter((filter === null || filter === void 0 ? void 0 : filter.trim()) + ' ' + chipFilter);
    setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_3__/* .DrawerType.Packets */ .jw.Packets);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Tooltip__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: filtered ? "remove filter " + chipFilter : "add filter " + chipFilter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    onClick: handleClick,
    className: className,
    size: "small",
    label: (0,_KindIcon__WEBPACK_IMPORTED_MODULE_1__/* .kindName */ .QD)(kind),
    icon: icon
  })));
}

/***/ }),

/***/ 40602:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ PacketSpecification; }
});

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var jdom_spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./src/components/DeviceCard.tsx + 1 modules
var DeviceCard = __webpack_require__(27848);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./src/components/RegisterInput.tsx + 2 modules
var RegisterInput = __webpack_require__(24162);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
;// CONCATENATED MODULE: ./src/components/ui/AutoGrid.tsx


function AutoGrid(props) {
  var {
    children,
    spacing
  } = props;
  if (children && Array.isArray(children)) return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: spacing
  }, children.map((child, i) => /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12,
    key: child.key || i
  }, child)));else return children;
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
;// CONCATENATED MODULE: ./src/components/ServiceRegisters.tsx






function ServiceRegisters(props) {
  var {
    service,
    registerIdentifiers,
    filter,
    showRegisterName,
    hideMissingValues,
    showTrends
  } = props;
  var specification = (0,useChange/* default */.Z)(service, spec => spec.specification);
  var registers = (0,react.useMemo)(() => {
    var _packets$filter, _ids$map;

    var packets = specification === null || specification === void 0 ? void 0 : specification.packets;
    var ids = registerIdentifiers || (packets === null || packets === void 0 ? void 0 : (_packets$filter = packets.filter(pkt => (0,jdom_spec/* isRegister */.x5)(pkt))) === null || _packets$filter === void 0 ? void 0 : _packets$filter.map(pkt => pkt.identifier));
    var r = (ids === null || ids === void 0 ? void 0 : (_ids$map = ids.map(id => service.register(id))) === null || _ids$map === void 0 ? void 0 : _ids$map.filter(reg => !!reg)) || [];
    if (filter) r = r.filter(filter);
    return r;
  }, [specification, registerIdentifiers, filter]);
  return /*#__PURE__*/react.createElement(AutoGrid, {
    spacing: 1
  }, registers.map(register => /*#__PURE__*/react.createElement(RegisterInput/* default */.Z, {
    key: register.id,
    register: register,
    showRegisterName: showRegisterName,
    hideMissingValues: hideMissingValues,
    showTrend: showTrends && register.code === constants/* SystemReg.Reading */.ZJq.Reading,
    visible: true
  })));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Badge/Badge.js
var Badge = __webpack_require__(28142);
// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__(50048);
// EXTERNAL MODULE: ./src/jacdac/useEventCount.ts
var useEventCount = __webpack_require__(95926);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(26390);
;// CONCATENATED MODULE: ./src/components/EventInput.tsx





function EventInput(props) {
  var {
    event,
    showName,
    showDeviceName
  } = props;
  var count = (0,useEventCount/* default */.Z)(event);
  var spec = event.specification;
  return /*#__PURE__*/react.createElement(react.Fragment, null, showDeviceName && /*#__PURE__*/react.createElement(Typography/* default */.Z, null, /*#__PURE__*/react.createElement(DeviceName/* default */.Z, {
    device: event.service.device
  }), "/"), showName && spec && /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    gutterBottom: true
  }, spec.name), /*#__PURE__*/react.createElement(Badge/* default */.Z, {
    badgeContent: count,
    color: "primary"
  }, /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
    kind: "event"
  })));
}
;// CONCATENATED MODULE: ./src/components/ServiceEvents.tsx




function ServiceEvents(props) {
  var {
    service,
    eventIdentifiers,
    showEventName
  } = props;
  var spec = service.specification;
  var packets = spec.packets;
  var events = packets.filter(jdom_spec/* isEvent */.cO);
  if (eventIdentifiers !== undefined) events = events.filter(event => eventIdentifiers.indexOf(event.identifier) > -1);
  return /*#__PURE__*/react.createElement(AutoGrid, {
    spacing: 1
  }, events.map(event => /*#__PURE__*/react.createElement(EventInput, {
    key: "event" + event.identifier,
    event: service.event(event.identifier),
    showName: showEventName
  })));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(80791);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(4381);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./src/components/DeviceCardHeader.tsx + 2 modules
var DeviceCardHeader = __webpack_require__(31477);
// EXTERNAL MODULE: ./src/components/alert/DeviceLostAlert.tsx
var DeviceLostAlert = __webpack_require__(60145);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pipes.ts
var pipes = __webpack_require__(93642);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/buffer.ts
var buffer = __webpack_require__(3482);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__(57683);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
;// CONCATENATED MODULE: ./jacdac-ts/src/jdom/command.ts





/**
 * @internal
 */

function packArguments(info, args) {
  var repeatIdx = -1;
  var numReps = 0;
  var argIdx = 0;
  var dst = 0;
  var buf = new Uint8Array(256);

  for (var i = 0; i < info.fields.length; ++argIdx, ++i) {
    if (argIdx >= args.length && numReps > 0) break;
    var arg0 = argIdx < args.length ? args[argIdx] : 0;
    var fld = info.fields[i];
    if (repeatIdx == -1 && fld.startRepeats) repeatIdx = i;
    var arg1 = fld.type == "string0" && typeof arg0 == "string" ? arg0 + "\u0000" : arg0;
    var arg = typeof arg1 == "boolean" ? arg1 ? 1 : 0 : typeof arg1 == "string" ? (0,utils/* stringToUint8Array */.sy)((0,utils/* toUTF8 */.IE)(arg1)) : arg1;

    if (typeof arg == "number") {
      var intVal = (0,jdom_spec/* scaleFloatToInt */.we)(arg, fld);
      if (fld.storage == 0) throw new Error("expecting " + fld.type + " got number");
      var fmt = (0,jdom_spec/* numberFormatFromStorageType */.m9)(fld.storage);
      (0,buffer/* setNumber */.Gy)(buf, fmt, dst, (0,jdom_spec/* clampToStorage */.jr)(intVal, fld.storage));
      dst += (0,buffer/* sizeOfNumberFormat */.hb)(fmt);
    } else {
      var size = Math.abs(fld.storage);

      if (typeof arg1 == "string") {
        if (size == 0) size = arg.length;
        var argCut = arg.slice(0, size);
        buf.set(argCut, dst);
        dst += size;
      } else if (size == 0 || size == arg.length) {
        buf.set(arg, dst);
        dst += arg.length;
      } else {
        throw new Error("expecting " + Math.abs(fld.storage) + " bytes; got " + arg.length);
      }
    }

    if (dst >= constants/* JD_SERIAL_MAX_PAYLOAD_SIZE */.MdP) throw new Error("jacdac packet length too large, " + dst + " > " + constants/* JD_SERIAL_MAX_PAYLOAD_SIZE */.MdP + " bytes");

    if (repeatIdx != -1 && i + 1 >= info.fields.length) {
      i = repeatIdx - 1;
      numReps++;
    }
  }

  var cmd = (0,jdom_spec/* isRegister */.x5)(info) ? info.identifier | constants/* CMD_SET_REG */.YUL : info.identifier;
  var pkt = packet/* default.from */.Z.from(cmd, buf.slice(0, dst));
  if (info.kind != "report") pkt.isCommand = true;
  return pkt;
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pretty.ts
var pretty = __webpack_require__(10913);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/components/CmdButton.tsx + 1 modules
var CmdButton = __webpack_require__(82613);
;// CONCATENATED MODULE: ./src/components/CommandInput.tsx












function hasPipeReport(info) {
  return info.fields.find(f => f.type == "pipe");
}

function CommandInput(props) {
  var {
    service,
    command,
    showDeviceName,
    args,
    setReports
  } = props;
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    specification
  } = service;
  var requiredArgLength = command.fields.length - (hasPipeReport(command) ? 1 : 0);
  var missingArguments = ((args === null || args === void 0 ? void 0 : args.length) || 0) !== requiredArgLength;
  var disabled = missingArguments;
  var reportSpec = command.hasReport && specification.packets.find(p => (0,jdom_spec/* isReportOf */.Dm)(command, p));

  var handleClick = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      var pkt = !(args !== null && args !== void 0 && args.length) ? packet/* default.onlyHeader */.Z.onlyHeader(command.identifier) : packArguments(command, args);

      if (setReports && reportSpec) {
        var reportPacket = yield service.sendCmdAwaitResponseAsync(pkt);
        var decoded = reportPacket === null || reportPacket === void 0 ? void 0 : reportPacket.decoded;
        setReports([decoded]);
      } else if (setReports && hasPipeReport(command)) {
        var inp;

        try {
          inp = new pipes/* InPipeReader */.oI(bus);
          var cmd = inp.openCommand(command.identifier);
          yield service.sendPacketAsync(cmd, true);
          console.log((0,pretty/* printPacket */.$_)(cmd)); // keep this call, it sets up pretty to understand packages

          var {
            output
          } = yield inp.readAll();

          var _reports = output.filter(ot => {
            var _ot$data;

            return !!((_ot$data = ot.data) !== null && _ot$data !== void 0 && _ot$data.length);
          }).map(ot => ot === null || ot === void 0 ? void 0 : ot.decoded);

          setReports(_reports);
        } finally {
          var _inp;

          (_inp = inp) === null || _inp === void 0 ? void 0 : _inp.unmount();
        }
      } else yield service.sendPacketAsync(pkt, true);
    });

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    trackName: "command.input",
    trackProperties: {
      service: (0,pretty/* serviceName */.HV)(service.serviceClass),
      serviceClass: service.serviceClass
    },
    variant: "contained",
    disabled: disabled,
    onClick: handleClick
  }, showDeviceName && /*#__PURE__*/react.createElement(Typography/* default */.Z, null, /*#__PURE__*/react.createElement(DeviceName/* default */.Z, {
    device: service.device
  }), "/"), command.name.replace(/_/g, " "));
}
// EXTERNAL MODULE: ./src/components/fields/MembersInput.tsx + 3 modules
var MembersInput = __webpack_require__(29085);
;// CONCATENATED MODULE: ./src/components/DecodedPacketItem.tsx


function DecodedPacketItem(props) {
  var {
    pkt
  } = props;
  var {
    decoded,
    service
  } = pkt;
  var specifications = (0,react.useMemo)(() => decoded.map(d => d.info), [decoded]);
  var values = (0,react.useMemo)(() => decoded.map(d => d.value), [decoded]);
  return /*#__PURE__*/react.createElement(MembersInput/* default */.Z, {
    serviceSpecification: service,
    specifications: specifications,
    values: values
  });
}
// EXTERNAL MODULE: ./src/components/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__(49102);
;// CONCATENATED MODULE: ./src/components/ServiceCard.tsx

// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports













var useStyles = (0,makeStyles/* default */.Z)({
  root: {
    minWidth: 275
  },
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
});
function ServiceCard(props) {
  var {
    service,
    linkToService,
    registerIdentifiers,
    showServiceName,
    showMemberName,
    eventIdentifiers,
    commandIdentifier
  } = props;
  var {
    specification
  } = service;
  var {
    0: reports,
    1: setReports
  } = (0,react.useState)(undefined); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var {
    0: commandArgs,
    1: setCommandArgs
  } = (0,react.useState)([]);
  var classes = useStyles();
  var hasCommandIdentifier = commandIdentifier !== undefined;
  var hasRegisterIdentifiers = !!(registerIdentifiers !== null && registerIdentifiers !== void 0 && registerIdentifiers.length);
  var hasEventIdentifiers = !!(eventIdentifiers !== null && eventIdentifiers !== void 0 && eventIdentifiers.length);
  var command = commandIdentifier !== undefined && (specification === null || specification === void 0 ? void 0 : specification.packets.find(pkt => (0,jdom_spec/* isCommand */.ao)(pkt) && pkt.identifier === commandIdentifier));
  return /*#__PURE__*/react.createElement(Card/* default */.Z, {
    className: classes.root
  }, /*#__PURE__*/react.createElement(DeviceCardHeader/* default */.Z, {
    device: service.device,
    showAvatar: true
  }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, showServiceName && /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: linkToService && service.specification ? "/services/" + service.specification.shortId + "/" : "/clients/javascript/jdom/service"
  }, service.name)), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body2",
    component: "div"
  }, hasRegisterIdentifiers && /*#__PURE__*/react.createElement(ServiceRegisters, {
    key: "reg" + service.id,
    service: service,
    showRegisterName: showMemberName,
    registerIdentifiers: registerIdentifiers
  }), hasEventIdentifiers && /*#__PURE__*/react.createElement(ServiceEvents, {
    key: "ev" + service.id,
    service: service,
    showEventName: showMemberName,
    eventIdentifiers: eventIdentifiers
  }), command && /*#__PURE__*/react.createElement(MembersInput/* default */.Z, {
    serviceSpecification: specification,
    serviceMemberSpecification: command,
    specifications: command.fields,
    values: commandArgs,
    setValues: setCommandArgs,
    showDataType: true
  }), !!(reports !== null && reports !== void 0 && reports.length) && /*#__PURE__*/react.createElement(List/* default */.Z, {
    key: "reports",
    dense: true
  }, reports === null || reports === void 0 ? void 0 : reports.map((report, ri) => /*#__PURE__*/react.createElement(ListItem/* default */.Z, {
    key: "report" + ri
  }, /*#__PURE__*/react.createElement(DecodedPacketItem, {
    pkt: report
  }))))), !hasCommandIdentifier && !hasRegisterIdentifiers && !hasEventIdentifiers && /*#__PURE__*/react.createElement(ServiceSpecificationStatusAlert/* default */.Z, {
    specification: specification
  }), /*#__PURE__*/react.createElement(DeviceLostAlert/* DeviceLostAlert */.M, {
    device: service === null || service === void 0 ? void 0 : service.device
  })), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, command && /*#__PURE__*/react.createElement(CommandInput, {
    service: service,
    command: command,
    args: commandArgs,
    setReports: setReports
  })));
}
// EXTERNAL MODULE: ./src/components/useGridBreakpoints.ts
var useGridBreakpoints = __webpack_require__(7746);
;// CONCATENATED MODULE: ./src/components/DeviceList.tsx







var DeviceList_useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  root: {
    marginBottom: theme.spacing(1)
  }
}));
function DeviceList(props) {
  var {
    serviceClass,
    linkToService,
    registerIdentifiers,
    showServiceName,
    showMemberName,
    showFirmware,
    showTemperature,
    showServiceButtons,
    eventIdentifiers,
    commandIdentifier
  } = props;
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var devices = (0,useChange/* default */.Z)(bus, n => n.devices({
    serviceClass
  }));
  var services = (0,useChange/* default */.Z)(bus, n => n.services({
    serviceClass
  }));
  var classes = DeviceList_useStyles();
  var hasServiceClass = serviceClass !== undefined;
  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)(devices === null || devices === void 0 ? void 0 : devices.length);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2,
    className: classes.root
  }, !hasServiceClass && devices.map(device => /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({
    key: device.id,
    item: true
  }, gridBreakpoints), /*#__PURE__*/react.createElement(DeviceCard/* default */.Z, {
    device: device,
    showDescription: true,
    showTemperature: showTemperature,
    showFirmware: showFirmware,
    showServices: showServiceButtons
  }))), hasServiceClass && services.map(service => {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({
      key: service.id,
      item: true
    }, gridBreakpoints), /*#__PURE__*/react.createElement(ServiceCard, {
      service: service,
      linkToService: linkToService,
      showServiceName: showServiceName,
      showMemberName: showMemberName,
      registerIdentifiers: registerIdentifiers,
      eventIdentifiers: eventIdentifiers,
      commandIdentifier: commandIdentifier
    }));
  }));
}
// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__(92681);
// EXTERNAL MODULE: ./src/components/KindChip.tsx
var KindChip = __webpack_require__(37958);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Category.js
var Category = __webpack_require__(89135);
// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__(60102);
;// CONCATENATED MODULE: ./src/components/PacketMembersChip.tsx
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports match-default-export-name



function PacketMembersChip(props) {
  var {
    members,
    className,
    spec
  } = props;
  if (!(members !== null && members !== void 0 && members.length)) return null;
  var label = spec === null || spec === void 0 ? void 0 : spec.packFormat;
  var title = "pack format";
  return /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
    title: title
  }, /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    style: {
      textDecoration: "none"
    },
    href: "/reference/pack-format/",
    component: "a",
    clickable: true,
    className: className,
    size: "small",
    icon: /*#__PURE__*/react.createElement(Category/* default */.Z, null),
    label: label
  }));
}
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
;// CONCATENATED MODULE: ./src/components/PacketSpecification.tsx
 // tslint:disable-next-line: no-submodule-imports


 // tslint:disable-next-line: no-submodule-imports









var PacketSpecification_useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  root: {
    marginBottom: theme.spacing(1)
  },
  field: {
    "& > div": {
      verticalAlign: "middle"
    }
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

function MemberType(props) {
  var {
    member
  } = props;
  var classes = PacketSpecification_useStyles();
  var helperText = (0,pretty/* prettyMemberUnit */.Zn)(member, true);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("li", {
    className: classes.field
  }, member.name !== "_" && member.name + ": ", /*#__PURE__*/react.createElement("code", null, helperText)));
}

function MembersType(props) {
  var {
    members,
    title
  } = props;
  var repeatIndex = members.findIndex(m => !!m.startRepeats);
  if (repeatIndex < 0) repeatIndex = members.length;
  var beforeRepeat = members.slice(0, repeatIndex);
  var afterRepeat = members.slice(repeatIndex);
  return /*#__PURE__*/react.createElement(react.Fragment, null, !!title && /*#__PURE__*/react.createElement("h4", null, title), !!beforeRepeat.length && /*#__PURE__*/react.createElement("ul", null, beforeRepeat.map((member, i) => /*#__PURE__*/react.createElement(MemberType, {
    key: "member" + member.name,
    member: member
  }))), !!afterRepeat.length && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h5", null, "starts repeating"), /*#__PURE__*/react.createElement("ul", null, afterRepeat.map((member, i) => /*#__PURE__*/react.createElement(MemberType, {
    key: "member" + member.name,
    member: member
  })))));
}

function PacketSpecification(props) {
  var {
    serviceClass,
    packetInfo,
    reportInfo,
    pipeReportInfo,
    showDevices
  } = props;
  var {
    0: args,
    1: setArgs
  } = (0,react.useState)([]);
  var classes = PacketSpecification_useStyles();
  if (!packetInfo) return /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, "Unknown member " + serviceClass.toString(16) + ":" + packetInfo.identifier);
  var {
    fields
  } = packetInfo;
  var isCmd = (0,jdom_spec/* isCommand */.ao)(packetInfo);
  return /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement("h3", {
    id: packetInfo.kind + ":" + packetInfo.identifier
  }, packetInfo.name, /*#__PURE__*/react.createElement(PacketMembersChip, {
    spec: packetInfo,
    className: classes.chip,
    members: packetInfo.fields
  }), packetInfo.identifier !== undefined && /*#__PURE__*/react.createElement(IDChip/* default */.Z, {
    className: classes.chip,
    id: packetInfo.identifier,
    filter: "pkt:0x" + packetInfo.identifier.toString(16)
  }), /*#__PURE__*/react.createElement(KindChip/* default */.Z, {
    className: classes.chip,
    kind: packetInfo.kind
  }), packetInfo.optional && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    className: classes.chip,
    size: "small",
    label: "optional"
  }), packetInfo.derived && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    className: classes.chip,
    size: "small",
    label: "derived"
  })), /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    source: packetInfo.description
  }), !!fields.length && /*#__PURE__*/react.createElement(MembersType, {
    members: fields,
    title: isCmd && "Arguments"
  }), !!reportInfo && /*#__PURE__*/react.createElement(MembersType, {
    members: reportInfo.fields,
    title: "Report"
  }), !!pipeReportInfo && /*#__PURE__*/react.createElement(MembersType, {
    members: pipeReportInfo.fields,
    title: "Pipe report"
  }), showDevices && (0,jdom_spec/* isCommand */.ao)(packetInfo) && /*#__PURE__*/react.createElement(DeviceList, {
    serviceClass: serviceClass,
    commandIdentifier: packetInfo.identifier
  }), showDevices && (0,jdom_spec/* isRegister */.x5)(packetInfo) && /*#__PURE__*/react.createElement(DeviceList, {
    serviceClass: serviceClass,
    registerIdentifiers: [packetInfo.identifier]
  }), showDevices && (0,jdom_spec/* isEvent */.cO)(packetInfo) && /*#__PURE__*/react.createElement(DeviceList, {
    serviceClass: serviceClass,
    eventIdentifiers: [packetInfo.identifier]
  }));
}

/***/ }),

/***/ 49102:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export StatusAlert */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95453);


function StatusAlert(props) {
  var {
    specification
  } = props;

  switch (specification === null || specification === void 0 ? void 0 : specification.status) {
    case "deprecated":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        severity: "error"
      }, "Deprecated");

    case "experimental":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        severity: "info"
      }, "Experimental");

    default:
      return null;
  }
}
var ServiceSpecificationStatusAlert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(StatusAlert);
/* harmony default export */ __webpack_exports__["Z"] = (ServiceSpecificationStatusAlert);

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

/***/ 95926:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useEventCount; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);


function useEventCount(event) {
  var {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((event === null || event === void 0 ? void 0 : event.count) || 0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => event === null || event === void 0 ? void 0 : event.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE */ .Ver, () => {
    setCount(event.count);
  }), [event]);
  return count;
}

/***/ })

}]);
//# sourceMappingURL=149f11818c122b40ce2932f15d148eda4aaa5f90-fe0fcecbe3d62ff794ff.js.map