const controls = new Swiper(".hello__controls", {
	slidesPerView: 3,
});

const slider = new Swiper(".hello__slider", {
	loop: true,
	scrollbar: {
		el: ".swiper-scrollbar",
	},
	thumbs: {
		swiper: controls,
	},
});


const slider2 = new Swiper(".products__slider", {
	loop: true,
	scrollbar: {
		el: ".swiper-scrollbar",
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});


