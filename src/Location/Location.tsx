import React, { useState, useEffect } from 'react'
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast'
import './Location.scss'
import cloudyNight from '../assets/02n.png'
import waterdrop from '../assets/water-drop.png'
import eye from '../assets/eye.png'
import lungs from '../assets/lungs.png'
import sun from '../assets/sun.png'
import bee from "../assets/bee.png"
import wind from '../assets/wind.png'
import clearDay from "../assets/01d.png";
import clearNight from "../assets/01n.png";
import cloudyDay from "../assets/02d.png";
import lightClouds from "../assets/03d.png";
import doubleCloud from "../assets/04d.png";
import rain from "../assets/09d.png";
import daySunnyStorm from "../assets/10d.png";
import sunnyStorms from "../assets/10n.png";
import thunderstorm from "../assets/11d.png";
import snow from "../assets/13d.png";
import mist from "../assets/50d.png";

import { kelvinToFahren, degToDirection, weatherDtDisplay, weatherIcon } from '../helpers/conversions'

import { DetailsProps } from '../helpers/detailsdefinitions'

const Location = (props: any) => {
  const [ time, setTime ] = useState<string>()

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 998);

    return () => {
      clearTimeout(timerId);
    } 
  }, [time])

   
	return (
  <section className="location-section">
   {props.detailsData ? (
    <>
     <h2 className="current-city">{props.matchDetails[2]}</h2>
     <h3 className="current-region">{props.matchDetails[3]}, USA</h3>
     <div className="info-box">
      <h4 className="info-box-header">HAPPENING NOW</h4>
      <p className="current-date">{weatherDtDisplay(props.detailsData.currentWeather.dt)}</p>
      <article className="current-weather">
       <div className="current-weather-left">
        <h5 className="current-temp">
         {kelvinToFahren(props.detailsData.currentWeather.temp)}&deg;
        </h5>
        {weatherIcon(props.detailsData.currentWeather.weather[0].icon)}
       </div>
       <div className="current-weather-right">
        <span className="current-weather-right-list">
         <img
          src={waterdrop}
          alt="rain droplet icon for precipitation"
          className="small-weather-icon"
         />
         <p className="type">Precipitation</p>
         <p className="current-precipitation">
          {props.detailsData.currentWeather.rain
           ? props.detailsData.currentWeather.rain["1h"]
           : 0}
          %
         </p>
        </span>
        <span className="current-weather-right-list">
         <img
          src={wind}
          alt="wind icon for wind speed direction"
          className="small-weather-icon"
         />
         <p className="type">Wind</p>
         <p className="current-wind">
          {props.detailsData.currentWeather.wind_speed} mph /
          {degToDirection(props.detailsData.currentWeather.wind_deg)}
         </p>
        </span>
       </div>
      </article>
     </div>
     <div className="info-box air-quality">
      <h4 className="info-box-header">AIR QUALITY</h4>
      <article className="aq-section">
     <span className="info-box-aq">
      <img
        src={lungs}
        alt="lungs icon for air quality"
        className="small-weather-icon"
      />
      <p className="type">Air Quality Index</p>
      {/* <p className="unit">{props.detailsData.aqi}</p>  */}
      </span>
      <span className="info-box-aq">
        <img
          src={sun}
          alt="sun icon for UV index"
          className="small-weather-icon"
        />
        <p className="type">UV Index</p>
        <p className="unit">{props.detailsData.currentWeather.uvi}of 10</p>
      </span>
      <span className="info-box-aq">
        <img
          src={eye}
          alt="eye icon for visibility"
          className="small-weather-icon"
        />
        <p className="type">Visibility</p>
        <p className="unit">{(props.detailsData.currentWeather.visibility / 5280).toFixed(1)} mi</p>
      </span>
      </article>
     </div>
     {/* <div className="info-box hourly-forecast">
            <h4 className="info-box-header">HOURLY FORECAST</h4>
          </div> */}
     <div className="info-box weekly-forecast">
      <h4 className="info-box-header">WEEKLY FORECAST</h4>
      <WeeklyForecast weeklyWeather={props.detailsData.weeklyWeather} />
     </div>
    </>
   ) : (
    <>
     <iframe
      className="gif"
      title="loading-gif"
      src="https://giphy.com/embed/QRhtqYeEywJI4"
      style={{ border: "none", width: "100" }}
     />
     <br />
     <h1 className="loading">Gathering your data... </h1>
    </>
   )}
  </section>
 );
}

export default Location