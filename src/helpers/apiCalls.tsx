// export const getCoordinates = async (query: string) => {
// 	const response = await fetch(`http://api.positionstack.com/v1/forward?access_key=e17943cbd88c595c58c3c6ae1840fc33&query=${query}`)

// 	if (response.ok) {
// 		const data = await response.json()
// 		const coordinates = [data.data[0].latitude, data.data[0].longitude]
// 		return getLocationData(parseInt(coordinates[0].toFixed(2)), parseInt(coordinates[1].toFixed(2)))
// 	} else {
// 		throw new Error(response.statusText)
// 	}
// }

export const getCoordinates = (query: string) => {
	return fetch(`http://api.positionstack.com/v1/forward?access_key=e17943cbd88c595c58c3c6ae1840fc33&query=${query}`)
	.then(response => {
		if (response.ok) {
			response.json()
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
			response.json()
				.then(data => {
					console.log(data)
				})
		} else {
			throw response
		}
	})
}