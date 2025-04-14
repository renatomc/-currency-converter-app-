import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme?.colors.surface};
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme?.colors?.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.25rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 0.5rem;
  }
`;
