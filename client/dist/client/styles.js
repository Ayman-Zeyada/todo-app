(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Cairo:wght@400;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n/* You can add global styles to this file, and also import other style files */\n@font-face {\n  font-family: 'icomoon';\n  src:  url('icomoon.eot?u23quf');\n  src:  url('icomoon.eot?u23quf#iefix') format('embedded-opentype'),\n    url('icomoon.ttf?u23quf') format('truetype'),\n    url('icomoon.woff?u23quf') format('woff'),\n    url('icomoon.svg?u23quf#icomoon') format('svg');\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'icomoon' !important;\n  speak: never;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-reload:before {\n  content: \"\\e904\";\n}\n.icon-done:before {\n  content: \"\\e901\";\n}\n.icon-more:before {\n  content: \"\\e902\";\n}\n.icon-pencil:before {\n  content: \"\\e903\";\n}\n.icon-delete:before {\n  content: \"\\e900\";\n}\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\nbutton, input {\n  color: inherit;\n  outline: none;\n}\nhtml {\n  font-size: 12px;\n  /* Medium devices (landscape tablets, 768px and up) */\n  /* Large devices (laptops/desktops, 992px and up) */\n  /* Extra large devices (large laptops and desktops, 1200px and up) */\n}\n@media only screen and (min-width: 600px) {\n  html {\n    font-size: 13px;\n  }\n}\n@media only screen and (min-width: 768px) {\n  html {\n    font-size: 14px;\n  }\n}\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 15px;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 16px;\n  }\n}\nbody {\n  font-family: \"Montserrat\", sans-serif;\n}\nh1 {\n  font-size: 4rem;\n}\nhtml, body {\n  height: 100%;\n}\nbody {\n  background-color: #fff;\n  color: #353b48;\n  box-sizing: border-box;\n}\nbody, div, section, button {\n  box-sizing: border-box;\n}\napp-root {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.body-bg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: -1;\n  -webkit-clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);\n          clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);\n  background-color: #dcdde1;\n}\nbutton:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.5);\n  transition: box-shadow 0.2s;\n}\nbutton:active {\n  box-shadow: none;\n}\n.btn {\n  border: 0;\n  padding: 0.3rem 0.6rem;\n  min-width: 4rem;\n  cursor: pointer;\n  font-size: 1rem;\n  border-radius: 0.3rem;\n  transition: background-color 0.2s ease-in-out;\n}\n.btn--link {\n  background-color: transparent;\n}\n.btn--circle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: auto;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n}\n.btn--primary {\n  background-color: #273c75;\n  border: 1px solid #010102;\n  color: #fff;\n}\n.btn--primary:hover {\n  background-color: #1a284f;\n}\n.btn--secondary {\n  background-color: #f5f6fa;\n  border: 1px solid #8f9ac7;\n}\n.btn--secondary:hover {\n  background-color: #d3d7e9;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n.form-group__label {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n}\n.form-group__control {\n  font-size: 1rem;\n  border: 1px solid #ddd;\n  border-radius: 0.3rem;\n  padding: 0.5rem 0.75rem;\n  transition: box-shadow 0.2s;\n  margin-bottom: 0.5rem;\n}\n.form-group__control:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.5);\n}\n.form-group__feedback {\n  display: none;\n  font-size: 0.8rem;\n}\n.form-group--invalid {\n  color: #c23616;\n}\n.form-group--invalid .form-group__control {\n  border: 1px solid #c23616;\n  box-shadow: 0 0 0 0.2rem rgba(194, 53, 22, 0.5);\n}\n.form-group--invalid .form-group__feedback {\n  display: block;\n}", "",{"version":3,"sources":["webpack://src/styles.scss","webpack://src/assets/icons/style.css","webpack://src/assets/styles/base/_reset.scss","webpack://src/assets/styles/base/_typography.scss","webpack://src/assets/styles/helpers/_variables.scss","webpack://src/assets/styles/base/_global.scss","webpack://src/assets/styles/components/_buttons.scss","webpack://src/assets/styles/components/_form-group.scss"],"names":[],"mappings":";AAAA,8EAAA;ACAA;EACE,sBAAsB;EACtB,+BAAqC;EACrC;;;mDAGuD;EACvD,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;AAEA;EACE,+EAA+E;EAC/E,iCAAiC;EACjC,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;EACpB,cAAc;;EAEd,sCAAsC;EACtC,mCAAmC;EACnC,kCAAkC;AACpC;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;ACzCA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AFKD;AEFA;EACC,cAAA;EACA,aAAA;AFKD;AGxBA;EACE,eAAA;EAKA,qDAAA;EAKA,mDAAA;EAKA,oEAAA;AHeF;AG7BE;EAFF;IAGM,eAAA;EHgCJ;AACF;AG7BE;EAPF;IAQI,eAAA;EHgCF;AACF;AG7BE;EAZF;IAaI,eAAA;EHgCF;AACF;AG7BE;EAjBF;IAkBI,eAAA;EHgCF;AACF;AG7BA;EACE,qCC3BoB;AJ2DtB;AG9BA;EACE,eAAA;AHiCF;AK/DA;EACI,YAAA;ALkEJ;AK/DA;EACI,sBAAA;EACA,cAAA;EACA,sBAAA;ALkEJ;AK/DA;EACI,sBAAA;ALkEJ;AK/DA;EACI,aAAA;EACA,sBAAA;EACA,YAAA;ALkEJ;AK/DA;EACI,kBAAA;EACA,MAAA;EACA,QAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,2DAAA;UAAA,mDAAA;EACA,yBAAA;ALkEJ;AM7FE;EACE,2CAAA;EACA,2BAAA;ANgGJ;AM9FE;EACE,gBAAA;ANgGJ;AM5FA;EACE,SAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;EACA,eAAA;EACA,qBAAA;EACA,6CAAA;AN+FF;AM9FE;EACE,6BAAA;ANgGJ;AM9FE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;ANgGJ;AM9FE;EACE,yBAAA;EACA,yBAAA;EACA,WAAA;ANgGJ;AM/FI;EACE,yBAAA;ANiGN;AM9FE;EACE,yBAAA;EACA,yBAAA;ANgGJ;AM/FI;EACE,yBAAA;ANiGN;AO3IA;EACE,aAAA;EACA,sBAAA;AP8IF;AO7IE;EACE,iBAAA;EACA,qBAAA;AP+IJ;AO7IE;EACE,eAAA;EACA,sBAAA;EACA,qBAAA;EACA,uBAAA;EACA,2BAAA;EACA,qBAAA;AP+IJ;AO9II;EACE,2CAAA;APgJN;AO7IE;EACE,aAAA;EACA,iBAAA;AP+IJ;AO7IE;EACE,cAAA;AP+IJ;AO9II;EACE,yBAAA;EACA,+CAAA;APgJN;AO9II;EACE,cAAA;APgJN","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import './assets/icons/style.css';\n@import './assets/styles/main';","@font-face {\n  font-family: 'icomoon';\n  src:  url('fonts/icomoon.eot?u23quf');\n  src:  url('fonts/icomoon.eot?u23quf#iefix') format('embedded-opentype'),\n    url('fonts/icomoon.ttf?u23quf') format('truetype'),\n    url('fonts/icomoon.woff?u23quf') format('woff'),\n    url('fonts/icomoon.svg?u23quf#icomoon') format('svg');\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'icomoon' !important;\n  speak: never;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-reload:before {\n  content: \"\\e904\";\n}\n.icon-done:before {\n  content: \"\\e901\";\n}\n.icon-more:before {\n  content: \"\\e902\";\n}\n.icon-pencil:before {\n  content: \"\\e903\";\n}\n.icon-delete:before {\n  content: \"\\e900\";\n}\n","html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\nbutton, input {\r\n\tcolor: inherit;\r\n\toutline: none;\r\n}","@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Cairo:wght@400;600&display=swap\");\r\n\r\n// font-family: 'Cairo', sans-serif;\r\nhtml {\r\n  font-size: 12px;\r\n  @media only screen and (min-width: 600px) {\r\n      font-size: 13px;\r\n  }\r\n\r\n  /* Medium devices (landscape tablets, 768px and up) */\r\n  @media only screen and (min-width: 768px) {\r\n    font-size: 14px;\r\n  }\r\n\r\n  /* Large devices (laptops/desktops, 992px and up) */\r\n  @media only screen and (min-width: 992px) {\r\n    font-size: 15px;\r\n  }\r\n\r\n  /* Extra large devices (large laptops and desktops, 1200px and up) */\r\n  @media only screen and (min-width: 1200px) {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\nbody {\r\n  font-family: $english-font-family;\r\n}\r\nh1 {\r\n  font-size: 4rem;\r\n}\r\n","$english-font-family: 'Montserrat', sans-serif;\r\n$arabic-font-family: 'Cairo', sans-serif;","html, body {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    background-color: #fff;\r\n    color: #353b48;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody, div, section, button {\r\n    box-sizing: border-box;\r\n}\r\n\r\napp-root {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.body-bg {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    z-index: -1;\r\n    clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);\r\n    background-color: #dcdde1;\r\n}","button {\r\n  &:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.5);\r\n    transition: box-shadow 0.2s;\r\n  }\r\n  &:active {\r\n    box-shadow: none;\r\n  }\r\n}\r\n\r\n.btn {\r\n  border: 0;\r\n  padding: 0.3rem 0.6rem;\r\n  min-width: 4rem;\r\n  cursor: pointer;\r\n  font-size: 1rem;\r\n  border-radius: 0.3rem;\r\n  transition: background-color 0.2s ease-in-out;\r\n  &--link {\r\n    background-color: transparent;\r\n  }\r\n  &--circle {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    min-width: auto;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    border-radius: 50%;\r\n  }\r\n  &--primary {\r\n    background-color: #273c75;\r\n    border: 1px solid darken($color: #273c75, $amount: 30%);\r\n    color: #fff;\r\n    &:hover {\r\n      background-color: darken($color: #273c75, $amount: 10%);\r\n    }\r\n  }\r\n  &--secondary {\r\n    background-color: #f5f6fa;\r\n    border: 1px solid darken($color: #f5f6fa, $amount: 30%);\r\n    &:hover {\r\n      background-color: darken($color: #f5f6fa, $amount: 10%);\r\n    }\r\n  }\r\n}\r\n",".form-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  &__label {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  &__control {\r\n    font-size: 1rem;\r\n    border: 1px solid #ddd;\r\n    border-radius: 0.3rem;\r\n    padding: 0.5rem 0.75rem;\r\n    transition: box-shadow 0.2s;\r\n    margin-bottom: 0.5rem;\r\n    &:focus {\r\n      box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.5);\r\n    }\r\n  }\r\n  &__feedback {\r\n    display: none;\r\n    font-size: 0.8rem;\r\n  }\r\n  &--invalid {\r\n    color: #c23616;\r\n    .form-group__control {\r\n      border: 1px solid #c23616;\r\n      box-shadow: 0 0 0 0.2rem rgba(194, 53, 22, 0.5);\r\n    }\r\n    .form-group__feedback {\r\n      display: block;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\todo-app\todo-app\todo-app\client\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map