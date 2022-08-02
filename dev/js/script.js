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

