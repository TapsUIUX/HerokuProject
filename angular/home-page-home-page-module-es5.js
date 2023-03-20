function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-page-home-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/components/hero-area/hero-area.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/components/hero-area/hero-area.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageComponentsHeroAreaHeroAreaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid hero-area tap-aligner tap-lf-f tap-s-box font-bold \">\n\n\n    <div class=\"hero-box tap-fit-content m-auto text-center\">\n        <span class=\"\">\n            <i class=\"fa fa-frog fs-75 text-white animated  bounce  delay-1s \"></i>\n            </span>\n            <br>\n            <span class=\"fs-50 text-white  \">\n                Server Dummies\n            </span>\n           <br>\n            <span class=\"fs-20 text-white  font-light\">\n                Awesome Stuffs For The Developers\n            </span>\n\n    </div>\n        \n        \n    \n    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/components/information/information.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/components/information/information.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageComponentsInformationInformationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-container tap-aligner row\">\n \n\n\n    <div *ngIf=\"left\" class=\"col-xs-12 col-sm-12 col-md-6 text-app-primary  info-icon  text-center\">\n        <i [ngClass]='icon'></i>\n    </div>\n\n    <div class=\" col-xs-12 col-sm-12 col-md-6 text-app-primary\"> \n\n        <p class=\"content-header fs-25 text-app font-bold\"> \n           {{header}}\n        </p>\n\n        <span *ngFor=\"let item of desc\" class=\"content-header fs-20 text-app font-light\"> \n           {{item}}\n        </span>\n        \n\n    </div>\n\n\n    <div *ngIf=\"!left\" class=\"col-xs-12 col-sm-12 col-md-6  info-icon text-app-primary  text-center\">\n        <i [ngClass]='icon'></i>\n    </div>\n\n  </div>\n\n   \n ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/container/home-page-container/home-page-container.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/container/home-page-container/home-page-container.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageContainerHomePageContainerHomePageContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid p-l-0 p-r-0 animated fadeIn faster\">\n    <app-hero-area></app-hero-area>\n    <div class=\"container-fluid\">\n        <app-information [information]=\"fakejsonData\"></app-information>\n        <app-information [information]=\"dataGridInfo\"></app-information>\n        <app-information [information]=\"componentInfo\"></app-information>\n        <app-information [information]=\"cssInfo\"></app-information>\n    </div>\n   \n</div>";
    /***/
  },

  /***/
  "./src/app/home-page/components/hero-area/hero-area.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/home-page/components/hero-area/hero-area.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageComponentsHeroAreaHeroAreaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hero-area {\n  height: 450px;\n  background-color: #3f51b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXBzL0Rlc2t0b3AvQkJfUmVtb3RlL05ld1NlcnZlckR1bW1pZXMvc3JjL2FwcC9ob21lLXBhZ2UvY29tcG9uZW50cy9oZXJvLWFyZWEvaGVyby1hcmVhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2UvY29tcG9uZW50cy9oZXJvLWFyZWEvaGVyby1hcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLHlCQUhPO0FDRVgiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvY29tcG9uZW50cy9oZXJvLWFyZWEvaGVyby1hcmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kbmF2LWNvbG9yOiMzZjUxYjU7XG4uaGVyby1hcmVhe1xuICAgIGhlaWdodDogNDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1jb2xvcjtcbn0iLCIuaGVyby1hcmVhIHtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-page/components/hero-area/hero-area.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/home-page/components/hero-area/hero-area.component.ts ***!
    \***********************************************************************/

  /*! exports provided: HeroAreaComponent */

  /***/
  function srcAppHomePageComponentsHeroAreaHeroAreaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroAreaComponent", function () {
      return HeroAreaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeroAreaComponent = /*#__PURE__*/function () {
      function HeroAreaComponent() {
        _classCallCheck(this, HeroAreaComponent);
      }

      _createClass(HeroAreaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeroAreaComponent;
    }();

    HeroAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hero-area',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hero-area.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/components/hero-area/hero-area.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hero-area.component.scss */
      "./src/app/home-page/components/hero-area/hero-area.component.scss"))["default"]]
    })], HeroAreaComponent);
    /***/
  },

  /***/
  "./src/app/home-page/components/information/information.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/home-page/components/information/information.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageComponentsInformationInformationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-container {\n  min-height: 400px;\n  max-width: 70%;\n  margin: auto;\n}\n.content-container .info-icon {\n  font-size: 15rem;\n}\n@media only screen and (max-width: 400px) {\n  .info-icon {\n    font-size: 10rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXBzL0Rlc2t0b3AvQkJfUmVtb3RlL05ld1NlcnZlckR1bW1pZXMvc3JjL2FwcC9ob21lLXBhZ2UvY29tcG9uZW50cy9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS1wYWdlL2NvbXBvbmVudHMvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNJLGdCQUFBO0FDRVI7QURFQTtFQUNJO0lBQ0ksMkJBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2NvbXBvbmVudHMvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jb250YWluZXJ7XG4gICAgbWluLWhlaWdodDogNDAwcHg7IFxuICAgIG1heC13aWR0aDogNzAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAuaW5mby1pY29ue1xuICAgICAgICBmb250LXNpemU6IDE1cmVtXG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcbiAgICAuaW5mby1pY29ue1xuICAgICAgICBmb250LXNpemU6IDEwcmVtICFpbXBvcnRhbnQgO1xuICAgIH1cbiAgIH0iLCIuY29udGVudC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuaW5mby1pY29uIHtcbiAgZm9udC1zaXplOiAxNXJlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuaW5mby1pY29uIHtcbiAgICBmb250LXNpemU6IDEwcmVtICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-page/components/information/information.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/home-page/components/information/information.component.ts ***!
    \***************************************************************************/

  /*! exports provided: InformationComponent */

  /***/
  function srcAppHomePageComponentsInformationInformationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformationComponent", function () {
      return InformationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InformationComponent = /*#__PURE__*/function () {
      function InformationComponent() {
        _classCallCheck(this, InformationComponent);
      }

      _createClass(InformationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.header = this.information['header'] || 'test';
          this.desc = this.information['desc'] || ['test'];
          this.icon = this.information['icon'] || 'test';
          this.left = this.information['iconPosition'] == 'left' ? true : false;
        }
      }]);

      return InformationComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], InformationComponent.prototype, "information", void 0);
    InformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-information',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./information.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/components/information/information.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./information.component.scss */
      "./src/app/home-page/components/information/information.component.scss"))["default"]]
    })], InformationComponent);
    /***/
  },

  /***/
  "./src/app/home-page/container/home-page-container/home-page-container.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/home-page/container/home-page-container/home-page-container.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageContainerHomePageContainerHomePageContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9jb250YWluZXIvaG9tZS1wYWdlLWNvbnRhaW5lci9ob21lLXBhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home-page/container/home-page-container/home-page-container.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/home-page/container/home-page-container/home-page-container.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: HomePageContainerComponent */

  /***/
  function srcAppHomePageContainerHomePageContainerHomePageContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageContainerComponent", function () {
      return HomePageContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomePageContainerComponent = /*#__PURE__*/function () {
      function HomePageContainerComponent() {
        _classCallCheck(this, HomePageContainerComponent);
      }

      _createClass(HomePageContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fakejsonData = {
            header: 'Create Custom JSON APIs',
            desc: ['Generate custom JSON or APIs to fast-track frontend development.', 'Create test data for a database.'],
            icon: 'fa fa-hdd',
            iconPosition: 'left'
          };
          this.dataGridInfo = {
            header: 'Easy to use Data Grid',
            desc: ['Install and use the Angular based Data Gird to create simple table with multiple functionalities out of the box.'],
            icon: 'fa fa-border-all',
            iconPosition: 'right'
          };
          this.componentInfo = {
            header: 'Prebuilt Components',
            desc: ['Install and use pre-built Angular components.'],
            icon: 'fa fa-cubes',
            iconPosition: 'left'
          };
          this.cssInfo = {
            header: 'CSS libraries for specific task',
            desc: ['Use pre-built CSS libraries for specific design requirements.'],
            icon: 'fa fa-palette',
            iconPosition: 'right'
          };
        }
      }]);

      return HomePageContainerComponent;
    }();

    HomePageContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page-container',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/container/home-page-container/home-page-container.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page-container.component.scss */
      "./src/app/home-page/container/home-page-container/home-page-container.component.scss"))["default"]]
    })], HomePageContainerComponent);
    /***/
  },

  /***/
  "./src/app/home-page/home-page-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home-page/home-page-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomePageHomePageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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
    /* harmony import */


    var _container_home_page_container_home_page_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./container/home-page-container/home-page-container.component */
    "./src/app/home-page/container/home-page-container/home-page-container.component.ts");

    var routes = [{
      path: '',
      component: _container_home_page_container_home_page_container_component__WEBPACK_IMPORTED_MODULE_3__["HomePageContainerComponent"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home-page/home-page.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/home-page/home-page.module.ts ***!
    \***********************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomePageHomePageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-page-routing.module */
    "./src/app/home-page/home-page-routing.module.ts");
    /* harmony import */


    var _container_home_page_container_home_page_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./container/home-page-container/home-page-container.component */
    "./src/app/home-page/container/home-page-container/home-page-container.component.ts");
    /* harmony import */


    var _components_hero_area_hero_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/hero-area/hero-area.component */
    "./src/app/home-page/components/hero-area/hero-area.component.ts");
    /* harmony import */


    var _components_information_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/information/information.component */
    "./src/app/home-page/components/information/information.component.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_container_home_page_container_home_page_container_component__WEBPACK_IMPORTED_MODULE_4__["HomePageContainerComponent"], _components_hero_area_hero_area_component__WEBPACK_IMPORTED_MODULE_5__["HeroAreaComponent"], _components_information_information_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"]],
      imports: [_home_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomePageRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], HomePageModule);
    /***/
  }
}]);
//# sourceMappingURL=home-page-home-page-module-es5.js.map