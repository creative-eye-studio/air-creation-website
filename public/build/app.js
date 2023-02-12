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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxFQUFFO01BQ0pILGFBQWEsRUFBRSxDQUFDO01BQ2hCRSxZQUFZLEVBQUU7SUFDaEI7RUFDRjtBQUNGLENBQUMsQ0FBQztBQUVGLElBQU0wQixzQkFBc0IsR0FBRyxJQUFJaEMsK0NBQU0sQ0FBQyxvQkFBb0IsRUFBRTtFQUM5RFMsT0FBTyxFQUFFLENBQUNQLCtDQUFVLENBQUM7RUFDckJFLGFBQWEsRUFBRSxDQUFDO0VBQ2hCQyxJQUFJLEVBQUUsSUFBSTtFQUNWcUIsY0FBYyxFQUFFLElBQUk7RUFDcEJoQixVQUFVLEVBQUU7SUFDVkMsTUFBTSxFQUFFLHdCQUF3QjtJQUNoQ0MsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUNETCxXQUFXLEVBQUU7SUFDWCxJQUFJLEVBQUU7TUFDSkgsYUFBYSxFQUFFLENBQUM7TUFDaEJFLFlBQVksRUFBRTtJQUNoQjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsSUFBTTJCLG9CQUFvQixHQUFHLElBQUlqQywrQ0FBTSxDQUFDLGtCQUFrQixFQUFFO0VBQzFEUyxPQUFPLEVBQUUsQ0FBQ1AsK0NBQVUsQ0FBQztFQUNyQkUsYUFBYSxFQUFFLENBQUM7RUFDaEJDLElBQUksRUFBRSxJQUFJO0VBQ1ZxQixjQUFjLEVBQUUsSUFBSTtFQUNwQmhCLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUsc0JBQXNCO0lBQzlCQyxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RMLFdBQVcsRUFBRTtJQUNYLElBQUksRUFBRTtNQUNKSCxhQUFhLEVBQUUsQ0FBQztNQUNoQkUsWUFBWSxFQUFFO0lBQ2hCO0VBQ0Y7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDN2JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3dlYi9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvd2ViL2FwcC5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuXHJcblxyXG4vLyBBT1NcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuQU9TLmluaXQoe1xyXG4gIGR1cmF0aW9uOiAxMDAwLFxyXG4gIGRlbGF5OiAyMDAsXHJcbiAgZGVib3VuY2VEZWxheTogNTAsXHJcbiAgb25jZTogZmFsc2UsXHJcbiAgbWlycm9yOiB0cnVlXHJcbn0pO1xyXG5cclxuXHJcbi8vIFBhcmFsbGF4XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgJ3BhcmFsbGF4LWltYWdlJztcclxuXHJcblxyXG4vLyBIZWFkZXJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJhc2UnKSAhPSB1bmRlZmluZWQpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcclxuICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgdmFyIGhlYWRlclNpdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXItYmFzZScpWzBdO1xyXG5cclxuICAgIGlmIChzY3JvbGxQb3NpdGlvbiA+PSA1MCkge1xyXG4gICAgICBoZWFkZXJTaXRlLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXJTaXRlLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkJyk7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuXHJcbi8vIE5hdmlnYXRpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnZhciBuYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLW5hdicpO1xyXG52YXIgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XHJcbmxldCBuYXZFbGVtZW50cyA9IFsnLmJ0bi1uYXYnLCAnLnByaW1hcnktbWVudSddO1xyXG5cclxubmF2QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdkVsZW1lbnRzW2ldKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICB9XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ25hdi1vcGVuZWQnKTtcclxufVxyXG5cclxubmF2TGlua3MuZm9yRWFjaChuYXZMaW5rID0+IHtcclxuICBuYXZMaW5rLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2RWxlbWVudHNbaV0pLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuZWQnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vIFNvdXMtTmF2aWdhdGlvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxudmFyIHN1Yk5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3ViLW1lbnUtYnRuJyk7XHJcblxyXG5zdWJOYXZCdXR0b25zLmZvckVhY2goc3ViTmF2QnV0dG9uID0+IHtcclxuICBzdWJOYXZCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChzdWJOYXZCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSlcclxuICAgIHtcclxuICAgICAgc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICBzdWJOYXZCdXR0b25zLmZvckVhY2goc3ViTmF2QnV0dG9uID0+IHtcclxuICAgICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4vLyBQYWdlIEFjY3VlaWxcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiQoJy5ob21lLWhpZGRlbi1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICQoJy5ob21lLWhpZGRlbi10ZXh0Jykuc2xpZGVUb2dnbGUoJ3Nsb3cnKTtcclxufSlcclxuXHJcblxyXG4vLyBQYWdlIFByb2R1aXRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vdG9yLWJvYXJkXCIpICE9IHVuZGVmaW5lZCkge1xyXG5cclxuICB2YXIgbW90b3JzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb3Rvci1ib2FyZCAudGFiXCIpOyAgXHJcbiAgdmFyIGZpcnN0QmxvY2sgPSBtb3RvcnNUYWJbMF07XHJcbiAgZmlyc3RCbG9jay5jbGFzc05hbWUgPSAndGFiIGFjdGl2ZSc7XHJcblxyXG4gIHZhciBtb3RvcnNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW90b3ItYm9hcmQgLmJsb2NrXCIpO1xyXG4gIHZhciBmaXJzdEJsb2NrID0gbW90b3JzQmxvY2tbMF07XHJcbiAgZmlyc3RCbG9jay5jbGFzc05hbWUgPSAndGFiLXBhbmUgYmxvY2sgYWN0aXZlJztcclxuXHJcbiAgdmFyIG1vdG9yc0xpc3RCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW90b3ItbGlzdC1jb250YWluZXIgLm1vdG9yLWxpc3QtYmxvY2tcIik7XHJcbiAgdmFyIGZpcnN0TGlzdEJsb2NrID0gbW90b3JzTGlzdEJsb2NrWzBdO1xyXG4gIGZpcnN0TGlzdEJsb2NrLmNsYXNzTmFtZSA9ICdtb3Rvci1saXN0LWJsb2NrIGFjdGl2ZSc7XHJcblxyXG4gIHZhciBtb3RvcnNJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vdG9yLWltYWdlLWNvbnRhaW5lciAubW90b3ItaW1hZ2VcIik7XHJcbiAgdmFyIGZpcnN0SW1hZ2VCbG9jayA9IG1vdG9yc0ltYWdlc1swXTtcclxuICBmaXJzdEltYWdlQmxvY2suY2xhc3NOYW1lID0gJ21vdG9yLWltYWdlIGFjdGl2ZSc7XHJcblxyXG4gIHZhciBtb3RvcnNUYWJCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb3Rvci1ib2FyZCBhXCIpO1xyXG5cclxuICBtb3RvcnNUYWJCdG5zLmZvckVhY2goYnRuID0+IHtcclxuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIG1vdG9ySWQgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLW1vdG9yJyk7XHJcbiAgICAgIHZhciBtb3RvckJsb2NrSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbW90b3ItaW5mb3M9J1wiICsgbW90b3JJZCArIFwiJ11cIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1vdG9yQmxvY2tJZCk7XHJcbiAgICAgIC8vcmV0dXJuIGZhbHNlO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW90b3ItbGlzdC1ibG9jaycpLmZvckVhY2gobW90b3JCbG9jayA9PiB7XHJcbiAgICAgICAgbW90b3JCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIG1vdG9yQmxvY2tJZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5cclxuLy8gQ29udGFjdCBGb3JtXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG52YXIgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtY29udGFjdCcpO1xyXG52YXIgY29udGFjdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtYmxvY2snKTtcclxuY29udGFjdEJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnRhY3RCbG9jay5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdjb250YWN0LW9wZW5lZCcpO1xyXG4gIH1cclxufSk7XHJcblxyXG52YXIgY29udGFjdEJ0bjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdEJ0bjEnKTtcclxudmFyIGNvbnRhY3RCdG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RCdG4yJyk7XHJcbnZhciBjb250YWN0QnRuMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnRuMycpO1xyXG5cclxuY29udGFjdEJ0bjEub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTFcIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0yXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItM1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgY29udGFjdEJ0bjEuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbCcpO1xyXG59XHJcblxyXG5jb250YWN0QnRuMi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nY29udGFjdF9mb3JtW2dlbmRlcl0nXTpjaGVja2VkXCIpLmxlbmd0aCA8IDEpIHtyZXR1cm4gZmFsc2U7fVxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX2xuYW1lJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fZm5hbWUnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9waG9uZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX2VtYWlsJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTJcIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0zXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuICBjb250YWN0QnRuMS5jbGFzc0xpc3QuYWRkKCdmdWxsJyk7XHJcbiAgY29udGFjdEJ0bjIuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbCcpO1xyXG59O1xyXG5cclxuY29udGFjdEJ0bjMub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9J2NvbnRhY3RfZm9ybVtjdXN0b21lcl90eXBlXSddOmNoZWNrZWRcIikubGVuZ3RoIDwgMSkge3JldHVybiBmYWxzZTt9XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTJcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0zXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICBjb250YWN0QnRuMi5jbGFzc0xpc3QuYWRkKCdmdWxsJyk7XHJcbn07XHJcblxyXG5cclxuLy8gVGFic1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxudmFyIHRhYnMgPSByZXF1aXJlKCd0YWJzJyk7XHJcbnZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRhaW5lcicpXHJcbnRhYnMoY29udGFpbmVyKTtcclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1ibG9jay0yJykgIT0gdW5kZWZpbmVkKSB7XHJcbiAgdmFyIHByb2R1Y3RUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYmxvY2stMicpXHJcbiAgdGFicyhwcm9kdWN0VGFic2NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnMtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XHJcbiAgdmFyIHBhcnRuZXJzVGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVycy1jb250YWluZXInKVxyXG4gIHRhYnMocGFydG5lcnNUYWJzY29udGFpbmVyKTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXYtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XHJcbiAgdmFyIHBhcnRuZXJzVGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXYtY29udGFpbmVyJylcclxuICB0YWJzKHBhcnRuZXJzVGFic2NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcclxuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWNvbnRhaW5lcicpXHJcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZXMtdGFicy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcclxuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZXMtdGFicy1jb250YWluZXInKVxyXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10YWJzLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xyXG4gIHZhciBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGFicy1jb250YWluZXInKVxyXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW90b3ItdGFicy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcclxuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3Rvci10YWJzLWNvbnRhaW5lcicpXHJcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWxpc3QnKSAhPSB1bmRlZmluZWQpIHtcclxuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWxpc3QnKVxyXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XHJcbn1cclxuXHJcblxyXG4vLyBMaWdodGJveFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaW1wb3J0IFBob3RvU3dpcGVMaWdodGJveCBmcm9tICdwaG90b3N3aXBlL2xpZ2h0Ym94JztcclxuaW1wb3J0ICdwaG90b3N3aXBlL3N0eWxlLmNzcyc7XHJcbmNvbnN0IHByb2R1Y3RMaWdodGJveCA9IG5ldyBQaG90b1N3aXBlTGlnaHRib3goe1xyXG4gIGdhbGxlcnk6ICcjcHJvZHVjdC1nYWxsZXJpZXMsICNvcHRpb25zLWdhbGxlcnknLFxyXG4gIGNoaWxkcmVuOiAnYScsXHJcbiAgc2hvd0hpZGVBbmltYXRpb25UeXBlOiAnZmFkZScsXHJcbiAgcHN3cE1vZHVsZTogKCkgPT4gaW1wb3J0KCdwaG90b3N3aXBlJyksXHJcbn0pO1xyXG5wcm9kdWN0TGlnaHRib3guaW5pdCgpO1xyXG5cclxuXHJcbi8vIFBvc3RcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnZhciBwb3N0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWRvd24tcG9zdCcpXHJcbmlmIChwb3N0QXJyb3cgIT0gdW5kZWZpbmVkKSB7XHJcbiAgY29uc29sZS5sb2coXCJ0cm91dsOpXCIpO1xyXG4gIHBvc3RBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGhlYWRlckhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikub2Zmc2V0SGVpZ2h0O1xyXG4gIGNvbnN0IG9mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9zdC1jb250ZW50XCIpLm9mZnNldFRvcCAtIGhlYWRlckhlaWdodDtcclxuICBzY3JvbGwoe1xyXG4gICAgdG9wOiBvZmZzZXRUb3AsXHJcbiAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuLy8gTU9URVVSIERFIFJFQ0hFUkNIRSBERVMgUFJPRFVJVFNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8gU1dJUEVSXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbXBvcnQgU3dpcGVyLCB7IFBhZ2luYXRpb24sIE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XHJcblxyXG5jb25zdCBzd2lwZXJMYXN0TmV3cyA9IG5ldyBTd2lwZXIoJy5wb3N0cycsIHtcclxuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAvLyBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICBsb29wOiB0cnVlLFxyXG4gIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDEwMjQ6IHtcclxuICAgICAgLy8gY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgfSxcclxuICAgIDEyMDA6IHtcclxuICAgICAgLy8gY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3Qgc3dpcGVyRG9jID0gbmV3IFN3aXBlcignLnByb2R1Y3QtZG9jLWxpc3QnLCB7XHJcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxyXG4gIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgLy9jZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAvLyBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zd2lwZXItZG9jLWJ1dHRvbi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5zd2lwZXItZG9jLWJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICA2NDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgLy9jZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcbiAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgLy9jZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcbiAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICAxMjAwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIC8vY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyTGFzdHNFdmVudHMgPSBuZXcgU3dpcGVyKCcuaG9tZS10aW1lbGluZS1jb250YWluZXInLCB7XHJcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxyXG4gIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgfSxcclxuICAgIDEyMDA6IHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiA2MCxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgIH0sXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlckNocm9ubyA9IG5ldyBTd2lwZXIoJy5jaHJvbm8tc3dpcGVyLTEnLCB7XHJcbiAgbW9kdWxlczogW05hdmlnYXRpb24sIFBhZ2luYXRpb25dLFxyXG4gIHNwYWNlQmV0d2VlbjogMTAwLFxyXG4gIHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gIH0sXHJcbiAgbW91c2V3aGVlbDoge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIHNlbnNpdGl2aXR5OiA1LjUsXHJcbiAgfSxcclxuICBmcmVlTW9kZToge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIHN0aWNreTogZmFsc2UsXHJcbiAgICBtb21lbnR1bUJvdW5jZTogZmFsc2UsXHJcbiAgfSxcclxuICBzY3JvbGxiYXI6IHtcclxuICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsYmFyXCIsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICB9LFxyXG4gICAgMTIwMDoge1xyXG4gICAgICBzcGFjZUJldHdlZW46IDE1MCxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIH0sXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlckJsb2Nrc0luZm9zMSA9IG5ldyBTd2lwZXIoJy5zbGlkZXItbW9iaWxlLWNvbnRhaW5lcicsIHtcclxuICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXHJcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyUHJvZHVjdHNDb2xvcmlzID0gbmV3IFN3aXBlcignLnNsaWRlci1jb2xvcmlzJywge1xyXG4gICAgbW9kdWxlczogW05hdmlnYXRpb25dLFxyXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgIGxvb3A6IHRydWUsXHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyUHJvZHVjdHNBY2Nlc3NvcmllcyA9IG5ldyBTd2lwZXIoJy5zbGlkZXItYWNjZXNzb2lyaWVzJywge1xyXG4gICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgIGxvb3A6IHRydWUsXHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyR2FsbGVyeVZvbCA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LXZvbCcsIHtcclxuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXHJcbiAgc2xpZGVzUGVyVmlldzogMSxcclxuICBsb29wOiB0cnVlLFxyXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogXCIudm9sLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICBwcmV2RWw6IFwiLnZvbC1idXR0b24tcHJldlwiLFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDEwMjQ6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmNvbnN0IHN3aXBlckdhbGxlcnlMaWZlc3R5bGUgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeS1saWZlc3R5bGUnLCB7XHJcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxyXG4gIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6IFwiLmxpZmVzdHlsZS1idXR0b24tbmV4dFwiLFxyXG4gICAgcHJldkVsOiBcIi5saWZlc3R5bGUtYnV0dG9uLXByZXZcIixcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxMDI0OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5jb25zdCBzd2lwZXJHYWxsZXJ5QXRlbGllciA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LWF0ZWxpZXInLCB7XHJcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxyXG4gIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6IFwiLmF0ZWxpZXItYnV0dG9uLW5leHRcIixcclxuICAgIHByZXZFbDogXCIuYXRlbGllci1idXR0b24tcHJldlwiLFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDEwMjQ6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIH0sXHJcbiAgfSxcclxufSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQU9TIiwiaW5pdCIsImR1cmF0aW9uIiwiZGVsYXkiLCJkZWJvdW5jZURlbGF5Iiwib25jZSIsIm1pcnJvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVuZGVmaW5lZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFkiLCJoZWFkZXJTaXRlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm5hdkJ1dHRvbiIsIm5hdkxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdkVsZW1lbnRzIiwib25jbGljayIsImkiLCJsZW5ndGgiLCJ0b2dnbGUiLCJmb3JFYWNoIiwibmF2TGluayIsInN1Yk5hdkJ1dHRvbnMiLCJzdWJOYXZCdXR0b24iLCJjb250YWlucyIsIiQiLCJvbiIsInNsaWRlVG9nZ2xlIiwibW90b3JzVGFiIiwiZmlyc3RCbG9jayIsImNsYXNzTmFtZSIsIm1vdG9yc0Jsb2NrIiwibW90b3JzTGlzdEJsb2NrIiwiZmlyc3RMaXN0QmxvY2siLCJtb3RvcnNJbWFnZXMiLCJmaXJzdEltYWdlQmxvY2siLCJtb3RvcnNUYWJCdG5zIiwiYnRuIiwibW90b3JJZCIsImdldEF0dHJpYnV0ZSIsIm1vdG9yQmxvY2tJZCIsImNvbnNvbGUiLCJsb2ciLCJtb3RvckJsb2NrIiwiY29udGFjdEJ1dHRvbiIsImNvbnRhY3RCbG9jayIsImJ1dHRvbiIsImNvbnRhY3RCdG4xIiwiY29udGFjdEJ0bjIiLCJjb250YWN0QnRuMyIsInZhbHVlIiwidGFicyIsInJlcXVpcmUiLCJjb250YWluZXIiLCJwcm9kdWN0VGFic2NvbnRhaW5lciIsInBhcnRuZXJzVGFic2NvbnRhaW5lciIsIm9wdGlvbnNDb250YWluZXIiLCJQaG90b1N3aXBlTGlnaHRib3giLCJwcm9kdWN0TGlnaHRib3giLCJnYWxsZXJ5IiwiY2hpbGRyZW4iLCJzaG93SGlkZUFuaW1hdGlvblR5cGUiLCJwc3dwTW9kdWxlIiwicG9zdEFycm93IiwiY2xpY2tIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0VG9wIiwic2Nyb2xsIiwidG9wIiwiYmVoYXZpb3IiLCJTd2lwZXIiLCJQYWdpbmF0aW9uIiwiTmF2aWdhdGlvbiIsInN3aXBlckxhc3ROZXdzIiwic2xpZGVzUGVyVmlldyIsImxvb3AiLCJzcGFjZUJldHdlZW4iLCJicmVha3BvaW50cyIsInN3aXBlckRvYyIsIm1vZHVsZXMiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwic3dpcGVyTGFzdHNFdmVudHMiLCJzd2lwZXJDaHJvbm8iLCJzbGlkZVRvQ2xpY2tlZFNsaWRlIiwibW91c2V3aGVlbCIsImVuYWJsZWQiLCJzZW5zaXRpdml0eSIsImZyZWVNb2RlIiwic3RpY2t5IiwibW9tZW50dW1Cb3VuY2UiLCJzY3JvbGxiYXIiLCJlbCIsImRyYWdnYWJsZSIsInN3aXBlckJsb2Nrc0luZm9zMSIsImNlbnRlcmVkU2xpZGVzIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsInN3aXBlclByb2R1Y3RzQ29sb3JpcyIsInN3aXBlclByb2R1Y3RzQWNjZXNzb3JpZXMiLCJzd2lwZXJHYWxsZXJ5Vm9sIiwic3dpcGVyR2FsbGVyeUxpZmVzdHlsZSIsInN3aXBlckdhbGxlcnlBdGVsaWVyIl0sInNvdXJjZVJvb3QiOiIifQ==