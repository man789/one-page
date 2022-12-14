// Light || Dark Theme Colors
let headerCta = document.querySelector('.header--cta');
switchThemeBtn.addEventListener('click', () =>{
	if (body.classList.contains('dark')) {
		headerCta.src = headerCta.src.replace('header-cta', 'header-cta-white');
	}else{
		headerCta.src = headerCta.src.replace('header-cta-white', 'header-cta');
	};
});
let clientImg = document.querySelectorAll('.client__img');
for (let i = 0; i < clientImg.length; i++) {
	switchThemeBtn.addEventListener('click', () =>{
		if (body.classList.contains('dark')) {
			clientImg[i].src = clientImg[i].src.replace('light', 'dark');
		}else{
			clientImg[i].src = clientImg[i].src.replace('dark', 'light');
		}
	})
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
};