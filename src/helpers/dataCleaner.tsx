import { getCoordinates, getWeatherData, getAirQualityData} from './apiCalls';


// export const getAllData = async (query: string) => {
export const getAllData = async (lat: number, long: number) => {
  const data: any = {};

  // const kelvinToFahrenheit = (kelvin: number) => {
  //   return (kelvin - 273.15) * 1.8 + 32
  // }

  // const kelvinToCelcius = (kelvin: number) => {
  //   return kelvin - 273.15;
  // }

  // const windDirection = (deg: number) => {
  //   let direction: string = ''

  //   if (deg > 337.5 && deg < 360.1 ||deg >= 0 && deg < 22.6) {
  //     direction = 'N'
  //   }
  //   if (deg > 22.5 && deg < 67.6) {
  //     direction = 'NE'
  //   }
  //   if (deg > 67.5 && deg < 112.6) {
  //     direction = "E"
  //   }
  //   if (deg > 112.5 && deg < 157.6) {
  //     direction = "SE"
  //   }
  //   if (deg > 157.5 && deg < 202.6) {
  //     direction = "S"
  //   }
  //   if (deg > 202.5 && deg < 247.6) {
  //     direction = "SW"
  //   }
  //   if (deg > 247.5 && deg < 292.6) {
  //     direction = "W"
  //   }
  //   if (deg > 292.5 && deg < 337.6) {
  //     direction = "NW"
  //   }
  //   if(deg > 360 || deg < 0) {
  //     direction = 'N/A'
  //   }

  //   return direction;
  // }

  // const coordinates: any = await getCoordinates(query);

  // const weatherData = await getWeatherData(
  //   coordinates[0].latitude,
  //   coordinates[0].longitude
  // );

  // const airQualityData = await getAirQualityData(
  //   coordinates[0].latitude,
  //   coordinates[0].longitude
	// );
	
  const weatherData = await getWeatherData(lat, long);

  const airQualityData = await getAirQualityData(lat, long);

  data.currentAir = airQualityData[5];
	// data.locationData = coordinates[0];
  data.currentWeather = weatherData.current;
  data.weeklyWeather = weatherData.daily;  
	
  console.log(data)
  return data;
}



