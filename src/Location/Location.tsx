import React from 'react'
import './Location.scss'

const Location: React.FC = () => {
	return (
		<section className="location-data">
			<p>City, State</p>
			<p>Country</p>
			<p>US AQI: </p>
			<p>🌪</p>
		</section>
	)
}

export default Location