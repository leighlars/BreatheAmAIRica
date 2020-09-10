import React, { useState, useEffect } from 'react'

import {Link} from 'react-router-dom'
import { getLocationData } from '../helpers/apiCalls'
import { cities } from '../helpers/topCities'

import './Home.scss'

const Home: React.FC = () => {
	const [topCities, setTopCities] = useState([])

	const renderedCities = cities.map((city) => {
		return (
			<Link to={`/${city.name}`} className='card-link'>
				<article className="card-container" key={city.name}>
					<h2 className="card-header">{city.name}</h2>
					<h3 className="card-temp">35&deg;</h3>
					<p className="card-air">API</p>
					<p className="card-pollen">🐝</p>
					<p className="card-hazard">🔥</p>
				</article>
			</Link>
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