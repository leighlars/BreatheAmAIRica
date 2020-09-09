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