const hamburger = document.querySelector('.navbar__mobile');
const mobileMenu = document.querySelector('.navbar__menu');

hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});
