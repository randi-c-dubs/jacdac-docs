"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1322],{

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

/***/ 32253:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34621);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80453);




var styles = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function DialogContentText(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: ref
  }, props));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(styles, {
  name: 'MuiDialogContentText'
})(DialogContentText));

/***/ }),

/***/ 49400:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47895);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85505);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34621);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81664);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37595);
/* harmony import */ var _Table_TableContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83604);
/* harmony import */ var _Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78847);










var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({}, theme.typography.body2, {
      display: 'table-cell',
      verticalAlign: 'inherit',
      // Workaround for a rendering bug with spanned columns in Chrome 62.0.
      // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
      borderBottom: "1px solid\n    ".concat(theme.palette.type === 'light' ? (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .lighten */ .$n)((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .alpha */ .Fq)(theme.palette.divider, 1), 0.88) : (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .darken */ ._j)((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__/* .alpha */ .Fq)(theme.palette.divider, 1), 0.68)),
      textAlign: 'left',
      padding: 16
    }),

    /* Styles applied to the root element if `variant="head"` or `context.table.head`. */
    head: {
      color: theme.palette.text.primary,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium
    },

    /* Styles applied to the root element if `variant="body"` or `context.table.body`. */
    body: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `variant="footer"` or `context.table.footer`. */
    footer: {
      color: theme.palette.text.secondary,
      lineHeight: theme.typography.pxToRem(21),
      fontSize: theme.typography.pxToRem(12)
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: '6px 24px 6px 16px',
      '&:last-child': {
        paddingRight: 16
      },
      '&$paddingCheckbox': {
        width: 24,
        // prevent the checkbox column from growing
        padding: '0 12px 0 16px',
        '&:last-child': {
          paddingLeft: 12,
          paddingRight: 16
        },
        '& > *': {
          padding: 0
        }
      }
    },

    /* Styles applied to the root element if `padding="checkbox"`. */
    paddingCheckbox: {
      width: 48,
      // prevent the checkbox column from growing
      padding: '0 0 0 4px',
      '&:last-child': {
        paddingLeft: 0,
        paddingRight: 4
      }
    },

    /* Styles applied to the root element if `padding="none"`. */
    paddingNone: {
      padding: 0,
      '&:last-child': {
        padding: 0
      }
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right',
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `context.table.stickyHeader={true}`. */
    stickyHeader: {
      position: 'sticky',
      top: 0,
      left: 0,
      zIndex: 2,
      backgroundColor: theme.palette.background.default
    }
  };
};
/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */

var TableCell = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TableCell(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      component = props.component,
      paddingProp = props.padding,
      scopeProp = props.scope,
      sizeProp = props.size,
      sortDirection = props.sortDirection,
      variantProp = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(props, ["align", "classes", "className", "component", "padding", "scope", "size", "sortDirection", "variant"]);

  var table = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Table_TableContext__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z);
  var tablelvl2 = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Table_Tablelvl2Context__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z);
  var isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  var role;
  var Component;

  if (component) {
    Component = component;
    role = isHeadCell ? 'columnheader' : 'cell';
  } else {
    Component = isHeadCell ? 'th' : 'td';
  }

  var scope = scopeProp;

  if (!scope && isHeadCell) {
    scope = 'col';
  }

  var padding = paddingProp || (table && table.padding ? table.padding : 'normal');
  var size = sizeProp || (table && table.size ? table.size : 'medium');
  var variant = variantProp || tablelvl2 && tablelvl2.variant;
  var ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(classes.root, classes[variant], className, align !== 'inherit' && classes["align".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(align))], padding !== 'normal' && classes["padding".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(padding))], size !== 'medium' && classes["size".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(size))], variant === 'head' && table && table.stickyHeader && classes.stickyHeader),
    "aria-sort": ariaSort,
    role: role,
    scope: scope
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ __webpack_exports__["Z"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(styles, {
  name: 'MuiTableCell'
})(TableCell));

/***/ }),

/***/ 88880:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');

exports.Z = _default;

/***/ }),

/***/ 30263:
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
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel');

exports.Z = _default;

/***/ }),

/***/ 66717:
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
  d: "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"
}), 'Devices');

exports.Z = _default;

/***/ }),

/***/ 95552:
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
  d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"
}), 'OpenInBrowser');

exports.Z = _default;

/***/ }),

/***/ 8567:
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
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
}), 'Save');

exports.Z = _default;

/***/ }),

/***/ 69130:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ lightEncode; }
/* harmony export */ });
/* harmony import */ var _lightconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23795);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81794);



function cmdCode(cmd) {
  switch (cmd) {
    case "setall":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_SET_ALL */ .Ve;

    case "fade":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_FADE */ .r$;

    case "fadehsv":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_FADE_HSV */ .zy;

    case "rotfwd":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_ROTATE_FWD */ .ln;

    case "rotback":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_ROTATE_BACK */ .fq;

    case "show":
    case "wait":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_SHOW */ .Xo;

    case "range":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_RANGE */ .ht;

    case "mode":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_MODE */ .T;

    case "tmpmode":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_MODE1 */ .Aw;

    case "setone":
      return _lightconstants__WEBPACK_IMPORTED_MODULE_1__/* .LIGHT_PROG_COL1_SET */ .gd;

    case "mult":
      return 0x100;

    default:
      return undefined;
  }
}

function isWhiteSpace(code) {
  return code == 32 || code == 13 || code == 10 || code == 9;
}
/**
 * Encodes a light command into a buffer
 * @param format
 * @param args
 * @returns
 * @category Data Packing
 */


function lightEncode(format, args) {
  // tokens are white-space separated
  // % - number from args[]
  // # - color from args[]
  // #0123ff - color
  // 123 - number
  // commands: set, fade, fadehsv, rotfwd, rotback, pause
  // fadehsv 0 12 #00ffff #ffffff
  var outarr = [];
  var colors = [];
  var pos = 0;
  var currcmd = 0;

  function pushNumber(n) {
    if (n == null || (n | 0) != n || n < 0 || n >= 16383) throw new Error("number out of range: " + n);
    if (n < 128) outarr.push(n);else {
      outarr.push(0x80 | n >> 8);
      outarr.push(n & 0xff);
    }
  }

  function flush() {
    if (currcmd == 0xcf) {
      if (colors.length != 1) throw new Error("setone requires 1 color");
    } else {
      if (colors.length == 0) return;
      if (colors.length <= 3) outarr.push(0xc0 | colors.length);else {
        outarr.push(0xc0);
        outarr.push(colors.length);
      }
    }

    for (var c of colors) {
      outarr.push(c >> 16 & 0xff);
      outarr.push(c >> 8 & 0xff);
      outarr.push(c >> 0 & 0xff);
    }

    colors = [];
  }

  function nextToken() {
    while (isWhiteSpace(format.charCodeAt(pos))) {
      pos++;
    }

    var beg = pos;

    while (pos < format.length && !isWhiteSpace(format.charCodeAt(pos))) {
      pos++;
    }

    return format.slice(beg, pos);
  }

  while (pos < format.length) {
    var token = nextToken();
    var t0 = token.charCodeAt(0);

    if (97 <= t0 && t0 <= 122) {
      // a-z
      flush();
      currcmd = cmdCode(token);
      if (currcmd == undefined) throw new Error("unknown light command: " + token);

      if (currcmd == 0x100) {
        var f = parseFloat(nextToken());
        if (isNaN(f) || f < 0 || f > 2) throw new Error("expecting scale");
        outarr.push(0xd8); // tmpmode

        outarr.push(3); // mult

        outarr.push(0xd0); // setall

        var mm = Math.round(128 * f) & 0xff;
        outarr.push(0xc1);
        outarr.push(mm);
        outarr.push(mm);
        outarr.push(mm);
      } else {
        outarr.push(currcmd);
      }
    } else if (48 <= t0 && t0 <= 57) {
      // 0-9
      pushNumber(parseInt(token));
    } else if (t0 == 37) {
      // %
      if (args.length == 0) throw new Error("out of args, %");
      var v = args.shift();
      if (typeof v != "number") throw new Error("expecting number");
      pushNumber(v);
    } else if (t0 == 35) {
      // #
      if (token.length == 1) {
        if (args.length == 0) throw new Error("out of args, #");

        var _v = args.shift();

        if (typeof _v === "number") colors.push(_v);else if (Array.isArray(_v)) for (var vv of _v) {
          colors.push(vv);
        } else throw Error("invalid number " + _v);
      } else {
        if (token.length == 7) {
          var b = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .fromHex */ .H_)(token.slice(1));
          var c = b[0] << 16 | b[1] << 8 | b[2];
          colors.push(c);
        } else {
          throw new Error("invalid color: " + token);
        }
      }
    }
  }

  flush();
  return new Uint8Array(outarr);
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

/***/ 65063:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Dashboard; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(47895);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/jacdac/useSelectedNodes.ts

function useSelectedNodes(singleSelection) {
  var nodes = (0,react.useRef)(new Set());
  var {
    0: change,
    1: setChange
  } = (0,react.useState)(0);

  var selected = node => nodes.current.has(node === null || node === void 0 ? void 0 : node.id);

  var setSelected = (node, value) => {
    if (!node) return;
    var s = selected(node);

    if (!!value !== s) {
      if (!value) nodes.current.delete(node.id);else {
        if (singleSelection) nodes.current.clear();
        nodes.current.add(node.id);
      }
      setChange(change + 1);
    }
  };

  return {
    hasSelection: nodes.current.size > 0,
    selected,
    setSelected,
    toggleSelected: node => {
      setSelected(node, !selected(node));
    },
    clear: () => {
      nodes.current.clear();
      setChange(0);
    }
  };
}
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./src/components/hooks/useDevices.ts
var useDevices = __webpack_require__(53074);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
// EXTERNAL MODULE: ./src/components/ui/GridHeader.tsx
var GridHeader = __webpack_require__(95393);
// EXTERNAL MODULE: ./src/components/dashboard/DashboardDeviceItem.tsx
var DashboardDeviceItem = __webpack_require__(24301);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardDeviceGroup.tsx

var _excluded = ["title", "action", "devices", "expanded", "toggleExpanded", "children"];





function DeviceGroup(props) {
  var {
    title,
    action,
    devices,
    expanded,
    toggleExpanded,
    children
  } = props,
      other = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  var handleExpand = device => () => toggleExpanded(device);

  var sectionId = (0,react_use_id_hook_esm/* useId */.Me)();
  if (!action && !(devices !== null && devices !== void 0 && devices.length)) return null;
  return /*#__PURE__*/react.createElement("section", {
    id: sectionId
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(GridHeader/* default */.Z, {
    title: title,
    action: action
  }), devices === null || devices === void 0 ? void 0 : devices.map(device => /*#__PURE__*/react.createElement(DashboardDeviceItem/* default */.Z, Object.assign({
    key: device.id,
    device: device,
    expanded: expanded(device),
    toggleExpanded: handleExpand(device)
  }, other))), children));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Clear.js
var Clear = __webpack_require__(58590);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Devices.js
var Devices = __webpack_require__(66717);
// EXTERNAL MODULE: ./src/components/alert/ConnectAlert.tsx
var ConnectAlert = __webpack_require__(94431);
// EXTERNAL MODULE: ./src/components/buttons/ConnectButtons.tsx
var ConnectButtons = __webpack_require__(45608);
// EXTERNAL MODULE: ./src/components/services/useRoleManagerClient.ts
var useRoleManagerClient = __webpack_require__(39922);
// EXTERNAL MODULE: ./src/components/hooks/useMediaQueries.tsx
var useMediaQueries = __webpack_require__(20509);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 25 modules
var servers = __webpack_require__(20079);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
;// CONCATENATED MODULE: ./src/components/alert/SimulateDeviceAlert.tsx








function SimulateDeviceHint() {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);

  var handleStartSimulator = serviceClass => () => (0,servers/* startServiceProviderFromServiceClass */.V6)(bus, serviceClass);

  var {
    toggleShowDeviceHostsDialog
  } = (0,react.useContext)(AppContext/* default */.ZP);
  return /*#__PURE__*/react.createElement(react.Fragment, null, "Simulate devices (", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleStartSimulator(constants/* SRV_BUTTON */.XJR),
    title: "button",
    "aria-label": "start button simulator"
  }, /*#__PURE__*/react.createElement("span", {
    "aria-label": "button emoji",
    role: "img"
  }, "\uD83D\uDD18")), ",", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleStartSimulator(constants/* SRV_BUZZER */.J1$),
    title: "buzzer",
    "aria-label": "start buzzer simulator"
  }, /*#__PURE__*/react.createElement("span", {
    "aria-label": "piano emoji",
    role: "img"
  }, "\uD83C\uDFB9")), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleStartSimulator(constants/* SRV_JOYSTICK */.vRO),
    title: "joystick",
    "aria-label": "start joystick simulator"
  }, /*#__PURE__*/react.createElement("span", {
    "aria-label": "joystick emoji",
    role: "img"
  }, "\uD83D\uDD79\uFE0F")), ",", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleStartSimulator(constants/* SRV_LED */.i04),
    title: "LED",
    "aria-label": "start LED simulator"
  }, /*#__PURE__*/react.createElement("span", {
    "aria-label": "lightbulb emoji",
    role: "img"
  }, "\uD83D\uDCA1")), ",", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    onClick: handleStartSimulator(constants/* SRV_TRAFFIC_LIGHT */.jHN),
    title: "traffic light",
    "aria-label": "start traffic light simulator"
  }, /*#__PURE__*/react.createElement("span", {
    "aria-label": "traffic light emoji",
    role: "img"
  }, "\uD83D\uDEA6")), ", ...) by clicking \xA0", /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "start simulator",
    onClick: toggleShowDeviceHostsDialog
  }, /*#__PURE__*/react.createElement(Add/* default */.Z, null)), ".");
}
function SimulateDeviceAlert() {
  return /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "info"
  }, /*#__PURE__*/react.createElement(SimulateDeviceHint, null));
}
;// CONCATENATED MODULE: ./src/components/dashboard/Dashboard.tsx

var Dashboard_excluded = ["hideSimulators", "showConnect", "showStartSimulators", "deviceSort", "deviceFilter"];










 // tslint:disable-next-line: no-submodule-imports match-default-export-name

 // tslint:disable-next-line: no-submodule-imports match-default-export-name








function defaultDeviceSort(l, r) {
  var srvScore = srv => srv.packets.reduce((prev, pkt) => prev + ((0,spec/* isReading */.vz)(pkt) ? 10 : (0,spec/* isValueOrIntensity */.sX)(pkt) ? 1 : 0), 0) || 0;

  var score = srvs => srvs.reduce((prev, srv) => srvScore(srv), 0);

  var ls = score(l.services().slice(1).map(srv => srv.specification).filter(spec => !!spec));
  var rs = score(r.services().slice(1).map(srv => srv.specification).filter(spec => !!spec));
  if (ls !== rs) return -ls + rs;
  return (0,utils/* strcmp */.eT)(l.deviceId, r.deviceId);
} // eslint-disable-next-line @typescript-eslint/no-unused-vars


function defaultDeviceFilter(d) {
  return true;
}

function Dashboard(props) {
  var {
    hideSimulators,
    showConnect,
    showStartSimulators,
    deviceSort = defaultDeviceSort,
    deviceFilter = defaultDeviceFilter
  } = props,
      other = (0,objectWithoutProperties/* default */.Z)(props, Dashboard_excluded);

  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var {
    toggleShowDeviceHostsDialog
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var devices = (0,useDevices/* default */.Z)({
    announced: true,
    ignoreSelf: true
  }).filter(deviceFilter).sort(deviceSort);
  var {
    mobile
  } = (0,useMediaQueries/* default */.Z)();
  var {
    selected,
    toggleSelected
  } = useSelectedNodes(mobile);
  var [simulators, physicals] = (0,utils/* splitFilter */.ap)(devices, d => !!bus.findServiceProvider(d.deviceId));
  var roleManager = (0,useRoleManagerClient/* default */.Z)();

  var handleClearSimulators = () => {
    bus.serviceProviders().forEach(dev => bus.removeServiceProvider(dev));
  };

  var handleStartSimulators = () => roleManager === null || roleManager === void 0 ? void 0 : roleManager.startSimulators();

  return /*#__PURE__*/react.createElement(react.Fragment, null, !hideSimulators && /*#__PURE__*/react.createElement(DeviceGroup, Object.assign({
    title: "Simulators",
    action: /*#__PURE__*/react.createElement(react.Fragment, null, showStartSimulators && !!roleManager && /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
      title: "start missing simulators",
      onClick: handleStartSimulators
    }, /*#__PURE__*/react.createElement(Devices/* default */.Z, null)), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
      title: "start simulator",
      onClick: toggleShowDeviceHostsDialog
    }, /*#__PURE__*/react.createElement(Add/* default */.Z, null)), /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
      title: "clear simulators",
      onClick: handleClearSimulators
    }, /*#__PURE__*/react.createElement(Clear/* default */.Z, null)), " "),
    devices: simulators,
    expanded: selected,
    toggleExpanded: toggleSelected
  }, other), showStartSimulators && !(simulators !== null && simulators !== void 0 && simulators.length) && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(SimulateDeviceAlert, null))), /*#__PURE__*/react.createElement(DeviceGroup, Object.assign({
    title: "Devices",
    action: showConnect && /*#__PURE__*/react.createElement(ConnectButtons/* default */.Z, {
      full: false,
      transparent: true
    }),
    devices: physicals,
    expanded: selected,
    toggleExpanded: toggleSelected
  }, other), showConnect && !physicals.length && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(ConnectAlert/* default */.Z, {
    closeable: true
  }))));
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

/***/ 45430:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ FileTabs; }
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts + 2 modules
var useKeyboardNavigationProps = __webpack_require__(68786);
// EXTERNAL MODULE: ./src/components/FileSystemContext.tsx + 2 modules
var FileSystemContext = __webpack_require__(3365);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/OpenInBrowser.js
var OpenInBrowser = __webpack_require__(95552);
;// CONCATENATED MODULE: ./src/components/fs/FileSystemChip.tsx





function FileSystemChip() {
  var {
    fileSystem,
    showDirectoryPicker
  } = (0,react.useContext)(FileSystemContext/* default */.Z);
  var root = (0,useChange/* default */.Z)(fileSystem, _ => _ === null || _ === void 0 ? void 0 : _.root);
  var handleOpenDirectory = showDirectoryPicker;

  var handleCloseDirectory = () => fileSystem.root = undefined;

  if (!fileSystem) return null;
  return /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    clickable: true,
    avatar: /*#__PURE__*/react.createElement(OpenInBrowser/* default */.Z, null),
    label: (root === null || root === void 0 ? void 0 : root.name) || "open directory",
    onClick: handleOpenDirectory,
    onDelete: root ? handleCloseDirectory : undefined
  });
}
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(52468);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(65733);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(32253);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1059);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(89952);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(83332);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
;// CONCATENATED MODULE: ./src/components/fs/FileNewFileChip.tsx






function FileNewFileChip(props) {
  var {
    name: newFileName,
    content: newFileContent,
    label,
    extension
  } = props;
  var {
    fileSystem
  } = (0,react.useContext)(FileSystemContext/* default */.Z);
  var {
    0: open,
    1: setOpen
  } = (0,react.useState)(false);
  var {
    0: value,
    1: setValue
  } = (0,react.useState)("");
  var valueId = (0,react_use_id_hook_esm/* useId */.Me)();

  var handleOpen = () => {
    setValue("");
    setOpen(true);
  };

  var handleOk = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      setOpen(false);
      var name = value.toLocaleLowerCase().replace(/\s+/g, "");
      if (newFileName) yield fileSystem.createWorkingDirectory(name, newFileName, newFileContent);else {
        if (extension) name += "." + extension;
        var d = fileSystem.workingDirectory || fileSystem.root;
        var f = yield d.fileAsync(name, {
          create: true
        });
        yield f.write(newFileContent);
        fileSystem.workingFile = f;
      }
    });

    return function handleOk() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleCancel = () => setOpen(false);

  var handleValueChange = event => {
    setValue(event.target.value);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    clickable: true,
    label: label || "new...",
    icon: /*#__PURE__*/react.createElement(Add/* default */.Z, null),
    onClick: handleOpen
  }), /*#__PURE__*/react.createElement(Dialog/* default */.Z, {
    open: open,
    fullWidth: true
  }, /*#__PURE__*/react.createElement(DialogContent/* default */.Z, null, /*#__PURE__*/react.createElement(DialogContentText/* default */.Z, null, "Choose a project name"), /*#__PURE__*/react.createElement(TextField/* default */.Z, {
    id: valueId,
    value: value,
    label: "Value",
    fullWidth: true,
    onChange: handleValueChange
  })), /*#__PURE__*/react.createElement(DialogActions/* default */.Z, null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "contained",
    onClick: handleCancel
  }, "Cancel"), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "contained",
    color: "primary",
    disabled: !value,
    onClick: handleOk
  }, "Ok"))));
}
;// CONCATENATED MODULE: ./src/components/fs/FileSystemNodeChip.tsx


function FileSystemNodeChip(props) {
  var {
    node,
    selected,
    onClick
  } = props;
  var {
    name
  } = node;
  return /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    clickable: true,
    label: name.replace(/\.json$/i, ""),
    color: selected ? "primary" : undefined,
    onClick: onClick
  });
}
;// CONCATENATED MODULE: ./src/components/fs/FileTabs.tsx








function FileTabs(props) {
  var {
    newFileName,
    newFileContent,
    hideDirectories,
    hideFiles,
    directoryFilter,
    fileFilter,
    newFileLabel,
    newFileExtension
  } = props;
  var {
    fileSystem
  } = (0,react.useContext)(FileSystemContext/* default */.Z);
  var root = (0,useChange/* default */.Z)(fileSystem, _ => _ === null || _ === void 0 ? void 0 : _.root);
  var workingDirectory = (0,useChange/* default */.Z)(fileSystem, _ => _ === null || _ === void 0 ? void 0 : _.workingDirectory);
  var workingFile = (0,useChange/* default */.Z)(fileSystem, _ => _ === null || _ === void 0 ? void 0 : _.workingFile);
  var directories = (0,useChange/* default */.Z)(root, _ => {
    var _$directories;

    return _ === null || _ === void 0 ? void 0 : (_$directories = _.directories) === null || _$directories === void 0 ? void 0 : _$directories.filter(d => !directoryFilter || directoryFilter(d.name));
  });
  var files = (0,useChange/* default */.Z)(root, _ => {
    var _$files;

    return _ === null || _ === void 0 ? void 0 : (_$files = _.files) === null || _$files === void 0 ? void 0 : _$files.filter(d => !fileFilter || fileFilter(d.name));
  });
  var gridRef = (0,react.useRef)();
  var keyboardProps = (0,useKeyboardNavigationProps/* default */.Z)(gridRef.current);

  var handleDirectorySelected = handle => () => fileSystem.workingDirectory = handle;

  var handleFileSelected = handle => () => fileSystem.workingFile = handle;

  if (!fileSystem) return null;
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, Object.assign({
    ref: gridRef,
    container: true,
    spacing: 1
  }, keyboardProps), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(FileSystemChip, null)), !hideDirectories && (directories === null || directories === void 0 ? void 0 : directories.map(node => /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    key: node.name
  }, /*#__PURE__*/react.createElement(FileSystemNodeChip, {
    node: node,
    selected: node === workingDirectory,
    onClick: handleDirectorySelected(node)
  })))), !hideFiles && (files === null || files === void 0 ? void 0 : files.map(node => /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    key: node.name
  }, /*#__PURE__*/react.createElement(FileSystemNodeChip, {
    node: node,
    selected: node === workingFile,
    onClick: handleFileSelected(node)
  })))), root && newFileContent && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(FileNewFileChip, {
    name: newFileName,
    content: newFileContent,
    label: newFileLabel,
    extension: newFileExtension
  })));
}

/***/ }),

/***/ 68786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useKeyboardNavigationProps; }
});

// EXTERNAL MODULE: ./src/components/hooks/useFireKey.ts
var useFireKey = __webpack_require__(8966);
;// CONCATENATED MODULE: ./src/components/hooks/useArrowKeys.ts

var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
function useArrowKeys(options) {
  var {
    onLeft,
    onUp,
    onRight,
    onDown,
    symmetric
  } = options;
  if (!onLeft && !onUp && !onRight && !onDown) return undefined;
  var handlers = {
    [LEFT_KEY]: onLeft,
    [RIGHT_KEY]: onRight,
    [UP_KEY]: onUp || symmetric && onRight,
    [DOWN_KEY]: onDown || symmetric && onLeft
  };
  return e => {
    var charCode = (0,useFireKey/* keyCodeFromEvent */.$)(e);
    var handler = handlers[charCode];

    if (handler) {
      e.preventDefault();
      handler();
    }
  };
}
;// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigation.ts
function useKeyboardNavigation(parentRef) {
  var query = '[tabindex="0"]';

  var onMove = offset => () => {
    console.log('keyboard move', {
      offset
    });
    var focusable = Array.from((parentRef === null || parentRef === void 0 ? void 0 : parentRef.querySelectorAll(query)) || []);

    if (focusable.length) {
      var me = focusable.findIndex(f => f === document.activeElement);
      var next = (me + offset + focusable.length) % focusable.length;
      focusable[next].focus();
    }
  };

  return onMove;
}
;// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts


function useKeyboardNavigationProps(parentRef, vertical) {
  var onMove = useKeyboardNavigation(parentRef);
  var onKeyDown = useArrowKeys({
    onLeft: !vertical && onMove(-1),
    onRight: !vertical && onMove(1),
    onDown: vertical && onMove(1),
    onUp: vertical && onMove(-1)
  });
  return {
    onKeyDown: parentRef && onKeyDown
  };
}

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

/***/ 7877:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Commissioner; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(73108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(83332);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(1059);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(80838);
/* harmony import */ var _jacdac_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(8567);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(39545);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(30263);
/* harmony import */ var _components_hooks_useDevices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53074);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71815);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(49683);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(86300);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(49400);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(78475);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4093);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(99395);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(58063);
/* harmony import */ var _components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95393);
/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65063);
/* harmony import */ var _components_ServiceManagerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99808);
/* harmony import */ var _components_useEffectAsync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7751);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81794);
/* harmony import */ var _jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45484);
/* harmony import */ var _jacdac_ts_src_jdom_light__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(70274);
/* harmony import */ var _jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91635);
/* harmony import */ var _components_FileSystemContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3365);
/* harmony import */ var _components_fs_FileTabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45430);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54774);
/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(84377);

 // tslint:disable-next-line: no-submodule-imports


 // tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name
// tslint:disable-next-line: no-submodule-imports match-default-export-name



 // tslint:disable-next-line: no-submodule-imports



// tslint:disable-next-line: no-submodule-imports
 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports

 // tslint:disable-next-line: no-submodule-imports
















var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z)(() => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z)({
  buttonFail: {
    color: "white",
    backgroundColor: "red"
  },
  buttonSuccess: {
    color: "white",
    backgroundColor: "green"
  }
}));

function serviceArrayMatched(descriptor) {
  var matched = true;
  descriptor.services.forEach(service => {
    var srv = descriptor.servicesSeen.filter(srv => {
      return srv.serviceClass == service.serviceClass && srv.serviceIndex == service.serviceIndex;
    });
    if (srv.length == 0) matched = false;
  });
  return matched;
}

function dateString() {
  var date = new Date();
  return date.toDateString().replace(/ /g, "-");
}

function isBrain(d) {
  return !!(d !== null && d !== void 0 && d.hasService(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_ROLE_MANAGER */ .igi));
}

function DataSetTable(props) {
  var classes = useStyles();
  var {
    dataSet,
    updateDescriptor
  } = props;
  var {
    descriptors,
    headers
  } = dataSet;

  var setPass = (deviceDescriptor, state) => () => {
    deviceDescriptor.pass = state;
    updateDescriptor(deviceDescriptor);
  };

  var handleCommentChange = event => {
    var descriptor = descriptors.find(d => d.deviceIdentifier == event.target.id);
    descriptor.comment = event.target.value;
    updateDescriptor(descriptor);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
    "aria-label": "device table",
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, null, headers.map(header => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
    align: "right",
    key: header
  }, header)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_24__/* .default */ .Z, null, descriptors === null || descriptors === void 0 ? void 0 : descriptors.map(descriptor => {
    var _descriptor$services$;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_22__/* .default */ .Z, {
      key: descriptor.deviceIdentifier
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
      align: "center"
    }, descriptor.deviceIdentifier), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
      align: "center"
    }, descriptor.productIdentifier && descriptor.productIdentifier.toString(16), ((_descriptor$services$ = descriptor.services.filter(service => {
      return service.serviceClass == _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_ROLE_MANAGER */ .igi;
    })) === null || _descriptor$services$ === void 0 ? void 0 : _descriptor$services$.length) && "BRAIN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
      align: "center"
    }, descriptor.services.map(service => service.name + " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
      align: "center"
    }, descriptor.servicesSeen.map(service => service.name + " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
      align: "center"
    }, serviceArrayMatched(descriptor) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        color: "green"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_25__/* .default */ .Z, {
      fontSize: "small"
    }), "PASS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
      align: "center"
    }, descriptor.pass && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z, {
      "aria-label": "Toggle pass state",
      variant: "contained",
      className: classes.buttonSuccess,
      onClick: setPass(descriptor, false),
      startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_25__/* .default */ .Z, {
        fontSize: "small"
      })
    }, "Pass"), !descriptor.pass && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z, {
      "aria-label": "Toggle pass state",
      variant: "contained",
      className: classes.buttonFail,
      onClick: setPass(descriptor, true),
      startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_27__/* .default */ .Z, {
        fontSize: "small"
      })
    }, "FAIL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_23__/* .default */ .Z, {
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z, {
      onChange: handleCommentChange,
      id: descriptor.deviceIdentifier,
      label: "Comment",
      fullWidth: true,
      value: descriptor.comment
    })));
  }))));
}

function LEDTest(_x) {
  return _LEDTest.apply(this, arguments);
}

function _LEDTest() {
  _LEDTest = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z)(function* (service) {
    while (service.device.connected) {
      for (var i = 0; i < 8; i++) {
        var encoded = (0,_jacdac_ts_src_jdom_light__WEBPACK_IMPORTED_MODULE_10__/* .lightEncode */ ._)("setone % #\n                    show 20", [i, 0xff0000]);
        if (service.device.connected) yield service === null || service === void 0 ? void 0 : service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .LedPixelCmd.Run */ .yB$.Run, encoded);
        yield (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .delay */ .gw)(200);
      }
    }
  });
  return _LEDTest.apply(this, arguments);
}

function SingleRGBLEDTest(_x2) {
  return _SingleRGBLEDTest.apply(this, arguments);
}

function _SingleRGBLEDTest() {
  _SingleRGBLEDTest = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z)(function* (service) {
    var pack = (r, g, b, animDelay) => {
      var unpacked = [r, g, b, animDelay];
      return (0,_jacdac_ts_src_jdom_pack__WEBPACK_IMPORTED_MODULE_11__/* .jdpack */ .AV)("u8 u8 u8 u8", unpacked);
    };

    while (service.device.connected) {
      yield service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .LedCmd.Animate */ .tVE.Animate, pack(255, 0, 0, 200));
      yield (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .delay */ .gw)(500);
      yield service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .LedCmd.Animate */ .tVE.Animate, pack(0, 255, 0, 200));
      yield (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .delay */ .gw)(500);
      yield service.sendCmdAsync(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .LedCmd.Animate */ .tVE.Animate, pack(0, 0, 255, 200));
      yield (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .delay */ .gw)(500);
    }
  });
  return _SingleRGBLEDTest.apply(this, arguments);
}

function StatusLEDTest(_x3) {
  return _StatusLEDTest.apply(this, arguments);
}

function _StatusLEDTest() {
  _StatusLEDTest = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z)(function* (device) {
    var l = device.statusLight;

    while (device.connected) {
      l.blink(0xff0000, 0x000000, 250, 3);
      yield (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .delay */ .gw)(1000);
      l.blink(0x00ff00, 0x000000, 250, 3);
      yield (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .delay */ .gw)(1000);
      l.blink(0x0000ff, 0x000000, 250, 3);
      yield (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_8__/* .delay */ .gw)(1000);
    }
  });
  return _StatusLEDTest.apply(this, arguments);
}

function Commissioner() {
  var {
    bus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_jacdac_Context__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z);
  var {
    setError,
    enqueueSnackbar
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_AppContext__WEBPACK_IMPORTED_MODULE_15__/* .default */ .ZP);
  var {
    fileSystem
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_FileSystemContext__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z);
  var workingFile = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z)(fileSystem, _ => _ === null || _ === void 0 ? void 0 : _.workingFile);
  var {
    0: filterBrains,
    1: setFilterBrains
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  var devices = (0,_components_hooks_useDevices__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({
    announced: true,
    ignoreSelf: true,
    ignoreSimulators: true
  }).filter(d => !filterBrains || !isBrain(d));
  var {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  var {
    0: dataSet,
    1: setDataSet
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  var tableHeaders = ["Device identifier", "Product identifier", "Services advertised", "Services seen", "Packets seen", "Functional test pass", "Comment"];
  var {
    fileStorage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_ServiceManagerContext__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP);

  var testDevice = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z)(function* (d) {
      StatusLEDTest(d);

      for (var srv of d.services()) {
        switch (srv.serviceClass) {
          case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_LED_PIXEL */ .zEX:
            LEDTest(srv);
            break;

          case _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_LED */ .i04:
            SingleRGBLEDTest(srv);
            break;
        }
      }
    });

    return function testDevice(_x4) {
      return _ref.apply(this, arguments);
    };
  }(); // file handling


  (0,_components_useEffectAsync__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z)(function* () {
    if (!workingFile) return;

    try {
      var text = yield workingFile.textAsync();
      var newDataSet = JSON.parse(text);
      console.debug(newDataSet);
      enqueueSnackbar(workingFile.name + " loaded...");
    } catch (e) {
      setError(e);
    }
  }), [workingFile]);
  (0,_components_useEffectAsync__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z)(function* () {
    var newDataSet = ((dataSet === null || dataSet === void 0 ? void 0 : dataSet.slice(0)) || []).filter(d => !filterBrains || !d.brain);

    var _loop = function* _loop(d) {
      var _newDataSet$filter;

      if ((_newDataSet$filter = newDataSet.filter(entry => entry.deviceIdentifier == d.deviceId)) !== null && _newDataSet$filter !== void 0 && _newDataSet$filter.length) return "continue";
      var services = [];
      d.services().filter(service => {
        return service.serviceClass != _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_CONTROL */ .gm9;
      }).forEach(s => {
        services.push({
          name: s.name,
          serviceClass: s.serviceClass,
          serviceIndex: s.serviceIndex
        });
      });
      newDataSet.push({
        brain: isBrain(d),
        deviceIdentifier: d.deviceId,
        productIdentifier: yield d.resolveProductIdentifier(3),
        services,
        servicesSeen: [],
        pass: true,
        comment: ""
      }); // launch tests

      testDevice(d);
    };

    for (var d of devices) {
      var _ret = yield* _loop(d);

      if (_ret === "continue") continue;
    }

    setDataSet(newDataSet);
  }), [(0,_jacdac_ts_src_jdom_eventsource__WEBPACK_IMPORTED_MODULE_9__/* .dependencyId */ .BX)(devices), filterBrains]);
  var table = {
    headers: tableHeaders,
    descriptors: dataSet
  };

  var handleTitleChange = event => {
    setTitle(event.target.value);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => bus.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .PACKET_RECEIVE */ .u_S, packet => {
    var _newDataSet$find;

    var newDataSet = (dataSet === null || dataSet === void 0 ? void 0 : dataSet.slice(0)) || [];
    var contains = newDataSet.find(descriptor => descriptor.deviceIdentifier == packet.deviceIdentifier).servicesSeen.filter(service => service.serviceClass == packet.serviceClass && service.serviceIndex == packet.serviceIndex);
    if (contains.length) return;
    (_newDataSet$find = newDataSet.find(descriptor => descriptor.deviceIdentifier == packet.deviceIdentifier)) === null || _newDataSet$find === void 0 ? void 0 : _newDataSet$find.servicesSeen.push({
      name: packet.friendlyServiceName,
      serviceClass: packet.serviceClass,
      serviceIndex: packet.serviceIndex
    });
    setDataSet(newDataSet);
  }), [bus, dataSet]);

  var renderCSV = () => {
    var sep = ",";
    var lineEnding = "\r\n";
    var str = "device identifier" + sep + "product identifier" + sep + "services" + sep + "Packets seen" + sep + "Functional test pass" + sep + "Comment" + lineEnding;
    dataSet.forEach(descriptor => {
      str += "0x" + descriptor.deviceIdentifier + sep;
      if (descriptor.productIdentifier) str += "0x" + descriptor.productIdentifier.toString(16) + sep;else if (descriptor.services.find(service => service.serviceClass == _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SRV_ROLE_MANAGER */ .igi)) str += "BRAIN" + sep;else str += "UNKNOWN" + sep;
      str += "" + descriptor.services.map(service => service.name).join(" ") + sep;
      if (serviceArrayMatched(descriptor)) str += "YES" + sep;else str += "NO" + sep;
      if (descriptor.pass) str += "PASS" + sep;else str += "FAIL" + sep;
      str += descriptor.comment + lineEnding;
    });
    return str;
  };

  (0,_components_useEffectAsync__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z)(function* () {
    if (!workingFile || !dataSet) return; // save JSON

    yield workingFile.write(JSON.stringify(dataSet));
    var csvFile = yield workingFile.parentDirectory.fileAsync(workingFile.name.replace(/\.json$/i, ".csv"), {
      create: true
    });
    yield csvFile.write(renderCSV()); // generate CSV
  }), [workingFile, dataSet]);

  var handleOnClearClick = () => {
    setDataSet(undefined);
  };

  var handleDownloadCSV = /*#__PURE__*/function () {
    var _ref5 = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_29__/* .default */ .Z)(function* () {
      var str = renderCSV();
      var fileTitle = title.length ? title + "-" : "";
      fileStorage.saveText(fileTitle + "commissioning-" + dateString() + ".csv", str);
    });

    return function handleDownloadCSV() {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleFilterBrains = () => setFilterBrains(!filterBrains);

  var deviceFilter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(d => !filterBrains || !isBrain(d), [filterBrains]);

  var handleUpdateDescriptor = descriptor => {
    var newDataSet = (dataSet === null || dataSet === void 0 ? void 0 : dataSet.slice(0)) || [];
    var el = newDataSet.find(d => d.deviceIdentifier == descriptor.deviceIdentifier);

    if (el) {
      el.comment = descriptor.comment;
      el.pass = descriptor.pass;
      setDataSet(newDataSet);
    }
  };

  var fileFilter = f => /\.json$/i.test(f);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Commissioner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    hideSimulators: true,
    showAvatar: true,
    showHeader: true,
    showConnect: true,
    showStartSimulators: false,
    deviceFilter: deviceFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Commissioning data"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_fs_FileTabs__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
    hideDirectories: true,
    fileFilter: fileFilter,
    newFileContent: "[]",
    newFileExtension: "json"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z, {
    "aria-label": "Clear data",
    variant: "contained",
    color: "primary",
    onClick: handleOnClearClick
  }, "Clear")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z, {
    "aria-label": "Download data",
    variant: "contained",
    color: "secondary",
    onClick: handleDownloadCSV,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_31__/* .default */ .Z, null)
  }, "Download CSV")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* .default */ .Z, {
    "aria-label": "Clear data",
    variant: "contained",
    onClick: handleFilterBrains
  }, filterBrains ? "Show brains" : "Hide brains")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__/* .default */ .Z, {
    onChange: handleTitleChange,
    label: "Title",
    fullWidth: true,
    value: title
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataSetTable, {
    dataSet: table,
    updateDescriptor: handleUpdateDescriptor
  }))));
}

/***/ })

}]);