const controls = new Swiper(".hello-controls", {
	loop: true,
	slidesPerView: 6,
});

const slider = new Swiper(".vote__slider", {
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},

	thumbs: {
		swiper: controls,
	},
});
