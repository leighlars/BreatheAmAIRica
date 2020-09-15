import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Card from './Card'

describe('Card Component', () => {
	let mockGetMatchDetails: Function, mockGetAllDetailsData: Function

	beforeEach(() => {
		const mockGetMatchDetails = jest.fn()
		const mockGetAllDetailsData = jest.fn()
		render(
			<MemoryRouter>
				<Card
					lat={40}
					long={-110}
					temp={302}
					aqi={8}
					aqiCat={'Good'}
					uvi={4.36}
					icon={'01d'}
					locality={'San Diego'}
					region={'California'}
					getMatchDetails={mockGetMatchDetails}
					getAllDetailsData={mockGetAllDetailsData}
				/>
			</MemoryRouter>
		)
	})

  it('should render with all the correct data', () => {
    const cardHeader = screen.getByRole('heading', {name: /san diego/i})
		const temp = screen.getByText(/83/i)
		const weatherIcon = screen.getByAltText(/clear day icon/i)
    expect(cardHeader).toBeInTheDocument()
    expect(temp).toBeInTheDocument()
    expect(weatherIcon).toBeInTheDocument()
	})
	
	it('Should fire the correct methods when card is clicked', () => {
		// mock getHomeData
		// render Home
		// locate card
		// mock fetching the location data
		// fire click event on card
		// locate items on the location page
		// expect them to be in the document
	})

})