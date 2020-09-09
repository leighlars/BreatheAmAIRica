export const getCoordinates = async (query: string) => {
	const response = await fetch(`http://api.positionstack.com/v1/forward?access_key=e17943cbd88c595c58c3c6ae1840fc33&query=${query}`)

	if (response.ok) {
		const data = await response.json()
		const coordinates = [data.data[0].latitude, data.data[0].longitude]
		return coordinates
	} else {
		throw new Error(response.statusText)
	}
}

export const getLocationData = async (lat: number, long: number) => {
	const response = await fetch(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${long}&key=068b5953-ff12-4969-bf21-787d07fe61bf`)

	if (response.ok) {
		const data = await response.json()
		return data.data
	} else {
		throw new Error(response.statusText)
	}
}