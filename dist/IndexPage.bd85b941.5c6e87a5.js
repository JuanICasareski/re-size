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
})({"assets/IndexPage.bd85b941.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _renderA = require("./render.a5508880.js");

var _indexBcc5be = require("./index.bcc5be65.js");

var H = (0, _renderA.c)({
  name: "QPage",
  props: {
    padding: Boolean,
    styleFn: Function
  },
  setup: function setup(t, _ref) {
    var c = _ref.slots;

    var _ref2 = (0, _indexBcc5be.g)(),
        n = _ref2.proxy.$q,
        e = (0, _indexBcc5be.a)(_indexBcc5be.q, _indexBcc5be.p);

    if (e === _indexBcc5be.p) return console.error("QPage needs to be a deep child of QLayout"), _indexBcc5be.p;
    if ((0, _indexBcc5be.a)(_indexBcc5be.I, _indexBcc5be.p) === _indexBcc5be.p) return console.error("QPage needs to be child of QPageContainer"), _indexBcc5be.p;
    var m = (0, _indexBcc5be.c)(function () {
      var a = (e.header.space === !0 ? e.header.size : 0) + (e.footer.space === !0 ? e.footer.size : 0);

      if (typeof t.styleFn == "function") {
        var v = e.isContainer.value === !0 ? e.containerHeight.value : n.screen.height;
        return t.styleFn(a, v);
      }

      return {
        minHeight: e.isContainer.value === !0 ? e.containerHeight.value - a + "px" : n.screen.height === 0 ? a !== 0 ? "calc(100vh - ".concat(a, "px)") : "100vh" : n.screen.height - a + "px"
      };
    }),
        g = (0, _indexBcc5be.c)(function () {
      return "q-page".concat(t.padding === !0 ? " q-layout-padding" : "");
    });
    return function () {
      return (0, _indexBcc5be.h)("main", {
        class: g.value,
        style: m.value
      }, (0, _renderA.h)(c.default));
    };
  }
});
var I = (0, _indexBcc5be.L)({
  __name: "ExampleComponent",
  props: {
    title: null,
    todos: {
      default: function _default() {
        return [];
      }
    },
    meta: null,
    active: {
      type: Boolean
    }
  },
  setup: function setup(t) {
    var c = t,
        n = (0, _indexBcc5be.r)(0);

    function e() {
      return n.value += 1, n.value;
    }

    var i = (0, _indexBcc5be.c)(function () {
      return c.todos.length;
    });
    return function (m, g) {
      return (0, _indexBcc5be.M)(), (0, _indexBcc5be.W)("div", null, [(0, _indexBcc5be.V)("p", null, (0, _indexBcc5be.S)(t.title), 1), (0, _indexBcc5be.V)("ul", null, [((0, _indexBcc5be.M)(!0), (0, _indexBcc5be.W)(_indexBcc5be.F, null, (0, _indexBcc5be.X)(t.todos, function (a) {
        return (0, _indexBcc5be.M)(), (0, _indexBcc5be.W)("li", {
          key: a.id,
          onClick: e
        }, (0, _indexBcc5be.S)(a.id) + " - " + (0, _indexBcc5be.S)(a.content), 1);
      }), 128))]), (0, _indexBcc5be.V)("p", null, "Count: " + (0, _indexBcc5be.S)((0, _indexBcc5be.Z)(i)) + " / " + (0, _indexBcc5be.S)(t.meta.totalCount), 1), (0, _indexBcc5be.V)("p", null, "Active: " + (0, _indexBcc5be.S)(t.active ? "yes" : "no"), 1), (0, _indexBcc5be.V)("p", null, "Clicks on todos: " + (0, _indexBcc5be.S)(n.value), 1)]);
    };
  }
}),
    S = (0, _indexBcc5be.L)({
  __name: "IndexPage",
  setup: function setup(t) {
    var c = (0, _indexBcc5be.r)([{
      id: 1,
      content: "ct1"
    }, {
      id: 2,
      content: "ct2"
    }, {
      id: 3,
      content: "ct3"
    }, {
      id: 4,
      content: "ct4"
    }, {
      id: 5,
      content: "ct5"
    }]),
        n = (0, _indexBcc5be.r)({
      totalCount: 1200
    });
    return function (e, i) {
      return (0, _indexBcc5be.M)(), (0, _indexBcc5be.N)(H, {
        class: "row items-center justify-evenly"
      }, {
        default: (0, _indexBcc5be.O)(function () {
          return [(0, _indexBcc5be.d)(I, {
            title: "Example component",
            active: "",
            todos: c.value,
            meta: n.value
          }, null, 8, ["todos", "meta"])];
        }),
        _: 1
      });
    };
  }
});
exports.default = S;
},{"./render.a5508880.js":"assets/render.a5508880.js","./index.bcc5be65.js":"assets/index.bcc5be65.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
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
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
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
//# sourceMappingURL=/IndexPage.bd85b941.5c6e87a5.js.map