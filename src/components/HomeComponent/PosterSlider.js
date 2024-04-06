import React, { useState, useEffect } from 'react';
import '../Stylesheetshome/posterslider.css';

const PosterSlider = () => {
  const [posterIndex, setPosterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosterIndex(prevIndex => (prevIndex + 1) % posters.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setPosterIndex(index);
  };

  const posters = [
    './images/cards/1.png',
    './images/cards/2.png',
    './images/cards/3.png',
    './images/cards/3.png',
    // Add more poster images as needed
  ];

  return (
    <div className="poster-slider">
      <img src={posters[posterIndex]} alt={`Poster ${posterIndex + 1}`} />

      <div className="poster-thumbnails">
        {posters.map((poster, index) => (
          <img
            key={index}
            src={poster}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PosterSlider;
