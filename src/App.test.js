import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});

it('displays the welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Hello world! Welcome to my React application./i);
  expect(welcomeElement).toBeInTheDocument();
});
