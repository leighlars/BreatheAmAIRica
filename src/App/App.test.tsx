import React from 'react';
import { render, screen, getByPlaceholderText } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';


describe('App', () => {
  beforeEach(() => {
    render(<MemoryRouter><App/></MemoryRouter>)
  })

  it('should render a Header', () => {
    const logo = screen.getByRole("heading", { name: "Weather Or Not" });
    const searchBar = screen.getByPlaceholderText('Search city, zip, or county')
    expect(logo).toBeInTheDocument()
    expect(searchBar).toBeInTheDocument();
  })
})
