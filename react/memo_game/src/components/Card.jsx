export default function Card ({
	allData
	, data
	, score
	, imgClicks
	, setData
	, setScore
	, setImgClicks
	, setIsGameOn
}) {

	const shuffleArray = arr => {
		let currIndex = arr.length;
		while (currIndex > 0) {
			let randomIndex = Math.floor(Math.random() * currIndex);
			currIndex--;

			[arr[currIndex], arr[randomIndex]] = [arr[randomIndex], arr[currIndex]];
		}
		return arr;
	}

	const resetGame = () => {
		setScore(0);
		setImgClicks(new Set());
		setIsGameOn(false);
	}

	const handleImgClick = e => {
		const id = e.target.id;
		setIsGameOn(true);

		if (imgClicks.has(id)) {
			alert(`Clicked the same poster twice. Score: ${score}`);
			resetGame();
		}
		else if (score + 1 === 10){
			alert(`You win, successfully clicked all posters`);
			resetGame();
		}
		else {
			setImgClicks(imgClicks.add(id));
			setScore(score + 1);
			setData(shuffleArray(allData));
		}
	}

	return (
		<div className="card" onClick={e => handleImgClick(e)}>
			<img
				id={data.imdbID}
				className="poster"
				src={data.Poster}
				alt={data.Title}
				style={{ width: '10rem', height: '10rem' }}
			/>
			<figcaption className="movie-title">{data.Title}</figcaption>
		</div>
	);
}