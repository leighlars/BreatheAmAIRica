import React from 'react';
import Home from './Home';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mocked } from 'ts-jest/utils'
import { getHomeData } from '../helpers/apiCalls'
jest.mock('../helpers/apiCalls')

describe('Home', () => {

  it('should render 15 cards upon load', async () => {
		mocked(getHomeData).mockImplementation(() => 
			Promise.resolve({
				aqi: 1,
				icon: '01d',
				temp: 76,
				uvi: 1
			})
		)
		const { findByText, findAllByText } = render(<MemoryRouter><Home /></MemoryRouter>)
		const title1 = await findByText(/denver/i)
		const aqi = await findAllByText(/AQI/i)
		const title6 = await findByText(/anchorage/i)
		const title11 = await findByText(/hot springs/i)
		expect(title1).toBeInTheDocument()
		expect(aqi[0]).toBeInTheDocument()
		expect(aqi[14]).toBeInTheDocument()
		expect(title6).toBeInTheDocument()
		expect(title11).toBeInTheDocument()
  })

  it('should display location page when card is clicked', () => {
		// mock getHomeData
		// render Home
		// locate card
		// mock fetching the location data
		// fire click event on card
		// locate items on the location page
		// expect them to be in the document
	})
	
	it('should display 4 horizontal scrolls with info cards', () => {
		const { getByRole } = render(<MemoryRouter><Home /></MemoryRouter>)
		const popularDest = getByRole('heading', {name: /popular destinations/i})
		const lowestOzone = getByRole('heading', {name: /lowest ozone pollution/i})
		const particlePoll = getByRole('heading', {name: /lowest particle pollution/i})
		const pertinentReadings = getByRole('heading', {name: /pertinent readings/i})
		expect(popularDest).toBeInTheDocument()
		expect(lowestOzone).toBeInTheDocument()
		expect(particlePoll).toBeInTheDocument()
		expect(pertinentReadings).toBeInTheDocument()
	})

})