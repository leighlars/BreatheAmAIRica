import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
 
  it('should render a Header', () => {
    const {getByRole, getByPlaceholderText} = render(<MemoryRouter><App/></MemoryRouter>) 
    const logo = getByRole('heading', { name: 'Breathe Am' });
    const searchBar = getByPlaceholderText('Search city, zip, or county')
    expect(logo).toBeInTheDocument()
    expect(searchBar).toBeInTheDocument();
  })

  it('should show various pages when nav links are clicked', () => {
    // passed on everything but the return to home link at bottom
    const {getByRole} = render(<MemoryRouter><App/></MemoryRouter>)
    // Home view with cards
    const denverTopCard = getByRole('heading', {name: 'Denver'}) 
    expect(denverTopCard).toBeInTheDocument()

    // click About link and render About view
    const aboutLink = getByRole('link', {name: 'ABOUT'})
    fireEvent.click(aboutLink)
    const aqiImage = screen.getByAltText('table of Air Quality information from EPA.gov')
    expect(aqiImage).toBeInTheDocument()

    // click Home link and return to home
    const homeLink = screen.getByRole('link', {name: 'HOME'})
    fireEvent.click(homeLink)
		expect(getByRole('heading', { name: 'Denver' })).toBeInTheDocument()
	})
	
})
