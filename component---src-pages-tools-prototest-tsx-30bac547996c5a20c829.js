"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[5437,274],{

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

/***/ 52377:
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
  d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
}), 'GetApp');

exports.Z = _default;

/***/ }),

/***/ 58504:
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
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
}), 'Launch');

exports.Z = _default;

/***/ }),

/***/ 50274:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CodeBlock; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(47895);
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
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/GetApp.js
var GetApp = __webpack_require__(52377);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Launch.js
var Launch = __webpack_require__(58504);
// EXTERNAL MODULE: ./src/components/ui/Tooltip.tsx
var Tooltip = __webpack_require__(60102);
// EXTERNAL MODULE: ./src/components/ui/PaperBox.tsx
var PaperBox = __webpack_require__(79739);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(44942);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__(342);
// EXTERNAL MODULE: ./src/components/ui/TabPanel.tsx
var TabPanel = __webpack_require__(3263);
// EXTERNAL MODULE: ./src/components/makecode/MakeCodeSnippetContext.tsx
var makecode_MakeCodeSnippetContext = __webpack_require__(54888);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/makecode/services.ts + 1 modules
var services = __webpack_require__(21389);
;// CONCATENATED MODULE: ./src/components/hooks/useWindowEvent.ts

function useWindowEvent_useWindowEvent(type, listener, passive, deps) {
  if (passive === void 0) {
    passive = false;
  }

  useEffect(() => {
    if (typeof window === "undefined") return undefined; // SSR
    // initiate the event handler

    window.addEventListener(type, listener, passive); // this will clean up the event every time the component is re-rendered

    return () => {
      window.removeEventListener(type, listener);
    };
  }, [type, listener, passive].concat(deps || []));
}
;// CONCATENATED MODULE: ./src/components/makecode/useMakeCodeRenderer.ts





function parseMakeCodeSnippet(source) {
  var ghost;
  var code;
  var meta = {
    dependencies: []
  };

  if (/^---\n/.test(source)) {
    var _front;

    var front;
    var parts = source.replace(/^---\n/, '').split(/---\n/gm);

    switch (parts.length) {
      case 1:
        front = ghost = undefined;
        code = source;
        break;

      case 2:
        [front, code] = parts;
        break;

      default:
        [front, ghost, code] = parts;
        break;
    } // parse front matter


    (_front = front) === null || _front === void 0 ? void 0 : _front.replace(/(.+):\s*(.+)\s*\n/g, (m, name, value) => {
      switch (name) {
        case "dep":
          meta.dependencies.push(value);
          break;

        case "snippet":
          meta.snippet = !!value;
          break;

        default:
          meta[name] = value;
      }

      return "";
    });
  } else {
    code = source;
  } // sniff services


  var mkcds = (0,services/* makeCodeServices */.qs)();
  mkcds.filter(info => {
    var src = (ghost || "") + "\n" + (code || "");
    return src.indexOf(info.client.qName) > -1 || info.client.default && src.indexOf(info.client.default) > -1;
  }).map(info => info.client.name.replace(/^pxt-/, '') + "=github:" + info.client.repo).forEach(dep => meta.dependencies.push(dep)); // add jacdac by default

  if (!meta.dependencies.length) meta.dependencies.push("jacdac=github:microsoft/pxt-jacdac"); // ensure unique deps

  meta.dependencies = (0,utils/* unique */.Tw)(meta.dependencies);
  return {
    code,
    ghost,
    meta
  };
}
function useMakeCodeRenderer() {
  var {
    target,
    rendererUrl
  } = useContext(MakeCodeSnippetContext);
  var lang = "";
  var iframeId = "makecoderenderer" + target;
  var pendingRequests = useMemo(() => ({}), [target, lang]);

  var sendRequest = req => {
    var iframe = typeof document !== "undefined" && document.getElementById(iframeId);
    if (iframe !== null && iframe !== void 0 && iframe.dataset.ready) iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow.postMessage(req, rendererUrl);
  };

  var render = source => {
    var {
      code,
      ghost,
      meta
    } = source;
    var {
      dependencies,
      snippet
    } = meta; // spin up iframe on demans

    if (typeof document !== "undefined" && !document.getElementById(iframeId)) {
      console.log("mkcd: loading iframe");
      var f = document.createElement("iframe");
      f.id = iframeId;
      f.style.position = "absolute";
      f.style.left = "0";
      f.style.bottom = "0";
      f.style.width = "1px";
      f.style.height = "1px";
      f.src = rendererUrl + "?render=1" + (lang ? "&lang=" + lang : '');
      document.body.appendChild(f);
    }

    var req = {
      type: "renderblocks",
      id: "r" + Math.random(),
      code,
      ghost,
      options: {
        dependencies,
        snippetMode: snippet
      }
    };
    return new Promise((resolve, reject) => {
      pendingRequests[req.id] = {
        req,
        resolve,
        reject
      };
      sendRequest(req);
    });
  }; // listen for messages


  var handleMessage = ev => {
    var msg = ev.data;
    if (msg.source != "makecode") return;

    switch (msg.type) {
      case "renderready":
        {
          console.log("mkcd: renderer ready, " + Object.keys(pendingRequests).length + " pending");
          var iframe = typeof document !== "undefined" && document.getElementById(iframeId);

          if (iframe) {
            console.log("flushing messages");
            iframe.dataset.ready = "1";
            Object.keys(pendingRequests).forEach(k => sendRequest(pendingRequests[k].req));
          }

          break;
        }

      case "renderblocks":
        {
          var id = msg.id; // this is the id you sent

          var r = pendingRequests[id];
          if (!r) return;
          delete pendingRequests[id];
          r.resolve(msg);
          break;
        }
    }
  };

  useWindowEvent("message", handleMessage, false, []);
  return {
    render
  };
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeSimulator.tsx






var useStyles = (0,makeStyles/* default */.Z)(() => (0,createStyles/* default */.Z)({
  root: {
    width: "100%"
  },
  root2: {
    position: "relative",
    paddingTop: "86.75%"
  },
  iframe: {
    position: "absolute",
    left: 0,
    top: 0,
    border: "none",
    width: "100%",
    height: "100%"
  }
}));
function MakeCodeSimulator(props) {
  var {
    simUrl
  } = (0,react.useContext)(makecode_MakeCodeSnippetContext/* default */.Z);
  var {
    snippet
  } = props;
  var {
    code,
    ghost,
    meta
  } = snippet;
  var {
    dependencies
  } = meta;
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var frameRef = (0,react.useRef)();
  var classes = useStyles();
  var src = (ghost || "") + "\n" + (code || "");
  var url = simUrl + "#single=1&fullscren=1&nofooter=1&deps=" + encodeURIComponent(dependencies.join(",")) + "&code=" + encodeURIComponent(src);
  var origin = new URL(url).origin;
  (0,react.useEffect)(() => bus.subscribe([constants/* PACKET_SEND */.RaS, constants/* PACKET_PROCESS */.wY8], pkt => {
    var _frameRef$current, _frameRef$current$con;

    this.packetSent++;
    var msg = {
      type: "messagepacket",
      channel: "jacdac",
      broadcast: true,
      data: pkt.toBuffer(),
      sender: pkt.sender
    };
    (_frameRef$current = frameRef.current) === null || _frameRef$current === void 0 ? void 0 : (_frameRef$current$con = _frameRef$current.contentWindow) === null || _frameRef$current$con === void 0 ? void 0 : _frameRef$current$con.postMessage(msg, origin);
  }));
  return /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.root2
  }, /*#__PURE__*/react.createElement("iframe", {
    ref: frameRef,
    className: classes.iframe,
    src: url,
    title: "MakeCode rendering iframe to generate blocks images."
  }))));
}
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/components/makecode/MakeCodeSnippet.tsx









function MakeCodeSnippet(props) {
  var {
    renderedSource
  } = props;
  var {
    source,
    rendered
  } = JSON.parse(renderedSource);
  var {
    height,
    width,
    url
  } = rendered || {};
  var tabs = ["blocks", "typescript", "sim"];
  var {
    editor,
    setEditor
  } = (0,react.useContext)(makecode_MakeCodeSnippetContext/* default */.Z);
  var {
    0: tab,
    1: setTab
  } = (0,react.useState)(tabs.indexOf(editor) || 0);

  var handleTabChange = (event, newValue) => {
    if (newValue < tabs.length - 1) setEditor(tabs[newValue]);
    setTab(newValue);
  };

  var snippet = (0,react.useMemo)(() => parseMakeCodeSnippet(source), [source]);
  var {
    code
  } = snippet;
  return /*#__PURE__*/react.createElement(PaperBox/* default */.Z, null, /*#__PURE__*/react.createElement(Tabs/* default */.Z, {
    value: tab,
    onChange: handleTabChange,
    "aria-label": "Select MakeCode editor"
  }, /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "Blocks"
  }), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "JavaScript"
  }), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
    label: "Simulator"
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 0
  }, /*#__PURE__*/react.createElement("img", {
    src: (0,gatsby_browser_entry.withPrefix)(url),
    alt: source,
    loading: "lazy"
  })), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 1
  }, /*#__PURE__*/react.createElement(CodeBlock, {
    className: "typescript"
  }, code)), /*#__PURE__*/react.createElement(TabPanel/* default */.Z, {
    value: tab,
    index: 2
  }, /*#__PURE__*/react.createElement(MakeCodeSimulator, {
    snippet: snippet
  })));
}
// EXTERNAL MODULE: ./src/components/ui/Suspense.tsx
var Suspense = __webpack_require__(69672);
;// CONCATENATED MODULE: ./src/components/CodeBlock.tsx


var _excluded = ["children", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name



 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name





var TraceSnippet = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 5599).then(__webpack_require__.bind(__webpack_require__, 15599)));
var CodeSandboxButton = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ 8574).then(__webpack_require__.bind(__webpack_require__, 18574)));

function HighlightedCode(props) {
  var {
    children,
    codeSandbox,
    className,
    downloadName,
    downloadText,
    actions,
    url
  } = props;
  var {
    darkMode
  } = (0,react.useContext)(DarkModeContext/* default */.Z);
  var language = (className === null || className === void 0 ? void 0 : className.replace(/language-/, "")) || "";
  var theme = darkMode === "dark" ? vsDark/* default */.Z : github/* default */.Z;
  var valueUri = !!downloadText && "data:application/json;charset=UTF-8," + encodeURIComponent(downloadText);
  return /*#__PURE__*/react.createElement(dist/* default */.ZP, Object.assign({}, dist/* defaultProps */.lG, {
    code: (children === null || children === void 0 ? void 0 : children.replace(/[\s\r\n]*$/g, "")) || "",
    language: language,
    theme: theme
  }), _ref => {
    var {
      className,
      style,
      tokens,
      getLineProps,
      getTokenProps
    } = _ref;
    return /*#__PURE__*/react.createElement("pre", {
      className: className,
      style: _objectSpread({}, style)
    }, !!url && /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
      style: {
        float: "right"
      },
      href: url
    }, /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
      title: "Open " + url
    }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, null, /*#__PURE__*/react.createElement(Launch/* default */.Z, null)))), !!downloadText && /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
      style: {
        float: "right"
      },
      href: valueUri,
      download: downloadName || "download"
    }, /*#__PURE__*/react.createElement(Tooltip/* default */.Z, {
      title: "Download"
    }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, null, /*#__PURE__*/react.createElement(GetApp/* default */.Z, null)))), codeSandbox && /*#__PURE__*/react.createElement("div", {
      style: {
        float: "right"
      }
    }, /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(CodeSandboxButton, {
      source: codeSandbox
    }))), actions && /*#__PURE__*/react.createElement("div", {
      style: {
        float: "right"
      }
    }, actions), tokens === null || tokens === void 0 ? void 0 : tokens.map((line, index) => {
      var lineProps = getLineProps({
        line,
        key: index
      });
      return /*#__PURE__*/react.createElement("div", Object.assign({
        key: index
      }, lineProps), line.map((token, key) => /*#__PURE__*/react.createElement("span", Object.assign({
        key: key
      }, getTokenProps({
        token,
        key
      })))));
    }));
  });
}

function CodeBlock(props) {
  var {
    children,
    className
  } = props,
      rest = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  var language = (className === null || className === void 0 ? void 0 : className.replace(/language-/, "")) || "";

  switch (language) {
    case "trace":
      return /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(TraceSnippet, {
        source: children
      }));

    case "blocks":
      return /*#__PURE__*/react.createElement(MakeCodeSnippet, {
        renderedSource: children
      });

    case "vanilla":
      {
        var [source, js, html] = children.split(/\n-{5,}\n/gi);
        return /*#__PURE__*/react.createElement(HighlightedCode, Object.assign({}, rest, {
          className: "javascript",
          codeSandbox: {
            js,
            html
          }
        }), source);
      }

    default:
      return /*#__PURE__*/react.createElement(HighlightedCode, props);
  }
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

/***/ 34276:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Snippet; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _CodeBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50274);



function Snippet(props) {
  var {
    value,
    mode,
    download,
    url,
    caption,
    actions
  } = props;
  var v = typeof value === "function" ? value() : value;
  var className = mode && "language-" + (mode === "sts" ? "ts" : mode);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CodeBlock__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: className,
    downloadName: download,
    downloadText: download && v,
    actions: actions,
    url: url
  }, v), caption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    variant: "caption"
  }, caption));
}

/***/ }),

/***/ 50381:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ProtocolTest; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js
var Switch = __webpack_require__(6210);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(94431);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__(91635);
// EXTERNAL MODULE: ./src/components/devices/DeviceName.tsx
var DeviceName = __webpack_require__(26390);
// EXTERNAL MODULE: ./src/components/DeviceActions.tsx
var DeviceActions = __webpack_require__(87993);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(95823);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(31186);
// EXTERNAL MODULE: ./src/components/CmdButton.tsx + 1 modules
var CmdButton = __webpack_require__(82613);
// EXTERNAL MODULE: ./src/components/ui/Snippet.tsx
var Snippet = __webpack_require__(34276);
;// CONCATENATED MODULE: ./src/components/TestCard.tsx






function TestCard(props) {
  var {
    title,
    subheader,
    onTest,
    children,
    autoRun
  } = props;
  var {
    0: output,
    1: setOutput
  } = (0,react.useState)("");

  var runTest = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      var log = [];

      var toValue = msg => {
        if (msg === undefined || msg === null) return "";else if (typeof msg === "string") return msg;else if (msg instanceof Uint8Array) return (0,utils/* toHex */.NC)(msg);else if (Array.isArray(msg)) return msg.map(toValue);else return JSON.stringify(msg);
      };

      var logger = msg => {
        if (msg instanceof Error) log.push(msg + "");

        if (typeof msg === "object") {
          Object.keys(msg).forEach(k => log.push(k + ": " + toValue(msg[k])));
        } else log.push(toValue(msg));
      };

      try {
        yield onTest(logger);
      } catch (e) {
        logger(e);
        throw e;
      } finally {
        setOutput(log.join("\n"));
      }
    });

    return function runTest() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* () {
      return yield runTest();
    });

    return function handleClick() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(CardHeader/* default */.Z, {
    title: title,
    subheader: subheader
  }), /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, children, output && /*#__PURE__*/react.createElement(Snippet/* default */.Z, {
    value: output
  })), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, /*#__PURE__*/react.createElement(CmdButton/* default */.Z, {
    variant: "outlined",
    onClick: handleClick,
    disableReset: true,
    autoRun: autoRun
  }, "Test")));
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/packet.ts
var packet = __webpack_require__(57683);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/AlertTitle/AlertTitle.js
var AlertTitle = __webpack_require__(99330);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/servers/serviceprovider.ts
var serviceprovider = __webpack_require__(92952);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/servers/protocoltestserver.ts
var protocoltestserver = __webpack_require__(8695);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/random.ts
var random = __webpack_require__(80303);
;// CONCATENATED MODULE: ./src/pages/tools/prototest.tsx



 // tslint:disable-next-line: no-submodule-imports match-default-export-name


















function randomFieldPayload(field) {
  var {
    specification
  } = field; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var r = undefined;

  switch (specification.type) {
    case "bool":
      r = Math.random() > 0.5 ? 1 : 0;
      break;

    case "i8":
    case "i16":
    case "i32":
    case "u8":
    case "u16":
    case "u32":
      {
        var unsigned = specification.type[0] === "u";
        var n = Math.min(30, parseInt(specification.type.slice(1)));
        var min = (0,utils/* pick */.ei)(specification.typicalMin, specification.absoluteMin, unsigned ? 0 : -((1 << n - 1) - 1));
        var max = (0,utils/* pick */.ei)(specification.typicalMax, specification.absoluteMax, unsigned ? (1 << n) - 1 : (1 << n - 1) - 1);
        r = (0,utils/* randomRange */.rs)(min, max);
        break;
      }

    case "bytes":
      {
        // maxBytes?
        var a = (0,random/* cryptoRandomUint32 */.dG)((0,utils/* randomRange */.rs)(1, 3));
        r = new Uint8Array(a.buffer);
        break;
      }

    case "string":
    case "string0":
      {
        var ch_a = "a".charCodeAt(0);
        var ch_z = "z".charCodeAt(0);

        var _n = (0,utils/* randomRange */.rs)(4, 10);

        var s = "";

        for (var i = 0; i < _n; ++i) {
          s += String.fromCharCode((0,utils/* randomRange */.rs)(ch_a, ch_z));
        }

        r = s;
        break;
      }
  }

  return r;
}

function randomPayload(packFormat, fields) {
  if (!packFormat) throw new Error("pack format unknown");
  var rs = fields.map(randomFieldPayload);
  if (rs.some(r => r === undefined)) throw new Error("unsupported data layout");
  return rs;
}

function RegisterProtocolTest(props) {
  var {
    rw,
    ro,
    ev
  } = props;
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    specification,
    fields
  } = rw;
  var name = specification.name.replace(/^rw_/, ""); // event code and command code are the same as rw register

  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
    yield rw.sendGetAsync();
    yield ro.sendGetAsync();
  }), []);

  var testRwRo = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (log) {
      log("-- testing rw");
      var packFormat = specification.packFormat;
      var payload = randomPayload(packFormat, fields);
      log({
        payload
      });
      var data = (0,pack/* jdpack */.AV)(packFormat, payload);
      log({
        data: (0,utils/* toHex */.NC)(data)
      }); // setup observer for event counts

      var evCount = ev.count; // send over packet

      yield rw.sendSetAsync(data); // read packet

      yield rw.sendGetAsync(); // wait for response

      yield bus.delay(100); // check read

      log({
        rwdata: (0,utils/* toHex */.NC)(rw.data)
      });
      var rwpayload = (0,pack/* jdunpack */.TE)(rw.data, packFormat);
      log({
        rwpayload
      });
      if (!(0,pack/* jdpackEqual */.dW)(packFormat, payload, rwpayload)) throw new Error("expected rw " + payload + ", got " + rwpayload); // check ro

      log("-- testing ro");
      yield ro.sendGetAsync(); // wait for response

      yield bus.delay(100);
      var ropayload = (0,pack/* jdunpack */.TE)(ro.data, packFormat);
      log({
        ropayload
      });
      if (!(0,pack/* jdpackEqual */.dW)(packFormat, payload, ropayload)) throw new Error("expected ro " + payload + ", got " + ropayload); // the event should have triggered once

      log("-- testing event");
      if (packFormat !== "u8" && evCount + 1 !== ev.count) throw new Error("expected 1 event, got " + (ev.count - evCount));
    });

    return function testRwRo(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var testCommand = /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.Z)(function* (log) {
      log("-- testing cmd");
      var packFormat = specification.packFormat;
      var payload = randomPayload(packFormat, fields);
      log({
        payload
      });
      var data = (0,pack/* jdpack */.AV)(packFormat, payload);
      log({
        data: (0,utils/* toHex */.NC)(data)
      }); // send over cmd packet

      yield rw.service.sendPacketAsync(packet/* default.from */.Z.from(rw.code, data)); // read packet

      yield rw.sendGetAsync(); // wait for response

      yield bus.delay(100); // check read

      log({
        rwdata: (0,utils/* toHex */.NC)(rw.data)
      });
      var rwpayload = (0,pack/* jdunpack */.TE)(rw.data, packFormat);
      log({
        rwpayload
      });
      if (!(0,pack/* jdpackEqual */.dW)(packFormat, payload, rwpayload)) throw new Error("expected rw " + payload + ", got " + rwpayload);
    });

    return function testCommand(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var test = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.Z)(function* (log) {
      log("- testing no acks");
      rw.service.registersUseAcks = false;
      yield testRwRo(log);
      yield testCommand(log);
      log("- testing acks");
      rw.service.registersUseAcks = true;
      yield testRwRo(log);
      yield testCommand(log);
    });

    return function test(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(TestCard, {
    title: name,
    subheader: specification.packFormat || "?",
    onTest: test
  });
}

function ServiceProtocolTest(props) {
  var {
    service
  } = props;
  var {
    device
  } = service;
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var regs = service.registers();
  var rws = service.registers().filter(reg => reg.specification.kind == "rw").map(rw => {
    var roname = rw.name.replace(/^rw_/, "ro_");
    var ro = regs.find(r => r.specification.kind === "ro" && r.specification.name === roname);
    var ev = service.event(rw.code);
    return {
      rw,
      ro,
      ev
    };
  });

  var outPipeTest = /*#__PURE__*/function () {
    var _ref5 = (0,asyncToGenerator/* default */.Z)(function* (log) {
      // fill bytes with data
      var rw = service.register(constants/* ProtoTestReg.RwBytes */.M7y.RwBytes);
      var [data] = randomPayload("b", rw.fields);
      log("data: " + (0,utils/* toHex */.NC)(data)); // send over cmd packet

      rw.service.registersUseAcks = true;
      yield rw.sendSetAsync(data);
      yield rw.sendGetAsync(); // wait for response

      yield bus.delay(100);
      log("data recv: " + (0,utils/* toHex */.NC)(rw.data));
      if (!(0,utils/* bufferEq */.zo)(data, rw.data)) throw new Error("rw write failed, expected " + (0,utils/* toHex */.NC)(data) + ", got " + (0,utils/* toHex */.NC)(rw.data)); // read packet back

      var recv = yield service.receiveWithInPipe(constants/* ProtoTestCmd.CReportPipe */.PZz.CReportPipe, "u8");
      var recvu = new Uint8Array(recv.map(buf => buf[0]));
      log("received " + (0,utils/* toHex */.NC)(recvu));
      if (!(0,utils/* bufferEq */.zo)(data, recvu)) throw new Error("expected " + (0,utils/* toHex */.NC)(data) + ", got " + (0,utils/* toHex */.NC)(recv.map(buf => buf[0])));
    });

    return function outPipeTest(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 10
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h4"
  }, /*#__PURE__*/react.createElement(DeviceName/* default */.Z, {
    device: device
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react.createElement(DeviceActions/* default */.Z, {
    device: device,
    showReset: true
  })), rws === null || rws === void 0 ? void 0 : rws.map(rw => /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    key: rw.rw.id,
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react.createElement(RegisterProtocolTest, rw))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    key: "cpipe",
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react.createElement(TestCard, {
    title: "out pipe",
    subheader: "",
    onTest: outPipeTest
  })));
}

function ProtocolTest() {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    0: host,
    1: setHost
  } = (0,react.useState)(false);
  var services = (0,useChange/* default */.Z)(bus, b => b.services({
    serviceClass: constants/* SRV_PROTO_TEST */.$Bn
  }));

  var toggleHost = () => setHost(!host); // add virtual device


  (0,react.useEffect)(() => {
    if (!host) return () => {};
    var d = new serviceprovider/* default */.Z([new protocoltestserver/* default */.Z()]);
    bus.addServiceProvider(d);
    return () => bus.removeServiceProvider(d);
  }, [host]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Protocol Test"), /*#__PURE__*/react.createElement("p", null, "A helper page to test the Jacdac protocol against a \xA0", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/services/prototest/"
  }, "protocol test"), " service."), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    key: "connect",
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, {
    serviceClass: constants/* SRV_PROTO_TEST */.$Bn
  })), services === null || services === void 0 ? void 0 : services.map(service => /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    key: service.id,
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(ServiceProtocolTest, {
    service: service
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, /*#__PURE__*/react.createElement(AlertTitle/* default */.Z, null, "Developer zone"), /*#__PURE__*/react.createElement(Switch/* default */.Z, {
    checked: host,
    onChange: toggleHost
  }), /*#__PURE__*/react.createElement("label", null, "Add simulator")))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-prototest-tsx-30bac547996c5a20c829.js.map