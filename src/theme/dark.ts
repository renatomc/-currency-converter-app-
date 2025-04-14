import { Theme } from './types';

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    background: '#111827',
    surface: '#1F2937',
    primary: '#60A5FA',
    secondary: '#3C98D1',
    text: '#F9FAFB',
    textSecondary: '#D1D5DB',
    border: '#374151',
    error: '#F87171',
  },
  breakpoints: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};
