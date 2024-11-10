const passInput = document.getElementById("password");
const passBtn = document.getElementById("create-pass");
const copyBtn = document.getElementById("copy")
const copyTag = document.getElementById("copy-tag");
const copyDiv = document.getElementById("copied");
const len = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = upperCase.toLowerCase();
const nums = "1234567890";
const specials = "*!$&*~{}[]-";

const generate = () => {
	let password = "";
	password += upperCase[Math.floor(Math.random() * upperCase.length)];
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
	password += nums[Math.floor(Math.random() * nums.length)];
	password += specials[Math.floor(Math.random() * specials.length)];

	while (len > password.length) {
		const rand = Math.floor(Math.random() * 4);
		if (rand === 0) {
			password += upperCase[Math.floor(Math.random() * upperCase.length)];
		}
		else if (rand === 1) {
			password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
		}
		else if (rand === 2) {
			password += nums[Math.floor(Math.random() * nums.length)];
		}
		else {
			password += specials[Math.floor(Math.random() * specials.length)];
		}
	}
	passInput.value = password;
}

const copyPass = () => {
	if (passInput.value) {
		navigator.clipboard.writeText(passInput.value).then(
			function () {
				copyBtn.style.display = "none";
				copyTag.innerHTML = "Copied!"
				copyTag.style.color = "var(--Green)"
			}
		).catch(
			function () {
				alert("Error");
			}
		)
	}
}

passBtn.addEventListener("click", () => {
	generate();
	copyBtn.style.display = "block";
	copyTag.innerHTML = "Copy"
	copyTag.style.color = "var(--OffWhite)"
})
copyDiv.addEventListener("click", () => {
	copyPass();
})