import React from 'react';
import { render, screen } from '@testing-library/react';
import Results from './Results';
import { MemoryRouter } from 'react-router-dom';

describe('Results', () => {
	let searchResults: Array<{}>, worldResults: Array<{}>

	beforeEach(() => {
		searchResults = [
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
		worldResults = [
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

	it('Should render results from search', () => {
		render(
			<MemoryRouter>
				<Results searchResults={searchResults} />
			</MemoryRouter>
		)
		
		const heading1 = screen.getByText(/denver/i)
		const heading2 = screen.getByText(/miami/i)

		expect(heading1).toBeInTheDocument()
		expect(heading2).toBeInTheDocument()
	})

})