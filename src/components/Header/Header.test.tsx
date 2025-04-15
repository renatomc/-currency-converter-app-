import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider } from '@/context/ThemeContext';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('Header', () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it('renders title and greeting', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText('Currency Converter')).toBeInTheDocument();
    expect(screen.getByText(/Bem vindo/i)).toBeInTheDocument();
  });

  it('toggles theme when button is clicked', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </Provider>
    );

    const toggleButton = screen.getByRole('button', { name: /tema/i });
    fireEvent.click(toggleButton);

    expect(screen.getByRole('button', { name: /tema/i })).toBeInTheDocument();
  });

  it('navigates to home when logo is clicked', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </Provider>
    );

    const title = screen.getByText('Currency Converter');
    fireEvent.click(title);

    expect(mockPush).toHaveBeenCalledWith('/');
  });
});
