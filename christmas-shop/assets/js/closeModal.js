import { removeBack } from './back.js';

export const closeModal = () => {
	const closeModal = document.querySelector('.modal_close');
  const modal = document.querySelector('.modal');
  const back = document.querySelector('.back');
	closeModal.addEventListener('click', () => {
    modal.remove();
    removeBack();
  });
  back.addEventListener('click', () => {
    modal.remove();
		removeBack();
  })
};
