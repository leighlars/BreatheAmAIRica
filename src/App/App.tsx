import React, { useState, useEffect } from 'react'
import './App.scss'
import Header from '../Header/Header'
import View from '../View/View'

const App: React.FC = () => {
	const [ popularCities, setPopularCities ] = useState([])
	const [ lowOzoneCities, setOzoneCities ] = useState([])
	const [ lowPollutionCities, setPollutionCities ] = useState([])


  return (
    <div className="App">
      <Header/>
			<View />
    </div>
  )
}

export default App
