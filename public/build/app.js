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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDK0I7O0FBRS9CO0FBQ3FCOztBQUdyQjtBQUNBO0FBQ3NCO0FBQ0k7QUFDMUJBLCtDQUFRLENBQUM7RUFDUEUsUUFBUSxFQUFFLElBQUk7RUFDZEMsS0FBSyxFQUFFLEdBQUc7RUFDVkMsYUFBYSxFQUFFLEVBQUU7RUFDakJDLElBQUksRUFBRSxLQUFLO0VBQ1hDLE1BQU0sRUFBRTtBQUNWLENBQUMsQ0FBQzs7QUFJRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7QUFDQTtBQUN3Qjs7QUFHeEI7QUFDQTtBQUNBLElBQUlDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJQyxTQUFTLEVBQUU7RUFDdkRDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVU7SUFDMUMsSUFBSUMsY0FBYyxHQUFHRixNQUFNLENBQUNHLE9BQU87SUFDbkMsSUFBSUMsVUFBVSxHQUFHUCxRQUFRLENBQUNRLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsRSxJQUFJSCxjQUFjLElBQUksRUFBRSxFQUFFO01BQ3hCRSxVQUFVLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUN0QyxDQUFDLE1BQU07TUFDTEgsVUFBVSxDQUFDRSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDekM7RUFDRixDQUFDLENBQUM7QUFDSjs7QUFJQTtBQUNBO0FBQ0EsSUFBSUMsU0FBUyxHQUFHWixRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFDckQsSUFBSVksUUFBUSxHQUFHYixRQUFRLENBQUNjLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztBQUM3QyxJQUFJQyxXQUFXLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDO0FBRS9DSCxTQUFTLENBQUNJLE9BQU8sR0FBRyxZQUFXO0VBQzdCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixXQUFXLENBQUNHLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7SUFDM0NqQixRQUFRLENBQUNDLGFBQWEsQ0FBQ2MsV0FBVyxDQUFDRSxDQUFDLENBQUMsQ0FBQyxDQUFDUixTQUFTLENBQUNVLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDbkU7RUFDQW5CLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDUSxTQUFTLENBQUNVLE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDL0QsQ0FBQztBQUVETixRQUFRLENBQUNPLE9BQU8sQ0FBQyxVQUFBQyxPQUFPLEVBQUk7RUFDMUJBLE9BQU8sQ0FBQ0wsT0FBTyxHQUFHLFlBQVk7SUFDNUIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLFdBQVcsQ0FBQ0csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUMzQ2pCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDYyxXQUFXLENBQUNFLENBQUMsQ0FBQyxDQUFDLENBQUNSLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNuRTtJQUNBWCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ1EsU0FBUyxDQUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDO0VBQy9ELENBQUM7QUFDSCxDQUFDLENBQUM7O0FBSUY7QUFDQTtBQUNBLElBQUlXLGFBQWEsR0FBR3RCLFFBQVEsQ0FBQ2MsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0FBRTlEUSxhQUFhLENBQUNGLE9BQU8sQ0FBQyxVQUFBRyxZQUFZLEVBQUk7RUFDcENBLFlBQVksQ0FBQ1AsT0FBTyxHQUFHLFlBQVk7SUFDakMsSUFBSU8sWUFBWSxDQUFDZCxTQUFTLENBQUNlLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFDN0M7TUFDRUQsWUFBWSxDQUFDZCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDekMsQ0FBQyxNQUVEO01BQ0VXLGFBQWEsQ0FBQ0YsT0FBTyxDQUFDLFVBQUFHLFlBQVksRUFBSTtRQUNwQ0EsWUFBWSxDQUFDZCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDekMsQ0FBQyxDQUFDO01BQ0ZZLFlBQVksQ0FBQ2QsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3RDO0VBQ0YsQ0FBQztBQUNILENBQUMsQ0FBQzs7QUFLRjtBQUNBO0FBQ0EsSUFBSVYsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUlDLFNBQVMsRUFBRTtFQUN2RCxJQUFJdUIsV0FBVyxHQUFHekIsUUFBUSxDQUFDYyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztFQUNsRSxJQUFJWSxVQUFVLEdBQUdELFdBQVcsQ0FBQyxDQUFDLENBQUM7RUFDL0JDLFVBQVUsQ0FBQ0MsU0FBUyxHQUFHLGNBQWM7RUFFckMsSUFBSUMsZUFBZSxHQUFHNUIsUUFBUSxDQUFDYyxnQkFBZ0IsQ0FBQyx5Q0FBeUMsQ0FBQztFQUMxRixJQUFJZSxjQUFjLEdBQUdELGVBQWUsQ0FBQyxDQUFDLENBQUM7RUFDdkNDLGNBQWMsQ0FBQ0YsU0FBUyxHQUFHLHlCQUF5QjtFQUVwRCxJQUFJRyxZQUFZLEdBQUc5QixRQUFRLENBQUNjLGdCQUFnQixDQUFDLHFDQUFxQyxDQUFDO0VBQ25GLElBQUlpQixlQUFlLEdBQUdELFlBQVksQ0FBQyxDQUFDLENBQUM7RUFDckNDLGVBQWUsQ0FBQ0osU0FBUyxHQUFHLG9CQUFvQjtFQUdoRCxJQUFJSyxXQUFXLEdBQUdoQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFFekQsSUFBSStCLFdBQVcsRUFBRTtJQUNmQSxXQUFXLENBQUM1QixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBVTtNQUMvQyxJQUFJNkIsYUFBYSxHQUFHRCxXQUFXLENBQUNFLEtBQUs7TUFDckMsSUFBSUMsYUFBYSxHQUFHbkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxHQUFHZ0MsYUFBYSxHQUFHLElBQUksQ0FBQztNQUNsRixJQUFJRyxrQkFBa0IsR0FBR3BDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixHQUFHZ0MsYUFBYSxHQUFHLElBQUksQ0FBQztNQUM3RixJQUFJSSxhQUFhLEdBQUdyQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsR0FBR2dDLGFBQWEsR0FBRyxJQUFJLENBQUM7TUFFeEZSLFdBQVcsQ0FBQ0wsT0FBTyxDQUFDLFVBQUFrQixLQUFLLEVBQUk7UUFDM0JBLEtBQUssQ0FBQzdCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUNsQyxDQUFDLENBQUM7TUFFRmlCLGVBQWUsQ0FBQ1IsT0FBTyxDQUFDLFVBQUFrQixLQUFLLEVBQUk7UUFDL0JBLEtBQUssQ0FBQzdCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUNsQyxDQUFDLENBQUM7TUFFRm1CLFlBQVksQ0FBQ1YsT0FBTyxDQUFDLFVBQUFrQixLQUFLLEVBQUk7UUFDNUJBLEtBQUssQ0FBQzdCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUNsQyxDQUFDLENBQUM7TUFFRndCLGFBQWEsQ0FBQzFCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUNyQzBCLGtCQUFrQixDQUFDM0IsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO01BQzFDMkIsYUFBYSxDQUFDNUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztFQUNKO0FBQ0Y7O0FBS0E7QUFDQTtBQUNBLElBQUk2QixhQUFhLEdBQUd2QyxRQUFRLENBQUNjLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0FBQ2hFLElBQUkwQixZQUFZLEdBQUd4QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMzRHNDLGFBQWEsQ0FBQ25CLE9BQU8sQ0FBQyxVQUFBcUIsTUFBTSxFQUFJO0VBQzlCQSxNQUFNLENBQUN6QixPQUFPLEdBQUcsWUFBVztJQUMxQndCLFlBQVksQ0FBQy9CLFNBQVMsQ0FBQ1UsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN2Q25CLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDUSxTQUFTLENBQUNVLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztFQUNuRSxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsSUFBSXVCLFdBQVcsR0FBRzFDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUN4RCxJQUFJMEMsV0FBVyxHQUFHM0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBQ3hELElBQUkyQyxXQUFXLEdBQUc1QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFFeER5QyxXQUFXLENBQUMxQixPQUFPLEdBQUcsWUFBWTtFQUNoQ2hCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUNRLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNoRVYsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1EsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ25FWCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDUSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFFbkUrQixXQUFXLENBQUNqQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDdEMsQ0FBQztBQUVEZ0MsV0FBVyxDQUFDM0IsT0FBTyxHQUFHLFlBQVk7RUFDaEMsSUFBSWhCLFFBQVEsQ0FBQ2MsZ0JBQWdCLENBQUMsNENBQTRDLENBQUMsQ0FBQ0ksTUFBTSxHQUFHLENBQUMsRUFBRTtJQUFDLE9BQU8sS0FBSztFQUFDO0VBQ3RHLElBQUlsQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDaUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtJQUFDLE9BQU8sS0FBSztFQUFDO0VBQzdFLElBQUlsQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDaUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtJQUFDLE9BQU8sS0FBSztFQUFDO0VBQzdFLElBQUlsQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDaUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtJQUFDLE9BQU8sS0FBSztFQUFDO0VBQzdFLElBQUlsQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDaUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtJQUFDLE9BQU8sS0FBSztFQUFDO0VBRTdFbEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1EsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ25FWCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDUSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDaEVWLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUNRLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUVuRStCLFdBQVcsQ0FBQ2pDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUNqQ2lDLFdBQVcsQ0FBQ2xDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUN0QyxDQUFDO0FBRURpQyxXQUFXLENBQUM1QixPQUFPLEdBQUcsWUFBWTtFQUNoQyxJQUFJaEIsUUFBUSxDQUFDYyxnQkFBZ0IsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQUMsT0FBTyxLQUFLO0VBQUM7RUFFN0dsQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDUSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDbkVYLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUNRLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUNuRVgsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1EsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBRWhFaUMsV0FBVyxDQUFDbEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQ25DLENBQUM7O0FBS0Q7QUFDQTtBQUNBLElBQUltQyxJQUFJLEdBQUdDLG1CQUFPLENBQUMsMENBQU0sQ0FBQztBQUMxQixJQUFJQyxTQUFTLEdBQUcvQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUN4RDRDLElBQUksQ0FBQ0UsU0FBUyxDQUFDO0FBRWYsSUFBSS9DLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUlDLFNBQVMsRUFBRTtFQUMzRCxJQUFJOEMsb0JBQW9CLEdBQUdoRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztFQUNyRTRDLElBQUksQ0FBQ0csb0JBQW9CLENBQUM7QUFDNUI7QUFFQSxJQUFJaEQsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUMsSUFBSUMsU0FBUyxFQUFFO0VBQzlELElBQUkrQyxxQkFBcUIsR0FBR2pELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0VBQ3pFNEMsSUFBSSxDQUFDSSxxQkFBcUIsQ0FBQztBQUM3QjtBQUVBLElBQUlqRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJQyxTQUFTLEVBQUU7RUFDekQsSUFBSStDLHFCQUFxQixHQUFHakQsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDcEU0QyxJQUFJLENBQUNJLHFCQUFxQixDQUFDO0FBQzdCO0FBRUEsSUFBSWpELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDLElBQUlDLFNBQVMsRUFBRTtFQUM3RCxJQUFJZ0QsZ0JBQWdCLEdBQUdsRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztFQUNuRTRDLElBQUksQ0FBQ0ssZ0JBQWdCLENBQUM7QUFDeEI7QUFFQSxJQUFJbEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsSUFBSUMsU0FBUyxFQUFFO0VBQ2pFLElBQUlnRCxnQkFBZ0IsR0FBR2xELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHdCQUF3QixDQUFDO0VBQ3ZFNEMsSUFBSSxDQUFDSyxnQkFBZ0IsQ0FBQztBQUN4QjtBQUVBLElBQUlsRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJQyxTQUFTLEVBQUU7RUFDbEUsSUFBSWdELGdCQUFnQixHQUFHbEQsUUFBUSxDQUFDQyxhQUFhLENBQUMseUJBQXlCLENBQUM7RUFDeEU0QyxJQUFJLENBQUNLLGdCQUFnQixDQUFDO0FBQ3hCO0FBRUEsSUFBSWxELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJQyxTQUFTLEVBQUU7RUFDeEQsSUFBSWdELGdCQUFnQixHQUFHbEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0VBQzlENEMsSUFBSSxDQUFDSyxnQkFBZ0IsQ0FBQztBQUN4Qjs7QUFLQTtBQUNBO0FBQ3FEO0FBQ3ZCO0FBQzlCLElBQU1FLGVBQWUsR0FBRyxJQUFJRCw0REFBa0IsQ0FBQztFQUM3Q0UsT0FBTyxFQUFFLHNDQUFzQztFQUMvQ0MsUUFBUSxFQUFFLEdBQUc7RUFDYkMscUJBQXFCLEVBQUUsTUFBTTtFQUM3QkMsVUFBVSxFQUFFO0lBQUEsT0FBTSx5TkFBb0I7RUFBQTtBQUN4QyxDQUFDLENBQUM7QUFDRkosZUFBZSxDQUFDMUQsSUFBSSxFQUFFOztBQUt0QjtBQUNBO0FBQ0EsSUFBSStELFNBQVMsR0FBR3pELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0FBQzNELElBQUl3RCxTQUFTLElBQUl2RCxTQUFTLEVBQUU7RUFDMUJ3RCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDckJGLFNBQVMsQ0FBQ3JELGdCQUFnQixDQUFDLE9BQU8sRUFBRXdELFlBQVksQ0FBQztBQUNuRDtBQUdBLFNBQVNBLFlBQVksQ0FBQ0MsQ0FBQyxFQUFFO0VBQ3ZCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtFQUNsQixJQUFNQyxZQUFZLEdBQUcvRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQytELFlBQVk7RUFDbEUsSUFBTUMsU0FBUyxHQUFHakUsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUNnRSxTQUFTLEdBQUdGLFlBQVk7RUFDbEZHLE1BQU0sQ0FBQztJQUNMQyxHQUFHLEVBQUVGLFNBQVM7SUFDZEcsUUFBUSxFQUFFO0VBQ1osQ0FBQyxDQUFDO0FBQ0o7O0FBS0E7QUFDQTtBQUN3RDtBQUNwQztBQUNXO0FBRS9CLElBQU1JLGNBQWMsR0FBRyxJQUFJSCwrQ0FBTSxDQUFDLFFBQVEsRUFBRTtFQUMxQ0ksYUFBYSxFQUFFLE1BQU07RUFDckJDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCQyxJQUFJLEVBQUUsSUFBSTtFQUNWQyxZQUFZLEVBQUUsRUFBRTtFQUNoQkMsV0FBVyxFQUFFO0lBQ1gsSUFBSSxFQUFFO01BQ0pILGNBQWMsRUFBRSxLQUFLO01BQ3JCRCxhQUFhLEVBQUU7SUFDakIsQ0FBQztJQUNELElBQUksRUFBRTtNQUNKQyxjQUFjLEVBQUUsSUFBSTtNQUNwQkQsYUFBYSxFQUFFO0lBQ2pCO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRixJQUFNSyxTQUFTLEdBQUcsSUFBSVQsK0NBQU0sQ0FBQyxtQkFBbUIsRUFBRTtFQUNoRFUsT0FBTyxFQUFFLENBQUNSLCtDQUFVLENBQUM7RUFDckJFLGFBQWEsRUFBRSxDQUFDO0VBQ2hCO0VBQ0E7RUFDQU8sVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSx5QkFBeUI7SUFDakNDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDREwsV0FBVyxFQUFFO0lBQ1gsR0FBRyxFQUFFO01BQ0hKLGFBQWEsRUFBRTtNQUNmO01BQ0E7SUFDRixDQUFDOztJQUNELEdBQUcsRUFBRTtNQUNIQSxhQUFhLEVBQUU7TUFDZjtNQUNBO0lBQ0YsQ0FBQzs7SUFDRCxJQUFJLEVBQUU7TUFDSkEsYUFBYSxFQUFFO01BQ2Y7TUFDQTtJQUNGO0VBQ0Y7QUFDRixDQUFDLENBQUM7O0FBR0YsSUFBTVUsaUJBQWlCLEdBQUcsSUFBSWQsK0NBQU0sQ0FBQywwQkFBMEIsRUFBRTtFQUMvRFUsT0FBTyxFQUFFLENBQUNSLCtDQUFVLENBQUM7RUFDckJFLGFBQWEsRUFBRSxNQUFNO0VBQ3JCRyxZQUFZLEVBQUUsRUFBRTtFQUNoQkksVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSw0QkFBNEI7SUFDcENDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDREwsV0FBVyxFQUFFO0lBQ1gsR0FBRyxFQUFFO01BQ0hKLGFBQWEsRUFBRTtJQUNqQixDQUFDO0lBQ0QsSUFBSSxFQUFFO01BQ0pHLFlBQVksRUFBRSxFQUFFO01BQ2hCSCxhQUFhLEVBQUU7SUFDakI7RUFDRjtBQUNGLENBQUMsQ0FBQztBQUdGLElBQU1XLFlBQVksR0FBRyxJQUFJZiwrQ0FBTSxDQUFDLGtCQUFrQixFQUFFO0VBQ2xEVSxPQUFPLEVBQUUsQ0FBQ1IsK0NBQVUsQ0FBQztFQUNyQkssWUFBWSxFQUFFLEVBQUU7RUFDaEJJLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUsNEJBQTRCO0lBQ3BDQyxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RMLFdBQVcsRUFBRTtJQUNYLEdBQUcsRUFBRTtNQUNISixhQUFhLEVBQUU7SUFDakIsQ0FBQztJQUNELElBQUksRUFBRTtNQUNKRyxZQUFZLEVBQUUsRUFBRTtNQUNoQkgsYUFBYSxFQUFFO0lBQ2pCO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFHRixJQUFNWSxrQkFBa0IsR0FBRyxJQUFJaEIsK0NBQU0sQ0FBQywwQkFBMEIsRUFBRTtFQUM5RFUsT0FBTyxFQUFFLENBQUNULCtDQUFVLENBQUM7RUFDckJHLGFBQWEsRUFBRSxNQUFNO0VBQ3JCQyxjQUFjLEVBQUUsSUFBSTtFQUNwQkUsWUFBWSxFQUFFLEVBQUU7RUFDaEJELElBQUksRUFBRSxJQUFJO0VBQ1ZXLFVBQVUsRUFBRTtJQUNWQyxFQUFFLEVBQUUsb0JBQW9CO0lBQ3hCQyxTQUFTLEVBQUU7RUFDYjtBQUNKLENBQUMsQ0FBQztBQUdGLElBQU1DLHFCQUFxQixHQUFHLElBQUlwQiwrQ0FBTSxDQUFDLGlCQUFpQixFQUFFO0VBQ3hEVSxPQUFPLEVBQUUsQ0FBQ1IsK0NBQVUsQ0FBQztFQUNyQkUsYUFBYSxFQUFFLE1BQU07RUFDckJDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCQyxJQUFJLEVBQUU7QUFDVixDQUFDLENBQUM7QUFHRixJQUFNZSx5QkFBeUIsR0FBRyxJQUFJckIsK0NBQU0sQ0FBQyxzQkFBc0IsRUFBRTtFQUNqRVUsT0FBTyxFQUFFLENBQUNULCtDQUFVLENBQUM7RUFDckJHLGFBQWEsRUFBRSxNQUFNO0VBQ3JCQyxjQUFjLEVBQUUsSUFBSTtFQUNwQkMsSUFBSSxFQUFFO0FBQ1YsQ0FBQyxDQUFDO0FBRUYsSUFBTWdCLGdCQUFnQixHQUFHLElBQUl0QiwrQ0FBTSxDQUFDLGNBQWMsRUFBRTtFQUNsRFUsT0FBTyxFQUFFLENBQUNSLCtDQUFVLENBQUM7RUFDckJFLGFBQWEsRUFBRSxDQUFDO0VBQ2hCRSxJQUFJLEVBQUUsSUFBSTtFQUNWSyxVQUFVLEVBQUU7SUFDVkMsTUFBTSxFQUFFLGtCQUFrQjtJQUMxQkMsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUNETCxXQUFXLEVBQUU7SUFDWCxJQUFJLEVBQUU7TUFDSkosYUFBYSxFQUFFLENBQUM7TUFDaEJHLFlBQVksRUFBRTtJQUNoQjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsSUFBTWdCLHNCQUFzQixHQUFHLElBQUl2QiwrQ0FBTSxDQUFDLG9CQUFvQixFQUFFO0VBQzlEVSxPQUFPLEVBQUUsQ0FBQ1IsK0NBQVUsQ0FBQztFQUNyQkUsYUFBYSxFQUFFLENBQUM7RUFDaEJFLElBQUksRUFBRSxJQUFJO0VBQ1ZLLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUsd0JBQXdCO0lBQ2hDQyxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RMLFdBQVcsRUFBRTtJQUNYLElBQUksRUFBRTtNQUNKSixhQUFhLEVBQUUsQ0FBQztNQUNoQkcsWUFBWSxFQUFFO0lBQ2hCO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRixJQUFNaUIsb0JBQW9CLEdBQUcsSUFBSXhCLCtDQUFNLENBQUMsa0JBQWtCLEVBQUU7RUFDMURVLE9BQU8sRUFBRSxDQUFDUiwrQ0FBVSxDQUFDO0VBQ3JCRSxhQUFhLEVBQUUsQ0FBQztFQUNoQkUsSUFBSSxFQUFFLElBQUk7RUFDVkssVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSxzQkFBc0I7SUFDOUJDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDREwsV0FBVyxFQUFFO0lBQ1gsSUFBSSxFQUFFO01BQ0pKLGFBQWEsRUFBRSxDQUFDO01BQ2hCRyxZQUFZLEVBQUU7SUFDaEI7RUFDRjtBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUM1Y0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvd2ViL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL3dlYi9hcHAuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cblxuLy8gQU9TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XG5BT1MuaW5pdCh7XG4gIGR1cmF0aW9uOiAxMDAwLFxuICBkZWxheTogMjAwLFxuICBkZWJvdW5jZURlbGF5OiA1MCxcbiAgb25jZTogZmFsc2UsXG4gIG1pcnJvcjogdHJ1ZVxufSk7XG5cblxuXG4vLyBSRUxPQUQgUEFHRVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKmltcG9ydCBTd3VwIGZyb20gJ3N3dXAnO1xuaW1wb3J0IFN3dXBCb2R5Q2xhc3NQbHVnaW4gZnJvbSAnQHN3dXAvYm9keS1jbGFzcy1wbHVnaW4nO1xuXG5jb25zdCBzd3VwID0gbmV3IFN3dXAoe1xuICBwbHVnaW5zOiBbbmV3IFN3dXBCb2R5Q2xhc3NQbHVnaW4oKV1cblxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N3dXA6Y29udGVudFJlcGxhY2VkJywgZnVuY3Rpb24oKXtcbiAgQU9TLmluaXQoKTtcbiAgc3dpcGVyRnVuY3Rpb25zKCk7XG4gIE9wZW5MYXllcnNNYXAoKTtcbn0pKi9cblxuXG5cblxuLy8gUGFyYWxsYXhcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0ICdwYXJhbGxheC1pbWFnZSc7XG5cblxuLy8gSGVhZGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJhc2UnKSAhPSB1bmRlZmluZWQpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgdmFyIGhlYWRlclNpdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXItYmFzZScpWzBdO1xuXG4gICAgaWYgKHNjcm9sbFBvc2l0aW9uID49IDUwKSB7XG4gICAgICBoZWFkZXJTaXRlLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlclNpdGUuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQnKTtcbiAgICB9XG4gIH0pXG59XG5cblxuXG4vLyBOYXZpZ2F0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBuYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLW5hdicpO1xudmFyIG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xubGV0IG5hdkVsZW1lbnRzID0gWycuYnRuLW5hdicsICcucHJpbWFyeS1tZW51J107XG5cbm5hdkJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdkVsZW1lbnRzW2ldKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgfVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LW9wZW5lZCcpO1xufVxuXG5uYXZMaW5rcy5mb3JFYWNoKG5hdkxpbmsgPT4ge1xuICBuYXZMaW5rLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXZFbGVtZW50c1tpXSkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3BlbmVkJyk7XG4gIH1cbn0pO1xuXG5cblxuLy8gU291cy1OYXZpZ2F0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBzdWJOYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Yi1tZW51LWJ0bicpO1xuXG5zdWJOYXZCdXR0b25zLmZvckVhY2goc3ViTmF2QnV0dG9uID0+IHtcbiAgc3ViTmF2QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSBcbiAgICB7XG4gICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSBcbiAgICBlbHNlIFxuICAgIHtcbiAgICAgIHN1Yk5hdkJ1dHRvbnMuZm9yRWFjaChzdWJOYXZCdXR0b24gPT4ge1xuICAgICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuXG4vLyBQYWdlIFByb2R1aXRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW90b3ItYm9hcmRcIikgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBtb3RvcnNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW90b3ItYm9hcmQgLmJsb2NrXCIpO1xuICB2YXIgZmlyc3RCbG9jayA9IG1vdG9yc0Jsb2NrWzBdO1xuICBmaXJzdEJsb2NrLmNsYXNzTmFtZSA9ICdibG9jayBhY3RpdmUnO1xuXG4gIHZhciBtb3RvcnNMaXN0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vdG9yLWxpc3QtY29udGFpbmVyIC5tb3Rvci1saXN0LWJsb2NrXCIpO1xuICB2YXIgZmlyc3RMaXN0QmxvY2sgPSBtb3RvcnNMaXN0QmxvY2tbMF07XG4gIGZpcnN0TGlzdEJsb2NrLmNsYXNzTmFtZSA9ICdtb3Rvci1saXN0LWJsb2NrIGFjdGl2ZSc7XG5cbiAgdmFyIG1vdG9yc0ltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW90b3ItaW1hZ2UtY29udGFpbmVyIC5tb3Rvci1pbWFnZVwiKTtcbiAgdmFyIGZpcnN0SW1hZ2VCbG9jayA9IG1vdG9yc0ltYWdlc1swXTtcbiAgZmlyc3RJbWFnZUJsb2NrLmNsYXNzTmFtZSA9ICdtb3Rvci1pbWFnZSBhY3RpdmUnO1xuXG5cbiAgdmFyIG1vdG9yU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdG9yLXNlbGVjdCcpO1xuXG4gIGlmIChtb3RvclNlbGVjdCkge1xuICAgIG1vdG9yU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVTZWxlY3RlZCA9IG1vdG9yU2VsZWN0LnZhbHVlO1xuICAgICAgdmFyIGJsb2NrU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb3Rvcj1cIicgKyB2YWx1ZVNlbGVjdGVkICsgJ1wiXScpO1xuICAgICAgdmFyIGJsb2NrSW5mb3NTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vdG9yLWluZm9zPVwiJyArIHZhbHVlU2VsZWN0ZWQgKyAnXCJdJyk7XG4gICAgICB2YXIgaW1hZ2VTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vdG9yLWltYWdlPVwiJyArIHZhbHVlU2VsZWN0ZWQgKyAnXCJdJyk7XG5cbiAgICAgIG1vdG9yc0Jsb2NrLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgICBibG9jay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICBtb3RvcnNMaXN0QmxvY2suZm9yRWFjaChibG9jayA9PiB7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG5cbiAgICAgIG1vdG9yc0ltYWdlcy5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgYmxvY2tTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGJsb2NrSW5mb3NTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGltYWdlU2VsZWN0ZWQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cblxuLy8gQ29udGFjdCBGb3JtXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1jb250YWN0Jyk7XG52YXIgY29udGFjdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtYmxvY2snKTtcbmNvbnRhY3RCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRhY3RCbG9jay5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGFjdC1vcGVuZWQnKTtcbiAgfVxufSk7XG5cbnZhciBjb250YWN0QnRuMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnRuMScpO1xudmFyIGNvbnRhY3RCdG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RCdG4yJyk7XG52YXIgY29udGFjdEJ0bjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdEJ0bjMnKTtcblxuY29udGFjdEJ0bjEub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0xXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTJcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItM1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICBjb250YWN0QnRuMS5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsJyk7XG59XG5cbmNvbnRhY3RCdG4yLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nY29udGFjdF9mb3JtW2dlbmRlcl0nXTpjaGVja2VkXCIpLmxlbmd0aCA8IDEpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9sbmFtZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9mbmFtZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9waG9uZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9lbWFpbCcpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0yXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTNcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgY29udGFjdEJ0bjEuY2xhc3NMaXN0LmFkZCgnZnVsbCcpO1xuICBjb250YWN0QnRuMi5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsJyk7XG59O1xuXG5jb250YWN0QnRuMy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9J2NvbnRhY3RfZm9ybVtjdXN0b21lcl90eXBlXSddOmNoZWNrZWRcIikubGVuZ3RoIDwgMSkge3JldHVybiBmYWxzZTt9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0xXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTJcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItM1wiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICBjb250YWN0QnRuMi5jbGFzc0xpc3QuYWRkKCdmdWxsJyk7XG59O1xuXG5cblxuXG4vLyBUYWJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciB0YWJzID0gcmVxdWlyZSgndGFicycpO1xudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItY29udGFpbmVyJylcbnRhYnMoY29udGFpbmVyKTtcblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJsb2NrLTInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIHByb2R1Y3RUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYmxvY2stMicpXG4gIHRhYnMocHJvZHVjdFRhYnNjb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcnRuZXJzLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgcGFydG5lcnNUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcnRuZXJzLWNvbnRhaW5lcicpXG4gIHRhYnMocGFydG5lcnNUYWJzY29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXYtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBwYXJ0bmVyc1RhYnNjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2LWNvbnRhaW5lcicpXG4gIHRhYnMocGFydG5lcnNUYWJzY29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWNvbnRhaW5lcicpXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2VzLXRhYnMtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlcy10YWJzLWNvbnRhaW5lcicpXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10YWJzLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRhYnMtY29udGFpbmVyJylcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWxpc3QnKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1saXN0JylcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcbn1cblxuXG5cblxuLy8gTGlnaHRib3hcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFBob3RvU3dpcGVMaWdodGJveCBmcm9tICdwaG90b3N3aXBlL2xpZ2h0Ym94JztcbmltcG9ydCAncGhvdG9zd2lwZS9zdHlsZS5jc3MnO1xuY29uc3QgcHJvZHVjdExpZ2h0Ym94ID0gbmV3IFBob3RvU3dpcGVMaWdodGJveCh7XG4gIGdhbGxlcnk6ICcjcHJvZHVjdC1nYWxsZXJpZXMsICNvcHRpb25zLWdhbGxlcnknLFxuICBjaGlsZHJlbjogJ2EnLFxuICBzaG93SGlkZUFuaW1hdGlvblR5cGU6ICdmYWRlJyxcbiAgcHN3cE1vZHVsZTogKCkgPT4gaW1wb3J0KCdwaG90b3N3aXBlJyksXG59KTtcbnByb2R1Y3RMaWdodGJveC5pbml0KCk7XG5cblxuXG5cbi8vIFBvc3Rcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIHBvc3RBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtZG93bi1wb3N0JylcbmlmIChwb3N0QXJyb3cgIT0gdW5kZWZpbmVkKSB7XG4gIGNvbnNvbGUubG9nKFwidHJvdXbDqVwiKTtcbiAgcG9zdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbn1cblxuIFxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLm9mZnNldEhlaWdodDtcbiAgY29uc3Qgb2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3N0LWNvbnRlbnRcIikub2Zmc2V0VG9wIC0gaGVhZGVySGVpZ2h0O1xuICBzY3JvbGwoe1xuICAgIHRvcDogb2Zmc2V0VG9wLFxuICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gIH0pO1xufVxuXG5cblxuXG4vLyBTd2lwZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFN3aXBlciwgeyBQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uIH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XG5cbmNvbnN0IHN3aXBlckxhc3ROZXdzID0gbmV3IFN3aXBlcignLnBvc3RzJywge1xuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gIGxvb3A6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMTAyNDoge1xuICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IHN3aXBlckRvYyA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0LWRvYy1saXN0Jywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIC8vY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gIC8vIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWRvYy1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1kb2MtYnV0dG9uLXByZXYnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDY0MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIC8vY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgLy9sb29wOiB0cnVlLFxuICAgIH0sXG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgLy9jZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICAvL2xvb3A6IHRydWUsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgLy9jZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgIC8vbG9vcDogdHJ1ZSxcbiAgICB9XG4gIH1cbn0pO1xuXG5cbmNvbnN0IHN3aXBlckxhc3RzRXZlbnRzID0gbmV3IFN3aXBlcignLmhvbWUtdGltZWxpbmUtY29udGFpbmVyJywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9LFxuICB9XG59KTtcblxuXG5jb25zdCBzd2lwZXJDaHJvbm8gPSBuZXcgU3dpcGVyKCcuY2hyb25vLXN3aXBlci0xJywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogNjAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIH0sXG4gIH1cbn0pO1xuXG5cbmNvbnN0IHN3aXBlckJsb2Nrc0luZm9zMSA9IG5ldyBTd2lwZXIoJy5zbGlkZXItbW9iaWxlLWNvbnRhaW5lcicsIHtcbiAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICBsb29wOiB0cnVlLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG59KTtcblxuXG5jb25zdCBzd2lwZXJQcm9kdWN0c0NvbG9yaXMgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWNvbG9yaXMnLCB7XG4gICAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIGxvb3A6IHRydWUsXG59KTtcblxuXG5jb25zdCBzd2lwZXJQcm9kdWN0c0FjY2Vzc29yaWVzID0gbmV3IFN3aXBlcignLnNsaWRlci1hY2Nlc3NvaXJpZXMnLCB7XG4gICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIGxvb3A6IHRydWUsXG59KTtcblxuY29uc3Qgc3dpcGVyR2FsbGVyeVZvbCA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LXZvbCcsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBsb29wOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi52b2wtYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnZvbC1idXR0b24tcHJldlwiLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIH0sXG4gIH0sXG59KVxuXG5jb25zdCBzd2lwZXJHYWxsZXJ5TGlmZXN0eWxlID0gbmV3IFN3aXBlcignLmdhbGxlcnktbGlmZXN0eWxlJywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLmxpZmVzdHlsZS1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIubGlmZXN0eWxlLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgfSxcbiAgfSxcbn0pXG5cbmNvbnN0IHN3aXBlckdhbGxlcnlBdGVsaWVyID0gbmV3IFN3aXBlcignLmdhbGxlcnktYXRlbGllcicsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBsb29wOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5hdGVsaWVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5hdGVsaWVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgfSxcbiAgfSxcbn0pIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkFPUyIsImluaXQiLCJkdXJhdGlvbiIsImRlbGF5IiwiZGVib3VuY2VEZWxheSIsIm9uY2UiLCJtaXJyb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmRlZmluZWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxZIiwiaGVhZGVyU2l0ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuYXZCdXR0b24iLCJuYXZMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXZFbGVtZW50cyIsIm9uY2xpY2siLCJpIiwibGVuZ3RoIiwidG9nZ2xlIiwiZm9yRWFjaCIsIm5hdkxpbmsiLCJzdWJOYXZCdXR0b25zIiwic3ViTmF2QnV0dG9uIiwiY29udGFpbnMiLCJtb3RvcnNCbG9jayIsImZpcnN0QmxvY2siLCJjbGFzc05hbWUiLCJtb3RvcnNMaXN0QmxvY2siLCJmaXJzdExpc3RCbG9jayIsIm1vdG9yc0ltYWdlcyIsImZpcnN0SW1hZ2VCbG9jayIsIm1vdG9yU2VsZWN0IiwidmFsdWVTZWxlY3RlZCIsInZhbHVlIiwiYmxvY2tTZWxlY3RlZCIsImJsb2NrSW5mb3NTZWxlY3RlZCIsImltYWdlU2VsZWN0ZWQiLCJibG9jayIsImNvbnRhY3RCdXR0b24iLCJjb250YWN0QmxvY2siLCJidXR0b24iLCJjb250YWN0QnRuMSIsImNvbnRhY3RCdG4yIiwiY29udGFjdEJ0bjMiLCJ0YWJzIiwicmVxdWlyZSIsImNvbnRhaW5lciIsInByb2R1Y3RUYWJzY29udGFpbmVyIiwicGFydG5lcnNUYWJzY29udGFpbmVyIiwib3B0aW9uc0NvbnRhaW5lciIsIlBob3RvU3dpcGVMaWdodGJveCIsInByb2R1Y3RMaWdodGJveCIsImdhbGxlcnkiLCJjaGlsZHJlbiIsInNob3dIaWRlQW5pbWF0aW9uVHlwZSIsInBzd3BNb2R1bGUiLCJwb3N0QXJyb3ciLCJjb25zb2xlIiwibG9nIiwiY2xpY2tIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0VG9wIiwic2Nyb2xsIiwidG9wIiwiYmVoYXZpb3IiLCJTd2lwZXIiLCJQYWdpbmF0aW9uIiwiTmF2aWdhdGlvbiIsInN3aXBlckxhc3ROZXdzIiwic2xpZGVzUGVyVmlldyIsImNlbnRlcmVkU2xpZGVzIiwibG9vcCIsInNwYWNlQmV0d2VlbiIsImJyZWFrcG9pbnRzIiwic3dpcGVyRG9jIiwibW9kdWxlcyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJzd2lwZXJMYXN0c0V2ZW50cyIsInN3aXBlckNocm9ubyIsInN3aXBlckJsb2Nrc0luZm9zMSIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsInN3aXBlclByb2R1Y3RzQ29sb3JpcyIsInN3aXBlclByb2R1Y3RzQWNjZXNzb3JpZXMiLCJzd2lwZXJHYWxsZXJ5Vm9sIiwic3dpcGVyR2FsbGVyeUxpZmVzdHlsZSIsInN3aXBlckdhbGxlcnlBdGVsaWVyIl0sInNvdXJjZVJvb3QiOiIifQ==