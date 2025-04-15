import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '@/theme';

describe('Button', () => {
  const renderWithTheme = (Component: React.ReactNode) =>
    render(<ThemeProvider theme={lightTheme}>{Component}</ThemeProvider>);

  it('renders with default variant (primary)', () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('renders with secondary variant', () => {
    renderWithTheme(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button', { name: /secondary/i })).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
