const apiKey = 'd2366210ec2099a21190bd28a0f014bb';
const wthr = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';

const searchBox = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const icon = document.querySelector(".icon");

async function checkWeather(city) {
	const response = await fetch(wthr + city + `&appID=${apiKey}`);

	if (response.status != 200) {
		document.querySelector(".weather").style.display = "none";
		const curr = document.querySelector(".error");
		if (response.status == 404) {
			curr.innerHTML = "Invalid city name";
		}
		else {
			curr.innerHTML = "Invalid";
		}
		curr.style.display = "block";
	}
	else {
		document.querySelector(".error").style.display = "none";
		document.querySelector(".weather").style.display = "block";

		let data = await response.json();

		document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°F";
		document.querySelector(".wind").innerHTML = data.wind.speed + " mph";
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

		if (data.weather[0].main == "Clouds") {
			icon.src = "./images/clouds.png";
		}
		else if (data.weather[0].main == "Clear") {
			icon.src = "./images/clear.png";
		}
		else if (data.weather[0].main == "Rain") {
			icon.src = "./images/rain.png";
		}
		else if (data.weather[0].main == "Snow") {
			icon.src = "./images/snow.png";
		}
		else if (data.weather[0].main == "Drizzle") {
			icon.src = "./images/drizzle.png";
		}
		else if (data.weather[0].main == "Mist") {
			icon.src = "./images/mist.png";
		}
	}
}

function handleKeyPress(event) {
	if (event.key === "Enter") {
		checkWeather(searchBox.value);
	}
}
searchBox.addEventListener("keypress", handleKeyPress);
btn.addEventListener("click", () => {
	checkWeather(searchBox.value);
});