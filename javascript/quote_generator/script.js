// const resultData = fetch('http://127.0.0.1:5000/calculate').then(response => response.json());
let resultData = null;
fetch('http://127.0.0.1:5000/calculate')
	.then(response => response.json())
	.then(data => {
		resultData = data;
		// console.log(data)
		// document.getElementById('quote').innerHTML = data.value[0]
	})
	.catch(error => console.error('Error: ', error))
const newQuote = document.getElementById("new-quote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const share = document.getElementById("share-box");

const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=10&cat=movies';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '06d877ef6emsh5e56b3fbf60f753p1b3093jsn36450c7e931f',
		'x-rapidapi-host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: {}
};

async function fetchQuote() {
	try {
		const index = Math.floor(Math.random() * 100)
		quote.innerHTML = resultData["value"][index][0]
		author.innerHTML = resultData["value"][index][1]
	} catch (error) {
		console.error(error);
	}
}

newQuote.addEventListener("click", () => {
	fetchQuote();
})

// Twitter share link
share.addEventListener("click", () => {
	if (quote.innerHTML != '') {
		window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "--- by " + author.innerHTML, 
			"Tweet Window", "width=600, height=300");
	}
});