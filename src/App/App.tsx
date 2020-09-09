import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.scss'
import Header from '../Header/Header'
import View from '../View/View'
import { getCoordinates } from '../helpers/apiCalls'

const App: React.FC = () => {
	const [ topCities, setTopCities ] = useState([])

	useEffect(() => {getTop5Cities()}, [])

	const getTop5Cities = async ():Promise<any> => {
		const topCities = ['Denver', 'San Francisco']
		const topCitiesData = Promise.all(topCities.map(city => {
			// getCoordinates(city)
		}))
			.then(data => console.log(data))
		return topCitiesData
	}

	// hard code in the top 5 cities with lat and long and only run that through getLocationData on landing

  return (
    <div className="App">
      <Header/>
			<Route
				exact path="/"
				render={() => {
					return <View />
				}}
			/>
    </div>
  )
}

export default App
