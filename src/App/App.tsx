import { Route } from "react-router-dom"
import React, { useState } from 'react'
import Home from "../Home/Home"
import Header from '../Header/Header'
import About from "../About/About"
import Results from "../Results/Results"
import Location from "../Location/Location"
import './App.scss'

import { getCoordinates } from '../helpers/apiCalls'


const App: React.FC = () => {
  const [ searchResults, setSearchResults ] = useState([])
  const [ query, setQuery ] = useState('')
	const [ matchDetails, setMatchDetails ] = useState<Array<any>>([])

  const data = {};
	const getSearchResults = async (query: string, clearInput: Function) => {
		setQuery(query)
		const returnedResults = await getCoordinates(query)
		setSearchResults(returnedResults)
		clearInput()
	}
	
	const getMatchDetails = (coordinates: [], locality: string, region: string) => {
		setMatchDetails([coordinates, locality, region])
	}

  return (
    <div className="App">
      <Header getSearchResults={getSearchResults} />
      <main>
        <Route
          exact path="/"
          render={() => {
            return <Home query={query}/>
          }}
        />
        <Route
          exact path="/about"
          render={() => {
            return <About />
          }}
        />
				<Route
					exact path="/results/:query"
					render={({ match }) => {
						return <Location
							query={match.params.query}
							matchDetails={matchDetails}
						/>
					}}
				/>
        <Route
          exact path="/results"
          render={() => {
						return <Results
							searchResults={searchResults}
							getMatchDetails={getMatchDetails}
						/>
          }}
        />
      </main>
    </div>
  )
}

export default App
