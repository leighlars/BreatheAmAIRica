import React, { useState, useEffect } from 'react'

import { getLocationData } from '../helpers/apiCalls'
import { cities } from '../helpers/topCities'

import './Home.scss'

const Home: React.FC = () => {
	const [topCities, setTopCities] = useState([])

	useEffect(() => {
		const getCityData = async () => {
			const {city}: any = cities.map(city => {
				getLocationData(city.lat, city.long)
			})
			setTopCities(city)
		}
		getCityData()

		console.log(topCities)
	},[topCities])

	const renderedCities = cities.map((city) => {
		return (
		<article>
			<p>
				{city.name} 🌧
			</p>
		</article>
		)
	})



	return (
		<section className="top-cities">
				{renderedCities}
		</section>
	)
}

export default Home