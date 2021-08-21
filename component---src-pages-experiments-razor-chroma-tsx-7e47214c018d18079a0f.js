"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1674],{

/***/ 74692:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Chroma; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53719);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85413);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47235);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54774);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83332);









/**
 * Razor Chroma SDK client
 * Docs: https://assets.razerzone.com/dev_portal/REST/html/index.html
 */

var ChromaClient = /*#__PURE__*/function (_JDClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(ChromaClient, _JDClient);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function ChromaClient() {
    var _this;

    _this = _JDClient.call(this) || this;
    _this.supported = true;

    _this.mount(function () {
      return _this.stop();
    });

    return _this;
  }

  var _proto = ChromaClient.prototype;

  _proto.startHeartbeat = function startHeartbeat() {
    var _this2 = this;

    this.heartbeatInterval = setInterval(function () {
      if (_this2.unmounted) clearInterval(_this2.heartbeatInterval);

      _this2.fetch("/heartbeat", "PUT");
    }, 2000);
  };

  _proto.start = /*#__PURE__*/function () {
    var _start = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var resp;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!this.supported || this.connected)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              console.debug("razor: connecting", {
                conn: this.connectionInfo
              });
              _context.next = 5;
              return fetch("https://chromasdk.io:54236/razer/chromasdk", {
                method: "POST",
                headers: {
                  "content-type": "application/json"
                },
                body: JSON.stringify({
                  title: "Microsoft Jacdac",
                  description: "Jacdac interface to Razer",
                  author: {
                    name: "Microsoft",
                    contact: "jacdac@microsoft.com"
                  },
                  device_supported: ["keyboard", "mouse", "headset", "mousepad", "keypad", "chromalink"],
                  category: "application"
                })
              });

            case 5:
              resp = _context.sent;
              console.log({
                resp: resp
              });

              if (!this.unmounted) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return");

            case 9:
              if (!(resp.status === 200)) {
                _context.next = 19;
                break;
              }

              _context.next = 12;
              return resp.json();

            case 12:
              this.connectionInfo = _context.sent;

              if (!this.unmounted) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return");

            case 15:
              this.startHeartbeat();
              this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHANGE */ .Ver);
              _context.next = 20;
              break;

            case 19:
              if (resp.status == 404) {
                this.supported = false;
                console.log("razor not supported");
                this.emit(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHANGE */ .Ver);
              }

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function start() {
      return _start.apply(this, arguments);
    }

    return start;
  }();

  _proto.stop = /*#__PURE__*/function () {
    var _stop = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var uri;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.debug("razor: disconnecting");

              if (this.heartbeatInterval) {
                clearInterval(this.heartbeatInterval);
                this.heartbeatInterval = undefined;
              }

              if (!this.connectionInfo) {
                _context2.next = 13;
                break;
              }

              uri = this.connectionInfo.uri;
              this.connectionInfo = undefined;
              _context2.prev = 5;
              _context2.next = 8;
              return fetch(uri, {
                method: "DELETE",
                headers: {
                  "content-type": "application/json"
                }
              });

            case 8:
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](5);
              console.debug(_context2.t0);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[5, 10]]);
    }));

    function stop() {
      return _stop.apply(this, arguments);
    }

    return stop;
  }();

  _proto.startHeadsetEffect = /*#__PURE__*/function () {
    var _startHeadsetEffect = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(effect, data) {
      var body, ceffect, color;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              ceffect = "CHROMA_" + effect.toUpperCase();

              if (ceffect === "CHROMA_NONE") {
                body = {
                  effect: ceffect
                };
              } else if (ceffect === "CHROMA_CUSTOM") {
                body = {
                  effect: ceffect,
                  param: data
                };
              } else if (ceffect === "CHROMA_STATIC") {
                color = {
                  color: data
                };
                body = {
                  effect: ceffect,
                  param: color
                };
              }

              _context3.next = 4;
              return this.fetch("/headset", "PUT", body);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function startHeadsetEffect(_x4, _x5) {
      return _startHeadsetEffect.apply(this, arguments);
    }

    return startHeadsetEffect;
  }();

  _proto.fetch = function (_fetch) {
    function fetch(_x, _x2, _x3) {
      return _fetch.apply(this, arguments);
    }

    fetch.toString = function () {
      return _fetch.toString();
    };

    return fetch;
  }( /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(path, method, body) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.start();

            case 2:
              if (this.connected) {
                _context4.next = 4;
                break;
              }

              return _context4.abrupt("return");

            case 4:
              _context4.prev = 4;
              _context4.next = 7;
              return fetch(this.connectionInfo.uri + path, {
                method: method,
                body: body && JSON.stringify(body),
                headers: {
                  "content-type": "application/json"
                }
              });

            case 7:
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](4);
              this.connectionInfo = undefined;

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[4, 9]]);
    }));

    return function (_x6, _x7, _x8) {
      return _ref.apply(this, arguments);
    };
  }());

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(ChromaClient, [{
    key: "connected",
    get: function get() {
      return !!this.connectionInfo;
    }
  }]);

  return ChromaClient;
}(_jacdac_ts_src_jdom_client__WEBPACK_IMPORTED_MODULE_2__/* .JDClient */ .z);

function Chroma() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new ChromaClient()),
      client = _useState[0];

  var connected = (0,_jacdac_useChange__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(client, function (c) {
    return c.connected;
  }); // make sure to cleanup

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    client.start(); // async

    return function () {
      return client.unmount();
    };
  }, []);

  var handleStatic = function handleStatic(v) {
    return /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return client.startHeadsetEffect("static", v);

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
  };

  var handleCustom = function handleCustom(v) {
    return /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return client.startHeadsetEffect("custom", v);

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
  }; // color: BGR


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, "connected: ", connected ? "connected" : "disconnected")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    onClick: handleStatic(0xff0000)
  }, "headset 255"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    onClick: handleStatic(0x00ff00)
  }, "headset 128"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    onClick: handleStatic(0x0000ff)
  }, "headset 0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    onClick: handleCustom([0, 64, 128, 196, 255])
  }, "headset custom")));
}

/***/ })

}]);