import { mixList } from './createList.js';

const getData = async () => {
	const response = await fetch('./assets/json/gifts.json');
	const giftData = await response.json();
	return giftData;
};

const gifts = await getData();
export const giftContainer = document.querySelector('.gifts_content');
export const fullList = mixList(gifts);
