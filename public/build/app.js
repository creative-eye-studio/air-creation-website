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
/* harmony import */ var parallax_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! parallax-image */ "./node_modules/parallax-image/parallax-image.js");
/* harmony import */ var parallax_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(parallax_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");




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
// Parallax
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





var swiperLastNews = new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.posts', {
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
var swiperDoc = new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.product-doc-list', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation],
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
var swiperLastsEvents = new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.home-timeline-container', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation],
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
var swiperChrono = new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.chrono-swiper-1', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation],
  spaceBetween: 30,
  navigation: {
    nextEl: '.chrono-swiper-button-next',
    prevEl: '.chrono-swiper-button-prev'
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
var swiperBlocksInfos1 = new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.slider-mobile-container', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination],
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var swiperProductsColoris = new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.slider-coloris', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation],
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true
});
var swiperProductsAccessories = new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.slider-accessoiries', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination],
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_modules_es_array-a24d23","vendors-node_modules_swup_debug-plugin_lib_index_js-node_modules_swup_fade-theme_lib_index_js-701958","vendors-node_modules_aos_dist_aos_js-node_modules_core-js_modules_es_array_for-each_js-node_m-ea97d2","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_bo-c9ceb2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxDQUQrQztFQUV4REUsYUFBYSxFQUFFLE1BRnlDO0VBR3hEQyxjQUFjLEVBQUUsSUFId0M7RUFJeERDLElBQUksRUFBRTtBQUprRCxDQUE5QixDQUE5QjtBQVFBLElBQU1lLHlCQUF5QixHQUFHLElBQUlyQiw4Q0FBSixDQUFXLHNCQUFYLEVBQW1DO0VBQ2pFVSxPQUFPLEVBQUUsQ0FBQ1QsOENBQUQsQ0FEd0Q7RUFFakVHLGFBQWEsRUFBRSxNQUZrRDtFQUdqRUMsY0FBYyxFQUFFLElBSGlEO0VBSWpFQyxJQUFJLEVBQUU7QUFKMkQsQ0FBbkMsQ0FBbEM7Ozs7Ozs7Ozs7O0FDL1VBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3dlYi9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy93ZWIvYXBwLnNjc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5cbi8vIEFPU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xuQU9TLmluaXQoe1xuICBkdXJhdGlvbjogMTAwMCxcbiAgZGVsYXk6IDIwMCxcbiAgZGVib3VuY2VEZWxheTogNTAsXG4gIG9uY2U6IGZhbHNlLFxuICBtaXJyb3I6IHRydWVcbn0pO1xuXG5cblxuLy8gUkVMT0FEIFBBR0Vcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyppbXBvcnQgU3d1cCBmcm9tICdzd3VwJztcbmltcG9ydCBTd3VwQm9keUNsYXNzUGx1Z2luIGZyb20gJ0Bzd3VwL2JvZHktY2xhc3MtcGx1Z2luJztcblxuY29uc3Qgc3d1cCA9IG5ldyBTd3VwKHtcbiAgcGx1Z2luczogW25ldyBTd3VwQm9keUNsYXNzUGx1Z2luKCldXG5cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzd3VwOmNvbnRlbnRSZXBsYWNlZCcsIGZ1bmN0aW9uKCl7XG4gIEFPUy5pbml0KCk7XG4gIHN3aXBlckZ1bmN0aW9ucygpO1xuICBPcGVuTGF5ZXJzTWFwKCk7XG59KSovXG5cblxuXG5cbi8vIFBhcmFsbGF4XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCAncGFyYWxsYXgtaW1hZ2UnO1xuXG5cbi8vIEhlYWRlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1iYXNlJykgIT0gdW5kZWZpbmVkKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIHZhciBoZWFkZXJTaXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyLWJhc2UnKVswXTtcblxuICAgIGlmIChzY3JvbGxQb3NpdGlvbiA+PSA1MCkge1xuICAgICAgaGVhZGVyU2l0ZS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXJTaXRlLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkJyk7XG4gICAgfVxuICB9KVxufVxuXG5cblxuLy8gTmF2aWdhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgbmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1uYXYnKTtcbnZhciBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcbmxldCBuYXZFbGVtZW50cyA9IFsnLmJ0bi1uYXYnLCAnLnByaW1hcnktbWVudSddO1xuXG5uYXZCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXZFbGVtZW50c1tpXSkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIH1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ25hdi1vcGVuZWQnKTtcbn1cblxubmF2TGlua3MuZm9yRWFjaChuYXZMaW5rID0+IHtcbiAgbmF2TGluay5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2RWxlbWVudHNbaV0pLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW5lZCcpO1xuICB9XG59KTtcblxuXG5cbi8vIFNvdXMtTmF2aWdhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgc3ViTmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWItbWVudS1idG4nKTtcblxuc3ViTmF2QnV0dG9ucy5mb3JFYWNoKHN1Yk5hdkJ1dHRvbiA9PiB7XG4gIHN1Yk5hdkJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdWJOYXZCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgXG4gICAge1xuICAgICAgc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0gXG4gICAgZWxzZSBcbiAgICB7XG4gICAgICBzdWJOYXZCdXR0b25zLmZvckVhY2goc3ViTmF2QnV0dG9uID0+IHtcbiAgICAgICAgc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICB9XG59KTtcblxuXG5cblxuLy8gQ29udGFjdCBGb3JtXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1jb250YWN0Jyk7XG52YXIgY29udGFjdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtYmxvY2snKTtcbmNvbnRhY3RCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRhY3RCbG9jay5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGFjdC1vcGVuZWQnKTtcbiAgfVxufSk7XG5cbnZhciBjb250YWN0QnRuMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnRuMScpO1xudmFyIGNvbnRhY3RCdG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RCdG4yJyk7XG52YXIgY29udGFjdEJ0bjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdEJ0bjMnKTtcblxuY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9J2NvbnRhY3RfZm9ybVtnZW5kZXJdJ11cIikubGVuZ3RoKTtcblxuY29udGFjdEJ0bjEub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0xXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTJcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItM1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICBjb250YWN0QnRuMS5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsJyk7XG59XG5cbmNvbnRhY3RCdG4yLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nY29udGFjdF9mb3JtW2dlbmRlcl0nXTpjaGVja2VkXCIpLmxlbmd0aCA8IDEpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9sbmFtZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9mbmFtZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9waG9uZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9lbWFpbCcpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0yXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTNcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgY29udGFjdEJ0bjEuY2xhc3NMaXN0LmFkZCgnZnVsbCcpO1xuICBjb250YWN0QnRuMi5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsJyk7XG59O1xuXG5jb250YWN0QnRuMy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9J2NvbnRhY3RfZm9ybVtjdXN0b21lcl90eXBlXSddOmNoZWNrZWRcIikubGVuZ3RoIDwgMSkge3JldHVybiBmYWxzZTt9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0xXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTJcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItM1wiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICBjb250YWN0QnRuMi5jbGFzc0xpc3QuYWRkKCdmdWxsJyk7XG59O1xuXG5cblxuXG5cblxuXG5cbi8vIFRhYnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIHRhYnMgPSByZXF1aXJlKCd0YWJzJyk7XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1jb250YWluZXInKVxudGFicyhjb250YWluZXIpO1xuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYmxvY2stMicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgcHJvZHVjdFRhYnNjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1ibG9jay0yJylcbiAgdGFicyhwcm9kdWN0VGFic2NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnMtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBwYXJ0bmVyc1RhYnNjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnMtY29udGFpbmVyJylcbiAgdGFicyhwYXJ0bmVyc1RhYnNjb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdi1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIHBhcnRuZXJzVGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXYtY29udGFpbmVyJylcbiAgdGFicyhwYXJ0bmVyc1RhYnNjb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtY29udGFpbmVyJylcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcbn1cblxuXG5cblxuLy8gUG9zdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgcG9zdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC1kb3duLXBvc3QnKVxuaWYgKHBvc3RBcnJvdyAhPSB1bmRlZmluZWQpIHtcbiAgY29uc29sZS5sb2coXCJ0cm91dsOpXCIpO1xuICBwb3N0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xufVxuXG4gXG5mdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikub2Zmc2V0SGVpZ2h0O1xuICBjb25zdCBvZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bvc3QtY29udGVudFwiKS5vZmZzZXRUb3AgLSBoZWFkZXJIZWlnaHQ7XG4gIHNjcm9sbCh7XG4gICAgdG9wOiBvZmZzZXRUb3AsXG4gICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgfSk7XG59XG5cblxuXG4vLyBTd2lwZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFN3aXBlciwgeyBQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uIH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XG5cbmNvbnN0IHN3aXBlckxhc3ROZXdzID0gbmV3IFN3aXBlcignLnBvc3RzJywge1xuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gIGxvb3A6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMTAyNDoge1xuICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IHN3aXBlckRvYyA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0LWRvYy1saXN0Jywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1kb2MtYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zd2lwZXItZG9jLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA2NDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICBsb29wOiB0cnVlLFxuICAgIH0sXG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgfVxuICB9XG59KTtcblxuXG5jb25zdCBzd2lwZXJMYXN0c0V2ZW50cyA9IG5ldyBTd2lwZXIoJy5ob21lLXRpbWVsaW5lLWNvbnRhaW5lcicsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgc3BhY2VCZXR3ZWVuOiA2MCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgfSxcbiAgfVxufSk7XG5cblxuY29uc3Qgc3dpcGVyQ2hyb25vID0gbmV3IFN3aXBlcignLmNocm9uby1zd2lwZXItMScsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9LFxuICB9XG59KTtcblxuXG5jb25zdCBzd2lwZXJCbG9ja3NJbmZvczEgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLW1vYmlsZS1jb250YWluZXInLCB7XG4gICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxufSk7XG5cblxuY29uc3Qgc3dpcGVyUHJvZHVjdHNDb2xvcmlzID0gbmV3IFN3aXBlcignLnNsaWRlci1jb2xvcmlzJywge1xuICAgIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBsb29wOiB0cnVlLFxufSk7XG5cblxuY29uc3Qgc3dpcGVyUHJvZHVjdHNBY2Nlc3NvcmllcyA9IG5ldyBTd2lwZXIoJy5zbGlkZXItYWNjZXNzb2lyaWVzJywge1xuICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBsb29wOiB0cnVlLFxufSk7XG5cbiAgXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQU9TIiwiaW5pdCIsImR1cmF0aW9uIiwiZGVsYXkiLCJkZWJvdW5jZURlbGF5Iiwib25jZSIsIm1pcnJvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVuZGVmaW5lZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFkiLCJoZWFkZXJTaXRlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm5hdkJ1dHRvbiIsIm5hdkxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdkVsZW1lbnRzIiwib25jbGljayIsImkiLCJsZW5ndGgiLCJ0b2dnbGUiLCJmb3JFYWNoIiwibmF2TGluayIsInN1Yk5hdkJ1dHRvbnMiLCJzdWJOYXZCdXR0b24iLCJjb250YWlucyIsImNvbnRhY3RCdXR0b24iLCJjb250YWN0QmxvY2siLCJidXR0b24iLCJjb250YWN0QnRuMSIsImNvbnRhY3RCdG4yIiwiY29udGFjdEJ0bjMiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJ0YWJzIiwicmVxdWlyZSIsImNvbnRhaW5lciIsInByb2R1Y3RUYWJzY29udGFpbmVyIiwicGFydG5lcnNUYWJzY29udGFpbmVyIiwib3B0aW9uc0NvbnRhaW5lciIsInBvc3RBcnJvdyIsImNsaWNrSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhlYWRlckhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFRvcCIsInNjcm9sbCIsInRvcCIsImJlaGF2aW9yIiwiU3dpcGVyIiwiUGFnaW5hdGlvbiIsIk5hdmlnYXRpb24iLCJzd2lwZXJMYXN0TmV3cyIsInNsaWRlc1BlclZpZXciLCJjZW50ZXJlZFNsaWRlcyIsImxvb3AiLCJzcGFjZUJldHdlZW4iLCJicmVha3BvaW50cyIsInN3aXBlckRvYyIsIm1vZHVsZXMiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwic3dpcGVyTGFzdHNFdmVudHMiLCJzd2lwZXJDaHJvbm8iLCJzd2lwZXJCbG9ja3NJbmZvczEiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJzd2lwZXJQcm9kdWN0c0NvbG9yaXMiLCJzd2lwZXJQcm9kdWN0c0FjY2Vzc29yaWVzIl0sInNvdXJjZVJvb3QiOiIifQ==