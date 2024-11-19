const rightBtn = document.querySelector('.slider_button__right');
const leftBtn = document.querySelector('.slider_button__left');
const slider = document.querySelector('.slider_content');
const container = document.querySelector('.slider-wrapper');
let moveCount = 0;

const stepNumber = () => {
	let stepNumber;
	const windowWidth = window.visualViewport.width;
	if (windowWidth >= 768) stepNumber = 3;
	if (windowWidth >= 380 && windowWidth < 768) stepNumber = 6;
	return stepNumber;
};
const stepCalc = () => {
	const sliderWidth = slider.scrollWidth;
	const visibleWidth = container.offsetWidth;
	const step = (sliderWidth - visibleWidth) / stepNumber();
	return step;
};

const toLeft = () => {
	slider.style.left = -moveCount * stepCalc() + 'px';
};

const toRight = () => {
	slider.style.left = moveCount * stepCalc() + 'px';
};

const disableBtn = (btn) => {
	btn.classList.add('slider_button__disabled');
	btn.setAttribute('disabled', 'true');
};

const enableBtn = (btn) => {
	if (btn.classList.contains('slider_button__disabled')) {
		btn.classList.remove('slider_button__disabled');
		btn.removeAttribute('disabled', 'true');
	}
};

rightBtn.addEventListener('click', () => {
	moveCount += 1;
	enableBtn(leftBtn);
	if (moveCount <= stepNumber()) toLeft();
	if (moveCount === stepNumber()) disableBtn(rightBtn);
});

leftBtn.addEventListener('click', () => {
	moveCount -= 1;
	enableBtn(rightBtn);
	if (moveCount === 0) disableBtn(leftBtn);
	if (moveCount >= 0) toLeft();
});
