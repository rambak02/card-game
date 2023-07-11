/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \*******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../../assets/fonts/stratosskyengweb-regular.woff */ "./assets/fonts/stratosskyengweb-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../../assets/fonts/stratosskyengweb-regular.woff2 */ "./assets/fonts/stratosskyengweb-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/img/cart-back.png */ "./assets/img/cart-back.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/img/celedration.png */ "./assets/img/celedration.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/img/smile_dead.png */ "./assets/img/smile_dead.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
@font-face {
  font-family: StratosSkyeng;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(woff), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(woff2);
  font-style: normal;
  font-weight: 400;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #004980;
  width: 100vw;
  height: 100vh;
}

.level__container {
  width: 480px;
  height: 460px;
  background: #c2f5ff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.level__title {
  width: 208px;
  height: 96px;
  font-family: StratosSkyeng;
  font-size: 38px;
  line-height: 48px;
  text-align: center;
  color: #004980;
  font-style: normal;
  font-weight: 400;
}
.level__toolbar {
  display: flex;
  gap: 24px;
  font-size: 64px;
  line-height: 72px;
  color: #0080c1;
}

.level__start {
  color: #fff;
  background: #7ac100;
  border-radius: 12px;
  min-height: 50px;
  min-width: 248px;
  font-size: 24px;
  line-height: 32px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}
.level__start:hover {
  background-color: #6daa03;
}

.level__toolbar input[type=radio] {
  display: none;
}

.level__toolbar label {
  font-family: StratosSkyeng;
  display: inline-block;
  padding: 20px 40px;
  cursor: pointer;
  background: #fff;
  border-radius: 12px;
}

.level__toolbar label:hover {
  outline: 3px solid #0080c1;
}

.level__toolbar input[type=radio]:checked + label {
  outline: 3px solid #0080c1;
}

body {
  background-color: #004980;
}

.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.timer {
  margin-top: -14px;
  color: #fff;
  font-family: StratosSkyeng;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  text-align: center;
}
.timer__min {
  padding-left: 38px;
}
.timer__sek {
  padding-right: 5px;
}
.timer__container {
  margin-top: 20px;
}
.timer__header {
  color: #fff;
  font-family: StratosSkyeng;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.restart-btn {
  display: flex;
  margin-top: 10px;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 246px;
  justify-content: center;
  align-items: center;
  font-family: StratosSkyeng;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  height: 50px;
  background: #7ac100;
  border-radius: 12px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;
  margin: auto;
  width: 70vw;
  height: 80vh;
}

.card {
  cursor: pointer;
  min-width: 110px;
  height: 150px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
  background-repeat: no-repeat;
}

@media (width <= 1024px) {
  .grid {
    width: 90vw;
  }
}
.game-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 73, 128, 0.7019607843); /* Прозрачный черный цвет для затемнения фона */
  z-index: 99; /* Высокий z-index для отображения поверх основного контента */
  display: none;
}

.game-over__win {
  width: 96px;
  height: 96px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.game-over__lose {
  width: 96px;
  height: 96px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

.game-over__title {
  color: #004980;
  height: 48px;
  font-family: StratosSkyeng;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
}

.game-overlay__time__title {
  width: 230px;
  height: 32px;
  font-family: StratosSkyeng;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
}

.game-overlay__time {
  width: 155px;
  height: 72px;
  font-family: StratosSkyeng;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
}

.game-overlay__btn {
  background: #7ac100;
  border-radius: 12px;
  width: 246px;
  height: 50px;
  font-family: StratosSkyeng;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: white;
}

.show {
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-over-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c2f5ff;
  border-radius: 12px;
  font-family: StratosSkyeng;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  padding: 20px;
  font-size: 24px;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./../../../../../../../%D0%A0%D0%B0%D0%BC%D0%B0%D0%BB/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%A0%D0%B0%D0%BC%D0%B0%D0%BB/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B%20%D0%B5%D0%BA%D0%BB%D0%B8%D0%BF%D1%81/Project%20js/card%20games/src/styles/style.scss","webpack://./src/styles/style.scss","webpack://./src/styles/_vars.scss","webpack://./src/styles/_game-board.scss","webpack://./src/styles/_mobile.scss","webpack://./src/styles/_game-over.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACEhB;EACE,0BAAA;EACA,gHAAA;EAEA,kBAAA;EACA,gBAAA;ADDF;ACIA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;ADFF;;ACKA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBCpBiB;EDqBjB,YAAA;EACA,aAAA;ADFF;;ACME;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,6BAAA;ADHJ;ACME;EACE,YAAA;EACA,YAAA;EACA,0BAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;ADJJ;ACOE;EACE,aAAA;EACA,SAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;ADLJ;;ACSA;EACE,WAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,eAAA;EACA,oBAAA;ADNF;ACQE;EACE,yBAAA;ADNJ;;ACUA;EACE,aAAA;ADPF;;ACUA;EACE,0BAAA;EACA,qBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;ADPF;;ACUA;EACE,0BAAA;ADPF;;ACUA;EACE,0BAAA;ADPF;;AGtFA;EACE,yBDDiB;AF0FnB;;AGtFA;EACE,aAAA;EACA,6BAAA;EACA,mBAAA;AHyFF;;AGtFA;EACE,iBAAA;EACA,WAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AHyFF;AGvFE;EACE,kBAAA;AHyFJ;AGtFE;EACE,kBAAA;AHwFJ;AGrFE;EACE,gBAAA;AHuFJ;AGpFE;EACE,WAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AHsFJ;;AGlFA;EACE,aAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,mBAAA;EACA,mBAAA;AHqFF;;AGlFA;EACE,aAAA;EACA,qCAAA;EACA,kCAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AHqFF;;AGlFA;EACE,eAAA;EACA,gBAAA;EACA,aAAA;EACA,yBAAA;EACA,sBAAA;EACA,kBAAA;EACA,yDAAA;EACA,sBAAA;EACA,4BAAA;AHqFF;;AIxKA;EACE;IACE,WAAA;EJ2KF;AACF;AK9KA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,gDAAA,EAAA,+CAAA;EACA,WAAA,EAAA,8DAAA;EACA,aAAA;ALgLF;;AK7KA;EACE,WAAA;EACA,YAAA;EACA,yDAAA;ALgLF;;AK7KA;EACE,WAAA;EACA,YAAA;EACA,yDAAA;ALgLF;;AK7KA;EACE,cAAA;EACA,YAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;ALgLF;;AK7KA;EACE,YAAA;EACA,YAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;ALgLF;;AK7KA;EACE,YAAA;EACA,YAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;ALgLF;;AK7KA;EACE,mBAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;ALgLF;;AK7KA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;ALgLF;;AK7KA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;ALgLF","sourcesContent":["@charset \"UTF-8\";\n@font-face {\n  font-family: StratosSkyeng;\n  src: url(\"/assets/fonts/stratosskyengweb-regular.woff\") format(woff), url(\"/assets/fonts/stratosskyengweb-regular.woff2\") format(woff2);\n  font-style: normal;\n  font-weight: 400;\n}\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #004980;\n  width: 100vw;\n  height: 100vh;\n}\n\n.level__container {\n  width: 480px;\n  height: 460px;\n  background: #c2f5ff;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.level__title {\n  width: 208px;\n  height: 96px;\n  font-family: StratosSkyeng;\n  font-size: 38px;\n  line-height: 48px;\n  text-align: center;\n  color: #004980;\n  font-style: normal;\n  font-weight: 400;\n}\n.level__toolbar {\n  display: flex;\n  gap: 24px;\n  font-size: 64px;\n  line-height: 72px;\n  color: #0080c1;\n}\n\n.level__start {\n  color: #fff;\n  background: #7ac100;\n  border-radius: 12px;\n  min-height: 50px;\n  min-width: 248px;\n  font-size: 24px;\n  line-height: 32px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.level__start:hover {\n  background-color: #6daa03;\n}\n\n.level__toolbar input[type=radio] {\n  display: none;\n}\n\n.level__toolbar label {\n  font-family: StratosSkyeng;\n  display: inline-block;\n  padding: 20px 40px;\n  cursor: pointer;\n  background: #fff;\n  border-radius: 12px;\n}\n\n.level__toolbar label:hover {\n  outline: 3px solid #0080c1;\n}\n\n.level__toolbar input[type=radio]:checked + label {\n  outline: 3px solid #0080c1;\n}\n\nbody {\n  background-color: #004980;\n}\n\n.header {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.timer {\n  margin-top: -14px;\n  color: #fff;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 64px;\n  line-height: 72px;\n  text-align: center;\n}\n.timer__min {\n  padding-left: 38px;\n}\n.timer__sek {\n  padding-right: 5px;\n}\n.timer__container {\n  margin-top: 20px;\n}\n.timer__header {\n  color: #fff;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 32px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.restart-btn {\n  display: flex;\n  margin-top: 10px;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  width: 246px;\n  justify-content: center;\n  align-items: center;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  height: 50px;\n  background: #7ac100;\n  border-radius: 12px;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(9, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  grid-gap: 10px;\n  margin: auto;\n  width: 70vw;\n  height: 80vh;\n}\n\n.card {\n  cursor: pointer;\n  min-width: 110px;\n  height: 150px;\n  background-color: #f2f2f2;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background-image: url(\"../../assets/img/cart-back.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n@media (width <= 1024px) {\n  .grid {\n    width: 90vw;\n  }\n}\n.game-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 73, 128, 0.7019607843); /* Прозрачный черный цвет для затемнения фона */\n  z-index: 99; /* Высокий z-index для отображения поверх основного контента */\n  display: none;\n}\n\n.game-over__win {\n  width: 96px;\n  height: 96px;\n  background-image: url(\"../../assets/img/celedration.png\");\n}\n\n.game-over__lose {\n  width: 96px;\n  height: 96px;\n  background-image: url(\"../../assets/img/smile_dead.png\");\n}\n\n.game-over__title {\n  color: #004980;\n  height: 48px;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 40px;\n  line-height: 48px;\n}\n\n.game-overlay__time__title {\n  width: 230px;\n  height: 32px;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n}\n\n.game-overlay__time {\n  width: 155px;\n  height: 72px;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 64px;\n  line-height: 72px;\n}\n\n.game-overlay__btn {\n  background: #7ac100;\n  border-radius: 12px;\n  width: 246px;\n  height: 50px;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  color: white;\n}\n\n.show {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-over-screen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #c2f5ff;\n  border-radius: 12px;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 48px;\n  padding: 20px;\n  font-size: 24px;\n  text-align: center;\n}","@import \"vars\";\n\n@font-face {\n  font-family: StratosSkyeng;\n  src: url(\"/assets/fonts/stratosskyengweb-regular.woff\") format(woff),\n    url(\"/assets/fonts/stratosskyengweb-regular.woff2\") format(woff2);\n  font-style: normal;\n  font-weight: 400;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.main {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: $color-background;\n  width: 100vw;\n  height: 100vh;\n}\n\n.level {\n  &__container {\n    width: 480px;\n    height: 460px;\n    background: #c2f5ff;\n    border-radius: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n  }\n\n  &__title {\n    width: 208px;\n    height: 96px;\n    font-family: StratosSkyeng;\n    font-size: 38px;\n    line-height: 48px;\n    text-align: center;\n    color: #004980;\n    font-style: normal;\n    font-weight: 400;\n  }\n\n  &__toolbar {\n    display: flex;\n    gap: 24px;\n    font-size: 64px;\n    line-height: 72px;\n    color: #0080c1;\n  }\n}\n\n.level__start {\n  color: #fff;\n  background: #7ac100;\n  border-radius: 12px;\n  min-height: 50px;\n  min-width: 248px;\n  font-size: 24px;\n  line-height: 32px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n\n  &:hover {\n    background-color: #6daa03;\n  }\n}\n\n.level__toolbar input[type=\"radio\"] {\n  display: none;\n}\n\n.level__toolbar label {\n  font-family: StratosSkyeng;\n  display: inline-block;\n  padding: 20px 40px;\n  cursor: pointer;\n  background: #fff;\n  border-radius: 12px;\n}\n\n.level__toolbar label:hover {\n  outline: 3px solid #0080c1;\n}\n\n.level__toolbar input[type=\"radio\"]:checked + label {\n  outline: 3px solid #0080c1;\n}\n\n@import \"game-board\";\n@import \"mobile\";\n@import \"game-over\";\n","$color-background: #004980;\n$color-text: #004980;\n","body {\n  background-color: $color-background;\n}\n\n.header {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.timer {\n  margin-top: -14px;\n  color: #fff;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 64px;\n  line-height: 72px;\n  text-align: center;\n\n  &__min {\n    padding-left: 38px;\n  }\n\n  &__sek {\n    padding-right: 5px;\n  }\n\n  &__container {\n    margin-top: 20px;\n  }\n\n  &__header {\n    color: #fff;\n    font-family: StratosSkyeng;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 32px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n}\n\n.restart-btn {\n  display: flex;\n  margin-top: 10px;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  width: 246px;\n  justify-content: center;\n  align-items: center;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  height: 50px;\n  background: #7ac100;\n  border-radius: 12px;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(9, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  grid-gap: 10px;\n  margin: auto;\n  width: 70vw;\n  height: 80vh;\n}\n\n.card {\n  cursor: pointer;\n  min-width: 110px;\n  height: 150px;\n  background-color: #f2f2f2;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background-image: url(\"../../assets/img/cart-back.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n","@media (width <= 1024px) {\n  .grid {\n    width: 90vw;\n  }\n}\n",".game-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #004980b3; /* Прозрачный черный цвет для затемнения фона */\n  z-index: 99; /* Высокий z-index для отображения поверх основного контента */\n  display: none;\n}\n\n.game-over__win {\n  width: 96px;\n  height: 96px;\n  background-image: url(\"../../assets/img/celedration.png\");\n}\n\n.game-over__lose {\n  width: 96px;\n  height: 96px;\n  background-image: url(\"../../assets/img/smile_dead.png\");\n}\n\n.game-over__title {\n  color: #004980;\n  height: 48px;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 40px;\n  line-height: 48px;\n}\n\n.game-overlay__time__title {\n  width: 230px;\n  height: 32px;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n}\n\n.game-overlay__time {\n  width: 155px;\n  height: 72px;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 64px;\n  line-height: 72px;\n}\n\n.game-overlay__btn {\n  background: #7ac100;\n  border-radius: 12px;\n  width: 246px;\n  height: 50px;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  color: #ffff;\n}\n\n.show {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-over-screen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #c2f5ff;\n  border-radius: 12px;\n  font-family: StratosSkyeng;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 48px;\n  padding: 20px;\n  font-size: 24px;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateCards: () => (/* binding */ generateCards),
/* harmony export */   renderBoard: () => (/* binding */ renderBoard)
/* harmony export */ });
var shuffle = function (array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
};
var renderBoard = function (cardClasses) {
    var shuffledCard = shuffle(cardClasses);
    var cardContainer = document.querySelector(".grid");
    if (cardContainer !== null) {
        cardContainer.innerHTML = shuffledCard
            .map(function (cardClass) {
            var suit = cardClass.split("-")[0];
            return "<img src=\"../../../static/img/".concat(cardClass, ".png\" data-value=\"").concat(cardClass, "\" class =\"card\" data-suit =\"").concat(suit, "\">");
        })
            .join("");
    }
};
var generateCards = function (rankArray, suitArray, numCards) {
    var cards = [];
    var suitIndex = 0;
    var rankIndex = 0;
    for (var i = 0; cards.length < numCards; i++) {
        rankIndex = Math.floor(Math.random() * rankArray.length);
        suitIndex = Math.floor(Math.random() * suitArray.length);
        var card = "".concat(rankArray[rankIndex], "-").concat(suitArray[suitIndex]);
        if (!cards.includes(card)) {
            cards.push(card);
        }
    }
    return cards;
};


/***/ }),

/***/ "./src/showGameScreen.ts":
/*!*******************************!*\
  !*** ./src/showGameScreen.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showGameLoseScreen: () => (/* binding */ showGameLoseScreen),
/* harmony export */   showGameOverScreen: () => (/* binding */ showGameOverScreen)
/* harmony export */ });
function showGameOverScreen(timerElement, text, classElement, gameOverlayElement) {
    var gameOverScreen = document.createElement("div");
    gameOverScreen.className = classElement;
    gameOverScreen.innerHTML = " <div class=\"game-over__win\"></div>       \n   <div class=\"game-over__title\"> ".concat(text, "</div>\n   <div class=\"game-over__time__title\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F:</div>\n   <h1 class=\"game-over__time\"> ").concat(timerElement.textContent, "</h1>\n   <button class=\"game-over__btn restart-btn\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>");
    gameOverlayElement === null || gameOverlayElement === void 0 ? void 0 : gameOverlayElement.appendChild(gameOverScreen);
    gameOverlayElement === null || gameOverlayElement === void 0 ? void 0 : gameOverlayElement.classList.add("show");
}
function showGameLoseScreen(timerElement, text, classElement, gameOverlayElement) {
    var gameOverScreen = document.createElement("div");
    gameOverScreen.className = classElement;
    gameOverScreen.innerHTML = "\n   <div class=\"game-over__lose\"></div>       \n   <div class=\"game-over__title\"> ".concat(text, "</div>\n   <div class=\"game-over__time__title\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F:</div>\n   <h1 class=\"game-over__time\"> ").concat(timerElement.textContent, "</h1>\n   <button class=\"game-over__btn restart-btn\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>");
    gameOverlayElement === null || gameOverlayElement === void 0 ? void 0 : gameOverlayElement.appendChild(gameOverScreen);
    gameOverlayElement === null || gameOverlayElement === void 0 ? void 0 : gameOverlayElement.classList.add("show");
}


/***/ }),

/***/ "./src/timer.ts":
/*!**********************!*\
  !*** ./src/timer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startTimer: () => (/* binding */ startTimer),
/* harmony export */   stopTimer: () => (/* binding */ stopTimer)
/* harmony export */ });
var intervalTimer = null;
function timerFormat(time) {
    var minutes = Math.floor(time / 60)
        .toString()
        .padStart(2, "0");
    var seconds = (time % 60).toString().padStart(2, "0");
    return "".concat(minutes, ":").concat(seconds);
}
function renderTimer(startTime, elapsedTime, element) {
    var currentTime = Math.floor((Date.now() - startTime) / 1000);
    elapsedTime = currentTime;
    if (element !== null) {
        element.textContent = timerFormat(elapsedTime);
    }
}
function startTimer(startTime, elapsedTime, element) {
    startTime = Date.now();
    renderTimer(startTime, elapsedTime, element);
    intervalTimer = setInterval(function () {
        renderTimer(startTime, elapsedTime, element);
    }, 1000);
}
function stopTimer() {
    if (intervalTimer) {
        clearInterval(intervalTimer);
    }
}


/***/ }),

/***/ "./assets/fonts/stratosskyengweb-regular.woff":
/*!****************************************************!*\
  !*** ./assets/fonts/stratosskyengweb-regular.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7d99bd522cf2d77ce4a.woff";

/***/ }),

/***/ "./assets/fonts/stratosskyengweb-regular.woff2":
/*!*****************************************************!*\
  !*** ./assets/fonts/stratosskyengweb-regular.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce93393e831d32412096.woff2";

/***/ }),

/***/ "./assets/img/cart-back.png":
/*!**********************************!*\
  !*** ./assets/img/cart-back.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3908eebe09d88b192184.png";

/***/ }),

/***/ "./assets/img/celedration.png":
/*!************************************!*\
  !*** ./assets/img/celedration.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac8c1387472731a5e673.png";

/***/ }),

/***/ "./assets/img/smile_dead.png":
/*!***********************************!*\
  !*** ./assets/img/smile_dead.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20d8a82296db241727e0.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleLevelSelection: () => (/* binding */ handleLevelSelection),
/* harmony export */   selectedLevel: () => (/* binding */ selectedLevel)
/* harmony export */ });
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.ts");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ "./src/timer.ts");
/* harmony import */ var _showGameScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showGameScreen */ "./src/showGameScreen.ts");




var rankArray = ["a", "k", "q", "j", "ten", "nine", "eight", "seven", "six"];
var suitArray = ["spades", "hearts", "diamonds", "clubs"];
var selectedLevel = 0;
var cardClasses = [];
var openedCards = [];
var elapsedTime = 0;
var startTime = 0;
var closingCards = false;
var cardContainer = document.querySelector(".grid");
function handleLevelSelection() {
    var levelRadio = document.querySelectorAll(".level");
    for (var i = 0; i < levelRadio.length; i++) {
        if (levelRadio[i].checked) {
            selectedLevel = Number(levelRadio[i].value);
            break;
        }
    }
}
var startButton = document.querySelector(".level__start-form");
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener("submit", function () {
    handleLevelSelection();
    if (selectedLevel !== null) {
        localStorage.setItem("selectedLevel", String(selectedLevel));
        window.location.assign("game-board.html");
    }
});
var restartButtonElement = document.querySelector(".restart-btn");
restartButtonElement === null || restartButtonElement === void 0 ? void 0 : restartButtonElement.addEventListener("click", function () {
    window.location.assign("index.html");
    selectedLevel = 0;
});
document.addEventListener("DOMContentLoaded", function () {
    selectedLevel = Number(localStorage.getItem("selectedLevel"));
    var numCards = 0;
    if (selectedLevel == 1) {
        numCards = 18;
        cardClasses = (0,_game__WEBPACK_IMPORTED_MODULE_1__.generateCards)(rankArray, suitArray, numCards);
    }
    if (selectedLevel == 2) {
        numCards = 27;
        cardClasses = (0,_game__WEBPACK_IMPORTED_MODULE_1__.generateCards)(rankArray, suitArray, numCards);
    }
    if (selectedLevel == 3) {
        numCards = 36;
        cardClasses = (0,_game__WEBPACK_IMPORTED_MODULE_1__.generateCards)(rankArray, suitArray, numCards);
    }
    (0,_game__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(cardClasses);
    setTimeout(function () {
        closeCards();
        var timerElement = document.querySelector(".timer");
        closingCards = true;
        (0,_timer__WEBPACK_IMPORTED_MODULE_2__.startTimer)(startTime, elapsedTime, timerElement);
    }, 5000);
    cardContainer === null || cardContainer === void 0 ? void 0 : cardContainer.addEventListener("click", function (event) {
        var card = event.target;
        if (card.classList.contains("card") &&
            !card.classList.contains("open") &&
            closingCards === true) {
            openCard(card);
            checkMatch();
        }
    });
});
var closeCards = function () {
    var cardsElement = document.querySelectorAll(".card");
    cardsElement.forEach(function (card) {
        card.setAttribute("src", "../../../static/img/cart-back.png");
    });
    openedCards = [];
};
var openCard = function (card) {
    card.setAttribute("src", "../../../static/img/".concat(card.dataset.value, ".png"));
    openedCards.push(card);
};
var checkMatch = function () {
    if (openedCards.length === 2) {
        var firstCard = openedCards[0], secondCard = openedCards[1];
        if (firstCard.dataset.suit === secondCard.dataset.suit) {
            setTimeout(function () {
                (0,_timer__WEBPACK_IMPORTED_MODULE_2__.stopTimer)();
            }, 400);
            var winTimerElement = document.getElementById("timer");
            var gameOverlayElement = document.querySelector(".game-overlay");
            (0,_showGameScreen__WEBPACK_IMPORTED_MODULE_3__.showGameOverScreen)(winTimerElement, "Вы выиграли!", "game-over-screen", gameOverlayElement);
            var gameRestartButton = document.querySelector(".game-over__btn");
            gameRestartButton === null || gameRestartButton === void 0 ? void 0 : gameRestartButton.addEventListener("click", function () {
                window.location.assign("index.html");
                selectedLevel = 0;
            });
        }
        else {
            setTimeout(function () {
                (0,_timer__WEBPACK_IMPORTED_MODULE_2__.stopTimer)();
            }, 400);
            var loseTimerElement = document.getElementById("timer");
            var gameOverlayElement = document.querySelector(".game-overlay");
            (0,_showGameScreen__WEBPACK_IMPORTED_MODULE_3__.showGameLoseScreen)(loseTimerElement, "Вы проиграли!", "game-over-screen", gameOverlayElement);
            var gameRestartButton = document.querySelector(".game-over__btn");
            gameRestartButton === null || gameRestartButton === void 0 ? void 0 : gameRestartButton.addEventListener("click", function () {
                window.location.assign("index.html");
                selectedLevel = 0;
            });
        }
    }
};

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map