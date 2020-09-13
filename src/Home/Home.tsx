import React, { useState, useEffect } from 'react'
import { homeCities } from '../helpers/cities'
import { getHomeData, getTestData } from '../helpers/apiCalls'
import './Home.scss'
import Card from '../Card/Card'
import wildfire from '../assets/wildfire.jpg'
import beach from "../assets/beach.jpg";
import altitude from "../assets/altitude.jpg";
import roadTrip from "../assets/roadTrip.jpeg";
import covid from '../assets/covid.png'

export interface HomeProps {
  query: string
}

const Home: React.FC<HomeProps> = props => {
  const [allCityData, setAllCityData] = useState<Array<any>>([])
  const [string, setString] = useState('')



export interface HomeProps {
	query: string
}

const Home: React.FC<HomeProps> = props => {
	const cityDetails = async () => {
		const getCityData = homeCities.map(async (city: {name: string, lat: number, long: number}) => {
			return await getTestData()
		})
		const cityData = await Promise.all(getCityData)
		makeCards(cityData)
		return cityData
	}

	const makeCards = (data: Array<any>) => {
		console.log(data)
	}

	// useEffect(() => {
	// 	cityDetails()
	// }, [])

	const newsCards = [
  <a
   href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html"
	 target="_blank"
	 rel="noopener noreferrer"
  >
   <div className="news-card">
    <img src={covid} alt="COVID virus" />
    <div className="news-title-overlay">
     <h4>COVID & US Travel</h4>
    </div>
   </div>
  </a>,
  <a
   href="https://www.cdc.gov/nceh/features/wildfires/index.html"
	 target="_blank"
	 rel="noopener noreferrer"
  >
   <div className="news-card">
    <img
     src={wildfire}
     alt="forest burning in wildfire"
    />
    <div className="news-title-overlay">
     <h4>Wildfires & Respiration</h4>
    </div>
   </div>
  </a>,
  <a
   href="https://www.active.com/outdoors/articles/5-tips-for-successful-altitude-acclimation"
	 target="_blank"
	 rel="noopener noreferrer"
  >
   <div className="news-card">
    <img
     src={altitude}
     alt="person hiking in mountains"
    />
    <div className="news-title-overlay">
     <h4>Altitude Acclimation Tips</h4>
    </div>
   </div>
  </a>,
  <a
   href="https://travel.usnews.com/rankings/best-beaches-in-the-usa/"
	 target="_blank"
	 rel="noopener noreferrer"
  >
   <div className="news-card">
    <img
     src={beach}
     alt="scenic beach under sunny blue skies"
    />
    <div className="news-title-overlay">
     <h4>Best US Beaches</h4>
    </div>
   </div>
  </a>,
	<a
	 href="https://www.roadtripusa.com/"
	 target="_blank"
	 rel="noopener noreferrer"
	>
   <div className="news-card">
    <img
     src={roadTrip}
     alt="1970s Volkswagen van and desert landscape"
    />
    <div className="news-title-overlay">
     <h4>USA Road Trip Routes</h4>
    </div>
   </div>
  </a>,
 ];

	return (
		<section className="home">
			<h2 className='carousel-header'>Popular Destinations</h2>
			<div className='card-carousel'>
        {/* {cityDetails()} */}
			</div>
			<h2 className='carousel-header'>Lowest Ozone Pollution</h2>
			<div className='card-carousel'>
			</div>
			<h2 className='carousel-header'>Lowest Particle Pollution</h2>
			<div className='card-carousel'>

			</div>
			<h2 className='carousel-header'>Pertinent Readings</h2>
			<div className='card-carousel'>
				{/* {newsCards} */}
			</div>
		</section>
	)
}

export default Home