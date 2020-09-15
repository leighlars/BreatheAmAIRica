import React from "react";
import { render, screen, fireEvent, getByAltText } from "@testing-library/react";
import Header from "./Header";
import '@testing-library/jest-dom'
import { MemoryRouter } from "react-router-dom";

describe('Header', () => {
  
  it('should render logo and search bar in Header', () => {
    render(
     <MemoryRouter>
      <Header getSearchResults={jest.fn()} />
     </MemoryRouter>
    );
    const logo = screen.getByRole('heading', {name:'Breathe Am'})
    const icon = screen.getByAltText('Blue map of USA')
    const tagline = screen.getByRole('heading', {name: 'Plan. Go. Breathe.'})
    const searchBar = screen.getByPlaceholderText('Search city, zip, or county')
    const aboutLink = screen.getByRole('link', {name:'ABOUT'} )
    const homeLink = screen.getByRole("link", { name: "HOME" });
    expect(logo).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(tagline).toBeInTheDocument()
    expect(searchBar).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(homeLink).toBeInTheDocument()
  })

  it("should reflect change in value when data is input in form", () => {
   render(
    <MemoryRouter>
     <Header getSearchResults={jest.fn()} />
    </MemoryRouter>
   );
   const locationInput = screen.getByPlaceholderText(
    "Search city, zip, or county"
   );
   expect(locationInput.value).toBe("");
   fireEvent.change(locationInput, { target: { value: "Dallas" } });
   expect(locationInput.value).toBe("Dallas");
  });

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