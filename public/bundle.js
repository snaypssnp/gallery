/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
  function Base(props) {
    _classCallCheck(this, Base);

    Object.assign(this, props);

    if (!(this.el instanceof Element)) {
      throw new Error('Argument "el" must belong to the class "Element"');
    }
  }

  _createClass(Base, [{
    key: 'on',
    value: function on(eventType, fn) {
      this.el.addEventListener(eventType, fn);
    }
  }, {
    key: 'off',
    value: function off(eventType, fn) {
      this.el.removeEventListener(eventType, fn);
    }
  }]);

  return Base;
}();

/* harmony default export */ __webpack_exports__["a"] = Base;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_html__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Gallery__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var App = function (_Base) {
  _inherits(App, _Base);

  function App(_ref) {
    var el = _ref.el;

    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, { el: el }));

    _this.render();

    _this._initComponents();
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      this.el.innerHTML = __WEBPACK_IMPORTED_MODULE_0__index_html___default.a;
    }
  }, {
    key: '_initComponents',
    value: function _initComponents() {
      this.gallery = new __WEBPACK_IMPORTED_MODULE_2__Gallery__["a" /* default */]({
        el: this.el.querySelector('.js-app')
      });
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1__Base__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = App;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(9)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Photo = function (_Base) {
  _inherits(Photo, _Base);

  function Photo(_ref) {
    var el = _ref.el,
        resource = _ref.resource,
        zoom = _ref.zoom;

    _classCallCheck(this, Photo);

    var _this = _possibleConstructorReturn(this, (Photo.__proto__ || Object.getPrototypeOf(Photo)).call(this, { el: el, resource: resource, zoom: zoom }));

    _this._onMouseEnter = function () {
      _this.pannerEl.style.opacity = 1;
      _this.rec = _this.el.getBoundingClientRect();
    };

    _this._onMouseLeave = function () {
      _this.pannerEl.style.opacity = 0;
    };

    _this._onMouseMove = function (event) {
      var _this$rec = _this.rec,
          x = _this$rec.x,
          y = _this$rec.y,
          width = _this$rec.width;

      var minLeft = width - _this.zoomEl.offsetWidth;
      var top = y - event.pageY;
      var left = Math.max(x - event.pageX, minLeft);

      Object.assign(_this.zoomEl.style, {
        top: top + 'px',
        left: left + 'px'
      });
    };

    _this.render();

    _this._initEvents();
    return _this;
  }

  _createClass(Photo, [{
    key: 'render',
    value: function render() {
      var resource = this.resource,
          zoom = this.zoom;


      this.el.innerHTML = '<div class="showcase__viewport">\n      <div class="showcase__item">\n        <img class="showcase__item-image" src="' + resource + '">\n        <div class="showcase__panner">\n          <img src="' + zoom + '">\n        </div>\n      </div>\n    </div>';

      this.pannerEl = this.el.querySelector('.showcase__panner');
      this.zoomEl = this.pannerEl.querySelector('img');
    }
  }, {
    key: 'update',
    value: function update(_ref2) {
      var resource = _ref2.resource,
          zoom = _ref2.zoom;

      Object.assign(this, { resource: resource, zoom: zoom });

      this.render();
    }
  }, {
    key: '_initEvents',
    value: function _initEvents() {
      this.on('mouseenter', this._onMouseEnter);
      this.on('mouseleave', this._onMouseLeave);
      this.on('mousemove', this._onMouseMove);
    }
  }]);

  return Photo;
}(__WEBPACK_IMPORTED_MODULE_0__Base__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = Photo;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Slider = function (_Base) {
  _inherits(Slider, _Base);

  function Slider(_ref) {
    var el = _ref.el,
        photos = _ref.photos;

    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, { el: el, photos: photos }));

    _initialiseProps.call(_this);

    _this.render();

    _this._initEvents();
    return _this;
  }

  _createClass(Slider, [{
    key: 'render',
    value: function render() {
      var listHTML = this.photos.map(this._createImage).join('');

      this.el.innerHTML = '\n      <div class="showcase__slider ">\n        <div class="showcase__slider-wrapper">\n          <div class="showcase__slider-viewport">\n            ' + listHTML + '\n          </div>\n        </div>\n      </div>\n    ';

      this.listImageEls = this.el.querySelectorAll('img');

      this._addActiveClass(this.listImageEls[0]);
    }
  }, {
    key: '_initEvents',
    value: function _initEvents() {
      this.on('click', this._onClick);
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_0__Base__["a" /* default */]);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.activeClass = 'showcase__slide_active';

  this.isImage = function (el) {
    return el.classList.contains('showcase__slide-image');
  };

  this._createImage = function (_ref2) {
    var preview = _ref2.preview,
        resource = _ref2.resource,
        zoom = _ref2.zoom;

    return '\n      <div class="showcase__slide showcase__slide_image">\n        <img\n          class="showcase__slide-image"\n          data-resource="' + resource + '"\n          data-zoom="' + zoom + '"\n          src="' + preview + '" />\n      </div>\n    ';
  };

  this._onClick = function (event) {
    [].concat(_toConsumableArray(_this2.listImageEls)).forEach(_this2._removeActiveClass);

    _this2._addActiveClass(event.target);
  };

  this._addActiveClass = function (el) {
    if (!_this2.isImage(el)) {
      return;
    }

    el.classList.add(_this2.activeClass);
  };

  this._removeActiveClass = function (el) {
    if (!_this2.isImage(el)) {
      return;
    }

    el.classList.remove(_this2.activeClass);
  };
};

/* harmony default export */ __webpack_exports__["a"] = Slider;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Slider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Photo__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_photos_json__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_photos_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__data_photos_json__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Gallery = function (_Base) {
  _inherits(Gallery, _Base);

  function Gallery(_ref) {
    var el = _ref.el;

    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, { el: el }));

    _this._onClick = function (event) {
      var target = event.target;


      if (!_this.slider.isImage(target)) {
        return;
      }

      _this.photo.update(target.dataset);
    };

    _this.render();

    _this._initComponents();

    _this._initEvents();
    return _this;
  }

  _createClass(Gallery, [{
    key: 'render',
    value: function render() {
      this.el.innerHTML = '\n      <div class="showcase">\n        <div class="showcase__wrapper"></div>\n      </div>\n    ';

      this.wrapperEl = this.el.querySelector('.showcase__wrapper');
    }
  }, {
    key: '_initComponents',
    value: function _initComponents() {
      var _photos = _slicedToArray(__WEBPACK_IMPORTED_MODULE_3__data_photos_json___default.a, 1),
          _photos$ = _photos[0],
          resource = _photos$.resource,
          title = _photos$.title,
          zoom = _photos$.zoom;

      this.photo = new __WEBPACK_IMPORTED_MODULE_2__Photo__["a" /* default */]({
        el: document.createElement('div'),
        resource: resource,
        zoom: zoom,
        title: title
      });

      this.slider = new __WEBPACK_IMPORTED_MODULE_1__Slider__["a" /* default */]({
        el: document.createElement('div'),
        photos: __WEBPACK_IMPORTED_MODULE_3__data_photos_json___default.a
      });

      this.wrapperEl.append(this.photo.el, this.slider.el);
    }
  }, {
    key: '_initEvents',
    value: function _initEvents() {
      this.slider.on('click', this._onClick);
    }
  }]);

  return Gallery;
}(__WEBPACK_IMPORTED_MODULE_0__Base__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = Gallery;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  font-size: 13px;\n  line-height: 18px;\n  font-family: \"Helvetica Neue\",Arial,sans-serif;\n  color: #222;\n}\n.showcase__wrapper {\n  position: relative;\n}\n\n.showcase__viewport {\n  z-index: 1;\n  border: 1px solid #ccc;\n}\n\n.showcase__viewport {\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  height: 500px;\n}\n\n.showcase__item {\n  height: 500px;\n  line-height: 500px;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n}\n\n.showcase__viewport {\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  height: 500px;\n}\n\n.showcase {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default;\n  width: 560px;\n  margin: 10px auto;\n}\n\n.showcase__item-image {\n  height: 100%;\n  margin: 0 auto;\n}\n\nimg {\n  border: 0;\n}\n\n.showcase__panner {\n  z-index: 3;\n}\n\n.showcase__panner {\n  opacity: 0;\n}\n\n.showcase__panner {\n  position: absolute;\n  overflow: hidden;\n  background: #fff;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.showcase__panner img {\n  display: inline;\n  position: absolute;\n  left: 0;\n  top: 0;\n  /*width: 1200px;*/\n}\n\n.showcase__item {\n  height: 500px;\n  line-height: 500px;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n}\n\n.showcase__slider {\n  position: relative;\n}\n\n.showcase__slider-wrapper {\n  border-top: 1px solid #eee;\n  overflow: hidden;\n  height: 80px;\n}\n\n.showcase__slider-viewport {\n  position: relative;\n}\n\n.showcase__slide {\n\n  cursor: pointer;\n  float: left;\n  height: 66px;\n  line-height: 66px;\n  margin: 0 10px 0 0;\n  padding-top: 5px;\n  position: relative;\n  width: 46px;\n  text-align: center;\n}\n\n.showcase__slide-image{\n  border-top: 3px solid transparent;\n}\n\n.showcase__slide_active {\n  border-top-color: #000;\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div class=\"js-app\"></div>";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(10);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = [
	{
		"preview": "//pi3.lmcdn.ru/img46x66/M/A/MA002EWXLS74_5471876_1_v1.jpg",
		"resource": "//pi3.lmcdn.ru/img389x562/M/A/MA002EWXLS74_5471876_1_v1.jpg",
		"zoom": "//pi3.lmcdn.ru/product/M/A/MA002EWXLS74_5471876_1_v1.jpg"
	},
	{
		"preview": "//pi2.lmcdn.ru/img46x66/M/A/MA002EWXLS74_5471877_2_v1.jpg",
		"resource": "//pi2.lmcdn.ru/img389x562/M/A/MA002EWXLS74_5471877_2_v1.jpg",
		"zoom": "//pi3.lmcdn.ru/product/M/A/MA002EWXLS74_5471877_2_v1.jpg"
	},
	{
		"preview": "//pi1.lmcdn.ru/img46x66/M/A/MA002EWXLS74_5471878_3_v1.jpg",
		"resource": "//pi1.lmcdn.ru/img389x562/M/A/MA002EWXLS74_5471878_3_v1.jpg",
		"zoom": "//pi3.lmcdn.ru/product/M/A/MA002EWXLS74_5471878_3_v1.jpg"
	},
	{
		"preview": "//pi3.lmcdn.ru/img46x66/J/E/JE008EWYRT09_5748990_1_v1.jpg",
		"resource": "//pi3.lmcdn.ru/img389x562/J/E/JE008EWYRT09_5748990_1_v1.jpg",
		"zoom": "//pi3.lmcdn.ru/product/J/E/JE008EWYRT09_5748990_1_v1.jpg"
	},
	{
		"preview": "//pi2.lmcdn.ru/img46x66/J/E/JE008EWYRT09_5748991_2_v1.jpg",
		"resource": "//pi2.lmcdn.ru/img389x562/J/E/JE008EWYRT09_5748991_2_v1.jpg",
		"zoom": "//pi3.lmcdn.ru/product/J/E/JE008EWYRT09_5748991_2_v1.jpg"
	},
	{
		"preview": "//pi1.lmcdn.ru/img46x66/J/E/JE008EWYRT09_5748992_3_v1.jpg",
		"resource": "//pi1.lmcdn.ru/img389x562/J/E/JE008EWYRT09_5748992_3_v1.jpg",
		"zoom": "//pi3.lmcdn.ru/product/J/E/JE008EWYRT09_5748992_3_v1.jpg"
	},
	{
		"preview": "//pi1.lmcdn.ru/img46x66/M/A/MA002EWXLS74_5471878_3_v1.jpg",
		"resource": "//pi1.lmcdn.ru/img389x562/M/A/MA002EWXLS74_5471878_3_v1.jpg",
		"zoom": "//pi3.lmcdn.ru/product/M/A/MA002EWXLS74_5471878_3_v1.jpg"
	},
	{
		"preview": "//pi3.lmcdn.ru/img46x66/J/E/JE008EWYRT09_5748990_1_v1.jpg",
		"resource": "//pi3.lmcdn.ru/img389x562/J/E/JE008EWYRT09_5748990_1_v1.jpg",
		"zoom": "//pi3.lmcdn.ru/product/J/E/JE008EWYRT09_5748990_1_v1.jpg"
	},
	{
		"preview": "//pi2.lmcdn.ru/img46x66/J/E/JE008EWYRT09_5748991_2_v1.jpg",
		"resource": "//pi2.lmcdn.ru/img389x562/J/E/JE008EWYRT09_5748991_2_v1.jpg",
		"zoom": "//pi3.lmcdn.ru/product/J/E/JE008EWYRT09_5748991_2_v1.jpg"
	},
	{
		"preview": "//pi1.lmcdn.ru/img46x66/J/E/JE008EWYRT09_5748992_3_v1.jpg",
		"resource": "//pi1.lmcdn.ru/img389x562/J/E/JE008EWYRT09_5748992_3_v1.jpg",
		"zoom": "//pi3.lmcdn.ru/product/J/E/JE008EWYRT09_5748992_3_v1.jpg"
	}
];

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_index_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_App__ = __webpack_require__(1);



var app = new __WEBPACK_IMPORTED_MODULE_1__components_App__["a" /* default */]({
  el: document.createElement('div')
});

document.getElementById('root').append(app.el);

/***/ })
/******/ ]);