"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7858],{

/***/ 4998:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Chip_Chip; }
});

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(27490);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(47895);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(6018);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/Cancel.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var Cancel = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/react.createElement("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(37595);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(11291);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(81664);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(67055);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js











var styles = function styles(theme) {
  var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, 0.26);
  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: 32 / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      textDecoration: 'none',
      border: 'none',
      // Remove `button` border
      padding: 0,
      // Remove `button` padding
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      '&$disabled': {
        opacity: 0.5,
        pointerEvents: 'none'
      },
      '& $avatar': {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(12)
      },
      '& $avatarColorPrimary': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark
      },
      '& $avatarColorSecondary': {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.dark
      },
      '& $avatarSmall': {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: theme.typography.pxToRem(10)
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      height: 24
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
    clickable: {
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1]
      }
    },

    /* Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
    clickableColorPrimary: {
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.primary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
    clickableColorSecondary: {
      '&:hover, &:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.secondary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(backgroundColor, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
    deletableColorPrimary: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.primary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
    deletableColorSecondary: {
      '&:focus': {
        backgroundColor: (0,colorManipulator/* emphasize */._4)(theme.palette.secondary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      backgroundColor: 'transparent',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.text.primary, theme.palette.action.hoverOpacity)
      },
      '& $avatar': {
        marginLeft: 4
      },
      '& $avatarSmall': {
        marginLeft: 2
      },
      '& $icon': {
        marginLeft: 4
      },
      '& $iconSmall': {
        marginLeft: 2
      },
      '& $deleteIcon': {
        marginRight: 5
      },
      '& $deleteIconSmall': {
        marginRight: 3
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(theme.palette.primary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
      }
    },
    // TODO v5: remove

    /* Styles applied to the `avatar` element. */
    avatar: {},

    /* Styles applied to the `avatar` element if `size="small"`. */
    avatarSmall: {},

    /* Styles applied to the `avatar` element if `color="primary"`. */
    avatarColorPrimary: {},

    /* Styles applied to the `avatar` element if `color="secondary"`. */
    avatarColorSecondary: {},

    /* Styles applied to the `icon` element. */
    icon: {
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      marginLeft: 5,
      marginRight: -6
    },

    /* Styles applied to the `icon` element if `size="small"`. */
    iconSmall: {
      width: 18,
      height: 18,
      marginLeft: 4,
      marginRight: -4
    },

    /* Styles applied to the `icon` element if `color="primary"`. */
    iconColorPrimary: {
      color: 'inherit'
    },

    /* Styles applied to the `icon` element if `color="secondary"`. */
    iconColorSecondary: {
      color: 'inherit'
    },

    /* Styles applied to the label `span` element. */
    label: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingLeft: 12,
      paddingRight: 12,
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the label `span` element if `size="small"`. */
    labelSmall: {
      paddingLeft: 8,
      paddingRight: 8
    },

    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      height: 22,
      width: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: (0,colorManipulator/* alpha */.Fq)(deleteIconColor, 0.4)
      }
    },

    /* Styles applied to the `deleteIcon` element if `size="small"`. */
    deleteIconSmall: {
      height: 16,
      width: 16,
      marginRight: 4,
      marginLeft: -4
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="default"`. */
    deleteIconColorPrimary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="default"`. */
    deleteIconColorSecondary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.secondary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
    deleteIconOutlinedColorPrimary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.primary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.main
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
    deleteIconOutlinedColorSecondary: {
      color: (0,colorManipulator/* alpha */.Fq)(theme.palette.secondary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.main
      }
    }
  };
};

function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */


var Chip = /*#__PURE__*/react.forwardRef(function Chip(props, ref) {
  var avatarProp = props.avatar,
      classes = props.classes,
      className = props.className,
      clickableProp = props.clickable,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      ComponentProp = props.component,
      deleteIconProp = props.deleteIcon,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      iconProp = props.icon,
      label = props.label,
      onClick = props.onClick,
      onDelete = props.onDelete,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'default' : _props$variant,
      other = (0,objectWithoutProperties/* default */.Z)(props, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"]);

  var chipRef = react.useRef(null);
  var handleRef = (0,useForkRef/* default */.Z)(chipRef, ref);

  var handleDeleteIconClick = function handleDeleteIconClick(event) {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();

    if (onDelete) {
      onDelete(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleKeyUp = function handleKeyUp(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === 'Escape' && chipRef.current) {
        chipRef.current.blur();
      }
    }

    if (onKeyUp) {
      onKeyUp(event);
    }
  };

  var clickable = clickableProp !== false && onClick ? true : clickableProp;
  var small = size === 'small';
  var Component = ComponentProp || (clickable ? ButtonBase/* default */.Z : 'div');
  var moreProps = Component === ButtonBase/* default */.Z ? {
    component: 'div'
  } : {};
  var deleteIcon = null;

  if (onDelete) {
    var customClasses = (0,clsx_m/* default */.Z)(color !== 'default' && (variant === "default" ? classes["deleteIconColor".concat((0,capitalize/* default */.Z)(color))] : classes["deleteIconOutlinedColor".concat((0,capitalize/* default */.Z)(color))]), small && classes.deleteIconSmall);
    deleteIcon = deleteIconProp && /*#__PURE__*/react.isValidElement(deleteIconProp) ? /*#__PURE__*/react.cloneElement(deleteIconProp, {
      className: (0,clsx_m/* default */.Z)(deleteIconProp.props.className, classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    }) : /*#__PURE__*/react.createElement(Cancel, {
      className: (0,clsx_m/* default */.Z)(classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    });
  }

  var avatar = null;

  if (avatarProp && /*#__PURE__*/react.isValidElement(avatarProp)) {
    avatar = /*#__PURE__*/react.cloneElement(avatarProp, {
      className: (0,clsx_m/* default */.Z)(classes.avatar, avatarProp.props.className, small && classes.avatarSmall, color !== 'default' && classes["avatarColor".concat((0,capitalize/* default */.Z)(color))])
    });
  }

  var icon = null;

  if (iconProp && /*#__PURE__*/react.isValidElement(iconProp)) {
    icon = /*#__PURE__*/react.cloneElement(iconProp, {
      className: (0,clsx_m/* default */.Z)(classes.icon, iconProp.props.className, small && classes.iconSmall, color !== 'default' && classes["iconColor".concat((0,capitalize/* default */.Z)(color))])
    });
  }

  if (false) {}

  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    role: clickable || onDelete ? 'button' : undefined,
    className: (0,clsx_m/* default */.Z)(classes.root, className, color !== 'default' && [classes["color".concat((0,capitalize/* default */.Z)(color))], clickable && classes["clickableColor".concat((0,capitalize/* default */.Z)(color))], onDelete && classes["deletableColor".concat((0,capitalize/* default */.Z)(color))]], variant !== "default" && [classes.outlined, {
      'primary': classes.outlinedPrimary,
      'secondary': classes.outlinedSecondary
    }[color]], disabled && classes.disabled, small && classes.sizeSmall, clickable && classes.clickable, onDelete && classes.deletable),
    "aria-disabled": disabled ? true : undefined,
    tabIndex: clickable || onDelete ? 0 : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef
  }, moreProps, other), avatar || icon, /*#__PURE__*/react.createElement("span", {
    className: (0,clsx_m/* default */.Z)(classes.label, small && classes.labelSmall)
  }, label), deleteIcon);
});
 false ? 0 : void 0;
/* harmony default export */ var Chip_Chip = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiChip'
})(Chip));

/***/ }),

/***/ 62846:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34621);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37595);






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 1,
      margin: 0,
      // Reset browser default style.
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider
    },

    /* Styles applied to the root element if `absolute={true}`. */
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },

    /* Styles applied to the root element if `variant="inset"`. */
    inset: {
      marginLeft: 72
    },

    /* Styles applied to the root element if `light={true}`. */
    light: {
      backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__/* .alpha */ .Fq)(theme.palette.divider, 0.08)
    },

    /* Styles applied to the root element if `variant="middle"`. */
    middle: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      height: '100%',
      width: 1
    },

    /* Styles applied to the root element if `flexItem={true}`. */
    flexItem: {
      alignSelf: 'stretch',
      height: 'auto'
    }
  };
};
var Divider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Divider(props, ref) {
  var _props$absolute = props.absolute,
      absolute = _props$absolute === void 0 ? false : _props$absolute,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'hr' : _props$component,
      _props$flexItem = props.flexItem,
      flexItem = _props$flexItem === void 0 ? false : _props$flexItem,
      _props$light = props.light,
      light = _props$light === void 0 ? false : _props$light,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$role = props.role,
      role = _props$role === void 0 ? Component !== 'hr' ? 'separator' : undefined : _props$role,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'fullWidth' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(props, ["absolute", "classes", "className", "component", "flexItem", "light", "orientation", "role", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.root, className, variant !== 'fullWidth' && classes[variant], absolute && classes.absolute, flexItem && classes.flexItem, light && classes.light, orientation === 'vertical' && classes.vertical),
    role: role,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(styles, {
  name: 'MuiDivider'
})(Divider));

/***/ }),

/***/ 26954:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27490);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47895);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80453);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34621);
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46438);







var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    height: '0.01em',
    // Fix IE 11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center',
    whiteSpace: 'nowrap'
  },

  /* Styles applied to the root element if `variant="filled"`. */
  filled: {
    '&$positionStart:not($hiddenLabel)': {
      marginTop: 16
    }
  },

  /* Styles applied to the root element if `position="start"`. */
  positionStart: {
    marginRight: 8
  },

  /* Styles applied to the root element if `position="end"`. */
  positionEnd: {
    marginLeft: 8
  },

  /* Styles applied to the root element if `disablePointerEvents=true`. */
  disablePointerEvents: {
    pointerEvents: 'none'
  },

  /* Styles applied if the adornment is used inside <FormControl hiddenLabel />. */
  hiddenLabel: {},

  /* Styles applied if the adornment is used inside <FormControl margin="dense" />. */
  marginDense: {}
};
var InputAdornment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function InputAdornment(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disablePointer = props.disablePointerEvents,
      disablePointerEvents = _props$disablePointer === void 0 ? false : _props$disablePointer,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      position = props.position,
      variantProp = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, ["children", "classes", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]);

  var muiFormControl = (0,_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_2__/* .useFormControl */ .Y)() || {};
  var variant = variantProp;

  if (variantProp && muiFormControl.variant) {
    if (false) {}
  }

  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_2__/* .default.Provider */ .Z.Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.root, className, position === 'end' ? classes.positionEnd : classes.positionStart, disablePointerEvents && classes.disablePointerEvents, muiFormControl.hiddenLabel && classes.hiddenLabel, variant === 'filled' && classes.filled, muiFormControl.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), typeof children === 'string' && !disableTypography ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    color: "textSecondary"
  }, children) : children));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(styles, {
  name: 'MuiInputAdornment'
})(InputAdornment));

/***/ }),

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

/***/ 4969:
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
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), 'Search');

exports.Z = _default;

/***/ }),

/***/ 3194:
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
  d: "M20.38 8.57l-1.23 1.85a8 8 0 01-.22 7.58H5.07A8 8 0 0115.58 6.85l1.85-1.23A10 10 0 003.35 19a2 2 0 001.72 1h13.85a2 2 0 001.74-1 10 10 0 00-.27-10.44zm-9.79 6.84a2 2 0 002.83 0l5.66-8.49-8.49 5.66a2 2 0 000 2.83z"
}), 'Speed');

exports.Z = _default;

/***/ }),

/***/ 33584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDebounce; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useDebouncedCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87709);



function valueEquality(left, right) {
  return left === right;
}

function adjustFunctionValueOfSetState(value) {
  return typeof value === 'function' ? function () {
    return value;
  } : value;
}

function useStateIgnoreCallback(initialState) {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(adjustFunctionValueOfSetState(initialState)),
      state = _a[0],
      setState = _a[1];

  var setStateIgnoreCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    return setState(adjustFunctionValueOfSetState(value));
  }, []);
  return [state, setStateIgnoreCallback];
}

function useDebounce(value, delay, options) {
  var eq = options && options.equalityFn || valueEquality;

  var _a = useStateIgnoreCallback(value),
      state = _a[0],
      dispatch = _a[1];

  var debounced = (0,_useDebouncedCallback__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)((0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    return dispatch(value);
  }, [dispatch]), delay, options);
  var previousValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);

  if (!eq(previousValue.current, value)) {
    debounced(value);
    previousValue.current = value;
  }

  return [state, {
    cancel: debounced.cancel,
    isPending: debounced.isPending,
    flush: debounced.flush
  }];
}

/***/ }),

/***/ 87709:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useDebouncedCallback; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked, or until the next browser frame is drawn. The debounced function
 * comes with a `cancel` method to cancel delayed `func` invocations and a
 * `flush` method to immediately invoke them. Provide `options` to indicate
 * whether `func` should be invoked on the leading and/or trailing edge of the
 * `wait` timeout. The `func` is invoked with the last arguments provided to the
 * debounced function. Subsequent calls to the debounced function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
 * invocation will be deferred until the next frame is drawn (typically about
 * 16ms).
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `debounce` and `throttle`.
 *
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0]
 *  The number of milliseconds to delay; if omitted, `requestAnimationFrame` is
 *  used (if available, otherwise it will be setTimeout(...,0)).
 * @param {Object} [options={}] The options object.
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.leading=false]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {number} [options.maxWait]
 *  Specify invoking on the trailing edge of the timeout.
 * @param {boolean} [options.trailing=true]
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * const resizeHandler = useDebouncedCallback(calculateLayout, 150);
 * window.addEventListener('resize', resizeHandler)
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * const clickHandler = useDebouncedCallback(sendMail, 300, {
 *   leading: true,
 *   trailing: false,
 * })
 * <button onClick={clickHandler}>click me</button>
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * const debounced = useDebouncedCallback(batchLog, 250, { 'maxWait': 1000 })
 * const source = new EventSource('/stream')
 * source.addEventListener('message', debounced)
 *
 * // Cancel the trailing debounced invocation.
 * window.addEventListener('popstate', debounced.cancel)
 *
 * // Check for pending invocations.
 * const status = debounced.pending() ? "Pending..." : "Ready"
 */

function useDebouncedCallback(func, wait, options) {
  var _this = this;

  var lastCallTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var lastInvokeTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var timerId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var lastArgs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var lastThis = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var result = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var funcRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(func);
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  funcRef.current = func; // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.

  var useRAF = !wait && wait !== 0 && typeof window !== 'undefined';

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  wait = +wait || 0;
  options = options || {};
  var leading = !!options.leading;
  var trailing = 'trailing' in options ? !!options.trailing : true; // `true` by default

  var maxing = ('maxWait' in options);
  var maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : null;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []); // You may have a question, why we have so many code under the useMemo definition.
  //
  // This was made as we want to escape from useCallback hell and
  // not to initialize a number of functions each time useDebouncedCallback is called.
  //
  // It means that we have less garbage for our GC calls which improves performance.
  // Also, it makes this library smaller.
  //
  // And the last reason, that the code without lots of useCallback with deps is easier to read.
  // You have only one place for that.

  var debounced = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var invokeFunc = function invokeFunc(time) {
      var args = lastArgs.current;
      var thisArg = lastThis.current;
      lastArgs.current = lastThis.current = null;
      lastInvokeTime.current = time;
      return result.current = funcRef.current.apply(thisArg, args);
    };

    var startTimer = function startTimer(pendingFunc, wait) {
      if (useRAF) cancelAnimationFrame(timerId.current);
      timerId.current = useRAF ? requestAnimationFrame(pendingFunc) : setTimeout(pendingFunc, wait);
    };

    var shouldInvoke = function shouldInvoke(time) {
      if (!mounted.current) return false;
      var timeSinceLastCall = time - lastCallTime.current;
      var timeSinceLastInvoke = time - lastInvokeTime.current; // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.

      return !lastCallTime.current || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    };

    var trailingEdge = function trailingEdge(time) {
      timerId.current = null; // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.

      if (trailing && lastArgs.current) {
        return invokeFunc(time);
      }

      lastArgs.current = lastThis.current = null;
      return result.current;
    };

    var timerExpired = function timerExpired() {
      var time = Date.now();

      if (shouldInvoke(time)) {
        return trailingEdge(time);
      } // https://github.com/xnimorz/use-debounce/issues/97


      if (!mounted.current) {
        return;
      } // Remaining wait calculation


      var timeSinceLastCall = time - lastCallTime.current;
      var timeSinceLastInvoke = time - lastInvokeTime.current;
      var timeWaiting = wait - timeSinceLastCall;
      var remainingWait = maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting; // Restart the timer

      startTimer(timerExpired, remainingWait);
    };

    var func = function func() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var time = Date.now();
      var isInvoking = shouldInvoke(time);
      lastArgs.current = args;
      lastThis.current = _this;
      lastCallTime.current = time;

      if (isInvoking) {
        if (!timerId.current && mounted.current) {
          // Reset any `maxWait` timer.
          lastInvokeTime.current = lastCallTime.current; // Start the timer for the trailing edge.

          startTimer(timerExpired, wait); // Invoke the leading edge.

          return leading ? invokeFunc(lastCallTime.current) : result.current;
        }

        if (maxing) {
          // Handle invocations in a tight loop.
          startTimer(timerExpired, wait);
          return invokeFunc(lastCallTime.current);
        }
      }

      if (!timerId.current) {
        startTimer(timerExpired, wait);
      }

      return result.current;
    };

    func.cancel = function () {
      if (timerId.current) {
        useRAF ? cancelAnimationFrame(timerId.current) : clearTimeout(timerId.current);
      }

      lastInvokeTime.current = 0;
      lastArgs.current = lastCallTime.current = lastThis.current = timerId.current = null;
    };

    func.isPending = function () {
      return !!timerId.current;
    };

    func.flush = function () {
      return !timerId.current ? result.current : trailingEdge(Date.now());
    };

    return func;
  }, [leading, maxing, wait, maxWait, trailing, useRAF]);
  return debounced;
}

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

/***/ 95393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GridHeader; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4998);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85505);



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
  hr: {
    background: theme.palette.text.disabled,
    marginBottom: "unset"
  },
  start: {
    width: theme.spacing(2)
  }
}));
function GridHeader(props) {
  var {
    title,
    count,
    variant,
    action
  } = props;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    container: true,
    direction: "row",
    spacing: 1,
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(classes.hr, classes.start)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true
  }, action && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    mr: 1
  }, action), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    component: "span",
    variant: variant || "subtitle1"
  }, title), count !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    ml: 0.5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    label: count
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: classes.hr
  }))));
}

/***/ }),

/***/ 43668:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ServiceCatalog; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(75167);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(90293);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js
var InputAdornment = __webpack_require__(26954);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(62846);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(38030);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(80791);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(4381);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var jdom_spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/ui/GridHeader.tsx
var GridHeader = __webpack_require__(95393);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./src/components/icons/MakeCodeIcon.tsx
var MakeCodeIcon = __webpack_require__(70654);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 26 modules
var servers = __webpack_require__(29667);
// EXTERNAL MODULE: ./src/components/KindIcon.tsx
var KindIcon = __webpack_require__(50048);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(10920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
var createStyles = __webpack_require__(70274);
;// CONCATENATED MODULE: ./src/components/ui/ChipList.tsx


var useStyles = (0,makeStyles/* default */.Z)(theme => (0,createStyles/* default */.Z)({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));
function ChipList(props) {
  var {
    children
  } = props;
  var classes = useStyles();
  if (!children) return null;
  return /*#__PURE__*/react.createElement("span", {
    className: classes.root
  }, children);
}
// EXTERNAL MODULE: ./src/components/icons/JacdacIcon.tsx
var JacdacIcon = __webpack_require__(36656);
// EXTERNAL MODULE: ./src/components/ui/Markdown.tsx
var Markdown = __webpack_require__(98784);
// EXTERNAL MODULE: ./src/components/makecode/services.ts + 1 modules
var makecode_services = __webpack_require__(21389);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdutils.ts
var jdutils = __webpack_require__(30055);
;// CONCATENATED MODULE: ./src/components/ServiceSpecificationList.tsx
















function ServiceSpecificatinListItem(props) {
  var _deviceSpecifications;

  var {
    service
  } = props;
  var {
    shortId,
    classIdentifier,
    name,
    notes,
    tags
  } = service;
  var makecode = (0,makecode_services/* resolveMakecodeServiceFromClassIdentifier */.WB)(classIdentifier);
  var simulator = (0,servers/* serviceProviderDefinitionFromServiceClass */.vd)(classIdentifier);
  var device = !!((_deviceSpecifications = (0,jdom_spec/* deviceSpecificationsForService */.zn)(classIdentifier)) !== null && _deviceSpecifications !== void 0 && _deviceSpecifications.length);
  var mixin = (0,jdutils/* isMixinService */.fh)(classIdentifier);
  return /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/services/" + shortId,
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/react.createElement(ListItemText/* default */.Z, {
    key: classIdentifier,
    primary: name,
    secondary: /*#__PURE__*/react.createElement(ChipList, null, /*#__PURE__*/react.createElement(Markdown/* default */.Z, {
      source: notes["short"]
    }), tags === null || tags === void 0 ? void 0 : tags.map(tag => /*#__PURE__*/react.createElement(Chip/* default */.Z, {
      key: tag,
      size: "small",
      label: tag
    })), mixin && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
      icon: /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
        kind: constants/* SERVICE_MIXIN_NODE_NAME */.mLn
      }),
      size: "small",
      label: "mixin"
    }), simulator && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
      icon: /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
        kind: constants/* VIRTUAL_DEVICE_NODE_NAME */.UX7
      }),
      size: "small",
      label: "simulator"
    }), device && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
      icon: /*#__PURE__*/react.createElement(JacdacIcon/* default */.Z, null),
      size: "small",
      label: "devices"
    }), makecode && /*#__PURE__*/react.createElement(Chip/* default */.Z, {
      icon: /*#__PURE__*/react.createElement(MakeCodeIcon/* default */.Z, null),
      size: "small",
      label: "MakeCode"
    }))
  }));
}

function ServiceSpecificationList(props) {
  var {
    services,
    title,
    count,
    shuffle,
    status,
    infrastructure
  } = props;
  var specs = (0,react.useMemo)(() => {
    var r = services;
    if (status !== undefined) r = r.filter(spec => status.indexOf(spec.status) > -1);
    if (infrastructure !== undefined) r = r.filter(spec => (0,jdom_spec/* isInfrastructure */.lz)(spec) == infrastructure);
    if (shuffle) (0,utils/* arrayShuffle */.r)(r);else r.sort((l, r) => l.name.localeCompare(r.name));
    if (count !== undefined) r = r.slice(0, count);
    return r;
  }, [services, count, shuffle, status, infrastructure]);
  if (!(specs !== null && specs !== void 0 && specs.length)) return null;
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, title && /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: title,
    count: specs.length
  }), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(List/* default */.Z, null, specs.map(node => /*#__PURE__*/react.createElement(ListItem/* default */.Z, {
    button: true,
    key: node.shortId
  }, /*#__PURE__*/react.createElement(ServiceSpecificatinListItem, {
    service: node
  }))))));
}
// EXTERNAL MODULE: ./node_modules/use-debounce/esm/useDebounce.js
var useDebounce = __webpack_require__(33584);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Search.js
var Search = __webpack_require__(4969);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Speed.js
var Speed = __webpack_require__(3194);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircle.js
var CheckCircle = __webpack_require__(39545);
;// CONCATENATED MODULE: ./src/pages/services.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





















function FilterChip(props) {
  var {
    label,
    value,
    icon,
    onClick
  } = props;
  var descr = value ? "Disable " + label + " filter" : "Filter by " + label + " support";
  return /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    label: label,
    "aria-label": descr,
    title: descr,
    icon: icon,
    variant: value ? "default" : "outlined",
    color: value ? "secondary" : undefined,
    onClick: onClick
  });
}

function ServiceCatalog() {
  var {
    0: filter,
    1: setFilter
  } = (0,react.useState)({
    query: ""
  });
  var [deboundedFilter] = (0,useDebounce/* default */.Z)(filter, 200);
  var searchId = (0,react_use_id_hook_esm/* useId */.Me)();
  var {
    query,
    tag,
    makeCode,
    mixin,
    simulators,
    devices,
    sensors,
    test
  } = filter;
  var allTags = (0,react.useMemo)(() => (0,utils/* unique */.Tw)((0,utils/* arrayConcatMany */.ue)((0,jdom_spec/* serviceSpecifications */.Le)().map(srv => [srv.group].concat((0,toConsumableArray/* default */.Z)(srv.tags)))).filter(t => !!t)), []);
  var services = (0,react.useMemo)(() => {
    var m = query.toLowerCase();
    var r = (0,jdom_spec/* serviceSpecifications */.Le)();

    if (m) {
      var _filter = s => (s === null || s === void 0 ? void 0 : s.toLowerCase().indexOf(m)) > -1;

      r = r.filter(srv => _filter(srv.name) || _filter(srv.notes["short"]));
    }

    if (tag) {
      r = r.filter(srv => srv.group === tag || srv.tags.indexOf(tag) > -1);
    }

    if (makeCode) r = r.filter(srv => !!(0,makecode_services/* resolveMakecodeServiceFromClassIdentifier */.WB)(srv.classIdentifier));
    if (mixin) r = r.filter(srv => (0,jdutils/* isMixinService */.fh)(srv.classIdentifier));
    if (simulators) r = r.filter(srv => !!(0,servers/* serviceProviderDefinitionFromServiceClass */.vd)(srv.classIdentifier));
    if (devices) r = r.filter(srv => {
      var _deviceSpecifications;

      return !!((_deviceSpecifications = (0,jdom_spec/* deviceSpecificationsForService */.zn)(srv.classIdentifier)) !== null && _deviceSpecifications !== void 0 && _deviceSpecifications.length);
    });
    if (sensors) r = r.filter(srv => (0,jdom_spec/* isSensor */.rq)(srv));
    return r;
  }, [deboundedFilter]);

  var handleChange = event => {
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      query: event.target.value
    }));
  };

  var handleTagClick = t => () => {
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      tag: tag === t ? "" : t
    }));
  };

  var handleMakeCodeClick = () => setFilter(_objectSpread(_objectSpread({}, filter), {}, {
    makeCode: !makeCode
  }));

  var handleMixinClick = () => setFilter(_objectSpread(_objectSpread({}, filter), {}, {
    mixin: !mixin
  }));

  var handleTestClick = () => setFilter(_objectSpread(_objectSpread({}, filter), {}, {
    test: !test
  }));

  var handleSimulatorClick = () => setFilter(_objectSpread(_objectSpread({}, filter), {}, {
    simulators: !simulators
  }));

  var handleDevicesClick = () => setFilter(_objectSpread(_objectSpread({}, filter), {}, {
    devices: !devices
  }));

  var handleSensorsClick = () => setFilter(_objectSpread(_objectSpread({}, filter), {}, {
    sensors: !sensors
  }));

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: searchId,
    margin: "normal",
    type: "search",
    variant: "outlined",
    label: "Search services",
    "aria-label": "Search services",
    fullWidth: true,
    value: query,
    onChange: handleChange,
    InputProps: {
      startAdornment: /*#__PURE__*/react.createElement(InputAdornment/* default */.Z, {
        position: "start"
      }, /*#__PURE__*/react.createElement(Search/* default */.Z, null))
    }
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(ChipList, null, allTags.map(t => /*#__PURE__*/react.createElement(FilterChip, {
    key: t,
    label: t,
    onClick: handleTagClick(t),
    value: tag === t
  })), /*#__PURE__*/react.createElement(Divider/* default */.Z, {
    orientation: "vertical",
    flexItem: true
  }), /*#__PURE__*/react.createElement(FilterChip, {
    label: "Sensors",
    icon: /*#__PURE__*/react.createElement(Speed/* default */.Z, null),
    value: sensors,
    onClick: handleSensorsClick
  }), /*#__PURE__*/react.createElement(FilterChip, {
    label: "Simulator",
    icon: /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
      kind: constants/* VIRTUAL_DEVICE_NODE_NAME */.UX7
    }),
    value: simulators,
    onClick: handleSimulatorClick
  }), /*#__PURE__*/react.createElement(FilterChip, {
    label: "Devices",
    icon: /*#__PURE__*/react.createElement(JacdacIcon/* default */.Z, null),
    onClick: handleDevicesClick,
    value: devices
  }), /*#__PURE__*/react.createElement(FilterChip, {
    label: "Mixin",
    icon: /*#__PURE__*/react.createElement(KindIcon/* default */.ZP, {
      kind: constants/* SERVICE_MIXIN_NODE_NAME */.mLn
    }),
    value: mixin,
    onClick: handleMixinClick
  }), /*#__PURE__*/react.createElement(FilterChip, {
    label: "MakeCode",
    icon: /*#__PURE__*/react.createElement(MakeCodeIcon/* default */.Z, null),
    value: makeCode,
    onClick: handleMakeCodeClick
  }), /*#__PURE__*/react.createElement(FilterChip, {
    label: "Test",
    icon: /*#__PURE__*/react.createElement(CheckCircle/* default */.Z, null),
    value: test,
    onClick: handleTestClick
  }))), !services.length && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, "There are no services matching this request."), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(ServiceSpecificationList, {
    title: "Stable",
    status: ["stable"],
    infrastructure: false,
    services: services
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(ServiceSpecificationList, {
    title: "Experimental",
    status: ["experimental"],
    infrastructure: false,
    services: services
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(ServiceSpecificationList, {
    title: "Jacdac",
    infrastructure: true,
    services: services
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(ServiceSpecificationList, {
    title: "Deprecated",
    status: ["deprecated"],
    infrastructure: false,
    services: services
  }))), /*#__PURE__*/react.createElement("h2", null, "See also"), /*#__PURE__*/react.createElement("p", null, "Known services are specified in", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    href: "https://github.com/microsoft/jacdac/tree/main/services"
  }, "https://github.com/microsoft/jacdac/tree/main/services"), ". Use the", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    href: "/tools/service-editor/"
  }, "Service Specification Editor"), " ", "and send us a pull request to register your own service."), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/devices/"
  }, "Devices")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    to: "/tools/service-editor/"
  }, "Service Specification Editor"))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-services-tsx-31473842c982241d5e00.js.map