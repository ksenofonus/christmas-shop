const openMenu = () => {
  burger.classList.add('burger__active');
  menu.classList.add('main-nav__active');
}
const closeMenu = () => {
 burger.classList.remove('burger__active');
 menu.classList.remove('main-nav__active');
}
const toggleMenu = () => {
	burger.classList.toggle('burger__active');
	menu.classList.toggle('main-nav__active');
};

const burger = document.querySelector('.burger');
const menu = document.querySelector('.main-nav')

burger.addEventListener('click', () => {
  toggleMenu();
})
