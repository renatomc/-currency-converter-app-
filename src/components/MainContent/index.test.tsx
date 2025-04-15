import { render, screen } from '@testing-library/react';
import { MainContent } from '.';

describe('MainContent', () => {
  it('renders children inside the container', () => {
    render(
      <MainContent>
        <p>Conteúdo de Teste</p>
      </MainContent>
    );

    expect(screen.getByText('Conteúdo de Teste')).toBeInTheDocument();
  });
});
