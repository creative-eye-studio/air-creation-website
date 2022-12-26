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
  var motorsBlock = document.querySelectorAll(".motor-board .block");
  var firstBlock = motorsBlock[0];
  firstBlock.className = 'block active';
  var motorsListBlock = document.querySelectorAll(".motor-list-container .motor-list-block");
  var firstListBlock = motorsListBlock[0];
  firstListBlock.className = 'motor-list-block active';
  var motorsImages = document.querySelectorAll(".motor-image-container .motor-image");
  var firstImageBlock = motorsImages[0];
  firstImageBlock.className = 'motor-image active';
  var motorSelect = document.querySelector('.motor-select');
  if (motorSelect) {
    motorSelect.addEventListener('change', function () {
      var valueSelected = motorSelect.value;
      var blockSelected = document.querySelector('[data-motor="' + valueSelected + '"]');
      var blockInfosSelected = document.querySelector('[data-motor-infos="' + valueSelected + '"]');
      var imageSelected = document.querySelector('[data-motor-image="' + valueSelected + '"]');
      motorsBlock.forEach(function (block) {
        block.classList.remove('active');
      });
      motorsListBlock.forEach(function (block) {
        block.classList.remove('active');
      });
      motorsImages.forEach(function (block) {
        block.classList.remove('active');
      });
      blockSelected.classList.add('active');
      blockInfosSelected.classList.add('active');
      imageSelected.classList.add('active');
    });
  }
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-ca0482","vendors-node_modules_swup_debug-plugin_lib_index_js-node_modules_swup_fade-theme_lib_index_js-8ddd4c","vendors-node_modules_aos_dist_aos_js-node_modules_aos_dist_aos_css-node_modules_photoswipe_di-d5d52d","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_bo-c9ceb2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3R5bGVzL3dlYi9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy93ZWIvYXBwLnNjc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5cbi8vIEFPU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xuQU9TLmluaXQoe1xuICBkdXJhdGlvbjogMTAwMCxcbiAgZGVsYXk6IDIwMCxcbiAgZGVib3VuY2VEZWxheTogNTAsXG4gIG9uY2U6IGZhbHNlLFxuICBtaXJyb3I6IHRydWVcbn0pO1xuXG5cblxuLy8gUkVMT0FEIFBBR0Vcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyppbXBvcnQgU3d1cCBmcm9tICdzd3VwJztcbmltcG9ydCBTd3VwQm9keUNsYXNzUGx1Z2luIGZyb20gJ0Bzd3VwL2JvZHktY2xhc3MtcGx1Z2luJztcblxuY29uc3Qgc3d1cCA9IG5ldyBTd3VwKHtcbiAgcGx1Z2luczogW25ldyBTd3VwQm9keUNsYXNzUGx1Z2luKCldXG5cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzd3VwOmNvbnRlbnRSZXBsYWNlZCcsIGZ1bmN0aW9uKCl7XG4gIEFPUy5pbml0KCk7XG4gIHN3aXBlckZ1bmN0aW9ucygpO1xuICBPcGVuTGF5ZXJzTWFwKCk7XG59KSovXG5cblxuXG5cbi8vIFBhcmFsbGF4XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCAncGFyYWxsYXgtaW1hZ2UnO1xuXG5cbi8vIEhlYWRlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1iYXNlJykgIT0gdW5kZWZpbmVkKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIHZhciBoZWFkZXJTaXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyLWJhc2UnKVswXTtcblxuICAgIGlmIChzY3JvbGxQb3NpdGlvbiA+PSA1MCkge1xuICAgICAgaGVhZGVyU2l0ZS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXJTaXRlLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkJyk7XG4gICAgfVxuICB9KVxufVxuXG5cblxuLy8gTmF2aWdhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgbmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1uYXYnKTtcbnZhciBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcbmxldCBuYXZFbGVtZW50cyA9IFsnLmJ0bi1uYXYnLCAnLnByaW1hcnktbWVudSddO1xuXG5uYXZCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXZFbGVtZW50c1tpXSkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIH1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ25hdi1vcGVuZWQnKTtcbn1cblxubmF2TGlua3MuZm9yRWFjaChuYXZMaW5rID0+IHtcbiAgbmF2TGluay5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2RWxlbWVudHNbaV0pLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW5lZCcpO1xuICB9XG59KTtcblxuXG5cbi8vIFNvdXMtTmF2aWdhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgc3ViTmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWItbWVudS1idG4nKTtcblxuc3ViTmF2QnV0dG9ucy5mb3JFYWNoKHN1Yk5hdkJ1dHRvbiA9PiB7XG4gIHN1Yk5hdkJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdWJOYXZCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgXG4gICAge1xuICAgICAgc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0gXG4gICAgZWxzZSBcbiAgICB7XG4gICAgICBzdWJOYXZCdXR0b25zLmZvckVhY2goc3ViTmF2QnV0dG9uID0+IHtcbiAgICAgICAgc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICB9XG59KTtcblxuXG5cbi8vIFBhZ2UgQWNjdWVpbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kKCcuaG9tZS1oaWRkZW4tYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgJCgnLmhvbWUtaGlkZGVuLXRleHQnKS5zbGlkZVRvZ2dsZSgnc2xvdycpO1xufSlcblxuXG5cblxuLy8gUGFnZSBQcm9kdWl0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vdG9yLWJvYXJkXCIpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgbW90b3JzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vdG9yLWJvYXJkIC5ibG9ja1wiKTtcbiAgdmFyIGZpcnN0QmxvY2sgPSBtb3RvcnNCbG9ja1swXTtcbiAgZmlyc3RCbG9jay5jbGFzc05hbWUgPSAnYmxvY2sgYWN0aXZlJztcblxuICB2YXIgbW90b3JzTGlzdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb3Rvci1saXN0LWNvbnRhaW5lciAubW90b3ItbGlzdC1ibG9ja1wiKTtcbiAgdmFyIGZpcnN0TGlzdEJsb2NrID0gbW90b3JzTGlzdEJsb2NrWzBdO1xuICBmaXJzdExpc3RCbG9jay5jbGFzc05hbWUgPSAnbW90b3ItbGlzdC1ibG9jayBhY3RpdmUnO1xuXG4gIHZhciBtb3RvcnNJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vdG9yLWltYWdlLWNvbnRhaW5lciAubW90b3ItaW1hZ2VcIik7XG4gIHZhciBmaXJzdEltYWdlQmxvY2sgPSBtb3RvcnNJbWFnZXNbMF07XG4gIGZpcnN0SW1hZ2VCbG9jay5jbGFzc05hbWUgPSAnbW90b3ItaW1hZ2UgYWN0aXZlJztcblxuXG4gIHZhciBtb3RvclNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3Rvci1zZWxlY3QnKTtcblxuICBpZiAobW90b3JTZWxlY3QpIHtcbiAgICBtb3RvclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlU2VsZWN0ZWQgPSBtb3RvclNlbGVjdC52YWx1ZTtcbiAgICAgIHZhciBibG9ja1NlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbW90b3I9XCInICsgdmFsdWVTZWxlY3RlZCArICdcIl0nKTtcbiAgICAgIHZhciBibG9ja0luZm9zU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb3Rvci1pbmZvcz1cIicgKyB2YWx1ZVNlbGVjdGVkICsgJ1wiXScpO1xuICAgICAgdmFyIGltYWdlU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb3Rvci1pbWFnZT1cIicgKyB2YWx1ZVNlbGVjdGVkICsgJ1wiXScpO1xuXG4gICAgICBtb3RvcnNCbG9jay5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgbW90b3JzTGlzdEJsb2NrLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgICBibG9jay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICBtb3RvcnNJbWFnZXMuZm9yRWFjaChibG9jayA9PiB7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG5cbiAgICAgIGJsb2NrU2VsZWN0ZWQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBibG9ja0luZm9zU2VsZWN0ZWQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBpbWFnZVNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG5cbi8vIENvbnRhY3QgRm9ybVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtY29udGFjdCcpO1xudmFyIGNvbnRhY3RCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJsb2NrJyk7XG5jb250YWN0QnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb250YWN0QmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRhY3Qtb3BlbmVkJyk7XG4gIH1cbn0pO1xuXG52YXIgY29udGFjdEJ0bjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdEJ0bjEnKTtcbnZhciBjb250YWN0QnRuMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnRuMicpO1xudmFyIGNvbnRhY3RCdG4zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RCdG4zJyk7XG5cbmNvbnRhY3RCdG4xLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMVwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0yXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTNcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgY29udGFjdEJ0bjEuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbCcpO1xufVxuXG5jb250YWN0QnRuMi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9J2NvbnRhY3RfZm9ybVtnZW5kZXJdJ106Y2hlY2tlZFwiKS5sZW5ndGggPCAxKSB7cmV0dXJuIGZhbHNlO31cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fbG5hbWUnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fZm5hbWUnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fcGhvbmUnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fZW1haWwnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTFcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMlwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0zXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gIGNvbnRhY3RCdG4xLmNsYXNzTGlzdC5hZGQoJ2Z1bGwnKTtcbiAgY29udGFjdEJ0bjIuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbCcpO1xufTtcblxuY29udGFjdEJ0bjMub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdjb250YWN0X2Zvcm1bY3VzdG9tZXJfdHlwZV0nXTpjaGVja2VkXCIpLmxlbmd0aCA8IDEpIHtyZXR1cm4gZmFsc2U7fVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0yXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTNcIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgY29udGFjdEJ0bjIuY2xhc3NMaXN0LmFkZCgnZnVsbCcpO1xufTtcblxuXG5cblxuLy8gVGFic1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgdGFicyA9IHJlcXVpcmUoJ3RhYnMnKTtcbnZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRhaW5lcicpXG50YWJzKGNvbnRhaW5lcik7XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1ibG9jay0yJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBwcm9kdWN0VGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJsb2NrLTInKVxuICB0YWJzKHByb2R1Y3RUYWJzY29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVycy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIHBhcnRuZXJzVGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVycy1jb250YWluZXInKVxuICB0YWJzKHBhcnRuZXJzVGFic2NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2LWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgcGFydG5lcnNUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdi1jb250YWluZXInKVxuICB0YWJzKHBhcnRuZXJzVGFic2NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1jb250YWluZXInKVxuICB0YWJzKG9wdGlvbnNDb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlcy10YWJzLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZXMtdGFicy1jb250YWluZXInKVxuICB0YWJzKG9wdGlvbnNDb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGFicy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10YWJzLWNvbnRhaW5lcicpXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1saXN0JykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtbGlzdCcpXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XG59XG5cblxuXG5cbi8vIExpZ2h0Ym94XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBQaG90b1N3aXBlTGlnaHRib3ggZnJvbSAncGhvdG9zd2lwZS9saWdodGJveCc7XG5pbXBvcnQgJ3Bob3Rvc3dpcGUvc3R5bGUuY3NzJztcbmNvbnN0IHByb2R1Y3RMaWdodGJveCA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3goe1xuICBnYWxsZXJ5OiAnI3Byb2R1Y3QtZ2FsbGVyaWVzLCAjb3B0aW9ucy1nYWxsZXJ5JyxcbiAgY2hpbGRyZW46ICdhJyxcbiAgc2hvd0hpZGVBbmltYXRpb25UeXBlOiAnZmFkZScsXG4gIHBzd3BNb2R1bGU6ICgpID0+IGltcG9ydCgncGhvdG9zd2lwZScpLFxufSk7XG5wcm9kdWN0TGlnaHRib3guaW5pdCgpO1xuXG5cblxuXG4vLyBQb3N0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBwb3N0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWRvd24tcG9zdCcpXG5pZiAocG9zdEFycm93ICE9IHVuZGVmaW5lZCkge1xuICBjb25zb2xlLmxvZyhcInRyb3V2w6lcIik7XG4gIHBvc3RBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG59XG5cbiBcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IG9mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9zdC1jb250ZW50XCIpLm9mZnNldFRvcCAtIGhlYWRlckhlaWdodDtcbiAgc2Nyb2xsKHtcbiAgICB0b3A6IG9mZnNldFRvcCxcbiAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICB9KTtcbn1cblxuXG5cblxuLy8gU3dpcGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBTd2lwZXIsIHsgUGFnaW5hdGlvbiwgTmF2aWdhdGlvbiB9IGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xuXG5jb25zdCBzd2lwZXJMYXN0TmV3cyA9IG5ldyBTd2lwZXIoJy5wb3N0cycsIHtcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICBzcGFjZUJldHdlZW46IDIwLFxuICBicmVha3BvaW50czoge1xuICAgIDEwMjQ6IHtcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgfVxuICB9XG59KVxuXG5jb25zdCBzd2lwZXJEb2MgPSBuZXcgU3dpcGVyKCcucHJvZHVjdC1kb2MtbGlzdCcsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICAvL2NlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAvLyBsb29wOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1kb2MtYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zd2lwZXItZG9jLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA2NDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAvL2NlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgIC8vbG9vcDogdHJ1ZSxcbiAgICB9LFxuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIC8vY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgLy9sb29wOiB0cnVlLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIC8vY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICAvL2xvb3A6IHRydWUsXG4gICAgfVxuICB9XG59KTtcblxuXG5jb25zdCBzd2lwZXJMYXN0c0V2ZW50cyA9IG5ldyBTd2lwZXIoJy5ob21lLXRpbWVsaW5lLWNvbnRhaW5lcicsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgc3BhY2VCZXR3ZWVuOiA2MCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgfSxcbiAgfVxufSk7XG5cblxuY29uc3Qgc3dpcGVyQ2hyb25vID0gbmV3IFN3aXBlcignLmNocm9uby1zd2lwZXItMScsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb24sIFBhZ2luYXRpb25dLFxuICBzcGFjZUJldHdlZW46IDEwMCxcbiAgc2xpZGVUb0NsaWNrZWRTbGlkZTogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gIG1vdXNld2hlZWw6IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHNlbnNpdGl2aXR5OiA1LjUsXG4gIH0sXG4gIGZyZWVNb2RlOiB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBzdGlja3k6IGZhbHNlLFxuICAgIG1vbWVudHVtQm91bmNlOiBmYWxzZSxcbiAgfSxcbiAgc2Nyb2xsYmFyOiB7XG4gICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcbiAgICBkcmFnZ2FibGU6IHRydWUsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgc3BhY2VCZXR3ZWVuOiAxNTAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIH0sXG4gIH1cbn0pO1xuXG5cbmNvbnN0IHN3aXBlckJsb2Nrc0luZm9zMSA9IG5ldyBTd2lwZXIoJy5zbGlkZXItbW9iaWxlLWNvbnRhaW5lcicsIHtcbiAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICBsb29wOiB0cnVlLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG59KTtcblxuXG5jb25zdCBzd2lwZXJQcm9kdWN0c0NvbG9yaXMgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWNvbG9yaXMnLCB7XG4gICAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIGxvb3A6IHRydWUsXG59KTtcblxuXG5jb25zdCBzd2lwZXJQcm9kdWN0c0FjY2Vzc29yaWVzID0gbmV3IFN3aXBlcignLnNsaWRlci1hY2Nlc3NvaXJpZXMnLCB7XG4gICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIGxvb3A6IHRydWUsXG59KTtcblxuY29uc3Qgc3dpcGVyR2FsbGVyeVZvbCA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LXZvbCcsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBsb29wOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi52b2wtYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnZvbC1idXR0b24tcHJldlwiLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIH0sXG4gIH0sXG59KVxuXG5jb25zdCBzd2lwZXJHYWxsZXJ5TGlmZXN0eWxlID0gbmV3IFN3aXBlcignLmdhbGxlcnktbGlmZXN0eWxlJywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLmxpZmVzdHlsZS1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIubGlmZXN0eWxlLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgfSxcbiAgfSxcbn0pXG5cbmNvbnN0IHN3aXBlckdhbGxlcnlBdGVsaWVyID0gbmV3IFN3aXBlcignLmdhbGxlcnktYXRlbGllcicsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBsb29wOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5hdGVsaWVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5hdGVsaWVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgfSxcbiAgfSxcbn0pIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkFPUyIsImluaXQiLCJkdXJhdGlvbiIsImRlbGF5IiwiZGVib3VuY2VEZWxheSIsIm9uY2UiLCJtaXJyb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmRlZmluZWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxZIiwiaGVhZGVyU2l0ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuYXZCdXR0b24iLCJuYXZMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXZFbGVtZW50cyIsIm9uY2xpY2siLCJpIiwibGVuZ3RoIiwidG9nZ2xlIiwiZm9yRWFjaCIsIm5hdkxpbmsiLCJzdWJOYXZCdXR0b25zIiwic3ViTmF2QnV0dG9uIiwiY29udGFpbnMiLCIkIiwib24iLCJzbGlkZVRvZ2dsZSIsIm1vdG9yc0Jsb2NrIiwiZmlyc3RCbG9jayIsImNsYXNzTmFtZSIsIm1vdG9yc0xpc3RCbG9jayIsImZpcnN0TGlzdEJsb2NrIiwibW90b3JzSW1hZ2VzIiwiZmlyc3RJbWFnZUJsb2NrIiwibW90b3JTZWxlY3QiLCJ2YWx1ZVNlbGVjdGVkIiwidmFsdWUiLCJibG9ja1NlbGVjdGVkIiwiYmxvY2tJbmZvc1NlbGVjdGVkIiwiaW1hZ2VTZWxlY3RlZCIsImJsb2NrIiwiY29udGFjdEJ1dHRvbiIsImNvbnRhY3RCbG9jayIsImJ1dHRvbiIsImNvbnRhY3RCdG4xIiwiY29udGFjdEJ0bjIiLCJjb250YWN0QnRuMyIsInRhYnMiLCJyZXF1aXJlIiwiY29udGFpbmVyIiwicHJvZHVjdFRhYnNjb250YWluZXIiLCJwYXJ0bmVyc1RhYnNjb250YWluZXIiLCJvcHRpb25zQ29udGFpbmVyIiwiUGhvdG9Td2lwZUxpZ2h0Ym94IiwicHJvZHVjdExpZ2h0Ym94IiwiZ2FsbGVyeSIsImNoaWxkcmVuIiwic2hvd0hpZGVBbmltYXRpb25UeXBlIiwicHN3cE1vZHVsZSIsInBvc3RBcnJvdyIsImNvbnNvbGUiLCJsb2ciLCJjbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJoZWFkZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRUb3AiLCJzY3JvbGwiLCJ0b3AiLCJiZWhhdmlvciIsIlN3aXBlciIsIlBhZ2luYXRpb24iLCJOYXZpZ2F0aW9uIiwic3dpcGVyTGFzdE5ld3MiLCJzbGlkZXNQZXJWaWV3IiwiY2VudGVyZWRTbGlkZXMiLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwiYnJlYWtwb2ludHMiLCJzd2lwZXJEb2MiLCJtb2R1bGVzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInN3aXBlckxhc3RzRXZlbnRzIiwic3dpcGVyQ2hyb25vIiwic2xpZGVUb0NsaWNrZWRTbGlkZSIsIm1vdXNld2hlZWwiLCJlbmFibGVkIiwic2Vuc2l0aXZpdHkiLCJmcmVlTW9kZSIsInN0aWNreSIsIm1vbWVudHVtQm91bmNlIiwic2Nyb2xsYmFyIiwiZWwiLCJkcmFnZ2FibGUiLCJzd2lwZXJCbG9ja3NJbmZvczEiLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwic3dpcGVyUHJvZHVjdHNDb2xvcmlzIiwic3dpcGVyUHJvZHVjdHNBY2Nlc3NvcmllcyIsInN3aXBlckdhbGxlcnlWb2wiLCJzd2lwZXJHYWxsZXJ5TGlmZXN0eWxlIiwic3dpcGVyR2FsbGVyeUF0ZWxpZXIiXSwic291cmNlUm9vdCI6IiJ9