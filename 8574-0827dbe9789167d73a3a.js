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
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84377);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16002);
/* harmony import */ var _IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79885);





var HTML_TEMPLATE = "<p>Open Javascript console to see messages...</p>";
function CodeSandboxButton(props) {
  var {
    title,
    source
  } = props;
  var {
    js = "",
    html = HTML_TEMPLATE
  } = source;
  var {
    setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP);
  var {
    0: importing,
    1: setImporting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  var handleClick = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(function* () {
      var indexJs = "\nimport \"milligram\";\nimport { createUSBBus, CHANGE } from \"jacdac-ts\";\nconst btn = document.getElementById(\"connectbtn\");\nconst bus = createUSBBus();\nbus.on(CHANGE, () => { btn.innerText = bus.connected ? \"connected \uD83C\uDF89\" : \"connect\" })\nbtn.onclick = async () => bus.connect();\n\n" + js + "\n";
      var indexHtml = "\n<html>\n    <body>\n        <h1>Jacdac " + (title || "demo") + "</h1>\n        <div>\n        <button id=\"connectbtn\">connect</button>\n        </div>    \n\n" + html + "\n\n    <footer>\n        <small>\n        Need to learn more about Jacdac?\n        <a target=\"_blank\" href=\"https://aka.ms/jacdac\">Read the docs</a>\n        or\n        <a\n            target=\"_blank\"\n            href=\"https://github.com/microsoft/jacdac/discussions\"\n            >start a discussion</a\n        >.\n        </small>\n    </footer>\n    <script src=\"./index.js\" />\n    </body>\n</html>    \n        ";

      try {
        setImporting(true);
        var x = yield fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", {
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
                    "jacdac-ts": "latest",
                    milligram: "latest"
                  }
                }
              },
              "index.js": {
                content: indexJs
              },
              "index.html": {
                content: indexHtml
              }
            }
          })
        });
        var data = yield x.json();
        console.log(data);
        var url = "https://codesandbox.io/s/" + data.sandbox_id + "?file=/index.js";
        window.location.href = url;
      } catch (error) {
        setError(error);
      } finally {
        setImporting(false);
      }
    });

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IconButtonWithTooltip__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    onClick: handleClick,
    disabled: importing,
    title: "Try in CodeSandbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null));
}

/***/ })

}]);
//# sourceMappingURL=8574-0827dbe9789167d73a3a.js.map