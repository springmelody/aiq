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

const cross = document.querySelector('.cross');
const crossTop = cross.querySelector('.cross__top');
const crossMiddle = cross.querySelector('.cross__middle');
const crossBottom = cross.querySelector('.cross__bottom');
const menu = document.querySelector('.menu');

const activateMenu = () => {
	crossTop.classList.toggle('cross__top--click');
	crossMiddle.classList.toggle('cross__middle--click');
	crossBottom.classList.toggle('cross__bottom--click');
	menu.classList.toggle('menu--open')
}

cross.addEventListener('click', () => {
	activateMenu();
});



document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function(e) {
		e.preventDefault();
		let href = this.getAttribute('href').substring(1);
		const scrollTarget = document.getElementById(href);

		//const topOffset = document.querySelector('.scrollto').offsetHeight;
		const topOffset = 0;
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});
