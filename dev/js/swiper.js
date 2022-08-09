// Swiper - Page Work - Top
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
// ---------------------------
// Swiper - Page Work - Bottom
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
// ---------------------------
// Swiper - Page Case - Header
const swiperHeader = new Swiper('.swiperHeader', {
  // Optional parameters
  direction: 'horizontal',
  loop : true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-header-button-next',
    prevEl: '.swiper-header-button-prev',
  },
});
// ------------------------------------------
// Swiper - Page Case - Visible on Full Width
const swiperCase = new Swiper('.swiperCase', {
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
// -----------------------------------------------
// Swiper - Page Case - Visible on Responsive Only
const swiperCaseB = new Swiper('.swiperCaseB', {
  // Optional parameters
  direction: 'horizontal',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-case2',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
});
// ------------------------------
// Swiper - Page Service - Header
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
// ----------------------------------------------------------
// Swiper - Page Service - Similar Case Visible on Full Width
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
// ---------------------------------------------------------------
// Swiper - Page Service - Similar Case Visible on Responsive Only
const swiperServiceCase2 = new Swiper('.swiperServiceCase2', {
  // Optional parameters
  direction: 'horizontal',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-case2',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
});
// ------------------------------------
// Swiper - Arrow - Light || Dark Theme
let arrowPrev = document.querySelectorAll('.swiper-button-prev');
let arrowNext = document.querySelectorAll('.swiper-button-next');
for (let i = 0; i < arrowPrev.length; i++) {
  switchThemeBtn.addEventListener('click', () =>{
    arrowPrev[i].classList.toggle('arrow-dark');
    arrowNext[i].classList.toggle('arrow-dark');
  });
};
// ----------------------
// Swiper - Arrow Display
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
// -------------------
// Swiper - End Script
// -------------------