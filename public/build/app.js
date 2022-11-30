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

// Lightbox
// ------------------------------------------------------------------


var productLightbox = new photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_12__["default"]({
  gallery: '#product-galleries',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDUiwrQ0FBVSxDQUFDO0VBQ3JCRSxhQUFhLEVBQUUsQ0FBQztFQUNoQkUsSUFBSSxFQUFFLElBQUk7RUFDVkssVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSx3QkFBd0I7SUFDaENDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDREwsV0FBVyxFQUFFO0lBQ1gsSUFBSSxFQUFFO01BQ0pKLGFBQWEsRUFBRSxDQUFDO01BQ2hCRyxZQUFZLEVBQUU7SUFDaEI7RUFDRjtBQUNGLENBQUMsQ0FBQztBQUVGLElBQU1pQixvQkFBb0IsR0FBRyxJQUFJeEIsK0NBQU0sQ0FBQyxrQkFBa0IsRUFBRTtFQUMxRFUsT0FBTyxFQUFFLENBQUNSLCtDQUFVLENBQUM7RUFDckJFLGFBQWEsRUFBRSxDQUFDO0VBQ2hCRSxJQUFJLEVBQUUsSUFBSTtFQUNWSyxVQUFVLEVBQUU7SUFDVkMsTUFBTSxFQUFFLHNCQUFzQjtJQUM5QkMsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUNETCxXQUFXLEVBQUU7SUFDWCxJQUFJLEVBQUU7TUFDSkosYUFBYSxFQUFFLENBQUM7TUFDaEJHLFlBQVksRUFBRTtJQUNoQjtFQUNGO0FBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ2piRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy93ZWIvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvd2ViL2FwcC5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuXG4vLyBBT1Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcbkFPUy5pbml0KHtcbiAgZHVyYXRpb246IDEwMDAsXG4gIGRlbGF5OiAyMDAsXG4gIGRlYm91bmNlRGVsYXk6IDUwLFxuICBvbmNlOiBmYWxzZSxcbiAgbWlycm9yOiB0cnVlXG59KTtcblxuXG5cbi8vIFJFTE9BRCBQQUdFXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qaW1wb3J0IFN3dXAgZnJvbSAnc3d1cCc7XG5pbXBvcnQgU3d1cEJvZHlDbGFzc1BsdWdpbiBmcm9tICdAc3d1cC9ib2R5LWNsYXNzLXBsdWdpbic7XG5cbmNvbnN0IHN3dXAgPSBuZXcgU3d1cCh7XG4gIHBsdWdpbnM6IFtuZXcgU3d1cEJvZHlDbGFzc1BsdWdpbigpXVxuXG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3d1cDpjb250ZW50UmVwbGFjZWQnLCBmdW5jdGlvbigpe1xuICBBT1MuaW5pdCgpO1xuICBzd2lwZXJGdW5jdGlvbnMoKTtcbiAgT3BlbkxheWVyc01hcCgpO1xufSkqL1xuXG5cblxuXG4vLyBQYXJhbGxheFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgJ3BhcmFsbGF4LWltYWdlJztcblxuXG4vLyBIZWFkZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItYmFzZScpICE9IHVuZGVmaW5lZCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB2YXIgaGVhZGVyU2l0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlci1iYXNlJylbMF07XG5cbiAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gNTApIHtcbiAgICAgIGhlYWRlclNpdGUuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyU2l0ZS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZCcpO1xuICAgIH1cbiAgfSlcbn1cblxuXG5cbi8vIE5hdmlnYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIG5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtbmF2Jyk7XG52YXIgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5sZXQgbmF2RWxlbWVudHMgPSBbJy5idG4tbmF2JywgJy5wcmltYXJ5LW1lbnUnXTtcblxubmF2QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2RWxlbWVudHNbaV0pLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtb3BlbmVkJyk7XG59XG5cbm5hdkxpbmtzLmZvckVhY2gobmF2TGluayA9PiB7XG4gIG5hdkxpbmsub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdkVsZW1lbnRzW2ldKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuZWQnKTtcbiAgfVxufSk7XG5cblxuXG4vLyBTb3VzLU5hdmlnYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIHN1Yk5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3ViLW1lbnUtYnRuJyk7XG5cbnN1Yk5hdkJ1dHRvbnMuZm9yRWFjaChzdWJOYXZCdXR0b24gPT4ge1xuICBzdWJOYXZCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIFxuICAgIHtcbiAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9IFxuICAgIGVsc2UgXG4gICAge1xuICAgICAgc3ViTmF2QnV0dG9ucy5mb3JFYWNoKHN1Yk5hdkJ1dHRvbiA9PiB7XG4gICAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG5cbi8vIENvbnRhY3QgRm9ybVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtY29udGFjdCcpO1xudmFyIGNvbnRhY3RCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJsb2NrJyk7XG5jb250YWN0QnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb250YWN0QmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRhY3Qtb3BlbmVkJyk7XG4gIH1cbn0pO1xuXG52YXIgY29udGFjdEJ0bjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdEJ0bjEnKTtcbnZhciBjb250YWN0QnRuMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnRuMicpO1xudmFyIGNvbnRhY3RCdG4zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RCdG4zJyk7XG5cbmNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdjb250YWN0X2Zvcm1bZ2VuZGVyXSddXCIpLmxlbmd0aCk7XG5cbmNvbnRhY3RCdG4xLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMVwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0yXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTNcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgY29udGFjdEJ0bjEuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbCcpO1xufVxuXG5jb250YWN0QnRuMi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9J2NvbnRhY3RfZm9ybVtnZW5kZXJdJ106Y2hlY2tlZFwiKS5sZW5ndGggPCAxKSB7cmV0dXJuIGZhbHNlO31cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fbG5hbWUnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fZm5hbWUnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fcGhvbmUnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fZW1haWwnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTFcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMlwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0zXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gIGNvbnRhY3RCdG4xLmNsYXNzTGlzdC5hZGQoJ2Z1bGwnKTtcbiAgY29udGFjdEJ0bjIuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbCcpO1xufTtcblxuY29udGFjdEJ0bjMub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdjb250YWN0X2Zvcm1bY3VzdG9tZXJfdHlwZV0nXTpjaGVja2VkXCIpLmxlbmd0aCA8IDEpIHtyZXR1cm4gZmFsc2U7fVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0yXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTNcIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgY29udGFjdEJ0bjIuY2xhc3NMaXN0LmFkZCgnZnVsbCcpO1xufTtcblxuXG5cblxuLy8gVGFic1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgdGFicyA9IHJlcXVpcmUoJ3RhYnMnKTtcbnZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRhaW5lcicpXG50YWJzKGNvbnRhaW5lcik7XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1ibG9jay0yJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBwcm9kdWN0VGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJsb2NrLTInKVxuICB0YWJzKHByb2R1Y3RUYWJzY29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVycy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIHBhcnRuZXJzVGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVycy1jb250YWluZXInKVxuICB0YWJzKHBhcnRuZXJzVGFic2NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2LWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgcGFydG5lcnNUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdi1jb250YWluZXInKVxuICB0YWJzKHBhcnRuZXJzVGFic2NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1jb250YWluZXInKVxuICB0YWJzKG9wdGlvbnNDb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlcy10YWJzLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZXMtdGFicy1jb250YWluZXInKVxuICB0YWJzKG9wdGlvbnNDb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGFicy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10YWJzLWNvbnRhaW5lcicpXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XG59XG5cblxuXG5cbi8vIExpZ2h0Ym94XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBQaG90b1N3aXBlTGlnaHRib3ggZnJvbSAncGhvdG9zd2lwZS9saWdodGJveCc7XG5pbXBvcnQgJ3Bob3Rvc3dpcGUvc3R5bGUuY3NzJztcbmNvbnN0IHByb2R1Y3RMaWdodGJveCA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3goe1xuICBnYWxsZXJ5OiAnI3Byb2R1Y3QtZ2FsbGVyaWVzJyxcbiAgY2hpbGRyZW46ICdhJyxcbiAgc2hvd0hpZGVBbmltYXRpb25UeXBlOiAnZmFkZScsXG4gIHBzd3BNb2R1bGU6ICgpID0+IGltcG9ydCgncGhvdG9zd2lwZScpLFxufSk7XG5wcm9kdWN0TGlnaHRib3guaW5pdCgpO1xuXG5cblxuXG4vLyBQb3N0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBwb3N0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWRvd24tcG9zdCcpXG5pZiAocG9zdEFycm93ICE9IHVuZGVmaW5lZCkge1xuICBjb25zb2xlLmxvZyhcInRyb3V2w6lcIik7XG4gIHBvc3RBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG59XG5cbiBcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IG9mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9zdC1jb250ZW50XCIpLm9mZnNldFRvcCAtIGhlYWRlckhlaWdodDtcbiAgc2Nyb2xsKHtcbiAgICB0b3A6IG9mZnNldFRvcCxcbiAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICB9KTtcbn1cblxuXG5cblxuLy8gUHJvZHVjdHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIG1vdG9yU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdG9yLXNlbGVjdCcpO1xudmFyIG1vdG9yc1NsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3Rvci1pbWFnZScpO1xuXG5pZiAobW90b3JTZWxlY3QpIHtcbiAgbW90b3JTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWVTZWxlY3RlZCA9IG1vdG9yU2VsZWN0LnZhbHVlO1xuICAgIHZhciBzbGlkZVNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2xpZGVyPVwiJyArIHZhbHVlU2VsZWN0ZWQgKyAnXCJdJylcblxuICAgIG1vdG9yc1NsaWRlcy5mb3JFYWNoKG1vdG9yc1NsaWRlID0+IHtcbiAgICAgIG1vdG9yc1NsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgc2xpZGVTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIGNvbnNvbGUubG9nKHZhbHVlU2VsZWN0ZWQpO1xuICB9KTtcbn1cblxuXG5cblxuLy8gU3dpcGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBTd2lwZXIsIHsgUGFnaW5hdGlvbiwgTmF2aWdhdGlvbiB9IGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xuXG5jb25zdCBzd2lwZXJMYXN0TmV3cyA9IG5ldyBTd2lwZXIoJy5wb3N0cycsIHtcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICBzcGFjZUJldHdlZW46IDIwLFxuICBicmVha3BvaW50czoge1xuICAgIDEwMjQ6IHtcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgfVxuICB9XG59KVxuXG5jb25zdCBzd2lwZXJEb2MgPSBuZXcgU3dpcGVyKCcucHJvZHVjdC1kb2MtbGlzdCcsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgbG9vcDogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zd2lwZXItZG9jLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWRvYy1idXR0b24tcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNjQwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICB9LFxuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICBsb29wOiB0cnVlLFxuICAgIH1cbiAgfVxufSk7XG5cblxuY29uc3Qgc3dpcGVyTGFzdHNFdmVudHMgPSBuZXcgU3dpcGVyKCcuaG9tZS10aW1lbGluZS1jb250YWluZXInLCB7XG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogNjAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIH0sXG4gIH1cbn0pO1xuXG5cbmNvbnN0IHN3aXBlckNocm9ubyA9IG5ldyBTd2lwZXIoJy5jaHJvbm8tc3dpcGVyLTEnLCB7XG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgc3BhY2VCZXR3ZWVuOiA2MCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgfSxcbiAgfVxufSk7XG5cblxuY29uc3Qgc3dpcGVyQmxvY2tzSW5mb3MxID0gbmV3IFN3aXBlcignLnNsaWRlci1tb2JpbGUtY29udGFpbmVyJywge1xuICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIGxvb3A6IHRydWUsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbn0pO1xuXG5cbmNvbnN0IHN3aXBlclByb2R1Y3RzQ29sb3JpcyA9IG5ldyBTd2lwZXIoJy5zbGlkZXItY29sb3JpcycsIHtcbiAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbn0pO1xuXG5cbmNvbnN0IHN3aXBlclByb2R1Y3RzQWNjZXNzb3JpZXMgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWFjY2Vzc29pcmllcycsIHtcbiAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbn0pO1xuXG5jb25zdCBzd2lwZXJHYWxsZXJ5Vm9sID0gbmV3IFN3aXBlcignLmdhbGxlcnktdm9sJywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnZvbC1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIudm9sLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgfSxcbiAgfSxcbn0pXG5cbmNvbnN0IHN3aXBlckdhbGxlcnlMaWZlc3R5bGUgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeS1saWZlc3R5bGUnLCB7XG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgbG9vcDogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIubGlmZXN0eWxlLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5saWZlc3R5bGUtYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9LFxuICB9LFxufSlcblxuY29uc3Qgc3dpcGVyR2FsbGVyeUF0ZWxpZXIgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeS1hdGVsaWVyJywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLmF0ZWxpZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLmF0ZWxpZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9LFxuICB9LFxufSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQU9TIiwiaW5pdCIsImR1cmF0aW9uIiwiZGVsYXkiLCJkZWJvdW5jZURlbGF5Iiwib25jZSIsIm1pcnJvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVuZGVmaW5lZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFkiLCJoZWFkZXJTaXRlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm5hdkJ1dHRvbiIsIm5hdkxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdkVsZW1lbnRzIiwib25jbGljayIsImkiLCJsZW5ndGgiLCJ0b2dnbGUiLCJmb3JFYWNoIiwibmF2TGluayIsInN1Yk5hdkJ1dHRvbnMiLCJzdWJOYXZCdXR0b24iLCJjb250YWlucyIsImNvbnRhY3RCdXR0b24iLCJjb250YWN0QmxvY2siLCJidXR0b24iLCJjb250YWN0QnRuMSIsImNvbnRhY3RCdG4yIiwiY29udGFjdEJ0bjMiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJ0YWJzIiwicmVxdWlyZSIsImNvbnRhaW5lciIsInByb2R1Y3RUYWJzY29udGFpbmVyIiwicGFydG5lcnNUYWJzY29udGFpbmVyIiwib3B0aW9uc0NvbnRhaW5lciIsIlBob3RvU3dpcGVMaWdodGJveCIsInByb2R1Y3RMaWdodGJveCIsImdhbGxlcnkiLCJjaGlsZHJlbiIsInNob3dIaWRlQW5pbWF0aW9uVHlwZSIsInBzd3BNb2R1bGUiLCJwb3N0QXJyb3ciLCJjbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJoZWFkZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRUb3AiLCJzY3JvbGwiLCJ0b3AiLCJiZWhhdmlvciIsIm1vdG9yU2VsZWN0IiwibW90b3JzU2xpZGVzIiwidmFsdWVTZWxlY3RlZCIsInNsaWRlU2VsZWN0ZWQiLCJtb3RvcnNTbGlkZSIsIlN3aXBlciIsIlBhZ2luYXRpb24iLCJOYXZpZ2F0aW9uIiwic3dpcGVyTGFzdE5ld3MiLCJzbGlkZXNQZXJWaWV3IiwiY2VudGVyZWRTbGlkZXMiLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwiYnJlYWtwb2ludHMiLCJzd2lwZXJEb2MiLCJtb2R1bGVzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInN3aXBlckxhc3RzRXZlbnRzIiwic3dpcGVyQ2hyb25vIiwic3dpcGVyQmxvY2tzSW5mb3MxIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwic3dpcGVyUHJvZHVjdHNDb2xvcmlzIiwic3dpcGVyUHJvZHVjdHNBY2Nlc3NvcmllcyIsInN3aXBlckdhbGxlcnlWb2wiLCJzd2lwZXJHYWxsZXJ5TGlmZXN0eWxlIiwic3dpcGVyR2FsbGVyeUF0ZWxpZXIiXSwic291cmNlUm9vdCI6IiJ9