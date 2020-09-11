import { KeyObject } from 'crypto';
import { getCoordinates, getWeatherData, getAirQualityData} from './apiCalls';


export const getAllData = async (query: string) => {
  const data: any = {}

  const kelvinToFahrenheit = (kelvin: number) => {
    return (kelvin - 273.15) * 1.8 + 32
  }

  const kelvinToCelcius = (kelvin: number) => {
    return kelvin - 273.15;
  }

  const windDirection = (deg: number) => {
    let direction: string = ''

    if (deg > 337.5 && deg < 360.1 ||deg >= 0 && deg < 22.6) direction = 'N'
    if (deg > 22.5 && deg < 67.6) direction = 'NE'
    if (deg > 67.5 && deg < 112.6) direction = "E"
    if (deg > 112.5 && deg < 157.6) direction = "SE"
    if (deg > 157.5 && deg < 202.6) direction = "S"
    if (deg > 202.5 && deg < 247.6) direction = "SW"
    if (deg > 247.5 && deg < 292.6) direction = "W"
    if (deg > 292.5 && deg < 337.6) direction = "NW"
    if(deg > 360 || deg < 0) direction = 'N/A'

    return direction;
  }

  const stateName = (state: string) => {
    const stateCodes = {
      AL: 'Alabama',
      AK: 'Alaska',
      AZ: 'Arizona',
      CA: 'California',
      CO: 'Colorado',
      CT: 'Connecticut',
      DE: 'Delaware',
      FL: 'Florida',
      GA: 'Georgia',
      HI: 'Hawaii',
      ID: 'Idaho',
      IL: 'Illinois',
      IN: 'Indiana',
      IA: 'Iowa',
      KS: 'Kansas',
      KY: 'Kentucky',
      LA: 'Louisiana',
      ME: 'Maine',
      MD: 'Maryland',
      MA: 'Massachusetts',
      MI: 'Michigan',
      MN: 'Minnesota',
      MS: 'Mississippi',
      MO: 'Missouri',
      MT: 'Montana',
      NE: 'Nebraska',
      NV: 'Nevada',
      NH: 'New Hampshire',
      NJ: 'New Jersey',
      NM: 'New Mexico',
      NY: 'New York',
      NC: 'North Carolina',
      ND: 'North Dakota',
      OH: 'Ohio',
      OK: 'Oklahoma',
      OR: 'Oregon',
      PA: 'Pennsylvania',
      RI: 'Rhode Island',
      SC: 'South Carolina',
      SD: 'South Dakota',
      TN: 'Tennessee',
      TX: 'Texas',
      UT: 'Utah',
      VT: 'Vermont',
      VA: 'Virginia',
      WA: 'Washington',
      WV: 'West Virginia',
      WI: 'Wisconsin',
      WY: 'Wyoming'
    }

    return stateCodes[state]
  }

  const coordinates: any = await getCoordinates(query)

  const weatherData = await getWeatherData(
    coordinates[0].latitude, 
    coordinates[0].longitude)
    .then(weather => {
      data.id = weather.current.weather[0].id || Date.now()
      data.current.humidity = weather.current.humidity || 'no data'
      data.current.visibility = weather.current.visibility || 'no data'
      data.current.weatherDetail = weather.current.weather[0].description || 'no data'
      data.current.windDirection = weather.current.wind_deg || 'no data'
      data.current.windSpeed = weather.current.wind_speed || 'no data'
      data.current.uvi = weather.current.uvi
      data.sevenDay = weather.daily
    })


  const airQualityData: {} = await getAirQualityData(
    coordinates[0].latitude,
    coordinates[0].longitude
  ).then(airData => {
    data.state = stateName(airData[0].StateCode) || 'N/A'
    data.aqi[0] = airData[0].aqi
    data.airNotes = airData[0].Discussion || 'no data'
    data.airCatagoryLevel = airData[0].Catagory.Name
  })

  
  
    // id: weatherData.current.weather.id || Date.now(),
    // airQualityLevel: airQualityData.Catagory.Name,
    // aqi: airQualityData.AQI,
    // date: airQualityData.DateForecast,
    // airQualityNote: airQualityData.Discussion || "",
    // state: airQualityData.StateCode,
    // feelsLike: {
    //   fahrenheit: (weatherData.current.temp - 273.15 * 1.8) + 32,
    //   celcius: weatherData.current.temp - 273.15,
    // },
    // humidity: weatherData.current.humidity,
    // visibility: weatherData.current.visibility,
    // weatherDetail: weatherData.current.weather.description,
    // windDirection: weatherData.current.wind_deg,
    // windSpeed: weatherData.current.wind_speed,

 
  console.log(data)
}

// Air Q API
// AQI: -1;
// ActionDay: false;
// Category: Name: "Good";
// Number: 1;
// __proto__: Object;
// DateForecast: "2020-09-11 ";
// DateIssue: "2020-09-10 ";
// Discussion: "";
// Latitude: 39.768;
// Longitude: -104.873;
// ParameterName: "O3";
// ReportingArea: "Denver-Boulder";
// StateCode: "CO";


