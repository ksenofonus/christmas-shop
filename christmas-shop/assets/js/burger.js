const toggleMenu = () => {
	burger.classList.toggle('burger__active');
	menu.classList.toggle('main-nav__active');
  document.body.classList.toggle('no-scroll');
};

const burger = document.querySelector('.burger');
const menu = document.querySelector('.main-nav');
const menuItems = document.querySelectorAll('.main-menu_item');

burger.addEventListener('click', () => {
	toggleMenu();
});

menuItems.forEach((item) => {
	item.addEventListener('click', () => {
		toggleMenu();
	});
});
