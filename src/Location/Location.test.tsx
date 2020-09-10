import React from "react";
import { render, getAllByRole} from "@testing-library/react";
import Location from './Location'

describe('Location', () => {

//  tests will need to change once we have fetched data
  it('should render a city and region in header', () => {
    const {getByRole} = render(<Location />)
    const cityName = getByRole('heading', {name: 'Denver'})
    const region = getByRole('heading', {name: 'Colorado, USA'})
    expect(cityName).toBeInTheDocument()
    expect(region).toBeInTheDocument()
  })

  it('should render information on current weather and air quality', () => {
    // this may be not specific enough
    const { getByRole, getByText, getAllByRole } = render(<Location />)
    const currentHeader = getByRole('heading', {name: 'HAPPENING NOW'})
    const aqHeader = getByRole("heading", { name: "AIR QUALITY" })
    const hourlyHeader = getByRole("heading", { name: "HOURLY FORECAST" })
    const weeklyHeader = getByRole("heading", { name: "WEEKLY FORECAST" })
    const temperature = getByText('35', {exact: false})
    const aqText = getByText('Air Quality Index')
    const icons = getAllByRole('img')
    expect(icons).toHaveLength(7)
    expect(currentHeader).toBeInTheDocument()
    expect(temperature).toBeInTheDocument()
    expect(aqHeader).toBeInTheDocument()
    expect(aqText).toBeInTheDocument();
    expect(hourlyHeader).toBeInTheDocument()
    expect(weeklyHeader).toBeInTheDocument()
  })

})