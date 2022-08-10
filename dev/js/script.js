// Global Variable - Light || Dark Theme Colors
let body = document.querySelector('.body');
const switchThemeBtn = document.querySelector('#checkbox');
let myThemeActiv = localStorage.getItem('themeColor');
if (myThemeActiv === 'dark-theme') {
	body.classList.add('dark');
	switchThemeBtn.checked = true;
}
if (myThemeActiv === 'light-theme') {
	body.classList.remove('dark');
	switchThemeBtn.checked = false;
}
switchThemeBtn.addEventListener("click", () => {
	document.body.classList.toggle("dark");
	if (body.classList.contains('dark')) {
		localStorage.setItem('themeColor', 'dark-theme');
	}
	if(!body.classList.contains('dark')){
		localStorage.setItem('themeColor', 'light-theme');
	}
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
// -------------------
// Global - End Script
// -------------------
