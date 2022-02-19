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
        this
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
})({"iV45c":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lRBv":[function(require,module,exports) {
var _tiles = require("./tiles");
var _words = require("./words");
// Grab the input box to get the word that the user types
let inputEl = document.querySelector('input');
// Get a new word when the page is refreshed
let word = _words.getWord();
// Set a total number of chances as 6
let totalChances = 6;
// If you want to cheat, then uncomment the next statement
// console.log(word);
// We want to get in action when the user presses and releases a key on the keyboard so we keep monitoring our input box
inputEl.addEventListener('keyup', (event)=>{
    let keyPressed = event.key;
    console.log('you pressed:' + keyPressed);
    let guess = event.target.value.toLowerCase();
    console.log('you guessed:' + guess);
    // If the user pressed 'Enter' AND if the typed word is 5 characters AND if we still have chances left
    if (keyPressed === 'Enter' && guess.length === 5 && totalChances > 0) {
        // If the word is the same as the target word
        // Then the game is won!
        if (word === guess) {
            _tiles.gameWon(word);
            // Empty out the input box
            event.target.value = '';
            return;
        }
        // If the word is in the dictionary, then
        if (guess) {
            // Loop through the 5 characters of the word
            for(let x = 0; x < 5; x++){
                // If the user's character is in the same position
                // as in the chosen word, then mark it green
                if (word[x] === guess[x]) _tiles.addTile(guess[x], 'green');
                else if (word.includes(guess[x])) _tiles.addTile(guess[x], 'orange');
                else _tiles.addTile(guess[x], 'grey');
            }
            // With every chance, subtract 1 from the total number of available chances until you run out
            totalChances = totalChances - 1;
            displayChances(totalChances);
        }
        // Empty out the input box
        event.target.value = '';
    }
    // If total chances are 0 or in negative, then end the game!
    if (totalChances <= 0) {
        // If the user is out of chances, its game over!
        _tiles.gameOver();
        displayChances(totalChances);
        return;
    } else displayChances(totalChances);
});
let displayChances = (totalChances1)=>{
    document.getElementById('chances').innerHTML = `Chances: ${totalChances1}`;
};

},{"./tiles":"6d6xE","./words":"asjHU"}],"6d6xE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameOver", ()=>gameOver
);
parcelHelpers.export(exports, "gameWon", ()=>gameWon
);
parcelHelpers.export(exports, "addTile", ()=>addTile
);
const tilesContainer = document.querySelector('#tiles');
const gameOver = ()=>{
    document.body.innerHTML += `<div id="toast" class="lost">Better luck next time</div>`;
    document.querySelector('input').setAttribute('disabled', true);
};
const gameWon = (word)=>{
    word.split('').forEach((c)=>addTile(c.toUpperCase(), 'green')
    );
    document.body.innerHTML += `<div id="toast" class="won">Great Work! The word was: ${word}</div>`;
    document.querySelector('input').setAttribute('disabled', true);
};
const addTile = (str, color)=>{
    tilesContainer.innerHTML += `<div class="tile ${color}">${str.toUpperCase()}</div>`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"asjHU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWord", ()=>getWord
);
parcelHelpers.export(exports, "isInDictionary", ()=>isInDictionary
);
var _dictionary = require("./dictionary");
var _dictionaryDefault = parcelHelpers.interopDefault(_dictionary);
const getWord = ()=>{
    let itemNumber = Math.floor(Math.random() * _dictionaryDefault.default.length);
    console.log(_dictionaryDefault.default[itemNumber]);
    return _dictionaryDefault.default[itemNumber];
};
const isInDictionary = (str)=>_dictionaryDefault.default.includes(str)
;

},{"./dictionary":"I4imv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"I4imv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    'abhor',
    'abide',
    'abled',
    'abode',
    'abort',
    'about',
    'above',
    'abuse',
    'acorn',
    'acrid',
    'actor',
    'acute',
    'adept',
    'admin',
    'admit',
    'adobe',
    'adopt',
    'adore',
    'adorn',
    'adult',
    'afire',
    'afoul',
    'after',
    'agent',
    'agile',
    'aglow',
    'agony',
    'aider',
    'aisle',
    'album',
    'alert',
    'alien',
    'align',
    'alike',
    'alive',
    'aloft',
    'alone',
    'along',
    'aloud',
    'alter',
    'amber',
    'amble',
    'amend',
    'amity',
    'among',
    'ample',
    'amply',
    'amuse',
    'angel',
    'anger',
    'angle',
    'angry',
    'angst',
    'anime',
    'ankle',
    'anode',
    'antic',
    'anvil',
    'aphid',
    'aping',
    'apron',
    'aptly',
    'argue',
    'arise',
    'arose',
    'arson',
    'artsy',
    'ascot',
    'ashen',
    'aside',
    'askew',
    'atone',
    'audio',
    'audit',
    'aunty',
    'avert',
    'avoid',
    'awful',
    'awoke',
    'axiom',
    'axion',
    'azure',
    'bacon',
    'badge',
    'badly',
    'bagel',
    'baker',
    'baler',
    'balmy',
    'banjo',
    'barge',
    'baron',
    'basic',
    'basil',
    'basin',
    'baste',
    'batch',
    'bathe',
    'baton',
    'bawdy',
    'bayou',
    'beach',
    'beady',
    'beard',
    'beast',
    'befit',
    'began',
    'begat',
    'begin',
    'begun',
    'being',
    'belch',
    'below',
    'bench',
    'berth',
    'bicep',
    'bigot',
    'bilge',
    'binge',
    'bingo',
    'biome',
    'birch',
    'birth',
    'bison',
    'black',
    'blade',
    'blame',
    'bland',
    'blank',
    'blare',
    'blast',
    'blaze',
    'bleak',
    'bleat',
    'blend',
    'blimp',
    'blind',
    'blink',
    'blitz',
    'bloat',
    'block',
    'bloke',
    'blond',
    'blown',
    'bluer',
    'blunt',
    'blurt',
    'blush',
    'board',
    'boast',
    'boney',
    'bonus',
    'borax',
    'borne',
    'botch',
    'bough',
    'boule',
    'bound',
    'bowel',
    'boxer',
    'brace',
    'braid',
    'brain',
    'brake',
    'brand',
    'brash',
    'brave',
    'bravo',
    'brawl',
    'brawn',
    'bread',
    'break',
    'brick',
    'bride',
    'brief',
    'brine',
    'bring',
    'brink',
    'briny',
    'brisk',
    'broad',
    'broil',
    'broke',
    'broth',
    'brown',
    'brunt',
    'brush',
    'brute',
    'budge',
    'bugle',
    'build',
    'built',
    'bulge',
    'bulky',
    'bunch',
    'burly',
    'burnt',
    'burst',
    'bused',
    'bushy',
    'butch',
    'buxom',
    'buyer',
    'bylaw',
    'cabin',
    'cable',
    'cadet',
    'cagey',
    'cairn',
    'camel',
    'cameo',
    'candy',
    'canoe',
    'caper',
    'caput',
    'cargo',
    'carol',
    'carve',
    'caste',
    'cater',
    'caulk',
    'cause',
    'cavil',
    'cedar',
    'chafe',
    'chain',
    'chair',
    'chalk',
    'champ',
    'chant',
    'chaos',
    'chard',
    'charm',
    'chart',
    'chase',
    'chasm',
    'cheap',
    'cheat',
    'chest',
    'chide',
    'chief',
    'child',
    'chime',
    'china',
    'chirp',
    'choir',
    'choke',
    'chord',
    'chore',
    'chose',
    'chump',
    'chunk',
    'churn',
    'chute',
    'cider',
    'cigar',
    'claim',
    'clamp',
    'clang',
    'clank',
    'clash',
    'clasp',
    'clean',
    'clear',
    'cleat',
    'cleft',
    'clerk',
    'climb',
    'cling',
    'clink',
    'cloak',
    'clone',
    'close',
    'cloth',
    'cloud',
    'clout',
    'clove',
    'clown',
    'clued',
    'clump',
    'clung',
    'coast',
    'cobra',
    'comet',
    'comfy',
    'copse',
    'coral',
    'corny',
    'cough',
    'could',
    'count',
    'coupe',
    'court',
    'coven',
    'cover',
    'covet',
    'covey',
    'cower',
    'craft',
    'cramp',
    'crane',
    'crank',
    'crash',
    'crate',
    'crave',
    'crawl',
    'craze',
    'crazy',
    'creak',
    'cream',
    'credo',
    'crept',
    'crest',
    'cried',
    'crime',
    'crimp',
    'crisp',
    'croak',
    'crone',
    'crony',
    'croup',
    'crowd',
    'crown',
    'crude',
    'cruel',
    'crumb',
    'crump',
    'crush',
    'crust',
    'crypt',
    'cumin',
    'curio',
    'curly',
    'curse',
    'curve',
    'curvy',
    'cutie',
    'cyber',
    'daily',
    'dairy',
    'daisy',
    'dance',
    'datum',
    'daunt',
    'dealt',
    'death',
    'debar',
    'debit',
    'debug',
    'debut',
    'decal',
    'decay',
    'decor',
    'decoy',
    'decry',
    'deign',
    'deity',
    'delay',
    'delta',
    'demon',
    'demur',
    'denim',
    'depot',
    'depth',
    'derby',
    'detox',
    'devil',
    'diary',
    'dicey',
    'dimly',
    'diner',
    'dingo',
    'dingy',
    'dirge',
    'dirty',
    'disco',
    'ditch',
    'diver',
    'dogma',
    'doing',
    'donut',
    'dopey',
    'doubt',
    'dough',
    'dowel',
    'downy',
    'dowry',
    'dozen',
    'draft',
    'drain',
    'drake',
    'drank',
    'drape',
    'drawl',
    'drawn',
    'dream',
    'drift',
    'drink',
    'drive',
    'droit',
    'drone',
    'drove',
    'drown',
    'drunk',
    'duchy',
    'dumpy',
    'dunce',
    'dusky',
    'dusty',
    'dutch',
    'duvet',
    'dwarf',
    'dwelt',
    'dying',
    'early',
    'earth',
    'ebony',
    'eclat',
    'edict',
    'edify',
    'eight',
    'eking',
    'elbow',
    'elfin',
    'email',
    'empty',
    'enact',
    'endow',
    'enjoy',
    'entry',
    'envoy',
    'epoch',
    'epoxy',
    'equal',
    'equip',
    'erupt',
    'ethic',
    'ethos',
    'evict',
    'exact',
    'exalt',
    'exist',
    'extol',
    'extra',
    'exult',
    'eying',
    'fable',
    'facet',
    'faint',
    'fairy',
    'faith',
    'false',
    'fancy',
    'farce',
    'fault',
    'favor',
    'feast',
    'fecal',
    'feign',
    'felon',
    'femur',
    'feral',
    'fetal',
    'fetch',
    'fetid',
    'fetus',
    'fiber',
    'fibre',
    'ficus',
    'field',
    'fiend',
    'fiery',
    'fight',
    'filer',
    'filet',
    'filmy',
    'filth',
    'final',
    'finch',
    'finer',
    'first',
    'fishy',
    'fixer',
    'fjord',
    'flack',
    'flair',
    'flake',
    'flaky',
    'flame',
    'flank',
    'flare',
    'flash',
    'flask',
    'fleck',
    'flesh',
    'flick',
    'flier',
    'fling',
    'flint',
    'flirt',
    'float',
    'flock',
    'flora',
    'flour',
    'flout',
    'flown',
    'fluid',
    'fluke',
    'flume',
    'flung',
    'flunk',
    'flush',
    'flute',
    'flyer',
    'foamy',
    'focal',
    'focus',
    'foist',
    'foray',
    'force',
    'forge',
    'forte',
    'forth',
    'forty',
    'forum',
    'found',
    'foyer',
    'frail',
    'frame',
    'frank',
    'fraud',
    'freak',
    'fresh',
    'fried',
    'frisk',
    'fritz',
    'frock',
    'frond',
    'front',
    'frost',
    'froth',
    'frown',
    'froze',
    'fruit',
    'fudge',
    'fungi',
    'funky',
    'gaily',
    'gamer',
    'gamut',
    'gaudy',
    'gaunt',
    'gauze',
    'gavel',
    'gawky',
    'gayer',
    'gazer',
    'gecko',
    'ghost',
    'ghoul',
    'giant',
    'gipsy',
    'girly',
    'girth',
    'given',
    'giver',
    'glade',
    'gland',
    'glare',
    'glaze',
    'gleam',
    'glean',
    'glide',
    'glint',
    'gloat',
    'globe',
    'glory',
    'glove',
    'glyph',
    'gnash',
    'gnome',
    'godly',
    'golem',
    'gonad',
    'goner',
    'gourd',
    'grace',
    'grade',
    'graft',
    'grail',
    'grain',
    'grand',
    'grant',
    'grape',
    'graph',
    'grasp',
    'grate',
    'grave',
    'gravy',
    'graze',
    'great',
    'grief',
    'grime',
    'grimy',
    'grind',
    'gripe',
    'groan',
    'groin',
    'grope',
    'group',
    'grout',
    'grove',
    'growl',
    'grown',
    'gruel',
    'grunt',
    'guard',
    'guest',
    'guide',
    'guild',
    'guile',
    'guilt',
    'guise',
    'gulch',
    'gumbo',
    'gusto',
    'gusty',
    'habit',
    'hairy',
    'halve',
    'handy',
    'hardy',
    'harem',
    'harpy',
    'haste',
    'hasty',
    'hater',
    'haunt',
    'haute',
    'haven',
    'havoc',
    'hazel',
    'heady',
    'heard',
    'heart',
    'heavy',
    'hefty',
    'heist',
    'helix',
    'heron',
    'hinge',
    'hoard',
    'hoist',
    'homer',
    'honey',
    'horde',
    'horny',
    'horse',
    'hotel',
    'hotly',
    'hound',
    'house',
    'hovel',
    'hover',
    'howdy',
    'human',
    'humid',
    'humor',
    'hunky',
    'husky',
    'hydro',
    'hyena',
    'hymen',
    'hyper',
    'ideal',
    'idler',
    'image',
    'imbue',
    'impel',
    'imply',
    'inbox',
    'incur',
    'index',
    'inept',
    'inert',
    'infer',
    'ingot',
    'inlay',
    'inlet',
    'input',
    'inter',
    'intro',
    'irate',
    'irony',
    'islet',
    'itchy',
    'ivory',
    'jaunt',
    'jerky',
    'joint',
    'joist',
    'joker',
    'joust',
    'judge',
    'juice',
    'juicy',
    'jumbo',
    'jumpy',
    'junta',
    'junto',
    'knave',
    'knead',
    'knelt',
    'knife',
    'labor',
    'laden',
    'lager',
    'lance',
    'lanky',
    'lapse',
    'large',
    'latch',
    'later',
    'lathe',
    'laugh',
    'layer',
    'leach',
    'leafy',
    'leaky',
    'leant',
    'leapt',
    'learn',
    'leash',
    'least',
    'lefty',
    'lemon',
    'lemur',
    'light',
    'liken',
    'limbo',
    'liner',
    'lingo',
    'lithe',
    'liver',
    'loamy',
    'loath',
    'locus',
    'lodge',
    'lofty',
    'logic',
    'login',
    'loser',
    'louse',
    'lousy',
    'lover',
    'lower',
    'lucid',
    'lucky',
    'lumen',
    'lumpy',
    'lunar',
    'lunch',
    'lunge',
    'lurch',
    'lurid',
    'lusty',
    'lying',
    'lymph',
    'lynch',
    'lyric',
    'macho',
    'macro',
    'madly',
    'magic',
    'maize',
    'major',
    'maker',
    'mange',
    'mango',
    'mangy',
    'manic',
    'manly',
    'manor',
    'maple',
    'march',
    'marsh',
    'mason',
    'match',
    'matey',
    'mauve',
    'maybe',
    'mayor',
    'mealy',
    'meant',
    'meaty',
    'medal',
    'media',
    'medic',
    'melon',
    'mercy',
    'merit',
    'metal',
    'metro',
    'micro',
    'midge',
    'midst',
    'might',
    'milky',
    'mince',
    'miner',
    'minor',
    'minty',
    'minus',
    'mirth',
    'miser',
    'mocha',
    'modal',
    'model',
    'mogul',
    'moist',
    'molar',
    'moldy',
    'money',
    'month',
    'moral',
    'morph',
    'motel',
    'motif',
    'moult',
    'mound',
    'mount',
    'mourn',
    'mouse',
    'mouth',
    'mover',
    'movie',
    'mower',
    'mucky',
    'mulch',
    'munch',
    'mural',
    'murky',
    'mushy',
    'music',
    'musky',
    'musty',
    'nadir',
    'naive',
    'nasty',
    'navel',
    'neigh',
    'nerdy',
    'newly',
    'nicer',
    'niche',
    'night',
    'noble',
    'nobly',
    'noise',
    'noisy',
    'nomad',
    'north',
    'nosey',
    'notch',
    'novel',
    'nudge',
    'nurse',
    'nymph',
    'oaken',
    'ocean',
    'octal',
    'often',
    'olden',
    'older',
    'olive',
    'ombre',
    'omega',
    'onset',
    'opera',
    'opine',
    'opium',
    'optic',
    'orbit',
    'organ',
    'other',
    'ought',
    'ounce',
    'outer',
    'ovary',
    'ovate',
    'overt',
    'ovine',
    'owing',
    'owner',
    'oxide',
    'paint',
    'paler',
    'palsy',
    'panel',
    'panic',
    'pansy',
    'parse',
    'party',
    'paste',
    'pasty',
    'patch',
    'patio',
    'patsy',
    'pause',
    'payer',
    'peach',
    'pearl',
    'pecan',
    'pedal',
    'penal',
    'perch',
    'peril',
    'perky',
    'pesky',
    'pesto',
    'petal',
    'phase',
    'phone',
    'phony',
    'piano',
    'picky',
    'piety',
    'pilot',
    'pinch',
    'piney',
    'pinky',
    'pinto',
    'pique',
    'pitch',
    'pithy',
    'pivot',
    'pixel',
    'place',
    'plaid',
    'plain',
    'plait',
    'plane',
    'plank',
    'plant',
    'plate',
    'plead',
    'pleat',
    'plied',
    'plier',
    'pluck',
    'plumb',
    'plume',
    'plunk',
    'plush',
    'poesy',
    'point',
    'poise',
    'poker',
    'polar',
    'polka',
    'porch',
    'poser',
    'posit',
    'pouch',
    'pound',
    'pouty',
    'power',
    'prank',
    'prawn',
    'price',
    'prick',
    'pride',
    'pried',
    'prime',
    'primo',
    'print',
    'prism',
    'privy',
    'prize',
    'probe',
    'prone',
    'prong',
    'prose',
    'proud',
    'prove',
    'prowl',
    'proxy',
    'prude',
    'prune',
    'psalm',
    'pubic',
    'pudgy',
    'pulse',
    'punch',
    'purge',
    'purse',
    'pushy',
    'quack',
    'quail',
    'quake',
    'qualm',
    'quark',
    'quart',
    'quash',
    'quasi',
    'query',
    'quest',
    'quick',
    'quiet',
    'quilt',
    'quirk',
    'quite',
    'quota',
    'quote',
    'quoth',
    'rabid',
    'radio',
    'rainy',
    'raise',
    'ralph',
    'ramen',
    'ranch',
    'randy',
    'range',
    'rapid',
    'raspy',
    'ratio',
    'raven',
    'rayon',
    'reach',
    'react',
    'ready',
    'realm',
    'rebus',
    'rebut',
    'recap',
    'recut',
    'refit',
    'regal',
    'rehab',
    'reign',
    'relax',
    'relay',
    'relic',
    'remit',
    'renal',
    'repay',
    'reply',
    'resin',
    'retch',
    'rhino',
    'rhyme',
    'ridge',
    'rifle',
    'right',
    'rinse',
    'ripen',
    'risen',
    'risky',
    'rival',
    'rivet',
    'roach',
    'roast',
    'robin',
    'rocky',
    'rogue',
    'rouge',
    'rough',
    'round',
    'rouse',
    'route',
    'rowdy',
    'royal',
    'rugby',
    'rumba',
    'rusty',
    'sadly',
    'safer',
    'saint',
    'salon',
    'salty',
    'salve',
    'salvo',
    'sandy',
    'saner',
    'satin',
    'satyr',
    'sauce',
    'saucy',
    'saute',
    'savor',
    'savoy',
    'scald',
    'scale',
    'scalp',
    'scaly',
    'scamp',
    'scant',
    'scare',
    'scarf',
    'scary',
    'scent',
    'scion',
    'scold',
    'scone',
    'scope',
    'score',
    'scorn',
    'scour',
    'scout',
    'scowl',
    'scram',
    'scrap',
    'screw',
    'scrub',
    'scrum',
    'scuba',
    'sedan',
    'sepia',
    'serif',
    'serum',
    'setup',
    'shack',
    'shade',
    'shady',
    'shaft',
    'shake',
    'shaky',
    'shale',
    'shalt',
    'shame',
    'shank',
    'shape',
    'shard',
    'share',
    'shark',
    'sharp',
    'shave',
    'shawl',
    'shear',
    'sheik',
    'shelf',
    'shied',
    'shift',
    'shine',
    'shiny',
    'shire',
    'shirk',
    'shirt',
    'shoal',
    'shock',
    'shone',
    'shore',
    'shorn',
    'short',
    'shout',
    'shove',
    'shown',
    'showy',
    'shrew',
    'shrub',
    'shrug',
    'shuck',
    'shunt',
    'sight',
    'sigma',
    'silky',
    'since',
    'sinew',
    'singe',
    'siren',
    'sixth',
    'sixty',
    'skate',
    'skier',
    'skimp',
    'skirt',
    'slack',
    'slain',
    'slang',
    'slant',
    'slate',
    'slave',
    'slept',
    'slice',
    'slick',
    'slide',
    'slime',
    'slimy',
    'sling',
    'slink',
    'slope',
    'sloth',
    'slump',
    'slung',
    'slunk',
    'slurp',
    'smack',
    'smart',
    'smear',
    'smelt',
    'smile',
    'smirk',
    'smite',
    'smith',
    'smock',
    'smoke',
    'smoky',
    'smote',
    'snack',
    'snail',
    'snake',
    'snaky',
    'snare',
    'snarl',
    'sneak',
    'snide',
    'snipe',
    'snore',
    'snort',
    'snout',
    'snowy',
    'snuck',
    'soapy',
    'sober',
    'solar',
    'solid',
    'solve',
    'sonar',
    'sonic',
    'sound',
    'south',
    'sower',
    'space',
    'spade',
    'spank',
    'spare',
    'spark',
    'spawn',
    'speak',
    'spear',
    'speck',
    'spelt',
    'spend',
    'spent',
    'sperm',
    'spice',
    'spicy',
    'spied',
    'spiel',
    'spike',
    'spiky',
    'spilt',
    'spine',
    'spiny',
    'spire',
    'spite',
    'splat',
    'split',
    'spoil',
    'spoke',
    'spore',
    'sport',
    'spout',
    'spray',
    'sprig',
    'spunk',
    'spurn',
    'spurt',
    'squad',
    'squat',
    'squib',
    'stack',
    'stage',
    'staid',
    'stain',
    'stair',
    'stake',
    'stale',
    'stalk',
    'stamp',
    'stand',
    'stank',
    'stare',
    'stark',
    'stave',
    'stead',
    'steak',
    'steal',
    'steam',
    'stein',
    'stern',
    'stick',
    'sting',
    'stink',
    'stock',
    'stoic',
    'stoke',
    'stole',
    'stomp',
    'stone',
    'stony',
    'store',
    'stork',
    'storm',
    'story',
    'stove',
    'strap',
    'straw',
    'stray',
    'strip',
    'stuck',
    'study',
    'stump',
    'stung',
    'stunk',
    'style',
    'suave',
    'sugar',
    'suing',
    'suite',
    'sulky',
    'sumac',
    'super',
    'surge',
    'surly',
    'swami',
    'swamp',
    'swarm',
    'swath',
    'swear',
    'sweat',
    'swept',
    'swift',
    'swine',
    'swing',
    'swirl',
    'sword',
    'swore',
    'sworn',
    'swung',
    'synod',
    'syrup',
    'table',
    'tacky',
    'taken',
    'taker',
    'talon',
    'tamer',
    'tango',
    'tangy',
    'taper',
    'tapir',
    'tardy',
    'tawny',
    'teach',
    'teary',
    'tempo',
    'tenor',
    'tepid',
    'thank',
    'their',
    'thick',
    'thief',
    'thing',
    'think',
    'third',
    'thong',
    'thorn',
    'those',
    'threw',
    'throb',
    'throw',
    'thrum',
    'thumb',
    'thump',
    'thyme',
    'tidal',
    'tiger',
    'tilde',
    'timer',
    'tipsy',
    'today',
    'token',
    'tonal',
    'tonga',
    'tonic',
    'topaz',
    'topic',
    'torch',
    'torus',
    'touch',
    'tough',
    'towel',
    'tower',
    'toxic',
    'toxin',
    'trace',
    'track',
    'trade',
    'trail',
    'train',
    'tramp',
    'trash',
    'trawl',
    'tread',
    'trend',
    'triad',
    'trial',
    'tribe',
    'trice',
    'trick',
    'tried',
    'tripe',
    'trope',
    'trove',
    'truce',
    'truck',
    'truly',
    'trump',
    'trunk',
    'tubal',
    'tuber',
    'tulip',
    'tumor',
    'tunic',
    'turbo',
    'twang',
    'tweak',
    'twice',
    'twine',
    'twirl',
    'tying',
    'ulcer',
    'ultra',
    'umbra',
    'uncle',
    'under',
    'unfed',
    'unfit',
    'unify',
    'unite',
    'unity',
    'unlit',
    'unmet',
    'unset',
    'untie',
    'until',
    'unwed',
    'unzip',
    'upset',
    'urban',
    'urine',
    'usage',
    'usher',
    'using',
    'utile',
    'vague',
    'valet',
    'valid',
    'valor',
    'value',
    'vapid',
    'vapor',
    'vault',
    'vaunt',
    'vegan',
    'venom',
    'verso',
    'vicar',
    'video',
    'vigor',
    'vinyl',
    'viola',
    'viper',
    'viral',
    'virus',
    'visor',
    'vista',
    'vital',
    'vixen',
    'vocal',
    'vodka',
    'vogue',
    'voice',
    'voila',
    'vomit',
    'voter',
    'vouch',
    'vowel',
    'vying',
    'wacky',
    'wafer',
    'wager',
    'wagon',
    'waist',
    'waive',
    'waltz',
    'warty',
    'waste',
    'watch',
    'water',
    'waver',
    'waxen',
    'weary',
    'weigh',
    'weird',
    'welch',
    'welsh',
    'wench',
    'whack',
    'whale',
    'wharf',
    'wheat',
    'whelp',
    'while',
    'whine',
    'whiny',
    'whirl',
    'whisk',
    'white',
    'whole',
    'whose',
    'widen',
    'wider',
    'width',
    'wield',
    'wight',
    'wimpy',
    'wince',
    'winch',
    'windy',
    'wiser',
    'wispy',
    'witch',
    'woken',
    'woman',
    'women',
    'wordy',
    'world',
    'worse',
    'worst',
    'worth',
    'would',
    'wound',
    'woven',
    'wrack',
    'wrath',
    'wreak',
    'wreck',
    'wrest',
    'wring',
    'wrist',
    'write',
    'wrong',
    'wrote',
    'wrung',
    'yacht',
    'yearn',
    'yeast',
    'yield',
    'young',
    'youth',
    'zebra',
    'zesty',
    'zonal', 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iV45c","8lRBv"], "8lRBv", "parcelRequire01be")

//# sourceMappingURL=index.59a40e7a.js.map
