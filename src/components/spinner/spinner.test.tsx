import { render, screen } from '@testing-library/react';
import Spinner from './spinner';

describe('Component: Spinner', () => {
  it('should render correct', () => {
    render(<Spinner />);
    expect(screen.getByTestId('pacman-loader')).toBeInTheDocument();
  });
});
