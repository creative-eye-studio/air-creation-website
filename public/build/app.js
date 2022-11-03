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
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var parallax_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! parallax-image */ "./node_modules/parallax-image/parallax-image.js");
/* harmony import */ var parallax_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(parallax_image__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");




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
// OPEN LAYERS
// ------------------------------------------------------------------







if (document.querySelector(".partners-map") != undefined) {
  var aubLonLat = [4.389863, 44.620909];
  var aubWebMercator = (0,ol_proj__WEBPACK_IMPORTED_MODULE_7__.fromLonLat)(aubLonLat);
  var map = new ol_Map__WEBPACK_IMPORTED_MODULE_8__["default"]({
    target: 'map',
    layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_9__["default"]({
      source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_10__["default"]()
    })],
    view: new ol_View__WEBPACK_IMPORTED_MODULE_11__["default"]({
      center: aubWebMercator,
      zoom: 15
    })
  });
} // Parallax
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
}); // Tabs
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





var swiperDoc = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.product-doc-list', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Navigation],
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-doc-button-next',
    prevEl: '.swiper-doc-button-prev'
  },
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
var swiperLastsEvents = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.home-timeline-container', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Navigation],
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
var chrono1 = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.chrono-swiper-1', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Pagination],
  spaceBetween: 30,
  pagination: {
    el: ".chrono-pagination-1",
    clickable: true
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
var chrono2 = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.chrono-swiper-2', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Pagination],
  spaceBetween: 30,
  pagination: {
    el: ".chrono-pagination-2",
    clickable: true
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
var chrono3 = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.chrono-swiper-3', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Pagination],
  spaceBetween: 30,
  pagination: {
    el: ".chrono-pagination-3",
    clickable: true
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
var swiperBlocksInfos1 = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.slider-mobile-container', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Pagination],
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var swiperLastsPosts = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.posts', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Pagination],
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 30
    }
  }
});
var swiperProductsColoris = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.slider-coloris', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Navigation],
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true
});
var swiperProductsAccessories = new swiper__WEBPACK_IMPORTED_MODULE_13__["default"]('.slider-accessoiries', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_13__.Pagination],
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_modules_es_array-a24d23","vendors-node_modules_swup_debug-plugin_lib_index_js-node_modules_swup_fade-theme_lib_index_js-701958","vendors-node_modules_aos_dist_aos_js-node_modules_core-js_modules_es_array_for-each_js-node_m-4dae5a","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_bo-c9ceb2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxPQUFPLEVBQUUsQ0FBQ0YsK0NBQUQsQ0FEK0M7RUFFeERHLGFBQWEsRUFBRSxNQUZ5QztFQUd4REMsY0FBYyxFQUFFLElBSHdDO0VBSXhEQyxJQUFJLEVBQUU7QUFKa0QsQ0FBOUIsQ0FBOUI7QUFRQSxJQUFNZ0IseUJBQXlCLEdBQUcsSUFBSXZCLCtDQUFKLENBQVcsc0JBQVgsRUFBbUM7RUFDakVJLE9BQU8sRUFBRSxDQUFDSCwrQ0FBRCxDQUR3RDtFQUVqRUksYUFBYSxFQUFFLE1BRmtEO0VBR2pFQyxjQUFjLEVBQUUsSUFIaUQ7RUFJakVDLElBQUksRUFBRTtBQUoyRCxDQUFuQyxDQUFsQzs7Ozs7Ozs7Ozs7QUNwV0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvd2ViL2FwcC5zY3NzPzJhODQiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvd2ViL2FwcC5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuXG4vLyBBT1Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcbkFPUy5pbml0KHtcbiAgZHVyYXRpb246IDEwMDAsXG4gIGRlbGF5OiAyMDAsXG4gIGRlYm91bmNlRGVsYXk6IDUwLFxuICBvbmNlOiBmYWxzZSxcbiAgbWlycm9yOiB0cnVlXG59KTtcblxuXG5cbi8vIFJFTE9BRCBQQUdFXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qaW1wb3J0IFN3dXAgZnJvbSAnc3d1cCc7XG5pbXBvcnQgU3d1cEJvZHlDbGFzc1BsdWdpbiBmcm9tICdAc3d1cC9ib2R5LWNsYXNzLXBsdWdpbic7XG5cbmNvbnN0IHN3dXAgPSBuZXcgU3d1cCh7XG4gIHBsdWdpbnM6IFtuZXcgU3d1cEJvZHlDbGFzc1BsdWdpbigpXVxuXG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3d1cDpjb250ZW50UmVwbGFjZWQnLCBmdW5jdGlvbigpe1xuICBBT1MuaW5pdCgpO1xuICBzd2lwZXJGdW5jdGlvbnMoKTtcbiAgT3BlbkxheWVyc01hcCgpO1xufSkqL1xuXG5cbi8vIE9QRU4gTEFZRVJTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBNYXAgZnJvbSAnb2wvTWFwJztcbmltcG9ydCBWaWV3IGZyb20gJ29sL1ZpZXcnO1xuaW1wb3J0IFRpbGVMYXllciBmcm9tICdvbC9sYXllci9UaWxlJztcbmltcG9ydCBPU00gZnJvbSAnb2wvc291cmNlL09TTSc7XG5pbXBvcnQge2Zyb21Mb25MYXR9IGZyb20gJ29sL3Byb2onO1xuXG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcnRuZXJzLW1hcFwiKSAhPSB1bmRlZmluZWQpIHtcbiAgY29uc3QgYXViTG9uTGF0ID0gWzQuMzg5ODYzLCA0NC42MjA5MDldO1xuICBjb25zdCBhdWJXZWJNZXJjYXRvciA9IGZyb21Mb25MYXQoYXViTG9uTGF0KTtcbiAgXG4gIGNvbnN0IG1hcCA9IG5ldyBNYXAoe1xuICAgIHRhcmdldDogJ21hcCcsXG4gICAgbGF5ZXJzOiBbXG4gICAgICBuZXcgVGlsZUxheWVyKHtcbiAgICAgICAgc291cmNlOiBuZXcgT1NNKClcbiAgICAgIH0pXG4gICAgXSxcbiAgICB2aWV3OiBuZXcgVmlldyh7XG4gICAgICBjZW50ZXI6IGF1YldlYk1lcmNhdG9yLFxuICAgICAgem9vbTogMTUsXG4gICAgfSlcbiAgfSlcbn1cblxuXG5cblxuXG4vLyBQYXJhbGxheFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgJ3BhcmFsbGF4LWltYWdlJztcblxuXG4vLyBIZWFkZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItYmFzZScpICE9IHVuZGVmaW5lZCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB2YXIgaGVhZGVyU2l0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlci1iYXNlJylbMF07XG5cbiAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gNTApIHtcbiAgICAgIGhlYWRlclNpdGUuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyU2l0ZS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZCcpO1xuICAgIH1cbiAgfSlcbn1cblxuXG5cbi8vIE5hdmlnYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIG5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtbmF2Jyk7XG52YXIgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5sZXQgbmF2RWxlbWVudHMgPSBbJy5idG4tbmF2JywgJy5wcmltYXJ5LW1lbnUnXTtcblxubmF2QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2RWxlbWVudHNbaV0pLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtb3BlbmVkJyk7XG59XG5cbm5hdkxpbmtzLmZvckVhY2gobmF2TGluayA9PiB7XG4gIG5hdkxpbmsub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdkVsZW1lbnRzW2ldKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuZWQnKTtcbiAgfVxufSk7XG5cblxuXG4vLyBTb3VzLU5hdmlnYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIHN1Yk5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3ViLW1lbnUtYnRuJyk7XG5cbnN1Yk5hdkJ1dHRvbnMuZm9yRWFjaChzdWJOYXZCdXR0b24gPT4ge1xuICBzdWJOYXZCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIFxuICAgIHtcbiAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9IFxuICAgIGVsc2UgXG4gICAge1xuICAgICAgc3ViTmF2QnV0dG9ucy5mb3JFYWNoKHN1Yk5hdkJ1dHRvbiA9PiB7XG4gICAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG5cbi8vIENvbnRhY3QgRm9ybVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGUtY29udGFjdCcpO1xudmFyIGNvbnRhY3RCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJsb2NrJyk7XG5jb250YWN0QnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb250YWN0QmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRhY3Qtb3BlbmVkJyk7XG4gIH1cbn0pO1xuXG5cblxuXG5cbi8vIFRhYnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIHRhYnMgPSByZXF1aXJlKCd0YWJzJyk7XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1jb250YWluZXInKVxudGFicyhjb250YWluZXIpO1xuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYmxvY2stMicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgcHJvZHVjdFRhYnNjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1ibG9jay0yJylcbiAgdGFicyhwcm9kdWN0VGFic2NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnMtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBwYXJ0bmVyc1RhYnNjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnMtY29udGFpbmVyJylcbiAgdGFicyhwYXJ0bmVyc1RhYnNjb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdi1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIHBhcnRuZXJzVGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXYtY29udGFpbmVyJylcbiAgdGFicyhwYXJ0bmVyc1RhYnNjb250YWluZXIpO1xufVxuXG5cblxuXG4vLyBQb3N0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBwb3N0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWRvd24tcG9zdCcpXG5pZiAocG9zdEFycm93ICE9IHVuZGVmaW5lZCkge1xuICBjb25zb2xlLmxvZyhcInRyb3V2w6lcIik7XG4gIHBvc3RBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG59XG5cbiBcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IG9mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9zdC1jb250ZW50XCIpLm9mZnNldFRvcCAtIGhlYWRlckhlaWdodDtcbiAgc2Nyb2xsKHtcbiAgICB0b3A6IG9mZnNldFRvcCxcbiAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICB9KTtcbn1cblxuXG5cbi8vIFN3aXBlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgU3dpcGVyLCB7IFBhZ2luYXRpb24sIE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXInO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcblxuY29uc3Qgc3dpcGVyRG9jID0gbmV3IFN3aXBlcignLnByb2R1Y3QtZG9jLWxpc3QnLCB7XG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1kb2MtYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zd2lwZXItZG9jLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAxMDI0OiB7XG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIH1cbiAgfVxufSk7XG5cblxuY29uc3Qgc3dpcGVyTGFzdHNFdmVudHMgPSBuZXcgU3dpcGVyKCcuaG9tZS10aW1lbGluZS1jb250YWluZXInLCB7XG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogNjAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIH0sXG4gIH1cbn0pO1xuXG5cbmNvbnN0IGNocm9ubzEgPSBuZXcgU3dpcGVyKCcuY2hyb25vLXN3aXBlci0xJywge1xuICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIuY2hyb25vLXBhZ2luYXRpb24tMVwiLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9LFxuICB9XG59KTtcblxuXG5jb25zdCBjaHJvbm8yID0gbmV3IFN3aXBlcignLmNocm9uby1zd2lwZXItMicsIHtcbiAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLmNocm9uby1wYWdpbmF0aW9uLTJcIixcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgc3BhY2VCZXR3ZWVuOiA2MCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgfSxcbiAgfVxufSk7XG5cblxuY29uc3QgY2hyb25vMyA9IG5ldyBTd2lwZXIoJy5jaHJvbm8tc3dpcGVyLTMnLCB7XG4gIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5jaHJvbm8tcGFnaW5hdGlvbi0zXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogNjAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIH0sXG4gIH1cbn0pO1xuXG5cbmNvbnN0IHN3aXBlckJsb2Nrc0luZm9zMSA9IG5ldyBTd2lwZXIoJy5zbGlkZXItbW9iaWxlLWNvbnRhaW5lcicsIHtcbiAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICBsb29wOiB0cnVlLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG59KTtcblxuXG5jb25zdCBzd2lwZXJMYXN0c1Bvc3RzID0gbmV3IFN3aXBlcignLnBvc3RzJywge1xuICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIGxvb3A6IHRydWUsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgMTAyNDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICB9LFxuICAgICAgMTIwMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICB9XG4gICAgfVxufSlcblxuXG5jb25zdCBzd2lwZXJQcm9kdWN0c0NvbG9yaXMgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWNvbG9yaXMnLCB7XG4gICAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIGxvb3A6IHRydWUsXG59KTtcblxuXG5jb25zdCBzd2lwZXJQcm9kdWN0c0FjY2Vzc29yaWVzID0gbmV3IFN3aXBlcignLnNsaWRlci1hY2Nlc3NvaXJpZXMnLCB7XG4gICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIGxvb3A6IHRydWUsXG59KTtcblxuICBcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJBT1MiLCJpbml0IiwiZHVyYXRpb24iLCJkZWxheSIsImRlYm91bmNlRGVsYXkiLCJvbmNlIiwibWlycm9yIiwiTWFwIiwiVmlldyIsIlRpbGVMYXllciIsIk9TTSIsImZyb21Mb25MYXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmRlZmluZWQiLCJhdWJMb25MYXQiLCJhdWJXZWJNZXJjYXRvciIsIm1hcCIsInRhcmdldCIsImxheWVycyIsInNvdXJjZSIsInZpZXciLCJjZW50ZXIiLCJ6b29tIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsWSIsImhlYWRlclNpdGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibmF2QnV0dG9uIiwibmF2TGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2RWxlbWVudHMiLCJvbmNsaWNrIiwiaSIsImxlbmd0aCIsInRvZ2dsZSIsImZvckVhY2giLCJuYXZMaW5rIiwic3ViTmF2QnV0dG9ucyIsInN1Yk5hdkJ1dHRvbiIsImNvbnRhaW5zIiwiY29udGFjdEJ1dHRvbiIsImNvbnRhY3RCbG9jayIsImJ1dHRvbiIsInRhYnMiLCJyZXF1aXJlIiwiY29udGFpbmVyIiwicHJvZHVjdFRhYnNjb250YWluZXIiLCJwYXJ0bmVyc1RhYnNjb250YWluZXIiLCJwb3N0QXJyb3ciLCJjb25zb2xlIiwibG9nIiwiY2xpY2tIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0VG9wIiwic2Nyb2xsIiwidG9wIiwiYmVoYXZpb3IiLCJTd2lwZXIiLCJQYWdpbmF0aW9uIiwiTmF2aWdhdGlvbiIsInN3aXBlckRvYyIsIm1vZHVsZXMiLCJzbGlkZXNQZXJWaWV3IiwiY2VudGVyZWRTbGlkZXMiLCJsb29wIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwic3dpcGVyTGFzdHNFdmVudHMiLCJzcGFjZUJldHdlZW4iLCJjaHJvbm8xIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwiY2hyb25vMiIsImNocm9ubzMiLCJzd2lwZXJCbG9ja3NJbmZvczEiLCJzd2lwZXJMYXN0c1Bvc3RzIiwic3dpcGVyUHJvZHVjdHNDb2xvcmlzIiwic3dpcGVyUHJvZHVjdHNBY2Nlc3NvcmllcyJdLCJzb3VyY2VSb290IjoiIn0=