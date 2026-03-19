//NAV

const btn = document.querySelector('.nav__btn');
const menu = document.querySelector('.nav__hidden');
const navSmall = document.querySelector('.nav--small');

btn.addEventListener('click', () => {
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

function nextSlide(i, trigger, dotIndex) {
	const current = document.querySelector('.sliders__container.active');
	const next = slides[i % slides.length];

	if (!current) return;

	next.classList.remove('visited', 'reset');
	next.classList.add('active');
	next.removeAttribute('inert');
	current.classList.remove('active');
	current.classList.add('visited');
	current.setAttribute('inert', '');

	// Foca no mesmo tipo de elemento no novo slide
	if (trigger === 'next') {
		next.querySelector('.sliders__btn--next').focus();
	} else if (trigger === 'dot') {
		next.querySelectorAll('.sliders__dot')[dotIndex].focus();
	}

	setTimeout(() => {
		current.classList.remove('visited');
		current.classList.add('reset');
	}, 2000);
}

slides.forEach((slide, index) => {
	const nextBtn = slide.querySelector('.sliders__btn--next');
	nextBtn.addEventListener('click', () => nextSlide(index + 1, 'next'));

	const dots = slide.querySelectorAll('.sliders__dot');
	dots.forEach((dot, dotIndex) => {
		dot.addEventListener('click', () => nextSlide(dotIndex, 'dot', dotIndex));
	});
});
