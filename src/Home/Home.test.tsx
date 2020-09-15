import React from 'react';
import Home from './Home';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mocked } from 'ts-jest/utils'
import { getHomeData } from '../helpers/dataFilter'
jest.mock('../helpers/dataFilter')

describe('Home', () => {
let homePageData: Array<any>

	beforeEach(() => {
		homePageData = [[
			"Denver",
			"Colorado",
			39.7392,
			-104.9903,
			{
			aqi: -1,
			aqiCat: "Good",
			icon: "01d",
			temp: 302.78,
			uvi: 8
			}
		],
		[
			"New York City",
			"New York",
			40.7128,
			-74.0060,
			{
				aqi: -1,
				aqiCat: "Moderate",
				icon: "01d",
				temp: 243.24,
				uvi: 5
			}
		],
		[
			"Miami",
			"Florida",
			25.7617,
			-80.1918,
			{
				aqi: -1,
				aqiCat: "Bad",
				icon: "01d",
				temp: 312.03,
				uvi: 9
			}
		]]
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

  it('Should render 15 cards upon load', async () => {
		const { findByText, findAllByText } = render(
			<MemoryRouter>
				<Home
					markLoaded={jest.fn()}
					initialLoad={true}
					homePageData={homePageData}
					getMatchDetails={jest.fn()}
					getAllDetailsData={jest.fn()}
				/>
			</MemoryRouter>
		)

		const title1 = await findByText(/denver/i)
		const title2 = await findByText(/new york city/i)
		const title3 = await findByText(/miami/i)
		const uvi = await findAllByText(/UVI/i)
		expect(title1).toBeInTheDocument()
		expect(title2).toBeInTheDocument()
		expect(title3).toBeInTheDocument()
		expect(uvi[0]).toBeInTheDocument()
		expect(uvi[1]).toBeInTheDocument()
		expect(uvi[2]).toBeInTheDocument()
  })
	
	it('Should display 4 horizontal scrolls with info cards', () => {
		const { getByRole } = render(
			<MemoryRouter>
				<Home
					markLoaded={jest.fn()}
					initialLoad={true}
					homePageData={homePageData}
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

	it('Should display message while data is being fetched', () => {
		const { getByText } = render(
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
		const waitingMessage = getByText(/gathering your data.../i)
		expect(waitingMessage).toBeInTheDocument()
	})
})