import React, { useState } from 'react';
import "../Stylesheet/Certificates.css"
const Certificate = () => {
  // Define an array with paths to your images
  const images = ['./images/Certificate/tcs.png', 
  './images/Certificate/Technohacks.png', 
  './images/Certificate/simpli-project-management.jpeg', 
  './images/Certificate/reactjssimpl.jpeg', 
  './images/Certificate/machinelearning.jpeg', 
  './images/Certificate/image-segmantation.jpeg' ];

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

export default Certificate;
