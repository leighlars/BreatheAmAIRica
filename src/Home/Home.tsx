import React from 'react'
import { popCities, ozoneCities, pollutionCities } from '../helpers/cities'
import './Home.scss'
import Card from '../Card/Card'


const Home: React.FC = () => {

	const popularCities = popCities.map((city: any) => {
		return (<Card city={city} />);
	})

	const lowOzoneCities = ozoneCities.map((city: any) => {
		return (<Card city={city} />);
	})
	
	const lowPollutionCities = pollutionCities.map((city: any) => {
		return (<Card city={city} />);
	})

	return (
		<section className="home">
			<h2 className='carousel-header'>Popular Destinations</h2>
			<div className='card-carousel'>
				{popularCities}
			</div>
			<h2 className='carousel-header'>Lowest Ozone Cities</h2>
			<div className='card-carousel'>
				{lowOzoneCities}
			</div>
			<h2 className='carousel-header'>Lowest Pollution Cities</h2>
			<div className='card-carousel'>
				{lowPollutionCities}
			</div>
		</section>
	)
}

export default Home