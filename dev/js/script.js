// Light || Dark Theme Colors
let body = document.querySelector('.body');
const switchThemeBtn = document.querySelector('#checkbox'); // Button Switch heme
const logoAltavia = document.querySelector('.logo__altavia'); // Logo Light/Dark
const logoAltaviaContact = document.querySelector('.logo__contact');
switchThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
	if (body.classList.contains('dark')) {
		logoAltavia.src = logoAltavia.src.replace('altavia-logo', 'altavia-logo-dark');
		logoAltaviaContact.src = logoAltaviaContact.src.replace('altavia-logo', 'altavia-logo-dark');
	}else{
		logoAltavia.src = logoAltavia.src.replace('altavia-logo-dark', 'altavia-logo');
		logoAltaviaContact.src = logoAltaviaContact.src.replace('altavia-logo-dark', 'altavia-logo');
	};
});
// Burger Nav
let burger = document.querySelector('.nav__burger');
let nav = document.querySelector('.main__nav');
let logo = document.querySelector('.main__nav__logo');
let link = document.querySelector('.main__nav__links');
let lang = document.querySelector('.main__nav__lang');
let links = document.querySelectorAll('.main__nav__link');
let navSocial = document.querySelector('.main__nav__social');
burger.addEventListener('click', () =>{
	nav.classList.toggle('nav--activ');
	logo.classList.toggle('nav--activ');
	link.classList.toggle('nav--activ');
	lang.classList.toggle('nav--activ');
	navSocial.classList.toggle('nav--activ');
	burger.classList.toggle('nav--activ');
	modalVideo.classList.remove('animationVideo');
	video.innerHTML = '';
});
for (let i = 0; i < links.length; i++) {
	links[i].classList.remove('link--activ');
	if ((body.classList.contains('case') || (body.classList.contains('works'))) ) {
		links[0].classList.add('link--activ');
	}
	if ((body.classList.contains('page-service')) ) {
		links[1].classList.add('link--activ');
	}
	if ((body.classList.contains('team')) ) {
		links[2].classList.add('link--activ');
	}
	if ((body.classList.contains('blog')) ) {
		links[3].classList.add('link--activ');
	}
	if ((body.classList.contains('contact')) ) {
		links[4].classList.add('link--activ');
	}
}
let instagram = document.querySelectorAll('.instagram');
let facebook = document.querySelectorAll('.facebook');
let linkedin = document.querySelectorAll('.linkedin');
let mail = document.querySelector('.mail');
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
switchThemeBtn.addEventListener('click', () =>{
	if (body.classList.contains('dark')) {
		mail.src = mail.src.replace('mail', 'mail-white');
	}else{
		mail.src = mail.src.replace('mail-white', 'mail');
	};
});

