import React from 'react'
import './Location.scss'
import cloudyNight from '../assets/02n.png'
import waterdrop from '../assets/water-drop.png'
import raindrop from '../assets/liquid.png'

const Location: React.FC = () => {
	return (
		<section className="location-section">
			<h2 className='current-city'>Denver</h2>
			<h3 className='current-region'>Colorado, USA</h3>
			<div className='current-quick-box'>
				<h4 className='current-header'>HAPPENING NOW</h4>
				<p className='current-date'><b>Thurs 10</b> | 10:30pm</p>
				<span className='current-weather'>
					<div className='current-weather-left'>
						<h5 className='current-temp'>35&deg;</h5>
						<img src={cloudyNight} alt='clouds covering moon' className='large-weather-icon'/>
					</div>
					<div className='current-weather-right'>
						
						<img src={waterdrop} alt='raindroplets' className='small-weather-icon'/> 
						<p className='current-precipitation'>10%</p>
					</div>

				</span>

			</div>
		</section>
	)
}

export default Location