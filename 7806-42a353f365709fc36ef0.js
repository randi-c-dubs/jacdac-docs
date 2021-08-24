(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7806],{

/***/ 4998:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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

/***/ 85680:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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
  d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
}), 'AttachFile');

exports.Z = _default;

/***/ }),

/***/ 54657:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
}), 'CloudUpload');

exports.Z = _default;

/***/ }),

/***/ 94500:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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

/***/ 53717:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
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
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning');

exports.Z = _default;

/***/ }),

/***/ 99661:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;

exports.Z = function (file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = (file.type || '').toLowerCase();
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return acceptedFilesArray.some(function (type) {
      var validType = type.trim().toLowerCase();

      if (validType.charAt(0) === '.') {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith('/*')) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }

      return mimeType === validType;
    });
  }

  return true;
};

/***/ }),

/***/ 67806:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ui_DropzoneDialog; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(64362);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(64191);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(42656);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(14288);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(70408);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(40624);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(37330);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(54147);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(84410);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(33891);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var esm_objectWithoutProperties = __webpack_require__(47895);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(75167);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(27490);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(85505);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(34621);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/transitions.js
var transitions = __webpack_require__(381);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ClickAwayListener/ClickAwayListener.js
var ClickAwayListener = __webpack_require__(73206);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useEventCallback.js
var useEventCallback = __webpack_require__(57544);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(81664);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createChainedFunction.js
var createChainedFunction = __webpack_require__(88231);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grow/Grow.js
var Grow = __webpack_require__(43337);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(58063);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(37595);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/SnackbarContent/SnackbarContent.js








var styles = function styles(theme) {
  var emphasis = theme.palette.type === 'light' ? 0.8 : 0.98;
  var backgroundColor = (0,colorManipulator/* emphasize */._4)(theme.palette.background.default, emphasis);
  return {
    /* Styles applied to the root element. */
    root: (0,esm_extends/* default */.Z)({}, theme.typography.body2, (0,defineProperty/* default */.Z)({
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      flexGrow: 1
    }, theme.breakpoints.up('sm'), {
      flexGrow: 'initial',
      minWidth: 288
    })),

    /* Styles applied to the message wrapper element. */
    message: {
      padding: '8px 0'
    },

    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    }
  };
};
var SnackbarContent = /*#__PURE__*/react.forwardRef(function SnackbarContent(props, ref) {
  var action = props.action,
      classes = props.classes,
      className = props.className,
      message = props.message,
      _props$role = props.role,
      role = _props$role === void 0 ? 'alert' : _props$role,
      other = (0,esm_objectWithoutProperties/* default */.Z)(props, ["action", "classes", "className", "message", "role"]);

  return /*#__PURE__*/react.createElement(Paper/* default */.Z, (0,esm_extends/* default */.Z)({
    role: role,
    square: true,
    elevation: 6,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react.createElement("div", {
    className: classes.message
  }, message), action ? /*#__PURE__*/react.createElement("div", {
    className: classes.action
  }, action) : null);
});
 false ? 0 : void 0;
/* harmony default export */ var SnackbarContent_SnackbarContent = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiSnackbarContent'
})(SnackbarContent));
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Snackbar/Snackbar.js














var Snackbar_styles = function styles(theme) {
  var top1 = {
    top: 8
  };
  var bottom1 = {
    bottom: 8
  };
  var right = {
    justifyContent: 'flex-end'
  };
  var left = {
    justifyContent: 'flex-start'
  };
  var top3 = {
    top: 24
  };
  var bottom3 = {
    bottom: 24
  };
  var right3 = {
    right: 24
  };
  var left3 = {
    left: 24
  };
  var center = {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  };
  return {
    /* Styles applied to the root element. */
    root: {
      zIndex: theme.zIndex.snackbar,
      position: 'fixed',
      display: 'flex',
      left: 8,
      right: 8,
      justifyContent: 'center',
      alignItems: 'center'
    },

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'center' }}`. */
    anchorOriginTopCenter: (0,esm_extends/* default */.Z)({}, top1, (0,defineProperty/* default */.Z)({}, theme.breakpoints.up('sm'), (0,esm_extends/* default */.Z)({}, top3, center))),

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'center' }}`. */
    anchorOriginBottomCenter: (0,esm_extends/* default */.Z)({}, bottom1, (0,defineProperty/* default */.Z)({}, theme.breakpoints.up('sm'), (0,esm_extends/* default */.Z)({}, bottom3, center))),

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'right' }}`. */
    anchorOriginTopRight: (0,esm_extends/* default */.Z)({}, top1, right, (0,defineProperty/* default */.Z)({}, theme.breakpoints.up('sm'), (0,esm_extends/* default */.Z)({
      left: 'auto'
    }, top3, right3))),

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'right' }}`. */
    anchorOriginBottomRight: (0,esm_extends/* default */.Z)({}, bottom1, right, (0,defineProperty/* default */.Z)({}, theme.breakpoints.up('sm'), (0,esm_extends/* default */.Z)({
      left: 'auto'
    }, bottom3, right3))),

    /* Styles applied to the root element if `anchorOrigin={{ 'top', 'left' }}`. */
    anchorOriginTopLeft: (0,esm_extends/* default */.Z)({}, top1, left, (0,defineProperty/* default */.Z)({}, theme.breakpoints.up('sm'), (0,esm_extends/* default */.Z)({
      right: 'auto'
    }, top3, left3))),

    /* Styles applied to the root element if `anchorOrigin={{ 'bottom', 'left' }}`. */
    anchorOriginBottomLeft: (0,esm_extends/* default */.Z)({}, bottom1, left, (0,defineProperty/* default */.Z)({}, theme.breakpoints.up('sm'), (0,esm_extends/* default */.Z)({
      right: 'auto'
    }, bottom3, left3)))
  };
};
var Snackbar = /*#__PURE__*/react.forwardRef(function Snackbar(props, ref) {
  var action = props.action,
      _props$anchorOrigin = props.anchorOrigin;
  _props$anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: 'bottom',
    horizontal: 'center'
  } : _props$anchorOrigin;

  var vertical = _props$anchorOrigin.vertical,
      horizontal = _props$anchorOrigin.horizontal,
      _props$autoHideDurati = props.autoHideDuration,
      autoHideDuration = _props$autoHideDurati === void 0 ? null : _props$autoHideDurati,
      children = props.children,
      classes = props.classes,
      className = props.className,
      ClickAwayListenerProps = props.ClickAwayListenerProps,
      ContentProps = props.ContentProps,
      _props$disableWindowB = props.disableWindowBlurListener,
      disableWindowBlurListener = _props$disableWindowB === void 0 ? false : _props$disableWindowB,
      message = props.message,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      open = props.open,
      resumeHideDuration = props.resumeHideDuration,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Grow/* default */.Z : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? {
    enter: transitions/* duration.enteringScreen */.x9.enteringScreen,
    exit: transitions/* duration.leavingScreen */.x9.leavingScreen
  } : _props$transitionDura,
      TransitionProps = props.TransitionProps,
      other = (0,esm_objectWithoutProperties/* default */.Z)(props, ["action", "anchorOrigin", "autoHideDuration", "children", "classes", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onClose", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  var timerAutoHide = react.useRef();

  var _React$useState = react.useState(true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var handleClose = (0,useEventCallback/* default */.Z)(function () {
    if (onClose) {
      onClose.apply(void 0, arguments);
    }
  });
  var setAutoHideTimer = (0,useEventCallback/* default */.Z)(function (autoHideDurationParam) {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }

    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(function () {
      handleClose(null, 'timeout');
    }, autoHideDurationParam);
  });
  react.useEffect(function () {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }

    return function () {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]); // Pause the timer when the user is interacting with the Snackbar
  // or when the user hide the window.

  var handlePause = function handlePause() {
    clearTimeout(timerAutoHide.current);
  }; // Restart the timer when the user is no longer interacting with the Snackbar
  // or when the window is shown back.


  var handleResume = react.useCallback(function () {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);

  var handleMouseEnter = function handleMouseEnter(event) {
    if (onMouseEnter) {
      onMouseEnter(event);
    }

    handlePause();
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    if (onMouseLeave) {
      onMouseLeave(event);
    }

    handleResume();
  };

  var handleClickAway = function handleClickAway(event) {
    if (onClose) {
      onClose(event, 'clickaway');
    }
  };

  var handleExited = function handleExited() {
    setExited(true);
  };

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  react.useEffect(function () {
    if (!disableWindowBlurListener && open) {
      window.addEventListener('focus', handleResume);
      window.addEventListener('blur', handlePause);
      return function () {
        window.removeEventListener('focus', handleResume);
        window.removeEventListener('blur', handlePause);
      };
    }

    return undefined;
  }, [disableWindowBlurListener, handleResume, open]); // So we only render active snackbars.

  if (!open && exited) {
    return null;
  }

  return /*#__PURE__*/react.createElement(ClickAwayListener/* default */.Z, (0,esm_extends/* default */.Z)({
    onClickAway: handleClickAway
  }, ClickAwayListenerProps), /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: (0,clsx_m/* default */.Z)(classes.root, classes["anchorOrigin".concat((0,capitalize/* default */.Z)(vertical)).concat((0,capitalize/* default */.Z)(horizontal))], className),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref: ref
  }, other), /*#__PURE__*/react.createElement(TransitionComponent, (0,esm_extends/* default */.Z)({
    appear: true,
    in: open,
    onEnter: (0,createChainedFunction/* default */.Z)(handleEnter, onEnter),
    onEntered: onEntered,
    onEntering: onEntering,
    onExit: onExit,
    onExited: (0,createChainedFunction/* default */.Z)(handleExited, onExited),
    onExiting: onExiting,
    timeout: transitionDuration,
    direction: vertical === 'top' ? 'down' : 'up'
  }, TransitionProps), children || /*#__PURE__*/react.createElement(SnackbarContent_SnackbarContent, (0,esm_extends/* default */.Z)({
    message: message,
    action: action
  }, ContentProps)))));
});
 false ? 0 : void 0;
/* harmony default export */ var Snackbar_Snackbar = ((0,withStyles/* default */.Z)(Snackbar_styles, {
  flip: false,
  name: 'MuiSnackbar'
})(Snackbar));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/AttachFile.js
var AttachFile = __webpack_require__(85680);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CloudUpload.js
var CloudUpload = __webpack_require__(54657);
;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};


function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
/** @deprecated */

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}
/** @deprecated */

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || from);
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}
;

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
;// CONCATENATED MODULE: ./node_modules/file-selector/dist/es5/file.js
var COMMON_MIME_TYPES = new Map([['avi', 'video/avi'], ['gif', 'image/gif'], ['ico', 'image/x-icon'], ['jpeg', 'image/jpeg'], ['jpg', 'image/jpeg'], ['mkv', 'video/x-matroska'], ['mov', 'video/quicktime'], ['mp4', 'video/mp4'], ['pdf', 'application/pdf'], ['png', 'image/png'], ['zip', 'application/zip'], ['doc', 'application/msword'], ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']]);
function toFileWithPath(file, path) {
  var f = withMimeType(file);

  if (typeof f.path !== 'string') {
    // on electron, path is already set to the absolute path
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f, 'path', {
      value: typeof path === 'string' ? path // If <input webkitdirectory> is set,
      // the File will have a {webkitRelativePath} property
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
      : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }

  return f;
}

function withMimeType(file) {
  var name = file.name;
  var hasExtension = name && name.lastIndexOf('.') !== -1;

  if (hasExtension && !file.type) {
    var ext = name.split('.').pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);

    if (type) {
      Object.defineProperty(file, 'type', {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }

  return file;
}
;// CONCATENATED MODULE: ./node_modules/file-selector/dist/es5/file-selector.js


var FILES_TO_IGNORE = [// Thumbnail cache files for macOS and Windows
'.DS_Store', 'Thumbs.db' // Windows
];
/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 * @param evt
 */

function fromEvent(evt) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [2
      /*return*/
      , isDragEvt(evt) && evt.dataTransfer ? getDataTransferFiles(evt.dataTransfer, evt.type) : getInputFiles(evt)];
    });
  });
}

function isDragEvt(value) {
  return !!value.dataTransfer;
}

function getInputFiles(evt) {
  var files = isInput(evt.target) ? evt.target.files ? fromList(evt.target.files) : [] : [];
  return files.map(function (file) {
    return toFileWithPath(file);
  });
}

function isInput(value) {
  return value !== null;
}

function getDataTransferFiles(dt, type) {
  return __awaiter(this, void 0, void 0, function () {
    var items, files;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!dt.items) return [3
          /*break*/
          , 2];
          items = fromList(dt.items).filter(function (item) {
            return item.kind === 'file';
          }); // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
          // only 'dragstart' and 'drop' has access to the data (source node)

          if (type !== 'drop') {
            return [2
            /*return*/
            , items];
          }

          return [4
          /*yield*/
          , Promise.all(items.map(toFilePromises))];

        case 1:
          files = _a.sent();
          return [2
          /*return*/
          , noIgnoredFiles(flatten(files))];

        case 2:
          return [2
          /*return*/
          , noIgnoredFiles(fromList(dt.files).map(function (file) {
            return toFileWithPath(file);
          }))];
      }
    });
  });
}

function noIgnoredFiles(files) {
  return files.filter(function (file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
} // IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList


function fromList(items) {
  var files = []; // tslint:disable: prefer-for-of

  for (var i = 0; i < items.length; i++) {
    var file = items[i];
    files.push(file);
  }

  return files;
} // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem


function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== 'function') {
    return fromDataTransferItem(item);
  }

  var entry = item.webkitGetAsEntry(); // Safari supports dropping an image node from a different window and can be retrieved using
  // the DataTransferItem.getAsFile() API
  // NOTE: FileSystemEntry.file() throws if trying to get the file

  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }

  return fromDataTransferItem(item);
}

function flatten(items) {
  return items.reduce(function (acc, files) {
    return __spread(acc, Array.isArray(files) ? flatten(files) : [files]);
  }, []);
}

function fromDataTransferItem(item) {
  var file = item.getAsFile();

  if (!file) {
    return Promise.reject(item + " is not a File");
  }

  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
} // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry


function fromEntry(entry) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [2
      /*return*/
      , entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
    });
  });
} // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry


function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function (resolve, reject) {
    var entries = [];

    function readEntries() {
      var _this = this; // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
      // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries


      reader.readEntries(function (batch) {
        return __awaiter(_this, void 0, void 0, function () {
          var files, err_1, items;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                if (!!batch.length) return [3
                /*break*/
                , 5];
                _a.label = 1;

              case 1:
                _a.trys.push([1, 3,, 4]);

                return [4
                /*yield*/
                , Promise.all(entries)];

              case 2:
                files = _a.sent();
                resolve(files);
                return [3
                /*break*/
                , 4];

              case 3:
                err_1 = _a.sent();
                reject(err_1);
                return [3
                /*break*/
                , 4];

              case 4:
                return [3
                /*break*/
                , 6];

              case 5:
                items = Promise.all(batch.map(fromEntry));
                entries.push(items); // Continue reading

                readEntries();
                _a.label = 6;

              case 6:
                return [2
                /*return*/
                ];
            }
          });
        });
      }, function (err) {
        reject(err);
      });
    }

    readEntries();
  });
} // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry


function fromFileEntry(entry) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [2
      /*return*/
      , new Promise(function (resolve, reject) {
        entry.file(function (file) {
          var fwp = toFileWithPath(file, entry.fullPath);
          resolve(fwp);
        }, function (err) {
          reject(err);
        });
      })];
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/file-selector/dist/es5/index.js

// EXTERNAL MODULE: ./node_modules/attr-accept/dist/es/index.js
var es = __webpack_require__(99661);
;// CONCATENATED MODULE: ./node_modules/react-dropzone/dist/es/utils/index.js
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

 // Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
// that MIME type will always be accepted

function fileAccepted(file, accept) {
  return file.type === 'application/x-moz-file' || (0,es/* default */.Z)(file, accept);
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) return file.size >= minSize && file.size <= maxSize;else if (isDefined(minSize)) return file.size >= minSize;else if (isDefined(maxSize)) return file.size <= maxSize;
  }

  return true;
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function allFilesAccepted(_ref) {
  var files = _ref.files,
      accept = _ref.accept,
      minSize = _ref.minSize,
      maxSize = _ref.maxSize,
      multiple = _ref.multiple;

  if (!multiple && files.length > 1) {
    return false;
  }

  return files.every(function (file) {
    return fileAccepted(file, accept) && fileMatchSize(file, minSize, maxSize);
  });
} // React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble

function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === 'function') {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== 'undefined') {
    return event.cancelBubble;
  }

  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file


  return Array.prototype.some.call(event.dataTransfer.types, function (type) {
    return type === 'Files' || type === 'application/x-moz-file';
  });
}
function isKindFile(item) {
  return _typeof(item) === 'object' && item !== null && item.kind === 'file';
} // allow the entire document to be a drag target

function onDocumentDragOver(event) {
  event.preventDefault();
}

function isIe(userAgent) {
  return userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1;
}

function isEdge(userAgent) {
  return userAgent.indexOf('Edge/') !== -1;
}

function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */

function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fns.some(function (fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return isPropagationStopped(event);
    });
  };
}
;// CONCATENATED MODULE: ./node_modules/react-dropzone/dist/es/index.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
/* eslint prefer-template: 0 */





/**
 * Convenience wrapper component for the `useDropzone` hook
 *
 * ```jsx
 * <Dropzone>
 *   {({getRootProps, getInputProps}) => (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag 'n' drop some files here, or click to select files</p>
 *     </div>
 *   )}
 * </Dropzone>
 * ```
 */

var Dropzone = (0,react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      params = _objectWithoutProperties(_ref, ["children"]);

  var _useDropzone = useDropzone(params),
      open = _useDropzone.open,
      props = _objectWithoutProperties(_useDropzone, ["open"]);

  (0,react.useImperativeHandle)(ref, function () {
    return {
      open: open
    };
  }, [open]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

  return react.createElement(react.Fragment, null, children(_objectSpread({}, props, {
    open: open
  })));
});
Dropzone.displayName = 'Dropzone';
/* harmony default export */ var dist_es = (Dropzone);
/**
 * A function that is invoked for the `dragenter`,
 * `dragover` and `dragleave` events.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dragCb
 * @param {DragEvent} event
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dropCb
 * @param {File[]} acceptedFiles List of accepted files
 * @param {File[]} rejectedFiles List of rejected files
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are files (such as link, text, etc.).
 *
 * @callback dropAcceptedCb
 * @param {File[]} files List of accepted files that meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is invoked for the `drop` or input change event.
 *
 * @callback dropRejectedCb
 * @param {File[]} files List of rejected files that do not meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */

/**
 * A function that is used aggregate files,
 * in a asynchronous fashion, from drag or input change events.
 *
 * @callback getFilesFromEvent
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 * @returns {(File[]|Promise<File[]>)}
 */

/**
 * An object with the current dropzone state and some helper functions.
 *
 * @typedef {object} DropzoneState
 * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
 * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
 * @property {Function} open Open the native file selection dialog
 * @property {boolean} isFocused Dropzone area is in focus
 * @property {boolean} isFileDialogActive File dialog is opened
 * @property {boolean} isDragActive Active drag is in progress
 * @property {boolean} isDragAccept Dragged files are accepted
 * @property {boolean} isDragReject Some dragged files are rejected
 * @property {File[]} draggedFiles Files in active drag
 * @property {File[]} acceptedFiles Accepted files
 * @property {File[]} rejectedFiles Rejected files
 */

var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  rejectedFiles: []
};
/**
 * A React hook that creates a drag 'n' drop area.
 *
 * ```jsx
 * function MyDropzone(props) {
 *   const {getRootProps, getInputProps} = useDropzone({
 *     onDrop: acceptedFiles => {
 *       // do something with the File objects, e.g. upload to some server
 *     }
 *   });
 *   return (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag and drop some files here, or click to select files</p>
 *     </div>
 *   )
 * }
 * ```
 *
 * @function useDropzone
 *
 * @param {object} props
 * @param {string|string[]} [props.accept] Set accepted file types.
 * See https://github.com/okonet/attr-accept for more information.
 * Keep in mind that mime type determination is not reliable across platforms. CSV files,
 * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
 * Windows. In some cases there might not be a mime type set at all.
 * See: https://github.com/react-dropzone/react-dropzone/issues/276
 * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
 * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
 * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
 * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
 * Note that it also stops tracking the focus state.
 * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
 * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
 * @param {number} [props.minSize=0] Minimum file size (in bytes)
 * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
 * @param {boolean} [props.disabled=false] Enable/disable the dropzone
 * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
 * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
 * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
 * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
 * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
 * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
 * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
 *
 * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
 * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
 * If `multiple` is set to false and additional files are droppped,
 * all files besides the first will be rejected.
 * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
 *
 * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
 * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
 *
 * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
 * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
 *
 * ```js
 * function onDrop(acceptedFiles) {
 *   const req = request.post('/upload')
 *   acceptedFiles.forEach(file => {
 *     req.attach(file.name, file)
 *   })
 *   req.end(callback)
 * }
 * ```
 * @param {dropAcceptedCb} [props.onDropAccepted]
 * @param {dropRejectedCb} [props.onDropRejected]
 *
 * @returns {DropzoneState}
 */

function useDropzone() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      accept = _ref2.accept,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$getFilesFromEve = _ref2.getFilesFromEvent,
      getFilesFromEvent = _ref2$getFilesFromEve === void 0 ? fromEvent : _ref2$getFilesFromEve,
      _ref2$maxSize = _ref2.maxSize,
      maxSize = _ref2$maxSize === void 0 ? Infinity : _ref2$maxSize,
      _ref2$minSize = _ref2.minSize,
      minSize = _ref2$minSize === void 0 ? 0 : _ref2$minSize,
      _ref2$multiple = _ref2.multiple,
      multiple = _ref2$multiple === void 0 ? true : _ref2$multiple,
      onDragEnter = _ref2.onDragEnter,
      onDragLeave = _ref2.onDragLeave,
      onDragOver = _ref2.onDragOver,
      onDrop = _ref2.onDrop,
      onDropAccepted = _ref2.onDropAccepted,
      onDropRejected = _ref2.onDropRejected,
      onFileDialogCancel = _ref2.onFileDialogCancel,
      _ref2$preventDropOnDo = _ref2.preventDropOnDocument,
      preventDropOnDocument = _ref2$preventDropOnDo === void 0 ? true : _ref2$preventDropOnDo,
      _ref2$noClick = _ref2.noClick,
      noClick = _ref2$noClick === void 0 ? false : _ref2$noClick,
      _ref2$noKeyboard = _ref2.noKeyboard,
      noKeyboard = _ref2$noKeyboard === void 0 ? false : _ref2$noKeyboard,
      _ref2$noDrag = _ref2.noDrag,
      noDrag = _ref2$noDrag === void 0 ? false : _ref2$noDrag,
      _ref2$noDragEventsBub = _ref2.noDragEventsBubbling,
      noDragEventsBubbling = _ref2$noDragEventsBub === void 0 ? false : _ref2$noDragEventsBub;

  var rootRef = (0,react.useRef)(null);
  var inputRef = (0,react.useRef)(null);

  var _useReducer = (0,react.useReducer)(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var isFocused = state.isFocused,
      isFileDialogActive = state.isFileDialogActive,
      draggedFiles = state.draggedFiles; // Fn for opening the file dialog programmatically

  var openFileDialog = (0,react.useCallback)(function () {
    if (inputRef.current) {
      dispatch({
        type: 'openDialog'
      });
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch]); // Update file dialog active state when the window is focused on

  var onWindowFocus = function onWindowFocus() {
    // Execute the timeout only if the file dialog is opened in the browser
    if (isFileDialogActive) {
      setTimeout(function () {
        if (inputRef.current) {
          var files = inputRef.current.files;

          if (!files.length) {
            dispatch({
              type: 'closeDialog'
            });

            if (typeof onFileDialogCancel === 'function') {
              onFileDialogCancel();
            }
          }
        }
      }, 300);
    }
  };

  (0,react.useEffect)(function () {
    window.addEventListener('focus', onWindowFocus, false);
    return function () {
      window.removeEventListener('focus', onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancel]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

  var onKeyDownCb = (0,react.useCallback)(function (event) {
    // Ignore keyboard events bubbling up the DOM tree
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }

    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, inputRef]); // Update focus state for the dropzone

  var onFocusCb = (0,react.useCallback)(function () {
    dispatch({
      type: 'focus'
    });
  }, []);
  var onBlurCb = (0,react.useCallback)(function () {
    dispatch({
      type: 'blur'
    });
  }, []); // Cb to open the file dialog when click occurs on the dropzone

  var onClickCb = (0,react.useCallback)(function () {
    if (noClick) {
      return;
    } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
    // to ensure React can handle state changes
    // See: https://github.com/react-dropzone/react-dropzone/issues/450


    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [inputRef, noClick]);
  var dragTargetsRef = (0,react.useRef)([]);

  var onDocumentDrop = function onDocumentDrop(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
      return;
    }

    event.preventDefault();
    dragTargetsRef.current = [];
  };

  (0,react.useEffect)(function () {
    if (preventDropOnDocument) {
      document.addEventListener('dragover', onDocumentDragOver, false);
      document.addEventListener('drop', onDocumentDrop, false);
    }

    return function () {
      if (preventDropOnDocument) {
        document.removeEventListener('dragover', onDocumentDragOver);
        document.removeEventListener('drop', onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  var onDragEnterCb = (0,react.useCallback)(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event); // Count the dropzone and any children that are entered.

    if (dragTargetsRef.current.indexOf(event.target) === -1) {
      dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);
    }

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (draggedFiles) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        dispatch({
          draggedFiles: draggedFiles,
          isDragActive: true,
          type: 'setDraggedFiles'
        });

        if (onDragEnter) {
          onDragEnter(event);
        }
      });
    }
  }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
  var onDragOverCb = (0,react.useCallback)(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);

    if (event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = 'copy';
      } catch (_unused) {}
      /* eslint-disable-line no-empty */

    }

    if (isEvtWithFiles(event) && onDragOver) {
      onDragOver(event);
    }

    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = (0,react.useCallback)(function (event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event); // Only deactivate once the dropzone and all children have been left

    var targets = dragTargetsRef.current.filter(function (target) {
      return target !== event.target && rootRef.current && rootRef.current.contains(target);
    });
    dragTargetsRef.current = targets;

    if (targets.length > 0) {
      return;
    }

    dispatch({
      isDragActive: false,
      type: 'setDraggedFiles',
      draggedFiles: []
    });

    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var onDropCb = (0,react.useCallback)(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }

        var acceptedFiles = [];
        var rejectedFiles = [];
        files.forEach(function (file) {
          if (fileAccepted(file, accept) && fileMatchSize(file, minSize, maxSize)) {
            acceptedFiles.push(file);
          } else {
            rejectedFiles.push(file);
          }
        });

        if (!multiple && acceptedFiles.length > 1) {
          rejectedFiles.push.apply(rejectedFiles, _toConsumableArray(acceptedFiles.splice(0))); // Reject everything and empty accepted files
        }

        dispatch({
          acceptedFiles: acceptedFiles,
          rejectedFiles: rejectedFiles,
          type: 'setFiles'
        });

        if (onDrop) {
          onDrop(acceptedFiles, rejectedFiles, event);
        }

        if (rejectedFiles.length > 0 && onDropRejected) {
          onDropRejected(rejectedFiles, event);
        }

        if (acceptedFiles.length > 0 && onDropAccepted) {
          onDropAccepted(acceptedFiles, event);
        }
      });
    }

    dispatch({
      type: 'reset'
    });
  }, [multiple, accept, minSize, maxSize, getFilesFromEvent, onDrop, onDropAccepted, onDropRejected, noDragEventsBubbling]);

  var composeHandler = function composeHandler(fn) {
    return disabled ? null : fn;
  };

  var composeKeyboardHandler = function composeKeyboardHandler(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };

  var composeDragHandler = function composeDragHandler(fn) {
    return noDrag ? null : composeHandler(fn);
  };

  var stopPropagation = function stopPropagation(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };

  var getRootProps = (0,react.useMemo)(function () {
    return function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$refKey = _ref3.refKey,
          refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
          onKeyDown = _ref3.onKeyDown,
          onFocus = _ref3.onFocus,
          onBlur = _ref3.onBlur,
          onClick = _ref3.onClick,
          onDragEnter = _ref3.onDragEnter,
          onDragOver = _ref3.onDragOver,
          onDragLeave = _ref3.onDragLeave,
          onDrop = _ref3.onDrop,
          rest = _objectWithoutProperties(_ref3, ["refKey", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"]);

      return _objectSpread(_defineProperty({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb))
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}, {}, rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = (0,react.useCallback)(function (event) {
    event.stopPropagation();
  }, []);
  var getInputProps = (0,react.useMemo)(function () {
    return function () {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$refKey = _ref4.refKey,
          refKey = _ref4$refKey === void 0 ? 'ref' : _ref4$refKey,
          onChange = _ref4.onChange,
          onClick = _ref4.onClick,
          rest = _objectWithoutProperties(_ref4, ["refKey", "onChange", "onClick"]);

      var inputProps = _defineProperty({
        accept: accept,
        multiple: multiple,
        type: 'file',
        style: {
          display: 'none'
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        autoComplete: 'off',
        tabIndex: -1
      }, refKey, inputRef);

      return _objectSpread({}, inputProps, {}, rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  var fileCount = draggedFiles.length;
  var isDragAccept = fileCount > 0 && allFilesAccepted({
    files: draggedFiles,
    accept: accept,
    minSize: minSize,
    maxSize: maxSize,
    multiple: multiple
  });
  var isDragReject = fileCount > 0 && !isDragAccept;
  return _objectSpread({}, state, {
    isDragAccept: isDragAccept,
    isDragReject: isDragReject,
    isFocused: isFocused && !disabled,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
    rootRef: rootRef,
    inputRef: inputRef,
    open: composeHandler(openFileDialog)
  });
}

function reducer(state, action) {
  /* istanbul ignore next */
  switch (action.type) {
    case 'focus':
      return _objectSpread({}, state, {
        isFocused: true
      });

    case 'blur':
      return _objectSpread({}, state, {
        isFocused: false
      });

    case 'openDialog':
      return _objectSpread({}, state, {
        isFileDialogActive: true
      });

    case 'closeDialog':
      return _objectSpread({}, state, {
        isFileDialogActive: false
      });

    case 'setDraggedFiles':
      /* eslint no-case-declarations: 0 */
      var isDragActive = action.isDragActive,
          draggedFiles = action.draggedFiles;
      return _objectSpread({}, state, {
        draggedFiles: draggedFiles,
        isDragActive: isDragActive
      });

    case 'setFiles':
      return _objectSpread({}, state, {
        acceptedFiles: action.acceptedFiles,
        rejectedFiles: action.rejectedFiles
      });

    case 'reset':
      return _objectSpread({}, state, {
        isFileDialogActive: false,
        isDragActive: false,
        draggedFiles: [],
        acceptedFiles: [],
        rejectedFiles: []
      });

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Fab/Fab.js
var Fab = __webpack_require__(49995);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Delete.js
var Delete = __webpack_require__(94500);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(23729);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircle.js
var CheckCircle = __webpack_require__(39545);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(29181);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__(13840);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Info.js
var Info = __webpack_require__(12531);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Warning.js
var Warning = __webpack_require__(53717);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(52468);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(89952);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(65733);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(96422);
;// CONCATENATED MODULE: ./node_modules/material-ui-dropzone/dist/index.es.js




































function isImage(file) {
  if (file.type.split('/')[0] === 'image') {
    return true;
  }
}

function convertBytesToMbsOrKbs(filesize) {
  var size = '';

  if (filesize >= 1048576) {
    size = filesize / 1048576 + ' megabytes';
  } else if (filesize >= 1024) {
    size = filesize / 1024 + ' kilobytes';
  } else {
    size = filesize + ' bytes';
  }

  return size;
}

function createFileFromUrl(_x) {
  return _createFileFromUrl.apply(this, arguments);
}

function _createFileFromUrl() {
  _createFileFromUrl = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(url) {
    var response, data, metadata, filename;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url);

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.blob();

          case 5:
            data = _context.sent;
            metadata = {
              type: data.type
            };
            filename = url.replace(/\?.+/, '').split('/').pop();
            return _context.abrupt("return", new File([data], filename, metadata));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createFileFromUrl.apply(this, arguments);
}

function readFile(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function (event) {
      var _event$target;

      resolve(event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result);
    };

    reader.onerror = function (event) {
      reader.abort();
      reject(event);
    };

    reader.readAsDataURL(file);
  });
}

var index_es_styles = function styles(_ref) {
  var palette = _ref.palette,
      shape = _ref.shape,
      spacing = _ref.spacing;
  return {
    root: {},
    imageContainer: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      '&:hover $image': {
        opacity: 0.3
      },
      '&:hover $removeButton': {
        opacity: 1
      }
    },
    image: {
      height: 100,
      width: 'initial',
      maxWidth: '100%',
      color: palette.text.primary,
      transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
      boxSizing: 'border-box',
      boxShadow: 'rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px',
      borderRadius: shape.borderRadius,
      zIndex: 5,
      opacity: 1
    },
    removeButton: {
      transition: '.5s ease',
      position: 'absolute',
      opacity: 0,
      top: spacing(-1),
      right: spacing(-1),
      width: 40,
      height: 40,
      '&:focus': {
        opacity: 1
      }
    }
  };
};

var _ref5 = /*#__PURE__*/(0,react.createElement)(Delete/* default */.Z, null);

function PreviewList(_ref2) {
  var fileObjects = _ref2.fileObjects,
      handleRemove = _ref2.handleRemove,
      showFileNames = _ref2.showFileNames,
      useChipsForPreview = _ref2.useChipsForPreview,
      previewChipProps = _ref2.previewChipProps,
      previewGridClasses = _ref2.previewGridClasses,
      previewGridProps = _ref2.previewGridProps,
      classes = _ref2.classes,
      getPreviewIcon = _ref2.getPreviewIcon;

  if (useChipsForPreview) {
    return (0,react.createElement)(Grid/* default */.Z, extends_default()({
      spacing: 1,
      direction: "row"
    }, previewGridProps.container, {
      container: true,
      className: (0,clsx_m/* default */.Z)(classes.root, previewGridClasses.container)
    }), fileObjects.map(function (fileObject, i) {
      var _ref3, _fileObject$file;

      return (0,react.createElement)(Grid/* default */.Z, extends_default()({}, previewGridProps.item, {
        item: true,
        key: "".concat((_ref3 = (_fileObject$file = fileObject.file) === null || _fileObject$file === void 0 ? void 0 : _fileObject$file.name) !== null && _ref3 !== void 0 ? _ref3 : 'file', "-").concat(i),
        className: classes.imageContainer
      }), (0,react.createElement)(Chip/* default */.Z, extends_default()({
        variant: "outlined"
      }, previewChipProps, {
        label: fileObject.file.name,
        onDelete: handleRemove(i)
      })));
    }));
  }

  return (0,react.createElement)(Grid/* default */.Z, extends_default()({
    spacing: 8
  }, previewGridProps.container, {
    container: true,
    className: (0,clsx_m/* default */.Z)(classes.root, previewGridClasses.container)
  }), fileObjects.map(function (fileObject, i) {
    var _ref4, _fileObject$file2;

    return (0,react.createElement)(Grid/* default */.Z, extends_default()({
      xs: 4
    }, previewGridProps.item, {
      item: true,
      key: "".concat((_ref4 = (_fileObject$file2 = fileObject.file) === null || _fileObject$file2 === void 0 ? void 0 : _fileObject$file2.name) !== null && _ref4 !== void 0 ? _ref4 : 'file', "-").concat(i),
      className: (0,clsx_m/* default */.Z)(classes.imageContainer, previewGridClasses.item)
    }), getPreviewIcon(fileObject, classes), showFileNames && (0,react.createElement)(Typography/* default */.Z, {
      variant: "body1",
      component: "p"
    }, fileObject.file.name), (0,react.createElement)(Fab/* default */.Z, {
      onClick: handleRemove(i),
      "aria-label": "Delete",
      className: classes.removeButton
    }, _ref5));
  }));
}

 false ? 0 : void 0;
var PreviewList$1 = (0,withStyles/* default */.Z)(index_es_styles, {
  name: 'MuiDropzonePreviewList'
})(PreviewList);
var variantIcon = {
  success: CheckCircle/* default */.Z,
  warning: Warning/* default */.Z,
  error: Error/* default */.Z,
  info: Info/* default */.Z
};

var styles$1 = function styles(theme) {
  return {
    successAlert: {
      backgroundColor: theme.palette.success.main
    },
    errorAlert: {
      backgroundColor: theme.palette.error.main
    },
    infoAlert: {
      backgroundColor: theme.palette.info.main
    },
    warningAlert: {
      backgroundColor: theme.palette.warning.main
    },
    message: {
      display: 'flex',
      alignItems: 'center',
      '& > svg': {
        marginRight: theme.spacing(1)
      }
    },
    icon: {
      fontSize: 20,
      opacity: 0.9
    },
    closeButton: {}
  };
};

function SnackbarContentWrapper(props) {
  var classes = props.classes,
      className = props.className,
      message = props.message,
      onClose = props.onClose,
      variant = props.variant,
      other = objectWithoutProperties_default()(props, ["classes", "className", "message", "onClose", "variant"]);

  var Icon = variantIcon[variant];
  return (0,react.createElement)(SnackbarContent_SnackbarContent, extends_default()({
    className: (0,clsx_m/* default */.Z)(classes["".concat(variant, "Alert")], className),
    "aria-describedby": "client-snackbar",
    message: (0,react.createElement)("span", {
      id: "client-snackbar",
      className: classes.message
    }, (0,react.createElement)(Icon, {
      className: classes.icon
    }), message),
    action: [(0,react.createElement)(IconButton/* default */.Z, {
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      className: classes.closeButton,
      onClick: onClose
    }, (0,react.createElement)(Close/* default */.Z, {
      className: classes.icon
    }))]
  }, other));
}

 false ? 0 : void 0;
var SnackbarContentWrapper$1 = (0,withStyles/* default */.Z)(styles$1, {
  name: 'MuiDropzoneSnackbar'
})(SnackbarContentWrapper);

var styles$2 = function styles(_ref) {
  var palette = _ref.palette,
      shape = _ref.shape,
      spacing = _ref.spacing;
  return {
    '@keyframes progress': {
      '0%': {
        backgroundPosition: '0 0'
      },
      '100%': {
        backgroundPosition: '-70px 0'
      }
    },
    root: {
      position: 'relative',
      width: '100%',
      minHeight: '250px',
      backgroundColor: palette.background.paper,
      border: 'dashed',
      borderColor: palette.divider,
      borderRadius: shape.borderRadius,
      boxSizing: 'border-box',
      cursor: 'pointer',
      overflow: 'hidden'
    },
    active: {
      animation: '$progress 2s linear infinite !important',
      // eslint-disable-next-line max-len
      backgroundImage: "repeating-linear-gradient(-45deg, ".concat(palette.background.paper, ", ").concat(palette.background.paper, " 25px, ").concat(palette.divider, " 25px, ").concat(palette.divider, " 50px)"),
      backgroundSize: '150% 100%',
      border: 'solid',
      borderColor: palette.primary.light
    },
    invalid: {
      // eslint-disable-next-line max-len
      backgroundImage: "repeating-linear-gradient(-45deg, ".concat(palette.error.light, ", ").concat(palette.error.light, " 25px, ").concat(palette.error.dark, " 25px, ").concat(palette.error.dark, " 50px)"),
      borderColor: palette.error.main
    },
    textContainer: {
      textAlign: 'center'
    },
    text: {
      marginBottom: spacing(3),
      marginTop: spacing(3)
    },
    icon: {
      width: 51,
      height: 51,
      color: palette.text.primary
    }
  };
};

var defaultSnackbarAnchorOrigin = {
  horizontal: 'left',
  vertical: 'bottom'
};

var defaultGetPreviewIcon = function defaultGetPreviewIcon(fileObject, classes) {
  if (isImage(fileObject.file)) {
    return (0,react.createElement)("img", {
      className: classes.image,
      role: "presentation",
      src: fileObject.data
    });
  }

  return (0,react.createElement)(AttachFile/* default */.Z, {
    className: classes.image
  });
};
/**
 * This components creates a Material-UI Dropzone, with previews and snackbar notifications.
 */


var DropzoneAreaBase = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(DropzoneAreaBase, _React$PureComponent);

  function DropzoneAreaBase() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, DropzoneAreaBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(DropzoneAreaBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      openSnackBar: false,
      snackbarMessage: '',
      snackbarVariant: 'success'
    };

    _this.handleDropAccepted = /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2(acceptedFiles, evt) {
        var _this$props, fileObjects, filesLimit, getFileAddedMessage, getFileLimitExceedMessage, onAdd, onDrop, fileObjs, message;

        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props = _this.props, fileObjects = _this$props.fileObjects, filesLimit = _this$props.filesLimit, getFileAddedMessage = _this$props.getFileAddedMessage, getFileLimitExceedMessage = _this$props.getFileLimitExceedMessage, onAdd = _this$props.onAdd, onDrop = _this$props.onDrop;

                if (!(filesLimit > 1 && fileObjects.length + acceptedFiles.length > filesLimit)) {
                  _context2.next = 4;
                  break;
                }

                _this.setState({
                  openSnackBar: true,
                  snackbarMessage: getFileLimitExceedMessage(filesLimit),
                  snackbarVariant: 'error'
                }, _this.notifyAlert);

                return _context2.abrupt("return");

              case 4:
                // Notify Drop event
                if (onDrop) {
                  onDrop(acceptedFiles, evt);
                } // Retrieve fileObjects data


                _context2.next = 7;
                return Promise.all(acceptedFiles.map( /*#__PURE__*/function () {
                  var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(file) {
                    var data;
                    return regenerator_default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return readFile(file);

                          case 2:
                            data = _context.sent;
                            return _context.abrupt("return", {
                              file: file,
                              data: data
                            });

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x3) {
                    return _ref3.apply(this, arguments);
                  };
                }()));

              case 7:
                fileObjs = _context2.sent; // Notify added files

                if (onAdd) {
                  onAdd(fileObjs);
                } // Display message


                message = fileObjs.reduce(function (msg, fileObj) {
                  return msg + getFileAddedMessage(fileObj.file.name);
                }, '');

                _this.setState({
                  openSnackBar: true,
                  snackbarMessage: message,
                  snackbarVariant: 'success'
                }, _this.notifyAlert);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleDropRejected = function (rejectedFiles, evt) {
      var _this$props2 = _this.props,
          acceptedFiles = _this$props2.acceptedFiles,
          filesLimit = _this$props2.filesLimit,
          fileObjects = _this$props2.fileObjects,
          getDropRejectMessage = _this$props2.getDropRejectMessage,
          getFileLimitExceedMessage = _this$props2.getFileLimitExceedMessage,
          maxFileSize = _this$props2.maxFileSize,
          onDropRejected = _this$props2.onDropRejected;
      var message = '';

      if (fileObjects.length + rejectedFiles.length > filesLimit) {
        message = getFileLimitExceedMessage(filesLimit);
      } else {
        rejectedFiles.forEach(function (rejectedFile) {
          message = getDropRejectMessage(rejectedFile, acceptedFiles, maxFileSize);
        });
      }

      if (onDropRejected) {
        onDropRejected(rejectedFiles, evt);
      }

      _this.setState({
        openSnackBar: true,
        snackbarMessage: message,
        snackbarVariant: 'error'
      }, _this.notifyAlert);
    };

    _this.handleRemove = function (fileIndex) {
      return function (event) {
        event.stopPropagation();
        var _this$props3 = _this.props,
            fileObjects = _this$props3.fileObjects,
            getFileRemovedMessage = _this$props3.getFileRemovedMessage,
            onDelete = _this$props3.onDelete; // Find removed fileObject

        var removedFileObj = fileObjects[fileIndex]; // Notify removed file

        if (onDelete) {
          onDelete(removedFileObj, fileIndex);
        }

        _this.setState({
          openSnackBar: true,
          snackbarMessage: getFileRemovedMessage(removedFileObj.file.name),
          snackbarVariant: 'info'
        }, _this.notifyAlert);
      };
    };

    _this.handleCloseSnackbar = function () {
      _this.setState({
        openSnackBar: false
      });
    };

    return _this;
  }

  createClass_default()(DropzoneAreaBase, [{
    key: "notifyAlert",
    value: function notifyAlert() {
      var onAlert = this.props.onAlert;
      var _this$state = this.state,
          openSnackBar = _this$state.openSnackBar,
          snackbarMessage = _this$state.snackbarMessage,
          snackbarVariant = _this$state.snackbarVariant;

      if (openSnackBar && onAlert) {
        onAlert(snackbarMessage, snackbarVariant);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          acceptedFiles = _this$props4.acceptedFiles,
          alertSnackbarProps = _this$props4.alertSnackbarProps,
          classes = _this$props4.classes,
          disableRejectionFeedback = _this$props4.disableRejectionFeedback,
          dropzoneClass = _this$props4.dropzoneClass,
          dropzoneParagraphClass = _this$props4.dropzoneParagraphClass,
          dropzoneProps = _this$props4.dropzoneProps,
          dropzoneText = _this$props4.dropzoneText,
          fileObjects = _this$props4.fileObjects,
          filesLimit = _this$props4.filesLimit,
          getPreviewIcon = _this$props4.getPreviewIcon,
          Icon = _this$props4.Icon,
          inputProps = _this$props4.inputProps,
          maxFileSize = _this$props4.maxFileSize,
          previewChipProps = _this$props4.previewChipProps,
          previewGridClasses = _this$props4.previewGridClasses,
          previewGridProps = _this$props4.previewGridProps,
          previewText = _this$props4.previewText,
          showAlerts = _this$props4.showAlerts,
          showFileNames = _this$props4.showFileNames,
          showFileNamesInPreview = _this$props4.showFileNamesInPreview,
          showPreviews = _this$props4.showPreviews,
          showPreviewsInDropzone = _this$props4.showPreviewsInDropzone,
          useChipsForPreview = _this$props4.useChipsForPreview;
      var _this$state2 = this.state,
          openSnackBar = _this$state2.openSnackBar,
          snackbarMessage = _this$state2.snackbarMessage,
          snackbarVariant = _this$state2.snackbarVariant;
      var acceptFiles = acceptedFiles === null || acceptedFiles === void 0 ? void 0 : acceptedFiles.join(',');
      var isMultiple = filesLimit > 1;
      var previewsVisible = showPreviews && fileObjects.length > 0;
      var previewsInDropzoneVisible = showPreviewsInDropzone && fileObjects.length > 0;
      return (0,react.createElement)(react.Fragment, null, (0,react.createElement)(dist_es, extends_default()({}, dropzoneProps, {
        accept: acceptFiles,
        onDropAccepted: this.handleDropAccepted,
        onDropRejected: this.handleDropRejected,
        maxSize: maxFileSize,
        multiple: isMultiple
      }), function (_ref4) {
        var getRootProps = _ref4.getRootProps,
            getInputProps = _ref4.getInputProps,
            isDragActive = _ref4.isDragActive,
            isDragReject = _ref4.isDragReject;
        return (0,react.createElement)("div", getRootProps({
          className: (0,clsx_m/* default */.Z)(classes.root, dropzoneClass, isDragActive && classes.active, !disableRejectionFeedback && isDragReject && classes.invalid)
        }), (0,react.createElement)("input", getInputProps(inputProps)), (0,react.createElement)("div", {
          className: classes.textContainer
        }, (0,react.createElement)(Typography/* default */.Z, {
          variant: "h5",
          component: "p",
          className: (0,clsx_m/* default */.Z)(classes.text, dropzoneParagraphClass)
        }, dropzoneText), Icon ? (0,react.createElement)(Icon, {
          className: classes.icon
        }) : (0,react.createElement)(CloudUpload/* default */.Z, {
          className: classes.icon
        })), previewsInDropzoneVisible && (0,react.createElement)(PreviewList$1, {
          fileObjects: fileObjects,
          handleRemove: _this2.handleRemove,
          getPreviewIcon: getPreviewIcon,
          showFileNames: showFileNames,
          useChipsForPreview: useChipsForPreview,
          previewChipProps: previewChipProps,
          previewGridClasses: previewGridClasses,
          previewGridProps: previewGridProps
        }));
      }), previewsVisible && (0,react.createElement)(react.Fragment, null, (0,react.createElement)(Typography/* default */.Z, {
        variant: "subtitle1",
        component: "span"
      }, previewText), (0,react.createElement)(PreviewList$1, {
        fileObjects: fileObjects,
        handleRemove: this.handleRemove,
        getPreviewIcon: getPreviewIcon,
        showFileNames: showFileNamesInPreview,
        useChipsForPreview: useChipsForPreview,
        previewChipProps: previewChipProps,
        previewGridClasses: previewGridClasses,
        previewGridProps: previewGridProps
      })), (typeof showAlerts === 'boolean' && showAlerts || Array.isArray(showAlerts) && showAlerts.includes(snackbarVariant)) && (0,react.createElement)(Snackbar_Snackbar, extends_default()({
        anchorOrigin: defaultSnackbarAnchorOrigin,
        autoHideDuration: 6000
      }, alertSnackbarProps, {
        open: openSnackBar,
        onClose: this.handleCloseSnackbar
      }), (0,react.createElement)(SnackbarContentWrapper$1, {
        onClose: this.handleCloseSnackbar,
        variant: snackbarVariant,
        message: snackbarMessage
      })));
    }
  }]);

  return DropzoneAreaBase;
}(react.PureComponent);

DropzoneAreaBase.defaultProps = {
  acceptedFiles: [],
  filesLimit: 3,
  fileObjects: [],
  maxFileSize: 3000000,
  dropzoneText: 'Drag and drop a file here or click',
  previewText: 'Preview:',
  disableRejectionFeedback: false,
  showPreviews: false,
  // By default previews show up under in the dialog and inside in the standalone
  showPreviewsInDropzone: true,
  showFileNames: false,
  showFileNamesInPreview: false,
  useChipsForPreview: false,
  previewChipProps: {},
  previewGridClasses: {},
  previewGridProps: {},
  showAlerts: true,
  alertSnackbarProps: {
    anchorOrigin: {
      horizontal: 'left',
      vertical: 'bottom'
    },
    autoHideDuration: 6000
  },
  getFileLimitExceedMessage: function getFileLimitExceedMessage(filesLimit) {
    return "Maximum allowed number of files exceeded. Only ".concat(filesLimit, " allowed");
  },
  getFileAddedMessage: function getFileAddedMessage(fileName) {
    return "File ".concat(fileName, " successfully added.");
  },
  getPreviewIcon: defaultGetPreviewIcon,
  getFileRemovedMessage: function getFileRemovedMessage(fileName) {
    return "File ".concat(fileName, " removed.");
  },
  getDropRejectMessage: function getDropRejectMessage(rejectedFile, acceptedFiles, maxFileSize) {
    var message = "File ".concat(rejectedFile.name, " was rejected. ");

    if (!acceptedFiles.includes(rejectedFile.type)) {
      message += 'File type not supported. ';
    }

    if (rejectedFile.size > maxFileSize) {
      message += 'File is too big. Size limit is ' + convertBytesToMbsOrKbs(maxFileSize) + '. ';
    }

    return message;
  }
};
var FileObjectShape = prop_types_default().shape({
  file: (prop_types_default()).object,
  data: (prop_types_default()).any
});
 false ? 0 : void 0;
var DropzoneAreaBase$1 = (0,withStyles/* default */.Z)(styles$2, {
  name: 'MuiDropzoneArea'
})(DropzoneAreaBase);

var splitDropzoneAreaProps = function splitDropzoneAreaProps(props) {
  var clearOnUnmount = props.clearOnUnmount,
      initialFiles = props.initialFiles,
      onChange = props.onChange,
      onDelete = props.onDelete,
      dropzoneAreaProps = objectWithoutProperties_default()(props, ["clearOnUnmount", "initialFiles", "onChange", "onDelete"]);

  return [{
    clearOnUnmount: clearOnUnmount,
    initialFiles: initialFiles,
    onChange: onChange,
    onDelete: onDelete
  }, dropzoneAreaProps];
};
/**
 * This components creates an uncontrolled Material-UI Dropzone, with previews and snackbar notifications.
 *
 * It supports all props of `DropzoneAreaBase` but keeps the files state internally.
 *
 * **Note** To listen to file changes use `onChange` event handler and notice that `onDelete` returns a `File` instance instead of `FileObject`.
 */


var DropzoneArea = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(DropzoneArea, _React$PureComponent);

  function DropzoneArea() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, DropzoneArea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(DropzoneArea)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      fileObjects: []
    };

    _this.notifyFileChange = function () {
      var onChange = _this.props.onChange;
      var fileObjects = _this.state.fileObjects;

      if (onChange) {
        onChange(fileObjects.map(function (fileObject) {
          return fileObject.file;
        }));
      }
    };

    _this.loadInitialFiles = /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      var initialFiles, fileObjs;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              initialFiles = _this.props.initialFiles;
              _context2.prev = 1;
              _context2.next = 4;
              return Promise.all(initialFiles.map( /*#__PURE__*/function () {
                var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(initialFile) {
                  var file, data;
                  return regenerator_default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!(typeof initialFile === 'string')) {
                            _context.next = 6;
                            break;
                          }

                          _context.next = 3;
                          return createFileFromUrl(initialFile);

                        case 3:
                          file = _context.sent;
                          _context.next = 7;
                          break;

                        case 6:
                          file = initialFile;

                        case 7:
                          _context.next = 9;
                          return readFile(file);

                        case 9:
                          data = _context.sent;
                          return _context.abrupt("return", {
                            file: file,
                            data: data
                          });

                        case 11:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 4:
              fileObjs = _context2.sent;

              _this.setState(function (state) {
                return {
                  fileObjects: [].concat(state.fileObjects, fileObjs)
                };
              }, _this.notifyFileChange);

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    _this.addFiles = /*#__PURE__*/function () {
      var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee3(newFileObjects) {
        var filesLimit;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filesLimit = _this.props.filesLimit; // Update component state

                _this.setState(function (state) {
                  // Handle a single file
                  if (filesLimit <= 1) {
                    return {
                      fileObjects: [].concat(newFileObjects[0])
                    };
                  } // Handle multiple files


                  return {
                    fileObjects: [].concat(state.fileObjects, newFileObjects)
                  };
                }, _this.notifyFileChange);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.deleteFile = function (removedFileObj, removedFileObjIdx) {
      event.stopPropagation();
      var onDelete = _this.props.onDelete;
      var fileObjects = _this.state.fileObjects; // Calculate remaining fileObjects array

      var remainingFileObjs = fileObjects.filter(function (fileObject, i) {
        return i !== removedFileObjIdx;
      }); // Notify removed file

      if (onDelete) {
        onDelete(removedFileObj.file);
      } // Update local state


      _this.setState({
        fileObjects: remainingFileObjs
      }, _this.notifyFileChange);
    };

    return _this;
  }

  createClass_default()(DropzoneArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInitialFiles();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var clearOnUnmount = this.props.clearOnUnmount;

      if (clearOnUnmount) {
        this.setState({
          fileObjects: []
        }, this.notifyFileChange);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _splitDropzoneAreaPro = splitDropzoneAreaProps(this.props),
          _splitDropzoneAreaPro2 = slicedToArray_default()(_splitDropzoneAreaPro, 2),
          dropzoneAreaProps = _splitDropzoneAreaPro2[1];

      var fileObjects = this.state.fileObjects;
      return (0,react.createElement)(DropzoneAreaBase$1, extends_default()({}, dropzoneAreaProps, {
        fileObjects: fileObjects,
        onAdd: this.addFiles,
        onDelete: this.deleteFile
      }));
    }
  }]);

  return DropzoneArea;
}(react.PureComponent);

DropzoneArea.defaultProps = {
  clearOnUnmount: true,
  filesLimit: 3,
  initialFiles: []
};
 false ? 0 : void 0;

function splitDropzoneDialogProps(allProps) {
  var cancelButtonText = allProps.cancelButtonText,
      dialogProps = allProps.dialogProps,
      dialogTitle = allProps.dialogTitle,
      fullWidth = allProps.fullWidth,
      maxWidth = allProps.maxWidth,
      onClose = allProps.onClose,
      onSave = allProps.onSave,
      open = allProps.open,
      submitButtonText = allProps.submitButtonText,
      dropzoneAreaProps = objectWithoutProperties_default()(allProps, ["cancelButtonText", "dialogProps", "dialogTitle", "fullWidth", "maxWidth", "onClose", "onSave", "open", "submitButtonText"]);

  return [{
    cancelButtonText: cancelButtonText,
    dialogProps: dialogProps,
    dialogTitle: dialogTitle,
    fullWidth: fullWidth,
    maxWidth: maxWidth,
    onClose: onClose,
    onSave: onSave,
    open: open,
    submitButtonText: submitButtonText
  }, dropzoneAreaProps];
}
/**
 * This component provides the DropzoneArea inside of a Material-UI Dialog.
 *
 * It supports all the Props and Methods from `DropzoneAreaBase`.
 */


var DropzoneDialogBase = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(DropzoneDialogBase, _React$PureComponent);

  function DropzoneDialogBase() {
    classCallCheck_default()(this, DropzoneDialogBase);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(DropzoneDialogBase).apply(this, arguments));
  }

  createClass_default()(DropzoneDialogBase, [{
    key: "render",
    value: function render() {
      var _splitDropzoneDialogP = splitDropzoneDialogProps(this.props),
          _splitDropzoneDialogP2 = slicedToArray_default()(_splitDropzoneDialogP, 2),
          dropzoneDialogProps = _splitDropzoneDialogP2[0],
          dropzoneAreaProps = _splitDropzoneDialogP2[1];

      var cancelButtonText = dropzoneDialogProps.cancelButtonText,
          dialogProps = dropzoneDialogProps.dialogProps,
          dialogTitle = dropzoneDialogProps.dialogTitle,
          fullWidth = dropzoneDialogProps.fullWidth,
          maxWidth = dropzoneDialogProps.maxWidth,
          onClose = dropzoneDialogProps.onClose,
          onSave = dropzoneDialogProps.onSave,
          open = dropzoneDialogProps.open,
          submitButtonText = dropzoneDialogProps.submitButtonText; // Submit button state

      var submitDisabled = dropzoneAreaProps.fileObjects.length === 0;
      return (0,react.createElement)(Dialog/* default */.Z, extends_default()({}, dialogProps, {
        fullWidth: fullWidth,
        maxWidth: maxWidth,
        onClose: onClose,
        open: open
      }), (0,react.createElement)(DialogTitle/* default */.Z, null, dialogTitle), (0,react.createElement)(DialogContent/* default */.Z, null, (0,react.createElement)(DropzoneAreaBase$1, dropzoneAreaProps)), (0,react.createElement)(DialogActions/* default */.Z, null, (0,react.createElement)(Button/* default */.Z, {
        color: "primary",
        onClick: onClose
      }, cancelButtonText), (0,react.createElement)(Button/* default */.Z, {
        color: "primary",
        disabled: submitDisabled,
        onClick: onSave
      }, submitButtonText)));
    }
  }]);

  return DropzoneDialogBase;
}(react.PureComponent);

DropzoneDialogBase.defaultProps = {
  open: false,
  dialogTitle: 'Upload file',
  dialogProps: {},
  fullWidth: true,
  maxWidth: 'sm',
  cancelButtonText: 'Cancel',
  submitButtonText: 'Submit',
  showPreviews: true,
  showPreviewsInDropzone: false,
  showFileNamesInPreview: true
};
 false ? 0 : void 0;
/**
 * This component provides an uncontrolled version of the DropzoneDialogBase component.
 *
 * It supports all the Props and Methods from `DropzoneDialogBase` but keeps the files state internally.
 *
 * **Note** The `onSave` handler also returns `File[]` with all the accepted files.
 */

var DropzoneDialog = /*#__PURE__*/function (_React$PureComponent) {
  inherits_default()(DropzoneDialog, _React$PureComponent);

  function DropzoneDialog() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, DropzoneDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(DropzoneDialog)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      fileObjects: []
    };

    _this.notifyFileChange = function () {
      var onChange = _this.props.onChange;
      var fileObjects = _this.state.fileObjects;

      if (onChange) {
        onChange(fileObjects.map(function (fileObject) {
          return fileObject.file;
        }));
      }
    };

    _this.loadInitialFiles = /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      var initialFiles, fileObjs;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              initialFiles = _this.props.initialFiles;
              _context2.prev = 1;
              _context2.next = 4;
              return Promise.all(initialFiles.map( /*#__PURE__*/function () {
                var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(initialFile) {
                  var file, data;
                  return regenerator_default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!(typeof initialFile === 'string')) {
                            _context.next = 6;
                            break;
                          }

                          _context.next = 3;
                          return createFileFromUrl(initialFile);

                        case 3:
                          file = _context.sent;
                          _context.next = 7;
                          break;

                        case 6:
                          file = initialFile;

                        case 7:
                          _context.next = 9;
                          return readFile(file);

                        case 9:
                          data = _context.sent;
                          return _context.abrupt("return", {
                            file: file,
                            data: data
                          });

                        case 11:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 4:
              fileObjs = _context2.sent;

              _this.setState(function (state) {
                return {
                  fileObjects: [].concat(state.fileObjects, fileObjs)
                };
              }, _this.notifyFileChange);

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    _this.addFiles = /*#__PURE__*/function () {
      var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee3(newFileObjects) {
        var filesLimit;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filesLimit = _this.props.filesLimit; // Update component state

                _this.setState(function (state) {
                  // Handle a single file
                  if (filesLimit <= 1) {
                    return {
                      fileObjects: [].concat(newFileObjects[0])
                    };
                  } // Handle multiple files


                  return {
                    fileObjects: [].concat(state.fileObjects, newFileObjects)
                  };
                }, _this.notifyFileChange);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.deleteFile = function (removedFileObj, removedFileObjIdx) {
      event.stopPropagation();
      var onDelete = _this.props.onDelete;
      var fileObjects = _this.state.fileObjects; // Calculate remaining fileObjects array

      var remainingFileObjs = fileObjects.filter(function (fileObject, i) {
        return i !== removedFileObjIdx;
      }); // Notify removed file

      if (onDelete) {
        onDelete(removedFileObj.file);
      } // Update local state


      _this.setState({
        fileObjects: remainingFileObjs
      }, _this.notifyFileChange);
    };

    _this.handleClose = function (evt) {
      var _this$props = _this.props,
          clearOnUnmount = _this$props.clearOnUnmount,
          onClose = _this$props.onClose;

      if (onClose) {
        onClose(evt);
      }

      if (clearOnUnmount) {
        _this.setState({
          fileObjects: []
        }, _this.notifyFileChange);
      }
    };

    _this.handleSave = function (evt) {
      var _this$props2 = _this.props,
          clearOnUnmount = _this$props2.clearOnUnmount,
          onSave = _this$props2.onSave;
      var fileObjects = _this.state.fileObjects;

      if (onSave) {
        onSave(fileObjects.map(function (fileObject) {
          return fileObject.file;
        }), evt);
      }

      if (clearOnUnmount) {
        _this.setState({
          fileObjects: []
        }, _this.notifyFileChange);
      }
    };

    return _this;
  }

  createClass_default()(DropzoneDialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInitialFiles();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var clearOnUnmount = this.props.clearOnUnmount;

      if (clearOnUnmount) {
        this.setState({
          fileObjects: []
        }, this.notifyFileChange);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var fileObjects = this.state.fileObjects;
      return (0,react.createElement)(DropzoneDialogBase, extends_default()({}, this.props, {
        fileObjects: fileObjects,
        onAdd: this.addFiles,
        onDelete: this.deleteFile,
        onClose: this.handleClose,
        onSave: this.handleSave
      }));
    }
  }]);

  return DropzoneDialog;
}(react.PureComponent);

DropzoneDialog.defaultProps = {
  clearOnUnmount: true,
  filesLimit: 3,
  initialFiles: []
};
 false ? 0 : void 0;

;// CONCATENATED MODULE: ./src/components/ui/DropzoneDialog.ts

/* harmony default export */ var ui_DropzoneDialog = (DropzoneDialog);

/***/ }),

/***/ 86322:
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 90968:
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 14288:
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 70408:
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 40624:
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 54147:
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports.default = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 84410:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(94675);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 80799:
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 93417:
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 33891:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(33246);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 37330:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(75576).default;

var assertThisInitialized = __webpack_require__(35666);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 64191:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(90968);

var iterableToArrayLimit = __webpack_require__(80799);

var unsupportedIterableToArray = __webpack_require__(54866);

var nonIterableRest = __webpack_require__(93417);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 54866:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(86322);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 42656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(3076);


/***/ }),

/***/ 3076:
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

}]);