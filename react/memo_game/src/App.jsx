import { useState, useEffect } from 'react'
import './App.css'
// import Card from './components/Card'
import fetchMovies from './hooks/RandomMovies';

function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  // const [imgClicks, setImgClicks] = useState(new Set());
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
      // setImgClicks(new Set());
    }
  }, [isGameOn]);

  const listItems = data.map(d => 
    <li key={d.imdbID}>
      <img src={d.Poster} alt={d.Title} />
    </li>
  );

  return (
    <div id="container">
      <h1>Score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>Score increase</button>
      <button onClick={() => setIsGameOn(!isGameOn)}>{`Game is ${isGameOn ? 'On' : 'Off'}`}</button>
      <div className="card-containter">
        {isLoading ? 
          (<div className="loading">Loading movies...</div>) 
          : (<ul>{listItems}</ul>)}
      </div>
    </div>
  );
}

export default App