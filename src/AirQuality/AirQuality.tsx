import React from 'react'
import './AirQuality.scss'
import eye from "../assets/eye.png";
import lungs from "../assets/lungs.png";
import sun from "../assets/sun.png";

const AirQuality = (props: any) => {
  return (
   <article className="aq-section">
    {/* <span className='info-box'>
        <img
          src={lungs}
          alt="lungs icon for air quality"
          className="small-weather-icon"
        />
        <p className="type">Air Quality Index</p>
        <p className="unit">{props.detailsData.aqi}</p> 
      </span> */}
    <span className="info-box-aq">
     <img
      src={sun}
      alt="sun icon for UV index"
      className="small-weather-icon"
     />
     <p className="type">UV Index</p>
     <p className="unit">4 of 10</p>
    </span>
    <span className="info-box-aq">
     <img
      src={eye}
      alt="eye icon for visibility"
      className="small-weather-icon"
     />
     <p className="type">Visibility</p>
     <p className="unit">5 mi</p>
    </span>
    {/*  (props.detailsData.currentWeather.visibility / 5280).toFixed(1)}
     <img

								src={bee}
								alt="bee icon for allergies and pollen"
								className="small-bee-icon"
							/>
							<p className="type-allergy">Allergens</p>
							<p className="unit-allergy">2.0</p> */}
   </article>
  );
}


export default AirQuality