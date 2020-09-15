import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

import { weatherIcon, temp, aqIndex, uvIndex } from '../helpers/conversions'

export interface CardProps {
	lat: number
	long: number
	temp: number
  aqi: any
  aqiCat: any
	uvi: any
	icon: string
	locality: string
	region: string
	getMatchDetails: Function
	getAllDetailsData: Function
}

const Card: React.FC<CardProps> = (props) => {

  return (
		<Link
			to={`/results/${props.locality}`}
			className="card-link-wrapper"
			style={{ textDecoration: "none" }}
			onClick={() => {
				props.getMatchDetails(props.lat, props.long, props.locality, props.region)
				props.getAllDetailsData(props.lat, props.long)
			}}
		>
		<article className="card-container" key={props.locality}>
		<h2 className="card-header">{props.locality}</h2>
			<span className="card-list">
				{temp(props.temp)}
				<p className="unit">&deg;F</p>
			</span>
			<span className='card-list'>
				{uvIndex(props.uvi)}
				<p className="unit">UVI</p>
			</span>
			{/* {aqIndex(props.aqi, props.aqiCat)}
			<p className="unit">AQI</p> */}
			{weatherIcon(props.icon)}
		</article>
		</Link>
	)
}

export default Card