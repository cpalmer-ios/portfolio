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
})({"8Zj40":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f1af67dcf277ec6e";
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

},{}],"g2DDQ":[function(require,module,exports,__globalThis) {
"use strict";
/**
 * Demo.
 */ const { gsap } = window.gsap;
const { TextAnimator } = window.textAnimator;
var debounce = function(e, t, n) {
    var a;
    return function() {
        var r = this, i = arguments, o = function() {
            a = null, n || e.apply(r, i);
        }, s = n && !a;
        clearTimeout(a), a = setTimeout(o, t || 200), s && e.apply(r, i);
    };
};
// DOM elements
const DOM = {
    // For demo purposes, trigger the effect when clicking any link in the menu (.line-link)
    menuLinks: [
        ...document.querySelectorAll(".line-link")
    ],
    list: document.querySelectorAll(".list"),
    // Cover element (wrap, outer and image inner elements)
    cover: {
        wrap: document.querySelector(".cover-wrap"),
        outer: document.querySelector(".cover"),
        inner: document.querySelector(".cover__inner")
    },
    // Some of the main page content elements
    // We'll animate some of the content elements when expanding the menu
    content: {
        imgs: [
            ...document.querySelectorAll(".wrapper-jfish")
        ],
        titles: [
            ...document.querySelectorAll(".content__text")
        ]
    },
    // Menu element (.menu)
    menu: document.querySelector(".menu"),
    // Element that slides out
    menuContent: document.querySelector(".menu__content"),
    // Close button
    closeCtrl: document.querySelector(".menu__back"),
    // Extra elements that will be animated inside the menu
    extra: document.querySelectorAll(".menu__tagline, .menu__social-author")
};
let menuStatus = {
    isOpen: false,
    isAnimating: false
};
// Animation gsap timeline
const menuTimeline = gsap.timeline({
    paused: true,
    onComplete: ()=>menuStatus.isAnimating = false,
    onReverseComplete: ()=>menuStatus.isAnimating = false,
    defaults: {
        duration: 1.2,
        ease: "power4.inOut"
    }
}).addLabel("start", 0).add(()=>{
    // Add pointer events to auto/none
    DOM.menu.classList[menuStatus.isOpen ? "add" : "remove"]("menu--open");
}, "start").to(DOM.cover.wrap, {
    duration: 1.6,
    startAt: {
        scale: "1.1"
    },
    ease: "power3.inOut",
    scale: 1
}, "start").to(DOM.cover.outer, {
    startAt: {
        y: "-100%"
    },
    y: "0%"
}, "start").to(DOM.cover.inner, {
    startAt: {
        y: "100%"
    },
    y: "0%"
}, "start").to(DOM.content.imgs, {
    ease: 'power3.inOut',
    y: (position)=>`${position % 2 === 0 ? -20 : 20}%`
}, "start").to(DOM.list, {
    ease: 'power3.inOut',
    y: (position)=>`${position % 2 === 0 ? -20 : 20}%`,
    opacity: 0
}, "start").to(DOM.content.titles, {
    ease: 'power3.inOut',
    y: (position)=>`${position % 2 === 0 ? 20 : -20}%`,
    opacity: 0
}, "start").addLabel("menu", 0.5).to(DOM.menuContent, {
    duration: 1,
    startAt: {
        y: "-100%"
    },
    y: "0%"
}, "menu").addLabel("extra", "menu+=0.6").set(DOM.extra, {
    y: "400%",
    opacity: 0
}, "start").to(DOM.extra, {
    duration: 0.5,
    ease: "power4",
    startAt: {
        opacity: 1
    },
    opacity: 1,
    y: "0%"
}, "extra");
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
// Kickstart Demo.
window.onload = demo.init;
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

},{}]},["8Zj40","g2DDQ"], "g2DDQ", "parcelRequire94c2")

//# sourceMappingURL=index.f277ec6e.js.map
