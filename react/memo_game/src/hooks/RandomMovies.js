const movies = [
	["Citizen Kane", "1941"],
	["Casablanca", "1942"],
	["The Godfather", "1972"],
	["Gone with the Wind", "1939"],
	["Lawrence of Arabia", "1962"],
	["The Wizard of Oz", "1939"],
	["The Graduate", "1967"],
	["On the Waterfront", "1954"],
	["Schindler's List", "1993"],
	["Singin' in the Rain", "1952"],
	["It's a Wonderful Life", "1946"],
	["Sunset Boulevard", "1950"],
	["The Bridge on the River Kwai", "1957"],
	["Some Like It Hot", "1959"],
	["Star Wars", "1977"],
	["All About Eve", "1950"],
	["The African Queen", "1951"],
	["Psycho", "1960"], 
	["Chinatown", "1974"],
	["One Flew Over the Cuckoo's Nest", "1975"],
	["The Grapes of Wrath", "1940"],
	["2001: A Space Odyssey", "1968"],
	["The Maltese Falcon", "1941"],
	["Raging Bull", "1980"],
	["E.T.:  The Extra-Terrestrial", "1982"],
	["Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", "1964"],
	["Bonnie and Clyde", "1967"],
	["Apocalypse Now", "1979"],
	["Mr. Smith Goes to Washington", "1939"],
	["The Treasure of the Sierra Madre", "1948"],
	["Annie Hall", "1977"],
	["The Godfather Part II", "1974"],
	["High Noon", "1952"],
	["To Kill a Mockingbird", "1962"],
	["It Happened One Night", "1934"],
	["Midnight Cowboy", "1969"],
	["The Best Years of Our Lives", "1946"],
	["Double Indemnity", "1944"],
	["Doctor Zhivago", "1965"],
	["North by Northwest", "1959"],
	["West Side Story", "1961"],
	["Rear Window", "1954"],
	["King Kong", "1933"],
	["The Birth of a Nation", "1915"],
	["A Streetcar Named Desire", "1951"],
	["A Clockwork Orange", "1971"],
	["Taxi Driver", "1976"],
	["Jaws", "1975"],
	["Snow White and the Seven Dwarfs", "1937"],
	["Butch Cassidy and the Sundance Kid", "1969"],
	["The Philadelphia Story", "1940"],
	["From Here to Eternity", "1953"],
	["Amadeus", "1984"],
	["All Quiet on the Western Front", "1930"],
	["The Sound of Music", "1965"],
	["M*A*S*H", "1970"],
	["The Third Man", "1949"],
	["Fantasia", "1940"],
	["Rebel Without a Cause", "1955"],
	["Raiders of the Lost Ark", "1981"],
	["Vertigo", "1958"],
	["Tootsie", "1982"],
	["Stagecoach", "1939"],
	["Close Encounters of the Third Kind", "1977"],
	["The Silence of the Lambs", "1991"],
	["Network", "1976"],
	["The Manchurian Candidate", "1962"],
	["An American in Paris", "1951"],
	["Shane", "1953"],
	["The French Connection", "1971"],
	["Forrest Gump", "1994"],
	["Ben-Hur", "1959"],
	["Wuthering Heights", "1939"],
	["The Gold Rush", "1925"],
	["Dances with Wolves", "1990"],
	["City Lights", "1931"],
	["American Graffiti", "1973"],
	["Rocky", "1976"],
	["The Deer Hunter", "1978"],
	["The Wild Bunch", "1969"],
	["Modern Times", "1936"],
	["Giant", "1956"],
	["Platoon", "1986"],
	["Fargo", "1996"],
	["Duck Soup", "1933"],
	["Mutiny on the Bounty", "1935"],
	["Frankenstein", "1931"],
	["Easy Rider", "1969"],
	["Patton", "1970"],
	["The Jazz Singer", "1927"],
	["My Fair Lady", "1964"],
	["A Place in the Sun", "1951"],
	["The Apartment", "1960"],
	["Goodfellas", "1990"],
	["Pulp Fiction", "1994"],
	["The Searchers", "1956"],
	["Bringing Up Baby", "1938"],
	["Unforgiven", "1992"],
	["Guess Who's Coming to Dinner", "1967"],
	["Yankee Doodle Dandy", "1942"]
];

const getOneMovie = async (movieData) => {
	const [title, year] = movieData;
	const KEY = import.meta.env.VITE_OMDB_API_KEY;
	const response = await fetch(
		`https://www.omdbapi.com/?t=${title}&y=${year}&apikey=${KEY}`
	);

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}
	return response.json();
}

const fetchMovies = async () => {
	let arr = [];
	while (arr.length < 12) { // change this number to change number of movies
		const num = Math.floor(Math.random() * 100);
		if (arr.indexOf(num) === -1) arr.push(num);
	}

	try {
		const promiseArray = arr.map(index => 
            getOneMovie(movies[index])
        );
		return await Promise.all(promiseArray);
	}
	catch (error){
		throw error;
	}
};

export default fetchMovies;