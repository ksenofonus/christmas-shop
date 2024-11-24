const timer = () => {
	const targetDate = Date.parse(new Date(2025, 0, 1, 0, 0, 0, 0).toUTCString());
	const nowDate = Date.parse(new Date().toUTCString());
	const dif = targetDate - nowDate;
	const day = document.querySelector('.timer_days');
	const hours = document.querySelector('.timer_hours');
	const minutes = document.querySelector('.timer_minutes');
	const seconds = document.querySelector('.timer_seconds');
	const dayNumber = Math.floor(dif / (1000 * 24 * 60 * 60));
	const hoursNumber = Math.floor(dif / (1000 * 60 * 60)) % 24;
	const minutesNumber = Math.floor(dif / (1000 * 60)) % 60 ;
	const secondsNumber = Math.floor(dif / 1000) % 60;
	seconds.textContent = secondsNumber;
	minutes.textContent = minutesNumber;
	day.textContent = dayNumber;
	hours.textContent = hoursNumber;
};

setInterval(() => timer(), 1000);
