"use strict";
(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[2566,9819],{

/***/ 63037:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ GithubRepositoryCardHeader; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80453);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33287);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95823);
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99819);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14429);
/* harmony import */ var gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36176);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2285);
 // tslint:disable-next-line: no-submodule-imports







function MakeCodeFolderLink(props) {
  var slug = props.slug,
      folder = props.folder,
      repo = props.repo;

  var _useFetchJSON = (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .useFetchJSON */ .J$)(slug, repo.default_branch, "pxt.json", "application/json"),
      pxtJson = _useFetchJSON.response;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    href: repo.html_url + "/tree/" + repo.default_branch + "/" + folder,
    target: "blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    component: "span",
    variant: "h5"
  }, repo.name + "/ " + ((pxtJson === null || pxtJson === void 0 ? void 0 : pxtJson.name) || folder)));
}

function GithubRepositoryCardHeader(props) {
  var _repo$organization;

  var slug = props.slug,
      showRelease = props.showRelease;

  var _useRepository = (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .useRepository */ .Ux)(slug),
      repo = _useRepository.response,
      repoLoading = _useRepository.loading,
      status = _useRepository.status;

  var _useLatestRelease = (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .useLatestRelease */ .G$)(showRelease && slug),
      release = _useLatestRelease.response;

  var _normalizeSlug = (0,_github__WEBPACK_IMPORTED_MODULE_1__/* .normalizeSlug */ .E1)(slug),
      folder = _normalizeSlug.folder;

  var title = repo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    component: "span",
    variant: "h6"
  }, (_repo$organization = repo.organization) === null || _repo$organization === void 0 ? void 0 : _repo$organization.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    component: "span",
    ml: 0.5,
    mr: 0.5
  }, "/"), folder ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MakeCodeFolderLink, {
    slug: slug,
    folder: folder,
    repo: repo
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    href: repo.html_url,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    component: "span",
    variant: "h5"
  }, repo.name))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
    href: "https://github.com/" + slug,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    component: "span",
    variant: "h6"
  }, slug)), repoLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, null), status !== 403 && !repoLoading && !repo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    component: "p",
    variant: "caption"
  }, "Unable to find repository."));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    title: title,
    subheader: release && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_material_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
      color: "textSecondary",
      target: "_blank",
      to: release.html_url
    }, release.version),
    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, null)
  });
}

/***/ }),

/***/ 99819:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "nJ": function() { return /* binding */ GITHUB_API_KEY; },
  "pY": function() { return /* binding */ fetchLatestRelease; },
  "dW": function() { return /* binding */ fetchReleaseBinary; },
  "s8": function() { return /* binding */ fetchText; },
  "E1": function() { return /* binding */ normalizeSlug; },
  "Jo": function() { return /* binding */ parseRepoUrl; },
  "J$": function() { return /* binding */ useFetchJSON; },
  "G$": function() { return /* binding */ useLatestRelease; },
  "Fm": function() { return /* binding */ useLatestReleases; },
  "Ux": function() { return /* binding */ useRepository; }
});

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(75167);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(73108);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(42656);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./src/components/semver.ts
function cmp(a, b) {
  if (!a) {
    if (!b) return 0;else return 1;
  } else if (!b) return -1;else {
    var d = a.major - b.major || a.minor - b.minor || a.patch - b.patch;
    if (d) return d;
    if (a.pre.length == 0 && b.pre.length > 0) return 1;
    if (a.pre.length > 0 && b.pre.length == 0) return -1;

    for (var i = 0; i < a.pre.length + 1; ++i) {
      var aa = a.pre[i];
      var bb = b.pre[i];
      if (!aa) {
        if (!bb) return 0;else return -1;
      } else if (!bb) return 1;else if (/^\d+$/.test(aa)) {
        if (/^\d+$/.test(bb)) {
          d = parseInt(aa) - parseInt(bb);
          if (d) return d;
        } else return -1;
      } else if (/^\d+$/.test(bb)) return 1;else {
        d = strcmp(aa, bb);
        if (d) return d;
      }
    }

    return 0;
  }
}

function tryParse(v) {
  if (!v) return null;

  if ("*" === v) {
    return {
      major: Number.MAX_SAFE_INTEGER,
      minor: Number.MAX_SAFE_INTEGER,
      patch: Number.MAX_SAFE_INTEGER,
      pre: [],
      build: []
    };
  }

  if (/^v\d/i.test(v)) v = v.slice(1);
  var m = /^(\d+)\.(\d+)\.(\d+)(-([0-9a-zA-Z\-\.]+))?(\+([0-9a-zA-Z\-\.]+))?$/.exec(v);
  if (m) return {
    major: parseInt(m[1]),
    minor: parseInt(m[2]),
    patch: parseInt(m[3]),
    pre: m[5] ? m[5].split(".") : [],
    build: m[7] ? m[7].split(".") : []
  };
  return null;
}

function strcmp(a, b) {
  if (a === b) return 0;
  if (a < b) return -1;else return 1;
}

function semverCmp(a, b) {
  var aa = tryParse(a);
  var bb = tryParse(b);
  if (!aa && !bb) return strcmp(a, b);else return cmp(aa, bb);
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/useEffectAsync.ts
var useEffectAsync = __webpack_require__(7751);
;// CONCATENATED MODULE: ./src/components/useFetch.ts




function useFetch(url, options) {
  var _useState = (0,react.useState)(undefined),
      response = _useState[0],
      setResponse = _useState[1]; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  var _useState2 = (0,react.useState)(undefined),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0,react.useState)(undefined),
      status = _useState3[0],
      setStatus = _useState3[1];

  var _useState4 = (0,react.useState)(true),
      loading = _useState4[0],
      setLoading = _useState4[1]; // start in loading mode


  (0,useEffectAsync/* default */.Z)( /*#__PURE__*/function () {
    var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(mounted) {
      var res, _status, json;

      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return fetch(url, options);

            case 4:
              res = _context.sent;

              if (mounted()) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return");

            case 7:
              _status = res.status;
              setStatus(_status);

              if (!(_status >= 200 && _status <= 204)) {
                _context.next = 16;
                break;
              }

              _context.next = 12;
              return res.json();

            case 12:
              json = _context.sent;

              if (mounted()) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return");

            case 15:
              setResponse(json);

            case 16:
              _context.next = 23;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](1);

              if (mounted()) {
                _context.next = 22;
                break;
              }

              return _context.abrupt("return");

            case 22:
              setError(_context.t0);

            case 23:
              _context.prev = 23;
              if (mounted()) setLoading(false);
              return _context.finish(23);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 18, 23, 26]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [url]);
  return {
    response: response,
    error: error,
    status: status,
    loading: loading
  };
}
;// CONCATENATED MODULE: ./src/components/github.ts




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ROOT = "https://api.github.com/";
var GITHUB_API_KEY = "githubtoken";

function contentToFirmwareRelease(content) {
  var _$exec;

  // filter out non-file, non-uf2
  var version = (content === null || content === void 0 ? void 0 : content.type) === "file" && ((_$exec = /^fw-(\d+\.\d+.\d+)\.uf2$/.exec(content.name)) === null || _$exec === void 0 ? void 0 : _$exec[1]);
  if (!version) return undefined;
  return {
    version: version,
    sha: content.sha,
    size: content.size,
    html_url: content.html_url,
    download_url: content.download_url
  };
}

function contentsToFirmwareReleases(contents) {
  return contents === null || contents === void 0 ? void 0 : contents.map(contentToFirmwareRelease).filter(function (r) {
    return !!r;
  }).sort(function (l, r) {
    return -semverCmp(l.version, r.version);
  });
}

function normalizeSlug(slug) {
  var cleaned = slug.replace(/^https:\/\/github.com\//, "");
  var parts = cleaned.split("/");
  return {
    repoPath: parts[0] + "/" + parts[1],
    folder: parts.slice(2).join("/")
  };
}
function parseRepoUrl(url) {
  var m = /^https:\/\/github\.com\/([^/ \t]+)\/([^/ \t]+)\/?$/.exec(url || "");
  if (m) return {
    owner: m[1],
    name: m[2]
  };
  return undefined;
}
function fetchLatestRelease(_x, _x2) {
  return _fetchLatestRelease.apply(this, arguments);
}

function _fetchLatestRelease() {
  _fetchLatestRelease = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(slug, options) {
    var _normalizeSlug4, repoPath, uri, resp, contents, releases;

    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // https://api.github.com/repos/microsoft/jacdac-msr-modules/contents/dist
            _normalizeSlug4 = normalizeSlug(slug), repoPath = _normalizeSlug4.repoPath;
            uri = ROOT + "repos/" + repoPath + "/contents/dist";
            _context.next = 4;
            return fetch(uri);

          case 4:
            resp = _context.sent;
            _context.t0 = resp.status;
            _context.next = _context.t0 === 200 ? 8 : _context.t0 === 204 ? 8 : _context.t0 === 404 ? 13 : _context.t0 === 403 ? 14 : 17;
            break;

          case 8:
            _context.next = 10;
            return resp.json();

          case 10:
            contents = _context.sent;
            releases = contentsToFirmwareReleases(contents);
            return _context.abrupt("return", releases[0]);

          case 13:
            return _context.abrupt("return", undefined);

          case 14:
            if (!(options !== null && options !== void 0 && options.ignoreThrottled)) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", undefined);

          case 16:
            throw new Error("Too many calls to GitHub, try again later");

          case 17:
            throw new Error("unknown status code " + resp.status);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchLatestRelease.apply(this, arguments);
}

function fetchReleaseBinary(_x3, _x4) {
  return _fetchReleaseBinary.apply(this, arguments);
}

function _fetchReleaseBinary() {
  _fetchReleaseBinary = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(slug, version) {
    var _normalizeSlug5, repoPath, downloadUrl, req, firmware;

    return regenerator_default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // we are not using the release api because of CORS.
            _normalizeSlug5 = normalizeSlug(slug), repoPath = _normalizeSlug5.repoPath;
            downloadUrl = "https://raw.githubusercontent.com/" + repoPath + "/main/dist/fw-" + version + ".uf2";
            _context2.next = 4;
            return fetch(downloadUrl, {
              headers: {
                Accept: "application/octet-stream"
              }
            });

          case 4:
            req = _context2.sent;

            if (!(req.status == 200)) {
              _context2.next = 10;
              break;
            }

            _context2.next = 8;
            return req.blob();

          case 8:
            firmware = _context2.sent;
            return _context2.abrupt("return", firmware);

          case 10:
            return _context2.abrupt("return", undefined);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchReleaseBinary.apply(this, arguments);
}

function fetchText(_x5, _x6, _x7, _x8) {
  return _fetchText.apply(this, arguments);
}

function _fetchText() {
  _fetchText = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3(slug, tag, path, mimeType) {
    var _normalizeSlug6, repoPath, folder, downloadUrl, req, src;

    return regenerator_default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _normalizeSlug6 = normalizeSlug(slug), repoPath = _normalizeSlug6.repoPath, folder = _normalizeSlug6.folder;
            downloadUrl = "https://raw.githubusercontent.com/" + repoPath + "/" + tag + "/" + (folder ? folder + "/" : "") + path;
            _context3.next = 4;
            return fetch(downloadUrl, {
              headers: {
                Accept: mimeType
              }
            });

          case 4:
            req = _context3.sent;

            if (!(req.status == 200)) {
              _context3.next = 10;
              break;
            }

            _context3.next = 8;
            return req.text();

          case 8:
            src = _context3.sent;
            return _context3.abrupt("return", src);

          case 10:
            return _context3.abrupt("return", undefined);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _fetchText.apply(this, arguments);
}

function useFetchApi(path, options) {
  var res = useFetch("" + ROOT + path);
  if (res.status !== undefined) switch (res.status) {
    case 200:
    case 201:
    case 202:
    case 203:
    case 204:
      break;

    case 404:
      // unknow repo or no access
      res.response = undefined;
      break;

    case 403:
      // throttled
      if (options !== null && options !== void 0 && options.ignoreThrottled) {
        res.response = undefined;
        return res;
      } else throw new Error("Too many calls to GitHub, try again later");

    default:
      console.log("unknown status", res);
      throw new Error("Unknown response from GitHub " + res.status);
  }
  return res;
}

function useFetchJSON(slug, tag, path, mimeType) {
  var _normalizeSlug = normalizeSlug(slug),
      repoPath = _normalizeSlug.repoPath,
      folder = _normalizeSlug.folder;

  var downloadUrl = "https://raw.githubusercontent.com/" + repoPath + "/" + tag + "/" + (folder ? folder + "/" : "") + path;
  return useFetch(downloadUrl, {
    headers: {
      Accept: mimeType
    }
  });
}
function useRepository(slug) {
  var _normalizeSlug2 = normalizeSlug(slug),
      repoPath = _normalizeSlug2.repoPath;

  var path = "repos/" + repoPath;
  var res = useFetchApi(path, {
    ignoreThrottled: true
  });
  return res;
}
function useLatestRelease(slug, options) {
  var _resp$response;

  var resp = useLatestReleases(slug, options);
  return _objectSpread(_objectSpread({}, resp), {}, {
    response: (_resp$response = resp.response) === null || _resp$response === void 0 ? void 0 : _resp$response[0]
  });
}
function useLatestReleases(slug, options) {
  if (!slug) return {
    response: undefined,
    loading: false,
    error: undefined,
    status: undefined
  };

  var _normalizeSlug3 = normalizeSlug(slug),
      repoPath = _normalizeSlug3.repoPath;

  var uri = "repos/" + repoPath + "/contents/dist";
  var res = useFetchApi(uri, _objectSpread(_objectSpread({}, options || {}), {}, {
    ignoreThrottled: true
  }));
  return _objectSpread(_objectSpread({}, res), {}, {
    response: contentsToFirmwareReleases(res.response)
  });
}

/***/ }),

/***/ 82017:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/gatsby-theme-material-ui/index.js
var gatsby_theme_material_ui = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(12265);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(80838);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(85420);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(29114);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(80453);
// EXTERNAL MODULE: ./src/components/github.ts + 2 modules
var github = __webpack_require__(99819);
// EXTERNAL MODULE: ./src/components/GithubRepositoryCardHeader.tsx
var GithubRepositoryCardHeader = __webpack_require__(63037);
;// CONCATENATED MODULE: ./src/components/GithubRepositoryCard.tsx
 // tslint:disable-next-line: no-submodule-imports




function GithubRepositoryCard(props) {
  var slug = props.slug,
      showRelease = props.showRelease,
      showDescription = props.showDescription;

  var _useRepository = (0,github/* useRepository */.Ux)(slug),
      repo = _useRepository.response;

  var description = showDescription && (repo === null || repo === void 0 ? void 0 : repo.description);
  return /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(GithubRepositoryCardHeader/* default */.Z, {
    slug: slug,
    showRelease: showRelease
  }), description && /*#__PURE__*/react.createElement(CardContent/* default */.Z, null, description && /*#__PURE__*/react.createElement(Typography/* default */.Z, null, description)));
}
;// CONCATENATED MODULE: ./src/components/GithubRespositoryList.tsx

var _excluded = ["repos"];



function GithubRepositoryList(props) {
  var repos = props.repos,
      others = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 2
  }, repos.map(function (repo) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      item: true,
      xs: 12,
      key: repo
    }, /*#__PURE__*/react.createElement(GithubRepositoryCard, Object.assign({
      slug: repo
    }, others)));
  }));
}
;// CONCATENATED MODULE: ./src/pages/github.tsx



function Page() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "GitHub Repositories"), /*#__PURE__*/react.createElement("p", null, "Jacdac is Open Source on GitHub. Here is a map to help you find the part you want:"), /*#__PURE__*/react.createElement("h2", null, "Discussions"), /*#__PURE__*/react.createElement("p", null, "Post your questions, bugs, suggestions on the centralized discussions at", " ", /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/microsoft/jacdac/discussions"
  }, "https://github.com/microsoft/jacdac/discussions"), "."), /*#__PURE__*/react.createElement("h2", null, "Specification"), /*#__PURE__*/react.createElement(GithubRepositoryList, {
    repos: ["microsoft/jacdac"],
    showDescription: true
  }), /*#__PURE__*/react.createElement("h2", null, "Module Development"), /*#__PURE__*/react.createElement("h3", null, "Schematics and C SDK"), /*#__PURE__*/react.createElement(GithubRepositoryList, {
    repos: ["microsoft/jacdac-ddk", "microsoft/jacdac-c"],
    showDescription: true
  }), /*#__PURE__*/react.createElement("h3", null, " Embedded Platforms"), /*#__PURE__*/react.createElement(GithubRepositoryList, {
    repos: ["microsoft/jacdac-stm32x0", "microsoft/jacdac-esp32", "microsoft/jacdac-padauk"],
    showDescription: true
  }), /*#__PURE__*/react.createElement("h2", null, "Embedded Firmware"), /*#__PURE__*/react.createElement(GithubRepositoryList, {
    repos: ["microsoft/pxt-jacdac", "microsoft/jacdac-circuitpython"],
    showDescription: true
  }), /*#__PURE__*/react.createElement("h2", null, "Libraries"), /*#__PURE__*/react.createElement(GithubRepositoryList, {
    repos: ["microsoft/jacdac-ts", "microsoft/jacdac-dotnet"],
    showDescription: true
  }), /*#__PURE__*/react.createElement("h2", null, "Integrations"), /*#__PURE__*/react.createElement(GithubRepositoryList, {
    repos: ["microsoft/node-red-contrib-jacdac", "microsoft/jupyter-jacdac"],
    showDescription: true
  }), /*#__PURE__*/react.createElement("h2", null, "Embedded Tools"), /*#__PURE__*/react.createElement(GithubRepositoryList, {
    repos: ["microsoft/pxt-jacdac/tools/multitool", "microsoft/pxt-jacdac/tools/hid-events", "microsoft/pxt-jacdac/devices/microbit"],
    showDescription: true
  }), /*#__PURE__*/react.createElement("h2", null, " Documentation"), /*#__PURE__*/react.createElement(GithubRepositoryList, {
    repos: ["microsoft/jacdac-docs"],
    showDescription: true
  }), /*#__PURE__*/react.createElement("h2", null, " Microsoft Open Source Code of Conduct"), /*#__PURE__*/react.createElement("p", null, "This project is hosted at", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    href: "https://github.com/microsoft/jacdac-docs"
  }, "https://github.com/microsoft/jacdac-docs"), ". This project has adopted the", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    href: "https://opensource.microsoft.com/codeofconduct/"
  }, "Microsoft Open Source Code of Conduct"), "."), /*#__PURE__*/react.createElement("h3", null, "Resources"), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    href: "https://opensource.microsoft.com/codeofconduct/"
  }, "Microsoft Open Source Code of Conduct")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    href: "https://opensource.microsoft.com/codeofconduct/faq/"
  }, "Microsoft Code of Conduct FAQ")), /*#__PURE__*/react.createElement("li", null, "Contact", " ", /*#__PURE__*/react.createElement(gatsby_theme_material_ui.Link, {
    href: "mailto:opencode@microsoft.com"
  }, "opencode@microsoft.com"), " ", "with questions or concerns")));
}

/***/ })

}]);