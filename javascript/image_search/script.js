const accessKey = "" // please use your own access key here

const form = document.getElementById("search");
const box = document.getElementById("search-box");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("results");
const showMore = document.getElementById("show-more");

let keyword = "";
let page = 1;

async function searchImage() {
	if (page === 1) {
		searchResults.innerHTML = "";
	}
	keyword = box.value;
	const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
	&client_id=${accessKey}&per_page=12`;

	const response = await fetch(url);
	const data = await response.json();
	const results = data.results;

	console.log(results);

	results.map((result) => {
		const image = document.createElement("img");
		const imageLink = document.createElement("a");
		image.src = result.urls.small;
		imageLink.href = result.links.html;
		imageLink.target = "_blank";
		imageLink.appendChild(image);
		searchResults.appendChild(imageLink);
	})

	showMore.style.display = "block";
}

form.addEventListener("submit", event => {
	event.preventDefault();
	page =1;
	searchImage();
})

showMore.addEventListener("click", () => {
	page++;
	searchImage();
})