import { Route } from 'react-router-dom'
import React, { useState } from 'react'
import Home from '../Home/Home'
import Header from '../Header/Header'
import About from '../About/About'
import Results from '../Results/Results'
import Location from '../Location/Location'
import './App.scss'

import { getCoordinates } from '../helpers/apiCalls'
import { getAllData } from '../helpers/dataFilter'
import { DetailsProps } from '../helpers/detailsdefinitions'


const App: React.FC<DetailsProps> = () => {
  const [ searchResults, setSearchResults ] = useState([])
  const [ query, setQuery ] = useState<string>()
  const [ matchDetails, setMatchDetails ] = useState<[number, number, string, string]>()
  const [ detailsData, setDetailsData ] = useState<DetailsProps>()

	const getSearchResults = async (query: string, clearInput: Function) => {
		setQuery(query)
		const returnedResults = await getCoordinates(query)
		setSearchResults(returnedResults)
		clearInput()
	}
	
	const getMatchDetails = (latitude: number, longitude: number, locality: string, region: string) => {
		setMatchDetails([latitude, longitude, locality, region])
  }

  const getAllDetailsData = async (lat: number, long: number) => {
    const data = await getAllData(lat, long)
    setDetailsData(data)
    // console.log(data)
  }

  return (
    <div className="App">
      <Header getSearchResults={getSearchResults} />
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
				<Route
					exact path="/results/:query"
					render={({ match }) => {
						return <Location
							query={match.params.query}
              matchDetails={matchDetails}
              detailsData={detailsData}
						/>
					}}
				/>
        <Route
          exact path="/results"
          render={() => {
						return <Results
							searchResults={searchResults}
              getMatchDetails={getMatchDetails}
              getAllDetailsData={getAllDetailsData}
						/>
          }}
        />
      </main>
    </div>
  )
}

export default App
