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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3R5bGVzL3dlYi9hcHAuc2Nzcz8yYTg0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL3dlYi9hcHAuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cblxuLy8gQU9TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XG5BT1MuaW5pdCh7XG4gIGR1cmF0aW9uOiAxMDAwLFxuICBkZWxheTogMjAwLFxuICBkZWJvdW5jZURlbGF5OiA1MCxcbiAgb25jZTogZmFsc2UsXG4gIG1pcnJvcjogdHJ1ZVxufSk7XG5cblxuXG4vLyBSRUxPQUQgUEFHRVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKmltcG9ydCBTd3VwIGZyb20gJ3N3dXAnO1xuaW1wb3J0IFN3dXBCb2R5Q2xhc3NQbHVnaW4gZnJvbSAnQHN3dXAvYm9keS1jbGFzcy1wbHVnaW4nO1xuXG5jb25zdCBzd3VwID0gbmV3IFN3dXAoe1xuICBwbHVnaW5zOiBbbmV3IFN3dXBCb2R5Q2xhc3NQbHVnaW4oKV1cblxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N3dXA6Y29udGVudFJlcGxhY2VkJywgZnVuY3Rpb24oKXtcbiAgQU9TLmluaXQoKTtcbiAgc3dpcGVyRnVuY3Rpb25zKCk7XG4gIE9wZW5MYXllcnNNYXAoKTtcbn0pKi9cblxuXG5cblxuLy8gUGFyYWxsYXhcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0ICdwYXJhbGxheC1pbWFnZSc7XG5cblxuLy8gSGVhZGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJhc2UnKSAhPSB1bmRlZmluZWQpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgdmFyIGhlYWRlclNpdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXItYmFzZScpWzBdO1xuXG4gICAgaWYgKHNjcm9sbFBvc2l0aW9uID49IDUwKSB7XG4gICAgICBoZWFkZXJTaXRlLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlclNpdGUuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQnKTtcbiAgICB9XG4gIH0pXG59XG5cblxuXG4vLyBOYXZpZ2F0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBuYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLW5hdicpO1xudmFyIG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xubGV0IG5hdkVsZW1lbnRzID0gWycuYnRuLW5hdicsICcucHJpbWFyeS1tZW51J107XG5cbm5hdkJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdkVsZW1lbnRzW2ldKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgfVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LW9wZW5lZCcpO1xufVxuXG5uYXZMaW5rcy5mb3JFYWNoKG5hdkxpbmsgPT4ge1xuICBuYXZMaW5rLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXZFbGVtZW50c1tpXSkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3BlbmVkJyk7XG4gIH1cbn0pO1xuXG5cblxuLy8gU291cy1OYXZpZ2F0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBzdWJOYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Yi1tZW51LWJ0bicpO1xuXG5zdWJOYXZCdXR0b25zLmZvckVhY2goc3ViTmF2QnV0dG9uID0+IHtcbiAgc3ViTmF2QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSBcbiAgICB7XG4gICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSBcbiAgICBlbHNlIFxuICAgIHtcbiAgICAgIHN1Yk5hdkJ1dHRvbnMuZm9yRWFjaChzdWJOYXZCdXR0b24gPT4ge1xuICAgICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuLy8gUGFnZSBBY2N1ZWlsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiQoJy5ob21lLWhpZGRlbi1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAkKCcuaG9tZS1oaWRkZW4tdGV4dCcpLnNsaWRlVG9nZ2xlKCdzbG93Jyk7XG59KVxuXG5cblxuXG4vLyBQYWdlIFByb2R1aXRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW90b3ItYm9hcmRcIikgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBtb3RvcnNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW90b3ItYm9hcmQgLmJsb2NrXCIpO1xuICB2YXIgZmlyc3RCbG9jayA9IG1vdG9yc0Jsb2NrWzBdO1xuICBmaXJzdEJsb2NrLmNsYXNzTmFtZSA9ICdibG9jayBhY3RpdmUnO1xuXG4gIHZhciBtb3RvcnNMaXN0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vdG9yLWxpc3QtY29udGFpbmVyIC5tb3Rvci1saXN0LWJsb2NrXCIpO1xuICB2YXIgZmlyc3RMaXN0QmxvY2sgPSBtb3RvcnNMaXN0QmxvY2tbMF07XG4gIGZpcnN0TGlzdEJsb2NrLmNsYXNzTmFtZSA9ICdtb3Rvci1saXN0LWJsb2NrIGFjdGl2ZSc7XG5cbiAgdmFyIG1vdG9yc0ltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW90b3ItaW1hZ2UtY29udGFpbmVyIC5tb3Rvci1pbWFnZVwiKTtcbiAgdmFyIGZpcnN0SW1hZ2VCbG9jayA9IG1vdG9yc0ltYWdlc1swXTtcbiAgZmlyc3RJbWFnZUJsb2NrLmNsYXNzTmFtZSA9ICdtb3Rvci1pbWFnZSBhY3RpdmUnO1xuXG5cbiAgdmFyIG1vdG9yU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdG9yLXNlbGVjdCcpO1xuXG4gIGlmIChtb3RvclNlbGVjdCkge1xuICAgIG1vdG9yU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVTZWxlY3RlZCA9IG1vdG9yU2VsZWN0LnZhbHVlO1xuICAgICAgdmFyIGJsb2NrU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb3Rvcj1cIicgKyB2YWx1ZVNlbGVjdGVkICsgJ1wiXScpO1xuICAgICAgdmFyIGJsb2NrSW5mb3NTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vdG9yLWluZm9zPVwiJyArIHZhbHVlU2VsZWN0ZWQgKyAnXCJdJyk7XG4gICAgICB2YXIgaW1hZ2VTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vdG9yLWltYWdlPVwiJyArIHZhbHVlU2VsZWN0ZWQgKyAnXCJdJyk7XG5cbiAgICAgIG1vdG9yc0Jsb2NrLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgICBibG9jay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICBtb3RvcnNMaXN0QmxvY2suZm9yRWFjaChibG9jayA9PiB7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG5cbiAgICAgIG1vdG9yc0ltYWdlcy5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgYmxvY2tTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGJsb2NrSW5mb3NTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGltYWdlU2VsZWN0ZWQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cblxuLy8gQ29udGFjdCBGb3JtXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1jb250YWN0Jyk7XG52YXIgY29udGFjdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtYmxvY2snKTtcbmNvbnRhY3RCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRhY3RCbG9jay5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGFjdC1vcGVuZWQnKTtcbiAgfVxufSk7XG5cbnZhciBjb250YWN0QnRuMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnRuMScpO1xudmFyIGNvbnRhY3RCdG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RCdG4yJyk7XG52YXIgY29udGFjdEJ0bjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdEJ0bjMnKTtcblxuY29udGFjdEJ0bjEub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0xXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTJcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItM1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICBjb250YWN0QnRuMS5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsJyk7XG59XG5cbmNvbnRhY3RCdG4yLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nY29udGFjdF9mb3JtW2dlbmRlcl0nXTpjaGVja2VkXCIpLmxlbmd0aCA8IDEpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9sbmFtZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9mbmFtZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9waG9uZScpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZm9ybV9lbWFpbCcpLnZhbHVlID09IFwiXCIpIHtyZXR1cm4gZmFsc2U7fVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0yXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTNcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgY29udGFjdEJ0bjEuY2xhc3NMaXN0LmFkZCgnZnVsbCcpO1xuICBjb250YWN0QnRuMi5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsJyk7XG59O1xuXG5jb250YWN0QnRuMy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9J2NvbnRhY3RfZm9ybVtjdXN0b21lcl90eXBlXSddOmNoZWNrZWRcIikubGVuZ3RoIDwgMSkge3JldHVybiBmYWxzZTt9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0xXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTJcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItM1wiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICBjb250YWN0QnRuMi5jbGFzc0xpc3QuYWRkKCdmdWxsJyk7XG59O1xuXG5cblxuXG4vLyBUYWJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciB0YWJzID0gcmVxdWlyZSgndGFicycpO1xudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItY29udGFpbmVyJylcbnRhYnMoY29udGFpbmVyKTtcblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJsb2NrLTInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIHByb2R1Y3RUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYmxvY2stMicpXG4gIHRhYnMocHJvZHVjdFRhYnNjb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcnRuZXJzLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgcGFydG5lcnNUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcnRuZXJzLWNvbnRhaW5lcicpXG4gIHRhYnMocGFydG5lcnNUYWJzY29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXYtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBwYXJ0bmVyc1RhYnNjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2LWNvbnRhaW5lcicpXG4gIHRhYnMocGFydG5lcnNUYWJzY29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWNvbnRhaW5lcicpXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2VzLXRhYnMtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlcy10YWJzLWNvbnRhaW5lcicpXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10YWJzLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRhYnMtY29udGFpbmVyJylcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWxpc3QnKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1saXN0JylcbiAgdGFicyhvcHRpb25zQ29udGFpbmVyKTtcbn1cblxuXG5cblxuLy8gTGlnaHRib3hcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFBob3RvU3dpcGVMaWdodGJveCBmcm9tICdwaG90b3N3aXBlL2xpZ2h0Ym94JztcbmltcG9ydCAncGhvdG9zd2lwZS9zdHlsZS5jc3MnO1xuY29uc3QgcHJvZHVjdExpZ2h0Ym94ID0gbmV3IFBob3RvU3dpcGVMaWdodGJveCh7XG4gIGdhbGxlcnk6ICcjcHJvZHVjdC1nYWxsZXJpZXMsICNvcHRpb25zLWdhbGxlcnknLFxuICBjaGlsZHJlbjogJ2EnLFxuICBzaG93SGlkZUFuaW1hdGlvblR5cGU6ICdmYWRlJyxcbiAgcHN3cE1vZHVsZTogKCkgPT4gaW1wb3J0KCdwaG90b3N3aXBlJyksXG59KTtcbnByb2R1Y3RMaWdodGJveC5pbml0KCk7XG5cblxuXG5cbi8vIFBvc3Rcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIHBvc3RBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtZG93bi1wb3N0JylcbmlmIChwb3N0QXJyb3cgIT0gdW5kZWZpbmVkKSB7XG4gIGNvbnNvbGUubG9nKFwidHJvdXbDqVwiKTtcbiAgcG9zdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbn1cblxuIFxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLm9mZnNldEhlaWdodDtcbiAgY29uc3Qgb2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3N0LWNvbnRlbnRcIikub2Zmc2V0VG9wIC0gaGVhZGVySGVpZ2h0O1xuICBzY3JvbGwoe1xuICAgIHRvcDogb2Zmc2V0VG9wLFxuICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gIH0pO1xufVxuXG5cblxuXG4vLyBTd2lwZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFN3aXBlciwgeyBQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uIH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XG5cbmNvbnN0IHN3aXBlckxhc3ROZXdzID0gbmV3IFN3aXBlcignLnBvc3RzJywge1xuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gIGxvb3A6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMTAyNDoge1xuICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IHN3aXBlckRvYyA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0LWRvYy1saXN0Jywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIC8vY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gIC8vIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWRvYy1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1kb2MtYnV0dG9uLXByZXYnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDY0MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIC8vY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgLy9sb29wOiB0cnVlLFxuICAgIH0sXG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgLy9jZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICAvL2xvb3A6IHRydWUsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgLy9jZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgIC8vbG9vcDogdHJ1ZSxcbiAgICB9XG4gIH1cbn0pO1xuXG5cbmNvbnN0IHN3aXBlckxhc3RzRXZlbnRzID0gbmV3IFN3aXBlcignLmhvbWUtdGltZWxpbmUtY29udGFpbmVyJywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9LFxuICB9XG59KTtcblxuXG5jb25zdCBzd2lwZXJDaHJvbm8gPSBuZXcgU3dpcGVyKCcuY2hyb25vLXN3aXBlci0xJywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbl0sXG4gIHNwYWNlQmV0d2VlbjogMTAwLFxuICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgbW91c2V3aGVlbDoge1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgc2Vuc2l0aXZpdHk6IDUuNSxcbiAgfSxcbiAgZnJlZU1vZGU6IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHN0aWNreTogZmFsc2UsXG4gICAgbW9tZW50dW1Cb3VuY2U6IGZhbHNlLFxuICB9LFxuICBzY3JvbGxiYXI6IHtcbiAgICBlbDogXCIuc3dpcGVyLXNjcm9sbGJhclwiLFxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDE1MCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgfSxcbiAgfVxufSk7XG5cblxuY29uc3Qgc3dpcGVyQmxvY2tzSW5mb3MxID0gbmV3IFN3aXBlcignLnNsaWRlci1tb2JpbGUtY29udGFpbmVyJywge1xuICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIGxvb3A6IHRydWUsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbn0pO1xuXG5cbmNvbnN0IHN3aXBlclByb2R1Y3RzQ29sb3JpcyA9IG5ldyBTd2lwZXIoJy5zbGlkZXItY29sb3JpcycsIHtcbiAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbn0pO1xuXG5cbmNvbnN0IHN3aXBlclByb2R1Y3RzQWNjZXNzb3JpZXMgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWFjY2Vzc29pcmllcycsIHtcbiAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbn0pO1xuXG5jb25zdCBzd2lwZXJHYWxsZXJ5Vm9sID0gbmV3IFN3aXBlcignLmdhbGxlcnktdm9sJywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnZvbC1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIudm9sLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgfSxcbiAgfSxcbn0pXG5cbmNvbnN0IHN3aXBlckdhbGxlcnlMaWZlc3R5bGUgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeS1saWZlc3R5bGUnLCB7XG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgbG9vcDogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIubGlmZXN0eWxlLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5saWZlc3R5bGUtYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9LFxuICB9LFxufSlcblxuY29uc3Qgc3dpcGVyR2FsbGVyeUF0ZWxpZXIgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeS1hdGVsaWVyJywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLmF0ZWxpZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLmF0ZWxpZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9LFxuICB9LFxufSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQU9TIiwiaW5pdCIsImR1cmF0aW9uIiwiZGVsYXkiLCJkZWJvdW5jZURlbGF5Iiwib25jZSIsIm1pcnJvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVuZGVmaW5lZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbFkiLCJoZWFkZXJTaXRlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm5hdkJ1dHRvbiIsIm5hdkxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hdkVsZW1lbnRzIiwib25jbGljayIsImkiLCJsZW5ndGgiLCJ0b2dnbGUiLCJmb3JFYWNoIiwibmF2TGluayIsInN1Yk5hdkJ1dHRvbnMiLCJzdWJOYXZCdXR0b24iLCJjb250YWlucyIsIiQiLCJvbiIsInNsaWRlVG9nZ2xlIiwibW90b3JzQmxvY2siLCJmaXJzdEJsb2NrIiwiY2xhc3NOYW1lIiwibW90b3JzTGlzdEJsb2NrIiwiZmlyc3RMaXN0QmxvY2siLCJtb3RvcnNJbWFnZXMiLCJmaXJzdEltYWdlQmxvY2siLCJtb3RvclNlbGVjdCIsInZhbHVlU2VsZWN0ZWQiLCJ2YWx1ZSIsImJsb2NrU2VsZWN0ZWQiLCJibG9ja0luZm9zU2VsZWN0ZWQiLCJpbWFnZVNlbGVjdGVkIiwiYmxvY2siLCJjb250YWN0QnV0dG9uIiwiY29udGFjdEJsb2NrIiwiYnV0dG9uIiwiY29udGFjdEJ0bjEiLCJjb250YWN0QnRuMiIsImNvbnRhY3RCdG4zIiwidGFicyIsInJlcXVpcmUiLCJjb250YWluZXIiLCJwcm9kdWN0VGFic2NvbnRhaW5lciIsInBhcnRuZXJzVGFic2NvbnRhaW5lciIsIm9wdGlvbnNDb250YWluZXIiLCJQaG90b1N3aXBlTGlnaHRib3giLCJwcm9kdWN0TGlnaHRib3giLCJnYWxsZXJ5IiwiY2hpbGRyZW4iLCJzaG93SGlkZUFuaW1hdGlvblR5cGUiLCJwc3dwTW9kdWxlIiwicG9zdEFycm93IiwiY29uc29sZSIsImxvZyIsImNsaWNrSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhlYWRlckhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFRvcCIsInNjcm9sbCIsInRvcCIsImJlaGF2aW9yIiwiU3dpcGVyIiwiUGFnaW5hdGlvbiIsIk5hdmlnYXRpb24iLCJzd2lwZXJMYXN0TmV3cyIsInNsaWRlc1BlclZpZXciLCJjZW50ZXJlZFNsaWRlcyIsImxvb3AiLCJzcGFjZUJldHdlZW4iLCJicmVha3BvaW50cyIsInN3aXBlckRvYyIsIm1vZHVsZXMiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwic3dpcGVyTGFzdHNFdmVudHMiLCJzd2lwZXJDaHJvbm8iLCJzbGlkZVRvQ2xpY2tlZFNsaWRlIiwibW91c2V3aGVlbCIsImVuYWJsZWQiLCJzZW5zaXRpdml0eSIsImZyZWVNb2RlIiwic3RpY2t5IiwibW9tZW50dW1Cb3VuY2UiLCJzY3JvbGxiYXIiLCJlbCIsImRyYWdnYWJsZSIsInN3aXBlckJsb2Nrc0luZm9zMSIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJzd2lwZXJQcm9kdWN0c0NvbG9yaXMiLCJzd2lwZXJQcm9kdWN0c0FjY2Vzc29yaWVzIiwic3dpcGVyR2FsbGVyeVZvbCIsInN3aXBlckdhbGxlcnlMaWZlc3R5bGUiLCJzd2lwZXJHYWxsZXJ5QXRlbGllciJdLCJzb3VyY2VSb290IjoiIn0=