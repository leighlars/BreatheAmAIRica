import React from 'react';
import cloudyNight from '../assets/02n.png'
import clearDay from "../assets/01d.png";
import clearNight from "../assets/01n.png";
import cloudyDay from "../assets/02d.png";
import lightClouds from "../assets/03d.png";
import doubleCloud from "../assets/04d.png";
import rain from "../assets/09d.png";
import dayStorm from "../assets/10d.png";
import nightStorms from "../assets/10n.png";
import thunderstorm from "../assets/11d.png";
import snow from "../assets/13d.png";
import mist from "../assets/50d.png";

export const degToDirection = (deg: number): string => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(((deg %= 360) < 0 ? deg + 360 : deg) / 45) % 8;
  return directions[index];
};

const kelvinToFahren = (k: number): number => {
  return Math.floor((k - 273.15) * 1.8 + 32);
};


const convertDate = (date: number): string => {
  const dates = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st']

  return dates[date - 1];
}

export const forecastDtDisplay = (dt: number): React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> => {
  const date = new Date(dt * 1000);
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

  const weekDate = convertDate(date.getUTCDate());
  const weekday = days[date.getDay()]
  return <span>{weekday} {weekDate}</span>
}

export const weatherDtDisplay = (dt: number): React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>  => {
  const date = new Date(dt * 1000)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  const currentMonth = months[date.getMonth()]
  const currentDay = days[date.getDay()]
  const currentDate = convertDate(date.getUTCDate())
  return <span>{ currentDay } < br /> { currentMonth } { currentDate } </span>
}

export const weatherIcon = (icon: string) => {
  if (icon === "01d") {
    return <img src={clearDay} alt="Clear Day Icon" className='large-weather-icon' />;
  } else if (icon === "01n") {
    return <img src={clearNight} alt="Clear Night Icon" className='large-weather-icon' />;
  } else if (icon === "02d") {
    return <img src={cloudyDay} alt="Cloudy Day Icon" className='large-weather-icon' />;
  } else if (icon === "02n") {
    return <img src={cloudyNight} alt="Cloudy Night Icon" className='large-weather-icon' />;
  } else if (icon === "03d") {
    return <img src={lightClouds} alt="Light Clouds Icon" className='large-weather-icon' />;
  } else if (icon === "04d" || icon === '04n') {
    return <img src={doubleCloud} alt="Double Clouds Icon" className='large-weather-icon' />;
  } else if (icon === "09d") {
    return <img src={rain} alt="Rain Icon" className='large-weather-icon' />;
  } else if (icon === "10d") {
    return <img src={dayStorm} alt="Day Storm Icon" className='large-weather-icon' />;
  } else if (icon === "10n") {
    return <img src={nightStorms} alt="Night Storm Icon" className='large-weather-icon' />;
  } else if (icon === "11d") {
    return <img src={thunderstorm} alt="Thunderstorm Icon" className='large-weather-icon' />;
  } else if (icon === "13n") {
    return <img src={snow} alt="Snow Icon" className='large-weather-icon' />;
  } else if (icon === "50n" || icon === "50d") {
    return <img src={mist} alt="Mist Icon" className='large-weather-icon' />;
  }
}

export const aqIndex = (aqi: number, aqiCat: string) => {
   const aqiIndex = aqi === -1 ? aqiCat : aqi;
   if (aqiIndex <= 50 || aqiIndex === "Good") {
    return (
     <p className="card-low">
      <b>{aqiIndex}</b>
     </p>
    )
   } else if ((aqiIndex >= 51 && aqiIndex <= 100) || aqiIndex === "Moderate") {
    return (
     <p className="card-moderate">
      <b>{aqiIndex}</b>
     </p>
    );
   } else if (
    (aqiIndex >= 151 && aqiIndex <= 200) ||
    aqiIndex === "Unhealthy"
   ) {
    return (
     <p className="card-high">
      <b>{aqiIndex}</b>
     </p>
    );
   } else if ((aqiIndex >= 201 && aqiIndex <= 300) || aqiIndex === "Very Unhealthy") {
    return (
     <p className="card-very-high">
      <b>{aqiIndex}</b>
     </p>
    );
   } else if (aqiIndex >= 301 || aqiIndex === "Hazardous") {
    return (
     <p className="card-extreme">
      <b>{aqiIndex}</b>
     </p>
    );
   } else {
    return (
     <p className="card-extreme">
      <b>N/A</b>
     </p>
    );
   }
}

export const uvIndex = (uvi: number) => {
   const uviNum = +Math.round(uvi).toFixed(0);
   if (uviNum <= 2) {
    return (
     <p className="card-low">
      <b>{uviNum}</b>
     </p>
    );
   } else if (uviNum >= 3 && uviNum <= 5) {
    return (
     <p className="card-moderate">
      <b>{uviNum}</b>
     </p>
    );
   } else if (uviNum === 6 || uviNum === 7) {
    return (
     <p className="card-high">
      <b>{uviNum}</b>
     </p>
    );
   } else if (uviNum >= 8 && uviNum <= 10) {
    return (
     <p className="card-very-high">
      <b>{uviNum}</b>
     </p>
    );
   } else if (uviNum >= 11) {
    return (
     <p className="card-extreme">
      <b>{uviNum}</b>
     </p>
    );
   } else {
    return (
     <p className="card-extreme">
      <b>N/A</b>
     </p>
    );
   }
};

export const temp = (temp: number) => {
  const temperature =  kelvinToFahren(temp)
   if (temperature <= 32) {
    return (
     <h3 className="card-extreme current-temp">{temperature}&deg;</h3>
    )
   } else if (temperature >= 33 && temperature <= 59) {
    return (
     <h3 className="card-moderate current-temp">{temperature}&deg;</h3>
    )
   } else if (temperature >= 60 && temperature <= 80) {
    return (
     <h3 className="card-high current-temp">{temperature}&deg;</h3>
    )
   } else if (temperature >= 80) {
    return (
     <h3 className="card-very-high current-temp">{temperature}&deg;</h3>
    )
   }
}
  
