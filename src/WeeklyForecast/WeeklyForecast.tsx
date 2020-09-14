import React from 'react'
import clearDay from "../assets/01d.png";
import clearNight from "../assets/01n.png";
import cloudyDay from "../assets/02d.png";
import cloudyNight from "../assets/02n.png";
import lightClouds from "../assets/03d.png";
import doubleCloud from "../assets/04d.png";
import rain from "../assets/09d.png";
import daySunnyStorm from "../assets/10d.png";
import sunnyStorms from "../assets/10n.png";
import thunderstorm from "../assets/11d.png";
import snow from "../assets/13d.png";
import mist from "../assets/50d.png";

import './WeeklyForecast.scss'

import { kelvinToFahren, degToDirection } from '../helpers/conversions'

const WeeklyForecast = (props: any) => {

  const temp = (temp: number) => {
    const convertTemp = kelvinToFahren(temp);
    if (convertTemp <= 32) {
      return (
      <h3 className="card-extreme">
        <b>{convertTemp}</b>
      </h3>
      );
    } else if (convertTemp >= 33 && convertTemp <= 59) {
      return (
      <h3 className="card-moderate">
        <b>{convertTemp}</b>
      </h3>
      );
    } else if (convertTemp >= 60 && convertTemp <= 80) {
      return (
      <h3 className="card-high">
        <b>{convertTemp}</b>
      </h3>
      );
    } else if (convertTemp >= 80) {
      return (
      <h3 className="card-very-high">
        <b>{convertTemp}</b>
      </h3>
      );
    }
  };

  const weatherIcon = (icon: string) => {
   if (icon === "01d") {
    return <img src={clearDay} alt="Clear Day Icon" />;
   } else if (icon === "01n") {
    return <img src={clearNight} alt="Clear Night Icon" />;
   } else if (icon === "02d") {
    return <img src={cloudyDay} alt="Cloudy Day Icon" />;
   } else if (icon === "02n") {
    return <img src={cloudyNight} alt="Cloudy Night Icon" />;
   } else if (icon === "03d") {
    return <img src={lightClouds} alt="Light Clouds Icon" />;
   } else if (icon === "04d") {
    return <img src={doubleCloud} alt="Double Clouds Icon" />;
   } else if (icon === "09d") {
    return <img src={rain} alt="Rain Icon" />;
   } else if (icon === "10d") {
    return <img src={daySunnyStorm} alt="Day Storm Icon" />;
   } else if (icon === "10n") {
    return <img src={sunnyStorms} alt="Night Storm Icon" />;
   } else if (icon === "11d") {
    return <img src={thunderstorm} alt="Thunderstorm Icon" />;
   } else if (icon === "13n") {
    return <img src={snow} alt="Snow Icon" />;
   } else if (icon === "50n" || icon === "50d") {
    return <img src={mist} alt="Mist Icon" />;
   }
  };




  const renderDailyWeather = props.weeklyWeather.map((day: any) => {
    return (
     <article
      key={Math.floor(Math.random() * Date.now())}
      className="daily-weather"
     >
      <span className="list">
       {temp(day.temp.max)}
       <p className="unit">&deg;F high /</p>
       {temp(day.temp.min)}
       <p className="unit">&deg;F low</p>
      </span>
      {weatherIcon(day.weather[0].icon)}
      {/* <p className="daily-weather-minmax">{time method to check time and return temp off time need to do the same bellow for feels like}</p> */}
      {/* <p className="daily-weather-feelslike">
          add time checker to display feels like
        </p> */}
      {/* <p className="daily-pressure">{day.pressure} Pressure </p>  */}
      <span className="list">
       <p className="daily-humidity">{day.humidity}%</p>
       <p className="unit">Humidity</p>
      </span>
      <span className="list">
       <p className="daily-wind">
        {day.wind_speed} mph / {degToDirection(day.wind_deg)}
       </p>
      </span>
      <span className="list">
        <p>{day.clouds}%</p>
        <p className="unit">Cloud Cover</p>
      </span>
      <span className="list">
        <p>{day.uvi}</p>
        <p className="unit">UVI</p>
      </span>

      {/* <p>conditional that checks value of weather.main to give back data if available or return null<p> */}
     </article>
    );
  });

  return (
    <section className="weekly-weather">
      {(props.weeklyWeather) ? renderDailyWeather : 'Loading...'}
    </section>
  )
}
	


export default WeeklyForecast