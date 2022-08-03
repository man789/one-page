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
	video.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/5DtBLaS_UJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
});
modalVideoClose.addEventListener('click', () =>{
	modalVideo.classList.remove('animationVideo');
	video.innerHTML = '';
});

// Anchors Rename
let anchors = document.querySelectorAll('.anchors');
window.addEventListener('resize', () => {
	if (window.innerWidth < 768 || window.innerHeight < 825) {
		anchors[0].href = '#discoverMobile';
		anchors[1].href = '#serviceMobile';
		anchors[2].href = '#clientMobile';
		anchors[3].href = '#headerMobile';
  } else {
		anchors[0].href = '#discover';
		anchors[1].href = '#service';
		anchors[2].href = '#client';
		anchors[3].href = '#header';
  }
});
window.addEventListener('load', () => {
	if (window.innerWidth < 768 || window.innerHeight < 825) {
		anchors[0].href = '#discoverMobile';
		anchors[1].href = '#serviceMobile';
		anchors[2].href = '#clientMobile';
		anchors[3].href = '#headerMobile';
  } else {
		anchors[0].href = '#discover';
		anchors[1].href = '#service';
		anchors[2].href = '#client';
		anchors[3].href = '#header';
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

