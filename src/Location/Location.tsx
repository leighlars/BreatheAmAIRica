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

import { kelvinToFahren, degToDirection, weatherDtDisplay, weatherIcon, aqIndex, uvIndex, temp } from '../helpers/conversions'

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