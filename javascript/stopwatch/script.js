let time = {hours: 0, minutes: 0, seconds: 0};
let timeDisplay = document.getElementById("timer");
let startButton = document.getElementById("main");
let timer = null;

const stopwawtch = () => {
	time.seconds++;
	if (time.seconds === 60) {
		time.seconds = 0;
		time.minutes++;

		if (time.minutes === 60) {
			time.minutes = 0;
			time.hours++;
		}
	}

	const h = time.hours < 10 ? "0" + time.hours: time.hours;
	const m = time.minutes < 10 ? "0" + time.minutes: time.minutes;
	const s = time.seconds < 10 ? "0" + time.seconds: time.seconds;

	timeDisplay.innerHTML = h + ":" + m + ":" + s;
}

const startTimer = () => {
	if (timer !== null) {
		clearInterval(timer)
	}
	setInterval(stopwawtch, 1000);
}

startButton.addEventListener("click", () => {
	console.log("hit");
	startTimer();
})