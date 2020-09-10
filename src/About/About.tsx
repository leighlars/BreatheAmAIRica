import './About.scss'
import React, { useState, useEffect } from "react";
import aqtable from '../assets/ap3.jpg'

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
    <img
     src={aqtable}
     className="aq-image"
     alt="table of Air Quality information from EPA.gov"
    />
    <span className="credits">
     <p>App Developed by:</p>
     <br/>
     <a href="https://github.com/ErinUntermeyer">Erin Untermeyer</a>
     <a href="https://github.com/JoshSevy">Josh Sevy</a>
     <a href="https://github.com/leighlars">Leigh Larson</a>
     <p>Data Sources:</p>
     <br/>
     <a href="https://www.iqair.com/us/">IQAir</a>{" "}
     <a href="https://openweathermap.org/">Open Weather Map</a>
    </span>
   </section>
  );
}

export default About