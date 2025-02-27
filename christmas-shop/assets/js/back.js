const back = document.createElement('div');
back.className = 'back';
const createBack = () => {
  document.body.append(back);
  document.body.classList.add('no-scroll');
}

const removeBack = () => {
  back.remove();
  document.body.classList.remove('no-scroll');
}

export { createBack, removeBack }