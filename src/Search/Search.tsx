import React, { useState, useEffect } from 'react'
import { getCoordinates, getLocationData } from '../helpers/apiCalls'
import './Search.scss'
import magGlass from '../assets/search.png'

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('')
	const [debouncedQuery, setDebouncedQuery] = useState<string>(query)
	const [result, setResult] = useState<number>(0)

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setDebouncedQuery(query)
  //   }, 750)

  //   return () => {
  //     clearTimeout(timerId);
  //   }
  // }, [query])

	useEffect(() => {
		getSearchInputData()
	}, [debouncedQuery])

	const getSearchInputData = async () => {
		const data = await getCoordinates('denver')
		const locationData = await getLocationData(data[0], data[1])
		setResult(locationData)
	}

  return (
		<div className="search-bar">
			<input 
				aria-label="search-input"
				className="search-input"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search city, zip, or county"
			/>
			<img src={magGlass} alt='magnifying glass search icon' className='search-icon'/>
		</div>

  )
}

export default Search