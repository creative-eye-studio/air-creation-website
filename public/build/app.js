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
}; // Tabs
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
var chrono = new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.chrono-swiper-1', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination],
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
      slidesPerView: 2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FEK0M7RUFFeERFLGFBQWEsRUFBRSxNQUZ5QztFQUd4REMsY0FBYyxFQUFFLElBSHdDO0VBSXhEQyxJQUFJLEVBQUU7QUFKa0QsQ0FBOUIsQ0FBOUI7QUFRQSxJQUFNZSx5QkFBeUIsR0FBRyxJQUFJckIsOENBQUosQ0FBVyxzQkFBWCxFQUFtQztFQUNqRVUsT0FBTyxFQUFFLENBQUNULDhDQUFELENBRHdEO0VBRWpFRyxhQUFhLEVBQUUsTUFGa0Q7RUFHakVDLGNBQWMsRUFBRSxJQUhpRDtFQUlqRUMsSUFBSSxFQUFFO0FBSjJELENBQW5DLENBQWxDOzs7Ozs7Ozs7OztBQ3hVQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy93ZWIvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvd2ViL2FwcC5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuXG4vLyBBT1Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcbkFPUy5pbml0KHtcbiAgZHVyYXRpb246IDEwMDAsXG4gIGRlbGF5OiAyMDAsXG4gIGRlYm91bmNlRGVsYXk6IDUwLFxuICBvbmNlOiBmYWxzZSxcbiAgbWlycm9yOiB0cnVlXG59KTtcblxuXG5cbi8vIFJFTE9BRCBQQUdFXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qaW1wb3J0IFN3dXAgZnJvbSAnc3d1cCc7XG5pbXBvcnQgU3d1cEJvZHlDbGFzc1BsdWdpbiBmcm9tICdAc3d1cC9ib2R5LWNsYXNzLXBsdWdpbic7XG5cbmNvbnN0IHN3dXAgPSBuZXcgU3d1cCh7XG4gIHBsdWdpbnM6IFtuZXcgU3d1cEJvZHlDbGFzc1BsdWdpbigpXVxuXG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3d1cDpjb250ZW50UmVwbGFjZWQnLCBmdW5jdGlvbigpe1xuICBBT1MuaW5pdCgpO1xuICBzd2lwZXJGdW5jdGlvbnMoKTtcbiAgT3BlbkxheWVyc01hcCgpO1xufSkqL1xuXG5cblxuLy8gUGFyYWxsYXhcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0ICdwYXJhbGxheC1pbWFnZSc7XG5cblxuXG4vLyBIZWFkZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItYmFzZScpICE9IHVuZGVmaW5lZCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB2YXIgaGVhZGVyU2l0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlci1iYXNlJylbMF07XG5cbiAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gNTApIHtcbiAgICAgIGhlYWRlclNpdGUuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyU2l0ZS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZCcpO1xuICAgIH1cbiAgfSlcbn1cblxuXG5cbi8vIE5hdmlnYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIG5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtbmF2Jyk7XG52YXIgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5sZXQgbmF2RWxlbWVudHMgPSBbJy5idG4tbmF2JywgJy5wcmltYXJ5LW1lbnUnXTtcblxubmF2QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmF2RWxlbWVudHNbaV0pLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtb3BlbmVkJyk7XG59XG5cbm5hdkxpbmtzLmZvckVhY2gobmF2TGluayA9PiB7XG4gIG5hdkxpbmsub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hdkVsZW1lbnRzW2ldKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1vcGVuZWQnKTtcbiAgfVxufSk7XG5cblxuXG4vLyBTb3VzLU5hdmlnYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIHN1Yk5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3ViLW1lbnUtYnRuJyk7XG5cbnN1Yk5hdkJ1dHRvbnMuZm9yRWFjaChzdWJOYXZCdXR0b24gPT4ge1xuICBzdWJOYXZCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIFxuICAgIHtcbiAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9IFxuICAgIGVsc2UgXG4gICAge1xuICAgICAgc3ViTmF2QnV0dG9ucy5mb3JFYWNoKHN1Yk5hdkJ1dHRvbiA9PiB7XG4gICAgICAgIHN1Yk5hdkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgc3ViTmF2QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG4vLyBDb250YWN0IEZvcm1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9nZ2xlLWNvbnRhY3QnKTtcbnZhciBjb250YWN0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1ibG9jaycpO1xuY29udGFjdEJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29udGFjdEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdjb250YWN0LW9wZW5lZCcpO1xuICB9XG59KTtcblxudmFyIGNvbnRhY3RCdG4xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RCdG4xJyk7XG52YXIgY29udGFjdEJ0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdEJ0bjInKTtcbnZhciBjb250YWN0QnRuMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnRuMycpO1xuXG5jb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nY29udGFjdF9mb3JtW2dlbmRlcl0nXVwiKS5sZW5ndGgpO1xuXG5jb250YWN0QnRuMS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTFcIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMlwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0zXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gIGNvbnRhY3RCdG4xLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwnKTtcbn1cblxuY29udGFjdEJ0bjIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSdjb250YWN0X2Zvcm1bZ2VuZGVyXSddOmNoZWNrZWRcIikubGVuZ3RoIDwgMSkge3JldHVybiBmYWxzZTt9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX2xuYW1lJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX2ZuYW1lJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX3Bob25lJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdF9mb3JtX2VtYWlsJykudmFsdWUgPT0gXCJcIikge3JldHVybiBmYWxzZTt9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0xXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTJcIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItM1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICBjb250YWN0QnRuMS5jbGFzc0xpc3QuYWRkKCdmdWxsJyk7XG4gIGNvbnRhY3RCdG4yLmNsYXNzTGlzdC5yZW1vdmUoJ2Z1bGwnKTtcbn07XG5cbmNvbnRhY3RCdG4zLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nY29udGFjdF9mb3JtW2N1c3RvbWVyX3R5cGVdJ106Y2hlY2tlZFwiKS5sZW5ndGggPCAxKSB7cmV0dXJuIGZhbHNlO31cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtdGFiLTFcIikuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC10YWItMlwiKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LXRhYi0zXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gIGNvbnRhY3RCdG4yLmNsYXNzTGlzdC5hZGQoJ2Z1bGwnKTtcbn07XG5cblxuXG4vLyBUYWJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciB0YWJzID0gcmVxdWlyZSgndGFicycpO1xudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItY29udGFpbmVyJylcbnRhYnMoY29udGFpbmVyKTtcblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWJsb2NrLTInKSAhPSB1bmRlZmluZWQpIHtcbiAgdmFyIHByb2R1Y3RUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtYmxvY2stMicpXG4gIHRhYnMocHJvZHVjdFRhYnNjb250YWluZXIpO1xufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcnRuZXJzLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgcGFydG5lcnNUYWJzY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcnRuZXJzLWNvbnRhaW5lcicpXG4gIHRhYnMocGFydG5lcnNUYWJzY29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXYtY29udGFpbmVyJykgIT0gdW5kZWZpbmVkKSB7XG4gIHZhciBwYXJ0bmVyc1RhYnNjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2LWNvbnRhaW5lcicpXG4gIHRhYnMocGFydG5lcnNUYWJzY29udGFpbmVyKTtcbn1cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWNvbnRhaW5lcicpICE9IHVuZGVmaW5lZCkge1xuICB2YXIgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zLWNvbnRhaW5lcicpXG4gIHRhYnMob3B0aW9uc0NvbnRhaW5lcik7XG59XG5cblxuXG4vLyBQb3N0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBwb3N0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWRvd24tcG9zdCcpXG5pZiAocG9zdEFycm93ICE9IHVuZGVmaW5lZCkge1xuICBjb25zb2xlLmxvZyhcInRyb3V2w6lcIik7XG4gIHBvc3RBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG59XG5cbiBcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaGVhZGVySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKS5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IG9mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9zdC1jb250ZW50XCIpLm9mZnNldFRvcCAtIGhlYWRlckhlaWdodDtcbiAgc2Nyb2xsKHtcbiAgICB0b3A6IG9mZnNldFRvcCxcbiAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICB9KTtcbn1cblxuXG5cbi8vIFN3aXBlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgU3dpcGVyLCB7IFBhZ2luYXRpb24sIE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXInO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcblxuY29uc3Qgc3dpcGVyTGFzdE5ld3MgPSBuZXcgU3dpcGVyKCcucG9zdHMnLCB7XG4gIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgbG9vcDogdHJ1ZSxcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAxMDI0OiB7XG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIH1cbiAgfVxufSlcblxuY29uc3Qgc3dpcGVyRG9jID0gbmV3IFN3aXBlcignLnByb2R1Y3QtZG9jLWxpc3QnLCB7XG4gIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWRvYy1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1kb2MtYnV0dG9uLXByZXYnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDY0MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgfSxcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICBsb29wOiB0cnVlLFxuICAgIH0sXG4gICAgMTIwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICB9XG4gIH1cbn0pO1xuXG5cbmNvbnN0IHN3aXBlckxhc3RzRXZlbnRzID0gbmV3IFN3aXBlcignLmhvbWUtdGltZWxpbmUtY29udGFpbmVyJywge1xuICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXG4gIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLmNocm9uby1zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5jaHJvbm8tc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICB9LFxuICB9XG59KTtcblxuXG5jb25zdCBjaHJvbm8gPSBuZXcgU3dpcGVyKCcuY2hyb25vLXN3aXBlci0xJywge1xuICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIuY2hyb25vLXBhZ2luYXRpb24tMVwiLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgfSxcbiAgICAxMjAwOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDYwLFxuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICB9LFxuICB9XG59KTtcblxuXG5jb25zdCBzd2lwZXJCbG9ja3NJbmZvczEgPSBuZXcgU3dpcGVyKCcuc2xpZGVyLW1vYmlsZS1jb250YWluZXInLCB7XG4gICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICB9LFxufSk7XG5cblxuY29uc3Qgc3dpcGVyUHJvZHVjdHNDb2xvcmlzID0gbmV3IFN3aXBlcignLnNsaWRlci1jb2xvcmlzJywge1xuICAgIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBsb29wOiB0cnVlLFxufSk7XG5cblxuY29uc3Qgc3dpcGVyUHJvZHVjdHNBY2Nlc3NvcmllcyA9IG5ldyBTd2lwZXIoJy5zbGlkZXItYWNjZXNzb2lyaWVzJywge1xuICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBsb29wOiB0cnVlLFxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkFPUyIsImluaXQiLCJkdXJhdGlvbiIsImRlbGF5IiwiZGVib3VuY2VEZWxheSIsIm9uY2UiLCJtaXJyb3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmRlZmluZWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxZIiwiaGVhZGVyU2l0ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuYXZCdXR0b24iLCJuYXZMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXZFbGVtZW50cyIsIm9uY2xpY2siLCJpIiwibGVuZ3RoIiwidG9nZ2xlIiwiZm9yRWFjaCIsIm5hdkxpbmsiLCJzdWJOYXZCdXR0b25zIiwic3ViTmF2QnV0dG9uIiwiY29udGFpbnMiLCJjb250YWN0QnV0dG9uIiwiY29udGFjdEJsb2NrIiwiYnV0dG9uIiwiY29udGFjdEJ0bjEiLCJjb250YWN0QnRuMiIsImNvbnRhY3RCdG4zIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwidGFicyIsInJlcXVpcmUiLCJjb250YWluZXIiLCJwcm9kdWN0VGFic2NvbnRhaW5lciIsInBhcnRuZXJzVGFic2NvbnRhaW5lciIsIm9wdGlvbnNDb250YWluZXIiLCJwb3N0QXJyb3ciLCJjbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJoZWFkZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRUb3AiLCJzY3JvbGwiLCJ0b3AiLCJiZWhhdmlvciIsIlN3aXBlciIsIlBhZ2luYXRpb24iLCJOYXZpZ2F0aW9uIiwic3dpcGVyTGFzdE5ld3MiLCJzbGlkZXNQZXJWaWV3IiwiY2VudGVyZWRTbGlkZXMiLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwiYnJlYWtwb2ludHMiLCJzd2lwZXJEb2MiLCJtb2R1bGVzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInN3aXBlckxhc3RzRXZlbnRzIiwiY2hyb25vIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwic3dpcGVyQmxvY2tzSW5mb3MxIiwic3dpcGVyUHJvZHVjdHNDb2xvcmlzIiwic3dpcGVyUHJvZHVjdHNBY2Nlc3NvcmllcyJdLCJzb3VyY2VSb290IjoiIn0=