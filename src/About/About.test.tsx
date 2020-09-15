import React from 'react'
import { render, screen } from '@testing-library/react'
import About from './About'
import { MemoryRouter } from 'react-router-dom'

describe('App', () => {
	beforeEach(() => {
		render(<MemoryRouter><About /></MemoryRouter>)
	})

	it('should render a heading and image', () => {
		const header = screen.getByRole('heading', { name: 'Plan. Go. Breathe.' })
		const aqTable = screen.getByAltText('table of Air Quality information from EPA.gov')
		expect(header).toBeInTheDocument()
		expect(aqTable).toBeInTheDocument()
	})

	it('should display a summary of site', () => {
		const summary = screen.getByText(/to plan your local or destination activity/i)
		expect(summary).toBeInTheDocument()
	})

	it("should display a aqi legend image", () => {
  	const legendImage = screen.getByAltText('table of Air Quality information from EPA.gov');
  	expect(legendImage).toBeInTheDocument();
	})

	it('should display an icon legend', () => {
		const iconHeader = screen.getByText('Icon Legend')
		expect(iconHeader).toBeInTheDocument()
	})

	it('should display credits box with links to sources and devs', () => {
		const erin = screen.getByRole('link', {name: 'Erin Untermeyer'})
		const josh = screen.getByRole("link", { name: "Josh Sevy" })
		const leigh = screen.getByRole("link", { name: "Leigh Larson" })
		const aqi = screen.getByRole("link", { name: "AirNow API" })
		const weather = screen.getByRole("link", { name: "Open Weather Map API" })

		expect(erin).toBeInTheDocument()
		expect(josh).toBeInTheDocument();
		expect(leigh).toBeInTheDocument();
		expect(aqi).toBeInTheDocument();
		expect(weather).toBeInTheDocument();

	})
	
})
