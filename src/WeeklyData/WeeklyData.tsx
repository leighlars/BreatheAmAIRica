import React from 'react'


interface WeeklyDataProps {
  // getMatchedData: Function
  weeklyData: any[];
}

const WeeklyData: React.FC<WeeklyDataProps> = (props) => {
  return (
    null
  )
}
// const renderWeeklyForecast =
// 	weeklyWeather.daily.map((day => {
// 		return <article key={day.weather.id}className="daily-weather">
// 			<h3 className="daily-weather-highlight">
// 				{day.temp.min}F/{day.temp.max}F
// 			</h3>
// 			<p className="daily-weather-icon">
// 				<span>{day.weather.icon}</span>
// 			</p>
// 			{/* <p className="daily-weather-minmax">{time method to check time and return temp off time need to do the same bellow for feels like}</p> */}
// 			<p className="daily-weather-feelslike">
// 			add time checker to display feels like
// 			</p>
// 			<p className="daily-pressure">{day.pressure}</p>
// 			<p className="daily-humidity">{day.humidity}</p>
// 			<p className="daily-wind">
// 				{/* need functionality to evaluate wind direction */}
// 				{day.wind_speed}   {day.wind_deg}
// 			</p>
// 			<p>{day.uvi} {day.clouds}</p>
// 			{/* <p>conditional that checks value of weather.main to give back data if available or return null<p> */}
// 		</article>
// 	}))


export default WeeklyData