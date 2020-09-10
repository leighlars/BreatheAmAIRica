import React from "react";
import { render, screen, getByPlaceholderText, fireEvent } from "@testing-library/react";
import Search from './Search'

describe('Search', () => {
  beforeEach(() => {
    render(<Search />)
  })

  it('should render a search bar', () => {
    const search = screen.getByPlaceholderText('Search city, zip, or county')
    const magGlass = screen.getByAltText('magnifying glass search icon')
    expect(search).toBeInTheDocument()
    expect(magGlass).toBeInTheDocument()
  })

  it("should reflect change in value when data is input in form", () => {
   const locationInput = screen.getByPlaceholderText("Search city, zip, or county");
   expect(locationInput.value).toBe('');
   fireEvent.change(locationInput, { target: { value: "Dallas" } });
   expect(locationInput.value).toBe("Dallas");
  });

  // it('should ')
})