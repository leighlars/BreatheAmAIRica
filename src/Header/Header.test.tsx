import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe('Header', () => {
  beforeEach(() => {
    render(<Header/>)
  })

  it('should render logo and search bar in Header', () => {
    const logo = screen.getByText('heading', {name: 'Breathe'})
    const globe = screen.getByRole('img')
    const tagline = screen.getByRole('heading', {name: 'Plan. Research. Experience.'})
    const searchBar = screen.getByPlaceholderText('Search city, zip, or county')
    expect(logo).toBeInTheDocument()
    expect(globe).toBeInTheDocument()
    expect(tagline).toBeInTheDocument()
    expect(searchBar).toBeInTheDocument()
  })


})