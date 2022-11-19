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
})({"../../AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"assets/axios.620244fe.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.api = void 0;

var _indexBcc5be = require("./index.bcc5be65.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var F = {
  exports: {}
},
    re = function re(e, t) {
  return function () {
    for (var a = new Array(arguments.length), i = 0; i < a.length; i++) {
      a[i] = arguments[i];
    }

    return e.apply(t, a);
  };
},
    ye = re,
    w = Object.prototype.toString;

function H(r) {
  return w.call(r) === "[object Array]";
}

function L(r) {
  return typeof r == "undefined";
}

function be(r) {
  return r !== null && !L(r) && r.constructor !== null && !L(r.constructor) && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
}

function we(r) {
  return w.call(r) === "[object ArrayBuffer]";
}

function Ee(r) {
  return typeof FormData != "undefined" && r instanceof FormData;
}

function ge(r) {
  var e;
  return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && r.buffer instanceof ArrayBuffer, e;
}

function xe(r) {
  return typeof r == "string";
}

function Se(r) {
  return typeof r == "number";
}

function te(r) {
  return r !== null && _typeof(r) == "object";
}

function A(r) {
  if (w.call(r) !== "[object Object]") return !1;
  var e = Object.getPrototypeOf(r);
  return e === null || e === Object.prototype;
}

function Ce(r) {
  return w.call(r) === "[object Date]";
}

function Oe(r) {
  return w.call(r) === "[object File]";
}

function Re(r) {
  return w.call(r) === "[object Blob]";
}

function ne(r) {
  return w.call(r) === "[object Function]";
}

function Ae(r) {
  return te(r) && ne(r.pipe);
}

function $e(r) {
  return typeof URLSearchParams != "undefined" && r instanceof URLSearchParams;
}

function Ne(r) {
  return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, "");
}

function je() {
  return typeof navigator != "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window != "undefined" && typeof document != "undefined";
}

function M(r, e) {
  if (!(r === null || typeof r == "undefined")) if (_typeof(r) != "object" && (r = [r]), H(r)) for (var t = 0, n = r.length; t < n; t++) {
    e.call(null, r[t], t, r);
  } else for (var a in r) {
    Object.prototype.hasOwnProperty.call(r, a) && e.call(null, r[a], a, r);
  }
}

function q() {
  var r = {};

  function e(a, i) {
    A(r[i]) && A(a) ? r[i] = q(r[i], a) : A(a) ? r[i] = q({}, a) : H(a) ? r[i] = a.slice() : r[i] = a;
  }

  for (var t = 0, n = arguments.length; t < n; t++) {
    M(arguments[t], e);
  }

  return r;
}

function Pe(r, e, t) {
  return M(e, function (a, i) {
    t && typeof a == "function" ? r[i] = ye(a, t) : r[i] = a;
  }), r;
}

function Te(r) {
  return r.charCodeAt(0) === 65279 && (r = r.slice(1)), r;
}

var h = {
  isArray: H,
  isArrayBuffer: we,
  isBuffer: be,
  isFormData: Ee,
  isArrayBufferView: ge,
  isString: xe,
  isNumber: Se,
  isObject: te,
  isPlainObject: A,
  isUndefined: L,
  isDate: Ce,
  isFile: Oe,
  isBlob: Re,
  isFunction: ne,
  isStream: Ae,
  isURLSearchParams: $e,
  isStandardBrowserEnv: je,
  forEach: M,
  merge: q,
  extend: Pe,
  trim: Ne,
  stripBOM: Te
},
    g = h;

function z(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}

var ae = function ae(e, t, n) {
  if (!t) return e;
  var a;
  if (n) a = n(t);else if (g.isURLSearchParams(t)) a = t.toString();else {
    var i = [];
    g.forEach(t, function (s, v) {
      s === null || typeof s == "undefined" || (g.isArray(s) ? v = v + "[]" : s = [s], g.forEach(s, function (l) {
        g.isDate(l) ? l = l.toISOString() : g.isObject(l) && (l = JSON.stringify(l)), i.push(z(v) + "=" + z(l));
      }));
    }), a = i.join("&");
  }

  if (a) {
    var o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }

  return e;
},
    Ue = h;

function j() {
  this.handlers = [];
}

j.prototype.use = function (e, t, n) {
  return this.handlers.push({
    fulfilled: e,
    rejected: t,
    synchronous: n ? n.synchronous : !1,
    runWhen: n ? n.runWhen : null
  }), this.handlers.length - 1;
};

j.prototype.eject = function (e) {
  this.handlers[e] && (this.handlers[e] = null);
};

j.prototype.forEach = function (e) {
  Ue.forEach(this.handlers, function (n) {
    n !== null && e(n);
  });
};

var ke = j,
    Be = h,
    De = function De(e, t) {
  Be.forEach(e, function (a, i) {
    i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = a, delete e[i]);
  });
},
    se = function se(e, t, n, a, i) {
  return e.config = t, n && (e.code = n), e.request = a, e.response = i, e.isAxiosError = !0, e.toJSON = function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code
    };
  }, e;
},
    Le = se,
    ie = function ie(e, t, n, a, i) {
  var o = new Error(e);
  return Le(o, t, n, a, i);
},
    qe = ie,
    Fe = function Fe(e, t, n) {
  var a = n.config.validateStatus;
  !n.status || !a || a(n.status) ? e(n) : t(qe("Request failed with status code " + n.status, n.config, null, n.request, n));
},
    O = h,
    He = O.isStandardBrowserEnv() ? function () {
  return {
    write: function write(t, n, a, i, o, u) {
      var s = [];
      s.push(t + "=" + encodeURIComponent(n)), O.isNumber(a) && s.push("expires=" + new Date(a).toGMTString()), O.isString(i) && s.push("path=" + i), O.isString(o) && s.push("domain=" + o), u === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read: function read(t) {
      var n = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return n ? decodeURIComponent(n[3]) : null;
    },
    remove: function remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  };
}() : function () {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}(),
    Me = function Me(e) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
},
    Ie = function Ie(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
},
    _e = Me,
    Je = Ie,
    ze = function ze(e, t) {
  return e && !_e(t) ? Je(e, t) : t;
},
    U = h,
    Ve = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"],
    Ke = function Ke(e) {
  var t = {},
      n,
      a,
      i;
  return e && U.forEach(e.split("\n"), function (u) {
    if (i = u.indexOf(":"), n = U.trim(u.substr(0, i)).toLowerCase(), a = U.trim(u.substr(i + 1)), n) {
      if (t[n] && Ve.indexOf(n) >= 0) return;
      n === "set-cookie" ? t[n] = (t[n] ? t[n] : []).concat([a]) : t[n] = t[n] ? t[n] + ", " + a : a;
    }
  }), t;
},
    V = h,
    We = V.isStandardBrowserEnv() ? function () {
  var e = /(msie|trident)/i.test(navigator.userAgent),
      t = document.createElement("a"),
      n;

  function a(i) {
    var o = i;
    return e && (t.setAttribute("href", o), o = t.href), t.setAttribute("href", o), {
      href: t.href,
      protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
      host: t.host,
      search: t.search ? t.search.replace(/^\?/, "") : "",
      hash: t.hash ? t.hash.replace(/^#/, "") : "",
      hostname: t.hostname,
      port: t.port,
      pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
    };
  }

  return n = a(window.location.href), function (o) {
    var u = V.isString(o) ? a(o) : o;
    return u.protocol === n.protocol && u.host === n.host;
  };
}() : function () {
  return function () {
    return !0;
  };
}(),
    R = h,
    Xe = Fe,
    Ge = He,
    Ye = ae,
    Ze = ze,
    Qe = Ke,
    er = We,
    k = ie,
    K = function K(e) {
  return new Promise(function (n, a) {
    var i = e.data,
        o = e.headers,
        u = e.responseType;
    R.isFormData(i) && delete o["Content-Type"];
    var s = new XMLHttpRequest();

    if (e.auth) {
      var v = e.auth.username || "",
          E = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.Authorization = "Basic " + btoa(v + ":" + E);
    }

    var l = Ze(e.baseURL, e.url);
    s.open(e.method.toUpperCase(), Ye(l, e.params, e.paramsSerializer), !0), s.timeout = e.timeout;

    function c() {
      if (!!s) {
        var b = "getAllResponseHeaders" in s ? Qe(s.getAllResponseHeaders()) : null,
            y = !u || u === "text" || u === "json" ? s.responseText : s.response,
            S = {
          data: y,
          status: s.status,
          statusText: s.statusText,
          headers: b,
          config: e,
          request: s
        };
        Xe(n, a, S), s = null;
      }
    }

    if ("onloadend" in s ? s.onloadend = c : s.onreadystatechange = function () {
      !s || s.readyState !== 4 || s.status === 0 && !(s.responseURL && s.responseURL.indexOf("file:") === 0) || setTimeout(c);
    }, s.onabort = function () {
      !s || (a(k("Request aborted", e, "ECONNABORTED", s)), s = null);
    }, s.onerror = function () {
      a(k("Network Error", e, null, s)), s = null;
    }, s.ontimeout = function () {
      var y = "timeout of " + e.timeout + "ms exceeded";
      e.timeoutErrorMessage && (y = e.timeoutErrorMessage), a(k(y, e, e.transitional && e.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", s)), s = null;
    }, R.isStandardBrowserEnv()) {
      var f = (e.withCredentials || er(l)) && e.xsrfCookieName ? Ge.read(e.xsrfCookieName) : void 0;
      f && (o[e.xsrfHeaderName] = f);
    }

    "setRequestHeader" in s && R.forEach(o, function (y, S) {
      typeof i == "undefined" && S.toLowerCase() === "content-type" ? delete o[S] : s.setRequestHeader(S, y);
    }), R.isUndefined(e.withCredentials) || (s.withCredentials = !!e.withCredentials), u && u !== "json" && (s.responseType = e.responseType), typeof e.onDownloadProgress == "function" && s.addEventListener("progress", e.onDownloadProgress), typeof e.onUploadProgress == "function" && s.upload && s.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (y) {
      !s || (s.abort(), a(y), s = null);
    }), i || (i = null), s.send(i);
  });
},
    d = h,
    W = De,
    rr = se,
    tr = {
  "Content-Type": "application/x-www-form-urlencoded"
};

function X(r, e) {
  !d.isUndefined(r) && d.isUndefined(r["Content-Type"]) && (r["Content-Type"] = e);
}

function nr() {
  var r;
  return (typeof XMLHttpRequest != "undefined" || typeof process != "undefined" && Object.prototype.toString.call(process) === "[object process]") && (r = K), r;
}

function ar(r, e, t) {
  if (d.isString(r)) try {
    return (e || JSON.parse)(r), d.trim(r);
  } catch (n) {
    if (n.name !== "SyntaxError") throw n;
  }
  return (t || JSON.stringify)(r);
}

var P = {
  transitional: {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  adapter: nr(),
  transformRequest: [function (e, t) {
    return W(t, "Accept"), W(t, "Content-Type"), d.isFormData(e) || d.isArrayBuffer(e) || d.isBuffer(e) || d.isStream(e) || d.isFile(e) || d.isBlob(e) ? e : d.isArrayBufferView(e) ? e.buffer : d.isURLSearchParams(e) ? (X(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : d.isObject(e) || t && t["Content-Type"] === "application/json" ? (X(t, "application/json"), ar(e)) : e;
  }],
  transformResponse: [function (e) {
    var t = this.transitional,
        n = t && t.silentJSONParsing,
        a = t && t.forcedJSONParsing,
        i = !n && this.responseType === "json";
    if (i || a && d.isString(e) && e.length) try {
      return JSON.parse(e);
    } catch (o) {
      if (i) throw o.name === "SyntaxError" ? rr(o, this, "E_JSON_PARSE") : o;
    }
    return e;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(e) {
    return e >= 200 && e < 300;
  }
};
P.headers = {
  common: {
    Accept: "application/json, text/plain, */*"
  }
};
d.forEach(["delete", "get", "head"], function (e) {
  P.headers[e] = {};
});
d.forEach(["post", "put", "patch"], function (e) {
  P.headers[e] = d.merge(tr);
});

var I = P,
    sr = h,
    ir = I,
    or = function or(e, t, n) {
  var a = this || ir;
  return sr.forEach(n, function (o) {
    e = o.call(a, e, t);
  }), e;
},
    oe = function oe(e) {
  return !!(e && e.__CANCEL__);
},
    G = h,
    B = or,
    ur = oe,
    fr = I;

function D(r) {
  r.cancelToken && r.cancelToken.throwIfRequested();
}

var cr = function cr(e) {
  D(e), e.headers = e.headers || {}, e.data = B.call(e, e.data, e.headers, e.transformRequest), e.headers = G.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), G.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (a) {
    delete e.headers[a];
  });
  var t = e.adapter || fr.adapter;
  return t(e).then(function (a) {
    return D(e), a.data = B.call(e, a.data, a.headers, e.transformResponse), a;
  }, function (a) {
    return ur(a) || (D(e), a && a.response && (a.response.data = B.call(e, a.response.data, a.response.headers, e.transformResponse))), Promise.reject(a);
  });
},
    p = h,
    ue = function ue(e, t) {
  t = t || {};
  var n = {},
      a = ["url", "method", "data"],
      i = ["headers", "auth", "proxy", "params"],
      o = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
      u = ["validateStatus"];

  function s(c, f) {
    return p.isPlainObject(c) && p.isPlainObject(f) ? p.merge(c, f) : p.isPlainObject(f) ? p.merge({}, f) : p.isArray(f) ? f.slice() : f;
  }

  function v(c) {
    p.isUndefined(t[c]) ? p.isUndefined(e[c]) || (n[c] = s(void 0, e[c])) : n[c] = s(e[c], t[c]);
  }

  p.forEach(a, function (f) {
    p.isUndefined(t[f]) || (n[f] = s(void 0, t[f]));
  }), p.forEach(i, v), p.forEach(o, function (f) {
    p.isUndefined(t[f]) ? p.isUndefined(e[f]) || (n[f] = s(void 0, e[f])) : n[f] = s(void 0, t[f]);
  }), p.forEach(u, function (f) {
    f in t ? n[f] = s(e[f], t[f]) : f in e && (n[f] = s(void 0, e[f]));
  });
  var E = a.concat(i).concat(o).concat(u),
      l = Object.keys(e).concat(Object.keys(t)).filter(function (f) {
    return E.indexOf(f) === -1;
  });
  return p.forEach(l, v), n;
};

var lr = "axios",
    dr = "0.21.4",
    pr = "Promise based HTTP client for the browser and node.js",
    hr = "index.js",
    mr = {
  test: "grunt test",
  start: "node ./sandbox/server.js",
  build: "NODE_ENV=production grunt build",
  preversion: "npm test",
  version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
  postversion: "git push && git push --tags",
  examples: "node ./examples/server.js",
  coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
  fix: "eslint --fix lib/**/*.js"
},
    vr = {
  type: "git",
  url: "https://github.com/axios/axios.git"
},
    yr = ["xhr", "http", "ajax", "promise", "node"],
    br = "Matt Zabriskie",
    wr = "MIT",
    Er = {
  url: "https://github.com/axios/axios/issues"
},
    gr = "https://axios-http.com",
    xr = {
  coveralls: "^3.0.0",
  "es6-promise": "^4.2.4",
  grunt: "^1.3.0",
  "grunt-banner": "^0.6.0",
  "grunt-cli": "^1.2.0",
  "grunt-contrib-clean": "^1.1.0",
  "grunt-contrib-watch": "^1.0.0",
  "grunt-eslint": "^23.0.0",
  "grunt-karma": "^4.0.0",
  "grunt-mocha-test": "^0.13.3",
  "grunt-ts": "^6.0.0-beta.19",
  "grunt-webpack": "^4.0.2",
  "istanbul-instrumenter-loader": "^1.0.0",
  "jasmine-core": "^2.4.1",
  karma: "^6.3.2",
  "karma-chrome-launcher": "^3.1.0",
  "karma-firefox-launcher": "^2.1.0",
  "karma-jasmine": "^1.1.1",
  "karma-jasmine-ajax": "^0.1.13",
  "karma-safari-launcher": "^1.0.0",
  "karma-sauce-launcher": "^4.3.6",
  "karma-sinon": "^1.0.5",
  "karma-sourcemap-loader": "^0.3.8",
  "karma-webpack": "^4.0.2",
  "load-grunt-tasks": "^3.5.2",
  minimist: "^1.2.0",
  mocha: "^8.2.1",
  sinon: "^4.5.0",
  "terser-webpack-plugin": "^4.2.3",
  typescript: "^4.0.5",
  "url-search-params": "^0.10.0",
  webpack: "^4.44.2",
  "webpack-dev-server": "^3.11.0"
},
    Sr = {
  "./lib/adapters/http.js": "./lib/adapters/xhr.js"
},
    Cr = "dist/axios.min.js",
    Or = "dist/axios.min.js",
    Rr = "./index.d.ts",
    Ar = {
  "follow-redirects": "^1.14.0"
},
    $r = [{
  path: "./dist/axios.min.js",
  threshold: "5kB"
}];
var Nr = {
  name: lr,
  version: dr,
  description: pr,
  main: hr,
  scripts: mr,
  repository: vr,
  keywords: yr,
  author: br,
  license: wr,
  bugs: Er,
  homepage: gr,
  devDependencies: xr,
  browser: Sr,
  jsdelivr: Cr,
  unpkg: Or,
  typings: Rr,
  dependencies: Ar,
  bundlesize: $r
},
    fe = Nr,
    _ = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function (r, e) {
  _[r] = function (n) {
    return _typeof(n) === r || "a" + (e < 1 ? "n " : " ") + r;
  };
});
var Y = {},
    jr = fe.version.split(".");

function ce(r, e) {
  for (var t = e ? e.split(".") : jr, n = r.split("."), a = 0; a < 3; a++) {
    if (t[a] > n[a]) return !0;
    if (t[a] < n[a]) return !1;
  }

  return !1;
}

_.transitional = function (e, t, n) {
  var a = t && ce(t);

  function i(o, u) {
    return "[Axios v" + fe.version + "] Transitional option '" + o + "'" + u + (n ? ". " + n : "");
  }

  return function (o, u, s) {
    if (e === !1) throw new Error(i(u, " has been removed in " + t));
    return a && !Y[u] && (Y[u] = !0, console.warn(i(u, " has been deprecated since v" + t + " and will be removed in the near future"))), e ? e(o, u, s) : !0;
  };
};

function Pr(r, e, t) {
  if (_typeof(r) != "object") throw new TypeError("options must be an object");

  for (var n = Object.keys(r), a = n.length; a-- > 0;) {
    var i = n[a],
        o = e[i];

    if (o) {
      var u = r[i],
          s = u === void 0 || o(u, i, r);
      if (s !== !0) throw new TypeError("option " + i + " must be " + s);
      continue;
    }

    if (t !== !0) throw Error("Unknown option " + i);
  }
}

var Tr = {
  isOlderVersion: ce,
  assertOptions: Pr,
  validators: _
},
    le = h,
    Ur = ae,
    Z = ke,
    Q = cr,
    T = ue,
    de = Tr,
    x = de.validators;

function C(r) {
  this.defaults = r, this.interceptors = {
    request: new Z(),
    response: new Z()
  };
}

C.prototype.request = function (e) {
  typeof e == "string" ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, e = T(this.defaults, e), e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
  var t = e.transitional;
  t !== void 0 && de.assertOptions(t, {
    silentJSONParsing: x.transitional(x.boolean, "1.0.0"),
    forcedJSONParsing: x.transitional(x.boolean, "1.0.0"),
    clarifyTimeoutError: x.transitional(x.boolean, "1.0.0")
  }, !1);
  var n = [],
      a = !0;
  this.interceptors.request.forEach(function (c) {
    typeof c.runWhen == "function" && c.runWhen(e) === !1 || (a = a && c.synchronous, n.unshift(c.fulfilled, c.rejected));
  });
  var i = [];
  this.interceptors.response.forEach(function (c) {
    i.push(c.fulfilled, c.rejected);
  });
  var o;

  if (!a) {
    var u = [Q, void 0];

    for (Array.prototype.unshift.apply(u, n), u = u.concat(i), o = Promise.resolve(e); u.length;) {
      o = o.then(u.shift(), u.shift());
    }

    return o;
  }

  for (var s = e; n.length;) {
    var v = n.shift(),
        E = n.shift();

    try {
      s = v(s);
    } catch (l) {
      E(l);
      break;
    }
  }

  try {
    o = Q(s);
  } catch (l) {
    return Promise.reject(l);
  }

  for (; i.length;) {
    o = o.then(i.shift(), i.shift());
  }

  return o;
};

C.prototype.getUri = function (e) {
  return e = T(this.defaults, e), Ur(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
};

le.forEach(["delete", "get", "head", "options"], function (e) {
  C.prototype[e] = function (t, n) {
    return this.request(T(n || {}, {
      method: e,
      url: t,
      data: (n || {}).data
    }));
  };
});
le.forEach(["post", "put", "patch"], function (e) {
  C.prototype[e] = function (t, n, a) {
    return this.request(T(a || {}, {
      method: e,
      url: t,
      data: n
    }));
  };
});
var kr = C;

function J(r) {
  this.message = r;
}

J.prototype.toString = function () {
  return "Cancel" + (this.message ? ": " + this.message : "");
};

J.prototype.__CANCEL__ = !0;
var pe = J,
    Br = pe;

function N(r) {
  if (typeof r != "function") throw new TypeError("executor must be a function.");
  var e;
  this.promise = new Promise(function (a) {
    e = a;
  });
  var t = this;
  r(function (a) {
    t.reason || (t.reason = new Br(a), e(t.reason));
  });
}

N.prototype.throwIfRequested = function () {
  if (this.reason) throw this.reason;
};

N.source = function () {
  var e,
      t = new N(function (a) {
    e = a;
  });
  return {
    token: t,
    cancel: e
  };
};

var Dr = N,
    Lr = function Lr(e) {
  return function (n) {
    return e.apply(null, n);
  };
},
    qr = function qr(e) {
  return _typeof(e) == "object" && e.isAxiosError === !0;
},
    ee = h,
    Fr = re,
    $ = kr,
    Hr = ue,
    Mr = I;

function he(r) {
  var e = new $(r),
      t = Fr($.prototype.request, e);
  return ee.extend(t, $.prototype, e), ee.extend(t, e), t;
}

var m = he(Mr);
m.Axios = $;

m.create = function (e) {
  return he(Hr(m.defaults, e));
};

m.Cancel = pe;
m.CancelToken = Dr;
m.isCancel = oe;

m.all = function (e) {
  return Promise.all(e);
};

m.spread = Lr;
m.isAxiosError = qr;
F.exports = m;
F.exports.default = m;
var Ir = F.exports,
    me = Ir;

var _r = me.create({
  baseURL: "https://api.example.com"
});

exports.api = _r;
var zr = (0, _indexBcc5be.f)(function (_ref) {
  var r = _ref.app;
  r.config.globalProperties.$axios = me, r.config.globalProperties.$api = _r;
});
exports.default = zr;
},{"./index.bcc5be65.js":"assets/index.bcc5be65.js","process":"../../AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/process/browser.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/axios.620244fe.12a584a2.js.map