const showTopButton = () => {
	const topButton = document.querySelector('.button_top');
	window.addEventListener('scroll', () => {
		if (window.scrollY >= 300) topButton.classList.add('button_top__active');
		if (window.scrollY < 300) topButton.classList.remove('button_top__active');
	});
	topButton.addEventListener('click', () => {
		window.scrollTo(0, 0);
	});
};
showTopButton();
