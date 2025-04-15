import { render, screen, fireEvent } from '@testing-library/react';
import { UserEditModal } from './UserEditModal';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '@/theme';
import { store } from '@/store';
import '@testing-library/jest-dom';

const mockUser = {
  firstName: 'Renato',
  lastName: 'Martinez',
  country: 'Brasil',
  email: 'renato@email.com',
  primaryColor: '#005AA5',
  secondaryColor: '#3C98D1',
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => mockUser,
  useDispatch: () => jest.fn(),
}));

describe('UserEditModal', () => {
  const onCloseMock = jest.fn();

  const renderModal = () =>
    render(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <UserEditModal isOpen={true} onClose={onCloseMock} />
        </ThemeProvider>
      </Provider>
    );

  it('renders the modal with pre-filled data', () => {
    renderModal();

    expect(screen.getByPlaceholderText('Nome')).toHaveValue(mockUser.firstName);
    expect(screen.getByPlaceholderText('Sobrenome')).toHaveValue(mockUser.lastName);
    expect(screen.getByPlaceholderText('País')).toHaveValue(mockUser.country);
    expect(screen.getByPlaceholderText('E-mail')).toHaveValue(mockUser.email);
  });

  it('calls onClose when clicking "Cancelar" button', () => {
    renderModal();

    fireEvent.click(screen.getByRole('button', { name: /cancelar/i }));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('calls onClose when clicking close (×) button', () => {
    renderModal();

    fireEvent.click(screen.getByText('×'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('updates input fields and clicks save', () => {
    renderModal();

    fireEvent.change(screen.getByPlaceholderText('Nome'), {
      target: { value: 'João' },
    });

    expect(screen.getByPlaceholderText('Nome')).toHaveValue('João');

    fireEvent.click(screen.getByRole('button', { name: /salvar/i }));
    expect(onCloseMock).toHaveBeenCalled();
  });
});
