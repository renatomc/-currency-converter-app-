import '@emotion/react';
import { ThemeType } from '@/styles/themes';

declare module '@emotion/react' {
  export type Theme = ThemeType;
}
