import React from 'react';
import { Link } from 'react-router-dom'
import './Card.scss'
import clearDay from '../assets/01d.png'

interface CardProps {
  city: {
    name: string, 
    temp: number,
    aqi: number,
    pollen: number,
    fire: string
  }
}

const Card: React.FC<CardProps> = (props) => {

  const uvIndex = (uvi: number) => {
    if (uvi <= 2) {
     return (
      <h3 className="card-low">
       <b>{uvi}</b>{" "}
      </h3>
     );
    } else if (uvi >= 3 && uvi <= 5) {
     return (
      <h3 className="card-moderate">
       <b>{uvi}</b>
      </h3>
     );
    } else if (uvi === 6 || uvi === 7) {
     return (
      <h3 className="card-high">
       <b>{uvi}</b>
      </h3>
     );
    } else if (uvi >= 8 && uvi <= 10) {
     return (
      <h3 className="card-very-high">
       <b>{uvi}</b>
      </h3>
     );
    } else if (uvi >= 11) {
     return (
      <h3 className="card-extreme">
       <b>{uvi}</b>
      </h3>
     );
    } 
  }

  const aqIndex = (aqi: number) => {
    if (aqi <= 50) {
     return (
      <h3 className="card-low">
       <b>{aqi}</b>
      </h3>
     );
    } else if (aqi >= 51 && aqi <= 100) {
     return (
      <h3 className="card-moderate">
       <b>{aqi}</b>
      </h3>
     );
    } else if (aqi >= 151 && aqi <= 200) {
     return (
      <h3 className="card-high">
       <b>{aqi}</b>
      </h3>
     );
    } else if (aqi >= 201 && aqi <= 300) {
     return (
      <h3 className="card-very-high">
       <b>{aqi}</b>
      </h3>
     );
    } else if (aqi >= 301) {
     return (
      <h3 className="card-extreme">
       <b>{aqi}</b>
      </h3>
     );
    } 
  }


  return (
   <Link
    to={`/${props.city.name}`}
    className="card-link-wrapper"
    style={{ textDecoration: "none" }}
   >
    <article className="card-container" key={props.city.name}>
     <h2 className="card-header">{props.city.name}</h2>
     <div className='card-air-temp'>
      <h3 className="card-temp">{props.city.temp}&deg;F</h3>
      {aqIndex(200)}
      <p className='unit'>AQI</p>
      {uvIndex(2)}
      <p className='unit'>UVI</p>
     </div>
     <img src={clearDay} alt='Sun shining' />
    </article>
   </Link>
  );
}

export default Card






