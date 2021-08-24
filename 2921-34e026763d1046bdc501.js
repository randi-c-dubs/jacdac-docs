"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2921],{

/***/ 82921:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DashboardSoundLevel; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__(89196);
// EXTERNAL MODULE: ./src/components/hooks/useServiceServer.ts
var useServiceServer = __webpack_require__(49013);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Mic.js
var Mic = __webpack_require__(11497);
// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__(71815);
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithProgress.tsx + 1 modules
var IconButtonWithProgress = __webpack_require__(16845);
// EXTERNAL MODULE: ./src/components/hooks/useAudioAnalyzer.ts + 1 modules
var useAudioAnalyzer = __webpack_require__(13546);
;// CONCATENATED MODULE: ./src/components/hooks/useMicrophoneVolume.ts


function useMicrophoneVolume(enabled, options) {
  var {
    analyser,
    onClickActivateMicrophone,
    closeMicrophone
  } = (0,useAudioAnalyzer/* useMicrophoneAnalyzer */.K)(options);
  var frequencies = (0,react.useRef)(new Uint8Array(0));
  (0,react.useEffect)(() => {
    if (!enabled) closeMicrophone();
  }, [enabled]);
  return {
    onClickActivateMicrophone,
    volume: () => {
      var a = analyser();
      if (!a) return 0;
      if (frequencies.current.length !== a.frequencyBinCount) frequencies.current = new Uint8Array(a.frequencyBinCount);
      a.getByteFrequencyData(frequencies.current);
      var max = 0;
      var bins = frequencies.current;
      var n = bins.length;

      for (var i = 0; i < n; ++i) {
        max = Math.max(max, bins[i]);
      }

      return max / 0xff;
    }
  };
}
// EXTERNAL MODULE: ./src/components/hooks/useAnimationFrame.ts
var useAnimationFrame = __webpack_require__(17368);
// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__(48059);
// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__(60650);
;// CONCATENATED MODULE: ./src/components/widgets/TrendWidget.tsx






function TrendWidget(props) {
  var {
    register,
    min,
    max,
    horizon,
    size
  } = props;
  var server = (0,useServiceServer/* default */.Z)(register.service);
  var color = server ? "secondary" : "primary";
  var {
    background,
    controlBackground,
    active
  } = (0,useWidgetTheme/* default */.Z)(color);
  var dataRef = (0,react.useRef)(undefined);
  var pathRef = (0,react.useRef)();
  var dx = 4;
  var m = 2;
  var w = horizon * dx + 2 * m;
  var h = w / 1.612;
  var dy = (h - 2 * m) / (max - min);
  (0,react.useEffect)(() => {
    dataRef.current = register ? [] : undefined; // reset data

    return register === null || register === void 0 ? void 0 : register.subscribe(constants/* CHANGE */.Ver, () => {
      // register new value
      var [v] = register.unpackedValue;
      var data = dataRef.current;
      data.unshift(v);

      while (data.length > horizon) {
        data.pop();
      }
    });
  }, [register, horizon, min, max]);
  (0,useAnimationFrame/* default */.Z)(() => {
    // update dom
    var data = dataRef.current;
    if (!data) return false; // nothing to render

    if (pathRef.current) {
      var d = "M " + w + " " + h + " ";
      var x = w - m;

      for (var i = 0; i < data.length; ++i) {
        var v = data[i];
        var y = h - m - (v - min) * dy;
        d += "L " + x + " " + y;
        x -= dx;
      }

      d += " V " + h + " z";
      pathRef.current.setAttribute("d", d);
    }

    return true;
  }, [dataRef.current]);
  return /*#__PURE__*/react.createElement(SvgWidget/* default */.Z, {
    width: w,
    height: h,
    size: size,
    background: background
  }, /*#__PURE__*/react.createElement("path", {
    fill: active,
    stroke: controlBackground,
    strokeWidth: m / 2,
    ref: pathRef
  }));
}
// EXTERNAL MODULE: ./src/components/ui/LoadingProgress.tsx
var LoadingProgress = __webpack_require__(2285);
// EXTERNAL MODULE: ./src/components/hooks/useRegister.ts
var useRegister = __webpack_require__(82677);
;// CONCATENATED MODULE: ./src/components/dashboard/DashboardSoundLevel.tsx













function HostMicrophoneButton(props) {
  var {
    server,
    service,
    visible
  } = props;
  var enabledRegister = (0,useRegister/* default */.Z)(service, constants/* SoundLevelReg.Enabled */.lSs.Enabled);
  var minDecibelsRegister = (0,useRegister/* default */.Z)(service, constants/* SoundLevelReg.MinDecibels */.lSs.MinDecibels);
  var maxDecibelsRegister = (0,useRegister/* default */.Z)(service, constants/* SoundLevelReg.MaxDecibels */.lSs.MaxDecibels);
  var enabled = (0,useRegisterValue/* useRegisterBoolValue */.I8)(enabledRegister, props);
  var [minDecibels] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(minDecibelsRegister, props);
  var [maxDecibels] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(maxDecibelsRegister, props);
  var {
    volume,
    onClickActivateMicrophone
  } = useMicrophoneVolume(enabled && !!server, {
    fftSize: 64,
    smoothingTimeConstant: 0,
    minDecibels,
    maxDecibels
  });
  var title = enabled ? "Stop microphone" : "Start microphone";

  var handleClick = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)(function* () {
      if (!enabled && server) yield onClickActivateMicrophone();
      yield enabledRegister.sendSetBoolAsync(!enabled, true);
    });

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }(); // update volume on demand


  (0,react.useEffect)(() => visible && (server === null || server === void 0 ? void 0 : server.subscribe(constants/* REFRESH */.RGM, () => {
    var v = volume === null || volume === void 0 ? void 0 : volume();

    if (v !== undefined) {
      server.reading.setValues([v]);
    }
  })), [server, volume, visible]);
  return /*#__PURE__*/react.createElement(IconButtonWithProgress/* default */.Z, {
    title: title,
    indeterminate: enabled,
    onClick: handleClick
  }, /*#__PURE__*/react.createElement(Mic/* default */.Z, null));
}

function DashboardSoundLevel(props) {
  var {
    visible,
    service
  } = props;
  var soundLevelRegister = (0,useRegister/* default */.Z)(service, constants/* SoundLevelReg.SoundLevel */.lSs.SoundLevel);
  var [soundLevel] = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(soundLevelRegister, props);
  var server = (0,useServiceServer/* default */.Z)(service);
  if (soundLevel === undefined) return /*#__PURE__*/react.createElement(LoadingProgress/* default */.Z, null);
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(TrendWidget, {
    register: soundLevelRegister,
    min: 0,
    max: 1,
    horizon: 64
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(HostMicrophoneButton, {
    service: service,
    server: server,
    visible: visible
  })));
}

/***/ })

}]);
//# sourceMappingURL=2921-34e026763d1046bdc501.js.map