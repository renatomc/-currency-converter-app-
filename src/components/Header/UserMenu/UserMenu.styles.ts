import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const MenuButton = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;

    svg {
      color: #fff;
    }
  }

  svg {
    transition: color 0.3s;
  }
`;

export const DropDown = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  z-index: 20;
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  min-width: 160px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  padding: 10px 14px;
  font-size: 0.875rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  svg {
    flex-shrink: 0;
  }
`;
