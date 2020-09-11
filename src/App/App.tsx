import { Route } from "react-router-dom"
import React, { useState } from 'react'
import Home from "../Home/Home"
import Header from '../Header/Header'
import About from "../About/About"
import Results from "../Results/Results"
// import Location from "../Location/Location"
import './App.scss'

// import { getAirQualityData } from '../helpers/apiCalls'
import { getCoordinates } from '../helpers/apiCalls'

const App: React.FC = () => {
	const [ searchResults, setSearchResults ] = useState([])

	const getSearchResults = async (query: string, clearInput: Function) => {
		const returnedResults = await getCoordinates(query)
		setSearchResults(returnedResults)
		clearInput()
	}

  return (
    <div className="App">
      <Header
				getSearchResults={getSearchResults}
			/>
      <main>
        <Route
          exact path="/"
          render={() => {
            return <Home />
          }}
        />
        <Route
          exact path="/about"
          render={() => {
            return <About />
          }}
        />
        {/* <Route
          exact path="/:location"
          render={({ match }) => {
            return <Location />
          }}
        /> */}
        <Route
          exact path="/results"
          render={() => {
            return (
							<Results
								searchResults={searchResults}
							/>
						)
          }}
        />
      </main>
    </div>
  )
}

export default App
