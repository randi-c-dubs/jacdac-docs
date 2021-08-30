(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7724],{

/***/ 33962:
/***/ (function(module) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(arr);
  }

  return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
  if (!obj || toStr.call(obj) !== '[object Object]') {
    return false;
  }

  var hasOwnConstructor = hasOwn.call(obj, 'constructor');
  var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf'); // Not own constructor property must be Object

  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  } // Own properties are enumerated firstly, so to speed up,
  // if last one is own, then all properties are own.


  var key;

  for (key in obj) {
    /**/
  }

  return typeof key === 'undefined' || hasOwn.call(obj, key);
}; // If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target


var setProperty = function setProperty(target, options) {
  if (defineProperty && options.name === '__proto__') {
    defineProperty(target, options.name, {
      enumerable: true,
      configurable: true,
      value: options.newValue,
      writable: true
    });
  } else {
    target[options.name] = options.newValue;
  }
}; // Return undefined instead of __proto__ if '__proto__' is not an own property


var getProperty = function getProperty(obj, name) {
  if (name === '__proto__') {
    if (!hasOwn.call(obj, name)) {
      return void 0;
    } else if (gOPD) {
      // In early versions of node, obj['__proto__'] is buggy when obj has
      // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
      return gOPD(obj, name).value;
    }
  }

  return obj[name];
};

module.exports = function extend() {
  var options, name, src, copy, copyIsArray, clone;
  var target = arguments[0];
  var i = 1;
  var length = arguments.length;
  var deep = false; // Handle a deep copy situation

  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {}; // skip the boolean and the target

    i = 2;
  }

  if (target == null || typeof target !== 'object' && typeof target !== 'function') {
    target = {};
  }

  for (; i < length; ++i) {
    options = arguments[i]; // Only deal with non-null/undefined values

    if (options != null) {
      // Extend the base object
      for (name in options) {
        src = getProperty(target, name);
        copy = getProperty(options, name); // Prevent never-ending loop

        if (target !== copy) {
          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && isPlainObject(src) ? src : {};
            } // Never move original objects, clone them


            setProperty(target, {
              name: name,
              newValue: extend(deep, clone, copy)
            }); // Don't bring in undefined values
          } else if (typeof copy !== 'undefined') {
            setProperty(target, {
              name: name,
              newValue: copy
            });
          }
        }
      }
    }
  } // Return the modified object


  return target;
};

/***/ }),

/***/ 26650:
/***/ (function(module) {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/; // declaration

var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/; // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill

var TRIM_REGEX = /^\s+|\s+$/g; // strings

var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = ''; // types

var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';
/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */

module.exports = function (style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];
  options = options || {};
  /**
   * Positional.
   */

  var lineno = 1;
  var column = 1;
  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */

  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }
  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */


  function position() {
    var start = {
      line: lineno,
      column: column
    };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }
  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */


  function Position(start) {
    this.start = start;
    this.end = {
      line: lineno,
      column: column
    };
    this.source = options.source;
  }
  /**
   * Non-enumerable source string.
   */


  Position.prototype.content = style;
  var errorsList = [];
  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */

  function error(msg) {
    var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }
  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */


  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }
  /**
   * Parse whitespace.
   */


  function whitespace() {
    match(WHITESPACE_REGEX);
  }
  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */


  function comments(rules) {
    var c;
    rules = rules || [];

    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }
    }

    return rules;
  }
  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */


  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
    var i = 2;

    while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
      ++i;
    }

    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;
    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }
  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */


  function declaration() {
    var pos = position(); // prop

    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment(); // :

    if (!match(COLON_REGEX)) return error("property missing ':'"); // val

    var val = match(VALUE_REGEX);
    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
    }); // ;

    match(SEMICOLON_REGEX);
    return ret;
  }
  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */


  function declarations() {
    var decls = [];
    comments(decls); // declarations

    var decl;

    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};
/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */


function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}

/***/ }),

/***/ 99458:
/***/ (function(module) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
module.exports = function isBuffer(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};

/***/ }),

/***/ 82066:
/***/ (function(module) {

"use strict";


var encodeCache = {}; // Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//

function getEncodeCache(exclude) {
  var i,
      ch,
      cache = encodeCache[exclude];

  if (cache) {
    return cache;
  }

  cache = encodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);

    if (/^[0-9a-z]$/i.test(ch)) {
      // always allow unencoded alphanumeric characters
      cache.push(ch);
    } else {
      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
    }
  }

  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }

  return cache;
} // Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//


function encode(string, exclude, keepEscaped) {
  var i,
      l,
      code,
      nextCode,
      cache,
      result = '';

  if (typeof exclude !== 'string') {
    // encode(string, keepEscaped)
    keepEscaped = exclude;
    exclude = encode.defaultChars;
  }

  if (typeof keepEscaped === 'undefined') {
    keepEscaped = true;
  }

  cache = getEncodeCache(exclude);

  for (i = 0, l = string.length; i < l; i++) {
    code = string.charCodeAt(i);

    if (keepEscaped && code === 0x25
    /* % */
    && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }

    if (code < 128) {
      result += cache[code];
      continue;
    }

    if (code >= 0xD800 && code <= 0xDFFF) {
      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);

        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }

      result += '%EF%BF%BD';
      continue;
    }

    result += encodeURIComponent(string[i]);
  }

  return result;
}

encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";
module.exports = encode;

/***/ }),

/***/ 7724:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ react_markdown; },
  "uriTransformer": function() { return /* reexport */ uriTransformer; }
});

// NAMESPACE OBJECT: ./node_modules/react-markdown/node_modules/micromark/lib/constructs.js
var constructs_namespaceObject = {};
__webpack_require__.r(constructs_namespaceObject);
__webpack_require__.d(constructs_namespaceObject, {
  "attentionMarkers": function() { return attentionMarkers; },
  "contentInitial": function() { return contentInitial; },
  "disable": function() { return disable; },
  "document": function() { return constructs_document; },
  "flow": function() { return constructs_flow; },
  "flowInitial": function() { return flowInitial; },
  "insideSpan": function() { return insideSpan; },
  "string": function() { return constructs_string; },
  "text": function() { return constructs_text; }
});

// NAMESPACE OBJECT: ./node_modules/react-markdown/node_modules/property-information/lib/util/types.js
var types_namespaceObject = {};
__webpack_require__.r(types_namespaceObject);
__webpack_require__.d(types_namespaceObject, {
  "boolean": function() { return types_boolean; },
  "booleanish": function() { return booleanish; },
  "commaOrSpaceSeparated": function() { return commaOrSpaceSeparated; },
  "commaSeparated": function() { return commaSeparated; },
  "number": function() { return number; },
  "overloadedBoolean": function() { return overloadedBoolean; },
  "spaceSeparated": function() { return spaceSeparated; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/is-buffer/index.js
var is_buffer = __webpack_require__(99458);
var is_buffer_default = /*#__PURE__*/__webpack_require__.n(is_buffer);
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/unist-util-stringify-position/index.js
var own = {}.hasOwnProperty;
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 */

/**
 * Stringify one point, a position (start and end points), or a node’s
 * positional information.
 *
 * @param {Node|Position|Point} [value]
 * @returns {string}
 */

function stringifyPosition(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return '';
  } // Node.


  if (own.call(value, 'position') || own.call(value, 'type')) {
    // @ts-ignore looks like a node.
    return position(value.position);
  } // Position.


  if (own.call(value, 'start') || own.call(value, 'end')) {
    // @ts-ignore looks like a position.
    return position(value);
  } // Point.


  if (own.call(value, 'line') || own.call(value, 'column')) {
    // @ts-ignore looks like a point.
    return point(value);
  } // ?


  return '';
}
/**
 * @param {Point} point
 * @returns {string}
 */

function point(point) {
  return index(point && point.line) + ':' + index(point && point.column);
}
/**
 * @param {Position} pos
 * @returns {string}
 */


function position(pos) {
  return point(pos && pos.start) + '-' + point(pos && pos.end);
}
/**
 * @param {number} value
 * @returns {number}
 */


function index(value) {
  return value && typeof value === 'number' ? value : 1;
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/vfile-message/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 */

class VFileMessage extends Error {
  /**
   * Constructor of a message for `reason` at `place` from `origin`.
   * When an error is passed in as `reason`, copies the `stack`.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   */
  constructor(reason, place, origin) {
    /** @type {[string?, string?]} */
    var parts = [null, null];
    /** @type {Position} */

    var position = {
      start: {
        line: null,
        column: null
      },
      end: {
        line: null,
        column: null
      }
    };
    /** @type {number} */

    var index;
    super();

    if (typeof place === 'string') {
      origin = place;
      place = null;
    }

    if (typeof origin === 'string') {
      index = origin.indexOf(':');

      if (index === -1) {
        parts[1] = origin;
      } else {
        parts[0] = origin.slice(0, index);
        parts[1] = origin.slice(index + 1);
      }
    }

    if (place) {
      // Node.
      if ('type' in place || 'position' in place) {
        if (place.position) {
          position = place.position;
        }
      } // Position.
      else if ('start' in place || 'end' in place) {
        // @ts-ignore Looks like a position.
        position = place;
      } // Point.
      else if ('line' in place || 'column' in place) {
        // @ts-ignore Looks like a point.
        position.start = place;
      }
    } // Fields from `Error`


    this.name = stringifyPosition(place) || '1:1';
    this.message = typeof reason === 'object' ? reason.message : reason;
    this.stack = typeof reason === 'object' ? reason.stack : '';
    /**
     * Reason for message.
     * @type {string}
     */

    this.reason = this.message;
    /**
     * Starting line of error.
     * @type {number?}
     */

    this.line = position.start.line;
    /**
     * Starting column of error.
     * @type {number?}
     */

    this.column = position.start.column;
    /**
     * Namespace of warning.
     * @type {string?}
     */

    this.source = parts[0];
    /**
     * Category of message.
     * @type {string?}
     */

    this.ruleId = parts[1];
    /**
     * Full range information, when available.
     * Has start and end properties, both set to an object with line and column, set to number?.
     * @type {Position?}
     */

    this.position = position; // The following fields are “well known”.
    // Not standard.
    // Feel free to add other non-standard fields to your messages.

    /* eslint-disable no-unused-expressions */

    /**
     * You may add a file property with a path of a file (used throughout the VFile ecosystem).
     * @type {string?}
     */

    this.file;
    /**
     * If true, marks associated file as no longer processable.
     * @type {boolean?}
     */

    this.fatal;
    /**
     * You may add a url property with a link to documentation for the message.
     * @type {string?}
     */

    this.url;
    /**
     * You may add a note property with a long form description of the message (supported by vfile-reporter).
     * @type {string?}
     */

    this.note;
    /* eslint-enable no-unused-expressions */
  }

}
VFileMessage.prototype.file = '';
VFileMessage.prototype.name = '';
VFileMessage.prototype.reason = '';
VFileMessage.prototype.message = '';
VFileMessage.prototype.stack = '';
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/vfile/lib/minpath.browser.js
// A derivative work based on:
// <https://github.com/browserify/path-browserify>.
// Which is licensed:
//
// MIT License
//
// Copyright (c) 2013 James Halliday
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// A derivative work based on:
//
// Parts of that are extracted from Node’s internal `path` module:
// <https://github.com/nodejs/node/blob/master/lib/path.js>.
// Which is licensed:
//
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var path = {
  basename,
  dirname,
  extname,
  join,
  sep: '/'
};
/* eslint-disable max-depth, complexity */

/**
 * @param {string} path
 * @param {string} [ext]
 * @returns {string}
 */

function basename(path, ext) {
  if (ext !== undefined && typeof ext !== 'string') {
    throw new TypeError('"ext" argument must be a string');
  }

  assertPath(path);
  var start = 0;
  var end = -1;
  var index = path.length;
  /** @type {boolean|undefined} */

  var seenNonSlash;

  if (ext === undefined || ext.length === 0 || ext.length > path.length) {
    while (index--) {
      if (path.charCodeAt(index) === 47
      /* `/` */
      ) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now.
        if (seenNonSlash) {
          start = index + 1;
          break;
        }
      } else if (end < 0) {
        // We saw the first non-path separator, mark this as the end of our
        // path component.
        seenNonSlash = true;
        end = index + 1;
      }
    }

    return end < 0 ? '' : path.slice(start, end);
  }

  if (ext === path) {
    return '';
  }

  var firstNonSlashEnd = -1;
  var extIndex = ext.length - 1;

  while (index--) {
    if (path.charCodeAt(index) === 47
    /* `/` */
    ) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now.
      if (seenNonSlash) {
        start = index + 1;
        break;
      }
    } else {
      if (firstNonSlashEnd < 0) {
        // We saw the first non-path separator, remember this index in case
        // we need it if the extension ends up not matching.
        seenNonSlash = true;
        firstNonSlashEnd = index + 1;
      }

      if (extIndex > -1) {
        // Try to match the explicit extension.
        if (path.charCodeAt(index) === ext.charCodeAt(extIndex--)) {
          if (extIndex < 0) {
            // We matched the extension, so mark this as the end of our path
            // component
            end = index;
          }
        } else {
          // Extension does not match, so our result is the entire path
          // component
          extIndex = -1;
          end = firstNonSlashEnd;
        }
      }
    }
  }

  if (start === end) {
    end = firstNonSlashEnd;
  } else if (end < 0) {
    end = path.length;
  }

  return path.slice(start, end);
}
/**
 * @param {string} path
 * @returns {string}
 */


function dirname(path) {
  assertPath(path);

  if (path.length === 0) {
    return '.';
  }

  var end = -1;
  var index = path.length;
  /** @type {boolean|undefined} */

  var unmatchedSlash; // Prefix `--` is important to not run on `0`.

  while (--index) {
    if (path.charCodeAt(index) === 47
    /* `/` */
    ) {
      if (unmatchedSlash) {
        end = index;
        break;
      }
    } else if (!unmatchedSlash) {
      // We saw the first non-path separator
      unmatchedSlash = true;
    }
  }

  return end < 0 ? path.charCodeAt(0) === 47
  /* `/` */
  ? '/' : '.' : end === 1 && path.charCodeAt(0) === 47
  /* `/` */
  ? '//' : path.slice(0, end);
}
/**
 * @param {string} path
 * @returns {string}
 */


function extname(path) {
  assertPath(path);
  var index = path.length;
  var end = -1;
  var startPart = 0;
  var startDot = -1; // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find.

  var preDotState = 0;
  /** @type {boolean|undefined} */

  var unmatchedSlash;

  while (index--) {
    var code = path.charCodeAt(index);

    if (code === 47
    /* `/` */
    ) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now.
      if (unmatchedSlash) {
        startPart = index + 1;
        break;
      }

      continue;
    }

    if (end < 0) {
      // We saw the first non-path separator, mark this as the end of our
      // extension.
      unmatchedSlash = true;
      end = index + 1;
    }

    if (code === 46
    /* `.` */
    ) {
      // If this is our first dot, mark it as the start of our extension.
      if (startDot < 0) {
        startDot = index;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot > -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension.
      preDotState = -1;
    }
  }

  if (startDot < 0 || end < 0 || // We saw a non-dot character immediately before the dot.
  preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }

  return path.slice(startDot, end);
}
/**
 * @param {Array.<string>} segments
 * @returns {string}
 */


function join() {
  var index = -1;
  /** @type {string|undefined} */

  var joined;

  for (var _len = arguments.length, segments = new Array(_len), _key = 0; _key < _len; _key++) {
    segments[_key] = arguments[_key];
  }

  while (++index < segments.length) {
    assertPath(segments[index]);

    if (segments[index]) {
      joined = joined === undefined ? segments[index] : joined + '/' + segments[index];
    }
  }

  return joined === undefined ? '.' : normalize(joined);
}
/**
 * Note: `normalize` is not exposed as `path.normalize`, so some code is
 * manually removed from it.
 *
 * @param {string} path
 * @returns {string}
 */


function normalize(path) {
  assertPath(path);
  var absolute = path.charCodeAt(0) === 47;
  /* `/` */
  // Normalize the path according to POSIX rules.

  var value = normalizeString(path, !absolute);

  if (value.length === 0 && !absolute) {
    value = '.';
  }

  if (value.length > 0 && path.charCodeAt(path.length - 1) === 47
  /* / */
  ) {
    value += '/';
  }

  return absolute ? '/' + value : value;
}
/**
 * Resolve `.` and `..` elements in a path with directory names.
 *
 * @param {string} path
 * @param {boolean} allowAboveRoot
 * @returns {string}
 */


function normalizeString(path, allowAboveRoot) {
  var result = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var index = -1;
  /** @type {number|undefined} */

  var code;
  /** @type {number} */

  var lastSlashIndex;

  while (++index <= path.length) {
    if (index < path.length) {
      code = path.charCodeAt(index);
    } else if (code === 47
    /* `/` */
    ) {
      break;
    } else {
      code = 47;
      /* `/` */
    }

    if (code === 47
    /* `/` */
    ) {
      if (lastSlash === index - 1 || dots === 1) {// Empty.
      } else if (lastSlash !== index - 1 && dots === 2) {
        if (result.length < 2 || lastSegmentLength !== 2 || result.charCodeAt(result.length - 1) !== 46
        /* `.` */
        || result.charCodeAt(result.length - 2) !== 46
        /* `.` */
        ) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf('/');

            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = '';
                lastSegmentLength = 0;
              } else {
                result = result.slice(0, lastSlashIndex);
                lastSegmentLength = result.length - 1 - result.lastIndexOf('/');
              }

              lastSlash = index;
              dots = 0;
              continue;
            }
          } else if (result.length > 0) {
            result = '';
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }

        if (allowAboveRoot) {
          result = result.length > 0 ? result + '/..' : '..';
          lastSegmentLength = 2;
        }
      } else {
        if (result.length > 0) {
          result += '/' + path.slice(lastSlash + 1, index);
        } else {
          result = path.slice(lastSlash + 1, index);
        }

        lastSegmentLength = index - lastSlash - 1;
      }

      lastSlash = index;
      dots = 0;
    } else if (code === 46
    /* `.` */
    && dots > -1) {
      dots++;
    } else {
      dots = -1;
    }
  }

  return result;
}
/**
 * @param {string} path
 */


function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}
/* eslint-enable max-depth, complexity */
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/vfile/lib/minproc.browser.js
// Somewhat based on:
// <https://github.com/defunctzombie/node-process/blob/master/browser.js>.
// But I don’t think one tiny line of code can be copyrighted. 😅
var proc = {
  cwd
};

function cwd() {
  return '/';
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/vfile/lib/minurl.shared.js
/**
 * @typedef URL
 * @property {string} hash
 * @property {string} host
 * @property {string} hostname
 * @property {string} href
 * @property {string} origin
 * @property {string} password
 * @property {string} pathname
 * @property {string} port
 * @property {string} protocol
 * @property {string} search
 * @property {any} searchParams
 * @property {string} username
 * @property {() => string} toString
 * @property {() => string} toJSON
 */

/**
 * @param {unknown} fileURLOrPath
 * @returns {fileURLOrPath is URL}
 */
// From: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js#L1501>
function isUrl(fileURLOrPath) {
  return fileURLOrPath !== null && typeof fileURLOrPath === 'object' && // @ts-expect-error: indexable.
  fileURLOrPath.href && // @ts-expect-error: indexable.
  fileURLOrPath.origin;
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/vfile/lib/minurl.browser.js
/// <reference lib="dom" />

 // See: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js>

/**
 * @param {string|URL} path
 */

function urlToPath(path) {
  if (typeof path === 'string') {
    path = new URL(path);
  } else if (!isUrl(path)) {
    /** @type {NodeJS.ErrnoException} */
    var error = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + path + '`');
    error.code = 'ERR_INVALID_ARG_TYPE';
    throw error;
  }

  if (path.protocol !== 'file:') {
    /** @type {NodeJS.ErrnoException} */
    var _error = new TypeError('The URL must be of scheme file');

    _error.code = 'ERR_INVALID_URL_SCHEME';
    throw _error;
  }

  return getPathFromURLPosix(path);
}
/**
 * @param {URL} url
 */

function getPathFromURLPosix(url) {
  if (url.hostname !== '') {
    /** @type {NodeJS.ErrnoException} */
    var error = new TypeError('File URL host must be "localhost" or empty on darwin');
    error.code = 'ERR_INVALID_FILE_URL_HOST';
    throw error;
  }

  var pathname = url.pathname;
  var index = -1;

  while (++index < pathname.length) {
    if (pathname.charCodeAt(index) === 37
    /* `%` */
    && pathname.charCodeAt(index + 1) === 50
    /* `2` */
    ) {
      var third = pathname.charCodeAt(index + 2);

      if (third === 70
      /* `F` */
      || third === 102
      /* `f` */
      ) {
        /** @type {NodeJS.ErrnoException} */
        var _error2 = new TypeError('File URL path must not include encoded / characters');

        _error2.code = 'ERR_INVALID_FILE_URL_PATH';
        throw _error2;
      }
    }
  }

  return decodeURIComponent(pathname);
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/vfile/lib/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 * @typedef {import('./minurl.shared.js').URL} URL
 *
 * @typedef {'ascii'|'utf8'|'utf-8'|'utf16le'|'ucs2'|'ucs-2'|'base64'|'latin1'|'binary'|'hex'} BufferEncoding
 *   Encodings supported by the buffer class.
 *   This is a copy of the typing from Node, copied to prevent Node globals from
 *   being needed.
 *   Copied from: <https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a2bc1d8/types/node/globals.d.ts#L174>
 *
 * @typedef {string|Uint8Array} VFileValue
 *   Contents of the file.
 *   Can either be text, or a Buffer like structure.
 *   This does not directly use type `Buffer`, because it can also be used in a
 *   browser context.
 *   Instead this leverages `Uint8Array` which is the base type for `Buffer`,
 *   and a native JavaScript construct.
 *
 * @typedef {VFileValue|VFileOptions|VFile|URL} VFileCompatible
 *   Things that can be passed to the constructor.
 *
 * @typedef VFileCoreOptions
 * @property {VFileValue} [value]
 * @property {string} [cwd]
 * @property {Array.<string>} [history]
 * @property {string|URL} [path]
 * @property {string} [basename]
 * @property {string} [stem]
 * @property {string} [extname]
 * @property {string} [dirname]
 * @property {Object.<string, unknown>} [data]
 *
 * @typedef {{[key: string]: unknown} & VFileCoreOptions} VFileOptions
 *   Configuration: a bunch of keys that will be shallow copied over to the new
 *   file.
 *
 * @typedef {Object.<string, unknown>} VFileReporterSettings
 * @typedef {<T = VFileReporterSettings>(files: VFile[], options: T) => string} VFileReporter
 */




 // Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.

var order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
class VFile {
  /**
   * Create a new virtual file.
   *
   * If `options` is `string` or `Buffer`, treats it as `{value: options}`.
   * If `options` is a `VFile`, shallow copies its data over to the new file.
   * All other given fields are set on the newly created `VFile`.
   *
   * Path related properties are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * It’s not possible to set either `dirname` or `extname` without setting
   * either `history`, `path`, `basename`, or `stem` as well.
   *
   * @param {VFileCompatible} [value]
   */
  constructor(value) {
    /** @type {VFileOptions} */
    var options;

    if (!value) {
      options = {};
    } else if (typeof value === 'string' || is_buffer_default()(value)) {
      // @ts-expect-error Looks like a buffer.
      options = {
        value
      };
    } else if (isUrl(value)) {
      options = {
        path: value
      };
    } else {
      // @ts-expect-error Looks like file or options.
      options = value;
    }
    /**
     * Place to store custom information.
     * It’s OK to store custom data directly on the file, moving it to `data`
     * gives a little more privacy.
     * @type {Object.<string, unknown>}
     */


    this.data = {};
    /**
     * List of messages associated with the file.
     * @type {Array.<VFileMessage>}
     */

    this.messages = [];
    /**
     * List of file paths the file moved between.
     * @type {Array.<string>}
     */

    this.history = [];
    /**
     * Base of `path`.
     * Defaults to `process.cwd()` (`/` in browsers).
     * @type {string}
     */

    this.cwd = proc.cwd();
    /* eslint-disable no-unused-expressions */

    /**
     * Raw value.
     * @type {VFileValue}
     */

    this.value; // The below are non-standard, they are “well-known”.
    // As in, used in several tools.

    /**
     * Whether a file was saved to disk.
     * This is used by vfile reporters.
     * @type {boolean}
     */

    this.stored;
    /**
     * Sometimes files have a non-string representation.
     * This can be stored in the `result` field.
     * One example is when turning markdown into React nodes.
     * This is used by unified to store non-string results.
     * @type {unknown}
     */

    this.result;
    /**
     * Sometimes files have a source map associated with them.
     * This can be stored in the `map` field.
     * This should be a `RawSourceMap` type from the `source-map` module.
     * @type {unknown}
     */

    this.map;
    /* eslint-enable no-unused-expressions */
    // Set path related properties in the correct order.

    var index = -1;

    while (++index < order.length) {
      var _prop = order[index]; // Note: we specifically use `in` instead of `hasOwnProperty` to accept
      // `vfile`s too.

      if (_prop in options && options[_prop] !== undefined) {
        // @ts-expect-error: TS is confused by the different types for `history`.
        this[_prop] = _prop === 'history' ? [...options[_prop]] : options[_prop];
      }
    }
    /** @type {string} */


    var prop; // Set non-path related properties.

    for (prop in options) {
      // @ts-expect-error: fine to set other things.
      if (!order.includes(prop)) this[prop] = options[prop];
    }
  }
  /**
   * Access full path (`~/index.min.js`).
   *
   * @returns {string}
   */


  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set full path (`~/index.min.js`).
   * Cannot be nullified.
   *
   * @param {string|URL} path
   */


  set path(path) {
    if (isUrl(path)) {
      path = urlToPath(path);
    }

    assertNonEmpty(path, 'path');

    if (this.path !== path) {
      this.history.push(path);
    }
  }
  /**
   * Access parent path (`~`).
   */


  get dirname() {
    return typeof this.path === 'string' ? path.dirname(this.path) : undefined;
  }
  /**
   * Set parent path (`~`).
   * Cannot be set if there's no `path` yet.
   */


  set dirname(dirname) {
    lib_assertPath(this.basename, 'dirname');
    this.path = path.join(dirname || '', this.basename);
  }
  /**
   * Access basename (including extname) (`index.min.js`).
   */


  get basename() {
    return typeof this.path === 'string' ? path.basename(this.path) : undefined;
  }
  /**
   * Set basename (`index.min.js`).
   * Cannot contain path separators.
   * Cannot be nullified either (use `file.path = file.dirname` instead).
   */


  set basename(basename) {
    assertNonEmpty(basename, 'basename');
    assertPart(basename, 'basename');
    this.path = path.join(this.dirname || '', basename);
  }
  /**
   * Access extname (including dot) (`.js`).
   */


  get extname() {
    return typeof this.path === 'string' ? path.extname(this.path) : undefined;
  }
  /**
   * Set extname (including dot) (`.js`).
   * Cannot be set if there's no `path` yet and cannot contain path separators.
   */


  set extname(extname) {
    assertPart(extname, 'extname');
    lib_assertPath(this.dirname, 'extname');

    if (extname) {
      if (extname.charCodeAt(0) !== 46
      /* `.` */
      ) {
        throw new Error('`extname` must start with `.`');
      }

      if (extname.includes('.', 1)) {
        throw new Error('`extname` cannot contain multiple dots');
      }
    }

    this.path = path.join(this.dirname, this.stem + (extname || ''));
  }
  /**
   * Access stem (w/o extname) (`index.min`).
   */


  get stem() {
    return typeof this.path === 'string' ? path.basename(this.path, this.extname) : undefined;
  }
  /**
   * Set stem (w/o extname) (`index.min`).
   * Cannot be nullified, and cannot contain path separators.
   */


  set stem(stem) {
    assertNonEmpty(stem, 'stem');
    assertPart(stem, 'stem');
    this.path = path.join(this.dirname || '', stem + (this.extname || ''));
  }
  /**
   * Serialize the file.
   *
   * @param {BufferEncoding} [encoding='utf8'] If `file.value` is a buffer, `encoding` is used to serialize buffers.
   * @returns {string}
   */


  toString(encoding) {
    // @ts-expect-error string’s don’t accept the parameter, but buffers do.
    return (this.value || '').toString(encoding);
  }
  /**
   * Create a message and associates it w/ the file.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {VFileMessage}
   */


  message(reason, place, origin) {
    var message = new VFileMessage(reason, place, origin);

    if (this.path) {
      message.name = this.path + ':' + message.name;
      message.file = this.path;
    }

    message.fatal = false;
    this.messages.push(message);
    return message;
  }
  /**
   * Info: create a message, associate it with the file, and mark the fatality
   * as `null`.
   * Calls `message()` internally.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {VFileMessage}
   */


  info(reason, place, origin) {
    var message = this.message(reason, place, origin);
    message.fatal = null;
    return message;
  }
  /**
   * Fail: create a message, associate it with the file, mark the fatality as
   * `true`.
   * Note: fatal errors mean a file is no longer processable.
   * Calls `message()` internally.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {never}
   */


  fail(reason, place, origin) {
    var message = this.message(reason, place, origin);
    message.fatal = true;
    throw message;
  }

}
/**
 * Assert that `part` is not a path (as in, does not contain `path.sep`).
 *
 * @param {string|undefined} part
 * @param {string} name
 * @returns {void}
 */

function assertPart(part, name) {
  if (part && part.includes(path.sep)) {
    throw new Error('`' + name + '` cannot be a path: did not expect `' + path.sep + '`');
  }
}
/**
 * Assert that `part` is not empty.
 *
 * @param {string|undefined} part
 * @param {string} name
 * @returns {asserts part is string}
 */


function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty');
  }
}
/**
 * Assert `path` exists.
 *
 * @param {string|undefined} path
 * @param {string} name
 * @returns {asserts path is string}
 */


function lib_assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too');
  }
}
;// CONCATENATED MODULE: ./node_modules/unified/node_modules/bail/index.js
/**
 * Throw a given error.
 *
 * @param {Error | null | undefined} [error]
 */
function bail(error) {
  if (error) {
    throw error;
  }
}
// EXTERNAL MODULE: ./node_modules/extend/index.js
var extend = __webpack_require__(33962);
var extend_default = /*#__PURE__*/__webpack_require__.n(extend);
;// CONCATENATED MODULE: ./node_modules/unified/node_modules/is-plain-obj/index.js
function isPlainObject(value) {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
;// CONCATENATED MODULE: ./node_modules/unified/node_modules/trough/index.js
/**
 * @typedef {(error?: Error|null|undefined, ...output: any[]) => void} Callback
 * @typedef {(...input: any[]) => any} Middleware
 *
 * @typedef {(...input: any[]) => void} Run Call all middleware.
 * @typedef {(fn: Middleware) => Pipeline} Use Add `fn` (middleware) to the list.
 * @typedef {{run: Run, use: Use}} Pipeline
 */

/**
 * Create new middleware.
 *
 * @returns {Pipeline}
 */
function trough() {
  /** @type {Middleware[]} */
  var fns = [];
  /** @type {Pipeline} */

  var pipeline = {
    run,
    use
  };
  return pipeline;
  /** @type {Run} */

  function run() {
    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }

    var middlewareIndex = -1;
    /** @type {Callback} */

    var callback = values.pop();

    if (typeof callback !== 'function') {
      throw new TypeError('Expected function as last argument, not ' + callback);
    }

    next(null, ...values);
    /**
     * Run the next `fn`, or we’re done.
     *
     * @param {Error|null|undefined} error
     * @param {any[]} output
     */

    function next(error) {
      var fn = fns[++middlewareIndex];
      var index = -1;

      if (error) {
        callback(error);
        return;
      } // Copy non-nullish input into values.


      for (var _len2 = arguments.length, output = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        output[_key2 - 1] = arguments[_key2];
      }

      while (++index < values.length) {
        if (output[index] === null || output[index] === undefined) {
          output[index] = values[index];
        }
      } // Save the newly created `output` for the next call.


      values = output; // Next or done.

      if (fn) {
        wrap(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  /** @type {Use} */


  function use(middelware) {
    if (typeof middelware !== 'function') {
      throw new TypeError('Expected `middelware` to be a function, not ' + middelware);
    }

    fns.push(middelware);
    return pipeline;
  }
}
/**
 * Wrap `middleware`.
 * Can be sync or async; return a promise, receive a callback, or return new
 * values and errors.
 *
 * @param {Middleware} middleware
 * @param {Callback} callback
 */

function wrap(middleware, callback) {
  /** @type {boolean} */
  var called;
  return wrapped;
  /**
   * Call `middleware`.
   * @param {any[]} parameters
   * @returns {void}
   */

  function wrapped() {
    for (var _len3 = arguments.length, parameters = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      parameters[_key3] = arguments[_key3];
    }

    var fnExpectsCallback = middleware.length > parameters.length;
    /** @type {any} */

    var result;

    if (fnExpectsCallback) {
      parameters.push(done);
    }

    try {
      result = middleware(...parameters);
    } catch (error) {
      /** @type {Error} */
      var exception = error; // Well, this is quite the pickle.
      // `middleware` received a callback and called it synchronously, but that
      // threw an error.
      // The only thing left to do is to throw the thing instead.

      if (fnExpectsCallback && called) {
        throw exception;
      }

      return done(exception);
    }

    if (!fnExpectsCallback) {
      if (result instanceof Promise) {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  /**
   * Call `callback`, only once.
   * @type {Callback}
   */


  function done(error) {
    if (!called) {
      called = true;

      for (var _len4 = arguments.length, output = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        output[_key4 - 1] = arguments[_key4];
      }

      callback(error, ...output);
    }
  }
  /**
   * Call `done` with one value.
   *
   * @param {any} [value]
   */


  function then(value) {
    done(null, value);
  }
}
;// CONCATENATED MODULE: ./node_modules/unified/node_modules/unist-util-stringify-position/index.js
var unist_util_stringify_position_own = {}.hasOwnProperty;
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 */

/**
 * Stringify one point, a position (start and end points), or a node’s
 * positional information.
 *
 * @param {Node|Position|Point} [value]
 * @returns {string}
 */

function unist_util_stringify_position_stringifyPosition(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return '';
  } // Node.


  if (unist_util_stringify_position_own.call(value, 'position') || unist_util_stringify_position_own.call(value, 'type')) {
    // @ts-ignore looks like a node.
    return unist_util_stringify_position_position(value.position);
  } // Position.


  if (unist_util_stringify_position_own.call(value, 'start') || unist_util_stringify_position_own.call(value, 'end')) {
    // @ts-ignore looks like a position.
    return unist_util_stringify_position_position(value);
  } // Point.


  if (unist_util_stringify_position_own.call(value, 'line') || unist_util_stringify_position_own.call(value, 'column')) {
    // @ts-ignore looks like a point.
    return unist_util_stringify_position_point(value);
  } // ?


  return '';
}
/**
 * @param {Point} point
 * @returns {string}
 */

function unist_util_stringify_position_point(point) {
  return unist_util_stringify_position_index(point && point.line) + ':' + unist_util_stringify_position_index(point && point.column);
}
/**
 * @param {Position} pos
 * @returns {string}
 */


function unist_util_stringify_position_position(pos) {
  return unist_util_stringify_position_point(pos && pos.start) + '-' + unist_util_stringify_position_point(pos && pos.end);
}
/**
 * @param {number} value
 * @returns {number}
 */


function unist_util_stringify_position_index(value) {
  return value && typeof value === 'number' ? value : 1;
}
;// CONCATENATED MODULE: ./node_modules/unified/node_modules/vfile-message/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 */

class vfile_message_VFileMessage extends Error {
  /**
   * Constructor of a message for `reason` at `place` from `origin`.
   * When an error is passed in as `reason`, copies the `stack`.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   */
  constructor(reason, place, origin) {
    /** @type {[string?, string?]} */
    var parts = [null, null];
    /** @type {Position} */

    var position = {
      start: {
        line: null,
        column: null
      },
      end: {
        line: null,
        column: null
      }
    };
    /** @type {number} */

    var index;
    super();

    if (typeof place === 'string') {
      origin = place;
      place = null;
    }

    if (typeof origin === 'string') {
      index = origin.indexOf(':');

      if (index === -1) {
        parts[1] = origin;
      } else {
        parts[0] = origin.slice(0, index);
        parts[1] = origin.slice(index + 1);
      }
    }

    if (place) {
      // Node.
      if ('type' in place || 'position' in place) {
        if (place.position) {
          position = place.position;
        }
      } // Position.
      else if ('start' in place || 'end' in place) {
        // @ts-ignore Looks like a position.
        position = place;
      } // Point.
      else if ('line' in place || 'column' in place) {
        // @ts-ignore Looks like a point.
        position.start = place;
      }
    } // Fields from `Error`


    this.name = unist_util_stringify_position_stringifyPosition(place) || '1:1';
    this.message = typeof reason === 'object' ? reason.message : reason;
    this.stack = typeof reason === 'object' ? reason.stack : '';
    /**
     * Reason for message.
     * @type {string}
     */

    this.reason = this.message;
    /**
     * Starting line of error.
     * @type {number?}
     */

    this.line = position.start.line;
    /**
     * Starting column of error.
     * @type {number?}
     */

    this.column = position.start.column;
    /**
     * Namespace of warning.
     * @type {string?}
     */

    this.source = parts[0];
    /**
     * Category of message.
     * @type {string?}
     */

    this.ruleId = parts[1];
    /**
     * Full range information, when available.
     * Has start and end properties, both set to an object with line and column, set to number?.
     * @type {Position?}
     */

    this.position = position; // The following fields are “well known”.
    // Not standard.
    // Feel free to add other non-standard fields to your messages.

    /* eslint-disable no-unused-expressions */

    /**
     * You may add a file property with a path of a file (used throughout the VFile ecosystem).
     * @type {string?}
     */

    this.file;
    /**
     * If true, marks associated file as no longer processable.
     * @type {boolean?}
     */

    this.fatal;
    /**
     * You may add a url property with a link to documentation for the message.
     * @type {string?}
     */

    this.url;
    /**
     * You may add a note property with a long form description of the message (supported by vfile-reporter).
     * @type {string?}
     */

    this.note;
    /* eslint-enable no-unused-expressions */
  }

}
vfile_message_VFileMessage.prototype.file = '';
vfile_message_VFileMessage.prototype.name = '';
vfile_message_VFileMessage.prototype.reason = '';
vfile_message_VFileMessage.prototype.message = '';
vfile_message_VFileMessage.prototype.stack = '';
vfile_message_VFileMessage.prototype.fatal = null;
vfile_message_VFileMessage.prototype.column = null;
vfile_message_VFileMessage.prototype.line = null;
vfile_message_VFileMessage.prototype.source = null;
vfile_message_VFileMessage.prototype.ruleId = null;
vfile_message_VFileMessage.prototype.position = null;
;// CONCATENATED MODULE: ./node_modules/unified/node_modules/vfile/lib/minpath.browser.js
// A derivative work based on:
// <https://github.com/browserify/path-browserify>.
// Which is licensed:
//
// MIT License
//
// Copyright (c) 2013 James Halliday
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// A derivative work based on:
//
// Parts of that are extracted from Node’s internal `path` module:
// <https://github.com/nodejs/node/blob/master/lib/path.js>.
// Which is licensed:
//
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var minpath_browser_path = {
  basename: minpath_browser_basename,
  dirname: minpath_browser_dirname,
  extname: minpath_browser_extname,
  join: minpath_browser_join,
  sep: '/'
};
/* eslint-disable max-depth, complexity */

/**
 * @param {string} path
 * @param {string} [ext]
 * @returns {string}
 */

function minpath_browser_basename(path, ext) {
  if (ext !== undefined && typeof ext !== 'string') {
    throw new TypeError('"ext" argument must be a string');
  }

  minpath_browser_assertPath(path);
  var start = 0;
  var end = -1;
  var index = path.length;
  /** @type {boolean|undefined} */

  var seenNonSlash;

  if (ext === undefined || ext.length === 0 || ext.length > path.length) {
    while (index--) {
      if (path.charCodeAt(index) === 47
      /* `/` */
      ) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now.
        if (seenNonSlash) {
          start = index + 1;
          break;
        }
      } else if (end < 0) {
        // We saw the first non-path separator, mark this as the end of our
        // path component.
        seenNonSlash = true;
        end = index + 1;
      }
    }

    return end < 0 ? '' : path.slice(start, end);
  }

  if (ext === path) {
    return '';
  }

  var firstNonSlashEnd = -1;
  var extIndex = ext.length - 1;

  while (index--) {
    if (path.charCodeAt(index) === 47
    /* `/` */
    ) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now.
      if (seenNonSlash) {
        start = index + 1;
        break;
      }
    } else {
      if (firstNonSlashEnd < 0) {
        // We saw the first non-path separator, remember this index in case
        // we need it if the extension ends up not matching.
        seenNonSlash = true;
        firstNonSlashEnd = index + 1;
      }

      if (extIndex > -1) {
        // Try to match the explicit extension.
        if (path.charCodeAt(index) === ext.charCodeAt(extIndex--)) {
          if (extIndex < 0) {
            // We matched the extension, so mark this as the end of our path
            // component
            end = index;
          }
        } else {
          // Extension does not match, so our result is the entire path
          // component
          extIndex = -1;
          end = firstNonSlashEnd;
        }
      }
    }
  }

  if (start === end) {
    end = firstNonSlashEnd;
  } else if (end < 0) {
    end = path.length;
  }

  return path.slice(start, end);
}
/**
 * @param {string} path
 * @returns {string}
 */


function minpath_browser_dirname(path) {
  minpath_browser_assertPath(path);

  if (path.length === 0) {
    return '.';
  }

  var end = -1;
  var index = path.length;
  /** @type {boolean|undefined} */

  var unmatchedSlash; // Prefix `--` is important to not run on `0`.

  while (--index) {
    if (path.charCodeAt(index) === 47
    /* `/` */
    ) {
      if (unmatchedSlash) {
        end = index;
        break;
      }
    } else if (!unmatchedSlash) {
      // We saw the first non-path separator
      unmatchedSlash = true;
    }
  }

  return end < 0 ? path.charCodeAt(0) === 47
  /* `/` */
  ? '/' : '.' : end === 1 && path.charCodeAt(0) === 47
  /* `/` */
  ? '//' : path.slice(0, end);
}
/**
 * @param {string} path
 * @returns {string}
 */


function minpath_browser_extname(path) {
  minpath_browser_assertPath(path);
  var index = path.length;
  var end = -1;
  var startPart = 0;
  var startDot = -1; // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find.

  var preDotState = 0;
  /** @type {boolean|undefined} */

  var unmatchedSlash;

  while (index--) {
    var code = path.charCodeAt(index);

    if (code === 47
    /* `/` */
    ) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now.
      if (unmatchedSlash) {
        startPart = index + 1;
        break;
      }

      continue;
    }

    if (end < 0) {
      // We saw the first non-path separator, mark this as the end of our
      // extension.
      unmatchedSlash = true;
      end = index + 1;
    }

    if (code === 46
    /* `.` */
    ) {
      // If this is our first dot, mark it as the start of our extension.
      if (startDot < 0) {
        startDot = index;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot > -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension.
      preDotState = -1;
    }
  }

  if (startDot < 0 || end < 0 || // We saw a non-dot character immediately before the dot.
  preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }

  return path.slice(startDot, end);
}
/**
 * @param {Array.<string>} segments
 * @returns {string}
 */


function minpath_browser_join() {
  var index = -1;
  /** @type {string|undefined} */

  var joined;

  for (var _len = arguments.length, segments = new Array(_len), _key = 0; _key < _len; _key++) {
    segments[_key] = arguments[_key];
  }

  while (++index < segments.length) {
    minpath_browser_assertPath(segments[index]);

    if (segments[index]) {
      joined = joined === undefined ? segments[index] : joined + '/' + segments[index];
    }
  }

  return joined === undefined ? '.' : minpath_browser_normalize(joined);
}
/**
 * Note: `normalize` is not exposed as `path.normalize`, so some code is
 * manually removed from it.
 *
 * @param {string} path
 * @returns {string}
 */


function minpath_browser_normalize(path) {
  minpath_browser_assertPath(path);
  var absolute = path.charCodeAt(0) === 47;
  /* `/` */
  // Normalize the path according to POSIX rules.

  var value = minpath_browser_normalizeString(path, !absolute);

  if (value.length === 0 && !absolute) {
    value = '.';
  }

  if (value.length > 0 && path.charCodeAt(path.length - 1) === 47
  /* / */
  ) {
    value += '/';
  }

  return absolute ? '/' + value : value;
}
/**
 * Resolve `.` and `..` elements in a path with directory names.
 *
 * @param {string} path
 * @param {boolean} allowAboveRoot
 * @returns {string}
 */


function minpath_browser_normalizeString(path, allowAboveRoot) {
  var result = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var index = -1;
  /** @type {number|undefined} */

  var code;
  /** @type {number} */

  var lastSlashIndex;

  while (++index <= path.length) {
    if (index < path.length) {
      code = path.charCodeAt(index);
    } else if (code === 47
    /* `/` */
    ) {
      break;
    } else {
      code = 47;
      /* `/` */
    }

    if (code === 47
    /* `/` */
    ) {
      if (lastSlash === index - 1 || dots === 1) {// Empty.
      } else if (lastSlash !== index - 1 && dots === 2) {
        if (result.length < 2 || lastSegmentLength !== 2 || result.charCodeAt(result.length - 1) !== 46
        /* `.` */
        || result.charCodeAt(result.length - 2) !== 46
        /* `.` */
        ) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf('/');

            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = '';
                lastSegmentLength = 0;
              } else {
                result = result.slice(0, lastSlashIndex);
                lastSegmentLength = result.length - 1 - result.lastIndexOf('/');
              }

              lastSlash = index;
              dots = 0;
              continue;
            }
          } else if (result.length > 0) {
            result = '';
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }

        if (allowAboveRoot) {
          result = result.length > 0 ? result + '/..' : '..';
          lastSegmentLength = 2;
        }
      } else {
        if (result.length > 0) {
          result += '/' + path.slice(lastSlash + 1, index);
        } else {
          result = path.slice(lastSlash + 1, index);
        }

        lastSegmentLength = index - lastSlash - 1;
      }

      lastSlash = index;
      dots = 0;
    } else if (code === 46
    /* `.` */
    && dots > -1) {
      dots++;
    } else {
      dots = -1;
    }
  }

  return result;
}
/**
 * @param {string} path
 */


function minpath_browser_assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}
/* eslint-enable max-depth, complexity */
;// CONCATENATED MODULE: ./node_modules/unified/node_modules/vfile/lib/minproc.browser.js
// Somewhat based on:
// <https://github.com/defunctzombie/node-process/blob/master/browser.js>.
// But I don’t think one tiny line of code can be copyrighted. 😅
var minproc_browser_proc = {
  cwd: minproc_browser_cwd
};

function minproc_browser_cwd() {
  return '/';
}
;// CONCATENATED MODULE: ./node_modules/unified/node_modules/vfile/lib/minurl.shared.js
/**
 * @typedef URL
 * @property {string} hash
 * @property {string} host
 * @property {string} hostname
 * @property {string} href
 * @property {string} origin
 * @property {string} password
 * @property {string} pathname
 * @property {string} port
 * @property {string} protocol
 * @property {string} search
 * @property {any} searchParams
 * @property {string} username
 * @property {() => string} toString
 * @property {() => string} toJSON
 */

/**
 * @param {unknown} fileURLOrPath
 * @returns {fileURLOrPath is URL}
 */
// From: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js#L1501>
function minurl_shared_isUrl(fileURLOrPath) {
  return fileURLOrPath !== null && typeof fileURLOrPath === 'object' && // @ts-expect-error: indexable.
  fileURLOrPath.href && // @ts-expect-error: indexable.
  fileURLOrPath.origin;
}
;// CONCATENATED MODULE: ./node_modules/unified/node_modules/vfile/lib/minurl.browser.js
/// <reference lib="dom" />

 // See: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js>

/**
 * @param {string|URL} path
 */

function minurl_browser_urlToPath(path) {
  if (typeof path === 'string') {
    path = new URL(path);
  } else if (!minurl_shared_isUrl(path)) {
    /** @type {NodeJS.ErrnoException} */
    var error = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + path + '`');
    error.code = 'ERR_INVALID_ARG_TYPE';
    throw error;
  }

  if (path.protocol !== 'file:') {
    /** @type {NodeJS.ErrnoException} */
    var _error = new TypeError('The URL must be of scheme file');

    _error.code = 'ERR_INVALID_URL_SCHEME';
    throw _error;
  }

  return minurl_browser_getPathFromURLPosix(path);
}
/**
 * @param {URL} url
 */

function minurl_browser_getPathFromURLPosix(url) {
  if (url.hostname !== '') {
    /** @type {NodeJS.ErrnoException} */
    var error = new TypeError('File URL host must be "localhost" or empty on darwin');
    error.code = 'ERR_INVALID_FILE_URL_HOST';
    throw error;
  }

  var pathname = url.pathname;
  var index = -1;

  while (++index < pathname.length) {
    if (pathname.charCodeAt(index) === 37
    /* `%` */
    && pathname.charCodeAt(index + 1) === 50
    /* `2` */
    ) {
      var third = pathname.charCodeAt(index + 2);

      if (third === 70
      /* `F` */
      || third === 102
      /* `f` */
      ) {
        /** @type {NodeJS.ErrnoException} */
        var _error2 = new TypeError('File URL path must not include encoded / characters');

        _error2.code = 'ERR_INVALID_FILE_URL_PATH';
        throw _error2;
      }
    }
  }

  return decodeURIComponent(pathname);
}
;// CONCATENATED MODULE: ./node_modules/unified/node_modules/vfile/lib/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 * @typedef {import('./minurl.shared.js').URL} URL
 *
 * @typedef {'ascii'|'utf8'|'utf-8'|'utf16le'|'ucs2'|'ucs-2'|'base64'|'latin1'|'binary'|'hex'} BufferEncoding
 *   Encodings supported by the buffer class.
 *   This is a copy of the typing from Node, copied to prevent Node globals from
 *   being needed.
 *   Copied from: <https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a2bc1d8/types/node/globals.d.ts#L174>
 *
 * @typedef {string|Uint8Array} VFileValue
 *   Contents of the file.
 *   Can either be text, or a Buffer like structure.
 *   This does not directly use type `Buffer`, because it can also be used in a
 *   browser context.
 *   Instead this leverages `Uint8Array` which is the base type for `Buffer`,
 *   and a native JavaScript construct.
 *
 * @typedef {VFileValue|VFileOptions|VFile|URL} VFileCompatible
 *   Things that can be passed to the constructor.
 *
 * @typedef VFileCoreOptions
 * @property {VFileValue} [value]
 * @property {string} [cwd]
 * @property {Array.<string>} [history]
 * @property {string|URL} [path]
 * @property {string} [basename]
 * @property {string} [stem]
 * @property {string} [extname]
 * @property {string} [dirname]
 * @property {Object.<string, unknown>} [data]
 *
 * @typedef {{[key: string]: unknown} & VFileCoreOptions} VFileOptions
 *   Configuration: a bunch of keys that will be shallow copied over to the new
 *   file.
 *
 * @typedef {Object.<string, unknown>} VFileReporterSettings
 * @typedef {<T = VFileReporterSettings>(files: VFile[], options: T) => string} VFileReporter
 */




 // Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.

var lib_order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
class lib_VFile {
  /**
   * Create a new virtual file.
   *
   * If `options` is `string` or `Buffer`, treats it as `{value: options}`.
   * If `options` is a `VFile`, shallow copies its data over to the new file.
   * All other given fields are set on the newly created `VFile`.
   *
   * Path related properties are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * It’s not possible to set either `dirname` or `extname` without setting
   * either `history`, `path`, `basename`, or `stem` as well.
   *
   * @param {VFileCompatible} [value]
   */
  constructor(value) {
    /** @type {VFileOptions} */
    var options;

    if (!value) {
      options = {};
    } else if (typeof value === 'string' || is_buffer_default()(value)) {
      // @ts-expect-error Looks like a buffer.
      options = {
        value
      };
    } else if (minurl_shared_isUrl(value)) {
      options = {
        path: value
      };
    } else {
      // @ts-expect-error Looks like file or options.
      options = value;
    }
    /**
     * Place to store custom information.
     * It’s OK to store custom data directly on the file, moving it to `data`
     * gives a little more privacy.
     * @type {Object.<string, unknown>}
     */


    this.data = {};
    /**
     * List of messages associated with the file.
     * @type {Array.<VFileMessage>}
     */

    this.messages = [];
    /**
     * List of file paths the file moved between.
     * @type {Array.<string>}
     */

    this.history = [];
    /**
     * Base of `path`.
     * Defaults to `process.cwd()` (`/` in browsers).
     * @type {string}
     */

    this.cwd = minproc_browser_proc.cwd();
    /* eslint-disable no-unused-expressions */

    /**
     * Raw value.
     * @type {VFileValue}
     */

    this.value; // The below are non-standard, they are “well-known”.
    // As in, used in several tools.

    /**
     * Whether a file was saved to disk.
     * This is used by vfile reporters.
     * @type {boolean}
     */

    this.stored;
    /**
     * Sometimes files have a non-string representation.
     * This can be stored in the `result` field.
     * One example is when turning markdown into React nodes.
     * This is used by unified to store non-string results.
     * @type {unknown}
     */

    this.result;
    /**
     * Sometimes files have a source map associated with them.
     * This can be stored in the `map` field.
     * This should be a `RawSourceMap` type from the `source-map` module.
     * @type {unknown}
     */

    this.map;
    /* eslint-enable no-unused-expressions */
    // Set path related properties in the correct order.

    var index = -1;

    while (++index < lib_order.length) {
      var _prop = lib_order[index]; // Note: we specifically use `in` instead of `hasOwnProperty` to accept
      // `vfile`s too.

      if (_prop in options && options[_prop] !== undefined) {
        // @ts-expect-error: TS is confused by the different types for `history`.
        this[_prop] = _prop === 'history' ? [...options[_prop]] : options[_prop];
      }
    }
    /** @type {string} */


    var prop; // Set non-path related properties.

    for (prop in options) {
      // @ts-expect-error: fine to set other things.
      if (!lib_order.includes(prop)) this[prop] = options[prop];
    }
  }
  /**
   * Access full path (`~/index.min.js`).
   *
   * @returns {string}
   */


  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set full path (`~/index.min.js`).
   * Cannot be nullified.
   *
   * @param {string|URL} path
   */


  set path(path) {
    if (minurl_shared_isUrl(path)) {
      path = minurl_browser_urlToPath(path);
    }

    lib_assertNonEmpty(path, 'path');

    if (this.path !== path) {
      this.history.push(path);
    }
  }
  /**
   * Access parent path (`~`).
   */


  get dirname() {
    return typeof this.path === 'string' ? minpath_browser_path.dirname(this.path) : undefined;
  }
  /**
   * Set parent path (`~`).
   * Cannot be set if there's no `path` yet.
   */


  set dirname(dirname) {
    vfile_lib_assertPath(this.basename, 'dirname');
    this.path = minpath_browser_path.join(dirname || '', this.basename);
  }
  /**
   * Access basename (including extname) (`index.min.js`).
   */


  get basename() {
    return typeof this.path === 'string' ? minpath_browser_path.basename(this.path) : undefined;
  }
  /**
   * Set basename (`index.min.js`).
   * Cannot contain path separators.
   * Cannot be nullified either (use `file.path = file.dirname` instead).
   */


  set basename(basename) {
    lib_assertNonEmpty(basename, 'basename');
    lib_assertPart(basename, 'basename');
    this.path = minpath_browser_path.join(this.dirname || '', basename);
  }
  /**
   * Access extname (including dot) (`.js`).
   */


  get extname() {
    return typeof this.path === 'string' ? minpath_browser_path.extname(this.path) : undefined;
  }
  /**
   * Set extname (including dot) (`.js`).
   * Cannot be set if there's no `path` yet and cannot contain path separators.
   */


  set extname(extname) {
    lib_assertPart(extname, 'extname');
    vfile_lib_assertPath(this.dirname, 'extname');

    if (extname) {
      if (extname.charCodeAt(0) !== 46
      /* `.` */
      ) {
        throw new Error('`extname` must start with `.`');
      }

      if (extname.includes('.', 1)) {
        throw new Error('`extname` cannot contain multiple dots');
      }
    }

    this.path = minpath_browser_path.join(this.dirname, this.stem + (extname || ''));
  }
  /**
   * Access stem (w/o extname) (`index.min`).
   */


  get stem() {
    return typeof this.path === 'string' ? minpath_browser_path.basename(this.path, this.extname) : undefined;
  }
  /**
   * Set stem (w/o extname) (`index.min`).
   * Cannot be nullified, and cannot contain path separators.
   */


  set stem(stem) {
    lib_assertNonEmpty(stem, 'stem');
    lib_assertPart(stem, 'stem');
    this.path = minpath_browser_path.join(this.dirname || '', stem + (this.extname || ''));
  }
  /**
   * Serialize the file.
   *
   * @param {BufferEncoding} [encoding='utf8'] If `file.value` is a buffer, `encoding` is used to serialize buffers.
   * @returns {string}
   */


  toString(encoding) {
    // @ts-expect-error string’s don’t accept the parameter, but buffers do.
    return (this.value || '').toString(encoding);
  }
  /**
   * Create a message and associates it w/ the file.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {VFileMessage}
   */


  message(reason, place, origin) {
    var message = new vfile_message_VFileMessage(reason, place, origin);

    if (this.path) {
      message.name = this.path + ':' + message.name;
      message.file = this.path;
    }

    message.fatal = false;
    this.messages.push(message);
    return message;
  }
  /**
   * Info: create a message, associate it with the file, and mark the fatality
   * as `null`.
   * Calls `message()` internally.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {VFileMessage}
   */


  info(reason, place, origin) {
    var message = this.message(reason, place, origin);
    message.fatal = null;
    return message;
  }
  /**
   * Fail: create a message, associate it with the file, mark the fatality as
   * `true`.
   * Note: fatal errors mean a file is no longer processable.
   * Calls `message()` internally.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {never}
   */


  fail(reason, place, origin) {
    var message = this.message(reason, place, origin);
    message.fatal = true;
    throw message;
  }

}
/**
 * Assert that `part` is not a path (as in, does not contain `path.sep`).
 *
 * @param {string|undefined} part
 * @param {string} name
 * @returns {void}
 */

function lib_assertPart(part, name) {
  if (part && part.includes(minpath_browser_path.sep)) {
    throw new Error('`' + name + '` cannot be a path: did not expect `' + minpath_browser_path.sep + '`');
  }
}
/**
 * Assert that `part` is not empty.
 *
 * @param {string|undefined} part
 * @param {string} name
 * @returns {asserts part is string}
 */


function lib_assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty');
  }
}
/**
 * Assert `path` exists.
 *
 * @param {string|undefined} path
 * @param {string} name
 * @returns {asserts path is string}
 */


function vfile_lib_assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too');
  }
}
;// CONCATENATED MODULE: ./node_modules/unified/lib/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('vfile').VFileCompatible} VFileCompatible
 * @typedef {import('vfile').VFileValue} VFileValue
 * @typedef {import('..').Processor} Processor
 * @typedef {import('..').Plugin} Plugin
 * @typedef {import('..').Preset} Preset
 * @typedef {import('..').Pluggable} Pluggable
 * @typedef {import('..').PluggableList} PluggableList
 * @typedef {import('..').Transformer} Transformer
 * @typedef {import('..').Parser} Parser
 * @typedef {import('..').Compiler} Compiler
 * @typedef {import('..').RunCallback} RunCallback
 * @typedef {import('..').ProcessCallback} ProcessCallback
 *
 * @typedef Context
 * @property {Node} tree
 * @property {VFile} file
 */





 // Expose a frozen processor.

var unified = base().freeze();
var lib_own = {}.hasOwnProperty; // Function to create the first processor.

/**
 * @returns {Processor}
 */

function base() {
  var transformers = trough();
  /** @type {Processor['attachers']} */

  var attachers = [];
  /** @type {Record<string, unknown>} */

  var namespace = {};
  /** @type {boolean|undefined} */

  var frozen;
  var freezeIndex = -1; // Data management.
  // @ts-expect-error: overloads are handled.

  processor.data = data;
  processor.Parser = undefined;
  processor.Compiler = undefined; // Lock.

  processor.freeze = freeze; // Plugins.

  processor.attachers = attachers; // @ts-expect-error: overloads are handled.

  processor.use = use; // API.

  processor.parse = parse;
  processor.stringify = stringify; // @ts-expect-error: overloads are handled.

  processor.run = run;
  processor.runSync = runSync; // @ts-expect-error: overloads are handled.

  processor.process = process;
  processor.processSync = processSync; // Expose.

  return processor; // Create a new processor based on the processor in the current scope.

  /** @type {Processor} */

  function processor() {
    var destination = base();
    var index = -1;

    while (++index < attachers.length) {
      destination.use(...attachers[index]);
    }

    destination.data(extend_default()(true, {}, namespace));
    return destination;
  }
  /**
   * @param {string|Record<string, unknown>} [key]
   * @param {unknown} [value]
   * @returns {unknown}
   */


  function data(key, value) {
    if (typeof key === 'string') {
      // Set `key`.
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen);
        namespace[key] = value;
        return processor;
      } // Get `key`.


      return lib_own.call(namespace, key) && namespace[key] || null;
    } // Set space.


    if (key) {
      assertUnfrozen('data', frozen);
      namespace = key;
      return processor;
    } // Get space.


    return namespace;
  }
  /** @type {Processor['freeze']} */


  function freeze() {
    if (frozen) {
      return processor;
    }

    while (++freezeIndex < attachers.length) {
      var [attacher, ...options] = attachers[freezeIndex];

      if (options[0] === false) {
        continue;
      }

      if (options[0] === true) {
        options[1] = undefined;
      }
      /** @type {Transformer|void} */


      var transformer = attacher.call(processor, ...options);

      if (typeof transformer === 'function') {
        transformers.use(transformer);
      }
    }

    frozen = true;
    freezeIndex = Number.POSITIVE_INFINITY;
    return processor;
  }
  /**
   * @param {Pluggable|null|undefined} [value]
   * @param {...unknown} options
   * @returns {Processor}
   */


  function use(value) {
    for (var _len = arguments.length, options = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      options[_key - 1] = arguments[_key];
    }

    /** @type {Record<string, unknown>|undefined} */
    var settings;
    assertUnfrozen('use', frozen);

    if (value === null || value === undefined) {// Empty.
    } else if (typeof value === 'function') {
      addPlugin(value, ...options);
    } else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError('Expected usable value, not `' + value + '`');
    }

    if (settings) {
      namespace.settings = Object.assign(namespace.settings || {}, settings);
    }

    return processor;
    /**
     * @param {import('..').Pluggable<unknown[]>} value
     * @returns {void}
     */

    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value);
      } else if (typeof value === 'object') {
        if (Array.isArray(value)) {
          var [plugin, ..._options] = value;
          addPlugin(plugin, ..._options);
        } else {
          addPreset(value);
        }
      } else {
        throw new TypeError('Expected usable value, not `' + value + '`');
      }
    }
    /**
     * @param {Preset} result
     * @returns {void}
     */


    function addPreset(result) {
      addList(result.plugins);

      if (result.settings) {
        settings = Object.assign(settings || {}, result.settings);
      }
    }
    /**
     * @param {PluggableList|null|undefined} [plugins]
     * @returns {void}
     */


    function addList(plugins) {
      var index = -1;

      if (plugins === null || plugins === undefined) {// Empty.
      } else if (Array.isArray(plugins)) {
        while (++index < plugins.length) {
          var thing = plugins[index];
          add(thing);
        }
      } else {
        throw new TypeError('Expected a list of plugins, not `' + plugins + '`');
      }
    }
    /**
     * @param {Plugin} plugin
     * @param {...unknown} [value]
     * @returns {void}
     */


    function addPlugin(plugin, value) {
      var index = -1;
      /** @type {Processor['attachers'][number]|undefined} */

      var entry;

      while (++index < attachers.length) {
        if (attachers[index][0] === plugin) {
          entry = attachers[index];
          break;
        }
      }

      if (entry) {
        if (isPlainObject(entry[1]) && isPlainObject(value)) {
          value = extend_default()(true, entry[1], value);
        }

        entry[1] = value;
      } else {
        // @ts-expect-error: fine.
        attachers.push([...arguments]);
      }
    }
  }
  /** @type {Processor['parse']} */


  function parse(doc) {
    processor.freeze();
    var file = vfile(doc);
    var Parser = processor.Parser;
    assertParser('parse', Parser);

    if (newable(Parser, 'parse')) {
      // @ts-expect-error: `newable` checks this.
      return new Parser(String(file), file).parse();
    } // @ts-expect-error: `newable` checks this.


    return Parser(String(file), file); // eslint-disable-line new-cap
  }
  /** @type {Processor['stringify']} */


  function stringify(node, doc) {
    processor.freeze();
    var file = vfile(doc);
    var Compiler = processor.Compiler;
    assertCompiler('stringify', Compiler);
    assertNode(node);

    if (newable(Compiler, 'compile')) {
      // @ts-expect-error: `newable` checks this.
      return new Compiler(node, file).compile();
    } // @ts-expect-error: `newable` checks this.


    return Compiler(node, file); // eslint-disable-line new-cap
  }
  /**
   * @param {Node} node
   * @param {VFileCompatible|RunCallback} [doc]
   * @param {RunCallback} [callback]
   * @returns {Promise<Node>|void}
   */


  function run(node, doc, callback) {
    assertNode(node);
    processor.freeze();

    if (!callback && typeof doc === 'function') {
      callback = doc;
      doc = undefined;
    }

    if (!callback) {
      return new Promise(executor);
    }

    executor(null, callback);
    /**
     * @param {null|((node: Node) => void)} resolve
     * @param {(error: Error) => void} reject
     * @returns {void}
     */

    function executor(resolve, reject) {
      // @ts-expect-error: `doc` can’t be a callback anymore, we checked.
      transformers.run(node, vfile(doc), done);
      /**
       * @param {Error|null} error
       * @param {Node} tree
       * @param {VFile} file
       * @returns {void}
       */

      function done(error, tree, file) {
        tree = tree || node;

        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(tree);
        } else {
          // @ts-expect-error: `callback` is defined if `resolve` is not.
          callback(null, tree, file);
        }
      }
    }
  }
  /** @type {Processor['runSync']} */


  function runSync(node, file) {
    /** @type {Node|undefined} */
    var result;
    /** @type {boolean|undefined} */

    var complete;
    processor.run(node, file, done);
    assertDone('runSync', 'run', complete); // @ts-expect-error: we either bailed on an error or have a tree.

    return result;
    /**
     * @param {Error|null} [error]
     * @param {Node} [tree]
     * @returns {void}
     */

    function done(error, tree) {
      bail(error);
      result = tree;
      complete = true;
    }
  }
  /**
   * @param {VFileCompatible} doc
   * @param {ProcessCallback} [callback]
   * @returns {Promise<VFile>|undefined}
   */


  function process(doc, callback) {
    processor.freeze();
    assertParser('process', processor.Parser);
    assertCompiler('process', processor.Compiler);

    if (!callback) {
      return new Promise(executor);
    }

    executor(null, callback);
    /**
     * @param {null|((file: VFile) => void)} resolve
     * @param {(error?: Error|null|undefined) => void} reject
     * @returns {void}
     */

    function executor(resolve, reject) {
      var file = vfile(doc);
      processor.run(processor.parse(file), file, (error, tree, file) => {
        if (error || !tree || !file) {
          done(error);
        } else {
          /** @type {unknown} */
          var result = processor.stringify(tree, file);

          if (result === undefined || result === null) {// Empty.
          } else if (looksLikeAVFileValue(result)) {
            file.value = result;
          } else {
            file.result = result;
          }

          done(error, file);
        }
      });
      /**
       * @param {Error|null|undefined} [error]
       * @param {VFile|undefined} [file]
       * @returns {void}
       */

      function done(error, file) {
        if (error || !file) {
          reject(error);
        } else if (resolve) {
          resolve(file);
        } else {
          // @ts-expect-error: `callback` is defined if `resolve` is not.
          callback(null, file);
        }
      }
    }
  }
  /** @type {Processor['processSync']} */


  function processSync(doc) {
    /** @type {boolean|undefined} */
    var complete;
    processor.freeze();
    assertParser('processSync', processor.Parser);
    assertCompiler('processSync', processor.Compiler);
    var file = vfile(doc);
    processor.process(file, done);
    assertDone('processSync', 'process', complete);
    return file;
    /**
     * @param {Error|null|undefined} [error]
     * @returns {void}
     */

    function done(error) {
      complete = true;
      bail(error);
    }
  }
}
/**
 * Check if `value` is a constructor.
 *
 * @param {unknown} value
 * @param {string} name
 * @returns {boolean}
 */


function newable(value, name) {
  return typeof value === 'function' && // Prototypes do exist.
  // type-coverage:ignore-next-line
  value.prototype && (keys(value.prototype) || name in value.prototype);
}
/**
 * Check if `value` is an object with keys.
 *
 * @param {Record<string, unknown>} value
 * @returns {boolean}
 */


function keys(value) {
  /** @type {string} */
  var key;

  for (key in value) {
    if (lib_own.call(value, key)) {
      return true;
    }
  }

  return false;
}
/**
 * Assert a parser is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Parser}
 */


function assertParser(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `Parser`');
  }
}
/**
 * Assert a compiler is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Compiler}
 */


function assertCompiler(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `Compiler`');
  }
}
/**
 * Assert the processor is not frozen.
 *
 * @param {string} name
 * @param {unknown} frozen
 * @returns {asserts frozen is false}
 */


function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error('Cannot call `' + name + '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.');
  }
}
/**
 * Assert `node` is a unist node.
 *
 * @param {unknown} node
 * @returns {asserts node is Node}
 */


function assertNode(node) {
  // `isPlainObj` unfortunately uses `any` instead of `unknown`.
  // type-coverage:ignore-next-line
  if (!isPlainObject(node) || typeof node.type !== 'string') {
    throw new TypeError('Expected node, got `' + node + '`'); // Fine.
  }
}
/**
 * Assert that `complete` is `true`.
 *
 * @param {string} name
 * @param {string} asyncName
 * @param {unknown} complete
 * @returns {asserts complete is true}
 */


function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
  }
}
/**
 * @param {VFileCompatible} [value]
 * @returns {VFile}
 */


function vfile(value) {
  return looksLikeAVFile(value) ? value : new lib_VFile(value);
}
/**
 * @param {VFileCompatible} [value]
 * @returns {value is VFile}
 */


function looksLikeAVFile(value) {
  return Boolean(value && typeof value === 'object' && 'message' in value && 'messages' in value);
}
/**
 * @param {unknown} [value]
 * @returns {value is VFileValue}
 */


function looksLikeAVFileValue(value) {
  return typeof value === 'string' || is_buffer_default()(value);
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/mdast-util-to-string/index.js
/**
 * @typedef Options
 * @property {boolean} [includeImageAlt=true]
 */

/**
 * Get the text content of a node.
 * Prefer the node’s plain-text fields, otherwise serialize its children,
 * and if the given value is an array, serialize the nodes in it.
 *
 * @param {unknown} node
 * @param {Options} [options]
 * @returns {string}
 */
function mdast_util_to_string_toString(node, options) {
  var {
    includeImageAlt = true
  } = options || {};
  return one(node, includeImageAlt);
}
/**
 * @param {unknown} node
 * @param {boolean} includeImageAlt
 * @returns {string}
 */

function one(node, includeImageAlt) {
  return node && typeof node === 'object' && (node.value || (includeImageAlt ? node.alt : '') || 'children' in node && mdast_util_to_string_all(node.children, includeImageAlt) || Array.isArray(node) && mdast_util_to_string_all(node, includeImageAlt)) || '';
}
/**
 * @param {Array.<unknown>} values
 * @param {boolean} includeImageAlt
 * @returns {string}
 */


function mdast_util_to_string_all(values, includeImageAlt) {
  /** @type {Array.<string>} */
  var result = [];
  var index = -1;

  while (++index < values.length) {
    result[index] = one(values[index], includeImageAlt);
  }

  return result.join('');
}
;// CONCATENATED MODULE: ./node_modules/micromark-util-chunked/index.js
/**
 * Like `Array#splice`, but smarter for giant arrays.
 *
 * `Array#splice` takes all items to be inserted as individual argument which
 * causes a stack overflow in V8 when trying to insert 100k items for instance.
 *
 * Otherwise, this does not return the removed items, and takes `items` as an
 * array instead of rest parameters.
 *
 * @template {unknown} T
 * @param {T[]} list
 * @param {number} start
 * @param {number} remove
 * @param {T[]} items
 * @returns {void}
 */
function splice(list, start, remove, items) {
  var end = list.length;
  var chunkStart = 0;
  /** @type {unknown[]} */

  var parameters; // Make start between zero and `end` (included).

  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }

  remove = remove > 0 ? remove : 0; // No need to chunk the items if there’s only a couple (10k) items.

  if (items.length < 10000) {
    parameters = Array.from(items);
    parameters.unshift(start, remove) // @ts-expect-error Hush, it’s fine.
    ;
    [].splice.apply(list, parameters);
  } else {
    // Delete `remove` items starting from `start`
    if (remove) [].splice.apply(list, [start, remove]); // Insert the items in chunks to not cause stack overflows.

    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 10000);
      parameters.unshift(start, 0) // @ts-expect-error Hush, it’s fine.
      ;
      [].splice.apply(list, parameters);
      chunkStart += 10000;
      start += 10000;
    }
  }
}
/**
 * Append `items` (an array) at the end of `list` (another array).
 * When `list` was empty, returns `items` instead.
 *
 * This prevents a potentially expensive operation when `list` is empty,
 * and adds items in batches to prevent V8 from hanging.
 *
 * @template {unknown} T
 * @param {T[]} list
 * @param {T[]} items
 * @returns {T[]}
 */

function push(list, items) {
  if (list.length > 0) {
    splice(list, list.length, 0, items);
    return list;
  }

  return items;
}
;// CONCATENATED MODULE: ./node_modules/micromark-util-combine-extensions/index.js
/**
 * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */

var micromark_util_combine_extensions_hasOwnProperty = {}.hasOwnProperty;
/**
 * Combine several syntax extensions into one.
 *
 * @param {Extension[]} extensions List of syntax extensions.
 * @returns {NormalizedExtension} A single combined extension.
 */

function combineExtensions(extensions) {
  /** @type {NormalizedExtension} */
  var all = {};
  var index = -1;

  while (++index < extensions.length) {
    syntaxExtension(all, extensions[index]);
  }

  return all;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all Extension to merge into.
 * @param {Extension} extension Extension to merge.
 * @returns {void}
 */

function syntaxExtension(all, extension) {
  /** @type {string} */
  var hook;

  for (hook in extension) {
    var maybe = micromark_util_combine_extensions_hasOwnProperty.call(all, hook) ? all[hook] : undefined;
    var left = maybe || (all[hook] = {});
    var right = extension[hook];
    /** @type {string} */

    var code = void 0;

    for (code in right) {
      if (!micromark_util_combine_extensions_hasOwnProperty.call(left, code)) left[code] = [];
      var value = right[code];
      constructs( // @ts-expect-error Looks like a list.
      left[code], Array.isArray(value) ? value : value ? [value] : []);
    }
  }
}
/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {unknown[]} existing
 * @param {unknown[]} list
 * @returns {void}
 */


function constructs(existing, list) {
  var index = -1;
  /** @type {unknown[]} */

  var before = [];

  while (++index < list.length) {
    // @ts-expect-error Looks like an object.
    ;
    (list[index].add === 'after' ? existing : before).push(list[index]);
  }

  splice(existing, 0, 0, before);
}
/**
 * Combine several HTML extensions into one.
 *
 * @param {HtmlExtension[]} htmlExtensions List of HTML extensions.
 * @returns {HtmlExtension} A single combined extension.
 */


function combineHtmlExtensions(htmlExtensions) {
  /** @type {HtmlExtension} */
  var handlers = {};
  var index = -1;

  while (++index < htmlExtensions.length) {
    htmlExtension(handlers, htmlExtensions[index]);
  }

  return handlers;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {HtmlExtension} all Extension to merge into.
 * @param {HtmlExtension} extension Extension to merge.
 * @returns {void}
 */

function htmlExtension(all, extension) {
  /** @type {string} */
  var hook;

  for (hook in extension) {
    var maybe = micromark_util_combine_extensions_hasOwnProperty.call(all, hook) ? all[hook] : undefined;
    var left = maybe || (all[hook] = {});
    var right = extension[hook];
    /** @type {string} */

    var type = void 0;

    if (right) {
      for (type in right) {
        left[type] = right[type];
      }
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-util-character/lib/unicode-punctuation-regex.js
// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
var unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
;// CONCATENATED MODULE: ./node_modules/micromark-util-character/index.js
/**
 * @typedef {import('micromark-util-types').Code} Code
 */

/**
 * Check whether the character code represents an ASCII alpha (`a` through `z`,
 * case insensitive).
 *
 * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.
 *
 * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)
 * to U+005A (`Z`).
 *
 * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)
 * to U+007A (`z`).
 */

var asciiAlpha = regexCheck(/[A-Za-z]/);
/**
 * Check whether the character code represents an ASCII digit (`0` through `9`).
 *
 * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to
 * U+0039 (`9`).
 */

var asciiDigit = regexCheck(/\d/);
/**
 * Check whether the character code represents an ASCII hex digit (`a` through
 * `f`, case insensitive, or `0` through `9`).
 *
 * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex
 * digit, or an ASCII lower hex digit.
 *
 * An **ASCII upper hex digit** is a character in the inclusive range U+0041
 * (`A`) to U+0046 (`F`).
 *
 * An **ASCII lower hex digit** is a character in the inclusive range U+0061
 * (`a`) to U+0066 (`f`).
 */

var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
/**
 * Check whether the character code represents an ASCII alphanumeric (`a`
 * through `z`, case insensitive, or `0` through `9`).
 *
 * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha
 * (see `asciiAlpha`).
 */

var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
/**
 * Check whether the character code represents ASCII punctuation.
 *
 * An **ASCII punctuation** is a character in the inclusive ranges U+0021
 * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT
 * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT
 * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).
 */

var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
/**
 * Check whether the character code represents an ASCII atext.
 *
 * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in
 * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),
 * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F
 * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E
 * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE
 * (`{`) to U+007E TILDE (`~`).
 *
 * See:
 * **\[RFC5322]**:
 * [Internet Message Format](https://tools.ietf.org/html/rfc5322).
 * P. Resnick.
 * IETF.
 */

var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
/**
 * Check whether a character code is an ASCII control character.
 *
 * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)
 * to U+001F (US), or U+007F (DEL).
 *
 * @param {Code} code
 * @returns {code is number}
 */

function asciiControl(code) {
  return (// Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < 32 || code === 127)
  );
}
/**
 * Check whether a character code is a markdown line ending (see
 * `markdownLineEnding`) or markdown space (see `markdownSpace`).
 *
 * @param {Code} code
 * @returns {code is number}
 */

function markdownLineEndingOrSpace(code) {
  return code !== null && (code < 0 || code === 32);
}
/**
 * Check whether a character code is a markdown line ending.
 *
 * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN
 * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).
 *
 * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE
 * RETURN (CR) are replaced by these virtual characters depending on whether
 * they occurred together.
 *
 * @param {Code} code
 * @returns {code is number}
 */

function markdownLineEnding(code) {
  return code !== null && code < -2;
}
/**
 * Check whether a character code is a markdown space.
 *
 * A **markdown space** is the concrete character U+0020 SPACE (SP) and the
 * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).
 *
 * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is
 * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL
 * SPACE (VS) characters, depending on the column at which the tab occurred.
 *
 * @param {Code} code
 * @returns {code is number}
 */

function markdownSpace(code) {
  return code === -2 || code === -1 || code === 32;
}
/**
 * Check whether the character code represents Unicode whitespace.
 *
 * Note that this does handle micromark specific markdown whitespace characters.
 * See `markdownLineEndingOrSpace` to check that.
 *
 * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,
 * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),
 * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\[UNICODE]**).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 */

var unicodeWhitespace = regexCheck(/\s/);
/**
 * Check whether the character code represents Unicode punctuation.
 *
 * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,
 * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`
 * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`
 * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII
 * punctuation (see `asciiPunctuation`).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 */
// Size note: removing ASCII from the regex and using `asciiPunctuation` here
// In fact adds to the bundle size.

var unicodePunctuation = regexCheck(unicodePunctuationRegex);
/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 * @returns {(code: Code) => code is number}
 */

function regexCheck(regex) {
  return check;
  /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code Character code
   * @returns {code is number} Whether the character code matches the bound regex
   */

  function check(code) {
    return code !== null && regex.test(String.fromCharCode(code));
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-factory-space/index.js
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */

/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {string} type
 * @param {number} [max=Infinity]
 * @returns {State}
 */

function factorySpace(effects, ok, type, max) {
  var limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  var size = 0;
  return start;
  /** @type {State} */

  function start(code) {
    if (markdownSpace(code)) {
      effects.enter(type);
      return prefix(code);
    }

    return ok(code);
  }
  /** @type {State} */


  function prefix(code) {
    if (markdownSpace(code) && size++ < limit) {
      effects.consume(code);
      return prefix;
    }

    effects.exit(type);
    return ok(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/micromark/lib/initialize/content.js
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */


/** @type {InitialConstruct} */

var content = {
  tokenize: initializeContent
};
/** @type {Initializer} */

function initializeContent(effects) {
  var contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  /** @type {Token} */

  var previous;
  return contentStart;
  /** @type {State} */

  function afterContentStartConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return;
    }

    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, contentStart, 'linePrefix');
  }
  /** @type {State} */


  function paragraphInitial(code) {
    effects.enter('paragraph');
    return lineStart(code);
  }
  /** @type {State} */


  function lineStart(code) {
    var token = effects.enter('chunkText', {
      contentType: 'text',
      previous
    });

    if (previous) {
      previous.next = token;
    }

    previous = token;
    return data(code);
  }
  /** @type {State} */


  function data(code) {
    if (code === null) {
      effects.exit('chunkText');
      effects.exit('paragraph');
      effects.consume(code);
      return;
    }

    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit('chunkText');
      return lineStart;
    } // Data.


    effects.consume(code);
    return data;
  }
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/micromark/lib/initialize/document.js
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Point} Point
 */

/**
 * @typedef {Record<string, unknown>} StackState
 * @typedef {[Construct, StackState]} StackItem
 */



/** @type {InitialConstruct} */

var document_document = {
  tokenize: initializeDocument
};
/** @type {Construct} */

var containerConstruct = {
  tokenize: tokenizeContainer
};
/** @type {Initializer} */

function initializeDocument(effects) {
  var self = this;
  /** @type {StackItem[]} */

  var stack = [];
  var continued = 0;
  /** @type {TokenizeContext|undefined} */

  var childFlow;
  /** @type {Token|undefined} */

  var childToken;
  /** @type {number} */

  var lineStartOffset;
  return start;
  /** @type {State} */

  function start(code) {
    // First we iterate through the open blocks, starting with the root
    // document, and descending through last children down to the last open
    // block.
    // Each block imposes a condition that the line must satisfy if the block is
    // to remain open.
    // For example, a block quote requires a `>` character.
    // A paragraph requires a non-blank line.
    // In this phase we may match all or just some of the open blocks.
    // But we cannot close unmatched blocks yet, because we may have a lazy
    // continuation line.
    if (continued < stack.length) {
      var item = stack[continued];
      self.containerState = item[1];
      return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code);
    } // Done.


    return checkNewContainers(code);
  }
  /** @type {State} */


  function documentContinue(code) {
    continued++; // Note: this field is called `_closeFlow` but it also closes containers.
    // Perhaps a good idea to rename it but it’s already used in the wild by
    // extensions.

    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = undefined;

      if (childFlow) {
        closeFlow();
      } // Note: this algorithm for moving events around is similar to the
      // algorithm when dealing with lazy lines in `writeToChild`.


      var indexBeforeExits = self.events.length;
      var indexBeforeFlow = indexBeforeExits;
      /** @type {Point|undefined} */

      var point; // Find the flow chunk.

      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === 'exit' && self.events[indexBeforeFlow][1].type === 'chunkFlow') {
          point = self.events[indexBeforeFlow][1].end;
          break;
        }
      }

      exitContainers(continued); // Fix positions.

      var index = indexBeforeExits;

      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point);
        index++;
      } // Inject the exits earlier (they’re still also at the end).


      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)); // Discard the duplicate exits.

      self.events.length = index;
      return checkNewContainers(code);
    }

    return start(code);
  }
  /** @type {State} */


  function checkNewContainers(code) {
    // Next, after consuming the continuation markers for existing blocks, we
    // look for new block starts (e.g. `>` for a block quote).
    // If we encounter a new block start, we close any blocks unmatched in
    // step 1 before creating the new block as a child of the last matched
    // block.
    if (continued === stack.length) {
      // No need to `check` whether there’s a container, of `exitContainers`
      // would be moot.
      // We can instead immediately `attempt` to parse one.
      if (!childFlow) {
        return documentContinued(code);
      } // If we have concrete content, such as block HTML or fenced code,
      // we can’t have containers “pierce” into them, so we can immediately
      // start.


      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code);
      } // If we do have flow, it could still be a blank line,
      // but we’d be interrupting it w/ a new container if there’s a current
      // construct.


      self.interrupt = Boolean(childFlow.currentConstruct);
    } // Check if there is a new container.


    self.containerState = {};
    return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code);
  }
  /** @type {State} */


  function thereIsANewContainer(code) {
    if (childFlow) closeFlow();
    exitContainers(continued);
    return documentContinued(code);
  }
  /** @type {State} */


  function thereIsNoNewContainer(code) {
    self.parser.lazy[self.now().line] = continued !== stack.length;
    lineStartOffset = self.now().offset;
    return flowStart(code);
  }
  /** @type {State} */


  function documentContinued(code) {
    // Try new containers.
    self.containerState = {};
    return effects.attempt(containerConstruct, containerContinue, flowStart)(code);
  }
  /** @type {State} */


  function containerContinue(code) {
    continued++;
    stack.push([self.currentConstruct, self.containerState]); // Try another.

    return documentContinued(code);
  }
  /** @type {State} */


  function flowStart(code) {
    if (code === null) {
      if (childFlow) closeFlow();
      exitContainers(0);
      effects.consume(code);
      return;
    }

    childFlow = childFlow || self.parser.flow(self.now());
    effects.enter('chunkFlow', {
      contentType: 'flow',
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code);
  }
  /** @type {State} */


  function flowContinue(code) {
    if (code === null) {
      writeToChild(effects.exit('chunkFlow'), true);
      exitContainers(0);
      effects.consume(code);
      return;
    }

    if (markdownLineEnding(code)) {
      effects.consume(code);
      writeToChild(effects.exit('chunkFlow')); // Get ready for the next line.

      continued = 0;
      self.interrupt = undefined;
      return start;
    }

    effects.consume(code);
    return flowContinue;
  }
  /**
   * @param {Token} token
   * @param {boolean} [eof]
   * @returns {void}
   */


  function writeToChild(token, eof) {
    var stream = self.sliceStream(token);
    if (eof) stream.push(null);
    token.previous = childToken;
    if (childToken) childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream); // Alright, so we just added a lazy line:
    //
    // ```markdown
    // > a
    // b.
    //
    // Or:
    //
    // > ~~~c
    // d
    //
    // Or:
    //
    // > | e |
    // f
    // ```
    //
    // The construct in the second example (fenced code) does not accept lazy
    // lines, so it marked itself as done at the end of its first line, and
    // then the content construct parses `d`.
    // Most constructs in markdown match on the first line: if the first line
    // forms a construct, a non-lazy line can’t “unmake” it.
    //
    // The construct in the third example is potentially a GFM table, and
    // those are *weird*.
    // It *could* be a table, from the first line, if the following line
    // matches a condition.
    // In this case, that second line is lazy, which “unmakes” the first line
    // and turns the whole into one content block.
    //
    // We’ve now parsed the non-lazy and the lazy line, and can figure out
    // whether the lazy line started a new flow block.
    // If it did, we exit the current containers between the two flow blocks.

    if (self.parser.lazy[token.start.line]) {
      var index = childFlow.events.length;

      while (index--) {
        if ( // The token starts before the line ending…
        childFlow.events[index][1].start.offset < lineStartOffset && (!childFlow.events[index][1].end || // …or ends after it.
        childFlow.events[index][1].end.offset > lineStartOffset)) {
          // Exit: there’s still something open, which means it’s a lazy line
          // part of something.
          return;
        }
      } // Note: this algorithm for moving events around is similar to the
      // algorithm when closing flow in `documentContinue`.


      var indexBeforeExits = self.events.length;
      var indexBeforeFlow = indexBeforeExits;
      /** @type {boolean|undefined} */

      var seen;
      /** @type {Point|undefined} */

      var point; // Find the previous chunk (the one before the lazy line).

      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === 'exit' && self.events[indexBeforeFlow][1].type === 'chunkFlow') {
          if (seen) {
            point = self.events[indexBeforeFlow][1].end;
            break;
          }

          seen = true;
        }
      }

      exitContainers(continued); // Fix positions.

      index = indexBeforeExits;

      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point);
        index++;
      } // Inject the exits earlier (they’re still also at the end).


      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)); // Discard the duplicate exits.

      self.events.length = index;
    }
  }
  /**
   * @param {number} size
   * @returns {void}
   */


  function exitContainers(size) {
    var index = stack.length; // Exit open containers.

    while (index-- > size) {
      var entry = stack[index];
      self.containerState = entry[1];
      entry[0].exit.call(self, effects);
    }

    stack.length = size;
  }

  function closeFlow() {
    childFlow.write([null]);
    childToken = undefined;
    childFlow = undefined;
    self.containerState._closeFlow = undefined;
  }
}
/** @type {Tokenizer} */


function tokenizeContainer(effects, ok, nok) {
  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok, nok), 'linePrefix', this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/blank-line.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */


/** @type {Construct} */

var blankLine = {
  tokenize: tokenizeBlankLine,
  partial: true
};
/** @type {Tokenizer} */

function tokenizeBlankLine(effects, ok, nok) {
  return factorySpace(effects, afterWhitespace, 'linePrefix');
  /** @type {State} */

  function afterWhitespace(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-util-subtokenize/index.js
/**
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Event} Event
 */

/**
 * Tokenize subcontent.
 *
 * @param {Event[]} events
 * @returns {boolean}
 */

function subtokenize(events) {
  /** @type {Record<string, number>} */
  var jumps = {};
  var index = -1;
  /** @type {Event} */

  var event;
  /** @type {number|undefined} */

  var lineIndex;
  /** @type {number} */

  var otherIndex;
  /** @type {Event} */

  var otherEvent;
  /** @type {Event[]} */

  var parameters;
  /** @type {Event[]} */

  var subevents;
  /** @type {boolean|undefined} */

  var more;

  while (++index < events.length) {
    while (index in jumps) {
      index = jumps[index];
    }

    event = events[index]; // Add a hook for the GFM tasklist extension, which needs to know if text
    // is in the first content of a list item.

    if (index && event[1].type === 'chunkFlow' && events[index - 1][1].type === 'listItemPrefix') {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;

      if (otherIndex < subevents.length && subevents[otherIndex][1].type === 'lineEndingBlank') {
        otherIndex += 2;
      }

      if (otherIndex < subevents.length && subevents[otherIndex][1].type === 'content') {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === 'content') {
            break;
          }

          if (subevents[otherIndex][1].type === 'chunkText') {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    } // Enter.


    if (event[0] === 'enter') {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index));
        index = jumps[index];
        more = true;
      }
    } // Exit.
    else if (event[1]._container) {
      otherIndex = index;
      lineIndex = undefined;

      while (otherIndex--) {
        otherEvent = events[otherIndex];

        if (otherEvent[1].type === 'lineEnding' || otherEvent[1].type === 'lineEndingBlank') {
          if (otherEvent[0] === 'enter') {
            if (lineIndex) {
              events[lineIndex][1].type = 'lineEndingBlank';
            }

            otherEvent[1].type = 'lineEnding';
            lineIndex = otherIndex;
          }
        } else {
          break;
        }
      }

      if (lineIndex) {
        // Fix position.
        event[1].end = Object.assign({}, events[lineIndex][1].start); // Switch container exit w/ line endings.

        parameters = events.slice(lineIndex, index);
        parameters.unshift(event);
        splice(events, lineIndex, index - lineIndex + 1, parameters);
      }
    }
  }

  return !more;
}
/**
 * Tokenize embedded tokens.
 *
 * @param {Event[]} events
 * @param {number} eventIndex
 * @returns {Record<string, number>}
 */

function subcontent(events, eventIndex) {
  var token = events[eventIndex][1];
  var context = events[eventIndex][2];
  var startPosition = eventIndex - 1;
  /** @type {number[]} */

  var startPositions = [];
  var tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
  var childEvents = tokenizer.events;
  /** @type {[number, number][]} */

  var jumps = [];
  /** @type {Record<string, number>} */

  var gaps = {};
  /** @type {Chunk[]} */

  var stream;
  /** @type {Token|undefined} */

  var previous;
  var index = -1;
  /** @type {Token|undefined} */

  var current = token;
  var adjust = 0;
  var start = 0;
  var breaks = [start]; // Loop forward through the linked tokens to pass them in order to the
  // subtokenizer.

  while (current) {
    // Find the position of the event for this token.
    while (events[++startPosition][1] !== current) {// Empty.
    }

    startPositions.push(startPosition);

    if (!current._tokenizer) {
      stream = context.sliceStream(current);

      if (!current.next) {
        stream.push(null);
      }

      if (previous) {
        tokenizer.defineSkip(current.start);
      }

      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }

      tokenizer.write(stream);

      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = undefined;
      }
    } // Unravel the next token.


    previous = current;
    current = current.next;
  } // Now, loop back through all events (and linked tokens), to figure out which
  // parts belong where.


  current = token;

  while (++index < childEvents.length) {
    if ( // Find a void token that includes a break.
    childEvents[index][0] === 'exit' && childEvents[index - 1][0] === 'enter' && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
      start = index + 1;
      breaks.push(start); // Help GC.

      current._tokenizer = undefined;
      current.previous = undefined;
      current = current.next;
    }
  } // Help GC.


  tokenizer.events = []; // If there’s one more token (which is the cases for lines that end in an
  // EOF), that’s perfect: the last point we found starts it.
  // If there isn’t then make sure any remaining content is added to it.

  if (current) {
    // Help GC.
    current._tokenizer = undefined;
    current.previous = undefined;
  } else {
    breaks.pop();
  } // Now splice the events from the subtokenizer into the current events,
  // moving back to front so that splice indices aren’t affected.


  index = breaks.length;

  while (index--) {
    var slice = childEvents.slice(breaks[index], breaks[index + 1]);

    var _start = startPositions.pop();

    jumps.unshift([_start, _start + slice.length - 1]);
    splice(events, _start, 2, slice);
  }

  index = -1;

  while (++index < jumps.length) {
    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
    adjust += jumps[index][1] - jumps[index][0] - 1;
  }

  return gaps;
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/content.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */



/**
 * No name because it must not be turned off.
 * @type {Construct}
 */

var content_content = {
  tokenize: tokenizeContent,
  resolve: resolveContent
};
/** @type {Construct} */

var continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
};
/**
 * Content is transparent: it’s parsed right now. That way, definitions are also
 * parsed right now: before text in paragraphs (specifically, media) are parsed.
 *
 * @type {Resolver}
 */

function resolveContent(events) {
  subtokenize(events);
  return events;
}
/** @type {Tokenizer} */


function tokenizeContent(effects, ok) {
  /** @type {Token} */
  var previous;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('content');
    previous = effects.enter('chunkContent', {
      contentType: 'content'
    });
    return data(code);
  }
  /** @type {State} */


  function data(code) {
    if (code === null) {
      return contentEnd(code);
    }

    if (markdownLineEnding(code)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code);
    } // Data.


    effects.consume(code);
    return data;
  }
  /** @type {State} */


  function contentEnd(code) {
    effects.exit('chunkContent');
    effects.exit('content');
    return ok(code);
  }
  /** @type {State} */


  function contentContinue(code) {
    effects.consume(code);
    effects.exit('chunkContent');
    previous.next = effects.enter('chunkContent', {
      contentType: 'content',
      previous
    });
    previous = previous.next;
    return data;
  }
}
/** @type {Tokenizer} */


function tokenizeContinuation(effects, ok, nok) {
  var self = this;
  return startLookahead;
  /** @type {State} */

  function startLookahead(code) {
    effects.exit('chunkContent');
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, prefixed, 'linePrefix');
  }
  /** @type {State} */


  function prefixed(code) {
    if (code === null || markdownLineEnding(code)) {
      return nok(code);
    }

    var tail = self.events[self.events.length - 1];

    if (!self.parser.constructs.disable.null.includes('codeIndented') && tail && tail[1].type === 'linePrefix' && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok(code);
    }

    return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/micromark/lib/initialize/flow.js
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 */



/** @type {InitialConstruct} */

var flow = {
  tokenize: initializeFlow
};
/** @type {Initializer} */

function initializeFlow(effects) {
  var self = this;
  var initial = effects.attempt( // Try to parse a blank line.
  blankLine, atBlankEnding, // Try to parse initial flow (essentially, only code).
  effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content_content, afterConstruct)), 'linePrefix')));
  return initial;
  /** @type {State} */

  function atBlankEnding(code) {
    if (code === null) {
      effects.consume(code);
      return;
    }

    effects.enter('lineEndingBlank');
    effects.consume(code);
    effects.exit('lineEndingBlank');
    self.currentConstruct = undefined;
    return initial;
  }
  /** @type {State} */


  function afterConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return;
    }

    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    self.currentConstruct = undefined;
    return initial;
  }
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/micromark/lib/initialize/text.js
/**
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */
var resolver = {
  resolveAll: createResolver()
};
var string = initializeFactory('string');
var text_text = initializeFactory('text');
/**
 * @param {'string'|'text'} field
 * @returns {InitialConstruct}
 */

function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(field === 'text' ? resolveAllLineSuffixes : undefined)
  };
  /** @type {Initializer} */

  function initializeText(effects) {
    var self = this;
    var constructs = this.parser.constructs[field];
    var text = effects.attempt(constructs, start, notText);
    return start;
    /** @type {State} */

    function start(code) {
      return atBreak(code) ? text(code) : notText(code);
    }
    /** @type {State} */


    function notText(code) {
      if (code === null) {
        effects.consume(code);
        return;
      }

      effects.enter('data');
      effects.consume(code);
      return data;
    }
    /** @type {State} */


    function data(code) {
      if (atBreak(code)) {
        effects.exit('data');
        return text(code);
      } // Data.


      effects.consume(code);
      return data;
    }
    /**
     * @param {Code} code
     * @returns {boolean}
     */


    function atBreak(code) {
      if (code === null) {
        return true;
      }

      var list = constructs[code];
      var index = -1;

      if (list) {
        while (++index < list.length) {
          var item = list[index];

          if (!item.previous || item.previous.call(self, self.previous)) {
            return true;
          }
        }
      }

      return false;
    }
  }
}
/**
 * @param {Resolver} [extraResolver]
 * @returns {Resolver}
 */


function createResolver(extraResolver) {
  return resolveAllText;
  /** @type {Resolver} */

  function resolveAllText(events, context) {
    var index = -1;
    /** @type {number|undefined} */

    var enter; // A rather boring computation (to merge adjacent `data` events) which
    // improves mm performance by 29%.

    while (++index <= events.length) {
      if (enter === undefined) {
        if (events[index] && events[index][1].type === 'data') {
          enter = index;
          index++;
        }
      } else if (!events[index] || events[index][1].type !== 'data') {
        // Don’t do anything if there is one data token.
        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end;
          events.splice(enter + 2, index - enter - 2);
          index = enter + 2;
        }

        enter = undefined;
      }
    }

    return extraResolver ? extraResolver(events, context) : events;
  }
}
/**
 * A rather ugly set of instructions which again looks at chunks in the input
 * stream.
 * The reason to do this here is that it is *much* faster to parse in reverse.
 * And that we can’t hook into `null` to split the line suffix before an EOF.
 * To do: figure out if we can make this into a clean utility, or even in core.
 * As it will be useful for GFMs literal autolink extension (and maybe even
 * tables?)
 *
 * @type {Resolver}
 */


function resolveAllLineSuffixes(events, context) {
  var eventIndex = -1;

  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === 'lineEnding') && events[eventIndex - 1][1].type === 'data') {
      var data = events[eventIndex - 1][1];
      var chunks = context.sliceStream(data);
      var index = chunks.length;
      var bufferIndex = -1;
      var size = 0;
      /** @type {boolean|undefined} */

      var tabs = void 0;

      while (index--) {
        var chunk = chunks[index];

        if (typeof chunk === 'string') {
          bufferIndex = chunk.length;

          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }

          if (bufferIndex) break;
          bufferIndex = -1;
        } // Number
        else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) {// Empty
        } else {
          // Replacement character, exit.
          index++;
          break;
        }
      }

      if (size) {
        var token = {
          type: eventIndex === events.length || tabs || size < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index,
            _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start);

        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(eventIndex, 0, ['enter', token, context], ['exit', token, context]);
          eventIndex += 2;
        }
      }

      eventIndex++;
    }
  }

  return events;
}
;// CONCATENATED MODULE: ./node_modules/micromark-util-resolve-all/index.js
/**
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 */

/**
 * Call all `resolveAll`s.
 *
 * @param {{resolveAll?: Resolver}[]} constructs
 * @param {Event[]} events
 * @param {TokenizeContext} context
 * @returns {Event[]}
 */
function resolveAll(constructs, events, context) {
  /** @type {Resolver[]} */
  var called = [];
  var index = -1;

  while (++index < constructs.length) {
    var resolve = constructs[index].resolveAll;

    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }

  return events;
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/micromark/lib/create-tokenizer.js
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 */

/**
 * @typedef Info
 * @property {() => void} restore
 * @property {number} from
 *
 * @callback ReturnHandle
 *   Handle a successful run.
 * @param {Construct} construct
 * @param {Info} info
 * @returns {void}
 */



/**
 * Create a tokenizer.
 * Tokenizers deal with one type of data (e.g., containers, flow, text).
 * The parser is the object dealing with it all.
 * `initialize` works like other constructs, except that only its `tokenize`
 * function is used, in which case it doesn’t receive an `ok` or `nok`.
 * `from` can be given to set the point before the first character, although
 * when further lines are indented, they must be set with `defineSkip`.
 *
 * @param {ParseContext} parser
 * @param {InitialConstruct} initialize
 * @param {Omit<Point, '_index'|'_bufferIndex'>} [from]
 * @returns {TokenizeContext}
 */

function createTokenizer(parser, initialize, from) {
  /** @type {Point} */
  var point = Object.assign(from ? Object.assign({}, from) : {
    line: 1,
    column: 1,
    offset: 0
  }, {
    _index: 0,
    _bufferIndex: -1
  });
  /** @type {Record<string, number>} */

  var columnStart = {};
  /** @type {Construct[]} */

  var resolveAllConstructs = [];
  /** @type {Chunk[]} */

  var chunks = [];
  /** @type {Token[]} */

  var stack = [];
  /** @type {boolean|undefined} */

  var consumed = true;
  /**
   * Tools used for tokenizing.
   *
   * @type {Effects}
   */

  var effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  /**
   * State and tools for resolving and serializing.
   *
   * @type {TokenizeContext}
   */

  var context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  /**
   * The state function.
   *
   * @type {State|void}
   */

  var state = initialize.tokenize.call(context, effects);
  /**
   * Track which character we expect to be consumed, to catch bugs.
   *
   * @type {Code}
   */

  var expectedCode;

  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }

  return context;
  /** @type {TokenizeContext['write']} */

  function write(slice) {
    chunks = push(chunks, slice);
    main(); // Exit if we’re not done, resolve might change stuff.

    if (chunks[chunks.length - 1] !== null) {
      return [];
    }

    addResult(initialize, 0); // Otherwise, resolve, and exit.

    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  } //
  // Tools.
  //

  /** @type {TokenizeContext['sliceSerialize']} */


  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  /** @type {TokenizeContext['sliceStream']} */


  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  /** @type {TokenizeContext['now']} */


  function now() {
    return Object.assign({}, point);
  }
  /** @type {TokenizeContext['defineSkip']} */


  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  } //
  // State management.
  //

  /**
   * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
   * `consume`).
   * Here is where we walk through the chunks, which either include strings of
   * several characters, or numerical character codes.
   * The reason to do this in a loop instead of a call is so the stack can
   * drain.
   *
   * @returns {void}
   */


  function main() {
    /** @type {number} */
    var chunkIndex;

    while (point._index < chunks.length) {
      var chunk = chunks[point._index]; // If we’re in a buffer chunk, loop through it.

      if (typeof chunk === 'string') {
        chunkIndex = point._index;

        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }

        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  /**
   * Deal with one code.
   *
   * @param {Code} code
   * @returns {void}
   */


  function go(code) {
    consumed = undefined;
    expectedCode = code;
    state = state(code);
  }
  /** @type {Effects['consume']} */


  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    } // Not in a string chunk.


    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++; // At end of string chunk.
      // @ts-expect-error Points w/ non-negative `_bufferIndex` reference
      // strings.

      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    } // Expose the previous character.


    context.previous = code; // Mark as consumed.

    consumed = true;
  }
  /** @type {Effects['enter']} */


  function enter(type, fields) {
    /** @type {Token} */
    // @ts-expect-error Patch instead of assign required fields to help GC.
    var token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(['enter', token, context]);
    stack.push(token);
    return token;
  }
  /** @type {Effects['exit']} */


  function exit(type) {
    var token = stack.pop();
    token.end = now();
    context.events.push(['exit', token, context]);
    return token;
  }
  /**
   * Use results.
   *
   * @type {ReturnHandle}
   */


  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  /**
   * Discard results.
   *
   * @type {ReturnHandle}
   */


  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  /**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   * @param {Record<string, unknown>} [fields]
   */


  function constructFactory(onreturn, fields) {
    return hook;
    /**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Construct|Construct[]|ConstructRecord} constructs
     * @param {State} returnState
     * @param {State} [bogusState]
     * @returns {State}
     */

    function hook(constructs, returnState, bogusState) {
      /** @type {Construct[]} */
      var listOfConstructs;
      /** @type {number} */

      var constructIndex;
      /** @type {Construct} */

      var currentConstruct;
      /** @type {Info} */

      var info;
      return Array.isArray(constructs) ?
      /* c8 ignore next 1 */
      handleListOfConstructs(constructs) : 'tokenize' in constructs // @ts-expect-error Looks like a construct.
      ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      /**
       * Handle a list of construct.
       *
       * @param {ConstructRecord} map
       * @returns {State}
       */

      function handleMapOfConstructs(map) {
        return start;
        /** @type {State} */

        function start(code) {
          var def = code !== null && map[code];
          var all = code !== null && map.null;
          var list = [// To do: add more extension tests.

          /* c8 ignore next 2 */
          ...(Array.isArray(def) ? def : def ? [def] : []), ...(Array.isArray(all) ? all : all ? [all] : [])];
          return handleListOfConstructs(list)(code);
        }
      }
      /**
       * Handle a list of construct.
       *
       * @param {Construct[]} list
       * @returns {State}
       */


      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;

        if (list.length === 0) {
          return bogusState;
        }

        return handleConstruct(list[constructIndex]);
      }
      /**
       * Handle a single construct.
       *
       * @param {Construct} construct
       * @returns {State}
       */


      function handleConstruct(construct) {
        return start;
        /** @type {State} */

        function start(code) {
          // To do: not needed to store if there is no bogus state, probably?
          // Currently doesn’t work because `inspect` in document does a check
          // w/o a bogus, which doesn’t make sense. But it does seem to help perf
          // by not storing.
          info = store();
          currentConstruct = construct;

          if (!construct.partial) {
            context.currentConstruct = construct;
          }

          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok(code);
          }

          return construct.tokenize.call( // If we do have fields, create an object w/ `context` as its
          // prototype.
          // This allows a “live binding”, which is needed for `interrupt`.
          fields ? Object.assign(Object.create(context), fields) : context, effects, ok, nok)(code);
        }
      }
      /** @type {State} */


      function ok(code) {
        consumed = true;
        onreturn(currentConstruct, info);
        return returnState;
      }
      /** @type {State} */


      function nok(code) {
        consumed = true;
        info.restore();

        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }

        return bogusState;
      }
    }
  }
  /**
   * @param {Construct} construct
   * @param {number} from
   * @returns {void}
   */


  function addResult(construct, from) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }

    if (construct.resolve) {
      splice(context.events, from, context.events.length - from, construct.resolve(context.events.slice(from), context));
    }

    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  /**
   * Store state.
   *
   * @returns {Info}
   */


  function store() {
    var startPoint = now();
    var startPrevious = context.previous;
    var startCurrentConstruct = context.currentConstruct;
    var startEventsIndex = context.events.length;
    var startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    /**
     * Restore state.
     *
     * @returns {void}
     */

    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  /**
   * Move the current point a bit forward in the line when it’s on a column
   * skip.
   *
   * @returns {void}
   */


  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {Chunk[]} chunks
 * @param {Pick<Token, 'start'|'end'>} token
 * @returns {Chunk[]}
 */

function sliceChunks(chunks, token) {
  var startIndex = token.start._index;
  var startBufferIndex = token.start._bufferIndex;
  var endIndex = token.end._index;
  var endBufferIndex = token.end._bufferIndex;
  /** @type {Chunk[]} */

  var view;

  if (startIndex === endIndex) {
    // @ts-expect-error `_bufferIndex` is used on string chunks.
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);

    if (startBufferIndex > -1) {
      // @ts-expect-error `_bufferIndex` is used on string chunks.
      view[0] = view[0].slice(startBufferIndex);
    }

    if (endBufferIndex > 0) {
      // @ts-expect-error `_bufferIndex` is used on string chunks.
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }

  return view;
}
/**
 * Get the string value of a slice of chunks.
 *
 * @param {Chunk[]} chunks
 * @param {boolean} [expandTabs=false]
 * @returns {string}
 */


function serializeChunks(chunks, expandTabs) {
  var index = -1;
  /** @type {string[]} */

  var result = [];
  /** @type {boolean|undefined} */

  var atTab;

  while (++index < chunks.length) {
    var chunk = chunks[index];
    /** @type {string} */

    var value = void 0;

    if (typeof chunk === 'string') {
      value = chunk;
    } else switch (chunk) {
      case -5:
        {
          value = '\r';
          break;
        }

      case -4:
        {
          value = '\n';
          break;
        }

      case -3:
        {
          value = '\r' + '\n';
          break;
        }

      case -2:
        {
          value = expandTabs ? ' ' : '\t';
          break;
        }

      case -1:
        {
          if (!expandTabs && atTab) continue;
          value = ' ';
          break;
        }

      default:
        {
          // Currently only replacement character.
          value = String.fromCharCode(chunk);
        }
    }

    atTab = chunk === -2;
    result.push(value);
  }

  return result.join('');
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/thematic-break.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */


/** @type {Construct} */

var thematicBreak = {
  name: 'thematicBreak',
  tokenize: tokenizeThematicBreak
};
/** @type {Tokenizer} */

function tokenizeThematicBreak(effects, ok, nok) {
  var size = 0;
  /** @type {NonNullable<Code>} */

  var marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('thematicBreak');
    marker = code;
    return atBreak(code);
  }
  /** @type {State} */


  function atBreak(code) {
    if (code === marker) {
      effects.enter('thematicBreakSequence');
      return sequence(code);
    }

    if (markdownSpace(code)) {
      return factorySpace(effects, atBreak, 'whitespace')(code);
    }

    if (size < 3 || code !== null && !markdownLineEnding(code)) {
      return nok(code);
    }

    effects.exit('thematicBreak');
    return ok(code);
  }
  /** @type {State} */


  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      size++;
      return sequence;
    }

    effects.exit('thematicBreakSequence');
    return atBreak(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/list.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/**
 * @typedef {Record<string, unknown> & {marker: Code, type: string, size: number}} ListContainerState
 * @typedef {TokenizeContext & {containerState: ListContainerState}} TokenizeContextWithState
 */




/** @type {Construct} */

var list = {
  name: 'list',
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
};
/** @type {Construct} */

var listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
};
/** @type {Construct} */

var indentConstruct = {
  tokenize: tokenizeIndent,
  partial: true
};
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */

function tokenizeListStart(effects, ok, nok) {
  var self = this;
  var tail = self.events[self.events.length - 1];
  var initialSize = tail && tail[1].type === 'linePrefix' ? tail[2].sliceSerialize(tail[1], true).length : 0;
  var size = 0;
  return start;
  /** @type {State} */

  function start(code) {
    var kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? 'listUnordered' : 'listOrdered');

    if (kind === 'listUnordered' ? !self.containerState.marker || code === self.containerState.marker : asciiDigit(code)) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }

      if (kind === 'listUnordered') {
        effects.enter('listItemPrefix');
        return code === 42 || code === 45 ? effects.check(thematicBreak, nok, atMarker)(code) : atMarker(code);
      }

      if (!self.interrupt || code === 49) {
        effects.enter('listItemPrefix');
        effects.enter('listItemValue');
        return inside(code);
      }
    }

    return nok(code);
  }
  /** @type {State} */


  function inside(code) {
    if (asciiDigit(code) && ++size < 10) {
      effects.consume(code);
      return inside;
    }

    if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
      effects.exit('listItemValue');
      return atMarker(code);
    }

    return nok(code);
  }
  /**
   * @type {State}
   **/


  function atMarker(code) {
    effects.enter('listItemMarker');
    effects.consume(code);
    effects.exit('listItemMarker');
    self.containerState.marker = self.containerState.marker || code;
    return effects.check(blankLine, // Can’t be empty when interrupting.
    self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }
  /** @type {State} */


  function onBlank(code) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code);
  }
  /** @type {State} */


  function otherPrefix(code) {
    if (markdownSpace(code)) {
      effects.enter('listItemPrefixWhitespace');
      effects.consume(code);
      effects.exit('listItemPrefixWhitespace');
      return endOfPrefix;
    }

    return nok(code);
  }
  /** @type {State} */


  function endOfPrefix(code) {
    self.containerState.size = initialSize + self.sliceSerialize(effects.exit('listItemPrefix'), true).length;
    return ok(code);
  }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */


function tokenizeListContinuation(effects, ok, nok) {
  var self = this;
  self.containerState._closeFlow = undefined;
  return effects.check(blankLine, onBlank, notBlank);
  /** @type {State} */

  function onBlank(code) {
    self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine; // We have a blank line.
    // Still, try to consume at most the items size.

    return factorySpace(effects, ok, 'listItemIndent', self.containerState.size + 1)(code);
  }
  /** @type {State} */


  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
      self.containerState.furtherBlankLines = undefined;
      self.containerState.initialBlankLine = undefined;
      return notInCurrentItem(code);
    }

    self.containerState.furtherBlankLines = undefined;
    self.containerState.initialBlankLine = undefined;
    return effects.attempt(indentConstruct, ok, notInCurrentItem)(code);
  }
  /** @type {State} */


  function notInCurrentItem(code) {
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true; // As we’re closing flow, we’re no longer interrupting.

    self.interrupt = undefined;
    return factorySpace(effects, effects.attempt(list, ok, nok), 'linePrefix', self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4)(code);
  }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */


function tokenizeIndent(effects, ok, nok) {
  var self = this;
  return factorySpace(effects, afterPrefix, 'listItemIndent', self.containerState.size + 1);
  /** @type {State} */

  function afterPrefix(code) {
    var tail = self.events[self.events.length - 1];
    return tail && tail[1].type === 'listItemIndent' && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok(code) : nok(code);
  }
}
/**
 * @type {Exiter}
 * @this {TokenizeContextWithState}
 */


function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */


function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  var self = this;
  return factorySpace(effects, afterPrefix, 'listItemPrefixWhitespace', self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4 + 1);
  /** @type {State} */

  function afterPrefix(code) {
    var tail = self.events[self.events.length - 1];
    return !markdownSpace(code) && tail && tail[1].type === 'listItemPrefixWhitespace' ? ok(code) : nok(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/block-quote.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 */


/** @type {Construct} */

var blockQuote = {
  name: 'blockQuote',
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit
};
/** @type {Tokenizer} */

function tokenizeBlockQuoteStart(effects, ok, nok) {
  var self = this;
  return start;
  /** @type {State} */

  function start(code) {
    if (code === 62) {
      var state = self.containerState;

      if (!state.open) {
        effects.enter('blockQuote', {
          _container: true
        });
        state.open = true;
      }

      effects.enter('blockQuotePrefix');
      effects.enter('blockQuoteMarker');
      effects.consume(code);
      effects.exit('blockQuoteMarker');
      return after;
    }

    return nok(code);
  }
  /** @type {State} */


  function after(code) {
    if (markdownSpace(code)) {
      effects.enter('blockQuotePrefixWhitespace');
      effects.consume(code);
      effects.exit('blockQuotePrefixWhitespace');
      effects.exit('blockQuotePrefix');
      return ok;
    }

    effects.exit('blockQuotePrefix');
    return ok(code);
  }
}
/** @type {Tokenizer} */


function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  return factorySpace(effects, effects.attempt(blockQuote, ok, nok), 'linePrefix', this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);
}
/** @type {Exiter} */


function exit(effects) {
  effects.exit('blockQuote');
}
;// CONCATENATED MODULE: ./node_modules/micromark-factory-destination/index.js
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */

/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} literalType
 * @param {string} literalMarkerType
 * @param {string} rawType
 * @param {string} stringType
 * @param {number} [max=Infinity]
 * @returns {State}
 */
// eslint-disable-next-line max-params

function factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  var limit = max || Number.POSITIVE_INFINITY;
  var balance = 0;
  return start;
  /** @type {State} */

  function start(code) {
    if (code === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      return destinationEnclosedBefore;
    }

    if (code === null || code === 41 || asciiControl(code)) {
      return nok(code);
    }

    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return destinationRaw(code);
  }
  /** @type {State} */


  function destinationEnclosedBefore(code) {
    if (code === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok;
    }

    effects.enter(stringType);
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return destinationEnclosed(code);
  }
  /** @type {State} */


  function destinationEnclosed(code) {
    if (code === 62) {
      effects.exit('chunkString');
      effects.exit(stringType);
      return destinationEnclosedBefore(code);
    }

    if (code === null || code === 60 || markdownLineEnding(code)) {
      return nok(code);
    }

    effects.consume(code);
    return code === 92 ? destinationEnclosedEscape : destinationEnclosed;
  }
  /** @type {State} */


  function destinationEnclosedEscape(code) {
    if (code === 60 || code === 62 || code === 92) {
      effects.consume(code);
      return destinationEnclosed;
    }

    return destinationEnclosed(code);
  }
  /** @type {State} */


  function destinationRaw(code) {
    if (code === 40) {
      if (++balance > limit) return nok(code);
      effects.consume(code);
      return destinationRaw;
    }

    if (code === 41) {
      if (!balance--) {
        effects.exit('chunkString');
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type);
        return ok(code);
      }

      effects.consume(code);
      return destinationRaw;
    }

    if (code === null || markdownLineEndingOrSpace(code)) {
      if (balance) return nok(code);
      effects.exit('chunkString');
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok(code);
    }

    if (asciiControl(code)) return nok(code);
    effects.consume(code);
    return code === 92 ? destinationRawEscape : destinationRaw;
  }
  /** @type {State} */


  function destinationRawEscape(code) {
    if (code === 40 || code === 41 || code === 92) {
      effects.consume(code);
      return destinationRaw;
    }

    return destinationRaw(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-factory-label/index.js
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').State} State
 */

/**
 * @this {TokenizeContext}
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} markerType
 * @param {string} stringType
 * @returns {State}
 */
// eslint-disable-next-line max-params

function factoryLabel(effects, ok, nok, type, markerType, stringType) {
  var self = this;
  var size = 0;
  /** @type {boolean} */

  var data;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  /** @type {State} */


  function atBreak(code) {
    if (code === null || code === 91 || code === 93 && !data || code === 94 && !size && '_hiddenFootnoteSupport' in self.parser.constructs || size > 999) {
      return nok(code);
    }

    if (code === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return atBreak;
    }

    effects.enter('chunkString', {
      contentType: 'string'
    });
    return label(code);
  }
  /** @type {State} */


  function label(code) {
    if (code === null || code === 91 || code === 93 || markdownLineEnding(code) || size++ > 999) {
      effects.exit('chunkString');
      return atBreak(code);
    }

    effects.consume(code);
    data = data || !markdownSpace(code);
    return code === 92 ? labelEscape : label;
  }
  /** @type {State} */


  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return label;
    }

    return label(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-factory-title/index.js
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */


/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} markerType
 * @param {string} stringType
 * @returns {State}
 */
// eslint-disable-next-line max-params

function factoryTitle(effects, ok, nok, type, markerType, stringType) {
  /** @type {NonNullable<Code>} */
  var marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    marker = code === 40 ? 41 : code;
    return atFirstTitleBreak;
  }
  /** @type {State} */


  function atFirstTitleBreak(code) {
    if (code === marker) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }

    effects.enter(stringType);
    return atTitleBreak(code);
  }
  /** @type {State} */


  function atTitleBreak(code) {
    if (code === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker);
    }

    if (code === null) {
      return nok(code);
    } // Note: blank lines can’t exist in content.


    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return factorySpace(effects, atTitleBreak, 'linePrefix');
    }

    effects.enter('chunkString', {
      contentType: 'string'
    });
    return title(code);
  }
  /** @type {State} */


  function title(code) {
    if (code === marker || code === null || markdownLineEnding(code)) {
      effects.exit('chunkString');
      return atTitleBreak(code);
    }

    effects.consume(code);
    return code === 92 ? titleEscape : title;
  }
  /** @type {State} */


  function titleEscape(code) {
    if (code === marker || code === 92) {
      effects.consume(code);
      return title;
    }

    return title(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-factory-whitespace/index.js
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */


/**
 * @param {Effects} effects
 * @param {State} ok
 */

function factoryWhitespace(effects, ok) {
  /** @type {boolean} */
  var seen;
  return start;
  /** @type {State} */

  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      seen = true;
      return start;
    }

    if (markdownSpace(code)) {
      return factorySpace(effects, start, seen ? 'linePrefix' : 'lineSuffix')(code);
    }

    return ok(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-util-normalize-identifier/index.js
/**
 * Normalize an identifier (such as used in definitions).
 *
 * @param {string} value
 * @returns {string}
 */
function normalizeIdentifier(value) {
  return value // Collapse Markdown whitespace.
  .replace(/[\t\n\r ]+/g, ' ') // Trim.
  .replace(/^ | $/g, '') // Some characters are considered “uppercase”, but if their lowercase
  // counterpart is uppercased will result in a different uppercase
  // character.
  // Hence, to get that form, we perform both lower- and uppercase.
  // Upper case makes sure keys will not interact with default prototypal
  // methods: no method is uppercase.
  .toLowerCase().toUpperCase();
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/definition.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */







/** @type {Construct} */

var definition = {
  name: 'definition',
  tokenize: tokenizeDefinition
};
/** @type {Construct} */

var titleConstruct = {
  tokenize: tokenizeTitle,
  partial: true
};
/** @type {Tokenizer} */

function tokenizeDefinition(effects, ok, nok) {
  var self = this;
  /** @type {string} */

  var identifier;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('definition');
    return factoryLabel.call(self, effects, labelAfter, nok, 'definitionLabel', 'definitionLabelMarker', 'definitionLabelString')(code);
  }
  /** @type {State} */


  function labelAfter(code) {
    identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));

    if (code === 58) {
      effects.enter('definitionMarker');
      effects.consume(code);
      effects.exit('definitionMarker'); // Note: blank lines can’t exist in content.

      return factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace(effects, after, 'whitespace'), factorySpace(effects, after, 'whitespace')), nok, 'definitionDestination', 'definitionDestinationLiteral', 'definitionDestinationLiteralMarker', 'definitionDestinationRaw', 'definitionDestinationString'));
    }

    return nok(code);
  }
  /** @type {State} */


  function after(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('definition');

      if (!self.parser.defined.includes(identifier)) {
        self.parser.defined.push(identifier);
      }

      return ok(code);
    }

    return nok(code);
  }
}
/** @type {Tokenizer} */


function tokenizeTitle(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, before)(code) : nok(code);
  }
  /** @type {State} */


  function before(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(effects, factorySpace(effects, after, 'whitespace'), nok, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(code);
    }

    return nok(code);
  }
  /** @type {State} */


  function after(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/code-indented.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */


/** @type {Construct} */

var codeIndented = {
  name: 'codeIndented',
  tokenize: tokenizeCodeIndented
};
/** @type {Construct} */

var indentedContent = {
  tokenize: tokenizeIndentedContent,
  partial: true
};
/** @type {Tokenizer} */

function tokenizeCodeIndented(effects, ok, nok) {
  var self = this;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('codeIndented');
    return factorySpace(effects, afterStartPrefix, 'linePrefix', 4 + 1)(code);
  }
  /** @type {State} */


  function afterStartPrefix(code) {
    var tail = self.events[self.events.length - 1];
    return tail && tail[1].type === 'linePrefix' && tail[2].sliceSerialize(tail[1], true).length >= 4 ? afterPrefix(code) : nok(code);
  }
  /** @type {State} */


  function afterPrefix(code) {
    if (code === null) {
      return after(code);
    }

    if (markdownLineEnding(code)) {
      return effects.attempt(indentedContent, afterPrefix, after)(code);
    }

    effects.enter('codeFlowValue');
    return content(code);
  }
  /** @type {State} */


  function content(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue');
      return afterPrefix(code);
    }

    effects.consume(code);
    return content;
  }
  /** @type {State} */


  function after(code) {
    effects.exit('codeIndented');
    return ok(code);
  }
}
/** @type {Tokenizer} */


function tokenizeIndentedContent(effects, ok, nok) {
  var self = this;
  return start;
  /** @type {State} */

  function start(code) {
    // If this is a lazy line, it can’t be code.
    if (self.parser.lazy[self.now().line]) {
      return nok(code);
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return start;
    }

    return factorySpace(effects, afterPrefix, 'linePrefix', 4 + 1)(code);
  }
  /** @type {State} */


  function afterPrefix(code) {
    var tail = self.events[self.events.length - 1];
    return tail && tail[1].type === 'linePrefix' && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok(code) : markdownLineEnding(code) ? start(code) : nok(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/heading-atx.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */



/** @type {Construct} */

var headingAtx = {
  name: 'headingAtx',
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
/** @type {Resolver} */

function resolveHeadingAtx(events, context) {
  var contentEnd = events.length - 2;
  var contentStart = 3;
  /** @type {Token} */

  var content;
  /** @type {Token} */

  var text; // Prefix whitespace, part of the opening.

  if (events[contentStart][1].type === 'whitespace') {
    contentStart += 2;
  } // Suffix whitespace, part of the closing.


  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === 'whitespace') {
    contentEnd -= 2;
  }

  if (events[contentEnd][1].type === 'atxHeadingSequence' && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === 'whitespace')) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }

  if (contentEnd > contentStart) {
    content = {
      type: 'atxHeadingText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text = {
      type: 'chunkText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      // @ts-expect-error Constants are fine to assign.
      contentType: 'text'
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [['enter', content, context], ['enter', text, context], ['exit', text, context], ['exit', content, context]]);
  }

  return events;
}
/** @type {Tokenizer} */


function tokenizeHeadingAtx(effects, ok, nok) {
  var self = this;
  var size = 0;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('atxHeading');
    effects.enter('atxHeadingSequence');
    return fenceOpenInside(code);
  }
  /** @type {State} */


  function fenceOpenInside(code) {
    if (code === 35 && size++ < 6) {
      effects.consume(code);
      return fenceOpenInside;
    }

    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingSequence');
      return self.interrupt ? ok(code) : headingBreak(code);
    }

    return nok(code);
  }
  /** @type {State} */


  function headingBreak(code) {
    if (code === 35) {
      effects.enter('atxHeadingSequence');
      return sequence(code);
    }

    if (code === null || markdownLineEnding(code)) {
      effects.exit('atxHeading');
      return ok(code);
    }

    if (markdownSpace(code)) {
      return factorySpace(effects, headingBreak, 'whitespace')(code);
    }

    effects.enter('atxHeadingText');
    return data(code);
  }
  /** @type {State} */


  function sequence(code) {
    if (code === 35) {
      effects.consume(code);
      return sequence;
    }

    effects.exit('atxHeadingSequence');
    return headingBreak(code);
  }
  /** @type {State} */


  function data(code) {
    if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingText');
      return headingBreak(code);
    }

    effects.consume(code);
    return data;
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/setext-underline.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */


/** @type {Construct} */

var setextUnderline = {
  name: 'setextUnderline',
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
/** @type {Resolver} */

function resolveToSetextUnderline(events, context) {
  var index = events.length;
  /** @type {number|undefined} */

  var content;
  /** @type {number|undefined} */

  var text;
  /** @type {number|undefined} */

  var definition; // Find the opening of the content.
  // It’ll always exist: we don’t tokenize if it isn’t there.

  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === 'content') {
        content = index;
        break;
      }

      if (events[index][1].type === 'paragraph') {
        text = index;
      }
    } // Exit
    else {
      if (events[index][1].type === 'content') {
        // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1);
      }

      if (!definition && events[index][1].type === 'definition') {
        definition = index;
      }
    }
  }

  var heading = {
    type: 'setextHeading',
    start: Object.assign({}, events[text][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  }; // Change the paragraph to setext heading text.

  events[text][1].type = 'setextHeadingText'; // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.

  if (definition) {
    events.splice(text, 0, ['enter', heading, context]);
    events.splice(definition + 1, 0, ['exit', events[content][1], context]);
    events[content][1].end = Object.assign({}, events[definition][1].end);
  } else {
    events[content][1] = heading;
  } // Add the heading exit at the end.


  events.push(['exit', heading, context]);
  return events;
}
/** @type {Tokenizer} */


function tokenizeSetextUnderline(effects, ok, nok) {
  var self = this;
  var index = self.events.length;
  /** @type {NonNullable<Code>} */

  var marker;
  /** @type {boolean} */

  var paragraph; // Find an opening.

  while (index--) {
    // Skip enter/exit of line ending, line prefix, and content.
    // We can now either have a definition or a paragraph.
    if (self.events[index][1].type !== 'lineEnding' && self.events[index][1].type !== 'linePrefix' && self.events[index][1].type !== 'content') {
      paragraph = self.events[index][1].type === 'paragraph';
      break;
    }
  }

  return start;
  /** @type {State} */

  function start(code) {
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
      effects.enter('setextHeadingLine');
      effects.enter('setextHeadingLineSequence');
      marker = code;
      return closingSequence(code);
    }

    return nok(code);
  }
  /** @type {State} */


  function closingSequence(code) {
    if (code === marker) {
      effects.consume(code);
      return closingSequence;
    }

    effects.exit('setextHeadingLineSequence');
    return factorySpace(effects, closingSequenceEnd, 'lineSuffix')(code);
  }
  /** @type {State} */


  function closingSequenceEnd(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('setextHeadingLine');
      return ok(code);
    }

    return nok(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-util-html-tag-name/index.js
/**
 * List of lowercase HTML tag names which when parsing HTML (flow), result
 * in more relaxed rules (condition 6): because they are known blocks, the
 * HTML-like syntax doesn’t have to be strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.29/#html-blocks>.
 */
var htmlBlockNames = ['address', 'article', 'aside', 'base', 'basefont', 'blockquote', 'body', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dialog', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'iframe', 'legend', 'li', 'link', 'main', 'menu', 'menuitem', 'nav', 'noframes', 'ol', 'optgroup', 'option', 'p', 'param', 'section', 'source', 'summary', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul'];
/**
 * List of lowercase HTML tag names which when parsing HTML (flow), result in
 * HTML that can include lines w/o exiting, until a closing tag also in this
 * list is found (condition 1).
 *
 * This module is copied from:
 * <https://spec.commonmark.org/0.29/#html-blocks>.
 *
 * Note that `textarea` is not available in `CommonMark@0.29` but has been
 * merged to the primary branch and is slated to be released in the next release
 * of CommonMark.
 */

var htmlRawNames = ['pre', 'script', 'style', 'textarea'];
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/html-flow.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */



/** @type {Construct} */

var htmlFlow = {
  name: 'htmlFlow',
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
};
/** @type {Construct} */

var nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: true
};
/** @type {Resolver} */

function resolveToHtmlFlow(events) {
  var index = events.length;

  while (index--) {
    if (events[index][0] === 'enter' && events[index][1].type === 'htmlFlow') {
      break;
    }
  }

  if (index > 1 && events[index - 2][1].type === 'linePrefix') {
    // Add the prefix start to the HTML token.
    events[index][1].start = events[index - 2][1].start; // Add the prefix start to the HTML line token.

    events[index + 1][1].start = events[index - 2][1].start; // Remove the line prefix.

    events.splice(index - 2, 2);
  }

  return events;
}
/** @type {Tokenizer} */


function tokenizeHtmlFlow(effects, ok, nok) {
  var self = this;
  /** @type {number} */

  var kind;
  /** @type {boolean} */

  var startTag;
  /** @type {string} */

  var buffer;
  /** @type {number} */

  var index;
  /** @type {Code} */

  var marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('htmlFlow');
    effects.enter('htmlFlowData');
    effects.consume(code);
    return open;
  }
  /** @type {State} */


  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationStart;
    }

    if (code === 47) {
      effects.consume(code);
      return tagCloseStart;
    }

    if (code === 63) {
      effects.consume(code);
      kind = 3; // While we’re in an instruction instead of a declaration, we’re on a `?`
      // right now, so we do need to search for `>`, similar to declarations.

      return self.interrupt ? ok : continuationDeclarationInside;
    }

    if (asciiAlpha(code)) {
      effects.consume(code);
      buffer = String.fromCharCode(code);
      startTag = true;
      return tagName;
    }

    return nok(code);
  }
  /** @type {State} */


  function declarationStart(code) {
    if (code === 45) {
      effects.consume(code);
      kind = 2;
      return commentOpenInside;
    }

    if (code === 91) {
      effects.consume(code);
      kind = 5;
      buffer = 'CDATA[';
      index = 0;
      return cdataOpenInside;
    }

    if (asciiAlpha(code)) {
      effects.consume(code);
      kind = 4;
      return self.interrupt ? ok : continuationDeclarationInside;
    }

    return nok(code);
  }
  /** @type {State} */


  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code);
      return self.interrupt ? ok : continuationDeclarationInside;
    }

    return nok(code);
  }
  /** @type {State} */


  function cdataOpenInside(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code);
      return index === buffer.length ? self.interrupt ? ok : continuation : cdataOpenInside;
    }

    return nok(code);
  }
  /** @type {State} */


  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      buffer = String.fromCharCode(code);
      return tagName;
    }

    return nok(code);
  }
  /** @type {State} */


  function tagName(code) {
    if (code === null || code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      if (code !== 47 && startTag && htmlRawNames.includes(buffer.toLowerCase())) {
        kind = 1;
        return self.interrupt ? ok(code) : continuation(code);
      }

      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        kind = 6;

        if (code === 47) {
          effects.consume(code);
          return basicSelfClosing;
        }

        return self.interrupt ? ok(code) : continuation(code);
      }

      kind = 7; // Do not support complete HTML when interrupting

      return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
    }

    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return tagName;
    }

    return nok(code);
  }
  /** @type {State} */


  function basicSelfClosing(code) {
    if (code === 62) {
      effects.consume(code);
      return self.interrupt ? ok : continuation;
    }

    return nok(code);
  }
  /** @type {State} */


  function completeClosingTagAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeClosingTagAfter;
    }

    return completeEnd(code);
  }
  /** @type {State} */


  function completeAttributeNameBefore(code) {
    if (code === 47) {
      effects.consume(code);
      return completeEnd;
    }

    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code);
      return completeAttributeName;
    }

    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeNameBefore;
    }

    return completeEnd(code);
  }
  /** @type {State} */


  function completeAttributeName(code) {
    if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return completeAttributeName;
    }

    return completeAttributeNameAfter(code);
  }
  /** @type {State} */


  function completeAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }

    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeNameAfter;
    }

    return completeAttributeNameBefore(code);
  }
  /** @type {State} */


  function completeAttributeValueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }

    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return completeAttributeValueQuoted;
    }

    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }

    marker = null;
    return completeAttributeValueUnquoted(code);
  }
  /** @type {State} */


  function completeAttributeValueQuoted(code) {
    if (code === null || markdownLineEnding(code)) {
      return nok(code);
    }

    if (code === marker) {
      effects.consume(code);
      return completeAttributeValueQuotedAfter;
    }

    effects.consume(code);
    return completeAttributeValueQuoted;
  }
  /** @type {State} */


  function completeAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || markdownLineEndingOrSpace(code)) {
      return completeAttributeNameAfter(code);
    }

    effects.consume(code);
    return completeAttributeValueUnquoted;
  }
  /** @type {State} */


  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || markdownSpace(code)) {
      return completeAttributeNameBefore(code);
    }

    return nok(code);
  }
  /** @type {State} */


  function completeEnd(code) {
    if (code === 62) {
      effects.consume(code);
      return completeAfter;
    }

    return nok(code);
  }
  /** @type {State} */


  function completeAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAfter;
    }

    return code === null || markdownLineEnding(code) ? continuation(code) : nok(code);
  }
  /** @type {State} */


  function continuation(code) {
    if (code === 45 && kind === 2) {
      effects.consume(code);
      return continuationCommentInside;
    }

    if (code === 60 && kind === 1) {
      effects.consume(code);
      return continuationRawTagOpen;
    }

    if (code === 62 && kind === 4) {
      effects.consume(code);
      return continuationClose;
    }

    if (code === 63 && kind === 3) {
      effects.consume(code);
      return continuationDeclarationInside;
    }

    if (code === 93 && kind === 5) {
      effects.consume(code);
      return continuationCharacterDataInside;
    }

    if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {
      return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
    }

    if (code === null || markdownLineEnding(code)) {
      return continuationAtLineEnding(code);
    }

    effects.consume(code);
    return continuation;
  }
  /** @type {State} */


  function continuationAtLineEnding(code) {
    effects.exit('htmlFlowData');
    return htmlContinueStart(code);
  }
  /** @type {State} */


  function htmlContinueStart(code) {
    if (code === null) {
      return done(code);
    }

    if (markdownLineEnding(code)) {
      return effects.attempt({
        tokenize: htmlLineEnd,
        partial: true
      }, htmlContinueStart, done)(code);
    }

    effects.enter('htmlFlowData');
    return continuation(code);
  }
  /** @type {Tokenizer} */


  function htmlLineEnd(effects, ok, nok) {
    return start;
    /** @type {State} */

    function start(code) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return lineStart;
    }
    /** @type {State} */


    function lineStart(code) {
      return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
    }
  }
  /** @type {State} */


  function continuationCommentInside(code) {
    if (code === 45) {
      effects.consume(code);
      return continuationDeclarationInside;
    }

    return continuation(code);
  }
  /** @type {State} */


  function continuationRawTagOpen(code) {
    if (code === 47) {
      effects.consume(code);
      buffer = '';
      return continuationRawEndTag;
    }

    return continuation(code);
  }
  /** @type {State} */


  function continuationRawEndTag(code) {
    if (code === 62 && htmlRawNames.includes(buffer.toLowerCase())) {
      effects.consume(code);
      return continuationClose;
    }

    if (asciiAlpha(code) && buffer.length < 8) {
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return continuationRawEndTag;
    }

    return continuation(code);
  }
  /** @type {State} */


  function continuationCharacterDataInside(code) {
    if (code === 93) {
      effects.consume(code);
      return continuationDeclarationInside;
    }

    return continuation(code);
  }
  /** @type {State} */


  function continuationDeclarationInside(code) {
    if (code === 62) {
      effects.consume(code);
      return continuationClose;
    }

    return continuation(code);
  }
  /** @type {State} */


  function continuationClose(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('htmlFlowData');
      return done(code);
    }

    effects.consume(code);
    return continuationClose;
  }
  /** @type {State} */


  function done(code) {
    effects.exit('htmlFlow');
    return ok(code);
  }
}
/** @type {Tokenizer} */


function tokenizeNextBlank(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.exit('htmlFlowData');
    effects.enter('lineEndingBlank');
    effects.consume(code);
    effects.exit('lineEndingBlank');
    return effects.attempt(blankLine, ok, nok);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/code-fenced.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */


/** @type {Construct} */

var codeFenced = {
  name: 'codeFenced',
  tokenize: tokenizeCodeFenced,
  concrete: true
};
/** @type {Tokenizer} */

function tokenizeCodeFenced(effects, ok, nok) {
  var self = this;
  /** @type {Construct} */

  var closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: true
  };
  /** @type {Construct} */

  var nonLazyLine = {
    tokenize: tokenizeNonLazyLine,
    partial: true
  };
  var tail = this.events[this.events.length - 1];
  var initialPrefix = tail && tail[1].type === 'linePrefix' ? tail[2].sliceSerialize(tail[1], true).length : 0;
  var sizeOpen = 0;
  /** @type {NonNullable<Code>} */

  var marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('codeFenced');
    effects.enter('codeFencedFence');
    effects.enter('codeFencedFenceSequence');
    marker = code;
    return sequenceOpen(code);
  }
  /** @type {State} */


  function sequenceOpen(code) {
    if (code === marker) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }

    effects.exit('codeFencedFenceSequence');
    return sizeOpen < 3 ? nok(code) : factorySpace(effects, infoOpen, 'whitespace')(code);
  }
  /** @type {State} */


  function infoOpen(code) {
    if (code === null || markdownLineEnding(code)) {
      return openAfter(code);
    }

    effects.enter('codeFencedFenceInfo');
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return info(code);
  }
  /** @type {State} */


  function info(code) {
    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceInfo');
      return factorySpace(effects, infoAfter, 'whitespace')(code);
    }

    if (code === 96 && code === marker) return nok(code);
    effects.consume(code);
    return info;
  }
  /** @type {State} */


  function infoAfter(code) {
    if (code === null || markdownLineEnding(code)) {
      return openAfter(code);
    }

    effects.enter('codeFencedFenceMeta');
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return meta(code);
  }
  /** @type {State} */


  function meta(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceMeta');
      return openAfter(code);
    }

    if (code === 96 && code === marker) return nok(code);
    effects.consume(code);
    return meta;
  }
  /** @type {State} */


  function openAfter(code) {
    effects.exit('codeFencedFence');
    return self.interrupt ? ok(code) : contentStart(code);
  }
  /** @type {State} */


  function contentStart(code) {
    if (code === null) {
      return after(code);
    }

    if (markdownLineEnding(code)) {
      return effects.attempt(nonLazyLine, effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace(effects, contentStart, 'linePrefix', initialPrefix + 1) : contentStart), after)(code);
    }

    effects.enter('codeFlowValue');
    return contentContinue(code);
  }
  /** @type {State} */


  function contentContinue(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue');
      return contentStart(code);
    }

    effects.consume(code);
    return contentContinue;
  }
  /** @type {State} */


  function after(code) {
    effects.exit('codeFenced');
    return ok(code);
  }
  /** @type {Tokenizer} */


  function tokenizeNonLazyLine(effects, ok, nok) {
    var self = this;
    return start;
    /** @type {State} */

    function start(code) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return lineStart;
    }
    /** @type {State} */


    function lineStart(code) {
      return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
    }
  }
  /** @type {Tokenizer} */


  function tokenizeClosingFence(effects, ok, nok) {
    var size = 0;
    return factorySpace(effects, closingSequenceStart, 'linePrefix', this.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);
    /** @type {State} */

    function closingSequenceStart(code) {
      effects.enter('codeFencedFence');
      effects.enter('codeFencedFenceSequence');
      return closingSequence(code);
    }
    /** @type {State} */


    function closingSequence(code) {
      if (code === marker) {
        effects.consume(code);
        size++;
        return closingSequence;
      }

      if (size < sizeOpen) return nok(code);
      effects.exit('codeFencedFenceSequence');
      return factorySpace(effects, closingSequenceEnd, 'whitespace')(code);
    }
    /** @type {State} */


    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('codeFencedFence');
        return ok(code);
      }

      return nok(code);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/node_modules/parse-entities/decode-entity.browser.js
/* eslint-env browser */
var semicolon = 59; // `;`

/** @type {HTMLElement} */

var decode_entity_browser_element;
/**
 * @param {string} characters
 * @returns {string|false}
 */

function decodeEntity(characters) {
  var entity = '&' + characters + ';';
  /** @type {string} */

  var char;
  decode_entity_browser_element = decode_entity_browser_element || document.createElement('i');
  decode_entity_browser_element.innerHTML = entity;
  char = decode_entity_browser_element.textContent; // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of `&notit;`
  // will result in the string `¬it;`.
  // When we encounter a trailing semicolon after parsing and the entity to
  // decode was not a semicolon (`&semi;`), we can assume that the matching was
  // incomplete

  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
    return false;
  } // If the decoded string is equal to the input, the entity was not valid


  return char === entity ? false : char;
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/character-reference.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */


/** @type {Construct} */

var characterReference = {
  name: 'characterReference',
  tokenize: tokenizeCharacterReference
};
/** @type {Tokenizer} */

function tokenizeCharacterReference(effects, ok, nok) {
  var self = this;
  var size = 0;
  /** @type {number} */

  var max;
  /** @type {(code: Code) => code is number} */

  var test;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('characterReference');
    effects.enter('characterReferenceMarker');
    effects.consume(code);
    effects.exit('characterReferenceMarker');
    return open;
  }
  /** @type {State} */


  function open(code) {
    if (code === 35) {
      effects.enter('characterReferenceMarkerNumeric');
      effects.consume(code);
      effects.exit('characterReferenceMarkerNumeric');
      return numeric;
    }

    effects.enter('characterReferenceValue');
    max = 31;
    test = asciiAlphanumeric;
    return value(code);
  }
  /** @type {State} */


  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter('characterReferenceMarkerHexadecimal');
      effects.consume(code);
      effects.exit('characterReferenceMarkerHexadecimal');
      effects.enter('characterReferenceValue');
      max = 6;
      test = asciiHexDigit;
      return value;
    }

    effects.enter('characterReferenceValue');
    max = 7;
    test = asciiDigit;
    return value(code);
  }
  /** @type {State} */


  function value(code) {
    /** @type {Token} */
    var token;

    if (code === 59 && size) {
      token = effects.exit('characterReferenceValue');

      if (test === asciiAlphanumeric && !decodeEntity(self.sliceSerialize(token))) {
        return nok(code);
      }

      effects.enter('characterReferenceMarker');
      effects.consume(code);
      effects.exit('characterReferenceMarker');
      effects.exit('characterReference');
      return ok;
    }

    if (test(code) && size++ < max) {
      effects.consume(code);
      return value;
    }

    return nok(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/character-escape.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */

var characterEscape = {
  name: 'characterEscape',
  tokenize: tokenizeCharacterEscape
};
/** @type {Tokenizer} */

function tokenizeCharacterEscape(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('characterEscape');
    effects.enter('escapeMarker');
    effects.consume(code);
    effects.exit('escapeMarker');
    return open;
  }
  /** @type {State} */


  function open(code) {
    if (asciiPunctuation(code)) {
      effects.enter('characterEscapeValue');
      effects.consume(code);
      effects.exit('characterEscapeValue');
      effects.exit('characterEscape');
      return ok;
    }

    return nok(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/line-ending.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */


/** @type {Construct} */

var lineEnding = {
  name: 'lineEnding',
  tokenize: tokenizeLineEnding
};
/** @type {Tokenizer} */

function tokenizeLineEnding(effects, ok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, ok, 'linePrefix');
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/label-end.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */








/** @type {Construct} */

var labelEnd = {
  name: 'labelEnd',
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
};
/** @type {Construct} */

var resourceConstruct = {
  tokenize: tokenizeResource
};
/** @type {Construct} */

var fullReferenceConstruct = {
  tokenize: tokenizeFullReference
};
/** @type {Construct} */

var collapsedReferenceConstruct = {
  tokenize: tokenizeCollapsedReference
};
/** @type {Resolver} */

function resolveAllLabelEnd(events) {
  var index = -1;
  /** @type {Token} */

  var token;

  while (++index < events.length) {
    token = events[index][1];

    if (token.type === 'labelImage' || token.type === 'labelLink' || token.type === 'labelEnd') {
      // Remove the marker.
      events.splice(index + 1, token.type === 'labelImage' ? 4 : 2);
      token.type = 'data';
      index++;
    }
  }

  return events;
}
/** @type {Resolver} */


function resolveToLabelEnd(events, context) {
  var index = events.length;
  var offset = 0;
  /** @type {Token} */

  var token;
  /** @type {number|undefined} */

  var open;
  /** @type {number|undefined} */

  var close;
  /** @type {Event[]} */

  var media; // Find an opening.

  while (index--) {
    token = events[index][1];

    if (open) {
      // If we see another link, or inactive link label, we’ve been here before.
      if (token.type === 'link' || token.type === 'labelLink' && token._inactive) {
        break;
      } // Mark other link openings as inactive, as we can’t have links in
      // links.


      if (events[index][0] === 'enter' && token.type === 'labelLink') {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index][0] === 'enter' && (token.type === 'labelImage' || token.type === 'labelLink') && !token._balanced) {
        open = index;

        if (token.type !== 'labelLink') {
          offset = 2;
          break;
        }
      }
    } else if (token.type === 'labelEnd') {
      close = index;
    }
  }

  var group = {
    type: events[open][1].type === 'labelLink' ? 'link' : 'image',
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  var label = {
    type: 'label',
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  };
  var text = {
    type: 'labelText',
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  media = [['enter', group, context], ['enter', label, context]]; // Opening marker.

  media = push(media, events.slice(open + 1, open + offset + 3)); // Text open.

  media = push(media, [['enter', text, context]]); // Between.

  media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context)); // Text close, marker close, label close.

  media = push(media, [['exit', text, context], events[close - 2], events[close - 1], ['exit', label, context]]); // Reference, resource, or so.

  media = push(media, events.slice(close + 1)); // Media close.

  media = push(media, [['exit', group, context]]);
  splice(events, open, events.length, media);
  return events;
}
/** @type {Tokenizer} */


function tokenizeLabelEnd(effects, ok, nok) {
  var self = this;
  var index = self.events.length;
  /** @type {Token} */

  var labelStart;
  /** @type {boolean} */

  var defined; // Find an opening.

  while (index--) {
    if ((self.events[index][1].type === 'labelImage' || self.events[index][1].type === 'labelLink') && !self.events[index][1]._balanced) {
      labelStart = self.events[index][1];
      break;
    }
  }

  return start;
  /** @type {State} */

  function start(code) {
    if (!labelStart) {
      return nok(code);
    } // It’s a balanced bracket, but contains a link.


    if (labelStart._inactive) return balanced(code);
    defined = self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    })));
    effects.enter('labelEnd');
    effects.enter('labelMarker');
    effects.consume(code);
    effects.exit('labelMarker');
    effects.exit('labelEnd');
    return afterLabelEnd;
  }
  /** @type {State} */


  function afterLabelEnd(code) {
    // Resource: `[asd](fgh)`.
    if (code === 40) {
      return effects.attempt(resourceConstruct, ok, defined ? ok : balanced)(code);
    } // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?


    if (code === 91) {
      return effects.attempt(fullReferenceConstruct, ok, defined ? effects.attempt(collapsedReferenceConstruct, ok, balanced) : balanced)(code);
    } // Shortcut reference: `[asd]`?


    return defined ? ok(code) : balanced(code);
  }
  /** @type {State} */


  function balanced(code) {
    labelStart._balanced = true;
    return nok(code);
  }
}
/** @type {Tokenizer} */


function tokenizeResource(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('resource');
    effects.enter('resourceMarker');
    effects.consume(code);
    effects.exit('resourceMarker');
    return factoryWhitespace(effects, open);
  }
  /** @type {State} */


  function open(code) {
    if (code === 41) {
      return end(code);
    }

    return factoryDestination(effects, destinationAfter, nok, 'resourceDestination', 'resourceDestinationLiteral', 'resourceDestinationLiteralMarker', 'resourceDestinationRaw', 'resourceDestinationString', 3)(code);
  }
  /** @type {State} */


  function destinationAfter(code) {
    return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, between)(code) : end(code);
  }
  /** @type {State} */


  function between(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(effects, factoryWhitespace(effects, end), nok, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(code);
    }

    return end(code);
  }
  /** @type {State} */


  function end(code) {
    if (code === 41) {
      effects.enter('resourceMarker');
      effects.consume(code);
      effects.exit('resourceMarker');
      effects.exit('resource');
      return ok;
    }

    return nok(code);
  }
}
/** @type {Tokenizer} */


function tokenizeFullReference(effects, ok, nok) {
  var self = this;
  return start;
  /** @type {State} */

  function start(code) {
    return factoryLabel.call(self, effects, afterLabel, nok, 'reference', 'referenceMarker', 'referenceString')(code);
  }
  /** @type {State} */


  function afterLabel(code) {
    return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok(code) : nok(code);
  }
}
/** @type {Tokenizer} */


function tokenizeCollapsedReference(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('reference');
    effects.enter('referenceMarker');
    effects.consume(code);
    effects.exit('referenceMarker');
    return open;
  }
  /** @type {State} */


  function open(code) {
    if (code === 93) {
      effects.enter('referenceMarker');
      effects.consume(code);
      effects.exit('referenceMarker');
      effects.exit('reference');
      return ok;
    }

    return nok(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/label-start-image.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */

var labelStartImage = {
  name: 'labelStartImage',
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};
/** @type {Tokenizer} */

function tokenizeLabelStartImage(effects, ok, nok) {
  var self = this;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('labelImage');
    effects.enter('labelImageMarker');
    effects.consume(code);
    effects.exit('labelImageMarker');
    return open;
  }
  /** @type {State} */


  function open(code) {
    if (code === 91) {
      effects.enter('labelMarker');
      effects.consume(code);
      effects.exit('labelMarker');
      effects.exit('labelImage');
      return after;
    }

    return nok(code);
  }
  /** @type {State} */


  function after(code) {
    /* Hidden footnotes hook */

    /* c8 ignore next 3 */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs ? nok(code) : ok(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-util-classify-character/index.js
/**
 * @typedef {import('micromark-util-types').Code} Code
 */

/**
 * Classify whether a character code represents whitespace, punctuation, or
 * something else.
 *
 * Used for attention (emphasis, strong), whose sequences can open or close
 * based on the class of surrounding characters.
 *
 * Note that eof (`null`) is seen as whitespace.
 *
 * @param {Code} code
 * @returns {number|undefined}
 */

function classifyCharacter(code) {
  if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
    return 1;
  }

  if (unicodePunctuation(code)) {
    return 2;
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/attention.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Point} Point
 */



/** @type {Construct} */

var attention = {
  name: 'attention',
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
/**
 * Take all events and resolve attention to emphasis or strong.
 *
 * @type {Resolver}
 */

function resolveAllAttention(events, context) {
  var index = -1;
  /** @type {number} */

  var open;
  /** @type {Token} */

  var group;
  /** @type {Token} */

  var text;
  /** @type {Token} */

  var openingSequence;
  /** @type {Token} */

  var closingSequence;
  /** @type {number} */

  var use;
  /** @type {Event[]} */

  var nextEvents;
  /** @type {number} */

  var offset; // Walk through all events.
  //
  // Note: performance of this is fine on an mb of normal markdown, but it’s
  // a bottleneck for malicious stuff.

  while (++index < events.length) {
    // Find a token that can close.
    if (events[index][0] === 'enter' && events[index][1].type === 'attentionSequence' && events[index][1]._close) {
      open = index; // Now walk back to find an opener.

      while (open--) {
        // Find a token that can open the closer.
        if (events[open][0] === 'exit' && events[open][1].type === 'attentionSequence' && events[open][1]._open && // If the markers are the same:
        context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
          // If the opening can close or the closing can open,
          // and the close size *is not* a multiple of three,
          // but the sum of the opening and closing size *is* multiple of three,
          // then don’t match.
          if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) {
            continue;
          } // Number of markers to use from the sequence.


          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
          var start = Object.assign({}, events[open][1].end);
          var end = Object.assign({}, events[index][1].start);
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start,
            end: Object.assign({}, events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: Object.assign({}, events[index][1].start),
            end
          };
          text = {
            type: use > 1 ? 'strongText' : 'emphasisText',
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index][1].start)
          };
          group = {
            type: use > 1 ? 'strong' : 'emphasis',
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          };
          events[open][1].end = Object.assign({}, openingSequence.start);
          events[index][1].start = Object.assign({}, closingSequence.end);
          nextEvents = []; // If there are more markers in the opening, add them before.

          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [['enter', events[open][1], context], ['exit', events[open][1], context]]);
          } // Opening.


          nextEvents = push(nextEvents, [['enter', group, context], ['enter', openingSequence, context], ['exit', openingSequence, context], ['enter', text, context]]); // Between.

          nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context)); // Closing.

          nextEvents = push(nextEvents, [['exit', text, context], ['enter', closingSequence, context], ['exit', closingSequence, context], ['exit', group, context]]); // If there are more markers in the closing, add them after.

          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [['enter', events[index][1], context], ['exit', events[index][1], context]]);
          } else {
            offset = 0;
          }

          splice(events, open - 1, index - open + 3, nextEvents);
          index = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  } // Remove remaining sequences.


  index = -1;

  while (++index < events.length) {
    if (events[index][1].type === 'attentionSequence') {
      events[index][1].type = 'data';
    }
  }

  return events;
}
/** @type {Tokenizer} */


function tokenizeAttention(effects, ok) {
  var attentionMarkers = this.parser.constructs.attentionMarkers.null;
  var previous = this.previous;
  var before = classifyCharacter(previous);
  /** @type {NonNullable<Code>} */

  var marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('attentionSequence');
    marker = code;
    return sequence(code);
  }
  /** @type {State} */


  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      return sequence;
    }

    var token = effects.exit('attentionSequence');
    var after = classifyCharacter(code);
    var open = !after || after === 2 && before || attentionMarkers.includes(code);
    var close = !before || before === 2 && after || attentionMarkers.includes(previous);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok(code);
  }
}
/**
 * Move a point a bit.
 *
 * Note: `move` only works inside lines! It’s not possible to move past other
 * chunks (replacement characters, tabs, or line endings).
 *
 * @param {Point} point
 * @param {number} offset
 * @returns {void}
 */


function movePoint(point, offset) {
  point.column += offset;
  point.offset += offset;
  point._bufferIndex += offset;
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/autolink.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */

var autolink = {
  name: 'autolink',
  tokenize: tokenizeAutolink
};
/** @type {Tokenizer} */

function tokenizeAutolink(effects, ok, nok) {
  var size = 1;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('autolink');
    effects.enter('autolinkMarker');
    effects.consume(code);
    effects.exit('autolinkMarker');
    effects.enter('autolinkProtocol');
    return open;
  }
  /** @type {State} */


  function open(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      return schemeOrEmailAtext;
    }

    return asciiAtext(code) ? emailAtext(code) : nok(code);
  }
  /** @type {State} */


  function schemeOrEmailAtext(code) {
    return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
  }
  /** @type {State} */


  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code);
      return urlInside;
    }

    if ((code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) && size++ < 32) {
      effects.consume(code);
      return schemeInsideOrEmailAtext;
    }

    return emailAtext(code);
  }
  /** @type {State} */


  function urlInside(code) {
    if (code === 62) {
      effects.exit('autolinkProtocol');
      return end(code);
    }

    if (code === null || code === 32 || code === 60 || asciiControl(code)) {
      return nok(code);
    }

    effects.consume(code);
    return urlInside;
  }
  /** @type {State} */


  function emailAtext(code) {
    if (code === 64) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot;
    }

    if (asciiAtext(code)) {
      effects.consume(code);
      return emailAtext;
    }

    return nok(code);
  }
  /** @type {State} */


  function emailAtSignOrDot(code) {
    return asciiAlphanumeric(code) ? emailLabel(code) : nok(code);
  }
  /** @type {State} */


  function emailLabel(code) {
    if (code === 46) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot;
    }

    if (code === 62) {
      // Exit, then change the type.
      effects.exit('autolinkProtocol').type = 'autolinkEmail';
      return end(code);
    }

    return emailValue(code);
  }
  /** @type {State} */


  function emailValue(code) {
    if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
      effects.consume(code);
      return code === 45 ? emailValue : emailLabel;
    }

    return nok(code);
  }
  /** @type {State} */


  function end(code) {
    effects.enter('autolinkMarker');
    effects.consume(code);
    effects.exit('autolinkMarker');
    effects.exit('autolink');
    return ok;
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/html-text.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */


/** @type {Construct} */

var htmlText = {
  name: 'htmlText',
  tokenize: tokenizeHtmlText
};
/** @type {Tokenizer} */

function tokenizeHtmlText(effects, ok, nok) {
  var self = this;
  /** @type {NonNullable<Code>|undefined} */

  var marker;
  /** @type {string} */

  var buffer;
  /** @type {number} */

  var index;
  /** @type {State} */

  var returnState;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('htmlText');
    effects.enter('htmlTextData');
    effects.consume(code);
    return open;
  }
  /** @type {State} */


  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationOpen;
    }

    if (code === 47) {
      effects.consume(code);
      return tagCloseStart;
    }

    if (code === 63) {
      effects.consume(code);
      return instruction;
    }

    if (asciiAlpha(code)) {
      effects.consume(code);
      return tagOpen;
    }

    return nok(code);
  }
  /** @type {State} */


  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentOpen;
    }

    if (code === 91) {
      effects.consume(code);
      buffer = 'CDATA[';
      index = 0;
      return cdataOpen;
    }

    if (asciiAlpha(code)) {
      effects.consume(code);
      return declaration;
    }

    return nok(code);
  }
  /** @type {State} */


  function commentOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentStart;
    }

    return nok(code);
  }
  /** @type {State} */


  function commentStart(code) {
    if (code === null || code === 62) {
      return nok(code);
    }

    if (code === 45) {
      effects.consume(code);
      return commentStartDash;
    }

    return comment(code);
  }
  /** @type {State} */


  function commentStartDash(code) {
    if (code === null || code === 62) {
      return nok(code);
    }

    return comment(code);
  }
  /** @type {State} */


  function comment(code) {
    if (code === null) {
      return nok(code);
    }

    if (code === 45) {
      effects.consume(code);
      return commentClose;
    }

    if (markdownLineEnding(code)) {
      returnState = comment;
      return atLineEnding(code);
    }

    effects.consume(code);
    return comment;
  }
  /** @type {State} */


  function commentClose(code) {
    if (code === 45) {
      effects.consume(code);
      return end;
    }

    return comment(code);
  }
  /** @type {State} */


  function cdataOpen(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code);
      return index === buffer.length ? cdata : cdataOpen;
    }

    return nok(code);
  }
  /** @type {State} */


  function cdata(code) {
    if (code === null) {
      return nok(code);
    }

    if (code === 93) {
      effects.consume(code);
      return cdataClose;
    }

    if (markdownLineEnding(code)) {
      returnState = cdata;
      return atLineEnding(code);
    }

    effects.consume(code);
    return cdata;
  }
  /** @type {State} */


  function cdataClose(code) {
    if (code === 93) {
      effects.consume(code);
      return cdataEnd;
    }

    return cdata(code);
  }
  /** @type {State} */


  function cdataEnd(code) {
    if (code === 62) {
      return end(code);
    }

    if (code === 93) {
      effects.consume(code);
      return cdataEnd;
    }

    return cdata(code);
  }
  /** @type {State} */


  function declaration(code) {
    if (code === null || code === 62) {
      return end(code);
    }

    if (markdownLineEnding(code)) {
      returnState = declaration;
      return atLineEnding(code);
    }

    effects.consume(code);
    return declaration;
  }
  /** @type {State} */


  function instruction(code) {
    if (code === null) {
      return nok(code);
    }

    if (code === 63) {
      effects.consume(code);
      return instructionClose;
    }

    if (markdownLineEnding(code)) {
      returnState = instruction;
      return atLineEnding(code);
    }

    effects.consume(code);
    return instruction;
  }
  /** @type {State} */


  function instructionClose(code) {
    return code === 62 ? end(code) : instruction(code);
  }
  /** @type {State} */


  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      return tagClose;
    }

    return nok(code);
  }
  /** @type {State} */


  function tagClose(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagClose;
    }

    return tagCloseBetween(code);
  }
  /** @type {State} */


  function tagCloseBetween(code) {
    if (markdownLineEnding(code)) {
      returnState = tagCloseBetween;
      return atLineEnding(code);
    }

    if (markdownSpace(code)) {
      effects.consume(code);
      return tagCloseBetween;
    }

    return end(code);
  }
  /** @type {State} */


  function tagOpen(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagOpen;
    }

    if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code);
    }

    return nok(code);
  }
  /** @type {State} */


  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code);
      return end;
    }

    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenBetween;
      return atLineEnding(code);
    }

    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenBetween;
    }

    return end(code);
  }
  /** @type {State} */


  function tagOpenAttributeName(code) {
    if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }

    return tagOpenAttributeNameAfter(code);
  }
  /** @type {State} */


  function tagOpenAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeNameAfter;
      return atLineEnding(code);
    }

    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenAttributeNameAfter;
    }

    return tagOpenBetween(code);
  }
  /** @type {State} */


  function tagOpenAttributeValueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }

    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return tagOpenAttributeValueQuoted;
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueBefore;
      return atLineEnding(code);
    }

    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }

    effects.consume(code);
    marker = undefined;
    return tagOpenAttributeValueUnquoted;
  }
  /** @type {State} */


  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code);
      return tagOpenAttributeValueQuotedAfter;
    }

    if (code === null) {
      return nok(code);
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueQuoted;
      return atLineEnding(code);
    }

    effects.consume(code);
    return tagOpenAttributeValueQuoted;
  }
  /** @type {State} */


  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code);
    }

    return nok(code);
  }
  /** @type {State} */


  function tagOpenAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
      return nok(code);
    }

    if (code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code);
    }

    effects.consume(code);
    return tagOpenAttributeValueUnquoted;
  } // We can’t have blank lines in content, so no need to worry about empty
  // tokens.

  /** @type {State} */


  function atLineEnding(code) {
    effects.exit('htmlTextData');
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, afterPrefix, 'linePrefix', self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4);
  }
  /** @type {State} */


  function afterPrefix(code) {
    effects.enter('htmlTextData');
    return returnState(code);
  }
  /** @type {State} */


  function end(code) {
    if (code === 62) {
      effects.consume(code);
      effects.exit('htmlTextData');
      effects.exit('htmlText');
      return ok;
    }

    return nok(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/label-start-link.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */

var labelStartLink = {
  name: 'labelStartLink',
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};
/** @type {Tokenizer} */

function tokenizeLabelStartLink(effects, ok, nok) {
  var self = this;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('labelLink');
    effects.enter('labelMarker');
    effects.consume(code);
    effects.exit('labelMarker');
    effects.exit('labelLink');
    return after;
  }
  /** @type {State} */


  function after(code) {
    /* Hidden footnotes hook. */

    /* c8 ignore next 3 */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs ? nok(code) : ok(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/hard-break-escape.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */

var hardBreakEscape = {
  name: 'hardBreakEscape',
  tokenize: tokenizeHardBreakEscape
};
/** @type {Tokenizer} */

function tokenizeHardBreakEscape(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('hardBreakEscape');
    effects.enter('escapeMarker');
    effects.consume(code);
    return open;
  }
  /** @type {State} */


  function open(code) {
    if (markdownLineEnding(code)) {
      effects.exit('escapeMarker');
      effects.exit('hardBreakEscape');
      return ok(code);
    }

    return nok(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/micromark-core-commonmark/lib/code-text.js
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Previous} Previous
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */

var codeText = {
  name: 'codeText',
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous
};
/** @type {Resolver} */

function resolveCodeText(events) {
  var tailExitIndex = events.length - 4;
  var headEnterIndex = 3;
  /** @type {number} */

  var index;
  /** @type {number|undefined} */

  var enter; // If we start and end with an EOL or a space.

  if ((events[headEnterIndex][1].type === 'lineEnding' || events[headEnterIndex][1].type === 'space') && (events[tailExitIndex][1].type === 'lineEnding' || events[tailExitIndex][1].type === 'space')) {
    index = headEnterIndex; // And we have data.

    while (++index < tailExitIndex) {
      if (events[index][1].type === 'codeTextData') {
        // Then we have padding.
        events[headEnterIndex][1].type = 'codeTextPadding';
        events[tailExitIndex][1].type = 'codeTextPadding';
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  } // Merge adjacent spaces and data.


  index = headEnterIndex - 1;
  tailExitIndex++;

  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {
        enter = index;
      }
    } else if (index === tailExitIndex || events[index][1].type === 'lineEnding') {
      events[enter][1].type = 'codeTextData';

      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end;
        events.splice(enter + 2, index - enter - 2);
        tailExitIndex -= index - enter - 2;
        index = enter + 2;
      }

      enter = undefined;
    }
  }

  return events;
}
/** @type {Previous} */


function previous(code) {
  // If there is a previous code, there will always be a tail.
  return code !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape';
}
/** @type {Tokenizer} */


function tokenizeCodeText(effects, ok, nok) {
  var self = this;
  var sizeOpen = 0;
  /** @type {number} */

  var size;
  /** @type {Token} */

  var token;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('codeText');
    effects.enter('codeTextSequence');
    return openingSequence(code);
  }
  /** @type {State} */


  function openingSequence(code) {
    if (code === 96) {
      effects.consume(code);
      sizeOpen++;
      return openingSequence;
    }

    effects.exit('codeTextSequence');
    return gap(code);
  }
  /** @type {State} */


  function gap(code) {
    // EOF.
    if (code === null) {
      return nok(code);
    } // Closing fence?
    // Could also be data.


    if (code === 96) {
      token = effects.enter('codeTextSequence');
      size = 0;
      return closingSequence(code);
    } // Tabs don’t work, and virtual spaces don’t make sense.


    if (code === 32) {
      effects.enter('space');
      effects.consume(code);
      effects.exit('space');
      return gap;
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return gap;
    } // Data.


    effects.enter('codeTextData');
    return data(code);
  } // In code.

  /** @type {State} */


  function data(code) {
    if (code === null || code === 32 || code === 96 || markdownLineEnding(code)) {
      effects.exit('codeTextData');
      return gap(code);
    }

    effects.consume(code);
    return data;
  } // Closing fence.

  /** @type {State} */


  function closingSequence(code) {
    // More.
    if (code === 96) {
      effects.consume(code);
      size++;
      return closingSequence;
    } // Done!


    if (size === sizeOpen) {
      effects.exit('codeTextSequence');
      effects.exit('codeText');
      return ok(code);
    } // More or less accents: mark as data.


    token.type = 'codeTextData';
    return data(code);
  }
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/micromark/lib/constructs.js
/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */


/** @type {Extension['document']} */

var constructs_document = {
  [42]: list,
  [43]: list,
  [45]: list,
  [48]: list,
  [49]: list,
  [50]: list,
  [51]: list,
  [52]: list,
  [53]: list,
  [54]: list,
  [55]: list,
  [56]: list,
  [57]: list,
  [62]: blockQuote
};
/** @type {Extension['contentInitial']} */

var contentInitial = {
  [91]: definition
};
/** @type {Extension['flowInitial']} */

var flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};
/** @type {Extension['flow']} */

var constructs_flow = {
  [35]: headingAtx,
  [42]: thematicBreak,
  [45]: [setextUnderline, thematicBreak],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak,
  [96]: codeFenced,
  [126]: codeFenced
};
/** @type {Extension['string']} */

var constructs_string = {
  [38]: characterReference,
  [92]: characterEscape
};
/** @type {Extension['text']} */

var constructs_text = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};
/** @type {Extension['insideSpan']} */

var insideSpan = {
  null: [attention, resolver]
};
/** @type {Extension['attentionMarkers']} */

var attentionMarkers = {
  null: [42, 95]
};
/** @type {Extension['disable']} */

var disable = {
  null: []
};
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/micromark/lib/parse.js
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').Create} Create
 */







/**
 * @param {ParseOptions} [options]
 * @returns {ParseContext}
 */

function parse() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /** @type {FullNormalizedExtension} */
  // @ts-expect-error `defaultConstructs` is full, so the result will be too.
  var constructs = combineExtensions( // @ts-expect-error Same as above.
  [constructs_namespaceObject].concat(options.extensions || []));
  /** @type {ParseContext} */

  var parser = {
    defined: [],
    lazy: {},
    constructs,
    content: create(content),
    document: create(document_document),
    flow: create(flow),
    string: create(string),
    text: create(text_text)
  };
  return parser;
  /**
   * @param {InitialConstruct} initial
   */

  function create(initial) {
    return creator;
    /** @type {Create} */

    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/micromark/lib/preprocess.js
/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Value} Value
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 */

/**
 * @callback Preprocessor
 * @param {Value} value
 * @param {Encoding} [encoding]
 * @param {boolean} [end=false]
 * @returns {Chunk[]}
 */
var search = /[\0\t\n\r]/g;
/**
 * @returns {Preprocessor}
 */

function preprocess() {
  var column = 1;
  var buffer = '';
  /** @type {boolean|undefined} */

  var start = true;
  /** @type {boolean|undefined} */

  var atCarriageReturn;
  return preprocessor;
  /** @type {Preprocessor} */

  function preprocessor(value, encoding, end) {
    /** @type {Chunk[]} */
    var chunks = [];
    /** @type {RegExpMatchArray|null} */

    var match;
    /** @type {number} */

    var next;
    /** @type {number} */

    var startPosition;
    /** @type {number} */

    var endPosition;
    /** @type {Code} */

    var code; // @ts-expect-error `Buffer` does allow an encoding.

    value = buffer + value.toString(encoding);
    startPosition = 0;
    buffer = '';

    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }

      start = undefined;
    }

    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== undefined ? match.index : value.length;
      code = value.charCodeAt(endPosition);

      if (!match) {
        buffer = value.slice(startPosition);
        break;
      }

      if (code === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = undefined;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = undefined;
        }

        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }

        switch (code) {
          case 0:
            {
              chunks.push(65533);
              column++;
              break;
            }

          case 9:
            {
              next = Math.ceil(column / 4) * 4;
              chunks.push(-2);

              while (column++ < next) {
                chunks.push(-1);
              }

              break;
            }

          case 10:
            {
              chunks.push(-4);
              column = 1;
              break;
            }

          default:
            {
              atCarriageReturn = true;
              column = 1;
            }
        }
      }

      startPosition = endPosition + 1;
    }

    if (end) {
      if (atCarriageReturn) chunks.push(-5);
      if (buffer) chunks.push(buffer);
      chunks.push(null);
    }

    return chunks;
  }
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/micromark/lib/postprocess.js
/**
 * @typedef {import('micromark-util-types').Event} Event
 */

/**
 * @param {Event[]} events
 * @returns {Event[]}
 */

function postprocess(events) {
  while (!subtokenize(events)) {// Empty
  }

  return events;
}
;// CONCATENATED MODULE: ./node_modules/micromark-util-decode-numeric-character-reference/index.js
/**
 * Turn the number (in string form as either hexa- or plain decimal) coming from
 * a numeric character reference into a character.
 *
 * @param {string} value
 *   Value to decode.
 * @param {number} base
 *   Numeric base.
 * @returns {string}
 */
function decodeNumericCharacterReference(value, base) {
  var code = Number.parseInt(value, base);

  if ( // C0 except for HT, LF, FF, CR, space
  code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || // Out of range
  code > 1114111) {
    return '\uFFFD';
  }

  return String.fromCharCode(code);
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/parse-entities/decode-entity.browser.js
/* eslint-env browser */
var decode_entity_browser_semicolon = 59; // `;`

/** @type {HTMLElement} */

var parse_entities_decode_entity_browser_element;
/**
 * @param {string} characters
 * @returns {string|false}
 */

function decode_entity_browser_decodeEntity(characters) {
  var entity = '&' + characters + ';';
  /** @type {string} */

  var char;
  parse_entities_decode_entity_browser_element = parse_entities_decode_entity_browser_element || document.createElement('i');
  parse_entities_decode_entity_browser_element.innerHTML = entity;
  char = parse_entities_decode_entity_browser_element.textContent; // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of `&notit;`
  // will result in the string `¬it;`.
  // When we encounter a trailing semicolon after parsing and the entity to
  // decode was not a semicolon (`&semi;`), we can assume that the matching was
  // incomplete

  if (char.charCodeAt(char.length - 1) === decode_entity_browser_semicolon && characters !== 'semi') {
    return false;
  } // If the decoded string is equal to the input, the entity was not valid


  return char === entity ? false : char;
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/mdast-util-from-markdown/lib/index.js
/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Value} Value
 * @typedef {Root|Root['children'][number]} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist').Point} Point
 * @typedef {import('mdast').Break} Break
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('mdast').Code} Code
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('mdast').Image} Image
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').List} List
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('mdast').Text} Text
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 */

/**
 * @typedef _CompileDataFields
 * @property {boolean|undefined} expectingFirstListItemValue
 * @property {boolean|undefined} flowCodeInside
 * @property {boolean|undefined} setextHeadingSlurpLineEnding
 * @property {boolean|undefined} atHardBreak
 * @property {'collapsed'|'full'} referenceType
 * @property {boolean|undefined} inReference
 * @property {'characterReferenceMarkerHexadecimal'|'characterReferenceMarkerNumeric'} characterReferenceType
 *
 * @typedef {Record<string, unknown> & Partial<_CompileDataFields>} CompileData
 *
 * @typedef {(tree: Root) => Root|void} Transform
 * @typedef {(this: CompileContext, token: Token) => void} Handle
 * @typedef {Record<string, Handle>} Handles
 *   Token types mapping to handles
 * @typedef {Record<string, Record<string, unknown>|Array.<unknown>> & {canContainEols: Array.<string>, transforms: Array.<Transform>, enter: Handles, exit: Handles}} NormalizedExtension
 * @typedef {Partial<NormalizedExtension>} Extension
 *   An mdast extension changes how markdown tokens are turned into mdast.
 *
 * @typedef CompileContext
 *   mdast compiler context
 * @property {Array.<Node>} stack
 * @property {Array.<Token>} tokenStack
 * @property {(key: string, value?: unknown) => void} setData
 *   Set data into the key-value store.
 * @property {<K extends string>(key: K) => CompileData[K]} getData
 *   Get data from the key-value store.
 * @property {(this: CompileContext) => void} buffer
 *   Capture some of the output data.
 * @property {(this: CompileContext) => string} resume
 *   Stop capturing and access the output data.
 * @property {<N extends Node>(this: CompileContext, node: N, token: Token) => N} enter
 *   Enter a token.
 * @property {(this: CompileContext, token: Token) => Node} exit
 *   Exit a token.
 * @property {TokenizeContext['sliceSerialize']} sliceSerialize
 *   Get the string value of a token.
 * @property {NormalizedExtension} config
 *   Configuration.
 *
 * @typedef {{mdastExtensions?: Array.<Extension|Array.<Extension>>}} FromMarkdownOptions
 * @typedef {ParseOptions & FromMarkdownOptions} Options
 */








var mdast_util_from_markdown_lib_own = {}.hasOwnProperty;
/**
 * @param value Markdown to parse (`string` or `Buffer`).
 * @param [encoding] Character encoding to understand `value` as when it’s a `Buffer` (`string`, default: `'utf8'`).
 * @param [options] Configuration
 */

var fromMarkdown =
/**
 * @type {(
 *   ((value: Value, encoding: Encoding, options?: Options) => Root) &
 *   ((value: Value, options?: Options) => Root)
 * )}
 */

/**
 * @param {Value} value
 * @param {Encoding} [encoding]
 * @param {Options} [options]
 * @returns {Root}
 */
function fromMarkdown(value, encoding, options) {
  if (typeof encoding !== 'string') {
    options = encoding;
    encoding = undefined;
  }

  return compiler(options)(postprocess(parse(options).document().write(preprocess()(value, encoding, true))));
};
/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options} [options]
 */

function compiler() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /** @type {NormalizedExtension} */
  // @ts-expect-error: our base has all required fields, so the result will too.
  var config = configure({
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: opener(link),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading),
      blockQuote: opener(blockQuote),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis),
      hardBreakEscape: opener(hardBreak),
      hardBreakTrailing: opener(hardBreak),
      htmlFlow: opener(html, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html, buffer),
      htmlTextData: onenterdata,
      image: opener(image),
      label: buffer,
      link: opener(link),
      listItem: opener(listItem),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list, onenterlistordered),
      listUnordered: opener(list),
      paragraph: opener(paragraph),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading),
      strong: opener(strong),
      thematicBreak: opener(thematicBreak)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  }, options.mdastExtensions || []);
  /** @type {CompileData} */

  var data = {};
  return compile;
  /**
   * @param {Array.<Event>} events
   * @returns {Root}
   */

  function compile(events) {
    /** @type {Root} */
    var tree = {
      type: 'root',
      children: []
    };
    /** @type {CompileContext['stack']} */

    var stack = [tree];
    /** @type {CompileContext['tokenStack']} */

    var tokenStack = [];
    /** @type {Array.<number>} */

    var listStack = [];
    /** @type {Omit<CompileContext, 'sliceSerialize'>} */

    var context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      buffer,
      resume,
      setData,
      getData
    };
    var index = -1;

    while (++index < events.length) {
      // We preprocess lists to add `listItem` tokens, and to infer whether
      // items the list itself are spread out.
      if (events[index][1].type === 'listOrdered' || events[index][1].type === 'listUnordered') {
        if (events[index][0] === 'enter') {
          listStack.push(index);
        } else {
          var tail = listStack.pop();
          index = prepareList(events, tail, index);
        }
      }
    }

    index = -1;

    while (++index < events.length) {
      var handler = config[events[index][0]];

      if (mdast_util_from_markdown_lib_own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(Object.assign({
          sliceSerialize: events[index][2].sliceSerialize
        }, context), events[index][1]);
      }
    }

    if (tokenStack.length > 0) {
      throw new Error('Cannot close document, a token (`' + tokenStack[tokenStack.length - 1].type + '`, ' + stringifyPosition({
        start: tokenStack[tokenStack.length - 1].start,
        end: tokenStack[tokenStack.length - 1].end
      }) + ') is still open');
    } // Figure out `root` position.


    tree.position = {
      start: point(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    };
    index = -1;

    while (++index < config.transforms.length) {
      tree = config.transforms[index](tree) || tree;
    }

    return tree;
  }
  /**
   * @param {Array.<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */


  function prepareList(events, start, length) {
    var index = start - 1;
    var containerBalance = -1;
    var listSpread = false;
    /** @type {Token|undefined} */

    var listItem;
    /** @type {number|undefined} */

    var lineIndex;
    /** @type {number|undefined} */

    var firstBlankLineIndex;
    /** @type {boolean|undefined} */

    var atMarker;

    while (++index <= length) {
      var event = events[index];

      if (event[1].type === 'listUnordered' || event[1].type === 'listOrdered' || event[1].type === 'blockQuote') {
        if (event[0] === 'enter') {
          containerBalance++;
        } else {
          containerBalance--;
        }

        atMarker = undefined;
      } else if (event[1].type === 'lineEndingBlank') {
        if (event[0] === 'enter') {
          if (listItem && !atMarker && !containerBalance && !firstBlankLineIndex) {
            firstBlankLineIndex = index;
          }

          atMarker = undefined;
        }
      } else if (event[1].type === 'linePrefix' || event[1].type === 'listItemValue' || event[1].type === 'listItemMarker' || event[1].type === 'listItemPrefix' || event[1].type === 'listItemPrefixWhitespace') {// Empty.
      } else {
        atMarker = undefined;
      }

      if (!containerBalance && event[0] === 'enter' && event[1].type === 'listItemPrefix' || containerBalance === -1 && event[0] === 'exit' && (event[1].type === 'listUnordered' || event[1].type === 'listOrdered')) {
        if (listItem) {
          var tailIndex = index;
          lineIndex = undefined;

          while (tailIndex--) {
            var tailEvent = events[tailIndex];

            if (tailEvent[1].type === 'lineEnding' || tailEvent[1].type === 'lineEndingBlank') {
              if (tailEvent[0] === 'exit') continue;

              if (lineIndex) {
                events[lineIndex][1].type = 'lineEndingBlank';
                listSpread = true;
              }

              tailEvent[1].type = 'lineEnding';
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === 'linePrefix' || tailEvent[1].type === 'blockQuotePrefix' || tailEvent[1].type === 'blockQuotePrefixWhitespace' || tailEvent[1].type === 'blockQuoteMarker' || tailEvent[1].type === 'listItemIndent') {// Empty
            } else {
              break;
            }
          }

          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            // @ts-expect-error Patched.
            listItem._spread = true;
          } // Fix position.


          listItem.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index, 0, ['exit', listItem, event[2]]);
          index++;
          length++;
        } // Create a new list item.


        if (event[1].type === 'listItemPrefix') {
          listItem = {
            type: 'listItem',
            // @ts-expect-error Patched
            _spread: false,
            start: Object.assign({}, event[1].start)
          }; // @ts-expect-error: `listItem` is most definitely defined, TS...

          events.splice(index, 0, ['enter', listItem, event[2]]);
          index++;
          length++;
          firstBlankLineIndex = undefined;
          atMarker = true;
        }
      }
    } // @ts-expect-error Patched.


    events[start][1]._spread = listSpread;
    return length;
  }
  /**
   * @type {CompileContext['setData']}
   * @param [value]
   */


  function setData(key, value) {
    data[key] = value;
  }
  /**
   * @type {CompileContext['getData']}
   * @template {string} K
   * @param {K} key
   * @returns {CompileData[K]}
   */


  function getData(key) {
    return data[key];
  }
  /**
   * @param {Point} d
   * @returns {Point}
   */


  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  /**
   * @param {(token: Token) => Node} create
   * @param {Handle} [and]
   * @returns {Handle}
   */


  function opener(create, and) {
    return open;
    /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */

    function open(token) {
      enter.call(this, create(token), token);
      if (and) and.call(this, token);
    }
  }
  /** @type {CompileContext['buffer']} */


  function buffer() {
    // @ts-expect-error: Custom node type to collect text.
    this.stack.push({
      type: 'fragment',
      children: []
    });
  }
  /**
   * @type {CompileContext['enter']}
   * @template {Node} N
   * @this {CompileContext}
   * @param {N} node
   * @param {Token} token
   * @returns {N}
   */


  function enter(node, token) {
    /** @type {Parent} */
    // @ts-expect-error: Assume parent.
    var parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push(token); // @ts-expect-error: `end` will be patched later.

    node.position = {
      start: point(token.start)
    };
    return node;
  }
  /**
   * @param {Handle} [and]
   * @returns {Handle}
   */


  function closer(and) {
    return close;
    /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */

    function close(token) {
      if (and) and.call(this, token);
      exit.call(this, token);
    }
  }
  /** @type {CompileContext['exit']} */


  function exit(token) {
    var node = this.stack.pop();
    var open = this.tokenStack.pop();

    if (!open) {
      throw new Error('Cannot close `' + token.type + '` (' + stringifyPosition({
        start: token.start,
        end: token.end
      }) + '): it’s not open');
    } else if (open.type !== token.type) {
      throw new Error('Cannot close `' + token.type + '` (' + stringifyPosition({
        start: token.start,
        end: token.end
      }) + '): a different token (`' + open.type + '`, ' + stringifyPosition({
        start: open.start,
        end: open.end
      }) + ') is open');
    }

    node.position.end = point(token.end);
    return node;
  }
  /**
   * @this {CompileContext}
   * @returns {string}
   */


  function resume() {
    return mdast_util_to_string_toString(this.stack.pop());
  } //
  // Handlers.
  //

  /** @type {Handle} */


  function onenterlistordered() {
    setData('expectingFirstListItemValue', true);
  }
  /** @type {Handle} */


  function onenterlistitemvalue(token) {
    if (getData('expectingFirstListItemValue')) {
      this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(token), 10);
      setData('expectingFirstListItemValue');
    }
  }
  /** @type {Handle} */


  function onexitcodefencedfenceinfo() {
    var data = this.resume();
    this.stack[this.stack.length - 1].lang = data;
  }
  /** @type {Handle} */


  function onexitcodefencedfencemeta() {
    var data = this.resume();
    this.stack[this.stack.length - 1].meta = data;
  }
  /** @type {Handle} */


  function onexitcodefencedfence() {
    // Exit if this is the closing fence.
    if (getData('flowCodeInside')) return;
    this.buffer();
    setData('flowCodeInside', true);
  }
  /** @type {Handle} */


  function onexitcodefenced() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
    setData('flowCodeInside');
  }
  /** @type {Handle} */


  function onexitcodeindented() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data.replace(/(\r?\n|\r)$/g, '');
  }
  /** @type {Handle} */


  function onexitdefinitionlabelstring(token) {
    // Discard label, use the source content instead.
    var label = this.resume();
    this.stack[this.stack.length - 1].label = label;
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  /** @type {Handle} */


  function onexitdefinitiontitlestring() {
    var data = this.resume();
    this.stack[this.stack.length - 1].title = data;
  }
  /** @type {Handle} */


  function onexitdefinitiondestinationstring() {
    var data = this.resume();
    this.stack[this.stack.length - 1].url = data;
  }
  /** @type {Handle} */


  function onexitatxheadingsequence(token) {
    if (!this.stack[this.stack.length - 1].depth) {
      this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).length;
    }
  }
  /** @type {Handle} */


  function onexitsetextheadingtext() {
    setData('setextHeadingSlurpLineEnding', true);
  }
  /** @type {Handle} */


  function onexitsetextheadinglinesequence(token) {
    this.stack[this.stack.length - 1].depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }
  /** @type {Handle} */


  function onexitsetextheading() {
    setData('setextHeadingSlurpLineEnding');
  }
  /** @type {Handle} */


  function onenterdata(token) {
    /** @type {Parent} */
    // @ts-expect-error: assume parent.
    var parent = this.stack[this.stack.length - 1];
    /** @type {Node} */
    // @ts-expect-error: assume child.

    var tail = parent.children[parent.children.length - 1];

    if (!tail || tail.type !== 'text') {
      // Add a new text node.
      tail = text(); // @ts-expect-error: we’ll add `end` later.

      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }

    this.stack.push(tail);
  }
  /** @type {Handle} */


  function onexitdata(token) {
    var tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point(token.end);
  }
  /** @type {Handle} */


  function onexitlineending(token) {
    /** @type {Parent} */
    // @ts-expect-error: supposed to be a parent.
    var context = this.stack[this.stack.length - 1]; // If we’re at a hard break, include the line ending in there.

    if (getData('atHardBreak')) {
      var tail = context.children[context.children.length - 1];
      tail.position.end = point(token.end);
      setData('atHardBreak');
      return;
    }

    if (!getData('setextHeadingSlurpLineEnding') && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  /** @type {Handle} */


  function onexithardbreak() {
    setData('atHardBreak', true);
  }
  /** @type {Handle} */


  function onexithtmlflow() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data;
  }
  /** @type {Handle} */


  function onexithtmltext() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data;
  }
  /** @type {Handle} */


  function onexitcodetext() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data;
  }
  /** @type {Handle} */


  function onexitlink() {
    var context = this.stack[this.stack.length - 1]; // To do: clean.

    if (getData('inReference')) {
      context.type += 'Reference';
      context.referenceType = getData('referenceType') || 'shortcut';
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
      delete context.referenceType;
    }

    setData('referenceType');
  }
  /** @type {Handle} */


  function onexitimage() {
    var context = this.stack[this.stack.length - 1]; // To do: clean.

    if (getData('inReference')) {
      context.type += 'Reference';
      context.referenceType = getData('referenceType') || 'shortcut';
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
      delete context.referenceType;
    }

    setData('referenceType');
  }
  /** @type {Handle} */


  function onexitlabeltext(token) {
    this.stack[this.stack.length - 2].identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  /** @type {Handle} */


  function onexitlabel() {
    var fragment = this.stack[this.stack.length - 1];
    var value = this.resume();
    this.stack[this.stack.length - 1].label = value; // Assume a reference.

    setData('inReference', true);

    if (this.stack[this.stack.length - 1].type === 'link') {
      this.stack[this.stack.length - 1].children = fragment.children;
    } else {
      this.stack[this.stack.length - 1].alt = value;
    }
  }
  /** @type {Handle} */


  function onexitresourcedestinationstring() {
    var data = this.resume();
    this.stack[this.stack.length - 1].url = data;
  }
  /** @type {Handle} */


  function onexitresourcetitlestring() {
    var data = this.resume();
    this.stack[this.stack.length - 1].title = data;
  }
  /** @type {Handle} */


  function onexitresource() {
    setData('inReference');
  }
  /** @type {Handle} */


  function onenterreference() {
    setData('referenceType', 'collapsed');
  }
  /** @type {Handle} */


  function onexitreferencestring(token) {
    var label = this.resume();
    this.stack[this.stack.length - 1].label = label;
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    setData('referenceType', 'full');
  }
  /** @type {Handle} */


  function onexitcharacterreferencemarker(token) {
    setData('characterReferenceType', token.type);
  }
  /** @type {Handle} */


  function onexitcharacterreferencevalue(token) {
    var data = this.sliceSerialize(token);
    var type = getData('characterReferenceType');
    /** @type {string} */

    var value;

    if (type) {
      value = decodeNumericCharacterReference(data, type === 'characterReferenceMarkerNumeric' ? 10 : 16);
      setData('characterReferenceType');
    } else {
      // @ts-expect-error `decodeEntity` can return false for invalid named
      // character references, but everything we’ve tokenized is valid.
      value = decode_entity_browser_decodeEntity(data);
    }

    var tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point(token.end);
  }
  /** @type {Handle} */


  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    this.stack[this.stack.length - 1].url = this.sliceSerialize(token);
  }
  /** @type {Handle} */


  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    this.stack[this.stack.length - 1].url = 'mailto:' + this.sliceSerialize(token);
  } //
  // Creaters.
  //

  /** @returns {Blockquote} */


  function blockQuote() {
    return {
      type: 'blockquote',
      children: []
    };
  }
  /** @returns {Code} */


  function codeFlow() {
    // @ts-expect-error: we’ve always used `null`.
    return {
      type: 'code',
      lang: null,
      meta: null,
      value: ''
    };
  }
  /** @returns {InlineCode} */


  function codeText() {
    return {
      type: 'inlineCode',
      value: ''
    };
  }
  /** @returns {Definition} */


  function definition() {
    return {
      type: 'definition',
      identifier: '',
      // @ts-expect-error: we’ve always used `null`.
      label: null,
      // @ts-expect-error: we’ve always used `null`.
      title: null,
      url: ''
    };
  }
  /** @returns {Emphasis} */


  function emphasis() {
    return {
      type: 'emphasis',
      children: []
    };
  }
  /** @returns {Heading} */


  function heading() {
    // @ts-expect-error `depth` will be set later.
    return {
      type: 'heading',
      depth: undefined,
      children: []
    };
  }
  /** @returns {Break} */


  function hardBreak() {
    return {
      type: 'break'
    };
  }
  /** @returns {HTML} */


  function html() {
    return {
      type: 'html',
      value: ''
    };
  }
  /** @returns {Image} */


  function image() {
    // @ts-expect-error: we’ve always used `null`.
    return {
      type: 'image',
      title: null,
      url: '',
      alt: null
    };
  }
  /** @returns {Link} */


  function link() {
    // @ts-expect-error: we’ve always used `null`.
    return {
      type: 'link',
      title: null,
      url: '',
      children: []
    };
  }
  /**
   * @param {Token} token
   * @returns {List}
   */


  function list(token) {
    return {
      type: 'list',
      ordered: token.type === 'listOrdered',
      // @ts-expect-error: we’ve always used `null`.
      start: null,
      // @ts-expect-error Patched.
      spread: token._spread,
      children: []
    };
  }
  /**
   * @param {Token} token
   * @returns {ListItem}
   */


  function listItem(token) {
    return {
      type: 'listItem',
      // @ts-expect-error Patched.
      spread: token._spread,
      // @ts-expect-error: we’ve always used `null`.
      checked: null,
      children: []
    };
  }
  /** @returns {Paragraph} */


  function paragraph() {
    return {
      type: 'paragraph',
      children: []
    };
  }
  /** @returns {Strong} */


  function strong() {
    return {
      type: 'strong',
      children: []
    };
  }
  /** @returns {Text} */


  function text() {
    return {
      type: 'text',
      value: ''
    };
  }
  /** @returns {ThematicBreak} */


  function thematicBreak() {
    return {
      type: 'thematicBreak'
    };
  }
}
/**
 * @param {Extension} combined
 * @param {Array.<Extension|Array.<Extension>>} extensions
 * @returns {Extension}
 */


function configure(combined, extensions) {
  var index = -1;

  while (++index < extensions.length) {
    var value = extensions[index];

    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }

  return combined;
}
/**
 * @param {Extension} combined
 * @param {Extension} extension
 * @returns {void}
 */


function extension(combined, extension) {
  /** @type {string} */
  var key;

  for (key in extension) {
    if (mdast_util_from_markdown_lib_own.call(extension, key)) {
      var list = key === 'canContainEols' || key === 'transforms';
      var maybe = mdast_util_from_markdown_lib_own.call(combined, key) ? combined[key] : undefined;
      /* c8 ignore next */

      var left = maybe || (combined[key] = list ? [] : {});
      var right = extension[key];

      if (right) {
        if (list) {
          // @ts-expect-error: `left` is an array.
          combined[key] = [...left, ...right];
        } else {
          Object.assign(left, right);
        }
      }
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/remark-parse/lib/index.js
/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-from-markdown').Options} Options
 */

/** @type {import('unified').Plugin<[Options?] | void[], string, Root>} */

function remarkParse(options) {
  /** @type {import('unified').ParserFunction<Root>} */
  var parser = doc => {
    // Assume options.
    var settings = this.data('settings');
    return fromMarkdown(doc, Object.assign({}, settings, options, {
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: this.data('micromarkExtensions') || [],
      mdastExtensions: this.data('fromMarkdownExtensions') || []
    }));
  };

  Object.assign(this, {
    Parser: parser
  });
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/remark-parse/index.js

/* harmony default export */ var remark_parse = (remarkParse);
// EXTERNAL MODULE: ./node_modules/babel-preset-gatsby/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(66475);
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/unist-builder/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist').Literal} Literal
 * @typedef {Object.<string, unknown>} Props
 * @typedef {Array.<Node>|string} ChildrenOrValue
 *
 * @typedef {(<T extends string, P extends Record<string, unknown>, C extends Node[]>(type: T, props: P, children: C) => {type: T, children: C} & P)} BuildParentWithProps
 * @typedef {(<T extends string, P extends Record<string, unknown>>(type: T, props: P, value: string) => {type: T, value: string} & P)} BuildLiteralWithProps
 * @typedef {(<T extends string, P extends Record<string, unknown>>(type: T, props: P) => {type: T} & P)} BuildVoidWithProps
 * @typedef {(<T extends string, C extends Node[]>(type: T, children: C) => {type: T, children: C})} BuildParent
 * @typedef {(<T extends string>(type: T, value: string) => {type: T, value: string})} BuildLiteral
 * @typedef {(<T extends string>(type: T) => {type: T})} BuildVoid
 */
var u =
/**
 * @param {string} type Type of node
 * @param {Props|ChildrenOrValue} [props] Additional properties for node (or `children` or `value`)
 * @param {ChildrenOrValue} [value] `children` or `value` of node
 * @returns {Node}
 */
function u(type, props, value) {
  /** @type {Node} */
  var node = {
    type: String(type)
  };

  if ((value === undefined || value === null) && (typeof props === 'string' || Array.isArray(props))) {
    value = props;
  } else {
    Object.assign(node, props);
  }

  if (Array.isArray(value)) {
    node.children = value;
  } else if (value !== undefined && value !== null) {
    node.value = String(value);
  }

  return node;
};
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/unist-util-is/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 *
 * @typedef {string} Type
 * @typedef {Object<string, unknown>} Props
 *
 * @typedef {null|undefined|Type|Props|TestFunctionAnything|Array.<Type|Props|TestFunctionAnything>} Test
 */

/**
 * Check if a node passes a test
 *
 * @callback TestFunctionAnything
 * @param {Node} node
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {boolean|void}
 */

/**
 * Check if a node passes a certain node test
 *
 * @template {Node} X
 * @callback TestFunctionPredicate
 * @param {Node} node
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {node is X}
 */

/**
 * @callback AssertAnything
 * @param {unknown} [node]
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {boolean}
 */

/**
 * Check if a node passes a certain node test
 *
 * @template {Node} Y
 * @callback AssertPredicate
 * @param {unknown} [node]
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {node is Y}
 */
var is =
/**
 * Check if a node passes a test.
 * When a `parent` node is known the `index` of node should also be given.
 *
 * @param {unknown} [node] Node to check
 * @param {Test} [test]
 * When nullish, checks if `node` is a `Node`.
 * When `string`, works like passing `function (node) {return node.type === test}`.
 * When `function` checks if function passed the node is true.
 * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
 * When `array`, checks any one of the subtests pass.
 * @param {number|null|undefined} [index] Position of `node` in `parent`
 * @param {Parent|null|undefined} [parent] Parent of `node`
 * @param {unknown} [context] Context object to invoke `test` with
 * @returns {boolean} Whether test passed and `node` is a `Node` (object with `type` set to non-empty `string`).
 */
// eslint-disable-next-line max-params
function is(node, test, index, parent, context) {
  var check = convert(test);

  if (index !== undefined && index !== null && (typeof index !== 'number' || index < 0 || index === Number.POSITIVE_INFINITY)) {
    throw new Error('Expected positive finite index');
  }

  if (parent !== undefined && parent !== null && (!is(parent) || !parent.children)) {
    throw new Error('Expected parent node');
  }

  if ((parent === undefined || parent === null) !== (index === undefined || index === null)) {
    throw new Error('Expected both parent and index');
  } // @ts-expect-error Looks like a node.


  return node && node.type && typeof node.type === 'string' ? Boolean(check.call(context, node, index, parent)) : false;
};
var convert =
/**
 * Generate an assertion from a check.
 * @param {Test} [test]
 * When nullish, checks if `node` is a `Node`.
 * When `string`, works like passing `function (node) {return node.type === test}`.
 * When `function` checks if function passed the node is true.
 * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
 * When `array`, checks any one of the subtests pass.
 * @returns {AssertAnything}
 */
function convert(test) {
  if (test === undefined || test === null) {
    return ok;
  }

  if (typeof test === 'string') {
    return typeFactory(test);
  }

  if (typeof test === 'object') {
    return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
  }

  if (typeof test === 'function') {
    return castFactory(test);
  }

  throw new Error('Expected function, string, or object as test');
};
/**
 * @param {Array.<Type|Props|TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */

function anyFactory(tests) {
  /** @type {Array.<AssertAnything>} */
  var checks = [];
  var index = -1;

  while (++index < tests.length) {
    checks[index] = convert(tests[index]);
  }

  return castFactory(any);
  /**
   * @this {unknown}
   * @param {unknown[]} parameters
   * @returns {boolean}
   */

  function any() {
    var index = -1;

    for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
      parameters[_key] = arguments[_key];
    }

    while (++index < checks.length) {
      if (checks[index].call(this, ...parameters)) return true;
    }

    return false;
  }
}
/**
 * Utility to assert each property in `test` is represented in `node`, and each
 * values are strictly equal.
 *
 * @param {Props} check
 * @returns {AssertAnything}
 */


function propsFactory(check) {
  return castFactory(all);
  /**
   * @param {Node} node
   * @returns {boolean}
   */

  function all(node) {
    /** @type {string} */
    var key;

    for (key in check) {
      // @ts-expect-error: hush, it sure works as an index.
      if (node[key] !== check[key]) return false;
    }

    return true;
  }
}
/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 *
 * @param {Type} check
 * @returns {AssertAnything}
 */


function typeFactory(check) {
  return castFactory(type);
  /**
   * @param {Node} node
   */

  function type(node) {
    return node && node.type === check;
  }
}
/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */


function castFactory(check) {
  return assertion;
  /**
   * @this {unknown}
   * @param {Array.<unknown>} parameters
   * @returns {boolean}
   */

  function assertion() {
    for (var _len2 = arguments.length, parameters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      parameters[_key2] = arguments[_key2];
    }

    // @ts-expect-error: spreading is fine.
    return Boolean(check.call(this, ...parameters));
  }
} // Utility to return true.


function ok() {
  return true;
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/unist-util-visit-parents/color.browser.js
/**
 * @param {string} d
 * @returns {string}
 */
function color(d) {
  return d;
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/unist-util-visit-parents/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 */

/**
 * @typedef {CONTINUE|SKIP|EXIT} Action Union of the action types
 * @typedef {number} Index Move to the sibling at index next (after node itself is completely traversed). Useful if mutating the tree, such as removing the node the visitor is currently on, or any of its previous siblings (or next siblings, in case of reverse) Results less than 0 or greater than or equal to children.length stop traversing the parent
 * @typedef {[(Action|null|undefined|void)?, (Index|null|undefined)?]} ActionTuple List with one or two values, the first an action, the second an index.
 * @typedef {null|undefined|Action|Index|ActionTuple|void} VisitorResult Any value that can be returned from a visitor
 */

/**
 * Invoked when a node (matching test, if given) is found.
 * Visitors are free to transform node.
 * They can also transform the parent of node (the last of ancestors).
 * Replacing node itself, if `SKIP` is not returned, still causes its descendants to be visited.
 * If adding or removing previous siblings (or next siblings, in case of reverse) of node,
 * visitor should return a new index (number) to specify the sibling to traverse after node is traversed.
 * Adding or removing next siblings of node (or previous siblings, in case of reverse)
 * is handled as expected without needing to return a new index.
 * Removing the children property of an ancestor still results in them being traversed.
 *
 * @template {Node} V
 * @callback Visitor
 * @param {V} node Found node
 * @param {Array.<Parent>} ancestors Ancestors of node
 * @returns {VisitorResult}
 */


/**
 * Continue traversing as normal
 */

var CONTINUE = true;
/**
 * Do not traverse this node’s children
 */

var SKIP = 'skip';
/**
 * Stop traversing immediately
 */

var EXIT = false;
var visitParents =
/**
 * Visit children of tree which pass a test
 *
 * @param {Node} tree Abstract syntax tree to walk
 * @param {Test} test test Test node
 * @param {Visitor<Node>} visitor Function to run for each node
 * @param {boolean} [reverse] Fisit the tree in reverse, defaults to false
 */
function visitParents(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor; // @ts-ignore no visitor given, so `visitor` is test.

    visitor = test;
    test = null;
  }

  var is = convert(test);
  var step = reverse ? -1 : 1;
  factory(tree, null, [])();
  /**
   * @param {Node} node
   * @param {number?} index
   * @param {Array.<Parent>} parents
   */

  function factory(node, index, parents) {
    /** @type {Object.<string, unknown>} */
    var value = typeof node === 'object' && node !== null ? node : {};
    /** @type {string} */

    var name;

    if (typeof value.type === 'string') {
      name = typeof value.tagName === 'string' ? value.tagName : typeof value.name === 'string' ? value.name : undefined;
      Object.defineProperty(visit, 'name', {
        value: 'node (' + color(value.type + (name ? '<' + name + '>' : '')) + ')'
      });
    }

    return visit;

    function visit() {
      /** @type {ActionTuple} */
      var result = [];
      /** @type {ActionTuple} */

      var subresult;
      /** @type {number} */

      var offset;
      /** @type {Array.<Parent>} */

      var grandparents;

      if (!test || is(node, index, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents));

        if (result[0] === EXIT) {
          return result;
        }
      }

      if (node.children && result[0] !== SKIP) {
        // @ts-ignore looks like a parent.
        offset = (reverse ? node.children.length : -1) + step; // @ts-ignore looks like a parent.

        grandparents = parents.concat(node); // @ts-ignore looks like a parent.

        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)();

          if (subresult[0] === EXIT) {
            return subresult;
          }

          offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step;
        }
      }

      return result;
    }
  }
};
/**
 * @param {VisitorResult} value
 * @returns {ActionTuple}
 */

function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === 'number') {
    return [CONTINUE, value];
  }

  return [value];
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/unist-util-visit/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 */

/**
 * Invoked when a node (matching test, if given) is found.
 * Visitors are free to transform node.
 * They can also transform the parent of node (the last of ancestors).
 * Replacing node itself, if `SKIP` is not returned, still causes its descendants to be visited.
 * If adding or removing previous siblings (or next siblings, in case of reverse) of node,
 * visitor should return a new index (number) to specify the sibling to traverse after node is traversed.
 * Adding or removing next siblings of node (or previous siblings, in case of reverse)
 * is handled as expected without needing to return a new index.
 * Removing the children property of an ancestor still results in them being traversed.
 *
 * @template {Node} V
 * @callback Visitor
 * @param {V} node Found node
 * @param {number|null} index Position of `node` in `parent`
 * @param {Parent|null} parent Parent of `node`
 * @returns {VisitorResult}
 */


var visit =
/**
 * Visit children of tree which pass a test
 *
 * @param {Node} tree Abstract syntax tree to walk
 * @param {Test} test test Test node
 * @param {Visitor<Node>} visitor Function to run for each node
 * @param {boolean} [reverse] Fisit the tree in reverse, defaults to false
 */
function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  visitParents(tree, test, overload, reverse);
  /**
   * @param {Node} node
   * @param {Array.<Parent>} parents
   */

  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/unist-util-position/index.js
/**
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Point} Point
 *
 * @typedef {Partial<Point>} PointLike
 *
 * @typedef {Object} PositionLike
 * @property {PointLike} [start]
 * @property {PointLike} [end]
 *
 * @typedef {Object} NodeLike
 * @property {PositionLike} [position]
 */
var pointStart = unist_util_position_point('start');
var pointEnd = unist_util_position_point('end');
/**
 * Get the positional info of `node`.
 *
 * @param {NodeLike} [node]
 * @returns {Position}
 */

function unist_util_position_position(node) {
  return {
    start: pointStart(node),
    end: pointEnd(node)
  };
}
/**
 * Get the positional info of `node`.
 *
 * @param {'start'|'end'} type
 */

function unist_util_position_point(type) {
  return point;
  /**
   * Get the positional info of `node`.
   *
   * @param {NodeLike} [node]
   * @returns {Point}
   */

  function point(node) {
    /** @type {Point} */
    // @ts-ignore looks like a point
    var point = node && node.position && node.position[type] || {};
    return {
      line: point.line || null,
      column: point.column || null,
      offset: point.offset > -1 ? point.offset : null
    };
  }
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/unist-util-generated/index.js
/**
 * @typedef {Object} PointLike
 * @property {number} [line]
 * @property {number} [column]
 * @property {number} [offset]
 *
 * @typedef {Object} PositionLike
 * @property {PointLike} [start]
 * @property {PointLike} [end]
 *
 * @typedef {Object} NodeLike
 * @property {PositionLike} [position]
 */

/**
 * Check if `node` is *generated*.
 *
 * @param {NodeLike} [node]
 * @returns {boolean}
 */
function generated(node) {
  return !node || !node.position || !node.position.start || !node.position.start.line || !node.position.start.column || !node.position.end || !node.position.end.line || !node.position.end.column;
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-definitions/index.js
/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('unist-util-visit').Visitor<Definition>} DefinitionVisitor
 */

var mdast_util_definitions_own = {}.hasOwnProperty;
/**
 *
 * @param {Node} node
 */

function definitions(node) {
  /** @type {Object.<string, Definition>} */
  var cache = Object.create(null);

  if (!node || !node.type) {
    throw new Error('mdast-util-definitions expected node');
  }

  visit(node, 'definition', ondefinition);
  return getDefinition;
  /** @type {DefinitionVisitor} */

  function ondefinition(definition) {
    var id = clean(definition.identifier);

    if (id && !mdast_util_definitions_own.call(cache, id)) {
      cache[id] = definition;
    }
  }
  /**
   * Get a node from the bound definition-cache.
   *
   * @param {string} identifier
   * @returns {Definition|null}
   */


  function getDefinition(identifier) {
    var id = clean(identifier);
    return id && mdast_util_definitions_own.call(cache, id) ? cache[id] : null;
  }
}
/**
 * @param {string} [value]
 * @returns {string}
 */

function clean(value) {
  return String(value || '').toUpperCase();
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/traverse.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @typedef {import('mdast').Root|import('mdast').Parent['children'][number]} MdastNode
 * @typedef {import('./index.js').H} H
 * @typedef {import('./index.js').Handler} Handler
 * @typedef {import('./index.js').Content} Content
 */

var traverse_own = {}.hasOwnProperty;
/**
 * Transform an unknown node.
 * @type {Handler}
 * @param {MdastNode} node
 */

function unknown(h, node) {
  var data = node.data || {};

  if ('value' in node && !(traverse_own.call(data, 'hName') || traverse_own.call(data, 'hProperties') || traverse_own.call(data, 'hChildren'))) {
    return h.augment(node, u('text', node.value));
  }

  return h(node, 'div', traverse_all(h, node));
}
/**
 * @type {Handler}
 * @param {MdastNode} node
 */


function traverse_one(h, node, parent) {
  var type = node && node.type;
  /** @type {Handler} */

  var fn; // Fail on non-nodes.

  if (!type) {
    throw new Error('Expected node, got `' + node + '`');
  }

  if (traverse_own.call(h.handlers, type)) {
    fn = h.handlers[type];
  } else if (h.passThrough && h.passThrough.includes(type)) {
    fn = returnNode;
  } else {
    fn = h.unknownHandler;
  }

  return (typeof fn === 'function' ? fn : unknown)(h, node, parent);
}
/**
 * @type {Handler}
 * @param {MdastNode} node
 */

function returnNode(h, node) {
  // @ts-expect-error: Pass through custom node.
  return 'children' in node ? _objectSpread(_objectSpread({}, node), {}, {
    children: traverse_all(h, node)
  }) : node;
}
/**
 * @param {H} h
 * @param {MdastNode} parent
 */


function traverse_all(h, parent) {
  /** @type {Array.<Content>} */
  var values = [];

  if ('children' in parent) {
    var nodes = parent.children;
    var index = -1;

    while (++index < nodes.length) {
      var result = traverse_one(h, nodes[index], parent);

      if (result) {
        if (index && nodes[index - 1].type === 'break') {
          if (!Array.isArray(result) && result.type === 'text') {
            result.value = result.value.replace(/^\s+/, '');
          }

          if (!Array.isArray(result) && result.type === 'element') {
            var head = result.children[0];

            if (head && head.type === 'text') {
              head.value = head.value.replace(/^\s+/, '');
            }
          }
        }

        if (Array.isArray(result)) {
          values.push(...result);
        } else {
          values.push(result);
        }
      }
    }
  }

  return values;
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
/**
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {ThematicBreak} [node]
 * @returns {Element}
 */
function thematic_break_thematicBreak(h, node) {
  return h(node, 'hr');
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/wrap.js
/**
 * @typedef {import('./index.js').Content} Content
 */

/**
 * Wrap `nodes` with line feeds between each entry.
 * Optionally adds line feeds at the start and end.
 *
 * @param {Array.<Content>} nodes
 * @param {boolean} [loose=false]
 * @returns {Array.<Content>}
 */

function wrap_wrap(nodes, loose) {
  /** @type {Array.<Content>} */
  var result = [];
  var index = -1;

  if (loose) {
    result.push(u('text', '\n'));
  }

  while (++index < nodes.length) {
    if (index) result.push(u('text', '\n'));
    result.push(nodes[index]);
  }

  if (loose && nodes.length > 0) {
    result.push(u('text', '\n'));
  }

  return result;
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/list.js
/**
 * @typedef {import('mdast').List} List
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */


/**
 * @type {Handler}
 * @param {List} node
 * @returns {Element}
 */

function list_list(h, node) {
  /** @type {Properties} */
  var props = {};
  var name = node.ordered ? 'ol' : 'ul';
  var items = traverse_all(h, node);
  var index = -1;

  if (typeof node.start === 'number' && node.start !== 1) {
    props.start = node.start;
  } // Like GitHub, add a class for custom styling.


  while (++index < items.length) {
    var item = items[index];

    if (item.type === 'element' && item.tagName === 'li' && item.properties && Array.isArray(item.properties.className) && item.properties.className.includes('task-list-item')) {
      props.className = ['contains-task-list'];
      break;
    }
  }

  return h(node, name, props, wrap_wrap(items, true));
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/footer.js
/**
 * @typedef {import('mdast').BlockContent} BlockContent
 * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('./index.js').H} H
 */



/**
 * @param {H} h
 */

function footer(h) {
  var footnoteById = h.footnoteById;
  var footnoteOrder = h.footnoteOrder;
  var index = -1;
  /** @type {Array.<ListItem>} */

  var listItems = [];

  while (++index < footnoteOrder.length) {
    var def = footnoteById[footnoteOrder[index].toUpperCase()];

    if (!def) {
      continue;
    }

    var marker = String(index + 1);
    var content = [...def.children];
    /** @type {Link} */

    var backReference = {
      type: 'link',
      url: '#fnref' + marker,
      data: {
        hProperties: {
          className: ['footnote-back'],
          role: 'doc-backlink'
        }
      },
      children: [{
        type: 'text',
        value: '↩'
      }]
    };
    var tail = content[content.length - 1];

    if (tail && tail.type === 'paragraph') {
      tail.children.push(backReference);
    } else {
      // @ts-expect-error Indeed, link directly added in block content.
      // Which we do because that way at least the handlers will be called
      // for the other HTML we’re generating (as markdown).
      content.push(backReference);
    }

    listItems.push({
      type: 'listItem',
      data: {
        hProperties: {
          id: 'fn' + marker,
          role: 'doc-endnote'
        }
      },
      children: content,
      position: def.position
    });
  }

  if (listItems.length === 0) {
    return null;
  }

  return h(null, 'section', {
    className: ['footnotes'],
    role: 'doc-endnotes'
  }, wrap_wrap([thematic_break_thematicBreak(h), list_list(h, {
    type: 'list',
    ordered: true,
    children: listItems
  })], true));
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
/**
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('../index.js').Handler} Handler
 */


/**
 * @type {Handler}
 * @param {Blockquote} node
 */

function blockquote(h, node) {
  return h(node, 'blockquote', wrap_wrap(traverse_all(h, node), true));
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/break.js
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {import('mdast').Break} Break
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Break} node
 * @returns {Array<Element|Text>}
 */

function hardBreak(h, node) {
  return [h(node, 'br'), u('text', '\n')];
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/code.js
/**
 * @typedef {import('mdast').Code} Code
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Code} node
 */

function code(h, node) {
  var value = node.value ? node.value + '\n' : ''; // To do: next major, use `node.lang` w/o regex, the splitting’s been going
  // on for years in remark now.

  var lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
  /** @type {Properties} */

  var props = {};

  if (lang) {
    props.className = ['language-' + lang];
  }

  var code = h(node, 'code', props, [u('text', value)]);

  if (node.meta) {
    code.data = {
      meta: node.meta
    };
  }

  return h(node.position, 'pre', [code]);
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/delete.js
/**
 * @typedef {import('mdast').Delete} Delete
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Delete} node
 */

function strikethrough(h, node) {
  return h(node, 'del', traverse_all(h, node));
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
/**
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Emphasis} node
 */

function emphasis(h, node) {
  return h(node, 'em', traverse_all(h, node));
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
/**
 * @typedef {import('mdast').FootnoteReference} FootnoteReference
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {FootnoteReference} node
 */

function footnoteReference(h, node) {
  var footnoteOrder = h.footnoteOrder;
  var identifier = String(node.identifier);
  var index = footnoteOrder.indexOf(identifier);
  var marker = String(index === -1 ? footnoteOrder.push(identifier) : index + 1);
  return h(node, 'a', {
    href: '#fn' + marker,
    className: ['footnote-ref'],
    id: 'fnref' + marker,
    role: 'doc-noteref'
  }, [h(node.position, 'sup', [u('text', marker)])]);
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/footnote.js
/**
 * @typedef {import('mdast').Footnote} Footnote
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Footnote} node
 */

function footnote(h, node) {
  var footnoteById = h.footnoteById;
  var footnoteOrder = h.footnoteOrder;
  var no = 1;

  while (no in footnoteById) {
    no++;
  }

  var identifier = String(no); // No need to check if `identifier` exists in `footnoteOrder`, it’s guaranteed
  // to not exist because we just generated it.

  footnoteOrder.push(identifier);
  footnoteById[identifier] = {
    type: 'footnoteDefinition',
    identifier,
    children: [{
      type: 'paragraph',
      children: node.children
    }],
    position: node.position
  };
  return footnoteReference(h, {
    type: 'footnoteReference',
    identifier,
    position: node.position
  });
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/heading.js
/**
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Heading} node
 */

function heading(h, node) {
  return h(node, 'h' + node.depth, traverse_all(h, node));
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/html.js
/**
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * Return either a `raw` node in dangerous mode, otherwise nothing.
 *
 * @type {Handler}
 * @param {HTML} node
 */

function html(h, node) {
  // @ts-expect-error non-standard raw nodes.
  return h.dangerous ? h.augment(node, u('raw', node.value)) : null;
}
// EXTERNAL MODULE: ./node_modules/mdurl/encode.js
var encode = __webpack_require__(82066);
var encode_default = /*#__PURE__*/__webpack_require__.n(encode);
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/revert.js
/**
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('./index.js').Handler} Handler
 * @typedef {import('./index.js').Content} Content
 */


/**
 * Return the content of a reference without definition as plain text.
 *
 * @type {Handler}
 * @param {ImageReference|LinkReference} node
 * @returns {Content|Array.<Content>}
 */

function revert(h, node) {
  var subtype = node.referenceType;
  var suffix = ']';

  if (subtype === 'collapsed') {
    suffix += '[]';
  } else if (subtype === 'full') {
    suffix += '[' + (node.label || node.identifier) + ']';
  }

  if (node.type === 'imageReference') {
    return u('text', '![' + node.alt + suffix);
  }

  var contents = traverse_all(h, node);
  var head = contents[0];

  if (head && head.type === 'text') {
    head.value = '[' + head.value;
  } else {
    contents.unshift(u('text', '['));
  }

  var tail = contents[contents.length - 1];

  if (tail && tail.type === 'text') {
    tail.value += suffix;
  } else {
    contents.push(u('text', suffix));
  }

  return contents;
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
/**
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */


/**
 * @type {Handler}
 * @param {ImageReference} node
 */

function imageReference(h, node) {
  var def = h.definition(node.identifier);

  if (!def) {
    return revert(h, node);
  }
  /** @type {Properties} */


  var props = {
    src: encode_default()(def.url || ''),
    alt: node.alt
  };

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title;
  }

  return h(node, 'img', props);
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/image.js
/**
 * @typedef {import('mdast').Image} Image
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Image} node
 */

function image_image(h, node) {
  /** @type {Properties} */
  var props = {
    src: encode_default()(node.url),
    alt: node.alt
  };

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title;
  }

  return h(node, 'img', props);
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
/**
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {InlineCode} node
 */

function inlineCode(h, node) {
  return h(node, 'code', [u('text', node.value.replace(/\r?\n|\r/g, ' '))]);
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
/**
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */



/**
 * @type {Handler}
 * @param {LinkReference} node
 */

function linkReference(h, node) {
  var def = h.definition(node.identifier);

  if (!def) {
    return revert(h, node);
  }
  /** @type {Properties} */


  var props = {
    href: encode_default()(def.url || '')
  };

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title;
  }

  return h(node, 'a', props, traverse_all(h, node));
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/link.js
/**
 * @typedef {import('mdast').Link} Link
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */


/**
 * @type {Handler}
 * @param {Link} node
 */

function link_link(h, node) {
  /** @type {Properties} */
  var props = {
    href: encode_default()(node.url)
  };

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title;
  }

  return h(node, 'a', props, traverse_all(h, node));
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/list-item.js
/**
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').List} List
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index.js').Handler} Handler
 * @typedef {import('../index.js').Content} Content
 */


/**
 * @type {Handler}
 * @param {ListItem} node
 * @param {List} parent
 */

function listItem(h, node, parent) {
  var result = traverse_all(h, node);
  var loose = parent ? listLoose(parent) : listItemLoose(node);
  /** @type {Properties} */

  var props = {};
  /** @type {Array.<Content>} */

  var wrapped = [];

  if (typeof node.checked === 'boolean') {
    /** @type {Element} */
    var paragraph;

    if (result[0] && result[0].type === 'element' && result[0].tagName === 'p') {
      paragraph = result[0];
    } else {
      paragraph = h(null, 'p', []);
      result.unshift(paragraph);
    }

    if (paragraph.children.length > 0) {
      paragraph.children.unshift(u('text', ' '));
    }

    paragraph.children.unshift(h(null, 'input', {
      type: 'checkbox',
      checked: node.checked,
      disabled: true
    })); // According to github-markdown-css, this class hides bullet.
    // See: <https://github.com/sindresorhus/github-markdown-css>.

    props.className = ['task-list-item'];
  }

  var index = -1;

  while (++index < result.length) {
    var child = result[index]; // Add eols before nodes, except if this is a loose, first paragraph.

    if (loose || index !== 0 || child.type !== 'element' || child.tagName !== 'p') {
      wrapped.push(u('text', '\n'));
    }

    if (child.type === 'element' && child.tagName === 'p' && !loose) {
      wrapped.push(...child.children);
    } else {
      wrapped.push(child);
    }
  }

  var tail = result[result.length - 1]; // Add a final eol.

  if (tail && (loose || !('tagName' in tail) || tail.tagName !== 'p')) {
    wrapped.push(u('text', '\n'));
  }

  return h(node, 'li', props, wrapped);
}
/**
 * @param {List} node
 * @return {Boolean}
 */

function listLoose(node) {
  var loose = node.spread;
  var children = node.children;
  var index = -1;

  while (!loose && ++index < children.length) {
    loose = listItemLoose(children[index]);
  }

  return Boolean(loose);
}
/**
 * @param {ListItem} node
 * @return {Boolean}
 */


function listItemLoose(node) {
  var spread = node.spread;
  return spread === undefined || spread === null ? node.children.length > 1 : spread;
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
/**
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Paragraph} node
 */

function paragraph(h, node) {
  return h(node, 'p', traverse_all(h, node));
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/root.js
/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('../index.js').Handler} Handler
 */



/**
 * @type {Handler}
 * @param {Root} node
 */

function root(h, node) {
  // @ts-expect-error `root`s are also fine.
  return h.augment(node, u('root', wrap_wrap(traverse_all(h, node))));
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/strong.js
/**
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Strong} node
 */

function strong(h, node) {
  return h(node, 'strong', traverse_all(h, node));
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/table.js
/**
 * @typedef {import('mdast').Table} Table
 * @typedef {import('mdast').TableCell} TableCell
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index.js').Handler} Handler
 * @typedef {import('../index.js').Content} Content
 */



/**
 * @type {Handler}
 * @param {Table} node
 */

function table(h, node) {
  var rows = node.children;
  var index = rows.length;
  var align = node.align || [];
  /** @type {Array.<Element>} */

  var result = [];

  while (index--) {
    var row = rows[index].children;
    var name = index === 0 ? 'th' : 'td';
    var pos = node.align ? align.length : row.length;
    /** @type {Array.<Content>} */

    var out = [];

    while (pos--) {
      var cell = row[pos];
      out[pos] = h(cell, name, {
        align: align[pos]
      }, cell ? traverse_all(h, cell) : []);
    }

    result[index] = h(rows[index], 'tr', wrap_wrap(out, true));
  }

  return h(node, 'table', wrap_wrap([h(result[0].position, 'thead', wrap_wrap([result[0]], true))].concat(result[1] ? h({
    start: pointStart(result[1]),
    end: pointEnd(result[result.length - 1])
  }, 'tbody', wrap_wrap(result.slice(1), true)) : []), true));
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/text.js
/**
 * @typedef {import('mdast').Text} Text
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Text} node
 */

function handlers_text_text(h, node) {
  return h.augment(node, u('text', String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, '$1')));
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/handlers/index.js






















var handlers = {
  blockquote: blockquote,
  break: hardBreak,
  code: code,
  delete: strikethrough,
  emphasis: emphasis,
  footnoteReference: footnoteReference,
  footnote: footnote,
  heading: heading,
  html: html,
  imageReference: imageReference,
  image: image_image,
  inlineCode: inlineCode,
  linkReference: linkReference,
  link: link_link,
  listItem: listItem,
  list: list_list,
  paragraph: paragraph,
  root: root,
  strong: strong,
  table: table,
  text: handlers_text_text,
  thematicBreak: thematic_break_thematicBreak,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
}; // Return nothing for nodes that are ignored.

function ignore() {
  return null;
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/node_modules/mdast-util-to-hast/lib/index.js


function lib_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function lib_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { lib_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { lib_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @typedef {import('mdast').Root|import('mdast').Parent['children'][number]} MdastNode
 * @typedef {import('hast').Root|import('hast').Parent['children'][number]} HastNode
 * @typedef {import('mdast').Parent} Parent
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast').Text} Text
 * @typedef {import('hast').Comment} Comment
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Root} Root
 * @typedef {import('unist-util-position').PositionLike} PositionLike
 * @typedef {import('unist-util-visit').Visitor<FootnoteDefinition>} FootnoteDefinitionVisitor
 *
 * @typedef {Element|Text|Comment} Content
 *
 * @typedef EmbeddedHastFields
 * @property {string} [hName] Defines the tag name of an element
 * @property {Properties} [hProperties] Defines the properties of an element
 * @property {Array.<Content>} [hChildren] Defines the (hast) children of an element
 *
 * @typedef {Object.<string, unknown> & EmbeddedHastFields} Data unist data with embedded hast fields
 *
 * @typedef {MdastNode & {data?: Data}} NodeWithData unist node with embedded hast data
 *
 * @callback Handler
 * @param {H} h Handle context
 * @param {any} node mdast node to handle
 * @param {Parent|null} parent Parent of `node`
 * @returns {Content|Array.<Content>|null|undefined} hast node
 *
 * @callback HFunctionProps
 * @param {MdastNode|PositionLike|null|undefined} node mdast node or unist position
 * @param {string} tagName HTML tag name
 * @param {Properties} props Properties
 * @param {Array.<Content>?} [children] hast content
 * @returns {Element}
 *
 * @callback HFunctionNoProps
 * @param {MdastNode|PositionLike|null|undefined} node mdast node or unist position
 * @param {string} tagName HTML tag name
 * @param {Array.<Content>?} [children] hast content
 * @returns {Element}
 *
 * @typedef HFields
 * @property {boolean} dangerous Whether HTML is allowed
 * @property {(identifier: string) => Definition|null} definition Definition cache
 * @property {Object.<string, FootnoteDefinition>} footnoteById Footnote cache
 * @property {Array.<string>} footnoteOrder Order in which footnotes occur
 * @property {Handlers} handlers Applied handlers
 * @property {Handler} unknownHandler Handler for any none not in `passThrough` or otherwise handled
 * @property {(left: NodeWithData|PositionLike|null|undefined, right: Content) => Content} augment Like `h` but lower-level and usable on non-elements.
 * @property {Array.<string>} passThrough List of node types to pass through untouched (except for their children).
 *
 * @typedef Options
 * @property {boolean} [allowDangerousHtml=false] Whether to allow `html` nodes and inject them as `raw` HTML
 * @property {Handlers} [handlers] Object mapping mdast nodes to functions handling them
 * @property {Array.<string>} [passThrough] List of custom mdast node types to pass through (keep) in hast
 * @property {Handler} [unknownHandler] Handler for all unknown nodes.
 *
 * @typedef {Record.<string, Handler>} Handlers Map of node types to handlers
 * @typedef {HFunctionProps & HFunctionNoProps & HFields} H Handle context
 */








var mdast_util_to_hast_lib_own = {}.hasOwnProperty;
/**
 * Factory to transform.
 * @param {MdastNode} tree mdast node
 * @param {Options} [options] Configuration
 * @returns {H} `h` function
 */

function factory(tree, options) {
  var settings = options || {};
  var dangerous = settings.allowDangerousHtml || false;
  /** @type {Object.<string, FootnoteDefinition>} */

  var footnoteById = {};
  h.dangerous = dangerous;
  h.definition = definitions(tree);
  h.footnoteById = footnoteById;
  /** @type {Array.<string>} */

  h.footnoteOrder = [];
  h.augment = augment;
  h.handlers = lib_objectSpread(lib_objectSpread({}, handlers), settings.handlers);
  h.unknownHandler = settings.unknownHandler;
  h.passThrough = settings.passThrough;
  visit(tree, 'footnoteDefinition', onfootnotedefinition); // @ts-expect-error Hush, it’s fine!

  return h;
  /**
   * Finalise the created `right`, a hast node, from `left`, an mdast node.
   * @param {(NodeWithData|PositionLike)?} left
   * @param {Content} right
   * @returns {Content}
   */

  function augment(left, right) {
    // Handle `data.hName`, `data.hProperties, `data.hChildren`.
    if (left && 'data' in left && left.data) {
      /** @type {Data} */
      var data = left.data;

      if (data.hName) {
        if (right.type !== 'element') {
          right = {
            type: 'element',
            tagName: '',
            properties: {},
            children: []
          };
        }

        right.tagName = data.hName;
      }

      if (right.type === 'element' && data.hProperties) {
        right.properties = lib_objectSpread(lib_objectSpread({}, right.properties), data.hProperties);
      }

      if ('children' in right && right.children && data.hChildren) {
        right.children = data.hChildren;
      }
    }

    if (left) {
      var ctx = 'type' in left ? left : {
        position: left
      };

      if (!generated(ctx)) {
        right.position = {
          start: pointStart(ctx),
          end: pointEnd(ctx)
        };
      }
    }

    return right;
  }
  /**
   * Create an element for `node`.
   *
   * @type {HFunctionProps}
   */


  function h(node, tagName, props, children) {
    if (Array.isArray(props)) {
      children = props;
      props = {};
    } // @ts-expect-error augmenting an element yields an element.


    return augment(node, {
      type: 'element',
      tagName,
      properties: props || {},
      children: children || []
    });
  }
  /**
   * @type {FootnoteDefinitionVisitor}
   */


  function onfootnotedefinition(definition) {
    var id = String(definition.identifier).toUpperCase(); // Mimick CM behavior of link definitions.
    // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/8290999/index.js#L26>.

    if (!mdast_util_to_hast_lib_own.call(footnoteById, id)) {
      footnoteById[id] = definition;
    }
  }
}
/**
 * Transform `tree` (an mdast node) to a hast node.
 *
 * @param {MdastNode} tree mdast node
 * @param {Options} [options] Configuration
 * @returns {HastNode|null|undefined} hast node
 */


function toHast(tree, options) {
  var h = factory(tree, options);
  var node = traverse_one(h, tree, null);
  var foot = footer(h);

  if (foot) {
    // @ts-expect-error If there’s a footer, there were definitions, meaning block
    // content.
    // So assume `node` is a parent node.
    node.children.push(u('text', '\n'), foot);
  }

  return Array.isArray(node) ? {
    type: 'root',
    children: node
  } : node;
}
;// CONCATENATED MODULE: ./node_modules/remark-rehype/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('mdast').Root} MdastRoot
 * @typedef {import('mdast-util-to-hast').Options} Options
 * @typedef {import('unified').Processor<any, any, any, any>} Processor
 */
 // Note: the `<MdastRoot, HastRoot>` overload doesn’t seem to work :'(

/**
 * Plugin to bridge or mutate to rehype.
 *
 * If a destination is given, runs the destination with the new hast tree
 * (bridge-mode).
 * Without destination, returns the hast tree: further plugins run on that tree
 * (mutate-mode).
 *
 * @param destination
 *   Optional unified processor.
 * @param options
 *   Options passed to `mdast-util-to-hast`.
 */

var remarkRehype = function remarkRehype(destination, options) {
  return destination && 'run' in destination ? bridge(destination, options) : mutate(destination);
};

/* harmony default export */ var remark_rehype = (remarkRehype);
/**
 * Bridge-mode.
 * Runs the destination with the new hast tree.
 *
 * @type {import('unified').Plugin<[Processor, Options?], MdastRoot>}
 */

function bridge(destination, options) {
  return (node, file, next) => {
    destination.run(toHast(node, options), file, error => {
      next(error);
    });
  };
}
/**
 * Mutate-mode.
 * Further transformers run on the nlcst tree.
 *
 * @type {import('unified').Plugin<[Options?]|void[], MdastRoot, HastRoot>}
 */


function mutate(options) {
  // @ts-expect-error: assume a corresponding node is returned for `toHast`.
  return node => toHast(node, options);
}
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/util/schema.js
/**
 * @typedef {import('./info.js').Info} Info
 * @typedef {Object.<string, Info>} Properties
 * @typedef {Object.<string, string>} Normal
 */
class Schema {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(property, normal, space) {
    this.property = property;
    this.normal = normal;

    if (space) {
      this.space = space;
    }
  }

}
/** @type {Properties} */

Schema.prototype.property = {};
/** @type {Normal} */

Schema.prototype.normal = {};
/** @type {string|null} */

Schema.prototype.space = null;
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/util/merge.js

/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 */

/**
 * @param {import('./schema.js').Schema[]} definitions
 * @param {string} space
 * @returns {import('./schema.js').Schema}
 */

function merge(definitions, space) {
  /** @type {Properties} */
  var property = {};
  /** @type {Normal} */

  var normal = {};
  var index = -1;

  while (++index < definitions.length) {
    Object.assign(property, definitions[index].property);
    Object.assign(normal, definitions[index].normal);
  }

  return new Schema(property, normal, space);
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/normalize.js
/**
 * @param {string} value
 * @returns {string}
 */
function normalize_normalize(value) {
  return value.toLowerCase();
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/util/info.js
class Info {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(property, attribute) {
    this.property = property;
    this.attribute = attribute;
  }

}
/** @type {string|null} */

Info.prototype.space = null;
Info.prototype.attribute = null;
Info.prototype.property = null;
Info.prototype.boolean = false;
Info.prototype.booleanish = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.number = false;
Info.prototype.commaSeparated = false;
Info.prototype.spaceSeparated = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.mustUseProperty = false;
Info.prototype.defined = false;
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/util/types.js
var powers = 0;
var types_boolean = increment();
var booleanish = increment();
var overloadedBoolean = increment();
var number = increment();
var spaceSeparated = increment();
var commaSeparated = increment();
var commaOrSpaceSeparated = increment();

function increment() {
  return 2 ** ++powers;
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/util/defined-info.js


var checks = Object.keys(types_namespaceObject);
class DefinedInfo extends Info {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number} [mask]
   * @param {string} [space]
   */
  constructor(property, attribute, mask, space) {
    var index = -1;
    super(property, attribute);
    mark(this, 'space', space);

    while (++index < checks.length) {
      mark(this, checks[index], (mask & types_namespaceObject[checks[index]]) === types_namespaceObject[checks[index]]);
    }
  }

}
DefinedInfo.prototype.defined = true;
/**
 * @param {InstanceType<typeof DefinedInfo>} values
 * @param {string} key
 * @param {unknown} value
 */

function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/util/create.js



/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 * @typedef {import('./info.js').Info} Info
 */

/**
 * @typedef {Object.<string, string>} Attributes
 *
 * @typedef {Object} Definition
 * @property {Object.<string, number|null>} properties
 * @property {(attributes: Attributes, property: string) => string} transform
 * @property {string} [space]
 * @property {Attributes} [attributes]
 * @property {Array.<string>} [mustUseProperty]
 */

var create_own = {}.hasOwnProperty;
/**
 * @param {Definition} definition
 * @returns {import('./schema.js').Schema}
 */

function create(definition) {
  /** @type {Properties} */
  var property = {};
  /** @type {Normal} */

  var normal = {};
  /** @type {string} */

  var prop;
  /** @type {Info} */

  var info;

  for (prop in definition.properties) {
    if (create_own.call(definition.properties, prop)) {
      info = new DefinedInfo(prop, definition.transform(definition.attributes, prop), definition.properties[prop], definition.space);

      if (definition.mustUseProperty && definition.mustUseProperty.includes(prop)) {
        info.mustUseProperty = true;
      }

      property[prop] = info;
      normal[normalize_normalize(prop)] = prop;
      normal[normalize_normalize(info.attribute)] = prop;
    }
  }

  return new Schema(property, normal, definition.space);
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/xlink.js

var xlink = create({
  space: 'xlink',
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});
/**
 * @param {unknown} _
 * @param {string} prop
 * @returns {string}
 */

function xlinkTransform(_, prop) {
  return 'xlink:' + prop.slice(5).toLowerCase();
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/xml.js

var xml = create({
  space: 'xml',
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
});
/**
 * @param {unknown} _
 * @param {string} prop
 * @returns {string}
 */

function xmlTransform(_, prop) {
  return 'xml:' + prop.slice(3).toLowerCase();
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/util/case-sensitive-transform.js
/**
 * @param {Object.<string, string>} attributes
 * @param {string} attribute
 * @returns {string}
 */
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/util/case-insensitive-transform.js

/**
 * @param {Object.<string, string>} attributes
 * @param {string} property
 * @returns {string}
 */

function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/xmlns.js


var xmlns = create({
  space: 'xmlns',
  attributes: {
    xmlnsxlink: 'xmlns:xlink'
  },
  transform: caseInsensitiveTransform,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
});
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/aria.js


var aria = create({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});
/**
 * @param {unknown} _
 * @param {string} prop
 * @returns {string}
 */

function ariaTransform(_, prop) {
  return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase();
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/html.js



var html_html = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: types_boolean,
    allowPaymentRequest: types_boolean,
    allowUserMedia: types_boolean,
    alt: null,
    as: null,
    async: types_boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: types_boolean,
    autoPlay: types_boolean,
    capture: types_boolean,
    charSet: null,
    checked: types_boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: types_boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: types_boolean,
    defer: types_boolean,
    dir: null,
    dirName: null,
    disabled: types_boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: types_boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: types_boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: types_boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: types_boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: types_boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: types_boolean,
    muted: types_boolean,
    name: null,
    nonce: null,
    noModule: types_boolean,
    noValidate: types_boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: types_boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: types_boolean,
    poster: null,
    preload: null,
    readOnly: types_boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: types_boolean,
    reversed: types_boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: types_boolean,
    seamless: types_boolean,
    selected: types_boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: types_boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: number,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: types_boolean,
    // Lists. Use CSS to reduce space between items instead
    declare: types_boolean,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: number,
    // `<img>` and `<object>`
    leftMargin: number,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: number,
    // `<body>`
    marginWidth: number,
    // `<body>`
    noResize: types_boolean,
    // `<frame>`
    noHref: types_boolean,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: types_boolean,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: types_boolean,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: number,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: booleanish,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: number,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: types_boolean,
    disableRemotePlayback: types_boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/svg.js



var svg = create({
  space: 'svg',
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: types_boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/index.js
/**
 * @typedef {import('./lib/util/info.js').Info} Info
 * @typedef {import('./lib/util/schema.js').Schema} Schema
 */










var property_information_html = merge([xml, xlink, xmlns, aria, html_html], 'html');
var property_information_svg = merge([xml, xlink, xmlns, aria, svg], 'svg');
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/unist-util-is/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 *
 * @typedef {string} Type
 * @typedef {Object<string, unknown>} Props
 *
 * @typedef {null|undefined|Type|Props|TestFunctionAnything|Array.<Type|Props|TestFunctionAnything>} Test
 */

/**
 * Check if a node passes a test
 *
 * @callback TestFunctionAnything
 * @param {Node} node
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {boolean|void}
 */

/**
 * Check if a node passes a certain node test
 *
 * @template {Node} X
 * @callback TestFunctionPredicate
 * @param {Node} node
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {node is X}
 */

/**
 * @callback AssertAnything
 * @param {unknown} [node]
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {boolean}
 */

/**
 * Check if a node passes a certain node test
 *
 * @template {Node} Y
 * @callback AssertPredicate
 * @param {unknown} [node]
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {node is Y}
 */
var unist_util_is_is =
/**
 * Check if a node passes a test.
 * When a `parent` node is known the `index` of node should also be given.
 *
 * @param {unknown} [node] Node to check
 * @param {Test} [test]
 * When nullish, checks if `node` is a `Node`.
 * When `string`, works like passing `function (node) {return node.type === test}`.
 * When `function` checks if function passed the node is true.
 * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
 * When `array`, checks any one of the subtests pass.
 * @param {number|null|undefined} [index] Position of `node` in `parent`
 * @param {Parent|null|undefined} [parent] Parent of `node`
 * @param {unknown} [context] Context object to invoke `test` with
 * @returns {boolean} Whether test passed and `node` is a `Node` (object with `type` set to non-empty `string`).
 */
// eslint-disable-next-line max-params
function is(node, test, index, parent, context) {
  var check = unist_util_is_convert(test);

  if (index !== undefined && index !== null && (typeof index !== 'number' || index < 0 || index === Number.POSITIVE_INFINITY)) {
    throw new Error('Expected positive finite index');
  }

  if (parent !== undefined && parent !== null && (!is(parent) || !parent.children)) {
    throw new Error('Expected parent node');
  }

  if ((parent === undefined || parent === null) !== (index === undefined || index === null)) {
    throw new Error('Expected both parent and index');
  } // @ts-expect-error Looks like a node.


  return node && node.type && typeof node.type === 'string' ? Boolean(check.call(context, node, index, parent)) : false;
};
var unist_util_is_convert =
/**
 * Generate an assertion from a check.
 * @param {Test} [test]
 * When nullish, checks if `node` is a `Node`.
 * When `string`, works like passing `function (node) {return node.type === test}`.
 * When `function` checks if function passed the node is true.
 * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
 * When `array`, checks any one of the subtests pass.
 * @returns {AssertAnything}
 */
function convert(test) {
  if (test === undefined || test === null) {
    return unist_util_is_ok;
  }

  if (typeof test === 'string') {
    return unist_util_is_typeFactory(test);
  }

  if (typeof test === 'object') {
    return Array.isArray(test) ? unist_util_is_anyFactory(test) : unist_util_is_propsFactory(test);
  }

  if (typeof test === 'function') {
    return unist_util_is_castFactory(test);
  }

  throw new Error('Expected function, string, or object as test');
};
/**
 * @param {Array.<Type|Props|TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */

function unist_util_is_anyFactory(tests) {
  /** @type {Array.<AssertAnything>} */
  var checks = [];
  var index = -1;

  while (++index < tests.length) {
    checks[index] = unist_util_is_convert(tests[index]);
  }

  return unist_util_is_castFactory(any);
  /**
   * @this {unknown}
   * @param {unknown[]} parameters
   * @returns {boolean}
   */

  function any() {
    var index = -1;

    for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
      parameters[_key] = arguments[_key];
    }

    while (++index < checks.length) {
      if (checks[index].call(this, ...parameters)) return true;
    }

    return false;
  }
}
/**
 * Utility to assert each property in `test` is represented in `node`, and each
 * values are strictly equal.
 *
 * @param {Props} check
 * @returns {AssertAnything}
 */


function unist_util_is_propsFactory(check) {
  return unist_util_is_castFactory(all);
  /**
   * @param {Node} node
   * @returns {boolean}
   */

  function all(node) {
    /** @type {string} */
    var key;

    for (key in check) {
      // @ts-expect-error: hush, it sure works as an index.
      if (node[key] !== check[key]) return false;
    }

    return true;
  }
}
/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 *
 * @param {Type} check
 * @returns {AssertAnything}
 */


function unist_util_is_typeFactory(check) {
  return unist_util_is_castFactory(type);
  /**
   * @param {Node} node
   */

  function type(node) {
    return node && node.type === check;
  }
}
/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */


function unist_util_is_castFactory(check) {
  return assertion;
  /**
   * @this {unknown}
   * @param {Array.<unknown>} parameters
   * @returns {boolean}
   */

  function assertion() {
    for (var _len2 = arguments.length, parameters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      parameters[_key2] = arguments[_key2];
    }

    // @ts-expect-error: spreading is fine.
    return Boolean(check.call(this, ...parameters));
  }
} // Utility to return true.


function unist_util_is_ok() {
  return true;
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/unist-util-visit-parents/color.browser.js
/**
 * @param {string} d
 * @returns {string}
 */
function color_browser_color(d) {
  return d;
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/unist-util-visit-parents/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 */

/**
 * @typedef {CONTINUE|SKIP|EXIT} Action Union of the action types
 * @typedef {number} Index Move to the sibling at index next (after node itself is completely traversed). Useful if mutating the tree, such as removing the node the visitor is currently on, or any of its previous siblings (or next siblings, in case of reverse) Results less than 0 or greater than or equal to children.length stop traversing the parent
 * @typedef {[(Action|null|undefined|void)?, (Index|null|undefined)?]} ActionTuple List with one or two values, the first an action, the second an index.
 * @typedef {null|undefined|Action|Index|ActionTuple|void} VisitorResult Any value that can be returned from a visitor
 */

/**
 * Invoked when a node (matching test, if given) is found.
 * Visitors are free to transform node.
 * They can also transform the parent of node (the last of ancestors).
 * Replacing node itself, if `SKIP` is not returned, still causes its descendants to be visited.
 * If adding or removing previous siblings (or next siblings, in case of reverse) of node,
 * visitor should return a new index (number) to specify the sibling to traverse after node is traversed.
 * Adding or removing next siblings of node (or previous siblings, in case of reverse)
 * is handled as expected without needing to return a new index.
 * Removing the children property of an ancestor still results in them being traversed.
 *
 * @template {Node} V
 * @callback Visitor
 * @param {V} node Found node
 * @param {Array.<Parent>} ancestors Ancestors of node
 * @returns {VisitorResult}
 */


/**
 * Continue traversing as normal
 */

var unist_util_visit_parents_CONTINUE = true;
/**
 * Do not traverse this node’s children
 */

var unist_util_visit_parents_SKIP = 'skip';
/**
 * Stop traversing immediately
 */

var unist_util_visit_parents_EXIT = false;
/**
 * Visit children of tree which pass a test
 *
 * @param tree Abstract syntax tree to walk
 * @param test Test node, optional
 * @param visitor Function to run for each node
 * @param reverse Visit the tree in reverse order, defaults to false
 */

var unist_util_visit_parents_visitParents =
/**
 * @param {Node} tree
 * @param {Test} test
 * @param {Visitor<Node>} visitor
 * @param {boolean} [reverse]
 */
function visitParents(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor; // @ts-expect-error no visitor given, so `visitor` is test.

    visitor = test;
    test = null;
  }

  var is = unist_util_is_convert(test);
  var step = reverse ? -1 : 1;
  factory(tree, null, [])();
  /**
   * @param {Node} node
   * @param {number?} index
   * @param {Array.<Parent>} parents
   */

  function factory(node, index, parents) {
    /** @type {Object.<string, unknown>} */
    // @ts-expect-error: hush
    var value = typeof node === 'object' && node !== null ? node : {};
    /** @type {string|undefined} */

    var name;

    if (typeof value.type === 'string') {
      name = typeof value.tagName === 'string' ? value.tagName : typeof value.name === 'string' ? value.name : undefined;
      Object.defineProperty(visit, 'name', {
        value: 'node (' + color_browser_color(value.type + (name ? '<' + name + '>' : '')) + ')'
      });
    }

    return visit;

    function visit() {
      /** @type {ActionTuple} */
      var result = [];
      /** @type {ActionTuple} */

      var subresult;
      /** @type {number} */

      var offset;
      /** @type {Array.<Parent>} */

      var grandparents;

      if (!test || is(node, index, parents[parents.length - 1] || null)) {
        result = unist_util_visit_parents_toResult(visitor(node, parents));

        if (result[0] === unist_util_visit_parents_EXIT) {
          return result;
        }
      } // @ts-expect-error looks like a parent.


      if (node.children && result[0] !== unist_util_visit_parents_SKIP) {
        // @ts-expect-error looks like a parent.
        offset = (reverse ? node.children.length : -1) + step; // @ts-expect-error looks like a parent.

        grandparents = parents.concat(node); // @ts-expect-error looks like a parent.

        while (offset > -1 && offset < node.children.length) {
          // @ts-expect-error looks like a parent.
          subresult = factory(node.children[offset], offset, grandparents)();

          if (subresult[0] === unist_util_visit_parents_EXIT) {
            return subresult;
          }

          offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step;
        }
      }

      return result;
    }
  }
};
/**
 * @param {VisitorResult} value
 * @returns {ActionTuple}
 */

function unist_util_visit_parents_toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === 'number') {
    return [unist_util_visit_parents_CONTINUE, value];
  }

  return [value];
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/unist-util-visit/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 */

/**
 * Called when a node (matching test, if given) is found.
 * Visitors are free to transform node.
 * They can also transform the parent of node (the last of ancestors).
 * Replacing node itself, if `SKIP` is not returned, still causes its descendants to be visited.
 * If adding or removing previous siblings (or next siblings, in case of reverse) of node,
 * visitor should return a new index (number) to specify the sibling to traverse after node is traversed.
 * Adding or removing next siblings of node (or previous siblings, in case of reverse)
 * is handled as expected without needing to return a new index.
 * Removing the children property of an ancestor still results in them being traversed.
 *
 * @template {Node} V
 * @callback Visitor
 * @param {V} node Found node
 * @param {number|null} index Position of `node` in `parent`
 * @param {Parent|null} parent Parent of `node`
 * @returns {VisitorResult}
 */


/**
 * Visit children of tree which pass a test
 *
 * @param tree Abstract syntax tree to walk
 * @param test Test, optional
 * @param visitor Function to run for each node
 * @param reverse Fisit the tree in reverse, defaults to false
 */

var unist_util_visit_visit =
/**
 * @param {Node} tree
 * @param {Test} test
 * @param {Visitor<Node>} visitor
 * @param {boolean} [reverse]
 */
function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  unist_util_visit_parents_visitParents(tree, test, overload, reverse);
  /**
   * @param {Node} node
   * @param {Array.<Parent>} parents
   */

  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};
;// CONCATENATED MODULE: ./node_modules/react-markdown/lib/rehype-filter.js

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 *
 * @callback AllowElement
 * @param {Element} element
 * @param {number} index
 * @param {Element|Root} parent
 * @returns {boolean|undefined}
 *
 * @typedef Options
 * @property {Array.<string>} [allowedElements]
 * @property {Array.<string>} [disallowedElements=[]]
 * @property {AllowElement} [allowElement]
 * @property {boolean} [unwrapDisallowed=false]
 */

/**
 * @type {import('unified').Plugin<[Options], Root>}
 */

function rehypeFilter(options) {
  if (options.allowedElements && options.disallowedElements) {
    throw new TypeError('Only one of `allowedElements` and `disallowedElements` should be defined');
  }

  if (options.allowedElements || options.disallowedElements || options.allowElement) {
    return tree => {
      unist_util_visit_visit(tree, 'element', (node, index, parent_) => {
        var parent = parent_;
        /** @type {boolean|undefined} */

        var remove;

        if (options.allowedElements) {
          remove = !options.allowedElements.includes(node.tagName);
        } else if (options.disallowedElements) {
          remove = options.disallowedElements.includes(node.tagName);
        }

        if (!remove && options.allowElement && typeof index === 'number') {
          remove = !options.allowElement(node, index, parent);
        }

        if (remove && typeof index === 'number') {
          if (options.unwrapDisallowed && node.children) {
            parent.children.splice(index, 1, ...node.children);
          } else {
            parent.children.splice(index, 1);
          }

          return index;
        }

        return undefined;
      });
    };
  }
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/lib/uri-transformer.js
var protocols = ['http', 'https', 'mailto', 'tel'];
/**
 * @param {string} uri
 * @returns {string}
 */

function uriTransformer(uri) {
  var url = (uri || '').trim();
  var first = url.charAt(0);

  if (first === '#' || first === '/') {
    return url;
  }

  var colon = url.indexOf(':');

  if (colon === -1) {
    return url;
  }

  var index = -1;

  while (++index < protocols.length) {
    var protocol = protocols[index];

    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
      return url;
    }
  }

  index = url.indexOf('?');

  if (index !== -1 && colon > index) {
    return url;
  }

  index = url.indexOf('#');

  if (index !== -1 && colon > index) {
    return url;
  } // eslint-disable-next-line no-script-url


  return 'javascript:void(0)';
}
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(8812);
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/find.js



var valid = /^data[-\w.:]+$/i;
var dash = /-[a-z]/g;
var cap = /[A-Z]/g;
/**
 * @param {import('./util/schema.js').Schema} schema
 * @param {string} value
 * @returns {import('./util/info.js').Info}
 */

function find(schema, value) {
  var normal = normalize_normalize(value);
  var prop = value;
  var Type = Info;

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }

  if (normal.length > 4 && normal.slice(0, 4) === 'data' && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      prop = datasetToProperty(value);
    } else {
      value = datasetToAttribute(value);
    }

    Type = DefinedInfo;
  }

  return new Type(prop, value);
}
/**
 * @param {string} attribute
 * @returns {string}
 */

function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase);
  return 'data' + value.charAt(0).toUpperCase() + value.slice(1);
}
/**
 * @param {string} property
 * @returns {string}
 */


function datasetToAttribute(property) {
  var value = property.slice(4);

  if (dash.test(value)) {
    return property;
  }

  value = value.replace(cap, kebab);

  if (value.charAt(0) !== '-') {
    value = '-' + value;
  }

  return 'data' + value;
}
/**
 * @param {string} $0
 * @returns {string}
 */


function kebab($0) {
  return '-' + $0.toLowerCase();
}
/**
 * @param {string} $0
 * @returns {string}
 */


function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/property-information/lib/hast-to-react.js
var hastToReact = {
  classId: 'classID',
  dataType: 'datatype',
  itemId: 'itemID',
  strokeDashArray: 'strokeDasharray',
  strokeDashOffset: 'strokeDashoffset',
  strokeLineCap: 'strokeLinecap',
  strokeLineJoin: 'strokeLinejoin',
  strokeMiterLimit: 'strokeMiterlimit',
  typeOf: 'typeof',
  xLinkActuate: 'xlinkActuate',
  xLinkArcRole: 'xlinkArcrole',
  xLinkHref: 'xlinkHref',
  xLinkRole: 'xlinkRole',
  xLinkShow: 'xlinkShow',
  xLinkTitle: 'xlinkTitle',
  xLinkType: 'xlinkType',
  xmlnsXLink: 'xmlnsXlink'
};
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/space-separated-tokens/index.js
/**
 * Parse space separated tokens to an array of strings.
 *
 * @param {string} value Space separated tokens
 * @returns {Array.<string>} Tokens
 */
function space_separated_tokens_parse(value) {
  var input = String(value || '').trim();
  return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
/**
 * Serialize an array of strings as space separated tokens.
 *
 * @param {Array.<string|number>} values Tokens
 * @returns {string} Space separated tokens
 */

function stringify(values) {
  return values.join(' ').trim();
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/node_modules/comma-separated-tokens/index.js
/**
 * @typedef {Object} StringifyOptions
 * @property {boolean} [padLeft=true] Whether to pad a space before a token (`boolean`, default: `true`).
 * @property {boolean} [padRight=false] Whether to pad a space after a token (`boolean`, default: `false`).
 */

/**
 * Parse comma separated tokens to an array.
 *
 * @param {string} value
 * @returns {Array.<string>}
 */
function comma_separated_tokens_parse(value) {
  /** @type {Array.<string>} */
  var tokens = [];
  var input = String(value || '');
  var index = input.indexOf(',');
  var start = 0;
  /** @type {boolean} */

  var end;
  /** @type {string} */

  var token;

  while (!end) {
    if (index === -1) {
      index = input.length;
      end = true;
    }

    token = input.slice(start, index).trim();

    if (token || !end) {
      tokens.push(token);
    }

    start = index + 1;
    index = input.indexOf(',', start);
  }

  return tokens;
}
/**
 * Serialize an array of strings to comma separated tokens.
 *
 * @param {Array.<string|number>} values
 * @param {StringifyOptions} [options]
 * @returns {string}
 */

function comma_separated_tokens_stringify(values, options) {
  var settings = options || {}; // Ensure the last empty entry is seen.

  if (values[values.length - 1] === '') {
    values = values.concat('');
  }

  return values.join((settings.padRight ? ' ' : '') + ',' + (settings.padLeft === false ? '' : ' ')).trim();
}
// EXTERNAL MODULE: ./node_modules/style-to-object/index.js
var style_to_object = __webpack_require__(72303);
var style_to_object_default = /*#__PURE__*/__webpack_require__.n(style_to_object);
;// CONCATENATED MODULE: ./node_modules/react-markdown/lib/ast-to-react.js
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('unist').Position} Position
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Text} Text
 * @typedef {import('hast').Comment} Comment
 * @typedef {import('hast').DocType} Doctype
 * @typedef {import('property-information').Info} Info
 * @typedef {import('property-information').Schema} Schema
 * @typedef {import('./complex-types').ReactMarkdownProps} ReactMarkdownProps
 *
 * @typedef Raw
 * @property {'raw'} type
 * @property {string} value
 *
 * @typedef Context
 * @property {Options} options
 * @property {Schema} schema
 * @property {number} listDepth
 *
 * @callback TransformLink
 * @param {string} href
 * @param {Array.<ElementContent>} children
 * @param {string?} title
 * @returns {string}
 *
 * @callback TransformImage
 * @param {string} src
 * @param {string} alt
 * @param {string?} title
 * @returns {string}
 *
 * @typedef {import("react").HTMLAttributeAnchorTarget} TransformLinkTargetType
 *
 * @callback TransformLinkTarget
 * @param {string} href
 * @param {Array.<ElementContent>} children
 * @param {string?} title
 * @returns {TransformLinkTargetType|undefined}
 *
 * @typedef {keyof JSX.IntrinsicElements} ReactMarkdownNames
 *
 * To do: is `data-sourcepos` typeable?
 *
 * @callback CodeComponent
 * @param {JSX.IntrinsicElements['code'] & ReactMarkdownProps & {inline?: boolean}} props
 * @returns {ReactNode}
 *
 * @callback HeadingComponent
 * @param {JSX.IntrinsicElements['h1'] & ReactMarkdownProps & {level: number}} props
 * @returns {ReactNode}
 *
 * @callback LiComponent
 * @param {JSX.IntrinsicElements['li'] & ReactMarkdownProps & {checked: boolean|null, index: number, ordered: boolean}} props
 * @returns {ReactNode}
 *
 * @callback OrderedListComponent
 * @param {JSX.IntrinsicElements['ol'] & ReactMarkdownProps & {depth: number, ordered: true}} props
 * @returns {ReactNode}
 *
 * @callback TableCellComponent
 * @param {JSX.IntrinsicElements['table'] & ReactMarkdownProps & {style?: Object.<string, unknown>, isHeader: boolean}} props
 * @returns {ReactNode}
 *
 * @callback TableRowComponent
 * @param {JSX.IntrinsicElements['tr'] & ReactMarkdownProps & {isHeader: boolean}} props
 * @returns {ReactNode}
 *
 * @callback UnorderedListComponent
 * @param {JSX.IntrinsicElements['ul'] & ReactMarkdownProps & {depth: number, ordered: false}} props
 * @returns {ReactNode}
 *
 * @typedef SpecialComponents
 * @property {CodeComponent|ReactMarkdownNames} code
 * @property {HeadingComponent|ReactMarkdownNames} h1
 * @property {HeadingComponent|ReactMarkdownNames} h2
 * @property {HeadingComponent|ReactMarkdownNames} h3
 * @property {HeadingComponent|ReactMarkdownNames} h4
 * @property {HeadingComponent|ReactMarkdownNames} h5
 * @property {HeadingComponent|ReactMarkdownNames} h6
 * @property {LiComponent|ReactMarkdownNames} li
 * @property {OrderedListComponent|ReactMarkdownNames} ol
 * @property {TableCellComponent|ReactMarkdownNames} td
 * @property {TableCellComponent|ReactMarkdownNames} th
 * @property {TableRowComponent|ReactMarkdownNames} tr
 * @property {UnorderedListComponent|ReactMarkdownNames} ul
 *
 * @typedef {Partial<Omit<import("./complex-types").NormalComponents, keyof SpecialComponents> & SpecialComponents>} Components
 *
 * @typedef Options
 * @property {boolean} [sourcePos=false]
 * @property {boolean} [rawSourcePos=false]
 * @property {boolean} [skipHtml=false]
 * @property {boolean} [includeElementIndex=false]
 * @property {null|false|TransformLink} [transformLinkUri]
 * @property {TransformImage} [transformImageUri]
 * @property {TransformLinkTargetType|TransformLinkTarget} [linkTarget]
 * @property {Components} [components]
 */






var ast_to_react_own = {}.hasOwnProperty; // The table-related elements that must not contain whitespace text according
// to React.

var tableElements = new Set(['table', 'thead', 'tbody', 'tfoot', 'tr']);
/**
 * @param {Context} context
 * @param {Element|Root} node
 */

function childrenToReact(context, node) {
  /** @type {Array.<ReactNode>} */
  var children = [];
  var childIndex = -1;
  /** @type {Comment|Doctype|Element|Raw|Text} */

  var child;

  while (++childIndex < node.children.length) {
    child = node.children[childIndex];

    if (child.type === 'element') {
      children.push(toReact(context, child, childIndex, node));
    } else if (child.type === 'text') {
      // React does not permit whitespace text elements as children of table:
      // cf. https://github.com/remarkjs/react-markdown/issues/576
      if (node.type !== 'element' || !tableElements.has(node.tagName) || child.value !== '\n') {
        children.push(child.value);
      }
    } else if (child.type === 'raw' && !context.options.skipHtml) {
      // Default behavior is to show (encoded) HTML.
      children.push(child.value);
    }
  }

  return children;
}
/**
 * @param {Context} context
 * @param {Element} node
 * @param {number} index
 * @param {Element|Root} parent
 */

function toReact(context, node, index, parent) {
  var options = context.options;
  var parentSchema = context.schema;
  /** @type {ReactMarkdownNames} */
  // @ts-expect-error assume a known HTML/SVG element.

  var name = node.tagName;
  /** @type {Object.<string, unknown>} */

  var properties = {};
  var schema = parentSchema;
  /** @type {string} */

  var property;

  if (parentSchema.space === 'html' && name === 'svg') {
    schema = property_information_svg;
    context.schema = schema;
  }

  if (node.properties) {
    for (property in node.properties) {
      if (ast_to_react_own.call(node.properties, property)) {
        addProperty(properties, property, node.properties[property], context);
      }
    }
  }

  if (name === 'ol' || name === 'ul') {
    context.listDepth++;
  }

  var children = childrenToReact(context, node);

  if (name === 'ol' || name === 'ul') {
    context.listDepth--;
  } // Restore parent schema.


  context.schema = parentSchema; // Nodes created by plugins do not have positional info, in which case we use
  // an object that matches the position interface.

  var position = node.position || {
    start: {
      line: null,
      column: null,
      offset: null
    },
    end: {
      line: null,
      column: null,
      offset: null
    }
  };
  var component = options.components && ast_to_react_own.call(options.components, name) ? options.components[name] : name;
  var basic = typeof component === 'string' || component === react.Fragment;

  if (!react_is.isValidElementType(component)) {
    throw new TypeError("Component for name `".concat(name, "` not defined or is not renderable"));
  }

  properties.key = [name, position.start.line, position.start.column, index].join('-');

  if (name === 'a' && options.linkTarget) {
    properties.target = typeof options.linkTarget === 'function' ? options.linkTarget(String(properties.href || ''), node.children, typeof properties.title === 'string' ? properties.title : null) : options.linkTarget;
  }

  if (name === 'a' && options.transformLinkUri) {
    properties.href = options.transformLinkUri(String(properties.href || ''), node.children, typeof properties.title === 'string' ? properties.title : null);
  }

  if (!basic && name === 'code' && parent.type === 'element' && parent.tagName !== 'pre') {
    properties.inline = true;
  }

  if (!basic && (name === 'h1' || name === 'h2' || name === 'h3' || name === 'h4' || name === 'h5' || name === 'h6')) {
    properties.level = Number.parseInt(name.charAt(1), 10);
  }

  if (name === 'img' && options.transformImageUri) {
    properties.src = options.transformImageUri(String(properties.src || ''), String(properties.alt || ''), typeof properties.title === 'string' ? properties.title : null);
  }

  if (!basic && name === 'li' && parent.type === 'element') {
    var input = getInputElement(node);
    properties.checked = input && input.properties ? Boolean(input.properties.checked) : null;
    properties.index = getElementsBeforeCount(parent, node);
    properties.ordered = parent.tagName === 'ol';
  }

  if (!basic && (name === 'ol' || name === 'ul')) {
    properties.ordered = name === 'ol';
    properties.depth = context.listDepth;
  }

  if (name === 'td' || name === 'th') {
    if (properties.align) {
      if (!properties.style) properties.style = {}; // @ts-expect-error assume `style` is an object

      properties.style.textAlign = properties.align;
      delete properties.align;
    }

    if (!basic) {
      properties.isHeader = name === 'th';
    }
  }

  if (!basic && name === 'tr' && parent.type === 'element') {
    properties.isHeader = Boolean(parent.tagName === 'thead');
  } // If `sourcePos` is given, pass source information (line/column info from markdown source).


  if (options.sourcePos) {
    properties['data-sourcepos'] = flattenPosition(position);
  }

  if (!basic && options.rawSourcePos) {
    properties.sourcePosition = node.position;
  } // If `includeElementIndex` is given, pass node index info to components.


  if (!basic && options.includeElementIndex) {
    properties.index = getElementsBeforeCount(parent, node);
    properties.siblingCount = getElementsBeforeCount(parent);
  }

  if (!basic) {
    properties.node = node;
  } // Ensure no React warnings are emitted for void elements w/ children.


  return children.length > 0 ? react.createElement(component, properties, children) : react.createElement(component, properties);
}
/**
 * @param {Element|Root} node
 * @returns {Element?}
 */


function getInputElement(node) {
  var index = -1;

  while (++index < node.children.length) {
    var child = node.children[index];

    if (child.type === 'element' && child.tagName === 'input') {
      return child;
    }
  }

  return null;
}
/**
 * @param {Element|Root} parent
 * @param {Element} [node]
 * @returns {number}
 */


function getElementsBeforeCount(parent, node) {
  var index = -1;
  var count = 0;

  while (++index < parent.children.length) {
    if (parent.children[index] === node) break;
    if (parent.children[index].type === 'element') count++;
  }

  return count;
}
/**
 * @param {Object.<string, unknown>} props
 * @param {string} prop
 * @param {unknown} value
 * @param {Context} ctx
 */


function addProperty(props, prop, value, ctx) {
  var info = find(ctx.schema, prop);
  var result = value; // Ignore nullish and `NaN` values.
  // eslint-disable-next-line no-self-compare

  if (result === null || result === undefined || result !== result) {
    return;
  } // Accept `array`.
  // Most props are space-separated.


  if (Array.isArray(result)) {
    result = info.commaSeparated ? comma_separated_tokens_stringify(result) : stringify(result);
  }

  if (info.property === 'style' && typeof result === 'string') {
    result = parseStyle(result);
  }

  if (info.space && info.property) {
    props[ast_to_react_own.call(hastToReact, info.property) ? hastToReact[info.property] : info.property] = result;
  } else if (info.attribute) {
    props[info.attribute] = result;
  }
}
/**
 * @param {string} value
 * @returns {Object.<string, string>}
 */


function parseStyle(value) {
  /** @type {Object.<string, string>} */
  var result = {};

  try {
    style_to_object_default()(value, iterator);
  } catch (_unused) {// Silent.
  }

  return result;
  /**
   * @param {string} name
   * @param {string} v
   */

  function iterator(name, v) {
    var k = name.slice(0, 4) === '-ms-' ? "ms-".concat(name.slice(4)) : name;
    result[k.replace(/-([a-z])/g, styleReplacer)] = v;
  }
}
/**
 * @param {unknown} _
 * @param {string} $1
 */


function styleReplacer(_, $1) {
  return $1.toUpperCase();
}
/**
 * @param {Position|{start: {line: null, column: null, offset: null}, end: {line: null, column: null, offset: null}}} pos
 * @returns {string}
 */


function flattenPosition(pos) {
  return [pos.start.line, ':', pos.start.column, '-', pos.end.line, ':', pos.end.column].map(d => String(d)).join('');
}
;// CONCATENATED MODULE: ./node_modules/react-markdown/lib/react-markdown.js
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('react').ReactElement<{}>} ReactElement
 * @typedef {import('unified').PluggableList} PluggableList
 * @typedef {import('hast').Root} Root
 * @typedef {import('./rehype-filter.js').Options} FilterOptions
 * @typedef {import('./ast-to-react.js').Options} TransformOptions
 *
 * @typedef CoreOptions
 * @property {string} children
 *
 * @typedef PluginOptions
 * @property {PluggableList} [plugins=[]] **deprecated**: use `remarkPlugins` instead
 * @property {PluggableList} [remarkPlugins=[]]
 * @property {PluggableList} [rehypePlugins=[]]
 *
 * @typedef LayoutOptions
 * @property {string} [className]
 *
 * @typedef {CoreOptions & PluginOptions & LayoutOptions & FilterOptions & TransformOptions} ReactMarkdownOptions
 *
 * @typedef Deprecation
 * @property {string} id
 * @property {string} [to]
 */










var react_markdown_own = {}.hasOwnProperty;
var changelog = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md';
/** @type {Object.<string, Deprecation>} */

var deprecated = {
  renderers: {
    to: 'components',
    id: 'change-renderers-to-components'
  },
  astPlugins: {
    id: 'remove-buggy-html-in-markdown-parser'
  },
  allowDangerousHtml: {
    id: 'remove-buggy-html-in-markdown-parser'
  },
  escapeHtml: {
    id: 'remove-buggy-html-in-markdown-parser'
  },
  source: {
    to: 'children',
    id: 'change-source-to-children'
  },
  allowNode: {
    to: 'allowElement',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes'
  },
  allowedTypes: {
    to: 'allowedElements',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes'
  },
  disallowedTypes: {
    to: 'disallowedElements',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes'
  },
  includeNodeIndex: {
    to: 'includeElementIndex',
    id: 'change-includenodeindex-to-includeelementindex'
  }
};
/**
 * @param {ReactMarkdownOptions} options
 * @returns {ReactElement}
 */

function ReactMarkdown(options) {
  for (var key in deprecated) {
    if (react_markdown_own.call(deprecated, key) && react_markdown_own.call(options, key)) {
      var deprecation = deprecated[key];
      console.warn("[react-markdown] Warning: please ".concat(deprecation.to ? "use `".concat(deprecation.to, "` instead of") : 'remove', " `").concat(key, "` (see <").concat(changelog, "#").concat(deprecation.id, "> for more info)"));
      delete deprecated[key];
    }
  }

  var processor = unified().use(remark_parse) // TODO: deprecate `plugins` in v8.0.0.
  .use(options.remarkPlugins || options.plugins || []).use(remark_rehype, {
    allowDangerousHtml: true
  }).use(options.rehypePlugins || []).use(rehypeFilter, options);
  var file = new VFile();

  if (typeof options.children === 'string') {
    file.value = options.children;
  } else if (options.children !== undefined && options.children !== null) {
    console.warn("[react-markdown] Warning: please pass a string as `children` (not: `".concat(options.children, "`)"));
  }

  var hastNode = processor.runSync(processor.parse(file), file);

  if (hastNode.type !== 'root') {
    throw new TypeError('Expected a `root` node');
  }
  /** @type {ReactElement} */


  var result = react.createElement(react.Fragment, {}, childrenToReact({
    options,
    schema: property_information_html,
    listDepth: 0
  }, hastNode));

  if (options.className) {
    result = react.createElement('div', {
      className: options.className
    }, result);
  }

  return result;
}
ReactMarkdown.defaultProps = {
  transformLinkUri: uriTransformer
};
ReactMarkdown.propTypes = {
  // Core options:
  children: (prop_types_default()).string,
  // Layout options:
  className: (prop_types_default()).string,
  // Filter options:
  allowElement: (prop_types_default()).func,
  allowedElements: prop_types_default().arrayOf((prop_types_default()).string),
  disallowedElements: prop_types_default().arrayOf((prop_types_default()).string),
  unwrapDisallowed: (prop_types_default()).bool,
  // Plugin options:
  remarkPlugins: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).func, prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).func]))])),
  rehypePlugins: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).func, prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).func]))])),
  // Transform options:
  sourcePos: (prop_types_default()).bool,
  rawSourcePos: (prop_types_default()).bool,
  skipHtml: (prop_types_default()).bool,
  includeElementIndex: (prop_types_default()).bool,
  transformLinkUri: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).bool]),
  linkTarget: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).string]),
  transformImageUri: (prop_types_default()).func,
  components: (prop_types_default()).object
};
;// CONCATENATED MODULE: ./node_modules/react-markdown/index.js
/**
 * @typedef {import('./lib/react-markdown.js').ReactMarkdownOptions} Options
 * @typedef {import('./lib/ast-to-react.js').Components} Components
 */


/* harmony default export */ var react_markdown = (ReactMarkdown);

/***/ }),

/***/ 72303:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parse = __webpack_require__(26650);
/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */


function StyleToObject(style, iterator) {
  var output = null;

  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

module.exports = StyleToObject;

/***/ }),

/***/ 66475:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

}]);
//# sourceMappingURL=7724-268b71cfb92f9283ad14.js.map