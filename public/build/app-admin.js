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

/* SUPPRESSION D'UNE IMAGE
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

/* TINY MCE
--------------------------------------------*/
tinymce.init({
  selector: '#mytextarea'
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_modules_es_array-cfa5ad","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-dropzone_d-73492e","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_bo-c9ceb2"], () => (__webpack_exec__("./assets/app-admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWFkbWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNpQzs7QUFFakM7QUFDcUI7O0FBR3JCO0FBQ0E7QUFDQSxJQUFJQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsMENBQU0sQ0FBQztBQUMxQixJQUFJQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBRXhELElBQUlGLFNBQVMsSUFBSSxJQUFJLEVBQUU7RUFDbkJGLElBQUksQ0FBQ0UsU0FBUyxDQUFDO0FBQ25COztBQUdBO0FBQ0E7QUFDQSxJQUFJRyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZELElBQUlFLFVBQVUsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMseUJBQXlCLENBQUM7QUFDbEUsSUFBTUcsY0FBYyxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztBQUV2RSxJQUFJQyxRQUFRLEVBQUU7RUFDVkEsUUFBUSxDQUFDRyxPQUFPLEdBQUcsWUFBVTtJQUN6QixJQUFJQyxLQUFLLEdBQUdILFVBQVUsQ0FBQ0ksU0FBUyxDQUFDLElBQUksQ0FBQztJQUN0Q0gsY0FBYyxDQUFDSSxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUM1QkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3JCLE9BQU8sS0FBSztFQUNoQixDQUFDO0FBQ0w7O0FBSUE7QUFDQTtBQUNBVixRQUFRLENBQUNXLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDdERGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUMzQixJQUFJRSxTQUFTLEdBQUdaLFFBQVEsQ0FBQ2EsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0VBQ3ZERCxTQUFTLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxHQUFHLEVBQUk7SUFDckJBLEdBQUcsQ0FBQ1YsT0FBTyxHQUFHLFVBQVNXLENBQUMsRUFBRTtNQUN0QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7TUFDbEIsSUFBSUMsV0FBVyxHQUFHLElBQUlDLGNBQWMsRUFBRTtNQUN0QyxJQUFJQyxNQUFNLEdBQUdMLEdBQUcsQ0FBQ00sWUFBWSxDQUFDLE9BQU8sQ0FBQztNQUN0Q0gsV0FBVyxDQUFDSSxrQkFBa0IsR0FBRyxVQUFTQyxJQUFJLEVBQUVDLFFBQVEsRUFBQztRQUNyRCxJQUFJQSxRQUFRLElBQUksTUFBTSxFQUFFO1VBQ3BCZixPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDLE1BQU07VUFDSEQsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7UUFDbEM7TUFDSixDQUFDO01BQ0RRLFdBQVcsQ0FBQ08sSUFBSSxDQUFDLE1BQU0sRUFBRUMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQztNQUM5Q1YsV0FBVyxDQUFDVyxJQUFJLENBQUM7UUFDYixPQUFPLEVBQUNUO01BQ1osQ0FBQyxDQUFDO0lBQ04sQ0FBQztFQUNMLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7QUFJRjtBQUNBO0FBQ0FVLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDO0VBQ1RDLFFBQVEsRUFBRTtBQUNkLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUN4RUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLWFkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4vYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FkbWluL2FwcC5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuXHJcblxyXG4vKiBUQUJTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxudmFyIHRhYnMgPSByZXF1aXJlKCd0YWJzJyk7XHJcbnZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRhaW5lcicpO1xyXG5cclxuaWYgKGNvbnRhaW5lciAhPSBudWxsKSB7XHJcbiAgICB0YWJzKGNvbnRhaW5lcik7XHJcbn1cclxuXHJcblxyXG4vKiBDQVJBQ1RFUklTVElRVUVTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxudmFyIGNhcmFjQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1jYXJhYy1idG4nKTtcclxudmFyIGlucHV0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyYWMtcGFuZWw6bGFzdC1jaGlsZCcpO1xyXG5jb25zdCBjb250YWluZXJDYXJhYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJhYy1wYW5lbC1jb250YWluZXInKVxyXG5cclxuaWYgKGNhcmFjQnRuKSB7XHJcbiAgICBjYXJhY0J0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgY2xvbmUgPSBpbnB1dEJsb2NrLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBjb250YWluZXJDYXJhYy5hcHBlbmQoY2xvbmUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpcXXDqVwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFNVUFBSRVNTSU9OIEQnVU5FIElNQUdFXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJQYWdlIGNoYXJnw6llXCIpO1xyXG4gICAgdmFyIGRlbEltZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxJbWdCdG4nKTtcclxuICAgIGRlbEltZ0J0bi5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHZhciBpdGVtSWQgPSBidG4uZ2V0QXR0cmlidXRlKCdpbWdJZCcpO1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbihkYXRhLCByZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgPT0gJ2dvb2QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZW1hbmRlIGVudm95w6llXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlbWFuZGUgcmVmdXPDqWVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaHR0cFJlcXVlc3Qub3BlbihcIlBPU1RcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICdpbWdJZCc6aXRlbUlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KVxyXG5cclxuXHJcblxyXG4vKiBUSU5ZIE1DRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbnRpbnltY2UuaW5pdCh7XHJcbiAgICBzZWxlY3RvcjogJyNteXRleHRhcmVhJ1xyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsidGFicyIsInJlcXVpcmUiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJhY0J0biIsImlucHV0QmxvY2siLCJjb250YWluZXJDYXJhYyIsIm9uY2xpY2siLCJjbG9uZSIsImNsb25lTm9kZSIsImFwcGVuZCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiZGVsSW1nQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJlIiwicHJldmVudERlZmF1bHQiLCJodHRwUmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0IiwiaXRlbUlkIiwiZ2V0QXR0cmlidXRlIiwib25yZWFkeXN0YXRlY2hhbmdlIiwiZGF0YSIsInJlc3BvbnNlIiwib3BlbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNlbmQiLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==