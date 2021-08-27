"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[1931],{

/***/ 31931:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardAzureIoTHubHealth; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js
var Switch = __webpack_require__(6210);
// EXTERNAL MODULE: ./src/jacdac/useChange.ts
var useChange = __webpack_require__(54774);
;// CONCATENATED MODULE: ./src/jacdac/useServiceClient.ts

function useServiceClient(service, factory) {
  var {
    0: client,
    1: setClient
  } = (0,react.useState)(undefined);
  (0,react.useEffect)(() => {
    var c = service && factory(service);
    setClient(c);
    return () => c === null || c === void 0 ? void 0 : c.unmount();
  }, [service, factory]);
  return client;
}
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(53719);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(85413);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/pack.ts
var pack = __webpack_require__(91635);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/serviceclient.ts
var serviceclient = __webpack_require__(56763);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/spec.ts + 2 modules
var spec = __webpack_require__(13173);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/utils.ts
var utils = __webpack_require__(81794);
;// CONCATENATED MODULE: ./jacdac-ts/src/clients/azureiothubhealthclient.ts








var AzureIoTHubHealthClient = /*#__PURE__*/function (_JDServiceClient) {
  (0,inheritsLoose/* default */.Z)(AzureIoTHubHealthClient, _JDServiceClient);

  function AzureIoTHubHealthClient(service) {
    var _this;

    _this = _JDServiceClient.call(this, service) || this;
    (0,utils/* assert */.hu)(service.serviceClass === constants/* SRV_AZURE_IOT_HUB_HEALTH */.tOR); // tell the bus to refresh these register

    _this.hubNameRegister = _this.service.register(constants/* AzureIotHubHealthReg.HubName */.q7s.HubName);
    _this.connectionStatusRegister = _this.service.register(constants/* AzureIotHubHealthReg.ConnectionStatus */.q7s.ConnectionStatus);
    _this.statisticsRegister = _this.service.register(constants/* AzureIotHubHealthReg.Statistics */.q7s.Statistics);

    _this.mount(() => _this.hubNameRegister.subscribe(constants/* REPORT_UPDATE */.rGZ, () => _this.emit(constants/* CHANGE */.Ver)));

    _this.mount(() => _this.connectionStatusRegister.subscribe(constants/* REPORT_UPDATE */.rGZ, () => _this.emit(constants/* CHANGE */.Ver)));

    _this.mount(() => _this.statisticsRegister.subscribe(constants/* REPORT_UPDATE */.rGZ, () => _this.emit(constants/* CHANGE */.Ver)));

    _this.mount(() => _this.service.event(constants/* AzureIotHubHealthEvent.ConnectionStatusChange */.qqS.ConnectionStatusChange).on(constants/* EVENT */.Ks0, () => {
      _this.connectionStatusRegister.refresh();

      _this.emit(constants/* CHANGE */.Ver);
    }));

    return _this;
  }

  var _proto = AzureIoTHubHealthClient.prototype;

  _proto.connect = /*#__PURE__*/function () {
    var _connect = (0,asyncToGenerator/* default */.Z)(function* () {
      yield this.service.sendCmdAsync(constants/* AzureIotHubHealthCmd.Connect */.FhJ.Connect, undefined, true);
    });

    function connect() {
      return _connect.apply(this, arguments);
    }

    return connect;
  }();

  _proto.disconnect = /*#__PURE__*/function () {
    var _disconnect = (0,asyncToGenerator/* default */.Z)(function* () {
      yield this.service.sendCmdAsync(constants/* AzureIotHubHealthCmd.Disconnect */.FhJ.Disconnect, undefined, true);
    });

    function disconnect() {
      return _disconnect.apply(this, arguments);
    }

    return disconnect;
  }();

  _proto.identify = /*#__PURE__*/function () {
    var _identify = (0,asyncToGenerator/* default */.Z)(function* (deviceId) {
      yield this.service.sendCmdAsync(constants/* AzureIotHubHealthCmd.Identify */.FhJ.Identify, (0,spec/* parseDeviceId */.QN)(deviceId), true);
    });

    function identify(_x) {
      return _identify.apply(this, arguments);
    }

    return identify;
  }();

  _proto.reset = /*#__PURE__*/function () {
    var _reset = (0,asyncToGenerator/* default */.Z)(function* (deviceId) {
      yield this.service.sendCmdAsync(constants/* AzureIotHubHealthCmd.Reset */.FhJ.Reset, (0,spec/* parseDeviceId */.QN)(deviceId), true);
    });

    function reset(_x2) {
      return _reset.apply(this, arguments);
    }

    return reset;
  }();

  _proto.ping = /*#__PURE__*/function () {
    var _ping = (0,asyncToGenerator/* default */.Z)(function* (value) {
      var data = (0,pack/* jdpack */.AV)("u32", [value]);
      yield this.service.sendCmdAsync(constants/* AzureIotHubHealthCmd.Ping */.FhJ.Ping, data, true);
    });

    function ping(_x3) {
      return _ping.apply(this, arguments);
    }

    return ping;
  }();

  (0,createClass/* default */.Z)(AzureIoTHubHealthClient, [{
    key: "hubName",
    get: function get() {
      return this.hubNameRegister.stringValue;
    }
  }, {
    key: "connectionStatus",
    get: function get() {
      var _reg$unpackedValue;

      var reg = this.connectionStatusRegister;
      return (_reg$unpackedValue = reg.unpackedValue) === null || _reg$unpackedValue === void 0 ? void 0 : _reg$unpackedValue[0];
    }
  }, {
    key: "statistics",
    get: function get() {
      var [reading, event, twinReported, twinDesired] = this.statisticsRegister.unpackedValue;
      return {
        reading,
        event,
        twinReported,
        twinDesired
      };
    }
  }]);

  return AzureIoTHubHealthClient;
}(serviceclient/* JDServiceClient */.P);
/* harmony default export */ var azureiothubhealthclient = (AzureIoTHubHealthClient);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(60650);
// EXTERNAL MODULE: ./jacdac-ts/jacdac-spec/dist/specconstants.ts
var specconstants = __webpack_require__(73512);
// EXTERNAL MODULE: ./node_modules/react-use-id-hook/dist/react-use-id-hook.esm.js
var react_use_id_hook_esm = __webpack_require__(19640);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardAzureIoTHubHealth.tsx








function DashboardAzureIoTHubHealth(props) {
  var {
    service
  } = props;
  var connectId = (0,react_use_id_hook_esm/* useId */.Me)();
  var factory = (0,react.useCallback)(srv => new azureiothubhealthclient(srv), []);
  var client = useServiceClient(service, factory);
  var hubName = (0,useChange/* default */.Z)(client, _ => _ === null || _ === void 0 ? void 0 : _.hubName);
  var connectionStatus = (0,useChange/* default */.Z)(client, _ => _ === null || _ === void 0 ? void 0 : _.connectionStatus);
  var color = "primary";
  var {
    textPrimary
  } = (0,useWidgetTheme/* default */.Z)(color);
  var connected = connectionStatus === specconstants/* AzureIotHubHealthConnectionStatus.Connected */.gaB.Connected;
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1,
    style: {
      color: textPrimary,
      minWidth: "16rem"
    }
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    component: "span",
    variant: "subtitle1"
  }, "hub: ", hubName), /*#__PURE__*/react.createElement(Switch/* default */.Z, {
    checked: connected,
    "aria-labelledby": connectId
  }), /*#__PURE__*/react.createElement("label", {
    className: ".no-pointer-events",
    id: connectId
  }, specconstants/* AzureIotHubHealthConnectionStatus */.gaB[connectionStatus])));
}

/***/ })

}]);
//# sourceMappingURL=1931-77f11e108e9dbb2369b3.js.map