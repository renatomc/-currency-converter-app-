import { render, screen } from '@testing-library/react';
import SettingsPage from './page';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider } from '@/context/ThemeContext';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));


describe('SettingsPage', () => {
  it('renders the SettingsForm and page title', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <SettingsPage />
        </ThemeProvider>
      </Provider>
    );

    expect(
      screen.getByRole('heading', { name: 'Configurações do Usuário' })
    ).toBeInTheDocument();

    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByLabelText('Sobrenome')).toBeInTheDocument();
    expect(screen.getByLabelText('País')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
  });
});
