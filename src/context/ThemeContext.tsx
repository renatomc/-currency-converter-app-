'use client';

import { createContext, ReactNode, useContext } from 'react';
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import { globalStyles } from '@/styles/global';
import { useThemeMode } from '@/hooks/useThemeMode';
import { getTheme } from '@/theme';


const ThemeContext = createContext({} as ReturnType<typeof useThemeMode>);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, toggleTheme } = useThemeMode();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <EmotionThemeProvider theme={getTheme(theme)}>
        <Global styles={globalStyles(getTheme(theme))} />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
