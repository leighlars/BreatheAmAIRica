import React from 'react';
import { Link } from 'react-router-dom'
import './Card.scss'

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
      <h3 className="card-air"><b>{props.city.aqi}</b> </h3> 
      <p>AQI</p>
     </div>
     <p className="card-pollen">
      <b>Pollen</b> {props.city.pollen}
     </p>
     <p className="card-hazard">
      <b>Pollution/Smog</b> {props.city.fire}
     </p>
    </article>
   </Link>
  );
}

export default Card






