import { getData } from './getGiftsData.js';
import { getRandom } from './getRandom.js';

const gifts = getData();
console.log(gifts);

const giftContainer = document.querySelector('.gifts_content');