import { render, screen } from '@testing-library/react';
import PilotComp from './PilotComp';

test('renders learn react link', () => {
  render(<PilotComp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
