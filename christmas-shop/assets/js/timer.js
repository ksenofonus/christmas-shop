const targetDate = Date.parse(new Date(Date.UTC(2024, 11, 31, 23, 59, 59)));
let timerid = null;
const day = document.querySelector('.timer_days');
const hours = document.querySelector('.timer_hours');
const minutes = document.querySelector('.timer_minutes');
const seconds = document.querySelector('.timer_seconds');

const timer = () => {
	const nowDate = Date.parse(new Date());
	const dif = targetDate - nowDate;
	if (dif === 0)
		targetDate = Date.parse(new Date(2026, 0, 1, 0, 0, 0, 0));

	const dayNumber = Math.floor(dif / (1000 * 24 * 60 * 60));
	const hoursNumber = Math.floor(dif / (1000 * 60 * 60)) % 24;
	const minutesNumber = Math.floor(dif / (1000 * 60)) % 60;
	const secondsNumber = Math.floor(dif / 1000) % 60;
	seconds.textContent = secondsNumber;
	minutes.textContent = minutesNumber;
	day.textContent = dayNumber;
	hours.textContent = hoursNumber;
};
timer();

timerid = setInterval(() => timer(), 1000);
