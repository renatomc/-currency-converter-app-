import { render, screen, fireEvent } from '@testing-library/react';
import { RegisterForm } from './RegisterForm';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider } from '@emotion/react';
import { act } from 'react';
import '@testing-library/jest-dom';
import { lightTheme } from '@/theme';

const mockPush = jest.fn();
const mockDispatch = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

const renderWithProviders = () =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <RegisterForm />
      </ThemeProvider>
    </Provider>
  );

describe('RegisterForm', () => {
  it('renders all fields and the submit button', () => {
    renderWithProviders();

    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Sobrenome')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('País')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', async () => {
    renderWithProviders();

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /cadastrar/i }));
    });

    expect(await screen.findByText('Nome é obrigatório')).toBeInTheDocument();
    expect(await screen.findByText('Sobrenome é obrigatório')).toBeInTheDocument();
    expect(await screen.findByText('País é obrigatório')).toBeInTheDocument();
    expect(await screen.findByText('E-mail inválido')).toBeInTheDocument();
  });

  it('submits valid data and dispatches action', async () => {
    renderWithProviders();

    fireEvent.change(screen.getByPlaceholderText('Nome'), {
      target: { value: 'Renato' },
    });
    fireEvent.change(screen.getByPlaceholderText('Sobrenome'), {
      target: { value: 'Martinez' },
    });
    fireEvent.change(screen.getByPlaceholderText('País'), {
      target: { value: 'Brasil' },
    });
    fireEvent.change(screen.getByPlaceholderText('E-mail'), {
      target: { value: 'renato@email.com' },
    });

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /cadastrar/i }));
    });

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockPush).toHaveBeenCalledWith('/');
  });
});
