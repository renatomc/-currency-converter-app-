import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { UserMenu } from './UserMenu';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { store } from '@/store';
import { lightTheme } from '@/theme';
import '@testing-library/jest-dom';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('UserMenu', () => {
  beforeEach(() => {
    store.dispatch({
      type: 'user/setUserData',
      payload: {
        firstName: 'Renato',
        lastName: 'Martinez',
        country: 'BR',
        email: 'teste@b3.com.br',
      },
    });
  });

  const renderWithProviders = () =>
    render(
      <div>
        <Provider store={store}>
          <ThemeProvider theme={lightTheme}>
            <UserMenu />
          </ThemeProvider>
        </Provider>
        <div data-testid="outside">Outside Element</div>
      </div>
    );

  it('renders user name or fallback', () => {
    renderWithProviders();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/Renato Martinez/i)).toBeInTheDocument();
  });

  it('opens dropdown and shows options', () => {
    renderWithProviders();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Cadastro')).toBeInTheDocument();
    expect(screen.getByText('Editar Perfil')).toBeInTheDocument();
    expect(screen.getByText('Configurações')).toBeInTheDocument();
    expect(screen.getByText('Sair')).toBeInTheDocument();
  });

  it('opens and closes the edit modal when Editar Perfil is clicked', async () => {
    renderWithProviders();
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Editar Perfil'));
  
    const input = screen.getByPlaceholderText('Nome');
    expect(input).toBeInTheDocument();
  
    fireEvent.click(screen.getByText('×'));
  
    await waitForElementToBeRemoved(() => screen.queryByPlaceholderText('Nome'));
  });

  it('calls logout and navigates to home', () => {
    renderWithProviders();
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Sair'));

    const state = store.getState();
    expect(state.user.firstName).toBe('');
    expect(mockPush).toHaveBeenCalledWith('/');
  });

  it('closes the dropdown when clicking outside', async () => {
    renderWithProviders();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Cadastro')).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId('outside'));
    await waitFor(() => {
      expect(screen.queryByText('Cadastro')).not.toBeVisible();
    });
  });
});
