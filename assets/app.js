/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/web/app.scss';

// start the Stimulus application
import './bootstrap';


// SWUP
// ------------------------------------------------------------------
import Swup from 'swup';
const swup = new Swup();


// OPEN LAYERS
// ------------------------------------------------------------------
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

if (document.querySelector(".partners-map") != undefined) {
  const aubLonLat = [4.389863, 44.620909];
  const aubWebMercator = fromLonLat(aubLonLat);
  
  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: aubWebMercator,
      zoom: 15,
    })
  })
    
}


// AOS
// ------------------------------------------------------------------
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


// Parallax
// ------------------------------------------------------------------
import 'parallax-image';


// Header
// ------------------------------------------------------------------
if (document.querySelector('.header-base') != undefined) {
  window.addEventListener('scroll', function(){
    var scrollPosition = window.scrollY;
    var headerSite = document.getElementsByClassName('header-base')[0];

    if (scrollPosition >= 50) {
      headerSite.classList.add('scrolled');
    } else {
      headerSite.classList.remove('scrolled');
    }
  })
}



// Navigation
// ------------------------------------------------------------------
var navButton = document.querySelector('.toggle-nav');
let navElements = ['.btn-nav', '.primary-menu'];

navButton.onclick = function() {
  for (let i = 0; i < navElements.length; i++) {
    document.querySelector(navElements[i]).classList.toggle('active');
  }
  document.querySelector('.header-site').classList.toggle('nav-opened');
}


// Contact Form
// ------------------------------------------------------------------
var contactButton = document.querySelector('.toggle-contact');
var contactBlock = document.querySelector('.contact-block');
contactButton.onclick = function() {
  contactBlock.classList.toggle('active');
}


// Tabs
// ------------------------------------------------------------------
var tabs = require('tabs');
var container = document.querySelector('.tab-container')
tabs(container);

if (document.querySelector('.product-block-2') != undefined) {
  var productTabscontainer = document.querySelector('.product-block-2')
  tabs(productTabscontainer);
}

if (document.querySelector('.partners-container') != undefined) {
  var partnersTabscontainer = document.querySelector('.partners-container')
  tabs(partnersTabscontainer);
}



// Swiper
// ------------------------------------------------------------------
import Swiper, { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

if (screen.width >= 1024) {

  document.querySelector('.main-menu').classList.add('swiper-wrapper');
  const btnsMainNav = document.querySelectorAll('.main-btn-bloc');
  for(const btn of btnsMainNav){
    btn.classList.add('swiper-slide');
  }

  const swiperPrimaryNav = new Swiper('.primary-menu', {
    modules: [Navigation],
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-nav-button-next',
      prevEl: '.swiper-nav-button-prev',
    },
  });

}

const swiperDoc = new Swiper('.product-doc-list', {
  modules: [Navigation],
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-doc-button-next',
    prevEl: '.swiper-doc-button-prev',
  },
  breakpoints: {
    1024: {
      centeredSlides: false,
      slidesPerView: 2,
    },
    1200: {
      centeredSlides: true,
      slidesPerView: 3,
    }
  }
});

const swiperLastsEvents = new Swiper('.home-timeline-container', {
  modules: [Navigation],
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: '.chrono-swiper-button-next',
    prevEl: '.chrono-swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 60,
      slidesPerView: 3,
    },
  }
});


const swiperBlocksInfos1 = new Swiper('.slider-mobile-container', {
    modules: [Pagination],
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


const swiperLastsPosts = new Swiper('.posts', {
    modules: [Pagination],
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 30,
      }
    }
})


const swiperInnovBlocks = new Swiper('.innov-container', {
    modules: [Pagination],
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      }
    }
});


const swiperProductsColoris = new Swiper('.slider-coloris', {
    modules: [Navigation],
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


const swiperProductsAccessories = new Swiper('.slider-accessoiries', {
    modules: [Pagination],
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


if (screen.width >= 1200 && swiperInnovBlocks != undefined) {
  swiperInnovBlocks.destroy();
}