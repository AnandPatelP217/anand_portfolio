import React from 'react';
import "../Stylesheetshome/CardContainer.css"
const Card = ({ name, role, imageUrl }) => (
  <div className="card">
    <div className="content">
      <div className="img">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="cardContent">
        <h3>{name}<br /><span>{role}</span></h3>
      </div>
    </div>
    <ul className="sci">
      <li style={{ '--i': 1 }}>
        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
      </li>
      <li style={{ '--i': 2 }}>
        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
      </li>
      <li style={{ '--i': 3 }}>
        <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
      </li>
    </ul>
  </div>
);

const CardContainer = () => (
  <div className="container">
    <Card name="Luis Molina" role="Web Developer" imageUrl="https://unsplash.it/200/200" />
    <Card name="Someone Else" role="Graphic Designer" imageUrl="https://unsplash.it/200/201" />
  </div>
);

export default CardContainer;
