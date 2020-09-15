import React from 'react';
import Home from './Home';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mocked } from 'ts-jest/utils'
import { getHomeData } from '../helpers/dataFilter'
jest.mock('../helpers/dataFilter')

describe('Home', () => {

	beforeEach(() => {
		mocked(getHomeData).mockImplementation(() =>
			Promise.resolve({
				temp: 87,
				uvi: 7,
				icon: '01d',
				aqi: 10,
				aqiCat: 'Good'
			})
		)
	})

  it('should render 15 cards upon load', async () => {
		const { findByText, findAllByText } = render(
			<MemoryRouter>
				<Home
					markLoaded={jest.fn()}
					initialLoad={true}
					homePageData={undefined}
					getMatchDetails={jest.fn()}
					getAllDetailsData={jest.fn()}
				/>
			</MemoryRouter>
		)

		const title1 = await findByText(/denver/i)
		const title6 = await findByText(/anchorage/i)
		const title11 = await findByText(/hot springs/i)
		const uvi = await findAllByText(/UVI/i)
		expect(title1).toBeInTheDocument()
		expect(title6).toBeInTheDocument()
		expect(title11).toBeInTheDocument()
		expect(uvi[0]).toBeInTheDocument()
		expect(uvi[14]).toBeInTheDocument()
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
		const { getByRole } = render(
			<MemoryRouter>
				<Home
					markLoaded={jest.fn()}
					initialLoad={true}
					homePageData={undefined}
					getMatchDetails={jest.fn()}
					getAllDetailsData={jest.fn()}
				/>
			</MemoryRouter>
		)
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