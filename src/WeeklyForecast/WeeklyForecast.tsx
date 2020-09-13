import React from 'react'

import './WeeklyForecast.scss'

import { kelvinToFahren, degToDirection } from '../helpers/conversions'

const WeeklyForecast = (props: any) => {
  const renderDailyWeather = props.weeklyWeather.map((day: any) => {
    return (
      <article key={Math.floor(Math.random()* Date.now())} className="daily-weather">
        <h3 className="daily-weather-highlight">
          {kelvinToFahren(day.temp.min)} &deg;F/
          {kelvinToFahren(day.temp.max)} &deg;F
        </h3>
        <p className="daily-weather-icon">
          {/* use method Leigh and Erin used to display dynamic icons below */}
          <span>{day.weather[0].icon}</span>
        </p>
        {/* <p className="daily-weather-minmax">{time method to check time and return temp off time need to do the same bellow for feels like}</p> */}
        <p className="daily-weather-feelslike">
          add time checker to display feels like
        </p>
        <p className="daily-pressure">{day.pressure} Pressure</p>
        <p className="daily-humidity">{day.humidity}% Humidity</p>
        <p className="daily-wind">
          {day.wind_speed}mph {degToDirection(day.wind_deg)}
        </p>
        <p>
          {day.uvi} UVI {day.clouds} Cloud Cover
        </p>
        {/* <p>conditional that checks value of weather.main to give back data if available or return null<p> */}
      </article>
    )
  });

  return (
    <section className="daily-weather">
      {(props.weeklyWeather) ? renderDailyWeather : 'Loading...'}
    </section>
  )
}
	


export default WeeklyForecast