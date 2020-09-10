import React from 'react';
import { Link } from 'react-router-dom'

import './Card.scss'

interface CardProps {
  name: string
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
        <h3 className="card-temp">35&deg;</h3>
        <p className="card-air">AQI</p>
        <p className="card-pollen">🐝</p>
        <p className="card-hazard">🔥</p>
      </article>
    </Link>
  )
}

export default Card






