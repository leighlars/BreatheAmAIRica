import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe('Header', () => {
  beforeEach(() => {
    render(<Header/>)
  })

  it('should render app name in Header', () => {
    const header = screen.getByRole('heading', {name: 'Weather Or Not'})
    expect(header).toBeInTheDocument()
  })
})