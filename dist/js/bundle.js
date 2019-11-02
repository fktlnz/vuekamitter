/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Controller_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Controller_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Controller_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Controller_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Controller_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Controller_vue___default.a,
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\Controller.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60e548d0", Component.options)
  } else {
    hotAPI.reload("data-v-60e548d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Store_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Store_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Store_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Store_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Store_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Store_vue___default.a,
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\Store.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9e195dd6", Component.options)
  } else {
    hotAPI.reload("data-v-9e195dd6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InputForm_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InputForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InputForm_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InputForm_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InputForm_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ebf9f62_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InputForm_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_InputForm_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ebf9f62_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InputForm_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ebf9f62_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_InputForm_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\InputForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ebf9f62", Component.options)
  } else {
    hotAPI.reload("data-v-5ebf9f62", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55de965b_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_message_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_message_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55de965b_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_message_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55de965b_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_message_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\message.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55de965b", Component.options)
  } else {
    hotAPI.reload("data-v-55de965b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KeywordList_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KeywordList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KeywordList_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KeywordList_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KeywordList_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_641b334a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_KeywordList_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KeywordList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_641b334a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_KeywordList_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_641b334a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_KeywordList_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\KeywordList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-641b334a", Component.options)
  } else {
    hotAPI.reload("data-v-641b334a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-crontab");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.startAutoUnFollow = exports.reStartAutoFollow = exports.startAutoFollow = exports.startAutoLike = exports.tweetWatch = undefined;

var _Store = __webpack_require__(2);

var _Store2 = _interopRequireDefault(_Store);

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

var _vueCrontab = __webpack_require__(9);

var _vueCrontab2 = _interopRequireDefault(_vueCrontab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.tweetWatch = tweetWatch;
exports.startAutoLike = startAutoLike;
exports.startAutoFollow = startAutoFollow;
exports.reStartAutoFollow = reStartAutoFollow;
exports.startAutoUnFollow = startAutoUnFollow;


function tweetWatch() {
    var now = new Date();
    var now_ms = now.getTime();

    //storeから予約情報を取得する
    //reservedItem : {id:xxx,reserveTime:xxx,text:xxx}
    var reservedItem = _Store2.default.getReservedItem();

    var reserveTime = reservedItem.reserveTime;
    var dif_time = reserveTime - now_ms;
    // console.log('ツイート予約　待機中')
    if (reserveTime < now_ms) {
        // console.log('ツイートします')
        _vueCrontab2.default.disableJob('tweetwatch');

        //ツイートをサーバーにリクエストする        
        _Controller2.default.tweet_ajax(reservedItem.id, reservedItem.text);
        _Controller2.default.$on('AJAX_COMPLETE_TWEET', function ($event) {

            if ($event.response.res === 'OK') {
                // console.log('リクエストに成功しました. AJAX_COMPLETE_TWEET')
                // console.dir($event.response)
                // console.log('that.datas update呼ぶ前')
                // console.log(this.datas)
                //this.updateDatas()
                _Store2.default.setMessage($event.response.msg, true);

                var message = _Store2.default.getMessage();
                if (message.msg !== '') {
                    _Controller2.default.emit_message(message);
                }
            } else {
                // this.loading = false
                // console.log('リクエストに失敗しました')
                _Store2.default.setMessage('予約ツイートに失敗しました。ネットワーク管理者に問い合わせてください。', false);

                var _message = _Store2.default.getMessage();
                if (_message.msg !== '') {
                    _Controller2.default.emit_message(_message);
                }
            }
        });
    }
}

//自動フォローを開始する
function startAutoFollow() {
    //自動フォロー動作条件
    //１．自動フォローが「待機中」である
    //２．自動いいねが動作中でない
    if (_Store2.default.getAutoFollowCronStatus() === '1' && _Store2.default.getAutoLikeCronStatus() !== '2') {

        //自動フォローを再開する
        _Controller2.default.startAutoFollow_ajax();

        //1度の実施で十分なので、1度実施したら停止する
        _vueCrontab2.default.disableJob('startAutoFollow');
    } else {
        console.log('自動フォロー監視中です');
    }
}

//自動フォローを15分後に再開する関数
function reStartAutoFollow() {

    //自動フォロー再開関数を実行状態に設定する
    _Store2.default.setRestartAutoFollowCronStatus(true);

    var now = new Date();
    var now_ms = now.getTime();

    //storeから次のフォロー開始時間を取得する
    var reFollowTime = _Store2.default.getNextFollowTime();
    var nextFollowTime = reFollowTime.next;

    var dif_time = nextFollowTime - now_ms;
    // store.setNextFollowTime(dif_time, now_ms)    
    console.log('次の自動フォローまで=>' + dif_time);

    if (nextFollowTime < now_ms) {

        //自動フォロー動作条件
        //１．自動フォローが「待機中」である
        //２．自動いいねが動作中でない
        if (_Store2.default.getAutoFollowCronStatus() === '1' && _Store2.default.getAutoLikeCronStatus() !== '2') {

            //自動フォローを再開する
            _Controller2.default.startAutoFollow_ajax();

            //15分後に1度の実施で十分なので、1度実施したら停止する
            _vueCrontab2.default.disableJob('reStartAutoFollow');
            //自動フォロー再開関数を停止状態に設定する
            _Store2.default.setRestartAutoFollowCronStatus(false);
        } else {
            // console.log('自動フォロー再開監視中です')
        }
    }
}

function startAutoLike() {

    //自動いいね動作条件
    //１．自動フォローが動作していない
    //２．自動アンフォローが動作していない
    //３．自動いいねが「待機中」である
    if (_Store2.default.getAutoLikeCronStatus() === '1' && _Store2.default.getAutoFollowCronStatus() !== '2' && _Store2.default.getAutoUnFollowCronStatus() !== '2') {
        // console.log('startAutoLike動作中')
        _Controller2.default.startAutoLike_ajax();

        //以下の動作いる？
        _Controller2.default.$once('AJAX_COMPLETE_AUTOLIKE', function ($event) {

            if ($event.response.res === 'OK') {
                // console.log('リクエストに成功しました. AJAX_COMPLETE_AUTOLIKE')
                // console.dir($event.response.rst)                   

                //メッセージ表示
                _Store2.default.setMessage($event.response.msg, true);
                var message = _Store2.default.getMessage();
                if (message.msg !== '') {
                    _Controller2.default.emit_message(message);
                }
            } else {

                //メッセージ表示
                _Store2.default.setMessage($event.response.msg, false);
                var _message2 = _Store2.default.getMessage();
                if (_message2.msg !== '') {
                    _Controller2.default.emit_message(_message2);
                }
            }
        });
    } else {
        // console.log('自動いいね監視中')
    }
}

//自動アンフォローを開始する
function startAutoUnFollow() {

    var now = new Date();
    var now_ms = now.getTime();

    //storeから次のフォロー開始時間を取得する
    var UnFollowTime = _Store2.default.getNextUnFollowTime();

    var dif_time = UnFollowTime - now_ms;

    //5000人以上になったらアンフォローする
    //アンフォローは15分は最低あける（アンフォローをしても5000人をした回らない場合にアンフォローが何度も繰り返されてしまうため）
    if (_Store2.default.getFriendsCount() > 5000 && UnFollowTime < now_ms && _Store2.default.getAutoUnFollowCronStatus() === '1') {

        //自動アンフォローを開始する
        _Controller2.default.startAutoUnFollow_ajax();

        //自動アンフォロー実行中は停止する
        _vueCrontab2.default.disableJob('startAutoUnFollow');
    } else {
        // console.log('自動アンフォロー監視中です =>dif_time:'+dif_time)
    }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Vue.js のインスタンス
module.exports = new _vue2.default({
  data: {
    // メッセージ格納用
    message: {
      msg: '',
      status: false
    },
    IstweetwatchJobExec: false, //cronが動作中かどうか（true: 自動ツイートのwatchが動作中　false:動作していない）
    IsrestartAutoFollowJobExec: false, //cronが動作中かどうか
    IsStartAutoFollowJobExec: false, //cronが動作中かどうか
    IsAutoLikeExec: '0', //cronが動作中かどうか 0:停止中　1:待機中　2:実行中
    IsAutoFollowExec: '0', //cronが動作中かどうか 0:停止中　1:待機中　2:実行中
    IsAutoUnFollowExec: '0', //cronが動作中かどうか 0:停止中　1:待機中　2:実行中
    IsMailExec: '0', //cronが動作中かどうか 0:配信OFF　1:配信ON
    reservedTime: null,
    reserveItem: {
      id: null,
      reserveTime: null,
      text: null
    },
    reFollowTime: {
      now: null,
      next: null
    },
    friends_count: 0,
    UnFollowTime: null
  },
  methods: {
    // Ajax通信でJsonを取得し、特定のプロパティに格納する
    // 取得したら GET_AJAX_COMPLETE で通知する
    getMessage: function getMessage() {
      console.log('getMessage');
      var msg = this.message;
      //message初期化
      this.message = { msg: '', status: false };
      console.dir(msg);
      return msg;
    },

    // プロパティ名を指定してデータを取得
    setMessage: function setMessage(msg, status) {
      this.message.msg = msg;
      this.message.status = status;
    },


    //自動いいね機能のcron状態を取得
    getAutoLikeCronStatus: function getAutoLikeCronStatus() {
      return this.IsAutoLikeExec;
    },

    //自動いいね機能のcron状態をセット
    setAutoLikeCronStatus: function setAutoLikeCronStatus(status) {
      this.IsAutoLikeExec = status;
    },


    //自動フォロー機能のcron状態を取得
    getAutoFollowCronStatus: function getAutoFollowCronStatus() {
      return this.IsAutoFollowExec;
    },

    //自動フォロー機能のcron状態をセット
    setAutoFollowCronStatus: function setAutoFollowCronStatus(status) {
      this.IsAutoFollowExec = status;
    },


    //自動フォロー再開関数の状態を取得（true false）    
    getRestartAutoFollowCronStatus: function getRestartAutoFollowCronStatus() {
      return this.IsrestartAutoFollowJobExec;
    },

    //自動フォロー再開関数の状態をセット（true false） 
    setRestartAutoFollowCronStatus: function setRestartAutoFollowCronStatus(status) {
      this.IsrestartAutoFollowJobExec = status;
    },


    //自動アンフォロー機能のcron状態を取得
    getAutoUnFollowCronStatus: function getAutoUnFollowCronStatus() {
      return this.IsAutoUnFollowExec;
    },

    //自動アンフォロー機能のcron状態をセット
    setAutoUnFollowCronStatus: function setAutoUnFollowCronStatus(status) {
      this.IsAutoUnFollowExec = status;
    },


    //メール配信状態を取得
    getMailStatus: function getMailStatus() {
      return this.IsMailExec;
    },

    //メール配信状態をセット
    setMailStatus: function setMailStatus(status) {
      this.IsMailExec = status;
    },


    //アクティブユーザーのフォロー数をセットする
    setFriendsCount: function setFriendsCount(count) {
      this.friends_count = count;
    },

    //アクティブユーザーのフォロー数を取得する
    getFriendsCount: function getFriendsCount() {
      return this.friends_count;
    },
    getCronStatus: function getCronStatus() {
      return this.IstweetwatchJobExec;
    },
    setCronStatus: function setCronStatus(status) {
      this.IstweetwatchJobExec = status;
    },
    getReservedTime: function getReservedTime() {
      // console.log('予約時間を取得します：'+this.reservedTime)
      return this.reservedTime;
    },
    setReservedTime: function setReservedTime(time) {
      // console.log('予約時間を設置します：'+time)
      this.reservedTime = time;
    },
    getReservedItem: function getReservedItem() {
      // console.log('予約情報を取得します')
      // console.dir(this.reserveItem)
      return this.reserveItem;
    },
    setReservedItem: function setReservedItem(id, time, text) {

      this.reserveItem.id = id;
      this.reserveItem.reserveTime = time;
      this.reserveItem.text = text;

      // console.log('予約情報　id：'+this.reserveItem.id)
      // console.log('予約情報　reserveTime：'+this.reserveItem.reserveTime)
      // console.log('予約情報　text：'+this.reserveItem.text)
    },
    setNextFollowTime: function setNextFollowTime(nexttime, now) {
      this.reFollowTime.next = nexttime;
      this.reFollowTime.now = now;
      // console.log('次のフォロー開始時間：')
      // console.dir(this.reFollowTime)
    },
    getNextFollowTime: function getNextFollowTime() {
      return this.reFollowTime;
    },
    setNextUnFollowTime: function setNextUnFollowTime(nexttime) {
      this.UnFollowTime = nexttime;
      // console.log('次のアンフォロー開始時間：')
      // console.dir(this.UnFollowTime)
    },
    getNextUnFollowTime: function getNextUnFollowTime() {
      return this.UnFollowTime;
    }
  }
});
/* ================================
# Controller用vueインスタンス
画面とバックエンド（fuelphp）との橋渡しの役割
画面からDBへのアクセスはこのクラスを通す
=================================*/

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/* ================================
# Controller用vueインスタンス
画面とバックエンド（fuelphp）との橋渡しの役割
画面からDBへのアクセスはこのクラスを通す
=================================*/

// Ajax通信ライブラリ


// Json取得のベースURL
var URL_BASE = 'http://localhost:8888/KamitterApp/KamitterAPI/public/api/';
//const URL_BASE = 'http://service-1.masashisite.com/KamitterAPI/public/api/';

// Vue.js のインスタンス
module.exports = new _vue2.default({
  data: {
    // Jsonデータ格納用
    search_list: []
  },
  methods: _defineProperty({
    // Ajax通信でJsonを取得し、特定のプロパティに格納する
    // 取得したら GET_AJAX_COMPLETE で通知する
    get_ajax: function get_ajax(url, name) {
      var _this = this;

      return _axios2.default.get(URL_BASE + url).then(function (res) {
        _vue2.default.set(_this, name, res.data);
        _this.$emit('GET_AJAX_COMPLETE');
      });
    },

    // プロパティ名を指定してデータを取得
    get_data: function get_data(name) {
      return this.$data[name];
    },
    checkLogin_ajax: function checkLogin_ajax() {
      var _this2 = this;

      return _axios2.default.get(URL_BASE + 'checkLogin').then(function (res) {
        _this2.$emit('AJAX_COMPLETE_CHECKLOGIN', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this2.$emit('AJAX_COMPLETE_CHECKLOGIN', { response: json });
      });
    },

    //ユーザー登録処理
    signUp_ajax: function signUp_ajax(form_data) {
      var _this3 = this;

      var params = new URLSearchParams();
      params.append('username', form_data.username);
      params.append('email', form_data.email);
      params.append('password', form_data.password);
      params.append('re_pass', form_data.re_pass);

      return _axios2.default.post(URL_BASE + 'signup', params).then(function (res) {
        _this3.$emit('AJAX_COMPLETE_SIGNUP', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this3.$emit('AJAX_COMPLETE_SIGNUP', { response: json });
      });
    },

    //ログイン処理
    signIn_ajax: function signIn_ajax(form_data) {
      var _this4 = this;

      var params = new URLSearchParams();
      params.append('username', form_data.username);
      params.append('password', form_data.password);

      _axios2.default.post(URL_BASE + 'signin', params).then(function (res) {
        _this4.$emit('AJAX_COMPLETE_SIGNIN', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this4.$emit('AJAX_COMPLETE_SIGNIN', { response: json });
      });
    },

    /* =========================================================
    # パスワードリマインダー
    ============================================================*/
    //認証コードを送信する
    passRemindSend_ajax: function passRemindSend_ajax(username, email) {
      var _this5 = this;

      var params = new URLSearchParams();
      params.append('email', email);
      params.append('username', username);

      return _axios2.default.post(URL_BASE + 'passremindsend', params).then(function (res) {
        _this5.$emit('AJAX_COMPLETE_PASSREMINDSEND', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this5.$emit('AJAX_COMPLETE_PASSREMINDSEND', { response: json });
      });
    },

    //認証コードを確認して新しいパスワードを送信する
    passRemindRecieve_ajax: function passRemindRecieve_ajax(code) {
      var _this6 = this;

      var params = new URLSearchParams();
      params.append('code', code);

      return _axios2.default.post(URL_BASE + 'passremindrecieve', params).then(function (res) {
        _this6.$emit('AJAX_COMPLETE_PASSREMINDRECIEVE', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this6.$emit('AJAX_COMPLETE_PASSREMINDRECIEVE', { response: json });
      });
    },


    //Twitterアカウントの認証処理(auth_tokenとoauth_verifierの取得)
    certify_ajax: function certify_ajax() {
      var _this7 = this;

      return _axios2.default.get(URL_BASE + 'certify').then(function (res) {
        _this7.$emit('AJAX_COMPLETE_GETREQUEST', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this7.$emit('AJAX_COMPLETE_GETREQUEST', { response: json });
      });
    },

    //取得したoauth_tokenとoauth_verifierを使ってアクセストークンを取得。サーバー側でDB保存
    saveToken_ajax: function saveToken_ajax(oauth_token, oauth_verifier) {
      var _this8 = this;

      return _axios2.default.get(URL_BASE + 'certify?oauth_token=' + oauth_token + '&oauth_verifier=' + oauth_verifier).then(function (res) {
        _this8.$emit('AJAX_COMPLETE_CERTIFY', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this8.$emit('AJAX_COMPLETE_CERTIFY', { response: json });
      });
    },

    //ログインユーザーが認証しているアカウントをサーバーから取得する
    updateAccount_ajax: function updateAccount_ajax() {
      var _this9 = this;

      return _axios2.default.get(URL_BASE + 'getaccount').then(function (res) {
        _this9.$emit('AJAX_COMPLETE_GETACCOUNT', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this9.$emit('AJAX_COMPLETE_GETACCOUNT', { response: json });
      });
    },
    deleteAccount_ajax: function deleteAccount_ajax(screen_name) {
      var _this10 = this;

      return _axios2.default.get(URL_BASE + 'deleteaccount?screen_name=' + screen_name).then(function (res) {
        _this10.$emit('AJAX_COMPLETE_DELETEACCOUNT', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this10.$emit('AJAX_COMPLETE_DELETEACCOUNT', { response: json });
      });
    },
    getUserInfo_ajax: function getUserInfo_ajax(screen_name) {
      var _this11 = this;

      return _axios2.default.get(URL_BASE + 'getuserinfo?screen_name=' + screen_name).then(function (res) {
        _this11.$emit('AJAX_COMPLETE_GETUSERINFO', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this11.$emit('AJAX_COMPLETE_GETUSERINFO', { response: json });
      });
    },
    getActiveUser_ajax: function getActiveUser_ajax(screen_name) {
      var _this12 = this;

      return _axios2.default.get(URL_BASE + 'getactiveuser').then(function (res) {
        _this12.$emit('AJAX_COMPLETE_GETACTIVEUSER', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this12.$emit('AJAX_COMPLETE_GETACTIVEUSER', { response: json });
      });
    },
    getTwitterProfile_ajax: function getTwitterProfile_ajax(screen_name) {
      var _this13 = this;

      return _axios2.default.get(URL_BASE + 'gettwitterprofile?screen_name=' + screen_name).then(function (res) {
        _this13.$emit('AJAX_COMPLETE_GETTWITTERPROFILE', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this13.$emit('AJAX_COMPLETE_GETTWITTERPROFILE', { response: json });
      });
    },

    //ツイートを投稿する
    tweet_ajax: function tweet_ajax(id, text) {
      var _this14 = this;

      return _axios2.default.get(URL_BASE + 'tweet?text=' + text + '&id=' + id).then(function (res) {
        _this14.$emit('AJAX_COMPLETE_TWEET', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this14.$emit('AJAX_COMPLETE_TWEET', { response: json });
      });
    },

    //予約日時、ツイート内容をデータベースに保存するようAPIにリクエストする
    saveTweetSchedule_ajax: function saveTweetSchedule_ajax(id, text, time) {
      var that = this;
      return _axios2.default.get(URL_BASE + 'savetweetschedule?text=' + text + '&time=' + time + '&id=' + id).then(function (res) {
        that.$emit('AJAX_COMPLETE_SAVETWEETSCHEDULE', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        that.$emit('AJAX_COMPLETE_SAVETWEETSCHEDULE', { response: json });
      });
    },

    //予約日時、ツイート内容をデータベースから取得する
    getTweetSchedule_ajax: function getTweetSchedule_ajax() {
      var _this15 = this;

      return _axios2.default.get(URL_BASE + 'gettweetschedule').then(function (res) {
        _this15.$emit('AJAX_COMPLETE_GETTWEETSCHEDULE', { response: res.data });
        _this15.$emit('AJAX_DISPLAY_SCHEDULE_RESULT', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this15.$emit('AJAX_COMPLETE_GETTWEETSCHEDULE', { response: json });
      });
    },

    //予約日時、ツイート内容をデータベースから論理削除する
    deleteTweetSchedule_ajax: function deleteTweetSchedule_ajax(word_id) {
      var _this16 = this;

      return _axios2.default.get(URL_BASE + 'deletetweetschedule?word_id=' + word_id).then(function (res) {
        _this16.$emit('AJAX_COMPLETE_DELETETWEETSCHEDULE', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this16.$emit('AJAX_COMPLETE_DELETETWEETSCHEDULE', { response: json });
      });
    },

    //いいねしたリストをセッションから取得する
    getLikedListSession_ajax: function getLikedListSession_ajax() {
      var _this17 = this;

      return _axios2.default.get(URL_BASE + 'getlikedlistsession').then(function (res) {
        //HOME画面のイイネリストを更新する
        _this17.$emit('AJAX_DISPLAY_AUTOLIKE_RESULT', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。',
          'rst': false
          //HOME画面のイイネリストを更新する
        };_this17.$emit('AJAX_DISPLAY_AUTOLIKE_RESULT', { response: json });
      });
    },


    //フォローしたリストをDBから取得する
    getFollowedList_ajax: function getFollowedList_ajax() {
      var _this18 = this;

      return _axios2.default.get(URL_BASE + 'getfollowedlist').then(function (res) {
        //HOME画面のフォロー済リストを更新する
        _this18.$emit('AJAX_DISPLAY_AUTOFOLLOW_RESULT', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。',
          'rst': false
          //HOME画面のフォロー済リストを更新する
        };_this18.$emit('AJAX_DISPLAY_AUTOFOLLOW_RESULT', { response: json });
      });
    },


    //アンフォローしたリストをDBから取得する
    getUnFollowedList_ajax: function getUnFollowedList_ajax() {
      var _this19 = this;

      return _axios2.default.get(URL_BASE + 'getunfollowedlist').then(function (res) {
        //HOME画面のフォロー済リストを更新する
        _this19.$emit('AJAX_DISPLAY_AUTOUNFOLLOW_RESULT', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。',
          'rst': false
          //HOME画面のフォロー済リストを更新する
        };_this19.$emit('AJAX_DISPLAY_AUTOUNFOLLOW_RESULT', { response: json });
      });
    },
    emit_message: function emit_message(msg) {
      // console.log('メッセージを受信しました！'+msg)
      this.$emit('DISPLAY_MESSAGE', { message: msg });
    },


    /* ================================
    # crontabfuncから呼ばれる関数
    =================================*/
    //自動いいねを開始する
    startAutoLike_ajax: function startAutoLike_ajax() {
      var _this20 = this;

      //HOME画面の自動イイネステータスを実行中に変更する
      this.$emit('AJAX_CHANGE_AUTOLIKESTATUS', { response: '2' });
      return _axios2.default.get(URL_BASE + 'startautolike').then(function (res) {
        //HOME画面の自動イイネステータスを待機中に変更する
        _this20.$emit('AJAX_CHANGE_AUTOLIKESTATUS', { response: '1' });

        //HOME画面のイイネリストを更新する
        _this20.$emit('AJAX_DISPLAY_AUTOLIKE_RESULT', { response: res.data });
      }).catch(function (res) {
        //HOME画面の自動イイネステータスを待機中に変更する
        _this20.$emit('AJAX_CHANGE_AUTOLIKESTATUS', { response: '1' });
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this20.$emit('AJAX_COMPLETE_AUTOLIKE', { response: json });
      });
    },

    //自動フォローを開始
    startAutoFollow_ajax: function startAutoFollow_ajax() {
      var _this21 = this;

      //HOME画面の自動イイネステータスを実行中に変更する
      this.$emit('AJAX_CHANGE_AUTOFOLLOWSTATUS', { response: '2' });
      return _axios2.default.get(URL_BASE + 'startautofollow').then(function (res) {
        //HOME画面のフォローステータスを待機中に変更する
        _this21.$emit('AJAX_CHANGE_AUTOFOLLOWSTATUS', { response: '1' });

        //HOME画面のフォローリストを更新する
        _this21.$emit('AJAX_DISPLAY_AUTOFOLLOW_RESULT', { response: res.data });
      }).catch(function (res) {
        //HOME画面の自動イイネステータスを待機中に変更する
        _this21.$emit('AJAX_CHANGE_AUTOFOLLOWSTATUS', { response: '1' });
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this21.$emit('AJAX_DISPLAY_AUTOFOLLOW_RESULT', { response: json });
      });
    },


    /* =========================================================
    # 自動イイネキーワード・フォロワーサーチキーワード登録画面 共通
    ============================================================*/
    //キーワードをDBに保存する
    saveKeyword_ajax: function saveKeyword_ajax(id, likeword, option, type) {
      var _this22 = this;

      var params = new URLSearchParams();
      params.append('id', id);
      params.append('text', likeword);
      params.append('option', option);
      params.append('type', type);

      return _axios2.default.post(URL_BASE + 'savekeyword', params).then(function (res) {
        if (type === 0) {
          //フォロワーサーチキーワード
          _this22.$emit('AJAX_COMPLETE_SAVEFOLLOWERSEARCHWORD', { response: res.data });
        } else if (type === 1) {
          //イイネキーワード}
          _this22.$emit('AJAX_COMPLETE_SAVELIKEWORD', { response: res.data });
        }
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        if (type === 0) {
          //フォロワーサーチキーワード
          _this22.$emit('AJAX_COMPLETE_SAVEFOLLOWERSEARCHWORD', { response: json });
        } else if (type === 1) {
          //イイネキーワード}
          _this22.$emit('AJAX_COMPLETE_SAVELIKEWORD', { response: json });
        }
      });
    },

    //DBからキーワードを取得する
    getKeyword_ajax: function getKeyword_ajax(type) {
      var _this23 = this;

      return _axios2.default.get(URL_BASE + 'getkeyword?type=' + type).then(function (res) {
        if (type === 0) {
          //フォロワーサーチキーワード
          _this23.$emit('AJAX_COMPLETE_GETFOLLOWERSEARCHWORD', { response: res.data });
        } else if (type === 1) {
          //イイネキーワード}
          _this23.$emit('AJAX_COMPLETE_GETLIKEWORD', { response: res.data });
        }
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        if (type === 0) {
          //フォロワーサーチキーワード
          _this23.$emit('AJAX_COMPLETE_GETFOLLOWERSEARCHWORD', { response: json });
        } else if (type === 1) {
          //イイネキーワード}
          _this23.$emit('AJAX_COMPLETE_GETLIKEWORD', { response: json });
        }
      });
    },

    //DBからキーワードを論理削除する
    deleteKeyword_ajax: function deleteKeyword_ajax(word_id, type) {
      var _this24 = this;

      return _axios2.default.get(URL_BASE + 'deletekeyword?word_id=' + word_id).then(function (res) {
        if (type === 0) {
          //フォロワーサーチキーワード
          _this24.$emit('AJAX_COMPLETE_DELETEFOLLOWERSEARCHWORD', { response: res.data });
        } else if (type === 1) {
          //イイネキーワード}
          _this24.$emit('AJAX_COMPLETE_DELETELIKEWORD', { response: res.data });
        }
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        if (type === 0) {
          //フォロワーサーチキーワード
          _this24.$emit('AJAX_COMPLETE_DELETEFOLLOWERSEARCHWORD', { response: json });
        } else if (type === 1) {
          //イイネキーワード}
          _this24.$emit('AJAX_COMPLETE_DELETELIKEWORD', { response: json });
        }
      });
    },


    /* ================================
    # ターゲットアカウント登録画面
    =================================*/
    //ユーザーアカウントをDBに保存する　type: 0:ターゲットアカウント 1:フォロー済アカウント 2:アンフォローアカウント
    saveUserAccount_ajax: function saveUserAccount_ajax(id, screen_name, type) {
      var _this25 = this;

      var params = new URLSearchParams();
      params.append('id', id);
      params.append('username', screen_name);
      params.append('type', type);

      return _axios2.default.post(URL_BASE + 'saveuseraccount', params).then(function (res) {
        if (type === 0) {
          //ターゲットアカウント
          _this25.$emit('AJAX_COMPLETE_SAVETARGETACCOUNT', { response: res.data });
        } else if (type === 1) {
          //フォロー済アカウント
          _this25.$emit('AJAX_COMPLETE_SAVEFOLLOWDONEACCOUNT', { response: res.data });
        } else if (type === 2) {
          //アンフォローアカウント
          _this25.$emit('AJAX_COMPLETE_SAVEUNFOLLOWACCOUNT', { response: res.data });
        }
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        if (type === 0) {
          //ターゲットアカウント
          _this25.$emit('AJAX_COMPLETE_SAVETARGETACCOUNT', { response: json });
        } else if (type === 1) {
          //フォロー済アカウント
          _this25.$emit('AJAX_COMPLETE_SAVEFOLLOWDONEACCOUNT', { response: json });
        } else if (type === 2) {
          //アンフォローアカウント
          _this25.$emit('AJAX_COMPLETE_SAVEUNFOLLOWACCOUNT', { response: json });
        }
      });
    },

    //DBからユーザーアカウントを取得する
    getUserAccount_ajax: function getUserAccount_ajax(type) {
      var _this26 = this;

      return _axios2.default.get(URL_BASE + 'getuseraccount?type=' + type).then(function (res) {
        if (type === 0) {
          //ターゲットアカウント
          _this26.$emit('AJAX_COMPLETE_GETTARGETACCOUNT', { response: res.data });
        } else if (type === 1) {
          //フォロー済アカウント
          _this26.$emit('AJAX_COMPLETE_GETFOLLOWDONEACCOUNT', { response: res.data });
        } else if (type === 2) {
          //アンフォローアカウント
          _this26.$emit('AJAX_COMPLETE_GETUNFOLLOWACCOUNT', { response: res.data });
        }
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        if (type === 0) {
          //ターゲットアカウント
          _this26.$emit('AJAX_COMPLETE_GETTARGETACCOUNT', { response: json });
        } else if (type === 1) {
          //フォロー済アカウント
          _this26.$emit('AJAX_COMPLETE_GETFOLLOWDONEACCOUNT', { response: json });
        } else if (type === 2) {
          //アンフォローアカウント
          _this26.$emit('AJAX_COMPLETE_GETUNFOLLOWACCOUNT', { response: json });
        }
      });
    },

    //DBからユーザーアカウントを論理削除する
    deleteUserAccount_ajax: function deleteUserAccount_ajax(word_id, type) {
      var _this27 = this;

      return _axios2.default.get(URL_BASE + 'deleteuseraccount?word_id=' + word_id).then(function (res) {
        if (type === 0) {
          //ターゲットアカウント
          _this27.$emit('AJAX_COMPLETE_DELETETARGETACCOUNT', { response: res.data });
        } else if (type === 1) {
          //フォロー済アカウント
          _this27.$emit('AJAX_COMPLETE_DELETEFOLLOWDONEACCOUNT', { response: res.data });
        } else if (type === 2) {
          //アンフォローアカウント
          _this27.$emit('AJAX_COMPLETE_DELETEUNFOLLOWACCOUNT', { response: res.data });
        }
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'error': { 'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。' }
        };
        if (type === 0) {
          //ターゲットアカウント
          _this27.$emit('AJAX_COMPLETE_DELETETARGETACCOUNT', { response: json });
        } else if (type === 1) {
          //フォロー済アカウント
          _this27.$emit('AJAX_COMPLETE_DELETEFOLLOWDONEACCOUNT', { response: json });
        } else if (type === 2) {
          //アンフォローアカウント
          _this27.$emit('AJAX_COMPLETE_DELETEUNFOLLOWACCOUNT', { response: json });
        }
      });
    },

    //Twitterのアカウントが存在するか確認する
    CheckUserAccountExist_ajax: function CheckUserAccountExist_ajax(screen_name) {
      var _this28 = this;

      return _axios2.default.get(URL_BASE + 'checkuseraccountexist?screen_name=' + screen_name).then(function (res) {
        _this28.$emit('AJAX_COMPLETE_CHECKUSERACCOUNTEXIST', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this28.$emit('AJAX_COMPLETE_CHECKUSERACCOUNTEXIST', { response: json });
      });
    },


    /* =========================================================
    # 自動アンフォロー
    ============================================================*/
    //自動アンフォローを開始
    startAutoUnFollow_ajax: function startAutoUnFollow_ajax() {
      var _this29 = this;

      //HOME画面の自動イイネステータスを実行中に変更する
      this.$emit('AJAX_CHANGE_AUTOUNFOLLOWSTATUS', { response: '2' });
      return _axios2.default.get(URL_BASE + 'startautounfollow').then(function (res) {
        //HOME画面のフォローステータスを待機中に変更する
        _this29.$emit('AJAX_CHANGE_AUTOUNFOLLOWSTATUS', { response: '1' });

        //HOME画面のフォローリストを更新する
        _this29.$emit('AJAX_DISPLAY_AUTOUNFOLLOW_RESULT', { response: res.data });
      }).catch(function (res) {
        //HOME画面の自動イイネステータスを待機中に変更する
        _this29.$emit('AJAX_CHANGE_AUTOUNFOLLOWSTATUS', { response: '1' });
        var json = {
          'res': 'NG',
          'msg': 'サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this29.$emit('AJAX_DISPLAY_AUTOUNFOLLOW_RESULT', { response: json });
      });
    },


    /* =========================================================
    # メール配信
    ============================================================*/
    //セッションのメール配信状態をセットする
    changeMailStatus_ajax: function changeMailStatus_ajax(status) {
      var _this30 = this;

      return _axios2.default.get(URL_BASE + 'changemailstatus?status=' + status).then(function (res) {
        _this30.$emit('AJAX_FINISH_CHANGE_MAILSTATUS', { response: res.data });
      }).catch(function (res) {
        var rst = res.data;
        _this30.$emit('AJAX_FINISH_CHANGE_MAILSTATUS', { response: rst });
      });
    },


    /* =========================================================
    # ログアウト
    ============================================================*/
    logout_ajax: function logout_ajax() {
      var _this31 = this;

      return _axios2.default.get(URL_BASE + 'logout').then(function (res) {
        //HOME画面にログアウトを知らせる
        _this31.$emit('AJAX_FINISH_LOGOUT_RESULT', { response: res.data });
      }).catch(function (res) {
        var json = {
          'res': 'NG',
          'msg': 'ログアウトに失敗しました。ネットワーク管理者に問い合わせてください。'
        };
        _this31.$emit('AJAX_FINISH_LOGOUT_RESULT', { response: json });
      });
    }
  }, 'emit_message', function emit_message(msg) {
    // console.log('メッセージを受信しました！'+msg)
    this.$emit('DISPLAY_MESSAGE', { message: msg });
  })
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _InputForm = __webpack_require__(4);

var _InputForm2 = _interopRequireDefault(_InputForm);

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    components: {
        InputForm: _InputForm2.default
    },
    data: function data() {
        return {
            errors: '',
            data: {
                username: '',
                email: '',
                password: '',
                re_pass: ''
            }
        };
    },
    methods: {
        onChange: function onChange($event) {
            var name = $event.input.name;
            if (name === "username") {
                this.data.username = $event.input.value;
            } else if (name === "email") {
                this.data.email = $event.input.value;
            } else if (name === "password") {
                this.data.password = $event.input.value;
            } else if (name === "re_pass") {
                this.data.re_pass = $event.input.value;
            }
        },
        signUp: function signUp() {
            var _this = this;

            _Controller2.default.signUp_ajax(this.data);
            _Controller2.default.$on('AJAX_COMPLETE_SIGNUP', function ($event) {
                // console.log('処理がフロントに帰ってきました')
                //     console.dir($event.response)
                if ($event.response.res === 'OK') {
                    _this.$router.push('/home');
                }
                _this.errors = $event.response;
            });
        }
    }

};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//

// import Vue from 'vue'

exports.default = {
    props: ['type', 'label', 'name', 'placeholder'],
    data: function data() {
        return {};
    },
    methods: {
        onChange: function onChange($event) {
            this.$emit('onChange', { input: $event.target });
        }
    }

};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _InputForm = __webpack_require__(4);

var _InputForm2 = _interopRequireDefault(_InputForm);

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

var _Store = __webpack_require__(2);

var _Store2 = _interopRequireDefault(_Store);

var _message = __webpack_require__(5);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Vue from 'vue'
exports.default = {
    components: {
        InputForm: _InputForm2.default,
        Message: _message2.default
    },
    data: function data() {
        return {
            errors: '',
            data: {
                username: '',
                password: ''
            }
        };
    },
    mounted: function mounted() {
        //メッセージがセットされていれば表示する
        var message = _Store2.default.getMessage();
        if (message.msg !== '') {
            _Controller2.default.emit_message(message);
        }
    },
    methods: {
        onChange: function onChange($event) {
            var name = $event.input.name;
            if (name === "username") {
                this.data.username = $event.input.value;
            } else if (name === "password") {
                this.data.password = $event.input.value;
            }
        },
        signIn: function signIn() {
            var _this = this;

            _Controller2.default.signIn_ajax(this.data);
            _Controller2.default.$once('AJAX_COMPLETE_SIGNIN', function ($event) {
                // console.log('フロントに帰ってきたデータ↓')
                // console.dir($event.response)
                if ($event.response.res === 'OK') {
                    _Store2.default.setMessage('ログインに成功しました', true);
                    _this.$router.push('/home');
                } else {
                    _this.errors = $event.response;
                }
            });
        }
    }

}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _jquery = __webpack_require__(18);

var _jquery2 = _interopRequireDefault(_jquery);

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {},
    data: function data() {
        return {
            status: true,
            msg: '',
            visible: false

        };
    },
    mounted: function mounted() {
        (0, _jquery2.default)('.p-massage-area').on('click', function () {
            if ((0, _jquery2.default)('.p-sidebar').hasClass('open')) {
                (0, _jquery2.default)('.p-sidebar').removeClass('open');
                // $('.p-sidebar').css('left','-300px');
            } else {
                (0, _jquery2.default)('.p-sidebar').addClass('open');
                // $('.p-sidebar').css('left','0');
            }
        });
    },
    created: function created() {
        // view が作られた時にデータを取得し、
        // そのデータは既に監視されています
        this.fetchData();
    },
    updated: function updated() {
        setTimeout(this.setfalse, 3000);
        // this.visible=false
    },

    watch: {
        // ルートが変更されたらこのメソッドを再び呼び出します
        '$route': 'fetchData'
    },
    methods: {
        Onclick: function Onclick() {},
        fetchData: function fetchData() {
            var _this = this;

            _Controller2.default.$on('DISPLAY_MESSAGE', function (event) {
                // console.log('メッセージを表示します=>'+event.message.msg)
                _this.status = event.message.status;
                _this.msg = event.message.msg;
                _this.visible = true;
            });
        },
        setfalse: function setfalse() {
            this.visible = false;
        }
    }

}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _UserInfo = __webpack_require__(50);

var _UserInfo2 = _interopRequireDefault(_UserInfo);

var _KeywordList = __webpack_require__(8);

var _KeywordList2 = _interopRequireDefault(_KeywordList);

var _Listitem = __webpack_require__(55);

var _Listitem2 = _interopRequireDefault(_Listitem);

var _AuthAccount = __webpack_require__(59);

var _AuthAccount2 = _interopRequireDefault(_AuthAccount);

var _message13 = __webpack_require__(5);

var _message14 = _interopRequireDefault(_message13);

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

var _Store = __webpack_require__(2);

var _Store2 = _interopRequireDefault(_Store);

var _jquery = __webpack_require__(18);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    components: {
        UserInfo: _UserInfo2.default,
        ListItem: _Listitem2.default,
        AuthAccount: _AuthAccount2.default,
        Message: _message14.default
    },
    data: function data() {
        return {
            show: false,
            follower: 0,
            friends: 0,
            account_name: '',
            description: '',
            img_url: '',
            listItems_like: [],
            listItems_schedule: [],
            listItems_follow: [],
            listItems_unfollow: [],
            AutoLikeCronStatus: '0', //自動イイネ機能の動作状態　0:停止中　1:待機中　2:実行中
            AutoFollowCronStatus: '0', //自動フォロー機能の動作状態　0:停止中　1:待機中　2:実行中
            AutoUnFollowCronStatus: '0', //自動アンフォロー機能の動作状態　0:停止中　1:待機中　2:実行中
            MailStatus: '0', //メール配信動作状態　0:配信OFF　1:配信ON
            p_status_toggle: {
                'p-btn_home-like--exec': false,
                'p-btn_home-like--stay': false
            },
            p_follow_status_toggle: {
                'p-btn_home-follow--exec': false,
                'p-btn_home-follow--stay': false
            },
            p_unfollow_status_toggle: {
                'p-btn_home-unfollow--exec': false,
                'p-btn_home-unfollow--stay': false
            },
            p_mail_status_toggle: {
                'p-btn_home-mail--exec': false
            }
        };
    },
    created: function created() {
        var _this = this;

        //ログインチェック結果
        _Controller2.default.checkLogin_ajax();
        _Controller2.default.$once('AJAX_COMPLETE_CHECKLOGIN', function ($event) {
            // console.log('DEBUG -- Home.vue --> ログインチェックが完了しました')
            // console.log($event.response.res)
            if ($event.response.res === 'NOTLOGIN') {
                //ログインユーザーでないためログイン画面に飛ばします。
                console.log('ログインユーザーでありません。');
                _this.$router.push('/');
            } else {
                console.log('ログインユーザーです。');
                _this.show = true;
            }
        });
    },

    mounted: function mounted() {
        var _this2 = this;

        var that = this;

        //jquery設置
        (0, _jquery2.default)('.js-toggle-window').on('click', function () {
            if ((0, _jquery2.default)('.p-sidebar').hasClass('open')) {
                (0, _jquery2.default)('.p-sidebar').removeClass('open');
                // $('.p-sidebar').css('left','-300px');
            } else {
                (0, _jquery2.default)('.p-sidebar').addClass('open');
                // $('.p-sidebar').css('left','0');
            }
        });

        //ログインチェック結果
        _Controller2.default.checkLogin_ajax();
        _Controller2.default.$once('AJAX_COMPLETE_CHECKLOGIN', function ($event) {
            // console.log('DEBUG -- Home.vue --> ログインチェックが完了しました')
            // console.log($event.response.res)
            if ($event.response.res === 'NOTLOGIN') {
                //ログインユーザーでないためログイン画面に飛ばします。
                console.log('ログインユーザーでありません。');
                _this2.$router.push('/');
            } else {
                console.log('ログインユーザーです。');
                _this2.show = true;
            }
        });

        //メッセージがセットされていれば表示する
        var message = _Store2.default.getMessage();
        if (message.msg !== '') {
            _Controller2.default.emit_message(message);
        }

        //いいねの処理が完了したときにここにくる
        //いいねしたツイートの一覧を表示する
        _Controller2.default.getLikedListSession_ajax();
        _Controller2.default.$on('AJAX_DISPLAY_AUTOLIKE_RESULT', function ($event) {
            // console.log('DEBUG -- Home.vue --> いいね！をしたリストを更新します')
            // console.dir($event.response.rst)
            if ($event.response.res === 'OK') {

                // console.dir($event.response.rst.length)
                var result = $event.response.rst;
                var length = $event.response.rst.length;
                that.listItems_like = []; //listを初期化
                for (var i = 0; i < length; i++) {
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_like.unshift({ id: result[i]['id'], name: result[i]['name'], text: result[i]['text'], created_at: result[i]['created_at'] });
                }
            } else if ($event.response.rst == null) {
                //いいねのリクエストがすべて失敗した場合はnullが返る。リクエスト上限の可能性が高い
                //レスポンスがnullの場合はAPIのリクエスト上限と判断する
                //自動イイネを一時停止状態にして、メッセージで表示する
                // console.log('DEBUG -- Home.vue --> APIのリクエスト上限に達した可能性があります')

                //自動いいねを停止状態にする
                _this2.AutoLikeCronStatus = '0';
                _Store2.default.setAutoLikeCronStatus('0');
                _this2.$set(_this2.p_status_toggle, 'p-btn_home-like--exec', false);
                _this2.$set(_this2.p_status_toggle, 'p-btn_home-like--stay', false);

                //メッセージ表示
                _Store2.default.setMessage('いいね制限、あるいは通信環境に問題がある可能性あります。いいねを一時停止します。', false);
                var _message = _Store2.default.getMessage();
                if (_message.msg !== '') {
                    _Controller2.default.emit_message(_message);
                }
            } else {
                //通常のエラーフロー
                //メッセージ表示
                _Store2.default.setMessage($event.response.msg, false);
                var _message2 = _Store2.default.getMessage();
                if (_message2.msg !== '') {
                    _Controller2.default.emit_message(_message2);
                }
            }
        });

        //自動フォローが完了したときにここにくる
        //正常にすべてのフォローが完了した⇒フォローしたアカウントのリストを更新する
        //制限にかかった⇒15分後にもう一度自動フォローを再開する
        _Controller2.default.getFollowedList_ajax();
        _Controller2.default.$on('AJAX_DISPLAY_AUTOFOLLOW_RESULT', function ($event) {
            // console.log('フォローリスト取得がかえててきた')
            // console.dir($event.response.rst)
            if ($event.response.res === 'OK') {
                // console.log('DEBUG -- Home.vue --> フォローリストを更新します')
                // console.dir($event.response.rst)
                // console.dir($event.response.rst.length)
                var result = $event.response.rst;
                var length = $event.response.rst.length;
                that.listItems_follow = []; //listを初期化
                for (var i = 0; i < length; i++) {
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_follow.unshift({ id: result[i]['id'], name: result[i]['name'], text: result[i]['text'], created_at: result[i]['created_at'] });
                }

                //自動フォローを停止中にする
                // store.setAutoFollowCronStatus('0')
                // this.AutoFollowCronStatus = '0'
                // this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', false)
                // this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false)


                //次のフォロー開始時間を15分後に設定する
                var _now = new Date();
                var _now_ms = _now.getTime();
                _Store2.default.setNextFollowTime(_now_ms + 905000, _now_ms); //15分後に設定　5秒は気持ち

                //自動フォローを再開関数を開始する
                that.$crontab.enableJob('reStartAutoFollow');

                //フォロー数を更新する
                _this2.updateUserInfo();

                //メッセージ表示
                _Store2.default.setMessage($event.response.msg, false);
                var _message3 = _Store2.default.getMessage();
                if (_message3.msg !== '') {
                    _Controller2.default.emit_message(_message3);
                }
            } else if ($event.response.res === 'LIMIT' || $event.response.res === 'FOLLOWLIMIT') {
                //'LIMIT':       ターゲットアカウントからのフォロワー取得制限に引っかかった場合
                //'FOLLOWLIMIT': フォロー上限に引っかかった場合
                //crontabで15分後にフォローを再開する
                //'FOLLOWLIMIT'の場合は15分で解除されないが、解除されていないともう一度ここに飛んでくるからとりあえず'LIMIT'と共通化

                //次のフォロー開始時間を15分後に設定する
                var _now2 = new Date();
                var _now_ms2 = _now2.getTime();
                _Store2.default.setNextFollowTime(_now_ms2 + 905000, _now_ms2); //15分後に設定　5秒は気持ち

                //自動フォローを再開関数を開始する
                var _result = that.$crontab.enableJob('reStartAutoFollow');

                //リストを更新する
                var rst = $event.response.rst;
                var _length = $event.response.rst.length;
                that.listItems_follow = []; //listを初期化
                for (var _i = 0; _i < _length; _i++) {
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_follow.unshift({ id: rst[_i]['id'], name: rst[_i]['name'], text: rst[_i]['text'], created_at: rst[_i]['created_at'] });
                }

                //フォロー数を更新する
                _this2.updateUserInfo();

                //メッセージ表示
                _Store2.default.setMessage($event.response.msg, false);
                var _message4 = _Store2.default.getMessage();
                if (_message4.msg !== '') {
                    _Controller2.default.emit_message(_message4);
                }
            } else if ($event.response.res === 'UPDATED') {
                //画面更新の場合に、すでにフォロー済リストを表示する
                // console.log('DEBUG -- Home.vue --> UPDATE フォローリストを更新します')
                // console.dir($event.response.rst)
                // console.dir($event.response.rst.length)
                var _result2 = $event.response.rst;
                var _length2 = $event.response.rst.length;
                that.listItems_follow = []; //listを初期化
                for (var _i2 = 0; _i2 < _length2; _i2++) {
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_follow.push({ id: _result2[_i2]['id'], name: _result2[_i2]['name'], text: _result2[_i2]['text'], created_at: _result2[_i2]['created_at'] });
                }
            } else if ($event.response.res === 'SPAM') {

                //アカウントが停止された場合にここに来る
                //リストを更新して、すべての機能をoffにする

                // console.log('DEBUG -- Home.vue --> UPDATE フォローリストを更新します')
                // console.dir($event.response.rst)
                // console.dir($event.response.rst.length)
                var _result3 = $event.response.rst;
                var _length3 = $event.response.rst.length;
                that.listItems_follow = []; //listを初期化
                for (var _i3 = 0; _i3 < _length3; _i3++) {
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_follow.push({ id: _result3[_i3]['id'], name: _result3[_i3]['name'], text: _result3[_i3]['text'], created_at: _result3[_i3]['created_at'] });
                }

                //自動フォロー停止
                _Store2.default.setAutoFollowCronStatus('0');
                _this2.AutoFollowCronStatus = '0';
                _this2.$set(_this2.p_follow_status_toggle, 'p-btn_home-follow--stay', false);
                _this2.$set(_this2.p_follow_status_toggle, 'p-btn_home-follow--exec', false);

                //自動アンフォロー停止
                _Store2.default.setAutoUnFollowCronStatus('0');
                _this2.AutoUnFollowCronStatus = '0';
                _this2.$set(_this2.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', false);
                _this2.$set(_this2.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', false);

                //自動いいね停止
                _Store2.default.setAutoLikeCronStatus('0');
                _this2.AutoLikeCronStatus = '0';
                _this2.$set(_this2.p_status_toggle, 'p-btn_home-like--stay', false);
                _this2.$set(_this2.p_status_toggle, 'p-btn_home-like--exec', false);

                //メール送信停止
                _Store2.default.setMailStatus('0');
                _this2.MailStatus = '0';
                _this2.$set(_this2.p_mail_status_toggle, 'p-btn_home-mail--exec', false);
                _Controller2.default.changeMailStatus_ajax('0');
            } else {
                //メッセージ表示
                _Store2.default.setMessage($event.response.msg, false);
                var _message5 = _Store2.default.getMessage();
                if (_message5.msg !== '') {
                    _Controller2.default.emit_message(_message5);
                }

                //次のフォロー開始時間を15分後に設定する
                var _now3 = new Date();
                var _now_ms3 = _now3.getTime();
                _Store2.default.setNextFollowTime(_now_ms3 + 905000, _now_ms3); //15分後に設定　5秒は気持ち

                //自動フォローを再開関数を開始する
                var _result4 = that.$crontab.enableJob('reStartAutoFollow');

                //自動フォローを停止中にする
                // store.setAutoFollowCronStatus('0')
                // this.AutoFollowCronStatus = '0'
                // this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', false)
                // this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false)

                //自動フォローが実行中の場合は実行する
                //that.$crontab.enableJob('startAutoFollow')

            }
        });

        //次のアンフォロー開始時間を1分後に設定する
        //最初は1分あける
        var now = new Date();
        var now_ms = now.getTime();
        _Store2.default.setNextUnFollowTime(now_ms + 60000); //1分後に設定

        //自動アンフォローが完了したときにここにくる
        //正常にすべてのアンフォローが完了した⇒フォローしたアカウントのリストを更新する
        //制限にかかった⇒15分後にもう一度自動フォローを再開する
        //controller.startAutoUnFollow_ajax()
        _Controller2.default.getUnFollowedList_ajax();
        _Controller2.default.$on('AJAX_DISPLAY_AUTOUNFOLLOW_RESULT', function ($event) {
            // console.log('アンフォロー完了しました')
            // console.dir($event.response.rst)
            if ($event.response.res === 'OK') {
                // console.log('DEBUG -- Home.vue --> アンフォローリストを更新します')
                // console.dir($event.response.rst)
                // console.dir($event.response.rst.length)
                var result = $event.response.rst;
                var length = $event.response.rst.length;
                that.listItems_unfollow = []; //listを初期化
                for (var i = 0; i < length; i++) {
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_unfollow.unshift({ id: result[i]['id'], name: result[i]['name'], text: result[i]['text'], created_at: result[i]['created_at'] });
                }

                //フォロワー数を更新する
                _this2.updateUserInfo();

                //メッセージ表示
                _Store2.default.setMessage($event.response.msg, false);
                var _message6 = _Store2.default.getMessage();
                if (_message6.msg !== '') {
                    _Controller2.default.emit_message(_message6);
                }

                //アンフォローを15分後に再開する
                var _now4 = new Date();
                var _now_ms4 = _now4.getTime();
                _Store2.default.setNextUnFollowTime(_now_ms4 + 900000); //15分後に設定

                //自動アンフォローを再開関数を開始する
                that.$crontab.enableJob('startAutoUnFollow');
            } else if ($event.response.res === 'LIMIT' || $event.response.res === 'UNFOLLOWLIMIT') {
                //'LIMIT':       ターゲットアカウントからのフォロワー取得制限に引っかかった場合
                //'FOLLOWLIMIT': フォロー上限に引っかかった場合
                //crontabで15分後にフォローを再開する
                //'FOLLOWLIMIT'の場合は15分で解除されないが、解除されていないともう一度ここに飛んでくるからとりあえず'LIMIT'と共通化

                //リストを更新する
                // console.dir($event.response.rst)
                // console.dir($event.response.rst.length)
                var rst = $event.response.rst;
                var _length4 = $event.response.rst.length;
                that.listItems_unfollow = []; //listを初期化
                for (var _i4 = 0; _i4 < _length4; _i4++) {
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_unfollow.unshift({ id: rst[_i4]['id'], name: rst[_i4]['name'], text: rst[_i4]['text'], created_at: rst[_i4]['created_at'] });
                }

                //フォロワー数を更新する
                _this2.updateUserInfo();

                //メッセージ表示
                _Store2.default.setMessage($event.response.msg, false);
                var _message7 = _Store2.default.getMessage();
                if (_message7.msg !== '') {
                    _Controller2.default.emit_message(_message7);
                }

                //次のフォロー開始時間を15分後に設定する
                var _now5 = new Date();
                var _now_ms5 = _now5.getTime();
                _Store2.default.setNextUnFollowTime(_now_ms5 + 905000, _now_ms5); //15分後に設定　5秒は気持ち

                //自動アンフォローを再開関数を開始する
                that.$crontab.enableJob('startAutoUnFollow');
            } else if ($event.response.res === 'UPDATED') {
                //画面更新の場合に、すでにフォロー済リストを表示する
                // console.log('DEBUG -- Home.vue --> UPDATE フォローリストを更新します')
                // console.dir($event.response.rst)
                // console.dir($event.response.rst.length)
                var _result5 = $event.response.rst;
                var _length5 = $event.response.rst.length;
                that.listItems_unfollow = []; //listを初期化
                for (var _i5 = 0; _i5 < _length5; _i5++) {
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_unfollow.push({ id: _result5[_i5]['id'], name: _result5[_i5]['name'], text: _result5[_i5]['text'], created_at: _result5[_i5]['created_at'] });
                }
            } else {
                //メッセージ表示
                _Store2.default.setMessage($event.response.msg, false);
                var _message8 = _Store2.default.getMessage();
                if (_message8.msg !== '') {
                    _Controller2.default.emit_message(_message8);
                }

                //自動アンフォローを停止中にする
                _Store2.default.setAutoUnFollowCronStatus('0');
                _this2.AutoUnFollowCronStatus = '0';
                _this2.$set(_this2.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', false);
                _this2.$set(_this2.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', false);

                //次のフォロー開始時間を15分後に設定する
                var _now6 = new Date();
                var _now_ms6 = _now6.getTime();
                _Store2.default.setNextUnFollowTime(_now_ms6 + 905000, _now_ms6); //15分後に設定　5秒は気持ち
                //自動アンフォローが実行中の場合は実行する
                that.$crontab.enableJob('startAutoUnFollow');
            }
        });

        //自動フォローが実行中の場合は実行する
        // if(store.getAutoFollowCronStatus() !== '0') that.$crontab.enableJob('startAutoFollow')
        // if(store.getRestartAutoFollowCronStatus()) that.$crontab.enableJob('reStartAutoFollow')


        //予約ツイートを更新する
        _Controller2.default.getTweetSchedule_ajax();
        _Controller2.default.$on('AJAX_DISPLAY_SCHEDULE_RESULT', function ($event) {
            // console.log('DEBUG -- Home.vue --> ツイートスケジュールリストを更新します')
            if ($event.response.rst !== null) {
                // console.dir($event.response.rst)
                // console.dir($event.response.rst.length)
                var result = $event.response.rst;
                var length = $event.response.rst.length;
                that.listItems_schedule = []; //listを初期化
                for (var i = 0; i < length; i++) {
                    //DBから取得したList情報をdatasに格納する
                    //( 古 ,--,---,--->,新)の順で入っているからunshiftにして( 新 ,--,---,--->,古)として
                    //HOME画面で上から時系列順に並ぶようにする
                    that.listItems_schedule.unshift({ id: result[i]['id'], name: 'Schedule', text: result[i]['text'], created_at: result[i]['date'] });
                }
            }
        });

        //自動いいねのステータスを変更する
        _Controller2.default.$on('AJAX_CHANGE_AUTOLIKESTATUS', function ($event) {
            // console.log('DEBUG -- Home.vue --> 自動いいねステータスを変更します')
            _this2.AutoLikeCronStatus = $event.response;
            _Store2.default.setAutoLikeCronStatus($event.response);
            if ($event.response === '1') {
                _this2.$set(_this2.p_status_toggle, 'p-btn_home-like--exec', false);
                _this2.$set(_this2.p_status_toggle, 'p-btn_home-like--stay', true);
            } else {
                _this2.$set(_this2.p_status_toggle, 'p-btn_home-like--exec', true);
                _this2.$set(_this2.p_status_toggle, 'p-btn_home-like--stay', false);
            }
        });

        //自動フォローのステータスを変更する
        _Controller2.default.$on('AJAX_CHANGE_AUTOFOLLOWSTATUS', function ($event) {
            // console.log('DEBUG -- Home.vue --> 自動フォローステータスを変更します')
            _this2.AutoFollowCronStatus = $event.response;
            _Store2.default.setAutoFollowCronStatus($event.response);
            if ($event.response === '1') {
                _this2.$set(_this2.p_follow_status_toggle, 'p-btn_home-follow--exec', false);
                _this2.$set(_this2.p_follow_status_toggle, 'p-btn_home-follow--stay', true);
            } else {
                _this2.$set(_this2.p_follow_status_toggle, 'p-btn_home-follow--exec', true);
                _this2.$set(_this2.p_follow_status_toggle, 'p-btn_home-follow--stay', false);
            }
        });

        //自動アンフォローのステータスを変更する
        _Controller2.default.$on('AJAX_CHANGE_AUTOUNFOLLOWSTATUS', function ($event) {
            // console.log('DEBUG -- Home.vue --> 自動フォローステータスを変更します')
            _this2.AutoUnFollowCronStatus = $event.response;
            _Store2.default.setAutoUnFollowCronStatus($event.response);
            if ($event.response === '1') {
                _this2.$set(_this2.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', false);
                _this2.$set(_this2.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', true);
            } else {
                _this2.$set(_this2.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', true);
                _this2.$set(_this2.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', false);
            }
        });

        //♡likeステータスをセットする
        // console.log('likeステータスは：'+store.getAutoLikeCronStatus())
        this.AutoLikeCronStatus = _Store2.default.getAutoLikeCronStatus();
        if (this.AutoLikeCronStatus === '0') {
            this.$set(this.p_status_toggle, 'p-btn_home-like--exec', false);
            this.$set(this.p_status_toggle, 'p-btn_home-like--stay', false);
        } else if (this.AutoLikeCronStatus === '1') {
            this.$set(this.p_status_toggle, 'p-btn_home-like--exec', false);
            this.$set(this.p_status_toggle, 'p-btn_home-like--stay', true);
        } else {
            this.$set(this.p_status_toggle, 'p-btn_home-like--exec', true);
            this.$set(this.p_status_toggle, 'p-btn_home-like--stay', false);
        }
        //followステータスをセットする
        // console.log('followステータスは：'+store.getAutoFollowCronStatus())
        this.AutoFollowCronStatus = _Store2.default.getAutoFollowCronStatus();
        if (this.AutoFollowCronStatus === '0') {
            this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false);
            this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', false);
        } else if (this.AutoFollowCronStatus === '1') {
            this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false);
            this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', true);
        } else {
            this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', true);
            this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', false);
        }
        //unfollowステータスをセットする
        // console.log('Unfollowステータスは：'+store.getAutoUnFollowCronStatus())
        this.AutoUnFollowCronStatus = _Store2.default.getAutoUnFollowCronStatus();
        if (this.AutoUnFollowCronStatus === '0') {
            this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', false);
            this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', false);
        } else if (this.AutoUnFollowCronStatus === '1') {
            this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', false);
            this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', true);
        } else {
            this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', true);
            this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', false);
        }
        //メールは配信のステータスをセットする
        // console.log('メールステータスは：'+store.getMailStatus())
        this.MailStatus = _Store2.default.getMailStatus();
        if (this.MailStatus === '0') {
            this.$set(this.p_mail_status_toggle, 'p-btn_home-mail--exec', false);
        } else if (this.MailStatus === '1') {
            this.$set(this.p_mail_status_toggle, 'p-btn_home-mail--exec', true);
        }
    },
    methods: {
        changeActiveUser: function changeActiveUser($event) {
            var _this3 = this;

            console.log($event.active_user);
            var screen_name = $event.active_user;
            //親コンポーネントにアクティブユーザーを渡す 
            _Controller2.default.getTwitterProfile_ajax(screen_name);
            _Controller2.default.$once('AJAX_COMPLETE_GETTWITTERPROFILE', function ($event) {
                console.log('フロントに帰ってきたデータ↓ プロフィール');
                console.dir($event.response.rst);
                if ($event.response.res === 'OK') {
                    //取得成功時はUser領域更新
                    _this3.follower = $event.response.rst.followers_count; //フォロワー数
                    _this3.friends = $event.response.rst.friends_count; //フォロー数
                    _this3.account_name = $event.response.rst.name; //アカウント名
                    _this3.description = $event.response.rst.description; //プロフィール文
                    _this3.img_url = $event.response.rst.profile_image_url_https; //画像URL

                    //フォロー数をstoreに格納
                    _Store2.default.setFriendsCount($event.response.rst.friends_count);

                    //followList更新
                    _Controller2.default.getFollowedList_ajax();
                    //unfollowList更新
                    _Controller2.default.getUnFollowedList_ajax();
                    //予約ツイートを更新する
                    _Controller2.default.getTweetSchedule_ajax();
                    //いいねリストを更新する
                    _Controller2.default.getLikedListSession_ajax();
                } else if ($event.response.res === 'NOTLOGIN') {
                    console.log('ログインユーザーでないためログイン画面に飛ばします');
                    _this3.$router.push('/');
                } else {
                    //失敗したときはメッセージ表示
                    //メッセージ表示

                    _Store2.default.setMessage('プロフィールの取得に失敗。アクセス制限orネット環境が悪い可能性があります', false);
                    var _message9 = _Store2.default.getMessage();
                    if (_message9.msg !== '') {
                        _Controller2.default.emit_message(_message9);
                    }
                }
            });
        },

        //自動いいねの状態を変更する
        changeLikeCronStatus: function changeLikeCronStatus() {
            if (this.AutoLikeCronStatus === '0') {
                _Store2.default.setAutoLikeCronStatus('1');
                this.AutoLikeCronStatus = '1';
                this.$set(this.p_status_toggle, 'p-btn_home-like--exec', false);
                this.$set(this.p_status_toggle, 'p-btn_home-like--stay', true);
            } else if (this.AutoLikeCronStatus === '1') {
                _Store2.default.setAutoLikeCronStatus('0');
                this.AutoLikeCronStatus = '0';
                this.$set(this.p_status_toggle, 'p-btn_home-like--stay', false);
                this.$set(this.p_status_toggle, 'p-btn_home-like--exec', false);
            } else if (this.AutoLikeCronStatus === '2') {
                //実行中の場合はステータスを変更できないようにする
            }
        },

        //自動フォローの状態を変更する
        changeFollowCronStatus: function changeFollowCronStatus() {
            if (this.AutoFollowCronStatus === '0') {
                _Store2.default.setAutoFollowCronStatus('1');
                this.AutoFollowCronStatus = '1';
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false);
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', true);
            } else if (this.AutoFollowCronStatus === '1') {
                _Store2.default.setAutoFollowCronStatus('0');
                this.AutoFollowCronStatus = '0';
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--stay', false);
                this.$set(this.p_follow_status_toggle, 'p-btn_home-follow--exec', false);
            } else if (this.AutoFollowCronStatus === '2') {
                //実行中の場合はステータスを変更できないようにする
            }
        },

        //自動アンフォローの状態を変更する
        changeUnFollowCronStatus: function changeUnFollowCronStatus() {
            if (this.AutoUnFollowCronStatus === '0') {
                _Store2.default.setAutoUnFollowCronStatus('1');
                this.AutoUnFollowCronStatus = '1';
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', false);
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', true);
            } else if (this.AutoUnFollowCronStatus === '1') {
                _Store2.default.setAutoUnFollowCronStatus('0');
                this.AutoUnFollowCronStatus = '0';
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--stay', false);
                this.$set(this.p_unfollow_status_toggle, 'p-btn_home-unfollow--exec', false);
            } else if (this.AutoUnFollowCronStatus === '2') {
                //実行中の場合はステータスを変更できないようにする
            }
        },


        //メール配信状態を変更する
        changeMailStatus: function changeMailStatus() {
            var _this4 = this;

            if (this.MailStatus === '0') {
                _Store2.default.setMailStatus('1');
                this.MailStatus = '1';
                this.$set(this.p_mail_status_toggle, 'p-btn_home-mail--exec', true);
                _Controller2.default.changeMailStatus_ajax('1');
                _Controller2.default.$once('AJAX_FINISH_CHANGE_MAILSTATUS', function ($event) {
                    if ($event.response === false) {
                        _Store2.default.setMessage('メール配信状態の変更に失敗しました。', false);
                        var _message10 = _Store2.default.getMessage();
                        if (_message10.msg !== '') {
                            _Controller2.default.emit_message(_message10);
                        }
                        //配信状態を停止にする
                        _Store2.default.setMailStatus('0');
                        _this4.MailStatus = '0';
                        _this4.$set(_this4.p_mail_status_toggle, 'p-btn_home-mail--exec', false);
                    }
                });
            } else if (this.MailStatus === '1') {
                _Store2.default.setMailStatus('0');
                this.MailStatus = '0';
                this.$set(this.p_mail_status_toggle, 'p-btn_home-mail--exec', false);
                _Controller2.default.changeMailStatus_ajax('0');
                _Controller2.default.$once('AJAX_FINISH_CHANGE_MAILSTATUS', function ($event) {
                    if ($event.response === false) {
                        _Store2.default.setMessage('メール配信状態の変更に失敗しました。', false);
                        var _message11 = _Store2.default.getMessage();
                        if (_message11.msg !== '') {
                            _Controller2.default.emit_message(_message11);
                        }
                        //配信状態を配信ONにする
                        _Store2.default.setMailStatus('1');
                        _this4.MailStatus = '1';
                        _this4.$set(_this4.p_mail_status_toggle, 'p-btn_home-mail--exec', true);
                    }
                });
            }
        },
        updateUserInfo: function updateUserInfo() {
            var _this5 = this;

            _Controller2.default.getTwitterProfile_ajax('screen_name');
            _Controller2.default.$once('AJAX_COMPLETE_GETTWITTERPROFILE', function ($event) {
                // console.log('フロントに帰ってきたデータ↓ プロフィール')
                // console.dir($event.response.rst)
                if ($event.response.res === 'OK') {
                    //取得成功時はUser領域更新
                    _this5.follower = $event.response.rst.followers_count; //フォロワー数
                    _this5.friends = $event.response.rst.friends_count; //フォロー数
                    _this5.account_name = $event.response.rst.name; //アカウント名
                    _this5.description = $event.response.rst.description; //プロフィール文   
                    _this5.img_url = $event.response.rst.profile_image_url_https; //画像URL

                    //フォロー数をstoreに格納
                    _Store2.default.setFriendsCount($event.response.rst.friends_count);
                } else if ($event.response.res === 'NOTLOGIN') {
                    console.log('ログインユーザーでないためログイン画面に飛ばします');
                    _this5.$router.push('/');
                } else {
                    //失敗したときはメッセージ表示
                    //メッセージ表示

                    _Store2.default.setMessage('プロフィールの取得に失敗。アクセス制限orネット環境が悪い可能性があります', false);
                    var _message12 = _Store2.default.getMessage();
                    if (_message12.msg !== '') {
                        _Controller2.default.emit_message(_message12);
                    }
                }
            });
        }
    }

};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

var _InputForm = __webpack_require__(4);

var _InputForm2 = _interopRequireDefault(_InputForm);

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

var _Store = __webpack_require__(2);

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Vue from 'vue'
exports.default = {
    props: ['follower', 'friends', 'account_name', 'description', 'img_url'],
    components: {
        InputForm: _InputForm2.default
    },
    data: function data() {
        return {};
    },
    methods: {
        logout: function logout() {
            var _this = this;

            _Controller2.default.logout_ajax();
            _Controller2.default.$once('AJAX_FINISH_LOGOUT_RESULT', function ($event) {
                if ($event.response.res === true) {
                    //メッセージ表示
                    _Store2.default.setMessage('ログアウトしました', true);
                    _this.$router.push('/');
                } else {
                    //メッセージ表示
                    _Store2.default.setMessage('ログアウトに失敗しました', false);
                    var message = _Store2.default.getMessage();
                    if (message.msg !== '') {
                        _Controller2.default.emit_message(message);
                    }
                }
            });
        }
    }

};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KeywordItem = __webpack_require__(52);

var _KeywordItem2 = _interopRequireDefault(_KeywordItem);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//

exports.default = {
    props: ['listItems', 'type'],
    components: {
        KeywordComponent: _KeywordItem2.default
    },
    data: function data() {
        return {};
    },
    methods: {
        deleteItem: function deleteItem(id) {
            this.$emit('delete-item', { listId: id.item_id });
            this.datas = _lodash2.default.reject(this.datas, { 'id': id.item_id });
        }
    }

};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

var _Store = __webpack_require__(2);

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//

// import Vue from 'vue'
exports.default = {
    props: ['data', 'type'], //propsで受け取ったデータは関数内でthis.dataで使える
    data: function data() {
        return {
            classNameLi: {
                'c-listItem': true
            },
            HeartIcon: {
                'fas': true,
                'fa-heart': true
            },
            SearchIcon: {
                'fas': true,
                'fa-search': true
            },
            TargetIcon: {
                'fas': true,
                'fa-bullseye': true
            }
        };
    },
    mounted: function mounted() {},

    watch: {},
    methods: {
        OnMoveTwitterPage: function OnMoveTwitterPage() {
            window.open("https://twitter.com/" + this.data.text); // 新しいタブを開き、ページを表示
        }
    }

};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _props$data$component;

var _ListRecord = __webpack_require__(56);

var _ListRecord2 = _interopRequireDefault(_ListRecord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Vue from 'vue'


exports.default = (_props$data$component = {
    props: ['listItems', 'heading', 'classname'],
    data: {
        class: ''
    },
    components: {
        Record: _ListRecord2.default
    }
}, _defineProperty(_props$data$component, 'data', function data() {
    return {};
}), _defineProperty(_props$data$component, 'methods', {
    onChangeTxt: function onChangeTxt($event) {},
    onClick: function onClick() {
        var route = this.heading;
        if (route === 'unFollow') return;
        if (route === 'follow') route = 'target';
        this.$router.push('/' + route);
    },
    onClickKeyword: function onClickKeyword() {
        this.$router.push('/keywords');
    }
}), _props$data$component);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//

// import Vue from 'vue'
// import inputform from './InputForm.vue'

exports.default = {
    props: ['data', 'heading'],
    data: function data() {
        return {};
    },
    methods: {
        onMoveTwitter: function onMoveTwitter() {
            if (this.heading === 'follow' || this.heading === 'unFollow') {
                //ユーザーのページを表示
                window.open("https://twitter.com/" + this.data.name, '_blank'); // 新しいタブを開き、ページを表示
            } else {
                //ツイートを表示
                window.open("https://twitter.com/" + this.data.name + "/status/" + this.data.id, '_blank'); // 新しいタブを開き、ページを表示
            }
        }
    }

};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AccountList = __webpack_require__(60);

var _AccountList2 = _interopRequireDefault(_AccountList);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

var _Store = __webpack_require__(2);

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    components: {
        AccountListComponent: _AccountList2.default
    },
    data: function data() {
        return {
            datas: [], //
            searchText: '', //
            loading: false, //
            post: null, //
            error: null, //
            activeUser: '' //現在選択しているアカウント
        };
    },
    created: function created() {
        // view が作られた時にデータを取得し、
        // そのデータは既に監視されている
        this.fetchData();
        //this.updateAccount()
    },

    watch: {
        // ルートが変更されたらこのメソッドを再び呼び出します
        //'$route': 'fetchData'
    },
    methods: {
        makeDatas: function makeDatas() {
            // 今のリスト項目を退避
            var datas_ = Object.assign([], this.datas);
            return this.searchText == '' ? this.datas : '';
        },
        deleteItem: function deleteItem(id) {
            //データベース上のアカウント情報を削除する            
            var delete_data = _lodash2.default.filter(this.datas, { 'id': id.listId });

            this.datas = _lodash2.default.reject(this.datas, { 'id': id.listId });

            _Controller2.default.deleteAccount_ajax(delete_data[0].account);
            _Controller2.default.$on('AJAX_COMPLETE_DELETEACCOUNT', function ($event) {

                if ($event.response.res === 'OK') {
                    // console.log('リクエストに成功しました')
                    // console.dir($event.response)
                    _Store2.default.setMessage($event.response.msg, true);

                    var message = _Store2.default.getMessage();
                    if (message.msg !== '') {
                        _Controller2.default.emit_message(message);
                    }
                } else {
                    _Store2.default.setMessage('サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。', false);
                    var _message = _Store2.default.getMessage();
                    if (_message.msg !== '') {
                        _Controller2.default.emit_message(_message);
                    }
                }
            });
        },
        addItem: function addItem(account_list) {
            var that = this;
            Object.keys(account_list).forEach(function (key) {
                that.datas.push({ id: that.getId(), account: this['screen_name'], isActive: false });
            }, account_list);
            this.makeDatas();
        },
        filterCollection: function filterCollection(elm) {
            var regexp = new RegExp('^' + this.searchText, 'i');
            return elm.text.match(regexp);
        },
        CertifyAccount: function CertifyAccount() {
            this.loading = true;
            _Controller2.default.certify_ajax();
            _Controller2.default.$on('AJAX_COMPLETE_GETREQUEST', function ($event) {

                if ($event.response.res === 'OK') {
                    // console.log('リクエストに成功しました')
                    // console.dir($event.response)
                    var url = $event.response.url;
                    // this.$router.push(url)
                    window.location.href = url;
                } else {

                    _Store2.default.setMessage($event.response.msg, false);
                    var message = _Store2.default.getMessage();
                    if (message.msg !== '') {
                        _Controller2.default.emit_message(message);
                    }
                }
            });
        },
        fetchData: function fetchData() {
            var _this = this;

            console.log('fetchdataに来たよ！');
            this.loading = false;
            this.error = this.post = null;

            var denied = this.getParam('denied');
            var oauth_token = this.getParam('oauth_token');
            var oauth_verifier = this.getParam('oauth_verifier');

            if (!_lodash2.default.isNil(denied)) {
                //認証をキャンセルした場合
                this.loading = false;
                _Store2.default.setMessage('認証に失敗しました', false);
            } else if (!_lodash2.default.isNil(oauth_token) && !_lodash2.default.isNil(oauth_verifier)) {
                //認証処理に成功した場合
                this.loading = false;
                _Controller2.default.saveToken_ajax(oauth_token, oauth_verifier);
                _Controller2.default.$once('AJAX_COMPLETE_CERTIFY', function ($event) {
                    // console.log('フロントに帰ってきたデータ↓')
                    // console.dir($event.response)

                    //認証したアカウントのリストを更新する
                    _this.updateAccount();

                    // メッセージ表示
                    _Store2.default.setMessage('認証に成功しました', true);
                    var message = _Store2.default.getMessage();
                    if (message.msg !== '') {
                        _Controller2.default.emit_message(message);
                    }

                    //URLからGETパラメータを取り除く
                    history.pushState(null, null, "/");
                });
            } else {
                //HOME画面に遷移したとき、HOME画面を更新したときにここにはいる
                //このときはupdateAccountをする
                this.updateAccount();
            }
        },
        updateAccount: function updateAccount() {
            var _this2 = this;

            //thisを退避
            var that = this;
            //認証処理に成功した場合
            this.loading = false;
            _Controller2.default.updateAccount_ajax();
            _Controller2.default.$once('AJAX_COMPLETE_GETACCOUNT', function ($event) {
                // console.log('フロントに帰ってきたデータ↓')
                // console.dir($event.response)

                if ($event.response.res === 'OK') {
                    // メッセージ表示
                    for (var i = 0; i < $event.response.screen_name.length; i++) {
                        _this2.addItem($event.response.screen_name[i]);
                    }
                } else {}
            });
        },
        changeActiveUser: function changeActiveUser($event) {
            console.log($event.active_user);
            this.activeUser = $event.active_user;
            //親コンポーネントにアクティブユーザーを渡す
            this.$emit('change-active-user', { active_user: $event.active_user });
        },

        //GETパラメータの値を取得する
        getParam: function getParam(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        },
        getId: function getId() {
            var strong = 1000;
            return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16);
        }
    }

};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Task = __webpack_require__(61);

var _Task2 = _interopRequireDefault(_Task);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ['listItems'],
    components: {
        ItemsComponent: _Task2.default
    },
    data: function data() {
        return {
            activeUser: ''
        };
    },
    methods: {
        toggleDone: function toggleDone() {
            this.isDone = !this.isDone;
            this.$set(this.classNameLi, 'list__item-done', this.isDone);
            this.$set(this.classNameIcon, 'fa-circle', !this.isDone);
            this.$set(this.classNameIcon, 'fa-check-circle', this.isDone);
        },
        deleteItem: function deleteItem(id) {
            this.$emit('delete-item', { listId: id.item_id });
            this.datas = _lodash2.default.reject(this.datas, { 'id': id.item_id });
        },
        changeActiveUser: function changeActiveUser($event) {
            this.activeUser = $event.active_user;
            //親コンポーネントにアクティブユーザーを渡す
            this.$emit('change-active-user', { active_user: $event.active_user });
        }
    }

};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

var _Store = __webpack_require__(2);

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//

// import Vue from 'vue'
exports.default = {
    props: ['data', 'listStyle', 'active_user'], //propsで受け取ったデータは関数内でthis.dataで使える
    data: function data() {
        return {
            classNameLi: {
                'c-listItem': true,
                'c-listItem--done': this.data.isDone
            },
            classNameIcon: {
                'far': true,
                'fa-calendar-check': !this.data.isDone
                // 'fa-check-circle': this.data.isDone,
                // 'c-icon--checked': true
            },
            classNameIconPerson: {
                'fas': true,
                'fa-user': true,
                'p-user-selected': this.active_user === this.data.account
                // 'fa-check-circle': this.data.isDone,
                // 'c-icon--checked': true
            }
        };
    },
    mounted: function mounted() {
        //アクティブユーザーを選択状態にする
        this.setActiveUser();
    },

    watch: {
        active_user: function active_user() {
            this.$set(this.classNameIconPerson, 'p-user-selected', this.data.account === this.active_user);
        }
    },
    methods: {
        toggleDone: function toggleDone() {
            console.log('clicked チェック');
            this.data.isDone = !this.data.isDone;
            var status = this.data.isDone;
            this.$set(this.classNameLi, 'c-listItem--done', status);
            this.$set(this.classNameIcon, 'fa-circle-thin', !status);
            this.$set(this.classNameIcon, 'fa-check-circle', status);
            // this.$emit('toggleDone', {item_id: data_.id})
        },

        //ユーザーのアカウント情報を取得してhome画面に返す
        changeUser: function changeUser() {
            var _this = this;

            var that = this; //thisを退避
            _Controller2.default.getUserInfo_ajax(this.data.account);
            _Controller2.default.$on('AJAX_COMPLETE_GETUSERINFO', function ($event) {

                if ($event.response.res === 'OK') {
                    // console.log('getuserinfoが帰ってきたよ')
                    // console.dir($event.response)
                    _this.$set(_this.classNameIconPerson, 'p-user-selected', that.data.account === $event.response.active_user);
                    // this.active_user = $event.response.active_user
                    // console.log('アクティブユーザーはこれです：'+$event.response.active_user)
                    //親コンポーネントにアクティブユーザーを渡す
                    _this.$emit('change-active-user', { active_user: $event.response.active_user });
                    //メッセージを表示する
                    //リロードの場合(引数false)は切り替え完了メッセージを表示しない                   
                    _Store2.default.setMessage($event.response.msg, true);
                    var message = _Store2.default.getMessage();
                    if (message.msg !== '') {
                        _Controller2.default.emit_message(message);
                    }
                } else {
                    _Store2.default.setMessage('サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。', false);
                    var _message = _Store2.default.getMessage();
                    if (_message.msg !== '') {
                        _Controller2.default.emit_message(_message);
                    }
                }
            });
        },
        setActiveUser: function setActiveUser() {
            var _this2 = this;

            _Controller2.default.getActiveUser_ajax(this.data.account);
            _Controller2.default.$on('AJAX_COMPLETE_GETACTIVEUSER', function ($event) {

                if ($event.response.res === 'OK') {
                    // console.log('getactiveuserが帰ってきたよ')
                    // console.dir($event.response)
                    _this2.$set(_this2.classNameIconPerson, 'p-user-selected', _this2.data.account === $event.response.active_user);
                    // this.active_user = $event.response.active_user
                    // console.log('アクティブユーザーはこれです：'+$event.response.active_user)                    
                    //親コンポーネントにアクティブユーザーを渡す
                    _this2.$emit('change-active-user', { active_user: $event.response.active_user });
                } else {
                    _Store2.default.setMessage('サーバーの接続に失敗しました。ネットワーク管理者に問い合わせてください。', false);
                    var message = _Store2.default.getMessage();
                    if (message.msg !== '') {
                        _Controller2.default.emit_message(message);
                    }
                }
            });
        }
    }

};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KeywordList = __webpack_require__(8);

var _KeywordList2 = _interopRequireDefault(_KeywordList);

var _InputForm = __webpack_require__(4);

var _InputForm2 = _interopRequireDefault(_InputForm);

var _Store = __webpack_require__(2);

var _Store2 = _interopRequireDefault(_Store);

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

var _message7 = __webpack_require__(5);

var _message8 = _interopRequireDefault(_message7);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    components: {
        InputForm: _InputForm2.default,
        KeywordListComponent: _KeywordList2.default,
        // SearchComponent: search,
        Message: _message8.default
    },
    data: function data() {
        return {
            datas: [],
            likeWord: '',
            option_num: '0',
            option_text: 'AND',
            show: false
        };
    },
    created: function created() {
        var _this = this;

        //ログインチェック結果
        _Controller2.default.checkLogin_ajax();
        _Controller2.default.$once('AJAX_COMPLETE_CHECKLOGIN', function ($event) {
            // console.log('DEBUG -- Home.vue --> ログインチェックが完了しました')
            // console.log($event.response.res)
            if ($event.response.res === 'NOTLOGIN') {
                //ログインユーザーでないためログイン画面に飛ばします。
                console.log('ログインユーザーでありません。');
                _this.$router.push('/');
            } else {
                console.log('ログインユーザーです。');
                _this.show = true;
            }
        });
    },
    mounted: function mounted() {
        this.updateDatas();
    },

    methods: {
        moveTop: function moveTop() {
            this.$router.push('/home');
        },
        onChangeOption: function onChangeOption(event) {
            this.option_num = event.target.selectedIndex;
            this.option_text = event.target.value;
        },
        onChange: function onChange(event) {
            this.likeWord = event.input.value;
        },
        addItem: function addItem() {
            var _this2 = this;

            //キーワード未入力の場合
            if (this.likeWord === '') {
                //メッセージ表示
                _Store2.default.setMessage('キーワードを入力してください', false);
                var _message = _Store2.default.getMessage();
                if (_message.msg !== '') {
                    _Controller2.default.emit_message(_message);
                }
                return;
            }

            var word_id = this.getId();
            _Controller2.default.saveKeyword_ajax(word_id, this.likeWord, this.option_num, 1); //引数(キーワードID, キーワード, AND/OR/NOT, キーワードタイプ（0:フォロワーサーチ 1:いいねキーワード）)
            _Controller2.default.$once('AJAX_COMPLETE_SAVELIKEWORD', function ($event) {

                if ($event.response.res === 'OK') {
                    // console.log('リクエストに成功しました. AJAX_COMPLETE_SAVELIKEWORD')
                    // console.dir($event.response.rst)

                    //Listに追加する
                    _this2.datas.push({ id: word_id, text: '[' + _this2.option_text + ']  ' + _this2.likeWord, option: _this2.option_num });

                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, true);
                    var _message2 = _Store2.default.getMessage();
                    if (_message2.msg !== '') {
                        _Controller2.default.emit_message(_message2);
                    }
                } else {

                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, false);
                    var _message3 = _Store2.default.getMessage();
                    if (_message3.msg !== '') {
                        _Controller2.default.emit_message(_message3);
                    }
                }
            });

            //入力欄初期化

        },
        updateDatas: function updateDatas() {
            var that = this;
            _Controller2.default.getKeyword_ajax(1); //引数(キーワードタイプ（0:フォロワーサーチ 1:いいねキーワード）)
            _Controller2.default.$once('AJAX_COMPLETE_GETLIKEWORD', function ($event) {

                if ($event.response.res === 'OK') {
                    // console.log('リクエストに成功しました. AJAX_COMPLETE_GETLIKEWORD')
                    // console.dir($event.response.rst)
                    // console.dir($event.response.rst.length)
                    var result = $event.response.rst;
                    var length = $event.response.rst.length;
                    that.datas = [];
                    var optionText = '';
                    for (var i = 0; i < length; i++) {
                        //DBから取得したList情報をdatasに格納する                        
                        if (result[i]['logic'] === '0') {
                            optionText = 'AND';
                        } else if (result[i]['logic'] === '1') {
                            optionText = 'OR';
                        } else if (result[i]['logic'] === '2') {
                            optionText = 'NOT';
                        }

                        that.datas.push({ id: result[i]['id'], text: '[' + optionText + ']  ' + result[i]['word'] });
                    }
                } else {
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, false);
                    var _message4 = _Store2.default.getMessage();
                    if (_message4.msg !== '') {
                        _Controller2.default.emit_message(_message4);
                    }
                }
            });
        },
        deleteItem: function deleteItem(id) {
            var _this3 = this;

            _Controller2.default.deleteKeyword_ajax(id.listId, 1); //引数(キーワードID, キーワードタイプ（0:フォロワーサーチ 1:いいねキーワード）)
            _Controller2.default.$once('AJAX_COMPLETE_DELETELIKEWORD', function ($event) {

                if ($event.response.res === 'OK') {
                    // console.log('リクエストに成功しました. AJAX_COMPLETE_DELETELIKEWORD') 
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, true);
                    var _message5 = _Store2.default.getMessage();
                    if (_message5.msg !== '') {
                        _Controller2.default.emit_message(_message5);
                    }

                    _this3.datas = _lodash2.default.reject(_this3.datas, { 'id': id.listId });
                } else {
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, false);
                    var _message6 = _Store2.default.getMessage();
                    if (_message6.msg !== '') {
                        _Controller2.default.emit_message(_message6);
                    }
                }
            });
        },

        getId: function getId() {
            var strong = 1000;
            return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16);
        }
    }

};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KeywordList = __webpack_require__(8);

var _KeywordList2 = _interopRequireDefault(_KeywordList);

var _InputForm = __webpack_require__(4);

var _InputForm2 = _interopRequireDefault(_InputForm);

var _Store = __webpack_require__(2);

var _Store2 = _interopRequireDefault(_Store);

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

var _message7 = __webpack_require__(5);

var _message8 = _interopRequireDefault(_message7);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    components: {
        KeywordListComponent: _KeywordList2.default,
        InputForm: _InputForm2.default,
        Message: _message8.default
    },
    data: function data() {
        return {
            datas: [],
            searchText: '',
            option_num: '0',
            option_text: 'AND',
            show: false
        };
    },
    created: function created() {
        var _this = this;

        //ログインチェック結果
        _Controller2.default.checkLogin_ajax();
        _Controller2.default.$once('AJAX_COMPLETE_CHECKLOGIN', function ($event) {
            console.log('DEBUG -- Home.vue --> ログインチェックが完了しました');
            if ($event.response.res === 'NOTLOGIN') {
                //ログインユーザーでないためログイン画面に飛ばします。
                console.log('ログインユーザーでありません。');
                _this.$router.push('/');
            } else {
                console.log('ログインユーザーです。');
                _this.show = true;
            }
        });
    },
    mounted: function mounted() {
        this.updateDatas();
    },

    methods: {
        moveTop: function moveTop() {
            this.$router.push('/home');
        },
        onChangeOption: function onChangeOption(event) {
            this.option_num = event.target.selectedIndex;
            this.option_text = event.target.value;
        },
        onChange: function onChange(event) {
            this.searchText = event.input.value;
        },
        addItem: function addItem(event) {
            var _this2 = this;

            //キーワード未入力の場合
            if (this.searchText === '') {
                //メッセージ表示
                _Store2.default.setMessage('キーワードを入力してください', false);
                var _message = _Store2.default.getMessage();
                if (_message.msg !== '') {
                    _Controller2.default.emit_message(_message);
                }
                return;
            }

            var word_id = this.getId();
            _Controller2.default.saveKeyword_ajax(word_id, this.searchText, this.option_num, 0); //引数(キーワードID, キーワード, AND/OR/NOT, キーワードタイプ（0:フォロワーサーチ 1:いいねキーワード）)
            _Controller2.default.$once('AJAX_COMPLETE_SAVEFOLLOWERSEARCHWORD', function ($event) {

                if ($event.response.res === 'OK') {

                    //Listに追加する
                    _this2.datas.push({ id: word_id, text: '[' + _this2.option_text + ']  ' + _this2.searchText, option: _this2.option_num });

                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, true);
                    var _message2 = _Store2.default.getMessage();
                    if (_message2.msg !== '') {
                        _Controller2.default.emit_message(_message2);
                    }
                } else {

                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, false);
                    var _message3 = _Store2.default.getMessage();
                    if (_message3.msg !== '') {
                        _Controller2.default.emit_message(_message3);
                    }
                }
            });
        },
        updateDatas: function updateDatas() {
            var _this3 = this;

            var that = this;
            _Controller2.default.getKeyword_ajax(0); //引数(キーワードタイプ（0:フォロワーサーチ 1:いいねキーワード）)
            _Controller2.default.$once('AJAX_COMPLETE_GETFOLLOWERSEARCHWORD', function ($event) {

                if ($event.response.res === 'OK') {
                    var result = $event.response.rst;
                    var length = $event.response.rst.length;
                    that.datas = [];
                    var optionText = '';
                    for (var i = 0; i < length; i++) {
                        //DBから取得したList情報をdatasに格納する                        
                        if (result[i]['logic'] === '0') {
                            optionText = 'AND';
                        } else if (result[i]['logic'] === '1') {
                            optionText = 'OR';
                        } else if (result[i]['logic'] === '2') {
                            optionText = 'NOT';
                        }

                        that.datas.push({ id: result[i]['id'], text: '[' + optionText + ']  ' + result[i]['word'] });
                    }
                } else {
                    _this3.loading = false;
                    console.log('リクエストに失敗しました');

                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, false);
                    var _message4 = _Store2.default.getMessage();
                    if (_message4.msg !== '') {
                        _Controller2.default.emit_message(_message4);
                    }
                }
            });
        },
        deleteItem: function deleteItem(id) {
            var _this4 = this;

            _Controller2.default.deleteKeyword_ajax(id.listId, 0); //引数(キーワードID, キーワードタイプ（0:フォロワーサーチ 1:いいねキーワード）)
            _Controller2.default.$once('AJAX_COMPLETE_DELETEFOLLOWERSEARCHWORD', function ($event) {

                if ($event.response.res === 'OK') {
                    // console.log('リクエストに成功しました. AJAX_COMPLETE_DELETEFOLLOWERSEARCHWORD') 
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, true);
                    var _message5 = _Store2.default.getMessage();
                    if (_message5.msg !== '') {
                        _Controller2.default.emit_message(_message5);
                    }

                    _this4.datas = _lodash2.default.reject(_this4.datas, { 'id': id.listId });
                } else {
                    _this4.loading = false;
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, false);
                    var _message6 = _Store2.default.getMessage();
                    if (_message6.msg !== '') {
                        _Controller2.default.emit_message(_message6);
                    }
                }
            });
        },

        getId: function getId() {
            var strong = 1000;
            return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16);
        }
    }

};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KeywordList = __webpack_require__(8);

var _KeywordList2 = _interopRequireDefault(_KeywordList);

var _InputForm = __webpack_require__(4);

var _InputForm2 = _interopRequireDefault(_InputForm);

var _Store = __webpack_require__(2);

var _Store2 = _interopRequireDefault(_Store);

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

var _message10 = __webpack_require__(5);

var _message11 = _interopRequireDefault(_message10);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    components: {
        KeywordListComponent: _KeywordList2.default,
        InputForm: _InputForm2.default,
        Message: _message11.default
    },
    data: function data() {
        return {
            datas: [],
            screen_name: '',
            IsExist: false, //アカウントが存在しているかどうか
            show: false

        };
    },
    created: function created() {
        var _this = this;

        //ログインチェック結果
        _Controller2.default.checkLogin_ajax();
        _Controller2.default.$once('AJAX_COMPLETE_CHECKLOGIN', function ($event) {
            // console.log('DEBUG -- Home.vue --> ログインチェックが完了しました')
            // console.log($event.response.res)
            if ($event.response.res === 'NOTLOGIN') {
                //ログインユーザーでないためログイン画面に飛ばします。
                console.log('ログインユーザーでありません。');
                _this.$router.push('/');
            } else {
                console.log('ログインユーザーです。');
                _this.show = true;
            }
        });
    },
    mounted: function mounted() {
        this.updateDatas();
    },

    methods: {
        moveTop: function moveTop() {
            this.$router.push('/home');
        },
        onChange: function onChange(event) {
            this.screen_name = event.input.value;
        },
        deleteItem: function deleteItem(id) {
            var _this2 = this;

            _Controller2.default.deleteUserAccount_ajax(id.listId, 0); //引数(キーワードID, スクリーンネーム　, キーワードタイプ（0:ターゲットアカウント 1:フォロー済アカウント　2:アンフォローアカウント）)
            _Controller2.default.$once('AJAX_COMPLETE_DELETETARGETACCOUNT', function ($event) {

                if ($event.response.res === 'OK') {
                    // console.log('リクエストに成功しました. AJAX_COMPLETE_DELETETARGETACCOUNT') 
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, true);
                    var _message = _Store2.default.getMessage();
                    if (_message.msg !== '') {
                        _Controller2.default.emit_message(_message);
                    }

                    _this2.datas = _lodash2.default.reject(_this2.datas, { 'id': id.listId });
                } else {
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, false);
                    var _message2 = _Store2.default.getMessage();
                    if (_message2.msg !== '') {
                        _Controller2.default.emit_message(_message2);
                    }
                }
            });
        },
        addItem: function addItem(event) {
            var _this3 = this;

            //キーワード未入力の場合
            if (this.screen_name === '') {
                //メッセージ表示
                _Store2.default.setMessage('キーワードを入力してください', false);
                var _message3 = _Store2.default.getMessage();
                if (_message3.msg !== '') {
                    _Controller2.default.emit_message(_message3);
                }
                return;
            }

            //入力されたアカウントが存在するかチェックする
            _Controller2.default.CheckUserAccountExist_ajax(this.screen_name);
            _Controller2.default.$once('AJAX_COMPLETE_CHECKUSERACCOUNTEXIST', function ($event) {

                if ($event.response.res === 'OK') {
                    // console.log('取得に成功：アカウント存在or存在しない')
                    console.dir($event.response.rst);
                    _this3.IsExist = true;
                    if (!$event.response.rst) {
                        console.log('存在しないルートに来ているよ');
                        //rstがfalseのとき（アカウントが存在しないとき）
                        _Store2.default.setMessage('存在しないユーザーです', false);
                        var _message4 = _Store2.default.getMessage();
                        if (_message4.msg !== '') {
                            _Controller2.default.emit_message(_message4);
                        }
                        _this3.IsExist = false;
                    } else {
                        // console.log('アカウント存在します')
                        // console.log('this.IsExist：'+this.IsExist)
                        if (_this3.IsExist) {
                            var word_id = _this3.getId();
                            _Controller2.default.saveUserAccount_ajax(word_id, _this3.screen_name, 0); //引数(キーワードID, スクリーンネーム　, キーワードタイプ（0:ターゲットアカウント 1:フォロー済アカウント　2:アンフォローアカウント）)
                            _Controller2.default.$once('AJAX_COMPLETE_SAVETARGETACCOUNT', function ($event) {

                                if ($event.response.res === 'OK') {
                                    console.log('リクエストに成功しました. AJAX_COMPLETE_SAVETARGETACCOUNT');
                                    console.dir($event.response.rst);

                                    //Listに追加する
                                    _this3.datas.push({ id: word_id, text: _this3.screen_name });

                                    //メッセージ表示
                                    _Store2.default.setMessage($event.response.msg, true);
                                    var _message5 = _Store2.default.getMessage();
                                    if (_message5.msg !== '') {
                                        _Controller2.default.emit_message(_message5);
                                    }
                                } else {

                                    //メッセージ表示
                                    _Store2.default.setMessage($event.response.msg, false);
                                    var _message6 = _Store2.default.getMessage();
                                    if (_message6.msg !== '') {
                                        _Controller2.default.emit_message(_message6);
                                    }
                                }
                            });
                        }
                    }
                } else {
                    console.log('非公開のアカウントですよ');
                    _this3.IsExist = false;
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, false);
                    var _message7 = _Store2.default.getMessage();
                    if (_message7.msg !== '') {
                        _Controller2.default.emit_message(_message7);
                    }
                }
            });
        },
        updateDatas: function updateDatas() {
            var _this4 = this;

            var that = this;
            _Controller2.default.getUserAccount_ajax(0); //引数(キーワードタイプ（0:ターゲットアカウント 1:フォロー済アカウント 2:アンフォローアカウント）)
            _Controller2.default.$once('AJAX_COMPLETE_GETTARGETACCOUNT', function ($event) {

                if ($event.response.res === 'OK') {
                    // console.log('リクエストに成功しました. AJAX_COMPLETE_GETTARGETACCOUNT')
                    // console.dir($event.response.rst)
                    // console.dir($event.response.rst.length)
                    var result = $event.response.rst;
                    var length = $event.response.rst.length;
                    that.datas = [];
                    if (result) {
                        for (var i = 0; i < length; i++) {
                            //DBから取得したユーザーアカウントList情報をdatasに格納する
                            that.datas.push({ id: result[i]['id'], text: result[i]['screen_name'] });
                        }
                    } else {
                        //メッセージ表示
                        _Store2.default.setMessage('リストの更新に失敗しました。時間をおいて再度お試しください', false);
                        var _message8 = _Store2.default.getMessage();
                        if (_message8.msg !== '') {
                            _Controller2.default.emit_message(_message8);
                        }
                    }
                } else {
                    _this4.loading = false;
                    console.log('リクエストに失敗しました');

                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, false);
                    var _message9 = _Store2.default.getMessage();
                    if (_message9.msg !== '') {
                        _Controller2.default.emit_message(_message9);
                    }
                }
            });
        },

        getId: function getId() {
            var strong = 1000;
            return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16);
        }
    }

};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _components;

var _moment = __webpack_require__(73);

var _moment2 = _interopRequireDefault(_moment);

var _ScheduleList = __webpack_require__(74);

var _ScheduleList2 = _interopRequireDefault(_ScheduleList);

var _InputForm = __webpack_require__(4);

var _InputForm2 = _interopRequireDefault(_InputForm);

var _message8 = __webpack_require__(5);

var _message9 = _interopRequireDefault(_message8);

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

var _Store = __webpack_require__(2);

var _Store2 = _interopRequireDefault(_Store);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

var _vueCtkDateTimePicker = __webpack_require__(78);

var _vueCtkDateTimePicker2 = _interopRequireDefault(_vueCtkDateTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    components: (_components = {
        ScheduleListComponent: _ScheduleList2.default,
        InputForm: _InputForm2.default,
        VueCtkDateTimePicker: _vueCtkDateTimePicker2.default }, _defineProperty(_components, 'VueCtkDateTimePicker', _vueCtkDateTimePicker2.default), _defineProperty(_components, 'Message', _message9.default), _components),
    data: function data() {
        return {
            datas: [],
            date: '',
            text: '',
            yourValue: null,
            toggle: '1',
            registernum: 0,
            show: false
        };
    },
    created: function created() {
        var _this = this;

        //ログインチェック結果
        _Controller2.default.checkLogin_ajax();
        _Controller2.default.$once('AJAX_COMPLETE_CHECKLOGIN', function ($event) {
            // console.log('DEBUG -- Home.vue --> ログインチェックが完了しました')
            // console.log($event.response.res)
            if ($event.response.res === 'NOTLOGIN') {
                //ログインユーザーでないためログイン画面に飛ばします。
                console.log('ログインユーザーでありません。');
                _this.$router.push('/');
            } else {
                console.log('ログインユーザーです。');
                _this.show = true;
            }
        });
    },
    mounted: function mounted() {
        //Listの表示を更新
        this.updateDatas();
    },

    computed: {
        start: function start() {
            // min-date に明日の9時を指定
            var start = (0, _moment2.default)().add(0, 'days').hour(1);
            return start.format('YYYY-MM-DDTHH:mm:ss');
        },
        end: function end() {
            // max-date に min-date から3ヶ月後を指定
            var start = (0, _moment2.default)(this.start);
            var end = start.add(3, 'months').endOf('day');
            return end.format('YYYY-MM-DDTHH:mm:ss');
        }
    },
    methods: {
        moveTop: function moveTop() {
            this.$router.push('/home');
        },
        onChange: function onChange(event) {
            if (event.input.name === 'date') {
                this.date = event.input.value;
            } else if (event.input.name === 'text') {
                this.text = event.input.value;
            }
        },
        updateDatas: function updateDatas() {
            var _this2 = this;

            var that = this;
            _Controller2.default.getTweetSchedule_ajax();
            _Controller2.default.$once('AJAX_COMPLETE_GETTWEETSCHEDULE', function ($event) {

                if ($event.response.res === 'OK') {
                    // console.log('リクエストに成功しました. AJAX_COMPLETE_GETTWEETSCHEDULE')
                    // console.dir($event.response.rst)
                    // console.dir($event.response.rst.length)
                    var result = $event.response.rst;
                    var length = $event.response.rst.length;
                    _this2.datas = [];
                    for (var i = 0; i < length; i++) {
                        //DBから取得したList情報をdatasに格納する
                        that.datas.push({ id: result[i]['id'], date: result[i]['date'], text: result[i]['text'], isDone: result[i]['done_flg'] });
                    }
                } else {
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, false);
                    var _message = _Store2.default.getMessage();
                    if (_message.msg !== '') {
                        _Controller2.default.emit_message(_message);
                    }
                }
            });
        },
        makeDatas: function makeDatas() {
            return this.datas;
        },
        deleteItem: function deleteItem(id) {
            var _this3 = this;

            _Controller2.default.deleteTweetSchedule_ajax(id.listId);
            _Controller2.default.$once('AJAX_COMPLETE_DELETETWEETSCHEDULE', function ($event) {

                if ($event.response.res === 'OK') {
                    // console.log('リクエストに成功しました. AJAX_COMPLETE_DELETETWEETSCHEDULE') 
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, true);
                    var _message2 = _Store2.default.getMessage();
                    if (_message2.msg !== '') {
                        _Controller2.default.emit_message(_message2);
                    }

                    _this3.datas = _lodash2.default.reject(_this3.datas, { 'id': id.listId });
                } else {
                    // console.log('リクエストに失敗しました')
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, false);
                    var _message3 = _Store2.default.getMessage();
                    if (_message3.msg !== '') {
                        _Controller2.default.emit_message(_message3);
                    }
                }
            });
        },
        addItem: function addItem(event) {
            var _this4 = this;

            var that = this;
            //日付、ツイート内容が空の場合
            if (this.yourValue === null || this.text === '') {
                _Store2.default.setMessage('ツイート時刻と内容を記入してください', false);
                var _message4 = _Store2.default.getMessage();
                if (_message4.msg !== '') {
                    _Controller2.default.emit_message(_message4);
                }
                return;
            }

            var now = new Date();
            var now_ms = now.getTime();
            var reserveTime = Date.parse(this.yourValue);
            // store.setReservedTime(reserveTime)
            this.reserveTimes = reserveTime;
            //何ms後にツイートをするのか
            var dif_time = reserveTime - now_ms;

            // console.log('reserveTime'+reserveTime)
            // console.log('now_ms'+now_ms)
            // console.log('dif_time:'+dif_time)
            //過去の時間を指定していた場合
            if (dif_time <= 0) {
                _Store2.default.setMessage('過去の時間は設定することができません', false);
                var _message5 = _Store2.default.getMessage();
                if (_message5.msg !== '') {
                    _Controller2.default.emit_message(_message5);
                }
                return;
            }
            //予約日時、ツイート内容をデータベースに保存する
            var id = this.getId(); //一意のidを発行しておく。このidをDBに保存する

            //予約情報をStoreに保存しておく。crontabfunc.vueで使う
            _Store2.default.setReservedItem(id, reserveTime, this.text);

            _Controller2.default.saveTweetSchedule_ajax(id, this.text, this.yourValue);
            _Controller2.default.$once('AJAX_COMPLETE_SAVETWEETSCHEDULE', function ($event) {

                if ($event.response.res === 'OK') {
                    // console.log('リクエストに成功しました. AJAX_COMPLETE_SAVETWEETSCHEDULE')
                    // console.dir($event.response)
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, true);
                    var _message6 = _Store2.default.getMessage();
                    if (_message6.msg !== '') {
                        _Controller2.default.emit_message(_message6);
                    }

                    //watchを開始 
                    _this4.$crontab.enableJob('tweetwatch');
                    _Store2.default.setCronStatus(true); //watch開始

                    //Listに追加
                    that.datas.push({ id: id, date: that.yourValue, text: that.text, isDone: false });
                } else {
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, false);
                    var _message7 = _Store2.default.getMessage();
                    if (_message7.msg !== '') {
                        _Controller2.default.emit_message(_message7);
                    }
                }
            });
        },

        getId: function getId() {
            var strong = 1000;
            return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16);
        }
    }

};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TweetTask = __webpack_require__(75);

var _TweetTask2 = _interopRequireDefault(_TweetTask);

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ['listItems'],
    components: {
        TweetItemsComponent: _TweetTask2.default
    },
    data: function data() {
        return {};
    },
    methods: {
        deleteItem: function deleteItem(id) {
            this.$emit('delete-item', { listId: id.item_id });
            this.datas = _lodash2.default.reject(this.datas, { 'id': id.item_id });
        }
    }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Vue from 'vue'


exports.default = {
    props: ['data'], //propsで受け取ったデータは関数内でthis.dataで使える
    data: function data() {
        return {
            classNameLi: {
                'c-listItem': true,
                'c-listItem--done': this.data.isDone === '1' ? true : false
            },
            classNameIcon: {
                'fa': true,
                'fa-calendar-check': this.data.isDone === '1' ? false : true,
                'fa-check-circle': this.data.isDone === '1' ? true : false
            }
        };
    },
    updated: function updated() {
        this.$set(this.classNameLi, 'c-listItem--done', this.data.isDone === '1' ? true : false);
        this.$set(this.classNameIcon, 'fa-calendar-check', this.data.isDone === '1' ? false : true);
        this.$set(this.classNameIcon, 'fa-check-circle', this.data.isDone === '1' ? true : false);
    },

    methods: {}

};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _InputForm = __webpack_require__(4);

var _InputForm2 = _interopRequireDefault(_InputForm);

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

var _Store = __webpack_require__(2);

var _Store2 = _interopRequireDefault(_Store);

var _message5 = __webpack_require__(5);

var _message6 = _interopRequireDefault(_message5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Vue from 'vue'
exports.default = {
    components: {
        InputForm: _InputForm2.default,
        Message: _message6.default
    },
    data: function data() {
        return {
            username: '',
            email: ''
        };
    },
    mounted: function mounted() {},
    methods: {
        onChange: function onChange($event) {
            var name = $event.input.name;
            if (name === "username") {
                this.username = $event.input.value;
            } else if (name === "email") {
                this.email = $event.input.value;
            }
        },
        makeRePassword: function makeRePassword() {
            var _this = this;

            if (this.email === '' || this.username === '') {
                //メッセージ表示
                _Store2.default.setMessage('未入力の項目があります', false);
                var _message = _Store2.default.getMessage();
                if (_message.msg !== '') {
                    _Controller2.default.emit_message(_message);
                }
                return;
            }

            var chkemail = this.validEmail();
            if (!chkemail) {
                //emailの形式でなかった場合
                //メッセージ表示
                _Store2.default.setMessage('Emailの形式で入力してください', false);
                var _message2 = _Store2.default.getMessage();
                if (_message2.msg !== '') {
                    _Controller2.default.emit_message(_message2);
                }
                return;
            }

            //usernameの半角英数字チェック
            var chkname = this.validhalf();
            if (!chkname) {
                //emailの形式でなかった場合
                //メッセージ表示
                _Store2.default.setMessage('半角英数字で入力してください', false);
                var _message3 = _Store2.default.getMessage();
                if (_message3.msg !== '') {
                    _Controller2.default.emit_message(_message3);
                }
                return;
            }

            _Controller2.default.passRemindSend_ajax(this.username, this.email);
            _Controller2.default.$once('AJAX_COMPLETE_PASSREMINDSEND', function ($event) {
                if ($event.response.res === 'OK') {
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, true);
                    _this.$router.push('/remindrecieve');
                } else {
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, false);
                    var _message4 = _Store2.default.getMessage();
                    if (_message4.msg !== '') {
                        _Controller2.default.emit_message(_message4);
                    }
                }
            });
        },
        validEmail: function validEmail() {
            var regexp = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
            if (this.email.match(regexp)) {
                return true;
            } else {
                return false;
            }
        },
        validhalf: function validhalf() {
            var regexp = new RegExp(/^[A-Za-z0-9]*$/);
            if (this.username.match(regexp)) {
                return true;
            } else {
                return false;
            }
        }
    }

}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _InputForm = __webpack_require__(4);

var _InputForm2 = _interopRequireDefault(_InputForm);

var _Controller = __webpack_require__(1);

var _Controller2 = _interopRequireDefault(_Controller);

var _Store = __webpack_require__(2);

var _Store2 = _interopRequireDefault(_Store);

var _message4 = __webpack_require__(5);

var _message5 = _interopRequireDefault(_message4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Vue from 'vue'
exports.default = {
    components: {
        InputForm: _InputForm2.default,
        Message: _message5.default
    },
    data: function data() {
        return {
            code: ''
        };
    },
    mounted: function mounted() {
        //メッセージがセットされていれば表示する
        var message = _Store2.default.getMessage();
        if (message.msg !== '') {
            _Controller2.default.emit_message(message);
        }
    },
    methods: {
        onChange: function onChange($event) {
            // console.log('event@PassRemindSend')
            this.code = $event.input.value;
        },
        makeRePassword: function makeRePassword() {
            var _this = this;

            if (this.code === '') {
                //メッセージ表示
                _Store2.default.setMessage('未入力です', false);
                var _message = _Store2.default.getMessage();
                if (_message.msg !== '') {
                    _Controller2.default.emit_message(_message);
                }
                return;
            }

            var chkcode = this.validhalf();
            if (!chkcode) {
                //emailの形式でなかった場合
                //メッセージ表示
                _Store2.default.setMessage('半角英数字を入力してください', false);
                var _message2 = _Store2.default.getMessage();
                if (_message2.msg !== '') {
                    _Controller2.default.emit_message(_message2);
                }
                return;
            }
            _Controller2.default.passRemindRecieve_ajax(this.code);
            _Controller2.default.$once('AJAX_COMPLETE_PASSREMINDRECIEVE', function ($event) {
                // console.log('フロントに帰ってきたデータ↓')
                if ($event.response.res === 'OK') {
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, true);
                    _this.$router.push('/');
                } else {
                    //メッセージ表示
                    _Store2.default.setMessage($event.response.msg, false);
                    var _message3 = _Store2.default.getMessage();
                    if (_message3.msg !== '') {
                        _Controller2.default.emit_message(_message3);
                    }
                }
            });
        },
        validhalf: function validhalf() {
            var regexp = new RegExp(/^[A-Za-z0-9]*$/);
            if (this.code.match(regexp)) {
                return true;
            } else {
                return false;
            }
        }
    }

}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    components: {},
    data: function data() {
        return {
            errors: []
        };
    },
    methods: {
        test: function test() {
            var a = [].concat(_toConsumableArray(this.errors));
            this.errors = { a: a, 'test': 230 };
        }
    }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _vueCrontab = __webpack_require__(9);

var _vueCrontab2 = _interopRequireDefault(_vueCrontab);

var _crontab = __webpack_require__(38);

var _crontab2 = _interopRequireDefault(_crontab);

var _router = __webpack_require__(40);

var _router2 = _interopRequireDefault(_router);

var _mainView = __webpack_require__(84);

var _mainView2 = _interopRequireDefault(_mainView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import App from './component/mainView.vue'

_vue2.default.use(_vueCrontab2.default);

new _vue2.default({
  el: '#app',
  router: _router2.default,
  render: function render(h) {
    return h(_mainView2.default);
  }
});

(0, _crontab2.default)();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueCrontab = __webpack_require__(9);

var _vueCrontab2 = _interopRequireDefault(_vueCrontab);

var _crontabfunc = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Vue from 'vue'
exports.default = function () {
  /* change the value of setInterval inside VueCrontab. */
  // VueCrontab.setOption({
  //   interval: 100,
  //   auto_start : false
  // })

  var result = _vueCrontab2.default.addJob([{
    name: 'tweetwatch',
    interval: {
      seconds: '/1'
    },
    job: _crontabfunc.tweetWatch
  }]);
  var result2 = _vueCrontab2.default.addJob([{
    name: 'startAutoLike',
    interval: {
      seconds: '/60' //1分ごとに実行する
    },
    job: _crontabfunc.startAutoLike
  }]);

  var result3 = _vueCrontab2.default.addJob([{
    name: 'startAutoFollow',
    interval: {
      seconds: '/1' //1s毎とするが、初めの一回実行されたあとすぐにdisableJobする      
    },
    job: _crontabfunc.startAutoFollow
  }]);

  var result4 = _vueCrontab2.default.addJob([{
    name: 'reStartAutoFollow',
    interval: {
      minutes: '/1' //15分後に開始する
    },
    job: _crontabfunc.reStartAutoFollow
  }]);

  var result5 = _vueCrontab2.default.addJob([{
    name: 'startAutoUnFollow',
    interval: {
      seconds: '/1'
    },
    job: _crontabfunc.startAutoUnFollow
  }]);
  _vueCrontab2.default.disableJob('tweetwatch');
  _vueCrontab2.default.disableJob('reStartAutoFollow');
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_crontabfunc_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_crontabfunc_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_crontabfunc_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_crontabfunc_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_crontabfunc_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_crontabfunc_vue___default.a,
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\crontabfunc.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bcaba042", Component.options)
  } else {
    hotAPI.reload("data-v-bcaba042", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(42);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _SignUp = __webpack_require__(43);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _SignIn = __webpack_require__(46);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _Home = __webpack_require__(49);

var _Home2 = _interopRequireDefault(_Home);

var _RegisterLikeWord = __webpack_require__(66);

var _RegisterLikeWord2 = _interopRequireDefault(_RegisterLikeWord);

var _RegisterFollowerSearchKeyword = __webpack_require__(68);

var _RegisterFollowerSearchKeyword2 = _interopRequireDefault(_RegisterFollowerSearchKeyword);

var _RegisterTargetAccount = __webpack_require__(70);

var _RegisterTargetAccount2 = _interopRequireDefault(_RegisterTargetAccount);

var _RegisterTweetSchedule = __webpack_require__(72);

var _RegisterTweetSchedule2 = _interopRequireDefault(_RegisterTweetSchedule);

var _passRemindSend = __webpack_require__(80);

var _passRemindSend2 = _interopRequireDefault(_passRemindSend);

var _passRemindRecieve = __webpack_require__(82);

var _passRemindRecieve2 = _interopRequireDefault(_passRemindRecieve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/signup',
        name: 'signup',
        component: _SignUp2.default
    }, {
        path: '/',
        name: 'signin',
        component: _SignIn2.default
    }, {
        path: '/home',
        name: 'home',
        component: _Home2.default
    }, {
        path: '/like',
        name: 'like',
        component: _RegisterLikeWord2.default
    }, {
        path: '/tweetschedule',
        name: 'twtschedule',
        component: _RegisterTweetSchedule2.default
    }, {
        path: '/keywords',
        name: 'keywords',
        component: _RegisterFollowerSearchKeyword2.default
    }, {
        path: '/target',
        name: 'target',
        component: _RegisterTargetAccount2.default
    }, {
        path: '/remindsend',
        name: 'remindsend',
        component: _passRemindSend2.default
    }, {
        path: '/remindrecieve',
        name: 'remindrecieve',
        component: _passRemindRecieve2.default
    }, {
        path: '*',
        component: _SignIn2.default
    }]
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41)))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignUp_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignUp_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignUp_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignUp_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignUp_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37d0ed98_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignUp_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignUp_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37d0ed98_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignUp_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37d0ed98_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignUp_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\SignUp.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37d0ed98", Component.options)
  } else {
    hotAPI.reload("data-v-37d0ed98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "c-input p-input__option" }, [
    _c("label", { staticClass: "c-input__label" }, [_vm._v(_vm._s(_vm.label))]),
    _vm._v(" "),
    _c("input", {
      staticClass: "c-input__txt p-like-input__txt",
      attrs: {
        type: _vm.type,
        name: _vm.name,
        placeholder: _vm.placeholder,
        autocomplete: "off"
      },
      on: {
        keyup: function($event) {
          return _vm.onChange($event)
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ebf9f62", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "l-subPage" }, [
    _c(
      "div",
      { staticClass: "c-form-wrap" },
      [
        _c("p", { staticClass: "c-heading p-heading__title txt_center" }, [
          _vm._v("ユーザー登録")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "p-error-area" }, [
          _c(
            "ul",
            [
              _c(
                "transition-group",
                { attrs: { name: "flip" } },
                [
                  _vm._l(_vm.errors.error, function(error) {
                    return [
                      _c("li", { key: error }, [_vm._v("・" + _vm._s(error))])
                    ]
                  })
                ],
                2
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("InputForm", {
          attrs: {
            type: "text",
            label: "ユーザー名*",
            name: "username",
            placeholder: "example"
          },
          on: {
            onChange: function($event) {
              return _vm.onChange($event)
            }
          }
        }),
        _vm._v(" "),
        _c("InputForm", {
          attrs: {
            type: "text",
            label: "Email*",
            name: "email",
            placeholder: "example@gmail.com"
          },
          on: {
            onChange: function($event) {
              return _vm.onChange($event)
            }
          }
        }),
        _vm._v(" "),
        _c("InputForm", {
          attrs: {
            type: "password",
            label: "パスワード*",
            name: "password",
            placeholder: ""
          },
          on: {
            onChange: function($event) {
              return _vm.onChange($event)
            }
          }
        }),
        _vm._v(" "),
        _c("InputForm", {
          attrs: {
            type: "password",
            label: "パスワード再入力*",
            name: "re_pass",
            placeholder: ""
          },
          on: {
            onChange: function($event) {
              return _vm.onChange($event)
            }
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "txt_center" }, [
      _c("button", { staticClass: "c-btn", on: { click: _vm.signUp } }, [
        _vm._v("登録")
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "c-form-wrap" },
      [
        _c("router-link", { staticClass: "c-link", attrs: { to: "/signin" } }, [
          _vm._v("ログイン画面へ")
        ]),
        _vm._v(" "),
        _c(
          "p",
          [
            _vm._v("パスワードを忘れた方は"),
            _c(
              "router-link",
              { staticClass: "c-link", attrs: { to: "/remindsend" } },
              [_vm._v("こちら")]
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-37d0ed98", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignIn_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignIn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignIn_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignIn_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignIn_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60fd9a84_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignIn_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignIn_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60fd9a84_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignIn_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60fd9a84_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignIn_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\SignIn.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60fd9a84", Component.options)
  } else {
    hotAPI.reload("data-v-60fd9a84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("transition", { attrs: { name: "flip" } }, [
        _vm.visible === true
          ? _c("div", { staticClass: "p-message-area" }, [
              _c("ul", [
                _vm.status === true
                  ? _c("li", { staticClass: "p-message-area__status" }, [
                      _c("i", { staticClass: "fas fa-info-circle" })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.status === false
                  ? _c("li", { staticClass: "p-message-area__status" }, [
                      _c("i", { staticClass: "fas fa-times-circle" })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("li", { staticClass: "p-message-area__msg" }, [
                  _c("p", { staticClass: "p-message-area_msg-val" }, [
                    _vm._v(_vm._s(_vm.msg))
                  ])
                ])
              ])
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-55de965b", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "l-subPage" },
    [
      _c("Message"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "c-form-wrap" },
        [
          _c("p", { staticClass: "c-heading p-heading__title txt_center" }, [
            _vm._v("ログイン")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "p-error-area" }, [
            _c(
              "ul",
              [
                _c(
                  "transition-group",
                  { attrs: { name: "flip" } },
                  [
                    _vm._l(_vm.errors.error, function(error) {
                      return [
                        _c("li", { key: error }, [_vm._v("・" + _vm._s(error))])
                      ]
                    })
                  ],
                  2
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("InputForm", {
            attrs: {
              type: "text",
              label: "ユーザー名*",
              name: "username",
              placeholder: "(例)kazukichi"
            },
            on: {
              onChange: function($event) {
                return _vm.onChange($event)
              }
            }
          }),
          _vm._v(" "),
          _c("InputForm", {
            attrs: {
              type: "password",
              label: "パスワード*",
              name: "password",
              placeholder: ""
            },
            on: {
              onChange: function($event) {
                return _vm.onChange($event)
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "txt_center" }, [
        _c("button", { staticClass: "c-btn", on: { click: _vm.signIn } }, [
          _vm._v("ログイン")
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "c-form-wrap" },
        [
          _c(
            "router-link",
            { staticClass: "c-link", attrs: { to: "/signup" } },
            [_c("span", [_vm._v("ユーザー登録画面へ")])]
          ),
          _vm._v(" "),
          _c(
            "p",
            [
              _vm._v("パスワードを忘れた方は"),
              _c(
                "router-link",
                { staticClass: "c-link", attrs: { to: "/remindsend" } },
                [_vm._v("こちら")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-60fd9a84", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66ba234a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66ba234a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66ba234a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66ba234a", Component.options)
  } else {
    hotAPI.reload("data-v-66ba234a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UserInfo_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UserInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UserInfo_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UserInfo_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UserInfo_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c8453cd6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UserInfo_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UserInfo_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c8453cd6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UserInfo_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c8453cd6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UserInfo_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\UserInfo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c8453cd6", Component.options)
  } else {
    hotAPI.reload("data-v-c8453cd6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "p-userInfo mb30" }, [
    _c("img", {
      staticClass: "p-userInfo__img",
      attrs: { src: _vm.img_url, alt: "" }
    }),
    _vm._v(" "),
    _c("p", { staticClass: "p-userInfo__name" }, [
      _vm._v(_vm._s(_vm.account_name))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "p-userInfo__profile mb10" }, [
      _c("p", [_vm._v(_vm._s(_vm.description))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "p-userInfo__head" }, [
      _c("ul", [
        _c("li", { staticClass: "p-userInfo__listitem-wrap" }, [
          _c("ul", { staticClass: "p-userInfo__list" }, [
            _c("li", { staticClass: "p-userInfo__listitem" }, [
              _vm._v(_vm._s(_vm.friends))
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "p-userInfo__listitem" }, [
              _vm._v("フォロー中")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "p-userInfo__listitem-wrap" }, [
          _c("ul", { staticClass: "p-userInfo__list" }, [
            _c("li", { staticClass: "p-userInfo__listitem" }, [
              _vm._v(_vm._s(_vm.follower))
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "p-userInfo__listitem" }, [
              _vm._v("フォロワー")
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "span",
      { staticClass: "p-userInfo__logout", on: { click: _vm.logout } },
      [_c("i", { staticClass: "fas fa-sign-out-alt" })]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c8453cd6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KeywordItem_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KeywordItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KeywordItem_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KeywordItem_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KeywordItem_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78262360_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_KeywordItem_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_KeywordItem_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78262360_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_KeywordItem_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78262360_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_KeywordItem_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\KeywordItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78262360", Component.options)
  } else {
    hotAPI.reload("data-v-78262360", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("li", { class: _vm.classNameLi }, [
      _vm.type === "like"
        ? _c("i", { class: _vm.HeartIcon })
        : _vm.type === "followersearch"
        ? _c("i", { class: _vm.SearchIcon })
        : _vm.type === "target"
        ? _c("i", { class: _vm.TargetIcon })
        : _vm._e(),
      _vm._v(" "),
      _vm.type === "target"
        ? _c(
            "span",
            {
              staticClass: "p-list__account",
              on: { click: _vm.OnMoveTwitterPage }
            },
            [_vm._v("@" + _vm._s(_vm.data.text))]
          )
        : _c("span", [_vm._v(_vm._s(_vm.data.text))]),
      _vm._v(" "),
      _c("i", {
        staticClass: "fa fa-trash c-garbage",
        on: {
          click: function($event) {
            return _vm.$emit("delete-item", { item_id: _vm.data.id })
          }
        }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-78262360", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.listItems, function(listItem) {
      return _c("KeywordComponent", {
        key: listItem.id,
        attrs: { data: listItem, type: _vm.type },
        on: {
          "delete-item": function($event) {
            return _vm.deleteItem($event)
          }
        }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-641b334a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Listitem_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Listitem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Listitem_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Listitem_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Listitem_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41f69b2d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Listitem_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Listitem_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41f69b2d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Listitem_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41f69b2d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Listitem_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\Listitem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41f69b2d", Component.options)
  } else {
    hotAPI.reload("data-v-41f69b2d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ListRecord_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ListRecord_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ListRecord_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ListRecord_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ListRecord_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0916e10b_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ListRecord_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ListRecord_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0916e10b_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ListRecord_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0916e10b_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ListRecord_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\ListRecord.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0916e10b", Component.options)
  } else {
    hotAPI.reload("data-v-0916e10b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "p-list" }, [
    _c(
      "span",
      { staticClass: "p-list__account", on: { click: _vm.onMoveTwitter } },
      [_vm._v(_vm._s(_vm.data.name))]
    ),
    _vm._v(" "),
    _c("span", { staticClass: "p-list__date" }, [
      _vm._v(_vm._s(_vm.data.created_at))
    ]),
    _vm._v(" "),
    _c("p", { staticClass: "p-list__content" }, [_vm._v(_vm._s(_vm.data.text))])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0916e10b", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "p-list-area" }, [
    _c("div", { staticClass: "p-heading-area" }, [
      _c(
        "p",
        {
          staticClass: "c-heading",
          class: _vm.classname,
          on: { click: _vm.onClick }
        },
        [_vm._v(_vm._s(_vm.heading))]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "p-list-wrap" },
      [
        _vm.heading === "follow"
          ? _c("div", { staticClass: "txt_right" }, [
              _c(
                "span",
                {
                  staticClass: "c-heading p-heading__follow p-list__keywordBtn",
                  on: { click: _vm.onClickKeyword }
                },
                [_vm._v("Keywords")]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.listItems, function(listItem) {
          return _c("Record", {
            key: listItem.id,
            attrs: { data: listItem, heading: _vm.heading }
          })
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-41f69b2d", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AuthAccount_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AuthAccount_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AuthAccount_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AuthAccount_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AuthAccount_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4da68899_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AuthAccount_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AuthAccount_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4da68899_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AuthAccount_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4da68899_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AuthAccount_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\AuthAccount.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4da68899", Component.options)
  } else {
    hotAPI.reload("data-v-4da68899", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AccountList_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AccountList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AccountList_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AccountList_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AccountList_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_895b62c2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AccountList_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AccountList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_895b62c2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AccountList_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_895b62c2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AccountList_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\AccountList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-895b62c2", Component.options)
  } else {
    hotAPI.reload("data-v-895b62c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Task_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Task_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Task_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Task_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Task_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5da927fe_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Task_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Task_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5da927fe_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Task_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5da927fe_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Task_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\Task.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5da927fe", Component.options)
  } else {
    hotAPI.reload("data-v-5da927fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("li", { class: _vm.classNameLi }, [
      _vm.listStyle === "person"
        ? _c("i", { class: _vm.classNameIconPerson })
        : _c("i", { class: _vm.classNameIcon, on: { click: _vm.toggleDone } }),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "p-sidebar__account", on: { click: _vm.changeUser } },
        [_vm._v(_vm._s(_vm.data.account))]
      ),
      _vm._v(" "),
      _c("i", {
        staticClass: "fa fa-trash c-garbage",
        on: {
          click: function($event) {
            return _vm.$emit("delete-item", { item_id: _vm.data.id })
          }
        }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5da927fe", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      _vm._l(_vm.listItems, function(listItem) {
        return _c("ItemsComponent", {
          key: listItem.id,
          attrs: {
            data: listItem,
            listStyle: "person",
            active_user: _vm.activeUser
          },
          on: {
            "delete-item": function($event) {
              return _vm.deleteItem($event)
            },
            "change-active-user": function($event) {
              return _vm.changeActiveUser($event)
            }
          }
        })
      }),
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-895b62c2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "l-subPage" },
    [
      _c("div", { staticClass: "txt_center" }, [
        _c(
          "button",
          { staticClass: "c-btn", on: { click: _vm.CertifyAccount } },
          [_vm._v("アカウント認証する")]
        )
      ]),
      _vm._v(" "),
      _vm.loading
        ? _c("div", { staticClass: "loading" }, [_vm._v("認証処理中...")])
        : _vm._e(),
      _vm._v(" "),
      _vm.error
        ? _c("div", { staticClass: "error" }, [_vm._v(_vm._s(_vm.error))])
        : _vm._e(),
      _vm._v(" "),
      _c("AccountListComponent", {
        attrs: { listItems: _vm.makeDatas() },
        on: {
          "delete-item": function($event) {
            return _vm.deleteItem($event)
          },
          "change-active-user": function($event) {
            return _vm.changeActiveUser($event)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4da68899", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "l-home" },
    [
      _c("Message"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "p-sidebar" },
        [
          _c("AuthAccount", {
            on: {
              "change-active-user": function($event) {
                return _vm.changeActiveUser($event)
              }
            }
          }),
          _vm._v(" "),
          _vm._m(0)
        ],
        1
      ),
      _vm._v(" "),
      _vm.show === true
        ? _c("UserInfo", {
            attrs: {
              follower: _vm.follower,
              friends: _vm.friends,
              account_name: _vm.account_name,
              description: _vm.description,
              img_url: _vm.img_url
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.show === true
        ? _c("div", [
            _c("div", { staticClass: "p-status-wrap" }, [
              _c("ul", [
                _c(
                  "li",
                  {
                    staticClass: "c-btn p-status__item",
                    class: _vm.p_follow_status_toggle,
                    on: { click: _vm.changeFollowCronStatus }
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("p", [
                      _vm.AutoFollowCronStatus === "0"
                        ? _c("span", [_vm._v("一時停止中...")])
                        : _vm.AutoFollowCronStatus === "1"
                        ? _c("span", [_vm._v("待機中...")])
                        : _vm.AutoFollowCronStatus === "2"
                        ? _c("span", [_vm._v("実行中...")])
                        : _vm._e()
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "c-btn p-status__item",
                    class: _vm.p_status_toggle,
                    on: { click: _vm.changeLikeCronStatus }
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("p", [
                      _vm.AutoLikeCronStatus === "0"
                        ? _c("span", [_vm._v("一時停止中...")])
                        : _vm.AutoLikeCronStatus === "1"
                        ? _c("span", [_vm._v("待機中...")])
                        : _vm.AutoLikeCronStatus === "2"
                        ? _c("span", [_vm._v("実行中...")])
                        : _vm._e()
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "c-btn p-status__item",
                    class: _vm.p_unfollow_status_toggle,
                    on: { click: _vm.changeUnFollowCronStatus }
                  },
                  [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("p", [
                      _vm.AutoUnFollowCronStatus === "0"
                        ? _c("span", [_vm._v("一時停止中...")])
                        : _vm.AutoUnFollowCronStatus === "1"
                        ? _c("span", [_vm._v("待機中...")])
                        : _vm.AutoUnFollowCronStatus === "2"
                        ? _c("span", [_vm._v("実行中...")])
                        : _vm._e()
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "c-btn p-status__item",
                    class: _vm.p_mail_status_toggle,
                    on: { click: _vm.changeMailStatus }
                  },
                  [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("p", [
                      _vm.MailStatus === "0"
                        ? _c("span", [_vm._v("配信OFF")])
                        : _vm.MailStatus === "1"
                        ? _c("span", [_vm._v("配信ON")])
                        : _vm._e()
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "p-main-area" },
              [
                _c("ListItem", {
                  attrs: {
                    heading: "follow",
                    classname: "p-heading__follow",
                    listItems: _vm.listItems_follow
                  }
                }),
                _vm._v(" "),
                _c("ListItem", {
                  attrs: {
                    heading: "like",
                    classname: "p-heading__like",
                    listItems: _vm.listItems_like
                  }
                }),
                _vm._v(" "),
                _c("ListItem", {
                  attrs: {
                    heading: "unFollow",
                    classname: "p-heading__unfollow",
                    listItems: _vm.listItems_unfollow
                  }
                }),
                _vm._v(" "),
                _c("ListItem", {
                  attrs: {
                    heading: "tweetschedule",
                    classname: "p-heading__twtschedule",
                    listItems: _vm.listItems_schedule
                  }
                })
              ],
              1
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "c-btn p-sidebar__btn js-toggle-window" },
      [_c("i", { staticClass: "fas fa-key" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "far fa-handshake" }),
      _vm._v(" follow")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("i", { staticClass: "fas fa-heart" }), _vm._v(" like")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "fas fa-heart-broken" }),
      _vm._v(" Unfollow")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "fas fa-paper-plane" }),
      _vm._v(" Mail")
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-66ba234a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterLikeWord_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterLikeWord_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterLikeWord_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterLikeWord_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterLikeWord_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e437000_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterLikeWord_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterLikeWord_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e437000_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterLikeWord_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e437000_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterLikeWord_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\RegisterLikeWord.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e437000", Component.options)
  } else {
    hotAPI.reload("data-v-3e437000", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show === true
    ? _c(
        "div",
        { staticClass: "l-subPage l-likePage" },
        [
          _c("Message"),
          _vm._v(" "),
          _c("div", { staticClass: "txt_center" }, [
            _c(
              "button",
              { staticClass: "c-btn c-moveTop", on: { click: _vm.moveTop } },
              [
                _c("i", { staticClass: "fas fa-home c-icon-home" }),
                _vm._v("HOME")
              ]
            ),
            _c("span", { staticClass: "c-title p-heading__like" }, [
              _vm._v("自動いいねキーワード登録")
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "select",
                {
                  staticClass: "select-init c-logicOption",
                  on: {
                    change: function($event) {
                      return _vm.onChangeOption($event)
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "" } }, [_vm._v("AND")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("OR")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("NOT")])
                ]
              ),
              _vm._v(" "),
              _c("InputForm", {
                attrs: {
                  type: "text",
                  label: "",
                  name: "text",
                  placeholder: "いいねキーワード"
                },
                on: {
                  onChange: function($event) {
                    return _vm.onChange($event)
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "txt_right" }, [
            _c("button", { staticClass: "c-btn", on: { click: _vm.addItem } }, [
              _vm._v("追加")
            ])
          ]),
          _vm._v(" "),
          _c("KeywordListComponent", {
            attrs: { listItems: _vm.datas, type: "like" },
            on: {
              "delete-item": function($event) {
                return _vm.deleteItem($event)
              }
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3e437000", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterFollowerSearchKeyword_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterFollowerSearchKeyword_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterFollowerSearchKeyword_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterFollowerSearchKeyword_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterFollowerSearchKeyword_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63124574_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterFollowerSearchKeyword_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterFollowerSearchKeyword_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63124574_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterFollowerSearchKeyword_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63124574_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterFollowerSearchKeyword_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\RegisterFollowerSearchKeyword.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63124574", Component.options)
  } else {
    hotAPI.reload("data-v-63124574", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show === true
    ? _c(
        "div",
        { staticClass: "l-subPage l-searchKeyPage" },
        [
          _c("Message"),
          _vm._v(" "),
          _c("div", { staticClass: "txt_center" }, [
            _c(
              "button",
              { staticClass: "c-btn c-moveTop", on: { click: _vm.moveTop } },
              [
                _c("i", { staticClass: "fas fa-home c-icon-home" }),
                _vm._v("HOME")
              ]
            ),
            _c("span", { staticClass: "c-title p-heading__follow" }, [
              _vm._v("フォロワーサーチキーワード登録")
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "select",
                {
                  staticClass: "select-init c-logicOption",
                  on: {
                    change: function($event) {
                      return _vm.onChangeOption($event)
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "" } }, [_vm._v("AND")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("OR")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("NOT")])
                ]
              ),
              _vm._v(" "),
              _c("InputForm", {
                attrs: {
                  type: "text",
                  label: "",
                  name: "text",
                  placeholder: "フォロワーサーチキーワード"
                },
                on: {
                  onChange: function($event) {
                    return _vm.onChange($event)
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "txt_right" }, [
            _c("button", { staticClass: "c-btn", on: { click: _vm.addItem } }, [
              _vm._v("追加")
            ])
          ]),
          _vm._v(" "),
          _c("KeywordListComponent", {
            attrs: { listItems: _vm.datas, type: "followersearch" },
            on: {
              "delete-item": function($event) {
                return _vm.deleteItem($event)
              }
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-63124574", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterTargetAccount_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterTargetAccount_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterTargetAccount_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterTargetAccount_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterTargetAccount_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b6e9ca6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterTargetAccount_vue__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterTargetAccount_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b6e9ca6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterTargetAccount_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b6e9ca6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterTargetAccount_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\RegisterTargetAccount.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9b6e9ca6", Component.options)
  } else {
    hotAPI.reload("data-v-9b6e9ca6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show === true
    ? _c(
        "div",
        { staticClass: "l-subPage p-targetacnt-wrap" },
        [
          _c("Message"),
          _vm._v(" "),
          _c("div", { staticClass: "txt_center" }, [
            _c(
              "button",
              { staticClass: "c-btn c-moveTop", on: { click: _vm.moveTop } },
              [
                _c("i", { staticClass: "fas fa-home c-icon-home" }),
                _vm._v("HOME")
              ]
            ),
            _c("span", { staticClass: "c-title p-heading__follow" }, [
              _vm._v("ターゲットアカウント登録")
            ])
          ]),
          _vm._v(" "),
          _c("InputForm", {
            attrs: {
              type: "text",
              label: "",
              name: "text",
              placeholder: "@のあとのアカウントIDを入力(例. kazukichi3110)"
            },
            on: {
              onChange: function($event) {
                return _vm.onChange($event)
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "txt_right" }, [
            _c("button", { staticClass: "c-btn", on: { click: _vm.addItem } }, [
              _vm._v("追加")
            ])
          ]),
          _vm._v(" "),
          _c("KeywordListComponent", {
            attrs: { listItems: _vm.datas, type: "target" },
            on: {
              "delete-item": function($event) {
                return _vm.deleteItem($event)
              }
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9b6e9ca6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterTweetSchedule_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterTweetSchedule_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterTweetSchedule_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterTweetSchedule_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterTweetSchedule_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_13b2a70e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterTweetSchedule_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterTweetSchedule_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_13b2a70e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterTweetSchedule_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_13b2a70e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterTweetSchedule_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\RegisterTweetSchedule.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13b2a70e", Component.options)
  } else {
    hotAPI.reload("data-v-13b2a70e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ScheduleList_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ScheduleList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ScheduleList_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ScheduleList_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ScheduleList_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37cc7e51_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ScheduleList_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ScheduleList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37cc7e51_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ScheduleList_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37cc7e51_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ScheduleList_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\ScheduleList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37cc7e51", Component.options)
  } else {
    hotAPI.reload("data-v-37cc7e51", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TweetTask_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TweetTask_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TweetTask_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TweetTask_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TweetTask_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0486d74a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TweetTask_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TweetTask_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0486d74a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TweetTask_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0486d74a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TweetTask_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\TweetTask.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0486d74a", Component.options)
  } else {
    hotAPI.reload("data-v-0486d74a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "p-list-autotwt" }, [
    _c("li", { class: _vm.classNameLi }, [
      _c("i", { class: _vm.classNameIcon }),
      _vm._v(" "),
      _c("ul", { staticClass: "p-list-autotwt__wrap" }, [
        _c("li", [
          _c("ul", [
            _c("li", { staticClass: "p-list-autotwt__date-ttl" }, [
              _vm._v("日付：")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "p-list-autotwt__date-val" }, [
              _vm._v(_vm._s(_vm.data.date))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("ul", [
            _c("li", { staticClass: "p-list-autotwt__content-ttl" }, [
              _vm._v("内容：")
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "p-list-autotwt__content-val" }, [
              _vm._v(_vm._s(_vm.data.text))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("i", {
        staticClass: "fa fa-trash c-garbage",
        on: {
          click: function($event) {
            return _vm.$emit("delete-item", { item_id: _vm.data.id })
          }
        }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0486d74a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      _vm._l(_vm.listItems, function(listItem) {
        return _c("TweetItemsComponent", {
          key: listItem.id,
          attrs: { data: listItem },
          on: {
            "delete-item": function($event) {
              return _vm.deleteItem($event)
            }
          }
        })
      }),
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-37cc7e51", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("vue-ctk-date-time-picker");

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show === true
    ? _c(
        "div",
        { staticClass: "l-subPage p-autotwt-wrap" },
        [
          _c("Message"),
          _vm._v(" "),
          _c("div", { staticClass: "txt_center" }, [
            _c(
              "button",
              { staticClass: "c-btn c-moveTop", on: { click: _vm.moveTop } },
              [
                _c("i", { staticClass: "fas fa-home c-icon-home" }),
                _vm._v("HOME")
              ]
            ),
            _c("span", { staticClass: "c-title p-heading__twtschedule" }, [
              _vm._v("自動ツイート設定")
            ])
          ]),
          _vm._v(" "),
          _c("VueCtkDateTimePicker", {
            attrs: {
              "minute-interval": 1,
              format: "YYYY-MM-DD HH:mm",
              overlay: true,
              "min-date": _vm.start,
              "max-date": _vm.end
            },
            model: {
              value: _vm.yourValue,
              callback: function($$v) {
                _vm.yourValue = $$v
              },
              expression: "yourValue"
            }
          }),
          _vm._v(" "),
          _c("InputForm", {
            attrs: {
              type: "text",
              label: "内容",
              name: "text",
              placeholder: "この内容をツイートします"
            },
            on: {
              onChange: function($event) {
                return _vm.onChange($event)
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "txt_right" }, [
            _c("button", { staticClass: "c-btn", on: { click: _vm.addItem } }, [
              _vm._v("追加")
            ])
          ]),
          _vm._v(" "),
          _c("ScheduleListComponent", {
            attrs: { listItems: _vm.datas },
            on: {
              "delete-item": function($event) {
                return _vm.deleteItem($event)
              }
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-13b2a70e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_passRemindSend_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_passRemindSend_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_passRemindSend_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_passRemindSend_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_passRemindSend_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_297991fa_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_passRemindSend_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_passRemindSend_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_297991fa_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_passRemindSend_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_297991fa_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_passRemindSend_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\passRemindSend.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-297991fa", Component.options)
  } else {
    hotAPI.reload("data-v-297991fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "l-subPage" },
    [
      _c("Message"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "c-form-wrap" },
        [
          _c("p", { staticClass: "c-heading p-heading__title txt_center" }, [
            _vm._v("認証コード生成")
          ]),
          _vm._v(" "),
          _c("InputForm", {
            attrs: { type: "text", label: "ユーザー名*", name: "username" },
            on: {
              onChange: function($event) {
                return _vm.onChange($event)
              }
            }
          }),
          _vm._v(" "),
          _c("InputForm", {
            attrs: { type: "text", label: "メールアドレス*", name: "email" },
            on: {
              onChange: function($event) {
                return _vm.onChange($event)
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "txt_center" }, [
        _c(
          "button",
          { staticClass: "c-btn", on: { click: _vm.makeRePassword } },
          [_vm._v("生成する")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "c-form-wrap" },
        [
          _c(
            "router-link",
            { staticClass: "c-link", attrs: { to: "/signin" } },
            [_vm._v("ログイン画面へ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-297991fa", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_passRemindRecieve_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_passRemindRecieve_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_passRemindRecieve_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_passRemindRecieve_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_passRemindRecieve_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b5e2f4e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_passRemindRecieve_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_passRemindRecieve_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b5e2f4e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_passRemindRecieve_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b5e2f4e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_passRemindRecieve_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\passRemindRecieve.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b5e2f4e", Component.options)
  } else {
    hotAPI.reload("data-v-2b5e2f4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "l-subPage" },
    [
      _c("Message"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "c-form-wrap" },
        [
          _c("p", { staticClass: "c-heading p-heading__title txt_center" }, [
            _vm._v("パスワード再発行")
          ]),
          _vm._v(" "),
          _c("InputForm", {
            attrs: { type: "text", label: "認証コード*", name: "username" },
            on: {
              onChange: function($event) {
                return _vm.onChange($event)
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "txt_center" }, [
        _c(
          "button",
          { staticClass: "c-btn", on: { click: _vm.makeRePassword } },
          [_vm._v("再発行する")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "c-form-wrap" },
        [
          _c(
            "router-link",
            { staticClass: "c-link", attrs: { to: "/signin" } },
            [_vm._v("ログイン画面へ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2b5e2f4e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mainView_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mainView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mainView_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mainView_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mainView_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cd9f484c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_mainView_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_mainView_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cd9f484c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_mainView_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cd9f484c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_mainView_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\js\\component\\mainView.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cd9f484c", Component.options)
  } else {
    hotAPI.reload("data-v-cd9f484c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "ul",
        [
          _c(
            "transition-group",
            { attrs: { name: "flip" } },
            [
              _vm._l(_vm.errors, function(error) {
                return [
                  _c("li", { key: error, staticClass: "info-area" }, [
                    _vm._v(_vm._s(error))
                  ])
                ]
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cd9f484c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDQ2ZmZhZjAyNDE5N2FlZTgxN2JlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvQ29udHJvbGxlci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9TdG9yZS52dWUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9JbnB1dEZvcm0udnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvbWVzc2FnZS52dWUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvS2V5d29yZExpc3QudnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS1jcm9udGFiXCIiLCJ3ZWJwYWNrOi8vL2Nyb250YWJmdW5jLnZ1ZSIsIndlYnBhY2s6Ly8vU3RvcmUudnVlIiwid2VicGFjazovLy9Db250cm9sbGVyLnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9TaWduVXAudnVlIiwid2VicGFjazovLy9JbnB1dEZvcm0udnVlIiwid2VicGFjazovLy9TaWduSW4udnVlIiwid2VicGFjazovLy9tZXNzYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vSG9tZS52dWUiLCJ3ZWJwYWNrOi8vL1VzZXJJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vS2V5d29yZExpc3QudnVlIiwid2VicGFjazovLy9LZXl3b3JkSXRlbS52dWUiLCJ3ZWJwYWNrOi8vL0xpc3RpdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vTGlzdFJlY29yZC52dWUiLCJ3ZWJwYWNrOi8vL0F1dGhBY2NvdW50LnZ1ZSIsIndlYnBhY2s6Ly8vQWNjb3VudExpc3QudnVlIiwid2VicGFjazovLy9UYXNrLnZ1ZSIsIndlYnBhY2s6Ly8vUmVnaXN0ZXJMaWtlV29yZC52dWUiLCJ3ZWJwYWNrOi8vL1JlZ2lzdGVyRm9sbG93ZXJTZWFyY2hLZXl3b3JkLnZ1ZSIsIndlYnBhY2s6Ly8vUmVnaXN0ZXJUYXJnZXRBY2NvdW50LnZ1ZSIsIndlYnBhY2s6Ly8vUmVnaXN0ZXJUd2VldFNjaGVkdWxlLnZ1ZSIsIndlYnBhY2s6Ly8vU2NoZWR1bGVMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vVHdlZXRUYXNrLnZ1ZSIsIndlYnBhY2s6Ly8vcGFzc1JlbWluZFNlbmQudnVlIiwid2VicGFjazovLy9wYXNzUmVtaW5kUmVjaWV2ZS52dWUiLCJ3ZWJwYWNrOi8vL21haW5WaWV3LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudC9jcm9udGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvY3JvbnRhYmZ1bmMudnVlIiwid2VicGFjazovLy9zcmMvanMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXJvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvU2lnblVwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L0lucHV0Rm9ybS52dWU/NWQ2NyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L1NpZ25VcC52dWU/NzNkNCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L1NpZ25Jbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9tZXNzYWdlLnZ1ZT8wMWE4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvU2lnbkluLnZ1ZT9hODk0Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9Vc2VySW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9Vc2VySW5mby52dWU/YjBkZCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L0tleXdvcmRJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L0tleXdvcmRJdGVtLnZ1ZT8xZTBhIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvS2V5d29yZExpc3QudnVlPzg5YTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9MaXN0aXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9MaXN0UmVjb3JkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L0xpc3RSZWNvcmQudnVlPzhhZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9MaXN0aXRlbS52dWU/N2UzZiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L0F1dGhBY2NvdW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L0FjY291bnRMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L1Rhc2sudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvVGFzay52dWU/OTA2OCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L0FjY291bnRMaXN0LnZ1ZT82NjVlIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvQXV0aEFjY291bnQudnVlP2QwMjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9Ib21lLnZ1ZT8wMzJhIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvUmVnaXN0ZXJMaWtlV29yZC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9SZWdpc3Rlckxpa2VXb3JkLnZ1ZT8yNDhhIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvUmVnaXN0ZXJGb2xsb3dlclNlYXJjaEtleXdvcmQudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvUmVnaXN0ZXJGb2xsb3dlclNlYXJjaEtleXdvcmQudnVlPzlkMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9SZWdpc3RlclRhcmdldEFjY291bnQudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvUmVnaXN0ZXJUYXJnZXRBY2NvdW50LnZ1ZT81MTIzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvUmVnaXN0ZXJUd2VldFNjaGVkdWxlLnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L1NjaGVkdWxlTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9Ud2VldFRhc2sudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvVHdlZXRUYXNrLnZ1ZT84YjI3Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvU2NoZWR1bGVMaXN0LnZ1ZT9kYzFhIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS1jdGstZGF0ZS10aW1lLXBpY2tlclwiIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvUmVnaXN0ZXJUd2VldFNjaGVkdWxlLnZ1ZT8zZGZiIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvcGFzc1JlbWluZFNlbmQudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvcGFzc1JlbWluZFNlbmQudnVlPzAwYmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9wYXNzUmVtaW5kUmVjaWV2ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9wYXNzUmVtaW5kUmVjaWV2ZS52dWU/MDU0NiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L21haW5WaWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L21haW5WaWV3LnZ1ZT9kOWJlIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NmZmYWYwMjQxOTdhZWU4MTdiZSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIHNjcmlwdEV4cG9ydHMgPSBzY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzY3JpcHRFeHBvcnRzID0gc2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db250cm9sbGVyLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29udHJvbGxlci52dWVcIlxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV9yZW5kZXJfXywgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX1xuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyY1xcXFxqc1xcXFxjb21wb25lbnRcXFxcQ29udHJvbGxlci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjBlNTQ4ZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02MGU1NDhkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb21wb25lbnQvQ29udHJvbGxlci52dWVcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2Vcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU3RvcmUudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TdG9yZS52dWVcIlxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV9yZW5kZXJfXywgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX1xuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyY1xcXFxqc1xcXFxjb21wb25lbnRcXFxcU3RvcmUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTllMTk1ZGQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOWUxOTVkZDZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY29tcG9uZW50L1N0b3JlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbnB1dEZvcm0udnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbnB1dEZvcm0udnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVlYmY5ZjYyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0lucHV0Rm9ybS52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyY1xcXFxqc1xcXFxjb21wb25lbnRcXFxcSW5wdXRGb3JtLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZWJmOWY2MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlYmY5ZjYyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NvbXBvbmVudC9JbnB1dEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL21lc3NhZ2UudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9tZXNzYWdlLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01NWRlOTY1YlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9tZXNzYWdlLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjXFxcXGpzXFxcXGNvbXBvbmVudFxcXFxtZXNzYWdlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NWRlOTY1YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU1ZGU5NjViXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NvbXBvbmVudC9tZXNzYWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2dWVcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0tleXdvcmRMaXN0LnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vS2V5d29yZExpc3QudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY0MWIzMzRhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0tleXdvcmRMaXN0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjXFxcXGpzXFxcXGNvbXBvbmVudFxcXFxLZXl3b3JkTGlzdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjQxYjMzNGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02NDFiMzM0YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb21wb25lbnQvS2V5d29yZExpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS1jcm9udGFiXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidnVlLWNyb250YWJcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8c2NyaXB0PlxyXG5cclxuZXhwb3J0IHt0d2VldFdhdGNoLCBzdGFydEF1dG9MaWtlLCBzdGFydEF1dG9Gb2xsb3csIHJlU3RhcnRBdXRvRm9sbG93LCBzdGFydEF1dG9VbkZvbGxvd31cclxuXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL1N0b3JlLnZ1ZSdcclxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVyLnZ1ZSdcclxuaW1wb3J0IFZ1ZUNyb250YWIgZnJvbSAndnVlLWNyb250YWInXHJcblxyXG5mdW5jdGlvbiB0d2VldFdhdGNoKCkge1xyXG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgIGxldCBub3dfbXMgPSBub3cuZ2V0VGltZSgpO1xyXG5cclxuICAgIC8vc3RvcmXjgYvjgonkuojntITmg4XloLHjgpLlj5blvpfjgZnjgotcclxuICAgIC8vcmVzZXJ2ZWRJdGVtIDoge2lkOnh4eCxyZXNlcnZlVGltZTp4eHgsdGV4dDp4eHh9XHJcbiAgICBsZXQgcmVzZXJ2ZWRJdGVtID0gc3RvcmUuZ2V0UmVzZXJ2ZWRJdGVtKClcclxuXHJcbiAgICBsZXQgcmVzZXJ2ZVRpbWUgPSByZXNlcnZlZEl0ZW0ucmVzZXJ2ZVRpbWVcclxuICAgIGxldCBkaWZfdGltZSA9IHJlc2VydmVUaW1lIC0gbm93X21zICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2coJ+ODhOOCpOODvOODiOS6iOe0hOOAgOW+heapn+S4rScpXHJcbiAgICBpZihyZXNlcnZlVGltZSA8IG5vd19tcykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfjg4TjgqTjg7zjg4jjgZfjgb7jgZknKVxyXG4gICAgICAgIFZ1ZUNyb250YWIuZGlzYWJsZUpvYigndHdlZXR3YXRjaCcpXHJcblxyXG4gICAgICAgIC8v44OE44Kk44O844OI44KS44K144O844OQ44O844Gr44Oq44Kv44Ko44K544OI44GZ44KLICAgICAgICBcclxuICAgICAgICBjb250cm9sbGVyLnR3ZWV0X2FqYXgocmVzZXJ2ZWRJdGVtLmlkLCByZXNlcnZlZEl0ZW0udGV4dCkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29udHJvbGxlci4kb24oJ0FKQVhfQ09NUExFVEVfVFdFRVQnLCAoJGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UucmVzID09PSAnT0snKXtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfjg6rjgq/jgqjjgrnjg4jjgavmiJDlip/jgZfjgb7jgZfjgZ8uIEFKQVhfQ09NUExFVEVfVFdFRVQnKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoJGV2ZW50LnJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoYXQuZGF0YXMgdXBkYXRl5ZG844G25YmNJylcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMudXBkYXRlRGF0YXMoKVxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCB0cnVlKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfjg6rjgq/jgqjjgrnjg4jjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKVxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgn5LqI57SE44OE44Kk44O844OI44Gr5aSx5pWX44GX44G+44GX44Gf44CC44ON44OD44OI44Ov44O844Kv566h55CG6ICF44Gr5ZWP44GE5ZCI44KP44Gb44Gm44GP44Gg44GV44GE44CCJywgZmFsc2UpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfSkgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4vL+iHquWLleODleOCqeODreODvOOCkumWi+Wni+OBmeOCi1xyXG5mdW5jdGlvbiBzdGFydEF1dG9Gb2xsb3coKSB7ICAgXHJcbiAgICAvL+iHquWLleODleOCqeODreODvOWLleS9nOadoeS7tlxyXG4gICAgLy/vvJHvvI7oh6rli5Xjg5Xjgqnjg63jg7zjgYzjgIzlvoXmqZ/kuK3jgI3jgafjgYLjgotcclxuICAgIC8v77yS77yO6Ieq5YuV44GE44GE44Gt44GM5YuV5L2c5Lit44Gn44Gq44GEXHJcbiAgICBpZihzdG9yZS5nZXRBdXRvRm9sbG93Q3JvblN0YXR1cygpID09PSAnMScgJiYgc3RvcmUuZ2V0QXV0b0xpa2VDcm9uU3RhdHVzKCkgIT09ICcyJyl7XHJcblxyXG4gICAgICAgIC8v6Ieq5YuV44OV44Kp44Ot44O844KS5YaN6ZaL44GZ44KLXHJcbiAgICAgICAgY29udHJvbGxlci5zdGFydEF1dG9Gb2xsb3dfYWpheCgpIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vMeW6puOBruWun+aWveOBp+WNgeWIhuOBquOBruOBp+OAgTHluqblrp/mlr3jgZfjgZ/jgonlgZzmraLjgZnjgotcclxuICAgICAgICBWdWVDcm9udGFiLmRpc2FibGVKb2IoJ3N0YXJ0QXV0b0ZvbGxvdycpICBcclxuICAgICAgICBcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfoh6rli5Xjg5Xjgqnjg63jg7znm6PoppbkuK3jgafjgZknKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi8v6Ieq5YuV44OV44Kp44Ot44O844KSMTXliIblvozjgavlho3plovjgZnjgovplqLmlbBcclxuZnVuY3Rpb24gcmVTdGFydEF1dG9Gb2xsb3coKSB7XHJcblxyXG4gICAgLy/oh6rli5Xjg5Xjgqnjg63jg7zlho3plovplqLmlbDjgpLlrp/ooYznirbmhYvjgavoqK3lrprjgZnjgotcclxuICAgIHN0b3JlLnNldFJlc3RhcnRBdXRvRm9sbG93Q3JvblN0YXR1cyh0cnVlKVxyXG5cclxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpXHJcbiAgICBsZXQgbm93X21zID0gbm93LmdldFRpbWUoKTtcclxuXHJcbiAgICAvL3N0b3Jl44GL44KJ5qyh44Gu44OV44Kp44Ot44O86ZaL5aeL5pmC6ZaT44KS5Y+W5b6X44GZ44KLXHJcbiAgICBjb25zdCByZUZvbGxvd1RpbWUgPSBzdG9yZS5nZXROZXh0Rm9sbG93VGltZSgpXHJcbiAgICBjb25zdCBuZXh0Rm9sbG93VGltZSA9IHJlRm9sbG93VGltZS5uZXh0XHJcbiAgICBcclxuICAgIGxldCBkaWZfdGltZSA9IG5leHRGb2xsb3dUaW1lIC0gbm93X21zXHJcbiAgICAvLyBzdG9yZS5zZXROZXh0Rm9sbG93VGltZShkaWZfdGltZSwgbm93X21zKSAgICBcclxuICAgIGNvbnNvbGUubG9nKCfmrKHjga7oh6rli5Xjg5Xjgqnjg63jg7zjgb7jgac9PicrZGlmX3RpbWUpXHJcblxyXG4gICAgaWYobmV4dEZvbGxvd1RpbWUgPCBub3dfbXMpIHtcclxuXHJcbiAgICAgICAgLy/oh6rli5Xjg5Xjgqnjg63jg7zli5XkvZzmnaHku7ZcclxuICAgICAgICAvL++8ke+8juiHquWLleODleOCqeODreODvOOBjOOAjOW+heapn+S4reOAjeOBp+OBguOCi1xyXG4gICAgICAgIC8v77yS77yO6Ieq5YuV44GE44GE44Gt44GM5YuV5L2c5Lit44Gn44Gq44GEXHJcbiAgICAgICAgaWYoc3RvcmUuZ2V0QXV0b0ZvbGxvd0Nyb25TdGF0dXMoKSA9PT0gJzEnICYmIHN0b3JlLmdldEF1dG9MaWtlQ3JvblN0YXR1cygpICE9PSAnMicpe1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8v6Ieq5YuV44OV44Kp44Ot44O844KS5YaN6ZaL44GZ44KLXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuc3RhcnRBdXRvRm9sbG93X2FqYXgoKSBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vMTXliIblvozjgasx5bqm44Gu5a6f5pa944Gn5Y2B5YiG44Gq44Gu44Gn44CBMeW6puWun+aWveOBl+OBn+OCieWBnOatouOBmeOCi1xyXG4gICAgICAgICAgICBWdWVDcm9udGFiLmRpc2FibGVKb2IoJ3JlU3RhcnRBdXRvRm9sbG93JykgIFxyXG4gICAgICAgICAgICAvL+iHquWLleODleOCqeODreODvOWGjemWi+mWouaVsOOCkuWBnOatoueKtuaFi+OBq+ioreWumuOBmeOCi1xyXG4gICAgICAgICAgICBzdG9yZS5zZXRSZXN0YXJ0QXV0b0ZvbGxvd0Nyb25TdGF0dXMoZmFsc2UpXHJcbiAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+iHquWLleODleOCqeODreODvOWGjemWi+ebo+imluS4reOBp+OBmScpXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydEF1dG9MaWtlKCkge1xyXG4gICAgXHJcbiAgICAvL+iHquWLleOBhOOBhOOBreWLleS9nOadoeS7tlxyXG4gICAgLy/vvJHvvI7oh6rli5Xjg5Xjgqnjg63jg7zjgYzli5XkvZzjgZfjgabjgYTjgarjgYRcclxuICAgIC8v77yS77yO6Ieq5YuV44Ki44Oz44OV44Kp44Ot44O844GM5YuV5L2c44GX44Gm44GE44Gq44GEXHJcbiAgICAvL++8k++8juiHquWLleOBhOOBhOOBreOBjOOAjOW+heapn+S4reOAjeOBp+OBguOCi1xyXG4gICAgaWYoc3RvcmUuZ2V0QXV0b0xpa2VDcm9uU3RhdHVzKCkgPT09ICcxJyAmJiBzdG9yZS5nZXRBdXRvRm9sbG93Q3JvblN0YXR1cygpICE9PSAnMicgJiYgc3RvcmUuZ2V0QXV0b1VuRm9sbG93Q3JvblN0YXR1cygpICE9PSAnMicpeyAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXJ0QXV0b0xpa2Xli5XkvZzkuK0nKVxyXG4gICAgICAgIGNvbnRyb2xsZXIuc3RhcnRBdXRvTGlrZV9hamF4KClcclxuXHJcbiAgICAgICAgLy/ku6XkuIvjga7li5XkvZzjgYTjgovvvJ9cclxuICAgICAgICBjb250cm9sbGVyLiRvbmNlKCdBSkFYX0NPTVBMRVRFX0FVVE9MSUtFJywgKCRldmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ09LJyl7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn44Oq44Kv44Ko44K544OI44Gr5oiQ5Yqf44GX44G+44GX44GfLiBBSkFYX0NPTVBMRVRFX0FVVE9MSUtFJylcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKCRldmVudC5yZXNwb25zZS5yc3QpICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCRldmVudC5yZXNwb25zZS5tc2csIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+iHquWLleOBhOOBhOOBreebo+imluS4rScpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL+iHquWLleOCouODs+ODleOCqeODreODvOOCkumWi+Wni+OBmeOCi1xyXG5mdW5jdGlvbiBzdGFydEF1dG9VbkZvbGxvdygpIHsgICBcclxuXHJcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKVxyXG4gICAgbGV0IG5vd19tcyA9IG5vdy5nZXRUaW1lKCk7XHJcblxyXG4gICAgLy9zdG9yZeOBi+OCieasoeOBruODleOCqeODreODvOmWi+Wni+aZgumWk+OCkuWPluW+l+OBmeOCi1xyXG4gICAgY29uc3QgVW5Gb2xsb3dUaW1lID0gc3RvcmUuZ2V0TmV4dFVuRm9sbG93VGltZSgpXHJcbiAgICBcclxuICAgIGxldCBkaWZfdGltZSA9IFVuRm9sbG93VGltZSAtIG5vd19tcyAgICBcclxuICAgIFxyXG4gICAgLy81MDAw5Lq65Lul5LiK44Gr44Gq44Gj44Gf44KJ44Ki44Oz44OV44Kp44Ot44O844GZ44KLXHJcbiAgICAvL+OCouODs+ODleOCqeODreODvOOBrzE15YiG44Gv5pyA5L2O44GC44GR44KL77yI44Ki44Oz44OV44Kp44Ot44O844KS44GX44Gm44KCNTAwMOS6uuOCkuOBl+OBn+WbnuOCieOBquOBhOWgtOWQiOOBq+OCouODs+ODleOCqeODreODvOOBjOS9leW6puOCgue5sOOCiui/lOOBleOCjOOBpuOBl+OBvuOBhuOBn+OCge+8iVxyXG4gICAgaWYoc3RvcmUuZ2V0RnJpZW5kc0NvdW50KCkgPiA1MDAwICYmIChVbkZvbGxvd1RpbWUgPCBub3dfbXMpICYmIHN0b3JlLmdldEF1dG9VbkZvbGxvd0Nyb25TdGF0dXMoKSA9PT0gJzEnKXtcclxuXHJcbiAgICAgICAgLy/oh6rli5XjgqLjg7Pjg5Xjgqnjg63jg7zjgpLplovlp4vjgZnjgotcclxuICAgICAgICBjb250cm9sbGVyLnN0YXJ0QXV0b1VuRm9sbG93X2FqYXgoKSBcclxuICAgICAgICBcclxuICAgICAgICAvL+iHquWLleOCouODs+ODleOCqeODreODvOWun+ihjOS4reOBr+WBnOatouOBmeOCi1xyXG4gICAgICAgIFZ1ZUNyb250YWIuZGlzYWJsZUpvYignc3RhcnRBdXRvVW5Gb2xsb3cnKSAgXHJcbiAgICAgICAgXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn6Ieq5YuV44Ki44Oz44OV44Kp44Ot44O855uj6KaW5Lit44Gn44GZID0+ZGlmX3RpbWU6JytkaWZfdGltZSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY3JvbnRhYmZ1bmMudnVlIiwiPHNjcmlwdD5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuIyBDb250cm9sbGVy55SodnVl44Kk44Oz44K544K/44Oz44K5XHJcbueUu+mdouOBqOODkOODg+OCr+OCqOODs+ODie+8iGZ1ZWxwaHDvvInjgajjga7mqYvmuKHjgZfjga7lvbnlibJcclxu55S76Z2i44GL44KJRELjgbjjga7jgqLjgq/jgrvjgrnjga/jgZPjga7jgq/jg6njgrnjgpLpgJrjgZlcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbmltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuXHJcbi8vIFZ1ZS5qcyDjga7jgqTjg7Pjgrnjgr/jg7PjgrlcclxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVnVlKHtcclxuICBkYXRhOiB7XHJcbiAgICAvLyDjg6Hjg4Pjgrvjg7zjgrjmoLzntI3nlKhcclxuICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICBtc2c6ICcnLFxyXG4gICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgICBJc3R3ZWV0d2F0Y2hKb2JFeGVjOiBmYWxzZSwgLy9jcm9u44GM5YuV5L2c5Lit44GL44Gp44GG44GL77yIdHJ1ZTog6Ieq5YuV44OE44Kk44O844OI44Gud2F0Y2jjgYzli5XkvZzkuK3jgIBmYWxzZTrli5XkvZzjgZfjgabjgYTjgarjgYTvvIlcclxuICAgICAgSXNyZXN0YXJ0QXV0b0ZvbGxvd0pvYkV4ZWM6IGZhbHNlLCAvL2Nyb27jgYzli5XkvZzkuK3jgYvjganjgYbjgYtcclxuICAgICAgSXNTdGFydEF1dG9Gb2xsb3dKb2JFeGVjOiBmYWxzZSwgLy9jcm9u44GM5YuV5L2c5Lit44GL44Gp44GG44GLXHJcbiAgICAgIElzQXV0b0xpa2VFeGVjOiAnMCcsIC8vY3JvbuOBjOWLleS9nOS4reOBi+OBqeOBhuOBiyAwOuWBnOatouS4reOAgDE65b6F5qmf5Lit44CAMjrlrp/ooYzkuK1cclxuICAgICAgSXNBdXRvRm9sbG93RXhlYzogJzAnLCAvL2Nyb27jgYzli5XkvZzkuK3jgYvjganjgYbjgYsgMDrlgZzmraLkuK3jgIAxOuW+heapn+S4reOAgDI65a6f6KGM5LitXHJcbiAgICAgIElzQXV0b1VuRm9sbG93RXhlYzogJzAnLCAvL2Nyb27jgYzli5XkvZzkuK3jgYvjganjgYbjgYsgMDrlgZzmraLkuK3jgIAxOuW+heapn+S4reOAgDI65a6f6KGM5LitXHJcbiAgICAgIElzTWFpbEV4ZWM6ICcwJywgLy9jcm9u44GM5YuV5L2c5Lit44GL44Gp44GG44GLIDA66YWN5L+hT0ZG44CAMTrphY3kv6FPTlxyXG4gICAgICByZXNlcnZlZFRpbWU6IG51bGwsXHJcbiAgICAgIHJlc2VydmVJdGVtOiB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgcmVzZXJ2ZVRpbWU6IG51bGwsXHJcbiAgICAgICAgdGV4dDogbnVsbFxyXG4gICAgICB9LFxyXG4gICAgICByZUZvbGxvd1RpbWU6IHtcclxuICAgICAgICBub3c6bnVsbCxcclxuICAgICAgICBuZXh0Om51bGxcclxuICAgICAgfSxcclxuICAgICAgZnJpZW5kc19jb3VudDowLFxyXG4gICAgICBVbkZvbGxvd1RpbWU6bnVsbCxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8vIEFqYXjpgJrkv6HjgadKc29u44KS5Y+W5b6X44GX44CB54m55a6a44Gu44OX44Ot44OR44OG44Kj44Gr5qC857SN44GZ44KLXHJcbiAgICAvLyDlj5blvpfjgZfjgZ/jgokgR0VUX0FKQVhfQ09NUExFVEUg44Gn6YCa55+l44GZ44KLXHJcbiAgICBnZXRNZXNzYWdlKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZ2V0TWVzc2FnZScpXHJcbiAgICAgICAgY29uc3QgbXNnID0gdGhpcy5tZXNzYWdlXHJcbiAgICAgICAgLy9tZXNzYWdl5Yid5pyf5YyWXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0ge21zZzogJycsIHN0YXR1czpmYWxzZX1cclxuICAgICAgICBjb25zb2xlLmRpcihtc2cpXHJcbiAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgfSxcclxuICAgIC8vIOODl+ODreODkeODhuOCo+WQjeOCkuaMh+WumuOBl+OBpuODh+ODvOOCv+OCkuWPluW+l1xyXG4gICAgc2V0TWVzc2FnZShtc2csIHN0YXR1cykge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS5tc2cgPSBtc2dcclxuICAgICAgICB0aGlzLm1lc3NhZ2Uuc3RhdHVzID0gc3RhdHVzXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6Ieq5YuV44GE44GE44Gt5qmf6IO944GuY3JvbueKtuaFi+OCkuWPluW+l1xyXG4gICAgZ2V0QXV0b0xpa2VDcm9uU3RhdHVzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5Jc0F1dG9MaWtlRXhlY1xyXG4gICAgfSxcclxuICAgIC8v6Ieq5YuV44GE44GE44Gt5qmf6IO944GuY3JvbueKtuaFi+OCkuOCu+ODg+ODiFxyXG4gICAgc2V0QXV0b0xpa2VDcm9uU3RhdHVzKHN0YXR1cykge1xyXG4gICAgICB0aGlzLklzQXV0b0xpa2VFeGVjID0gc3RhdHVzXHJcbiAgICB9LFxyXG5cclxuICAgIC8v6Ieq5YuV44OV44Kp44Ot44O85qmf6IO944GuY3JvbueKtuaFi+OCkuWPluW+l1xyXG4gICAgZ2V0QXV0b0ZvbGxvd0Nyb25TdGF0dXMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLklzQXV0b0ZvbGxvd0V4ZWNcclxuICAgIH0sXHJcbiAgICAvL+iHquWLleODleOCqeODreODvOapn+iDveOBrmNyb27nirbmhYvjgpLjgrvjg4Pjg4hcclxuICAgIHNldEF1dG9Gb2xsb3dDcm9uU3RhdHVzKHN0YXR1cykge1xyXG4gICAgICB0aGlzLklzQXV0b0ZvbGxvd0V4ZWMgPSBzdGF0dXNcclxuICAgIH0sXHJcblxyXG4gICAgLy/oh6rli5Xjg5Xjgqnjg63jg7zlho3plovplqLmlbDjga7nirbmhYvjgpLlj5blvpfvvIh0cnVlIGZhbHNl77yJICAgIFxyXG4gICAgZ2V0UmVzdGFydEF1dG9Gb2xsb3dDcm9uU3RhdHVzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5Jc3Jlc3RhcnRBdXRvRm9sbG93Sm9iRXhlY1xyXG4gICAgfSxcclxuICAgIC8v6Ieq5YuV44OV44Kp44Ot44O85YaN6ZaL6Zai5pWw44Gu54q25oWL44KS44K744OD44OI77yIdHJ1ZSBmYWxzZe+8iSBcclxuICAgIHNldFJlc3RhcnRBdXRvRm9sbG93Q3JvblN0YXR1cyhzdGF0dXMpIHtcclxuICAgICAgdGhpcy5Jc3Jlc3RhcnRBdXRvRm9sbG93Sm9iRXhlYyA9IHN0YXR1c1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+iHquWLleOCouODs+ODleOCqeODreODvOapn+iDveOBrmNyb27nirbmhYvjgpLlj5blvpdcclxuICAgIGdldEF1dG9VbkZvbGxvd0Nyb25TdGF0dXMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLklzQXV0b1VuRm9sbG93RXhlY1xyXG4gICAgfSxcclxuICAgIC8v6Ieq5YuV44Ki44Oz44OV44Kp44Ot44O85qmf6IO944GuY3JvbueKtuaFi+OCkuOCu+ODg+ODiFxyXG4gICAgc2V0QXV0b1VuRm9sbG93Q3JvblN0YXR1cyhzdGF0dXMpIHtcclxuICAgICAgdGhpcy5Jc0F1dG9VbkZvbGxvd0V4ZWMgPSBzdGF0dXNcclxuICAgIH0sXHJcblxyXG4gICAgLy/jg6Hjg7zjg6vphY3kv6HnirbmhYvjgpLlj5blvpdcclxuICAgIGdldE1haWxTdGF0dXMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLklzTWFpbEV4ZWNcclxuICAgIH0sXHJcbiAgICAvL+ODoeODvOODq+mFjeS/oeeKtuaFi+OCkuOCu+ODg+ODiFxyXG4gICAgc2V0TWFpbFN0YXR1cyhzdGF0dXMpIHtcclxuICAgICAgdGhpcy5Jc01haWxFeGVjID0gc3RhdHVzXHJcbiAgICB9LFxyXG5cclxuICAgIC8v44Ki44Kv44OG44Kj44OW44Om44O844K244O844Gu44OV44Kp44Ot44O85pWw44KS44K744OD44OI44GZ44KLXHJcbiAgICBzZXRGcmllbmRzQ291bnQoY291bnQpe1xyXG4gICAgICB0aGlzLmZyaWVuZHNfY291bnQgPSBjb3VudFxyXG4gICAgfSxcclxuICAgIC8v44Ki44Kv44OG44Kj44OW44Om44O844K244O844Gu44OV44Kp44Ot44O85pWw44KS5Y+W5b6X44GZ44KLXHJcbiAgICBnZXRGcmllbmRzQ291bnQoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuZnJpZW5kc19jb3VudFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2V0Q3JvblN0YXR1cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuSXN0d2VldHdhdGNoSm9iRXhlY1xyXG4gICAgfSxcclxuICAgIHNldENyb25TdGF0dXMoc3RhdHVzKSB7XHJcbiAgICAgIHRoaXMuSXN0d2VldHdhdGNoSm9iRXhlYyA9IHN0YXR1c1xyXG4gICAgfSxcclxuICAgIGdldFJlc2VydmVkVGltZSgpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+S6iOe0hOaZgumWk+OCkuWPluW+l+OBl+OBvuOBme+8micrdGhpcy5yZXNlcnZlZFRpbWUpXHJcbiAgICAgIHJldHVybiB0aGlzLnJlc2VydmVkVGltZVxyXG4gICAgfSxcclxuICAgIHNldFJlc2VydmVkVGltZSh0aW1lKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfkuojntITmmYLplpPjgpLoqK3nva7jgZfjgb7jgZnvvJonK3RpbWUpXHJcbiAgICAgIHRoaXMucmVzZXJ2ZWRUaW1lID0gdGltZVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRSZXNlcnZlZEl0ZW0oKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfkuojntITmg4XloLHjgpLlj5blvpfjgZfjgb7jgZknKVxyXG4gICAgICAvLyBjb25zb2xlLmRpcih0aGlzLnJlc2VydmVJdGVtKVxyXG4gICAgICByZXR1cm4gdGhpcy5yZXNlcnZlSXRlbVxyXG4gICAgfSxcclxuICAgIHNldFJlc2VydmVkSXRlbShpZCwgdGltZSwgdGV4dCkge1xyXG4gICAgICBcclxuICAgICAgdGhpcy5yZXNlcnZlSXRlbS5pZCA9IGlkXHJcbiAgICAgIHRoaXMucmVzZXJ2ZUl0ZW0ucmVzZXJ2ZVRpbWUgPSB0aW1lXHJcbiAgICAgIHRoaXMucmVzZXJ2ZUl0ZW0udGV4dCA9IHRleHRcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfkuojntITmg4XloLHjgIBpZO+8micrdGhpcy5yZXNlcnZlSXRlbS5pZClcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+S6iOe0hOaDheWgseOAgHJlc2VydmVUaW1l77yaJyt0aGlzLnJlc2VydmVJdGVtLnJlc2VydmVUaW1lKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZygn5LqI57SE5oOF5aCx44CAdGV4dO+8micrdGhpcy5yZXNlcnZlSXRlbS50ZXh0KVxyXG4gICAgfSxcclxuICAgIHNldE5leHRGb2xsb3dUaW1lKG5leHR0aW1lLCBub3cpIHtcclxuICAgICAgdGhpcy5yZUZvbGxvd1RpbWUubmV4dCA9IG5leHR0aW1lO1xyXG4gICAgICB0aGlzLnJlRm9sbG93VGltZS5ub3cgPSBub3c7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfmrKHjga7jg5Xjgqnjg63jg7zplovlp4vmmYLplpPvvJonKVxyXG4gICAgICAvLyBjb25zb2xlLmRpcih0aGlzLnJlRm9sbG93VGltZSlcclxuICAgIH0sXHJcbiAgICBnZXROZXh0Rm9sbG93VGltZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVGb2xsb3dUaW1lO1xyXG4gICAgfSxcclxuICAgIHNldE5leHRVbkZvbGxvd1RpbWUobmV4dHRpbWUpIHtcclxuICAgICAgdGhpcy5VbkZvbGxvd1RpbWUgPSBuZXh0dGltZTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+asoeOBruOCouODs+ODleOCqeODreODvOmWi+Wni+aZgumWk++8micpXHJcbiAgICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMuVW5Gb2xsb3dUaW1lKVxyXG4gICAgfSxcclxuICAgIGdldE5leHRVbkZvbGxvd1RpbWUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLlVuRm9sbG93VGltZTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxufSk7XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBTdG9yZS52dWUiLCI8c2NyaXB0PlxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4jIENvbnRyb2xsZXLnlKh2dWXjgqTjg7Pjgrnjgr/jg7Pjgrlcclxu55S76Z2i44Go44OQ44OD44Kv44Ko44Oz44OJ77yIZnVlbHBocO+8ieOBqOOBruapi+a4oeOBl+OBruW9ueWJslxyXG7nlLvpnaLjgYvjgolEQuOBuOOBruOCouOCr+OCu+OCueOBr+OBk+OBruOCr+ODqeOCueOCkumAmuOBmVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG4vLyBBamF46YCa5L+h44Op44Kk44OW44Op44OqXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG4vLyBKc29u5Y+W5b6X44Gu44OZ44O844K5VVJMXHJcbmNvbnN0IFVSTF9CQVNFID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODg4OC9LYW1pdHRlckFwcC9LYW1pdHRlckFQSS9wdWJsaWMvYXBpLyc7XHJcbi8vY29uc3QgVVJMX0JBU0UgPSAnaHR0cDovL3NlcnZpY2UtMS5tYXNhc2hpc2l0ZS5jb20vS2FtaXR0ZXJBUEkvcHVibGljL2FwaS8nO1xyXG5cclxuLy8gVnVlLmpzIOOBruOCpOODs+OCueOCv+ODs+OCuVxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBWdWUoe1xyXG4gIGRhdGE6IHtcclxuICAgIC8vIEpzb27jg4fjg7zjgr/moLzntI3nlKhcclxuICAgIHNlYXJjaF9saXN0OiBbXVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLy8gQWpheOmAmuS/oeOBp0pzb27jgpLlj5blvpfjgZfjgIHnibnlrprjga7jg5fjg63jg5Hjg4bjgqPjgavmoLzntI3jgZnjgotcclxuICAgIC8vIOWPluW+l+OBl+OBn+OCiSBHRVRfQUpBWF9DT01QTEVURSDjgafpgJrnn6XjgZnjgotcclxuICAgIGdldF9hamF4KHVybCwgbmFtZSkge1xyXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KFVSTF9CQVNFICsgdXJsKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgVnVlLnNldCh0aGlzLCBuYW1lLCByZXMuZGF0YSk7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnR0VUX0FKQVhfQ09NUExFVEUnKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g44OX44Ot44OR44OG44Kj5ZCN44KS5oyH5a6a44GX44Gm44OH44O844K/44KS5Y+W5b6XXHJcbiAgICBnZXRfZGF0YShuYW1lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRkYXRhW25hbWVdO1xyXG4gICAgfSxcclxuICAgIGNoZWNrTG9naW5fYWpheCgpe1xyXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KFVSTF9CQVNFICsgJ2NoZWNrTG9naW4nKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0NIRUNLTE9HSU4nLCB7cmVzcG9uc2U6IHJlcy5kYXRhfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QganNvbiA9IHtcclxuICAgICAgICAgICdyZXMnIDogJ05HJyxcclxuICAgICAgICAgICdtc2cnIDogJ+OCteODvOODkOODvOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgicgICBcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfQ0hFQ0tMT0dJTicsIHtyZXNwb25zZToganNvbn0pO1xyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8v44Om44O844K244O855m76Yyy5Yem55CGXHJcbiAgICBzaWduVXBfYWpheChmb3JtX2RhdGEpIHtcclxuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgIHBhcmFtcy5hcHBlbmQoJ3VzZXJuYW1lJyxmb3JtX2RhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgIHBhcmFtcy5hcHBlbmQoJ2VtYWlsJyxmb3JtX2RhdGEuZW1haWwpO1xyXG4gICAgICAgIHBhcmFtcy5hcHBlbmQoJ3Bhc3N3b3JkJyxmb3JtX2RhdGEucGFzc3dvcmQpO1xyXG4gICAgICAgIHBhcmFtcy5hcHBlbmQoJ3JlX3Bhc3MnLGZvcm1fZGF0YS5yZV9wYXNzKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXhpb3MucG9zdChVUkxfQkFTRSArICdzaWdudXAnLCBwYXJhbXMpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX1NJR05VUCcsIHtyZXNwb25zZTogcmVzLmRhdGF9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICAgICAgICAncmVzJyA6ICdORycsXHJcbiAgICAgICAgICAgICdtc2cnIDogJ+OCteODvOODkOODvOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgicgICBcclxuICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX1NJR05VUCcsIHtyZXNwb25zZToganNvbn0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy/jg63jgrDjgqTjg7Plh6bnkIZcclxuICAgIHNpZ25Jbl9hamF4KGZvcm1fZGF0YSkge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgcGFyYW1zLmFwcGVuZCgndXNlcm5hbWUnLGZvcm1fZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgcGFyYW1zLmFwcGVuZCgncGFzc3dvcmQnLGZvcm1fZGF0YS5wYXNzd29yZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXhpb3MucG9zdChVUkxfQkFTRSArICdzaWduaW4nLCBwYXJhbXMpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX1NJR05JTicsIHtyZXNwb25zZTogcmVzLmRhdGF9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICAgICAgICAncmVzJyA6ICdORycsXHJcbiAgICAgICAgICAgICdtc2cnIDogJ+OCteODvOODkOODvOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgicgICBcclxuICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfU0lHTklOJywge3Jlc3BvbnNlOiBqc29ufSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAjIOODkeOCueODr+ODvOODieODquODnuOCpOODs+ODgOODvFxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki8gXHJcbiAgICAvL+iqjeiovOOCs+ODvOODieOCkumAgeS/oeOBmeOCi1xyXG4gICAgcGFzc1JlbWluZFNlbmRfYWpheCh1c2VybmFtZSwgZW1haWwpe1xyXG4gICAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICBwYXJhbXMuYXBwZW5kKCdlbWFpbCcsZW1haWwpO1xyXG4gICAgICBwYXJhbXMuYXBwZW5kKCd1c2VybmFtZScsdXNlcm5hbWUpO1xyXG5cclxuICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoVVJMX0JBU0UgKyAncGFzc3JlbWluZHNlbmQnLCBwYXJhbXMpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX1BBU1NSRU1JTkRTRU5EJywge3Jlc3BvbnNlOiByZXMuZGF0YX0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgICAgICAgICdyZXMnIDogJ05HJyxcclxuICAgICAgICAgICAgJ21zZycgOiAn44K144O844OQ44O844Gu5o6l57aa44Gr5aSx5pWX44GX44G+44GX44Gf44CC44ON44OD44OI44Ov44O844Kv566h55CG6ICF44Gr5ZWP44GE5ZCI44KP44Gb44Gm44GP44Gg44GV44GE44CCJyAgIFxyXG4gICAgICAgICAgfSAgICBcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfUEFTU1JFTUlORFNFTkQnLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8v6KqN6Ki844Kz44O844OJ44KS56K66KqN44GX44Gm5paw44GX44GE44OR44K544Ov44O844OJ44KS6YCB5L+h44GZ44KLXHJcbiAgICBwYXNzUmVtaW5kUmVjaWV2ZV9hamF4KGNvZGUpe1xyXG4gICAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICBwYXJhbXMuYXBwZW5kKCdjb2RlJyxjb2RlKTtcclxuXHJcbiAgICAgIHJldHVybiBheGlvcy5wb3N0KFVSTF9CQVNFICsgJ3Bhc3NyZW1pbmRyZWNpZXZlJywgcGFyYW1zKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9QQVNTUkVNSU5EUkVDSUVWRScsIHtyZXNwb25zZTogcmVzLmRhdGF9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICAgICAgICAncmVzJyA6ICdORycsXHJcbiAgICAgICAgICAgICdtc2cnIDogJ+OCteODvOODkOODvOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgicgICBcclxuICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX1BBU1NSRU1JTkRSRUNJRVZFJywge3Jlc3BvbnNlOiBqc29ufSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG5cclxuXHJcbiAgICAvL1R3aXR0ZXLjgqLjgqvjgqbjg7Pjg4jjga7oqo3oqLzlh6bnkIYoYXV0aF90b2tlbuOBqG9hdXRoX3ZlcmlmaWVy44Gu5Y+W5b6XKVxyXG4gICAgY2VydGlmeV9hamF4KCkgeyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChVUkxfQkFTRSArICdjZXJ0aWZ5JylcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfR0VUUkVRVUVTVCcsIHtyZXNwb25zZTogcmVzLmRhdGF9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICAgICAgICAncmVzJyA6ICdORycsXHJcbiAgICAgICAgICAgICdtc2cnIDogJ+OCteODvOODkOODvOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgicgICBcclxuICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0dFVFJFUVVFU1QnLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8v5Y+W5b6X44GX44Gfb2F1dGhfdG9rZW7jgahvYXV0aF92ZXJpZmllcuOCkuS9v+OBo+OBpuOCouOCr+OCu+OCueODiOODvOOCr+ODs+OCkuWPluW+l+OAguOCteODvOODkOODvOWBtOOBp0RC5L+d5a2YXHJcbiAgICBzYXZlVG9rZW5fYWpheChvYXV0aF90b2tlbiwgb2F1dGhfdmVyaWZpZXIpIHtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBheGlvcy5nZXQoVVJMX0JBU0UgKyAnY2VydGlmeT9vYXV0aF90b2tlbj0nKyBvYXV0aF90b2tlbiArICcmb2F1dGhfdmVyaWZpZXI9JyArIG9hdXRoX3ZlcmlmaWVyKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9DRVJUSUZZJywge3Jlc3BvbnNlOiByZXMuZGF0YX0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgICAgICAgICdyZXMnIDogJ05HJyxcclxuICAgICAgICAgICAgJ21zZycgOiAn44K144O844OQ44O844Gu5o6l57aa44Gr5aSx5pWX44GX44G+44GX44Gf44CC44ON44OD44OI44Ov44O844Kv566h55CG6ICF44Gr5ZWP44GE5ZCI44KP44Gb44Gm44GP44Gg44GV44GE44CCJyAgIFxyXG4gICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9DRVJUSUZZJywge3Jlc3BvbnNlOiBqc29ufSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvL+ODreOCsOOCpOODs+ODpuODvOOCtuODvOOBjOiqjeiovOOBl+OBpuOBhOOCi+OCouOCq+OCpuODs+ODiOOCkuOCteODvOODkOODvOOBi+OCieWPluW+l+OBmeOCi1xyXG4gICAgdXBkYXRlQWNjb3VudF9hamF4KCkge1xyXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KFVSTF9CQVNFICsgJ2dldGFjY291bnQnKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0dFVEFDQ09VTlQnLCB7cmVzcG9uc2U6IHJlcy5kYXRhfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QganNvbiA9IHtcclxuICAgICAgICAgICdyZXMnIDogJ05HJyxcclxuICAgICAgICAgICdtc2cnIDogJ+OCteODvOODkOODvOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgicgICBcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfR0VUQUNDT1VOVCcsIHtyZXNwb25zZToganNvbn0pO1xyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGRlbGV0ZUFjY291bnRfYWpheChzY3JlZW5fbmFtZSkge1xyXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KFVSTF9CQVNFICsgJ2RlbGV0ZWFjY291bnQ/c2NyZWVuX25hbWU9JyArIHNjcmVlbl9uYW1lKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0RFTEVURUFDQ09VTlQnLCB7cmVzcG9uc2U6IHJlcy5kYXRhfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QganNvbiA9IHtcclxuICAgICAgICAgICdyZXMnIDogJ05HJyxcclxuICAgICAgICAgICdtc2cnIDogJ+OCteODvOODkOODvOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgicgICBcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfREVMRVRFQUNDT1VOVCcsIHtyZXNwb25zZToganNvbn0pO1xyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGdldFVzZXJJbmZvX2FqYXgoc2NyZWVuX25hbWUpIHtcclxuICAgICAgcmV0dXJuIGF4aW9zLmdldChVUkxfQkFTRSArICdnZXR1c2VyaW5mbz9zY3JlZW5fbmFtZT0nICsgc2NyZWVuX25hbWUpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfR0VUVVNFUklORk8nLCB7cmVzcG9uc2U6IHJlcy5kYXRhfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QganNvbiA9IHtcclxuICAgICAgICAgICdyZXMnIDogJ05HJyxcclxuICAgICAgICAgICdtc2cnIDogJ+OCteODvOODkOODvOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgicgICBcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfR0VUVVNFUklORk8nLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBnZXRBY3RpdmVVc2VyX2FqYXgoc2NyZWVuX25hbWUpIHtcclxuICAgICAgcmV0dXJuIGF4aW9zLmdldChVUkxfQkFTRSArICdnZXRhY3RpdmV1c2VyJylcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9HRVRBQ1RJVkVVU0VSJywge3Jlc3BvbnNlOiByZXMuZGF0YX0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgICAgICAncmVzJyA6ICdORycsXHJcbiAgICAgICAgICAnbXNnJyA6ICfjgrXjg7zjg5Djg7zjga7mjqXntprjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILjg43jg4Pjg4jjg6/jg7zjgq/nrqHnkIbogIXjgavllY/jgYTlkIjjgo/jgZvjgabjgY/jgaDjgZXjgYTjgIInXHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0dFVEFDVElWRVVTRVInLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBnZXRUd2l0dGVyUHJvZmlsZV9hamF4KHNjcmVlbl9uYW1lKSB7ICAgICAgXHJcbiAgICAgIHJldHVybiBheGlvcy5nZXQoVVJMX0JBU0UgKyAnZ2V0dHdpdHRlcnByb2ZpbGU/c2NyZWVuX25hbWU9JytzY3JlZW5fbmFtZSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4geyAgICAgICBcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfR0VUVFdJVFRFUlBST0ZJTEUnLCB7cmVzcG9uc2U6IHJlcy5kYXRhfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QganNvbiA9IHtcclxuICAgICAgICAgICdyZXMnIDogJ05HJyxcclxuICAgICAgICAgICdtc2cnIDogJ+OCteODvOODkOODvOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgicgICBcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfR0VUVFdJVFRFUlBST0ZJTEUnLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvL+ODhOOCpOODvOODiOOCkuaKleeov+OBmeOCi1xyXG4gICAgdHdlZXRfYWpheChpZCwgdGV4dCkge1xyXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KFVSTF9CQVNFICsgJ3R3ZWV0P3RleHQ9Jyt0ZXh0KycmaWQ9JytpZClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9UV0VFVCcsIHtyZXNwb25zZTogcmVzLmRhdGF9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICAgICAgJ3JlcycgOiAnTkcnLFxyXG4gICAgICAgICAgJ21zZycgOiAn44K144O844OQ44O844Gu5o6l57aa44Gr5aSx5pWX44GX44G+44GX44Gf44CC44ON44OD44OI44Ov44O844Kv566h55CG6ICF44Gr5ZWP44GE5ZCI44KP44Gb44Gm44GP44Gg44GV44GE44CCJyAgIFxyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9UV0VFVCcsIHtyZXNwb25zZToganNvbn0pO1xyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8v5LqI57SE5pel5pmC44CB44OE44Kk44O844OI5YaF5a6544KS44OH44O844K/44OZ44O844K544Gr5L+d5a2Y44GZ44KL44KI44GGQVBJ44Gr44Oq44Kv44Ko44K544OI44GZ44KLXHJcbiAgICBzYXZlVHdlZXRTY2hlZHVsZV9hamF4KGlkLCB0ZXh0LCB0aW1lKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KFVSTF9CQVNFICsgJ3NhdmV0d2VldHNjaGVkdWxlP3RleHQ9Jyt0ZXh0KycmdGltZT0nK3RpbWUrJyZpZD0nK2lkKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGF0LiRlbWl0KCdBSkFYX0NPTVBMRVRFX1NBVkVUV0VFVFNDSEVEVUxFJywge3Jlc3BvbnNlOiByZXMuZGF0YX0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgICAgICAncmVzJyA6ICdORycsXHJcbiAgICAgICAgICAnbXNnJyA6ICfjgrXjg7zjg5Djg7zjga7mjqXntprjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILjg43jg4Pjg4jjg6/jg7zjgq/nrqHnkIbogIXjgavllY/jgYTlkIjjgo/jgZvjgabjgY/jgaDjgZXjgYTjgIInICAgXHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICB0aGF0LiRlbWl0KCdBSkFYX0NPTVBMRVRFX1NBVkVUV0VFVFNDSEVEVUxFJywge3Jlc3BvbnNlOiBqc29ufSk7XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy/kuojntITml6XmmYLjgIHjg4TjgqTjg7zjg4jlhoXlrrnjgpLjg4fjg7zjgr/jg5njg7zjgrnjgYvjgonlj5blvpfjgZnjgotcclxuICAgIGdldFR3ZWV0U2NoZWR1bGVfYWpheCgpIHtcclxuICAgICAgcmV0dXJuIGF4aW9zLmdldChVUkxfQkFTRSArICdnZXR0d2VldHNjaGVkdWxlJylcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9HRVRUV0VFVFNDSEVEVUxFJywge3Jlc3BvbnNlOiByZXMuZGF0YX0pO1xyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9ESVNQTEFZX1NDSEVEVUxFX1JFU1VMVCcsIHtyZXNwb25zZTogcmVzLmRhdGF9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICAgICAgJ3JlcycgOiAnTkcnLFxyXG4gICAgICAgICAgJ21zZycgOiAn44K144O844OQ44O844Gu5o6l57aa44Gr5aSx5pWX44GX44G+44GX44Gf44CC44ON44OD44OI44Ov44O844Kv566h55CG6ICF44Gr5ZWP44GE5ZCI44KP44Gb44Gm44GP44Gg44GV44GE44CCJyAgIFxyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9HRVRUV0VFVFNDSEVEVUxFJywge3Jlc3BvbnNlOiBqc29ufSk7XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy/kuojntITml6XmmYLjgIHjg4TjgqTjg7zjg4jlhoXlrrnjgpLjg4fjg7zjgr/jg5njg7zjgrnjgYvjgonoq5bnkIbliYrpmaTjgZnjgotcclxuICAgIGRlbGV0ZVR3ZWV0U2NoZWR1bGVfYWpheCh3b3JkX2lkKSB7XHJcbiAgICAgIHJldHVybiBheGlvcy5nZXQoVVJMX0JBU0UgKyAnZGVsZXRldHdlZXRzY2hlZHVsZT93b3JkX2lkPScrd29yZF9pZClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9ERUxFVEVUV0VFVFNDSEVEVUxFJywge3Jlc3BvbnNlOiByZXMuZGF0YX0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgICAgICAncmVzJyA6ICdORycsXHJcbiAgICAgICAgICAnbXNnJyA6ICfjgrXjg7zjg5Djg7zjga7mjqXntprjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILjg43jg4Pjg4jjg6/jg7zjgq/nrqHnkIbogIXjgavllY/jgYTlkIjjgo/jgZvjgabjgY/jgaDjgZXjgYTjgIInICAgXHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0RFTEVURVRXRUVUU0NIRURVTEUnLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvL+OBhOOBhOOBreOBl+OBn+ODquOCueODiOOCkuOCu+ODg+OCt+ODp+ODs+OBi+OCieWPluW+l+OBmeOCi1xyXG4gICAgZ2V0TGlrZWRMaXN0U2Vzc2lvbl9hamF4KCkge1xyXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KFVSTF9CQVNFICsgJ2dldGxpa2VkbGlzdHNlc3Npb24nKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAvL0hPTUXnlLvpnaLjga7jgqTjgqTjg43jg6rjgrnjg4jjgpLmm7TmlrDjgZnjgotcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfRElTUExBWV9BVVRPTElLRV9SRVNVTFQnLCB7cmVzcG9uc2U6IHJlcy5kYXRhfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QganNvbiA9IHtcclxuICAgICAgICAgICdyZXMnIDogJ05HJyxcclxuICAgICAgICAgICdtc2cnIDogJ+OCteODvOODkOODvOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgicsXHJcbiAgICAgICAgICAncnN0JyA6IGZhbHNlXHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICAvL0hPTUXnlLvpnaLjga7jgqTjgqTjg43jg6rjgrnjg4jjgpLmm7TmlrDjgZnjgotcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfRElTUExBWV9BVVRPTElLRV9SRVNVTFQnLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgfSlcclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8v44OV44Kp44Ot44O844GX44Gf44Oq44K544OI44KSRELjgYvjgonlj5blvpfjgZnjgotcclxuICAgIGdldEZvbGxvd2VkTGlzdF9hamF4KCkge1xyXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KFVSTF9CQVNFICsgJ2dldGZvbGxvd2VkbGlzdCcpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIC8vSE9NReeUu+mdouOBruODleOCqeODreODvOa4iOODquOCueODiOOCkuabtOaWsOOBmeOCi1xyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9ESVNQTEFZX0FVVE9GT0xMT1dfUkVTVUxUJywge3Jlc3BvbnNlOiByZXMuZGF0YX0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgICAgICAncmVzJyA6ICdORycsXHJcbiAgICAgICAgICAnbXNnJyA6ICfjgrXjg7zjg5Djg7zjga7mjqXntprjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILjg43jg4Pjg4jjg6/jg7zjgq/nrqHnkIbogIXjgavllY/jgYTlkIjjgo/jgZvjgabjgY/jgaDjgZXjgYTjgIInLFxyXG4gICAgICAgICAgJ3JzdCcgOiBmYWxzZVxyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgLy9IT01F55S76Z2i44Gu44OV44Kp44Ot44O85riI44Oq44K544OI44KS5pu05paw44GZ44KLXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0RJU1BMQVlfQVVUT0ZPTExPV19SRVNVTFQnLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLy/jgqLjg7Pjg5Xjgqnjg63jg7zjgZfjgZ/jg6rjgrnjg4jjgpJEQuOBi+OCieWPluW+l+OBmeOCi1xyXG4gICAgZ2V0VW5Gb2xsb3dlZExpc3RfYWpheCgpIHtcclxuICAgICAgcmV0dXJuIGF4aW9zLmdldChVUkxfQkFTRSArICdnZXR1bmZvbGxvd2VkbGlzdCcpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIC8vSE9NReeUu+mdouOBruODleOCqeODreODvOa4iOODquOCueODiOOCkuabtOaWsOOBmeOCi1xyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9ESVNQTEFZX0FVVE9VTkZPTExPV19SRVNVTFQnLCB7cmVzcG9uc2U6IHJlcy5kYXRhfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QganNvbiA9IHtcclxuICAgICAgICAgICdyZXMnIDogJ05HJyxcclxuICAgICAgICAgICdtc2cnIDogJ+OCteODvOODkOODvOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgicsXHJcbiAgICAgICAgICAncnN0JyA6IGZhbHNlXHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICAvL0hPTUXnlLvpnaLjga7jg5Xjgqnjg63jg7zmuIjjg6rjgrnjg4jjgpLmm7TmlrDjgZnjgotcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfRElTUExBWV9BVVRPVU5GT0xMT1dfUkVTVUxUJywge3Jlc3BvbnNlOiBqc29ufSk7XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZW1pdF9tZXNzYWdlKG1zZykge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygn44Oh44OD44K744O844K444KS5Y+X5L+h44GX44G+44GX44Gf77yBJyttc2cpXHJcbiAgICAgIHRoaXMuJGVtaXQoJ0RJU1BMQVlfTUVTU0FHRScsIHttZXNzYWdlOiBtc2d9KVxyXG4gICAgfSxcclxuXHJcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgIyBjcm9udGFiZnVuY+OBi+OCieWRvOOBsOOCjOOCi+mWouaVsFxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIC8v6Ieq5YuV44GE44GE44Gt44KS6ZaL5aeL44GZ44KLXHJcbiAgICBzdGFydEF1dG9MaWtlX2FqYXgoKSB7XHJcblxyXG4gICAgICAvL0hPTUXnlLvpnaLjga7oh6rli5XjgqTjgqTjg43jgrnjg4bjg7zjgr/jgrnjgpLlrp/ooYzkuK3jgavlpInmm7TjgZnjgotcclxuICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DSEFOR0VfQVVUT0xJS0VTVEFUVVMnLCB7cmVzcG9uc2U6ICcyJ30pO1xyXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KFVSTF9CQVNFICsgJ3N0YXJ0YXV0b2xpa2UnKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAvL0hPTUXnlLvpnaLjga7oh6rli5XjgqTjgqTjg43jgrnjg4bjg7zjgr/jgrnjgpLlvoXmqZ/kuK3jgavlpInmm7TjgZnjgotcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ0hBTkdFX0FVVE9MSUtFU1RBVFVTJywge3Jlc3BvbnNlOiAnMSd9KTtcclxuXHJcbiAgICAgICAgICAvL0hPTUXnlLvpnaLjga7jgqTjgqTjg43jg6rjgrnjg4jjgpLmm7TmlrDjgZnjgotcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfRElTUExBWV9BVVRPTElLRV9SRVNVTFQnLCB7cmVzcG9uc2U6IHJlcy5kYXRhfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgLy9IT01F55S76Z2i44Gu6Ieq5YuV44Kk44Kk44ON44K544OG44O844K/44K544KS5b6F5qmf5Lit44Gr5aSJ5pu044GZ44KLXHJcbiAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DSEFOR0VfQVVUT0xJS0VTVEFUVVMnLCB7cmVzcG9uc2U6ICcxJ30pO1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgICAgICAncmVzJyA6ICdORycsXHJcbiAgICAgICAgICAnbXNnJyA6ICfjgrXjg7zjg5Djg7zjga7mjqXntprjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILjg43jg4Pjg4jjg6/jg7zjgq/nrqHnkIbogIXjgavllY/jgYTlkIjjgo/jgZvjgabjgY/jgaDjgZXjgYTjgIInICAgXHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0FVVE9MSUtFJywge3Jlc3BvbnNlOiBqc29ufSk7XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy/oh6rli5Xjg5Xjgqnjg63jg7zjgpLplovlp4tcclxuICAgIHN0YXJ0QXV0b0ZvbGxvd19hamF4KCkge1xyXG4gICAgICAvL0hPTUXnlLvpnaLjga7oh6rli5XjgqTjgqTjg43jgrnjg4bjg7zjgr/jgrnjgpLlrp/ooYzkuK3jgavlpInmm7TjgZnjgotcclxuICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DSEFOR0VfQVVUT0ZPTExPV1NUQVRVUycsIHtyZXNwb25zZTogJzInfSk7XHJcbiAgICAgIHJldHVybiBheGlvcy5nZXQoVVJMX0JBU0UgKyAnc3RhcnRhdXRvZm9sbG93JylcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgLy9IT01F55S76Z2i44Gu44OV44Kp44Ot44O844K544OG44O844K/44K544KS5b6F5qmf5Lit44Gr5aSJ5pu044GZ44KLXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NIQU5HRV9BVVRPRk9MTE9XU1RBVFVTJywge3Jlc3BvbnNlOiAnMSd9KTtcclxuXHJcbiAgICAgICAgICAvL0hPTUXnlLvpnaLjga7jg5Xjgqnjg63jg7zjg6rjgrnjg4jjgpLmm7TmlrDjgZnjgotcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfRElTUExBWV9BVVRPRk9MTE9XX1JFU1VMVCcsIHtyZXNwb25zZTogcmVzLmRhdGF9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZXMpID0+IHtcclxuICAgICAgICAvL0hPTUXnlLvpnaLjga7oh6rli5XjgqTjgqTjg43jgrnjg4bjg7zjgr/jgrnjgpLlvoXmqZ/kuK3jgavlpInmm7TjgZnjgotcclxuICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NIQU5HRV9BVVRPRk9MTE9XU1RBVFVTJywge3Jlc3BvbnNlOiAnMSd9KTtcclxuICAgICAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICAgICAgJ3JlcycgOiAnTkcnLFxyXG4gICAgICAgICAgJ21zZycgOiAn44K144O844OQ44O844Gu5o6l57aa44Gr5aSx5pWX44GX44G+44GX44Gf44CC44ON44OD44OI44Ov44O844Kv566h55CG6ICF44Gr5ZWP44GE5ZCI44KP44Gb44Gm44GP44Gg44GV44GE44CCJyAgIFxyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9ESVNQTEFZX0FVVE9GT0xMT1dfUkVTVUxUJywge3Jlc3BvbnNlOiBqc29ufSk7XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgIyDoh6rli5XjgqTjgqTjg43jgq3jg7zjg6/jg7zjg4njg7vjg5Xjgqnjg63jg6/jg7zjgrXjg7zjg4Hjgq3jg7zjg6/jg7zjg4nnmbvpjLLnlLvpnaIg5YWx6YCaXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qLyAgICBcclxuICAgIC8v44Kt44O844Ov44O844OJ44KSRELjgavkv53lrZjjgZnjgotcclxuICAgIHNhdmVLZXl3b3JkX2FqYXgoaWQsIGxpa2V3b3JkLCBvcHRpb24sIHR5cGUpIHtcclxuXHJcbiAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgIHBhcmFtcy5hcHBlbmQoJ2lkJyxpZCk7XHJcbiAgICAgIHBhcmFtcy5hcHBlbmQoJ3RleHQnLGxpa2V3b3JkKTtcclxuICAgICAgcGFyYW1zLmFwcGVuZCgnb3B0aW9uJyxvcHRpb24pO1xyXG4gICAgICBwYXJhbXMuYXBwZW5kKCd0eXBlJyx0eXBlKTtcclxuXHJcbiAgICAgIHJldHVybiBheGlvcy5wb3N0KFVSTF9CQVNFICsgJ3NhdmVrZXl3b3JkJywgcGFyYW1zKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYodHlwZT09PTApey8v44OV44Kp44Ot44Ov44O844K144O844OB44Kt44O844Ov44O844OJXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX1NBVkVGT0xMT1dFUlNFQVJDSFdPUkQnLCB7cmVzcG9uc2U6IHJlcy5kYXRhfSk7XHJcbiAgICAgICAgfWVsc2UgaWYodHlwZT09PTEpey8v44Kk44Kk44ON44Kt44O844Ov44O844OJfVxyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9TQVZFTElLRVdPUkQnLCB7cmVzcG9uc2U6IHJlcy5kYXRhfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QganNvbiA9IHtcclxuICAgICAgICAgICdyZXMnIDogJ05HJyxcclxuICAgICAgICAgICdtc2cnIDogJ+OCteODvOODkOODvOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgicgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZT09PTApey8v44OV44Kp44Ot44Ov44O844K144O844OB44Kt44O844Ov44O844OJXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX1NBVkVGT0xMT1dFUlNFQVJDSFdPUkQnLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgICB9ZWxzZSBpZih0eXBlPT09MSl7Ly/jgqTjgqTjg43jgq3jg7zjg6/jg7zjg4l9XHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX1NBVkVMSUtFV09SRCcsIHtyZXNwb25zZToganNvbn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvL0RC44GL44KJ44Kt44O844Ov44O844OJ44KS5Y+W5b6X44GZ44KLXHJcbiAgICBnZXRLZXl3b3JkX2FqYXgodHlwZSkge1xyXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KFVSTF9CQVNFICsgJ2dldGtleXdvcmQ/dHlwZT0nK3R5cGUpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGlmKHR5cGU9PT0wKXsvL+ODleOCqeODreODr+ODvOOCteODvOODgeOCreODvOODr+ODvOODiVxyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0dFVEZPTExPV0VSU0VBUkNIV09SRCcsIHtyZXNwb25zZTogcmVzLmRhdGF9KTtcclxuICAgICAgICAgIH1lbHNlIGlmKHR5cGU9PT0xKXsvL+OCpOOCpOODjeOCreODvOODr+ODvOODiX1cclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9HRVRMSUtFV09SRCcsIHtyZXNwb25zZTogcmVzLmRhdGF9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICAgICAgJ3JlcycgOiAnTkcnLFxyXG4gICAgICAgICAgJ21zZycgOiAn44K144O844OQ44O844Gu5o6l57aa44Gr5aSx5pWX44GX44G+44GX44Gf44CC44ON44OD44OI44Ov44O844Kv566h55CG6ICF44Gr5ZWP44GE5ZCI44KP44Gb44Gm44GP44Gg44GV44GE44CCJyAgIFxyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgaWYodHlwZT09PTApey8v44OV44Kp44Ot44Ov44O844K144O844OB44Kt44O844Ov44O844OJXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0dFVEZPTExPV0VSU0VBUkNIV09SRCcsIHtyZXNwb25zZToganNvbn0pO1xyXG4gICAgICAgIH1lbHNlIGlmKHR5cGU9PT0xKXsvL+OCpOOCpOODjeOCreODvOODr+ODvOODiX1cclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfR0VUTElLRVdPUkQnLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy9EQuOBi+OCieOCreODvOODr+ODvOODieOCkuirlueQhuWJiumZpOOBmeOCi1xyXG4gICAgZGVsZXRlS2V5d29yZF9hamF4KHdvcmRfaWQsIHR5cGUpIHtcclxuICAgICAgcmV0dXJuIGF4aW9zLmdldChVUkxfQkFTRSArICdkZWxldGVrZXl3b3JkP3dvcmRfaWQ9Jyt3b3JkX2lkKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYodHlwZT09PTApey8v44OV44Kp44Ot44Ov44O844K144O844OB44Kt44O844Ov44O844OJXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0RFTEVURUZPTExPV0VSU0VBUkNIV09SRCcsIHtyZXNwb25zZTogcmVzLmRhdGF9KTtcclxuICAgICAgICB9ZWxzZSBpZih0eXBlPT09MSl7Ly/jgqTjgqTjg43jgq3jg7zjg6/jg7zjg4l9XHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0RFTEVURUxJS0VXT1JEJywge3Jlc3BvbnNlOiByZXMuZGF0YX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICAgICAgJ3JlcycgOiAnTkcnLFxyXG4gICAgICAgICAgJ21zZycgOiAn44K144O844OQ44O844Gu5o6l57aa44Gr5aSx5pWX44GX44G+44GX44Gf44CC44ON44OD44OI44Ov44O844Kv566h55CG6ICF44Gr5ZWP44GE5ZCI44KP44Gb44Gm44GP44Gg44GV44GE44CCJyAgIFxyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgaWYodHlwZT09PTApey8v44OV44Kp44Ot44Ov44O844K144O844OB44Kt44O844Ov44O844OJXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0RFTEVURUZPTExPV0VSU0VBUkNIV09SRCcsIHtyZXNwb25zZToganNvbn0pO1xyXG4gICAgICAgIH1lbHNlIGlmKHR5cGU9PT0xKXsvL+OCpOOCpOODjeOCreODvOODr+ODvOODiX1cclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfREVMRVRFTElLRVdPUkQnLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAjIOOCv+ODvOOCsuODg+ODiOOCouOCq+OCpuODs+ODiOeZu+mMsueUu+mdolxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgIC8v44Om44O844K244O844Ki44Kr44Km44Oz44OI44KSRELjgavkv53lrZjjgZnjgovjgIB0eXBlOiAwOuOCv+ODvOOCsuODg+ODiOOCouOCq+OCpuODs+ODiCAxOuODleOCqeODreODvOa4iOOCouOCq+OCpuODs+ODiCAyOuOCouODs+ODleOCqeODreODvOOCouOCq+OCpuODs+ODiFxyXG4gICAgc2F2ZVVzZXJBY2NvdW50X2FqYXgoaWQsIHNjcmVlbl9uYW1lLCB0eXBlKSB7XHJcblxyXG4gICAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICBwYXJhbXMuYXBwZW5kKCdpZCcsaWQpO1xyXG4gICAgICBwYXJhbXMuYXBwZW5kKCd1c2VybmFtZScsc2NyZWVuX25hbWUpO1xyXG4gICAgICBwYXJhbXMuYXBwZW5kKCd0eXBlJyx0eXBlKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBheGlvcy5wb3N0KFVSTF9CQVNFICsgJ3NhdmV1c2VyYWNjb3VudCcsIHBhcmFtcylcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmKHR5cGU9PT0wKXsvL+OCv+ODvOOCsuODg+ODiOOCouOCq+OCpuODs+ODiFxyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9TQVZFVEFSR0VUQUNDT1VOVCcsIHtyZXNwb25zZTogcmVzLmRhdGF9KTtcclxuICAgICAgICB9ZWxzZSBpZih0eXBlPT09MSl7Ly/jg5Xjgqnjg63jg7zmuIjjgqLjgqvjgqbjg7Pjg4hcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfU0FWRUZPTExPV0RPTkVBQ0NPVU5UJywge3Jlc3BvbnNlOiByZXMuZGF0YX0pO1xyXG4gICAgICAgIH1lbHNlIGlmKHR5cGU9PT0yKXsvL+OCouODs+ODleOCqeODreODvOOCouOCq+OCpuODs+ODiFxyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9TQVZFVU5GT0xMT1dBQ0NPVU5UJywge3Jlc3BvbnNlOiByZXMuZGF0YX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgICAgICAncmVzJyA6ICdORycsXHJcbiAgICAgICAgICAnbXNnJyA6ICfjgrXjg7zjg5Djg7zjga7mjqXntprjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILjg43jg4Pjg4jjg6/jg7zjgq/nrqHnkIbogIXjgavllY/jgYTlkIjjgo/jgZvjgabjgY/jgaDjgZXjgYTjgIInICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHR5cGU9PT0wKXsvL+OCv+ODvOOCsuODg+ODiOOCouOCq+OCpuODs+ODiFxyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9TQVZFVEFSR0VUQUNDT1VOVCcsIHtyZXNwb25zZToganNvbn0pO1xyXG4gICAgICAgIH1lbHNlIGlmKHR5cGU9PT0xKXsvL+ODleOCqeODreODvOa4iOOCouOCq+OCpuODs+ODiFxyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9TQVZFRk9MTE9XRE9ORUFDQ09VTlQnLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgICB9ZWxzZSBpZih0eXBlPT09Mil7Ly/jgqLjg7Pjg5Xjgqnjg63jg7zjgqLjgqvjgqbjg7Pjg4hcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfU0FWRVVORk9MTE9XQUNDT1VOVCcsIHtyZXNwb25zZToganNvbn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvL0RC44GL44KJ44Om44O844K244O844Ki44Kr44Km44Oz44OI44KS5Y+W5b6X44GZ44KLXHJcbiAgICBnZXRVc2VyQWNjb3VudF9hamF4KHR5cGUpIHtcclxuICAgICAgcmV0dXJuIGF4aW9zLmdldChVUkxfQkFTRSArICdnZXR1c2VyYWNjb3VudD90eXBlPScrdHlwZSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmKHR5cGU9PT0wKXsvL+OCv+ODvOOCsuODg+ODiOOCouOCq+OCpuODs+ODiFxyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9HRVRUQVJHRVRBQ0NPVU5UJywge3Jlc3BvbnNlOiByZXMuZGF0YX0pO1xyXG4gICAgICAgIH1lbHNlIGlmKHR5cGU9PT0xKXsvL+ODleOCqeODreODvOa4iOOCouOCq+OCpuODs+ODiFxyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9HRVRGT0xMT1dET05FQUNDT1VOVCcsIHtyZXNwb25zZTogcmVzLmRhdGF9KTtcclxuICAgICAgICB9ZWxzZSBpZih0eXBlPT09Mil7Ly/jgqLjg7Pjg5Xjgqnjg63jg7zjgqLjgqvjgqbjg7Pjg4hcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfR0VUVU5GT0xMT1dBQ0NPVU5UJywge3Jlc3BvbnNlOiByZXMuZGF0YX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBqc29uID0ge1xyXG4gICAgICAgICAgJ3JlcycgOiAnTkcnLFxyXG4gICAgICAgICAgJ21zZycgOiAn44K144O844OQ44O844Gu5o6l57aa44Gr5aSx5pWX44GX44G+44GX44Gf44CC44ON44OD44OI44Ov44O844Kv566h55CG6ICF44Gr5ZWP44GE5ZCI44KP44Gb44Gm44GP44Gg44GV44GE44CCJyAgIFxyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgaWYodHlwZT09PTApey8v44K/44O844Ky44OD44OI44Ki44Kr44Km44Oz44OIXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0dFVFRBUkdFVEFDQ09VTlQnLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgICB9ZWxzZSBpZih0eXBlPT09MSl7Ly/jg5Xjgqnjg63jg7zmuIjjgqLjgqvjgqbjg7Pjg4hcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfR0VURk9MTE9XRE9ORUFDQ09VTlQnLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgICB9ZWxzZSBpZih0eXBlPT09Mil7Ly/jgqLjg7Pjg5Xjgqnjg63jg7zjgqLjgqvjgqbjg7Pjg4hcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfR0VUVU5GT0xMT1dBQ0NPVU5UJywge3Jlc3BvbnNlOiBqc29ufSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8vRELjgYvjgonjg6bjg7zjgrbjg7zjgqLjgqvjgqbjg7Pjg4jjgpLoq5bnkIbliYrpmaTjgZnjgotcclxuICAgIGRlbGV0ZVVzZXJBY2NvdW50X2FqYXgod29yZF9pZCwgdHlwZSkge1xyXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KFVSTF9CQVNFICsgJ2RlbGV0ZXVzZXJhY2NvdW50P3dvcmRfaWQ9Jyt3b3JkX2lkKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYodHlwZT09PTApey8v44K/44O844Ky44OD44OI44Ki44Kr44Km44Oz44OIXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0RFTEVURVRBUkdFVEFDQ09VTlQnLCB7cmVzcG9uc2U6IHJlcy5kYXRhfSk7XHJcbiAgICAgICAgfWVsc2UgaWYodHlwZT09PTEpey8v44OV44Kp44Ot44O85riI44Ki44Kr44Km44Oz44OIXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NPTVBMRVRFX0RFTEVURUZPTExPV0RPTkVBQ0NPVU5UJywge3Jlc3BvbnNlOiByZXMuZGF0YX0pO1xyXG4gICAgICAgIH1lbHNlIGlmKHR5cGU9PT0yKXsvL+OCouODs+ODleOCqeODreODvOOCouOCq+OCpuODs+ODiFxyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9ERUxFVEVVTkZPTExPV0FDQ09VTlQnLCB7cmVzcG9uc2U6IHJlcy5kYXRhfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgICAgICAncmVzJyA6ICdORycsXHJcbiAgICAgICAgICAnZXJyb3InIDogeydtc2cnIDogJ+OCteODvOODkOODvOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgid9ICAgXHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICBpZih0eXBlPT09MCl7Ly/jgr/jg7zjgrLjg4Pjg4jjgqLjgqvjgqbjg7Pjg4hcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfREVMRVRFVEFSR0VUQUNDT1VOVCcsIHtyZXNwb25zZToganNvbn0pO1xyXG4gICAgICAgIH1lbHNlIGlmKHR5cGU9PT0xKXsvL+ODleOCqeODreODvOa4iOOCouOCq+OCpuODs+ODiFxyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9ERUxFVEVGT0xMT1dET05FQUNDT1VOVCcsIHtyZXNwb25zZToganNvbn0pO1xyXG4gICAgICAgIH1lbHNlIGlmKHR5cGU9PT0yKXsvL+OCouODs+ODleOCqeODreODvOOCouOCq+OCpuODs+ODiFxyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9ERUxFVEVVTkZPTExPV0FDQ09VTlQnLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy9Ud2l0dGVy44Gu44Ki44Kr44Km44Oz44OI44GM5a2Y5Zyo44GZ44KL44GL56K66KqN44GZ44KLXHJcbiAgICBDaGVja1VzZXJBY2NvdW50RXhpc3RfYWpheChzY3JlZW5fbmFtZSkge1xyXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KFVSTF9CQVNFICsgJ2NoZWNrdXNlcmFjY291bnRleGlzdD9zY3JlZW5fbmFtZT0nK3NjcmVlbl9uYW1lKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7ICAgICAgICBcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ09NUExFVEVfQ0hFQ0tVU0VSQUNDT1VOVEVYSVNUJywge3Jlc3BvbnNlOiByZXMuZGF0YX0pOyAgICAgICAgXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QganNvbiA9IHtcclxuICAgICAgICAgICdyZXMnIDogJ05HJyxcclxuICAgICAgICAgICdtc2cnIDogJ+OCteODvOODkOODvOOBruaOpee2muOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgicgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnQUpBWF9DT01QTEVURV9DSEVDS1VTRVJBQ0NPVU5URVhJU1QnLCB7cmVzcG9uc2U6IGpzb259KTsgICAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICMg6Ieq5YuV44Ki44Oz44OV44Kp44Ot44O8XHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qLyAgXHJcbiAgICAvL+iHquWLleOCouODs+ODleOCqeODreODvOOCkumWi+Wni1xyXG4gICAgc3RhcnRBdXRvVW5Gb2xsb3dfYWpheCgpIHtcclxuICAgICAgLy9IT01F55S76Z2i44Gu6Ieq5YuV44Kk44Kk44ON44K544OG44O844K/44K544KS5a6f6KGM5Lit44Gr5aSJ5pu044GZ44KLXHJcbiAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ0hBTkdFX0FVVE9VTkZPTExPV1NUQVRVUycsIHtyZXNwb25zZTogJzInfSk7XHJcbiAgICAgIHJldHVybiBheGlvcy5nZXQoVVJMX0JBU0UgKyAnc3RhcnRhdXRvdW5mb2xsb3cnKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAvL0hPTUXnlLvpnaLjga7jg5Xjgqnjg63jg7zjgrnjg4bjg7zjgr/jgrnjgpLlvoXmqZ/kuK3jgavlpInmm7TjgZnjgotcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfQ0hBTkdFX0FVVE9VTkZPTExPV1NUQVRVUycsIHtyZXNwb25zZTogJzEnfSk7XHJcblxyXG4gICAgICAgICAgLy9IT01F55S76Z2i44Gu44OV44Kp44Ot44O844Oq44K544OI44KS5pu05paw44GZ44KLXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0RJU1BMQVlfQVVUT1VORk9MTE9XX1JFU1VMVCcsIHtyZXNwb25zZTogcmVzLmRhdGF9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZXMpID0+IHtcclxuICAgICAgICAvL0hPTUXnlLvpnaLjga7oh6rli5XjgqTjgqTjg43jgrnjg4bjg7zjgr/jgrnjgpLlvoXmqZ/kuK3jgavlpInmm7TjgZnjgotcclxuICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0NIQU5HRV9BVVRPVU5GT0xMT1dTVEFUVVMnLCB7cmVzcG9uc2U6ICcxJ30pO1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgICAgICAncmVzJyA6ICdORycsXHJcbiAgICAgICAgICAnbXNnJyA6ICfjgrXjg7zjg5Djg7zjga7mjqXntprjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILjg43jg4Pjg4jjg6/jg7zjgq/nrqHnkIbogIXjgavllY/jgYTlkIjjgo/jgZvjgabjgY/jgaDjgZXjgYTjgIInICAgXHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0RJU1BMQVlfQVVUT1VORk9MTE9XX1JFU1VMVCcsIHtyZXNwb25zZToganNvbn0pO1xyXG4gICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICMg44Oh44O844Or6YWN5L+hXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qLyBcclxuICAgIC8v44K744OD44K344On44Oz44Gu44Oh44O844Or6YWN5L+h54q25oWL44KS44K744OD44OI44GZ44KLXHJcbiAgICBjaGFuZ2VNYWlsU3RhdHVzX2FqYXgoc3RhdHVzKSB7XHJcbiAgICAgIHJldHVybiBheGlvcy5nZXQoVVJMX0JBU0UgKyAnY2hhbmdlbWFpbHN0YXR1cz9zdGF0dXM9JytzdGF0dXMpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHsgICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdBSkFYX0ZJTklTSF9DSEFOR0VfTUFJTFNUQVRVUycsIHtyZXNwb25zZTogcmVzLmRhdGF9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCByc3QgPSByZXMuZGF0YVxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfRklOSVNIX0NIQU5HRV9NQUlMU1RBVFVTJywge3Jlc3BvbnNlOiByc3R9KTtcclxuICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAjIOODreOCsOOCouOCpuODiFxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki8gXHJcbiAgICBsb2dvdXRfYWpheCgpIHsgICAgICBcclxuICAgICAgcmV0dXJuIGF4aW9zLmdldChVUkxfQkFTRSArICdsb2dvdXQnKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAvL0hPTUXnlLvpnaLjgavjg63jgrDjgqLjgqbjg4jjgpLnn6XjgonjgZvjgotcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfRklOSVNIX0xPR09VVF9SRVNVTFQnLCB7cmVzcG9uc2U6IHJlcy5kYXRhfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QganNvbiA9IHtcclxuICAgICAgICAgICdyZXMnIDogJ05HJyxcclxuICAgICAgICAgICdtc2cnIDogJ+ODreOCsOOCouOCpuODiOOBq+WkseaVl+OBl+OBvuOBl+OBn+OAguODjeODg+ODiOODr+ODvOOCr+euoeeQhuiAheOBq+WVj+OBhOWQiOOCj+OBm+OBpuOBj+OBoOOBleOBhOOAgicgICBcclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ0FKQVhfRklOSVNIX0xPR09VVF9SRVNVTFQnLCB7cmVzcG9uc2U6IGpzb259KTtcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAgICBcclxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgIyDjg6Hjg4Pjgrvjg7zjgrhcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovIFxyXG4gICAgLy/jg6Hjg4Pjgrvjg7zjgrjjgpLooajnpLrjgZnjgotcclxuICAgIGVtaXRfbWVzc2FnZShtc2cpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+ODoeODg+OCu+ODvOOCuOOCkuWPl+S/oeOBl+OBvuOBl+OBn++8gScrbXNnKVxyXG4gICAgICB0aGlzLiRlbWl0KCdESVNQTEFZX01FU1NBR0UnLCB7bWVzc2FnZTogbXNnfSlcclxuICAgIH0sXHJcbiAgXHJcbiAgfVxyXG59KTtcclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENvbnRyb2xsZXIudnVlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJheGlvc1wiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibC1zdWJQYWdlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYy1mb3JtLXdyYXBcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImMtaGVhZGluZyBwLWhlYWRpbmdfX3RpdGxlIHR4dF9jZW50ZXJcIj7jg6bjg7zjgrbjg7znmbvpjLI8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInAtZXJyb3ItYXJlYVwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8dHJhbnNpdGlvbi1ncm91cCBuYW1lPVwiZmxpcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImVycm9yIGluIGVycm9ycy5lcnJvclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtYmluZDprZXk9XCJlcnJvclwiPuODu3t7IGVycm9yIH19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC90cmFuc2l0aW9uLWdyb3VwPlxyXG4gICAgICAgICAgICA8L3VsPiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxJbnB1dEZvcm0gdi1vbjpvbkNoYW5nZT1cIm9uQ2hhbmdlKCRldmVudClcIiB0eXBlPVwidGV4dFwiIGxhYmVsPVwi44Om44O844K244O85ZCNKlwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiZXhhbXBsZVwiPjwvSW5wdXRGb3JtPlxyXG4gICAgICAgIDxJbnB1dEZvcm0gdi1vbjpvbkNoYW5nZT1cIm9uQ2hhbmdlKCRldmVudClcIiB0eXBlPVwidGV4dFwiIGxhYmVsPVwiRW1haWwqXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJleGFtcGxlQGdtYWlsLmNvbVwiPjwvSW5wdXRGb3JtPlxyXG4gICAgICAgIDxJbnB1dEZvcm0gdi1vbjpvbkNoYW5nZT1cIm9uQ2hhbmdlKCRldmVudClcIiB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIuODkeOCueODr+ODvOODiSpcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlwiPjwvSW5wdXRGb3JtPlxyXG4gICAgICAgIDxJbnB1dEZvcm0gdi1vbjpvbkNoYW5nZT1cIm9uQ2hhbmdlKCRldmVudClcIiB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIuODkeOCueODr+ODvOODieWGjeWFpeWKmypcIiBuYW1lPVwicmVfcGFzc1wiIHBsYWNlaG9sZGVyPVwiXCI+PC9JbnB1dEZvcm0+ICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInR4dF9jZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYy1idG5cIiB2LW9uOmNsaWNrPVwic2lnblVwXCI+55m76YyyPC9idXR0b24+ICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImMtZm9ybS13cmFwXCI+XHJcbiAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVwiYy1saW5rXCIgdG89XCIvc2lnbmluXCI+44Ot44Kw44Kk44Oz55S76Z2i44G4PC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8cD7jg5Hjgrnjg6/jg7zjg4njgpLlv5jjgozjgZ/mlrnjga88cm91dGVyLWxpbmsgY2xhc3M9XCJjLWxpbmtcIiB0bz1cIi9yZW1pbmRzZW5kXCI+44GT44Gh44KJPC9yb3V0ZXItbGluaz48L3A+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBpbnB1dGZvcm0gZnJvbSAnLi9JbnB1dEZvcm0udnVlJ1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXIudnVlJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBJbnB1dEZvcm06IGlucHV0Zm9ybVxyXG4gICAgfSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3JzOiAnJyxcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgICAgICByZV9wYXNzOiAnJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uQ2hhbmdlKCRldmVudCl7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gJGV2ZW50LmlucHV0Lm5hbWU7XHJcbiAgICAgICAgICAgIGlmKG5hbWU9PT1cInVzZXJuYW1lXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnVzZXJuYW1lPSRldmVudC5pbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihuYW1lPT09XCJlbWFpbFwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5lbWFpbD0kZXZlbnQuaW5wdXQudmFsdWVcclxuICAgICAgICAgICAgfWVsc2UgaWYobmFtZT09PVwicGFzc3dvcmRcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEucGFzc3dvcmQ9JGV2ZW50LmlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKG5hbWU9PT1cInJlX3Bhc3NcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEucmVfcGFzcz0kZXZlbnQuaW5wdXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2lnblVwKCl7ICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb250cm9sbGVyLnNpZ25VcF9hamF4KHRoaXMuZGF0YSlcclxuICAgICAgICAgICAgY29udHJvbGxlci4kb24oJ0FKQVhfQ09NUExFVEVfU0lHTlVQJywgKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5Yem55CG44GM44OV44Ot44Oz44OI44Gr5biw44Gj44Gm44GN44G+44GX44GfJylcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuZGlyKCRldmVudC5yZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIGlmKCRldmVudC5yZXNwb25zZS5yZXMgPT09ICdPSycpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycyA9ICRldmVudC5yZXNwb25zZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFNpZ25VcC52dWUiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYy1pbnB1dCBwLWlucHV0X19vcHRpb25cIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjLWlucHV0X19sYWJlbFwiPnt7bGFiZWx9fTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHYtb246a2V5dXA9XCJvbkNoYW5nZSgkZXZlbnQpXCIgdi1iaW5kOnR5cGU9XCJ0eXBlXCIgY2xhc3M9XCJjLWlucHV0X190eHQgcC1saWtlLWlucHV0X190eHRcIiB2LWJpbmQ6bmFtZT1cIm5hbWVcIiB2LWJpbmQ6cGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHNjcmlwdD5cclxuLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczpbXHJcbiAgICAgICAgJ3R5cGUnLFxyXG4gICAgICAgICdsYWJlbCcsXHJcbiAgICAgICAgJ25hbWUnLFxyXG4gICAgICAgICdwbGFjZWhvbGRlcidcclxuICAgIF0sXHJcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkNoYW5nZSgkZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnb25DaGFuZ2UnLCB7aW5wdXQ6ICRldmVudC50YXJnZXR9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIElucHV0Rm9ybS52dWUiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibC1zdWJQYWdlXCI+XHJcbiAgICA8TWVzc2FnZT48L01lc3NhZ2U+ICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImMtZm9ybS13cmFwXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjLWhlYWRpbmcgcC1oZWFkaW5nX190aXRsZSB0eHRfY2VudGVyXCI+44Ot44Kw44Kk44OzPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLWVycm9yLWFyZWFcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPHRyYW5zaXRpb24tZ3JvdXAgbmFtZT1cImZsaXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJlcnJvciBpbiBlcnJvcnMuZXJyb3JcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWJpbmQ6a2V5PVwiZXJyb3JcIj7jg7t7eyBlcnJvciB9fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbi1ncm91cD5cclxuICAgICAgICAgICAgPC91bD4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxJbnB1dEZvcm0gdi1vbjpvbkNoYW5nZT1cIm9uQ2hhbmdlKCRldmVudClcIiB0eXBlPVwidGV4dFwiIGxhYmVsPVwi44Om44O844K244O85ZCNKlwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiKOS+iylrYXp1a2ljaGlcIj48L0lucHV0Rm9ybT4gICAgICAgIFxyXG4gICAgICAgIDxJbnB1dEZvcm0gdi1vbjpvbkNoYW5nZT1cIm9uQ2hhbmdlKCRldmVudClcIiB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIuODkeOCueODr+ODvOODiSpcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlwiPjwvSW5wdXRGb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidHh0X2NlbnRlclwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjLWJ0blwiIHYtb246Y2xpY2s9XCJzaWduSW5cIj7jg63jgrDjgqTjg7M8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImMtZm9ybS13cmFwXCI+XHJcbiAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVwiYy1saW5rXCIgdG89XCIvc2lnbnVwXCI+PHNwYW4+44Om44O844K244O855m76Yyy55S76Z2i44G4PC9zcGFuPjwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPHA+44OR44K544Ov44O844OJ44KS5b+Y44KM44Gf5pa544GvPHJvdXRlci1saW5rIGNsYXNzPVwiYy1saW5rXCIgdG89XCIvcmVtaW5kc2VuZFwiPuOBk+OBoeOCiTwvcm91dGVyLWxpbms+PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBpbnB1dGZvcm0gZnJvbSAnLi9JbnB1dEZvcm0udnVlJ1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXIudnVlJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9TdG9yZS52dWUnXHJcbmltcG9ydCBtZXNzYWdlIGZyb20gJy4vbWVzc2FnZS52dWUnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIElucHV0Rm9ybTogaW5wdXRmb3JtLFxyXG4gICAgICAgIE1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICB9LFxyXG4gICAgZGF0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgICAgZXJyb3JzOiAnJyxcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjjgYzjgrvjg4Pjg4jjgZXjgozjgabjgYTjgozjgbDooajnpLrjgZnjgotcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICB9ICBcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25DaGFuZ2UoJGV2ZW50KXtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSAkZXZlbnQuaW5wdXQubmFtZTtcclxuICAgICAgICAgICAgaWYobmFtZT09PVwidXNlcm5hbWVcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudXNlcm5hbWU9JGV2ZW50LmlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKG5hbWU9PT1cInBhc3N3b3JkXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnBhc3N3b3JkPSRldmVudC5pbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaWduSW4oKXsgICBcclxuICAgICAgICAgICAgY29udHJvbGxlci5zaWduSW5fYWpheCh0aGlzLmRhdGEpXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuJG9uY2UoJ0FKQVhfQ09NUExFVEVfU0lHTklOJywgKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+ODleODreODs+ODiOOBq+W4sOOBo+OBpuOBjeOBn+ODh+ODvOOCv+KGkycpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UucmVzID09PSAnT0snKXtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCfjg63jgrDjgqTjg7PjgavmiJDlip/jgZfjgb7jgZfjgZ8nLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMgPSAkZXZlbnQucmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBTaWduSW4udnVlIiwiPHRlbXBsYXRlPiAgXHJcbjxkaXY+XHJcbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwiZmxpcFwiPlxyXG4gICAgPGRpdiB2LWlmPVwidmlzaWJsZT09PXRydWVcIiBjbGFzcz1cInAtbWVzc2FnZS1hcmVhXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgdi1pZj1cInN0YXR1cz09PXRydWVcIiBjbGFzcz1cInAtbWVzc2FnZS1hcmVhX19zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWluZm8tY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgdi1pZj1cInN0YXR1cz09PWZhbHNlXCIgY2xhc3M9XCJwLW1lc3NhZ2UtYXJlYV9fc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInAtbWVzc2FnZS1hcmVhX19tc2dcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicC1tZXNzYWdlLWFyZWFfbXNnLXZhbFwiPnt7bXNnfX08L3A+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICA8L2Rpdj4gICAgXHJcbiAgICA8L3RyYW5zaXRpb24+XHJcbiAgICBcclxuPC9kaXY+ICBcclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXIudnVlJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgIH0sXHJcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICAgICAgbXNnOiAnJyxcclxuICAgICAgICAgICAgdmlzaWJsZTpmYWxzZVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCAgIFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcucC1tYXNzYWdlLWFyZWEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcucC1zaWRlYmFyJykuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICAkKCcucC1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgLy8gJCgnLnAtc2lkZWJhcicpLmNzcygnbGVmdCcsJy0zMDBweCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcucC1zaWRlYmFyJykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgLy8gJCgnLnAtc2lkZWJhcicpLmNzcygnbGVmdCcsJzAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgLy8gdmlldyDjgYzkvZzjgonjgozjgZ/mmYLjgavjg4fjg7zjgr/jgpLlj5blvpfjgZfjgIFcclxuICAgICAgICAvLyDjgZ3jga7jg4fjg7zjgr/jga/ml6Ljgavnm6PoppbjgZXjgozjgabjgYTjgb7jgZlcclxuICAgICAgICB0aGlzLmZldGNoRGF0YSgpXHJcbiAgICB9LFxyXG4gICAgdXBkYXRlZCAoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgdGhpcy5zZXRmYWxzZVxyXG4gICAgICAgICwgMzAwMClcclxuICAgICAgICAvLyB0aGlzLnZpc2libGU9ZmFsc2VcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIC8vIOODq+ODvOODiOOBjOWkieabtOOBleOCjOOBn+OCieOBk+OBruODoeOCveODg+ODieOCkuWGjeOBs+WRvOOBs+WHuuOBl+OBvuOBmVxyXG4gICAgICAgICckcm91dGUnOiAnZmV0Y2hEYXRhJ1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBPbmNsaWNrKCl7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmV0Y2hEYXRhKCkge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLiRvbignRElTUExBWV9NRVNTQUdFJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn44Oh44OD44K744O844K444KS6KGo56S644GX44G+44GZPT4nK2V2ZW50Lm1lc3NhZ2UubXNnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBldmVudC5tZXNzYWdlLnN0YXR1c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tc2cgPSBldmVudC5tZXNzYWdlLm1zZ1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlPXRydWVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRmYWxzZSgpIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlPWZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1lc3NhZ2UudnVlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwianF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwibC1ob21lXCI+XHJcbiAgICAgICAgPE1lc3NhZ2U+PC9NZXNzYWdlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLXNpZGViYXJcIj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEF1dGhBY2NvdW50IHYtb246Y2hhbmdlLWFjdGl2ZS11c2VyPVwiY2hhbmdlQWN0aXZlVXNlcigkZXZlbnQpXCI+PC9BdXRoQWNjb3VudD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImMtYnRuIHAtc2lkZWJhcl9fYnRuIGpzLXRvZ2dsZS13aW5kb3dcIj48aSBjbGFzcz1cImZhcyBmYS1rZXlcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFVzZXJJbmZvIHYtaWY9XCJzaG93PT09dHJ1ZVwiIDpmb2xsb3dlcj1cImZvbGxvd2VyXCIgOmZyaWVuZHM9XCJmcmllbmRzXCIgOmFjY291bnRfbmFtZT1cImFjY291bnRfbmFtZVwiIDpkZXNjcmlwdGlvbj1cImRlc2NyaXB0aW9uXCIgOmltZ191cmw9XCJpbWdfdXJsXCI+PC9Vc2VySW5mbz5cclxuICAgIDxkaXYgdi1pZj1cIiBzaG93PT09dHJ1ZSBcIj5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJwLXN0YXR1cy13cmFwXCI+XHJcbiAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjLWJ0biBwLXN0YXR1c19faXRlbVwiIDpjbGFzcz1cInBfZm9sbG93X3N0YXR1c190b2dnbGVcIiB2LW9uOmNsaWNrPVwiY2hhbmdlRm9sbG93Q3JvblN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzPVwiZmFyIGZhLWhhbmRzaGFrZVwiPjwvaT4gZm9sbG93PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIgQXV0b0ZvbGxvd0Nyb25TdGF0dXMgPT09ICcwJyBcIj7kuIDmmYLlgZzmraLkuK0uLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVwiIEF1dG9Gb2xsb3dDcm9uU3RhdHVzID09PSAnMScgXCI+5b6F5qmf5LitLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cIiBBdXRvRm9sbG93Q3JvblN0YXR1cyA9PT0gJzInIFwiPuWun+ihjOS4rS4uLjwvc3Bhbj4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImMtYnRuIHAtc3RhdHVzX19pdGVtXCIgOmNsYXNzPVwicF9zdGF0dXNfdG9nZ2xlXCIgdi1vbjpjbGljaz1cImNoYW5nZUxpa2VDcm9uU3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3M9XCJmYXMgZmEtaGVhcnRcIj48L2k+IGxpa2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiBBdXRvTGlrZUNyb25TdGF0dXMgPT09ICcwJyBcIj7kuIDmmYLlgZzmraLkuK0uLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVwiIEF1dG9MaWtlQ3JvblN0YXR1cyA9PT0gJzEnIFwiPuW+heapn+S4rS4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XCIgQXV0b0xpa2VDcm9uU3RhdHVzID09PSAnMicgXCI+5a6f6KGM5LitLi4uPC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiYy1idG4gcC1zdGF0dXNfX2l0ZW1cIiA6Y2xhc3M9XCJwX3VuZm9sbG93X3N0YXR1c190b2dnbGVcIiB2LW9uOmNsaWNrPVwiY2hhbmdlVW5Gb2xsb3dDcm9uU3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3M9XCJmYXMgZmEtaGVhcnQtYnJva2VuXCI+PC9pPiBVbmZvbGxvdzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiIEF1dG9VbkZvbGxvd0Nyb25TdGF0dXMgPT09ICcwJyBcIj7kuIDmmYLlgZzmraLkuK0uLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVwiIEF1dG9VbkZvbGxvd0Nyb25TdGF0dXMgPT09ICcxJyBcIj7lvoXmqZ/kuK0uLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVwiIEF1dG9VbkZvbGxvd0Nyb25TdGF0dXMgPT09ICcyJyBcIj7lrp/ooYzkuK0uLi48L3NwYW4+ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjLWJ0biBwLXN0YXR1c19faXRlbVwiIDpjbGFzcz1cInBfbWFpbF9zdGF0dXNfdG9nZ2xlXCIgdi1vbjpjbGljaz1cImNoYW5nZU1haWxTdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD48aSBjbGFzcz1cImZhcyBmYS1wYXBlci1wbGFuZVwiPjwvaT4gTWFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiIE1haWxTdGF0dXMgPT09ICcwJyBcIj7phY3kv6FPRkY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVwiIE1haWxTdGF0dXMgPT09ICcxJyBcIj7phY3kv6FPTjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2xpPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDwvdWw+XHJcbiAgICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICAgICA8ZGl2IGNsYXNzPVwicC1tYWluLWFyZWFcIj5cclxuICAgICAgICA8TGlzdEl0ZW0gaGVhZGluZz1cImZvbGxvd1wiIGNsYXNzbmFtZT1cInAtaGVhZGluZ19fZm9sbG93XCIgdi1iaW5kOmxpc3RJdGVtcz1cImxpc3RJdGVtc19mb2xsb3dcIj48L0xpc3RJdGVtPlxyXG4gICAgICAgIDxMaXN0SXRlbSBoZWFkaW5nPVwibGlrZVwiICBjbGFzc25hbWU9XCJwLWhlYWRpbmdfX2xpa2VcIiB2LWJpbmQ6bGlzdEl0ZW1zPVwibGlzdEl0ZW1zX2xpa2VcIj48L0xpc3RJdGVtPlxyXG4gICAgICAgIDxMaXN0SXRlbSBoZWFkaW5nPVwidW5Gb2xsb3dcIiAgY2xhc3NuYW1lPVwicC1oZWFkaW5nX191bmZvbGxvd1wiIHYtYmluZDpsaXN0SXRlbXM9XCJsaXN0SXRlbXNfdW5mb2xsb3dcIj48L0xpc3RJdGVtPlxyXG4gICAgICAgIDxMaXN0SXRlbSBoZWFkaW5nPVwidHdlZXRzY2hlZHVsZVwiICBjbGFzc25hbWU9XCJwLWhlYWRpbmdfX3R3dHNjaGVkdWxlXCIgdi1iaW5kOmxpc3RJdGVtcz1cImxpc3RJdGVtc19zY2hlZHVsZVwiPjwvTGlzdEl0ZW0+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHVzZXJpbmZvIGZyb20gJy4vVXNlckluZm8udnVlJ1xyXG5pbXBvcnQgdG9kb2xpc3QgZnJvbSAnLi9LZXl3b3JkTGlzdC52dWUnXHJcbmltcG9ydCBsaXN0aXRlbSBmcm9tICcuL0xpc3RpdGVtLnZ1ZSdcclxuaW1wb3J0IGF1dGhhY2NvdW50IGZyb20gJy4vQXV0aEFjY291bnQudnVlJ1xyXG5pbXBvcnQgbWVzc2FnZSBmcm9tICcuL21lc3NhZ2UudnVlJ1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXIudnVlJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9TdG9yZS52dWUnXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgVXNlckluZm86IHVzZXJpbmZvLFxyXG4gICAgICAgIExpc3RJdGVtOiBsaXN0aXRlbSxcclxuICAgICAgICBBdXRoQWNjb3VudDogYXV0aGFjY291bnQsXHJcbiAgICAgICAgTWVzc2FnZTogbWVzc2FnZSwgICAgICAgIFxyXG4gICAgfSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHsgICAgXHJcbiAgICAgICAgICAgIHNob3c6ZmFsc2UsICAgICAgICBcclxuICAgICAgICAgICAgZm9sbG93ZXI6IDAsXHJcbiAgICAgICAgICAgIGZyaWVuZHM6IDAsXHJcbiAgICAgICAgICAgIGFjY291bnRfbmFtZTogJycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgaW1nX3VybDogJycsXHJcbiAgICAgICAgICAgIGxpc3RJdGVtc19saWtlOiBbXSxcclxuICAgICAgICAgICAgbGlzdEl0ZW1zX3NjaGVkdWxlOiBbXSxcclxuICAgICAgICAgICAgbGlzdEl0ZW1zX2ZvbGxvdzpbXSxcclxuICAgICAgICAgICAgbGlzdEl0ZW1zX3VuZm9sbG93OltdLFxyXG4gICAgICAgICAgICBBdXRvTGlrZUNyb25TdGF0dXM6ICcwJywvL+iHquWLleOCpOOCpOODjeapn+iDveOBruWLleS9nOeKtuaFi+OAgDA65YGc5q2i5Lit44CAMTrlvoXmqZ/kuK3jgIAyOuWun+ihjOS4rVxyXG4gICAgICAgICAgICBBdXRvRm9sbG93Q3JvblN0YXR1czogJzAnLC8v6Ieq5YuV44OV44Kp44Ot44O85qmf6IO944Gu5YuV5L2c54q25oWL44CAMDrlgZzmraLkuK3jgIAxOuW+heapn+S4reOAgDI65a6f6KGM5LitXHJcbiAgICAgICAgICAgIEF1dG9VbkZvbGxvd0Nyb25TdGF0dXM6ICcwJywvL+iHquWLleOCouODs+ODleOCqeODreODvOapn+iDveOBruWLleS9nOeKtuaFi+OAgDA65YGc5q2i5Lit44CAMTrlvoXmqZ/kuK3jgIAyOuWun+ihjOS4rVxyXG4gICAgICAgICAgICBNYWlsU3RhdHVzOiAnMCcsLy/jg6Hjg7zjg6vphY3kv6Hli5XkvZznirbmhYvjgIAwOumFjeS/oU9GRuOAgDE66YWN5L+hT05cclxuICAgICAgICAgICAgcF9zdGF0dXNfdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgICAgICAncC1idG5faG9tZS1saWtlLS1leGVjJyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgJ3AtYnRuX2hvbWUtbGlrZS0tc3RheScgOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcF9mb2xsb3dfc3RhdHVzX3RvZ2dsZToge1xyXG4gICAgICAgICAgICAgICAgJ3AtYnRuX2hvbWUtZm9sbG93LS1leGVjJyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgJ3AtYnRuX2hvbWUtZm9sbG93LS1zdGF5JyA6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwX3VuZm9sbG93X3N0YXR1c190b2dnbGU6IHtcclxuICAgICAgICAgICAgICAgICdwLWJ0bl9ob21lLXVuZm9sbG93LS1leGVjJyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgJ3AtYnRuX2hvbWUtdW5mb2xsb3ctLXN0YXknIDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBfbWFpbF9zdGF0dXNfdG9nZ2xlOiB7XHJcbiAgICAgICAgICAgICAgICAncC1idG5faG9tZS1tYWlsLS1leGVjJyA6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH0sIFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAvL+ODreOCsOOCpOODs+ODgeOCp+ODg+OCr+e1kOaenFxyXG4gICAgICAgIGNvbnRyb2xsZXIuY2hlY2tMb2dpbl9hamF4KClcclxuICAgICAgICBjb250cm9sbGVyLiRvbmNlKCdBSkFYX0NPTVBMRVRFX0NIRUNLTE9HSU4nLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdERUJVRyAtLSBIb21lLnZ1ZSAtLT4g44Ot44Kw44Kk44Oz44OB44Kn44OD44Kv44GM5a6M5LqG44GX44G+44GX44GfJylcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJGV2ZW50LnJlc3BvbnNlLnJlcylcclxuICAgICAgICAgICAgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ05PVExPR0lOJyApe1xyXG4gICAgICAgICAgICAgICAgLy/jg63jgrDjgqTjg7Pjg6bjg7zjgrbjg7zjgafjgarjgYTjgZ/jgoHjg63jgrDjgqTjg7PnlLvpnaLjgavpo5vjgbDjgZfjgb7jgZnjgIJcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfjg63jgrDjgqTjg7Pjg6bjg7zjgrbjg7zjgafjgYLjgorjgb7jgZvjgpPjgIInKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfjg63jgrDjgqTjg7Pjg6bjg7zjgrbjg7zjgafjgZnjgIInKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgdGhhdD10aGlzXHJcblxyXG4gICAgICAgIC8vanF1ZXJ56Kit572uXHJcbiAgICAgICAgJCgnLmpzLXRvZ2dsZS13aW5kb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcucC1zaWRlYmFyJykuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICAkKCcucC1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgLy8gJCgnLnAtc2lkZWJhcicpLmNzcygnbGVmdCcsJy0zMDBweCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcucC1zaWRlYmFyJykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgLy8gJCgnLnAtc2lkZWJhcicpLmNzcygnbGVmdCcsJzAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8v44Ot44Kw44Kk44Oz44OB44Kn44OD44Kv57WQ5p6cXHJcbiAgICAgICAgY29udHJvbGxlci5jaGVja0xvZ2luX2FqYXgoKVxyXG4gICAgICAgIGNvbnRyb2xsZXIuJG9uY2UoJ0FKQVhfQ09NUExFVEVfQ0hFQ0tMT0dJTicsICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0RFQlVHIC0tIEhvbWUudnVlIC0tPiDjg63jgrDjgqTjg7Pjg4Hjgqfjg4Pjgq/jgYzlrozkuobjgZfjgb7jgZfjgZ8nKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygkZXZlbnQucmVzcG9uc2UucmVzKVxyXG4gICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UucmVzID09PSAnTk9UTE9HSU4nICl7XHJcbiAgICAgICAgICAgICAgICAvL+ODreOCsOOCpOODs+ODpuODvOOCtuODvOOBp+OBquOBhOOBn+OCgeODreOCsOOCpOODs+eUu+mdouOBq+mjm+OBsOOBl+OBvuOBmeOAglxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ODreOCsOOCpOODs+ODpuODvOOCtuODvOOBp+OBguOCiuOBvuOBm+OCk+OAgicpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ODreOCsOOCpOODs+ODpuODvOOCtuODvOOBp+OBmeOAgicpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjjgYzjgrvjg4Pjg4jjgZXjgozjgabjgYTjgozjgbDooajnpLrjgZnjgotcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvL+OBhOOBhOOBreOBruWHpueQhuOBjOWujOS6huOBl+OBn+OBqOOBjeOBq+OBk+OBk+OBq+OBj+OCi1xyXG4gICAgICAgIC8v44GE44GE44Gt44GX44Gf44OE44Kk44O844OI44Gu5LiA6Kan44KS6KGo56S644GZ44KLXHJcbiAgICAgICAgY29udHJvbGxlci5nZXRMaWtlZExpc3RTZXNzaW9uX2FqYXgoKVxyXG4gICAgICAgIGNvbnRyb2xsZXIuJG9uKCdBSkFYX0RJU1BMQVlfQVVUT0xJS0VfUkVTVUxUJywgKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnREVCVUcgLS0gSG9tZS52dWUgLS0+IOOBhOOBhOOBre+8geOCkuOBl+OBn+ODquOCueODiOOCkuabtOaWsOOBl+OBvuOBmScpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKCRldmVudC5yZXNwb25zZS5yc3QpXHJcbiAgICAgICAgICAgIGlmKCRldmVudC5yZXNwb25zZS5yZXMgPT09ICdPSycpe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKCRldmVudC5yZXNwb25zZS5yc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gJGV2ZW50LnJlc3BvbnNlLnJzdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gJGV2ZW50LnJlc3BvbnNlLnJzdC5sZW5ndGhcclxuICAgICAgICAgICAgICAgIHRoYXQubGlzdEl0ZW1zX2xpa2U9W10gLy9saXN044KS5Yid5pyf5YyWXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9EQuOBi+OCieWPluW+l+OBl+OBn0xpc3Tmg4XloLHjgpJkYXRhc+OBq+agvOe0jeOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgIC8vKCDlj6QgLC0tLC0tLSwtLS0+LOaWsCnjga7poIbjgaflhaXjgaPjgabjgYTjgovjgYvjgol1bnNoaWZ044Gr44GX44GmKCDmlrAgLC0tLC0tLSwtLS0+LOWPpCnjgajjgZfjgaZcclxuICAgICAgICAgICAgICAgICAgICAvL0hPTUXnlLvpnaLjgafkuIrjgYvjgonmmYLns7vliJfpoIbjgavkuKbjgbbjgojjgYbjgavjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3RJdGVtc19saWtlLnVuc2hpZnQoe2lkOiByZXN1bHRbaV1bJ2lkJ10sIG5hbWU6cmVzdWx0W2ldWyduYW1lJ10sIHRleHQ6cmVzdWx0W2ldWyd0ZXh0J10sIGNyZWF0ZWRfYXQ6cmVzdWx0W2ldWydjcmVhdGVkX2F0J119KSAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9ZWxzZSBpZigkZXZlbnQucmVzcG9uc2UucnN0ID09IG51bGwpey8v44GE44GE44Gt44Gu44Oq44Kv44Ko44K544OI44GM44GZ44G544Gm5aSx5pWX44GX44Gf5aC05ZCI44GvbnVsbOOBjOi/lOOCi+OAguODquOCr+OCqOOCueODiOS4iumZkOOBruWPr+iDveaAp+OBjOmrmOOBhFxyXG4gICAgICAgICAgICAgICAgLy/jg6zjgrnjg53jg7PjgrnjgYxudWxs44Gu5aC05ZCI44GvQVBJ44Gu44Oq44Kv44Ko44K544OI5LiK6ZmQ44Go5Yik5pat44GZ44KLXHJcbiAgICAgICAgICAgICAgICAvL+iHquWLleOCpOOCpOODjeOCkuS4gOaZguWBnOatoueKtuaFi+OBq+OBl+OBpuOAgeODoeODg+OCu+ODvOOCuOOBp+ihqOekuuOBmeOCi1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0RFQlVHIC0tIEhvbWUudnVlIC0tPiBBUEnjga7jg6rjgq/jgqjjgrnjg4jkuIrpmZDjgavpgZTjgZfjgZ/lj6/og73mgKfjgYzjgYLjgorjgb7jgZknKVxyXG5cclxuICAgICAgICAgICAgICAgIC8v6Ieq5YuV44GE44GE44Gt44KS5YGc5q2i54q25oWL44Gr44GZ44KLXHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1dG9MaWtlQ3JvblN0YXR1cyA9ICAnMCdcclxuICAgICAgICAgICAgICAgIHN0b3JlLnNldEF1dG9MaWtlQ3JvblN0YXR1cygnMCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWxpa2UtLWV4ZWMnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtbGlrZS0tc3RheScsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjooajnpLpcclxuICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJ+OBhOOBhOOBreWItumZkOOAgeOBguOCi+OBhOOBr+mAmuS/oeeSsOWig+OBq+WVj+mhjOOBjOOBguOCi+WPr+iDveaAp+OBguOCiuOBvuOBmeOAguOBhOOBhOOBreOCkuS4gOaZguWBnOatouOBl+OBvuOBmeOAgicsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfWVsc2V7Ly/pgJrluLjjga7jgqjjg6njg7zjg5Xjg63jg7xcclxuICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCRldmVudC5yZXNwb25zZS5tc2csIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy/oh6rli5Xjg5Xjgqnjg63jg7zjgYzlrozkuobjgZfjgZ/jgajjgY3jgavjgZPjgZPjgavjgY/jgotcclxuICAgICAgICAvL+ato+W4uOOBq+OBmeOBueOBpuOBruODleOCqeODreODvOOBjOWujOS6huOBl+OBn+KHkuODleOCqeODreODvOOBl+OBn+OCouOCq+OCpuODs+ODiOOBruODquOCueODiOOCkuabtOaWsOOBmeOCi1xyXG4gICAgICAgIC8v5Yi26ZmQ44Gr44GL44GL44Gj44Gf4oeSMTXliIblvozjgavjgoLjgYbkuIDluqboh6rli5Xjg5Xjgqnjg63jg7zjgpLlho3plovjgZnjgotcclxuICAgICAgICBjb250cm9sbGVyLmdldEZvbGxvd2VkTGlzdF9hamF4KClcclxuICAgICAgICBjb250cm9sbGVyLiRvbignQUpBWF9ESVNQTEFZX0FVVE9GT0xMT1dfUkVTVUxUJywgKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn44OV44Kp44Ot44O844Oq44K544OI5Y+W5b6X44GM44GL44GI44Gm44Gm44GN44GfJylcclxuICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoJGV2ZW50LnJlc3BvbnNlLnJzdClcclxuICAgICAgICAgICAgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ09LJyl7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnREVCVUcgLS0gSG9tZS52dWUgLS0+IOODleOCqeODreODvOODquOCueODiOOCkuabtOaWsOOBl+OBvuOBmScpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UucnN0KVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoJGV2ZW50LnJlc3BvbnNlLnJzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSAkZXZlbnQucmVzcG9uc2UucnN0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSAkZXZlbnQucmVzcG9uc2UucnN0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgdGhhdC5saXN0SXRlbXNfZm9sbG93PVtdIC8vbGlzdOOCkuWIneacn+WMllxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vRELjgYvjgonlj5blvpfjgZfjgZ9MaXN05oOF5aCx44KSZGF0YXPjgavmoLzntI3jgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAvLygg5Y+kICwtLSwtLS0sLS0tPizmlrAp44Gu6aCG44Gn5YWl44Gj44Gm44GE44KL44GL44KJdW5zaGlmdOOBq+OBl+OBpigg5pawICwtLSwtLS0sLS0tPizlj6Qp44Go44GX44GmXHJcbiAgICAgICAgICAgICAgICAgICAgLy9IT01F55S76Z2i44Gn5LiK44GL44KJ5pmC57O75YiX6aCG44Gr5Lim44G244KI44GG44Gr44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5saXN0SXRlbXNfZm9sbG93LnVuc2hpZnQoe2lkOiByZXN1bHRbaV1bJ2lkJ10sIG5hbWU6cmVzdWx0W2ldWyduYW1lJ10sIHRleHQ6cmVzdWx0W2ldWyd0ZXh0J10sIGNyZWF0ZWRfYXQ6cmVzdWx0W2ldWydjcmVhdGVkX2F0J119KSAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy/oh6rli5Xjg5Xjgqnjg63jg7zjgpLlgZzmraLkuK3jgavjgZnjgotcclxuICAgICAgICAgICAgICAgIC8vIHN0b3JlLnNldEF1dG9Gb2xsb3dDcm9uU3RhdHVzKCcwJylcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuQXV0b0ZvbGxvd0Nyb25TdGF0dXMgPSAnMCdcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuJHNldCh0aGlzLnBfZm9sbG93X3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWZvbGxvdy0tc3RheScsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kc2V0KHRoaXMucF9mb2xsb3dfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtZm9sbG93LS1leGVjJywgZmFsc2UpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8v5qyh44Gu44OV44Kp44Ot44O86ZaL5aeL5pmC6ZaT44KSMTXliIblvozjgavoqK3lrprjgZnjgotcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vd19tcyA9IG5vdy5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXROZXh0Rm9sbG93VGltZShub3dfbXMgKyA5MDUwMDAsIG5vd19tcykvLzE15YiG5b6M44Gr6Kit5a6a44CANeenkuOBr+awl+aMgeOBoVxyXG5cclxuICAgICAgICAgICAgICAgIC8v6Ieq5YuV44OV44Kp44Ot44O844KS5YaN6ZaL6Zai5pWw44KS6ZaL5aeL44GZ44KLXHJcbiAgICAgICAgICAgICAgICB0aGF0LiRjcm9udGFiLmVuYWJsZUpvYigncmVTdGFydEF1dG9Gb2xsb3cnKVxyXG5cclxuICAgICAgICAgICAgICAgIC8v44OV44Kp44Ot44O85pWw44KS5pu05paw44GZ44KLXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKClcclxuXHJcbiAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKCRldmVudC5yZXNwb25zZS5yZXMgPT09ICdMSU1JVCcgfHwgJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ0ZPTExPV0xJTUlUJykge1xyXG4gICAgICAgICAgICAgICAgLy8nTElNSVQnOiAgICAgICDjgr/jg7zjgrLjg4Pjg4jjgqLjgqvjgqbjg7Pjg4jjgYvjgonjga7jg5Xjgqnjg63jg6/jg7zlj5blvpfliLbpmZDjgavlvJXjgaPjgYvjgYvjgaPjgZ/loLTlkIhcclxuICAgICAgICAgICAgICAgIC8vJ0ZPTExPV0xJTUlUJzog44OV44Kp44Ot44O85LiK6ZmQ44Gr5byV44Gj44GL44GL44Gj44Gf5aC05ZCIXHJcbiAgICAgICAgICAgICAgICAvL2Nyb250YWLjgacxNeWIhuW+jOOBq+ODleOCqeODreODvOOCkuWGjemWi+OBmeOCi1xyXG4gICAgICAgICAgICAgICAgLy8nRk9MTE9XTElNSVQn44Gu5aC05ZCI44GvMTXliIbjgafop6PpmaTjgZXjgozjgarjgYTjgYzjgIHop6PpmaTjgZXjgozjgabjgYTjgarjgYTjgajjgoLjgYbkuIDluqbjgZPjgZPjgavpo5vjgpPjgafjgY/jgovjgYvjgonjgajjgorjgYLjgYjjgZonTElNSVQn44Go5YWx6YCa5YyWXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8v5qyh44Gu44OV44Kp44Ot44O86ZaL5aeL5pmC6ZaT44KSMTXliIblvozjgavoqK3lrprjgZnjgotcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vd19tcyA9IG5vdy5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXROZXh0Rm9sbG93VGltZShub3dfbXMgKyA5MDUwMDAsIG5vd19tcykvLzE15YiG5b6M44Gr6Kit5a6a44CANeenkuOBr+awl+aMgeOBoVxyXG5cclxuICAgICAgICAgICAgICAgIC8v6Ieq5YuV44OV44Kp44Ot44O844KS5YaN6ZaL6Zai5pWw44KS6ZaL5aeL44GZ44KLXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGF0LiRjcm9udGFiLmVuYWJsZUpvYigncmVTdGFydEF1dG9Gb2xsb3cnKVxyXG5cclxuICAgICAgICAgICAgICAgIC8v44Oq44K544OI44KS5pu05paw44GZ44KLXHJcbiAgICAgICAgICAgICAgICBjb25zdCByc3QgPSAkZXZlbnQucmVzcG9uc2UucnN0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSAkZXZlbnQucmVzcG9uc2UucnN0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgdGhhdC5saXN0SXRlbXNfZm9sbG93PVtdIC8vbGlzdOOCkuWIneacn+WMllxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vRELjgYvjgonlj5blvpfjgZfjgZ9MaXN05oOF5aCx44KSZGF0YXPjgavmoLzntI3jgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAvLygg5Y+kICwtLSwtLS0sLS0tPizmlrAp44Gu6aCG44Gn5YWl44Gj44Gm44GE44KL44GL44KJdW5zaGlmdOOBq+OBl+OBpigg5pawICwtLSwtLS0sLS0tPizlj6Qp44Go44GX44GmXHJcbiAgICAgICAgICAgICAgICAgICAgLy9IT01F55S76Z2i44Gn5LiK44GL44KJ5pmC57O75YiX6aCG44Gr5Lim44G244KI44GG44Gr44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5saXN0SXRlbXNfZm9sbG93LnVuc2hpZnQoe2lkOiByc3RbaV1bJ2lkJ10sIG5hbWU6cnN0W2ldWyduYW1lJ10sIHRleHQ6cnN0W2ldWyd0ZXh0J10sIGNyZWF0ZWRfYXQ6cnN0W2ldWydjcmVhdGVkX2F0J119KSAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy/jg5Xjgqnjg63jg7zmlbDjgpLmm7TmlrDjgZnjgotcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oKVxyXG5cclxuICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCRldmVudC5yZXNwb25zZS5tc2csIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfWVsc2UgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ1VQREFURUQnKXsgLy/nlLvpnaLmm7TmlrDjga7loLTlkIjjgavjgIHjgZnjgafjgavjg5Xjgqnjg63jg7zmuIjjg6rjgrnjg4jjgpLooajnpLrjgZnjgotcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdERUJVRyAtLSBIb21lLnZ1ZSAtLT4gVVBEQVRFIOODleOCqeODreODvOODquOCueODiOOCkuabtOaWsOOBl+OBvuOBmScpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UucnN0KVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoJGV2ZW50LnJlc3BvbnNlLnJzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSAkZXZlbnQucmVzcG9uc2UucnN0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSAkZXZlbnQucmVzcG9uc2UucnN0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgdGhhdC5saXN0SXRlbXNfZm9sbG93PVtdIC8vbGlzdOOCkuWIneacn+WMllxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vRELjgYvjgonlj5blvpfjgZfjgZ9MaXN05oOF5aCx44KSZGF0YXPjgavmoLzntI3jgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAvLygg5Y+kICwtLSwtLS0sLS0tPizmlrAp44Gu6aCG44Gn5YWl44Gj44Gm44GE44KL44GL44KJdW5zaGlmdOOBq+OBl+OBpigg5pawICwtLSwtLS0sLS0tPizlj6Qp44Go44GX44GmXHJcbiAgICAgICAgICAgICAgICAgICAgLy9IT01F55S76Z2i44Gn5LiK44GL44KJ5pmC57O75YiX6aCG44Gr5Lim44G244KI44GG44Gr44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5saXN0SXRlbXNfZm9sbG93LnB1c2goe2lkOiByZXN1bHRbaV1bJ2lkJ10sIG5hbWU6cmVzdWx0W2ldWyduYW1lJ10sIHRleHQ6cmVzdWx0W2ldWyd0ZXh0J10sIGNyZWF0ZWRfYXQ6cmVzdWx0W2ldWydjcmVhdGVkX2F0J119KSAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKCRldmVudC5yZXNwb25zZS5yZXMgPT09ICdTUEFNJyl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/jgqLjgqvjgqbjg7Pjg4jjgYzlgZzmraLjgZXjgozjgZ/loLTlkIjjgavjgZPjgZPjgavmnaXjgotcclxuICAgICAgICAgICAgICAgIC8v44Oq44K544OI44KS5pu05paw44GX44Gm44CB44GZ44G544Gm44Gu5qmf6IO944KSb2Zm44Gr44GZ44KLXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0RFQlVHIC0tIEhvbWUudnVlIC0tPiBVUERBVEUg44OV44Kp44Ot44O844Oq44K544OI44KS5pu05paw44GX44G+44GZJylcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKCRldmVudC5yZXNwb25zZS5yc3QpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UucnN0Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICRldmVudC5yZXNwb25zZS5yc3RcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9ICRldmVudC5yZXNwb25zZS5yc3QubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxpc3RJdGVtc19mb2xsb3c9W10gLy9saXN044KS5Yid5pyf5YyWXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9EQuOBi+OCieWPluW+l+OBl+OBn0xpc3Tmg4XloLHjgpJkYXRhc+OBq+agvOe0jeOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgIC8vKCDlj6QgLC0tLC0tLSwtLS0+LOaWsCnjga7poIbjgaflhaXjgaPjgabjgYTjgovjgYvjgol1bnNoaWZ044Gr44GX44GmKCDmlrAgLC0tLC0tLSwtLS0+LOWPpCnjgajjgZfjgaZcclxuICAgICAgICAgICAgICAgICAgICAvL0hPTUXnlLvpnaLjgafkuIrjgYvjgonmmYLns7vliJfpoIbjgavkuKbjgbbjgojjgYbjgavjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3RJdGVtc19mb2xsb3cucHVzaCh7aWQ6IHJlc3VsdFtpXVsnaWQnXSwgbmFtZTpyZXN1bHRbaV1bJ25hbWUnXSwgdGV4dDpyZXN1bHRbaV1bJ3RleHQnXSwgY3JlYXRlZF9hdDpyZXN1bHRbaV1bJ2NyZWF0ZWRfYXQnXX0pICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL+iHquWLleODleOCqeODreODvOWBnOatolxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0QXV0b0ZvbGxvd0Nyb25TdGF0dXMoJzAnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5BdXRvRm9sbG93Q3JvblN0YXR1cyA9ICcwJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF9mb2xsb3dfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtZm9sbG93LS1zdGF5JywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX2ZvbGxvd19zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS1mb2xsb3ctLWV4ZWMnLCBmYWxzZSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iHquWLleOCouODs+ODleOCqeODreODvOWBnOatolxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0QXV0b1VuRm9sbG93Q3JvblN0YXR1cygnMCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1dG9VbkZvbGxvd0Nyb25TdGF0dXMgPSAnMCdcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfdW5mb2xsb3dfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtdW5mb2xsb3ctLXN0YXknLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfdW5mb2xsb3dfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtdW5mb2xsb3ctLWV4ZWMnLCBmYWxzZSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iHquWLleOBhOOBhOOBreWBnOatolxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0QXV0b0xpa2VDcm9uU3RhdHVzKCcwJylcclxuICAgICAgICAgICAgICAgIHRoaXMuQXV0b0xpa2VDcm9uU3RhdHVzID0gJzAnXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWxpa2UtLXN0YXknLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtbGlrZS0tZXhlYycsIGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgICAgIC8v44Oh44O844Or6YCB5L+h5YGc5q2iXHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRNYWlsU3RhdHVzKCcwJylcclxuICAgICAgICAgICAgICAgIHRoaXMuTWFpbFN0YXR1cyA9ICcwJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF9tYWlsX3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLW1haWwtLWV4ZWMnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuY2hhbmdlTWFpbFN0YXR1c19hamF4KCcwJylcclxuXHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCRldmVudC5yZXNwb25zZS5tc2csIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8v5qyh44Gu44OV44Kp44Ot44O86ZaL5aeL5pmC6ZaT44KSMTXliIblvozjgavoqK3lrprjgZnjgotcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vd19tcyA9IG5vdy5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXROZXh0Rm9sbG93VGltZShub3dfbXMgKyA5MDUwMDAsIG5vd19tcykvLzE15YiG5b6M44Gr6Kit5a6a44CANeenkuOBr+awl+aMgeOBoVxyXG5cclxuICAgICAgICAgICAgICAgIC8v6Ieq5YuV44OV44Kp44Ot44O844KS5YaN6ZaL6Zai5pWw44KS6ZaL5aeL44GZ44KLXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGF0LiRjcm9udGFiLmVuYWJsZUpvYigncmVTdGFydEF1dG9Gb2xsb3cnKVxyXG5cclxuICAgICAgICAgICAgICAgIC8v6Ieq5YuV44OV44Kp44Ot44O844KS5YGc5q2i5Lit44Gr44GZ44KLXHJcbiAgICAgICAgICAgICAgICAvLyBzdG9yZS5zZXRBdXRvRm9sbG93Q3JvblN0YXR1cygnMCcpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkF1dG9Gb2xsb3dDcm9uU3RhdHVzID0gJzAnXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLiRzZXQodGhpcy5wX2ZvbGxvd19zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS1mb2xsb3ctLXN0YXknLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuJHNldCh0aGlzLnBfZm9sbG93X3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWZvbGxvdy0tZXhlYycsIGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgICAgIC8v6Ieq5YuV44OV44Kp44Ot44O844GM5a6f6KGM5Lit44Gu5aC05ZCI44Gv5a6f6KGM44GZ44KLXHJcbiAgICAgICAgICAgICAgICAvL3RoYXQuJGNyb250YWIuZW5hYmxlSm9iKCdzdGFydEF1dG9Gb2xsb3cnKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KSBcclxuXHJcbiAgICAgICAgLy/mrKHjga7jgqLjg7Pjg5Xjgqnjg63jg7zplovlp4vmmYLplpPjgpIx5YiG5b6M44Gr6Kit5a6a44GZ44KLXHJcbiAgICAgICAgLy/mnIDliJ3jga8x5YiG44GC44GR44KLXHJcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG4gICAgICAgIGNvbnN0IG5vd19tcyA9IG5vdy5nZXRUaW1lKCk7XHJcbiAgICAgICAgc3RvcmUuc2V0TmV4dFVuRm9sbG93VGltZShub3dfbXMgKyA2MDAwMCkvLzHliIblvozjgavoqK3lrppcclxuXHJcbiAgICAgICAgLy/oh6rli5XjgqLjg7Pjg5Xjgqnjg63jg7zjgYzlrozkuobjgZfjgZ/jgajjgY3jgavjgZPjgZPjgavjgY/jgotcclxuICAgICAgICAvL+ato+W4uOOBq+OBmeOBueOBpuOBruOCouODs+ODleOCqeODreODvOOBjOWujOS6huOBl+OBn+KHkuODleOCqeODreODvOOBl+OBn+OCouOCq+OCpuODs+ODiOOBruODquOCueODiOOCkuabtOaWsOOBmeOCi1xyXG4gICAgICAgIC8v5Yi26ZmQ44Gr44GL44GL44Gj44Gf4oeSMTXliIblvozjgavjgoLjgYbkuIDluqboh6rli5Xjg5Xjgqnjg63jg7zjgpLlho3plovjgZnjgotcclxuICAgICAgICAvL2NvbnRyb2xsZXIuc3RhcnRBdXRvVW5Gb2xsb3dfYWpheCgpXHJcbiAgICAgICAgY29udHJvbGxlci5nZXRVbkZvbGxvd2VkTGlzdF9hamF4KClcclxuICAgICAgICBjb250cm9sbGVyLiRvbignQUpBWF9ESVNQTEFZX0FVVE9VTkZPTExPV19SRVNVTFQnLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfjgqLjg7Pjg5Xjgqnjg63jg7zlrozkuobjgZfjgb7jgZfjgZ8nKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UucnN0KVxyXG4gICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UucmVzID09PSAnT0snKXtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdERUJVRyAtLSBIb21lLnZ1ZSAtLT4g44Ki44Oz44OV44Kp44Ot44O844Oq44K544OI44KS5pu05paw44GX44G+44GZJylcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKCRldmVudC5yZXNwb25zZS5yc3QpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UucnN0Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICRldmVudC5yZXNwb25zZS5yc3RcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9ICRldmVudC5yZXNwb25zZS5yc3QubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxpc3RJdGVtc191bmZvbGxvdz1bXSAvL2xpc3TjgpLliJ3mnJ/ljJZcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAvL0RC44GL44KJ5Y+W5b6X44GX44GfTGlzdOaDheWgseOCkmRhdGFz44Gr5qC857SN44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgLy8oIOWPpCAsLS0sLS0tLC0tLT4s5pawKeOBrumghuOBp+WFpeOBo+OBpuOBhOOCi+OBi+OCiXVuc2hpZnTjgavjgZfjgaYoIOaWsCAsLS0sLS0tLC0tLT4s5Y+kKeOBqOOBl+OBplxyXG4gICAgICAgICAgICAgICAgICAgIC8vSE9NReeUu+mdouOBp+S4iuOBi+OCieaZguezu+WIl+mghuOBq+S4puOBtuOCiOOBhuOBq+OBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdEl0ZW1zX3VuZm9sbG93LnVuc2hpZnQoe2lkOiByZXN1bHRbaV1bJ2lkJ10sIG5hbWU6cmVzdWx0W2ldWyduYW1lJ10sIHRleHQ6cmVzdWx0W2ldWyd0ZXh0J10sIGNyZWF0ZWRfYXQ6cmVzdWx0W2ldWydjcmVhdGVkX2F0J119KSAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy/jg5Xjgqnjg63jg6/jg7zmlbDjgpLmm7TmlrDjgZnjgotcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oKVxyXG5cclxuICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCRldmVudC5yZXNwb25zZS5tc2csIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL+OCouODs+ODleOCqeODreODvOOCkjE15YiG5b6M44Gr5YaN6ZaL44GZ44KLXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3dfbXMgPSBub3cuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0TmV4dFVuRm9sbG93VGltZShub3dfbXMgKyA5MDAwMDApLy8xNeWIhuW+jOOBq+ioreWumlxyXG5cclxuICAgICAgICAgICAgICAgIC8v6Ieq5YuV44Ki44Oz44OV44Kp44Ot44O844KS5YaN6ZaL6Zai5pWw44KS6ZaL5aeL44GZ44KLXHJcbiAgICAgICAgICAgICAgICB0aGF0LiRjcm9udGFiLmVuYWJsZUpvYignc3RhcnRBdXRvVW5Gb2xsb3cnKVxyXG5cclxuICAgICAgICAgICAgfWVsc2UgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ0xJTUlUJyB8fCAkZXZlbnQucmVzcG9uc2UucmVzID09PSAnVU5GT0xMT1dMSU1JVCcpIHtcclxuICAgICAgICAgICAgICAgIC8vJ0xJTUlUJzogICAgICAg44K/44O844Ky44OD44OI44Ki44Kr44Km44Oz44OI44GL44KJ44Gu44OV44Kp44Ot44Ov44O85Y+W5b6X5Yi26ZmQ44Gr5byV44Gj44GL44GL44Gj44Gf5aC05ZCIXHJcbiAgICAgICAgICAgICAgICAvLydGT0xMT1dMSU1JVCc6IOODleOCqeODreODvOS4iumZkOOBq+W8leOBo+OBi+OBi+OBo+OBn+WgtOWQiFxyXG4gICAgICAgICAgICAgICAgLy9jcm9udGFi44GnMTXliIblvozjgavjg5Xjgqnjg63jg7zjgpLlho3plovjgZnjgotcclxuICAgICAgICAgICAgICAgIC8vJ0ZPTExPV0xJTUlUJ+OBruWgtOWQiOOBrzE15YiG44Gn6Kej6Zmk44GV44KM44Gq44GE44GM44CB6Kej6Zmk44GV44KM44Gm44GE44Gq44GE44Go44KC44GG5LiA5bqm44GT44GT44Gr6aOb44KT44Gn44GP44KL44GL44KJ44Go44KK44GC44GI44GaJ0xJTUlUJ+OBqOWFsemAmuWMllxyXG5cclxuICAgICAgICAgICAgICAgIC8v44Oq44K544OI44KS5pu05paw44GZ44KLXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UucnN0KVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoJGV2ZW50LnJlc3BvbnNlLnJzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICBjb25zdCByc3QgPSAkZXZlbnQucmVzcG9uc2UucnN0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSAkZXZlbnQucmVzcG9uc2UucnN0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgdGhhdC5saXN0SXRlbXNfdW5mb2xsb3c9W10gLy9saXN044KS5Yid5pyf5YyWXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9EQuOBi+OCieWPluW+l+OBl+OBn0xpc3Tmg4XloLHjgpJkYXRhc+OBq+agvOe0jeOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgIC8vKCDlj6QgLC0tLC0tLSwtLS0+LOaWsCnjga7poIbjgaflhaXjgaPjgabjgYTjgovjgYvjgol1bnNoaWZ044Gr44GX44GmKCDmlrAgLC0tLC0tLSwtLS0+LOWPpCnjgajjgZfjgaZcclxuICAgICAgICAgICAgICAgICAgICAvL0hPTUXnlLvpnaLjgafkuIrjgYvjgonmmYLns7vliJfpoIbjgavkuKbjgbbjgojjgYbjgavjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3RJdGVtc191bmZvbGxvdy51bnNoaWZ0KHtpZDogcnN0W2ldWydpZCddLCBuYW1lOnJzdFtpXVsnbmFtZSddLCB0ZXh0OnJzdFtpXVsndGV4dCddLCBjcmVhdGVkX2F0OnJzdFtpXVsnY3JlYXRlZF9hdCddfSkgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8v44OV44Kp44Ot44Ov44O85pWw44KS5pu05paw44GZ44KLXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKClcclxuXHJcbiAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy/mrKHjga7jg5Xjgqnjg63jg7zplovlp4vmmYLplpPjgpIxNeWIhuW+jOOBq+ioreWumuOBmeOCi1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93X21zID0gbm93LmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIHN0b3JlLnNldE5leHRVbkZvbGxvd1RpbWUobm93X21zICsgOTA1MDAwLCBub3dfbXMpLy8xNeWIhuW+jOOBq+ioreWumuOAgDXnp5Ljga/msJfmjIHjgaFcclxuXHJcbiAgICAgICAgICAgICAgICAvL+iHquWLleOCouODs+ODleOCqeODreODvOOCkuWGjemWi+mWouaVsOOCkumWi+Wni+OBmeOCi1xyXG4gICAgICAgICAgICAgICAgdGhhdC4kY3JvbnRhYi5lbmFibGVKb2IoJ3N0YXJ0QXV0b1VuRm9sbG93JylcclxuXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKCRldmVudC5yZXNwb25zZS5yZXMgPT09ICdVUERBVEVEJyl7IC8v55S76Z2i5pu05paw44Gu5aC05ZCI44Gr44CB44GZ44Gn44Gr44OV44Kp44Ot44O85riI44Oq44K544OI44KS6KGo56S644GZ44KLXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnREVCVUcgLS0gSG9tZS52dWUgLS0+IFVQREFURSDjg5Xjgqnjg63jg7zjg6rjgrnjg4jjgpLmm7TmlrDjgZfjgb7jgZknKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoJGV2ZW50LnJlc3BvbnNlLnJzdClcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKCRldmVudC5yZXNwb25zZS5yc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gJGV2ZW50LnJlc3BvbnNlLnJzdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gJGV2ZW50LnJlc3BvbnNlLnJzdC5sZW5ndGhcclxuICAgICAgICAgICAgICAgIHRoYXQubGlzdEl0ZW1zX3VuZm9sbG93PVtdIC8vbGlzdOOCkuWIneacn+WMllxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vRELjgYvjgonlj5blvpfjgZfjgZ9MaXN05oOF5aCx44KSZGF0YXPjgavmoLzntI3jgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAvLygg5Y+kICwtLSwtLS0sLS0tPizmlrAp44Gu6aCG44Gn5YWl44Gj44Gm44GE44KL44GL44KJdW5zaGlmdOOBq+OBl+OBpigg5pawICwtLSwtLS0sLS0tPizlj6Qp44Go44GX44GmXHJcbiAgICAgICAgICAgICAgICAgICAgLy9IT01F55S76Z2i44Gn5LiK44GL44KJ5pmC57O75YiX6aCG44Gr5Lim44G244KI44GG44Gr44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5saXN0SXRlbXNfdW5mb2xsb3cucHVzaCh7aWQ6IHJlc3VsdFtpXVsnaWQnXSwgbmFtZTpyZXN1bHRbaV1bJ25hbWUnXSwgdGV4dDpyZXN1bHRbaV1bJ3RleHQnXSwgY3JlYXRlZF9hdDpyZXN1bHRbaV1bJ2NyZWF0ZWRfYXQnXX0pICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL+iHquWLleOCouODs+ODleOCqeODreODvOOCkuWBnOatouS4reOBq+OBmeOCi1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0QXV0b1VuRm9sbG93Q3JvblN0YXR1cygnMCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1dG9VbkZvbGxvd0Nyb25TdGF0dXMgPSAnMCdcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfdW5mb2xsb3dfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtdW5mb2xsb3ctLXN0YXknLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfdW5mb2xsb3dfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtdW5mb2xsb3ctLWV4ZWMnLCBmYWxzZSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL+asoeOBruODleOCqeODreODvOmWi+Wni+aZgumWk+OCkjE15YiG5b6M44Gr6Kit5a6a44GZ44KLXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3dfbXMgPSBub3cuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0TmV4dFVuRm9sbG93VGltZShub3dfbXMgKyA5MDUwMDAsIG5vd19tcykvLzE15YiG5b6M44Gr6Kit5a6a44CANeenkuOBr+awl+aMgeOBoVxyXG4gICAgICAgICAgICAgICAgLy/oh6rli5XjgqLjg7Pjg5Xjgqnjg63jg7zjgYzlrp/ooYzkuK3jga7loLTlkIjjga/lrp/ooYzjgZnjgotcclxuICAgICAgICAgICAgICAgIHRoYXQuJGNyb250YWIuZW5hYmxlSm9iKCdzdGFydEF1dG9VbkZvbGxvdycpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KSBcclxuXHJcbiAgICAgICAgLy/oh6rli5Xjg5Xjgqnjg63jg7zjgYzlrp/ooYzkuK3jga7loLTlkIjjga/lrp/ooYzjgZnjgotcclxuICAgICAgICAvLyBpZihzdG9yZS5nZXRBdXRvRm9sbG93Q3JvblN0YXR1cygpICE9PSAnMCcpIHRoYXQuJGNyb250YWIuZW5hYmxlSm9iKCdzdGFydEF1dG9Gb2xsb3cnKVxyXG4gICAgICAgIC8vIGlmKHN0b3JlLmdldFJlc3RhcnRBdXRvRm9sbG93Q3JvblN0YXR1cygpKSB0aGF0LiRjcm9udGFiLmVuYWJsZUpvYigncmVTdGFydEF1dG9Gb2xsb3cnKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvL+S6iOe0hOODhOOCpOODvOODiOOCkuabtOaWsOOBmeOCi1xyXG4gICAgICAgIGNvbnRyb2xsZXIuZ2V0VHdlZXRTY2hlZHVsZV9hamF4KClcclxuICAgICAgICBjb250cm9sbGVyLiRvbignQUpBWF9ESVNQTEFZX1NDSEVEVUxFX1JFU1VMVCcsICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0RFQlVHIC0tIEhvbWUudnVlIC0tPiDjg4TjgqTjg7zjg4jjgrnjgrHjgrjjg6Xjg7zjg6vjg6rjgrnjg4jjgpLmm7TmlrDjgZfjgb7jgZknKVxyXG4gICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UucnN0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UucnN0KVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoJGV2ZW50LnJlc3BvbnNlLnJzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSAkZXZlbnQucmVzcG9uc2UucnN0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSAkZXZlbnQucmVzcG9uc2UucnN0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgdGhhdC5saXN0SXRlbXNfc2NoZWR1bGU9W10gLy9saXN044KS5Yid5pyf5YyWXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9EQuOBi+OCieWPluW+l+OBl+OBn0xpc3Tmg4XloLHjgpJkYXRhc+OBq+agvOe0jeOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgIC8vKCDlj6QgLC0tLC0tLSwtLS0+LOaWsCnjga7poIbjgaflhaXjgaPjgabjgYTjgovjgYvjgol1bnNoaWZ044Gr44GX44GmKCDmlrAgLC0tLC0tLSwtLS0+LOWPpCnjgajjgZfjgaZcclxuICAgICAgICAgICAgICAgICAgICAvL0hPTUXnlLvpnaLjgafkuIrjgYvjgonmmYLns7vliJfpoIbjgavkuKbjgbbjgojjgYbjgavjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lmxpc3RJdGVtc19zY2hlZHVsZS51bnNoaWZ0KHtpZDogcmVzdWx0W2ldWydpZCddLCBuYW1lOidTY2hlZHVsZScsIHRleHQ6cmVzdWx0W2ldWyd0ZXh0J10sIGNyZWF0ZWRfYXQ6cmVzdWx0W2ldWydkYXRlJ119KSAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL+iHquWLleOBhOOBhOOBreOBruOCueODhuODvOOCv+OCueOCkuWkieabtOOBmeOCi1xyXG4gICAgICAgIGNvbnRyb2xsZXIuJG9uKCdBSkFYX0NIQU5HRV9BVVRPTElLRVNUQVRVUycsICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0RFQlVHIC0tIEhvbWUudnVlIC0tPiDoh6rli5XjgYTjgYTjga3jgrnjg4bjg7zjgr/jgrnjgpLlpInmm7TjgZfjgb7jgZknKVxyXG4gICAgICAgICAgICB0aGlzLkF1dG9MaWtlQ3JvblN0YXR1cyA9ICRldmVudC5yZXNwb25zZVxyXG4gICAgICAgICAgICBzdG9yZS5zZXRBdXRvTGlrZUNyb25TdGF0dXMoJGV2ZW50LnJlc3BvbnNlKVxyXG4gICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UgPT09ICcxJyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWxpa2UtLWV4ZWMnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtbGlrZS0tc3RheScsIHRydWUpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtbGlrZS0tZXhlYycsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWxpa2UtLXN0YXknLCBmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8v6Ieq5YuV44OV44Kp44Ot44O844Gu44K544OG44O844K/44K544KS5aSJ5pu044GZ44KLXHJcbiAgICAgICAgY29udHJvbGxlci4kb24oJ0FKQVhfQ0hBTkdFX0FVVE9GT0xMT1dTVEFUVVMnLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdERUJVRyAtLSBIb21lLnZ1ZSAtLT4g6Ieq5YuV44OV44Kp44Ot44O844K544OG44O844K/44K544KS5aSJ5pu044GX44G+44GZJylcclxuICAgICAgICAgICAgdGhpcy5BdXRvRm9sbG93Q3JvblN0YXR1cyA9ICRldmVudC5yZXNwb25zZVxyXG4gICAgICAgICAgICBzdG9yZS5zZXRBdXRvRm9sbG93Q3JvblN0YXR1cygkZXZlbnQucmVzcG9uc2UpXHJcbiAgICAgICAgICAgIGlmKCRldmVudC5yZXNwb25zZSA9PT0gJzEnKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfZm9sbG93X3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWZvbGxvdy0tZXhlYycsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF9mb2xsb3dfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtZm9sbG93LS1zdGF5JywgdHJ1ZSlcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF9mb2xsb3dfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtZm9sbG93LS1leGVjJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfZm9sbG93X3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWZvbGxvdy0tc3RheScsIGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvL+iHquWLleOCouODs+ODleOCqeODreODvOOBruOCueODhuODvOOCv+OCueOCkuWkieabtOOBmeOCi1xyXG4gICAgICAgIGNvbnRyb2xsZXIuJG9uKCdBSkFYX0NIQU5HRV9BVVRPVU5GT0xMT1dTVEFUVVMnLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdERUJVRyAtLSBIb21lLnZ1ZSAtLT4g6Ieq5YuV44OV44Kp44Ot44O844K544OG44O844K/44K544KS5aSJ5pu044GX44G+44GZJylcclxuICAgICAgICAgICAgdGhpcy5BdXRvVW5Gb2xsb3dDcm9uU3RhdHVzID0gJGV2ZW50LnJlc3BvbnNlXHJcbiAgICAgICAgICAgIHN0b3JlLnNldEF1dG9VbkZvbGxvd0Nyb25TdGF0dXMoJGV2ZW50LnJlc3BvbnNlKVxyXG4gICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UgPT09ICcxJyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3VuZm9sbG93X3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLXVuZm9sbG93LS1leGVjJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3VuZm9sbG93X3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLXVuZm9sbG93LS1zdGF5JywgdHJ1ZSlcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF91bmZvbGxvd19zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS11bmZvbGxvdy0tZXhlYycsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3VuZm9sbG93X3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLXVuZm9sbG93LS1zdGF5JywgZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvL+KZoWxpa2Xjgrnjg4bjg7zjgr/jgrnjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnbGlrZeOCueODhuODvOOCv+OCueOBr++8micrc3RvcmUuZ2V0QXV0b0xpa2VDcm9uU3RhdHVzKCkpXHJcbiAgICAgICAgdGhpcy5BdXRvTGlrZUNyb25TdGF0dXMgPSBzdG9yZS5nZXRBdXRvTGlrZUNyb25TdGF0dXMoKVxyXG4gICAgICAgIGlmKHRoaXMuQXV0b0xpa2VDcm9uU3RhdHVzID09PSAnMCcpe1xyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWxpa2UtLWV4ZWMnLCBmYWxzZSlcclxuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF9zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS1saWtlLS1zdGF5JywgZmFsc2UpXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5BdXRvTGlrZUNyb25TdGF0dXMgPT09ICcxJyl7XHJcbiAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtbGlrZS0tZXhlYycsIGZhbHNlKVxyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWxpa2UtLXN0YXknLCB0cnVlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWxpa2UtLWV4ZWMnLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWxpa2UtLXN0YXknLCBmYWxzZSlcclxuXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgLy9mb2xsb3fjgrnjg4bjg7zjgr/jgrnjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9sbG9344K544OG44O844K/44K544Gv77yaJytzdG9yZS5nZXRBdXRvRm9sbG93Q3JvblN0YXR1cygpKVxyXG4gICAgICAgIHRoaXMuQXV0b0ZvbGxvd0Nyb25TdGF0dXMgPSBzdG9yZS5nZXRBdXRvRm9sbG93Q3JvblN0YXR1cygpXHJcbiAgICAgICAgaWYodGhpcy5BdXRvRm9sbG93Q3JvblN0YXR1cyA9PT0gJzAnKXtcclxuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF9mb2xsb3dfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtZm9sbG93LS1leGVjJywgZmFsc2UpXHJcbiAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfZm9sbG93X3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWZvbGxvdy0tc3RheScsIGZhbHNlKVxyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuQXV0b0ZvbGxvd0Nyb25TdGF0dXMgPT09ICcxJyl7XHJcbiAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfZm9sbG93X3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWZvbGxvdy0tZXhlYycsIGZhbHNlKVxyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX2ZvbGxvd19zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS1mb2xsb3ctLXN0YXknLCB0cnVlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX2ZvbGxvd19zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS1mb2xsb3ctLWV4ZWMnLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX2ZvbGxvd19zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS1mb2xsb3ctLXN0YXknLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy91bmZvbGxvd+OCueODhuODvOOCv+OCueOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdVbmZvbGxvd+OCueODhuODvOOCv+OCueOBr++8micrc3RvcmUuZ2V0QXV0b1VuRm9sbG93Q3JvblN0YXR1cygpKVxyXG4gICAgICAgIHRoaXMuQXV0b1VuRm9sbG93Q3JvblN0YXR1cyA9IHN0b3JlLmdldEF1dG9VbkZvbGxvd0Nyb25TdGF0dXMoKVxyXG4gICAgICAgIGlmKHRoaXMuQXV0b1VuRm9sbG93Q3JvblN0YXR1cyA9PT0gJzAnKXtcclxuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF91bmZvbGxvd19zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS11bmZvbGxvdy0tZXhlYycsIGZhbHNlKVxyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3VuZm9sbG93X3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLXVuZm9sbG93LS1zdGF5JywgZmFsc2UpXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5BdXRvVW5Gb2xsb3dDcm9uU3RhdHVzID09PSAnMScpe1xyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3VuZm9sbG93X3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLXVuZm9sbG93LS1leGVjJywgZmFsc2UpXHJcbiAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfdW5mb2xsb3dfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtdW5mb2xsb3ctLXN0YXknLCB0cnVlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3VuZm9sbG93X3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLXVuZm9sbG93LS1leGVjJywgdHJ1ZSlcclxuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF91bmZvbGxvd19zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS11bmZvbGxvdy0tc3RheScsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+ODoeODvOODq+OBr+mFjeS/oeOBruOCueODhuODvOOCv+OCueOCkuOCu+ODg+ODiOOBmeOCi1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfjg6Hjg7zjg6vjgrnjg4bjg7zjgr/jgrnjga/vvJonK3N0b3JlLmdldE1haWxTdGF0dXMoKSlcclxuICAgICAgICB0aGlzLk1haWxTdGF0dXMgPSBzdG9yZS5nZXRNYWlsU3RhdHVzKClcclxuICAgICAgICBpZih0aGlzLk1haWxTdGF0dXMgPT09ICcwJyl7XHJcbiAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfbWFpbF9zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS1tYWlsLS1leGVjJywgZmFsc2UpXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5NYWlsU3RhdHVzID09PSAnMScpe1xyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX21haWxfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtbWFpbC0tZXhlYycsIHRydWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2hhbmdlQWN0aXZlVXNlcigkZXZlbnQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQuYWN0aXZlX3VzZXIpXHJcbiAgICAgICAgICAgIGNvbnN0IHNjcmVlbl9uYW1lID0gJGV2ZW50LmFjdGl2ZV91c2VyXHJcbiAgICAgICAgICAgIC8v6Kaq44Kz44Oz44Od44O844ON44Oz44OI44Gr44Ki44Kv44OG44Kj44OW44Om44O844K244O844KS5rih44GZIFxyXG4gICAgICAgICAgICBjb250cm9sbGVyLmdldFR3aXR0ZXJQcm9maWxlX2FqYXgoc2NyZWVuX25hbWUpXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuJG9uY2UoJ0FKQVhfQ09NUExFVEVfR0VUVFdJVFRFUlBST0ZJTEUnLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn44OV44Ot44Oz44OI44Gr5biw44Gj44Gm44GN44Gf44OH44O844K/4oaTIOODl+ODreODleOCo+ODvOODqycpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UucnN0KVxyXG4gICAgICAgICAgICAgICAgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ09LJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lj5blvpfmiJDlip/mmYLjga9Vc2Vy6aCY5Z+f5pu05pawXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2xsb3dlciA9ICRldmVudC5yZXNwb25zZS5yc3QuZm9sbG93ZXJzX2NvdW50IC8v44OV44Kp44Ot44Ov44O85pWwXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzID0gJGV2ZW50LnJlc3BvbnNlLnJzdC5mcmllbmRzX2NvdW50ICAgIC8v44OV44Kp44Ot44O85pWwXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50X25hbWUgPSAkZXZlbnQucmVzcG9uc2UucnN0Lm5hbWUgICAgICAgIC8v44Ki44Kr44Km44Oz44OI5ZCNXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICRldmVudC5yZXNwb25zZS5yc3QuZGVzY3JpcHRpb24gIC8v44OX44Ot44OV44Kj44O844Or5paHXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWdfdXJsID0gJGV2ZW50LnJlc3BvbnNlLnJzdC5wcm9maWxlX2ltYWdlX3VybF9odHRwcyAvL+eUu+WDj1VSTFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+ODleOCqeODreODvOaVsOOCknN0b3Jl44Gr5qC857SNXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0RnJpZW5kc0NvdW50KCRldmVudC5yZXNwb25zZS5yc3QuZnJpZW5kc19jb3VudClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9mb2xsb3dMaXN05pu05pawXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5nZXRGb2xsb3dlZExpc3RfYWpheCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLy91bmZvbGxvd0xpc3Tmm7TmlrBcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmdldFVuRm9sbG93ZWRMaXN0X2FqYXgoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8v5LqI57SE44OE44Kk44O844OI44KS5pu05paw44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5nZXRUd2VldFNjaGVkdWxlX2FqYXgoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8v44GE44GE44Gt44Oq44K544OI44KS5pu05paw44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5nZXRMaWtlZExpc3RTZXNzaW9uX2FqYXgoKVxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKCRldmVudC5yZXNwb25zZS5yZXMgPT09J05PVExPR0lOJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfjg63jgrDjgqTjg7Pjg6bjg7zjgrbjg7zjgafjgarjgYTjgZ/jgoHjg63jgrDjgqTjg7PnlLvpnaLjgavpo5vjgbDjgZfjgb7jgZknKSAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKSAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvL+WkseaVl+OBl+OBn+OBqOOBjeOBr+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJ+ODl+ODreODleOCo+ODvOODq+OBruWPluW+l+OBq+WkseaVl+OAguOCouOCr+OCu+OCueWItumZkG9y44ON44OD44OI55Kw5aKD44GM5oKq44GE5Y+v6IO95oCn44GM44GC44KK44G+44GZJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/oh6rli5XjgYTjgYTjga3jga7nirbmhYvjgpLlpInmm7TjgZnjgotcclxuICAgICAgICBjaGFuZ2VMaWtlQ3JvblN0YXR1cygpIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5BdXRvTGlrZUNyb25TdGF0dXMgPT09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRBdXRvTGlrZUNyb25TdGF0dXMoJzEnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5BdXRvTGlrZUNyb25TdGF0dXMgPSAnMSdcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtbGlrZS0tZXhlYycsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF9zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS1saWtlLS1zdGF5JywgdHJ1ZSlcclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5BdXRvTGlrZUNyb25TdGF0dXMgPT09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0QXV0b0xpa2VDcm9uU3RhdHVzKCcwJylcclxuICAgICAgICAgICAgICAgIHRoaXMuQXV0b0xpa2VDcm9uU3RhdHVzID0gJzAnXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWxpa2UtLXN0YXknLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtbGlrZS0tZXhlYycsIGZhbHNlKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLkF1dG9MaWtlQ3JvblN0YXR1cyA9PT0gJzInKSB7XHJcbiAgICAgICAgICAgICAgICAvL+Wun+ihjOS4reOBruWgtOWQiOOBr+OCueODhuODvOOCv+OCueOCkuWkieabtOOBp+OBjeOBquOBhOOCiOOBhuOBq+OBmeOCi1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/oh6rli5Xjg5Xjgqnjg63jg7zjga7nirbmhYvjgpLlpInmm7TjgZnjgotcclxuICAgICAgICBjaGFuZ2VGb2xsb3dDcm9uU3RhdHVzKCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLkF1dG9Gb2xsb3dDcm9uU3RhdHVzID09PSAnMCcpe1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0QXV0b0ZvbGxvd0Nyb25TdGF0dXMoJzEnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5BdXRvRm9sbG93Q3JvblN0YXR1cyA9ICcxJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF9mb2xsb3dfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtZm9sbG93LS1leGVjJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX2ZvbGxvd19zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS1mb2xsb3ctLXN0YXknLCB0cnVlKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLkF1dG9Gb2xsb3dDcm9uU3RhdHVzID09PSAnMScpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JlLnNldEF1dG9Gb2xsb3dDcm9uU3RhdHVzKCcwJylcclxuICAgICAgICAgICAgICAgIHRoaXMuQXV0b0ZvbGxvd0Nyb25TdGF0dXMgPSAnMCdcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfZm9sbG93X3N0YXR1c190b2dnbGUsICdwLWJ0bl9ob21lLWZvbGxvdy0tc3RheScsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF9mb2xsb3dfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtZm9sbG93LS1leGVjJywgZmFsc2UpXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuQXV0b0ZvbGxvd0Nyb25TdGF0dXMgPT09ICcyJykge1xyXG4gICAgICAgICAgICAgICAgLy/lrp/ooYzkuK3jga7loLTlkIjjga/jgrnjg4bjg7zjgr/jgrnjgpLlpInmm7TjgafjgY3jgarjgYTjgojjgYbjgavjgZnjgotcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v6Ieq5YuV44Ki44Oz44OV44Kp44Ot44O844Gu54q25oWL44KS5aSJ5pu044GZ44KLXHJcbiAgICAgICAgY2hhbmdlVW5Gb2xsb3dDcm9uU3RhdHVzKCkgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLkF1dG9VbkZvbGxvd0Nyb25TdGF0dXMgPT09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRBdXRvVW5Gb2xsb3dDcm9uU3RhdHVzKCcxJylcclxuICAgICAgICAgICAgICAgIHRoaXMuQXV0b1VuRm9sbG93Q3JvblN0YXR1cyA9ICcxJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF91bmZvbGxvd19zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS11bmZvbGxvdy0tZXhlYycsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF91bmZvbGxvd19zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS11bmZvbGxvdy0tc3RheScsIHRydWUpXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuQXV0b1VuRm9sbG93Q3JvblN0YXR1cyA9PT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRBdXRvVW5Gb2xsb3dDcm9uU3RhdHVzKCcwJylcclxuICAgICAgICAgICAgICAgIHRoaXMuQXV0b1VuRm9sbG93Q3JvblN0YXR1cyA9ICcwJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF91bmZvbGxvd19zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS11bmZvbGxvdy0tc3RheScsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucF91bmZvbGxvd19zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS11bmZvbGxvdy0tZXhlYycsIGZhbHNlKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLkF1dG9VbkZvbGxvd0Nyb25TdGF0dXMgPT09ICcyJykge1xyXG4gICAgICAgICAgICAgICAgLy/lrp/ooYzkuK3jga7loLTlkIjjga/jgrnjg4bjg7zjgr/jgrnjgpLlpInmm7TjgafjgY3jgarjgYTjgojjgYbjgavjgZnjgotcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvL+ODoeODvOODq+mFjeS/oeeKtuaFi+OCkuWkieabtOOBmeOCi1xyXG4gICAgICAgIGNoYW5nZU1haWxTdGF0dXMoKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuTWFpbFN0YXR1cyA9PT0gJzAnKXtcclxuICAgICAgICAgICAgICAgIHN0b3JlLnNldE1haWxTdGF0dXMoJzEnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5NYWlsU3RhdHVzID0gJzEnXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX21haWxfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtbWFpbC0tZXhlYycsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmNoYW5nZU1haWxTdGF0dXNfYWpheCgnMScpXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLiRvbmNlKCdBSkFYX0ZJTklTSF9DSEFOR0VfTUFJTFNUQVRVUycsICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UgPT09IGZhbHNlKXsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgn44Oh44O844Or6YWN5L+h54q25oWL44Gu5aSJ5pu044Gr5aSx5pWX44GX44G+44GX44Gf44CCJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/phY3kv6HnirbmhYvjgpLlgZzmraLjgavjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWFpbFN0YXR1cygnMCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTWFpbFN0YXR1cyA9ICcwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5wX21haWxfc3RhdHVzX3RvZ2dsZSwgJ3AtYnRuX2hvbWUtbWFpbC0tZXhlYycsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLk1haWxTdGF0dXMgPT09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0TWFpbFN0YXR1cygnMCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLk1haWxTdGF0dXMgPSAnMCdcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfbWFpbF9zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS1tYWlsLS1leGVjJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmNoYW5nZU1haWxTdGF0dXNfYWpheCgnMCcpXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLiRvbmNlKCdBSkFYX0ZJTklTSF9DSEFOR0VfTUFJTFNUQVRVUycsICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UgPT09IGZhbHNlKXsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgn44Oh44O844Or6YWN5L+h54q25oWL44Gu5aSJ5pu044Gr5aSx5pWX44GX44G+44GX44Gf44CCJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/phY3kv6HnirbmhYvjgpLphY3kv6FPTuOBq+OBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNYWlsU3RhdHVzKCcxJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5NYWlsU3RhdHVzID0gJzEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnBfbWFpbF9zdGF0dXNfdG9nZ2xlLCAncC1idG5faG9tZS1tYWlsLS1leGVjJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1cGRhdGVVc2VySW5mbygpIHtcclxuICAgICAgICAgICAgY29udHJvbGxlci5nZXRUd2l0dGVyUHJvZmlsZV9hamF4KCdzY3JlZW5fbmFtZScpXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuJG9uY2UoJ0FKQVhfQ09NUExFVEVfR0VUVFdJVFRFUlBST0ZJTEUnLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn44OV44Ot44Oz44OI44Gr5biw44Gj44Gm44GN44Gf44OH44O844K/4oaTIOODl+ODreODleOCo+ODvOODqycpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UucnN0KVxyXG4gICAgICAgICAgICAgICAgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ09LJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lj5blvpfmiJDlip/mmYLjga9Vc2Vy6aCY5Z+f5pu05pawXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2xsb3dlciA9ICRldmVudC5yZXNwb25zZS5yc3QuZm9sbG93ZXJzX2NvdW50IC8v44OV44Kp44Ot44Ov44O85pWwXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzID0gJGV2ZW50LnJlc3BvbnNlLnJzdC5mcmllbmRzX2NvdW50ICAgIC8v44OV44Kp44Ot44O85pWwXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50X25hbWUgPSAkZXZlbnQucmVzcG9uc2UucnN0Lm5hbWUgICAgICAgIC8v44Ki44Kr44Km44Oz44OI5ZCNXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICRldmVudC5yZXNwb25zZS5yc3QuZGVzY3JpcHRpb24gIC8v44OX44Ot44OV44Kj44O844Or5paHICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWdfdXJsID0gJGV2ZW50LnJlc3BvbnNlLnJzdC5wcm9maWxlX2ltYWdlX3VybF9odHRwcyAvL+eUu+WDj1VSTFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+ODleOCqeODreODvOaVsOOCknN0b3Jl44Gr5qC857SNXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0RnJpZW5kc0NvdW50KCRldmVudC5yZXNwb25zZS5yc3QuZnJpZW5kc19jb3VudClcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZigkZXZlbnQucmVzcG9uc2UucmVzID09PSdOT1RMT0dJTicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn44Ot44Kw44Kk44Oz44Om44O844K244O844Gn44Gq44GE44Gf44KB44Ot44Kw44Kk44Oz55S76Z2i44Gr6aOb44Gw44GX44G+44GZJykgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJykgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpLHmlZfjgZfjgZ/jgajjgY3jga/jg6Hjg4Pjgrvjg7zjgrjooajnpLpcclxuICAgICAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCfjg5fjg63jg5XjgqPjg7zjg6vjga7lj5blvpfjgavlpLHmlZfjgILjgqLjgq/jgrvjgrnliLbpmZBvcuODjeODg+ODiOeSsOWig+OBjOaCquOBhOWPr+iDveaAp+OBjOOBguOCiuOBvuOBmScsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEhvbWUudnVlIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInAtdXNlckluZm8gbWIzMFwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJwLXVzZXJJbmZvX19pbWdcIiA6c3JjPVwiaW1nX3VybFwiIGFsdD1cIlwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwicC11c2VySW5mb19fbmFtZVwiPnt7YWNjb3VudF9uYW1lfX08L3A+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInAtdXNlckluZm9fX3Byb2ZpbGUgbWIxMFwiPlxyXG4gICAgICAgICAgICA8cD57e2Rlc2NyaXB0aW9ufX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInAtdXNlckluZm9fX2hlYWRcIj5cclxuICAgICAgICAgICAgPHVsPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInAtdXNlckluZm9fX2xpc3RpdGVtLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwLXVzZXJJbmZvX19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInAtdXNlckluZm9fX2xpc3RpdGVtXCI+e3tmcmllbmRzfX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwLXVzZXJJbmZvX19saXN0aXRlbVwiPuODleOCqeODreODvOS4rTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwLXVzZXJJbmZvX19saXN0aXRlbS13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicC11c2VySW5mb19fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwLXVzZXJJbmZvX19saXN0aXRlbVwiPnt7Zm9sbG93ZXJ9fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInAtdXNlckluZm9fX2xpc3RpdGVtXCI+44OV44Kp44Ot44Ov44O8PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInAtdXNlckluZm9fX2xvZ291dFwiIHYtb246Y2xpY2s9XCJsb2dvdXRcIj48aSBjbGFzcz1cImZhcyBmYS1zaWduLW91dC1hbHRcIj48L2k+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHNjcmlwdD5cclxuLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IGlucHV0Zm9ybSBmcm9tICcuL0lucHV0Rm9ybS52dWUnXHJcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlci52dWUnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL1N0b3JlLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOlsnZm9sbG93ZXInLCAnZnJpZW5kcycsICdhY2NvdW50X25hbWUnLCAnZGVzY3JpcHRpb24nLCAnaW1nX3VybCddLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIElucHV0Rm9ybTogaW5wdXRmb3JtXHJcbiAgICB9LFxyXG4gICAgZGF0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4geyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sICAgIFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGxvZ291dCgpe1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLmxvZ291dF9hamF4KClcclxuICAgICAgICAgICAgY29udHJvbGxlci4kb25jZSgnQUpBWF9GSU5JU0hfTE9HT1VUX1JFU1VMVCcsICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCRldmVudC5yZXNwb25zZS5yZXMgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJ+ODreOCsOOCouOCpuODiOOBl+OBvuOBl+OBnycsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjooajnpLpcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCfjg63jgrDjgqLjgqbjg4jjgavlpLHmlZfjgZfjgb7jgZfjgZ8nLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBVc2VySW5mby52dWUiLCI8dGVtcGxhdGU+XHJcbjxkaXY+XHJcblxyXG4gICAgPEtleXdvcmRDb21wb25lbnQgdi1mb3I9XCJsaXN0SXRlbSBpbiBsaXN0SXRlbXNcIiB2LWJpbmQ6a2V5PVwibGlzdEl0ZW0uaWRcIiB2LWJpbmQ6ZGF0YT1cImxpc3RJdGVtXCIgdi1vbjpkZWxldGUtaXRlbT1cImRlbGV0ZUl0ZW0oJGV2ZW50KVwiIDp0eXBlPVwidHlwZVwiPjwvS2V5d29yZENvbXBvbmVudD5cclxuICAgIFxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBrZXl3b3JkaXRlbSBmcm9tICcuL0tleXdvcmRJdGVtLnZ1ZSdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbJ2xpc3RJdGVtcycsICd0eXBlJ10sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgS2V5d29yZENvbXBvbmVudDoga2V5d29yZGl0ZW1cclxuICAgIH0sXHJcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgICBcclxuICAgIG1ldGhvZHM6IHsgICAgICAgIFxyXG4gICAgICAgIGRlbGV0ZUl0ZW0oaWQpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZGVsZXRlLWl0ZW0nLCB7bGlzdElkOmlkLml0ZW1faWR9KVxyXG4gICAgICAgICAgICB0aGlzLmRhdGFzID0gXy5yZWplY3QodGhpcy5kYXRhcywgeyAnaWQnOiBpZC5pdGVtX2lkIH0pOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEtleXdvcmRMaXN0LnZ1ZSIsIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICAgIDxsaSA6Y2xhc3M9XCJjbGFzc05hbWVMaVwiPiAgICAgICAgXHJcbiAgICAgICAgPGkgdi1pZj1cIiB0eXBlPT09J2xpa2UnIFwiIDpjbGFzcz1cIkhlYXJ0SWNvblwiPjwvaT5cclxuICAgICAgICA8aSB2LWVsc2UtaWY9XCIgdHlwZT09PSdmb2xsb3dlcnNlYXJjaCcgXCIgOmNsYXNzPVwiU2VhcmNoSWNvblwiPjwvaT5cclxuICAgICAgICA8aSB2LWVsc2UtaWY9XCIgdHlwZT09PSd0YXJnZXQnIFwiIDpjbGFzcz1cIlRhcmdldEljb25cIj48L2k+XHJcbiAgICAgICAgPHNwYW4gdi1pZj1cIiB0eXBlPT09J3RhcmdldCcgXCIgY2xhc3M9XCJwLWxpc3RfX2FjY291bnRcIiB2LW9uOmNsaWNrPVwiT25Nb3ZlVHdpdHRlclBhZ2VcIj5Ae3tkYXRhLnRleHR9fTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiB2LWVsc2U+e3tkYXRhLnRleHR9fTwvc3Bhbj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoIGMtZ2FyYmFnZVwiIHYtb246Y2xpY2s9XCIkZW1pdCgnZGVsZXRlLWl0ZW0nLCB7aXRlbV9pZDpkYXRhLmlkfSlcIiA+PC9pPlxyXG4gICAgPC9saT5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVyLnZ1ZSdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vU3RvcmUudnVlJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWydkYXRhJywgJ3R5cGUnXSwvL3Byb3Bz44Gn5Y+X44GR5Y+W44Gj44Gf44OH44O844K/44Gv6Zai5pWw5YaF44GndGhpcy5kYXRh44Gn5L2/44GI44KLXHJcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZUxpOntcclxuICAgICAgICAgICAgICAgICdjLWxpc3RJdGVtJzogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgSGVhcnRJY29uOiB7XHJcbiAgICAgICAgICAgICAgICAnZmFzJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICdmYS1oZWFydCc6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFNlYXJjaEljb246IHtcclxuICAgICAgICAgICAgICAgICdmYXMnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgJ2ZhLXNlYXJjaCc6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFRhcmdldEljb246IHtcclxuICAgICAgICAgICAgICAgICdmYXMnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgJ2ZhLWJ1bGxzZXllJzogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBPbk1vdmVUd2l0dGVyUGFnZSgpIHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3R3aXR0ZXIuY29tL1wiICsgdGhpcy5kYXRhLnRleHQpOyAvLyDmlrDjgZfjgYTjgr/jg5bjgpLplovjgY3jgIHjg5rjg7zjgrjjgpLooajnpLpcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEtleXdvcmRJdGVtLnZ1ZSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJwLWxpc3QtYXJlYVwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicC1oZWFkaW5nLWFyZWFcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjLWhlYWRpbmdcIiA6Y2xhc3M9XCJjbGFzc25hbWVcIiBAY2xpY2s9XCJvbkNsaWNrXCIgPnt7aGVhZGluZ319PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicC1saXN0LXdyYXBcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIiBoZWFkaW5nPT09J2ZvbGxvdycgXCIgY2xhc3M9XCJ0eHRfcmlnaHRcIj48c3BhbiB2LW9uOmNsaWNrPVwib25DbGlja0tleXdvcmRcIiBjbGFzcz1cImMtaGVhZGluZyBwLWhlYWRpbmdfX2ZvbGxvdyBwLWxpc3RfX2tleXdvcmRCdG5cIj5LZXl3b3Jkczwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgPFJlY29yZCB2LWZvcj1cImxpc3RJdGVtIGluIGxpc3RJdGVtc1wiIHYtYmluZDprZXk9XCJsaXN0SXRlbS5pZFwiIHYtYmluZDpkYXRhPVwibGlzdEl0ZW1cIiA6aGVhZGluZz0naGVhZGluZyc+PC9SZWNvcmQ+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgbGlzdHJlY29yZCBmcm9tICcuL0xpc3RSZWNvcmQudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFtcclxuICAgICAgICAnbGlzdEl0ZW1zJyxcclxuICAgICAgICAnaGVhZGluZycsXHJcbiAgICAgICAgJ2NsYXNzbmFtZSdcclxuICAgIF0sXHJcbiAgICBkYXRhIDoge1xyXG4gICAgICAgIGNsYXNzOiAnJ1xyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBSZWNvcmQ6IGxpc3RyZWNvcmRcclxuICAgIH0sXHJcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkNoYW5nZVR4dCgkZXZlbnQpe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DbGljaygpe1xyXG4gICAgICAgICAgICBsZXQgcm91dGUgPSB0aGlzLmhlYWRpbmdcclxuICAgICAgICAgICAgaWYocm91dGU9PT0ndW5Gb2xsb3cnKSByZXR1cm5cclxuICAgICAgICAgICAgaWYocm91dGU9PT0nZm9sbG93Jykgcm91dGUgPSAndGFyZ2V0J1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycrcm91dGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsaWNrS2V5d29yZCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9rZXl3b3JkcycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTGlzdGl0ZW0udnVlIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInAtbGlzdFwiPlxyXG4gICAgICAgIDxzcGFuIHYtb246Y2xpY2s9XCJvbk1vdmVUd2l0dGVyXCIgY2xhc3M9XCJwLWxpc3RfX2FjY291bnRcIj57e2RhdGEubmFtZX19PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicC1saXN0X19kYXRlXCI+e3tkYXRhLmNyZWF0ZWRfYXR9fTwvc3Bhbj5cclxuICAgICAgICA8cCBjbGFzcz1cInAtbGlzdF9fY29udGVudFwiPnt7ZGF0YS50ZXh0fX08L3A+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuLy8gaW1wb3J0IGlucHV0Zm9ybSBmcm9tICcuL0lucHV0Rm9ybS52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogW1xyXG4gICAgICAgICdkYXRhJyxcclxuICAgICAgICAnaGVhZGluZydcclxuICAgIF0sXHJcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbk1vdmVUd2l0dGVyICgpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5oZWFkaW5nPT09J2ZvbGxvdycgfHwgdGhpcy5oZWFkaW5nPT09J3VuRm9sbG93Jyl7XHJcbiAgICAgICAgICAgICAgICAvL+ODpuODvOOCtuODvOOBruODmuODvOOCuOOCkuihqOekulxyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3R3aXR0ZXIuY29tL1wiICsgdGhpcy5kYXRhLm5hbWUsICdfYmxhbmsnKTsgLy8g5paw44GX44GE44K/44OW44KS6ZaL44GN44CB44Oa44O844K444KS6KGo56S6XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy/jg4TjgqTjg7zjg4jjgpLooajnpLpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiArIHRoaXMuZGF0YS5uYW1lICsgXCIvc3RhdHVzL1wiICsgdGhpcy5kYXRhLmlkLCAnX2JsYW5rJyk7IC8vIOaWsOOBl+OBhOOCv+ODluOCkumWi+OBjeOAgeODmuODvOOCuOOCkuihqOekulxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTGlzdFJlY29yZC52dWUiLCI8dGVtcGxhdGU+ICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImwtc3ViUGFnZVwiPiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR4dF9jZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIHYtb246Y2xpY2s9XCJDZXJ0aWZ5QWNjb3VudFwiIGNsYXNzPVwiYy1idG5cIj7jgqLjgqvjgqbjg7Pjg4joqo3oqLzjgZnjgos8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZ1wiIHYtaWY9XCJsb2FkaW5nXCI+6KqN6Ki85Yem55CG5LitLi4uPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JcIiBjbGFzcz1cImVycm9yXCI+e3sgZXJyb3IgfX08L2Rpdj5cclxuXHJcbiAgICAgICAgPEFjY291bnRMaXN0Q29tcG9uZW50IHYtYmluZDpsaXN0SXRlbXM9XCJtYWtlRGF0YXMoKVwiIHYtb246ZGVsZXRlLWl0ZW09XCJkZWxldGVJdGVtKCRldmVudClcIiB2LW9uOmNoYW5nZS1hY3RpdmUtdXNlcj1cImNoYW5nZUFjdGl2ZVVzZXIoJGV2ZW50KVwiPjwvQWNjb3VudExpc3RDb21wb25lbnQ+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBhY2NvdW50bGlzdCBmcm9tICcuL0FjY291bnRMaXN0LnZ1ZSdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVyLnZ1ZSdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vU3RvcmUudnVlJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBBY2NvdW50TGlzdENvbXBvbmVudDogYWNjb3VudGxpc3QsXHJcbiAgICB9LFxyXG4gICAgZGF0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkYXRhczogW10sICAgICAgLy9cclxuICAgICAgICAgICAgc2VhcmNoVGV4dDogJycsIC8vXHJcbiAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2UsICAvL1xyXG4gICAgICAgICAgICBwb3N0OiBudWxsLCAgICAgLy9cclxuICAgICAgICAgICAgZXJyb3I6bnVsbCwgICAgIC8vXHJcbiAgICAgICAgICAgIGFjdGl2ZVVzZXI6ICcnLCAvL+ePvuWcqOmBuOaKnuOBl+OBpuOBhOOCi+OCouOCq+OCpuODs+ODiFxyXG4gICAgICAgIH1cclxuICAgIH0sICAgICAgXHJcbiAgICBjcmVhdGVkICgpIHtcclxuICAgICAgICAvLyB2aWV3IOOBjOS9nOOCieOCjOOBn+aZguOBq+ODh+ODvOOCv+OCkuWPluW+l+OBl+OAgVxyXG4gICAgICAgIC8vIOOBneOBruODh+ODvOOCv+OBr+aXouOBq+ebo+imluOBleOCjOOBpuOBhOOCi1xyXG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKClcclxuICAgICAgICAvL3RoaXMudXBkYXRlQWNjb3VudCgpXHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICAvLyDjg6vjg7zjg4jjgYzlpInmm7TjgZXjgozjgZ/jgonjgZPjga7jg6Hjgr3jg4Pjg4njgpLlho3jgbPlkbzjgbPlh7rjgZfjgb7jgZlcclxuICAgICAgICAvLyckcm91dGUnOiAnZmV0Y2hEYXRhJ1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBtYWtlRGF0YXMoKSB7XHJcbiAgICAgICAgICAgIC8vIOS7iuOBruODquOCueODiOmgheebruOCkumAgOmBv1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhc18gPSBPYmplY3QuYXNzaWduKFtdLHRoaXMuZGF0YXMpXHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5zZWFyY2hUZXh0ID09ICcnKSA/IHRoaXMuZGF0YXMgOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlSXRlbShpZCkge1xyXG4gICAgICAgICAgICAvL+ODh+ODvOOCv+ODmeODvOOCueS4iuOBruOCouOCq+OCpuODs+ODiOaDheWgseOCkuWJiumZpOOBmeOCiyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZGVsZXRlX2RhdGEgPSBfLmZpbHRlcih0aGlzLmRhdGFzLCB7J2lkJzogaWQubGlzdElkfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YXMgPSBfLnJlamVjdCh0aGlzLmRhdGFzLCB7ICdpZCc6IGlkLmxpc3RJZCB9KVxyXG5cclxuICAgICAgICAgICAgY29udHJvbGxlci5kZWxldGVBY2NvdW50X2FqYXgoZGVsZXRlX2RhdGFbMF0uYWNjb3VudCkgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29udHJvbGxlci4kb24oJ0FKQVhfQ09NUExFVEVfREVMRVRFQUNDT1VOVCcsICgkZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UucmVzID09PSAnT0snKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn44Oq44Kv44Ko44K544OI44Gr5oiQ5Yqf44GX44G+44GX44GfJylcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCB0cnVlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgn44K144O844OQ44O844Gu5o6l57aa44Gr5aSx5pWX44GX44G+44GX44Gf44CC44ON44OD44OI44Ov44O844Kv566h55CG6ICF44Gr5ZWP44GE5ZCI44KP44Gb44Gm44GP44Gg44GV44GE44CCJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZEl0ZW0oYWNjb3VudF9saXN0KSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhY2NvdW50X2xpc3QpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmRhdGFzLnB1c2goe2lkOiB0aGF0LmdldElkKCksICBhY2NvdW50OnRoaXNbJ3NjcmVlbl9uYW1lJ10sIGlzQWN0aXZlOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH0sIGFjY291bnRfbGlzdClcclxuICAgICAgICAgICAgdGhpcy5tYWtlRGF0YXMoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbHRlckNvbGxlY3Rpb24oZWxtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5zZWFyY2hUZXh0LCAnaScpO1xyXG4gICAgICAgICAgICByZXR1cm4gKGVsbS50ZXh0Lm1hdGNoKHJlZ2V4cCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ2VydGlmeUFjY291bnQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcclxuICAgICAgICAgICAgY29udHJvbGxlci5jZXJ0aWZ5X2FqYXgoKSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb250cm9sbGVyLiRvbignQUpBWF9DT01QTEVURV9HRVRSRVFVRVNUJywgKCRldmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCRldmVudC5yZXNwb25zZS5yZXMgPT09ICdPSycpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfjg6rjgq/jgqjjgrnjg4jjgavmiJDlip/jgZfjgb7jgZfjgZ8nKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKCRldmVudC5yZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSAkZXZlbnQucmVzcG9uc2UudXJsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kcm91dGVyLnB1c2godXJsKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCRldmVudC5yZXNwb25zZS5tc2csIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZldGNoRGF0YSAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaGRhdGHjgavmnaXjgZ/jgojvvIEnKVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5wb3N0ID0gbnVsbCAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZW5pZWQgPSB0aGlzLmdldFBhcmFtKCdkZW5pZWQnKVxyXG4gICAgICAgICAgICBjb25zdCBvYXV0aF90b2tlbiA9IHRoaXMuZ2V0UGFyYW0oJ29hdXRoX3Rva2VuJylcclxuICAgICAgICAgICAgY29uc3Qgb2F1dGhfdmVyaWZpZXIgPSB0aGlzLmdldFBhcmFtKCdvYXV0aF92ZXJpZmllcicpXHJcblxyXG4gICAgICAgICAgICBpZighKF8uaXNOaWwoZGVuaWVkKSkpe1xyXG4gICAgICAgICAgICAgICAgLy/oqo3oqLzjgpLjgq3jg6Pjg7Pjgrvjg6vjgZfjgZ/loLTlkIhcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCfoqo3oqLzjgavlpLHmlZfjgZfjgb7jgZfjgZ8nLGZhbHNlKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZiggIShfLmlzTmlsKG9hdXRoX3Rva2VuKSkgJiYgIShfLmlzTmlsKG9hdXRoX3ZlcmlmaWVyKSkpe1xyXG4gICAgICAgICAgICAgICAgLy/oqo3oqLzlh6bnkIbjgavmiJDlip/jgZfjgZ/loLTlkIhcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNhdmVUb2tlbl9hamF4KG9hdXRoX3Rva2VuLCBvYXV0aF92ZXJpZmllcilcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuJG9uY2UoJ0FKQVhfQ09NUExFVEVfQ0VSVElGWScsICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn44OV44Ot44Oz44OI44Gr5biw44Gj44Gm44GN44Gf44OH44O844K/4oaTJylcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v6KqN6Ki844GX44Gf44Ki44Kr44Km44Oz44OI44Gu44Oq44K544OI44KS5pu05paw44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBY2NvdW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgn6KqN6Ki844Gr5oiQ5Yqf44GX44G+44GX44GfJyx0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9VUkzjgYvjgolHRVTjg5Hjg6njg6Hjg7zjgr/jgpLlj5bjgorpmaTjgY9cclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBcIi9cIilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy9IT01F55S76Z2i44Gr6YG356e744GX44Gf44Go44GN44CBSE9NReeUu+mdouOCkuabtOaWsOOBl+OBn+OBqOOBjeOBq+OBk+OBk+OBq+OBr+OBhOOCi1xyXG4gICAgICAgICAgICAgICAgLy/jgZPjga7jgajjgY3jga91cGRhdGVBY2NvdW5044KS44GZ44KLXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFjY291bnQoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlQWNjb3VudCgpIHtcclxuICAgICAgICAgICAgLy90aGlz44KS6YCA6YG/XHJcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICAgICAgICAgIC8v6KqN6Ki85Yem55CG44Gr5oiQ5Yqf44GX44Gf5aC05ZCIXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIudXBkYXRlQWNjb3VudF9hamF4KClcclxuICAgICAgICAgICAgY29udHJvbGxlci4kb25jZSgnQUpBWF9DT01QTEVURV9HRVRBQ0NPVU5UJywgKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+ODleODreODs+ODiOOBq+W4sOOBo+OBpuOBjeOBn+ODh+ODvOOCv+KGkycpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ09LJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTwkZXZlbnQucmVzcG9uc2Uuc2NyZWVuX25hbWUubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkSXRlbSgkZXZlbnQucmVzcG9uc2Uuc2NyZWVuX25hbWVbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlQWN0aXZlVXNlcigkZXZlbnQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQuYWN0aXZlX3VzZXIpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVXNlciA9ICRldmVudC5hY3RpdmVfdXNlclxyXG4gICAgICAgICAgICAvL+imquOCs+ODs+ODneODvOODjeODs+ODiOOBq+OCouOCr+ODhuOCo+ODluODpuODvOOCtuODvOOCkua4oeOBmVxyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UtYWN0aXZlLXVzZXInLCB7YWN0aXZlX3VzZXI6JGV2ZW50LmFjdGl2ZV91c2VyfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vR0VU44OR44Op44Oh44O844K/44Gu5YCk44KS5Y+W5b6X44GZ44KLXHJcbiAgICAgICAgZ2V0UGFyYW0obmFtZSwgdXJsKSB7XHJcbiAgICAgICAgICAgIGlmICghdXJsKSB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XHJcbiAgICAgICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRJZCgpIHtcclxuICAgICAgICAgICAgdmFyIHN0cm9uZyA9IDEwMDA7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygxNikgKyBNYXRoLmZsb29yKHN0cm9uZyAqIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQXV0aEFjY291bnQudnVlIiwiPHRlbXBsYXRlPiAgICBcclxuICAgIDxkaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJdGVtc0NvbXBvbmVudCB2LWZvcj1cImxpc3RJdGVtIGluIGxpc3RJdGVtc1wiIHYtYmluZDprZXk9XCJsaXN0SXRlbS5pZFwiIHYtYmluZDpkYXRhPVwibGlzdEl0ZW1cIiB2LW9uOmRlbGV0ZS1pdGVtPVwiZGVsZXRlSXRlbSgkZXZlbnQpXCIgbGlzdFN0eWxlPVwicGVyc29uXCIgdi1vbjpjaGFuZ2UtYWN0aXZlLXVzZXI9XCJjaGFuZ2VBY3RpdmVVc2VyKCRldmVudClcIiA6YWN0aXZlX3VzZXI9XCJhY3RpdmVVc2VyXCI+PC9JdGVtc0NvbXBvbmVudD5cclxuICAgICAgICA8L2Rpdj5cclxuIFxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgdGFzayBmcm9tICcuL1Rhc2sudnVlJ1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFsnbGlzdEl0ZW1zJ10sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgSXRlbXNDb21wb25lbnQ6IHRhc2tcclxuICAgIH0sXHJcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFjdGl2ZVVzZXI6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSwgICBcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB0b2dnbGVEb25lKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRG9uZSA9ICF0aGlzLmlzRG9uZVxyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc05hbWVMaSwgJ2xpc3RfX2l0ZW0tZG9uZScsIHRoaXMuaXNEb25lKVxyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc05hbWVJY29uLCAnZmEtY2lyY2xlJywgIXRoaXMuaXNEb25lKVxyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc05hbWVJY29uLCAnZmEtY2hlY2stY2lyY2xlJywgdGhpcy5pc0RvbmUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVJdGVtKGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2RlbGV0ZS1pdGVtJywge2xpc3RJZDppZC5pdGVtX2lkfSlcclxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IF8ucmVqZWN0KHRoaXMuZGF0YXMsIHsgJ2lkJzogaWQuaXRlbV9pZCB9KTsgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlQWN0aXZlVXNlcigkZXZlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVVzZXIgPSAkZXZlbnQuYWN0aXZlX3VzZXJcclxuICAgICAgICAgICAgLy/opqrjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgavjgqLjgq/jg4bjgqPjg5bjg6bjg7zjgrbjg7zjgpLmuKHjgZlcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlLWFjdGl2ZS11c2VyJywge2FjdGl2ZV91c2VyOiRldmVudC5hY3RpdmVfdXNlcn0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEFjY291bnRMaXN0LnZ1ZSIsIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICAgIDxsaSA6Y2xhc3M9XCJjbGFzc05hbWVMaVwiPlxyXG4gICAgICAgIDxpIHYtaWY9XCJsaXN0U3R5bGUgPT09J3BlcnNvbidcIiA6Y2xhc3M9XCJjbGFzc05hbWVJY29uUGVyc29uXCI+PC9pPlxyXG4gICAgICAgIDxpIHYtZWxzZSA6Y2xhc3M9XCJjbGFzc05hbWVJY29uXCIgdi1vbjpjbGljaz1cInRvZ2dsZURvbmVcIj48L2k+XHJcbiAgICAgICAgPHNwYW4gdi1vbjpjbGljaz1cImNoYW5nZVVzZXJcIiBjbGFzcz1cInAtc2lkZWJhcl9fYWNjb3VudFwiPnt7ZGF0YS5hY2NvdW50fX08L3NwYW4+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaCBjLWdhcmJhZ2VcIiB2LW9uOmNsaWNrPVwiJGVtaXQoJ2RlbGV0ZS1pdGVtJywge2l0ZW1faWQ6ZGF0YS5pZH0pXCIgPjwvaT5cclxuICAgIDwvbGk+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlci52dWUnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL1N0b3JlLnZ1ZSdcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFsnZGF0YScsICdsaXN0U3R5bGUnLCAnYWN0aXZlX3VzZXInXSwvL3Byb3Bz44Gn5Y+X44GR5Y+W44Gj44Gf44OH44O844K/44Gv6Zai5pWw5YaF44GndGhpcy5kYXRh44Gn5L2/44GI44KLXHJcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZUxpOntcclxuICAgICAgICAgICAgICAgICdjLWxpc3RJdGVtJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICdjLWxpc3RJdGVtLS1kb25lJzogdGhpcy5kYXRhLmlzRG9uZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGFzc05hbWVJY29uOiB7XHJcbiAgICAgICAgICAgICAgICAnZmFyJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICdmYS1jYWxlbmRhci1jaGVjayc6ICF0aGlzLmRhdGEuaXNEb25lLFxyXG4gICAgICAgICAgICAgICAgLy8gJ2ZhLWNoZWNrLWNpcmNsZSc6IHRoaXMuZGF0YS5pc0RvbmUsXHJcbiAgICAgICAgICAgICAgICAvLyAnYy1pY29uLS1jaGVja2VkJzogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGFzc05hbWVJY29uUGVyc29uOiB7XHJcbiAgICAgICAgICAgICAgICAnZmFzJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICdmYS11c2VyJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICdwLXVzZXItc2VsZWN0ZWQnOnRoaXMuYWN0aXZlX3VzZXIgPT09IHRoaXMuZGF0YS5hY2NvdW50XHJcbiAgICAgICAgICAgICAgICAvLyAnZmEtY2hlY2stY2lyY2xlJzogdGhpcy5kYXRhLmlzRG9uZSxcclxuICAgICAgICAgICAgICAgIC8vICdjLWljb24tLWNoZWNrZWQnOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgLy/jgqLjgq/jg4bjgqPjg5bjg6bjg7zjgrbjg7zjgpLpgbjmip7nirbmhYvjgavjgZnjgotcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZVVzZXIoKTtcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIGFjdGl2ZV91c2VyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuY2xhc3NOYW1lSWNvblBlcnNvbiwgJ3AtdXNlci1zZWxlY3RlZCcsIHRoaXMuZGF0YS5hY2NvdW50ID09PSB0aGlzLmFjdGl2ZV91c2VyKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdG9nZ2xlRG9uZSgpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2tlZCDjg4Hjgqfjg4Pjgq8nKVxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuaXNEb25lID0gIXRoaXMuZGF0YS5pc0RvbmVcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHRoaXMuZGF0YS5pc0RvbmVcclxuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuY2xhc3NOYW1lTGksICdjLWxpc3RJdGVtLS1kb25lJywgc3RhdHVzKVxyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc05hbWVJY29uLCAnZmEtY2lyY2xlLXRoaW4nLCAhc3RhdHVzKVxyXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc05hbWVJY29uLCAnZmEtY2hlY2stY2lyY2xlJywgc3RhdHVzKVxyXG4gICAgICAgICAgICAvLyB0aGlzLiRlbWl0KCd0b2dnbGVEb25lJywge2l0ZW1faWQ6IGRhdGFfLmlkfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v44Om44O844K244O844Gu44Ki44Kr44Km44Oz44OI5oOF5aCx44KS5Y+W5b6X44GX44GmaG9tZeeUu+mdouOBq+i/lOOBmVxyXG4gICAgICAgIGNoYW5nZVVzZXIoKSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcyAvL3RoaXPjgpLpgIDpgb9cclxuICAgICAgICAgICAgY29udHJvbGxlci5nZXRVc2VySW5mb19hamF4KHRoaXMuZGF0YS5hY2NvdW50KSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb250cm9sbGVyLiRvbignQUpBWF9DT01QTEVURV9HRVRVU0VSSU5GTycsICgkZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UucmVzID09PSAnT0snKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2V0dXNlcmluZm/jgYzluLDjgaPjgabjgY3jgZ/jgognKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKCRldmVudC5yZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc05hbWVJY29uUGVyc29uLCAncC11c2VyLXNlbGVjdGVkJywgdGhhdC5kYXRhLmFjY291bnQgPT09ICRldmVudC5yZXNwb25zZS5hY3RpdmVfdXNlcilcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFjdGl2ZV91c2VyID0gJGV2ZW50LnJlc3BvbnNlLmFjdGl2ZV91c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+OCouOCr+ODhuOCo+ODluODpuODvOOCtuODvOOBr+OBk+OCjOOBp+OBme+8micrJGV2ZW50LnJlc3BvbnNlLmFjdGl2ZV91c2VyKVxyXG4gICAgICAgICAgICAgICAgICAgIC8v6Kaq44Kz44Oz44Od44O844ON44Oz44OI44Gr44Ki44Kv44OG44Kj44OW44Om44O844K244O844KS5rih44GZXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlLWFjdGl2ZS11c2VyJywge2FjdGl2ZV91c2VyOiRldmVudC5yZXNwb25zZS5hY3RpdmVfdXNlcn0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjjgpLooajnpLrjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAvL+ODquODreODvOODieOBruWgtOWQiCjlvJXmlbBmYWxzZSnjga/liIfjgormm7/jgYjlrozkuobjg6Hjg4Pjgrvjg7zjgrjjgpLooajnpLrjgZfjgarjgYQgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCfjgrXjg7zjg5Djg7zjga7mjqXntprjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILjg43jg4Pjg4jjg6/jg7zjgq/nrqHnkIbogIXjgavllY/jgYTlkIjjgo/jgZvjgabjgY/jgaDjgZXjgYTjgIInLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRBY3RpdmVVc2VyKCl7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZ2V0QWN0aXZlVXNlcl9hamF4KHRoaXMuZGF0YS5hY2NvdW50KSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb250cm9sbGVyLiRvbignQUpBWF9DT01QTEVURV9HRVRBQ1RJVkVVU0VSJywgKCRldmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCRldmVudC5yZXNwb25zZS5yZXMgPT09ICdPSycpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRhY3RpdmV1c2Vy44GM5biw44Gj44Gm44GN44Gf44KIJylcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuY2xhc3NOYW1lSWNvblBlcnNvbiwgJ3AtdXNlci1zZWxlY3RlZCcsIHRoaXMuZGF0YS5hY2NvdW50ID09PSAkZXZlbnQucmVzcG9uc2UuYWN0aXZlX3VzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5hY3RpdmVfdXNlciA9ICRldmVudC5yZXNwb25zZS5hY3RpdmVfdXNlclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfjgqLjgq/jg4bjgqPjg5bjg6bjg7zjgrbjg7zjga/jgZPjgozjgafjgZnvvJonKyRldmVudC5yZXNwb25zZS5hY3RpdmVfdXNlcikgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8v6Kaq44Kz44Oz44Od44O844ON44Oz44OI44Gr44Ki44Kv44OG44Kj44OW44Om44O844K244O844KS5rih44GZXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlLWFjdGl2ZS11c2VyJywge2FjdGl2ZV91c2VyOiRldmVudC5yZXNwb25zZS5hY3RpdmVfdXNlcn0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgn44K144O844OQ44O844Gu5o6l57aa44Gr5aSx5pWX44GX44G+44GX44Gf44CC44ON44OD44OI44Ov44O844Kv566h55CG6ICF44Gr5ZWP44GE5ZCI44KP44Gb44Gm44GP44Gg44GV44GE44CCJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVGFzay52dWUiLCI8dGVtcGxhdGU+ICAgIFxyXG4gICAgPGRpdiB2LWlmPVwiIHNob3c9PT10cnVlIFwiIGNsYXNzPVwibC1zdWJQYWdlIGwtbGlrZVBhZ2VcIj5cclxuICAgICAgICA8TWVzc2FnZT48L01lc3NhZ2U+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR4dF9jZW50ZXJcIj48YnV0dG9uIHYtb246Y2xpY2s9XCJtb3ZlVG9wXCIgY2xhc3M9XCJjLWJ0biBjLW1vdmVUb3BcIj48aSBjbGFzcz1cImZhcyBmYS1ob21lIGMtaWNvbi1ob21lXCI+PC9pPkhPTUU8L2J1dHRvbj48c3BhbiBjbGFzcz1cImMtdGl0bGUgcC1oZWFkaW5nX19saWtlXCI+6Ieq5YuV44GE44GE44Gt44Kt44O844Ov44O844OJ55m76YyyPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzZWxlY3Qgdi1vbjpjaGFuZ2U9XCJvbkNoYW5nZU9wdGlvbigkZXZlbnQpXCIgY2xhc3M9XCJzZWxlY3QtaW5pdCBjLWxvZ2ljT3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPkFORDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5PUjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5OT1Q8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxJbnB1dEZvcm0gdi1vbjpvbkNoYW5nZT1cIm9uQ2hhbmdlKCRldmVudClcIiB0eXBlPVwidGV4dFwiIGxhYmVsPVwiXCIgbmFtZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuOBhOOBhOOBreOCreODvOODr+ODvOODiVwiPjwvSW5wdXRGb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0eHRfcmlnaHRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrPVwiYWRkSXRlbVwiICBjbGFzcz1cImMtYnRuXCI+6L+95YqgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxLZXl3b3JkTGlzdENvbXBvbmVudCB2LWJpbmQ6bGlzdEl0ZW1zPVwiZGF0YXNcIiB2LW9uOmRlbGV0ZS1pdGVtPVwiZGVsZXRlSXRlbSgkZXZlbnQpXCIgdHlwZT1cImxpa2VcIj48L0tleXdvcmRMaXN0Q29tcG9uZW50PlxyXG4gICAgICAgIFxyXG5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGtleXdvcmRsaXN0IGZyb20gJy4vS2V5d29yZExpc3QudnVlJ1xyXG5pbXBvcnQgaW5wdXRmb3JtIGZyb20gJy4vSW5wdXRGb3JtLnZ1ZSdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vU3RvcmUudnVlJ1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXIudnVlJ1xyXG5pbXBvcnQgbWVzc2FnZSBmcm9tICcuL21lc3NhZ2UudnVlJ1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgSW5wdXRGb3JtOiBpbnB1dGZvcm0sXHJcbiAgICAgICAgS2V5d29yZExpc3RDb21wb25lbnQ6IGtleXdvcmRsaXN0LFxyXG4gICAgICAgIC8vIFNlYXJjaENvbXBvbmVudDogc2VhcmNoLFxyXG4gICAgICAgIE1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICB9LFxyXG4gICAgZGF0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkYXRhczogW10sXHJcbiAgICAgICAgICAgIGxpa2VXb3JkOiAnJyxcclxuICAgICAgICAgICAgb3B0aW9uX251bTogJzAnLFxyXG4gICAgICAgICAgICBvcHRpb25fdGV4dDogJ0FORCcsXHJcbiAgICAgICAgICAgIHNob3c6ZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfSwgXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIC8v44Ot44Kw44Kk44Oz44OB44Kn44OD44Kv57WQ5p6cXHJcbiAgICAgICAgY29udHJvbGxlci5jaGVja0xvZ2luX2FqYXgoKVxyXG4gICAgICAgIGNvbnRyb2xsZXIuJG9uY2UoJ0FKQVhfQ09NUExFVEVfQ0hFQ0tMT0dJTicsICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0RFQlVHIC0tIEhvbWUudnVlIC0tPiDjg63jgrDjgqTjg7Pjg4Hjgqfjg4Pjgq/jgYzlrozkuobjgZfjgb7jgZfjgZ8nKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygkZXZlbnQucmVzcG9uc2UucmVzKVxyXG4gICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UucmVzID09PSAnTk9UTE9HSU4nICl7XHJcbiAgICAgICAgICAgICAgICAvL+ODreOCsOOCpOODs+ODpuODvOOCtuODvOOBp+OBquOBhOOBn+OCgeODreOCsOOCpOODs+eUu+mdouOBq+mjm+OBsOOBl+OBvuOBmeOAglxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ODreOCsOOCpOODs+ODpuODvOOCtuODvOOBp+OBguOCiuOBvuOBm+OCk+OAgicpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ODreOCsOOCpOODs+ODpuODvOOCtuODvOOBp+OBmeOAgicpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YXMoKVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBtb3ZlVG9wKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DaGFuZ2VPcHRpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25fbnVtID0gZXZlbnQudGFyZ2V0LnNlbGVjdGVkSW5kZXggIFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbl90ZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DaGFuZ2UoZXZlbnQpIHsgICBcclxuICAgICAgICAgICAgdGhpcy5saWtlV29yZCA9IGV2ZW50LmlucHV0LnZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRJdGVtKCkge1xyXG4gICAgICAgICAgICAvL+OCreODvOODr+ODvOODieacquWFpeWKm+OBruWgtOWQiFxyXG4gICAgICAgICAgICBpZih0aGlzLmxpa2VXb3JkID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgn44Kt44O844Ov44O844OJ44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GEJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29yZF9pZCA9IHRoaXMuZ2V0SWQoKVxyXG4gICAgICAgICAgICBjb250cm9sbGVyLnNhdmVLZXl3b3JkX2FqYXgod29yZF9pZCwgdGhpcy5saWtlV29yZCwgdGhpcy5vcHRpb25fbnVtLCAxKS8v5byV5pWwKOOCreODvOODr+ODvOODiUlELCDjgq3jg7zjg6/jg7zjg4ksIEFORC9PUi9OT1QsIOOCreODvOODr+ODvOODieOCv+OCpOODl++8iDA644OV44Kp44Ot44Ov44O844K144O844OBIDE644GE44GE44Gt44Kt44O844Ov44O844OJ77yJKVxyXG4gICAgICAgICAgICBjb250cm9sbGVyLiRvbmNlKCdBSkFYX0NPTVBMRVRFX1NBVkVMSUtFV09SRCcsICgkZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UucmVzID09PSAnT0snKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn44Oq44Kv44Ko44K544OI44Gr5oiQ5Yqf44GX44G+44GX44GfLiBBSkFYX0NPTVBMRVRFX1NBVkVMSUtFV09SRCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoJGV2ZW50LnJlc3BvbnNlLnJzdClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9MaXN044Gr6L+95Yqg44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtpZDogd29yZF9pZCwgdGV4dDpgWyR7dGhpcy5vcHRpb25fdGV4dH1dICBgK3RoaXMubGlrZVdvcmQsIG9wdGlvbjp0aGlzLm9wdGlvbl9udW19KSBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvL+WFpeWKm+ashOWIneacn+WMllxyXG5cclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVEYXRhcygpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzICAgICAgXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZ2V0S2V5d29yZF9hamF4KDEpLy/lvJXmlbAo44Kt44O844Ov44O844OJ44K/44Kk44OX77yIMDrjg5Xjgqnjg63jg6/jg7zjgrXjg7zjg4EgMTrjgYTjgYTjga3jgq3jg7zjg6/jg7zjg4nvvIkpXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuJG9uY2UoJ0FKQVhfQ09NUExFVEVfR0VUTElLRVdPUkQnLCAoJGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ09LJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+ODquOCr+OCqOOCueODiOOBq+aIkOWKn+OBl+OBvuOBl+OBny4gQUpBWF9DT01QTEVURV9HRVRMSUtFV09SRCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoJGV2ZW50LnJlc3BvbnNlLnJzdClcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UucnN0Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSAkZXZlbnQucmVzcG9uc2UucnN0XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gJGV2ZW50LnJlc3BvbnNlLnJzdC5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmRhdGFzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvblRleHQgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9EQuOBi+OCieWPluW+l+OBl+OBn0xpc3Tmg4XloLHjgpJkYXRhc+OBq+agvOe0jeOBmeOCiyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRbaV1bJ2xvZ2ljJ10gPT09JzAnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblRleHQgPSAnQU5EJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXN1bHRbaV1bJ2xvZ2ljJ10gPT09JzEnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblRleHQgPSAnT1InXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdFtpXVsnbG9naWMnXSA9PT0nMicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVGV4dCA9ICdOT1QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmRhdGFzLnB1c2goe2lkOiByZXN1bHRbaV1bJ2lkJ10sIHRleHQ6YFske29wdGlvblRleHR9XSAgYCtyZXN1bHRbaV1bJ3dvcmQnXX0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJGV2ZW50LnJlc3BvbnNlLm1zZywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlSXRlbShpZCkge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLmRlbGV0ZUtleXdvcmRfYWpheChpZC5saXN0SWQsIDEpLy/lvJXmlbAo44Kt44O844Ov44O844OJSUQsIOOCreODvOODr+ODvOODieOCv+OCpOODl++8iDA644OV44Kp44Ot44Ov44O844K144O844OBIDE644GE44GE44Gt44Kt44O844Ov44O844OJ77yJKVxyXG4gICAgICAgICAgICBjb250cm9sbGVyLiRvbmNlKCdBSkFYX0NPTVBMRVRFX0RFTEVURUxJS0VXT1JEJywgKCRldmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCRldmVudC5yZXNwb25zZS5yZXMgPT09ICdPSycpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfjg6rjgq/jgqjjgrnjg4jjgavmiJDlip/jgZfjgb7jgZfjgZ8uIEFKQVhfQ09NUExFVEVfREVMRVRFTElLRVdPUkQnKSBcclxuICAgICAgICAgICAgICAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjooajnpLpcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCRldmVudC5yZXNwb25zZS5tc2csIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gXy5yZWplY3QodGhpcy5kYXRhcywgeyAnaWQnOiBpZC5saXN0SWQgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0sICAgICAgICBcclxuICAgICAgICBnZXRJZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHJvbmcgPSAxMDAwO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoMTYpICsgTWF0aC5mbG9vcihzdHJvbmcgKiBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygxNik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFJlZ2lzdGVyTGlrZVdvcmQudnVlIiwiPHRlbXBsYXRlPiAgICBcclxuICAgIDxkaXYgdi1pZj1cIiBzaG93PT09dHJ1ZSBcIiBjbGFzcz1cImwtc3ViUGFnZSBsLXNlYXJjaEtleVBhZ2VcIj5cclxuICAgICAgICA8TWVzc2FnZT48L01lc3NhZ2U+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR4dF9jZW50ZXJcIj48YnV0dG9uIHYtb246Y2xpY2s9XCJtb3ZlVG9wXCIgY2xhc3M9XCJjLWJ0biBjLW1vdmVUb3BcIj48aSBjbGFzcz1cImZhcyBmYS1ob21lIGMtaWNvbi1ob21lXCI+PC9pPkhPTUU8L2J1dHRvbj48c3BhbiBjbGFzcz1cImMtdGl0bGUgcC1oZWFkaW5nX19mb2xsb3dcIj7jg5Xjgqnjg63jg6/jg7zjgrXjg7zjg4Hjgq3jg7zjg6/jg7zjg4nnmbvpjLI8L3NwYW4+PC9kaXY+ICAgICAgICBcclxuICAgICAgICA8ZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c2VsZWN0IHYtb246Y2hhbmdlPVwib25DaGFuZ2VPcHRpb24oJGV2ZW50KVwiIGNsYXNzPVwic2VsZWN0LWluaXQgYy1sb2dpY09wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5BTkQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+T1I8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+Tk9UPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8SW5wdXRGb3JtIHYtb246b25DaGFuZ2U9XCJvbkNoYW5nZSgkZXZlbnQpXCIgdHlwZT1cInRleHRcIiBsYWJlbD1cIlwiIG5hbWU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLjg5Xjgqnjg63jg6/jg7zjgrXjg7zjg4Hjgq3jg7zjg6/jg7zjg4lcIj48L0lucHV0Rm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHh0X3JpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdi1vbjpjbGljaz1cImFkZEl0ZW1cIiAgY2xhc3M9XCJjLWJ0blwiPui/veWKoDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxLZXl3b3JkTGlzdENvbXBvbmVudCB2LWJpbmQ6bGlzdEl0ZW1zPVwiZGF0YXNcIiB2LW9uOmRlbGV0ZS1pdGVtPVwiZGVsZXRlSXRlbSgkZXZlbnQpXCIgdHlwZT1cImZvbGxvd2Vyc2VhcmNoXCI+PC9LZXl3b3JkTGlzdENvbXBvbmVudD5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGtleXdvcmRsaXN0IGZyb20gJy4vS2V5d29yZExpc3QudnVlJ1xyXG5pbXBvcnQgaW5wdXRmb3JtIGZyb20gJy4vSW5wdXRGb3JtLnZ1ZSdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vU3RvcmUudnVlJ1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXIudnVlJ1xyXG5pbXBvcnQgbWVzc2FnZSBmcm9tICcuL21lc3NhZ2UudnVlJ1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgS2V5d29yZExpc3RDb21wb25lbnQ6IGtleXdvcmRsaXN0LFxyXG4gICAgICAgIElucHV0Rm9ybTogaW5wdXRmb3JtLFxyXG4gICAgICAgIE1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICB9LFxyXG4gICAgZGF0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkYXRhczogW10sXHJcbiAgICAgICAgICAgIHNlYXJjaFRleHQ6ICcnLFxyXG4gICAgICAgICAgICBvcHRpb25fbnVtOiAnMCcsXHJcbiAgICAgICAgICAgIG9wdGlvbl90ZXh0OiAnQU5EJyxcclxuICAgICAgICAgICAgc2hvdzpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIC8v44Ot44Kw44Kk44Oz44OB44Kn44OD44Kv57WQ5p6cXHJcbiAgICAgICAgY29udHJvbGxlci5jaGVja0xvZ2luX2FqYXgoKVxyXG4gICAgICAgIGNvbnRyb2xsZXIuJG9uY2UoJ0FKQVhfQ09NUExFVEVfQ0hFQ0tMT0dJTicsICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RFQlVHIC0tIEhvbWUudnVlIC0tPiDjg63jgrDjgqTjg7Pjg4Hjgqfjg4Pjgq/jgYzlrozkuobjgZfjgb7jgZfjgZ8nKVxyXG4gICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UucmVzID09PSAnTk9UTE9HSU4nICl7XHJcbiAgICAgICAgICAgICAgICAvL+ODreOCsOOCpOODs+ODpuODvOOCtuODvOOBp+OBquOBhOOBn+OCgeODreOCsOOCpOODs+eUu+mdouOBq+mjm+OBsOOBl+OBvuOBmeOAglxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ODreOCsOOCpOODs+ODpuODvOOCtuODvOOBp+OBguOCiuOBvuOBm+OCk+OAgicpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ODreOCsOOCpOODs+ODpuODvOOCtuODvOOBp+OBmeOAgicpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YXMoKVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBtb3ZlVG9wKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DaGFuZ2VPcHRpb24oZXZlbnQpIHsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25fbnVtID0gZXZlbnQudGFyZ2V0LnNlbGVjdGVkSW5kZXggIFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbl90ZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DaGFuZ2UoZXZlbnQpIHsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IGV2ZW50LmlucHV0LnZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRJdGVtKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8v44Kt44O844Ov44O844OJ5pyq5YWl5Yqb44Gu5aC05ZCIXHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2VhcmNoVGV4dCA9PT0gJycpe1xyXG4gICAgICAgICAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjooajnpLpcclxuICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJ+OCreODvOODr+ODvOODieOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmRfaWQgPSB0aGlzLmdldElkKClcclxuICAgICAgICAgICAgY29udHJvbGxlci5zYXZlS2V5d29yZF9hamF4KHdvcmRfaWQsIHRoaXMuc2VhcmNoVGV4dCwgdGhpcy5vcHRpb25fbnVtLCAwKS8v5byV5pWwKOOCreODvOODr+ODvOODiUlELCDjgq3jg7zjg6/jg7zjg4ksIEFORC9PUi9OT1QsIOOCreODvOODr+ODvOODieOCv+OCpOODl++8iDA644OV44Kp44Ot44Ov44O844K144O844OBIDE644GE44GE44Gt44Kt44O844Ov44O844OJ77yJKVxyXG4gICAgICAgICAgICBjb250cm9sbGVyLiRvbmNlKCdBSkFYX0NPTVBMRVRFX1NBVkVGT0xMT1dFUlNFQVJDSFdPUkQnLCAoJGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ09LJyl7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL0xpc3Tjgavov73liqDjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goe2lkOiB3b3JkX2lkLCB0ZXh0OmBbJHt0aGlzLm9wdGlvbl90ZXh0fV0gIGArdGhpcy5zZWFyY2hUZXh0LCBvcHRpb246dGhpcy5vcHRpb25fbnVtfSkgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVEYXRhcygpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzICAgICAgXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZ2V0S2V5d29yZF9hamF4KDApLy/lvJXmlbAo44Kt44O844Ov44O844OJ44K/44Kk44OX77yIMDrjg5Xjgqnjg63jg6/jg7zjgrXjg7zjg4EgMTrjgYTjgYTjga3jgq3jg7zjg6/jg7zjg4nvvIkpXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuJG9uY2UoJ0FKQVhfQ09NUExFVEVfR0VURk9MTE9XRVJTRUFSQ0hXT1JEJywgKCRldmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCRldmVudC5yZXNwb25zZS5yZXMgPT09ICdPSycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICRldmVudC5yZXNwb25zZS5yc3RcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSAkZXZlbnQucmVzcG9uc2UucnN0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZGF0YXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uVGV4dCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RC44GL44KJ5Y+W5b6X44GX44GfTGlzdOaDheWgseOCkmRhdGFz44Gr5qC857SN44GZ44KLICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdFtpXVsnbG9naWMnXSA9PT0nMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVGV4dCA9ICdBTkQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdFtpXVsnbG9naWMnXSA9PT0nMScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVGV4dCA9ICdPUidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0W2ldWydsb2dpYyddID09PScyJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25UZXh0ID0gJ05PVCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZGF0YXMucHVzaCh7aWQ6IHJlc3VsdFtpXVsnaWQnXSwgdGV4dDpgWyR7b3B0aW9uVGV4dH1dICBgK3Jlc3VsdFtpXVsnd29yZCddfSkgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn44Oq44Kv44Ko44K544OI44Gr5aSx5pWX44GX44G+44GX44GfJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjooajnpLpcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCRldmVudC5yZXNwb25zZS5tc2csIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZUl0ZW0oaWQpIHtcclxuICAgICAgICAgICAgY29udHJvbGxlci5kZWxldGVLZXl3b3JkX2FqYXgoaWQubGlzdElkLCAwKS8v5byV5pWwKOOCreODvOODr+ODvOODiUlELCDjgq3jg7zjg6/jg7zjg4njgr/jgqTjg5fvvIgwOuODleOCqeODreODr+ODvOOCteODvOODgSAxOuOBhOOBhOOBreOCreODvOODr+ODvOODie+8iSlcclxuICAgICAgICAgICAgY29udHJvbGxlci4kb25jZSgnQUpBWF9DT01QTEVURV9ERUxFVEVGT0xMT1dFUlNFQVJDSFdPUkQnLCAoJGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ09LJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+ODquOCr+OCqOOCueODiOOBq+aIkOWKn+OBl+OBvuOBl+OBny4gQUpBWF9DT01QTEVURV9ERUxFVEVGT0xMT1dFUlNFQVJDSFdPUkQnKSBcclxuICAgICAgICAgICAgICAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjooajnpLpcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCRldmVudC5yZXNwb25zZS5tc2csIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gXy5yZWplY3QodGhpcy5kYXRhcywgeyAnaWQnOiBpZC5saXN0SWQgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjooajnpLpcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCRldmVudC5yZXNwb25zZS5tc2csIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgZ2V0SWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgc3Ryb25nID0gMTAwMDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKDE2KSArIE1hdGguZmxvb3Ioc3Ryb25nICogTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBSZWdpc3RlckZvbGxvd2VyU2VhcmNoS2V5d29yZC52dWUiLCI8dGVtcGxhdGU+ICAgIFxyXG4gICAgPGRpdiB2LWlmPVwiIHNob3c9PT10cnVlIFwiIGNsYXNzPVwibC1zdWJQYWdlIHAtdGFyZ2V0YWNudC13cmFwXCI+XHJcbiAgICAgICAgPE1lc3NhZ2U+PC9NZXNzYWdlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0eHRfY2VudGVyXCI+PGJ1dHRvbiB2LW9uOmNsaWNrPVwibW92ZVRvcFwiIGNsYXNzPVwiYy1idG4gYy1tb3ZlVG9wXCI+PGkgY2xhc3M9XCJmYXMgZmEtaG9tZSBjLWljb24taG9tZVwiPjwvaT5IT01FPC9idXR0b24+PHNwYW4gY2xhc3M9XCJjLXRpdGxlIHAtaGVhZGluZ19fZm9sbG93XCI+44K/44O844Ky44OD44OI44Ki44Kr44Km44Oz44OI55m76YyyPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgIDxJbnB1dEZvcm0gdi1vbjpvbkNoYW5nZT1cIm9uQ2hhbmdlKCRldmVudClcIiB0eXBlPVwidGV4dFwiIGxhYmVsPVwiXCIgbmFtZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkDjga7jgYLjgajjga7jgqLjgqvjgqbjg7Pjg4hJROOCkuWFpeWKmyjkvosuIGthenVraWNoaTMxMTApXCI+PC9JbnB1dEZvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR4dF9yaWdodFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHYtb246Y2xpY2s9XCJhZGRJdGVtXCIgIGNsYXNzPVwiYy1idG5cIj7ov73liqA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8S2V5d29yZExpc3RDb21wb25lbnQgdi1iaW5kOmxpc3RJdGVtcz1cImRhdGFzXCIgdi1vbjpkZWxldGUtaXRlbT1cImRlbGV0ZUl0ZW0oJGV2ZW50KVwiIHR5cGU9XCJ0YXJnZXRcIj48L0tleXdvcmRMaXN0Q29tcG9uZW50PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQga2V5d29yZGxpc3QgZnJvbSAnLi9LZXl3b3JkTGlzdC52dWUnXHJcbmltcG9ydCBpbnB1dGZvcm0gZnJvbSAnLi9JbnB1dEZvcm0udnVlJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9TdG9yZS52dWUnXHJcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlci52dWUnXHJcbmltcG9ydCBtZXNzYWdlIGZyb20gJy4vbWVzc2FnZS52dWUnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBLZXl3b3JkTGlzdENvbXBvbmVudDoga2V5d29yZGxpc3QsXHJcbiAgICAgICAgSW5wdXRGb3JtOiBpbnB1dGZvcm0sXHJcbiAgICAgICAgTWVzc2FnZTogbWVzc2FnZSxcclxuICAgIH0sXHJcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRhdGFzOiBbXSxcclxuICAgICAgICAgICAgc2NyZWVuX25hbWU6ICcnLFxyXG4gICAgICAgICAgICBJc0V4aXN0OmZhbHNlLC8v44Ki44Kr44Km44Oz44OI44GM5a2Y5Zyo44GX44Gm44GE44KL44GL44Gp44GG44GLXHJcbiAgICAgICAgICAgIHNob3c6ZmFsc2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSwgIFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAvL+ODreOCsOOCpOODs+ODgeOCp+ODg+OCr+e1kOaenFxyXG4gICAgICAgIGNvbnRyb2xsZXIuY2hlY2tMb2dpbl9hamF4KClcclxuICAgICAgICBjb250cm9sbGVyLiRvbmNlKCdBSkFYX0NPTVBMRVRFX0NIRUNLTE9HSU4nLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdERUJVRyAtLSBIb21lLnZ1ZSAtLT4g44Ot44Kw44Kk44Oz44OB44Kn44OD44Kv44GM5a6M5LqG44GX44G+44GX44GfJylcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJGV2ZW50LnJlc3BvbnNlLnJlcylcclxuICAgICAgICAgICAgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ05PVExPR0lOJyApe1xyXG4gICAgICAgICAgICAgICAgLy/jg63jgrDjgqTjg7Pjg6bjg7zjgrbjg7zjgafjgarjgYTjgZ/jgoHjg63jgrDjgqTjg7PnlLvpnaLjgavpo5vjgbDjgZfjgb7jgZnjgIJcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfjg63jgrDjgqTjg7Pjg6bjg7zjgrbjg7zjgafjgYLjgorjgb7jgZvjgpPjgIInKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfjg63jgrDjgqTjg7Pjg6bjg7zjgrbjg7zjgafjgZnjgIInKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhcygpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG1vdmVUb3AoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNoYW5nZShldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbl9uYW1lID0gZXZlbnQuaW5wdXQudmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZUl0ZW0oaWQpIHtcclxuICAgICAgICAgICAgY29udHJvbGxlci5kZWxldGVVc2VyQWNjb3VudF9hamF4KGlkLmxpc3RJZCwgMCkvL+W8leaVsCjjgq3jg7zjg6/jg7zjg4lJRCwg44K544Kv44Oq44O844Oz44ON44O844Og44CALCDjgq3jg7zjg6/jg7zjg4njgr/jgqTjg5fvvIgwOuOCv+ODvOOCsuODg+ODiOOCouOCq+OCpuODs+ODiCAxOuODleOCqeODreODvOa4iOOCouOCq+OCpuODs+ODiOOAgDI644Ki44Oz44OV44Kp44Ot44O844Ki44Kr44Km44Oz44OI77yJKVxyXG4gICAgICAgICAgICBjb250cm9sbGVyLiRvbmNlKCdBSkFYX0NPTVBMRVRFX0RFTEVURVRBUkdFVEFDQ09VTlQnLCAoJGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ09LJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+ODquOCr+OCqOOCueODiOOBq+aIkOWKn+OBl+OBvuOBl+OBny4gQUpBWF9DT01QTEVURV9ERUxFVEVUQVJHRVRBQ0NPVU5UJykgXHJcbiAgICAgICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhcyA9IF8ucmVqZWN0KHRoaXMuZGF0YXMsIHsgJ2lkJzogaWQubGlzdElkIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJGV2ZW50LnJlc3BvbnNlLm1zZywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZEl0ZW0oZXZlbnQpIHtcclxuICAgICAgICAgICAgLy/jgq3jg7zjg6/jg7zjg4nmnKrlhaXlipvjga7loLTlkIhcclxuICAgICAgICAgICAgaWYodGhpcy5zY3JlZW5fbmFtZSA9PT0gJycpe1xyXG4gICAgICAgICAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjooajnpLpcclxuICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJ+OCreODvOODr+ODvOODieOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5YWl5Yqb44GV44KM44Gf44Ki44Kr44Km44Oz44OI44GM5a2Y5Zyo44GZ44KL44GL44OB44Kn44OD44Kv44GZ44KLXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuQ2hlY2tVc2VyQWNjb3VudEV4aXN0X2FqYXgodGhpcy5zY3JlZW5fbmFtZSlcclxuICAgICAgICAgICAgY29udHJvbGxlci4kb25jZSgnQUpBWF9DT01QTEVURV9DSEVDS1VTRVJBQ0NPVU5URVhJU1QnLCAoJGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ09LJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+WPluW+l+OBq+aIkOWKn++8muOCouOCq+OCpuODs+ODiOWtmOWcqG9y5a2Y5Zyo44GX44Gq44GEJylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UucnN0KSAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Jc0V4aXN0PXRydWVcclxuICAgICAgICAgICAgICAgICAgICBpZighJGV2ZW50LnJlc3BvbnNlLnJzdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflrZjlnKjjgZfjgarjgYTjg6vjg7zjg4jjgavmnaXjgabjgYTjgovjgognKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JzdOOBjGZhbHNl44Gu44Go44GN77yI44Ki44Kr44Km44Oz44OI44GM5a2Y5Zyo44GX44Gq44GE44Go44GN77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJ+WtmOWcqOOBl+OBquOBhOODpuODvOOCtuODvOOBp+OBmScsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSXNFeGlzdD1mYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn44Ki44Kr44Km44Oz44OI5a2Y5Zyo44GX44G+44GZJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuSXNFeGlzdO+8micrdGhpcy5Jc0V4aXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLklzRXhpc3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd29yZF9pZCA9IHRoaXMuZ2V0SWQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5zYXZlVXNlckFjY291bnRfYWpheCh3b3JkX2lkLCB0aGlzLnNjcmVlbl9uYW1lLCAwKS8v5byV5pWwKOOCreODvOODr+ODvOODiUlELCDjgrnjgq/jg6rjg7zjg7Pjg43jg7zjg6DjgIAsIOOCreODvOODr+ODvOODieOCv+OCpOODl++8iDA644K/44O844Ky44OD44OI44Ki44Kr44Km44Oz44OIIDE644OV44Kp44Ot44O85riI44Ki44Kr44Km44Oz44OI44CAMjrjgqLjg7Pjg5Xjgqnjg63jg7zjgqLjgqvjgqbjg7Pjg4jvvIkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLiRvbmNlKCdBSkFYX0NPTVBMRVRFX1NBVkVUQVJHRVRBQ0NPVU5UJywgKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ09LJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfjg6rjgq/jgqjjgrnjg4jjgavmiJDlip/jgZfjgb7jgZfjgZ8uIEFKQVhfQ09NUExFVEVfU0FWRVRBUkdFVEFDQ09VTlQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UucnN0KSAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vTGlzdOOBq+i/veWKoOOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goe2lkOiB3b3JkX2lkLCB0ZXh0OnRoaXMuc2NyZWVuX25hbWV9KSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJGV2ZW50LnJlc3BvbnNlLm1zZywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJGV2ZW50LnJlc3BvbnNlLm1zZywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+mdnuWFrOmWi+OBruOCouOCq+OCpuODs+ODiOOBp+OBmeOCiCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Jc0V4aXN0PWZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjooajnpLpcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCRldmVudC5yZXNwb25zZS5tc2csIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KSAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVEYXRhcygpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzICAgICAgXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZ2V0VXNlckFjY291bnRfYWpheCgwKS8v5byV5pWwKOOCreODvOODr+ODvOODieOCv+OCpOODl++8iDA644K/44O844Ky44OD44OI44Ki44Kr44Km44Oz44OIIDE644OV44Kp44Ot44O85riI44Ki44Kr44Km44Oz44OIIDI644Ki44Oz44OV44Kp44Ot44O844Ki44Kr44Km44Oz44OI77yJKVxyXG4gICAgICAgICAgICBjb250cm9sbGVyLiRvbmNlKCdBSkFYX0NPTVBMRVRFX0dFVFRBUkdFVEFDQ09VTlQnLCAoJGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJGV2ZW50LnJlc3BvbnNlLnJlcyA9PT0gJ09LJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+ODquOCr+OCqOOCueODiOOBq+aIkOWKn+OBl+OBvuOBl+OBny4gQUpBWF9DT01QTEVURV9HRVRUQVJHRVRBQ0NPVU5UJylcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UucnN0KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKCRldmVudC5yZXNwb25zZS5yc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICRldmVudC5yZXNwb25zZS5yc3RcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSAkZXZlbnQucmVzcG9uc2UucnN0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZGF0YXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0RC44GL44KJ5Y+W5b6X44GX44Gf44Om44O844K244O844Ki44Kr44Km44Oz44OITGlzdOaDheWgseOCkmRhdGFz44Gr5qC857SN44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmRhdGFzLnB1c2goe2lkOiByZXN1bHRbaV1bJ2lkJ10sIHRleHQ6cmVzdWx0W2ldWydzY3JlZW5fbmFtZSddfSkgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCfjg6rjgrnjg4jjga7mm7TmlrDjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILmmYLplpPjgpLjgYrjgYTjgablho3luqbjgYroqabjgZfjgY/jgaDjgZXjgYQnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn44Oq44Kv44Ko44K544OI44Gr5aSx5pWX44GX44G+44GX44GfJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjooajnpLpcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCRldmVudC5yZXNwb25zZS5tc2csIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldElkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IHN0cm9uZyA9IDEwMDA7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygxNikgKyBNYXRoLmZsb29yKHN0cm9uZyAqIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFJlZ2lzdGVyVGFyZ2V0QWNjb3VudC52dWUiLCI8dGVtcGxhdGU+ICAgIFxyXG5cclxuICAgIDxkaXYgdi1pZj1cIiBzaG93PT09dHJ1ZSBcIiBjbGFzcz1cImwtc3ViUGFnZSBwLWF1dG90d3Qtd3JhcFwiPlxyXG4gICAgICAgIDxNZXNzYWdlPjwvTWVzc2FnZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHh0X2NlbnRlclwiPjxidXR0b24gdi1vbjpjbGljaz1cIm1vdmVUb3BcIiBjbGFzcz1cImMtYnRuIGMtbW92ZVRvcFwiPjxpIGNsYXNzPVwiZmFzIGZhLWhvbWUgYy1pY29uLWhvbWVcIj48L2k+SE9NRTwvYnV0dG9uPjxzcGFuIGNsYXNzPVwiYy10aXRsZSBwLWhlYWRpbmdfX3R3dHNjaGVkdWxlXCI+6Ieq5YuV44OE44Kk44O844OI6Kit5a6aPC9zcGFuPjwvZGl2PiAgXHJcbiAgICAgICAgPFZ1ZUN0a0RhdGVUaW1lUGlja2VyXHJcbiAgICAgICAgIHYtbW9kZWw9XCJ5b3VyVmFsdWVcIiBcclxuICAgICAgICAgOm1pbnV0ZS1pbnRlcnZhbD1cIjFcIlxyXG4gICAgICAgICA6Zm9ybWF0PVwiJ1lZWVktTU0tREQgSEg6bW0nXCJcclxuICAgICAgICAgOm92ZXJsYXk9XCJ0cnVlXCJcclxuICAgICAgICAgOm1pbi1kYXRlPVwic3RhcnRcIlxyXG4gICAgICAgICA6bWF4LWRhdGU9XCJlbmRcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dEZvcm0gdi1vbjpvbkNoYW5nZT1cIm9uQ2hhbmdlKCRldmVudClcIiB0eXBlPVwidGV4dFwiIGxhYmVsPVwi5YaF5a65XCIgbmFtZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuOBk+OBruWGheWuueOCkuODhOOCpOODvOODiOOBl+OBvuOBmVwiPjwvSW5wdXRGb3JtPiAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0eHRfcmlnaHRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrPVwiYWRkSXRlbVwiICBjbGFzcz1cImMtYnRuXCI+6L+95YqgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxTY2hlZHVsZUxpc3RDb21wb25lbnQgdi1iaW5kOmxpc3RJdGVtcz1cImRhdGFzXCIgdi1vbjpkZWxldGUtaXRlbT1cImRlbGV0ZUl0ZW0oJGV2ZW50KVwiPjwvU2NoZWR1bGVMaXN0Q29tcG9uZW50PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IHNjaGVkdWxlbGlzdCBmcm9tICcuL1NjaGVkdWxlTGlzdC52dWUnXHJcbmltcG9ydCBpbnB1dGZvcm0gZnJvbSAnLi9JbnB1dEZvcm0udnVlJ1xyXG5pbXBvcnQgbWVzc2FnZSBmcm9tICcuL21lc3NhZ2UudnVlJ1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXIudnVlJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9TdG9yZS52dWUnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IFZ1ZUN0a0RhdGVUaW1lUGlja2VyIGZyb20gJ3Z1ZS1jdGstZGF0ZS10aW1lLXBpY2tlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgU2NoZWR1bGVMaXN0Q29tcG9uZW50OiBzY2hlZHVsZWxpc3QsXHJcbiAgICAgICAgSW5wdXRGb3JtOiBpbnB1dGZvcm0sXHJcbiAgICAgICAgVnVlQ3RrRGF0ZVRpbWVQaWNrZXIsIFZ1ZUN0a0RhdGVUaW1lUGlja2VyLFxyXG4gICAgICAgIE1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICB9LFxyXG4gICAgZGF0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkYXRhczogW10sXHJcbiAgICAgICAgICAgIGRhdGU6ICcnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgeW91clZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICB0b2dnbGU6ICcxJyxcclxuICAgICAgICAgICAgcmVnaXN0ZXJudW06IDAsICBcclxuICAgICAgICAgICAgc2hvdzpmYWxzZSAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LCBcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgLy/jg63jgrDjgqTjg7Pjg4Hjgqfjg4Pjgq/ntZDmnpxcclxuICAgICAgICBjb250cm9sbGVyLmNoZWNrTG9naW5fYWpheCgpXHJcbiAgICAgICAgY29udHJvbGxlci4kb25jZSgnQUpBWF9DT01QTEVURV9DSEVDS0xPR0lOJywgKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnREVCVUcgLS0gSG9tZS52dWUgLS0+IOODreOCsOOCpOODs+ODgeOCp+ODg+OCr+OBjOWujOS6huOBl+OBvuOBl+OBnycpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCRldmVudC5yZXNwb25zZS5yZXMpXHJcbiAgICAgICAgICAgIGlmKCRldmVudC5yZXNwb25zZS5yZXMgPT09ICdOT1RMT0dJTicgKXtcclxuICAgICAgICAgICAgICAgIC8v44Ot44Kw44Kk44Oz44Om44O844K244O844Gn44Gq44GE44Gf44KB44Ot44Kw44Kk44Oz55S76Z2i44Gr6aOb44Gw44GX44G+44GZ44CCXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn44Ot44Kw44Kk44Oz44Om44O844K244O844Gn44GC44KK44G+44Gb44KT44CCJylcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn44Ot44Kw44Kk44Oz44Om44O844K244O844Gn44GZ44CCJylcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdyA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7ICAgICAgICBcclxuICAgICAgICAvL0xpc3Tjga7ooajnpLrjgpLmm7TmlrBcclxuICAgICAgICB0aGlzLnVwZGF0ZURhdGFzKClcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gbWluLWRhdGUg44Gr5piO5pel44GuOeaZguOCkuaMh+WumlxyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gbW9tZW50KCkuYWRkKDAsICdkYXlzJykuaG91cigxKVxyXG4gICAgICAgIHJldHVybiBzdGFydC5mb3JtYXQoJ1lZWVktTU0tRERUSEg6bW06c3MnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW5kKCkge1xyXG4gICAgICAgIC8vIG1heC1kYXRlIOOBqyBtaW4tZGF0ZSDjgYvjgokz44O25pyI5b6M44KS5oyH5a6aXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBtb21lbnQodGhpcy5zdGFydClcclxuICAgICAgICBjb25zdCBlbmQgPSBzdGFydC5hZGQoMywgJ21vbnRocycpLmVuZE9mKCdkYXknKVxyXG4gICAgICAgIHJldHVybiBlbmQuZm9ybWF0KCdZWVlZLU1NLUREVEhIOm1tOnNzJylcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG1vdmVUb3AoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgfSwgICAgICAgIFxyXG4gICAgICAgIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmlucHV0Lm5hbWUgPT09J2RhdGUnKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSA9IGV2ZW50LmlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGV2ZW50LmlucHV0Lm5hbWUgPT09J3RleHQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQgPSBldmVudC5pbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlRGF0YXMoKSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcyAgICAgIFxyXG4gICAgICAgICAgICBjb250cm9sbGVyLmdldFR3ZWV0U2NoZWR1bGVfYWpheCgpXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuJG9uY2UoJ0FKQVhfQ09NUExFVEVfR0VUVFdFRVRTQ0hFRFVMRScsICgkZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UucmVzID09PSAnT0snKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn44Oq44Kv44Ko44K544OI44Gr5oiQ5Yqf44GX44G+44GX44GfLiBBSkFYX0NPTVBMRVRFX0dFVFRXRUVUU0NIRURVTEUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKCRldmVudC5yZXNwb25zZS5yc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoJGV2ZW50LnJlc3BvbnNlLnJzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gJGV2ZW50LnJlc3BvbnNlLnJzdFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9ICRldmVudC5yZXNwb25zZS5yc3QubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9EQuOBi+OCieWPluW+l+OBl+OBn0xpc3Tmg4XloLHjgpJkYXRhc+OBq+agvOe0jeOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmRhdGFzLnB1c2goe2lkOiByZXN1bHRbaV1bJ2lkJ10sIGRhdGU6cmVzdWx0W2ldWydkYXRlJ10sIHRleHQ6cmVzdWx0W2ldWyd0ZXh0J10sIGlzRG9uZTpyZXN1bHRbaV1bJ2RvbmVfZmxnJ119KSAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJGV2ZW50LnJlc3BvbnNlLm1zZywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFrZURhdGFzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlSXRlbShpZCkge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLmRlbGV0ZVR3ZWV0U2NoZWR1bGVfYWpheChpZC5saXN0SWQpXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuJG9uY2UoJ0FKQVhfQ09NUExFVEVfREVMRVRFVFdFRVRTQ0hFRFVMRScsICgkZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UucmVzID09PSAnT0snKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn44Oq44Kv44Ko44K544OI44Gr5oiQ5Yqf44GX44G+44GX44GfLiBBSkFYX0NPTVBMRVRFX0RFTEVURVRXRUVUU0NIRURVTEUnKSBcclxuICAgICAgICAgICAgICAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjooajnpLpcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCRldmVudC5yZXNwb25zZS5tc2csIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gXy5yZWplY3QodGhpcy5kYXRhcywgeyAnaWQnOiBpZC5saXN0SWQgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfjg6rjgq/jgqjjgrnjg4jjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKVxyXG4gICAgICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRJdGVtKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICAgICAgICAvL+aXpeS7mOOAgeODhOOCpOODvOODiOWGheWuueOBjOepuuOBruWgtOWQiFxyXG4gICAgICAgICAgICBpZih0aGlzLnlvdXJWYWx1ZSA9PT0gbnVsbCB8fCB0aGlzLnRleHQ9PT0nJyl7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCfjg4TjgqTjg7zjg4jmmYLliLvjgajlhoXlrrnjgpLoqJjlhaXjgZfjgabjgY/jgaDjgZXjgYQnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIGNvbnN0IG5vd19tcyA9IG5vdy5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHZhciByZXNlcnZlVGltZSA9IERhdGUucGFyc2UodGhpcy55b3VyVmFsdWUpXHJcbiAgICAgICAgICAgIC8vIHN0b3JlLnNldFJlc2VydmVkVGltZShyZXNlcnZlVGltZSlcclxuICAgICAgICAgICAgdGhpcy5yZXNlcnZlVGltZXMgPSByZXNlcnZlVGltZVxyXG4gICAgICAgICAgICAvL+S9lW1z5b6M44Gr44OE44Kk44O844OI44KS44GZ44KL44Gu44GLXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZl90aW1lID0gcmVzZXJ2ZVRpbWUgLSBub3dfbXM7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzZXJ2ZVRpbWUnK3Jlc2VydmVUaW1lKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm93X21zJytub3dfbXMpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkaWZfdGltZTonK2RpZl90aW1lKVxyXG4gICAgICAgICAgICAvL+mBjuWOu+OBruaZgumWk+OCkuaMh+WumuOBl+OBpuOBhOOBn+WgtOWQiFxyXG4gICAgICAgICAgICBpZihkaWZfdGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCfpgY7ljrvjga7mmYLplpPjga/oqK3lrprjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZvjgpMnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5LqI57SE5pel5pmC44CB44OE44Kk44O844OI5YaF5a6544KS44OH44O844K/44OZ44O844K544Gr5L+d5a2Y44GZ44KLXHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZCgpIC8v5LiA5oSP44GuaWTjgpLnmbrooYzjgZfjgabjgYrjgY/jgILjgZPjga5pZOOCkkRC44Gr5L+d5a2Y44GZ44KLXHJcblxyXG4gICAgICAgICAgICAvL+S6iOe0hOaDheWgseOCklN0b3Jl44Gr5L+d5a2Y44GX44Gm44GK44GP44CCY3JvbnRhYmZ1bmMudnVl44Gn5L2/44GGXHJcbiAgICAgICAgICAgIHN0b3JlLnNldFJlc2VydmVkSXRlbShpZCwgcmVzZXJ2ZVRpbWUgLHRoaXMudGV4dClcclxuXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuc2F2ZVR3ZWV0U2NoZWR1bGVfYWpheChpZCwgdGhpcy50ZXh0LCB0aGlzLnlvdXJWYWx1ZSlcclxuICAgICAgICAgICAgY29udHJvbGxlci4kb25jZSgnQUpBWF9DT01QTEVURV9TQVZFVFdFRVRTQ0hFRFVMRScsICgkZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UucmVzID09PSAnT0snKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn44Oq44Kv44Ko44K544OI44Gr5oiQ5Yqf44GX44G+44GX44GfLiBBSkFYX0NPTVBMRVRFX1NBVkVUV0VFVFNDSEVEVUxFJylcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcigkZXZlbnQucmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjooajnpLpcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCRldmVudC5yZXNwb25zZS5tc2csIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3dhdGNo44KS6ZaL5aeLIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNyb250YWIuZW5hYmxlSm9iKCd0d2VldHdhdGNoJylcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXRDcm9uU3RhdHVzKHRydWUpIC8vd2F0Y2jplovlp4tcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL0xpc3Tjgavov73liqBcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmRhdGFzLnB1c2goe2lkOiBpZCwgZGF0ZTp0aGF0LnlvdXJWYWx1ZSwgdGV4dDp0aGF0LnRleHQsIGlzRG9uZTpmYWxzZX0pICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJGV2ZW50LnJlc3BvbnNlLm1zZywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRJZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHJvbmcgPSAxMDAwO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoMTYpICsgTWF0aC5mbG9vcihzdHJvbmcgKiBNYXRoLnJhbmRvbSgpKS50b1N0cmluZygxNik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFJlZ2lzdGVyVHdlZXRTY2hlZHVsZS52dWUiLCI8dGVtcGxhdGU+ICAgIFxyXG4gICAgPGRpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFR3ZWV0SXRlbXNDb21wb25lbnQgdi1mb3I9XCJsaXN0SXRlbSBpbiBsaXN0SXRlbXNcIiB2LWJpbmQ6a2V5PVwibGlzdEl0ZW0uaWRcIiB2LWJpbmQ6ZGF0YT1cImxpc3RJdGVtXCIgdi1vbjpkZWxldGUtaXRlbT1cImRlbGV0ZUl0ZW0oJGV2ZW50KVwiPjwvVHdlZXRJdGVtc0NvbXBvbmVudD5cclxuICAgICAgICA8L2Rpdj5cclxuIFxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgdHdlZXR0YXNrIGZyb20gJy4vVHdlZXRUYXNrLnZ1ZSdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbJ2xpc3RJdGVtcyddLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIFR3ZWV0SXRlbXNDb21wb25lbnQ6IHR3ZWV0dGFza1xyXG4gICAgfSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICB9XHJcbiAgICB9LCAgIFxyXG4gICAgbWV0aG9kczogeyAgICAgICAgXHJcbiAgICAgICAgZGVsZXRlSXRlbShpZCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdkZWxldGUtaXRlbScsIHtsaXN0SWQ6aWQuaXRlbV9pZH0pXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YXMgPSBfLnJlamVjdCh0aGlzLmRhdGFzLCB7ICdpZCc6IGlkLml0ZW1faWQgfSk7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBTY2hlZHVsZUxpc3QudnVlIiwiPHRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwicC1saXN0LWF1dG90d3RcIj5cclxuICAgIDxsaSA6Y2xhc3M9XCJjbGFzc05hbWVMaVwiPlxyXG4gICAgICAgIDxpIDpjbGFzcz1cImNsYXNzTmFtZUljb25cIj48L2k+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwicC1saXN0LWF1dG90d3RfX3dyYXBcIj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInAtbGlzdC1hdXRvdHd0X19kYXRlLXR0bFwiPuaXpeS7mO+8mjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicC1saXN0LWF1dG90d3RfX2RhdGUtdmFsXCI+e3tkYXRhLmRhdGV9fTwvbGk+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwLWxpc3QtYXV0b3R3dF9fY29udGVudC10dGxcIj7lhoXlrrnvvJo8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInAtbGlzdC1hdXRvdHd0X19jb250ZW50LXZhbFwiPnt7ZGF0YS50ZXh0fX08L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2ggYy1nYXJiYWdlXCIgdi1vbjpjbGljaz1cIiRlbWl0KCdkZWxldGUtaXRlbScsIHtpdGVtX2lkOmRhdGEuaWR9KVwiID48L2k+XHJcbiAgICA8L2xpPlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWydkYXRhJ10sLy9wcm9wc+OBp+WPl+OBkeWPluOBo+OBn+ODh+ODvOOCv+OBr+mWouaVsOWGheOBp3RoaXMuZGF0YeOBp+S9v+OBiOOCi1xyXG4gICAgZGF0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjbGFzc05hbWVMaTp7XHJcbiAgICAgICAgICAgICAgICAnYy1saXN0SXRlbSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAnYy1saXN0SXRlbS0tZG9uZSc6IHRoaXMuZGF0YS5pc0RvbmUgPT09ICcxJyA/IHRydWUgOiBmYWxzZSAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZUljb246IHtcclxuICAgICAgICAgICAgICAgICdmYSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAnZmEtY2FsZW5kYXItY2hlY2snOiB0aGlzLmRhdGEuaXNEb25lID09PSAnMScgPyBmYWxzZSA6IHRydWUgLFxyXG4gICAgICAgICAgICAgICAgJ2ZhLWNoZWNrLWNpcmNsZSc6IHRoaXMuZGF0YS5pc0RvbmUgPT09ICcxJyA/IHRydWUgOiBmYWxzZSAsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlZCgpIHtcclxuICAgICAgICB0aGlzLiRzZXQodGhpcy5jbGFzc05hbWVMaSwgJ2MtbGlzdEl0ZW0tLWRvbmUnLCB0aGlzLmRhdGEuaXNEb25lID09PSAnMScgPyB0cnVlIDogZmFsc2UpXHJcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMuY2xhc3NOYW1lSWNvbiwgJ2ZhLWNhbGVuZGFyLWNoZWNrJywgdGhpcy5kYXRhLmlzRG9uZSA9PT0gJzEnID8gZmFsc2UgOiB0cnVlKVxyXG4gICAgICAgIHRoaXMuJHNldCh0aGlzLmNsYXNzTmFtZUljb24sICdmYS1jaGVjay1jaXJjbGUnLCB0aGlzLmRhdGEuaXNEb25lID09PSAnMScgPyB0cnVlIDogZmFsc2UpXHJcbiAgICB9XHJcbiAgICAsXHJcbiAgICBtZXRob2RzOiB7ICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUd2VldFRhc2sudnVlIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImwtc3ViUGFnZVwiPlxyXG4gICAgPE1lc3NhZ2U+PC9NZXNzYWdlPiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJjLWZvcm0td3JhcFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiYy1oZWFkaW5nIHAtaGVhZGluZ19fdGl0bGUgdHh0X2NlbnRlclwiPuiqjeiovOOCs+ODvOODieeUn+aIkDwvcD5cclxuICAgICAgICA8SW5wdXRGb3JtIHYtb246b25DaGFuZ2U9XCJvbkNoYW5nZSgkZXZlbnQpXCIgdHlwZT1cInRleHRcIiBsYWJlbD1cIuODpuODvOOCtuODvOWQjSpcIiBuYW1lPVwidXNlcm5hbWVcIj48L0lucHV0Rm9ybT4gICAgICAgICAgICAgXHJcbiAgICAgICAgPElucHV0Rm9ybSB2LW9uOm9uQ2hhbmdlPVwib25DaGFuZ2UoJGV2ZW50KVwiIHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCLjg6Hjg7zjg6vjgqLjg4njg6zjgrkqXCIgbmFtZT1cImVtYWlsXCI+PC9JbnB1dEZvcm0+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0eHRfY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImMtYnRuXCIgdi1vbjpjbGljaz1cIm1ha2VSZVBhc3N3b3JkXCI+55Sf5oiQ44GZ44KLPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjLWZvcm0td3JhcFwiPlxyXG4gICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImMtbGlua1wiIHRvPVwiL3NpZ25pblwiPuODreOCsOOCpOODs+eUu+mdouOBuDwvcm91dGVyLWxpbms+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG4vLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IGlucHV0Zm9ybSBmcm9tICcuL0lucHV0Rm9ybS52dWUnXHJcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlci52dWUnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL1N0b3JlLnZ1ZSdcclxuaW1wb3J0IG1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlLnZ1ZSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgSW5wdXRGb3JtOiBpbnB1dGZvcm0sXHJcbiAgICAgICAgTWVzc2FnZTogbWVzc2FnZSxcclxuICAgIH0sXHJcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgICB1c2VybmFtZTonJyxcclxuICAgICAgICAgICAgZW1haWw6ICcnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbigpe1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkNoYW5nZSgkZXZlbnQpe1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9ICRldmVudC5pbnB1dC5uYW1lO1xyXG4gICAgICAgICAgICBpZihuYW1lPT09XCJ1c2VybmFtZVwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcm5hbWU9JGV2ZW50LmlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKG5hbWU9PT1cImVtYWlsXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWFpbD0kZXZlbnQuaW5wdXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFrZVJlUGFzc3dvcmQoKXtcclxuICAgICAgICAgICAgaWYodGhpcy5lbWFpbCA9PT0gJycgfHwgdGhpcy51c2VybmFtZSA9PT0gJycpe1xyXG4gICAgICAgICAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjooajnpLpcclxuICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJ+acquWFpeWKm+OBrumgheebruOBjOOBguOCiuOBvuOBmScsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5lbWl0X21lc3NhZ2UobWVzc2FnZSkgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGtlbWFpbCA9IHRoaXMudmFsaWRFbWFpbCgpXHJcbiAgICAgICAgICAgIGlmKCFjaGtlbWFpbCl7XHJcbiAgICAgICAgICAgICAgICAvL2VtYWls44Gu5b2i5byP44Gn44Gq44GL44Gj44Gf5aC05ZCIXHJcbiAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgnRW1haWzjga7lvaLlvI/jgaflhaXlipvjgZfjgabjgY/jgaDjgZXjgYQnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3VzZXJuYW1l44Gu5Y2K6KeS6Iux5pWw5a2X44OB44Kn44OD44KvXHJcbiAgICAgICAgICAgIGNvbnN0IGNoa25hbWUgPSB0aGlzLnZhbGlkaGFsZigpXHJcbiAgICAgICAgICAgICBpZighY2hrbmFtZSl7XHJcbiAgICAgICAgICAgICAgICAvL2VtYWls44Gu5b2i5byP44Gn44Gq44GL44Gj44Gf5aC05ZCIXHJcbiAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgn5Y2K6KeS6Iux5pWw5a2X44Gn5YWl5Yqb44GX44Gm44GP44Gg44GV44GEJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udHJvbGxlci5wYXNzUmVtaW5kU2VuZF9hamF4KHRoaXMudXNlcm5hbWUsIHRoaXMuZW1haWwpXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuJG9uY2UoJ0FKQVhfQ09NUExFVEVfUEFTU1JFTUlORFNFTkQnLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZigkZXZlbnQucmVzcG9uc2UucmVzID09PSAnT0snKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJGV2ZW50LnJlc3BvbnNlLm1zZywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL3JlbWluZHJlY2lldmUnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkRW1haWwoKXtcclxuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXltBLVphLXowLTldezF9W0EtWmEtejAtOV8uLV0qQHsxfVtBLVphLXowLTlfLi1dezEsfVxcLltBLVphLXowLTldezEsfSQvKTtcclxuICAgICAgICAgICAgaWYodGhpcy5lbWFpbC5tYXRjaChyZWdleHApKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGhhbGYoKXtcclxuICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXltBLVphLXowLTldKiQvKTtcclxuICAgICAgICAgICAgaWYodGhpcy51c2VybmFtZS5tYXRjaChyZWdleHApKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFzc1JlbWluZFNlbmQudnVlIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImwtc3ViUGFnZVwiPlxyXG4gICAgPE1lc3NhZ2U+PC9NZXNzYWdlPiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJjLWZvcm0td3JhcFwiPiAgIFxyXG4gICAgICAgIDxwIGNsYXNzPVwiYy1oZWFkaW5nIHAtaGVhZGluZ19fdGl0bGUgdHh0X2NlbnRlclwiPuODkeOCueODr+ODvOODieWGjeeZuuihjDwvcD4gICAgIFxyXG4gICAgICAgIDxJbnB1dEZvcm0gdi1vbjpvbkNoYW5nZT1cIm9uQ2hhbmdlKCRldmVudClcIiB0eXBlPVwidGV4dFwiIGxhYmVsPVwi6KqN6Ki844Kz44O844OJKlwiIG5hbWU9XCJ1c2VybmFtZVwiPjwvSW5wdXRGb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidHh0X2NlbnRlclwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjLWJ0blwiIHYtb246Y2xpY2s9XCJtYWtlUmVQYXNzd29yZFwiPuWGjeeZuuihjOOBmeOCizwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYy1mb3JtLXdyYXBcIj5cclxuICAgICAgICA8cm91dGVyLWxpbmsgY2xhc3M9XCJjLWxpbmtcIiB0bz1cIi9zaWduaW5cIj7jg63jgrDjgqTjg7PnlLvpnaLjgbg8L3JvdXRlci1saW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBpbnB1dGZvcm0gZnJvbSAnLi9JbnB1dEZvcm0udnVlJ1xyXG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXIudnVlJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9TdG9yZS52dWUnXHJcbmltcG9ydCBtZXNzYWdlIGZyb20gJy4vbWVzc2FnZS52dWUnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIElucHV0Rm9ybTogaW5wdXRmb3JtLFxyXG4gICAgICAgIE1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICB9LFxyXG4gICAgZGF0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgICAgY29kZTogJydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy/jg6Hjg4Pjgrvjg7zjgrjjgYzjgrvjg4Pjg4jjgZXjgozjgabjgYTjgozjgbDooajnpLrjgZnjgotcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgIGlmKG1lc3NhZ2UubXNnICE9PSAnJyl7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICB9ICBcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25DaGFuZ2UoJGV2ZW50KXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2V2ZW50QFBhc3NSZW1pbmRTZW5kJylcclxuICAgICAgICAgICAgdGhpcy5jb2RlPSRldmVudC5pbnB1dC52YWx1ZSAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFrZVJlUGFzc3dvcmQoKXtcclxuICAgICAgICAgICAgaWYodGhpcy5jb2RlID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgn5pyq5YWl5Yqb44Gn44GZJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gc3RvcmUuZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYobWVzc2FnZS5tc2cgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNoa2NvZGUgPSB0aGlzLnZhbGlkaGFsZigpXHJcbiAgICAgICAgICAgIGlmKCFjaGtjb2RlKXtcclxuICAgICAgICAgICAgICAgIC8vZW1haWzjga7lvaLlvI/jgafjgarjgYvjgaPjgZ/loLTlkIhcclxuICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRNZXNzYWdlKCfljYrop5Loi7HmlbDlrZfjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYQnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBzdG9yZS5nZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW1pdF9tZXNzYWdlKG1lc3NhZ2UpICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIucGFzc1JlbWluZFJlY2lldmVfYWpheCh0aGlzLmNvZGUpXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuJG9uY2UoJ0FKQVhfQ09NUExFVEVfUEFTU1JFTUlORFJFQ0lFVkUnLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn44OV44Ot44Oz44OI44Gr5biw44Gj44Gm44GN44Gf44OH44O844K/4oaTJylcclxuICAgICAgICAgICAgICAgIGlmKCRldmVudC5yZXNwb25zZS5yZXMgPT09ICdPSycpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8v44Oh44OD44K744O844K46KGo56S6XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0TWVzc2FnZSgkZXZlbnQucmVzcG9uc2UubXNnLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ODoeODg+OCu+ODvOOCuOihqOekulxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldE1lc3NhZ2UoJGV2ZW50LnJlc3BvbnNlLm1zZywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHN0b3JlLmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihtZXNzYWdlLm1zZyAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVtaXRfbWVzc2FnZShtZXNzYWdlKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkaGFsZigpe1xyXG4gICAgICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKC9eW0EtWmEtejAtOV0qJC8pO1xyXG4gICAgICAgICAgICBpZih0aGlzLmNvZGUubWF0Y2gocmVnZXhwKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBhc3NSZW1pbmRSZWNpZXZlLnZ1ZSIsIjx0ZW1wbGF0ZT4gICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8dHJhbnNpdGlvbi1ncm91cCBuYW1lPVwiZmxpcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImVycm9yIGluIGVycm9yc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaW5mby1hcmVhXCIgdi1iaW5kOmtleT1cImVycm9yXCI+e3sgZXJyb3IgfX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L3RyYW5zaXRpb24tZ3JvdXA+XHJcbiAgICAgICAgICAgIDwvdWw+ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgPHJvdXRlci12aWV3Lz5cclxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJ0eHRfY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImMtYnRuXCIgdi1vbjpjbGljaz1cInRlc3RcIj5jbGljazwvYnV0dG9uPiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHsgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3JzOltcclxuICAgICAgICAgICAgXSwgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LCAgIFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHRlc3QoKSB7XHJcbiAgICAgICAgICAgIGxldCBhID0gWy4uLnRoaXMuZXJyb3JzXTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMgPSB7YSwgJ3Rlc3QnOiAyMzB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbWFpblZpZXcudnVlIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWVDcm9udGFiIGZyb20gJ3Z1ZS1jcm9udGFiJ1xyXG5pbXBvcnQgY3JvbnRhYiBmcm9tIFwiLi9jb21wb25lbnQvY3JvbnRhYi5qc1wiXHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXIuanMnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnQvbWFpblZpZXcudnVlJ1xyXG4vLyBpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50L21haW5WaWV3LnZ1ZSdcclxuXHJcblZ1ZS51c2UoVnVlQ3JvbnRhYilcclxuXHJcblxyXG5uZXcgVnVlKHtcclxuICBlbDogJyNhcHAnLFxyXG4gIHJvdXRlcixcclxuICByZW5kZXI6IGggPT4gaChBcHApXHJcbn0pXHJcblxyXG5jcm9udGFiKClcclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiLCJcclxuLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWVDcm9udGFiIGZyb20gJ3Z1ZS1jcm9udGFiJ1xyXG5pbXBvcnQgeyB0d2VldFdhdGNoLCBzdGFydEF1dG9MaWtlLCBzdGFydEF1dG9Gb2xsb3csIHJlU3RhcnRBdXRvRm9sbG93LCBzdGFydEF1dG9VbkZvbGxvd30gZnJvbSAnLi9jcm9udGFiZnVuYy52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgLyogY2hhbmdlIHRoZSB2YWx1ZSBvZiBzZXRJbnRlcnZhbCBpbnNpZGUgVnVlQ3JvbnRhYi4gKi9cclxuICAvLyBWdWVDcm9udGFiLnNldE9wdGlvbih7XHJcbiAgLy8gICBpbnRlcnZhbDogMTAwLFxyXG4gIC8vICAgYXV0b19zdGFydCA6IGZhbHNlXHJcbiAgLy8gfSlcclxuXHJcbiAgbGV0IHJlc3VsdCA9IFZ1ZUNyb250YWIuYWRkSm9iKFtcclxuICAgIHsgICAgICAgIFxyXG4gICAgICAgIG5hbWU6ICd0d2VldHdhdGNoJyxcclxuICAgICAgICBpbnRlcnZhbDogeyAgICBcclxuICAgICAgICAgICAgc2Vjb25kczogJy8xJywgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGpvYjogdHdlZXRXYXRjaCxcclxuICAgIH0sICAgIFxyXG4gIF0pXHJcbiAgbGV0IHJlc3VsdDIgPSBWdWVDcm9udGFiLmFkZEpvYihbXHJcbiAgICB7ICAgICAgICBcclxuICAgICAgICBuYW1lOiAnc3RhcnRBdXRvTGlrZScsXHJcbiAgICAgICAgaW50ZXJ2YWw6IHtcclxuICAgICAgICAgICAgIHNlY29uZHM6ICcvNjAnLC8vMeWIhuOBlOOBqOOBq+Wun+ihjOOBmeOCi1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgam9iOiBzdGFydEF1dG9MaWtlLFxyXG4gICAgfSwgICAgXHJcbiAgXSlcclxuXHJcbiAgbGV0IHJlc3VsdDMgPSBWdWVDcm9udGFiLmFkZEpvYihbXHJcbiAgICB7ICAgICAgICBcclxuICAgICAgICBuYW1lOiAnc3RhcnRBdXRvRm9sbG93JyxcclxuICAgICAgICBpbnRlcnZhbDogeyAgICBcclxuICAgICAgICAgICAgc2Vjb25kczogJy8xJywgLy8xc+avjuOBqOOBmeOCi+OBjOOAgeWIneOCgeOBruS4gOWbnuWun+ihjOOBleOCjOOBn+OBguOBqOOBmeOBkOOBq2Rpc2FibGVKb2LjgZnjgosgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGpvYjogc3RhcnRBdXRvRm9sbG93LFxyXG4gICAgfSwgICAgXHJcbiAgXSlcclxuXHJcbiAgbGV0IHJlc3VsdDQgPSBWdWVDcm9udGFiLmFkZEpvYihbXHJcbiAgICB7ICAgICAgICBcclxuICAgICAgICBuYW1lOiAncmVTdGFydEF1dG9Gb2xsb3cnLFxyXG4gICAgICAgIGludGVydmFsOiB7XHJcbiAgICAgICAgICAgIG1pbnV0ZXM6ICcvMScsIC8vMTXliIblvozjgavplovlp4vjgZnjgotcclxuICAgICAgICB9LFxyXG4gICAgICAgIGpvYjogcmVTdGFydEF1dG9Gb2xsb3csXHJcbiAgICB9LCAgICBcclxuICBdKVxyXG5cclxuICBsZXQgcmVzdWx0NSA9IFZ1ZUNyb250YWIuYWRkSm9iKFtcclxuICAgIHsgICAgICAgIFxyXG4gICAgICAgIG5hbWU6ICdzdGFydEF1dG9VbkZvbGxvdycsXHJcbiAgICAgICAgaW50ZXJ2YWw6IHtcclxuICAgICAgICAgICAgc2Vjb25kczogJy8xJywgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBqb2I6IHN0YXJ0QXV0b1VuRm9sbG93LFxyXG4gICAgfSwgICAgXHJcbiAgXSlcclxuICBWdWVDcm9udGFiLmRpc2FibGVKb2IoJ3R3ZWV0d2F0Y2gnKVxyXG4gIFZ1ZUNyb250YWIuZGlzYWJsZUpvYigncmVTdGFydEF1dG9Gb2xsb3cnKVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnQvY3JvbnRhYi5qcyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Nyb250YWJmdW5jLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY3JvbnRhYmZ1bmMudnVlXCJcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfcmVuZGVyX18sIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX19cbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmNcXFxcanNcXFxcY29tcG9uZW50XFxcXGNyb250YWJmdW5jLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1iY2FiYTA0MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWJjYWJhMDQyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NvbXBvbmVudC9jcm9udGFiZnVuYy52dWVcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInXHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi9jb21wb25lbnQvU2lnblVwLnZ1ZSdcclxuaW1wb3J0IFNpZ25JbiBmcm9tICcuL2NvbXBvbmVudC9TaWduSW4udnVlJ1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudC9Ib21lLnZ1ZSdcclxuaW1wb3J0IExpa2UgZnJvbSAnLi9jb21wb25lbnQvUmVnaXN0ZXJMaWtlV29yZC52dWUnXHJcbmltcG9ydCBLZXl3b3JkcyBmcm9tICcuL2NvbXBvbmVudC9SZWdpc3RlckZvbGxvd2VyU2VhcmNoS2V5d29yZC52dWUnXHJcbmltcG9ydCBUYXJnZXQgZnJvbSAnLi9jb21wb25lbnQvUmVnaXN0ZXJUYXJnZXRBY2NvdW50LnZ1ZSdcclxuaW1wb3J0IFR3dHNjaGVkdWxlIGZyb20gJy4vY29tcG9uZW50L1JlZ2lzdGVyVHdlZXRTY2hlZHVsZS52dWUnXHJcbmltcG9ydCBQYXNzUmVtaW5kU2VuZCBmcm9tICcuL2NvbXBvbmVudC9wYXNzUmVtaW5kU2VuZC52dWUnXHJcbmltcG9ydCBQYXNzUmVtaW5kUmVjaWV2ZSBmcm9tICcuL2NvbXBvbmVudC9wYXNzUmVtaW5kUmVjaWV2ZS52dWUnXHJcblxyXG5WdWUudXNlKFJvdXRlcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBSb3V0ZXIoe1xyXG4gICAgLy8gbW9kZTogJ2hpc3RvcnknLFxyXG4gICAgYmFzZTogcHJvY2Vzcy5lbnYuQkFTRV9VUkwsXHJcbiAgICByb3V0ZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICcvc2lnbnVwJyxcclxuICAgICAgICAgICAgbmFtZTogJ3NpZ251cCcsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogU2lnblVwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICAgICAgbmFtZTogJ3NpZ25pbicsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogU2lnbkluXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICcvaG9tZScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdob21lJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiBIb21lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnL2xpa2UnLFxyXG4gICAgICAgICAgICBuYW1lOiAnbGlrZScsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogTGlrZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnL3R3ZWV0c2NoZWR1bGUnLFxyXG4gICAgICAgICAgICBuYW1lOiAndHd0c2NoZWR1bGUnLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6IFR3dHNjaGVkdWxlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICcva2V5d29yZHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAna2V5d29yZHMnLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6IEtleXdvcmRzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICcvdGFyZ2V0JyxcclxuICAgICAgICAgICAgbmFtZTogJ3RhcmdldCcsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogVGFyZ2V0XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICcvcmVtaW5kc2VuZCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdyZW1pbmRzZW5kJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiBQYXNzUmVtaW5kU2VuZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnL3JlbWluZHJlY2lldmUnLFxyXG4gICAgICAgICAgICBuYW1lOiAncmVtaW5kcmVjaWV2ZScsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogUGFzc1JlbWluZFJlY2lldmVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJyonLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6U2lnbkluXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXVxyXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvcm91dGVyLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZS1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2Vcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2lnblVwLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2lnblVwLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zN2QwZWQ5OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TaWduVXAudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmNcXFxcanNcXFxcY29tcG9uZW50XFxcXFNpZ25VcC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzdkMGVkOThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zN2QwZWQ5OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb21wb25lbnQvU2lnblVwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImMtaW5wdXQgcC1pbnB1dF9fb3B0aW9uXCIgfSwgW1xuICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJjLWlucHV0X19sYWJlbFwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5sYWJlbCkpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImMtaW5wdXRfX3R4dCBwLWxpa2UtaW5wdXRfX3R4dFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdHlwZTogX3ZtLnR5cGUsXG4gICAgICAgIG5hbWU6IF92bS5uYW1lLFxuICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLnBsYWNlaG9sZGVyLFxuICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF92bS5vbkNoYW5nZSgkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNWViZjlmNjJcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWViZjlmNjJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwib3B0aW9uc0lkXCI6XCIwXCIsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9qcy9jb21wb25lbnQvSW5wdXRGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImwtc3ViUGFnZVwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImMtZm9ybS13cmFwXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiYy1oZWFkaW5nIHAtaGVhZGluZ19fdGl0bGUgdHh0X2NlbnRlclwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLjg6bjg7zjgrbjg7znmbvpjLJcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicC1lcnJvci1hcmVhXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb24tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmxpcFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVycm9ycy5lcnJvciwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsga2V5OiBlcnJvciB9LCBbX3ZtLl92KFwi44O7XCIgKyBfdm0uX3MoZXJyb3IpKV0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJJbnB1dEZvcm1cIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIuODpuODvOOCtuODvOWQjSpcIixcbiAgICAgICAgICAgIG5hbWU6IFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImV4YW1wbGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNoYW5nZSgkZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJJbnB1dEZvcm1cIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIkVtYWlsKlwiLFxuICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZXhhbXBsZUBnbWFpbC5jb21cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNoYW5nZSgkZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJJbnB1dEZvcm1cIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICBsYWJlbDogXCLjg5Hjgrnjg6/jg7zjg4kqXCIsXG4gICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNoYW5nZSgkZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJJbnB1dEZvcm1cIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICBsYWJlbDogXCLjg5Hjgrnjg6/jg7zjg4nlho3lhaXlipsqXCIsXG4gICAgICAgICAgICBuYW1lOiBcInJlX3Bhc3NcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2hhbmdlKCRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInR4dF9jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImMtYnRuXCIsIG9uOiB7IGNsaWNrOiBfdm0uc2lnblVwIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCLnmbvpjLJcIilcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImMtZm9ybS13cmFwXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IHN0YXRpY0NsYXNzOiBcImMtbGlua1wiLCBhdHRyczogeyB0bzogXCIvc2lnbmluXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi44Ot44Kw44Kk44Oz55S76Z2i44G4XCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInBcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXCLjg5Hjgrnjg6/jg7zjg4njgpLlv5jjgozjgZ/mlrnjga9cIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImMtbGlua1wiLCBhdHRyczogeyB0bzogXCIvcmVtaW5kc2VuZFwiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuOBk+OBoeOCiVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0zN2QwZWQ5OFwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zN2QwZWQ5OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL2NvbXBvbmVudC9TaWduVXAudnVlXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TaWduSW4udnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TaWduSW4udnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTYwZmQ5YTg0XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1NpZ25Jbi52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyY1xcXFxqc1xcXFxjb21wb25lbnRcXFxcU2lnbkluLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02MGZkOWE4NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTYwZmQ5YTg0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NvbXBvbmVudC9TaWduSW4udnVlXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJmbGlwXCIgfSB9LCBbXG4gICAgICAgIF92bS52aXNpYmxlID09PSB0cnVlXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInAtbWVzc2FnZS1hcmVhXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uc3RhdHVzID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJwLW1lc3NhZ2UtYXJlYV9fc3RhdHVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1pbmZvLWNpcmNsZVwiIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnN0YXR1cyA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInAtbWVzc2FnZS1hcmVhX19zdGF0dXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRpbWVzLWNpcmNsZVwiIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInAtbWVzc2FnZS1hcmVhX19tc2dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJwLW1lc3NhZ2UtYXJlYV9tc2ctdmFsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5tc2cpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01NWRlOTY1YlwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01NWRlOTY1YlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL2NvbXBvbmVudC9tZXNzYWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibC1zdWJQYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIk1lc3NhZ2VcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLXdyYXBcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiYy1oZWFkaW5nIHAtaGVhZGluZ19fdGl0bGUgdHh0X2NlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIuODreOCsOOCpOODs1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLWVycm9yLWFyZWFcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb24tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogXCJmbGlwXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVycm9ycy5lcnJvciwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IGtleTogZXJyb3IgfSwgW192bS5fdihcIuODu1wiICsgX3ZtLl9zKGVycm9yKSldKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIklucHV0Rm9ybVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwi44Om44O844K244O85ZCNKlwiLFxuICAgICAgICAgICAgICBuYW1lOiBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIijkvospa2F6dWtpY2hpXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNoYW5nZSgkZXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiSW5wdXRGb3JtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwi44OR44K544Ov44O844OJKlwiLFxuICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DaGFuZ2UoJGV2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInR4dF9jZW50ZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYy1idG5cIiwgb246IHsgY2xpY2s6IF92bS5zaWduSW4gfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi44Ot44Kw44Kk44OzXCIpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjLWZvcm0td3JhcFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1saW5rXCIsIGF0dHJzOiB7IHRvOiBcIi9zaWdudXBcIiB9IH0sXG4gICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLjg6bjg7zjgrbjg7znmbvpjLLnlLvpnaLjgbhcIildKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi44OR44K544Ov44O844OJ44KS5b+Y44KM44Gf5pa544GvXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjLWxpbmtcIiwgYXR0cnM6IHsgdG86IFwiL3JlbWluZHNlbmRcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIuOBk+OBoeOCiVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNjBmZDlhODRcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjBmZDlhODRcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwib3B0aW9uc0lkXCI6XCIwXCIsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9qcy9jb21wb25lbnQvU2lnbkluLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2Vcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSG9tZS52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0hvbWUudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY2YmEyMzRhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0hvbWUudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmNcXFxcanNcXFxcY29tcG9uZW50XFxcXEhvbWUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY2YmEyMzRhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjZiYTIzNGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY29tcG9uZW50L0hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Vc2VySW5mby52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1VzZXJJbmZvLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1jODQ1M2NkNlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Vc2VySW5mby52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyY1xcXFxqc1xcXFxjb21wb25lbnRcXFxcVXNlckluZm8udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWM4NDUzY2Q2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYzg0NTNjZDZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY29tcG9uZW50L1VzZXJJbmZvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInAtdXNlckluZm8gbWIzMFwiIH0sIFtcbiAgICBfYyhcImltZ1wiLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwLXVzZXJJbmZvX19pbWdcIixcbiAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmltZ191cmwsIGFsdDogXCJcIiB9XG4gICAgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJwLXVzZXJJbmZvX19uYW1lXCIgfSwgW1xuICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYWNjb3VudF9uYW1lKSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicC11c2VySW5mb19fcHJvZmlsZSBtYjEwXCIgfSwgW1xuICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kZXNjcmlwdGlvbikpXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicC11c2VySW5mb19faGVhZFwiIH0sIFtcbiAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwicC11c2VySW5mb19fbGlzdGl0ZW0td3JhcFwiIH0sIFtcbiAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicC11c2VySW5mb19fbGlzdFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJwLXVzZXJJbmZvX19saXN0aXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZnJpZW5kcykpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwicC11c2VySW5mb19fbGlzdGl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIuODleOCqeODreODvOS4rVwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInAtdXNlckluZm9fX2xpc3RpdGVtLXdyYXBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcInAtdXNlckluZm9fX2xpc3RcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwicC11c2VySW5mb19fbGlzdGl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmZvbGxvd2VyKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJwLXVzZXJJbmZvX19saXN0aXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi44OV44Kp44Ot44Ov44O8XCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcInNwYW5cIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwicC11c2VySW5mb19fbG9nb3V0XCIsIG9uOiB7IGNsaWNrOiBfdm0ubG9nb3V0IH0gfSxcbiAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtc2lnbi1vdXQtYWx0XCIgfSldXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtYzg0NTNjZDZcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYzg0NTNjZDZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwib3B0aW9uc0lkXCI6XCIwXCIsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9qcy9jb21wb25lbnQvVXNlckluZm8udnVlXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9LZXl3b3JkSXRlbS52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0tleXdvcmRJdGVtLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03ODI2MjM2MFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9LZXl3b3JkSXRlbS52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyY1xcXFxqc1xcXFxjb21wb25lbnRcXFxcS2V5d29yZEl0ZW0udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc4MjYyMzYwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzgyNjIzNjBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY29tcG9uZW50L0tleXdvcmRJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJsaVwiLCB7IGNsYXNzOiBfdm0uY2xhc3NOYW1lTGkgfSwgW1xuICAgICAgX3ZtLnR5cGUgPT09IFwibGlrZVwiXG4gICAgICAgID8gX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5IZWFydEljb24gfSlcbiAgICAgICAgOiBfdm0udHlwZSA9PT0gXCJmb2xsb3dlcnNlYXJjaFwiXG4gICAgICAgID8gX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5TZWFyY2hJY29uIH0pXG4gICAgICAgIDogX3ZtLnR5cGUgPT09IFwidGFyZ2V0XCJcbiAgICAgICAgPyBfYyhcImlcIiwgeyBjbGFzczogX3ZtLlRhcmdldEljb24gfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0udHlwZSA9PT0gXCJ0YXJnZXRcIlxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtbGlzdF9fYWNjb3VudFwiLFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLk9uTW92ZVR3aXR0ZXJQYWdlIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiQFwiICsgX3ZtLl9zKF92bS5kYXRhLnRleHQpKV1cbiAgICAgICAgICApXG4gICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLnRleHQpKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoIGMtZ2FyYmFnZVwiLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJkZWxldGUtaXRlbVwiLCB7IGl0ZW1faWQ6IF92bS5kYXRhLmlkIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03ODI2MjM2MFwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03ODI2MjM2MFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL2NvbXBvbmVudC9LZXl3b3JkSXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBfdm0uX2woX3ZtLmxpc3RJdGVtcywgZnVuY3Rpb24obGlzdEl0ZW0pIHtcbiAgICAgIHJldHVybiBfYyhcIktleXdvcmRDb21wb25lbnRcIiwge1xuICAgICAgICBrZXk6IGxpc3RJdGVtLmlkLFxuICAgICAgICBhdHRyczogeyBkYXRhOiBsaXN0SXRlbSwgdHlwZTogX3ZtLnR5cGUgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImRlbGV0ZS1pdGVtXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVJdGVtKCRldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSksXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02NDFiMzM0YVwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02NDFiMzM0YVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL2NvbXBvbmVudC9LZXl3b3JkTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xpc3RpdGVtLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTGlzdGl0ZW0udnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQxZjY5YjJkXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xpc3RpdGVtLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjXFxcXGpzXFxcXGNvbXBvbmVudFxcXFxMaXN0aXRlbS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDFmNjliMmRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00MWY2OWIyZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb21wb25lbnQvTGlzdGl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MaXN0UmVjb3JkLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTGlzdFJlY29yZC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDkxNmUxMGJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTGlzdFJlY29yZC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyY1xcXFxqc1xcXFxjb21wb25lbnRcXFxcTGlzdFJlY29yZC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDkxNmUxMGJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wOTE2ZTEwYlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb21wb25lbnQvTGlzdFJlY29yZC52dWVcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLWxpc3RcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcInNwYW5cIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwicC1saXN0X19hY2NvdW50XCIsIG9uOiB7IGNsaWNrOiBfdm0ub25Nb3ZlVHdpdHRlciB9IH0sXG4gICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YS5uYW1lKSldXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInAtbGlzdF9fZGF0ZVwiIH0sIFtcbiAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRhdGEuY3JlYXRlZF9hdCkpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJwLWxpc3RfX2NvbnRlbnRcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YS50ZXh0KSldKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDkxNmUxMGJcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDkxNmUxMGJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwib3B0aW9uc0lkXCI6XCIwXCIsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9qcy9jb21wb25lbnQvTGlzdFJlY29yZC52dWVcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLWxpc3QtYXJlYVwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInAtaGVhZGluZy1hcmVhXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwicFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYy1oZWFkaW5nXCIsXG4gICAgICAgICAgY2xhc3M6IF92bS5jbGFzc25hbWUsXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbkNsaWNrIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmhlYWRpbmcpKV1cbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwicC1saXN0LXdyYXBcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uaGVhZGluZyA9PT0gXCJmb2xsb3dcIlxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0eHRfcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImMtaGVhZGluZyBwLWhlYWRpbmdfX2ZvbGxvdyBwLWxpc3RfX2tleXdvcmRCdG5cIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25DbGlja0tleXdvcmQgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIktleXdvcmRzXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0ubGlzdEl0ZW1zLCBmdW5jdGlvbihsaXN0SXRlbSkge1xuICAgICAgICAgIHJldHVybiBfYyhcIlJlY29yZFwiLCB7XG4gICAgICAgICAgICBrZXk6IGxpc3RJdGVtLmlkLFxuICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogbGlzdEl0ZW0sIGhlYWRpbmc6IF92bS5oZWFkaW5nIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00MWY2OWIyZFwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00MWY2OWIyZFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL2NvbXBvbmVudC9MaXN0aXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0F1dGhBY2NvdW50LnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQXV0aEFjY291bnQudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRkYTY4ODk5XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0F1dGhBY2NvdW50LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjXFxcXGpzXFxcXGNvbXBvbmVudFxcXFxBdXRoQWNjb3VudC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGRhNjg4OTlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00ZGE2ODg5OVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb21wb25lbnQvQXV0aEFjY291bnQudnVlXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BY2NvdW50TGlzdC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FjY291bnRMaXN0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi04OTViNjJjMlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BY2NvdW50TGlzdC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyY1xcXFxqc1xcXFxjb21wb25lbnRcXFxcQWNjb3VudExpc3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTg5NWI2MmMyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtODk1YjYyYzJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY29tcG9uZW50L0FjY291bnRMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2Vcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVGFzay52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Rhc2sudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVkYTkyN2ZlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Rhc2sudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmNcXFxcanNcXFxcY29tcG9uZW50XFxcXFRhc2sudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVkYTkyN2ZlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWRhOTI3ZmVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY29tcG9uZW50L1Rhc2sudnVlXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImxpXCIsIHsgY2xhc3M6IF92bS5jbGFzc05hbWVMaSB9LCBbXG4gICAgICBfdm0ubGlzdFN0eWxlID09PSBcInBlcnNvblwiXG4gICAgICAgID8gX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5jbGFzc05hbWVJY29uUGVyc29uIH0pXG4gICAgICAgIDogX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5jbGFzc05hbWVJY29uLCBvbjogeyBjbGljazogX3ZtLnRvZ2dsZURvbmUgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicC1zaWRlYmFyX19hY2NvdW50XCIsIG9uOiB7IGNsaWNrOiBfdm0uY2hhbmdlVXNlciB9IH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLmFjY291bnQpKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdHJhc2ggYy1nYXJiYWdlXCIsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImRlbGV0ZS1pdGVtXCIsIHsgaXRlbV9pZDogX3ZtLmRhdGEuaWQgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVkYTkyN2ZlXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVkYTkyN2ZlXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcIm9wdGlvbnNJZFwiOlwiMFwiLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvanMvY29tcG9uZW50L1Rhc2sudnVlXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICBfdm0uX2woX3ZtLmxpc3RJdGVtcywgZnVuY3Rpb24obGlzdEl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiSXRlbXNDb21wb25lbnRcIiwge1xuICAgICAgICAgIGtleTogbGlzdEl0ZW0uaWQsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGRhdGE6IGxpc3RJdGVtLFxuICAgICAgICAgICAgbGlzdFN0eWxlOiBcInBlcnNvblwiLFxuICAgICAgICAgICAgYWN0aXZlX3VzZXI6IF92bS5hY3RpdmVVc2VyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJkZWxldGUtaXRlbVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVJdGVtKCRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImNoYW5nZS1hY3RpdmUtdXNlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VBY3RpdmVVc2VyKCRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi04OTViNjJjMlwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi04OTViNjJjMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL2NvbXBvbmVudC9BY2NvdW50TGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImwtc3ViUGFnZVwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0eHRfY2VudGVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1idG5cIiwgb246IHsgY2xpY2s6IF92bS5DZXJ0aWZ5QWNjb3VudCB9IH0sXG4gICAgICAgICAgW192bS5fdihcIuOCouOCq+OCpuODs+ODiOiqjeiovOOBmeOCi1wiKV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmdcIiB9LCBbX3ZtLl92KFwi6KqN6Ki85Yem55CG5LitLi4uXCIpXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZXJyb3JcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9yXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9yKSldKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiQWNjb3VudExpc3RDb21wb25lbnRcIiwge1xuICAgICAgICBhdHRyczogeyBsaXN0SXRlbXM6IF92bS5tYWtlRGF0YXMoKSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiZGVsZXRlLWl0ZW1cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZUl0ZW0oJGV2ZW50KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGFuZ2UtYWN0aXZlLXVzZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZUFjdGl2ZVVzZXIoJGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNGRhNjg4OTlcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNGRhNjg4OTlcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwib3B0aW9uc0lkXCI6XCIwXCIsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9qcy9jb21wb25lbnQvQXV0aEFjY291bnQudnVlXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJsLWhvbWVcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiTWVzc2FnZVwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwLXNpZGViYXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJBdXRoQWNjb3VudFwiLCB7XG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcImNoYW5nZS1hY3RpdmUtdXNlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZUFjdGl2ZVVzZXIoJGV2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uc2hvdyA9PT0gdHJ1ZVxuICAgICAgICA/IF9jKFwiVXNlckluZm9cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgZm9sbG93ZXI6IF92bS5mb2xsb3dlcixcbiAgICAgICAgICAgICAgZnJpZW5kczogX3ZtLmZyaWVuZHMsXG4gICAgICAgICAgICAgIGFjY291bnRfbmFtZTogX3ZtLmFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IF92bS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgaW1nX3VybDogX3ZtLmltZ191cmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5zaG93ID09PSB0cnVlXG4gICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLXN0YXR1cy13cmFwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYy1idG4gcC1zdGF0dXNfX2l0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5wX2ZvbGxvd19zdGF0dXNfdG9nZ2xlLFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNoYW5nZUZvbGxvd0Nyb25TdGF0dXMgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5BdXRvRm9sbG93Q3JvblN0YXR1cyA9PT0gXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkuIDmmYLlgZzmraLkuK0uLi5cIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uQXV0b0ZvbGxvd0Nyb25TdGF0dXMgPT09IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5b6F5qmf5LitLi4uXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLkF1dG9Gb2xsb3dDcm9uU3RhdHVzID09PSBcIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIuWun+ihjOS4rS4uLlwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjLWJ0biBwLXN0YXR1c19faXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnBfc3RhdHVzX3RvZ2dsZSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jaGFuZ2VMaWtlQ3JvblN0YXR1cyB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLkF1dG9MaWtlQ3JvblN0YXR1cyA9PT0gXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkuIDmmYLlgZzmraLkuK0uLi5cIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uQXV0b0xpa2VDcm9uU3RhdHVzID09PSBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIuW+heapn+S4rS4uLlwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5BdXRvTGlrZUNyb25TdGF0dXMgPT09IFwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5a6f6KGM5LitLi4uXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImMtYnRuIHAtc3RhdHVzX19pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0ucF91bmZvbGxvd19zdGF0dXNfdG9nZ2xlLFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNoYW5nZVVuRm9sbG93Q3JvblN0YXR1cyB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLkF1dG9VbkZvbGxvd0Nyb25TdGF0dXMgPT09IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LiA5pmC5YGc5q2i5LitLi4uXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLkF1dG9VbkZvbGxvd0Nyb25TdGF0dXMgPT09IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5b6F5qmf5LitLi4uXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLkF1dG9VbkZvbGxvd0Nyb25TdGF0dXMgPT09IFwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5a6f6KGM5LitLi4uXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImMtYnRuIHAtc3RhdHVzX19pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0ucF9tYWlsX3N0YXR1c190b2dnbGUsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2hhbmdlTWFpbFN0YXR1cyB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oNCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLk1haWxTdGF0dXMgPT09IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6YWN5L+hT0ZGXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLk1haWxTdGF0dXMgPT09IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6YWN5L+hT05cIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInAtbWFpbi1hcmVhXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiTGlzdEl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGluZzogXCJmb2xsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lOiBcInAtaGVhZGluZ19fZm9sbG93XCIsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtczogX3ZtLmxpc3RJdGVtc19mb2xsb3dcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiTGlzdEl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGluZzogXCJsaWtlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZTogXCJwLWhlYWRpbmdfX2xpa2VcIixcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1zOiBfdm0ubGlzdEl0ZW1zX2xpa2VcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiTGlzdEl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGluZzogXCJ1bkZvbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWU6IFwicC1oZWFkaW5nX191bmZvbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbXM6IF92bS5saXN0SXRlbXNfdW5mb2xsb3dcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiTGlzdEl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGluZzogXCJ0d2VldHNjaGVkdWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZTogXCJwLWhlYWRpbmdfX3R3dHNjaGVkdWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtczogX3ZtLmxpc3RJdGVtc19zY2hlZHVsZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1idG4gcC1zaWRlYmFyX19idG4ganMtdG9nZ2xlLXdpbmRvd1wiIH0sXG4gICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWtleVwiIH0pXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS1oYW5kc2hha2VcIiB9KSxcbiAgICAgIF92bS5fdihcIiBmb2xsb3dcIilcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1oZWFydFwiIH0pLCBfdm0uX3YoXCIgbGlrZVwiKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtaGVhcnQtYnJva2VuXCIgfSksXG4gICAgICBfdm0uX3YoXCIgVW5mb2xsb3dcIilcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXBhcGVyLXBsYW5lXCIgfSksXG4gICAgICBfdm0uX3YoXCIgTWFpbFwiKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02NmJhMjM0YVwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02NmJhMjM0YVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL2NvbXBvbmVudC9Ib21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2Vcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUmVnaXN0ZXJMaWtlV29yZC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1JlZ2lzdGVyTGlrZVdvcmQudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTNlNDM3MDAwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JlZ2lzdGVyTGlrZVdvcmQudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmNcXFxcanNcXFxcY29tcG9uZW50XFxcXFJlZ2lzdGVyTGlrZVdvcmQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTNlNDM3MDAwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtM2U0MzcwMDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY29tcG9uZW50L1JlZ2lzdGVyTGlrZVdvcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5zaG93ID09PSB0cnVlXG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsLXN1YlBhZ2UgbC1saWtlUGFnZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIk1lc3NhZ2VcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInR4dF9jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjLWJ0biBjLW1vdmVUb3BcIiwgb246IHsgY2xpY2s6IF92bS5tb3ZlVG9wIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1ob21lIGMtaWNvbi1ob21lXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiSE9NRVwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYy10aXRsZSBwLWhlYWRpbmdfX2xpa2VcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIuiHquWLleOBhOOBhOOBreOCreODvOODr+ODvOODieeZu+mMslwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QtaW5pdCBjLWxvZ2ljT3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DaGFuZ2VPcHRpb24oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHNlbGVjdGVkOiBcIlwiIH0gfSwgW192bS5fdihcIkFORFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJPUlwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJOT1RcIildKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJJbnB1dEZvcm1cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLjgYTjgYTjga3jgq3jg7zjg6/jg7zjg4lcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNoYW5nZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0eHRfcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImMtYnRuXCIsIG9uOiB7IGNsaWNrOiBfdm0uYWRkSXRlbSB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi6L+95YqgXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJLZXl3b3JkTGlzdENvbXBvbmVudFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBsaXN0SXRlbXM6IF92bS5kYXRhcywgdHlwZTogXCJsaWtlXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwiZGVsZXRlLWl0ZW1cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVJdGVtKCRldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0zZTQzNzAwMFwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zZTQzNzAwMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL2NvbXBvbmVudC9SZWdpc3Rlckxpa2VXb3JkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2Vcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUmVnaXN0ZXJGb2xsb3dlclNlYXJjaEtleXdvcmQudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9SZWdpc3RlckZvbGxvd2VyU2VhcmNoS2V5d29yZC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjMxMjQ1NzRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJvcHRpb25zSWRcXFwiOlxcXCIwXFxcIixcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUmVnaXN0ZXJGb2xsb3dlclNlYXJjaEtleXdvcmQudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmNcXFxcanNcXFxcY29tcG9uZW50XFxcXFJlZ2lzdGVyRm9sbG93ZXJTZWFyY2hLZXl3b3JkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02MzEyNDU3NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTYzMTI0NTc0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NvbXBvbmVudC9SZWdpc3RlckZvbGxvd2VyU2VhcmNoS2V5d29yZC52dWVcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLnNob3cgPT09IHRydWVcbiAgICA/IF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImwtc3ViUGFnZSBsLXNlYXJjaEtleVBhZ2VcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJNZXNzYWdlXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0eHRfY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1idG4gYy1tb3ZlVG9wXCIsIG9uOiB7IGNsaWNrOiBfdm0ubW92ZVRvcCB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtaG9tZSBjLWljb24taG9tZVwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIkhPTUVcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImMtdGl0bGUgcC1oZWFkaW5nX19mb2xsb3dcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIuODleOCqeODreODr+ODvOOCteODvOODgeOCreODvOODr+ODvOODieeZu+mMslwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QtaW5pdCBjLWxvZ2ljT3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DaGFuZ2VPcHRpb24oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHNlbGVjdGVkOiBcIlwiIH0gfSwgW192bS5fdihcIkFORFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJPUlwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIFtfdm0uX3YoXCJOT1RcIildKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJJbnB1dEZvcm1cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLjg5Xjgqnjg63jg6/jg7zjgrXjg7zjg4Hjgq3jg7zjg6/jg7zjg4lcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNoYW5nZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0eHRfcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImMtYnRuXCIsIG9uOiB7IGNsaWNrOiBfdm0uYWRkSXRlbSB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi6L+95YqgXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJLZXl3b3JkTGlzdENvbXBvbmVudFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBsaXN0SXRlbXM6IF92bS5kYXRhcywgdHlwZTogXCJmb2xsb3dlcnNlYXJjaFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcImRlbGV0ZS1pdGVtXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlSXRlbSgkZXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNjMxMjQ1NzRcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjMxMjQ1NzRcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwib3B0aW9uc0lkXCI6XCIwXCIsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9qcy9jb21wb25lbnQvUmVnaXN0ZXJGb2xsb3dlclNlYXJjaEtleXdvcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9SZWdpc3RlclRhcmdldEFjY291bnQudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9SZWdpc3RlclRhcmdldEFjY291bnQudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTliNmU5Y2E2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JlZ2lzdGVyVGFyZ2V0QWNjb3VudC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyY1xcXFxqc1xcXFxjb21wb25lbnRcXFxcUmVnaXN0ZXJUYXJnZXRBY2NvdW50LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05YjZlOWNhNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTliNmU5Y2E2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NvbXBvbmVudC9SZWdpc3RlclRhcmdldEFjY291bnQudnVlXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5zaG93ID09PSB0cnVlXG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsLXN1YlBhZ2UgcC10YXJnZXRhY250LXdyYXBcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJNZXNzYWdlXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0eHRfY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1idG4gYy1tb3ZlVG9wXCIsIG9uOiB7IGNsaWNrOiBfdm0ubW92ZVRvcCB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtaG9tZSBjLWljb24taG9tZVwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIkhPTUVcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImMtdGl0bGUgcC1oZWFkaW5nX19mb2xsb3dcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIuOCv+ODvOOCsuODg+ODiOOCouOCq+OCpuODs+ODiOeZu+mMslwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiSW5wdXRGb3JtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkDjga7jgYLjgajjga7jgqLjgqvjgqbjg7Pjg4hJROOCkuWFpeWKmyjkvosuIGthenVraWNoaTMxMTApXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNoYW5nZSgkZXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidHh0X3JpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJjLWJ0blwiLCBvbjogeyBjbGljazogX3ZtLmFkZEl0ZW0gfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIui/veWKoFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiS2V5d29yZExpc3RDb21wb25lbnRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgbGlzdEl0ZW1zOiBfdm0uZGF0YXMsIHR5cGU6IFwidGFyZ2V0XCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwiZGVsZXRlLWl0ZW1cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVJdGVtKCRldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi05YjZlOWNhNlwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi05YjZlOWNhNlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL2NvbXBvbmVudC9SZWdpc3RlclRhcmdldEFjY291bnQudnVlXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9SZWdpc3RlclR3ZWV0U2NoZWR1bGUudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9SZWdpc3RlclR3ZWV0U2NoZWR1bGUudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTEzYjJhNzBlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JlZ2lzdGVyVHdlZXRTY2hlZHVsZS52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyY1xcXFxqc1xcXFxjb21wb25lbnRcXFxcUmVnaXN0ZXJUd2VldFNjaGVkdWxlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xM2IyYTcwZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTEzYjJhNzBlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NvbXBvbmVudC9SZWdpc3RlclR3ZWV0U2NoZWR1bGUudnVlXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb21lbnRcIlxuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2Vcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2NoZWR1bGVMaXN0LnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2NoZWR1bGVMaXN0LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zN2NjN2U1MVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TY2hlZHVsZUxpc3QudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmNcXFxcanNcXFxcY29tcG9uZW50XFxcXFNjaGVkdWxlTGlzdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzdjYzdlNTFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zN2NjN2U1MVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb21wb25lbnQvU2NoZWR1bGVMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2Vcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVHdlZXRUYXNrLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVHdlZXRUYXNrLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wNDg2ZDc0YVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Ud2VldFRhc2sudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbmltcG9ydCBub3JtYWxpemVDb21wb25lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnQtbm9ybWFsaXplclwiXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfcmVuZGVyX18sXG4gIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmNcXFxcanNcXFxcY29tcG9uZW50XFxcXFR3ZWV0VGFzay52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDQ4NmQ3NGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wNDg2ZDc0YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb21wb25lbnQvVHdlZXRUYXNrLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInAtbGlzdC1hdXRvdHd0XCIgfSwgW1xuICAgIF9jKFwibGlcIiwgeyBjbGFzczogX3ZtLmNsYXNzTmFtZUxpIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IGNsYXNzOiBfdm0uY2xhc3NOYW1lSWNvbiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicC1saXN0LWF1dG90d3RfX3dyYXBcIiB9LCBbXG4gICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInAtbGlzdC1hdXRvdHd0X19kYXRlLXR0bFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi5pel5LuY77yaXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwicC1saXN0LWF1dG90d3RfX2RhdGUtdmFsXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLmRhdGUpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwicC1saXN0LWF1dG90d3RfX2NvbnRlbnQtdHRsXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCLlhoXlrrnvvJpcIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJwLWxpc3QtYXV0b3R3dF9fY29udGVudC12YWxcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRhdGEudGV4dCkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaCBjLWdhcmJhZ2VcIixcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiZGVsZXRlLWl0ZW1cIiwgeyBpdGVtX2lkOiBfdm0uZGF0YS5pZCB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDQ4NmQ3NGFcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDQ4NmQ3NGFcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwib3B0aW9uc0lkXCI6XCIwXCIsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9qcy9jb21wb25lbnQvVHdlZXRUYXNrLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgX3ZtLl9sKF92bS5saXN0SXRlbXMsIGZ1bmN0aW9uKGxpc3RJdGVtKSB7XG4gICAgICAgIHJldHVybiBfYyhcIlR3ZWV0SXRlbXNDb21wb25lbnRcIiwge1xuICAgICAgICAgIGtleTogbGlzdEl0ZW0uaWQsXG4gICAgICAgICAgYXR0cnM6IHsgZGF0YTogbGlzdEl0ZW0gfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJkZWxldGUtaXRlbVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVJdGVtKCRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0zN2NjN2U1MVwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zN2NjN2U1MVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL2NvbXBvbmVudC9TY2hlZHVsZUxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWUtY3RrLWRhdGUtdGltZS1waWNrZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2dWUtY3RrLWRhdGUtdGltZS1waWNrZXJcIlxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uc2hvdyA9PT0gdHJ1ZVxuICAgID8gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibC1zdWJQYWdlIHAtYXV0b3R3dC13cmFwXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTWVzc2FnZVwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidHh0X2NlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImMtYnRuIGMtbW92ZVRvcFwiLCBvbjogeyBjbGljazogX3ZtLm1vdmVUb3AgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWhvbWUgYy1pY29uLWhvbWVcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJIT01FXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjLXRpdGxlIHAtaGVhZGluZ19fdHd0c2NoZWR1bGVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIuiHquWLleODhOOCpOODvOODiOioreWumlwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiVnVlQ3RrRGF0ZVRpbWVQaWNrZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJtaW51dGUtaW50ZXJ2YWxcIjogMSxcbiAgICAgICAgICAgICAgZm9ybWF0OiBcIllZWVktTU0tREQgSEg6bW1cIixcbiAgICAgICAgICAgICAgb3ZlcmxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJtaW4tZGF0ZVwiOiBfdm0uc3RhcnQsXG4gICAgICAgICAgICAgIFwibWF4LWRhdGVcIjogX3ZtLmVuZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ueW91clZhbHVlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnlvdXJWYWx1ZSA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInlvdXJWYWx1ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIklucHV0Rm9ybVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwi5YaF5a65XCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLjgZPjga7lhoXlrrnjgpLjg4TjgqTjg7zjg4jjgZfjgb7jgZlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2hhbmdlKCRldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0eHRfcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImMtYnRuXCIsIG9uOiB7IGNsaWNrOiBfdm0uYWRkSXRlbSB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwi6L+95YqgXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJTY2hlZHVsZUxpc3RDb21wb25lbnRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgbGlzdEl0ZW1zOiBfdm0uZGF0YXMgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwiZGVsZXRlLWl0ZW1cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVJdGVtKCRldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xM2IyYTcwZVwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xM2IyYTcwZVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL2NvbXBvbmVudC9SZWdpc3RlclR3ZWV0U2NoZWR1bGUudnVlXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYXNzUmVtaW5kU2VuZC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Bhc3NSZW1pbmRTZW5kLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yOTc5OTFmYVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYXNzUmVtaW5kU2VuZC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyY1xcXFxqc1xcXFxjb21wb25lbnRcXFxccGFzc1JlbWluZFNlbmQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTI5Nzk5MWZhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjk3OTkxZmFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY29tcG9uZW50L3Bhc3NSZW1pbmRTZW5kLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibC1zdWJQYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIk1lc3NhZ2VcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLXdyYXBcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiYy1oZWFkaW5nIHAtaGVhZGluZ19fdGl0bGUgdHh0X2NlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIuiqjeiovOOCs+ODvOODieeUn+aIkFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJJbnB1dEZvcm1cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIGxhYmVsOiBcIuODpuODvOOCtuODvOWQjSpcIiwgbmFtZTogXCJ1c2VybmFtZVwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNoYW5nZSgkZXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiSW5wdXRGb3JtXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBsYWJlbDogXCLjg6Hjg7zjg6vjgqLjg4njg6zjgrkqXCIsIG5hbWU6IFwiZW1haWxcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DaGFuZ2UoJGV2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInR4dF9jZW50ZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjLWJ0blwiLCBvbjogeyBjbGljazogX3ZtLm1ha2VSZVBhc3N3b3JkIH0gfSxcbiAgICAgICAgICBbX3ZtLl92KFwi55Sf5oiQ44GZ44KLXCIpXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjLWZvcm0td3JhcFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1saW5rXCIsIGF0dHJzOiB7IHRvOiBcIi9zaWduaW5cIiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi44Ot44Kw44Kk44Oz55S76Z2i44G4XCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yOTc5OTFmYVwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yOTc5OTFmYVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL2NvbXBvbmVudC9wYXNzUmVtaW5kU2VuZC52dWVcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Bhc3NSZW1pbmRSZWNpZXZlLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcGFzc1JlbWluZFJlY2lldmUudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQge3JlbmRlciBhcyBfX3Z1ZV9yZW5kZXJfXywgc3RhdGljUmVuZGVyRm5zIGFzIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX199IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTJiNWUyZjRlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwib3B0aW9uc0lkXFxcIjpcXFwiMFxcXCIsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Bhc3NSZW1pbmRSZWNpZXZlLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjXFxcXGpzXFxcXGNvbXBvbmVudFxcXFxwYXNzUmVtaW5kUmVjaWV2ZS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmI1ZTJmNGVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yYjVlMmY0ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb21wb25lbnQvcGFzc1JlbWluZFJlY2lldmUudnVlXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJsLXN1YlBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiTWVzc2FnZVwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjLWZvcm0td3JhcFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjLWhlYWRpbmcgcC1oZWFkaW5nX190aXRsZSB0eHRfY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi44OR44K544Ov44O844OJ5YaN55m66KGMXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIklucHV0Rm9ybVwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbGFiZWw6IFwi6KqN6Ki844Kz44O844OJKlwiLCBuYW1lOiBcInVzZXJuYW1lXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2hhbmdlKCRldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0eHRfY2VudGVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1idG5cIiwgb246IHsgY2xpY2s6IF92bS5tYWtlUmVQYXNzd29yZCB9IH0sXG4gICAgICAgICAgW192bS5fdihcIuWGjeeZuuihjOOBmeOCi1wiKV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYy1mb3JtLXdyYXBcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImMtbGlua1wiLCBhdHRyczogeyB0bzogXCIvc2lnbmluXCIgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIuODreOCsOOCpOODs+eUu+mdouOBuFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMmI1ZTJmNGVcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMmI1ZTJmNGVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwib3B0aW9uc0lkXCI6XCIwXCIsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9qcy9jb21wb25lbnQvcGFzc1JlbWluZFJlY2lldmUudnVlXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9tYWluVmlldy52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL21haW5WaWV3LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1jZDlmNDg0Y1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcIm9wdGlvbnNJZFxcXCI6XFxcIjBcXFwiLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9tYWluVmlldy52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyY1xcXFxqc1xcXFxjb21wb25lbnRcXFxcbWFpblZpZXcudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWNkOWY0ODRjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtY2Q5ZjQ4NGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY29tcG9uZW50L21haW5WaWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInVsXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidHJhbnNpdGlvbi1ncm91cFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcImZsaXBcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZXJyb3JzLCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsga2V5OiBlcnJvciwgc3RhdGljQ2xhc3M6IFwiaW5mby1hcmVhXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGVycm9yKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJyb3V0ZXItdmlld1wiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1jZDlmNDg0Y1wiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1jZDlmNDg0Y1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJvcHRpb25zSWRcIjpcIjBcIixcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL2NvbXBvbmVudC9tYWluVmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQ0E7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQ0E7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQzlLQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQXhCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFySEE7QUEzQkE7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUFBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQTlsQkE7QUFxbUJBO0FBQ0E7QUFDQTtBQTVtQkE7Ozs7OztBQ2hCQTs7Ozs7Ozs7Ozs7OztBQytCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBQ0E7QUFsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQVpBOzs7Ozs7Ozs7Ozs7O0FDa0JBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUF0QkE7QUFDQTtBQXhCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQUNBO0FBdENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7Ozs7Ozs7Ozs7QUMwREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQTNCQTtBQStCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFLQTtBQUNBO0FBcmlCQTs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFsQkE7QUFDQTtBQVZBOzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBVkE7Ozs7Ozs7Ozs7Ozs7QUNHQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVpBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBMUJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQUNBO0FBQ0E7O0FBRUE7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFWQTs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekpBO0FBQ0E7QUF6QkE7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBQ0E7QUFYQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFYQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBakVBO0FBQ0E7QUFqQ0E7Ozs7Ozs7Ozs7Ozs7QUNLQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFoSUE7QUFDQTtBQXJDQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBMUhBO0FBQ0E7QUFuQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE5SkE7QUFDQTtBQXBDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBaEpBO0FBQ0E7QUF4REE7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFUQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdFQTtBQUNBO0FBaEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5EQTtBQUNBO0FBcEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVkE7Ozs7Ozs7OztBQ3ZCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFGQTtBQWpEQTs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkxBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUNBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDOUJBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25GQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzlEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=