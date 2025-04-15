import { api } from './api';
import { fetchCurrencies } from './currencyServices';

jest.mock('./api');

describe('fetchCurrencies', () => {
  it('should fetch and convert currencies to BRL', async () => {
    const mockResponse = {
      data: {
        success: true,
        timestamp: 1744601643,
        base: 'EUR',
        date: '2025-04-14',
        rates: {
          USD: 1.2,
          BRL: 6.0,
          EUR: 1,
        },
      },
    };

    (api.get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await fetchCurrencies();

    expect(api.get).toHaveBeenCalledWith('/latest');
    expect(result).toEqual([
      {
        currency: 'USD',
        valueInBRL: 6.0 / 1.2,
        timestamp: '14/04/2025, 00:34',
      },
      {
        currency: 'BRL',
        valueInBRL: 1,
        timestamp: '14/04/2025, 00:34',
      },
      {
        currency: 'EUR',
        valueInBRL: 6.0 / 1,
        timestamp: '14/04/2025, 00:34',
      },
    ]);
  });
});
