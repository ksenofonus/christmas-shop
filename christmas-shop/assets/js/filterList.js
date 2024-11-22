import { fullList, giftContainer } from './getGiftsData.js';
import { showCard } from './showGifts.js';

const removeChildren = () => (giftContainer.innerHTML = '');

export const filterGifts = (category) => {
	if (category !== 'all') {
		const filterList = fullList.filter(
			(item) => item.category.toLowerCase().split(' ').join('-') == category,
		);
		removeChildren();
		showCard(filterList.length, filterList);
	} else {
		removeChildren();
		showCard();
	}
};
