require('dotenv').config()

export const getCoordinates = (query: string) => {
	return fetch(`http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_COORDINATES}&query=${query}`)
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
		`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_KEY}`
    ).then(parseData => parseData.json()).catch(error => error)
}

export const getAirQualityData = (lat: number, long: number) => {
   return fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
      'Target-URL':
				`https://www.airnowapi.org/aq/forecast/latLong/?format=application/json&latitude=${lat}&longitude=${long}&API_KEY=${process.env.REACT_APP_AIR2}`,
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