(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aaron/WebstormProjects/BITE/zonghe-web/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngstack/translate */ "UdNJ");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "RhbM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");








const ORIGINAL_CP = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
];
const OUTTER_CP = [
    _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
    _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_3__["AngularFullpageModule"]
];
const CPS = [];
class SharedModule {
}
SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: SharedModule });
SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            ...ORIGINAL_CP,
            ...OUTTER_CP,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild()
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_3__["AngularFullpageModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_3__["AngularFullpageModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_3__["AngularFullpageModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    ...CPS,
                ],
                imports: [
                    ...ORIGINAL_CP,
                    ...OUTTER_CP,
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                    _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild()
                ],
                exports: [
                    ...ORIGINAL_CP,
                    ...OUTTER_CP,
                    ...CPS,
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngstack_translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngstack/translate */ "UdNJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.title = 'zonghe-web';
    }
    ngOnInit() {
        this.translate.activeLang = 'zh';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngstack_translate__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: '<router-outlet></router-outlet>',
            }]
    }], function () { return [{ type: _ngstack_translate__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "XwE0":
/*!*****************************************************!*\
  !*** ./src/app/servives/local-storage.namespace.ts ***!
  \*****************************************************/
/*! exports provided: GLOBAL_NAMESPACE, APP_INFO_NAMESPACE, INIT_FLAG, START_USING_DATE, VERSION, USER_INFO_NAMESPACE, USERNAME, AVATAR_URL, LANG, ACCESSTOKEN, SUMMARY_NAMESPACE, LAST_SUMMARY_DATE, SUMMARIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_NAMESPACE", function() { return GLOBAL_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_INFO_NAMESPACE", function() { return APP_INFO_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_FLAG", function() { return INIT_FLAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_USING_DATE", function() { return START_USING_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INFO_NAMESPACE", function() { return USER_INFO_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERNAME", function() { return USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVATAR_URL", function() { return AVATAR_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG", function() { return LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESSTOKEN", function() { return ACCESSTOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUMMARY_NAMESPACE", function() { return SUMMARY_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_SUMMARY_DATE", function() { return LAST_SUMMARY_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUMMARIES", function() { return SUMMARIES; });
const GLOBAL_NAMESPACE = 'bite.';
const APP_INFO_NAMESPACE = GLOBAL_NAMESPACE + 'appInfo.';
const INIT_FLAG = APP_INFO_NAMESPACE + 'initFlag';
const START_USING_DATE = APP_INFO_NAMESPACE + 'startUsingDate';
const VERSION = APP_INFO_NAMESPACE + 'version';
const USER_INFO_NAMESPACE = GLOBAL_NAMESPACE + 'userInfo.';
const USERNAME = USER_INFO_NAMESPACE + 'username';
const AVATAR_URL = USER_INFO_NAMESPACE + 'avatarUrl';
const LANG = USER_INFO_NAMESPACE + 'lang';
const ACCESSTOKEN = USER_INFO_NAMESPACE + 'accessToken';
const SUMMARY_NAMESPACE = GLOBAL_NAMESPACE + 'summary.';
const LAST_SUMMARY_DATE = SUMMARY_NAMESPACE + 'lastSummaryDate';
const SUMMARIES = SUMMARY_NAMESPACE + 'summaries';


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: setupTranslateService, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTranslateService", function() { return setupTranslateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ngstack_translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngstack/translate */ "UdNJ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _class_hammer_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./class/hammer.config */ "rRan");













// needed to load translation before application starts
function setupTranslateService(service) {
    return () => service.load();
}
const matProviders = [
    {
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
        useValue: {
            appearance: 'outline',
            floatLabel: 'auto'
        }
    },
];
class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        // needed to load translation before application starts
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: setupTranslateService,
            deps: [_ngstack_translate__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]],
            multi: true
        },
        ...matProviders,
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
            useClass: _class_hammer_config__WEBPACK_IMPORTED_MODULE_9__["HammerConfig"]
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ngstack_translate__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                // options
                disableCache: true,
            }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngstack_translate__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _ngstack_translate__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                        // options
                        disableCache: true,
                    }),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]
                ],
                providers: [
                    // needed to load translation before application starts
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                        useFactory: setupTranslateService,
                        deps: [_ngstack_translate__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]],
                        multi: true
                    },
                    ...matProviders,
                    {
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
                        useClass: _class_hammer_config__WEBPACK_IMPORTED_MODULE_9__["HammerConfig"]
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ciyc":
/*!********************************************!*\
  !*** ./src/app/servives/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class CommonService {
    constructor() {
        this.langObserver = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.biteLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    langPublish() {
        this.langObserver.next();
    }
}
CommonService.??fac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: CommonService, factory: CommonService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "n9yw":
/*!**********************************************!*\
  !*** ./src/app/servives/language.service.ts ***!
  \**********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _local_storage_namespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.namespace */ "XwE0");
/* harmony import */ var _class_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class/language */ "wkNl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-storage.service */ "r+iO");
/* harmony import */ var _ngstack_translate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngstack/translate */ "UdNJ");


/** ??? */






class LanguageService {
    constructor(route, store, translate) {
        this.route = route;
        this.store = store;
        this.translate = translate;
    }
    getLang(urlLang, storeLang) {
        const store = _class_language__WEBPACK_IMPORTED_MODULE_3__["Locale"][storeLang.toUpperCase()];
        switch (urlLang) {
            case _class_language__WEBPACK_IMPORTED_MODULE_3__["Locale"].ZH:
            case _class_language__WEBPACK_IMPORTED_MODULE_3__["Locale"].EN:
                const url = _class_language__WEBPACK_IMPORTED_MODULE_3__["Locale"][urlLang.toUpperCase()];
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(url);
            default:
                switch (store) {
                    case _class_language__WEBPACK_IMPORTED_MODULE_3__["Locale"].ZH:
                    case _class_language__WEBPACK_IMPORTED_MODULE_3__["Locale"].EN:
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(store);
                    default:
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_class_language__WEBPACK_IMPORTED_MODULE_3__["Locale"].ZH);
                }
        }
    }
    /** ??????????????? */
    initLang(urlLang, storeLang) {
        this.getLang(urlLang, storeLang)
            .subscribe(locale => {
            if (locale) {
                this.translate.activeLang = locale;
                this.store.set(_local_storage_namespace__WEBPACK_IMPORTED_MODULE_2__["LANG"], locale);
            }
            else {
                console.error('what have you done?!');
            }
        });
    }
    /**
     * ??????????????????
     * @param locale ??????????????? ZH???EN?????????????????????'this language is not allowed'
     */
    switchLang(locale) {
        switch (locale) {
            case _class_language__WEBPACK_IMPORTED_MODULE_3__["Locale"].ZH:
            case _class_language__WEBPACK_IMPORTED_MODULE_3__["Locale"].EN:
                this.translate.activeLang = locale;
                this.store.set(_local_storage_namespace__WEBPACK_IMPORTED_MODULE_2__["LANG"], locale);
                break;
            default:
                console.error('this language is not allowed');
        }
    }
}
LanguageService.??fac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ngstack_translate__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
LanguageService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: LanguageService, factory: LanguageService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LanguageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }, { type: _ngstack_translate__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "r+iO":
/*!***************************************************!*\
  !*** ./src/app/servives/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const ls = localStorage;
class LocalStorageService {
    constructor() { }
    get(key) {
        return JSON.parse(ls.getItem(key));
    }
    getList(key) {
        const before = ls.getItem(key);
        return before ? JSON.parse(before) : [];
    }
    set(key, value) {
        if (!value && value === undefined) {
            return;
        }
        const arr = JSON.stringify(value);
        ls.setItem(key, arr);
    }
}
LocalStorageService.??fac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rRan":
/*!****************************************!*\
  !*** ./src/app/class/hammer.config.ts ***!
  \****************************************/
/*! exports provided: HammerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HammerConfig", function() { return HammerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _squadette_hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @squadette/hammerjs */ "mgpI");
/* harmony import */ var _squadette_hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_squadette_hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




class HammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            swipe: { direction: _squadette_hammerjs__WEBPACK_IMPORTED_MODULE_1__["DIRECTION_ALL"] },
            pinch: { enable: false },
            rotate: { enable: false }
        };
    }
}
HammerConfig.??fac = function HammerConfig_Factory(t) { return ??HammerConfig_BaseFactory(t || HammerConfig); };
HammerConfig.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: HammerConfig, factory: HammerConfig.??fac, providedIn: 'root' });
const ??HammerConfig_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](HammerConfig);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HammerConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "rkve":
/*!********************************************!*\
  !*** ./src/app/servives/language.guard.ts ***!
  \********************************************/
/*! exports provided: LanguageGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageGuard", function() { return LanguageGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _local_storage_namespace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.namespace */ "XwE0");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.service */ "n9yw");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.service */ "r+iO");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common.service */ "ciyc");

// import {Local} from 'protractor/built/driverProviders';






class LanguageGuard {
    constructor(language, store, http, common) {
        this.language = language;
        this.store = store;
        this.http = http;
        this.common = common;
    }
    canActivate(next, state) {
        // this.language.initLang();
        const url = next.queryParams.l ? next.queryParams.l : '';
        // console.log('language guard: ', url, store);
        const store = this.store.get(_local_storage_namespace__WEBPACK_IMPORTED_MODULE_1__["LANG"]) ? this.store.get(_local_storage_namespace__WEBPACK_IMPORTED_MODULE_1__["LANG"]) : '';
        this.language.initLang(url, store);
        return true;
    }
}
LanguageGuard.??fac = function LanguageGuard_Factory(t) { return new (t || LanguageGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"])); };
LanguageGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: LanguageGuard, factory: LanguageGuard.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LanguageGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"] }, { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servives_language_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servives/language.guard */ "rkve");





const routes = [
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | pages-main-main-module */ "pages-main-main-module").then(__webpack_require__.bind(null, /*! ./pages/main/main.module */ "82nU")).then(m => m.MainModule), canActivate: [_servives_language_guard__WEBPACK_IMPORTED_MODULE_2__["LanguageGuard"]] },
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        initialNavigation: 'enabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wkNl":
/*!***********************************!*\
  !*** ./src/app/class/language.ts ***!
  \***********************************/
/*! exports provided: Locale, Lang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locale", function() { return Locale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lang", function() { return Lang; });
/** ??????????????? */
var Locale;
(function (Locale) {
    Locale["EN"] = "en";
    Locale["ZH"] = "zh";
})(Locale || (Locale = {}));
/** ?????????????????? */
class Lang {
    constructor(name, locale) {
        this.name = name;
        this.locale = locale;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _squadette_hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @squadette/hammerjs */ "mgpI");
/* harmony import */ var _squadette_hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_squadette_hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var dhtmlx_scheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dhtmlx-scheduler */ "T7+c");
/* harmony import */ var dhtmlx_scheduler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dhtmlx_scheduler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map