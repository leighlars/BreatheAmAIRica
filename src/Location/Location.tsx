import React, { useState, useEffect } from 'react'
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast'
import './Location.scss'
import waterdrop from '../assets/water-drop.png'
import eye from '../assets/eye.png'
import lungs from '../assets/lungs.png'
import sun from '../assets/sun.png'
import bee from "../assets/bee.png"
import wind from '../assets/wind.png'
import notepad from '../assets/notepad.png'
import forestFire from '../assets/forest-fire.png'
import cough from '../assets/cough.png'
import greenbackpack from '../assets/greenbackpack.png'
import greensoccer from "../assets/greensoccer.png"
import greenwalking from "../assets/greenwalking.png"
import orangebackpack from "../assets/orangebackpack.png";
import orangesoccer from "../assets/orangesoccer.png";
import orangewalking from "../assets/orangewalking.png";
import redbackpack from "../assets/redbackpack.png";
import redsoccer from "../assets/redsoccer.png";
import redwalking from "../assets/redwalking.png";


import { degToDirection, weatherDtDisplay, weatherIcon, aqIndex, uvIndex, temp } from '../helpers/conversions'

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
    if (!notes) {
      return <p className='discussion-text'>N/A</p>
    } else {
      return <p className='discussion-text'>{notes}</p>
    }
  }

  const activityIcons = (aqi: number, aqiCat: string, uvi: number) => {
   const aqiIndex = aqi === -1 ? aqiCat : aqi;
   const uviNum = +Math.round(uvi).toFixed(0);
   if (
     aqiIndex <= 100 || 
     aqiIndex === "Good" || 
     aqiIndex === "Moderate" || 
     uviNum <= 4) {
    return (
     <span className='activity'>
      <img src={greenwalking} alt='Healthy conditions for walking icon' className='small-weather-icons'/>
      <img src={greensoccer} alt='Healthy conditions for park icon' className='small-weather-icons'/>
      <img src={greenbackpack} alt='Healthy conditions for hiking icon' className='small-weather-icons'/>
      <p className='card-low'>Great day to be outside!</p>
     </span>
    );
   } else if (
    (aqiIndex >= 151 && aqiIndex <= 200) ||
    aqiIndex === "Unhealthy" || 
    (uviNum >= 5 || uviNum <= 8)
   ) {
    return (
       <span className='activity'>
      <img src={orangewalking} alt='Moderate conditions for walking icon' className='small-weather-icons'/>
      <img src={orangesoccer} alt='Moderate conditions for park icon' className='small-weather-icons'/>
      <img src={orangebackpack} alt='Moderate conditions for hiking icon' className='small-weather-icons'/>
      <p className='card-high'>Conditions may be harmful to some</p>
     </span>
    );
   } else if (
      aqiIndex >= 201 || 
      aqiIndex === "Very Unhealthy" || 
      aqiIndex === 'Hazardous' || 
      uviNum >= 9) {
    return (
      <span className='activity'>
      <img src={redwalking} alt='Unhealthy conditions for walking icon' className='small-weather-icons'/>
      <img src={redsoccer} alt='Unhealthy conditions for park icon' className='small-weather-icons'/>
      <img src={redbackpack} alt='Unhealthy conditions for hiking icon' className='small-weather-icons'/>
      <p className='card-very-high'>Stay indoors</p>
     </span>
    )
   } else {
    return (
     <p className="card-extreme">
      <b>Activity Data Not Available</b>
     </p>
    );
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
       <p className="current-date">
        {weatherDtDisplay(props.detailsData.currentWeather.dt)}
       </p>
       <article className="current-weather">
        <div className="current-weather-left">
         {temp(props.detailsData.currentWeather.temp)}
         {weatherIcon(props.detailsData.currentWeather.weather[0].icon)}
        </div>
        <div className="current-weather-right">
         <span className="current-weather-right-list">
          <img
           src={waterdrop}
           alt="Rain droplet icon for precipitation"
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
           alt="Wind icon for wind speed direction"
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
        {props.detailsData.currentAir
         ? activityIcons(
            props.detailsData.currentAir.aqi,
            props.detailsData.currentAir.aqCat,
            props.detailsData.currentWeather.uvi
           )
         : null}
        <span className="aq-top">
         {props.detailsData.currentAir ? (
          <span className="info-box-aq">
           <img
            src={lungs}
            alt="lungs icon for air quality"
            className="small-weather-icon"
           />
           <p className="type">AQI</p>
           {aqIndex(
            props.detailsData.currentAir.AQI,
            props.detailsData.currentAir.Category.Name
           )}
          </span>
         ) : null}
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
        <div className="aq-middle">
         <span className="info-box-aq">
          <img
           src={eye}
           alt="eye icon for visibility"
           className="small-weather-icon"
          />
          <p className="type">Visibility</p>
          <p className="unit">
           {(props.detailsData.currentWeather.visibility / 1609).toFixed(1)} mi
          </p>
         </span>
         <span className="info-box-aq">
          <img
           src={cough}
           alt="sneeze icon for allergies"
           className="small-weather-icon"
          />
          <p className="type">Allergies</p>
          <p className="unit">Coming Soon!</p>
         </span>
        </div>
        <div className="aq-bottom">
         <span className="info-box-aq">
          <img
           src={bee}
           alt="bee icon for pollen"
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
          <p className="unit">Coming Soon!</p>
         </span>
        </div>
         <span className="info-box-aq-discussion">
          <span className="disc-top">
           <img
            src={notepad}
            alt="checklist icon for additional notes"
            className="small-weather-icon"
           />
           <p className="type">Additional Notes</p>
          </span>
          {props.detailsData.currentAir.Discussion ? (jsxNotes(props.detailsData.currentAir.Discussion)) : null}
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