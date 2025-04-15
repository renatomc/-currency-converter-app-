'use client';

import { createContext, ReactNode, useContext } from 'react';
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import { globalStyles } from '@/styles/global';
import { useSelector } from 'react-redux';
import { useThemeMode } from '@/hooks/useThemeMode';
import { getTheme } from '@/theme';
import { RootState } from '@/store/rootReducer';


const ThemeContext = createContext({} as ReturnType<typeof useThemeMode>);

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { primaryColor, secondaryColor } = useSelector((state: RootState) => state.user);
  const { theme, toggleTheme } = useThemeMode();

  const baseTheme = getTheme(theme);

  const dynamicTheme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: primaryColor || baseTheme.colors.primary,
      secondary: secondaryColor || baseTheme.colors.secondary,
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <EmotionThemeProvider theme={dynamicTheme}>
        <Global styles={globalStyles(dynamicTheme)} />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
