// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9mu7C":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8lqZg":[function(require,module,exports,__globalThis) {
// Import and initialize GSAP first
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gsap = require("gsap");
var _scrollTrigger = require("gsap/ScrollTrigger");
var _scrollToPlugin = require("gsap/ScrollToPlugin");
// Import styles
var _normalizeCss = require("../css/normalize.css");
var _fontAwesomeMinCss = require("../fonts/font-awesome-4.3.0/css/font-awesome.min.css");
var _demoCss = require("../css/demo.css");
var _cardCss = require("../css/card.css");
var _patternCss = require("../css/pattern.css");
// Import Snap.svg
var _snapsvg = require("snapsvg");
var _snapsvgDefault = parcelHelpers.interopDefault(_snapsvg);
// Import images
var _jfish1Mp4 = require("../img/jfish1.mp4");
var _aJpg = require("../img/a.jpg");
var _bJpg = require("../img/b.jpg");
var _cJpg = require("../img/c.jpg");
var _dJpg = require("../img/d.jpg");
var _eJpg = require("../img/e.jpg");
var _fJpg = require("../img/f.jpg");
var _blot3Png = require("../img/blot3.png");
var _dots4Png = require("../img/dots4.png");
var _harvardPng = require("../img/harvard.png");
// Import local scripts
var _cardJs = require("../js/Card.js");
var _cardJsDefault = parcelHelpers.interopDefault(_cardJs);
var _cardCircleJs = require("../js/Card-circle.js");
var _cardCircleJsDefault = parcelHelpers.interopDefault(_cardCircleJs);
// Import other scripts after GSAP is available
var _demoJs = require("../js/demo.js");
var _demo1Js = require("../js/demo1.js");
var _charmingMinJs = require("../js/charming.min.js");
var _trianglifyMinJs = require("../js/vendors/trianglify.min.js");
var _cashMinJs = require("../js/vendors/cash.min.js");
var _splitTypeMinJs = require("../js/vendors/split-type.min.js");
// Register GSAP plugins immediately
(0, _gsap.gsap).registerPlugin((0, _scrollTrigger.ScrollTrigger), (0, _scrollToPlugin.ScrollToPlugin));
// Make GSAP globally available
window.gsap = (0, _gsap.gsap);
window.ScrollTrigger = (0, _scrollTrigger.ScrollTrigger);
window.ScrollToPlugin = (0, _scrollToPlugin.ScrollToPlugin);
window.Snap = (0, _snapsvgDefault.default);
// Make Card classes available globally
window.Card = (0, _cardJsDefault.default);
window.CardCircle = (0, _cardCircleJsDefault.default);

},{"gsap":"fPSuC","gsap/ScrollTrigger":"7wnFk","gsap/ScrollToPlugin":"9xJDW","../css/normalize.css":"84doH","../fonts/font-awesome-4.3.0/css/font-awesome.min.css":"5YYjt","../css/demo.css":"c3dKX","../css/card.css":"bp9z5","../css/pattern.css":"ax5Hj","snapsvg":"fPsoO","../img/jfish1.mp4":"lioEB","../img/a.jpg":"drgyt","../img/b.jpg":"awulB","../img/c.jpg":"k4ykc","../img/d.jpg":"hGxfZ","../img/e.jpg":"crReC","../img/f.jpg":"6L5dF","../img/blot3.png":"33zeU","../img/dots4.png":"scTLQ","../img/harvard.png":"cMN13","../js/Card.js":"cEaPA","../js/Card-circle.js":"d8wmm","../js/demo.js":"g2DDQ","../js/demo1.js":"li47L","../js/charming.min.js":"PA8qQ","../js/vendors/trianglify.min.js":"gxDnu","../js/vendors/cash.min.js":"3fLHG","../js/vendors/split-type.min.js":"j2RLz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fPSuC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gsap", ()=>gsapWithCSS);
parcelHelpers.export(exports, "default", ()=>gsapWithCSS);
parcelHelpers.export(exports, "CSSPlugin", ()=>(0, _csspluginJs.CSSPlugin));
parcelHelpers.export(exports, "TweenMax", ()=>TweenMaxWithCSS);
parcelHelpers.export(exports, "TweenLite", ()=>(0, _gsapCoreJs.TweenLite));
parcelHelpers.export(exports, "TimelineMax", ()=>(0, _gsapCoreJs.TimelineMax));
parcelHelpers.export(exports, "TimelineLite", ()=>(0, _gsapCoreJs.TimelineLite));
parcelHelpers.export(exports, "Power0", ()=>(0, _gsapCoreJs.Power0));
parcelHelpers.export(exports, "Power1", ()=>(0, _gsapCoreJs.Power1));
parcelHelpers.export(exports, "Power2", ()=>(0, _gsapCoreJs.Power2));
parcelHelpers.export(exports, "Power3", ()=>(0, _gsapCoreJs.Power3));
parcelHelpers.export(exports, "Power4", ()=>(0, _gsapCoreJs.Power4));
parcelHelpers.export(exports, "Linear", ()=>(0, _gsapCoreJs.Linear));
parcelHelpers.export(exports, "Quad", ()=>(0, _gsapCoreJs.Quad));
parcelHelpers.export(exports, "Cubic", ()=>(0, _gsapCoreJs.Cubic));
parcelHelpers.export(exports, "Quart", ()=>(0, _gsapCoreJs.Quart));
parcelHelpers.export(exports, "Quint", ()=>(0, _gsapCoreJs.Quint));
parcelHelpers.export(exports, "Strong", ()=>(0, _gsapCoreJs.Strong));
parcelHelpers.export(exports, "Elastic", ()=>(0, _gsapCoreJs.Elastic));
parcelHelpers.export(exports, "Back", ()=>(0, _gsapCoreJs.Back));
parcelHelpers.export(exports, "SteppedEase", ()=>(0, _gsapCoreJs.SteppedEase));
parcelHelpers.export(exports, "Bounce", ()=>(0, _gsapCoreJs.Bounce));
parcelHelpers.export(exports, "Sine", ()=>(0, _gsapCoreJs.Sine));
parcelHelpers.export(exports, "Expo", ()=>(0, _gsapCoreJs.Expo));
parcelHelpers.export(exports, "Circ", ()=>(0, _gsapCoreJs.Circ));
var _gsapCoreJs = require("./gsap-core.js");
var _csspluginJs = require("./CSSPlugin.js");
var gsapWithCSS = (0, _gsapCoreJs.gsap).registerPlugin((0, _csspluginJs.CSSPlugin)) || (0, _gsapCoreJs.gsap), // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;

},{"./gsap-core.js":"05eeC","./CSSPlugin.js":"l02JQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"05eeC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GSCache", ()=>GSCache);
parcelHelpers.export(exports, "Animation", ()=>Animation);
parcelHelpers.export(exports, "Timeline", ()=>Timeline);
parcelHelpers.export(exports, "Tween", ()=>Tween);
parcelHelpers.export(exports, "PropTween", ()=>PropTween);
parcelHelpers.export(exports, "gsap", ()=>gsap);
parcelHelpers.export(exports, "Power0", ()=>Power0);
parcelHelpers.export(exports, "Power1", ()=>Power1);
parcelHelpers.export(exports, "Power2", ()=>Power2);
parcelHelpers.export(exports, "Power3", ()=>Power3);
parcelHelpers.export(exports, "Power4", ()=>Power4);
parcelHelpers.export(exports, "Linear", ()=>Linear);
parcelHelpers.export(exports, "Quad", ()=>Quad);
parcelHelpers.export(exports, "Cubic", ()=>Cubic);
parcelHelpers.export(exports, "Quart", ()=>Quart);
parcelHelpers.export(exports, "Quint", ()=>Quint);
parcelHelpers.export(exports, "Strong", ()=>Strong);
parcelHelpers.export(exports, "Elastic", ()=>Elastic);
parcelHelpers.export(exports, "Back", ()=>Back);
parcelHelpers.export(exports, "SteppedEase", ()=>SteppedEase);
parcelHelpers.export(exports, "Bounce", ()=>Bounce);
parcelHelpers.export(exports, "Sine", ()=>Sine);
parcelHelpers.export(exports, "Expo", ()=>Expo);
parcelHelpers.export(exports, "Circ", ()=>Circ);
parcelHelpers.export(exports, "TweenMax", ()=>Tween) //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.
;
parcelHelpers.export(exports, "TweenLite", ()=>Tween);
parcelHelpers.export(exports, "TimelineMax", ()=>Timeline);
parcelHelpers.export(exports, "TimelineLite", ()=>Timeline);
parcelHelpers.export(exports, "default", ()=>gsap);
parcelHelpers.export(exports, "wrap", ()=>wrap);
parcelHelpers.export(exports, "wrapYoyo", ()=>wrapYoyo);
parcelHelpers.export(exports, "distribute", ()=>distribute);
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "snap", ()=>snap);
parcelHelpers.export(exports, "normalize", ()=>normalize);
parcelHelpers.export(exports, "getUnit", ()=>getUnit);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "splitColor", ()=>splitColor);
parcelHelpers.export(exports, "toArray", ()=>toArray);
parcelHelpers.export(exports, "selector", ()=>selector);
parcelHelpers.export(exports, "mapRange", ()=>mapRange);
parcelHelpers.export(exports, "pipe", ()=>pipe);
parcelHelpers.export(exports, "unitize", ()=>unitize);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
parcelHelpers.export(exports, "_getProperty", ()=>_getProperty);
parcelHelpers.export(exports, "_numExp", ()=>_numExp);
parcelHelpers.export(exports, "_numWithUnitExp", ()=>_numWithUnitExp);
parcelHelpers.export(exports, "_isString", ()=>_isString);
parcelHelpers.export(exports, "_isUndefined", ()=>_isUndefined);
parcelHelpers.export(exports, "_renderComplexString", ()=>_renderComplexString);
parcelHelpers.export(exports, "_relExp", ()=>_relExp);
parcelHelpers.export(exports, "_setDefaults", ()=>_setDefaults);
parcelHelpers.export(exports, "_removeLinkedListItem", ()=>_removeLinkedListItem);
parcelHelpers.export(exports, "_forEachName", ()=>_forEachName);
parcelHelpers.export(exports, "_sortPropTweensByPriority", ()=>_sortPropTweensByPriority);
parcelHelpers.export(exports, "_colorStringFilter", ()=>_colorStringFilter);
parcelHelpers.export(exports, "_replaceRandom", ()=>_replaceRandom);
parcelHelpers.export(exports, "_checkPlugin", ()=>_checkPlugin);
parcelHelpers.export(exports, "_plugins", ()=>_plugins);
parcelHelpers.export(exports, "_ticker", ()=>_ticker);
parcelHelpers.export(exports, "_config", ()=>_config);
parcelHelpers.export(exports, "_roundModifier", ()=>_roundModifier);
parcelHelpers.export(exports, "_round", ()=>_round);
parcelHelpers.export(exports, "_missingPlugin", ()=>_missingPlugin);
parcelHelpers.export(exports, "_getSetter", ()=>_getSetter);
parcelHelpers.export(exports, "_getCache", ()=>_getCache);
parcelHelpers.export(exports, "_colorExp", ()=>_colorExp);
parcelHelpers.export(exports, "_parseRelative", ()=>_parseRelative);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
}, _suppressOverwrites, _reverting, _context, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
    return typeof value === "string";
}, _isFunction = function _isFunction(value) {
    return typeof value === "function";
}, _isNumber = function _isNumber(value) {
    return typeof value === "number";
}, _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
}, _isObject = function _isObject(value) {
    return typeof value === "object";
}, _isNotFalse = function _isNotFalse(value) {
    return value !== false;
}, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
}, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {}, // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {}, _installScope = {}, _coreReady, _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
}, _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
}, _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
}, _emptyFunc = function _emptyFunc() {
    return 0;
}, _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
}, _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
}, _revertConfig = {
    suppressEvents: true
}, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [
        targets
    ]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
        // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
        i = _harnessPlugins.length;
        while(i-- && !_harnessPlugins[i].targetTest(target));
        harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while(i--)targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    return targets;
}, _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
}, _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
}, _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
}, //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
}, // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
}, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
    var l = toFind.length, i = 0;
    for(; toSearch.indexOf(toFind[i]) < 0 && ++i < l;);
    return i < l;
}, _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for(i = 0; i < l; i++){
        tween = a[i];
        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
}, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
}, _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
}, _passThrough = function _passThrough(p) {
    return p;
}, _setDefaults = function _setDefaults(obj, defaults) {
    for(var p in defaults)p in obj || (obj[p] = defaults[p]);
    return obj;
}, _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function(obj, defaults) {
        for(var p in defaults)p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    };
}, _merge = function _merge(base, toMerge) {
    for(var p in toMerge)base[p] = toMerge[p];
    return base;
}, _mergeDeep = function _mergeDeep(base, toMerge) {
    for(var p in toMerge)p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    return base;
}, _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {}, p;
    for(p in obj)p in excluding || (copy[p] = obj[p]);
    return copy;
}, _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) while(parent){
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
    }
    return vars;
}, _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while(match && i-- && a1[i] === a2[i]);
    return i < 0;
}, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = parent[lastProp], t;
    if (sortBy) {
        t = child[sortBy];
        while(prev && prev[sortBy] > t)prev = prev._prev;
    }
    if (prev) {
        child._next = prev._next;
        prev._next = child;
    } else {
        child._next = parent[firstProp];
        parent[firstProp] = child;
    }
    if (child._next) child._next._prev = child;
    else parent[lastProp] = child;
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
}, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = child._prev, next = child._next;
    if (prev) prev._next = next;
    else if (parent[firstProp] === child) parent[firstProp] = next;
    if (next) next._prev = prev;
    else if (parent[lastProp] === child) parent[lastProp] = prev;
    child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
}, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
}, _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
        // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
        var a = animation;
        while(a){
            a._dirty = 1;
            a = a.parent;
        }
    }
    return animation;
}, _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while(parent && parent.parent){
        //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
        parent._dirty = 1;
        parent.totalDuration();
        parent = parent.parent;
    }
    return animation;
}, _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
}, _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
}, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
    return tTime && whole === tTime ? whole - 1 : whole;
}, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, _setEnd = function _setEnd(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
}, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
        animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
        _setEnd(animation);
        parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
    }
    return animation;
}, /*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/ _postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
        // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
        t = _parentToChildTotalTime(timeline.rawTime(), child);
        if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
        //in case any of the ancestors had completed but should now be enabled...
        if (timeline._dur < timeline.duration()) {
            t = timeline;
            while(t._dp){
                t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.
                t = t._dp;
            }
        }
        timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
    }
}, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)
    return timeline;
}, _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
}, _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) return 1;
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
        _lazyTweens.push(tween);
        tween._lazy = [
            tTime,
            suppressEvents
        ];
        return 1;
    }
}, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
}, // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
}, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
    repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
        // in case there's a zero-duration tween that has a repeat with a repeatDelay
        tTime = _clamp(0, tween._tDur, totalTime);
        iteration = _animationCycle(tTime, repeatDelay);
        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
        if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
            // if iteration changed
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
        if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
        return;
        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
        suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        pt = tween._pt;
        while(pt){
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
        totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
        tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
        tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents && !_reverting) {
                _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
            }
        }
    } else if (!tween._zTime) tween._zTime = totalTime;
}, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
        child = animation._first;
        while(child && child._start <= time){
            if (child.data === "isPause" && child._start > prevTime) return child;
            child = child._next;
        }
    } else {
        child = animation._last;
        while(child && child._start >= time){
            if (child.data === "isPause" && child._start < prevTime) return child;
            child = child._prev;
        }
    }
}, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
}, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
}, _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
}, _parsePosition = function _parsePosition(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
    i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
        //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
        offset = position.charAt(0);
        isPercent = position.substr(-1) === "%";
        i = position.indexOf("=");
        if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
        }
        if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
        }
        offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
        if (isPercent && percentAnimation) offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
        return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
}, _createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
        irVars = vars;
        parent = timeline;
        while(parent && !("immediateRender" in irVars)){
            // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
            irVars = parent.vars.defaults || {};
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
        }
        vars.immediateRender = _isNotFalse(irVars.immediateRender);
        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
}, _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
}, _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
}, getUnit = function getUnit(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
}, // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function(v) {
        return _clamp(min, max, v);
    });
}, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
}, _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) accumulator = [];
    return ar.forEach(function(value) {
        var _accumulator;
        return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
}, //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [
        value
    ] : [];
}, selector = function selector(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
        var el = value.current || value.nativeElement || value;
        return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
}, shuffle = function shuffle(a) {
    return a.sort(function() {
        return .5 - Math.random();
    });
}, // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = (Math.random() * i) | 0, v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
    if (_isFunction(v)) return v;
    var vars = _isObject(v) ? v : {
        each: v
    }, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
    ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) ratioX = ratioY = ({
        center: .5,
        edges: .5,
        end: 1
    })[from] || 0;
    else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
    }
    return function(i, target, a) {
        var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
        if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [
                1,
                _bigNum
            ])[1];
            if (!wrapAt) {
                max = -_bigNum;
                while(max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
                wrapAt < l && wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
            originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;
            for(j = 0; j < l; j++){
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
            }
            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0; //unit
            ease = ease && l < 0 ? _invertEase(ease) : ease;
        }
        l = (distances[i] - distances.min) / distances.max || 0;
        return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
    };
}, _roundModifier = function _roundModifier(v) {
    //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
    return function(raw) {
        var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
        return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
    };
}, snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
        radius = isArray = snapTo.radius || _bigNum;
        if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if (is2D = !_isNumber(snapTo[0])) radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
        } else snapTo = _roundModifier(snapTo.increment);
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
        is2D = snapTo(raw);
        return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
        var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
        while(i--){
            if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
            } else dx = Math.abs(snapTo[i] - x);
            if (dx < min) {
                min = dx;
                closest = i;
            }
        }
        closest = !radius || min <= radius ? snapTo[closest] : raw;
        return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
}, random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? (roundingIncrement = 0, false) : !returnFunction, function() {
        return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5, returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
}, pipe = function pipe() {
    for(var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++)functions[_key] = arguments[_key];
    return function(value) {
        return functions.reduce(function(v, f) {
            return f(v);
        }, value);
    };
}, unitize = function unitize(func, unit) {
    return function(value) {
        return func(parseFloat(value)) + (unit || getUnit(value));
    };
}, normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
}, _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
        return a[~~wrapper(index)];
    });
}, wrap = function wrap(min, max, value) {
    // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function(value) {
        return (range + (value - min) % range) % range + min;
    });
}, wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function(value) {
        value = (total + (value - min) % total) % total || 0;
        return min + (value > range ? total - value : value);
    });
}, _replaceRandom = function _replaceRandom(value) {
    //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
    var prev = 0, s = "", i, nums, end, isArray;
    while(~(i = value.indexOf("random(", prev))){
        end = value.indexOf(")", i);
        isArray = value.charAt(i + 7) === "[";
        nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
        s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
        prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
}, mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value) {
        return outMin + ((value - inMin) / inRange * outRange || 0);
    });
}, interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p) {
        return (1 - p) * start + p * end;
    };
    if (!func) {
        var isString = _isString(start), master = {}, p, i, interpolators, l, il;
        progress === true && (mutate = 1) && (progress = null);
        if (isString) {
            start = {
                p: start
            };
            end = {
                p: end
            };
        } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for(i = 1; i < l; i++)interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
            l--;
            func = function func(p) {
                p *= l;
                var i = Math.min(il, ~~p);
                return interpolators[i](p - i);
            };
            progress = end;
        } else if (!mutate) start = _merge(_isArray(start) ? [] : {}, start);
        if (!interpolators) {
            for(p in end)_addPropTween.call(master, start, p, "get", end[p]);
            func = function func(p) {
                return _renderPropTweens(p, master) || (isString ? start.p : start);
            };
        }
    }
    return _conditionalReturn(progress, func);
}, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    //used for nextLabel() and previousLabel()
    var labels = timeline.labels, min = _bigNum, p, distance, label;
    for(p in labels){
        distance = labels[p] - fromTime;
        if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
        }
    }
    return label;
}, _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context = animation._ctx, params, scope, result;
    if (!callback) return;
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
    context && (_context = context);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
}, _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
}, _quickTween, _registerPluginQueue = [], _createPlugin = function _createPlugin(config) {
    if (!config) return;
    config = !config.name && config["default"] || config; // UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.
    if (_windowExists() || config.headless) {
        // edge case: some build tools may pass in a null/undefined value
        var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
            this._props = [];
        } : config, //in case someone passes in an object that's not a plugin, like CustomEase
        instanceDefaults = {
            init: _emptyFunc,
            render: _renderPropTweens,
            add: _addPropTween,
            kill: _killPropTweensOf,
            modifier: _addPluginModifier,
            rawVars: 0
        }, statics = {
            targetTest: 0,
            get: 0,
            getSetter: _getSetter,
            aliases: {},
            register: 0
        };
        _wake();
        if (config !== Plugin) {
            if (_plugins[name]) return;
            _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods
            _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods
            _plugins[Plugin.prop = name] = Plugin;
            if (config.targetTest) {
                _harnessPlugins.push(Plugin);
                _reservedProps[name] = 1;
            }
            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
        }
        _addGlobal(name, Plugin);
        config.register && config.register(gsap, Plugin, PropTween);
    } else _registerPluginQueue.push(config);
}, /*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */ _255 = 255, _colorLookup = {
    aqua: [
        0,
        _255,
        _255
    ],
    lime: [
        0,
        _255,
        0
    ],
    silver: [
        192,
        192,
        192
    ],
    black: [
        0,
        0,
        0
    ],
    maroon: [
        128,
        0,
        0
    ],
    teal: [
        0,
        128,
        128
    ],
    blue: [
        0,
        0,
        _255
    ],
    navy: [
        0,
        0,
        128
    ],
    white: [
        _255,
        _255,
        _255
    ],
    olive: [
        128,
        128,
        0
    ],
    yellow: [
        _255,
        _255,
        0
    ],
    orange: [
        _255,
        165,
        0
    ],
    gray: [
        128,
        128,
        128
    ],
    purple: [
        128,
        0,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    red: [
        _255,
        0,
        0
    ],
    pink: [
        _255,
        192,
        203
    ],
    cyan: [
        0,
        _255,
        _255
    ],
    transparent: [
        _255,
        _255,
        _255,
        0
    ]
}, // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
}, splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [
        v >> 16,
        v >> 8 & _255,
        v & _255
    ] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
        if (v.substr(-1) === ",") //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
        v = v.substr(0, v.length - 1);
        if (_colorLookup[v]) a = _colorLookup[v];
        else if (v.charAt(0) === "#") {
            if (v.length < 6) {
                //for shorthand like #9F0 or #9F0F (could have alpha)
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
                // hex with alpha, like #fd5e53ff
                a = parseInt(v.substr(1, 6), 16);
                return [
                    a >> 16,
                    a >> 8 & _255,
                    a & _255,
                    parseInt(v.substr(7), 16) / 255
                ];
            }
            v = parseInt(v.substr(1), 16);
            a = [
                v >> 16,
                v >> 8 & _255,
                v & _255
            ];
        } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);
            if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= .5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1); //cast as number
                a[0] = _hue(h + 1 / 3, r, g);
                a[1] = _hue(h, r, g);
                a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
                //if relative values are found, just return the raw strings with the relative prefixes in place.
                a = v.match(_numExp);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
            }
        } else a = v.match(_strictNumExp) || _colorLookup.transparent;
        a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
        r = a[0] / _255;
        g = a[1] / _255;
        b = a[2] / _255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;
        if (max === min) h = s = 0;
        else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
        }
        a[0] = ~~(h + .5);
        a[1] = ~~(s * 100 + .5);
        a[2] = ~~(l * 100 + .5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
}, _colorOrderData = function _colorOrderData(v) {
    // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function(v) {
        var a = v.match(_numWithUnitExp) || [];
        values.push.apply(values, a);
        c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
}, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) return s;
    colors = colors.map(function(color) {
        return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
        d = _colorOrderData(s);
        c = orderMatchData.c;
        if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;
            for(; i < l; i++)result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
    }
    if (!shell) {
        shell = s.split(_colorExp);
        l = shell.length - 1;
        for(; i < l; i++)result += shell[i] + colors[i];
    }
    return result + shell[l];
}, _colorExp = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
    p;
    for(p in _colorLookup)s += "|" + p + "\\b";
    return new RegExp(s + ")", "gi");
}(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
        toHSL = _hslExp.test(combined);
        a[1] = _formatColors(a[1], toHSL);
        a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.
        return true;
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */ _tickerActive, _ticker = function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
        (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;
        if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1000;
            _self.time = time = time / 1000;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
        }
        manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
        if (dispatch) for(_i = 0; _i < _listeners.length; _i++)// use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
    };
    _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
            _tick(true);
        },
        deltaRatio: function deltaRatio(fps) {
            return _delta / (1000 / (fps || 60));
        },
        wake: function wake() {
            if (_coreReady) {
                if (!_coreInitted && _windowExists()) {
                    _win = _coreInitted = window;
                    _doc = _win.document || {};
                    _globals.gsap = gsap;
                    (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                    _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                    _registerPluginQueue.forEach(_createPlugin);
                }
                _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
                _id && _self.sleep();
                _req = _raf || function(f) {
                    return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                };
                _tickerActive = 1;
                _tick(2);
            }
        },
        sleep: function sleep() {
            (_raf ? cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited
            _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
        },
        fps: function fps(_fps) {
            _gap = 1000 / (_fps || 240);
            _nextTime = _self.time * 1000 + _gap;
        },
        add: function add(callback, once, prioritize) {
            var func = once ? function(t, d, f, v) {
                callback(t, d, f, v);
                _self.remove(func);
            } : callback;
            _self.remove(callback);
            _listeners[prioritize ? "unshift" : "push"](func);
            _wake();
            return func;
        },
        remove: function remove(callback, i) {
            ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
        },
        _listeners: _listeners
    };
    return _self;
}(), _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
}, //also ensures the core classes are initialized.
/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/ _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for(; i < l; i++){
        val = split[i];
        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index);
        obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
        key = val.substr(index + 1).trim();
    }
    return obj;
}, _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, _configEaseFromString = function _configEaseFromString(name) {
    //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [
        _parseObjectInString(split[1])
    ] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
}, _invertEase = function _invertEase(ease) {
    return function(p) {
        return 1 - ease(1 - p);
    };
}, // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first, ease;
    while(child){
        if (child instanceof Timeline) _propagateYoyoEase(child, isYoyo);
        else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) _propagateYoyoEase(child.timeline, isYoyo);
            else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
            }
        }
        child = child._next;
    }
}, _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
}, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
    };
    if (easeInOut === void 0) easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
    var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
        _easeMap[name] = _globals[name] = ease;
        _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
        for(var p in ease)_easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    });
    return ease;
}, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function(p) {
        return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
}, _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
    p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2; //precalculate to optimize
    ease.config = function(amplitude, period) {
        return _configElastic(type, amplitude, period);
    };
    return ease;
}, _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) overshoot = 1.70158;
    var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot) {
        return _configBack(type, overshoot);
    };
    return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
        return Math.pow(p, power);
    } : function(p) {
        return p;
    }, function(p) {
        return 1 - Math.pow(1 - p, power);
    }, function(p) {
        return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };
    _insertEase("Bounce", function(p) {
        return 1 - easeOut(1 - p);
    }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
    return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
}); // previously 2 ** (10 * (p - 1)) but that doesn't end up with the value quite at the right spot so we do a blended ease to ensure it lands where it should perfectly.
_insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
        if (steps === void 0) steps = 1;
        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
        return function(p) {
            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
        };
    }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /*#__PURE__*/ function() {
    function Animation(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        _setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        if (_context) {
            this._ctx = _context;
            _context.data.push(this);
        }
        _tickerActive || _ticker.wake();
    }
    var _proto = Animation.prototype;
    _proto.delay = function delay(value) {
        if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
        }
        return this._delay;
    };
    _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) return this._tDur;
        this._dirty = 0;
        return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        _wake();
        if (!arguments.length) return this._tTime;
        var parent = this._dp;
        if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
            //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
            while(parent && parent.parent){
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
            _addToTimeline(this._dp, this, this._start - this._delay);
        }
        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
            this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
            //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
            //   this._lock = 1;
            _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
        //}
        }
        return this;
    };
    _proto.time = function time(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
    };
    _proto.progress = function progress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    } // potential future addition:
    ;
    _proto.timeScale = function timeScale(value, suppressEvents) {
        if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
        if (this._rts === value) return this;
        var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
        // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
        //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
        // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
        this._rts = +value || 0;
        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.
        this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);
        _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.
        return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
        if (!arguments.length) return this._ps;
         // possible future addition - if an animation is removed from its parent and then .restart() or .play() or .resume() is called, perhaps we should force it back into the globalTimeline but be careful because what if it's already at its end? We don't want it to just persist forever and not get released for GC.
        // !this.parent && !value && this._tTime < this._tDur && this !== _globalTimeline && _globalTimeline.add(this);
        if (this._ps !== value) {
            this._ps = value;
            if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.
                this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
            } else {
                _wake();
                this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
            }
        }
        return this;
    };
    _proto.startTime = function startTime(value) {
        if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
            return this;
        }
        return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
        return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp; // _dp = detached parent
        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config) {
        if (config === void 0) config = _revertConfig;
        var prevIsReverting = _reverting;
        _reverting = config;
        if (this._initted || this._startAt) {
            this.timeline && this.timeline.revert(config);
            this.totalTime(-0.01, config.suppressEvents);
        }
        this.data !== "nested" && config.kill !== false && this.kill();
        _reverting = prevIsReverting;
        return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
        var animation = this, time = arguments.length ? rawTime : animation.rawTime();
        while(animation){
            time = animation._start + time / (Math.abs(animation._ts) || 1);
            animation = animation._dp;
        }
        return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
    };
    _proto.repeat = function repeat(value) {
        if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return _onUpdateTotalDuration(this);
        }
        return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            _onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
        }
        return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
            this._yoyo = value;
            return this;
        }
        return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
        this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
        this._dur || (this._zTime = -_tinyNum); // ensures onComplete fires on a zero-duration animation that gets restarted.
        return this;
    };
    _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
    };
    _proto.resume = function resume() {
        return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
        if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.
            return this;
        }
        return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -_tinyNum;
        return this;
    };
    _proto.isActive = function isActive() {
        var parent = this.parent || this._dp, start = this._start, rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
            if (!callback) delete vars[type];
            else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
        }
        return vars[type];
    };
    _proto.then = function then(onFulfilled) {
        var self = this;
        return new Promise(function(resolve) {
            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
                var _then = self.then;
                self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)
                _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                resolve(f);
                self.then = _then;
            };
            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
            else self._prom = _resolve;
        });
    };
    _proto.kill = function kill() {
        _interrupt(this);
    };
    return Animation;
}();
_setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
});
var Timeline = /*#__PURE__*/ function(_Animation) {
    _inheritsLoose(Timeline, _Animation);
    function Timeline(vars, position) {
        var _this;
        if (vars === void 0) vars = {};
        _this = _Animation.call(this, vars) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = _isNotFalse(vars.sortChildren);
        _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
    }
    var _proto2 = Timeline.prototype;
    _proto2.to = function to(targets, vars, position) {
        _createTweenType(0, arguments, this);
        return this;
    };
    _proto2.from = function from(targets, vars, position) {
        _createTweenType(1, arguments, this);
        return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        _createTweenType(2, arguments, this);
        return this;
    };
    _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new Tween(targets, vars, _parsePosition(this, position), 1);
        return this;
    };
    _proto2.call = function call(callback, params, position) {
        return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    } //ONLY for backward compatibility! Maybe delete?
    ;
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new Tween(targets, vars, _parsePosition(this, position));
        return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
        crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
        this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
        if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
                //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
                dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    prevIteration = _roundPrecise(tTime / cycleDuration); // full decimal version of iterations, not the previous iteration (we're reusing prevIteration variable for efficiency)
                    iteration = ~~prevIteration;
                    if (iteration && iteration === prevIteration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://gsap.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion
                if (yoyo && iteration & 1) {
                    time = dur - time;
                    isYoyo = 1;
                }
                /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */ if (iteration !== prevIteration && !this._lock) {
                    var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                    iteration < prevIteration && (rewinding = !rewinding);
                    prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.
                    this._lock = 1;
                    this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                    this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.
                    !suppressEvents && this.parent && _callback(this, "onRepeat");
                    this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                    if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
                    return this;
                    dur = this._dur; // in case the duration changed in the onRepeat
                    tDur = this._tDur;
                    if (doesWrap) {
                        this._lock = 2;
                        prevTime = rewinding ? dur : -0.0001;
                        this.render(prevTime, true);
                        this.vars.repeatRefresh && !isYoyo && this.invalidate();
                    }
                    this._lock = 0;
                    if (!this._ts && !prevPaused) return this;
                     //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
                    _propagateYoyoEase(this, isYoyo);
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
                if (pauseTween) tTime -= time - (time = pauseTween._start);
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
            if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
                prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
            }
            if (!prevTime && time && !suppressEvents && !iteration) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while(child){
                    next = child._next;
                    if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            } else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.
                while(child){
                    next = child._prev;
                    if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            }
            if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                    //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
                    this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.
                    _setEnd(this);
                    return this.render(totalTime, suppressEvents, force);
                }
            }
            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                    if (!this._lock) {
                        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
                        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
            }
        }
        return this;
    };
    _proto2.add = function add(child, position) {
        var _this2 = this;
        _isNumber(position) || (position = _parsePosition(this, position, child));
        if (!(child instanceof Animation)) {
            if (_isArray(child)) {
                child.forEach(function(obj) {
                    return _this2.add(obj, position);
                });
                return this;
            }
            if (_isString(child)) return this.addLabel(child, position);
            if (_isFunction(child)) child = Tween.delayedCall(0, child);
            else return this;
        }
        return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) nested = true;
        if (tweens === void 0) tweens = true;
        if (timelines === void 0) timelines = true;
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum;
        var a = [], child = this._first;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                if (child instanceof Tween) tweens && a.push(child);
                else {
                    timelines && a.push(child);
                    nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                }
            }
            child = child._next;
        }
        return a;
    };
    _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1), i = animations.length;
        while(i--){
            if (animations[i].vars.id === id) return animations[i];
        }
    };
    _proto2.remove = function remove(child) {
        if (_isString(child)) return this.removeLabel(child);
        if (_isFunction(child)) return this.killTweensOf(child);
        child.parent === this && _removeLinkedListItem(this, child);
        if (child === this._recent) this._recent = this._last;
        return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) return this._tTime;
        this._forcing = 1;
        if (!this._dp && this._ts) //special case for the global timeline (or any other that has no parent or detached parent).
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = _parsePosition(this, position);
        return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
        var t = Tween.delayedCall(0, callback || _emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = _parsePosition(this, position);
        while(child){
            if (child._start === position && child.data === "isPause") _removeFromParent(child);
            child = child._next;
        }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
        while(i--)_overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), // a number is interpreted as a global time. If the animation spans
        children;
        while(child){
            if (child instanceof Tween) {
                if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
                a.push(child);
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
            child = child._next;
        }
        return a;
    } // potential future feature - targets() on timelines
    ;
    _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};
        var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
            onStart: function onStart() {
                tl.pause();
                if (!initted) {
                    var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                    tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                    initted = 1;
                }
                _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
            }
        }, vars));
        return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, _setDefaults({
            startAt: {
                time: _parsePosition(this, fromPosition)
            }
        }, vars));
    };
    _proto2.recent = function recent() {
        return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) afterTime = this._time;
        return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) beforeTime = this._time;
        return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
        var child = this._first, labels = this.labels, p;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
            }
            child = child._next;
        }
        if (adjustLabels) {
            for(p in labels)if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
        }
        return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
        var child = this._first;
        this._lock = 0;
        while(child){
            child.invalidate(soft);
            child = child._next;
        }
        return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) includeLabels = true;
        var child = this._first, next;
        while(child){
            next = child._next;
            this.remove(child);
            child = next;
        }
        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {});
        return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
        var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
        if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        if (self._dirty) {
            parent = self.parent;
            while(child){
                prev = child._prev; //record it here in case the tween changes position in the sequence...
                child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.
                start = child._start;
                if (start > prevStart && self._sort && child._ts && !self._lock) {
                    //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                    self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().
                    _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                } else prevStart = start;
                if (start < 0 && child._ts) {
                    //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                    max -= start;
                    if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                        self._start += start / self._ts;
                        self._time -= start;
                        self._tTime -= start;
                    }
                    self.shiftChildren(-start, false, -Infinity);
                    prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
            }
            _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
            self._dirty = 0;
        }
        return self._tDur;
    };
    Timeline.updateRoot = function updateRoot(time) {
        if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
            _lastRenderedFrame = _ticker.frame;
        }
        if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts) {
                if (_config.autoSleep && _ticker._listeners.length < 2) {
                    while(child && !child._ts)child = child._next;
                    child || _ticker.sleep();
                }
            }
        }
    };
    return Timeline;
}(Animation);
_setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
    end += "";
    if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
    if (stringFilter) {
        a = [
            start,
            end
        ];
        stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
        start = a[0];
        end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while(result = _complexStringNumExp.exec(end)){
        endNum = result[0];
        chunk = end.substring(index, result.index);
        if (color) color = (color + 1) % 5;
        else if (chunk.substr(-5) === "rgba(") color = 1;
        if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
            pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
        }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    return pt;
}, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
        if (~end.indexOf("random(")) end = _replaceRandom(end);
        if (end.charAt(1) === "=") {
            pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
            if (pt || pt === 0) // to avoid isNaN, like if someone passes in a value like "!= whatever"
            end = pt;
        }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
        if (!isNaN(parsedStart * end) && end !== "") {
            // fun fact: any number multiplied by "" is evaluated as the number 0!
            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
        }
        !currentValue && !(prop in target) && _missingPlugin(prop, end);
        return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
}, //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    var copy = {}, p;
    for(p in vars)copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    return copy;
}, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
        if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.
            i = plugin._props.length;
            while(i--)ptLookup[plugin._props[i]] = pt;
        }
    }
    return plugin;
}, _overwritingTween, //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens, _initTween = function _initTween(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
        //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
        yoyoEase = tween._yEase;
        tween._yEase = tween._ease;
        tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.
    if (!tl || keyframes && !vars.stagger) {
        //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
        harness = targets[0] ? _getCache(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.
        cleanVars = _copyExcluding(vars, _reservedProps);
        if (prevStartAt) {
            prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.
            time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
            // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.
            prevStartAt._lazy = 0;
        }
        if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                data: "isStart",
                overwrite: false,
                parent: parent,
                immediateRender: true,
                lazy: !prevStartAt && _isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate: onUpdate && function() {
                    return _callback(tween, "onUpdate");
                },
                stagger: 0
            }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);
            tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.
            tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween
            time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.
            if (immediateRender) {
                if (dur && time <= 0 && tTime <= 0) {
                    // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
                    time && (tween._zTime = time);
                    return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                }
            }
        } else if (runBackwards && dur) //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
        {
            if (!prevStartAt) {
                time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                p = _setDefaults({
                    overwrite: false,
                    data: "isFromStart",
                    //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                    lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                    immediateRender: immediateRender,
                    //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                    stagger: 0,
                    parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})
                _removeFromParent(tween._startAt = Tween.set(targets, p));
                tween._startAt._dp = 0; // don't allow it to get put back into root timeline!
                tween._startAt._sat = tween; // used in globalTime()
                time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
                tween._zTime = time;
                if (!immediateRender) _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded
                else if (!time) return;
            }
        }
        tween._pt = tween._ptCache = 0;
        lazy = dur && _isNotFalse(lazy) || lazy && !dur;
        for(i = 0; i < targets.length; i++){
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function(name) {
                    ptLookup[name] = pt;
                });
                plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
                for(p in cleanVars)if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
                else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
                _overwritingTween = tween;
                _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!
                overwritten = !tween.parent;
                _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
        }
        hasPriority && _sortPropTweensByPriority(tween);
        tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
    keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
}, _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
    if (!ptCache) {
        ptCache = tween._ptCache[property] = [];
        lookup = tween._ptLookup;
        i = tween._targets.length;
        while(i--){
            pt = lookup[i][property];
            if (pt && pt.d && pt.d._pt) {
                // it's a plugin, so find the nested PropTween
                pt = pt.d._pt;
                while(pt && pt.p !== property && pt.fp !== property)// "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
                pt = pt._next;
            }
            if (!pt) {
                // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
                // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
                _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.
                tween.vars[property] = "+=0";
                _initTween(tween, time);
                _forceAllPropTweens = 0;
                return skipRecursion ? _warn(property + " not eligible for reset") : 1; // if someone tries to do a quickTo() on a special property like borderRadius which must get split into 4 different properties, that's not eligible for .resetTo().
            }
            ptCache.push(pt);
        }
    }
    i = ptCache.length;
    while(i--){
        rootPT = ptCache[i];
        pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.
        pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
        pt.c = value - pt.s;
        rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)
        rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
    }
}, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) return vars;
    copy = _merge({}, vars);
    for(p in propertyAliases)if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while(i--)copy[aliases[i]] = copy[p];
    }
    return copy;
}, // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
        a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease
        obj.forEach(function(value, i) {
            return a.push({
                t: i / (obj.length - 1) * 100,
                v: value,
                e: ease
            });
        });
    } else for(p in obj){
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
            t: parseFloat(prop),
            v: obj[p],
            e: ease
        });
    }
}, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
}, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
});
var Tween = /*#__PURE__*/ function(_Animation2) {
    _inheritsLoose(Tween, _Animation2);
    function Tween(targets, vars, position, skipInherit) {
        var _this3;
        if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
        }
        _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
        var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [
            targets
        ] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
        _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property
        _this3._overwrite = overwrite;
        if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new Timeline({
                data: "nested",
                defaults: defaults || {},
                targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
            }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.
            tl.kill();
            tl.parent = tl._dp = _assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                l = parsedTargets.length;
                staggerFunc = stagger && distribute(stagger);
                if (_isObject(stagger)) {
                    //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
                    for(p in stagger)if (~_staggerTweenProps.indexOf(p)) {
                        staggerVarsToMerge || (staggerVarsToMerge = {});
                        staggerVarsToMerge[p] = stagger[p];
                    }
                }
                for(i = 0; i < l; i++){
                    copy = _copyExcluding(vars, _staggerPropsToSkip);
                    copy.stagger = 0;
                    yoyoEase && (copy.yoyoEase = yoyoEase);
                    staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                    curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.
                    copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                    copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                    if (!stagger && l === 1 && copy.delay) {
                        // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
                        _this3._delay = delay = copy.delay;
                        _this3._start += delay;
                        copy.delay = 0;
                    }
                    tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                    tl._ease = _easeMap.none;
                }
                tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
            } else if (keyframes) {
                _inheritDefaults(_setDefaults(tl.vars.defaults, {
                    ease: "none"
                }));
                tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
                var time = 0, a, kf, v;
                if (_isArray(keyframes)) {
                    keyframes.forEach(function(frame) {
                        return tl.to(parsedTargets, frame, ">");
                    });
                    tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
                } else {
                    copy = {};
                    for(p in keyframes)p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                    for(p in copy){
                        a = copy[p].sort(function(a, b) {
                            return a.t - b.t;
                        });
                        time = 0;
                        for(i = 0; i < a.length; i++){
                            kf = a[i];
                            v = {
                                ease: kf.e,
                                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                            };
                            v[p] = kf.v;
                            tl.to(parsedTargets, v, time);
                            time += v.duration;
                        }
                    }
                    tl.duration() < duration && tl.to({}, {
                        duration: duration - tl.duration()
                    }); // in case keyframes didn't go to 100%
                }
            }
            duration || _this3.duration(duration = tl.duration());
        } else _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
        if (overwrite === true && !_suppressOverwrites) {
            _overwritingTween = _assertThisInitialized(_this3);
            _globalTimeline.killTweensOf(parsedTargets);
            _overwritingTween = 0;
        }
        _addToTimeline(parent, _assertThisInitialized(_this3), position);
        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);
        if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
            _this3.render(Math.max(0, -delay) || 0); //in case delay is negative
        }
        scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
    }
    var _proto3 = Tween.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
        if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force);
        else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
            // this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
            time = tTime;
            timeline = this.timeline;
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && isNegative) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    prevIteration = _roundPrecise(tTime / cycleDuration); // full decimal version of iterations, not the previous iteration (we're reusing prevIteration variable for efficiency)
                    iteration = ~~prevIteration;
                    if (iteration && iteration === prevIteration) {
                        time = dur;
                        iteration--;
                    } else if (time > dur) time = dur;
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) {
                    yoyoEase = this._yEase;
                    time = dur - time;
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted && iteration === prevIteration) {
                    //could be during the repeatDelay part. No need to render and fire callbacks.
                    this._tTime = tTime;
                    return this;
                }
                if (iteration !== prevIteration) {
                    timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality
                    if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
                        // this._time will === cycleDuration when we render at EXACTLY the end of an iteration. Without this condition, it'd often do the repeatRefresh render TWICE (again on the very next tick).
                        this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.
                        this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                    }
                }
            }
            if (!this._initted) {
                if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                    this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.
                    return this;
                }
                if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values. But we also don't want to dump if we're doing a repeatRefresh render!
                return this;
                if (dur !== this._dur) // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
                return this.render(totalTime, suppressEvents, force);
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
                this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
                this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) this.ratio = ratio = 1 - ratio;
            if (time && !prevTime && !suppressEvents && !iteration) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            pt = this._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
            timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
                isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                _callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                    // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
                    _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
            }
        }
        return this;
    };
    _proto3.targets = function targets() {
        return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
        // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
        (!soft || !this.vars.runBackwards) && (this._startAt = 0);
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate(soft);
        return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
        _tickerActive || _ticker.wake();
        this._ts || this.play();
        var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
        this._initted || _initTween(this, time);
        ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
        // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
        // if (_isObject(property)) { // performance optimization
        // 	for (p in property) {
        // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
        // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
        // 		}
        // 	}
        // } else {
        if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) return this.resetTo(property, value, start, startIsRelative, 1); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
         //}
        _alignPlayhead(this, 0);
        this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
        return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) vars = "all";
        if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
            return this;
        }
        if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.
            return this;
        }
        var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
        if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if (vars !== "all") {
            //so people can pass in a comma-delimited list of property names
            if (_isString(vars)) {
                p = {};
                _forEachName(vars, function(name) {
                    return p[name] = 1;
                });
                vars = p;
            }
            vars = _addAliasesToVars(parsedTargets, vars);
        }
        i = parsedTargets.length;
        while(i--)if (~killingTargets.indexOf(parsedTargets[i])) {
            curLookup = propTweenLookup[i];
            if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {};
            } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                props = vars;
            }
            for(p in props){
                pt = curLookup && curLookup[p];
                if (pt) {
                    if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
                    delete curLookup[p];
                }
                if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
            }
        }
        this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
        return this;
    };
    Tween.to = function to(targets, vars) {
        return new Tween(targets, vars, arguments[2]);
    };
    Tween.from = function from(targets, vars) {
        return _createTweenType(1, arguments);
    };
    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay: delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
        }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
    };
    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
        return _createTweenType(2, arguments);
    };
    Tween.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween(targets, vars);
    };
    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween;
}(Animation);
_setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
        var tl = new Timeline(), params = _slice.call(arguments, 0);
        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
    };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */ var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
}, _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
}, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
}, _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
}, _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
}, _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
}, _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) //b = beginning string
    s = data.b;
    else if (ratio === 1 && data.e) //e = ending string
    s = data.e;
    else {
        while(pt){
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.
            pt = pt._next;
        }
        s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }
    data.set(data.t, data.p, s, data);
}, _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while(pt){
        pt.r(ratio, pt.d);
        pt = pt._next;
    }
}, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt, next;
    while(pt){
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
    }
}, _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while(pt){
        next = pt._next;
        if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt");
        else if (!pt.dep) hasNonDependentRemaining = 1;
        pt = next;
    }
    return !hasNonDependentRemaining;
}, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt, next, pt2, first, last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)
    while(pt){
        next = pt._next;
        pt2 = first;
        while(pt2 && pt2.pr > pt.pr)pt2 = pt2._next;
        if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
        else first = pt;
        if (pt._next = pt2) pt2._prev = pt;
        else last = pt;
        pt = next;
    }
    parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
var PropTween = /*#__PURE__*/ function() {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || _renderPlain;
        this.d = data || this;
        this.set = setter || _setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) next._prev = this;
    }
    var _proto4 = PropTween.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)
        this.set = _setterWithModifier;
        this.m = func;
        this.mt = target; //modifier target
        this.tween = tween;
    };
    return PropTween;
}(); //Initialization tasks
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [], _listeners = {}, _emptyArray = [], _lastMediaTime = 0, _contextID = 0, _dispatch = function _dispatch(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
        return f();
    });
}, _onMediaChange = function _onMediaChange() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
        _dispatch("matchMediaInit");
        _media.forEach(function(c) {
            var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
            for(p in queries){
                match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.
                match && (anyMatch = 1);
                if (match !== conditions[p]) {
                    conditions[p] = match;
                    toggled = 1;
                }
            }
            if (toggled) {
                c.revert();
                anyMatch && matches.push(c);
            }
        });
        _dispatch("matchMediaRevert");
        matches.forEach(function(c) {
            return c.onMatch(c, function(func) {
                return c.add(null, func);
            });
        });
        _lastMediaTime = time;
        _dispatch("matchMedia");
    }
};
var Context = /*#__PURE__*/ function() {
    function Context(func, scope) {
        this.selector = scope && selector(scope);
        this.data = [];
        this._r = []; // returned/cleanup functions
        this.isReverted = false;
        this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely
        func && this.add(func);
    }
    var _proto5 = Context.prototype;
    _proto5.add = function add(name, func, scope) {
        // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
        // if (name && _isFunction(name.revert)) {
        // 	this.data.push(name);
        // 	return (name._ctx = this);
        // }
        if (_isFunction(name)) {
            scope = func;
            func = name;
            name = _isFunction;
        }
        var self = this, f = function f() {
            var prev = _context, prevSelector = self.selector, result;
            prev && prev !== self && prev.data.push(self);
            scope && (self.selector = selector(scope));
            _context = self;
            result = func.apply(self, arguments);
            _isFunction(result) && self._r.push(result);
            _context = prev;
            self.selector = prevSelector;
            self.isReverted = false;
            return result;
        };
        self.last = f;
        return name === _isFunction ? f(self, function(func) {
            return self.add(null, func);
        }) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
        var prev = _context;
        _context = null;
        func(this);
        _context = prev;
    };
    _proto5.getTweens = function getTweens() {
        var a = [];
        this.data.forEach(function(e) {
            return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
        });
        return a;
    };
    _proto5.clear = function clear() {
        this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia) {
        var _this4 = this;
        if (revert) (function() {
            var tweens = _this4.getTweens(), i = _this4.data.length, t;
            while(i--){
                // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
                t = _this4.data[i];
                if (t.data === "isFlip") {
                    t.revert();
                    t.getChildren(true, true, false).forEach(function(tween) {
                        return tweens.splice(tweens.indexOf(tween), 1);
                    });
                }
            } // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort
            tweens.map(function(t) {
                return {
                    g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
                    t: t
                };
            }).sort(function(a, b) {
                return b.g - a.g || -Infinity;
            }).forEach(function(o) {
                return o.t.revert(revert);
            }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.
            i = _this4.data.length;
            while(i--){
                // make sure we loop backwards so that, for example, SplitTexts that were created later on the same element get reverted first
                t = _this4.data[i];
                if (t instanceof Timeline) {
                    if (t.data !== "nested") {
                        t.scrollTrigger && t.scrollTrigger.revert();
                        t.kill(); // don't revert() the timeline because that's duplicating efforts since we already reverted all the tweens
                    }
                } else !(t instanceof Tween) && t.revert && t.revert(revert);
            }
            _this4._r.forEach(function(f) {
                return f(revert, _this4);
            });
            _this4.isReverted = true;
        })();
        else this.data.forEach(function(e) {
            return e.kill && e.kill();
        });
        this.clear();
        if (matchMedia) {
            var i = _media.length;
            while(i--)// previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
            _media[i].id === this.id && _media.splice(i, 1);
        }
    } // killWithCleanup() {
    ;
    _proto5.revert = function revert(config) {
        this.kill(config || {});
    };
    return Context;
}();
var MatchMedia = /*#__PURE__*/ function() {
    function MatchMedia(scope) {
        this.contexts = [];
        this.scope = scope;
        _context && _context.data.push(this);
    }
    var _proto6 = MatchMedia.prototype;
    _proto6.add = function add(conditions, func, scope) {
        _isObject(conditions) || (conditions = {
            matches: conditions
        });
        var context = new Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
        _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()
        this.contexts.push(context);
        func = context.add("onMatch", func);
        context.queries = conditions;
        for(p in conditions)if (p === "all") active = 1;
        else {
            mq = _win.matchMedia(conditions[p]);
            if (mq) {
                _media.indexOf(context) < 0 && _media.push(context);
                (cond[p] = mq.matches) && (active = 1);
                mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
            }
        }
        active && func(context, function(f) {
            return context.add(null, f);
        });
        return this;
    } // refresh() {
    ;
    _proto6.revert = function revert(config) {
        this.kill(config || {});
    };
    _proto6.kill = function kill(revert) {
        this.contexts.forEach(function(c) {
            return c.kill(revert, true);
        });
    };
    return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */ var _gsap = {
    registerPlugin: function registerPlugin() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        args.forEach(function(config) {
            return _createPlugin(config);
        });
    },
    timeline: function timeline(vars) {
        return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
        return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
        _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in
        var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
        unit === "native" && (unit = "");
        return !target ? target : !property ? function(property, unit, uncache) {
            return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
        target = toArray(target);
        if (target.length > 1) {
            var setters = target.map(function(t) {
                return gsap.quickSetter(t, property, unit);
            }), l = setters.length;
            return function(value) {
                var i = l;
                while(i--)setters[i](value);
            };
        }
        target = target[0] || {};
        var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, // in case it's an alias, like "rotate" for "rotation".
        setter = Plugin ? function(value) {
            var p = new Plugin();
            _quickTween._pt = 0;
            p.init(target, unit ? value + unit : value, _quickTween, 0, [
                target
            ]);
            p.render(1, p);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
        } : cache.set(target, p);
        return Plugin ? setter : function(value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
        };
    },
    quickTo: function quickTo(target, property, vars) {
        var _setDefaults2;
        var tween = gsap.to(target, _setDefaults((_setDefaults2 = {}, _setDefaults2[property] = "+=0.1", _setDefaults2.paused = true, _setDefaults2.stagger = 0, _setDefaults2), vars || {})), func = function func(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
        };
        func.tween = tween;
        return func;
    },
    isTweening: function isTweening(targets) {
        return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
        value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
        return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
        return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
        (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
        });
        _effects[name] = function(targets, vars, tl) {
            return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
        };
        if (extendTimeline) Timeline.prototype[name] = function(targets, vars, position) {
            return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
    },
    registerEase: function registerEase(name, ease) {
        _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
        return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) vars = {};
        var tl = new Timeline(vars), child, next;
        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
        _globalTimeline.remove(tl);
        tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).
        tl._time = tl._tTime = _globalTimeline._time;
        child = _globalTimeline._first;
        while(child){
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
            child = next;
        }
        _addToTimeline(_globalTimeline, tl, 0);
        return tl;
    },
    context: function context(func, scope) {
        return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
        return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
        return _media.forEach(function(c) {
            var cond = c.conditions, found, p;
            for(p in cond)if (cond[p]) {
                cond[p] = false;
                found = 1;
            }
            found && c.revert();
        }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
        var a = _listeners[type] || (_listeners[type] = []);
        ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
        var a = _listeners[type], i = a && a.indexOf(callback);
        i >= 0 && a.splice(i, 1);
    },
    utils: {
        wrap: wrap,
        wrapYoyo: wrapYoyo,
        distribute: distribute,
        random: random,
        snap: snap,
        normalize: normalize,
        getUnit: getUnit,
        clamp: clamp,
        splitColor: splitColor,
        toArray: toArray,
        selector: selector,
        mapRange: mapRange,
        pipe: pipe,
        unitize: unitize,
        interpolate: interpolate,
        shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
        PropTween: PropTween,
        globals: _addGlobal,
        Tween: Tween,
        Timeline: Timeline,
        Animation: Animation,
        getCache: _getCache,
        _removeLinkedListItem: _removeLinkedListItem,
        reverting: function reverting() {
            return _reverting;
        },
        context: function context(toAdd) {
            if (toAdd && _context) {
                _context.data.push(toAdd);
                toAdd._ctx = _context;
            }
            return _context;
        },
        suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites = value;
        }
    }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
    duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------
var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while(pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop)pt = pt._next;
    return pt;
}, _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for(p in modifiers){
        i = targets.length;
        while(i--){
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
                if (pt._pt) // is a plugin
                pt = _getPluginPropTween(pt, p);
                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
        }
    }
}, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
        name: name,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init(target, vars, tween) {
            tween._onInit = function(tween) {
                var temp, p;
                if (_isString(vars)) {
                    temp = {};
                    _forEachName(vars, function(name) {
                        return temp[name] = 1;
                    }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.
                    vars = temp;
                }
                if (modifier) {
                    temp = {};
                    for(p in vars)temp[p] = modifier(vars[p]);
                    vars = temp;
                }
                _addModifiers(tween, vars);
            };
        }
    };
}; //register core plugins
var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
        var p, pt, v;
        this.tween = tween;
        for(p in vars){
            v = target.getAttribute(p) || "";
            pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
            pt.op = p;
            pt.b = v; // record the beginning value so we can revert()
            this._props.push(p);
        }
    },
    render: function render(ratio, data) {
        var pt = data._pt;
        while(pt){
            _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)
            pt = pt._next;
        }
    }
}, {
    name: "endArray",
    init: function init(target, value) {
        var i = value.length;
        while(i--)this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.
Tween.version = Timeline.version = gsap.version = "3.12.7";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"l02JQ":[function(require,module,exports,__globalThis) {
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSPlugin", ()=>CSSPlugin);
parcelHelpers.export(exports, "default", ()=>CSSPlugin);
parcelHelpers.export(exports, "_getBBox", ()=>_getBBox);
parcelHelpers.export(exports, "_createElement", ()=>_createElement);
parcelHelpers.export(exports, "checkPrefix", ()=>_checkPropPrefix);
var _gsapCoreJs = require("./gsap-core.js");
var _win, _doc, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
}, //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : .5)) + data.u, data);
}, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
}, _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
}, _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
}, _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
}, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
}, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
}, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _saveStyle = function _saveStyle(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style, cache = target._gsap;
    if (property in _transformProps && style) {
        this.tfm = this.tfm || {};
        if (property !== "transform") {
            property = _propertyAliases[property] || property;
            ~property.indexOf(",") ? property.split(",").forEach(function(a) {
                return _this.tfm[a] = _get(target, a);
            }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.
            property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
        } else return _propertyAliases.transform.split(",").forEach(function(p) {
            return _saveStyle.call(_this, p, isNotCSS);
        });
        if (this.props.indexOf(_transformProp) >= 0) return;
        if (cache.svg) {
            this.svgo = target.getAttribute("data-svg-origin");
            this.props.push(_transformOriginProp, isNotCSS, "");
        }
        property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
}, _removeIndependentTransforms = function _removeIndependentTransforms(style) {
    if (style.translate) {
        style.removeProperty("translate");
        style.removeProperty("scale");
        style.removeProperty("rotate");
    }
}, _revertStyle = function _revertStyle() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
    for(i = 0; i < props.length; i += 3){
        // stored like this: property, isNotCSS, value
        if (!props[i + 1]) props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
        else if (props[i + 1] === 2) // non-CSS value (function-based)
        target[props[i]](props[i + 2]);
        else // non-CSS value (not function-based)
        target[props[i]] = props[i + 2];
    }
    if (this.tfm) {
        for(p in this.tfm)cache[p] = this.tfm[p];
        if (cache.svg) {
            cache.renderTransform();
            target.setAttribute("data-svg-origin", this.svgo || "");
        }
        i = _reverting();
        if ((!i || !i.isStart) && !style[_transformProp]) {
            _removeIndependentTransforms(style);
            if (cache.zOrigin && style[_transformOriginProp]) {
                style[_transformOriginProp] += " " + cache.zOrigin + "px"; // since we're uncaching, we must put the zOrigin back into the transformOrigin so that we can pull it out accurately when we parse again. Otherwise, we'd lose the z portion of the origin since we extract it to protect from Safari bugs.
                cache.zOrigin = 0;
                cache.renderTransform();
            }
            cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
        }
    }
}, _getStyleSaver = function _getStyleSaver(target, properties) {
    var saver = {
        target: target,
        props: [],
        revert: _revertStyle,
        save: _saveStyle
    };
    target._gsap || (0, _gsapCoreJs.gsap).core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.
    properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
        return saver.save(p);
    }); // make sure it's a DOM node too.
    return saver;
}, _supports3D, _createElement = function _createElement(type, ns) {
    var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
    return e && e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://gsap.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
}, _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
}, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) return property;
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while(i-- && !(_prefixes[i] + property in s));
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
}, _initCore = function _initCore() {
    if (_windowExists() && window.document) {
        _win = window;
        _doc = _win.document;
        _docElement = _doc.documentElement;
        _tempDiv = _createElement("div") || {
            style: {}
        };
        _tempDivStyler = _createElement("div");
        _transformProp = _checkPropPrefix(_transformProp);
        _transformOriginProp = _transformProp + "Origin";
        _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.
        _supports3D = !!_checkPropPrefix("perspective");
        _reverting = (0, _gsapCoreJs.gsap).core.reverting;
        _pluginInitted = 1;
    }
}, _getReparentedCloneBBox = function _getReparentedCloneBBox(target) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
    clone.style.display = "block";
    svg.appendChild(clone);
    _docElement.appendChild(svg);
    try {
        bbox = clone.getBBox();
    } catch (e) {}
    svg.removeChild(clone);
    _docElement.removeChild(svg);
    return bbox;
}, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while(i--){
        if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
    }
}, _getBBox = function _getBBox(target) {
    var bounds, cloned;
    try {
        bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
        bounds = _getReparentedCloneBBox(target);
        cloned = 1;
    }
    bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
        x: +_getAttributeFallbacks(target, [
            "x",
            "cx",
            "x1"
        ]) || 0,
        y: +_getAttributeFallbacks(target, [
            "y",
            "cy",
            "y1"
        ]) || 0,
        width: 0,
        height: 0
    } : bounds;
}, _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
}, //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
    if (property) {
        var style = target.style, first2Chars;
        if (property in _transformProps && property !== _transformOriginProp) property = _transformProp;
        if (style.removeProperty) {
            first2Chars = property.substr(0, 2);
            if (first2Chars === "ms" || property.substr(0, 6) === "webkit") //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
            property = "-" + property;
            style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
        } else //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        style.removeAttribute(property);
    }
}, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
}, _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
}, _nonStandardLayouts = {
    grid: 1,
    flex: 1
}, //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
    style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
        px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
        return (0, _gsapCoreJs._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
    if (!parent || parent === _doc || !parent.appendChild) parent = _doc.body;
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === (0, _gsapCoreJs._ticker).time && !cache.uncache) return (0, _gsapCoreJs._round)(curValue / cache.width * amount);
    else {
        if (toPercent && (property === "height" || property === "width")) {
            // if we're dealing with width/height that's inside a container with padding and/or it's a flexbox/grid container, we must apply it to the target itself rather than the _tempDiv in order to ensure complete accuracy, factoring in the parent's padding.
            var v = target.style[property];
            target.style[property] = amount + unit;
            px = target[measureProperty];
            v ? target.style[property] = v : _removeProperty(target, property);
        } else {
            (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
            parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.
            parent.appendChild(_tempDiv);
            px = _tempDiv[measureProperty];
            parent.removeChild(_tempDiv);
            style.position = "absolute";
        }
        if (horizontal && toPercent) {
            cache = (0, _gsapCoreJs._getCache)(parent);
            cache.time = (0, _gsapCoreJs._ticker).time;
            cache.width = parent[measureProperty];
        }
    }
    return (0, _gsapCoreJs._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
        property = _propertyAliases[property];
        if (~property.indexOf(",")) property = property.split(",")[0];
    }
    if (_transformProps[property] && property !== "transform") {
        value = _parseTransform(target, uncache);
        value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
        value = target.style[property];
        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0, _gsapCoreJs._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
}, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
        // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://gsap.com/forums/topic/18310-clippath-doesnt-work-on-ios/
        var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
        if (s && s !== start) {
            prop = p;
            start = s;
        } else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://gsap.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
    var pt = new (0, _gsapCoreJs.PropTween)(this._pt, target.style, prop, 0, 1, (0, _gsapCoreJs._renderComplexString)), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += ""; // ensure values are strings
    end += "";
    if (end === "auto") {
        startValue = target.style[prop];
        target.style[prop] = end;
        end = _getComputedProperty(target, prop) || end;
        startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
    }
    a = [
        start,
        end
    ];
    (0, _gsapCoreJs._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().
    start = a[0];
    end = a[1];
    startValues = start.match((0, _gsapCoreJs._numWithUnitExp)) || [];
    endValues = end.match((0, _gsapCoreJs._numWithUnitExp)) || [];
    if (endValues.length) {
        while(result = (0, _gsapCoreJs._numWithUnitExp).exec(end)){
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) color = (color + 1) % 5;
            else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                endValue.charAt(1) === "=" && (endValue = (0, _gsapCoreJs._parseRelative)(startNum, endValue) + startUnit);
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = (0, _gsapCoreJs._numWithUnitExp).lastIndex - endUnit.length;
                if (!endUnit) {
                    //if something like "perspective:300" is passed in and we must add a unit to the end
                    endUnit = endUnit || (0, _gsapCoreJs._config).units[prop] || startUnit;
                    if (index === end.length) {
                        end += endUnit;
                        pt.e += endUnit;
                    }
                }
                if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                 // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
                pt._pt = {
                    _next: pt._pt,
                    p: chunk || matchIndex === 1 ? chunk : ",",
                    //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                    s: startNum,
                    c: endNum - startNum,
                    m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
            }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    } else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    (0, _gsapCoreJs._relExp).test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.
    return pt;
}, _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        //the user provided them in the wrong order, so flip them
        value = x;
        x = y;
        y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
}, _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
        if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
        } else {
            props = props.split(",");
            i = props.length;
            while(--i > -1){
                prop = props[i];
                if (_transformProps[prop]) {
                    clearTransforms = 1;
                    prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                }
                _removeProperty(target, prop);
            }
        }
        if (clearTransforms) {
            _removeProperty(target, _transformProp);
            if (cache) {
                cache.svg && target.removeAttribute("transform");
                style.scale = style.rotate = style.translate = "none";
                _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.
                cache.uncache = 1;
                _removeIndependentTransforms(style);
            }
        }
    }
}, // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
        if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
        }
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */ _identity2DMatrix = [
    1,
    0,
    0,
    1,
    0,
    0
], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match((0, _gsapCoreJs._numExp)).map((0, _gsapCoreJs._round));
}, _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || (0, _gsapCoreJs._getCache)(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
        matrix = [
            temp.a,
            temp.b,
            temp.c,
            temp.d,
            temp.e,
            temp.f
        ];
        return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
        //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
        temp = style.display;
        style.display = "block";
        parent = target.parentNode;
        if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
            // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375. Note: position: fixed elements report a null offsetParent but they could also be invisible because they're in an ancestor with display: none, so we check getBoundingClientRect(). We only want to alter the DOM if we absolutely have to because it can cause iframe content to reload, like a Vimeo video.
            addedToDOM = 1; //flag
            nextSibling = target.nextElementSibling;
            _docElement.appendChild(target); //we must add it to the DOM in order to get values properly
        }
        matrix = _getComputedTransformMatrixAsArray(target);
        temp ? style.display = temp : _removeProperty(target, "display");
        if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
    return force2D && matrix.length > 6 ? [
        matrix[0],
        matrix[1],
        matrix[4],
        matrix[5],
        matrix[12],
        matrix[13]
    ] : matrix;
}, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
        bounds = _getBBox(target);
        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin); // if (!("xOrigin" in cache) && (xOrigin || yOrigin)) { // added in 3.12.3, reverted in 3.12.4; requires more exploration
    // 	xOrigin -= bounds.x;
    // 	yOrigin -= bounds.y;
    // }
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
        //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y; // theory: we only had to do this for smoothing and it assumes that the previous one was not originIsAbsolute.
    }
    if (smooth || smooth !== false && cache.smooth) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else cache.xOffset = cache.yOffset = 0;
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).
    if (pluginToAddPropTweensTo) {
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new (0, _gsapCoreJs.GSCache)(target);
    if ("x" in cache && !uncache && !cache.uncache) return cache;
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
        // accommodate independent transforms by combining them into normal ones.
        if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
        style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
        if (cache.uncache) {
            // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
            t2 = target.getBBox();
            origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
            t1 = "";
        } else t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
        _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
        a = matrix[0]; //a11
        b = matrix[1]; //a21
        c = matrix[2]; //a31
        d = matrix[3]; //a41
        x = a12 = matrix[4];
        y = a22 = matrix[5]; //2D matrix
        if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
            if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
            } //3D matrix
        } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG; //rotationX
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
            } //rotationY
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
            } //rotationZ
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
            }
            scaleX = (0, _gsapCoreJs._round)(Math.sqrt(a * a + b * b + c * c));
            scaleY = (0, _gsapCoreJs._round)(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }
        if (cache.svg) {
            //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
            t1 && target.setAttribute("transform", t1);
        }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
        } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
        }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = (0, _gsapCoreJs._round)(scaleX);
    cache.scaleY = (0, _gsapCoreJs._round)(scaleY);
    cache.rotation = (0, _gsapCoreJs._round)(rotation) + deg;
    cache.rotationX = (0, _gsapCoreJs._round)(rotationX) + deg;
    cache.rotationY = (0, _gsapCoreJs._round)(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = (0, _gsapCoreJs._config).force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
}, _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
}, //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = (0, _gsapCoreJs.getUnit)(start);
    return (0, _gsapCoreJs._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
}, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
}, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
        var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
        angle = parseFloat(rotationX) * _DEG2RAD;
        cos = Math.cos(angle);
        x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
    if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
    if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
    if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    target.style[_transformProp] = transforms || "translate(0, 0)";
}, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
        //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
    }
    if (rotation || skewX) {
        rotation *= _DEG2RAD;
        skewX *= _DEG2RAD;
        a11 = Math.cos(rotation) * scaleX;
        a21 = Math.sin(rotation) * scaleX;
        a12 = Math.sin(rotation - skewX) * -scaleY;
        a22 = Math.cos(rotation - skewX) * scaleY;
        if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
            }
        }
        a11 = (0, _gsapCoreJs._round)(a11);
        a21 = (0, _gsapCoreJs._round)(a21);
        a12 = (0, _gsapCoreJs._round)(a12);
        a22 = (0, _gsapCoreJs._round)(a22);
    } else {
        a11 = scaleX;
        a22 = scaleY;
        a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
        tx = _convertToUnit(target, "x", x, "px");
        ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = (0, _gsapCoreJs._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = (0, _gsapCoreJs._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
        //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
        temp = target.getBBox();
        tx = (0, _gsapCoreJs._round)(tx + xPercent / 100 * temp.width);
        ty = (0, _gsapCoreJs._round)(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
}, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = (0, _gsapCoreJs._isString)(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
        direction = endValue.split("_")[1];
        if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
        }
        if (direction === "cw" && change < 0) change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
        else if (direction === "ccw" && change > 0) change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
    plugin._pt = pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
}, _assign = function _assign(target, source) {
    // Internet Explorer doesn't have Object.assign(), so we recreate it here.
    for(var p in source)target[p] = source[p];
    return target;
}, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
        startValue = target.getAttribute("transform");
        target.setAttribute("transform", "");
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        _removeProperty(target, _transformProp);
        target.setAttribute("transform", startValue);
    } else {
        startValue = getComputedStyle(target)[_transformProp];
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        style[_transformProp] = startValue;
    }
    for(p in _transformProps){
        startValue = startCache[p];
        endValue = endCache[p];
        if (startValue !== endValue && exclude.indexOf(p) < 0) {
            //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
            startUnit = (0, _gsapCoreJs.getUnit)(startValue);
            endUnit = (0, _gsapCoreJs.getUnit)(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
        }
    }
    _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
(0, _gsapCoreJs._forEachName)("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
        t,
        r,
        b,
        l
    ] : [
        t + l,
        t + r,
        b + r,
        b + l
    ]).map(function(side) {
        return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
        var a, vars;
        if (arguments.length < 4) {
            // getter, passed target, property, and unit (from _get())
            a = props.map(function(prop) {
                return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
        }
        a = (endValue + "").split(" ");
        vars = {};
        props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
    };
});
var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
        return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
        var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
        _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps
        this.styles = this.styles || _getStyleSaver(target);
        inlineProps = this.styles.props;
        this.tween = tween;
        for(p in vars){
            if (p === "autoRound") continue;
            endValue = vars[p];
            if ((0, _gsapCoreJs._plugins)[p] && (0, _gsapCoreJs._checkPlugin)(p, vars, tween, index, target, targets)) continue;
            type = typeof endValue;
            specialProp = _specialProps[p];
            if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) endValue = (0, _gsapCoreJs._replaceRandom)(endValue);
            if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            else if (p.substr(0, 2) === "--") {
                //CSS variable
                startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                endValue += "";
                (0, _gsapCoreJs._colorExp).lastIndex = 0;
                if (!(0, _gsapCoreJs._colorExp).test(startValue)) {
                    // colors don't have units
                    startUnit = (0, _gsapCoreJs.getUnit)(startValue);
                    endUnit = (0, _gsapCoreJs.getUnit)(endValue);
                }
                endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                props.push(p);
                inlineProps.push(p, 0, style[p]);
            } else if (type !== "undefined") {
                if (startAt && p in startAt) {
                    // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
                    startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                    (0, _gsapCoreJs._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0, _gsapCoreJs._replaceRandom)(startValue));
                    (0, _gsapCoreJs.getUnit)(startValue + "") || startValue === "auto" || (startValue += (0, _gsapCoreJs._config).units[p] || (0, _gsapCoreJs.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.
                    (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
                } else startValue = _get(target, p);
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
                relative && (endValue = endValue.substr(2));
                endNum = parseFloat(endValue);
                if (p in _propertyAliases) {
                    if (p === "autoAlpha") {
                        //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
                        if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                        startNum = 0;
                        inlineProps.push("visibility", 0, style.visibility);
                        _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                    }
                    if (p !== "scale" && p !== "transform") {
                        p = _propertyAliases[p];
                        ~p.indexOf(",") && (p = p.split(",")[0]);
                    }
                }
                isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---
                if (isTransformRelated) {
                    this.styles.save(p);
                    if (!transformPropTween) {
                        cache = target._gsap;
                        cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.
                        smooth = vars.smoothOrigin !== false && cache.smooth;
                        transformPropTween = this._pt = new (0, _gsapCoreJs.PropTween)(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)
                        transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
                    }
                    if (p === "scale") {
                        this._pt = new (0, _gsapCoreJs.PropTween)(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0, _gsapCoreJs._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                        this._pt.u = 0;
                        props.push("scaleY", p);
                        p += "X";
                    } else if (p === "transformOrigin") {
                        inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                        endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.
                        if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                        else {
                            endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!
                            endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                            _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                        }
                        continue;
                    } else if (p === "svgOrigin") {
                        _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                        continue;
                    } else if (p in _rotationalProperties) {
                        _addRotationalPropTween(this, cache, p, startNum, relative ? (0, _gsapCoreJs._parseRelative)(startNum, relative + endValue) : endValue);
                        continue;
                    } else if (p === "smoothOrigin") {
                        _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                        continue;
                    } else if (p === "force3D") {
                        cache[p] = endValue;
                        continue;
                    } else if (p === "transform") {
                        _addRawTransformPTs(this, endValue, target);
                        continue;
                    }
                } else if (!(p in style)) p = _checkPropPrefix(p) || p;
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                    startUnit = (startValue + "").substr((startNum + "").length);
                    endNum || (endNum = 0); // protect against NaN
                    endUnit = (0, _gsapCoreJs.getUnit)(endValue) || (p in (0, _gsapCoreJs._config).units ? (0, _gsapCoreJs._config).units[p] : startUnit);
                    startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                    this._pt = new (0, _gsapCoreJs.PropTween)(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0, _gsapCoreJs._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                    this._pt.u = endUnit || 0;
                    if (startUnit !== endUnit && endUnit !== "%") {
                        //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
                        this._pt.b = startValue;
                        this._pt.r = _renderCSSPropWithBeginning;
                    }
                } else if (!(p in style)) {
                    if (p in target) //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
                    this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                    else if (p !== "parseTransform") {
                        (0, _gsapCoreJs._missingPlugin)(p, endValue);
                        continue;
                    }
                } else _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
                isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
                props.push(p);
            }
        }
        hasPriority && (0, _gsapCoreJs._sortPropTweensByPriority)(this);
    },
    render: function render(ratio, data) {
        if (data.tween._time || !_reverting()) {
            var pt = data._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
        } else data.styles.revert();
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
        //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
        var p = _propertyAliases[property];
        p && p.indexOf(",") < 0 && (property = p);
        return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}, property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0, _gsapCoreJs._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0, _gsapCoreJs._getSetter)(target, property);
    },
    core: {
        _removeProperty: _removeProperty,
        _getMatrix: _getMatrix
    }
};
(0, _gsapCoreJs.gsap).utils.checkPrefix = _checkPropPrefix;
(0, _gsapCoreJs.gsap).core.getStyleSaver = _getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
    var all = (0, _gsapCoreJs._forEachName)(positionAndScale + "," + rotation + "," + others, function(name) {
        _transformProps[name] = 1;
    });
    (0, _gsapCoreJs._forEachName)(rotation, function(name) {
        (0, _gsapCoreJs._config).units[name] = "deg";
        _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    (0, _gsapCoreJs._forEachName)(aliases, function(name) {
        var split = name.split(":");
        _propertyAliases[split[1]] = all[split[0]];
    });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
(0, _gsapCoreJs._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    (0, _gsapCoreJs._config).units[name] = "px";
});
(0, _gsapCoreJs.gsap).registerPlugin(CSSPlugin);

},{"./gsap-core.js":"05eeC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wnFk":[function(require,module,exports,__globalThis) {
/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollTrigger", ()=>ScrollTrigger);
parcelHelpers.export(exports, "default", ()=>ScrollTrigger);
var _observerJs = require("./Observer.js");
var gsap, _coreInitted, _win, _doc, _docEl, _body, _root, _resizeDelay, _toArray, _clamp, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites, _ignoreResize, _normalizer, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _context, _scrollRestoration, _div100vh, _100vh, _isReverted, _clampingMax, _limitCallbacks, // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
_startup = 1, _getTime = Date.now, _time1 = _getTime(), _lastScrollTime = 0, _enabled = 0, _parseClamp = function _parseClamp(value, type, self) {
    var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self["_" + type + "Clamp"] = clamp;
    return clamp ? value.substr(6, value.length - 7) : value;
}, _keepClamp = function _keepClamp(value, clamp) {
    return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
}, _rafBugFix = function _rafBugFix() {
    return _enabled && requestAnimationFrame(_rafBugFix);
}, // in some browsers (like Firefox), screen repaints weren't consistent unless we had SOMETHING queued up in requestAnimationFrame()! So this just creates a super simple loop to keep it alive and smooth out repaints.
_pointerDownHandler = function _pointerDownHandler() {
    return _pointerIsDown = 1;
}, _pointerUpHandler = function _pointerUpHandler() {
    return _pointerIsDown = 0;
}, _passThrough = function _passThrough(v) {
    return v;
}, _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _getGSAP = function _getGSAP() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
}, _isViewport = function _isViewport(e) {
    return !!~_root.indexOf(e);
}, _getViewportDimension = function _getViewportDimension(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win["inner" + dimensionProperty]) || _docEl["client" + dimensionProperty] || _body["client" + dimensionProperty];
}, _getBoundsFunc = function _getBoundsFunc(element) {
    return (0, _observerJs._getProxyProp)(element, "getBoundingClientRect") || (_isViewport(element) ? function() {
        _winOffsets.width = _win.innerWidth;
        _winOffsets.height = _100vh;
        return _winOffsets;
    } : function() {
        return _getBounds(element);
    });
}, _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
    var d = _ref.d, d2 = _ref.d2, a = _ref.a;
    return (a = (0, _observerJs._getProxyProp)(scroller, "getBoundingClientRect")) ? function() {
        return a()[d];
    } : function() {
        return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
    };
}, _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
    return !isViewport || ~(0, _observerJs._proxies).indexOf(element) ? _getBoundsFunc(element) : function() {
        return _winOffsets;
    };
}, _maxScroll = function _maxScroll(element, _ref2) {
    var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
    return Math.max(0, (s = "scroll" + d2, a = (0, _observerJs._getProxyProp)(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_docEl[s] || _body[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
}, _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
    for(var i = 0; i < _autoRefresh.length; i += 3)(!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
}, _isString = function _isString(value) {
    return typeof value === "string";
}, _isFunction = function _isFunction(value) {
    return typeof value === "function";
}, _isNumber = function _isNumber(value) {
    return typeof value === "number";
}, _isObject = function _isObject(value) {
    return typeof value === "object";
}, _endAnimation = function _endAnimation(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
}, _callback = function _callback(self, func) {
    if (self.enabled) {
        var result = self._ctx ? self._ctx.add(function() {
            return func(self);
        }) : func(self);
        result && result.totalTime && (self.callbackAnimation = result);
    }
}, _abs = Math.abs, _left = "left", _top = "top", _right = "right", _bottom = "bottom", _width = "width", _height = "height", _Right = "Right", _Left = "Left", _Top = "Top", _Bottom = "Bottom", _padding = "padding", _margin = "margin", _Width = "Width", _Height = "Height", _px = "px", _getComputedStyle = function _getComputedStyle(element) {
    return _win.getComputedStyle(element);
}, _makePositionable = function _makePositionable(element) {
    // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
    var position = _getComputedStyle(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
}, _setDefaults = function _setDefaults(obj, defaults) {
    for(var p in defaults)p in obj || (obj[p] = defaults[p]);
    return obj;
}, _getBounds = function _getBounds(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
}, _getSize = function _getSize(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
}, _getLabelRatioArray = function _getLabelRatioArray(timeline) {
    var a = [], labels = timeline.labels, duration = timeline.duration(), p;
    for(p in labels)a.push(labels[p] / duration);
    return a;
}, _getClosestLabel = function _getClosestLabel(animation) {
    return function(value) {
        return gsap.utils.snap(_getLabelRatioArray(animation), value);
    };
}, _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
    var snap = gsap.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a, b) {
        return a - b;
    });
    return a ? function(value, direction, threshold) {
        if (threshold === void 0) threshold = 1e-3;
        var i;
        if (!direction) return snap(value);
        if (direction > 0) {
            value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.
            for(i = 0; i < a.length; i++){
                if (a[i] >= value) return a[i];
            }
            return a[i - 1];
        } else {
            i = a.length;
            value += threshold;
            while(i--){
                if (a[i] <= value) return a[i];
            }
        }
        return a[0];
    } : function(value, direction, threshold) {
        if (threshold === void 0) threshold = 1e-3;
        var snapped = snap(value);
        return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
}, _getLabelAtDirection = function _getLabelAtDirection(timeline) {
    return function(value, st) {
        return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
    };
}, _multiListener = function _multiListener(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
        return func(element, type, callback);
    });
}, _addListener = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
        passive: !nonPassive,
        capture: !!capture
    });
}, _removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
}, _wheelListener = function _wheelListener(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
        func(el, "wheel", scrollFunc);
        func(el, "touchmove", scrollFunc);
    }
}, _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, _defaults = {
    toggleActions: "play",
    anticipatePin: 0
}, _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
}, _offsetToPx = function _offsetToPx(value, size) {
    if (_isString(value)) {
        var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
        if (~eqIndex) {
            value.indexOf("%") > eqIndex && (relative *= size / 100);
            value = value.substr(0, eqIndex - 1);
        }
        value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
}, _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e = _doc.createElement("div"), useFixedPosition = _isViewport(container) || (0, _observerJs._getProxyProp)(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === (0, _observerJs._vertical) ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    _positionMarker(e, 0, direction, isStart);
    return e;
}, _positionMarker = function _positionMarker(marker, start, direction, flipped) {
    var vars = {
        display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap.set(marker, vars);
}, _triggers = [], _ids = {}, _rafID, _sync = function _sync() {
    return _getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
}, _onScroll = function _onScroll() {
    // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
    if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) {
        // if the user is dragging the scrollbar, allow it.
        (0, _observerJs._scrollers).cache++;
        if (_normalizer) _rafID || (_rafID = requestAnimationFrame(_updateAll));
        else _updateAll(); // Safari in particular (on desktop) NEEDS the immediate update rather than waiting for a requestAnimationFrame() whereas iOS seems to benefit from waiting for the requestAnimationFrame() tick, at least when normalizing. See https://codepen.io/GreenSock/pen/qBYozqO?editors=0110
        _lastScrollTime || _dispatch("scrollStart");
        _lastScrollTime = _getTime();
    }
}, _setBaseDimensions = function _setBaseDimensions() {
    _baseScreenWidth = _win.innerWidth;
    _baseScreenHeight = _win.innerHeight;
}, _onResize = function _onResize(force) {
    (0, _observerJs._scrollers).cache++;
    (force === true || !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * 0.25)) && _resizeDelay.restart(true);
}, // ignore resizes triggered by refresh()
_listeners = {}, _emptyArray = [], _softRefresh = function _softRefresh() {
    return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
}, _dispatch = function _dispatch(type) {
    return _listeners[type] && _listeners[type].map(function(f) {
        return f();
    }) || _emptyArray;
}, _savedStyles = [], // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
    for(var i = 0; i < _savedStyles.length; i += 5)if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
        _savedStyles[i].style.cssText = _savedStyles[i + 1];
        _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
        _savedStyles[i + 3].uncache = 1;
    }
}, _revertAll = function _revertAll(kill, media) {
    var trigger;
    for(_i = 0; _i < _triggers.length; _i++){
        trigger = _triggers[_i];
        if (trigger && (!media || trigger._ctx === media)) {
            if (kill) trigger.kill(1);
            else trigger.revert(true, true);
        }
    }
    _isReverted = true;
    media && _revertRecorded(media);
    media || _dispatch("revert");
}, _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
    // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
    (0, _observerJs._scrollers).cache++;
    (force || !_refreshingAll) && (0, _observerJs._scrollers).forEach(function(obj) {
        return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString(scrollRestoration) && (_win.history.scrollRestoration = _scrollRestoration = scrollRestoration);
}, _refreshingAll, _refreshID = 0, _queueRefreshID, _queueRefreshAll = function _queueRefreshAll() {
    // we don't want to call _refreshAll() every time we create a new ScrollTrigger (for performance reasons) - it's better to batch them. Some frameworks dynamically load content and we can't rely on the window's "load" or "DOMContentLoaded" events to trigger it.
    if (_queueRefreshID !== _refreshID) {
        var id = _queueRefreshID = _refreshID;
        requestAnimationFrame(function() {
            return id === _refreshID && _refreshAll(true);
        });
    }
}, _refresh100vh = function _refresh100vh() {
    _body.appendChild(_div100vh);
    _100vh = !_normalizer && _div100vh.offsetHeight || _win.innerHeight;
    _body.removeChild(_div100vh);
}, _hideAllMarkers = function _hideAllMarkers(hide) {
    return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
        return el.style.display = hide ? "none" : "block";
    });
}, _refreshAll = function _refreshAll(force, skipRevert) {
    _docEl = _doc.documentElement; // some frameworks like Astro may cache the <body> and replace it during routing, so we'll just re-record the _docEl and _body for safety (otherwise, the markers may not get added properly).
    _body = _doc.body;
    _root = [
        _win,
        _doc,
        _docEl,
        _body
    ];
    if (_lastScrollTime && !force && !_isReverted) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
        return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger.isRefreshing = true;
    (0, _observerJs._scrollers).forEach(function(obj) {
        return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
    }); // force the clearing of the cache because some browsers take a little while to dispatch the "scroll" event and the user may have changed the scroll position and then called ScrollTrigger.refresh() right away
    var refreshInits = _dispatch("refreshInit");
    _sort && ScrollTrigger.sort();
    skipRevert || _revertAll();
    (0, _observerJs._scrollers).forEach(function(obj) {
        if (_isFunction(obj)) {
            obj.smooth && (obj.target.style.scrollBehavior = "auto"); // smooth scrolling interferes
            obj(0);
        }
    });
    _triggers.slice(0).forEach(function(t) {
        return t.refresh();
    }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.
    _isReverted = false;
    _triggers.forEach(function(t) {
        // nested pins (pinnedContainer) with pinSpacing may expand the container, so we must accommodate that here.
        if (t._subPinOffset && t.pin) {
            var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
            t.revert(true, 1);
            t.adjustPinSpacing(t.pin[prop] - original);
            t.refresh();
        }
    });
    _clampingMax = 1; // pinSpacing might be propping a page open, thus when we .setPositions() to clamp a ScrollTrigger's end we should leave the pinSpacing alone. That's what this flag is for.
    _hideAllMarkers(true);
    _triggers.forEach(function(t) {
        // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max". Same for anything with a clamped end
        var max = _maxScroll(t.scroller, t._dir), endClamp = t.vars.end === "max" || t._endClamp && t.end > max, startClamp = t._startClamp && t.start >= max;
        (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
    });
    _hideAllMarkers(false);
    _clampingMax = 0;
    refreshInits.forEach(function(result) {
        return result && result.render && result.render(-1);
    }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.
    (0, _observerJs._scrollers).forEach(function(obj) {
        if (_isFunction(obj)) {
            obj.smooth && requestAnimationFrame(function() {
                return obj.target.style.scrollBehavior = "smooth";
            });
            obj.rec && obj(obj.rec);
        }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function(t) {
        return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
    });
    _refreshingAll = ScrollTrigger.isRefreshing = false;
    _dispatch("refresh");
}, _lastScroll = 0, _direction = 1, _primary, _updateAll = function _updateAll(force) {
    if (force === 2 || !_refreshingAll && !_isReverted) {
        // _isReverted could be true if, for example, a matchMedia() is in the process of executing. We don't want to update during the time everything is reverted.
        ScrollTrigger.isUpdating = true;
        _primary && _primary.update(0); // ScrollSmoother uses refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.
        var l = _triggers.length, time = _getTime(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
        _direction = _lastScroll > scroll ? -1 : 1;
        _refreshingAll || (_lastScroll = scroll);
        if (recordVelocity) {
            if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
                _lastScrollTime = 0;
                _dispatch("scrollEnd");
            }
            _time2 = _time1;
            _time1 = time;
        }
        if (_direction < 0) {
            _i = l;
            while(_i-- > 0)_triggers[_i] && _triggers[_i].update(0, recordVelocity);
            _direction = 1;
        } else for(_i = 0; _i < l; _i++)_triggers[_i] && _triggers[_i].update(0, recordVelocity);
        ScrollTrigger.isUpdating = false;
    }
    _rafID = 0;
}, _propNamesToCopy = [
    _left,
    _top,
    _bottom,
    _right,
    _margin + _Bottom,
    _margin + _Right,
    _margin + _Top,
    _margin + _Left,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order"
], _stateProps = _propNamesToCopy.concat([
    _width,
    _height,
    "boxSizing",
    "max" + _Width,
    "max" + _Height,
    "position",
    _margin,
    _padding,
    _padding + _Top,
    _padding + _Right,
    _padding + _Bottom,
    _padding + _Left
]), _swapPinOut = function _swapPinOut(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) _setState(cache.spacerState);
    else if (pin._gsap.swappedIn) {
        var parent = spacer.parentNode;
        if (parent) {
            parent.insertBefore(pin, spacer);
            parent.removeChild(spacer);
        }
    }
    pin._gsap.swappedIn = false;
}, _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
        var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
        while(i--){
            p = _propNamesToCopy[i];
            spacerStyle[p] = cs[p];
        }
        spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
        cs.display === "inline" && (spacerStyle.display = "inline-block");
        pinStyle[_bottom] = pinStyle[_right] = "auto";
        spacerStyle.flexBasis = cs.flexBasis || "auto";
        spacerStyle.overflow = "visible";
        spacerStyle.boxSizing = "border-box";
        spacerStyle[_width] = _getSize(pin, (0, _observerJs._horizontal)) + _px;
        spacerStyle[_height] = _getSize(pin, (0, _observerJs._vertical)) + _px;
        spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
        _setState(spacerState);
        pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
        pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
        pinStyle[_padding] = cs[_padding];
        if (pin.parentNode !== spacer) {
            pin.parentNode.insertBefore(spacer, pin);
            spacer.appendChild(pin);
        }
        pin._gsap.swappedIn = true;
    }
}, _capsExp = /([A-Z])/g, _setState = function _setState(state) {
    if (state) {
        var style = state.t.style, l = state.length, i = 0, p, value;
        (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off
        for(; i < l; i += 2){
            value = state[i + 1];
            p = state[i];
            if (value) style[p] = value;
            else if (style[p]) style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
        }
    }
}, _getState = function _getState(element) {
    // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
    var l = _stateProps.length, style = element.style, state = [], i = 0;
    for(; i < l; i++)state.push(_stateProps[i], style[_stateProps[i]]);
    state.t = element;
    return state;
}, _copyState = function _copyState(state, override, omitOffsets) {
    var result = [], l = state.length, i = omitOffsets ? 8 : 0, // skip top, left, right, bottom if omitOffsets is true
    p;
    for(; i < l; i += 2){
        p = state[i];
        result.push(p, p in override ? override[p] : state[i + 1]);
    }
    result.t = state.t;
    return result;
}, _winOffsets = {
    left: 0,
    top: 0
}, // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction(value) && (value = value(self));
    if (_isString(value) && value.substr(0, 3) === "max") value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value); // convert a string number like "45" to an actual number
    if (!_isNumber(value)) {
        _isFunction(trigger) && (trigger = trigger(self));
        var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
        element = (0, _observerJs._getTarget)(trigger, self) || _body;
        bounds = _getBounds(element) || {};
        if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
            // if display is "none", it won't report getBoundingClientRect() properly
            display = element.style.display;
            element.style.display = "block";
            bounds = _getBounds(element);
            display ? element.style.display = display : element.style.removeProperty("display");
        }
        localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
        globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
        value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
        markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
        scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
    } else {
        containerAnimation && (value = gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
        markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
        self[clampZeroProp] = value || -0.001;
        value < 0 && (value = 0);
    }
    if (marker) {
        var position = value + scrollerSize, isStart = marker._isStart;
        p1 = "scroll" + direction.d2;
        _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);
        if (useFixedPosition) {
            scrollerBounds = _getBounds(markerScroller);
            useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
        }
    }
    if (containerAnimation && element) {
        p1 = _getBounds(element);
        containerAnimation.seek(scrollerMax);
        p2 = _getBounds(element);
        containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
        value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
}, _prefixExp = /(webkit|moz|length|cssText|inset)/i, _reparent = function _reparent(element, parent, top, left) {
    if (element.parentNode !== parent) {
        var style = element.style, p, cs;
        if (parent === _body) {
            element._stOrig = style.cssText; // record original inline styles so we can revert them later
            cs = _getComputedStyle(element);
            for(p in cs)// must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
            if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") style[p] = cs[p];
            style.top = top;
            style.left = left;
        } else style.cssText = element._stOrig;
        gsap.core.getCache(element).uncache = 1;
        parent.appendChild(element);
    }
}, _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue, last2 = last1;
    return function(value) {
        var current = Math.round(getValueFunc()); // round because in some [very uncommon] Windows environments, scroll can get reported with decimals even though it was set without.
        if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
            // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
            value = current;
            onInterrupt && onInterrupt();
        }
        last2 = last1;
        last1 = Math.round(value);
        return last1;
    };
}, _shiftMarker = function _shiftMarker(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap.set(marker, vars);
}, // _mergeAnimations = animations => {
// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
    var getScroll = (0, _observerJs._getScrollFunc)(scroller, direction), prop = "_scroll" + direction.p2, // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
    getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
        var tween = getTween.tween, onComplete = vars.onComplete, modifiers = {};
        initialValue = initialValue || getScroll();
        var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
            tween.kill();
            getTween.tween = 0;
        });
        change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.
        change1 = change1 || scrollTo - initialValue;
        tween && tween.kill();
        vars[prop] = scrollTo;
        vars.inherit = false;
        vars.modifiers = modifiers;
        modifiers[prop] = function() {
            return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
        };
        vars.onUpdate = function() {
            (0, _observerJs._scrollers).cache++;
            getTween.tween && _updateAll(); // if it was interrupted/killed, like in a context.revert(), don't force an updateAll()
        };
        vars.onComplete = function() {
            getTween.tween = 0;
            onComplete && onComplete.call(tween);
        };
        tween = getTween.tween = gsap.to(scroller, vars);
        return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
        return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.
    ScrollTrigger.isTouch && _addListener(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
};
var ScrollTrigger = /*#__PURE__*/ function() {
    function ScrollTrigger(vars, animation) {
        _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
        _context(this);
        this.init(vars, animation);
    }
    var _proto = ScrollTrigger.prototype;
    _proto.init = function init(vars, animation) {
        this.progress = this.start = 0;
        this.vars && this.kill(true, true); // in case it's being initted again
        if (!_enabled) {
            this.update = this.refresh = this.kill = _passThrough;
            return;
        }
        vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
            trigger: vars
        } : vars, _defaults);
        var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? (0, _observerJs._horizontal) : (0, _observerJs._vertical), isToggle = !scrub && scrub !== 0, scroller = (0, _observerJs._getTarget)(vars.scroller || _win), scrollerCache = gsap.core.getCache(scroller), isViewport = _isViewport(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : (0, _observerJs._getProxyProp)(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [
            vars.onEnter,
            vars.onLeave,
            vars.onEnterBack,
            vars.onLeaveBack
        ], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
            return vars.onRefreshInit(self);
        }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = (0, _observerJs._getScrollFunc)(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn; // for the sake of efficiency, _startClamp/_endClamp serve like a truthy value indicating that clamping was enabled on the start/end, and ALSO store the actual pre-clamped numeric value. We tap into that in ScrollSmoother for speed effects. So for example, if start="clamp(top bottom)" results in a start of -100 naturally, it would get clamped to 0 but -100 would be stored in _startClamp.
        self._startClamp = self._endClamp = false;
        self._dir = direction;
        anticipatePin *= 45;
        self.scroller = scroller;
        self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
        scroll1 = scrollFunc();
        self.vars = vars;
        animation = animation || vars.animation;
        if ("refreshPriority" in vars) {
            _sort = 1;
            vars.refreshPriority === -9999 && (_primary = self); // used by ScrollSmoother
        }
        scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
            top: _getTweenCreator(scroller, (0, _observerJs._vertical)),
            left: _getTweenCreator(scroller, (0, _observerJs._horizontal))
        };
        self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
        self.scrubDuration = function(value) {
            scrubSmooth = _isNumber(value) && value;
            if (!scrubSmooth) {
                scrubTween && scrubTween.progress(1).kill();
                scrubTween = 0;
            } else scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
                ease: "expo",
                totalProgress: "+=0",
                inherit: false,
                duration: scrubSmooth,
                paused: true,
                onComplete: function onComplete() {
                    return onScrubComplete && onScrubComplete(self);
                }
            });
        };
        if (animation) {
            animation.vars.lazy = false;
            animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true); // special case: if this ScrollTrigger gets re-initted, a from() tween with a stagger could get initted initially and then reverted on the re-init which means it'll need to get rendered again here to properly display things. Otherwise, See https://gsap.com/forums/topic/36777-scrollsmoother-splittext-nextjs/ and https://codepen.io/GreenSock/pen/eYPyPpd?editors=0010
            self.animation = animation.pause();
            animation.scrollTrigger = self;
            self.scrubDuration(scrub);
            snap1 = 0;
            id || (id = animation.vars.id);
        }
        if (snap) {
            // TODO: potential idea: use legitimate CSS scroll snapping by pushing invisible elements into the DOM that serve as snap positions, and toggle the document.scrollingElement.style.scrollSnapType onToggle. See https://codepen.io/GreenSock/pen/JjLrgWM for a quick proof of concept.
            if (!_isObject(snap) || snap.push) snap = {
                snapTo: snap
            };
            "scrollBehavior" in _body.style && gsap.set(isViewport ? [
                _body,
                _docEl
            ] : scroller, {
                scrollBehavior: "auto"
            }); // smooth scrolling doesn't work with snap.
            (0, _observerJs._scrollers).forEach(function(o) {
                return _isFunction(o) && o.target === (isViewport ? _doc.scrollingElement || _docEl : scroller) && (o.smooth = false);
            }); // note: set smooth to false on both the vertical and horizontal scroll getters/setters
            snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
                return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
            } : gsap.utils.snap(snap.snapTo);
            snapDurClamp = snap.duration || {
                min: 0.1,
                max: 2
            };
            snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
            snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
                var scroll = scrollFunc(), refreshedRecently = _getTime() - lastRefresh < 500, tween = tweenTo.tween;
                if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
                    var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0, change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
                    endValue = snapFunc(naturalEnd, self);
                    _isNumber(endValue) || (endValue = naturalEnd); // in case the function didn't return a number, fall back to using the naturalEnd
                    endScroll = Math.max(0, Math.round(start + endValue * change));
                    if (scroll <= end && scroll >= start && endScroll !== scroll) {
                        if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
                        return;
                        if (snap.inertia === false) change1 = endValue - progress;
                        tweenTo(endScroll, {
                            duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                            ease: snap.ease || "power3",
                            data: _abs(endScroll - scroll),
                            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                            onInterrupt: function onInterrupt() {
                                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                            },
                            onComplete: function onComplete() {
                                self.update();
                                lastSnap = scrollFunc();
                                if (animation && !isToggle) // the resolution of the scrollbar is limited, so we should correct the scrubbed animation's playhead at the end to match EXACTLY where it was supposed to snap
                                scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                                onSnapComplete && onSnapComplete(self);
                                _onComplete && _onComplete(self);
                            }
                        }, scroll, change1 * change, endScroll - scroll - change1 * change);
                        onStart && onStart(self, tweenTo.tween);
                    }
                } else if (self.isActive && lastSnap !== scroll) snapDelayedCall.restart(true);
            }).pause();
        }
        id && (_ids[id] = self);
        trigger = self.trigger = (0, _observerJs._getTarget)(trigger || pin !== true && pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.
        customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
        customRevertReturn && (customRevertReturn = customRevertReturn(self));
        pin = pin === true ? trigger : (0, _observerJs._getTarget)(pin);
        _isString(toggleClass) && (toggleClass = {
            targets: trigger,
            className: toggleClass
        });
        if (pin) {
            pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default. We should check that pin.parentNode is an element (not shadow dom window)
            self.pin = pin;
            pinCache = gsap.core.getCache(pin);
            if (!pinCache.spacer) {
                // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
                if (pinSpacer) {
                    pinSpacer = (0, _observerJs._getTarget)(pinSpacer);
                    pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular
                    pinCache.spacerIsNative = !!pinSpacer;
                    pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
                }
                pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
                spacer.classList.add("pin-spacer");
                id && spacer.classList.add("pin-spacer-" + id);
                pinCache.pinState = pinOriginalState = _getState(pin);
            } else pinOriginalState = pinCache.pinState;
            vars.force3D !== false && gsap.set(pin, {
                force3D: true
            });
            self.spacer = spacer = pinCache.spacer;
            cs = _getComputedStyle(pin);
            spacingStart = cs[pinSpacing + direction.os2];
            pinGetter = gsap.getProperty(pin);
            pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).
            _swapPinIn(pin, spacer, cs);
            pinState = _getState(pin);
        }
        if (markers) {
            markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
            markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
            markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
            offset = markerStartTrigger["offset" + direction.op.d2];
            var content = (0, _observerJs._getTarget)((0, _observerJs._getProxyProp)(scroller, "content") || scroller);
            markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
            markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
            containerAnimation && (caMarkerSetter = gsap.quickSetter([
                markerStart,
                markerEnd
            ], direction.a, _px));
            if (!useFixedPosition && !((0, _observerJs._proxies).length && (0, _observerJs._getProxyProp)(scroller, "fixedMarkers") === true)) {
                _makePositionable(isViewport ? _body : scroller);
                gsap.set([
                    markerStartTrigger,
                    markerEndTrigger
                ], {
                    force3D: true
                });
                markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
                markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
            }
        }
        if (containerAnimation) {
            var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
            containerAnimation.eventCallback("onUpdate", function() {
                self.update(0, 0, 1);
                oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
            });
        }
        self.previous = function() {
            return _triggers[_triggers.indexOf(self) - 1];
        };
        self.next = function() {
            return _triggers[_triggers.indexOf(self) + 1];
        };
        self.revert = function(revert, temp) {
            if (!temp) return self.kill(true);
             // for compatibility with gsap.context() and gsap.matchMedia() which call revert()
            var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
            if (r !== self.isReverted) {
                if (r) {
                    prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.
                    prevProgress = self.progress;
                    prevAnimProgress = animation && animation.progress();
                }
                markerStart && [
                    markerStart,
                    markerEnd,
                    markerStartTrigger,
                    markerEndTrigger
                ].forEach(function(m) {
                    return m.style.display = r ? "none" : "block";
                });
                if (r) {
                    _refreshing = self;
                    self.update(r); // make sure the pin is back in its original position so that all the measurements are correct. do this BEFORE swapping the pin out
                }
                if (pin && (!pinReparent || !self.isActive)) {
                    if (r) _swapPinOut(pin, spacer, pinOriginalState);
                    else _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
                }
                r || self.update(r); // when we're restoring, the update should run AFTER swapping the pin into its pin-spacer.
                _refreshing = prevRefreshing; // restore. We set it to true during the update() so that things fire properly in there.
                self.isReverted = r;
            }
        };
        self.refresh = function(soft, force, position, pinOffset) {
            // position is typically only defined if it's coming from setPositions() - it's a way to skip the normal parsing. pinOffset is also only from setPositions() and is mostly related to fancy stuff we need to do in ScrollSmoother with effects
            if ((_refreshing || !self.enabled) && !force) return;
            if (pin && soft && _lastScrollTime) {
                _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
                return;
            }
            !_refreshingAll && onRefreshInit && onRefreshInit(self);
            _refreshing = self;
            if (tweenTo.tween && !position) {
                // we skip this if a position is passed in because typically that's from .setPositions() and it's best to allow in-progress snapping to continue.
                tweenTo.tween.kill();
                tweenTo.tween = 0;
            }
            scrubTween && scrubTween.pause();
            invalidateOnRefresh && animation && animation.revert({
                kill: false
            }).invalidate();
            self.isReverted || self.revert(true, true);
            self._subPinOffset = false; // we'll set this to true in the sub-pins if we find any
            var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && (0, _observerJs._getTarget)(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
            if (markers && _isObject(position)) {
                // if we alter the start/end positions with .setPositions(), it generally feeds in absolute NUMBERS which don't convey information about where to line up the markers, so to keep it intuitive, we record how far the trigger positions shift after applying the new numbers and then offset by that much in the opposite direction. We do the same to the associated trigger markers too of course.
                markerStartOffset = gsap.getProperty(markerStartTrigger, direction.p);
                markerEndOffset = gsap.getProperty(markerEndTrigger, direction.p);
            }
            while(i-- > 0){
                // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
                curTrigger = _triggers[i];
                curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.
                curPin = curTrigger.pin;
                if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
                    revertedPins || (revertedPins = []);
                    revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly
                    curTrigger.revert(true, true);
                }
                if (curTrigger !== _triggers[i]) {
                    // in case it got removed.
                    triggerIndex--;
                    i--;
                }
            }
            _isFunction(parsedStart) && (parsedStart = parsedStart(self));
            parsedStart = _parseClamp(parsedStart, "start", self);
            start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -0.001 : 0);
            _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
            if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
                if (~parsedEnd.indexOf(" ")) parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
                else {
                    offset = _offsetToPx(parsedEnd.substr(2), size);
                    parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.
                    parsedEndTrigger = trigger;
                }
            }
            parsedEnd = _parseClamp(parsedEnd, "end", self);
            end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -0.001;
            offset = 0;
            i = triggerIndex;
            while(i--){
                curTrigger = _triggers[i];
                curPin = curTrigger.pin;
                if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
                    cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
                    if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) // numeric start values shouldn't be offset at all - treat them as absolute
                    offset += cs * (1 - curTrigger.progress);
                    curPin === pin && (otherPinOffset += cs);
                }
            }
            start += offset;
            end += offset;
            self._startClamp && (self._startClamp += offset);
            if (self._endClamp && !_refreshingAll) {
                self._endClamp = end || -0.001;
                end = Math.min(end, _maxScroll(scroller, direction));
            }
            change = end - start || (start -= 0.01) && 0.001;
            if (isFirstRefresh) // on the very first refresh(), the prevProgress couldn't have been accurate yet because the start/end were never calculated, so we set it here. Before 3.11.5, it could lead to an inaccurate scroll position restoration with snapping.
            prevProgress = gsap.utils.clamp(0, 1, gsap.utils.normalize(start, end, prevScroll));
            self._pinPush = otherPinOffset;
            if (markerStart && offset) {
                // offset the markers if necessary
                cs = {};
                cs[direction.a] = "+=" + offset;
                pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
                gsap.set([
                    markerStart,
                    markerEnd
                ], cs);
            }
            if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
                cs = _getComputedStyle(pin);
                isVertical = direction === (0, _observerJs._vertical);
                scroll = scrollFunc(); // recalculate because the triggers can affect the scroll
                pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
                if (!max && end > 1) {
                    // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://gsap.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/
                    forcedOverflow = (isViewport ? _doc.scrollingElement || _docEl : scroller).style;
                    forcedOverflow = {
                        style: forcedOverflow,
                        value: forcedOverflow["overflow" + direction.a.toUpperCase()]
                    };
                    if (isViewport && _getComputedStyle(_body)["overflow" + direction.a.toUpperCase()] !== "scroll") // avoid an extra scrollbar if BOTH <html> and <body> have overflow set to "scroll"
                    forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
                }
                _swapPinIn(pin, spacer, cs);
                pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.
                bounds = _getBounds(pin, true);
                oppositeScroll = useFixedPosition && (0, _observerJs._getScrollFunc)(scroller, isVertical ? (0, _observerJs._horizontal) : (0, _observerJs._vertical))();
                if (pinSpacing) {
                    spacerState = [
                        pinSpacing + direction.os2,
                        change + otherPinOffset + _px
                    ];
                    spacerState.t = spacer;
                    i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
                    if (i) {
                        spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).
                        spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
                    }
                    _setState(spacerState);
                    if (pinnedContainer) // in ScrollTrigger.refresh(), we need to re-evaluate the pinContainer's size because this pinSpacing may stretch it out, but we can't just add the exact distance because depending on layout, it may not push things down or it may only do so partially.
                    _triggers.forEach(function(t) {
                        if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) t._subPinOffset = true;
                    });
                    useFixedPosition && scrollFunc(prevScroll);
                } else {
                    i = _getSize(pin, direction);
                    i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
                }
                if (useFixedPosition) {
                    override = {
                        top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                        left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                        boxSizing: "border-box",
                        position: "fixed"
                    };
                    override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
                    override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
                    override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
                    override[_padding] = cs[_padding];
                    override[_padding + _Top] = cs[_padding + _Top];
                    override[_padding + _Right] = cs[_padding + _Right];
                    override[_padding + _Bottom] = cs[_padding + _Bottom];
                    override[_padding + _Left] = cs[_padding + _Left];
                    pinActiveState = _copyState(pinOriginalState, override, pinReparent);
                    _refreshingAll && scrollFunc(0);
                }
                if (animation) {
                    // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
                    initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.
                    _suppressOverwrites(1);
                    animation.render(animation.duration(), true, true);
                    pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
                    pinMoves = Math.abs(change - pinChange) > 1;
                    useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.
                    animation.render(0, true, true);
                    initted || animation.invalidate(true);
                    animation.parent || animation.totalTime(animation.totalTime()); // if, for example, a toggleAction called play() and then refresh() happens and when we render(1) above, it would cause the animation to complete and get removed from its parent, so this makes sure it gets put back in.
                    _suppressOverwrites(0);
                } else pinChange = change;
                forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
            } else if (trigger && scrollFunc() && !containerAnimation) {
                // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
                bounds = trigger.parentNode;
                while(bounds && bounds !== _body){
                    if (bounds._pinOffset) {
                        start -= bounds._pinOffset;
                        end -= bounds._pinOffset;
                    }
                    bounds = bounds.parentNode;
                }
            }
            revertedPins && revertedPins.forEach(function(t) {
                return t.revert(false, true);
            });
            self.start = start;
            self.end = end;
            scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc(); // reset velocity
            if (!containerAnimation && !_refreshingAll) {
                scroll1 < prevScroll && scrollFunc(prevScroll);
                self.scroll.rec = 0;
            }
            self.revert(false, true);
            lastRefresh = _getTime();
            if (snapDelayedCall) {
                lastSnap = -1; // just so snapping gets re-enabled, clear out any recorded last value
                // self.isActive && scrollFunc(start + change * prevProgress); // previously this line was here to ensure that when snapping kicks in, it's from the previous progress but in some cases that's not desirable, like an all-page ScrollTrigger when new content gets added to the page, that'd totally change the progress.
                snapDelayedCall.restart(true);
            }
            _refreshing = 0;
            animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().
            if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh || animation && !animation._initted) {
                // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
                animation && !isToggle && animation.totalProgress(containerAnimation && start < -0.001 && !prevProgress ? gsap.utils.normalize(start, end, 0) : prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.
                self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
            }
            pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
            scrubTween && scrubTween.invalidate();
            if (!isNaN(markerStartOffset)) {
                // numbers were passed in for the position which are absolute, so instead of just putting the markers at the very bottom of the viewport, we figure out how far they shifted down (it's safe to assume they were originally positioned in closer relation to the trigger element with values like "top", "center", a percentage or whatever, so we offset that much in the opposite direction to basically revert them to the relative position thy were at previously.
                markerStartOffset -= gsap.getProperty(markerStartTrigger, direction.p);
                markerEndOffset -= gsap.getProperty(markerEndTrigger, direction.p);
                _shiftMarker(markerStartTrigger, direction, markerStartOffset);
                _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
                _shiftMarker(markerEndTrigger, direction, markerEndOffset);
                _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
            }
            isFirstRefresh && !_refreshingAll && self.update(); // edge case - when you reload a page when it's already scrolled down, some browsers fire a "scroll" event before DOMContentLoaded, triggering an updateAll(). If we don't update the self.progress as part of refresh(), then when it happens next, it may record prevProgress as 0 when it really shouldn't, potentially causing a callback in an animation to fire again.
            if (onRefresh && !_refreshingAll && !executingOnRefresh) {
                // when refreshing all, we do extra work to correct pinnedContainer sizes and ensure things don't exceed the maxScroll, so we should do all the refreshes at the end after all that work so that the start/end values are corrected.
                executingOnRefresh = true;
                onRefresh(self);
                executingOnRefresh = false;
            }
        };
        self.getVelocity = function() {
            return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1000 || 0;
        };
        self.endAnimation = function() {
            _endAnimation(self.callbackAnimation);
            if (animation) scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
        };
        self.labelToScroll = function(label) {
            return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
        };
        self.getTrailing = function(name) {
            var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
            return (_isString(name) ? a.filter(function(t) {
                return t.vars.preventOverlaps === name;
            }) : a).filter(function(t) {
                return self.direction > 0 ? t.end <= start : t.start >= end;
            });
        };
        self.update = function(reset, recordVelocity, forceFake) {
            if (containerAnimation && !forceFake && !reset) return;
            var scroll = _refreshingAll === true ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
            if (recordVelocity) {
                scroll2 = scroll1;
                scroll1 = containerAnimation ? scrollFunc() : scroll;
                if (snap) {
                    snap2 = snap1;
                    snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
                }
            } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).
            if (anticipatePin && pin && !_refreshing && !_startup && _lastScrollTime) {
                if (!clipped && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) clipped = 0.0001;
                else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin) clipped = 0.9999;
            }
            if (clipped !== prevProgress && self.enabled) {
                isActive = self.isActive = !!clipped && clipped < 1;
                wasActive = !!prevProgress && prevProgress < 1;
                toggled = isActive !== wasActive;
                stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)
                self.direction = clipped > prevProgress ? 1 : -1;
                self.progress = clipped;
                if (stateChanged && !_refreshing) {
                    toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.
                    if (isToggle) {
                        action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)
                        isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
                    }
                }
                preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
                    return t.endAnimation();
                }));
                if (!isToggle) {
                    if (scrubTween && !_refreshing && !_startup) {
                        scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.
                        if (scrubTween.resetTo) scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
                        else {
                            // legacy support (courtesy), before 3.10.0
                            scrubTween.vars.totalProgress = clipped;
                            scrubTween.invalidate().restart();
                        }
                    } else if (animation) animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
                }
                if (pin) {
                    reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
                    if (!useFixedPosition) pinSetter(_round(pinStart + pinChange * clipped));
                    else if (stateChanged) {
                        isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)
                        if (pinReparent) {
                            if (!reset && (isActive || isAtMax)) {
                                var bounds = _getBounds(pin, true), _offset = scroll - start;
                                _reparent(pin, _body, bounds.top + (direction === (0, _observerJs._vertical) ? _offset : 0) + _px, bounds.left + (direction === (0, _observerJs._vertical) ? 0 : _offset) + _px);
                            } else _reparent(pin, spacer);
                        }
                        _setState(isActive || isAtMax ? pinActiveState : pinState);
                        pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
                    }
                }
                snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
                toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
                    return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
                }); // classes could affect positioning, so do it even if reset or refreshing is true.
                onUpdate && !isToggle && !reset && onUpdate(self);
                if (stateChanged && !_refreshing) {
                    if (isToggle) {
                        if (isTakingAction) {
                            if (action === "complete") animation.pause().totalProgress(1);
                            else if (action === "reset") animation.restart(true).pause();
                            else if (action === "restart") animation.restart(true);
                            else animation[action]();
                        }
                        onUpdate && onUpdate(self);
                    }
                    if (toggled || !_limitCallbacks) {
                        // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
                        onToggle && toggled && _callback(self, onToggle);
                        callbacks[toggleState] && _callback(self, callbacks[toggleState]);
                        once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.
                        if (!toggled) {
                            // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
                            toggleState = clipped === 1 ? 1 : 3;
                            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
                        }
                    }
                    if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
                        _endAnimation(self.callbackAnimation);
                        scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
                    }
                } else if (isToggle && onUpdate && !_refreshing) onUpdate(self);
            } // update absolutely-positioned markers (only if the scroller isn't the viewport)
            if (markerEndSetter) {
                var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
                markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
                markerEndSetter(n);
            }
            caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
        };
        self.enable = function(reset, refresh) {
            if (!self.enabled) {
                self.enabled = true;
                _addListener(scroller, "resize", _onResize);
                isViewport || _addListener(scroller, "scroll", _onScroll);
                onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
                if (reset !== false) {
                    self.progress = prevProgress = 0;
                    scroll1 = scroll2 = lastSnap = scrollFunc();
                }
                refresh !== false && self.refresh();
            }
        };
        self.getTween = function(snap) {
            return snap && tweenTo ? tweenTo.tween : scrubTween;
        };
        self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
            // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
            if (containerAnimation) {
                // convert ratios into scroll positions. Remember, start/end values on ScrollTriggers that have a containerAnimation refer to the time (in seconds), NOT scroll positions.
                var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
                newStart = st.start + _change * newStart / duration;
                newEnd = st.start + _change * newEnd / duration;
            }
            self.refresh(false, false, {
                start: _keepClamp(newStart, keepClamp && !!self._startClamp),
                end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
            }, pinOffset);
            self.update();
        };
        self.adjustPinSpacing = function(amount) {
            if (spacerState && amount) {
                var i = spacerState.indexOf(direction.d) + 1;
                spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
                spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
                _setState(spacerState);
            }
        };
        self.disable = function(reset, allowAnimation) {
            if (self.enabled) {
                reset !== false && self.revert(true, true);
                self.enabled = self.isActive = false;
                allowAnimation || scrubTween && scrubTween.pause();
                prevScroll = 0;
                pinCache && (pinCache.uncache = 1);
                onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);
                if (snapDelayedCall) {
                    snapDelayedCall.pause();
                    tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
                }
                if (!isViewport) {
                    var i = _triggers.length;
                    while(i--){
                        if (_triggers[i].scroller === scroller && _triggers[i] !== self) return; //don't remove the listeners if there are still other triggers referencing it.
                    }
                    _removeListener(scroller, "resize", _onResize);
                    isViewport || _removeListener(scroller, "scroll", _onScroll);
                }
            }
        };
        self.kill = function(revert, allowAnimation) {
            self.disable(revert, allowAnimation);
            scrubTween && !allowAnimation && scrubTween.kill();
            id && delete _ids[id];
            var i = _triggers.indexOf(self);
            i >= 0 && _triggers.splice(i, 1);
            i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
            // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.
            i = 0;
            _triggers.forEach(function(t) {
                return t.scroller === self.scroller && (i = 1);
            });
            i || _refreshingAll || (self.scroll.rec = 0);
            if (animation) {
                animation.scrollTrigger = null;
                revert && animation.revert({
                    kill: false
                });
                allowAnimation || animation.kill();
            }
            markerStart && [
                markerStart,
                markerEnd,
                markerStartTrigger,
                markerEndTrigger
            ].forEach(function(m) {
                return m.parentNode && m.parentNode.removeChild(m);
            });
            _primary === self && (_primary = 0);
            if (pin) {
                pinCache && (pinCache.uncache = 1);
                i = 0;
                _triggers.forEach(function(t) {
                    return t.pin === pin && i++;
                });
                i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
            }
            vars.onKill && vars.onKill(self);
        };
        _triggers.push(self);
        self.enable(false, false);
        customRevertReturn && customRevertReturn(self);
        if (animation && animation.add && !change) {
            // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
            var updateFunc = self.update; // some browsers may fire a scroll event BEFORE a tick elapses and/or the DOMContentLoaded fires. So there's a chance update() will be called BEFORE a refresh() has happened on a Timeline-attached ScrollTrigger which means the start/end won't be calculated yet. We don't want to add conditional logic inside the update() method (like check to see if end is defined and if not, force a refresh()) because that's a function that gets hit a LOT (performance). So we swap out the real update() method for this one that'll re-attach it the first time it gets called and of course forces a refresh().
            self.update = function() {
                self.update = updateFunc;
                (0, _observerJs._scrollers).cache++; // otherwise a cached scroll position may get used in the refresh() in a very rare scenario, like if ScrollTriggers are created inside a DOMContentLoaded event and the queued requestAnimationFrame() fires beforehand. See https://gsap.com/community/forums/topic/41267-scrolltrigger-breaks-on-refresh-when-using-domcontentloaded/
                start || end || self.refresh();
            };
            gsap.delayedCall(0.01, self.update);
            change = 0.01;
            start = end = 0;
        } else self.refresh();
        pin && _queueRefreshAll(); // pinning could affect the positions of other things, so make sure we queue a full refresh()
    };
    ScrollTrigger.register = function register(core) {
        if (!_coreInitted) {
            gsap = core || _getGSAP();
            _windowExists() && window.document && ScrollTrigger.enable();
            _coreInitted = _enabled;
        }
        return _coreInitted;
    };
    ScrollTrigger.defaults = function defaults(config) {
        if (config) for(var p in config)_defaults[p] = config[p];
        return _defaults;
    };
    ScrollTrigger.disable = function disable(reset, kill) {
        _enabled = 0;
        _triggers.forEach(function(trigger) {
            return trigger[kill ? "kill" : "disable"](reset);
        });
        _removeListener(_win, "wheel", _onScroll);
        _removeListener(_doc, "scroll", _onScroll);
        clearInterval(_syncInterval);
        _removeListener(_doc, "touchcancel", _passThrough);
        _removeListener(_body, "touchstart", _passThrough);
        _multiListener(_removeListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
        _multiListener(_removeListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
        _resizeDelay.kill();
        _iterateAutoRefresh(_removeListener);
        for(var i = 0; i < (0, _observerJs._scrollers).length; i += 3){
            _wheelListener(_removeListener, (0, _observerJs._scrollers)[i], (0, _observerJs._scrollers)[i + 1]);
            _wheelListener(_removeListener, (0, _observerJs._scrollers)[i], (0, _observerJs._scrollers)[i + 2]);
        }
    };
    ScrollTrigger.enable = function enable() {
        _win = window;
        _doc = document;
        _docEl = _doc.documentElement;
        _body = _doc.body;
        if (gsap) {
            _toArray = gsap.utils.toArray;
            _clamp = gsap.utils.clamp;
            _context = gsap.core.context || _passThrough;
            _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
            _scrollRestoration = _win.history.scrollRestoration || "auto";
            _lastScroll = _win.pageYOffset || 0;
            gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.
            if (_body) {
                _enabled = 1;
                _div100vh = document.createElement("div"); // to solve mobile browser address bar show/hide resizing, we shouldn't rely on window.innerHeight. Instead, use a <div> with its height set to 100vh and measure that since that's what the scrolling is based on anyway and it's not affected by address bar showing/hiding.
                _div100vh.style.height = "100vh";
                _div100vh.style.position = "absolute";
                _refresh100vh();
                _rafBugFix();
                (0, _observerJs.Observer).register(gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.
                ScrollTrigger.isTouch = (0, _observerJs.Observer).isTouch;
                _fixIOSBug = (0, _observerJs.Observer).isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent); // since 2017, iOS has had a bug that causes event.clientX/Y to be inaccurate when a scroll occurs, thus we must alternate ignoring every other touchmove event to work around it. See https://bugs.webkit.org/show_bug.cgi?id=181954 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503
                _ignoreMobileResize = (0, _observerJs.Observer).isTouch === 1;
                _addListener(_win, "wheel", _onScroll); // mostly for 3rd party smooth scrolling libraries.
                _root = [
                    _win,
                    _doc,
                    _docEl,
                    _body
                ];
                if (gsap.matchMedia) {
                    ScrollTrigger.matchMedia = function(vars) {
                        var mm = gsap.matchMedia(), p;
                        for(p in vars)mm.add(p, vars[p]);
                        return mm;
                    };
                    gsap.addEventListener("matchMediaInit", function() {
                        return _revertAll();
                    });
                    gsap.addEventListener("matchMediaRevert", function() {
                        return _revertRecorded();
                    });
                    gsap.addEventListener("matchMedia", function() {
                        _refreshAll(0, 1);
                        _dispatch("matchMedia");
                    });
                    gsap.matchMedia().add("(orientation: portrait)", function() {
                        // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
                        _setBaseDimensions();
                        return _setBaseDimensions;
                    });
                } else console.warn("Requires GSAP 3.11.0 or later");
                _setBaseDimensions();
                _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!
                var bodyHasStyle = _body.hasAttribute("style"), bodyStyle = _body.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap.core.Animation.prototype, bounds, i;
                AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
                    value: function value() {
                        return this.time(-0.01, true);
                    }
                }); // only for backwards compatibility (Animation.revert() was added after 3.10.4)
                bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.
                bounds = _getBounds(_body);
                (0, _observerJs._vertical).m = Math.round(bounds.top + (0, _observerJs._vertical).sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding
                (0, _observerJs._horizontal).m = Math.round(bounds.left + (0, _observerJs._horizontal).sc()) || 0;
                border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
                if (!bodyHasStyle) {
                    // SSR frameworks like Next.js complain if this attribute gets added.
                    _body.setAttribute("style", ""); // it's not enough to just removeAttribute() - we must first set it to empty, otherwise Next.js complains.
                    _body.removeAttribute("style");
                } // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.
                _syncInterval = setInterval(_sync, 250);
                gsap.delayedCall(0.5, function() {
                    return _startup = 0;
                });
                _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.
                _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://gsap.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/
                _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
                _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
                _transformProp = gsap.utils.checkPrefix("transform");
                _stateProps.push(_transformProp);
                _coreInitted = _getTime();
                _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
                _autoRefresh = [
                    _doc,
                    "visibilitychange",
                    function() {
                        var w = _win.innerWidth, h = _win.innerHeight;
                        if (_doc.hidden) {
                            _prevWidth = w;
                            _prevHeight = h;
                        } else if (_prevWidth !== w || _prevHeight !== h) _onResize();
                    },
                    _doc,
                    "DOMContentLoaded",
                    _refreshAll,
                    _win,
                    "load",
                    _refreshAll,
                    _win,
                    "resize",
                    _onResize
                ];
                _iterateAutoRefresh(_addListener);
                _triggers.forEach(function(trigger) {
                    return trigger.enable(0, 1);
                });
                for(i = 0; i < (0, _observerJs._scrollers).length; i += 3){
                    _wheelListener(_removeListener, (0, _observerJs._scrollers)[i], (0, _observerJs._scrollers)[i + 1]);
                    _wheelListener(_removeListener, (0, _observerJs._scrollers)[i], (0, _observerJs._scrollers)[i + 2]);
                }
            }
        }
    };
    ScrollTrigger.config = function config(vars) {
        "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
        var ms = vars.syncInterval;
        ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
        "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);
        if ("autoRefreshEvents" in vars) {
            _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
            _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
        }
    };
    ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
        var t = (0, _observerJs._getTarget)(target), i = (0, _observerJs._scrollers).indexOf(t), isViewport = _isViewport(t);
        if (~i) (0, _observerJs._scrollers).splice(i, isViewport ? 6 : 2);
        if (vars) isViewport ? (0, _observerJs._proxies).unshift(_win, vars, _body, vars, _docEl, vars) : (0, _observerJs._proxies).unshift(t, vars);
    };
    ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
        _triggers.forEach(function(t) {
            return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
        });
    };
    ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
        var bounds = (_isString(element) ? (0, _observerJs._getTarget)(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
        return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
    };
    ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
        _isString(element) && (element = (0, _observerJs._getTarget)(element));
        var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
        return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
    };
    ScrollTrigger.killAll = function killAll(allowListeners) {
        _triggers.slice(0).forEach(function(t) {
            return t.vars.id !== "ScrollSmoother" && t.kill();
        });
        if (allowListeners !== true) {
            var listeners = _listeners.killAll || [];
            _listeners = {};
            listeners.forEach(function(f) {
                return f();
            });
        }
    };
    return ScrollTrigger;
}();
ScrollTrigger.version = "3.12.7";
ScrollTrigger.saveStyles = function(targets) {
    return targets ? _toArray(targets).forEach(function(target) {
        // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
        if (target && target.style) {
            var i = _savedStyles.indexOf(target);
            i >= 0 && _savedStyles.splice(i, 5);
            _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _context());
        }
    }) : _savedStyles;
};
ScrollTrigger.revert = function(soft, media) {
    return _revertAll(!soft, media);
};
ScrollTrigger.create = function(vars, animation) {
    return new ScrollTrigger(vars, animation);
};
ScrollTrigger.refresh = function(safe) {
    return safe ? _onResize(true) : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};
ScrollTrigger.update = function(force) {
    return ++(0, _observerJs._scrollers).cache && _updateAll(force === true ? 2 : 0);
};
ScrollTrigger.clearScrollMemory = _clearScrollMemory;
ScrollTrigger.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? (0, _observerJs._horizontal) : (0, _observerJs._vertical));
};
ScrollTrigger.getScrollFunc = function(element, horizontal) {
    return (0, _observerJs._getScrollFunc)((0, _observerJs._getTarget)(element), horizontal ? (0, _observerJs._horizontal) : (0, _observerJs._vertical));
};
ScrollTrigger.getById = function(id) {
    return _ids[id];
};
ScrollTrigger.getAll = function() {
    return _triggers.filter(function(t) {
        return t.vars.id !== "ScrollSmoother";
    });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.
ScrollTrigger.isScrolling = function() {
    return !!_lastScrollTime;
};
ScrollTrigger.snapDirectional = _snapDirectional;
ScrollTrigger.addEventListener = function(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
};
ScrollTrigger.removeEventListener = function(type, callback) {
    var a = _listeners[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
};
ScrollTrigger.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback(type, callback) {
        var elements = [], triggers = [], delay = gsap.delayedCall(interval, function() {
            callback(elements, triggers);
            elements = [];
            triggers = [];
        }).pause();
        return function(self) {
            elements.length || delay.restart(true);
            elements.push(self.trigger);
            triggers.push(self);
            batchMax <= elements.length && delay.progress(1);
        };
    }, p;
    for(p in vars)varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    if (_isFunction(batchMax)) {
        batchMax = batchMax();
        _addListener(ScrollTrigger, "refresh", function() {
            return batchMax = vars.batchMax();
        });
    }
    _toArray(targets).forEach(function(target) {
        var config = {};
        for(p in varsCopy)config[p] = varsCopy[p];
        config.trigger = target;
        result.push(ScrollTrigger.create(config));
    });
    return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).
var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
}, _allowNativePanning = function _allowNativePanning(target, direction) {
    if (direction === true) target.style.removeProperty("touch-action");
    else target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + ((0, _observerJs.Observer).isTouch ? " pinch-zoom" : "") : "none"; // note: Firefox doesn't support it pinch-zoom properly, at least in addition to a pan-x or pan-y.
    target === _docEl && _allowNativePanning(_body, direction);
}, _overflow = {
    auto: 1,
    scroll: 1
}, _nestedScroll = function _nestedScroll(_ref5) {
    var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap.core.getCache(node), time = _getTime(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2000) {
        // cache for 2 seconds to improve performance.
        while(node && node !== _body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX])))node = node.parentNode;
        cache._isScroll = node && node !== target && !_isViewport(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
        cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
        event.stopPropagation();
        event._gsapAllow = true;
    }
}, // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
_inputObserver = function _inputObserver(target, type, inputs, nested) {
    return (0, _observerJs.Observer).create({
        target: target,
        capture: true,
        debounce: false,
        lockAxis: true,
        type: type,
        onWheel: nested = nested && _nestedScroll,
        onPress: nested,
        onDrag: nested,
        onScroll: nested,
        onEnable: function onEnable() {
            return inputs && _addListener(_doc, (0, _observerJs.Observer).eventTypes[0], _captureInputs, false, true);
        },
        onDisable: function onDisable() {
            return _removeListener(_doc, (0, _observerJs.Observer).eventTypes[0], _captureInputs, true);
        }
    });
}, _inputExp = /(input|label|select|textarea)/i, _inputIsFocused, _captureInputs = function _captureInputs(e) {
    var isInput = _inputExp.test(e.target.tagName);
    if (isInput || _inputIsFocused) {
        e._gsapAllow = true;
        _inputIsFocused = isInput;
    }
}, _getScrollNormalizer = function _getScrollNormalizer(vars) {
    _isObject(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = (0, _observerJs._getTarget)(vars.target) || _docEl, smoother = gsap.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && (0, _observerJs._getTarget)(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = (0, _observerJs._getScrollFunc)(target, (0, _observerJs._vertical)), scrollFuncX = (0, _observerJs._getScrollFunc)(target, (0, _observerJs._horizontal)), scale = 1, initialScale = ((0, _observerJs.Observer).isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction(momentum) ? function() {
        return momentum(self);
    } : function() {
        return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove() {
        return skipTouchMove = false;
    }, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps() {
        maxY = _maxScroll(target, (0, _observerJs._vertical));
        scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
        normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, (0, _observerJs._horizontal))));
        lastRefreshID = _refreshID;
    }, removeContentOffset = function removeContentOffset() {
        content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
        scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag() {
        if (skipTouchMove) {
            requestAnimationFrame(resumeTouchMove);
            var offset = _round(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
            if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
                scrollFuncY.offset = scroll - scrollFuncY.v;
                var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
                content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
                content._gsap.y = y + "px";
                scrollFuncY.cacheID = (0, _observerJs._scrollers).cache;
                _updateAll();
            }
            return true;
        }
        scrollFuncY.offset && removeContentOffset();
        skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize() {
        // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
        updateClamps();
        if (tween.isActive() && tween.vars.scrollY > maxY) scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    };
    content && gsap.set(content, {
        y: "+=0"
    }); // to ensure there's a cache (element._gsap)
    vars.ignoreCheck = function(e) {
        return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
    };
    vars.onPress = function() {
        skipTouchMove = false;
        var prevScale = scale;
        scale = _round((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
        tween.pause();
        prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
        startScrollX = scrollFuncX();
        startScrollY = scrollFuncY();
        updateClamps();
        lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self, wasDragging) {
        scrollFuncY.offset && removeContentOffset();
        if (!wasDragging) onStopDelayedCall.restart(true);
        else {
            (0, _observerJs._scrollers).cache++; // make sure we're pulling the non-cached value
            // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)
            var dur = resolveMomentumDuration(), currentScroll, endScroll;
            if (normalizeScrollX) {
                currentScroll = scrollFuncX();
                endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.
                dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, (0, _observerJs._horizontal)));
                tween.vars.scrollX = scrollClampX(endScroll);
            }
            currentScroll = scrollFuncY();
            endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227; // the constant .227 is from power4(0.05)
            dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, (0, _observerJs._vertical)));
            tween.vars.scrollY = scrollClampY(endScroll);
            tween.invalidate().duration(dur).play(0.01);
            if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) // iOS bug: it'll show the address bar but NOT fire the window "resize" event until the animation is done but we must protect against overshoot so we leverage an onUpdate to do so.
            gsap.to({}, {
                onUpdate: onResize,
                duration: dur
            });
        }
        onRelease && onRelease(self);
    };
    vars.onWheel = function() {
        tween._ts && tween.pause();
        if (_getTime() - wheelRefresh > 1000) {
            // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
            lastRefreshID = 0;
            wheelRefresh = _getTime();
        }
    };
    vars.onChange = function(self, dx, dy, xArray, yArray) {
        _refreshID !== lastRefreshID && updateClamps();
        dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.
        if (dy) {
            scrollFuncY.offset && removeContentOffset();
            var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
            isTouch && y !== yClamped && (startScrollY += yClamped - y);
            scrollFuncY(yClamped);
        }
        (dy || dx) && _updateAll();
    };
    vars.onEnable = function() {
        _allowNativePanning(target, normalizeScrollX ? false : "x");
        ScrollTrigger.addEventListener("refresh", onResize);
        _addListener(_win, "resize", onResize);
        if (scrollFuncY.smooth) {
            scrollFuncY.target.style.scrollBehavior = "auto";
            scrollFuncY.smooth = scrollFuncX.smooth = false;
        }
        inputObserver.enable();
    };
    vars.onDisable = function() {
        _allowNativePanning(target, true);
        _removeListener(_win, "resize", onResize);
        ScrollTrigger.removeEventListener("refresh", onResize);
        inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self = new (0, _observerJs.Observer)(vars);
    self.iOS = _fixIOSBug; // used in the Observer getCachedScroll() function to work around an iOS bug that wreaks havoc with TouchEvent.clientY if we allow scroll to go all the way back to 0.
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1); // iOS bug causes event.clientY values to freak out (wildly inaccurate) if the scroll position is exactly 0.
    _fixIOSBug && gsap.ticker.add(_passThrough); // prevent the ticker from sleeping
    onStopDelayedCall = self._dc;
    tween = gsap.to(self, {
        ease: "power4",
        paused: true,
        inherit: false,
        scrollX: normalizeScrollX ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
                return tween.pause();
            })
        },
        onUpdate: _updateAll,
        onComplete: onStopDelayedCall.vars.onComplete
    }); // we need the modifier to sense if the scroll position is altered outside of the momentum tween (like with a scrollTo tween) so we can pause() it to prevent conflicts.
    return self;
};
ScrollTrigger.sort = function(func) {
    if (_isFunction(func)) return _triggers.sort(func);
    var scroll = _win.pageYOffset || 0;
    ScrollTrigger.getAll().forEach(function(t) {
        return t._sortY = t.trigger ? scroll + t.trigger.getBoundingClientRect().top : t.start + _win.innerHeight;
    });
    return _triggers.sort(func || function(a, b) {
        return (a.vars.refreshPriority || 0) * -1000000 + (a.vars.containerAnimation ? 1e6 : a._sortY) - ((b.vars.containerAnimation ? 1e6 : b._sortY) + (b.vars.refreshPriority || 0) * -1000000);
    }); // anything with a containerAnimation should refresh last.
};
ScrollTrigger.observe = function(vars) {
    return new (0, _observerJs.Observer)(vars);
};
ScrollTrigger.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") return _normalizer;
    if (vars === true && _normalizer) return _normalizer.enable();
    if (vars === false) {
        _normalizer && _normalizer.kill();
        _normalizer = vars;
        return;
    }
    var normalizer = vars instanceof (0, _observerJs.Observer) ? vars : _getScrollNormalizer(vars);
    _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
    _isViewport(normalizer.target) && (_normalizer = normalizer);
    return normalizer;
};
ScrollTrigger.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp: (0, _observerJs._getVelocityProp),
    _inputObserver: _inputObserver,
    _scrollers: (0, _observerJs._scrollers),
    _proxies: (0, _observerJs._proxies),
    bridge: {
        // when normalizeScroll sets the scroll position (ss = setScroll)
        ss: function ss() {
            _lastScrollTime || _dispatch("scrollStart");
            _lastScrollTime = _getTime();
        },
        // a way to get the _refreshing value in Observer
        ref: function ref() {
            return _refreshing;
        }
    }
};
_getGSAP() && gsap.registerPlugin(ScrollTrigger);

},{"./Observer.js":"aAWxM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAWxM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observer", ()=>Observer);
parcelHelpers.export(exports, "default", ()=>Observer);
parcelHelpers.export(exports, "_isViewport", ()=>_isViewport);
parcelHelpers.export(exports, "_scrollers", ()=>_scrollers);
parcelHelpers.export(exports, "_getScrollFunc", ()=>_getScrollFunc);
parcelHelpers.export(exports, "_getProxyProp", ()=>_getProxyProp);
parcelHelpers.export(exports, "_proxies", ()=>_proxies);
parcelHelpers.export(exports, "_getVelocityProp", ()=>_getVelocityProp);
parcelHelpers.export(exports, "_vertical", ()=>_vertical);
parcelHelpers.export(exports, "_horizontal", ()=>_horizontal);
parcelHelpers.export(exports, "_getTarget", ()=>_getTarget);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var gsap, _coreInitted, _clamp, _win, _doc, _docEl, _body, _isTouch, _pointerType, ScrollTrigger, _root, _normalizer, _eventTypes, _context, _getGSAP = function _getGSAP() {
    return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
}, _startup = 1, _observers = [], _scrollers = [], _proxies = [], _getTime = Date.now, _bridge = function _bridge(name, value) {
    return value;
}, _integrate = function _integrate() {
    var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge(name, value) {
        return data[name](value);
    };
}, _getProxyProp = function _getProxyProp(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
}, _isViewport = function _isViewport(el) {
    return !!~_root.indexOf(el);
}, _addListener = function _addListener(element, type, func, passive, capture) {
    return element.addEventListener(type, func, {
        passive: passive !== false,
        capture: !!capture
    });
}, _removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
}, _scrollLeft = "scrollLeft", _scrollTop = "scrollTop", _onScroll = function _onScroll() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
}, _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
    var cachingFunc = function cachingFunc(value) {
        // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
        if (value || value === 0) {
            _startup && (_win.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.
            var isNormalizing = _normalizer && _normalizer.isPressed;
            value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0); //TODO: iOS Bug: if you allow it to go to 0, Safari can start to report super strange (wildly inaccurate) touch positions!
            f(value);
            cachingFunc.cacheID = _scrollers.cache;
            isNormalizing && _bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
        } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
            cachingFunc.cacheID = _scrollers.cache;
            cachingFunc.v = f();
        }
        return cachingFunc.v + cachingFunc.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
}, _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function(value) {
        return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
    })
}, _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function(value) {
        return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
    })
}, _getTarget = function _getTarget(t, self) {
    return (self && self._ctx && self._ctx.selector || gsap.utils.toArray)(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
}, _getScrollFunc = function _getScrollFunc(element, _ref) {
    var s = _ref.s, sc = _ref.sc;
    // we store the scroller functions in an alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
    _isViewport(element) && (element = _doc.scrollingElement || _docEl);
    var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i && (i = _scrollers.push(element) - 1);
    _scrollers[i + offset] || _addListener(element, "scroll", _onScroll); // clear the cache when a scroll occurs
    var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
        return arguments.length ? element[s] = value : element[s];
    })));
    func.target = element;
    prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth"); // only set it the first time (don't reset every time a scrollFunc is requested because perhaps it happens during a refresh() when it's disabled in ScrollTrigger.
    return func;
}, _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update(value, force) {
        var t = _getTime();
        if (force || t - t1 > min) {
            v2 = v1;
            v1 = value;
            t2 = t1;
            t1 = t;
        } else if (useDelta) v1 += value;
        else // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
        v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
    }, reset = function reset() {
        v2 = v1 = useDelta ? 0 : v1;
        t2 = t1 = 0;
    }, getVelocity = function getVelocity(latestValue) {
        var tOld = t2, vOld = v2, t = _getTime();
        (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
        return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
    };
    return {
        update: update,
        reset: reset,
        getVelocity: getVelocity
    };
}, _getEvent = function _getEvent(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
}, _getAbsoluteMax = function _getAbsoluteMax(a) {
    var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
}, _setScrollTrigger = function _setScrollTrigger() {
    ScrollTrigger = gsap.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
}, _initCore = function _initCore(core) {
    gsap = core || _getGSAP();
    if (!_coreInitted && gsap && typeof document !== "undefined" && document.body) {
        _win = window;
        _doc = document;
        _docEl = _doc.documentElement;
        _body = _doc.body;
        _root = [
            _win,
            _doc,
            _docEl,
            _body
        ];
        _clamp = gsap.utils.clamp;
        _context = gsap.core.context || function() {};
        _pointerType = "onpointerenter" in _body ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.
        _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
        _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
        setTimeout(function() {
            return _startup = 0;
        }, 500);
        _setScrollTrigger();
        _coreInitted = 1;
    }
    return _coreInitted;
};
_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/ function() {
    function Observer(vars) {
        this.init(vars);
    }
    var _proto = Observer.prototype;
    _proto.init = function init(vars) {
        _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
        ScrollTrigger || _setScrollTrigger();
        var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
        this.target = target = _getTarget(target) || _docEl;
        this.vars = vars;
        ignore && (ignore = gsap.utils.toArray(ignore));
        tolerance = tolerance || 1e-9;
        dragMinimum = dragMinimum || 0;
        wheelSpeed = wheelSpeed || 1;
        scrollSpeed = scrollSpeed || 1;
        type = type || "wheel,touch,pointer";
        debounce = debounce !== false;
        lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22); // note: browser may report "normal", so default to 22.
        var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault && vars.passive !== false, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", // for devices that accommodate mouse events and touch events, we need to distinguish.
        isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc, deltaX = [
            0,
            0,
            0
        ], // wheel, scroll, pointer/touch
        deltaY = [
            0,
            0,
            0
        ], onClickTime = 0, clickCapture = function clickCapture() {
            return onClickTime = _getTime();
        }, _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
            return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
        }, onStopFunc = function onStopFunc() {
            self._vx.reset();
            self._vy.reset();
            onStopDelayedCall.pause();
            onStop && onStop(self);
        }, update = function update() {
            var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
            onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.
            if (changedX) {
                onRight && self.deltaX > 0 && onRight(self);
                onLeft && self.deltaX < 0 && onLeft(self);
                onChangeX && onChangeX(self);
                onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
                prevDeltaX = self.deltaX;
                deltaX[0] = deltaX[1] = deltaX[2] = 0;
            }
            if (changedY) {
                onDown && self.deltaY > 0 && onDown(self);
                onUp && self.deltaY < 0 && onUp(self);
                onChangeY && onChangeY(self);
                onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
                prevDeltaY = self.deltaY;
                deltaY[0] = deltaY[1] = deltaY[2] = 0;
            }
            if (moved || dragged) {
                onMove && onMove(self);
                if (dragged) {
                    onDragStart && dragged === 1 && onDragStart(self);
                    onDrag && onDrag(self);
                    dragged = 0;
                }
                moved = false;
            }
            locked && (locked = false, true) && onLockAxis && onLockAxis(self);
            if (wheeled) {
                onWheel(self);
                wheeled = false;
            }
            id = 0;
        }, onDelta = function onDelta(x, y, index) {
            deltaX[index] += x;
            deltaY[index] += y;
            self._vx.update(x);
            self._vy.update(y);
            debounce ? id || (id = requestAnimationFrame(update)) : update();
        }, onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
            if (lockAxis && !axis) {
                self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
                locked = true;
            }
            if (axis !== "y") {
                deltaX[2] += x;
                self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.
            }
            if (axis !== "x") {
                deltaY[2] += y;
                self._vy.update(y, true);
            }
            debounce ? id || (id = requestAnimationFrame(update)) : update();
        }, _onDrag = function _onDrag(e) {
            if (_ignoreCheck(e, 1)) return;
            e = _getEvent(e, preventDefault);
            var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
            self.x = x;
            self.y = y;
            if (isDragging || (dx || dy) && (Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum)) {
                dragged = isDragging ? 2 : 1; // dragged: 0 = not dragging, 1 = first drag, 2 = normal drag
                isDragging || (self.isDragging = true);
                onTouchOrPointerDelta(dx, dy);
            }
        }, _onPress = self.onPress = function(e) {
            if (_ignoreCheck(e, 1) || e && e.button) return;
            self.axis = axis = null;
            onStopDelayedCall.pause();
            self.isPressed = true;
            e = _getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.
            prevDeltaX = prevDeltaY = 0;
            self.startX = self.x = e.clientX;
            self.startY = self.y = e.clientY;
            self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.
            self._vy.reset();
            _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
            self.deltaX = self.deltaY = 0;
            onPress && onPress(self);
        }, _onRelease = self.onRelease = function(e) {
            if (_ignoreCheck(e, 1)) return;
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
            var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging, isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
            eventData = _getEvent(e);
            if (!isDragNotClick && isTrackingDrag) {
                self._vx.reset();
                self._vy.reset(); //if (preventDefault && allowClicks && self.isPressed) { // check isPressed because in a rare edge case, the inputObserver in ScrollTrigger may stopPropagation() on the press/drag, so the onRelease may get fired without the onPress/onDrag ever getting called, thus it could trigger a click to occur on a link after scroll-dragging it.
                if (preventDefault && allowClicks) gsap.delayedCall(0.08, function() {
                    // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
                    if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                        if (e.target.click) //some browsers (like mobile Safari) don't properly trigger the click event
                        e.target.click();
                        else if (ownerDoc.createEvent) {
                            var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                            syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                            e.target.dispatchEvent(syntheticEvent);
                        }
                    }
                });
            }
            self.isDragging = self.isGesturing = self.isPressed = false;
            onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
            dragged && update(); // in case debouncing, we don't want onDrag to fire AFTER onDragEnd().
            onDragEnd && wasDragging && onDragEnd(self);
            onRelease && onRelease(self, isDragNotClick);
        }, _onGestureStart = function _onGestureStart(e) {
            return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
        }, _onGestureEnd = function _onGestureEnd() {
            return self.isGesturing = false, onGestureEnd(self);
        }, onScroll = function onScroll(e) {
            if (_ignoreCheck(e)) return;
            var x = scrollFuncX(), y = scrollFuncY();
            onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
            scrollX = x;
            scrollY = y;
            onStop && onStopDelayedCall.restart(true);
        }, _onWheel = function _onWheel(e) {
            if (_ignoreCheck(e)) return;
            e = _getEvent(e, preventDefault);
            onWheel && (wheeled = true);
            var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
            onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
            onStop && !isNormalizer && onStopDelayedCall.restart(true);
        }, _onMove = function _onMove(e) {
            if (_ignoreCheck(e)) return;
            var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
            self.x = x;
            self.y = y;
            moved = true;
            onStop && onStopDelayedCall.restart(true);
            (dx || dy) && onTouchOrPointerDelta(dx, dy);
        }, _onHover = function _onHover(e) {
            self.event = e;
            onHover(self);
        }, _onHoverEnd = function _onHoverEnd(e) {
            self.event = e;
            onHoverEnd(self);
        }, _onClick = function _onClick(e) {
            return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
        };
        onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
        self.deltaX = self.deltaY = 0;
        self._vx = _getVelocityProp(0, 50, true);
        self._vy = _getVelocityProp(0, 50, true);
        self.scrollX = scrollFuncX;
        self.scrollY = scrollFuncY;
        self.isDragging = self.isGesturing = self.isPressed = false;
        _context(this);
        self.enable = function(e) {
            if (!self.isEnabled) {
                _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
                type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
                if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
                    _addListener(target, _eventTypes[0], _onPress, passive, capture);
                    _addListener(ownerDoc, _eventTypes[2], _onRelease);
                    _addListener(ownerDoc, _eventTypes[3], _onRelease);
                    allowClicks && _addListener(target, "click", clickCapture, true, true);
                    onClick && _addListener(target, "click", _onClick);
                    onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
                    onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
                    onHover && _addListener(target, _pointerType + "enter", _onHover);
                    onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
                    onMove && _addListener(target, _pointerType + "move", _onMove);
                }
                self.isEnabled = true;
                self.isDragging = self.isGesturing = self.isPressed = moved = dragged = false;
                self._vx.reset();
                self._vy.reset();
                scrollX = scrollFuncX();
                scrollY = scrollFuncY();
                e && e.type && _onPress(e);
                onEnable && onEnable(self);
            }
            return self;
        };
        self.disable = function() {
            if (self.isEnabled) {
                // only remove the _onScroll listener if there aren't any others that rely on the functionality.
                _observers.filter(function(o) {
                    return o !== self && _isViewport(o.target);
                }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                if (self.isPressed) {
                    self._vx.reset();
                    self._vy.reset();
                    _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
                }
                _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
                _removeListener(target, "wheel", _onWheel, capture);
                _removeListener(target, _eventTypes[0], _onPress, capture);
                _removeListener(ownerDoc, _eventTypes[2], _onRelease);
                _removeListener(ownerDoc, _eventTypes[3], _onRelease);
                _removeListener(target, "click", clickCapture, true);
                _removeListener(target, "click", _onClick);
                _removeListener(ownerDoc, "gesturestart", _onGestureStart);
                _removeListener(ownerDoc, "gestureend", _onGestureEnd);
                _removeListener(target, _pointerType + "enter", _onHover);
                _removeListener(target, _pointerType + "leave", _onHoverEnd);
                _removeListener(target, _pointerType + "move", _onMove);
                self.isEnabled = self.isPressed = self.isDragging = false;
                onDisable && onDisable(self);
            }
        };
        self.kill = self.revert = function() {
            self.disable();
            var i = _observers.indexOf(self);
            i >= 0 && _observers.splice(i, 1);
            _normalizer === self && (_normalizer = 0);
        };
        _observers.push(self);
        isNormalizer && _isViewport(target) && (_normalizer = self);
        self.enable(event);
    };
    _createClass(Observer, [
        {
            key: "velocityX",
            get: function get() {
                return this._vx.getVelocity();
            }
        },
        {
            key: "velocityY",
            get: function get() {
                return this._vy.getVelocity();
            }
        }
    ]);
    return Observer;
}();
Observer.version = "3.12.7";
Observer.create = function(vars) {
    return new Observer(vars);
};
Observer.register = _initCore;
Observer.getAll = function() {
    return _observers.slice();
};
Observer.getById = function(id) {
    return _observers.filter(function(o) {
        return o.vars.id === id;
    })[0];
};
_getGSAP() && gsap.registerPlugin(Observer);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xJDW":[function(require,module,exports,__globalThis) {
/*!
 * ScrollToPlugin 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollToPlugin", ()=>ScrollToPlugin);
parcelHelpers.export(exports, "default", ()=>ScrollToPlugin);
var gsap, _coreInitted, _window, _docEl, _body, _toArray, _config, ScrollTrigger, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _getGSAP = function _getGSAP() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
}, _isString = function _isString(value) {
    return typeof value === "string";
}, _isFunction = function _isFunction(value) {
    return typeof value === "function";
}, _max = function _max(element, axis) {
    var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
    return element === _window || element === _docEl || element === _body ? Math.max(_docEl[scroll], _body[scroll]) - (_window["inner" + dim] || _docEl[client] || _body[client]) : element[scroll] - element["offset" + dim];
}, _buildGetter = function _buildGetter(e, axis) {
    //pass in an element and an axis ("x" or "y") and it'll return a getter function for the scroll position of that element (like scrollTop or scrollLeft, although if the element is the window, it'll use the pageXOffset/pageYOffset or the documentElement's scrollTop/scrollLeft or document.body's. Basically this streamlines things and makes a very fast getter across browsers.
    var p = "scroll" + (axis === "x" ? "Left" : "Top");
    if (e === _window) {
        if (e.pageXOffset != null) p = "page" + axis.toUpperCase() + "Offset";
        else e = _docEl[p] != null ? _docEl : _body;
    }
    return function() {
        return e[p];
    };
}, _clean = function _clean(value, index, target, targets) {
    _isFunction(value) && (value = value(index, target, targets));
    if (typeof value !== "object") return _isString(value) && value !== "max" && value.charAt(1) !== "=" ? {
        x: value,
        y: value
    } : {
        y: value
    }; //if we don't receive an object as the parameter, assume the user intends "y".
    else if (value.nodeType) return {
        y: value,
        x: value
    };
    else {
        var result = {}, p;
        for(p in value)result[p] = p !== "onAutoKill" && _isFunction(value[p]) ? value[p](index, target, targets) : value[p];
        return result;
    }
}, _getOffset = function _getOffset(element, container) {
    element = _toArray(element)[0];
    if (!element || !element.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
        x: 0,
        y: 0
    };
    var rect = element.getBoundingClientRect(), isRoot = !container || container === _window || container === _body, cRect = isRoot ? {
        top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
        left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
    } : container.getBoundingClientRect(), offsets = {
        x: rect.left - cRect.left,
        y: rect.top - cRect.top
    };
    if (!isRoot && container) {
        //only add the current scroll position if it's not the window/body.
        offsets.x += _buildGetter(container, "x")();
        offsets.y += _buildGetter(container, "y")();
    }
    return offsets;
}, _parseVal = function _parseVal(value, target, axis, currentVal, offset) {
    return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
}, _initCore = function _initCore() {
    gsap = _getGSAP();
    if (_windowExists() && gsap && typeof document !== "undefined" && document.body) {
        _window = window;
        _body = document.body;
        _docEl = document.documentElement;
        _toArray = gsap.utils.toArray;
        gsap.config({
            autoKillThreshold: 7
        });
        _config = gsap.config();
        _coreInitted = 1;
    }
};
var ScrollToPlugin = {
    version: "3.12.7",
    name: "scrollTo",
    rawVars: 1,
    register: function register(core) {
        gsap = core;
        _initCore();
    },
    init: function init(target, value, tween, index, targets) {
        _coreInitted || _initCore();
        var data = this, snapType = gsap.getProperty(target, "scrollSnapType");
        data.isWin = target === _window;
        data.target = target;
        data.tween = tween;
        value = _clean(value, index, target, targets);
        data.vars = value;
        data.autoKill = !!("autoKill" in value ? value : _config).autoKill;
        data.getX = _buildGetter(target, "x");
        data.getY = _buildGetter(target, "y");
        data.x = data.xPrev = data.getX();
        data.y = data.yPrev = data.getY();
        ScrollTrigger || (ScrollTrigger = gsap.core.globals().ScrollTrigger);
        gsap.getProperty(target, "scrollBehavior") === "smooth" && gsap.set(target, {
            scrollBehavior: "auto"
        });
        if (snapType && snapType !== "none") {
            // disable scroll snapping to avoid strange behavior
            data.snap = 1;
            data.snapInline = target.style.scrollSnapType;
            target.style.scrollSnapType = "none";
        }
        if (value.x != null) {
            data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);
            data._props.push("scrollTo_x");
        } else data.skipX = 1;
        if (value.y != null) {
            data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);
            data._props.push("scrollTo_y");
        } else data.skipY = 1;
    },
    render: function render(ratio, data) {
        var pt = data._pt, target = data.target, tween = data.tween, autoKill = data.autoKill, xPrev = data.xPrev, yPrev = data.yPrev, isWin = data.isWin, snap = data.snap, snapInline = data.snapInline, x, y, yDif, xDif, threshold;
        while(pt){
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
        x = isWin || !data.skipX ? data.getX() : xPrev;
        y = isWin || !data.skipY ? data.getY() : yPrev;
        yDif = y - yPrev;
        xDif = x - xPrev;
        threshold = _config.autoKillThreshold;
        if (data.x < 0) //can't scroll to a position less than 0! Might happen if someone uses a Back.easeOut or Elastic.easeOut when scrolling back to the top of the page (for example)
        data.x = 0;
        if (data.y < 0) data.y = 0;
        if (autoKill) {
            //note: iOS has a bug that throws off the scroll by several pixels, so we need to check if it's within 7 pixels of the previous one that we set instead of just looking for an exact match.
            if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) data.skipX = 1; //if the user scrolls separately, we should stop tweening!
            if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) data.skipY = 1; //if the user scrolls separately, we should stop tweening!
            if (data.skipX && data.skipY) {
                tween.kill();
                data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
            }
        }
        if (isWin) _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
        else {
            data.skipY || (target.scrollTop = data.y);
            data.skipX || (target.scrollLeft = data.x);
        }
        if (snap && (ratio === 1 || ratio === 0)) {
            y = target.scrollTop;
            x = target.scrollLeft;
            snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
            target.scrollTop = y + 1; // bug in Safari causes the element to totally reset its scroll position when scroll-snap-type changes, so we need to set it to a slightly different value and then back again to work around this bug.
            target.scrollLeft = x + 1;
            target.scrollTop = y;
            target.scrollLeft = x;
        }
        data.xPrev = data.x;
        data.yPrev = data.y;
        ScrollTrigger && ScrollTrigger.update();
    },
    kill: function kill(property) {
        var both = property === "scrollTo", i = this._props.indexOf(property);
        if (both || property === "scrollTo_x") this.skipX = 1;
        if (both || property === "scrollTo_y") this.skipY = 1;
        i > -1 && this._props.splice(i, 1);
        return !this._props.length;
    }
};
ScrollToPlugin.max = _max;
ScrollToPlugin.getOffset = _getOffset;
ScrollToPlugin.buildGetter = _buildGetter;
ScrollToPlugin.config = function(vars) {
    _config || _initCore() || (_config = gsap.config()); // in case the window hasn't been defined yet.
    for(var p in vars)_config[p] = vars[p];
};
_getGSAP() && gsap.registerPlugin(ScrollToPlugin);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"84doH":[function() {},{}],"5YYjt":[function() {},{}],"c3dKX":[function() {},{}],"bp9z5":[function() {},{}],"ax5Hj":[function() {},{}],"fPsoO":[function(require,module,exports,__globalThis) {
// Snap.svg 0.5.0
//
// Copyright (c) 2013 – 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2017-02-06
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.5.0 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\
(function(glob) {
    var version = "0.5.0", has = "hasOwnProperty", separator = /[\.\/]/, comaseparator = /\s*,\s*/, wildcard = "*", fun = function() {}, numsort = function(a, b) {
        return a - b;
    }, current_event, stop, events = {
        n: {}
    }, firstDefined = function() {
        for(var i = 0, ii = this.length; i < ii; i++){
            if (typeof this[i] != "undefined") return this[i];
        }
    }, lastDefined = function() {
        var i = this.length;
        while(--i){
            if (typeof this[i] != "undefined") return this[i];
        }
    }, objtos = Object.prototype.toString, Str = String, isArray = Array.isArray || function(ar) {
        return ar instanceof Array || objtos.call(ar) == "[object Array]";
    };
    /*\
     * eve
     [ method ]

     * Fires event with given `name`, given scope and other parameters.

     > Arguments

     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers

     = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
    \*/ eve = function(name, scope) {
        var e = events, oldstop = stop, args = Array.prototype.slice.call(arguments, 2), listeners = eve.listeners(name), z = 0, f = false, l, indexed = [], queue = {}, out = [], ce = current_event, errors = [];
        out.firstDefined = firstDefined;
        out.lastDefined = lastDefined;
        current_event = name;
        stop = 0;
        for(var i = 0, ii = listeners.length; i < ii; i++)if ("zIndex" in listeners[i]) {
            indexed.push(listeners[i].zIndex);
            if (listeners[i].zIndex < 0) queue[listeners[i].zIndex] = listeners[i];
        }
        indexed.sort(numsort);
        while(indexed[z] < 0){
            l = queue[indexed[z++]];
            out.push(l.apply(scope, args));
            if (stop) {
                stop = oldstop;
                return out;
            }
        }
        for(i = 0; i < ii; i++){
            l = listeners[i];
            if ("zIndex" in l) {
                if (l.zIndex == indexed[z]) {
                    out.push(l.apply(scope, args));
                    if (stop) break;
                    do {
                        z++;
                        l = queue[indexed[z]];
                        l && out.push(l.apply(scope, args));
                        if (stop) break;
                    }while (l);
                } else queue[l.zIndex] = l;
            } else {
                out.push(l.apply(scope, args));
                if (stop) break;
            }
        }
        stop = oldstop;
        current_event = ce;
        return out;
    };
    // Undocumented. Debug only.
    eve._events = events;
    /*\
     * eve.listeners
     [ method ]

     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

     > Arguments

     - name (string) name of the event, dot (`.`) or slash (`/`) separated

     = (array) array of event handlers
    \*/ eve.listeners = function(name) {
        var names = isArray(name) ? name : name.split(separator), e = events, item, items, k, i, ii, j, jj, nes, es = [
            e
        ], out = [];
        for(i = 0, ii = names.length; i < ii; i++){
            nes = [];
            for(j = 0, jj = es.length; j < jj; j++){
                e = es[j].n;
                items = [
                    e[names[i]],
                    e[wildcard]
                ];
                k = 2;
                while(k--){
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };
    /*\
     * eve.separator
     [ method ]

     * If for some reasons you don’t like default separators (`.` or `/`) you can specify yours
     * here. Be aware that if you pass a string longer than one character it will be treated as
     * a list of characters.

     - separator (string) new separator. Empty string resets to default: `.` or `/`.
    \*/ eve.separator = function(sep) {
        if (sep) {
            sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
            sep = "[" + sep + "]";
            separator = new RegExp(sep);
        } else separator = /[\.\/]/;
    };
    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     - name (array) if you don’t want to use separators, you can use array of strings
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. 
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt` function will be called before `eatIt`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/ eve.on = function(name, f) {
        if (typeof f != "function") return function() {};
        var names = isArray(name) ? isArray(name[0]) ? name : [
            name
        ] : Str(name).split(comaseparator);
        for(var i = 0, ii = names.length; i < ii; i++)(function(name) {
            var names = isArray(name) ? name : Str(name).split(separator), e = events, exist;
            for(var i = 0, ii = names.length; i < ii; i++){
                e = e.n;
                e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {
                    n: {}
                });
            }
            e.f = e.f || [];
            for(i = 0, ii = e.f.length; i < ii; i++)if (e.f[i] == f) {
                exist = true;
                break;
            }
            !exist && e.f.push(f);
        })(names[i]);
        return function(zIndex) {
            if (+zIndex == +zIndex) f.zIndex = +zIndex;
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     > Arguments
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/ eve.f = function(event) {
        var attrs = [].slice.call(arguments, 1);
        return function() {
            eve.apply(null, [
                event,
                null
            ].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/ eve.stop = function() {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     > Arguments
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/ eve.nt = function(subname) {
        var cur = isArray(current_event) ? current_event.join(".") : current_event;
        if (subname) return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
        return cur;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/ eve.nts = function() {
        return isArray(current_event) ? current_event : current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/ /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/ eve.off = eve.unbind = function(name, f) {
        if (!name) {
            eve._events = events = {
                n: {}
            };
            return;
        }
        var names = isArray(name) ? isArray(name[0]) ? name : [
            name
        ] : Str(name).split(comaseparator);
        if (names.length > 1) {
            for(var i = 0, ii = names.length; i < ii; i++)eve.off(names[i], f);
            return;
        }
        names = isArray(name) ? name : Str(name).split(separator);
        var e, key, splice, i, ii, j, jj, cur = [
            events
        ], inodes = [];
        for(i = 0, ii = names.length; i < ii; i++)for(j = 0; j < cur.length; j += splice.length - 2){
            splice = [
                j,
                1
            ];
            e = cur[j].n;
            if (names[i] != wildcard) {
                if (e[names[i]]) {
                    splice.push(e[names[i]]);
                    inodes.unshift({
                        n: e,
                        name: names[i]
                    });
                }
            } else {
                for(key in e)if (e[has](key)) {
                    splice.push(e[key]);
                    inodes.unshift({
                        n: e,
                        name: key
                    });
                }
            }
            cur.splice.apply(cur, splice);
        }
        for(i = 0, ii = cur.length; i < ii; i++){
            e = cur[i];
            while(e.n){
                if (f) {
                    if (e.f) {
                        for(j = 0, jj = e.f.length; j < jj; j++)if (e.f[j] == f) {
                            e.f.splice(j, 1);
                            break;
                        }
                        !e.f.length && delete e.f;
                    }
                    for(key in e.n)if (e.n[has](key) && e.n[key].f) {
                        var funcs = e.n[key].f;
                        for(j = 0, jj = funcs.length; j < jj; j++)if (funcs[j] == f) {
                            funcs.splice(j, 1);
                            break;
                        }
                        !funcs.length && delete e.n[key].f;
                    }
                } else {
                    delete e.f;
                    for(key in e.n)if (e.n[has](key) && e.n[key].f) delete e.n[key].f;
                }
                e = e.n;
            }
        }
        // prune inner nodes in path
        prune: for(i = 0, ii = inodes.length; i < ii; i++){
            e = inodes[i];
            for(key in e.n[e.name].f)continue prune;
            for(key in e.n[e.name].n)continue prune;
            // is empty
            delete e.n[e.name];
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/ eve.once = function(name, f) {
        var f2 = function() {
            eve.off(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/ eve.version = version;
    eve.toString = function() {
        return "You are running Eve " + version;
    };
    (0, module.exports) ? module.exports = eve : typeof define === "function" && define.amd ? define("eve", [], function() {
        return eve;
    }) : glob.eve = eve;
})(this);
(function(glob, factory) {
    // AMD support
    if (typeof define == "function" && define.amd) // Define as an anonymous module
    define([
        "eve"
    ], function(eve1) {
        return factory(glob, eve1);
    });
    else {
        // Next for Node.js or CommonJS
        var eve1 = require("96721bd76d4d56e1");
        module.exports = factory(glob, eve1);
    }
})(window || this, function(window1, eve1) {
    // Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    var mina = function(eve1) {
        var animations = {}, requestAnimFrame = window1.requestAnimationFrame || window1.webkitRequestAnimationFrame || window1.mozRequestAnimationFrame || window1.oRequestAnimationFrame || window1.msRequestAnimationFrame || function(callback) {
            setTimeout(callback, 16, new Date().getTime());
            return true;
        }, requestID, isArray = Array.isArray || function(a) {
            return a instanceof Array || Object.prototype.toString.call(a) == "[object Array]";
        }, idgen = 0, idprefix = "M" + (+new Date).toString(36), ID = function() {
            return idprefix + (idgen++).toString(36);
        }, diff = function(a, b, A, B) {
            if (isArray(a)) {
                res = [];
                for(var i = 0, ii = a.length; i < ii; i++)res[i] = diff(a[i], b, A[i], B);
                return res;
            }
            var dif = (A - a) / (B - b);
            return function(bb) {
                return a + dif * (bb - b);
            };
        }, timer = Date.now || function() {
            return +new Date;
        }, sta = function(val) {
            var a = this;
            if (val == null) return a.s;
            var ds = a.s - val;
            a.b += a.dur * ds;
            a.B += a.dur * ds;
            a.s = val;
        }, speed = function(val) {
            var a = this;
            if (val == null) return a.spd;
            a.spd = val;
        }, duration = function(val) {
            var a = this;
            if (val == null) return a.dur;
            a.s = a.s * val / a.dur;
            a.dur = val;
        }, stopit = function() {
            var a = this;
            delete animations[a.id];
            a.update();
            eve1("mina.stop." + a.id, a);
        }, pause = function() {
            var a = this;
            if (a.pdif) return;
            delete animations[a.id];
            a.update();
            a.pdif = a.get() - a.b;
        }, resume = function() {
            var a = this;
            if (!a.pdif) return;
            a.b = a.get() - a.pdif;
            delete a.pdif;
            animations[a.id] = a;
            frame();
        }, update = function() {
            var a = this, res1;
            if (isArray(a.start)) {
                res1 = [];
                for(var j = 0, jj = a.start.length; j < jj; j++)res1[j] = +a.start[j] + (a.end[j] - a.start[j]) * a.easing(a.s);
            } else res1 = +a.start + (a.end - a.start) * a.easing(a.s);
            a.set(res1);
        }, frame = function(timeStamp) {
            // Manual invokation?
            if (!timeStamp) {
                // Frame loop stopped?
                if (!requestID) // Start frame loop...
                requestID = requestAnimFrame(frame);
                return;
            }
            var len = 0;
            for(var i in animations)if (animations.hasOwnProperty(i)) {
                var a = animations[i], b = a.get(), res1;
                len++;
                a.s = (b - a.b) / (a.dur / a.spd);
                if (a.s >= 1) {
                    delete animations[i];
                    a.s = 1;
                    len--;
                    (function(a) {
                        setTimeout(function() {
                            eve1("mina.finish." + a.id, a);
                        });
                    })(a);
                }
                a.update();
            }
            requestID = len ? requestAnimFrame(frame) : false;
        }, /*\
     * mina
     [ method ]
     **
     * Generic animation of numbers
     **
     - a (number) start _slave_ number
     - A (number) end _slave_ number
     - b (number) start _master_ number (start time in general case)
     - B (number) end _master_ number (end time in general case)
     - get (function) getter of _master_ number (see @mina.time)
     - set (function) setter of _slave_ number
     - easing (function) #optional easing function, default is @mina.linear
     = (object) animation descriptor
     o {
     o         id (string) animation id,
     o         start (number) start _slave_ number,
     o         end (number) end _slave_ number,
     o         b (number) start _master_ number,
     o         s (number) animation status (0..1),
     o         dur (number) animation duration,
     o         spd (number) animation speed,
     o         get (function) getter of _master_ number (see @mina.time),
     o         set (function) setter of _slave_ number,
     o         easing (function) easing function, default is @mina.linear,
     o         status (function) status getter/setter,
     o         speed (function) speed getter/setter,
     o         duration (function) duration getter/setter,
     o         stop (function) animation stopper
     o         pause (function) pauses the animation
     o         resume (function) resumes the animation
     o         update (function) calles setter with the right value of the animation
     o }
    \*/ mina = function(a, A, b, B, get, set, easing) {
            var anim = {
                id: ID(),
                start: a,
                end: A,
                b: b,
                s: 0,
                dur: B - b,
                spd: 1,
                get: get,
                set: set,
                easing: easing || mina.linear,
                status: sta,
                speed: speed,
                duration: duration,
                stop: stopit,
                pause: pause,
                resume: resume,
                update: update
            };
            animations[anim.id] = anim;
            var len = 0, i;
            for(i in animations)if (animations.hasOwnProperty(i)) {
                len++;
                if (len == 2) break;
            }
            len == 1 && frame();
            return anim;
        };
        /*\
     * mina.time
     [ method ]
     **
     * Returns the current time. Equivalent to:
     | function () {
     |     return (new Date).getTime();
     | }
    \*/ mina.time = timer;
        /*\
     * mina.getById
     [ method ]
     **
     * Returns an animation by its id
     - id (string) animation's id
     = (object) See @mina
    \*/ mina.getById = function(id) {
            return animations[id] || null;
        };
        /*\
     * mina.linear
     [ method ]
     **
     * Default linear easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.linear = function(n) {
            return n;
        };
        /*\
     * mina.easeout
     [ method ]
     **
     * Easeout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.easeout = function(n) {
            return Math.pow(n, 1.7);
        };
        /*\
     * mina.easein
     [ method ]
     **
     * Easein easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.easein = function(n) {
            return Math.pow(n, .48);
        };
        /*\
     * mina.easeinout
     [ method ]
     **
     * Easeinout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.easeinout = function(n) {
            if (n == 1) return 1;
            if (n == 0) return 0;
            var q = .48 - n / 1.04, Q = Math.sqrt(.1734 + q * q), x = Q - q, X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1), y = -Q - q, Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1), t = X + Y + .5;
            return (1 - t) * 3 * t * t + t * t * t;
        };
        /*\
     * mina.backin
     [ method ]
     **
     * Backin easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.backin = function(n) {
            if (n == 1) return 1;
            var s = 1.70158;
            return n * n * ((s + 1) * n - s);
        };
        /*\
     * mina.backout
     [ method ]
     **
     * Backout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.backout = function(n) {
            if (n == 0) return 0;
            n = n - 1;
            var s = 1.70158;
            return n * n * ((s + 1) * n + s) + 1;
        };
        /*\
     * mina.elastic
     [ method ]
     **
     * Elastic easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.elastic = function(n) {
            if (n == !!n) return n;
            return Math.pow(2, -10 * n) * Math.sin((n - .075) * (2 * Math.PI) / .3) + 1;
        };
        /*\
     * mina.bounce
     [ method ]
     **
     * Bounce easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/ mina.bounce = function(n) {
            var s = 7.5625, p = 2.75, l;
            if (n < 1 / p) l = s * n * n;
            else {
                if (n < 2 / p) {
                    n -= 1.5 / p;
                    l = s * n * n + .75;
                } else if (n < 2.5 / p) {
                    n -= 2.25 / p;
                    l = s * n * n + .9375;
                } else {
                    n -= 2.625 / p;
                    l = s * n * n + .984375;
                }
            }
            return l;
        };
        window1.mina = mina;
        return mina;
    }(typeof eve1 == "undefined" ? function() {} : eve1);
    // Copyright (c) 2013 - 2017 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    var Snap = function(root) {
        Snap.version = "0.5.1";
        /*\
 * Snap
 [ method ]
 **
 * Creates a drawing surface or wraps existing SVG element.
 **
 - width (number|string) width of surface
 - height (number|string) height of surface
 * or
 - DOM (SVGElement) element to be wrapped into Snap structure
 * or
 - array (array) array of elements (will return set of elements)
 * or
 - query (string) CSS query selector
 = (object) @Element
\*/ function Snap(w, h) {
            if (w) {
                if (w.nodeType) return wrap(w);
                if (is(w, "array") && Snap.set) return Snap.set.apply(Snap, w);
                if (w instanceof Element) return w;
                if (h == null) {
                    // try {
                    w = glob.doc.querySelector(String(w));
                    return wrap(w);
                // } catch (e) {
                // return null;
                // }
                }
            }
            w = w == null ? "100%" : w;
            h = h == null ? "100%" : h;
            return new Paper(w, h);
        }
        Snap.toString = function() {
            return "Snap v" + this.version;
        };
        Snap._ = {};
        var glob = {
            win: root.window,
            doc: root.window.document
        };
        Snap._.glob = glob;
        var has = "hasOwnProperty", Str = String, toFloat = parseFloat, toInt = parseInt, math1 = Math, mmax = math1.max, mmin = math1.min, abs = math1.abs, pow = math1.pow, PI = math1.PI, round = math1.round, E = "", S = " ", objectToString = Object.prototype.toString, ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i, bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, separator = Snap._.separator = /[,\s]+/, whitespace = /[\s]/g, commaSpaces = /[\s]*,[\s]*/, hsrg = {
            hs: 1,
            rg: 1
        }, pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig, tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig, pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/ig, idgen = 0, idprefix = "S" + (+new Date).toString(36), ID = function(el) {
            return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
        }, xlink = "http://www.w3.org/1999/xlink", xmlns = "http://www.w3.org/2000/svg", hub = {}, /*\
     * Snap.url
     [ method ]
     **
     * Wraps path into `"url('<path>')"`.
     - value (string) path
     = (string) wrapped path
    \*/ URL = Snap.url = function(url) {
            return "url('#" + url + "')";
        };
        function $(el, attr) {
            if (attr) {
                if (el == "#text") el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
                if (el == "#comment") el = glob.doc.createComment(attr.text || attr["#text"] || "");
                if (typeof el == "string") el = $(el);
                if (typeof attr == "string") {
                    if (el.nodeType == 1) {
                        if (attr.substring(0, 6) == "xlink:") return el.getAttributeNS(xlink, attr.substring(6));
                        if (attr.substring(0, 4) == "xml:") return el.getAttributeNS(xmlns, attr.substring(4));
                        return el.getAttribute(attr);
                    } else if (attr == "text") return el.nodeValue;
                    else return null;
                }
                if (el.nodeType == 1) {
                    for(var key in attr)if (attr[has](key)) {
                        var val = Str(attr[key]);
                        if (val) {
                            if (key.substring(0, 6) == "xlink:") el.setAttributeNS(xlink, key.substring(6), val);
                            else if (key.substring(0, 4) == "xml:") el.setAttributeNS(xmlns, key.substring(4), val);
                            else el.setAttribute(key, val);
                        } else el.removeAttribute(key);
                    }
                } else if ("text" in attr) el.nodeValue = attr.text;
            } else el = glob.doc.createElementNS(xmlns, el);
            return el;
        }
        Snap._.$ = $;
        Snap._.id = ID;
        function getAttrs(el) {
            var attrs = el.attributes, name, out = {};
            for(var i = 0; i < attrs.length; i++){
                if (attrs[i].namespaceURI == xlink) name = "xlink:";
                else name = "";
                name += attrs[i].name;
                out[name] = attrs[i].textContent;
            }
            return out;
        }
        function is(o, type) {
            type = Str.prototype.toLowerCase.call(type);
            if (type == "finite") return isFinite(o);
            if (type == "array" && (o instanceof Array || Array.isArray && Array.isArray(o))) return true;
            return type == "null" && o === null || type == typeof o && o !== null || type == "object" && o === Object(o) || objectToString.call(o).slice(8, -1).toLowerCase() == type;
        }
        /*\
 * Snap.format
 [ method ]
 **
 * Replaces construction of type `{<name>}` to the corresponding argument
 **
 - token (string) string to format
 - json (object) object which properties are used as a replacement
 = (string) formatted string
 > Usage
 | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
 | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
 |     x: 10,
 |     y: 20,
 |     dim: {
 |         width: 40,
 |         height: 50,
 |         "negative width": -40
 |     }
 | }));
\*/ Snap.format = function() {
            var tokenRegex = /\{([^\}]+)\}/g, objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, replacer = function(all, key, obj) {
                var res1 = obj;
                key.replace(objNotationRegex, function(all, name, quote, quotedName, isFunc) {
                    name = name || quotedName;
                    if (res1) {
                        if (name in res1) res1 = res1[name];
                        typeof res1 == "function" && isFunc && (res1 = res1());
                    }
                });
                res1 = (res1 == null || res1 == obj ? all : res1) + "";
                return res1;
            };
            return function(str, obj) {
                return Str(str).replace(tokenRegex, function(all, key) {
                    return replacer(all, key, obj);
                });
            };
        }();
        function clone(obj) {
            if (typeof obj == "function" || Object(obj) !== obj) return obj;
            var res1 = new obj.constructor;
            for(var key in obj)if (obj[has](key)) res1[key] = clone(obj[key]);
            return res1;
        }
        Snap._.clone = clone;
        function repush(array, item) {
            for(var i = 0, ii = array.length; i < ii; i++)if (array[i] === item) return array.push(array.splice(i, 1)[0]);
        }
        function cacher(f, scope, postprocessor) {
            function newf() {
                var arg = Array.prototype.slice.call(arguments, 0), args = arg.join("\u2400"), cache = newf.cache = newf.cache || {}, count = newf.count = newf.count || [];
                if (cache[has](args)) {
                    repush(count, args);
                    return postprocessor ? postprocessor(cache[args]) : cache[args];
                }
                count.length >= 1e3 && delete cache[count.shift()];
                count.push(args);
                cache[args] = f.apply(scope, arg);
                return postprocessor ? postprocessor(cache[args]) : cache[args];
            }
            return newf;
        }
        Snap._.cacher = cacher;
        function angle(x1, y1, x2, y2, x3, y3) {
            if (x3 == null) {
                var x = x1 - x2, y = y1 - y2;
                if (!x && !y) return 0;
                return (180 + math1.atan2(-y, -x) * 180 / PI + 360) % 360;
            } else return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
        }
        function rad(deg) {
            return deg % 360 * PI / 180;
        }
        function deg(rad) {
            return rad * 180 / PI % 360;
        }
        function x_y() {
            return this.x + S + this.y;
        }
        function x_y_w_h() {
            return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
        }
        /*\
 * Snap.rad
 [ method ]
 **
 * Transform angle to radians
 - deg (number) angle in degrees
 = (number) angle in radians
\*/ Snap.rad = rad;
        /*\
 * Snap.deg
 [ method ]
 **
 * Transform angle to degrees
 - rad (number) angle in radians
 = (number) angle in degrees
\*/ Snap.deg = deg;
        /*\
 * Snap.sin
 [ method ]
 **
 * Equivalent to `Math.sin()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) sin
\*/ Snap.sin = function(angle) {
            return math1.sin(Snap.rad(angle));
        };
        /*\
 * Snap.tan
 [ method ]
 **
 * Equivalent to `Math.tan()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) tan
\*/ Snap.tan = function(angle) {
            return math1.tan(Snap.rad(angle));
        };
        /*\
 * Snap.cos
 [ method ]
 **
 * Equivalent to `Math.cos()` only works with degrees, not radians.
 - angle (number) angle in degrees
 = (number) cos
\*/ Snap.cos = function(angle) {
            return math1.cos(Snap.rad(angle));
        };
        /*\
 * Snap.asin
 [ method ]
 **
 * Equivalent to `Math.asin()` only works with degrees, not radians.
 - num (number) value
 = (number) asin in degrees
\*/ Snap.asin = function(num) {
            return Snap.deg(math1.asin(num));
        };
        /*\
 * Snap.acos
 [ method ]
 **
 * Equivalent to `Math.acos()` only works with degrees, not radians.
 - num (number) value
 = (number) acos in degrees
\*/ Snap.acos = function(num) {
            return Snap.deg(math1.acos(num));
        };
        /*\
 * Snap.atan
 [ method ]
 **
 * Equivalent to `Math.atan()` only works with degrees, not radians.
 - num (number) value
 = (number) atan in degrees
\*/ Snap.atan = function(num) {
            return Snap.deg(math1.atan(num));
        };
        /*\
 * Snap.atan2
 [ method ]
 **
 * Equivalent to `Math.atan2()` only works with degrees, not radians.
 - num (number) value
 = (number) atan2 in degrees
\*/ Snap.atan2 = function(num) {
            return Snap.deg(math1.atan2(num));
        };
        /*\
 * Snap.angle
 [ method ]
 **
 * Returns an angle between two or three points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 - x3 (number) #optional x coord of third point
 - y3 (number) #optional y coord of third point
 = (number) angle in degrees
\*/ Snap.angle = angle;
        /*\
 * Snap.len
 [ method ]
 **
 * Returns distance between two points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/ Snap.len = function(x1, y1, x2, y2) {
            return Math.sqrt(Snap.len2(x1, y1, x2, y2));
        };
        /*\
 * Snap.len2
 [ method ]
 **
 * Returns squared distance between two points
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 = (number) distance
\*/ Snap.len2 = function(x1, y1, x2, y2) {
            return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
        };
        /*\
 * Snap.closestPoint
 [ method ]
 **
 * Returns closest point to a given one on a given path.
 - path (Element) path element
 - x (number) x coord of a point
 - y (number) y coord of a point
 = (object) in format
 {
    x (number) x coord of the point on the path
    y (number) y coord of the point on the path
    length (number) length of the path to the point
    distance (number) distance from the given point to the path
 }
\*/ // Copied from http://bl.ocks.org/mbostock/8027637
        Snap.closestPoint = function(path, x, y) {
            function distance2(p) {
                var dx = p.x - x, dy = p.y - y;
                return dx * dx + dy * dy;
            }
            var pathNode = path.node, pathLength = pathNode.getTotalLength(), precision = pathLength / pathNode.pathSegList.numberOfItems * .125, best, bestLength, bestDistance = Infinity;
            // linear scan for coarse approximation
            for(var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision)if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
                best = scan;
                bestLength = scanLength;
                bestDistance = scanDistance;
            }
            // binary search for precise estimate
            precision *= .5;
            while(precision > .5){
                var before, after, beforeLength, afterLength, beforeDistance, afterDistance;
                if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
                    best = before;
                    bestLength = beforeLength;
                    bestDistance = beforeDistance;
                } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
                    best = after;
                    bestLength = afterLength;
                    bestDistance = afterDistance;
                } else precision *= .5;
            }
            best = {
                x: best.x,
                y: best.y,
                length: bestLength,
                distance: Math.sqrt(bestDistance)
            };
            return best;
        };
        /*\
 * Snap.is
 [ method ]
 **
 * Handy replacement for the `typeof` operator
 - o (…) any object or primitive
 - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
 = (boolean) `true` if given value is of given type
\*/ Snap.is = is;
        /*\
 * Snap.snapTo
 [ method ]
 **
 * Snaps given value to given grid
 - values (array|number) given array of values or step of the grid
 - value (number) value to adjust
 - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
 = (number) adjusted value
\*/ Snap.snapTo = function(values, value, tolerance) {
            tolerance = is(tolerance, "finite") ? tolerance : 10;
            if (is(values, "array")) {
                var i = values.length;
                while(i--)if (abs(values[i] - value) <= tolerance) return values[i];
            } else {
                values = +values;
                var rem = value % values;
                if (rem < tolerance) return value - rem;
                if (rem > values - tolerance) return value - rem + values;
            }
            return value;
        };
        // Colour
        /*\
 * Snap.getRGB
 [ method ]
 **
 * Parses color string as RGB object
 - color (string) color string in one of the following formats:
 # <ul>
 #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
 #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
 #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
 #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
 #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
 #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
 #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
 #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
 # </ul>
 * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) true if string can't be parsed
 o }
\*/ Snap.getRGB = cacher(function(colour) {
            if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: rgbtoString
            };
            if (colour == "none") return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                toString: rgbtoString
            };
            !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
            if (!colour) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: rgbtoString
            };
            var res1, red, green, blue, opacity, t, values, rgb = colour.match(colourRegExp);
            if (rgb) {
                if (rgb[2]) {
                    blue = toInt(rgb[2].substring(5), 16);
                    green = toInt(rgb[2].substring(3, 5), 16);
                    red = toInt(rgb[2].substring(1, 3), 16);
                }
                if (rgb[3]) {
                    blue = toInt((t = rgb[3].charAt(3)) + t, 16);
                    green = toInt((t = rgb[3].charAt(2)) + t, 16);
                    red = toInt((t = rgb[3].charAt(1)) + t, 16);
                }
                if (rgb[4]) {
                    values = rgb[4].split(commaSpaces);
                    red = toFloat(values[0]);
                    values[0].slice(-1) == "%" && (red *= 2.55);
                    green = toFloat(values[1]);
                    values[1].slice(-1) == "%" && (green *= 2.55);
                    blue = toFloat(values[2]);
                    values[2].slice(-1) == "%" && (blue *= 2.55);
                    rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
                    values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                }
                if (rgb[5]) {
                    values = rgb[5].split(commaSpaces);
                    red = toFloat(values[0]);
                    values[0].slice(-1) == "%" && (red /= 100);
                    green = toFloat(values[1]);
                    values[1].slice(-1) == "%" && (green /= 100);
                    blue = toFloat(values[2]);
                    values[2].slice(-1) == "%" && (blue /= 100);
                    (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
                    rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
                    values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                    return Snap.hsb2rgb(red, green, blue, opacity);
                }
                if (rgb[6]) {
                    values = rgb[6].split(commaSpaces);
                    red = toFloat(values[0]);
                    values[0].slice(-1) == "%" && (red /= 100);
                    green = toFloat(values[1]);
                    values[1].slice(-1) == "%" && (green /= 100);
                    blue = toFloat(values[2]);
                    values[2].slice(-1) == "%" && (blue /= 100);
                    (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
                    rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
                    values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                    return Snap.hsl2rgb(red, green, blue, opacity);
                }
                red = mmin(math1.round(red), 255);
                green = mmin(math1.round(green), 255);
                blue = mmin(math1.round(blue), 255);
                opacity = mmin(mmax(opacity, 0), 1);
                rgb = {
                    r: red,
                    g: green,
                    b: blue,
                    toString: rgbtoString
                };
                rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
                rgb.opacity = is(opacity, "finite") ? opacity : 1;
                return rgb;
            }
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: rgbtoString
            };
        }, Snap);
        /*\
 * Snap.hsb
 [ method ]
 **
 * Converts HSB values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - b (number) value or brightness
 = (string) hex representation of the color
\*/ Snap.hsb = cacher(function(h, s, b) {
            return Snap.hsb2rgb(h, s, b).hex;
        });
        /*\
 * Snap.hsl
 [ method ]
 **
 * Converts HSL values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (string) hex representation of the color
\*/ Snap.hsl = cacher(function(h, s, l) {
            return Snap.hsl2rgb(h, s, l).hex;
        });
        /*\
 * Snap.rgb
 [ method ]
 **
 * Converts RGB values to a hex representation of the color
 - r (number) red
 - g (number) green
 - b (number) blue
 = (string) hex representation of the color
\*/ Snap.rgb = cacher(function(r, g1, b, o) {
            if (is(o, "finite")) {
                var round = math1.round;
                return "rgba(" + [
                    round(r),
                    round(g1),
                    round(b),
                    +o.toFixed(2)
                ] + ")";
            }
            return "#" + (16777216 | b | g1 << 8 | r << 16).toString(16).slice(1);
        });
        var toHex = function(color) {
            var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0], red = "rgb(255, 0, 0)";
            toHex = cacher(function(color) {
                if (color.toLowerCase() == "red") return red;
                i.style.color = red;
                i.style.color = color;
                var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
                return out == red ? null : out;
            });
            return toHex(color);
        }, hsbtoString = function() {
            return "hsb(" + [
                this.h,
                this.s,
                this.b
            ] + ")";
        }, hsltoString = function() {
            return "hsl(" + [
                this.h,
                this.s,
                this.l
            ] + ")";
        }, rgbtoString = function() {
            return this.opacity == 1 || this.opacity == null ? this.hex : "rgba(" + [
                this.r,
                this.g,
                this.b,
                this.opacity
            ] + ")";
        }, prepareRGB = function(r, g1, b) {
            if (g1 == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
                b = r.b;
                g1 = r.g;
                r = r.r;
            }
            if (g1 == null && is(r, string)) {
                var clr = Snap.getRGB(r);
                r = clr.r;
                g1 = clr.g;
                b = clr.b;
            }
            if (r > 1 || g1 > 1 || b > 1) {
                r /= 255;
                g1 /= 255;
                b /= 255;
            }
            return [
                r,
                g1,
                b
            ];
        }, packageRGB = function(r, g1, b, o) {
            r = math1.round(r * 255);
            g1 = math1.round(g1 * 255);
            b = math1.round(b * 255);
            var rgb = {
                r: r,
                g: g1,
                b: b,
                opacity: is(o, "finite") ? o : 1,
                hex: Snap.rgb(r, g1, b),
                toString: rgbtoString
            };
            is(o, "finite") && (rgb.opacity = o);
            return rgb;
        };
        /*\
 * Snap.color
 [ method ]
 **
 * Parses the color string and returns an object featuring the color's component values
 - clr (string) color string in one of the supported formats (see @Snap.getRGB)
 = (object) Combined RGB/HSB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) `true` if string can't be parsed,
 o     h (number) hue,
 o     s (number) saturation,
 o     v (number) value (brightness),
 o     l (number) lightness
 o }
\*/ Snap.color = function(clr) {
            var rgb;
            if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
                rgb = Snap.hsb2rgb(clr);
                clr.r = rgb.r;
                clr.g = rgb.g;
                clr.b = rgb.b;
                clr.opacity = 1;
                clr.hex = rgb.hex;
            } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
                rgb = Snap.hsl2rgb(clr);
                clr.r = rgb.r;
                clr.g = rgb.g;
                clr.b = rgb.b;
                clr.opacity = 1;
                clr.hex = rgb.hex;
            } else {
                if (is(clr, "string")) clr = Snap.getRGB(clr);
                if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
                    rgb = Snap.rgb2hsl(clr);
                    clr.h = rgb.h;
                    clr.s = rgb.s;
                    clr.l = rgb.l;
                    rgb = Snap.rgb2hsb(clr);
                    clr.v = rgb.b;
                } else {
                    clr = {
                        hex: "none"
                    };
                    clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
                    clr.error = 1;
                }
            }
            clr.toString = rgbtoString;
            return clr;
        };
        /*\
 * Snap.hsb2rgb
 [ method ]
 **
 * Converts HSB values to an RGB object
 - h (number) hue
 - s (number) saturation
 - v (number) value or brightness
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/ Snap.hsb2rgb = function(h, s, v, o) {
            if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
                v = h.b;
                s = h.s;
                o = h.o;
                h = h.h;
            }
            h *= 360;
            var R, G, B, X, C;
            h = h % 360 / 60;
            C = v * s;
            X = C * (1 - abs(h % 2 - 1));
            R = G = B = v - C;
            h = ~~h;
            R += [
                C,
                X,
                0,
                0,
                X,
                C
            ][h];
            G += [
                X,
                C,
                C,
                X,
                0,
                0
            ][h];
            B += [
                0,
                0,
                X,
                C,
                C,
                X
            ][h];
            return packageRGB(R, G, B, o);
        };
        /*\
 * Snap.hsl2rgb
 [ method ]
 **
 * Converts HSL values to an RGB object
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/ Snap.hsl2rgb = function(h, s, l, o) {
            if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
                l = h.l;
                s = h.s;
                h = h.h;
            }
            if (h > 1 || s > 1 || l > 1) {
                h /= 360;
                s /= 100;
                l /= 100;
            }
            h *= 360;
            var R, G, B, X, C;
            h = h % 360 / 60;
            C = 2 * s * (l < .5 ? l : 1 - l);
            X = C * (1 - abs(h % 2 - 1));
            R = G = B = l - C / 2;
            h = ~~h;
            R += [
                C,
                X,
                0,
                0,
                X,
                C
            ][h];
            G += [
                X,
                C,
                C,
                X,
                0,
                0
            ][h];
            B += [
                0,
                0,
                X,
                C,
                C,
                X
            ][h];
            return packageRGB(R, G, B, o);
        };
        /*\
 * Snap.rgb2hsb
 [ method ]
 **
 * Converts RGB values to an HSB object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSB object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     b (number) brightness
 o }
\*/ Snap.rgb2hsb = function(r, g1, b) {
            b = prepareRGB(r, g1, b);
            r = b[0];
            g1 = b[1];
            b = b[2];
            var H, S, V, C;
            V = mmax(r, g1, b);
            C = V - mmin(r, g1, b);
            H = C == 0 ? null : V == r ? (g1 - b) / C : V == g1 ? (b - r) / C + 2 : (r - g1) / C + 4;
            H = (H + 360) % 6 * 60 / 360;
            S = C == 0 ? 0 : C / V;
            return {
                h: H,
                s: S,
                b: V,
                toString: hsbtoString
            };
        };
        /*\
 * Snap.rgb2hsl
 [ method ]
 **
 * Converts RGB values to an HSL object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSL object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     l (number) luminosity
 o }
\*/ Snap.rgb2hsl = function(r, g1, b) {
            b = prepareRGB(r, g1, b);
            r = b[0];
            g1 = b[1];
            b = b[2];
            var H, S, L, M, m, C;
            M = mmax(r, g1, b);
            m = mmin(r, g1, b);
            C = M - m;
            H = C == 0 ? null : M == r ? (g1 - b) / C : M == g1 ? (b - r) / C + 2 : (r - g1) / C + 4;
            H = (H + 360) % 6 * 60 / 360;
            L = (M + m) / 2;
            S = C == 0 ? 0 : L < .5 ? C / (2 * L) : C / (2 - 2 * L);
            return {
                h: H,
                s: S,
                l: L,
                toString: hsltoString
            };
        };
        // Transformations
        /*\
 * Snap.parsePathString
 [ method ]
 **
 * Utility method
 **
 * Parses given path string into an array of arrays of path segments
 - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
 = (array) array of segments
\*/ Snap.parsePathString = function(pathString) {
            if (!pathString) return null;
            var pth = Snap.path(pathString);
            if (pth.arr) return Snap.path.clone(pth.arr);
            var paramCounts = {
                a: 7,
                c: 6,
                o: 2,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                u: 3,
                z: 0
            }, data = [];
            if (is(pathString, "array") && is(pathString[0], "array")) data = Snap.path.clone(pathString);
            if (!data.length) Str(pathString).replace(pathCommand, function(a, b, c) {
                var params = [], name = b.toLowerCase();
                c.replace(pathValues, function(a, b) {
                    b && params.push(+b);
                });
                if (name == "m" && params.length > 2) {
                    data.push([
                        b
                    ].concat(params.splice(0, 2)));
                    name = "l";
                    b = b == "m" ? "l" : "L";
                }
                if (name == "o" && params.length == 1) data.push([
                    b,
                    params[0]
                ]);
                if (name == "r") data.push([
                    b
                ].concat(params));
                else while(params.length >= paramCounts[name]){
                    data.push([
                        b
                    ].concat(params.splice(0, paramCounts[name])));
                    if (!paramCounts[name]) break;
                }
            });
            data.toString = Snap.path.toString;
            pth.arr = Snap.path.clone(data);
            return data;
        };
        /*\
 * Snap.parseTransformString
 [ method ]
 **
 * Utility method
 **
 * Parses given transform string into an array of transformations
 - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
 = (array) array of transformations
\*/ var parseTransformString = Snap.parseTransformString = function(TString) {
            if (!TString) return null;
            var paramCounts = {
                r: 3,
                s: 4,
                t: 2,
                m: 6
            }, data = [];
            if (is(TString, "array") && is(TString[0], "array")) data = Snap.path.clone(TString);
            if (!data.length) Str(TString).replace(tCommand, function(a, b, c) {
                var params = [], name = b.toLowerCase();
                c.replace(pathValues, function(a, b) {
                    b && params.push(+b);
                });
                data.push([
                    b
                ].concat(params));
            });
            data.toString = Snap.path.toString;
            return data;
        };
        function svgTransform2string(tstr) {
            var res1 = [];
            tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(all, name, params) {
                params = params.split(/\s*,\s*|\s+/);
                if (name == "rotate" && params.length == 1) params.push(0, 0);
                if (name == "scale") {
                    if (params.length > 2) params = params.slice(0, 2);
                    else if (params.length == 2) params.push(0, 0);
                    if (params.length == 1) params.push(params[0], 0, 0);
                }
                if (name == "skewX") res1.push([
                    "m",
                    1,
                    0,
                    math1.tan(rad(params[0])),
                    1,
                    0,
                    0
                ]);
                else if (name == "skewY") res1.push([
                    "m",
                    1,
                    math1.tan(rad(params[0])),
                    0,
                    1,
                    0,
                    0
                ]);
                else res1.push([
                    name.charAt(0)
                ].concat(params));
                return all;
            });
            return res1;
        }
        Snap._.svgTransform2string = svgTransform2string;
        Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
        function transform2matrix(tstr, bbox) {
            var tdata = parseTransformString(tstr), m = new Snap.Matrix;
            if (tdata) for(var i = 0, ii = tdata.length; i < ii; i++){
                var t = tdata[i], tlen = t.length, command = Str(t[0]).toLowerCase(), absolute = t[0] != command, inver = absolute ? m.invert() : 0, x1, y1, x2, y2, bb;
                if (command == "t" && tlen == 2) m.translate(t[1], 0);
                else if (command == "t" && tlen == 3) {
                    if (absolute) {
                        x1 = inver.x(0, 0);
                        y1 = inver.y(0, 0);
                        x2 = inver.x(t[1], t[2]);
                        y2 = inver.y(t[1], t[2]);
                        m.translate(x2 - x1, y2 - y1);
                    } else m.translate(t[1], t[2]);
                } else if (command == "r") {
                    if (tlen == 2) {
                        bb = bb || bbox;
                        m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                    } else if (tlen == 4) {
                        if (absolute) {
                            x2 = inver.x(t[2], t[3]);
                            y2 = inver.y(t[2], t[3]);
                            m.rotate(t[1], x2, y2);
                        } else m.rotate(t[1], t[2], t[3]);
                    }
                } else if (command == "s") {
                    if (tlen == 2 || tlen == 3) {
                        bb = bb || bbox;
                        m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                    } else if (tlen == 4) {
                        if (absolute) {
                            x2 = inver.x(t[2], t[3]);
                            y2 = inver.y(t[2], t[3]);
                            m.scale(t[1], t[1], x2, y2);
                        } else m.scale(t[1], t[1], t[2], t[3]);
                    } else if (tlen == 5) {
                        if (absolute) {
                            x2 = inver.x(t[3], t[4]);
                            y2 = inver.y(t[3], t[4]);
                            m.scale(t[1], t[2], x2, y2);
                        } else m.scale(t[1], t[2], t[3], t[4]);
                    }
                } else if (command == "m" && tlen == 7) m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
            }
            return m;
        }
        Snap._.transform2matrix = transform2matrix;
        Snap._unit2px = unit2px;
        var contains = glob.doc.contains || glob.doc.compareDocumentPosition ? function(a, b) {
            var adown = a.nodeType == 9 ? a.documentElement : a, bup = b && b.parentNode;
            return a == bup || !!(bup && bup.nodeType == 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        } : function(a, b) {
            if (b) while(b){
                b = b.parentNode;
                if (b == a) return true;
            }
            return false;
        };
        function getSomeDefs(el) {
            var p = el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || el.node.parentNode && wrap(el.node.parentNode) || Snap.select("svg") || Snap(0, 0), pdefs = p.select("defs"), defs = pdefs == null ? false : pdefs.node;
            if (!defs) defs = make("defs", p.node).node;
            return defs;
        }
        function getSomeSVG(el) {
            return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
        }
        Snap._.getSomeDefs = getSomeDefs;
        Snap._.getSomeSVG = getSomeSVG;
        function unit2px(el, name, value) {
            var svg = getSomeSVG(el).node, out = {}, mgr = svg.querySelector(".svg---mgr");
            if (!mgr) {
                mgr = $("rect");
                $(mgr, {
                    x: -9000000000,
                    y: -9000000000,
                    width: 10,
                    height: 10,
                    "class": "svg---mgr",
                    fill: "none"
                });
                svg.appendChild(mgr);
            }
            function getW(val) {
                if (val == null) return E;
                if (val == +val) return val;
                $(mgr, {
                    width: val
                });
                try {
                    return mgr.getBBox().width;
                } catch (e) {
                    return 0;
                }
            }
            function getH(val) {
                if (val == null) return E;
                if (val == +val) return val;
                $(mgr, {
                    height: val
                });
                try {
                    return mgr.getBBox().height;
                } catch (e) {
                    return 0;
                }
            }
            function set(nam, f) {
                if (name == null) out[nam] = f(el.attr(nam) || 0);
                else if (nam == name) out = f(value == null ? el.attr(nam) || 0 : value);
            }
            switch(el.type){
                case "rect":
                    set("rx", getW);
                    set("ry", getH);
                case "image":
                    set("width", getW);
                    set("height", getH);
                case "text":
                    set("x", getW);
                    set("y", getH);
                    break;
                case "circle":
                    set("cx", getW);
                    set("cy", getH);
                    set("r", getW);
                    break;
                case "ellipse":
                    set("cx", getW);
                    set("cy", getH);
                    set("rx", getW);
                    set("ry", getH);
                    break;
                case "line":
                    set("x1", getW);
                    set("x2", getW);
                    set("y1", getH);
                    set("y2", getH);
                    break;
                case "marker":
                    set("refX", getW);
                    set("markerWidth", getW);
                    set("refY", getH);
                    set("markerHeight", getH);
                    break;
                case "radialGradient":
                    set("fx", getW);
                    set("fy", getH);
                    break;
                case "tspan":
                    set("dx", getW);
                    set("dy", getH);
                    break;
                default:
                    set(name, getW);
            }
            svg.removeChild(mgr);
            return out;
        }
        /*\
 * Snap.select
 [ method ]
 **
 * Wraps a DOM element specified by CSS selector as @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/ Snap.select = function(query) {
            query = Str(query).replace(/([^\\]):/g, "$1\\:");
            return wrap(glob.doc.querySelector(query));
        };
        /*\
 * Snap.selectAll
 [ method ]
 **
 * Wraps DOM elements specified by CSS selector as set or array of @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/ Snap.selectAll = function(query) {
            var nodelist = glob.doc.querySelectorAll(query), set = (Snap.set || Array)();
            for(var i = 0; i < nodelist.length; i++)set.push(wrap(nodelist[i]));
            return set;
        };
        function add2group(list) {
            if (!is(list, "array")) list = Array.prototype.slice.call(arguments, 0);
            var i = 0, j = 0, node = this.node;
            while(this[i])delete this[i++];
            for(i = 0; i < list.length; i++)if (list[i].type == "set") list[i].forEach(function(el) {
                node.appendChild(el.node);
            });
            else node.appendChild(list[i].node);
            var children = node.childNodes;
            for(i = 0; i < children.length; i++)this[j++] = wrap(children[i]);
            return this;
        }
        // Hub garbage collector every 10s
        setInterval(function() {
            for(var key in hub)if (hub[has](key)) {
                var el = hub[key], node = el.node;
                if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) delete hub[key];
            }
        }, 1e4);
        function Element(el) {
            if (el.snap in hub) return hub[el.snap];
            var svg;
            try {
                svg = el.ownerSVGElement;
            } catch (e) {}
            /*\
     * Element.node
     [ property (object) ]
     **
     * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
     > Usage
     | // draw a circle at coordinate 10,10 with radius of 10
     | var c = paper.circle(10, 10, 10);
     | c.node.onclick = function () {
     |     c.attr("fill", "red");
     | };
    \*/ this.node = el;
            if (svg) this.paper = new Paper(svg);
            /*\
     * Element.type
     [ property (string) ]
     **
     * SVG tag name of the given element.
    \*/ this.type = el.tagName || el.nodeName;
            var id = this.id = ID(this);
            this.anims = {};
            this._ = {
                transform: []
            };
            el.snap = id;
            hub[id] = this;
            if (this.type == "g") this.add = add2group;
            if (this.type in {
                g: 1,
                mask: 1,
                pattern: 1,
                symbol: 1
            }) {
                for(var method in Paper.prototype)if (Paper.prototype[has](method)) this[method] = Paper.prototype[method];
            }
        }
        /*\
     * Element.attr
     [ method ]
     **
     * Gets or sets given attributes of the element.
     **
     - params (object) contains key-value pairs of attributes you want to set
     * or
     - param (string) name of the attribute
     = (Element) the current element
     * or
     = (string) value of attribute
     > Usage
     | el.attr({
     |     fill: "#fc0",
     |     stroke: "#000",
     |     strokeWidth: 2, // CamelCase...
     |     "fill-opacity": 0.5, // or dash-separated names
     |     width: "*=2" // prefixed values
     | });
     | console.log(el.attr("fill")); // #fc0
     * Prefixed values in format `"+=10"` supported. All four operations
     * (`+`, `-`, `*` and `/`) could be used. Optionally you can use units for `+`
     * and `-`: `"+=2em"`.
    \*/ Element.prototype.attr = function(params, value) {
            var el = this, node = el.node;
            if (!params) {
                if (node.nodeType != 1) return {
                    text: node.nodeValue
                };
                var attr = node.attributes, out = {};
                for(var i = 0, ii = attr.length; i < ii; i++)out[attr[i].nodeName] = attr[i].nodeValue;
                return out;
            }
            if (is(params, "string")) {
                if (arguments.length > 1) {
                    var json = {};
                    json[params] = value;
                    params = json;
                } else return eve1("snap.util.getattr." + params, el).firstDefined();
            }
            for(var att in params)if (params[has](att)) eve1("snap.util.attr." + att, el, params[att]);
            return el;
        };
        /*\
 * Snap.parse
 [ method ]
 **
 * Parses SVG fragment and converts it into a @Fragment
 **
 - svg (string) SVG string
 = (Fragment) the @Fragment
\*/ Snap.parse = function(svg) {
            var f = glob.doc.createDocumentFragment(), full = true, div = glob.doc.createElement("div");
            svg = Str(svg);
            if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
                svg = "<svg>" + svg + "</svg>";
                full = false;
            }
            div.innerHTML = svg;
            svg = div.getElementsByTagName("svg")[0];
            if (svg) {
                if (full) f = svg;
                else while(svg.firstChild)f.appendChild(svg.firstChild);
            }
            return new Fragment(f);
        };
        function Fragment(frag) {
            this.node = frag;
        }
        /*\
 * Snap.fragment
 [ method ]
 **
 * Creates a DOM fragment from a given list of elements or strings
 **
 - varargs (…) SVG string
 = (Fragment) the @Fragment
\*/ Snap.fragment = function() {
            var args = Array.prototype.slice.call(arguments, 0), f = glob.doc.createDocumentFragment();
            for(var i = 0, ii = args.length; i < ii; i++){
                var item = args[i];
                if (item.node && item.node.nodeType) f.appendChild(item.node);
                if (item.nodeType) f.appendChild(item);
                if (typeof item == "string") f.appendChild(Snap.parse(item).node);
            }
            return new Fragment(f);
        };
        function make(name, parent) {
            var res1 = $(name);
            parent.appendChild(res1);
            var el = wrap(res1);
            return el;
        }
        function Paper(w, h) {
            var res1, desc, defs, proto = Paper.prototype;
            if (w && w.tagName && w.tagName.toLowerCase() == "svg") {
                if (w.snap in hub) return hub[w.snap];
                var doc = w.ownerDocument;
                res1 = new Element(w);
                desc = w.getElementsByTagName("desc")[0];
                defs = w.getElementsByTagName("defs")[0];
                if (!desc) {
                    desc = $("desc");
                    desc.appendChild(doc.createTextNode("Created with Snap"));
                    res1.node.appendChild(desc);
                }
                if (!defs) {
                    defs = $("defs");
                    res1.node.appendChild(defs);
                }
                res1.defs = defs;
                for(var key in proto)if (proto[has](key)) res1[key] = proto[key];
                res1.paper = res1.root = res1;
            } else {
                res1 = make("svg", glob.doc.body);
                $(res1.node, {
                    height: h,
                    version: 1.1,
                    width: w,
                    xmlns: xmlns
                });
            }
            return res1;
        }
        function wrap(dom) {
            if (!dom) return dom;
            if (dom instanceof Element || dom instanceof Fragment) return dom;
            if (dom.tagName && dom.tagName.toLowerCase() == "svg") return new Paper(dom);
            if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
            return new Element(dom);
        }
        Snap._.make = make;
        Snap._.wrap = wrap;
        /*\
 * Paper.el
 [ method ]
 **
 * Creates an element on paper with a given name and no attributes
 **
 - name (string) tag name
 - attr (object) attributes
 = (Element) the current element
 > Usage
 | var c = paper.circle(10, 10, 10); // is the same as...
 | var c = paper.el("circle").attr({
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
 | // and the same as
 | var c = paper.el("circle", {
 |     cx: 10,
 |     cy: 10,
 |     r: 10
 | });
\*/ Paper.prototype.el = function(name, attr) {
            var el = make(name, this.node);
            attr && el.attr(attr);
            return el;
        };
        /*\
 * Element.children
 [ method ]
 **
 * Returns array of all the children of the element.
 = (array) array of Elements
\*/ Element.prototype.children = function() {
            var out = [], ch = this.node.childNodes;
            for(var i = 0, ii = ch.length; i < ii; i++)out[i] = Snap(ch[i]);
            return out;
        };
        function jsonFiller(root, o) {
            for(var i = 0, ii = root.length; i < ii; i++){
                var item = {
                    type: root[i].type,
                    attr: root[i].attr()
                }, children = root[i].children();
                o.push(item);
                if (children.length) jsonFiller(children, item.childNodes = []);
            }
        }
        /*\
 * Element.toJSON
 [ method ]
 **
 * Returns object representation of the given element and all its children.
 = (object) in format
 o {
 o     type (string) this.type,
 o     attr (object) attributes map,
 o     childNodes (array) optional array of children in the same format
 o }
\*/ Element.prototype.toJSON = function() {
            var out = [];
            jsonFiller([
                this
            ], out);
            return out[0];
        };
        // default
        eve1.on("snap.util.getattr", function() {
            var att = eve1.nt();
            att = att.substring(att.lastIndexOf(".") + 1);
            var css = att.replace(/[A-Z]/g, function(letter) {
                return "-" + letter.toLowerCase();
            });
            if (cssAttr[has](css)) return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
            else return $(this.node, att);
        });
        var cssAttr = {
            "alignment-baseline": 0,
            "baseline-shift": 0,
            "clip": 0,
            "clip-path": 0,
            "clip-rule": 0,
            "color": 0,
            "color-interpolation": 0,
            "color-interpolation-filters": 0,
            "color-profile": 0,
            "color-rendering": 0,
            "cursor": 0,
            "direction": 0,
            "display": 0,
            "dominant-baseline": 0,
            "enable-background": 0,
            "fill": 0,
            "fill-opacity": 0,
            "fill-rule": 0,
            "filter": 0,
            "flood-color": 0,
            "flood-opacity": 0,
            "font": 0,
            "font-family": 0,
            "font-size": 0,
            "font-size-adjust": 0,
            "font-stretch": 0,
            "font-style": 0,
            "font-variant": 0,
            "font-weight": 0,
            "glyph-orientation-horizontal": 0,
            "glyph-orientation-vertical": 0,
            "image-rendering": 0,
            "kerning": 0,
            "letter-spacing": 0,
            "lighting-color": 0,
            "marker": 0,
            "marker-end": 0,
            "marker-mid": 0,
            "marker-start": 0,
            "mask": 0,
            "opacity": 0,
            "overflow": 0,
            "pointer-events": 0,
            "shape-rendering": 0,
            "stop-color": 0,
            "stop-opacity": 0,
            "stroke": 0,
            "stroke-dasharray": 0,
            "stroke-dashoffset": 0,
            "stroke-linecap": 0,
            "stroke-linejoin": 0,
            "stroke-miterlimit": 0,
            "stroke-opacity": 0,
            "stroke-width": 0,
            "text-anchor": 0,
            "text-decoration": 0,
            "text-rendering": 0,
            "unicode-bidi": 0,
            "visibility": 0,
            "word-spacing": 0,
            "writing-mode": 0
        };
        eve1.on("snap.util.attr", function(value) {
            var att = eve1.nt(), attr = {};
            att = att.substring(att.lastIndexOf(".") + 1);
            attr[att] = value;
            var style = att.replace(/-(\w)/gi, function(all, letter) {
                return letter.toUpperCase();
            }), css = att.replace(/[A-Z]/g, function(letter) {
                return "-" + letter.toLowerCase();
            });
            if (cssAttr[has](css)) this.node.style[style] = value == null ? E : value;
            else $(this.node, attr);
        });
        Paper.prototype;
        // simple ajax
        /*\
 * Snap.ajax
 [ method ]
 **
 * Simple implementation of Ajax
 **
 - url (string) URL
 - postData (object|string) data for post request
 - callback (function) callback
 - scope (object) #optional scope of callback
 * or
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
 = (XMLHttpRequest) the XMLHttpRequest object, just in case
\*/ Snap.ajax = function(url, postData, callback, scope) {
            var req = new XMLHttpRequest, id = ID();
            if (req) {
                if (is(postData, "function")) {
                    scope = callback;
                    callback = postData;
                    postData = null;
                } else if (is(postData, "object")) {
                    var pd = [];
                    for(var key in postData)if (postData.hasOwnProperty(key)) pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
                    postData = pd.join("&");
                }
                req.open(postData ? "POST" : "GET", url, true);
                if (postData) {
                    req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                }
                if (callback) {
                    eve1.once("snap.ajax." + id + ".0", callback);
                    eve1.once("snap.ajax." + id + ".200", callback);
                    eve1.once("snap.ajax." + id + ".304", callback);
                }
                req.onreadystatechange = function() {
                    if (req.readyState != 4) return;
                    eve1("snap.ajax." + id + "." + req.status, scope, req);
                };
                if (req.readyState == 4) return req;
                req.send(postData);
                return req;
            }
        };
        /*\
 * Snap.load
 [ method ]
 **
 * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
 **
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
\*/ Snap.load = function(url, callback, scope) {
            Snap.ajax(url, function(req) {
                var f = Snap.parse(req.responseText);
                scope ? callback.call(scope, f) : callback(f);
            });
        };
        var getOffset = function(elem) {
            var box = elem.getBoundingClientRect(), doc = elem.ownerDocument, body = doc.body, docElem = doc.documentElement, clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, top = box.top + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop) - clientTop, left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
            return {
                y: top,
                x: left
            };
        };
        /*\
 * Snap.getElementByPoint
 [ method ]
 **
 * Returns you topmost element under given point.
 **
 = (object) Snap element object
 - x (number) x coordinate from the top left corner of the window
 - y (number) y coordinate from the top left corner of the window
 > Usage
 | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
\*/ Snap.getElementByPoint = function(x, y) {
            var paper = this, svg = paper.canvas, target = glob.doc.elementFromPoint(x, y);
            if (glob.win.opera && target.tagName == "svg") {
                var so = getOffset(target), sr = target.createSVGRect();
                sr.x = x - so.x;
                sr.y = y - so.y;
                sr.width = sr.height = 1;
                var hits = target.getIntersectionList(sr, null);
                if (hits.length) target = hits[hits.length - 1];
            }
            if (!target) return null;
            return wrap(target);
        };
        /*\
 * Snap.plugin
 [ method ]
 **
 * Let you write plugins. You pass in a function with five arguments, like this:
 | Snap.plugin(function (Snap, Element, Paper, global, Fragment) {
 |     Snap.newmethod = function () {};
 |     Element.prototype.newmethod = function () {};
 |     Paper.prototype.newmethod = function () {};
 | });
 * Inside the function you have access to all main objects (and their
 * prototypes). This allow you to extend anything you want.
 **
 - f (function) your plugin body
\*/ Snap.plugin = function(f) {
            f(Snap, Element, Paper, glob, Fragment);
        };
        glob.win.Snap = Snap;
        return Snap;
    }(window1 || this);
    // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var elproto = Element.prototype, is = Snap.is, Str = String, unit2px = Snap._unit2px, $ = Snap._.$, make = Snap._.make, getSomeDefs = Snap._.getSomeDefs, has = "hasOwnProperty", wrap = Snap._.wrap;
        /*\
     * Element.getBBox
     [ method ]
     **
     * Returns the bounding box descriptor for the given element
     **
     = (object) bounding box descriptor:
     o {
     o     cx: (number) x of the center,
     o     cy: (number) x of the center,
     o     h: (number) height,
     o     height: (number) height,
     o     path: (string) path command for the box,
     o     r0: (number) radius of a circle that fully encloses the box,
     o     r1: (number) radius of the smallest circle that can be enclosed,
     o     r2: (number) radius of the largest circle that can be enclosed,
     o     vb: (string) box as a viewbox command,
     o     w: (number) width,
     o     width: (number) width,
     o     x2: (number) x of the right side,
     o     x: (number) x of the left side,
     o     y2: (number) y of the bottom edge,
     o     y: (number) y of the top edge
     o }
    \*/ elproto.getBBox = function(isWithoutTransform) {
            if (this.type == "tspan") return Snap._.box(this.node.getClientRects().item(0));
            if (!Snap.Matrix || !Snap.path) return this.node.getBBox();
            var el = this, m = new Snap.Matrix;
            if (el.removed) return Snap._.box();
            while(el.type == "use"){
                if (!isWithoutTransform) m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
                if (el.original) el = el.original;
                else {
                    var href = el.attr("xlink:href");
                    el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
                }
            }
            var _ = el._, pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;
            try {
                if (isWithoutTransform) {
                    _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
                    return Snap._.box(_.bboxwt);
                } else {
                    el.realPath = pathfinder(el);
                    el.matrix = el.transform().localMatrix;
                    _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
                    return Snap._.box(_.bbox);
                }
            } catch (e) {
                // Firefox doesn’t give you bbox of hidden element
                return Snap._.box();
            }
        };
        var propString = function() {
            return this.string;
        };
        function extractTransform(el, tstr) {
            if (tstr == null) {
                var doReturn = true;
                if (el.type == "linearGradient" || el.type == "radialGradient") tstr = el.node.getAttribute("gradientTransform");
                else if (el.type == "pattern") tstr = el.node.getAttribute("patternTransform");
                else tstr = el.node.getAttribute("transform");
                if (!tstr) return new Snap.Matrix;
                tstr = Snap._.svgTransform2string(tstr);
            } else {
                if (!Snap._.rgTransform.test(tstr)) tstr = Snap._.svgTransform2string(tstr);
                else tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || "");
                if (is(tstr, "array")) tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
                el._.transform = tstr;
            }
            var m = Snap._.transform2matrix(tstr, el.getBBox(1));
            if (doReturn) return m;
            else el.matrix = m;
        }
        /*\
     * Element.transform
     [ method ]
     **
     * Gets or sets transformation of the element
     **
     - tstr (string) transform string in Snap or SVG format
     = (Element) the current element
     * or
     = (object) transformation descriptor:
     o {
     o     string (string) transform string,
     o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
     o     localMatrix (Matrix) matrix of transformations applied only to the element,
     o     diffMatrix (Matrix) matrix of difference between global and local transformations,
     o     global (string) global transformation as string,
     o     local (string) local transformation as string,
     o     toString (function) returns `string` property
     o }
    \*/ elproto.transform = function(tstr) {
            var _ = this._;
            if (tstr == null) {
                var papa = this, global = new Snap.Matrix(this.node.getCTM()), local = extractTransform(this), ms = [
                    local
                ], m = new Snap.Matrix, i, localString = local.toTransformString(), string1 = Str(local) == Str(this.matrix) ? Str(_.transform) : localString;
                while(papa.type != "svg" && (papa = papa.parent()))ms.push(extractTransform(papa));
                i = ms.length;
                while(i--)m.add(ms[i]);
                return {
                    string: string1,
                    globalMatrix: global,
                    totalMatrix: m,
                    localMatrix: local,
                    diffMatrix: global.clone().add(local.invert()),
                    global: global.toTransformString(),
                    total: m.toTransformString(),
                    local: localString,
                    toString: propString
                };
            }
            if (tstr instanceof Snap.Matrix) {
                this.matrix = tstr;
                this._.transform = tstr.toTransformString();
            } else extractTransform(this, tstr);
            if (this.node) {
                if (this.type == "linearGradient" || this.type == "radialGradient") $(this.node, {
                    gradientTransform: this.matrix
                });
                else if (this.type == "pattern") $(this.node, {
                    patternTransform: this.matrix
                });
                else $(this.node, {
                    transform: this.matrix
                });
            }
            return this;
        };
        /*\
     * Element.parent
     [ method ]
     **
     * Returns the element's parent
     **
     = (Element) the parent element
    \*/ elproto.parent = function() {
            return wrap(this.node.parentNode);
        };
        /*\
     * Element.append
     [ method ]
     **
     * Appends the given element to current one
     **
     - el (Element|Set) element to append
     = (Element) the parent element
    \*/ /*\
     * Element.add
     [ method ]
     **
     * See @Element.append
    \*/ elproto.append = elproto.add = function(el) {
            if (el) {
                if (el.type == "set") {
                    var it = this;
                    el.forEach(function(el) {
                        it.add(el);
                    });
                    return this;
                }
                el = wrap(el);
                this.node.appendChild(el.node);
                el.paper = this.paper;
            }
            return this;
        };
        /*\
     * Element.appendTo
     [ method ]
     **
     * Appends the current element to the given one
     **
     - el (Element) parent element to append to
     = (Element) the child element
    \*/ elproto.appendTo = function(el) {
            if (el) {
                el = wrap(el);
                el.append(this);
            }
            return this;
        };
        /*\
     * Element.prepend
     [ method ]
     **
     * Prepends the given element to the current one
     **
     - el (Element) element to prepend
     = (Element) the parent element
    \*/ elproto.prepend = function(el) {
            if (el) {
                if (el.type == "set") {
                    var it = this, first;
                    el.forEach(function(el) {
                        if (first) first.after(el);
                        else it.prepend(el);
                        first = el;
                    });
                    return this;
                }
                el = wrap(el);
                var parent = el.parent();
                this.node.insertBefore(el.node, this.node.firstChild);
                this.add && this.add();
                el.paper = this.paper;
                this.parent() && this.parent().add();
                parent && parent.add();
            }
            return this;
        };
        /*\
     * Element.prependTo
     [ method ]
     **
     * Prepends the current element to the given one
     **
     - el (Element) parent element to prepend to
     = (Element) the child element
    \*/ elproto.prependTo = function(el) {
            el = wrap(el);
            el.prepend(this);
            return this;
        };
        /*\
     * Element.before
     [ method ]
     **
     * Inserts given element before the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/ elproto.before = function(el) {
            if (el.type == "set") {
                var it = this;
                el.forEach(function(el) {
                    var parent = el.parent();
                    it.node.parentNode.insertBefore(el.node, it.node);
                    parent && parent.add();
                });
                this.parent().add();
                return this;
            }
            el = wrap(el);
            var parent = el.parent();
            this.node.parentNode.insertBefore(el.node, this.node);
            this.parent() && this.parent().add();
            parent && parent.add();
            el.paper = this.paper;
            return this;
        };
        /*\
     * Element.after
     [ method ]
     **
     * Inserts given element after the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/ elproto.after = function(el) {
            el = wrap(el);
            var parent = el.parent();
            if (this.node.nextSibling) this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
            else this.node.parentNode.appendChild(el.node);
            this.parent() && this.parent().add();
            parent && parent.add();
            el.paper = this.paper;
            return this;
        };
        /*\
     * Element.insertBefore
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/ elproto.insertBefore = function(el) {
            el = wrap(el);
            var parent = this.parent();
            el.node.parentNode.insertBefore(this.node, el.node);
            this.paper = el.paper;
            parent && parent.add();
            el.parent() && el.parent().add();
            return this;
        };
        /*\
     * Element.insertAfter
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/ elproto.insertAfter = function(el) {
            el = wrap(el);
            var parent = this.parent();
            el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
            this.paper = el.paper;
            parent && parent.add();
            el.parent() && el.parent().add();
            return this;
        };
        /*\
     * Element.remove
     [ method ]
     **
     * Removes element from the DOM
     = (Element) the detached element
    \*/ elproto.remove = function() {
            var parent = this.parent();
            this.node.parentNode && this.node.parentNode.removeChild(this.node);
            delete this.paper;
            this.removed = true;
            parent && parent.add();
            return this;
        };
        /*\
     * Element.select
     [ method ]
     **
     * Gathers the nested @Element matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Element) result of query selection
    \*/ elproto.select = function(query) {
            return wrap(this.node.querySelector(query));
        };
        /*\
     * Element.selectAll
     [ method ]
     **
     * Gathers nested @Element objects matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Set|array) result of query selection
    \*/ elproto.selectAll = function(query) {
            var nodelist = this.node.querySelectorAll(query), set = (Snap.set || Array)();
            for(var i = 0; i < nodelist.length; i++)set.push(wrap(nodelist[i]));
            return set;
        };
        /*\
     * Element.asPX
     [ method ]
     **
     * Returns given attribute of the element as a `px` value (not %, em, etc.)
     **
     - attr (string) attribute name
     - value (string) #optional attribute value
     = (Element) result of query selection
    \*/ elproto.asPX = function(attr, value) {
            if (value == null) value = this.attr(attr);
            return +unit2px(this, attr, value);
        };
        // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.
        /*\
     * Element.use
     [ method ]
     **
     * Creates a `<use>` element linked to the current element
     **
     = (Element) the `<use>` element
    \*/ elproto.use = function() {
            var use, id = this.node.id;
            if (!id) {
                id = this.id;
                $(this.node, {
                    id: id
                });
            }
            if (this.type == "linearGradient" || this.type == "radialGradient" || this.type == "pattern") use = make(this.type, this.node.parentNode);
            else use = make("use", this.node.parentNode);
            $(use.node, {
                "xlink:href": "#" + id
            });
            use.original = this;
            return use;
        };
        function fixids(el) {
            var els = el.selectAll("*"), it, url = /^\s*url\(("|'|)(.*)\1\)\s*$/, ids = [], uses = {};
            function urltest(it, name) {
                var val = $(it.node, name);
                val = val && val.match(url);
                val = val && val[2];
                if (val && val.charAt() == "#") val = val.substring(1);
                else return;
                if (val) uses[val] = (uses[val] || []).concat(function(id) {
                    var attr = {};
                    attr[name] = Snap.url(id);
                    $(it.node, attr);
                });
            }
            function linktest(it) {
                var val = $(it.node, "xlink:href");
                if (val && val.charAt() == "#") val = val.substring(1);
                else return;
                if (val) uses[val] = (uses[val] || []).concat(function(id) {
                    it.attr("xlink:href", "#" + id);
                });
            }
            for(var i = 0, ii = els.length; i < ii; i++){
                it = els[i];
                urltest(it, "fill");
                urltest(it, "stroke");
                urltest(it, "filter");
                urltest(it, "mask");
                urltest(it, "clip-path");
                linktest(it);
                var oldid = $(it.node, "id");
                if (oldid) {
                    $(it.node, {
                        id: it.id
                    });
                    ids.push({
                        old: oldid,
                        id: it.id
                    });
                }
            }
            for(i = 0, ii = ids.length; i < ii; i++){
                var fs = uses[ids[i].old];
                if (fs) for(var j = 0, jj = fs.length; j < jj; j++)fs[j](ids[i].id);
            }
        }
        /*\
     * Element.clone
     [ method ]
     **
     * Creates a clone of the element and inserts it after the element
     **
     = (Element) the clone
    \*/ elproto.clone = function() {
            var clone = wrap(this.node.cloneNode(true));
            if ($(clone.node, "id")) $(clone.node, {
                id: clone.id
            });
            fixids(clone);
            clone.insertAfter(this);
            return clone;
        };
        /*\
     * Element.toDefs
     [ method ]
     **
     * Moves element to the shared `<defs>` area
     **
     = (Element) the element
    \*/ elproto.toDefs = function() {
            var defs = getSomeDefs(this);
            defs.appendChild(this.node);
            return this;
        };
        /*\
     * Element.toPattern
     [ method ]
     **
     * Creates a `<pattern>` element from the current element
     **
     * To create a pattern you have to specify the pattern rect:
     - x (string|number)
     - y (string|number)
     - width (string|number)
     - height (string|number)
     = (Element) the `<pattern>` element
     * You can use pattern later on as an argument for `fill` attribute:
     | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
     |         fill: "none",
     |         stroke: "#bada55",
     |         strokeWidth: 5
     |     }).pattern(0, 0, 10, 10),
     |     c = paper.circle(200, 200, 100);
     | c.attr({
     |     fill: p
     | });
    \*/ elproto.pattern = elproto.toPattern = function(x, y, width, height) {
            var p = make("pattern", getSomeDefs(this));
            if (x == null) x = this.getBBox();
            if (is(x, "object") && "x" in x) {
                y = x.y;
                width = x.width;
                height = x.height;
                x = x.x;
            }
            $(p.node, {
                x: x,
                y: y,
                width: width,
                height: height,
                patternUnits: "userSpaceOnUse",
                id: p.id,
                viewBox: [
                    x,
                    y,
                    width,
                    height
                ].join(" ")
            });
            p.node.appendChild(this.node);
            return p;
        };
        // SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
        // SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?
        /*\
     * Element.marker
     [ method ]
     **
     * Creates a `<marker>` element from the current element
     **
     * To create a marker you have to specify the bounding rect and reference point:
     - x (number)
     - y (number)
     - width (number)
     - height (number)
     - refX (number)
     - refY (number)
     = (Element) the `<marker>` element
     * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
    \*/ // TODO add usage for markers
        elproto.marker = function(x, y, width, height, refX, refY) {
            var p = make("marker", getSomeDefs(this));
            if (x == null) x = this.getBBox();
            if (is(x, "object") && "x" in x) {
                y = x.y;
                width = x.width;
                height = x.height;
                refX = x.refX || x.cx;
                refY = x.refY || x.cy;
                x = x.x;
            }
            $(p.node, {
                viewBox: [
                    x,
                    y,
                    width,
                    height
                ].join(" "),
                markerWidth: width,
                markerHeight: height,
                orient: "auto",
                refX: refX || 0,
                refY: refY || 0,
                id: p.id
            });
            p.node.appendChild(this.node);
            return p;
        };
        var eldata = {};
        /*\
     * Element.data
     [ method ]
     **
     * Adds or retrieves given value associated with given key. (Don’t confuse
     * with `data-` attributes)
     *
     * See also @Element.removeData
     - key (string) key to store data
     - value (any) #optional value to store
     = (object) @Element
     * or, if value is not specified:
     = (any) value
     > Usage
     | for (var i = 0, i < 5, i++) {
     |     paper.circle(10 + 15 * i, 10, 10)
     |          .attr({fill: "#000"})
     |          .data("i", i)
     |          .click(function () {
     |             alert(this.data("i"));
     |          });
     | }
    \*/ elproto.data = function(key, value) {
            var data = eldata[this.id] = eldata[this.id] || {};
            if (arguments.length == 0) {
                eve1("snap.data.get." + this.id, this, data, null);
                return data;
            }
            if (arguments.length == 1) {
                if (Snap.is(key, "object")) {
                    for(var i in key)if (key[has](i)) this.data(i, key[i]);
                    return this;
                }
                eve1("snap.data.get." + this.id, this, data[key], key);
                return data[key];
            }
            data[key] = value;
            eve1("snap.data.set." + this.id, this, value, key);
            return this;
        };
        /*\
     * Element.removeData
     [ method ]
     **
     * Removes value associated with an element by given key.
     * If key is not provided, removes all the data of the element.
     - key (string) #optional key
     = (object) @Element
    \*/ elproto.removeData = function(key) {
            if (key == null) eldata[this.id] = {};
            else eldata[this.id] && delete eldata[this.id][key];
            return this;
        };
        /*\
     * Element.outerSVG
     [ method ]
     **
     * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
     *
     * See also @Element.innerSVG
     = (string) SVG code for the element
    \*/ /*\
     * Element.toString
     [ method ]
     **
     * See @Element.outerSVG
    \*/ elproto.outerSVG = elproto.toString = toString(1);
        /*\
     * Element.innerSVG
     [ method ]
     **
     * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
     = (string) SVG code for the element
    \*/ elproto.innerSVG = toString();
        function toString(type) {
            return function() {
                var res1 = type ? "<" + this.type : "", attr = this.node.attributes, chld = this.node.childNodes;
                if (type) for(var i = 0, ii = attr.length; i < ii; i++)res1 += " " + attr[i].name + '="' + attr[i].value.replace(/"/g, '\\"') + '"';
                if (chld.length) {
                    type && (res1 += ">");
                    for(i = 0, ii = chld.length; i < ii; i++){
                        if (chld[i].nodeType == 3) res1 += chld[i].nodeValue;
                        else if (chld[i].nodeType == 1) res1 += wrap(chld[i]).toString();
                    }
                    type && (res1 += "</" + this.type + ">");
                } else type && (res1 += "/>");
                return res1;
            };
        }
        elproto.toDataURL = function() {
            if (window1 && window1.btoa) {
                var bb = this.getBBox(), svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                    x: +bb.x.toFixed(3),
                    y: +bb.y.toFixed(3),
                    width: +bb.width.toFixed(3),
                    height: +bb.height.toFixed(3),
                    contents: this.outerSVG()
                });
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
            }
        };
        /*\
     * Fragment.select
     [ method ]
     **
     * See @Element.select
    \*/ Fragment.prototype.select = elproto.select;
        /*\
     * Fragment.selectAll
     [ method ]
     **
     * See @Element.selectAll
    \*/ Fragment.prototype.selectAll = elproto.selectAll;
    });
    // Copyright (c) 2016 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var elproto = Element.prototype, is = Snap.is, Str = String, has = "hasOwnProperty";
        function slice(from, to, f) {
            return function(arr) {
                var res1 = arr.slice(from, to);
                if (res1.length == 1) res1 = res1[0];
                return f ? f(res1) : res1;
            };
        }
        var Animation = function(attr, ms, easing, callback) {
            if (typeof easing == "function" && !easing.length) {
                callback = easing;
                easing = mina.linear;
            }
            this.attr = attr;
            this.dur = ms;
            easing && (this.easing = easing);
            callback && (this.callback = callback);
        };
        Snap._.Animation = Animation;
        /*\
     * Snap.animation
     [ method ]
     **
     * Creates an animation object
     **
     - attr (object) attributes of final destination
     - duration (number) duration of the animation, in milliseconds
     - easing (function) #optional one of easing functions of @mina or custom one
     - callback (function) #optional callback function that fires when animation ends
     = (object) animation object
    \*/ Snap.animation = function(attr, ms, easing, callback) {
            return new Animation(attr, ms, easing, callback);
        };
        /*\
     * Element.inAnim
     [ method ]
     **
     * Returns a set of animations that may be able to manipulate the current element
     **
     = (object) in format:
     o {
     o     anim (object) animation object,
     o     mina (object) @mina object,
     o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
    \*/ elproto.inAnim = function() {
            var el = this, res1 = [];
            for(var id in el.anims)if (el.anims[has](id)) (function(a) {
                res1.push({
                    anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
                    mina: a,
                    curStatus: a.status(),
                    status: function(val) {
                        return a.status(val);
                    },
                    stop: function() {
                        a.stop();
                    }
                });
            })(el.anims[id]);
            return res1;
        };
        /*\
     * Snap.animate
     [ method ]
     **
     * Runs generic animation of one number into another with a caring function
     **
     - from (number|array) number or array of numbers
     - to (number|array) number or array of numbers
     - setter (function) caring function that accepts one number argument
     - duration (number) duration, in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function to execute when animation ends
     = (object) animation object in @mina format
     o {
     o     id (string) animation id, consider it read-only,
     o     duration (function) gets or sets the duration of the animation,
     o     easing (function) easing,
     o     speed (function) gets or sets the speed of the animation,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
     | var rect = Snap().rect(0, 0, 10, 10);
     | Snap.animate(0, 10, function (val) {
     |     rect.attr({
     |         x: val
     |     });
     | }, 1000);
     | // in given context is equivalent to
     | rect.animate({x: 10}, 1000);
    \*/ Snap.animate = function(from, to, setter, ms, easing, callback) {
            if (typeof easing == "function" && !easing.length) {
                callback = easing;
                easing = mina.linear;
            }
            var now = mina.time(), anim = mina(from, to, now, now + ms, mina.time, setter, easing);
            callback && eve1.once("mina.finish." + anim.id, callback);
            return anim;
        };
        /*\
     * Element.stop
     [ method ]
     **
     * Stops all the animations for the current element
     **
     = (Element) the current element
    \*/ elproto.stop = function() {
            var anims = this.inAnim();
            for(var i = 0, ii = anims.length; i < ii; i++)anims[i].stop();
            return this;
        };
        /*\
     * Element.animate
     [ method ]
     **
     * Animates the given attributes of the element
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     = (Element) the current element
    \*/ elproto.animate = function(attrs, ms, easing, callback) {
            if (typeof easing == "function" && !easing.length) {
                callback = easing;
                easing = mina.linear;
            }
            if (attrs instanceof Animation) {
                callback = attrs.callback;
                easing = attrs.easing;
                ms = attrs.dur;
                attrs = attrs.attr;
            }
            var fkeys = [], tkeys = [], keys = {}, from, to, f, eq, el = this;
            for(var key in attrs)if (attrs[has](key)) {
                if (el.equal) {
                    eq = el.equal(key, Str(attrs[key]));
                    from = eq.from;
                    to = eq.to;
                    f = eq.f;
                } else {
                    from = +el.attr(key);
                    to = +attrs[key];
                }
                var len = is(from, "array") ? from.length : 1;
                keys[key] = slice(fkeys.length, fkeys.length + len, f);
                fkeys = fkeys.concat(from);
                tkeys = tkeys.concat(to);
            }
            var now = mina.time(), anim = mina(fkeys, tkeys, now, now + ms, mina.time, function(val) {
                var attr = {};
                for(var key in keys)if (keys[has](key)) attr[key] = keys[key](val);
                el.attr(attr);
            }, easing);
            el.anims[anim.id] = anim;
            anim._attrs = attrs;
            anim._callback = callback;
            eve1("snap.animcreated." + el.id, anim);
            eve1.once("mina.finish." + anim.id, function() {
                eve1.off("mina.*." + anim.id);
                delete el.anims[anim.id];
                callback && callback.call(el);
            });
            eve1.once("mina.stop." + anim.id, function() {
                eve1.off("mina.*." + anim.id);
                delete el.anims[anim.id];
            });
            return el;
        };
    });
    // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var objectToString = Object.prototype.toString, Str = String, math1 = Math, E = "";
        function Matrix(a, b, c, d, e, f) {
            if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
                this.a = a.a;
                this.b = a.b;
                this.c = a.c;
                this.d = a.d;
                this.e = a.e;
                this.f = a.f;
                return;
            }
            if (a != null) {
                this.a = +a;
                this.b = +b;
                this.c = +c;
                this.d = +d;
                this.e = +e;
                this.f = +f;
            } else {
                this.a = 1;
                this.b = 0;
                this.c = 0;
                this.d = 1;
                this.e = 0;
                this.f = 0;
            }
        }
        (function(matrixproto) {
            /*\
         * Matrix.add
         [ method ]
         **
         * Adds the given matrix to existing one
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/ matrixproto.add = function(a, b, c, d, e, f) {
                if (a && a instanceof Matrix) return this.add(a.a, a.b, a.c, a.d, a.e, a.f);
                var aNew = a * this.a + b * this.c, bNew = a * this.b + b * this.d;
                this.e += e * this.a + f * this.c;
                this.f += e * this.b + f * this.d;
                this.c = c * this.a + d * this.c;
                this.d = c * this.b + d * this.d;
                this.a = aNew;
                this.b = bNew;
                return this;
            };
            /*\
         * Matrix.multLeft
         [ method ]
         **
         * Multiplies a passed affine transform to the left: M * this.
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/ Matrix.prototype.multLeft = function(a, b, c, d, e, f) {
                if (a && a instanceof Matrix) return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f);
                var aNew = a * this.a + c * this.b, cNew = a * this.c + c * this.d, eNew = a * this.e + c * this.f + e;
                this.b = b * this.a + d * this.b;
                this.d = b * this.c + d * this.d;
                this.f = b * this.e + d * this.f + f;
                this.a = aNew;
                this.c = cNew;
                this.e = eNew;
                return this;
            };
            /*\
         * Matrix.invert
         [ method ]
         **
         * Returns an inverted version of the matrix
         = (object) @Matrix
        \*/ matrixproto.invert = function() {
                var me = this, x = me.a * me.d - me.b * me.c;
                return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
            };
            /*\
         * Matrix.clone
         [ method ]
         **
         * Returns a copy of the matrix
         = (object) @Matrix
        \*/ matrixproto.clone = function() {
                return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
            };
            /*\
         * Matrix.translate
         [ method ]
         **
         * Translate the matrix
         - x (number) horizontal offset distance
         - y (number) vertical offset distance
        \*/ matrixproto.translate = function(x, y) {
                this.e += x * this.a + y * this.c;
                this.f += x * this.b + y * this.d;
                return this;
            };
            /*\
         * Matrix.scale
         [ method ]
         **
         * Scales the matrix
         - x (number) amount to be scaled, with `1` resulting in no change
         - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
         - cx (number) #optional horizontal origin point from which to scale
         - cy (number) #optional vertical origin point from which to scale
         * Default cx, cy is the middle point of the element.
        \*/ matrixproto.scale = function(x, y, cx, cy) {
                y == null && (y = x);
                (cx || cy) && this.translate(cx, cy);
                this.a *= x;
                this.b *= x;
                this.c *= y;
                this.d *= y;
                (cx || cy) && this.translate(-cx, -cy);
                return this;
            };
            /*\
         * Matrix.rotate
         [ method ]
         **
         * Rotates the matrix
         - a (number) angle of rotation, in degrees
         - x (number) horizontal origin point from which to rotate
         - y (number) vertical origin point from which to rotate
        \*/ matrixproto.rotate = function(a, x, y) {
                a = Snap.rad(a);
                x = x || 0;
                y = y || 0;
                var cos = +math1.cos(a).toFixed(9), sin = +math1.sin(a).toFixed(9);
                this.add(cos, sin, -sin, cos, x, y);
                return this.add(1, 0, 0, 1, -x, -y);
            };
            /*\
         * Matrix.skewX
         [ method ]
         **
         * Skews the matrix along the x-axis
         - x (number) Angle to skew along the x-axis (in degrees).
        \*/ matrixproto.skewX = function(x) {
                return this.skew(x, 0);
            };
            /*\
         * Matrix.skewY
         [ method ]
         **
         * Skews the matrix along the y-axis
         - y (number) Angle to skew along the y-axis (in degrees).
        \*/ matrixproto.skewY = function(y) {
                return this.skew(0, y);
            };
            /*\
         * Matrix.skew
         [ method ]
         **
         * Skews the matrix
         - y (number) Angle to skew along the y-axis (in degrees).
         - x (number) Angle to skew along the x-axis (in degrees).
        \*/ matrixproto.skew = function(x, y) {
                x = x || 0;
                y = y || 0;
                x = Snap.rad(x);
                y = Snap.rad(y);
                var c = math1.tan(x).toFixed(9);
                var b = math1.tan(y).toFixed(9);
                return this.add(1, b, c, 1, 0, 0);
            };
            /*\
         * Matrix.x
         [ method ]
         **
         * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
         - x (number)
         - y (number)
         = (number) x
        \*/ matrixproto.x = function(x, y) {
                return x * this.a + y * this.c + this.e;
            };
            /*\
         * Matrix.y
         [ method ]
         **
         * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
         - x (number)
         - y (number)
         = (number) y
        \*/ matrixproto.y = function(x, y) {
                return x * this.b + y * this.d + this.f;
            };
            matrixproto.get = function(i) {
                return +this[Str.fromCharCode(97 + i)].toFixed(4);
            };
            matrixproto.toString = function() {
                return "matrix(" + [
                    this.get(0),
                    this.get(1),
                    this.get(2),
                    this.get(3),
                    this.get(4),
                    this.get(5)
                ].join() + ")";
            };
            matrixproto.offset = function() {
                return [
                    this.e.toFixed(4),
                    this.f.toFixed(4)
                ];
            };
            function norm(a) {
                return a[0] * a[0] + a[1] * a[1];
            }
            function normalize(a) {
                var mag = math1.sqrt(norm(a));
                a[0] && (a[0] /= mag);
                a[1] && (a[1] /= mag);
            }
            /*\
         * Matrix.determinant
         [ method ]
         **
         * Finds determinant of the given matrix.
         = (number) determinant
        \*/ matrixproto.determinant = function() {
                return this.a * this.d - this.b * this.c;
            };
            /*\
         * Matrix.split
         [ method ]
         **
         * Splits matrix into primitive transformations
         = (object) in format:
         o dx (number) translation by x
         o dy (number) translation by y
         o scalex (number) scale by x
         o scaley (number) scale by y
         o shear (number) shear
         o rotate (number) rotation in deg
         o isSimple (boolean) could it be represented via simple transformations
        \*/ matrixproto.split = function() {
                var out = {};
                // translation
                out.dx = this.e;
                out.dy = this.f;
                // scale and shear
                var row = [
                    [
                        this.a,
                        this.b
                    ],
                    [
                        this.c,
                        this.d
                    ]
                ];
                out.scalex = math1.sqrt(norm(row[0]));
                normalize(row[0]);
                out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
                row[1] = [
                    row[1][0] - row[0][0] * out.shear,
                    row[1][1] - row[0][1] * out.shear
                ];
                out.scaley = math1.sqrt(norm(row[1]));
                normalize(row[1]);
                out.shear /= out.scaley;
                if (this.determinant() < 0) out.scalex = -out.scalex;
                // rotation
                var sin = row[0][1], cos = row[1][1];
                if (cos < 0) {
                    out.rotate = Snap.deg(math1.acos(cos));
                    if (sin < 0) out.rotate = 360 - out.rotate;
                } else out.rotate = Snap.deg(math1.asin(sin));
                out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
                out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
                out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
                return out;
            };
            /*\
         * Matrix.toTransformString
         [ method ]
         **
         * Returns transform string that represents given matrix
         = (string) transform string
        \*/ matrixproto.toTransformString = function(shorter) {
                var s = shorter || this.split();
                if (!+s.shear.toFixed(9)) {
                    s.scalex = +s.scalex.toFixed(4);
                    s.scaley = +s.scaley.toFixed(4);
                    s.rotate = +s.rotate.toFixed(4);
                    return (s.dx || s.dy ? "t" + [
                        +s.dx.toFixed(4),
                        +s.dy.toFixed(4)
                    ] : E) + (s.rotate ? "r" + [
                        +s.rotate.toFixed(4),
                        0,
                        0
                    ] : E) + (s.scalex != 1 || s.scaley != 1 ? "s" + [
                        s.scalex,
                        s.scaley,
                        0,
                        0
                    ] : E);
                } else return "m" + [
                    this.get(0),
                    this.get(1),
                    this.get(2),
                    this.get(3),
                    this.get(4),
                    this.get(5)
                ];
            };
        })(Matrix.prototype);
        /*\
     * Snap.Matrix
     [ method ]
     **
     * Matrix constructor, extend on your own risk.
     * To create matrices use @Snap.matrix.
    \*/ Snap.Matrix = Matrix;
        /*\
     * Snap.matrix
     [ method ]
     **
     * Utility method
     **
     * Returns a matrix based on the given parameters
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     * or
     - svgMatrix (SVGMatrix)
     = (object) @Matrix
    \*/ Snap.matrix = function(a, b, c, d, e, f) {
            return new Matrix(a, b, c, d, e, f);
        };
    });
    // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var has = "hasOwnProperty", make = Snap._.make, wrap = Snap._.wrap, is = Snap.is, getSomeDefs = Snap._.getSomeDefs, reURLValue = /^url\((['"]?)([^)]+)\1\)$/, $ = Snap._.$, URL = Snap.url, Str = String, separator = Snap._.separator, E = "";
        /*\
     * Snap.deurl
     [ method ]
     **
     * Unwraps path from `"url(<path>)"`.
     - value (string) url path
     = (string) unwrapped path
    \*/ Snap.deurl = function(value) {
            var res1 = String(value).match(reURLValue);
            return res1 ? res1[2] : value;
        };
        // Attributes event handlers
        eve1.on("snap.util.attr.mask", function(value) {
            if (value instanceof Element || value instanceof Fragment) {
                eve1.stop();
                if (value instanceof Fragment && value.node.childNodes.length == 1) {
                    value = value.node.firstChild;
                    getSomeDefs(this).appendChild(value);
                    value = wrap(value);
                }
                if (value.type == "mask") var mask = value;
                else {
                    mask = make("mask", getSomeDefs(this));
                    mask.node.appendChild(value.node);
                }
                !mask.node.id && $(mask.node, {
                    id: mask.id
                });
                $(this.node, {
                    mask: URL(mask.id)
                });
            }
        });
        (function(clipIt) {
            eve1.on("snap.util.attr.clip", clipIt);
            eve1.on("snap.util.attr.clip-path", clipIt);
            eve1.on("snap.util.attr.clipPath", clipIt);
        })(function(value) {
            if (value instanceof Element || value instanceof Fragment) {
                eve1.stop();
                var clip, node = value.node;
                while(node){
                    if (node.nodeName === "clipPath") {
                        clip = new Element(node);
                        break;
                    }
                    if (node.nodeName === "svg") {
                        clip = undefined;
                        break;
                    }
                    node = node.parentNode;
                }
                if (!clip) {
                    clip = make("clipPath", getSomeDefs(this));
                    clip.node.appendChild(value.node);
                    !clip.node.id && $(clip.node, {
                        id: clip.id
                    });
                }
                $(this.node, {
                    "clip-path": URL(clip.node.id || clip.id)
                });
            }
        });
        function fillStroke(name) {
            return function(value) {
                eve1.stop();
                if (value instanceof Fragment && value.node.childNodes.length == 1 && (value.node.firstChild.tagName == "radialGradient" || value.node.firstChild.tagName == "linearGradient" || value.node.firstChild.tagName == "pattern")) {
                    value = value.node.firstChild;
                    getSomeDefs(this).appendChild(value);
                    value = wrap(value);
                }
                if (value instanceof Element) {
                    if (value.type == "radialGradient" || value.type == "linearGradient" || value.type == "pattern") {
                        if (!value.node.id) $(value.node, {
                            id: value.id
                        });
                        var fill = URL(value.node.id);
                    } else fill = value.attr(name);
                } else {
                    fill = Snap.color(value);
                    if (fill.error) {
                        var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);
                        if (grad) {
                            if (!grad.node.id) $(grad.node, {
                                id: grad.id
                            });
                            fill = URL(grad.node.id);
                        } else fill = value;
                    } else fill = Str(fill);
                }
                var attrs = {};
                attrs[name] = fill;
                $(this.node, attrs);
                this.node.style[name] = E;
            };
        }
        eve1.on("snap.util.attr.fill", fillStroke("fill"));
        eve1.on("snap.util.attr.stroke", fillStroke("stroke"));
        var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        eve1.on("snap.util.grad.parse", function parseGrad(string1) {
            string1 = Str(string1);
            var tokens = string1.match(gradrg);
            if (!tokens) return null;
            var type = tokens[1], params = tokens[2], stops = tokens[3];
            params = params.split(/\s*,\s*/).map(function(el) {
                return +el == el ? +el : el;
            });
            if (params.length == 1 && params[0] == 0) params = [];
            stops = stops.split("-");
            stops = stops.map(function(el) {
                el = el.split(":");
                var out = {
                    color: el[0]
                };
                if (el[1]) out.offset = parseFloat(el[1]);
                return out;
            });
            var len = stops.length, start = 0, j = 0;
            function seed(i, end) {
                var step = (end - start) / (i - j);
                for(var k = j; k < i; k++)stops[k].offset = +(+start + step * (k - j)).toFixed(2);
                j = i;
                start = end;
            }
            len--;
            for(var i = 0; i < len; i++)if ("offset" in stops[i]) seed(i, stops[i].offset);
            stops[len].offset = stops[len].offset || 100;
            seed(len, stops[len].offset);
            return {
                type: type,
                params: params,
                stops: stops
            };
        });
        eve1.on("snap.util.attr.d", function(value) {
            eve1.stop();
            if (is(value, "array") && is(value[0], "array")) value = Snap.path.toString.call(value);
            value = Str(value);
            if (value.match(/[ruo]/i)) value = Snap.path.toAbsolute(value);
            $(this.node, {
                d: value
            });
        })(-1);
        eve1.on("snap.util.attr.#text", function(value) {
            eve1.stop();
            value = Str(value);
            var txt = glob.doc.createTextNode(value);
            while(this.node.firstChild)this.node.removeChild(this.node.firstChild);
            this.node.appendChild(txt);
        })(-1);
        eve1.on("snap.util.attr.path", function(value) {
            eve1.stop();
            this.attr({
                d: value
            });
        })(-1);
        eve1.on("snap.util.attr.class", function(value) {
            eve1.stop();
            this.node.className.baseVal = value;
        })(-1);
        eve1.on("snap.util.attr.viewBox", function(value) {
            var vb;
            if (is(value, "object") && "x" in value) vb = [
                value.x,
                value.y,
                value.width,
                value.height
            ].join(" ");
            else if (is(value, "array")) vb = value.join(" ");
            else vb = value;
            $(this.node, {
                viewBox: vb
            });
            eve1.stop();
        })(-1);
        eve1.on("snap.util.attr.transform", function(value) {
            this.transform(value);
            eve1.stop();
        })(-1);
        eve1.on("snap.util.attr.r", function(value) {
            if (this.type == "rect") {
                eve1.stop();
                $(this.node, {
                    rx: value,
                    ry: value
                });
            }
        })(-1);
        eve1.on("snap.util.attr.textpath", function(value) {
            eve1.stop();
            if (this.type == "text") {
                var id, tp, node;
                if (!value && this.textPath) {
                    tp = this.textPath;
                    while(tp.node.firstChild)this.node.appendChild(tp.node.firstChild);
                    tp.remove();
                    delete this.textPath;
                    return;
                }
                if (is(value, "string")) {
                    var defs = getSomeDefs(this), path = wrap(defs.parentNode).path(value);
                    defs.appendChild(path.node);
                    id = path.id;
                    path.attr({
                        id: id
                    });
                } else {
                    value = wrap(value);
                    if (value instanceof Element) {
                        id = value.attr("id");
                        if (!id) {
                            id = value.id;
                            value.attr({
                                id: id
                            });
                        }
                    }
                }
                if (id) {
                    tp = this.textPath;
                    node = this.node;
                    if (tp) tp.attr({
                        "xlink:href": "#" + id
                    });
                    else {
                        tp = $("textPath", {
                            "xlink:href": "#" + id
                        });
                        while(node.firstChild)tp.appendChild(node.firstChild);
                        node.appendChild(tp);
                        this.textPath = wrap(tp);
                    }
                }
            }
        })(-1);
        eve1.on("snap.util.attr.text", function(value) {
            if (this.type == "text") {
                var i = 0, node = this.node, tuner = function(chunk) {
                    var out = $("tspan");
                    if (is(chunk, "array")) for(var i = 0; i < chunk.length; i++)out.appendChild(tuner(chunk[i]));
                    else out.appendChild(glob.doc.createTextNode(chunk));
                    out.normalize && out.normalize();
                    return out;
                };
                while(node.firstChild)node.removeChild(node.firstChild);
                var tuned = tuner(value);
                while(tuned.firstChild)node.appendChild(tuned.firstChild);
            }
            eve1.stop();
        })(-1);
        function setFontSize(value) {
            eve1.stop();
            if (value == +value) value += "px";
            this.node.style.fontSize = value;
        }
        eve1.on("snap.util.attr.fontSize", setFontSize)(-1);
        eve1.on("snap.util.attr.font-size", setFontSize)(-1);
        eve1.on("snap.util.getattr.transform", function() {
            eve1.stop();
            return this.transform();
        })(-1);
        eve1.on("snap.util.getattr.textpath", function() {
            eve1.stop();
            return this.textPath;
        })(-1);
        // Markers
        (function() {
            function getter(end) {
                return function() {
                    eve1.stop();
                    var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
                    if (style == "none") return style;
                    else return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
                };
            }
            function setter(end) {
                return function(value) {
                    eve1.stop();
                    var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
                    if (value == "" || !value) {
                        this.node.style[name] = "none";
                        return;
                    }
                    if (value.type == "marker") {
                        var id = value.node.id;
                        if (!id) $(value.node, {
                            id: value.id
                        });
                        this.node.style[name] = URL(id);
                        return;
                    }
                };
            }
            eve1.on("snap.util.getattr.marker-end", getter("end"))(-1);
            eve1.on("snap.util.getattr.markerEnd", getter("end"))(-1);
            eve1.on("snap.util.getattr.marker-start", getter("start"))(-1);
            eve1.on("snap.util.getattr.markerStart", getter("start"))(-1);
            eve1.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
            eve1.on("snap.util.getattr.markerMid", getter("mid"))(-1);
            eve1.on("snap.util.attr.marker-end", setter("end"))(-1);
            eve1.on("snap.util.attr.markerEnd", setter("end"))(-1);
            eve1.on("snap.util.attr.marker-start", setter("start"))(-1);
            eve1.on("snap.util.attr.markerStart", setter("start"))(-1);
            eve1.on("snap.util.attr.marker-mid", setter("mid"))(-1);
            eve1.on("snap.util.attr.markerMid", setter("mid"))(-1);
        })();
        eve1.on("snap.util.getattr.r", function() {
            if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
                eve1.stop();
                return $(this.node, "rx");
            }
        })(-1);
        function textExtract(node) {
            var out = [];
            var children = node.childNodes;
            for(var i = 0, ii = children.length; i < ii; i++){
                var chi = children[i];
                if (chi.nodeType == 3) out.push(chi.nodeValue);
                if (chi.tagName == "tspan") {
                    if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) out.push(chi.firstChild.nodeValue);
                    else out.push(textExtract(chi));
                }
            }
            return out;
        }
        eve1.on("snap.util.getattr.text", function() {
            if (this.type == "text" || this.type == "tspan") {
                eve1.stop();
                var out = textExtract(this.node);
                return out.length == 1 ? out[0] : out;
            }
        })(-1);
        eve1.on("snap.util.getattr.#text", function() {
            return this.node.textContent;
        })(-1);
        eve1.on("snap.util.getattr.fill", function(internal) {
            if (internal) return;
            eve1.stop();
            var value = eve1("snap.util.getattr.fill", this, true).firstDefined();
            return Snap(Snap.deurl(value)) || value;
        })(-1);
        eve1.on("snap.util.getattr.stroke", function(internal) {
            if (internal) return;
            eve1.stop();
            var value = eve1("snap.util.getattr.stroke", this, true).firstDefined();
            return Snap(Snap.deurl(value)) || value;
        })(-1);
        eve1.on("snap.util.getattr.viewBox", function() {
            eve1.stop();
            var vb = $(this.node, "viewBox");
            if (vb) {
                vb = vb.split(separator);
                return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
            } else return;
        })(-1);
        eve1.on("snap.util.getattr.points", function() {
            var p = $(this.node, "points");
            eve1.stop();
            if (p) return p.split(separator);
            else return;
        })(-1);
        eve1.on("snap.util.getattr.path", function() {
            var p = $(this.node, "d");
            eve1.stop();
            return p;
        })(-1);
        eve1.on("snap.util.getattr.class", function() {
            return this.node.className.baseVal;
        })(-1);
        function getFontSize() {
            eve1.stop();
            return this.node.style.fontSize;
        }
        eve1.on("snap.util.getattr.fontSize", getFontSize)(-1);
        eve1.on("snap.util.getattr.font-size", getFontSize)(-1);
    });
    // Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var rgNotSpace = /\S+/g, rgBadSpace = /[\t\r\n\f]/g, rgTrim = /(^\s+|\s+$)/g, Str = String, elproto = Element.prototype;
        /*\
     * Element.addClass
     [ method ]
     **
     * Adds given class name or list of class names to the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/ elproto.addClass = function(value) {
            var classes = Str(value || "").match(rgNotSpace) || [], elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [], j, pos, clazz, finalValue;
            if (classes.length) {
                j = 0;
                while(clazz = classes[j++]){
                    pos = curClasses.indexOf(clazz);
                    if (!~pos) curClasses.push(clazz);
                }
                finalValue = curClasses.join(" ");
                if (className != finalValue) elem.className.baseVal = finalValue;
            }
            return this;
        };
        /*\
     * Element.removeClass
     [ method ]
     **
     * Removes given class name or list of class names from the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/ elproto.removeClass = function(value) {
            var classes = Str(value || "").match(rgNotSpace) || [], elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [], j, pos, clazz, finalValue;
            if (curClasses.length) {
                j = 0;
                while(clazz = classes[j++]){
                    pos = curClasses.indexOf(clazz);
                    if (~pos) curClasses.splice(pos, 1);
                }
                finalValue = curClasses.join(" ");
                if (className != finalValue) elem.className.baseVal = finalValue;
            }
            return this;
        };
        /*\
     * Element.hasClass
     [ method ]
     **
     * Checks if the element has a given class name in the list of class names applied to it.
     - value (string) class name
     **
     = (boolean) `true` if the element has given class
    \*/ elproto.hasClass = function(value) {
            var elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [];
            return !!~curClasses.indexOf(value);
        };
        /*\
     * Element.toggleClass
     [ method ]
     **
     * Add or remove one or more classes from the element, depending on either
     * the class’s presence or the value of the `flag` argument.
     - value (string) class name or space separated list of class names
     - flag (boolean) value to determine whether the class should be added or removed
     **
     = (Element) original element.
    \*/ elproto.toggleClass = function(value, flag) {
            if (flag != null) {
                if (flag) return this.addClass(value);
                else return this.removeClass(value);
            }
            var classes = (value || "").match(rgNotSpace) || [], elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [], j, pos, clazz, finalValue;
            j = 0;
            while(clazz = classes[j++]){
                pos = curClasses.indexOf(clazz);
                if (~pos) curClasses.splice(pos, 1);
                else curClasses.push(clazz);
            }
            finalValue = curClasses.join(" ");
            if (className != finalValue) elem.className.baseVal = finalValue;
            return this;
        };
    });
    // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var operators = {
            "+": function(x, y) {
                return x + y;
            },
            "-": function(x, y) {
                return x - y;
            },
            "/": function(x, y) {
                return x / y;
            },
            "*": function(x, y) {
                return x * y;
            }
        }, Str = String, reUnit = /[a-z]+$/i, reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        function getNumber(val) {
            return val;
        }
        function getUnit(unit) {
            return function(val) {
                return +val.toFixed(3) + unit;
            };
        }
        eve1.on("snap.util.attr", function(val) {
            var plus = Str(val).match(reAddon);
            if (plus) {
                var evnt = eve1.nt(), name = evnt.substring(evnt.lastIndexOf(".") + 1), a = this.attr(name), atr = {};
                eve1.stop();
                var unit = plus[3] || "", aUnit = a.match(reUnit), op = operators[plus[1]];
                if (aUnit && aUnit == unit) val = op(parseFloat(a), +plus[2]);
                else {
                    a = this.asPX(name);
                    val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
                }
                if (isNaN(a) || isNaN(val)) return;
                atr[name] = val;
                this.attr(atr);
            }
        })(-10);
        eve1.on("snap.util.equal", function(name, b) {
            var A, B, a = Str(this.attr(name) || ""), el = this, bplus = Str(b).match(reAddon);
            if (bplus) {
                eve1.stop();
                var unit = bplus[3] || "", aUnit = a.match(reUnit), op = operators[bplus[1]];
                if (aUnit && aUnit == unit) return {
                    from: parseFloat(a),
                    to: op(parseFloat(a), +bplus[2]),
                    f: getUnit(aUnit)
                };
                else {
                    a = this.asPX(name);
                    return {
                        from: a,
                        to: op(a, this.asPX(name, bplus[2] + unit)),
                        f: getNumber
                    };
                }
            }
        })(-10);
    });
    // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var proto = Paper.prototype, is = Snap.is;
        /*\
     * Paper.rect
     [ method ]
     *
     * Draws a rectangle
     **
     - x (number) x coordinate of the top left corner
     - y (number) y coordinate of the top left corner
     - width (number) width
     - height (number) height
     - rx (number) #optional horizontal radius for rounded corners, default is 0
     - ry (number) #optional vertical radius for rounded corners, default is rx or 0
     = (object) the `rect` element
     **
     > Usage
     | // regular rectangle
     | var c = paper.rect(10, 10, 50, 50);
     | // rectangle with rounded corners
     | var c = paper.rect(40, 40, 50, 50, 10);
    \*/ proto.rect = function(x, y, w, h, rx, ry) {
            var attr;
            if (ry == null) ry = rx;
            if (is(x, "object") && x == "[object Object]") attr = x;
            else if (x != null) {
                attr = {
                    x: x,
                    y: y,
                    width: w,
                    height: h
                };
                if (rx != null) {
                    attr.rx = rx;
                    attr.ry = ry;
                }
            }
            return this.el("rect", attr);
        };
        /*\
     * Paper.circle
     [ method ]
     **
     * Draws a circle
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - r (number) radius
     = (object) the `circle` element
     **
     > Usage
     | var c = paper.circle(50, 50, 40);
    \*/ proto.circle = function(cx, cy, r) {
            var attr;
            if (is(cx, "object") && cx == "[object Object]") attr = cx;
            else if (cx != null) attr = {
                cx: cx,
                cy: cy,
                r: r
            };
            return this.el("circle", attr);
        };
        var preload = function() {
            function onerror() {
                this.parentNode.removeChild(this);
            }
            return function(src, f) {
                var img = glob.doc.createElement("img"), body = glob.doc.body;
                img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
                img.onload = function() {
                    f.call(img);
                    img.onload = img.onerror = null;
                    body.removeChild(img);
                };
                img.onerror = onerror;
                body.appendChild(img);
                img.src = src;
            };
        }();
        /*\
     * Paper.image
     [ method ]
     **
     * Places an image on the surface
     **
     - src (string) URI of the source image
     - x (number) x offset position
     - y (number) y offset position
     - width (number) width of the image
     - height (number) height of the image
     = (object) the `image` element
     * or
     = (object) Snap element object with type `image`
     **
     > Usage
     | var c = paper.image("apple.png", 10, 10, 80, 80);
    \*/ proto.image = function(src, x, y, width, height) {
            var el = this.el("image");
            if (is(src, "object") && "src" in src) el.attr(src);
            else if (src != null) {
                var set = {
                    "xlink:href": src,
                    preserveAspectRatio: "none"
                };
                if (x != null && y != null) {
                    set.x = x;
                    set.y = y;
                }
                if (width != null && height != null) {
                    set.width = width;
                    set.height = height;
                } else preload(src, function() {
                    Snap._.$(el.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    });
                });
                Snap._.$(el.node, set);
            }
            return el;
        };
        /*\
     * Paper.ellipse
     [ method ]
     **
     * Draws an ellipse
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - rx (number) horizontal radius
     - ry (number) vertical radius
     = (object) the `ellipse` element
     **
     > Usage
     | var c = paper.ellipse(50, 50, 40, 20);
    \*/ proto.ellipse = function(cx, cy, rx, ry) {
            var attr;
            if (is(cx, "object") && cx == "[object Object]") attr = cx;
            else if (cx != null) attr = {
                cx: cx,
                cy: cy,
                rx: rx,
                ry: ry
            };
            return this.el("ellipse", attr);
        };
        // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.
        /*\
     * Paper.path
     [ method ]
     **
     * Creates a `<path>` element using the given string as the path's definition
     - pathString (string) #optional path string in SVG format
     * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
     | "M10,20L30,40"
     * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
     *
     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
     * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
     * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
     > Usage
     | var c = paper.path("M10 10L90 90");
     | // draw a diagonal line:
     | // move to 10,10, line to 90,90
    \*/ proto.path = function(d) {
            var attr;
            if (is(d, "object") && !is(d, "array")) attr = d;
            else if (d) attr = {
                d: d
            };
            return this.el("path", attr);
        };
        /*\
     * Paper.g
     [ method ]
     **
     * Creates a group element
     **
     - varargs (…) #optional elements to nest within the group
     = (object) the `g` element
     **
     > Usage
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g(c2, c1); // note that the order of elements is different
     * or
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g();
     | g.add(c2, c1);
    \*/ /*\
     * Paper.group
     [ method ]
     **
     * See @Paper.g
    \*/ proto.group = proto.g = function(first) {
            var attr, el = this.el("g");
            if (arguments.length == 1 && first && !first.type) el.attr(first);
            else if (arguments.length) el.add(Array.prototype.slice.call(arguments, 0));
            return el;
        };
        /*\
     * Paper.svg
     [ method ]
     **
     * Creates a nested SVG element.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `svg` element
     **
    \*/ proto.svg = function(x, y, width, height, vbx, vby, vbw, vbh) {
            var attrs = {};
            if (is(x, "object") && y == null) attrs = x;
            else {
                if (x != null) attrs.x = x;
                if (y != null) attrs.y = y;
                if (width != null) attrs.width = width;
                if (height != null) attrs.height = height;
                if (vbx != null && vby != null && vbw != null && vbh != null) attrs.viewBox = [
                    vbx,
                    vby,
                    vbw,
                    vbh
                ];
            }
            return this.el("svg", attrs);
        };
        /*\
     * Paper.mask
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a mask.
     **
     = (object) the `mask` element
     **
    \*/ proto.mask = function(first) {
            var attr, el = this.el("mask");
            if (arguments.length == 1 && first && !first.type) el.attr(first);
            else if (arguments.length) el.add(Array.prototype.slice.call(arguments, 0));
            return el;
        };
        /*\
     * Paper.ptrn
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a pattern.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `pattern` element
     **
    \*/ proto.ptrn = function(x, y, width, height, vx, vy, vw, vh) {
            if (is(x, "object")) var attr = x;
            else {
                attr = {
                    patternUnits: "userSpaceOnUse"
                };
                if (x) attr.x = x;
                if (y) attr.y = y;
                if (width != null) attr.width = width;
                if (height != null) attr.height = height;
                if (vx != null && vy != null && vw != null && vh != null) attr.viewBox = [
                    vx,
                    vy,
                    vw,
                    vh
                ];
                else attr.viewBox = [
                    x || 0,
                    y || 0,
                    width || 0,
                    height || 0
                ];
            }
            return this.el("pattern", attr);
        };
        /*\
     * Paper.use
     [ method ]
     **
     * Creates a <use> element.
     - id (string) @optional id of element to link
     * or
     - id (Element) @optional element to link
     **
     = (object) the `use` element
     **
    \*/ proto.use = function(id) {
            if (id != null) {
                if (id instanceof Element) {
                    if (!id.attr("id")) id.attr({
                        id: Snap._.id(id)
                    });
                    id = id.attr("id");
                }
                if (String(id).charAt() == "#") id = id.substring(1);
                return this.el("use", {
                    "xlink:href": "#" + id
                });
            } else return Element.prototype.use.call(this);
        };
        /*\
     * Paper.symbol
     [ method ]
     **
     * Creates a <symbol> element.
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     = (object) the `symbol` element
     **
    \*/ proto.symbol = function(vx, vy, vw, vh) {
            var attr = {};
            if (vx != null && vy != null && vw != null && vh != null) attr.viewBox = [
                vx,
                vy,
                vw,
                vh
            ];
            return this.el("symbol", attr);
        };
        /*\
     * Paper.text
     [ method ]
     **
     * Draws a text string
     **
     - x (number) x coordinate position
     - y (number) y coordinate position
     - text (string|array) The text string to draw or array of strings to nest within separate `<tspan>` elements
     = (object) the `text` element
     **
     > Usage
     | var t1 = paper.text(50, 50, "Snap");
     | var t2 = paper.text(50, 50, ["S","n","a","p"]);
     | // Text path usage
     | t1.attr({textpath: "M10,10L100,100"});
     | // or
     | var pth = paper.path("M10,10L100,100");
     | t1.attr({textpath: pth});
    \*/ proto.text = function(x, y, text) {
            var attr = {};
            if (is(x, "object")) attr = x;
            else if (x != null) attr = {
                x: x,
                y: y,
                text: text || ""
            };
            return this.el("text", attr);
        };
        /*\
     * Paper.line
     [ method ]
     **
     * Draws a line
     **
     - x1 (number) x coordinate position of the start
     - y1 (number) y coordinate position of the start
     - x2 (number) x coordinate position of the end
     - y2 (number) y coordinate position of the end
     = (object) the `line` element
     **
     > Usage
     | var t1 = paper.line(50, 50, 100, 100);
    \*/ proto.line = function(x1, y1, x2, y2) {
            var attr = {};
            if (is(x1, "object")) attr = x1;
            else if (x1 != null) attr = {
                x1: x1,
                x2: x2,
                y1: y1,
                y2: y2
            };
            return this.el("line", attr);
        };
        /*\
     * Paper.polyline
     [ method ]
     **
     * Draws a polyline
     **
     - points (array) array of points
     * or
     - varargs (…) points
     = (object) the `polyline` element
     **
     > Usage
     | var p1 = paper.polyline([10, 10, 100, 100]);
     | var p2 = paper.polyline(10, 10, 100, 100);
    \*/ proto.polyline = function(points) {
            if (arguments.length > 1) points = Array.prototype.slice.call(arguments, 0);
            var attr = {};
            if (is(points, "object") && !is(points, "array")) attr = points;
            else if (points != null) attr = {
                points: points
            };
            return this.el("polyline", attr);
        };
        /*\
     * Paper.polygon
     [ method ]
     **
     * Draws a polygon. See @Paper.polyline
    \*/ proto.polygon = function(points) {
            if (arguments.length > 1) points = Array.prototype.slice.call(arguments, 0);
            var attr = {};
            if (is(points, "object") && !is(points, "array")) attr = points;
            else if (points != null) attr = {
                points: points
            };
            return this.el("polygon", attr);
        };
        // gradients
        (function() {
            var $ = Snap._.$;
            // gradients' helpers
            /*\
         * Element.stops
         [ method ]
         **
         * Only for gradients!
         * Returns array of gradient stops elements.
         = (array) the stops array.
        \*/ function Gstops() {
                return this.selectAll("stop");
            }
            /*\
         * Element.addStop
         [ method ]
         **
         * Only for gradients!
         * Adds another stop to the gradient.
         - color (string) stops color
         - offset (number) stops offset 0..100
         = (object) gradient element
        \*/ function GaddStop(color, offset) {
                var stop = $("stop"), attr = {
                    offset: +offset + "%"
                };
                color = Snap.color(color);
                attr["stop-color"] = color.hex;
                if (color.opacity < 1) attr["stop-opacity"] = color.opacity;
                $(stop, attr);
                var stops = this.stops(), inserted;
                for(var i = 0; i < stops.length; i++){
                    var stopOffset = parseFloat(stops[i].attr("offset"));
                    if (stopOffset > offset) {
                        this.node.insertBefore(stop, stops[i].node);
                        inserted = true;
                        break;
                    }
                }
                if (!inserted) this.node.appendChild(stop);
                return this;
            }
            function GgetBBox() {
                if (this.type == "linearGradient") {
                    var x1 = $(this.node, "x1") || 0, x2 = $(this.node, "x2") || 1, y1 = $(this.node, "y1") || 0, y2 = $(this.node, "y2") || 0;
                    return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
                } else {
                    var cx = this.node.cx || .5, cy = this.node.cy || .5, r = this.node.r || 0;
                    return Snap._.box(cx - r, cy - r, r * 2, r * 2);
                }
            }
            /*\
         * Element.setStops
         [ method ]
         **
         * Only for gradients!
         * Updates stops of the gradient based on passed gradient descriptor. See @Ppaer.gradient
         - str (string) gradient descriptor part after `()`.
         = (object) gradient element
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         | g.setStops("#fff-#000-#f00-#fc0");
        \*/ function GsetStops(str) {
                var grad = str, stops = this.stops();
                if (typeof str == "string") grad = eve1("snap.util.grad.parse", null, "l(0,0,0,1)" + str).firstDefined().stops;
                if (!Snap.is(grad, "array")) return;
                for(var i = 0; i < stops.length; i++)if (grad[i]) {
                    var color = Snap.color(grad[i].color), attr = {
                        "offset": grad[i].offset + "%"
                    };
                    attr["stop-color"] = color.hex;
                    if (color.opacity < 1) attr["stop-opacity"] = color.opacity;
                    stops[i].attr(attr);
                } else stops[i].remove();
                for(i = stops.length; i < grad.length; i++)this.addStop(grad[i].color, grad[i].offset);
                return this;
            }
            function gradient(defs, str) {
                var grad = eve1("snap.util.grad.parse", null, str).firstDefined(), el;
                if (!grad) return null;
                grad.params.unshift(defs);
                if (grad.type.toLowerCase() == "l") el = gradientLinear.apply(0, grad.params);
                else el = gradientRadial.apply(0, grad.params);
                if (grad.type != grad.type.toLowerCase()) $(el.node, {
                    gradientUnits: "userSpaceOnUse"
                });
                var stops = grad.stops, len = stops.length;
                for(var i = 0; i < len; i++){
                    var stop = stops[i];
                    el.addStop(stop.color, stop.offset);
                }
                return el;
            }
            function gradientLinear(defs, x1, y1, x2, y2) {
                var el = Snap._.make("linearGradient", defs);
                el.stops = Gstops;
                el.addStop = GaddStop;
                el.getBBox = GgetBBox;
                el.setStops = GsetStops;
                if (x1 != null) $(el.node, {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2
                });
                return el;
            }
            function gradientRadial(defs, cx, cy, r, fx, fy) {
                var el = Snap._.make("radialGradient", defs);
                el.stops = Gstops;
                el.addStop = GaddStop;
                el.getBBox = GgetBBox;
                if (cx != null) $(el.node, {
                    cx: cx,
                    cy: cy,
                    r: r
                });
                if (fx != null && fy != null) $(el.node, {
                    fx: fx,
                    fy: fy
                });
                return el;
            }
            /*\
         * Paper.gradient
         [ method ]
         **
         * Creates a gradient element
         **
         - gradient (string) gradient descriptor
         > Gradient Descriptor
         * The gradient descriptor is an expression formatted as
         * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
         * either linear or radial.  The uppercase `L` or `R` letters
         * indicate absolute coordinates offset from the SVG surface.
         * Lowercase `l` or `r` letters indicate coordinates
         * calculated relative to the element to which the gradient is
         * applied.  Coordinates specify a linear gradient vector as
         * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
         * `r` and optional `fx`, `fy` specifying a focal point away
         * from the center of the circle. Specify `<colors>` as a list
         * of dash-separated CSS color values.  Each color may be
         * followed by a custom offset value, separated with a colon
         * character.
         > Examples
         * Linear gradient, relative from top-left corner to bottom-right
         * corner, from black through red to white:
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         * Linear gradient, absolute from (0, 0) to (100, 100), from black
         * through red at 25% to white:
         | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25-#fff");
         * Radial gradient, relative from the center of the element with radius
         * half the width, from black to white:
         | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
         * To apply the gradient:
         | paper.circle(50, 50, 40).attr({
         |     fill: g
         | });
         = (object) the `gradient` element
        \*/ proto.gradient = function(str) {
                return gradient(this.defs, str);
            };
            proto.gradientLinear = function(x1, y1, x2, y2) {
                return gradientLinear(this.defs, x1, y1, x2, y2);
            };
            proto.gradientRadial = function(cx, cy, r, fx, fy) {
                return gradientRadial(this.defs, cx, cy, r, fx, fy);
            };
            /*\
         * Paper.toString
         [ method ]
         **
         * Returns SVG code for the @Paper
         = (string) SVG code for the @Paper
        \*/ proto.toString = function() {
                var doc = this.node.ownerDocument, f = doc.createDocumentFragment(), d = doc.createElement("div"), svg = this.node.cloneNode(true), res1;
                f.appendChild(d);
                d.appendChild(svg);
                Snap._.$(svg, {
                    xmlns: "http://www.w3.org/2000/svg"
                });
                res1 = d.innerHTML;
                f.removeChild(f.firstChild);
                return res1;
            };
            /*\
         * Paper.toDataURL
         [ method ]
         **
         * Returns SVG code for the @Paper as Data URI string.
         = (string) Data URI string
        \*/ proto.toDataURL = function() {
                if (window1 && window1.btoa) return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
            };
            /*\
         * Paper.clear
         [ method ]
         **
         * Removes all child nodes of the paper, except <defs>.
        \*/ proto.clear = function() {
                var node = this.node.firstChild, next;
                while(node){
                    next = node.nextSibling;
                    if (node.tagName != "defs") node.parentNode.removeChild(node);
                    else proto.clear.call({
                        node: node
                    });
                    node = next;
                }
            };
        })();
    });
    // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    Snap.plugin(function(Snap, Element, Paper, glob) {
        var elproto = Element.prototype, is = Snap.is, clone = Snap._.clone, has = "hasOwnProperty", p2s = /,?([a-z]),?/gi, toFloat = parseFloat, math1 = Math, PI = math1.PI, mmin = math1.min, mmax = math1.max, pow = math1.pow, abs = math1.abs;
        function paths(ps) {
            var p = paths.ps = paths.ps || {};
            if (p[ps]) p[ps].sleep = 100;
            else p[ps] = {
                sleep: 100
            };
            setTimeout(function() {
                for(var key in p)if (p[has](key) && key != ps) {
                    p[key].sleep--;
                    !p[key].sleep && delete p[key];
                }
            });
            return p[ps];
        }
        function box(x, y, width, height) {
            if (x == null) x = y = width = height = 0;
            if (y == null) {
                y = x.y;
                width = x.width;
                height = x.height;
                x = x.x;
            }
            return {
                x: x,
                y: y,
                width: width,
                w: width,
                height: height,
                h: height,
                x2: x + width,
                y2: y + height,
                cx: x + width / 2,
                cy: y + height / 2,
                r1: math1.min(width, height) / 2,
                r2: math1.max(width, height) / 2,
                r0: math1.sqrt(width * width + height * height) / 2,
                path: rectPath(x, y, width, height),
                vb: [
                    x,
                    y,
                    width,
                    height
                ].join(" ")
            };
        }
        function toString() {
            return this.join(",").replace(p2s, "$1");
        }
        function pathClone(pathArray) {
            var res1 = clone(pathArray);
            res1.toString = toString;
            return res1;
        }
        function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
            if (length == null) return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
            else return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
        }
        function getLengthFactory(istotal, subpath) {
            function O(val) {
                return +(+val).toFixed(3);
            }
            return Snap._.cacher(function(path, length, onlystart) {
                if (path instanceof Element) path = path.attr("d");
                path = path2curve(path);
                var x, y, p, l, sp = "", subpaths = {}, point, len = 0;
                for(var i = 0, ii = path.length; i < ii; i++){
                    p = path[i];
                    if (p[0] == "M") {
                        x = +p[1];
                        y = +p[2];
                    } else {
                        l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                        if (len + l > length) {
                            if (subpath && !subpaths.start) {
                                point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                                sp += [
                                    "C" + O(point.start.x),
                                    O(point.start.y),
                                    O(point.m.x),
                                    O(point.m.y),
                                    O(point.x),
                                    O(point.y)
                                ];
                                if (onlystart) return sp;
                                subpaths.start = sp;
                                sp = [
                                    "M" + O(point.x),
                                    O(point.y) + "C" + O(point.n.x),
                                    O(point.n.y),
                                    O(point.end.x),
                                    O(point.end.y),
                                    O(p[5]),
                                    O(p[6])
                                ].join();
                                len += l;
                                x = +p[5];
                                y = +p[6];
                                continue;
                            }
                            if (!istotal && !subpath) {
                                point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                                return point;
                            }
                        }
                        len += l;
                        x = +p[5];
                        y = +p[6];
                    }
                    sp += p.shift() + p;
                }
                subpaths.end = sp;
                point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
                return point;
            }, null, Snap._.clone);
        }
        var getTotalLength = getLengthFactory(1), getPointAtLength = getLengthFactory(), getSubpathsAtLength = getLengthFactory(0, 1);
        function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
            var t1 = 1 - t, t13 = pow(t1, 3), t12 = pow(t1, 2), t2 = t * t, t3 = t2 * t, x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x, y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y, mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x), my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y), nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x), ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y), ax = t1 * p1x + t * c1x, ay = t1 * p1y + t * c1y, cx = t1 * c2x + t * p2x, cy = t1 * c2y + t * p2y, alpha = 90 - math1.atan2(mx - nx, my - ny) * 180 / PI;
            // (mx > nx || my < ny) && (alpha += 180);
            return {
                x: x,
                y: y,
                m: {
                    x: mx,
                    y: my
                },
                n: {
                    x: nx,
                    y: ny
                },
                start: {
                    x: ax,
                    y: ay
                },
                end: {
                    x: cx,
                    y: cy
                },
                alpha: alpha
            };
        }
        function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
            if (!Snap.is(p1x, "array")) p1x = [
                p1x,
                p1y,
                c1x,
                c1y,
                c2x,
                c2y,
                p2x,
                p2y
            ];
            var bbox = curveDim.apply(null, p1x);
            return box(bbox.min.x, bbox.min.y, bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y);
        }
        function isPointInsideBBox(bbox, x, y) {
            return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
        }
        function isBBoxIntersect(bbox1, bbox2) {
            bbox1 = box(bbox1);
            bbox2 = box(bbox2);
            return isPointInsideBBox(bbox2, bbox1.x, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
        }
        function base3(t, p1, p2, p3, p4) {
            var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4, t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
            return t * t2 - 3 * p1 + 3 * p2;
        }
        function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
            if (z == null) z = 1;
            z = z > 1 ? 1 : z < 0 ? 0 : z;
            var z2 = z / 2, n = 12, Tvalues = [
                -0.1252,
                .1252,
                -0.3678,
                .3678,
                -0.5873,
                .5873,
                -0.7699,
                .7699,
                -0.9041,
                .9041,
                -0.9816,
                .9816
            ], Cvalues = [
                0.2491,
                0.2491,
                0.2335,
                0.2335,
                0.2032,
                0.2032,
                0.1601,
                0.1601,
                0.1069,
                0.1069,
                0.0472,
                0.0472
            ], sum = 0;
            for(var i = 0; i < n; i++){
                var ct = z2 * Tvalues[i] + z2, xbase = base3(ct, x1, x2, x3, x4), ybase = base3(ct, y1, y2, y3, y4), comb = xbase * xbase + ybase * ybase;
                sum += Cvalues[i] * math1.sqrt(comb);
            }
            return z2 * sum;
        }
        function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
            if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) return;
            var t = 1, step = t / 2, t2 = t - step, l, e = .01;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
            while(abs(l - ll) > e){
                step /= 2;
                t2 += (l < ll ? 1 : -1) * step;
                l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
            }
            return t2;
        }
        function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
            if (mmax(x1, x2) < mmin(x3, x4) || mmin(x1, x2) > mmax(x3, x4) || mmax(y1, y2) < mmin(y3, y4) || mmin(y1, y2) > mmax(y3, y4)) return;
            var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4), ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4), denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
            if (!denominator) return;
            var px = nx / denominator, py = ny / denominator, px2 = +px.toFixed(2), py2 = +py.toFixed(2);
            if (px2 < +mmin(x1, x2).toFixed(2) || px2 > +mmax(x1, x2).toFixed(2) || px2 < +mmin(x3, x4).toFixed(2) || px2 > +mmax(x3, x4).toFixed(2) || py2 < +mmin(y1, y2).toFixed(2) || py2 > +mmax(y1, y2).toFixed(2) || py2 < +mmin(y3, y4).toFixed(2) || py2 > +mmax(y3, y4).toFixed(2)) return;
            return {
                x: px,
                y: py
            };
        }
        function inter(bez1, bez2) {
            return interHelper(bez1, bez2);
        }
        function interCount(bez1, bez2) {
            return interHelper(bez1, bez2, 1);
        }
        function interHelper(bez1, bez2, justCount) {
            var bbox1 = bezierBBox(bez1), bbox2 = bezierBBox(bez2);
            if (!isBBoxIntersect(bbox1, bbox2)) return justCount ? 0 : [];
            var l1 = bezlen.apply(0, bez1), l2 = bezlen.apply(0, bez2), n1 = ~~(l1 / 8), n2 = ~~(l2 / 8), dots1 = [], dots2 = [], xy = {}, res1 = justCount ? 0 : [];
            for(var i = 0; i < n1 + 1; i++){
                var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
                dots1.push({
                    x: p.x,
                    y: p.y,
                    t: i / n1
                });
            }
            for(i = 0; i < n2 + 1; i++){
                p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
                dots2.push({
                    x: p.x,
                    y: p.y,
                    t: i / n2
                });
            }
            for(i = 0; i < n1; i++)for(var j = 0; j < n2; j++){
                var di = dots1[i], di1 = dots1[i + 1], dj = dots2[j], dj1 = dots2[j + 1], ci = abs(di1.x - di.x) < .001 ? "y" : "x", cj = abs(dj1.x - dj.x) < .001 ? "y" : "x", is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                if (is) {
                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) continue;
                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t), t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                        if (justCount) res1++;
                        else res1.push({
                            x: is.x,
                            y: is.y,
                            t1: t1,
                            t2: t2
                        });
                    }
                }
            }
            return res1;
        }
        function pathIntersection(path1, path2) {
            return interPathHelper(path1, path2);
        }
        function pathIntersectionNumber(path1, path2) {
            return interPathHelper(path1, path2, 1);
        }
        function interPathHelper(path1, path2, justCount) {
            path1 = path2curve(path1);
            path2 = path2curve(path2);
            var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2, res1 = justCount ? 0 : [];
            for(var i = 0, ii = path1.length; i < ii; i++){
                var pi = path1[i];
                if (pi[0] == "M") {
                    x1 = x1m = pi[1];
                    y1 = y1m = pi[2];
                } else {
                    if (pi[0] == "C") {
                        bez1 = [
                            x1,
                            y1
                        ].concat(pi.slice(1));
                        x1 = bez1[6];
                        y1 = bez1[7];
                    } else {
                        bez1 = [
                            x1,
                            y1,
                            x1,
                            y1,
                            x1m,
                            y1m,
                            x1m,
                            y1m
                        ];
                        x1 = x1m;
                        y1 = y1m;
                    }
                    for(var j = 0, jj = path2.length; j < jj; j++){
                        var pj = path2[j];
                        if (pj[0] == "M") {
                            x2 = x2m = pj[1];
                            y2 = y2m = pj[2];
                        } else {
                            if (pj[0] == "C") {
                                bez2 = [
                                    x2,
                                    y2
                                ].concat(pj.slice(1));
                                x2 = bez2[6];
                                y2 = bez2[7];
                            } else {
                                bez2 = [
                                    x2,
                                    y2,
                                    x2,
                                    y2,
                                    x2m,
                                    y2m,
                                    x2m,
                                    y2m
                                ];
                                x2 = x2m;
                                y2 = y2m;
                            }
                            var intr = interHelper(bez1, bez2, justCount);
                            if (justCount) res1 += intr;
                            else {
                                for(var k = 0, kk = intr.length; k < kk; k++){
                                    intr[k].segment1 = i;
                                    intr[k].segment2 = j;
                                    intr[k].bez1 = bez1;
                                    intr[k].bez2 = bez2;
                                }
                                res1 = res1.concat(intr);
                            }
                        }
                    }
                }
            }
            return res1;
        }
        function isPointInsidePath(path, x, y) {
            var bbox = pathBBox(path);
            return isPointInsideBBox(bbox, x, y) && interPathHelper(path, [
                [
                    "M",
                    x,
                    y
                ],
                [
                    "H",
                    bbox.x2 + 10
                ]
            ], 1) % 2 == 1;
        }
        function pathBBox(path) {
            var pth = paths(path);
            if (pth.bbox) return clone(pth.bbox);
            if (!path) return box();
            path = path2curve(path);
            var x = 0, y = 0, X = [], Y = [], p;
            for(var i = 0, ii = path.length; i < ii; i++){
                p = path[i];
                if (p[0] == "M") {
                    x = p[1];
                    y = p[2];
                    X.push(x);
                    Y.push(y);
                } else {
                    var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                    X = X.concat(dim.min.x, dim.max.x);
                    Y = Y.concat(dim.min.y, dim.max.y);
                    x = p[5];
                    y = p[6];
                }
            }
            var xmin = mmin.apply(0, X), ymin = mmin.apply(0, Y), xmax = mmax.apply(0, X), ymax = mmax.apply(0, Y), bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
            pth.bbox = clone(bb);
            return bb;
        }
        function rectPath(x, y, w, h, r) {
            if (r) return [
                [
                    "M",
                    +x + +r,
                    y
                ],
                [
                    "l",
                    w - r * 2,
                    0
                ],
                [
                    "a",
                    r,
                    r,
                    0,
                    0,
                    1,
                    r,
                    r
                ],
                [
                    "l",
                    0,
                    h - r * 2
                ],
                [
                    "a",
                    r,
                    r,
                    0,
                    0,
                    1,
                    -r,
                    r
                ],
                [
                    "l",
                    r * 2 - w,
                    0
                ],
                [
                    "a",
                    r,
                    r,
                    0,
                    0,
                    1,
                    -r,
                    -r
                ],
                [
                    "l",
                    0,
                    r * 2 - h
                ],
                [
                    "a",
                    r,
                    r,
                    0,
                    0,
                    1,
                    r,
                    -r
                ],
                [
                    "z"
                ]
            ];
            var res1 = [
                [
                    "M",
                    x,
                    y
                ],
                [
                    "l",
                    w,
                    0
                ],
                [
                    "l",
                    0,
                    h
                ],
                [
                    "l",
                    -w,
                    0
                ],
                [
                    "z"
                ]
            ];
            res1.toString = toString;
            return res1;
        }
        function ellipsePath(x, y, rx, ry, a) {
            if (a == null && ry == null) ry = rx;
            x = +x;
            y = +y;
            rx = +rx;
            ry = +ry;
            if (a != null) var rad = Math.PI / 180, x1 = x + rx * Math.cos(-ry * rad), x2 = x + rx * Math.cos(-a * rad), y1 = y + rx * Math.sin(-ry * rad), y2 = y + rx * Math.sin(-a * rad), res1 = [
                [
                    "M",
                    x1,
                    y1
                ],
                [
                    "A",
                    rx,
                    rx,
                    0,
                    +(a - ry > 180),
                    0,
                    x2,
                    y2
                ]
            ];
            else res1 = [
                [
                    "M",
                    x,
                    y
                ],
                [
                    "m",
                    0,
                    -ry
                ],
                [
                    "a",
                    rx,
                    ry,
                    0,
                    1,
                    1,
                    0,
                    2 * ry
                ],
                [
                    "a",
                    rx,
                    ry,
                    0,
                    1,
                    1,
                    0,
                    -2 * ry
                ],
                [
                    "z"
                ]
            ];
            res1.toString = toString;
            return res1;
        }
        var unit2px = Snap._unit2px, getPath = {
            path: function(el) {
                return el.attr("path");
            },
            circle: function(el) {
                var attr = unit2px(el);
                return ellipsePath(attr.cx, attr.cy, attr.r);
            },
            ellipse: function(el) {
                var attr = unit2px(el);
                return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
            },
            rect: function(el) {
                var attr = unit2px(el);
                return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
            },
            image: function(el) {
                var attr = unit2px(el);
                return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
            },
            line: function(el) {
                return "M" + [
                    el.attr("x1") || 0,
                    el.attr("y1") || 0,
                    el.attr("x2"),
                    el.attr("y2")
                ];
            },
            polyline: function(el) {
                return "M" + el.attr("points");
            },
            polygon: function(el) {
                return "M" + el.attr("points") + "z";
            },
            deflt: function(el) {
                var bbox = el.node.getBBox();
                return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
            }
        };
        function pathToRelative(pathArray) {
            var pth = paths(pathArray), lowerCase = String.prototype.toLowerCase;
            if (pth.rel) return pathClone(pth.rel);
            if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) pathArray = Snap.parsePathString(pathArray);
            var res1 = [], x = 0, y = 0, mx = 0, my = 0, start = 0;
            if (pathArray[0][0] == "M") {
                x = pathArray[0][1];
                y = pathArray[0][2];
                mx = x;
                my = y;
                start++;
                res1.push([
                    "M",
                    x,
                    y
                ]);
            }
            for(var i = start, ii = pathArray.length; i < ii; i++){
                var r = res1[i] = [], pa = pathArray[i];
                if (pa[0] != lowerCase.call(pa[0])) {
                    r[0] = lowerCase.call(pa[0]);
                    switch(r[0]){
                        case "a":
                            r[1] = pa[1];
                            r[2] = pa[2];
                            r[3] = pa[3];
                            r[4] = pa[4];
                            r[5] = pa[5];
                            r[6] = +(pa[6] - x).toFixed(3);
                            r[7] = +(pa[7] - y).toFixed(3);
                            break;
                        case "v":
                            r[1] = +(pa[1] - y).toFixed(3);
                            break;
                        case "m":
                            mx = pa[1];
                            my = pa[2];
                        default:
                            for(var j = 1, jj = pa.length; j < jj; j++)r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
                    }
                } else {
                    r = res1[i] = [];
                    if (pa[0] == "m") {
                        mx = pa[1] + x;
                        my = pa[2] + y;
                    }
                    for(var k = 0, kk = pa.length; k < kk; k++)res1[i][k] = pa[k];
                }
                var len = res1[i].length;
                switch(res1[i][0]){
                    case "z":
                        x = mx;
                        y = my;
                        break;
                    case "h":
                        x += +res1[i][len - 1];
                        break;
                    case "v":
                        y += +res1[i][len - 1];
                        break;
                    default:
                        x += +res1[i][len - 2];
                        y += +res1[i][len - 1];
                }
            }
            res1.toString = toString;
            pth.rel = pathClone(res1);
            return res1;
        }
        function pathToAbsolute(pathArray) {
            var pth = paths(pathArray);
            if (pth.abs) return pathClone(pth.abs);
            if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) pathArray = Snap.parsePathString(pathArray);
            if (!pathArray || !pathArray.length) return [
                [
                    "M",
                    0,
                    0
                ]
            ];
            var res1 = [], x = 0, y = 0, mx = 0, my = 0, start = 0, pa0;
            if (pathArray[0][0] == "M") {
                x = +pathArray[0][1];
                y = +pathArray[0][2];
                mx = x;
                my = y;
                start++;
                res1[0] = [
                    "M",
                    x,
                    y
                ];
            }
            var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";
            for(var r, pa, i = start, ii = pathArray.length; i < ii; i++){
                res1.push(r = []);
                pa = pathArray[i];
                pa0 = pa[0];
                if (pa0 != pa0.toUpperCase()) {
                    r[0] = pa0.toUpperCase();
                    switch(r[0]){
                        case "A":
                            r[1] = pa[1];
                            r[2] = pa[2];
                            r[3] = pa[3];
                            r[4] = pa[4];
                            r[5] = pa[5];
                            r[6] = +pa[6] + x;
                            r[7] = +pa[7] + y;
                            break;
                        case "V":
                            r[1] = +pa[1] + y;
                            break;
                        case "H":
                            r[1] = +pa[1] + x;
                            break;
                        case "R":
                            var dots = [
                                x,
                                y
                            ].concat(pa.slice(1));
                            for(var j = 2, jj = dots.length; j < jj; j++){
                                dots[j] = +dots[j] + x;
                                dots[++j] = +dots[j] + y;
                            }
                            res1.pop();
                            res1 = res1.concat(catmullRom2bezier(dots, crz));
                            break;
                        case "O":
                            res1.pop();
                            dots = ellipsePath(x, y, pa[1], pa[2]);
                            dots.push(dots[0]);
                            res1 = res1.concat(dots);
                            break;
                        case "U":
                            res1.pop();
                            res1 = res1.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                            r = [
                                "U"
                            ].concat(res1[res1.length - 1].slice(-2));
                            break;
                        case "M":
                            mx = +pa[1] + x;
                            my = +pa[2] + y;
                        default:
                            for(j = 1, jj = pa.length; j < jj; j++)r[j] = +pa[j] + (j % 2 ? x : y);
                    }
                } else if (pa0 == "R") {
                    dots = [
                        x,
                        y
                    ].concat(pa.slice(1));
                    res1.pop();
                    res1 = res1.concat(catmullRom2bezier(dots, crz));
                    r = [
                        "R"
                    ].concat(pa.slice(-2));
                } else if (pa0 == "O") {
                    res1.pop();
                    dots = ellipsePath(x, y, pa[1], pa[2]);
                    dots.push(dots[0]);
                    res1 = res1.concat(dots);
                } else if (pa0 == "U") {
                    res1.pop();
                    res1 = res1.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                    r = [
                        "U"
                    ].concat(res1[res1.length - 1].slice(-2));
                } else for(var k = 0, kk = pa.length; k < kk; k++)r[k] = pa[k];
                pa0 = pa0.toUpperCase();
                if (pa0 != "O") switch(r[0]){
                    case "Z":
                        x = +mx;
                        y = +my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = r[r.length - 2];
                        my = r[r.length - 1];
                    default:
                        x = r[r.length - 2];
                        y = r[r.length - 1];
                }
            }
            res1.toString = toString;
            pth.abs = pathClone(res1);
            return res1;
        }
        function l2c(x1, y1, x2, y2) {
            return [
                x1,
                y1,
                x2,
                y2,
                x2,
                y2
            ];
        }
        function q2c(x1, y1, ax, ay, x2, y2) {
            var _13 = 1 / 3, _23 = 2 / 3;
            return [
                _13 * x1 + _23 * ax,
                _13 * y1 + _23 * ay,
                _13 * x2 + _23 * ax,
                _13 * y2 + _23 * ay,
                x2,
                y2
            ];
        }
        function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
            // for more information of where this math came from visit:
            // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
            var _120 = PI * 120 / 180, rad = PI / 180 * (+angle || 0), res1 = [], xy, rotate = Snap._.cacher(function(x, y, rad) {
                var X = x * math1.cos(rad) - y * math1.sin(rad), Y = x * math1.sin(rad) + y * math1.cos(rad);
                return {
                    x: X,
                    y: Y
                };
            });
            if (!rx || !ry) return [
                x1,
                y1,
                x2,
                y2,
                x2,
                y2
            ];
            if (!recursive) {
                xy = rotate(x1, y1, -rad);
                x1 = xy.x;
                y1 = xy.y;
                xy = rotate(x2, y2, -rad);
                x2 = xy.x;
                y2 = xy.y;
                var cos = math1.cos(PI / 180 * angle), sin = math1.sin(PI / 180 * angle), x = (x1 - x2) / 2, y = (y1 - y2) / 2;
                var h = x * x / (rx * rx) + y * y / (ry * ry);
                if (h > 1) {
                    h = math1.sqrt(h);
                    rx = h * rx;
                    ry = h * ry;
                }
                var rx2 = rx * rx, ry2 = ry * ry, k = (large_arc_flag == sweep_flag ? -1 : 1) * math1.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))), cx = k * rx * y / ry + (x1 + x2) / 2, cy = k * -ry * x / rx + (y1 + y2) / 2, f1 = math1.asin(((y1 - cy) / ry).toFixed(9)), f2 = math1.asin(((y2 - cy) / ry).toFixed(9));
                f1 = x1 < cx ? PI - f1 : f1;
                f2 = x2 < cx ? PI - f2 : f2;
                f1 < 0 && (f1 = PI * 2 + f1);
                f2 < 0 && (f2 = PI * 2 + f2);
                if (sweep_flag && f1 > f2) f1 = f1 - PI * 2;
                if (!sweep_flag && f2 > f1) f2 = f2 - PI * 2;
            } else {
                f1 = recursive[0];
                f2 = recursive[1];
                cx = recursive[2];
                cy = recursive[3];
            }
            var df = f2 - f1;
            if (abs(df) > _120) {
                var f2old = f2, x2old = x2, y2old = y2;
                f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
                x2 = cx + rx * math1.cos(f2);
                y2 = cy + ry * math1.sin(f2);
                res1 = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [
                    f2,
                    f2old,
                    cx,
                    cy
                ]);
            }
            df = f2 - f1;
            var c1 = math1.cos(f1), s1 = math1.sin(f1), c2 = math1.cos(f2), s2 = math1.sin(f2), t = math1.tan(df / 4), hx = 4 / 3 * rx * t, hy = 4 / 3 * ry * t, m1 = [
                x1,
                y1
            ], m2 = [
                x1 + hx * s1,
                y1 - hy * c1
            ], m3 = [
                x2 + hx * s2,
                y2 - hy * c2
            ], m4 = [
                x2,
                y2
            ];
            m2[0] = 2 * m1[0] - m2[0];
            m2[1] = 2 * m1[1] - m2[1];
            if (recursive) return [
                m2,
                m3,
                m4
            ].concat(res1);
            else {
                res1 = [
                    m2,
                    m3,
                    m4
                ].concat(res1).join().split(",");
                var newres = [];
                for(var i = 0, ii = res1.length; i < ii; i++)newres[i] = i % 2 ? rotate(res1[i - 1], res1[i], rad).y : rotate(res1[i], res1[i + 1], rad).x;
                return newres;
            }
        }
        function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
            var t1 = 1 - t;
            return {
                x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
                y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
            };
        }
        // Returns bounding box of cubic bezier curve.
        // Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
        // Original version: NISHIO Hirokazu
        // Modifications: https://github.com/timo22345
        function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
            var tvalues = [], bounds = [
                [],
                []
            ], a, b, c, t, t1, t2, b2ac, sqrtb2ac;
            for(var i = 0; i < 2; ++i){
                if (i == 0) {
                    b = 6 * x0 - 12 * x1 + 6 * x2;
                    a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                    c = 3 * x1 - 3 * x0;
                } else {
                    b = 6 * y0 - 12 * y1 + 6 * y2;
                    a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                    c = 3 * y1 - 3 * y0;
                }
                if (abs(a) < 1e-12) {
                    if (abs(b) < 1e-12) continue;
                    t = -c / b;
                    if (0 < t && t < 1) tvalues.push(t);
                    continue;
                }
                b2ac = b * b - 4 * c * a;
                sqrtb2ac = math1.sqrt(b2ac);
                if (b2ac < 0) continue;
                t1 = (-b + sqrtb2ac) / (2 * a);
                if (0 < t1 && t1 < 1) tvalues.push(t1);
                t2 = (-b - sqrtb2ac) / (2 * a);
                if (0 < t2 && t2 < 1) tvalues.push(t2);
            }
            var x, y, j = tvalues.length, jlen = j, mt;
            while(j--){
                t = tvalues[j];
                mt = 1 - t;
                bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
                bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
            }
            bounds[0][jlen] = x0;
            bounds[1][jlen] = y0;
            bounds[0][jlen + 1] = x3;
            bounds[1][jlen + 1] = y3;
            bounds[0].length = bounds[1].length = jlen + 2;
            return {
                min: {
                    x: mmin.apply(0, bounds[0]),
                    y: mmin.apply(0, bounds[1])
                },
                max: {
                    x: mmax.apply(0, bounds[0]),
                    y: mmax.apply(0, bounds[1])
                }
            };
        }
        function path2curve(path, path2) {
            var pth = !path2 && paths(path);
            if (!path2 && pth.curve) return pathClone(pth.curve);
            var p = pathToAbsolute(path), p2 = path2 && pathToAbsolute(path2), attrs = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, attrs2 = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, processPath = function(path, d, pcom) {
                var nx, ny;
                if (!path) return [
                    "C",
                    d.x,
                    d.y,
                    d.x,
                    d.y,
                    d.x,
                    d.y
                ];
                !(path[0] in {
                    T: 1,
                    Q: 1
                }) && (d.qx = d.qy = null);
                switch(path[0]){
                    case "M":
                        d.X = path[1];
                        d.Y = path[2];
                        break;
                    case "A":
                        path = [
                            "C"
                        ].concat(a2c.apply(0, [
                            d.x,
                            d.y
                        ].concat(path.slice(1))));
                        break;
                    case "S":
                        if (pcom == "C" || pcom == "S") {
                            nx = d.x * 2 - d.bx; // And reflect the previous
                            ny = d.y * 2 - d.by; // command's control point relative to the current point.
                        } else {
                            nx = d.x;
                            ny = d.y;
                        }
                        path = [
                            "C",
                            nx,
                            ny
                        ].concat(path.slice(1));
                        break;
                    case "T":
                        if (pcom == "Q" || pcom == "T") {
                            d.qx = d.x * 2 - d.qx; // And make a reflection similar
                            d.qy = d.y * 2 - d.qy; // to case "S".
                        } else {
                            d.qx = d.x;
                            d.qy = d.y;
                        }
                        path = [
                            "C"
                        ].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                        break;
                    case "Q":
                        d.qx = path[1];
                        d.qy = path[2];
                        path = [
                            "C"
                        ].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                        break;
                    case "L":
                        path = [
                            "C"
                        ].concat(l2c(d.x, d.y, path[1], path[2]));
                        break;
                    case "H":
                        path = [
                            "C"
                        ].concat(l2c(d.x, d.y, path[1], d.y));
                        break;
                    case "V":
                        path = [
                            "C"
                        ].concat(l2c(d.x, d.y, d.x, path[1]));
                        break;
                    case "Z":
                        path = [
                            "C"
                        ].concat(l2c(d.x, d.y, d.X, d.Y));
                        break;
                }
                return path;
            }, fixArc = function(pp, i) {
                if (pp[i].length > 7) {
                    pp[i].shift();
                    var pi = pp[i];
                    while(pi.length){
                        pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
                        p2 && (pcoms2[i] = "A"); // the same as above
                        pp.splice(i++, 0, [
                            "C"
                        ].concat(pi.splice(0, 6)));
                    }
                    pp.splice(i, 1);
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            }, fixM = function(path1, path2, a1, a2, i) {
                if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                    path2.splice(i, 0, [
                        "M",
                        a2.x,
                        a2.y
                    ]);
                    a1.bx = 0;
                    a1.by = 0;
                    a1.x = path1[i][1];
                    a1.y = path1[i][2];
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            }, pcoms1 = [], pcoms2 = [], pfirst = "", pcom = ""; // holder for previous path command of original path
            for(var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++){
                p[i] && (pfirst = p[i][0]); // save current path command
                if (pfirst != "C") {
                    pcoms1[i] = pfirst; // Save current path command
                    i && (pcom = pcoms1[i - 1]); // Get previous path command pcom
                }
                p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath
                if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
                // which may produce multiple C:s
                // so we have to make sure that C is also C in original path
                fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1
                if (p2) {
                    p2[i] && (pfirst = p2[i][0]);
                    if (pfirst != "C") {
                        pcoms2[i] = pfirst;
                        i && (pcom = pcoms2[i - 1]);
                    }
                    p2[i] = processPath(p2[i], attrs2, pcom);
                    if (pcoms2[i] != "A" && pfirst == "C") pcoms2[i] = "C";
                    fixArc(p2, i);
                }
                fixM(p, p2, attrs, attrs2, i);
                fixM(p2, p, attrs2, attrs, i);
                var seg = p[i], seg2 = p2 && p2[i], seglen = seg.length, seg2len = p2 && seg2.length;
                attrs.x = seg[seglen - 2];
                attrs.y = seg[seglen - 1];
                attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
                attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
                attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
                attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
                attrs2.x = p2 && seg2[seg2len - 2];
                attrs2.y = p2 && seg2[seg2len - 1];
            }
            if (!p2) pth.curve = pathClone(p);
            return p2 ? [
                p,
                p2
            ] : p;
        }
        function mapPath(path, matrix) {
            if (!matrix) return path;
            var x, y, i, j, ii, jj, pathi;
            path = path2curve(path);
            for(i = 0, ii = path.length; i < ii; i++){
                pathi = path[i];
                for(j = 1, jj = pathi.length; j < jj; j += 2){
                    x = matrix.x(pathi[j], pathi[j + 1]);
                    y = matrix.y(pathi[j], pathi[j + 1]);
                    pathi[j] = x;
                    pathi[j + 1] = y;
                }
            }
            return path;
        }
        // http://schepers.cc/getting-to-the-point
        function catmullRom2bezier(crp, z) {
            var d = [];
            for(var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2){
                var p = [
                    {
                        x: +crp[i - 2],
                        y: +crp[i - 1]
                    },
                    {
                        x: +crp[i],
                        y: +crp[i + 1]
                    },
                    {
                        x: +crp[i + 2],
                        y: +crp[i + 3]
                    },
                    {
                        x: +crp[i + 4],
                        y: +crp[i + 5]
                    }
                ];
                if (z) {
                    if (!i) p[0] = {
                        x: +crp[iLen - 2],
                        y: +crp[iLen - 1]
                    };
                    else if (iLen - 4 == i) p[3] = {
                        x: +crp[0],
                        y: +crp[1]
                    };
                    else if (iLen - 2 == i) {
                        p[2] = {
                            x: +crp[0],
                            y: +crp[1]
                        };
                        p[3] = {
                            x: +crp[2],
                            y: +crp[3]
                        };
                    }
                } else {
                    if (iLen - 4 == i) p[3] = p[2];
                    else if (!i) p[0] = {
                        x: +crp[i],
                        y: +crp[i + 1]
                    };
                }
                d.push([
                    "C",
                    (-p[0].x + 6 * p[1].x + p[2].x) / 6,
                    (-p[0].y + 6 * p[1].y + p[2].y) / 6,
                    (p[1].x + 6 * p[2].x - p[3].x) / 6,
                    (p[1].y + 6 * p[2].y - p[3].y) / 6,
                    p[2].x,
                    p[2].y
                ]);
            }
            return d;
        }
        // export
        Snap.path = paths;
        /*\
     * Snap.path.getTotalLength
     [ method ]
     **
     * Returns the length of the given path in pixels
     **
     - path (string) SVG path string
     **
     = (number) length
    \*/ Snap.path.getTotalLength = getTotalLength;
        /*\
     * Snap.path.getPointAtLength
     [ method ]
     **
     * Returns the coordinates of the point located at the given length along the given path
     **
     - path (string) SVG path string
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/ Snap.path.getPointAtLength = getPointAtLength;
        /*\
     * Snap.path.getSubpath
     [ method ]
     **
     * Returns the subpath of a given path between given start and end lengths
     **
     - path (string) SVG path string
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/ Snap.path.getSubpath = function(path, from, to) {
            if (this.getTotalLength(path) - to < 1e-6) return getSubpathsAtLength(path, from).end;
            var a = getSubpathsAtLength(path, to, 1);
            return from ? getSubpathsAtLength(a, from).end : a;
        };
        /*\
     * Element.getTotalLength
     [ method ]
     **
     * Returns the length of the path in pixels (only works for `path` elements)
     = (number) length
    \*/ elproto.getTotalLength = function() {
            if (this.node.getTotalLength) return this.node.getTotalLength();
        };
        // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?
        /*\
     * Element.getPointAtLength
     [ method ]
     **
     * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
     **
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/ elproto.getPointAtLength = function(length) {
            return getPointAtLength(this.attr("d"), length);
        };
        // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.
        /*\
     * Element.getSubpath
     [ method ]
     **
     * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
     **
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/ elproto.getSubpath = function(from, to) {
            return Snap.path.getSubpath(this.attr("d"), from, to);
        };
        Snap._.box = box;
        /*\
     * Snap.path.findDotsAtSegment
     [ method ]
     **
     * Utility method
     **
     * Finds dot coordinates on the given cubic beziér curve at the given t
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     - t (number) position on the curve (0..1)
     = (object) point information in format:
     o {
     o     x: (number) x coordinate of the point,
     o     y: (number) y coordinate of the point,
     o     m: {
     o         x: (number) x coordinate of the left anchor,
     o         y: (number) y coordinate of the left anchor
     o     },
     o     n: {
     o         x: (number) x coordinate of the right anchor,
     o         y: (number) y coordinate of the right anchor
     o     },
     o     start: {
     o         x: (number) x coordinate of the start of the curve,
     o         y: (number) y coordinate of the start of the curve
     o     },
     o     end: {
     o         x: (number) x coordinate of the end of the curve,
     o         y: (number) y coordinate of the end of the curve
     o     },
     o     alpha: (number) angle of the curve derivative at the point
     o }
    \*/ Snap.path.findDotsAtSegment = findDotsAtSegment;
        /*\
     * Snap.path.bezierBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given cubic beziér curve
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     * or
     - bez (array) array of six points for beziér curve
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/ Snap.path.bezierBBox = bezierBBox;
        /*\
     * Snap.path.isPointInsideBBox
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside bounding box
     - bbox (string) bounding box
     - x (string) x coordinate of the point
     - y (string) y coordinate of the point
     = (boolean) `true` if point is inside
    \*/ Snap.path.isPointInsideBBox = isPointInsideBBox;
        Snap.closest = function(x, y, X, Y) {
            var r = 100, b = box(x - r / 2, y - r / 2, r, r), inside = [], getter = X[0].hasOwnProperty("x") ? function(i) {
                return {
                    x: X[i].x,
                    y: X[i].y
                };
            } : function(i) {
                return {
                    x: X[i],
                    y: Y[i]
                };
            }, found = 0;
            while(r <= 1e6 && !found){
                for(var i = 0, ii = X.length; i < ii; i++){
                    var xy = getter(i);
                    if (isPointInsideBBox(b, xy.x, xy.y)) {
                        found++;
                        inside.push(xy);
                        break;
                    }
                }
                if (!found) {
                    r *= 2;
                    b = box(x - r / 2, y - r / 2, r, r);
                }
            }
            if (r == 1e6) return;
            var len = Infinity, res1;
            for(i = 0, ii = inside.length; i < ii; i++){
                var l = Snap.len(x, y, inside[i].x, inside[i].y);
                if (len > l) {
                    len = l;
                    inside[i].len = l;
                    res1 = inside[i];
                }
            }
            return res1;
        };
        /*\
     * Snap.path.isBBoxIntersect
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if two bounding boxes intersect
     - bbox1 (string) first bounding box
     - bbox2 (string) second bounding box
     = (boolean) `true` if bounding boxes intersect
    \*/ Snap.path.isBBoxIntersect = isBBoxIntersect;
        /*\
     * Snap.path.intersection
     [ method ]
     **
     * Utility method
     **
     * Finds intersections of two paths
     - path1 (string) path string
     - path2 (string) path string
     = (array) dots of intersection
     o [
     o     {
     o         x: (number) x coordinate of the point,
     o         y: (number) y coordinate of the point,
     o         t1: (number) t value for segment of path1,
     o         t2: (number) t value for segment of path2,
     o         segment1: (number) order number for segment of path1,
     o         segment2: (number) order number for segment of path2,
     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
     o     }
     o ]
    \*/ Snap.path.intersection = pathIntersection;
        Snap.path.intersectionNumber = pathIntersectionNumber;
        /*\
     * Snap.path.isPointInside
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside a given closed path.
     *
     * Note: fill mode doesn’t affect the result of this method.
     - path (string) path string
     - x (number) x of the point
     - y (number) y of the point
     = (boolean) `true` if point is inside the path
    \*/ Snap.path.isPointInside = isPointInsidePath;
        /*\
     * Snap.path.getBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given path
     - path (string) path string
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/ Snap.path.getBBox = pathBBox;
        Snap.path.get = getPath;
        /*\
     * Snap.path.toRelative
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into relative values
     - path (string) path string
     = (array) path string
    \*/ Snap.path.toRelative = pathToRelative;
        /*\
     * Snap.path.toAbsolute
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into absolute values
     - path (string) path string
     = (array) path string
    \*/ Snap.path.toAbsolute = pathToAbsolute;
        /*\
     * Snap.path.toCubic
     [ method ]
     **
     * Utility method
     **
     * Converts path to a new path where all segments are cubic beziér curves
     - pathString (string|array) path string or array of segments
     = (array) array of segments
    \*/ Snap.path.toCubic = path2curve;
        /*\
     * Snap.path.map
     [ method ]
     **
     * Transform the path string with the given matrix
     - path (string) path string
     - matrix (object) see @Matrix
     = (string) transformed path string
    \*/ Snap.path.map = mapPath;
        Snap.path.toString = toString;
        Snap.path.clone = pathClone;
    });
    // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    Snap.plugin(function(Snap, Element, Paper, glob) {
        var mmax = Math.max, mmin = Math.min;
        // Set
        var Set = function(items) {
            this.items = [];
            this.bindings = {};
            this.length = 0;
            this.type = "set";
            if (items) {
                for(var i = 0, ii = items.length; i < ii; i++)if (items[i]) {
                    this[this.items.length] = this.items[this.items.length] = items[i];
                    this.length++;
                }
            }
        }, setproto = Set.prototype;
        /*\
     * Set.push
     [ method ]
     **
     * Adds each argument to the current set
     = (object) original element
    \*/ setproto.push = function() {
            var item, len;
            for(var i = 0, ii = arguments.length; i < ii; i++){
                item = arguments[i];
                if (item) {
                    len = this.items.length;
                    this[len] = this.items[len] = item;
                    this.length++;
                }
            }
            return this;
        };
        /*\
     * Set.pop
     [ method ]
     **
     * Removes last element and returns it
     = (object) element
    \*/ setproto.pop = function() {
            this.length && delete this[this.length--];
            return this.items.pop();
        };
        /*\
     * Set.forEach
     [ method ]
     **
     * Executes given function for each element in the set
     *
     * If the function returns `false`, the loop stops running.
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Set object
    \*/ setproto.forEach = function(callback, thisArg) {
            for(var i = 0, ii = this.items.length; i < ii; i++){
                if (callback.call(thisArg, this.items[i], i) === false) return this;
            }
            return this;
        };
        /*\
     * Set.animate
     [ method ]
     **
     * Animates each element in set in sync.
     *
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     * or
     - animation (array) array of animation parameter for each element in set in format `[attrs, duration, easing, callback]`
     > Usage
     | // animate all elements in set to radius 10
     | set.animate({r: 10}, 500, mina.easein);
     | // or
     | // animate first element to radius 10, but second to radius 20 and in different time
     | set.animate([{r: 10}, 500, mina.easein], [{r: 20}, 1500, mina.easein]);
     = (Element) the current element
    \*/ setproto.animate = function(attrs, ms, easing, callback) {
            if (typeof easing == "function" && !easing.length) {
                callback = easing;
                easing = mina.linear;
            }
            if (attrs instanceof Snap._.Animation) {
                callback = attrs.callback;
                easing = attrs.easing;
                ms = easing.dur;
                attrs = attrs.attr;
            }
            var args = arguments;
            if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) var each = true;
            var begin, handler = function() {
                if (begin) this.b = begin;
                else begin = this.b;
            }, cb = 0, set = this, callbacker = callback && function() {
                if (++cb == set.length) callback.call(this);
            };
            return this.forEach(function(el, i) {
                eve1.once("snap.animcreated." + el.id, handler);
                if (each) args[i] && el.animate.apply(el, args[i]);
                else el.animate(attrs, ms, easing, callbacker);
            });
        };
        /*\
     * Set.remove
     [ method ]
     **
     * Removes all children of the set.
     *
     = (object) Set object
    \*/ setproto.remove = function() {
            while(this.length)this.pop().remove();
            return this;
        };
        /*\
     * Set.bind
     [ method ]
     **
     * Specifies how to handle a specific attribute when applied
     * to a set.
     *
     **
     - attr (string) attribute name
     - callback (function) function to run
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     - eattr (string) attribute on the element to bind the attribute to
     = (object) Set object
    \*/ setproto.bind = function(attr, a, b) {
            var data = {};
            if (typeof a == "function") this.bindings[attr] = a;
            else {
                var aname = b || attr;
                this.bindings[attr] = function(v) {
                    data[aname] = v;
                    a.attr(data);
                };
            }
            return this;
        };
        /*\
     * Set.attr
     [ method ]
     **
     * Equivalent of @Element.attr.
     = (object) Set object
    \*/ setproto.attr = function(value) {
            var unbound = {};
            for(var k in value)if (this.bindings[k]) this.bindings[k](value[k]);
            else unbound[k] = value[k];
            for(var i = 0, ii = this.items.length; i < ii; i++)this.items[i].attr(unbound);
            return this;
        };
        /*\
     * Set.clear
     [ method ]
     **
     * Removes all elements from the set
    \*/ setproto.clear = function() {
            while(this.length)this.pop();
        };
        /*\
     * Set.splice
     [ method ]
     **
     * Removes range of elements from the set
     **
     - index (number) position of the deletion
     - count (number) number of element to remove
     - insertion… (object) #optional elements to insert
     = (object) set elements that were deleted
    \*/ setproto.splice = function(index, count, insertion) {
            index = index < 0 ? mmax(this.length + index, 0) : index;
            count = mmax(0, mmin(this.length - index, count));
            var tail = [], todel = [], args = [], i;
            for(i = 2; i < arguments.length; i++)args.push(arguments[i]);
            for(i = 0; i < count; i++)todel.push(this[index + i]);
            for(; i < this.length - index; i++)tail.push(this[index + i]);
            var arglen = args.length;
            for(i = 0; i < arglen + tail.length; i++)this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
            i = this.items.length = this.length -= count - arglen;
            while(this[i])delete this[i++];
            return new Set(todel);
        };
        /*\
     * Set.exclude
     [ method ]
     **
     * Removes given element from the set
     **
     - element (object) element to remove
     = (boolean) `true` if object was found and removed from the set
    \*/ setproto.exclude = function(el) {
            for(var i = 0, ii = this.length; i < ii; i++)if (this[i] == el) {
                this.splice(i, 1);
                return true;
            }
            return false;
        };
        /*\
     * Set.insertAfter
     [ method ]
     **
     * Inserts set elements after given element.
     **
     - element (object) set will be inserted after this element
     = (object) Set object
    \*/ setproto.insertAfter = function(el) {
            var i = this.items.length;
            while(i--)this.items[i].insertAfter(el);
            return this;
        };
        /*\
     * Set.getBBox
     [ method ]
     **
     * Union of all bboxes of the set. See @Element.getBBox.
     = (object) bounding box descriptor. See @Element.getBBox.
    \*/ setproto.getBBox = function() {
            var x = [], y = [], x2 = [], y2 = [];
            for(var i = this.items.length; i--;)if (!this.items[i].removed) {
                var box = this.items[i].getBBox();
                x.push(box.x);
                y.push(box.y);
                x2.push(box.x + box.width);
                y2.push(box.y + box.height);
            }
            x = mmin.apply(0, x);
            y = mmin.apply(0, y);
            x2 = mmax.apply(0, x2);
            y2 = mmax.apply(0, y2);
            return {
                x: x,
                y: y,
                x2: x2,
                y2: y2,
                width: x2 - x,
                height: y2 - y,
                cx: x + (x2 - x) / 2,
                cy: y + (y2 - y) / 2
            };
        };
        /*\
     * Set.insertAfter
     [ method ]
     **
     * Creates a clone of the set.
     **
     = (object) New Set object
    \*/ setproto.clone = function(s) {
            s = new Set;
            for(var i = 0, ii = this.items.length; i < ii; i++)s.push(this.items[i].clone());
            return s;
        };
        setproto.toString = function() {
            return "Snap\u2018s set";
        };
        setproto.type = "set";
        // export
        /*\
     * Snap.Set
     [ property ]
     **
     * Set constructor.
    \*/ Snap.Set = Set;
        /*\
     * Snap.set
     [ method ]
     **
     * Creates a set and fills it with list of arguments.
     **
     = (object) New Set object
     | var r = paper.rect(0, 0, 10, 10),
     |     s1 = Snap.set(), // empty set
     |     s2 = Snap.set(r, paper.circle(100, 100, 20)); // prefilled set
    \*/ Snap.set = function() {
            var set = new Set;
            if (arguments.length) set.push.apply(set, Array.prototype.slice.call(arguments, 0));
            return set;
        };
    });
    // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    Snap.plugin(function(Snap, Element, Paper, glob) {
        var names = {}, reUnit = /[%a-z]+$/i, Str = String;
        names.stroke = names.fill = "colour";
        function getEmpty(item) {
            var l = item[0];
            switch(l.toLowerCase()){
                case "t":
                    return [
                        l,
                        0,
                        0
                    ];
                case "m":
                    return [
                        l,
                        1,
                        0,
                        0,
                        1,
                        0,
                        0
                    ];
                case "r":
                    if (item.length == 4) return [
                        l,
                        0,
                        item[2],
                        item[3]
                    ];
                    else return [
                        l,
                        0
                    ];
                case "s":
                    if (item.length == 5) return [
                        l,
                        1,
                        1,
                        item[3],
                        item[4]
                    ];
                    else if (item.length == 3) return [
                        l,
                        1,
                        1
                    ];
                    else return [
                        l,
                        1
                    ];
            }
        }
        function equaliseTransform(t1, t2, getBBox) {
            t1 = t1 || new Snap.Matrix;
            t2 = t2 || new Snap.Matrix;
            t1 = Snap.parseTransformString(t1.toTransformString()) || [];
            t2 = Snap.parseTransformString(t2.toTransformString()) || [];
            var maxlength = Math.max(t1.length, t2.length), from = [], to = [], i = 0, j, jj, tt1, tt2;
            for(; i < maxlength; i++){
                tt1 = t1[i] || getEmpty(t2[i]);
                tt2 = t2[i] || getEmpty(tt1);
                if (tt1[0] != tt2[0] || tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) || tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])) {
                    t1 = Snap._.transform2matrix(t1, getBBox());
                    t2 = Snap._.transform2matrix(t2, getBBox());
                    from = [
                        [
                            "m",
                            t1.a,
                            t1.b,
                            t1.c,
                            t1.d,
                            t1.e,
                            t1.f
                        ]
                    ];
                    to = [
                        [
                            "m",
                            t2.a,
                            t2.b,
                            t2.c,
                            t2.d,
                            t2.e,
                            t2.f
                        ]
                    ];
                    break;
                }
                from[i] = [];
                to[i] = [];
                for(j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++){
                    j in tt1 && (from[i][j] = tt1[j]);
                    j in tt2 && (to[i][j] = tt2[j]);
                }
            }
            return {
                from: path2array(from),
                to: path2array(to),
                f: getPath(from)
            };
        }
        function getNumber(val) {
            return val;
        }
        function getUnit(unit) {
            return function(val) {
                return +val.toFixed(3) + unit;
            };
        }
        function getViewBox(val) {
            return val.join(" ");
        }
        function getColour(clr) {
            return Snap.rgb(clr[0], clr[1], clr[2], clr[3]);
        }
        function getPath(path) {
            var k = 0, i, ii, j, jj, out, a, b = [];
            for(i = 0, ii = path.length; i < ii; i++){
                out = "[";
                a = [
                    '"' + path[i][0] + '"'
                ];
                for(j = 1, jj = path[i].length; j < jj; j++)a[j] = "val[" + k++ + "]";
                out += a + "]";
                b[i] = out;
            }
            return Function("val", "return Snap.path.toString.call([" + b + "])");
        }
        function path2array(path) {
            var out = [];
            for(var i = 0, ii = path.length; i < ii; i++)for(var j = 1, jj = path[i].length; j < jj; j++)out.push(path[i][j]);
            return out;
        }
        function isNumeric(obj) {
            return isFinite(obj);
        }
        function arrayEqual(arr1, arr2) {
            if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) return false;
            return arr1.toString() == arr2.toString();
        }
        Element.prototype.equal = function(name, b) {
            return eve1("snap.util.equal", this, name, b).firstDefined();
        };
        eve1.on("snap.util.equal", function(name, b) {
            var A, B, a = Str(this.attr(name) || ""), el = this;
            if (names[name] == "colour") {
                A = Snap.color(a);
                B = Snap.color(b);
                return {
                    from: [
                        A.r,
                        A.g,
                        A.b,
                        A.opacity
                    ],
                    to: [
                        B.r,
                        B.g,
                        B.b,
                        B.opacity
                    ],
                    f: getColour
                };
            }
            if (name == "viewBox") {
                A = this.attr(name).vb.split(" ").map(Number);
                B = b.split(" ").map(Number);
                return {
                    from: A,
                    to: B,
                    f: getViewBox
                };
            }
            if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
                if (typeof b == "string") b = Str(b).replace(/\.{3}|\u2026/g, a);
                a = this.matrix;
                if (!Snap._.rgTransform.test(b)) b = Snap._.transform2matrix(Snap._.svgTransform2string(b), this.getBBox());
                else b = Snap._.transform2matrix(b, this.getBBox());
                return equaliseTransform(a, b, function() {
                    return el.getBBox(1);
                });
            }
            if (name == "d" || name == "path") {
                A = Snap.path.toCubic(a, b);
                return {
                    from: path2array(A[0]),
                    to: path2array(A[1]),
                    f: getPath(A[0])
                };
            }
            if (name == "points") {
                A = Str(a).split(Snap._.separator);
                B = Str(b).split(Snap._.separator);
                return {
                    from: A,
                    to: B,
                    f: function(val) {
                        return val;
                    }
                };
            }
            if (isNumeric(a) && isNumeric(b)) return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getNumber
            };
            var aUnit = a.match(reUnit), bUnit = Str(b).match(reUnit);
            if (aUnit && arrayEqual(aUnit, bUnit)) return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getUnit(aUnit)
            };
            else return {
                from: this.asPX(name),
                to: this.asPX(name, b),
                f: getNumber
            };
        });
    });
    // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
    // 
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    // 
    // http://www.apache.org/licenses/LICENSE-2.0
    // 
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    Snap.plugin(function(Snap, Element, Paper, glob) {
        var elproto = Element.prototype, has = "hasOwnProperty", supportsTouch = "createTouch" in glob.doc, events = [
            "click",
            "dblclick",
            "mousedown",
            "mousemove",
            "mouseout",
            "mouseover",
            "mouseup",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel"
        ], touchMap = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, getScroll = function(xy, el) {
            var name = xy == "y" ? "scrollTop" : "scrollLeft", doc = el && el.node ? el.node.ownerDocument : glob.doc;
            return doc[name in doc.documentElement ? "documentElement" : "body"][name];
        }, preventDefault = function() {
            this.returnValue = false;
        }, preventTouch = function() {
            return this.originalEvent.preventDefault();
        }, stopPropagation = function() {
            this.cancelBubble = true;
        }, stopTouch = function() {
            return this.originalEvent.stopPropagation();
        }, addEvent = function(obj, type, fn, element) {
            var realName = supportsTouch && touchMap[type] ? touchMap[type] : type, f = function(e) {
                var scrollY = getScroll("y", element), scrollX = getScroll("x", element);
                if (supportsTouch && touchMap[has](type)) {
                    for(var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++)if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
                        var olde = e;
                        e = e.targetTouches[i];
                        e.originalEvent = olde;
                        e.preventDefault = preventTouch;
                        e.stopPropagation = stopTouch;
                        break;
                    }
                }
                var x = e.clientX + scrollX, y = e.clientY + scrollY;
                return fn.call(element, e, x, y);
            };
            if (type !== realName) obj.addEventListener(type, f, false);
            obj.addEventListener(realName, f, false);
            return function() {
                if (type !== realName) obj.removeEventListener(type, f, false);
                obj.removeEventListener(realName, f, false);
                return true;
            };
        }, drag = [], dragMove = function(e) {
            var x = e.clientX, y = e.clientY, scrollY = getScroll("y"), scrollX = getScroll("x"), dragi, j = drag.length;
            while(j--){
                dragi = drag[j];
                if (supportsTouch) {
                    var i = e.touches && e.touches.length, touch;
                    while(i--){
                        touch = e.touches[i];
                        if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
                            x = touch.clientX;
                            y = touch.clientY;
                            (e.originalEvent ? e.originalEvent : e).preventDefault();
                            break;
                        }
                    }
                } else e.preventDefault();
                var node = dragi.el.node, o, next = node.nextSibling, parent = node.parentNode, display = node.style.display;
                // glob.win.opera && parent.removeChild(node);
                // node.style.display = "none";
                // o = dragi.el.paper.getElementByPoint(x, y);
                // node.style.display = display;
                // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
                // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
                x += scrollX;
                y += scrollY;
                eve1("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
            }
        }, dragUp = function(e) {
            Snap.unmousemove(dragMove).unmouseup(dragUp);
            var i = drag.length, dragi;
            while(i--){
                dragi = drag[i];
                dragi.el._drag = {};
                eve1("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
                eve1.off("snap.drag.*." + dragi.el.id);
            }
            drag = [];
        };
        /*\
     * Element.click
     [ method ]
     **
     * Adds a click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.unclick
     [ method ]
     **
     * Removes a click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.dblclick
     [ method ]
     **
     * Adds a double click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.undblclick
     [ method ]
     **
     * Removes a double click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.mousedown
     [ method ]
     **
     * Adds a mousedown event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.unmousedown
     [ method ]
     **
     * Removes a mousedown event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.mousemove
     [ method ]
     **
     * Adds a mousemove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.unmousemove
     [ method ]
     **
     * Removes a mousemove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.mouseout
     [ method ]
     **
     * Adds a mouseout event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.unmouseout
     [ method ]
     **
     * Removes a mouseout event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.mouseover
     [ method ]
     **
     * Adds a mouseover event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.unmouseover
     [ method ]
     **
     * Removes a mouseover event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.mouseup
     [ method ]
     **
     * Adds a mouseup event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.unmouseup
     [ method ]
     **
     * Removes a mouseup event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.touchstart
     [ method ]
     **
     * Adds a touchstart event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.untouchstart
     [ method ]
     **
     * Removes a touchstart event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.touchmove
     [ method ]
     **
     * Adds a touchmove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.untouchmove
     [ method ]
     **
     * Removes a touchmove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.touchend
     [ method ]
     **
     * Adds a touchend event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.untouchend
     [ method ]
     **
     * Removes a touchend event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.touchcancel
     [ method ]
     **
     * Adds a touchcancel event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ /*\
     * Element.untouchcancel
     [ method ]
     **
     * Removes a touchcancel event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/ for(var i = events.length; i--;)(function(eventName) {
            Snap[eventName] = elproto[eventName] = function(fn, scope) {
                if (Snap.is(fn, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: eventName,
                        f: fn,
                        unbind: addEvent(this.node || document, eventName, fn, scope || this)
                    });
                } else {
                    for(var i = 0, ii = this.events.length; i < ii; i++)if (this.events[i].name == eventName) try {
                        this.events[i].f.call(this);
                    } catch (e) {}
                }
                return this;
            };
            Snap["un" + eventName] = elproto["un" + eventName] = function(fn) {
                var events = this.events || [], l = events.length;
                while(l--)if (events[l].name == eventName && (events[l].f == fn || !fn)) {
                    events[l].unbind();
                    events.splice(l, 1);
                    !events.length && delete this.events;
                    return this;
                }
                return this;
            };
        })(events[i]);
        /*\
     * Element.hover
     [ method ]
     **
     * Adds hover event handlers to the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     - icontext (object) #optional context for hover in handler
     - ocontext (object) #optional context for hover out handler
     = (object) @Element
    \*/ elproto.hover = function(f_in, f_out, scope_in, scope_out) {
            return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
        };
        /*\
     * Element.unhover
     [ method ]
     **
     * Removes hover event handlers from the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     = (object) @Element
    \*/ elproto.unhover = function(f_in, f_out) {
            return this.unmouseover(f_in).unmouseout(f_out);
        };
        var draggable = [];
        // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
        // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
        // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
        // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?
        /*\
     * Element.drag
     [ method ]
     **
     * Adds event handlers for an element's drag gesture
     **
     - onmove (function) handler for moving
     - onstart (function) handler for drag start
     - onend (function) handler for drag end
     - mcontext (object) #optional context for moving handler
     - scontext (object) #optional context for drag start handler
     - econtext (object) #optional context for drag end handler
     * Additionaly following `drag` events are triggered: `drag.start.<id>` on start, 
     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element 
     * `drag.over.<id>` fires as well.
     *
     * Start event and start handler are called in specified context or in context of the element with following parameters:
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * Move event and move handler are called in specified context or in context of the element with following parameters:
     o dx (number) shift by x from the start point
     o dy (number) shift by y from the start point
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * End event and end handler are called in specified context or in context of the element with following parameters:
     o event (object) DOM event object
     = (object) @Element
    \*/ elproto.drag = function(onmove, onstart, onend, move_scope, start_scope, end_scope) {
            var el = this;
            if (!arguments.length) {
                var origTransform;
                return el.drag(function(dx, dy) {
                    this.attr({
                        transform: origTransform + (origTransform ? "T" : "t") + [
                            dx,
                            dy
                        ]
                    });
                }, function() {
                    origTransform = this.transform().local;
                });
            }
            function start(e, x, y) {
                (e.originalEvent || e).preventDefault();
                el._drag.x = x;
                el._drag.y = y;
                el._drag.id = e.identifier;
                !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
                drag.push({
                    el: el,
                    move_scope: move_scope,
                    start_scope: start_scope,
                    end_scope: end_scope
                });
                onstart && eve1.on("snap.drag.start." + el.id, onstart);
                onmove && eve1.on("snap.drag.move." + el.id, onmove);
                onend && eve1.on("snap.drag.end." + el.id, onend);
                eve1("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
            }
            function init(e, x, y) {
                eve1("snap.draginit." + el.id, el, e, x, y);
            }
            eve1.on("snap.draginit." + el.id, start);
            el._drag = {};
            draggable.push({
                el: el,
                start: start,
                init: init
            });
            el.mousedown(init);
            return el;
        };
        /*
     * Element.onDragOver
     [ method ]
     **
     * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
     - f (function) handler for event, first argument would be the element you are dragging over
    \*/ // elproto.onDragOver = function (f) {
        //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
        // };
        /*\
     * Element.undrag
     [ method ]
     **
     * Removes all drag event handlers from the given element
    \*/ elproto.undrag = function() {
            var i = draggable.length;
            while(i--)if (draggable[i].el == this) {
                this.unmousedown(draggable[i].init);
                draggable.splice(i, 1);
                eve1.unbind("snap.drag.*." + this.id);
                eve1.unbind("snap.draginit." + this.id);
            }
            !draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
            return this;
        };
    });
    // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    Snap.plugin(function(Snap, Element, Paper, glob) {
        var elproto = Element.prototype, pproto = Paper.prototype, rgurl = /^\s*url\((.+)\)/, Str = String, $ = Snap._.$;
        Snap.filter = {};
        /*\
     * Paper.filter
     [ method ]
     **
     * Creates a `<filter>` element
     **
     - filstr (string) SVG fragment of filter provided as a string
     = (object) @Element
     * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
     > Usage
     | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/ pproto.filter = function(filstr) {
            var paper = this;
            if (paper.type != "svg") paper = paper.paper;
            var f = Snap.parse(Str(filstr)), id = Snap._.id(), width = paper.node.offsetWidth, height = paper.node.offsetHeight, filter = $("filter");
            $(filter, {
                id: id,
                filterUnits: "userSpaceOnUse"
            });
            filter.appendChild(f.node);
            paper.defs.appendChild(filter);
            return new Element(filter);
        };
        eve1.on("snap.util.getattr.filter", function() {
            eve1.stop();
            var p = $(this.node, "filter");
            if (p) {
                var match = Str(p).match(rgurl);
                return match && Snap.select(match[1]);
            }
        });
        eve1.on("snap.util.attr.filter", function(value) {
            if (value instanceof Element && value.type == "filter") {
                eve1.stop();
                var id = value.node.id;
                if (!id) {
                    $(value.node, {
                        id: value.id
                    });
                    id = value.id;
                }
                $(this.node, {
                    filter: Snap.url(id)
                });
            }
            if (!value || value == "none") {
                eve1.stop();
                this.node.removeAttribute("filter");
            }
        });
        /*\
     * Snap.filter.blur
     [ method ]
     **
     * Returns an SVG markup string for the blur filter
     **
     - x (number) amount of horizontal blur, in pixels
     - y (number) #optional amount of vertical blur, in pixels
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.blur(5, 10)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/ Snap.filter.blur = function(x, y) {
            if (x == null) x = 2;
            var def = y == null ? x : [
                x,
                y
            ];
            return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
                def: def
            });
        };
        Snap.filter.blur.toString = function() {
            return this();
        };
        /*\
     * Snap.filter.shadow
     [ method ]
     **
     * Returns an SVG markup string for the shadow filter
     **
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - blur (number) #optional amount of blur
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * which makes blur default to `4`. Or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - opacity (number) #optional `0..1` opacity of the shadow
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.shadow(0, 2, .3)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/ Snap.filter.shadow = function(dx, dy, blur, color, opacity) {
            if (opacity == null) {
                if (color == null) {
                    opacity = blur;
                    blur = 4;
                    color = "#000";
                } else {
                    opacity = color;
                    color = blur;
                    blur = 4;
                }
            }
            if (blur == null) blur = 4;
            if (opacity == null) opacity = 1;
            if (dx == null) {
                dx = 0;
                dy = 2;
            }
            if (dy == null) dy = dx;
            color = Snap.color(color);
            return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: color,
                dx: dx,
                dy: dy,
                blur: blur,
                opacity: opacity
            });
        };
        Snap.filter.shadow.toString = function() {
            return this();
        };
        /*\
     * Snap.filter.grayscale
     [ method ]
     **
     * Returns an SVG markup string for the grayscale filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/ Snap.filter.grayscale = function(amount) {
            if (amount == null) amount = 1;
            return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: 0.2126 + 0.7874 * (1 - amount),
                b: 0.7152 - 0.7152 * (1 - amount),
                c: 0.0722 - 0.0722 * (1 - amount),
                d: 0.2126 - 0.2126 * (1 - amount),
                e: 0.7152 + 0.2848 * (1 - amount),
                f: 0.0722 - 0.0722 * (1 - amount),
                g: 0.2126 - 0.2126 * (1 - amount),
                h: 0.0722 + 0.9278 * (1 - amount)
            });
        };
        Snap.filter.grayscale.toString = function() {
            return this();
        };
        /*\
     * Snap.filter.sepia
     [ method ]
     **
     * Returns an SVG markup string for the sepia filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/ Snap.filter.sepia = function(amount) {
            if (amount == null) amount = 1;
            return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: 0.393 + 0.607 * (1 - amount),
                b: 0.769 - 0.769 * (1 - amount),
                c: 0.189 - 0.189 * (1 - amount),
                d: 0.349 - 0.349 * (1 - amount),
                e: 0.686 + 0.314 * (1 - amount),
                f: 0.168 - 0.168 * (1 - amount),
                g: 0.272 - 0.272 * (1 - amount),
                h: 0.534 - 0.534 * (1 - amount),
                i: 0.131 + 0.869 * (1 - amount)
            });
        };
        Snap.filter.sepia.toString = function() {
            return this();
        };
        /*\
     * Snap.filter.saturate
     [ method ]
     **
     * Returns an SVG markup string for the saturate filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/ Snap.filter.saturate = function(amount) {
            if (amount == null) amount = 1;
            return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - amount
            });
        };
        Snap.filter.saturate.toString = function() {
            return this();
        };
        /*\
     * Snap.filter.hueRotate
     [ method ]
     **
     * Returns an SVG markup string for the hue-rotate filter
     **
     - angle (number) angle of rotation
     = (string) filter representation
    \*/ Snap.filter.hueRotate = function(angle) {
            angle = angle || 0;
            return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: angle
            });
        };
        Snap.filter.hueRotate.toString = function() {
            return this();
        };
        /*\
     * Snap.filter.invert
     [ method ]
     **
     * Returns an SVG markup string for the invert filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/ Snap.filter.invert = function(amount) {
            if (amount == null) amount = 1;
            //        <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB"/>
            return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: amount,
                amount2: 1 - amount
            });
        };
        Snap.filter.invert.toString = function() {
            return this();
        };
        /*\
     * Snap.filter.brightness
     [ method ]
     **
     * Returns an SVG markup string for the brightness filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/ Snap.filter.brightness = function(amount) {
            if (amount == null) amount = 1;
            return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: amount
            });
        };
        Snap.filter.brightness.toString = function() {
            return this();
        };
        /*\
     * Snap.filter.contrast
     [ method ]
     **
     * Returns an SVG markup string for the contrast filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/ Snap.filter.contrast = function(amount) {
            if (amount == null) amount = 1;
            return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: amount,
                amount2: .5 - amount / 2
            });
        };
        Snap.filter.contrast.toString = function() {
            return this();
        };
    });
    // Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var box = Snap._.box, is = Snap.is, firstLetter = /^[^a-z]*([tbmlrc])/i, toString = function() {
            return "T" + this.dx + "," + this.dy;
        };
        /*\
     * Element.getAlign
     [ method ]
     **
     * Returns shift needed to align the element relatively to given element.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object|string) Object in format `{dx: , dy: }` also has a string representation as a transformation string
     > Usage
     | el.transform(el.getAlign(el2, "top"));
     * or
     | var dy = el.getAlign(el2, "top").dy;
    \*/ Element.prototype.getAlign = function(el, way) {
            if (way == null && is(el, "string")) {
                way = el;
                el = null;
            }
            el = el || this.paper;
            var bx = el.getBBox ? el.getBBox() : box(el), bb = this.getBBox(), out = {};
            way = way && way.match(firstLetter);
            way = way ? way[1].toLowerCase() : "c";
            switch(way){
                case "t":
                    out.dx = 0;
                    out.dy = bx.y - bb.y;
                    break;
                case "b":
                    out.dx = 0;
                    out.dy = bx.y2 - bb.y2;
                    break;
                case "m":
                    out.dx = 0;
                    out.dy = bx.cy - bb.cy;
                    break;
                case "l":
                    out.dx = bx.x - bb.x;
                    out.dy = 0;
                    break;
                case "r":
                    out.dx = bx.x2 - bb.x2;
                    out.dy = 0;
                    break;
                default:
                    out.dx = bx.cx - bb.cx;
                    out.dy = 0;
                    break;
            }
            out.toString = toString;
            return out;
        };
        /*\
     * Element.align
     [ method ]
     **
     * Aligns the element relatively to given one via transformation.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object) this element
     > Usage
     | el.align(el2, "top");
     * or
     | el.align("middle");
    \*/ Element.prototype.align = function(el, way) {
            return this.transform("..." + this.getAlign(el, way));
        };
    });
    // Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    // http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.
    Snap.plugin(function(Snap, Element, Paper, glob) {
        // Colours are from https://www.materialui.co
        var red = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000", pink = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162", purple = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF", deeppurple = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA", indigo = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE", blue = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF", lightblue = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA", cyan = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4", teal = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5", green = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853", lightgreen = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17", lime = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00", yellow = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600", amber = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00", orange = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00", deeporange = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00", brown = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723", grey = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121", bluegrey = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
        /*\
     * Snap.mui
     [ property ]
     **
     * Contain Material UI colours.
     | Snap().rect(0, 0, 10, 10).attr({fill: Snap.mui.deeppurple, stroke: Snap.mui.amber[600]});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/ Snap.mui = {};
        /*\
     * Snap.flat
     [ property ]
     **
     * Contain Flat UI colours.
     | Snap().rect(0, 0, 10, 10).attr({fill: Snap.flat.carrot, stroke: Snap.flat.wetasphalt});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/ Snap.flat = {};
        function saveColor(colors) {
            colors = colors.split(/(?=#)/);
            var color = new String(colors[5]);
            color[50] = colors[0];
            color[100] = colors[1];
            color[200] = colors[2];
            color[300] = colors[3];
            color[400] = colors[4];
            color[500] = colors[5];
            color[600] = colors[6];
            color[700] = colors[7];
            color[800] = colors[8];
            color[900] = colors[9];
            if (colors[10]) {
                color.A100 = colors[10];
                color.A200 = colors[11];
                color.A400 = colors[12];
                color.A700 = colors[13];
            }
            return color;
        }
        Snap.mui.red = saveColor(red);
        Snap.mui.pink = saveColor(pink);
        Snap.mui.purple = saveColor(purple);
        Snap.mui.deeppurple = saveColor(deeppurple);
        Snap.mui.indigo = saveColor(indigo);
        Snap.mui.blue = saveColor(blue);
        Snap.mui.lightblue = saveColor(lightblue);
        Snap.mui.cyan = saveColor(cyan);
        Snap.mui.teal = saveColor(teal);
        Snap.mui.green = saveColor(green);
        Snap.mui.lightgreen = saveColor(lightgreen);
        Snap.mui.lime = saveColor(lime);
        Snap.mui.yellow = saveColor(yellow);
        Snap.mui.amber = saveColor(amber);
        Snap.mui.orange = saveColor(orange);
        Snap.mui.deeporange = saveColor(deeporange);
        Snap.mui.brown = saveColor(brown);
        Snap.mui.grey = saveColor(grey);
        Snap.mui.bluegrey = saveColor(bluegrey);
        Snap.flat.turquoise = "#1abc9c";
        Snap.flat.greensea = "#16a085";
        Snap.flat.sunflower = "#f1c40f";
        Snap.flat.orange = "#f39c12";
        Snap.flat.emerland = "#2ecc71";
        Snap.flat.nephritis = "#27ae60";
        Snap.flat.carrot = "#e67e22";
        Snap.flat.pumpkin = "#d35400";
        Snap.flat.peterriver = "#3498db";
        Snap.flat.belizehole = "#2980b9";
        Snap.flat.alizarin = "#e74c3c";
        Snap.flat.pomegranate = "#c0392b";
        Snap.flat.amethyst = "#9b59b6";
        Snap.flat.wisteria = "#8e44ad";
        Snap.flat.clouds = "#ecf0f1";
        Snap.flat.silver = "#bdc3c7";
        Snap.flat.wetasphalt = "#34495e";
        Snap.flat.midnightblue = "#2c3e50";
        Snap.flat.concrete = "#95a5a6";
        Snap.flat.asbestos = "#7f8c8d";
        /*\
     * Snap.importMUIColors
     [ method ]
     **
     * Imports Material UI colours into global object.
     | Snap.importMUIColors();
     | Snap().rect(0, 0, 10, 10).attr({fill: deeppurple, stroke: amber[600]});
     # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
    \*/ Snap.importMUIColors = function() {
            for(var color in Snap.mui)if (Snap.mui.hasOwnProperty(color)) window1[color] = Snap.mui[color];
        };
    });
    return Snap;
});

},{"96721bd76d4d56e1":"fz1iv"}],"fz1iv":[function(require,module,exports,__globalThis) {
// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.5.4 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\
(function(glob) {
    var version = "0.5.4", has = "hasOwnProperty", separator = /[\.\/]/, comaseparator = /\s*,\s*/, wildcard = "*", numsort = function(a, b) {
        return a - b;
    }, current_event, stop, events = {
        n: {}
    }, firstDefined = function() {
        for(var i = 0, ii = this.length; i < ii; i++){
            if (typeof this[i] != "undefined") return this[i];
        }
    }, lastDefined = function() {
        var i = this.length;
        while(--i){
            if (typeof this[i] != "undefined") return this[i];
        }
    }, objtos = Object.prototype.toString, Str = String, isArray = Array.isArray || function(ar) {
        return ar instanceof Array || objtos.call(ar) == "[object Array]";
    }, /*\
     * eve
     [ method ]

     * Fires event with given `name`, given scope and other parameters.

     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers

     = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
    \*/ eve = function(name, scope) {
        var oldstop = stop, args = Array.prototype.slice.call(arguments, 2), listeners = eve.listeners(name), z = 0, l, indexed = [], queue = {}, out = [], ce = current_event;
        out.firstDefined = firstDefined;
        out.lastDefined = lastDefined;
        current_event = name;
        stop = 0;
        for(var i = 0, ii = listeners.length; i < ii; i++)if ("zIndex" in listeners[i]) {
            indexed.push(listeners[i].zIndex);
            if (listeners[i].zIndex < 0) queue[listeners[i].zIndex] = listeners[i];
        }
        indexed.sort(numsort);
        while(indexed[z] < 0){
            l = queue[indexed[z++]];
            out.push(l.apply(scope, args));
            if (stop) {
                stop = oldstop;
                return out;
            }
        }
        for(i = 0; i < ii; i++){
            l = listeners[i];
            if ("zIndex" in l) {
                if (l.zIndex == indexed[z]) {
                    out.push(l.apply(scope, args));
                    if (stop) break;
                    do {
                        z++;
                        l = queue[indexed[z]];
                        l && out.push(l.apply(scope, args));
                        if (stop) break;
                    }while (l);
                } else queue[l.zIndex] = l;
            } else {
                out.push(l.apply(scope, args));
                if (stop) break;
            }
        }
        stop = oldstop;
        current_event = ce;
        return out;
    };
    // Undocumented. Debug only.
    eve._events = events;
    /*\
     * eve.listeners
     [ method ]

     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

     - name (string) name of the event, dot (`.`) or slash (`/`) separated

     = (array) array of event handlers
    \*/ eve.listeners = function(name) {
        var names = isArray(name) ? name : name.split(separator), e = events, item, items, k, i, ii, j, jj, nes, es = [
            e
        ], out = [];
        for(i = 0, ii = names.length; i < ii; i++){
            nes = [];
            for(j = 0, jj = es.length; j < jj; j++){
                e = es[j].n;
                items = [
                    e[names[i]],
                    e[wildcard]
                ];
                k = 2;
                while(k--){
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };
    /*\
     * eve.separator
     [ method ]

     * If for some reasons you don’t like default separators (`.` or `/`) you can specify yours
     * here. Be aware that if you pass a string longer than one character it will be treated as
     * a list of characters.

     - separator (string) new separator. Empty string resets to default: `.` or `/`.
    \*/ eve.separator = function(sep) {
        if (sep) {
            sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
            sep = "[" + sep + "]";
            separator = new RegExp(sep);
        } else separator = /[\.\/]/;
    };
    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     - name (array) if you don’t want to use separators, you can use array of strings
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment.
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt` function will be called before `eatIt`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/ eve.on = function(name, f) {
        if (typeof f != "function") return function() {};
        var names = isArray(name) ? isArray(name[0]) ? name : [
            name
        ] : Str(name).split(comaseparator);
        for(var i = 0, ii = names.length; i < ii; i++)(function(name) {
            var names = isArray(name) ? name : Str(name).split(separator), e = events, exist;
            for(var i = 0, ii = names.length; i < ii; i++){
                e = e.n;
                e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {
                    n: {}
                });
            }
            e.f = e.f || [];
            for(i = 0, ii = e.f.length; i < ii; i++)if (e.f[i] == f) {
                exist = true;
                break;
            }
            !exist && e.f.push(f);
        })(names[i]);
        return function(zIndex) {
            if (+zIndex == +zIndex) f.zIndex = +zIndex;
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/ eve.f = function(event) {
        var attrs = [].slice.call(arguments, 1);
        return function() {
            eve.apply(null, [
                event,
                null
            ].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/ eve.stop = function() {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/ eve.nt = function(subname) {
        var cur = isArray(current_event) ? current_event.join(".") : current_event;
        if (subname) return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
        return cur;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/ eve.nts = function() {
        return isArray(current_event) ? current_event : current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/ /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/ eve.off = eve.unbind = function(name, f) {
        if (!name) {
            eve._events = events = {
                n: {}
            };
            return;
        }
        var names = isArray(name) ? isArray(name[0]) ? name : [
            name
        ] : Str(name).split(comaseparator);
        if (names.length > 1) {
            for(var i = 0, ii = names.length; i < ii; i++)eve.off(names[i], f);
            return;
        }
        names = isArray(name) ? name : Str(name).split(separator);
        var e, key, splice, i, ii, j, jj, cur = [
            events
        ], inodes = [];
        for(i = 0, ii = names.length; i < ii; i++)for(j = 0; j < cur.length; j += splice.length - 2){
            splice = [
                j,
                1
            ];
            e = cur[j].n;
            if (names[i] != wildcard) {
                if (e[names[i]]) {
                    splice.push(e[names[i]]);
                    inodes.unshift({
                        n: e,
                        name: names[i]
                    });
                }
            } else {
                for(key in e)if (e[has](key)) {
                    splice.push(e[key]);
                    inodes.unshift({
                        n: e,
                        name: key
                    });
                }
            }
            cur.splice.apply(cur, splice);
        }
        for(i = 0, ii = cur.length; i < ii; i++){
            e = cur[i];
            while(e.n){
                if (f) {
                    if (e.f) {
                        for(j = 0, jj = e.f.length; j < jj; j++)if (e.f[j] == f) {
                            e.f.splice(j, 1);
                            break;
                        }
                        !e.f.length && delete e.f;
                    }
                    for(key in e.n)if (e.n[has](key) && e.n[key].f) {
                        var funcs = e.n[key].f;
                        for(j = 0, jj = funcs.length; j < jj; j++)if (funcs[j] == f) {
                            funcs.splice(j, 1);
                            break;
                        }
                        !funcs.length && delete e.n[key].f;
                    }
                } else {
                    delete e.f;
                    for(key in e.n)if (e.n[has](key) && e.n[key].f) delete e.n[key].f;
                }
                e = e.n;
            }
        }
        // prune inner nodes in path
        prune: for(i = 0, ii = inodes.length; i < ii; i++){
            e = inodes[i];
            for(key in e.n[e.name].f)continue prune;
            for(key in e.n[e.name].n)continue prune;
            // is empty
            delete e.n[e.name];
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/ eve.once = function(name, f) {
        var f2 = function() {
            eve.off(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/ eve.version = version;
    eve.toString = function() {
        return "You are running Eve " + version;
    };
    glob.eve = eve;
    (0, module.exports) ? module.exports = eve : typeof define === "function" && define.amd ? define("eve", [], function() {
        return eve;
    }) : glob.eve = eve;
})(typeof window != "undefined" ? window : this);

},{}],"lioEB":[function() {},{}],"drgyt":[function(require,module,exports,__globalThis) {
module.exports = require("e048175712301d29").getBundleURL('bLxZJ') + "a.730237ea.jpg" + "?" + Date.now();

},{"e048175712301d29":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"awulB":[function(require,module,exports,__globalThis) {
module.exports = require("a9c51f9a4c50c790").getBundleURL('bLxZJ') + "b.7699e210.jpg" + "?" + Date.now();

},{"a9c51f9a4c50c790":"lgJ39"}],"k4ykc":[function(require,module,exports,__globalThis) {
module.exports = require("106277ca28e16713").getBundleURL('bLxZJ') + "c.a073f5e5.jpg" + "?" + Date.now();

},{"106277ca28e16713":"lgJ39"}],"hGxfZ":[function(require,module,exports,__globalThis) {
module.exports = require("b4d48f9524dbadf9").getBundleURL('bLxZJ') + "d.eb0a30ee.jpg" + "?" + Date.now();

},{"b4d48f9524dbadf9":"lgJ39"}],"crReC":[function(require,module,exports,__globalThis) {
module.exports = require("b0a59da3bdffef97").getBundleURL('bLxZJ') + "e.f595381f.jpg" + "?" + Date.now();

},{"b0a59da3bdffef97":"lgJ39"}],"6L5dF":[function(require,module,exports,__globalThis) {
module.exports = require("fb7c17419a2c1462").getBundleURL('bLxZJ') + "f.99182a58.jpg" + "?" + Date.now();

},{"fb7c17419a2c1462":"lgJ39"}],"33zeU":[function(require,module,exports,__globalThis) {
module.exports = require("49c3d268a12124d8").getBundleURL('bLxZJ') + "blot3.ee922c2a.png" + "?" + Date.now();

},{"49c3d268a12124d8":"lgJ39"}],"scTLQ":[function(require,module,exports,__globalThis) {
module.exports = require("bc272ce89ec3fee5").getBundleURL('bLxZJ') + "dots4.5b49dd2a.png" + "?" + Date.now();

},{"bc272ce89ec3fee5":"lgJ39"}],"cMN13":[function(require,module,exports,__globalThis) {
module.exports = require("d191654bc7e39de5").getBundleURL('bLxZJ') + "harvard.72d1892f.png" + "?" + Date.now();

},{"d191654bc7e39de5":"lgJ39"}],"cEaPA":[function(require,module,exports,__globalThis) {
(function(root, factory) {
    if (typeof define === 'function' && define.amd) // AMD. Register as an anonymous module.
    define([], factory);
    else if (0, module.exports) // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
    else // Browser globals (root is window)
    root.Card = factory();
})(typeof self !== 'undefined' ? self : this, function() {
    class Card {
        constructor(id, el){
            this.id = id;
            this.el = el;
            this.isOpen = false;
            this.timeline = null;
        }
        init() {
            // Get card dimensions
            this.width = this.el.offsetWidth;
            this.height = this.el.offsetHeight;
            this.left = this.el.offsetLeft;
            this.top = this.el.offsetTop;
            // Set initial state
            gsap.set(this.el, {
                x: 0,
                y: 0,
                scale: 1
            });
        }
        openCard(onComplete) {
            if (this.isOpen) return;
            this.isOpen = true;
            // Create timeline for opening animation
            this.timeline = gsap.timeline({
                onComplete: ()=>{
                    if (typeof onComplete === 'function') onComplete();
                }
            });
            // Add animations to timeline
            this.timeline.to(this.el, {
                duration: 0.8,
                ease: 'power4.inOut',
                scale: 1.1,
                y: -20
            }).to(this.el, {
                duration: 0.6,
                ease: 'power2.out',
                scale: 1,
                y: 0
            });
        }
        closeCard(onComplete) {
            if (!this.isOpen) return;
            this.isOpen = false;
            // Create timeline for closing animation
            this.timeline = gsap.timeline({
                onComplete: ()=>{
                    if (typeof onComplete === 'function') onComplete();
                }
            });
            // Add animations to timeline
            this.timeline.to(this.el, {
                duration: 0.6,
                ease: 'power4.inOut',
                scale: 1.1,
                y: -20
            }).to(this.el, {
                duration: 0.8,
                ease: 'power2.out',
                scale: 1,
                y: 0
            });
        }
        hideCard() {
            gsap.to(this.el, {
                duration: 0.5,
                ease: 'power4.out',
                scale: 0.8,
                opacity: 0
            });
        }
        showCard() {
            gsap.to(this.el, {
                duration: 0.5,
                ease: 'power4.out',
                scale: 1,
                opacity: 1
            });
        }
    }
    return Card;
});

},{}],"d8wmm":[function(require,module,exports,__globalThis) {
'use strict';
/**
 * Card.
 */ var Card = function(window1, undefined) {
    /**
   * Enum of CSS selectors.
   */ var SELECTORS = {
        container: '.card__container',
        content: '.card__content',
        clip: '.clip'
    };
    /**
   * Enum of CSS classes.
   */ var CLASSES = {
        containerClosed: 'card__container--closed',
        bodyHidden: 'body--hidden'
    };
    /**
   * Card.
   */ function Card(id, el) {
        this.id = id;
        this._el = el;
        // Get elements.
        this._container = $(this._el).find(SELECTORS.container)[0];
        this._clip = $(this._el).find(SELECTORS.clip)[0];
        this._content = $(this._el).find(SELECTORS.content)[0];
        this.isOpen = false;
        this._TL = null;
    }
    /**
   * Open card.
   * @param {Function} callback The callback `onCardMove`.
   */ Card.prototype.openCard = function(callback) {
        this._TL = new TimelineLite;
        var slideContentDown = this._slideContentDown();
        var clipImageIn = this._clipImageIn();
        var floatContainer = this._floatContainer(callback);
        var clipImageOut = this._clipImageOut();
        var slideContentUp = this._slideContentUp();
        // Compose sequence and use duration to overlap tweens.
        this._TL.add(slideContentDown);
        this._TL.add(clipImageIn, 0);
        this._TL.add(floatContainer, '-=' + clipImageIn.duration() * 0.6);
        this._TL.add(clipImageOut, '-=' + floatContainer.duration() * 0.3);
        this._TL.add(slideContentUp, '-=' + clipImageOut.duration() * 0.6);
        this.isOpen = true;
        return this._TL;
    };
    /**
   * Slide content down.
   * @private
   */ Card.prototype._slideContentDown = function() {
        var tween = TweenLite.to(this._content, 0.8, {
            y: window1.innerHeight,
            ease: Expo.easeInOut
        });
        return tween;
    };
    /**
   * Clip image in.
   * @private
   */ Card.prototype._clipImageIn = function() {
        // Circle.
        var tween = TweenLite.to(this._clip, 0.8, {
            attr: {
                r: 60
            },
            ease: Expo.easeInOut
        });
        return tween;
    };
    /**
   * Float card to final position.
   * @param {Function} callback The callback `onCardMove`.
   * @private
   */ Card.prototype._floatContainer = function(callback) {
        $(document.body).addClass(CLASSES.bodyHidden);
        var TL = new TimelineLite;
        var rect = this._container.getBoundingClientRect();
        var windowW = window1.innerWidth;
        var track = {
            width: 0,
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
        TL.set(this._container, {
            width: rect.width,
            height: rect.height,
            x: rect.left,
            y: rect.top,
            position: 'fixed',
            overflow: 'hidden'
        });
        TL.to([
            this._container,
            track
        ], 2, {
            width: windowW,
            height: '100%',
            x: windowW / 2,
            y: 0,
            xPercent: -50,
            ease: Expo.easeInOut,
            clearProps: 'all',
            className: '-=' + CLASSES.containerClosed,
            onUpdate: callback.bind(this, track)
        });
        return TL;
    };
    /**
   * Clip image out.
   * @private
   */ Card.prototype._clipImageOut = function() {
        // Circle.
        var radius = $(this._clip).attr('r');
        var tween = this._clipImageIn();
        tween.vars.attr.r = radius;
        return tween;
    };
    /**
   * Slide content up.
   * @private
   */ Card.prototype._slideContentUp = function() {
        var tween = TweenLite.to(this._content, 1, {
            y: 0,
            clearProps: 'all',
            ease: Expo.easeInOut
        });
        return tween;
    };
    /**
   * Close card.
   */ Card.prototype.closeCard = function() {
        TweenLite.to(this._container, 0.4, {
            scrollTo: {
                y: 0
            },
            onComplete: (function() {
                $(this._container).css('overflow', 'hidden');
            }).bind(this),
            ease: Power2.easeOut
        });
        this._TL.eventCallback('onReverseComplete', (function() {
            TweenLite.set([
                this._container,
                this._content
            ], {
                clearProps: 'all'
            });
            $(document.body).removeClass(CLASSES.bodyHidden);
            this.isOpen = false;
        }).bind(this));
        return this._TL.reverse();
    };
    /**
   * Hide card, called for all cards except the selected one.
   */ Card.prototype.hideCard = function() {
        var tween = TweenLite.to(this._el, 0.4, {
            scale: 0.8,
            autoAlpha: 0,
            transformOrigin: 'center bottom',
            ease: Expo.easeInOut
        });
        return tween;
    };
    /**
   * Show card, called for all cards except the selected one.
   */ Card.prototype.showCard = function() {
        var tween = TweenLite.to(this._el, 0.5, {
            scale: 1,
            autoAlpha: 1,
            clearProps: 'all',
            ease: Expo.easeInOut
        });
        return tween;
    };
    return Card;
}(window);

},{}],"g2DDQ":[function(require,module,exports,__globalThis) {
"use strict";
/**
 * Demo.
 */ // Remove imports and use global GSAP instance
// import { gsap } from "gsap";
// import { TextAnimator } from './text-animator.js';
var debounce = function(e, t, n) {
    var a;
    return function() {
        var r = this, i = arguments, o = function() {
            a = null, n || e.apply(r, i);
        }, s = n && !a;
        clearTimeout(a), a = setTimeout(o, t || 200), s && e.apply(r, i);
    };
};
// Wait for GSAP to be available
function initializeDemo() {
    if (!window.gsap) {
        requestAnimationFrame(initializeDemo);
        return;
    }
    // DOM elements
    const DOM = {
        menuLinks: [
            ...document.querySelectorAll(".line-link")
        ],
        list: document.querySelectorAll(".list"),
        cover: {
            wrap: document.querySelector(".cover-wrap"),
            outer: document.querySelector(".cover"),
            inner: document.querySelector(".cover__inner")
        },
        content: {
            imgs: [
                ...document.querySelectorAll(".wrapper-jfish")
            ],
            titles: [
                ...document.querySelectorAll(".content__text")
            ]
        },
        menu: document.querySelector(".menu"),
        menuContent: document.querySelector(".menu__content"),
        closeCtrl: document.querySelector(".menu__back"),
        extra: document.querySelectorAll(".menu__tagline, .menu__social-author")
    };
    let menuStatus = {
        isOpen: false,
        isAnimating: false
    };
    // Animation gsap timeline
    const menuTimeline = window.gsap.timeline({
        paused: true,
        onComplete: ()=>menuStatus.isAnimating = false,
        onReverseComplete: ()=>menuStatus.isAnimating = false,
        defaults: {
            duration: 1.2,
            ease: "power4.inOut"
        }
    });
    // Menu expand
    const expandMenu = ()=>{
        if (menuStatus.isAnimating || menuStatus.isOpen) return;
        menuStatus.isAnimating = true;
        menuStatus.isOpen = true;
        menuTimeline.play();
    };
    // Menu collapse
    const collapseMenu = ()=>{
        if (menuStatus.isAnimating || !menuStatus.isOpen) return;
        menuStatus.isAnimating = true;
        menuStatus.isOpen = false;
        menuTimeline.reverse(0);
    };
    // Expand the menu when pressing any of the menu top links...
    DOM.menuLinks.forEach((link)=>{
        link.addEventListener("click", (ev)=>{
            ev.preventDefault();
            expandMenu();
        });
    });
    // Collapse it when pressing the close button
    DOM.closeCtrl.addEventListener("click", (ev)=>{
        ev.preventDefault();
        collapseMenu();
    });
    var demo = function(window1, undefined) {
        /**
         * Enum of CSS selectors.
         */ var SELECTORS = {
            pattern: ".pattern",
            card: ".card",
            cardImage: ".card__image",
            cardClose: ".card__btn-close"
        };
        /**
         * Enum of CSS classes.
         */ var CLASSES = {
            patternHidden: "pattern--hidden",
            polygon: "polygon",
            polygonHidden: "polygon--hidden"
        };
        /**
         * Map of svg paths and points.
         */ var polygonMap = {
            paths: null,
            points: null
        };
        /**
         * Container of Card instances.
         */ var layout = {};
        /**
         * Initialise demo.
         */ function init() {
            // Pause before the animation starts
            setTimeout(function() {
                // Chris Palmer Text Animation
                var l = Snap("#logo");
                setTimeout(function() {
                    // modify this one line below, and see the result !
                    var logoTitle = "Chris Palmer";
                    var logoRandom = "";
                    var logoTitleContainer = l.text(0, "95%", "");
                    var possible = '-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}';
                    logoTitleContainer.attr({
                        fontSize: 100,
                        // fontFamily: "Comfortaa",
                        fontWeight: "800",
                        color: "#212121"
                    });
                    function generateRandomTitle(i, logoRandom) {
                        setTimeout(function() {
                            logoTitleContainer.attr({
                                text: logoRandom
                            });
                        }, i * 125);
                    }
                    for(var i = 0; i < logoTitle.length + 1; i++){
                        logoRandom = logoTitle.substr(0, i);
                        for(var j = i; j < logoTitle.length; j++)logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
                        generateRandomTitle(i, logoRandom);
                        logoRandom = "";
                    }
                }, 500); // This delay controls when the animation starts after the inner function is set up
            }, 2000); // Delay before starting the whole animation logic
            // Select elements
            const navTopLinks = document.querySelectorAll(".menu__nav-top .line-link");
            const tagline = document.querySelector(".menu__tagline");
            const navContent = document.querySelector(".menu__nav-content");
            // Data to populate the menu with
            const menuData = {
                Tech: {
                    tagline: "Tech",
                    columns: [
                        {
                            title: "Employers",
                            links: [
                                {
                                    title: "Eeze",
                                    url: "https://eeze.com/"
                                },
                                {
                                    title: "Financial Times",
                                    url: "https://www.ft.com/"
                                },
                                {
                                    title: "\xd8stmodern",
                                    url: "https://www.ostmodern.co/"
                                },
                                {
                                    title: "NTT DATA - Sky | L&G",
                                    url: "https://www.nttdata.com/global/en/"
                                },
                                {
                                    title: "Fin-Ex UK",
                                    url: "https://fin-ex.com/"
                                },
                                {
                                    title: "Penguin Random House",
                                    url: "https://www.penguin.com/"
                                }
                            ]
                        }
                    ]
                },
                About: {
                    tagline: "About",
                    columns: [
                        {
                            title: "Personal",
                            links: [
                                {
                                    title: "Education",
                                    url: "#",
                                    modalId: "modal2",
                                    onclick: openEducation
                                }
                            ]
                        },
                        {
                            title: "History",
                            links: [
                                {
                                    title: "Full Resume",
                                    url: "#",
                                    modalId: "modal3",
                                    onclick: openResume
                                }
                            ]
                        },
                        {
                            title: "Publications",
                            links: [
                                {
                                    title: "Medium",
                                    url: "https://medium.com/@writetochrispalmer"
                                },
                                {
                                    title: "LinkedIn",
                                    url: "#",
                                    modalId: "modal1",
                                    onclick: openLinkedIn
                                }
                            ]
                        }
                    ]
                },
                Contact: {
                    tagline: "Contact",
                    columns: [
                        {
                            title: "Contact",
                            links: [
                                {
                                    title: "Email",
                                    url: "mailto:write.to.chris.palmer@gmail.com"
                                },
                                {
                                    title: "GitHub",
                                    url: "https://github.com/cpalmer-ios"
                                }
                            ]
                        }
                    ]
                }
            };
            // Function to update the menu content
            const updateMenuContent = (category)=>{
                const data = menuData[category];
                if (!data) return;
                // Update the tagline
                tagline.textContent = data.tagline;
                // Clear existing content
                navContent.innerHTML = "";
                // Create and append columns
                data.columns.forEach((column)=>{
                    const columnElement = document.createElement("div");
                    columnElement.className = "column";
                    // Add column title
                    const columnTitle = document.createElement("h4");
                    columnTitle.className = "column__title";
                    columnTitle.textContent = column.title;
                    columnElement.appendChild(columnTitle);
                    // Add links
                    column.links.forEach((link)=>{
                        const linkElement = document.createElement("a");
                        linkElement.className = "line-link";
                        linkElement.href = link.url;
                        linkElement.target = "blank";
                        // Set the link text
                        linkElement.textContent = link.title;
                        // Check if an 'onclick' function exists and add it
                        if (link.onclick) {
                            linkElement.setAttribute("aria-controls", link.modalId);
                            linkElement.addEventListener("click", (e)=>{
                                e.preventDefault(); // Prevent the default link behavior
                                link.onclick(e); // Execute the custom onclick function
                            });
                        }
                        // Append the link element to the column
                        columnElement.appendChild(linkElement);
                    });
                    // Append column to navContent
                    navContent.appendChild(columnElement);
                });
            };
            // Add event listeners to the top nav links
            navTopLinks.forEach((link)=>{
                link.addEventListener("click", (event)=>{
                    event.preventDefault(); // Prevent default link behavior
                    const category = link.textContent.trim(); // Get the category text
                    updateMenuContent(category); // Update the menu content
                });
            });
            // For options see: https://github.com/qrohlf/Trianglify
            var pattern = Trianglify({
                width: window1.innerWidth,
                height: window1.innerHeight,
                cell_size: 90,
                variance: 1,
                stroke_width: 0.6,
                color_function: function(x, y) {
                    // return "#de6551";
                    return "#f0f0f0";
                }
            }).svg(); // Render as SVG.
            _mapPolygons(pattern);
            _bindCards();
        }
        /**
         * Store path elements, map coordinates and sizes.
         * @param {Element} pattern The SVG Element generated with Trianglify.
         * @private
         */ function _mapPolygons(pattern) {
            // Append SVG to pattern container.
            $(SELECTORS.pattern).append(pattern);
            // Convert nodelist to array,
            // Used `.childNodes` because IE doesn't support `.children` on SVG.
            polygonMap.paths = [].slice.call(pattern.childNodes);
            polygonMap.points = [];
            polygonMap.paths.forEach(function(polygon) {
                // Hide polygons by adding CSS classes to each svg path (used attrs because of IE).
                $(polygon).attr("class", CLASSES.polygon + " " + CLASSES.polygonHidden);
                var rect = polygon.getBoundingClientRect();
                var point = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                };
                polygonMap.points.push(point);
            });
            // All polygons are hidden now, display the pattern container.
            $(SELECTORS.pattern).removeClass(CLASSES.patternHidden);
        }
        /**
         * Bind Card elements.
         * @private
         */ function _bindCards() {
            var elements = $(SELECTORS.card);
            $.each(elements, function(card, i) {
                var instance = new Card(i, card);
                layout[i] = {
                    card: instance
                };
                var cardImage = $(card).find(SELECTORS.cardImage);
                var cardClose = $(card).find(SELECTORS.cardClose);
                $(cardImage).on("click", _playSequence.bind(this, true, i));
                $(cardClose).on("click", _playSequence.bind(this, false, i));
            });
        }
        /**
         * Create a sequence for the open or close animation and play.
         * @param {boolean} isOpenClick Flag to detect when it's a click to open.
         * @param {number} id The id of the clicked card.
         * @param {Event} e The event object.
         * @private
         *
         */ function _playSequence(isOpenClick, id, e) {
            var card = layout[id].card;
            // Prevent when card already open and user click on image.
            if (card.isOpen && isOpenClick) return;
            // $(".menu").attr("class", "menu" + " " + "slide-up");
            // $(".ink__blot-1").attr("class", "menu" + " " + "fade-out");
            // Create timeline for the whole sequence.
            var sequence = new TimelineLite({
                paused: true
            });
            var tweenOtherCards = _showHideOtherCards(id);
            if (!card.isOpen) {
                // Open sequence.
                sequence.add(tweenOtherCards);
                sequence.add(card.openCard(_onCardMove), 0);
            } else {
                $(".menu").attr("class", "menu slide-down");
                // document.querySelectorAll(".card").forEach((card, i) => {card.style.opacity = 1});
                // Close sequence.
                var closeCard = card.closeCard();
                var position = closeCard.duration() * 0.8; // 80% of close card tween.
                sequence.add(closeCard);
                sequence.add(tweenOtherCards, position);
            }
            sequence.play();
        }
        /**
         * Show/Hide all other cards.
         * @param {number} id The id of the clcked card to be avoided.
         * @private
         */ function _showHideOtherCards(id) {
            var TL = new TimelineLite();
            var selectedCard = layout[id].card;
            for(var i in layout){
                var card = layout[i].card;
                // When called with `openCard`.
                if (card.id !== id && !selectedCard.isOpen) TL.add(card.hideCard(), 0);
                // When called with `closeCard`.
                if (card.id !== id && selectedCard.isOpen) TL.add(card.showCard(), 0);
            }
            return TL;
        }
        /**
         * Callback to be executed on Tween update, whatever a polygon
         * falls into a circular area defined by the card width the path's
         * CSS class will change accordingly.
         * @param {Object} track The card sizes and position during the floating.
         * @private
         */ function _onCardMove(track) {
            var radius = track.width / 2;
            var center = {
                x: track.x,
                y: track.y
            };
            polygonMap.points.forEach(function(point, i) {
                if (_detectPointInCircle(point, radius, center)) $(polygonMap.paths[i]).attr("class", CLASSES.polygon);
                else $(polygonMap.paths[i]).attr("class", CLASSES.polygon + " " + CLASSES.polygonHidden);
            });
        }
        /**
         * Detect if a point is inside a circle area.
         * @private
         */ function _detectPointInCircle(point, radius, center) {
            var xp = point.x;
            var yp = point.y;
            var xc = center.x;
            var yc = center.y;
            var d = radius * radius;
            var isInside = Math.pow(xp - xc, 2) + Math.pow(yp - yc, 2) <= d;
            return isInside;
        }
        // Expose methods.
        return {
            init: init
        };
    }(window);
    // Start initialization when DOM is ready
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ()=>{
        // Initialize GSAP and ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        // Your initialization code here
        demo.init();
        // Remove loading class
        setTimeout(()=>{
            document.body.classList.remove('loading');
        }, 100);
    });
    else demo.init();
}
// Kickstart Demo.
initializeDemo();
// Reference to the modal elements
// const modal = document.getElementById("linkModal");
// const modalLinks = document.getElementById("modalLinks");
// const closeModal = document.querySelector(".modal-close");
// Event listener for closing the modal
// closeModal.addEventListener("click", () => {
//   modal.style.display = "none"; // Hide the modal
// });
// Close the modal when clicking outside of the modal content
// window.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none"; // Hide the modal when clicking outside
//   }
// });
// document.querySelectorAll('.content__section').forEach((section, index) => {
//   section.addEventListener('click', () => {
//     section.scrollIntoView({ behavior: 'smooth' });
//   });
// });
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
});
document.addEventListener('scroll', ()=>{
    const frame = document.querySelector('.frame');
    if (!frame) return;
    // Check if user is near the bottom of the page
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollTop + windowHeight >= documentHeight - 1) frame.classList.add('visible');
    else frame.classList.remove('visible');
});
(function() {
    const buttons = document.querySelectorAll("[data-modal_trigger]");
    if (!buttons) return;
    const transitionLayer = document.querySelector("[data-modal_lightbox]");
    if (!transitionLayer) return;
    const transitionLayer_bg = transitionLayer.querySelector(".lightbox_bg");
    if (!transitionLayer_bg) return;
    const aspectRatio = 1.78; // Sprite png frame aspect ratio
    const frames = 25; // Number of sprite png frames
    function setLayerDimensions() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        let layerHeight;
        let layerWidth;
        if (windowWidth / windowHeight > aspectRatio) {
            layerWidth = Math.ceil(windowWidth);
            layerHeight = Math.ceil(layerWidth / aspectRatio);
        } else {
            layerHeight = Math.ceil(windowHeight);
            layerWidth = Math.ceil(layerHeight * aspectRatio);
        }
        requestAnimationFrame(()=>{
            transitionLayer_bg.style.width = layerWidth * frames + "px";
            transitionLayer_bg.style.height = layerHeight + "px";
        });
    }
    //set transitionBackground dimensions
    setLayerDimensions();
    window.addEventListener("resize", debounce(setLayerDimensions, 300, false));
})();
/* Open LinkedIn modal */ const openLinkedIn = function() {
    const buttons = document.querySelectorAll("[aria-controls^='modal1']");
    const transitionLayer = document.querySelector("[data-modal_lightbox]");
    const transitionLayer_bg = transitionLayer ? transitionLayer.querySelector(".lightbox_bg") : null;
    if (!buttons || !transitionLayer || !transitionLayer_bg) return;
    const btnOpenAttr = "aria-controls";
    const visibleClass = "-js-visible";
    const openingClass = "-js-opening";
    return (e)=>{
        e.preventDefault();
        const modelId = e.target.getAttribute(btnOpenAttr);
        if (!modelId) return;
        const modal = document.getElementById(modelId);
        if (!modal) return;
        transitionLayer.classList.add(visibleClass, openingClass);
        setTimeout(()=>{
            modal.classList.add(visibleClass);
        }, 800);
    };
}();
/* Open Education modal */ const openEducation = function() {
    const buttons = document.querySelectorAll("[aria-controls^='modal2']");
    const transitionLayer = document.querySelector("[data-modal_lightbox]");
    const transitionLayer_bg = transitionLayer ? transitionLayer.querySelector(".lightbox_bg") : null;
    if (!buttons || !transitionLayer || !transitionLayer_bg) return;
    const btnOpenAttr = "aria-controls";
    const visibleClass = "-js-visible";
    const openingClass = "-js-opening";
    return (e)=>{
        e.preventDefault();
        const modalId = e.target.getAttribute("aria-controls");
        // const modelId = e.target.getAttribute(btnOpenAttr);
        if (!modalId) return;
        const modal = document.getElementById(modalId);
        if (!modal) return;
        transitionLayer.classList.add(visibleClass, openingClass);
        setTimeout(()=>{
            modal.classList.add(visibleClass);
        }, 800);
    };
}();
/* Open Resume modal */ const openResume = function() {
    const buttons = document.querySelectorAll("[aria-controls^='modal3']");
    const transitionLayer = document.querySelector("[data-modal_lightbox]");
    const transitionLayer_bg = transitionLayer ? transitionLayer.querySelector(".lightbox_bg") : null;
    if (!buttons || !transitionLayer || !transitionLayer_bg) return;
    const btnOpenAttr = "aria-controls";
    const visibleClass = "-js-visible";
    const openingClass = "-js-opening";
    return (e)=>{
        e.preventDefault();
        const modalId = e.target.getAttribute("aria-controls");
        // const modelId = e.target.getAttribute(btnOpenAttr);
        if (!modalId) return;
        const modal = document.getElementById(modalId);
        if (!modal) return;
        transitionLayer.classList.add(visibleClass, openingClass);
        setTimeout(()=>{
            modal.classList.add(visibleClass);
        }, 800);
    };
}();
// Generalized modal logic
const openModal = (e)=>{
    e.preventDefault();
    const modalId = e.target.getAttribute("aria-controls");
    if (!modalId) return;
    const modal = document.getElementById(modalId);
    if (!modal) return;
    // Add visible class to open modal
    modal.classList.add("-js-visible");
    // Close modal logic
    const closeButton = modal.querySelector(".close-modal");
    if (closeButton) closeButton.addEventListener("click", ()=>{
        modal.classList.remove("-js-visible");
    });
};
/* Close modal from clicking modal_bg or button */ (function() {
    // const modals = document.getElementById('.modal1');
    const modals = document.querySelectorAll(".modal1");
    if (!modals) return;
    const transitionLayer = document.querySelector("[data-modal_lightbox]");
    if (!transitionLayer) return;
    const transitionLayer_bg = transitionLayer.querySelector(".lightbox_bg");
    if (!transitionLayer_bg) return;
    const btnCloseAttr = "data-modal_close";
    const visibleClass = "-js-visible";
    const closingClass = "-js-closing";
    const openingClass = "-js-opening";
    const isNotCloseObj = (obj)=>{
        return !(obj.classList.contains(visibleClass) || obj.hasAttribute(btnCloseAttr));
    };
    const isVisible = (obj)=>{
        return obj.classList.contains(visibleClass);
    };
    const closeAnimStart = (e)=>{
        // In case it's an anchor
        e.preventDefault();
        const obj = e.target;
        if (isNotCloseObj(obj)) return;
        const modal = isVisible(obj) ? obj : obj.parentElement.parentElement;
        if (!modal) return;
        transitionLayer.classList.add(closingClass);
        transitionLayer.classList.remove(openingClass);
        modal.classList.remove(visibleClass);
        transitionLayer_bg.addEventListener("animationend", ()=>{
            transitionLayer.classList.remove(closingClass, visibleClass);
        }, {
            once: true
        });
    };
    for (const modal of modals)modal.addEventListener("click", closeAnimStart, false);
})();
/* Question button click */ (function() {
    const buttons = document.querySelectorAll(".menu__nav-top a.line-link");
    const clickedClass = "-js-clicked";
    for (const btn of buttons){
        btn.addEventListener("click", (e)=>{
            // $(".menu").attr("class", "menu" + " " + "slide-up");
            // $("#container-ani").attr("class", "menu" + " " + "slide-up");
            e.target.classList.add(clickedClass);
            e.target.addEventListener("animationend", (e)=>{
                e.target.classList.remove(clickedClass);
            }, false);
        }, false);
        btn.addEventListener("blur", (e)=>{
            e.target.classList.remove(clickedClass);
        }, false);
    }
    document.querySelectorAll('.list__item').forEach((item)=>{
        const cols = Array.from(item.querySelectorAll('.hover-effect'));
        const animators = cols.map((col)=>new TextAnimator(col));
        item.addEventListener('mouseenter', ()=>{
            animators.forEach((animator)=>animator.animate());
        });
        item.addEventListener('mouseleave', ()=>{
            animators.forEach((animator)=>animator.animateBack());
        });
    });
    // Same for all links
    document.querySelectorAll('a.hover-effect').forEach((item)=>{
        const animator = new TextAnimator(item);
        item.addEventListener('mouseenter', ()=>{
            animator.animate();
        });
        item.addEventListener('mouseleave', ()=>{
            animator.animateBack();
        });
    });
    setTimeout(()=>{
        document.body.classList.remove('loading');
    }, 100);
})();

},{}],"li47L":[function(require,module,exports,__globalThis) {
/**
 * demo1.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */ {
    const chars = [
        '$',
        '%',
        '#',
        '@',
        '&',
        '(',
        ')',
        '=',
        '*',
        '/'
    ];
    const charsTotal = chars.length;
    const getRandomInt = (min, max)=>Math.floor(Math.random() * (max - min + 1)) + min;
    class Entry {
        constructor(el){
            this.DOM = {
                el: el
            };
            this.DOM.image = this.DOM.el.querySelectorAll('.card');
            this.DOM.title = {
                word: this.DOM.el.querySelector('.content__text')
            };
            charming(this.DOM.title.word);
            this.DOM.title.letters = Array.from(this.DOM.title.word.querySelectorAll('span'));
            this.DOM.title.letters.forEach((letter)=>letter.dataset.initial = letter.innerHTML);
            this.lettersTotal = this.DOM.title.letters.length;
            observer.observe(this.DOM.el);
        }
        enter(direction = 'down') {
            // console.log()
            this.DOM.title.word.style.opacity = 1;
            this.timeouts = [];
            this.complete = false;
            let cnt = 0;
            this.DOM.title.letters.forEach((letter, pos)=>{
                const timeout = setTimeout(()=>{
                    letter.innerHTML = chars[getRandomInt(0, charsTotal - 1)];
                    setTimeout(()=>{
                        letter.innerHTML = letter.dataset.initial;
                        ++cnt;
                        if (cnt === this.lettersTotal) this.complete = true;
                    }, 100);
                }, pos * 80);
                this.timeouts.push(timeout);
            });
            this.DOM.image.forEach((img, pos)=>{
                const timeout = setTimeout(()=>{
                    img.style.opacity = 1;
                }, pos * 80);
                this.timeouts.push(timeout);
            });
        }
        exit(direction = 'down') {
            this.DOM.title.word.style.opacity = 0;
            this.DOM.image.forEach((img, pos)=>{
                img.style.opacity = 0;
            });
            if (this.complete) return;
            for(let i = 0, len = this.timeouts.length; i <= len - 1; ++i)clearTimeout(this.timeouts[i]);
        }
    }
    // Wait for both DOM and GSAP to be ready
    function initializeDemo1() {
        if (!window.gsap || !document.body) {
            requestAnimationFrame(initializeDemo1);
            return;
        }
        let observer1;
        let current = -1;
        let allentries = [];
        const sections = Array.from(document.querySelectorAll('.content__section'));
        // Only remove loading class if it exists
        if (document.body.classList.contains('loading')) document.body.classList.remove('loading');
        if ('IntersectionObserver' in window) {
            document.body.classList.add('ioapi');
            observer1 = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    if (entry.intersectionRatio > 0.5) {
                        const newcurrent = sections.indexOf(entry.target);
                        if (newcurrent === current) return;
                        const direction = newcurrent > current;
                        if (current >= 0) allentries[current].exit(direction ? 'down' : 'up');
                        allentries[newcurrent].enter(direction ? 'down' : 'up');
                        current = newcurrent;
                    }
                });
            }, {
                threshold: 0.5
            });
            sections.forEach((section)=>allentries.push(new Entry(section)));
        }
    }
    // Start initialization when DOM is ready
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeDemo1);
    else initializeDemo1();
}
},{}],"PA8qQ":[function(require,module,exports,__globalThis) {
!function(e) {
    module.exports = e;
}(function(e, n) {
    "use strict";
    n = n || {};
    var t = n.tagName || "span", o = null != n.classPrefix ? n.classPrefix : "char", r = 1, a = function(e) {
        for(var n = e.parentNode, a = e.nodeValue, c = a.length, l = -1; ++l < c;){
            var d = document.createElement(t);
            o && (d.className = o + r, r++), d.appendChild(document.createTextNode(a[l])), n.insertBefore(d, e);
        }
        n.removeChild(e);
    };
    return function c(e) {
        for(var n = [].slice.call(e.childNodes), t = n.length, o = -1; ++o < t;)c(n[o]);
        e.nodeType === Node.TEXT_NODE && a(e);
    }(e), e;
});

},{}],"gxDnu":[function(require,module,exports,__globalThis) {
!function(e) {
    var r;
    module.exports = e();
}(function() {
    var e;
    return (function r(e, f, n) {
        function t(o, c) {
            if (!f[o]) {
                if (!e[o]) {
                    var u = undefined;
                    if (!c && u) return u(o, !0);
                    if (a) return a(o, !0);
                    var l = new Error("Cannot find module '" + o + "'");
                    throw l.code = "MODULE_NOT_FOUND", l;
                }
                var i = f[o] = {
                    exports: {}
                };
                e[o][0].call(i.exports, function(r) {
                    var f = e[o][1][r];
                    return t(f ? f : r);
                }, i, i.exports, r, e, f, n);
            }
            return f[o].exports;
        }
        for(var a = undefined, o = 0; o < n.length; o++)t(n[o]);
        return t;
    })({
        "./lib/trianglify.js": [
            function(e, r) {
                function f(e) {
                    function r(e, r, f) {
                        return (e - r[0]) * (f[1] - f[0]) / (r[1] - r[0]) + f[0];
                    }
                    function f(f, n) {
                        for(var t = [], a = -y; f + y > a; a += e.cell_size)for(var o = -v; n + v > o; o += e.cell_size){
                            var c = a + e.cell_size / 2 + r(rand(), [
                                0,
                                1
                            ], [
                                -w,
                                w
                            ]), u = o + e.cell_size / 2 + r(rand(), [
                                0,
                                1
                            ], [
                                -w,
                                w
                            ]);
                            t.push([
                                c,
                                u
                            ].map(Math.floor));
                        }
                        return t;
                    }
                    function o(e) {
                        return {
                            x: (e[0][0] + e[1][0] + e[2][0]) / 3,
                            y: (e[0][1] + e[1][1] + e[2][1]) / 3
                        };
                    }
                    function l() {
                        if (e.palette instanceof Array) return e.palette[Math.floor(rand() * e.palette.length)];
                        var r = Object.keys(e.palette);
                        return e.palette[r[Math.floor(rand() * r.length)]];
                    }
                    function i(e, r) {
                        var f = {};
                        for(var n in e)f[n] = e[n];
                        for(n in r){
                            if (!e.hasOwnProperty(n)) throw new Error(n + " is not a configuration option for Trianglify. Check your spelling?");
                            f[n] = r[n];
                        }
                        return f;
                    }
                    if (e = i(u, e), rand = t(e.seed), "random" === e.x_colors && (e.x_colors = l()), "random" === e.y_colors && (e.y_colors = l()), "match_x" === e.y_colors && (e.y_colors = e.x_colors), !(e.width > 0 && e.height > 0)) throw new Error("Width and height must be numbers greater than 0");
                    if (e.cell_size < 2) throw new Error("Cell size must be greater than 2.");
                    var d;
                    if (e.color_function) d = function(r, f) {
                        return a(e.color_function(r, f));
                    };
                    else {
                        var s = a.scale(e.x_colors).mode(e.color_space), b = a.scale(e.y_colors).mode(e.color_space);
                        d = function(r, f) {
                            return a.interpolate(s(r), b(f), .5, e.color_space);
                        };
                    }
                    for(var h = e.width, g = e.height, p = Math.floor((h + 4 * e.cell_size) / e.cell_size), m = Math.floor((g + 4 * e.cell_size) / e.cell_size), y = (p * e.cell_size - h) / 2, v = (m * e.cell_size - g) / 2, w = e.cell_size * e.variance / 2, _ = function(e) {
                        return r(e, [
                            -y,
                            h + y
                        ], [
                            0,
                            1
                        ]);
                    }, k = function(e) {
                        return r(e, [
                            -v,
                            g + v
                        ], [
                            0,
                            1
                        ]);
                    }, x = f(h, g), M = n.triangulate(x), j = [], N = function(e) {
                        return x[e];
                    }, P = 0; P < M.length; P += 3){
                        var q = [
                            M[P],
                            M[P + 1],
                            M[P + 2]
                        ].map(N), A = o(q), G = d(_(A.x), k(A.y)).hex();
                        j.push([
                            G,
                            q
                        ]);
                    }
                    return c(j, e);
                }
                var n = e("delaunay-fast"), t = e("seedrandom"), a = e("chroma-js"), o = e("./colorbrewer"), c = e("./pattern"), u = {
                    width: 600,
                    height: 400,
                    cell_size: 75,
                    variance: .75,
                    seed: null,
                    x_colors: "random",
                    y_colors: "match_x",
                    palette: o,
                    color_space: "lab",
                    color_function: null,
                    stroke_width: 1.51
                };
                f.colorbrewer = o, f.defaults = u, r.exports = f;
            },
            {
                "./colorbrewer": "/Users/qrohlf/Projects/trianglify/lib/colorbrewer.js",
                "./pattern": "/Users/qrohlf/Projects/trianglify/lib/pattern.js",
                "chroma-js": "/Users/qrohlf/Projects/trianglify/node_modules/chroma-js/chroma.js",
                "delaunay-fast": "/Users/qrohlf/Projects/trianglify/node_modules/delaunay-fast/delaunay.js",
                seedrandom: "/Users/qrohlf/Projects/trianglify/node_modules/seedrandom/seedrandom.js"
            }
        ],
        "/Users/qrohlf/Projects/trianglify/lib/colorbrewer.js": [
            function(e, r) {
                r.exports = {
                    YlGn: [
                        "#ffffe5",
                        "#f7fcb9",
                        "#d9f0a3",
                        "#addd8e",
                        "#78c679",
                        "#41ab5d",
                        "#238443",
                        "#006837",
                        "#004529"
                    ],
                    YlGnBu: [
                        "#ffffd9",
                        "#edf8b1",
                        "#c7e9b4",
                        "#7fcdbb",
                        "#41b6c4",
                        "#1d91c0",
                        "#225ea8",
                        "#253494",
                        "#081d58"
                    ],
                    GnBu: [
                        "#f7fcf0",
                        "#e0f3db",
                        "#ccebc5",
                        "#a8ddb5",
                        "#7bccc4",
                        "#4eb3d3",
                        "#2b8cbe",
                        "#0868ac",
                        "#084081"
                    ],
                    BuGn: [
                        "#f7fcfd",
                        "#e5f5f9",
                        "#ccece6",
                        "#99d8c9",
                        "#66c2a4",
                        "#41ae76",
                        "#238b45",
                        "#006d2c",
                        "#00441b"
                    ],
                    PuBuGn: [
                        "#fff7fb",
                        "#ece2f0",
                        "#d0d1e6",
                        "#a6bddb",
                        "#67a9cf",
                        "#3690c0",
                        "#02818a",
                        "#016c59",
                        "#014636"
                    ],
                    PuBu: [
                        "#fff7fb",
                        "#ece7f2",
                        "#d0d1e6",
                        "#a6bddb",
                        "#74a9cf",
                        "#3690c0",
                        "#0570b0",
                        "#045a8d",
                        "#023858"
                    ],
                    BuPu: [
                        "#f7fcfd",
                        "#e0ecf4",
                        "#bfd3e6",
                        "#9ebcda",
                        "#8c96c6",
                        "#8c6bb1",
                        "#88419d",
                        "#810f7c",
                        "#4d004b"
                    ],
                    RdPu: [
                        "#fff7f3",
                        "#fde0dd",
                        "#fcc5c0",
                        "#fa9fb5",
                        "#f768a1",
                        "#dd3497",
                        "#ae017e",
                        "#7a0177",
                        "#49006a"
                    ],
                    PuRd: [
                        "#f7f4f9",
                        "#e7e1ef",
                        "#d4b9da",
                        "#c994c7",
                        "#df65b0",
                        "#e7298a",
                        "#ce1256",
                        "#980043",
                        "#67001f"
                    ],
                    OrRd: [
                        "#fff7ec",
                        "#fee8c8",
                        "#fdd49e",
                        "#fdbb84",
                        "#fc8d59",
                        "#ef6548",
                        "#d7301f",
                        "#b30000",
                        "#7f0000"
                    ],
                    YlOrRd: [
                        "#ffffcc",
                        "#ffeda0",
                        "#fed976",
                        "#feb24c",
                        "#fd8d3c",
                        "#fc4e2a",
                        "#e31a1c",
                        "#bd0026",
                        "#800026"
                    ],
                    YlOrBr: [
                        "#ffffe5",
                        "#fff7bc",
                        "#fee391",
                        "#fec44f",
                        "#fe9929",
                        "#ec7014",
                        "#cc4c02",
                        "#993404",
                        "#662506"
                    ],
                    Purples: [
                        "#fcfbfd",
                        "#efedf5",
                        "#dadaeb",
                        "#bcbddc",
                        "#9e9ac8",
                        "#807dba",
                        "#6a51a3",
                        "#54278f",
                        "#3f007d"
                    ],
                    Blues: [
                        "#f7fbff",
                        "#deebf7",
                        "#c6dbef",
                        "#9ecae1",
                        "#6baed6",
                        "#4292c6",
                        "#2171b5",
                        "#08519c",
                        "#08306b"
                    ],
                    Greens: [
                        "#f7fcf5",
                        "#e5f5e0",
                        "#c7e9c0",
                        "#a1d99b",
                        "#74c476",
                        "#41ab5d",
                        "#238b45",
                        "#006d2c",
                        "#00441b"
                    ],
                    Oranges: [
                        "#fff5eb",
                        "#fee6ce",
                        "#fdd0a2",
                        "#fdae6b",
                        "#fd8d3c",
                        "#f16913",
                        "#d94801",
                        "#a63603",
                        "#7f2704"
                    ],
                    Reds: [
                        "#fff5f0",
                        "#fee0d2",
                        "#fcbba1",
                        "#fc9272",
                        "#fb6a4a",
                        "#ef3b2c",
                        "#cb181d",
                        "#a50f15",
                        "#67000d"
                    ],
                    Greys: [
                        "#ffffff",
                        "#f0f0f0",
                        "#d9d9d9",
                        "#bdbdbd",
                        "#969696",
                        "#737373",
                        "#525252",
                        "#252525",
                        "#000000"
                    ],
                    PuOr: [
                        "#7f3b08",
                        "#b35806",
                        "#e08214",
                        "#fdb863",
                        "#fee0b6",
                        "#f7f7f7",
                        "#d8daeb",
                        "#b2abd2",
                        "#8073ac",
                        "#542788",
                        "#2d004b"
                    ],
                    BrBG: [
                        "#543005",
                        "#8c510a",
                        "#bf812d",
                        "#dfc27d",
                        "#f6e8c3",
                        "#f5f5f5",
                        "#c7eae5",
                        "#80cdc1",
                        "#35978f",
                        "#01665e",
                        "#003c30"
                    ],
                    PRGn: [
                        "#40004b",
                        "#762a83",
                        "#9970ab",
                        "#c2a5cf",
                        "#e7d4e8",
                        "#f7f7f7",
                        "#d9f0d3",
                        "#a6dba0",
                        "#5aae61",
                        "#1b7837",
                        "#00441b"
                    ],
                    PiYG: [
                        "#8e0152",
                        "#c51b7d",
                        "#de77ae",
                        "#f1b6da",
                        "#fde0ef",
                        "#f7f7f7",
                        "#e6f5d0",
                        "#b8e186",
                        "#7fbc41",
                        "#4d9221",
                        "#276419"
                    ],
                    RdBu: [
                        "#67001f",
                        "#b2182b",
                        "#d6604d",
                        "#f4a582",
                        "#fddbc7",
                        "#f7f7f7",
                        "#d1e5f0",
                        "#92c5de",
                        "#4393c3",
                        "#2166ac",
                        "#053061"
                    ],
                    RdGy: [
                        "#67001f",
                        "#b2182b",
                        "#d6604d",
                        "#f4a582",
                        "#fddbc7",
                        "#ffffff",
                        "#e0e0e0",
                        "#bababa",
                        "#878787",
                        "#4d4d4d",
                        "#1a1a1a"
                    ],
                    RdYlBu: [
                        "#a50026",
                        "#d73027",
                        "#f46d43",
                        "#fdae61",
                        "#fee090",
                        "#ffffbf",
                        "#e0f3f8",
                        "#abd9e9",
                        "#74add1",
                        "#4575b4",
                        "#313695"
                    ],
                    Spectral: [
                        "#9e0142",
                        "#d53e4f",
                        "#f46d43",
                        "#fdae61",
                        "#fee08b",
                        "#ffffbf",
                        "#e6f598",
                        "#abdda4",
                        "#66c2a5",
                        "#3288bd",
                        "#5e4fa2"
                    ],
                    RdYlGn: [
                        "#a50026",
                        "#d73027",
                        "#f46d43",
                        "#fdae61",
                        "#fee08b",
                        "#ffffbf",
                        "#d9ef8b",
                        "#a6d96a",
                        "#66bd63",
                        "#1a9850",
                        "#006837"
                    ]
                };
            },
            {}
        ],
        "/Users/qrohlf/Projects/trianglify/lib/pattern.js": [
            function(e, r) {
                function f(e, r) {
                    function f() {
                        var f = n.createElementNS("http://www.w3.org/2000/svg", "svg");
                        return f.setAttribute("width", r.width), f.setAttribute("height", r.height), e.forEach(function(e) {
                            var t = n.createElementNS("http://www.w3.org/2000/svg", "path");
                            t.setAttribute("d", "M" + e[1].join("L") + "Z"), t.setAttribute("fill", e[0]), t.setAttribute("stroke", e[0]), t.setAttribute("stroke-width", r.stroke_width), f.appendChild(t);
                        }), f;
                    }
                    function t(f) {
                        return f || (f = n.createElement("canvas")), f.setAttribute("width", r.width), f.setAttribute("height", r.height), ctx = f.getContext("2d"), ctx.canvas.width = r.width, ctx.canvas.height = r.height, e.forEach(function(e) {
                            ctx.fillStyle = ctx.strokeStyle = e[0], ctx.lineWidth = r.stroke_width, ctx.beginPath(), ctx.moveTo.apply(ctx, e[1][0]), ctx.lineTo.apply(ctx, e[1][1]), ctx.lineTo.apply(ctx, e[1][2]), ctx.fill(), ctx.stroke();
                        }), f;
                    }
                    function a() {
                        return t().toDataURL("image/png");
                    }
                    return {
                        polys: e,
                        opts: r,
                        svg: f,
                        canvas: t,
                        png: a
                    };
                }
                var n = "undefined" != typeof document ? document : e("jsdom").jsdom("<html/>");
                r.exports = f;
            },
            {
                jsdom: "/Users/qrohlf/Projects/trianglify/node_modules/browserify/node_modules/browser-resolve/empty.js"
            }
        ],
        "/Users/qrohlf/Projects/trianglify/node_modules/browserify/node_modules/browser-resolve/empty.js": [
            function() {},
            {}
        ],
        "/Users/qrohlf/Projects/trianglify/node_modules/chroma-js/chroma.js": [
            function(r, f, n) {
                (function() {
                    var r, t, a, o, c, u, l, i, d, s, b, h, g, p, m, y, v, w, _, k, x, M, j, N, P, q, A, G, B, I, E, R, S, O, U, z, Y, T, C;
                    s = function(e, f, n, t) {
                        return new r(e, f, n, t);
                    }, "undefined" != typeof f && null !== f && null != f.exports && (f.exports = s), "function" == typeof e && e.amd ? e([], function() {
                        return s;
                    }) : (O = "undefined" != typeof n && null !== n ? n : this, O.chroma = s), s.color = function(e, f, n, t) {
                        return new r(e, f, n, t);
                    }, s.hsl = function(e, f, n, t) {
                        return new r(e, f, n, t, "hsl");
                    }, s.hsv = function(e, f, n, t) {
                        return new r(e, f, n, t, "hsv");
                    }, s.rgb = function(e, f, n, t) {
                        return new r(e, f, n, t, "rgb");
                    }, s.hex = function(e) {
                        return new r(e);
                    }, s.css = function(e) {
                        return new r(e);
                    }, s.lab = function(e, f, n) {
                        return new r(e, f, n, "lab");
                    }, s.lch = function(e, f, n) {
                        return new r(e, f, n, "lch");
                    }, s.hsi = function(e, f, n) {
                        return new r(e, f, n, "hsi");
                    }, s.gl = function(e, f, n, t) {
                        return new r(255 * e, 255 * f, 255 * n, t, "gl");
                    }, s.interpolate = function(e, f, n, t) {
                        return null == e || null == f ? "#000" : ("string" === U(e) && (e = new r(e)), "string" === U(f) && (f = new r(f)), e.interpolate(n, f, t));
                    }, s.mix = s.interpolate, s.contrast = function(e, f) {
                        var n, t;
                        return "string" === U(e) && (e = new r(e)), "string" === U(f) && (f = new r(f)), n = e.luminance(), t = f.luminance(), n > t ? (n + .05) / (t + .05) : (t + .05) / (n + .05);
                    }, s.luminance = function(e) {
                        return s(e).luminance();
                    }, s._Color = r, r = function() {
                        function e() {
                            var e, r, f, n, t, a, o, c, u, l, i, d, s, h, g, p;
                            for(t = this, f = [], l = 0, i = arguments.length; i > l; l++)r = arguments[l], null != r && f.push(r);
                            if (0 === f.length) d = [
                                255,
                                0,
                                255,
                                1,
                                "rgb"
                            ], o = d[0], c = d[1], u = d[2], e = d[3], n = d[4];
                            else if ("array" === U(f[0])) {
                                if (3 === f[0].length) s = f[0], o = s[0], c = s[1], u = s[2], e = 1;
                                else {
                                    if (4 !== f[0].length) throw "unknown input argument";
                                    h = f[0], o = h[0], c = h[1], u = h[2], e = h[3];
                                }
                                n = null != (g = f[1]) ? g : "rgb";
                            } else "string" === U(f[0]) ? (o = f[0], n = "hex") : "object" === U(f[0]) ? (p = f[0]._rgb, o = p[0], c = p[1], u = p[2], e = p[3], n = "rgb") : f.length >= 3 && (o = f[0], c = f[1], u = f[2]);
                            3 === f.length ? (n = "rgb", e = 1) : 4 === f.length ? "string" === U(f[3]) ? (n = f[3], e = 1) : "number" === U(f[3]) && (n = "rgb", e = f[3]) : 5 === f.length && (e = f[3], n = f[4]), null == e && (e = 1), "rgb" === n ? t._rgb = [
                                o,
                                c,
                                u,
                                e
                            ] : "gl" === n ? t._rgb = [
                                255 * o,
                                255 * c,
                                255 * u,
                                e
                            ] : "hsl" === n ? (t._rgb = v(o, c, u), t._rgb[3] = e) : "hsv" === n ? (t._rgb = w(o, c, u), t._rgb[3] = e) : "hex" === n ? t._rgb = m(o) : "lab" === n ? (t._rgb = k(o, c, u), t._rgb[3] = e) : "lch" === n ? (t._rgb = j(o, c, u), t._rgb[3] = e) : "hsi" === n && (t._rgb = y(o, c, u), t._rgb[3] = e), a = b(t._rgb);
                        }
                        return e.prototype.rgb = function() {
                            return this._rgb.slice(0, 3);
                        }, e.prototype.rgba = function() {
                            return this._rgb;
                        }, e.prototype.hex = function() {
                            return A(this._rgb);
                        }, e.prototype.toString = function() {
                            return this.name();
                        }, e.prototype.hsl = function() {
                            return B(this._rgb);
                        }, e.prototype.hsv = function() {
                            return I(this._rgb);
                        }, e.prototype.lab = function() {
                            return E(this._rgb);
                        }, e.prototype.lch = function() {
                            return R(this._rgb);
                        }, e.prototype.hsi = function() {
                            return G(this._rgb);
                        }, e.prototype.gl = function() {
                            return [
                                this._rgb[0] / 255,
                                this._rgb[1] / 255,
                                this._rgb[2] / 255,
                                this._rgb[3]
                            ];
                        }, e.prototype.luminance = function(r, f) {
                            var n, t, a, o;
                            return null == f && (f = "rgb"), arguments.length ? (0 === r && (this._rgb = [
                                0,
                                0,
                                0,
                                this._rgb[3]
                            ]), 1 === r && (this._rgb = [
                                255,
                                255,
                                255,
                                this._rgb[3]
                            ]), n = P(this._rgb), t = 1e-7, a = 20, o = function(e, n) {
                                var c, u;
                                return u = e.interpolate(.5, n, f), c = u.luminance(), Math.abs(r - c) < t || !a-- ? u : c > r ? o(e, u) : o(u, n);
                            }, this._rgb = (n > r ? o(new e("black"), this) : o(this, new e("white"))).rgba(), this) : P(this._rgb);
                        }, e.prototype.name = function() {
                            var e, r;
                            e = this.hex();
                            for(r in s.colors)if (e === s.colors[r]) return r;
                            return e;
                        }, e.prototype.alpha = function(e) {
                            return arguments.length ? (this._rgb[3] = e, this) : this._rgb[3];
                        }, e.prototype.css = function(e) {
                            var r, f, n, t;
                            return null == e && (e = "rgb"), f = this, n = f._rgb, 3 === e.length && n[3] < 1 && (e += "a"), "rgb" === e ? e + "(" + n.slice(0, 3).map(Math.round).join(",") + ")" : "rgba" === e ? e + "(" + n.slice(0, 3).map(Math.round).join(",") + "," + n[3] + ")" : "hsl" === e || "hsla" === e ? (r = f.hsl(), t = function(e) {
                                return Math.round(100 * e) / 100;
                            }, r[0] = t(r[0]), r[1] = t(100 * r[1]) + "%", r[2] = t(100 * r[2]) + "%", 4 === e.length && (r[3] = n[3]), e + "(" + r.join(",") + ")") : void 0;
                        }, e.prototype.interpolate = function(r, f, n) {
                            var t, a, o, c, u, l, i, d, s, b, h, g, p, m;
                            if (d = this, null == n && (n = "rgb"), "string" === U(f) && (f = new e(f)), "hsl" === n || "hsv" === n || "lch" === n || "hsi" === n) "hsl" === n ? (p = d.hsl(), m = f.hsl()) : "hsv" === n ? (p = d.hsv(), m = f.hsv()) : "hsi" === n ? (p = d.hsi(), m = f.hsi()) : "lch" === n && (p = d.lch(), m = f.lch()), "h" === n.substr(0, 1) ? (o = p[0], h = p[1], l = p[2], c = m[0], g = m[1], i = m[2]) : (l = p[0], h = p[1], o = p[2], i = m[0], g = m[1], c = m[2]), isNaN(o) || isNaN(c) ? isNaN(o) ? isNaN(c) ? a = Number.NaN : (a = c, 1 !== l && 0 !== l || "hsv" === n || (b = g)) : (a = o, 1 !== i && 0 !== i || "hsv" === n || (b = h)) : (t = c > o && c - o > 180 ? c - (o + 360) : o > c && o - c > 180 ? c + 360 - o : c - o, a = o + r * t), null == b && (b = h + r * (g - h)), u = l + r * (i - l), s = "h" === n.substr(0, 1) ? new e(a, b, u, n) : new e(u, b, a, n);
                            else if ("rgb" === n) p = d._rgb, m = f._rgb, s = new e(p[0] + r * (m[0] - p[0]), p[1] + r * (m[1] - p[1]), p[2] + r * (m[2] - p[2]), n);
                            else {
                                if ("lab" !== n) throw "color mode " + n + " is not supported";
                                p = d.lab(), m = f.lab(), s = new e(p[0] + r * (m[0] - p[0]), p[1] + r * (m[1] - p[1]), p[2] + r * (m[2] - p[2]), n);
                            }
                            return s.alpha(d.alpha() + r * (f.alpha() - d.alpha())), s;
                        }, e.prototype.premultiply = function() {
                            var e, r;
                            return r = this.rgb(), e = this.alpha(), s(r[0] * e, r[1] * e, r[2] * e, e);
                        }, e.prototype.darken = function(e) {
                            var r, f;
                            return null == e && (e = 20), f = this, r = f.lch(), r[0] -= e, s.lch(r).alpha(f.alpha());
                        }, e.prototype.darker = function(e) {
                            return this.darken(e);
                        }, e.prototype.brighten = function(e) {
                            return null == e && (e = 20), this.darken(-e);
                        }, e.prototype.brighter = function(e) {
                            return this.brighten(e);
                        }, e.prototype.saturate = function(e) {
                            var r, f;
                            return null == e && (e = 20), f = this, r = f.lch(), r[1] += e, s.lch(r).alpha(f.alpha());
                        }, e.prototype.desaturate = function(e) {
                            return null == e && (e = 20), this.saturate(-e);
                        }, e;
                    }(), b = function(e) {
                        var r;
                        for(r in e)3 > r ? (e[r] < 0 && (e[r] = 0), e[r] > 255 && (e[r] = 255)) : 3 === r && (e[r] < 0 && (e[r] = 0), e[r] > 1 && (e[r] = 1));
                        return e;
                    }, p = function(e) {
                        var r, f, n, t, a, o, c, u;
                        if (e = e.toLowerCase(), null != s.colors && s.colors[e]) return m(s.colors[e]);
                        if (n = e.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
                            for(t = n.slice(1, 4), f = a = 0; 2 >= a; f = ++a)t[f] = +t[f];
                            t[3] = 1;
                        } else if (n = e.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) for(t = n.slice(1, 5), f = o = 0; 3 >= o; f = ++o)t[f] = +t[f];
                        else if (n = e.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
                            for(t = n.slice(1, 4), f = c = 0; 2 >= c; f = ++c)t[f] = Math.round(2.55 * t[f]);
                            t[3] = 1;
                        } else if (n = e.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
                            for(t = n.slice(1, 5), f = u = 0; 2 >= u; f = ++u)t[f] = Math.round(2.55 * t[f]);
                            t[3] = +t[3];
                        } else (n = e.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) ? (r = n.slice(1, 4), r[1] *= .01, r[2] *= .01, t = v(r), t[3] = 1) : (n = e.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) && (r = n.slice(1, 4), r[1] *= .01, r[2] *= .01, t = v(r), t[3] = +n[4]);
                        return t;
                    }, m = function(e) {
                        var r, f, n, t, a, o;
                        if (e.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) return (4 === e.length || 7 === e.length) && (e = e.substr(1)), 3 === e.length && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), o = parseInt(e, 16), t = o >> 16, n = o >> 8 & 255, f = 255 & o, [
                            t,
                            n,
                            f,
                            1
                        ];
                        if (e.match(/^#?([A-Fa-f0-9]{8})$/)) return 9 === e.length && (e = e.substr(1)), o = parseInt(e, 16), t = o >> 24 & 255, n = o >> 16 & 255, f = o >> 8 & 255, r = 255 & o, [
                            t,
                            n,
                            f,
                            r
                        ];
                        if (a = p(e)) return a;
                        throw "unknown color: " + e;
                    }, y = function(e, r, f) {
                        var n, t, c, u;
                        return u = z(arguments), e = u[0], r = u[1], f = u[2], e /= 360, 1 / 3 > e ? (n = (1 - r) / 3, c = (1 + r * g(o * e) / g(a - o * e)) / 3, t = 1 - (n + c)) : 2 / 3 > e ? (e -= 1 / 3, c = (1 - r) / 3, t = (1 + r * g(o * e) / g(a - o * e)) / 3, n = 1 - (c + t)) : (e -= 2 / 3, t = (1 - r) / 3, n = (1 + r * g(o * e) / g(a - o * e)) / 3, c = 1 - (t + n)), c = N(f * c * 3), t = N(f * t * 3), n = N(f * n * 3), [
                            255 * c,
                            255 * t,
                            255 * n
                        ];
                    }, v = function() {
                        var e, r, f, n, t, a, o, c, u, l, i, d, s, b;
                        if (s = z(arguments), n = s[0], c = s[1], a = s[2], 0 === c) o = f = e = 255 * a;
                        else {
                            for(i = [
                                0,
                                0,
                                0
                            ], r = [
                                0,
                                0,
                                0
                            ], l = .5 > a ? a * (1 + c) : a + c - a * c, u = 2 * a - l, n /= 360, i[0] = n + 1 / 3, i[1] = n, i[2] = n - 1 / 3, t = d = 0; 2 >= d; t = ++d)i[t] < 0 && (i[t] += 1), i[t] > 1 && (i[t] -= 1), r[t] = 6 * i[t] < 1 ? u + 6 * (l - u) * i[t] : 2 * i[t] < 1 ? l : 3 * i[t] < 2 ? u + (l - u) * (2 / 3 - i[t]) * 6 : u;
                            b = [
                                Math.round(255 * r[0]),
                                Math.round(255 * r[1]),
                                Math.round(255 * r[2])
                            ], o = b[0], f = b[1], e = b[2];
                        }
                        return [
                            o,
                            f,
                            e
                        ];
                    }, w = function() {
                        var e, r, f, n, t, a, o, c, u, l, i, d, s, b, h, g, p, m;
                        if (d = z(arguments), n = d[0], u = d[1], i = d[2], i *= 255, 0 === u) c = f = e = i;
                        else switch(360 === n && (n = 0), n > 360 && (n -= 360), 0 > n && (n += 360), n /= 60, t = Math.floor(n), r = n - t, a = i * (1 - u), o = i * (1 - u * r), l = i * (1 - u * (1 - r)), t){
                            case 0:
                                s = [
                                    i,
                                    l,
                                    a
                                ], c = s[0], f = s[1], e = s[2];
                                break;
                            case 1:
                                b = [
                                    o,
                                    i,
                                    a
                                ], c = b[0], f = b[1], e = b[2];
                                break;
                            case 2:
                                h = [
                                    a,
                                    i,
                                    l
                                ], c = h[0], f = h[1], e = h[2];
                                break;
                            case 3:
                                g = [
                                    a,
                                    o,
                                    i
                                ], c = g[0], f = g[1], e = g[2];
                                break;
                            case 4:
                                p = [
                                    l,
                                    a,
                                    i
                                ], c = p[0], f = p[1], e = p[2];
                                break;
                            case 5:
                                m = [
                                    i,
                                    a,
                                    o
                                ], c = m[0], f = m[1], e = m[2];
                        }
                        return c = Math.round(c), f = Math.round(f), e = Math.round(e), [
                            c,
                            f,
                            e
                        ];
                    }, t = 18, c = .95047, u = 1, l = 1.08883, _ = function() {
                        var e, r, f, n, t, a;
                        return a = z(arguments), t = a[0], e = a[1], r = a[2], f = Math.sqrt(e * e + r * r), n = Math.atan2(r, e) / Math.PI * 180, [
                            t,
                            f,
                            n
                        ];
                    }, k = function(e, r, f) {
                        var n, t, a, o, i, d, s;
                        return void 0 !== e && 3 === e.length && (d = e, e = d[0], r = d[1], f = d[2]), void 0 !== e && 3 === e.length && (s = e, e = s[0], r = s[1], f = s[2]), o = (e + 16) / 116, a = o + r / 500, i = o - f / 200, a = x(a) * c, o = x(o) * u, i = x(i) * l, t = T(3.2404542 * a - 1.5371385 * o - .4985314 * i), n = T(-0.969266 * a + 1.8760108 * o + .041556 * i), f = T(.0556434 * a - .2040259 * o + 1.0572252 * i), [
                            N(t, 0, 255),
                            N(n, 0, 255),
                            N(f, 0, 255),
                            1
                        ];
                    }, x = function(e) {
                        return e > .206893034 ? e * e * e : (e - 4 / 29) / 7.787037;
                    }, T = function(e) {
                        return Math.round(255 * (.00304 >= e ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055));
                    }, M = function() {
                        var e, r, f, n;
                        return n = z(arguments), f = n[0], e = n[1], r = n[2], r = r * Math.PI / 180, [
                            f,
                            Math.cos(r) * e,
                            Math.sin(r) * e
                        ];
                    }, j = function(e, r, f) {
                        var n, t, a, o, c, u, l;
                        return u = M(e, r, f), n = u[0], t = u[1], a = u[2], l = k(n, t, a), c = l[0], o = l[1], a = l[2], [
                            N(c, 0, 255),
                            N(o, 0, 255),
                            N(a, 0, 255)
                        ];
                    }, P = function(e, r, f) {
                        var n;
                        return n = z(arguments), e = n[0], r = n[1], f = n[2], e = q(e), r = q(r), f = q(f), .2126 * e + .7152 * r + .0722 * f;
                    }, q = function(e) {
                        return e /= 255, .03928 >= e ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4);
                    }, A = function() {
                        var e, r, f, n, t, a;
                        return a = z(arguments), f = a[0], r = a[1], e = a[2], t = f << 16 | r << 8 | e, n = "000000" + t.toString(16), "#" + n.substr(n.length - 6);
                    }, G = function() {
                        var e, r, f, n, t, a, o, c, u;
                        return u = z(arguments), o = u[0], f = u[1], r = u[2], e = 2 * Math.PI, o /= 255, f /= 255, r /= 255, a = Math.min(o, f, r), t = (o + f + r) / 3, c = 1 - a / t, 0 === c ? n = 0 : (n = (o - f + (o - r)) / 2, n /= Math.sqrt((o - f) * (o - f) + (o - r) * (f - r)), n = Math.acos(n), r > f && (n = e - n), n /= e), [
                            360 * n,
                            c,
                            t
                        ];
                    }, B = function(e, r, f) {
                        var n, t, a, o, c, u;
                        return void 0 !== e && e.length >= 3 && (u = e, e = u[0], r = u[1], f = u[2]), e /= 255, r /= 255, f /= 255, o = Math.min(e, r, f), a = Math.max(e, r, f), t = (a + o) / 2, a === o ? (c = 0, n = Number.NaN) : c = .5 > t ? (a - o) / (a + o) : (a - o) / (2 - a - o), e === a ? n = (r - f) / (a - o) : r === a ? n = 2 + (f - e) / (a - o) : f === a && (n = 4 + (e - r) / (a - o)), n *= 60, 0 > n && (n += 360), [
                            n,
                            c,
                            t
                        ];
                    }, I = function() {
                        var e, r, f, n, t, a, o, c, u, l;
                        return l = z(arguments), o = l[0], f = l[1], e = l[2], a = Math.min(o, f, e), t = Math.max(o, f, e), r = t - a, u = t / 255, 0 === t ? (n = Number.NaN, c = 0) : (c = r / t, o === t && (n = (f - e) / r), f === t && (n = 2 + (e - o) / r), e === t && (n = 4 + (o - f) / r), n *= 60, 0 > n && (n += 360)), [
                            n,
                            c,
                            u
                        ];
                    }, E = function() {
                        var e, r, f, n, t, a, o;
                        return o = z(arguments), f = o[0], r = o[1], e = o[2], f = S(f), r = S(r), e = S(e), n = Y((.4124564 * f + .3575761 * r + .1804375 * e) / c), t = Y((.2126729 * f + .7151522 * r + .072175 * e) / u), a = Y((.0193339 * f + .119192 * r + .9503041 * e) / l), [
                            116 * t - 16,
                            500 * (n - t),
                            200 * (t - a)
                        ];
                    }, S = function(e) {
                        return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4);
                    }, Y = function(e) {
                        return e > .008856 ? Math.pow(e, 1 / 3) : 7.787037 * e + 4 / 29;
                    }, R = function() {
                        var e, r, f, n, t, a, o;
                        return a = z(arguments), t = a[0], f = a[1], r = a[2], o = E(t, f, r), n = o[0], e = o[1], r = o[2], _(n, e, r);
                    }, s.scale = function(e, r) {
                        var f, n, t, a, o, c, u, l, i, d, b, h, g, p, m, y, v, w, _, k, x;
                        return y = "rgb", v = s("#ccc"), x = 0, g = !1, h = [
                            0,
                            1
                        ], d = [], _ = !1, k = [], m = 0, p = 1, b = !1, w = 0, i = {}, c = function(e, r) {
                            var f, n, t, a, c, u, l;
                            if (null == e && (e = [
                                "#ddd",
                                "#222"
                            ]), null != e && "string" === U(e) && null != (null != (c = s.brewer) ? c[e] : void 0) && (e = s.brewer[e]), "array" === U(e)) {
                                for(e = e.slice(0), f = t = 0, u = e.length - 1; u >= 0 ? u >= t : t >= u; f = u >= 0 ? ++t : --t)n = e[f], "string" === U(n) && (e[f] = s(n));
                                if (null != r) k = r;
                                else for(k = [], f = a = 0, l = e.length - 1; l >= 0 ? l >= a : a >= l; f = l >= 0 ? ++a : --a)k.push(f / (e.length - 1));
                            }
                            return o(), d = e;
                        }, u = function(e) {
                            return null == e && (e = []), h = e, m = e[0], p = e[e.length - 1], o(), w = 2 === e.length ? 0 : e.length - 1;
                        }, t = function(e) {
                            var r, f;
                            if (null != h) {
                                for(f = h.length - 1, r = 0; f > r && e >= h[r];)r++;
                                return r - 1;
                            }
                            return 0;
                        }, l = function(e) {
                            return e;
                        }, f = function(e) {
                            var r, f, n, a, o;
                            return o = e, h.length > 2 && (a = h.length - 1, r = t(e), n = h[0] + (h[1] - h[0]) * (0 + .5 * x), f = h[a - 1] + (h[a] - h[a - 1]) * (1 - .5 * x), o = m + (h[r] + .5 * (h[r + 1] - h[r]) - n) / (f - n) * (p - m)), o;
                        }, a = function(e, r) {
                            var f, n, a, o, c, u, b, g, _;
                            if (null == r && (r = !1), isNaN(e)) return v;
                            if (r ? b = e : h.length > 2 ? (f = t(e), b = f / (w - 1)) : (b = a = m !== p ? (e - m) / (p - m) : 0, b = a = (e - m) / (p - m), b = Math.min(1, Math.max(0, b))), r || (b = l(b)), c = Math.floor(1e4 * b), i[c]) n = i[c];
                            else {
                                if ("array" === U(d)) for(o = g = 0, _ = k.length - 1; _ >= 0 ? _ >= g : g >= _; o = _ >= 0 ? ++g : --g){
                                    if (u = k[o], u >= b) {
                                        n = d[o];
                                        break;
                                    }
                                    if (b >= u && o === k.length - 1) {
                                        n = d[o];
                                        break;
                                    }
                                    if (b > u && b < k[o + 1]) {
                                        b = (b - u) / (k[o + 1] - u), n = s.interpolate(d[o], d[o + 1], b, y);
                                        break;
                                    }
                                }
                                else "function" === U(d) && (n = d(b));
                                i[c] = n;
                            }
                            return n;
                        }, o = function() {
                            return i = {};
                        }, c(e, r), n = function(e) {
                            var r;
                            return r = a(e), _ && r[_] ? r[_]() : r;
                        }, n.domain = function(e, r, f, t) {
                            var a;
                            return null == f && (f = "e"), arguments.length ? (null != r && (a = s.analyze(e, t), e = 0 === r ? [
                                a.min,
                                a.max
                            ] : s.limits(a, f, r)), u(e), n) : h;
                        }, n.mode = function(e) {
                            return arguments.length ? (y = e, o(), n) : y;
                        }, n.range = function(e, r) {
                            return c(e, r), n;
                        }, n.out = function(e) {
                            return _ = e, n;
                        }, n.spread = function(e) {
                            return arguments.length ? (x = e, n) : x;
                        }, n.correctLightness = function(e) {
                            return arguments.length ? (b = e, o(), l = b ? function(e) {
                                var r, f, n, t, o, c, u, l, i;
                                for(r = a(0, !0).lab()[0], f = a(1, !0).lab()[0], u = r > f, n = a(e, !0).lab()[0], o = r + (f - r) * e, t = n - o, l = 0, i = 1, c = 20; Math.abs(t) > .01 && c-- > 0;)!function() {
                                    return u && (t *= -1), 0 > t ? (l = e, e += .5 * (i - e)) : (i = e, e += .5 * (l - e)), n = a(e, !0).lab()[0], t = n - o;
                                }();
                                return e;
                            } : function(e) {
                                return e;
                            }, n) : b;
                        }, n.colors = function(r) {
                            var f, t, a, o, c, u;
                            if (null == r && (r = "hex"), e = [], t = [], h.length > 2) for(f = a = 1, u = h.length; u >= 1 ? u > a : a > u; f = u >= 1 ? ++a : --a)t.push(.5 * (h[f - 1] + h[f]));
                            else t = h;
                            for(o = 0, c = t.length; c > o; o++)f = t[o], e.push(n(f)[r]());
                            return e;
                        }, n;
                    }, null == (C = s.scales) && (s.scales = {}), s.scales.cool = function() {
                        return s.scale([
                            s.hsl(180, 1, .9),
                            s.hsl(250, .7, .4)
                        ]);
                    }, s.scales.hot = function() {
                        return s.scale([
                            "#000",
                            "#f00",
                            "#ff0",
                            "#fff"
                        ], [
                            0,
                            .25,
                            .75,
                            1
                        ]).mode("rgb");
                    }, s.analyze = function(e, r, f) {
                        var n, t, a, o, c, u, l;
                        if (a = {
                            min: Number.MAX_VALUE,
                            max: -1 * Number.MAX_VALUE,
                            sum: 0,
                            values: [],
                            count: 0
                        }, null == f && (f = function() {
                            return !0;
                        }), n = function(e) {
                            null == e || isNaN(e) || (a.values.push(e), a.sum += e, e < a.min && (a.min = e), e > a.max && (a.max = e), a.count += 1);
                        }, c = function(e, t) {
                            return f(e, t) ? null != r && "function" === U(r) ? n(r(e)) : null != r && "string" === U(r) || "number" === U(r) ? n(e[r]) : n(e) : void 0;
                        }, "array" === U(e)) for(u = 0, l = e.length; l > u; u++)o = e[u], c(o);
                        else for(t in e)o = e[t], c(o, t);
                        return a.domain = [
                            a.min,
                            a.max
                        ], a.limits = function(e, r) {
                            return s.limits(a, e, r);
                        }, a;
                    }, s.limits = function(e, r, f) {
                        var n, t, a, o, c, u, l, i, d, b, h, g, p, m, y, v, w, _, k, x, M, j, N, P, q, A, G, B, I, E, R, S, O, z, Y, T, C, L, F, V, D, X, W, $, Z, H, J, K, Q, er, rr, fr, nr, tr, ar, or;
                        if (null == r && (r = "equal"), null == f && (f = 7), "array" === U(e) && (e = s.analyze(e)), p = e.min, h = e.max, N = e.sum, A = e.values.sort(function(e, r) {
                            return e - r;
                        }), b = [], "c" === r.substr(0, 1) && (b.push(p), b.push(h)), "e" === r.substr(0, 1)) {
                            for(b.push(p), l = G = 1, C = f - 1; C >= 1 ? C >= G : G >= C; l = C >= 1 ? ++G : --G)b.push(p + l / f * (h - p));
                            b.push(h);
                        } else if ("l" === r.substr(0, 1)) {
                            if (0 >= p) throw "Logarithmic scales are only possible for values > 0";
                            for(m = Math.LOG10E * Math.log(p), g = Math.LOG10E * Math.log(h), b.push(p), l = B = 1, $ = f - 1; $ >= 1 ? $ >= B : B >= $; l = $ >= 1 ? ++B : --B)b.push(Math.pow(10, m + l / f * (g - m)));
                            b.push(h);
                        } else if ("q" === r.substr(0, 1)) {
                            for(b.push(p), l = I = 1, Z = f - 1; Z >= 1 ? Z >= I : I >= Z; l = Z >= 1 ? ++I : --I)k = A.length * l / f, x = Math.floor(k), x === k ? b.push(A[x]) : (M = k - x, b.push(A[x] * M + A[x + 1] * (1 - M)));
                            b.push(h);
                        } else if ("k" === r.substr(0, 1)) {
                            for(v = A.length, n = new Array(v), c = new Array(f), j = !0, w = 0, a = null, a = [], a.push(p), l = E = 1, H = f - 1; H >= 1 ? H >= E : E >= H; l = H >= 1 ? ++E : --E)a.push(p + l / f * (h - p));
                            for(a.push(h); j;){
                                for(i = R = 0, J = f - 1; J >= 0 ? J >= R : R >= J; i = J >= 0 ? ++R : --R)c[i] = 0;
                                for(l = S = 0, K = v - 1; K >= 0 ? K >= S : S >= K; l = K >= 0 ? ++S : --S){
                                    for(q = A[l], y = Number.MAX_VALUE, i = O = 0, Q = f - 1; Q >= 0 ? Q >= O : O >= Q; i = Q >= 0 ? ++O : --O)u = Math.abs(a[i] - q), y > u && (y = u, t = i);
                                    c[t]++, n[l] = t;
                                }
                                for(_ = new Array(f), i = z = 0, er = f - 1; er >= 0 ? er >= z : z >= er; i = er >= 0 ? ++z : --z)_[i] = null;
                                for(l = Y = 0, rr = v - 1; rr >= 0 ? rr >= Y : Y >= rr; l = rr >= 0 ? ++Y : --Y)o = n[l], null === _[o] ? _[o] = A[l] : _[o] += A[l];
                                for(i = T = 0, L = f - 1; L >= 0 ? L >= T : T >= L; i = L >= 0 ? ++T : --T)_[i] *= 1 / c[i];
                                for(j = !1, i = fr = 0, F = f - 1; F >= 0 ? F >= fr : fr >= F; i = F >= 0 ? ++fr : --fr)if (_[i] !== a[l]) {
                                    j = !0;
                                    break;
                                }
                                a = _, w++, w > 200 && (j = !1);
                            }
                            for(d = {}, i = nr = 0, V = f - 1; V >= 0 ? V >= nr : nr >= V; i = V >= 0 ? ++nr : --nr)d[i] = [];
                            for(l = tr = 0, D = v - 1; D >= 0 ? D >= tr : tr >= D; l = D >= 0 ? ++tr : --tr)o = n[l], d[o].push(A[l]);
                            for(P = [], i = ar = 0, X = f - 1; X >= 0 ? X >= ar : ar >= X; i = X >= 0 ? ++ar : --ar)P.push(d[i][0]), P.push(d[i][d[i].length - 1]);
                            for(P = P.sort(function(e, r) {
                                return e - r;
                            }), b.push(P[0]), l = or = 1, W = P.length - 1; W >= or; l = or += 2)isNaN(P[l]) || b.push(P[l]);
                        }
                        return b;
                    }, s.brewer = d = {
                        OrRd: [
                            "#fff7ec",
                            "#fee8c8",
                            "#fdd49e",
                            "#fdbb84",
                            "#fc8d59",
                            "#ef6548",
                            "#d7301f",
                            "#b30000",
                            "#7f0000"
                        ],
                        PuBu: [
                            "#fff7fb",
                            "#ece7f2",
                            "#d0d1e6",
                            "#a6bddb",
                            "#74a9cf",
                            "#3690c0",
                            "#0570b0",
                            "#045a8d",
                            "#023858"
                        ],
                        BuPu: [
                            "#f7fcfd",
                            "#e0ecf4",
                            "#bfd3e6",
                            "#9ebcda",
                            "#8c96c6",
                            "#8c6bb1",
                            "#88419d",
                            "#810f7c",
                            "#4d004b"
                        ],
                        Oranges: [
                            "#fff5eb",
                            "#fee6ce",
                            "#fdd0a2",
                            "#fdae6b",
                            "#fd8d3c",
                            "#f16913",
                            "#d94801",
                            "#a63603",
                            "#7f2704"
                        ],
                        BuGn: [
                            "#f7fcfd",
                            "#e5f5f9",
                            "#ccece6",
                            "#99d8c9",
                            "#66c2a4",
                            "#41ae76",
                            "#238b45",
                            "#006d2c",
                            "#00441b"
                        ],
                        YlOrBr: [
                            "#ffffe5",
                            "#fff7bc",
                            "#fee391",
                            "#fec44f",
                            "#fe9929",
                            "#ec7014",
                            "#cc4c02",
                            "#993404",
                            "#662506"
                        ],
                        YlGn: [
                            "#ffffe5",
                            "#f7fcb9",
                            "#d9f0a3",
                            "#addd8e",
                            "#78c679",
                            "#41ab5d",
                            "#238443",
                            "#006837",
                            "#004529"
                        ],
                        Reds: [
                            "#fff5f0",
                            "#fee0d2",
                            "#fcbba1",
                            "#fc9272",
                            "#fb6a4a",
                            "#ef3b2c",
                            "#cb181d",
                            "#a50f15",
                            "#67000d"
                        ],
                        RdPu: [
                            "#fff7f3",
                            "#fde0dd",
                            "#fcc5c0",
                            "#fa9fb5",
                            "#f768a1",
                            "#dd3497",
                            "#ae017e",
                            "#7a0177",
                            "#49006a"
                        ],
                        Greens: [
                            "#f7fcf5",
                            "#e5f5e0",
                            "#c7e9c0",
                            "#a1d99b",
                            "#74c476",
                            "#41ab5d",
                            "#238b45",
                            "#006d2c",
                            "#00441b"
                        ],
                        YlGnBu: [
                            "#ffffd9",
                            "#edf8b1",
                            "#c7e9b4",
                            "#7fcdbb",
                            "#41b6c4",
                            "#1d91c0",
                            "#225ea8",
                            "#253494",
                            "#081d58"
                        ],
                        Purples: [
                            "#fcfbfd",
                            "#efedf5",
                            "#dadaeb",
                            "#bcbddc",
                            "#9e9ac8",
                            "#807dba",
                            "#6a51a3",
                            "#54278f",
                            "#3f007d"
                        ],
                        GnBu: [
                            "#f7fcf0",
                            "#e0f3db",
                            "#ccebc5",
                            "#a8ddb5",
                            "#7bccc4",
                            "#4eb3d3",
                            "#2b8cbe",
                            "#0868ac",
                            "#084081"
                        ],
                        Greys: [
                            "#ffffff",
                            "#f0f0f0",
                            "#d9d9d9",
                            "#bdbdbd",
                            "#969696",
                            "#737373",
                            "#525252",
                            "#252525",
                            "#000000"
                        ],
                        YlOrRd: [
                            "#ffffcc",
                            "#ffeda0",
                            "#fed976",
                            "#feb24c",
                            "#fd8d3c",
                            "#fc4e2a",
                            "#e31a1c",
                            "#bd0026",
                            "#800026"
                        ],
                        PuRd: [
                            "#f7f4f9",
                            "#e7e1ef",
                            "#d4b9da",
                            "#c994c7",
                            "#df65b0",
                            "#e7298a",
                            "#ce1256",
                            "#980043",
                            "#67001f"
                        ],
                        Blues: [
                            "#f7fbff",
                            "#deebf7",
                            "#c6dbef",
                            "#9ecae1",
                            "#6baed6",
                            "#4292c6",
                            "#2171b5",
                            "#08519c",
                            "#08306b"
                        ],
                        PuBuGn: [
                            "#fff7fb",
                            "#ece2f0",
                            "#d0d1e6",
                            "#a6bddb",
                            "#67a9cf",
                            "#3690c0",
                            "#02818a",
                            "#016c59",
                            "#014636"
                        ],
                        Spectral: [
                            "#9e0142",
                            "#d53e4f",
                            "#f46d43",
                            "#fdae61",
                            "#fee08b",
                            "#ffffbf",
                            "#e6f598",
                            "#abdda4",
                            "#66c2a5",
                            "#3288bd",
                            "#5e4fa2"
                        ],
                        RdYlGn: [
                            "#a50026",
                            "#d73027",
                            "#f46d43",
                            "#fdae61",
                            "#fee08b",
                            "#ffffbf",
                            "#d9ef8b",
                            "#a6d96a",
                            "#66bd63",
                            "#1a9850",
                            "#006837"
                        ],
                        RdBu: [
                            "#67001f",
                            "#b2182b",
                            "#d6604d",
                            "#f4a582",
                            "#fddbc7",
                            "#f7f7f7",
                            "#d1e5f0",
                            "#92c5de",
                            "#4393c3",
                            "#2166ac",
                            "#053061"
                        ],
                        PiYG: [
                            "#8e0152",
                            "#c51b7d",
                            "#de77ae",
                            "#f1b6da",
                            "#fde0ef",
                            "#f7f7f7",
                            "#e6f5d0",
                            "#b8e186",
                            "#7fbc41",
                            "#4d9221",
                            "#276419"
                        ],
                        PRGn: [
                            "#40004b",
                            "#762a83",
                            "#9970ab",
                            "#c2a5cf",
                            "#e7d4e8",
                            "#f7f7f7",
                            "#d9f0d3",
                            "#a6dba0",
                            "#5aae61",
                            "#1b7837",
                            "#00441b"
                        ],
                        RdYlBu: [
                            "#a50026",
                            "#d73027",
                            "#f46d43",
                            "#fdae61",
                            "#fee090",
                            "#ffffbf",
                            "#e0f3f8",
                            "#abd9e9",
                            "#74add1",
                            "#4575b4",
                            "#313695"
                        ],
                        BrBG: [
                            "#543005",
                            "#8c510a",
                            "#bf812d",
                            "#dfc27d",
                            "#f6e8c3",
                            "#f5f5f5",
                            "#c7eae5",
                            "#80cdc1",
                            "#35978f",
                            "#01665e",
                            "#003c30"
                        ],
                        RdGy: [
                            "#67001f",
                            "#b2182b",
                            "#d6604d",
                            "#f4a582",
                            "#fddbc7",
                            "#ffffff",
                            "#e0e0e0",
                            "#bababa",
                            "#878787",
                            "#4d4d4d",
                            "#1a1a1a"
                        ],
                        PuOr: [
                            "#7f3b08",
                            "#b35806",
                            "#e08214",
                            "#fdb863",
                            "#fee0b6",
                            "#f7f7f7",
                            "#d8daeb",
                            "#b2abd2",
                            "#8073ac",
                            "#542788",
                            "#2d004b"
                        ],
                        Set2: [
                            "#66c2a5",
                            "#fc8d62",
                            "#8da0cb",
                            "#e78ac3",
                            "#a6d854",
                            "#ffd92f",
                            "#e5c494",
                            "#b3b3b3"
                        ],
                        Accent: [
                            "#7fc97f",
                            "#beaed4",
                            "#fdc086",
                            "#ffff99",
                            "#386cb0",
                            "#f0027f",
                            "#bf5b17",
                            "#666666"
                        ],
                        Set1: [
                            "#e41a1c",
                            "#377eb8",
                            "#4daf4a",
                            "#984ea3",
                            "#ff7f00",
                            "#ffff33",
                            "#a65628",
                            "#f781bf",
                            "#999999"
                        ],
                        Set3: [
                            "#8dd3c7",
                            "#ffffb3",
                            "#bebada",
                            "#fb8072",
                            "#80b1d3",
                            "#fdb462",
                            "#b3de69",
                            "#fccde5",
                            "#d9d9d9",
                            "#bc80bd",
                            "#ccebc5",
                            "#ffed6f"
                        ],
                        Dark2: [
                            "#1b9e77",
                            "#d95f02",
                            "#7570b3",
                            "#e7298a",
                            "#66a61e",
                            "#e6ab02",
                            "#a6761d",
                            "#666666"
                        ],
                        Paired: [
                            "#a6cee3",
                            "#1f78b4",
                            "#b2df8a",
                            "#33a02c",
                            "#fb9a99",
                            "#e31a1c",
                            "#fdbf6f",
                            "#ff7f00",
                            "#cab2d6",
                            "#6a3d9a",
                            "#ffff99",
                            "#b15928"
                        ],
                        Pastel2: [
                            "#b3e2cd",
                            "#fdcdac",
                            "#cbd5e8",
                            "#f4cae4",
                            "#e6f5c9",
                            "#fff2ae",
                            "#f1e2cc",
                            "#cccccc"
                        ],
                        Pastel1: [
                            "#fbb4ae",
                            "#b3cde3",
                            "#ccebc5",
                            "#decbe4",
                            "#fed9a6",
                            "#ffffcc",
                            "#e5d8bd",
                            "#fddaec",
                            "#f2f2f2"
                        ]
                    }, s.colors = h = {
                        indigo: "#4b0082",
                        gold: "#ffd700",
                        hotpink: "#ff69b4",
                        firebrick: "#b22222",
                        indianred: "#cd5c5c",
                        yellow: "#ffff00",
                        mistyrose: "#ffe4e1",
                        darkolivegreen: "#556b2f",
                        olive: "#808000",
                        darkseagreen: "#8fbc8f",
                        pink: "#ffc0cb",
                        tomato: "#ff6347",
                        lightcoral: "#f08080",
                        orangered: "#ff4500",
                        navajowhite: "#ffdead",
                        lime: "#00ff00",
                        palegreen: "#98fb98",
                        darkslategrey: "#2f4f4f",
                        greenyellow: "#adff2f",
                        burlywood: "#deb887",
                        seashell: "#fff5ee",
                        mediumspringgreen: "#00fa9a",
                        fuchsia: "#ff00ff",
                        papayawhip: "#ffefd5",
                        blanchedalmond: "#ffebcd",
                        chartreuse: "#7fff00",
                        dimgray: "#696969",
                        black: "#000000",
                        peachpuff: "#ffdab9",
                        springgreen: "#00ff7f",
                        aquamarine: "#7fffd4",
                        white: "#ffffff",
                        orange: "#ffa500",
                        lightsalmon: "#ffa07a",
                        darkslategray: "#2f4f4f",
                        brown: "#a52a2a",
                        ivory: "#fffff0",
                        dodgerblue: "#1e90ff",
                        peru: "#cd853f",
                        lawngreen: "#7cfc00",
                        chocolate: "#d2691e",
                        crimson: "#dc143c",
                        forestgreen: "#228b22",
                        darkgrey: "#a9a9a9",
                        lightseagreen: "#20b2aa",
                        cyan: "#00ffff",
                        mintcream: "#f5fffa",
                        silver: "#c0c0c0",
                        antiquewhite: "#faebd7",
                        mediumorchid: "#ba55d3",
                        skyblue: "#87ceeb",
                        gray: "#808080",
                        darkturquoise: "#00ced1",
                        goldenrod: "#daa520",
                        darkgreen: "#006400",
                        floralwhite: "#fffaf0",
                        darkviolet: "#9400d3",
                        darkgray: "#a9a9a9",
                        moccasin: "#ffe4b5",
                        saddlebrown: "#8b4513",
                        grey: "#808080",
                        darkslateblue: "#483d8b",
                        lightskyblue: "#87cefa",
                        lightpink: "#ffb6c1",
                        mediumvioletred: "#c71585",
                        slategrey: "#708090",
                        red: "#ff0000",
                        deeppink: "#ff1493",
                        limegreen: "#32cd32",
                        darkmagenta: "#8b008b",
                        palegoldenrod: "#eee8aa",
                        plum: "#dda0dd",
                        turquoise: "#40e0d0",
                        lightgrey: "#d3d3d3",
                        lightgoldenrodyellow: "#fafad2",
                        darkgoldenrod: "#b8860b",
                        lavender: "#e6e6fa",
                        maroon: "#800000",
                        yellowgreen: "#9acd32",
                        sandybrown: "#f4a460",
                        thistle: "#d8bfd8",
                        violet: "#ee82ee",
                        navy: "#000080",
                        magenta: "#ff00ff",
                        dimgrey: "#696969",
                        tan: "#d2b48c",
                        rosybrown: "#bc8f8f",
                        olivedrab: "#6b8e23",
                        blue: "#0000ff",
                        lightblue: "#add8e6",
                        ghostwhite: "#f8f8ff",
                        honeydew: "#f0fff0",
                        cornflowerblue: "#6495ed",
                        slateblue: "#6a5acd",
                        linen: "#faf0e6",
                        darkblue: "#00008b",
                        powderblue: "#b0e0e6",
                        seagreen: "#2e8b57",
                        darkkhaki: "#bdb76b",
                        snow: "#fffafa",
                        sienna: "#a0522d",
                        mediumblue: "#0000cd",
                        royalblue: "#4169e1",
                        lightcyan: "#e0ffff",
                        green: "#008000",
                        mediumpurple: "#9370db",
                        midnightblue: "#191970",
                        cornsilk: "#fff8dc",
                        paleturquoise: "#afeeee",
                        bisque: "#ffe4c4",
                        slategray: "#708090",
                        darkcyan: "#008b8b",
                        khaki: "#f0e68c",
                        wheat: "#f5deb3",
                        teal: "#008080",
                        darkorchid: "#9932cc",
                        deepskyblue: "#00bfff",
                        salmon: "#fa8072",
                        darkred: "#8b0000",
                        steelblue: "#4682b4",
                        palevioletred: "#db7093",
                        lightslategray: "#778899",
                        aliceblue: "#f0f8ff",
                        lightslategrey: "#778899",
                        lightgreen: "#90ee90",
                        orchid: "#da70d6",
                        gainsboro: "#dcdcdc",
                        mediumseagreen: "#3cb371",
                        lightgray: "#d3d3d3",
                        mediumturquoise: "#48d1cc",
                        lemonchiffon: "#fffacd",
                        cadetblue: "#5f9ea0",
                        lightyellow: "#ffffe0",
                        lavenderblush: "#fff0f5",
                        coral: "#ff7f50",
                        purple: "#800080",
                        aqua: "#00ffff",
                        whitesmoke: "#f5f5f5",
                        mediumslateblue: "#7b68ee",
                        darkorange: "#ff8c00",
                        mediumaquamarine: "#66cdaa",
                        darksalmon: "#e9967a",
                        beige: "#f5f5dc",
                        blueviolet: "#8a2be2",
                        azure: "#f0ffff",
                        lightsteelblue: "#b0c4de",
                        oldlace: "#fdf5e6"
                    }, U = function() {
                        var e, r, f, n, t;
                        for(e = {}, t = "Boolean Number String Function Array Date RegExp Undefined Null".split(" "), f = 0, n = t.length; n > f; f++)r = t[f], e["[object " + r + "]"] = r.toLowerCase();
                        return function(r) {
                            var f;
                            return f = Object.prototype.toString.call(r), e[f] || "object";
                        };
                    }(), N = function(e, r, f) {
                        return null == r && (r = 0), null == f && (f = 1), r > e && (e = r), e > f && (e = f), e;
                    }, z = function(e) {
                        return e.length >= 3 ? e : e[0];
                    }, o = 2 * Math.PI, a = Math.PI / 3, g = Math.cos, i = function(e) {
                        var r, f, n, t, a, o, c, u, l, d, b;
                        return e = function() {
                            var r, f, n;
                            for(n = [], r = 0, f = e.length; f > r; r++)t = e[r], n.push(s(t));
                            return n;
                        }(), 2 === e.length ? (l = function() {
                            var r, f, n;
                            for(n = [], r = 0, f = e.length; f > r; r++)t = e[r], n.push(t.lab());
                            return n;
                        }(), a = l[0], o = l[1], r = function(e) {
                            var r, f;
                            return f = function() {
                                var f, n;
                                for(n = [], r = f = 0; 2 >= f; r = ++f)n.push(a[r] + e * (o[r] - a[r]));
                                return n;
                            }(), s.lab.apply(s, f);
                        }) : 3 === e.length ? (d = function() {
                            var r, f, n;
                            for(n = [], r = 0, f = e.length; f > r; r++)t = e[r], n.push(t.lab());
                            return n;
                        }(), a = d[0], o = d[1], c = d[2], r = function(e) {
                            var r, f;
                            return f = function() {
                                var f, n;
                                for(n = [], r = f = 0; 2 >= f; r = ++f)n.push((1 - e) * (1 - e) * a[r] + 2 * (1 - e) * e * o[r] + e * e * c[r]);
                                return n;
                            }(), s.lab.apply(s, f);
                        }) : 4 === e.length ? (b = function() {
                            var r, f, n;
                            for(n = [], r = 0, f = e.length; f > r; r++)t = e[r], n.push(t.lab());
                            return n;
                        }(), a = b[0], o = b[1], c = b[2], u = b[3], r = function(e) {
                            var r, f;
                            return f = function() {
                                var f, n;
                                for(n = [], r = f = 0; 2 >= f; r = ++f)n.push((1 - e) * (1 - e) * (1 - e) * a[r] + 3 * (1 - e) * (1 - e) * e * o[r] + 3 * (1 - e) * e * e * c[r] + e * e * e * u[r]);
                                return n;
                            }(), s.lab.apply(s, f);
                        }) : 5 === e.length && (f = i(e.slice(0, 3)), n = i(e.slice(2, 5)), r = function(e) {
                            return .5 > e ? f(2 * e) : n(2 * (e - .5));
                        }), r;
                    }, s.interpolate.bezier = i;
                }).call(this);
            },
            {}
        ],
        "/Users/qrohlf/Projects/trianglify/node_modules/delaunay-fast/delaunay.js": [
            function(e, r) {
                var f;
                !function() {
                    "use strict";
                    function e(e) {
                        var r, f, n, t, a, o, c = Number.POSITIVE_INFINITY, u = Number.POSITIVE_INFINITY, l = Number.NEGATIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
                        for(r = e.length; r--;)e[r][0] < c && (c = e[r][0]), e[r][0] > l && (l = e[r][0]), e[r][1] < u && (u = e[r][1]), e[r][1] > i && (i = e[r][1]);
                        return f = l - c, n = i - u, t = Math.max(f, n), a = c + .5 * f, o = u + .5 * n, [
                            [
                                a - 20 * t,
                                o - t
                            ],
                            [
                                a,
                                o + 20 * t
                            ],
                            [
                                a + 20 * t,
                                o - t
                            ]
                        ];
                    }
                    function n(e, r, f, n) {
                        var t, o, c, u, l, i, d, s, b, h, g = e[r][0], p = e[r][1], m = e[f][0], y = e[f][1], v = e[n][0], w = e[n][1], _ = Math.abs(p - y), k = Math.abs(y - w);
                        if (a > _ && a > k) throw new Error("Eek! Coincident points!");
                        return a > _ ? (u = -((v - m) / (w - y)), i = (m + v) / 2, s = (y + w) / 2, t = (m + g) / 2, o = u * (t - i) + s) : a > k ? (c = -((m - g) / (y - p)), l = (g + m) / 2, d = (p + y) / 2, t = (v + m) / 2, o = c * (t - l) + d) : (c = -((m - g) / (y - p)), u = -((v - m) / (w - y)), l = (g + m) / 2, i = (m + v) / 2, d = (p + y) / 2, s = (y + w) / 2, t = (c * l - u * i + s - d) / (c - u), o = _ > k ? c * (t - l) + d : u * (t - i) + s), b = m - t, h = y - o, {
                            i: r,
                            j: f,
                            k: n,
                            x: t,
                            y: o,
                            r: b * b + h * h
                        };
                    }
                    function t(e) {
                        var r, f, n, t, a, o;
                        for(f = e.length; f;)for(t = e[--f], n = e[--f], r = f; r;)if (o = e[--r], a = e[--r], n === a && t === o || n === o && t === a) {
                            e.splice(f, 2), e.splice(r, 2);
                            break;
                        }
                    }
                    var a = 1 / 1048576;
                    f = {
                        triangulate: function(r, f) {
                            var o, c, u, l, i, d, s, b, h, g, p, m, y = r.length;
                            if (3 > y) return [];
                            if (r = r.slice(0), f) for(o = y; o--;)r[o] = r[o][f];
                            for(u = new Array(y), o = y; o--;)u[o] = o;
                            for(u.sort(function(e, f) {
                                return r[f][0] - r[e][0];
                            }), l = e(r), r.push(l[0], l[1], l[2]), i = [
                                n(r, y + 0, y + 1, y + 2)
                            ], d = [], s = [], o = u.length; o--; s.length = 0){
                                for(m = u[o], c = i.length; c--;)b = r[m][0] - i[c].x, b > 0 && b * b > i[c].r ? (d.push(i[c]), i.splice(c, 1)) : (h = r[m][1] - i[c].y, b * b + h * h - i[c].r > a || (s.push(i[c].i, i[c].j, i[c].j, i[c].k, i[c].k, i[c].i), i.splice(c, 1)));
                                for(t(s), c = s.length; c;)p = s[--c], g = s[--c], i.push(n(r, g, p, m));
                            }
                            for(o = i.length; o--;)d.push(i[o]);
                            for(i.length = 0, o = d.length; o--;)d[o].i < y && d[o].j < y && d[o].k < y && i.push(d[o].i, d[o].j, d[o].k);
                            return i;
                        },
                        contains: function(e, r) {
                            if (r[0] < e[0][0] && r[0] < e[1][0] && r[0] < e[2][0] || r[0] > e[0][0] && r[0] > e[1][0] && r[0] > e[2][0] || r[1] < e[0][1] && r[1] < e[1][1] && r[1] < e[2][1] || r[1] > e[0][1] && r[1] > e[1][1] && r[1] > e[2][1]) return null;
                            var f = e[1][0] - e[0][0], n = e[2][0] - e[0][0], t = e[1][1] - e[0][1], a = e[2][1] - e[0][1], o = f * a - n * t;
                            if (0 === o) return null;
                            var c = (a * (r[0] - e[0][0]) - n * (r[1] - e[0][1])) / o, u = (f * (r[1] - e[0][1]) - t * (r[0] - e[0][0])) / o;
                            return 0 > c || 0 > u || c + u > 1 ? null : [
                                c,
                                u
                            ];
                        }
                    }, "undefined" != typeof r && (r.exports = f);
                }();
            },
            {}
        ],
        "/Users/qrohlf/Projects/trianglify/node_modules/seedrandom/seedrandom.js": [
            function(r, f) {
                !function(e, f, n, t, a, o, c, u, l) {
                    function i(e) {
                        var r, f = e.length, n = this, a = 0, o = n.i = n.j = 0, c = n.S = [];
                        for(f || (e = [
                            f++
                        ]); t > a;)c[a] = a++;
                        for(a = 0; t > a; a++)c[a] = c[o = w & o + e[a % f] + (r = c[a])], c[o] = r;
                        (n.g = function(e) {
                            for(var r, f = 0, a = n.i, o = n.j, c = n.S; e--;)r = c[a = w & a + 1], f = f * t + c[w & (c[a] = c[o = w & o + r]) + (c[o] = r)];
                            return n.i = a, n.j = o, f;
                        })(t);
                    }
                    function d(e, r) {
                        return r.i = e.i, r.j = e.j, r.S = e.S.slice(), r;
                    }
                    function s(e, r) {
                        var f, n = [], t = typeof e;
                        if (r && "object" == t) for(f in e)try {
                            n.push(s(e[f], r - 1));
                        } catch (a) {}
                        return n.length ? n : "string" == t ? e : e + "\x00";
                    }
                    function b(e, r) {
                        for(var f, n = e + "", t = 0; t < n.length;)r[w & t] = w & (f ^= 19 * r[w & t]) + n.charCodeAt(t++);
                        return g(r);
                    }
                    function h(r) {
                        try {
                            return p ? g(p.randomBytes(t)) : (e.crypto.getRandomValues(r = new Uint8Array(t)), g(r));
                        } catch (n) {
                            return [
                                +new Date,
                                e,
                                (r = e.navigator) && r.plugins,
                                e.screen,
                                g(f)
                            ];
                        }
                    }
                    function g(e) {
                        return String.fromCharCode.apply(0, e);
                    }
                    var p, m = n.pow(t, a), y = n.pow(2, o), v = 2 * y, w = t - 1, _ = n["seed" + l] = function(e, r, o) {
                        var c = [];
                        r = 1 == r ? {
                            entropy: !0
                        } : r || {};
                        var u = b(s(r.entropy ? [
                            e,
                            g(f)
                        ] : null == e ? h() : e, 3), c), p = new i(c);
                        return b(g(p.S), f), (r.pass || o || function(e, r, f, t) {
                            return t && (t.S && d(t, p), e.state = function() {
                                return d(p, {});
                            }), f ? (n[l] = e, r) : e;
                        })(function() {
                            for(var e = p.g(a), r = m, f = 0; y > e;)e = (e + f) * t, r *= t, f = p.g(1);
                            for(; e >= v;)e /= 2, r /= 2, f >>>= 1;
                            return (e + f) / r;
                        }, u, "global" in r ? r.global : this == n, r.state);
                    };
                    if (b(n[l](), f), c && c.exports) {
                        c.exports = _;
                        try {
                            p = r("crypto");
                        } catch (k) {}
                    } else u && u.amd && u(function() {
                        return _;
                    });
                }(this, [], Math, 256, 6, 52, "object" == typeof f && f, "function" == typeof e && e, "random");
            },
            {
                crypto: !1
            }
        ]
    }, {}, [
        "./lib/trianglify.js"
    ])("./lib/trianglify.js");
});

},{}],"3fLHG":[function(require,module,exports,__globalThis) {
!function(t, e) {
    "function" == typeof define && define.amd ? define(e) : module.exports = e();
}(this, function() {
    function t(e, n) {
        return new t.fn.init(e, n);
    }
    function e(t) {
        var e = e || s.createDocumentFragment(), n = n || e.appendChild(s.createElement("div"));
        return n.innerHTML = t, n;
    }
    function n(t, e) {
        return parseInt(u.getComputedStyle(t[0], null)[e], 10);
    }
    function i() {
        function t(t) {
            var e = (Math.random().toString(16) + "000000000").substr(2, 8);
            return t ? "-" + e.substr(0, 4) + "-" + e.substr(4, 4) : e;
        }
        return t() + t(!0) + t(!0) + t();
    }
    function r(e, n, r) {
        var s = t(e).data("cshid") || i();
        t(e).data("cshid", s), s in p || (p[s] = {}), n in p[s] || (p[s][n] = []), p[s][n].push(r);
    }
    var s = document, u = window, c = Array.prototype, a = c.slice, h = c.filter, o = /^#[\w-]*$/, f = /^\.[\w-]*$/, l = /^[\w-]*$/, d = t.fn = t.prototype = {
        cash: !0,
        length: 0
    };
    d.init = function(e, n) {
        var i, r, u = [];
        if (!e) return this;
        if (this.length = 1, "string" != typeof e) return e.cash ? e : (this[0] = e, this);
        if ("<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3) u = t.parseHTML(e);
        else {
            if (i = o.test(e), r = e.slice(1), !n && i) return this[0] = s.getElementById(r), this;
            n = t(n)[0] || s, u = a.call(l.test(r) ? f.test(e) ? s.getElementsByClassName(r) : s.getElementsByTagName(e) : n.querySelectorAll(e));
        }
        return this.length = 0, t.merge(this, u), this;
    }, d.init.prototype = d, t.each = function(t, e) {
        for(var n = t.length, i = 0; n > i; i++)e.call(t[i], t[i], i, t);
    }, t.extend = d.extend = function(t, e) {
        var n;
        e || (e = t, t = this);
        for(n in e)e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
    }, t.matches = function(t, e) {
        return (t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector).call(t, e);
    }, t.merge = function(t, e) {
        for(var n = +e.length, i = t.length, r = 0; n > r; i++, r++)t[i] = e[r];
        return t.length = i, t;
    }, t.parseHTML = function(t) {
        var n = /^<(\w+)\s*\/?>(?:<\/\1>|)$/.exec(t);
        return n ? [
            s.createElement(n[1])
        ] : (n = e(t), a.call(n.childNodes));
    }, t.unique = function(e) {
        return t.merge(t(), a.call(e).filter(function(t, e, n) {
            return n.indexOf(t) === e;
        }));
    };
    var m = /\S+/g;
    d.extend({
        addClass: function(t) {
            var e, n, i = t.match(m);
            return this.each(function(t) {
                if (n = i.length, t.classList) for(; n--;)t.classList.add(i[n]);
                else for(; n--;)e = " " + t.className + " ", -1 === e.indexOf(" " + i[n] + " ") && (t.className += " " + i[n]);
            }), this;
        },
        attr: function(t, e) {
            return e ? (this.each(function(n) {
                return n.setAttribute(t, e);
            }), this) : this[0].getAttribute(t);
        },
        hasClass: function(t) {
            return this[0].classList ? this[0].classList.contains(t) : -1 !== this[0].className.indexOf(t);
        },
        prop: function(t) {
            return this[0][t];
        },
        removeAttr: function(t) {
            return this.each(function(e) {
                return e.removeAttribute(t);
            }), this;
        },
        removeClass: function(t) {
            var e, n, i = t.match(m);
            return this.each(function(t) {
                if (e = i.length, t.classList) for(; e--;)t.classList.remove(i[e]);
                else {
                    for(n = " " + t.className + " "; e--;)n = n.replace(" " + i[e] + " ", " ");
                    t.className = n.trim();
                }
            }), this;
        }
    }), d.extend({
        add: function() {
            var e, n = a.call(this), i = 0;
            for(e = arguments.length; e > i; i++)n = n.concat(a.call(t(arguments[i])));
            return t.unique(n);
        },
        each: function(e) {
            t.each(this, e);
        },
        eq: function(e) {
            return t(this[e]);
        },
        filter: function(e) {
            return "string" == typeof e ? h.call(this, function(n) {
                return t.matches(n, e);
            }) : h.call(this, e);
        },
        first: function() {
            return t(this[0]);
        },
        get: function(t) {
            return this[t];
        },
        index: function(e) {
            return e ? a.call(t(e).children()).indexOf(this[0]) : a.call(t(this[0]).parent().children()).indexOf(this[0]);
        },
        last: function() {
            return t(this[this.length - 1]);
        }
    }), d.extend({
        css: function(t, e) {
            return "object" != typeof t ? e ? (this.each(function(n) {
                return n.style[t] = e;
            }), this) : u.getComputedStyle(this[0], null)[t] : void this.each(function(e) {
                for(var n in t)t.hasOwnProperty(n) && (e.style[n] = t[n]);
            });
        }
    }), d.extend({
        data: function(e, n) {
            return n ? (this.each(function(i) {
                i.dataset ? i.dataset[e] = n : t(i).attr("data-" + e, n);
            }), this) : this[0].dataset ? this[0].dataset[e] : t(this[0]).attr("data-" + e);
        },
        removeData: function(e) {
            return this.each(function(n) {
                n.dataset ? delete n.dataset[e] : t(n).removeAttr("data-" + e);
            }), this;
        }
    }), d.extend({
        height: function() {
            return this[0].getBoundingClientRect().height;
        },
        innerWidth: function() {
            return this[0].clientWidth;
        },
        innerHeight: function() {
            return this[0].clientHeight;
        },
        outerWidth: function(t) {
            return t === !0 ? this[0].offsetWidth + (n(this, "margin-left") || n(this, "marginLeft") || 0) + (n(this, "margin-right") || n(this, "marginRight") || 0) : this[0].offsetWidth;
        },
        outerHeight: function(t) {
            return t === !0 ? this[0].offsetHeight + (n(this, "margin-top") || n(this, "marginTop") || 0) + (n(this, "margin-bottom") || n(this, "marginBottom") || 0) : this[0].offsetHeight;
        },
        width: function() {
            return this[0].getBoundingClientRect().width;
        }
    });
    var p = {};
    d.extend({
        off: function(e, n) {
            return this.each(function(i) {
                if (n) i.removeEventListener(e, n);
                else for(var r in p[t(i).data("cshid")][e])i.removeEventListener(e, p[t(i).data("cshid")][e][r]);
            }), this;
        },
        on: function(e, n, i) {
            return "function" == typeof n ? (i = n, this.each(function(n) {
                r(t(n), e, i), n.addEventListener(e, i);
            }), this) : (this.each(function(s) {
                function u(e) {
                    var r = e.target;
                    if (t.matches(r, n)) i.call(r);
                    else {
                        for(; !t.matches(r, n);){
                            if (r === s) return r = !1;
                            r = r.parentNode;
                        }
                        r && i.call(r);
                    }
                }
                r(t(s), e, u), s.addEventListener(e, u);
            }), this);
        },
        ready: function(t) {
            this[0].addEventListener("DOMContentLoaded", t);
        },
        trigger: function(t) {
            var e = s.createEvent("HTMLEvents");
            return e.initEvent(t, !0, !1), this.each(function(t) {
                return t.dispatchEvent(e);
            }), this;
        }
    });
    var g = encodeURIComponent;
    return d.extend({
        serialize: function() {
            var t, e, n, i = this[0], r = "";
            for(e = i.elements.length - 1; e >= 0; e--)if (t = i.elements[e], t.name && "file" !== t.type && "reset" !== t.type) {
                if ("select-multiple" === t.type) for(n = i.elements[e].options.length - 1; n >= 0; n--)t.options[n].selected && (r += "&" + t.name + "=" + g(t.options[n].value).replace(/%20/g, "+"));
                else "submit" !== t.type && "button" !== t.type && (r += "&" + t.name + "=" + g(t.value).replace(/%20/g, "+"));
            }
            return r.substr(1);
        },
        val: function(t) {
            return void 0 === t ? this[0].value : (this.each(function(e) {
                return e.value = t;
            }), this);
        }
    }), d.extend({
        append: function(e) {
            return this[0].appendChild(t(e)[0]), this;
        },
        appendTo: function(e) {
            return t(e)[0].appendChild(this[0]), this;
        },
        clone: function() {
            return t(this[0].cloneNode(!0));
        },
        empty: function() {
            return this.each(function(t) {
                return t.innerHTML = "";
            }), this;
        },
        html: function(e) {
            var n;
            return "undefined" === e ? this[0].innerHTML : (n = "object" == typeof e ? t(e)[0].outerHTML : e, this.each(function(t) {
                return t.innerHTML = "" + n;
            }), this);
        },
        insertAfter: function(e) {
            return t(e)[0].insertAdjacentHTML("afterend", this[0].outerHTML), this;
        },
        insertBefore: function(e) {
            return t(e)[0].insertAdjacentHTML("beforebegin", this[0].outerHTML), this;
        },
        prepend: function(e) {
            return t(this)[0].insertAdjacentHTML("afterBegin", t(e)[0].outerHTML), this;
        },
        prependTo: function(e) {
            return t(e)[0].insertAdjacentHTML("afterBegin", this[0].outerHTML), this;
        },
        remove: function() {
            this.each(function(t) {
                return t.parentNode.removeChild(t);
            });
        },
        text: function(t) {
            return t ? (this.each(function(e) {
                return e.textContent = t;
            }), this) : this[0].textContent;
        }
    }), d.extend({
        children: function(e) {
            return e ? t(this[0].children).filter(function(n) {
                return t.matches(n, e);
            }) : t.fn.extend(this[0].children, t.fn);
        },
        closest: function(e) {
            return !e || t.matches(this[0], e) ? this : this.parent().closest(e);
        },
        is: function(e) {
            return e ? e.cash ? this[0] === e[0] : "string" == typeof e ? t.matches(this[0], e) : !1 : !1;
        },
        find: function(e) {
            return t.fn.extend(this[0].querySelectorAll(e), t.fn);
        },
        has: function(e) {
            return h.call(this, function(n) {
                return 0 !== t(n).find(e).length;
            });
        },
        next: function() {
            return t(this[0].nextElementSibling);
        },
        not: function(e) {
            return h.call(this, function(n) {
                return !t.matches(n, e);
            });
        },
        parent: function() {
            var e = c.map.call(this, function(t) {
                return t.parentElement || s.body.parentNode;
            });
            return t.unique(e);
        },
        parents: function(e) {
            var n, i = [], r = 0;
            return this.each(function(u) {
                for(n = u; n !== s.body.parentNode;)n = n.parentElement, (!e || e && t.matches(n, e)) && (i[r] = n, r++);
            }), t.unique(i);
        },
        prev: function() {
            return t(this[0].previousElementSibling);
        },
        siblings: function() {
            var t = this.parent().children(), e = this[0];
            return h.call(t, function(t) {
                return t !== e;
            });
        }
    }), t;
});

},{}],"j2RLz":[function(require,module,exports,__globalThis) {
/**
 * SplitType
 * https://github.com/lukePeavey/SplitType
 * @version 0.3.4
 * @author Luke Peavey <lwpeavey@gmail.com>
 */ !function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    function t(t, e) {
        for(var n = 0; n < e.length; n++){
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
    }
    function e(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
    }
    function n(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }
    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), n.push.apply(n, r);
        }
        return n;
    }
    function o(t) {
        for(var e = 1; e < arguments.length; e++){
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(o), !0).forEach(function(e) {
                n(t, e, o[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : r(Object(o)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
            });
        }
        return t;
    }
    function i(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t;
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for(var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
            } catch (t) {
                o = !0, i = t;
            } finally{
                try {
                    r || null == c.return || c.return();
                } finally{
                    if (o) throw i;
                }
            }
            return n;
        }(t, e) || c(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function a(t) {
        return function(t) {
            if (Array.isArray(t)) return s(t);
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }(t) || c(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function c(t, e) {
        if (t) {
            if ("string" == typeof t) return s(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0;
        }
    }
    function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for(var n = 0, r = new Array(e); n < e; n++)r[n] = t[n];
        return r;
    }
    function l(t, e) {
        return Object.getOwnPropertyNames(Object(t)).reduce(function(n, r) {
            var o = Object.getOwnPropertyDescriptor(Object(t), r), i = Object.getOwnPropertyDescriptor(Object(e), r);
            return Object.defineProperty(n, r, i || o);
        }, {});
    }
    function u(t) {
        return "string" == typeof t;
    }
    function f(t) {
        return Array.isArray(t);
    }
    function p() {
        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = l(e);
        return void 0 !== n.types ? t = n.types : void 0 !== n.split && (t = n.split), void 0 !== t && (n.types = (u(t) || f(t) ? String(t) : "").split(",").map(function(t) {
            return String(t).trim();
        }).filter(function(t) {
            return /((line)|(word)|(char))/i.test(t);
        })), (n.absolute || n.position) && (n.absolute = n.absolute || /absolute/.test(e.position)), n;
    }
    function d(t) {
        var e = u(t) || f(t) ? String(t) : "";
        return {
            none: !e,
            lines: /line/i.test(e),
            words: /word/i.test(e),
            chars: /char/i.test(e)
        };
    }
    function h(t) {
        return null !== t && "object" == typeof t;
    }
    function y(t) {
        return h(t) && /^(1|3|11)$/.test(t.nodeType);
    }
    function g(t) {
        return f(t) ? t : null == t ? [] : function(t) {
            return h(t) && function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0;
            }(t.length);
        }(t) ? Array.prototype.slice.call(t) : [
            t
        ];
    }
    function v(t) {
        var e = t;
        return u(t) && (e = /^(#[a-z]\w+)$/.test(t.trim()) ? document.getElementById(t.trim().slice(1)) : document.querySelectorAll(t)), g(e).reduce(function(t, e) {
            return [].concat(a(t), a(g(e).filter(y)));
        }, []);
    }
    !function() {
        function t() {
            for(var t = arguments.length, e = 0; e < t; e++){
                var n = e < 0 || arguments.length <= e ? void 0 : arguments[e];
                1 === n.nodeType || 11 === n.nodeType ? this.appendChild(n) : this.appendChild(document.createTextNode(String(n)));
            }
        }
        function e() {
            for(; this.lastChild;)this.removeChild(this.lastChild);
            arguments.length && this.append.apply(this, arguments);
        }
        function n() {
            for(var t = this.parentNode, e = arguments.length, n = new Array(e), r = 0; r < e; r++)n[r] = arguments[r];
            var o = n.length;
            if (t) for(o || t.removeChild(this); o--;){
                var i = n[o];
                "object" != typeof i ? i = this.ownerDocument.createTextNode(i) : i.parentNode && i.parentNode.removeChild(i), o ? t.insertBefore(this.previousSibling, i) : t.replaceChild(i, this);
            }
        }
        "undefined" != typeof Element && (Element.prototype.append || (Element.prototype.append = t, DocumentFragment.prototype.append = t), Element.prototype.replaceChildren || (Element.prototype.replaceChildren = e, DocumentFragment.prototype.replaceChildren = e), Element.prototype.replaceWith || (Element.prototype.replaceWith = n, DocumentFragment.prototype.replaceWith = n));
    }();
    var m = Object.entries, b = "_splittype", w = {}, O = 0;
    function j(t, e, n) {
        if (!h(t)) return console.warn("[data.set] owner is not an object"), null;
        var r = t[b] || (t[b] = ++O), i = w[r] || (w[r] = {});
        return void 0 === n ? e && Object.getPrototypeOf(e) === Object.prototype && (w[r] = o(o({}, i), e)) : void 0 !== e && (i[e] = n), n;
    }
    function C(t, e) {
        var n = h(t) ? t[b] : null, r = n && w[n] || {};
        return void 0 === e ? r : r[e];
    }
    function E(t) {
        var e = t && t[b];
        e && (delete t[e], delete w[e]);
    }
    var S = "\\ud800-\\udfff", x = "\\u0300-\\u036f\\ufe20-\\ufe23", T = "\\u20d0-\\u20f0", W = "\\ufe0e\\ufe0f", k = "[".concat(S, "]"), A = "[".concat(x).concat(T, "]"), P = "\\ud83c[\\udffb-\\udfff]", D = "(?:".concat(A, "|").concat(P, ")"), N = "[^".concat(S, "]"), R = "(?:\\ud83c[\\udde6-\\uddff]){2}", $ = "[\\ud800-\\udbff][\\udc00-\\udfff]", B = "\\u200d", F = "".concat(D, "?"), I = "[".concat(W, "]?"), L = I + F + ("(?:\\u200d(?:" + [
        N,
        R,
        $
    ].join("|") + ")" + I + F + ")*"), H = "(?:".concat([
        "".concat(N).concat(A, "?"),
        A,
        R,
        $,
        k
    ].join("|"), "\n)"), M = RegExp("".concat(P, "(?=").concat(P, ")|").concat(H).concat(L), "g"), z = RegExp("[".concat([
        B,
        S,
        x,
        T,
        W
    ].join(""), "]"));
    function V(t) {
        return z.test(t);
    }
    function q(t) {
        return V(t) ? function(t) {
            return t.match(M) || [];
        }(t) : function(t) {
            return t.split("");
        }(t);
    }
    function U(t) {
        return null == t ? "" : String(t);
    }
    function X(t, e) {
        var n = document.createElement(t);
        return e ? (Object.keys(e).forEach(function(t) {
            var r = e[t], o = u(r) ? r.trim() : r;
            null !== o && "" !== o && ("children" === t ? n.append.apply(n, a(g(o))) : n.setAttribute(t, o));
        }), n) : n;
    }
    var Y = {
        splitClass: "",
        lineClass: "line",
        wordClass: "word",
        charClass: "char",
        types: [
            "lines",
            "words",
            "chars"
        ],
        absolute: !1,
        tagName: "div"
    };
    function _(t, e) {
        var n, r = d((e = l(Y, e)).types), o = e.tagName, i = t.nodeValue, c = document.createDocumentFragment(), s = [];
        return /^\s/.test(i) && c.append(" "), n = (function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
            return (t ? String(t) : "").trim().replace(/\s+/g, " ").split(e);
        })(i).reduce(function(t, n, i, l) {
            var f, p;
            return r.chars && (p = (function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return (t = U(t)) && u(t) && !e && V(t) ? q(t) : t.split(e);
            })(n).map(function(t) {
                var n = X(o, {
                    class: "".concat(e.splitClass, " ").concat(e.charClass),
                    style: "display: inline-block;",
                    children: t
                });
                return j(n, "isChar", !0), s = [].concat(a(s), [
                    n
                ]), n;
            })), r.words || r.lines ? (j(f = X(o, {
                class: "".concat(e.wordClass, " ").concat(e.splitClass),
                style: "display: inline-block; ".concat(r.words && e.absolute ? "position: relative;" : ""),
                children: r.chars ? p : n
            }), {
                isWord: !0,
                isWordStart: !0,
                isWordEnd: !0
            }), c.appendChild(f)) : p.forEach(function(t) {
                c.appendChild(t);
            }), i < l.length - 1 && c.append(" "), r.words ? t.concat(f) : t;
        }, []), /\s$/.test(i) && c.append(" "), t.replaceWith(c), {
            words: n,
            chars: s
        };
    }
    function G(t, e) {
        var n = t.nodeType, r = {
            words: [],
            chars: []
        };
        if (!/(1|3|11)/.test(n)) return r;
        if (3 === n && /\S/.test(t.nodeValue)) return _(t, e);
        var o = g(t.childNodes);
        if (o.length && (j(t, "isSplit", !0), !C(t).isRoot)) {
            t.style.display = "inline-block", t.style.position = "relative";
            var i = t.nextSibling, c = t.previousSibling, s = t.textContent || "", l = i ? i.textContent : " ", u = c ? c.textContent : " ";
            j(t, {
                isWordEnd: /\s$/.test(s) || /^\s/.test(l),
                isWordStart: /^\s/.test(s) || /\s$/.test(u)
            });
        }
        return o.reduce(function(t, n) {
            var r = G(n, e), o = r.words, i = r.chars;
            return {
                words: [].concat(a(t.words), a(o)),
                chars: [].concat(a(t.chars), a(i))
            };
        }, r);
    }
    function J(t) {
        C(t).isWord ? (E(t), t.replaceWith.apply(t, a(t.childNodes))) : g(t.children).forEach(function(t) {
            return J(t);
        });
    }
    function K(t, e, n) {
        var r, o, a, c = d(e.types), s = e.tagName, l = t.getElementsByTagName("*"), u = [], f = [], p = null, h = [], y = t.parentElement, v = t.nextElementSibling, m = document.createDocumentFragment(), b = window.getComputedStyle(t), w = b.textAlign, O = .2 * parseFloat(b.fontSize);
        return e.absolute && (a = {
            left: t.offsetLeft,
            top: t.offsetTop,
            width: t.offsetWidth
        }, o = t.offsetWidth, r = t.offsetHeight, j(t, {
            cssWidth: t.style.width,
            cssHeight: t.style.height
        })), g(l).forEach(function(r) {
            var o = r.parentElement === t, a = function(t, e, n, r) {
                if (!n.absolute) return {
                    top: e ? t.offsetTop : null
                };
                var o = t.offsetParent, a = i(r, 2), c = a[0], s = a[1], l = 0, u = 0;
                if (o && o !== document.body) {
                    var f = o.getBoundingClientRect();
                    l = f.x + c, u = f.y + s;
                }
                var p = t.getBoundingClientRect(), d = p.width, h = p.height, y = p.x;
                return {
                    width: d,
                    height: h,
                    top: p.y + s - u,
                    left: y + c - l
                };
            }(r, o, e, n), s = a.width, l = a.height, d = a.top, h = a.left;
            /^br$/i.test(r.nodeName) || (c.lines && o && ((null === p || d - p >= O) && (p = d, u.push(f = [])), f.push(r)), e.absolute && j(r, {
                top: d,
                left: h,
                width: s,
                height: l
            }));
        }), y && y.removeChild(t), c.lines && (h = u.map(function(t) {
            var n = X(s, {
                class: "".concat(e.splitClass, " ").concat(e.lineClass),
                style: "display: block; text-align: ".concat(w, "; width: 100%;")
            });
            j(n, "isLine", !0);
            var r = {
                height: 0,
                top: 1e4
            };
            return m.appendChild(n), t.forEach(function(t, e, o) {
                var i = C(t), a = i.isWordEnd, c = i.top, s = i.height, l = o[e + 1];
                r.height = Math.max(r.height, s), r.top = Math.min(r.top, c), n.appendChild(t), a && C(l).isWordStart && n.append(" ");
            }), e.absolute && j(n, {
                height: r.height,
                top: r.top
            }), n;
        }), c.words || J(m), t.replaceChildren(m)), e.absolute && (t.style.width = "".concat(t.style.width || o, "px"), t.style.height = "".concat(r, "px"), g(l).forEach(function(t) {
            var e = C(t), n = e.isLine, r = e.top, o = e.left, i = e.width, c = e.height, s = C(t.parentElement), l = !n && s.isLine;
            t.style.top = "".concat(l ? r - s.top : r, "px"), t.style.left = "".concat(n ? a.left : o - (l ? a.left : 0), "px"), t.style.height = "".concat(c, "px"), t.style.width = "".concat(n ? a.width : i, "px"), t.style.position = "absolute";
        })), y && (v ? y.insertBefore(t, v) : y.appendChild(t)), h;
    }
    var Q = l(Y, {});
    return function() {
        function t(e, n) {
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.isSplit = !1, this.settings = l(Q, p(n)), this.elements = v(e), this.split();
        }
        return e(t, null, [
            {
                key: "clearData",
                value: function() {
                    Object.keys(w).forEach(function(t) {
                        delete w[t];
                    });
                }
            },
            {
                key: "setDefaults",
                value: function(t) {
                    return Q = l(Q, p(t)), Y;
                }
            },
            {
                key: "revert",
                value: function(t) {
                    v(t).forEach(function(t) {
                        var e = C(t), n = e.isSplit, r = e.html, o = e.cssWidth, i = e.cssHeight;
                        n && (t.innerHTML = r, t.style.width = o || "", t.style.height = i || "", E(t));
                    });
                }
            },
            {
                key: "create",
                value: function(e, n) {
                    return new t(e, n);
                }
            },
            {
                key: "data",
                get: function() {
                    return w;
                }
            },
            {
                key: "defaults",
                get: function() {
                    return Q;
                },
                set: function(t) {
                    Q = l(Q, p(t));
                }
            }
        ]), e(t, [
            {
                key: "split",
                value: function(t) {
                    var e = this;
                    this.revert(), this.elements.forEach(function(t) {
                        j(t, "html", t.innerHTML);
                    }), this.lines = [], this.words = [], this.chars = [];
                    var n = [
                        window.pageXOffset,
                        window.pageYOffset
                    ];
                    void 0 !== t && (this.settings = l(this.settings, p(t)));
                    var r = d(this.settings.types);
                    r.none || (this.elements.forEach(function(t) {
                        j(t, "isRoot", !0);
                        var n = G(t, e.settings), r = n.words, o = n.chars;
                        e.words = [].concat(a(e.words), a(r)), e.chars = [].concat(a(e.chars), a(o));
                    }), this.elements.forEach(function(t) {
                        if (r.lines || e.settings.absolute) {
                            var o = K(t, e.settings, n);
                            e.lines = [].concat(a(e.lines), a(o));
                        }
                    }), this.isSplit = !0, window.scrollTo(n[0], n[1]), m(w).forEach(function(t) {
                        var e = i(t, 2), n = e[0], r = e[1], o = r.isRoot, a = r.isSplit;
                        o && a || (w[n] = null, delete w[n]);
                    }));
                }
            },
            {
                key: "revert",
                value: function() {
                    this.isSplit && (this.lines = null, this.words = null, this.chars = null, this.isSplit = !1), t.revert(this.elements);
                }
            }
        ]), t;
    }();
});

},{}]},["9mu7C","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.975ef6c8.js.map
