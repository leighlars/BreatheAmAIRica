import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import './Results.scss'

interface ResultsProps {
	searchResults: Array<any>
}

const Results: React.FC<ResultsProps> = props => {
	const resultsList = props.searchResults.map(result => {
		return (
			<article className="results-info-box" key={result.latitude}>
				{result.name}
			</article>
		)
	})

	return (
		<section className="results">
			{resultsList}
		</section>
	)
}

export default Results