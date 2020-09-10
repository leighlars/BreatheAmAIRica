import React, { useState, useEffect } from 'react'


import { getLocationData } from '../helpers/apiCalls'
import { cities } from '../helpers/topCities'

import './Home.scss'

const Home: React.FC = () => {
	const [topCities, setTopCities] = useState([])

	const renderedCities = cities.map((city) => {
		return (
		<article
			className="home-container"
			key={city.name}
		>
			<h3 
				className="home-header"
			>
				{city.name} 🌧
			</h3>
			<p className="home-temp">🌡</p>
			<p className="home-air">😷</p>
			<p className="home-pollen">🐝</p>
			<p className="home-hazard">🔥</p>
		</article>
		)
	})

	return (
		<section className="home">
				{renderedCities}
		</section>
	)
}

export default Home