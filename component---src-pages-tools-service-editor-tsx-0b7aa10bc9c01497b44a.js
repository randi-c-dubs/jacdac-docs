"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2219],{

/***/ 13508:
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
  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check');

exports.Z = _default;

/***/ }),

/***/ 72833:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniqueServiceId": function() { return /* binding */ uniqueServiceId; },
/* harmony export */   "uniqueDeviceId": function() { return /* binding */ uniqueDeviceId; },
/* harmony export */   "uniqueFirmwareId": function() { return /* binding */ uniqueFirmwareId; },
/* harmony export */   "default": function() { return /* binding */ RandomGenerator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15343);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(13508);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95453);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36176);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42862);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19640);
/* harmony import */ var _jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80303);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81794);



 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports








function looksRandom(n) {
  var s = n.toString(16);
  var h = "0123456789abcdef";

  for (var i = 0; i < h.length; ++i) {
    var hh = h[i];
    if (s.indexOf(hh + hh + hh) >= 0) return false;
  }

  if (/f00d|dead|deaf|beef/.test(s)) return false;
  return true;
}

function genServId() {
  var n = (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_5__/* .cryptoRandomUint32 */ .dG)(1);
  if (n === undefined) return undefined;
  return n[0] & 0xfffffff | 0x10000000;
}

function genFirmwareId() {
  var n = (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_5__/* .cryptoRandomUint32 */ .dG)(1);
  if (n === undefined) return undefined;
  return n[0] & 0xfffffff | 0x30000000;
}

function uniqueServiceId() {
  var id = genServId();

  while (id !== undefined && (!looksRandom(id) || (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .serviceSpecificationFromClassIdentifier */ .d5)(id))) {
    id = genServId();
  }

  return id !== undefined && (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .toFullHex */ .$3)([id]);
}
function uniqueDeviceId() {
  var n = (0,_jacdac_ts_src_jdom_random__WEBPACK_IMPORTED_MODULE_5__/* .cryptoRandomUint32 */ .dG)(2);
  return n !== undefined && (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .toFullHex */ .$3)([n[0], n[1]]);
}
function uniqueFirmwareId() {
  var id = genFirmwareId();

  while (id !== undefined && (!looksRandom(id) || (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .deviceSpecificationFromProductIdentifier */ .Ht)(id))) {
    id = genFirmwareId();
  }

  return id !== undefined && (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_6__/* .toFullHex */ .$3)([id]);
}
var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
  root: {
    minWidth: 275,
    marginBottom: "1rem"
  },
  title: {
    fontSize: 14
  }
}));
function RandomGenerator(props) {
  var {
    device,
    firmware
  } = props;
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__/* .useId */ .Me)();
  var fieldId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_4__/* .useId */ .Me)();
  var classes = useStyles();
  var {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(device ? uniqueDeviceId() : uniqueServiceId());
  var {
    0: copySuccess,
    1: setCopySuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  var handleRegenerate = () => {
    var v = device ? uniqueDeviceId() : firmware ? uniqueFirmwareId() : uniqueServiceId();
    setValue(v);
    setCopySuccess(false);
  };

  var handleCopy = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(function* () {
      try {
        yield navigator.clipboard.writeText(value);
        setCopySuccess(true);
      } catch (err) {
        setCopySuccess(false);
      }
    });

    return function handleCopy() {
      return _ref.apply(this, arguments);
    };
  }();

  var title = device ? "Random Device Identifier" : firmware ? "Random Product Identifier" : "Random Service Identifier";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    id: labelId,
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true
  }, title), value !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    variant: "h5",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    id: fieldId,
    value: value,
    readOnly: true,
    inputProps: {
      "aria-labelledby": labelId
    }
  }), copySuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, null)), value === undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    severity: "error"
  }, "Oops, unable to generate a strong random number.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
    "aria-label": "copy random number to clipboard",
    size: "small",
    variant: "contained",
    onClick: handleCopy
  }, "Copy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
    "aria-label": "regenerate random number",
    size: "small",
    variant: "contained",
    color: "primary",
    onClick: handleRegenerate
  }, "Regenerate"))));
}

/***/ }),

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

  return /*#__PURE__*/react.createElement(react.Fragment, {
    key: "servicespec" + shortId
  }, /*#__PURE__*/react.createElement("h1", {
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

/***/ 33024:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ HighlightTextField; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(75167);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.js + 2 modules
var dist = __webpack_require__(18328);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/github/index.js
var github = __webpack_require__(13019);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/themes/vsDark/index.js
var vsDark = __webpack_require__(41194);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(91350);
;// CONCATENATED MODULE: ./node_modules/use-editable/dist/use-editable.es.js

var m = {
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
};

function p(c) {
  var a = window.getSelection();
  a.empty();
  a.addRange(c);
}

function q(c) {
  return (c.metaKey || c.ctrlKey) && !c.altKey && "KeyZ" === c.code;
}

function r(c) {
  c = [c.firstChild];

  for (var b, a = ""; b = c.pop();) {
    b.nodeType === Node.TEXT_NODE ? a += b.textContent : b.nodeType === Node.ELEMENT_NODE && "BR" === b.nodeName && (a += "\n"), b.nextSibling && c.push(b.nextSibling), b.firstChild && c.push(b.firstChild);
  }

  "\n" !== a[a.length - 1] && (a += "\n");
  return a;
}

function w(c) {
  var a = window.getSelection().getRangeAt(0),
      b = a.collapsed ? 0 : a.toString().length,
      f = document.createRange();
  f.setStart(c, 0);
  f.setEnd(a.startContainer, a.startOffset);
  return {
    position: c = (f = f.toString()).length,
    extent: b,
    content: f = (f = f.split("\n"))[a = f.length - 1],
    line: a
  };
}

function C(c, a, b) {
  0 >= a && (a = 0);

  if (!b || 0 > b) {
    b = a;
  }

  var f = document.createRange();
  c = [c.firstChild];

  for (var d, l = 0, g = a; d = c[c.length - 1];) {
    if (d.nodeType === Node.TEXT_NODE) {
      if (l + d.textContent.length >= g) {
        var h = g - l;

        if (g === a) {
          if (g = f, h < d.textContent.length ? g.setStart(d, h) : g.setStartAfter(d), b !== a) {
            g = b;
            continue;
          } else {
            break;
          }
        } else {
          a = f;
          h < (b = d).textContent.length ? a.setEnd(b, h) : a.setEndAfter(b);
          break;
        }
      }

      l += d.textContent.length;
    } else if (d.nodeType === Node.ELEMENT_NODE && "BR" === d.nodeName) {
      if (l + 1 >= g) {
        if (g === a) {
          if (h = f, 0 < d.textContent.length ? h.setStart(d, 0) : h.setStartAfter(d), b !== a) {
            g = b;
            continue;
          } else {
            break;
          }
        } else {
          a = f;
          0 < (b = d).textContent.length ? a.setEnd(b, 0) : a.setEndAfter(b);
          break;
        }
      }

      l++;
    }

    c.pop();
    d.nextSibling && c.push(d.nextSibling);
    d.firstChild && c.push(d.firstChild);
  }

  return f;
}

function useEditable(c, a, b) {
  function f(k) {
    var b = c.current;

    if (b) {
      var a = w(b);
      b = r(b);
      a.position += k.length - b.length;
      e.position = a;
      e.onChange(k, a);
    }
  }

  function l(k, b) {
    var e = c.current;

    if (e) {
      var a = window.getSelection().getRangeAt(0);
      a.deleteContents();
      a.collapse();
      var d = b || 0;
      (a = C(e, b = (a = w(e)).position + (0 > d ? d : 0), a.position + (0 < d ? d : 0))).deleteContents();
      k && a.insertNode(document.createTextNode(k));
      p(C(e, b + k.length));
    }
  }

  function d(b) {
    var a = c.current;

    if (a) {
      a.focus();
      var e = 0;

      if ("number" == typeof b) {
        e = b;
      } else {
        var k = r(a).split("\n").slice(0, b.row);
        b.row && (e += k.join("\n").length + 1);
        e += b.column;
      }

      p(C(a, e));
    }
  }

  function g() {
    var b = c.current;
    return {
      text: r(b),
      position: b = w(b)
    };
  }

  function h() {
    e.observer.disconnect();
  }

  b || (b = {});
  var D = (0,react.useState)([])[1],
      e = (0,react.useState)(function () {
    var e = {
      observer: null,
      disconnected: !1,
      onChange: a,
      queue: [],
      history: [],
      historyAt: -1,
      position: null
    };
    "undefined" != typeof MutationObserver && (e.observer = new MutationObserver(function b(b) {
      var a;
      (a = e.queue).push.apply(a, b);
    }));
    return e;
  })[0],
      n = (0,react.useMemo)(function () {
    return {
      update: f,
      insert: l,
      move: d,
      getState: g
    };
  }, []);

  if ("object" != typeof navigator) {
    return n;
  }

  (0,react.useLayoutEffect)(function () {
    e.onChange = a;

    if (c.current && !b.disabled) {
      e.disconnected = !1;
      e.observer.observe(c.current, m);

      if (e.position) {
        var k = e.position,
            d = k.position;
        p(C(c.current, d, d + k.extent));
      }

      return h;
    }
  });
  (0,react.useLayoutEffect)(function () {
    if (!c.current || b.disabled) {
      e.history.length = 0, e.historyAt = -1;
    } else {
      var a = c.current;

      if (e.position) {
        a.focus();
        var d = e.position,
            f = d.position;
        p(C(a, f, f + d.extent));
      }

      var g = a.style.whiteSpace,
          h = a.contentEditable,
          l = !0;

      try {
        a.contentEditable = "plaintext-only";
      } catch (u) {
        a.contentEditable = "true", l = !1;
      }

      "pre" !== g && (a.style.whiteSpace = "pre-wrap");
      b.indentation && (a.style.tabSize = a.style.MozTabSize = "" + b.indentation);
      d = "" + " ".repeat(b.indentation || 0);

      var x,
          E = new RegExp("^(?:" + d + ")"),
          F = new RegExp("^(?:" + d + ")*(" + d + ")$"),
          t = function t(b) {
        if (c.current && e.position) {
          var u = r(a),
              d = w(a),
              f = new Date().valueOf(),
              g = e.history[e.historyAt];
          !b && 500 > f - x || g && g[1] === u ? x = f : (b = ++e.historyAt, e.history[b] = [d, u], e.history.splice(b + 1), 500 < b && (e.historyAt--, e.history.shift()));
        }
      },
          v = function v() {
        var b;
        (b = e.queue).push.apply(b, e.observer.takeRecords());
        b = w(a);

        if (e.queue.length) {
          e.observer.disconnect();
          e.disconnected = !0;
          var d = r(a);
          e.position = b;

          for (var c, f; c = e.queue.pop();) {
            null !== c.oldValue && (c.target.textContent = c.oldValue);

            for (f = c.removedNodes.length - 1; 0 <= f; f--) {
              c.target.insertBefore(c.removedNodes[f], c.nextSibling);
            }

            for (f = c.addedNodes.length - 1; 0 <= f; f--) {
              c.addedNodes[f].parentNode && c.target.removeChild(c.addedNodes[f]);
            }
          }

          e.onChange(d, b);
        }
      },
          y = function y(c) {
        if (!c.defaultPrevented && c.target === a) {
          if (e.disconnected) {
            return c.preventDefault(), D([]);
          }

          if (q(c)) {
            c.preventDefault(), c.shiftKey ? (c = ++e.historyAt, (c = e.history[c]) || (e.historyAt = e.history.length - 1)) : (c = --e.historyAt, (c = e.history[c]) || (e.historyAt = 0)), c && (e.observer.disconnect(), e.disconnected = !0, e.position = c[0], e.onChange(c[1], c[0]));
          } else {
            t();

            if ("Enter" === c.key) {
              c.preventDefault();
              var d = w(a),
                  f = /\S/g.exec(d.content);
              d = "\n" + d.content.slice(0, f ? f.index : d.content.length);
              n.insert(d);
            } else if ((!l || b.indentation) && "Backspace" === c.key) {
              c.preventDefault(), window.getSelection().getRangeAt(0).collapsed ? (d = w(a), d = F.exec(d.content), n.insert("", d ? -d[1].length : -1)) : n.insert("", 0);
            } else if (b.indentation && "Tab" === c.key) {
              c.preventDefault();
              f = (d = w(a)).position - d.content.length;
              var g = r(a);
              d = c.shiftKey ? g.slice(0, f) + d.content.replace(E, "") + g.slice(f + d.content.length) : g.slice(0, f) + (b.indentation ? " ".repeat(b.indentation) : "\t") + g.slice(f);
              n.update(d);
            }

            c.repeat && v();
          }
        }
      },
          z = function z(b) {
        b.defaultPrevented || b.isComposing || (q(b) || t(), v(), a.focus());
      },
          A = function A(b) {
        e.position = window.getSelection().rangeCount && b.target === a ? w(a) : null;
      },
          B = function B(a) {
        a.preventDefault();
        t(!0);
        n.insert(a.clipboardData.getData("text/plain"));
        t(!0);
        v();
      };

      document.addEventListener("selectstart", A);
      window.addEventListener("keydown", y);
      a.addEventListener("paste", B);
      a.addEventListener("keyup", z);
      return function () {
        document.removeEventListener("selectstart", A);
        window.removeEventListener("keydown", y);
        a.removeEventListener("paste", B);
        a.removeEventListener("keyup", z);
        a.style.whiteSpace = g;
        a.contentEditable = h;
      };
    }
  }, [c.current, b.disabled, b.indentation]);
  return n;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(6809);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
;// CONCATENATED MODULE: ./src/components/ui/HighlightTextField.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react/jsx-key */

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name







var GithubPullRequestButton = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() */[__webpack_require__.e(317), __webpack_require__.e(5133)]).then(__webpack_require__.bind(__webpack_require__, 22632)));
var AnnotationTooltip = (0,withStyles/* default */.Z)(theme => ({
  arrow: {
    color: theme.palette.error.main
  },
  tooltip: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: theme.typography.body2.fontSize
  }
}))(Tooltip/* default */.ZP);
function HighlightTextField(props) {
  var {
    code,
    onChange,
    language,
    annotations,
    pullRequestTitle,
    pullRequestPath,
    pullRequestDescription
  } = props;
  var {
    darkMode
  } = (0,react.useContext)(DarkModeContext/* default */.Z);
  var theme = darkMode === "dark" ? vsDark/* default */.Z : github/* default */.Z;
  var editorRef = (0,react.useRef)(null);
  useEditable(editorRef, onChange, {
    disabled: false,
    indentation: 4
  });
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(dist/* default */.ZP, Object.assign({}, dist/* defaultProps */.lG, {
    code: code,
    language: language,
    theme: theme
  }), _ref => {
    var {
      className,
      style,
      tokens,
      getTokenProps
    } = _ref;
    return /*#__PURE__*/react.createElement("pre", {
      ref: editorRef,
      className: className,
      spellCheck: false,
      style: _objectSpread(_objectSpread({}, style), {
        minHeight: "12rem",
        whiteSpace: "pre-wrap"
      })
    }, tokens.map((line, i) => {
      var annotation = annotations === null || annotations === void 0 ? void 0 : annotations.find(a => a.line === i + 1);
      var title = annotation === null || annotation === void 0 ? void 0 : annotation.message;
      var el = /*#__PURE__*/react.createElement("span", {
        key: i,
        style: annotation && {
          borderBottom: "dashed 1px red"
        }
      }, line.filter(token => !token.empty).map((token, key) => /*#__PURE__*/react.createElement("span", getTokenProps({
        token,
        key
      }))), i < tokens.length - 1 ? "\n" : null);
      return title ? /*#__PURE__*/react.createElement(AnnotationTooltip, {
        title: title,
        arrow: true,
        key: i
      }, el) : el;
    }));
  })), !!(annotations !== null && annotations !== void 0 && annotations.length) && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, /*#__PURE__*/react.createElement("ul", null, annotations.map((a, i) => /*#__PURE__*/react.createElement("li", {
    key: i
  }, "line ", a.line, ": ", a.message))))), pullRequestTitle && pullRequestPath && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(GithubPullRequestButton, {
    title: pullRequestTitle,
    head: pullRequestPath,
    description: pullRequestDescription,
    files: {
      [pullRequestPath + ".md"]: code
    }
  }))));
}

/***/ }),

/***/ 37207:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./src/components/RandomGenerator.tsx
var RandomGenerator = __webpack_require__(72833);
// EXTERNAL MODULE: ./src/components/hooks/useLocalStorage.ts
var useLocalStorage = __webpack_require__(34093);
// EXTERNAL MODULE: ./src/components/ui/HighlightTextField.tsx + 1 modules
var HighlightTextField = __webpack_require__(33024);
// EXTERNAL MODULE: ./src/components/ServiceSpecification.tsx + 1 modules
var ServiceSpecification = __webpack_require__(81857);
;// CONCATENATED MODULE: ./src/components/tools/ServiceSpecificationEditor.tsx








var SERVICE_SPECIFICATION_STORAGE_KEY = "jacdac:servicespecificationeditorsource";
function ServiceSpecificationEditor() {
  var [source, setSource] = (0,useLocalStorage/* default */.Z)(SERVICE_SPECIFICATION_STORAGE_KEY, "");
  var json = (0,react.useMemo)(() => (0,jdspec/* parseServiceSpecificationMarkdownToJSON */.ml)(source, (0,spec/* serviceMap */.nT)()), [source]);
  var servicePath = json && "services/" + (json.camelName || json.shortId || "0x" + json.classIdentifier.toString(16)).toLowerCase();
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    spacing: 1,
    container: true
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(HighlightTextField/* default */.Z, {
    code: source,
    language: "markdown",
    onChange: setSource,
    annotations: json === null || json === void 0 ? void 0 : json.errors,
    pullRequestTitle: json && "Service: " + json.name,
    pullRequestPath: servicePath,
    pullRequestDescription: "This pull request defines a new service."
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(RandomGenerator.default, {
    device: false
  }), json && /*#__PURE__*/react.createElement(ServiceSpecification/* default */.Z, {
    service: json
  })));
}
;// CONCATENATED MODULE: ./src/pages/tools/service-editor.tsx



function Page() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Service Specification Editor"), /*#__PURE__*/react.createElement("p", null, "Read the ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/reference/service-specification"
  }, "service specifiation"), " documentation. Use the packet console to monitor packets from your devices."), /*#__PURE__*/react.createElement(ServiceSpecificationEditor, null));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-service-editor-tsx-0b7aa10bc9c01497b44a.js.map