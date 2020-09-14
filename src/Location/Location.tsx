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
import notepad from '../assets/notepad.png'
import forestFire from '../assets/forest-fire.png'
import cough from '../assets/cough.png'

import { kelvinToFahren, degToDirection } from '../helpers/conversions'



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

   const weatherIcon = (icon: string) => {
   if (icon === "01d") {
    return <img src={clearDay} alt="Clear Day Icon" className='large-weather-icon' />;
   } else if (icon === "01n") {
    return <img src={clearNight} alt="Clear Night Icon" className='large-weather-icon' />;
   } else if (icon === "02d") {
    return <img src={cloudyDay} alt="Cloudy Day Icon" className='large-weather-icon' />;
   } else if (icon === "02n") {
    return <img src={cloudyNight} alt="Cloudy Night Icon" className='large-weather-icon' />;
   } else if (icon === "03d") {
    return <img src={lightClouds} alt="Light Clouds Icon" className='large-weather-icon' />;
   } else if (icon === "04d") {
    return <img src={doubleCloud} alt="Double Clouds Icon" className='large-weather-icon' />;
   } else if (icon === "09d") {
    return <img src={rain} alt="Rain Icon" className='large-weather-icon' />;
   } else if (icon === "10d") {
    return <img src={daySunnyStorm} alt="Day Storm Icon" className='large-weather-icon' />;
   } else if (icon === "10n") {
    return <img src={sunnyStorms} alt="Night Storm Icon" className='large-weather-icon' />;
   } else if (icon === "11d") {
    return <img src={thunderstorm} alt="Thunderstorm Icon" className='large-weather-icon' />;
   } else if (icon === "13n") {
    return <img src={snow} alt="Snow Icon" className='large-weather-icon' />;
   } else if (icon === "50n" || icon === "50d") {
    return <img src={mist} alt="Mist Icon" className='large-weather-icon' />;
   }
  };

  const aqIndex = (aqi: number, aqiCat: string) => {
   const aqiIndex = aqi === -1 ? aqiCat : aqi;
   if (aqiIndex <= 50 || aqiIndex === "Good") {
    return (
     <h3 className="card-low">
      <b>{aqiIndex}</b>
     </h3>
    );
   } else if ((aqiIndex >= 51 && aqiIndex <= 100) || aqiIndex === "Moderate") {
    return (
     <h3 className="card-moderate">
      <b>{aqiIndex}</b>
     </h3>
    );
   } else if (
    (aqiIndex >= 151 && aqiIndex <= 200) ||
    aqiIndex === "Unhealthy"
   ) {
    return (
     <h3 className="card-high">
      <b>{aqiIndex}</b>
     </h3>
    );
   } else if ((aqiIndex >= 201 && aqiIndex <= 300) || "Very Unhealthy") {
    return (
     <h3 className="card-very-high">
      <b>{aqiIndex}</b>
     </h3>
    );
   } else if (aqiIndex >= 301 || "Hazardous") {
    return (
     <h3 className="card-extreme">
      <b>{aqiIndex}</b>
     </h3>
    );
   } else {
    return (
     <h3 className="card-extreme">
      <b>N/A</b>
     </h3>
    );
   }
  };

  const jsxNotes = (notes: string) => {
    if (!notes) {
      return <p className='unit'>N/A</p>
    } else {
      return <p className='unit'>{notes}</p>
    }

  }

  return (
   <section className="location-section">
    {props.detailsData ? (
     <>
      <h2 className="current-city">{props.matchDetails[2]}</h2>
      <h3 className="current-region">{props.matchDetails[3]}, USA</h3>
      <div className="info-box">
       <h4 className="info-box-header">HAPPENING NOW</h4>
       <p className="current-date">{time}</p>
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
        <span className='aq-top'>
          <span className="info-box-aq">
            <img
              src={lungs}
              alt="lungs icon for air quality"
              className="small-weather-icon"
            />
            <p className="type">AQI</p>
            <p className="unit">
              {/* {aqIndex(props.detailsData.currentAir.aqi, props.detailsData.currentAir.aqi.name)} */}
            </p>
            </span>
            <span className="info-box-aq">
              <img
                src={sun}
                alt="sun icon for UV index"
                className="small-weather-icon"
              />
              <p className="type">UV Index</p>
              <p className="unit">{props.detailsData.currentWeather.uvi} of 10</p>
            </span>
          </span>
          <span className='aq-middle'>
             <span className="info-box-aq">
                <img
                src={eye}
                alt="eye icon for visibility"
                className="small-weather-icon"
                />
                <p className="type">Visibility</p>
                <p className="unit">
                {props.detailsData.currentWeather.visibility} mi
                </p>
            </span>
            <span className="info-box-aq">
              <img
                src={cough}
                alt="bee icon for air quality"
                className="small-weather-icon"
              />
              <p className="type">Allergies</p>
              <p className="unit">Coming Soon!</p>
              </span>
          </span>
          <span className='aq-bottom'>
            <span className="info-box-aq">
            <img
              src={bee}
              alt="bee icon for air quality"
              className="small-weather-icon"
            />
            <p className="type">Pollen</p>
            <p className="unit">Coming Soon!</p>
            </span>
            <span className="info-box-aq">
              <img
                src={forestFire}
                alt="smoke icon for air quality"
                className="small-weather-icon"
              />
              <p className="type">Smoke</p>
              <p className='unit'>Coming Soon!</p>
            </span>
          </span>
        <span className="info-box-aq-discussion">
         <img
          src={notepad}
          alt="checklist icon for air quality"
          className="small-weather-icon"
         />
         <p className="type">Additional Notes</p>
         {jsxNotes(props.detailsData.currentAir.discussion)}
        </span>
       </article>
      </div>
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