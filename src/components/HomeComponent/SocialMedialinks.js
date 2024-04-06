import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import "../Stylesheetshome/SocialMedialinks.css"
const SocialMedialinks = () => {
  return (
    <>
    <div className='containerrring'>
    <div style={{ textAlign: 'center' }}>
    <div> <h1>FIND ME ON</h1>
    <p>
    Feel free to <div className='fontcolorchange'>connect </div>with me</p></div>
      <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
        <AiFillGithub style={{ color:'green',fontSize: '2em', margin: '0 10px' }} />
      </a>
      <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
        <AiOutlineTwitter style={{color:'green', fontSize: '2em', margin: '0 10px' }} />
      </a>
      <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn style={{color:'green', fontSize: '2em', margin: '0 10px' }} />
      </a>
      <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram style={{color:'green', fontSize: '2em', margin: '0 10px' }} />
      </a>
    </div>
    </div>
    </>
  );
}

export default SocialMedialinks;
