import './About.scss'
import React from "react";
import aqtable from '../assets/ap3.jpg'
import waterdrop from "../assets/water-drop.png";
import eye from "../assets/eye.png";
import sun from "../assets/sun.png";
// import bee from "../assets/bee.png";
import lungs from "../assets/lungs.png";
import cloudyNight from "../assets/02n.png";
import wind from "../assets/wind.png";
import clearDay from "../assets/01d.png";
import clearNight from "../assets/01n.png";
import cloudyDay from "../assets/02d.png";
import lightClouds from "../assets/03d.png";
import doubleCloud from "../assets/04d.png";
import rain from "../assets/09d.png";
import daySunnyStorm from "../assets/10d.png";
import thunderstorm from "../assets/11d.png";
import thunderRain from "../assets/11n.png";
import snow from "../assets/13d.png";
import mist from "../assets/50d.png";


const About: React.FC = () => {
  return (
   <section className="about-section">
    <span className="intro-text">
     <h2>Plan. Go. Breathe.</h2>
     <p>
      At <b>Breathe AmAIRica</b>, we know how important it is for you and your
      loved ones to have accurate weather and air quality information.
      <br />
      <br />
      Our data is updated every 10-60 minutes from local reporting, giving you the most up-to-date
      conditions to plan your local or destination activity. Note: some stations may not report air quality on a given day.
      <br />
      <br />
      Please review the listed charts for optimal site navigation. <br />
      If you seek more information on health, safety, or travel, please follow
      the links below to the appropriate websites.
     </p>
     <a
      href="https://www.stateoftheair.org/city-rankings/compare-your-air.html"
      target="_blank"
      rel="noopener noreferrer"
      className="compare-link"
     >
      Compare Your Air
     </a>
     <span className="info-links">
      <a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer">
       CDC
      </a>
      ||
      <a
       href="https://www.roadtripusa.com/"
       target="_blank"
       rel="noopener noreferrer"
      >
       Road Trip USA
      </a>
      ||
      <a
       href="https://www.active.com/outdoors/articles"
       target="_blank"
       rel="noopener noreferrer"
      >
       Active
      </a>
      ||
      <a
       href="https://travel.usnews.com/"
       target="_blank"
       rel="noopener noreferrer"
      >
       Travel US News
      </a>
      ||
      <a
       href="https://www.stateoftheair.org/"
       target="_blank"
       rel="noopener noreferrer"
      >
       Lung Association of America
      </a>
     </span>
    </span>
    <div className="legends">
     <img
      src={aqtable}
      className="aq-image"
      alt="table of Air Quality information from EPA.gov"
     />
     <div className="legend-table">
      Icon Legend
      <table>
       <tbody>
        <tr>
         <td>
          <img
           src={lungs}
           alt="lungs icon for air quality"
           className="small-weather-icon"
          />
          Air Quality Index
         </td>
         <td>
          <img
           src={sun}
           alt="sun icon for UV index"
           className="small-weather-icon"
          />
          UV Index
         </td>
        </tr>
        <tr>
         <td>
          <img
           src={wind}
           alt="wind icon for wind speed direction"
           className="small-weather-icon"
          />
          Wind Speed & Direction
         </td>
         <td>
          <img
           src={eye}
           alt="eye icon for visibility"
           className="small-weather-icon"
          />
          Visibility Distance
         </td>
        </tr>
        <tr>
         <td>
          <img src={clearDay} alt="sun icon" className="small-weather-icon" />
          Sunny Day
         </td>
         <td>
          <img
           src={clearNight}
           alt="moon icon"
           className="small-weather-icon"
          />
          Clear Night
         </td>
        </tr>
        <tr>
         <td>
          <img
           src={cloudyDay}
           alt="clouds in front of moon icon"
           className="small-weather-icon"
          />
          Cloudy Day
         </td>
         <td>
          <img
           src={cloudyNight}
           alt="single cloud icon"
           className="small-weather-icon"
          />
          Cloudy Night
         </td>
        </tr>
        <tr>
         <td>
          <img
           src={doubleCloud}
           alt="wind icon for wind speed direction"
           className="small-weather-icon"
          />
          Very Cloudy
         </td>
         <td>
          <img src={lightClouds} alt="snow icon" className="small-weather-icon" />
          Light Clouds
         </td>
        </tr>
        <tr>
         <td>
          <img
           src={waterdrop}
           alt="rain droplet icon for precipitation"
           className="small-weather-icon"
          />
          Chance of Precipitation
         </td>
         <td>
          <img
           src={rain}
           alt="rain cloud icon for raining forecast"
           className="small-weather-icon"
          />
          Rain
         </td>
        </tr>
        <tr>
         <td>
          <img
           src={thunderstorm}
           alt="sun and stormy weather icon"
           className="small-weather-icon"
          />
          Thunderstorm
         </td>
         <td>
          <img
           src={thunderRain}
           alt="thunderstorm with rain icon"
           className="small-weather-icon"
          />
          Heavy Rain
         </td>
        </tr>
        <tr>
         <td>
          <img src={mist} alt="light rain" className="small-weather-icon" />
          Light Mist
         </td>
         <td>
          <img
           src={snow}
           alt="clouds in front of moon icon"
           className="small-weather-icon"
          />
          Snow
         </td>
        </tr>
        <tr>
         <td>
          <img
           src={daySunnyStorm}
           alt="light rain"
           className="small-weather-icon"
          />
          Scattered Storms Day
         </td>
         <td>
          <img
           src={thunderstorm}
           alt="clouds in front of moon icon"
           className="small-weather-icon"
          />
          Scattered Storms Night
         </td>
        </tr>
       </tbody>
      </table>
     </div>
    </div>
    <div className="credits">
      <span className='devs'>
        <p>App Developed by:</p>
        <a
          href="https://github.com/ErinUntermeyer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Erin Untermeyer
        </a>
        <a
          href="https://github.com/JoshSevy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Sevy
        </a>
        <a
          href="https://github.com/leighlars"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leigh Larson
        </a>
      </span>
        <span className='sources'>
        <p>Sources:</p>
        <a
          href="https://www.airnow.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AirNow API
        </a>{" "}
        <a
          href="https://openweathermap.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Weather Map API
        </a>
        </span>
      </div>
   </section>
  );
}

export default About