import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../button/Button'

describe('button', () => {
  it('renders children and handles onClick', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me!</Button>)

    const btn = screen.getByText(/click me/i)
    expect(screen.getByText(/click me/i)).toBeInTheDocument()

    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('applies aria-disabled & tabIndex -1 if disabled', () => {
    render(<Button disabled />)

    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()
    expect(btn).toHaveAttribute('aria-disabled', 'true')
    expect(btn).toHaveAttribute('tabIndex', '-1')
  })

  it('renders as anchor if an href is provided', () => {
    render(<Button href="#" />)

    const btn = screen.getByRole('button')
    expect(btn).toHaveAttribute('href', '#')
    expect(btn.tagName).toBe('A')
  })
})
