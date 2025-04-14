import '@emotion/react';
import { Theme as ThemeType } from '@/theme/types';

declare module '@emotion/react' {
  export type Theme = ThemeType;
}
