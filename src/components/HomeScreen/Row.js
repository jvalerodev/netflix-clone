import React, { useEffect, useState } from 'react';
import axiosClient from '../../config/axios';
import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await axiosClient(fetchUrl);
      setMovies(res.data.results);

      return res;
    };

    getMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(movie => (
          (isLargeRow && movie.poster_path || !isLargeRow && movie.backdrop_path) && (
            < img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default Row;