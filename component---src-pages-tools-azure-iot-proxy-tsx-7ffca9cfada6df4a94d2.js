"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7057],{

/***/ 27588:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useFetch; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _useEffectAsync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7751);



function useFetch(url, options) {
  var {
    0: response,
    1: setResponse
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  var {
    0: status,
    1: setStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  var {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // start in loading mode

  (0,_useEffectAsync__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)( /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(function* (mounted) {
      setLoading(true);

      try {
        if (!url) {
          setStatus(404);
          setResponse(undefined);
        } else {
          var res = yield fetch(url, options);
          if (!mounted()) return;
          var _status = res.status;
          setStatus(_status);

          if (_status >= 200 && _status <= 204) {
            var json = yield res.json();
            if (!mounted()) return;
            setResponse(json);
          }
        }
      } catch (error) {
        if (!mounted()) return;
        setError(error);
      } finally {
        if (mounted()) setLoading(false);
      }
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [url]);
  return {
    response,
    error,
    status,
    loading
  };
}

/***/ }),

/***/ 11277:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/components/hooks/useClient.ts

function useClient(factory) {
  var client = (0,react.useMemo)(factory, []);
  (0,react.useEffect)(() => () => client === null || client === void 0 ? void 0 : client.unmount(), []);
  return client;
}
// EXTERNAL MODULE: ./src/jacdac/Context.tsx
var Context = __webpack_require__(20392);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(53719);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(25342);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(85413);
// EXTERNAL MODULE: ./jacdac-ts/src/azure-iot/dtdlspec.ts
var dtdlspec = __webpack_require__(5443);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/client.ts
var client = __webpack_require__(47235);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
;// CONCATENATED MODULE: ./jacdac-ts/src/azure-iot/dtdlproxy.ts







var DTDL_DEVICE_MODELS_REPOSITORY = "https://jacdac-device-models.azurewebsites.net/";
/**
 * Tracks the devices on the bus and automatically generate DTDL information
 * @internal
 */

var DTDLProxy = /*#__PURE__*/function (_JDClient) {
  (0,inheritsLoose/* default */.Z)(DTDLProxy, _JDClient);

  function DTDLProxy(bus) {
    var _this;

    _this = _JDClient.call(this) || this;
    _this.bus = bus;

    _this.bus.on(constants/* DEVICE_CHANGE */.RoP, _this.updateDTDL.bind((0,assertThisInitialized/* default */.Z)(_this)));

    _this.updateDTDL();

    return _this;
  }

  var _proto = DTDLProxy.prototype;

  _proto.updateDTDL = function updateDTDL() {
    var newServices = this.bus.services({
      specification: true,
      ignoreSelf: true
    }).filter(srv => !(0,spec/* isInfrastructure */.lz)(srv.specification)).sort((l, r) => l.compareTo(r));
    var device = {
      name: "Azure IoT Jacdac Device",
      services: newServices.map(srv => srv.serviceClass)
    };
    var newDTDL = (0,dtdlspec/* deviceClassToDTDL */.Yh)(device);

    if (JSON.stringify(newDTDL) !== JSON.stringify(this._dtdl)) {
      this._dtdl = newDTDL;
      console.log("new DTDL", {
        newDTDL
      });
      this.emit(constants/* CHANGE */.Ver);
    }
  };

  (0,createClass/* default */.Z)(DTDLProxy, [{
    key: "dtdl",
    get: function get() {
      return this._dtdl;
    }
  }]);

  return DTDLProxy;
}(client/* default */.Z);


// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
// EXTERNAL MODULE: ./src/components/azure/DTDLSnippet.tsx
var DTDLSnippet = __webpack_require__(16591);
// EXTERNAL MODULE: ./src/components/useFetch.ts
var useFetch = __webpack_require__(27588);
// EXTERNAL MODULE: ./src/components/ui/Alert.tsx
var Alert = __webpack_require__(95453);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
;// CONCATENATED MODULE: ./src/pages/tools/azure-iot-proxy.tsx











function Page() {
  var {
    bus
  } = (0,react.useContext)(Context/* default */.Z);
  var proxy = useClient(() => new DTDLProxy(bus));
  var dtdl = (0,useChange/* default */.Z)(proxy, _ => _ === null || _ === void 0 ? void 0 : _.dtdl);
  var route = dtdl && (0,dtdlspec/* DTMIToRoute */.Aq)(dtdl["@id"]);
  var dtdlFetch = (0,useFetch/* default */.Z)(route);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "Azure IoT Proxy"), /*#__PURE__*/react.createElement("h2", null, "DTDL"), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react.createElement("h3", null, "Generated"), /*#__PURE__*/react.createElement(DTDLSnippet/* DTDLSnippet */.Y, {
    node: dtdl,
    name: "proxy-generated"
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react.createElement("h3", null, "DTDL (from", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    target: "_blank",
    href: route
  }, "cloud"), ")"), /*#__PURE__*/react.createElement(DTDLSnippet/* DTDLSnippet */.Y, {
    node: dtdlFetch === null || dtdlFetch === void 0 ? void 0 : dtdlFetch.response,
    name: "proxy-cloud"
  }), (dtdlFetch === null || dtdlFetch === void 0 ? void 0 : dtdlFetch.error) && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    severity: "error"
  }, dtdlFetch.error))));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-azure-iot-proxy-tsx-7ffca9cfada6df4a94d2.js.map