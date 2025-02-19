import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { test, expect } from 'vitest'
import '@testing-library/jest-dom' // Ajoutez cette ligne
import App from './App'

test('le bouton doit incrémenter le compteur', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: /count is/i })
  expect(button).toHaveTextContent('count is 0')

  fireEvent.click(button)
  expect(button).toHaveTextContent('count is 1')

  fireEvent.click(button)
  expect(button).toHaveTextContent('count is 2')
})