import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import App from './App'
import Home from '../Home/Home'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { getHomeData } from '../helpers/dataFilter'
import { mocked } from 'ts-jest/utils'
jest.mock('../helpers/dataFilter')

describe('App', () => {
	let mockHomePageData, data

	beforeEach(() => {
		mocked(getHomeData).mockImplementation(() =>
			Promise.resolve({
				icon: '01d',
				temp: 76,
				uvi: 1
			})
		)
		data = {
			temp: 87,
			uvi: 7,
			icon: '01d',
			aqi: 10,
			aqiCat: 'Good'
		}
		mockHomePageData = [
			'Denver',
			'Colorado',
			40,
			-105,
			data
		]
	})

	it('Should render a Header', () => {
		const { getByRole, getByPlaceholderText } = render(<MemoryRouter><App /></MemoryRouter>)
		const logo = getByRole('heading', { name: 'Breathe Am' })
		const searchBar = getByPlaceholderText('Search city, zip, or county')
		expect(logo).toBeInTheDocument()
		expect(searchBar).toBeInTheDocument()
	})

	it('Should show various pages when nav links are clicked', async () => {
		const { getByRole, findByText } = render(<MemoryRouter><App /></MemoryRouter>)
		// Home view with cards
		const denverTopCard = await findByText(/denver/i)
		expect(denverTopCard).toBeInTheDocument()

		// click About link and render About view
		const aboutLink = getByRole('link', { name: 'ABOUT' })
		fireEvent.click(aboutLink)
		const aqiImage = screen.getByAltText('table of Air Quality information from EPA.gov')
		expect(aqiImage).toBeInTheDocument()

		// click Home link and return to home
		const homeLink = screen.getByRole('link', { name: 'HOME' })
		fireEvent.click(homeLink)
		expect(getByRole('heading', { name: 'Denver' })).toBeInTheDocument()
	})

	it('Should render 15 cards upon page load with temp, uvi and icon', async () => {
		const { findByText, findAllByText } = render(<MemoryRouter><App /></MemoryRouter>)

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

})