"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[3801],{

/***/ 55389:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LightsensorAccessible; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81794);
/* harmony import */ var _components_hooks_useServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2928);
/* harmony import */ var _components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95393);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36176);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80838);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85420);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29114);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(31186);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31690);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(69817);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(92206);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(48086);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(87198);
/* harmony import */ var _components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94431);
/* harmony import */ var _components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31477);
/* harmony import */ var _components_hooks_useBuzzerPlayTone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65611);
/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65063);
/* harmony import */ var react_use_id_hook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19640);













var TONE_DURATION = 50;
var TONE_THROTTLE = 100; // this is a React component that gets run numerous time,
// whenever a change is detected in the React state
// for example, useServices is a hook that tracks the light level services,
// so it will render again and update the light array whenever the bus connects/disconnects
// a light sensor

function LightsensorAccessible() {
  var {
    playTone,
    toggleBrowserAudio,
    browserAudio
  } = (0,_components_hooks_useBuzzerPlayTone__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(); // identifiers for accessibility

  var sectionId = (0,react_use_id_hook__WEBPACK_IMPORTED_MODULE_10__/* .useId */ .Me)(); // useServices accepts a number of filters and returns any services that match
  // get all led light sensor services
  // under the hood, it uses the bus and events.

  var lightSensors = (0,_components_hooks_useServices__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SRV_LIGHT_LEVEL */ .pPH
  });
  console.log("light sensors: " + lightSensors); // create a state variable to hold the service selected as our light sensor
  // when using setLightService, React will render again this component

  var {
    0: lightService,
    1: setLightService
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); //used to hold user selection of the property of the sound to vary. Default is the frequency.

  var {
    0: sonificationProperty,
    1: setSonificationProperty
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("frequency");

  var handleSelectLightService = light => () => {
    console.log(light);
    lightService == light ? setLightService(undefined) : setLightService(light);
  }; //handler for property selection to sonify.


  var handlePropertySelectionChange = event => {
    setSonificationProperty(event.target.value);
  }; // filter to only show light sensors in dashboard


  var dashboardDeviceFilter = d => d.hasService(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SRV_LIGHT_LEVEL */ .pPH); // register for light sensor data events


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // ?. checks that the callee is defined
    var unsubs = lightService === null || lightService === void 0 ? void 0 : lightService.readingRegister.subscribe(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .REPORT_UPDATE */ .rGZ, // don't trigger more than every 100ms
    (0,_jacdac_ts_src_jdom_utils__WEBPACK_IMPORTED_MODULE_2__/* .throttle */ .P2)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(function* () {
      // get amount of light
      //console.log(lightService.readingRegister.unpackedValue)
      var [lightLevel] = lightService.readingRegister.unpackedValue;
      var volume = 1;
      var toneFrequencyOffset = 0;

      if (sonificationProperty == "frequency") {
        toneFrequencyOffset = lightLevel;
      } else {
        volume = lightLevel % 0.99;
      }

      yield playTone(1000 + toneFrequencyOffset * 1000, TONE_DURATION, volume);
    }), TONE_THROTTLE)); // cleanup callback

    return () => unsubs === null || unsubs === void 0 ? void 0 : unsubs();
  }, [lightService, playTone]); // re-register if light sensor changes

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    id: sectionId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Audio controls"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "outlined",
    onClick: toggleBrowserAudio
  }, browserAudio ? "Stop browser audio" : "Start browser audio"), !lightSensors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Connect a device"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_alert_ConnectAlert__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    serviceClass: _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SRV_LIGHT_LEVEL */ .pPH
  }))), lightSensors.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ui_GridHeader__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Available Lightsensors"
  }), lightSensors.map(lightSensor => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
    item: true,
    xs: 12,
    sm: 6,
    lg: 4,
    xl: 3,
    key: lightSensor.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DeviceCardHeader__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    device: lightSensor.device,
    showAvatar: true,
    showMedia: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* .default */ .Z, {
    variant: "h5"
  }, (lightSensor === lightService ? "Streaming from " : "") + (lightSensor.device.isPhysical ? "Physical" : "Virtual") + ("LightSensor " + lightSensor.friendlyName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* .default */ .Z, {
    component: "fieldset"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
    component: "legend"
  }, "Select property of sound to change"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* .default */ .Z, {
    "aria-label": "sonification property",
    name: "soundProperty",
    value: sonificationProperty,
    onChange: handlePropertySelectionChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
    value: "frequency",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, null),
    label: "buzzer frequency"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* .default */ .Z, {
    value: "volume",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* .default */ .Z, null),
    label: "buzzer volume"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "outlined",
    onClick: handleSelectLightService(lightSensor)
  }, lightSensor === lightService ? "Stop streaming" : "Start streaming")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    deviceFilter: dashboardDeviceFilter
  }));
}

/***/ })

}]);
//# sourceMappingURL=component---src-pages-tools-lightsensor-accessible-tsx-f19921ffd0bf80b536bf.js.map