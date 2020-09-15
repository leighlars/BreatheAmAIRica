import React from 'react'
import './WeeklyForecast.scss'
import { degToDirection, forecastDtDisplay, weatherIcon, temp } from '../helpers/conversions'

import { WeeklyProps } from '../helpers/typeDefinitions'

const WeeklyForecast: React.FC<WeeklyProps> = (props) => {

  const renderDailyWeather = props.weeklyWeather.map((day: any, index: number) => {
    return (
      (index !== 0) ?
     <article
      key={Math.floor(Math.random() * Date.now())}
      className="daily-weather"
     >
        <p>{forecastDtDisplay(day.dt)}</p>
      {weatherIcon(day.weather[0].icon)}
      <span className="list">
       {temp(day.temp.max)}
       <p className="unit">&deg;F high /</p>
       {temp(day.temp.min)}
       <p className="unit">&deg;F low</p>
      </span>
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
     : null
    );
  });

  return (
    <section className="weekly-weather">
      {(props.weeklyWeather) ? renderDailyWeather : 'Loading...'}
    </section>
  )
}
	


export default WeeklyForecast