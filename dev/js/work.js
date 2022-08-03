// Swiper JS Work Top 
const swiperWorkTop = new Swiper('.swiperWorkTop', {
  // Optional parameters
  direction: 'horizontal',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-top',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3,
});
// Swiper JS Work Bottom
const swiperWorkBottom = new Swiper('.swiperWorkBottom', {
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

// Arrow Light || Dark
let arrowPrev = document.querySelectorAll('.swiper-button-prev');
let arrowNext = document.querySelectorAll('.swiper-button-next');
for (let i = 0; i < arrowPrev.length; i++) {
  switchThemeBtn.addEventListener('click', () =>{
    arrowPrev[i].classList.toggle('arrow-dark');
    arrowNext[i].classList.toggle('arrow-dark');
  });
};
// Arrow Display Access
function DisplayArrow(){
  for (let index = 0; index < arrowPrev.length; index++) {
    if (arrowPrev[index].classList.contains('swiper-button-disabled')) {
      arrowPrev[index].style.display = 'none'
    }else{
      arrowPrev[index].style.display = 'flex'
    }
    if (arrowNext[index].classList.contains('swiper-button-disabled')) {
      arrowNext[index].style.display = 'none'
    }else{
      arrowNext[index].style.display = 'flex'
    }
  }
}
window.addEventListener('click', () =>{
  DisplayArrow();
});
window.addEventListener('load', () =>{
  DisplayArrow();
});