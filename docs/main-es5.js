(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/
    /*! no static exports found */
    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__( /*! /Users/aaron/WebstormProjects/BITE/zonghe-web/src/main.ts */"zUnb");

      /***/
    },

    /***/"AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/
    /*! exports provided: environment */
    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
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

      /***/
    },

    /***/"PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/
    /*! exports provided: SharedModule */
    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"fXoL");
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */"ofXK");
      /* harmony import */
      var _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ngstack/translate */"UdNJ");
      /* harmony import */
      var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @fullpage/angular-fullpage */"RhbM");
      /* harmony import */
      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/material/sidenav */"XhcP");
      /* harmony import */
      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/material/tooltip */"Qu3c");
      var ORIGINAL_CP = [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
      var OUTTER_CP = [_ngstack_translate__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_3__["AngularFullpageModule"]];
      var CPS = [];
      var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });
      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[].concat(ORIGINAL_CP, OUTTER_CP, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild()]), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_3__["AngularFullpageModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"]]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_3__["AngularFullpageModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_3__["AngularFullpageModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"]]
        });
      })();
      /*@__PURE__*/
      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [].concat(CPS),
            imports: [].concat(ORIGINAL_CP, OUTTER_CP, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _ngstack_translate__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild()]),
            exports: [].concat(ORIGINAL_CP, OUTTER_CP, CPS, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"]])
          }]
        }], null, null);
      })();

      /***/
    },

    /***/"Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/
    /*! exports provided: AppComponent */
    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"fXoL");
      /* harmony import */
      var _ngstack_translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @ngstack/translate */"UdNJ");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"tyNb");
      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(translate) {
          _classCallCheck(this, AppComponent);
          this.translate = translate;
          this.title = 'zonghe-web';
        }
        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.translate.activeLang = 'zh';
          }
        }]);
        return AppComponent;
      }();
      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngstack_translate__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };
      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/
      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
          }]
        }], function () {
          return [{
            type: _ngstack_translate__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
          }];
        }, null);
      })();

      /***/
    },

    /***/"XwE0":
    /*!*****************************************************!*\
      !*** ./src/app/servives/local-storage.namespace.ts ***!
      \*****************************************************/
    /*! exports provided: GLOBAL_NAMESPACE, APP_INFO_NAMESPACE, INIT_FLAG, START_USING_DATE, VERSION, USER_INFO_NAMESPACE, USERNAME, AVATAR_URL, LANG, ACCESSTOKEN, SUMMARY_NAMESPACE, LAST_SUMMARY_DATE, SUMMARIES */
    /***/
    function XwE0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "GLOBAL_NAMESPACE", function () {
        return GLOBAL_NAMESPACE;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "APP_INFO_NAMESPACE", function () {
        return APP_INFO_NAMESPACE;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "INIT_FLAG", function () {
        return INIT_FLAG;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "START_USING_DATE", function () {
        return START_USING_DATE;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "USER_INFO_NAMESPACE", function () {
        return USER_INFO_NAMESPACE;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "USERNAME", function () {
        return USERNAME;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "AVATAR_URL", function () {
        return AVATAR_URL;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "LANG", function () {
        return LANG;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "ACCESSTOKEN", function () {
        return ACCESSTOKEN;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "SUMMARY_NAMESPACE", function () {
        return SUMMARY_NAMESPACE;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "LAST_SUMMARY_DATE", function () {
        return LAST_SUMMARY_DATE;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "SUMMARIES", function () {
        return SUMMARIES;
      });
      var GLOBAL_NAMESPACE = 'bite.';
      var APP_INFO_NAMESPACE = GLOBAL_NAMESPACE + 'appInfo.';
      var INIT_FLAG = APP_INFO_NAMESPACE + 'initFlag';
      var START_USING_DATE = APP_INFO_NAMESPACE + 'startUsingDate';
      var VERSION = APP_INFO_NAMESPACE + 'version';
      var USER_INFO_NAMESPACE = GLOBAL_NAMESPACE + 'userInfo.';
      var USERNAME = USER_INFO_NAMESPACE + 'username';
      var AVATAR_URL = USER_INFO_NAMESPACE + 'avatarUrl';
      var LANG = USER_INFO_NAMESPACE + 'lang';
      var ACCESSTOKEN = USER_INFO_NAMESPACE + 'accessToken';
      var SUMMARY_NAMESPACE = GLOBAL_NAMESPACE + 'summary.';
      var LAST_SUMMARY_DATE = SUMMARY_NAMESPACE + 'lastSummaryDate';
      var SUMMARIES = SUMMARY_NAMESPACE + 'summaries';

      /***/
    },

    /***/"ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/
    /*! exports provided: setupTranslateService, AppModule */
    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "setupTranslateService", function () {
        return setupTranslateService;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */
      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/platform-browser */"jhN1");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"fXoL");
      /* harmony import */
      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app-routing.module */"vY5A");
      /* harmony import */
      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app.component */"Sy1n");
      /* harmony import */
      var _ngstack_translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ngstack/translate */"UdNJ");
      /* harmony import */
      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common/http */"tk/3");
      /* harmony import */
      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./shared/shared.module */"PCNd");
      /* harmony import */
      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/platform-browser/animations */"R1ws");
      /* harmony import */
      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/material/form-field */"kmnG");
      /* harmony import */
      var _class_hammer_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./class/hammer.config */"rRan");

      // needed to load translation before application starts
      function setupTranslateService(service) {
        return function () {
          return service.load();
        };
      }
      var matProviders = [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
        useValue: {
          appearance: 'outline',
          floatLabel: 'auto'
        }
      }];
      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });
      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [
        // needed to load translation before application starts
        {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
          useFactory: setupTranslateService,
          deps: [_ngstack_translate__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]],
          multi: true
        }].concat(matProviders, [{
          provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
          useClass: _class_hammer_config__WEBPACK_IMPORTED_MODULE_9__["HammerConfig"]
        }]),
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
          appId: 'serverApp'
        }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngstack_translate__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
          // options
          disableCache: true
        }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]]]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngstack_translate__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]]
        });
      })();
      /*@__PURE__*/
      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
              appId: 'serverApp'
            }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngstack_translate__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
              // options
              disableCache: true
            }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]],
            providers: [
            // needed to load translation before application starts
            {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
              useFactory: setupTranslateService,
              deps: [_ngstack_translate__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]],
              multi: true
            }].concat(matProviders, [{
              provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
              useClass: _class_hammer_config__WEBPACK_IMPORTED_MODULE_9__["HammerConfig"]
            }]),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();

      /***/
    },

    /***/"ciyc":
    /*!********************************************!*\
      !*** ./src/app/servives/common.service.ts ***!
      \********************************************/
    /*! exports provided: CommonService */
    /***/
    function ciyc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "CommonService", function () {
        return CommonService;
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"fXoL");
      /* harmony import */
      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! rxjs */"qCKp");
      var CommonService = /*#__PURE__*/function () {
        function CommonService() {
          _classCallCheck(this, CommonService);
          this.langObserver = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.biteLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        _createClass(CommonService, [{
          key: "langPublish",
          value: function langPublish() {
            this.langObserver.next();
          }
        }]);
        return CommonService;
      }();
      CommonService.ɵfac = function CommonService_Factory(t) {
        return new (t || CommonService)();
      };
      CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CommonService,
        factory: CommonService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/
      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      /***/
    },

    /***/"n9yw":
    /*!**********************************************!*\
      !*** ./src/app/servives/language.service.ts ***!
      \**********************************************/
    /*! exports provided: LanguageService */
    /***/
    function n9yw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
        return LanguageService;
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"fXoL");
      /* harmony import */
      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! rxjs */"qCKp");
      /* harmony import */
      var _local_storage_namespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./local-storage.namespace */"XwE0");
      /* harmony import */
      var _class_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../class/language */"wkNl");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"tyNb");
      /* harmony import */
      var _local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./local-storage.service */"r+iO");
      /* harmony import */
      var _ngstack_translate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ngstack/translate */"UdNJ");

      /** 类 */
      var LanguageService = /*#__PURE__*/function () {
        function LanguageService(route, store, translate) {
          _classCallCheck(this, LanguageService);
          this.route = route;
          this.store = store;
          this.translate = translate;
        }
        _createClass(LanguageService, [{
          key: "getLang",
          value: function getLang(urlLang, storeLang) {
            var store = _class_language__WEBPACK_IMPORTED_MODULE_3__["Locale"][storeLang.toUpperCase()];
            switch (urlLang) {
              case _class_language__WEBPACK_IMPORTED_MODULE_3__["Locale"].ZH:
              case _class_language__WEBPACK_IMPORTED_MODULE_3__["Locale"].EN:
                var url = _class_language__WEBPACK_IMPORTED_MODULE_3__["Locale"][urlLang.toUpperCase()];
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
          /** 初始化语言 */
        }, {
          key: "initLang",
          value: function initLang(urlLang, storeLang) {
            var _this = this;
            this.getLang(urlLang, storeLang).subscribe(function (locale) {
              if (locale) {
                _this.translate.activeLang = locale;
                _this.store.set(_local_storage_namespace__WEBPACK_IMPORTED_MODULE_2__["LANG"], locale);
              } else {
                console.error('what have you done?!');
              }
            });
          }
          /**
           * 切换当前语言
           * @param locale 语言：包含 ZH，EN，其他值均返回'this language is not allowed'
           */
        }, {
          key: "switchLang",
          value: function switchLang(locale) {
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
        }]);
        return LanguageService;
      }();
      LanguageService.ɵfac = function LanguageService_Factory(t) {
        return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngstack_translate__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]));
      };
      LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LanguageService,
        factory: LanguageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/
      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
          }, {
            type: _ngstack_translate__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
          }];
        }, null);
      })();

      /***/
    },

    /***/"r+iO":
    /*!***************************************************!*\
      !*** ./src/app/servives/local-storage.service.ts ***!
      \***************************************************/
    /*! exports provided: LocalStorageService */
    /***/
    function rIO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
        return LocalStorageService;
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"fXoL");
      var ls = localStorage;
      var LocalStorageService = /*#__PURE__*/function () {
        function LocalStorageService() {
          _classCallCheck(this, LocalStorageService);
        }
        _createClass(LocalStorageService, [{
          key: "get",
          value: function get(key) {
            return JSON.parse(ls.getItem(key));
          }
        }, {
          key: "getList",
          value: function getList(key) {
            var before = ls.getItem(key);
            return before ? JSON.parse(before) : [];
          }
        }, {
          key: "set",
          value: function set(key, value) {
            if (!value && value === undefined) {
              return;
            }
            var arr = JSON.stringify(value);
            ls.setItem(key, arr);
          }
        }]);
        return LocalStorageService;
      }();
      LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
        return new (t || LocalStorageService)();
      };
      LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LocalStorageService,
        factory: LocalStorageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/
      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      /***/
    },

    /***/"rRan":
    /*!****************************************!*\
      !*** ./src/app/class/hammer.config.ts ***!
      \****************************************/
    /*! exports provided: HammerConfig */
    /***/
    function rRan(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "HammerConfig", function () {
        return HammerConfig;
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"fXoL");
      /* harmony import */
      var _squadette_hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @squadette/hammerjs */"mgpI");
      /* harmony import */
      var _squadette_hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_squadette_hammerjs__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */
      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser */"jhN1");
      var HammerConfig = /*#__PURE__*/function (_angular_platform_bro) {
        _inherits(HammerConfig, _angular_platform_bro);
        var _super = _createSuper(HammerConfig);
        function HammerConfig() {
          var _this2;
          _classCallCheck(this, HammerConfig);
          _this2 = _super.apply(this, arguments);
          _this2.overrides = {
            swipe: {
              direction: _squadette_hammerjs__WEBPACK_IMPORTED_MODULE_1__["DIRECTION_ALL"]
            },
            pinch: {
              enable: false
            },
            rotate: {
              enable: false
            }
          };
          return _this2;
        }
        return _createClass(HammerConfig);
      }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"]);
      HammerConfig.ɵfac = function HammerConfig_Factory(t) {
        return ɵHammerConfig_BaseFactory(t || HammerConfig);
      };
      HammerConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HammerConfig,
        factory: HammerConfig.ɵfac,
        providedIn: 'root'
      });
      var ɵHammerConfig_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](HammerConfig);
      /*@__PURE__*/
      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HammerConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      /***/
    },

    /***/"rkve":
    /*!********************************************!*\
      !*** ./src/app/servives/language.guard.ts ***!
      \********************************************/
    /*! exports provided: LanguageGuard */
    /***/
    function rkve(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "LanguageGuard", function () {
        return LanguageGuard;
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"fXoL");
      /* harmony import */
      var _local_storage_namespace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./local-storage.namespace */"XwE0");
      /* harmony import */
      var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./language.service */"n9yw");
      /* harmony import */
      var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./local-storage.service */"r+iO");
      /* harmony import */
      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common/http */"tk/3");
      /* harmony import */
      var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./common.service */"ciyc");

      // import {Local} from 'protractor/built/driverProviders';
      var LanguageGuard = /*#__PURE__*/function () {
        function LanguageGuard(language, store, http, common) {
          _classCallCheck(this, LanguageGuard);
          this.language = language;
          this.store = store;
          this.http = http;
          this.common = common;
        }
        _createClass(LanguageGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            // this.language.initLang();
            var url = next.queryParams.l ? next.queryParams.l : '';
            // console.log('language guard: ', url, store);
            var store = this.store.get(_local_storage_namespace__WEBPACK_IMPORTED_MODULE_1__["LANG"]) ? this.store.get(_local_storage_namespace__WEBPACK_IMPORTED_MODULE_1__["LANG"]) : '';
            this.language.initLang(url, store);
            return true;
          }
        }]);
        return LanguageGuard;
      }();
      LanguageGuard.ɵfac = function LanguageGuard_Factory(t) {
        return new (t || LanguageGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]));
      };
      LanguageGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LanguageGuard,
        factory: LanguageGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/
      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]
          }, {
            type: _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
          }];
        }, null);
      })();

      /***/
    },

    /***/"vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/
    /*! exports provided: AppRoutingModule */
    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"fXoL");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"tyNb");
      /* harmony import */
      var _servives_language_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./servives/language.guard */"rkve");
      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e( /*! import() | pages-main-main-module */"pages-main-main-module").then(__webpack_require__.bind(null, /*! ./pages/main/main.module */"82nU")).then(function (m) {
            return m.MainModule;
          });
        },
        canActivate: [_servives_language_guard__WEBPACK_IMPORTED_MODULE_2__["LanguageGuard"]]
      }];
      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });
      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          initialNavigation: 'enabled'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/
      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              initialNavigation: 'enabled'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();

      /***/
    },

    /***/"wkNl":
    /*!***********************************!*\
      !*** ./src/app/class/language.ts ***!
      \***********************************/
    /*! exports provided: Locale, Lang */
    /***/
    function wkNl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "Locale", function () {
        return Locale;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "Lang", function () {
        return Lang;
      });
      /** 多语言枚举 */
      var Locale;
      (function (Locale) {
        Locale["EN"] = "en";
        Locale["ZH"] = "zh";
      })(Locale || (Locale = {}));
      /** 语言对象类型 */
      var Lang = /*#__PURE__*/_createClass(function Lang(name, locale) {
        _classCallCheck(this, Lang);
        this.name = name;
        this.locale = locale;
      });
      /***/
    },
    /***/"zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/
    /*! no exports provided */
    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */
      var _squadette_hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @squadette/hammerjs */"mgpI");
      /* harmony import */
      var _squadette_hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_squadette_hammerjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"fXoL");
      /* harmony import */
      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./environments/environment */"AytR");
      /* harmony import */
      var dhtmlx_scheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! dhtmlx-scheduler */"T7+c");
      /* harmony import */
      var dhtmlx_scheduler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dhtmlx_scheduler__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */
      var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app/app.module */"ZAI4");
      /* harmony import */
      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/platform-browser */"jhN1");
      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }
      document.addEventListener('DOMContentLoaded', function () {
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
          return console.error(err);
        });
      });

      /***/
    },

    /***/"zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/
    /*! no static exports found */
    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";

      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map