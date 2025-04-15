import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { SettingsForm } from './SettingsForm';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider } from '@/context/ThemeContext';
import { act } from 'react';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('SettingsForm', () => {
  it('renders all input fields and color pickers', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <SettingsForm />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByLabelText('Sobrenome')).toBeInTheDocument();
    expect(screen.getByLabelText('País')).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Salvar Alterações')).toBeInTheDocument();
  });

  it('allows user to update fields and save changes', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <SettingsForm />
        </ThemeProvider>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText('Nome'), {
      target: { value: 'João' },
    });

    fireEvent.change(screen.getByLabelText('Sobrenome'), {
      target: { value: 'Silva' },
    });

    fireEvent.change(screen.getByLabelText('País'), {
      target: { value: 'Brasil' },
    });

    fireEvent.change(screen.getByLabelText('E-mail'), {
      target: { value: 'joao@exemplo.com' },
    });

    act(() => {
      fireEvent.click(screen.getByText('Salvar Alterações'));
    });

    const state = store.getState().user;
    expect(state.firstName).toBe('João');
    expect(state.lastName).toBe('Silva');
    expect(state.country).toBe('Brasil');
    expect(state.email).toBe('joao@exemplo.com');
  });
});
