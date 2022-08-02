// Swiper JS
const swiper = new Swiper('.swiperCase', {
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3,
});

let arrowPrev = document.querySelector('.swiper-button-prev');
let arrowNext = document.querySelector('.swiper-button-next');

window.addEventListener('click', () =>{
  if (arrowPrev.classList.contains('swiper-button-disabled')) {
    arrowPrev.style.display = 'none'
  }else{
    arrowPrev.style.display = 'flex'
  }
  if (arrowNext.classList.contains('swiper-button-disabled')) {
    arrowNext.style.display = 'none'
  }else{
    arrowNext.style.display = 'flex'
  }
});
window.addEventListener('load', () =>{
  if (arrowPrev.classList.contains('swiper-button-disabled')) {
    arrowPrev.style.display = 'none'
  }else{
    arrowPrev.style.display = 'flex'
  }
  if (arrowNext.classList.contains('swiper-button-disabled')) {
    arrowNext.style.display = 'none'
  }else{
    arrowNext.style.display = 'flex'
  }
});

