import React from 'react';
import Poster from "./Poster.jpg";

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <>
      <div className='movie'>
        <div>
          <p>{movie?.Year}</p>
        </div>
        <div>
          <img
            src={movie?.Poster !== "N/A" ? movie?.Poster : Poster}
            alt={movie?.Title}
          />
        </div>
        <div>
          <span>{movie?.Type}</span>
          <h3>{movie?.Title}</h3>
        </div>
      </div>
    </>
  )
}

export default MovieCard;