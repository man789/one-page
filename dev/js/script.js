// Global Variable - Light || Dark Theme Colors
let body = document.querySelector('.body');
const switchThemeBtn = document.querySelector('#checkbox');
// -----------------------------------------
// Logo Altavia - Light || Dark Theme Colors
const logoAltavia = document.querySelectorAll('.logo__altavia');
switchThemeBtn.addEventListener("click", () => {
	document.body.classList.toggle("dark");
	if (body.classList.contains('dark')) {
		for (let a = 0; a < logoAltavia.length; a++) {
			logoAltavia[a].src = logoAltavia[a].src.replace('altavia-logo', 'altavia-logo-dark');
		}	
	}else{
		for (let a = 0; a < logoAltavia.length; a++) {
			logoAltavia[a].src = logoAltavia[a].src.replace('altavia-logo-dark', 'altavia-logo');
		}
	};
});
// ------------------------
// Navigation Burger Toggle
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
// ----------------------
// Active Page Link Style
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
// -------------------------------------------
// Socials Images - Light || Dark Theme Colors
let instagram = document.querySelectorAll('.instagram');
let facebook = document.querySelectorAll('.facebook');
let linkedin = document.querySelectorAll('.linkedin');
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
// const changeIcon = (social) => {
//   for (let i = 0; i < social.length; i++) {
//     switchThemeBtn.addEventListener('click', () => {
//       if (body.classList.contains('dark')) {
//         social[i].src = social[i].src.replace(`${social}`, `${social}-dark`);
//       } else {
//         social[i].src = social[i].src.replace(`${social}-dark`, `${social}`);
//       }
//     });
//   }
// };
// changeIcon(facebook);
// changeIcon(linkedin);
// changeIcon(instagram);

let mail = document.querySelector('.mail');
switchThemeBtn.addEventListener('click', () =>{
	if (body.classList.contains('dark')) {
		mail.src = mail.src.replace('mail', 'mail-white');
	}else{
		mail.src = mail.src.replace('mail-white', 'mail');
	};
});
// -------------------
// Global - End Script
// -------------------
