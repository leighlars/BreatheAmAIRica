import React, { useState, useEffect } from 'react'
import { homeCities } from '../helpers/cities'
import { getHomeData } from '../helpers/dataFilter'
import { getTestData } from '../helpers/apiCalls'
import './Home.scss'
import Card from '../Card/Card'
import wildfire from '../assets/wildfire.jpg'
import beach from '../assets/beach.jpg'
import altitude from '../assets/altitude.jpg'
import roadTrip from '../assets/roadTrip.jpeg'
import covid from '../assets/covid.png'

interface HomeProps {
	markLoaded: Function
	initialLoad: boolean
	homePageData: [string, {}[]] | undefined
	getMatchDetails: Function
	getAllDetailsData: Function
}

const Home: React.FC<HomeProps> = props => {
	const [ cardList, setCardList ] = useState<Array<any>>([])

	const cityDetails = async () => {
		if (props.homePageData) {
			makeCards(props.homePageData)
		} else {
			const getCityData = homeCities.map(async (city: {locality: string, region: string, lat: number, long: number}) => {
				const cityLocality = city.locality
				const cityRegion = city.region
				const cityLat = city.lat
				const cityLong = city.long
				// const data = await getHomeData(city.lat, city.long)
				const data = await getTestData()
				return [cityLocality, cityRegion, cityLat, cityLong, data]
			})
			const cityData = await Promise.all(getCityData)
			makeCards(cityData)
			props.markLoaded(cityData)
		}
	}

	const makeCards = (data: Array<any>) => {
		const cardList = data.map(city => {
			return (
				<Card
					lat={city[2]}
					long={city[3]}
					temp={city[4].temp}
					aqi={city[4].aqi}
					aqiCat={city[4].aqiCat}
					uvi={city[4].uvi}
					icon={city[4].icon}
					locality={city[0]}
					region={city[1]}
					key={city[0]}
					getMatchDetails={props.getMatchDetails}
					getAllDetailsData={props.getAllDetailsData}
				/>
			)
		})
		setCardList(cardList)
	}

	useEffect(() => {
		cityDetails()
	}, [])

	const newsCards = [
  <a
   href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html"
	 target="_blank"
	 rel="noopener noreferrer"
	 key="1"
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
	 key="2"
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
	 key="3"
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
	 key="4"
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
	 key="5"
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
 ]

	return (
		<section className="home">
			<h2 className="carousel-header">Popular Destinations</h2>
			<div className="card-carousel">
        {cardList.slice(0, 5)}
			</div>
			<h2 className="carousel-header">Lowest Ozone Pollution</h2>
			<div className="card-carousel">
				{cardList.slice(5, 10)}
			</div>
			<h2 className="carousel-header">Lowest Particle Pollution</h2>
			<div className="card-carousel">
				{cardList.slice(10, 15)}
			</div>
			<h2 className="carousel-header">Pertinent Readings</h2>
			<div className="card-carousel">
				{newsCards}
			</div>
		</section>
	)
}

export default Home