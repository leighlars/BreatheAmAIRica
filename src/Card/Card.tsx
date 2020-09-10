import React from 'react';
import { Link } from 'react-router-dom'

interface CardProps {
  city: any
}

const Card = (props: CardProps) => {
  return (
    <Link
      to={`/${props.city.name}`}
      className="card-link"
      style={{ textDecoration: "none" }}
    >
      <article className="card-container" key={props.city.name}>
        <h2 className="card-header">{props.city.name}</h2>
        <h3 className="card-temp">35&deg;</h3>
        <p className="card-air">AQI</p>
        <p className="card-pollen">🐝</p>
        <p className="card-hazard">🔥</p>
      </article>
    </Link>
  )
}

export default Card






