import React from 'react';
import { Link } from 'react-router-dom'
import './Card.scss'
import clearDay from '../assets/01d.png'
import clearNight from "../assets/01n.png";
import cloudyDay from "../assets/02d.png";
import cloudyNight from "../assets/02n.png";
import lightClouds from "../assets/03d.png";
import rain from "../assets/09d.png";
import sunnyStorms from "../assets/10n.png";
import thunderstorm from "../assets/11d.png";
import snow from "../assets/13d.png";


interface CardProps {
  city: {
    temp: number,
    aqi: number | undefined,
    uvi: number | undefined,
    icon: string
  }
  name: string
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
    } else {
      return (
       <h3 className="card-extreme">
        <b>N/A</b>
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
    else {
      return (<h3 className="card-extreme">
       <b>N/A</b>
      </h3>);
    }
  }

  const temp = (temp: number) => {
   if (temp <= 32) {
    return (
     <h3 className="card-extreme"><b>{temp}</b></h3>
    );
   } else if (temp >= 33 && temp <= 59) {
    return (
     <h3 className="card-moderate"><b>{temp}</b></h3>
    );
   } else if (temp >= 60 && temp <= 80) {
    return (
     <h3 className="card-high"><b>{temp}</b></h3>
    );
   } else if (temp >= 80) {
    return (
     <h3 className="card-very-high"><b>{temp}</b></h3>
    );
   }
  };

  const weatherIcon = (icon: string) => {
    if (icon === '01d') {
      return (<img src={clearDay} alt="Sun shining" />);
    } else if (icon === "01n") {
     return <img src={clearNight} alt="Sun shining" />;
    } else if (icon === "02d") {
     return <img src={cloudyDay} alt="Sun shining" />;
    } else if (icon === "02n") {
     return <img src={cloudyNight} alt="Sun shining" />;
    } else if (icon === "03d") {
     return <img src={lightClouds} alt="Sun shining" />;
    } else if (icon === "09d") {
     return <img src={rain} alt="Sun shining" />;
    } else if (icon === "10d") {
     return <img src={sunnyStorms} alt="Sun shining" />;
    } else if (icon === "11d") {
     return <img src={thunderstorm} alt="Sun shining" />;
    } else if (icon === "13n") {
     return <img src={snow} alt="Sun shining" />;
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
      {temp(props.city.temp)}
      <p className="unit">&deg;F</p>
      {aqIndex(props.city.aqi)}
      <p className="unit">AQI</p>
      {uvIndex(props.city.uvi)}
      <p className="unit">UVI</p>
     </div>
     {weatherIcon(props.city.icon)}
    </article>
   </Link>
  );
}

export default Card






