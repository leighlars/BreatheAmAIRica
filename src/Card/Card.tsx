import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'
import clearDay from '../assets/01d.png'
import clearNight from '../assets/01n.png'
import cloudyDay from '../assets/02d.png'
import cloudyNight from '../assets/02n.png'
import lightClouds from '../assets/03d.png'
import doubleCloud from '../assets/04d.png'
import rain from '../assets/09d.png'
import daySunnyStorm from '../assets/10d.png'
import sunnyStorms from '../assets/10n.png'
import thunderstorm from '../assets/11d.png'
import snow from '../assets/13d.png'
import mist from '../assets/50d.png'

export interface CardProps {
	temp: number,
	aqi: any,
	uvi: any,
	icon: string
  name: string
}

const Card: React.FC<CardProps> = (props) => {

  const uvIndex = (uvi: number) => {
    if (uvi <= 2) {
     return (
      <h3 className="card-low">
       <b>{uvi}</b>{" "}
      </h3>
     )
    } else if (uvi >= 3 && uvi <= 5) {
     return (
      <h3 className="card-moderate">
       <b>{uvi}</b>
      </h3>
     )
    } else if (uvi === 6 || uvi === 7) {
     return (
      <h3 className="card-high">
       <b>{uvi}</b>
      </h3>
     )
    } else if (uvi >= 8 && uvi <= 10) {
     return (
      <h3 className="card-very-high">
       <b>{uvi}</b>
      </h3>
     )
    } else if (uvi >= 11) {
     return (
      <h3 className="card-extreme">
       <b>{uvi}</b>
      </h3>
     )
    } else {
      return (
       <h3 className="card-extreme">
        <b>N/A</b>
       </h3>
      )
    }
  }

  const aqIndex = (aqi: number) => {
    if (aqi <= 50) {
     return (
      <h3 className="card-low">
       <b>{aqi}</b>
      </h3>
     )
    } else if (aqi >= 51 && aqi <= 100) {
     return (
      <h3 className="card-moderate">
       <b>{aqi}</b>
      </h3>
     )
    } else if (aqi >= 151 && aqi <= 200) {
     return (
      <h3 className="card-high">
       <b>{aqi}</b>
      </h3>
     )
    } else if (aqi >= 201 && aqi <= 300) {
     return (
      <h3 className="card-very-high">
       <b>{aqi}</b>
      </h3>
     )
    } else if (aqi >= 301) {
     return (
      <h3 className="card-extreme">
       <b>{aqi}</b>
      </h3>
     )
    } 
    else {
      return (<h3 className="card-extreme">
       <b>N/A</b>
      </h3>)
    }
  }

  const temp = (temp: number) => {
   if (temp <= 32) {
    return (
     <h3 className="card-extreme"><b>{temp}</b></h3>
    )
   } else if (temp >= 33 && temp <= 59) {
    return (
     <h3 className="card-moderate"><b>{temp}</b></h3>
    )
   } else if (temp >= 60 && temp <= 80) {
    return (
     <h3 className="card-high"><b>{temp}</b></h3>
    )
   } else if (temp >= 80) {
    return (
     <h3 className="card-very-high"><b>{temp}</b></h3>
    )
   }
  }

  const weatherIcon = (icon: string) => {
    if (icon === "01d") {
      return (<img src={clearDay} alt="Clear Day Icon" />)
    } else if (icon === "01n") {
     return <img src={clearNight} alt="Clear Night Icon" />
    } else if (icon === "02d") {
     return <img src={cloudyDay} alt="Cloudy Day Icon" />
    } else if (icon === "02n") {
     return <img src={cloudyNight} alt="Cloudy Night Icon" />
    } else if (icon === "03d") {
     return <img src={lightClouds} alt="Light Clouds Icon" />
    } else if (icon === "04d") {
     return <img src={doubleCloud} alt="Double Clouds Icon" />
    } else if (icon === "09d") {
     return <img src={rain} alt="Rain Icon" />
    } else if (icon === "10d") {
     return <img src={daySunnyStorm} alt="Day Storm Icon" />
    } else if (icon === "10n") {
     return <img src={sunnyStorms} alt="Night Storm Icon" />
    } else if (icon === "11d") {
     return <img src={thunderstorm} alt="Thunderstorm Icon" />
    } else if (icon === "13n") {
     return <img src={snow} alt="Snow Icon" />
    } else if (icon === "50n" || icon === "50d") {
     return <img src={mist} alt="Mist Icon" />
    }
  }

  return (
   <Link
    to={`/${props.name}`}
    className="card-link-wrapper"
    style={{ textDecoration: "none" }}
   >
    <article className="card-container" key={props.name}>
     <h2 className="card-header">{props.name}</h2>
     <div className="card-air-temp">
      {temp(props.temp)}
      <p className="unit">&deg;F</p>
      {/* {aqIndex(props.aqi)}
      <p className="unit">AQI</p> */}
      {uvIndex(props.uvi)}
      <p className="unit">UVI</p>
     </div>
     {weatherIcon(props.icon)}
    </article>
   </Link>
  )
}

export default Card