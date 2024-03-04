/* variables */
const slides = document.querySelectorAll('.slider__item');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const auto = true;
const intervalTime = 5500;
let slideInterval;

/* script para avançar a imagem */
const nextSlide = function () {
	/* buscar a classe */
	const active = document.querySelector('.active');
	/* retirada da classe active */
	active.classList.remove('active');

	if (active.nextElementSibling) {
		active.nextElementSibling.classList.add('active');
	} else {
		slides[0].classList.add('active');
	}
	setTimeout(function () {
		active.classList.remove('active');
	});
};

/* script para mostrar a imagem anterior */
const prevSlide = function () {
	/* buscar a classe */
	const active = document.querySelector('.active');
	/* retirada da classe active */
	active.classList.remove('active');
	if (active.previousElementSibling) {
		active.previousElementSibling.classList.add('active');
	} else {
		slides[slides.length - 1].classList.add('active');
	}
	setTimeout(function () {
		active.classList.remove('active');
	});
};

/* event listeners */
prevBtn.addEventListener('click', function () {
	prevSlide();
	if (auto) {
		clearInterval(slideInterval);
		slideInterval = setInterval(prevSlide, intervalTime);
	}
});

nextBtn.addEventListener('click', function () {
	nextSlide();
	if (auto) {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	}
});

/* criar para correr em modo automático */
if (auto) {
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide, intervalTime);
}
