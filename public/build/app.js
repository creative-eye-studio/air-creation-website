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
var swiperGalleryVol = new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.gallery-vol', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation],
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
var swiperGalleryLifestyle = new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.gallery-lifestyle', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation],
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
var swiperGalleryAtelier = new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.gallery-atelier', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation],
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_modules_es_array-a24d23","vendors-node_modules_swup_debug-plugin_lib_index_js-node_modules_swup_fade-theme_lib_index_js-701958","vendors-node_modules_aos_dist_aos_js-node_modules_core-js_modules_es_array_for-each_js-node_m-ea97d2","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_bo-c9ceb2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1pQixvQkFBb0IsR0FBRyxJQUFJeEIsOENBQU0sQ0FBQyxrQkFBa0IsRUFBRTtFQUMxRFUsT0FBTyxFQUFFLENBQUNSLDhDQUFVLENBQUM7RUFDckJFLGFBQWEsRUFBRSxDQUFDO0VBQ2hCRSxJQUFJLEVBQUUsSUFBSTtFQUNWSyxVQUFVLEVBQUU7SUFDVkMsTUFBTSxFQUFFLHNCQUFzQjtJQUM5QkMsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUNETCxXQUFXLEVBQUU7SUFDWCxJQUFJLEVBQUU7TUFDSkosYUFBYSxFQUFFLENBQUM7TUFDaEJHLFlBQVksRUFBRTtJQUNoQjtFQUNGO0FBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ2xhRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy93ZWIvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvd2ViL2FwcC5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuXG4vLyBBT1Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcbkFPUy5pbml0KHtcbiAgZHVyYXRpb246IDEwMDAsXG4gIGRlbGF5OiAyMDAsXG4gIGRlYm91bmNlRGVsYXk6IDUwLFxuICBvbmNlOiBmYWxzZSxcbiAgbWlycm9yOiB0cnVlXG59KTtcblxuXG5cbi8vIFJFTE9BRCBQQUdFXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qaW1wb3J0IFN3dXAgZnJvbSAnc3d1cCc7XG5pbXBvcnQgU3d1cEJvZHlDbGFzc1BsdWdpbiBmcm9tICdAc3d1cC9ib2R5LWNsYXNzLXBsdWdpbic7XG5cbmNvbnN0IHN3dXAgPSBuZXcgU3d1cCh7XG4gIHBsdWdpbnM6IFtuZXcgU3d1cEJvZHlDbGFzc1BsdWdpbigpXVxuXG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3d1cDpjb250ZW50UmVwbGFjZWQnLCBmdW5jdGlvbigpe1xuICBBT1MuaW5pdCgpO1xuICBzd2lwZXJGdW5jdGlvbnMoKTtcbiAgT3BlbkxheWVyc01hcCgpO1xufSkqL1xuXG5cblxuXG4vLyBQYXJhbGxheFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgJ3BhcmFsbGF4LWltYWdlJztcblxuXG4vLyBIZWFkZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItYmFzZScpICE9IHVuZGVmaW5lZCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB2YXIgaGVhZGVyU2l0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlci1iYXNlJylbMF07XG5cbiAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gNTApIHtcbiAgICAgIGhlYWRlclNpdGUuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyU2l0ZS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZCcpO1xuICAgIH1cbiAgfSlcbn1cblxuXG5cbi8vIE5hdmlnYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIG5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtbmF2Jyk7XG52YXIgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5sZXQgbmF2RWxlbWVudHMgPSBbJy5idG4tbmF2JywgJy5wcmltYXJ5LW1lbnUnXTtcblxubmF2QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2RWxlbWVudHNbaV0pLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtb3BlbmVkJyk7XG59XG5cbm5hdkxpbmtzLmZvckVhY2gobmF2TGluayA9PiB7XG4gIG5hdkxpbmsub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdkVsZW1lbnRzW2ldKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuZWQnKTtcbiAgfVxufSk7XG5cblxuXG4vLyBTb3VzLU5hdmlnYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIHN1Yk5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3ViLW1lbnUtYnRuJyk7XG5cbnN1Yk5hdkJ1dHRvbnMuZm9yRWFjaChzdWJOYXZCdXR0b24gPT4ge1xuICBzdWJOYXZCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIFxuICAgIHtcbiAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9IFxuICAgIGVsc2UgXG4gICAge1xuICAgICAgc3ViTmF2QnV0dG9ucy5mb3JFYWNoKHN1Yk5hdkJ1dHRvbiA9PiB7XG4gICAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG5cbi8vIENvbnRhY3QgRm9ybVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtY29udGFjdCcpO1xudmFyIGNvbnRhY3RCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJsb2NrJyk7XG5jb250YWN0QnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb250YWN0QmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRhY3Qtb3BlbmVkJyk7XG4gIH1cbn0pO1xuXG52YXIgY29udGFjdEJ0bjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdEJ0bjEnKTtcbnZhciBjb250YWN0QnRuMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnRuMicpO1xudmFyIGNvbnRhY3RCdG4zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RCdG4zJyk7XG5cbmNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdjb250YWN0X2Zvcm1bZ2VuZGVyXSddXCIpLmxlbmd0aCk7XG5cbmNvbnRhY3RCdG4xLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMVwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0yXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTNcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgY29udGFjdEJ0bjEuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbCcpO1xufVxuXG5jb250YWN0QnRuMi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9J2NvbnRhY3RfZm9ybVtnZW5kZXJdJ106Y2hlY2tlZFwiKS5sZW5ndGggPCAxKSB7cmV0dXJuIGZhbHNlO31cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fbG5hbWUnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fZm5hbWUnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fcGhvbmUnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X2Zvcm1fZW1haWwnKS52YWx1ZSA9PSBcIlwiKSB7cmV0dXJuIGZhbHNlO31cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTFcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMlwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0zXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gIGNvbnRhY3RCdG4xLmNsYXNzTGlzdC5hZGQoJ2Z1bGwnKTtcbiAgY29udGFjdEJ0bjIuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbCcpO1xufTtcblxuY29udGFjdEJ0bjMub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdjb250YWN0X2Zvcm1bY3VzdG9tZXJfdHlwZV0nXTpjaGVja2VkXCIpLmxlbmd0aCA8IDEpIHtyZXR1cm4gZmFsc2U7fVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0yXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTNcIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgY29udGFjdEJ0bjIuY2xhc3NMaXN0LmFkZCgnZnVsbCcpO1xufTtcblxuXG5cblxuLy8gVGFic1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgdGFicyA9IHJlcXVpcmUoJ3RhYnMnKTtcbnZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRhaW5lcicpXG50YWJzKGNvbnRhaW5lcik7XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1ibG9jay0yJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBwcm9kdWN0VGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJsb2NrLTInKVxuICB0YWJzKHByb2R1Y3RUYWJzY29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVycy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIHBhcnRuZXJzVGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVycy1jb250YWluZXInKVxuICB0YWJzKHBhcnRuZXJzVGFic2NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2LWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgcGFydG5lcnNUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdi1jb250YWluZXInKVxuICB0YWJzKHBhcnRuZXJzVGFic2NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1jb250YWluZXInKVxuICB0YWJzKG9wdGlvbnNDb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlcy10YWJzLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZXMtdGFicy1jb250YWluZXInKVxuICB0YWJzKG9wdGlvbnNDb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGFicy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10YWJzLWNvbnRhaW5lcicpXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XG59XG5cblxuXG5cbi8vIFBvc3Rcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIHBvc3RBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtZG93bi1wb3N0JylcbmlmIChwb3N0QXJyb3cgIT0gdW5kZWZpbmVkKSB7XG4gIGNvbnNvbGUubG9nKFwidHJvdXbDqVwiKTtcbiAgcG9zdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbn1cblxuIFxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLm9mZnNldEhlaWdodDtcbiAgY29uc3Qgb2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3N0LWNvbnRlbnRcIikub2Zmc2V0VG9wIC0gaGVhZGVySGVpZ2h0O1xuICBzY3JvbGwoe1xuICAgIHRvcDogb2Zmc2V0VG9wLFxuICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gIH0pO1xufVxuXG5cblxuXG4vLyBQcm9kdWN0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgbW90b3JTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW90b3Itc2VsZWN0Jyk7XG52YXIgbW90b3JzU2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vdG9yLWltYWdlJyk7XG5cbmlmIChtb3RvclNlbGVjdCkge1xuICBtb3RvclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZVNlbGVjdGVkID0gbW90b3JTZWxlY3QudmFsdWU7XG4gICAgdmFyIHNsaWRlU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGlkZXI9XCInICsgdmFsdWVTZWxlY3RlZCArICdcIl0nKVxuXG4gICAgbW90b3JzU2xpZGVzLmZvckVhY2gobW90b3JzU2xpZGUgPT4ge1xuICAgICAgbW90b3JzU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICBzbGlkZVNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgY29uc29sZS5sb2codmFsdWVTZWxlY3RlZCk7XG4gIH0pO1xufVxuXG5cblxuXG4vLyBTd2lwZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFN3aXBlciwgeyBQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uIH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XG5cbmNvbnN0IHN3aXBlckxhc3ROZXdzID0gbmV3IFN3aXBlcignLnBvc3RzJywge1xuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gIGxvb3A6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMTAyNDoge1xuICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IHN3aXBlckRvYyA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0LWRvYy1saXN0Jywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1kb2MtYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zd2lwZXItZG9jLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA2NDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICBsb29wOiB0cnVlLFxuICAgIH0sXG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgfVxuICB9XG59KTtcblxuXG5jb25zdCBzd2lwZXJMYXN0c0V2ZW50cyA9IG5ldyBTd2lwZXIoJy5ob21lLXRpbWVsaW5lLWNvbnRhaW5lcicsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgc3BhY2VCZXR3ZWVuOiA2MCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgfSxcbiAgfVxufSk7XG5cblxuY29uc3Qgc3dpcGVyQ2hyb25vID0gbmV3IFN3aXBlcignLmNocm9uby1zd2lwZXItMScsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9LFxuICB9XG59KTtcblxuXG5jb25zdCBzd2lwZXJCbG9ja3NJbmZvczEgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLW1vYmlsZS1jb250YWluZXInLCB7XG4gICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxufSk7XG5cblxuY29uc3Qgc3dpcGVyUHJvZHVjdHNDb2xvcmlzID0gbmV3IFN3aXBlcignLnNsaWRlci1jb2xvcmlzJywge1xuICAgIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBsb29wOiB0cnVlLFxufSk7XG5cblxuY29uc3Qgc3dpcGVyUHJvZHVjdHNBY2Nlc3NvcmllcyA9IG5ldyBTd2lwZXIoJy5zbGlkZXItYWNjZXNzb2lyaWVzJywge1xuICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBsb29wOiB0cnVlLFxufSk7XG5cbmNvbnN0IHN3aXBlckdhbGxlcnlWb2wgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeS12b2wnLCB7XG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgbG9vcDogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIudm9sLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi52b2wtYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9LFxuICB9LFxufSlcblxuY29uc3Qgc3dpcGVyR2FsbGVyeUxpZmVzdHlsZSA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LWxpZmVzdHlsZScsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBsb29wOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5saWZlc3R5bGUtYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLmxpZmVzdHlsZS1idXR0b24tcHJldlwiLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIH0sXG4gIH0sXG59KVxuXG5jb25zdCBzd2lwZXJHYWxsZXJ5QXRlbGllciA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5LWF0ZWxpZXInLCB7XG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgbG9vcDogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIuYXRlbGllci1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIuYXRlbGllci1idXR0b24tcHJldlwiLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIH0sXG4gIH0sXG59KSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJBT1MiLCJpbml0IiwiZHVyYXRpb24iLCJkZWxheSIsImRlYm91bmNlRGVsYXkiLCJvbmNlIiwibWlycm9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5kZWZpbmVkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsWSIsImhlYWRlclNpdGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibmF2QnV0dG9uIiwibmF2TGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2RWxlbWVudHMiLCJvbmNsaWNrIiwiaSIsImxlbmd0aCIsInRvZ2dsZSIsImZvckVhY2giLCJuYXZMaW5rIiwic3ViTmF2QnV0dG9ucyIsInN1Yk5hdkJ1dHRvbiIsImNvbnRhaW5zIiwiY29udGFjdEJ1dHRvbiIsImNvbnRhY3RCbG9jayIsImJ1dHRvbiIsImNvbnRhY3RCdG4xIiwiY29udGFjdEJ0bjIiLCJjb250YWN0QnRuMyIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsInRhYnMiLCJyZXF1aXJlIiwiY29udGFpbmVyIiwicHJvZHVjdFRhYnNjb250YWluZXIiLCJwYXJ0bmVyc1RhYnNjb250YWluZXIiLCJvcHRpb25zQ29udGFpbmVyIiwicG9zdEFycm93IiwiY2xpY2tIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0VG9wIiwic2Nyb2xsIiwidG9wIiwiYmVoYXZpb3IiLCJtb3RvclNlbGVjdCIsIm1vdG9yc1NsaWRlcyIsInZhbHVlU2VsZWN0ZWQiLCJzbGlkZVNlbGVjdGVkIiwibW90b3JzU2xpZGUiLCJTd2lwZXIiLCJQYWdpbmF0aW9uIiwiTmF2aWdhdGlvbiIsInN3aXBlckxhc3ROZXdzIiwic2xpZGVzUGVyVmlldyIsImNlbnRlcmVkU2xpZGVzIiwibG9vcCIsInNwYWNlQmV0d2VlbiIsImJyZWFrcG9pbnRzIiwic3dpcGVyRG9jIiwibW9kdWxlcyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJzd2lwZXJMYXN0c0V2ZW50cyIsInN3aXBlckNocm9ubyIsInN3aXBlckJsb2Nrc0luZm9zMSIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsInN3aXBlclByb2R1Y3RzQ29sb3JpcyIsInN3aXBlclByb2R1Y3RzQWNjZXNzb3JpZXMiLCJzd2lwZXJHYWxsZXJ5Vm9sIiwic3dpcGVyR2FsbGVyeUxpZmVzdHlsZSIsInN3aXBlckdhbGxlcnlBdGVsaWVyIl0sInNvdXJjZVJvb3QiOiIifQ==