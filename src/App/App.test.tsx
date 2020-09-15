import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { getHomeData, getAllData } from '../helpers/dataFilter'
import { mocked } from 'ts-jest/utils'
jest.mock('../helpers/dataFilter')

describe('App', () => {
	let mockHomePageData: [], data: {}, mockLocationPageData: any

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
		mockLocationPageData = {
			currentWeather: {
				clouds: 1,
				dew_point: 278.79,
				dt: 1600127853,
				feels_like: 288,
				humidity: 37,
				pressure: 1021,
				sunrise: 1600079776,
				sunset: 1600124809,
				temp: 294,
				uvi: 6.41,
				visibility: 10000,
				weather: [{
					description: 'clear sky',
					icon: '01n',
					id: 1,
					main: 'clear'
				}],
				wind_deg: 340,
				wind_speed: 7.15
			},
			weeklyWeather: [{
				clouds: 86,
				dew_point: 284.54,
				dt: 1600099200,
				feels_like: { day: 293.18, night: 286.94, eve: 289.05, morn: 293.6 },
				humidity: 46,
				pop: 0,
				pressure: 1018,
				sunrise: 1600079776,
				sunset: 1600124809,
				temp: { day: 296.55, min: 292.73, max: 298.58, night: 292.73, eve: 294, morn: 290.14 },
				uvi: 6.41,
				weather: [{
					description: 'overcast clouds',
					icon: '04d',
					id: 804,
					main: 'Clouds'
				}],
				wind_deg: 340,
				wind_speed: 5.33
			}]
		}
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

		const denverTopCard = await findByText(/denver/i)
		expect(denverTopCard).toBeInTheDocument()

		const aboutLink = getByRole('link', { name: 'ABOUT' })
		fireEvent.click(aboutLink)
		const aqiImage = screen.getByAltText('table of Air Quality information from EPA.gov')
		expect(aqiImage).toBeInTheDocument()

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

	it('Should render 5 news cards upon load', async () => {
		const { findByText } = render(<MemoryRouter><App /></MemoryRouter>)

		const covid = await findByText(/covid & us travel/i)
		const wildfires = await findByText(/wildfires & respiration/i)
		const altitude = await findByText(/altitude acclimation tips/i)
		const bestBeaches = await findByText(/best us beaches/i)
		const roadTrips = await findByText(/usa road trip routes/i)
		expect(covid).toBeInTheDocument()
		expect(wildfires).toBeInTheDocument()
		expect(altitude).toBeInTheDocument()
		expect(bestBeaches).toBeInTheDocument()
		expect(roadTrips).toBeInTheDocument()
	})

	it('Should display details page when card is clicked', async () => {
		mocked(getAllData).mockImplementation(() =>
			Promise.resolve(mockLocationPageData)
		)
		const { findByText, findByRole } = render(<MemoryRouter><App /></MemoryRouter>)

		const title1 = await findByText(/denver/i)
		fireEvent.click(title1)

		const happeningNowTitle = await findByRole('heading', { name: /happening now/i })
		const airQualityTitle = await findByRole('heading', { name: /happening now/i })
		const weeklyForecastTitle = await findByRole('heading', { name: /happening now/i })
		expect(happeningNowTitle).toBeInTheDocument()
		expect(airQualityTitle).toBeInTheDocument()
		expect(weeklyForecastTitle).toBeInTheDocument()

		const temp = await findByRole('heading', { name: /69/i })
		expect(temp).toBeInTheDocument()
		
		const visibility = await findByText(/1.9 mi/i)
		expect(visibility).toBeInTheDocument()
	})

})