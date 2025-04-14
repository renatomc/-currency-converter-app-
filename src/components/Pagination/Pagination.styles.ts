import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  padding: 0 1rem;
  overflow-x: auto;

  @media (max-width: 480px) {
    justify-content: flex-start;
    gap: 4px;
  }
`;


type PageButtonProps = {
  isActive: boolean;
};

export const PageButton = styled.button<PageButtonProps>`
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.surface)};
  color: ${({ isActive, theme }) => (isActive ? '#fff' : theme.colors.text)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 6px 10px;
  min-width: 36px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

