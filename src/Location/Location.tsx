import React from 'react'
import './Location.scss'
import cloudyNight from '../assets/02n.png'
import waterdrop from '../assets/water-drop.png'
import eye from '../assets/eye.png'
import sun from '../assets/sun.png'
import bee from "../assets/bee.png";
import lungs from '../assets/lungs.png'
import wind from '../assets/wind.png'
// import raindrop from '../assets/liquid.png'
// should we break this out into different components?
// feel free to break up lines of text for readability, i'm getting tired

const Location: React.FC = () => {
	return (
		<section className="location-section">
			<h2 className='current-city'>Denver</h2>
			<h3 className='current-region'>Colorado</h3>
			<div className='info-box'>
				<h4 className='info-box-header'>HAPPENING NOW</h4>
				<p className='current-date'><b>Thurs 10</b> | 10:30pm</p>
				<article className='current-weather'>
					<div className='current-weather-left'>
						<h5 className='current-temp'>35&deg;</h5>
						<img src={cloudyNight} alt='clouds covering moon for current sky' className='large-weather-icon'/>
					</div>
					<div className='current-weather-right'>
						<span className='current-weather-right-top'>
							<img src={wind} alt='wind icon for wind speed direction' className='small-weather-icon'/> 
							<p className='current-wind'>10 mph / NW</p>
						</span>
						<span className='current-weather-right-bottom'>
							<img src={waterdrop} alt='rain droplet icon for precipitation' className='small-weather-icon'/> 
							<p className='current-precipitation'>10%</p>
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
								<p className='unit'>28</p>
							</td>
							<td>
								<img 
									src={sun} 
									alt='sun icon for UV index' 
									className="small-weather-icon"/> 
									<p className='type'>UV Index</p>
									<p className='unit'>0 of 10</p>
							</td>
						</tr>
						<tr>
							<td>
								<img 
									src={bee} 
									alt='bee icon for allergies and pollen' 
									className="small-weather-icon"/> 
									<p className='type'>Allergens</p>
									<p className='unit'>Low</p>
							</td>
							<td> 
								<img 
									src={eye} 
									alt='eye icon for visibility' 
									className="small-weather-icon"/> 
									<p className='type'>Visibility</p>
									<p className='unit'>10mi</p>
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
			</div>

		</section>
	)
}

export default Location