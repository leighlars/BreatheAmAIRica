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
     <h2>Plan. Research. Experience.</h2>
     <p>
      At <b>Weather or Not</b>, we know how important it is to you and your
      loved ones to have accurate weather and air quality information. <br />{" "}
      <br />
      Our data is updated every 10-60 minutes, giving you the most updated
      conditions to help you plan for your enjoyment and peace of mind.
     </p>
    </span>
    <div className="legends">
     <img
      src={aqtable}
      className="aq-image"
      alt="table of Air Quality information from EPA.gov"
     />
     <table>
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
     <br />
     <a href="https://github.com/ErinUntermeyer">Erin Untermeyer</a>
     <a href="https://github.com/JoshSevy">Josh Sevy</a>
     <a href="https://github.com/leighlars">Leigh Larson</a>
     <p>Data Sources:</p>
     <br />
     <a href="https://www.iqair.com/us/">IQAir</a>{" "}
     <a href="https://openweathermap.org/">Open Weather Map</a>
    </span>
   </section>
  );
}

export default About