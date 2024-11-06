const inputBox = document.getElementById("input-box");
const list = document.getElementById("list-container");

// remember contents locally on refresh
const store = () => {
	localStorage.setItem("data", list.innerHTML);
}
const show = () => {
	list.innerHTML = localStorage.getItem("data");
}
show();

const addTask = () => {
	if (inputBox.value === '') {
		// creates a popup box in case of an invalid input
		alert("Must input a task");
	}
	else {
		// otherwise add a new list element
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		list.appendChild(li);

		// add check off icon
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";
	store();
}

list.addEventListener("click", (btn) => {
	// mark element as checked
	if (btn.target.tagName === "LI") {
		btn.target.classList.toggle("checked");
		store();
	}
	// remove element entirely
	else if (btn.target.tagName === "SPAN"){
		btn.target.parentElement.remove();
		store();
	}
});

// enter keypress for adding a task
function handleKeyPress(event) {
	if (event.key === "Enter") {
		addTask();
	}
}
inputBox.addEventListener("keypress", handleKeyPress);