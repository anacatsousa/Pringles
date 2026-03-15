//NAV

const btn = document.querySelector('.nav__btn');
const menu = document.querySelector('.nav__hidden');
const navSmall = document.querySelector('.nav--small');

btn.addEventListener('click', () => {
	//menu.classList.toggle('open');

	if (menu.classList.contains('open')) {
		menu.style.animation = 'slideOut 0.5s ease';

		navSmall.setAttribute('aria-hidden', 'true');
		setTimeout(() => {
			menu.classList.remove('open');
			menu.style.animation = '';
		}, 500);
	} else {
		menu.classList.add('open');
		menu.style.animation = 'slideIn 0.5s ease';
		navSmall.removeAttribute('aria-hidden');
	}
});

//SLIDES

const slides = document.querySelectorAll('.sliders__container');

function nextSlide(i) {
	const current = document.querySelector('.sliders__container.active');
	const next = slides[i % slides.length];

	if (!current) return;

	next.classList.remove('visited', 'reset');
	next.classList.add('active');
	current.classList.remove('active');
	current.classList.add('visited');

	setTimeout(() => {
		current.classList.remove('visited');
		current.classList.add('reset');
	}, 2000);
}

slides.forEach((slide, index) => {
	const nextImg = slide.querySelector('.sliders__btn--next');
	nextImg.addEventListener('click', () => nextSlide(index + 1));

	const dots = slide.querySelectorAll('.sliders__dot');
	dots.forEach((dot, dotIndex) => {
		dot.addEventListener('click', () => nextSlide(dotIndex));
	});
});
