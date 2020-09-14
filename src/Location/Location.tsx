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
import notepad from '../assets/notepad.png'
import forestFire from '../assets/forest-fire.png'
import cough from '../assets/cough.png'

import { kelvinToFahren, degToDirection, forecastDtDisplay, weatherDtDisplay, weatherIcon } from '../helpers/conversions'

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

  const aqIndex = (aqi: number, aqiCat: string) => {
   const aqiIndex = aqi === -1 ? aqiCat : aqi;
   if (aqiIndex <= 50 || aqiIndex === "Good") {
    return (
     <p className="card-low">
      <b>{aqiIndex}</b>
     </p>
    )
   } else if ((aqiIndex >= 51 && aqiIndex <= 100) || aqiIndex === "Moderate") {
    return (
     <p className="card-moderate">
      <b>{aqiIndex}</b>
     </p>
    );
   } else if (
    (aqiIndex >= 151 && aqiIndex <= 200) ||
    aqiIndex === "Unhealthy"
   ) {
    return (
     <p className="card-high">
      <b>{aqiIndex}</b>
     </p>
    );
   } else if ((aqiIndex >= 201 && aqiIndex <= 300) || "Very Unhealthy") {
    return (
     <p className="card-very-high">
      <b>{aqiIndex}</b>
     </p>
    );
   } else if (aqiIndex >= 301 || "Hazardous") {
    return (
     <p className="card-extreme">
      <b>{aqiIndex}</b>
     </p>
    );
   } else {
    return (
     <p className="card-extreme">
      <b>N/A</b>
     </p>
    );
   }
  };

  const temp = (temp: number) => {
    const temperature =  kelvinToFahren(temp)
   if (temperature <= 32) {
    return (
     <h3 className="card-extreme current-temp">{temperature}&deg;</h3>
    )
   } else if (temperature >= 33 && temperature <= 59) {
    return (
     <h3 className="card-moderate current-temp">{temperature}&deg;</h3>
    )
   } else if (temperature >= 60 && temperature <= 80) {
    return (
     <h3 className="card-high current-temp">{temperature}&deg;</h3>
    )
   } else if (temperature >= 80) {
    return (
     <h3 className="card-very-high current-temp">{temperature}&deg;</h3>
    )
   }
  }

  const uvIndex = (uvi: number) => {
   const uviNum = +Math.round(uvi).toFixed(0) 
   if (uviNum <= 2) {
    return (
     <p className="card-low">
      <b>Low</b>
     </p>
    );
   } else if (uviNum >= 3 && uviNum <= 5) {
    return (
     <p className="card-moderate">
      <b>Moderate</b>
     </p>
    );
   } else if (uviNum === 6 || uviNum === 7) {
    return (
     <p className="card-high">
      <b>High</b>
     </p>
    );
   } else if (uviNum >= 8 && uviNum <= 10) {
    return (
     <p className="card-very-high">
      <b>Very High</b>
     </p>
    );
   } else if (uviNum >= 11) {
    return (
     <p className="card-extreme">
      <b>Hazardous</b>
     </p>
    );
   } else {
    return (
     <p className="card-extreme">
      <b>N/A</b>
     </p>
    );
   }
  };

  const jsxNotes = (notes: string) => {
    console.log(notes)
    if (!notes) {
      return <p className='discussion-text'>N/A</p>
    } else {
      return <p className='discussion-text'>{notes}</p>
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
      <p className="current-date">{weatherDtDisplay(props.detailsData.currentWeather.dt)}</p>
       <article className="current-weather">
        <div className="current-weather-left">
          {temp(props.detailsData.currentWeather.temp)}
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
            {aqIndex(props.detailsData.currentAir.AQI, props.detailsData.currentAir.Category.Name)}            
            </span>
            <span className="info-box-aq">
              <img
                src={sun}
                alt="sun icon for UV index"
                className="small-weather-icon"
              />
              <p className="type">UV Index</p>
              {uvIndex(props.detailsData.currentWeather.uvi)}
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
                {(props.detailsData.currentWeather.visibility / 5280).toFixed(1)} mi
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
          <span className='disc-top'>
            <img
              src={notepad}
              alt="checklist icon for air quality"
              className="small-weather-icon"
            />
            <p className="type">Additional Notes</p>
            </span>
            {jsxNotes(props.detailsData.currentAir.Discussion)}
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