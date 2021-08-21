"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1745],{

/***/ 31745:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SelectRoleDialog; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52468);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96422);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65733);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80791);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19640);
/* harmony import */ var _services_useRoleManagerClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39922);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54774);
/* harmony import */ var _services_RoleListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73588);








function SelectRoleDialog(props) {
  var service = props.service,
      onClose = props.onClose;
  var open = !!service;
  var dialogId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();
  var labelId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .Me)();
  var roleManager = (0,_services_useRoleManagerClient__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
  var roles = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(roleManager, function (rm) {
    return rm === null || rm === void 0 ? void 0 : rm.compatibleRoles(service);
  }, [service]);
  var currentRole = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(service, function (srv) {
    return srv.role;
  });
  var hasRoles = !!(roles !== null && roles !== void 0 && roles.length);

  var handleClick = function handleClick(role) {
    return /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return roleManager.setRole(service, role.name);

            case 2:
              onClose();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    id: dialogId,
    "aria-labelledby": labelId,
    open: open,
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    id: labelId
  }, hasRoles ? "Select a role" : "No role available"), hasRoles && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, null, roles === null || roles === void 0 ? void 0 : roles.map(function (role) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_services_RoleListItem__WEBPACK_IMPORTED_MODULE_5__/* .RoleListItem */ .t, {
      key: role.name,
      role: role,
      selected: currentRole === role.name,
      onClick: handleClick(role)
    });
  }))));
}

/***/ })

}]);