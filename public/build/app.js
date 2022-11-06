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
      slidesPerView: 2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxDQUhnQztFQU81Q1YsV0FBVyxFQUFFO0lBQ1gsS0FBSztNQUNISixhQUFhLEVBQUU7SUFEWixDQURNO0lBSVgsTUFBTTtNQUNKRyxZQUFZLEVBQUUsRUFEVjtNQUVKSCxhQUFhLEVBQUU7SUFGWDtFQUpLO0FBUCtCLENBQS9CLENBQWY7QUFtQkEsSUFBTWUsa0JBQWtCLEdBQUcsSUFBSW5CLCtDQUFKLENBQVcsMEJBQVgsRUFBdUM7RUFDOURVLE9BQU8sRUFBRSxDQUFDVCwrQ0FBRCxDQURxRDtFQUU5REcsYUFBYSxFQUFFLE1BRitDO0VBRzlEQyxjQUFjLEVBQUUsSUFIOEM7RUFJOURFLFlBQVksRUFBRSxFQUpnRDtFQUs5REQsSUFBSSxFQUFFLElBTHdEO0VBTTlEVSxVQUFVLEVBQUU7SUFDVkMsRUFBRSxFQUFFLG9CQURNO0lBRVZDLFNBQVMsRUFBRTtFQUZEO0FBTmtELENBQXZDLENBQTNCO0FBYUEsSUFBTUUscUJBQXFCLEdBQUcsSUFBSXBCLCtDQUFKLENBQVcsaUJBQVgsRUFBOEI7RUFDeERVLE9BQU8sRUFBRSxDQUFDUiwrQ0FBRCxDQUQrQztFQUV4REUsYUFBYSxFQUFFLE1BRnlDO0VBR3hEQyxjQUFjLEVBQUUsSUFId0M7RUFJeERDLElBQUksRUFBRTtBQUprRCxDQUE5QixDQUE5QjtBQVFBLElBQU1lLHlCQUF5QixHQUFHLElBQUlyQiwrQ0FBSixDQUFXLHNCQUFYLEVBQW1DO0VBQ2pFVSxPQUFPLEVBQUUsQ0FBQ1QsK0NBQUQsQ0FEd0Q7RUFFakVHLGFBQWEsRUFBRSxNQUZrRDtFQUdqRUMsY0FBYyxFQUFFLElBSGlEO0VBSWpFQyxJQUFJLEVBQUU7QUFKMkQsQ0FBbkMsQ0FBbEM7Ozs7Ozs7Ozs7O0FDNVdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3dlYi9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy93ZWIvYXBwLnNjc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5cbi8vIEFPU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xuQU9TLmluaXQoe1xuICBkdXJhdGlvbjogMTAwMCxcbiAgZGVsYXk6IDIwMCxcbiAgZGVib3VuY2VEZWxheTogNTAsXG4gIG9uY2U6IGZhbHNlLFxuICBtaXJyb3I6IHRydWVcbn0pO1xuXG5cblxuLy8gUkVMT0FEIFBBR0Vcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyppbXBvcnQgU3d1cCBmcm9tICdzd3VwJztcbmltcG9ydCBTd3VwQm9keUNsYXNzUGx1Z2luIGZyb20gJ0Bzd3VwL2JvZHktY2xhc3MtcGx1Z2luJztcblxuY29uc3Qgc3d1cCA9IG5ldyBTd3VwKHtcbiAgcGx1Z2luczogW25ldyBTd3VwQm9keUNsYXNzUGx1Z2luKCldXG5cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzd3VwOmNvbnRlbnRSZXBsYWNlZCcsIGZ1bmN0aW9uKCl7XG4gIEFPUy5pbml0KCk7XG4gIHN3aXBlckZ1bmN0aW9ucygpO1xuICBPcGVuTGF5ZXJzTWFwKCk7XG59KSovXG5cblxuLy8gT1BFTiBMQVlFUlNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IE1hcCBmcm9tICdvbC9NYXAnO1xuaW1wb3J0IFZpZXcgZnJvbSAnb2wvVmlldyc7XG5pbXBvcnQgVGlsZUxheWVyIGZyb20gJ29sL2xheWVyL1RpbGUnO1xuaW1wb3J0IE9TTSBmcm9tICdvbC9zb3VyY2UvT1NNJztcbmltcG9ydCB7ZnJvbUxvbkxhdH0gZnJvbSAnb2wvcHJvaic7XG5cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFydG5lcnMtbWFwXCIpICE9IHVuZGVmaW5lZCkge1xuICBjb25zdCBhdWJMb25MYXQgPSBbNC4zODk4NjMsIDQ0LjYyMDkwOV07XG4gIGNvbnN0IGF1YldlYk1lcmNhdG9yID0gZnJvbUxvbkxhdChhdWJMb25MYXQpO1xuICBcbiAgY29uc3QgbWFwID0gbmV3IE1hcCh7XG4gICAgdGFyZ2V0OiAnbWFwJyxcbiAgICBsYXllcnM6IFtcbiAgICAgIG5ldyBUaWxlTGF5ZXIoe1xuICAgICAgICBzb3VyY2U6IG5ldyBPU00oKVxuICAgICAgfSlcbiAgICBdLFxuICAgIHZpZXc6IG5ldyBWaWV3KHtcbiAgICAgIGNlbnRlcjogYXViV2ViTWVyY2F0b3IsXG4gICAgICB6b29tOiAxNSxcbiAgICB9KVxuICB9KVxufVxuXG5cblxuXG5cbi8vIFBhcmFsbGF4XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCAncGFyYWxsYXgtaW1hZ2UnO1xuXG5cbi8vIEhlYWRlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1iYXNlJykgIT0gdW5kZWZpbmVkKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIHZhciBoZWFkZXJTaXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyLWJhc2UnKVswXTtcblxuICAgIGlmIChzY3JvbGxQb3NpdGlvbiA+PSA1MCkge1xuICAgICAgaGVhZGVyU2l0ZS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXJTaXRlLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkJyk7XG4gICAgfVxuICB9KVxufVxuXG5cblxuLy8gTmF2aWdhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgbmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1uYXYnKTtcbnZhciBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcbmxldCBuYXZFbGVtZW50cyA9IFsnLmJ0bi1uYXYnLCAnLnByaW1hcnktbWVudSddO1xuXG5uYXZCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXZFbGVtZW50c1tpXSkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIH1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ25hdi1vcGVuZWQnKTtcbn1cblxubmF2TGlua3MuZm9yRWFjaChuYXZMaW5rID0+IHtcbiAgbmF2TGluay5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2RWxlbWVudHNbaV0pLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW5lZCcpO1xuICB9XG59KTtcblxuXG5cbi8vIFNvdXMtTmF2aWdhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgc3ViTmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWItbWVudS1idG4nKTtcblxuc3ViTmF2QnV0dG9ucy5mb3JFYWNoKHN1Yk5hdkJ1dHRvbiA9PiB7XG4gIHN1Yk5hdkJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdWJOYXZCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgXG4gICAge1xuICAgICAgc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0gXG4gICAgZWxzZSBcbiAgICB7XG4gICAgICBzdWJOYXZCdXR0b25zLmZvckVhY2goc3ViTmF2QnV0dG9uID0+IHtcbiAgICAgICAgc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICB9XG59KTtcblxuXG5cblxuLy8gQ29udGFjdCBGb3JtXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1jb250YWN0Jyk7XG52YXIgY29udGFjdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtYmxvY2snKTtcbmNvbnRhY3RCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRhY3RCbG9jay5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGFjdC1vcGVuZWQnKTtcbiAgfVxufSk7XG5cbnZhciBjb250YWN0QnRuMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnRuMScpO1xudmFyIGNvbnRhY3RCdG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RCdG4yJyk7XG52YXIgY29udGFjdEJ0bjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdEJ0bjMnKTtcblxuY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9J2NvbnRhY3RfZm9ybVtnZW5kZXJdJ11cIikubGVuZ3RoKTtcblxuY29udGFjdEJ0bjEub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0xXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTJcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItM1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICBjb250YWN0QnRuMS5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsJyk7XG59XG5cbmNvbnRhY3RCdG4yLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nY29udGFjdF9mb3JtW2dlbmRlcl0nXTpjaGVja2VkXCIpLmxlbmd0aCA8IDEpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9sbmFtZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9mbmFtZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9waG9uZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9lbWFpbCcpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0yXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTNcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgY29udGFjdEJ0bjEuY2xhc3NMaXN0LmFkZCgnZnVsbCcpO1xuICBjb250YWN0QnRuMi5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsJyk7XG59O1xuXG5jb250YWN0QnRuMy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9J2NvbnRhY3RfZm9ybVtjdXN0b21lcl90eXBlXSddOmNoZWNrZWRcIikubGVuZ3RoIDwgMSkge3JldHVybiBmYWxzZTt9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0xXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTJcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItM1wiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICBjb250YWN0QnRuMi5jbGFzc0xpc3QuYWRkKCdmdWxsJyk7XG59O1xuXG5cblxuXG5cblxuXG5cbi8vIFRhYnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIHRhYnMgPSByZXF1aXJlKCd0YWJzJyk7XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1jb250YWluZXInKVxudGFicyhjb250YWluZXIpO1xuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYmxvY2stMicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgcHJvZHVjdFRhYnNjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1ibG9jay0yJylcbiAgdGFicyhwcm9kdWN0VGFic2NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnMtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBwYXJ0bmVyc1RhYnNjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnMtY29udGFpbmVyJylcbiAgdGFicyhwYXJ0bmVyc1RhYnNjb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdi1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIHBhcnRuZXJzVGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXYtY29udGFpbmVyJylcbiAgdGFicyhwYXJ0bmVyc1RhYnNjb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtY29udGFpbmVyJylcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcbn1cblxuXG5cblxuLy8gUG9zdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgcG9zdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC1kb3duLXBvc3QnKVxuaWYgKHBvc3RBcnJvdyAhPSB1bmRlZmluZWQpIHtcbiAgY29uc29sZS5sb2coXCJ0cm91dsOpXCIpO1xuICBwb3N0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xufVxuXG4gXG5mdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikub2Zmc2V0SGVpZ2h0O1xuICBjb25zdCBvZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bvc3QtY29udGVudFwiKS5vZmZzZXRUb3AgLSBoZWFkZXJIZWlnaHQ7XG4gIHNjcm9sbCh7XG4gICAgdG9wOiBvZmZzZXRUb3AsXG4gICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgfSk7XG59XG5cblxuXG4vLyBTd2lwZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFN3aXBlciwgeyBQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uIH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XG5cbmNvbnN0IHN3aXBlckxhc3ROZXdzID0gbmV3IFN3aXBlcignLnBvc3RzJywge1xuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gIGxvb3A6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMTAyNDoge1xuICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IHN3aXBlckRvYyA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0LWRvYy1saXN0Jywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1kb2MtYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zd2lwZXItZG9jLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA2NDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICBsb29wOiB0cnVlLFxuICAgIH0sXG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgfVxuICB9XG59KTtcblxuXG5jb25zdCBzd2lwZXJMYXN0c0V2ZW50cyA9IG5ldyBTd2lwZXIoJy5ob21lLXRpbWVsaW5lLWNvbnRhaW5lcicsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgc3BhY2VCZXR3ZWVuOiA2MCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgfSxcbiAgfVxufSk7XG5cblxuY29uc3QgY2hyb25vID0gbmV3IFN3aXBlcignLmNocm9uby1zd2lwZXItMScsIHtcbiAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLmNocm9uby1wYWdpbmF0aW9uLTFcIixcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgc3BhY2VCZXR3ZWVuOiA2MCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgfSxcbiAgfVxufSk7XG5cblxuY29uc3Qgc3dpcGVyQmxvY2tzSW5mb3MxID0gbmV3IFN3aXBlcignLnNsaWRlci1tb2JpbGUtY29udGFpbmVyJywge1xuICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIGxvb3A6IHRydWUsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbn0pO1xuXG5cbmNvbnN0IHN3aXBlclByb2R1Y3RzQ29sb3JpcyA9IG5ldyBTd2lwZXIoJy5zbGlkZXItY29sb3JpcycsIHtcbiAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbn0pO1xuXG5cbmNvbnN0IHN3aXBlclByb2R1Y3RzQWNjZXNzb3JpZXMgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWFjY2Vzc29pcmllcycsIHtcbiAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbn0pO1xuXG4gIFxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkFPUyIsImluaXQiLCJkdXJhdGlvbiIsImRlbGF5IiwiZGVib3VuY2VEZWxheSIsIm9uY2UiLCJtaXJyb3IiLCJNYXAiLCJWaWV3IiwiVGlsZUxheWVyIiwiT1NNIiwiZnJvbUxvbkxhdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVuZGVmaW5lZCIsImF1YkxvbkxhdCIsImF1YldlYk1lcmNhdG9yIiwibWFwIiwidGFyZ2V0IiwibGF5ZXJzIiwic291cmNlIiwidmlldyIsImNlbnRlciIsInpvb20iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxZIiwiaGVhZGVyU2l0ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuYXZCdXR0b24iLCJuYXZMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXZFbGVtZW50cyIsIm9uY2xpY2siLCJpIiwibGVuZ3RoIiwidG9nZ2xlIiwiZm9yRWFjaCIsIm5hdkxpbmsiLCJzdWJOYXZCdXR0b25zIiwic3ViTmF2QnV0dG9uIiwiY29udGFpbnMiLCJjb250YWN0QnV0dG9uIiwiY29udGFjdEJsb2NrIiwiYnV0dG9uIiwiY29udGFjdEJ0bjEiLCJjb250YWN0QnRuMiIsImNvbnRhY3RCdG4zIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwidGFicyIsInJlcXVpcmUiLCJjb250YWluZXIiLCJwcm9kdWN0VGFic2NvbnRhaW5lciIsInBhcnRuZXJzVGFic2NvbnRhaW5lciIsIm9wdGlvbnNDb250YWluZXIiLCJwb3N0QXJyb3ciLCJjbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJoZWFkZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRUb3AiLCJzY3JvbGwiLCJ0b3AiLCJiZWhhdmlvciIsIlN3aXBlciIsIlBhZ2luYXRpb24iLCJOYXZpZ2F0aW9uIiwic3dpcGVyTGFzdE5ld3MiLCJzbGlkZXNQZXJWaWV3IiwiY2VudGVyZWRTbGlkZXMiLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwiYnJlYWtwb2ludHMiLCJzd2lwZXJEb2MiLCJtb2R1bGVzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInN3aXBlckxhc3RzRXZlbnRzIiwiY2hyb25vIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwic3dpcGVyQmxvY2tzSW5mb3MxIiwic3dpcGVyUHJvZHVjdHNDb2xvcmlzIiwic3dpcGVyUHJvZHVjdHNBY2Nlc3NvcmllcyJdLCJzb3VyY2VSb290IjoiIn0=