import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './page';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@/context/ThemeContext';
import { store } from '@/store';

describe('Home Page', () => {
  it('renders CurrencyTable component', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
