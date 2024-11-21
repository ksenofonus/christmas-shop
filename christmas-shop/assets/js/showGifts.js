
import { mixList } from './createList.js';
import { getData } from './getGiftsData.js';
import { createCard } from './createCard.js';

const gifts = await getData();
export const showCard = (number=gifts.length) => {
  mixList(gifts);
	const giftContainer = document.querySelector('.gifts_content');
	for (let i = 0; i < number; i++) {
	  giftContainer.append(createCard(gifts[i]));
	}
};
