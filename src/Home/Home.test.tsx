import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

describe('Home', () => {


  it('should render 5 city cards', () => {
    // these test will change with fetched data, just covering bases
    const {getAllByRole, getByText, getByRole, getAllByText} = render(<MemoryRouter><Home/></MemoryRouter>)
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
})