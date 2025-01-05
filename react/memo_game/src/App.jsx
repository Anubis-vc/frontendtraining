import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import fetchMovies from './hooks/RandomMovies';
import LoadingSkeleton from './components/LoadingSkeleton';

function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [imgClicks, setImgClicks] = useState(new Set());
  const [isGameOn, setIsGameOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isGameOn) {
      setIsLoading(true);
      fetchMovies()
        .then(movies => {
          setData(movies)
          setIsLoading(false);
        })
        .catch(error => {
          console.error(`Failed to fetch movies: ${error}`)
          setIsLoading(false);
        });
    }
    return () => {
      setData([]);
      setScore(0);
      setImgClicks(new Set());
    }
  }, [isGameOn]);

  const cardDisplay = data.map(d => 
      <Card
        key={d.imdbID}
        data={d}
        allData={data}
        score={score}
        bestScore={bestScore}
        imgClicks={imgClicks}
        setData={setData}
        setScore={setScore}
        setBestScore={setBestScore}
        setImgClicks={setImgClicks}
        setIsGameOn={setIsGameOn}
      />
    );

  return (
    <div id="container">
      <div className="score-container">
        <h1>Score: {score}</h1>
        <h3>Best Score: {bestScore}</h3>
      </div>
      {!isGameOn ? 
        <button 
          onClick={() => setIsGameOn(!isGameOn)}>
            This game fetches 12 posters from the <br/>
            American Film Institute's top 100 movies of all time.<br/><br/>
            Click each poster only once to win.<br/><br/>
            Click to turn game on.
        </button>: 
        null}
      {isLoading ? <LoadingSkeleton /> : <div className="card-container">{cardDisplay}</div>}
    </div>
  );
}

export default App;