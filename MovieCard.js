import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <div className="movie-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
