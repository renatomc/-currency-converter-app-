import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CurrencyTable } from './CurrencyTable';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { fetchCurrencies } from '@/services/currencyServices';
import { lightTheme } from '@/theme';

jest.mock('@/services/currencyServices', () => ({
  fetchCurrencies: jest.fn(),
}));

const mockRates = [
  {
    currency: 'USD',
    valueInBRL: 5.15,
    timestamp: '14/04/2025, 08:00',
  },
  {
    currency: 'EUR',
    valueInBRL: 6.12,
    timestamp: '14/04/2025, 08:00',
  },
  {
    currency: 'JPY',
    valueInBRL: 0.035,
    timestamp: '14/04/2025, 08:00',
  },
];

describe('CurrencyTable', () => {
  beforeEach(() => {
    (fetchCurrencies as jest.Mock).mockResolvedValue(mockRates);
  });

  it('renders table headers and rows', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <CurrencyTable />
        </ThemeProvider>
      </Provider>
    );

    expect(await screen.findByText(/moeda/i)).toBeInTheDocument();
    expect(screen.getByText(/valor \(em BRL\)/i)).toBeInTheDocument();
    expect(screen.getByText(/horário/i)).toBeInTheDocument();
    expect(await screen.findByText('USD')).toBeInTheDocument();
    expect(screen.getByText('R$ 5.15')).toBeInTheDocument();
  });

  it('allows sorting when header is clicked', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <CurrencyTable />
        </ThemeProvider>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('USD')).toBeInTheDocument();
    });

    const header = screen.getByText(/moeda/i);
    fireEvent.click(header);
    fireEvent.click(header); 
  });

  it('displays pagination', async () => {
    (fetchCurrencies as jest.Mock).mockResolvedValue(
      Array.from({ length: 20 }, (_, i) => ({
        currency: `CUR${i + 1}`,
        valueInBRL: 1.0 + i,
        timestamp: '14/04/2025, 08:00',
      }))
    );

    render(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <CurrencyTable />
        </ThemeProvider>
      </Provider>
    );

    expect(await screen.findByText('CUR1')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2' })).toBeInTheDocument();
  });
});
