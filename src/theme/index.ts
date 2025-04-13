import { lightTheme } from './light';
import { darkTheme } from './dark';
import { Theme } from './types';

export const getTheme = (mode: 'light' | 'dark'): Theme =>
  mode === 'light' ? lightTheme : darkTheme;

export { lightTheme, darkTheme };
export type { Theme };
