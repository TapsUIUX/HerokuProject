function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"container-fluid  nav-bar tap-lf-f tap-s-box tap-g-rect mw-400 \">\n\n\n\n  <div class=\"container p-l-0 p-r-0 font-bold mw-400\">\n\n    <div (click)=\"scrollPage(0)\" class=\"tap-aligner f-l text-white nav-logo  fs-25\">\n        <a routerLink=\"SD-Home\">  <i class=\"fa fa-frog\"></i> SD\n        </a>  \n    </div>\n\n    <div (click)=\"scrollPage(0)\" class=\"fs-15 f-l text-white tap-aligner nav-item hide-in-small\">\n      <a routerLinkActive='active-link' class='json-engine' routerLink=\"SD-JSONEngine\">JSON Engine</a>\n    </div>\n\n    <div (click)=\"scrollPage(0)\" class=\"fs-15 f-l text-white tap-aligner nav-item hide-in-small\">\n      <a routerLinkActive='active-link' class='easy-grid'  routerLink=\"SD-Grid\">Sd Easy Grid</a>\n    </div>\n\n    <div (click)=\"scrollPage(0)\" class=\"fs-15 f-l  text-white tap-aligner nav-item hide-in-small\">\n      <a routerLinkActive='active-link' class='easy-comp'  routerLink=\"SD-Angular-Components\">Sd Easy Components</a>\n    </div>\n\n    <div (click)=\"scrollPage(0)\" class=\"fs-15 f-l  text-white tap-aligner nav-item hide-in-small\">\n      <a routerLinkActive='active-link' class='easy-css'  routerLink=\"SD-CSS-Libraries\">Sd CSS Libraries</a>\n    </div>\n\n<!-- \n    <div class=\"fs-15 cp f-r  text-white hide  nav-item show-in-small\" (click)='toggleSmallScreenNav()'>\n      <i *ngIf='!showSmallNav' class=\"fa fa-bars\"></i>\n      <i *ngIf='showSmallNav' class=\"fa fa-window-close\"></i>\n   </div> -->\n\n    <div (click)=\"scrollPage(0)\" class=\"fs-15  f-r  text-white tap-aligner nav-item align-in-small\">\n        <i class=\"animated swing infinite fa fa-snowman\"></i>\n        &nbsp;\n        <a routerLinkActive='active-link' routerLink='SD-Meet-The-Creator'>Meet Me</a>\n    </div>\n\n    <div class=\"fs-15  f-r  text-white tap-aligner nav-item hide-in-small\">\n      <i class=\"fab fa-github\"></i>\n      &nbsp;\n      <a  href=\"https://github.com/TapsUIUX/TapsOpenSourceCDN\" target=\"_blank\">Git Hub</a>\n    </div>\n \n  </div>\n\n</nav>\n\n\n<section class=\"hide sd--ls-bl sd--solid sd--g-rect show-in-small small-screen-nav\"  [ngClass]='smallNavClass' > \n\n  <section class=\"nav-expand sd--aligner fs-18 text-white\" (click)='toggleSmallScreenNav()'>\n\n    <i class=\"fa fa-frog\"> </i>\n\n  </section>\n\n\n  <section  class=\"small-screen-nav-inner\">\n\n    <div (click)=\"smallNavClicked()\" class=\"fs-15  text-white tap-aligner nav-item \">\n      <a routerLinkActive='active-link' class='json-engine' routerLink=\"SD-JSONEngine\">JSON Engine</a>\n    </div>\n  \n    <div (click)=\"smallNavClicked()\" class=\"fs-15  text-white tap-aligner nav-item \">\n      <a routerLinkActive='active-link' class='easy-grid'  routerLink=\"SD-Grid\">Sd Easy Grid</a>\n    </div>\n  \n    <div (click)=\"smallNavClicked()\" class=\"fs-15   text-white tap-aligner nav-item \">\n      <a routerLinkActive='active-link' class='easy-comp'  routerLink=\"SD-Angular-Components\">Sd Easy Components</a>\n    </div>\n  \n    <div (click)=\"smallNavClicked()\" class=\"fs-15   text-white tap-aligner nav-item \">\n      <a routerLinkActive='active-link' class='easy-css'  routerLink=\"SD-CSS-Libraries\">Sd CSS Libraries</a>\n    </div>\n  \n    <div class=\"fs-15   text-white tap-aligner nav-item \">\n      <i class=\"fab fa-github\"></i>\n      &nbsp;\n      <a  href=\"https://github.com/TapsUIUX/TapsOpenSourceCDN\" target=\"_blank\">Git Hub</a>\n    </div>\n\n  </section>\n\n  \n\n</section>\n \n<div class=\"taps-shadow-wrapper app-main-container\" >\n  <router-outlet></router-outlet>\n</div>\n\n<footer class=\"app-footer sd--ls sd--lf-f sd--solid sd--g-rect sd--inherit  font-light\" style=\" color: rgba(22, 22, 22, 0.276);text-align: center;display: flex;align-items: center;\">\n    <div style=\"margin:auto;color: white;\"><span style=\"font-family: 'Courier New', Courier, monospace;\">&copy;</span>TapsUiUx 2020</div>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: 'SD-Home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-page-home-page-module */
        "home-page-home-page-module").then(__webpack_require__.bind(null,
        /*! ./home-page/home-page.module */
        "./src/app/home-page/home-page.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'SD-JSONEngine',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | json-server-page-json-server-page-module */
        [__webpack_require__.e("default~css-library-main-page-css-library-page-module~easy-grid-page-easy-grid-page-module~js-compon~43d361db"), __webpack_require__.e("json-server-page-json-server-page-module")]).then(__webpack_require__.bind(null,
        /*! ./json-server-page/json-server-page.module */
        "./src/app/json-server-page/json-server-page.module.ts")).then(function (m) {
          return m.JsonServerPageModule;
        });
      }
    }, {
      path: 'SD-Grid',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | easy-grid-page-easy-grid-page-module */
        [__webpack_require__.e("default~css-library-main-page-css-library-page-module~easy-grid-page-easy-grid-page-module~js-compon~43d361db"), __webpack_require__.e("default~css-library-main-page-css-library-page-module~easy-grid-page-easy-grid-page-module~js-compon~4bd3ad65"), __webpack_require__.e("easy-grid-page-easy-grid-page-module")]).then(__webpack_require__.bind(null,
        /*! ./easy-grid-page/easy-grid-page.module */
        "./src/app/easy-grid-page/easy-grid-page.module.ts")).then(function (m) {
          return m.EasyGridPageModule;
        });
      }
    }, {
      path: 'SD-Angular-Components',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | js-components-main-page-components-page-module */
        [__webpack_require__.e("default~css-library-main-page-css-library-page-module~easy-grid-page-easy-grid-page-module~js-compon~43d361db"), __webpack_require__.e("default~css-library-main-page-css-library-page-module~easy-grid-page-easy-grid-page-module~js-compon~4bd3ad65"), __webpack_require__.e("js-components-main-page-components-page-module")]).then(__webpack_require__.bind(null,
        /*! ./js-components-main-page/components-page.module */
        "./src/app/js-components-main-page/components-page.module.ts")).then(function (m) {
          return m.ComponentsPageModule;
        });
      }
    }, {
      path: 'SD-CSS-Libraries',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | css-library-main-page-css-library-page-module */
        [__webpack_require__.e("default~css-library-main-page-css-library-page-module~easy-grid-page-easy-grid-page-module~js-compon~43d361db"), __webpack_require__.e("default~css-library-main-page-css-library-page-module~easy-grid-page-easy-grid-page-module~js-compon~4bd3ad65"), __webpack_require__.e("css-library-main-page-css-library-page-module")]).then(__webpack_require__.bind(null,
        /*! ./css-library-main-page/css-library-page.module */
        "./src/app/css-library-main-page/css-library-page.module.ts")).then(function (m) {
          return m.CssLibraryPageModule;
        });
      }
    }, {
      path: 'SD-Meet-The-Creator',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | meet-the-creator-page-meet-the-creator-module */
        "meet-the-creator-page-meet-the-creator-module").then(__webpack_require__.bind(null,
        /*! ./meet-the-creator-page/meet-the-creator.module */
        "./src/app/meet-the-creator-page/meet-the-creator.module.ts")).then(function (m) {
          return m.MeetTheCreatorModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'SD-Home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-bar {\n  background-color: #3f51b5;\n  z-index: 20;\n  position: fixed;\n  padding: 15px;\n}\n\npre {\n  letter-spacing: 1px;\n}\n\n.nav-item {\n  padding-top: 8px;\n}\n\n.nav-item a {\n  text-decoration: none;\n  color: white;\n  margin-right: 24px;\n}\n\n.nav-item:hover a {\n  color: #d3d2d2;\n}\n\n.nav-item:active a {\n  color: white;\n}\n\n.nav-logo a {\n  text-decoration: none;\n  color: white;\n  min-width: 100px;\n}\n\n.app-footer {\n  height: 100px;\n  background-color: #3f51b5;\n}\n\n.app-main-container {\n  min-height: 90vh;\n}\n\n.small-screen-nav {\n  font-family: amplitude-light;\n  position: fixed;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 30px;\n  height: 320px;\n  right: 0;\n  z-index: 3;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 71%);\n  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 71%);\n  padding: 15px;\n  padding-top: 75px;\n  transition: all 0.5s cubic-bezier(0.75, -0.48, 0.26, 1.52);\n  overflow: hidden;\n  padding-left: 3px;\n  background: #2a38847a;\n}\n\n.small-screen-nav .nav-expand {\n  width: 20px;\n  height: 150px;\n  left: 4px;\n  top: 5px;\n  float: left;\n  padding: 5px;\n}\n\n.small-screen-nav .nav-expand i {\n  height: 25px;\n  width: 25px;\n  position: absolute;\n  transform: scaleX(-1);\n}\n\n.small-screen-nav .small-screen-nav-inner {\n  width: 200px;\n  margin-left: 25px;\n  border-left: 1px #ffffff24 solid;\n  padding-left: 10px;\n}\n\n.collapse {\n  width: 30px;\n  background: #2a38847a;\n}\n\n.expand {\n  width: 200px;\n  background: #2a3884;\n}\n\n.expand .nav-expand i {\n  transform: scaleX(1);\n  height: 25px;\n  width: 25px;\n  position: absolute;\n  right: 24px;\n  top: 256px;\n}\n\n.active-link {\n  border-bottom: 2px solid white;\n}\n\n@media only screen and (max-width: 400px) {\n  .align-in-small {\n    right: -6px;\n    text-align: right;\n    position: absolute;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXBzL0Rlc2t0b3AvQkJfUmVtb3RlL05ld1NlcnZlckR1bW1pZXMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRko7O0FES0E7RUFDSSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7QUNGSjs7QURJSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRlI7O0FET0k7RUFDSSxjQUFBO0FDSlI7O0FEU0k7RUFDSSxZQUFBO0FDTlI7O0FEWUk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1RSOztBRGNBO0VBQ0ksYUFBQTtFQUNBLHlCQWhETztBQ3FDWDs7QURjQTtFQUNJLGdCQUFBO0FDWEo7O0FEaUJBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHlEQUFBO0VBQ0EsaURBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwwREFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ2RKOztBRGdCSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2RSOztBRGlCUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ2ZaOztBRG9CSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUNsQlI7O0FEdUJBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FDcEJKOztBRHlCQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ3RCSjs7QUR5QlE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ3ZCWjs7QUQ0QkE7RUFFSSw4QkFBQTtBQzFCSjs7QUQ0Q0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDekNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbmF2LWNvbG9yOiMzZjUxYjU7XG5cbi5uYXYtYmFyIHtcbiAgICAvL3dpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgei1pbmRleDogMjA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbnByZSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLm5hdi1pdGVtIHtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuXG4gICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgfVxufVxuXG4ubmF2LWl0ZW06aG92ZXIge1xuICAgIGEge1xuICAgICAgICBjb2xvcjogcmdiKDIxMSwgMjEwLCAyMTApO1xuICAgIH1cbn1cblxuLm5hdi1pdGVtOmFjdGl2ZSB7XG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbi5uYXYtbG9nbyB7XG5cbiAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgfVxuXG59XG5cbi5hcHAtZm9vdGVyIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtY29sb3I7XG59XG5cbi5hcHAtbWFpbi1jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XG5cbn1cblxuXG5cbi5zbWFsbC1zY3JlZW4tbmF2IHtcbiAgICBmb250LWZhbWlseTogYW1wbGl0dWRlLWxpZ2h0O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IC13ZWJraXQtZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAzO1xuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgNzElKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCA3MSUpO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDc1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoLjc1LCAtMC40OCwgLjI2LCAxLjUyKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIGJhY2tncm91bmQ6ICMyYTM4ODQ3YTtcblxuICAgIC5uYXYtZXhwYW5kIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIGxlZnQ6IDRweDtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG5cblxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc21hbGwtc2NyZWVuLW5hdi1pbm5lciB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggI2ZmZmZmZjI0IHNvbGlkO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG59XG5cbi5jb2xsYXBzZSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogIzJhMzg4NDdhO1xuXG5cbn1cblxuLmV4cGFuZCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6ICMyYTM4ODQ7XG5cbiAgICAubmF2LWV4cGFuZCB7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgdG9wOiAyNTZweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFjdGl2ZS1saW5rIHtcblxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcblxuICAgIC8vICYuanNvbi1lbmdpbmV7XG4gICAgLy8gICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIHJnYmEoMjIsIDIxMiwgMjQ1LCAwLjU0MSk7XG4gICAgLy8gfVxuICAgIC8vICYuZWFzeS1ncmlke1xuICAgIC8vICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCByZ2JhKDIyLCAyNDUsIDU5LCAwLjQzOCk7XG4gICAgLy8gfVxuICAgIC8vICYuZWFzeS1jb21we1xuICAgIC8vICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCByZ2JhKDIyNiwgMjQ1LCAyMiwgMC40MzIpO1xuICAgIC8vIH1cbiAgICAvLyAmLmVhc3ktY3Nze1xuICAgIC8vICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCByZ2JhKDI0NywgNzUsIDk4LCAwLjYxNik7XG4gICAgLy8gfVxuXG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAgIC5hbGlnbi1pbi1zbWFsbCB7XG4gICAgICAgIHJpZ2h0OiAtNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbn0iLCIubmF2LWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIHotaW5kZXg6IDIwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbnByZSB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5uYXYtaXRlbSB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4ubmF2LWl0ZW0gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG5cbi5uYXYtaXRlbTpob3ZlciBhIHtcbiAgY29sb3I6ICNkM2QyZDI7XG59XG5cbi5uYXYtaXRlbTphY3RpdmUgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdi1sb2dvIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLmFwcC1mb290ZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xufVxuXG4uYXBwLW1haW4tY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogOTB2aDtcbn1cblxuLnNtYWxsLXNjcmVlbi1uYXYge1xuICBmb250LWZhbWlseTogYW1wbGl0dWRlLWxpZ2h0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDM7XG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgNzElKTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgNzElKTtcbiAgcGFkZGluZzogMTVweDtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjc1LCAtMC40OCwgMC4yNiwgMS41Mik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjMmEzODg0N2E7XG59XG4uc21hbGwtc2NyZWVuLW5hdiAubmF2LWV4cGFuZCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNXB4O1xufVxuLnNtYWxsLXNjcmVlbi1uYXYgLm5hdi1leHBhbmQgaSB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuLnNtYWxsLXNjcmVlbi1uYXYgLnNtYWxsLXNjcmVlbi1uYXYtaW5uZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBib3JkZXItbGVmdDogMXB4ICNmZmZmZmYyNCBzb2xpZDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29sbGFwc2Uge1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZDogIzJhMzg4NDdhO1xufVxuXG4uZXhwYW5kIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiAjMmEzODg0O1xufVxuLmV4cGFuZCAubmF2LWV4cGFuZCBpIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI0cHg7XG4gIHRvcDogMjU2cHg7XG59XG5cbi5hY3RpdmUtbGluayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuYWxpZ24taW4tc21hbGwge1xuICAgIHJpZ2h0OiAtNnB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'ServerDummies';
        this.showSmallNav = false;
        this.smallNavClass = '';
      }

      _createClass(AppComponent, [{
        key: "scrollPage",
        value: function scrollPage(to) {
          window.scrollTo(500, to);
        }
      }, {
        key: "smallNavClicked",
        value: function smallNavClicked() {
          this.toggleSmallScreenNav();
          window.scrollTo(500, 0);
        }
      }, {
        key: "toggleSmallScreenNav",
        value: function toggleSmallScreenNav() {
          if (!this.showSmallNav) {
            //this.smallNavClass = 'animated slideInRight faster expand'
            this.smallNavClass = ' expand';
          } else {
            //this.smallNavClass = 'animated slideOutRight faster  collapse'
            this.smallNavClass = ' collapse';
          }

          this.showSmallNav = !this.showSmallNav;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_generate_json_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/generate-json.service */
    "./src/app/services/generate-json.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      providers: [_services_generate_json_service__WEBPACK_IMPORTED_MODULE_6__["GenerateJsonService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/services/generate-json.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/generate-json.service.ts ***!
    \***************************************************/

  /*! exports provided: GenerateJsonService */

  /***/
  function srcAppServicesGenerateJsonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenerateJsonService", function () {
      return GenerateJsonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var GenerateJsonService = /*#__PURE__*/function () {
      function GenerateJsonService(_http) {
        _classCallCheck(this, GenerateJsonService);

        this._http = _http;
        this.generatedDataUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.generatedCount = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.url = 'http://www.serverdummies.com';
      }

      _createClass(GenerateJsonService, [{
        key: "generateAPI",
        value: function generateAPI(params) {
          var options;

          if (params) {
            options = {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('structure', params.replace(/\n/g, ''))
            };
          }

          return options.params;
        }
      }, {
        key: "generateJson",
        value: function generateJson(params) {
          var _this = this;

          var options;

          if (params) {
            options = {
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('structure', params.replace(/\n/g, ''))
            };
          } //console.log("params to be sent : ", params.replace(/\n/g, ''))


          return this._http.get(this.url + "/api/generate", options).subscribe(function (res) {
            _this.generatedData = res;

            _this.generatedDataUpdated.next(_this.generatedData);
          });
        }
      }, {
        key: "getGeneratedJson",
        value: function getGeneratedJson() {
          return this.generatedDataUpdated.asObservable();
        }
      }, {
        key: "generateCount",
        value: function generateCount() {
          var _this2 = this;

          //console.log("params to be sent : ", params.replace(/\n/g, ''))
          return this._http.get(this.url + "/read").subscribe(function (res) {
            _this2.generatedCount.next(res);
          });
        }
      }, {
        key: "getCount",
        value: function getCount() {
          return this.generatedCount.asObservable();
        }
      }]);

      return GenerateJsonService;
    }();

    GenerateJsonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    GenerateJsonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GenerateJsonService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).then(function (ref) {
      // Ensure Angular destroys itself on hot reloads.
      if (window['ngRef']) {
        window['ngRef'].destroy();
      }

      window['ngRef'] = ref; // Otherwise, log the boot error
    })["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/taps/Desktop/BB_Remote/NewServerDummies/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map