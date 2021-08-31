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
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73108);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85413);
/* harmony import */ var _jdom_spec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13173);
/* harmony import */ var _jdom_serviceclient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56763);
/* harmony import */ var _jdom_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71815);
/* harmony import */ var _jdom_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91635);






var VMServiceClient = /*#__PURE__*/function (_JDServiceClient) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(VMServiceClient, _JDServiceClient);

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
      var pkt = this.service.specification.packets.find(pkt => (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_0__/* .isRegister */ .x5)(pkt) && pkt.name === regName);

      if (pkt) {
        var register = this.service.register(pkt.identifier);
        this._registers[regName] = register;
        this.mount(register.subscribe(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHANGE */ .Ver, handler));
      }
    }
  };

  _proto.registerEvent = function registerEvent(eventName, handler) {
    if (!this._events[eventName]) {
      var pkt = this.service.specification.packets.find(pkt => (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_0__/* .isEvent */ .cO)(pkt) && pkt.name === eventName);

      if (pkt) {
        var event = this.service.event(pkt.identifier);
        this._events[eventName] = event;
        this.mount(event.subscribe(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .EVENT */ .Ks0, handler));
      }
    }
  };

  _proto.sendCommandAsync = /*#__PURE__*/function () {
    var _sendCommandAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(function* (commandName, values) {
      var pkt = this.service.specification.packets.find(p => (0,_jdom_spec__WEBPACK_IMPORTED_MODULE_0__/* .isCommand */ .ao)(p) && p.name === commandName);

      if (pkt) {
        yield this.service.sendCmdAsync(pkt.identifier, (0,_jdom_pack__WEBPACK_IMPORTED_MODULE_3__/* .jdpack */ .AV)(pkt.packFormat, values), true);
      }
    });

    function sendCommandAsync(_x, _x2) {
      return _sendCommandAsync.apply(this, arguments);
    }

    return sendCommandAsync;
  }();

  _proto.writeRegisterAsync = /*#__PURE__*/function () {
    var _writeRegisterAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(function* (regName, values) {
      var register = this._registers[regName];
      if (register.code === _jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SystemReg.Value */ .ZJq.Value) yield this.setEnabled();
      yield this.writeRegAsync(this._registers[regName], values);
    });

    function writeRegisterAsync(_x3, _x4) {
      return _writeRegisterAsync.apply(this, arguments);
    }

    return writeRegisterAsync;
  }();

  _proto.writeRegAsync = /*#__PURE__*/function () {
    var _writeRegAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(function* (jdreg, values) {
      var _jdreg$specification;

      yield jdreg === null || jdreg === void 0 ? void 0 : jdreg.sendSetPackedAsync((_jdreg$specification = jdreg.specification) === null || _jdreg$specification === void 0 ? void 0 : _jdreg$specification.packFormat, values, true);
    });

    function writeRegAsync(_x5, _x6) {
      return _writeRegAsync.apply(this, arguments);
    }

    return writeRegAsync;
  }();

  _proto.setEnabled = /*#__PURE__*/function () {
    var _setEnabled = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(function* () {
      var pkt = this.service.specification.packets.find(_jdom_spec__WEBPACK_IMPORTED_MODULE_0__/* .isIntensity */ .tC);

      if (pkt && pkt.fields[0].type === "bool") {
        var jdreg = this.service.register(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .SystemReg.Intensity */ .ZJq.Intensity);
        yield this.writeRegAsync(jdreg, [true]);
      }
    });

    function setEnabled() {
      return _setEnabled.apply(this, arguments);
    }

    return setEnabled;
  }();

  _proto.lookupRegisterAsync = /*#__PURE__*/function () {
    var _lookupRegisterAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(function* (root, fld, reportUpdate) {
      if (reportUpdate === void 0) {
        reportUpdate = false;
      }

      if (root in this._registers) {
        var _register$unpackedVal;

        var register = this._registers[root];

        if (reportUpdate && !this._reportUpdate[root]) {
          this._reportUpdate[root] = true;
          this.mount(register.subscribe(_jdom_constants__WEBPACK_IMPORTED_MODULE_2__/* .REPORT_UPDATE */ .rGZ, () => {}));
        }

        yield register.refresh();
        if (!fld) return (_register$unpackedVal = register.unpackedValue) === null || _register$unpackedVal === void 0 ? void 0 : _register$unpackedVal[0];else {
          var field = register.fields.find(f => f.name === fld);
          return field === null || field === void 0 ? void 0 : field.value;
        }
      } else if (root in this._events) {
        var _this$_events$root$fi;

        var _field = (_this$_events$root$fi = this._events[root].fields) === null || _this$_events$root$fi === void 0 ? void 0 : _this$_events$root$fi.find(f => f.name === fld);

        return _field === null || _field === void 0 ? void 0 : _field.value;
      }

      return undefined;
    });

    function lookupRegisterAsync(_x7, _x8, _x9) {
      return _lookupRegisterAsync.apply(this, arguments);
    }

    return lookupRegisterAsync;
  }();

  return VMServiceClient;
}(_jdom_serviceclient__WEBPACK_IMPORTED_MODULE_1__/* .JDServiceClient */ .P);

/***/ }),

/***/ 18108:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ unparse; },
/* harmony export */   "W": function() { return /* binding */ VMExprEvaluator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73108);

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
    var _evalAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(function* (e, reportUpdate) {
      if (reportUpdate === void 0) {
        reportUpdate = false;
      }

      this.exprStack = [];
      this.reportUpdate = reportUpdate;
      yield this.visitExpressionAsync(e);
      return this.exprStack.pop();
    });

    function evalAsync(_x, _x2) {
      return _evalAsync.apply(this, arguments);
    }

    return evalAsync;
  }();

  _proto.visitExpressionAsync = /*#__PURE__*/function () {
    var _visitExpressionAsync = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(function* (e) {
      switch (e.type) {
        case "ArrayExpression":
          {
            // nothing to do here yet (only used for event function)
            break;
          }

        case "CallExpression":
          {
            if (this.callEval) {
              var ret = this.callEval(e, this);
              this.exprStack.push(ret);
            } else this.exprStack.push(undefined);

            break;
          }

        case "BinaryExpression":
          {
            var be = e;
            yield this.visitExpressionAsync(be.left);
            yield this.visitExpressionAsync(be.right);
            var right = this.exprStack.pop();
            var left = this.exprStack.pop();

            switch (be.operator) {
              case "+":
                this.exprStack.push(left + right);
                return;

              case "-":
                this.exprStack.push(left - right);
                return;

              case "/":
                this.exprStack.push(left / right);
                return;

              case "*":
                this.exprStack.push(left * right);
                return;

              case "%":
                this.exprStack.push(left % right);
                return;

              case ">>":
                this.exprStack.push(left >> right);
                return;

              case ">>>":
                this.exprStack.push(left >>> right);
                return;

              case "<<":
                this.exprStack.push(left << right);
                return;

              case "|":
                this.exprStack.push(left | right);
                return;

              case "&":
                this.exprStack.push(left & right);
                return;

              case "^":
                this.exprStack.push(left ^ right);
                return;

              case "==":
                this.exprStack.push(left == right);
                return;

              case "!=":
                this.exprStack.push(left != right);
                return;

              case "===":
                this.exprStack.push(left === right);
                return;

              case "!==":
                this.exprStack.push(left !== right);
                return;

              case "<":
                this.exprStack.push(left < right);
                return;

              case ">":
                this.exprStack.push(left > right);
                return;

              case "<=":
                this.exprStack.push(left <= right);
                return;

              case ">=":
                this.exprStack.push(left >= right);
                return;
            }

            break;
          }

        case "UnaryExpression":
          {
            var ue = e;
            yield this.visitExpressionAsync(ue.argument);
            var top = this.exprStack.pop();

            switch (ue.operator) {
              case "ABS":
                this.exprStack.push(Math.abs(top));
                return;

              case "!":
                this.exprStack.push(!top);
                return;

              case "~":
                this.exprStack.push(~top);
                return;

              case "-":
                this.exprStack.push(-top);
                return;

              case "+":
                this.exprStack.push(+top);
                return;
            }

            break;
          }

        case "LogicalExpression":
          {
            var le = e;
            yield this.visitExpressionAsync(le.left);

            switch (le.operator) {
              case "||":
                if (this.tos()) return;else yield this.visitExpressionAsync(le.right);
                return;

              case "&&":
                if (!this.tos()) return;else yield this.visitExpressionAsync(le.right);
                return;

              default:
            }

            break;
          }

        case "MemberExpression":
          {
            // for now, we don't support evaluation of obj or prop
            // of obj.prop
            var val = yield this.env(e, this.reportUpdate); //if (val === undefined) {
            //    throw new VMError(VMCode.InternalError, `lookup of ${unparse(e)} failed`)
            //}

            this.exprStack.push(val);
            return;
          }

        case "Identifier":
          {
            var id = e;

            var _val = yield this.env(id.name, this.reportUpdate); // if (val === undefined)
            //    throw new VMError(VMCode.InternalError, `lookup of ${id.name} failed`)


            this.exprStack.push(_val);
            return;
          }

        case "Literal":
          {
            var lit = e;
            this.exprStack.push(lit.value);
            return;
          }

        default:
      }
    });

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
    var _sendGetAsync = (0,asyncToGenerator/* default */.Z)(function* () {
      this.serviceServer.raiseGetRegisterEvent(this.reg.name);
    });

    function sendGetAsync() {
      return _sendGetAsync.apply(this, arguments);
    }

    return sendGetAsync;
  }();

  _proto.theRealSendGetAsync = /*#__PURE__*/function () {
    var _theRealSendGetAsync = (0,asyncToGenerator/* default */.Z)(function* () {
      yield _JDRegisterServer.prototype.sendGetAsync.call(this);
    });

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
    spec.packets.filter(jdom_spec/* isHighLevelRegister */.vr).map(reg => {
      var _reg$fields;

      var regServer = _this2.addExistingRegister(new VMRegisterServer((0,assertThisInitialized/* default */.Z)(_this2), reg));

      _this2.regNameToId[reg.name] = reg.identifier;
      (_reg$fields = reg.fields) === null || _reg$fields === void 0 ? void 0 : _reg$fields.forEach((pkt, index) => {
        _this2.regFieldToId[reg.name + ":" + pkt.name] = index;
      });
      regServer.subscribe(constants/* CHANGE */.Ver, () => {
        _this2.emit(VM_EXTERNAL_REQUEST, {
          kind: "set",
          role: _this2.role,
          tgt: reg.name
        });
      });
    });
    spec.packets.filter(jdom_spec/* isCommand */.ao).map(cmd => {
      var _cmd$fields;

      _this2.addCommand(cmd.identifier, pkt => {
        _this2.commandPackets[cmd.identifier] = pkt.decoded;

        _this2.emit(VM_EXTERNAL_REQUEST, {
          kind: "cmd",
          role: _this2.role,
          tgt: cmd.name
        });
      });

      (_cmd$fields = cmd.fields) === null || _cmd$fields === void 0 ? void 0 : _cmd$fields.forEach((pkt, index) => {
        _this2.regFieldToId[cmd.name + ":" + pkt.name] = index;
      });
    });
    spec.packets.filter(jdom_spec/* isHighLevelEvent */.jl).forEach(pkt => {
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
    var _respondToGetRegisterEvent = (0,asyncToGenerator/* default */.Z)(function* (regName) {
      var reg = this.register(this.regNameToId[regName]);
      yield reg.theRealSendGetAsync();
    });

    function respondToGetRegisterEvent(_x) {
      return _respondToGetRegisterEvent.apply(this, arguments);
    }

    return respondToGetRegisterEvent;
  }();

  _proto2.sendEventNameAsync = /*#__PURE__*/function () {
    var _sendEventNameAsync = (0,asyncToGenerator/* default */.Z)(function* (eventName, values) {
      var pkt = this.spec.packets.find(p => (0,jdom_spec/* isHighLevelEvent */.jl)(p) && p.name === eventName);

      if (pkt) {
        yield this.sendEvent(this.eventNameToId[eventName], (0,pack/* jdpack */.AV)(pkt.packFormat, values));
      }
    });

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
    this.serverRoles.forEach(p => {
      // get the service
      var service = (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(p.serviceClass);

      if (service) {
        // spin up JDServiceServer
        var serviceServer = new VMServiceServer(p.role, service);
        this._serverEnvs[p.role] = serviceServer;
        serviceServer.subscribe(VM_EXTERNAL_REQUEST, p => {
          this._currentRequest = p;
          this.emit(EXTERNAL_REQUEST, p);
        });
      }
    });
  };

  _proto.globals = function globals() {
    return this._globals;
  };

  _proto.servers = function servers() {
    return Object.keys(this._serverEnvs).map(k => {
      return {
        role: k,
        serviceClass: this._serverEnvs[k].serviceClass,
        server: this._serverEnvs[k]
      };
    });
  };

  _proto.serviceChanged = function serviceChanged(role, service) {
    if (this._clientEnvs[role]) {
      this._clientEnvs[role].unmount();

      this._clientEnvs[role] = undefined;
    }

    if (!service) this._rolesUnbound.push(role);else {
      this._rolesBound.push(role);

      this._clientEnvs[role] = new client/* VMServiceClient */.z(service);
      this.registers.forEach(r => {
        if (r.role === role) {
          this.registerRegister(role, r.register);
        }
      });
      this.events.forEach(e => {
        if (e.role === role) {
          this.registerEvent(role, e.event);
        }
      });
    }
  };

  _proto.roleBound = function roleBound(role) {
    return !!this._clientEnvs[role];
  };

  _proto.registerRegister = function registerRegister(role, reg) {
    var serviceEnv = this.getService(role);
    serviceEnv.registerRegister(reg, () => {
      this.emit(REGISTER_CHANGE, reg);
    });
  };

  _proto.registerEvent = function registerEvent(role, tgt) {
    var serviceEnv = this.getService(role);
    serviceEnv.registerEvent(tgt, () => {
      this._currentRequest = {
        kind: "event",
        role,
        tgt
      };
      this.emit(EXTERNAL_REQUEST, this._currentRequest);
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
    var _sendCommandAsync = (0,asyncToGenerator/* default */.Z)(function* (e, values) {
      var serviceEnv = this.getService(e);

      if (serviceEnv) {
        yield serviceEnv === null || serviceEnv === void 0 ? void 0 : serviceEnv.sendCommandAsync(e.property.name, values);
      } else {
        var server = this.getServer(e);
        yield server === null || server === void 0 ? void 0 : server.sendEventNameAsync(e.property.name, values);
      }
    });

    function sendCommandAsync(_x, _x2) {
      return _sendCommandAsync.apply(this, arguments);
    }

    return sendCommandAsync;
  }();

  _proto.lookupAsync = /*#__PURE__*/function () {
    var _lookupAsync = (0,asyncToGenerator/* default */.Z)(function* (e, reportUpdate) {
      if (reportUpdate === void 0) {
        reportUpdate = false;
      }

      var roleName = this.getRootName(e);

      if (roleName.startsWith("$var")) {
        var me = e;

        if (me.property.type === "Identifier") {
          var _this$_globals$local;

          var local = me.property.name;
          return (_this$_globals$local = this._globals[local]) === null || _this$_globals$local === void 0 ? void 0 : _this$_globals$local.value;
        }

        return undefined;
      }

      var ep = e.property;
      var root = typeof ep === "string" ? ep : ep.type === "Identifier" ? ep.name : ep.object.name;
      var fld = typeof ep === "string" ? undefined : ep.type === "Identifier" ? undefined : ep.property.name;
      var serviceEnv = this.getService(e);

      if (serviceEnv) {
        return yield serviceEnv.lookupRegisterAsync(root, fld, reportUpdate);
      } else {
        var server = this.getServer(e);
        return server.lookupRegister(root, fld);
      }
    });

    function lookupAsync(_x3, _x4) {
      return _lookupAsync.apply(this, arguments);
    }

    return lookupAsync;
  }();

  _proto.writeRegisterAsync = /*#__PURE__*/function () {
    var _writeRegisterAsync = (0,asyncToGenerator/* default */.Z)(function* (e, values) {
      var serviceEnv = this.getService(e);
      var me = e;

      if (me.property.type === "Identifier") {
        var reg = me.property.name;
        if (serviceEnv) yield serviceEnv.writeRegisterAsync(reg, values);else {
          var server = this.getServer(e);
          return server.writeRegister(reg, values);
        }
      }
    });

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
          value
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
    var _completeRequest = (0,asyncToGenerator/* default */.Z)(function* (request) {
      (0,utils/* assert */.hu)(request.kind === "get");
      var server = this.getServer(request.role);
      yield server.respondToGetRegisterEvent(request.tgt);
    });

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
      return !!this._rolesBound.find(r => role === "any" || r === role);
    } else {
      return !!this._rolesUnbound.find(r => role === "any" || r === role);
    }
  };

  _proto.unsubscribe = function unsubscribe() {
    for (var vs of Object.values(this._clientEnvs)) {
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
    return new Promise((resolve, reject) => {
      this.promises.push(() => f().then(v => {
        this.shift();
        resolve(v);
      }, e => {
        this.shift();
        reject(e);
      }));
      if (this.promises.length == 1) this.promises[0]();
    });
  };

  return Mutex;
}();
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/client.ts
var jdom_client = __webpack_require__(47235);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceprovider.ts + 1 modules
var serviceprovider = __webpack_require__(73138);
;// CONCATENATED MODULE: ./jacdac-ts/src/vm/runner.ts







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
    return (caller, ee) => {
      var callee = caller.callee;
      var namespace = callee.object.name;
      var funName = callee.property.name;
      var args = caller.arguments;

      if (namespace === "$fun") {
        switch (funName) {
          case "roleBoundExpression":
            {
              var _role = args[0].name;
              return this.env.roleBound(_role);
            }

          default: // ERROR

        }

        throw new VMException(VMExceptionCode.InternalError, "unknown function " + namespace + "." + funName);
      } else throw new VMException(VMExceptionCode.InternalError, "unknown namespace " + namespace);
    };
  };

  _proto.newEval = function newEval() {
    var _this4 = this;

    return new vm_expr/* VMExprEvaluator */.W( /*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.Z)(function* (e, reportUpdate) {
        return yield _this4.env.lookupAsync(e, reportUpdate);
      });

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(), this.callEval());
  };

  _proto.evalExpressionAsync = /*#__PURE__*/function () {
    var _evalExpressionAsync = (0,asyncToGenerator/* default */.Z)(function* (e, reportUpdate) {
      if (reportUpdate === void 0) {
        reportUpdate = false;
      }

      var expr = this.newEval();
      return yield expr.evalAsync(e, reportUpdate);
    });

    function evalExpressionAsync(_x3, _x4) {
      return _evalExpressionAsync.apply(this, arguments);
    }

    return evalExpressionAsync;
  }();

  _proto.checkExpressionAsync = /*#__PURE__*/function () {
    var _checkExpressionAsync = (0,asyncToGenerator/* default */.Z)(function* (e, reportUpdate) {
      if (reportUpdate === void 0) {
        reportUpdate = false;
      }

      return (yield this.evalExpressionAsync(e, reportUpdate)) ? true : false;
    });

    function checkExpressionAsync(_x5, _x6) {
      return _checkExpressionAsync.apply(this, arguments);
    }

    return checkExpressionAsync;
  }();

  _proto.startAsync = /*#__PURE__*/function () {
    var _startAsync = (0,asyncToGenerator/* default */.Z)(function* () {
      if (this.cmd.command.callee.type !== "MemberExpression" && (this.inst === "awaitRegister" || this.inst === "awaitChange")) {
        // need to capture register value for awaitChange/awaitRegister
        var args = this.cmd.command.arguments;
        this._regSaved = yield this.evalExpressionAsync(args[0], true);
        if (this.inst === "awaitChange") this._changeSaved = yield this.evalExpressionAsync(args[1]);
        return true;
      }

      return false;
    });

    function startAsync() {
      return _startAsync.apply(this, arguments);
    }

    return startAsync;
  }();

  _proto.evaluate = /*#__PURE__*/function () {
    var _evaluate = (0,asyncToGenerator/* default */.Z)(function* () {
      if (!this._started) {
        var neededStart = yield this.startAsync();
        this._started = true;
        if (neededStart) return VMInternalStatus.Running;
      }

      var args = this.cmd.command.arguments;

      if (this.cmd.command.callee.type === "MemberExpression") {
        // interpret as a service command (role.comand)
        var expr = this.newEval();
        var _values = [];

        for (var a of this.cmd.command.arguments) {
          _values.push(yield expr.evalAsync(a));
        }

        yield this.env.sendCommandAsync(this.cmd.command.callee, _values);
        return VMInternalStatus.Completed;
      }

      switch (this.inst) {
        case "branchOnCondition":
          {
            var _expr = yield this.checkExpressionAsync(args[0]);

            if (_expr) {
              throw new VMJumpException(args[1].name);
            }

            return VMInternalStatus.Completed;
          }

        case "jump":
          {
            throw new VMJumpException(args[0].name);
          }

        case "label":
          {
            return VMInternalStatus.Completed;
          }

        case "awaitEvent":
          {
            var event = args[0];

            var _request = this.env.hasRequest(event);

            if (_request) {
              if (yield this.checkExpressionAsync(args[1])) {
                throw new VMRequestException(_request);
              }
            }

            return VMInternalStatus.Running;
          }

        case "roleBound":
          {
            var _role2 = args[0].name;
            var _event = args[1].name;
            return this.env.roleTransition(_role2, _event) ? VMInternalStatus.Completed : VMInternalStatus.Running;
          }

        case "awaitCondition":
          {
            return (yield this.checkExpressionAsync(args[0])) ? VMInternalStatus.Completed : VMInternalStatus.Running;
          }

        case "awaitChange":
        case "awaitRegister":
          {
            var regValue = yield this.evalExpressionAsync(args[0]);

            if (this.inst === "awaitRegister" && regValue !== this._regSaved || this.inst === "awaitChange" && Math.abs(regValue - this._regSaved) >= Math.abs(this._changeSaved)) {
              return VMInternalStatus.Completed;
            }

            return VMInternalStatus.Running;
          }

        case "writeRegister":
        case "writeLocal":
          {
            var _expr2 = this.newEval();

            var _values2 = [];

            for (var _a of this.cmd.command.arguments.slice(1)) {
              _values2.push(yield _expr2.evalAsync(_a));
            }

            this.trace("eval-end", {
              expr: (0,vm_expr/* unparse */.Z)(args[1])
            });
            var reg = args[0];

            if (this.inst === "writeRegister") {
              yield this.env.writeRegisterAsync(reg, _values2);
              this.trace("write-after-wait", {
                reg: (0,vm_expr/* unparse */.Z)(reg),
                expr: _values2[0]
              });
            } else this.env.writeGlobal(reg, _values2[0]);

            return VMInternalStatus.Completed;
          }

        case "watch":
          {
            var _this$cmd;

            var _expr3 = this.newEval();

            var ev = yield _expr3.evalAsync(args[0]);
            this.parent.watch((_this$cmd = this.cmd) === null || _this$cmd === void 0 ? void 0 : _this$cmd.sourceId, ev);
            return VMInternalStatus.Completed;
          }

        case "log":
          {
            var _this$cmd2;

            var _expr4 = this.newEval();

            var _ev = yield _expr4.evalAsync(args[0]);

            var evString = _ev + "";
            this.parent.writeLog((_this$cmd2 = this.cmd) === null || _this$cmd2 === void 0 ? void 0 : _this$cmd2.sourceId, evString);
            return VMInternalStatus.Completed;
          }

        case "halt":
          {
            return VMInternalStatus.Stopped;
          }

        case "nop":
          {
            return VMInternalStatus.Completed;
          }

        case "wait":
          {
            var _expr5 = this.newEval();

            var _ev2 = yield _expr5.evalAsync(args[0]);

            throw new VMTimerException(_ev2 * 1000);
          }

        default:
          throw new VMException(VMExceptionCode.InternalError, "Unknown instruction " + this.inst);
      }
    });

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
    var _stepAsync = (0,asyncToGenerator/* default */.Z)(function* () {
      if (this.status === VMInternalStatus.Running) {
        this.trace((0,vm_expr/* unparse */.Z)(this.cmd.command));
        this.status = yield this._eval.evaluate();
      }
    });

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
    var _this5;

    _this5 = _JDEventSource.call(this) || this; // find the label commands (targets of jumps)

    _this5._commandIndex = undefined;
    _this5._currentCommand = undefined;
    _this5.stopped = false;
    _this5._labelToIndex = {};
    _this5.parent = parent;
    _this5.id = id;
    _this5.env = env;
    _this5.handler = handler;

    _this5.handler.commands.forEach((c, index) => {
      var _cmd$command;

      var cmd = c;
      var id = (_cmd$command = cmd.command) === null || _cmd$command === void 0 ? void 0 : _cmd$command.callee;

      if ((id === null || id === void 0 ? void 0 : id.name) === "label") {
        var _label = cmd.command.arguments[0];
        _this5._labelToIndex[_label.name] = index;
      }
    });

    _this5.reset();

    return _this5;
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
    var _runToCompletionAsync = (0,asyncToGenerator/* default */.Z)(function* (singleStep) {
      if (singleStep === void 0) {
        singleStep = false;
      }

      if (this.stopped || !this.handler.commands.length) return undefined;

      if (this.commandIndex === undefined) {
        this.commandIndex = 0;
      }

      if ((yield this.singleStepCheckBreakAsync(singleStep)) && !singleStep) return this._currentCommand;

      while (this.next()) {
        if (singleStep || (yield this.singleStepCheckBreakAsync())) return this._currentCommand;
      }

      return undefined;
    });

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
    var _singleStepCheckBreakAsync = (0,asyncToGenerator/* default */.Z)(function* (singleStep) {
      var _this$_currentCommand;

      if (singleStep === void 0) {
        singleStep = false;
      }

      this.trace("step begin");
      var sid = (_this$_currentCommand = this._currentCommand.cmd) === null || _this$_currentCommand === void 0 ? void 0 : _this$_currentCommand.sourceId;

      if (!singleStep && (yield this.parent.breakpointOnAsync(sid))) {
        return true;
      }

      yield this.singleStepAsync();
      this.trace("step end");
      return false;
    });

    function singleStepCheckBreakAsync(_x8) {
      return _singleStepCheckBreakAsync.apply(this, arguments);
    }

    return singleStepCheckBreakAsync;
  }();

  _proto3.singleStepAsync = /*#__PURE__*/function () {
    var _singleStepAsync = (0,asyncToGenerator/* default */.Z)(function* () {
      try {
        yield this._currentCommand.stepAsync();
      } catch (e) {
        if (e instanceof VMJumpException) {
          var {
            label: _label2
          } = e;
          var index = this._labelToIndex[_label2];
          this.commandIndex = index;
          this._currentCommand.status = VMInternalStatus.Completed;
        } else if (e instanceof VMTimerException) {
          var {
            ms: _ms
          } = e;
          this._currentCommand.status = VMInternalStatus.Sleeping;
          yield this.parent.sleepAsync(this, _ms);
        } else if (e instanceof VMRequestException) {
          var {
            request: _request2
          } = e;
          this._currentCommand.status = VMInternalStatus.Completed;
          this.parent.handlerWokeOnRequest(this, _request2);
        } else {
          this.emit(vm_events/* VM_COMMAND_FAILED */.ai, this._currentCommand.cmd.sourceId);
          throw e;
        }
      }

      if (this._currentCommand.status === VMInternalStatus.Stopped) this.stopped = true;
    });

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
    var _this6;

    _this6 = _JDClient.call(this) || this;
    _this6._handlerRunners = [];
    _this6._roles = [];
    _this6._serverRoles = [];
    _this6._waitQueue = [];
    _this6._everyQueue = [];
    _this6._runQueue = [];
    _this6._sleepQueue = [];
    _this6._watch = {};
    _this6._log = [];
    _this6._breaks = {};
    _this6._onCompletionOfExternalRequest = [];
    _this6._in_run = false;
    _this6.roleManager = roleManager;
    _this6.program = program;
    var compiled = (0,compile/* compileProgram */.IJ)(program);
    var {
      registers,
      events,
      errors
    } = (0,compile/* checkProgram */.i_)(compiled);
    _this6._roles = compiled.roles;
    _this6._serverRoles = compiled.serverRoles;
    if (errors !== null && errors !== void 0 && errors.length) console.debug("ERRORS", errors); // data structures for running program

    _this6._status = VMStatus.Stopped;
    _this6._env = new VMEnvironment(registers, events, compiled.serverRoles);
    _this6._handlerRunners = compiled.handlers.map((h, index) => new VMHandlerRunner((0,assertThisInitialized/* default */.Z)(_this6), index, _this6._env, h)); // TODO: can't add multiple handlers until we have deduplicate CHANGE on Event

    /*
    const len = this._handlerRunners.length
    compiled.handlers.forEach((h, index) =>
        this._handlerRunners.push(
            new VMHandlerRunner(this, len + index, this._env, h)
        )
    )*/

    _this6._waitRunMutex = new Mutex();
    _this6._breaksMutex = new Mutex();
    _this6._sleepMutex = new Mutex(); // TODO: only try to wake handlers that are waiting on change to reg or event

    _this6.mount(_this6._env.subscribe(REGISTER_CHANGE, reg => {
      _this6.waitingToRunning();
    }));

    _this6.mount(_this6.roleManager.bus.subscribe(constants/* SERVICE_PROVIDER_REMOVED */.$dk, provider => {
      if (provider === _this6._provider) {
        _this6._provider = undefined;
      }
    })); // control requests (client:{event}, server:{set, get, cmd})


    _this6.mount(_this6._env.subscribe(EXTERNAL_REQUEST, request => {
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

      _this6.waitingToRunning();
    }));

    _this6.mount(_this6._env.subscribe(GLOBAL_CHANGE, name => {
      _this6.emit(vm_events/* VM_GLOBAL_CHANGE */.b4, name);

      _this6.waitingToRunning();
    }));

    _this6.mount(_this6.subscribe(VM_WAKE_SLEEPER, /*#__PURE__*/function () {
      var _ref2 = (0,asyncToGenerator/* default */.Z)(function* (h) {
        yield _this6.wakeSleeper(h);
      });

      return function (_x9) {
        return _ref2.apply(this, arguments);
      };
    }()));

    _this6.initializeRoleManagement();

    return _this6;
  }

  var _proto4 = VMProgramRunner.prototype;

  _proto4.handlerWokeOnRequest = function handlerWokeOnRequest(handler, request) {
    if (request.kind === "get") {
      this._onCompletionOfExternalRequest.push({
        handler,
        request
      });
    }
  } // control of VM
  ;

  _proto4.globals = function globals() {
    var g = this._env.globals();

    return Object.keys(g).map(k => {
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
      message,
      context
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
    var _setBreakpointsAsync = (0,asyncToGenerator/* default */.Z)(function* (breaks) {
      var _this7 = this;

      yield this._breaksMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
        _this7._breaks = {};
        breaks.forEach(b => {
          _this7._breaks[b] = true;
        });
      }));
    });

    function setBreakpointsAsync(_x10) {
      return _setBreakpointsAsync.apply(this, arguments);
    }

    return setBreakpointsAsync;
  }();

  _proto4.clearBreakpointsAsync = /*#__PURE__*/function () {
    var _clearBreakpointsAsync = (0,asyncToGenerator/* default */.Z)(function* () {
      var _this8 = this;

      yield this._breaksMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
        _this8._breaks = {};
      }));
    });

    function clearBreakpointsAsync() {
      return _clearBreakpointsAsync.apply(this, arguments);
    }

    return clearBreakpointsAsync;
  }();

  _proto4.breakpointOnAsync = /*#__PURE__*/function () {
    var _breakpointOnAsync = (0,asyncToGenerator/* default */.Z)(function* (id) {
      var _this9 = this;

      var ret = false;
      yield this._breaksMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
        var _this9$_breaks;

        ret = !!((_this9$_breaks = _this9._breaks) !== null && _this9$_breaks !== void 0 && _this9$_breaks[id]);
      }));
      return ret;
    });

    function breakpointOnAsync(_x11) {
      return _breakpointOnAsync.apply(this, arguments);
    }

    return breakpointOnAsync;
  }() // utility called by handlerRunner
  ;

  _proto4.sleepAsync =
  /*#__PURE__*/
  function () {
    var _sleepAsync = (0,asyncToGenerator/* default */.Z)(function* (h, ms, handler) {
      var _this10 = this;

      if (handler === void 0) {
        handler = undefined;
      }

      (0,utils/* assert */.hu)(h.status === VMInternalStatus.Sleeping);
      yield this._sleepMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
        var id = setTimeout(() => {
          _this10.emit(VM_WAKE_SLEEPER, h ? h : handler);
        }, ms);

        _this10._sleepQueue.push({
          ms,
          handlerRunner: h,
          id,
          handler
        });
      }));
    });

    function sleepAsync(_x12, _x13, _x14) {
      return _sleepAsync.apply(this, arguments);
    }

    return sleepAsync;
  }();

  _proto4.startAsync = /*#__PURE__*/function () {
    var _startAsync2 = (0,asyncToGenerator/* default */.Z)(function* () {
      var _this11 = this;

      if (this.status !== VMStatus.Stopped) return; // already running

      this.trace("start");

      try {
        yield this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
          yield _this11.device();
          _this11._waitQueue = _this11._handlerRunners.slice(0);

          _this11._waitQueue.forEach(h => h.reset());

          _this11._runQueue = [];
          _this11._everyQueue = [];
          _this11._onCompletionOfExternalRequest = [];

          _this11._env.clearExternalStimulii();

          _this11._env.initRoles();

          _this11.stopSleepers(); // make sure to have another handler for every

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

        }));
        yield this.clearBreakpointsAsync();
        this.setStatus(VMStatus.Running);
        yield this.waitingToRunning();
      } catch (e) {
        console.debug(e);
        this.emit(vm_events/* VM_INTERNAL_ERROR */.c2, e);
      }
    });

    function startAsync() {
      return _startAsync2.apply(this, arguments);
    }

    return startAsync;
  }();

  _proto4.device = /*#__PURE__*/function () {
    var _device = (0,asyncToGenerator/* default */.Z)(function* () {
      if (!this._provider) {
        yield this.startProvider();
      }

      return this._device;
    });

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
    var _resumeAsync = (0,asyncToGenerator/* default */.Z)(function* () {
      if (this.status !== VMStatus.Paused) return;
      this.trace("resume");
      this.setStatus(VMStatus.Running);
      yield this.runAsync();
    });

    function resumeAsync() {
      return _resumeAsync.apply(this, arguments);
    }

    return resumeAsync;
  }();

  _proto4.getCurrentRunner = /*#__PURE__*/function () {
    var _getCurrentRunner = (0,asyncToGenerator/* default */.Z)(function* () {
      var _this12 = this;

      return yield this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
        if (_this12._runQueue.length) return _this12._runQueue[0];
        return undefined;
      }));
    });

    function getCurrentRunner() {
      return _getCurrentRunner.apply(this, arguments);
    }

    return getCurrentRunner;
  }();

  _proto4.stepAsync = /*#__PURE__*/function () {
    var _stepAsync2 = (0,asyncToGenerator/* default */.Z)(function* () {
      if (this.status !== VMStatus.Paused) return;
      this.trace("step");
      var h = yield this.getCurrentRunner();

      if (h) {
        yield this.runHandlerAsync(h, true);
        yield this.postProcessHandler(h);
        var newHead = yield this.getCurrentRunner();

        if (newHead && newHead !== h) {
          this.emitBreakpoint(newHead);
        }
      }
    });

    function stepAsync() {
      return _stepAsync2.apply(this, arguments);
    }

    return stepAsync;
  }();

  _proto4.runAsync = /*#__PURE__*/function () {
    var _runAsync = (0,asyncToGenerator/* default */.Z)(function* () {
      if (this.status === VMStatus.Stopped) return;
      if (this._in_run) return;
      this.trace("run");
      this._in_run = true;

      try {
        var h = undefined;

        while (this.status === VMStatus.Running && (h = yield this.getCurrentRunner())) {
          (0,utils/* assert */.hu)(!h.atTop);
          yield this.runHandlerAsync(h);
          yield this.postProcessHandler(h);
        }
      } catch (e) {
        console.debug(e);
        this.emit(vm_events/* VM_INTERNAL_ERROR */.c2, e);
      }

      this._in_run = false;
      this.trace("run end");
    });

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
    var _runHandlerAsync = (0,asyncToGenerator/* default */.Z)(function* (h, oneStep) {
      if (oneStep === void 0) {
        oneStep = false;
      }

      try {
        var brkCommand = yield h.runToCompletionAsync(oneStep);

        if (brkCommand && !oneStep || this.status === VMStatus.Paused) {
          this.setStatus(VMStatus.Paused);
          this.emitBreakpoint(h);
        }

        if (h.status === VMInternalStatus.Completed) {
          h.reset();
        }
      } catch (e) {
        if (e instanceof VMException) {
          var ex = e;
          if (ex.code === VMExceptionCode.RoleNoService) this.emit(vm_events/* VM_ROLE_MISSING */.XD, e.data);
        } else {
          console.debug(e);
          this.emit(vm_events/* VM_INTERNAL_ERROR */.c2, e);
        } // on handler error, reset the handler


        h.reset();
      }
    });

    function runHandlerAsync(_x15, _x16) {
      return _runHandlerAsync.apply(this, arguments);
    }

    return runHandlerAsync;
  }();

  _proto4.postProcessHandler = /*#__PURE__*/function () {
    var _postProcessHandler = (0,asyncToGenerator/* default */.Z)(function* (h) {
      var _this13 = this;

      if (h.status === VMInternalStatus.Ready || h.status === VMInternalStatus.Sleeping || h.status === VMInternalStatus.Stopped) {
        var done = undefined;
        yield this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
          (0,utils/* assert */.hu)(!!_this13._runQueue.length);
          (0,utils/* assert */.hu)(h === _this13._runQueue[0]);
          done = _this13._runQueue.shift();
          var moveToWait = h.status === VMInternalStatus.Ready;

          if (moveToWait && !isEveryHandler(h.handler)) {
            _this13._waitQueue.push(done);

            done = undefined;
          }
        }));

        if (done && h.status === VMInternalStatus.Ready && isEveryHandler(h.handler) || isRegisterChangeHandler(h.handler)) {
          if (this.status === VMStatus.Running) yield this.runHandlerAsync(h);else if (this.status === VMStatus.Paused) {
            yield this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
              _this13._runQueue.unshift(h); // this.emitBreakpoint(h)

            }));
          }
        }
      } else if (h.status === VMInternalStatus.Completed) {
        var q = this._onCompletionOfExternalRequest;
        var index = q.findIndex(p => p.handler === h);

        if (index > -1) {
          var [del] = q.splice(index, 1);
          yield this._env.completeRequest(del.request);
        }
      }
    });

    function postProcessHandler(_x17) {
      return _postProcessHandler.apply(this, arguments);
    }

    return postProcessHandler;
  }() // call this whenever some event/change arises
  ;

  _proto4.waitingToRunning =
  /*#__PURE__*/
  function () {
    var _waitingToRunning = (0,asyncToGenerator/* default */.Z)(function* () {
      var _this14 = this;

      if (this.status !== VMStatus.Stopped) {
        this.trace("waiting to running - try");
        yield this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
          if (_this14.status === VMStatus.Paused && _this14._runQueue.length) return;

          _this14.trace("waiting to running - start");

          var handlersStarted = [];
          var newRunners = [];
          var sleepingRunners = [];

          var _loop = function* _loop(h) {
            yield _this14.runHandlerAsync(h, true);

            if (h.status === VMInternalStatus.Sleeping) {
              sleepingRunners.push(h);
            } else if (!h.atTop && handlersStarted.findIndex(hs => hs === h.handler) === -1) {
              newRunners.push(h);
              handlersStarted.push(h.handler);
            }
          };

          for (var h of _this14._waitQueue) {
            yield* _loop(h);
          }

          newRunners.forEach(h => {
            _this14._runQueue.push(h);

            var index = _this14._waitQueue.indexOf(h);

            if (index >= 0) _this14._waitQueue.splice(index, 1);
          });
          sleepingRunners.forEach(h => {
            var index = _this14._waitQueue.indexOf(h);

            if (index >= 0) _this14._waitQueue.splice(index, 1);
          });
        }));
        yield this.runAsync();

        this._env.clearExternalStimulii();
      }
    });

    function waitingToRunning() {
      return _waitingToRunning.apply(this, arguments);
    }

    return waitingToRunning;
  }();

  _proto4.stopSleepers = /*#__PURE__*/function () {
    var _stopSleepers = (0,asyncToGenerator/* default */.Z)(function* () {
      var _this15 = this;

      yield this._sleepMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
        for (var s of _this15._sleepQueue) {
          clearTimeout(s.id);
        }

        _this15._sleepQueue = [];
      }));
    });

    function stopSleepers() {
      return _stopSleepers.apply(this, arguments);
    }

    return stopSleepers;
  }();

  _proto4.wakeSleeper = /*#__PURE__*/function () {
    var _wakeSleeper = (0,asyncToGenerator/* default */.Z)(function* (h) {
      var _this16 = this;

      try {
        // let handlerMs: number = undefined
        var handlerRunner = undefined; // let handler: VMHandler = undefined

        yield this._sleepMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
          var index = _this16._sleepQueue.findIndex(p => (p === null || p === void 0 ? void 0 : p.handlerRunner) === h // || p?.handler === h
          );

          (0,utils/* assert */.hu)(index >= 0);

          if (index >= 0) {
            var p = _this16._sleepQueue[index]; //  handlerMs = p.ms

            handlerRunner = p.handlerRunner; // handler = p?.handler

            _this16._sleepQueue.splice(index, 1); // clearTimeout(p.id)

          }
        }));
        if (this.status === VMStatus.Stopped) return; // this logic is to deal with starting a handler rather than a runner

        yield this._waitRunMutex.acquire( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)(function* () {
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

            _this16._runQueue.push(handlerRunner);
          }
        }));
        /*
        const theHandler = handlerRunner?.handler || handler
        if (isEveryHandler(theHandler)) {
            // setup next
            this.sleepAsync(undefined, handlerMs, theHandler)
        }*/

        if (handlerRunner) {
          if (this.status === VMStatus.Running) {
            this.trace("wake sleeper run");
            this.runAsync();
          } else if (this.status === VMStatus.Paused) {
            this.emitBreakpoint(yield this.getCurrentRunner());
          }
        }
      } catch (e) {
        console.debug(e);
        this.emit(vm_events/* VM_INTERNAL_ERROR */.c2, e);
      }
    });

    function wakeSleeper(_x18) {
      return _wakeSleeper.apply(this, arguments);
    }

    return wakeSleeper;
  }();

  _proto4.initializeRoleManagement = function initializeRoleManagement() {
    var _this17 = this;

    // adding a (role,service) binding
    var addRoleService = role => {
      var service = this.roleManager.service(role);

      if (service) {
        this._env.serviceChanged(role, service);
      }
    }; // initialize client


    this._roles.forEach(r => {
      addRoleService(r.role);
    });

    this.mount(this.roleManager.subscribe(constants/* ROLE_BOUND */.l9m, /*#__PURE__*/function () {
      var _ref15 = (0,asyncToGenerator/* default */.Z)(function* (role) {
        if (_this17._serverRoles.find(r => r.role === role)) return;
        addRoleService(role);

        _this17.waitingToRunning();
      });

      return function (_x19) {
        return _ref15.apply(this, arguments);
      };
    }()));
    this.mount(this.roleManager.subscribe(constants/* ROLE_UNBOUND */.CCp, role => {
      if (this._serverRoles.find(r => r.role === role)) return;

      this._env.serviceChanged(role, undefined);

      this.waitingToRunning();
    }));
  } // spin up provider
  ;

  _proto4.startProvider =
  /*#__PURE__*/
  function () {
    var _startProvider = (0,asyncToGenerator/* default */.Z)(function* () {
      var servers = this._env.servers();

      if (servers.length) {
        this._provider = new serviceprovider/* default */.Z(servers.map(s => s.server) // if we create a deviceId, then trouble ensues
        // as a second device gets spun up later
        //{
        //    deviceId: "VMServiceProvider",
        //}
        );
        this._device = this.roleManager.bus.addServiceProvider(this._provider);
        servers.forEach((s, index) => {
          this.roleManager.updateRole(this._serverRoles[index].role, s.serviceClass, this._device.deviceId);
        }); // make sure it gets known (HACK)

        for (var s of servers) {
          yield s.server.statusCode.sendGetAsync();
        }
      }
    });

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
  var {
    setError
  } = (0,react.useContext)(AppContext/* default */.ZP);
  var {
    0: runner,
    1: setRunner
  } = (0,react.useState)();
  var {
    0: _autoStart,
    1: _setAutoStart
  } = (0,react.useState)(!!autoRun);

  var run = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      _setAutoStart(!!autoRun);

      yield runner.startAsync();
    });

    return function run() {
      return _ref.apply(this, arguments);
    };
  }();

  var cancel = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* () {
      _setAutoStart(false);

      runner.cancel();
    });

    return function cancel() {
      return _ref2.apply(this, arguments);
    };
  }(); // auto start


  (0,react.useEffect)(() => {
    if (_autoStart && runner) runner.startAsync();
    return () => runner === null || runner === void 0 ? void 0 : runner.cancel();
  }, [runner, _autoStart]); // create runner

  (0,react.useEffect)(() => {
    try {
      var newTestRunner = program && new VMProgramRunner(roleManager, program);
      setRunner(newTestRunner);
      return () => newTestRunner === null || newTestRunner === void 0 ? void 0 : newTestRunner.unmount();
    } catch (e) {
      console.debug(e);
      setRunner(undefined);
    }
  }, [roleManager, program]); // errors

  (0,react.useEffect)(() => runner === null || runner === void 0 ? void 0 : runner.subscribe(constants/* ERROR */.pnR, e => setError(e)), [runner]); // traces

  var handleTrace = value => {
    var {
      message,
      context
    } = value;
    if (flags/* default.diagnostics */.Z.diagnostics) console.debug("vm> " + message, context);
  };

  (0,react.useEffect)(() => runner === null || runner === void 0 ? void 0 : runner.subscribe(constants/* TRACE */.jes, handleTrace), [runner]);
  return {
    runner,
    run,
    cancel
  };
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./src/components/CodeBlock.tsx + 4 modules
var CodeBlock = __webpack_require__(50274);
;// CONCATENATED MODULE: ./src/components/vm/VMDiagnostics.tsx



function VMDiagnostics(props) {
  var {
    program
  } = props;
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
var BlockContext = __webpack_require__(23985);
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./src/components/devices/DeviceAvatar.tsx + 3 modules
var DeviceAvatar = __webpack_require__(4726);
// EXTERNAL MODULE: ./jacdac-ts/src/servers/servers.ts + 27 modules
var servers = __webpack_require__(18771);
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
  var {
    workspace
  } = (0,react.useContext)(BlockContext/* default */.C);
  var {
    role,
    service,
    serviceClass,
    preferredDeviceId
  } = props;
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var serviceServer = (0,useServiceServer/* default */.Z)(service);

  var handleRoleClick = () => {
    // spin off simulator
    if (!service && !preferredDeviceId) {
      var specification = (0,jdom_spec/* serviceSpecificationFromClassIdentifier */.d5)(serviceClass);

      if (specification) {
        (0,servers/* addServiceProvider */.Q6)(bus, (0,servers/* serviceProviderDefinitionFromServiceClass */.vd)(specification.classIdentifier));
      }
    } // add twin block


    if (workspace) {
      // try to find existing twin block
      var twinBlock = workspace.getTopBlocks(false).find(b => {
        var _b$inputList$0$fieldR, _b$inputList$0$fieldR2;

        return b.type === toolbox/* TWIN_BLOCK */.Zt && ((_b$inputList$0$fieldR = b.inputList[0].fieldRow.find(f => f.name === "role")) === null || _b$inputList$0$fieldR === void 0 ? void 0 : (_b$inputList$0$fieldR2 = _b$inputList$0$fieldR.getVariable()) === null || _b$inputList$0$fieldR2 === void 0 ? void 0 : _b$inputList$0$fieldR2.name) === role;
      });

      if (!twinBlock) {
        twinBlock = workspace.newBlock(toolbox/* TWIN_BLOCK */.Zt);
        var variable = workspace.getVariable(role, serviceClass + ":client");
        if (!variable) variable = workspace.getVariable(role, serviceClass + ":server");
        console.log("new twin", {
          twinBlock,
          variable
        });
        var field = twinBlock.inputList[0].fieldRow.find(f => f.name === "role");
        field.setValue(variable.getId());
        var m = workspace.getMetrics();
        twinBlock.moveBy(m.viewWidth / 2, m.viewHeight / 3);
        twinBlock.initSvg();
        twinBlock.render(false);
      }

      workspace.centerOnBlock(twinBlock.id);
    }
  };

  var handleDelete = () => bus.removeServiceProvider(serviceServer.device);

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
  var {
    roleManager
  } = (0,react.useContext)(BlockContext/* default */.C);
  var roles = (0,useChange/* default */.Z)(roleManager, _ => _ === null || _ === void 0 ? void 0 : _.roles());
  return /*#__PURE__*/react.createElement(react.Fragment, null, roles === null || roles === void 0 ? void 0 : roles.map(_ref => {
    var {
      role,
      service,
      serviceClass,
      preferredDeviceId
    } = _ref;
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
  var {
    workspace
  } = (0,react.useContext)(BlockContext/* default */.C);
  var breakpoints = (0,react.useMemo)(() => {
    var _arrayConcatMany, _program$handlers;

    return ((_arrayConcatMany = (0,utils/* arrayConcatMany */.ue)(program === null || program === void 0 ? void 0 : (_program$handlers = program.handlers) === null || _program$handlers === void 0 ? void 0 : _program$handlers.filter(h => !h.meta) // don't debug watch statements
    .map(h => h.commands.map(cmd => cmd.sourceId)))) === null || _arrayConcatMany === void 0 ? void 0 : _arrayConcatMany.filter(id => !!id)) || [];
  }, [program]);

  var setBreakpointHighlight = sourceId => {
    workspace === null || workspace === void 0 ? void 0 : workspace.highlightBlock(sourceId);
  };

  return {
    breakpoints,
    setBreakpointHighlight
  };
}

function VMRunnerButtons(props) {
  var {
    runner,
    run,
    cancel
  } = props;
  var status = (0,useChange/* default */.Z)(runner, t => t === null || t === void 0 ? void 0 : t.status);
  var stopped = !status || status === VMStatus.Stopped;
  var program = runner === null || runner === void 0 ? void 0 : runner.program;
  var {
    0: indeterminate,
    1: setIndeterminate
  } = (0,react.useState)(false);
  var {
    0: breakpoint,
    1: setBreakpoint
  } = (0,react.useState)(undefined);
  var pausing = breakpoint === "";
  var paused = !!(breakpoint !== null && breakpoint !== void 0 && breakpoint.length);
  var mounted = (0,useMounted/* default */.Z)();
  var disabled = indeterminate || !runner;
  var {
    breakpoints,
    setBreakpointHighlight
  } = useWorkspaceBreakpoints(program); //console.log("runner status", status)

  var handleRun = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      try {
        setIndeterminate(true);
        setBreakpoint(undefined);
        yield run();
      } finally {
        if (mounted()) setIndeterminate(false);
      }
    });

    return function handleRun() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleCancel = /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)(function* () {
      try {
        setIndeterminate(true);
        yield runner.clearBreakpointsAsync();
        setBreakpoint(undefined);
        yield cancel();
      } finally {
        if (mounted()) setIndeterminate(false);
      }
    });

    return function handleCancel() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleResume = /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.Z)(function* () {
      try {
        setIndeterminate(true);
        setBreakpoint(undefined);
        yield runner.clearBreakpointsAsync();
        yield runner.resumeAsync();
      } finally {
        if (mounted()) setIndeterminate(false);
      }
    });

    return function handleResume() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handlePause = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.Z)(function* () {
      try {
        setIndeterminate(true);
        yield runner.setBreakpointsAsync(breakpoints);
        yield runner.resumeAsync();
        setBreakpoint("");
      } finally {
        if (mounted()) setIndeterminate(false);
      }
    });

    return function handlePause() {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleStep = () => runner.stepAsync(); // register breakpoint handler


  (0,react.useEffect)(() => runner === null || runner === void 0 ? void 0 : runner.subscribe(vm_events/* VM_BREAKPOINT */.Di, (_, sourceId) => {
    if (mounted()) setBreakpoint(sourceId);
  }), [runner]); // setting blockly breakpoint

  (0,react.useEffect)(() => {
    setBreakpointHighlight(breakpoint);
    return () => setBreakpointHighlight(undefined);
  }, [breakpoint]); // reset breakpoint in ui when runner, paused mode changes

  (0,react.useEffect)(() => setBreakpoint(undefined), [runner]);
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
  var {
    toggleShowDeviceHostsDialog
  } = (0,react.useContext)(AppContext/* default */.ZP);
  return /*#__PURE__*/react.createElement(IconButtonWithTooltip/* default */.Z, {
    title: "start simulator",
    onClick: toggleShowDeviceHostsDialog
  }, /*#__PURE__*/react.createElement(Add/* default */.Z, null));
}
;// CONCATENATED MODULE: ./src/components/vm/VMToolbar.tsx





function VMToolbar(props) {
  var {
    runner,
    run,
    cancel
  } = props;
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
    var {
      theme
    } = options;
    this.serviceColor = (0,servicesbase/* createServiceColor */.JO)(theme); // pure service information here

    var {
      allServices,
      supportedServices,
      registers,
      events,
      commands,
      registerSimpleTypes,
      registerComposites,
      registerSimpleEnumTypes,
      registerCompositeEnumTypes
    } = (0,servicesbase/* getServiceInfo */.wi)();

    var resolveService = cls => allServices.filter(srv => srv.classIdentifier === cls);

    var customClientBlockDefinitions = [].concat((0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_HID_KEYBOARD */.Hg9).map(service => ({
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
      colour: this.serviceColor(service),
      inputsInline: true,
      previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      tooltip: "Send a keyboard key combo",
      helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
      service,
      expression: "role.key(combo.selectors, combo.modifiers, action)",
      template: "custom"
    }))), (0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_LED */.i04).map(service => ({
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
      colour: this.serviceColor(service),
      inputsInline: true,
      previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      tooltip: "Fade LED color",
      helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
      service,
      expression: "role.animate((color >> 16) & 0xff, (color >> 8) & 0xff, (color >> 0) & 0xff, speed * 0xff)",
      template: "custom"
    }))), (0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_SEVEN_SEGMENT_DISPLAY */.hvg).map(service => ({
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
      colour: this.serviceColor(service),
      inputsInline: true,
      previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      tooltip: "Display a number of the screen",
      helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
      service,
      template: "custom"
    }))), (0,toConsumableArray/* default */.Z)(resolveService(constants/* SRV_LED_MATRIX */.ZmS).map(service => ({
      kind: "block",
      type: "show_leds",
      message0: "show %1 leds %2",
      args0: [(0,servicesbase/* roleVariable */.xH)(service), {
        type: LEDMatrixField/* default.KEY */.Z.KEY,
        name: "leds"
      }],
      colour: this.serviceColor(service),
      inputsInline: true,
      previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
      tooltip: "Display LEDs on the LED matrix",
      helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
      service,
      // encode digits
      template: "custom"
    })))).map(def => {
      def.type = "jacdac_custom_" + def.service.shortId.toLowerCase() + "_" + def.type;
      return def;
    });
    var eventClientBlocks = events.map(_ref => {
      var {
        service,
        events
      } = _ref;
      return {
        kind: "block",
        type: "jacdac_events_" + service.shortId,
        message0: "on %1 %2",
        args0: [(0,servicesbase/* roleVariable */.xH)(service), {
          type: "field_dropdown",
          name: "event",
          options: events.map(event => [(0,jdspec/* humanify */.lW)(event.name), event.name])
        }],
        colour: this.serviceColor(service),
        inputsInline: true,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: "Events for the " + service.name + " service",
        helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
        service,
        events,
        template: "event"
      };
    });
    var registerChangeByEventClientBlocks = this.makeRegisterChangeByEventBlocks(registers);
    var registerSimpleGetClientBlocks = this.makeRegisterSimpleGetBlocks(registerSimpleTypes);
    var registerEnumGetClientBlocks = this.makeRegisterEnumGetBlocks([].concat((0,toConsumableArray/* default */.Z)(registerSimpleEnumTypes), (0,toConsumableArray/* default */.Z)(registerCompositeEnumTypes)));
    var registerNumericsGetClientBlocks = this.makeRegisterNumericsGetBlocks(registerComposites);
    var registerSetClientBlocks = this.makeRegisterSetBlocks(registers);
    var commandClientBlocks = commands.map(_ref2 => {
      var {
        service,
        command
      } = _ref2;
      return {
        kind: "block",
        type: "jacdac_command_" + service.shortId + "_" + command.name,
        message0: !command.fields.length ? (0,jdspec/* humanify */.lW)(command.name) + " %1" : (0,jdspec/* humanify */.lW)(command.name) + " %1 with " + (0,servicesbase/* fieldsToMessage */.Bo)(command),
        args0: [(0,servicesbase/* roleVariable */.xH)(service)].concat((0,toConsumableArray/* default */.Z)((0,servicesbase/* fieldsToFieldInputs */.GB)(command))),
        values: (0,servicesbase/* fieldsToValues */.ki)(service, command),
        inputsInline: true,
        colour: this.serviceColor(service),
        tooltip: command.description,
        helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
        service,
        command,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        template: "command"
      };
    });
    this._serviceBlocks = [].concat((0,toConsumableArray/* default */.Z)(eventClientBlocks), (0,toConsumableArray/* default */.Z)(registerSimpleGetClientBlocks), (0,toConsumableArray/* default */.Z)(registerEnumGetClientBlocks), (0,toConsumableArray/* default */.Z)(registerNumericsGetClientBlocks), (0,toConsumableArray/* default */.Z)(registerSetClientBlocks), (0,toConsumableArray/* default */.Z)(commandClientBlocks), (0,toConsumableArray/* default */.Z)(customClientBlockDefinitions), (0,toConsumableArray/* default */.Z)(registerChangeByEventClientBlocks));
    this._eventFieldBlocks = this.makeFieldBlocks(events.map(p => ({
      service: p.service,
      packets: p.events
    }))); // client only

    this._roleBlocks = [{
      kind: "block",
      type: ROLE_BOUND_EVENT_BLOCK,
      message0: "on %1 %2",
      args0: [{
        type: "field_variable",
        name: "role",
        variable: "any",
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(srv => (0,servicesbase/* toRoleType */.tT)(srv)))),
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
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(srv => (0,servicesbase/* toRoleType */.tT)(srv)))),
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
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(srv => (0,servicesbase/* toRoleType */.tT)(srv)))),
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
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(srv => (0,servicesbase/* toRoleType */.tT)(srv))), (0,toConsumableArray/* default */.Z)(supportedServices.map(srv => (0,servicesbase/* toRoleType */.tT)(srv, false)))),
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
        variableTypes: ["client"].concat((0,toConsumableArray/* default */.Z)(supportedServices.map(srv => (0,servicesbase/* toRoleType */.tT)(srv)))),
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
        var _transformData = (0,asyncToGenerator/* default */.Z)(function* (block, data, previousData) {
          var horizon = block.getFieldValue("horizon") || 10;
          return (0,data_proxy/* default */.Z)({
            type: "record_window",
            data,
            previousData,
            horizon
          });
        });

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
    return registers.filter(r => isGet && (r.register.kind === "ro" || r.register.kind === "rw") || !isGet && r.register.kind == "rw").map(_ref => {
      var {
        service,
        register
      } = _ref;
      return {
        kind: "block",
        type: "jacdac_register_" + (isGet ? "get" : "set") + "_request_" + service.shortId + "_" + register.name,
        message0: "on register " + (isGet ? "get" : "set") + " %1 " + (0,jdspec/* humanify */.lW)(register.name),
        args0: [(0,servicesbase/* roleVariable */.xH)(service, false)],
        colour: this.serviceColor(service),
        inputsInline: true,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: register.description,
        helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
        service,
        events: [register],
        template: "event"
      };
    });
  };

  _proto.createBlocks = function createBlocks(options) {
    var {
      theme
    } = options;
    this.serviceColor = (0,servicesbase/* createServiceColor */.JO)(theme); // pure service information here

    var {
      registers,
      events,
      commands,
      registerSimpleTypes,
      registerComposites,
      registerSimpleEnumTypes,
      registerCompositeEnumTypes
    } = (0,servicesbase/* getServiceInfo */.wi)();
    var eventServerBlocks = events.flatMap(_ref2 => {
      var {
        service,
        events
      } = _ref2;
      var eventsNoArgs = events.filter(ev => ev.fields.length === 0);
      var retNoArgs = {
        kind: "block",
        type: "jacdac_raise_event_" + service.shortId,
        message0: "raise %1 %2",
        args0: [(0,servicesbase/* roleVariable */.xH)(service, false), {
          type: "field_dropdown",
          name: "event",
          options: eventsNoArgs.map(event => [(0,jdspec/* humanify */.lW)(event.name), event.name])
        }],
        inputsInline: true,
        colour: this.serviceColor(service),
        tooltip: "Events for the " + service.name + " service",
        helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
        service,
        command: undefined,
        previousStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        template: "raiseNo"
      };
      var eventsArgs = events.filter(ev => ev.fields.length);
      var retArgs = eventsArgs.map(ev => {
        return {
          kind: "block",
          type: "jacdac_raise_event_" + service.shortId + "_" + ev.name,
          message0: !ev.fields.length ? "raise %1 " + (0,jdspec/* humanify */.lW)(ev.name) : "raise %1 " + (0,jdspec/* humanify */.lW)(ev.name) + " with " + (0,servicesbase/* fieldsToMessage */.Bo)(ev),
          args0: [(0,servicesbase/* roleVariable */.xH)(service, false)].concat((0,toConsumableArray/* default */.Z)((0,servicesbase/* fieldsToFieldInputs */.GB)(ev))),
          values: (0,servicesbase/* fieldsToValues */.ki)(service, ev),
          inputsInline: true,
          colour: this.serviceColor(service),
          tooltip: ev.description,
          helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
          service,
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
    var commandServerBlocks = commands.map(_ref3 => {
      var {
        service,
        command
      } = _ref3;
      return {
        kind: "block",
        type: "jacdac_command_server_" + service.shortId + "_" + command.name,
        message0: "on " + (0,jdspec/* humanify */.lW)(command.name) + " %1",
        args0: [(0,servicesbase/* roleVariable */.xH)(service, false)],
        colour: this.serviceColor(service),
        inputsInline: true,
        nextStatement: toolbox/* CODE_STATEMENT_TYPE */.lL,
        tooltip: command.description,
        helpUrl: (0,servicesbase/* serviceHelp */.me)(service),
        service,
        events: [command],
        template: "event"
      };
    });
    this._serviceBlocks = [].concat((0,toConsumableArray/* default */.Z)(eventServerBlocks), (0,toConsumableArray/* default */.Z)(registerSimpleGetServerBlocks), (0,toConsumableArray/* default */.Z)(registerEnumGetServerBlocks), (0,toConsumableArray/* default */.Z)(registerNumericsGetServerBlocks), (0,toConsumableArray/* default */.Z)(registerSetServerBlocks), (0,toConsumableArray/* default */.Z)(commandServerBlocks), (0,toConsumableArray/* default */.Z)(registerSetRequestBlocks), (0,toConsumableArray/* default */.Z)(registerGetRequestBlocks));
    this._eventFieldBlocks = this.makeFieldBlocks(commands.map(p => ({
      service: p.service,
      packets: [p.command]
    })), false);
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
  createBlocks: () => [{
    kind: "block",
    type: VARIABLES_BLOCK,
    message0: "variables %1 %2",
    args0: [{
      type: "input_dummy"
    }, {
      type: VariablesFields/* default.KEY */.Z.KEY,
      name: "variables"
    }],
    colour,
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
    colour,
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
    colour,
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
    colour,
    inputsInline: false,
    tooltip: "View console content",
    template: "meta"
  }],
  createCategory: () => [{
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
  }],
  compileCommandToVM: _ref => {
    var {
      block,
      blockToExpression
    } = _ref;
    var {
      type
    } = block;

    if (type === LOG_BLOCK) {
      var {
        inputs
      } = block;
      var {
        expr,
        errors
      } = blockToExpression(undefined, inputs[0].child);
      return {
        cmd: (0,VMgenerator/* makeVMBase */.IZ)(block, {
          type: "CallExpression",
          arguments: [expr],
          callee: (0,compile/* toIdentifier */.EB)("log")
        }),
        errors
      };
    }

    return undefined;
  },
  compileEventToVM: _ref2 => {
    var {
      block,
      blockToExpression
    } = _ref2;
    var {
      type
    } = block;

    if (type === WATCH_BLOCK) {
      var {
        inputs
      } = block;
      var {
        expr,
        errors
      } = blockToExpression(undefined, inputs[0].child);
      return {
        expression: {
          type: "CallExpression",
          arguments: [expr],
          callee: (0,compile/* toIdentifier */.EB)("watch")
        },
        errors,
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
  createBlocks: () => [{
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
  }],
  createCategory: () => [{
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
    }].filter(b => !!b)
  }],
  compileEventToVM: _ref => {
    var {
      block,
      blockToExpression
    } = _ref;
    var {
      type
    } = block;

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
      var {
        inputs
      } = block;
      var {
        expr: time,
        errors
      } = blockToExpression(undefined, inputs[0].child);
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
  compileCommandToVM: _ref2 => {
    var {
      event,
      block,
      blockToExpression
    } = _ref2;
    var {
      type
    } = block;

    if (type === WAIT_BLOCK) {
      var {
        inputs
      } = block;
      {
        var {
          expr: time,
          errors
        } = blockToExpression(event, inputs[0].child);
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
  createCategory: () => [{
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
  }],
  compileExpressionToVM: _ref => {
    var {
      event,
      block,
      blockToExpressionInner
    } = _ref;
    var {
      type,
      inputs
    } = block;

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
              left,
              right
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
              argument,
              prefix: false // TODO: handle logic_negate

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
  createBlocks: () => [{
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
  }],
  createCategory: () => [{
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
  }],
  compileExpressionToVM: _ref => {
    var {
      event,
      block,
      blockToExpressionInner
    } = _ref;
    var {
      type,
      inputs
    } = block;

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
              argument,
              prefix: false // TODO: handle math-negate

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
              left,
              right
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
  createBlocks: () => [{
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
  }].concat((0,toConsumableArray/* default */.Z)(toolbox/* PRIMITIVE_TYPES.map */.eg.map(output => ({
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
    output,
    colour: jsondsl_colour,
    template: JSON_FIELD_GET_TEMPLATE,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vm: (value, name) => value === null || value === void 0 ? void 0 : value[name]
  }))), [{
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
    vm: (value, name) => !!(value !== null && value !== void 0 && value[name])
  }]),
  createCategory: () => [{
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
    }].concat((0,toConsumableArray/* default */.Z)(toolbox/* PRIMITIVE_TYPES.map */.eg.map(output => ({
      kind: "block",
      type: "json_field_get_as_" + output.toLowerCase(),
      values: {
        value: {
          kind: "block",
          type: "variables_get",
          check: toolbox/* JSON_TYPE */.oj
        }
      }
    }))), [{
      kind: "block",
      type: JSON_FIELD_HAS_BLOCK
    }])
  }],

  compileExpressionToVM(options) {
    var {
      event,
      block,
      definition,
      blockToExpressionInner
    } = options;
    var {
      type
    } = block;
    var {
      template
    } = definition;

    if (type === JSON_OBJECT_BLOCK) {// TODO: handle json field set block
    } else if (type === JSON_FIELD_SET_BLOCK) {// TODO: handle json field get block
    } else if (template === JSON_FIELD_GET_TEMPLATE) {
      // TODO: generate json expression
      console.log("json expr", {
        event,
        block,
        definition,
        blockToExpressionInner
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
  createBlocks: () => [{
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
  }],
  createCategory: () => [{
    kind: "category",
    name: "Widgets",
    contents: [{
      kind: "block",
      type: DASHBOARD_GAUGE_BLOCK
    }],
    colour: widgetdsl_colour
  }]
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
  var {
    dsls,
    workspace,
    workspaceJSON,
    roleManager,
    setWarnings,
    dragging
  } = (0,react.useContext)(BlockContext/* default */.C);
  var {
    fileSystem
  } = (0,react.useContext)(FileSystemContext/* default */.Z);
  var {
    0: program,
    1: setProgram
  } = (0,react.useState)();
  var autoStart = true;
  var {
    runner,
    run,
    cancel
  } = useVMRunner(roleManager, program, autoStart); // don't run the VM while dragging as it glitches the Ui

  (0,react.useEffect)(() => {
    if ((runner === null || runner === void 0 ? void 0 : runner.status) === VMStatus.Running) cancel();
  }, [runner, dragging]);
  (0,react.useEffect)(() => {
    try {
      var newProgram = (0,VMgenerator/* default */.ZP)(workspaceJSON, dsls);
      if (JSON.stringify(newProgram) !== JSON.stringify(program)) setProgram(newProgram);
    } catch (e) {
      console.error(e);
      setProgram(undefined);
    }
  }, [dsls, workspaceJSON]);
  (0,react.useEffect)(() => program && (roleManager === null || roleManager === void 0 ? void 0 : roleManager.updateRoles([].concat((0,toConsumableArray/* default */.Z)(program.roles), (0,toConsumableArray/* default */.Z)(program.serverRoles.map(r => ({
    role: r.role,
    serviceClass: r.serviceClass,
    preferredDeviceId: "TBD"
  })))))), [roleManager, program]);
  (0,react.useEffect)(() => setWarnings(toolbox/* VM_WARNINGS_CATEGORY */.nY, (0,utils/* arrayConcatMany */.ue)(program === null || program === void 0 ? void 0 : program.handlers.map(h => h.errors))), [program]);
  (0,react.useEffect)(() => {
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
  var dsls = (0,react.useMemo)(() => {
    return vmdsls;
  }, []);
  var handleOnBeforeSaveWorkspaceFile = (0,react.useCallback)(file => {
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
//# sourceMappingURL=component---src-pages-editors-vm-tsx-eae5a9e0887e47a6fe9b.js.map