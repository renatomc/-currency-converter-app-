import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const PageButton = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.surface)};
  color: ${({ isActive, theme }) => (isActive ? '#fff' : theme.colors.text)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  min-width: 36px;

  &:hover {
    opacity: 0.85;
  }
`;

export const NavButton = styled.button<{ disabled?: boolean }>`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;

export const Ellipsis = styled.span`
  padding: 6px 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`;


