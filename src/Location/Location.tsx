import React, { useState, useEffect } from 'react'
import WeeklyData from '../WeeklyData/WeeklyData'
import './Location.scss'
import cloudyNight from '../assets/02n.png'
import waterdrop from '../assets/water-drop.png'
import eye from '../assets/eye.png'
import sun from '../assets/sun.png'
import bee from "../assets/bee.png"
import lungs from '../assets/lungs.png'
import wind from '../assets/wind.png'
import { getAllData } from '../helpers/dataCleaner'

import { DetailsProps } from '../helpers/detailsdefinitions'
// import raindrop from '../assets/liquid.png'
// should we break this out into different components?
// feel free to break up lines of text for readability, i'm getting tired




interface LocationProps {
	// getMatchedData: Function
	query: string
	matchDetails: any[]
}

const Location: React.FC<LocationProps> = props => {
	const [detailsData, setDetailsData] = useState<DetailsProps>();
	

	useEffect(() => {
		const getData = async () => {
			const data = await getAllData(props.matchDetails[0], props.matchDetails[1])
			setDetailsData(data)
		}
		getData()
	},[])

	return (
		<section className="location-section">
			<h2 className='current-city'>{props.matchDetails[3]}</h2>
			<h3 className='current-region'>{props.matchDetails[4]}, USA</h3>
			<div className='info-box'>
				<h4 className='info-box-header'>HAPPENING NOW</h4>
				<p className='current-date'>{Date.now().toLocaleString()}</p>
				<article className='current-weather'>
					<div className='current-weather-left'>
						<h5 className='current-temp'>{null}&deg;</h5>
						<img src={cloudyNight} alt='clouds covering moon for current sky' className='large-weather-icon'/>
					</div>
					<div className='current-weather-right'>
						<span className='current-weather-right-top'>
							<img src={wind} alt='wind icon for wind speed direction' className='small-weather-icon'/> 
							<p className='current-wind'>{detailsData.currentWeather.wind_speed} mph / {detailsData.currentWeather.wind_deg}</p>
						</span>
						<span className='current-weather-right-bottom'>
							<img src={waterdrop} alt='rain droplet icon for precipitation' className='small-weather-icon'/> 
							<p className='current-precipitation'>{'Coming Soon'}</p>
						</span>
					</div>
				</article>
			</div>
			<div className='info-box air-quality'>
				<h4 className='info-box-header'>AIR QUALITY</h4>
				<table>
					<tbody>
						<tr>
							<td>
								<img 
								src={lungs} 
								alt='lungs icon for air quality' 
								className="small-weather-icon"/> 
								<p className='type'>Air Quality Index</p>
								<p className='unit'>{detailsData.currentAir.AQI}</p>
							</td>
							<td>
								<img 
									src={sun} 
									alt='sun icon for UV index' 
									className="small-weather-icon"/> 
									<p className='type'>UV Index</p>
									<p className='unit'>{detailsData.currentWeather.uvi} of 10</p>
							</td>
						</tr>
						<tr>
							<td>
								<img 
									src={bee} 
									alt='bee icon for allergies and pollen' 
									className="small-weather-icon"/> 
									<p className='type'>Allergens</p>
									<p className='unit'>no allergy data yet!</p>
							</td>
							<td> 
								<img 
									src={eye} 
									alt='eye icon for visibility' 
									className="small-weather-icon"/> 
									<p className='type'>Visibility</p>
									<p className='unit'>{(detailsData.currentWeather.visibility / 5280).toFixed(1)}mi</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className='info-box hourly-forecast'>
				<h4 className='info-box-header'>HOURLY FORECAST</h4>
			</div>
			<div className='info-box weekly-forecast'>
				<h4 className='info-box-header'>WEEKLY FORECAST</h4>
				<WeeklyData 
						weeklyData={detailsData.weeklyData}
					/>
			</div>
		</section>
	)
}

export default Location