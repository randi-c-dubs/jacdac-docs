"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1745],{

/***/ 31745:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SelectRoleDialog; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73108);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52468);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96422);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65733);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80791);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19640);
/* harmony import */ var _services_useRoleManagerClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39922);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54774);
/* harmony import */ var _services_RoleListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73588);







function SelectRoleDialog(props) {
  var {
    service,
    onClose
  } = props;
  var open = !!service;
  var dialogId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_1__/* .useId */ .Me)();
  var roleManager = (0,_services_useRoleManagerClient__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
  var roles = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(roleManager, rm => rm === null || rm === void 0 ? void 0 : rm.compatibleRoles(service), [service]);
  var currentRole = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(service, srv => srv.role);
  var hasRoles = !!(roles !== null && roles !== void 0 && roles.length);

  var handleClick = role => /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(function* () {
    yield roleManager.setRole(service, role.name);
    onClose();
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    id: dialogId,
    "aria-labelledby": labelId,
    open: open,
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    id: labelId
  }, hasRoles ? "Select a role" : "No role available"), hasRoles && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, roles === null || roles === void 0 ? void 0 : roles.map(role => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_services_RoleListItem__WEBPACK_IMPORTED_MODULE_4__/* .RoleListItem */ .t, {
    key: role.name,
    role: role,
    selected: currentRole === role.name,
    onClick: handleClick(role)
  })))));
}

/***/ })

}]);
//# sourceMappingURL=1745-8aa5e6a463c4086751dc.js.map