import React, { useState, useEffect } from 'react'
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast'
import './Location.scss'
import cloudyNight from '../assets/02n.png'
import waterdrop from '../assets/water-drop.png'
import eye from '../assets/eye.png'
import sun from '../assets/sun.png'
import bee from "../assets/bee.png"
import lungs from '../assets/lungs.png'
import wind from '../assets/wind.png'

import { kelvinToFahren, degToDirection } from '../helpers/conversions'



import { DetailsProps } from '../helpers/detailsdefinitions'

// import raindrop from '../assets/liquid.png'
// should we break this out into different components?
// feel free to break up lines of text for readability, i'm getting tired


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
            <p className="current-date">{time}</p>
            <article className="current-weather">
              <div className="current-weather-left">
                <h5 className="current-temp">
                  {kelvinToFahren(props.detailsData.currentWeather.temp)}&deg;
                </h5>
                <img
                  src={cloudyNight}
                  alt="clouds covering moon for current sky"
                  className="large-weather-icon"
                />
              </div>
              <div className="current-weather-right">
                <span className="current-weather-right-top">
                  <img
                    src={wind}
                    alt="wind icon for wind speed direction"
                    className="small-weather-icon"
                  />
                  <p className="current-wind">
                    {props.detailsData.currentWeather.wind_speed} mph /{" "}
                    {degToDirection(props.detailsData.currentWeather.wind_deg)}
                  </p>
                </span>
                <span className="current-weather-right-bottom">
                  <img
                    src={waterdrop}
                    alt="rain droplet icon for precipitation"
                    className="small-weather-icon"
                  />
									<p className="current-precipitation">
										{(props.detailsData.currentWeather.rain)? 
										props.detailsData.currentWeather.rain['1h'] : 0} %
									</p>
                </span>
              </div>
            </article>
          </div>
          <div className="info-box air-quality">
            <h4 className="info-box-header">AIR QUALITY</h4>
							<img
								src={lungs}
								alt="lungs icon for air quality"
								className="small-lungs-icon"
							/>
							<p className="type-aqi">Air Quality Index</p>
							<p className="unit-aqi">{'AQI'}</p>
							<img
								src={sun}
								alt="sun icon for UV index"
								className="small-sun-icon"
							/>
							<p className="type-uvi">UV Index</p>
							<p className="unit-uvi">{props.detailsData.currentWeather.uvi} of 10</p>
							<img
								src={bee}
								alt="bee icon for allergies and pollen"
								className="small-bee-icon"
							/>
							<p className="type-allergy">Allergens</p>
							<p className="unit-allergy">2.0</p>
							<img
								src={eye}
								alt="eye icon for visibility"
								className="small-eye-icon"
							/>
							<p className="type-visibility">Visibility</p>
							<p className="unit-visibility">{(props.detailsData.currentWeather.visibility / 5280).toFixed(1)}mi</p>
          </div>
          <div className="info-box hourly-forecast">
            <h4 className="info-box-header">HOURLY FORECAST</h4>
          </div>
          <div className="info-box weekly-forecast">
            <h4 className="info-box-header">WEEKLY FORECAST</h4>
            <WeeklyForecast
						weeklyWeather={props.detailsData.weeklyWeather}
					/>
          </div>
        </>
      ) : (
        <>
          <h1 className="loading">Loading...</h1>
        </>
      )}
    </section>
  );
}

export default Location