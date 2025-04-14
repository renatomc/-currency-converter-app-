export interface CurrencyRate {
  success?: boolean;
  timestamp: number;
  base?: string;
  date?: string;
  rates?: Record<string, number>;
}

export type SortKey = 'currency' | 'valueInBRL' | 'timestamp';
export type SortOrder = 'asc' | 'desc';
