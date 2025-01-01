const movies = ['Citizen Kane',
	'Casablanca',
	'The Godfather',
	'Gone with the Wind',
	'Lawrence of Arabia',
	'The Wizard of Oz',
	'The Graduate',
	'On the Waterfront',
	"Schindler's List",
	"Singin' in the Rain",
	"It's a Wonderful Life",
	'Sunset Boulevard',
	'The Bridge on the River Kwai',
	'Some Like It Hot',
	'Star Wars',
	'All About Eve',
	'The African Queen',
	'Psycho',
	'Chinatown',
	"One Flew Over the Cuckoo's Nest",
	'The Grapes of Wrath',
	'2001: A Space Odyssey',
	'The Maltese Falcon',
	'Raging Bull',
	'E.T.:  The Extra-Terrestrial',
	'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
	'Bonnie and Clyde',
	'Apocalypse Now',
	'Mr. Smith Goes to Washington',
	'The Treasure of the Sierra Madre',
	'Annie Hall',
	'The Godfather Part II',
	'High Noon',
	'To Kill a Mockingbird',
	'It Happened One Night',
	'Midnight Cowboy',
	'The Best Years of Our Lives',
	'Double Indemnity',
	'Doctor Zhivago',
	'North by Northwest',
	'West Side Story',
	'Rear Window',
	'King Kong',
	'The Birth of a Nation',
	'A Streetcar Named Desire',
	'A Clockwork Orange',
	'Taxi Driver',
	'Jaws',
	'Snow White and the Seven Dwarfs',
	'Butch Cassidy and the Sundance Kid',
	'The Philadelphia Story',
	'From Here to Eternity',
	'Amadeus',
	'All Quiet on the Western Front',
	'The Sound of Music',
	'M*A*S*H',
	'The Third Man',
	'Fantasia',
	'Rebel Without a Cause',
	'Raiders of the Lost Ark',
	'Vertigo',
	'Tootsie',
	'Stagecoach',
	'Close Encounters of the Third Kind',
	'The Silence of the Lambs',
	'Network',
	'The Manchurian Candidate',
	'An American in Paris',
	'Shane',
	'The French Connection',
	'Forrest Gump',
	'Ben-Hur',
	'Wuthering Heights',
	'The Gold Rush',
	'Dances with Wolves',
	'City Lights',
	'American Graffiti',
	'Rocky',
	'The Deer Hunter',
	'The Wild Bunch',
	'Modern Times',
	'Giant',
	'Platoon',
	'Fargo',
	'Duck Soup',
	'Mutiny on the Bounty',
	'Frankenstein',
	'Easy Rider',
	'Patton',
	'The Jazz Singer',
	'My Fair Lady',
	'A Place in the Sun',
	'The Apartment',
	'Goodfellas',
	'Pulp Fiction',
	'The Searchers',
	'Bringing Up Baby',
	'Unforgiven',
	"Guess Who's Coming to Dinner",
	'Yankee Doodle Dandy'];

const getOneMovie = async i => {
	const response = await fetch(
		`http://www.omdbapi.com/?t=${movies[arr[i]]}&apikey=23d68817`
	);

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}
	return response.json();
}

const fetchMovies = async () => {
	let arr = [];
	while (arr.length < 10) {
		num = Math.floor(Math.random() * 100);
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