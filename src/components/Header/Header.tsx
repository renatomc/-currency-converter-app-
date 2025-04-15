'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';

import { useTheme } from '@/context/ThemeContext';
import { UserMenu } from './UserMenu';
import { Sun, Moon } from 'lucide-react';

import { HeaderContainer, HeaderTitle, ThemeToggleButton, HeaderTitleWrapper, UserName, ControllsWrapper } from './Header.styles';
import { useRouter } from 'next/navigation';


export function Header() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const handleClicklogo = () => {
    router.push('/');
  }

  const user = useSelector((state: RootState) => state.user);

  return (
    <HeaderContainer>
      <HeaderTitleWrapper>
        <HeaderTitle onClick={handleClicklogo}>
          Currency Converter
        </HeaderTitle>
        <UserName>
          {user.firstName ? `Bem vindo, ${user.firstName}!` : 'Bem vindo!'}
        </UserName>
      </HeaderTitleWrapper>
      <ControllsWrapper>
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
        <UserMenu />
      </ControllsWrapper>
    </HeaderContainer>
  );
};
