import { api } from "./api";

interface LatestResponse {
  success: boolean;
  timestamp: number; 
  base: string;
  date: string;
  rates: Record<string, number>;
}

export interface CurrencyRate {
  currency: string;
  valueInBRL: number;
  timestamp: number | string;
}

export const fetchCurrencies = async (): Promise<CurrencyRate[]> => {
  const response = await api.get<LatestResponse>('/latest');

  const { rates, timestamp } = response.data;

  const baseInBRL = rates.BRL;

  const convertedRates = Object.entries(rates).map(([currency, value]) => {
    return {
      currency,
      valueInBRL: currency === 'BRL' ? 1 : baseInBRL / value,
      timestamp:  new Date(Number(timestamp) * 1000).toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
  });

  return convertedRates;
};
