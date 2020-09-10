import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Card from './Card';


describe('Card Component', () => {

  it('should display correctly', () => {
    render(
      <MemoryRouter>
        <Card
          name="Las Vegas" 
        />
      </MemoryRouter>
    )

    const cardHeader = screen.getByRole('heading', {name: /las vegas/i})

    expect(cardHeader).toBeInTheDocument()

  })

})