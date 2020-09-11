import './About.scss'
import React, { useState, useEffect } from "react";
import aqtable from '../assets/ap3.jpg'
import cloudyNight from "../assets/02n.png";
import waterdrop from "../assets/water-drop.png";
import eye from "../assets/eye.png";
import sun from "../assets/sun.png";
import bee from "../assets/bee.png";
import lungs from "../assets/lungs.png";
import wind from "../assets/wind.png";
import clearDay from "../assets/01d.png";
import clearNight from "../assets/01n.png";
import cloudyDay from "../assets/02d.png";
import lightClouds from "../assets/03d.png";
import rain from "../assets/09d.png";
import sunnyStorms from "../assets/10n.png";
import thunderstorm from "../assets/11d.png";
import snow from "../assets/13d.png";


const About: React.FC = () => {
  return (
   <section className="about-section">
    <span className="intro-text">
     <h2>Plan. Go. Breathe.</h2>
     <p>
      At <b>Breathe AmAIRica</b>, we know how important it is for you and your
      loved ones to have accurate weather and air quality information.
      <br />
      <br/>
      Whether you're planning a trip or relocating across the country, or just a walk around the block with your dog, <br/>
      our data is updated every 10-60 minutes, giving you the most updated conditions to help you plan your next activity. 
      <br />
      <br />
      Please review the listed charts for optimal site navigation. <br />
      If you seek more information on health, safety, or travel, please follow
      the links below to the appropriate websites.
     </p>
     <a
      href="https://www.stateoftheair.org/city-rankings/compare-your-air.html"
      target="_blank"
      className="compare-link"
     >
      Compare Your Air
     </a>
     <span className="info-links">
      <a href="https://www.cdc.gov/" target="_blank">
       CDC
      </a>
      ||
      <a href="https://www.roadtripusa.com/" target="_blank">
       Road Trip USA
      </a>
      ||
      <a href="https://www.active.com/outdoors/articles" target="_blank">
       Active
      </a>
      ||
      <a href="https://travel.usnews.com/" target="_blank">
       Travel US News
      </a>
      ||
      <a href="https://www.stateoftheair.org/" target="_blank">
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
     <table>
      <thead>Icon Legend</thead>
      <tbody>
       <tr>
        <td>
         <img
          src={lungs}
          alt="lungs icon for air quality"
          className="small-weather-icon"
         />
         <p className="type">Air Quality Index</p>
        </td>
        <td>
         <img
          src={sun}
          alt="sun icon for UV index"
          className="small-weather-icon"
         />
         <p className="type">UV Index</p>
        </td>
       </tr>
       <tr>
        <td>
         <img
          src={bee}
          alt="bee icon for allergies and pollen"
          className="small-weather-icon"
         />
         <p className="type">Allergens Rating</p>
        </td>
        <td>
         <img
          src={eye}
          alt="eye icon for visibility"
          className="small-weather-icon"
         />
         <p className="type">Visibility Distance</p>
        </td>
       </tr>
       <tr>
        <td>
         <img
          src={wind}
          alt="wind icon for wind speed direction"
          className="small-weather-icon"
         />
         <p className="type">Wind Speed & Direction</p>
        </td>
        <td>
         <img src={snow} alt="snow icon" className="small-weather-icon" />
         <p className="type">Snow</p>
        </td>
       </tr>
       <tr>
        <td>
         <img src={clearDay} alt="sun icon" className="small-weather-icon" />
         <p className="type">Sunny Day</p>
        </td>
        <td>
         <img src={clearNight} alt="moon icon" className="small-weather-icon" />
         <p className="type">Clear Night</p>
        </td>
       </tr>
       <tr>
        <td>
         <img
          src={waterdrop}
          alt="rain droplet icon for precipitation"
          className="small-weather-icon"
         />
         <p className="type">Chance of Precipitation</p>
        </td>
        <td>
         <img
          src={rain}
          alt="rain cloud icon for raining forecast"
          className="small-weather-icon"
         />
         <p className="type">Rain</p>
        </td>
       </tr>
       <tr>
        <td>
         <img
          src={cloudyNight}
          alt="clouds covering moon for current sky"
          className="small-weather-icon"
         />
         <p className="type">Cloudy</p>
        </td>
        <td>
         <img
          src={cloudyDay}
          alt="clouds in front of moon icon"
          className="small-weather-icon"
         />
         <p className="type">Cloudy Night</p>
        </td>
        <td>
         <img
          src={lightClouds}
          alt="single cloud icon"
          className="small-weather-icon"
         />
         <p className="type">Light Clouds</p>
        </td>
       </tr>
       <tr>
        <td>
         <img
          src={sunnyStorms}
          alt="sun and stormy weather icon"
          className="small-weather-icon"
         />
         <p className="type">Mix sun & storms</p>
        </td>
        <td>
         <img
          src={thunderstorm}
          alt="thunderstorm icon"
          className="small-weather-icon"
         />
         <p className="type">Thunderstorm</p>
        </td>
       </tr>
      </tbody>
     </table>
    </div>
    <span className="credits">
     <p>App Developed by:</p>
     <a href="https://github.com/ErinUntermeyer" target="_blank">
      Erin Untermeyer
     </a>
     <a href="https://github.com/JoshSevy" target="_blank">
      Josh Sevy
     </a>
     <a href="https://github.com/leighlars" target="_blank">
      Leigh Larson
     </a>
     <p>Sources:</p>
     <a href="https://www.airnow.gov/" target="_blank">
      AirNow API
     </a>{" "}
     <a href="https://openweathermap.org/" target="_blank">
      Open Weather Map API
     </a>
    </span>
   </section>
  );
}

export default About