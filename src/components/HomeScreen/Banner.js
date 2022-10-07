import React, { useState, useEffect } from 'react';
import './Banner.css';
import axiosClient from '../../config/axios';
import requests from '../../api/requests';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const res = await axiosClient(requests.fetchNetflixOriginals);
      setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]);

      return res;
    };

    getMovie();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        marginBottom: "30px"
      }}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>

        <p className="banner__description">
          {truncate(movie?.overview, 150)}
        </p>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;