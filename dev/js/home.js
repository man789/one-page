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

// Image Light/Dark
let logoAltavia = document.querySelector('.logo__altavia');
switchThemeBtn.addEventListener('click', () =>{
	if (body.classList.contains('dark')) {
		logoAltavia.src = logoAltavia.src.replace('altavia-logo', 'altavia-logo-dark');
	}else{
		logoAltavia.src = logoAltavia.src.replace('altavia-logo-dark', 'altavia-logo');
	};
});
// Light || Dark Theme Colors
let headerCta = document.querySelector('.header--cta');
switchThemeBtn.addEventListener('click', () =>{
	if (body.classList.contains('dark')) {
		headerCta.src = headerCta.src.replace('header-cta', 'header-cta-white');
	}else{
		headerCta.src = headerCta.src.replace('header-cta-white', 'header-cta');
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
let anchorImg = document.querySelectorAll('.anchor--img');
for (let i = 0; i < anchorImg.length; i++) {
	switchThemeBtn.addEventListener('click', () =>{
		if (body.classList.contains('dark')) {
			anchorImg[i].src = anchorImg[i].src.replace('page-down', 'page-down-white');
		}else{
			anchorImg[i].src = anchorImg[i].src.replace('page-down-white', 'page-down');
		};
	});
}

