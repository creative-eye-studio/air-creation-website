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
  var motorsTabBtns = document.querySelectorAll(".motor-board a");
  motorsTabBtns.forEach(function (btn) {
    btn.onclick = function () {
      var motorId = btn.getAttribute('data-motor');
      var motorBlockId = document.querySelector("[data-motor-infos='" + motorId + "']");
      console.log(motorBlockId);
      //return false;
      document.querySelectorAll('.motor-list-block').forEach(function (motorBlock) {
        motorBlock.classList.remove('active');
      });
      motorBlockId.classList.add('active');
    };
  });
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

// MOTEUR DE RECHERCHE DES PRODUITS
// ------------------------------------------------------------------

// SWIPER
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxFQUFFO01BQ0pILGFBQWEsRUFBRSxDQUFDO01BQ2hCRSxZQUFZLEVBQUU7SUFDaEI7RUFDRjtBQUNGLENBQUMsQ0FBQztBQUVGLElBQU0wQixzQkFBc0IsR0FBRyxJQUFJaEMsK0NBQU0sQ0FBQyxvQkFBb0IsRUFBRTtFQUM5RFMsT0FBTyxFQUFFLENBQUNQLCtDQUFVLENBQUM7RUFDckJFLGFBQWEsRUFBRSxDQUFDO0VBQ2hCQyxJQUFJLEVBQUUsSUFBSTtFQUNWcUIsY0FBYyxFQUFFLElBQUk7RUFDcEJoQixVQUFVLEVBQUU7SUFDVkMsTUFBTSxFQUFFLHdCQUF3QjtJQUNoQ0MsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUNETCxXQUFXLEVBQUU7SUFDWCxJQUFJLEVBQUU7TUFDSkgsYUFBYSxFQUFFLENBQUM7TUFDaEJFLFlBQVksRUFBRTtJQUNoQjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsSUFBTTJCLG9CQUFvQixHQUFHLElBQUlqQywrQ0FBTSxDQUFDLGtCQUFrQixFQUFFO0VBQzFEUyxPQUFPLEVBQUUsQ0FBQ1AsK0NBQVUsQ0FBQztFQUNyQkUsYUFBYSxFQUFFLENBQUM7RUFDaEJDLElBQUksRUFBRSxJQUFJO0VBQ1ZxQixjQUFjLEVBQUUsSUFBSTtFQUNwQmhCLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUsc0JBQXNCO0lBQzlCQyxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RMLFdBQVcsRUFBRTtJQUNYLElBQUksRUFBRTtNQUNKSCxhQUFhLEVBQUUsQ0FBQztNQUNoQkUsWUFBWSxFQUFFO0lBQ2hCO0VBQ0Y7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDN2JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3dlYi9hcHAuc2Nzcz8yYTg0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy93ZWIvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuXHJcbi8vIEFPU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xyXG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xyXG5BT1MuaW5pdCh7XHJcbiAgZHVyYXRpb246IDEwMDAsXHJcbiAgZGVsYXk6IDIwMCxcclxuICBkZWJvdW5jZURlbGF5OiA1MCxcclxuICBvbmNlOiBmYWxzZSxcclxuICBtaXJyb3I6IHRydWVcclxufSk7XHJcblxyXG5cclxuLy8gUGFyYWxsYXhcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmltcG9ydCAncGFyYWxsYXgtaW1hZ2UnO1xyXG5cclxuXHJcbi8vIEhlYWRlclxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItYmFzZScpICE9IHVuZGVmaW5lZCkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICB2YXIgaGVhZGVyU2l0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlci1iYXNlJylbMF07XHJcblxyXG4gICAgaWYgKHNjcm9sbFBvc2l0aW9uID49IDUwKSB7XHJcbiAgICAgIGhlYWRlclNpdGUuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlclNpdGUuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQnKTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5cclxuLy8gTmF2aWdhdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxudmFyIG5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtbmF2Jyk7XHJcbnZhciBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcclxubGV0IG5hdkVsZW1lbnRzID0gWycuYnRuLW5hdicsICcucHJpbWFyeS1tZW51J107XHJcblxyXG5uYXZCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2RWxlbWVudHNbaV0pLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIH1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LW9wZW5lZCcpO1xyXG59XHJcblxyXG5uYXZMaW5rcy5mb3JFYWNoKG5hdkxpbmsgPT4ge1xyXG4gIG5hdkxpbmsub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXZFbGVtZW50c1tpXSkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW5lZCcpO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLy8gU291cy1OYXZpZ2F0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG52YXIgc3ViTmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWItbWVudS1idG4nKTtcclxuXHJcbnN1Yk5hdkJ1dHRvbnMuZm9yRWFjaChzdWJOYXZCdXR0b24gPT4ge1xyXG4gIHN1Yk5hdkJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKVxyXG4gICAge1xyXG4gICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgIHN1Yk5hdkJ1dHRvbnMuZm9yRWFjaChzdWJOYXZCdXR0b24gPT4ge1xyXG4gICAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vIFBhZ2UgQWNjdWVpbFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuJCgnLmhvbWUtaGlkZGVuLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgJCgnLmhvbWUtaGlkZGVuLXRleHQnKS5zbGlkZVRvZ2dsZSgnc2xvdycpO1xyXG59KVxyXG5cclxuXHJcbi8vIFBhZ2UgUHJvZHVpdFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW90b3ItYm9hcmRcIikgIT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gIHZhciBtb3RvcnNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vdG9yLWJvYXJkIC50YWJcIik7ICBcclxuICB2YXIgZmlyc3RCbG9jayA9IG1vdG9yc1RhYlswXTtcclxuICBmaXJzdEJsb2NrLmNsYXNzTmFtZSA9ICd0YWIgYWN0aXZlJztcclxuXHJcbiAgdmFyIG1vdG9yc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb3Rvci1ib2FyZCAuYmxvY2tcIik7XHJcbiAgdmFyIGZpcnN0QmxvY2sgPSBtb3RvcnNCbG9ja1swXTtcclxuICBmaXJzdEJsb2NrLmNsYXNzTmFtZSA9ICd0YWItcGFuZSBibG9jayBhY3RpdmUnO1xyXG5cclxuICB2YXIgbW90b3JzTGlzdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb3Rvci1saXN0LWNvbnRhaW5lciAubW90b3ItbGlzdC1ibG9ja1wiKTtcclxuICB2YXIgZmlyc3RMaXN0QmxvY2sgPSBtb3RvcnNMaXN0QmxvY2tbMF07XHJcbiAgZmlyc3RMaXN0QmxvY2suY2xhc3NOYW1lID0gJ21vdG9yLWxpc3QtYmxvY2sgYWN0aXZlJztcclxuXHJcbiAgdmFyIG1vdG9yc0ltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW90b3ItaW1hZ2UtY29udGFpbmVyIC5tb3Rvci1pbWFnZVwiKTtcclxuICB2YXIgZmlyc3RJbWFnZUJsb2NrID0gbW90b3JzSW1hZ2VzWzBdO1xyXG4gIGZpcnN0SW1hZ2VCbG9jay5jbGFzc05hbWUgPSAnbW90b3ItaW1hZ2UgYWN0aXZlJztcclxuXHJcbiAgdmFyIG1vdG9yc1RhYkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vdG9yLWJvYXJkIGFcIik7XHJcblxyXG4gIG1vdG9yc1RhYkJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgYnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgbW90b3JJZCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW90b3InKTtcclxuICAgICAgdmFyIG1vdG9yQmxvY2tJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tb3Rvci1pbmZvcz0nXCIgKyBtb3RvcklkICsgXCInXVwiKTtcclxuICAgICAgY29uc29sZS5sb2cobW90b3JCbG9ja0lkKTtcclxuICAgICAgLy9yZXR1cm4gZmFsc2U7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3Rvci1saXN0LWJsb2NrJykuZm9yRWFjaChtb3RvckJsb2NrID0+IHtcclxuICAgICAgICBtb3RvckJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgICAgbW90b3JCbG9ja0lkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG4vLyBDb250YWN0IEZvcm1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnZhciBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1jb250YWN0Jyk7XHJcbnZhciBjb250YWN0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1ibG9jaycpO1xyXG5jb250YWN0QnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcclxuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29udGFjdEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRhY3Qtb3BlbmVkJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnZhciBjb250YWN0QnRuMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnRuMScpO1xyXG52YXIgY29udGFjdEJ0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdEJ0bjInKTtcclxudmFyIGNvbnRhY3RCdG4zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RCdG4zJyk7XHJcblxyXG5jb250YWN0QnRuMS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMVwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTJcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0zXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuICBjb250YWN0QnRuMS5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsJyk7XHJcbn1cclxuXHJcbmNvbnRhY3RCdG4yLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdjb250YWN0X2Zvcm1bZ2VuZGVyXSddOmNoZWNrZWRcIikubGVuZ3RoIDwgMSkge3JldHVybiBmYWxzZTt9XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fbG5hbWUnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9mbmFtZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX3Bob25lJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fZW1haWwnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0xXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMlwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTNcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gIGNvbnRhY3RCdG4xLmNsYXNzTGlzdC5hZGQoJ2Z1bGwnKTtcclxuICBjb250YWN0QnRuMi5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsJyk7XHJcbn07XHJcblxyXG5jb250YWN0QnRuMy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nY29udGFjdF9mb3JtW2N1c3RvbWVyX3R5cGVdJ106Y2hlY2tlZFwiKS5sZW5ndGggPCAxKSB7cmV0dXJuIGZhbHNlO31cclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0xXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMlwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTNcIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gIGNvbnRhY3RCdG4yLmNsYXNzTGlzdC5hZGQoJ2Z1bGwnKTtcclxufTtcclxuXHJcblxyXG4vLyBUYWJzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG52YXIgdGFicyA9IHJlcXVpcmUoJ3RhYnMnKTtcclxudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItY29udGFpbmVyJylcclxudGFicyhjb250YWluZXIpO1xyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJsb2NrLTInKSAhPSB1bmRlZmluZWQpIHtcclxuICB2YXIgcHJvZHVjdFRhYnNjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1ibG9jay0yJylcclxuICB0YWJzKHByb2R1Y3RUYWJzY29udGFpbmVyKTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVycy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcclxuICB2YXIgcGFydG5lcnNUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcnRuZXJzLWNvbnRhaW5lcicpXHJcbiAgdGFicyhwYXJ0bmVyc1RhYnNjb250YWluZXIpO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdi1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcclxuICB2YXIgcGFydG5lcnNUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdi1jb250YWluZXInKVxyXG4gIHRhYnMocGFydG5lcnNUYWJzY29udGFpbmVyKTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xyXG4gIHZhciBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtY29udGFpbmVyJylcclxuICB0YWJzKG9wdGlvbnNDb250YWluZXIpO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlcy10YWJzLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xyXG4gIHZhciBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlcy10YWJzLWNvbnRhaW5lcicpXHJcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRhYnMtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XHJcbiAgdmFyIG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10YWJzLWNvbnRhaW5lcicpXHJcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3Rvci10YWJzLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xyXG4gIHZhciBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdG9yLXRhYnMtY29udGFpbmVyJylcclxuICB0YWJzKG9wdGlvbnNDb250YWluZXIpO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtbGlzdCcpICE9IHVuZGVmaW5lZCkge1xyXG4gIHZhciBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMtbGlzdCcpXHJcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcclxufVxyXG5cclxuXHJcbi8vIExpZ2h0Ym94XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgUGhvdG9Td2lwZUxpZ2h0Ym94IGZyb20gJ3Bob3Rvc3dpcGUvbGlnaHRib3gnO1xyXG5pbXBvcnQgJ3Bob3Rvc3dpcGUvc3R5bGUuY3NzJztcclxuY29uc3QgcHJvZHVjdExpZ2h0Ym94ID0gbmV3IFBob3RvU3dpcGVMaWdodGJveCh7XHJcbiAgZ2FsbGVyeTogJyNwcm9kdWN0LWdhbGxlcmllcywgI29wdGlvbnMtZ2FsbGVyeScsXHJcbiAgY2hpbGRyZW46ICdhJyxcclxuICBzaG93SGlkZUFuaW1hdGlvblR5cGU6ICdmYWRlJyxcclxuICBwc3dwTW9kdWxlOiAoKSA9PiBpbXBvcnQoJ3Bob3Rvc3dpcGUnKSxcclxufSk7XHJcbnByb2R1Y3RMaWdodGJveC5pbml0KCk7XHJcblxyXG5cclxuLy8gUG9zdFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxudmFyIHBvc3RBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtZG93bi1wb3N0JylcclxuaWYgKHBvc3RBcnJvdyAhPSB1bmRlZmluZWQpIHtcclxuICBjb25zb2xlLmxvZyhcInRyb3V2w6lcIik7XHJcbiAgcG9zdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5vZmZzZXRIZWlnaHQ7XHJcbiAgY29uc3Qgb2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3N0LWNvbnRlbnRcIikub2Zmc2V0VG9wIC0gaGVhZGVySGVpZ2h0O1xyXG4gIHNjcm9sbCh7XHJcbiAgICB0b3A6IG9mZnNldFRvcCxcclxuICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBNT1RFVVIgREUgUkVDSEVSQ0hFIERFUyBQUk9EVUlUU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4vLyBTV0lQRVJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmltcG9ydCBTd2lwZXIsIHsgUGFnaW5hdGlvbiwgTmF2aWdhdGlvbiB9IGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XHJcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcclxuXHJcbmNvbnN0IHN3aXBlckxhc3ROZXdzID0gbmV3IFN3aXBlcignLnBvc3RzJywge1xyXG4gIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gIC8vIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMTAyNDoge1xyXG4gICAgICAvLyBjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICB9LFxyXG4gICAgMTIwMDoge1xyXG4gICAgICAvLyBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBzd2lwZXJEb2MgPSBuZXcgU3dpcGVyKCcucHJvZHVjdC1kb2MtbGlzdCcsIHtcclxuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXHJcbiAgc2xpZGVzUGVyVmlldzogMSxcclxuICAvL2NlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gIC8vIGxvb3A6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnN3aXBlci1kb2MtYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnN3aXBlci1kb2MtYnV0dG9uLXByZXYnLFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDY0MDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAvL2NlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAvL2NlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIDEyMDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgLy9jZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJMYXN0c0V2ZW50cyA9IG5ldyBTd2lwZXIoJy5ob21lLXRpbWVsaW5lLWNvbnRhaW5lcicsIHtcclxuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXHJcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICB9LFxyXG4gICAgMTIwMDoge1xyXG4gICAgICBzcGFjZUJldHdlZW46IDYwLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgfSxcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyQ2hyb25vID0gbmV3IFN3aXBlcignLmNocm9uby1zd2lwZXItMScsIHtcclxuICBtb2R1bGVzOiBbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbl0sXHJcbiAgc3BhY2VCZXR3ZWVuOiAxMDAsXHJcbiAgc2xpZGVUb0NsaWNrZWRTbGlkZTogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxuICBtb3VzZXdoZWVsOiB7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgc2Vuc2l0aXZpdHk6IDUuNSxcclxuICB9LFxyXG4gIGZyZWVNb2RlOiB7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgc3RpY2t5OiBmYWxzZSxcclxuICAgIG1vbWVudHVtQm91bmNlOiBmYWxzZSxcclxuICB9LFxyXG4gIHNjcm9sbGJhcjoge1xyXG4gICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIH0sXHJcbiAgICAxMjAwOiB7XHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTUwLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgfSxcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyQmxvY2tzSW5mb3MxID0gbmV3IFN3aXBlcignLnNsaWRlci1tb2JpbGUtY29udGFpbmVyJywge1xyXG4gICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJQcm9kdWN0c0NvbG9yaXMgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWNvbG9yaXMnLCB7XHJcbiAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXHJcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJQcm9kdWN0c0FjY2Vzc29yaWVzID0gbmV3IFN3aXBlcignLnNsaWRlci1hY2Nlc3NvaXJpZXMnLCB7XHJcbiAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJHYWxsZXJ5Vm9sID0gbmV3IFN3aXBlcignLmdhbGxlcnktdm9sJywge1xyXG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcclxuICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiBcIi52b2wtYnV0dG9uLW5leHRcIixcclxuICAgIHByZXZFbDogXCIudm9sLWJ1dHRvbi1wcmV2XCIsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMTAyNDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3Qgc3dpcGVyR2FsbGVyeUxpZmVzdHlsZSA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LWxpZmVzdHlsZScsIHtcclxuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXHJcbiAgc2xpZGVzUGVyVmlldzogMSxcclxuICBsb29wOiB0cnVlLFxyXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogXCIubGlmZXN0eWxlLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICBwcmV2RWw6IFwiLmxpZmVzdHlsZS1idXR0b24tcHJldlwiLFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDEwMjQ6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmNvbnN0IHN3aXBlckdhbGxlcnlBdGVsaWVyID0gbmV3IFN3aXBlcignLmdhbGxlcnktYXRlbGllcicsIHtcclxuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXHJcbiAgc2xpZGVzUGVyVmlldzogMSxcclxuICBsb29wOiB0cnVlLFxyXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogXCIuYXRlbGllci1idXR0b24tbmV4dFwiLFxyXG4gICAgcHJldkVsOiBcIi5hdGVsaWVyLWJ1dHRvbi1wcmV2XCIsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMTAyNDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJBT1MiLCJpbml0IiwiZHVyYXRpb24iLCJkZWxheSIsImRlYm91bmNlRGVsYXkiLCJvbmNlIiwibWlycm9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5kZWZpbmVkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsWSIsImhlYWRlclNpdGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibmF2QnV0dG9uIiwibmF2TGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2RWxlbWVudHMiLCJvbmNsaWNrIiwiaSIsImxlbmd0aCIsInRvZ2dsZSIsImZvckVhY2giLCJuYXZMaW5rIiwic3ViTmF2QnV0dG9ucyIsInN1Yk5hdkJ1dHRvbiIsImNvbnRhaW5zIiwiJCIsIm9uIiwic2xpZGVUb2dnbGUiLCJtb3RvcnNUYWIiLCJmaXJzdEJsb2NrIiwiY2xhc3NOYW1lIiwibW90b3JzQmxvY2siLCJtb3RvcnNMaXN0QmxvY2siLCJmaXJzdExpc3RCbG9jayIsIm1vdG9yc0ltYWdlcyIsImZpcnN0SW1hZ2VCbG9jayIsIm1vdG9yc1RhYkJ0bnMiLCJidG4iLCJtb3RvcklkIiwiZ2V0QXR0cmlidXRlIiwibW90b3JCbG9ja0lkIiwiY29uc29sZSIsImxvZyIsIm1vdG9yQmxvY2siLCJjb250YWN0QnV0dG9uIiwiY29udGFjdEJsb2NrIiwiYnV0dG9uIiwiY29udGFjdEJ0bjEiLCJjb250YWN0QnRuMiIsImNvbnRhY3RCdG4zIiwidmFsdWUiLCJ0YWJzIiwicmVxdWlyZSIsImNvbnRhaW5lciIsInByb2R1Y3RUYWJzY29udGFpbmVyIiwicGFydG5lcnNUYWJzY29udGFpbmVyIiwib3B0aW9uc0NvbnRhaW5lciIsIlBob3RvU3dpcGVMaWdodGJveCIsInByb2R1Y3RMaWdodGJveCIsImdhbGxlcnkiLCJjaGlsZHJlbiIsInNob3dIaWRlQW5pbWF0aW9uVHlwZSIsInBzd3BNb2R1bGUiLCJwb3N0QXJyb3ciLCJjbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJoZWFkZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRUb3AiLCJzY3JvbGwiLCJ0b3AiLCJiZWhhdmlvciIsIlN3aXBlciIsIlBhZ2luYXRpb24iLCJOYXZpZ2F0aW9uIiwic3dpcGVyTGFzdE5ld3MiLCJzbGlkZXNQZXJWaWV3IiwibG9vcCIsInNwYWNlQmV0d2VlbiIsImJyZWFrcG9pbnRzIiwic3dpcGVyRG9jIiwibW9kdWxlcyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJzd2lwZXJMYXN0c0V2ZW50cyIsInN3aXBlckNocm9ubyIsInNsaWRlVG9DbGlja2VkU2xpZGUiLCJtb3VzZXdoZWVsIiwiZW5hYmxlZCIsInNlbnNpdGl2aXR5IiwiZnJlZU1vZGUiLCJzdGlja3kiLCJtb21lbnR1bUJvdW5jZSIsInNjcm9sbGJhciIsImVsIiwiZHJhZ2dhYmxlIiwic3dpcGVyQmxvY2tzSW5mb3MxIiwiY2VudGVyZWRTbGlkZXMiLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwic3dpcGVyUHJvZHVjdHNDb2xvcmlzIiwic3dpcGVyUHJvZHVjdHNBY2Nlc3NvcmllcyIsInN3aXBlckdhbGxlcnlWb2wiLCJzd2lwZXJHYWxsZXJ5TGlmZXN0eWxlIiwic3dpcGVyR2FsbGVyeUF0ZWxpZXIiXSwic291cmNlUm9vdCI6IiJ9