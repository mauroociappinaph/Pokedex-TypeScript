
import { render, screen } from '@testing-library/react';
import Pokemons from '../pages/Pokemons';

describe('Pokemons component', () => {
  test('renders loading message when isLoading is true', () => {
    render(<Pokemons />);
    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });

  test('renders pokemons when isLoading is false', () => {
    render(<Pokemons />);
    const loadingMessage = screen.queryByText('Loading...'); // Use queryByText instead of getByText
    expect(loadingMessage).toBeNull(); // Ensure loading message is not present
    // Write additional assertions to verify the rendering of pokemons
  });

  test('changes current page when handlePageChange is called', () => {
    render(<Pokemons />);
    // Simulate a page change event
    // Call handlePageChange with the new page number
    // Write assertions to verify the change in current page
  });
});