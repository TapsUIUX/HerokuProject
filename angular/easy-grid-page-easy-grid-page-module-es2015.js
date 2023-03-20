(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["easy-grid-page-easy-grid-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/easy-grid-page/easy-grid-page-container/easy-grid-page-container.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/easy-grid-page/easy-grid-page-container/easy-grid-page-container.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n<app-page-hero-area [headerData]='subHeaderContent'></app-page-hero-area> \n \n\n\n\n<div class=\"container text-app-body fs-18 animated fadeIn faster font-light\">\n\n \n\n \n    <div class=\"row font-light\">\n        <div class=\"col-12\">\n            <p class=\"content-header  text-app-header  \"> \n                API\n            </p>\n            \n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-12\">\n\n           \n            <p class=\"text-app-header \">\n                Step 1: Install the package with NPM\n            </p>\n            <app-code-display [display]=\"installMsg\"></app-code-display>\n            <p class=\"text-app-header \">\n                Step 2: Import the module into your Project\n            </p>\n            <app-code-display [display]=\"importMsg\"></app-code-display>\n           \n        </div>\n        <!-- <div class=\"col-xs-12 col-sm-12 col-md-6\">\n            <div class='sd--ls-f sd--solid sd--darker yt-wrapper yt-adj'>\n                <app-you-tube  [videoLink]='\"wkLgQIfdbn0\"' [size]=\"[0,0]\"> </app-you-tube> \n            </div>\n        </div> -->\n\n        <div class=\"col-12\">\n            <p class=\"text-app-header \">\n                Step 3: Use the component with required parameters\n            </p>\n            <app-code-display [display]=\"useMsg\"></app-code-display>\n        </div>\n    </div>\n    \n\n\n   \n</div>\n\n<div class=\"container p-t-25 p-b-15 text-app-body font-light \">\n\n    <sd-easy-grid [content]='gridData.content' [config]='gridData.config' [look]='gridData.look'></sd-easy-grid> \n\n</div>\n\n<div class=\"container text-app-body fs-18 font-light\">\n\n    <div class=\"row\">\n\n        <div class=\"col-12\">\n            <p class=\"content-header text-app-header \"> \n                input Param for CONTENT\n            </p>\n            <app-code-display [display]=\"contentDisplay\"></app-code-display>\n        </div>\n        <div class=\"col-12\">\n            <p class=\"content-header text-app-header \"> \n                input Param for CONFIG\n            </p>\n            <app-code-display [display]=\"contentConfig\"></app-code-display>\n        </div>\n        <div class=\"col-12\">\n            <p class=\"content-header text-app-header \"> \n                input Param for LOOK\n            </p>\n            <app-code-display [display]=\"contentLook\"></app-code-display>\n        </div>\n\n    </div>\n\n\n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/sd-easy-grid/fesm2015/sd-easy-grid.js":
/*!************************************************************!*\
  !*** ./node_modules/sd-easy-grid/fesm2015/sd-easy-grid.js ***!
  \************************************************************/
/*! exports provided: SdEasyGridComponent, SdEasyGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdEasyGridComponent", function() { return SdEasyGridComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdEasyGridModule", function() { return SdEasyGridModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





/**
 * @fileoverview added by tsickle
 * Generated from: lib/sd-easy-grid.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SdEasyGridComponent {
    constructor() {
        this.onActionState_e = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subjectSelectInput = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subjectGlobalSearchInput = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subjectInnerSearchInput = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.backUp = [];
        this.searchableData = [];
        this.defaultHeight = { 'min-height': '50px' };
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.look) {
            this.gridLook == Object.assign({}, this.look);
        }
        //setting content for  async calls
        if (this.content && this.content['data']) {
            //setting pagination for async calls
            if (this.total == 0) {
                if (this.content['footer'] && this.content['footer']['pagination']) {
                    this.start = this.content['footer']['pagination']['start'] || 0;
                    this.end = this.start + this.content['footer']['pagination']['perPage'] || 0;
                    if (!this.content['footer']['pagination']['perPage']) {
                        this.log('set perPage property to activate Pagination, degault value is Zero');
                    }
                    this.perPage = this.content['footer']['pagination']['perPage'] || 0;
                    this.total = this.content['footer']['pagination']['total'] || this.backUp.length;
                    if (this.content['footer']['footerButton']) {
                        this.footerBtnName = this.content['footer']['footerButton']['label'] || " ? ";
                    }
                }
            }
            if (this.backUp.length < 1) {
                this.backUp = [...this.content['data']];
                this.innerState = this.formMap(this.content['data'], this.primaryKey);
                this.searchableData = [...this.content['data']];
                if (this.perPage != 0) {
                    this.content["data"] = this.onSliceData({
                        data: this.backUp,
                        start: 0,
                        end: this.perPage
                    });
                    this.searchableData = this.content['data'];
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.showGrid = false;
        this.errorExists = false;
        this.selectedIndex = new Set();
        this.innerSearchSet = new Set();
        this.sortFields = new Map();
        this.innerSearchMap = new Map();
        this.gridLook = this.look || {};
        //this.bodyHeight = {'min-height':'800px'}; //default
        this.start = 0;
        this.end = 0;
        this.perPage = 0;
        this.total = 0;
        this.footerBtnName = " ? ";
        this.primaryKey = '';
        //check if content and config are present in the data
        if (!this.content) {
            this.log("Provide CONTENT to Render the grid, If you are getting asynchronous data then Ignore it, Do Check will Render the content. Please provide CONFIG and LOOK synchronously else Grid May Break");
            this.errorExists = true;
        }
        if (!this.config) {
            this.log(" Provide CONFIG to Render the grid");
            this.errorExists = true;
        }
        //check if necessary proprties are present in thedata
        if (this.content) {
            if (!this.content['data']) {
                this.log("data[] property is missing in the CONTENT object");
                this.errorExists = true;
            }
            else {
                this.backUp = [...this.content['data']];
                this.searchableData = this.content['data'];
                this.perPage = this.backUp.length; //default
            }
            if (!this.content['header']) {
                this.log(" header[] property is missing in the CONTENT object");
                this.errorExists = true;
            }
        }
        //Check if primary key is present in the data
        if (this.config) {
            if (!this.config['primaryKey']) {
                this.log("Please provide primaryKey:[field name] in the CONFIG");
                this.log("without primary key the selections may not work");
                this.errorExists = true;
            }
            else {
                this.primaryKey = this.config['primaryKey'];
            }
        }
        if (this.content && this.content['data']) {
            this.innerState = this.formMap(this.content['data'], this.primaryKey);
        }
        //check if body height is present
        if (this.config) {
            if (this.config['contentMinHeight']) {
                this.defaultHeight = { 'min-height': this.config['contentMinHeight'], 'max-height': this.config['contentMaxHeight'] };
            }
        }
        // check for footer
        if (this.config && this.content) {
            if (this.config['footer']) {
                if (!this.content['footer']) {
                    this.log('CONFIG footer is set to true but no footer property exists in CONTNET');
                }
            }
            if (this.config && this.config['pagination']) {
                if (this.content['footer']) {
                    if (!this.content['footer']['pagination']) {
                        this.log('CONFIG pagination is set to true but pagination in CONTENT does not exist.');
                    }
                    else {
                        this.start = this.content['footer']['pagination']['start'] || 0;
                        this.end = this.start + this.content['footer']['pagination']['perPage'] || 0;
                        if (!this.content['footer']['pagination']['perPage']) {
                            this.log('set perPage property to activate Pagination, degault value is Zero');
                        }
                        this.perPage = this.content['footer']['pagination']['perPage'] || 0;
                        this.total = this.content['footer']['pagination']['total'] || this.backUp.length;
                        if (this.content['footer']['footerButton']) {
                            this.footerBtnName = this.content['footer']['footerButton']['label'] || " ? ";
                        }
                    }
                }
            }
        }
        if (this.config && !this.config['eventBasedPagination']) {
            //if in page pagination required
            //intially the data will be starting to page
            if (this.content && this.content["data"]) {
                this.content["data"] = this.onSliceData({
                    data: this.backUp,
                    start: this.start,
                    end: this.perPage
                });
                this.searchableData = [...this.content["data"]];
            }
        }
        //Debounce for the cell input boxes
        this.subjectSelectInput.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(500)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ id, field, val }) => {
            //call method to set inner state and emit value
            this.setInnerState(id, field, val);
            this.onActionStateEmit({ on: 'cellTextBox', state: this.innerState });
        }));
        //Debounce for the Global search Input
        this.subjectGlobalSearchInput.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(500)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ value }) => {
            //call method fror search result
            this.handleGlobalSearch(value);
        }));
        //Debounce for the inner search boxes
        this.subjectInnerSearchInput.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(500)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ value, field }) => {
            //call method fror search result
            this.handleInnerSearch(value, field);
        }));
    } //end of ng onInint
    //end of ng onInint
    /**
     * @return {?}
     */
    resetSearchBar() {
        if (this.searchBarElement) {
            this.searchBarElement.value = "";
        }
    }
    /**
     * @return {?}
     */
    resetInnerSearchBars() {
        this.innerSearchSet.forEach((/**
         * @param {?} el
         * @return {?}
         */
        el => {
            el.value = "";
        }));
    }
    //data slicing method
    /**
     * @param {?} __0
     * @return {?}
     */
    onSliceData({ data = [], start = 0, end = 0 }) {
        return data.slice(start, end);
    }
    //executes on the check box change inside the cells
    /**
     * @param {?} row
     * @param {?} field
     * @param {?} checked
     * @return {?}
     */
    onCheckboxChange(row, field, checked) {
        // console.log(arguments);
        /** @type {?} */
        let index = row[this.primaryKey];
        if (!this.selectedIndex.has(index)) {
            this.selectedIndex.add(index);
        }
        this.setInnerState(index, field, checked);
        this.onActionStateEmit({ on: 'cellCheckBox', state: this.innerState });
    }
    //executes on the sort icon click
    /**
     * @param {?} field
     * @return {?}
     */
    onSort(field) {
        if (this.sortFields.has(field)) {
            /** @type {?} */
            let order = this.sortFields.get(field);
            if (order == "a") {
                this.sortFields.clear();
                this.searchableData = [...this.sortBkp];
                this.content['data'] = [...this.sortBkp];
            }
            else if (order == "d") {
                this.sortFields.set(field, "a");
                this.searchableData = this.searchableData.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => {
                    return (b[field] > a[field]) ? 0 : -1;
                }));
                this.content['data'] = [...this.searchableData];
            }
        }
        else {
            this.sortFields.clear();
            this.sortFields.set(field, "d");
            this.sortBkp = [...this.searchableData];
            this.searchableData = this.searchableData.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                return (b[field] > a[field]) ? -1 : 0;
            }));
            this.content['data'] = [...this.searchableData];
        }
    }
    //executes on the select dropdowns change inside the cells
    /**
     * @param {?} row
     * @param {?} field
     * @param {?} val
     * @return {?}
     */
    onSelectChange(row, field, val) {
        /** @type {?} */
        let index = row[this.primaryKey];
        if (!this.selectedIndex.has(index)) {
            this.selectedIndex.add(index);
        }
        this.setInnerState(index, field, val);
        this.onActionStateEmit({ on: 'cellSelect', state: this.innerState });
    }
    //on key up global search bar
    /**
     * @param {?} value
     * @return {?}
     */
    onGlobalSearchKeyUp(value) {
        this.subjectGlobalSearchInput.next({ value: value });
    }
    //executes from global search bar debounce
    /**
     * @param {?} element
     * @return {?}
     */
    handleGlobalSearch(element) {
        //console.log("search val", element.value)
        this.searchBarElement = element;
        /** @type {?} */
        let tempData = [...this.searchableData];
        this.content['data'] = tempData.filter((/**
         * @param {?} el
         * @return {?}
         */
        (el) => {
            return JSON.stringify(el).toLowerCase().indexOf(this.searchBarElement.value.toLowerCase()) != -1;
        }));
    }
    //executes from inner search bar debounce
    /**
     * @param {?} value
     * @param {?} field
     * @return {?}
     */
    handleInnerSearch(value, field) {
        this.resetSearchBar();
        this.innerSearchMap.set(field, value);
        /** @type {?} */
        let tempData = [...this.searchableData];
        //console.log("search val",this.innerSearchMap.keys(),tempData)
        /** @type {?} */
        let keys = Array.from(this.innerSearchMap.keys());
        /** @type {?} */
        let conditions = "";
        keys.forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            conditions = conditions + key + " == " + this.innerSearchMap.get(key) + ",";
            tempData = [...tempData.filter((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => {
                    return JSON.stringify(row[key]).toLowerCase().indexOf(this.innerSearchMap.get(key).toLowerCase()) != -1;
                }))];
        }));
        //console.log(conditions, tempData)
        this.content['data'] = tempData;
    }
    //exceutes on inner search input box
    /**
     * @param {?} el
     * @param {?} field
     * @return {?}
     */
    onInnerSearchKeyUp(el, field) {
        this.innerSearchSet.add(el);
        this.subjectInnerSearchInput.next({ value: el.value, field: field });
    }
    //executes on inner input box key up
    /**
     * @param {?} row
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    onTextKeyUp(row, field, value) {
        /** @type {?} */
        let index = row[this.primaryKey];
        if (!this.selectedIndex.has(index)) {
            this.selectedIndex.add(index);
        }
        this.subjectSelectInput.next({ id: index, field: field, val: value });
    }
    //execute on cell button click
    /**
     * @param {?} row
     * @return {?}
     */
    onCellButtonClick(row) {
        /** @type {?} */
        let index = row[this.primaryKey];
        /** @type {?} */
        let slelctedRow = this.innerState.get(index);
        this.onEmitt({ on: 'cellBtn', value: slelctedRow });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    replaceDateWithInnerState(data) {
        return data.map((/**
         * @param {?} el
         * @return {?}
         */
        el => {
            return this.innerState.get(el[this.config['primaryKey']]);
        }));
    }
    /**
     * @param {?} row
     * @param {?} field
     * @return {?}
     */
    getCurrentValue(row, field) {
        /** @type {?} */
        let tempField = field.trim().replace(/ /g, "_");
        return (row[tempField]) ? row[tempField] : '';
    }
    //replacing inner state Map values with new values
    /**
     * @param {?} index
     * @param {?} field
     * @param {?} val
     * @return {?}
     */
    setInnerState(index, field, val) {
        /** @type {?} */
        let tempField = field.trim().replace(/ /g, "_");
        /** @type {?} */
        let newRow = Object.assign({}, this.innerState.get(index), { [tempField]: val });
        this.innerState.set(index, newRow);
    }
    //create Map from the input data array
    /**
     * @param {?} state
     * @param {?} key
     * @return {?}
     */
    formMap(state, key) {
        /** @type {?} */
        let map = new Map();
        state.forEach((/**
         * @param {?} el
         * @param {?} id
         * @return {?}
         */
        (el, id) => {
            map.set(el[key], el);
        }));
        return map;
    }
    ;
    //set inter search values
    /**
     * @return {?}
     */
    resetInnerSearch() {
        if (this.innerSearchSet.size > 0) {
            this.innerSearchSet.forEach((/**
             * @param {?} el
             * @return {?}
             */
            el => {
                el.value = '';
            }));
        }
        ;
    }
    ;
    //Emiting the state on every Action
    /**
     * @param {?} __0
     * @return {?}
     */
    onActionStateEmit({ on, state }) {
        /** @type {?} */
        let temp = [];
        this.selectedIndex.forEach((/**
         * @param {?} el
         * @return {?}
         */
        (el) => {
            temp.push(state.get(el));
        }));
        this.onEmitt({ on: on, value: temp });
    }
    ;
    /**
     * @return {?}
     */
    onFooterBtnClick() {
        this.onActionStateEmit({ on: 'footerBtn', state: this.innerState });
    }
    //Pagination Methods
    /**
     * @return {?}
     */
    onPaginationFirst() {
        this.resetInnerSearch();
        if (this.config['eventBasedPagination']) {
            this.onEmitt({ on: 'first', value: "paginationFirst" });
            return;
        }
        this.start = 0;
        this.end = this.perPage;
        /** @type {?} */
        let tempSlicedData = this.onSliceData({
            data: this.backUp,
            start: this.content['footer']['pagination']['start'],
            end: this.perPage
        });
        //will retain state
        this.content["data"] = this.replaceDateWithInnerState(tempSlicedData);
        this.searchableData = [...this.content["data"]];
    }
    ;
    /**
     * @return {?}
     */
    onPaginationLast() {
        this.resetInnerSearch();
        if (this.config['eventBasedPagination']) {
            this.onEmitt({ on: 'last', value: "paginationLast" });
            return;
        }
        if (this.end >= this.total)
            return;
        /** @type {?} */
        let sub = (this.total % this.perPage == 0) ? this.perPage : this.total % this.perPage;
        this.start = this.total - sub;
        this.end = this.total;
        /** @type {?} */
        let tempSlicedData = this.onSliceData({
            data: this.backUp,
            start: this.start,
            end: this.total
        });
        this.content["data"] = this.replaceDateWithInnerState(tempSlicedData);
        this.searchableData = [...this.content["data"]];
    }
    /**
     * @return {?}
     */
    onPaginationNext() {
        this.resetInnerSearch();
        if (this.config['eventBasedPagination']) {
            this.onEmitt({ on: 'next', value: "paginationNext" });
            return;
        }
        //console.log(this.start,this.end)
        if (this.end >= this.total) {
            return;
        }
        this.start = this.end;
        this.end = this.end + this.perPage;
        if (this.end >= this.total) {
            this.end = this.total;
        }
        //console.log(this.start,this.end)
        /** @type {?} */
        let tempSlicedData = this.onSliceData({
            data: this.backUp,
            start: this.start,
            end: this.end
        });
        this.content["data"] = this.replaceDateWithInnerState(tempSlicedData);
        this.searchableData = [...this.content["data"]];
    }
    ;
    /**
     * @return {?}
     */
    onPaginationPrevious() {
        this.resetInnerSearch();
        if (this.config['eventBasedPagination']) {
            this.onEmitt({ on: 'prev', value: "paginationPrevious" });
            return;
        }
        //console.log(this.start,this.end)
        if (this.start <= 0) {
            return;
        }
        this.end = this.start;
        this.start = this.end - this.perPage;
        if (this.start <= 0) {
            this.start = 0;
        }
        //console.log(this.start,this.end)
        /** @type {?} */
        let tempSlicedData = this.onSliceData({
            data: this.backUp,
            start: this.start,
            end: this.end
        });
        this.content["data"] = this.replaceDateWithInnerState(tempSlicedData);
        this.searchableData = [...this.content["data"]];
    }
    ;
    /**
     * @param {?} __0
     * @return {?}
     */
    onEmitt({ on, value }) {
        this.onActionState_e.emit({ from: 'grid', on: on, value: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    log(value) {
        if (this.config && this.config['log']) {
            console.log(`%c :::  ${value}`, 'font-size: 12px; color: red');
        }
        //this.consoleError = true;
    }
}
SdEasyGridComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'sd-easy-grid',
                template: "\n<div class=\"table-wrapper\" [ngClass]=\"gridLook['sd__tableWrapperClass']\">\n\n\n  <div class=\"container-fluid table-container\" >\n\n    <div class=\"row search-bar-wrapper\" *ngIf=\"config && config['globalSearchBar']\" [ngClass]=\"gridLook['sd__globalSearchBarContainerClass']\">\n\n      <section class=\"col-5\" >\n        <input class=\"table-search-bar\" #globalSearchInput placeholder=\"search\" type=\"text\" [ngClass]=\"gridLook['sd__globalSearchBarInputClass']\" maxlength=\"15\" (keyup)=\"onGlobalSearchKeyUp(globalSearchInput)\">\n      </section>\n\n    </div>\n\n\n    <div class=\"table-horizontal-wrapper\">\n\n\n      <div class=\"horizontal-container\" >\n\n        <div  ngClass=\"{{(config && config['colSpan']=='full')?'header-container  ' +gridLook['sd__tableHeaderContainer']  : 'header-container   width-max-content ' +gridLook['sd__tableHeaderContainer'] }}\"   >\n\n          <div class=\"row table-header row-content\" *ngIf=\"content && content['header']\">\n\n\n            <div ngClass=\"{{(config && config['colSpan']=='full')?'col sd-header-cell  ' +gridLook['sd__headerCellClass'] : 'col sd-header-cell limit-width ' + gridLook['sd__headerCellClass'] }}\"   *ngFor=\"let item of content['header'] ; let first = first; let last =last;\"  >\n                <div class=\"col-12 text-center \">\n                  {{item['name']}} \n\n                  <section *ngIf=\"item['type']!=='action' && item['sortable']\"   class=\" sortable fr\" (click)=\"onSort(item['field'])\">\n                    <div *ngIf=\"sortFields.get(item['field'])=='d'\" class=\"cp rotate-180\">\n                      &#x25BE; \n                    </div>\n                    <div *ngIf=\"sortFields.get(item['field'])=='a'\" class=\"cp\">\n                      &#x25BE;\n                    </div>\n\n                    <div *ngIf=\"!sortFields.has(item['field'])\" class=\"cp rotate-180\">\n                      &#x25BE;\n                    </div>\n                    <div *ngIf=\"!sortFields.has(item['field'])\" class=\"cp\">\n                      &#x25BE;\n                    </div>\n                 </section>\n\n                </div>\n\n                \n\n                <section *ngIf=\"item['type']!=='action' && item['innerSearch']\"   class=\"col-12 inner-search-bar-container padding-lr-0 \" >\n                  <input class=\"inner-search-bar\" #innerSearch placeholder=\"search\" type=\"text\" [ngClass]=\"gridLook['sd__innerSearchBarInputClass']\" maxlength=\"10\" (keyup)=\"onInnerSearchKeyUp(innerSearch,item['field'])\" >\n                </section>\n\n                \n              </div>\n\n          </div>\n\n        </div>\n\n          <div class=\"row table-body-container \"  ngClass=\"{{(config && config['colSpan']=='full')?' table-scroll-y '   : ' table-scroll-y width-max-content  '  }}\"  [ngStyle]=\"defaultHeight\">\n\n            <div class=\"col table-body table-plr-0\" *ngIf=\"content && content['data']\">\n\n              <div class=\"row row-content\"   *ngFor=\"let row of content['data'];let first = first; let last =last; let rowIndex = index ;\" [ngClass]=\"(config && config['stripes'] && rowIndex%2!==0)? 'stripes ' + gridLook['sd__stripeClass']:''\" >\n\n                <div   ngClass=\"{{(config && config['colSpan']=='full')?'col sd-body-cell  ' +gridLook['sd__contentCellClass'] : 'col sd-body-cell limit-width ' + gridLook['sd__contentCellClass'] }}\"  *ngFor=\"let cell of content['header'];\">\n\n                  <div  class=\"aligner\">\n\n                    <span *ngIf=\"cell['type']!=='action'\">{{row[cell['field']]}}</span>\n\n\n                    <div class=\"sd-actions\" *ngIf=\"cell['type']=='action'\" >\n\n\n                        <div class=\"sd-action-element\" *ngIf=\"cell['element']=='checkBox'\">\n                            <input class=\"input-checkbox\"\n                            [ngClass]=\"gridLook['sd__inputCheckBoxClass']\"\n                             type=\"checkbox\" name=\"cellCheck\" #inputCheckBox \n                             [checked]=\"getCurrentValue(row,cell['name'])\"\n                             (change)=\"onCheckboxChange(row,cell['name'],inputCheckBox.checked)\">\n                        <label for=\"checkBox\">{{cell['label']}}</label>\n                        </div>\n\n                        <div class=\"sd-action-element\" *ngIf=\"cell['element']=='inputTextBox'\">\n                          <label for=\"text\">{{cell['label']}}</label>\n                          <input class=\"input-textbox\" maxlength=\"25\"\n                          [ngClass]=\"gridLook['sd__inputTextClass']\"\n                            type=\"text\" name=\"text\" #inputTextBox  (keyup)=\"onTextKeyUp(row,cell['name'],inputTextBox.value)\"\n                            [value]=\"getCurrentValue(row,cell['name']) || ''\">\n                        </div>\n\n                        <div class=\"sd-action-element\" *ngIf=\"cell['element']=='button'\">\n                          <input class=\"input-button cp\"\n                          [ngClass]=\"gridLook['sd__inputButtonClass']\"\n                           type=\"button\" name=\"button\" [value]=\"cell['label']\" (click)=\"onCellButtonClick(row)\">\n                        </div>\n\n\n                        <div class=\"sd-action-element\" *ngIf=\"cell['element']=='inputSelect'\">\n                            <label for=\"input-select\">{{cell['label']}}</label>\n                            <select class=\"input-select\" #inputSelect (change)=\"onSelectChange(row,cell['name'],inputSelect.value)\"  [ngClass]=\"gridLook['sd__inputSelectClass']\">\n                                <option >select</option>\n                                <option *ngFor=\"let item of cell['items']\" [value]=\"item\" [selected]=\"item==getCurrentValue(row,cell['name'])\">{{item}}</option>\n                             </select>\n                         </div>\n\n\n                  </div>\n\n\n                  </div>\n\n                </div>\n\n              </div>\n\n              \n\n            </div>\n            \n\n          </div>\n          <div *ngIf=\"consoleError\" class=\"console-error\">Error</div>\n      </div>\n\n\n    </div>\n\n\n    <div class=\"row  table-footer-wrapper\" *ngIf=\"content && config && content['footer'] && config['footer']\" [ngClass]=\"gridLook['sd__tableFooterContainerClass']\">\n\n\n\n      <div *ngIf=\"config['pagination'] && content['footer']['pagination']\" class=\"pagination\" (click)=\"resetSearchBar()\">\n        <span class=\"arrow\" (click)=\"onPaginationFirst()\">\n          &#10094;&#10094;\n        </span>\n        <span class=\"arrow\" (click)=\"onPaginationPrevious()\">\n          &#10094; \n        </span>\n         from {{start+1}} to {{end}} of {{total}}\n        <span class=\"arrow\" (click)=\"onPaginationNext()\">\n          &#10095; \n        </span>\n        <span class=\"arrow\" (click)=\"onPaginationLast()\">\n          &#10095;&#10095;\n        </span>\n                    \n      </div>\n\n      <button *ngIf=\"config['footerButton']\" class=\"footerBtn cp\" (click)=\"onFooterBtnClick()\" [ngClass]=\"gridLook['sd__tableFooterButtonClass']\">\n            {{footerBtnName}}\n      </button>\n\n  </div>\n\n\n</div>\n\n\n<div style=\"clear: both;\"></div>\n</div>\n\n<style>\n</style>\n",
                styles: ["/*!\n * Bootstrap Grid v4.4.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */html{box-sizing:border-box;-ms-overflow-style:scrollbar}*,::after,::before{box-sizing:inherit}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.3333333333%}.offset-2{margin-left:16.6666666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.3333333333%}.offset-5{margin-left:41.6666666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.3333333333%}.offset-8{margin-left:66.6666666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.3333333333%}.offset-11{margin-left:91.6666666667%}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.3333333333%}.offset-sm-2{margin-left:16.6666666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.3333333333%}.offset-sm-5{margin-left:41.6666666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.3333333333%}.offset-sm-8{margin-left:66.6666666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.3333333333%}.offset-sm-11{margin-left:91.6666666667%}.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.3333333333%}.offset-md-2{margin-left:16.6666666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.3333333333%}.offset-md-5{margin-left:41.6666666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.3333333333%}.offset-md-8{margin-left:66.6666666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.3333333333%}.offset-md-11{margin-left:91.6666666667%}.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.3333333333%}.offset-lg-2{margin-left:16.6666666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.3333333333%}.offset-lg-5{margin-left:41.6666666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.3333333333%}.offset-lg-8{margin-left:66.6666666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.3333333333%}.offset-lg-11{margin-left:91.6666666667%}.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.3333333333%}.offset-xl-2{margin-left:16.6666666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.3333333333%}.offset-xl-5{margin-left:41.6666666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.3333333333%}.offset-xl-8{margin-left:66.6666666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.3333333333%}.offset-xl-11{margin-left:91.6666666667%}.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{flex:1 1 auto!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;overflow-wrap:break-word!important}.text-reset{color:inherit!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.visible{visibility:visible!important}.invisible{visibility:hidden!important}", ".aligner{display:flex;align-items:center;justify-content:center;text-align:center;height:100%}.stripes{background-color:#efefefad}.table-wrapper{min-height:300px;min-width:300px;height:inherit;max-width:100%}.table-wrapper .cp{cursor:pointer}.table-wrapper .sortable :first-child{position:absolute;top:-4px;right:2%}.table-wrapper .sortable :last-child{position:absolute;top:1px;right:2%}.table-wrapper .rotate-180{transform:rotate(180deg)}.table-wrapper .fr{float:right}.table-wrapper div{box-sizing:border-box}.table-wrapper ::-webkit-scrollbar{width:10px;height:10px;-webkit-overflow-scrolling:touch}.table-wrapper ::-webkit-scrollbar-track{background:#fff}.table-wrapper ::-webkit-scrollbar-thumb{background:#c1c1c1}.table-wrapper ::-webkit-scrollbar-thumb:hover{background:#9e9d9d}.table-wrapper .padding-lr-0{padding-left:0;padding-right:0}.table-wrapper .row-content{flex-wrap:nowrap!important;margin-left:0!important;margin-right:0!important}.table-wrapper .table-container{background-color:#ffffffb8;width:100%;border:1px solid grey;float:left;padding-left:0;padding-right:0;min-height:inherit;height:inherit;position:relative}.table-wrapper .table-container .search-bar-wrapper{padding:20px;border-bottom:1px solid;margin:0;background-color:#fff}.table-wrapper .table-container .search-bar-wrapper .table-search-bar{border:1px solid grey;border-radius:5px;padding:5px;width:100%}.table-wrapper .table-container .limit-width{width:150px!important}.table-wrapper .table-container .header-container{width:100%;background:#fff}.table-wrapper .table-container .header-pr-10{padding-right:10px}.table-wrapper .table-container .table-plr-0{padding-left:0!important;padding-right:0!important}.table-wrapper .table-container .table-header{font-weight:600;margin:0;padding-right:10px}.table-wrapper .table-container .table-header .sd-header-cell{border-right:1px solid grey;border-bottom:1px solid grey;background-color:#d8d8d8;padding:.3em;word-wrap:break-word;box-sizing:border-box;padding-left:2px!important;padding-right:2px!important}.table-wrapper .table-container .table-header .inner-search-bar-container{width:100%;padding-top:10px}.table-wrapper .table-container .table-header .inner-search-bar-container .inner-search-bar{border:1px solid grey;padding:3px;border-radius:5px;width:100%;margin:auto}.table-wrapper .table-container .table-body-container{min-height:0;width:auto;margin:0;box-sizing:border-box}.table-wrapper .table-container .table-scroll-y{overflow-y:scroll}.table-wrapper .table-container .width-max-content{width:-webkit-max-content;width:-moz-max-content;width:max-content}.table-wrapper .table-container .table-body .sd-body-cell{border-right:1px solid grey;border-bottom:1px solid grey;padding:.2em;word-wrap:break-word;box-sizing:border-box;overflow:hidden;-webkit-animation-name:cellAnimation;animation-name:cellAnimation;-webkit-animation-duration:1s;animation-duration:1s;padding-left:2px!important;padding-right:2px!important}@-webkit-keyframes cellAnimation{0%{-webkit-filter:opacity(0);filter:opacity(0)}100%{-webkit-filter:opacity(1);filter:opacity(1)}}@keyframes cellAnimation{0%{-webkit-filter:opacity(0);filter:opacity(0)}100%{-webkit-filter:opacity(1);filter:opacity(1)}}.table-wrapper .table-container .table-body .sd-first-cell{border-left:1px solid grey}.table-wrapper .table-container .table-body .sd-actions .sd-action-element{display:inline-block;width:100%}.table-wrapper .table-container .table-body .sd-actions .sd-action-element .input-checkbox{vertical-align:middle}.table-wrapper .table-container .table-body .sd-actions .sd-action-element .input-textbox{width:inherit;border-radius:5px;border:1px solid grey}.table-wrapper .table-container .table-body .sd-actions .sd-action-element label{vertical-align:middle}.table-wrapper .table-container .table-body .sd-actions .sd-action-element .input-select{width:inherit}.table-wrapper .table-container .table-body .sd-actions .sd-action-element .input-button{min-height:20px;min-width:50px;border-radius:5px}.table-wrapper .table-container .console-error{color:red;position:absolute;top:20px;right:10px}.table-wrapper .table-container .table-footer-wrapper{border-top:1px solid grey;min-height:50px;max-height:100px;margin:0;width:100%;bottom:0;background-color:#fff;padding:20px}.table-wrapper .table-container .table-footer-wrapper .pagination{max-width:300px;margin:0 auto}.table-wrapper .table-container .table-footer-wrapper .pagination .arrow{color:grey}.table-wrapper .table-container .table-footer-wrapper .pagination span{margin-left:10px;margin-right:10px;cursor:pointer}.table-wrapper .table-container .table-footer-wrapper .footerBtn{min-height:20px;min-width:50px;border-radius:5px}.table-wrapper .table-horizontal-wrapper{overflow-y:hidden;overflow-x:scroll}.table-wrapper .table-horizontal-wrapper .horizontal-container{height:-webkit-max-content;height:-moz-max-content;height:max-content;min-width:100%}"]
            }] }
];
/** @nocollapse */
SdEasyGridComponent.ctorParameters = () => [];
SdEasyGridComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    look: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onActionState_e: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sd-easy-grid.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SdEasyGridModule {
}
SdEasyGridModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [SdEasyGridComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                exports: [SdEasyGridComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: sd-easy-grid.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=sd-easy-grid.js.map


/***/ }),

/***/ "./src/app/easy-grid-page/easy-grid-page-container/easy-grid-page-container.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/easy-grid-page/easy-grid-page-container/easy-grid-page-container.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hero-area {\n  padding-top: 75px;\n  min-height: 250px;\n  background-color: #3f51b5;\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 40px;\n  color: white;\n  background-image: linear-gradient(to bottom right, #2d2877, #6277eb);\n}\n.hero-area p {\n  line-height: 5px;\n}\n.yt-adj {\n  margin-top: 42px;\n  max-height: 325px;\n}\n@media only screen and (max-width: 775px) {\n  .yt-adj {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YXBzL0Rlc2t0b3AvQkJfUmVtb3RlL05ld1NlcnZlckR1bW1pZXMvc3JjL2FwcC9lYXN5LWdyaWQtcGFnZS9lYXN5LWdyaWQtcGFnZS1jb250YWluZXIvZWFzeS1ncmlkLXBhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lYXN5LWdyaWQtcGFnZS9lYXN5LWdyaWQtcGFnZS1jb250YWluZXIvZWFzeS1ncmlkLXBhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUxPO0VBT1AsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0VBQUE7QUNISjtBREtJO0VBQ0MsZ0JBQUE7QUNITDtBRFNFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ05KO0FEU0U7RUFDRTtJQUNFLGFBQUE7RUNOSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZWFzeS1ncmlkLXBhZ2UvZWFzeS1ncmlkLXBhZ2UtY29udGFpbmVyL2Vhc3ktZ3JpZC1wYWdlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJG5hdi1jb2xvcjojM2Y1MWI1O1xuLmhlcm8tYXJlYXtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICM0MDUxQjM7XG4gICAgcGFkZGluZy10b3A6IDc1cHg7XG4gICAgbWluLWhlaWdodDogMjUwcHg7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtY29sb3I7XG4gIFxuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2IoNDUsIDQwLCAxMTkpLCByZ2IoOTgsIDExOSwgMjM1KSk7XG4gIFxuICAgIHB7XG4gICAgIGxpbmUtaGVpZ2h0OiA1cHg7XG4gICAgfVxuXG4gIFxuICB9XG5cbiAgLnl0LWFkantcbiAgICBtYXJnaW4tdG9wOiA0MnB4O1xuICAgIG1heC1oZWlnaHQ6IDMyNXB4O1xuICB9XG4gXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NzVweCl7XG4gICAgLnl0LWFkantcbiAgICAgIGRpc3BsYXk6bm9uZVxuICAgIH1cbiAgIH0iLCIuaGVyby1hcmVhIHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyZDI4NzcsICM2Mjc3ZWIpO1xufVxuLmhlcm8tYXJlYSBwIHtcbiAgbGluZS1oZWlnaHQ6IDVweDtcbn1cblxuLnl0LWFkaiB7XG4gIG1hcmdpbi10b3A6IDQycHg7XG4gIG1heC1oZWlnaHQ6IDMyNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3NXB4KSB7XG4gIC55dC1hZGoge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/easy-grid-page/easy-grid-page-container/easy-grid-page-container.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/easy-grid-page/easy-grid-page-container/easy-grid-page-container.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EasyGridPageContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyGridPageContainerComponent", function() { return EasyGridPageContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_gird_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gird-data.service */ "./src/app/services/gird-data.service.ts");
/* harmony import */ var _services_demo_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/demo-link.service */ "./src/app/services/demo-link.service.ts");




let EasyGridPageContainerComponent = class EasyGridPageContainerComponent {
    constructor(_gridData, _dl) {
        this._gridData = _gridData;
        this._dl = _dl;
    }
    ngOnInit() {
        this.gridData = this._gridData.getDataforGrid();
        this.installMsg = `
    npm install sd-easy-grid`;
        this.importMsg = `
    import {SdEasyGridModule} from "node_modules/sd-easy-grid"`;
        this.useMsg = `
    <sd-easy-grid 
    [content]='content' 
    [config]='config' 
    [look]='look' 
    (onActionState_e)="showState($event)"> 
    </sd-easy-grid>`;
        this.noticeData = this._gridData.getDataForNotify();
        this.subHeaderContent = {
            icon: 'fa fa-border-all',
            info: [
                'Easy to use data grid',
                'Install using NPM',
                'Control the look and feel as you wish',
                'Get sort, search like functionalities easyly'
            ],
            showDemoBig: true,
            demoLinkText: "Demo",
            showIconBig: true,
            videoLink: this._dl.getLinks().EASY_GRID_DEMO
        };
        this.contentConfig = `
    config : {
      primaryKey:"id", //MUST be provided
      globalSearchBar:true,
      stripes:true,
      footer:true,
      pagination:true,
      eventBasedPagination:false,
      footerButton:true,
      contentMinHeight:"350px", // blank will apply the defaults.
      contentMaxHeight:"350px",  
      colSpan:"full"
    }
    `;
        this.contentDisplay = `
    content : {
      header:[
        {name:"select user",type:"action",element:"checkBox"},
        {name:"blank",field:'' },
        {name:"id",field:"id",innerSearch:true,sortable:true},
        {name:"First Name",field:"fName",innerSearch:true,sortable:true},
        {name:"Address",field:"address",innerSearch:true},
        {name:"Role",field:"role",sortable:true},
        {name:"Vehicle",type:"action",element:"inputSelect",items:["car","bus","truck"],label:"select vehicle"},
        {name:"enter Zip",type:"action",element:"inputTextBox",label:"enter"},
        {name:"Click",type:"action",element:"button", label:"save"}],
      data:[
        {id:1,fName:"Taps",address:"USA",role:"Developer"},
        {id:2,fName:"Macks",address:"UK",role:"Manager"},
        {id:3,fName:"Arnold",address:"India",role:"Driver"},
        {id:4,fName:"Arnold",address:"India",role:"Driver"},
        {id:5,fName:"Arnold",address:"India",role:"Driver"},
        {id:6,fName:"Arnold",address:"India",role:"Driver"}],
      footer:{
        pagination:{perPage:5,start:0,total:""},
        footerButton:{ label:"save"}
      }
    }
    `;
        this.contentLook = `
    look : {
      sd__stripeClass:"",
      sd__globalSearchBarInputClass:"",
      sd__globalSearchBarContainerClass:"",
      sd__tableWrapperClass:"",
      sd__headerCellClass:"",
      sd__contentCellClass:"",
      sd__inputTextClass:"",
      sd__inputCheckBoxClass:"",
      sd__inputSelectClass:"",
      sd__inputButtonClass:"",
      sd__paginationClass:"",
      sd__tableFooterContainerClass:"",
      sd__innerSearchBarInputClass:"",
      sd__tableFooterButtonClass:""
  }
    `;
    }
};
EasyGridPageContainerComponent.ctorParameters = () => [
    { type: _services_gird_data_service__WEBPACK_IMPORTED_MODULE_2__["GirdDataService"] },
    { type: _services_demo_link_service__WEBPACK_IMPORTED_MODULE_3__["DemoLinkService"] }
];
EasyGridPageContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-easy-grid-page-container',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./easy-grid-page-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/easy-grid-page/easy-grid-page-container/easy-grid-page-container.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./easy-grid-page-container.component.scss */ "./src/app/easy-grid-page/easy-grid-page-container/easy-grid-page-container.component.scss")).default]
    })
], EasyGridPageContainerComponent);



/***/ }),

/***/ "./src/app/easy-grid-page/easy-grid-page-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/easy-grid-page/easy-grid-page-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: EasyGridPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyGridPageRoutingModule", function() { return EasyGridPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _easy_grid_page_container_easy_grid_page_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easy-grid-page-container/easy-grid-page-container.component */ "./src/app/easy-grid-page/easy-grid-page-container/easy-grid-page-container.component.ts");




const routes = [
    {
        path: '',
        component: _easy_grid_page_container_easy_grid_page_container_component__WEBPACK_IMPORTED_MODULE_3__["EasyGridPageContainerComponent"]
    }
];
let EasyGridPageRoutingModule = class EasyGridPageRoutingModule {
};
EasyGridPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EasyGridPageRoutingModule);



/***/ }),

/***/ "./src/app/easy-grid-page/easy-grid-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/easy-grid-page/easy-grid-page.module.ts ***!
  \*********************************************************/
/*! exports provided: EasyGridPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyGridPageModule", function() { return EasyGridPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _easy_grid_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easy-grid-page-routing.module */ "./src/app/easy-grid-page/easy-grid-page-routing.module.ts");
/* harmony import */ var _easy_grid_page_container_easy_grid_page_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./easy-grid-page-container/easy-grid-page-container.component */ "./src/app/easy-grid-page/easy-grid-page-container/easy-grid-page-container.component.ts");
/* harmony import */ var _reusables_reusables_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reusables/reusables.module */ "./src/app/reusables/reusables.module.ts");
/* harmony import */ var node_modules_sd_easy_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node_modules/sd-easy-grid */ "./node_modules/sd-easy-grid/fesm2015/sd-easy-grid.js");







let EasyGridPageModule = class EasyGridPageModule {
};
EasyGridPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_easy_grid_page_container_easy_grid_page_container_component__WEBPACK_IMPORTED_MODULE_4__["EasyGridPageContainerComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _easy_grid_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["EasyGridPageRoutingModule"],
            _reusables_reusables_module__WEBPACK_IMPORTED_MODULE_5__["ReusablesModule"],
            node_modules_sd_easy_grid__WEBPACK_IMPORTED_MODULE_6__["SdEasyGridModule"]
        ]
    })
], EasyGridPageModule);



/***/ })

}]);
//# sourceMappingURL=easy-grid-page-easy-grid-page-module-es2015.js.map