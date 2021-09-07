import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './button'

describe('home', () => {
  it('renders a button', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me!</Button>)

    const btn = screen.getByText(/click me/i)
    expect(screen.getByText(/click me/i)).toBeInTheDocument()

    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
