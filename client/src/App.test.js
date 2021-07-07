import React from 'react';
import { render } from '@testing-library/react';
import App  from  './App';

// We don't want to test implementation details

test('renders without crashing', () => {
  render(<App />);
});

test ('NavBar is Rendered', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/nav-bar/i);
});
test ('Header Text is Rendered', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/header-text/i);
});
test ('Player Grid is Rendered', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/player-grid/i);
});
