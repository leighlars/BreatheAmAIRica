
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

export const getAirQualityData = (lat: number, long: number) => {
   return fetch("https://fe-cors-proxy.herokuapp.com", {
    headers: {
      "Target-URL":
        `http://www.airnowapi.org/aq/forecast/latLong/?format=application/json&latitude=${lat}&longitude=${long}&API_KEY=${airQualityKey}`,
    },
  })
    .then((response) => response.json())
    .then((airData) => {
			return airData;
		})
    .catch((error) => console.error(error));
};


