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


// Header
// ------------------------------------------------------------------
window.addEventListener('scroll', function(){
  var scrollPosition = window.scrollY;
  var headerSite = document.getElementsByClassName('header-site')[0];

  if (scrollPosition >= 50) {
    headerSite.classList.add('scrolled');
  } else {
    headerSite.classList.remove('scrolled');
  }
})


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