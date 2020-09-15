import React from 'react'
import Results from './Results'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { getCoordinates } from '../helpers/apiCalls'
import { mocked } from 'ts-jest/utils'
jest.mock('../helpers/apiCalls')

describe('Results', () => {
	let mockedSearchResults: Array<{}>, mockedWorldResults: Array<{}>

	beforeEach(() => {
		mockedSearchResults = [
			{
				'latitude': 40,
				'longitude': -110,
				'name': 'Denver',
				'country': 'United States',
				'continent': 'North America',
				'label': 'Denver, CO, USA'
			},
			{
				'latitude': 37,
				'longitude': -140,
				'name': 'Miami',
				'country': 'United States',
				'continent': 'North America',
				'label': 'Miami, FL, USA'
			}
		],
		mockedWorldResults = [
			{
				'latitude': 40,
				'longitude': -110,
				'name': 'Denver',
				'country': 'United States',
				'continent': 'North America',
				'label': 'Denver, CO, USA'
			},
			{
				'latitude': 48,
				'longitude': 3,
				'name': 'Paris',
				'country': 'France',
				'continent': 'Europe',
				'label': 'Paris, France'
			}
		]
	})

	it('Should render results from search', async () => {
		mocked(getCoordinates).mockImplementation(() =>
			Promise.resolve(mockedSearchResults)
		)
		const { findByText } = render(
			<MemoryRouter>
				<Results
					searchResults={mockedSearchResults}
					getMatchDetails={jest.fn()}
					getAllDetailsData={jest.fn()}
				/>
			</MemoryRouter>
		)
		
		const heading1 = await findByText(/denver/i)
		const heading2 = await findByText(/miami/i)

		expect(heading1).toBeInTheDocument()
		expect(heading2).toBeInTheDocument()
	})

	it('Should render message if there are no search results', () => {
		render(
			<MemoryRouter>
				<Results
					searchResults={[]}
					getMatchDetails={jest.fn()}
					getAllDetailsData={jest.fn()}
				/>
			</MemoryRouter>
		)

		const message = screen.getByText(/i\'m sorry, there are no results. please try again!/i)

		expect(message).toBeInTheDocument()
	})

	it('Should filter only results from United States', async () => {
		mocked(getCoordinates).mockImplementation(() =>
			Promise.resolve(mockedSearchResults)
		)
		const { findByText } = render(
			<MemoryRouter>
				<Results
					searchResults={mockedSearchResults}
					getMatchDetails={jest.fn()}
					getAllDetailsData={jest.fn()}
				/>
			</MemoryRouter>
		)

		const heading1 = await findByText(/denver/i)
		const heading2 = screen.queryByText(/paris/i)

		expect(heading1).toBeInTheDocument()
		expect(heading2).not.toBeInTheDocument()
	})

})