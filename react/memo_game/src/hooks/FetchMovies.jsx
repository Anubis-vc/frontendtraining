import React, { useEffect, useState } from 'react';

const MoviePosterSearch = () => {
  const [posters, setPosters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosters = async () => {
      try {
        const response = await fetch(
          'https://api.movieposterdb.com/search?q=matrix',
          {
            method: 'GET',
            headers: {
              'Authorization': '448|FXQa4KbRAlvBfUAAHQuDSdlUfvOsdRL7mOYPx9yr',
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPosters(data.results); // Adjust `data.results` based on the actual response structure.
      } catch (err) {
        setError(err.message);
        console.error('Error fetching posters:', err);
      }
    };

    fetchPosters();
  }, []);

  return (
    <div>
      <h1>Movie Posters</h1>
      {error && <p>Error: {error}</p>}
      {posters.length > 0 ? (
        <ul>
          {posters.map((poster, index) => (
            <li key={index}>
              <img src={poster.imageUrl} alt={poster.title} width="200" />
              <p>{poster.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MoviePosterSearch;