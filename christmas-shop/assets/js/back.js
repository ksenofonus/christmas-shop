const back = document.createElement('div');
back.className = 'back';
const createBack = () => {
  document.body.append(back);
}

const removeBack = () => {
  back.remove();
}

export { createBack, removeBack }