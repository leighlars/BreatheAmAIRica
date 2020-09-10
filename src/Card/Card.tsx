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
      className="card-link"
      style={{ textDecoration: "none" }}
    >
      <article className="card-container" key={props.city.name}>
        <h2 className="card-header">{props.city.name}</h2>
        <h3 className="card-temp">{props.city.temp}&deg;</h3>
        <p className="card-air">{props.city.aqi}</p>
        <p className="card-pollen">{props.city.pollen}</p>
        <p className="card-hazard">{props.city.fire}</p>
      </article>
    </Link>
  )
}

export default Card






