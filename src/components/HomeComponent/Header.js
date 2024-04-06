import React from 'react';
import "../Stylesheetshome/Header.css";
import Type from './Type';
import Lottie from 'react-lottie';
import animationData from '../../animations/striper1.json'; // Import your JSON animation file
const Header = () => {
  return (
    <> 
      <div>
        <div className="two-column-container">
          <div className="text-column">
            <h2>Hi There!</h2>
            <h1>I'M <div className='fontcolorchange'>ANAND PATEL</div></h1>
            <div className='changecolor'>
              <Type />
            </div>
          </div>
          <div className="image-column">
          <div className='image-center'>
            <Lottie 
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
              }}
            />
             </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
