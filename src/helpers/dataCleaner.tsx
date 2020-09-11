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
    if (deg > 337.5 || deg < 22.6) {
      direction = 'N'
    }
    if (deg > 22.5 || deg < 67.6) {
      direction = 'NE'
    }
    if (deg > 67.5 || deg < 112.6) {
      direction = "E";
    }
    if (deg > 112.5 || deg < 157.6) {
      direction = "SE";
    }
    if (deg > 157.5 || deg < 202.6) {
      direction = "S";
    }
    if (deg > 202.5 || deg < 247.6) {
      direction = "SW";
    }
    if (deg > 247.5 || deg < 292.6) {
      direction = "W";
    }
    if (deg > 292.5 || deg < 337.6) {
      direction = "NW";
    }
    return direction;
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

      
    })


  // const airQualityData: {} = await getAirQualityData(
  //   coordinates[0].latitude,
  //   coordinates[0].longitude
  // ).then(airData => data.push(airData))

  
  
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


//Weather Api
// current:
  // clouds: 75
  // dew_point: 275.29
  // dt: 1599784636
  // feels_like: 279.61
  // humidity: 57
  // pressure: 1025
  // sunrise: 1599741419
  // sunset: 1599787003
  // temp: 283.43
  // visibility: 10000
//      weather: Array(1)
//      0:
//      description: "broken clouds"
//      icon: "04d"
//      id: 803
//      main: "Clouds"
// __proto__: Object
// length: 1
// __proto__: Array(0)
  // wind_deg: 110
  // wind_speed: 3.1
// __proto__: Object
// daily: Array(8)
// 0:
// clouds: 69
// dew_point: 273.23
// dt: 1599760800
// feels_like: {day: 281.21, night: 279.72, eve: 279.59, morn: 274.7}
// humidity: 45
// pop: 0.2
// pressure: 1025
// sunrise: 1599741419
// sunset: 1599787003
// temp: {day: 284.64, min: 278.17, max: 286.95, night: 283.96, eve: 283.43, …}
// weather: [{…}]
// wind_deg: 95
// wind_speed: 2.06
// __proto__: Object
// 1: {dt: 1599847200, sunrise: 1599827874, sunset: 1599873305, temp: {…}, feels_like: {…}, …}
// 2: {dt: 1599933600, sunrise: 1599914329, sunset: 1599959606, temp: {…}, feels_like: {…}, …}
// 3: {dt: 1600020000, sunrise: 1600000784, sunset: 1600045907, temp: {…}, feels_like: {…}, …}
// 4: {dt: 1600106400, sunrise: 1600087240, sunset: 1600132208, temp: {…}, feels_like: {…}, …}
// 5: {dt: 1600192800, sunrise: 1600173695, sunset: 1600218509, temp: {…}, feels_like: {…}, …}
// 6: {dt: 1600279200, sunrise: 1600260150, sunset: 1600304809, temp: {…}, feels_like: {…}, …}
// 7: {dt: 1600365600, sunrise: 1600346605, sunset: 1600391109, temp: {…}, feels_like: {…}, …}
// length: 8
// __proto__: Array(0)
// hourly: Array(48)
// 0:
// clouds: 75
// dew_point: 275.29
// dt: 1599782400
// feels_like: 279.59
// humidity: 57
// pop: 0.04
// pressure: 1025
// temp: 283.43
// visibility: 10000
// weather: [{…}]
// wind_deg: 24
// wind_speed: 3.13
// __proto__: Object
// 1: {dt: 1599786000, temp: 284.4, feels_like: 280.18, pressure: 1024, humidity: 55, …}
// 2: {dt: 1599789600, temp: 284.61, feels_like: 280.38, pressure: 1024, humidity: 56, …}
// 3: {dt: 1599793200, temp: 284.45, feels_like: 280.29, pressure: 1024, humidity: 58, …}
// 4: {dt: 1599796800, temp: 283.69, feels_like: 279.11, pressure: 1024, humidity: 56, …}
// 5: {dt: 1599800400, temp: 283.19, feels_like: 279.68, pressure: 1024, humidity: 58, …}
// 6: {dt: 1599804000, temp: 283.28, feels_like: 280.63, pressure: 1024, humidity: 58, …}
// 7: {dt: 1599807600, temp: 282.75, feels_like: 280.17, pressure: 1023, humidity: 62, …}
// 8: {dt: 1599811200, temp: 282.28, feels_like: 279.53, pressure: 1023, humidity: 65, …}
// 9: {dt: 1599814800, temp: 281.96, feels_like: 279.63, pressure: 1023, humidity: 68, …}
// 10: {dt: 1599818400, temp: 281.79, feels_like: 279.53, pressure: 1023, humidity: 68, …}
// 11: {dt: 1599822000, temp: 281.64, feels_like: 279.7, pressure: 1023, humidity: 69, …}
// 12: {dt: 1599825600, temp: 281.79, feels_like: 279.91, pressure: 1023, humidity: 67, …}
// 13: {dt: 1599829200, temp: 282.06, feels_like: 279.27, pressure: 1023, humidity: 64, …}
// 14: {dt: 1599832800, temp: 282.98, feels_like: 279.2, pressure: 1022, humidity: 55, …}
// 15: {dt: 1599836400, temp: 284.83, feels_like: 280.92, pressure: 1021, humidity: 44, …}
// 16: {dt: 1599840000, temp: 287.14, feels_like: 283.23, pressure: 1020, humidity: 37, …}
// 17: {dt: 1599843600, temp: 289.25, feels_like: 285.94, pressure: 1020, humidity: 32, …}
// 18: {dt: 1599847200, temp: 290.66, feels_like: 287.21, pressure: 1019, humidity: 29, …}
// 19: {dt: 1599850800, temp: 292.59, feels_like: 289.27, pressure: 1018, humidity: 26, …}
// 20: {dt: 1599854400, temp: 293.56, feels_like: 287.94, pressure: 1017, humidity: 25, …}
// 21: {dt: 1599858000, temp: 294.53, feels_like: 288.52, pressure: 1016, humidity: 24, …}
// 22: {dt: 1599861600, temp: 295.35, feels_like: 289.96, pressure: 1015, humidity: 22, …}
// 23: {dt: 1599865200, temp: 296.11, feels_like: 291.09, pressure: 1015, humidity: 21, …}
// 24: {dt: 1599868800, temp: 295.44, feels_like: 290.23, pressure: 1015, humidity: 22, …}
// 25: {dt: 1599872400, temp: 293.93, feels_like: 290.57, pressure: 1016, humidity: 26, …}
// 26: {dt: 1599876000, temp: 292.71, feels_like: 289.34, pressure: 1017, humidity: 28, …}
// 27: {dt: 1599879600, temp: 291.84, feels_like: 288.78, pressure: 1018, humidity: 31, …}
// 28: {dt: 1599883200, temp: 290.79, feels_like: 286.94, pressure: 1019, humidity: 33, …}
// 29: {dt: 1599886800, temp: 289.81, feels_like: 286.05, pressure: 1019, humidity: 35, …}
// 30: {dt: 1599890400, temp: 289.06, feels_like: 285.42, pressure: 1018, humidity: 36, …}
// 31: {dt: 1599894000, temp: 288.54, feels_like: 284.74, pressure: 1018, humidity: 36, …}
// 32: {dt: 1599897600, temp: 287.96, feels_like: 284.03, pressure: 1018, humidity: 36, …}
// 33: {dt: 1599901200, temp: 287.56, feels_like: 284.31, pressure: 1019, humidity: 37, …}
// 34: {dt: 1599904800, temp: 287.25, feels_like: 284.24, pressure: 1019, humidity: 37, …}
// 35: {dt: 1599908400, temp: 287.02, feels_like: 283.98, pressure: 1020, humidity: 38, …}
// 36: {dt: 1599912000, temp: 286.68, feels_like: 283.27, pressure: 1020, humidity: 38, …}
// 37: {dt: 1599915600, temp: 286.63, feels_like: 282.97, pressure: 1021, humidity: 38, …}
// 38: {dt: 1599919200, temp: 287.8, feels_like: 284.21, pressure: 1020, humidity: 36, …}
// 39: {dt: 1599922800, temp: 290.13, feels_like: 286.57, pressure: 1019, humidity: 30, …}
// 40: {dt: 1599926400, temp: 292.78, feels_like: 289.45, pressure: 1018, humidity: 26, …}
// 41: {dt: 1599930000, temp: 295.27, feels_like: 292.32, pressure: 1018, humidity: 22, …}
// 42: {dt: 1599933600, temp: 296.97, feels_like: 293.58, pressure: 1017, humidity: 19, …}
// 43: {dt: 1599937200, temp: 298.08, feels_like: 294.44, pressure: 1016, humidity: 18, …}
// 44: {dt: 1599940800, temp: 299.11, feels_like: 295.63, pressure: 1016, humidity: 17, …}
// 45: {dt: 1599944400, temp: 299.51, feels_like: 295.81, pressure: 1015, humidity: 16, …}
// 46: {dt: 1599948000, temp: 299.69, feels_like: 296.1, pressure: 1015, humidity: 16, …}
// 47: {dt: 1599951600, temp: 299.56, feels_like: 296.13, pressure: 1015, humidity: 16, …}
// length: 48
// __proto__: Array(0)
// lat: 39.74
// lon: -104.98
// minutely: Array(61)
// 0:
// dt: 1599784680
// precipitation: 0
// __proto__: Object
// 1: {dt: 1599784740, precipitation: 0}
// 2: {dt: 1599784800, precipitation: 0}
// 3: {dt: 1599784860, precipitation: 0}
// 4: {dt: 1599784920, precipitation: 0}
// 5: {dt: 1599784980, precipitation: 0}
// 6: {dt: 1599785040, precipitation: 0}
// 7: {dt: 1599785100, precipitation: 0}
// 8: {dt: 1599785160, precipitation: 0}
// 9: {dt: 1599785220, precipitation: 0}
// 10: {dt: 1599785280, precipitation: 0}
// 11: {dt: 1599785340, precipitation: 0}
// 12: {dt: 1599785400, precipitation: 0}
// 13: {dt: 1599785460, precipitation: 0}
// 14: {dt: 1599785520, precipitation: 0}
// 15: {dt: 1599785580, precipitation: 0}
// 16: {dt: 1599785640, precipitation: 0}
// 17: {dt: 1599785700, precipitation: 0}
// 18: {dt: 1599785760, precipitation: 0}
// 19: {dt: 1599785820, precipitation: 0}
// 20: {dt: 1599785880, precipitation: 0}
// 21: {dt: 1599785940, precipitation: 0}
// 22: {dt: 1599786000, precipitation: 0}
// 23: {dt: 1599786060, precipitation: 0}
// 24: {dt: 1599786120, precipitation: 0}
// 25: {dt: 1599786180, precipitation: 0}
// 26: {dt: 1599786240, precipitation: 0}
// 27: {dt: 1599786300, precipitation: 0}
// 28: {dt: 1599786360, precipitation: 0}
// 29: {dt: 1599786420, precipitation: 0}
// 30: {dt: 1599786480, precipitation: 0}
// 31: {dt: 1599786540, precipitation: 0}
// 32: {dt: 1599786600, precipitation: 0}
// 33: {dt: 1599786660, precipitation: 0}
// 34: {dt: 1599786720, precipitation: 0}
// 35: {dt: 1599786780, precipitation: 0}
// 36: {dt: 1599786840, precipitation: 0}
// 37: {dt: 1599786900, precipitation: 0}
// 38: {dt: 1599786960, precipitation: 0}
// 39: {dt: 1599787020, precipitation: 0}
// 40: {dt: 1599787080, precipitation: 0}
// 41: {dt: 1599787140, precipitation: 0}
// 42: {dt: 1599787200, precipitation: 0}
// 43: {dt: 1599787260, precipitation: 0}
// 44: {dt: 1599787320, precipitation: 0}
// 45: {dt: 1599787380, precipitation: 0}
// 46: {dt: 1599787440, precipitation: 0}
// 47: {dt: 1599787500, precipitation: 0}
// 48: {dt: 1599787560, precipitation: 0}
// 49: {dt: 1599787620, precipitation: 0}
// 50: {dt: 1599787680, precipitation: 0}
// 51: {dt: 1599787740, precipitation: 0}
// 52: {dt: 1599787800, precipitation: 0}
// 53: {dt: 1599787860, precipitation: 0}
// 54: {dt: 1599787920, precipitation: 0}
// 55: {dt: 1599787980, precipitation: 0}
// 56: {dt: 1599788040, precipitation: 0}
// 57: {dt: 1599788100, precipitation: 0}
// 58: {dt: 1599788160, precipitation: 0}
// 59: {dt: 1599788220, precipitation: 0}
// 60: {dt: 1599788280, precipitation: 0}
// length: 61
// __proto__: Array(0)
// timezone: "America/Denver"
// timezone_offset: -21600