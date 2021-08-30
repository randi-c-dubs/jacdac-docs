"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1018],{

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

/***/ 91018:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Toc; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10920);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70274);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59355);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4381);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80791);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36176);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38030);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84377);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35313);


 // tslint:disable-next-line: no-submodule-imports




var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(theme => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

function treeifyToc(toc) {
  var tree = toc.slice(0); // reconstruct tree

  var tocNodes = {};
  tree.forEach((node, index) => {
    var k = node.path.replace(/\/$/, "");

    if (tocNodes[k]) {
      tree[index] = undefined;
    } else tocNodes[k] = node;
  });
  tree = tree.filter(node => !!node);
  tree.forEach((node, index) => {
    var parts = node.path.replace(/\/$/, "").split("/");
    parts.pop();

    while (parts.length) {
      var parentPath = "" + parts.join("/");
      var parent = tocNodes[parentPath];

      if (parent) {
        if (!parent.children) parent.children = [];
        parent.children.push(node);
        tree[index] = undefined;
        break;
      }

      parts.pop();
    }
  });
  var r = {
    tree: tree.filter(node => !!node),
    nodes: tocNodes
  };

  function sortNodes(nodes) {
    nodes.sort((l, r) => l.order - r.order);
    nodes.forEach(node => node.children && sortNodes(node.children));
  }

  sortNodes(r.tree);
  return r;
}

function Toc(props) {
  var {
    pagePath
  } = props;
  var {
    setDrawerType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP);
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)();
  var classes = useStyles();
  var data = (0,gatsby__WEBPACK_IMPORTED_MODULE_3__.useStaticQuery)("249313281");
  /*
    site {
      siteMetadata {
        title
      }
  }
     allServicesJson {
      nodes {
        name
        shortId
      }
    } 
  allDevicesJson {
      nodes {
        id
        name
      }
    }
  */

  var handleClick = node => () => {
    if (node.collapse) setDrawerType(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .DrawerType.None */ .jw.None);
  };

  var tree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    // convert pages into tree
    var toc = [{
      name: "Home",
      path: "/",
      order: 0,
      collapse: true
    }, {
      name: "Dashboard",
      path: "/dashboard/",
      order: 0.5,
      collapse: true
    }, {
      name: "Protocol",
      path: "/protocol/",
      order: 0.55,
      collapse: true
    }, {
      name: "Hardware",
      path: "/hardware/",
      order: 0.6,
      collapse: true
    }, {
      name: "Software",
      path: "/software/",
      order: 0.6,
      collapse: true
    }, {
      name: "Tools",
      path: "/tools/",
      order: 0.7
    }, {
      name: "Reference",
      path: "/reference/",
      order: 0.8
    }, {
      name: "Services",
      path: "/services/",
      order: 0.9
    }, {
      name: "Devices",
      path: "/devices/",
      order: 0.95
    }, {
      name: "Clients",
      path: "/clients/",
      order: 5
    }];
    data.allMdx.edges.map(node => node.node).filter(node => {
      var _node$frontmatter;

      return !!((_node$frontmatter = node.frontmatter) !== null && _node$frontmatter !== void 0 && _node$frontmatter.title) || !!node.headings.length && !/404/.test(node.headings[0].value);
    }).filter(node => {
      var _node$frontmatter2;

      return !node.frontmatter || !((_node$frontmatter2 = node.frontmatter) !== null && _node$frontmatter2 !== void 0 && _node$frontmatter2.hideToc);
    }).map(node => {
      var _node$frontmatter3, _node$frontmatter4, _node$frontmatter5;

      var r = {
        name: ((_node$frontmatter3 = node.frontmatter) === null || _node$frontmatter3 === void 0 ? void 0 : _node$frontmatter3.title) || node.headings[0].value,
        path: node.fields.slug,
        order: ((_node$frontmatter4 = node.frontmatter) === null || _node$frontmatter4 === void 0 ? void 0 : _node$frontmatter4.order) !== undefined ? (_node$frontmatter5 = node.frontmatter) === null || _node$frontmatter5 === void 0 ? void 0 : _node$frontmatter5.order : 50
      };
      return r;
    }).forEach(node => toc.push(node));
    /*
    data.allServicesJson.nodes.map(node => {
    return {
    name: node.name,
    path: `/services/${node.shortId}/`
    }
    }).forEach(node => toc.push(node))
    data.allDevicesJson.nodes.map(node => {
    return {
    name: node.name,
    path: `/devices/${identifierToUrlPath(node.id)}/`
    }
    }).forEach(node => toc.push(node));
    */

    var {
      tree
    } = treeifyToc(toc);
    return tree;
  }, []);

  function TocListItem(props) {
    var {
      entry,
      level
    } = props;
    var {
      path,
      children,
      name
    } = entry;
    var selected = pagePath === path;
    var sub = level === 1 || !!(children !== null && children !== void 0 && children.length);
    var showSub = sub && !!(children !== null && children !== void 0 && children.length) && pagePath.startsWith(path);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
      button: true,
      selected: selected,
      key: "tocitem" + path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_1__.Link, {
      style: {
        color: theme.palette.text.primary
      },
      onClick: handleClick(entry),
      to: path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
      primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
        variant: sub ? "button" : "caption"
      }, name)
    }))), showSub && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
      ml: level > 0 ? 1 : 0
    }, children === null || children === void 0 ? void 0 : children.map(child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TocListItem, {
      key: child.path,
      entry: child,
      level: level + 1
    }))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
    dense: true,
    className: classes.root
  }, tree.map(entry =>
  /*#__PURE__*/
  // eslint-disable-next-line react/prop-types
  react__WEBPACK_IMPORTED_MODULE_0__.createElement(TocListItem, {
    key: entry.path,
    entry: entry,
    level: 0
  })));
}

/***/ })

}]);
//# sourceMappingURL=1018-5da6c7cd43dcbeedf6f5.js.map