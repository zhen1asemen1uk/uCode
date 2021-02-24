import { render, screen } from '@testing-library/react';
import HelloReact from './App';

test('renders learn react link', () => {
  render(<HelloReact />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
