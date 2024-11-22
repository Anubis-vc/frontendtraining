const num = document.getElementById("number");
let counter = 0;
setInterval(() => {
	if (counter == 65) {
		clearInterval();
	}
	else {
		counter += 1;
		num.innerHTML = counter + "%";
	}
}, 30);