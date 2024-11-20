export const getData = async () => {
  const response = await fetch('./assets/json/gifts.json');
  const giftList = await response.json();
  return giftList;
}