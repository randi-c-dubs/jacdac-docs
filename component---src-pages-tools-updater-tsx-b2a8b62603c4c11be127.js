"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[6366],{

/***/ 99809:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _toArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59968);
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96410);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82961);
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28970);




function _toArray(arr) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(arr) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
}

/***/ }),

/***/ 31296:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99809);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28481);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8812);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85505);
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39055);
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58063);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34621);
/* harmony import */ var _AccordionContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9866);
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12933);













var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        '&:before': {
          display: 'none'
        }
      },
      '&$expanded': {
        margin: '16px 0',
        '&:first-child': {
          marginTop: 0
        },
        '&:last-child': {
          marginBottom: 0
        },
        '&:before': {
          opacity: 0
        }
      },
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: 0,
      '&:first-child': {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius
      },
      '&:last-child': {
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        // Fix a rendering issue on Edge
        '@supports (-ms-ime-align: auto)': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {}
  };
};
var Accordion = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Accordion(props, ref) {
  var childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$defaultExpande = props.defaultExpanded,
      defaultExpanded = _props$defaultExpande === void 0 ? false : _props$defaultExpande,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      expandedProp = props.expanded,
      onChange = props.onChange,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Collapse__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(props, ["children", "classes", "className", "defaultExpanded", "disabled", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"]);

  var _useControlled = (0,_utils_useControlled__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'Accordion',
    state: 'expanded'
  }),
      _useControlled2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(_useControlled, 2),
      expanded = _useControlled2[0],
      setExpandedState = _useControlled2[1];

  var handleChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event) {
    setExpandedState(!expanded);

    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);

  var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(childrenProp),
      _React$Children$toArr2 = (0,_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(_React$Children$toArr),
      summary = _React$Children$toArr2[0],
      children = _React$Children$toArr2.slice(1);

  var contextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return {
      expanded: expanded,
      disabled: disabled,
      toggle: handleChange
    };
  }, [expanded, disabled, handleChange]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Paper__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(classes.root, className, expanded && classes.expanded, disabled && classes.disabled, !square && classes.rounded),
    ref: ref,
    square: square
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AccordionContext__WEBPACK_IMPORTED_MODULE_10__/* .default.Provider */ .Z.Provider, {
    value: contextValue
  }, summary), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
    in: expanded,
    timeout: "auto"
  }, TransitionProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "aria-labelledby": summary.props.id,
    id: summary.props['aria-controls'],
    role: "region"
  }, children)));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(styles, {
  name: 'MuiAccordion'
})(Accordion));

/***/ }),

/***/ 9866:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */

var AccordionContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

if (false) {}

/* harmony default export */ __webpack_exports__["Z"] = (AccordionContext);

/***/ }),

/***/ 37171:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34621);





var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      padding: theme.spacing(1, 2, 2)
    }
  };
};
var AccordionDetails = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function AccordionDetails(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(classes.root, className),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(styles, {
  name: 'MuiAccordionDetails'
})(AccordionDetails));

/***/ }),

/***/ 95371:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85505);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67055);
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23729);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34621);
/* harmony import */ var _Accordion_AccordionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9866);


/* eslint-disable jsx-a11y/aria-role */








var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      minHeight: 8 * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: theme.spacing(0, 2),
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      },
      '&$expanded': {
        minHeight: 64
      },
      '&$focused, &$focusVisible': {
        backgroundColor: theme.palette.action.focus
      },
      '&$disabled': {
        opacity: theme.palette.action.disabledOpacity
      }
    },

    /* Pseudo-class applied to the root element, children wrapper element and `IconButton` component if `expanded={true}`. */
    expanded: {},

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focused: {},

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the children wrapper element. */
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '&$expanded': {
        margin: '20px 0'
      }
    },

    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&:hover': {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: 'transparent'
      },
      '&$expanded': {
        transform: 'rotate(180deg)'
      }
    }
  };
};
var AccordionSummary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function AccordionSummary(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      expandIcon = props.expandIcon,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$IconButtonProp = props.IconButtonProps,
      IconButtonProps = _props$IconButtonProp === void 0 ? {} : _props$IconButtonProp,
      onClick = props.onClick,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "classes", "className", "expandIcon", "focusVisibleClassName", "IconButtonProps", "onClick"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Accordion_AccordionContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z),
      _React$useContext$dis = _React$useContext.disabled,
      disabled = _React$useContext$dis === void 0 ? false : _React$useContext$dis,
      expanded = _React$useContext.expanded,
      toggle = _React$useContext.toggle;

  var handleChange = function handleChange(event) {
    if (toggle) {
      toggle(event);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    focusRipple: false,
    disableRipple: true,
    disabled: disabled,
    component: "div",
    "aria-expanded": expanded,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.root, className, disabled && classes.disabled, expanded && classes.expanded),
    focusVisibleClassName: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.focusVisible, classes.focused, focusVisibleClassName),
    onClick: handleChange,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.content, expanded && classes.expanded)
  }, children), expandIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(classes.expandIcon, expanded && classes.expanded),
    edge: "end",
    component: "div",
    tabIndex: null,
    role: null,
    "aria-hidden": true
  }, IconButtonProps), expandIcon));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(styles, {
  name: 'MuiAccordionSummary'
})(AccordionSummary));

/***/ }),

/***/ 38030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81253);
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

/***/ 86426:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(19756);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
;// CONCATENATED MODULE: ./src/components/ServiceButton.tsx

var _excluded = ["service", "onClick"];


function ServiceButton(props) {
  var service = props.service,
      onClick = props.onClick,
      others = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

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










var useStyles = (0,makeStyles/* default */.Z)(function () {
  return (0,createStyles/* default */.Z)({
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
  });
});

function navigateToService(service) {
  var spec = service.specification;
  if (spec) (0,gatsby_browser_entry.navigate)("/services/" + spec.shortId + "/"); // todo spec
}

function DeviceDescription(props) {
  var device = props.device;
  var register = (0,useChange/* default */.Z)(device, function (_) {
    var _$service;

    return _ === null || _ === void 0 ? void 0 : (_$service = _.service(0)) === null || _$service === void 0 ? void 0 : _$service.register(constants/* ControlReg.DeviceDescription */.toU.DeviceDescription);
  });

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(register),
      description = _useRegisterUnpackedV[0];

  return /*#__PURE__*/react.createElement("span", null, description || "");
}

function DeviceCard(props) {
  var device = props.device,
      children = props.children,
      action = props.action,
      content = props.content,
      showDeviceId = props.showDeviceId,
      showDescription = props.showDescription,
      showTemperature = props.showTemperature,
      showFirmware = props.showFirmware,
      showServices = props.showServices;
  var classes = useStyles();
  var services = (0,useChange/* default */.Z)(device, function () {
    return device.services().filter(function (service) {
      return service.serviceClass != constants/* SRV_CONTROL */.gm9 && service.serviceClass != constants/* SRV_LOGGER */.w9j;
    });
  });
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
  }), content), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, action, showServices && (services === null || services === void 0 ? void 0 : services.map(function (service) {
    return /*#__PURE__*/react.createElement(ServiceButton, {
      key: service.id,
      service: service,
      onClick: function onClick() {
        return navigateToService(service);
      }
    });
  }))), children);
}

/***/ }),

/***/ 63037:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GithubRepositoryCardHeader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95823);
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99819);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14429);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36176);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2285);
 // tslint:disable-next-line: no-submodule-imports







function MakeCodeFolderLink(props) {
  var slug = props.slug,
      folder = props.folder,
      repo = props.repo;

  var _useFetchJSON = (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .useFetchJSON */ .J$)(slug, repo.default_branch, "pxt.json", "application/json"),
      pxtJson = _useFetchJSON.response;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    href: repo.html_url + "/tree/" + repo.default_branch + "/" + folder,
    target: "blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    component: "span",
    variant: "h5"
  }, repo.name + "/ " + ((pxtJson === null || pxtJson === void 0 ? void 0 : pxtJson.name) || folder)));
}

function GithubRepositoryCardHeader(props) {
  var _repo$organization;

  var slug = props.slug,
      showRelease = props.showRelease;

  var _useRepository = (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .useRepository */ .Ux)(slug),
      repo = _useRepository.response,
      repoLoading = _useRepository.loading,
      status = _useRepository.status;

  var _useLatestRelease = (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .useLatestRelease */ .G$)(showRelease && slug),
      release = _useLatestRelease.response;

  var _normalizeSlug = (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .normalizeSlug */ .E1)(slug),
      folder = _normalizeSlug.folder;

  var title = repo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    component: "span",
    variant: "h6"
  }, (_repo$organization = repo.organization) === null || _repo$organization === void 0 ? void 0 : _repo$organization.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    ml: 0.5,
    mr: 0.5
  }, "/"), folder ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MakeCodeFolderLink, {
    slug: slug,
    folder: folder,
    repo: repo
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    href: repo.html_url,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    component: "span",
    variant: "h5"
  }, repo.name))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    href: "https://github.com/" + slug,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    component: "span",
    variant: "h6"
  }, slug)), repoLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, null), status !== 403 && !repoLoading && !repo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    component: "p",
    variant: "caption"
  }, "Unable to find repository."));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    title: title,
    subheader: release && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
      color: "textSecondary",
      target: "_blank",
      to: release.html_url
    }, release.version),
    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null)
  });
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








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(function (theme) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)({
    button: {
      marginLeft: theme.spacing(2)
    }
  });
});

function NoSsrConnectAlert(props) {
  var classes = useStyles();
  var serviceClass = props.serviceClass,
      closeable = props.closeable;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z),
      bus = _useContext.bus;

  var transports = bus.transports;
  var devices = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(bus, function (b) {
    return b.devices({
      serviceClass: serviceClass,
      ignoreSelf: true
    });
  });
  var spec = (0,_jacdac_ts_src_jdom_spec__WEBPACK_IMPORTED_MODULE_2__/* .serviceSpecificationFromClassIdentifier */ .d5)(serviceClass); // don't show if no transport, some devices

  if (!transports.length || devices !== null && devices !== void 0 && devices.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    displayPrint: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    severity: "info",
    closeable: closeable
  }, !spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect your device?"), spec && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Did you connect a ", spec.name, " device?"), transports.map(function (transport) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_buttons_ConnectButton__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      key: transport.type,
      transport: transport,
      className: classes.button,
      full: true,
      transparent: true
    });
  })));
}

function ConnectAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NoSsrConnectAlert, props));
}

/***/ }),

/***/ 54272:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ FirmwareCard; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92137);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31296);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95371);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(37171);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(80791);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4381);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(38030);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(65541);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(83332);
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99819);
/* harmony import */ var _useFirmwareBlobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29394);
/* harmony import */ var _GithubRepositoryCardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63037);
/* harmony import */ var _ui_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95453);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36176);
/* harmony import */ var _ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15789);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47739);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2285);












function FirmwareCard(props) {
  var slug = props.slug;

  var _useLatestReleases = (0,_github__WEBPACK_IMPORTED_MODULE_2__/* .useLatestReleases */ .Fm)(slug),
      releases = _useLatestReleases.response;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      downloading = _useState[0],
      setDownloading = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined),
      release = _useState3[0],
      setRelease = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      firmwaresExpanded = _useState4[0],
      setFirmwaresExpanded = _useState4[1];

  var _useFirmwareBlob = (0,_useFirmwareBlobs__WEBPACK_IMPORTED_MODULE_3__/* .useFirmwareBlob */ .x)(slug),
      setFirmwareFile = _useFirmwareBlob.setFirmwareFile,
      firmwareBlobs = _useFirmwareBlob.firmwareBlobs;

  var tag = (release === null || release === void 0 ? void 0 : release.version) || "";
  var disabled = downloading;
  var version = firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs[0].version; // version starts with v

  var updateAvailable = !!tag && !!version && tag !== version.replace(/^v/, "").substr(0, tag.length);
  console.log({
    version: version,
    tag: tag,
    updateAvailable: updateAvailable
  });
  var downloadColor = updateAvailable ? "primary" : "inherit";
  var downloadVariant = updateAvailable ? "contained" : "text"; // initialize with latest release

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (releases !== null && releases !== void 0 && releases.length && !release) setRelease(releases[0]);
  }, [releases]);

  var handleReleaseChange = function handleReleaseChange(ev) {
    var v = ev.target.value;
    var rel = releases === null || releases === void 0 ? void 0 : releases.find(function (r) {
      return r.version === v;
    });
    setRelease(rel);
  };

  var handleGitHubReleaseDownload = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var firmware;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setError("");
              setDownloading(true);
              _context.next = 5;
              return (0,_github__WEBPACK_IMPORTED_MODULE_2__/* .fetchReleaseBinary */ .dW)(slug, tag);

            case 5:
              firmware = _context.sent;
              if (firmware) setFirmwareFile(tag, firmware);

            case 7:
              _context.prev = 7;
              setDownloading(false);
              return _context.finish(7);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0,, 7, 10]]);
    }));

    return function handleGitHubReleaseDownload() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClear = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              try {
                setError("");
                setDownloading(true);
                setFirmwareFile(tag, undefined);
              } finally {
                setDownloading(false);
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClear() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_GithubRepositoryCardHeader__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    slug: slug
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, null, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    severity: "error"
  }, error), !(firmwareBlobs !== null && firmwareBlobs !== void 0 && firmwareBlobs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    severity: "info"
  }, "No firmware binary found in repository."), !!(firmwareBlobs !== null && firmwareBlobs !== void 0 && firmwareBlobs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    mb: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    expanded: firmwaresExpanded,
    onChange: function onChange() {
      return setFirmwaresExpanded(!firmwaresExpanded);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
    variant: "body2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", null, version), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, " ", "(", firmwareBlobs.length, " firmwares)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
    dense: true
  }, firmwareBlobs.map(function (blob) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z, {
      key: blob.firmwareIdentifier
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
      primary: blob.name,
      secondary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_6__.Link, {
        to: "/firmwares/0x" + blob.firmwareIdentifier.toString(16)
      }, "0x" + blob.firmwareIdentifier.toString(16))
    }));
  }))))), (releases === null || releases === void 0 ? void 0 : releases.length) === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_Alert__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    severity: "warning"
  }, "No releases found."), !!(releases !== null && releases !== void 0 && releases.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_SelectWithLabel__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    fullWidth: true,
    helperText: "choose a version",
    value: tag,
    onChange: handleReleaseChange
  }, releases === null || releases === void 0 ? void 0 : releases.map(function (rel) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, {
      key: rel.version,
      value: rel.version
    }, rel.version);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null, !downloading && release && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    disabled: downloading,
    color: downloadColor,
    variant: downloadVariant,
    "aria-label": "Download last release from " + slug,
    onClick: handleGitHubReleaseDownload
  }, "Download"), !downloading && (firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    disabled: disabled,
    variant: "text",
    "arial-label": "Clear",
    onClick: handleClear
  }, "Clear"), downloading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null)));
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

/***/ 15789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SelectWithLabel; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31690);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89711);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(706);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65541);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78942);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);



function SelectWithLabel(props) {
  var label = props.label,
      fullWidth = props.fullWidth,
      required = props.required,
      disabled = props.disabled,
      value = props.value,
      error = props.error,
      placeholder = props.placeholder,
      onChange = props.onChange,
      onClose = props.onClose,
      children = props.children,
      helperText = props.helperText,
      type = props.type,
      none = props.none;
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var descrId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var id = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var hasDescr = !!helperText || !!error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    fullWidth: fullWidth,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    id: labelId,
    key: "label"
  }, required ? label + " *" : label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    id: id,
    disabled: disabled,
    label: label,
    value: value,
    error: !!error,
    fullWidth: true,
    placeholder: placeholder,
    type: type,
    labelId: labelId,
    "aria-describedby": hasDescr ? descrId : undefined,
    onChange: onChange,
    onClose: onClose
  }, none !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    key: "none",
    value: ""
  }, none), children), hasDescr && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    id: descrId
  }, error || helperText));
}

/***/ }),

/***/ 64973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SwitchWithLabel; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19756);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48086);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

var _excluded = ["label"];


function SwitchWithLabel(props) {
  var label = props.label,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, rest),
    label: label
  });
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
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP),
      drawerType = _useContext.drawerType;

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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(92137);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
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



function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









function useFirmwareRepos(showAllRepos) {
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var _useState = (0,react.useState)([]),
      repos = _useState[0],
      setRepos = _useState[1];

  var devices = (0,useEventRaised/* default */.Z)(constants/* DEVICE_CHANGE */.RoP, bus, function () {
    return bus.devices({
      announced: true,
      ignoreSelf: true
    });
  });
  var bootloaders = devices.filter(function (device) {
    return device.hasService(constants/* SRV_BOOTLOADER */.PWm);
  });
  var registers = devices.filter(function (device) {
    return !device.hasService(constants/* SRV_BOOTLOADER */.PWm);
  }) // not a bootloader
  .map(function (device) {
    var _device$service;

    return (_device$service = device.service(0)) === null || _device$service === void 0 ? void 0 : _device$service.register(constants/* ControlReg.FirmwareIdentifier */.toU.FirmwareIdentifier);
  }).filter(function (reg) {
    return !!reg;
  });
  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(mounted) {
      var repos, firmwares, _iterator, _step, register, firmwareIdentifier, _iterator2, _step2, bootloader, boot, bl_announce, resp, _resp$jdunpack, _firmwareIdentifier, urepos;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              repos = [];

              if (!showAllRepos) {
                _context.next = 5;
                break;
              }

              repos = (0,spec/* deviceSpecifications */.qx)().map(function (spec) {
                return spec.repo;
              });
              _context.next = 34;
              break;

            case 5:
              firmwares = []; // ask firmware registers

              _iterator = _createForOfIteratorHelperLoose(registers);

            case 7:
              if ((_step = _iterator()).done) {
                _context.next = 15;
                break;
              }

              register = _step.value;
              _context.next = 11;
              return register.refresh(true);

            case 11:
              firmwareIdentifier = register.intValue;
              if (firmwareIdentifier !== undefined && firmwares.indexOf(firmwareIdentifier) < 0) firmwares.push(firmwareIdentifier);

            case 13:
              _context.next = 7;
              break;

            case 15:
              _iterator2 = _createForOfIteratorHelperLoose(bootloaders);

            case 16:
              if ((_step2 = _iterator2()).done) {
                _context.next = 33;
                break;
              }

              bootloader = _step2.value;
              boot = bootloader.services({
                serviceClass: constants/* SRV_BOOTLOADER */.PWm
              })[0];
              bl_announce = packet/* default.onlyHeader */.Z.onlyHeader(constants/* BootloaderCmd.Info */.e96.Info);
              _context.prev = 20;
              _context.next = 23;
              return boot.sendCmdAwaitResponseAsync(bl_announce);

            case 23:
              resp = _context.sent;
              _resp$jdunpack = resp.jdunpack("u32 u32 u32 u32"), _firmwareIdentifier = _resp$jdunpack[3];
              if (_firmwareIdentifier !== undefined && firmwares.indexOf(_firmwareIdentifier) < 0) firmwares.push(_firmwareIdentifier);
              _context.next = 31;
              break;

            case 28:
              _context.prev = 28;
              _context.t0 = _context["catch"](20);
              console.warn("bootloader firmware identifier failed", _context.t0);

            case 31:
              _context.next = 16;
              break;

            case 33:
              repos = firmwares.map(function (fw) {
                var _deviceSpecificationF;

                return (_deviceSpecificationF = (0,spec/* deviceSpecificationFromFirmwareIdentifier */.IL)(fw)) === null || _deviceSpecificationF === void 0 ? void 0 : _deviceSpecificationF.repo;
              }).filter(function (repo) {
                return !!repo;
              });

            case 34:
              if (mounted) {
                urepos = (0,utils/* unique */.Tw)(repos);
                setRepos(urepos);
              }

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[20, 28]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [devices.map(function (dev) {
    return dev.id;
  }).join(), registers.map(function (reg) {
    return reg.id;
  }).join(), showAllRepos]);
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







var ImportButton = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 119).then(__webpack_require__.bind(__webpack_require__, 20119));
});
var LOCAL_FILE_SLUG = "local file";
function LocalFileFirmwareCard() {
  var slug = LOCAL_FILE_SLUG;

  var _useState = (0,react.useState)(false),
      downloading = _useState[0],
      setDownloading = _useState[1];

  var _useState2 = (0,react.useState)(""),
      error = _useState2[0],
      setError = _useState2[1];

  var _useFirmwareBlob = (0,useFirmwareBlobs/* useFirmwareBlob */.x)(slug),
      setFirmwareFile = _useFirmwareBlob.setFirmwareFile,
      firmwareBlobs = _useFirmwareBlob.firmwareBlobs;

  var disabled = downloading;
  var version = firmwareBlobs === null || firmwareBlobs === void 0 ? void 0 : firmwareBlobs[0].version;

  var handleFiles = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(files) {
      var file;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = files[0];

              if (!file) {
                _context.next = 9;
                break;
              }

              _context.prev = 2;
              setDownloading(true);
              _context.next = 6;
              return setFirmwareFile(undefined, file);

            case 6:
              _context.prev = 6;
              setDownloading(false);
              return _context.finish(6);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2,, 6, 9]]);
    }));

    return function handleFiles(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClear = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              try {
                setError("");
                setDownloading(true);
                setFirmwareFile(undefined, undefined);
              } finally {
                setDownloading(false);
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

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
  }, firmwareBlobs.map(function (blob) {
    return /*#__PURE__*/react.createElement(ListItem/* default */.Z, {
      key: blob.firmwareIdentifier
    }, /*#__PURE__*/react.createElement(ListItemText/* default */.Z, {
      primary: blob.name,
      secondary: "0x" + blob.firmwareIdentifier.toString(16)
    }));
  }))), /*#__PURE__*/react.createElement(CardActions/* default */.Z, null, !downloading && /*#__PURE__*/react.createElement(Suspense/* default */.Z, null, /*#__PURE__*/react.createElement(ImportButton, {
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
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)();
  var safeBoot = (0,useChange/* default */.Z)(bus, function (b) {
    return b.safeBoot;
  });
  var firmwareRepos = useFirmwareRepos(safeBoot);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({}, gridBreakpoints, {
    item: true,
    key: "localfile"
  }), /*#__PURE__*/react.createElement(LocalFileFirmwareCard, null)), firmwareRepos.map(function (firmwareRepo) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({}, gridBreakpoints, {
      item: true,
      key: "firmwarerepo" + firmwareRepo
    }), /*#__PURE__*/react.createElement(FirmwareCard/* default */.Z, {
      slug: firmwareRepo
    }));
  }));
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
  var device = props.device,
      blob = props.blob,
      ignoreFirmwareCheck = props.ignoreFirmwareCheck;

  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var _useContext2 = (0,react.useContext)(AppContext/* default */.ZP),
      setError = _useContext2.setError;

  var _useState = (0,react.useState)(0),
      progress = _useState[0],
      setProgress = _useState[1];

  var firmwareInfo = (0,useChange/* default */.Z)(device, function (d) {
    return d === null || d === void 0 ? void 0 : d.firmwareInfo;
  });
  var update = ignoreFirmwareCheck || (blob === null || blob === void 0 ? void 0 : blob.version) && (firmwareInfo === null || firmwareInfo === void 0 ? void 0 : firmwareInfo.version) && (0,jdom_flashing/* updateApplicable */.Kl)(firmwareInfo, blob);
  var flashing = (0,useChange/* default */.Z)(device, function (d) {
    return !!(d !== null && d !== void 0 && d.flashing);
  });
  var missing = !device || !blob;
  var disabled = flashing;
  var mounted = (0,useMounted/* default */.Z)();

  var handleFlashing = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var updateCandidates;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!device.flashing) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.prev = 2;
              setProgress(0);
              device.flashing = true; // don't refresh registers while flashing

              updateCandidates = [firmwareInfo];
              _context.next = 8;
              return (0,jdom_flashing/* flashFirmwareBlob */.oN)(bus, blob, updateCandidates, ignoreFirmwareCheck, function (prog) {
                if (mounted()) setProgress(prog);
              });

            case 8:
              // trigger info
              device.firmwareInfo = undefined;
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              if (mounted()) setError(_context.t0);

            case 14:
              _context.prev = 14;
              device.flashing = false;
              return _context.finish(14);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11, 14, 17]]);
    }));

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
  var device = props.device;
  var blobs = (0,useFirmwareBlobs/* default */.Z)();
  var firmwareInfo = (0,useChange/* default */.Z)(device, function (d) {
    return d.firmwareInfo;
  });
  var blob = firmwareInfo && (blobs === null || blobs === void 0 ? void 0 : blobs.find(function (b) {
    return firmwareInfo.firmwareIdentifier == b.firmwareIdentifier;
  }));
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
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var scanning = (0,react.useRef)(false);
  var gridBreakpoints = (0,useGridBreakpoints/* default */.Z)();
  var safeBoot = (0,useChange/* default */.Z)(bus, function (b) {
    return b.safeBoot;
  });
  var devices = (0,useDevices/* default */.Z)({
    announced: true,
    ignoreSelf: true,
    ignoreSimulators: true,
    firmwareIdentifier: true
  }, [safeBoot]).filter(function (dev) {
    return safeBoot || !dev.hasService(constants/* SRV_BOOTLOADER */.PWm);
  }).sort(function (l, r) {
    var _l$firmwareInfo, _r$firmwareInfo;

    return (((_l$firmwareInfo = l.firmwareInfo) === null || _l$firmwareInfo === void 0 ? void 0 : _l$firmwareInfo.firmwareIdentifier) || 0) - (((_r$firmwareInfo = r.firmwareInfo) === null || _r$firmwareInfo === void 0 ? void 0 : _r$firmwareInfo.firmwareIdentifier) || 0);
  });
  var isFlashing = (0,useChange/* default */.Z)(bus, function () {
    return devices.some(function (dev) {
      return dev.flashing;
    });
  });
  var blobs = (0,useFirmwareBlobs/* default */.Z)();

  function scan() {
    return _scan.apply(this, arguments);
  } // load indexed db file once


  function _scan() {
    _scan = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!(blobs !== null && blobs !== void 0 && blobs.length) || isFlashing || scanning.current)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              console.log("start scanning bus");
              _context.prev = 3;
              scanning.current = true;
              _context.next = 7;
              return (0,jdom_flashing/* scanFirmwares */.CQ)(bus);

            case 7:
              _context.prev = 7;
              scanning.current = false;
              return _context.finish(7);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3,, 7, 10]]);
    }));
    return _scan.apply(this, arguments);
  }

  (0,react.useEffect)(function () {
    scan();
  }, [isFlashing, blobs]);
  (0,react.useEffect)(function () {
    return bus.subscribe([constants/* DEVICE_CHANGE */.RoP, constants/* FIRMWARE_BLOBS_CHANGE */.Kvv], function () {
      return scan();
    });
  }, []);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, devices.map(function (device) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({
      key: device.id,
      item: true
    }, gridBreakpoints), /*#__PURE__*/react.createElement(UpdateDeviceCard, {
      device: device
    }));
  }));
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
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var _useContext2 = (0,react.useContext)(DbContext/* default */.ZP),
      db = _useContext2.db;

  var _useContext3 = (0,react.useContext)(AppContext/* default */.ZP),
      enqueueSnackbar = _useContext3.enqueueSnackbar;

  var _useState = (0,react.useState)(bus.safeBoot),
      safeBoot = _useState[0],
      setSafeBoot = _useState[1];

  var firmwares = db === null || db === void 0 ? void 0 : db.firmwares;

  var handleRecovery = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var v;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              v = !safeBoot;
              setSafeBoot(v);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleRecovery() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleClear = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return firmwares.clear();

            case 2:
              enqueueSnackbar("firmwares cleared", "info");

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleClear() {
      return _ref2.apply(this, arguments);
    };
  }(); // turn on and off safeboot mode


  (0,react.useEffect)(function () {
    bus.safeBoot = safeBoot;
    return function () {
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
  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var devices = props.devices,
      deviceId = props.deviceId,
      onChange = props.onChange;

  var handleDeviceChange = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(ev) {
      var id, device;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = ev.target.value;
              onChange(id);
              device = bus.node(id);
              _context.next = 5;
              return device === null || device === void 0 ? void 0 : device.identify();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDeviceChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z, {
    helperText: "choose a device",
    value: deviceId,
    onChange: handleDeviceChange,
    disabled: !(devices !== null && devices !== void 0 && devices.length)
  }, devices === null || devices === void 0 ? void 0 : devices.map(function (dev) {
    return /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
      key: dev.id,
      value: dev.id
    }, dev.describe());
  }));
}
;// CONCATENATED MODULE: ./src/components/firmware/ManualFirmwareAlert.tsx



 // tslint:disable-next-line: no-submodule-imports











var fwid = function fwid(fw) {
  return fw ? fw.store + "," + fw.firmwareIdentifier + "," + fw.version : "";
};

function ManualFirmware() {
  var _devices$;

  var _useContext = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext.bus;

  var devices = (0,useDevices/* default */.Z)({
    announced: true,
    ignoreSelf: true,
    ignoreSimulators: true
  });
  var firmwares = (0,useFirmwareBlobs/* default */.Z)();
  var stores = (0,utils/* unique */.Tw)(firmwares.map(function (fw) {
    return fw.store;
  }));

  var _useState = (0,react.useState)(devices === null || devices === void 0 ? void 0 : (_devices$ = devices[0]) === null || _devices$ === void 0 ? void 0 : _devices$.id),
      deviceId = _useState[0],
      setDeviceId = _useState[1];

  var _useState2 = (0,react.useState)(fwid(firmwares === null || firmwares === void 0 ? void 0 : firmwares[0])),
      firmwareId = _useState2[0],
      setFirmwareId = _useState2[1];

  var _useState3 = (0,react.useState)((stores === null || stores === void 0 ? void 0 : stores[0]) || ""),
      store = _useState3[0],
      setStore = _useState3[1];

  var handleDeviceChange = function handleDeviceChange(newId) {
    return setDeviceId(newId);
  };

  var handleStoreChange = function handleStoreChange(ev) {
    var store = ev.target.value;
    setStore(store);
  };

  var handleFirmwareChange = function handleFirmwareChange(ev) {
    var id = ev.target.value;
    setFirmwareId(id);
  };

  var device = bus.node(deviceId);
  var blob = firmwares.find(function (fw) {
    return fwid(fw) === firmwareId;
  });
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
  }, stores === null || stores === void 0 ? void 0 : stores.map(function (store) {
    return /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
      key: store,
      value: store
    }, store);
  }))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(SelectWithLabel/* default */.Z, {
    helperText: "choose a module",
    value: firmwareId,
    onChange: handleFirmwareChange
  }, firmwares === null || firmwares === void 0 ? void 0 : firmwares.filter(function (fw) {
    return fw.store === store;
  }).map(function (fw) {
    return /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
      key: fwid(fw),
      value: fwid(fw)
    }, fw.name, " \xA0", /*#__PURE__*/react.createElement(Typography/* default */.Z, {
      variant: "caption"
    }, fw.version, ", \xA0", "0x" + fw.firmwareIdentifier.toString(16)));
  }))))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(FlashDeviceButton, {
    device: device,
    blob: blob,
    ignoreFirmwareCheck: true
  })));
}

function ManualFirmwareAlert() {
  var _useState4 = (0,react.useState)(false),
      enabled = _useState4[0],
      setEnabled = _useState4[1];

  var handleToggle = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var v;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              v = !enabled;
              setEnabled(v);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

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
  var _useState = (0,react.useState)(0),
      tab = _useState[0],
      setTab = _useState[1];

  var handleTabChange = function handleTabChange(event, newValue) {
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