import React from 'react';
import { render, screen } from '@testing-library/react';
import Results from './Results';
import { MemoryRouter } from 'react-router-dom';

describe('Results', () => {
	let searchResults

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
		]
	})

	it('Should render results from search', () => {
		// unable to get the test suite working with TS as of now

		const { getByText } = render(
			<MemoryRouter>
				<Results
					searchResults={[]}
				/>
			</MemoryRouter>
		)
	})

})