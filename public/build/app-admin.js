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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWFkbWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNpQzs7QUFFakM7QUFDcUI7O0FBR3JCO0FBQ0E7QUFDQSxJQUFJQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsMENBQU0sQ0FBQztBQUMxQixJQUFJQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBRXhELElBQUlGLFNBQVMsSUFBSSxJQUFJLEVBQUU7RUFDbkJGLElBQUksQ0FBQ0UsU0FBUyxDQUFDO0FBQ25COztBQUdBO0FBQ0E7QUFDQSxJQUFJRyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZELElBQUlFLFVBQVUsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMseUJBQXlCLENBQUM7QUFDbEUsSUFBTUcsY0FBYyxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztBQUV2RSxJQUFJQyxRQUFRLEVBQUU7RUFDVkEsUUFBUSxDQUFDRyxPQUFPLEdBQUcsWUFBVTtJQUN6QixJQUFJQyxLQUFLLEdBQUdILFVBQVUsQ0FBQ0ksU0FBUyxDQUFDLElBQUksQ0FBQztJQUN0Q0gsY0FBYyxDQUFDSSxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUM1QkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3JCLE9BQU8sS0FBSztFQUNoQixDQUFDO0FBQ0w7O0FBSUE7QUFDQTtBQUNBVixRQUFRLENBQUNXLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDdERGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUMzQixJQUFJRSxTQUFTLEdBQUdaLFFBQVEsQ0FBQ2EsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0VBQ3ZERCxTQUFTLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxHQUFHLEVBQUk7SUFDckJBLEdBQUcsQ0FBQ1YsT0FBTyxHQUFHLFVBQVNXLENBQUMsRUFBRTtNQUN0QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7TUFDbEIsSUFBSUMsV0FBVyxHQUFHLElBQUlDLGNBQWMsRUFBRTtNQUN0QyxJQUFJQyxNQUFNLEdBQUdMLEdBQUcsQ0FBQ00sWUFBWSxDQUFDLE9BQU8sQ0FBQztNQUN0Q0gsV0FBVyxDQUFDSSxrQkFBa0IsR0FBRyxVQUFTQyxJQUFJLEVBQUVDLFFBQVEsRUFBQztRQUNyRCxJQUFJQSxRQUFRLElBQUksTUFBTSxFQUFFO1VBQ3BCZixPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDLE1BQU07VUFDSEQsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7UUFDbEM7TUFDSixDQUFDO01BQ0RRLFdBQVcsQ0FBQ08sSUFBSSxDQUFDLE1BQU0sRUFBRUMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQztNQUM5Q1YsV0FBVyxDQUFDVyxJQUFJLENBQUM7UUFDYixPQUFPLEVBQUNUO01BQ1osQ0FBQyxDQUFDO0lBQ04sQ0FBQztFQUNMLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNoRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLWFkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4vYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYWRtaW4vYXBwLnNjc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5cbi8qIFRBQlNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnZhciB0YWJzID0gcmVxdWlyZSgndGFicycpO1xudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItY29udGFpbmVyJyk7XG5cbmlmIChjb250YWluZXIgIT0gbnVsbCkge1xuICAgIHRhYnMoY29udGFpbmVyKTtcbn1cblxuXG4vKiBDQVJBQ1RFUklTVElRVUVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG52YXIgY2FyYWNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNhcmFjLWJ0bicpO1xudmFyIGlucHV0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyYWMtcGFuZWw6bGFzdC1jaGlsZCcpO1xuY29uc3QgY29udGFpbmVyQ2FyYWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyYWMtcGFuZWwtY29udGFpbmVyJylcblxuaWYgKGNhcmFjQnRuKSB7XG4gICAgY2FyYWNCdG4ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBjbG9uZSA9IGlucHV0QmxvY2suY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb250YWluZXJDYXJhYy5hcHBlbmQoY2xvbmUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNsaXF1w6lcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG5cblxuLyogU1VQUFJFU1NJT04gZCdVTkUgSU1BR0Vcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlBhZ2UgY2hhcmfDqWVcIik7XG4gICAgdmFyIGRlbEltZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxJbWdCdG4nKTtcbiAgICBkZWxJbWdCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgdmFyIGl0ZW1JZCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2ltZ0lkJyk7XG4gICAgICAgICAgICBodHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbihkYXRhLCByZXNwb25zZSl7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlID09ICdnb29kJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlbWFuZGUgZW52b3nDqWVcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZW1hbmRlIHJlZnVzw6llXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0LnNlbmQoe1xuICAgICAgICAgICAgICAgICdpbWdJZCc6aXRlbUlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsidGFicyIsInJlcXVpcmUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJhY0J0biIsImlucHV0QmxvY2siLCJjb250YWluZXJDYXJhYyIsIm9uY2xpY2siLCJjbG9uZSIsImNsb25lTm9kZSIsImFwcGVuZCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiZGVsSW1nQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJlIiwicHJldmVudERlZmF1bHQiLCJodHRwUmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0IiwiaXRlbUlkIiwiZ2V0QXR0cmlidXRlIiwib25yZWFkeXN0YXRlY2hhbmdlIiwiZGF0YSIsInJlc3BvbnNlIiwib3BlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9