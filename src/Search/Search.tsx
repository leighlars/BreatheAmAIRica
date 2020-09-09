import React, { useState, useEffect } from "react";
import './Search.scss'


const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const [debouncedQuery, setDebouncedQuery] = useState<string>(query)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query)
    }, 750)

    return () => {
      clearTimeout(timerId);
    }
  }, [query])

  useEffect(() => {
    //async function for fetch call from debounced term and from api
  })

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