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
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
		quote.innerHTML = result.content
		author.innerHTML = result.author
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