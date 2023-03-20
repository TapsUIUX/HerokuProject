(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~css-library-main-page-css-library-page-module~easy-grid-page-easy-grid-page-module~js-compon~43d361db"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reusables/card/card.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reusables/card/card.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sd-card-wrapper  clearfix   animated fadeIn faster  sd--ls-tl sd--solid   sd--inherit  font-light\" [ngClass]=\"disabled?'card-disabled':'sd--clickable'\">\n\n    <div class=\"sd-card-footer clearfix\">\n\n        <p class=\"clearfix\">\n\n            <span class='sd-card-status fl'>{{status}}</span>  \n\n            <span class='sd-card-type fr' >{{type}}</span>\n\n        </p>\n      \n\n        <div class=\"sd-card-title font-bold\">\n            {{label}}\n        </div>\n        <div class=\"sd-card-desc\">\n            {{desc}}\n        </div>\n\n         \n        <span class='sd-card-status fl'>author : {{author}}</span>\n\n     </div>\n\n     \n   \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reusables/code-display/code-display.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reusables/code-display/code-display.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-display font-app text-app font-light\">\n\n<div class=\"pre-icon-wraper\">\n\n        \n    \n        <i class=\"fa fa-download pre-icons r5 \" (click)='onDownload(preE)'></i>\n \n\n        <span *ngIf=\"showCopied\" class=\"copied-text animated pulse faster\n\n\">copied to clicpboard</span>\n        \n \n        <i class=\"fa fa-copy pre-icons tool-tip r2 \" (click)='onCopy(preE)'>\n            <span class=\"tool-tip-text hide\"> copy to clicpboard</span>\n        </i>\n        \n   \n   \n   \n</div>\n    \n   \n    <pre #preE class=\"font-light\"> \n         {{preData}}\n    </pre>\n\n </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reusables/page-hero-area/page-hero-area.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reusables/page-hero-area/page-hero-area.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-you-tube  *ngIf=\"showYt\" [videoLink]='videoLink||\"wkLgQIfdbn0\"' [size]=\"[0,0]\" (ytClose_e)=\"onCloseYt($event)\"> </app-you-tube> \n\n<section class=\"container-fluid hero-area padding-top-75 tap-lf-tl tap-s-box font-light\"  [ngClass]=\"(isFixed)?'fixed':''\"  >\n\n    <div class=\"container font-app\" >\n\n     <div class=\"row animated fadeIn faster\">\n       \n\n      <div [ngClass]=\"(showIconBig)?'col-12 col-sm-6 col-md-4 col-lg-2 tap-aligner fs-100 text-white animated fadeIn fast align-in-small' :'col-12 col-md-8'\"  *ngIf='isIcon' >\n\n          <span *ngIf='showIconBig'  >\n            <i [ngClass]='icon' ></i>\n          </span>\n\n          <span  *ngIf='showIconSmall' class=\"small-top-icon\">\n            <i class='fa fa-directions m-r-25 direction-icon'></i> \n            <span class=\"back-to-cards sd--ls-f sd--text\" (click)=\"onSmallIconClick()\">\n              <i [ngClass]='icon' ></i> \n            </span>\n \n          </span>\n\n          <span class=\"fs-18 small-adj\" *ngIf=\"showIconSmall\"> {{info[0]}}</span>\n\n    </div>\n\n\n    \n\n     \n        <div class=\"col-12 col-sm-6 col-md-8 col-lg-6 fs-18 text-white features-list hide-in-small \"  *ngIf=\"showIconBig\">\n\n           <div *ngFor=\"let item of info\">\n             {{item}}\n           </div>\n           \n             \n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-4\">\n\n          <div *ngIf=\"showDemoBig && videoLink\" class=\"icon-box hide-in-small \">\n\n             <!-- <a [href]=\"demoLink\" target=\"_blank\">   -->\n               <div class=\"icon-area-big yt-bg animated zoomIn\" (click)=\"onOpenYt()\">\n\n              </div>\n              <!-- </a> -->\n              <br><br>\n              <span class=\"icon-text-area-big\">\n                {{demoLinkText}}\n              </span>\n\n          </div>\n\n          <div *ngIf=\"showDemoSmall && videoLink\" class=\"icon-box\">\n\n              <div class=\"icon-area-small yt-bg animated zoomIn\" (click)=\"onOpenYt()\">\n             </div>\n             \n\n             <br><br>\n\n             <span class=\"icon-text-area-small\">\n              {{demoLinkText}}\n             </span>\n         </div>\n          \n        </div>\n\n     </div>\n\n\n\n    </div>\n\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reusables/you-tube/you-tube.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reusables/you-tube/you-tube.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n <section class=\"yt-container sd--aligner\">\n\n   <div class=\"yt-close text-white\">\n      <span class=\"fs-75 \" (click)=\"onYtClose()\"> &times;</span>\n   </div>\n\n   <div class=\"yt-video-section animated fadeIn fast \">\n\n      <iframe class=\"embed-shadow animated zoomIn \" width=100% height=100% [src]=\"videoLink|YouTubePipe\" frameborder=\"0\"  allow=\"autoplay; encrypted-media\" allowfullscreen>\n      </iframe>\n\n   </div>\n   \n\n </section>\n \n ");

/***/ }),

/***/ "./src/app/pipes/youtube.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/youtube.pipe.ts ***!
  \***************************************/
/*! exports provided: YouTubePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubePipe", function() { return YouTubePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let YouTubePipe = class YouTubePipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value, type) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(value);
    }
};
YouTubePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
YouTubePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'YouTubePipe'
    })
], YouTubePipe);



/***/ }),

/***/ "./src/app/reusables/card/card.component.scss":
/*!****************************************************!*\
  !*** ./src/app/reusables/card/card.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-disabled {\n  opacity: 0.5 !important;\n  cursor: not-allowed !important;\n}\n\n.sd-card-wrapper {\n  border-radius: 5px;\n  padding: 15px;\n  margin: 15px 0;\n  background-color: #323f90;\n  background-color: white;\n  border: 1px solid #bcc4f3;\n  cursor: pointer;\n  color: #6a7be7a9;\n  height: 100%;\n  position: relative;\n}\n\n.sd-card-wrapper .sd-card-title {\n  font-size: 20px;\n  color: #323f90;\n}\n\n.sd-card-wrapper .sd-card-desc {\n  font-size: 15px;\n  color: #323f90;\n  min-height: 100px;\n  max-height: 100px;\n  overflow-y: auto;\n  margin-top: 10px;\n}\n\n.sd-card-wrapper .sd-card-type {\n  background: #3951af;\n  color: white;\n  padding: 0 5px;\n  border-radius: 20px;\n}\n\n.sd-card-wrapper .sd-card-footer {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  background-color: none;\n  color: #323f90;\n}\n\n.sd-card-wrapper .sd-card-footer .sd-card-status {\n  font-style: italic;\n}\n\n.sd-card-wrapper .sd-card-footer .sd-card-version {\n  border: 2px #3F51B5 solid;\n  padding: 0px 5px;\n  border-radius: 5px;\n}\n\n.sd-card-wrapper .sd-card-footer .fl {\n  float: left;\n}\n\n.sd-card-wrapper .sd-card-footer .fr {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXBzL0Rlc2t0b3AvQkJfUmVtb3RlL05ld1NlcnZlckR1bW1pZXMvc3JjL2FwcC9yZXVzYWJsZXMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXVzYWJsZXMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtBQ1ZGOztBRGFBO0VBRUksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBRUEsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2JKOztBRGNJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNaUjs7QURjSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNaUjs7QURjSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1pSOztBRGNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ1pSOztBRGFRO0VBRUksa0JBQUE7QUNaWjs7QURjUTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1paOztBRGNRO0VBQ0ksV0FBQTtBQ1paOztBRGNRO0VBQ0ksWUFBQTtBQ1paIiwiZmlsZSI6InNyYy9hcHAvcmV1c2FibGVzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vJGFwcC1jb2xvcjojM0Y1MUI1O1xuJHRleHQtY29sb3I6IzNGNTFCNTtcbiRhcHAtY29sb3I6d2hpdGU7XG4kc2Vjb25kYXk6IzE0MjM3Nztcbi5zZC1jYXJkLXdyYXBwZXI6aG92ZXJ7XG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzMjg2O1xufVxuLnNkLWNhcmQtd3JhcHBlcjphY3RpdmV7XG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyNjcyO1xufVxuXG4uY2FyZC1kaXNhYmxlZHtcbiAgb3BhY2l0eTogLjUgIWltcG9ydGFudDsgIFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7ICAgIFxufVxuXG4uc2QtY2FyZC13cmFwcGVye1xuXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyM2Y5MDtcbiAgICAvL2JvcmRlcjogMnB4IHNvbGlkICMzMzQyOTQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JjYzRmMztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLy9jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICM2YTdiZTdhOTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5zZC1jYXJkLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjMzIzZjkwO1xuICAgIH1cbiAgICAuc2QtY2FyZC1kZXNje1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiAjMzIzZjkwO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5zZC1jYXJkLXR5cGV7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzOTUxYWY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuICAgIC5zZC1jYXJkLWZvb3RlcnsgXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpub25lO1xuICAgICAgICBjb2xvcjogIzMyM2Y5MDtcbiAgICAgICAgLnNkLWNhcmQtc3RhdHVze1xuICAgICAgICAgICAgLy9jb2xvcjokdGV4dC1jb2xvcjsgXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgICAgLnNkLWNhcmQtdmVyc2lvbntcbiAgICAgICAgICAgIGJvcmRlcjoycHggJHRleHQtY29sb3Igc29saWQ7IFxuICAgICAgICAgICAgcGFkZGluZzowcHggNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5mbHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC5mcntcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiLmNhcmQtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xufVxuXG4uc2QtY2FyZC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDE1cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyM2Y5MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiY2M0ZjM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2YTdiZTdhOTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2QtY2FyZC13cmFwcGVyIC5zZC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzMyM2Y5MDtcbn1cbi5zZC1jYXJkLXdyYXBwZXIgLnNkLWNhcmQtZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMzMjNmOTA7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5zZC1jYXJkLXdyYXBwZXIgLnNkLWNhcmQtdHlwZSB7XG4gIGJhY2tncm91bmQ6ICMzOTUxYWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uc2QtY2FyZC13cmFwcGVyIC5zZC1jYXJkLWZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgY29sb3I6ICMzMjNmOTA7XG59XG4uc2QtY2FyZC13cmFwcGVyIC5zZC1jYXJkLWZvb3RlciAuc2QtY2FyZC1zdGF0dXMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uc2QtY2FyZC13cmFwcGVyIC5zZC1jYXJkLWZvb3RlciAuc2QtY2FyZC12ZXJzaW9uIHtcbiAgYm9yZGVyOiAycHggIzNGNTFCNSBzb2xpZDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnNkLWNhcmQtd3JhcHBlciAuc2QtY2FyZC1mb290ZXIgLmZsIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uc2QtY2FyZC13cmFwcGVyIC5zZC1jYXJkLWZvb3RlciAuZnIge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/reusables/card/card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/reusables/card/card.component.ts ***!
  \**************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardComponent = class CardComponent {
    constructor() { }
    ngOnInit() {
        this.label = (this.data && this.data['label']) ? this.data['label'] : 'component label';
        this.desc = (this.data && this.data['desc']) ? this.data['desc'] : 'component desc';
        this.version = (this.data && this.data['version']) ? this.data['version'] : 'component version';
        this.status = (this.data && this.data['status']) ? this.data['status'] : 'component status';
        this.author = (this.data && this.data['author']) ? this.data['author'] : 'component author';
        this.type = (this.data && this.data['type']) ? this.data['type'] : '';
        this.disabled = (this.data && this.data['disabled']) ? this.data['disabled'] : false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "data", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reusables/card/card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.scss */ "./src/app/reusables/card/card.component.scss")).default]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/reusables/code-display/code-display.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/reusables/code-display/code-display.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-display {\n  position: relative;\n}\n.custom-display pre {\n  padding: 10px 15px 30px 15px;\n  text-align: left;\n  border: none;\n  background-color: #0c0c0cdb;\n  border-left: 2px solid #3F51B5;\n  border-radius: 0px;\n  color: #dcdcdc;\n  border-radius: 5px;\n}\n.custom-display ::-moz-selection {\n  background: rgba(4, 112, 245, 0);\n  color: #00e1ff;\n}\n.custom-display ::selection {\n  background: rgba(4, 112, 245, 0);\n  color: #00e1ff;\n}\n.custom-display .copied-text {\n  position: absolute;\n  font-size: 10px;\n  color: white;\n  right: 37px;\n  top: 20px;\n}\n.custom-display .pre-icons {\n  float: right;\n  margin-left: 16px;\n  font-size: 20px;\n  color: #aca9a9b2;\n  position: absolute;\n  top: 16px;\n  cursor: pointer;\n}\n.custom-display .r5 {\n  right: 7%;\n  display: none;\n}\n.custom-display .r2 {\n  right: 10px;\n}\n.custom-display .pre-icons:hover {\n  color: #eeebebb2;\n}\n.custom-display .pre-icons:active {\n  color: #878585b2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXBzL0Rlc2t0b3AvQkJfUmVtb3RlL05ld1NlcnZlckR1bW1pZXMvc3JjL2FwcC9yZXVzYWJsZXMvY29kZS1kaXNwbGF5L2NvZGUtZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmV1c2FibGVzL2NvZGUtZGlzcGxheS9jb2RlLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQUk7RUFHSSxnQ0FBQTtFQUNBLGNBQUE7QUNBUjtBREpJO0VBR0ksZ0NBQUE7RUFDQSxjQUFBO0FDQVI7QURHSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0RSO0FESUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDRlI7QURJSTtFQUNJLFNBQUE7RUFDQSxhQUFBO0FDRlI7QURJSTtFQUNJLFdBQUE7QUNGUjtBRElJO0VBQ0ksZ0JBQUE7QUNGUjtBRElJO0VBQ0ksZ0JBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3JldXNhYmxlcy9jb2RlLWRpc3BsYXkvY29kZS1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1kaXNwbGF5e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwcmV7XG4gICAgICAgIHBhZGRpbmc6MTBweCAxNXB4IDMwcHggMTVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMwYzBjZGI7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzNGNTFCNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICBjb2xvcjogI2RjZGNkYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICA6OnNlbGVjdGlvbntcbiAgICAgICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgIC8vIGNvbG9yOiMzRjUxQjU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNCwgMTEyLCAyNDUsIDApO1xuICAgICAgICBjb2xvcjpyZ2IoMCwgMjI1LCAyNTUpO1xuICAgIH1cblxuICAgIC5jb3BpZWQtdGV4dHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcmlnaHQ6IDM3cHg7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgXG4gICAgfVxuICAgIC5wcmUtaWNvbnN7XG4gICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICBtYXJnaW4tbGVmdDoxNnB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiNhY2E5YTliMjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6MTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAucjV7XG4gICAgICAgIHJpZ2h0OjclO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAucjJ7XG4gICAgICAgIHJpZ2h0OjEwcHg7XG4gICAgfVxuICAgIC5wcmUtaWNvbnM6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiNlZWViZWJiMjsgXG4gICAgfVxuICAgIC5wcmUtaWNvbnM6YWN0aXZle1xuICAgICAgICBjb2xvcjojODc4NTg1YjI7IFxuICAgIH1cblxuXG59IiwiLmN1c3RvbS1kaXNwbGF5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmN1c3RvbS1kaXNwbGF5IHByZSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAzMHB4IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMGMwY2RiO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMzRjUxQjU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgY29sb3I6ICNkY2RjZGM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jdXN0b20tZGlzcGxheSA6OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNCwgMTEyLCAyNDUsIDApO1xuICBjb2xvcjogIzAwZTFmZjtcbn1cbi5jdXN0b20tZGlzcGxheSAuY29waWVkLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICByaWdodDogMzdweDtcbiAgdG9wOiAyMHB4O1xufVxuLmN1c3RvbS1kaXNwbGF5IC5wcmUtaWNvbnMge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjYWNhOWE5YjI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3VzdG9tLWRpc3BsYXkgLnI1IHtcbiAgcmlnaHQ6IDclO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmN1c3RvbS1kaXNwbGF5IC5yMiB7XG4gIHJpZ2h0OiAxMHB4O1xufVxuLmN1c3RvbS1kaXNwbGF5IC5wcmUtaWNvbnM6aG92ZXIge1xuICBjb2xvcjogI2VlZWJlYmIyO1xufVxuLmN1c3RvbS1kaXNwbGF5IC5wcmUtaWNvbnM6YWN0aXZlIHtcbiAgY29sb3I6ICM4Nzg1ODViMjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/reusables/code-display/code-display.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/reusables/code-display/code-display.component.ts ***!
  \******************************************************************/
/*! exports provided: CodeDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeDisplayComponent", function() { return CodeDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CodeDisplayComponent = class CodeDisplayComponent {
    constructor() { }
    ngOnInit() {
        this.showCopied = false;
    }
    ngDoCheck() {
        this.preData = this.display.toString().replace(/  /g, '');
    }
    onSelect(elem) {
        //let temp = document.querySelector('#outPut') as HTMLPreElement;
        let temp = elem;
        var range = document.createRange();
        range.selectNodeContents(temp);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
    onCopy(elem) {
        this.onSelect(elem);
        document.execCommand('copy');
        this.showCopied = true;
        setTimeout(() => {
            this.showCopied = false;
        }, 2000);
        // <HTMLInputElement>this.outPut.nativeElement.select();
    }
    onDownload(elem) {
        this.onSelect(elem);
        //let temp = document.querySelector('#outPut') as HTMLPreElement;
        let temp = elem;
        var textToWrite = temp.innerText;
        var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
        //let date = this._datePipe.transform(new Date()).replace(/' '/g,"_");
        let date = new Date();
        var fileNameToSaveAs = "ServerDummies_" + date.getMonth() + '_' + date.getDate() + '_' + date.getFullYear() + '_' + date.getTime() + ".txt";
        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "My Hidden Link";
        window.URL = window.URL;
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = this.destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }
    destroyClickedElement(event) {
        document.body.removeChild(event.target);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CodeDisplayComponent.prototype, "display", void 0);
CodeDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-code-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./code-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reusables/code-display/code-display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./code-display.component.scss */ "./src/app/reusables/code-display/code-display.component.scss")).default]
    })
], CodeDisplayComponent);



/***/ }),

/***/ "./src/app/reusables/page-hero-area/page-hero-area.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/reusables/page-hero-area/page-hero-area.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hero-area {\n  padding-top: 80px;\n  padding-bottom: 25px;\n  background-color: #3f51b5;\n  font-weight: 300;\n  min-height: 155px;\n  color: white;\n  background-image: linear-gradient(to bottom right, #25243a, #405aec);\n}\n.hero-area .features-list div {\n  margin-top: 16px;\n}\n.hero-area .small-adj {\n  margin-left: 56px;\n  position: relative;\n  bottom: -7px;\n}\n.hero-area .small-top-icon {\n  font-size: 30px;\n  position: relative;\n  top: 9px;\n}\n.hero-area .small-top-icon .direction-icon {\n  transform: rotateX(180deg);\n}\n.hero-area .small-top-icon .back-to-cards {\n  position: absolute;\n  font-size: 35px;\n  cursor: pointer;\n  top: -8px;\n  transition: all 0.1s;\n}\n.hero-area .small-top-icon .back-to-cards:hover {\n  position: absolute;\n  font-size: 40px;\n}\n.hero-area .small-top-icon .back-to-cards:active {\n  position: absolute;\n  font-size: 37px;\n  bottom: 0px;\n}\n.hero-area .icon-box {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin: auto;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n.hero-area .icon-box .icon-area-big,\n.hero-area .icon-box a {\n  height: 70px;\n  width: 100px;\n  margin: auto;\n  position: relative;\n  transition: all 0.5s;\n}\n.hero-area .icon-box .icon-text-area-big {\n  position: absolute;\n  bottom: 0;\n}\n.hero-area .icon-box .icon-area-small,\n.hero-area .icon-box a {\n  height: 35px;\n  width: 50px;\n  margin: auto;\n  position: absolute;\n  top: 10px;\n}\n.hero-area .icon-box .icon-text-area-small {\n  font-size: 1rem;\n  position: relative;\n  left: 55px;\n  top: 15px;\n}\n.hero-area .icon-area-big:hover {\n  width: 110px !important;\n  height: 75px !important;\n}\n.hero-area .icon-area-small:hover {\n  width: 54px !important;\n  height: 37px !important;\n}\n.fixed {\n  position: fixed;\n  z-index: 1;\n}\n@media only screen and (max-width: 400px) {\n  .align-in-small {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXBzL0Rlc2t0b3AvQkJfUmVtb3RlL05ld1NlcnZlckR1bW1pZXMvc3JjL2FwcC9yZXVzYWJsZXMvcGFnZS1oZXJvLWFyZWEvcGFnZS1oZXJvLWFyZWEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JldXNhYmxlcy9wYWdlLWhlcm8tYXJlYS9wYWdlLWhlcm8tYXJlYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7RUFHQSxZQUFBO0VBRUEsb0VBQUE7QUNMRjtBRFFJO0VBQ0UsZ0JBQUE7QUNOTjtBRFVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNSSjtBRFlFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ1ZKO0FEYUk7RUFDRSwwQkFBQTtBQ1hOO0FEY0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FDWk47QURpQkk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNmTjtBRG1CSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNqQk47QURxQkU7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ25CSjtBRHNCSTs7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDcEJOO0FEdUJJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDckJOO0FEd0JJOztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ3RCTjtBRHlCSTtFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDeEJOO0FEOEJFO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtBQzVCSjtBRCtCRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUM3Qko7QURtQ0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQ2hDRjtBRG9DQTtFQUVFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUNsQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JldXNhYmxlcy9wYWdlLWhlcm8tYXJlYS9wYWdlLWhlcm8tYXJlYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRuYXYtY29sb3I6aHNsKDIzMSwgNDglLCA0OCUpO1xuXG4uaGVyby1hcmVhIHtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICAvL2ZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWluLWhlaWdodDogMTU1cHg7XG4gIC8vbGluZS1oZWlnaHQ6IDQwcHg7XG4gIC8vbGluZS1oZWlnaHQ6IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMmQyODc3LCAjNjI3N2ViKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzI1MjQzYSwgIzQwNWFlYyk7XG5cbiAgLmZlYXR1cmVzLWxpc3Qge1xuICAgIGRpdiB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5zbWFsbC1hZGoge1xuICAgIG1hcmdpbi1sZWZ0OiA1NnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IC03cHg7XG4gICAgLy8gZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAuc21hbGwtdG9wLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA5cHg7XG5cbiAgICAvLyBsZWZ0OiA3MHB4O1xuICAgIC5kaXJlY3Rpb24taWNvbiB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbiAgICB9XG5cbiAgICAuYmFjay10by1jYXJkcyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0b3A6IC04cHg7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcblxuXG4gICAgfVxuXG4gICAgLmJhY2stdG8tY2FyZHM6aG92ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgLy90b3A6IC00cHg7XG4gICAgfVxuXG4gICAgLmJhY2stdG8tY2FyZHM6YWN0aXZlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMzdweDtcbiAgICAgIGJvdHRvbTogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5pY29uLWJveCB7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC8vbWluLWhlaWdodDogMTUwcHg7XG4gICAgLmljb24tYXJlYS1iaWcsXG4gICAgYSB7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAgIH1cblxuICAgIC5pY29uLXRleHQtYXJlYS1iaWcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5pY29uLWFyZWEtc21hbGwsXG4gICAgYSB7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTBweDtcbiAgICB9XG5cbiAgICAuaWNvbi10ZXh0LWFyZWEtc21hbGwge1xuXG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBsZWZ0OiA1NXB4O1xuICAgICAgdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxuXG5cblxuICAuaWNvbi1hcmVhLWJpZzpob3ZlciB7XG4gICAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaWNvbi1hcmVhLXNtYWxsOmhvdmVyIHtcbiAgICB3aWR0aDogNTRweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzdweCAhaW1wb3J0YW50O1xuICB9XG5cblxufVxuXG4uZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuXG4gIC5hbGlnbi1pbi1zbWFsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59IiwiLmhlcm8tYXJlYSB7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWluLWhlaWdodDogMTU1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzI1MjQzYSwgIzQwNWFlYyk7XG59XG4uaGVyby1hcmVhIC5mZWF0dXJlcy1saXN0IGRpdiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uaGVyby1hcmVhIC5zbWFsbC1hZGoge1xuICBtYXJnaW4tbGVmdDogNTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC03cHg7XG59XG4uaGVyby1hcmVhIC5zbWFsbC10b3AtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDlweDtcbn1cbi5oZXJvLWFyZWEgLnNtYWxsLXRvcC1pY29uIC5kaXJlY3Rpb24taWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xufVxuLmhlcm8tYXJlYSAuc21hbGwtdG9wLWljb24gLmJhY2stdG8tY2FyZHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IC04cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLmhlcm8tYXJlYSAuc21hbGwtdG9wLWljb24gLmJhY2stdG8tY2FyZHM6aG92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5oZXJvLWFyZWEgLnNtYWxsLXRvcC1pY29uIC5iYWNrLXRvLWNhcmRzOmFjdGl2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAzN3B4O1xuICBib3R0b206IDBweDtcbn1cbi5oZXJvLWFyZWEgLmljb24tYm94IHtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVyby1hcmVhIC5pY29uLWJveCAuaWNvbi1hcmVhLWJpZyxcbi5oZXJvLWFyZWEgLmljb24tYm94IGEge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmhlcm8tYXJlYSAuaWNvbi1ib3ggLmljb24tdGV4dC1hcmVhLWJpZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuLmhlcm8tYXJlYSAuaWNvbi1ib3ggLmljb24tYXJlYS1zbWFsbCxcbi5oZXJvLWFyZWEgLmljb24tYm94IGEge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xufVxuLmhlcm8tYXJlYSAuaWNvbi1ib3ggLmljb24tdGV4dC1hcmVhLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDU1cHg7XG4gIHRvcDogMTVweDtcbn1cbi5oZXJvLWFyZWEgLmljb24tYXJlYS1iaWc6aG92ZXIge1xuICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA3NXB4ICFpbXBvcnRhbnQ7XG59XG4uaGVyby1hcmVhIC5pY29uLWFyZWEtc21hbGw6aG92ZXIge1xuICB3aWR0aDogNTRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM3cHggIWltcG9ydGFudDtcbn1cblxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5hbGlnbi1pbi1zbWFsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/reusables/page-hero-area/page-hero-area.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/reusables/page-hero-area/page-hero-area.component.ts ***!
  \**********************************************************************/
/*! exports provided: PageHeroAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeroAreaComponent", function() { return PageHeroAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageHeroAreaComponent = class PageHeroAreaComponent {
    constructor(_cd) {
        this._cd = _cd;
        this.onIconClick_e = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges() {
        this.info = this.headerData['info'] || [];
        this.icon = this.headerData['icon'] || '';
        this.videoLink = this.headerData['videoLink'] || '';
        this.showDemoBig = this.headerData['showDemoBig'] || false;
        this.getSwitch(this.headerData['showDemoSmall']);
        this.demoLink = this.headerData['demoLink'] || '#';
        this.demoLinkText = this.headerData['demoLinkText'] || '';
        this.isIcon = (this.headerData && this.headerData['icon']) ? true : false;
        this.isFixed = (this.fixed) ? this.fixed : false;
        this.showIconBig = this.headerData['showIconBig'] || false;
        this.showIconSmall = this.headerData['showIconSmall'] || false;
    }
    getSwitch(val) {
        this.showDemoSmall = false;
        setTimeout(() => {
            this.showDemoSmall = val;
        }, 0);
    }
    onCloseYt(event) {
        this.showYt = false;
    }
    onOpenYt() {
        this.showYt = true;
    }
    onSmallIconClick() {
        this.onIconClick_e.emit(true);
    }
};
PageHeroAreaComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageHeroAreaComponent.prototype, "headerData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageHeroAreaComponent.prototype, "fixed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PageHeroAreaComponent.prototype, "onIconClick_e", void 0);
PageHeroAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-hero-area',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-hero-area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reusables/page-hero-area/page-hero-area.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-hero-area.component.scss */ "./src/app/reusables/page-hero-area/page-hero-area.component.scss")).default]
    })
], PageHeroAreaComponent);



/***/ }),

/***/ "./src/app/reusables/reusables.module.ts":
/*!***********************************************!*\
  !*** ./src/app/reusables/reusables.module.ts ***!
  \***********************************************/
/*! exports provided: ReusablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReusablesModule", function() { return ReusablesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _page_hero_area_page_hero_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-hero-area/page-hero-area.component */ "./src/app/reusables/page-hero-area/page-hero-area.component.ts");
/* harmony import */ var _code_display_code_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code-display/code-display.component */ "./src/app/reusables/code-display/code-display.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card.component */ "./src/app/reusables/card/card.component.ts");
/* harmony import */ var _you_tube_you_tube_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./you-tube/you-tube.component */ "./src/app/reusables/you-tube/you-tube.component.ts");
/* harmony import */ var _pipes_youtube_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/youtube.pipe */ "./src/app/pipes/youtube.pipe.ts");








let ReusablesModule = class ReusablesModule {
};
ReusablesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_page_hero_area_page_hero_area_component__WEBPACK_IMPORTED_MODULE_3__["PageHeroAreaComponent"], _code_display_code_display_component__WEBPACK_IMPORTED_MODULE_4__["CodeDisplayComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _you_tube_you_tube_component__WEBPACK_IMPORTED_MODULE_6__["YouTubeComponent"], _pipes_youtube_pipe__WEBPACK_IMPORTED_MODULE_7__["YouTubePipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_page_hero_area_page_hero_area_component__WEBPACK_IMPORTED_MODULE_3__["PageHeroAreaComponent"], _code_display_code_display_component__WEBPACK_IMPORTED_MODULE_4__["CodeDisplayComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _you_tube_you_tube_component__WEBPACK_IMPORTED_MODULE_6__["YouTubeComponent"], _pipes_youtube_pipe__WEBPACK_IMPORTED_MODULE_7__["YouTubePipe"]]
    })
], ReusablesModule);



/***/ }),

/***/ "./src/app/reusables/you-tube/you-tube.component.scss":
/*!************************************************************!*\
  !*** ./src/app/reusables/you-tube/you-tube.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".yt-container {\n  height: 100vh;\n  width: 100vw;\n  background-color: #000000db;\n  position: fixed;\n  top: 0;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n}\n.yt-container .yt-video-section {\n  height: 70vh;\n  width: 70vw;\n  border: 1px solid grey;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.yt-container .yt-close {\n  padding: 10px;\n  position: absolute;\n  top: 0.5rem;\n  right: 11rem;\n  border-radius: 50%;\n}\n.yt-container .yt-close span {\n  cursor: pointer;\n}\n.yt-container .yt-close span:hover {\n  color: red !important;\n}\n.yt-container .yt-close span:active {\n  color: rgba(255, 0, 0, 0.548) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXBzL0Rlc2t0b3AvQkJfUmVtb3RlL05ld1NlcnZlckR1bW1pZXMvc3JjL2FwcC9yZXVzYWJsZXMveW91LXR1YmUveW91LXR1YmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JldXNhYmxlcy95b3UtdHViZS95b3UtdHViZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDUjtBREVJO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDSSxlQUFBO0FDQ1I7QURDSTtFQUNJLHFCQUFBO0FDQ1I7QURDSTtFQUNJLHdDQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9yZXVzYWJsZXMveW91LXR1YmUveW91LXR1YmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueXQtY29udGFpbmVye1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6MTAwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGRiO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6MDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAueXQtdmlkZW8tc2VjdGlvbntcbiAgICAgICAgaGVpZ2h0Ojcwdmg7XG4gICAgICAgIHdpZHRoOiA3MHZ3O1xuICAgICAgICBib3JkZXI6MXB4IHNvbGlkIGdyZXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAueXQtY2xvc2V7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAuNXJlbTtcbiAgICByaWdodDogMTFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHNwYW57XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgc3Bhbjpob3ZlcntcbiAgICAgICAgY29sb3I6cmVkICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHNwYW46YWN0aXZle1xuICAgICAgICBjb2xvcjpyZ2JhKDI1NSwgMCwgMCwgMC41NDgpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIH1cbiAgIFxuICAgXG5cbn1cbiIsIi55dC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBkYjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnl0LWNvbnRhaW5lciAueXQtdmlkZW8tc2VjdGlvbiB7XG4gIGhlaWdodDogNzB2aDtcbiAgd2lkdGg6IDcwdnc7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi55dC1jb250YWluZXIgLnl0LWNsb3NlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNXJlbTtcbiAgcmlnaHQ6IDExcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ueXQtY29udGFpbmVyIC55dC1jbG9zZSBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnl0LWNvbnRhaW5lciAueXQtY2xvc2Ugc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cbi55dC1jb250YWluZXIgLnl0LWNsb3NlIHNwYW46YWN0aXZlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjU0OCkgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/reusables/you-tube/you-tube.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/reusables/you-tube/you-tube.component.ts ***!
  \**********************************************************/
/*! exports provided: YouTubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubeComponent", function() { return YouTubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let YouTubeComponent = class YouTubeComponent {
    constructor() {
        this.ytClose_e = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.height = this.size[0];
        this.width = this.size[1];
        this.videoLink = "https://www.youtube.com/embed/" + this.videoLink + "?rel=0";
    }
    onYtClose() {
        this.ytClose_e.emit(true);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], YouTubeComponent.prototype, "videoLink", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], YouTubeComponent.prototype, "size", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], YouTubeComponent.prototype, "ytClose_e", void 0);
YouTubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-you-tube',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./you-tube.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reusables/you-tube/you-tube.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./you-tube.component.scss */ "./src/app/reusables/you-tube/you-tube.component.scss")).default]
    })
], YouTubeComponent);



/***/ }),

/***/ "./src/app/services/demo-link.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/demo-link.service.ts ***!
  \***********************************************/
/*! exports provided: DemoLinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoLinkService", function() { return DemoLinkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DemoLinkService = class DemoLinkService {
    constructor() { }
    getLinks() {
        //pyg-DYm7b0A
        return {
            JSON_ENGINE_DEMO: "E1vwJgBZ7dY",
            EASY_GRID_DEMO: "h4OAs7XBa8g",
            EASY_NOTIFY_DEMO: "",
            EASY_STEPPER_DEMO: "",
            EASY_LIGHSOURCE_DEMO: "",
            EASY_MATERIALPALLET_DEMO: "",
            EASY_PIXELTOREM_DEMO: ""
        };
    }
};
DemoLinkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DemoLinkService);



/***/ })

}]);
//# sourceMappingURL=default~css-library-main-page-css-library-page-module~easy-grid-page-easy-grid-page-module~js-compon~43d361db-es2015.js.map