import './About.scss'
import React, { useState, useEffect } from "react";
import aqtable from '../assets/aqtable2.jpeg'

const About: React.FC = () => {
  return (
    <section className='about-section'>
      <span className='intro-text'>
        <h2>Plan. Research. Experience.</h2>
        <p>At <b>Weather or Not</b>, we know how important it is to you 
        and your loved ones to have accurate weather and air quality information. <br/> <br/>
        Our data is updated every 10-60 minutes, giving you the most updated conditions to help you plan for your enjoyment and peace of mind.
        </p>
      </span>
      <img src={aqtable} className='aq-image' alt='table of Air Quality information from EPA.gov'/>
    </section>)
}

export default About