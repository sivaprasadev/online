let swiperPortfolio = new Swiper('.portfolio__container', {
	cssMode: true,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	keyboard: true
});