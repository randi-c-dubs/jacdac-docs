"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7086],{

/***/ 50144:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34621);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38582);






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      minWidth: 56,
      color: theme.palette.action.active,
      flexShrink: 0,
      display: 'inline-flex'
    },

    /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      marginTop: 8
    }
  };
};
/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */

var ListItemIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ListItemIcon(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["classes", "className"]);

  var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.root, className, context.alignItems === 'flex-start' && classes.alignItemsFlexStart),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(styles, {
  name: 'MuiListItemIcon'
})(ListItemIcon));

/***/ }),

/***/ 65735:
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
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'ChevronRight');

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

/***/ 80837:
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
  d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"
}), 'SettingsBrightness');

exports.Z = _default;

/***/ }),

/***/ 96898:
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
  d: "M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"
}), 'SystemUpdateAlt');

exports.Z = _default;

/***/ }),

/***/ 70654:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46982);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


/* harmony default export */ __webpack_exports__["Z"] = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M4.703 2.615s-.505.05-.72.15a3.011 3.011 0 00-.391.221c-.22.12-.42.266-.6.444-.52.516-.795 1.2-.834 2.05a6.857 6.857 0 00-.066.961V8.36a5.117 5.117 0 01-.137 1.032 1.73 1.73 0 01-.4.773 2.006 2.006 0 00-.15.149 6.534 6.534 0 01-.848.617c-.303.196-.481.474-.537.83v.017c-.01.07-.017.14-.018.215L0 12.006v.008c0 .08.003.156.012.226h.002c.024.214.082.378.177.492.129.153.345.328.649.52.304.192.552.398.74.62.19.221.332.549.428.985.037.17.065.54.084 1.106v1.514c0 .285.023.542.056.787.001.047 0 .092.002.14.007.587.135 1.107.385 1.559.25.453.604.803 1.063 1.05.458.248.978.372 1.56.372h14.139c.262 0 .505-.05.72-.15.139-.064.267-.14.391-.221.218-.12.42-.266.6-.444.52-.516.795-1.2.834-2.05.042-.299.066-.618.066-.963v-1.918c.014-.372.059-.715.137-1.03.078-.314.213-.572.4-.775a1.98 1.98 0 00.15-.146c.2-.179.48-.384.848-.618.303-.196.481-.475.537-.832l.002-.015a1.66 1.66 0 00.018-.217V11.988c0-.08-.004-.156-.012-.226h-.002c-.024-.214-.082-.378-.177-.492-.129-.153-.345-.328-.649-.52a3.208 3.208 0 01-.74-.62c-.19-.221-.332-.55-.428-.987-.037-.17-.065-.538-.084-1.104V6.523c0-.285-.023-.542-.056-.787-.001-.047 0-.092-.002-.14-.007-.587-.135-1.107-.385-1.559a2.598 2.598 0 00-1.063-1.05c-.458-.248-.978-.372-1.56-.372H4.703zm1.22 1.24c.307 0 .533.058.673.172.115.096.168.24.168.453a.885.885 0 01-.069.36.501.501 0 01-.142.201.346.346 0 01-.18.07c-.31.042-.543.095-.713.164a1.03 1.03 0 00-.543.536c-.093.201-.149.47-.174.818-.022.301-.033.725-.033 1.293-.012.796-.058 1.422-.137 1.861-.07.398-.206.74-.4 1.02-.197.282-.499.552-.898.804l-.616.39.618.386c.286.18.52.368.695.558.166.18.304.407.414.672.115.277.2.614.248 1.004.051.413.076.908.076 1.47 0 .587.013 1.025.037 1.34.03.367.094.64.196.835.123.236.303.403.537.496.168.067.395.114.693.148a.404.404 0 01.268.16c.081.1.123.259.123.471 0 .308-.064.608-.84.608-.477 0-.898-.094-1.25-.282a2.006 2.006 0 01-.813-.785 2.402 2.402 0 01-.31-1.197c-.048-2.666-.098-3.199-.139-3.37-.115-.472-.286-.83-.525-1.097a3.373 3.373 0 00-.776-.633c-.216-.13-.375-.254-.47-.369-.027-.032-.088-.136-.088-.416 0-.288.09-.471.293-.596.454-.28.781-.522.998-.746.244-.251.415-.565.51-.931.084-.328.132-.788.148-1.407.015-.58.03-1.305.049-2.177.016-.706.229-1.25.654-1.666.426-.416.988-.618 1.719-.618zm12.153 0c.477 0 .898.095 1.25.282.348.185.612.442.813.785.2.343.305.746.31 1.197.048 2.666.098 3.199.139 3.37.115.472.286.83.525 1.097.216.24.476.452.776.633.217.131.376.255.47.369.027.032.088.136.088.416 0 .287-.09.471-.293.596-.454.28-.78.522-.998.746-.243.25-.415.565-.51.931-.084.328-.132.788-.148 1.407-.015.58-.03 1.305-.049 2.177-.016.706-.229 1.25-.654 1.666-.426.416-.988.618-1.719.618-.307 0-.533-.058-.672-.172-.116-.096-.168-.24-.168-.453 0-.135.021-.253.069-.36a.512.512 0 01.14-.201.353.353 0 01.182-.07c.31-.042.543-.095.713-.164.238-.099.424-.284.54-.538.094-.201.152-.468.177-.816.021-.301.033-.727.033-1.295.012-.796.058-1.42.137-1.86.07-.397.204-.74.398-1.019.196-.281.499-.552.898-.804l.616-.39-.616-.386a3.412 3.412 0 01-.695-.558 2.275 2.275 0 01-.416-.672 3.871 3.871 0 01-.246-1.004 12.22 12.22 0 01-.078-1.47c0-.587-.012-1.025-.037-1.34-.03-.367-.092-.64-.194-.835a1.021 1.021 0 00-.539-.496 2.76 2.76 0 00-.691-.148.4.4 0 01-.268-.16c-.082-.1-.123-.259-.123-.471 0-.308.064-.608.84-.608zm-6.29 1.348c.052-.005.341-.005.394 0v.01a1.524 1.524 0 011.287 1.457c0 .62-.332.891-.332.916-.33.346-.123.744.467.695 0 0 2.4.012 2.445 0a.576.576 0 01.422.555l-.002 2.574c-.106.3-.396.36-.658.111-.025 0-.296-.332-.916-.332a1.521 1.521 0 00-1.457 1.286h-.008a4.897 4.897 0 000 .394h.008a1.524 1.524 0 001.457 1.287c.62 0 .89-.332.916-.332.27-.256.557-.225.658.112v2.783a.562.562 0 01-.563.562H8.061a.561.561 0 01-.563-.562V8.836c0-.261.18-.492.422-.555.046.012 2.443 0 2.443 0 .659.032.798-.349.469-.695 0-.025-.332-.296-.332-.916a1.521 1.521 0 011.285-1.457v-.01z",
  strokeWidth: ".75"
})));

/***/ }),

/***/ 37086:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ToolsDrawer; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(90293);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(75167);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(4381);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(50144);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(38030);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js
var Drawer = __webpack_require__(71892);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(80791);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(62846);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./src/components/layout.tsx + 25 modules
var layout = __webpack_require__(48534);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(6018);
;// CONCATENATED MODULE: ./node_modules/@material-ui/icons/esm/OpenInNew.js


/* harmony default export */ var OpenInNew = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/react.createElement("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
}), 'OpenInNew'));
// EXTERNAL MODULE: ./src/components/ui/useUnitConverter.ts
var useUnitConverter = __webpack_require__(44111);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ChevronRight.js
var ChevronRight = __webpack_require__(65735);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/SettingsBrightness.js
var SettingsBrightness = __webpack_require__(80837);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/SystemUpdateAlt.js
var SystemUpdateAlt = __webpack_require__(96898);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Wifi.js
var Wifi = __webpack_require__(14695);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Settings.js
var Settings = __webpack_require__(88237);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/FiberManualRecord.js
var FiberManualRecord = __webpack_require__(95067);
// EXTERNAL MODULE: ./src/components/icons/MakeCodeIcon.tsx
var MakeCodeIcon = __webpack_require__(70654);
// EXTERNAL MODULE: ./src/components/ui/DarkModeContext.tsx
var DarkModeContext = __webpack_require__(91350);
// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__(50048);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/jacdac/providerbus.ts + 24 modules
var providerbus = __webpack_require__(10358);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/components/shell/ToolsDrawer.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name









var useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  drawer: {
    width: layout/* TOOLS_DRAWER_WIDTH */.wW + "rem",
    flexShrink: 0,
    [theme.breakpoints.down(layout/* MOBILE_BREAKPOINT */.Gh)]: {
      width: layout/* MOBILE_TOOLS_DRAWER_WIDTH */.Po + "rem"
    }
  },
  drawerPaper: {
    width: layout/* TOOLS_DRAWER_WIDTH */.wW + "rem",
    [theme.breakpoints.down(layout/* MOBILE_BREAKPOINT */.Gh)]: {
      width: layout/* MOBILE_TOOLS_DRAWER_WIDTH */.Po + "rem"
    }
  },
  drawerHeader: _objectSpread(_objectSpread({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar), {}, {
    justifyContent: "flex-start"
  })
}));

function ToolsListItem(props) {
  var {
    text,
    to,
    href,
    icon,
    onClick,
    onClose
  } = props;
  console.log({
    text,
    to,
    href,
    icon
  });
  return to || href ? /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: to,
    href: href,
    "aria-label": "Toggle Dark Mode",
    onClick: onClose
  }, /*#__PURE__*/react.createElement(ListItem/* default */.Z, {
    button: true
  }, /*#__PURE__*/react.createElement(ListItemIcon/* default */.Z, null, icon), /*#__PURE__*/react.createElement(ListItemText/* default */.Z, {
    primaryTypographyProps: {
      color: "textPrimary"
    },
    primary: /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", null, text), /^https:\/\//.test(href) && /*#__PURE__*/react.createElement(OpenInNew, {
      fontSize: "small",
      color: "action"
    }))
  }))) : /*#__PURE__*/react.createElement(ListItem/* default */.Z, {
    button: true,
    onClick: onClick,
    "aria-label": text
  }, /*#__PURE__*/react.createElement(ListItemIcon/* default */.Z, null, icon), /*#__PURE__*/react.createElement(ListItemText/* default */.Z, {
    primaryTypographyProps: {
      color: "textPrimary"
    },
    primary: text
  }));
}

function ToolsDrawer() {
  var classes = useStyles();
  var {
    toolsMenu,
    setToolsMenu,
    toggleShowDeviceHostsDialog
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var {
    enqueueSnackbar
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var {
    toggleDarkMode,
    darkMode
  } = (0,react.useContext)(DarkModeContext/* default */.Z);
  var {
    converters,
    setConverter
  } = (0,useUnitConverter/* useUnitConverters */.O)();

  var handleUnitClick = (unit, name, names) => () => {
    var index = (names.indexOf(name) + 1) % names.length;
    var newName = names[index];
    setConverter(unit, newName);
    enqueueSnackbar("Using " + newName + " for " + (0,jdspec/* resolveUnit */.bM)(unit).name, "success");
  };

  var handleClick = link => () => {
    setToolsMenu(false);
    link === null || link === void 0 ? void 0 : link.action();
  };

  var handleDrawerClose = () => {
    setToolsMenu(false);
  };

  var handleDarkMode = () => {
    setToolsMenu(false);
    toggleDarkMode();
  };

  var links = [{
    text: "Start simulator",
    action: toggleShowDeviceHostsDialog,
    icon: /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
      kind: constants/* VIRTUAL_DEVICE_NODE_NAME */.UX7
    })
  }, {
    text: "Data Collector",
    to: "/tools/collector/",
    icon: /*#__PURE__*/react.createElement(FiberManualRecord/* default */.Z, null)
  }, providerbus/* UIFlags.peers */.A.peers && {
    text: "Peers",
    to: "/tools/peers/",
    icon: /*#__PURE__*/react.createElement(Wifi/* default */.Z, null)
  }, {}, {
    text: "Device Settings",
    to: "/tools/settings/",
    icon: /*#__PURE__*/react.createElement(Settings/* default */.Z, null)
  }, {
    text: "Firmware Update",
    to: "/tools/updater/",
    icon: /*#__PURE__*/react.createElement(SystemUpdateAlt/* default */.Z, null)
  }, {// separator
  }, {
    text: "MakeCode",
    href: (0,gatsby_browser_entry.withPrefix)("/editors/makecode"),
    icon: /*#__PURE__*/react.createElement(MakeCodeIcon/* default */.Z, null)
  },
  /*
  {
      text: "Jupyter Lab",
      to: "/tools/jupyterlab",
      icon: <JupyterIcon />,
  },
      {
          text: "Edge Impulse",
          to: "/tools/edge-impulse",
          icon: <EdgeImpulseIcon />
      },
  */
  {// separator
  }, {
    text: "Service Editor",
    to: "/tools/service-editor/",
    icon: /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
      kind: constants/* SERVICE_NODE_NAME */.M_U
    })
  }, {
    text: "Device registration",
    to: "/tools/device-registration/",
    icon: /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
      kind: constants/* DEVICE_NODE_NAME */.tY6
    })
  }, {// separator
  }].concat((0,toConsumableArray/* default */.Z)(converters.map(_ref => {
    var {
      unit,
      name,
      names
    } = _ref;
    return {
      text: name + " (change to " + names.filter(n => n !== name).join(", ") + ")",
      action: handleUnitClick(unit, name, names)
    };
  }))).filter(l => !!l);
  if (!toolsMenu) return null;
  return /*#__PURE__*/react.createElement(Drawer/* default */.ZP, {
    className: classes.drawer,
    variant: "persistent",
    anchor: "right",
    open: toolsMenu,
    classes: {
      paper: classes.drawerPaper
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.drawerHeader
  }, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.IconButton, {
    "aria-label": "Collapse",
    onClick: handleDrawerClose
  }, /*#__PURE__*/react.createElement(ChevronRight/* default */.Z, null))), /*#__PURE__*/react.createElement(List/* default */.Z, null, links.map((link, i) => link.text ? /*#__PURE__*/react.createElement(ToolsListItem, Object.assign({
    key: link.text
  }, link, {
    onClick: handleClick(link),
    onClose: handleDrawerClose
  })) : /*#__PURE__*/react.createElement(Divider/* default */.Z, {
    key: "div" + i
  })), /*#__PURE__*/react.createElement(Divider/* default */.Z, null), /*#__PURE__*/react.createElement(ListItem/* default */.Z, {
    button: true,
    onClick: handleDarkMode,
    "aria-label": "Toggle Dark Mode"
  }, /*#__PURE__*/react.createElement(ListItemIcon/* default */.Z, null, /*#__PURE__*/react.createElement(SettingsBrightness/* default */.Z, null)), /*#__PURE__*/react.createElement(ListItemText/* default */.Z, null, darkMode === "light" ? "Dark Mode" : "Light mode"))));
}

/***/ })

}]);
//# sourceMappingURL=7086-f228ed6e964a7db2b7b5.js.map