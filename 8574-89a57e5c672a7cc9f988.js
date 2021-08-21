"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[8574],{

/***/ 16002:
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
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Edit');

exports.Z = _default;

/***/ }),

/***/ 18574:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CodeSandboxButton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84377);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16002);
/* harmony import */ var _IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79885);






function CodeSandboxButton(props) {
  var source = props.source;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP),
      setError = _useContext.setError;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      importing = _useState[0],
      setImporting = _useState[1];

  var handleClick = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var content, html, x, data, url;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              content = source;
              html = "\n<html>\n    <script src=\"./node_modules/jacdac-ts/dist/jacdac-umd.js\" />\n    <body>\n        <p>\n            Open console to see messages...\n        </p>\n        <script src=\"./index.js\" />\n    </body>\n</html>    \n        ";
              _context.prev = 2;
              setImporting(true);
              _context.next = 6;
              return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                },
                body: JSON.stringify({
                  files: {
                    "package.json": {
                      content: {
                        dependencies: {
                          "jacdac-ts": "latest"
                        }
                      }
                    },
                    "index.js": {
                      content: content
                    },
                    "index.html": {
                      content: html
                    }
                  }
                })
              });

            case 6:
              x = _context.sent;
              _context.next = 9;
              return x.json();

            case 9:
              data = _context.sent;
              console.log(data);
              url = "https://codesandbox.io/s/" + data.sandbox_id + "?file=/index.js";
              window.location.href = url;
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);
              setError(_context.t0);

            case 18:
              _context.prev = 18;
              setImporting(false);
              return _context.finish(18);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 15, 18, 21]]);
    }));

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    onClick: handleClick,
    disabled: importing,
    title: "Try in CodeSandbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, null));
}

/***/ })

}]);