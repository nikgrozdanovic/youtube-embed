import { render } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import EmbeddedVideo from '../src/EmbeddedVideo/app'

test('My component has h2 element', () => {
  const { getByText } = render(<EmbeddedVideo videoId='asdasd' />)

  const titleElement = getByText('Selected Video')

  expect(titleElement).toBeInTheDocument()
})

test('EmbeddedVideo component has iframe', () => {
  const { container } = render(<EmbeddedVideo />)
  // Query for the iframe element within the rendered component
  const iframeElement = container.querySelector('iframe')

  // Assert that the iframe element is present
  expect(iframeElement).toBeInTheDocument()
})
