import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {

  it('should render 5 city cards', () => {
    // these test will change with fetched data, just covering bases
    const {getAllByRole, getByRole, getAllByText} = render(<MemoryRouter><Home/></MemoryRouter>)
    const topCards = getAllByRole('link')
    const cityName = getByRole('heading', {name: 'Denver'})
    const temp = getAllByText('35', {exact: false})
    const aqi = getAllByText('AQI')
    expect(topCards).toHaveLength(5)
    expect(cityName).toBeInTheDocument()
    expect(temp).toHaveLength(5)
    expect(aqi).toHaveLength(5)
  })

  // it('should fire event when card is clicked', () => {
  //   // ???? it's a link to the location page, is this a testable event?
	// })
	
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