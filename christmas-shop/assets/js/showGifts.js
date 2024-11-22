
import { giftContainer, fullList } from './getGiftsData.js'
import { createCard, createModal } from './createCard.js';
import { createBack, removeBack } from './back.js';


export const showCard = (number = fullList.length, list = fullList) => {
	for (let i = 0; i < number; i++) {
		giftContainer.append(createCard(list[i]));
	}
};

export const showModal = (list = fullList) => {
	const gifts = document.querySelectorAll('.gifts_item');
	console.log(gifts)
	gifts.forEach((item, index) => {
		item.addEventListener('click', () => {
			document.body.append(createModal(list[index]));
			createBack();
		})
	})
};
