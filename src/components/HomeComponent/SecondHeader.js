import React, { useState } from 'react';
import "../Stylesheetshome/SeocondHeader.css"
const SecondHeader = () => {
  // Define an array with paths to your images
  const images = ['./images/SecondPoster/firstimage.jpg', './images/SecondPoster/secondimage.jpg', './images/SecondPoster/thirdimage.jpg'];

  // State to keep track of the index of the current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle changing to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle changing to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='SecondHeader'>
      <div className='imagecontainer'>
        {/* Render the current image */}
        <img src={images[currentImageIndex]} alt='poster' />
        {/* Button to go to the previous image */}
        <div className='nextprev'>
        <button  onClick={prevImage}>Previous</button>
        {/* Button to go to the next image */}
        <button onClick={nextImage}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
