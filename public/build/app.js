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

// Page Accueil
// ------------------------------------------------------------------
$('.home-hidden-btn').on('click', function () {
  $('.home-hidden-text').slideToggle('slow');
});

// Page Produit
// ------------------------------------------------------------------
if (document.querySelector(".motor-board") != undefined) {
  var motorsTab = document.querySelectorAll(".motor-board .tab");
  var firstBlock = motorsTab[0];
  firstBlock.className = 'tab active';
  var motorsBlock = document.querySelectorAll(".motor-board .block");
  var firstBlock = motorsBlock[0];
  firstBlock.className = 'tab-pane block active';
  var motorsListBlock = document.querySelectorAll(".motor-list-container .motor-list-block");
  var firstListBlock = motorsListBlock[0];
  firstListBlock.className = 'motor-list-block active';
  var motorsImages = document.querySelectorAll(".motor-image-container .motor-image");
  var firstImageBlock = motorsImages[0];
  firstImageBlock.className = 'motor-image active';
}

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
if (document.querySelector('.motor-tabs-container') != undefined) {
  var optionsContainer = document.querySelector('.motor-tabs-container');
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

// Swiper
// ------------------------------------------------------------------



var swiperLastNews = new swiper__WEBPACK_IMPORTED_MODULE_14__["default"]('.posts', {
  slidesPerView: "auto",
  // centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      // centeredSlides: false,
      slidesPerView: 2
    },
    1200: {
      // centeredSlides: true,
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
  modules: [swiper__WEBPACK_IMPORTED_MODULE_14__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_14__.Pagination],
  spaceBetween: 100,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.chrono-swiper-button-next',
    prevEl: '.chrono-swiper-button-prev'
  },
  mousewheel: {
    enabled: true,
    sensitivity: 5.5
  },
  freeMode: {
    enabled: true,
    sticky: false,
    momentumBounce: false
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 1
    },
    1200: {
      spaceBetween: 150,
      slidesPerView: 2
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
  centeredSlides: true,
  navigation: {
    nextEl: ".vol-button-next",
    prevEl: ".vol-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
var swiperGalleryLifestyle = new swiper__WEBPACK_IMPORTED_MODULE_14__["default"]('.gallery-lifestyle', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_14__.Navigation],
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".lifestyle-button-next",
    prevEl: ".lifestyle-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
var swiperGalleryAtelier = new swiper__WEBPACK_IMPORTED_MODULE_14__["default"]('.gallery-atelier', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_14__.Navigation],
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".atelier-button-next",
    prevEl: ".atelier-button-prev"
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_modules_es_array-cfa5ad","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-dropzone_d-73492e","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_aos_dist_aos_js-node_modules_aos_dist_aos_css-node_modules_photoswipe_di-d5d52d","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_bo-c9ceb2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxDQUFDO0VBQ3JCRSxhQUFhLEVBQUUsQ0FBQztFQUNoQkMsSUFBSSxFQUFFLElBQUk7RUFDVnFCLGNBQWMsRUFBRSxJQUFJO0VBQ3BCaEIsVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSxzQkFBc0I7SUFDOUJDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDREwsV0FBVyxFQUFFO0lBQ1gsSUFBSSxFQUFFO01BQ0pILGFBQWEsRUFBRSxDQUFDO01BQ2hCRSxZQUFZLEVBQUU7SUFDaEI7RUFDRjtBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNyZEYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvd2ViL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy93ZWIvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuXHJcbi8vIEFPU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5BT1MuaW5pdCh7XHJcbiAgZHVyYXRpb246IDEwMDAsXHJcbiAgZGVsYXk6IDIwMCxcclxuICBkZWJvdW5jZURlbGF5OiA1MCxcclxuICBvbmNlOiBmYWxzZSxcclxuICBtaXJyb3I6IHRydWVcclxufSk7XHJcblxyXG5cclxuXHJcbi8vIFJFTE9BRCBQQUdFXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vKmltcG9ydCBTd3VwIGZyb20gJ3N3dXAnO1xyXG5pbXBvcnQgU3d1cEJvZHlDbGFzc1BsdWdpbiBmcm9tICdAc3d1cC9ib2R5LWNsYXNzLXBsdWdpbic7XHJcblxyXG5jb25zdCBzd3VwID0gbmV3IFN3dXAoe1xyXG4gIHBsdWdpbnM6IFtuZXcgU3d1cEJvZHlDbGFzc1BsdWdpbigpXVxyXG5cclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzd3VwOmNvbnRlbnRSZXBsYWNlZCcsIGZ1bmN0aW9uKCl7XHJcbiAgQU9TLmluaXQoKTtcclxuICBzd2lwZXJGdW5jdGlvbnMoKTtcclxuICBPcGVuTGF5ZXJzTWFwKCk7XHJcbn0pKi9cclxuXHJcblxyXG5cclxuXHJcbi8vIFBhcmFsbGF4XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgJ3BhcmFsbGF4LWltYWdlJztcclxuXHJcblxyXG4vLyBIZWFkZXJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJhc2UnKSAhPSB1bmRlZmluZWQpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcclxuICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgdmFyIGhlYWRlclNpdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXItYmFzZScpWzBdO1xyXG5cclxuICAgIGlmIChzY3JvbGxQb3NpdGlvbiA+PSA1MCkge1xyXG4gICAgICBoZWFkZXJTaXRlLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXJTaXRlLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkJyk7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuXHJcblxyXG4vLyBOYXZpZ2F0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG52YXIgbmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1uYXYnKTtcclxudmFyIG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xyXG5sZXQgbmF2RWxlbWVudHMgPSBbJy5idG4tbmF2JywgJy5wcmltYXJ5LW1lbnUnXTtcclxuXHJcbm5hdkJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXZFbGVtZW50c1tpXSkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgfVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtb3BlbmVkJyk7XHJcbn1cclxuXHJcbm5hdkxpbmtzLmZvckVhY2gobmF2TGluayA9PiB7XHJcbiAgbmF2TGluay5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdkVsZW1lbnRzW2ldKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3BlbmVkJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuLy8gU291cy1OYXZpZ2F0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG52YXIgc3ViTmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWItbWVudS1idG4nKTtcclxuXHJcbnN1Yk5hdkJ1dHRvbnMuZm9yRWFjaChzdWJOYXZCdXR0b24gPT4ge1xyXG4gIHN1Yk5hdkJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKVxyXG4gICAge1xyXG4gICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHN1Yk5hdkJ1dHRvbnMuZm9yRWFjaChzdWJOYXZCdXR0b24gPT4ge1xyXG4gICAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vLyBQYWdlIEFjY3VlaWxcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiQoJy5ob21lLWhpZGRlbi1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICQoJy5ob21lLWhpZGRlbi10ZXh0Jykuc2xpZGVUb2dnbGUoJ3Nsb3cnKTtcclxufSlcclxuXHJcblxyXG5cclxuXHJcbi8vIFBhZ2UgUHJvZHVpdFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW90b3ItYm9hcmRcIikgIT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gIHZhciBtb3RvcnNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vdG9yLWJvYXJkIC50YWJcIik7ICBcclxuICB2YXIgZmlyc3RCbG9jayA9IG1vdG9yc1RhYlswXTtcclxuICBmaXJzdEJsb2NrLmNsYXNzTmFtZSA9ICd0YWIgYWN0aXZlJztcclxuXHJcbiAgdmFyIG1vdG9yc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb3Rvci1ib2FyZCAuYmxvY2tcIik7XHJcbiAgdmFyIGZpcnN0QmxvY2sgPSBtb3RvcnNCbG9ja1swXTtcclxuICBmaXJzdEJsb2NrLmNsYXNzTmFtZSA9ICd0YWItcGFuZSBibG9jayBhY3RpdmUnO1xyXG5cclxuICB2YXIgbW90b3JzTGlzdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb3Rvci1saXN0LWNvbnRhaW5lciAubW90b3ItbGlzdC1ibG9ja1wiKTtcclxuICB2YXIgZmlyc3RMaXN0QmxvY2sgPSBtb3RvcnNMaXN0QmxvY2tbMF07XHJcbiAgZmlyc3RMaXN0QmxvY2suY2xhc3NOYW1lID0gJ21vdG9yLWxpc3QtYmxvY2sgYWN0aXZlJztcclxuXHJcbiAgdmFyIG1vdG9yc0ltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW90b3ItaW1hZ2UtY29udGFpbmVyIC5tb3Rvci1pbWFnZVwiKTtcclxuICB2YXIgZmlyc3RJbWFnZUJsb2NrID0gbW90b3JzSW1hZ2VzWzBdO1xyXG4gIGZpcnN0SW1hZ2VCbG9jay5jbGFzc05hbWUgPSAnbW90b3ItaW1hZ2UgYWN0aXZlJztcclxuICBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIENvbnRhY3QgRm9ybVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxudmFyIGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlLWNvbnRhY3QnKTtcclxudmFyIGNvbnRhY3RCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJsb2NrJyk7XHJcbmNvbnRhY3RCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xyXG4gIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjb250YWN0QmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGFjdC1vcGVuZWQnKTtcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIGNvbnRhY3RCdG4xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RCdG4xJyk7XHJcbnZhciBjb250YWN0QnRuMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnRuMicpO1xyXG52YXIgY29udGFjdEJ0bjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdEJ0bjMnKTtcclxuXHJcbmNvbnRhY3RCdG4xLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0xXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMlwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTNcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gIGNvbnRhY3RCdG4xLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwnKTtcclxufVxyXG5cclxuY29udGFjdEJ0bjIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9J2NvbnRhY3RfZm9ybVtnZW5kZXJdJ106Y2hlY2tlZFwiKS5sZW5ndGggPCAxKSB7cmV0dXJuIGZhbHNlO31cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9sbmFtZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX2ZuYW1lJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fcGhvbmUnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9lbWFpbCcpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTFcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0yXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItM1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgY29udGFjdEJ0bjEuY2xhc3NMaXN0LmFkZCgnZnVsbCcpO1xyXG4gIGNvbnRhY3RCdG4yLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwnKTtcclxufTtcclxuXHJcbmNvbnRhY3RCdG4zLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdjb250YWN0X2Zvcm1bY3VzdG9tZXJfdHlwZV0nXTpjaGVja2VkXCIpLmxlbmd0aCA8IDEpIHtyZXR1cm4gZmFsc2U7fVxyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTFcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0yXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItM1wiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgY29udGFjdEJ0bjIuY2xhc3NMaXN0LmFkZCgnZnVsbCcpO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLy8gVGFic1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxudmFyIHRhYnMgPSByZXF1aXJlKCd0YWJzJyk7XHJcbnZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRhaW5lcicpXHJcbnRhYnMoY29udGFpbmVyKTtcclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1ibG9jay0yJykgIT0gdW5kZWZpbmVkKSB7XHJcbiAgdmFyIHByb2R1Y3RUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYmxvY2stMicpXHJcbiAgdGFicyhwcm9kdWN0VGFic2NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnMtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XHJcbiAgdmFyIHBhcnRuZXJzVGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVycy1jb250YWluZXInKVxyXG4gIHRhYnMocGFydG5lcnNUYWJzY29udGFpbmVyKTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXYtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XHJcbiAgdmFyIHBhcnRuZXJzVGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXYtY29udGFpbmVyJylcclxuICB0YWJzKHBhcnRuZXJzVGFic2NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcclxuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWNvbnRhaW5lcicpXHJcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZXMtdGFicy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcclxuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZXMtdGFicy1jb250YWluZXInKVxyXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10YWJzLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xyXG4gIHZhciBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGFicy1jb250YWluZXInKVxyXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW90b3ItdGFicy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcclxuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3Rvci10YWJzLWNvbnRhaW5lcicpXHJcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWxpc3QnKSAhPSB1bmRlZmluZWQpIHtcclxuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWxpc3QnKVxyXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIExpZ2h0Ym94XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgUGhvdG9Td2lwZUxpZ2h0Ym94IGZyb20gJ3Bob3Rvc3dpcGUvbGlnaHRib3gnO1xyXG5pbXBvcnQgJ3Bob3Rvc3dpcGUvc3R5bGUuY3NzJztcclxuY29uc3QgcHJvZHVjdExpZ2h0Ym94ID0gbmV3IFBob3RvU3dpcGVMaWdodGJveCh7XHJcbiAgZ2FsbGVyeTogJyNwcm9kdWN0LWdhbGxlcmllcywgI29wdGlvbnMtZ2FsbGVyeScsXHJcbiAgY2hpbGRyZW46ICdhJyxcclxuICBzaG93SGlkZUFuaW1hdGlvblR5cGU6ICdmYWRlJyxcclxuICBwc3dwTW9kdWxlOiAoKSA9PiBpbXBvcnQoJ3Bob3Rvc3dpcGUnKSxcclxufSk7XHJcbnByb2R1Y3RMaWdodGJveC5pbml0KCk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBQb3N0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG52YXIgcG9zdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC1kb3duLXBvc3QnKVxyXG5pZiAocG9zdEFycm93ICE9IHVuZGVmaW5lZCkge1xyXG4gIGNvbnNvbGUubG9nKFwidHJvdXbDqVwiKTtcclxuICBwb3N0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5vZmZzZXRIZWlnaHQ7XHJcbiAgY29uc3Qgb2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3N0LWNvbnRlbnRcIikub2Zmc2V0VG9wIC0gaGVhZGVySGVpZ2h0O1xyXG4gIHNjcm9sbCh7XHJcbiAgICB0b3A6IG9mZnNldFRvcCxcclxuICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIFN3aXBlclxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaW1wb3J0IFN3aXBlciwgeyBQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uIH0gZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0ICdzd2lwZXIvY3NzJztcclxuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xyXG5cclxuY29uc3Qgc3dpcGVyTGFzdE5ld3MgPSBuZXcgU3dpcGVyKCcucG9zdHMnLCB7XHJcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgLy8gY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBzcGFjZUJldHdlZW46IDIwLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxMDI0OiB7XHJcbiAgICAgIC8vIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIH0sXHJcbiAgICAxMjAwOiB7XHJcbiAgICAgIC8vIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IHN3aXBlckRvYyA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0LWRvYy1saXN0Jywge1xyXG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcclxuICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gIC8vY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgLy8gbG9vcDogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWRvYy1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWRvYy1idXR0b24tcHJldicsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgNjQwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIC8vY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIC8vY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgMTIwMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAvL2NlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5jb25zdCBzd2lwZXJMYXN0c0V2ZW50cyA9IG5ldyBTd2lwZXIoJy5ob21lLXRpbWVsaW5lLWNvbnRhaW5lcicsIHtcclxuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXHJcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICB9LFxyXG4gICAgMTIwMDoge1xyXG4gICAgICBzcGFjZUJldHdlZW46IDYwLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgfSxcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHN3aXBlckNocm9ubyA9IG5ldyBTd2lwZXIoJy5jaHJvbm8tc3dpcGVyLTEnLCB7XHJcbiAgbW9kdWxlczogW05hdmlnYXRpb24sIFBhZ2luYXRpb25dLFxyXG4gIHNwYWNlQmV0d2VlbjogMTAwLFxyXG4gIHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gIH0sXHJcbiAgbW91c2V3aGVlbDoge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIHNlbnNpdGl2aXR5OiA1LjUsXHJcbiAgfSxcclxuICBmcmVlTW9kZToge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIHN0aWNreTogZmFsc2UsXHJcbiAgICBtb21lbnR1bUJvdW5jZTogZmFsc2UsXHJcbiAgfSxcclxuICBzY3JvbGxiYXI6IHtcclxuICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsYmFyXCIsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICB9LFxyXG4gICAgMTIwMDoge1xyXG4gICAgICBzcGFjZUJldHdlZW46IDE1MCxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIH0sXHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5jb25zdCBzd2lwZXJCbG9ja3NJbmZvczEgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLW1vYmlsZS1jb250YWluZXInLCB7XHJcbiAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG4gICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcblxyXG5jb25zdCBzd2lwZXJQcm9kdWN0c0NvbG9yaXMgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWNvbG9yaXMnLCB7XHJcbiAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXHJcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxufSk7XHJcblxyXG5cclxuY29uc3Qgc3dpcGVyUHJvZHVjdHNBY2Nlc3NvcmllcyA9IG5ldyBTd2lwZXIoJy5zbGlkZXItYWNjZXNzb2lyaWVzJywge1xyXG4gICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgIGxvb3A6IHRydWUsXHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyR2FsbGVyeVZvbCA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LXZvbCcsIHtcclxuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXHJcbiAgc2xpZGVzUGVyVmlldzogMSxcclxuICBsb29wOiB0cnVlLFxyXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogXCIudm9sLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICBwcmV2RWw6IFwiLnZvbC1idXR0b24tcHJldlwiLFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDEwMjQ6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmNvbnN0IHN3aXBlckdhbGxlcnlMaWZlc3R5bGUgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeS1saWZlc3R5bGUnLCB7XHJcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxyXG4gIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6IFwiLmxpZmVzdHlsZS1idXR0b24tbmV4dFwiLFxyXG4gICAgcHJldkVsOiBcIi5saWZlc3R5bGUtYnV0dG9uLXByZXZcIixcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxMDI0OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5jb25zdCBzd2lwZXJHYWxsZXJ5QXRlbGllciA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LWF0ZWxpZXInLCB7XHJcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxyXG4gIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6IFwiLmF0ZWxpZXItYnV0dG9uLW5leHRcIixcclxuICAgIHByZXZFbDogXCIuYXRlbGllci1idXR0b24tcHJldlwiLFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDEwMjQ6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkFPUyIsImluaXQiLCJkdXJhdGlvbiIsImRlbGF5IiwiZGVib3VuY2VEZWxheSIsIm9uY2UiLCJtaXJyb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmRlZmluZWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxZIiwiaGVhZGVyU2l0ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuYXZCdXR0b24iLCJuYXZMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXZFbGVtZW50cyIsIm9uY2xpY2siLCJpIiwibGVuZ3RoIiwidG9nZ2xlIiwiZm9yRWFjaCIsIm5hdkxpbmsiLCJzdWJOYXZCdXR0b25zIiwic3ViTmF2QnV0dG9uIiwiY29udGFpbnMiLCIkIiwib24iLCJzbGlkZVRvZ2dsZSIsIm1vdG9yc1RhYiIsImZpcnN0QmxvY2siLCJjbGFzc05hbWUiLCJtb3RvcnNCbG9jayIsIm1vdG9yc0xpc3RCbG9jayIsImZpcnN0TGlzdEJsb2NrIiwibW90b3JzSW1hZ2VzIiwiZmlyc3RJbWFnZUJsb2NrIiwiY29udGFjdEJ1dHRvbiIsImNvbnRhY3RCbG9jayIsImJ1dHRvbiIsImNvbnRhY3RCdG4xIiwiY29udGFjdEJ0bjIiLCJjb250YWN0QnRuMyIsInZhbHVlIiwidGFicyIsInJlcXVpcmUiLCJjb250YWluZXIiLCJwcm9kdWN0VGFic2NvbnRhaW5lciIsInBhcnRuZXJzVGFic2NvbnRhaW5lciIsIm9wdGlvbnNDb250YWluZXIiLCJQaG90b1N3aXBlTGlnaHRib3giLCJwcm9kdWN0TGlnaHRib3giLCJnYWxsZXJ5IiwiY2hpbGRyZW4iLCJzaG93SGlkZUFuaW1hdGlvblR5cGUiLCJwc3dwTW9kdWxlIiwicG9zdEFycm93IiwiY29uc29sZSIsImxvZyIsImNsaWNrSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhlYWRlckhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFRvcCIsInNjcm9sbCIsInRvcCIsImJlaGF2aW9yIiwiU3dpcGVyIiwiUGFnaW5hdGlvbiIsIk5hdmlnYXRpb24iLCJzd2lwZXJMYXN0TmV3cyIsInNsaWRlc1BlclZpZXciLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwiYnJlYWtwb2ludHMiLCJzd2lwZXJEb2MiLCJtb2R1bGVzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInN3aXBlckxhc3RzRXZlbnRzIiwic3dpcGVyQ2hyb25vIiwic2xpZGVUb0NsaWNrZWRTbGlkZSIsIm1vdXNld2hlZWwiLCJlbmFibGVkIiwic2Vuc2l0aXZpdHkiLCJmcmVlTW9kZSIsInN0aWNreSIsIm1vbWVudHVtQm91bmNlIiwic2Nyb2xsYmFyIiwiZWwiLCJkcmFnZ2FibGUiLCJzd2lwZXJCbG9ja3NJbmZvczEiLCJjZW50ZXJlZFNsaWRlcyIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJzd2lwZXJQcm9kdWN0c0NvbG9yaXMiLCJzd2lwZXJQcm9kdWN0c0FjY2Vzc29yaWVzIiwic3dpcGVyR2FsbGVyeVZvbCIsInN3aXBlckdhbGxlcnlMaWZlc3R5bGUiLCJzd2lwZXJHYWxsZXJ5QXRlbGllciJdLCJzb3VyY2VSb290IjoiIn0=