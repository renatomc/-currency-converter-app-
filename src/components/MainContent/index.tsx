'use client';

import { ReactNode } from 'react';
import styled from '@emotion/styled';

const Container = styled.main`
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
`;

interface MainContentProps {
  children: ReactNode;
}

export const MainContent = ({ children }: MainContentProps) => {
  return <Container>{children}</Container>;
};
