import { Theme } from './types';

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    background: '#F9FAFB',
    surface: '#FFFFFF',
    primary: '#005AA5',
    secondary: '#3C98D1',
    text: '#1F2937',
    textSecondary: '#4B5563',
    border: '#E5E7EB',
    error: '#DC2626',
  },
  breakpoints: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};
