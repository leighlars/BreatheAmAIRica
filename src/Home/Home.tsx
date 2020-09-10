import React, { useState, useEffect } from 'react'
import Card  from '../Card/Card'

import { popularCities } from '../helpers/cities'

import './Home.scss'



const Home: React.FC = () => {
	const [topCities, setTopCities] = useState([])

	const renderedCities = popularCities.map((city) => {
		return (
			<Card 
				city={city.name}
			/>
  	);
	})

	return (
		<section className="home">
			<div className='top-five-cities'>
				{renderedCities}
			</div>
			<article className='home-info-box'>

			</article>
		</section>
	)
}

export default Home