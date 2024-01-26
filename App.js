import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Movie 1', description: 'Description 1', posterURL: 'url1', rating: 4 },
    { title: 'Movie 2', description: 'Description 2', posterURL: 'url2', rating: 3 },
    // Add more movies as needed
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = (filter) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
        (!filter.rating || movie.rating >= parseInt(filter.rating))
    );
    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie({ title: 'New Movie', description: 'New Description', posterURL: 'newUrl', rating: 5 })}>
        Add Movie
      </button>
    </div>
  );
};

export default App;
