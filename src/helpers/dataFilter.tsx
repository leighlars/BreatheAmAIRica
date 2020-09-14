import { getCoordinates, getWeatherData, getAirQualityData} from './apiCalls';


// export const getAllData = async (query: string) => {
export const getAllData = async (lat: number, long: number) => {
  const data: any = {};
	
  const weatherData = await getWeatherData(lat, long);
  // const airQualityData = await getAirQualityData(lat, long);
  // data.currentAir = airQualityData;
	// data.locationData = coordinates[0];
  data.currentWeather = weatherData.current;
  data.weeklyWeather = weatherData.daily;  
	
  console.log(data.currentAir)
  return data;
}

export const getHomeData = async (lat: number, long: number) => {
	const data: any = {}
	const weather = await getWeatherData(lat, long)
	data.temp = +((weather.current.temp - 273.15) * 1.8 + 32).toFixed(0)
	data.uvi = +(Math.round(weather.current.uvi)).toFixed(0)
	data.icon = weather.current.weather[0].icon
	return data
}



