"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3133],{

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

/***/ 59828:
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
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/test/testspec.ts + 1 modules
var testspec = __webpack_require__(45831);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
;// CONCATENATED MODULE: ./src/components/ServiceMarkdown.tsx








function ServiceMarkdown(props) {
  var {
    classIdentifier,
    source
  } = props;
  var service = (0,spec/* serviceSpecificationFromClassIdentifier */.d5)(classIdentifier);
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
//# sourceMappingURL=component---src-templates-service-tsx-51ad6291716a62540c17.js.map