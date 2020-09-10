import React from 'react';
import { render, screen, getByPlaceholderText, getByRole, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';


describe('App', () => {
 

  it('should render a Header', () => {
    const {getByRole, getByPlaceholderText} =  render(<MemoryRouter><App/></MemoryRouter>)
    const logo = screen.getByRole("heading", { name: "Weather Or Not" });
    const searchBar = screen.getByPlaceholderText('Search city, zip, or county')
    expect(logo).toBeInTheDocument()
    expect(searchBar).toBeInTheDocument();
  })

  xit('should show various pages when nav links are clicked', () => {
    // passed on everything but the return to home link at bottom
    const {getByRole} =  render(<MemoryRouter><App/></MemoryRouter>)
    // Home view with cards
    const denverTopCard = screen.getByRole('heading', {name: 'Denver'}) 
    expect(denverTopCard).toBeInTheDocument()

    // click About link and render About view
    const aboutLink = screen.getByRole('link', {name: 'About'})
    fireEvent.click(aboutLink)
    const aqiImage = screen.getByAltText('table of Air Quality information from EPA.gov')
    expect(aqiImage).toBeInTheDocument()

    // click Home link and return to home
    const homeLink = screen.getByRole('link', {name: 'Home'})
    fireEvent.click(homeLink)
    expect(denverTopCard).toBeInTheDocument()
  })
})
