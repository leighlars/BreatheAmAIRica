import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Search from './Search'
import { MemoryRouter } from 'react-router-dom'

describe('Search', () => {

  it('should render a search bar', () => {
		render(<MemoryRouter><Search getSearchResults={jest.fn()} /></MemoryRouter>)
    const search = screen.getByPlaceholderText('Search city, zip, or county')
    const magGlass = screen.getByAltText('magnifying glass search icon')
    expect(search).toBeInTheDocument()
    expect(magGlass).toBeInTheDocument()
  })

  it('should reflect change in value when data is input in form', () => {
		render(<MemoryRouter><Search getSearchResults={jest.fn()} /></MemoryRouter>)
		const locationInput = screen.getByPlaceholderText('Search city, zip, or county')
		expect(locationInput.value).toBe('')
		fireEvent.change(locationInput, { target: { value: 'Dallas' } })
		expect(locationInput.value).toBe('Dallas')
  })

  it('should fire correct function when button clicked', () => {
		const getSearchResults = jest.fn()
		render(<MemoryRouter><Search getSearchResults={getSearchResults} /></MemoryRouter>)
		const magGlass = screen.getByAltText('magnifying glass search icon')
		fireEvent.click(magGlass)
		expect(getSearchResults).toBeCalledTimes(1)
	})
})