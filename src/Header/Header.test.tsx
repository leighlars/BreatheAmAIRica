import React from "react";
import { render, screen, fireEvent, getByAltText } from "@testing-library/react";
import Header from "./Header";
import '@testing-library/jest-dom'
import { MemoryRouter } from "react-router-dom";

describe('Header', () => {
  
  // beforeEach(() => {
  //   render(
  //   <MemoryRouter>
  //     <Header 
  //       getSearchResults={jest.fn()}/>
  //   </MemoryRouter>)
  // })

  it('should render logo and search bar in Header', () => {
    render(
     <MemoryRouter>
      <Header getSearchResults={jest.fn()} />
     </MemoryRouter>
    );
    const logo = screen.getByRole('heading', {name:'Breathe Am'})
    const globe = screen.getByRole('img')
    const tagline = screen.getByRole('heading', {name: 'Plan. Go. Breathe.'})
    const searchBar = screen.getByPlaceholderText('Search city, zip, or county')
    const aboutLink = screen.getByRole('link', {name:'ABOUT'} )
    expect(logo).toBeInTheDocument()
    expect(globe).toBeInTheDocument()
    expect(tagline).toBeInTheDocument()
    expect(searchBar).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
  })

  it('should fire an event when search button is clicked', () => {
    const getSearchResults = jest.fn()
    render(
     <MemoryRouter>
      <Header getSearchResults={getSearchResults} />
     </MemoryRouter>
    );
    const magGlass = screen.getByAltText("magnifying glass search icon");
    fireEvent.click(magGlass)
    expect(getSearchResults).toBeCalledTimes(1)
  })

  


})