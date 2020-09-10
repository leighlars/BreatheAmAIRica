import React, { useState, useEffect } from 'react'
import { getCoordinates, getLocationData } from '../helpers/apiCalls'
import './Search.scss'

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('')
	const [debouncedQuery, setDebouncedQuery] = useState<string>(query)
	const [result, setResult] = useState()

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query)
    }, 750)

    return () => {
      clearTimeout(timerId);
    }
  }, [query])

	useEffect(() => {
		getSearchInputData()
	}, [debouncedQuery])

	const getSearchInputData = async () => {
		const data = await getCoordinates('denver')
		const locationData = await getLocationData(data[0], data[1])
		setResult(locationData.current.pollution.aqius)
	}

  return (
		<input 
			aria-label="search-input"
			className="search-input"
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			placeholder="Search city, zip, or county"
		/>
  )
}

export default Search