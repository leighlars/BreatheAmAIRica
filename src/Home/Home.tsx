import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { getLocationData } from '../helpers/apiCalls'
import { popularCities, lowOzoneCities, lowPollutionCities } from '../helpers/cities'
import './Home.scss'

export interface HomeProps {
	popularCities: [] {name: string, lat: number, long: number},
	lowOzoneCities: [] {name: string, lat: number, long: number},
	lowPollutionCities: [] {name: string, lat: number, long: number}
}

const Home: React.FC<HomeProps> = props => {
	const [popularCities, setPopularCities] = useState([])
	const [lowOzoneCities, setOzoneCities] = useState([])
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