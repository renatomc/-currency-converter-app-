import styled from '@emotion/styled';
import { media } from '@/styles/media';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  ${media.down('sm')} {
    padding: 1rem;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};

  ${media.down('sm')} {
    font-size: 1.25rem;
  }
`;

export const UserName = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const HeaderTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  ${media.down('sm')} {
    gap: 0.125rem;
  }
`;

export const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  transition: all 0.3s ease;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  svg {
    flex-shrink: 0;
  }
`;

export const ControllsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${media.down('sm')} {
    width: 100%;
    justify-content: space-between;
  }
`;
