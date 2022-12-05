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
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_web_app_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/web/app.scss */ "./assets/styles/web/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var parallax_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! parallax-image */ "./node_modules/parallax-image/parallax-image.js");
/* harmony import */ var parallax_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(parallax_image__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! photoswipe/lightbox */ "./node_modules/photoswipe/dist/photoswipe-lightbox.esm.js");
/* harmony import */ var photoswipe_style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! photoswipe/style.css */ "./node_modules/photoswipe/dist/photoswipe.css");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");







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


aos__WEBPACK_IMPORTED_MODULE_9___default().init({
  duration: 1000,
  delay: 200,
  debounceDelay: 50,
  once: false,
  mirror: true
});

// RELOAD PAGE
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
}

// Navigation
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
});

// Sous-Navigation
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
});

// Contact Form
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
};

// Tabs
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
}
if (document.querySelector('.images-tabs-container') != undefined) {
  var optionsContainer = document.querySelector('.images-tabs-container');
  tabs(optionsContainer);
}
if (document.querySelector('.content-tabs-container') != undefined) {
  var optionsContainer = document.querySelector('.content-tabs-container');
  tabs(optionsContainer);
}
if (document.querySelector('.options-list') != undefined) {
  var optionsContainer = document.querySelector('.options-list');
  tabs(optionsContainer);
}

// Lightbox
// ------------------------------------------------------------------


var productLightbox = new photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_12__["default"]({
  gallery: '#product-galleries, #options-gallery',
  children: 'a',
  showHideAnimationType: 'fade',
  pswpModule: function pswpModule() {
    return __webpack_require__.e(/*! import() */ "vendors-node_modules_photoswipe_dist_photoswipe_esm_js").then(__webpack_require__.bind(__webpack_require__, /*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.esm.js"));
  }
});
productLightbox.init();

// Post
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
}

// Products
// ------------------------------------------------------------------
var motorSelect = document.querySelector('.motor-select');
var motorsSlides = document.querySelectorAll('.motor-image');
if (motorSelect) {
  motorSelect.addEventListener('change', function () {
    var valueSelected = motorSelect.value;
    var slideSelected = document.querySelector('[data-slider="' + valueSelected + '"]');
    motorsSlides.forEach(function (motorsSlide) {
      motorsSlide.classList.remove('active');
    });
    slideSelected.classList.add('active');
    console.log(valueSelected);
  });
}

// Swiper
// ------------------------------------------------------------------



var swiperLastNews = new swiper__WEBPACK_IMPORTED_MODULE_14__["default"]('.posts', {
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
var swiperDoc = new swiper__WEBPACK_IMPORTED_MODULE_14__["default"]('.product-doc-list', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_14__.Navigation],
  slidesPerView: 1,
  //centeredSlides: true,
  // loop: true,
  navigation: {
    nextEl: '.swiper-doc-button-next',
    prevEl: '.swiper-doc-button-prev'
  },
  breakpoints: {
    640: {
      slidesPerView: 2
      //centeredSlides: false,
      //loop: true,
    },

    768: {
      slidesPerView: 2
      //centeredSlides: false,
      //loop: true,
    },

    1200: {
      slidesPerView: 3
      //centeredSlides: true,
      //loop: true,
    }
  }
});

var swiperLastsEvents = new swiper__WEBPACK_IMPORTED_MODULE_14__["default"]('.home-timeline-container', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_14__.Navigation],
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
var swiperChrono = new swiper__WEBPACK_IMPORTED_MODULE_14__["default"]('.chrono-swiper-1', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_14__.Navigation],
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
var swiperBlocksInfos1 = new swiper__WEBPACK_IMPORTED_MODULE_14__["default"]('.slider-mobile-container', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_14__.Pagination],
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var swiperProductsColoris = new swiper__WEBPACK_IMPORTED_MODULE_14__["default"]('.slider-coloris', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_14__.Navigation],
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true
});
var swiperProductsAccessories = new swiper__WEBPACK_IMPORTED_MODULE_14__["default"]('.slider-accessoiries', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_14__.Pagination],
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true
});
var swiperGalleryVol = new swiper__WEBPACK_IMPORTED_MODULE_14__["default"]('.gallery-vol', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_14__.Navigation],
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".vol-button-next",
    prevEl: ".vol-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
var swiperGalleryLifestyle = new swiper__WEBPACK_IMPORTED_MODULE_14__["default"]('.gallery-lifestyle', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_14__.Navigation],
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".lifestyle-button-next",
    prevEl: ".lifestyle-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
var swiperGalleryAtelier = new swiper__WEBPACK_IMPORTED_MODULE_14__["default"]('.gallery-atelier', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_14__.Navigation],
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".atelier-button-next",
    prevEl: ".atelier-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-ca0482","vendors-node_modules_swup_debug-plugin_lib_index_js-node_modules_swup_fade-theme_lib_index_js-8ddd4c","vendors-node_modules_aos_dist_aos_js-node_modules_aos_dist_aos_css-node_modules_photoswipe_di-d5d52d","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_bo-c9ceb2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixFQUFFO0VBQzlEVSxPQUFPLEVBQUUsQ0FBQ1IsK0NBQVUsQ0FBQztFQUNyQkUsYUFBYSxFQUFFLENBQUM7RUFDaEJFLElBQUksRUFBRSxJQUFJO0VBQ1ZLLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUsd0JBQXdCO0lBQ2hDQyxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RMLFdBQVcsRUFBRTtJQUNYLElBQUksRUFBRTtNQUNKSixhQUFhLEVBQUUsQ0FBQztNQUNoQkcsWUFBWSxFQUFFO0lBQ2hCO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRixJQUFNaUIsb0JBQW9CLEdBQUcsSUFBSXhCLCtDQUFNLENBQUMsa0JBQWtCLEVBQUU7RUFDMURVLE9BQU8sRUFBRSxDQUFDUiwrQ0FBVSxDQUFDO0VBQ3JCRSxhQUFhLEVBQUUsQ0FBQztFQUNoQkUsSUFBSSxFQUFFLElBQUk7RUFDVkssVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSxzQkFBc0I7SUFDOUJDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDREwsV0FBVyxFQUFFO0lBQ1gsSUFBSSxFQUFFO01BQ0pKLGFBQWEsRUFBRSxDQUFDO01BQ2hCRyxZQUFZLEVBQUU7SUFDaEI7RUFDRjtBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUN0YkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvd2ViL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL3dlYi9hcHAuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cblxuLy8gQU9TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XG5BT1MuaW5pdCh7XG4gIGR1cmF0aW9uOiAxMDAwLFxuICBkZWxheTogMjAwLFxuICBkZWJvdW5jZURlbGF5OiA1MCxcbiAgb25jZTogZmFsc2UsXG4gIG1pcnJvcjogdHJ1ZVxufSk7XG5cblxuXG4vLyBSRUxPQUQgUEFHRVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKmltcG9ydCBTd3VwIGZyb20gJ3N3dXAnO1xuaW1wb3J0IFN3dXBCb2R5Q2xhc3NQbHVnaW4gZnJvbSAnQHN3dXAvYm9keS1jbGFzcy1wbHVnaW4nO1xuXG5jb25zdCBzd3VwID0gbmV3IFN3dXAoe1xuICBwbHVnaW5zOiBbbmV3IFN3dXBCb2R5Q2xhc3NQbHVnaW4oKV1cblxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N3dXA6Y29udGVudFJlcGxhY2VkJywgZnVuY3Rpb24oKXtcbiAgQU9TLmluaXQoKTtcbiAgc3dpcGVyRnVuY3Rpb25zKCk7XG4gIE9wZW5MYXllcnNNYXAoKTtcbn0pKi9cblxuXG5cblxuLy8gUGFyYWxsYXhcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0ICdwYXJhbGxheC1pbWFnZSc7XG5cblxuLy8gSGVhZGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJhc2UnKSAhPSB1bmRlZmluZWQpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgdmFyIGhlYWRlclNpdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXItYmFzZScpWzBdO1xuXG4gICAgaWYgKHNjcm9sbFBvc2l0aW9uID49IDUwKSB7XG4gICAgICBoZWFkZXJTaXRlLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlclNpdGUuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQnKTtcbiAgICB9XG4gIH0pXG59XG5cblxuXG4vLyBOYXZpZ2F0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBuYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLW5hdicpO1xudmFyIG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xubGV0IG5hdkVsZW1lbnRzID0gWycuYnRuLW5hdicsICcucHJpbWFyeS1tZW51J107XG5cbm5hdkJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdkVsZW1lbnRzW2ldKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgfVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LW9wZW5lZCcpO1xufVxuXG5uYXZMaW5rcy5mb3JFYWNoKG5hdkxpbmsgPT4ge1xuICBuYXZMaW5rLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXZFbGVtZW50c1tpXSkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3BlbmVkJyk7XG4gIH1cbn0pO1xuXG5cblxuLy8gU291cy1OYXZpZ2F0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBzdWJOYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Yi1tZW51LWJ0bicpO1xuXG5zdWJOYXZCdXR0b25zLmZvckVhY2goc3ViTmF2QnV0dG9uID0+IHtcbiAgc3ViTmF2QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSBcbiAgICB7XG4gICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSBcbiAgICBlbHNlIFxuICAgIHtcbiAgICAgIHN1Yk5hdkJ1dHRvbnMuZm9yRWFjaChzdWJOYXZCdXR0b24gPT4ge1xuICAgICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuXG4vLyBDb250YWN0IEZvcm1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlLWNvbnRhY3QnKTtcbnZhciBjb250YWN0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1ibG9jaycpO1xuY29udGFjdEJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29udGFjdEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdjb250YWN0LW9wZW5lZCcpO1xuICB9XG59KTtcblxudmFyIGNvbnRhY3RCdG4xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RCdG4xJyk7XG52YXIgY29udGFjdEJ0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdEJ0bjInKTtcbnZhciBjb250YWN0QnRuMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnRuMycpO1xuXG5jb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nY29udGFjdF9mb3JtW2dlbmRlcl0nXVwiKS5sZW5ndGgpO1xuXG5jb250YWN0QnRuMS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTFcIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMlwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0zXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gIGNvbnRhY3RCdG4xLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwnKTtcbn1cblxuY29udGFjdEJ0bjIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdjb250YWN0X2Zvcm1bZ2VuZGVyXSddOmNoZWNrZWRcIikubGVuZ3RoIDwgMSkge3JldHVybiBmYWxzZTt9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX2xuYW1lJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX2ZuYW1lJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX3Bob25lJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX2VtYWlsJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0xXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTJcIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItM1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICBjb250YWN0QnRuMS5jbGFzc0xpc3QuYWRkKCdmdWxsJyk7XG4gIGNvbnRhY3RCdG4yLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwnKTtcbn07XG5cbmNvbnRhY3RCdG4zLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nY29udGFjdF9mb3JtW2N1c3RvbWVyX3R5cGVdJ106Y2hlY2tlZFwiKS5sZW5ndGggPCAxKSB7cmV0dXJuIGZhbHNlO31cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTFcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMlwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0zXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gIGNvbnRhY3RCdG4yLmNsYXNzTGlzdC5hZGQoJ2Z1bGwnKTtcbn07XG5cblxuXG5cbi8vIFRhYnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIHRhYnMgPSByZXF1aXJlKCd0YWJzJyk7XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1jb250YWluZXInKVxudGFicyhjb250YWluZXIpO1xuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYmxvY2stMicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgcHJvZHVjdFRhYnNjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1ibG9jay0yJylcbiAgdGFicyhwcm9kdWN0VGFic2NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnMtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBwYXJ0bmVyc1RhYnNjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnMtY29udGFpbmVyJylcbiAgdGFicyhwYXJ0bmVyc1RhYnNjb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdi1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIHBhcnRuZXJzVGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXYtY29udGFpbmVyJylcbiAgdGFicyhwYXJ0bmVyc1RhYnNjb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtY29udGFpbmVyJylcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZXMtdGFicy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2VzLXRhYnMtY29udGFpbmVyJylcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRhYnMtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGFicy1jb250YWluZXInKVxuICB0YWJzKG9wdGlvbnNDb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtbGlzdCcpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWxpc3QnKVxuICB0YWJzKG9wdGlvbnNDb250YWluZXIpO1xufVxuXG5cblxuXG4vLyBMaWdodGJveFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgUGhvdG9Td2lwZUxpZ2h0Ym94IGZyb20gJ3Bob3Rvc3dpcGUvbGlnaHRib3gnO1xuaW1wb3J0ICdwaG90b3N3aXBlL3N0eWxlLmNzcyc7XG5jb25zdCBwcm9kdWN0TGlnaHRib3ggPSBuZXcgUGhvdG9Td2lwZUxpZ2h0Ym94KHtcbiAgZ2FsbGVyeTogJyNwcm9kdWN0LWdhbGxlcmllcywgI29wdGlvbnMtZ2FsbGVyeScsXG4gIGNoaWxkcmVuOiAnYScsXG4gIHNob3dIaWRlQW5pbWF0aW9uVHlwZTogJ2ZhZGUnLFxuICBwc3dwTW9kdWxlOiAoKSA9PiBpbXBvcnQoJ3Bob3Rvc3dpcGUnKSxcbn0pO1xucHJvZHVjdExpZ2h0Ym94LmluaXQoKTtcblxuXG5cblxuLy8gUG9zdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgcG9zdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC1kb3duLXBvc3QnKVxuaWYgKHBvc3RBcnJvdyAhPSB1bmRlZmluZWQpIHtcbiAgY29uc29sZS5sb2coXCJ0cm91dsOpXCIpO1xuICBwb3N0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xufVxuXG4gXG5mdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikub2Zmc2V0SGVpZ2h0O1xuICBjb25zdCBvZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bvc3QtY29udGVudFwiKS5vZmZzZXRUb3AgLSBoZWFkZXJIZWlnaHQ7XG4gIHNjcm9sbCh7XG4gICAgdG9wOiBvZmZzZXRUb3AsXG4gICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgfSk7XG59XG5cblxuXG5cbi8vIFByb2R1Y3RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBtb3RvclNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3Rvci1zZWxlY3QnKTtcbnZhciBtb3RvcnNTbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW90b3ItaW1hZ2UnKTtcblxuaWYgKG1vdG9yU2VsZWN0KSB7XG4gIG1vdG9yU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlU2VsZWN0ZWQgPSBtb3RvclNlbGVjdC52YWx1ZTtcbiAgICB2YXIgc2xpZGVTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsaWRlcj1cIicgKyB2YWx1ZVNlbGVjdGVkICsgJ1wiXScpXG5cbiAgICBtb3RvcnNTbGlkZXMuZm9yRWFjaChtb3RvcnNTbGlkZSA9PiB7XG4gICAgICBtb3RvcnNTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIHNsaWRlU2VsZWN0ZWQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICBjb25zb2xlLmxvZyh2YWx1ZVNlbGVjdGVkKTtcbiAgfSk7XG59XG5cblxuXG5cbi8vIFN3aXBlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgU3dpcGVyLCB7IFBhZ2luYXRpb24sIE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXInO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcblxuY29uc3Qgc3dpcGVyTGFzdE5ld3MgPSBuZXcgU3dpcGVyKCcucG9zdHMnLCB7XG4gIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgbG9vcDogdHJ1ZSxcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAxMDI0OiB7XG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIH1cbiAgfVxufSlcblxuY29uc3Qgc3dpcGVyRG9jID0gbmV3IFN3aXBlcignLnByb2R1Y3QtZG9jLWxpc3QnLCB7XG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgLy9jZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgLy8gbG9vcDogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zd2lwZXItZG9jLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWRvYy1idXR0b24tcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNjQwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgLy9jZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICAvL2xvb3A6IHRydWUsXG4gICAgfSxcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAvL2NlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgIC8vbG9vcDogdHJ1ZSxcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAvL2NlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgLy9sb29wOiB0cnVlLFxuICAgIH1cbiAgfVxufSk7XG5cblxuY29uc3Qgc3dpcGVyTGFzdHNFdmVudHMgPSBuZXcgU3dpcGVyKCcuaG9tZS10aW1lbGluZS1jb250YWluZXInLCB7XG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogNjAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIH0sXG4gIH1cbn0pO1xuXG5cbmNvbnN0IHN3aXBlckNocm9ubyA9IG5ldyBTd2lwZXIoJy5jaHJvbm8tc3dpcGVyLTEnLCB7XG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgc3BhY2VCZXR3ZWVuOiA2MCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgfSxcbiAgfVxufSk7XG5cblxuY29uc3Qgc3dpcGVyQmxvY2tzSW5mb3MxID0gbmV3IFN3aXBlcignLnNsaWRlci1tb2JpbGUtY29udGFpbmVyJywge1xuICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIGxvb3A6IHRydWUsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbn0pO1xuXG5cbmNvbnN0IHN3aXBlclByb2R1Y3RzQ29sb3JpcyA9IG5ldyBTd2lwZXIoJy5zbGlkZXItY29sb3JpcycsIHtcbiAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbn0pO1xuXG5cbmNvbnN0IHN3aXBlclByb2R1Y3RzQWNjZXNzb3JpZXMgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWFjY2Vzc29pcmllcycsIHtcbiAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbn0pO1xuXG5jb25zdCBzd2lwZXJHYWxsZXJ5Vm9sID0gbmV3IFN3aXBlcignLmdhbGxlcnktdm9sJywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnZvbC1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIudm9sLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgfSxcbiAgfSxcbn0pXG5cbmNvbnN0IHN3aXBlckdhbGxlcnlMaWZlc3R5bGUgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeS1saWZlc3R5bGUnLCB7XG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgbG9vcDogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIubGlmZXN0eWxlLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5saWZlc3R5bGUtYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9LFxuICB9LFxufSlcblxuY29uc3Qgc3dpcGVyR2FsbGVyeUF0ZWxpZXIgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeS1hdGVsaWVyJywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLmF0ZWxpZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLmF0ZWxpZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9LFxuICB9LFxufSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQU9TIiwiaW5pdCIsImR1cmF0aW9uIiwiZGVsYXkiLCJkZWJvdW5jZURlbGF5Iiwib25jZSIsIm1pcnJvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVuZGVmaW5lZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFkiLCJoZWFkZXJTaXRlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm5hdkJ1dHRvbiIsIm5hdkxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdkVsZW1lbnRzIiwib25jbGljayIsImkiLCJsZW5ndGgiLCJ0b2dnbGUiLCJmb3JFYWNoIiwibmF2TGluayIsInN1Yk5hdkJ1dHRvbnMiLCJzdWJOYXZCdXR0b24iLCJjb250YWlucyIsImNvbnRhY3RCdXR0b24iLCJjb250YWN0QmxvY2siLCJidXR0b24iLCJjb250YWN0QnRuMSIsImNvbnRhY3RCdG4yIiwiY29udGFjdEJ0bjMiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJ0YWJzIiwicmVxdWlyZSIsImNvbnRhaW5lciIsInByb2R1Y3RUYWJzY29udGFpbmVyIiwicGFydG5lcnNUYWJzY29udGFpbmVyIiwib3B0aW9uc0NvbnRhaW5lciIsIlBob3RvU3dpcGVMaWdodGJveCIsInByb2R1Y3RMaWdodGJveCIsImdhbGxlcnkiLCJjaGlsZHJlbiIsInNob3dIaWRlQW5pbWF0aW9uVHlwZSIsInBzd3BNb2R1bGUiLCJwb3N0QXJyb3ciLCJjbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJoZWFkZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRUb3AiLCJzY3JvbGwiLCJ0b3AiLCJiZWhhdmlvciIsIm1vdG9yU2VsZWN0IiwibW90b3JzU2xpZGVzIiwidmFsdWVTZWxlY3RlZCIsInNsaWRlU2VsZWN0ZWQiLCJtb3RvcnNTbGlkZSIsIlN3aXBlciIsIlBhZ2luYXRpb24iLCJOYXZpZ2F0aW9uIiwic3dpcGVyTGFzdE5ld3MiLCJzbGlkZXNQZXJWaWV3IiwiY2VudGVyZWRTbGlkZXMiLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwiYnJlYWtwb2ludHMiLCJzd2lwZXJEb2MiLCJtb2R1bGVzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInN3aXBlckxhc3RzRXZlbnRzIiwic3dpcGVyQ2hyb25vIiwic3dpcGVyQmxvY2tzSW5mb3MxIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwic3dpcGVyUHJvZHVjdHNDb2xvcmlzIiwic3dpcGVyUHJvZHVjdHNBY2Nlc3NvcmllcyIsInN3aXBlckdhbGxlcnlWb2wiLCJzd2lwZXJHYWxsZXJ5TGlmZXN0eWxlIiwic3dpcGVyR2FsbGVyeUF0ZWxpZXIiXSwic291cmNlUm9vdCI6IiJ9