
const airQualityKey ='DACE2187-D810-4B4B-81E4-45AEBAF087A0'


export const getCoordinates = (query: string) => {
	return fetch(`http://api.positionstack.com/v1/forward?access_key=e17943cbd88c595c58c3c6ae1840fc33&query=${query}`)
	.then(response => {
		if (response.ok) {
			return response.json()
				.then(data => {
				return [+data.data[0].latitude.toFixed(2), +data.data[0].longitude.toFixed(2)]
			})
		} else {
			throw response
		}
	})
}

export const getLocationData = (lat: number, long: number) => {
	return fetch(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${long}&key=068b5953-ff12-4969-bf21-787d07fe61bf`)
		.then(response => {
			if (response.ok) {
				return response.json()
					.then(data => {
						console.log(data.data)
						return data.data.current.pollution.aqius
					})
			} else {
				throw response
			}
		})
}


export const getAirQualityData = () => {
	fetch("https://fe-cors-proxy.herokuapp.com", {
    headers: {
      "Target-URL":
        "http://www.airnowapi.org/aq/forecast/latLong/?format=application/json&latitude=39.0509&longitude=-121.4453&date=2020-09-10&distance=25&API_KEY=DACE2187-D810-4B4B-81E4-45AEBAF087A0",
    },
  })
    .then((response) => response.json())
    .then((airData) => console.log(airData))
    .catch((error) => console.error(error));
}


