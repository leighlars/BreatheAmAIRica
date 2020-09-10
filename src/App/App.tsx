import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.scss'
import Header from '../Header/Header'
import View from '../View/View'
import { getCoordinates } from '../helpers/apiCalls'

const App: React.FC = () => {
	// const [ topCities, setTopCities ] = useState([])

	useEffect(() => {getTop5Cities()}, [])

	const getTop5Cities = async ():Promise<any> => {
		const topCities = ['Denver']
		const topCitiesData = topCities.map(city => {
			return getCoordinates(city)
		})
		return topCitiesData
	}

  return (
    <div className="App">
      <Header/>
			<Route
				exact path="/"
				render={() => {
					return <View />
				}}
			/>
			<Route
				exact path='/about'
				render={() => {
					return <View/>
				}} 
			/>
    </div>
  )
}

export default App
