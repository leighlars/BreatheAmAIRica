const airQualityKey = 'DACE2187-D810-4B4B-81E4-45AEBAF087A0'
const weatherDataKey = '02a1de26e83e798e7595a522e8e4e9d9'
const weatherDataKey2 = '7b9afd68afe01b32e10130a572c8c564'
const weatherDataKey3 = '346025de560bd5d671b73a88bec2fce6'

export const getCoordinates = (query: string) => {
	return fetch(`http://api.positionstack.com/v1/forward?access_key=e17943cbd88c595c58c3c6ae1840fc33&query=${query}`)
	.then(response => {
		if (response.ok) {
			return response.json()
				.then(data => {
				return data.data
			})
		} else {
			throw response
		}
	})
}

export const getWeatherData = async (lat: number, long: number) => {
  return await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${weatherDataKey3}`
    ).then(parseData => parseData.json()).catch(error => error)

  //   const response = await data;
  //   const parseData = await response.json();
  //   return parseData;
  // } catch (error) {
  //   return error;
  // }
}

export const getAirQualityData = (lat: number, long: number) => {
   return fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
      'Target-URL':
        `http://www.airnowapi.org/aq/forecast/latLong/?format=application/json&latitude=${lat}&longitude=${long}&API_KEY=${airQualityKey}`,
    },
  })
    .then((response) => response.json())
    .then((airData) => {
			return airData
		})
    .catch((error) => console.error(error))
}

//tester
export const getTestData = async () => {
	const data = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
	try {
		const response = await data
		const parseData = await response.json()
		return parseData
	} catch (error) {
		return error
	}
}