const toLeft = () => {
	slider.style.left = -sliderCount * 135 + 'px';
};
const toRight = () => {
	slider.style.left = sliderCount * 135 + 'px';
};

const rightBtn = document.querySelector('.slider_button__right');
const leftBtn = document.querySelector('.slider_button__left');
const slider = document.querySelector('.slider_content');
const sliderItems = document.querySelectorAll('.slider_item');
const container = document.querySelector('.slider-wrapper');
let sliderCount = 0;

const widthCalc = () => {
  let sliderWidth = 0;
  sliderItems.forEach(element => {
    sliderWidth += element.offsetWidth;
  });
  let visibleWidth = container.offsetWidth;
  console.log(sliderWidth, visibleWidth);
}

widthCalc();

rightBtn.addEventListener('click', () => {
  sliderCount += 1;
  if (sliderCount <= 4) {
    toLeft();
  }
});
leftBtn.addEventListener('click', () => toRight() );