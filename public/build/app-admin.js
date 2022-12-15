"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app-admin"],{

/***/ "./assets/app-admin.js":
/*!*****************************!*\
  !*** ./assets/app-admin.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_admin_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/admin/app.scss */ "./assets/styles/admin/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");



/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application


/* TABS
--------------------------------------------*/
var tabs = __webpack_require__(/*! tabs */ "./node_modules/tabs/index.js");
var container = document.querySelector('.tab-container');
if (container != null) {
  tabs(container);
}

/* CARACTERISTIQUES
--------------------------------------------*/
var caracBtn = document.querySelector('#add-carac-btn');
var inputBlock = document.querySelector('.carac-panel:last-child');
var containerCarac = document.querySelector('.carac-panel-container');
if (caracBtn) {
  caracBtn.onclick = function () {
    var clone = inputBlock.cloneNode(true);
    containerCarac.append(clone);
    console.log("Cliqué");
    return false;
  };
}

/* SUPPRESSION d'UNE IMAGE
--------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page chargée");
  var delImgBtn = document.querySelectorAll('.delImgBtn');
  delImgBtn.forEach(function (btn) {
    btn.onclick = function (e) {
      e.preventDefault();
      var httpRequest = new XMLHttpRequest();
      var itemId = btn.getAttribute('imgId');
      httpRequest.onreadystatechange = function (data, response) {
        if (response == 'good') {
          console.log("Demande envoyée");
        } else {
          console.log("Demande refusée");
        }
      };
      httpRequest.open("POST", window.location.href);
      httpRequest.send({
        'imgId': itemId
      });
    };
  });
});

/***/ }),

/***/ "./assets/styles/admin/app.scss":
/*!**************************************!*\
  !*** ./assets/styles/admin/app.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-ca0482","vendors-node_modules_swup_debug-plugin_lib_index_js-node_modules_swup_fade-theme_lib_index_js-8ddd4c","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_bo-c9ceb2"], () => (__webpack_exec__("./assets/app-admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWFkbWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNpQzs7QUFFakM7QUFDcUI7O0FBR3JCO0FBQ0E7QUFDQSxJQUFJQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsMENBQU0sQ0FBQztBQUMxQixJQUFJQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBRXhELElBQUlGLFNBQVMsSUFBSSxJQUFJLEVBQUU7RUFDbkJGLElBQUksQ0FBQ0UsU0FBUyxDQUFDO0FBQ25COztBQUdBO0FBQ0E7QUFDQSxJQUFJRyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZELElBQUlFLFVBQVUsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMseUJBQXlCLENBQUM7QUFDbEUsSUFBTUcsY0FBYyxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztBQUV2RSxJQUFJQyxRQUFRLEVBQUU7RUFDVkEsUUFBUSxDQUFDRyxPQUFPLEdBQUcsWUFBVTtJQUN6QixJQUFJQyxLQUFLLEdBQUdILFVBQVUsQ0FBQ0ksU0FBUyxDQUFDLElBQUksQ0FBQztJQUN0Q0gsY0FBYyxDQUFDSSxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUM1QkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3JCLE9BQU8sS0FBSztFQUNoQixDQUFDO0FBQ0w7O0FBSUE7QUFDQTtBQUNBVixRQUFRLENBQUNXLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDdERGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUMzQixJQUFJRSxTQUFTLEdBQUdaLFFBQVEsQ0FBQ2EsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0VBQ3ZERCxTQUFTLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxHQUFHLEVBQUk7SUFDckJBLEdBQUcsQ0FBQ1YsT0FBTyxHQUFHLFVBQVNXLENBQUMsRUFBRTtNQUN0QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7TUFDbEIsSUFBSUMsV0FBVyxHQUFHLElBQUlDLGNBQWMsRUFBRTtNQUN0QyxJQUFJQyxNQUFNLEdBQUdMLEdBQUcsQ0FBQ00sWUFBWSxDQUFDLE9BQU8sQ0FBQztNQUN0Q0gsV0FBVyxDQUFDSSxrQkFBa0IsR0FBRyxVQUFTQyxJQUFJLEVBQUVDLFFBQVEsRUFBQztRQUNyRCxJQUFJQSxRQUFRLElBQUksTUFBTSxFQUFFO1VBQ3BCZixPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDLE1BQU07VUFDSEQsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7UUFDbEM7TUFDSixDQUFDO01BQ0RRLFdBQVcsQ0FBQ08sSUFBSSxDQUFDLE1BQU0sRUFBRUMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQztNQUM5Q1YsV0FBVyxDQUFDVyxJQUFJLENBQUM7UUFDYixPQUFPLEVBQUNUO01BQ1osQ0FBQyxDQUFDO0lBQ04sQ0FBQztFQUNMLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNoRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLWFkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4vYXBwLnNjc3M/M2Q4OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hZG1pbi9hcHAuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cblxuLyogVEFCU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xudmFyIHRhYnMgPSByZXF1aXJlKCd0YWJzJyk7XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1jb250YWluZXInKTtcblxuaWYgKGNvbnRhaW5lciAhPSBudWxsKSB7XG4gICAgdGFicyhjb250YWluZXIpO1xufVxuXG5cbi8qIENBUkFDVEVSSVNUSVFVRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnZhciBjYXJhY0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtY2FyYWMtYnRuJyk7XG52YXIgaW5wdXRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJhYy1wYW5lbDpsYXN0LWNoaWxkJyk7XG5jb25zdCBjb250YWluZXJDYXJhYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJhYy1wYW5lbC1jb250YWluZXInKVxuXG5pZiAoY2FyYWNCdG4pIHtcbiAgICBjYXJhY0J0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGNsb25lID0gaW5wdXRCbG9jay5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnRhaW5lckNhcmFjLmFwcGVuZChjbG9uZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpcXXDqVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59XG5cblxuXG4vKiBTVVBQUkVTU0lPTiBkJ1VORSBJTUFHRVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUGFnZSBjaGFyZ8OpZVwiKTtcbiAgICB2YXIgZGVsSW1nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbEltZ0J0bicpO1xuICAgIGRlbEltZ0J0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB2YXIgaXRlbUlkID0gYnRuLmdldEF0dHJpYnV0ZSgnaW1nSWQnKTtcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKGRhdGEsIHJlc3BvbnNlKXtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgPT0gJ2dvb2QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVtYW5kZSBlbnZvecOpZVwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlbWFuZGUgcmVmdXPDqWVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHR0cFJlcXVlc3Qub3BlbihcIlBPU1RcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgaHR0cFJlcXVlc3Quc2VuZCh7XG4gICAgICAgICAgICAgICAgJ2ltZ0lkJzppdGVtSWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59KSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJ0YWJzIiwicmVxdWlyZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhcmFjQnRuIiwiaW5wdXRCbG9jayIsImNvbnRhaW5lckNhcmFjIiwib25jbGljayIsImNsb25lIiwiY2xvbmVOb2RlIiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWxJbWdCdG4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImh0dHBSZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJpdGVtSWQiLCJnZXRBdHRyaWJ1dGUiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJkYXRhIiwicmVzcG9uc2UiLCJvcGVuIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=