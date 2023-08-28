import { useEffect, useState } from 'react';
import SearchIcon from "../search.svg";
import MovieCard from './MovieCard';
import './MovieApp.css';

// 43b4fdab

// creating a static varibale

const API_URL = "http://www.omdbapi.com?apikey=43b4fdab";

//........This object used as a static data to map initially......//

// const movie1 = {
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg",
//   "Title": "The Amazing Spiderman 2 Webb Cut",
//   "Type": "movie",
//   "Year": "2021",
//   "imdbID": "tt18351128",
// }

const MovieApp = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Aync means asynchronous data which means it takes some time to fetch these movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    // now once we get the response we have to get the data from it
    const data = await response.json();
    setMovies(data?.Search);
  }

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="App">
      <div className='app'>
        <h1>MovieWorld</h1>
        <div className='search'>
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
          />
          <img
            src={SearchIcon}
            alt='search'
            onClick={() => {
              searchMovies(searchTerm)
            }}
          />
        </div>
        {
          movies?.length > 0 ?
            <div className='container'>
              {
                movies?.map((movie) => {
                  return (
                    < MovieCard movie={movie} />
                  )
                })
              }
            </div>
            :
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
        }
      </div>
    </div>
  );
};

export default MovieApp;