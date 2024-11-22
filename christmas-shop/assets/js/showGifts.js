
import { mixList } from './createList.js';
import { getData } from './getGiftsData.js';
import { createCard } from './createCard.js';

const gifts = await getData();
export const giftContainer = document.querySelector('.gifts_content');
export const fullList = mixList(gifts);

export const showCard = (number = gifts.length, list = fullList) => {
	for (let i = 0; i < number; i++) {
		giftContainer.append(createCard(list[i]));
	}
};
