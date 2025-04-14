import '@emotion/react';
import { Theme as ThemeType } from '@/theme/types';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {
    aditionalProperty?: string;
  };
}
