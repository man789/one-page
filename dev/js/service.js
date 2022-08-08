const swiperService = new Swiper('.swiperService', {
  // Optional parameters
  direction: 'horizontal',
  loop : true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-header-button-next',
    prevEl: '.swiper-header-button-prev',
  },
});
// Swiper JS Case 
const swiperServiceCase = new Swiper('.swiperServiceCase', {
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
  slidesPerView: 1,
  breakpoints: {
    1366: {
      slidesPerView: 3,
    },
    1028: {
      slidesPerView: 2,
    },
  }
});

let arrowPrev = document.querySelector('.swiper-button-prev');
let arrowNext = document.querySelector('.swiper-button-next');
function DisplayArrow(){
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
}
window.addEventListener('click', () =>{
  DisplayArrow();
});
window.addEventListener('load', () =>{
  DisplayArrow();
});
// Arrow Light || Dark
switchThemeBtn.addEventListener('click', () =>{
  arrowPrev.classList.toggle('arrow-dark');
  arrowNext.classList.toggle('arrow-dark');
});