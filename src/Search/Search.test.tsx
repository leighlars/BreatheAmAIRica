import React from "react";
import { render, screen, getByPlaceholderText } from "@testing-library/react";
import Search from './Search'

describe('Search', () => {
  beforeEach(() => {
    render(<Search />)
  })

  it('should render a search bar', () => {
    const search = screen.getByPlaceholderText('Search city, zip, or county')
    expect(search).toBeInTheDocument()
  })

  // it('should ')
})