import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Hachemmy Jovenno/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders profile section', () => {
  render(<App />);
  const profileElement = screen.getByText(/PROFIL PROFESSIONNEL/i);
  expect(profileElement).toBeInTheDocument();
});