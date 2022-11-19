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
})({"assets/MainLayout.eb395e4b.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _QBtnFb5a01ff = require("./QBtn.fb5a01ff.js");

var _renderA = require("./render.a5508880.js");

var _indexBcc5be = require("./index.bcc5be65.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Xt = (0, _renderA.c)({
  name: "QToolbarTitle",
  props: {
    shrink: Boolean
  },
  setup: function setup(e, _ref) {
    var o = _ref.slots;
    var n = (0, _indexBcc5be.c)(function () {
      return "q-toolbar__title ellipsis" + (e.shrink === !0 ? " col-shrink" : "");
    });
    return function () {
      return (0, _indexBcc5be.h)("div", {
        class: n.value
      }, (0, _renderA.h)(o.default));
    };
  }
}),
    Yt = (0, _renderA.c)({
  name: "QToolbar",
  props: {
    inset: Boolean
  },
  setup: function setup(e, _ref2) {
    var o = _ref2.slots;
    var n = (0, _indexBcc5be.c)(function () {
      return "q-toolbar row no-wrap items-center" + (e.inset === !0 ? " q-toolbar--inset" : "");
    });
    return function () {
      return (0, _indexBcc5be.h)("div", {
        class: n.value,
        role: "toolbar"
      }, (0, _renderA.h)(o.default));
    };
  }
});

function jt() {
  var e = (0, _indexBcc5be.r)(!_indexBcc5be.j.value);
  return e.value === !1 && (0, _indexBcc5be.o)(function () {
    e.value = !0;
  }), e;
}

var lt = typeof ResizeObserver != "undefined",
    Ie = lt === !0 ? {} : {
  style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
  url: "about:blank"
};
var Ee = (0, _renderA.c)({
  name: "QResizeObserver",
  props: {
    debounce: {
      type: [String, Number],
      default: 100
    }
  },
  emits: ["resize"],
  setup: function setup(e, _ref3) {
    var o = _ref3.emit;
    var n = null,
        l,
        t = {
      width: -1,
      height: -1
    };

    function i(d) {
      d === !0 || e.debounce === 0 || e.debounce === "0" ? s() : n === null && (n = setTimeout(s, e.debounce));
    }

    function s() {
      if (clearTimeout(n), n = null, l) {
        var _l = l,
            d = _l.offsetWidth,
            c = _l.offsetHeight;
        (d !== t.width || c !== t.height) && (t = {
          width: d,
          height: c
        }, o("resize", t));
      }
    }

    var _H = (0, _indexBcc5be.g)(),
        f = _H.proxy;

    if (lt === !0) {
      var d;

      var c = function c(a) {
        l = f.$el.parentNode, l ? (d = new ResizeObserver(i), d.observe(l), s()) : a !== !0 && (0, _indexBcc5be.l)(function () {
          c(!0);
        });
      };

      return (0, _indexBcc5be.o)(function () {
        c();
      }), (0, _indexBcc5be.k)(function () {
        clearTimeout(n), d !== void 0 && (d.disconnect !== void 0 ? d.disconnect() : l && d.unobserve(l));
      }), _indexBcc5be.n;
    } else {
      var a = function a() {
        clearTimeout(n), _c !== void 0 && (_c.removeEventListener !== void 0 && _c.removeEventListener("resize", i, _indexBcc5be.m.passive), _c = void 0);
      },
          w = function w() {
        a(), l && l.contentDocument && (_c = l.contentDocument.defaultView, _c.addEventListener("resize", i, _indexBcc5be.m.passive), s());
      };

      var _d = jt();

      var _c;

      return (0, _indexBcc5be.o)(function () {
        (0, _indexBcc5be.l)(function () {
          l = f.$el, l && w();
        });
      }), (0, _indexBcc5be.k)(a), f.trigger = i, function () {
        if (_d.value === !0) return (0, _indexBcc5be.h)("object", {
          style: Ie.style,
          tabindex: -1,
          type: "text/html",
          data: Ie.url,
          "aria-hidden": "true",
          onLoad: w
        });
      };
    }
  }
}),
    Ut = (0, _renderA.c)({
  name: "QHeader",
  props: {
    modelValue: {
      type: Boolean,
      default: !0
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    },
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup: function setup(e, _ref4) {
    var o = _ref4.slots,
        n = _ref4.emit;

    var _H2 = (0, _indexBcc5be.g)(),
        l = _H2.proxy.$q,
        t = (0, _indexBcc5be.a)(_indexBcc5be.q, _indexBcc5be.p);

    if (t === _indexBcc5be.p) return console.error("QHeader needs to be child of QLayout"), _indexBcc5be.p;
    var i = (0, _indexBcc5be.r)(parseInt(e.heightHint, 10)),
        s = (0, _indexBcc5be.r)(!0),
        f = (0, _indexBcc5be.c)(function () {
      return e.reveal === !0 || t.view.value.indexOf("H") > -1 || l.platform.is.ios && t.isContainer.value === !0;
    }),
        d = (0, _indexBcc5be.c)(function () {
      if (e.modelValue !== !0) return 0;
      if (f.value === !0) return s.value === !0 ? i.value : 0;
      var u = i.value - t.scroll.value.position;
      return u > 0 ? u : 0;
    }),
        c = (0, _indexBcc5be.c)(function () {
      return e.modelValue !== !0 || f.value === !0 && s.value !== !0;
    }),
        a = (0, _indexBcc5be.c)(function () {
      return e.modelValue === !0 && c.value === !0 && e.reveal === !0;
    }),
        w = (0, _indexBcc5be.c)(function () {
      return "q-header q-layout__section--marginal " + (f.value === !0 ? "fixed" : "absolute") + "-top" + (e.bordered === !0 ? " q-header--bordered" : "") + (c.value === !0 ? " q-header--hidden" : "") + (e.modelValue !== !0 ? " q-layout--prevent-focus" : "");
    }),
        q = (0, _indexBcc5be.c)(function () {
      var u = t.rows.value.top,
          p = {};
      return u[0] === "l" && t.left.space === !0 && (p[l.lang.rtl === !0 ? "right" : "left"] = "".concat(t.left.size, "px")), u[2] === "r" && t.right.space === !0 && (p[l.lang.rtl === !0 ? "left" : "right"] = "".concat(t.right.size, "px")), p;
    });

    function m(u, p) {
      t.update("header", u, p);
    }

    function h(u, p) {
      u.value !== p && (u.value = p);
    }

    function T(_ref5) {
      var u = _ref5.height;
      h(i, u), m("size", u);
    }

    function L(u) {
      a.value === !0 && h(s, !0), n("focusin", u);
    }

    (0, _indexBcc5be.w)(function () {
      return e.modelValue;
    }, function (u) {
      m("space", u), h(s, !0), t.animate();
    }), (0, _indexBcc5be.w)(d, function (u) {
      m("offset", u);
    }), (0, _indexBcc5be.w)(function () {
      return e.reveal;
    }, function (u) {
      u === !1 && h(s, e.modelValue);
    }), (0, _indexBcc5be.w)(s, function (u) {
      t.animate(), n("reveal", u);
    }), (0, _indexBcc5be.w)(t.scroll, function (u) {
      e.reveal === !0 && h(s, u.direction === "up" || u.position <= e.revealOffset || u.position - u.inflectionPoint < 100);
    });
    var g = {};
    return t.instances.header = g, e.modelValue === !0 && m("size", i.value), m("space", e.modelValue), m("offset", d.value), (0, _indexBcc5be.k)(function () {
      t.instances.header === g && (t.instances.header = void 0, m("size", 0), m("offset", 0), m("space", !1));
    }), function () {
      var u = (0, _renderA.a)(o.default, []);
      return e.elevated === !0 && u.push((0, _indexBcc5be.h)("div", {
        class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
      })), u.push((0, _indexBcc5be.h)(Ee, {
        debounce: 0,
        onResize: T
      })), (0, _indexBcc5be.h)("header", {
        class: w.value,
        style: q.value,
        onFocusin: L
      }, u);
    };
  }
}),
    Be = (0, _renderA.c)({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup: function setup(e, _ref6) {
    var o = _ref6.slots;
    var n = (0, _indexBcc5be.c)(function () {
      return parseInt(e.lines, 10);
    }),
        l = (0, _indexBcc5be.c)(function () {
      return "q-item__label" + (e.overline === !0 ? " q-item__label--overline text-overline" : "") + (e.caption === !0 ? " q-item__label--caption text-caption" : "") + (e.header === !0 ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "");
    }),
        t = (0, _indexBcc5be.c)(function () {
      return e.lines !== void 0 && n.value > 1 ? {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": n.value
      } : null;
    });
    return function () {
      return (0, _indexBcc5be.h)("div", {
        style: t.value,
        class: l.value
      }, (0, _renderA.h)(o.default));
    };
  }
});
var Ve = {
  dark: {
    type: Boolean,
    default: null
  }
};

function Oe(e, o) {
  return (0, _indexBcc5be.c)(function () {
    return e.dark === null ? o.dark.isActive : e.dark;
  });
}

var Kt = (0, _renderA.c)({
  name: "QList",
  props: _objectSpread(_objectSpread({}, Ve), {}, {
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  }),
  setup: function setup(e, _ref7) {
    var o = _ref7.slots;
    var n = (0, _indexBcc5be.g)(),
        l = Oe(e, n.proxy.$q),
        t = (0, _indexBcc5be.c)(function () {
      return "q-list" + (e.bordered === !0 ? " q-list--bordered" : "") + (e.dense === !0 ? " q-list--dense" : "") + (e.separator === !0 ? " q-list--separator" : "") + (l.value === !0 ? " q-list--dark" : "") + (e.padding === !0 ? " q-list--padding" : "");
    });
    return function () {
      return (0, _indexBcc5be.h)(e.tag, {
        class: t.value
      }, (0, _renderA.h)(o.default));
    };
  }
});

function Gt(e, o, n) {
  var l;

  function t() {
    l !== void 0 && (_indexBcc5be.H.remove(l), l = void 0);
  }

  return (0, _indexBcc5be.k)(function () {
    e.value === !0 && t();
  }), {
    removeFromHistory: t,
    addToHistory: function addToHistory() {
      l = {
        condition: function condition() {
          return n.value === !0;
        },
        handler: o
      }, _indexBcc5be.H.add(l);
    }
  };
}

var Jt = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
},
    Zt = ["beforeShow", "show", "beforeHide", "hide"];

function eo(_ref8) {
  var e = _ref8.showing,
      o = _ref8.canShow,
      n = _ref8.hideOnRouteChange,
      l = _ref8.handleShow,
      t = _ref8.handleHide,
      i = _ref8.processOnMount;
  var s = (0, _indexBcc5be.g)(),
      f = s.props,
      d = s.emit,
      c = s.proxy;
  var a;

  function w(u) {
    e.value === !0 ? h(u) : q(u);
  }

  function q(u) {
    if (f.disable === !0 || u !== void 0 && u.qAnchorHandled === !0 || o !== void 0 && o(u) !== !0) return;
    var p = f["onUpdate:modelValue"] !== void 0;
    p === !0 && (d("update:modelValue", !0), a = u, (0, _indexBcc5be.l)(function () {
      a === u && (a = void 0);
    })), (f.modelValue === null || p === !1) && m(u);
  }

  function m(u) {
    e.value !== !0 && (e.value = !0, d("beforeShow", u), l !== void 0 ? l(u) : d("show", u));
  }

  function h(u) {
    if (f.disable === !0) return;
    var p = f["onUpdate:modelValue"] !== void 0;
    p === !0 && (d("update:modelValue", !1), a = u, (0, _indexBcc5be.l)(function () {
      a === u && (a = void 0);
    })), (f.modelValue === null || p === !1) && T(u);
  }

  function T(u) {
    e.value !== !1 && (e.value = !1, d("beforeHide", u), t !== void 0 ? t(u) : d("hide", u));
  }

  function L(u) {
    f.disable === !0 && u === !0 ? f["onUpdate:modelValue"] !== void 0 && d("update:modelValue", !1) : u === !0 !== e.value && (u === !0 ? m : T)(a);
  }

  (0, _indexBcc5be.w)(function () {
    return f.modelValue;
  }, L), n !== void 0 && (0, _QBtnFb5a01ff.v)(s) === !0 && (0, _indexBcc5be.w)(function () {
    return c.$route.fullPath;
  }, function () {
    n.value === !0 && e.value === !0 && h();
  }), i === !0 && (0, _indexBcc5be.o)(function () {
    L(f.modelValue);
  });
  var g = {
    show: q,
    hide: h,
    toggle: w
  };
  return Object.assign(c, g), g;
}

var to = [null, document, document.body, document.scrollingElement, document.documentElement];

function oo(e, o) {
  var n = (0, _QBtnFb5a01ff.g)(o);

  if (n === void 0) {
    if (e == null) return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }

  return to.includes(n) ? window : n;
}

function at(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}

function rt(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}

var ie;

function we() {
  if (ie !== void 0) return ie;
  var e = document.createElement("p"),
      o = document.createElement("div");
  (0, _QBtnFb5a01ff.c)(e, {
    width: "100%",
    height: "200px"
  }), (0, _QBtnFb5a01ff.c)(o, {
    position: "absolute",
    top: "0px",
    left: "0px",
    visibility: "hidden",
    width: "200px",
    height: "150px",
    overflow: "hidden"
  }), o.appendChild(e), document.body.appendChild(o);
  var n = e.offsetWidth;
  o.style.overflow = "scroll";
  var l = e.offsetWidth;
  return n === l && (l = o.clientWidth), o.remove(), ie = n - l, ie;
}

function no(e) {
  var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
  return !e || e.nodeType !== Node.ELEMENT_NODE ? !1 : o ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}

var J = 0,
    qe,
    ke,
    Z,
    Ce = !1,
    Xe,
    Ye,
    Y;

function io(e) {
  lo(e) && (0, _indexBcc5be.t)(e);
}

function lo(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return !0;
  var o = (0, _indexBcc5be.u)(e),
      n = e.shiftKey && !e.deltaX,
      l = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
      t = n || l ? e.deltaY : e.deltaX;

  for (var i = 0; i < o.length; i++) {
    var s = o[i];
    if (no(s, l)) return l ? t < 0 && s.scrollTop === 0 ? !0 : t > 0 && s.scrollTop + s.clientHeight === s.scrollHeight : t < 0 && s.scrollLeft === 0 ? !0 : t > 0 && s.scrollLeft + s.clientWidth === s.scrollWidth;
  }

  return !0;
}

function je(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}

function le(e) {
  Ce !== !0 && (Ce = !0, requestAnimationFrame(function () {
    Ce = !1;
    var o = e.target.height,
        _document$scrollingEl = document.scrollingElement,
        n = _document$scrollingEl.clientHeight,
        l = _document$scrollingEl.scrollTop;
    (Z === void 0 || o !== window.innerHeight) && (Z = n - o, document.scrollingElement.scrollTop = l), l > Z && (document.scrollingElement.scrollTop -= Math.ceil((l - Z) / 8));
  }));
}

function Ue(e) {
  var o = document.body,
      n = window.visualViewport !== void 0;

  if (e === "add") {
    var _window$getComputedSt = window.getComputedStyle(o),
        l = _window$getComputedSt.overflowY,
        t = _window$getComputedSt.overflowX;

    qe = rt(window), ke = at(window), Xe = o.style.left, Ye = o.style.top, o.style.left = "-".concat(qe, "px"), o.style.top = "-".concat(ke, "px"), t !== "hidden" && (t === "scroll" || o.scrollWidth > window.innerWidth) && o.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || o.scrollHeight > window.innerHeight) && o.classList.add("q-body--force-scrollbar-y"), o.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = !0, _indexBcc5be.s.is.ios === !0 && (n === !0 ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", le, _indexBcc5be.m.passiveCapture), window.visualViewport.addEventListener("scroll", le, _indexBcc5be.m.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", je, _indexBcc5be.m.passiveCapture));
  }

  _indexBcc5be.s.is.desktop === !0 && _indexBcc5be.s.is.mac === !0 && window["".concat(e, "EventListener")]("wheel", io, _indexBcc5be.m.notPassive), e === "remove" && (_indexBcc5be.s.is.ios === !0 && (n === !0 ? (window.visualViewport.removeEventListener("resize", le, _indexBcc5be.m.passiveCapture), window.visualViewport.removeEventListener("scroll", le, _indexBcc5be.m.passiveCapture)) : window.removeEventListener("scroll", je, _indexBcc5be.m.passiveCapture)), o.classList.remove("q-body--prevent-scroll"), o.classList.remove("q-body--force-scrollbar-x"), o.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = !1, o.style.left = Xe, o.style.top = Ye, window.scrollTo(qe, ke), Z = void 0);
}

function ao(e) {
  var o = "add";

  if (e === !0) {
    if (J++, Y !== void 0) {
      clearTimeout(Y), Y = void 0;
      return;
    }

    if (J > 1) return;
  } else {
    if (J === 0 || (J--, J > 0)) return;

    if (o = "remove", _indexBcc5be.s.is.ios === !0 && _indexBcc5be.s.is.nativeMobile === !0) {
      clearTimeout(Y), Y = setTimeout(function () {
        Ue(o), Y = void 0;
      }, 100);
      return;
    }
  }

  Ue(o);
}

function ro() {
  var e;
  return {
    preventBodyScroll: function preventBodyScroll(o) {
      o !== e && (e !== void 0 || o === !0) && (e = o, ao(o));
    }
  };
}

function uo() {
  var e;
  var o = (0, _indexBcc5be.g)();

  function n() {
    clearTimeout(e);
  }

  return (0, _indexBcc5be.v)(n), (0, _indexBcc5be.k)(n), {
    removeTimeout: n,
    registerTimeout: function registerTimeout(l, t) {
      clearTimeout(e), (0, _QBtnFb5a01ff.a)(o) === !1 && (e = setTimeout(l, t));
    }
  };
}

var He = {
  left: !0,
  right: !0,
  up: !0,
  down: !0,
  horizontal: !0,
  vertical: !0
},
    so = Object.keys(He);
He.all = !0;

function Ke(e) {
  var o = {};

  var _iterator = _createForOfIteratorHelper(so),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var n = _step.value;
      e[n] === !0 && (o[n] = !0);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return Object.keys(o).length === 0 ? He : (o.horizontal === !0 ? o.left = o.right = !0 : o.left === !0 && o.right === !0 && (o.horizontal = !0), o.vertical === !0 ? o.up = o.down = !0 : o.up === !0 && o.down === !0 && (o.vertical = !0), o.horizontal === !0 && o.vertical === !0 && (o.all = !0), o);
}

function Ge(e, o) {
  return o.event === void 0 && e.target !== void 0 && e.target.draggable !== !0 && typeof o.handler == "function" && e.target.nodeName.toUpperCase() !== "INPUT" && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(o.uid) === -1);
}

function co() {
  if (window.getSelection !== void 0) {
    var e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), _indexBcc5be.P.is.mobile !== !0 && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}

function Le(e, o, n) {
  var l = (0, _indexBcc5be.C)(e);
  var t,
      i = l.left - o.event.x,
      s = l.top - o.event.y,
      f = Math.abs(i),
      d = Math.abs(s);
  var c = o.direction;
  c.horizontal === !0 && c.vertical !== !0 ? t = i < 0 ? "left" : "right" : c.horizontal !== !0 && c.vertical === !0 ? t = s < 0 ? "up" : "down" : c.up === !0 && s < 0 ? (t = "up", f > d && (c.left === !0 && i < 0 ? t = "left" : c.right === !0 && i > 0 && (t = "right"))) : c.down === !0 && s > 0 ? (t = "down", f > d && (c.left === !0 && i < 0 ? t = "left" : c.right === !0 && i > 0 && (t = "right"))) : c.left === !0 && i < 0 ? (t = "left", f < d && (c.up === !0 && s < 0 ? t = "up" : c.down === !0 && s > 0 && (t = "down"))) : c.right === !0 && i > 0 && (t = "right", f < d && (c.up === !0 && s < 0 ? t = "up" : c.down === !0 && s > 0 && (t = "down")));
  var a = !1;

  if (t === void 0 && n === !1) {
    if (o.event.isFirst === !0 || o.event.lastDir === void 0) return {};
    t = o.event.lastDir, a = !0, t === "left" || t === "right" ? (l.left -= i, f = 0, i = 0) : (l.top -= s, d = 0, s = 0);
  }

  return {
    synthetic: a,
    payload: {
      evt: e,
      touch: o.event.mouse !== !0,
      mouse: o.event.mouse === !0,
      position: l,
      direction: t,
      isFirst: o.event.isFirst,
      isFinal: n === !0,
      duration: Date.now() - o.event.time,
      distance: {
        x: f,
        y: d
      },
      offset: {
        x: i,
        y: s
      },
      delta: {
        x: l.left - o.event.lastX,
        y: l.top - o.event.lastY
      }
    }
  };
}

var fo = 0;
var xe = (0, _renderA.b)({
  name: "touch-pan",
  beforeMount: function beforeMount(e, _ref9) {
    var o = _ref9.value,
        n = _ref9.modifiers;
    if (n.mouse !== !0 && _indexBcc5be.s.has.touch !== !0) return;

    function l(i, s) {
      n.mouse === !0 && s === !0 ? (0, _indexBcc5be.t)(i) : (n.stop === !0 && (0, _indexBcc5be.B)(i), n.prevent === !0 && (0, _indexBcc5be.A)(i));
    }

    var t = {
      uid: "qvtp_" + fo++,
      handler: o,
      modifiers: n,
      direction: Ke(n),
      noop: _indexBcc5be.n,
      mouseStart: function mouseStart(i) {
        Ge(i, t) && (0, _indexBcc5be.x)(i) && ((0, _indexBcc5be.y)(t, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]), t.start(i, !0));
      },
      touchStart: function touchStart(i) {
        if (Ge(i, t)) {
          var s = i.target;
          (0, _indexBcc5be.y)(t, "temp", [[s, "touchmove", "move", "notPassiveCapture"], [s, "touchcancel", "end", "passiveCapture"], [s, "touchend", "end", "passiveCapture"]]), t.start(i);
        }
      },
      start: function start(i, s) {
        if (_indexBcc5be.s.is.firefox === !0 && (0, _indexBcc5be.z)(e, !0), t.lastEvt = i, s === !0 || n.stop === !0) {
          if (t.direction.all !== !0 && (s !== !0 || t.modifiers.mouseAllDir !== !0 && t.modifiers.mousealldir !== !0)) {
            var c = i.type.indexOf("mouse") > -1 ? new MouseEvent(i.type, i) : new TouchEvent(i.type, i);
            i.defaultPrevented === !0 && (0, _indexBcc5be.A)(c), i.cancelBubble === !0 && (0, _indexBcc5be.B)(c), Object.assign(c, {
              qKeyEvent: i.qKeyEvent,
              qClickOutside: i.qClickOutside,
              qAnchorHandled: i.qAnchorHandled,
              qClonedBy: i.qClonedBy === void 0 ? [t.uid] : i.qClonedBy.concat(t.uid)
            }), t.initialEvent = {
              target: i.target,
              event: c
            };
          }

          (0, _indexBcc5be.B)(i);
        }

        var _Se = (0, _indexBcc5be.C)(i),
            f = _Se.left,
            d = _Se.top;

        t.event = {
          x: f,
          y: d,
          time: Date.now(),
          mouse: s === !0,
          detected: !1,
          isFirst: !0,
          isFinal: !1,
          lastX: f,
          lastY: d
        };
      },
      move: function move(i) {
        if (t.event === void 0) return;
        var s = (0, _indexBcc5be.C)(i),
            f = s.left - t.event.x,
            d = s.top - t.event.y;
        if (f === 0 && d === 0) return;
        t.lastEvt = i;

        var c = t.event.mouse === !0,
            a = function a() {
          l(i, c);
          var m;
          n.preserveCursor !== !0 && n.preservecursor !== !0 && (m = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), c === !0 && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), co(), t.styleCleanup = function (h) {
            if (t.styleCleanup = void 0, m !== void 0 && (document.documentElement.style.cursor = m), document.body.classList.remove("non-selectable"), c === !0) {
              var T = function T() {
                document.body.classList.remove("no-pointer-events--children");
              };

              h !== void 0 ? setTimeout(function () {
                T(), h();
              }, 50) : T();
            } else h !== void 0 && h();
          };
        };

        if (t.event.detected === !0) {
          t.event.isFirst !== !0 && l(i, t.event.mouse);

          var _Le = Le(i, t, !1),
              m = _Le.payload,
              h = _Le.synthetic;

          m !== void 0 && (t.handler(m) === !1 ? t.end(i) : (t.styleCleanup === void 0 && t.event.isFirst === !0 && a(), t.event.lastX = m.position.left, t.event.lastY = m.position.top, t.event.lastDir = h === !0 ? void 0 : m.direction, t.event.isFirst = !1));
          return;
        }

        if (t.direction.all === !0 || c === !0 && (t.modifiers.mouseAllDir === !0 || t.modifiers.mousealldir === !0)) {
          a(), t.event.detected = !0, t.move(i);
          return;
        }

        var w = Math.abs(f),
            q = Math.abs(d);
        w !== q && (t.direction.horizontal === !0 && w > q || t.direction.vertical === !0 && w < q || t.direction.up === !0 && w < q && d < 0 || t.direction.down === !0 && w < q && d > 0 || t.direction.left === !0 && w > q && f < 0 || t.direction.right === !0 && w > q && f > 0 ? (t.event.detected = !0, t.move(i)) : t.end(i, !0));
      },
      end: function end(i, s) {
        if (t.event !== void 0) {
          if ((0, _indexBcc5be.D)(t, "temp"), _indexBcc5be.s.is.firefox === !0 && (0, _indexBcc5be.z)(e, !1), s === !0) t.styleCleanup !== void 0 && t.styleCleanup(), t.event.detected !== !0 && t.initialEvent !== void 0 && t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if (t.event.detected === !0) {
            t.event.isFirst === !0 && t.handler(Le(i === void 0 ? t.lastEvt : i, t).payload);

            var _Le2 = Le(i === void 0 ? t.lastEvt : i, t, !0),
                f = _Le2.payload,
                d = function d() {
              t.handler(f);
            };

            t.styleCleanup !== void 0 ? t.styleCleanup(d) : d();
          }
          t.event = void 0, t.initialEvent = void 0, t.lastEvt = void 0;
        }
      }
    };

    if (e.__qtouchpan = t, n.mouse === !0) {
      var i = n.mouseCapture === !0 || n.mousecapture === !0 ? "Capture" : "";
      (0, _indexBcc5be.y)(t, "main", [[e, "mousedown", "mouseStart", "passive".concat(i)]]);
    }

    _indexBcc5be.s.has.touch === !0 && (0, _indexBcc5be.y)(t, "main", [[e, "touchstart", "touchStart", "passive".concat(n.capture === !0 ? "Capture" : "")], [e, "touchmove", "noop", "notPassiveCapture"]]);
  },
  updated: function updated(e, o) {
    var n = e.__qtouchpan;
    n !== void 0 && (o.oldValue !== o.value && (typeof value != "function" && n.end(), n.handler = o.value), n.direction = Ke(o.modifiers));
  },
  beforeUnmount: function beforeUnmount(e) {
    var o = e.__qtouchpan;
    o !== void 0 && (o.event !== void 0 && o.end(), (0, _indexBcc5be.D)(o, "main"), (0, _indexBcc5be.D)(o, "temp"), _indexBcc5be.s.is.firefox === !0 && (0, _indexBcc5be.z)(e, !1), o.styleCleanup !== void 0 && o.styleCleanup(), delete e.__qtouchpan);
  }
});

function ae(e, o, n) {
  return n <= o ? o : Math.min(n, Math.max(o, e));
}

var Je = 150;
var vo = (0, _renderA.c)({
  name: "QDrawer",
  inheritAttrs: !1,
  props: _objectSpread(_objectSpread(_objectSpread({}, Jt), Ve), {}, {
    side: {
      type: String,
      default: "left",
      validator: function validator(e) {
        return ["left", "right"].includes(e);
      }
    },
    width: {
      type: Number,
      default: 300
    },
    mini: Boolean,
    miniToOverlay: Boolean,
    miniWidth: {
      type: Number,
      default: 57
    },
    breakpoint: {
      type: Number,
      default: 1023
    },
    showIfAbove: Boolean,
    behavior: {
      type: String,
      validator: function validator(e) {
        return ["default", "desktop", "mobile"].includes(e);
      },
      default: "default"
    },
    bordered: Boolean,
    elevated: Boolean,
    overlay: Boolean,
    persistent: Boolean,
    noSwipeOpen: Boolean,
    noSwipeClose: Boolean,
    noSwipeBackdrop: Boolean
  }),
  emits: [].concat(Zt, ["onLayout", "miniState"]),
  setup: function setup(e, _ref10) {
    var o = _ref10.slots,
        n = _ref10.emit,
        l = _ref10.attrs;

    var t = (0, _indexBcc5be.g)(),
        i = t.proxy.$q,
        s = Oe(e, i),
        _ro = ro(),
        f = _ro.preventBodyScroll,
        _uo = uo(),
        d = _uo.registerTimeout,
        c = _uo.removeTimeout,
        a = (0, _indexBcc5be.a)(_indexBcc5be.q, _indexBcc5be.p);

    if (a === _indexBcc5be.p) return console.error("QDrawer needs to be child of QLayout"), _indexBcc5be.p;
    var w, q, m;
    var h = (0, _indexBcc5be.r)(e.behavior === "mobile" || e.behavior !== "desktop" && a.totalWidth.value <= e.breakpoint),
        T = (0, _indexBcc5be.c)(function () {
      return e.mini === !0 && h.value !== !0;
    }),
        L = (0, _indexBcc5be.c)(function () {
      return T.value === !0 ? e.miniWidth : e.width;
    }),
        g = (0, _indexBcc5be.r)(e.showIfAbove === !0 && h.value === !1 ? !0 : e.modelValue === !0),
        u = (0, _indexBcc5be.c)(function () {
      return e.persistent !== !0 && (h.value === !0 || ut.value === !0);
    });

    function p(r, y) {
      if (W(), r !== !1 && a.animate(), $(0), h.value === !0) {
        var _ = a.instances[ee.value];
        _ !== void 0 && _.belowBreakpoint === !0 && _.hide(!1), D(1), a.isContainer.value !== !0 && f(!0);
      } else D(0), r !== !1 && me(!1);

      d(function () {
        r !== !1 && me(!0), y !== !0 && n("show", r);
      }, Je);
    }

    function b(r, y) {
      K(), r !== !1 && a.animate(), D(0), $(I.value * L.value), he(), y !== !0 ? d(function () {
        n("hide", r);
      }, Je) : c();
    }

    var _eo = eo({
      showing: g,
      hideOnRouteChange: u,
      handleShow: p,
      handleHide: b
    }),
        x = _eo.show,
        B = _eo.hide,
        _Gt = Gt(g, B, u),
        W = _Gt.addToHistory,
        K = _Gt.removeFromHistory,
        F = {
      belowBreakpoint: h,
      hide: B
    },
        M = (0, _indexBcc5be.c)(function () {
      return e.side === "right";
    }),
        I = (0, _indexBcc5be.c)(function () {
      return (i.lang.rtl === !0 ? -1 : 1) * (M.value === !0 ? 1 : -1);
    }),
        Me = (0, _indexBcc5be.r)(0),
        X = (0, _indexBcc5be.r)(!1),
        ce = (0, _indexBcc5be.r)(!1),
        Qe = (0, _indexBcc5be.r)(L.value * I.value),
        ee = (0, _indexBcc5be.c)(function () {
      return M.value === !0 ? "left" : "right";
    }),
        de = (0, _indexBcc5be.c)(function () {
      return g.value === !0 && h.value === !1 && e.overlay === !1 ? e.miniToOverlay === !0 ? e.miniWidth : L.value : 0;
    }),
        fe = (0, _indexBcc5be.c)(function () {
      return e.overlay === !0 || e.miniToOverlay === !0 || a.view.value.indexOf(M.value ? "R" : "L") > -1 || i.platform.is.ios === !0 && a.isContainer.value === !0;
    }),
        G = (0, _indexBcc5be.c)(function () {
      return e.overlay === !1 && g.value === !0 && h.value === !1;
    }),
        ut = (0, _indexBcc5be.c)(function () {
      return e.overlay === !0 && g.value === !0 && h.value === !1;
    }),
        st = (0, _indexBcc5be.c)(function () {
      return "fullscreen q-drawer__backdrop" + (g.value === !1 && X.value === !1 ? " hidden" : "");
    }),
        ct = (0, _indexBcc5be.c)(function () {
      return {
        backgroundColor: "rgba(0,0,0,".concat(Me.value * .4, ")")
      };
    }),
        De = (0, _indexBcc5be.c)(function () {
      return M.value === !0 ? a.rows.value.top[2] === "r" : a.rows.value.top[0] === "l";
    }),
        dt = (0, _indexBcc5be.c)(function () {
      return M.value === !0 ? a.rows.value.bottom[2] === "r" : a.rows.value.bottom[0] === "l";
    }),
        ft = (0, _indexBcc5be.c)(function () {
      var r = {};
      return a.header.space === !0 && De.value === !1 && (fe.value === !0 ? r.top = "".concat(a.header.offset, "px") : a.header.space === !0 && (r.top = "".concat(a.header.size, "px"))), a.footer.space === !0 && dt.value === !1 && (fe.value === !0 ? r.bottom = "".concat(a.footer.offset, "px") : a.footer.space === !0 && (r.bottom = "".concat(a.footer.size, "px"))), r;
    }),
        vt = (0, _indexBcc5be.c)(function () {
      var r = {
        width: "".concat(L.value, "px"),
        transform: "translateX(".concat(Qe.value, "px)")
      };
      return h.value === !0 ? r : Object.assign(r, ft.value);
    }),
        mt = (0, _indexBcc5be.c)(function () {
      return "q-drawer__content fit " + (a.isContainer.value !== !0 ? "scroll" : "overflow-auto");
    }),
        ht = (0, _indexBcc5be.c)(function () {
      return "q-drawer q-drawer--".concat(e.side) + (ce.value === !0 ? " q-drawer--mini-animate" : "") + (e.bordered === !0 ? " q-drawer--bordered" : "") + (s.value === !0 ? " q-drawer--dark q-dark" : "") + (X.value === !0 ? " no-transition" : g.value === !0 ? "" : " q-layout--prevent-focus") + (h.value === !0 ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : " q-drawer--".concat(T.value === !0 ? "mini" : "standard") + (fe.value === !0 || G.value !== !0 ? " fixed" : "") + (e.overlay === !0 || e.miniToOverlay === !0 ? " q-drawer--on-top" : "") + (De.value === !0 ? " q-drawer--top-padding" : ""));
    }),
        pt = (0, _indexBcc5be.c)(function () {
      var _ref11;

      var r = i.lang.rtl === !0 ? e.side : ee.value;
      return [[xe, wt, void 0, (_ref11 = {}, _defineProperty(_ref11, r, !0), _defineProperty(_ref11, "mouse", !0), _ref11)]];
    }),
        bt = (0, _indexBcc5be.c)(function () {
      var _ref12;

      var r = i.lang.rtl === !0 ? ee.value : e.side;
      return [[xe, Re, void 0, (_ref12 = {}, _defineProperty(_ref12, r, !0), _defineProperty(_ref12, "mouse", !0), _ref12)]];
    }),
        yt = (0, _indexBcc5be.c)(function () {
      var _ref13;

      var r = i.lang.rtl === !0 ? ee.value : e.side;
      return [[xe, Re, void 0, (_ref13 = {}, _defineProperty(_ref13, r, !0), _defineProperty(_ref13, "mouse", !0), _defineProperty(_ref13, "mouseAllDir", !0), _ref13)]];
    });

    function ve() {
      qt(h, e.behavior === "mobile" || e.behavior !== "desktop" && a.totalWidth.value <= e.breakpoint);
    }

    (0, _indexBcc5be.w)(h, function (r) {
      r === !0 ? (w = g.value, g.value === !0 && B(!1)) : e.overlay === !1 && e.behavior !== "mobile" && w !== !1 && (g.value === !0 ? ($(0), D(0), he()) : x(!1));
    }), (0, _indexBcc5be.w)(function () {
      return e.side;
    }, function (r, y) {
      a.instances[y] === F && (a.instances[y] = void 0, a[y].space = !1, a[y].offset = 0), a.instances[r] = F, a[r].size = L.value, a[r].space = G.value, a[r].offset = de.value;
    }), (0, _indexBcc5be.w)(a.totalWidth, function () {
      (a.isContainer.value === !0 || document.qScrollPrevented !== !0) && ve();
    }), (0, _indexBcc5be.w)(function () {
      return e.behavior + e.breakpoint;
    }, ve), (0, _indexBcc5be.w)(a.isContainer, function (r) {
      g.value === !0 && f(r !== !0), r === !0 && ve();
    }), (0, _indexBcc5be.w)(a.scrollbarWidth, function () {
      $(g.value === !0 ? 0 : void 0);
    }), (0, _indexBcc5be.w)(de, function (r) {
      R("offset", r);
    }), (0, _indexBcc5be.w)(G, function (r) {
      n("onLayout", r), R("space", r);
    }), (0, _indexBcc5be.w)(M, function () {
      $();
    }), (0, _indexBcc5be.w)(L, function (r) {
      $(), pe(e.miniToOverlay, r);
    }), (0, _indexBcc5be.w)(function () {
      return e.miniToOverlay;
    }, function (r) {
      pe(r, L.value);
    }), (0, _indexBcc5be.w)(function () {
      return i.lang.rtl;
    }, function () {
      $();
    }), (0, _indexBcc5be.w)(function () {
      return e.mini;
    }, function () {
      e.modelValue === !0 && (gt(), a.animate());
    }), (0, _indexBcc5be.w)(T, function (r) {
      n("miniState", r);
    });

    function $(r) {
      r === void 0 ? (0, _indexBcc5be.l)(function () {
        r = g.value === !0 ? 0 : L.value, $(I.value * r);
      }) : (a.isContainer.value === !0 && M.value === !0 && (h.value === !0 || Math.abs(r) === L.value) && (r += I.value * a.scrollbarWidth.value), Qe.value = r);
    }

    function D(r) {
      Me.value = r;
    }

    function me(r) {
      var y = r === !0 ? "remove" : a.isContainer.value !== !0 ? "add" : "";
      y !== "" && document.body.classList[y]("q-body--drawer-toggle");
    }

    function gt() {
      clearTimeout(q), t.proxy && t.proxy.$el && t.proxy.$el.classList.add("q-drawer--mini-animate"), ce.value = !0, q = setTimeout(function () {
        ce.value = !1, t && t.proxy && t.proxy.$el && t.proxy.$el.classList.remove("q-drawer--mini-animate");
      }, 150);
    }

    function wt(r) {
      if (g.value !== !1) return;

      var y = L.value,
          _ = ae(r.distance.x, 0, y);

      if (r.isFinal === !0) {
        _ >= Math.min(75, y) === !0 ? x() : (a.animate(), D(0), $(I.value * y)), X.value = !1;
        return;
      }

      $((i.lang.rtl === !0 ? M.value !== !0 : M.value) ? Math.max(y - _, 0) : Math.min(0, _ - y)), D(ae(_ / y, 0, 1)), r.isFirst === !0 && (X.value = !0);
    }

    function Re(r) {
      if (g.value !== !0) return;

      var y = L.value,
          _ = r.direction === e.side,
          te = (i.lang.rtl === !0 ? _ !== !0 : _) ? ae(r.distance.x, 0, y) : 0;

      if (r.isFinal === !0) {
        Math.abs(te) < Math.min(75, y) === !0 ? (a.animate(), D(1), $(0)) : B(), X.value = !1;
        return;
      }

      $(I.value * te), D(ae(1 - te / y, 0, 1)), r.isFirst === !0 && (X.value = !0);
    }

    function he() {
      f(!1), me(!0);
    }

    function R(r, y) {
      a.update(e.side, r, y);
    }

    function qt(r, y) {
      r.value !== y && (r.value = y);
    }

    function pe(r, y) {
      R("size", r === !0 ? e.miniWidth : y);
    }

    return a.instances[e.side] = F, pe(e.miniToOverlay, L.value), R("space", G.value), R("offset", de.value), e.showIfAbove === !0 && e.modelValue !== !0 && g.value === !0 && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", !0), (0, _indexBcc5be.o)(function () {
      n("onLayout", G.value), n("miniState", T.value), w = e.showIfAbove === !0;

      var r = function r() {
        (g.value === !0 ? p : b)(!1, !0);
      };

      if (a.totalWidth.value !== 0) {
        (0, _indexBcc5be.l)(r);
        return;
      }

      m = (0, _indexBcc5be.w)(a.totalWidth, function () {
        m(), m = void 0, g.value === !1 && e.showIfAbove === !0 && h.value === !1 ? x(!1) : r();
      });
    }), (0, _indexBcc5be.k)(function () {
      m !== void 0 && m(), clearTimeout(q), g.value === !0 && he(), a.instances[e.side] === F && (a.instances[e.side] = void 0, R("size", 0), R("offset", 0), R("space", !1));
    }), function () {
      var r = [];
      h.value === !0 && (e.noSwipeOpen === !1 && r.push((0, _indexBcc5be.E)((0, _indexBcc5be.h)("div", {
        key: "open",
        class: "q-drawer__opener fixed-".concat(e.side),
        "aria-hidden": "true"
      }), pt.value)), r.push((0, _renderA.d)("div", {
        ref: "backdrop",
        class: st.value,
        style: ct.value,
        "aria-hidden": "true",
        onClick: B
      }, void 0, "backdrop", e.noSwipeBackdrop !== !0 && g.value === !0, function () {
        return yt.value;
      })));
      var y = T.value === !0 && o.mini !== void 0,
          _ = [(0, _indexBcc5be.h)("div", _objectSpread(_objectSpread({}, l), {}, {
        key: "" + y,
        class: [mt.value, l.class]
      }), y === !0 ? o.mini() : (0, _renderA.h)(o.default))];
      return e.elevated === !0 && g.value === !0 && _.push((0, _indexBcc5be.h)("div", {
        class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
      })), r.push((0, _renderA.d)("aside", {
        ref: "content",
        class: ht.value,
        style: vt.value
      }, _, "contentclose", e.noSwipeClose !== !0 && h.value === !0, function () {
        return bt.value;
      })), (0, _indexBcc5be.h)("div", {
        class: "q-drawer-container"
      }, r);
    };
  }
}),
    mo = (0, _renderA.c)({
  name: "QPageContainer",
  setup: function setup(e, _ref14) {
    var o = _ref14.slots;

    var _H3 = (0, _indexBcc5be.g)(),
        n = _H3.proxy.$q,
        l = (0, _indexBcc5be.a)(_indexBcc5be.q, _indexBcc5be.p);

    if (l === _indexBcc5be.p) return console.error("QPageContainer needs to be child of QLayout"), _indexBcc5be.p;
    (0, _indexBcc5be.G)(_indexBcc5be.I, !0);
    var t = (0, _indexBcc5be.c)(function () {
      var i = {};
      return l.header.space === !0 && (i.paddingTop = "".concat(l.header.size, "px")), l.right.space === !0 && (i["padding".concat(n.lang.rtl === !0 ? "Left" : "Right")] = "".concat(l.right.size, "px")), l.footer.space === !0 && (i.paddingBottom = "".concat(l.footer.size, "px")), l.left.space === !0 && (i["padding".concat(n.lang.rtl === !0 ? "Right" : "Left")] = "".concat(l.left.size, "px")), i;
    });
    return function () {
      return (0, _indexBcc5be.h)("div", {
        class: "q-page-container",
        style: t.value
      }, (0, _renderA.h)(o.default));
    };
  }
});
var Ze = _indexBcc5be.m.passive,
    ho = ["both", "horizontal", "vertical"];
var po = (0, _renderA.c)({
  name: "QScrollObserver",
  props: {
    axis: {
      type: String,
      validator: function validator(e) {
        return ho.includes(e);
      },
      default: "vertical"
    },
    debounce: [String, Number],
    scrollTarget: {
      default: void 0
    }
  },
  emits: ["scroll"],
  setup: function setup(e, _ref15) {
    var o = _ref15.emit;
    var n = {
      position: {
        top: 0,
        left: 0
      },
      direction: "down",
      directionChanged: !1,
      delta: {
        top: 0,
        left: 0
      },
      inflectionPoint: {
        top: 0,
        left: 0
      }
    };
    var _l2 = null,
        t,
        i;
    (0, _indexBcc5be.w)(function () {
      return e.scrollTarget;
    }, function () {
      d(), f();
    });

    function s() {
      _l2 !== null && _l2();
      var w = Math.max(0, at(t)),
          q = rt(t),
          m = {
        top: w - n.position.top,
        left: q - n.position.left
      };
      if (e.axis === "vertical" && m.top === 0 || e.axis === "horizontal" && m.left === 0) return;
      var h = Math.abs(m.top) >= Math.abs(m.left) ? m.top < 0 ? "up" : "down" : m.left < 0 ? "left" : "right";
      n.position = {
        top: w,
        left: q
      }, n.directionChanged = n.direction !== h, n.delta = m, n.directionChanged === !0 && (n.direction = h, n.inflectionPoint = n.position), o("scroll", _objectSpread({}, n));
    }

    function f() {
      t = oo(i, e.scrollTarget), t.addEventListener("scroll", c, Ze), c(!0);
    }

    function d() {
      t !== void 0 && (t.removeEventListener("scroll", c, Ze), t = void 0);
    }

    function c(w) {
      if (w === !0 || e.debounce === 0 || e.debounce === "0") s();else if (_l2 === null) {
        var _ref16 = e.debounce ? [setTimeout(s, e.debounce), clearTimeout] : [requestAnimationFrame(s), cancelAnimationFrame],
            _ref17 = _slicedToArray(_ref16, 2),
            q = _ref17[0],
            m = _ref17[1];

        _l2 = function l() {
          m(q), _l2 = null;
        };
      }
    }

    var _H4 = (0, _indexBcc5be.g)(),
        a = _H4.proxy;

    return (0, _indexBcc5be.w)(function () {
      return a.$q.lang.rtl;
    }, s), (0, _indexBcc5be.o)(function () {
      i = a.$el.parentNode, f();
    }), (0, _indexBcc5be.k)(function () {
      _l2 !== null && _l2(), d();
    }), Object.assign(a, {
      trigger: c,
      getPosition: function getPosition() {
        return n;
      }
    }), _indexBcc5be.n;
  }
}),
    bo = (0, _renderA.c)({
  name: "QLayout",
  props: {
    container: Boolean,
    view: {
      type: String,
      default: "hhh lpr fff",
      validator: function validator(e) {
        return /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase());
      }
    },
    onScroll: Function,
    onScrollHeight: Function,
    onResize: Function
  },
  setup: function setup(e, _ref18) {
    var o = _ref18.slots,
        n = _ref18.emit;

    var _H5 = (0, _indexBcc5be.g)(),
        l = _H5.proxy.$q,
        t = (0, _indexBcc5be.r)(null),
        i = (0, _indexBcc5be.r)(l.screen.height),
        s = (0, _indexBcc5be.r)(e.container === !0 ? 0 : l.screen.width),
        f = (0, _indexBcc5be.r)({
      position: 0,
      direction: "down",
      inflectionPoint: 0
    }),
        d = (0, _indexBcc5be.r)(0),
        c = (0, _indexBcc5be.r)(_indexBcc5be.j.value === !0 ? 0 : we()),
        a = (0, _indexBcc5be.c)(function () {
      return "q-layout q-layout--" + (e.container === !0 ? "containerized" : "standard");
    }),
        w = (0, _indexBcc5be.c)(function () {
      return e.container === !1 ? {
        minHeight: l.screen.height + "px"
      } : null;
    }),
        q = (0, _indexBcc5be.c)(function () {
      return c.value !== 0 ? _defineProperty({}, l.lang.rtl === !0 ? "left" : "right", "".concat(c.value, "px")) : null;
    }),
        m = (0, _indexBcc5be.c)(function () {
      var _ref20;

      return c.value !== 0 ? (_ref20 = {}, _defineProperty(_ref20, l.lang.rtl === !0 ? "right" : "left", 0), _defineProperty(_ref20, l.lang.rtl === !0 ? "left" : "right", "-".concat(c.value, "px")), _defineProperty(_ref20, "width", "calc(100% + ".concat(c.value, "px)")), _ref20) : null;
    });

    function h(b) {
      if (e.container === !0 || document.qScrollPrevented !== !0) {
        var x = {
          position: b.position.top,
          direction: b.direction,
          directionChanged: b.directionChanged,
          inflectionPoint: b.inflectionPoint.top,
          delta: b.delta.top
        };
        f.value = x, e.onScroll !== void 0 && n("scroll", x);
      }
    }

    function T(b) {
      var x = b.height,
          B = b.width;
      var W = !1;
      i.value !== x && (W = !0, i.value = x, e.onScrollHeight !== void 0 && n("scrollHeight", x), g()), s.value !== B && (W = !0, s.value = B), W === !0 && e.onResize !== void 0 && n("resize", b);
    }

    function L(_ref21) {
      var b = _ref21.height;
      d.value !== b && (d.value = b, g());
    }

    function g() {
      if (e.container === !0) {
        var b = i.value > d.value ? we() : 0;
        c.value !== b && (c.value = b);
      }
    }

    var u;
    var p = {
      instances: {},
      view: (0, _indexBcc5be.c)(function () {
        return e.view;
      }),
      isContainer: (0, _indexBcc5be.c)(function () {
        return e.container;
      }),
      rootRef: t,
      height: i,
      containerHeight: d,
      scrollbarWidth: c,
      totalWidth: (0, _indexBcc5be.c)(function () {
        return s.value + c.value;
      }),
      rows: (0, _indexBcc5be.c)(function () {
        var b = e.view.toLowerCase().split(" ");
        return {
          top: b[0].split(""),
          middle: b[1].split(""),
          bottom: b[2].split("")
        };
      }),
      header: (0, _indexBcc5be.J)({
        size: 0,
        offset: 0,
        space: !1
      }),
      right: (0, _indexBcc5be.J)({
        size: 300,
        offset: 0,
        space: !1
      }),
      footer: (0, _indexBcc5be.J)({
        size: 0,
        offset: 0,
        space: !1
      }),
      left: (0, _indexBcc5be.J)({
        size: 300,
        offset: 0,
        space: !1
      }),
      scroll: f,
      animate: function animate() {
        u !== void 0 ? clearTimeout(u) : document.body.classList.add("q-body--layout-animate"), u = setTimeout(function () {
          document.body.classList.remove("q-body--layout-animate"), u = void 0;
        }, 155);
      },
      update: function update(b, x, B) {
        p[b][x] = B;
      }
    };

    if ((0, _indexBcc5be.G)(_indexBcc5be.q, p), we() > 0) {
      var B = function B() {
        b = null, x.classList.remove("hide-scrollbar");
      },
          W = function W() {
        if (b === null) {
          if (x.scrollHeight > l.screen.height) return;
          x.classList.add("hide-scrollbar");
        } else clearTimeout(b);

        b = setTimeout(B, 300);
      },
          K = function K(F) {
        b !== null && F === "remove" && (clearTimeout(b), B()), window["".concat(F, "EventListener")]("resize", W);
      },
          b = null;

      var x = document.body;
      (0, _indexBcc5be.w)(function () {
        return e.container !== !0 ? "add" : "remove";
      }, K), e.container !== !0 && K("add"), (0, _indexBcc5be.b)(function () {
        K("remove");
      });
    }

    return function () {
      var b = (0, _renderA.e)(o.default, [(0, _indexBcc5be.h)(po, {
        onScroll: h
      }), (0, _indexBcc5be.h)(Ee, {
        onResize: T
      })]),
          x = (0, _indexBcc5be.h)("div", {
        class: a.value,
        style: w.value,
        ref: e.container === !0 ? void 0 : t,
        tabindex: -1
      }, b);
      return e.container === !0 ? (0, _indexBcc5be.h)("div", {
        class: "q-layout-container overflow-hidden",
        ref: t
      }, [(0, _indexBcc5be.h)(Ee, {
        onResize: L
      }), (0, _indexBcc5be.h)("div", {
        class: "absolute-full",
        style: q.value
      }, [(0, _indexBcc5be.h)("div", {
        class: "scroll",
        style: m.value
      }, [x])])]) : x;
    };
  }
}),
    et = (0, _renderA.c)({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup: function setup(e, _ref22) {
    var o = _ref22.slots;
    var n = (0, _indexBcc5be.c)(function () {
      return "q-item__section column q-item__section--".concat(e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? "side" : "main") + (e.top === !0 ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === !0 ? " q-item__section--avatar" : "") + (e.thumbnail === !0 ? " q-item__section--thumbnail" : "") + (e.noWrap === !0 ? " q-item__section--nowrap" : "");
    });
    return function () {
      return (0, _indexBcc5be.h)("div", {
        class: n.value
      }, (0, _renderA.h)(o.default));
    };
  }
}),
    yo = (0, _renderA.c)({
  name: "QItem",
  props: _objectSpread(_objectSpread(_objectSpread({}, Ve), _QBtnFb5a01ff.u), {}, {
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  }),
  emits: ["click", "keyup"],
  setup: function setup(e, _ref23) {
    var o = _ref23.slots,
        n = _ref23.emit;

    var _H6 = (0, _indexBcc5be.g)(),
        l = _H6.proxy.$q,
        t = Oe(e, l),
        _St = (0, _QBtnFb5a01ff.b)(),
        i = _St.hasLink,
        s = _St.linkAttrs,
        f = _St.linkClass,
        d = _St.linkTag,
        c = _St.navigateOnClick,
        a = (0, _indexBcc5be.r)(null),
        w = (0, _indexBcc5be.r)(null),
        q = (0, _indexBcc5be.c)(function () {
      return e.clickable === !0 || i.value === !0 || e.tag === "label";
    }),
        m = (0, _indexBcc5be.c)(function () {
      return e.disable !== !0 && q.value === !0;
    }),
        h = (0, _indexBcc5be.c)(function () {
      return "q-item q-item-type row no-wrap" + (e.dense === !0 ? " q-item--dense" : "") + (t.value === !0 ? " q-item--dark" : "") + (i.value === !0 && e.active === null ? f.value : e.active === !0 ? " q-item--active".concat(e.activeClass !== void 0 ? " ".concat(e.activeClass) : "") : "") + (e.disable === !0 ? " disabled" : "") + (m.value === !0 ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === !0 ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === !0 ? " q-manual-focusable--focused" : "") : "");
    }),
        T = (0, _indexBcc5be.c)(function () {
      if (e.insetLevel === void 0) return null;
      var p = l.lang.rtl === !0 ? "Right" : "Left";
      return _defineProperty({}, "padding" + p, 16 + e.insetLevel * 56 + "px");
    });

    function L(p) {
      m.value === !0 && (w.value !== null && (p.qKeyEvent !== !0 && document.activeElement === a.value ? w.value.focus() : document.activeElement === w.value && a.value.focus()), c(p));
    }

    function g(p) {
      if (m.value === !0 && (0, _indexBcc5be.K)(p, 13) === !0) {
        (0, _indexBcc5be.t)(p), p.qKeyEvent = !0;
        var b = new MouseEvent("click", p);
        b.qKeyEvent = !0, a.value.dispatchEvent(b);
      }

      n("keyup", p);
    }

    function u() {
      var p = (0, _renderA.a)(o.default, []);
      return m.value === !0 && p.unshift((0, _indexBcc5be.h)("div", {
        class: "q-focus-helper",
        tabindex: -1,
        ref: w
      })), p;
    }

    return function () {
      var p = {
        ref: a,
        class: h.value,
        style: T.value,
        role: "listitem",
        onClick: L,
        onKeyup: g
      };
      return m.value === !0 ? (p.tabindex = e.tabindex || "0", Object.assign(p, s.value)) : q.value === !0 && (p["aria-disabled"] = "true"), (0, _indexBcc5be.h)(d.value, p, u());
    };
  }
});
var go = (0, _indexBcc5be.L)({
  __name: "EssentialLink",
  props: {
    title: null,
    caption: {
      default: ""
    },
    link: {
      default: "#"
    },
    icon: {
      default: ""
    }
  },
  setup: function setup(e) {
    return function (o, n) {
      return (0, _indexBcc5be.M)(), (0, _indexBcc5be.N)(yo, {
        clickable: "",
        tag: "a",
        target: "_blank",
        href: e.link
      }, {
        default: (0, _indexBcc5be.O)(function () {
          return [e.icon ? ((0, _indexBcc5be.M)(), (0, _indexBcc5be.N)(et, {
            key: 0,
            avatar: ""
          }, {
            default: (0, _indexBcc5be.O)(function () {
              return [(0, _indexBcc5be.d)(_QBtnFb5a01ff.Q, {
                name: e.icon
              }, null, 8, ["name"])];
            }),
            _: 1
          })) : (0, _indexBcc5be.Q)("", !0), (0, _indexBcc5be.d)(et, null, {
            default: (0, _indexBcc5be.O)(function () {
              return [(0, _indexBcc5be.d)(Be, null, {
                default: (0, _indexBcc5be.O)(function () {
                  return [(0, _indexBcc5be.R)((0, _indexBcc5be.S)(e.title), 1)];
                }),
                _: 1
              }), (0, _indexBcc5be.d)(Be, {
                caption: ""
              }, {
                default: (0, _indexBcc5be.O)(function () {
                  return [(0, _indexBcc5be.R)((0, _indexBcc5be.S)(e.caption), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          })];
        }),
        _: 1
      }, 8, ["href"]);
    };
  }
}),
    Lo = (0, _indexBcc5be.L)({
  __name: "MainLayout",
  setup: function setup(e) {
    var o = [{
      title: "Docs",
      caption: "quasar.dev",
      icon: "school",
      link: "https://quasar.dev"
    }, {
      title: "Github",
      caption: "github.com/quasarframework",
      icon: "code",
      link: "https://github.com/quasarframework"
    }, {
      title: "Discord Chat Channel",
      caption: "chat.quasar.dev",
      icon: "chat",
      link: "https://chat.quasar.dev"
    }, {
      title: "Forum",
      caption: "forum.quasar.dev",
      icon: "record_voice_over",
      link: "https://forum.quasar.dev"
    }, {
      title: "Twitter",
      caption: "@quasarframework",
      icon: "rss_feed",
      link: "https://twitter.quasar.dev"
    }, {
      title: "Facebook",
      caption: "@QuasarFramework",
      icon: "public",
      link: "https://facebook.quasar.dev"
    }, {
      title: "Quasar Awesome",
      caption: "Community Quasar projects",
      icon: "favorite",
      link: "https://awesome.quasar.dev"
    }],
        n = (0, _indexBcc5be.r)(!1);

    function l() {
      n.value = !n.value;
    }

    return function (t, i) {
      var s = (0, _indexBcc5be.U)("router-view");
      return (0, _indexBcc5be.M)(), (0, _indexBcc5be.N)(bo, {
        view: "lHh Lpr lFf"
      }, {
        default: (0, _indexBcc5be.O)(function () {
          return [(0, _indexBcc5be.d)(Ut, {
            elevated: ""
          }, {
            default: (0, _indexBcc5be.O)(function () {
              return [(0, _indexBcc5be.d)(Yt, null, {
                default: (0, _indexBcc5be.O)(function () {
                  return [(0, _indexBcc5be.d)(_QBtnFb5a01ff.d, {
                    flat: "",
                    dense: "",
                    round: "",
                    icon: "menu",
                    "aria-label": "Menu",
                    onClick: l
                  }), (0, _indexBcc5be.d)(Xt, null, {
                    default: (0, _indexBcc5be.O)(function () {
                      return [(0, _indexBcc5be.R)(" Quasar App ")];
                    }),
                    _: 1
                  }), (0, _indexBcc5be.V)("div", null, "Quasar v" + (0, _indexBcc5be.S)(t.$q.version), 1)];
                }),
                _: 1
              })];
            }),
            _: 1
          }), (0, _indexBcc5be.d)(vo, {
            modelValue: n.value,
            "onUpdate:modelValue": i[0] || (i[0] = function (f) {
              return n.value = f;
            }),
            "show-if-above": "",
            bordered: ""
          }, {
            default: (0, _indexBcc5be.O)(function () {
              return [(0, _indexBcc5be.d)(Kt, null, {
                default: (0, _indexBcc5be.O)(function () {
                  return [(0, _indexBcc5be.d)(Be, {
                    header: ""
                  }, {
                    default: (0, _indexBcc5be.O)(function () {
                      return [(0, _indexBcc5be.R)(" Essential Links ")];
                    }),
                    _: 1
                  }), ((0, _indexBcc5be.M)(), (0, _indexBcc5be.W)(_indexBcc5be.F, null, (0, _indexBcc5be.X)(o, function (f) {
                    return (0, _indexBcc5be.d)(go, (0, _indexBcc5be.Y)({
                      key: f.title
                    }, f), null, 16);
                  }), 64))];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["modelValue"]), (0, _indexBcc5be.d)(mo, null, {
            default: (0, _indexBcc5be.O)(function () {
              return [(0, _indexBcc5be.d)(s)];
            }),
            _: 1
          })];
        }),
        _: 1
      });
    };
  }
});
exports.default = Lo;
},{"./QBtn.fb5a01ff.js":"assets/QBtn.fb5a01ff.js","./render.a5508880.js":"assets/render.a5508880.js","./index.bcc5be65.js":"assets/index.bcc5be65.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/MainLayout.eb395e4b.1e79cefd.js.map