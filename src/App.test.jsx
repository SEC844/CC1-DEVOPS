import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Vite \+ React/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('updates count when button is clicked', async () => {
    render(<App />);
    const button = screen.getByText(/count is/i);
    expect(button).toBeInTheDocument();
  });
});
