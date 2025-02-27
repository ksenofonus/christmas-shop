import { fullList, giftContainer } from './getGiftsData.js';
import { showCard, showModal } from './showGifts.js';

const removeChildren = () => (giftContainer.innerHTML = '');

export const filterGifts = (category) => {
	if (category !== 'all') {
		const filterList = fullList.filter(
			(item) => item.category.toLowerCase().split(' ').join('-') == category,
		);
		removeChildren();
		showCard(filterList.length, filterList);
		showModal(filterList);
	} else {
		removeChildren();
		showCard();
		showModal();
	}
	
};
