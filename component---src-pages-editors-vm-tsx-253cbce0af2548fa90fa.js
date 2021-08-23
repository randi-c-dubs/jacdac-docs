"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2186],{

/***/ 62481:
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
  d: "M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"
}), 'BugReport');

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

/***/ 66601:
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
  d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
}), 'Pause');

exports.Z = _default;

/***/ }),

/***/ 34264:
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
  d: "M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"
}), 'PlayForWork');

exports.Z = _default;

/***/ }),

/***/ 1797:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": function() { return /* binding */ VMServiceClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85413);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13173);
/* harmony import */ var _jdom_serviceclient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56763);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71815);
/* harmony import */ var _jdom_pack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91635);







var VMServiceClient = /*#__PURE__*/function (_JDServiceClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(VMServiceClient, _JDServiceClient);

  function VMServiceClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    _this._registers = {};
    _this._reportUpdate = {};
    _this._events = {};
    return _this;
  }

  var _proto = VMServiceClient.prototype;

  _proto.registerRegister = function registerRegister(regName, handler) {
    if (!this._registers[regName]) {
      var pkt = this.service.specification.packets.find(function (pkt) {
        return (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isRegister */ .x5)(pkt) && pkt.name === regName;
      });

      if (pkt) {
        var register = this.service.register(pkt.identifier);
        this._registers[regName] = register;
        this.mount(register.subscribe(_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHANGE */ .Ver, handler));
      }
    }
  };

  _proto.registerEvent = function registerEvent(eventName, handler) {
    if (!this._events[eventName]) {
      var pkt = this.service.specification.packets.find(function (pkt) {
        return (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isEvent */ .cO)(pkt) && pkt.name === eventName;
      });

      if (pkt) {
        var event = this.service.event(pkt.identifier);
        this._events[eventName] = event;
        this.mount(event.subscribe(_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .EVENT */ .Ks0, handler));
      }
    }
  };

  _proto.sendCommandAsync = /*#__PURE__*/function () {
    var _sendCommandAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(commandName, values) {
      var pkt;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pkt = this.service.specification.packets.find(function (p) {
                return (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isCommand */ .ao)(p) && p.name === commandName;
              });

              if (!pkt) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return this.service.sendCmdAsync(pkt.identifier, (0,_jdom_pack__WEBPACK_IMPORTED_MODULE_4__/* .jdpack */ .AV)(pkt.packFormat, values), true);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function sendCommandAsync(_x, _x2) {
      return _sendCommandAsync.apply(this, arguments);
    }

    return sendCommandAsync;
  }();

  _proto.writeRegisterAsync = /*#__PURE__*/function () {
    var _writeRegisterAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(regName, values) {
      var register;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              register = this._registers[regName];

              if (!(register.code === _jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SystemReg.Value */ .ZJq.Value)) {
                _context2.next = 4;
                break;
              }

              _context2.next = 4;
              return this.setEnabled();

            case 4:
              _context2.next = 6;
              return this.writeRegAsync(this._registers[regName], values);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function writeRegisterAsync(_x3, _x4) {
      return _writeRegisterAsync.apply(this, arguments);
    }

    return writeRegisterAsync;
  }();

  _proto.writeRegAsync = /*#__PURE__*/function () {
    var _writeRegAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(jdreg, values) {
      var _jdreg$specification;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return jdreg === null || jdreg === void 0 ? void 0 : jdreg.sendSetPackedAsync((_jdreg$specification = jdreg.specification) === null || _jdreg$specification === void 0 ? void 0 : _jdreg$specification.packFormat, values, true);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function writeRegAsync(_x5, _x6) {
      return _writeRegAsync.apply(this, arguments);
    }

    return writeRegAsync;
  }();

  _proto.setEnabled = /*#__PURE__*/function () {
    var _setEnabled = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
      var pkt, jdreg;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              pkt = this.service.specification.packets.find(_jdom_spec__WEBPACK_IMPORTED_MODULE_1__/* .isIntensity */ .tC);

              if (!(pkt && pkt.fields[0].type === "bool")) {
                _context4.next = 5;
                break;
              }

              jdreg = this.service.register(_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .SystemReg.Intensity */ .ZJq.Intensity);
              _context4.next = 5;
              return this.writeRegAsync(jdreg, [true]);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function setEnabled() {
      return _setEnabled.apply(this, arguments);
    }

    return setEnabled;
  }();

  _proto.lookupRegisterAsync = /*#__PURE__*/function () {
    var _lookupRegisterAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(root, fld, reportUpdate) {
      var _register$unpackedVal, register, field, _this$_events$root$fi, _field;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (reportUpdate === void 0) {
                reportUpdate = false;
              }

              if (!(root in this._registers)) {
                _context5.next = 14;
                break;
              }

              register = this._registers[root];

              if (reportUpdate && !this._reportUpdate[root]) {
                this._reportUpdate[root] = true;
                this.mount(register.subscribe(_jdom_constants__WEBPACK_IMPORTED_MODULE_3__/* .REPORT_UPDATE */ .rGZ, function () {}));
              }

              _context5.next = 6;
              return register.refresh();

            case 6:
              if (fld) {
                _context5.next = 10;
                break;
              }

              return _context5.abrupt("return", (_register$unpackedVal = register.unpackedValue) === null || _register$unpackedVal === void 0 ? void 0 : _register$unpackedVal[0]);

            case 10:
              field = register.fields.find(function (f) {
                return f.name === fld;
              });
              return _context5.abrupt("return", field === null || field === void 0 ? void 0 : field.value);

            case 12:
              _context5.next = 17;
              break;

            case 14:
              if (!(root in this._events)) {
                _context5.next = 17;
                break;
              }

              _field = (_this$_events$root$fi = this._events[root].fields) === null || _this$_events$root$fi === void 0 ? void 0 : _this$_events$root$fi.find(function (f) {
                return f.name === fld;
              });
              return _context5.abrupt("return", _field === null || _field === void 0 ? void 0 : _field.value);

            case 17:
              return _context5.abrupt("return", undefined);

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function lookupRegisterAsync(_x7, _x8, _x9) {
      return _lookupRegisterAsync.apply(this, arguments);
    }

    return lookupRegisterAsync;
  }();

  return VMServiceClient;
}(_jdom_serviceclient__WEBPACK_IMPORTED_MODULE_2__/* .JDServiceClient */ .P);

/***/ }),

/***/ 18108:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ unparse; },
/* harmony export */   "W": function() { return /* binding */ VMExprEvaluator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42656);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function unparse(e) {
  switch (e.type) {
    case "ArrayExpression":
      {
        var ae = e;
        return "[" + ae.elements.map(unparse).join(", ") + "]";
      }

    case "CallExpression":
      {
        var caller = e;
        return unparse(caller.callee) + "(" + caller.arguments.map(unparse).join(", ") + ")";
      }

    case "MemberExpression":
      {
        var root = e;
        return root.computed ? unparse(root.object) + "[" + unparse(root.property) + "]" : unparse(root.object) + "." + unparse(root.property);
      }

    case "BinaryExpression":
    case "LogicalExpression":
      {
        var be = e;
        return "(" + unparse(be.left) + " " + be.operator + " " + unparse(be.right) + ")";
      }

    case "UnaryExpression":
      {
        var ue = e;
        return "" + ue.operator + unparse(ue.argument);
      }

    case "Identifier":
      {
        return e.name;
      }

    case "Literal":
      {
        return e.raw;
      }

    default:
      return "TODO";
  }
}
var VMExprEvaluator = /*#__PURE__*/function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function VMExprEvaluator(env, callEval) {
    this.exprStack = [];
    this.reportUpdate = false;
    this.env = env;
    this.callEval = callEval;
  }

  var _proto = VMExprEvaluator.prototype;

  _proto.tos = function tos() {
    return this.exprStack[this.exprStack.length - 1];
  };

  _proto.pop = function pop() {
    return this.exprStack.pop();
  };

  _proto.evalAsync = /*#__PURE__*/function () {
    var _evalAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e, reportUpdate) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (reportUpdate === void 0) {
                reportUpdate = false;
              }

              this.exprStack = [];
              this.reportUpdate = reportUpdate;
              _context.next = 5;
              return this.visitExpressionAsync(e);

            case 5:
              return _context.abrupt("return", this.exprStack.pop());

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function evalAsync(_x, _x2) {
      return _evalAsync.apply(this, arguments);
    }

    return evalAsync;
  }();

  _proto.visitExpressionAsync = /*#__PURE__*/function () {
    var _visitExpressionAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(e) {
      var ret, be, right, left, ue, top, le, val, id, _val, lit;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = e.type;
              _context2.next = _context2.t0 === "ArrayExpression" ? 3 : _context2.t0 === "CallExpression" ? 4 : _context2.t0 === "BinaryExpression" ? 6 : _context2.t0 === "UnaryExpression" ? 55 : _context2.t0 === "LogicalExpression" ? 73 : _context2.t0 === "MemberExpression" ? 94 : _context2.t0 === "Identifier" ? 99 : _context2.t0 === "Literal" ? 105 : 108;
              break;

            case 3:
              return _context2.abrupt("break", 108);

            case 4:
              if (this.callEval) {
                ret = this.callEval(e, this);
                this.exprStack.push(ret);
              } else this.exprStack.push(undefined);

              return _context2.abrupt("break", 108);

            case 6:
              be = e;
              _context2.next = 9;
              return this.visitExpressionAsync(be.left);

            case 9:
              _context2.next = 11;
              return this.visitExpressionAsync(be.right);

            case 11:
              right = this.exprStack.pop();
              left = this.exprStack.pop();
              _context2.t1 = be.operator;
              _context2.next = _context2.t1 === "+" ? 16 : _context2.t1 === "-" ? 18 : _context2.t1 === "/" ? 20 : _context2.t1 === "*" ? 22 : _context2.t1 === "%" ? 24 : _context2.t1 === ">>" ? 26 : _context2.t1 === ">>>" ? 28 : _context2.t1 === "<<" ? 30 : _context2.t1 === "|" ? 32 : _context2.t1 === "&" ? 34 : _context2.t1 === "^" ? 36 : _context2.t1 === "==" ? 38 : _context2.t1 === "!=" ? 40 : _context2.t1 === "===" ? 42 : _context2.t1 === "!==" ? 44 : _context2.t1 === "<" ? 46 : _context2.t1 === ">" ? 48 : _context2.t1 === "<=" ? 50 : _context2.t1 === ">=" ? 52 : 54;
              break;

            case 16:
              this.exprStack.push(left + right);
              return _context2.abrupt("return");

            case 18:
              this.exprStack.push(left - right);
              return _context2.abrupt("return");

            case 20:
              this.exprStack.push(left / right);
              return _context2.abrupt("return");

            case 22:
              this.exprStack.push(left * right);
              return _context2.abrupt("return");

            case 24:
              this.exprStack.push(left % right);
              return _context2.abrupt("return");

            case 26:
              this.exprStack.push(left >> right);
              return _context2.abrupt("return");

            case 28:
              this.exprStack.push(left >>> right);
              return _context2.abrupt("return");

            case 30:
              this.exprStack.push(left << right);
              return _context2.abrupt("return");

            case 32:
              this.exprStack.push(left | right);
              return _context2.abrupt("return");

            case 34:
              this.exprStack.push(left & right);
              return _context2.abrupt("return");

            case 36:
              this.exprStack.push(left ^ right);
              return _context2.abrupt("return");

            case 38:
              this.exprStack.push(left == right);
              return _context2.abrupt("return");

            case 40:
              this.exprStack.push(left != right);
              return _context2.abrupt("return");

            case 42:
              this.exprStack.push(left === right);
              return _context2.abrupt("return");

            case 44:
              this.exprStack.push(left !== right);
              return _context2.abrupt("return");

            case 46:
              this.exprStack.push(left < right);
              return _context2.abrupt("return");

            case 48:
              this.exprStack.push(left > right);
              return _context2.abrupt("return");

            case 50:
              this.exprStack.push(left <= right);
              return _context2.abrupt("return");

            case 52:
              this.exprStack.push(left >= right);
              return _context2.abrupt("return");

            case 54:
              return _context2.abrupt("break", 108);

            case 55:
              ue = e;
              _context2.next = 58;
              return this.visitExpressionAsync(ue.argument);

            case 58:
              top = this.exprStack.pop();
              _context2.t2 = ue.operator;
              _context2.next = _context2.t2 === "ABS" ? 62 : _context2.t2 === "!" ? 64 : _context2.t2 === "~" ? 66 : _context2.t2 === "-" ? 68 : _context2.t2 === "+" ? 70 : 72;
              break;

            case 62:
              this.exprStack.push(Math.abs(top));
              return _context2.abrupt("return");

            case 64:
              this.exprStack.push(!top);
              return _context2.abrupt("return");

            case 66:
              this.exprStack.push(~top);
              return _context2.abrupt("return");

            case 68:
              this.exprStack.push(-top);
              return _context2.abrupt("return");

            case 70:
              this.exprStack.push(+top);
              return _context2.abrupt("return");

            case 72:
              return _context2.abrupt("break", 108);

            case 73:
              le = e;
              _context2.next = 76;
              return this.visitExpressionAsync(le.left);

            case 76:
              _context2.t3 = le.operator;
              _context2.next = _context2.t3 === "||" ? 79 : _context2.t3 === "&&" ? 86 : 93;
              break;

            case 79:
              if (!this.tos()) {
                _context2.next = 83;
                break;
              }

              return _context2.abrupt("return");

            case 83:
              _context2.next = 85;
              return this.visitExpressionAsync(le.right);

            case 85:
              return _context2.abrupt("return");

            case 86:
              if (this.tos()) {
                _context2.next = 90;
                break;
              }

              return _context2.abrupt("return");

            case 90:
              _context2.next = 92;
              return this.visitExpressionAsync(le.right);

            case 92:
              return _context2.abrupt("return");

            case 93:
              return _context2.abrupt("break", 108);

            case 94:
              _context2.next = 96;
              return this.env(e, this.reportUpdate);

            case 96:
              val = _context2.sent;
              //if (val === undefined) {
              //    throw new VMError(VMCode.InternalError, `lookup of ${unparse(e)} failed`)
              //}
              this.exprStack.push(val);
              return _context2.abrupt("return");

            case 99:
              id = e;
              _context2.next = 102;
              return this.env(id.name, this.reportUpdate);

            case 102:
              _val = _context2.sent;
              // if (val === undefined)
              //    throw new VMError(VMCode.InternalError, `lookup of ${id.name} failed`)
              this.exprStack.push(_val);
              return _context2.abrupt("return");

            case 105:
              lit = e;
              this.exprStack.push(lit.value);
              return _context2.abrupt("return");

            case 108:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function visitExpressionAsync(_x3) {
      return _visitExpressionAsync.apply(this, arguments);
    }

    return visitExpressionAsync;
  }();

  return VMExprEvaluator;
}();

/***/ }),

/***/ 90815:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(90293);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(42862);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/flags.ts
var flags = __webpack_require__(21258);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(42656);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(25342);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(75167);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(53719);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(85413);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js + 4 modules
var wrapNativeSuper = __webpack_require__(83001);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/eventsource.ts
var eventsource = __webpack_require__(45484);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var jdom_spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__(91635);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/registerserver.ts
var registerserver = __webpack_require__(1591);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/sensorserver.ts
var sensorserver = __webpack_require__(85863);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/server.ts









var VM_EXTERNAL_REQUEST = "vmExternalRequest";

var VMRegisterServer = /*#__PURE__*/function (_JDRegisterServer) {
  (0,inheritsLoose/* default */.Z)(VMRegisterServer, _JDRegisterServer);

  function VMRegisterServer(serviceServer, reg, defaultValue) {
    var _this;

    _this = _JDRegisterServer.call(this, serviceServer, reg.identifier, defaultValue) || this;
    _this.serviceServer = serviceServer;
    _this.reg = reg;
    return _this;
  }

  var _proto = VMRegisterServer.prototype;

  _proto.sendGetAsync = /*#__PURE__*/function () {
    var _sendGetAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.serviceServer.raiseGetRegisterEvent(this.reg.name);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function sendGetAsync() {
      return _sendGetAsync.apply(this, arguments);
    }

    return sendGetAsync;
  }();

  _proto.theRealSendGetAsync = /*#__PURE__*/function () {
    var _theRealSendGetAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _JDRegisterServer.prototype.sendGetAsync.call(this);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function theRealSendGetAsync() {
      return _theRealSendGetAsync.apply(this, arguments);
    }

    return theRealSendGetAsync;
  }();

  return VMRegisterServer;
}(registerserver/* default */.Z); // TODO: need to take specification into account and
// TOOD: implement the proper base class (SensorServer)


var VMServiceServer = /*#__PURE__*/function (_SensorServer) {
  (0,inheritsLoose/* default */.Z)(VMServiceServer, _SensorServer);

  function VMServiceServer(role, spec) {
    var _this2;

    _this2 = _SensorServer.call(this, spec.classIdentifier, {
      readingValues: [false],
      streamingInterval: 50
    }) || this;
    _this2.eventNameToId = {};
    _this2.regNameToId = {};
    _this2.regFieldToId = {};
    _this2.commandPackets = {};
    _this2.cmdFieldToId = {};
    _this2.role = role;
    _this2.spec = spec;
    spec.packets.filter(jdom_spec/* isHighLevelRegister */.vr).map(function (reg) {
      var _reg$fields;

      var regServer = _this2.addExistingRegister(new VMRegisterServer((0,assertThisInitialized/* default */.Z)(_this2), reg));

      _this2.regNameToId[reg.name] = reg.identifier;
      (_reg$fields = reg.fields) === null || _reg$fields === void 0 ? void 0 : _reg$fields.forEach(function (pkt, index) {
        _this2.regFieldToId[reg.name + ":" + pkt.name] = index;
      });
      regServer.subscribe(constants/* CHANGE */.Ver, function () {
        _this2.emit(VM_EXTERNAL_REQUEST, {
          kind: "set",
          role: _this2.role,
          tgt: reg.name
        });
      });
    });
    spec.packets.filter(jdom_spec/* isCommand */.ao).map(function (cmd) {
      var _cmd$fields;

      _this2.addCommand(cmd.identifier, function (pkt) {
        _this2.commandPackets[cmd.identifier] = pkt.decoded;

        _this2.emit(VM_EXTERNAL_REQUEST, {
          kind: "cmd",
          role: _this2.role,
          tgt: cmd.name
        });
      });

      (_cmd$fields = cmd.fields) === null || _cmd$fields === void 0 ? void 0 : _cmd$fields.forEach(function (pkt, index) {
        _this2.regFieldToId[cmd.name + ":" + pkt.name] = index;
      });
    });
    spec.packets.filter(jdom_spec/* isHighLevelEvent */.jl).forEach(function (pkt) {
      _this2.eventNameToId[pkt.name] = pkt.identifier;
    });
    return _this2;
  }

  var _proto2 = VMServiceServer.prototype;

  _proto2.raiseGetRegisterEvent = function raiseGetRegisterEvent(regName) {
    this.emit(VM_EXTERNAL_REQUEST, {
      kind: "get",
      role: this.role,
      tgt: regName
    });
  };

  _proto2.respondToGetRegisterEvent = /*#__PURE__*/function () {
    var _respondToGetRegisterEvent = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3(regName) {
      var reg;
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              reg = this.register(this.regNameToId[regName]);
              _context3.next = 3;
              return reg.theRealSendGetAsync();

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function respondToGetRegisterEvent(_x) {
      return _respondToGetRegisterEvent.apply(this, arguments);
    }

    return respondToGetRegisterEvent;
  }();

  _proto2.sendEventNameAsync = /*#__PURE__*/function () {
    var _sendEventNameAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee4(eventName, values) {
      var pkt;
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              pkt = this.spec.packets.find(function (p) {
                return (0,jdom_spec/* isHighLevelEvent */.jl)(p) && p.name === eventName;
              });

              if (!pkt) {
                _context4.next = 4;
                break;
              }

              _context4.next = 4;
              return this.sendEvent(this.eventNameToId[eventName], (0,pack/* jdpack */.AV)(pkt.packFormat, values));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function sendEventNameAsync(_x2, _x3) {
      return _sendEventNameAsync.apply(this, arguments);
    }

    return sendEventNameAsync;
  }();

  _proto2.lookupRegister = function lookupRegister(root, fld) {
    if (this.regNameToId[root]) {
      var _reg$values;

      var _reg = this.register(this.regNameToId[root]);

      if (!fld) return (_reg$values = _reg.values()) === null || _reg$values === void 0 ? void 0 : _reg$values[0];else {
        var _reg$values2;

        return (_reg$values2 = _reg.values()) === null || _reg$values2 === void 0 ? void 0 : _reg$values2[this.regFieldToId[root + ":" + fld]];
      }
    } else if (this.commandPackets[root]) {
      var _cmd$decoded, _cmd$decoded$this$cmd;

      var cmd = this.commandPackets[root];
      return (_cmd$decoded = cmd.decoded) === null || _cmd$decoded === void 0 ? void 0 : (_cmd$decoded$this$cmd = _cmd$decoded[this.cmdFieldToId[root + ":" + fld]]) === null || _cmd$decoded$this$cmd === void 0 ? void 0 : _cmd$decoded$this$cmd.value;
    }

    return undefined;
  };

  _proto2.writeRegister = function writeRegister(root, ev) {
    var reg = this.register(this.regNameToId[root]);
    reg.setValues(ev);
  };

  return VMServiceServer;
}(sensorserver/* default */.Z);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/client.ts
var client = __webpack_require__(1797);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/environment.ts









var GLOBAL_CHANGE = "vmEnvGlobalChange";
var REGISTER_CHANGE = "vmEnvRegisterChange";
var EXTERNAL_REQUEST = "vmEnvEventChange";
var VMExceptionCode;

(function (VMExceptionCode) {
  VMExceptionCode["RoleNoService"] = "vmEnvRoleNoService";
  VMExceptionCode["TypeMismatch"] = "vmEnvTypeMismatch";
  VMExceptionCode["InternalError"] = "vmInternalError";
})(VMExceptionCode || (VMExceptionCode = {}));

var VMException = /*#__PURE__*/function (_Error) {
  (0,inheritsLoose/* default */.Z)(VMException, _Error);

  function VMException(code, data) {
    var _this;

    _this = _Error.call(this) || this;
    _this.code = code;
    _this.data = data;
    return _this;
  }

  return VMException;
}( /*#__PURE__*/(0,wrapNativeSuper/* default */.Z)(Error));
var VMEnvironment = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(VMEnvironment, _JDEventSource);

  function VMEnvironment(registers, events, serverRoles) {
    var _this2;

    _this2 = _JDEventSource.call(this) || this;
    _this2._currentRequest = undefined;
    _this2._clientEnvs = {};
    _this2._serverEnvs = {};
    _this2._globals = {};
    _this2._rolesBound = [];
    _this2._rolesUnbound = [];
    _this2.registers = registers;
    _this2.events = events;
    _this2.serverRoles = serverRoles;

    _this2.setupServers();

    return _this2;
  }

  var _proto = VMEnvironment.prototype;

  _proto.setupServers = function setupServers() {
    var _this3 = this;

    this.serverRoles.forEach(function (p) {
      // get the service
      var service = (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(p.serviceClass);

      if (service) {
        // spin up JDServiceServer
        var serviceServer = new VMServiceServer(p.role, service);
        _this3._serverEnvs[p.role] = serviceServer;
        serviceServer.subscribe(VM_EXTERNAL_REQUEST, function (p) {
          _this3._currentRequest = p;

          _this3.emit(EXTERNAL_REQUEST, p);
        });
      }
    });
  };

  _proto.globals = function globals() {
    return this._globals;
  };

  _proto.servers = function servers() {
    var _this4 = this;

    return Object.keys(this._serverEnvs).map(function (k) {
      return {
        role: k,
        serviceClass: _this4._serverEnvs[k].serviceClass,
        server: _this4._serverEnvs[k]
      };
    });
  };

  _proto.serviceChanged = function serviceChanged(role, service) {
    var _this5 = this;

    if (this._clientEnvs[role]) {
      this._clientEnvs[role].unmount();

      this._clientEnvs[role] = undefined;
    }

    if (!service) this._rolesUnbound.push(role);else {
      this._rolesBound.push(role);

      this._clientEnvs[role] = new client/* VMServiceClient */.z(service);
      this.registers.forEach(function (r) {
        if (r.role === role) {
          _this5.registerRegister(role, r.register);
        }
      });
      this.events.forEach(function (e) {
        if (e.role === role) {
          _this5.registerEvent(role, e.event);
        }
      });
    }
  };

  _proto.roleBound = function roleBound(role) {
    return !!this._clientEnvs[role];
  };

  _proto.registerRegister = function registerRegister(role, reg) {
    var _this6 = this;

    var serviceEnv = this.getService(role);
    serviceEnv.registerRegister(reg, function () {
      _this6.emit(REGISTER_CHANGE, reg);
    });
  };

  _proto.registerEvent = function registerEvent(role, tgt) {
    var _this7 = this;

    var serviceEnv = this.getService(role);
    serviceEnv.registerEvent(tgt, function () {
      _this7._currentRequest = {
        kind: "event",
        role: role,
        tgt: tgt
      };

      _this7.emit(EXTERNAL_REQUEST, _this7._currentRequest);
    });
  };

  _proto.getRootName = function getRootName(e) {
    if (!e) return undefined;
    if (typeof e === "string") return e;
    if (e.type === "MemberExpression") return e.object.name;
    return undefined;
  };

  _proto.getService = function getService(e) {
    var root = this.getRootName(e);
    if (!root) return undefined;
    var s = this._clientEnvs[root];
    return s;
  };

  _proto.getServer = function getServer(e) {
    var root = this.getRootName(e);
    if (!root) return undefined;
    var s = this._serverEnvs[root];
    return s;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;

  _proto.sendCommandAsync =
  /*#__PURE__*/
  function () {
    var _sendCommandAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(e, values) {
      var serviceEnv, server;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              serviceEnv = this.getService(e);

              if (!serviceEnv) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return serviceEnv === null || serviceEnv === void 0 ? void 0 : serviceEnv.sendCommandAsync(e.property.name, values);

            case 4:
              _context.next = 9;
              break;

            case 6:
              server = this.getServer(e);
              _context.next = 9;
              return server === null || server === void 0 ? void 0 : server.sendEventNameAsync(e.property.name, values);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function sendCommandAsync(_x, _x2) {
      return _sendCommandAsync.apply(this, arguments);
    }

    return sendCommandAsync;
  }();

  _proto.lookupAsync = /*#__PURE__*/function () {
    var _lookupAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(e, reportUpdate) {
      var roleName, me, _this$_globals$local, local, ep, root, fld, serviceEnv, server;

      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (reportUpdate === void 0) {
                reportUpdate = false;
              }

              roleName = this.getRootName(e);

              if (!roleName.startsWith("$var")) {
                _context2.next = 8;
                break;
              }

              me = e;

              if (!(me.property.type === "Identifier")) {
                _context2.next = 7;
                break;
              }

              local = me.property.name;
              return _context2.abrupt("return", (_this$_globals$local = this._globals[local]) === null || _this$_globals$local === void 0 ? void 0 : _this$_globals$local.value);

            case 7:
              return _context2.abrupt("return", undefined);

            case 8:
              ep = e.property;
              root = typeof ep === "string" ? ep : ep.type === "Identifier" ? ep.name : ep.object.name;
              fld = typeof ep === "string" ? undefined : ep.type === "Identifier" ? undefined : ep.property.name;
              serviceEnv = this.getService(e);

              if (!serviceEnv) {
                _context2.next = 18;
                break;
              }

              _context2.next = 15;
              return serviceEnv.lookupRegisterAsync(root, fld, reportUpdate);

            case 15:
              return _context2.abrupt("return", _context2.sent);

            case 18:
              server = this.getServer(e);
              return _context2.abrupt("return", server.lookupRegister(root, fld));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function lookupAsync(_x3, _x4) {
      return _lookupAsync.apply(this, arguments);
    }

    return lookupAsync;
  }();

  _proto.writeRegisterAsync = /*#__PURE__*/function () {
    var _writeRegisterAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3(e, values) {
      var serviceEnv, me, reg, server;
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              serviceEnv = this.getService(e);
              me = e;

              if (!(me.property.type === "Identifier")) {
                _context3.next = 11;
                break;
              }

              reg = me.property.name;

              if (!serviceEnv) {
                _context3.next = 9;
                break;
              }

              _context3.next = 7;
              return serviceEnv.writeRegisterAsync(reg, values);

            case 7:
              _context3.next = 11;
              break;

            case 9:
              server = this.getServer(e);
              return _context3.abrupt("return", server.writeRegister(reg, values));

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function writeRegisterAsync(_x5, _x6) {
      return _writeRegisterAsync.apply(this, arguments);
    }

    return writeRegisterAsync;
  }();

  _proto.writeGlobal = function writeGlobal(e, value) {
    var roleName = this.getRootName(e);
    if (!roleName || !roleName.startsWith("$var")) return undefined;
    var me = e;

    if (me.property.type === "Identifier") {
      var local = me.property.name;

      if (this._globals[local]) {
        var firstType = this._globals[local].type;

        if (firstType !== typeof value) {
          throw new VMException(VMExceptionCode.TypeMismatch, "variable " + local + " has first type " + firstType + "; trying to assign " + value.toString());
        }

        if (value !== this._globals[local].value) {
          this._globals[local].value = value;
          this.emit(GLOBAL_CHANGE);
        }
      } else {
        var _firstType = typeof value;

        if (_firstType !== "string" && _firstType !== "boolean" && _firstType !== "number") {
          throw new VMException(VMExceptionCode.TypeMismatch, "Value of type " + _firstType + " not supported");
        }

        this._globals[local] = {
          type: _firstType,
          value: value
        };
        this.emit(GLOBAL_CHANGE);
      }

      return true;
    }

    return false;
  };

  _proto.clearExternalStimulii = function clearExternalStimulii() {
    this._currentRequest = undefined;
    this.rolesReset();
  };

  _proto.hasRequest = function hasRequest(e) {
    var roleName = this.getRootName(e);
    var me = e;

    if (me.property.type === "Identifier") {
      var _this$_currentRequest, _this$_currentRequest2;

      var op = me.property.name;
      if (((_this$_currentRequest = this._currentRequest) === null || _this$_currentRequest === void 0 ? void 0 : _this$_currentRequest.role) === roleName && ((_this$_currentRequest2 = this._currentRequest) === null || _this$_currentRequest2 === void 0 ? void 0 : _this$_currentRequest2.tgt) === op) return this._currentRequest;
    }

    return undefined;
  };

  _proto.completeRequest = /*#__PURE__*/function () {
    var _completeRequest = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee4(request) {
      var server;
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              (0,utils/* assert */.hu)(request.kind === "get");
              server = this.getServer(request.role);
              _context4.next = 4;
              return server.respondToGetRegisterEvent(request.tgt);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function completeRequest(_x7) {
      return _completeRequest.apply(this, arguments);
    }

    return completeRequest;
  }() // role events
  ;

  _proto.rolesReset = function rolesReset() {
    this._rolesBound = [];
    this._rolesUnbound = [];
  };

  _proto.initRoles = function initRoles() {
    this._rolesBound = Object.keys(this._clientEnvs).slice(0);
  };

  _proto.roleTransition = function roleTransition(role, event) {
    if (event === "bound") {
      return !!this._rolesBound.find(function (r) {
        return role === "any" || r === role;
      });
    } else {
      return !!this._rolesUnbound.find(function (r) {
        return role === "any" || r === role;
      });
    }
  };

  _proto.unsubscribe = function unsubscribe() {
    for (var _i = 0, _Object$values = Object.values(this._clientEnvs); _i < _Object$values.length; _i++) {
      var vs = _Object$values[_i];
      vs.unmount();
    }
  };

  return VMEnvironment;
}(eventsource/* default */.ZP);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/expr.ts
var vm_expr = __webpack_require__(18108);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/compile.ts + 1 modules
var compile = __webpack_require__(79973);
// EXTERNAL MODULE: ./jacdac-ts/src/vm/events.ts
var vm_events = __webpack_require__(59448);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/utils.ts
var Mutex = /*#__PURE__*/function () {
  function Mutex() {
    this.promises = [];
  }

  var _proto = Mutex.prototype;

  _proto.shift = function shift() {
    this.promises.shift();
    if (this.promises[0]) this.promises[0]();
  };

  _proto.acquire = function acquire(f) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      _this.promises.push(function () {
        return f().then(function (v) {
          _this.shift();

          resolve(v);
        }, function (e) {
          _this.shift();

          reject(e);
        });
      });

      if (_this.promises.length == 1) _this.promises[0]();
    });
  };

  return Mutex;
}();
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/client.ts
var jdom_client = __webpack_require__(47235);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceprovider.ts + 1 modules
var serviceprovider = __webpack_require__(73138);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/runner.ts







function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var VMInternalStatus;

(function (VMInternalStatus) {
  VMInternalStatus["Ready"] = "ready";
  VMInternalStatus["Enabled"] = "enabled";
  VMInternalStatus["Running"] = "running";
  VMInternalStatus["Sleeping"] = "sleep";
  VMInternalStatus["Completed"] = "completed";
  VMInternalStatus["Stopped"] = "stopped";
})(VMInternalStatus || (VMInternalStatus = {}));

var VM_WAKE_SLEEPER = "vmWakeSleeper";

var VMJumpException = /*#__PURE__*/function (_Error) {
  (0,inheritsLoose/* default */.Z)(VMJumpException, _Error);

  function VMJumpException(label) {
    var _this;

    _this = _Error.call(this) || this;
    _this.label = label;
    return _this;
  }

  return VMJumpException;
}( /*#__PURE__*/(0,wrapNativeSuper/* default */.Z)(Error));

var VMTimerException = /*#__PURE__*/function (_Error2) {
  (0,inheritsLoose/* default */.Z)(VMTimerException, _Error2);

  function VMTimerException(ms) {
    var _this2;

    _this2 = _Error2.call(this) || this;
    _this2.ms = ms;
    return _this2;
  }

  return VMTimerException;
}( /*#__PURE__*/(0,wrapNativeSuper/* default */.Z)(Error));

var VMRequestException = /*#__PURE__*/function (_Error3) {
  (0,inheritsLoose/* default */.Z)(VMRequestException, _Error3);

  function VMRequestException(request) {
    var _this3;

    _this3 = _Error3.call(this) || this;
    _this3.request = request;
    return _this3;
  }

  return VMRequestException;
}( /*#__PURE__*/(0,wrapNativeSuper/* default */.Z)(Error));

var VMCommandEvaluator = /*#__PURE__*/function () {
  function VMCommandEvaluator(parent, env, cmd) {
    this._regSaved = undefined;
    this._changeSaved = undefined;
    this._started = false;
    this.parent = parent;
    this.env = env;
    this.cmd = cmd;
  }

  var _proto = VMCommandEvaluator.prototype;

  _proto.trace = function trace(msg, context) {
    if (context === void 0) {
      context = {};
    }

    this.parent.trace(msg, _objectSpread({
      command: this.cmd.command.type
    }, context));
  };

  _proto.callEval = function callEval() {
    var _this4 = this;

    return function (caller, ee) {
      var callee = caller.callee;
      var namespace = callee.object.name;
      var funName = callee.property.name;
      var args = caller.arguments;

      if (namespace === "$fun") {
        switch (funName) {
          case "roleBoundExpression":
            {
              var _role = args[0].name;
              return _this4.env.roleBound(_role);
            }

          default: // ERROR

        }

        throw new VMException(VMExceptionCode.InternalError, "unknown function " + namespace + "." + funName);
      } else throw new VMException(VMExceptionCode.InternalError, "unknown namespace " + namespace);
    };
  };

  _proto.newEval = function newEval() {
    var _this5 = this;

    return new vm_expr/* VMExprEvaluator */.W( /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(e, reportUpdate) {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this5.env.lookupAsync(e, reportUpdate);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(), this.callEval());
  };

  _proto.evalExpressionAsync = /*#__PURE__*/function () {
    var _evalExpressionAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(e, reportUpdate) {
      var expr;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (reportUpdate === void 0) {
                reportUpdate = false;
              }

              expr = this.newEval();
              _context2.next = 4;
              return expr.evalAsync(e, reportUpdate);

            case 4:
              return _context2.abrupt("return", _context2.sent);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function evalExpressionAsync(_x3, _x4) {
      return _evalExpressionAsync.apply(this, arguments);
    }

    return evalExpressionAsync;
  }();

  _proto.checkExpressionAsync = /*#__PURE__*/function () {
    var _checkExpressionAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3(e, reportUpdate) {
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (reportUpdate === void 0) {
                reportUpdate = false;
              }

              _context3.next = 3;
              return this.evalExpressionAsync(e, reportUpdate);

            case 3:
              if (!_context3.sent) {
                _context3.next = 7;
                break;
              }

              _context3.t0 = true;
              _context3.next = 8;
              break;

            case 7:
              _context3.t0 = false;

            case 8:
              return _context3.abrupt("return", _context3.t0);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function checkExpressionAsync(_x5, _x6) {
      return _checkExpressionAsync.apply(this, arguments);
    }

    return checkExpressionAsync;
  }();

  _proto.startAsync = /*#__PURE__*/function () {
    var _startAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee4() {
      var args;
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(this.cmd.command.callee.type !== "MemberExpression" && (this.inst === "awaitRegister" || this.inst === "awaitChange"))) {
                _context4.next = 10;
                break;
              }

              // need to capture register value for awaitChange/awaitRegister
              args = this.cmd.command.arguments;
              _context4.next = 4;
              return this.evalExpressionAsync(args[0], true);

            case 4:
              this._regSaved = _context4.sent;

              if (!(this.inst === "awaitChange")) {
                _context4.next = 9;
                break;
              }

              _context4.next = 8;
              return this.evalExpressionAsync(args[1]);

            case 8:
              this._changeSaved = _context4.sent;

            case 9:
              return _context4.abrupt("return", true);

            case 10:
              return _context4.abrupt("return", false);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function startAsync() {
      return _startAsync.apply(this, arguments);
    }

    return startAsync;
  }();

  _proto.evaluate = /*#__PURE__*/function () {
    var _evaluate = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee5() {
      var neededStart, args, expr, _values, _iterator, _step, a, _expr, event, _request, _role2, _event, regValue, _expr2, _values2, _iterator2, _step2, _a, reg, _this$cmd, _expr3, ev, _this$cmd2, _expr4, _ev, evString, _expr5, _ev2;

      return regenerator_default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (this._started) {
                _context5.next = 7;
                break;
              }

              _context5.next = 3;
              return this.startAsync();

            case 3:
              neededStart = _context5.sent;
              this._started = true;

              if (!neededStart) {
                _context5.next = 7;
                break;
              }

              return _context5.abrupt("return", VMInternalStatus.Running);

            case 7:
              args = this.cmd.command.arguments;

              if (!(this.cmd.command.callee.type === "MemberExpression")) {
                _context5.next = 24;
                break;
              }

              // interpret as a service command (role.comand)
              expr = this.newEval();
              _values = [];
              _iterator = _createForOfIteratorHelperLoose(this.cmd.command.arguments);

            case 12:
              if ((_step = _iterator()).done) {
                _context5.next = 21;
                break;
              }

              a = _step.value;
              _context5.t0 = _values;
              _context5.next = 17;
              return expr.evalAsync(a);

            case 17:
              _context5.t1 = _context5.sent;

              _context5.t0.push.call(_context5.t0, _context5.t1);

            case 19:
              _context5.next = 12;
              break;

            case 21:
              _context5.next = 23;
              return this.env.sendCommandAsync(this.cmd.command.callee, _values);

            case 23:
              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 24:
              _context5.t2 = this.inst;
              _context5.next = _context5.t2 === "branchOnCondition" ? 27 : _context5.t2 === "jump" ? 33 : _context5.t2 === "label" ? 34 : _context5.t2 === "awaitEvent" ? 35 : _context5.t2 === "roleBound" ? 43 : _context5.t2 === "awaitCondition" ? 46 : _context5.t2 === "awaitChange" ? 54 : _context5.t2 === "awaitRegister" ? 54 : _context5.t2 === "writeRegister" ? 60 : _context5.t2 === "writeLocal" ? 60 : _context5.t2 === "watch" ? 82 : _context5.t2 === "log" ? 88 : _context5.t2 === "halt" ? 95 : _context5.t2 === "nop" ? 96 : _context5.t2 === "wait" ? 97 : 102;
              break;

            case 27:
              _context5.next = 29;
              return this.checkExpressionAsync(args[0]);

            case 29:
              _expr = _context5.sent;

              if (!_expr) {
                _context5.next = 32;
                break;
              }

              throw new VMJumpException(args[1].name);

            case 32:
              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 33:
              throw new VMJumpException(args[0].name);

            case 34:
              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 35:
              event = args[0];
              _request = this.env.hasRequest(event);

              if (!_request) {
                _context5.next = 42;
                break;
              }

              _context5.next = 40;
              return this.checkExpressionAsync(args[1]);

            case 40:
              if (!_context5.sent) {
                _context5.next = 42;
                break;
              }

              throw new VMRequestException(_request);

            case 42:
              return _context5.abrupt("return", VMInternalStatus.Running);

            case 43:
              _role2 = args[0].name;
              _event = args[1].name;
              return _context5.abrupt("return", this.env.roleTransition(_role2, _event) ? VMInternalStatus.Completed : VMInternalStatus.Running);

            case 46:
              _context5.next = 48;
              return this.checkExpressionAsync(args[0]);

            case 48:
              if (!_context5.sent) {
                _context5.next = 52;
                break;
              }

              _context5.t3 = VMInternalStatus.Completed;
              _context5.next = 53;
              break;

            case 52:
              _context5.t3 = VMInternalStatus.Running;

            case 53:
              return _context5.abrupt("return", _context5.t3);

            case 54:
              _context5.next = 56;
              return this.evalExpressionAsync(args[0]);

            case 56:
              regValue = _context5.sent;

              if (!(this.inst === "awaitRegister" && regValue !== this._regSaved || this.inst === "awaitChange" && Math.abs(regValue - this._regSaved) >= Math.abs(this._changeSaved))) {
                _context5.next = 59;
                break;
              }

              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 59:
              return _context5.abrupt("return", VMInternalStatus.Running);

            case 60:
              _expr2 = this.newEval();
              _values2 = [];
              _iterator2 = _createForOfIteratorHelperLoose(this.cmd.command.arguments.slice(1));

            case 63:
              if ((_step2 = _iterator2()).done) {
                _context5.next = 72;
                break;
              }

              _a = _step2.value;
              _context5.t4 = _values2;
              _context5.next = 68;
              return _expr2.evalAsync(_a);

            case 68:
              _context5.t5 = _context5.sent;

              _context5.t4.push.call(_context5.t4, _context5.t5);

            case 70:
              _context5.next = 63;
              break;

            case 72:
              this.trace("eval-end", {
                expr: (0,vm_expr/* unparse */.Z)(args[1])
              });
              reg = args[0];

              if (!(this.inst === "writeRegister")) {
                _context5.next = 80;
                break;
              }

              _context5.next = 77;
              return this.env.writeRegisterAsync(reg, _values2);

            case 77:
              this.trace("write-after-wait", {
                reg: (0,vm_expr/* unparse */.Z)(reg),
                expr: _values2[0]
              });
              _context5.next = 81;
              break;

            case 80:
              this.env.writeGlobal(reg, _values2[0]);

            case 81:
              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 82:
              _expr3 = this.newEval();
              _context5.next = 85;
              return _expr3.evalAsync(args[0]);

            case 85:
              ev = _context5.sent;
              this.parent.watch((_this$cmd = this.cmd) === null || _this$cmd === void 0 ? void 0 : _this$cmd.sourceId, ev);
              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 88:
              _expr4 = this.newEval();
              _context5.next = 91;
              return _expr4.evalAsync(args[0]);

            case 91:
              _ev = _context5.sent;
              evString = _ev + "";
              this.parent.writeLog((_this$cmd2 = this.cmd) === null || _this$cmd2 === void 0 ? void 0 : _this$cmd2.sourceId, evString);
              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 95:
              return _context5.abrupt("return", VMInternalStatus.Stopped);

            case 96:
              return _context5.abrupt("return", VMInternalStatus.Completed);

            case 97:
              _expr5 = this.newEval();
              _context5.next = 100;
              return _expr5.evalAsync(args[0]);

            case 100:
              _ev2 = _context5.sent;
              throw new VMTimerException(_ev2 * 1000);

            case 102:
              throw new VMException(VMExceptionCode.InternalError, "Unknown instruction " + this.inst);

            case 103:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function evaluate() {
      return _evaluate.apply(this, arguments);
    }

    return evaluate;
  }();

  (0,createClass/* default */.Z)(VMCommandEvaluator, [{
    key: "inst",
    get: function get() {
      var _this$cmd$command$cal;

      return (_this$cmd$command$cal = this.cmd.command.callee) === null || _this$cmd$command$cal === void 0 ? void 0 : _this$cmd$command$cal.name;
    }
  }]);

  return VMCommandEvaluator;
}();

var VMCommandRunner = /*#__PURE__*/function () {
  function VMCommandRunner(parent, handlerId, env, cmd) {
    this._status = VMInternalStatus.Running;
    this.parent = parent;
    this.handlerId = handlerId;
    this.cmd = cmd;
    this._eval = new VMCommandEvaluator(this, env, cmd);
  }

  var _proto2 = VMCommandRunner.prototype;

  _proto2.trace = function trace(msg, context) {
    if (context === void 0) {
      context = {};
    }

    this.parent.trace(msg, _objectSpread({
      handler: this.handlerId
    }, context));
  };

  _proto2.watch = function watch(id, val) {
    this.parent.watch(id, val);
  };

  _proto2.writeLog = function writeLog(id, val) {
    this.parent.writeLog(id, val);
  };

  _proto2.stepAsync = /*#__PURE__*/function () {
    var _stepAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee6() {
      return regenerator_default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(this.status === VMInternalStatus.Running)) {
                _context6.next = 5;
                break;
              }

              this.trace((0,vm_expr/* unparse */.Z)(this.cmd.command));
              _context6.next = 4;
              return this._eval.evaluate();

            case 4:
              this.status = _context6.sent;

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function stepAsync() {
      return _stepAsync.apply(this, arguments);
    }

    return stepAsync;
  }();

  (0,createClass/* default */.Z)(VMCommandRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(s) {
      this._status = s;
    }
  }]);

  return VMCommandRunner;
}();

var VMHandlerRunner = /*#__PURE__*/function (_JDEventSource) {
  (0,inheritsLoose/* default */.Z)(VMHandlerRunner, _JDEventSource);

  function VMHandlerRunner(parent, id, env, handler) {
    var _this6;

    _this6 = _JDEventSource.call(this) || this; // find the label commands (targets of jumps)

    _this6._commandIndex = undefined;
    _this6._currentCommand = undefined;
    _this6.stopped = false;
    _this6._labelToIndex = {};
    _this6.parent = parent;
    _this6.id = id;
    _this6.env = env;
    _this6.handler = handler;

    _this6.handler.commands.forEach(function (c, index) {
      var _cmd$command;

      var cmd = c;
      var id = (_cmd$command = cmd.command) === null || _cmd$command === void 0 ? void 0 : _cmd$command.callee;

      if ((id === null || id === void 0 ? void 0 : id.name) === "label") {
        var _label = cmd.command.arguments[0];
        _this6._labelToIndex[_label.name] = index;
      }
    });

    _this6.reset();

    return _this6;
  }

  var _proto3 = VMHandlerRunner.prototype;

  _proto3.trace = function trace(msg, context) {
    if (context === void 0) {
      context = {};
    }

    this.parent.trace(msg, _objectSpread({
      id: this.id
    }, context));
  };

  _proto3.watch = function watch(id, val) {
    this.parent.watch(id, val);
  };

  _proto3.writeLog = function writeLog(id, val) {
    this.parent.writeLog(id, val);
  };

  _proto3.gotoTop = function gotoTop() {
    if (this.status === VMInternalStatus.Ready && this.handler.commands.length) this.commandIndex = 0;
  };

  _proto3.reset = function reset() {
    this.commandIndex = undefined;
    this.stopped = false;
  };

  _proto3.wake = function wake() {
    if (this._currentCommand) {
      this._currentCommand.status = VMInternalStatus.Completed;
      this.next();
    }
  } // run-to-completion semantics
  // returns command if breakpoint encountered when not single stepping
  ;

  _proto3.runToCompletionAsync =
  /*#__PURE__*/
  function () {
    var _runToCompletionAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee7(singleStep) {
      return regenerator_default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (singleStep === void 0) {
                singleStep = false;
              }

              if (!(this.stopped || !this.handler.commands.length)) {
                _context7.next = 3;
                break;
              }

              return _context7.abrupt("return", undefined);

            case 3:
              if (this.commandIndex === undefined) {
                this.commandIndex = 0;
              }

              _context7.next = 6;
              return this.singleStepCheckBreakAsync(singleStep);

            case 6:
              _context7.t0 = _context7.sent;

              if (!_context7.t0) {
                _context7.next = 9;
                break;
              }

              _context7.t0 = !singleStep;

            case 9:
              if (!_context7.t0) {
                _context7.next = 11;
                break;
              }

              return _context7.abrupt("return", this._currentCommand);

            case 11:
              if (!this.next()) {
                _context7.next = 21;
                break;
              }

              _context7.t1 = singleStep;

              if (_context7.t1) {
                _context7.next = 17;
                break;
              }

              _context7.next = 16;
              return this.singleStepCheckBreakAsync();

            case 16:
              _context7.t1 = _context7.sent;

            case 17:
              if (!_context7.t1) {
                _context7.next = 19;
                break;
              }

              return _context7.abrupt("return", this._currentCommand);

            case 19:
              _context7.next = 11;
              break;

            case 21:
              return _context7.abrupt("return", undefined);

            case 22:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function runToCompletionAsync(_x7) {
      return _runToCompletionAsync.apply(this, arguments);
    }

    return runToCompletionAsync;
  }();

  _proto3.next = function next() {
    if (this._currentCommand.status === VMInternalStatus.Completed && this.commandIndex < this.handler.commands.length - 1) {
      this.commandIndex++;
      return true;
    }

    return false;
  };

  _proto3.getCommand = function getCommand() {
    var cmd = this.handler.commands[this._commandIndex];

    if (cmd.type === "ite") {
      throw new VMException(VMExceptionCode.InternalError, "ite not compiled away");
    }

    return cmd;
  };

  _proto3.singleStepCheckBreakAsync = /*#__PURE__*/function () {
    var _singleStepCheckBreakAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee8(singleStep) {
      var _this$_currentCommand;

      var sid;
      return regenerator_default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (singleStep === void 0) {
                singleStep = false;
              }

              this.trace("step begin");
              sid = (_this$_currentCommand = this._currentCommand.cmd) === null || _this$_currentCommand === void 0 ? void 0 : _this$_currentCommand.sourceId;
              _context8.t0 = !singleStep;

              if (!_context8.t0) {
                _context8.next = 8;
                break;
              }

              _context8.next = 7;
              return this.parent.breakpointOnAsync(sid);

            case 7:
              _context8.t0 = _context8.sent;

            case 8:
              if (!_context8.t0) {
                _context8.next = 10;
                break;
              }

              return _context8.abrupt("return", true);

            case 10:
              _context8.next = 12;
              return this.singleStepAsync();

            case 12:
              this.trace("step end");
              return _context8.abrupt("return", false);

            case 14:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function singleStepCheckBreakAsync(_x8) {
      return _singleStepCheckBreakAsync.apply(this, arguments);
    }

    return singleStepCheckBreakAsync;
  }();

  _proto3.singleStepAsync = /*#__PURE__*/function () {
    var _singleStepAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee9() {
      var _ref2, _label2, index, _ref3, _ms, _ref4, _request2;

      return regenerator_default().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return this._currentCommand.stepAsync();

            case 3:
              _context9.next = 29;
              break;

            case 5:
              _context9.prev = 5;
              _context9.t0 = _context9["catch"](0);

              if (!(_context9.t0 instanceof VMJumpException)) {
                _context9.next = 14;
                break;
              }

              _ref2 = _context9.t0, _label2 = _ref2.label;
              index = this._labelToIndex[_label2];
              this.commandIndex = index;
              this._currentCommand.status = VMInternalStatus.Completed;
              _context9.next = 29;
              break;

            case 14:
              if (!(_context9.t0 instanceof VMTimerException)) {
                _context9.next = 21;
                break;
              }

              _ref3 = _context9.t0, _ms = _ref3.ms;
              this._currentCommand.status = VMInternalStatus.Sleeping;
              _context9.next = 19;
              return this.parent.sleepAsync(this, _ms);

            case 19:
              _context9.next = 29;
              break;

            case 21:
              if (!(_context9.t0 instanceof VMRequestException)) {
                _context9.next = 27;
                break;
              }

              _ref4 = _context9.t0, _request2 = _ref4.request;
              this._currentCommand.status = VMInternalStatus.Completed;
              this.parent.handlerWokeOnRequest(this, _request2);
              _context9.next = 29;
              break;

            case 27:
              this.emit(vm_events/* VM_COMMAND_FAILED */.ai, this._currentCommand.cmd.sourceId);
              throw _context9.t0;

            case 29:
              if (this._currentCommand.status === VMInternalStatus.Stopped) this.stopped = true;

            case 30:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this, [[0, 5]]);
    }));

    function singleStepAsync() {
      return _singleStepAsync.apply(this, arguments);
    }

    return singleStepAsync;
  }();

  (0,createClass/* default */.Z)(VMHandlerRunner, [{
    key: "status",
    get: function get() {
      return this.stopped ? VMInternalStatus.Stopped : this._commandIndex === undefined ? VMInternalStatus.Ready : this._currentCommand.status === VMInternalStatus.Completed && this._commandIndex < this.handler.commands.length - 1 ? VMInternalStatus.Running : this._currentCommand.status;
    }
  }, {
    key: "command",
    get: function get() {
      return this._currentCommand;
    }
  }, {
    key: "atTop",
    get: function get() {
      return this.status === VMInternalStatus.Running && this._commandIndex === 0;
    }
  }, {
    key: "commandIndex",
    get: function get() {
      return this._commandIndex;
    },
    set: function set(index) {
      if (index === undefined) {
        this._commandIndex = undefined;
        this._currentCommand = undefined;
      } else if (index !== this._commandIndex) {
        this._commandIndex = index;
        this._currentCommand = new VMCommandRunner(this, this.id, this.env, this.getCommand());
      }
    }
  }]);

  return VMHandlerRunner;
}(eventsource/* default */.ZP);

function isEveryHandler(h) {
  (0,utils/* assert */.hu)(!!h);

  if (h.commands.length) {
    var _cmd = h.commands[0].command.callee;
    return _cmd.name === "wait";
  }

  return false;
}

function isRegisterChangeHandler(h) {
  (0,utils/* assert */.hu)(!!h);

  if (h.commands.length) {
    var _cmd2 = h.commands[0].command.callee;
    return _cmd2.name === "awaitChange" || _cmd2.name === "awaitRegister";
  }

  return false;
}

var VMStatus;

(function (VMStatus) {
  VMStatus["Stopped"] = "stopped";
  VMStatus["Running"] = "running";
  VMStatus["Paused"] = "paused";
})(VMStatus || (VMStatus = {}));

var MAX_LOG = 100;
var VMProgramRunner = /*#__PURE__*/function (_JDClient) {
  (0,inheritsLoose/* default */.Z)(VMProgramRunner, _JDClient);

  // program, environment
  // debugging
  function VMProgramRunner(roleManager, program) {
    var _this7;

    _this7 = _JDClient.call(this) || this;
    _this7._handlerRunners = [];
    _this7._roles = [];
    _this7._serverRoles = [];
    _this7._waitQueue = [];
    _this7._everyQueue = [];
    _this7._runQueue = [];
    _this7._sleepQueue = [];
    _this7._watch = {};
    _this7._log = [];
    _this7._breaks = {};
    _this7._onCompletionOfExternalRequest = [];
    _this7._in_run = false;
    _this7.roleManager = roleManager;
    _this7.program = program;
    var compiled = (0,compile/* compileProgram */.IJ)(program);

    var _checkProgram = (0,compile/* checkProgram */.i_)(compiled),
        registers = _checkProgram.registers,
        events = _checkProgram.events,
        errors = _checkProgram.errors;

    _this7._roles = compiled.roles;
    _this7._serverRoles = compiled.serverRoles;
    if (errors !== null && errors !== void 0 && errors.length) console.debug("ERRORS", errors); // data structures for running program

    _this7._status = VMStatus.Stopped;
    _this7._env = new VMEnvironment(registers, events, compiled.serverRoles);
    _this7._handlerRunners = compiled.handlers.map(function (h, index) {
      return new VMHandlerRunner((0,assertThisInitialized/* default */.Z)(_this7), index, _this7._env, h);
    }); // TODO: can't add multiple handlers until we have deduplicate CHANGE on Event

    /*
    const len = this._handlerRunners.length
    compiled.handlers.forEach((h, index) =>
        this._handlerRunners.push(
            new VMHandlerRunner(this, len + index, this._env, h)
        )
    )*/

    _this7._waitRunMutex = new Mutex();
    _this7._breaksMutex = new Mutex();
    _this7._sleepMutex = new Mutex(); // TODO: only try to wake handlers that are waiting on change to reg or event

    _this7.mount(_this7._env.subscribe(REGISTER_CHANGE, function (reg) {
      _this7.waitingToRunning();
    }));

    _this7.mount(_this7.roleManager.bus.subscribe(constants/* SERVICE_PROVIDER_REMOVED */.$dk, function (provider) {
      if (provider === _this7._provider) {
        _this7._provider = undefined;
      }
    })); // control requests (client:{event}, server:{set, get, cmd})


    _this7.mount(_this7._env.subscribe(EXTERNAL_REQUEST, function (request) {
      switch (request.kind) {
        case "get":
          {
            // TODO: in this case, if there is a handler
            // waiting on this Request then the function
            // handlerWokeOnRequest will be invoked. If
            // it is not then we should just return the
            // current value of register
            break;
          }
        // these handler invocations are "fire and forget"

        case "set":
        case "cmd":
        case "event":
          break;
      }

      _this7.waitingToRunning();
    }));

    _this7.mount(_this7._env.subscribe(GLOBAL_CHANGE, function (name) {
      _this7.emit(vm_events/* VM_GLOBAL_CHANGE */.b4, name);

      _this7.waitingToRunning();
    }));

    _this7.mount(_this7.subscribe(VM_WAKE_SLEEPER, /*#__PURE__*/function () {
      var _ref5 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee10(h) {
        return regenerator_default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _this7.wakeSleeper(h);

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x9) {
        return _ref5.apply(this, arguments);
      };
    }()));

    _this7.initializeRoleManagement();

    return _this7;
  }

  var _proto4 = VMProgramRunner.prototype;

  _proto4.handlerWokeOnRequest = function handlerWokeOnRequest(handler, request) {
    if (request.kind === "get") {
      this._onCompletionOfExternalRequest.push({
        handler: handler,
        request: request
      });
    }
  } // control of VM
  ;

  _proto4.globals = function globals() {
    var g = this._env.globals();

    return Object.keys(g).map(function (k) {
      return {
        name: k,
        value: g[k].value
      };
    });
  };

  _proto4.setStatus = function setStatus(s) {
    if (s !== this._status) {
      this._status = s;
      this.emit(constants/* CHANGE */.Ver);
    }
  } // debugging
  ;

  _proto4.trace = function trace(message, context) {
    if (context === void 0) {
      context = {};
    }

    this.emit(constants/* TRACE */.jes, {
      message: message,
      context: context
    });
  };

  _proto4.watch = function watch(sourceId, value) {
    this._watch[sourceId] = value;
    this.emit(vm_events/* VM_WATCH_CHANGE */.UM, sourceId);
  };

  _proto4.writeLog = function writeLog(sourceId, value) {
    var s = value + "";
    var last = this._log[this._log.length - 1];
    if ((last === null || last === void 0 ? void 0 : last.text) === s) last.count++;else this._log.push({
      text: value + "",
      count: 1
    });

    while (this._log.length > MAX_LOG) {
      this._log.shift();
    }

    this.emit(vm_events/* VM_LOG_ENTRY */.aG, sourceId);
  };

  _proto4.lookupWatch = function lookupWatch(sourceId) {
    return this._watch[sourceId];
  };

  _proto4.setBreakpointsAsync = /*#__PURE__*/function () {
    var _setBreakpointsAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee12(breaks) {
      var _this8 = this;

      return regenerator_default().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return this._breaksMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee11() {
                return regenerator_default().wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        _this8._breaks = {};
                        breaks.forEach(function (b) {
                          _this8._breaks[b] = true;
                        });

                      case 2:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              })));

            case 2:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    function setBreakpointsAsync(_x10) {
      return _setBreakpointsAsync.apply(this, arguments);
    }

    return setBreakpointsAsync;
  }();

  _proto4.clearBreakpointsAsync = /*#__PURE__*/function () {
    var _clearBreakpointsAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee14() {
      var _this9 = this;

      return regenerator_default().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return this._breaksMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee13() {
                return regenerator_default().wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        _this9._breaks = {};

                      case 1:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              })));

            case 2:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this);
    }));

    function clearBreakpointsAsync() {
      return _clearBreakpointsAsync.apply(this, arguments);
    }

    return clearBreakpointsAsync;
  }();

  _proto4.breakpointOnAsync = /*#__PURE__*/function () {
    var _breakpointOnAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee16(id) {
      var _this10 = this;

      var ret;
      return regenerator_default().wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              ret = false;
              _context16.next = 3;
              return this._breaksMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee15() {
                var _this10$_breaks;

                return regenerator_default().wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        ret = !!((_this10$_breaks = _this10._breaks) !== null && _this10$_breaks !== void 0 && _this10$_breaks[id]);

                      case 1:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15);
              })));

            case 3:
              return _context16.abrupt("return", ret);

            case 4:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this);
    }));

    function breakpointOnAsync(_x11) {
      return _breakpointOnAsync.apply(this, arguments);
    }

    return breakpointOnAsync;
  }() // utility called by handlerRunner
  ;

  _proto4.sleepAsync =
  /*#__PURE__*/
  function () {
    var _sleepAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee18(h, ms, handler) {
      var _this11 = this;

      return regenerator_default().wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              if (handler === void 0) {
                handler = undefined;
              }

              (0,utils/* assert */.hu)(h.status === VMInternalStatus.Sleeping);
              _context18.next = 4;
              return this._sleepMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee17() {
                var id;
                return regenerator_default().wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        id = setTimeout(function () {
                          _this11.emit(VM_WAKE_SLEEPER, h ? h : handler);
                        }, ms);

                        _this11._sleepQueue.push({
                          ms: ms,
                          handlerRunner: h,
                          id: id,
                          handler: handler
                        });

                      case 2:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17);
              })));

            case 4:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, this);
    }));

    function sleepAsync(_x12, _x13, _x14) {
      return _sleepAsync.apply(this, arguments);
    }

    return sleepAsync;
  }();

  _proto4.startAsync = /*#__PURE__*/function () {
    var _startAsync2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee20() {
      var _this12 = this;

      return regenerator_default().wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              if (!(this.status !== VMStatus.Stopped)) {
                _context20.next = 2;
                break;
              }

              return _context20.abrupt("return");

            case 2:
              // already running
              this.trace("start");
              _context20.prev = 3;
              _context20.next = 6;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee19() {
                return regenerator_default().wrap(function _callee19$(_context19) {
                  while (1) {
                    switch (_context19.prev = _context19.next) {
                      case 0:
                        _context19.next = 2;
                        return _this12.device();

                      case 2:
                        _this12._waitQueue = _this12._handlerRunners.slice(0);

                        _this12._waitQueue.forEach(function (h) {
                          return h.reset();
                        });

                        _this12._runQueue = [];
                        _this12._everyQueue = [];
                        _this12._onCompletionOfExternalRequest = [];

                        _this12._env.clearExternalStimulii();

                        _this12._env.initRoles();

                        _this12.stopSleepers(); // make sure to have another handler for every

                        /*
                        for (const h of this._waitQueue) {
                            if (isEveryHandler(h.handler)) {
                                const dup = new VMHandlerRunner(
                                    this,
                                    undefined,
                                    this._env,
                                    h.handler
                                )
                                dup.reset()
                                this._everyQueue.push(dup)
                            }
                        }*/


                      case 10:
                      case "end":
                        return _context19.stop();
                    }
                  }
                }, _callee19);
              })));

            case 6:
              _context20.next = 8;
              return this.clearBreakpointsAsync();

            case 8:
              this.setStatus(VMStatus.Running);
              _context20.next = 11;
              return this.waitingToRunning();

            case 11:
              _context20.next = 17;
              break;

            case 13:
              _context20.prev = 13;
              _context20.t0 = _context20["catch"](3);
              console.debug(_context20.t0);
              this.emit(vm_events/* VM_INTERNAL_ERROR */.c2, _context20.t0);

            case 17:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, this, [[3, 13]]);
    }));

    function startAsync() {
      return _startAsync2.apply(this, arguments);
    }

    return startAsync;
  }();

  _proto4.device = /*#__PURE__*/function () {
    var _device = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee21() {
      return regenerator_default().wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              if (this._provider) {
                _context21.next = 3;
                break;
              }

              _context21.next = 3;
              return this.startProvider();

            case 3:
              return _context21.abrupt("return", this._device);

            case 4:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, this);
    }));

    function device() {
      return _device.apply(this, arguments);
    }

    return device;
  }();

  _proto4.cancel = function cancel() {
    if (this.status === VMStatus.Stopped) return; // nothing to cancel

    this.setStatus(VMStatus.Stopped);
    this.trace("cancelled");
  };

  _proto4.resumeAsync = /*#__PURE__*/function () {
    var _resumeAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee22() {
      return regenerator_default().wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              if (!(this.status !== VMStatus.Paused)) {
                _context22.next = 2;
                break;
              }

              return _context22.abrupt("return");

            case 2:
              this.trace("resume");
              this.setStatus(VMStatus.Running);
              _context22.next = 6;
              return this.runAsync();

            case 6:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22, this);
    }));

    function resumeAsync() {
      return _resumeAsync.apply(this, arguments);
    }

    return resumeAsync;
  }();

  _proto4.getCurrentRunner = /*#__PURE__*/function () {
    var _getCurrentRunner = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee24() {
      var _this13 = this;

      return regenerator_default().wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              _context24.next = 2;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee23() {
                return regenerator_default().wrap(function _callee23$(_context23) {
                  while (1) {
                    switch (_context23.prev = _context23.next) {
                      case 0:
                        if (!_this13._runQueue.length) {
                          _context23.next = 2;
                          break;
                        }

                        return _context23.abrupt("return", _this13._runQueue[0]);

                      case 2:
                        return _context23.abrupt("return", undefined);

                      case 3:
                      case "end":
                        return _context23.stop();
                    }
                  }
                }, _callee23);
              })));

            case 2:
              return _context24.abrupt("return", _context24.sent);

            case 3:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24, this);
    }));

    function getCurrentRunner() {
      return _getCurrentRunner.apply(this, arguments);
    }

    return getCurrentRunner;
  }();

  _proto4.stepAsync = /*#__PURE__*/function () {
    var _stepAsync2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee25() {
      var h, newHead;
      return regenerator_default().wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              if (!(this.status !== VMStatus.Paused)) {
                _context25.next = 2;
                break;
              }

              return _context25.abrupt("return");

            case 2:
              this.trace("step");
              _context25.next = 5;
              return this.getCurrentRunner();

            case 5:
              h = _context25.sent;

              if (!h) {
                _context25.next = 15;
                break;
              }

              _context25.next = 9;
              return this.runHandlerAsync(h, true);

            case 9:
              _context25.next = 11;
              return this.postProcessHandler(h);

            case 11:
              _context25.next = 13;
              return this.getCurrentRunner();

            case 13:
              newHead = _context25.sent;

              if (newHead && newHead !== h) {
                this.emitBreakpoint(newHead);
              }

            case 15:
            case "end":
              return _context25.stop();
          }
        }
      }, _callee25, this);
    }));

    function stepAsync() {
      return _stepAsync2.apply(this, arguments);
    }

    return stepAsync;
  }();

  _proto4.runAsync = /*#__PURE__*/function () {
    var _runAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee26() {
      var h;
      return regenerator_default().wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              if (!(this.status === VMStatus.Stopped)) {
                _context26.next = 2;
                break;
              }

              return _context26.abrupt("return");

            case 2:
              if (!this._in_run) {
                _context26.next = 4;
                break;
              }

              return _context26.abrupt("return");

            case 4:
              this.trace("run");
              this._in_run = true;
              _context26.prev = 6;
              h = undefined;

            case 8:
              _context26.t0 = this.status === VMStatus.Running;

              if (!_context26.t0) {
                _context26.next = 13;
                break;
              }

              _context26.next = 12;
              return this.getCurrentRunner();

            case 12:
              _context26.t0 = h = _context26.sent;

            case 13:
              if (!_context26.t0) {
                _context26.next = 21;
                break;
              }

              (0,utils/* assert */.hu)(!h.atTop);
              _context26.next = 17;
              return this.runHandlerAsync(h);

            case 17:
              _context26.next = 19;
              return this.postProcessHandler(h);

            case 19:
              _context26.next = 8;
              break;

            case 21:
              _context26.next = 27;
              break;

            case 23:
              _context26.prev = 23;
              _context26.t1 = _context26["catch"](6);
              console.debug(_context26.t1);
              this.emit(vm_events/* VM_INTERNAL_ERROR */.c2, _context26.t1);

            case 27:
              this._in_run = false;
              this.trace("run end");

            case 29:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee26, this, [[6, 23]]);
    }));

    function runAsync() {
      return _runAsync.apply(this, arguments);
    }

    return runAsync;
  }();

  _proto4.emitBreakpoint = function emitBreakpoint(h) {
    var _h$command$cmd;

    this.emit(vm_events/* VM_BREAKPOINT */.Di, h, h.status === VMInternalStatus.Completed ? "" : (_h$command$cmd = h.command.cmd) === null || _h$command$cmd === void 0 ? void 0 : _h$command$cmd.sourceId);
  };

  _proto4.runHandlerAsync = /*#__PURE__*/function () {
    var _runHandlerAsync = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee27(h, oneStep) {
      var brkCommand, ex;
      return regenerator_default().wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              if (oneStep === void 0) {
                oneStep = false;
              }

              _context27.prev = 1;
              _context27.next = 4;
              return h.runToCompletionAsync(oneStep);

            case 4:
              brkCommand = _context27.sent;

              if (brkCommand && !oneStep || this.status === VMStatus.Paused) {
                this.setStatus(VMStatus.Paused);
                this.emitBreakpoint(h);
              }

              if (h.status === VMInternalStatus.Completed) {
                h.reset();
              }

              _context27.next = 13;
              break;

            case 9:
              _context27.prev = 9;
              _context27.t0 = _context27["catch"](1);

              if (_context27.t0 instanceof VMException) {
                ex = _context27.t0;
                if (ex.code === VMExceptionCode.RoleNoService) this.emit(vm_events/* VM_ROLE_MISSING */.XD, _context27.t0.data);
              } else {
                console.debug(_context27.t0);
                this.emit(vm_events/* VM_INTERNAL_ERROR */.c2, _context27.t0);
              } // on handler error, reset the handler


              h.reset();

            case 13:
            case "end":
              return _context27.stop();
          }
        }
      }, _callee27, this, [[1, 9]]);
    }));

    function runHandlerAsync(_x15, _x16) {
      return _runHandlerAsync.apply(this, arguments);
    }

    return runHandlerAsync;
  }();

  _proto4.postProcessHandler = /*#__PURE__*/function () {
    var _postProcessHandler = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee30(h) {
      var _this14 = this;

      var done, q, index, _q$splice, del;

      return regenerator_default().wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              if (!(h.status === VMInternalStatus.Ready || h.status === VMInternalStatus.Sleeping || h.status === VMInternalStatus.Stopped)) {
                _context30.next = 15;
                break;
              }

              done = undefined;
              _context30.next = 4;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee28() {
                var moveToWait;
                return regenerator_default().wrap(function _callee28$(_context28) {
                  while (1) {
                    switch (_context28.prev = _context28.next) {
                      case 0:
                        (0,utils/* assert */.hu)(!!_this14._runQueue.length);
                        (0,utils/* assert */.hu)(h === _this14._runQueue[0]);
                        done = _this14._runQueue.shift();
                        moveToWait = h.status === VMInternalStatus.Ready;

                        if (moveToWait && !isEveryHandler(h.handler)) {
                          _this14._waitQueue.push(done);

                          done = undefined;
                        }

                      case 5:
                      case "end":
                        return _context28.stop();
                    }
                  }
                }, _callee28);
              })));

            case 4:
              if (!(done && h.status === VMInternalStatus.Ready && isEveryHandler(h.handler) || isRegisterChangeHandler(h.handler))) {
                _context30.next = 13;
                break;
              }

              if (!(this.status === VMStatus.Running)) {
                _context30.next = 10;
                break;
              }

              _context30.next = 8;
              return this.runHandlerAsync(h);

            case 8:
              _context30.next = 13;
              break;

            case 10:
              if (!(this.status === VMStatus.Paused)) {
                _context30.next = 13;
                break;
              }

              _context30.next = 13;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee29() {
                return regenerator_default().wrap(function _callee29$(_context29) {
                  while (1) {
                    switch (_context29.prev = _context29.next) {
                      case 0:
                        _this14._runQueue.unshift(h); // this.emitBreakpoint(h)


                      case 1:
                      case "end":
                        return _context29.stop();
                    }
                  }
                }, _callee29);
              })));

            case 13:
              _context30.next = 22;
              break;

            case 15:
              if (!(h.status === VMInternalStatus.Completed)) {
                _context30.next = 22;
                break;
              }

              q = this._onCompletionOfExternalRequest;
              index = q.findIndex(function (p) {
                return p.handler === h;
              });

              if (!(index > -1)) {
                _context30.next = 22;
                break;
              }

              _q$splice = q.splice(index, 1), del = _q$splice[0];
              _context30.next = 22;
              return this._env.completeRequest(del.request);

            case 22:
            case "end":
              return _context30.stop();
          }
        }
      }, _callee30, this);
    }));

    function postProcessHandler(_x17) {
      return _postProcessHandler.apply(this, arguments);
    }

    return postProcessHandler;
  }() // call this whenever some event/change arises
  ;

  _proto4.waitingToRunning =
  /*#__PURE__*/
  function () {
    var _waitingToRunning = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee32() {
      var _this15 = this;

      return regenerator_default().wrap(function _callee32$(_context33) {
        while (1) {
          switch (_context33.prev = _context33.next) {
            case 0:
              if (!(this.status !== VMStatus.Stopped)) {
                _context33.next = 7;
                break;
              }

              this.trace("waiting to running - try");
              _context33.next = 4;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee31() {
                var handlersStarted, newRunners, sleepingRunners, _loop, _iterator3, _step3;

                return regenerator_default().wrap(function _callee31$(_context32) {
                  while (1) {
                    switch (_context32.prev = _context32.next) {
                      case 0:
                        if (!(_this15.status === VMStatus.Paused && _this15._runQueue.length)) {
                          _context32.next = 2;
                          break;
                        }

                        return _context32.abrupt("return");

                      case 2:
                        _this15.trace("waiting to running - start");

                        handlersStarted = [];
                        newRunners = [];
                        sleepingRunners = [];
                        _loop = /*#__PURE__*/regenerator_default().mark(function _loop() {
                          var h;
                          return regenerator_default().wrap(function _loop$(_context31) {
                            while (1) {
                              switch (_context31.prev = _context31.next) {
                                case 0:
                                  h = _step3.value;
                                  _context31.next = 3;
                                  return _this15.runHandlerAsync(h, true);

                                case 3:
                                  if (h.status === VMInternalStatus.Sleeping) {
                                    sleepingRunners.push(h);
                                  } else if (!h.atTop && handlersStarted.findIndex(function (hs) {
                                    return hs === h.handler;
                                  }) === -1) {
                                    newRunners.push(h);
                                    handlersStarted.push(h.handler);
                                  }

                                case 4:
                                case "end":
                                  return _context31.stop();
                              }
                            }
                          }, _loop);
                        });
                        _iterator3 = _createForOfIteratorHelperLoose(_this15._waitQueue);

                      case 8:
                        if ((_step3 = _iterator3()).done) {
                          _context32.next = 12;
                          break;
                        }

                        return _context32.delegateYield(_loop(), "t0", 10);

                      case 10:
                        _context32.next = 8;
                        break;

                      case 12:
                        newRunners.forEach(function (h) {
                          _this15._runQueue.push(h);

                          var index = _this15._waitQueue.indexOf(h);

                          if (index >= 0) _this15._waitQueue.splice(index, 1);
                        });
                        sleepingRunners.forEach(function (h) {
                          var index = _this15._waitQueue.indexOf(h);

                          if (index >= 0) _this15._waitQueue.splice(index, 1);
                        });

                      case 14:
                      case "end":
                        return _context32.stop();
                    }
                  }
                }, _callee31);
              })));

            case 4:
              _context33.next = 6;
              return this.runAsync();

            case 6:
              this._env.clearExternalStimulii();

            case 7:
            case "end":
              return _context33.stop();
          }
        }
      }, _callee32, this);
    }));

    function waitingToRunning() {
      return _waitingToRunning.apply(this, arguments);
    }

    return waitingToRunning;
  }();

  _proto4.stopSleepers = /*#__PURE__*/function () {
    var _stopSleepers = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee34() {
      var _this16 = this;

      return regenerator_default().wrap(function _callee34$(_context35) {
        while (1) {
          switch (_context35.prev = _context35.next) {
            case 0:
              _context35.next = 2;
              return this._sleepMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee33() {
                var _iterator4, _step4, s;

                return regenerator_default().wrap(function _callee33$(_context34) {
                  while (1) {
                    switch (_context34.prev = _context34.next) {
                      case 0:
                        for (_iterator4 = _createForOfIteratorHelperLoose(_this16._sleepQueue); !(_step4 = _iterator4()).done;) {
                          s = _step4.value;
                          clearTimeout(s.id);
                        }

                        _this16._sleepQueue = [];

                      case 2:
                      case "end":
                        return _context34.stop();
                    }
                  }
                }, _callee33);
              })));

            case 2:
            case "end":
              return _context35.stop();
          }
        }
      }, _callee34, this);
    }));

    function stopSleepers() {
      return _stopSleepers.apply(this, arguments);
    }

    return stopSleepers;
  }();

  _proto4.wakeSleeper = /*#__PURE__*/function () {
    var _wakeSleeper = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee37(h) {
      var _this17 = this;

      var handlerRunner;
      return regenerator_default().wrap(function _callee37$(_context38) {
        while (1) {
          switch (_context38.prev = _context38.next) {
            case 0:
              _context38.prev = 0;
              // let handlerMs: number = undefined
              handlerRunner = undefined; // let handler: VMHandler = undefined

              _context38.next = 4;
              return this._sleepMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee35() {
                var index, p;
                return regenerator_default().wrap(function _callee35$(_context36) {
                  while (1) {
                    switch (_context36.prev = _context36.next) {
                      case 0:
                        index = _this17._sleepQueue.findIndex(function (p) {
                          return (p === null || p === void 0 ? void 0 : p.handlerRunner) === h;
                        } // || p?.handler === h
                        );
                        (0,utils/* assert */.hu)(index >= 0);

                        if (index >= 0) {
                          p = _this17._sleepQueue[index]; //  handlerMs = p.ms

                          //  handlerMs = p.ms
                          handlerRunner = p.handlerRunner; // handler = p?.handler

                          // handler = p?.handler
                          _this17._sleepQueue.splice(index, 1); // clearTimeout(p.id)

                        }

                      case 3:
                      case "end":
                        return _context36.stop();
                    }
                  }
                }, _callee35);
              })));

            case 4:
              if (!(this.status === VMStatus.Stopped)) {
                _context38.next = 6;
                break;
              }

              return _context38.abrupt("return");

            case 6:
              _context38.next = 8;
              return this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee36() {
                return regenerator_default().wrap(function _callee36$(_context37) {
                  while (1) {
                    switch (_context37.prev = _context37.next) {
                      case 0:
                        /*
                        if (!handlerRunner && isEveryHandler(handler)) {
                            const index = this._everyQueue.findIndex(
                                h => h.handler === handler
                            )
                            if (index >= 0) {
                                handlerRunner = this._everyQueue[index]
                                this._everyQueue.splice(index, 1)
                                handlerRunner.gotoTop()
                            }
                        }*/
                        if (handlerRunner) {
                          // transition to the run queue
                          handlerRunner.wake();

                          _this17._runQueue.push(handlerRunner);
                        }

                      case 1:
                      case "end":
                        return _context37.stop();
                    }
                  }
                }, _callee36);
              })));

            case 8:
              if (!handlerRunner) {
                _context38.next = 20;
                break;
              }

              if (!(this.status === VMStatus.Running)) {
                _context38.next = 14;
                break;
              }

              this.trace("wake sleeper run");
              this.runAsync();
              _context38.next = 20;
              break;

            case 14:
              if (!(this.status === VMStatus.Paused)) {
                _context38.next = 20;
                break;
              }

              _context38.t0 = this;
              _context38.next = 18;
              return this.getCurrentRunner();

            case 18:
              _context38.t1 = _context38.sent;

              _context38.t0.emitBreakpoint.call(_context38.t0, _context38.t1);

            case 20:
              _context38.next = 26;
              break;

            case 22:
              _context38.prev = 22;
              _context38.t2 = _context38["catch"](0);
              console.debug(_context38.t2);
              this.emit(vm_events/* VM_INTERNAL_ERROR */.c2, _context38.t2);

            case 26:
            case "end":
              return _context38.stop();
          }
        }
      }, _callee37, this, [[0, 22]]);
    }));

    function wakeSleeper(_x18) {
      return _wakeSleeper.apply(this, arguments);
    }

    return wakeSleeper;
  }();

  _proto4.initializeRoleManagement = function initializeRoleManagement() {
    var _this18 = this;

    // adding a (role,service) binding
    var addRoleService = function addRoleService(role) {
      var service = _this18.roleManager.getService(role);

      if (service) {
        _this18._env.serviceChanged(role, service);
      }
    }; // initialize client


    this._roles.forEach(function (r) {
      addRoleService(r.role);
    });

    this.mount(this.roleManager.subscribe(constants/* ROLE_BOUND */.l9m, /*#__PURE__*/function () {
      var _ref18 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee38(role) {
        return regenerator_default().wrap(function _callee38$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                if (!_this18._serverRoles.find(function (r) {
                  return r.role === role;
                })) {
                  _context39.next = 2;
                  break;
                }

                return _context39.abrupt("return");

              case 2:
                addRoleService(role);

                _this18.waitingToRunning();

              case 4:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee38);
      }));

      return function (_x19) {
        return _ref18.apply(this, arguments);
      };
    }()));
    this.mount(this.roleManager.subscribe(constants/* ROLE_UNBOUND */.CCp, function (role) {
      if (_this18._serverRoles.find(function (r) {
        return r.role === role;
      })) return;

      _this18._env.serviceChanged(role, undefined);

      _this18.waitingToRunning();
    }));
  } // spin up provider
  ;

  _proto4.startProvider =
  /*#__PURE__*/
  function () {
    var _startProvider = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee39() {
      var _this19 = this;

      var servers, _iterator5, _step5, s;

      return regenerator_default().wrap(function _callee39$(_context40) {
        while (1) {
          switch (_context40.prev = _context40.next) {
            case 0:
              servers = this._env.servers();

              if (!servers.length) {
                _context40.next = 12;
                break;
              }

              this._provider = new serviceprovider/* default */.Z(servers.map(function (s) {
                return s.server;
              }) // if we create a deviceId, then trouble ensues
              // as a second device gets spun up later
              //{
              //    deviceId: "VMServiceProvider",
              //}
              );
              this._device = this.roleManager.bus.addServiceProvider(this._provider);
              servers.forEach(function (s, index) {
                _this19.roleManager.addRoleService(_this19._serverRoles[index].role, s.serviceClass, _this19._device.deviceId);
              }); // make sure it gets known (HACK)

              _iterator5 = _createForOfIteratorHelperLoose(servers);

            case 6:
              if ((_step5 = _iterator5()).done) {
                _context40.next = 12;
                break;
              }

              s = _step5.value;
              _context40.next = 10;
              return s.server.statusCode.sendGetAsync();

            case 10:
              _context40.next = 6;
              break;

            case 12:
            case "end":
              return _context40.stop();
          }
        }
      }, _callee39, this);
    }));

    function startProvider() {
      return _startProvider.apply(this, arguments);
    }

    return startProvider;
  }();

  _proto4.unmount = function unmount() {
    console.log("VMProgram (unmount)");

    _JDClient.prototype.unmount.call(this);

    if (this._provider) {
      this.roleManager.bus.removeServiceProvider(this._provider);
    }
  };

  (0,createClass/* default */.Z)(VMProgramRunner, [{
    key: "status",
    get: function get() {
      return this._status;
    }
  }, {
    key: "logData",
    get: function get() {
      return this._log.slice(0);
    }
  }]);

  return VMProgramRunner;
}(jdom_client/* JDClient */.z);
// EXTERNAL MODULE: ./src/components/AppContext.tsx
var AppContext = __webpack_require__(84377);
;// CONCATENATED MODULE: ./src/components/vm/useVMRunner.ts


 // tslint:disable-next-line: match-default-export-name no-submodule-imports





function useVMRunner(roleManager, program, autoRun) {
  var _useContext = (0,react.useContext)(AppContext/* default */.ZP),
      setError = _useContext.setError;

  var _useState = (0,react.useState)(),
      runner = _useState[0],
      setRunner = _useState[1];

  var _useState2 = (0,react.useState)(!!autoRun),
      _autoStart = _useState2[0],
      _setAutoStart = _useState2[1];

  var run = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _setAutoStart(!!autoRun);

              _context.next = 3;
              return runner.startAsync();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function run() {
      return _ref.apply(this, arguments);
    };
  }();

  var cancel = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _setAutoStart(false);

              runner.cancel();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function cancel() {
      return _ref2.apply(this, arguments);
    };
  }(); // auto start


  (0,react.useEffect)(function () {
    if (_autoStart && runner) runner.startAsync();
    return function () {
      return runner === null || runner === void 0 ? void 0 : runner.cancel();
    };
  }, [runner, _autoStart]); // create runner

  (0,react.useEffect)(function () {
    try {
      var newTestRunner = program && new VMProgramRunner(roleManager, program);
      setRunner(newTestRunner);
      return function () {
        return newTestRunner === null || newTestRunner === void 0 ? void 0 : newTestRunner.unmount();
      };
    } catch (e) {
      console.debug(e);
      setRunner(undefined);
    }
  }, [roleManager, program]); // errors

  (0,react.useEffect)(function () {
    return runner === null || runner === void 0 ? void 0 : runner.subscribe(constants/* ERROR */.pnR, function (e) {
      return setError(e);
    });
  }, [runner]); // traces

  var handleTrace = function handleTrace(value) {
    var message = value.message,
        context = value.context;
    if (flags/* default.diagnostics */.Z.diagnostics) console.debug("vm> " + message, context);
  };

  (0,react.useEffect)(function () {
    return runner === null || runner === void 0 ? void 0 : runner.subscribe(constants/* TRACE */.jes, handleTrace);
  }, [runner]);
  return {
    runner: runner,
    run: run,
    cancel: cancel
  };
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./src/components/CodeBlock.tsx + 4 modules
var CodeBlock = __webpack_require__(50274);
;// CONCATENATED MODULE: ./src/components/vm/VMDiagnostics.tsx



function VMDiagnostics(props) {
  var program = props.program;
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "subtitle1"
  }, "VM"), /*#__PURE__*/react.createElement(CodeBlock.default, {
    className: "json",
    downloadName: "test.json.vm",
    downloadText: JSON.stringify(program, null, 2)
  }, JSON.stringify(program, null, 2)));
}
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/blockly/BlockContext.tsx + 16 modules
var BlockContext = __webpack_require__(82393);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 3 modules
var DeviceAvatar = __webpack_require__(4726);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 25 modules
var servers = __webpack_require__(20079);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Cancel.js
var Cancel = __webpack_require__(30263);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(4998);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(14685);
// EXTERNAL MODULE: ./src/components/blockly/toolbox.ts
var toolbox = __webpack_require__(16582);
;// CONCATENATED MODULE: ./src/components/blockly/RoleChip.tsx

 // tslint:disable-next-line: match-default-export-name no-submodule-imports









function RoleChip(props) {
  var _useContext = (0,react.useContext)(BlockContext/* default */.C),
      workspace = _useContext.workspace;

  var role = props.role,
      service = props.service,
      serviceClass = props.serviceClass,
      preferredDeviceId = props.preferredDeviceId;

  var _useContext2 = (0,react.useContext)(Context/* default */.Z),
      bus = _useContext2.bus;

  var serviceServer = (0,useServiceServer/* default */.Z)(service);

  var handleRoleClick = function handleRoleClick() {
    // spin off simulator
    if (!service && !preferredDeviceId) {
      var specification = (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(serviceClass);

      if (specification) {
        (0,servers/* addServiceProvider */.Q6)(bus, (0,servers/* serviceProviderDefinitionFromServiceClass */.vd)(specification.classIdentifier));
      }
    } // add twin block


    if (workspace) {
      // try to find existing twin block
      var twinBlock = workspace.getTopBlocks(false).find(function (b) {
        var _b$inputList$0$fieldR, _b$inputList$0$fieldR2;

        return b.type === toolbox/* TWIN_BLOCK */.Zt && ((_b$inputList$0$fieldR = b.inputList[0].fieldRow.find(function (f) {
          return f.name === "role";
        })) === null || _b$inputList$0$fieldR === void 0 ? void 0 : (_b$inputList$0$fieldR2 = _b$inputList$0$fieldR.getVariable()) === null || _b$inputList$0$fieldR2 === void 0 ? void 0 : _b$inputList$0$fieldR2.name) === role;
      });

      if (!twinBlock) {
        twinBlock = workspace.newBlock(toolbox/* TWIN_BLOCK */.Zt);
        var variable = workspace.getVariable(role, serviceClass + ":client");
        if (!variable) variable = workspace.getVariable(role, serviceClass + ":server");
        console.log("new twin", {
          twinBlock: twinBlock,
          variable: variable
        });
        var field = twinBlock.inputList[0].fieldRow.find(function (f) {
          return f.name === "role";
        });
        field.setValue(variable.getId());
        var m = workspace.getMetrics();
        twinBlock.moveBy(m.viewWidth / 2, m.viewHeight / 3);
        twinBlock.initSvg();
        twinBlock.render(false);
      }

      workspace.centerOnBlock(twinBlock.id);
    }
  };

  var handleDelete = function handleDelete() {
    return bus.removeServiceProvider(serviceServer.device);
  };

  return /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    label: role,
    variant: service ? "default" : "outlined",
    avatar: service && /*#__PURE__*/react.createElement(DeviceAvatar/* default */.Z, {
      device: service.device
    }),
    onClick: handleRoleClick,
    onDelete: serviceServer ? handleDelete : undefined,
    deleteIcon: /*#__PURE__*/react.createElement(Tooltip/* default */.ZP, {
      title: "stop simulator"
    }, /*#__PURE__*/react.createElement(Cancel/* default */.Z, null))
  });
}
;// CONCATENATED MODULE: ./src/components/blockly/BlockRoles.tsx





function BlockClientRoles() {
  var _useContext = (0,react.useContext)(BlockContext/* default */.C),
      roleManager = _useContext.roleManager;

  var roles = (0,useChange/* default */.Z)(roleManager, function (_) {
    return _ === null || _ === void 0 ? void 0 : _.roles;
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, roles === null || roles === void 0 ? void 0 : roles.map(function (_ref) {
    var role = _ref.role,
        service = _ref.service,
        serviceClass = _ref.serviceClass,
        preferredDeviceId = _ref.preferredDeviceId;
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      item: true,
      key: role
    }, /*#__PURE__*/react.createElement(RoleChip, {
      role: role,
      service: service,
      serviceClass: serviceClass,
      preferredDeviceId: preferredDeviceId
    }));
  }));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayArrow.js
var PlayArrow = __webpack_require__(42404);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Stop.js
var Stop = __webpack_require__(34257);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithTooltip.tsx + 1 modules
var IconButtonWithTooltip = __webpack_require__(79885);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Pause.js
var Pause = __webpack_require__(66601);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PlayForWork.js
var PlayForWork = __webpack_require__(34264);
// EXTERNAL MODULE: ./src/components/hooks/useMounted.ts
var useMounted = __webpack_require__(72179);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithProgress.tsx + 1 modules
var IconButtonWithProgress = __webpack_require__(16845);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/BugReport.js
var BugReport = __webpack_require__(62481);
;// CONCATENATED MODULE: ./src/components/vm/VMRunnerButtons.tsx



 // tslint:disable-next-line: match-default-export-name no-submodule-imports















function useWorkspaceBreakpoints(program) {
  var _useContext = (0,react.useContext)(BlockContext/* default */.C),
      workspace = _useContext.workspace;

  var breakpoints = (0,react.useMemo)(function () {
    var _arrayConcatMany, _program$handlers;

    return ((_arrayConcatMany = (0,utils/* arrayConcatMany */.ue)(program === null || program === void 0 ? void 0 : (_program$handlers = program.handlers) === null || _program$handlers === void 0 ? void 0 : _program$handlers.filter(function (h) {
      return !h.meta;
    }) // don't debug watch statements
    .map(function (h) {
      return h.commands.map(function (cmd) {
        return cmd.sourceId;
      });
    }))) === null || _arrayConcatMany === void 0 ? void 0 : _arrayConcatMany.filter(function (id) {
      return !!id;
    })) || [];
  }, [program]);

  var setBreakpointHighlight = function setBreakpointHighlight(sourceId) {
    workspace === null || workspace === void 0 ? void 0 : workspace.highlightBlock(sourceId);
  };

  return {
    breakpoints: breakpoints,
    setBreakpointHighlight: setBreakpointHighlight
  };
}

function VMRunnerButtons(props) {
  var runner = props.runner,
      run = props.run,
      cancel = props.cancel;
  var status = (0,useChange/* default */.Z)(runner, function (t) {
    return t === null || t === void 0 ? void 0 : t.status;
  });
  var stopped = !status || status === VMStatus.Stopped;
  var program = runner === null || runner === void 0 ? void 0 : runner.program;

  var _useState = (0,react.useState)(false),
      indeterminate = _useState[0],
      setIndeterminate = _useState[1];

  var _useState2 = (0,react.useState)(undefined),
      breakpoint = _useState2[0],
      setBreakpoint = _useState2[1];

  var pausing = breakpoint === "";
  var paused = !!(breakpoint !== null && breakpoint !== void 0 && breakpoint.length);
  var mounted = (0,useMounted/* default */.Z)();
  var disabled = indeterminate || !runner;

  var _useWorkspaceBreakpoi = useWorkspaceBreakpoints(program),
      breakpoints = _useWorkspaceBreakpoi.breakpoints,
      setBreakpointHighlight = _useWorkspaceBreakpoi.setBreakpointHighlight; //console.log("runner status", status)


  var handleRun = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setIndeterminate(true);
              setBreakpoint(undefined);
              _context.next = 5;
              return run();

            case 5:
              _context.prev = 5;
              if (mounted()) setIndeterminate(false);
              return _context.finish(5);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0,, 5, 8]]);
    }));

    return function handleRun() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleCancel = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setIndeterminate(true);
              _context2.next = 4;
              return runner.clearBreakpointsAsync();

            case 4:
              setBreakpoint(undefined);
              _context2.next = 7;
              return cancel();

            case 7:
              _context2.prev = 7;
              if (mounted()) setIndeterminate(false);
              return _context2.finish(7);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0,, 7, 10]]);
    }));

    return function handleCancel() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleResume = /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setIndeterminate(true);
              setBreakpoint(undefined);
              _context3.next = 5;
              return runner.clearBreakpointsAsync();

            case 5:
              _context3.next = 7;
              return runner.resumeAsync();

            case 7:
              _context3.prev = 7;
              if (mounted()) setIndeterminate(false);
              return _context3.finish(7);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0,, 7, 10]]);
    }));

    return function handleResume() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handlePause = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee4() {
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setIndeterminate(true);
              _context4.next = 4;
              return runner.setBreakpointsAsync(breakpoints);

            case 4:
              _context4.next = 6;
              return runner.resumeAsync();

            case 6:
              setBreakpoint("");

            case 7:
              _context4.prev = 7;
              if (mounted()) setIndeterminate(false);
              return _context4.finish(7);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0,, 7, 10]]);
    }));

    return function handlePause() {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleStep = function handleStep() {
    return runner.stepAsync();
  }; // register breakpoint handler


  (0,react.useEffect)(function () {
    return runner === null || runner === void 0 ? void 0 : runner.subscribe(vm_events/* VM_BREAKPOINT */.Di, function (_, sourceId) {
      if (mounted()) setBreakpoint(sourceId);
    });
  }, [runner]); // setting blockly breakpoint

  (0,react.useEffect)(function () {
    setBreakpointHighlight(breakpoint);
    return function () {
      return setBreakpointHighlight(undefined);
    };
  }, [breakpoint]); // reset breakpoint in ui when runner, paused mode changes

  (0,react.useEffect)(function () {
    return setBreakpoint(undefined);
  }, [runner]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: paused ? "resume" : stopped ? "start" : "stop",
    disabled: disabled,
    color: stopped ? "primary" : "default",
    onClick: paused ? handleResume : stopped ? handleRun : handleCancel
  }, paused || stopped ? /*#__PURE__*/react.createElement(PlayArrow/* default */.Z, null) : /*#__PURE__*/react.createElement(Stop/* default */.Z, null)), " "), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(IconButtonWithProgress/* default */.Z, {
    title: pausing ? "cancel pause" : paused ? "step" : "pause",
    disabled: disabled,
    indeterminate: pausing,
    onClick: pausing ? handleResume : paused ? handleStep : handlePause
  }, paused ? /*#__PURE__*/react.createElement(PlayForWork/* default */.Z, null) : /*#__PURE__*/react.createElement(Pause/* default */.Z, null))), (pausing || paused) && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Chip/* default */.Z, {
    icon: /*#__PURE__*/react.createElement(BugReport/* default */.Z, null),
    label: pausing ? "pausing" : "paused",
    color: "secondary"
  })));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(88880);
;// CONCATENATED MODULE: ./src/components/vm/VMStartSimulatorButton.tsx





function VMStartSimulatorButton() {
  var _useContext = (0,react.useContext)(AppContext/* default */.ZP),
      toggleShowDeviceHostsDialog = _useContext.toggleShowDeviceHostsDialog;

  return /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "start simulator",
    onClick: toggleShowDeviceHostsDialog
  }, /*#__PURE__*/react.createElement(Add/* default */.Z, null));
}
;// CONCATENATED MODULE: ./src/components/vm/VMToolbar.tsx





function VMToolbar(props) {
  var runner = props.runner,
      run = props.run,
      cancel = props.cancel;
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "row",
    spacing: 1,
    alignItems: "center",
    alignContent: "center"
  }, /*#__PURE__*/react.createElement(VMRunnerButtons, {
    runner: runner,
    run: run,
    cancel: cancel
  }), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(VMStartSimulatorButton, null)), /*#__PURE__*/react.createElement(BlockClientRoles, null));
}
// EXTERNAL MODULE: ./src/components/blockly/BlockDiagnostics.tsx
var BlockDiagnostics = __webpack_require__(9370);
// EXTERNAL MODULE: ./src/components/vm/VMgenerator.ts
var VMgenerator = __webpack_require__(15056);
// EXTERNAL MODULE: ./src/components/blockly/BlockEditor.tsx + 5 modules
var BlockEditor = __webpack_require__(39067);
// EXTERNAL MODULE: ./src/components/blockly/fields/KeyboardKeyField.tsx
var KeyboardKeyField = __webpack_require__(90422);
// EXTERNAL MODULE: ./src/components/blockly/fields/LEDColorField.tsx
var LEDColorField = __webpack_require__(68514);
// EXTERNAL MODULE: ./src/components/blockly/fields/LEDMatrixField.tsx + 1 modules
var LEDMatrixField = __webpack_require__(11772);
// EXTERNAL MODULE: ./src/components/blockly/fields/JDomTreeField.tsx
var JDomTreeField = __webpack_require__(90263);
// EXTERNAL MODULE: ./src/components/blockly/fields/TwinField.tsx
var TwinField = __webpack_require__(35361);
// EXTERNAL MODULE: ./src/components/blockly/dsl/servicesbase.ts
var servicesbase = __webpack_require__(21910);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/spectool/jdspec.ts
var jdspec = __webpack_require__(13996);
// EXTERNAL MODULE: ./src/components/blockly/dsl/workers/data.proxy.ts
var data_proxy = __webpack_require__(21190);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/servicesdsl.ts














var SET_STATUS_LIGHT_BLOCK = "jacdac_set_status_light";
var ROLE_BOUND_EVENT_BLOCK = "jacdac_role_bound_event";
var ROLE_BOUND_BLOCK = "jacdac_role_bound";
var RECORD_WINDOW_BLOCK = "jacdac_record_window";
var INSPECT_BLOCK = "jacdac_tools_inspect";
var commandColor = "#8c6a1d";
var ServicesBlockDomainSpecificLanguage = /*#__PURE__*/function (_ServicesBaseDSL) {
  (0,inheritsLoose/* default */.Z)(ServicesBlockDomainSpecificLanguage, _ServicesBaseDSL);

  function ServicesBlockDomainSpecificLanguage() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ServicesBaseDSL.call.apply(_ServicesBaseDSL, [this].concat(args)) || this;
    _this.id = "jacdacServices";
    return _this;
  }

  var _proto = ServicesBlockDomainSpecificLanguage.prototype;

  _proto.createBlocks = function createBlocks(options) {
    var _this2 = this;

    var theme = options.theme;
    this.serviceColor = (0,servicesbase/* createServiceColor */.JO)(theme); // pure service information here

    var _getServiceInfo = (0,servicesbase/* getServiceInfo */.wi)(),
        allServices = _getServiceInfo.allServices,
        supportedServices = _getServiceInfo.supportedServices,
        registers = _getServiceInfo.registers,
        events = _getServiceInfo.events,
        commands = _getServiceInfo.commands,
        registerSimpleTypes = _getServiceInfo.registerSimpleTypes,
        registerComposites = _getServiceInfo.registerComposites,
        registerSimpleEnumTypes = _getServiceInfo.registerSimpleEnumTypes,
        registerCompositeEnumTypes = _getServiceInfo.registerCompositeEnumTypes;

    var resolveService = function resolveService(cls) {
      return allServices.filter(function (srv) {
        return srv.classIdentifier === cls;
      });
    };

    var customClientBlockDefinitions = [].concat((0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_HID_KEYBOARD */.Hg9).map(function (service) {
      return {
        kind: "block",
        type: "key",
        message0: "%1 %2 key %3",
        args0: [(0,servicesbase/* roleVariable */.xH)(service), {
          type: "field_dropdown",
          name: "action",
          options: [["press", "press"], ["down", "down"], ["up", "up"]]
        }, {
          type: KeyboardKeyField/* default.KEY */.Z.KEY,
          name: "combo"
        }],
        colour: _this2.serviceColor(service),
        inputsInline: true,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: "Send a keyboard key combo",
        helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
        service: service,
        expression: "role.key(combo.selectors, combo.modifiers, action)",
        template: "custom"
      };
    })), (0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_LED */.i04).map(function (service) {
      return {
        kind: "block",
        type: "fade",
        message0: "fade %1 to %2 at speed %3",
        args0: [(0,servicesbase/* roleVariable */.xH)(service), {
          type: "input_value",
          name: "color",
          check: "Number"
        }, {
          type: "input_value",
          name: "speed",
          check: "Number"
        }],
        values: {
          color: {
            kind: "block",
            type: LEDColorField/* default.SHADOW.type */.Z.SHADOW.type
          },
          speed: {
            kind: "block",
            type: "jacdac_ratio"
          }
        },
        colour: _this2.serviceColor(service),
        inputsInline: true,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: "Fade LED color",
        helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
        service: service,
        expression: "role.animate((color >> 16) & 0xff, (color >> 8) & 0xff, (color >> 0) & 0xff, speed * 0xff)",
        template: "custom"
      };
    })), (0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_SEVEN_SEGMENT_DISPLAY */.hvg).map(function (service) {
      return {
        kind: "block",
        type: "set_digits",
        message0: "set %1 digits to %2",
        args0: [(0,servicesbase/* roleVariable */.xH)(service), {
          type: "input_value",
          name: "digits",
          check: "Number"
        }],
        values: {
          digits: {
            kind: "block",
            type: "math_number"
          }
        },
        colour: _this2.serviceColor(service),
        inputsInline: true,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: "Display a number of the screen",
        helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
        service: service,
        template: "custom"
      };
    })), (0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_LED_MATRIX */.ZmS).map(function (service) {
      return {
        kind: "block",
        type: "show_leds",
        message0: "show %1 leds %2",
        args0: [(0,servicesbase/* roleVariable */.xH)(service), {
          type: LEDMatrixField/* default.KEY */.Z.KEY,
          name: "leds"
        }],
        colour: _this2.serviceColor(service),
        inputsInline: true,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: "Display LEDs on the LED matrix",
        helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
        service: service,
        // encode digits
        template: "custom"
      };
    }))).map(function (def) {
      def.type = "jacdac_custom_" + def.service.shortId.toLowerCase() + "_" + def.type;
      return def;
    });
    var eventClientBlocks = events.map(function (_ref) {
      var service = _ref.service,
          events = _ref.events;
      return {
        kind: "block",
        type: "jacdac_events_" + service.shortId,
        message0: "on %1 %2",
        args0: [(0,servicesbase/* roleVariable */.xH)(service), {
          type: "field_dropdown",
          name: "event",
          options: events.map(function (event) {
            return [(0,jdspec/* humanify */.lW)(event.name), event.name];
          })
        }],
        colour: _this2.serviceColor(service),
        inputsInline: true,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: "Events for the " + service.name + " service",
        helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
        service: service,
        events: events,
        template: "event"
      };
    });
    var registerChangeByEventClientBlocks = this.makeRegisterChangeByEventBlocks(registers);
    var registerSimpleGetClientBlocks = this.makeRegisterSimpleGetBlocks(registerSimpleTypes);
    var registerEnumGetClientBlocks = this.makeRegisterEnumGetBlocks([].concat((0,toConsumableArray/* default */.Z)(registerSimpleEnumTypes), (0,toConsumableArray/* default */.Z)(registerCompositeEnumTypes)));
    var registerNumericsGetClientBlocks = this.makeRegisterNumericsGetBlocks(registerComposites);
    var registerSetClientBlocks = this.makeRegisterSetBlocks(registers);
    var commandClientBlocks = commands.map(function (_ref2) {
      var service = _ref2.service,
          command = _ref2.command;
      return {
        kind: "block",
        type: "jacdac_command_" + service.shortId + "_" + command.name,
        message0: !command.fields.length ? (0,jdspec/* humanify */.lW)(command.name) + " %1" : (0,jdspec/* humanify */.lW)(command.name) + " %1 with " + (0,servicesbase/* fieldsToMessage */.Bo)(command),
        args0: [(0,servicesbase/* roleVariable */.xH)(service)].concat((0,toConsumableArray/* default */.Z)((0,servicesbase/* fieldsToFieldInputs */.GB)(command))),
        values: (0,servicesbase/* fieldsToValues */.ki)(service, command),
        inputsInline: true,
        colour: _this2.serviceColor(service),
        tooltip: command.description,
        helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
        service: service,
        command: command,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        template: "command"
      };
    });
    this._serviceBlocks = [].concat((0,toConsumableArray/* default */.Z)(eventClientBlocks), (0,toConsumableArray/* default */.Z)(registerSimpleGetClientBlocks), (0,toConsumableArray/* default */.Z)(registerEnumGetClientBlocks), (0,toConsumableArray/* default */.Z)(registerNumericsGetClientBlocks), (0,toConsumableArray/* default */.Z)(registerSetClientBlocks), (0,toConsumableArray/* default */.Z)(commandClientBlocks), (0,toConsumableArray/* default */.Z)(customClientBlockDefinitions), (0,toConsumableArray/* default */.Z)(registerChangeByEventClientBlocks));
    this._eventFieldBlocks = this.makeFieldBlocks(events.map(function (p) {
      return {
        service: p.service,
        packets: p.events
      };
    })); // client only

    this._roleBlocks = [{
      kind: "block",
      type: ROLE_BOUND_EVENT_BLOCK,
      message0: "on %1 %2",
      args0: [{
        type: "field_variable",
        name: "role",
        variable: "any",
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(function (srv) {
          return (0,servicesbase/* toRoleType */.tT)(srv);
        }))),
        defaultType: "client"
      }, {
        type: "field_dropdown",
        name: "event",
        options: [["bound", "bound"], ["unbound", "unbound"]]
      }],
      inputsInline: true,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      colour: commandColor,
      tooltip: "Runs code when a role is connected or disconnected",
      helpUrl: "",
      template: "role_binding_event"
    }, {
      kind: "block",
      type: ROLE_BOUND_BLOCK,
      message0: "%1 bound",
      args0: [{
        type: "field_variable",
        name: "role",
        variable: "any",
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(function (srv) {
          return (0,servicesbase/* toRoleType */.tT)(srv);
        }))),
        defaultType: "client"
      }],
      output: "Boolean",
      inputsInline: true,
      colour: commandColor,
      tooltip: "Runs code when a role is connected or disconnected",
      helpUrl: "",
      template: "role_bound"
    }, {
      kind: "block",
      type: SET_STATUS_LIGHT_BLOCK,
      message0: "set %1 status light to %2",
      args0: [{
        type: "field_variable",
        name: "role",
        variable: "all",
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(function (srv) {
          return (0,servicesbase/* toRoleType */.tT)(srv);
        }))),
        defaultType: "client"
      }, {
        type: "input_value",
        name: "color",
        check: "Number"
      }],
      values: {
        color: {
          kind: "block",
          type: LEDColorField/* default.SHADOW.type */.Z.SHADOW.type
        }
      },
      inputsInline: true,
      previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      colour: commandColor,
      tooltip: "Sets the color on the status light",
      helpUrl: ""
    }];
    var toolsBlocks = [{
      kind: "block",
      type: toolbox/* TWIN_BLOCK */.Zt,
      message0: "view %1 %2 %3",
      args0: [{
        type: "field_variable",
        name: "role",
        variable: "none",
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(function (srv) {
          return (0,servicesbase/* toRoleType */.tT)(srv);
        })), (0,toConsumableArray/* default */.Z)(supportedServices.map(function (srv) {
          return (0,servicesbase/* toRoleType */.tT)(srv, false);
        }))),
        defaultType: "client"
      }, {
        type: "input_dummy"
      }, {
        type: TwinField/* default.KEY */.Z.KEY,
        name: "twin"
      }],
      colour: toolbox/* toolsColour */.FR,
      inputsInline: false,
      tooltip: "Twin of the selected service",
      nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      helpUrl: "",
      template: "meta",
      transformData: toolbox/* identityTransformData */.FW
    }, {
      kind: "block",
      type: INSPECT_BLOCK,
      message0: "inspect %1 %2 %3",
      args0: [{
        type: "field_variable",
        name: "role",
        variable: "none",
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(function (srv) {
          return (0,servicesbase/* toRoleType */.tT)(srv);
        }))),
        defaultType: "client"
      }, {
        type: "input_dummy"
      }, {
        type: JDomTreeField/* default.KEY */.Z.KEY,
        name: "twin"
      }],
      colour: toolbox/* toolsColour */.FR,
      inputsInline: false,
      tooltip: "Inspect a service",
      helpUrl: "",
      template: "meta"
    }, {
      kind: "block",
      type: RECORD_WINDOW_BLOCK,
      message0: "record last %1 s",
      args0: [{
        type: "field_number",
        name: "horizon",
        value: 10
      }],
      inputsInline: false,
      previousStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      colour: toolbox/* toolsColour */.FR,
      template: "meta",
      dataPreviewField: true,
      transformData: function () {
        var _transformData = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(block, data, previousData) {
          var horizon;
          return regenerator_default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  horizon = block.getFieldValue("horizon") || 10;
                  return _context.abrupt("return", (0,data_proxy/* default */.Z)({
                    type: "record_window",
                    data: data,
                    previousData: previousData,
                    horizon: horizon
                  }));

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function transformData(_x, _x2, _x3) {
          return _transformData.apply(this, arguments);
        }

        return transformData;
      }()
    }];
    return [].concat((0,toConsumableArray/* default */.Z)(this._serviceBlocks), (0,toConsumableArray/* default */.Z)(this._eventFieldBlocks), (0,toConsumableArray/* default */.Z)(this._roleBlocks), toolsBlocks);
  };

  _proto.createCategory = function createCategory(options) {
    var makeServicesCategories = this.createCategoryHelper(options);
    var clientServicesCategories = makeServicesCategories(this._serviceBlocks, this._eventFieldBlocks);
    var commonCategory = {
      kind: "category",
      name: "Roles",
      colour: commandColor,
      contents: [{
        kind: "block",
        type: ROLE_BOUND_EVENT_BLOCK
      }, {
        kind: "block",
        type: ROLE_BOUND_BLOCK
      }, {
        kind: "block",
        type: SET_STATUS_LIGHT_BLOCK,
        values: {
          color: {
            kind: "block",
            type: LEDColorField/* default.SHADOW.type */.Z.SHADOW.type
          }
        }
      }]
    };
    var toolsCategory = {
      kind: "category",
      name: "Tools",
      colour: toolbox/* toolsColour */.FR,
      contents: [{
        kind: "block",
        type: toolbox/* TWIN_BLOCK */.Zt
      }, {
        kind: "block",
        type: RECORD_WINDOW_BLOCK
      }, {
        kind: "block",
        type: INSPECT_BLOCK
      }]
    };
    return [].concat((0,toConsumableArray/* default */.Z)(clientServicesCategories), [commonCategory, toolsCategory]);
  };

  return ServicesBlockDomainSpecificLanguage;
}(servicesbase/* ServicesBaseDSL */.Hy);
var servicesDSL = new ServicesBlockDomainSpecificLanguage();
/* harmony default export */ var servicesdsl = (servicesDSL);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat-map.js
var es_array_flat_map = __webpack_require__(86535);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat-map.js
var es_array_unscopables_flat_map = __webpack_require__(99244);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/serverservicesdsl.ts







var ServerServicesBlockDomainSpecificLanguage = /*#__PURE__*/function (_ServicesBaseDSL) {
  (0,inheritsLoose/* default */.Z)(ServerServicesBlockDomainSpecificLanguage, _ServicesBaseDSL);

  function ServerServicesBlockDomainSpecificLanguage() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ServicesBaseDSL.call.apply(_ServicesBaseDSL, [this].concat(args)) || this;
    _this.id = "jacdacServerServices";
    _this.supportedServices = [];
    return _this;
  }

  var _proto = ServerServicesBlockDomainSpecificLanguage.prototype;

  _proto.makeRegisterGetSetRequestBlocks = function makeRegisterGetSetRequestBlocks(registers, isGet) {
    var _this2 = this;

    return registers.filter(function (r) {
      return isGet && (r.register.kind === "ro" || r.register.kind === "rw") || !isGet && r.register.kind == "rw";
    }).map(function (_ref) {
      var service = _ref.service,
          register = _ref.register;
      return {
        kind: "block",
        type: "jacdac_register_" + (isGet ? "get" : "set") + "_request_" + service.shortId + "_" + register.name,
        message0: "on register " + (isGet ? "get" : "set") + " %1 " + (0,jdspec/* humanify */.lW)(register.name),
        args0: [(0,servicesbase/* roleVariable */.xH)(service, false)],
        colour: _this2.serviceColor(service),
        inputsInline: true,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: register.description,
        helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
        service: service,
        events: [register],
        template: "event"
      };
    });
  };

  _proto.createBlocks = function createBlocks(options) {
    var _this3 = this;

    var theme = options.theme;
    this.serviceColor = (0,servicesbase/* createServiceColor */.JO)(theme); // pure service information here

    var _getServiceInfo = (0,servicesbase/* getServiceInfo */.wi)(),
        registers = _getServiceInfo.registers,
        events = _getServiceInfo.events,
        commands = _getServiceInfo.commands,
        registerSimpleTypes = _getServiceInfo.registerSimpleTypes,
        registerComposites = _getServiceInfo.registerComposites,
        registerSimpleEnumTypes = _getServiceInfo.registerSimpleEnumTypes,
        registerCompositeEnumTypes = _getServiceInfo.registerCompositeEnumTypes;

    var eventServerBlocks = events.flatMap(function (_ref2) {
      var service = _ref2.service,
          events = _ref2.events;
      var eventsNoArgs = events.filter(function (ev) {
        return ev.fields.length === 0;
      });
      var retNoArgs = {
        kind: "block",
        type: "jacdac_raise_event_" + service.shortId,
        message0: "raise %1 %2",
        args0: [(0,servicesbase/* roleVariable */.xH)(service, false), {
          type: "field_dropdown",
          name: "event",
          options: eventsNoArgs.map(function (event) {
            return [(0,jdspec/* humanify */.lW)(event.name), event.name];
          })
        }],
        inputsInline: true,
        colour: _this3.serviceColor(service),
        tooltip: "Events for the " + service.name + " service",
        helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
        service: service,
        command: undefined,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        template: "raiseNo"
      };
      var eventsArgs = events.filter(function (ev) {
        return ev.fields.length;
      });
      var retArgs = eventsArgs.map(function (ev) {
        return {
          kind: "block",
          type: "jacdac_raise_event_" + service.shortId + "_" + ev.name,
          message0: !ev.fields.length ? "raise %1 " + (0,jdspec/* humanify */.lW)(ev.name) : "raise %1 " + (0,jdspec/* humanify */.lW)(ev.name) + " with " + (0,servicesbase/* fieldsToMessage */.Bo)(ev),
          args0: [(0,servicesbase/* roleVariable */.xH)(service, false)].concat((0,toConsumableArray/* default */.Z)((0,servicesbase/* fieldsToFieldInputs */.GB)(ev))),
          values: (0,servicesbase/* fieldsToValues */.ki)(service, ev),
          inputsInline: true,
          colour: _this3.serviceColor(service),
          tooltip: ev.description,
          helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
          service: service,
          command: ev,
          previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
          nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
          template: "raiseArgs"
        };
      });
      return [retNoArgs].concat((0,toConsumableArray/* default */.Z)(retArgs));
    });
    var registerSimpleGetServerBlocks = this.makeRegisterSimpleGetBlocks(registerSimpleTypes, false);
    var registerEnumGetServerBlocks = this.makeRegisterEnumGetBlocks([].concat((0,toConsumableArray/* default */.Z)(registerSimpleEnumTypes), (0,toConsumableArray/* default */.Z)(registerCompositeEnumTypes)), false);
    var registerNumericsGetServerBlocks = this.makeRegisterNumericsGetBlocks(registerComposites, false);
    var registerSetServerBlocks = this.makeRegisterSetBlocks(registers, false);
    var registerSetRequestBlocks = this.makeRegisterGetSetRequestBlocks(registers, false);
    var registerGetRequestBlocks = this.makeRegisterGetSetRequestBlocks(registers, true);
    var commandServerBlocks = commands.map(function (_ref3) {
      var service = _ref3.service,
          command = _ref3.command;
      return {
        kind: "block",
        type: "jacdac_command_server_" + service.shortId + "_" + command.name,
        message0: "on " + (0,jdspec/* humanify */.lW)(command.name) + " %1",
        args0: [(0,servicesbase/* roleVariable */.xH)(service, false)],
        colour: _this3.serviceColor(service),
        inputsInline: true,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: command.description,
        helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
        service: service,
        events: [command],
        template: "event"
      };
    });
    this._serviceBlocks = [].concat((0,toConsumableArray/* default */.Z)(eventServerBlocks), (0,toConsumableArray/* default */.Z)(registerSimpleGetServerBlocks), (0,toConsumableArray/* default */.Z)(registerEnumGetServerBlocks), (0,toConsumableArray/* default */.Z)(registerNumericsGetServerBlocks), (0,toConsumableArray/* default */.Z)(registerSetServerBlocks), (0,toConsumableArray/* default */.Z)(commandServerBlocks), (0,toConsumableArray/* default */.Z)(registerSetRequestBlocks), (0,toConsumableArray/* default */.Z)(registerGetRequestBlocks));
    this._eventFieldBlocks = this.makeFieldBlocks(commands.map(function (p) {
      return {
        service: p.service,
        packets: [p.command]
      };
    }), false);
    return [].concat((0,toConsumableArray/* default */.Z)(this._serviceBlocks), (0,toConsumableArray/* default */.Z)(this._eventFieldBlocks));
  };

  _proto.createCategory = function createCategory(options) {
    var makeServicesCategories = this.createCategoryHelper(options);
    var serverServicesCategories = makeServicesCategories(this._serviceBlocks, this._eventFieldBlocks, false);
    if (!(serverServicesCategories !== null && serverServicesCategories !== void 0 && serverServicesCategories.length)) return [];
    return [{
      kind: "sep"
    }, {
      kind: "category",
      name: "Servers",
      contents: serverServicesCategories
    }];
  };

  return ServerServicesBlockDomainSpecificLanguage;
}(servicesbase/* ServicesBaseDSL */.Hy);
var serverServicesDSL = new ServerServicesBlockDomainSpecificLanguage();
/* harmony default export */ var serverservicesdsl = (serverServicesDSL);
// EXTERNAL MODULE: ./src/components/blockly/fields/LogViewField.tsx
var LogViewField = __webpack_require__(86899);
// EXTERNAL MODULE: ./src/components/blockly/fields/VariablesFields.tsx
var VariablesFields = __webpack_require__(15757);
// EXTERNAL MODULE: ./src/components/blockly/fields/WatchValueField.tsx
var WatchValueField = __webpack_require__(2006);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/toolsdsl.ts






var WATCH_BLOCK = "tools_watch";
var LOG_BLOCK = "tools_log";
var VIEW_LOG_BLOCK = "tools_log_view";
var VARIABLES_BLOCK = "tools_variables_view";
var colour = toolbox/* toolsColour */.FR;
var toolsDSL = {
  id: "tools",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: VARIABLES_BLOCK,
      message0: "variables %1 %2",
      args0: [{
        type: "input_dummy"
      }, {
        type: VariablesFields/* default.KEY */.Z.KEY,
        name: "variables"
      }],
      colour: colour,
      inputsInline: false,
      tooltip: "Watch variables values",
      helpUrl: "",
      template: "meta"
    }, {
      kind: "block",
      type: WATCH_BLOCK,
      message0: "watch %1 %2",
      args0: [{
        type: "input_value",
        name: "value"
      }, {
        type: WatchValueField/* default.KEY */.Z.KEY,
        name: "watch"
      }],
      colour: colour,
      inputsInline: true,
      tooltip: "Watch a value in the editor",
      helpUrl: "",
      nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      transformData: toolbox/* identityTransformData */.FW
    }, {
      kind: "block",
      type: LOG_BLOCK,
      message0: "log %1",
      args0: [{
        type: "input_value",
        name: "value"
      }],
      colour: colour,
      inputsInline: true,
      previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      tooltip: "Log an entry to the console",
      helpUrl: ""
    }, {
      kind: "block",
      type: VIEW_LOG_BLOCK,
      message0: "console %1 %2",
      args0: [{
        type: "input_dummy"
      }, {
        type: LogViewField/* default.KEY */.Z.KEY,
        name: "watch"
      }],
      colour: colour,
      inputsInline: false,
      tooltip: "View console content",
      template: "meta"
    }];
  },
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "Debugger",
      colour: colour,
      contents: [{
        kind: "label",
        text: "Variables"
      }, {
        kind: "block",
        type: VARIABLES_BLOCK
      }, {
        kind: "block",
        type: WATCH_BLOCK
      }, {
        kind: "label",
        text: "Logging"
      }, {
        kind: "block",
        type: LOG_BLOCK,
        values: {
          value: {
            kind: "block",
            type: "text"
          }
        }
      }, {
        kind: "block",
        type: VIEW_LOG_BLOCK
      }]
    }, {
      kind: "sep"
    }];
  },
  compileCommandToVM: function compileCommandToVM(_ref) {
    var block = _ref.block,
        blockToExpression = _ref.blockToExpression;
    var type = block.type;

    if (type === LOG_BLOCK) {
      var inputs = block.inputs;

      var _blockToExpression = blockToExpression(undefined, inputs[0].child),
          expr = _blockToExpression.expr,
          errors = _blockToExpression.errors;

      return {
        cmd: (0,VMgenerator/* makeVMBase */.IZ)(block, {
          type: "CallExpression",
          arguments: [expr],
          callee: (0,compile/* toIdentifier */.EB)("log")
        }),
        errors: errors
      };
    }

    return undefined;
  },
  compileEventToVM: function compileEventToVM(_ref2) {
    var block = _ref2.block,
        blockToExpression = _ref2.blockToExpression;
    var type = block.type;

    if (type === WATCH_BLOCK) {
      var inputs = block.inputs;

      var _blockToExpression2 = blockToExpression(undefined, inputs[0].child),
          expr = _blockToExpression2.expr,
          errors = _blockToExpression2.errors;

      return {
        expression: {
          type: "CallExpression",
          arguments: [expr],
          callee: (0,compile/* toIdentifier */.EB)("watch")
        },
        errors: errors,
        meta: true
      };
    }

    return undefined;
  }
};
/* harmony default export */ var toolsdsl = (toolsDSL);
// EXTERNAL MODULE: ./src/components/blockly/dsl/palette.ts
var palette = __webpack_require__(74602);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/loopsdsl.ts




var WAIT_BLOCK = "jacdac_wait";
var ON_START_BLOCK = "jacdac_start";
var REPEAT_EVERY_BLOCK = "jacdac_repeat_every";
var loopsdsl_colour = (0,palette/* paletteColorByIndex */.W)(0);
var loopsDsl = {
  id: "loops",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: WAIT_BLOCK,
      message0: "wait %1 s",
      args0: [{
        type: "input_value",
        name: "time",
        check: "Number"
      }],
      inputsInline: true,
      previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      colour: loopsdsl_colour,
      tooltip: "Wait the desired time",
      helpUrl: ""
    }, {
      kind: "block",
      type: ON_START_BLOCK,
      message0: "on start",
      args0: [],
      colour: loopsdsl_colour,
      inputsInline: true,
      tooltip: "Runs code when the device starts",
      helpUrl: "",
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL
    }, {
      kind: "block",
      type: REPEAT_EVERY_BLOCK,
      message0: "repeat every %1s",
      args0: [{
        type: "input_value",
        name: "interval",
        check: "Number"
      }],
      colour: loopsdsl_colour,
      inputsInline: true,
      tooltip: "Repeats code at a given interval in seconds",
      helpUrl: "",
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL
    }];
  },
  createCategory: function createCategory() {
    return [{
      kind: "sep"
    }, {
      kind: "category",
      name: "Events",
      colour: loopsdsl_colour,
      contents: [{
        kind: "block",
        type: REPEAT_EVERY_BLOCK,
        values: {
          interval: {
            kind: "block",
            type: "jacdac_time_picker"
          }
        }
      }, {
        kind: "block",
        type: ON_START_BLOCK
      }, {
        kind: "block",
        type: WAIT_BLOCK,
        values: {
          time: {
            kind: "block",
            type: "jacdac_time_picker"
          }
        }
      }].filter(function (b) {
        return !!b;
      })
    }];
  },
  compileEventToVM: function compileEventToVM(_ref) {
    var block = _ref.block,
        blockToExpression = _ref.blockToExpression;
    var type = block.type;

    if (type === ON_START_BLOCK) {
      return {
        expression: (0,VMgenerator/* makeVMBase */.IZ)(block, {
          type: "CallExpression",
          arguments: [],
          callee: (0,compile/* toIdentifier */.EB)("start")
        }).command,
        errors: (0,VMgenerator/* processErrors */.cC)(block, [])
      };
    } else if (type === REPEAT_EVERY_BLOCK) {
      var inputs = block.inputs;

      var _blockToExpression = blockToExpression(undefined, inputs[0].child),
          time = _blockToExpression.expr,
          errors = _blockToExpression.errors;

      return {
        expression: (0,VMgenerator/* makeVMBase */.IZ)(block, {
          type: "CallExpression",
          arguments: [time],
          callee: (0,compile/* toIdentifier */.EB)("wait")
        }).command,
        errors: (0,VMgenerator/* processErrors */.cC)(block, errors)
      };
    }

    return undefined;
  },
  compileCommandToVM: function compileCommandToVM(_ref2) {
    var event = _ref2.event,
        block = _ref2.block,
        blockToExpression = _ref2.blockToExpression;
    var type = block.type;

    if (type === WAIT_BLOCK) {
      var inputs = block.inputs;
      {
        var _blockToExpression2 = blockToExpression(event, inputs[0].child),
            time = _blockToExpression2.expr,
            errors = _blockToExpression2.errors;

        return {
          cmd: (0,VMgenerator/* makeVMBase */.IZ)(block, {
            type: "CallExpression",
            arguments: [time],
            callee: (0,compile/* toIdentifier */.EB)("wait")
          }),
          errors: (0,VMgenerator/* processErrors */.cC)(block, errors)
        };
      }
    }

    return undefined;
  }
};
/* harmony default export */ var loopsdsl = (loopsDsl);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/logicdsl.ts
var ops = {
  AND: "&&",
  OR: "||",
  EQ: "===",
  NEQ: "!==",
  LT: "<",
  GT: ">",
  LTE: "<=",
  GTE: ">=",
  NEG: "-"
};
var logicDsl = {
  id: "logic",
  types: ["variable_if", "logic_compare", "logic_operation", "logic_negate", "logic_boolean"],
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "Logic",
      colour: "%{BKY_LOGIC_HUE}",
      contents: [{
        kind: "block",
        type: "dynamic_if"
      }, {
        kind: "block",
        type: "logic_compare",
        values: {
          A: {
            kind: "block",
            type: "math_number"
          },
          B: {
            kind: "block",
            type: "math_number"
          }
        }
      }, {
        kind: "block",
        type: "logic_operation",
        values: {
          A: {
            kind: "block",
            type: "logic_boolean"
          },
          B: {
            kind: "block",
            type: "logic_boolean"
          }
        }
      }, {
        kind: "block",
        type: "logic_negate",
        values: {
          BOOL: {
            kind: "block",
            type: "logic_boolean"
          }
        }
      }, {
        kind: "block",
        type: "logic_boolean"
      }]
    }];
  },
  compileExpressionToVM: function compileExpressionToVM(_ref) {
    var event = _ref.event,
        block = _ref.block,
        blockToExpressionInner = _ref.blockToExpressionInner;
    var type = block.type,
        inputs = block.inputs;

    switch (type) {
      case "logic_operation":
        {
          var left = blockToExpressionInner(event, inputs[0].child);
          var right = blockToExpressionInner(event, inputs[1].child);
          var op = inputs[1].fields["op"].value;
          return {
            expr: {
              type: "LogicalExpression",
              operator: ops[op] || op,
              left: left,
              right: right
            },
            errors: []
          };
        }

      case "logic_negate":
        {
          var argument = blockToExpressionInner(event, inputs[0].child);
          return {
            expr: {
              type: "UnaryExpression",
              operator: "!",
              argument: argument,
              prefix: false // TODO:?

            },
            errors: []
          };
        }

      case "logic_compare":
        {
          var _left = blockToExpressionInner(event, inputs[0].child);

          var _right = blockToExpressionInner(event, inputs[1].child);

          var _op = inputs[1].fields["op"].value;
          return {
            expr: {
              type: "BinaryExpression",
              operator: ops[_op] || _op,
              left: _left,
              right: _right
            },
            errors: []
          };
        }
    }

    return undefined;
  }
};
/* harmony default export */ var logicdsl = (logicDsl);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/mathdsl.ts
var mathdsl_ops = {
  NEG: "-",
  ADD: "+",
  MULTIPLY: "*",
  DIVIDE: "/",
  MINUS: "-"
};
var mathDsl = {
  id: "jacdacmath",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: "jacdac_math_arithmetic",
      message0: "%1 %2 %3",
      args0: [{
        type: "input_value",
        name: "A",
        check: "Number"
      }, {
        type: "field_dropdown",
        name: "OP",
        options: [["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"], ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"], ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"], ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"]]
      }, {
        type: "input_value",
        name: "B",
        check: "Number"
      }],
      inputsInline: true,
      output: "Number",
      style: "math_blocks",
      helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
      extensions: ["math_op_tooltip"]
    }, {
      kind: "block",
      type: "jacdac_math_single",
      message0: "%1 %2",
      args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [["-", "NEG"], ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"]]
      }, {
        type: "input_value",
        name: "NUM",
        check: "Number"
      }],
      output: "Number",
      style: "math_blocks",
      helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
      extensions: ["math_op_tooltip"]
    }, {
      kind: "block",
      type: "jacdac_math_random",
      message0: "random",
      args0: [],
      output: "Number",
      style: "math_blocks",
      vm: function vm() {
        return Math.random();
      }
    }, {
      kind: "block",
      type: "jacdac_math_clamp",
      message0: "clamp %1 in [%2, %3]",
      args0: [{
        type: "input_value",
        name: "value",
        check: "Number"
      }, {
        type: "input_value",
        name: "minInclusive",
        check: "Number"
      }, {
        type: "input_value",
        name: "maxInclusive",
        check: "Number"
      }],
      output: "Number",
      style: "math_blocks",
      vm: function vm(value, minInclusive, maxInclusive) {
        return value < minInclusive ? minInclusive : value > maxInclusive ? maxInclusive : value;
      }
    }, {
      kind: "block",
      type: "jacdac_math_map",
      message0: "map %1 from [%2, %3] to [%4, %5]",
      args0: [{
        type: "input_value",
        name: "value",
        check: "Number"
      }, {
        type: "input_value",
        name: "fromMin",
        check: "Number"
      }, {
        type: "input_value",
        name: "fromMax",
        check: "Number"
      }, {
        type: "input_value",
        name: "toMin",
        check: "Number"
      }, {
        type: "input_value",
        name: "toMax",
        check: "Number"
      }],
      output: "Number",
      style: "math_blocks"
    }];
  },
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "Math",
      colour: "%{BKY_MATH_HUE}",
      contents: [{
        kind: "block",
        type: "jacdac_math_arithmetic",
        values: {
          A: {
            kind: "block",
            type: "math_number"
          },
          B: {
            kind: "block",
            type: "math_number"
          }
        }
      }, {
        kind: "block",
        type: "jacdac_math_single",
        values: {
          NUM: {
            kind: "block",
            type: "math_number"
          }
        }
      }, {
        kind: "block",
        type: "jacdac_math_random"
      }, {
        kind: "block",
        type: "jacdac_math_map"
      }, {
        kind: "block",
        type: "math_number"
      }]
    }];
  },
  compileExpressionToVM: function compileExpressionToVM(_ref) {
    var event = _ref.event,
        block = _ref.block,
        blockToExpressionInner = _ref.blockToExpressionInner;
    var type = block.type,
        inputs = block.inputs;

    switch (type) {
      case "math_single": // built-in blockly

      case "jacdac_math_single":
        {
          var argument = blockToExpressionInner(event, inputs[0].child);
          var op = inputs[0].fields["op"].value;
          return {
            expr: {
              type: "UnaryExpression",
              operator: mathdsl_ops[op] || op,
              argument: argument,
              prefix: false // TODO:?

            },
            errors: []
          };
        }

      case "math_arithmetic": // built-in blockly

      case "jacdac_math_arithmetic":
        {
          var left = blockToExpressionInner(event, inputs[0].child);
          var right = blockToExpressionInner(event, inputs[1].child);
          var _op = inputs[1].fields["op"].value;
          return {
            expr: {
              type: "BinaryExpression",
              operator: mathdsl_ops[_op] || _op,
              left: left,
              right: right
            },
            errors: []
          };
        }
    }

    return undefined;
  }
};
/* harmony default export */ var mathdsl = (mathDsl);
// EXTERNAL MODULE: ./src/components/blockly/dsl/variablesdsl.ts
var variablesdsl = __webpack_require__(86947);
// EXTERNAL MODULE: ./src/components/blockly/dsl/shadowdsl.ts
var shadowdsl = __webpack_require__(96958);
// EXTERNAL MODULE: ./src/components/blockly/dsl/fieldsdsl.ts
var fieldsdsl = __webpack_require__(76658);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/jsondsl.ts



var jsondsl_colour = (0,palette/* paletteColorByIndex */.W)(-2);
var JSON_FIELD_TYPE = "JSONField";
var JSON_OBJECT_BLOCK = "json_object";
var JSON_FIELD_SET_BLOCK = "json_field_set";
var JSON_FIELD_GET_TEMPLATE = "jsonFieldGet";
var JSON_FIELD_VALUE_TYPE = [].concat((0,toConsumableArray/* default */.Z)(toolbox/* PRIMITIVE_TYPES */.eg), [toolbox/* JSON_TYPE */.oj]);
var JSON_FIELD_HAS_BLOCK = "json_field_has";
var jsonDSL = {
  id: "json",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: JSON_OBJECT_BLOCK,
      message0: "{ %1 %2 }",
      args0: [{
        type: "input_dummy"
      }, {
        type: "input_statement",
        name: "fields",
        check: JSON_FIELD_TYPE
      }],
      output: toolbox/* JSON_TYPE */.oj,
      colour: jsondsl_colour
    }, {
      kind: "block",
      type: JSON_FIELD_SET_BLOCK,
      message0: "%1: %2",
      args0: [{
        type: "field_input",
        name: "name",
        spellcheck: false
      }, {
        type: "input_value",
        name: "value",
        check: JSON_FIELD_VALUE_TYPE
      }],
      previousStatement: JSON_FIELD_TYPE,
      nextStatement: JSON_FIELD_TYPE,
      colour: jsondsl_colour
    }].concat((0,toConsumableArray/* default */.Z)(toolbox/* PRIMITIVE_TYPES.map */.eg.map(function (output) {
      return {
        kind: "block",
        type: "json_field_get_as_" + output.toLowerCase(),
        message0: "%1 [ %2 ] as " + output.toLowerCase(),
        args0: [{
          type: "input_value",
          name: "value",
          check: toolbox/* JSON_TYPE */.oj
        }, {
          type: "field_input",
          name: "name",
          spellcheck: false
        }],
        output: output,
        colour: jsondsl_colour,
        template: JSON_FIELD_GET_TEMPLATE,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        vm: function vm(value, name) {
          return value === null || value === void 0 ? void 0 : value[name];
        }
      };
    })), [{
      kind: "block",
      type: JSON_FIELD_HAS_BLOCK,
      message0: "has %1 [ %2 ]",
      args0: [{
        type: "input_value",
        name: "value",
        check: toolbox/* JSON_TYPE */.oj
      }, {
        type: "field_input",
        name: "name",
        spellcheck: false
      }],
      output: toolbox/* BOOLEAN_TYPE */.lu,
      colour: jsondsl_colour,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vm: function vm(value, name) {
        return !!(value !== null && value !== void 0 && value[name]);
      }
    }]);
  },
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "JSON",
      colour: jsondsl_colour,
      contents: [{
        kind: "label",
        text: "Create"
      }, {
        kind: "block",
        type: JSON_OBJECT_BLOCK
      }, {
        kind: "block",
        type: JSON_FIELD_SET_BLOCK,
        values: {
          value: {
            kind: "block",
            type: "math_number"
          }
        }
      }, {
        kind: "label",
        text: "Read"
      }].concat((0,toConsumableArray/* default */.Z)(toolbox/* PRIMITIVE_TYPES.map */.eg.map(function (output) {
        return {
          kind: "block",
          type: "json_field_get_as_" + output.toLowerCase(),
          values: {
            value: {
              kind: "block",
              type: "variables_get",
              check: toolbox/* JSON_TYPE */.oj
            }
          }
        };
      })), [{
        kind: "block",
        type: JSON_FIELD_HAS_BLOCK
      }])
    }];
  },
  compileExpressionToVM: function compileExpressionToVM(options) {
    var event = options.event,
        block = options.block,
        definition = options.definition,
        blockToExpressionInner = options.blockToExpressionInner;
    var type = block.type;
    var template = definition.template;

    if (type === JSON_OBJECT_BLOCK) {// TODO
    } else if (type === JSON_FIELD_SET_BLOCK) {// TODO
    } else if (template === JSON_FIELD_GET_TEMPLATE) {
      // TODO: genearte JSON
      console.log("json expr", {
        event: event,
        block: block,
        definition: definition,
        blockToExpressionInner: blockToExpressionInner
      });
      return undefined;
    } // don't know


    return undefined;
  }
};
/* harmony default export */ var jsondsl = (jsonDSL);
// EXTERNAL MODULE: ./src/components/blockly/dsl/chartdsl.ts
var chartdsl = __webpack_require__(57611);
// EXTERNAL MODULE: ./src/components/blockly/dsl/datadsl.ts
var datadsl = __webpack_require__(73595);
// EXTERNAL MODULE: ./src/components/blockly/fields/DataColumnChooserField.ts
var DataColumnChooserField = __webpack_require__(44393);
// EXTERNAL MODULE: ./src/components/blockly/fields/GaugeWidgetField.tsx + 22 modules
var GaugeWidgetField = __webpack_require__(95548);
;// CONCATENATED MODULE: ./src/components/blockly/dsl/widgetdsl.ts



var DASHBOARD_GAUGE_BLOCK = "jacdac_widget_gauge";
var widgetdsl_colour = toolbox/* toolsColour */.FR;
var widgetDSL = {
  id: "widget",
  createBlocks: function createBlocks() {
    return [{
      kind: "block",
      type: DASHBOARD_GAUGE_BLOCK,
      message0: "gauge min %1 max %2 %3 %4 %5",
      args0: [{
        type: "field_number",
        name: "min"
      }, {
        type: "field_number",
        name: "max",
        value: 100
      }, {
        type: DataColumnChooserField/* default.KEY */.Z.KEY,
        name: "field",
        dataType: "number"
      }, {
        type: "input_dummy"
      }, {
        type: GaugeWidgetField/* default.KEY */.Z.KEY,
        name: "widget"
      }],
      previousStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      nextStatement: toolbox/* DATA_SCIENCE_STATEMENT_TYPE */.zN,
      colour: widgetdsl_colour,
      template: "meta",
      inputsInline: false,
      transformData: toolbox/* identityTransformData */.FW
    }];
  },
  createCategory: function createCategory() {
    return [{
      kind: "category",
      name: "Widgets",
      contents: [{
        kind: "block",
        type: DASHBOARD_GAUGE_BLOCK
      }],
      colour: widgetdsl_colour
    }];
  }
};
/* harmony default export */ var widgetdsl = (widgetDSL);
;// CONCATENATED MODULE: ./src/components/vm/vmdsls.ts













var vmDsls = [servicesdsl, serverservicesdsl, loopsdsl, logicdsl, mathdsl, jsondsl, variablesdsl/* default */.Z, toolsdsl, widgetdsl, datadsl/* default */.Z, chartdsl/* default */.Z, shadowdsl/* default */.Z, fieldsdsl/* default */.Z];
/* harmony default export */ var vmdsls = (vmDsls);
// EXTERNAL MODULE: ./src/components/fs/FileTabs.tsx + 3 modules
var FileTabs = __webpack_require__(45430);
// EXTERNAL MODULE: ./src/components/FileSystemContext.tsx + 2 modules
var FileSystemContext = __webpack_require__(3365);
// EXTERNAL MODULE: ./src/components/blockly/WorkspaceContext.tsx
var WorkspaceContext = __webpack_require__(89801);
;// CONCATENATED MODULE: ./src/components/vm/VMEditor.tsx


















var VM_EDITOR_ID = "vm";
var VM_SOURCE_STORAGE_KEY = "tools:vmeditor";
var VM_NEW_FILE_CONTENT = JSON.stringify({
  editor: VM_EDITOR_ID,
  xml: ""
});

function VMEditorWithContext() {
  var _useContext = (0,react.useContext)(BlockContext/* default */.C),
      dsls = _useContext.dsls,
      workspace = _useContext.workspace,
      workspaceJSON = _useContext.workspaceJSON,
      roleManager = _useContext.roleManager,
      setWarnings = _useContext.setWarnings,
      dragging = _useContext.dragging;

  var _useContext2 = (0,react.useContext)(FileSystemContext/* default */.Z),
      fileSystem = _useContext2.fileSystem;

  var _useState = (0,react.useState)(),
      program = _useState[0],
      setProgram = _useState[1];

  var autoStart = true;

  var _useVMRunner = useVMRunner(roleManager, program, autoStart),
      runner = _useVMRunner.runner,
      run = _useVMRunner.run,
      cancel = _useVMRunner.cancel; // don't run the VM while dragging as it glitches the Ui


  (0,react.useEffect)(function () {
    if ((runner === null || runner === void 0 ? void 0 : runner.status) === VMStatus.Running) cancel();
  }, [runner, dragging]);
  (0,react.useEffect)(function () {
    try {
      var newProgram = (0,VMgenerator/* default */.ZP)(workspaceJSON, dsls);
      if (JSON.stringify(newProgram) !== JSON.stringify(program)) setProgram(newProgram);
    } catch (e) {
      console.error(e);
      setProgram(undefined);
    }
  }, [dsls, workspaceJSON]);
  (0,react.useEffect)(function () {
    return program && (roleManager === null || roleManager === void 0 ? void 0 : roleManager.setRoles([].concat((0,toConsumableArray/* default */.Z)(program.roles), (0,toConsumableArray/* default */.Z)(program.serverRoles.map(function (r) {
      return {
        role: r.role,
        serviceClass: r.serviceClass,
        preferredDeviceId: "TBD"
      };
    })))));
  }, [roleManager, program]);
  (0,react.useEffect)(function () {
    return setWarnings(toolbox/* VM_WARNINGS_CATEGORY */.nY, (0,utils/* arrayConcatMany */.ue)(program === null || program === void 0 ? void 0 : program.handlers.map(function (h) {
      return h.errors;
    })));
  }, [program]);
  (0,react.useEffect)(function () {
    var services = (0,WorkspaceContext/* resolveWorkspaceServices */.O7)(workspace);

    if (services) {
      services.runner = runner;
    }
  }, [workspace, runner]);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    spacing: 1
  }, !!fileSystem && /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(FileTabs/* default */.Z, {
    newFileName: toolbox/* WORKSPACE_FILENAME */.cR,
    newFileContent: VM_NEW_FILE_CONTENT,
    hideFiles: true
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(VMToolbar, {
    runner: runner,
    run: run,
    cancel: cancel
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(BlockEditor/* default */.Z, {
    editorId: VM_EDITOR_ID
  })), flags/* default.diagnostics */.Z.diagnostics && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(VMDiagnostics, {
    program: program
  }), /*#__PURE__*/react.createElement(BlockDiagnostics/* default */.Z, null)));
}

function VMEditor() {
  var dsls = (0,react.useMemo)(function () {
    return vmdsls;
  }, []);
  var handleOnBeforeSaveWorkspaceFile = (0,react.useCallback)(function (file) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var f = file;
    f.vm = (0,VMgenerator/* default */.ZP)(file.json, dsls);
  }, []);
  return /*#__PURE__*/react.createElement(NoSsr/* default */.Z, null, /*#__PURE__*/react.createElement(BlockContext/* BlockProvider */.Z, {
    storageKey: VM_SOURCE_STORAGE_KEY,
    dsls: dsls,
    onBeforeSaveWorkspaceFile: flags/* default.diagnostics */.Z.diagnostics ? handleOnBeforeSaveWorkspaceFile : undefined
  }, /*#__PURE__*/react.createElement(VMEditorWithContext, null)));
}
;// CONCATENATED MODULE: ./src/pages/editors/vm.tsx


function Page() {
  return /*#__PURE__*/react.createElement(VMEditor, null);
}

/***/ })

}]);