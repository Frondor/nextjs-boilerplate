import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './button'

describe('home', () => {
  it('renders a button with its children', () => {
    render(<Button>Click me!</Button>)

    expect(screen.getByText(/click me/i)).toBeInTheDocument()
  })
})
