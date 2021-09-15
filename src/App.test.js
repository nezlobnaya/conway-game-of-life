import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Game of Life', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Intro/i);
  expect(title).toBeInTheDocument();
});
