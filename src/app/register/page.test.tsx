import { render, screen } from '@testing-library/react';
import RegisterPage from './page';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@/context/ThemeContext';
import { store } from '@/store';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('RegisterPage', () => {
  it('renders the RegisterForm', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <RegisterPage />
        </ThemeProvider>
      </Provider>
    );

    const firstNameInput = screen.getByPlaceholderText("Nome");
    expect(firstNameInput).toBeInTheDocument();
  });
});
