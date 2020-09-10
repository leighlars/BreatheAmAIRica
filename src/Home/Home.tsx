import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { getLocationData } from '../helpers/apiCalls'
import { popularCities } from '../helpers/cities'
import { lowOzoneCities } from '../helpers/cities'
import { lowPollutionCities } from '../helpers/cities'
import './Home.scss'

export interface HomeProps {
	popularCities: array,
	lowOzoneCities: array,
	lowPollutionCities: array
}

const Home: React.FC = () => {
	const [popularCities, setPopularCities] = useState([])

	const popularCities = popularCities.map((city) => {
		return (</Card props={city}>);
	})

	const ozoneCities = ozoneCities.map((city) => {
		return (</Card props={city}>);
	})
	
	const pollutionCities = pollutionCities.map((city) => {
		return (</Card props={city}>);
	})

	return (
		<section className="home">
			<div className='card-carousel'>
				{popularCities}
				{ozoneCities}
				{pollutionCities}
			</div>
			<article className='home-info-box'>

			</article>
		</section>
	)
}

export default Home