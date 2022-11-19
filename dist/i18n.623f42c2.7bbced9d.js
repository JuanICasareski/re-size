// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/i18n.623f42c2.js":[function(require,module,exports) {
var define;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _indexBcc5be = require("./index.bcc5be65.js");

var _G$, _G$2, _G$4, _G$5, _G$6, _G$7;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
* shared v9.2.2
* (c) 2022 kazuya kawaguchi
* Released under the MIT License.
*/
var ie = typeof window != "undefined",
    Bt = typeof Symbol == "function" && _typeof(Symbol.toStringTag) == "symbol",
    j = function j(e) {
  return Bt ? Symbol(e) : e;
},
    Kt = function Kt(e, t, n) {
  return Xt({
    l: e,
    k: t,
    s: n
  });
},
    Xt = function Xt(e) {
  return JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
},
    S = function S(e) {
  return typeof e == "number" && isFinite(e);
},
    Yt = function Yt(e) {
  return Ne(e) === "[object Date]";
},
    ae = function ae(e) {
  return Ne(e) === "[object RegExp]";
},
    re = function re(e) {
  return I(e) && Object.keys(e).length === 0;
};

function zt(e, t) {
  typeof console != "undefined" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}

var w = Object.assign;

function Ae(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

var Jt = Object.prototype.hasOwnProperty;

function be(e, t) {
  return Jt.call(e, t);
}

var C = Array.isArray,
    v = function v(e) {
  return typeof e == "function";
},
    _ = function _(e) {
  return typeof e == "string";
},
    h = function h(e) {
  return typeof e == "boolean";
},
    y = function y(e) {
  return e !== null && _typeof(e) == "object";
},
    ze = Object.prototype.toString,
    Ne = function Ne(e) {
  return ze.call(e);
},
    I = function I(e) {
  return Ne(e) === "[object Object]";
},
    Qt = function Qt(e) {
  return e == null ? "" : C(e) || I(e) && e.toString === ze ? JSON.stringify(e, null, 2) : String(e);
};
/*!
* message-compiler v9.2.2
* (c) 2022 kazuya kawaguchi
* Released under the MIT License.
*/


var Je = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15
};

function Qe(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var a = n.domain,
      r = n.messages,
      s = n.args,
      l = e,
      i = new SyntaxError(String(l));
  return i.code = e, t && (i.location = t), i.domain = a, i;
}
/*!
* devtools-if v9.2.2
* (c) 2022 kazuya kawaguchi
* Released under the MIT License.
*/


var qt = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
* core-base v9.2.2
* (c) 2022 kazuya kawaguchi
* Released under the MIT License.
*/

var G = [];
G[0] = (_G$ = {
  w: [0],
  i: [3, 0]
}, _defineProperty(_G$, "[", [4]), _defineProperty(_G$, "o", [7]), _G$);
G[1] = (_G$2 = {
  w: [1]
}, _defineProperty(_G$2, ".", [2]), _defineProperty(_G$2, "[", [4]), _defineProperty(_G$2, "o", [7]), _G$2);
G[2] = _defineProperty({
  w: [2],
  i: [3, 0]
}, 0, [3, 0]);
G[3] = (_G$4 = {
  i: [3, 0]
}, _defineProperty(_G$4, 0, [3, 0]), _defineProperty(_G$4, "w", [1, 1]), _defineProperty(_G$4, ".", [2, 1]), _defineProperty(_G$4, "[", [4, 1]), _defineProperty(_G$4, "o", [7, 1]), _G$4);
G[4] = (_G$5 = {}, _defineProperty(_G$5, "'", [5, 0]), _defineProperty(_G$5, '"', [6, 0]), _defineProperty(_G$5, "[", [4, 2]), _defineProperty(_G$5, "]", [1, 3]), _defineProperty(_G$5, "o", 8), _defineProperty(_G$5, "l", [4, 0]), _G$5);
G[5] = (_G$6 = {}, _defineProperty(_G$6, "'", [4, 0]), _defineProperty(_G$6, "o", 8), _defineProperty(_G$6, "l", [5, 0]), _G$6);
G[6] = (_G$7 = {}, _defineProperty(_G$7, '"', [4, 0]), _defineProperty(_G$7, "o", 8), _defineProperty(_G$7, "l", [6, 0]), _G$7);
var Zt = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function en(e) {
  return Zt.test(e);
}

function tn(e) {
  var t = e.charCodeAt(0),
      n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}

function nn(e) {
  if (e == null) return "o";

  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;

    case 95:
    case 36:
    case 45:
      return "i";

    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }

  return "i";
}

function an(e) {
  var t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : en(t) ? tn(t) : "*" + t;
}

function rn(e) {
  var t = [];
  var n = -1,
      a = 0,
      r = 0,
      s,
      l,
      i,
      c,
      m,
      d,
      E;
  var g = [];
  g[0] = function () {
    l === void 0 ? l = i : l += i;
  }, g[1] = function () {
    l !== void 0 && (t.push(l), l = void 0);
  }, g[2] = function () {
    g[0](), r++;
  }, g[3] = function () {
    if (r > 0) r--, a = 4, g[0]();else {
      if (r = 0, l === void 0 || (l = an(l), l === !1)) return !1;
      g[1]();
    }
  };

  function b() {
    var T = e[n + 1];
    if (a === 5 && T === "'" || a === 6 && T === '"') return n++, i = "\\" + T, g[0](), !0;
  }

  for (; a !== null;) {
    if (n++, s = e[n], !(s === "\\" && b())) {
      if (c = nn(s), E = G[a], m = E[c] || E.l || 8, m === 8 || (a = m[0], m[1] !== void 0 && (d = g[m[1]], d && (i = s, d() === !1)))) return;
      if (a === 7) return t;
    }
  }
}

var he = new Map();

function ln(e, t) {
  return y(e) ? e[t] : null;
}

function sn(e, t) {
  if (!y(e)) return null;
  var n = he.get(t);
  if (n || (n = rn(t), n && he.set(t, n)), !n) return null;
  var a = n.length;
  var r = e,
      s = 0;

  for (; s < a;) {
    var l = r[n[s]];
    if (l === void 0) return null;
    r = l, s++;
  }

  return r;
}

var on = function on(e) {
  return e;
},
    cn = function cn(e) {
  return "";
},
    un = "text",
    mn = function mn(e) {
  return e.length === 0 ? "" : e.join("");
},
    fn = Qt;

function Ce(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}

function _n(e) {
  var t = S(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (S(e.named.count) || S(e.named.n)) ? S(e.named.count) ? e.named.count : S(e.named.n) ? e.named.n : t : t;
}

function gn(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}

function dn() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var t = e.locale,
      n = _n(e),
      a = y(e.pluralRules) && _(t) && v(e.pluralRules[t]) ? e.pluralRules[t] : Ce,
      r = y(e.pluralRules) && _(t) && v(e.pluralRules[t]) ? Ce : void 0,
      s = function s(N) {
    return N[a(n, N.length, r)];
  },
      l = e.list || [],
      i = function i(N) {
    return l[N];
  },
      c = e.named || {};

  S(e.pluralIndex) && gn(n, c);

  var m = function m(N) {
    return c[N];
  };

  function d(N) {
    var p = v(e.messages) ? e.messages(N) : y(e.messages) ? e.messages[N] : !1;
    return p || (e.parent ? e.parent.message(N) : cn);
  }

  var E = function E(N) {
    return e.modifiers ? e.modifiers[N] : on;
  },
      g = I(e.processor) && v(e.processor.normalize) ? e.processor.normalize : mn,
      b = I(e.processor) && v(e.processor.interpolate) ? e.processor.interpolate : fn,
      T = I(e.processor) && _(e.processor.type) ? e.processor.type : un,
      F = {
    list: i,
    named: m,
    plural: s,
    linked: function linked(N) {
      for (var _len = arguments.length, p = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        p[_key - 1] = arguments[_key];
      }

      var R = p[0],
          L = p[1];
      var f = "text",
          A = "";
      p.length === 1 ? y(R) ? (A = R.modifier || A, f = R.type || f) : _(R) && (A = R || A) : p.length === 2 && (_(R) && (A = R || A), _(L) && (f = L || f));
      var M = d(N)(F);
      return f === "vnode" && C(M) && A && (M = M[0]), A ? E(A)(M, f) : M;
    },
    message: d,
    type: T,
    interpolate: b,
    normalize: g
  };

  return F;
}

var En = null;
qt.FunctionTranslate;

function bn(e) {
  return function (t) {
    return En;
  };
}

var Nn = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
};

function Tn(e, t, n) {
  return _toConsumableArray(new Set([n].concat(_toConsumableArray(C(t) ? t : y(t) ? Object.keys(t) : _(t) ? [t] : [n]))));
}

function qe(e, t, n) {
  var a = _(n) ? n : Te,
      r = e;
  r.__localeChainCache || (r.__localeChainCache = new Map());

  var s = r.__localeChainCache.get(a);

  if (!s) {
    s = [];
    var l = [n];

    for (; C(l);) {
      l = Re(s, l, t);
    }

    var i = C(t) || !I(t) ? t : t.default ? t.default : null;
    l = _(i) ? [i] : i, C(l) && Re(s, l, !1), r.__localeChainCache.set(a, s);
  }

  return s;
}

function Re(e, t, n) {
  var a = !0;

  for (var r = 0; r < t.length && h(a); r++) {
    var s = t[r];
    _(s) && (a = In(e, t[r], n));
  }

  return a;
}

function In(e, t, n) {
  var a;
  var r = t.split("-");

  do {
    var s = r.join("-");
    a = Ln(e, s, n), r.splice(-1, 1);
  } while (r.length && a === !0);

  return a;
}

function Ln(e, t, n) {
  var a = !1;

  if (!e.includes(t) && (a = !0, t)) {
    a = t[t.length - 1] !== "!";
    var r = t.replace(/!/g, "");
    e.push(r), (C(n) || I(n)) && n[r] && (a = n[r]);
  }

  return a;
}

var On = "9.2.2",
    le = -1,
    Te = "en-US",
    De = "",
    Se = function Se(e) {
  return "".concat(e.charAt(0).toLocaleUpperCase()).concat(e.substr(1));
};

function pn() {
  return {
    upper: function upper(e, t) {
      return t === "text" && _(e) ? e.toUpperCase() : t === "vnode" && y(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e;
    },
    lower: function lower(e, t) {
      return t === "text" && _(e) ? e.toLowerCase() : t === "vnode" && y(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e;
    },
    capitalize: function capitalize(e, t) {
      return t === "text" && _(e) ? Se(e) : t === "vnode" && y(e) && "__v_isVNode" in e ? Se(e.children) : e;
    }
  };
}

var yn, Ze;

function Fn(e) {
  Ze = e;
}

var et;

function An(e) {
  et = e;
}

var ve = 0;

function hn() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var t = _(e.version) ? e.version : On,
      n = _(e.locale) ? e.locale : Te,
      a = C(e.fallbackLocale) || I(e.fallbackLocale) || _(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n,
      r = I(e.messages) ? e.messages : _defineProperty({}, n, {}),
      s = I(e.datetimeFormats) ? e.datetimeFormats : _defineProperty({}, n, {}),
      l = I(e.numberFormats) ? e.numberFormats : _defineProperty({}, n, {}),
      i = w({}, e.modifiers || {}, pn()),
      c = e.pluralRules || {},
      m = v(e.missing) ? e.missing : null,
      d = h(e.missingWarn) || ae(e.missingWarn) ? e.missingWarn : !0,
      E = h(e.fallbackWarn) || ae(e.fallbackWarn) ? e.fallbackWarn : !0,
      g = !!e.fallbackFormat,
      b = !!e.unresolving,
      T = v(e.postTranslation) ? e.postTranslation : null,
      O = I(e.processor) ? e.processor : null,
      F = h(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
      N = !!e.escapeParameter,
      p = v(e.messageCompiler) ? e.messageCompiler : yn,
      R = v(e.messageResolver) ? e.messageResolver : Ze || ln,
      L = v(e.localeFallbacker) ? e.localeFallbacker : et || Tn,
      f = y(e.fallbackContext) ? e.fallbackContext : void 0,
      A = v(e.onWarn) ? e.onWarn : zt,
      M = e,
      X = y(M.__datetimeFormatters) ? M.__datetimeFormatters : new Map(),
      Y = y(M.__numberFormatters) ? M.__numberFormatters : new Map(),
      z = y(M.__meta) ? M.__meta : {};
  ve++;
  var V = {
    version: t,
    cid: ve,
    locale: n,
    fallbackLocale: a,
    messages: r,
    modifiers: i,
    pluralRules: c,
    missing: m,
    missingWarn: d,
    fallbackWarn: E,
    fallbackFormat: g,
    unresolving: b,
    postTranslation: T,
    processor: O,
    warnHtmlMessage: F,
    escapeParameter: N,
    messageCompiler: p,
    messageResolver: R,
    localeFallbacker: L,
    fallbackContext: f,
    onWarn: A,
    __meta: z
  };
  return V.datetimeFormats = s, V.numberFormats = l, V.__datetimeFormatters = X, V.__numberFormatters = Y, V;
}

function Ie(e, t, n, a, r) {
  var s = e.missing,
      l = e.onWarn;

  if (s !== null) {
    var i = s(e, n, t, r);
    return _(i) ? i : t;
  } else return t;
}

function Z(e, t, n) {
  var a = e;
  a.__localeChainCache = new Map(), e.localeFallbacker(e, n, t);
}

var tt = Je.__EXTEND_POINT__;

var oe = function oe() {
  return ++tt;
},
    B = {
  INVALID_ARGUMENT: tt,
  INVALID_DATE_ARGUMENT: oe(),
  INVALID_ISO_DATE_ARGUMENT: oe(),
  __EXTEND_POINT__: oe()
};

function K(e) {
  return Qe(e, null, void 0);
}

var Me = function Me() {
  return "";
},
    $ = function $(e) {
  return v(e);
};

function ke(e) {
  for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    t[_key2 - 1] = arguments[_key2];
  }

  var n = e.fallbackFormat,
      a = e.postTranslation,
      r = e.unresolving,
      s = e.messageCompiler,
      l = e.fallbackLocale,
      i = e.messages,
      _ue = ue.apply(void 0, t),
      _ue2 = _slicedToArray(_ue, 2),
      c = _ue2[0],
      m = _ue2[1],
      d = h(m.missingWarn) ? m.missingWarn : e.missingWarn,
      E = h(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn,
      g = h(m.escapeParameter) ? m.escapeParameter : e.escapeParameter,
      b = !!m.resolvedMessage,
      T = _(m.default) || h(m.default) ? h(m.default) ? s ? c : function () {
    return c;
  } : m.default : n ? s ? c : function () {
    return c;
  } : "",
      O = n || T !== "",
      F = _(m.locale) ? m.locale : e.locale;

  g && Cn(m);

  var _ref4 = b ? [c, F, i[F] || {}] : nt(e, c, F, l, E, d),
      _ref5 = _slicedToArray(_ref4, 3),
      N = _ref5[0],
      p = _ref5[1],
      R = _ref5[2],
      L = N,
      f = c;

  if (!b && !(_(L) || $(L)) && O && (L = T, f = L), !b && (!(_(L) || $(L)) || !_(p))) return r ? le : c;
  var A = !1;

  var M = function M() {
    A = !0;
  },
      X = $(L) ? L : at(e, c, p, L, f, M);

  if (A) return L;
  var Y = Sn(e, p, R, m),
      z = dn(Y),
      V = Rn(e, X, z);
  return a ? a(V, c) : V;
}

function Cn(e) {
  C(e.list) ? e.list = e.list.map(function (t) {
    return _(t) ? Ae(t) : t;
  }) : y(e.named) && Object.keys(e.named).forEach(function (t) {
    _(e.named[t]) && (e.named[t] = Ae(e.named[t]));
  });
}

function nt(e, t, n, a, r, s) {
  var l = e.messages,
      i = e.onWarn,
      c = e.messageResolver,
      m = e.localeFallbacker,
      d = m(e, a, n);
  var E = {},
      g,
      b = null;
  var T = "translate";

  for (var O = 0; O < d.length && (g = d[O], E = l[g] || {}, (b = c(E, t)) === null && (b = E[t]), !(_(b) || v(b))); O++) {
    var F = Ie(e, t, g, s, T);
    F !== t && (b = F);
  }

  return [b, g, E];
}

function at(e, t, n, a, r, s) {
  var l = e.messageCompiler,
      i = e.warnHtmlMessage;

  if ($(a)) {
    var m = a;
    return m.locale = m.locale || n, m.key = m.key || t, m;
  }

  if (l == null) {
    var _m = function _m() {
      return a;
    };

    return _m.locale = n, _m.key = t, _m;
  }

  var c = l(a, Dn(e, n, r, a, i, s));
  return c.locale = n, c.key = t, c.source = a, c;
}

function Rn(e, t, n) {
  return t(n);
}

function ue() {
  for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    e[_key3] = arguments[_key3];
  }

  var t = e[0],
      n = e[1],
      a = e[2],
      r = {};
  if (!_(t) && !S(t) && !$(t)) throw K(B.INVALID_ARGUMENT);
  var s = S(t) ? String(t) : ($(t), t);
  return S(n) ? r.plural = n : _(n) ? r.default = n : I(n) && !re(n) ? r.named = n : C(n) && (r.list = n), S(a) ? r.plural = a : _(a) ? r.default = a : I(a) && w(r, a), [s, r];
}

function Dn(e, t, n, a, r, s) {
  return {
    warnHtmlMessage: r,
    onError: function onError(l) {
      throw s && s(l), l;
    },
    onCacheKey: function onCacheKey(l) {
      return Kt(t, n, l);
    }
  };
}

function Sn(e, t, n, a) {
  var r = e.modifiers,
      s = e.pluralRules,
      l = e.messageResolver,
      i = e.fallbackLocale,
      c = e.fallbackWarn,
      m = e.missingWarn,
      d = e.fallbackContext,
      g = {
    locale: t,
    modifiers: r,
    pluralRules: s,
    messages: function messages(b) {
      var T = l(n, b);

      if (T == null && d) {
        var _nt = nt(d, b, t, i, c, m),
            _nt2 = _slicedToArray(_nt, 3),
            O = _nt2[2];

        T = l(O, b);
      }

      if (_(T)) {
        var _O = !1;

        var N = at(e, b, t, T, b, function () {
          _O = !0;
        });
        return _O ? Me : N;
      } else return $(T) ? T : Me;
    }
  };
  return e.processor && (g.processor = e.processor), a.list && (g.list = a.list), a.named && (g.named = a.named), S(a.plural) && (g.pluralIndex = a.plural), g;
}

function Pe(e) {
  for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    t[_key4 - 1] = arguments[_key4];
  }

  var n = e.datetimeFormats,
      a = e.unresolving,
      r = e.fallbackLocale,
      s = e.onWarn,
      l = e.localeFallbacker,
      i = e.__datetimeFormatters,
      _me = me.apply(void 0, t),
      _me2 = _slicedToArray(_me, 4),
      c = _me2[0],
      m = _me2[1],
      d = _me2[2],
      E = _me2[3],
      g = h(d.missingWarn) ? d.missingWarn : e.missingWarn;

  h(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  var b = !!d.part,
      T = _(d.locale) ? d.locale : e.locale,
      O = l(e, r, T);
  if (!_(c) || c === "") return new Intl.DateTimeFormat(T, E).format(m);
  var F = {},
      N,
      p = null;
  var R = "datetime format";

  for (var A = 0; A < O.length && (N = O[A], F = n[N] || {}, p = F[c], !I(p)); A++) {
    Ie(e, c, N, g, R);
  }

  if (!I(p) || !_(N)) return a ? le : c;
  var L = "".concat(N, "__").concat(c);
  re(E) || (L = "".concat(L, "__").concat(JSON.stringify(E)));
  var f = i.get(L);
  return f || (f = new Intl.DateTimeFormat(N, w({}, p, E)), i.set(L, f)), b ? f.formatToParts(m) : f.format(m);
}

var rt = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function me() {
  for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    e[_key5] = arguments[_key5];
  }

  var t = e[0],
      n = e[1],
      a = e[2],
      r = e[3],
      s = {};
  var l = {},
      i;

  if (_(t)) {
    var c = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!c) throw K(B.INVALID_ISO_DATE_ARGUMENT);
    var m = c[3] ? c[3].trim().startsWith("T") ? "".concat(c[1].trim()).concat(c[3].trim()) : "".concat(c[1].trim(), "T").concat(c[3].trim()) : c[1].trim();
    i = new Date(m);

    try {
      i.toISOString();
    } catch (_unused) {
      throw K(B.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Yt(t)) {
    if (isNaN(t.getTime())) throw K(B.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (S(t)) i = t;else throw K(B.INVALID_ARGUMENT);

  return _(n) ? s.key = n : I(n) && Object.keys(n).forEach(function (c) {
    rt.includes(c) ? l[c] = n[c] : s[c] = n[c];
  }), _(a) ? s.locale = a : I(a) && (l = a), I(r) && (l = r), [s.key || "", i, s, l];
}

function we(e, t, n) {
  var a = e;

  for (var r in n) {
    var s = "".concat(t, "__").concat(r);
    !a.__datetimeFormatters.has(s) || a.__datetimeFormatters.delete(s);
  }
}

function Ue(e) {
  for (var _len6 = arguments.length, t = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    t[_key6 - 1] = arguments[_key6];
  }

  var n = e.numberFormats,
      a = e.unresolving,
      r = e.fallbackLocale,
      s = e.onWarn,
      l = e.localeFallbacker,
      i = e.__numberFormatters,
      _fe = fe.apply(void 0, t),
      _fe2 = _slicedToArray(_fe, 4),
      c = _fe2[0],
      m = _fe2[1],
      d = _fe2[2],
      E = _fe2[3],
      g = h(d.missingWarn) ? d.missingWarn : e.missingWarn;

  h(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  var b = !!d.part,
      T = _(d.locale) ? d.locale : e.locale,
      O = l(e, r, T);
  if (!_(c) || c === "") return new Intl.NumberFormat(T, E).format(m);
  var F = {},
      N,
      p = null;
  var R = "number format";

  for (var A = 0; A < O.length && (N = O[A], F = n[N] || {}, p = F[c], !I(p)); A++) {
    Ie(e, c, N, g, R);
  }

  if (!I(p) || !_(N)) return a ? le : c;
  var L = "".concat(N, "__").concat(c);
  re(E) || (L = "".concat(L, "__").concat(JSON.stringify(E)));
  var f = i.get(L);
  return f || (f = new Intl.NumberFormat(N, w({}, p, E)), i.set(L, f)), b ? f.formatToParts(m) : f.format(m);
}

var lt = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function fe() {
  for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    e[_key7] = arguments[_key7];
  }

  var t = e[0],
      n = e[1],
      a = e[2],
      r = e[3],
      s = {};
  var l = {};
  if (!S(t)) throw K(B.INVALID_ARGUMENT);
  var i = t;
  return _(n) ? s.key = n : I(n) && Object.keys(n).forEach(function (c) {
    lt.includes(c) ? l[c] = n[c] : s[c] = n[c];
  }), _(a) ? s.locale = a : I(a) && (l = a), I(r) && (l = r), [s.key || "", i, s, l];
}

function We(e, t, n) {
  var a = e;

  for (var r in n) {
    var s = "".concat(t, "__").concat(r);
    !a.__numberFormatters.has(s) || a.__numberFormatters.delete(s);
  }
}
/*!
* vue-i18n v9.2.2
* (c) 2022 kazuya kawaguchi
* Released under the MIT License.
*/


var vn = "9.2.2";
Nn.__EXTEND_POINT__;
var st = Je.__EXTEND_POINT__;

var P = function P() {
  return ++st;
},
    U = {
  UNEXPECTED_RETURN_TYPE: st,
  INVALID_ARGUMENT: P(),
  MUST_BE_CALL_SETUP_TOP: P(),
  NOT_INSLALLED: P(),
  NOT_AVAILABLE_IN_LEGACY_MODE: P(),
  REQUIRED_VALUE: P(),
  INVALID_VALUE: P(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: P(),
  NOT_INSLALLED_WITH_PROVIDE: P(),
  UNEXPECTED_ERROR: P(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: P(),
  BRIDGE_SUPPORT_VUE_2_ONLY: P(),
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: P(),
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: P(),
  __EXTEND_POINT__: P()
};

function W(e) {
  return Qe(e, null, void 0);
}

var _e = j("__transrateVNode"),
    ge = j("__datetimeParts"),
    de = j("__numberParts"),
    Mn = j("__setPluralRules");

j("__intlifyMeta");
var kn = j("__injectWithOption");

function Ee(e) {
  if (!y(e)) return e;

  for (var t in e) {
    if (!!be(e, t)) if (!t.includes(".")) y(e[t]) && Ee(e[t]);else {
      var n = t.split("."),
          a = n.length - 1;
      var r = e;

      for (var s = 0; s < a; s++) {
        n[s] in r || (r[n[s]] = {}), r = r[n[s]];
      }

      r[n[a]] = e[t], delete e[t], y(r[n[a]]) && Ee(r[n[a]]);
    }
  }

  return e;
}

function ot(e, t) {
  var n = t.messages,
      a = t.__i18n,
      r = t.messageResolver,
      s = t.flatJson,
      l = I(n) ? n : C(a) ? {} : _defineProperty({}, e, {});
  if (C(a) && a.forEach(function (i) {
    if ("locale" in i && "resource" in i) {
      var c = i.locale,
          m = i.resource;
      c ? (l[c] = l[c] || {}, ee(m, l[c])) : ee(m, l);
    } else _(i) && ee(JSON.parse(i), l);
  }), r == null && s) for (var i in l) {
    be(l, i) && Ee(l[i]);
  }
  return l;
}

var ne = function ne(e) {
  return !y(e) || C(e);
};

function ee(e, t) {
  if (ne(e) || ne(t)) throw W(U.INVALID_VALUE);

  for (var n in e) {
    be(e, n) && (ne(e[n]) || ne(t[n]) ? t[n] = e[n] : ee(e[n], t[n]));
  }
}

function Pn(e) {
  return e.type;
}

function wn(e, t, n) {
  var a = y(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (a = ot(e.locale.value, {
    messages: a,
    __i18n: n.__i18nGlobal
  }));
  var r = Object.keys(a);
  r.length && r.forEach(function (s) {
    e.mergeLocaleMessage(s, a[s]);
  });
  {
    if (y(t.datetimeFormats)) {
      var s = Object.keys(t.datetimeFormats);
      s.length && s.forEach(function (l) {
        e.mergeDateTimeFormat(l, t.datetimeFormats[l]);
      });
    }

    if (y(t.numberFormats)) {
      var _s2 = Object.keys(t.numberFormats);

      _s2.length && _s2.forEach(function (l) {
        e.mergeNumberFormat(l, t.numberFormats[l]);
      });
    }
  }
}

function Ve(e) {
  return (0, _indexBcc5be.d)(_indexBcc5be.T, null, e, 0);
}

var xe = 0;

function je(e) {
  return function (t, n, a, r) {
    return e(n, a, (0, _indexBcc5be.g)() || void 0, r);
  };
}

function ct() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var t = arguments.length > 1 ? arguments[1] : undefined;
  var n = e.__root,
      a = n === void 0;
  var r = h(e.inheritLocale) ? e.inheritLocale : !0;
  var s = (0, _indexBcc5be.r)(n && r ? n.locale.value : _(e.locale) ? e.locale : Te),
      l = (0, _indexBcc5be.r)(n && r ? n.fallbackLocale.value : _(e.fallbackLocale) || C(e.fallbackLocale) || I(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s.value),
      i = (0, _indexBcc5be.r)(ot(s.value, e)),
      c = (0, _indexBcc5be.r)(I(e.datetimeFormats) ? e.datetimeFormats : _defineProperty({}, s.value, {})),
      m = (0, _indexBcc5be.r)(I(e.numberFormats) ? e.numberFormats : _defineProperty({}, s.value, {}));
  var d = n ? n.missingWarn : h(e.missingWarn) || ae(e.missingWarn) ? e.missingWarn : !0,
      E = n ? n.fallbackWarn : h(e.fallbackWarn) || ae(e.fallbackWarn) ? e.fallbackWarn : !0,
      g = n ? n.fallbackRoot : h(e.fallbackRoot) ? e.fallbackRoot : !0,
      b = !!e.fallbackFormat,
      T = v(e.missing) ? e.missing : null,
      O = v(e.missing) ? je(e.missing) : null,
      F = v(e.postTranslation) ? e.postTranslation : null,
      N = n ? n.warnHtmlMessage : h(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
      p = !!e.escapeParameter;
  var R = n ? n.modifiers : I(e.modifiers) ? e.modifiers : {};
  var L = e.pluralRules || n && n.pluralRules,
      f;
  f = function () {
    var o = {
      version: vn,
      locale: s.value,
      fallbackLocale: l.value,
      messages: i.value,
      modifiers: R,
      pluralRules: L,
      missing: O === null ? void 0 : O,
      missingWarn: d,
      fallbackWarn: E,
      fallbackFormat: b,
      unresolving: !0,
      postTranslation: F === null ? void 0 : F,
      warnHtmlMessage: N,
      escapeParameter: p,
      messageResolver: e.messageResolver,
      __meta: {
        framework: "vue"
      }
    };
    return o.datetimeFormats = c.value, o.numberFormats = m.value, o.__datetimeFormatters = I(f) ? f.__datetimeFormatters : void 0, o.__numberFormatters = I(f) ? f.__numberFormatters : void 0, hn(o);
  }(), Z(f, s.value, l.value);

  function M() {
    return [s.value, l.value, i.value, c.value, m.value];
  }

  var X = (0, _indexBcc5be.c)({
    get: function get() {
      return s.value;
    },
    set: function set(o) {
      s.value = o, f.locale = s.value;
    }
  }),
      Y = (0, _indexBcc5be.c)({
    get: function get() {
      return l.value;
    },
    set: function set(o) {
      l.value = o, f.fallbackLocale = l.value, Z(f, s.value, o);
    }
  }),
      z = (0, _indexBcc5be.c)(function () {
    return i.value;
  }),
      V = (0, _indexBcc5be.c)(function () {
    return c.value;
  }),
      pe = (0, _indexBcc5be.c)(function () {
    return m.value;
  });

  function mt() {
    return v(F) ? F : null;
  }

  function ft(o) {
    F = o, f.postTranslation = o;
  }

  function _t() {
    return T;
  }

  function gt(o) {
    o !== null && (O = je(o)), T = o, f.missing = O;
  }

  var H = function H(o, u, x, k, se, te) {
    M();
    var J;

    if (J = o(f), S(J) && J === le) {
      var _u = u(),
          _u2 = _slicedToArray(_u, 2),
          Pt = _u2[0],
          na = _u2[1];

      return n && g ? k(n) : se(Pt);
    } else {
      if (te(J)) return J;
      throw W(U.UNEXPECTED_RETURN_TYPE);
    }
  };

  function ye() {
    for (var _len8 = arguments.length, o = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      o[_key8] = arguments[_key8];
    }

    return H(function (u) {
      return Reflect.apply(ke, null, [u].concat(o));
    }, function () {
      return ue.apply(void 0, o);
    }, "translate", function (u) {
      return Reflect.apply(u.t, u, [].concat(o));
    }, function (u) {
      return u;
    }, function (u) {
      return _(u);
    });
  }

  function dt() {
    for (var _len9 = arguments.length, o = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      o[_key9] = arguments[_key9];
    }

    var u = o[0],
        x = o[1],
        k = o[2];
    if (k && !y(k)) throw W(U.INVALID_ARGUMENT);
    return ye(u, x, w({
      resolvedMessage: !0
    }, k || {}));
  }

  function Et() {
    for (var _len10 = arguments.length, o = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      o[_key10] = arguments[_key10];
    }

    return H(function (u) {
      return Reflect.apply(Pe, null, [u].concat(o));
    }, function () {
      return me.apply(void 0, o);
    }, "datetime format", function (u) {
      return Reflect.apply(u.d, u, [].concat(o));
    }, function () {
      return De;
    }, function (u) {
      return _(u);
    });
  }

  function bt() {
    for (var _len11 = arguments.length, o = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      o[_key11] = arguments[_key11];
    }

    return H(function (u) {
      return Reflect.apply(Ue, null, [u].concat(o));
    }, function () {
      return fe.apply(void 0, o);
    }, "number format", function (u) {
      return Reflect.apply(u.n, u, [].concat(o));
    }, function () {
      return De;
    }, function (u) {
      return _(u);
    });
  }

  function Nt(o) {
    return o.map(function (u) {
      return _(u) || S(u) || h(u) ? Ve(String(u)) : u;
    });
  }

  var Tt = {
    normalize: Nt,
    interpolate: function interpolate(o) {
      return o;
    },
    type: "vnode"
  };

  function It() {
    for (var _len12 = arguments.length, o = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      o[_key12] = arguments[_key12];
    }

    return H(function (u) {
      var x;
      var k = u;

      try {
        k.processor = Tt, x = Reflect.apply(ke, null, [k].concat(o));
      } finally {
        k.processor = null;
      }

      return x;
    }, function () {
      return ue.apply(void 0, o);
    }, "translate", function (u) {
      return u[_e].apply(u, o);
    }, function (u) {
      return [Ve(u)];
    }, function (u) {
      return C(u);
    });
  }

  function Lt() {
    for (var _len13 = arguments.length, o = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
      o[_key13] = arguments[_key13];
    }

    return H(function (u) {
      return Reflect.apply(Ue, null, [u].concat(o));
    }, function () {
      return fe.apply(void 0, o);
    }, "number format", function (u) {
      return u[de].apply(u, o);
    }, function () {
      return [];
    }, function (u) {
      return _(u) || C(u);
    });
  }

  function Ot() {
    for (var _len14 = arguments.length, o = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
      o[_key14] = arguments[_key14];
    }

    return H(function (u) {
      return Reflect.apply(Pe, null, [u].concat(o));
    }, function () {
      return me.apply(void 0, o);
    }, "datetime format", function (u) {
      return u[ge].apply(u, o);
    }, function () {
      return [];
    }, function (u) {
      return _(u) || C(u);
    });
  }

  function pt(o) {
    L = o, f.pluralRules = L;
  }

  function yt(o, u) {
    var x = _(u) ? u : s.value,
        k = Fe(x);
    return f.messageResolver(k, o) !== null;
  }

  function Ft(o) {
    var u = null;
    var x = qe(f, l.value, s.value);

    for (var k = 0; k < x.length; k++) {
      var se = i.value[x[k]] || {},
          te = f.messageResolver(se, o);

      if (te != null) {
        u = te;
        break;
      }
    }

    return u;
  }

  function At(o) {
    var u = Ft(o);
    return u != null ? u : n ? n.tm(o) || {} : {};
  }

  function Fe(o) {
    return i.value[o] || {};
  }

  function ht(o, u) {
    i.value[o] = u, f.messages = i.value;
  }

  function Ct(o, u) {
    i.value[o] = i.value[o] || {}, ee(u, i.value[o]), f.messages = i.value;
  }

  function Rt(o) {
    return c.value[o] || {};
  }

  function Dt(o, u) {
    c.value[o] = u, f.datetimeFormats = c.value, we(f, o, u);
  }

  function St(o, u) {
    c.value[o] = w(c.value[o] || {}, u), f.datetimeFormats = c.value, we(f, o, u);
  }

  function vt(o) {
    return m.value[o] || {};
  }

  function Mt(o, u) {
    m.value[o] = u, f.numberFormats = m.value, We(f, o, u);
  }

  function kt(o, u) {
    m.value[o] = w(m.value[o] || {}, u), f.numberFormats = m.value, We(f, o, u);
  }

  xe++, n && ie && ((0, _indexBcc5be.w)(n.locale, function (o) {
    r && (s.value = o, f.locale = o, Z(f, s.value, l.value));
  }), (0, _indexBcc5be.w)(n.fallbackLocale, function (o) {
    r && (l.value = o, f.fallbackLocale = o, Z(f, s.value, l.value));
  }));

  var D = _defineProperty({
    id: xe,
    locale: X,
    fallbackLocale: Y,

    get inheritLocale() {
      return r;
    },

    set inheritLocale(o) {
      r = o, o && n && (s.value = n.locale.value, l.value = n.fallbackLocale.value, Z(f, s.value, l.value));
    },

    get availableLocales() {
      return Object.keys(i.value).sort();
    },

    messages: z,

    get modifiers() {
      return R;
    },

    get pluralRules() {
      return L || {};
    },

    get isGlobal() {
      return a;
    },

    get missingWarn() {
      return d;
    },

    set missingWarn(o) {
      d = o, f.missingWarn = d;
    },

    get fallbackWarn() {
      return E;
    },

    set fallbackWarn(o) {
      E = o, f.fallbackWarn = E;
    },

    get fallbackRoot() {
      return g;
    },

    set fallbackRoot(o) {
      g = o;
    },

    get fallbackFormat() {
      return b;
    },

    set fallbackFormat(o) {
      b = o, f.fallbackFormat = b;
    },

    get warnHtmlMessage() {
      return N;
    },

    set warnHtmlMessage(o) {
      N = o, f.warnHtmlMessage = o;
    },

    get escapeParameter() {
      return p;
    },

    set escapeParameter(o) {
      p = o, f.escapeParameter = o;
    },

    t: ye,
    getLocaleMessage: Fe,
    setLocaleMessage: ht,
    mergeLocaleMessage: Ct,
    getPostTranslationHandler: mt,
    setPostTranslationHandler: ft,
    getMissingHandler: _t,
    setMissingHandler: gt
  }, Mn, pt);

  return D.datetimeFormats = V, D.numberFormats = pe, D.rt = dt, D.te = yt, D.tm = At, D.d = Et, D.n = bt, D.getDateTimeFormat = Rt, D.setDateTimeFormat = Dt, D.mergeDateTimeFormat = St, D.getNumberFormat = vt, D.setNumberFormat = Mt, D.mergeNumberFormat = kt, D[kn] = e.__injectWithOption, D[_e] = It, D[ge] = Ot, D[de] = Lt, D;
}

var Le = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: function validator(e) {
      return e === "parent" || e === "global";
    },
    default: "parent"
  },
  i18n: {
    type: Object
  }
};

function Un(_ref9, t) {
  var e = _ref9.slots;
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce(function (a, r) {
    return a = [].concat(_toConsumableArray(a), _toConsumableArray(C(r.children) ? r.children : [r]));
  }, []) : t.reduce(function (n, a) {
    var r = e[a];
    return r && (n[a] = r()), n;
  }, {});
}

function it(e) {
  return _indexBcc5be.F;
}

var Ge = {
  name: "i18n-t",
  props: w({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: function validator(e) {
        return S(e) || !isNaN(e);
      }
    }
  }, Le),
  setup: function setup(e, t) {
    var n = t.slots,
        a = t.attrs,
        r = e.i18n || Oe({
      useScope: e.scope,
      __useComponent: !0
    });
    return function () {
      var s = Object.keys(n).filter(function (E) {
        return E !== "_";
      }),
          l = {};
      e.locale && (l.locale = e.locale), e.plural !== void 0 && (l.plural = _(e.plural) ? +e.plural : e.plural);

      var i = Un(t, s),
          c = r[_e](e.keypath, i, l),
          m = w({}, a),
          d = _(e.tag) || y(e.tag) ? e.tag : it();

      return (0, _indexBcc5be.h)(d, m, c);
    };
  }
};

function Wn(e) {
  return C(e) && !_(e[0]);
}

function ut(e, t, n, a) {
  var r = t.slots,
      s = t.attrs;
  return function () {
    var l = {
      part: !0
    };
    var i = {};
    e.locale && (l.locale = e.locale), _(e.format) ? l.key = e.format : y(e.format) && (_(e.format.key) && (l.key = e.format.key), i = Object.keys(e.format).reduce(function (g, b) {
      return n.includes(b) ? w({}, g, _defineProperty({}, b, e.format[b])) : g;
    }, {}));
    var c = a(e.value, l, i);
    var m = [l.key];
    C(c) ? m = c.map(function (g, b) {
      var _T;

      var T = r[g.type],
          O = T ? T((_T = {}, _defineProperty(_T, g.type, g.value), _defineProperty(_T, "index", b), _defineProperty(_T, "parts", c), _T)) : [g.value];
      return Wn(O) && (O[0].key = "".concat(g.type, "-").concat(b)), O;
    }) : _(c) && (m = [c]);
    var d = w({}, s),
        E = _(e.tag) || y(e.tag) ? e.tag : it();
    return (0, _indexBcc5be.h)(E, d, m);
  };
}

var $e = {
  name: "i18n-n",
  props: w({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Le),
  setup: function setup(e, t) {
    var n = e.i18n || Oe({
      useScope: "parent",
      __useComponent: !0
    });
    return ut(e, t, lt, function () {
      return n[de].apply(n, arguments);
    });
  }
},
    He = {
  name: "i18n-d",
  props: w({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Le),
  setup: function setup(e, t) {
    var n = e.i18n || Oe({
      useScope: "parent",
      __useComponent: !0
    });
    return ut(e, t, rt, function () {
      return n[ge].apply(n, arguments);
    });
  }
};

function Vn(e, t) {
  var n = e;
  if (e.mode === "composition") return n.__getInstance(t) || e.global;
  {
    var a = n.__getInstance(t);

    return a != null ? a.__composer : e.global.__composer;
  }
}

function xn(e) {
  var t = function t(l) {
    var i = l.instance,
        c = l.modifiers,
        m = l.value;
    if (!i || !i.$) throw W(U.UNEXPECTED_ERROR);
    var d = Vn(e, i.$),
        E = Be(m);
    return [Reflect.apply(d.t, d, _toConsumableArray(Ke(E))), d];
  };

  return {
    created: function created(l, i) {
      var _t2 = t(i),
          _t3 = _slicedToArray(_t2, 2),
          c = _t3[0],
          m = _t3[1];

      ie && e.global === m && (l.__i18nWatcher = (0, _indexBcc5be.w)(m.locale, function () {
        i.instance && i.instance.$forceUpdate();
      })), l.__composer = m, l.textContent = c;
    },
    unmounted: function unmounted(l) {
      ie && l.__i18nWatcher && (l.__i18nWatcher(), l.__i18nWatcher = void 0, delete l.__i18nWatcher), l.__composer && (l.__composer = void 0, delete l.__composer);
    },
    beforeUpdate: function beforeUpdate(l, _ref10) {
      var i = _ref10.value;

      if (l.__composer) {
        var c = l.__composer,
            m = Be(i);
        l.textContent = Reflect.apply(c.t, c, _toConsumableArray(Ke(m)));
      }
    },
    getSSRProps: function getSSRProps(l) {
      var _t4 = t(l),
          _t5 = _slicedToArray(_t4, 1),
          i = _t5[0];

      return {
        textContent: i
      };
    }
  };
}

function Be(e) {
  if (_(e)) return {
    path: e
  };

  if (I(e)) {
    if (!("path" in e)) throw W(U.REQUIRED_VALUE, "path");
    return e;
  } else throw W(U.INVALID_VALUE);
}

function Ke(e) {
  var t = e.path,
      n = e.locale,
      a = e.args,
      r = e.choice,
      s = e.plural,
      l = {},
      i = a || {};
  return _(n) && (l.locale = n), S(r) && (l.plural = r), S(s) && (l.plural = s), [t, i, l];
}

function jn(e, t) {
  var a = I(arguments.length <= 2 ? undefined : arguments[2]) ? arguments.length <= 2 ? undefined : arguments[2] : {},
      r = !!a.useI18nComponentName;
  (h(a.globalInstall) ? a.globalInstall : !0) && (e.component(r ? "i18n" : Ge.name, Ge), e.component($e.name, $e), e.component(He.name, He)), e.directive("t", xn(t));
}

var Gn = j("global-vue-i18n");

function $n() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var t = arguments.length > 1 ? arguments[1] : undefined;

  var n = h(e.globalInjection) ? e.globalInjection : !0,
      a = !0,
      r = new Map(),
      _Hn = Hn(e),
      _Hn2 = _slicedToArray(_Hn, 2),
      s = _Hn2[0],
      l = _Hn2[1],
      i = j("");

  function c(E) {
    return r.get(E) || null;
  }

  function m(E, g) {
    r.set(E, g);
  }

  function d(E) {
    r.delete(E);
  }

  {
    var E = {
      get mode() {
        return "composition";
      },

      get allowComposition() {
        return a;
      },

      install: function install(g) {
        var _arguments = arguments;
        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _len15, b, _key15, T;

          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  for (_len15 = _arguments.length, b = new Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
                    b[_key15 - 1] = _arguments[_key15];
                  }

                  g.__VUE_I18N_SYMBOL__ = i, g.provide(g.__VUE_I18N_SYMBOL__, E), n && qn(g, E.global), jn.apply(void 0, [g, E].concat(b));
                  T = g.unmount;

                  g.unmount = function () {
                    E.dispose(), T();
                  };

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },

      get global() {
        return l;
      },

      dispose: function dispose() {
        s.stop();
      },
      __instances: r,
      __getInstance: c,
      __setInstance: m,
      __deleteInstance: d
    };
    return E;
  }
}

function Oe() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var t = (0, _indexBcc5be.g)();
  if (t == null) throw W(U.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw W(U.NOT_INSLALLED);
  var n = Bn(t),
      a = Xn(n),
      r = Pn(t),
      s = Kn(e, r);
  if (s === "global") return wn(a, e, r), a;

  if (s === "parent") {
    var c = Yn(n, t, e.__useComponent);
    return c == null && (c = a), c;
  }

  var l = n;

  var i = l.__getInstance(t);

  if (i == null) {
    var _c = w({}, e);

    "__i18n" in r && (_c.__i18n = r.__i18n), a && (_c.__root = a), i = ct(_c), zn(l, t), l.__setInstance(t, i);
  }

  return i;
}

function Hn(e, t, n) {
  var a = (0, _indexBcc5be.e)();
  {
    var r = a.run(function () {
      return ct(e);
    });
    if (r == null) throw W(U.UNEXPECTED_ERROR);
    return [a, r];
  }
}

function Bn(e) {
  {
    var t = (0, _indexBcc5be.a)(e.isCE ? Gn : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t) throw W(e.isCE ? U.NOT_INSLALLED_WITH_PROVIDE : U.UNEXPECTED_ERROR);
    return t;
  }
}

function Kn(e, t) {
  return re(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}

function Xn(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}

function Yn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  var a = null;
  var r = t.root;
  var s = t.parent;

  for (; s != null;) {
    var l = e;
    if (e.mode === "composition" && (a = l.__getInstance(s)), a != null || r === s) break;
    s = s.parent;
  }

  return a;
}

function zn(e, t, n) {
  (0, _indexBcc5be.o)(function () {}, t), (0, _indexBcc5be.b)(function () {
    e.__deleteInstance(t);
  }, t);
}

var Jn = ["locale", "fallbackLocale", "availableLocales"],
    Qn = ["t", "rt", "d", "n", "tm"];

function qn(e, t) {
  var n = Object.create(null);
  Jn.forEach(function (a) {
    var r = Object.getOwnPropertyDescriptor(t, a);
    if (!r) throw W(U.UNEXPECTED_ERROR);
    var s = (0, _indexBcc5be.i)(r.value) ? {
      get: function get() {
        return r.value.value;
      },
      set: function set(l) {
        r.value.value = l;
      }
    } : {
      get: function get() {
        return r.get && r.get();
      }
    };
    Object.defineProperty(n, a, s);
  }), e.config.globalProperties.$i18n = n, Qn.forEach(function (a) {
    var r = Object.getOwnPropertyDescriptor(t, a);
    if (!r || !r.value) throw W(U.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, "$".concat(a), r);
  });
}

Fn(sn);
An(qe);
var Zn = {
  failed: "Action failed",
  success: "Action was successful"
},
    ea = {
  "en-US": Zn
},
    ra = (0, _indexBcc5be.f)(function (_ref11) {
  var e = _ref11.app;
  var t = $n({
    locale: "en-US",
    legacy: !1,
    messages: ea
  });
  e.use(t);
});
exports.default = ra;
},{"./index.bcc5be65.js":"assets/index.bcc5be65.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63840" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/i18n.623f42c2.7bbced9d.js.map