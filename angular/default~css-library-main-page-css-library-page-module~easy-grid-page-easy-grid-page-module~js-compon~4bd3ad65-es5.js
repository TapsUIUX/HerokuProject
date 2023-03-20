function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~css-library-main-page-css-library-page-module~easy-grid-page-easy-grid-page-module~js-compon~4bd3ad65"], {
  /***/
  "./src/app/services/gird-data.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/gird-data.service.ts ***!
    \***********************************************/

  /*! exports provided: GirdDataService */

  /***/
  function srcAppServicesGirdDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GirdDataService", function () {
      return GirdDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GirdDataService = /*#__PURE__*/function () {
      function GirdDataService() {
        _classCallCheck(this, GirdDataService);

        this.arr = [{
          id: 1,
          fName: "Taps",
          address: "USA",
          role: "Developer"
        }, {
          id: 2,
          fName: "Macks",
          address: "UK",
          role: "Manager"
        }, {
          id: 3,
          fName: "Arnold",
          address: "India",
          role: "Driver"
        }, {
          id: 4,
          fName: "Arnold",
          address: "India",
          role: "Driver"
        }, {
          id: 5,
          fName: "Arnold",
          address: "India",
          role: "Driver"
        }, {
          id: 6,
          fName: "Arnold",
          address: "India",
          role: "Driver"
        }, {
          id: 7,
          fName: "Arnold",
          address: "India",
          role: "Driver"
        }, {
          id: 8,
          fName: "Arnold",
          address: "India",
          role: "Driver"
        }, {
          id: 9,
          fName: "Arnold",
          address: "India",
          role: "Driver"
        }, {
          id: 10,
          fName: "Arnold",
          address: "India",
          role: "Driver"
        }, {
          id: 11,
          fName: "Arnold",
          address: "India",
          role: "Driver"
        }];
      }

      _createClass(GirdDataService, [{
        key: "getDataforGrid",
        value: function getDataforGrid() {
          return {
            content: {
              header: [{
                name: "select user",
                type: "action",
                element: "checkBox"
              }, {
                name: "blank",
                field: ''
              }, {
                name: "id",
                field: "id",
                innerSearch: true,
                sortable: true
              }, {
                name: "First Name",
                field: "fName",
                innerSearch: true,
                sortable: true
              }, {
                name: "Address",
                field: "address",
                innerSearch: true
              }, {
                name: "Role",
                field: "role",
                sortable: true
              }, {
                name: "Vehicle",
                type: "action",
                element: "inputSelect",
                items: ["car", "bus", "truck"],
                label: "select vehicle"
              }, {
                name: "enter Zip",
                type: "action",
                element: "inputTextBox",
                label: "enter"
              }, {
                name: "Click",
                type: "action",
                element: "button",
                label: "save"
              }],
              data: [{
                id: 1,
                fName: "Taps",
                address: "USA",
                role: "Developer"
              }, {
                id: 2,
                fName: "Macks",
                address: "UK",
                role: "Manager"
              }, {
                id: 3,
                fName: "Arnold",
                address: "India",
                role: "Driver"
              }, {
                id: 4,
                fName: "Arnold",
                address: "India",
                role: "Driver"
              }, {
                id: 5,
                fName: "Arnold",
                address: "India",
                role: "Driver"
              }, {
                id: 6,
                fName: "Arnold",
                address: "India",
                role: "Driver"
              }, {
                id: 7,
                fName: "Arnold",
                address: "India",
                role: "Driver"
              }, {
                id: 8,
                fName: "Arnold",
                address: "India",
                role: "Driver"
              }, {
                id: 9,
                fName: "Arnold",
                address: "India",
                role: "Driver"
              }, {
                id: 10,
                fName: "Arnold",
                address: "India",
                role: "Driver"
              }, {
                id: 11,
                fName: "Arnold",
                address: "India",
                role: "Driver"
              }],
              footer: {
                pagination: {
                  perPage: 6,
                  start: 0,
                  total: ""
                },
                footerButton: {
                  label: "save"
                }
              }
            },
            config: {
              primaryKey: "id",
              globalSearchBar: true,
              stripes: true,
              footer: true,
              pagination: true,
              eventBasedPagination: false,
              footerButton: true,
              contentMinHeight: "350px",
              contentMaxHeight: "350px",
              colSpan: ""
            },
            look: {
              sd__stripeClass: "",
              sd__globalSearchBarInputClass: "",
              sd__globalSearchBarContainerClass: "",
              sd__tableWrapperClass: "",
              sd__headerCellClass: "",
              sd__contentCellClass: "",
              sd__inputTextClass: "",
              sd__inputCheckBoxClass: "",
              sd__inputSelectClass: "",
              sd__inputButtonClass: "",
              sd__paginationClass: "",
              sd__tableFooterContainerClass: "",
              sd__innerSearchBarInputClass: "",
              sd__tableFooterButtonClass: ""
            }
          };
        }
      }, {
        key: "getDataForNotify",
        value: function getDataForNotify() {
          return {
            content: [{
              notice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis tincidunt porttitor.",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis tincidunt porttitor. Phasellus et dignissim eros, mattis ullamcorper purus. Donec convallis est eu sem imperdiet viverra. Nunc eget convallis ipsum. Duis mauris lacus, pretium id egestas vitae.",
              type: 'danger'
            }, {
              notice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis tincidunt porttitor.",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis tincidunt porttitor. Phasellus et dignissim eros, mattis ullamcorper purus. Donec convallis est eu sem imperdiet viverra. Nunc eget convallis ipsum. Duis mauris lacus, pretium id egestas vitae.",
              type: 'info'
            }, {
              notice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis tincidunt porttitor.",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis tincidunt porttitor. Phasellus et dignissim eros, mattis ullamcorper purus. Donec convallis est eu sem imperdiet viverra. Nunc eget convallis ipsum. Duis mauris lacus, pretium id egestas vitae.",
              type: 'warn'
            }],
            config: {
              header: true,
              time: 15000,
              position: 'right',
              animation: true,
              close: true,
              maxWidth: '400px'
            }
          };
        }
      }, {
        key: "getDataForStepper",
        value: function getDataForStepper() {
          return {
            content: [{
              step: 1,
              label: "step 1",
              status: '' //completed,locked,disabled,error,warnning,info

            }, {
              step: 2,
              label: "step 2",
              status: 'error'
            }, {
              step: 3,
              label: "step 3",
              status: ''
            }, {
              step: 4,
              label: "step 4",
              status: 'disabled'
            }],
            config: {
              showStatus: true,
              statusType: 'square',
              showStepNumber: true,
              stepStyle: 'none',
              theme: 'dark',
              link: 'strike',
              effect: true,
              preSelectedStep: 1
            },
            look: {
              sd__stepClass: 'blue'
            }
          };
        }
      }, {
        key: "getDataForListSwapper",
        value: function getDataForListSwapper() {}
      }, {
        key: "getDataForCard",
        value: function getDataForCard() {
          return {
            JsCards: [{
              label: 'Sd-Easy-Notify',
              desc: 'Easy to use custom notification component that handles multiple push notifications',
              status: 'available in NPM',
              version: '0.0.1',
              show: true,
              author: 'Taps',
              type: "free"
            }, {
              label: 'Sd-Easy-Stepper',
              desc: "Easy to use custom stepper navigation component that changes it's style depending on input values",
              status: 'available in NPM',
              version: '0.0.1',
              show: true,
              author: 'Taps',
              type: "free"
            }, {
              label: 'Sd-Easy-Capcha',
              desc: "Easy to use capcha code verification",
              status: 'Planned',
              version: '0.0.1',
              show: false,
              author: 'Taps',
              type: "paid",
              disabled: true
            }],
            cssCards: [{
              label: 'Sd-Light-Source.CSS',
              desc: 'CSS library to apply shadows and gradients from 9 diffrent angles  for 3D look and feel ',
              status: 'available in NPM',
              version: '0.0.1',
              show: true,
              author: 'Taps',
              type: "free"
            }, {
              label: 'Sd-Material-Pallets.CSS',
              desc: "CSS library that applies predefined color pallets and text classes based on material design",
              status: 'available in NPM',
              version: '0.0.1',
              show: true,
              author: 'Taps',
              type: "free"
            }, {
              label: 'Sd-Pixeltorem.CSS',
              desc: "CSS library that applies converted rem for pixel to font size ,padding and margin.",
              status: 'available in NPM',
              version: '0.0.1',
              show: true,
              author: 'Taps',
              type: "free"
            }]
          };
        }
      }, {
        key: "getDataForCalender",
        value: function getDataForCalender() {}
      }]);

      return GirdDataService;
    }();

    GirdDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GirdDataService); //,
    // {
    //   label:'Sd-Easy-List-Swapper',
    //   desc:"Easy to use custom list swapper with advanced functionalities",
    //   status:'coming soon',
    //   version:'0.0.0',
    //   show:false,
    //   author:'Taps'
    // },
    // {
    //   label:'Sd-Easy-Progress-Bar',
    //   desc:"Easy to use custom percentage based Progress Bar with advanced features",
    //   status:'coming soon',
    //   version:'0.0.0',
    //   show:false,
    //   author:'Taps'
    // },
    // {
    //   label:'Sd-Easy-Select-Box',
    //   desc:"Easy to use custom Select Bar",
    //   status:'coming soon',
    //   version:'0.0.0',
    //   show:false,
    //   author:'Taps'
    // },
    // {
    //   label:'Sd-Easy-Time-Picker',
    //   desc:"Easy to use custom Time Picker",
    //   status:'coming soon',
    //   version:'0.0.0',
    //   show:false,
    //   author:'Taps'
    // },
    // {
    //   label:'Sd-Easy-Touch-Box',
    //   desc:"Easy to use custom Touch Picker",
    //   status:'coming soon',
    //   version:'0.0.0',
    //   show:false,
    //   author:'Taps'
    // } 

    /***/
  }
}]);
//# sourceMappingURL=default~css-library-main-page-css-library-page-module~easy-grid-page-easy-grid-page-module~js-compon~4bd3ad65-es5.js.map