import React from 'react';
import { Link } from 'react-router-dom'
import './Card.scss'

interface CardProps {
  name: string, 
  temp: number,
  aqi: number,
  pollen: number,
  fire: number
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Link
      to={`/${props.name}`}
      className="card-link"
      style={{ textDecoration: "none" }}
    >
      <article className="card-container" key={props.name}>
        <h2 className="card-header">{props.name}</h2>
        <h3 className="card-temp">{props.temp}&deg;</h3>
        <p className="card-air">{props.aqi}</p>
        <p className="card-pollen">{props.pollen}</p>
        <p className="card-hazard">{props.fire}</p>
      </article>
    </Link>
  )
}

export default Card






