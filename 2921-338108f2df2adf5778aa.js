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
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(42656);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
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
  var _useMicrophoneAnalyze = (0,useAudioAnalyzer/* useMicrophoneAnalyzer */.K)(options),
      analyser = _useMicrophoneAnalyze.analyser,
      onClickActivateMicrophone = _useMicrophoneAnalyze.onClickActivateMicrophone,
      closeMicrophone = _useMicrophoneAnalyze.closeMicrophone;

  var frequencies = (0,react.useRef)(new Uint8Array(0));
  (0,react.useEffect)(function () {
    if (!enabled) closeMicrophone();
  }, [enabled]);
  return {
    onClickActivateMicrophone: onClickActivateMicrophone,
    volume: function volume() {
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
  var register = props.register,
      min = props.min,
      max = props.max,
      horizon = props.horizon,
      size = props.size;
  var server = (0,useServiceServer/* default */.Z)(register.service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = (0,useWidgetTheme/* default */.Z)(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active;

  var dataRef = (0,react.useRef)(undefined);
  var pathRef = (0,react.useRef)();
  var dx = 4;
  var m = 2;
  var w = horizon * dx + 2 * m;
  var h = w / 1.612;
  var dy = (h - 2 * m) / (max - min);
  (0,react.useEffect)(function () {
    dataRef.current = register ? [] : undefined; // reset data

    return register === null || register === void 0 ? void 0 : register.subscribe(constants/* CHANGE */.Ver, function () {
      // register new value
      var _ref = register.unpackedValue,
          v = _ref[0];
      var data = dataRef.current;
      data.unshift(v);

      while (data.length > horizon) {
        data.pop();
      }
    });
  }, [register, horizon, min, max]);
  (0,useAnimationFrame/* default */.Z)(function () {
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
  var server = props.server,
      service = props.service,
      visible = props.visible;
  var enabledRegister = (0,useRegister/* default */.Z)(service, constants/* SoundLevelReg.Enabled */.lSs.Enabled);
  var minDecibelsRegister = (0,useRegister/* default */.Z)(service, constants/* SoundLevelReg.MinDecibels */.lSs.MinDecibels);
  var maxDecibelsRegister = (0,useRegister/* default */.Z)(service, constants/* SoundLevelReg.MaxDecibels */.lSs.MaxDecibels);
  var enabled = (0,useRegisterValue/* useRegisterBoolValue */.I8)(enabledRegister, props);

  var _useRegisterUnpackedV = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(minDecibelsRegister, props),
      minDecibels = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(maxDecibelsRegister, props),
      maxDecibels = _useRegisterUnpackedV2[0];

  var _useMicrophoneVolume = useMicrophoneVolume(enabled && !!server, {
    fftSize: 64,
    smoothingTimeConstant: 0,
    minDecibels: minDecibels,
    maxDecibels: maxDecibels
  }),
      volume = _useMicrophoneVolume.volume,
      onClickActivateMicrophone = _useMicrophoneVolume.onClickActivateMicrophone;

  var title = enabled ? "Stop microphone" : "Start microphone";

  var handleClick = /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!enabled && server)) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return onClickActivateMicrophone();

            case 3:
              _context.next = 5;
              return enabledRegister.sendSetBoolAsync(!enabled, true);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }(); // update volume on demand


  (0,react.useEffect)(function () {
    return visible && (server === null || server === void 0 ? void 0 : server.subscribe(constants/* REFRESH */.RGM, function () {
      var v = volume === null || volume === void 0 ? void 0 : volume();

      if (v !== undefined) {
        server.reading.setValues([v]);
      }
    }));
  }, [server, volume, visible]);
  return /*#__PURE__*/react.createElement(IconButtonWithProgress/* default */.Z, {
    title: title,
    indeterminate: enabled,
    onClick: handleClick
  }, /*#__PURE__*/react.createElement(Mic/* default */.Z, null));
}

function DashboardSoundLevel(props) {
  var visible = props.visible,
      service = props.service;
  var soundLevelRegister = (0,useRegister/* default */.Z)(service, constants/* SoundLevelReg.SoundLevel */.lSs.SoundLevel);

  var _useRegisterUnpackedV3 = (0,useRegisterValue/* useRegisterUnpackedValue */.Pf)(soundLevelRegister, props),
      soundLevel = _useRegisterUnpackedV3[0];

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