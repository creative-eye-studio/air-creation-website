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

// Swiper
// ------------------------------------------------------------------
import Swiper, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

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
});


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
  console.log('clicked');
  for (let i = 0; i < navElements.length; i++) {
    document.querySelector(navElements[i]).classList.toggle('active');
  }
}