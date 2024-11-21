const pword = document.getElementById("password");
const message = document.getElementById("alert");
const strength = document.getElementById("strength");

pword.addEventListener("input", () => {
	if (pword.value.length > 0) {
		message.style.display = "block";
	}
	else {
		message.style.display = "none";
	}

	if (pword.value.length === 0) {
		pword.style.borderColor = "#727272";
	}
	else if(pword.value.length > 0 && pword.value.length < 4) {
		strength.innerHTML = "Weak";
		pword.style.borderColor = "#ff5925";
		message.style.color = "#ff5925";
	}
	else if (pword.value.length >= 4 && pword.value.length < 8) {
		strength.innerHTML = "Medium";
		pword.style.borderColor = "yellow";
		message.style.color = "yellow";
	}
	else if (pword.value.length >= 8) {
		strength.innerHTML = "Strong";
		pword.style.borderColor = "#26d730";
		message.style.color = "#26d730";
	}
});