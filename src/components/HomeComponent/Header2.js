import React from 'react';
import "../Stylesheetshome/Header2.css";
import Lottie from 'react-lottie';
import animationData from '../../animations/striper5.json'; // Import your JSON animation file
import SocialMedialinks from './SocialMedialinks';
const Header2 = () => {
  return (
    <> 
      <div>
        <div className="two-column-container2">
          <div className="text-column2">
           
            <h1>LET ME <div className='fontcolorchange'>INTRODUCE </div>MYSELF</h1>
            <p> I have experience with programming languages JavaScript and C++.</p>
            <p>  <div className='fontcolorchange'>I love playing around with Web and figuring out how they work.</div></p> 
            <p>My field of Interest's are building new  <div className='fontcolorchange'>Web Technologies , Innovative software solutions</div> and also in areas related to <div className='fontcolorchange'>Machine Learning Model </div></p> 
            <p>I am currently diving deep into the MERN stack. That stands for <div className='fontcolorchange'>MongoDB, Express.js, React.js, Node.js  </div> </p>
          </div>
          <div className="image-column2">
          <div className='image-center2'>
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
                  
<SocialMedialinks/>


      </div>
    </>
  );
}

export default Header2;
