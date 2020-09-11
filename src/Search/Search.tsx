import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Search.scss'
import magGlass from '../assets/search.png'

interface SearchProps {
	getSearchResults: Function
}

const Search: React.FC<SearchProps> = props => {
	const [query, setQuery] = useState<string>('')

  return (
		<div className="search-bar">
			<input 
				aria-label="search-input"
				className="search-input"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search city, zip, or county"
			/>
			<Link to="/results">
				<input
					type="image"
					src={magGlass}
					alt="magnifying glass search icon"
					className="search-icon"
					onClick={(e) => props.getSearchResults(query)}
				/>
			</Link>
		</div>
  )
}

export default Search