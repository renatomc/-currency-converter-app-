import styled from '@emotion/styled';

type ButtonProps = {
  variant: 'primary' | 'secondary'
};

export const ButtonComponent = styled.button<ButtonProps>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;

  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.primary : theme.colors.secondary};

  &:hover {
    opacity: 0.9;
  }
`;
