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
		const summary = screen.getByText(/whether you\'re planning a trip or/i)
		expect(summary).toBeInTheDocument()
	})
	
})
