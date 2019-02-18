(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings */ "./src/settings.js");





var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
    }
    ApiService.prototype.getSources = function () {
        return this.httpClient.get(_settings__WEBPACK_IMPORTED_MODULE_4__["newsapiUrl"] + "/sources?apiKey=" + _settings__WEBPACK_IMPORTED_MODULE_4__["apiKey"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.sources;
        }));
    };
    ApiService.prototype.getNews = function (source) {
        return this.httpClient.get(_settings__WEBPACK_IMPORTED_MODULE_4__["newsapiUrl"] + "/top-headlines?sources=" + source + "&apiKey=" + _settings__WEBPACK_IMPORTED_MODULE_4__["apiKey"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.articles;
        }));
    };
    ApiService.prototype.getLocalNews = function () {
        return this.httpClient.get("" + _settings__WEBPACK_IMPORTED_MODULE_4__["localNewsUrl"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    ApiService.prototype.onLoadNews = function (source) {
        return this.httpClient.get(_settings__WEBPACK_IMPORTED_MODULE_4__["newsapiUrl"] + "/top-headlines?sources=" + source + "&page=10&pageSize=20&apiKey=" + _settings__WEBPACK_IMPORTED_MODULE_4__["apiKey"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.articles;
        }));
    };
    ApiService.prototype.getNewsWithId = function (id) {
        return this.httpClient.get(_settings__WEBPACK_IMPORTED_MODULE_4__["localNewsUrl"] + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    ApiService.prototype.updateNews = function (news) {
        return this.httpClient.put(_settings__WEBPACK_IMPORTED_MODULE_4__["localNewsUrl"] + "/" + news._id, news);
    };
    ApiService.prototype.addNews = function (news) {
        return this.httpClient.post("" + _settings__WEBPACK_IMPORTED_MODULE_4__["localNewsUrl"], news);
    };
    ApiService.prototype.deleteNews = function (id) {
        return this.httpClient.delete(_settings__WEBPACK_IMPORTED_MODULE_4__["localNewsUrl"] + "/" + id);
    };
    ApiService.prototype.logIn = function () {
        var userData = {
            username: 'alex',
            password: '123'
        };
        return this.httpClient.post("" + _settings__WEBPACK_IMPORTED_MODULE_4__["loginUrl"], userData);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\r\n  display: flex;\r\n\tflex-direction: column;\r\n  min-height: 100%;\r\n  width: 100%;\r\n \tmargin-bottom: -50px;\r\n  padding-bottom: 120px;\r\n  background-color: aquamarine;\r\n \r\n}\r\n\r\n.list {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: blue;\r\n}\r\n\r\nheader {\r\n  background-color: white;\r\n}\r\n\r\nh1 {\r\n  height: 70px;\r\n  background-color: rgb(194, 187, 187);\r\n  text-align: center;\r\n  padding-top: 15px;\r\n}\r\n\r\nfooter {\r\n  height: 50px;\r\n  padding-top: 15px;\r\n\ttext-align: center;\r\n\tfont-size: 14px;\r\n\tbackground: #000;\r\n\tcolor: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Qsc0JBQXNCO0VBQ3JCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7O0FBRTlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiBcdG1hcmdpbi1ib3R0b206IC01MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gXHJcbn1cclxuXHJcbi5saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaDEge1xyXG4gIGhlaWdodDogNzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxODcsIDE4Nyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGJhY2tncm91bmQ6ICMwMDA7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.service */ "./src/app/news.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(newsService) {
        this.newsService = newsService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control-panel/control-panel.component */ "./src/app/control-panel/control-panel.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news-list/news-list.component */ "./src/app/news-list/news-list.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_details_news_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./news-details/news-details.component */ "./src/app/news-details/news-details.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _full_news_full_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./full-news/full-news.component */ "./src/app/full-news/full-news.component.ts");
/* harmony import */ var _edit_news_edit_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-news/edit-news.component */ "./src/app/edit-news/edit-news.component.ts");
/* harmony import */ var _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-form/edit-form.component */ "./src/app/edit-form/edit-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _keywords_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./keywords-filter.pipe */ "./src/app/keywords-filter.pipe.ts");



















var AppRoutes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"] },
    { path: 'news/:id', component: _news_details_news_details_component__WEBPACK_IMPORTED_MODULE_10__["NewsDetailsComponent"] },
    { path: 'add', component: _edit_news_edit_news_component__WEBPACK_IMPORTED_MODULE_13__["EditNewsComponent"] },
    { path: 'edit/:id', component: _edit_news_edit_news_component__WEBPACK_IMPORTED_MODULE_13__["EditNewsComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_5__["ControlPanelComponent"],
                _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_7__["NewsListComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"],
                _news_details_news_details_component__WEBPACK_IMPORTED_MODULE_10__["NewsDetailsComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                _full_news_full_news_component__WEBPACK_IMPORTED_MODULE_12__["FullNewsComponent"],
                _edit_news_edit_news_component__WEBPACK_IMPORTED_MODULE_13__["EditNewsComponent"],
                _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_14__["EditFormComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _keywords_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["KeywordsFilterPipe"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(AppRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/const.ts":
/*!**************************!*\
  !*** ./src/app/const.ts ***!
  \**************************/
/*! exports provided: localSourceName, initialSourceName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localSourceName", function() { return localSourceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialSourceName", function() { return initialSourceName; });
var localSourceName = 'Local';
var initialSourceName = 'Source Name';


/***/ }),

/***/ "./src/app/control-panel/control-panel.component.css":
/*!***********************************************************!*\
  !*** ./src/app/control-panel/control-panel.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around; \r\n  align-items: baseline;\r\n  border-bottom: 1px solid #edede3;\r\n  height: 50px;\r\n  width: 100%;\r\n  padding-top: 10px;\r\n  padding-left: 10px;\r\n\r\n}\r\n\r\nbutton {\r\n  width: 100px;\r\n  height: 25px;\r\n  border-radius: 3px;\r\n  border: 1px solid #ddd;\r\n  margin-right: 60px;\r\n  display: inline-block;\r\n}\r\n\r\nselect {\r\n  width: 150px;\r\n  height: 25px;\r\n  border-radius: 3px;\r\n  border: 1px solid #ddd;\r\n  margin-right: 40px;\r\n  display: inline-block;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  width: 200px;\r\n  height: 25px;\r\n  border-radius: 3px;\r\n  border: 1px solid #ddd;\r\n  margin-right: 3px;\r\n  display: inline-block;\r\n}\r\n\r\nlabel {\r\n  margin-right: 160px; \r\n}\r\n\r\n.filter-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IFxyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlMztcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIG1hcmdpbi1yaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE2MHB4OyBcclxufVxyXG5cclxuLmZpbHRlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/control-panel/control-panel.component.html":
/*!************************************************************!*\
  !*** ./src/app/control-panel/control-panel.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <select [formControl]=\"comboBox\" (change)=\"onChange($event.target.selectedIndex)\">\r\n    <option *ngFor=\"let source of sources\" [ngValue]=\"source\">\r\n      {{source.name}}\r\n    </option>\r\n  </select>\r\n      \r\n  <div class=\"filter-container\">\r\n  <input type=\"text\" [formControl]=\"inputKeyWord\" placeholder=\"Type your text\">\r\n  <button (click)=\"onFilterClick()\">Filter</button>\r\n  </div>  \r\n\r\n  <div>\r\n  <input type=\"checkbox\" [formControl]=\"checkMyNews\" id=\"mynews\" name=\"mynews\" (click)=\"onCheckMyNews($event.target.checked)\">\r\n  <label for=\"mynews\"> Only created by me</label>\r\n  </div>\r\n      \r\n  <button class=\"add\" routerLink=\"add\">Add Article</button>\r\n<div>\r\n"

/***/ }),

/***/ "./src/app/control-panel/control-panel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/control-panel/control-panel.component.ts ***!
  \**********************************************************/
/*! exports provided: ControlPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanelComponent", function() { return ControlPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");




var ControlPanelComponent = /** @class */ (function () {
    function ControlPanelComponent(newsService) {
        this.newsService = newsService;
        this.filterNews = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateCount = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.heading = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.comboBox = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ disabled: true });
        this.inputKeyWord = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.checkMyNews = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.image = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.author = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.sourceUrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ControlPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getSources();
        this.sources = this.newsService.sources;
        this.newsService.updatedSources.subscribe(function (sources) {
            _this.sources = sources;
        });
    };
    ControlPanelComponent.prototype.onChange = function (selectedIndex) {
        this.newsService.selectedSource = selectedIndex;
        this.newsService.getNews();
        this.updateCount.emit();
    };
    ControlPanelComponent.prototype.onFilterClick = function () {
        var keywordsWithSpaces = this.inputKeyWord.value.split(' ');
        var keywords = keywordsWithSpaces.filter(function (value) {
            if (value.length) {
                return true;
            }
            return false;
        });
        this.filterNews.emit(keywords);
    };
    ControlPanelComponent.prototype.onCheckMyNews = function (checked) {
        this.newsService.onCheckMyNews(checked);
        if (checked) {
            this.comboBox.disable();
            this.updateCount.emit();
        }
        else {
            this.comboBox.enable();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ControlPanelComponent.prototype, "filterNews", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ControlPanelComponent.prototype, "updateCount", void 0);
    ControlPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-control-panel',
            template: __webpack_require__(/*! ./control-panel.component.html */ "./src/app/control-panel/control-panel.component.html"),
            styles: [__webpack_require__(/*! ./control-panel.component.css */ "./src/app/control-panel/control-panel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"]])
    ], ControlPanelComponent);
    return ControlPanelComponent;
}());



/***/ }),

/***/ "./src/app/edit-form/edit-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-form/edit-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  background-color: #edede3;\r\n}\r\n\r\n.left {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  padding: 20px;\r\n}\r\n\r\n.right {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  padding: 20px;\r\n}\r\n\r\n.radioGroup {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n}\r\n\r\n.imageInput {\r\n  margin-bottom: 20px;\r\n}\r\n\r\nlabel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.buttonGroup {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\ntextarea {\r\n  height: 120px;\r\n}\r\n\r\nbutton {\r\n  width: 120px;\r\n  height: 25px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1mb3JtL2VkaXQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LWZvcm0vZWRpdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlMztcclxufVxyXG5cclxuLmxlZnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnJhZGlvR3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uaW1hZ2VJbnB1dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufSBcclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJ1dHRvbkdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/edit-form/edit-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-form/edit-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"newsForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"left\">\r\n    <label>\r\n      Heading\r\n      <input type=\"text\" formControlName=\"heading\">\r\n    </label>\r\n  \r\n    <label>\r\n      Short description\r\n      <input type=\"text\" formControlName=\"shortDescription\">\r\n    </label>\r\n  \r\n    <label>\r\n      Content\r\n      <textarea formControlName=\"content\"></textarea>\r\n    </label>\r\n  </div>\r\n  <div class=\"right\">\r\n    <div class=\"radioGroup\">\r\n      Image\r\n      <input type=\"radio\" name=\"image\" value=\"URL\" checked> URL\r\n      <input type=\"radio\" name=\"image\" value=\"File\" checked> File\r\n    </div>\r\n\r\n    <input class=\"imageInput\" type=\"text\" formControlName=\"image\">\r\n       \r\n    <label>\r\n      Date\r\n      <input type=\"text\" formControlName=\"date\" [value]=\"publicationDate | date:'medium'\">\r\n    </label>\r\n\r\n    <label>\r\n      Author\r\n      <input type=\"text\" formControlName=\"author\">\r\n    </label>\r\n\r\n    <label>\r\n      Source URL\r\n      <input type=\"text\" formControlName=\"sourceUrl\">\r\n    </label>\r\n\r\n    <div class=\"buttonGroup\">\r\n      <button (click)=\"save()\" type=\"submit\" [disabled]=\"!newsForm.valid\">Save</button>\r\n      <button (click)=\"cancel()\" routerLink=\"/\">Cancel</button>\r\n    </div>\r\n\r\n  </div>  \r\n</form>\r\n"

/***/ }),

/***/ "./src/app/edit-form/edit-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-form/edit-form.component.ts ***!
  \**************************************************/
/*! exports provided: EditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormComponent", function() { return EditFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");




var EditFormComponent = /** @class */ (function () {
    function EditFormComponent(newsService) {
        this.newsService = newsService;
        this.newsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            heading: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            shortDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            sourceUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    EditFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.newsId) {
            this.news = this.newsService.currentNews;
            this.newsForm.controls.heading.setValue(this.news && this.news.title);
            this.newsForm.controls.content.setValue(this.news && this.news.text);
            this.publicationDate = this.news && this.news.date ? new Date(this.news.date) : null;
            this.newsForm.controls.author.setValue(this.news && this.news.author);
            this.newsService.updatedCurrentNews.subscribe(function (news) {
                _this.newsForm.controls.heading.setValue(news.title);
                _this.newsForm.controls.content.setValue(news.text);
                _this.publicationDate = news.date ? new Date(news.date) : null;
                _this.newsForm.controls.author.setValue(news.author);
            });
        }
        else {
            this.publicationDate = new Date();
            this.newsForm.controls.date.setValue(this.publicationDate);
        }
    };
    EditFormComponent.prototype.save = function () {
        var news = {
            title: this.newsForm.controls.heading.value,
            text: this.newsForm.controls.content.value,
            date: new Date(this.newsForm.controls.date.value).toString(),
            author: this.newsForm.controls.author.value,
        };
        if (this.newsId) {
            news._id = this.newsId;
            news.id = this.news.id;
            this.newsService.updateNews(news);
        }
        else {
            this.newsService.addNews(news);
        }
    };
    EditFormComponent.prototype.cancel = function () {
        console.log('cancel');
    };
    EditFormComponent.prototype.onSubmit = function () {
        console.log('submit');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EditFormComponent.prototype, "newsId", void 0);
    EditFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-form',
            template: __webpack_require__(/*! ./edit-form.component.html */ "./src/app/edit-form/edit-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-form.component.css */ "./src/app/edit-form/edit-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"]])
    ], EditFormComponent);
    return EditFormComponent;
}());



/***/ }),

/***/ "./src/app/edit-news/edit-news.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-news/edit-news.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100%;\r\n  width: 100%;\r\n  margin-bottom: -50px;\r\n  padding-bottom: 120px;\r\n  background-color: #f9f9ef;\r\n}\r\n    \r\nheader {\r\n  background-color: #000;\r\n}\r\n    \r\nh1 {\r\n  height: 70px;\r\n  background-color: #edede3;\r\n  text-align: center;\r\n  padding-top: 15px;\r\n}\r\n    \r\nfooter {\r\n  height: 50px;\r\n  padding-top: 15px;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  background: #000;\r\n  color: white;\r\n}\r\n    \r\n.news-container {\r\n  width: 60%;\r\n  margin: auto;\r\n  margin-top: 40px;\r\n  background-color: white;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1uZXdzL2VkaXQtbmV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LW5ld3MvZWRpdC1uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IC01MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWVmO1xyXG59XHJcbiAgICBcclxuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbiAgICBcclxuaDEge1xyXG4gIGhlaWdodDogNzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGUzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG4gICAgXHJcbmZvb3RlciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uZXdzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/edit-news/edit-news.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-news/edit-news.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-header [sourceName]=\"title\"></app-header>\n  <div class=\"news-container\">\n    <app-edit-form newsId=\"{{newsId}}\"></app-edit-form>\n  </div>\n</div>\n<footer>Powered by NewsAPI</footer>"

/***/ }),

/***/ "./src/app/edit-news/edit-news.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-news/edit-news.component.ts ***!
  \**************************************************/
/*! exports provided: EditNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsComponent", function() { return EditNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EditNewsComponent = /** @class */ (function () {
    function EditNewsComponent(route) {
        this.route = route;
        this.title = 'Add';
    }
    EditNewsComponent.prototype.ngOnInit = function () {
        this.newsId = this.route.snapshot.params['id'];
        if (this.newsId) {
            this.title = 'Edit';
        }
    };
    EditNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-news',
            template: __webpack_require__(/*! ./edit-news.component.html */ "./src/app/edit-news/edit-news.component.html"),
            styles: [__webpack_require__(/*! ./edit-news.component.css */ "./src/app/edit-news/edit-news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditNewsComponent);
    return EditNewsComponent;
}());



/***/ }),

/***/ "./src/app/full-news/full-news.component.css":
/*!***************************************************!*\
  !*** ./src/app/full-news/full-news.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-block {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  background-color: white;\r\n  padding: 10px;\r\n  margin-top: 20px;\r\n}\r\n  \r\n.image {\r\n  width: 100px;\r\n  align-self: flex-start;\r\n}\r\n  \r\n.text-block {\r\n  width: 400px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: 15px;\r\n}\r\n  \r\n.title {\r\n  display: inline-block;\r\n  margin-top: 0px;\r\n}\r\n  \r\n.date-block {\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  width: 200px;\r\n  margin-bottom: 10px;\r\n}\r\n  \r\n.description {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n  \r\n.link-block {\r\n  color: DodgerBlue;\r\n  flex-grow: 1;\r\n}\r\n  \r\n.read-more {\r\n  color: DodgerBlue;\r\n}\r\n  \r\nbutton {\r\n  width: 70px;\r\n  height: 25px;\r\n  border-radius: 3px;\r\n  border: 1px solid #ddd;\r\n  margin-bottom: 5px;\r\n}\r\n  \r\n.button-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVsbC1uZXdzL2Z1bGwtbmV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZnVsbC1uZXdzL2Z1bGwtbmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3MtYmxvY2sge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuICBcclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG4gIFxyXG4udGV4dC1ibG9jayB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4gIFxyXG4udGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuICBcclxuLmRhdGUtYmxvY2sge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiAgXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmxpbmstYmxvY2sge1xyXG4gIGNvbG9yOiBEb2RnZXJCbHVlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG4gIFxyXG4ucmVhZC1tb3JlIHtcclxuICBjb2xvcjogRG9kZ2VyQmx1ZTtcclxufVxyXG4gIFxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/full-news/full-news.component.html":
/*!****************************************************!*\
  !*** ./src/app/full-news/full-news.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"news-block\">\n  <img class=\"image\" [src]=\"url\">\n  <div class=\"text-block\">\n    <h3 class=\"title\">{{title}}</h3>\n    <div class=\"description-block\">\n      <p class=\"description\">{{description}}</p>\n    </div>\n    <div class=\"date-block\">{{publishedDate | date:'medium'}}</div>\n    <div class=\"date-block\">{{author}}</div>\n  </div>\n  \n  <div *ngIf=\"checkSource()\">\n    <div class=button-group>\n      <button routerLink=\"/edit/{{newsId}}\">Edit</button>\n      <button (click)=\"onDelete()\">Delete</button>\n    </div>\n  </div>\n</div>\n  \n"

/***/ }),

/***/ "./src/app/full-news/full-news.component.ts":
/*!**************************************************!*\
  !*** ./src/app/full-news/full-news.component.ts ***!
  \**************************************************/
/*! exports provided: FullNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullNewsComponent", function() { return FullNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");




var FullNewsComponent = /** @class */ (function () {
    function FullNewsComponent(newsService) {
        this.newsService = newsService;
    }
    FullNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.news = this.newsService.currentNews;
        this.newsService.updatedCurrentNews.subscribe(function (news) {
            _this.news = news;
            _this.title = news && news.title;
            _this.description = news && (news.description || news.text || '');
            _this.author = news && news.author;
            _this.publishedDate = news && (news.date || news.publishedAt);
            _this.url = news && news.urlToImage;
        });
        this.newsService.getNewsWithId(this.newsId);
    };
    FullNewsComponent.prototype.checkSource = function () {
        if (this.sourceName === _const__WEBPACK_IMPORTED_MODULE_3__["localSourceName"]) {
            return true;
        }
        return false;
    };
    FullNewsComponent.prototype.onDelete = function () {
        this.newsService.deleteNews(this.newsId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FullNewsComponent.prototype, "sourceName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FullNewsComponent.prototype, "news", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FullNewsComponent.prototype, "newsId", void 0);
    FullNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-full-news',
            template: __webpack_require__(/*! ./full-news.component.html */ "./src/app/full-news/full-news.component.html"),
            styles: [__webpack_require__(/*! ./full-news.component.css */ "./src/app/full-news/full-news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], FullNewsComponent);
    return FullNewsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  background-color: #000;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-end;\r\n  justify-content: space-between;\r\n  padding: 5px;\r\n}\r\n    \r\nh1 {\r\n  height: 70px;\r\n  background-color: #edede3;\r\n  text-align: center;\r\n  padding-top: 15px;\r\n}\r\n    \r\nbutton {\r\n  width: 60px;\r\n  height: 25px;\r\n  border-radius: 7px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuICAgIFxyXG5oMSB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZTM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <img width=\"30\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n  <button (click)=\"logIn()\">Log in</button>\r\n</header>\r\n<h1>{{sourceName}}</h1>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(newsService) {
        this.newsService = newsService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.updatedSourceName.subscribe(function (sourceName) {
            _this.sourceName = sourceName;
        });
    };
    HeaderComponent.prototype.logIn = function () {
        this.newsService.logIn();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "sourceName", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/keywords-filter.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/keywords-filter.pipe.ts ***!
  \*****************************************/
/*! exports provided: KeywordsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeywordsFilterPipe", function() { return KeywordsFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KeywordsFilterPipe = /** @class */ (function () {
    function KeywordsFilterPipe() {
    }
    KeywordsFilterPipe.prototype.transform = function (value, keywords) {
        //return null;
        console.log("transform value = " + value);
        return value;
    };
    KeywordsFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'keywordsFilter'
        })
    ], KeywordsFilterPipe);
    return KeywordsFilterPipe;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100%;\r\n  width: 100%;\r\n  margin-bottom: -50px;\r\n  padding-bottom: 120px;\r\n  background-color: #f9f9ef;\r\n}\r\n  \r\n.list {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n  \r\nfooter {\r\n  height: 50px;\r\n  padding-top: 15px;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  background: #000;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IC01MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWVmO1xyXG59XHJcbiAgXHJcbi5saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuICBcclxuZm9vdGVyIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-header [sourceName]=\"sourceName\"></app-header>\n  <app-control-panel\n    (filterNews)=\"filterNews($event);\"\n    (updateCount)=\"updateCount($event);\">\n  </app-control-panel>\n  <div class=\"list\">\n    <app-news-list \n      [newsList]=\"currentNews\" \n      [source]=\"sourceName\" \n      [showLoadButton]=\"showLoadButton\"\n      (loadNews)=\"loadNews($event);\">\n    </app-news-list>\n  </div>\n</div>\n<footer>Powered by NewsAPI</footer>\n\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");




var MainComponent = /** @class */ (function () {
    function MainComponent(newsService) {
        this.newsService = newsService;
        this.title = 'newsPortal';
        this.sourceName = _const__WEBPACK_IMPORTED_MODULE_3__["initialSourceName"];
        this.showLoadButton = false;
        this.newsCount = 5;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.updatedNews.subscribe(function (news) {
            _this.news = news;
            _this.currentNews = _this.news.slice(0, _this.newsCount);
        });
        this.newsService.updatedSourceName.subscribe(function (sourceName) {
            _this.sourceName = sourceName;
            if (sourceName === _const__WEBPACK_IMPORTED_MODULE_3__["initialSourceName"]) {
                _this.showLoadButton = false;
            }
            else {
                _this.showLoadButton = true;
            }
        });
    };
    MainComponent.prototype.filterNews = function (keywords) {
        if (this.currentNews) {
            var filteredList = this.currentNews.filter(function (news) {
                return keywords.some(function (keyword) {
                    if (news.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
                        return true;
                    }
                    if (news.description && news.description.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
                        return true;
                    }
                    if (news.text && news.text.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
                        return true;
                    }
                });
            });
            this.currentNews = filteredList;
        }
        if (keywords.length === 0) {
            this.currentNews = this.news.slice(0, this.newsCount);
        }
    };
    MainComponent.prototype.loadNews = function (event) {
        if (this.newsCount >= 5) {
            this.newsCount += 5;
            this.currentNews = this.news.slice(0, this.newsCount);
        }
    };
    MainComponent.prototype.updateCount = function (event) {
        if (this.newsCount !== 5) {
            this.newsCount = 5;
        }
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/mock-news.ts":
/*!******************************!*\
  !*** ./src/app/mock-news.ts ***!
  \******************************/
/*! exports provided: NEWS, LOCAL_NEWS, ADD_NEWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWS", function() { return NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_NEWS", function() { return LOCAL_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEWS", function() { return ADD_NEWS; });
var NEWS = [
    [
        {
            author: "Emily Shapiro",
            content: null,
            description: "Students and the remaining staff members are safe, the officials said.",
            publishedAt: "2019-02-08T18:21:00Z",
            source: { id: "abc-news", name: "ABC News" },
            title: "Staff member shot at Baltimore high school, adult suspect in custody: Officials",
            url: "https://abcnews.go.com/US/staff-member-shot-baltimore-high-school-adult-suspect/story?id=60935243",
            urlToImage: "https://s.abcnews.com/images/US/frederick-douglass-high-school-maryland-google-street-view-ht-jc-190208_hpMain_16x9_992.jpg",
        },
        {
            author: "By GREGORY KATZ Associated Press",
            content: null,
            description: "",
            publishedAt: "2019-02-08T17:58:00Z",
            source: { id: "abc-news", name: "ABC News" },
            title: "From 'Tom Jones' to 'Skyfall': star Albert Finney dies at 82",
            url: "https://abcnews.go.com/Entertainment/wireStory/british-actor-albert-finney-dies-82-60935824",
            urlToImage: "https://s.abcnews.com/images/International/albert-finney-AFP-GettyImages_hpMain_16x9_992.jpg",
        },
        {
            author: "Anne Flaherty",
            content: null,
            description: "More than 200,000 people were arrested trying to cross the U.S.-Mexico border illegally in the past four months, an 85 percent increase from the same period last year.",
            publishedAt: "2019-02-08T17:12:00Z",
            source: { id: "abc-news", name: "ABC News" },
            title: "Border arrests up 85 percent over same period last year: US Customs and Border Protection",
            url: "https://abcnews.go.com/Politics/border-arrests-85-percent-period-year-us-customs/story?id=60939312",
            urlToImage: "https://s.abcnews.com/images/Politics/mexico-border-01-gty-jc-190208_hpMain_16x9_992.jpg",
        },
        {
            author: "Enjoli Francis, Rebecca Jarvis",
            content: null,
            description: "The Amazon CEO revealed the alleged extortion plot in a post on Medium.",
            publishedAt: "2019-02-08T15:37:00Z",
            source: { id: "abc-news", name: "ABC News" },
            title: "National Enquirer's parent company says it will investigate allegations of extortion made by Amazon CEO Jeff Bezos",
            url: "https://abcnews.go.com/Business/amazon-ceo-jeff-bezos-accuses-national-enquirer-ami/story?id=60924072",
            urlToImage: "https://s.abcnews.com/images/US/jeff-bezos-gty-jt-180520_hpMain_16x9_992.jpg",
        },
        {
            author: "Conor Finnegan, Josh Margolin",
            content: null,
            description: "Congress says the White House missed a deadline to answer whether Saudi Crown Prince Mohammed bin Salman was involved in journalist Jamal Khashoggi's death.",
            publishedAt: "2019-02-08T15:26:00Z",
            source: { id: "abc-news", name: "ABC News" },
            title: "Congress turns up heat on White House for answers on journalist Jamal Khashoggi killing and Saudi crown prince's role",
            url: "https://abcnews.go.com/Politics/congress-turns-heat-white-house-answers-khashoggi-killing/story?id=60935604",
            urlToImage: "https://s.abcnews.com/images/International/jamal-khashoggi-ap-ps-190208_hpMain_16x9_992.jpg",
        }
    ],
    [
        {
            author: "Carl Smith",
            content: "As the sun rises over Bell's Beach, the researchers put on their hard hats, pick up backpacks full of excavation equipment, and begin their descent to the cliffs",
            description: "During big storms and low tides, ancient whale fossils fall from the cliffs along Victoria's Surf Coast — researchers say they hold clues to how the largest living creature came to be.",
            publishedAt: "2019-02-08T19:23:03Z",
            source: { id: "abc-news-au", name: "ABC News (AU)" },
            title: "Surfers and scientists extract whale bones that could hold keys to an ancient mystery",
            url: "http://www.abc.net.au/news/science/2019-02-09/ancient-whale-fossils-on-victorias-surf-coast-bells-beach/10693490",
            urlToImage: "https://www.abc.net.au/cm/rimage/10693502-16x9-large.jpg?v=2",
        },
        {
            author: "https://www.abc.net.au/news/hannah--reich/9151774",
            content: "Hollywood sound mixer Gregg Rudloff a long-time Clint Eastwood collaborator and Academy-award-winner for films including The Matrix (2000) and Mad Max: Fury Road (2016) died age 63. His death has since be… [+8881 chars]",
            description: "The suspected suicide of a Hollywood sound mixer has led local practitioners to speak out about the industry's shocking working conditions.",
            publishedAt: "2019-02-08T19:12:13Z",
            source: { id: "abc-news-au", name: "ABC News (AU)" },
            title: "100-hour weeks, living 'hand to mouth': Australian sound designers and composers are in crisis",
            url: "http://www.abc.net.au/news/2019-02-09/australian-theatre-sound-designers-composers-conditions/10789874",
            urlToImage: "https://www.abc.net.au/news/image/10790018-16x9-700x394.jpg",
        },
    ],
    [
        {
            author: "",
            content: "smp-stories-top-widget Det er ikke sånn at alle gjør dette, men det har vært prester og biskoper som har, Frans til reporterne, melde… [+746 chars]",
            description: "Pave Frans innrømmer at prester og biskoper har misbrukt nonner seksuelt. Noen har og brukt dem som sexslaver. Paven lover å bekjempe problemet.",
            publishedAt: "2019-02-06T10:53:03.8440539Z",
            source: { id: "aftenposten", name: "Aftenposten" },
            title: "Paven innrømmer at nonner ble brukt som sexslaver",
            url: "https://www.aftenposten.no/verden/i/7l8LO8/Paven-innrommer-at-nonner-ble-brukt-som-sexslaver",
            urlToImage: "https://ap.mnocdn.no/images/9e4d1d51-ee27-4174-a2ce-eea08eea3ae4?fit=crop&q=80&w=1440",
        },
        {
            author: "",
            content: "smp-stories-top-widget Onsdag morgen oppsto det store problemer i pendlertrafikken rundt Oslo. Med flere havarerte tog, signalfeil og bruk av ett spor i stedet for to flere steder på… [+2624 chars]",
            description: "Onsdag morgen var 55 av 110 tog som var ute på norske spor i rute. Dagen før ble en lang rekke tog stående innestengt på et parkeringsanlegg ved Drammen.",
            publishedAt: "2019-02-06T10:27:09Z",
            source: { id: "aftenposten", name: "Aftenposten" },
            title: "Halvparten av togene i rute – her er tre triste jernbanenyheter",
            url: "https://www.aftenposten.no/norge/i/zLpXKO/Derfor-er-jernbanen-rundt-Oslo-igjen-i-trobbel",
            urlToImage: "https://ap.mnocdn.no/images/8e88d713-911e-4a0b-a926-6d6357294f4a?fit=crop&q=80&w=1440",
        },
    ],
    [
        {
            author: "Al Jazeera",
            content: "A Canadian man who gunned down six members of a Quebec City mosque in 2017 was sentenced to life in prison on Friday, but he could be eligible for parole after serving 35 yearsxandre Bissonnette, 29, pleaded guilty last year to six counts of first-degre… [+359 chars]",
            description: "Alexandre Bissonnette sentenced to life for the 2017 shooting, but may be eligible for parole after serving 35 years.",
            publishedAt: "2019-02-08T19:14:00Z",
            source: { id: "al-jazeera-english", name: "Al Jazeera English" },
            title: "Canadian man gets life for killing 6 in Quebec mosque shooting",
            url: "http://www.aljazeera.com/news/2019/02/canadian-man-life-killing-6-quebec-mosque-shooting-190208191042253.html",
            urlToImage: "https://www.aljazeera.com/mritems/Images/2015/11/19/dafe960a95f143e0887a3d704bd7b675_18.jpg",
        },
        {
            author: null,
            content: null,
            description: null,
            publishedAt: "2019-02-08T19:07:05.9611501Z",
            source: { id: "al-jazeera-english", name: "Al Jazeera English" },
            title: "Can the international community solve Venezuela's crisis?",
            url: "http://www.aljazeera.com/programmes/insidestory/2019/02/international-community-solve-venezuela-crisis-190208180029890.html",
            urlToImage: null,
        },
    ],
    [
        {
            author: "ANSA.it",
            content: "(ANSA) - CARACAS, 8 FEB - Il Tribunale Supremo di Giustizia",
            description: "Il Tribunale Supremo di Giustizia (Tsj) venezuelano, organo giudiziario fedele al presidente Nicolas Maduro, ha dichiarato oggi che il presidente dell'Assemblea Nazionale, Juan Guaidò, ha commesso una usurpazione",
            publishedAt: "2019-02-08T19:37:00Z",
            source: { id: "ansa", name: "ANSA.it" },
            title: "Corte suprema, Guaidò è 'usurpatore' - Ultima Ora",
            url: "http://www.ansa.it/sito/notizie/topnews/2019/02/08/corte-suprema-guaido-e-usurpatore_2902baa4-9932-41c5-9a96-9e3c6e255ce5.html",
            urlToImage: "http://www.ansa.it/webimages/img_700/2019/2/8/bb63d30130cbc5da9670adc471abdc27.jpg",
        },
        {
            author: "ANSA.it",
            content: null,
            description: "In Spagna almeno una persona è morta e altre otto sono rimaste ferite nello scontro fra due treni",
            source: { id: "ansa", name: "ANSA.it" },
            publishedAt: "2019-02-08T19:17:00Z",
            title: "Scontro fra treni in Catalogna, 1 morto - Ultima Ora",
            url: "http://www.ansa.it/sito/notizie/topnews/2019/02/08/scontro-fra-treni-in-catalogna-1-morto_96f18d1d-ffe5-488b-b1b5-3a0478ebb680.html",
            urlToImage: "http://www.ansa.it/webimages/img_700/2018/11/20/e040ee61d789d2fd6d0269e15b29f630.jpg",
        },
        {
            author: "ANSA.it",
            content: "(ANSA) - BERLINO, 8 FEB - Lunedì il film esce in Francia",
            description: "Lunedì il film esce in Francia, chissà se Barbarin sarà in sala",
            publishedAt: "2019-02-08T19:17:00Z",
            source: { id: "ansa", name: "ANSA.it" },
            title: "Ozon, lo scandalo dei preti pedofili - Ultima Ora",
            url: "http://www.ansa.it/sito/notizie/topnews/2019/02/08/ozon-lo-scandalo-dei-preti-pedofili_4d414e73-3b3b-4939-a475-3b4bed340fc0.html",
            urlToImage: "http://www.ansa.it/webimages/img_700/2019/2/8/901cabe282b2e70aaf32894b570294e9.jpg",
        }
    ]
];
var LOCAL_NEWS = [
    {
        author: "Me",
        source: { id: "local", name: "Local News" },
        title: "Staff member shot at Baltimore high school, adult suspect in custody: Officials",
        url: "https://abcnews.go.com/US/staff-member-shot-baltimore-high-school-adult-suspect/story?id=60935243",
        urlToImage: "https://s.abcnews.com/images/US/frederick-douglass-high-school-maryland-google-street-view-ht-jc-190208_hpMain_16x9_992.jpg",
    },
];
var ADD_NEWS = [
    {
        author: "Emily Shapiro",
        content: null,
        description: "Students and the remaining staff members are safe, the officials said.",
        publishedAt: "2019-02-08T18:21:00Z",
        source: { id: "abc-news", name: "ABC News" },
        title: "Staff member shot at Baltimore high school, adult suspect in custody: Officials",
        url: "https://abcnews.go.com/US/staff-member-shot-baltimore-high-school-adult-suspect/story?id=60935243",
        urlToImage: "https://s.abcnews.com/images/US/frederick-douglass-high-school-maryland-google-street-view-ht-jc-190208_hpMain_16x9_992.jpg",
    }
];


/***/ }),

/***/ "./src/app/news-details/news-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/news-details/news-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100%;\r\n    width: 100%;\r\n    margin-bottom: -50px;\r\n    padding-bottom: 120px;\r\n    background-color: #f9f9ef;\r\n  }\r\n    \r\n  .news-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n    \r\n  header {\r\n    background-color: #000;\r\n  }\r\n    \r\n  h1 {\r\n    height: 70px;\r\n    background-color: #edede3;\r\n    text-align: center;\r\n    padding-top: 15px;\r\n  }\r\n    \r\n  footer {\r\n    height: 50px;\r\n    padding-top: 15px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    background: #000;\r\n    color: white;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1kZXRhaWxzL25ld3MtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL25ld3MtZGV0YWlscy9uZXdzLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjllZjtcclxuICB9XHJcbiAgICBcclxuICAubmV3cy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAgIFxyXG4gIGhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICAgIFxyXG4gIGgxIHtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZTM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcbiAgICBcclxuICBmb290ZXIge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/news-details/news-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/news-details/news-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <app-header [sourceName]=\"sourceName\"></app-header>\n  <div class=\"news-container\">\n    <app-full-news [newsId]=\"newsId\" [sourceName]=\"sourceName\"></app-full-news>\n  </div>\n</div>\n<footer>Powered by NewsAPI</footer>\n"

/***/ }),

/***/ "./src/app/news-details/news-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/news-details/news-details.component.ts ***!
  \********************************************************/
/*! exports provided: NewsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailsComponent", function() { return NewsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");




var NewsDetailsComponent = /** @class */ (function () {
    function NewsDetailsComponent(route, newsService) {
        this.route = route;
        this.newsService = newsService;
    }
    NewsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsId = this.route.snapshot.params['id'];
        this.newsService.updatedSourceName.subscribe(function (sourceName) {
            _this.sourceName = sourceName;
        });
        this.sourceName = this.newsService.sourceName;
    };
    NewsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-details',
            template: __webpack_require__(/*! ./news-details.component.html */ "./src/app/news-details/news-details.component.html"),
            styles: [__webpack_require__(/*! ./news-details.component.css */ "./src/app/news-details/news-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"]])
    ], NewsDetailsComponent);
    return NewsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/news-list/news-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/news-list/news-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-container {\r\n  width: 60%;\r\n  padding-top: 20px; \r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nbutton {\r\n  width: 70%;\r\n  height: 40px;\r\n  margin-top: 20px;\r\n  border: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1saXN0L25ld3MtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9uZXdzLWxpc3QvbmV3cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3cy1jb250YWluZXIge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7IFxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/news-list/news-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/news-list/news-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngFor=\"let item of newsList; let ind = index\" class='news-container'>\n    <app-news [news]=\"item\" [source]=\"source\" [index]=\"ind\"></app-news>\n  </div>\n  <button *ngIf=\"showLoadButton\" (click)=\"onLoadClick()\">Load More</button>\n</div>\n"

/***/ }),

/***/ "./src/app/news-list/news-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/news-list/news-list.component.ts ***!
  \**************************************************/
/*! exports provided: NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return NewsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-news */ "./src/app/mock-news.ts");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");




var NewsListComponent = /** @class */ (function () {
    function NewsListComponent(newsService) {
        this.newsService = newsService;
        this.newsList = _mock_news__WEBPACK_IMPORTED_MODULE_2__["NEWS"][0];
        this.loadNews = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showList = true;
    }
    NewsListComponent.prototype.ngOnInit = function () { };
    NewsListComponent.prototype.onLoadClick = function () {
        this.loadNews.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NewsListComponent.prototype, "newsList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewsListComponent.prototype, "source", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NewsListComponent.prototype, "showLoadButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewsListComponent.prototype, "loadNews", void 0);
    NewsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-list',
            template: __webpack_require__(/*! ./news-list.component.html */ "./src/app/news-list/news-list.component.html"),
            styles: [__webpack_require__(/*! ./news-list.component.css */ "./src/app/news-list/news-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"]])
    ], NewsListComponent);
    return NewsListComponent;
}());



/***/ }),

/***/ "./src/app/news.service.ts":
/*!*********************************!*\
  !*** ./src/app/news.service.ts ***!
  \*********************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const */ "./src/app/const.ts");




var NewsService = /** @class */ (function () {
    function NewsService(apiService) {
        this.apiService = apiService;
        this.updatedSources = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updatedNews = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updatedSourceName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updatedCurrentNews = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.articles = [];
        this.previousNews = [];
        this.sourceName = _const__WEBPACK_IMPORTED_MODULE_3__["initialSourceName"];
    }
    NewsService.prototype.getSources = function () {
        var _this = this;
        this.apiService.getSources().subscribe(function (sources) {
            _this.sources = sources;
            _this.updatedSources.emit(sources);
        }, function (error) { return console.log(error); });
    };
    NewsService.prototype.getNews = function () {
        var _this = this;
        var sourceId = this.sources[this.selectedSource].id;
        var sourceName = this.sources[this.selectedSource].name;
        this.apiService.getNews(sourceId).subscribe(function (articles) {
            _this.articles = articles;
            _this.updatedNews.emit(articles);
            _this.sourceName = sourceName;
            _this.updatedSourceName.emit(sourceName);
        });
    };
    NewsService.prototype.getLocalNews = function () {
        var _this = this;
        this.apiService.getLocalNews().subscribe(function (articles) {
            _this.articles = articles;
            _this.updatedNews.emit(articles);
            _this.sourceName = _const__WEBPACK_IMPORTED_MODULE_3__["localSourceName"];
            _this.updatedSourceName.emit(_const__WEBPACK_IMPORTED_MODULE_3__["localSourceName"]);
        });
    };
    NewsService.prototype.onCheckMyNews = function (checked) {
        if (checked) {
            this.previousNews = this.articles;
            this.previousSourceName = this.sourceName;
            this.getLocalNews();
        }
        else {
            if (this.selectedSource >= 0) {
                this.articles = this.previousNews;
                this.sourceName = this.previousSourceName;
                this.updatedSourceName.emit(this.previousSourceName);
            }
            else {
                this.articles = [];
                this.sourceName = _const__WEBPACK_IMPORTED_MODULE_3__["initialSourceName"];
                this.updatedSourceName.emit(_const__WEBPACK_IMPORTED_MODULE_3__["initialSourceName"]);
            }
            this.updatedNews.emit(this.articles);
        }
    };
    NewsService.prototype.onLoadNews = function () {
        var _this = this;
        var sourceId = this.sources[this.selectedSource].id;
        this.apiService.onLoadNews(sourceId).subscribe(function (articles) {
            _this.articles = articles;
            _this.updatedNews.emit(articles);
        });
    };
    NewsService.prototype.getNewsWithId = function (id) {
        var _this = this;
        if (this.sourceName === _const__WEBPACK_IMPORTED_MODULE_3__["localSourceName"]) {
            this.apiService.getNewsWithId(id).subscribe(function (news) {
                _this.currentNews = news;
                _this.updatedCurrentNews.emit(_this.currentNews);
            });
        }
        else {
            this.currentNews = this.articles[id];
            this.updatedCurrentNews.emit(this.currentNews);
        }
    };
    NewsService.prototype.updateNews = function (news) {
        this.apiService.updateNews(news).subscribe(function () {
            console.log('update news');
        });
    };
    NewsService.prototype.addNews = function (news) {
        this.apiService.addNews(news).subscribe(function () {
            console.log('add news');
        });
    };
    NewsService.prototype.deleteNews = function (id) {
        var _this = this;
        this.apiService.deleteNews(id).subscribe(function (res) {
            console.log('delete news');
            _this.getLocalNews();
        });
    };
    NewsService.prototype.logIn = function () {
        this.apiService.logIn().subscribe(function (res) {
            console.log('log in');
            console.log(res);
        });
    };
    NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-block {\r\n  width: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n  background-color: white;\r\n\tpadding: 10px;\r\n}\r\n\r\n.image {\r\n\twidth: 100px;\r\n\talign-self: flex-start;\r\n}\r\n\r\n.text-block {\r\n  width: 50%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-left: 15px;\r\n}\r\n\r\n.title {\r\n\tdisplay: inline-block;\r\n\tmargin-top: 0px;\r\n}\r\n\r\n.date-block {\r\n\tfont-size: 12px;\r\n\tfont-weight: 700;\r\n\twidth: 200px;\r\n}\r\n\r\n.description {\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n\twhite-space: nowrap;\r\n  overflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n}\r\n\r\n.link-block {\r\n\tcolor: DodgerBlue;\r\n\tflex-grow: 1;\r\n}\r\n\r\n.read-more {\r\n  color: DodgerBlue;\r\n}\r\n\r\n.button-group {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\nbutton {\r\n\twidth: 70px;\r\n  height: 25px;\r\n  border-radius: 3px;\r\n  border: 1px solid #ddd;\r\n\tmargin-bottom: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtFQUNsQix1QkFBdUI7Q0FDeEIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHNCQUFzQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7Q0FDWCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLG1CQUFtQjtFQUNsQixnQkFBZ0I7Q0FDakIsdUJBQXVCO0FBQ3hCOztBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxXQUFXO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7Q0FDdkIsa0JBQWtCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3cy1ibG9jayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi50ZXh0LWJsb2NrIHtcclxuICB3aWR0aDogNTAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4uZGF0ZS1ibG9jayB7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5saW5rLWJsb2NrIHtcclxuXHRjb2xvcjogRG9kZ2VyQmx1ZTtcclxuXHRmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5yZWFkLW1vcmUge1xyXG4gIGNvbG9yOiBEb2RnZXJCbHVlO1xyXG59XHJcblxyXG4uYnV0dG9uLWdyb3VwIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcblx0d2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"news-block\">\n  <img class=\"image\" [src]=\"news.urlToImage\">\n  <div class=\"text-block\" routerLink=\"news/{{id}}\">\n    <h3 class=\"title\">{{news.title}}</h3>\n    <div class=\"description-block\">\n      <p class=\"description\">{{news.description || news.text}}</p>\n    </div>\n    <div class=\"link-block\">\n      <a [href]=\"news.url\" target=\"_blank\" class=\"read-more\">read more</a>\n    </div>\n  </div>\n  <div class=\"date-block\">{{news.publishedAt || news.date | date:'medium'}}\n  </div>\n  <div *ngIf=\"checkSource()\">\n    <div class=button-group>\n      <button routerLink=\"edit/{{id}}\" (click)=\"editNews()\">Edit</button>\n      <button (click)=\"deleteNews()\">Delete</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news.service */ "./src/app/news.service.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");




var NewsComponent = /** @class */ (function () {
    function NewsComponent(newsService) {
        this.newsService = newsService;
    }
    NewsComponent.prototype.ngOnInit = function () {
        if (this.news._id) {
            this.id = this.news._id;
        }
        else {
            this.id = this.index;
        }
        this.publishedDate = this.news.publishedAt || this.news.date;
    };
    NewsComponent.prototype.checkSource = function () {
        if (this.source === _const__WEBPACK_IMPORTED_MODULE_3__["localSourceName"]) {
            return true;
        }
        return false;
    };
    NewsComponent.prototype.editNews = function () {
        this.newsService.getNewsWithId(this.id);
    };
    NewsComponent.prototype.deleteNews = function () {
        this.newsService.deleteNews(this.id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewsComponent.prototype, "news", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewsComponent.prototype, "source", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NewsComponent.prototype, "index", void 0);
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: apiKey, newsapiUrl, localNewsUrl, loginUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiKey", function() { return apiKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsapiUrl", function() { return newsapiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localNewsUrl", function() { return localNewsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUrl", function() { return loginUrl; });
const apiKey = 'def8c00e27dc488bb68c4b0906b84c44';
const newsapiUrl = 'https://newsapi.org/v2';
//export const localNewsUrl = 'http://localhost:3000/news';
const localNewsUrl = 'https://epam-education.herokuapp.com/news';
//export const loginUrl = 'http://localhost:3000/login';
const loginUrl = 'https://epam-education.herokuapp.com/news';


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\js\frontcamp\angular\newsportal2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map