import React from 'react'
import { Link } from 'react-router-dom'
import './Results.scss'

interface ResultsProps {
	searchResults: Array<any>
	getMatchDetails: Function
	getAllDetailsData: Function
}

const Results: React.FC<ResultsProps> = props => {
	const noResults = 'I\'m sorry, there are no results. Please try again!'
	
	const americanResults = props.searchResults.filter((result) => {
		return result.country === 'United States'
	})

	const noDupCardInfo = (label: string) => {
  return label.split(',').splice(1, 2).join(',')
 }

	const resultsList = americanResults.map(result => {
		return (
			<Link
				to={`/results/${result.name}`}
				style={{ textDecoration: "none" }}
				key={result.latitude}
				onClick={() => {
					props.getMatchDetails(result.latitude, result.longitude, result.locality, result.region)
					props.getAllDetailsData(result.latitude, result.longitude)
				}}
			>
				<article className="results-container" key={result.latitude}>
					<h2 className="card-header">{result.name}</h2>
					<h3 className="card-label">{noDupCardInfo(result.label)}</h3>
					{/* <p>Latitude: {result.latitude}</p>
					<p>Longitude: {result.longitude}</p> */}
				</article>
			</Link>
		)
	})

	return (
		<section className="results">
			<h1>Search Results:</h1>
			{props.searchResults.length === 0 && <h1>{noResults}</h1>}
			<div className="results-info-box">
				{resultsList}
			</div>
		</section>
	)
}

export default Results