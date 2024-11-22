export const getData = async () => {
	const response = await fetch('./assets/json/gifts.json');
	const giftData = await response.json();
	return giftData;
};
