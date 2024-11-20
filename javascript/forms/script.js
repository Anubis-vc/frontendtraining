const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

const nameCheck = () => {
	const name = document.getElementById("name").value;
	// check to make sure there is name
	if (name.length === 0) {
		nameError.innerHTML = "Invalid name"
		return false;
	}
	// check to make sure there is a valid full name
	else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
		nameError.innerHTML = "Write full name"
		return false;
	}
	// otherwise show valid
	else {
		nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
		return true;
	}
}

const phoneCheck = () => {
	const phone = document.getElementById("phone").value;
	if (!phone.match(/^[0-9]{10}$/)) {
		phoneError.innerHTML = 'Invalid phone'
	}
	else if (phone.length !== 10) {
		phoneError.innerHTML = 'Invalid no. length';
		return false;
	}
	else {
		phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
		return true;
	}
}

const emailCheck = () => {
	const email = document.getElementById("email").value;
	if (email.length === 0) {
		emailError.innerHTML = "Email required";
		return false;
	}
	else if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		emailError.innerHTML = "Invalid Email"
		return false;
	}
	else {
		emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
		return true;
	}
}

const messageCheck = () => {
	const text = document.getElementById("message").value;
	let remaining = 20 - text.length;
	if (remaining > 0) {
		messageError.innerHTML = remaining + " more characters required";
		return false;
	}
	else {
		messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
		return true;
	}
}


const nameField = document.getElementById("name");
nameField.addEventListener("keyup", () => {
	nameCheck();
});
const phoneField = document.getElementById("phone");
phoneField.addEventListener("keyup", () => {
	phoneCheck();
});
const emailField = document.getElementById("email");
emailField.addEventListener("keyup", () => {
	emailCheck();
});
const textField = document.getElementById("message");
textField.addEventListener("keyup", () => {
	messageCheck();
});

const submitField = document.getElementById("submit");
submitField.addEventListener("click", () => {
	if (!nameCheck() || !phoneCheck() || !emailCheck() || !messageCheck()) {
		submitError.style.display = "block";
		submitError.innerHTML = "Please fix error"
		return false;
	}
	else {
		submitError.style.display = "none";
		return true;
	}
});