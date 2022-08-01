// Light || Dark Theme Colors
let body = document.querySelector('.body');
let switchThemeBtn = document.querySelector('.dark__light');
switchThemeBtn.addEventListener('click', () =>{
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    switchThemeBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="#ffe53b" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 10a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"/>
    <path fill-rule="evenodd" d="M10.202 2.28a.25.25 0 00-.404 0l-.91 1.255a.25.25 0 01-.334.067L7.232 2.79a.25.25 0 00-.374.155l-.36 1.508a.25.25 0 01-.282.189l-1.532-.244a.25.25 0 00-.286.286l.244 1.532a.25.25 0 01-.189.282l-1.508.36a.25.25 0 00-.155.374l.812 1.322a.25.25 0 01-.067.333l-1.256.91a.25.25 0 000 .405l1.256.91a.25.25 0 01.067.334l-.812 1.322a.25.25 0 00.155.374l1.508.36a.25.25 0 01.19.282l-.245 1.532a.25.25 0 00.286.286l1.532-.244a.25.25 0 01.282.189l.36 1.508a.25.25 0 00.374.155l1.322-.812a.25.25 0 01.333.067l.91 1.256a.25.25 0 00.405 0l.91-1.256a.25.25 0 01.334-.067l1.322.812a.25.25 0 00.374-.155l.36-1.508a.25.25 0 01.282-.19l1.532.245a.25.25 0 00.286-.286l-.244-1.532a.25.25 0 01.189-.282l1.508-.36a.25.25 0 00.155-.374l-.812-1.322a.25.25 0 01.067-.333l1.256-.91a.25.25 0 000-.405l-1.256-.91a.25.25 0 01-.067-.334l.812-1.322a.25.25 0 00-.155-.374l-1.508-.36a.25.25 0 01-.19-.282l.245-1.532a.25.25 0 00-.286-.286l-1.532.244a.25.25 0 01-.282-.189l-.36-1.509a.25.25 0 00-.374-.154l-1.322.812a.25.25 0 01-.333-.067l-.91-1.256zM10 4.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" clip-rule="evenodd"/>
    </svg>`;
  }else{
    switchThemeBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="#000000" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.002 8.002 0 1010.586 10.586z"/>
    </svg>`;
  }
});
// --------------------------

// Burger Nav
let burger = document.querySelector('.nav__burger');
let nav = document.querySelector('.main__nav');
let logo = document.querySelector('.main__nav__logo');
let link = document.querySelector('.main__nav__links');
let lang = document.querySelector('.main__nav__lang');
	burger.addEventListener('click', () =>{
		nav.classList.toggle('nav--activ');
		logo.classList.toggle('nav--activ');
		link.classList.toggle('nav--activ');
		lang.classList.toggle('nav--activ');
		modalVideo.classList.remove('animationVideo');
		video.innerHTML = ''
	});
// 


// Image Light/Dark
let logoAltavia = document.querySelector('.logo__altavia');
switchThemeBtn.addEventListener('click', () =>{
	if (body.classList.contains('dark')) {
		logoAltavia.src = logoAltavia.src.replace('altavia-logo', 'altavia-logo-dark');
	}else{
		logoAltavia.src = logoAltavia.src.replace('altavia-logo-dark', 'altavia-logo');
	};
});
let instagram = document.querySelectorAll('.instagram');
let facebook = document.querySelectorAll('.facebook');
let linkedin = document.querySelectorAll('.linkedin');
// function Social(name) {
// 	for (let i = 0; i < name.length; i++) {
// 		if (body.classList.contains('dark')) {
// 			name[i].src = name[i].src.replace('name', 'name-dark');
// 		}else{
// 			name[i].src = name[i].src.replace('name-dark', 'name');
// 		};
// 	}
// }
// switchThemeBtn.addEventListener('click', () =>{
// 	Social(instagram);
// 	Social(facebook);
// 	Social(linkedin);
// });
for (let i = 0; i < instagram.length; i++) {
	switchThemeBtn.addEventListener('click', () =>{
		if (body.classList.contains('dark')) {
			instagram[i].src = instagram[i].src.replace('instagram', 'instagram-dark');
		}else{
			instagram[i].src = instagram[i].src.replace('instagram-dark', 'instagram');
		};
	});
}
for (let i = 0; i < facebook.length; i++) {
	switchThemeBtn.addEventListener('click', () =>{
		if (body.classList.contains('dark')) {
			facebook[i].src = facebook[i].src.replace('facebook', 'facebook-dark');
		}else{
			facebook[i].src = facebook[i].src.replace('facebook-dark', 'facebook');
		};
	});
}
for (let i = 0; i < linkedin.length; i++) {
	switchThemeBtn.addEventListener('click', () =>{
		if (body.classList.contains('dark')) {
			linkedin[i].src = linkedin[i].src.replace('linkedin', 'linkedin-dark');
		}else{
			linkedin[i].src = linkedin[i].src.replace('linkedin-dark', 'linkedin');
		};
	});
}
let clientImg = document.querySelectorAll('.client__img');
for (let i = 0; i < clientImg.length; i++) {
	switchThemeBtn.addEventListener('click', () =>{
		if (body.classList.contains('dark')) {
			clientImg[i].src = clientImg[i].src.replace('light', 'dark');
		}else{
			clientImg[i].src = clientImg[i].src.replace('dark', 'light');
		};
	});
}

// --------------------------

// Video Activation
let btnVideo = document.querySelector('.header__cta');
let modalVideo = document.querySelector('.header__video');
let video = document.querySelector('.video');
let modalVideoClose = document.querySelector('.header__video--close');
btnVideo.addEventListener('click', () =>{
	modalVideo.classList.add('animationVideo');
	video.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5DtBLaS_UJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
});
modalVideoClose.addEventListener('click', () =>{
	modalVideo.classList.remove('animationVideo');
	video.innerHTML = ''
});
// --------------------------

// Anchors Rename
let anchors = document.querySelectorAll('.anchors');
window.addEventListener('resize', () => {
	if (window.innerWidth < 768 || window.innerHeight < 825) {
		anchors[0].href = '#discoverMobile'
		anchors[1].href = '#serviceMobile'
		anchors[2].href = '#clientMobile'
		anchors[3].href = '#headerMobile'
  } else {
		anchors[0].href = '#discover'
		anchors[1].href = '#service'
		anchors[2].href = '#client'
		anchors[3].href = '#header'
  }
});
window.addEventListener('load', () => {
	if (window.innerWidth < 768 || window.innerHeight < 825) {
		anchors[0].href = '#discoverMobile'
		anchors[1].href = '#serviceMobile'
		anchors[2].href = '#clientMobile'
		anchors[3].href = '#headerMobile'
  } else {
		anchors[0].href = '#discover'
		anchors[1].href = '#service'
		anchors[2].href = '#client'
		anchors[3].href = '#header'
  }
});
// --------------------------

var myFullpage = new fullpage('#fullpage', {
	// Navigation
	navigation: true,
	navigationPosition: 'right',
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',
	anchors:['header', 'discover', 'service', 'client', 'footer'],

	// Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: true,
	scrollOverflowMacStyle: false,
	scrollOverflowReset: false,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	// Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	// Design
	controlArrows: true,
	controlArrowsHTML: [
		'<div class="fp-arrow"></div>', 
		'<div class="fp-arrow"></div>'
	],
	verticalCentered: true,
	fixedElements: '#header, .footer',
	// Active Plugin on responsive design
	responsiveWidth: 768,
	responsiveHeight: 825,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

	// Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',
	lazyLoading: true,
	observer: true,
	credits: { enabled: false, label: 'Made with fun', position: 'right'},

	// Events
	beforeLeave: function(origin, destination, direction, trigger){},
	onLeave: function(origin, destination, direction, trigger){},
	afterLoad: function(origin, destination, direction, trigger){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction, trigger){},
	onSlideLeave: function(section, origin, destination, direction, trigger){},
	onScrollOverflow: function(section, slide, position, direction){}
});
