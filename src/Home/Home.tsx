import React from 'react'
import { popCities, ozoneCities, pollutionCities } from '../helpers/cities'
import './Home.scss'
import Card from '../Card/Card'
import wildfire from '../assets/wildfire.jpg'
import beach from "../assets/beach.jpg";
import snowDriving from "../assets/snow-driving.jpg";
import hurricane from "../assets/hurricane.jpg";
import covid from '../assets/covid.png'


const Home: React.FC = () => {
	const seasonalArticles = [
		<a href='https://weather.com/safety/wildfires/video/when-and-how-to-evacuate-during-a-wildfire'>
			<img src={wildfire} alt='forest burning in wildfire' className='article-img'/>
		</a>,
		<a href='https://www.outsideonline.com/2390286/how-to-drive-in-snow'>
			<img src={snowDriving} alt='cars in traffic in snowy conditions' className='article-img'/>
		</a>,
		<a href='https://travel.usnews.com/rankings/best-beaches-in-the-usa/'>
			<img src={beach} alt='scenic beach under sunny blue skies' className='article-img'/>
		</a>,
		<a href='https://www.ready.gov/hurricanes'>
			<img src={hurricane} alt='satellite image of hurricane eye' className='article-img'/>
		</a>,
		<a href='https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html'>
			<img src={covid} alt='image of COVID virus' className='article-img'/>
		</a>
	]

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
			<h2 className='carousel-header'>Lowest Ozone</h2>
			<div className='card-carousel'>
				{lowOzoneCities}
			</div>
			<h2 className='carousel-header'>Lowest Pollution</h2>
			<div className='card-carousel'>
				{lowPollutionCities}
			</div>
			<h2 className='carousel-header'>Travel Preparedness</h2>
			<div className='card-carousel'>
				{seasonalArticles}
			</div>
		</section>
	)
}

export default Home