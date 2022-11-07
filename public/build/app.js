"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_web_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/web/app.scss */ "./assets/styles/web/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var parallax_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! parallax-image */ "./node_modules/parallax-image/parallax-image.js");
/* harmony import */ var parallax_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(parallax_image__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");




/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application

 // AOS
// ------------------------------------------------------------------



aos__WEBPACK_IMPORTED_MODULE_5___default().init({
  duration: 1000,
  delay: 200,
  debounceDelay: 50,
  once: false,
  mirror: true
}); // RELOAD PAGE
// ------------------------------------------------------------------

/*import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';

const swup = new Swup({
  plugins: [new SwupBodyClassPlugin()]

});

document.addEventListener('swup:contentReplaced', function(){
  AOS.init();
  swiperFunctions();
  OpenLayersMap();
})*/
// OPEN LAYERS
// ------------------------------------------------------------------







if (document.querySelector(".partners-map") != undefined) {
  var aubLonLat = [4.389863, 44.620909];
  var aubWebMercator = (0,ol_proj__WEBPACK_IMPORTED_MODULE_7__.fromLonLat)(aubLonLat);
  var map = new ol_Map__WEBPACK_IMPORTED_MODULE_8__["default"]({
    target: 'map',
    layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_9__["default"]({
      source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_10__["default"]()
    })],
    view: new ol_View__WEBPACK_IMPORTED_MODULE_11__["default"]({
      center: aubWebMercator,
      zoom: 15
    })
  });
} // Parallax
// ------------------------------------------------------------------


 // Header
// ------------------------------------------------------------------

if (document.querySelector('.header-base') != undefined) {
  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var headerSite = document.getElementsByClassName('header-base')[0];

    if (scrollPosition >= 50) {
      headerSite.classList.add('scrolled');
    } else {
      headerSite.classList.remove('scrolled');
    }
  });
} // Navigation
// ------------------------------------------------------------------


var navButton = document.querySelector('.toggle-nav');
var navLinks = document.querySelectorAll('a');
var navElements = ['.btn-nav', '.primary-menu'];

navButton.onclick = function () {
  for (var i = 0; i < navElements.length; i++) {
    document.querySelector(navElements[i]).classList.toggle('active');
  }

  document.querySelector('body').classList.toggle('nav-opened');
};

navLinks.forEach(function (navLink) {
  navLink.onclick = function () {
    for (var i = 0; i < navElements.length; i++) {
      document.querySelector(navElements[i]).classList.remove('active');
    }

    document.querySelector('body').classList.remove('nav-opened');
  };
}); // Sous-Navigation
// ------------------------------------------------------------------

var subNavButtons = document.querySelectorAll('.sub-menu-btn');
subNavButtons.forEach(function (subNavButton) {
  subNavButton.onclick = function () {
    if (subNavButton.classList.contains('active')) {
      subNavButton.classList.remove('active');
    } else {
      subNavButtons.forEach(function (subNavButton) {
        subNavButton.classList.remove('active');
      });
      subNavButton.classList.add('active');
    }
  };
}); // Contact Form
// ------------------------------------------------------------------

var contactButton = document.querySelectorAll('.toggle-contact');
var contactBlock = document.querySelector('.contact-block');
contactButton.forEach(function (button) {
  button.onclick = function () {
    contactBlock.classList.toggle('active');
    document.querySelector('body').classList.toggle('contact-opened');
  };
});
var contactBtn1 = document.querySelector('#contactBtn1');
var contactBtn2 = document.querySelector('#contactBtn2');
var contactBtn3 = document.querySelector('#contactBtn3');
console.log(document.querySelectorAll("input[name='contact_form[gender]']").length);

contactBtn1.onclick = function () {
  document.querySelector("#contact-tab-1").classList.add('active');
  document.querySelector("#contact-tab-2").classList.remove('active');
  document.querySelector("#contact-tab-3").classList.remove('active');
  contactBtn1.classList.remove('full');
};

contactBtn2.onclick = function () {
  if (document.querySelectorAll("input[name='contact_form[gender]']:checked").length < 1) {
    return false;
  }

  if (document.querySelector('#contact_form_lname').value == "") {
    return false;
  }

  if (document.querySelector('#contact_form_fname').value == "") {
    return false;
  }

  if (document.querySelector('#contact_form_phone').value == "") {
    return false;
  }

  if (document.querySelector('#contact_form_email').value == "") {
    return false;
  }

  document.querySelector("#contact-tab-1").classList.remove('active');
  document.querySelector("#contact-tab-2").classList.add('active');
  document.querySelector("#contact-tab-3").classList.remove('active');
  contactBtn1.classList.add('full');
  contactBtn2.classList.remove('full');
};

contactBtn3.onclick = function () {
  if (document.querySelectorAll("input[name='contact_form[customer_type]']:checked").length < 1) {
    return false;
  }

  document.querySelector("#contact-tab-1").classList.remove('active');
  document.querySelector("#contact-tab-2").classList.remove('active');
  document.querySelector("#contact-tab-3").classList.add('active');
  contactBtn2.classList.add('full');
}; // Tabs
// ------------------------------------------------------------------


var tabs = __webpack_require__(/*! tabs */ "./node_modules/tabs/index.js");

var container = document.querySelector('.tab-container');
tabs(container);

if (document.querySelector('.product-block-2') != undefined) {
  var productTabscontainer = document.querySelector('.product-block-2');
  tabs(productTabscontainer);
}

if (document.querySelector('.partners-container') != undefined) {
  var partnersTabscontainer = document.querySelector('.partners-container');
  tabs(partnersTabscontainer);
}

if (document.querySelector('.sav-container') != undefined) {
  var partnersTabscontainer = document.querySelector('.sav-container');
  tabs(partnersTabscontainer);
}

if (document.querySelector('.options-container') != undefined) {
  var optionsContainer = document.querySelector('.options-container');
  tabs(optionsContainer);
} // Post
// ------------------------------------------------------------------


var postArrow = document.querySelector('.scroll-down-post');

if (postArrow != undefined) {
  console.log("trouvé");
  postArrow.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  var headerHeight = document.querySelector("header").offsetHeight;
  var offsetTop = document.querySelector("#post-content").offsetTop - headerHeight;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
} // Swiper
// ------------------------------------------------------------------





var swiperLastNews = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.posts', {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      centeredSlides: false,
      slidesPerView: 2
    },
    1200: {
      centeredSlides: true,
      slidesPerView: 3
    }
  }
});
var swiperDoc = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.product-doc-list', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Navigation],
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-doc-button-next',
    prevEl: '.swiper-doc-button-prev'
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      centeredSlides: false,
      loop: true
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
      loop: true
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: true,
      loop: true
    }
  }
});
var swiperLastsEvents = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.home-timeline-container', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Navigation],
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: '.chrono-swiper-button-next',
    prevEl: '.chrono-swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1200: {
      spaceBetween: 60,
      slidesPerView: 3
    }
  }
});
var chrono = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.chrono-swiper-1', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Pagination],
  spaceBetween: 30,
  pagination: {
    el: ".chrono-pagination-1",
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 1
    },
    1200: {
      spaceBetween: 60,
      slidesPerView: 3
    }
  }
});
var swiperBlocksInfos1 = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.slider-mobile-container', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Pagination],
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var swiperProductsColoris = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.slider-coloris', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Navigation],
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true
});
var swiperProductsAccessories = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.slider-accessoiries', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Pagination],
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true
});

/***/ }),

/***/ "./assets/styles/web/app.scss":
/*!************************************!*\
  !*** ./assets/styles/web/app.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_modules_es_array-a24d23","vendors-node_modules_swup_debug-plugin_lib_index_js-node_modules_swup_fade-theme_lib_index_js-701958","vendors-node_modules_aos_dist_aos_js-node_modules_core-js_modules_es_array_for-each_js-node_m-4dae5a","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_bo-c9ceb2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxDQUhnQztFQU81Q1YsV0FBVyxFQUFFO0lBQ1gsS0FBSztNQUNISixhQUFhLEVBQUU7SUFEWixDQURNO0lBSVgsTUFBTTtNQUNKRyxZQUFZLEVBQUUsRUFEVjtNQUVKSCxhQUFhLEVBQUU7SUFGWDtFQUpLO0FBUCtCLENBQS9CLENBQWY7QUFtQkEsSUFBTWUsa0JBQWtCLEdBQUcsSUFBSW5CLCtDQUFKLENBQVcsMEJBQVgsRUFBdUM7RUFDOURVLE9BQU8sRUFBRSxDQUFDVCwrQ0FBRCxDQURxRDtFQUU5REcsYUFBYSxFQUFFLE1BRitDO0VBRzlEQyxjQUFjLEVBQUUsSUFIOEM7RUFJOURFLFlBQVksRUFBRSxFQUpnRDtFQUs5REQsSUFBSSxFQUFFLElBTHdEO0VBTTlEVSxVQUFVLEVBQUU7SUFDVkMsRUFBRSxFQUFFLG9CQURNO0lBRVZDLFNBQVMsRUFBRTtFQUZEO0FBTmtELENBQXZDLENBQTNCO0FBYUEsSUFBTUUscUJBQXFCLEdBQUcsSUFBSXBCLCtDQUFKLENBQVcsaUJBQVgsRUFBOEI7RUFDeERVLE9BQU8sRUFBRSxDQUFDUiwrQ0FBRCxDQUQrQztFQUV4REUsYUFBYSxFQUFFLE1BRnlDO0VBR3hEQyxjQUFjLEVBQUUsSUFId0M7RUFJeERDLElBQUksRUFBRTtBQUprRCxDQUE5QixDQUE5QjtBQVFBLElBQU1lLHlCQUF5QixHQUFHLElBQUlyQiwrQ0FBSixDQUFXLHNCQUFYLEVBQW1DO0VBQ2pFVSxPQUFPLEVBQUUsQ0FBQ1QsK0NBQUQsQ0FEd0Q7RUFFakVHLGFBQWEsRUFBRSxNQUZrRDtFQUdqRUMsY0FBYyxFQUFFLElBSGlEO0VBSWpFQyxJQUFJLEVBQUU7QUFKMkQsQ0FBbkMsQ0FBbEM7Ozs7Ozs7Ozs7O0FDNVdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3dlYi9hcHAuc2Nzcz8yYTg0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL3dlYi9hcHAuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cblxuLy8gQU9TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XG5BT1MuaW5pdCh7XG4gIGR1cmF0aW9uOiAxMDAwLFxuICBkZWxheTogMjAwLFxuICBkZWJvdW5jZURlbGF5OiA1MCxcbiAgb25jZTogZmFsc2UsXG4gIG1pcnJvcjogdHJ1ZVxufSk7XG5cblxuXG4vLyBSRUxPQUQgUEFHRVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKmltcG9ydCBTd3VwIGZyb20gJ3N3dXAnO1xuaW1wb3J0IFN3dXBCb2R5Q2xhc3NQbHVnaW4gZnJvbSAnQHN3dXAvYm9keS1jbGFzcy1wbHVnaW4nO1xuXG5jb25zdCBzd3VwID0gbmV3IFN3dXAoe1xuICBwbHVnaW5zOiBbbmV3IFN3dXBCb2R5Q2xhc3NQbHVnaW4oKV1cblxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N3dXA6Y29udGVudFJlcGxhY2VkJywgZnVuY3Rpb24oKXtcbiAgQU9TLmluaXQoKTtcbiAgc3dpcGVyRnVuY3Rpb25zKCk7XG4gIE9wZW5MYXllcnNNYXAoKTtcbn0pKi9cblxuXG4vLyBPUEVOIExBWUVSU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgTWFwIGZyb20gJ29sL01hcCc7XG5pbXBvcnQgVmlldyBmcm9tICdvbC9WaWV3JztcbmltcG9ydCBUaWxlTGF5ZXIgZnJvbSAnb2wvbGF5ZXIvVGlsZSc7XG5pbXBvcnQgT1NNIGZyb20gJ29sL3NvdXJjZS9PU00nO1xuaW1wb3J0IHtmcm9tTG9uTGF0fSBmcm9tICdvbC9wcm9qJztcblxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJ0bmVycy1tYXBcIikgIT0gdW5kZWZpbmVkKSB7XG4gIGNvbnN0IGF1YkxvbkxhdCA9IFs0LjM4OTg2MywgNDQuNjIwOTA5XTtcbiAgY29uc3QgYXViV2ViTWVyY2F0b3IgPSBmcm9tTG9uTGF0KGF1YkxvbkxhdCk7XG4gIFxuICBjb25zdCBtYXAgPSBuZXcgTWFwKHtcbiAgICB0YXJnZXQ6ICdtYXAnLFxuICAgIGxheWVyczogW1xuICAgICAgbmV3IFRpbGVMYXllcih7XG4gICAgICAgIHNvdXJjZTogbmV3IE9TTSgpXG4gICAgICB9KVxuICAgIF0sXG4gICAgdmlldzogbmV3IFZpZXcoe1xuICAgICAgY2VudGVyOiBhdWJXZWJNZXJjYXRvcixcbiAgICAgIHpvb206IDE1LFxuICAgIH0pXG4gIH0pXG59XG5cblxuXG5cblxuLy8gUGFyYWxsYXhcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0ICdwYXJhbGxheC1pbWFnZSc7XG5cblxuLy8gSGVhZGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJhc2UnKSAhPSB1bmRlZmluZWQpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgdmFyIGhlYWRlclNpdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXItYmFzZScpWzBdO1xuXG4gICAgaWYgKHNjcm9sbFBvc2l0aW9uID49IDUwKSB7XG4gICAgICBoZWFkZXJTaXRlLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlclNpdGUuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQnKTtcbiAgICB9XG4gIH0pXG59XG5cblxuXG4vLyBOYXZpZ2F0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBuYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLW5hdicpO1xudmFyIG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xubGV0IG5hdkVsZW1lbnRzID0gWycuYnRuLW5hdicsICcucHJpbWFyeS1tZW51J107XG5cbm5hdkJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdkVsZW1lbnRzW2ldKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgfVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LW9wZW5lZCcpO1xufVxuXG5uYXZMaW5rcy5mb3JFYWNoKG5hdkxpbmsgPT4ge1xuICBuYXZMaW5rLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXZFbGVtZW50c1tpXSkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3BlbmVkJyk7XG4gIH1cbn0pO1xuXG5cblxuLy8gU291cy1OYXZpZ2F0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBzdWJOYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Yi1tZW51LWJ0bicpO1xuXG5zdWJOYXZCdXR0b25zLmZvckVhY2goc3ViTmF2QnV0dG9uID0+IHtcbiAgc3ViTmF2QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSBcbiAgICB7XG4gICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSBcbiAgICBlbHNlIFxuICAgIHtcbiAgICAgIHN1Yk5hdkJ1dHRvbnMuZm9yRWFjaChzdWJOYXZCdXR0b24gPT4ge1xuICAgICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuXG4vLyBDb250YWN0IEZvcm1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlLWNvbnRhY3QnKTtcbnZhciBjb250YWN0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1ibG9jaycpO1xuY29udGFjdEJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29udGFjdEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdjb250YWN0LW9wZW5lZCcpO1xuICB9XG59KTtcblxudmFyIGNvbnRhY3RCdG4xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RCdG4xJyk7XG52YXIgY29udGFjdEJ0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdEJ0bjInKTtcbnZhciBjb250YWN0QnRuMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnRuMycpO1xuXG5jb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nY29udGFjdF9mb3JtW2dlbmRlcl0nXVwiKS5sZW5ndGgpO1xuXG5jb250YWN0QnRuMS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTFcIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMlwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0zXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gIGNvbnRhY3RCdG4xLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwnKTtcbn1cblxuY29udGFjdEJ0bjIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdjb250YWN0X2Zvcm1bZ2VuZGVyXSddOmNoZWNrZWRcIikubGVuZ3RoIDwgMSkge3JldHVybiBmYWxzZTt9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX2xuYW1lJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX2ZuYW1lJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX3Bob25lJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX2VtYWlsJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0xXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTJcIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItM1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICBjb250YWN0QnRuMS5jbGFzc0xpc3QuYWRkKCdmdWxsJyk7XG4gIGNvbnRhY3RCdG4yLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwnKTtcbn07XG5cbmNvbnRhY3RCdG4zLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nY29udGFjdF9mb3JtW2N1c3RvbWVyX3R5cGVdJ106Y2hlY2tlZFwiKS5sZW5ndGggPCAxKSB7cmV0dXJuIGZhbHNlO31cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTFcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMlwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0zXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gIGNvbnRhY3RCdG4yLmNsYXNzTGlzdC5hZGQoJ2Z1bGwnKTtcbn07XG5cblxuXG5cblxuXG5cblxuLy8gVGFic1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgdGFicyA9IHJlcXVpcmUoJ3RhYnMnKTtcbnZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRhaW5lcicpXG50YWJzKGNvbnRhaW5lcik7XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1ibG9jay0yJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBwcm9kdWN0VGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJsb2NrLTInKVxuICB0YWJzKHByb2R1Y3RUYWJzY29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVycy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIHBhcnRuZXJzVGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVycy1jb250YWluZXInKVxuICB0YWJzKHBhcnRuZXJzVGFic2NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2LWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgcGFydG5lcnNUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdi1jb250YWluZXInKVxuICB0YWJzKHBhcnRuZXJzVGFic2NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1jb250YWluZXInKVxuICB0YWJzKG9wdGlvbnNDb250YWluZXIpO1xufVxuXG5cblxuXG4vLyBQb3N0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBwb3N0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWRvd24tcG9zdCcpXG5pZiAocG9zdEFycm93ICE9IHVuZGVmaW5lZCkge1xuICBjb25zb2xlLmxvZyhcInRyb3V2w6lcIik7XG4gIHBvc3RBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG59XG5cbiBcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IG9mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9zdC1jb250ZW50XCIpLm9mZnNldFRvcCAtIGhlYWRlckhlaWdodDtcbiAgc2Nyb2xsKHtcbiAgICB0b3A6IG9mZnNldFRvcCxcbiAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICB9KTtcbn1cblxuXG5cbi8vIFN3aXBlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgU3dpcGVyLCB7IFBhZ2luYXRpb24sIE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXInO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcblxuY29uc3Qgc3dpcGVyTGFzdE5ld3MgPSBuZXcgU3dpcGVyKCcucG9zdHMnLCB7XG4gIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgbG9vcDogdHJ1ZSxcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAxMDI0OiB7XG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIH1cbiAgfVxufSlcblxuY29uc3Qgc3dpcGVyRG9jID0gbmV3IFN3aXBlcignLnByb2R1Y3QtZG9jLWxpc3QnLCB7XG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWRvYy1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1kb2MtYnV0dG9uLXByZXYnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDY0MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgfSxcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICBsb29wOiB0cnVlLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICB9XG4gIH1cbn0pO1xuXG5cbmNvbnN0IHN3aXBlckxhc3RzRXZlbnRzID0gbmV3IFN3aXBlcignLmhvbWUtdGltZWxpbmUtY29udGFpbmVyJywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9LFxuICB9XG59KTtcblxuXG5jb25zdCBjaHJvbm8gPSBuZXcgU3dpcGVyKCcuY2hyb25vLXN3aXBlci0xJywge1xuICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIuY2hyb25vLXBhZ2luYXRpb24tMVwiLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9LFxuICB9XG59KTtcblxuXG5jb25zdCBzd2lwZXJCbG9ja3NJbmZvczEgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLW1vYmlsZS1jb250YWluZXInLCB7XG4gICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxufSk7XG5cblxuY29uc3Qgc3dpcGVyUHJvZHVjdHNDb2xvcmlzID0gbmV3IFN3aXBlcignLnNsaWRlci1jb2xvcmlzJywge1xuICAgIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBsb29wOiB0cnVlLFxufSk7XG5cblxuY29uc3Qgc3dpcGVyUHJvZHVjdHNBY2Nlc3NvcmllcyA9IG5ldyBTd2lwZXIoJy5zbGlkZXItYWNjZXNzb2lyaWVzJywge1xuICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBsb29wOiB0cnVlLFxufSk7XG5cbiAgXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQU9TIiwiaW5pdCIsImR1cmF0aW9uIiwiZGVsYXkiLCJkZWJvdW5jZURlbGF5Iiwib25jZSIsIm1pcnJvciIsIk1hcCIsIlZpZXciLCJUaWxlTGF5ZXIiLCJPU00iLCJmcm9tTG9uTGF0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5kZWZpbmVkIiwiYXViTG9uTGF0IiwiYXViV2ViTWVyY2F0b3IiLCJtYXAiLCJ0YXJnZXQiLCJsYXllcnMiLCJzb3VyY2UiLCJ2aWV3IiwiY2VudGVyIiwiem9vbSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFkiLCJoZWFkZXJTaXRlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm5hdkJ1dHRvbiIsIm5hdkxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdkVsZW1lbnRzIiwib25jbGljayIsImkiLCJsZW5ndGgiLCJ0b2dnbGUiLCJmb3JFYWNoIiwibmF2TGluayIsInN1Yk5hdkJ1dHRvbnMiLCJzdWJOYXZCdXR0b24iLCJjb250YWlucyIsImNvbnRhY3RCdXR0b24iLCJjb250YWN0QmxvY2siLCJidXR0b24iLCJjb250YWN0QnRuMSIsImNvbnRhY3RCdG4yIiwiY29udGFjdEJ0bjMiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJ0YWJzIiwicmVxdWlyZSIsImNvbnRhaW5lciIsInByb2R1Y3RUYWJzY29udGFpbmVyIiwicGFydG5lcnNUYWJzY29udGFpbmVyIiwib3B0aW9uc0NvbnRhaW5lciIsInBvc3RBcnJvdyIsImNsaWNrSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhlYWRlckhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFRvcCIsInNjcm9sbCIsInRvcCIsImJlaGF2aW9yIiwiU3dpcGVyIiwiUGFnaW5hdGlvbiIsIk5hdmlnYXRpb24iLCJzd2lwZXJMYXN0TmV3cyIsInNsaWRlc1BlclZpZXciLCJjZW50ZXJlZFNsaWRlcyIsImxvb3AiLCJzcGFjZUJldHdlZW4iLCJicmVha3BvaW50cyIsInN3aXBlckRvYyIsIm1vZHVsZXMiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwic3dpcGVyTGFzdHNFdmVudHMiLCJjaHJvbm8iLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJzd2lwZXJCbG9ja3NJbmZvczEiLCJzd2lwZXJQcm9kdWN0c0NvbG9yaXMiLCJzd2lwZXJQcm9kdWN0c0FjY2Vzc29yaWVzIl0sInNvdXJjZVJvb3QiOiIifQ==