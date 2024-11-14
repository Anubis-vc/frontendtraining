successBtn = document.getElementsByClassName("success");
errorBtn = document.getElementsByClassName("error");
invalidBtn = document.getElementsByClassName("invalid");

let toastBox = document.getElementById('toast-box');

const showToast = msg => {
	let toast = document.createElement("div");

	if (msg.includes("Error")) {
		toast.classList.add("error");
	}
	else if (msg.includes("Invalid")) {
		toast.classList.add("invalid");
	}
	else {
		toast.classList.add("success")
	}

	toast.classList.add('toast');
	toast.innerHTML = msg;
	toastBox.appendChild(toast);

	setTimeout(() => {
		toast.remove();
	}, 5150);
}

successBtn[0].addEventListener("click", () => {
	showToast("Successfully Submitted");
});
errorBtn[0].addEventListener("click", () => {
	showToast("Fix Error")
});
invalidBtn[0].addEventListener("click", () => {
	showToast("Invalid input, try again")
});