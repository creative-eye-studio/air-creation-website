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


// AOS
// ------------------------------------------------------------------
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



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
var navLinks = document.querySelectorAll('a');
let navElements = ['.btn-nav', '.primary-menu'];

navButton.onclick = function() {
  for (let i = 0; i < navElements.length; i++) {
    document.querySelector(navElements[i]).classList.toggle('active');
  }
  document.querySelector('body').classList.toggle('nav-opened');
}

navLinks.forEach(navLink => {
  navLink.onclick = function () {
    for (let i = 0; i < navElements.length; i++) {
      document.querySelector(navElements[i]).classList.remove('active');
    }
    document.querySelector('body').classList.remove('nav-opened');
  }
});



// Sous-Navigation
// ------------------------------------------------------------------
var subNavButtons = document.querySelectorAll('.sub-menu-btn');

subNavButtons.forEach(subNavButton => {
  subNavButton.onclick = function () {
    if (subNavButton.classList.contains('active')) 
    {
      subNavButton.classList.remove('active');
    } 
    else 
    {
      subNavButtons.forEach(subNavButton => {
        subNavButton.classList.remove('active');
      });
      subNavButton.classList.add('active');
    }
  }
});




// Contact Form
// ------------------------------------------------------------------
var contactButton = document.querySelectorAll('.toggle-contact');
var contactBlock = document.querySelector('.contact-block');
contactButton.forEach(button => {
  button.onclick = function() {
    contactBlock.classList.toggle('active');
    document.querySelector('body').classList.toggle('contact-opened');
  }
});





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

if (document.querySelector('.sav-container') != undefined) {
  var partnersTabscontainer = document.querySelector('.sav-container')
  tabs(partnersTabscontainer);
}




// Post
// ------------------------------------------------------------------
var postArrow = document.querySelector('.scroll-down-post')
if (postArrow != undefined) {
  console.log("trouvé");
  postArrow.addEventListener('click', clickHandler);
}

 
function clickHandler(e) {
  e.preventDefault();
  const headerHeight = document.querySelector("header").offsetHeight;
  const offsetTop = document.querySelector("#post-content").offsetTop - headerHeight;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}



// Swiper
// ------------------------------------------------------------------
import Swiper, { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

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


const chrono1 = new Swiper('.chrono-swiper-1', {
  modules: [Pagination],
  spaceBetween: 30,
  pagination: {
    el: ".chrono-pagination-1",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1200: {
      spaceBetween: 60,
      slidesPerView: 3,
    },
  }
});


const chrono2 = new Swiper('.chrono-swiper-2', {
  modules: [Pagination],
  spaceBetween: 30,
  pagination: {
    el: ".chrono-pagination-2",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1200: {
      spaceBetween: 60,
      slidesPerView: 3,
    },
  }
});


const chrono3 = new Swiper('.chrono-swiper-3', {
  modules: [Pagination],
  spaceBetween: 30,
  pagination: {
    el: ".chrono-pagination-3",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
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


const swiperProductsColoris = new Swiper('.slider-coloris', {
    modules: [Navigation],
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
});


const swiperProductsAccessories = new Swiper('.slider-accessoiries', {
    modules: [Pagination],
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
});


if (screen.width >= 1200 && swiperInnovBlocks != undefined) {
  swiperInnovBlocks.destroy();
}

  
