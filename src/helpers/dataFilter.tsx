import { getCoordinates, getWeatherData, getAirQualityData} from './apiCalls';


// export const getAllData = async (query: string) => {
export const getAllData = async (lat: number, long: number) => {
  const data: any = {};
	
  const weatherData = await getWeatherData(lat, long);

  // const airQualityData = await getAirQualityData(lat, long);

  // data.currentAir = airQualityData[5];
	// data.locationData = coordinates[0];
  data.currentWeather = weatherData.current;
  data.weeklyWeather = weatherData.daily;  
	
  console.log(data)
  return data;
}



