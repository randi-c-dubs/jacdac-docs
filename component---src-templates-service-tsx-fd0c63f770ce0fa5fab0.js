"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3133],{

/***/ 81857:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ServiceSpecification; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var jdom_spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/components/PacketSpecification.tsx + 10 modules
var PacketSpecification = __webpack_require__(40602);
// EXTERNAL MODULE: ./src/components/IDChip.tsx
var IDChip = __webpack_require__(92681);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
;// CONCATENATED MODULE: ./src/components/EnumSpecification.tsx



function EnumSpecification(props) {
  var {
    serviceClass
  } = props;
  var spec = (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(serviceClass);
  var enums = Object.values((spec === null || spec === void 0 ? void 0 : spec.enums) || {}).filter(en => !en.derived);
  if (!enums.length) return /*#__PURE__*/react.createElement(react.Fragment, null);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h2", null, "Enums"), enums.map(e => /*#__PURE__*/react.createElement(react.Fragment, {
    key: e.name
  }, /*#__PURE__*/react.createElement("h3", null, e.name, " ", e.isFlags && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    label: "flags",
    size: "small"
  })), /*#__PURE__*/react.createElement("ul", null, Object.keys(e.members).map(en => /*#__PURE__*/react.createElement("li", {
    key: en
  }, en, ": ", /*#__PURE__*/react.createElement("code", null, "0x", e.members[en].toString(16))))))));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__(33287);
// EXTERNAL MODULE: ./src/components/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__(49102);
// EXTERNAL MODULE: ./src/components/hooks/useServiceProviderFromServiceClass.ts
var useServiceProviderFromServiceClass = __webpack_require__(36134);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardDeviceItem.tsx
var DashboardDeviceItem = __webpack_require__(24301);
;// CONCATENATED MODULE: ./src/components/ServiceSpecification.tsx














function DashboardServiceDevices(props) {
  var {
    serviceClass
  } = props;
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var devices = (0,useChange/* default */.Z)(bus, b => b.devices({
    serviceClass
  }));
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, devices.map(device => /*#__PURE__*/react.createElement(DashboardDeviceItem/* default */.Z, {
    key: device.id,
    device: device,
    showAvatar: true,
    showHeader: true
  })));
}

function ServiceSpecification(props) {
  var _node$extends;

  var {
    service: node,
    showDerived
  } = props;
  var {
    shortId,
    name,
    classIdentifier
  } = node;
  var packets = node.packets.filter(pkt => showDerived || !pkt.derived);
  var registers = packets.filter(jdom_spec/* isRegister */.x5);
  var events = packets.filter(jdom_spec/* isEvent */.cO);
  var commands = packets.filter(jdom_spec/* isCommand */.ao);
  var reports = packets.filter(r => r.secondary);
  var pipeReports = packets.filter(jdom_spec/* isPipeReport */._5);
  var others = packets.filter(r => registers.indexOf(r) < 0 && events.indexOf(r) < 0 && commands.indexOf(r) < 0 && reports.indexOf(r) < 0 && pipeReports.indexOf(r) < 0); // spin up provider on demand

  (0,useServiceProviderFromServiceClass/* default */.Z)(node.classIdentifier);

  var reportOf = pkt => reports.find(rep => (0,jdom_spec/* isReportOf */.Dm)(pkt, rep));

  var pipeReportOf = pkt => pipeReports.find(rep => (0,jdom_spec/* isPipeReportOf */.yr)(pkt, rep));

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", {
    key: "title"
  }, name, /*#__PURE__*/react.createElement(Box/* default */.Z, {
    ml: 1,
    component: "span"
  }, /*#__PURE__*/react.createElement(IDChip/* default */.Z, {
    id: node.classIdentifier,
    filter: "srv:" + shortId
  }))), /*#__PURE__*/react.createElement(ServiceSpecificationStatusAlert/* default */.Z, {
    specification: node
  }), /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    key: "notesshort",
    source: node.notes.short
  }), !!((_node$extends = node.extends) !== null && _node$extends !== void 0 && _node$extends.length) && /*#__PURE__*/react.createElement("p", {
    key: "extends"
  }, /*#__PURE__*/react.createElement("span", null, "Extends "), node.extends.map((extend, i) => /*#__PURE__*/react.createElement(react.Fragment, {
    key: "extend" + extend
  }, i > 0 && /*#__PURE__*/react.createElement("span", null, ", "), /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    key: "extend" + extend,
    to: "/services/" + extend + "/"
  }, (0,jdom_spec/* serviceSpecificationFromName */.kB)(extend).name))), "."), /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    key: "noteslong",
    source: node.notes.long || ""
  }), /*#__PURE__*/react.createElement(DashboardServiceDevices, {
    serviceClass: classIdentifier
  }), /*#__PURE__*/react.createElement(EnumSpecification, {
    key: "enums",
    serviceClass: classIdentifier
  }), [{
    name: "Registers",
    packets: registers,
    note: node.notes["registers"]
  }, {
    name: "Events",
    packets: events,
    note: node.notes["events"]
  }, {
    name: "Commands",
    packets: commands,
    note: node.notes["commands"]
  }, {
    name: "Others",
    packets: others,
    note: node.notes["others"]
  }].filter(group => group.packets.length).map(group => /*#__PURE__*/react.createElement(react.Fragment, {
    key: "group" + group.name
  }, /*#__PURE__*/react.createElement("h2", null, group.name), group.note && /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    key: "node" + group.name,
    source: group.note
  }), group.packets.sort((l, r) => (l.derived ? 1 : -1) - (r.derived ? 1 : -1)).map((pkt, i) => /*#__PURE__*/react.createElement(PacketSpecification/* default */.Z, {
    key: "pkt" + pkt.name,
    serviceClass: node.classIdentifier,
    packetInfo: pkt,
    reportInfo: reportOf(pkt),
    pipeReportInfo: pipeReportOf(pkt),
    showDevices: true
  })))));
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

/***/ 13914:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./src/components/ServiceSpecificationStatusAlert.tsx
var ServiceSpecificationStatusAlert = __webpack_require__(49102);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./src/components/DeviceSpecificationList.tsx + 3 modules
var DeviceSpecificationList = __webpack_require__(77768);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var jdom_spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/test/testspec.ts + 1 modules
var testspec = __webpack_require__(45831);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(44942);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__(342);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(58063);
// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__(3263);
// EXTERNAL MODULE: ./src/components/ui/Snippet.tsx
var Snippet = __webpack_require__(34276);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
// EXTERNAL MODULE: ./src/components/ServiceSpecification.tsx + 1 modules
var ServiceSpecification = __webpack_require__(81857);
// EXTERNAL MODULE: ./src/components/azure/DTDLSnippet.tsx
var DTDLSnippet = __webpack_require__(16591);
// EXTERNAL MODULE: ./jacdac-ts/src/azure-iot/dtdlspec.ts
var dtdlspec = __webpack_require__(5443);
;// CONCATENATED MODULE: ./jacdac-ts/src/azure-iot/devicetwin.ts

function serviceSpecificationToDeviceTwinSpecification(specification) {
  if (!specification) return undefined;
  var {
    classIdentifier: serviceClass,
    camelName: name,
    packets
  } = specification;
  var registers = packets.filter(jdom_spec/* isHighLevelRegister */.vr) // TODO formalize
  .map(_ref => {
    var {
      identifier,
      name,
      packFormat,
      kind,
      fields
    } = _ref;
    return {
      code: identifier,
      name,
      kind,
      packFormat,
      fields: fields.map(f => f.name)
    };
  });
  var dspec = {
    serviceClass,
    name,
    registers
  };
  return dspec;
}
function serviceSpecificationsWithDeviceTwinSpecification() {
  var specs = serviceSpecifications().filter(srv => !isInfrastructure(srv));
  return specs;
}
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/components/ServiceSpecificationSource.tsx












var useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(1)
  },
  pre: {
    margin: "0",
    padding: "0",
    backgroundColor: "transparent",
    whiteSpec: "pre-wrap"
  }
}));
function ServiceSpecificationSource(props) {
  var {
    classIdentifier,
    serviceSpecification,
    showSpecification
  } = props;
  var classes = useStyles();
  var {
    0: tab,
    1: setTab
  } = (0,react.useState)(0);
  var spec = serviceSpecification || (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(classIdentifier);
  var convs = (0,jdspec/* converters */.R1)();
  var showDTDL = spec && (spec === null || spec === void 0 ? void 0 : spec.camelName) !== "system";
  var showDeviceTwin = spec && (spec === null || spec === void 0 ? void 0 : spec.camelName) !== "sytem";

  var handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  var index = 0;
  return /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement(Paper/* default */.Z, {
    square: true
  }, /*#__PURE__*/react.createElement(Tabs/* default */.Z, {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "View specification formats"
  }, [showSpecification && "Specification", "MakeCode", "TypeScript", "C", "JSON", showDTDL && "DTDL", showDeviceTwin && "Device Twin"].filter(n => !!n).map((n, i) => /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    key: n,
    label: n
  }))), showSpecification && /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    key: "spec",
    value: tab,
    index: index++
  }, /*#__PURE__*/react.createElement(ServiceSpecification/* default */.Z, {
    service: spec
  })), ["sts", "ts", "c", "json"].map(lang => /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    key: "conv" + lang,
    value: tab,
    index: index++
  }, /*#__PURE__*/react.createElement(Snippet/* default */.Z, {
    value: () => convs[lang](spec),
    mode: lang
  }))), showDTDL && /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    key: "dtdl",
    value: tab,
    index: index++
  }, /*#__PURE__*/react.createElement(DTDLSnippet/* DTDLSnippet */.Y, {
    node: (0,dtdlspec/* serviceSpecificationToDTDL */.eT)(spec)
  })), showDeviceTwin && /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    key: "dtdl",
    value: tab,
    index: index++
  }, /*#__PURE__*/react.createElement(Snippet/* default */.Z, {
    mode: "json",
    url: (0,gatsby_browser_entry.withPrefix)("/services/devicetwins/x" + spec.classIdentifier.toString(16) + ".json"),
    value: JSON.stringify(serviceSpecificationToDeviceTwinSpecification(spec), null, 2)
  }))));
}
;// CONCATENATED MODULE: ./src/components/ServiceMarkdown.tsx









function ServiceMarkdown(props) {
  var {
    classIdentifier,
    source
  } = props;
  var service = (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(classIdentifier);
  var test = (0,testspec/* serviceTestFromServiceClass */.H)(classIdentifier);
  var {
    shortId
  } = service;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ServiceSpecificationStatusAlert/* default */.Z, {
    specification: service
  }), /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
    source: source
  }), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    variant: "contained",
    to: "/services/" + shortId + "/playground/"
  }, "Playground")), test && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Button, {
    variant: "contained",
    to: "/services/" + shortId + "/test/"
  }, "Test"))), /*#__PURE__*/react.createElement("h2", null, "Registered Devices"), /*#__PURE__*/react.createElement(DeviceSpecificationList.default, {
    requiredServiceClasses: [classIdentifier]
  }), /*#__PURE__*/react.createElement("h2", null, "Sources"), /*#__PURE__*/react.createElement(ServiceSpecificationSource, {
    serviceSpecification: service
  }), /*#__PURE__*/react.createElement("h2", null, " See Also"), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/microsoft/jacdac/edit/main/services/" + shortId + ".md"
  }, "Edit specification source"), "."), /*#__PURE__*/react.createElement("li", null, "Read", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/reference/service-specification/"
  }, "Service Specification Language"), " ", "reference"), /*#__PURE__*/react.createElement("li", null, "Create a new service specification using the", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/tools/service-editor/"
  }, "Service Editor")), /*#__PURE__*/react.createElement("li", null, "Using services in JavaScript with the", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/clients/javascript/jdom/"
  }, "Jacdac Object Model (JDOM)"))));
}
;// CONCATENATED MODULE: ./src/templates/service.tsx

 // eslint-disable-next-line @typescript-eslint/no-explicit-any

function Page(props) {
  return /*#__PURE__*/react.createElement(ServiceMarkdown, props.pageContext);
}

/***/ })

}]);
//# sourceMappingURL=component---src-templates-service-tsx-fd0c63f770ce0fa5fab0.js.map