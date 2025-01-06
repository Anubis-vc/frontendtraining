export default function Card ({
	allData
	, data
	, score
	, bestScore
	, imgClicks
	, setData
	, setScore
	, setBestScore
	, setImgClicks
	, setIsGameOn
	, setGameMessage
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

	const resetGame = tempScore => {
		const container = document.querySelector('.container');
		const messageBox = document.querySelector('.game-message');

		container.classList.add('fade-out');
		messageBox.classList.remove('visible');

		setTimeout(() => {
			setBestScore(Math.max(bestScore, tempScore));
			setScore(0);
			setImgClicks(new Set());
			setIsGameOn(false);

			setTimeout(() => {
				container.classList.remove('fade-out');
			}, 50);

			setGameMessage('');
		}, 4000)
	}

	const handleImgClick = e => {
		const id = e.target.id;

		if (imgClicks.has(id)) {
			setGameMessage(`Clicked the same poster twice, game over. \n\nFinal Score: ${score}`);
			resetGame(score);
		}
		else if (score + 1 === 12){ // make sure this is changed if number of posters changes
			setGameMessage(`You win! Successfully clicked all posters`);
			resetGame(score + 1);
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
			/>
		</div>
	);
}