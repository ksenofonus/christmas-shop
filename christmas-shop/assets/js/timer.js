const timer = () => {
	const targetDate = Date.parse(new Date(2025, 0, 1, 0, 0, 0, 0).toUTCString());
	const nowDate = Date.parse(new Date().toUTCString());
	const dif = targetDate - nowDate;
	const day = document.querySelector('.timer_days');
	const hours = document.querySelector('.timer_hours');
	const minutes = document.querySelector('.timer_minutes');
	const seconds = document.querySelector('.timer_seconds');

	const dayNumber = dif / (1000 * 24 * 60 * 60);
	const hoursNumber = (dayNumber - Math.floor(dayNumber)) * 24;
	const minutesNumber = (hoursNumber - Math.floor(hoursNumber)) * 60;
	const secondsNumber = (minutesNumber - Math.floor(minutesNumber)) * 60;
	if (Math.round(secondsNumber) === 60) {
		seconds.textContent = '0';
		minutes.textContent = Math.floor(minutesNumber) + 1;
	} else {
		seconds.textContent = Math.round(secondsNumber);
		minutes.textContent = Math.floor(minutesNumber);
	}
	day.textContent = Math.floor(dayNumber);
	hours.textContent = Math.floor(hoursNumber);
};

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => timer(), 1000);
} )
