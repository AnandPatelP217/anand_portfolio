import React from 'react';
import "./stylesheetabout/about.css";
import Lottie from 'react-lottie';
import animationData from '../../animations/striper2.json'; // Import your JSON animation file

const About = () => {
  return (
    <> 
      <div>
       
        <div className="two-column-container2">
          <div className="text-column2">
           
            <h1>About<div className='fontcolorchange'>Me</div></h1>
            <p> Hi Everyone,My Name is <div className='fontcolorchange'>Anand Patel </div>from Bhopal,Madhya Pradesh, India.</p>
            <p> I am a 3rd year student pursuing a <div className='fontcolorchange'>Bachelor's degree in Computer Science </div>at SISTEC-R Ratibad.</p> 
            <p> I love technology and I'm always eager to learn more and improve my skills in this field.</p>
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
        
                  
      </div>
      <div className='main-containerr'><hr/>
      <p> "Crafting the web is like painting on an infinite canvas, where every line of code adds a stroke of creativity to the masterpiece of the digital age."<hr/>
      <div className='fontcolorchange'>---Anand Patel---</div><hr/></p></div>
    </>
  );
}

export default About;
