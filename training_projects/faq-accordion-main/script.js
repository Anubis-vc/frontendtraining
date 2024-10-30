const btn = document.querySelectorAll(".accordian-header");

btn.forEach((button) => {
	button.addEventListener("click", function () {
		this.classList.toggle("active");
		const desc = this.nextElementSibling;
		const plus = this.querySelector(".plus");
		const minus = this.querySelector(".minus");

		if (desc.style.maxHeight) {
			desc.style.maxHeight = null;
			plus.style.display = "block";
			minus.style.display = "none";
		}
		else {
			desc.style.maxHeight = desc.scrollHeight + "px";
			plus.style.display = "none";
			minus.style.display = "block";
		}
	});
});