import React, { useState, useEffect } from 'react'
import { popularCities, lowOzoneCities, lowPollutionCities } from '../helpers/cities'
import './Home.scss'
import Card from '../Card/Card'

interface HomeProps {
	popularCities: [],
	lowOzoneCities: [],
	lowPollutionCities: []
}

const Home: React.FC<HomeProps> = props => {
	const [props.popularCities, setPopularCities] = useState([])
	const [props.lowOzoneCities, setOzoneCities] = useState([])
	const [lowPollutionCities, setPollutionCities] = useState([])

	const popularCities = popularCities.map((city: object) => {
		return (</Card city={props.city}>);
	})

	const ozoneCities = lowOzoneCities.map((city: object) => {
		return (</Card city={props.city}>);
	})
	
	const pollutionCities = lowPollutionCities.map((city: object) => {
		return (</Card city={props.city}>);
	})

	return (
		<section className="home">
			<div className='card-carousel'>
				{popularCities}
			</div>
			<div className='card-carousel'>
				{lowOzoneCities}
			</div>
			<div className='card-carousel'>
				{lowPollutionCities}
			</div>
		</section>
	)
}

export default Home