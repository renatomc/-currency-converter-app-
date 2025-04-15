import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '@/theme';

describe('Pagination', () => {
  const onPageChange = jest.fn();

  const renderWithTheme = (ui: React.ReactElement) =>
    render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>);

  beforeEach(() => {
    onPageChange.mockClear();
  });

  it('renders correct number of page buttons', () => {
    renderWithTheme(<Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('calls onPageChange when a page number is clicked', () => {
    renderWithTheme(<Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText('2'));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when next button is clicked', () => {
    renderWithTheme(<Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />);
    const nextButton = screen.getAllByRole('button').slice(-1)[0];
    fireEvent.click(nextButton);
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when previous button is clicked', () => {
    renderWithTheme(<Pagination currentPage={2} totalPages={3} onPageChange={onPageChange} />);
    const prevButton = screen.getAllByRole('button')[0];
    fireEvent.click(prevButton);
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it('disables previous button on first page', () => {
    renderWithTheme(<Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />);
    const prevButton = screen.getAllByRole('button')[0];
    expect(prevButton).toBeDisabled();
  });

  it('disables next button on last page', () => {
    renderWithTheme(<Pagination currentPage={3} totalPages={3} onPageChange={onPageChange} />);
    const nextButton = screen.getAllByRole('button').slice(-1)[0];
    expect(nextButton).toBeDisabled();
  });
});
