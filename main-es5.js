function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_covid_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./models/covid-data */
    "./src/app/models/covid-data.ts");
    /* harmony import */


    var _models_continent_country_mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models/continent-country-mapping */
    "./src/app/models/continent-country-mapping.ts");
    /* harmony import */


    var _services_python_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/python.service */
    "./src/app/services/python.service.ts");
    /* harmony import */


    var _services_covid_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/covid-data.service */
    "./src/app/services/covid-data.service.ts");
    /* harmony import */


    var _services_continent_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/continent-country.service */
    "./src/app/services/continent-country.service.ts");
    /* harmony import */


    var _quick_fact_quick_fact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./quick-fact/quick-fact.component */
    "./src/app/quick-fact/quick-fact.component.ts");
    /* harmony import */


    var _world_stat_world_stat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./world-stat/world-stat.component */
    "./src/app/world-stat/world-stat.component.ts");
    /* harmony import */


    var _continent_wise_graph_continent_wise_graph_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./continent-wise-graph/continent-wise-graph.component */
    "./src/app/continent-wise-graph/continent-wise-graph.component.ts");
    /* harmony import */


    var _india_stat_india_stat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./india-stat/india-stat.component */
    "./src/app/india-stat/india-stat.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(pythonService, covidDataService, continentCountryService) {
        _classCallCheck(this, AppComponent);

        this.pythonService = pythonService;
        this.covidDataService = covidDataService;
        this.continentCountryService = continentCountryService;
        this.title = 'Covid19Dashboard';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.pythonService.getAggredatedData().subscribe(function (aggData) {
            var covidDataModel = new _models_covid_data__WEBPACK_IMPORTED_MODULE_1__["CovidData"]();
            covidDataModel.aggData = aggData;

            _this.covidDataService.setCovidData(covidDataModel);
          });
          this.pythonService.getCountryRegionMappingData().subscribe(function (data) {
            var model = new _models_continent_country_mapping__WEBPACK_IMPORTED_MODULE_2__["ContinentCountryMapping"]();
            model.mapping = data;

            _this.continentCountryService.setContinentCountryModel(model);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_python_service__WEBPACK_IMPORTED_MODULE_3__["PythonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_covid_data_service__WEBPACK_IMPORTED_MODULE_4__["CovidDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_continent_country_service__WEBPACK_IMPORTED_MODULE_5__["ContinentCountryService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 19,
      vars: 0,
      consts: [[1, "jumbotron"], [1, "Source", "Title", "ml-5"], [1, "text-success"], [1, "container-fluid"], [1, "row"], [1, "col-md-4", "col-sm-12"], [1, "col-md-8", "col-sm-12"], [1, "row", "mt-5", "ml-2"], [1, "col-md-12", "col-sm-12"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Covid-19 Quick Stats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Designed & Developed by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Abhijeet Lokhande");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-quick-fact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-world-stat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-continent-wise-stat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-india-stat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_quick_fact_quick_fact_component__WEBPACK_IMPORTED_MODULE_6__["QuickFactComponent"], _world_stat_world_stat_component__WEBPACK_IMPORTED_MODULE_7__["WorldStatComponent"], _continent_wise_graph_continent_wise_graph_component__WEBPACK_IMPORTED_MODULE_8__["ContinentWiseStatComponent"], _india_stat_india_stat_component__WEBPACK_IMPORTED_MODULE_9__["IndiaStatComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_python_service__WEBPACK_IMPORTED_MODULE_3__["PythonService"]
        }, {
          type: _services_covid_data_service__WEBPACK_IMPORTED_MODULE_4__["CovidDataService"]
        }, {
          type: _services_continent_country_service__WEBPACK_IMPORTED_MODULE_5__["ContinentCountryService"]
        }];
      }, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _world_stat_world_stat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./world-stat/world-stat.component */
    "./src/app/world-stat/world-stat.component.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
    /* harmony import */


    var _quick_fact_quick_fact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./quick-fact/quick-fact.component */
    "./src/app/quick-fact/quick-fact.component.ts");
    /* harmony import */


    var _continent_wise_graph_continent_wise_graph_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./continent-wise-graph/continent-wise-graph.component */
    "./src/app/continent-wise-graph/continent-wise-graph.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _chart_maker_chart_maker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./chart-maker/chart-maker.component */
    "./src/app/chart-maker/chart-maker.component.ts");
    /* harmony import */


    var primeng_chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/chart */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-chart.js");
    /* harmony import */


    var _table_maker_table_maker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./table-maker/table-maker.component */
    "./src/app/table-maker/table-maker.component.ts");
    /* harmony import */


    var _india_stat_india_stat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./india-stat/india-stat.component */
    "./src/app/india-stat/india-stat.component.ts");
    /* harmony import */


    var angular_fusioncharts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! angular-fusioncharts */
    "./node_modules/angular-fusioncharts/__ivy_ngcc__/index.js");
    /* harmony import */


    var fusioncharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! fusioncharts */
    "./node_modules/fusioncharts/fusioncharts.js");
    /* harmony import */


    var fusioncharts__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! fusioncharts/fusioncharts.charts */
    "./node_modules/fusioncharts/fusioncharts.charts.js");
    /* harmony import */


    var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! fusioncharts/themes/fusioncharts.theme.fusion */
    "./node_modules/fusioncharts/themes/fusioncharts.theme.fusion.js");
    /* harmony import */


    var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var fusioncharts_maps_fusioncharts_world__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! fusioncharts/maps/fusioncharts.world */
    "./node_modules/fusioncharts/maps/fusioncharts.world.js");
    /* harmony import */


    var fusioncharts_maps_fusioncharts_world__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_maps_fusioncharts_world__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var fusioncharts_maps_fusioncharts_india__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! fusioncharts/maps/fusioncharts.india */
    "./node_modules/fusioncharts/maps/fusioncharts.india.js");
    /* harmony import */


    var fusioncharts_maps_fusioncharts_india__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_maps_fusioncharts_india__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var fusioncharts_maps_fusioncharts_usa__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! fusioncharts/maps/fusioncharts.usa */
    "./node_modules/fusioncharts/maps/fusioncharts.usa.js");
    /* harmony import */


    var fusioncharts_maps_fusioncharts_usa__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_maps_fusioncharts_usa__WEBPACK_IMPORTED_MODULE_21__);

    angular_fusioncharts__WEBPACK_IMPORTED_MODULE_15__["FusionChartsModule"].fcRoot(fusioncharts__WEBPACK_IMPORTED_MODULE_16__, fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_17__, fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_18__, fusioncharts_maps_fusioncharts_world__WEBPACK_IMPORTED_MODULE_19__, fusioncharts_maps_fusioncharts_india__WEBPACK_IMPORTED_MODULE_20__, fusioncharts_maps_fusioncharts_usa__WEBPACK_IMPORTED_MODULE_21__);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_12__["ChartModule"], angular_fusioncharts__WEBPACK_IMPORTED_MODULE_15__["FusionChartsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _world_stat_world_stat_component__WEBPACK_IMPORTED_MODULE_6__["WorldStatComponent"], _quick_fact_quick_fact_component__WEBPACK_IMPORTED_MODULE_8__["QuickFactComponent"], _continent_wise_graph_continent_wise_graph_component__WEBPACK_IMPORTED_MODULE_9__["ContinentWiseStatComponent"], _chart_maker_chart_maker_component__WEBPACK_IMPORTED_MODULE_11__["ChartMakerComponent"], _table_maker_table_maker_component__WEBPACK_IMPORTED_MODULE_13__["TableMakerComponent"], _india_stat_india_stat_component__WEBPACK_IMPORTED_MODULE_14__["IndiaStatComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_12__["ChartModule"], angular_fusioncharts__WEBPACK_IMPORTED_MODULE_15__["FusionChartsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _world_stat_world_stat_component__WEBPACK_IMPORTED_MODULE_6__["WorldStatComponent"], _quick_fact_quick_fact_component__WEBPACK_IMPORTED_MODULE_8__["QuickFactComponent"], _continent_wise_graph_continent_wise_graph_component__WEBPACK_IMPORTED_MODULE_9__["ContinentWiseStatComponent"], _chart_maker_chart_maker_component__WEBPACK_IMPORTED_MODULE_11__["ChartMakerComponent"], _table_maker_table_maker_component__WEBPACK_IMPORTED_MODULE_13__["TableMakerComponent"], _india_stat_india_stat_component__WEBPACK_IMPORTED_MODULE_14__["IndiaStatComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_12__["ChartModule"], angular_fusioncharts__WEBPACK_IMPORTED_MODULE_15__["FusionChartsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/chart-maker/chart-maker.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/chart-maker/chart-maker.component.ts ***!
    \******************************************************/

  /*! exports provided: ChartMakerComponent */

  /***/
  function srcAppChartMakerChartMakerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartMakerComponent", function () {
      return ChartMakerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/chart */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-chart.js");

    var ChartMakerComponent = /*#__PURE__*/function () {
      function ChartMakerComponent() {
        _classCallCheck(this, ChartMakerComponent);
      }

      _createClass(ChartMakerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChartMakerComponent;
    }();

    ChartMakerComponent.ɵfac = function ChartMakerComponent_Factory(t) {
      return new (t || ChartMakerComponent)();
    };

    ChartMakerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartMakerComponent,
      selectors: [["app-chart-maker"]],
      inputs: {
        chartType: "chartType",
        chartData: "chartData",
        chartOptions: "chartOptions"
      },
      decls: 1,
      vars: 3,
      consts: [[3, "type", "data", "options"]],
      template: function ChartMakerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-chart", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.chartType)("data", ctx.chartData)("options", ctx.chartOptions);
        }
      },
      directives: [primeng_chart__WEBPACK_IMPORTED_MODULE_1__["UIChart"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0LW1ha2VyL2NoYXJ0LW1ha2VyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartMakerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chart-maker',
          templateUrl: './chart-maker.component.html',
          styleUrls: ['./chart-maker.component.css']
        }]
      }], function () {
        return [];
      }, {
        chartType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['chartType']
        }],
        chartData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['chartData']
        }],
        chartOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['chartOptions']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/continent-wise-graph/continent-wise-graph.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/continent-wise-graph/continent-wise-graph.component.ts ***!
    \************************************************************************/

  /*! exports provided: ContinentWiseStatComponent */

  /***/
  function srcAppContinentWiseGraphContinentWiseGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContinentWiseStatComponent", function () {
      return ContinentWiseStatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_continent_country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/continent-country.service */
    "./src/app/services/continent-country.service.ts");
    /* harmony import */


    var _services_covid_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/covid-data.service */
    "./src/app/services/covid-data.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _chart_maker_chart_maker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../chart-maker/chart-maker.component */
    "./src/app/chart-maker/chart-maker.component.ts");
    /* harmony import */


    var _table_maker_table_maker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../table-maker/table-maker.component */
    "./src/app/table-maker/table-maker.component.ts");

    function ContinentWiseStatComponent_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var r_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", r_r24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, r_r24));
      }
    }

    function ContinentWiseStatComponent_div_9_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var param_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", param_r26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, param_r26));
      }
    }

    function ContinentWiseStatComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Parameter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContinentWiseStatComponent_div_9_Template_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.selectedParam = $event;
        })("change", function ContinentWiseStatComponent_div_9_Template_select_change_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.onChangeParam();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ContinentWiseStatComponent_div_9_option_4_Template, 3, 4, "option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.selectedParam);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.paramList);
      }
    }

    function ContinentWiseStatComponent_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dt_r30 = ctx.$implicit;
        var i_r31 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", i_r31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, dt_r30));
      }
    }

    function ContinentWiseStatComponent_app_chart_maker_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chart-maker", 13);
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", ctx_r22.chartType)("chartData", ctx_r22.chartData)("chartOptions", ctx_r22.chartOptions);
      }
    }

    function ContinentWiseStatComponent_app_table_maker_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-table-maker", 14);
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx_r23.cols)("finalArrayToDisplay", ctx_r23.recordsForTable)("totalRecords", ctx_r23.recordsForTable.length);
      }
    }

    var ContinentWiseStatComponent = /*#__PURE__*/function () {
      function ContinentWiseStatComponent(ccmService, covidDataService) {
        _classCallCheck(this, ContinentWiseStatComponent);

        this.ccmService = ccmService;
        this.covidDataService = covidDataService;
        this.regionList = [];
        this.finalDataShow = {};
        this.selectedRegion = null;
        this.paramList = ['confirmed', 'recovered', 'deaths'];
        this.displayTypes = ['graph', 'table'];
        this.selectedParam = this.paramList[0];
        this.selectedDisplay = 1;
        this.recordsForTable = [];
        this.totalRecordsOfTable = 0;
        this.cols = [];
      }

      _createClass(ContinentWiseStatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.cols = [{
            field: 'countryName',
            header: 'Country'
          }, {
            field: 'confirmed',
            header: 'Confirmed'
          }, {
            field: 'recovered',
            header: 'Recovered'
          }, {
            field: 'deaths',
            header: 'Deaths'
          }, {
            field: 'mortalityRate',
            header: 'Mortality Rate'
          }];
          this.covidDataService.getCovidData().subscribe(function (dataC) {
            _this2.ccmService.getContinentCountryModel().subscribe(function (regionCountry) {
              var fCountries = Object.keys(dataC.aggData);
              Object.keys(regionCountry.mapping).forEach(function (rName) {
                var countryList = regionCountry.mapping[rName];

                var _iterator = _createForOfIteratorHelper(countryList),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var countryName = _step.value;

                    var _iterator2 = _createForOfIteratorHelper(fCountries),
                        _step2;

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var fCountry = _step2.value;

                        if (countryName.toLowerCase() == fCountry.toLowerCase()) {
                          if (!_this2.finalDataShow[rName]) {
                            _this2.finalDataShow[rName] = [];
                          }

                          _this2.finalDataShow[rName].push({
                            countryName: fCountry,
                            confirmed: dataC.aggData[fCountry]['confirmed'],
                            recovered: dataC.aggData[fCountry]['recovered'],
                            deaths: dataC.aggData[fCountry]['deaths']
                          });
                        }
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });
              _this2.regionList = Object.keys(_this2.finalDataShow);
              _this2.selectedRegion = _this2.regionList[0];

              if (!_this2.selectedDisplay) {
                _this2.generateChartData('line', _this2.finalDataShow[_this2.selectedRegion], _this2.selectedParam);
              } else {// call to table
              }
            });
          });
        }
      }, {
        key: "onChangeParam",
        value: function onChangeParam() {
          if (!this.selectedDisplay) {
            this.generateChartData('line', this.finalDataShow[this.selectedRegion], this.selectedParam);
          } else {// call to table
          }
        }
      }, {
        key: "onChangeRegion",
        value: function onChangeRegion() {
          if (!this.selectedDisplay) {
            this.generateChartData('line', this.finalDataShow[this.selectedRegion], this.selectedParam);
          } else {
            // call to table
            this.generateTableData(this.finalDataShow[this.selectedRegion]);
          }
        }
      }, {
        key: "onChangeDisplay",
        value: function onChangeDisplay() {
          if (!this.selectedDisplay) {
            this.generateChartData('line', this.finalDataShow[this.selectedRegion], this.selectedParam);
          } else {
            this.generateTableData(this.finalDataShow[this.selectedRegion]);
          }
        }
      }, {
        key: "generateTableData",
        value: function generateTableData(raw_data) {
          this.recordsForTable = [];

          var _iterator3 = _createForOfIteratorHelper(raw_data),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var item = _step3.value;
              var mRate = item['deaths'] / (item['confirmed'] + item['recovered'] + item['deaths']) * 100;
              mRate = Math.floor(mRate);
              this.recordsForTable.push({
                countryName: item['countryName'],
                confirmed: item['confirmed'],
                recovered: item['recovered'],
                deaths: item['deaths'],
                mortalityRate: mRate + '%'
              });
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, {
        key: "generateChartData",
        value: function generateChartData(type, raw_data, param) {
          if (!raw_data || raw_data.length == 0) return;
          var labels = [];
          var data = [];
          var backgroundColor = [];
          raw_data.forEach(function (item) {
            labels.push(item['countryName']);
            data.push(item[param]);
            backgroundColor.push('#' + (Math.random() * 0xffffff << 0).toString(16));
          });
          this.chartData = {
            labels: labels,
            datasets: [{
              label: "".concat(this.selectedParam.toUpperCase(), " Cases"),
              barPercentage: 0.5,
              barThickness: 6,
              maxBarThickness: 12,
              minBarLength: 2,
              backgroundColor: backgroundColor,
              data: data
            }]
          };
          this.chartType = type;
          this.chartOptions = {
            title: {
              display: false,
              fontSize: 16
            },
            legend: {
              position: 'top'
            }
          };
        }
      }]);

      return ContinentWiseStatComponent;
    }();

    ContinentWiseStatComponent.ɵfac = function ContinentWiseStatComponent_Factory(t) {
      return new (t || ContinentWiseStatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_continent_country_service__WEBPACK_IMPORTED_MODULE_1__["ContinentCountryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_covid_data_service__WEBPACK_IMPORTED_MODULE_2__["CovidDataService"]));
    };

    ContinentWiseStatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContinentWiseStatComponent,
      selectors: [["app-continent-wise-stat"]],
      decls: 18,
      vars: 7,
      consts: [[1, "h1"], [1, "row", "mt-5"], [1, "col-md-2", "col-sm-12", "text-left"], [1, "form-group"], [1, "form", "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "col-md-10", "col-sm-12", "text-center"], [3, "chartType", "chartData", "chartOptions", 4, "ngIf"], [3, "cols", "finalArrayToDisplay", "totalRecords", 4, "ngIf"], [3, "value"], [3, "ngValue"], [3, "chartType", "chartData", "chartOptions"], [3, "cols", "finalArrayToDisplay", "totalRecords"]],
      template: function ContinentWiseStatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Region Wise Stats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select Region");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContinentWiseStatComponent_Template_select_ngModelChange_7_listener($event) {
            return ctx.selectedRegion = $event;
          })("change", function ContinentWiseStatComponent_Template_select_change_7_listener() {
            return ctx.onChangeRegion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContinentWiseStatComponent_option_8_Template, 3, 4, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContinentWiseStatComponent_div_9_Template, 5, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Display as");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContinentWiseStatComponent_Template_select_ngModelChange_13_listener($event) {
            return ctx.selectedDisplay = $event;
          })("change", function ContinentWiseStatComponent_Template_select_change_13_listener() {
            return ctx.onChangeDisplay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ContinentWiseStatComponent_option_14_Template, 3, 4, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContinentWiseStatComponent_app_chart_maker_16_Template, 1, 3, "app-chart-maker", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContinentWiseStatComponent_app_table_maker_17_Template, 1, 3, "app-table-maker", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedRegion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.regionList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedDisplay);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _chart_maker_chart_maker_component__WEBPACK_IMPORTED_MODULE_5__["ChartMakerComponent"], _table_maker_table_maker_component__WEBPACK_IMPORTED_MODULE_6__["TableMakerComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRpbmVudC13aXNlLWdyYXBoL2NvbnRpbmVudC13aXNlLWdyYXBoLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContinentWiseStatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-continent-wise-stat',
          templateUrl: './continent-wise-graph.component.html',
          styleUrls: ['./continent-wise-graph.component.css']
        }]
      }], function () {
        return [{
          type: _services_continent_country_service__WEBPACK_IMPORTED_MODULE_1__["ContinentCountryService"]
        }, {
          type: _services_covid_data_service__WEBPACK_IMPORTED_MODULE_2__["CovidDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/india-stat/india-stat.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/india-stat/india-stat.component.ts ***!
    \****************************************************/

  /*! exports provided: IndiaStatComponent */

  /***/
  function srcAppIndiaStatIndiaStatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndiaStatComponent", function () {
      return IndiaStatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_python_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/python.service */
    "./src/app/services/python.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _table_maker_table_maker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../table-maker/table-maker.component */
    "./src/app/table-maker/table-maker.component.ts");
    /* harmony import */


    var angular_fusioncharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-fusioncharts */
    "./node_modules/angular-fusioncharts/__ivy_ngcc__/index.js");

    function IndiaStatComponent_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dt_r55 = ctx.$implicit;
        var i_r56 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", i_r56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, dt_r55));
      }
    }

    function IndiaStatComponent_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "On map only confirmed cases are shown but on hover you can get full details.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IndiaStatComponent_app_table_maker_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-table-maker", 12);
      }

      if (rf & 2) {
        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx_r53.cols)("finalArrayToDisplay", ctx_r53.recordsToDispplay)("totalRecords", ctx_r53.recordsToDispplay.length);
      }
    }

    function IndiaStatComponent_fusioncharts_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fusioncharts", 13);
      }

      if (rf & 2) {
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r54.dataSource);
      }
    }

    var IndiaStatComponent = /*#__PURE__*/function () {
      function IndiaStatComponent(pythonService) {
        _classCallCheck(this, IndiaStatComponent);

        this.pythonService = pythonService;
        this.selectedDisplay = 0;
        this.displayType = ['graph', 'table'];
        this.cols = [];
        this.recordsToDispplay = [];
        this.indianData = {};
        this.dataSource = {};
      }

      _createClass(IndiaStatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.cols = [{
            field: 'stateName',
            header: 'State'
          }, {
            field: 'confirmed',
            header: 'Confirmed'
          }, {
            field: 'recovered',
            header: 'Recovered'
          }, {
            field: 'deaths',
            header: 'Deaths'
          }, {
            field: 'mortalityRate',
            header: 'Mortality Rate'
          }];
          this.pythonService.getIndiaStat().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (data) {
            if (data['success']) {
              _this3.indianData = data;

              if (_this3.selectedDisplay) {
                _this3.generateDataForTable(data);
              } else {
                _this3.generateIndianChart(_this3.indianData);
              }
            }
          });
        }
      }, {
        key: "onChangeDisplay",
        value: function onChangeDisplay() {
          if (this.selectedDisplay) {
            this.generateDataForTable(this.indianData);
          } else {
            // graph
            this.generateIndianChart(this.indianData);
          }
        }
      }, {
        key: "generateDataForTable",
        value: function generateDataForTable(data) {
          var mainData = data['data']['regional'];
          this.recordsToDispplay = [];

          var _iterator4 = _createForOfIteratorHelper(mainData),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var item = _step4.value;
              var mRate = item['deaths'] / item['totalConfirmed'] * 100;
              mRate = Math.round(mRate);

              if (!item['totalConfirmed']) {
                mRate = 0;
              }

              this.recordsToDispplay.push({
                stateName: item['loc'],
                confirmed: item['totalConfirmed'],
                recovered: item['discharged'],
                deaths: item['deaths'],
                mortalityRate: mRate + '%'
              });
            } // for

          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }, {
        key: "titleCase",
        value: function titleCase(str) {
          str = str.toLowerCase().split(' ');

          for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
          }

          return str.join(' ');
        }
      }, {
        key: "getRandomColor",
        value: function getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';

          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }

          return color;
        }
      }, {
        key: "generateIndianChart",
        value: function generateIndianChart(indianData) {
          // Define the colorVariations of the angular gauge
          var stateAndIdMapping = {
            'Andaman And Nicobar Islands': '001',
            'Andhra Pradesh': '002',
            'Arunachal Pradesh': '003',
            Assam: '004',
            Bihar: '005',
            Chandigarh: '006',
            Chhattisgarh: '007',
            'Dadra and Nagar Haveli': '008',
            'Daman and Diu': '009',
            Delhi: '010',
            Goa: '011',
            Gujarat: '012',
            Haryana: '013',
            'Himachal Pradesh': '014',
            'Jammu And Kashmir': '015',
            Jharkhand: '016',
            Karnataka: '017',
            Kerala: '018',
            Lakshadweep: '019',
            'Madhya Pradesh': '020',
            Maharashtra: '021',
            Manipur: '022',
            Meghalaya: '023',
            Mizoram: '024',
            Nagaland: '025',
            Odisha: '026',
            Puducherry: '027',
            Punjab: '028',
            Rajasthan: '029',
            Sikkim: '030',
            'Tamil Nadu': '031',
            Telangana: '036',
            Tripura: '032',
            'Uttar Pradesh': '033',
            Uttarakhand: '034',
            'West Bengal': '035'
          };
          var mainData = indianData['data']['regional'];
          var dataset = [];

          var _iterator5 = _createForOfIteratorHelper(mainData),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var item = _step5.value;

              if (item['loc'].toLowerCase() == 'telengana') {
                item['loc'] = 'Telangana';
              }

              var stateName = this.titleCase(item['loc']);
              var confirmed = item['totalConfirmed'];
              dataset.push({
                id: stateAndIdMapping[stateName],
                value: confirmed,
                tooltext: "Confirmed : ".concat(confirmed, " {br} Recovered: ").concat(item['discharged'], " {br} Deaths: ").concat(item['deaths'])
              });
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          var colorRange = {
            minvalue: '0',
            code: '#FFE0B2',
            gradient: '1',
            color: [{
              minvalue: '0',
              maxvalue: '100',
              code: '#D0DFA3'
            }, {
              minvalue: '500',
              maxvalue: '1000',
              code: '#91AF64'
            }, {
              minvalue: '1000',
              maxvalue: '5000',
              code: '#A9FF8D'
            }]
          };
          this.dataSource = {
            chart: {
              caption: 'State Wise Stats',
              theme: 'fusion',
              formatNumberScale: '0',
              thousandSeparator: ',',
              thousandSeparatorPosition: '2,3',
              showLabels: '1',
              useSNameInLabels: '0',
              labelSepChar: ': ',
              includeValueInLabels: '1',
              useSNameInToolTip: '0'
            },
            // Aesthetics; ranges synced with the slider
            colorrange: colorRange,
            // Source data as JSON --> id represents countries of the world.
            data: dataset
          }; // end of this.dataSource

          console.log(this.dataSource);
        } // end

      }]);

      return IndiaStatComponent;
    }();

    IndiaStatComponent.ɵfac = function IndiaStatComponent_Factory(t) {
      return new (t || IndiaStatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_python_service__WEBPACK_IMPORTED_MODULE_2__["PythonService"]));
    };

    IndiaStatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IndiaStatComponent,
      selectors: [["app-india-stat"]],
      decls: 13,
      vars: 5,
      consts: [[1, "h1"], [1, "row"], [1, "col-md-2", "col-sm-12"], [1, "form-group"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "help-block text-success mt-2 font-italic", 4, "ngIf"], [1, "col-md-10", "col-sm-12"], [3, "cols", "finalArrayToDisplay", "totalRecords", 4, "ngIf"], ["width", "1000", "height", "1000", "type", "india", 3, "dataSource", 4, "ngIf"], [3, "ngValue"], [1, "help-block", "text-success", "mt-2", "font-italic"], [3, "cols", "finalArrayToDisplay", "totalRecords"], ["width", "1000", "height", "1000", "type", "india", 3, "dataSource"]],
      template: function IndiaStatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Covid-19 Stats of India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Display as");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndiaStatComponent_Template_select_ngModelChange_7_listener($event) {
            return ctx.selectedDisplay = $event;
          })("change", function IndiaStatComponent_Template_select_change_7_listener() {
            return ctx.onChangeDisplay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, IndiaStatComponent_option_8_Template, 3, 4, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IndiaStatComponent_span_9_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, IndiaStatComponent_app_table_maker_11_Template, 1, 3, "app-table-maker", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, IndiaStatComponent_fusioncharts_12_Template, 1, 1, "fusioncharts", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedDisplay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedDisplay);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _table_maker_table_maker_component__WEBPACK_IMPORTED_MODULE_5__["TableMakerComponent"], angular_fusioncharts__WEBPACK_IMPORTED_MODULE_6__["FusionChartsComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGlhLXN0YXQvaW5kaWEtc3RhdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndiaStatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-india-stat',
          templateUrl: './india-stat.component.html',
          styleUrls: ['./india-stat.component.css']
        }]
      }], function () {
        return [{
          type: _services_python_service__WEBPACK_IMPORTED_MODULE_2__["PythonService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/continent-country-mapping.ts":
  /*!*****************************************************!*\
    !*** ./src/app/models/continent-country-mapping.ts ***!
    \*****************************************************/

  /*! exports provided: ContinentCountryMapping */

  /***/
  function srcAppModelsContinentCountryMappingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContinentCountryMapping", function () {
      return ContinentCountryMapping;
    });

    var ContinentCountryMapping = function ContinentCountryMapping() {
      _classCallCheck(this, ContinentCountryMapping);

      this.mapping = {};
    };
    /***/

  },

  /***/
  "./src/app/models/covid-data.ts":
  /*!**************************************!*\
    !*** ./src/app/models/covid-data.ts ***!
    \**************************************/

  /*! exports provided: CovidData */

  /***/
  function srcAppModelsCovidDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovidData", function () {
      return CovidData;
    });

    var CovidData = function CovidData() {
      _classCallCheck(this, CovidData);

      this.aggData = {};
    };
    /***/

  },

  /***/
  "./src/app/quick-fact/quick-fact.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/quick-fact/quick-fact.component.ts ***!
    \****************************************************/

  /*! exports provided: QuickFactComponent */

  /***/
  function srcAppQuickFactQuickFactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuickFactComponent", function () {
      return QuickFactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_covid_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/covid-data.service */
    "./src/app/services/covid-data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var QuickFactComponent = /*#__PURE__*/function () {
      function QuickFactComponent(covidDataService) {
        _classCallCheck(this, QuickFactComponent);

        this.covidDataService = covidDataService;
        this.totalConfirmCases = 0;
        this.totalRecoverCases = 0;
        this.totalDeathCases = 0;
      }

      _createClass(QuickFactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.covidDataService.getCovidData().subscribe(function (covidData) {
            _this4.totalConfirmCases = 0;
            Object.keys(covidData.aggData).forEach(function (countryName) {
              _this4.totalConfirmCases += covidData.aggData[countryName]['confirmed'];
              _this4.totalRecoverCases += covidData.aggData[countryName]['recovered'];
              _this4.totalDeathCases += covidData.aggData[countryName]['deaths'];
            });
          });
        }
      }]);

      return QuickFactComponent;
    }();

    QuickFactComponent.ɵfac = function QuickFactComponent_Factory(t) {
      return new (t || QuickFactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_covid_data_service__WEBPACK_IMPORTED_MODULE_1__["CovidDataService"]));
    };

    QuickFactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuickFactComponent,
      selectors: [["app-quick-fact"]],
      decls: 32,
      vars: 12,
      consts: [[1, "row"], [1, "col", "text-center"], [1, "blockquote"], [1, "mb-0", "text-warning"], [1, "blockquote-footer"], ["title", "Source Title h5"], [1, "mb-0", "text-success"], [1, "mb-0", "text-danger"], [1, "mb-0"]],
      template: function QuickFactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quick Facts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "blockquote", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "cite", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total Confirm Cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "blockquote", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "footer", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "cite", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total Recover Cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "blockquote", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "cite", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Total Death Cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "blockquote", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "footer", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "cite", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Total Mortality Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx.totalConfirmCases), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, ctx.totalRecoverCases), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 8, ctx.totalDeathCases), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 10, ctx.totalDeathCases / ctx.totalConfirmCases), " ");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aWNrLWZhY3QvcXVpY2stZmFjdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuickFactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-quick-fact',
          templateUrl: './quick-fact.component.html',
          styleUrls: ['./quick-fact.component.css']
        }]
      }], function () {
        return [{
          type: _services_covid_data_service__WEBPACK_IMPORTED_MODULE_1__["CovidDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/continent-country.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/continent-country.service.ts ***!
    \*******************************************************/

  /*! exports provided: ContinentCountryService */

  /***/
  function srcAppServicesContinentCountryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContinentCountryService", function () {
      return ContinentCountryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_continent_country_mapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/continent-country-mapping */
    "./src/app/models/continent-country-mapping.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ContinentCountryService = /*#__PURE__*/function () {
      function ContinentCountryService() {
        _classCallCheck(this, ContinentCountryService);

        this.continentCountryModel = new _models_continent_country_mapping__WEBPACK_IMPORTED_MODULE_1__["ContinentCountryMapping"]();
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.continentCountryModel);
      }

      _createClass(ContinentCountryService, [{
        key: "setContinentCountryModel",
        value: function setContinentCountryModel(model) {
          this.continentCountryModel = model;
          this.subject.next(this.continentCountryModel);
        }
      }, {
        key: "getContinentCountryModel",
        value: function getContinentCountryModel() {
          return this.subject.asObservable();
        }
      }]);

      return ContinentCountryService;
    }();

    ContinentCountryService.ɵfac = function ContinentCountryService_Factory(t) {
      return new (t || ContinentCountryService)();
    };

    ContinentCountryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContinentCountryService,
      factory: ContinentCountryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContinentCountryService, [{
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

  /***/
  "./src/app/services/covid-data.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/covid-data.service.ts ***!
    \************************************************/

  /*! exports provided: CovidDataService */

  /***/
  function srcAppServicesCovidDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovidDataService", function () {
      return CovidDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_covid_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/covid-data */
    "./src/app/models/covid-data.ts");

    var CovidDataService = /*#__PURE__*/function () {
      function CovidDataService() {
        _classCallCheck(this, CovidDataService);

        this.covidData = new _models_covid_data__WEBPACK_IMPORTED_MODULE_2__["CovidData"]();
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.covidData);
      }

      _createClass(CovidDataService, [{
        key: "setCovidData",
        value: function setCovidData(model) {
          this.covidData = model;
          this.subject.next(this.covidData);
        }
      }, {
        key: "getCovidData",
        value: function getCovidData() {
          return this.subject.asObservable();
        }
      }]);

      return CovidDataService;
    }();

    CovidDataService.ɵfac = function CovidDataService_Factory(t) {
      return new (t || CovidDataService)();
    };

    CovidDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CovidDataService,
      factory: CovidDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidDataService, [{
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

  /***/
  "./src/app/services/python.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/python.service.ts ***!
    \********************************************/

  /*! exports provided: PythonService */

  /***/
  function srcAppServicesPythonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PythonService", function () {
      return PythonService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../assets/config.json */
    "./src/assets/config.json");

    var _assets_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./../../assets/config.json */
    "./src/assets/config.json", 1);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PythonService = /*#__PURE__*/function () {
      function PythonService(http) {
        _classCallCheck(this, PythonService);

        this.http = http;
        this.url = _assets_config_json__WEBPACK_IMPORTED_MODULE_1__.pythonUrl;
      }

      _createClass(PythonService, [{
        key: "getAggredatedData",
        value: function getAggredatedData() {
          return this.http.get("".concat(this.url, "/getAggregatedCsv"));
        }
      }, {
        key: "getCountryRegionMappingData",
        value: function getCountryRegionMappingData() {
          return this.http.get("".concat(this.url, "/getCountryRegionMapping"));
        }
      }, {
        key: "getIndiaStat",
        value: function getIndiaStat() {
          return this.http.get("https://api.rootnet.in/covid19-in/stats/latest");
        }
      }]);

      return PythonService;
    }();

    PythonService.ɵfac = function PythonService_Factory(t) {
      return new (t || PythonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PythonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PythonService,
      factory: PythonService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PythonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/table-maker/table-maker.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/table-maker/table-maker.component.ts ***!
    \******************************************************/

  /*! exports provided: TableMakerComponent */

  /***/
  function srcAppTableMakerTableMakerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableMakerComponent", function () {
      return TableMakerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TableMakerComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TableMakerComponent_ng_template_2_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          return _r32.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TableMakerComponent_ng_template_3_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r40.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r40.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r40.field);
      }
    }

    function TableMakerComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableMakerComponent_ng_template_3_th_1_Template, 3, 3, "th", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r38 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r38);
      }
    }

    function TableMakerComponent_ng_template_4_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var user_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r41[col_r44.field], " ");
      }
    }

    function TableMakerComponent_ng_template_4_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var user_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, user_r41[col_r44.field]), " ");
      }
    }

    function TableMakerComponent_ng_template_4_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableMakerComponent_ng_template_4_td_1_ng_container_1_Template, 2, 1, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableMakerComponent_ng_template_4_td_1_ng_container_2_Template, 3, 3, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r44 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r44.field == "countryName" || col_r44.field == "mortalityRate" || col_r44.field == "stateName");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r44.field != "countryName" && col_r44.field != "mortalityRate" && col_r44.field !== "stateName");
      }
    }

    function TableMakerComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableMakerComponent_ng_template_4_td_1_Template, 3, 2, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r42 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r42);
      }
    }

    var TableMakerComponent = /*#__PURE__*/function () {
      function TableMakerComponent() {
        _classCallCheck(this, TableMakerComponent);
      }

      _createClass(TableMakerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TableMakerComponent;
    }();

    TableMakerComponent.ɵfac = function TableMakerComponent_Factory(t) {
      return new (t || TableMakerComponent)();
    };

    TableMakerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableMakerComponent,
      selectors: [["app-table-maker"]],
      inputs: {
        cols: "cols",
        finalArrayToDisplay: "finalArrayToDisplay",
        totalRecords: "totalRecords"
      },
      decls: 5,
      vars: 6,
      consts: [["sortMode", "multiple", "autoLayout", "true", 3, "columns", "value", "paginator", "rows", "responsive", "totalRecords"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [2, "text-align", "right"], [1, "pi", "pi-search", 2, "margin", "4px 4px 0 0"], ["type", "text", "pInputText", "", "size", "50", "placeholder", "Global Filter", 2, "width", "auto", 3, "input"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [4, "ngFor", "ngForOf"], [4, "ngIf"]],
      template: function TableMakerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableMakerComponent_ng_template_2_Template, 3, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableMakerComponent_ng_template_3_Template, 2, 1, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableMakerComponent_ng_template_4_Template, 2, 1, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.cols)("value", ctx.finalArrayToDisplay)("paginator", true)("rows", 10)("responsive", false)("totalRecords", ctx.totalRecords);
        }
      },
      directives: [primeng_table__WEBPACK_IMPORTED_MODULE_1__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], primeng_table__WEBPACK_IMPORTED_MODULE_1__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_1__["SortIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlLW1ha2VyL3RhYmxlLW1ha2VyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableMakerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-table-maker',
          templateUrl: './table-maker.component.html',
          styleUrls: ['./table-maker.component.css']
        }]
      }], function () {
        return [];
      }, {
        cols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cols']
        }],
        finalArrayToDisplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['finalArrayToDisplay']
        }],
        totalRecords: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['totalRecords']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/world-stat/world-stat.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/world-stat/world-stat.component.ts ***!
    \****************************************************/

  /*! exports provided: WorldStatComponent */

  /***/
  function srcAppWorldStatWorldStatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorldStatComponent", function () {
      return WorldStatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_covid_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/covid-data.service */
    "./src/app/services/covid-data.service.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function WorldStatComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function WorldStatComponent_ng_template_6_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          return _r0.filterGlobal($event.target.value, "contains");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WorldStatComponent_ng_template_7_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-sortIcon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r8.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r8.header, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r8.field);
      }
    }

    function WorldStatComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorldStatComponent_ng_template_7_th_1_Template, 3, 3, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r6);
      }
    }

    function WorldStatComponent_ng_template_8_td_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var user_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r9[col_r12.field], " ");
      }
    }

    function WorldStatComponent_ng_template_8_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var user_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, user_r9[col_r12.field]), " ");
      }
    }

    function WorldStatComponent_ng_template_8_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorldStatComponent_ng_template_8_td_1_ng_container_1_Template, 2, 1, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorldStatComponent_ng_template_8_td_1_ng_container_2_Template, 3, 3, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r12.field == "countryName" || col_r12.field == "mortalityRate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r12.field != "countryName" && col_r12.field != "mortalityRate");
      }
    }

    function WorldStatComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorldStatComponent_ng_template_8_td_1_Template, 3, 2, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var columns_r10 = ctx.columns;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r10);
      }
    }

    var WorldStatComponent = /*#__PURE__*/function () {
      function WorldStatComponent(covidDataService) {
        _classCallCheck(this, WorldStatComponent);

        this.covidDataService = covidDataService;
        this.finalArrayToDisplay = [];
        this.totalRecords = 0;
        this.covidDataSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.cols = [];
      }

      _createClass(WorldStatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.cols = [{
            field: 'id',
            header: 'Sr No.'
          }, {
            field: 'countryName',
            header: 'Country'
          }, {
            field: 'confirmed',
            header: 'Confirmed'
          }, {
            field: 'recovered',
            header: 'Recovered'
          }, {
            field: 'deaths',
            header: 'Deaths'
          }, {
            field: 'mortalityRate',
            header: 'Mortality Rate'
          }];
          this.covidDataSubscription = this.covidDataService.getCovidData().subscribe(function (covidDataModel) {
            console.log(covidDataModel);
            var data = covidDataModel.aggData;
            Object.keys(data).forEach(function (countryName, idx) {
              var mRate = data[countryName]['deaths'] / (data[countryName]['confirmed'] + data[countryName]['recovered'] + data[countryName]['deaths']) * 100;
              mRate = Math.floor(mRate);

              _this5.finalArrayToDisplay.push({
                id: idx + 1,
                countryName: countryName,
                confirmed: data[countryName]['confirmed'],
                recovered: data[countryName]['recovered'],
                deaths: data[countryName]['deaths'],
                mortalityRate: mRate + '%'
              });
            });
            _this5.totalRecords = _this5.finalArrayToDisplay.length;
          });
        } // ngOnInit

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.covidDataSubscription.unsubscribe();
        }
      }]);

      return WorldStatComponent;
    }();

    WorldStatComponent.ɵfac = function WorldStatComponent_Factory(t) {
      return new (t || WorldStatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_covid_data_service__WEBPACK_IMPORTED_MODULE_2__["CovidDataService"]));
    };

    WorldStatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorldStatComponent,
      selectors: [["app-world-stat"]],
      decls: 9,
      vars: 6,
      consts: [[1, "row"], [1, "col"], ["sortMode", "multiple", "autoLayout", "true", 3, "columns", "value", "paginator", "rows", "responsive", "totalRecords"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [2, "text-align", "right"], [1, "pi", "pi-search", 2, "margin", "4px 4px 0 0"], ["type", "text", "pInputText", "", "size", "50", "placeholder", "Global Filter", 2, "width", "auto", 3, "input"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [4, "ngFor", "ngForOf"], [4, "ngIf"]],
      template: function WorldStatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "World Covid-19 Stats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-table", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WorldStatComponent_ng_template_6_Template, 3, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WorldStatComponent_ng_template_7_Template, 2, 1, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WorldStatComponent_ng_template_8_Template, 2, 1, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.cols)("value", ctx.finalArrayToDisplay)("paginator", true)("rows", 10)("responsive", false)("totalRecords", ctx.totalRecords);
        }
      },
      directives: [primeng_table__WEBPACK_IMPORTED_MODULE_3__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], primeng_table__WEBPACK_IMPORTED_MODULE_3__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_3__["SortIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmxkLXN0YXQvd29ybGQtc3RhdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorldStatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-world-stat',
          templateUrl: './world-stat.component.html',
          styleUrls: ['./world-stat.component.css']
        }]
      }], function () {
        return [{
          type: _services_covid_data_service__WEBPACK_IMPORTED_MODULE_2__["CovidDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/config.json":
  /*!********************************!*\
    !*** ./src/assets/config.json ***!
    \********************************/

  /*! exports provided: pythonUrl, default */

  /***/
  function srcAssetsConfigJson(module) {
    module.exports = JSON.parse("{\"pythonUrl\":\"https://abhijeetlokhande.pythonanywhere.com/mainApp\"}");
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! A:\Workspace\Angular\Covid19Dashboard\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map