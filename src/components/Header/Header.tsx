'use client';

import { HeaderContainer, HeaderTitle, ThemeToggleButton } from './Header.styles';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <HeaderTitle>Bem-vindo, Usuário</HeaderTitle>

      <ThemeToggleButton onClick={toggleTheme}>
        {theme === 'light' ? (
          <>
            <Moon size={18} />
            Tema Escuro
          </>
        ) : (
          <>
            <Sun size={18} />
            Tema Claro
          </>
        )}
      </ThemeToggleButton>
    </HeaderContainer>
  );
};
