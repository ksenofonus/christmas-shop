const targetDate = Date.parse(new Date(Date.UTC(2025, 0, 1, 0, 0, 0, 0)));
const nowDate = Date.parse(new Date().toUTCString()); 
const dif = targetDate - nowDate; //разница в миллисекундах
console.log(targetDate, nowDate);
const day = document.querySelector('.timer_days');
const hours = document.querySelector('.timer_hours');
const minutes = document.querySelector('.timer_minutes');
const seconds = document.querySelector('.timer_seconds');




//1 день = 1000 миллисекунд * 60 секунд * 60 минут * 24 часа
const resultDays = dif / (1000 * 24 * 60 * 60);
const getDays = resultDays;
//1 час = 1/24 дня
const getHours = (resultDays - Math.floor(getDays)) * 24;
//1 минута = 1/60 часа
const getMinutes = (getHours - Math.floor(getHours)) * 60;
//1 секунда = 1/60 минуты
const getSecounds = (getMinutes - Math.floor(getMinutes)) * 60;

console.log(
	dif,
	Math.floor(getDays),
	Math.floor(getHours),
	Math.floor(getMinutes),
	Math.round(getSecounds),
);

