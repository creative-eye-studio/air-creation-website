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



aos__WEBPACK_IMPORTED_MODULE_5___default().init(); // RELOAD PAGE
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

if (screen.width >= 1200 && swiperInnovBlocks != undefined) {
  swiperInnovBlocks.destroy();
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQU1nQix5QkFBeUIsR0FBRyxJQUFJdkIsK0NBQUosQ0FBVyxzQkFBWCxFQUFtQztFQUNqRUksT0FBTyxFQUFFLENBQUNILCtDQUFELENBRHdEO0VBRWpFSSxhQUFhLEVBQUUsTUFGa0Q7RUFHakVDLGNBQWMsRUFBRSxJQUhpRDtFQUlqRUMsSUFBSSxFQUFFO0FBSjJELENBQW5DLENBQWxDOztBQVFBLElBQUlpQixNQUFNLENBQUNDLEtBQVAsSUFBZ0IsSUFBaEIsSUFBd0JDLGlCQUFpQixJQUFJOUUsU0FBakQsRUFBNEQ7RUFDMUQ4RSxpQkFBaUIsQ0FBQ0MsT0FBbEI7QUFDRDs7Ozs7Ozs7Ozs7QUN4V0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvd2ViL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL3dlYi9hcHAuc2Nzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cblxuLy8gQU9TXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XG5BT1MuaW5pdCgpO1xuXG5cblxuLy8gUkVMT0FEIFBBR0Vcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyppbXBvcnQgU3d1cCBmcm9tICdzd3VwJztcbmltcG9ydCBTd3VwQm9keUNsYXNzUGx1Z2luIGZyb20gJ0Bzd3VwL2JvZHktY2xhc3MtcGx1Z2luJztcblxuY29uc3Qgc3d1cCA9IG5ldyBTd3VwKHtcbiAgcGx1Z2luczogW25ldyBTd3VwQm9keUNsYXNzUGx1Z2luKCldXG5cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzd3VwOmNvbnRlbnRSZXBsYWNlZCcsIGZ1bmN0aW9uKCl7XG4gIEFPUy5pbml0KCk7XG4gIHN3aXBlckZ1bmN0aW9ucygpO1xuICBPcGVuTGF5ZXJzTWFwKCk7XG59KSovXG5cblxuLy8gT1BFTiBMQVlFUlNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IE1hcCBmcm9tICdvbC9NYXAnO1xuaW1wb3J0IFZpZXcgZnJvbSAnb2wvVmlldyc7XG5pbXBvcnQgVGlsZUxheWVyIGZyb20gJ29sL2xheWVyL1RpbGUnO1xuaW1wb3J0IE9TTSBmcm9tICdvbC9zb3VyY2UvT1NNJztcbmltcG9ydCB7ZnJvbUxvbkxhdH0gZnJvbSAnb2wvcHJvaic7XG5cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFydG5lcnMtbWFwXCIpICE9IHVuZGVmaW5lZCkge1xuICBjb25zdCBhdWJMb25MYXQgPSBbNC4zODk4NjMsIDQ0LjYyMDkwOV07XG4gIGNvbnN0IGF1YldlYk1lcmNhdG9yID0gZnJvbUxvbkxhdChhdWJMb25MYXQpO1xuICBcbiAgY29uc3QgbWFwID0gbmV3IE1hcCh7XG4gICAgdGFyZ2V0OiAnbWFwJyxcbiAgICBsYXllcnM6IFtcbiAgICAgIG5ldyBUaWxlTGF5ZXIoe1xuICAgICAgICBzb3VyY2U6IG5ldyBPU00oKVxuICAgICAgfSlcbiAgICBdLFxuICAgIHZpZXc6IG5ldyBWaWV3KHtcbiAgICAgIGNlbnRlcjogYXViV2ViTWVyY2F0b3IsXG4gICAgICB6b29tOiAxNSxcbiAgICB9KVxuICB9KVxufVxuXG5cblxuXG5cbi8vIFBhcmFsbGF4XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCAncGFyYWxsYXgtaW1hZ2UnO1xuXG5cbi8vIEhlYWRlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1iYXNlJykgIT0gdW5kZWZpbmVkKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIHZhciBoZWFkZXJTaXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyLWJhc2UnKVswXTtcblxuICAgIGlmIChzY3JvbGxQb3NpdGlvbiA+PSA1MCkge1xuICAgICAgaGVhZGVyU2l0ZS5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXJTaXRlLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGVkJyk7XG4gICAgfVxuICB9KVxufVxuXG5cblxuLy8gTmF2aWdhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgbmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1uYXYnKTtcbnZhciBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcbmxldCBuYXZFbGVtZW50cyA9IFsnLmJ0bi1uYXYnLCAnLnByaW1hcnktbWVudSddO1xuXG5uYXZCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYXZFbGVtZW50c1tpXSkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIH1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ25hdi1vcGVuZWQnKTtcbn1cblxubmF2TGlua3MuZm9yRWFjaChuYXZMaW5rID0+IHtcbiAgbmF2TGluay5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2RWxlbWVudHNbaV0pLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW5lZCcpO1xuICB9XG59KTtcblxuXG5cbi8vIFNvdXMtTmF2aWdhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgc3ViTmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWItbWVudS1idG4nKTtcblxuc3ViTmF2QnV0dG9ucy5mb3JFYWNoKHN1Yk5hdkJ1dHRvbiA9PiB7XG4gIHN1Yk5hdkJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdWJOYXZCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgXG4gICAge1xuICAgICAgc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0gXG4gICAgZWxzZSBcbiAgICB7XG4gICAgICBzdWJOYXZCdXR0b25zLmZvckVhY2goc3ViTmF2QnV0dG9uID0+IHtcbiAgICAgICAgc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBzdWJOYXZCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICB9XG59KTtcblxuXG5cblxuLy8gQ29udGFjdCBGb3JtXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZ2dsZS1jb250YWN0Jyk7XG52YXIgY29udGFjdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtYmxvY2snKTtcbmNvbnRhY3RCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRhY3RCbG9jay5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGFjdC1vcGVuZWQnKTtcbiAgfVxufSk7XG5cblxuXG5cblxuLy8gVGFic1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgdGFicyA9IHJlcXVpcmUoJ3RhYnMnKTtcbnZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRhaW5lcicpXG50YWJzKGNvbnRhaW5lcik7XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1ibG9jay0yJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBwcm9kdWN0VGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJsb2NrLTInKVxuICB0YWJzKHByb2R1Y3RUYWJzY29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVycy1jb250YWluZXInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIHBhcnRuZXJzVGFic2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVycy1jb250YWluZXInKVxuICB0YWJzKHBhcnRuZXJzVGFic2NvbnRhaW5lcik7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2LWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgcGFydG5lcnNUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdi1jb250YWluZXInKVxuICB0YWJzKHBhcnRuZXJzVGFic2NvbnRhaW5lcik7XG59XG5cblxuXG5cbi8vIFBvc3Rcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIHBvc3RBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtZG93bi1wb3N0JylcbmlmIChwb3N0QXJyb3cgIT0gdW5kZWZpbmVkKSB7XG4gIGNvbnNvbGUubG9nKFwidHJvdXbDqVwiKTtcbiAgcG9zdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbn1cblxuIFxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBoZWFkZXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpLm9mZnNldEhlaWdodDtcbiAgY29uc3Qgb2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3N0LWNvbnRlbnRcIikub2Zmc2V0VG9wIC0gaGVhZGVySGVpZ2h0O1xuICBzY3JvbGwoe1xuICAgIHRvcDogb2Zmc2V0VG9wLFxuICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gIH0pO1xufVxuXG5cblxuLy8gU3dpcGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBTd2lwZXIsIHsgUGFnaW5hdGlvbiwgTmF2aWdhdGlvbiB9IGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xuXG5jb25zdCBzd2lwZXJEb2MgPSBuZXcgU3dpcGVyKCcucHJvZHVjdC1kb2MtbGlzdCcsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWRvYy1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1kb2MtYnV0dG9uLXByZXYnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDEwMjQ6IHtcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgfVxuICB9XG59KTtcblxuXG5jb25zdCBzd2lwZXJMYXN0c0V2ZW50cyA9IG5ldyBTd2lwZXIoJy5ob21lLXRpbWVsaW5lLWNvbnRhaW5lcicsIHtcbiAgbW9kdWxlczogW05hdmlnYXRpb25dLFxuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuY2hyb25vLXN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgc3BhY2VCZXR3ZWVuOiA2MCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgfSxcbiAgfVxufSk7XG5cblxuY29uc3QgY2hyb25vMSA9IG5ldyBTd2lwZXIoJy5jaHJvbm8tc3dpcGVyLTEnLCB7XG4gIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5jaHJvbm8tcGFnaW5hdGlvbi0xXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICB9LFxuICAgIDEyMDA6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogNjAsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIH0sXG4gIH1cbn0pO1xuXG5cbmNvbnN0IGNocm9ubzIgPSBuZXcgU3dpcGVyKCcuY2hyb25vLXN3aXBlci0yJywge1xuICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIuY2hyb25vLXBhZ2luYXRpb24tMlwiLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9LFxuICB9XG59KTtcblxuXG5jb25zdCBjaHJvbm8zID0gbmV3IFN3aXBlcignLmNocm9uby1zd2lwZXItMycsIHtcbiAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLmNocm9uby1wYWdpbmF0aW9uLTNcIixcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgc3BhY2VCZXR3ZWVuOiA2MCxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgfSxcbiAgfVxufSk7XG5cblxuY29uc3Qgc3dpcGVyQmxvY2tzSW5mb3MxID0gbmV3IFN3aXBlcignLnNsaWRlci1tb2JpbGUtY29udGFpbmVyJywge1xuICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIGxvb3A6IHRydWUsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbn0pO1xuXG5cbmNvbnN0IHN3aXBlckxhc3RzUG9zdHMgPSBuZXcgU3dpcGVyKCcucG9zdHMnLCB7XG4gICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAxMDI0OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIH0sXG4gICAgICAxMjAwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIH1cbiAgICB9XG59KVxuXG5cbmNvbnN0IHN3aXBlclByb2R1Y3RzQ29sb3JpcyA9IG5ldyBTd2lwZXIoJy5zbGlkZXItY29sb3JpcycsIHtcbiAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbn0pO1xuXG5cbmNvbnN0IHN3aXBlclByb2R1Y3RzQWNjZXNzb3JpZXMgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLWFjY2Vzc29pcmllcycsIHtcbiAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbn0pO1xuXG5cbmlmIChzY3JlZW4ud2lkdGggPj0gMTIwMCAmJiBzd2lwZXJJbm5vdkJsb2NrcyAhPSB1bmRlZmluZWQpIHtcbiAgc3dpcGVySW5ub3ZCbG9ja3MuZGVzdHJveSgpO1xufVxuXG4gIFxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkFPUyIsImluaXQiLCJNYXAiLCJWaWV3IiwiVGlsZUxheWVyIiwiT1NNIiwiZnJvbUxvbkxhdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVuZGVmaW5lZCIsImF1YkxvbkxhdCIsImF1YldlYk1lcmNhdG9yIiwibWFwIiwidGFyZ2V0IiwibGF5ZXJzIiwic291cmNlIiwidmlldyIsImNlbnRlciIsInpvb20iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxZIiwiaGVhZGVyU2l0ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuYXZCdXR0b24iLCJuYXZMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXZFbGVtZW50cyIsIm9uY2xpY2siLCJpIiwibGVuZ3RoIiwidG9nZ2xlIiwiZm9yRWFjaCIsIm5hdkxpbmsiLCJzdWJOYXZCdXR0b25zIiwic3ViTmF2QnV0dG9uIiwiY29udGFpbnMiLCJjb250YWN0QnV0dG9uIiwiY29udGFjdEJsb2NrIiwiYnV0dG9uIiwidGFicyIsInJlcXVpcmUiLCJjb250YWluZXIiLCJwcm9kdWN0VGFic2NvbnRhaW5lciIsInBhcnRuZXJzVGFic2NvbnRhaW5lciIsInBvc3RBcnJvdyIsImNvbnNvbGUiLCJsb2ciLCJjbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJoZWFkZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRUb3AiLCJzY3JvbGwiLCJ0b3AiLCJiZWhhdmlvciIsIlN3aXBlciIsIlBhZ2luYXRpb24iLCJOYXZpZ2F0aW9uIiwic3dpcGVyRG9jIiwibW9kdWxlcyIsInNsaWRlc1BlclZpZXciLCJjZW50ZXJlZFNsaWRlcyIsImxvb3AiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJzd2lwZXJMYXN0c0V2ZW50cyIsInNwYWNlQmV0d2VlbiIsImNocm9ubzEiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJjaHJvbm8yIiwiY2hyb25vMyIsInN3aXBlckJsb2Nrc0luZm9zMSIsInN3aXBlckxhc3RzUG9zdHMiLCJzd2lwZXJQcm9kdWN0c0NvbG9yaXMiLCJzd2lwZXJQcm9kdWN0c0FjY2Vzc29yaWVzIiwic2NyZWVuIiwid2lkdGgiLCJzd2lwZXJJbm5vdkJsb2NrcyIsImRlc3Ryb3kiXSwic291cmNlUm9vdCI6IiJ9