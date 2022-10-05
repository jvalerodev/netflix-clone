import React from 'react';
import './Banner.css';

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}>
      <div className="banner__content">
        <h1 className="banner__title">Movie name</h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>

        <p className="banner__description">
          {truncate('This is a test description This is a test description This is a test description This is a test descriptionThis is a test description This is a test descriptionThis is a test description This is a test description This is a test description This is a test description This is a test description This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description', 150)}
        </p>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;