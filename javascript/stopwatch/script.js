let time = {hours: 0, minutes: 0, seconds: 0};
let timeDisplay = document.getElementById("timer");
let startButton = document.getElementById("main");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

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
		clearInterval(timer);
	}
	timer = setInterval(stopwawtch, 1000);
}
const stopTimer = () => {
	clearInterval(timer);
}
const resetTimer = () => {
	clearInterval(timer);
	time.hours = time.minutes = time.seconds = 0;
	timeDisplay.innerHTML = "00:00:00"
}

startButton.addEventListener("click", () => {startTimer()});
stopBtn.addEventListener("click", () => {stopTimer()});
resetBtn.addEventListener("click", () => {resetTimer()});